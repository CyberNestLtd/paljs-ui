"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _utils = require("../utils");
var _templateObject, _templateObject2;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Badge = _styledComponents["default"].span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  ", "\n"])), function (_ref) {
  var theme = _ref.theme,
    status = _ref.status;
  return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    position: absolute;\n    border-radius: ", ";\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    padding: ", ";\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: baseline;\n    color: ", ";\n    background-color: ", ";\n  "])), theme.badgeBorderRadius, theme.badgeTextFontFamily, theme.badgeTextFontSize, theme.badgeTextFontWeight, theme.badgeTextLineHeight, theme.badgePadding, theme["badge".concat(status, "TextColor")], theme["badge".concat(status, "BackgroundColor")]);
}, function (_ref2) {
  var position = _ref2.position,
    theme = _ref2.theme;
  var placement = (0, _utils.getPhysicalPosition)(theme.dir, position);
  switch (placement) {
    case 'topRight':
      return 'top: 0;right: 0;';
    case 'topLeft':
      return 'top: 0;left: 0;';
    case 'bottomRight':
      return 'bottom: 0;right: 0;';
    case 'bottomLeft':
      return 'bottom: 0;left: 0;';
  }
});
Badge.defaultProps = {
  position: 'topEnd',
  status: 'Primary'
};
var _default = Badge;
exports["default"] = _default;