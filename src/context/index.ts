import { createContext, PropsWithChildren, useContext, useReducer } from "react"

export enum ModalActionType {
    OPEN = "OPEN",
    CLOSE = "CLOSE"
}

interface ModalState {
    isOpen: boolean
}
interface ModalAction {
    type: ModalActionType
    payload: ModalState
}

export const modalReducer = (state: ModalState, action: ModalAction) => {
    switch (action.type) {
        case ModalActionType.OPEN:
            return { ...state, ...action.payload }
        case ModalActionType.CLOSE:
            return { ...state, ...action.payload }
        default:
            throw Error("Unknown action: " + action.type);
    }
}

export const ModalContext = createContext<ModalState>({ isOpen: false })
export const ModalDispatchContext =
    createContext<React.Dispatch<ModalAction> | null>(null);

export const useModalContext = () => useContext(ModalContext)
export const useModalDispatchContext = () => useContext(ModalDispatchContext)