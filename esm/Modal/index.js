var _templateObject, _templateObject2, _templateObject3;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import React from 'react';
import Overlay from '../Overlay';
import styled from 'styled-components';
export var Modal = function Modal(props) {
  if (!props.on) return /*#__PURE__*/React.createElement(React.Fragment, null);
  return /*#__PURE__*/React.createElement(Overlay, null, /*#__PURE__*/React.createElement(StyledModal, null, /*#__PURE__*/React.createElement(Background, {
    onClick: props.toggle
  }), /*#__PURE__*/React.createElement(Content, null, props.children)));
};
var StyledModal = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));
var Background = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  opacity: 0.6;\n  background-color: black;\n"])));
var Content = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: relative;\n  z-index: 2;\n  max-width: 100%;\n  max-height: 100%;\n"])));