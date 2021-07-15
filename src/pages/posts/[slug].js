import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import ErrorPage from "next/error";
import { PageTitle } from "../../components/SectionUtilities";
import Layout from "../../layouts/index";
import markdownToHtml from "../../lib/markdownToHtml";
import PostDate from "../../components/Blog/PostDate";

function BlogPost({ post }) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      <div className="header-content relative top-0 -translate-y-20">
        <div className="bg-dark bg-opacity-40 absolute z-20 top-0 bottom-0 w-full h-full flex flex-col items-center justify-center pt-20">
          <PageTitle title={post.title} />
          <div className="header-post-date">
            <PostDate date={post.date} />
          </div>
        </div>

        <div className="relative h-96 mb-4">
          <Image
            className="w-full"
            layout="fill"
            objectFit="cover"
            src={post.image}
            alt={post.title}
          />
        </div>
      </div>

      <article className="container mx-auto">
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
  const { findPostBySlug } = require("../../lib/api");
  const post = await findPostBySlug(params.slug);
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
  const { allPosts } = require("../../lib/api");
  const posts = await allPosts();

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
