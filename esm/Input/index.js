var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from 'styled-components';
import React from 'react';
import { componentAnimation } from '../utils';
var GroupStyle = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref) {
  var theme = _ref.theme,
    size = _ref.size,
    status = _ref.status,
    shape = _ref.shape,
    fullWidth = _ref.fullWidth;
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      display: flex;\n      min-width: 0;\n      position: relative;\n\n      input,\n      textarea {\n        border-style: ", ";\n        border-width: ", ";\n        font-family: ", ";\n        -webkit-appearance: none;\n\n        ", "\n        \n        ", "\n\n        &::placeholder {\n          font-family: ", ";\n          text-overflow: ellipsis;\n        }\n        \n        &:focus {\n          outline: none;\n        }\n      \n        ", "\n\n        ", "\n\n        ", "\n      }\n    "])), theme.inputBorderStyle, theme.inputBorderWidth, theme.inputTextFontFamily, componentAnimation('border, background-color, color, box-shadow'), fullWidth && 'width: 100%;', theme.inputPlaceholderTextFontFamily, status && css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n            background-color: ", ";\n            border-color: ", ";\n            color: ", ";\n\n            &::placeholder {\n              color: ", ";\n            }\n\n            &:focus {\n              background-color: ", ";\n              border-color: ", ";\n            }\n            &:hover {\n              background-color: ", ";\n              border-color: ", ";\n            }\n\n            &:disabled {\n              background-color: ", ";\n              border-color: ", ";\n              color: ", ";\n\n              &::placeholder {\n                color: ", ";\n              }\n            }\n          "])), theme["input".concat(status, "BackgroundColor")], theme["input".concat(status, "BorderColor")], theme["input".concat(status, "TextColor")], theme["input".concat(status, "PlaceholderTextColor")], theme["input".concat(status, "FocusBackgroundColor")], theme["input".concat(status, "FocusBorderColor")], theme["input".concat(status, "HoverBackgroundColor")], theme["input".concat(status, "HoverBorderColor")], theme["input".concat(status, "DisabledBackgroundColor")], theme["input".concat(status, "DisabledBorderColor")], theme["input".concat(status, "DisabledTextColor")], theme["input".concat(status, "DisabledPlaceholderTextColor")]), shape && css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n            border-radius: ", ";\n          "])), theme["input".concat(shape, "BorderRadius")]), size && css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n            font-size: ", ";\n            font-weight: ", ";\n            line-height: ", ";\n            padding: ", ";\n\n            ", "\n\n            &::placeholder {\n              font-size: ", ";\n              font-weight: ", ";\n              line-height: ", ";\n            }\n          "])), theme["input".concat(size, "TextFontSize")], theme["input".concat(size, "TextFontWeight")], theme["input".concat(size, "TextLineHeight")], theme["input".concat(size, "Padding")], !fullWidth && "max-width: ".concat(theme["input".concat(size, "MaxWidth")], ";"), theme["input".concat(size, "PlaceholderTextFontSize")], theme["input".concat(size, "PlaceholderTextFontWeight")], theme["input".concat(size, "PlaceholderTextLineHeight")]));
});
export var InputGroup = function InputGroup(props) {
  return /*#__PURE__*/React.createElement(GroupStyle, props, props.children);
};
InputGroup.defaultProps = {
  size: 'Medium',
  shape: 'Rectangle',
  status: 'Basic'
};