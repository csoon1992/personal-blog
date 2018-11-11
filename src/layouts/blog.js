import React from 'react'
import { Row, Col } from 'reactstrap'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Sidebar from '../components/Sidebar';

import '../assets/scss/pages/blog.scss';

const TemplateWrapper = ({ children, isPost }) => {
  let pageClass = 'App';

  if (isPost) {
    pageClass += ' post-page';
  }

  return (
    <StaticQuery query={pageQuery} render={data => (
      <div id="blog-page" className={pageClass}>
        <Helmet title={data.site.siteMetadata.title} />

        <Row className="p-4 mx-0 d-flex align-items-strech h-100">
          <Col md='2' className="sidebar-wrapper position-fixed px-0">
            <Sidebar siteMetadata={data.site.siteMetadata} isPost={isPost} />
          </Col>

          <Col md={{ size: 10, offset: 2 }} className="pageContent-wrapper">
            <div className='pageContent pl-4 mx-auto'>
              {children}
            </div>
          </Col>
        </Row>

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
