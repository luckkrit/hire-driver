import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export const Home = () => {
  const location = useLocation();
  return (
    <div>
      <h2>Create contextual modal navigation</h2>
      <Link to="/modal/1" state={{ background: location }}>
        Open Modal 1
      </Link>
      <Outlet />
    </div>
  );
};
