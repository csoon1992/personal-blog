import React from 'react'
import Layout from '../layouts/index'
import Hero from '../components/Sections/Hero'
import About from '../components/Sections/About'
import Experiences from '../components/Sections/Experiences'
import Portfolio from '../components/Sections/Portfolio'

const IndexPage = () => {
  return (
    <Layout>
      
      <Hero />
      <About />
      <Experiences />
      <Portfolio />
      
    </Layout>
  )
}

export default IndexPage
