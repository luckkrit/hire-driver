import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { ModalActionType, useModalDispatchContext } from "../context";

export const Home = () => {
  const dispatch = useModalDispatchContext();
  const location = useLocation();
  return (
    <div>
      <h2>Create contextual modal navigation</h2>
      <div className="grid grid-cols-2">
        <Link
          to="/booknow/1"
          state={{ background: location }}
          onClick={() => {
            dispatch &&
              dispatch({
                type: ModalActionType.OPEN,
                payload: { isOpen: true },
              });
          }}
        >
          Book Now
        </Link>
        <Link
          to="/bookdate/1"
          state={{ background: location }}
          onClick={() => {
            dispatch &&
              dispatch({
                type: ModalActionType.OPEN,
                payload: { isOpen: true },
              });
          }}
        >
          Book Date
        </Link>
      </div>
      <Outlet />
    </div>
  );
};
