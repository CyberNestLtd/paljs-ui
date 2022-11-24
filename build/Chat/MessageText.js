"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _style = require("./style");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var MessageText = function MessageText(props) {
  return /*#__PURE__*/_react["default"].createElement(_style.MessageTextStyle, null, (props.sender || props.date) && /*#__PURE__*/_react["default"].createElement("p", {
    className: "sender"
  }, props.sender, " ", /*#__PURE__*/_react["default"].createElement("time", null, props.date)), props.message && /*#__PURE__*/_react["default"].createElement("p", {
    className: "text"
  }, " ", props.message));
};
var _default = MessageText;
exports["default"] = _default;