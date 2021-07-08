import React from "react";
import Link from "next/link";

function SectionTitle({ title }) {
  return (
    <h2 className="text-center font-bold text-4xl mb-12">
      {title}
      <span className="block mx-auto bg-primary mt-3 h-1 w-20">&nbsp;</span>
    </h2>
  );
}

function SectionSubtitle({ title }) {
  return (
    <h3 className="text-center font-bold text-3xl mb-6 text-primary">
      {title}
    </h3>
  );
}

function GradientPrimaryRoundedLink({
  url,
  isInternalLink = false,
  rounded = true,
  children,
  ...props
}) {
  let linkClass =
    "inline-block py-4 px-8 border border-solid border-primary text-primary bg-gradient-to-r hover:from-green-400 hover:to-primary hover:text-white hover:border-transparent";

  if (rounded) {
    linkClass += " rounded-full";
  }

  let linkElement = (
    <a href={url} {...props} className={linkClass}>
      {children}
    </a>
  );

  if (isInternalLink) {
    linkElement = (
      <Link href={url} {...props} className={linkClass}>
        <a>{children}</a>
      </Link>
    );
  }

  return linkElement;
}

export { SectionTitle, SectionSubtitle, GradientPrimaryRoundedLink };
