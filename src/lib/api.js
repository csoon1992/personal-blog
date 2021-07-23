import matter from "gray-matter";
import memoize from "lodash.memoize";

const loadedPosts = require.context("../../_posts", true, /\.md$/);

const postContents = loadedPosts
  .keys()
  .map(loadedPosts)
  .map((content) => {
    const parsedContent = matter(content.default);

    return {
      body: parsedContent.content,
      ...parsedContent.data,
      realSlug: parsedContent.data.slug.replace(/\.md$/, ""),
    };
  })
  .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

const postsBySlug = postContents.reduce((result, post) => {
  return { ...result, [post.slug]: post };
}, {});

export async function getPostSlugs() {
  return Object.keys(postsBySlug);
}

export async function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, "");

  return postsBySlug[realSlug];
}

export async function getAllPosts() {
  return postContents;
}

export const findPostBySlug = memoize(
  async (slug) => await getPostBySlug(slug)
);

export const allPosts = memoize(async () => await getAllPosts());

export const recentPosts = memoize(async () => (await allPosts()).slice(0, 3));
