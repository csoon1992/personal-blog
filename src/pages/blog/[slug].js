import React from "react";
import { Location } from "@reach/router";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import Footer from "../components/Footer";
import MyCookieConsent from "../components/cookieConsent";

import "../assets/scss/pages/about.scss";
import "../assets/scss/pages/blog.scss";

const TemplateWrapper = ({ children, isPost, isAbout, location }) => {
  let pageClass = "App";
  let title = "Blog";

  let pageContent = (
    <div className="pageContent pl-4 mx-auto">
      <div>{children}</div>
    </div>
  );

  if (isPost) {
    pageClass += " post-page";

    pageContent = <div className="pageContent pl-4 mx-auto">{children}</div>;
  }

  return (
    <StaticQuery
      query={pageQuery}
      render={(data) => (
        <div id="blog-layout" className={pageClass}>
          <Location>
            {({ location }) => (
              <Helmet
                title={title}
                titleTemplate={`%s - ${data.site.siteMetadata.title}`}
                description={data.site.siteMetadata.subtitle}
              >
                <meta property="og:title" content={title} />
                <meta property="og:site_name" content="CristinaSoler" />
                <meta property="og:url" content={location.href} />
                <meta name="og:locale" content="es_ES" />

                <meta property="og:image" content="/files/index-bg.jpg" />
                <meta
                  name="description"
                  content={`Web personal de ${data.site.siteMetadata.title}`}
                />
                <meta
                  property="og:description"
                  content={`Web personal de ${data.site.siteMetadata.title}`}
                />
                <meta property="og:type" content="website" />

                <link rel="canonical" href={location.href} />
              </Helmet>
            )}
          </Location>

          <div className="blog-wrapper mx-0 h-100">{pageContent}</div>

          <Footer />
          <MyCookieConsent />
        </div>
      )}
    />
  );
};

export default TemplateWrapper;
