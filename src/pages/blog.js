import React from 'react'
import { Row, Col } from 'reactstrap'
import { graphql, navigate } from 'gatsby'
import Layout from '../layouts/blog'

const BlogContent = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.filter(post => !post.node.frontmatter.hidden && post.node.frontmatter.contentType === 'blog')
  return (
    <Layout>
      <h1 className="title d-block w-100 text-center mb-3 primary-color">Mis artículos</h1>
      {posts.map(({ node: post }) => { 
        return (
          <Row className="blog-post mx-0 d-flex align-items-stretch mb-3" key={post.id} onClick={ () => navigate(post.frontmatter.path)}>
            <Col md="1" className="calendar d-flex align-items-center text-center">
              <div className="w-100">
                <span className="day d-block">{post.frontmatter.day}</span>
                <span className="month text-uppercase d-block">{post.frontmatter.month}</span>
              </div>
            </Col>

            <Col className="post-content py-2">
              <h2 className="post-title mb-0">
                {post.frontmatter.title}
              </h2>

              <div className="post-excerpt pr-3">{post.excerpt}</div>
            </Col>
          </Row>
        )
      })}
    </Layout>
  )
}

export default BlogContent

export const pageQuery = graphql`
  query PostsQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 300)
          id
          frontmatter {
            title
            tags
            image
            contentType
            day: date(formatString: "DD")
            month: date(formatString: "MMMM", locale: "es-ES")
            path
          }
        }
      }
    }
  }
`
