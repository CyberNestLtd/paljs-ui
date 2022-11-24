var _templateObject, _templateObject2, _templateObject3;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from 'styled-components';
var TooltipStyle = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref) {
  var theme = _ref.theme,
    status = _ref.status,
    arrowSize = _ref.arrowSize;
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    box-shadow: ", ";\n    background: ", ";\n    border: ", " ", " ", ";\n    border-radius: ", ";\n    padding: ", ";\n    max-width: ", ";\n    z-index: 10000;\n    .content {\n      display: flex;\n      align-items: center;\n      color: ", ";\n      font-family: ", ";\n      font-size: ", ";\n      font-weight: ", ";\n      line-height: ", ";\n    }\n\n    .arrow {\n      position: absolute;\n      width: 0;\n      height: 0;\n      border-bottom: ", " ", " ", ";\n      border-left: ", " solid transparent;\n      border-right: ", " solid transparent;\n    }\n\n    .icon:only-child {\n      height: ", ";\n      width: ", ";\n    }\n    .icon:not(:only-child) {\n      height: ", ";\n      width: ", ";\n    }\n\n    span {\n      line-height: 1.25rem;\n    }\n\n    ", "\n  "])), theme.tooltipShadow, theme.tooltipBackgroundColor, theme.tooltipBorderWidth, theme.tooltipBorderStyle, theme.tooltipBorderColor, theme.tooltipBorderRadius, theme.tooltipPadding, theme.tooltipMaxWidth, theme.tooltipTextColor, theme.tooltipTextFontFamily, theme.tooltipTextFontSize, theme.tooltipTextFontWeight, theme.tooltipTextLineHeight, arrowSize, theme.tooltipBorderStyle, theme.tooltipBackgroundColor, arrowSize, arrowSize, theme.tooltipIconHeight, theme.tooltipIconWidth, theme.tooltipTextFontSize, theme.tooltipTextFontSize, status && css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      background: ", ";\n      border-color: ", ";\n\n      .arrow {\n        border-bottom-color: ", ";\n      }\n\n      .content {\n        color: ", ";\n      }\n    "])), theme["tooltip".concat(status, "BackgroundColor")], theme["tooltip".concat(status, "BorderColor")], theme["tooltip".concat(status, "BackgroundColor")], theme["tooltip".concat(status, "TextColor")]));
});
export default TooltipStyle;