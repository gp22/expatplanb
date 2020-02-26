import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import HealthcareGuide from '../components/healthcare-guide'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <HealthcareGuide />
    </Layout>
  )
}

export default IndexPage
