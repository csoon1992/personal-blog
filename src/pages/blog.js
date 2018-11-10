import React from 'react'
import { Card, CardText, CardBody, CardTitle, Badge } from 'reactstrap'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import Layout from '../layouts/blog'

const BlogContent = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.filter(post => !post.node.frontmatter.hidden && post.node.frontmatter.contentType === 'blog')
  return (
    <Layout>
      {posts.map(({ node: post }) => { 
        
        let tagContent = null;

        if (post.frontmatter.tags) {
          tagContent = post.frontmatter.tags.map((tag, ndx) => (
            <Badge href="#" color="light" key={ndx}>{tag}</Badge>
          ));
        }

        return (
          <Card style={{marginBottom: 10}} key={post.id}>
            <CardBody>
              <CardTitle tag='h2'><Link to={post.frontmatter.path}>{post.frontmatter.title}</Link></CardTitle>
              <CardText style={{marginBottom: 10}}>{tagContent}</CardText>
              <CardText>{post.excerpt}</CardText>
            </CardBody>
          </Card>
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
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            tags
            contentType
            date(formatString: "DD MMMM YYYY")
            path
          }
        }
      }
    }
  }
`
