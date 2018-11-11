import React from 'react'
import { Container, Card, CardTitle, CardGroup, CardBody } from 'reactstrap'
import Helmet from 'react-helmet'
import { basename } from 'path'
import Link from 'gatsby-link'
import { graphql, withPrefix } from 'gatsby'
import Layout from '../layouts/blog'

// code syntax-highlighting theme
// feel free to change it to another one
import 'prismjs/themes/prism-twilight.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'


// find a post title by path
const findNode = (path, data) => data.allMarkdownRemark.edges
  .map(edge => edge.node.frontmatter)
  .filter(r => r.path === path)
  .pop()

export default function Template ({ data }) {
  const { markdownRemark: post } = data

  if (!post) {
    return null;
  }

  const related = post.frontmatter.related ? post.frontmatter.related.map(r => findNode(r.post, data)) : []

  let headerTitle = <h1 className='title d-block mx-auto text-center'>{post.frontmatter.title}</h1>
  let postHeader = headerTitle
  if (post.frontmatter.image) {
    postHeader = <div className="header-content position-relative">
      <div className="overlay position-absolute w-100 h-100">&nbsp;</div>
      <img src={withPrefix(`${post.frontmatter.image}`)} alt={post.frontmatter.title} className="w-100" />
      <div className="header-title position-absolute w-100">{headerTitle}</div>
      <div className="header-post-date position-absolute">{post.frontmatter.date}</div>
    </div>
  }

  console.log(data)

  return (
    <Layout isPost>
      <div>
        <Helmet title={`Blog | ${post.frontmatter.title}`}>
          {data.site.siteMetadata.disqus && (
            <script id='dsq-count-scr' src='//gatsby-starter-blog.disqus.com/count.js' async />
          )}
          {data.site.siteMetadata.disqus && (
            <script>{`(function() {
              var d = document, s = d.createElement('script');
              s.src = 'https://${data.site.siteMetadata.disqus}.disqus.com/embed.js';
              s.setAttribute('data-timestamp', +new Date());
              (d.head || d.body).appendChild(s);
              })();`}
            </script>
          )}
        </Helmet>
        
        <div id="post-wrapper">
          <div id="post-header">
            {postHeader}
          </div>

          <Container id="post-content" className="mw-100 px-0 mt-4" dangerouslySetInnerHTML={{ __html: post.html }} />

          {post.frontmatter.attachments && (<Container><h4>Attachments</h4><CardGroup>
            {post.frontmatter.attachments.map((attachment, i) => (
              <Card key={i}>
                <CardBody>
                  <CardTitle><a href={attachment.filename}>{basename(attachment.filename)}</a></CardTitle>
                </CardBody>
              </Card>
            ))}
          </CardGroup></Container>)}

          {post.frontmatter.related && (<Container><h4>Related</h4><CardGroup>
            {related.map((r, i) => (
              <Card key={i}>
                <CardBody>
                  <CardTitle>
                    <Link to={r.path}>{r.title}</Link>
                  </CardTitle>
                </CardBody>
              </Card>
            ))}
          </CardGroup></Container>)}

          {data.site.siteMetadata.disqus && (<Container>
            <div id='disqus_thread' />
          </Container>)}
        </div>

      </div>
    </Layout>
  )
}


export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        disqus
      }
    }
    
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        image
        date(formatString: "DD MMMM YYYY", locale: "es-ES")
        title
        attachments {
          filename
        }
      }
    }
  }
`