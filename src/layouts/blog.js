import React from 'react'
import { Row, Col } from 'reactstrap'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Sidebar from '../components/Sidebar';
import MyCookieConsent from '../components/cookieConsent';

import '../assets/scss/pages/blog.scss';

const TemplateWrapper = ({ children, isPost }) => {
  let pageClass = 'App';

  if (isPost) {
    pageClass += ' post-page';
  }

  return (
    <StaticQuery query={pageQuery} render={data => (
      <div id="blog-page" className={pageClass}>
      
        <Helmet
          title="Blog"
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

        <Row className="blog-wrapper mx-0 d-flex align-items-strech h-100">
          <Col md='2' className="sidebar-wrapper position-fixed pr-0">
            <Sidebar siteMetadata={data.site.siteMetadata} isPost={isPost} />
          </Col>

          <Col md={{ size: 10, offset: 2 }} className="pageContent-wrapper pl-0">
            <div className='pageContent pl-4 mx-auto'>
              {children}
            </div>
          </Col>
        </Row>

        <MyCookieConsent />

      </div>
    )} />
  )
}


const pageQuery = graphql`
  query LayoutBlogQuery {
    site {
      siteMetadata {
        ...sidebarFragment
      }
    }
  }
`

export default TemplateWrapper
