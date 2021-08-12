import { useContext } from 'react'
import { MapContext } from 'src/contexts/MapContext'
import { PlusIcon } from '@heroicons/react/outline'
import { MinusIcon } from '@heroicons/react/outline'


const ZoomControl = () => {
  const mapContext = useContext(MapContext)

  const zoomIn = () => {
    mapContext.map.setZoom(mapContext.map.getZoom()+1)
  }

  const zoomOut = () => {
    mapContext.map.setZoom(mapContext.map.getZoom()-1)
  }

  return (
    <div className="hidden md:block absolute top-4 left-4">
      <a onClick={zoomIn} className="block p-2 bg-tg-blue-20 cursor-pointer hover:bg-tg-blue-30 rounded-tl-md rounded-tr-md"><PlusIcon className="block w-5 h-5"/></a>
      <a onClick={zoomOut} className="block p-2 bg-tg-blue-20 cursor-pointer hover:bg-tg-blue-30 rounded-bl-md rounded-br-md border-t border-tg-blue-30"><MinusIcon className="block w-5 h-5"/></a>
    </div>
  )
}

export default ZoomControl
