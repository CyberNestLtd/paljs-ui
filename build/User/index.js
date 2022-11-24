"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Badge = _interopRequireDefault(require("../Badge"));
var _style = _interopRequireDefault(require("./style"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

var User = function User(props) {
  var getInitials = function getInitials() {
    if (props.name) {
      var names = props.name.split(' ');
      return names.map(function (n) {
        return n.charAt(0);
      }).splice(0, 2).join('').toUpperCase();
    }
    return '';
  };
  return /*#__PURE__*/_react["default"].createElement(_style["default"], props, /*#__PURE__*/_react["default"].createElement("div", {
    className: "user-container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: 'user-picture ' + (props.image ? 'image' : 'initials')
  }, !props.image && props.showInitials && getInitials(), props.badge && /*#__PURE__*/_react["default"].createElement(_Badge["default"], {
    status: props.badge.status,
    position: props.badge.position
  }, props.badge.title)), !props.onlyPicture && /*#__PURE__*/_react["default"].createElement("div", {
    className: "info-container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "user-name"
  }, props.name), /*#__PURE__*/_react["default"].createElement("div", {
    className: "user-title"
  }, props.title))));
};
User.defaultProps = {
  size: 'Medium',
  showInitials: true
};
var _default = User;
exports["default"] = _default;