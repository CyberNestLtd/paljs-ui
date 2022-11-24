"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var PopoverStyle = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref) {
  var theme = _ref.theme;
  return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    border: ", " solid ", ";\n    border-radius: ", ";\n    background: ", ";\n    box-shadow: ", ";\n    color: ", ";\n\n    .primitive-overlay {\n      font-family: ", ";\n      font-size: ", ";\n      font-weight: ", ";\n      line-height: ", ";\n      padding: ", ";\n    }\n\n    .arrow {\n      position: absolute;\n      width: 0;\n      height: 0;\n      border-left: ", " solid transparent;\n      border-right: ", " solid transparent;\n      border-bottom: ", " solid ", ";\n\n      &::after {\n        position: absolute;\n        content: ' ';\n        width: 0;\n        height: 0;\n        top: 3px;\n        left: calc(50% - ", ");\n        border-left: ", " solid transparent;\n        border-right: ", " solid transparent;\n        border-bottom: ", " solid ", ";\n        clip-path: inset(0 0 2px);\n      }\n    }\n  "])), theme.popoverBorderWidth, theme.popoverBorderColor, theme.popoverBorderRadius, theme.popoverBackgroundColor, theme.popoverShadow, theme.popoverTextColor, theme.popoverTextFontFamily, theme.popoverTextFontSize, theme.popoverTextFontWeight, theme.popoverTextLineHeight, theme.popoverPadding, theme.popoverArrowSize, theme.popoverArrowSize, theme.popoverArrowSize, theme.popoverBorderColor, theme.popoverArrowSize, theme.popoverArrowSize, theme.popoverArrowSize, theme.popoverArrowSize, theme.popoverBackgroundColor);
});
var _default = PopoverStyle;
exports["default"] = _default;