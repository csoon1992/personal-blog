import React from "react";
import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <footer className="fixed-bottom bg-gray-600 text-white px-8 px-sm-5 py-16">
      <div className="contact flex flex-col items-center content-center">
        <div className="made-by mb-4">
          Hecho por&nbsp;
          <span className="font-bold">Cristina Soler</span>
        </div>

        <div className="links">
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
