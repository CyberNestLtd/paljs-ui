"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Chat: true,
  ChatMessages: true,
  ChatForm: true
};
exports.Chat = void 0;
Object.defineProperty(exports, "ChatForm", {
  enumerable: true,
  get: function get() {
    return _Form["default"];
  }
});
Object.defineProperty(exports, "ChatMessages", {
  enumerable: true,
  get: function get() {
    return _Messages["default"];
  }
});
var _react = _interopRequireDefault(require("react"));
var _style = require("./style");
var _Messages = _interopRequireDefault(require("./Messages"));
var _Form = _interopRequireDefault(require("./Form"));
var _types = require("./types");
Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _types[key];
    }
  });
});
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Chat = function Chat(props) {
  return /*#__PURE__*/_react["default"].createElement(_style.ChatStyle, props, /*#__PURE__*/_react["default"].createElement("header", null, props.title), props.children);
};
exports.Chat = Chat;
Chat.defaultProps = {
  size: 'Medium',
  status: 'Primary'
};