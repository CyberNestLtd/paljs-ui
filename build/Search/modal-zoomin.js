"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _styledComponents = require("styled-components");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var modalZoomin = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: block;\n\n  .search {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    position: fixed;\n    z-index: 1050;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100vh;\n    pointer-events: none;\n    opacity: 0;\n    transition: opacity 0.5s;\n\n    &::before,\n    &::after {\n      content: '';\n      position: absolute;\n      width: calc(100% + 15px);\n      height: calc(100% + 15px);\n      pointer-events: none;\n    }\n\n    &::before {\n      top: 0;\n      left: 0;\n      border-right-width: 0;\n      border-bottom-width: 0;\n      transform: translate3d(-15px, -15px, 0);\n    }\n\n    &::after {\n      right: 0;\n      bottom: 0;\n      border-top-width: 0;\n      border-left-width: 0;\n      transform: translate3d(15px, 15px, 0);\n    }\n\n    button {\n      position: absolute;\n      top: 3rem;\n      font-size: 2.5rem;\n      ", ": 3rem;\n    }\n\n    input {\n      font-size: 10vw;\n      width: 75%;\n    }\n\n    button {\n      opacity: 0;\n      transform: scale3d(0.8, 0.8, 1);\n      transition: opacity 0.5s, transform 0.5s;\n    }\n\n    .form {\n      opacity: 0;\n      transform: scale3d(0.8, 0.8, 1);\n      transition: opacity 0.5s, transform 0.5s;\n    }\n  }\n\n  &.show {\n    .search {\n      pointer-events: auto;\n      opacity: 1;\n\n      &::before,\n      &::after {\n        transform: translate3d(0, 0, 0);\n        transition: transform 0.5s;\n      }\n\n      button {\n        opacity: 1;\n        transform: scale3d(1, 1, 1);\n      }\n\n      .form {\n        opacity: 1;\n        transform: scale3d(1, 1, 1);\n      }\n    }\n  }\n\n  @media screen and (max-width: 40rem) {\n    .form {\n      margin: 5rem 0 1rem;\n    }\n\n    span {\n      text-align: left;\n    }\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.dir === 'rtl' ? 'left' : 'right';
});
var _default = modalZoomin;
exports["default"] = _default;