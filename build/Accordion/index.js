"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Accordion = void 0;
Object.defineProperty(exports, "AccordionItem", {
  enumerable: true,
  get: function get() {
    return _Item.AccordionItem;
  }
});
var _style = require("./style");
var _react = _interopRequireDefault(require("react"));
var _Context = _interopRequireDefault(require("./Context"));
var _Item = require("./Item");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Accordion = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
  var _props$expanded, _props$disabled2;
  var _React$useState = _react["default"].useState((_props$expanded = props.expanded) !== null && _props$expanded !== void 0 ? _props$expanded : []),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    expanded = _React$useState2[0],
    setExpanded = _React$useState2[1];
  var _React$useState3 = _react["default"].useState([]),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    keys = _React$useState4[0],
    setKeys = _React$useState4[1];
  var handleAllState = function handleAllState(state) {
    if (state) {
      var items = [];
      keys.forEach(function (key) {
        return !(props.disabled && props.disabled.includes(key)) && items.push(key);
      });
      setExpanded(items);
    } else {
      setExpanded([]);
    }
  };
  var handleState = function handleState(state, uniqueKey) {
    var index = expanded.indexOf(uniqueKey);
    var newKeys = _toConsumableArray(expanded);
    if (index > -1 && !state) {
      newKeys.splice(index, 1);
    }
    if (index < 0 && state) {
      newKeys.push(uniqueKey);
    }
    setExpanded(newKeys);
  };
  var handleToggle = function handleToggle(uniqueKey) {
    var _props$disabled;
    if (!((_props$disabled = props.disabled) !== null && _props$disabled !== void 0 && _props$disabled.includes(uniqueKey))) {
      var _index = expanded.indexOf(uniqueKey);
      if (props.multi) {
        var newKeys = _toConsumableArray(expanded);
        if (_index > -1) {
          newKeys.splice(_index, 1);
        } else {
          newKeys.push(uniqueKey);
        }
        setExpanded(newKeys);
      } else {
        if (_index > -1) {
          setExpanded([]);
        } else {
          setExpanded([uniqueKey]);
        }
      }
    }
  };
  _react["default"].useImperativeHandle(ref, function () {
    return {
      openAll: function openAll() {
        handleAllState(true);
      },
      closeAll: function closeAll() {
        handleAllState(false);
      },
      open: function open(uniqueKey) {
        handleState(true, uniqueKey);
      },
      close: function close(uniqueKey) {
        handleState(false, uniqueKey);
      },
      toggle: function toggle(uniqueKey) {
        handleToggle(uniqueKey);
      }
    };
  }, [expanded, keys, props.disabled]);
  return /*#__PURE__*/_react["default"].createElement(_Context["default"].Provider, {
    value: {
      expanded: expanded,
      setKeys: setKeys,
      keys: keys,
      handleToggle: handleToggle,
      disabled: (_props$disabled2 = props.disabled) !== null && _props$disabled2 !== void 0 ? _props$disabled2 : []
    }
  }, /*#__PURE__*/_react["default"].createElement(_style.AccordionStyle, {
    className: props.className
  }, props.children));
});
exports.Accordion = Accordion;
Accordion.displayName = 'Accordion';