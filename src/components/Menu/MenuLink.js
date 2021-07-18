import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function MenuLink({ to, title, anchor, className = "" }) {
  const router = useRouter();
  let linkClass = "menu-item uppercase " + className;
  console.log(router);

  if (
    to == "/blog" &&
    (router.route == "/blog" || router.route == "/posts/[slug]")
  ) {
    linkClass += " text-primary";
  }

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
