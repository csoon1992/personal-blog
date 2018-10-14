import React from 'react'
import { Container, Card, CardText, CardBody, CardTitle, CardSubtitle, Badge } from 'reactstrap'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.filter(post => !post.node.frontmatter.hidden && post.node.frontmatter.contentType === 'blog')
  return (
    <Layout>
      <Container>
        {posts.map(({ node: post }) =>{ 
          
          let tagContent = null;

          if (post.frontmatter.tags) {
            tagContent = post.frontmatter.tags.map((tag) => (
              <Badge href="#" color="light">{tag}</Badge>
            ));
          }

          return (
          <Card style={{marginBottom: 10}} key={post.id}>
            <CardBody>
              <CardTitle><Link to={post.frontmatter.path}>{post.frontmatter.title}</Link></CardTitle>
              <CardText>
                {tagContent}
              </CardText>
              <CardSubtitle style={{marginBottom: 10}}>{post.frontmatter.date}</CardSubtitle>
              <CardText>{post.excerpt}</CardText>
            </CardBody>
          </Card>
        )})}
      </Container>
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
