import React from 'react';
import './styles.css';
const Modal = ({
  children,
  isVisible = true,
  style
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: `modal-container ${isVisible ? "isVisible" : "notVisible"}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/React.createElement("div", {
    style: style,
    className: "content"
  }, children)));
};
export default Modal;