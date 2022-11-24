var _templateObject, _templateObject2;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from 'styled-components';
var PopoverStyle = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref) {
  var theme = _ref.theme;
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    border: ", " solid ", ";\n    border-radius: ", ";\n    background: ", ";\n    box-shadow: ", ";\n    color: ", ";\n\n    .primitive-overlay {\n      font-family: ", ";\n      font-size: ", ";\n      font-weight: ", ";\n      line-height: ", ";\n      padding: ", ";\n    }\n\n    .arrow {\n      position: absolute;\n      width: 0;\n      height: 0;\n      border-left: ", " solid transparent;\n      border-right: ", " solid transparent;\n      border-bottom: ", " solid ", ";\n\n      &::after {\n        position: absolute;\n        content: ' ';\n        width: 0;\n        height: 0;\n        top: 3px;\n        left: calc(50% - ", ");\n        border-left: ", " solid transparent;\n        border-right: ", " solid transparent;\n        border-bottom: ", " solid ", ";\n        clip-path: inset(0 0 2px);\n      }\n    }\n  "])), theme.popoverBorderWidth, theme.popoverBorderColor, theme.popoverBorderRadius, theme.popoverBackgroundColor, theme.popoverShadow, theme.popoverTextColor, theme.popoverTextFontFamily, theme.popoverTextFontSize, theme.popoverTextFontWeight, theme.popoverTextLineHeight, theme.popoverPadding, theme.popoverArrowSize, theme.popoverArrowSize, theme.popoverArrowSize, theme.popoverBorderColor, theme.popoverArrowSize, theme.popoverArrowSize, theme.popoverArrowSize, theme.popoverArrowSize, theme.popoverBackgroundColor);
});
export default PopoverStyle;