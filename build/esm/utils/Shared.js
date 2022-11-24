var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { css } from 'styled-components';
export var getHeadings = css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  h1 {\n    margin: 0;\n  }\n  h2 {\n    margin: 0;\n  }\n  h3 {\n    margin: 0;\n  }\n  h4 {\n    margin: 0;\n  }\n  h5 {\n    margin: 0;\n  }\n  h6 {\n    margin: 0;\n  }\n"])));
export var scrollbars = function scrollbars(fg, bg, size) {
  var borderRadius = parseFloat(size) / 2;
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    &::-webkit-scrollbar {\n      width: ", ";\n      height: ", ";\n    }\n\n    &::-webkit-scrollbar-thumb {\n      background: ", ";\n      cursor: pointer;\n      border-radius: ", ";\n    }\n\n    &::-webkit-scrollbar-track {\n      background: ", ";\n    }\n  "])), size, size, fg, borderRadius, bg);
};
export var componentAnimation = function componentAnimation(properties) {
  return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    transition-duration: 0.15s;\n    transition-property: ", ";\n    transition-timing-function: ease-in;\n  "])), properties);
};
export var outlineShadow = function outlineShadow(width, color) {
  var insetShadow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var outsetShadow = "0 0 0 ".concat(width, " ").concat(color);
  return css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    box-shadow: ", ";\n    ", "\n  "])), outsetShadow, insetShadow && css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      &:not(:hover):not(:active) {\n        box-shadow: ", ", inset 0 0 0 100vmax ", ";\n      }\n    "])), outsetShadow, function (_ref) {
    var theme = _ref.theme;
    return theme.buttonOutlineColor;
  }));
};