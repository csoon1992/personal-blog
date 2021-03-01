import React from "react";
import Layout from "../layouts/blog";
import StickyMenu from "../components/Menu/StickyMenu";
import { SectionTitle } from "../components/SectionUtilities";
import Card from "../components/Blog/Card";

const BlogContent = ({ data }) => {
  return <div>blogcontent here</div>;
  /*const posts = data.allMarkdownRemark.edges.filter(
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
  );*/
};

export default BlogContent;
