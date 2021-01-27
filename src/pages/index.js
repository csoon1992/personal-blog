import React from 'react'
import Link from 'gatsby-link'
import Layout from '../layouts/index'
import FooterLinks from '../components/Blog/FooterLinks';
import mePhoto from '../assets/img/files/me.png';

const IndexPage = () => {
  return (
    <Layout>
      <section className='section px-0 h-full w-full flex items-center'>
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

      <footer className="fixed-bottom px-4 px-sm-5 pb-2">
        <div className="contact d-flex align-items-center justify-content-center">
          <div className="made-by d-inline-block mr-4">
            <small>Hecho por&nbsp;
              <span className="font-weight-bold">Cristina Soler</span>
            </small>
          </div>

          <div className="links d-inline-block">
            <FooterLinks/>
          </div>
        </div>
      </footer>
    </Layout>
  )
}

export default IndexPage
