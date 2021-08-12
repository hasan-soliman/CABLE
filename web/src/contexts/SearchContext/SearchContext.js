import { createContext } from 'react'
import useFetch from 'react-fetch-hook'

export const SearchContext = createContext(null)

export const SearchContextProvider = props => {
  const { data } = useFetch('/api/v3/search.json')

  return data ? (
    <SearchContext.Provider value={data}>
      {props.children}
    </SearchContext.Provider>
  ) : (
    <></>
  )
}