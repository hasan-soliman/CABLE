// import HMN from '/images/hmn-technologies-logo.png'

const Sponsors = ({ inline, mobile }) => {
  if (mobile) {
    return (
      <div className="absolute top-14 right-2 text-right float-right bg-white p-2 rounded-sm shadow-sm text-right">
        <div className="text-xs text-gray-500 mb-2 leading-none">Sponsored by</div>
        <a href="https://www.hmntechnologies.com/en/?utm_medium=display&utm_source=corp_submarinecablemap&utm_campaign=alwayson" target="_blank" rel="noopener noreferrer">
          <img src='/images/hmn-technologies-logo.png' alt="HMN Technologies" width="89" height="44" className="inline-block w-auto h-8" />
        </a>
      </div>
    )
  }

  return (
    <div>
      <div className="text-left">
      { !inline && <div className="text-xs text-gray-500 mb-2 leading-none">Sponsored by</div> }
      <a href="https://www.hmntechnologies.com/en/?utm_medium=display&utm_source=corp_submarinecablemap&utm_campaign=alwayson" target="_blank" rel="noopener noreferrer">
        <img src='/images/hmn-technologies-logo.png' alt="HMN Technologies" width="89" height="44" className="inline-block w-auto h-11" />
      </a>
      </div>
    </div>
  )
}

export default Sponsors
