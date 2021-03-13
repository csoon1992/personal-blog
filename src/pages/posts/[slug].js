import React, { useEffect } from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { SectionTitle } from "../../components/SectionUtilities";
import Layout from "../../layouts/index";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";

function BlogPost({ post }) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      <article className="container mx-auto py-12">
        <SectionTitle title={post.title} />

        <div
          className="prose mx-auto xl:max-w-4xl"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>
      </article>
    </Layout>
  );
}

export default BlogPost;

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  const content = await markdownToHtml(post.content || "");
  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.realSlug,
        },
      };
    }),
    fallback: false,
  };
}
