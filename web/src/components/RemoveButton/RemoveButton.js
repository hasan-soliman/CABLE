import { Link, routes } from '@redwoodjs/router'
import { XCircleIcon } from '@heroicons/react/solid'

const route = (item, ids, type) => {
  let filteredIds = [...ids].filter(d => d !== item.id)
  let route = filteredIds.length == 1 ? `/${type}/${filteredIds[0]}` : filteredIds.length > 1 ? routes.multiselect({ id:type, ids: filteredIds.join(",") }) : routes.home()
  return route
}

const RemoveButton = ({ item, hover, ids, type }) => {
  return (hover && hover.id == item.id) ? (
    <Link to={route(item, ids, type)} ><XCircleIcon className="inline-block w-5 h-5 ml-1 -mt-1 text-gray-400 hover:text-tg-blue-darker" /></Link>
  ) : (
    <></>
  )
}

export default RemoveButton
