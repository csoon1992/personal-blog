import React from 'react'
import { Row, Col } from 'reactstrap'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Sidebar from '../components/Sidebar';

// code syntax-highlighting theme
// feel free to change it to another one
import 'prismjs/themes/prism-twilight.css'

import '../assets/scss/pages/blog.scss';

const TemplateWrapper = ({ children, isPost }) => {
  return (
    <StaticQuery query={pageQuery} render={data => (
      <div className='App'>
        <Helmet title={data.site.siteMetadata.title} />

        <Row className='p-4'>
          <Col md='2'>
            <Sidebar siteMetadata={data.site.siteMetadata} isPost={isPost} />
          </Col>

          <Col md='10'>
            <div className='pageContent'>
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
