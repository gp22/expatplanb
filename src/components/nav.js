import { Link } from 'gatsby'
import React from 'react'

import Toggle from './toggle'
import Logo from './logo'
import ArrowRightCircle from './svg/arrow-right-circle'
import Menu from './svg/menu'

const Nav = () => (
  <nav className="flex justify-between mb-40 relative">
    <Link className="flex mr-3 hover:opacity-75" to="/">
      <Logo />
    </Link>
    <span className="text-sm border-b border-gray-300 w-full flex items-center justify-end">
      <a
        className="mr-6 text-white-100 hover:opacity-75 hidden  sm:block  transition"
        href="https://theexpatfiles.podbean.com/"
        target="_blank"
      >
        radio show
      </a>
      <a
        className="py-1 pr-8 pl-4 relative rounded-full bg-yellow-100 text-yellow-200 hover:opacity-75 hidden  sm:block  transition"
        href="#healthcare-guide"
      >
        <span className="font-bold">healthcare guide</span>
        <ArrowRightCircle className="absolute arrow-right-circle" />
      </a>
      <Toggle
        render={({ on, toggle }) => (
          <>
            <Menu onClick={toggle} className="cursor-pointer  sm:hidden" />
            {on && (
              <span
                className="absolute flex flex-col items-end py-6 px-2 border bg-gray-400  sm:hidden  dropdown"
                onClick={toggle}
              >
                <a
                  className="pb-4 mb-4 border-b w-full text-right text-white-100 hover:opacity-75  transition"
                  href="https://theexpatfiles.podbean.com/"
                  target="_blank"
                >
                  radio show
                </a>
                <a
                  className="py-1 pr-8 pl-4 relative rounded-full bg-yellow-100 text-yellow-200 hover:opacity-75  transition"
                  href="#healthcare-guide"
                >
                  <span className="font-bold">healthcare guide</span>
                  <ArrowRightCircle className="absolute arrow-right-circle" />
                </a>
              </span>
            )}
          </>
        )}
      />
    </span>
  </nav>
)

export default Nav
