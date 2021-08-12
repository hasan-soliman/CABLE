import { useContext, useState, useEffect } from 'react'
import { Link, routes } from '@redwoodjs/router'
import { MapContext } from 'src/contexts/MapContext'
import RemoveButton from 'src/components/RemoveButton'

const SubmarineCableList = ({ submarineCables, xl, ids, toggleLandingTooltip, rfs, group_by_rfs}) => {
  const [hover, setHover] = useState(null)
  const mapContext = useContext(MapContext)

  useEffect(() => {
    if (hover) {
      let position = mapContext.getSubmarineCableCentroid(hover.id + "-0")
      let color = mapContext.getSubmarineCableColor(hover.id + "-0")
      mapContext.openInfoWindowHover({
        position:position,
        content:`<div class="cable tooltip" style="background-color:${color};border-top-color:${color};">${hover.name}<div class="tooltip-pointer"></div></div>`
      })
      ga('send', 'event', 'Cable', 'Sidebar Mouseover', hover.id)
    } else {
      mapContext.infoWindowHover.close()
    }
    if (toggleLandingTooltip) {
      toggleLandingTooltip(hover ? null : true)
    }
  }, [hover])

  return xl ? (
    <>
      { submarineCables.map(d => (
        <Link key={d.id} to={routes.submarineCable({ id: d.id }) } onMouseEnter={() => setHover(d)} onMouseLeave={() => setHover(null)}className="block bg-gray-50 text-black hover:bg-gray-150 hover:text-black py-2 px-8 border-b border-gray-200">{d.name}</Link>
      )) }
    </>
  ) : (
    <>
      <h3>{ids ? "Selection" : group_by_rfs ? "RFS " + rfs : "Submarine Cables"}</h3>
      <ul>
        { submarineCables.map(d => (
          <li key={d.id} onMouseEnter={() => setHover(d)} onMouseLeave={() => setHover(null)}>
            <Link to={routes.submarineCable({ id: d.id }) } className="text-tg-blue hover:text-tg-blue-darker">
              {d.name}{(!rfs && d.is_planned) ? <span className="inline-block align-middle ml-1 -mt-1 px-1.5 rounded-full border border-gray-400 text-xs text-gray-500">{d.rfs_year}</span> : ""}
            </Link>
            { ids && <RemoveButton item={d} hover={hover} ids={ids} type="submarine-cable"/> }
          </li>
        )) }
      </ul>
    </>
  )
}

export default SubmarineCableList
