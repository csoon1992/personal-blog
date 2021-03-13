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
    </Head>
  );
}
