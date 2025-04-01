"use client";

import City from "@/components/City";

const Page = () => {
  return (
    <div className="flex flex-col justify-start items-center h-full w-full">
      <div className="page-title flex flex-col justify-center items-start">
        <p className="text-lg">Manage your location</p>
      </div>
      <div className="my-8 h-full w-full">
        <div className="h-full">
          <span className="text-lg font-medium">City</span>
          <City />
        </div>
      </div>
    </div>
  );
};

export default Page;
