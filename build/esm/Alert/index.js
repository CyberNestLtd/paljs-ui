var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _span;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import styled, { css } from 'styled-components';
import { scrollbars } from '../utils';
var AlertStyle = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref) {
  var theme = _ref.theme,
    size = _ref.size,
    status = _ref.status,
    accent = _ref.accent,
    outline = _ref.outline,
    closable = _ref.closable;
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    position: relative;\n\n    border-radius: ", ";\n    box-shadow: ", ";\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    padding: ", ";\n    margin-bottom: ", ";\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    .close {\n      padding: ", ";\n      font-size: 1.5rem;\n      line-height: 1;\n      cursor: pointer;\n      font-family: monospace;\n\n      position: absolute;\n      top: 0;\n      ", ": 0;\n      color: inherit;\n      background-color: transparent;\n      border: 0;\n      -webkit-appearance: none;\n    }\n    ", "\n  "])), theme.alertBorderRadius, theme.alertShadow, theme.alertTextFontFamily, theme.alertTextFontSize, theme.alertTextFontWeight, theme.alertTextLineHeight, theme.alertPadding, theme.alertBottomMargin, scrollbars(theme.alertScrollbarColor, theme.alertScrollbarBackgroundColor, theme.alertScrollbarWidth), size && "height: ".concat(theme["alert".concat(size, "Height")], ";"), status && css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        background-color: ", ";\n        color: ", ";\n        a,\n        a:hover {\n          color: ", ";\n        }\n      "])), theme["alert".concat(status, "BackgroundColor")], theme["alert".concat(status, "TextColor")], theme["alert".concat(status, "TextColor")]), accent && css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        border-top: ", " solid ", ";\n      "])), theme.alertBorderRadius, theme["alertAccent".concat(status, "Color")]), outline && css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        border: ", " solid ", ";\n      "])), theme.alertOutlineWidth, theme["alertOutline".concat(status, "Color")]), theme.alertPadding, theme.dir === 'rtl' ? 'left' : 'right', closable && css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        padding-", ": ", ";\n      "])), theme.dir === 'rtl' ? 'left' : 'right', theme.alertClosableStartPadding));
});
var Alert = function Alert(props) {
  return /*#__PURE__*/React.createElement(AlertStyle, props, props.closable && /*#__PURE__*/React.createElement("button", {
    onClick: props.onClose,
    type: "button",
    className: "close",
    "aria-label": "Close"
  }, _span || (_span = /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"))), props.children);
};
Alert.defaultProps = {
  status: 'Basic'
};
export default Alert;