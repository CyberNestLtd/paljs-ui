"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _styledComponents = require("styled-components");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var modalHalf = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  .search {\n    text-align: center;\n    position: fixed;\n    z-index: 1050;\n    top: 0;\n    left: 0;\n    overflow: hidden;\n    width: 100%;\n    height: 100vh;\n    background: none;\n    pointer-events: none;\n\n    &::before {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      pointer-events: none;\n      opacity: 0;\n      transition: opacity 0.6s;\n      transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);\n    }\n\n    button {\n      font-size: 2.5rem;\n      position: absolute;\n      top: 3rem;\n      display: block;\n      z-index: 100;\n      opacity: 0;\n      transform: scale3d(0.8, 0.8, 1);\n      transition: opacity 0.6s, transform 0.6s;\n      transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);\n      ", ": 3rem;\n    }\n\n    .form-wrapper {\n      position: absolute;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      width: 100%;\n      height: 50%;\n      transition: transform 0.6s;\n      transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);\n      transform: translate3d(0, -100%, 0);\n    }\n\n    .form {\n      width: 75%;\n      margin: 0 auto;\n    }\n\n    input {\n      font-size: 7vw;\n      width: 100%;\n    }\n  }\n\n  &.show {\n    .search {\n      pointer-events: auto;\n\n      &::before {\n        opacity: 1;\n      }\n\n      button {\n        opacity: 1;\n        transform: scale3d(1, 1, 1);\n      }\n\n      .form-wrapper {\n        transform: translate3d(0, 0, 0);\n      }\n    }\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.dir === 'rtl' ? 'left' : 'right';
});
var _default = modalHalf;
exports["default"] = _default;