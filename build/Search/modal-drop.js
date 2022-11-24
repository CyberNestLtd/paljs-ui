"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _styledComponents = require("styled-components");
var _templateObject, _templateObject2;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var scaleUpDown = (0, _styledComponents.keyframes)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  0% {\n    opacity: 1;\n    transform: scale3d(1, 0, 1);\n  }\n  50% {\n    transform: scale3d(1, 1, 1);\n    transform-origin: 50% 0;\n    transition-timing-function: ease-out;\n  }\n  50.1% {\n    transform-origin: 50% 100%;\n    transition-timing-function: ease-out;\n  }\n  100% {\n    opacity: 1;\n    transform: scale3d(1, 0, 1);\n    transform-origin: 50% 100%;\n    transition-timing-function: ease-out;\n  }   \n"])));
var modalDrop = (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  .search {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    z-index: 1050;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100vh;\n    background: 0 0;\n    pointer-events: none;\n\n    &::before {\n      content: '';\n      position: absolute;\n      top: 0;\n      right: 0;\n      width: 100%;\n      height: 100%;\n      opacity: 0;\n      transition: opacity 0.4s;\n    }\n\n    button {\n      font-size: 2.5rem;\n      position: absolute;\n      top: 3rem;\n      display: block;\n      opacity: 0;\n      transition: opacity 0.4s;\n      ", ": 3rem;\n    }\n\n    .form {\n      position: relative;\n      margin: 5rem 0 2rem;\n    }\n\n    input {\n      font-size: 6vw;\n      width: 60%;\n      padding: 0.25rem;\n      text-align: center;\n      opacity: 0;\n      transition: opacity 0.4s;\n    }\n\n    span {\n      position: relative;\n      z-index: 9;\n      display: block;\n      width: 60%;\n      padding: 0.85rem 0;\n      opacity: 0;\n      transform: translate3d(0, -50px, 0);\n      transition: opacity 0.4s, transform 0.4s;\n    }\n\n    .form-content {\n      position: relative;\n      z-index: 10;\n      overflow: hidden;\n      transform: translate3d(0, -50px, 0);\n      transition: transform 0.4s;\n\n      &::after {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 20%;\n        width: 60%;\n        height: 105%;\n        opacity: 0;\n        transform-origin: 50% 0;\n      }\n    }\n  }\n\n  &.show {\n    .search {\n      pointer-events: auto;\n\n      &::before {\n        opacity: 1;\n      }\n\n      button {\n        opacity: 1;\n      }\n\n      .form-content {\n        transform: translate3d(0, 0, 0);\n        transition: none;\n\n        &::after {\n          animation: ", " 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;\n        }\n      }\n\n      input {\n        opacity: 1;\n        transition: opacity 0s 0.4s;\n      }\n\n      span {\n        opacity: 1;\n        transform: translate3d(0, 0, 0);\n        transition-delay: 0.4s;\n        transition-timing-function: ease-out;\n      }\n    }\n  }\n\n  @media screen and (max-width: 40rem) {\n    .form {\n      margin: 2rem 0;\n    }\n\n    input {\n      width: 100%;\n      left: 0;\n    }\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.dir === 'rtl' ? 'left' : 'right';
}, scaleUpDown);
var _default = modalDrop;
exports["default"] = _default;