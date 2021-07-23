import React from "react";
import Layout from "../layouts/index";
import Hero from "../components/Sections/Hero";
import About from "../components/Sections/About";
import Experiences from "../components/Sections/Experiences";
import Portfolio from "../components/Sections/Portfolio";
import RecentPosts from "../components/Sections/RecentPosts";

const IndexPage = ({ posts }) => {
  return (
    <Layout>
      <Hero />
      <About />
      <Experiences />
      <Portfolio />
      <RecentPosts posts={posts} />
    </Layout>
  );
};

export default IndexPage;

export async function getStaticProps() {
  const { recentPosts } = require("../lib/api");
  const posts = await recentPosts();

  return {
    props: { posts },
  };
}
