import { useState, useEffect, useContext } from 'react'
import useFetch from 'react-fetch-hook'
import { MapContext } from 'src/contexts/MapContext'
import { ResultsContext } from 'src/contexts/ResultsContext'
import ResultsHeader from 'src/components/ResultsHeader'
import SubmarineCableList from 'src/components/SubmarineCableList'
import SelectionList from 'src/components/SelectionList'
import LandingPointList from 'src/components/LandingPointList'
import Multiselect from 'src/components/Multiselect'

const MultiselectPage = ({ id, ids }) => {
  const mapContext = useContext(MapContext)
  const [state, dispatch] = useContext(ResultsContext)
  const [data, setData] = useState(null)
  const [add, setAdd] = useState(null)
  const [remove, setRemove] = useState(null)

  const sortName = (d) => {
    return d.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1)
  }

  const sortLandings = (d) => {
    return d.sort((a, b) => (a.country > b.country) ? 1 : (a.country === b.country) ? ((a.name > b.name) ? 1 : -1) : -1 )
  }

  const selectionListName = () => {
    switch(id) {
      case "submarine-cable": return "Submarine Cables"
      case "country": return "Countries"
      case "landing-point": return "Landing Points"
      case "ready-for-service": return "Ready For Service"
      case "status": return "Status"
      case "supplier": return "Suppliers"
      default: return ""
    }
  }

  useEffect(() => {
    if (ids) {
      let slugsToAdd = []
      let slugsToRemove = []
      let slugs = ids.split(",")
      let current = state.selection.values() ? state.selection.values().map(d => d.id) : []
      slugs.forEach((d) => !current.includes(d) && slugsToAdd.push(d))
      current.forEach((d) => !slugs.includes(d) && slugsToRemove.push(d))
      setAdd(slugsToAdd)
      setRemove(slugsToRemove)
    }
  }, [ids])

  useEffect(() => {
    if (add && add.length) {
      const urls = add.map(d => `/api/v3/${id == "submarine-cable" ? "cable" : id}/${d}.json`)
      Promise.all(urls.map(d => fetch(d)))
        .then(results => Promise.all(results.map(r => r.json())))
        .then(results => setData(results))
    }
  }, [add])

  useEffect(() => {
    if (remove && remove.length) {
      dispatch({ type: 'remove_cables', payload: remove })
      ga('send', 'event', 'Multiselect', 'Remove', remove.join(","))
    }
  }, [remove])

  useEffect(() => {
    if (data) {
      dispatch({ type: 'add_cables', payload: data })
      ga('send', 'event', 'Multiselect', 'Add', add.join(","))
    }
  }, [data])

  useEffect(() => {
    if (state.submarineCables.values().length > 1) {
      mapContext.selectSubmarineCables({
        cables:state.submarineCables.values(),
        landing_points:state.landingPoints.values(),
        landing_points_in_country: state.landingPointsInCountry.values().length > 0 ? state.landingPointsInCountry.values() : null
      })
      if (ga) {
        ga('send', 'pageview', `/multiselect/${id}/?ids=${ids}`)
      }
    }
  }, [state])

  const Results = () => {
    if (id == "submarine-cable") {
      return (
        <>
          <SubmarineCableList submarineCables={sortName(state.submarineCables.values())} ids={state.submarineCables.keys()} />
          <LandingPointList landingPoints={sortLandings(state.landingPoints.values())} />
        </>
      )
    } else if (id == "landing-point") {
      return (
        <>
          <LandingPointList landingPoints={sortLandings(state.selection.values())} ids={state.selection.keys()} />
          <SubmarineCableList submarineCables={sortName(state.submarineCables.values())} />
        </>
      )
    } else {
      return (
        <>
          <SelectionList selectionType={{ id: id, name:selectionListName() }} items={sortName(state.selection.values())} ids={state.selection.keys()} />
          <SubmarineCableList submarineCables={sortName(state.submarineCables.values())} />
        </>
      )
    }
  }

  return state.submarineCables.values() ? (
    <>
      <ResultsHeader name={selectionListName()} />
      <Results />
    </>
  ) : (
    <></>
  )
}

export default MultiselectPage
