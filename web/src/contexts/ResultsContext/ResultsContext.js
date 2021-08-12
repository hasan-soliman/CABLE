import { useReducer, createContext } from 'react'
import * as d3 from 'd3-collection'

export const ResultsContext = createContext(null)

const slug = (d) => {
  return d.replace(/^\s+|\s+$/g, '').toLowerCase().replace(/[^-a-z0-9~\s\.:;+=_]/g, '').replace(/[\s\.:;=+]+/g, '-');
}

const initialState = {
  selection: d3.map(),
  submarineCables: d3.map(),
  landingPoints: d3.map(),
  landingPointsInCountry: d3.map()
}

const reducer = (state, action) => {
  let newSelection = state.selection
  let newSubmarineCables = state.submarineCables
  let newLandingPoints = state.landingPoints
  let newLandingPointsInCountry = state.landingPointsInCountry

  switch (action.type) {
    case "add_cables":
      action.payload.forEach(function(payload) {
        newSelection.set(payload.id, payload)
        if (payload.cables) {
          payload.cables.forEach(function(cable) {
            newSubmarineCables.set(cable.id, cable)
          })
          payload.landing_points.forEach(d => newLandingPoints.set(d, d))
          if (payload.landing_points_in_country) {
            payload.landing_points_in_country.forEach(d => newLandingPointsInCountry.set(d, d))
          }
        } else {
          newSubmarineCables.set(payload.id, payload)
          payload.landing_points.forEach(d => newLandingPoints.set(d.id, d))
        }
      })
      return { ...state, selection: newSelection, submarineCables: newSubmarineCables, landingPoints: newLandingPoints, landingPointsInCountry: newLandingPointsInCountry }
    case "remove_cables":
      newLandingPoints.clear()
      newSubmarineCables.clear()
      newLandingPointsInCountry.clear()
      action.payload.forEach(d => newSelection.remove(d))
      newSelection.values().forEach(function(selection) {
        if (selection.cables) {
          selection.cables.forEach(function(cable) {
            newSubmarineCables.set(cable.id, cable)
          })
          selection.landing_points.forEach(d => newLandingPoints.set(d, d))
          if (selection.landing_points_in_country) {
            selection.landing_points_in_country.forEach(d => newLandingPointsInCountry.set(d, d))
          }
        } else {
          newSubmarineCables.set(selection.id, selection)
          selection.landing_points.forEach(d => newLandingPoints.set(d.id, d))
        }
      })
      return { ...state, selection: newSelection, submarineCables: newSubmarineCables, landingPoints: newLandingPoints, landingPointsInCountry: newLandingPointsInCountry }
    case "reset":
      newSelection.clear()
      newSubmarineCables.clear()
      newLandingPoints.clear()
      newLandingPointsInCountry.clear()
      newSelection.set(action.payload.id, action.payload)
      if (action.payload.cables) {
        action.payload.cables.forEach(function(cable) {
          newSubmarineCables.set(cable.id, cable)
        })
        action.payload.landing_points.forEach(d => newLandingPoints.set(d, d))
        if (action.payload.landing_points_in_country) {
          action.payload.landing_points_in_country.forEach(d => newLandingPointsInCountry.set(d, d))
        }
      } else {
        newSubmarineCables.set(action.payload.id, action.payload)
        action.payload.landing_points.forEach(d => newLandingPoints.set(d.id, d))
      }
      return { ...state, selection: newSelection, submarineCables: newSubmarineCables, landingPoints: newLandingPoints, landingPointsInCountry: newLandingPointsInCountry }
    default:
      throw new Error()
  }
}

export const ResultsContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <ResultsContext.Provider value={[state, dispatch]}>
      {props.children}
    </ResultsContext.Provider>
  )
}