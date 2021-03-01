import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import MyCookieConsent from "../components/cookieConsent";
import Footer from "../components/Footer";

const TemplateWrapper = ({ children }) => {
  return (
    <div id="index" className="App">
      {/*<Helmet
        title="Cristina Soler"
        titleTemplate={`%s - ${data.site.siteMetadata.title}`}
        description={data.site.siteMetadata.subtitle}
      >
        <meta
          name="description"
          content={`Web personal de ${data.site.siteMetadata.title}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={data.site.siteMetadata.title} />
        <meta property="og:site_name" content="CristinaSoler" />
        <meta property="og:url" content="https://cristinasoler.me/" />
        <meta
          property="og:description"
          content={`Web personal de ${data.site.siteMetadata.title}`}
        />
        <meta property="og:type" content="website" />
        <meta name="og:locale" content="es_ES" />
        <meta property="og:image" content="/files/index-bg.jpg" />
      </Helmet>*/}

      <div className="main-content">{children}</div>

      <Footer />
      <MyCookieConsent />
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.array,
};

export default TemplateWrapper;
