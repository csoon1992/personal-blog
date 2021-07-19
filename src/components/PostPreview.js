import React from "react";
import Image from "next/image";
import Link from "next/link";
import PostDate from "./Blog/PostDate";

function PostPreview({ post }) {
  return (
    <div className="post-preview group">
      <Link href="/posts/[slug]" as={`/posts${post.slug}`}>
        <a title={`Ver ${post.title}`} className="block">
          <div className="relative h-32 mb-4">
            <Image
              src={post.image}
              alt={post.title}
              className="object-cover"
              layout="fill"
              sizes="33vw"
            />
          </div>

          <div className="px-3">
            <div className="text-sm text-primary">
              <PostDate date={post.date} />
            </div>
            <div className="font-bold text-md group-hover:underline">
              {post.title}
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default PostPreview;
