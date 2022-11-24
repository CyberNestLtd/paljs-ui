"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var ProgressStyle = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref) {
  var theme = _ref.theme,
    size = _ref.size,
    status = _ref.status,
    value = _ref.value;
  return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    display: block;\n    .progress-container {\n      overflow: hidden;\n      border-radius: ", ";\n    }\n    .progress-value {\n      height: 100%;\n      width: ", "%;\n      text-align: center;\n      overflow: hidden;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-family: ", ";\n      transition-duration: ", ";\n      transition-property: width, background-color;\n    }\n    ", "\n    ", "\n  "])), theme.progressBarBorderRadius, value, theme.progressBarTextFontFamily, theme.progressBarAnimationDuration, size && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      .progress-container {\n        height: ", ";\n      }\n\n      .progress-value {\n        font-size: ", ";\n        font-weight: ", ";\n        line-height: ", ";\n      }\n    "])), theme["progressBar".concat(size, "Height")], theme["progressBar".concat(size, "TextFontSize")], theme["progressBar".concat(size, "TextFontWeight")], theme["progressBar".concat(size, "TextLineHeight")]), status && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      .progress-container {\n        background-color: ", ";\n      }\n\n      .progress-value {\n        background-color: ", ";\n        color: ", ";\n      }\n    "])), theme["progressBar".concat(status, "BackgroundColor")], theme["progressBar".concat(status, "FilledBackgroundColor")], theme["progressBar".concat(status, "TextColor")]));
});
var Progress = function Progress(props) {
  return /*#__PURE__*/_react["default"].createElement(ProgressStyle, props, /*#__PURE__*/_react["default"].createElement("div", {
    className: "progress-container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "progress-value"
  }, props.displayValue && /*#__PURE__*/_react["default"].createElement("span", null, props.value, "%"), props.children)));
};
Progress.defaultProps = {
  size: 'Medium',
  status: 'Basic',
  value: 0
};
var _default = Progress;
exports["default"] = _default;