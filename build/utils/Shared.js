"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrollbars = exports.outlineShadow = exports.getHeadings = exports.componentAnimation = void 0;
var _styledComponents = require("styled-components");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var getHeadings = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  h1 {\n    margin: 0;\n  }\n  h2 {\n    margin: 0;\n  }\n  h3 {\n    margin: 0;\n  }\n  h4 {\n    margin: 0;\n  }\n  h5 {\n    margin: 0;\n  }\n  h6 {\n    margin: 0;\n  }\n"])));
exports.getHeadings = getHeadings;
var scrollbars = function scrollbars(fg, bg, size) {
  var borderRadius = parseFloat(size) / 2;
  return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    &::-webkit-scrollbar {\n      width: ", ";\n      height: ", ";\n    }\n\n    &::-webkit-scrollbar-thumb {\n      background: ", ";\n      cursor: pointer;\n      border-radius: ", ";\n    }\n\n    &::-webkit-scrollbar-track {\n      background: ", ";\n    }\n  "])), size, size, fg, borderRadius, bg);
};
exports.scrollbars = scrollbars;
var componentAnimation = function componentAnimation(properties) {
  return (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    transition-duration: 0.15s;\n    transition-property: ", ";\n    transition-timing-function: ease-in;\n  "])), properties);
};
exports.componentAnimation = componentAnimation;
var outlineShadow = function outlineShadow(width, color) {
  var insetShadow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var outsetShadow = "0 0 0 ".concat(width, " ").concat(color);
  return (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    box-shadow: ", ";\n    ", "\n  "])), outsetShadow, insetShadow && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      &:not(:hover):not(:active) {\n        box-shadow: ", ", inset 0 0 0 100vmax ", ";\n      }\n    "])), outsetShadow, function (_ref) {
    var theme = _ref.theme;
    return theme.buttonOutlineColor;
  }));
};
exports.outlineShadow = outlineShadow;