import React from 'react';
import './styles.css';

const Modal = ({ children, isVisible = true, style }) => {

  return (
    <div className={`modal-container ${isVisible ? "isVisible" : "notVisible"}`}>
      <div className='modal'>
        <div style={style} className='content'>
          {children}
        </div>
      </div>
    </div>
  );
};
export default Modal;