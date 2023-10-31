import React from 'react';

const Modal = ({ imageUrl, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <img src={imageUrl} alt="Modal" />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
