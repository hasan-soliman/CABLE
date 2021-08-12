import { useState, useEffect, useContext } from 'react'
import { ResultsContext } from 'src/contexts/ResultsContext'

const Multiselect = ({ children, ids }) => {
  const [state, dispatch] = useContext(ResultsContext)
  const [data, setData] = useState(null)
  const [add, setAdd] = useState(null)
  const [remove, setRemove] = useState(null)

  const sortCables = (d) => {
    return d.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1)
  }

  const sortLandings = (d) => {
    return d.sort((a, b) => (a.country > b.country) ? 1 : (a.country === b.country) ? ((a.name > b.name) ? 1 : -1) : -1 )
  }

  useEffect(() => {
    if (ids) {
      let slugsToAdd = []
      let slugsToRemove = []
      let slugs = ids.split(",")
      let current = state.submarineCables.values() ? state.submarineCables.values().map(d => d.id) : []
      slugs.forEach((d) => !current.includes(d) && slugsToAdd.push(d))
      current.forEach((d) => !slugs.includes(d) && slugsToRemove.push(d))
      setAdd(slugsToAdd)
      setRemove(slugsToRemove)
    }
  }, [ids])

  useEffect(() => {
    if (add && add.length) {
      const urls = add.map(d => `/api/v3/cable/${d}.json`)
      Promise.all(urls.map(d => fetch(d)))
        .then(results => Promise.all(results.map(r => r.json())))
        .then(results => setData(results))
    }
  }, [add])

  useEffect(() => {
    if (remove && remove.length) {
      dispatch({ type: 'remove_cables', payload: remove })
    }
  }, [remove])

  useEffect(() => {
    if (data) {
      dispatch({ type: 'add_cables', payload: data })
    }
  }, [data])

  return <>{ children }</>
}

export default Multiselect
