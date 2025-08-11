import ReactDOM from "react-dom";
import "./Modal.css";

function Modal({ children }) {
  const modalRoot = document.getElementById("modal-root");
  return ReactDOM.createPortal(
    <div id="overlay">
      <div id="modal">{children}</div>
    </div>,
    modalRoot
  );
}

export default Modal;
