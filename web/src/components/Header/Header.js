import { useState, useEffect } from 'react'
import { Link, routes } from '@redwoodjs/router'
import About from 'src/components/About'
import Share from 'src/components/Share'
import Sponsors from 'src/components/Sponsors'
import Logo from './images/telegeography-logo.svg'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const Header = () => {
  const [mobile, setMobile] = useState(null)
  const [open, setOpen] = useState(null)

  const updateMedia = () => {
    setMobile(window.innerWidth < 768)
  }

  useEffect(() => { updateMedia() }, [])

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia)
  })

  const NavButton = () => {
    if (open) {
      return (
        <a onClick={() => setOpen(null)} className="block float-right w-6 h-6 mt-3 text-center align-middle text-black hover:text-black cursor-pointer">
          <XIcon className="inline-block w-5 h-5"/>
        </a>
      )
    } else {
      return (
        <a onClick={() => setOpen(true)} className="block float-right w-6 h-6 mt-3 text-center align-middle text-black hover:text-black cursor-pointer">
          <MenuIcon className="inline-block w-5 h-5"/>
        </a>
      )
    }
  }

  if (mobile) {
    return (
      <>
        <div onMouseLeave={() => setOpen(null)} className={"z-50 absolute w-full top-0 left-0 bg-white" + (open ? " shadow-md" : "")}>
          <div className="h-12 px-8 border-b">
            <a className="hidden sm:block float-left py-3 pr-4 mr-4 border-r" href="https://www2.telegeography.com/" aria-label="TeleGeography" target="_blank" rel="noopener noreferrer">
              <Logo alt="TeleGeography" className="block h-6 w-auto" />
            </a>
            <Link to={routes.home()} className="float-left py-3 h-6">
              <h1 className="text-base text-black hover:text-black leading-6 mb-0">Submarine Cable Map</h1>
            </Link>
            <NavButton />

          </div>
          { open &&
            <div className="w-full clear-both text-base p-8 bg-white">
              <ul className="pb-4">
                <li>
                  <About><Logo alt="TeleGeography" className="inline-block h-9 w-auto" /></About>
                </li>
                <li>
                  <a className="leading-4 cursor-pointer mr-2 text-gray-500 hover:text-gray-700" href="mailto:cablemap@telegeography.com">Contact</a>
                </li>
              </ul>
              <div className="float-left -ml-2 h-4 mb-8">
                <Share/>
              </div>
            </div>
          }
        </div>
        <Sponsors mobile={true}/>
      </>
    )
  }

  return (
    <div className="w-full top-0 left-0 bg-white">
      <div className="pt-4 h-12 px-8 border-b">
        <a href="https://www2.telegeography.com/" aria-label="TeleGeography" target="_blank" rel="noopener noreferrer">
          <Logo alt="TeleGeography" className="inline-block h-6 w-auto -mt-2" />
        </a>
        <div className="text-right text-xs float-right h-4 leading-4">
          <div className="float-right">
            <Share/>
          </div>
          <About><Logo alt="TeleGeography" className="inline-block h-9 w-auto" /></About>
          <a className="leading-4 inline-block cursor-pointer ml-2 text-gray-500 hover:text-gray-700" href="mailto:cablemap@telegeography.com">Contact</a>
        </div>
      </div>
      <div className="px-8 pt-6 pb-2">
        <h1 className="text-2xl">Submarine Cable Map</h1>
        <p className="text-sm mb-4">The Submarine Cable Map is a free and regularly updated resource from <a href="https://www2.telegeography.com/" target="_blank" rel="noopener noreferrer">TeleGeography</a>.</p>
        <div><Sponsors /></div>
      </div>
    </div>
  )
}

export default Header
