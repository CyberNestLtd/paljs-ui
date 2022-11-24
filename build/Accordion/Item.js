"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccordionItem = void 0;
var _react = _interopRequireDefault(require("react"));
var _Context = _interopRequireDefault(require("./Context"));
var _style = require("./style");
var _Icon3 = require("../Icon");
var _Icon, _Icon2;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var AccordionItem = function AccordionItem(_ref) {
  var title = _ref.title,
    uniqueKey = _ref.uniqueKey,
    children = _ref.children;
  var _React$useContext = _react["default"].useContext(_Context["default"]),
    expanded = _React$useContext.expanded,
    disabled = _React$useContext.disabled,
    handleToggle = _React$useContext.handleToggle,
    keys = _React$useContext.keys,
    setKeys = _React$useContext.setKeys;
  _react["default"].useEffect(function () {
    setKeys([].concat(_toConsumableArray(keys), [uniqueKey]));
  }, []);
  var state = {
    expanded: expanded.includes(uniqueKey),
    disabled: disabled.includes(uniqueKey)
  };
  var cssStyle = [];
  state.expanded ? cssStyle.push('expanded') : cssStyle.push('collapsed');
  state.disabled && cssStyle.push('disabled');
  return /*#__PURE__*/_react["default"].createElement(_style.ItemStyle, {
    className: cssStyle.join(' ')
  }, /*#__PURE__*/_react["default"].createElement("header", {
    onClick: function onClick() {
      return handleToggle(uniqueKey);
    }
  }, title, !state.disabled && state.expanded ? _Icon || (_Icon = /*#__PURE__*/_react["default"].createElement(_Icon3.Icon, {
    className: "expansion-indicator",
    name: "chevron-up-outline"
  })) : _Icon2 || (_Icon2 = /*#__PURE__*/_react["default"].createElement(_Icon3.Icon, {
    className: "expansion-indicator",
    name: "chevron-down-outline"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: state.expanded ? 'expanded' : 'collapsed'
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "item-body"
  }, children)));
};
exports.AccordionItem = AccordionItem;