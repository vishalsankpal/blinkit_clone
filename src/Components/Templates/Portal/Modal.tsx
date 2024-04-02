import ReactDOM from "react-dom";
import styled from "styled-components";
import { ReactNode } from "react";
interface Props {
  children?: ReactNode;
  location: "center" | "auto"; // Specify valid values for location
  close: () => void;
  height?: string; // Make height prop optional
}
const Modal: React.FC<Props> = ({ children, location, close, height }) => {
  const modalRoot: HTMLElement | null = document.getElementById("modal-root");
  if (!modalRoot) return null; // Return null if modal root is not found
  return ReactDOM.createPortal(
    <>
      <ModalWrapper className={`modal ${location} ${height}`}>
        {children}
      </ModalWrapper>
      <Overlay onClick={close} />
    </>,
    modalRoot
  );
};

export default Modal;

const ModalWrapper = styled.div`
  position: fixed;
  height: 100%;
  width: 320px;
  right: 0;
  top: 0;
  background: #fff;
  padding: 10px;
  z-index: 2;
  &.center {
    top: 50%;
    right: auto;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &.auto {
    height: auto;
  }
`;
const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
`;
