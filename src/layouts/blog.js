import React from 'react'
import { Location } from '@reach/router';
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Sidebar from '../components/Sidebar';
import MyCookieConsent from '../components/cookieConsent';

import '../assets/scss/pages/about.scss';
import '../assets/scss/pages/blog.scss';

const TemplateWrapper = ({ children, isPost, isAbout, location }) => {
  let pageClass = 'App';
  let title = 'Blog';

  let pageContent = <div className='pageContent pl-4 mx-auto'>
    <div>
      {children}
    </div>
  </div>;

  if (isPost) {
    pageClass += ' post-page';

    pageContent = <div className='pageContent pl-4 mx-auto'>
      {children}
    </div>;
  } else if (isAbout) {
    pageClass += ' about-page';
    title = 'Sobre mí';
  }

  return (
    <StaticQuery query={pageQuery} render={data => (
      <div id="blog-layout" className={pageClass}>

        <Location>
          {({ location }) => <Helmet
              title={title}
              titleTemplate={`%s - ${data.site.siteMetadata.title}`}
              description={data.site.siteMetadata.subtitle}>
              <meta property="og:title" content={title}/>
              <meta property="og:site_name" content="CristinaSoler"/>
              <meta property="og:url" content={location.href}/>
              <meta name="og:locale" content="es_ES"/>

              <meta property="og:image" content="/files/index-bg.jpg" />
              <meta name="description" content={ `Web personal de ${data.site.siteMetadata.title}` } />
              <meta property="og:description" content={ `Web personal de ${data.site.siteMetadata.title}` }/>
              <meta property="og:type" content="website"/>

              <link rel="canonical" href={location.href} />
            </Helmet>
          }
        </Location>
        
        <div className="blog-wrapper mx-0 h-100">
          <div lg="4" xl="3" className="sidebar-wrapper px-0">
            <Sidebar siteMetadata={data.site.siteMetadata} isPost={isPost} />
          </div>

          <div lg="8" xl="9" className="pageContent-wrapper pl-0">
            {pageContent}
          </div>
        </div>

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
