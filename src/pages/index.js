import React from 'react'
import Layout from '../layouts/index'
import Hero from '../components/Sections/Hero'
import About from '../components/Sections/About'
import Experiences from '../components/Sections/Experiences'
import ExperienceTimeline from '../components/Sections/ExperienceTimeline'

const IndexPage = () => {
  return (
    <Layout>
      
      <Hero />
      <About />
      <Experiences />
      <ExperienceTimeline />
      
    </Layout>
  )
}

export default IndexPage
