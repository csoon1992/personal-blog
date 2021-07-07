import React from "react";
import Menu from "./MainMenu";

function StickyMenu() {
  return (
    <div className="menu py-4 bg-dark-high">
      <div className="container mx-auto">
        <Menu />
      </div>
    </div>
  );
}

export default StickyMenu;
