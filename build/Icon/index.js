"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemIcon = exports.Icon = exports.EvaIcon = void 0;
var _react = _interopRequireDefault(require("react"));
var _defaultIcons = require("./defaultIcons");
var _style = _interopRequireDefault(require("./style"));
var _Layout = require("../Layout");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var Icon = function Icon(props) {
  return /*#__PURE__*/_react["default"].createElement(_style["default"], {
    dangerouslySetInnerHTML: {
      __html: _defaultIcons.defaultIcons[props.name]
    },
    status: props.status,
    className: props.className
  });
};
exports.Icon = Icon;
var EvaIcon = function EvaIcon(props) {
  var _React$useContext = _react["default"].useContext(_Layout.LayoutContext),
    evaIcons = _React$useContext.evaIcons;
  var svgIcon = '';
  if (evaIcons && evaIcons[props.name]) {
    svgIcon = evaIcons[props.name](props.options);
  }
  return /*#__PURE__*/_react["default"].createElement(_style["default"], {
    dangerouslySetInnerHTML: {
      __html: svgIcon
    },
    status: props.status,
    className: props.className
  });
};
exports.EvaIcon = EvaIcon;
var ItemIcon = function ItemIcon(_ref) {
  var icon = _ref.icon,
    className = _ref.className;
  var _React$useContext2 = _react["default"].useContext(_Layout.LayoutContext),
    evaIcons = _React$useContext2.evaIcons;
  if (typeof icon === 'string') {
    if (icon in _defaultIcons.defaultIcons) {
      return /*#__PURE__*/_react["default"].createElement(Icon, {
        name: icon,
        className: className
      });
    } else if (evaIcons && icon in evaIcons) {
      return /*#__PURE__*/_react["default"].createElement(EvaIcon, {
        name: icon,
        className: className
      });
    } else {
      return /*#__PURE__*/_react["default"].createElement("i", {
        className: className + ' ' + icon
      });
    }
  } else if (_typeof(icon) === 'object' && evaIcons && evaIcons[icon.name]) {
    icon.className += ' ' + className;
    return /*#__PURE__*/_react["default"].createElement(EvaIcon, icon);
  } else {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
  }
};
exports.ItemIcon = ItemIcon;