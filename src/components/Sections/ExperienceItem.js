import React from "react";
import Link from "next/link";
import "@fontsource/montserrat/500.css";

function ExperienceItem({
  children,
  company,
  url,
  position,
  fromDate,
  toDate,
  color,
  num,
}) {
  let itemTitle = url ? (
    <Link href={url}>
      <a target="_blank" rel="noopener noreferrer">
        {company}
      </a>
    </Link>
  ) : (
    company
  );

  return (
    <div className="experience md:flex">
      <div
        className={`count w-12 h-12 text-white font-bold text-center flex flex-row items-center justify-center transform rotate-45 mx-auto md:mx-0 ${
          color ? color : "bg-primary"
        }`}
      >
        <div className="num transform -rotate-45 text-3xl">{num}</div>
      </div>
      <div className="p-4 md:px-8 flex-1">
        <h3 className="text-primary text-lg font-medium text-center md:text-left">
          {itemTitle}
        </h3>
        <p className="text-gray-300 text-sm text-center md:text-left">
          {position} - Desde {fromDate} hasta {toDate}
        </p>
        <div className="resume mb-0">{children}</div>
      </div>
    </div>
  );
}

export default ExperienceItem;
