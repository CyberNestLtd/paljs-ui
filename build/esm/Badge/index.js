var _templateObject, _templateObject2;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from 'styled-components';
import { getPhysicalPosition } from '../utils';
var Badge = styled.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  ", "\n"])), function (_ref) {
  var theme = _ref.theme,
    status = _ref.status;
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    position: absolute;\n    border-radius: ", ";\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    padding: ", ";\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: baseline;\n    color: ", ";\n    background-color: ", ";\n  "])), theme.badgeBorderRadius, theme.badgeTextFontFamily, theme.badgeTextFontSize, theme.badgeTextFontWeight, theme.badgeTextLineHeight, theme.badgePadding, theme["badge".concat(status, "TextColor")], theme["badge".concat(status, "BackgroundColor")]);
}, function (_ref2) {
  var position = _ref2.position,
    theme = _ref2.theme;
  var placement = getPhysicalPosition(theme.dir, position);
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
export default Badge;