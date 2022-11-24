"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.breakpoints = exports.breakpointUp = exports.breakpointOnly = exports.breakpointDown = exports.breakpointBetween = void 0;
exports.getGridGutter = getGridGutter;
exports.getGridSize = getGridSize;
exports.ifWidthInBreakpoint = ifWidthInBreakpoint;
exports.maxContainer = void 0;
var _styledComponents = require("styled-components");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var gridSize = 12;
var gridGutter = 24;
var breakpoints = {
  xs: 0,
  is: 400,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
  xxxl: 1600
};
exports.breakpoints = breakpoints;
var maxContainer = {
  is: 380,
  sm: 540,
  md: 720,
  lg: 960,
  xl: 1140,
  xxl: 1320,
  xxxl: 1500
};
exports.maxContainer = maxContainer;
function getGridSize(theme) {
  var _theme$gridSize;
  return (_theme$gridSize = theme.gridSize) !== null && _theme$gridSize !== void 0 ? _theme$gridSize : gridSize;
}
function getGridGutter(theme) {
  var _theme$gridGutter;
  return (_theme$gridGutter = theme.gridGutter) !== null && _theme$gridGutter !== void 0 ? _theme$gridGutter : gridGutter;
}
function breakpointMin(name) {
  return breakpoints[name] !== 0 ? breakpoints[name] : null;
}
function breakpointNext(index) {
  return index < Object.keys(breakpoints).length ? Object.keys(breakpoints)[index + 1] : null;
}
function ifWidthInBreakpoint() {
  var breakpoint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var bp = Object.keys(breakpoints);
  if (breakpoint === []) {
    return false;
  }
  var value = false;
  breakpoint.filter(function (b) {
    return ~bp.indexOf(b);
  }).sort(function (b1, b2) {
    return bp.indexOf(b1) - bp.indexOf(b2);
  }).forEach(function (b) {
    var next = breakpointNext(bp.indexOf(b));
    if (window.innerWidth >= breakpoints[b] && (next == null || window.innerWidth < breakpoints[next])) {
      value = true;
    }
  });
  return value;
}
function breakpointMax(name) {
  var n = Object.keys(breakpoints).indexOf(name);
  var next = breakpointNext(n);
  if (!next) return null;
  var min = breakpointMin(next);
  if (!min) return null;
  return min - 0.2;
}
var breakpointDown = function breakpointDown(name) {
  return function (first) {
    var max = breakpointMax(name);
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (max) {
      return (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      @media (max-width: ", "px) {\n        ", "\n      }\n    "])), max, _styledComponents.css.apply(void 0, [first].concat(args)));
    } else {
      return _styledComponents.css.apply(void 0, [first].concat(args));
    }
  };
};
exports.breakpointDown = breakpointDown;
var breakpointUp = function breakpointUp(name) {
  return function (first) {
    var min = breakpointMin(name);
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    if (min) {
      return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      @media (min-width: ", "px) {\n        ", "\n      }\n    "])), min, _styledComponents.css.apply(void 0, [first].concat(args)));
    } else {
      return _styledComponents.css.apply(void 0, [first].concat(args));
    }
  };
};
exports.breakpointUp = breakpointUp;
var breakpointBetween = function breakpointBetween(lower, upper) {
  return function (first) {
    var min = breakpointMin(lower);
    var max = breakpointMax(upper);
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    if (min != null && max != null) {
      return (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      @media (min-width: ", "px) and (max-width: ", "px) {\n        ", "\n      }\n    "])), min, max, _styledComponents.css.apply(void 0, [first].concat(args)));
    } else if (max == null) {
      return breakpointUp(lower).apply(void 0, [first].concat(args));
    } else if (min == null) {
      return breakpointDown(upper).apply(void 0, [first].concat(args));
    } else {
      return _styledComponents.css.apply(void 0, [first].concat(args));
    }
  };
};
exports.breakpointBetween = breakpointBetween;
var breakpointOnly = function breakpointOnly(name) {
  return function (first) {
    var min = breakpointMin(name);
    var max = breakpointMax(name);
    for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      args[_key4 - 1] = arguments[_key4];
    }
    if (min != null && max != null) {
      return (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      @media (min-width: ", "px) and (max-width: ", "px) {\n        ", "\n      }\n    "])), min, max, _styledComponents.css.apply(void 0, [first].concat(args)));
    } else if (max == null) {
      return breakpointUp(name).apply(void 0, [first].concat(args));
    } else if (min == null) {
      return breakpointDown(name).apply(void 0, [first].concat(args));
    } else {
      return _styledComponents.css.apply(void 0, [first].concat(args));
    }
  };
};
exports.breakpointOnly = breakpointOnly;