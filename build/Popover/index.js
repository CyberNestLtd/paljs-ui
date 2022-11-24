"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _style = _interopRequireDefault(require("./style"));
var _PopoverLay = _interopRequireDefault(require("../PopoverLay"));
var _span;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Popover = function Popover(props) {
  var theme = _react["default"].useContext(_styledComponents.ThemeContext);
  var arrowSize = parseInt(theme.popoverArrowSize);
  var arrowRound = Math.round(-arrowSize - arrowSize / 2);
  return /*#__PURE__*/_react["default"].createElement(_PopoverLay["default"], {
    target: props.children,
    placement: props.placement,
    trigger: props.trigger,
    style: props.style,
    className: props.className,
    eventListener: props.eventListener,
    transformSize: 15,
    arrowRound: arrowRound,
    arrowSize: theme.popoverArrowSize
  }, /*#__PURE__*/_react["default"].createElement(_style["default"], null, _span || (_span = /*#__PURE__*/_react["default"].createElement("span", {
    className: "arrow"
  })), typeof props.overlay === 'string' ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "primitive-overlay"
  }, props.overlay) : props.overlay));
};
var _default = Popover;
exports["default"] = _default;