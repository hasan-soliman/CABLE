import { useState, useEffect } from 'react'
import Sponsors from 'src/components/Sponsors'
import { SearchIcon } from '@heroicons/react/outline'
import { PlusCircleIcon } from '@heroicons/react/outline'
import { ArrowSmRightIcon } from '@heroicons/react/outline'
import { XIcon } from '@heroicons/react/outline'

const About = ({ children }) => {
  const [open, setOpen] = useState(null)

  return (
    <>
      <a onClick={() => setOpen(true)} className="inline-block cursor-pointer text-gray-500 hover:text-gray-700">About</a>
      {open && (
        <div className="text-left text-base fixed inset-0 bg-gray-900 bg-opacity-80 z-50 p-4 lg:p-8">
          <div id="about" className="relative h-full mx-auto overflow-scroll lg:w-3/4 xl:w-3/5 bg-gray-50 rounded-md">
            <div className="mx-8 my-16 lg:mx-24">
              <XIcon onClick={() => setOpen(null)} className="cursor-pointer w-5 h-5 top-8 right-8 absolute"/>
              <a href="https://www2.telegeography.com/" aria-label="TeleGeography" target="_blank" rel="noopener noreferrer">{children}</a>
              <h2 className="text-2xl lg:text-3xl mb-2 lg:mb-3">Submarine Cable Map</h2>
              <p>The Submarine Cable Map is based on the authoritative data found in TeleGeography’s <a href="https://www2.telegeography.com/global-bandwidth-research-service" target="_blank" rel="noopener noreferrer">Global Bandwidth Research Service</a>.</p>

              <div className="hidden float-left lg:block mt-6 p-3 -ml-14 bg-tg-blue-20 rounded-lg">
                <SearchIcon className="w-5 h-5 text-tg-blue"/>
              </div>
              <h2 className="mt-8">Search Cables</h2>
              <p>The information presented on the map can be filtered by the following data points:</p>
              <ul className="ml-4 mb-2">
                <li><ArrowSmRightIcon className="w-4 h-4 mt-0.5 float-left mr-1.5" />Cable system name</li>
                <li><ArrowSmRightIcon className="w-4 h-4 mt-0.5 float-left mr-1.5" />Landing point name</li>
                <li><ArrowSmRightIcon className="w-4 h-4 mt-0.5 float-left mr-1.5" />Country connected</li>
                <li><ArrowSmRightIcon className="w-4 h-4 mt-0.5 float-left mr-1.5" />RFS (ready for service) year</li>
                <li><ArrowSmRightIcon className="w-4 h-4 mt-0.5 float-left mr-1.5" />Planned versus in service cable systems</li>
                <li><ArrowSmRightIcon className="w-4 h-4 mt-0.5 float-left mr-1.5" />Submarine cable supplier name</li>
              </ul>

              <p>Want to search by submarine cable owner? You can explore that data in our <a href="https://www2.telegeography.com/global-bandwidth-research-service" target="_blank" rel="noopener noreferrer">Global Bandwidth Research Service</a>.</p>

              <div className="hidden float-left lg:block mt-6 p-3 -ml-14 bg-tg-blue-20 rounded-lg">
                <PlusCircleIcon className="w-5 h-5 text-tg-blue"/>
              </div>
              <h2 className="mt-8">Multiselect</h2>
              <p>The multiselect feature enables the selection of multiple cables, landing points, countries, RFS years, and suppliers.</p>

              <h2 className="mt-8">Submarine Cables 101</h2>
              <p>To learn more about submarine cables and how we make this map, please visit <a href="http://www2.telegeography.com/submarine-cable-faqs-frequently-asked-questions?__hstc=196094579.1852b6f62ae5461a699aa7e80e055c6a.1620827506168.1626126220956.1626139254572.81&__hssc=196094579.1.1626139254572&__hsfp=3839890209" target="_blank" rel="noopener noreferrer">Submarine Cable Frequently Asked Questions</a>.</p>

              <h2 className="mt-8">Our Sponsors</h2>
              <p>This map was made possible in part by our sponsors. Please visit their site!</p>
              <Sponsors inline={true} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default About
