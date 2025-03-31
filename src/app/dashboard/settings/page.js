"use client";

import Theme from "@/components/Theme";

const Page = () => {
  return (
    <div className="flex flex-col justify-end items-center h-full w-full">
      <div className="page-title flex flex-col justify-center items-start">
        <p className="text-lg font-medium">Manage your settings here</p>
      </div>
      <div className="my-10 w-full">
        <Theme />
      </div>
    </div>
  );
};

export default Page;
