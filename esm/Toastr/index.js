function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
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
import ReactDOM from 'react-dom';
import React from 'react';
import layoutContext from '../Layout/layout-context';
import { getLogicalPosition } from '../utils';
import { ToastrContainer } from './style';
import Item from './Item';
var Toastr = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _React$useState = React.useState([]),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    items = _React$useState2[0],
    setItems = _React$useState2[1];
  var _React$useState3 = React.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    createParents = _React$useState4[0],
    setCreateParents = _React$useState4[1];
  var layout = React.useContext(layoutContext);
  React.useEffect(function () {
    setCreateParents(true);
  }, []);
  React.useImperativeHandle(ref, function () {
    return {
      add: function add(message) {
        var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var options = _objectSpread(_objectSpread({}, props), option);
        var newItems = _toConsumableArray(items);
        var push = true;
        if (options.preventDuplicates) {
          var _iterator = _createForOfIteratorHelper(newItems),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var item = _step.value;
              if (item.title === title && item.message === message) {
                push = false;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        if (push) {
          var _layout$dir;
          options.position = getLogicalPosition((_layout$dir = layout.dir) !== null && _layout$dir !== void 0 ? _layout$dir : 'ltr', options.position);
          newItems.push(_objectSpread(_objectSpread({}, options), {}, {
            title: title,
            message: message,
            icon: options.icons ? options.icons[options.status] : ''
          }));
          setItems(newItems);
        }
      }
    };
  }, [items]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, createParents && ['topStart', 'topEnd', 'bottomStart', 'bottomEnd'].map(function (position) {
    return /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement(ToastrContainer, {
      position: position,
      isTop: position === 'topEnd' || position === 'topStart'
    }, /*#__PURE__*/React.createElement("div", {
      className: "overlay-pane",
      id: 'toastr' + position
    })), document.getElementById('overlay-container'));
  }), items.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Item, _extends({
      key: index
    }, item));
  }));
});
Toastr.displayName = 'Toastr';
Toastr.defaultProps = {
  position: 'topEnd',
  status: 'Primary',
  duration: 3000,
  hasIcon: true,
  destroyByClick: true,
  preventDuplicates: false,
  icons: {
    Danger: 'flash-outline',
    Success: 'checkmark-outline',
    Info: 'question-mark-outline',
    Warning: 'alert-triangle-outline',
    Primary: 'email-outline',
    Control: 'email-outline',
    Basic: 'email-outline'
  }
};
export { Toastr };