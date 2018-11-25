import React from 'react'
import {Container} from 'reactstrap'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import {StaticQuery, graphql} from 'gatsby'

import '../assets/scss/pages/index.scss';

import MyCookieConsent from '../components/cookieConsent';

const TemplateWrapper = ({children}) => {
  return (
    <StaticQuery query={pageQuery} render={data => (

      <div id='index' className='App'>
        <Helmet
          title="Home"
          titleTemplate={`%s - ${data.site.siteMetadata.title}`}
          description={data.site.siteMetadata.subtitle}>
          <meta name="description" content={ `Web personal de ${data.site.siteMetadata.title}` } />
          <meta property="og:type" content="website"/>
          <meta property="og:title" content={data.site.siteMetadata.title}/>
          <meta property="og:site_name" content="CristinaSoler"/>
          <meta property="og:url" content="https://cristinasoler.me/"/>
          <meta property="og:description" content={ `Web personal de ${data.site.siteMetadata.title}` }/>
          <meta property="og:type" content="website"/>
          <meta name="og:locale" content="es_ES"/>
          <link rel="canonical" href="https://cristinasoler.me/"/>
        </Helmet>

        <div className='navbar navbar-expand-lg navbar-dark position-fixed w-100'>
          <Container>
            <Link to='/' className='navbar-brand'>
              <h1>{data.site.siteMetadata.title}</h1>
            </Link>
          </Container>
        </div>

        <div className='main-sections mx-auto d-flex h-100 w-100 align-items-center'>
          {children}
        </div>

        <MyCookieConsent/>

      </div>
    )}/>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.array
}

const pageQuery = graphql `
  query LayoutIndexQuery {
    site {
      siteMetadata {
        ...sidebarFragment
      }
    }
  }
`

export default TemplateWrapper
