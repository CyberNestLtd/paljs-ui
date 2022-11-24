var _templateObject, _templateObject2, _templateObject3;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from 'styled-components';
var List = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  overflow: auto;\n"])));
var ListItem = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref) {
  var theme = _ref.theme;
  return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    border-bottom: ", " ", " ", ";\n    color: ", ";\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    padding: ", ";\n    display: flex;\n    align-items: center;\n    flex-shrink: 0;\n\n    &:first-child {\n      border-top: ", " ", " ", ";\n    }\n  "])), theme.listItemDividerWidth, theme.listItemDividerStyle, theme.listItemDividerColor, theme.listItemTextColor, theme.listItemFontFamily, theme.listItemFontSize, theme.listItemFontWeight, theme.listItemLineHeight, theme.listItemPadding, theme.listItemDividerWidth, theme.listItemDividerStyle, theme.listItemDividerColor);
});
export { List, ListItem };