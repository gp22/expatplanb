import { Link } from 'gatsby'
import React from 'react'

import HealthcareCover from './healthcare-cover'
import Asterisk from './svg/asterisk'
import CheckCircle from './svg/check-circle'
import HandPointingRight from './svg/hand-pointing-right'

const HealthcareGuide = () => (
  <section className="flex flex-col-reverse items-center justify-between mb-32  xl:flex-row sm:px-20 xl:px-0">
    <div className="w-full  xl:mr-12">
      <p className="uppercase text-sm tracking-wider mb-2 hidden  xl:block">
        healthcare guide
      </p>
      <p className="text-gray-400 leading-snug mb-6 text-xl  sm:text-3xl">
        Johnny&rsquo;s full Guide To Latin&nbsp;America&nbsp;Healthcare
      </p>
      <ul className="mb-6">
        <li className="mb-3 relative">
          <CheckCircle className="absolute  check-circle" />
          <p className="ml-5">
            How Expats live generally healthier lives in Latin&nbsp;America
          </p>
        </li>
        <li className="mb-3 relative">
          <CheckCircle className="absolute  check-circle" />
          <p className="ml-5">A look at what healthcare costs</p>
        </li>
        <li className="mb-3 relative">
          <CheckCircle className="absolute  check-circle" />
          <p className="ml-5">
            How not to get charged &ldquo;Gringo&nbsp;Prices&rdquo;
          </p>
        </li>
        <li className="mb-3 relative">
          <CheckCircle className="absolute  check-circle" />
          <p className="ml-5">
            How to choose the right insurance plan for&nbsp;you
          </p>
        </li>
        <li className="mb-3">
          <p className="ml-5">… and so much more!</p>
        </li>
      </ul>
      <a href="#">
        <div className="bg-yellow-100 inline-block uppercase tracking-wider font-bold text-yellow-200 rounded-full py-4 px-8 mb-4 relative shadow-md hover:opacity-75">
          <HandPointingRight className="absolute  hand-pointing-right" />
          <p className="ml-6">Buy Now – $19.99</p>
        </div>
      </a>
      <div className="relative">
        <Asterisk className="absolute  asterisk" />
        <p className="text-xs text-gray-200 ml-3 max-w-md">
          The report will download as soon as your payment is complete. If for
          some reason it doesn’t, just send an email to{' '}
          <a
            className="text-xs border-b border-gray-200 hover:opacity-75"
            href="mailto:theexpatfiles@gmail.com"
          >
            theexpatfiles@gmail.com
          </a>
        </p>
      </div>
    </div>
    <div className="w-full mb-20  xl:mb-0">
      <p className="uppercase text-sm tracking-wider mb-4  xl:hidden">
        healthcare guide
      </p>
      <div id="healthcare-guide" className="bg-blue-100 py-4">
        <HealthcareCover />
      </div>
      <div className="bg-blue-200 py-8 px-4 text-center">
        <p className="text-white-200 text-lg  sm:text-xl">
          Over 100 pages of info for&nbsp;only{' '}
          <span className="font-bold">$</span>
          <span className="font-bold  sm:text-2xl">19.99</span>
        </p>
      </div>
    </div>
  </section>
)

export default HealthcareGuide
