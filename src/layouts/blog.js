import React from 'react'
import { Row, Col } from 'reactstrap'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Sidebar from '../components/Sidebar';
import Footer from '../components/Blog/Footer';
import MyCookieConsent from '../components/cookieConsent';

import '../assets/scss/pages/blog.scss';
import '../assets/scss/pages/about.scss';

const TemplateWrapper = ({ children, isPost, isAbout }) => {
  let pageClass = 'App';
  let title = 'Blog';

  if (isPost) {
    pageClass += ' post-page';
  } else if (isAbout) {
    pageClass += ' about-page';
    title = 'Sobre mí';
  }

  return (
    <StaticQuery query={pageQuery} render={data => (
      <div id="blog-layout" className={pageClass}>
      
        <Helmet
          title={title}
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

        <Row className="blog-wrapper mx-0 h-100">
          <Col md="4" lg="3" xl="2" className="sidebar-wrapper px-0">
            <Sidebar siteMetadata={data.site.siteMetadata} isPost={isPost} />
          </Col>

          <Col md="8" lg="9" xl="10" className="pageContent-wrapper pl-0">
            <div className='pageContent pl-4 mx-auto'>
              {children}
            </div>
          </Col>
        </Row>

        <Footer/>

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
