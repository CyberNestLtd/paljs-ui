var _templateObject, _templateObject2, _templateObject3, _Icon, _Icon2;
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from 'styled-components';
import React from 'react';
import { Icon } from '../Icon';
var FlipCardStyled = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref) {
  var theme = _ref.theme,
    flipped = _ref.flipped,
    button = _ref.button;
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    display: block;\n    position: relative;\n    perspective: 1200px;\n    .flip-body {\n      display: flex;\n      transition: transform 0.5s;\n      transform-style: preserve-3d;\n      ", "\n      & > .front,\n      & > .back {\n        flex: 1;\n\n        .flip-button {\n          line-height: ", ";\n          margin-bottom: ", ";\n          padding: ", ";\n          cursor: pointer;\n          position: absolute;\n          ", ": 0;\n          ", ": 0;\n          opacity: 1;\n          transition: opacity 0s 0.15s;\n        }\n      }\n\n      & > .front {\n        margin-", ": -100%;\n        transition: opacity 0s 0.2s;\n        backface-visibility: visible;\n        ", "\n      }\n\n      & > .back {\n        backface-visibility: ", ";\n        transform: rotateY(180deg);\n      }\n    }\n  "])), flipped ? 'transform: rotateY(-180deg);' : '', theme.cardTextLineHeight, theme.cardMarginBottom, theme.cardPadding, theme.dir === 'rtl' ? 'left' : 'right', button === 'bottom' ? 'bottom' : 'top', theme.dir === 'rtl' ? 'left' : 'right', flipped && css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n            backface-visibility: hidden;\n            opacity: 0;\n            .flip-button {\n              opacity: 0;\n              z-index: -1;\n            }\n          "]))), flipped ? 'visible' : 'hidden');
});
var FlipCard = function FlipCard(props) {
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    flipped = _React$useState2[0],
    setFlipped = _React$useState2[1];
  var handleFlipped = function handleFlipped() {
    setFlipped(!flipped);
  };
  return /*#__PURE__*/React.createElement(FlipCardStyled, {
    className: props.className,
    style: props.style,
    flipped: flipped,
    button: props.button
  }, /*#__PURE__*/React.createElement("div", {
    className: "flip-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "front"
  }, props.children[0], /*#__PURE__*/React.createElement("i", {
    className: "flip-button",
    onClick: handleFlipped
  }, _Icon || (_Icon = /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right-outline"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "back"
  }, props.children[1], /*#__PURE__*/React.createElement("i", {
    className: "flip-button",
    onClick: handleFlipped
  }, _Icon2 || (_Icon2 = /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left-outline"
  }))))));
};
export default FlipCard;