import React from 'react'
import Link from 'gatsby-link'
import Layout from '../layouts/index'
import Hero from '../components/Hero'

import mePhoto from '../assets/img/files/intro-me.png';

const IndexPage = () => {
  return (
    <Layout>
      
      <Hero />
      
      <section className='section px-0 flex items-center'>
        <div className='title mw-50 p-5 flex items-center'>
          <div className='title-ilu mr-4 hidden d-md-block'>
            <img
              src={mePhoto}
              alt='Cristina Soler'
              className='profile-photo'
              width='120'/>
          </div>

          <div className='title-text ml-4'>
            <h2 className='name'>Hola, soy&nbsp;
              <span>Cristina Soler</span>
            </h2>
            <p className='description'>Programadora web, especializada en el mundo del comercio electrónico.</p>

            <div className="navigation">
              <Link to='/blog' className='btn outline-btn mr-4'>Blog</Link>
              <Link to='/about' className='btn outline-btn'>Sobre mí</Link>
            </div>
          </div>
        </div>
      </section>
      
    </Layout>
  )
}

export default IndexPage
