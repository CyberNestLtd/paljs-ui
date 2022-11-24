"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _Icon2 = require("../Icon");
var _Card = require("../Card");
var _templateObject, _templateObject2, _Icon;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var RevealCardStyled = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref) {
  var theme = _ref.theme,
    button = _ref.button,
    revealed = _ref.revealed;
  return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    display: block;\n    position: relative;\n    overflow: hidden;\n    box-shadow: ", ";\n    margin-bottom: ", ";\n    & > .front {\n      display: block;\n      height: 100%;\n    }\n\n    & > .back {\n      position: absolute;\n      top: ", ";\n      right: 0;\n      left: 0;\n      overflow: hidden;\n      transition: ", ";\n      height: calc(100% - ", ");\n      .container {\n        position: absolute;\n        left: 0;\n        top: ", ";\n        width: 100%;\n        transition: top 0.5s;\n      }\n    }\n    & > .back,\n    & > .front {\n      ", " {\n        box-shadow: none;\n        margin: 0;\n      }\n    }\n    .reveal-button {\n      cursor: pointer;\n      position: absolute;\n      transform: ", ";\n      transition: transform 0.3s;\n      line-height: ", ";\n      padding: ", ";\n      ", ": 0;\n      ", ": 0;\n    }\n  "])), theme.cardShadow, theme.cardMarginBottom, revealed ? '0' : '100%', revealed ? 'none' : 'top 0s 0.5s', theme.cardMarginBottom, revealed ? '0' : '100%', _Card.CardStyle, revealed ? 'none' : 'rotate(180deg)', theme.cardTextLineHeight, theme.cardPadding, theme.dir === 'rtl' ? 'left' : 'right', button === 'bottom' ? 'bottom' : 'top');
});
var RevealCard = function RevealCard(props) {
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    revealed = _React$useState2[0],
    setRevealed = _React$useState2[1];
  var handleRevealed = function handleRevealed() {
    setRevealed(!revealed);
  };
  return /*#__PURE__*/_react["default"].createElement(RevealCardStyled, {
    className: props.className,
    style: props.style,
    revealed: revealed,
    button: props.button
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "front"
  }, props.children[0]), /*#__PURE__*/_react["default"].createElement("div", {
    className: "back"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, props.children[1])), /*#__PURE__*/_react["default"].createElement("div", {
    className: "reveal-button",
    onClick: handleRevealed
  }, _Icon || (_Icon = /*#__PURE__*/_react["default"].createElement(_Icon2.Icon, {
    name: "chevron-down-outline"
  }))));
};
var _default = RevealCard;
exports["default"] = _default;