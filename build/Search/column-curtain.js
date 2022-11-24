"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _styledComponents = require("styled-components");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var columnCurtain = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: block;\n  position: fixed;\n  z-index: 1050;\n  top: 0;\n  left: 50%;\n  overflow: hidden;\n  width: 50%;\n  height: 100vh;\n  pointer-events: none;\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    transform: scale3d(0, 1, 1);\n    transform-origin: 0 50%;\n    transition: transform 0.3s;\n    transition-timing-function: cubic-bezier(0.86, 0, 0.07, 1);\n  }\n\n  .search {\n    position: relative;\n    padding: 2.5rem 1.5rem 0;\n    background: transparent;\n\n    button {\n      position: absolute;\n      top: 2rem;\n      font-size: 2.5rem;\n      opacity: 0;\n      transition: opacity 0.5s;\n      ", ": 3rem;\n    }\n\n    .form {\n      width: 85%;\n      transform: translate3d(-150%, 0, 0);\n      transition: transform 0.3s;\n    }\n\n    input {\n      font-size: 2.5rem;\n      width: 100%;\n    }\n\n    span {\n      font-size: 85%;\n    }\n  }\n\n  &.show {\n    pointer-events: auto;\n\n    &::before {\n      transform: scale3d(1, 1, 1);\n    }\n\n    .search {\n      .form {\n        transform: translate3d(0, 0, 0);\n        transition-delay: 0.15s;\n        transition-timing-function: cubic-bezier(0.86, 0, 0.07, 1);\n      }\n\n      button {\n        opacity: 1;\n        z-index: 100;\n      }\n    }\n  }\n\n  @media screen and (max-width: 40rem) {\n    span {\n      width: 90%;\n    }\n\n    input {\n      font-size: 2rem;\n      width: 90%;\n    }\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.dir === 'rtl' ? 'left' : 'right';
});
var _default = columnCurtain;
exports["default"] = _default;