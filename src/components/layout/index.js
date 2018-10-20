import React from 'react'
import { Container } from 'reactstrap'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

// code syntax-highlighting theme
// feel free to change it to another one
import 'prismjs/themes/prism-twilight.css'

// home site style
import './css/index.scss'


const TemplateWrapper = ({ children, data }) => {
  return (
    <StaticQuery query={pageQuery} render={data => (
      <div id='index' className='App'>
        <Helmet title={data.site.siteMetadata.title} />
        <div className='navbar navbar-expand-lg navbar-dark position-fixed w-100'>
          <Container>
            <Link to='/' className='navbar-brand'><h1>{data.site.siteMetadata.title}</h1></Link>
            <ul className='nav navbar-nav'>
              <li className='nav-item'>
                <Link to='/about' className='nav-link'>About</Link>
              </li>
            </ul>
          </Container>
        </div>

        <div className='main-sections mx-auto d-flex h-100 w-100 align-items-center'>
          {children}
        </div>
      </div>
    )} />
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.element
}

const pageQuery = graphql`
  query LayoutIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default TemplateWrapper
