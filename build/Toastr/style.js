"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToastrStyle = exports.ToastrContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var ToastrStyle = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref) {
  var theme = _ref.theme,
    status = _ref.status,
    destroyByClick = _ref.destroyByClick,
    hasIcon = _ref.hasIcon,
    isRight = _ref.isRight;
  return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    border-style: ", ";\n    border-radius: ", ";\n    border-width: ", ";\n    box-shadow: ", ";\n    padding: ", ";\n    display: flex;\n    align-items: center;\n    width: 25rem;\n    margin: 0.5rem;\n    transition: all 150ms ease-out;\n    &&.animation{\n      transform: translateX(", "110%);\n      height: 0;\n      margin: 0;\n    }\n\n    .content-container {\n      ", "\n      .title {\n        font-weight: ", ";\n        font-family: ", ";\n        font-size: ", ";\n        line-height: ", ";\n        margin-right: 0.25rem;\n      }\n      .message {\n        font-family: ", ";\n        font-weight: ", ";\n        line-height: ", ";\n        font-size: ", ";\n      }\n    }\n    ", "\n    .icon {\n      margin-", ": 1.25rem;\n      border-radius: ", ";\n      min-width: 2.5rem;\n      min-height: 2.5rem;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      font-size: 1.5rem;\n    }\n    svg {\n      width: 2.5rem;\n      height: 2.5rem;\n    }\n\n    ", "\n  "])), theme.toastrBorderStyle, theme.toastrBorderRadius, theme.toastrBorderWidth, theme.toastrShadow, theme.toastrPadding, !isRight && '-', !hasIcon && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n          display: flex;\n          flex-direction: row;\n        "]))), theme.toastrTitleTextFontWeight, theme.toastrTitleTextFontFamily, theme.toastrTitleTextFontSize, theme.toastrTitleTextLineHeight, theme.toastrTextFontFamily, theme.toastrTextFontWeight, theme.toastrTextLineHeight, theme.toastrTextFontSize, destroyByClick && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        cursor: pointer;\n\n        &:hover {\n          opacity: 1;\n        }\n      "]))), theme.dir === 'rtl' ? 'left' : 'right', theme.toastrBorderRadius, status && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        background: ", ";\n        border-color: ", ";\n        color: ", ";\n\n        .title {\n          color: ", ";\n        }\n        ", "\n\n        .icon {\n          background: ", ";\n          color: ", ";\n        }\n      "])), theme["toastr".concat(status, "BackgroundColor")], theme["toastr".concat(status, "BorderColor")], theme["toastr".concat(status, "TextColor")], theme["toastr".concat(status, "TextColor")], destroyByClick && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n          cursor: pointer;\n\n          &:hover {\n            background: ", ";\n            border-color: ", ";\n          }\n        "])), theme["toastrDestroyable".concat(status, "HoverBackgroundColor")], theme["toastrDestroyable".concat(status, "HoverBorderColor")]), theme["toastrIcon".concat(status, "BackgroundColor")], theme["toastrIcon".concat(status, "Color")]));
});
exports.ToastrStyle = ToastrStyle;
var ToastrContainer = _styledComponents["default"].div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  position: absolute;\n  z-index: 1000;\n  ", "\n  .overlay-pane {\n    pointer-events: auto;\n    position: static;\n    box-sizing: border-box;\n    z-index: 1000;\n    display: flex;\n    max-width: 100%;\n    max-height: 100%;\n    flex-direction: ", ";\n  }\n"])), function (_ref2) {
  var position = _ref2.position;
  switch (position) {
    case 'topStart':
      return 'justify-content: flex-start;align-items: flex-start;';
    case 'topEnd':
      return 'justify-content: flex-end;align-items: flex-start;';
    case 'bottomStart':
      return 'justify-content: flex-start;align-items: flex-end;';
    case 'bottomEnd':
      return 'justify-content: flex-end;align-items: flex-end;';
  }
}, function (_ref3) {
  var isTop = _ref3.isTop;
  return isTop ? 'column-reverse' : 'column';
});
exports.ToastrContainer = ToastrContainer;