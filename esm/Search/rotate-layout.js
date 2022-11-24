var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { css } from 'styled-components';
var rotateLayout = css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: absolute;\n  display: block;\n  width: 100vw;\n  height: 100vh;\n  pointer-events: none;\n  opacity: 0;\n  transition-property: opacity;\n  transition-delay: 0.4s;\n\n  .search {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    z-index: 1050;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 50vh;\n    pointer-events: none;\n    opacity: 0;\n    transition: opacity 0.5s;\n    transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);\n\n    button {\n      position: absolute;\n      top: 3rem;\n      font-size: 2.5rem;\n      opacity: 0;\n      transform: scale3d(0.8, 0.8, 1);\n      transition: opacity 0.5s, transform 0.5s;\n      transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);\n      ", ": 3rem;\n    }\n\n    .form {\n      margin: 5rem 0;\n      opacity: 0;\n      transform: scale3d(0.7, 0.7, 1);\n      transition: opacity 0.5s, transform 0.5s;\n      transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);\n    }\n\n    input {\n      font-size: 7vw;\n      width: 75%;\n    }\n  }\n\n  &.show {\n    opacity: 1;\n    transition-delay: 0s;\n\n    .search {\n      pointer-events: auto;\n      opacity: 1;\n\n      button {\n        opacity: 1;\n        transform: scale3d(1, 1, 1);\n      }\n\n      .form {\n        opacity: 1;\n        transform: scale3d(1, 1, 1);\n      }\n    }\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.dir === 'rtl' ? 'left' : 'right';
});
export default rotateLayout;