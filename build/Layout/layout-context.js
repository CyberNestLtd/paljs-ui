"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/* eslint-disable @typescript-eslint/no-empty-function */

var initialContext = {
  dir: 'ltr',
  addClass: function addClass(_) {},
  removeClass: function removeClass(_) {},
  addEventListener: function addEventListener(_, __) {},
  removeEventListener: function removeEventListener(_, __) {}
};
var LayoutContext = /*#__PURE__*/_react["default"].createContext(initialContext);
var _default = LayoutContext;
exports["default"] = _default;