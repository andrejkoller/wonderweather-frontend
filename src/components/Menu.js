"use client";

import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";

const Menu = () => {
  const handleMenuCloseClick = () => {
    const menu = document.querySelector(".menu");
    menu.classList.remove("open");
  };

  return (
    <div className="flex flex-col justify-start items-center h-full w-11/12 m-auto">
      <div className="flex flex-row justify-content-between items-center h-24 w-full">
        <div
          id="closeIcon"
          className="cursor-pointer"
          onClick={handleMenuCloseClick}
        >
          <CloseIcon />
        </div>
      </div>
      <div className="menu-navigation flex flex-col h-full w-full text-center">
        <ul>
          <li className="my-5 border-3">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="my-5 border-3">
            <Link href={"/dashboard"}>Dashboard</Link>
          </li>
          <li className="my-5 border-3">
            <Link href={"/dashboard/settings"}>Settings</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
