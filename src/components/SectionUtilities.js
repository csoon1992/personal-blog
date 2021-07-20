import React from "react";
import Link from "next/link";

function PageTitle({ title }) {
  return (
    <h1 className="text-center font-medium text-5xl mb-12 font-titles">
      {title}
    </h1>
  );
}

function SectionTitle({ title }) {
  return (
    <h2 className="text-center font-medium text-5xl mb-12 font-titles">
      {title}
      <span className="block mx-auto bg-primary mt-3 h-1 w-20">&nbsp;</span>
    </h2>
  );
}

function SectionSubtitle({ title }) {
  return (
    <h3 className="text-center font-bold text-3xl mb-6 text-primary font-titles">
      {title}
    </h3>
  );
}

function GradientPrimaryRoundedLink({
  url,
  isInternalLink = false,
  rounded = true,
  children,
  keepInMobile,
  ...props
}) {
  let linkClass = "";

  if (!keepInMobile) {
    linkClass =
      "lg:inline-block lg:py-4 lg:px-8 lg:border lg:border-solid lg:border-primary lg:bg-gradient-to-r lg:hover:from-green-400 lg:hover:to-primary lg:hover:text-white lg:hover:border-transparent text-primary";
  } else {
    linkClass =
      "inline-block py-4 px-8 border border-solid border-primary bg-gradient-to-r from-green-400 to-primary text-white border-transparent";
  }

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
      <Link href={url} {...props}>
        <a className={linkClass}>{children}</a>
      </Link>
    );
  }

  return linkElement;
}

export { PageTitle, SectionTitle, SectionSubtitle, GradientPrimaryRoundedLink };
