"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/* eslint-disable @typescript-eslint/no-empty-function */

var initialContext = {
  keys: [],
  setKeys: function setKeys() {},
  handleToggle: function handleToggle() {},
  expanded: [],
  disabled: []
};
var AccordionContext = /*#__PURE__*/_react["default"].createContext(initialContext);
var _default = AccordionContext;
exports["default"] = _default;