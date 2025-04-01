import Header from "@/components/Header";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="header">
        <Header city="New York" />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
