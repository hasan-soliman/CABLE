import { useEffect, useContext, useState } from 'react'
import useFetch from 'react-fetch-hook'
import { MapContext } from 'src/contexts/MapContext'
import { ResultsContext } from 'src/contexts/ResultsContext'
import ResultsHeader from 'src/components/ResultsHeader'
import SubmarineCableList from 'src/components/SubmarineCableList'
import * as d3 from 'd3-collection'

const StatusPage = ({ id }) => {
  const { data } = useFetch(`/api/v3/status/${id}.json`)
  const mapContext = useContext(MapContext)
  const [state, dispatch] = useContext(ResultsContext)
  const [cableList, setCableList] = useState(null)

  useEffect(() => {
    if (data) {
      dispatch({ type: 'reset', payload: data })
      mapContext.selectSubmarineCables(data)
      if (ga) {
        ga('send', 'pageview', `/status/${id}`)
        ga('send', 'event', 'Status', 'Select', id)
      }
    }
  }, [data])

  const NestedList = () => {
    if (id == "planned") {
      let cables = d3.nest().key(d => d.rfs).entries(data.cables.sort((a, b) => (a.rfs > b.rfs) ? 1 : -1))
      return cables.map(d => <SubmarineCableList key={d.key} submarineCables={d.values.sort((a, b) => (a.id > b.id) ? 1 : -1)} group_by_rfs={true} rfs={d.key} />)
    } else {
      return <SubmarineCableList submarineCables={data.cables} />
    }
  }

  return data ? (
    <>
      <ResultsHeader name={data.name} />
      <NestedList />
    </>
  ) : (
    <></>
  )
}

export default StatusPage
