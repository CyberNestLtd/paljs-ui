"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _style = require("./style");
var _MessageText = _interopRequireDefault(require("./MessageText"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var MessageQuote = function MessageQuote(props) {
  return /*#__PURE__*/_react["default"].createElement(_style.MessageQuoteStyle, null, (props.sender || props.date) && /*#__PURE__*/_react["default"].createElement("p", {
    className: "sender"
  }, props.sender, " ", /*#__PURE__*/_react["default"].createElement("time", null, props.date)), /*#__PURE__*/_react["default"].createElement("p", {
    className: "quote"
  }, props.quote), /*#__PURE__*/_react["default"].createElement(_MessageText["default"], {
    message: props.message
  }));
};
var _default = MessageQuote;
exports["default"] = _default;