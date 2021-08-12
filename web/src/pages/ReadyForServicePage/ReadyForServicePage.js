import { useEffect, useContext } from 'react'
import useFetch from 'react-fetch-hook'
import { MapContext } from 'src/contexts/MapContext'
import { ResultsContext } from 'src/contexts/ResultsContext'
import ResultsHeader from 'src/components/ResultsHeader'
import SubmarineCableList from 'src/components/SubmarineCableList'

const ReadyForServicePage = ({ id }) => {
  const { data } = useFetch(`/api/v3/ready-for-service/${id}.json`)
  const mapContext = useContext(MapContext)
  const [state, dispatch] = useContext(ResultsContext)

  useEffect(() => {
    if (data) {
      dispatch({ type: 'reset', payload: data })
      mapContext.selectSubmarineCables(data)
      if (ga) {
        ga('send', 'pageview', `/ready-for-service/${id}`)
        ga('send', 'event', 'RFS', 'Select', id)
      }
    }
  }, [data])

  return data ? (
    <>
      <ResultsHeader name={`Ready For Service In ${data.name}`} />
      <SubmarineCableList submarineCables={data.cables} rfs={id}/>
    </>
  ) : (
    <></>
  )
}

export default ReadyForServicePage
