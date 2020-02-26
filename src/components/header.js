import React from 'react'

import Hero from './hero'
import Nav from './nav'

const Header = () => (
  <div className="relative overflow-hidden mb-32">
    <Hero />
    <div className="relative overflow-hidden  hero-overlay">
      <div className="relative content-wrapper mx-auto px-6 pt-4">
        <Nav />
        <header>
          <div className="pb-40">
            <h1 className="text-white-100 font-bold uppercase tracking-wide leading-snug text-lg  sm:text-4xl xl:text-6xl">
              The Expat Files:
              <br />
              Living in Latin America
            </h1>
            <h2 className="font-bold">
              With{' '}
              <span className="text-lg  sm:text-xl xl:text-3xl">
                John Mueller
              </span>
            </h2>
          </div>
        </header>
      </div>
    </div>
  </div>
)

export default Header
