"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardStyle = exports.CardHeader = exports.CardFooter = exports.CardBody = exports.Card = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _utils = require("../utils");
var _react = _interopRequireDefault(require("react"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var CardFooter = _styledComponents["default"].footer(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.CardFooter = CardFooter;
var headerBg = (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref) {
  var theme = _ref.theme,
    status = _ref.status,
    accent = _ref.accent;
  return (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    padding: ", ";\n    border-bottom: ", " ", " ", ";\n    border-top-left-radius: ", ";\n    border-top-right-radius: ", ";\n    color: ", ";\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n\n    ", "\n\n    ", "\n    ", "\n  "])), theme.cardPadding, theme.cardDividerWidth, theme.cardDividerStyle, theme.cardDividerColor, theme.cardBorderRadius, theme.cardBorderRadius, theme.cardHeaderTextColor, theme.cardHeaderTextFontFamily, theme.cardHeaderTextFontSize, theme.cardHeaderTextFontWeight, theme.cardHeaderTextLineHeight, _utils.getHeadings, status && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        background-color: ", ";\n        border-bottom-color: ", ";\n        border-bottom-width: 0;\n        color: ", ";\n        a,\n        a:hover {\n          color: ", ";\n        }\n      "])), theme["cardHeader".concat(status, "BackgroundColor")], theme["cardHeader".concat(status, "BackgroundColor")], theme["cardHeader".concat(status, "TextColor")], theme["cardHeader".concat(status, "TextColor")]), accent && 'border-radius: 0;');
});
var CardStyle = _styledComponents["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  ", ";\n"])), function (_ref2) {
  var theme = _ref2.theme,
    accent = _ref2.accent,
    size = _ref2.size;
  return (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    background-color: ", ";\n    border: ", " ", " ", ";\n    border-radius: ", ";\n    box-shadow: ", ";\n    color: ", ";\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    margin-bottom: ", ";\n\n    ", "\n\n    ", "\n\n    ", "\n\n    & > header {\n      ", "\n    }\n    \n    ", ",\n    & > footer {\n      padding: ", ";\n      border-top: ", " ", " ", ";\n      border-bottom-left-radius: ", ";\n      border-bottom-right-radius: ", ";\n    }\n  "])), theme.cardBackgroundColor, theme.cardBorderWidth, theme.cardBorderStyle, theme.cardBorderColor, theme.cardBorderRadius, theme.cardShadow, theme.cardTextColor, theme.cardTextFontFamily, theme.cardTextFontSize, theme.cardTextFontWeight, theme.cardTextLineHeight, theme.cardMarginBottom, (0, _utils.scrollbars)(theme.cardScrollbarColor, theme.cardScrollbarBackgroundColor, theme.cardScrollbarWidth), accent && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n        border-top-color: ", ";\n        border-top-style: ", ";\n        border-top-width: ", ";\n      "])), theme["cardHeader".concat(accent, "BackgroundColor")], theme.cardBorderStyle, theme.cardBorderRadius), size && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n        height: ", ";\n      "])), theme["cardHeight".concat(size)]), headerBg, CardFooter, theme.cardPadding, theme.cardDividerWidth, theme.cardDividerStyle, theme.cardDividerColor, theme.cardBorderRadius, theme.cardBorderRadius);
});
exports.CardStyle = CardStyle;
var CardHeader = _styledComponents["default"].header(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  ", "\n"])), headerBg);
exports.CardHeader = CardHeader;
var CardBody = _styledComponents["default"].div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref3) {
  var theme = _ref3.theme;
  return (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    padding: ", ";\n    overflow: auto;\n    flex: 1;\n    -ms-flex: 1 1 auto;\n    position: relative;\n    ", "\n  "])), theme.cardPadding, (0, _utils.scrollbars)(theme.cardScrollbarColor, theme.cardScrollbarBackgroundColor, theme.cardScrollbarWidth));
});
exports.CardBody = CardBody;
var Card = function Card(props) {
  return /*#__PURE__*/_react["default"].createElement(CardStyle, props, props.children);
};
exports.Card = Card;