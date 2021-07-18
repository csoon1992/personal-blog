import React from "react";
import PostPreview from "../PostPreview";
import { SectionTitle, GradientPrimaryRoundedLink } from "../SectionUtilities";

export default function RecentPosts({ posts }) {
  return (
    <section id="recent-posts" className="section">
      <div className="container mx-auto py-20 ">
        <SectionTitle title="Mis últimos posts" />
        <div className="flex gap-x-8 justify-center items-stretch">
          {posts.map((post, ndx) => (
            <PostPreview post={post} key={ndx} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <GradientPrimaryRoundedLink url={"/blog"} isInternalLink={true}>
            Ver todos
          </GradientPrimaryRoundedLink>
        </div>
      </div>
    </section>
  );
}
