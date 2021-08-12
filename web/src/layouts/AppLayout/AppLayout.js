import { useContext } from 'react'
import useFetch from 'react-fetch-hook'
import { MapContextProvider } from 'src/contexts/MapContext'
import { ResultsContextProvider } from 'src/contexts/ResultsContext'
import { SearchContextProvider } from 'src/contexts/SearchContext'
import Header from 'src/components/Header'
import ZoomControl from 'src/components/ZoomControl'
import LastUpdated from 'src/components/LastUpdated'

const AppLayout = ({ children }) => {
  return (
    <div className="h-screen md:flex">
      <div className="h-1/2 md:h-screen md:flex-grow relative md:h-screen">
        <div className="h-full pt-12 md:pt-0">
          <div id="map" className="h-full"></div>
        </div>
        <LastUpdated />
      </div>
      <div className="h-1/2 md:flex-none md:w-96 2xl:w-112 md:h-screen overflow-y-auto bg-gray-50">
        <div className="flex flex-wrap content-between h-screen">
          <div className="w-full">
            <Header />
              <SearchContextProvider>
                <ResultsContextProvider>
                    <MapContextProvider mapElement="map">
                      <ZoomControl />
                      {children}
                    </MapContextProvider>
                </ResultsContextProvider>
              </SearchContextProvider>
          </div>
          <div className="w-full py-4 mt-4 px-8 border-t text-xs">Copyright © 2021 PriMetrica, Inc. All Rights Reserved.</div>
        </div>
      </div>
    </div>
  )
}

export default AppLayout
