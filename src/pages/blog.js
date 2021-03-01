import React from "react";
import { graphql } from "gatsby";
import Layout from "../layouts/blog";
import StickyMenu from "../components/Menu/StickyMenu";
import { SectionTitle } from "../components/SectionUtilities";
import Card from "../components/Blog/Card";

const BlogContent = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.filter(
    (post) =>
      !post.node.frontmatter.hidden &&
      post.node.frontmatter.contentType === "blog"
  );

  return (
    <Layout>
      <StickyMenu />

      <div className="container mx-auto pb-20">
        <SectionTitle title="Mis artículos" />

        <div className="grid grid-cols-3 gap-12">
          {posts.map(({ node: post }) => {
            return <Card post={post.frontmatter} />;
          })}
        </div>
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
