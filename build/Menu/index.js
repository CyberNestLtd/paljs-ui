"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menu = void 0;
var _react = _interopRequireDefault(require("react"));
var _style = require("./style");
var _Item = _interopRequireDefault(require("./Item"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Menu = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
  var _React$useState = _react["default"].useState(props.items),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    items = _React$useState2[0],
    setItems = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    expended = _React$useState4[0],
    setExpended = _React$useState4[1];
  var toggleSubMenu = function toggleSubMenu(updateItems, action) {
    var _iterator = _createForOfIteratorHelper(updateItems),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;
        if (typeof action === 'boolean') {
          item.expanded = action;
        } else if (item === action) {
          item.expanded = !item.expanded;
          break;
        }
        if (item.children) {
          toggleSubMenu(item.children, action);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return updateItems;
  };
  var toggleMenu = function toggleMenu() {
    setItems(toggleSubMenu(_toConsumableArray(items), !expended));
    setExpended(!expended);
  };
  _react["default"].useImperativeHandle(ref, function () {
    return {
      toggle: function toggle() {
        toggleMenu();
      }
    };
  });
  _react["default"].useEffect(function () {
    if (props.items) {
      setItems(props.items);
    }
  }, [props.items]);
  var updateSelected = function updateSelected(updateItems, ia) {
    var _iterator2 = _createForOfIteratorHelper(updateItems),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var item = _step2.value;
        var state = updateItems.indexOf(item) === ia[0];
        item.selected = state;
        if (state) {
          item.expanded = true;
        }
        if (item.children) {
          if (state) {
            updateSelected(item.children, ia.splice(1));
          } else {
            updateSelected(item.children, []);
          }
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return updateItems;
  };
  var onSelectItem = function onSelectItem(index) {
    setItems(updateSelected(_toConsumableArray(items), index));
  };
  var onToggleSubMenu = function onToggleSubMenu(item) {
    setItems(toggleSubMenu(_toConsumableArray(items), item));
  };
  return /*#__PURE__*/_react["default"].createElement(_style.MenuStyle, {
    className: props.className,
    style: props.style
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "menu-items"
  }, items.map(function (item, index) {
    return !item.hidden && /*#__PURE__*/_react["default"].createElement(_Item["default"], {
      key: index,
      id: [index],
      item: item,
      Link: props.Link,
      nextJs: props.nextJs,
      currentPath: props.currentPath,
      selectItem: function selectItem(i) {
        return onSelectItem(i);
      },
      toggleSidebar: props.toggleSidebar,
      toggleSubMenu: function toggleSubMenu(item) {
        return onToggleSubMenu(item);
      }
    });
  })));
});
exports.Menu = Menu;
Menu.displayName = 'Menu';