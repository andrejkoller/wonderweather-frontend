"use client";

import Theme from "@/components/Theme";
import FontSize from "@/components/FontSize";

const Page = () => {
  return (
    <div className="flex flex-col justify-end items-center h-full w-full">
      <div className="page-title flex flex-col justify-center items-start">
        <p className="text-lg text-white">
          Manage your settings here
        </p>
      </div>
      <div className="my-10 w-full">
        <span className="text-lg font-medium">Theme</span>
        <Theme />
      </div>
      <div className="my-10 w-full">
        <span className="text-lg font-medium">Font Size</span>
        <FontSize />
      </div>
    </div>
  );
};

export default Page;
