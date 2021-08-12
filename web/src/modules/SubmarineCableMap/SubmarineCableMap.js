import { navigate, routes } from '@redwoodjs/router'
import marker from './images/marker.png'

class SubmarineCableMap {
  static mapStyles = [
    { featureType: 'water', elementType: 'geometry.fill', stylers: [{ color: '#ffffff' }, { visibility: 'on' }]},
    { featureType: 'landscape', stylers: [{ visibility: 'on' },{ color: '#E5E7EB' }]},
    { featureType: 'administrative', elementType: 'geometry.stroke', stylers: [{ color: '#B7BCC5' }] },
    { elementType: 'labels.text.fill', stylers: [{ color: '#9CA3AF' }]},
    { elementType: 'labels.text.stroke', stylers: [{ visibility: 'off' }]},
    { featureType: 'poi', stylers: [{ visibility: 'off' }]},
    { featureType: 'road', stylers: [{ visibility: 'off' }]},
    { featureType: 'transit', stylers: [{ visibility: 'off' }]},
    { featureType: 'administrative.locality', stylers: [{ visibility: 'off' }]},
    { featureType: 'administrative.neighborhood', stylers: [{ visibility: 'off' }]},
    { featureType: 'administrative.land_parcel', stylers: [{ visibility: 'off' }]},
    { featureType: 'administrative.province', stylers: [{ visibility: 'off' }]}
  ]

  addSubmarineCables() {
    this.submarineCables = new google.maps.Data({map:this.map})
    this.submarineCables.addGeoJson(this.submarineCableJSON, { idPropertyName: "feature_id" })
    this.submarineCables.setStyle((d) => this.submarineCableStyle(d))
  }

  addLandingPoints() {
    this.landingPoints = new google.maps.Data({map:this.map})
    this.landingPoints.addGeoJson(this.landingPointJSON, { idPropertyName: "id" })
    this.landingPoints.setStyle(this.landingPointStyle())
  }

  addListeners() {
    google.maps.event.addListener(this.map, 'click', () => {
      navigate(routes.home())
    })
    this.submarineCables.addListener('click', (e) => {
      navigate(routes.submarineCable({ id: e.feature.getProperty('id') }))
    })
    this.landingPoints.addListener('click', (e) => {
      navigate(routes.landingPoint({ id: e.feature.getProperty('id') }))
    })
    this.landingPoints.addListener('mouseover', (e) => {
      this.openInfoWindowHover({ position:e.feature.getGeometry().get(), content:`<div class="tooltip">${e.feature.getProperty('name')}<div class="tooltip-pointer"></div></div>` })
    })
    this.submarineCables.addListener('mousemove', (e) => {
      this.openInfoWindowHover({ position:e.latLng, content:`<div class="cable tooltip" style="background-color:${e.feature.getProperty('color')}; border-top-color:${e.feature.getProperty('color')};">${e.feature.getProperty('name')}<div class="tooltip-pointer"></div></div>` })
    })
    this.landingPoints.addListener('mouseout', () => this.infoWindowHover.close())
    this.submarineCables.addListener('mouseout', () => this.infoWindowHover.close())
  }

  filterSubmarineCables(ids) {
    this.submarineCables.setStyle((feature) => {
      if (ids.includes(feature.getProperty('id'))) {
        return this.submarineCableStyle(feature)
      } else {
        return this.submarineCableStyle(feature, null)
      }
    })
  }

  filterLandingPoints(ids) {
    this.landingPoints.setStyle((feature) => {
      if (ids.includes(feature.getProperty('id'))) {
        return this.landingPointStyle(feature)
      } else {
        return this.landingPointStyle(feature, null)
      }
    })
  }

  selectSubmarineCables(data) {
    this.infoWindow.close()
    this.infoWindowHover.close()
    this.filterSubmarineCables(data.cables.map(d => d.id))
    this.filterLandingPoints(data.landing_points[0].id ? data.landing_points.map(d => d.id) : data.landing_points)
    this.boundMap(data.landing_points_in_country ? data.landing_points_in_country : (data.landing_points ? data.landing_points : null))
  }

  selectSubmarineCable(data) {
    this.infoWindow.close()
    this.infoWindowHover.close()
    this.filterSubmarineCables([data.id])
    this.filterLandingPoints(data.landing_points.map(d => d.id))
    this.boundMap(data.landing_points)
  }

  selectLandingPoint(data) {
    this.selectSubmarineCables(data)
    let position = this.getPointPosition(data.id)
    this.openInfoWindow({ position:position, content:`<div class="tooltip">${data.name}<div class="tooltip-pointer"></div></div>` })
  }

  openInfoWindow(options) {
    this.infoWindow.setOptions(options)
    this.infoWindow.open(this.map)
  }

  openInfoWindowHover(options) {
    this.infoWindowHover.setOptions(options)
    this.infoWindowHover.open(this.map)
  }

  getPointPosition(id) {
    let geometry = this.landingPoints.getFeatureById(id).getGeometry().get()
    return new google.maps.LatLng({ lat:geometry.lat(), lng:geometry.lng() })
  }

  getSubmarineCableCentroid(id) {
    let centroid = this.submarineCables.getFeatureById(id).getProperty("coordinates")
    return new google.maps.LatLng({ lat:centroid[1], lng:centroid[0] })
  }

  getSubmarineCableColor(id) {
    return this.submarineCables.getFeatureById(id).getProperty("color")
  }

  boundMap(landingPoints) {
    if (landingPoints) {
      const bounds = new google.maps.LatLngBounds()
      landingPoints.forEach(d => bounds.extend(this.getPointPosition(d.id ? d.id : d)))
      this.map.fitBounds(bounds)
    } else {
      this.map.setZoom(2)
      this.map.setCenter(new google.maps.LatLng(30.0,-30.0))
    }
  }

  resetMap() {
    this.infoWindow.close()
    this.infoWindowHover.close()
    this.submarineCables.setStyle((d) => this.submarineCableStyle(d))
    this.landingPoints.setStyle((d) => this.landingPointStyle(d))
  }

  submarineCableStyle(feature, isActive = true) {
    if (isActive) {
      return {strokeColor: `${feature.getProperty('color')}`, strokeWeight: 2.5, strokeOpacity: 1}
    } else {
      return {strokeColor: `${feature.getProperty('color')}`, strokeWeight: 2.5, strokeOpacity: 0.1}
    }
  }

  landingPointStyle(feature, isActive = true) {
    if (isActive) {
      return {icon: this.landingPointIcon()}
    } else {
      return {icon: this.landingPointIcon(), visible:false}
    }
  }

  landingPointIcon() {
    return { url:marker, size: new google.maps.Size(10, 10), anchor: new google.maps.Point(5, 5) }
  }

  createMap() {
    this.map = new google.maps.Map(document.getElementById(this.element), {
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: SubmarineCableMap.mapStyles,
      zoom: 3,
      maxZoom: 8,
      minZoom: 2,
      center: new google.maps.LatLng(30.0,-30.0),
      streetViewControl: false,
      mapTypeControl: false,
      fullscreenControl: false,
      zoomControl: false,
      // zoomControlOptions: { position: google.maps.ControlPosition.TOP_LEFT },
      disableDefaultUI: false
    })

    this.infoWindow = new google.maps.InfoWindow({pixelOffset: new google.maps.Size(0,-6)})
    this.infoWindowHover = new google.maps.InfoWindow({pixelOffset: new google.maps.Size(0,-6)})

    this.addSubmarineCables()
    this.addLandingPoints()
    this.addListeners()
  }

  constructor(element, submarineCableJSON, landingPointJSON) {
    this.element = element
    this.submarineCableJSON = submarineCableJSON
    this.landingPointJSON = landingPointJSON
    this.createMap()
    return this
  }

}

export default SubmarineCableMap