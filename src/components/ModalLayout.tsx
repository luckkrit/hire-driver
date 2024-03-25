import { Outlet, useLocation } from "react-router-dom";
import { Modal } from "./Modal";

export const ModalLayout = () => {
  const { state } = useLocation();

  console.log(state);
  return state?.background ? (
    <Modal>
      <Outlet />
    </Modal>
  ) : (
    <Outlet />
  );
};
