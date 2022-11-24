"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _breakpoints = require("../breakpoints");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var RowStyle = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  ", "\n"])), function (p) {
  return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    margin-right: ", "px;\n    margin-left: ", "px;\n    ", "\n  \n    ", "\n  \n    ", "\n  \n    ", "\n  \n    ", "\n  \n    ", "\n  \n    ", "\n  \n    ", "\n  \n    ", "\n  "])), (0, _breakpoints.getGridGutter)(p.theme) / -2, (0, _breakpoints.getGridGutter)(p.theme) / -2, p.reverse && 'flex-direction: row-reverse;', p.start && (0, _breakpoints.breakpointUp)(p.start)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      justify-content: flex-start;\n    "]))), p.center && (0, _breakpoints.breakpointUp)(p.center)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      justify-content: center;\n    "]))), p.end && (0, _breakpoints.breakpointUp)(p.end)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      justify-content: flex-end;\n    "]))), p.top && (0, _breakpoints.breakpointUp)(p.top)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      align-items: flex-start;\n    "]))), p.middle && (0, _breakpoints.breakpointUp)(p.middle)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      align-items: center;\n    "]))), p.bottom && (0, _breakpoints.breakpointUp)(p.bottom)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      align-items: flex-end;\n    "]))), p.around && (0, _breakpoints.breakpointUp)(p.around)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      justify-content: space-around;\n    "]))), p.between && (0, _breakpoints.breakpointUp)(p.between)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      justify-content: space-between;\n    "]))));
});
var Row = function Row(props) {
  return /*#__PURE__*/_react["default"].createElement(RowStyle, props, props.children);
};
var _default = Row;
exports["default"] = _default;