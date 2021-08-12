import { Link, routes } from '@redwoodjs/router'

const Navigation = ({ children }) => {
  return (
    <div className="pb-2 px-4 mx-4 mt-4 pt-2 bg-white rounded-md">
      { children }
      <Link to={routes.home()} className="text-xs font-bold inline-block leading-5 my-1.5">Show All Cables</Link>
    </div>
  )
}

export default Navigation
