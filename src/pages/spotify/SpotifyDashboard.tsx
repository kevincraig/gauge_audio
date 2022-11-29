import React from "react";
import { Outlet } from "react-router-dom";

const SpotifyDashboard = () => {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
};
export { SpotifyDashboard };
