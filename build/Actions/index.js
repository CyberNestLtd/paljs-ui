"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Actions = void 0;
var _react = _interopRequireDefault(require("react"));
var _style = require("./style");
var _Badge = _interopRequireDefault(require("../Badge"));
var _Icon = require("../Icon");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var Actions = function Actions(_ref) {
  var actions = _ref.actions,
    className = _ref.className,
    style = _ref.style,
    fullWidth = _ref.fullWidth,
    size = _ref.size,
    inverse = _ref.inverse,
    Link = _ref.Link,
    nextJs = _ref.nextJs;
  return /*#__PURE__*/_react["default"].createElement(_style.ActionsStyle, {
    className: className,
    style: style
  }, actions.map(function (action, index) {
    var icon = /*#__PURE__*/_react["default"].createElement(_Icon.ItemIcon, {
      icon: action.icon,
      className: "control-icon"
    });
    return /*#__PURE__*/_react["default"].createElement(_style.ActionStyle, {
      key: index,
      fullWidth: fullWidth,
      size: size,
      inverse: inverse,
      disabled: !!action.disabled
    }, action.icon ? action.link && Link ? nextJs ? /*#__PURE__*/_react["default"].createElement(Link, action.link, /*#__PURE__*/_react["default"].createElement("a", {
      className: "icon-container"
    }, icon)) : /*#__PURE__*/_react["default"].createElement(Link, _extends({}, action.link, {
      className: "icon-container"
    }), icon) : /*#__PURE__*/_react["default"].createElement("a", _extends({}, action.url, {
      className: "icon-container"
    }), icon) : action.content, action.badge && /*#__PURE__*/_react["default"].createElement(_Badge["default"], {
      status: action.badge.status,
      position: action.badge.position
    }, action.badge.title));
  }));
};
exports.Actions = Actions;
Actions.defaultProps = {
  size: 'Small'
};