var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointUp, getGridSize, breakpoints, getGridGutter } from '../breakpoints';
var BP = Object.keys(breakpoints);
var colData = css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref) {
  var breakPoint = _ref.breakPoint,
    theme = _ref.theme;
  return breakPoint && Object.keys(breakPoint).sort(function (k1, k2) {
    return BP.indexOf(k1) - BP.indexOf(k2);
  }).map(function (k) {
    if (typeof breakPoint[k] === 'number') {
      return breakpointUp(k)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n            flex: 0 0 ", "%;\n            max-width: ", "%;\n            display: block;"])), 100 / getGridSize(theme) * breakPoint[k], 100 / getGridSize(theme) * breakPoint[k]);
    } else if (breakPoint[k]) {
      return breakpointUp(k)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n            flex-grow: 1;\n            flex-basis: 0;\n            max-width: 100%;\n            display: block;"])));
    } else {
      return breakpointUp(k)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["display: none;"])));
    }
  });
});
var offset = css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref2) {
  var offset = _ref2.offset,
    theme = _ref2.theme;
  return offset && Object.keys(offset).map(function (k) {
    return breakpointUp(k)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n          margin-", ": \n          ", "%;"])), theme.dir == 'rtl' ? 'right' : 'left', 100 / getGridSize(theme) * offset[k]);
  });
});
var ColStyle = styled.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref3) {
  var theme = _ref3.theme,
    first = _ref3.first,
    last = _ref3.last,
    order = _ref3.order;
  return css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: ", "px;\n  padding-left: ", "px;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), getGridGutter(theme) / 2, getGridGutter(theme) / 2, colData, offset, first && 'order: -1;', last && "order: ".concat(getGridSize(theme) + 1, ";"), order && "order: ".concat(order, ";"));
});
var Col = function Col(props) {
  return /*#__PURE__*/React.createElement(ColStyle, props, props.children);
};
export default Col;