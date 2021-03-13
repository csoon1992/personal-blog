import React from "react";
import Head from "next/head";
import SEO from "../../../seo.config";

export default function LayoutHead() {
  return (
    <Head>
      <title>{SEO.openGraph.site_name}</title>
      <meta property="og:title" content={SEO.openGraph.site_name} key="title" />
      <meta property="og:type" content={SEO.openGraph.type} />
      <meta name="og:locale" content={SEO.openGraph.locale} />
      <meta property="og:url" content={SEO.openGraph.url} />
      <meta property="og:site_name" content={SEO.openGraph.site_name} />
      <meta property="og:description" content={SEO.openGraph.description} />
      <meta name="description" content={SEO.openGraph.description} />
      <meta property="og:title" content={SEO.openGraph.site_name} />
      <meta property="og:titleTemplate" content={SEO.openGraph.site_name} />
      <link rel="icon" type="image/x-icon" href="/img/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
  );
}
