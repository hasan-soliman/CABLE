import { useEffect, useContext, useState } from 'react'
import useFetch from 'react-fetch-hook'
import { MapContext } from 'src/contexts/MapContext'
import { ResultsContext } from 'src/contexts/ResultsContext'
import ResultsHeader from 'src/components/ResultsHeader'
import SubmarineCableList from 'src/components/SubmarineCableList'

const LandingPointPage = ({ id }) => {
  const { data } = useFetch(`/api/v3/landing-point/${id}.json`)
  const mapContext = useContext(MapContext)
  const [state, dispatch] = useContext(ResultsContext)
  const [tooltipIsVisible, setTooltipIsVisible] = useState(null)

  const toggleTooltip = (toggle) => {
    setTooltipIsVisible(toggle)
  }

  useEffect(() => {
    if (data) {
      dispatch({ type: 'reset', payload: data })
      mapContext.selectLandingPoint(data)
      if (ga) {
        ga('send', 'pageview', `/landing-point/${id}`)
        ga('send', 'event', 'Landing Point', 'Select', id)
      }
    }
  }, [data])

  useEffect(() => {
    if (tooltipIsVisible) {
      mapContext.openInfoWindow({
        position:mapContext.getPointPosition(data.id),
        content:`<div class="tooltip">${data.name}<div class="tooltip-pointer"></div></div>`
      })
    } else {
      mapContext.infoWindow.close()
    }
  }, [tooltipIsVisible])

  return data ? (
    <>
      <ResultsHeader name={data.name} />
      <SubmarineCableList submarineCables={data.cables} toggleLandingTooltip={toggleTooltip} />
    </>
  ) : (
    <></>
  )
}

export default LandingPointPage
