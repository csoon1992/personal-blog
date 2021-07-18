import React from "react";
import Link from "next/link";

function MenuLink({ to, title, anchor, className = "" }) {
  let linkClass = "menu-item uppercase " + className;

  let link = (
    <Link href={to}>
      <a className={linkClass}>{title}</a>
    </Link>
  );

  if (anchor) {
    link = (
      <a href={to} className={`${linkClass}`}>
        {title}
      </a>
    );
  }

  return link;
}

export default MenuLink;
