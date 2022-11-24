"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonStyle = exports.ButtonLink = exports.Button = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _utils = require("../utils");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var btnPulse = function btnPulse(color) {
  var pulse = (0, _styledComponents.keyframes)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  0% {\n      box-shadow: none;\n      opacity: 0.3;\n    }\n    100% {\n      box-shadow: 0 0 1rem 0 ", ";\n      opacity: 0.8;\n    }\n  "])), color);
  return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    animation: ", " 1.5s infinite alternate;\n  "])), pulse);
};
var filled = (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref) {
  var status = _ref.status,
    size = _ref.size,
    theme = _ref.theme;
  return (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    border-style: ", ";\n    border-width: ", ";\n    text-transform: ", ";\n    padding: ", ";\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n\n    &:focus {\n      outline: none;\n      ", "\n    }\n\n    &:focus,\n    &.focus {\n      background-color: ", ";\n      border-color: ", ";\n    }\n    &:hover,\n    &.hover {\n      background-color: ", ";\n      border-color: ", ";\n    }\n    &:active,\n    &.active,\n    &:active:focus {\n      background-color: ", ";\n      border-color: ", ";\n    }\n\n    &:disabled,\n    &.disabled {\n      background-color: ", ";\n      border-color: ", ";\n      color: ", ";\n    }\n  "])), theme.buttonFilledBorderStyle, theme.buttonFilledBorderWidth, theme.buttonFilledTextTransform, theme["buttonFilled".concat(size, "Padding")], theme["buttonFilled".concat(status, "BackgroundColor")], theme["buttonFilled".concat(status, "BorderColor")], theme["buttonFilled".concat(status, "TextColor")], (0, _utils.outlineShadow)(theme.buttonOutlineWidth, theme.buttonOutlineColor), theme["buttonFilled".concat(status, "FocusBackgroundColor")], theme["buttonFilled".concat(status, "FocusBorderColor")], theme["buttonFilled".concat(status, "HoverBackgroundColor")], theme["buttonFilled".concat(status, "HoverBorderColor")], theme["buttonFilled".concat(status, "ActiveBackgroundColor")], theme["buttonFilled".concat(status, "ActiveBorderColor")], theme["buttonFilled".concat(status, "DisabledBackgroundColor")], theme["buttonFilled".concat(status, "DisabledBorderColor")], theme["buttonFilled".concat(status, "DisabledTextColor")]);
});
var outline = (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref2) {
  var status = _ref2.status,
    size = _ref2.size,
    theme = _ref2.theme;
  return (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    border-style: ", ";\n    border-width: ", ";\n    text-transform: ", ";\n    padding: ", ";\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n\n    &:focus {\n      outline: none;\n      ", "\n    }\n\n    &:focus,\n    &.focus {\n      background-color: ", ";\n      border-color: ", ";\n      color: ", ";\n    }\n    &:hover,\n    &.hover {\n      background-color: ", ";\n      border-color: ", ";\n      color: ", ";\n    }\n    &:active,\n    &.active,\n    &:active:focus {\n      background-color: ", ";\n      border-color: ", ";\n      color: ", ";\n    }\n\n    &:disabled,\n    &.disabled {\n      background-color: ", ";\n      border-color: ", ";\n      color: ", ";\n    }\n  "])), theme.buttonOutlineBorderStyle, theme.buttonOutlineBorderWidth, theme.buttonOutlineTextTransform, theme["buttonOutline".concat(size, "Padding")], theme["buttonOutline".concat(status, "BackgroundColor")], theme["buttonOutline".concat(status, "BorderColor")], theme["buttonOutline".concat(status, "TextColor")], (0, _utils.outlineShadow)(theme.buttonOutlineWidth, theme.buttonOutlineColor, true), theme["buttonOutline".concat(status, "FocusBackgroundColor")], theme["buttonOutline".concat(status, "FocusBorderColor")], theme["buttonOutline".concat(status, "FocusTextColor")], theme["buttonOutline".concat(status, "HoverBackgroundColor")], theme["buttonOutline".concat(status, "HoverBorderColor")], theme["buttonOutline".concat(status, "HoverTextColor")], theme["buttonOutline".concat(status, "ActiveBackgroundColor")], theme["buttonOutline".concat(status, "ActiveBorderColor")], theme["buttonOutline".concat(status, "ActiveTextColor")], theme["buttonOutline".concat(status, "DisabledBackgroundColor")], theme["buttonOutline".concat(status, "DisabledBorderColor")], theme["buttonOutline".concat(status, "DisabledTextColor")]);
});
var ghost = (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref3) {
  var status = _ref3.status,
    size = _ref3.size,
    theme = _ref3.theme;
  return (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    background-color: ", ";\n    border-color: ", ";\n    border-style: ", ";\n    border-width: ", ";\n    text-transform: ", ";\n    padding: ", ";\n    color: ", ";\n\n    &:focus {\n      outline: none;\n      ", "\n    }\n\n    &:focus,\n    &.focus {\n      background-color: ", ";\n      border-color: ", ";\n      color: ", ";\n    }\n    &:hover,\n    &.hover {\n      background-color: ", ";\n      border-color: ", ";\n      color: ", ";\n    }\n    &:active,\n    &.active,\n    &:active:focus {\n      background-color: ", ";\n      border-color: ", ";\n      color: ", ";\n    }\n\n    &:disabled,\n    &.disabled {\n      background-color: ", ";\n      border-color: ", ";\n      color: ", ";\n    }\n  "])), theme.buttonGhostBackgroundColor, theme.buttonGhostBorderColor, theme.buttonGhostBorderStyle, theme.buttonGhostBorderWidth, theme.buttonGhostTextTransform, theme["buttonGhost".concat(size, "Padding")], theme["buttonGhost".concat(status, "TextColor")], (0, _utils.outlineShadow)(theme.buttonOutlineWidth, theme.buttonOutlineColor, true), theme["buttonGhost".concat(status, "FocusBackgroundColor")], theme["buttonGhost".concat(status, "FocusBorderColor")], theme["buttonGhost".concat(status, "FocusTextColor")], theme["buttonGhost".concat(status, "HoverBackgroundColor")], theme["buttonGhost".concat(status, "HoverBorderColor")], theme["buttonGhost".concat(status, "HoverTextColor")], theme["buttonGhost".concat(status, "ActiveBackgroundColor")], theme["buttonGhost".concat(status, "ActiveBorderColor")], theme["buttonGhost".concat(status, "ActiveTextColor")], theme["buttonGhost".concat(status, "DisabledBackgroundColor")], theme["buttonGhost".concat(status, "DisabledBorderColor")], theme["buttonGhost".concat(status, "DisabledTextColor")]);
});
var hero = (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref4) {
  var status = _ref4.status,
    size = _ref4.size,
    theme = _ref4.theme;
  var leftColor = theme["buttonHero".concat(status, "LeftBackgroundColor")];
  var rightColor = theme["buttonHero".concat(status, "RightBackgroundColor")];
  var bevel = "".concat(theme.buttonHeroBevelSize, " ").concat(theme["buttonHero".concat(status, "BevelColor")]);
  var glow = "".concat(theme.buttonHeroGlowSize, " ").concat(theme["buttonHero".concat(status, "GlowColor")]);
  var shadow = theme.buttonHeroShadow;
  var heroBoxShadows = "".concat(bevel, ", ").concat(glow, ", ").concat(shadow);
  var leftFocusColor = theme["buttonHero".concat(status, "FocusLeftBackgroundColor")];
  var rightFocusColor = theme["buttonHero".concat(status, "FocusRightBackgroundColor")];
  var leftHoverColor = theme["buttonHero".concat(status, "HoverLeftBackgroundColor")];
  var rightHoverColor = theme["buttonHero".concat(status, "HoverRightBackgroundColor")];
  var leftActiveColor = theme["buttonHero".concat(status, "ActiveLeftBackgroundColor")];
  var rightActiveColor = theme["buttonHero".concat(status, "ActiveRightBackgroundColor")];
  return (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      text-shadow: ", ";\n      text-transform: ", ";\n      padding: ", ";\n      color: ", ";\n      background-image: linear-gradient(to right, ", ", ", ");\n      border: none;\n      box-shadow: ", ";\n\n      &:focus,\n      &.focus {\n        background-image: linear-gradient(to right, ", ", ", ");\n        box-shadow: ", ", 0 0 0 ", " ", ";\n      }\n      &:hover,\n      &.hover {\n        background-image: linear-gradient(to right, ", ", ", ");\n      }\n      &:active,\n      &.active,\n      &:active:focus {\n        background-image: linear-gradient(to right, ", ", ", ");\n      }\n\n      &:disabled,\n      &.disabled {\n        background-image: none;\n        background-color: ", ";\n        color: ", ";\n      }\n    "])), theme.buttonHeroTextShadow, theme.buttonHeroTextTransform, theme["buttonHero".concat(size, "Padding")], theme["buttonHero".concat(status, "TextColor")], leftColor, rightColor, heroBoxShadows, leftFocusColor, rightFocusColor, heroBoxShadows, theme.buttonHeroOutlineWidth, theme.buttonHeroOutlineColor, leftHoverColor, rightHoverColor, leftActiveColor, rightActiveColor, theme["buttonHero".concat(status, "DisabledBackgroundColor")], theme["buttonHero".concat(status, "DisabledTextColor")]);
});
var appearances = {
  filled: filled,
  hero: hero,
  ghost: ghost,
  outline: outline
};
var ButtonStyle = (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref5) {
  var theme = _ref5.theme,
    shape = _ref5.shape,
    size = _ref5.size,
    status = _ref5.status,
    fullWidth = _ref5.fullWidth,
    pulse = _ref5.pulse,
    appearance = _ref5.appearance;
  return (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    letter-spacing: 0.4px;\n    transition: none;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    white-space: nowrap;\n    vertical-align: middle;\n    user-select: none;\n\n    cursor: ", ";\n    font-family: ", ";\n    font-weight: ", ";\n    \n\n    &:hover,\n    &:focus {\n      text-decoration: none;\n    }\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    &.transitions {\n      ", "\n    }\n    \n    ", "\n  "])), theme.buttonCursor, theme.buttonTextFontFamily, theme.buttonTextFontWeight, size && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n        font-size: ", ";\n        line-height: ", ";\n      "])), theme["button".concat(size, "TextFontSize")], theme["button".concat(size, "TextLineHeight")]), shape && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n        border-radius: ", ";\n      "])), theme["button".concat(shape, "BorderRadius")]), pulse && btnPulse(theme["buttonHero".concat(status, "LeftBackgroundColor")]), fullWidth && 'width: 100%;', (0, _utils.componentAnimation)('background-color, border-color, box-shadow, color'), appearance && appearances[appearance]);
});
exports.ButtonStyle = ButtonStyle;
var Button = _styledComponents["default"].button(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  ", "\n"])), ButtonStyle);
exports.Button = Button;
var ButtonLink = _styledComponents["default"].a(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  ", "\n"])), ButtonStyle);
exports.ButtonLink = ButtonLink;
var defaultProps = {
  size: 'Medium',
  status: 'Primary',
  appearance: 'filled',
  shape: 'Rectangle'
};
Button.defaultProps = defaultProps;
ButtonLink.defaultProps = defaultProps;