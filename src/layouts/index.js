import React from "react";
import StickyMenu from "../components/Menu/StickyMenu";
import MyCookieConsent from "../components/cookieConsent";
import Footer from "../components/Footer";
import LayoutHead from "../components/Sections/LayoutHead";

const TemplateWrapper = ({ children }) => {
  return (
    <div className="bg-dark-600 text-white font-sans">
      <LayoutHead />
      <StickyMenu />
      <div className="main-content">{children}</div>

      <Footer />
      <MyCookieConsent />
    </div>
  );
};

export default TemplateWrapper;
