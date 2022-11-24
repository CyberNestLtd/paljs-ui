var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from 'styled-components';
import { getHeadings, scrollbars } from '../utils';
import React from 'react';
var CardFooter = styled.footer(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
var headerBg = css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref) {
  var theme = _ref.theme,
    status = _ref.status,
    accent = _ref.accent;
  return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    padding: ", ";\n    border-bottom: ", " ", " ", ";\n    border-top-left-radius: ", ";\n    border-top-right-radius: ", ";\n    color: ", ";\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n\n    ", "\n\n    ", "\n    ", "\n  "])), theme.cardPadding, theme.cardDividerWidth, theme.cardDividerStyle, theme.cardDividerColor, theme.cardBorderRadius, theme.cardBorderRadius, theme.cardHeaderTextColor, theme.cardHeaderTextFontFamily, theme.cardHeaderTextFontSize, theme.cardHeaderTextFontWeight, theme.cardHeaderTextLineHeight, getHeadings, status && css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        background-color: ", ";\n        border-bottom-color: ", ";\n        border-bottom-width: 0;\n        color: ", ";\n        a,\n        a:hover {\n          color: ", ";\n        }\n      "])), theme["cardHeader".concat(status, "BackgroundColor")], theme["cardHeader".concat(status, "BackgroundColor")], theme["cardHeader".concat(status, "TextColor")], theme["cardHeader".concat(status, "TextColor")]), accent && 'border-radius: 0;');
});
var CardStyle = styled.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  ", ";\n"])), function (_ref2) {
  var theme = _ref2.theme,
    accent = _ref2.accent,
    size = _ref2.size;
  return css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    background-color: ", ";\n    border: ", " ", " ", ";\n    border-radius: ", ";\n    box-shadow: ", ";\n    color: ", ";\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    margin-bottom: ", ";\n\n    ", "\n\n    ", "\n\n    ", "\n\n    & > header {\n      ", "\n    }\n    \n    ", ",\n    & > footer {\n      padding: ", ";\n      border-top: ", " ", " ", ";\n      border-bottom-left-radius: ", ";\n      border-bottom-right-radius: ", ";\n    }\n  "])), theme.cardBackgroundColor, theme.cardBorderWidth, theme.cardBorderStyle, theme.cardBorderColor, theme.cardBorderRadius, theme.cardShadow, theme.cardTextColor, theme.cardTextFontFamily, theme.cardTextFontSize, theme.cardTextFontWeight, theme.cardTextLineHeight, theme.cardMarginBottom, scrollbars(theme.cardScrollbarColor, theme.cardScrollbarBackgroundColor, theme.cardScrollbarWidth), accent && css(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n        border-top-color: ", ";\n        border-top-style: ", ";\n        border-top-width: ", ";\n      "])), theme["cardHeader".concat(accent, "BackgroundColor")], theme.cardBorderStyle, theme.cardBorderRadius), size && css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n        height: ", ";\n      "])), theme["cardHeight".concat(size)]), headerBg, CardFooter, theme.cardPadding, theme.cardDividerWidth, theme.cardDividerStyle, theme.cardDividerColor, theme.cardBorderRadius, theme.cardBorderRadius);
});
var CardHeader = styled.header(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  ", "\n"])), headerBg);
var CardBody = styled.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref3) {
  var theme = _ref3.theme;
  return css(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    padding: ", ";\n    overflow: auto;\n    flex: 1;\n    -ms-flex: 1 1 auto;\n    position: relative;\n    ", "\n  "])), theme.cardPadding, scrollbars(theme.cardScrollbarColor, theme.cardScrollbarBackgroundColor, theme.cardScrollbarWidth));
});
var Card = function Card(props) {
  return /*#__PURE__*/React.createElement(CardStyle, props, props.children);
};
export { Card, CardHeader, CardFooter, CardBody, CardStyle };