var _templateObject, _templateObject2, _templateObject3;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from 'styled-components';
var MenuStyle = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref) {
  var theme = _ref.theme;
  var divider = "".concat(theme.menuItemDividerWidth, " ").concat(theme.menuItemDividerStyle, " ").concat(theme.menuItemDividerColor);
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      background-color: ", ";\n      display: block;\n\n      ul.menu-items {\n        margin: 0;\n        padding: 0;\n      }\n\n      .menu-group,\n      .menu-item a {\n        font-family: ", ";\n        font-size: ", ";\n        font-weight: ", ";\n        line-height: ", ";\n        padding: ", ";\n      }\n\n      .menu-group,\n      .menu-group .menu-icon {\n        color: ", ";\n      }\n\n      .menu-item {\n        a {\n          color: ", ";\n          border-radius: ", ";\n        }\n\n        a.active {\n          background-color: ", ";\n          color: ", ";\n\n          .menu-icon {\n            color: ", ";\n          }\n        }\n\n        a:hover {\n          background-color: ", ";\n          color: ", ";\n          cursor: ", ";\n\n          .menu-icon {\n            color: ", ";\n          }\n        }\n\n        .menu-icon {\n          color: ", ";\n          font-size: ", ";\n          margin: ", ";\n          width: 1em;\n          text-align: center;\n        }\n\n        .expand-state {\n          color: ", ";\n        }\n      }\n\n      .menu-item {\n        border-bottom: ", ";\n\n        &:first-child {\n          border-top: none;\n        }\n        &:last-child {\n          border-bottom: none;\n        }\n\n        .menu-item:first-child {\n          border-top: ", ";\n        }\n      }\n\n      .menu-item > .menu-items {\n        background-color: ", ";\n        margin: ", ";\n        padding: ", ";\n      }\n\n      .menu-item > .menu-items > .menu-item {\n        background: ", ";\n        color: ", ";\n\n        a {\n          border-color: ", ";\n          border-style: ", ";\n          border-width: ", ";\n          padding: ", ";\n        }\n\n        a.active {\n          background-color: ", ";\n          border-color: ", ";\n          color: ", ";\n\n          .menu-icon {\n            color: ", ";\n          }\n        }\n\n        a:hover {\n          background-color: ", ";\n          border-color: ", ";\n          color: ", ";\n\n          .menu-icon {\n            color: ", ";\n          }\n        }\n\n        a.active:hover {\n          background-color: ", ";\n          border-color: ", ";\n          color: ", ";\n\n          .menu-icon {\n            color: ", ";\n          }\n        }\n      }\n\n      .menu-item > .menu-items > .menu-group {\n        &,\n        & .menu-icon {\n          color: ", ";\n        }\n      }\n\n      .menu-items,\n      .menu-item > .menu-items {\n        list-style-type: none;\n        overflow: hidden;\n      }\n\n      .menu-item a {\n        display: flex;\n        color: inherit;\n        text-decoration: none;\n        align-items: center;\n\n        .menu-title {\n          flex: 1 0 auto;\n          ", "\n        }\n      }\n\n      .menu-group span {\n        display: flex;\n      }\n    "])), theme.menuBackgroundColor, theme.menuTextFontFamily, theme.menuTextFontSize, theme.menuTextFontWeight, theme.menuTextLineHeight, theme.menuItemPadding, theme.menuGroupTextColor, theme.menuTextColor, theme.menuItemBorderRadius, theme.menuItemActiveBackgroundColor, theme.menuItemActiveTextColor, theme.menuItemIconActiveColor, theme.menuItemHoverBackgroundColor, theme.menuItemHoverTextColor, theme.menuItemHoverCursor, theme.menuItemIconHoverColor, theme.menuItemIconColor, theme.menuItemIconWidth, theme.menuItemIconMargin, theme.menuItemIconColor, divider, divider, theme.menuSubmenuBackgroundColor, theme.menuSubmenuMargin, theme.menuSubmenuPadding, theme.menuSubmenuBackgroundColor, theme.menuSubmenuTextColor, theme.menuSubmenuItemBorderColor, theme.menuSubmenuItemBorderStyle, theme.menuSubmenuItemBorderWidth, theme.menuSubmenuItemPadding, theme.menuSubmenuItemActiveBackgroundColor, theme.menuSubmenuItemActiveBorderColor, theme.menuSubmenuItemActiveTextColor, theme.menuSubmenuItemIconActiveColor, theme.menuSubmenuItemHoverBackgroundColor, theme.menuSubmenuItemHoverBorderColor, theme.menuSubmenuItemHoverTextColor, theme.menuSubmenuItemIconHoverColor, theme.menuSubmenuItemActiveHoverBackgroundColor, theme.menuSubmenuItemActiveHoverBorderColor, theme.menuSubmenuItemActiveHoverTextColor, theme.menuSubmenuItemIconActiveHoverColor, theme.menuGroupTextColor, theme.dir === 'rtl' && 'text-align: right;');
});
var ItemStyle = styled.li(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  ul {\n    &.expanded {\n      max-height: 2000px;\n      transition: max-height 0.5s cubic-bezier(1, 0.15, 1, 1);\n    }\n\n    &.collapsed {\n      max-height: 0;\n      transition: max-height 0.5s cubic-bezier(0, 1, 0.3, 1) -100ms;\n    }\n  }\n"])));
export { MenuStyle, ItemStyle };