import React from "react";
import Link from "next/link";
import { IconContext } from "react-icons";

function IconLink({ url, title, linkClass, icon }) {
  let iconStyles = { color: "white", fontSize: "1.5em" };

  return (
    <Link
      href={url}
      title={title}
      target="_blank"
      rel="noopener noreferrer"
      className={linkClass}
    >
      <a title={title} className="block p-2 md:p-3">
        <IconContext.Provider value={{ size: "24px" }} style={iconStyles}>
          {icon}
        </IconContext.Provider>
      </a>
    </Link>
  );
}

export default IconLink;
