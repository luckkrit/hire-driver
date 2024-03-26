import {
  Outlet,
  useLocation,
  useOutletContext,
  Navigate,
} from "react-router-dom";
import { Modal } from "./Modal";
import React, { useState } from "react";

export const ModalLayout = () => {
  const { state } = useLocation();
  return state?.background ? (
    <Modal>
      <Outlet />
    </Modal>
  ) : (
    <Outlet />
  );
};
