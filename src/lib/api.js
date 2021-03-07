import matter from "gray-matter";
import { readdirSync, readFileSync } from "fs";
import { join, extname } from "path";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  const files = readdirSync(postsDirectory);
  const posts = files.filter((file) => extname(file) == ".md");

  return posts;
}

export function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);

  const fileContents = readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, content };
}

export function getAllPosts() {
  const slugs = getPostSlugs();

  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
}
