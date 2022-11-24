"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _utils = require("../utils");
var _style = _interopRequireDefault(require("../Icon/style"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var CheckboxStyle = _styledComponents["default"].label(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref) {
  var theme = _ref.theme,
    checked = _ref.checked,
    disabled = _ref.disabled,
    status = _ref.status,
    indeterminate = _ref.indeterminate;
  return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    position: relative;\n    display: inline-flex;\n    align-items: center;\n    margin: 0;\n    min-height: inherit;\n    padding: ", ";\n\n    .custom-checkbox {\n      width: ", ";\n      height: ", ";\n      border-style: ", ";\n      border-width: ", ";\n      border-radius: ", ";\n      position: relative;\n      flex-shrink: 0;\n      ", "\n    }\n\n    .native-input:focus:not(:checked) + .custom-checkbox {\n      ", "\n    }\n    .native-input:focus:checked + .custom-checkbox {\n      ", "\n    }\n\n    ", " {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      width: 50%;\n    }\n    .text {\n      font-family: ", ";\n      font-size: ", ";\n      font-weight: ", ";\n      line-height: ", ";\n      transition: color 0.15s ease-in;\n      &:not(:empty) {\n        padding-", ": ", ";\n      }\n    }\n\n    ", "\n  "])), theme.checkboxPadding, theme.checkboxWidth, theme.checkboxHeight, theme.checkboxBorderStyle, theme.checkboxBorderWidth, theme.checkboxBorderRadius, (0, _utils.componentAnimation)('background-color, border, box-shadow'), (0, _utils.outlineShadow)(theme.checkboxOutlineWidth, theme.checkboxOutlineColor, true), (0, _utils.outlineShadow)(theme.checkboxOutlineWidth, theme.checkboxOutlineColor), _style["default"], theme.checkboxTextFontFamily, theme.checkboxTextFontSize, theme.checkboxTextFontWeight, theme.checkboxTextLineHeight, theme.dir === 'rtl' ? 'right' : 'left', theme.checkboxTextSpace, status && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        .custom-checkbox {\n          background-color: ", ";\n          border-color: ", ";\n        }\n\n        .text {\n          color: ", ";\n        }\n\n        ", "\n        ", "\n\n        .native-input:enabled:focus + .custom-checkbox {\n          background-color: ", ";\n          border-color: ", ";\n\n          ", "\n        }\n\n        .custom-checkbox:hover {\n          background-color: ", ";\n          border-color: ", ";\n\n          ", "\n        }\n\n        .native-input:enabled:active + .custom-checkbox {\n          background-color: ", ";\n          border-color: ", ";\n\n          ", "\n        }\n        ", "\n      "])), theme["checkbox".concat(status, "BackgroundColor")], theme["checkbox".concat(status, "BorderColor")], theme["checkbox".concat(status, "TextColor")], checked && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n          .custom-checkbox {\n            background-color: ", ";\n            border-color: ", ";\n\n            ", " {\n              color: ", ";\n            }\n          }\n        "])), theme["checkbox".concat(status, "CheckedBackgroundColor")], theme["checkbox".concat(status, "CheckedBorderColor")], _style["default"], theme["checkbox".concat(status, "CheckedCheckmarkColor")]), indeterminate && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n          .custom-checkbox {\n            background-color: ", ";\n            border-color: ", ";\n\n            ", " {\n              color: ", ";\n            }\n          }\n        "])), theme["checkbox".concat(status, "IndeterminateBackgroundColor")], theme["checkbox".concat(status, "IndeterminateBorderColor")], _style["default"], theme["checkbox".concat(status, "IndeterminateCheckmarkColor")]), theme["checkbox".concat(status, "FocusBackgroundColor")], theme["checkbox".concat(status, "FocusBorderColor")], (indeterminate || checked) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n            background-color: ", ";\n            border-color: ", ";\n          "])), theme["checkbox".concat(status, "FocusCheckedBackgroundColor")], theme["checkbox".concat(status, "FocusCheckedBorderColor")]), theme["checkbox".concat(status, "HoverBackgroundColor")], theme["checkbox".concat(status, "HoverBorderColor")], (indeterminate || checked) && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n            background-color: ", ";\n            border-color: ", ";\n          "])), theme["checkbox".concat(status, "HoverCheckedBackgroundColor")], theme["checkbox".concat(status, "HoverCheckedBorderColor")]), theme["checkbox".concat(status, "ActiveBackgroundColor")], theme["checkbox".concat(status, "ActiveBorderColor")], (indeterminate || checked) && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n            background-color: ", ";\n            border-color: ", ";\n          "])), theme["checkbox".concat(status, "ActiveCheckedBackgroundColor")], theme["checkbox".concat(status, "ActiveCheckedBorderColor")]), disabled && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n          .native-input:disabled {\n            & + .custom-checkbox {\n              background-color: ", ";\n              border-color: ", ";\n\n              ", " {\n                color: ", ";\n              }\n            }\n            & ~ .text {\n              color: ", ";\n            }\n            &:indeterminate + .custom-checkbox,\n            &:checked + .custom-checkbox {\n              background-color: ", ";\n            }\n          }\n        "])), theme["checkbox".concat(status, "DisabledBackgroundColor")], theme["checkbox".concat(status, "DisabledBorderColor")], _style["default"], theme["checkbox".concat(status, "DisabledCheckmarkColor")], theme["checkbox".concat(status, "DisabledTextColor")], theme["checkbox".concat(status, "DisabledCheckedBackgroundColor")])));
});
var _default = CheckboxStyle;
exports["default"] = _default;