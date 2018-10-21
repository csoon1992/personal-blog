import React from 'react'
import { Col } from 'reactstrap'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import Layout from '../layouts/index'

// Icons
import { IconContext } from 'react-icons';
import { MdChevronRight } from 'react-icons/md';

const IndexPage = () => {
  return (
    <Layout>
      <Col className='section blog px-0 h-100 shadow-light-hover shadow-right'>
        <Link to='/blog' className='section-link no-underline d-block h-100 position-relative d-flex align-items-center position-relative'>
            <div className='overlay h-100 w-100 position-absolute'></div>

            <div className='content ml-auto mr-5 text-center position-relative'>
                <h2 className='name'>Blog</h2>
                <p className='description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, repudiandae molestiae, obcaecati, rem provident quis quae veritatis ut enim labore ipsum voluptatum sapiente totam alias officiis similique voluptas culpa error.</p>
                <span className="section-icon material-icons text-center">
                  <IconContext.Provider value={{ className: 'icon', style: { verticalAlign: 'text-bottom' }}}>
                    <MdChevronRight/>
                  </IconContext.Provider>
                </span>
            </div>
        </Link>
      </Col>
  

      <Col className='section portfolio px-0 h-100 shadow-light-hover shadow-left'>
        <Link to='/about' className='section-link no-underline d-block h-100 position-relative d-flex align-items-center position-relative'>
            <div className='overlay h-100 w-100 position-absolute'></div>

            <div className='content mr-auto ml-5 text-center position-relative'>
                <h2 className='name'>Portfolio</h2>
                <p className='description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, repudiandae molestiae, obcaecati, rem provident quis quae veritatis ut enim labore ipsum voluptatum sapiente totam alias officiis similique voluptas culpa error.</p>
                <span className="section-icon material-icons text-center">
                  <IconContext.Provider value={{ className: 'icon', style: { verticalAlign: 'text-bottom' }}}>
                    <MdChevronRight/>
                  </IconContext.Provider>
                </span>
            </div>
        </Link>
      </Col>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            tags
            contentType
            date(formatString: "MMMM DD, YYYY")
            path
            hidden
          }
        }
      }
    }
  }
`
