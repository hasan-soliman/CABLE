import { Link, routes } from '@redwoodjs/router'
import { ArrowCircleLeftIcon } from '@heroicons/react/outline'

export default () => (
  <div className="w-full h-screen bg-tg-blue-10">
    <div className="w-full md:w-1/2 px-4 mx-auto pt-48">
      <div className="w-full md:w-112">
        <h1 className="text-4xl mb-4">You have ventured into uncharted territory.</h1>
        <p className="text-xl mb-8">You may have mistyped the address or the page may have moved.</p>
        <Link to={routes.home()} className="font-bold inline-block leading-5 my-1.5 py-3 px-4 rounded-md bg-tg-blue-30 text-tg-blue">
          <ArrowCircleLeftIcon className="w-5 h-5 mr-1 float-left"/>
          <span>Return to the map</span>
        </Link>
      </div>
    </div>
  </div>
)
