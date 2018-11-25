import React from 'react'
import { Container, Card, CardTitle, CardGroup, CardBody, Badge } from 'reactstrap'
import Helmet from 'react-helmet'
import { basename } from 'path'
import Link from 'gatsby-link'
import { graphql, withPrefix } from 'gatsby'
import Layout from '../layouts/blog'

import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

import Content from '../components/Content'


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

  let tagContent = null;
  if (post.frontmatter.tags) {
    tagContent = post.frontmatter.tags.map((tag, ndx) => (
      <Badge href="#" color="light" className="mr-2 mb-1 py-2 px-3" key={ndx}>{tag}</Badge>
    ));
  }

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

          <Container className="content">
            <Content id="post-content" className="mw-100 px-0 mt-4 pb-3 border-bottom-light" content={post.htmlAst}/>
            
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

            <div className="post-tags border-bottom-light pt-2 pb-1">
              {tagContent}
            </div>
            
            <h4 className="h4 mt-4 mb-1 text-center">Comentarios</h4>
            <h5 className="h5 mb-2 text-center section-subtitle">Cualquier comentario o sugerencia es bienvenido</h5>

            {data.site.siteMetadata.disqus && (<Container>
              <div id='disqus_thread' />
            </Container>)}
          </Container>
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
      htmlAst
      frontmatter {
        path
        image
        tags
        date(formatString: "DD MMMM YYYY", locale: "es-ES")
        title
        attachments {
          filename
        }
      }
    }
  }
`