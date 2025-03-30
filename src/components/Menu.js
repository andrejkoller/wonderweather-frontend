import Image from "next/image";
import Link from "next/link";

const Menu = () => {
  const handleMenuCloseClick = () => {
    const closeIcon = document.getElementById("closeIcon");

    closeIcon.addEventListener("click", () => {
      const menu = document.querySelector(".menu");
      menu.classList.remove("open");
    });
  };

  return (
    <div className="flex flex-col justify-start items-center h-full w-11/12 m-auto">
      <div className="flex flex-row justify-content-between items-center h-24 w-full">
        <div
          id="closeIcon"
          className="cursor-pointer"
          onClick={() => handleMenuCloseClick()}
        >
          <Image
            src={"/icons/close.svg"}
            alt="menu-icon"
            width={"50"}
            height={"50"}
            color="black"
          ></Image>
        </div>
      </div>
      <div className="menu-navigation flex flex-col h-full w-full text-center">
        <ul>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/dashboard"}>Dashboard</Link>
          </li>
          <li>
            <Link href={"/settings"}>Settings</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
