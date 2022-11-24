"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OverlayStyle = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var overlayPane = function overlayPane(placement, size) {
  switch (placement) {
    case 'right':
      return "transform: translateX(".concat(size, "px);");
    case 'left':
      return "transform: translateX(-".concat(size, "px);");
    case 'top':
      return "transform: translateY(-".concat(size, "px);");
    case 'bottom':
      return "transform: translateY(".concat(size, "px);");
  }
};
var placementArrow = function placementArrow(placement, arrowSize, arrowRound) {
  switch (placement) {
    case 'right':
      return (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        .arrow {\n          left: ", "px;\n          top: calc(50% - ", " / 2);\n          transform: rotate(270deg);\n        }\n      "])), arrowRound, arrowSize);
    case 'left':
      return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        .arrow {\n          right: ", "px;\n          top: calc(50% - ", " / 2);\n          transform: rotate(90deg);\n        }\n      "])), arrowRound, arrowSize);
    case 'top':
      return (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        .arrow {\n          bottom: calc(-", " + 1px);\n          left: calc(50% - ", ");\n          transform: rotate(180deg);\n        }\n      "])), arrowSize, arrowSize);
    case 'bottom':
      return (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        .arrow {\n          top: calc(-", " + 2px);\n          left: calc(50% - ", ");\n        }\n      "])), arrowSize, arrowSize);
  }
};
var OverlayStyle = _styledComponents["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref) {
  var placement = _ref.placement,
    position = _ref.position,
    size = _ref.size,
    arrowSize = _ref.arrowSize,
    arrowRound = _ref.arrowRound;
  return (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    position: absolute;\n    box-sizing: border-box;\n    z-index: 1000;\n    display: flex;\n    width: 100%;\n    height: 100%;\n    min-width: 1px;\n    min-height: 1px;\n    top: 0;\n    left: 0;\n    .overlay-pane {\n      position: absolute;\n      pointer-events: auto;\n      display: flex;\n      max-width: 100%;\n      max-height: 100%;\n      box-sizing: border-box;\n      ", "\n      ", "\n      ", "\n\n      .icon + span {\n        margin-", ": 0.5rem;\n      }\n      ", "\n    }\n  "])), overlayPane(placement, size), !position && 'visibility: hidden;', arrowSize && arrowRound && placementArrow(placement, arrowSize, arrowRound), placement === 'right' ? 'right' : 'left', placement === 'right' && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n          .content {\n            flex-direction: row-reverse;\n          }\n        "]))));
});
exports.OverlayStyle = OverlayStyle;