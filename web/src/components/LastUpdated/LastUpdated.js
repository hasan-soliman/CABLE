import useFetch from 'react-fetch-hook'

const LastUpdated = () => {
  const { data } = useFetch('/api/v3/config.json')

  const formatDate = (time) => {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    let d = new Date(time)
    return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
  }

  return data ? (
    <a href="https://github.com/telegeography/www.submarinecablemap.com" target="_blank" rel="noopener noreferrer" className="block absolute bottom-4 right-1 z-50 text-xs text-tg-blue">Last updated {formatDate(data.creation_time)}</a>
  ) : (
    <></>
  )
}

export default LastUpdated
