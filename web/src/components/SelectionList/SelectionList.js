import { useContext, useState, useEffect } from 'react'
import { Link, routes } from '@redwoodjs/router'
import { MapContext } from 'src/contexts/MapContext'
import RemoveButton from 'src/components/RemoveButton'

const SelectionList = ({ selectionType, selection, items, ids }) => {
  const [hover, setHover] = useState(null)

  return (
    <>
      <h3>Selection</h3>
      <ul>
        { items.map(d => (
          <li key={d.id} onMouseEnter={() => setHover(d)} onMouseLeave={() => setHover(null)}>
            <Link to={"/" + selectionType.id + "/" + d.id} className="text-tg-blue hover:text-tg-blue-darker">
              {d.name}
            </Link>
            <RemoveButton item={d} hover={hover} ids={ids} type={selectionType.id} />
          </li>
        )) }
      </ul>
    </>
  )
}

export default SelectionList
