import React from "react";
import { graphql, navigate } from "gatsby";
import Link from "gatsby-link";
import Layout from "../layouts/blog";

// Icons
import { IconContext } from "react-icons";
import { GoTag, GoBook } from "react-icons/go";

const BlogTagContent = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.filter(
    (post) =>
      !post.node.frontmatter.hidden &&
      post.node.frontmatter.contentType === "blog"
  );
  return (
    <Layout>
      {posts.map(({ node: post }) => {
        return (
          <div
            className="blog-post mx-0 d-flex align-items-stretch mb-3"
            key={post.id}
            onClick={() => navigate(post.frontmatter.path)}
          >
            <div
              md="1"
              className="calendar d-flex align-items-center text-center"
            >
              <div className="w-100">
                <span className="day d-block">{post.frontmatter.day}</span>
                <span className="month text-uppercase d-block">
                  {post.frontmatter.month}
                </span>
              </div>
            </div>

            <div className="post-content py-2">
              <h2 className="post-title mb-0">{post.frontmatter.title}</h2>

              <div className="post-excerpt pr-3">{post.excerpt}</div>
            </div>
          </div>
        );
      })}

      <div className="actions mt-4">
        <Link href="/tags" className="default-color">
          <a>
            <IconContext.Provider
              value={{ className: "icon primary-color pr-1" }}
            >
              <GoTag />
            </IconContext.Provider>
            Ver todas las etiquetas
          </a>
        </Link>

        <Link href="/blog" className="default-color">
          <a>
            <IconContext.Provider
              value={{ className: "icon primary-color pr-1" }}
            >
              <GoBook />
            </IconContext.Provider>
            Ver todos los posts
          </a>
        </Link>
      </div>
    </Layout>
  );
};

export default BlogTagContent;

export const pageQuery = graphql`
  query PostsByTagQuery($tag: String) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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
`;
