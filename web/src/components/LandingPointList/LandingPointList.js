import { useState, useEffect, useContext } from 'react'
import { MapContext } from 'src/contexts/MapContext'
import { Link, routes } from '@redwoodjs/router'
import RemoveButton from 'src/components/RemoveButton'

const LandingPointList = ({ landingPoints, ids }) => {
  const [hover, setHover] = useState(null)
  const mapContext = useContext(MapContext)

  const displayName = d => {
    return d.is_tbd ? `t.b.d., ${d.country}` : d.name
  }

  useEffect(() => {
    if (mapContext) {
      if (hover && mapContext.landingPoints.getFeatureById(hover.id)) {
        mapContext.openInfoWindow({
          position:mapContext.getPointPosition(hover.id),
          content:`<div class="tooltip">${displayName(hover)}<div class="tooltip-pointer"></div></div>`
        })
        ga('send', 'event', 'Landing Point', 'Sidebar Mouseover', hover.id)
      } else {
        mapContext.infoWindow.close()
      }
    }
  }, [hover])

  return (
    <>
      <h3>{ ids ? "Selection" : "Landing Points" }</h3>
      <ul>
        { landingPoints.map(d =>
          <li key={d.id} onMouseEnter={() => setHover(d)} onMouseLeave={() => setHover(null)}>
          { d.is_tbd ? (
            <a className="cursor-not-allowed text-gray-500 hover:text-gray-600">{displayName(d)}</a>
          ) : (
            <Link to={routes.landingPoint({ id: d.id }) } >{displayName(d)}</Link>
          ) }
          { ids && <RemoveButton item={d} hover={hover} ids={ids} type="landing-point"/> }
          </li>
        )
        }
      </ul>
    </>
  )
}

export default LandingPointList
