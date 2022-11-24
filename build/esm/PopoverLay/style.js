var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import styled, { css } from 'styled-components';
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
      return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        .arrow {\n          left: ", "px;\n          top: calc(50% - ", " / 2);\n          transform: rotate(270deg);\n        }\n      "])), arrowRound, arrowSize);
    case 'left':
      return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        .arrow {\n          right: ", "px;\n          top: calc(50% - ", " / 2);\n          transform: rotate(90deg);\n        }\n      "])), arrowRound, arrowSize);
    case 'top':
      return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        .arrow {\n          bottom: calc(-", " + 1px);\n          left: calc(50% - ", ");\n          transform: rotate(180deg);\n        }\n      "])), arrowSize, arrowSize);
    case 'bottom':
      return css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        .arrow {\n          top: calc(-", " + 2px);\n          left: calc(50% - ", ");\n        }\n      "])), arrowSize, arrowSize);
  }
};
export var OverlayStyle = styled.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref) {
  var placement = _ref.placement,
    position = _ref.position,
    size = _ref.size,
    arrowSize = _ref.arrowSize,
    arrowRound = _ref.arrowRound;
  return css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    position: absolute;\n    box-sizing: border-box;\n    z-index: 1000;\n    display: flex;\n    width: 100%;\n    height: 100%;\n    min-width: 1px;\n    min-height: 1px;\n    top: 0;\n    left: 0;\n    .overlay-pane {\n      position: absolute;\n      pointer-events: auto;\n      display: flex;\n      max-width: 100%;\n      max-height: 100%;\n      box-sizing: border-box;\n      ", "\n      ", "\n      ", "\n\n      .icon + span {\n        margin-", ": 0.5rem;\n      }\n      ", "\n    }\n  "])), overlayPane(placement, size), !position && 'visibility: hidden;', arrowSize && arrowRound && placementArrow(placement, arrowSize, arrowRound), placement === 'right' ? 'right' : 'left', placement === 'right' && css(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n          .content {\n            flex-direction: row-reverse;\n          }\n        "]))));
});