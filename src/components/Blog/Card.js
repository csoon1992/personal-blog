import React from "react";
import { IconContext } from "react-icons";
import { IoTime, IoArrowForward } from "react-icons/io5";
import Link from "gatsby-link";

function Card({ post }) {
  return (
    <div className="card flex flex-col bg-white border border-solid border-gray-200 rounded-xl shadow-xl">
      <div className="bg-gray-400 h-56 rounded-t-xl"></div>
      <div className="bg-white rounded-tl-xl rounded-br-xl ml-10 -mt-20 p-8 space-y-6 flex flex-col flex-1">
        <h2 className="flex-1 font-bold text-2xl">{post.title}</h2>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row align-items-center space-x-2">
            <div>
              <IconContext.Provider
                value={{ size: "22px", className: "text-gray-300" }}
              >
                <IoTime />
              </IconContext.Provider>
            </div>

            <div className="text-gray-500">{post.publishDate}</div>
          </div>

          <Link
            to={post.path}
            title={`Ver ${post.title}`}
            className="block rounded-full bg-primary text-white p-2 transition-colors duration-300 hover:bg-secondary"
          >
            <a>
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
