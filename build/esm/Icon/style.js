var _templateObject, _templateObject2;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import styled, { css } from 'styled-components';
export default styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref) {
  var theme = _ref.theme,
    status = _ref.status;
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    font-size: ", ";\n    line-height: ", ";\n    width: ", ";\n    height: ", ";\n    display: inline-block;\n    svg {\n      vertical-align: ", ";\n    }\n    ", "\n  "])), theme.iconFontSize, theme.iconLineHeight, theme.iconWidth, theme.iconHeight, theme.iconSvgVerticalAlign, status && "color: ".concat(theme["icon".concat(status, "Color")], ";"));
});