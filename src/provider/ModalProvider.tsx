import { PropsWithChildren, useReducer } from "react";
import { ModalContext, ModalDispatchContext, modalReducer } from "../context";

export const ModalProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(modalReducer, { isOpen: false });
  return (
    <ModalContext.Provider value={state}>
      <ModalDispatchContext.Provider value={dispatch}>
        {children}
      </ModalDispatchContext.Provider>
    </ModalContext.Provider>
  );
};
