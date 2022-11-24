var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from 'styled-components';
var ActionsStyle = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref) {
  var theme = _ref.theme;
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    background-color: ", ";\n    color: ", ";\n    font-family: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    display: flex;\n    align-items: center;\n  "])), theme.actionsBackgroundColor, theme.actionsTextColor, theme.actionsTextFontFamily, theme.actionsTextFontWeight, theme.actionsTextLineHeight);
});
var ActionStyle = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref2) {
  var theme = _ref2.theme,
    fullWidth = _ref2.fullWidth,
    disabled = _ref2.disabled,
    size = _ref2.size,
    inverse = _ref2.inverse;
  return css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      display: flex;\n      flex-wrap: wrap;\n      align-items: center;\n      position: relative;\n      ", "\n\n      &:first-child {\n        ", "\n      }\n\n      a.icon-container {\n        &:hover,\n        &:focus {\n          text-decoration: none;\n        }\n      }\n\n      .control-icon {\n        &:hover {\n          cursor: pointer;\n        }\n        color: ", ";\n      }\n\n      ", "\n\n        ", "\n        ", "\n        \n      border-", ": ", " ", " ", "; \n      background: transparent;\n"])), fullWidth && css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n          justify-content: center;\n          width: 100%;\n        "]))), theme.dir === 'rtl' ? 'border-right: none !important;' : 'border-left: none !important;', theme.actionsIconColor, size && css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n          font-size: ", ";\n          height: ", ";\n          padding: ", ";\n          .control-icon {\n            font-size: ", ";\n          }\n        "])), theme["actions".concat(size, "TextFontSize")], theme["actions".concat(size, "Height")], theme["actions".concat(size, "Padding")], theme["actions".concat(size, "IconHeight")]), disabled && css(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n            & > * {\n              opacity: 0.5;\n            }\n            cursor: not-allowed;\n            color: ", " a, i {\n              cursor: not-allowed !important;\n              color: ", ";\n            }\n          "])), theme.actionsDisabledTextColor, theme.actionsDisabledIconColor), inverse && css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n            border-", ": \n            ", " ", " ", "; \n          "])), theme.dir === 'rtl' ? 'right' : 'left', theme.actionsDividerWidth, theme.actionsDividerStyle, theme.actionsDividerColor), theme.dir === 'rtl' ? 'right' : 'left', theme.actionsDividerWidth, theme.actionsDividerStyle, theme.actionsDividerColor);
});
export { ActionsStyle, ActionStyle };