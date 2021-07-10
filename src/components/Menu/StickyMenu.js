import React from "react";
import Menu from "./MainMenu";

function StickyMenu() {
  return (
    <div className="menu sticky top-0 z-10 py-4 bg-dark-100 backdrop-filter backdrop-blur-xl bg-opacity-30 shadow-md border-b border-opacity-20 border-dark-100">
      <div className="container mx-auto">
        <Menu />
      </div>
    </div>
  );
}

export default StickyMenu;
