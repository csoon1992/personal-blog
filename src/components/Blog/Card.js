import React from "react";
import { IconContext } from "react-icons";
import { IoTime, IoArrowForward } from "react-icons/io5";
import Link from "next/link";
import PostDate from "./PostDate";
import Image from "next/image";

function Card({ post }) {
  return (
    <div className="card flex flex-col bg-white border border-solid border-gray-200 rounded-xl shadow-xl relative">
      <div className="bg-gray-400 h-56 rounded-t-xl relative">
        <Image
          className="object-cover rounded-t-xl"
          layout="fill"
          src={post.image}
          alt={post.title}
        />
      </div>
      <div className="bg-white rounded-tl-xl rounded-br-xl ml-10 -mt-20 p-8 space-y-6 flex flex-col flex-1 relative shadow-lg">
        <h2 className="flex-1 font-bold text-2xl text-dark-400">
          {post.title}
        </h2>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row align-items-center space-x-2">
            <div>
              <IconContext.Provider value={{ size: "22px" }}>
                <IoTime />
              </IconContext.Provider>
            </div>

            <div className="text-gray-500 text-sm">
              <PostDate date={post.date} />
            </div>
          </div>

          <Link href="/posts/[slug]" as={`/posts${post.slug}`}>
            <a
              title={`Ver ${post.title}`}
              className="block rounded-full bg-primary text-white p-2 transition-colors duration-300 hover:bg-secondary"
            >
              <IconContext.Provider value={{ size: "20px" }}>
                <IoArrowForward />
              </IconContext.Provider>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
