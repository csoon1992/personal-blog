import React from "react";
import { IconContext } from "react-icons";
import { IoTime, IoArrowForward } from "react-icons/io5";
import Link from "next/link";
import PostDate from "./PostDate";
import Image from "next/image";

function Card({ post }) {
  return (
    <div className="card flex flex-col bg-dark border border-solid border-dark rounded-xl shadow-xl relative">
      <div className="bg-gray-400 h-56 rounded-t-xl relative">
        <Image
          className="rounded-t-xl"
          fill={true}
          style={{objectFit: "cover"}}
          src={post.image}
          alt={post.title}
        />
      </div>
      <div className="bg-dark rounded-tl-xl rounded-br-xl ml-10 -mt-20 p-8 space-y-6 flex flex-col flex-1 relative shadow-lg backdrop-filter backdrop-blur bg-opacity-30">
        <h2 className="flex-1 font-bold text-2xl text-white">{post.title}</h2>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row align-items-center space-x-2">
            <div>
              <IconContext.Provider value={{ size: "22px" }}>
                <IoTime />
              </IconContext.Provider>
            </div>

            <div className="text-white text-sm">
              <PostDate date={post.date} />
            </div>
          </div>

          <Link href="/posts/[slug]" as={`/posts${post.slug}`} title={`Ver ${post.title}`}
                className="block rounded-full border-2 border-primary bg-transparent text-white p-2 transition-colors duration-300 hover:bg-primary">
              <IconContext.Provider value={{ size: "20px" }}>
                <IoArrowForward />
              </IconContext.Provider>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
