"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _style = _interopRequireDefault(require("./style"));
var _Menu = require("../Menu");
var _PopoverLay = _interopRequireWildcard(require("../PopoverLay"));
var _span;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Component = function Component(props) {
  var _React$useContext = _react["default"].useContext(_PopoverLay.OverLayContext),
    hide = _React$useContext.hide;
  return /*#__PURE__*/_react["default"].createElement(_style["default"], null, _span || (_span = /*#__PURE__*/_react["default"].createElement("span", {
    className: "arrow"
  })), /*#__PURE__*/_react["default"].createElement(_Menu.Menu, {
    className: "context-menu",
    nextJs: props.nextJs,
    currentPath: props.currentPath,
    Link: props.Link,
    items: props.items,
    toggleSidebar: hide
  }));
};
var ContextMenu = function ContextMenu(props) {
  return /*#__PURE__*/_react["default"].createElement(_PopoverLay["default"], {
    target: props.children,
    placement: props.placement,
    style: props.style,
    className: props.className,
    eventListener: props.eventListener,
    transformSize: 15,
    contextMenu: true
  }, /*#__PURE__*/_react["default"].createElement(Component, props));
};
var _default = ContextMenu;
exports["default"] = _default;