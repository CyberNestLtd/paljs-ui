"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _breakpoints = require("../breakpoints");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var BP = Object.keys(_breakpoints.breakpoints);
var colData = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref) {
  var breakPoint = _ref.breakPoint,
    theme = _ref.theme;
  return breakPoint && Object.keys(breakPoint).sort(function (k1, k2) {
    return BP.indexOf(k1) - BP.indexOf(k2);
  }).map(function (k) {
    if (typeof breakPoint[k] === 'number') {
      return (0, _breakpoints.breakpointUp)(k)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n            flex: 0 0 ", "%;\n            max-width: ", "%;\n            display: block;"])), 100 / (0, _breakpoints.getGridSize)(theme) * breakPoint[k], 100 / (0, _breakpoints.getGridSize)(theme) * breakPoint[k]);
    } else if (breakPoint[k]) {
      return (0, _breakpoints.breakpointUp)(k)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n            flex-grow: 1;\n            flex-basis: 0;\n            max-width: 100%;\n            display: block;"])));
    } else {
      return (0, _breakpoints.breakpointUp)(k)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["display: none;"])));
    }
  });
});
var offset = (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref2) {
  var offset = _ref2.offset,
    theme = _ref2.theme;
  return offset && Object.keys(offset).map(function (k) {
    return (0, _breakpoints.breakpointUp)(k)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n          margin-", ": \n          ", "%;"])), theme.dir == 'rtl' ? 'right' : 'left', 100 / (0, _breakpoints.getGridSize)(theme) * offset[k]);
  });
});
var ColStyle = _styledComponents["default"].div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref3) {
  var theme = _ref3.theme,
    first = _ref3.first,
    last = _ref3.last,
    order = _ref3.order;
  return (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: ", "px;\n  padding-left: ", "px;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), (0, _breakpoints.getGridGutter)(theme) / 2, (0, _breakpoints.getGridGutter)(theme) / 2, colData, offset, first && 'order: -1;', last && "order: ".concat((0, _breakpoints.getGridSize)(theme) + 1, ";"), order && "order: ".concat(order, ";"));
});
var Col = function Col(props) {
  return /*#__PURE__*/_react["default"].createElement(ColStyle, props, props.children);
};
var _default = Col;
exports["default"] = _default;