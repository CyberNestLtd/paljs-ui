var _templateObject, _templateObject2;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import styled, { css } from 'styled-components';
import { MenuStyle } from '../Menu/style';
var ContextMenuStyle = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref) {
  var theme = _ref.theme;
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    background-color: ", ";\n    border-color: ", ";\n    border-style: ", ";\n    border-width: ", ";\n    border-radius: ", ";\n    box-shadow: ", ";\n    min-width: ", ";\n    max-width: ", ";\n\n    ", " {\n      border-radius: ", ";\n      overflow: hidden;\n      text-align: center;\n    }\n  "])), theme.contextMenuBackgroundColor, theme.contextMenuBorderColor, theme.contextMenuBorderStyle, theme.contextMenuBorderWidth, theme.contextMenuBorderRadius, theme.contextMenuShadow, theme.contextMenuMinWidth, theme.contextMenuMaxWidth, MenuStyle, theme.contextMenuBorderRadius);
});
export default ContextMenuStyle;