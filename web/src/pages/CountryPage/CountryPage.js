import { useEffect, useContext } from 'react'
import useFetch from 'react-fetch-hook'
import { MapContext } from 'src/contexts/MapContext'
import { ResultsContext } from 'src/contexts/ResultsContext'
import ResultsHeader from 'src/components/ResultsHeader'
import SubmarineCableList from 'src/components/SubmarineCableList'

const CountryPage = ({ id }) => {
  const { data } = useFetch(`/api/v3/country/${id}.json`)
  const mapContext = useContext(MapContext)
  const [state, dispatch] = useContext(ResultsContext)

  useEffect(() => {
    if (data) {
      dispatch({ type: 'reset', payload: data })
      mapContext.selectSubmarineCables(data)
      if (ga) {
        ga('send', 'pageview', `/country/${id}`)
        ga('send', 'event', 'Country', 'Select', id)
      }
    }
  }, [data])

  return data ? (
    <>
      <ResultsHeader name={data.name} />
      <SubmarineCableList submarineCables={data.cables} />
    </>
  ) : (
    <></>
  )
}

export default CountryPage
