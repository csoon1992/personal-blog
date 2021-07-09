import React from "react";
import MenuLink from "./MenuLink";
import Link from "next/link";

function MainMenu() {
  return (
    <div id="menu-items" className="flex justify-between items-center">
      <div>
        <Link href="/" active="false">
          <a className="text-2xl">
            <span>Cristina</span>
            <span className="text-primary">Soler</span>
          </a>
        </Link>
      </div>

      <div className="space-x-6">
        <MenuLink to="/#about" title="Sobre mí" active="false" anchor="true" />
        <MenuLink
          to="/#experiences"
          title="Experiencias"
          active="false"
          anchor="true"
        />
        <MenuLink
          to="/#portfolio"
          title="Portfolio"
          active="false"
          anchor="true"
        />
        <MenuLink to="/blog" title="Blog" active="false" />
      </div>
    </div>
  );
}

export default MainMenu;
