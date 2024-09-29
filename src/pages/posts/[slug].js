import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import ErrorPage from "next/error";
import { SectionTitle } from "../../components/SectionUtilities";
import Layout from "../../layouts/index";
import ReactMarkdown from "react-markdown";
import PostDate from "../../components/Blog/PostDate";
import { DiscussionEmbed } from 'disqus-react';
import components from "../../components/MdComponents";

function BlogPost({ post }) {
  const router = useRouter();
  const shortName = "cristinasoler";

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      <div className="header-content relative top-0 -translate-y-20 -mb-20">
        <div className="relative h-96 mb-4">
          <Image
            quality="92"
            className="w-full"
            fill={true}
            style={{objectFit: "cover"}}
            priority={true}
            src={post.image}
            alt={post.title}
          />
        </div>
      </div>

      <article className="max-w-screen md:max-w-2xl xl:max-w-screen-xl mx-auto pb-20 px-4 lg:px-0 space-y-3">
        <SectionTitle title={post.title} className="mt-10 mb-3" />
        <div className="header-post-date text-center pb-6">
          <PostDate date={post.date} />
        </div>
        <div className="prose break-words mx-auto xl:max-w-screen-xl">
          <ReactMarkdown components={components}>{post.body}</ReactMarkdown>
        </div>
      </article>

      <div className="max-w-xs md:max-w-2xl xl:max-w-screen-xl mx-auto">
        <DiscussionEmbed
            shortname={shortName}
            config={
              {
                url: `https://cristinasoler.me${post.slug}`,
                identifier: post.slug,
                title: post.title,
                language: 'es_ES'
              }
            }
        />
      </div>
    </Layout>
  );
}

export default BlogPost;

export async function getStaticProps({ params }) {
  const { findPostBySlug } = await import("../../lib/api");

  const post = await findPostBySlug(`/${params.slug}`);

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const { allPosts } = await import("../../lib/api");
  const posts = await allPosts();

  return {
    paths: posts.map(({ slug }) => `/posts${slug}`),
    fallback: false,
  };
}
