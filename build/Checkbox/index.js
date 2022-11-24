"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = void 0;
var _react = _interopRequireDefault(require("react"));
var _style = _interopRequireDefault(require("./style"));
var _Icon3 = require("../Icon");
var _Icon, _Icon2;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Checkbox = function Checkbox(props) {
  return /*#__PURE__*/_react["default"].createElement(_style["default"], {
    disabled: props.disabled,
    checked: props.checked,
    status: props.status,
    className: props.className,
    style: props.style
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "checkbox",
    className: "native-input visually-hidden",
    disabled: props.disabled,
    onBlur: props.onBlur,
    checked: props.checked,
    onChange: function onChange(e) {
      return props.onChange(e.target.checked);
    }
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "custom-checkbox"
  }, props.checked && !props.indeterminate && (_Icon || (_Icon = /*#__PURE__*/_react["default"].createElement(_Icon3.Icon, {
    name: "checkmark-bold-outline"
  }))), props.indeterminate && (_Icon2 || (_Icon2 = /*#__PURE__*/_react["default"].createElement(_Icon3.Icon, {
    name: "minus-bold-outline"
  })))), /*#__PURE__*/_react["default"].createElement("span", {
    className: "text"
  }, props.children));
};
exports.Checkbox = Checkbox;
Checkbox.defaultProps = {
  status: 'Basic'
};