import React from "react";
import Layout from "../layouts/blog";
import StickyMenu from "../components/Menu/StickyMenu";
import { SectionTitle } from "../components/SectionUtilities";
import Card from "../components/Blog/Card";

import { getAllPosts } from "../lib/api";

const BlogContent = ({ posts }) => {
  return (
    <Layout>
      <StickyMenu />

      <div className="container mx-auto pb-20">
        <SectionTitle title="Mis artículos" />

        <div className="grid grid-cols-3 gap-12">
          {posts.map((post) => (
            <Card key={post.path} post={post} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default BlogContent;

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
}
