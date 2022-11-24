"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tabs = exports.Tab = void 0;
var _react = _interopRequireDefault(require("react"));
var _style = _interopRequireDefault(require("./style"));
var _Badge = _interopRequireDefault(require("../Badge"));
var _Icon = require("../Icon");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Tab = function Tab(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "tab-content"
  }, props.children);
};
exports.Tab = Tab;
var Tabs = function Tabs(props) {
  var _props$activeIndex;
  var _React$useState = _react["default"].useState([]),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    tabs = _React$useState2[0],
    setTabs = _React$useState2[1];
  var _React$useState3 = _react["default"].useState((_props$activeIndex = props.activeIndex) !== null && _props$activeIndex !== void 0 ? _props$activeIndex : 0),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    active = _React$useState4[0],
    setActive = _React$useState4[1];
  var selectTab = function selectTab(index) {
    typeof props.onSelect === 'function' && props.onSelect(index);
    setActive(index);
  };
  _react["default"].useEffect(function () {
    if (props.activeIndex) {
      setActive(props.activeIndex);
    }
  }, [props.activeIndex]);
  _react["default"].useEffect(function () {
    var children = [];
    _react["default"].Children.forEach(props.children, function (child) {
      if (child.props.icon || child.props.title) {
        children.push(_objectSpread({}, child.props));
      }
    });
    setTabs(children);
  }, [props.children]);
  return /*#__PURE__*/_react["default"].createElement(_style["default"], {
    className: props.className,
    style: props.style,
    fullWidth: props.fullWidth
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "tabs"
  }, tabs.map(function (tab, index) {
    var cssClass = ['tab'];
    if (index === active) {
      cssClass.push('active');
    }
    if (tab.responsive) {
      cssClass.push('responsive');
    }
    if (tab.disabled) {
      cssClass.push('disabled');
    }
    if (tab.className) {
      cssClass.push.apply(cssClass, _toConsumableArray(tab.className.split(' ')));
    }
    return /*#__PURE__*/_react["default"].createElement("li", {
      style: tab.style,
      key: index,
      className: cssClass.join(' '),
      onClick: function onClick() {
        return !tab.disabled && selectTab(index);
      }
    }, /*#__PURE__*/_react["default"].createElement("a", null, tab.icon && /*#__PURE__*/_react["default"].createElement(_Icon.ItemIcon, {
      icon: tab.icon,
      className: "tabs-icon"
    }), tab.title && /*#__PURE__*/_react["default"].createElement("span", null, tab.title)), tab.badge && /*#__PURE__*/_react["default"].createElement(_Badge["default"], {
      status: tab.badge.status,
      position: tab.badge.position
    }, tab.badge.title));
  })), _react["default"].Children.map(props.children, function (child, i) {
    if (i === active && child.props.children) {
      return child;
    }
  }));
};
exports.Tabs = Tabs;