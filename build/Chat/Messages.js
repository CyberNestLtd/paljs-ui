"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _MessageFile = _interopRequireDefault(require("./MessageFile"));
var _MessageMap = _interopRequireDefault(require("./MessageMap"));
var _MessageText = _interopRequireDefault(require("./MessageText"));
var _MessageQuote = _interopRequireDefault(require("./MessageQuote"));
var _style = require("./style");
var _Icon = require("../Icon");
var _div;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Messages = function Messages(props) {
  var scrollRef = _react["default"].useRef(null);
  _react["default"].useEffect(function () {
    if (scrollRef && scrollRef.current) scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight);
  }, [props.messages]);
  var getMessageComponent = function getMessageComponent(msg) {
    switch (msg.type) {
      case 'file':
        return /*#__PURE__*/_react["default"].createElement(_MessageFile["default"], {
          sender: msg.sender,
          message: msg.message,
          date: msg.date,
          files: msg.files
        });
      case 'map':
        return /*#__PURE__*/_react["default"].createElement(_MessageMap["default"], {
          sender: msg.sender,
          message: msg.message,
          date: msg.date,
          latitude: msg.latitude,
          longitude: msg.longitude,
          mapKey: props.mapKey
        });
      case 'quote':
        return /*#__PURE__*/_react["default"].createElement(_MessageQuote["default"], {
          sender: msg.sender,
          message: msg.message,
          date: msg.date,
          quote: msg.quote
        });
      default:
        return /*#__PURE__*/_react["default"].createElement(_MessageText["default"], {
          sender: msg.sender,
          message: msg.message,
          date: msg.date
        });
    }
  };
  var getInitials = function getInitials(name) {
    if (name) {
      var names = name.split(' ');
      return names.map(function (n) {
        return n.charAt(0);
      }).splice(0, 2).join('').toUpperCase();
    }
    return '';
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "scrollable",
    ref: scrollRef
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "messages"
  }, props.messages.map(function (msg, index) {
    return /*#__PURE__*/_react["default"].createElement(_style.MessageStyle, {
      reply: msg.reply,
      key: index
    }, !msg.reply && (_div || (_div = /*#__PURE__*/_react["default"].createElement("div", {
      className: "avatar"
    }, /*#__PURE__*/_react["default"].createElement(_Icon.EvaIcon, {
      name: "thumbs-up"
    })))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "message"
    }, getMessageComponent(msg)));
  }), !props.messages.length && /*#__PURE__*/_react["default"].createElement("p", {
    className: "no-messages"
  }, props.noMessages ? props.noMessages : 'No messages yet.')));
};
var _default = Messages;
exports["default"] = _default;