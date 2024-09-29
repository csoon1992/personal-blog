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
      className={`block p-2 md:p-3 ${linkClass}`}
    >
        <IconContext.Provider value={{ size: "24px" }} style={iconStyles}>
          {icon}
        </IconContext.Provider>
    </Link>
  );
}

export default IconLink;
