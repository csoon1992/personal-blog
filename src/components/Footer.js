import React from "react";
import SocialLinks from "./SocialLinks";
import { useRouter } from "next/router";

function Footer() {
  const router = useRouter();
  let bgClass = router.pathname == "/" ? " bg-dark-600" : "";

  return (
    <footer
      className={`fixed-bottom bg-dark text-white px-8 px-sm-5 py-16 ${bgClass}`}
    >
      <div className="contact flex flex-col items-center content-center">
        <div className="made-by mb-4">
          Hecho por&nbsp;
          <span className="font-bold">Cristina Soler</span> &copy; 2021
        </div>

        <div className="links">
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
