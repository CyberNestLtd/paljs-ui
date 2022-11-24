"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _breakpoints = require("../breakpoints");
var _style = require("../Menu/style");
var _utils = require("../utils");
var _Layout = require("../Layout");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var compacted = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", " {\n    width: ", ";\n\n    .menu-item a.active {\n      position: relative;\n\n      &::before {\n        position: absolute;\n        content: '';\n        top: 0;\n        height: 100%;\n        width: 4px;\n        background: ", ";\n        ", ": 0;\n      }\n    }\n\n    > .menu-items > .menu-item > a {\n      span,\n      .chevron {\n        display: none;\n      }\n    }\n\n    .menu-items > .menu-item {\n      transition: border-color 1s ease;\n\n      &.menu-group {\n        display: block;\n        color: transparent;\n        width: 0;\n        padding: 0;\n        overflow: hidden;\n      }\n\n      i {\n        margin-right: 0;\n      }\n\n      a {\n        justify-content: center;\n      }\n\n      & > .expanded {\n        display: none;\n      }\n    }\n  }\n  ", "\n"])), _style.MenuStyle, function (_ref) {
  var theme = _ref.theme;
  return theme.sidebarWidthCompact;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.sidebarMenuItemHighlightColor;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.dir === 'rtl' ? 'right' : 'left';
}, function (_ref4) {
  var property = _ref4.property,
    theme = _ref4.theme,
    fixed = _ref4.fixed;
  if (fixed) {
    switch (property) {
      case 'right':
        return "\n          & ~ ".concat(_Layout.LayoutContent, " {\n            margin-right: ").concat(theme.sidebarWidthCompact, ";\n          }\n          & ~ ").concat(_Layout.LayoutContent, ".center {\n            padding-right: ").concat(theme.sidebarWidthCompact, ";\n          }\n        ");
      case 'left':
        return "\n          & ~ ".concat(_Layout.LayoutContent, " {\n            margin-left: ").concat(theme.sidebarWidthCompact, ";\n          }\n          & ~ ").concat(_Layout.LayoutContent, ".center {\n            padding-left: ").concat(theme.sidebarWidthCompact, ";\n          }\n        ");
      case 'start':
        return "\n          & ~ ".concat(_Layout.LayoutContent, " {\n            ").concat(theme.dir == 'rtl' ? 'margin-right:' : 'margin-left:', " ").concat(theme.sidebarWidthCompact, ";\n          }\n          & ~ ").concat(_Layout.LayoutContent, ".center {\n            ").concat(theme.dir == 'rtl' ? 'padding-right:' : 'padding-left:', " ").concat(theme.sidebarWidthCompact, ";\n          }\n        ");
      case 'end':
        return "\n          & ~ ".concat(_Layout.LayoutContent, " {\n            ").concat(theme.dir == 'rtl' ? 'margin-left:' : 'margin-right:', " ").concat(theme.sidebarWidthCompact, ";\n          }\n          & ~ ").concat(_Layout.LayoutContent, ".center {\n            ").concat(theme.dir == 'rtl' ? 'padding-left:' : 'padding-right:', " ").concat(theme.sidebarWidthCompact, ";\n          }\n        ");
      default:
        break;
    }
  }
});
var fixedStyle = (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref5) {
  var theme = _ref5.theme,
    property = _ref5.property,
    state = _ref5.state;
  return (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    position: fixed;\n    height: 100%;\n    z-index: 999;\n    top: ", ";\n    bottom: 0;\n    ", "\n    ", "\n  "])), theme.headerHeight, property && (state === 'hidden' && ['left', 'start'].includes(property) ? "\n        & + .content {\n          margin-left: 0;\n        }\n      " : state === 'hidden' && ['right', 'end'].includes(property) ? "\n        & + .content {\n          margin-right: 0;\n        }\n      " : ''), property === 'right' ? 'right: 0;' : property === 'left' ? 'left: 0;' : property === 'start' ? theme.dir == 'rtl' ? 'right: 0;' : 'left: 0;' : property === 'end' ? theme.dir == 'rtl' ? 'left: 0;' : 'right: 0;' : '');
});
var SidebarStyle = _styledComponents["default"].aside(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref6) {
  var theme = _ref6.theme,
    property = _ref6.property,
    state = _ref6.state,
    containerFixed = _ref6.containerFixed,
    fixed = _ref6.fixed;
  return (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    background-color: ", ";\n    box-shadow: ", ";\n    color: ", ";\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    width: ", ";\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n    z-index: auto;\n    transition: width 0.3s cubic-bezier(0.4, 0, 0.6, 1) 0ms;\n\n    order: ", ";\n\n    ", "\n    .main-container {\n      height: ", ";\n      transform: translate3d(0, 0, 0);\n      display: flex;\n      flex-direction: column;\n      transition: width 0.3s cubic-bezier(0.4, 0, 0.6, 1) 0ms;\n      ", "\n      ", "\n    }\n\n    .scrollable {\n      flex: 1;\n      position: relative;\n      -webkit-transform: translate3d(0, 0, 0);\n      ", "\n      ", "\n      ", "\n    }\n\n    ", "\n\n    ", "\n\n\n  header,\n  footer {\n      display: block;\n      ", "\n    }\n\n    header {\n      height: ", ";\n    }\n\n    footer {\n      margin-top: auto;\n      height: ", ";\n    }\n\n    ", " {\n      margin: 0 -", " -", ";\n    }\n  "])), theme.sidebarBackgroundColor, theme.sidebarShadow, theme.sidebarTextColor, theme.sidebarTextFontFamily, theme.sidebarTextFontSize, theme.sidebarTextFontWeight, theme.sidebarTextLineHeight, theme.sidebarWidth, property === 'right' ? theme.dir == 'rtl' ? '0' : '4' : property === 'left' ? theme.dir == 'rtl' ? '4' : '0' : property === 'end' ? '4' : '0', state === 'hidden' ? 'width: 0;padding: 0;' : state === 'compacted' ? "width: ".concat(theme.sidebarWidthCompact, ";") : "width: ".concat(theme.sidebarWidth, ";"), theme.sidebarHeight, state === 'hidden' ? 'width: 0;padding: 0;' : state === 'compacted' ? "width: ".concat(theme.sidebarWidthCompact, ";") : "width: ".concat(theme.sidebarWidth, ";"), containerFixed && 'position: fixed;', state === 'hidden' ? 'width: 0;padding: 0;overflow: hidden;' : "overflow-y: auto;overflow-x: hidden;padding: ".concat(theme.sidebarPadding, ";"), (0, _breakpoints.breakpointDown)('sm')(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      overflow-y: scroll;\n      -webkit-overflow-scrolling: touch;\n      "]))), (0, _utils.scrollbars)(theme.sidebarScrollbarColor, theme.sidebarScrollbarBackgroundColor, theme.sidebarScrollbarWidth), fixed && fixedStyle, state === 'compacted' && compacted, state === 'hidden' ? 'width: 0;padding: 0;overflow: hidden;' : "padding: ".concat(theme.sidebarPadding, ";"), theme.sidebarHeaderHeight, theme.sidebarFooterHeight, _style.MenuStyle, theme.sidebarPadding, theme.sidebarPadding);
});
var _default = SidebarStyle;
exports["default"] = _default;