"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _utils = require("../utils");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _span;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var AlertStyle = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref) {
  var theme = _ref.theme,
    size = _ref.size,
    status = _ref.status,
    accent = _ref.accent,
    outline = _ref.outline,
    closable = _ref.closable;
  return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    position: relative;\n\n    border-radius: ", ";\n    box-shadow: ", ";\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    padding: ", ";\n    margin-bottom: ", ";\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    .close {\n      padding: ", ";\n      font-size: 1.5rem;\n      line-height: 1;\n      cursor: pointer;\n      font-family: monospace;\n\n      position: absolute;\n      top: 0;\n      ", ": 0;\n      color: inherit;\n      background-color: transparent;\n      border: 0;\n      -webkit-appearance: none;\n    }\n    ", "\n  "])), theme.alertBorderRadius, theme.alertShadow, theme.alertTextFontFamily, theme.alertTextFontSize, theme.alertTextFontWeight, theme.alertTextLineHeight, theme.alertPadding, theme.alertBottomMargin, (0, _utils.scrollbars)(theme.alertScrollbarColor, theme.alertScrollbarBackgroundColor, theme.alertScrollbarWidth), size && "height: ".concat(theme["alert".concat(size, "Height")], ";"), status && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        background-color: ", ";\n        color: ", ";\n        a,\n        a:hover {\n          color: ", ";\n        }\n      "])), theme["alert".concat(status, "BackgroundColor")], theme["alert".concat(status, "TextColor")], theme["alert".concat(status, "TextColor")]), accent && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        border-top: ", " solid ", ";\n      "])), theme.alertBorderRadius, theme["alertAccent".concat(status, "Color")]), outline && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        border: ", " solid ", ";\n      "])), theme.alertOutlineWidth, theme["alertOutline".concat(status, "Color")]), theme.alertPadding, theme.dir === 'rtl' ? 'left' : 'right', closable && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        padding-", ": ", ";\n      "])), theme.dir === 'rtl' ? 'left' : 'right', theme.alertClosableStartPadding));
});
var Alert = function Alert(props) {
  return /*#__PURE__*/_react["default"].createElement(AlertStyle, props, props.closable && /*#__PURE__*/_react["default"].createElement("button", {
    onClick: props.onClose,
    type: "button",
    className: "close",
    "aria-label": "Close"
  }, _span || (_span = /*#__PURE__*/_react["default"].createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"))), props.children);
};
Alert.defaultProps = {
  status: 'Basic'
};
var _default = Alert;
exports["default"] = _default;