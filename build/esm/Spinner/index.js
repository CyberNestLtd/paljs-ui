var _templateObject, _templateObject2, _templateObject3, _templateObject4, _span;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css, keyframes } from 'styled-components';
import React from 'react';
var spin = keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  0% {\n    transform: rotate(0deg);\n  }\n  40% {\n    transform: rotate(230deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"])));
var SpinnerStyle = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref) {
  var theme = _ref.theme,
    size = _ref.size,
    status = _ref.status;
  return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    opacity: 1;\n    position: absolute;\n    border-radius: inherit;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    overflow: hidden;\n    z-index: 999;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    visibility: visible;\n    ", "\n\n    .spin-circle {\n      animation: ", " 0.8s infinite linear;\n      border-radius: 50%;\n      border-style: solid;\n      border-width: 0.125em;\n      width: 1em;\n      height: 1em;\n    }\n\n    .message {\n      margin-left: 0.5rem;\n      color: ", ";\n      font-family: ", ";\n      font-size: ", ";\n      font-weight: ", ";\n      line-height: ", ";\n    }\n\n    ", "\n  "])), size && "font-size: ".concat(theme["spinnerHeight".concat(size)], ";"), spin, theme.spinnerTextColor, theme.spinnerTextFontFamily, theme.spinnerTextFontSize, theme.spinnerTextFontWeight, theme.spinnerTextLineHeight, status && css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      background-color: ", ";\n\n      .spin-circle {\n        border-top-color: ", ";\n        border-right-color: ", ";\n        border-bottom-color: ", ";\n        border-left-color: ", ";\n      }\n    "])), theme["spinner".concat(status, "BackgroundColor")], theme["spinner".concat(status, "CircleFilledColor")], theme["spinner".concat(status, "CircleEmptyColor")], theme["spinner".concat(status, "CircleFilledColor")], theme["spinner".concat(status, "CircleFilledColor")]));
});
var Spinner = function Spinner(props) {
  return /*#__PURE__*/React.createElement(SpinnerStyle, props, _span || (_span = /*#__PURE__*/React.createElement("span", {
    className: "spin-circle"
  })), /*#__PURE__*/React.createElement("span", {
    className: "message"
  }, props.children));
};
Spinner.defaultProps = {
  size: 'Medium',
  status: 'Primary'
};
export default Spinner;