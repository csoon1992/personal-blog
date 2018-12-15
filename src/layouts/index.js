import React from 'react'
import PropTypes from 'prop-types'
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

        <div className='main-content mx-auto h-100 w-100'>
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
