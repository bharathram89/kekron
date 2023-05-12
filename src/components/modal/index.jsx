import React, { Children } from "react";
import Modal from "react-modal";

import "./modal.css";

export default ({ isOpen, onRequestClose, name, children }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="Modal"
    className={{
      base: "modal-base",
      afterOpen: "modal-base_after-open",
      beforeClose: "modal-base_before-close",
    }}
    overlayClassName={{
      base: "overlay-base",
      afterOpen: "overlay-base_after-open",
      beforeClose: "overlay-base_before-close",
    }}
    shouldCloseOnOverlayClick={true}
    closeTimeoutMS={2000}
  >
    {/* <div className="d-flex flex-row">
      <button onClick={onRequestClose}>
      <p>Main</p>
      </button>
      
    </div> */}
    <a onClick={onRequestClose} className='close-btn text-white font-exo inline-block text-center font-bold group hover:opacity-80 leading-11 h-12 sm:leading-12 rounded-22 bg-primary'>Close</a>
    {children}
  </Modal>
);
