"use client";

import React, { useState } from "react";
import Navbar from "../navbar";
import SideBar from "./sideBar";
import IconSideBar from "./iconSideBar";

const MaiNav = () => {
  const [isHidden, setIsHidden] = useState(false);

  const toggleClassName = () => {
    setIsHidden(!isHidden);
  };
  return (
    <main className="h-screen  flex flex-col">
      <Navbar toggle={toggleClassName} />
      <div className="flex h-full">
        <div className="flex ml-auto">
          <SideBar isHidden={isHidden} />
          <IconSideBar isHidden={isHidden} />
        </div>
      </div>
    </main>
  );
};

export default MaiNav;
