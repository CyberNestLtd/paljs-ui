var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled from 'styled-components';
import ReactDOM from 'react-dom';
import React from 'react';
var OverlayStyle = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000;\n  display: flex;\n  max-width: 100%;\n  max-height: 100%;\n  justify-content: center;\n  align-items: center;\n"])));
var Overlay = function Overlay(props) {
  return /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement(OverlayStyle, props, props.children), document.getElementById('overlay-container'));
};
export default Overlay;