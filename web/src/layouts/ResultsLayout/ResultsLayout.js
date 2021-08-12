import { useContext } from 'react'
import { useLocation, useParams } from '@redwoodjs/router'
import { SearchContext } from 'src/contexts/SearchContext'
import Search from 'src/components/Search'
import SelectAnotherCable from 'src/components/SelectAnotherCable'
import Navigation from 'src/components/Navigation'

const ResultsLayout = ({ children, showNavigation, selectAnotherCable, fullWidth }) => {
  const searchContext = useContext(SearchContext)
  const location = useLocation()
  const params = useParams()
  const type = params.ids ? params.id : location.pathname.split("/")[1]

  return (
    <>
      <Search items={searchContext}/>
      { showNavigation &&
        <Navigation>
        { selectAnotherCable &&
          <SelectAnotherCable items={searchContext.filter(d => d.url.includes(type))} type={type} />
        }
        </Navigation>
      }
      <div className={"pb-6 " + (fullWidth ? "" : "px-8") }>{children}</div>
    </>
  )
}

export default ResultsLayout
