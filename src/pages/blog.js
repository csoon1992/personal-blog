import React from "react";
import { graphql, navigate, withPrefix } from "gatsby";
import Layout from "../layouts/blog";
import StickyMenu from "../components/Menu/StickyMenu";

const BlogContent = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.filter(
    (post) =>
      !post.node.frontmatter.hidden &&
      post.node.frontmatter.contentType === "blog"
  );
  //const bgColors = 5;

  return (
    <Layout>
      <StickyMenu />

      <h1 className="title d-block w-100 text-center mb-3 primary-color font-weight-bold">
        Mis artículos
      </h1>

      <div className="d-flex align-items-center justify-content-center flex-wrap">
        {posts.map(({ node: post }) => {
          //let randomBgColor = 'bg-color-' + Math.floor(Math.random() * bgColors);

          return (
            <div
              className="blog-post w-50 px-3 mb-4"
              key={post.id}
              onClick={() => navigate(post.frontmatter.path + "/")}
            >
              <div className="post-wrapper">
                <div tag="a">
                  <div
                    width="100%"
                    src={withPrefix(`${post.frontmatter.image}`)}
                    alt={post.frontmatter.title}
                  />
                  <div>
                    <div>{post.frontmatter.title}</div>
                  </div>
                  <div className="border-0 text-right">
                    <span className="publish-date">
                      Publicado el {post.frontmatter.publishDate}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            /*<Row className="blog-post mx-0 d-flex align-items-stretch mb-3" key={post.id} onClick={ () => navigate(post.frontmatter.path + '/')}>
              <Col md="2" className="calendar d-flex align-items-center text-center">
                <div className="w-100">
                  <span className="day d-md-block">{post.frontmatter.publishDate}</span>
                </div>
              </Col>

              <Col className="post-content py-2">
                <h2 className="post-title mb-0">
                  {post.frontmatter.title}
                </h2>

                <div className="post-excerpt pr-3">{post.excerpt}</div>
              </Col>
            </Row>*/
          );
        })}
      </div>
    </Layout>
  );
};

export default BlogContent;

export const pageQuery = graphql`
  query PostsQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            title
            tags
            image
            contentType
            publishDate: date(formatString: "DD MMMM YYYY", locale: "es-ES")
            path
          }
        }
      }
    }
  }
`;
