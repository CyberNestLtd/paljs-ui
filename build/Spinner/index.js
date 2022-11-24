"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _span;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var spin = (0, _styledComponents.keyframes)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  0% {\n    transform: rotate(0deg);\n  }\n  40% {\n    transform: rotate(230deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"])));
var SpinnerStyle = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref) {
  var theme = _ref.theme,
    size = _ref.size,
    status = _ref.status;
  return (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    opacity: 1;\n    position: absolute;\n    border-radius: inherit;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    overflow: hidden;\n    z-index: 999;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    visibility: visible;\n    ", "\n\n    .spin-circle {\n      animation: ", " 0.8s infinite linear;\n      border-radius: 50%;\n      border-style: solid;\n      border-width: 0.125em;\n      width: 1em;\n      height: 1em;\n    }\n\n    .message {\n      margin-left: 0.5rem;\n      color: ", ";\n      font-family: ", ";\n      font-size: ", ";\n      font-weight: ", ";\n      line-height: ", ";\n    }\n\n    ", "\n  "])), size && "font-size: ".concat(theme["spinnerHeight".concat(size)], ";"), spin, theme.spinnerTextColor, theme.spinnerTextFontFamily, theme.spinnerTextFontSize, theme.spinnerTextFontWeight, theme.spinnerTextLineHeight, status && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      background-color: ", ";\n\n      .spin-circle {\n        border-top-color: ", ";\n        border-right-color: ", ";\n        border-bottom-color: ", ";\n        border-left-color: ", ";\n      }\n    "])), theme["spinner".concat(status, "BackgroundColor")], theme["spinner".concat(status, "CircleFilledColor")], theme["spinner".concat(status, "CircleEmptyColor")], theme["spinner".concat(status, "CircleFilledColor")], theme["spinner".concat(status, "CircleFilledColor")]));
});
var Spinner = function Spinner(props) {
  return /*#__PURE__*/_react["default"].createElement(SpinnerStyle, props, _span || (_span = /*#__PURE__*/_react["default"].createElement("span", {
    className: "spin-circle"
  })), /*#__PURE__*/_react["default"].createElement("span", {
    className: "message"
  }, props.children));
};
Spinner.defaultProps = {
  size: 'Medium',
  status: 'Primary'
};
var _default = Spinner;
exports["default"] = _default;