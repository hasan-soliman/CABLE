import { Link, routes } from '@redwoodjs/router'
import { useEffect, useContext } from 'react'
import useFetch from 'react-fetch-hook'
import { MapContext } from 'src/contexts/MapContext'
import { ResultsContext } from 'src/contexts/ResultsContext'
import ResultsHeader from 'src/components/ResultsHeader'
import LandingPointList from 'src/components/LandingPointList'
import SupplierList from 'src/components/SupplierList'

const SubmarineCablePage = ({ id }) => {
  const { data } = useFetch(`/api/v3/cable/${id}.json`)
  const mapContext = useContext(MapContext)
  const [state, dispatch] = useContext(ResultsContext)

  useEffect(() => {
    if (data) {
      dispatch({ type: 'reset', payload: data })
      mapContext.selectSubmarineCable(data)
      if (ga) {
        ga('send', 'pageview', `/submarine-cable/${id}`)
        ga('send', 'event', 'Cable', 'Select', id)
      }
    }
  }, [data])

  return data ? (
    <>
      <ResultsHeader name={data.name} />
      <ul>
        <li className="mb-2"><span className="block text-xs font-bold">RFS</span>
          <Link to={routes.readyForService({ id: data.rfs_year }) }>{data.rfs}</Link>
        </li>
        <li className="mb-2"><span className="block text-xs font-bold">Cable Length</span>{data.length ? data.length : "n.a."}</li>
        <li className="mb-2"><span className="block text-xs font-bold">Owners</span>{data.owners}</li>
        {data.suppliers && <li className="mb-2"><span className="block text-xs font-bold">Suppliers</span><SupplierList vendors={data.suppliers} /></li>}
        {data.url && <li className="mb-2"><span className="block text-xs font-bold">URL</span><a href={data.url}>{data.url}</a></li>}
        {data.notes && <li><span className="block text-xs font-bold">Notes</span>{data.notes}</li>}
      </ul>
      <LandingPointList landingPoints={data.landing_points} />
    </>
  ) : (
    <></>
  )
}

export default SubmarineCablePage
