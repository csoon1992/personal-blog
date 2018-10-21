import React from 'react'
import { Container } from 'reactstrap'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

//import Sidebar from '../components/Sidebar';

// code syntax-highlighting theme
// feel free to change it to another one
import 'prismjs/themes/prism-twilight.css'

import '../assets/scss/pages/blog.scss';

const TemplateWrapper = ({ children, data }) => {
  /*let user
  if (typeof window !== 'undefined') {
    user = window.netlifyIdentity && window.netlifyIdentity.currentUser()
  }*/
  return (
    <StaticQuery query={pageQuery} render={data => (
      <div className='App'>
        <Helmet title={data.site.siteMetadata.title} />
        <div className='navbar navbar-expand-lg navbar-dark bg-primary'>
          <Container>
            <Link to='/' className='navbar-brand'>{data.site.siteMetadata.title}</Link>
            <ul className='nav navbar-nav'>
              <li className='nav-item'>
                <Link to='/about' className='nav-link'>About</Link>
              </li>
            </ul>
          </Container>
        </div>


        <div className='pageContent'>
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
  query LayoutBlogQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default TemplateWrapper
