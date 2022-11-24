"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _style = _interopRequireDefault(require("./style"));
var _Icon = require("../Icon");
var _PopoverLay = _interopRequireDefault(require("../PopoverLay"));
var _span;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Tooltip = function Tooltip(props) {
  var arrowSize = 6;
  var arrowRound = Math.round(-arrowSize - arrowSize / 2.5);
  return /*#__PURE__*/_react["default"].createElement(_PopoverLay["default"], {
    target: props.children,
    placement: props.placement,
    trigger: props.trigger,
    style: props.style,
    className: props.className,
    eventListener: props.eventListener,
    transformSize: 5,
    arrowRound: arrowRound,
    arrowSize: arrowSize.toString() + 'px'
  }, /*#__PURE__*/_react["default"].createElement(_style["default"], {
    status: props.status,
    arrowSize: arrowSize.toString() + 'px'
  }, _span || (_span = /*#__PURE__*/_react["default"].createElement("span", {
    className: "arrow"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "content"
  }, props.icon && /*#__PURE__*/_react["default"].createElement(_Icon.ItemIcon, {
    className: "icon",
    icon: props.icon
  }), props.content && /*#__PURE__*/_react["default"].createElement("span", null, props.content))));
};
var _default = Tooltip;
exports["default"] = _default;