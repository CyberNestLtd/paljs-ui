var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import styled, { css } from 'styled-components';
import { maxContainer, breakpointUp, getGridGutter } from '../breakpoints';
var width = css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref) {
  var fluid = _ref.fluid;
  return !fluid && Object.keys(maxContainer).map(function (key) {
    return breakpointUp(key)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        max-width: ", "px;\n      "])), maxContainer[key]);
  });
});
var ContainerStyle = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin-right: auto;\n  margin-left: auto;\n  width: 100%;\n  ", "\n  ", "\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    padding-right: ", "px;\n    padding-left: ", "px;\n  "])), getGridGutter(theme) / 2, getGridGutter(theme) / 2);
}, width);
var Container = function Container(props) {
  return /*#__PURE__*/React.createElement(ContainerStyle, props, props.children);
};
export default Container;