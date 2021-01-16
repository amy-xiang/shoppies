import React, { useContext } from "react";
import { ReactComponent as Nominate } from "../assets/trophy.svg";
import "./Modal.css";

// referenced Cameron Moorehead (December 23, 2020), https://www.digitalocean.com/community/tutorials/react-modal-component

const Modal = ({ show, message, onClose }) => {
  const showHideClassName = show ? "Modal display-block" : "Modal display-none";

  return (
    <div className={showHideClassName}>
      <div className="ModalContent">
        <button className="ModalButton" onClick={onClose}>
          &times;
        </button>
        <div className="ModalMessageContainer">
          <Nominate className="ModalNominateIcon" />
          <p className="ModalMessage">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
