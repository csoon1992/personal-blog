import matter from "gray-matter";
import { join, extname } from "path";
import { readFile, readdir } from "fs/promises";
import memoize from "lodash.memoize";

const postsDirectory = join(process.cwd(), "_posts");

export async function getPostSlugs() {
  const files = await readdir(postsDirectory);
  return files.filter((file) => extname(file) == ".md");
}

export async function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);

  const fileContents = await readFile(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, content, realSlug };
}

export async function getAllPosts() {
  const slugs = await getPostSlugs();

  const postsPromises = slugs.map((slug) => getPostBySlug(slug));

  const resolvedPosts = await Promise.all(postsPromises);

  // sort posts by date in descending order
  return resolvedPosts.sort((post1, post2) =>
    post1.date > post2.date ? -1 : 1
  );
}

export const findPostBySlug = memoize(
  async (slug) => await getPostBySlug(slug)
);

export const allPosts = memoize(async () => await getAllPosts());
