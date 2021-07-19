import React from "react";
import Image from "next/image";
import Link from "next/link";
import PostDate from "./Blog/PostDate";

function PostPreview({ post }) {
  return (
    <div className="post-preview group flex flex-1 flex-row lg:flex-col">
      <Link href="/posts/[slug]" as={`/posts${post.slug}`}>
        <a title={`Ver ${post.title}`} className="flex flex-1 gap-x-4">
          <div className="relative flex-1 lg:block lg:mb-4">
            <Image
              src={post.image}
              alt={post.title}
              className="object-cover rounded-md lg:rounded-none"
              layout="fill"
              sizes="33vw"
            />
          </div>

          <div className="py-4 lg:py-0 px-3 flex flex-1 flex-col">
            <div className="text-sm text-primary">
              <PostDate date={post.date} />
            </div>
            <div className="font-bold text-lg lg:text-md group-hover:underline">
              {post.title}
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default PostPreview;
