import { useState, useEffect, createContext } from 'react'
import useFetch from 'react-fetch-hook'
import { Loader } from '@googlemaps/js-api-loader'
import SubmarineCableMap from 'src/modules/SubmarineCableMap'

export const MapContext = createContext(null)

export const MapContextProvider = ({ children, mapElement }) => {
  const submarineCables = useFetch('/api/v3/cable/cable-geo.json')
  const landingPoints = useFetch('/api/v3/landing-point/landing-point-geo.json')
  const [map, setMap] = useState(null)
  const [g, setG] = useState(null)

  const googleLoader = new Loader({
    apiKey: "AIzaSyC1PHXojVLLhjdUILGHUThAtGL51HIA7Ps",
    version: "weekly"
  })

  async function loadGoogle() {
    setG(await googleLoader.load())
  }

  useEffect(() => { loadGoogle() },[])

  useEffect(() => {
    if (window.google && submarineCables.data && landingPoints.data && !map) {
      setMap(new SubmarineCableMap(mapElement, submarineCables.data, landingPoints.data))
    }
  }, [g, submarineCables, landingPoints])

  return map ? (
    <MapContext.Provider value={map}>{children}</MapContext.Provider>
  ) : (
    <></>
  )
}