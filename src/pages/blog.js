import React from "react";
import Layout from "../layouts/index";
import { SectionTitle } from "../components/SectionUtilities";
import Card from "../components/Blog/Card";
const BlogContent = ({ posts }) => {
  return (
    <Layout>
      <div className="container mx-auto py-20">
        <SectionTitle title="Mis artículos" />

        <div className="grid grid-cols-3 gap-12">
          {posts.map((post) => (
            <Card key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default BlogContent;

export async function getStaticProps() {
  const { allPosts } = require("../lib/api");
  const posts = await allPosts();

  return {
    props: { posts },
  };
}
