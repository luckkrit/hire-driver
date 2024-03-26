import {
  Outlet,
  useLocation,
  useOutletContext,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { Modal } from "./Modal";
import React, { useEffect, useState } from "react";

export const ModalLayout = () => {
  const { state } = useLocation();
  const background = state && state.background;
  const navigate = useNavigate();
  useEffect(() => {
    if (background === undefined || background === null) {
      navigate("/", {
        replace: true,
      });
    }
  }, []);
  return state?.background ? (
    <Modal>
      <Outlet />
    </Modal>
  ) : (
    <Outlet />
  );
};
