var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointUp, getGridGutter } from '../breakpoints';
var RowStyle = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  ", "\n"])), function (p) {
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    margin-right: ", "px;\n    margin-left: ", "px;\n    ", "\n  \n    ", "\n  \n    ", "\n  \n    ", "\n  \n    ", "\n  \n    ", "\n  \n    ", "\n  \n    ", "\n  \n    ", "\n  "])), getGridGutter(p.theme) / -2, getGridGutter(p.theme) / -2, p.reverse && 'flex-direction: row-reverse;', p.start && breakpointUp(p.start)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      justify-content: flex-start;\n    "]))), p.center && breakpointUp(p.center)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      justify-content: center;\n    "]))), p.end && breakpointUp(p.end)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      justify-content: flex-end;\n    "]))), p.top && breakpointUp(p.top)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      align-items: flex-start;\n    "]))), p.middle && breakpointUp(p.middle)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      align-items: center;\n    "]))), p.bottom && breakpointUp(p.bottom)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      align-items: flex-end;\n    "]))), p.around && breakpointUp(p.around)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      justify-content: space-around;\n    "]))), p.between && breakpointUp(p.between)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      justify-content: space-between;\n    "]))));
});
var Row = function Row(props) {
  return /*#__PURE__*/React.createElement(RowStyle, props, props.children);
};
export default Row;