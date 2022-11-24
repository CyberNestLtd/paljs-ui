"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SidebarBody = exports.Sidebar = void 0;
var _react = _interopRequireDefault(require("react"));
var _style = _interopRequireDefault(require("./style"));
var _breakpoints = require("../breakpoints");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Sidebar = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
  var _props$property;
  var _React$useState = _react["default"].useState(props.fixed),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    fixed = _React$useState2[0],
    setFixed = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(props.state),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    state = _React$useState4[0],
    setState = _React$useState4[1];
  _react["default"].useImperativeHandle(ref, function () {
    return {
      toggle: function toggle() {
        switch (state) {
          case 'expanded':
            setState('compacted');
            break;
          case 'compacted':
            setState('expanded');
            break;
          case 'hidden':
            setState('visible');
            break;
          case 'visible':
            setState('hidden');
            break;
        }
      },
      hide: function hide() {
        if (state === 'visible') {
          setState('hidden');
        }
      }
    };
  }, [state]);
  var mouseEnter = function mouseEnter() {
    if (state === 'compacted') {
      setState('expanded');
    }
  };
  var mouseLeave = function mouseLeave() {
    if (state === 'expanded' && (0, _breakpoints.ifWidthInBreakpoint)(props.compactedBreakpoints)) {
      setState('compacted');
    }
  };
  _react["default"].useEffect(function () {
    var onMediaQueryChanges = function onMediaQueryChanges() {
      if ((0, _breakpoints.ifWidthInBreakpoint)(props.hiddenBreakpoints)) {
        setState('hidden');
        setFixed(true);
      } else if ((0, _breakpoints.ifWidthInBreakpoint)(props.compactedBreakpoints)) {
        setState('compacted');
        setFixed(true);
      } else {
        setState('expanded');
        setFixed(false);
      }
    };
    if (props.responsive) {
      onMediaQueryChanges();
      window.addEventListener('resize', onMediaQueryChanges);
    }
    return function () {
      window.removeEventListener('resize', onMediaQueryChanges);
    };
  }, []);
  _react["default"].useEffect(function () {
    typeof props.getState === 'function' && props.getState(state);
  }, [state]);
  var className = props.className ? props.className.split(' ') : [];
  className.push(state !== null && state !== void 0 ? state : '', (_props$property = props.property) !== null && _props$property !== void 0 ? _props$property : '');
  fixed && className.push('fixed');
  return /*#__PURE__*/_react["default"].createElement(_style["default"], {
    className: className.join(' '),
    state: state,
    property: props.property,
    fixed: fixed,
    containerFixed: props.containerFixed,
    onMouseEnter: mouseEnter,
    onMouseLeave: mouseLeave
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "main-container"
  }, props.children));
});
exports.Sidebar = Sidebar;
var SidebarBody = function SidebarBody(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "scrollable"
  }, props.children);
};
exports.SidebarBody = SidebarBody;
Sidebar.displayName = 'Sidebar';
Sidebar.defaultProps = {
  compactedBreakpoints: ['xs', 'is', 'sm', 'md', 'lg'],
  hiddenBreakpoints: ['xs', 'is'],
  property: 'start',
  state: 'expanded'
};