var _templateObject, _templateObject2, _templateObject3;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from 'styled-components';
import columnCurtain from './column-curtain';
import curtain from './curtain';
import modalDrop from './modal-drop';
import modalMove from './modal-move';
import modalHalf from './modal-half';
import modalZoomin from './modal-zoomin';
import rotateLayout from './rotate-layout';
var SearchStyle = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  button {\n    margin: 0 auto;\n    padding: 0;\n    cursor: pointer;\n    border: none;\n    background: none;\n\n    &:focus {\n      box-shadow: none;\n      outline: none;\n    }\n  }\n"])));
var SearchFieldStyle = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref) {
  var theme = _ref.theme;
  return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    .search {\n      background: ", ";\n\n      button {\n        font-size: 2rem;\n        margin: 0 auto;\n        padding: 0;\n        cursor: pointer;\n        border: none;\n        background: none;\n\n        &:focus {\n          box-shadow: none;\n          outline: none;\n        }\n      }\n\n      span {\n        color: ", ";\n        font-family: ", ";\n        font-size: ", ";\n        font-weight: ", ";\n        line-height: ", ";\n        display: block;\n        width: 75%;\n        margin: 0 auto;\n        padding: 0.85rem 0;\n        text-align: right;\n      }\n\n      input {\n        border-bottom: ", " ", " ", ";\n        color: ", ";\n        font-family: ", ";\n        font-size: ", ";\n        font-weight: ", ";\n        line-height: ", ";\n        border-top: 0;\n        border-right: 0;\n        border-left: 0;\n        background: transparent;\n        border-radius: 0;\n        display: inline-block;\n        box-sizing: border-box;\n        padding: 0.05rem 0;\n        -webkit-appearance: none;\n\n        &::placeholder {\n          color: ", ";\n          opacity: 0.3;\n        }\n        &:focus {\n          outline: none;\n        }\n\n        &::-ms-clear {\n          display: none;\n        }\n      }\n    }\n\n    &.rotate-layout {\n      background: ", ";\n      ", "\n    }\n\n    &.modal-zoomin {\n      ", "\n      .search::before,\n      .search::after {\n        border: 1.5rem solid ", ";\n      }\n    }\n\n    &.modal-half {\n      ", "\n      .form-wrapper {\n        background: ", ";\n      }\n      .search::before {\n        background: ", ";\n      }\n    }\n    &.modal-move {\n      ", "\n    }\n\n    &.modal-drop {\n      .form-content::after {\n        background: ", ";\n      }\n      .search::before {\n        background: ", ";\n      }\n      ", "\n    }\n\n    &.curtain {\n      ", "\n      .search::after {\n        background: ", ";\n      }\n      .search {\n        background: ", ";\n      }\n    }\n\n    &.column-curtain {\n      ", "\n      &::before {\n        background: ", ";\n      }\n      &::after {\n        background: transparent;\n      }\n      &.show::after {\n        background: ", ";\n      }\n    }\n  "])), theme.searchBackgroundColor, theme.searchInfoTextColor, theme.searchInfoTextFontFamily, theme.searchInfoTextFontSize, theme.searchInfoTextFontWeight, theme.searchInfoTextLineHeight, theme.searchDividerWidth, theme.searchDividerStyle, theme.searchDividerColor, theme.searchTextColor, theme.searchTextFontFamily, theme.searchTextFontSize, theme.searchTextFontWeight, theme.searchTextLineHeight, theme.searchPlaceholderTextColor, theme.searchBackgroundColor, rotateLayout, modalZoomin, theme.searchExtraBackgroundColor, modalHalf, theme.searchBackgroundColor, theme.searchExtraBackgroundColor, modalMove, theme.searchDividerColor, theme.searchBackgroundColor, modalDrop, curtain, theme.searchBackgroundColor, theme.searchBackgroundColor, columnCurtain, theme.searchBackgroundColor, theme.searchExtraBackgroundColor);
});
export { SearchStyle, SearchFieldStyle };