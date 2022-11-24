"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _styledComponents = require("styled-components");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var curtain = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  .search {\n    position: fixed;\n    z-index: 1050;\n    top: 0;\n    left: 100%;\n    overflow: hidden;\n    height: 100vh;\n    width: 100%;\n    padding: 3rem;\n    pointer-events: none;\n    transition: transform 0.3s;\n    transition-delay: 0.4s;\n    transition-timing-function: ease-out;\n\n    &::after {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      transition: transform 0.3s;\n      transition-timing-function: ease-out;\n    }\n\n    button {\n      font-size: 2.5rem;\n      position: absolute;\n      top: 3rem;\n      transition: opacity 0.1s;\n      transition-delay: 0.3s;\n      ", ": 3rem;\n    }\n\n    .form {\n      width: 50%;\n      opacity: 0;\n      transform: scale3d(0.8, 0.8, 1);\n      transition: opacity 0.5s, transform 0.5s;\n    }\n\n    input {\n      width: 100%;\n      font-size: 6vw;\n    }\n  }\n\n  &.show {\n    .search {\n      width: 100%;\n      pointer-events: auto;\n      transform: translate3d(-100%, 0, 0);\n      transition-delay: 0s;\n\n      &::after {\n        transform: translate3d(100%, 0, 0);\n        transition-delay: 0.4s;\n      }\n\n      button {\n        opacity: 1;\n        transform: scale3d(1, 1, 1);\n      }\n\n      .form {\n        opacity: 1;\n        transform: scale3d(1, 1, 1);\n      }\n    }\n  }\n\n  @media screen and (max-width: 40em) {\n    span {\n      width: 90%;\n    }\n\n    input {\n      font-size: 2em;\n      width: 90%;\n    }\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.dir === 'rtl' ? 'left' : 'right';
});
var _default = curtain;
exports["default"] = _default;