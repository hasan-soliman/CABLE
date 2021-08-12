import { useEffect, useContext } from 'react'
import useFetch from 'react-fetch-hook'
import { MapContext } from 'src/contexts/MapContext'
import { ResultsContext } from 'src/contexts/ResultsContext'
import ResultsHeader from 'src/components/ResultsHeader'
import SubmarineCableList from 'src/components/SubmarineCableList'

const SupplierPage = ({ id }) => {
  const { data } = useFetch(`/api/v3/supplier/${id}.json`)
  const mapContext = useContext(MapContext)
  const [state, dispatch] = useContext(ResultsContext)

  useEffect(() => {
    if (data) {
      dispatch({ type: 'reset', payload: data })
      mapContext.selectSubmarineCables(data)
      if (ga) {
        ga('send', 'pageview', `/supplier/${id}`)
        ga('send', 'event', 'Supplier', 'Select', id)
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

export default SupplierPage
