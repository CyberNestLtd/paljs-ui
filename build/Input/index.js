"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputGroup = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _utils = require("../utils");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var GroupStyle = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref) {
  var theme = _ref.theme,
    size = _ref.size,
    status = _ref.status,
    shape = _ref.shape,
    fullWidth = _ref.fullWidth;
  return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      display: flex;\n      min-width: 0;\n      position: relative;\n\n      input,\n      textarea {\n        border-style: ", ";\n        border-width: ", ";\n        font-family: ", ";\n        -webkit-appearance: none;\n\n        ", "\n        \n        ", "\n\n        &::placeholder {\n          font-family: ", ";\n          text-overflow: ellipsis;\n        }\n        \n        &:focus {\n          outline: none;\n        }\n      \n        ", "\n\n        ", "\n\n        ", "\n      }\n    "])), theme.inputBorderStyle, theme.inputBorderWidth, theme.inputTextFontFamily, (0, _utils.componentAnimation)('border, background-color, color, box-shadow'), fullWidth && 'width: 100%;', theme.inputPlaceholderTextFontFamily, status && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n            background-color: ", ";\n            border-color: ", ";\n            color: ", ";\n\n            &::placeholder {\n              color: ", ";\n            }\n\n            &:focus {\n              background-color: ", ";\n              border-color: ", ";\n            }\n            &:hover {\n              background-color: ", ";\n              border-color: ", ";\n            }\n\n            &:disabled {\n              background-color: ", ";\n              border-color: ", ";\n              color: ", ";\n\n              &::placeholder {\n                color: ", ";\n              }\n            }\n          "])), theme["input".concat(status, "BackgroundColor")], theme["input".concat(status, "BorderColor")], theme["input".concat(status, "TextColor")], theme["input".concat(status, "PlaceholderTextColor")], theme["input".concat(status, "FocusBackgroundColor")], theme["input".concat(status, "FocusBorderColor")], theme["input".concat(status, "HoverBackgroundColor")], theme["input".concat(status, "HoverBorderColor")], theme["input".concat(status, "DisabledBackgroundColor")], theme["input".concat(status, "DisabledBorderColor")], theme["input".concat(status, "DisabledTextColor")], theme["input".concat(status, "DisabledPlaceholderTextColor")]), shape && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n            border-radius: ", ";\n          "])), theme["input".concat(shape, "BorderRadius")]), size && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n            font-size: ", ";\n            font-weight: ", ";\n            line-height: ", ";\n            padding: ", ";\n\n            ", "\n\n            &::placeholder {\n              font-size: ", ";\n              font-weight: ", ";\n              line-height: ", ";\n            }\n          "])), theme["input".concat(size, "TextFontSize")], theme["input".concat(size, "TextFontWeight")], theme["input".concat(size, "TextLineHeight")], theme["input".concat(size, "Padding")], !fullWidth && "max-width: ".concat(theme["input".concat(size, "MaxWidth")], ";"), theme["input".concat(size, "PlaceholderTextFontSize")], theme["input".concat(size, "PlaceholderTextFontWeight")], theme["input".concat(size, "PlaceholderTextLineHeight")]));
});
var InputGroup = function InputGroup(props) {
  return /*#__PURE__*/_react["default"].createElement(GroupStyle, props, props.children);
};
exports.InputGroup = InputGroup;
InputGroup.defaultProps = {
  size: 'Medium',
  shape: 'Rectangle',
  status: 'Basic'
};