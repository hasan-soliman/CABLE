import { useContext } from 'react'
import useFetch from 'react-fetch-hook'
import { Redirect, routes, useLocation } from '@redwoodjs/router'
import { MapContext } from 'src/contexts/MapContext'
import SubmarineCableList from 'src/components/SubmarineCableList'

const HomePage = () => {
  const { hash } = useLocation()
  if (hash) { return <Redirect to={hash.replace('#','')}/> }

  const { data } = useFetch('/api/v3/cable/all.json')
  const mapContext = useContext(MapContext)
  mapContext.resetMap()

  return data ? (
    <div>
      <h2 className="text-base px-8 py-2 pt-4">Submarine Cables</h2>
      <SubmarineCableList submarineCables={data} xl={true} />
    </div>
  ) : (
    <></>
  )
}

export default HomePage
