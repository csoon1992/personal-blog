import React from "react";
import Link from "next/link";

function MenuLink({ to, title, active, anchor, className = "" }) {
  let linkClass = "menu-item uppercase font-black " + className;

  if (active == "true") {
    linkClass += " underline text-primary";
  }

  let link = (
    <Link href={to} className={linkClass}>
      <a>{title}</a>
    </Link>
  );

  if (anchor) {
    link = (
      <a href={to} className={`string ${linkClass}`}>
        {title}
      </a>
    );
  }

  return link;
}

export default MenuLink;
