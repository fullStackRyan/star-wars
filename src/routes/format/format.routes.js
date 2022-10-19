import React from "react";
import { Outlet } from "react-router-dom";

function Format() {
  return (
    <div className="format">
      <Outlet />
    </div>
  );
}

export default Format;
