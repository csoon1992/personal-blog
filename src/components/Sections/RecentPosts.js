import React from "react";
import PostPreview from "../PostPreview";
import { SectionTitle, GradientPrimaryRoundedLink } from "../SectionUtilities";

export default function RecentPosts({ posts }) {
  return (
    <section id="recent-posts" className="section">
      <div className="max-w-xs md:max-w-lg lg:max-w-2xl xl:max-w-screen-2xl mx-auto py-10 md:py-20">
        <SectionTitle title="Mis últimos posts" />
        <div className="block lg:flex lg:gap-x-8 justify-center items-stretch">
          {posts.map((post, ndx) => (
            <PostPreview post={post} key={ndx} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <GradientPrimaryRoundedLink
            url={"/blog"}
            isInternalLink={true}
            keepInMobile={true}
          >
            Ver todos
          </GradientPrimaryRoundedLink>
        </div>
      </div>
    </section>
  );
}
