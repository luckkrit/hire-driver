import React, { PropsWithChildren, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import {
  ModalActionType,
  useModalContext,
  useModalDispatchContext,
} from "../context";

export const Modal = ({ children }: PropsWithChildren) => {
  const { isOpen } = useModalContext();
  const dispatch = useModalDispatchContext();
  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        dispatch &&
          dispatch({ type: ModalActionType.CLOSE, payload: { isOpen: false } });
      }}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl w-full h-full rounded bg-white">
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
