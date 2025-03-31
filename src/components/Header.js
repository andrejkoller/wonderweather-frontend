"use client";

import MenuIcon from "@mui/icons-material/Menu";
import Menu from "./Menu";
import { usePathname } from "next/navigation";

const Header = () => {
  const handleMenuOpenClick = () => {
    const menu = document.querySelector(".menu");
    menu.classList.add("open");
  };

  const pathname = usePathname();
  const path = pathname.split("/").pop();

  return (
    <div className="flex flex-row">
      <div className="menu h-screen w-full">
        <Menu />
      </div>
      <div className="flex flex-col justify-between items-center h-24 w-full">
        <div className="flex flex-row justify-between items-center h-full w-full">
          <div
            id="menuIcon"
            className="cursor-pointer"
            onClick={handleMenuOpenClick}
          >
            <MenuIcon />
          </div>
          <div>
            <span className="text-2xl font-bold">
              {path.charAt(0).toUpperCase() + path.slice(1)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
