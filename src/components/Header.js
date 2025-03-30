"use client";

import Image from "next/image";
import Menu from "./Menu";

const Header = () => {
  const handleMenuOpenClick = () => {
    const menuIcon = document.getElementById("menuIcon");

    menuIcon.addEventListener("click", () => {
      const menu = document.querySelector(".menu");
      menu.classList.add("open");
    });
  };

  return (
    <div className="flex flex-row">
      <div className="menu h-screen w-full">
        <Menu />
      </div>
      <div className="flex flex-col justify-between items-center h-24 w-full">
        <div className="flex flex-row justify-content-between items-center h-full w-full">
          <div
            id="menuIcon"
            className="cursor-pointer"
            onClick={() => handleMenuOpenClick()}
          >
            <Image
              src={"/icons/menu.svg"}
              alt="menu-icon"
              width={"50"}
              height={"50"}
              color="black"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
