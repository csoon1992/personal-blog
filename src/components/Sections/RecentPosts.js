import React from "react";
import PostPreview from "../PostPreview";
import { SectionTitle, GradientPrimaryRoundedLink } from "../SectionUtilities";

export default function RecentPosts({ posts }) {
  return (
    <section id="recent-posts" className="section">
      <div className="max-w-xs md:max-w-2xl xl:max-w-screen-2xl mx-auto py-20 ">
        <SectionTitle title="Mis últimos posts" />
        <div className="grid auto-rows-fr lg:grid-cols-3 gap-y-6 lg:gap-y-0 lg:gap-x-8">
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
