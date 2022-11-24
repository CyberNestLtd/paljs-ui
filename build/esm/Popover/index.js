var _span;
/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import { ThemeContext } from 'styled-components';
import PopoverStyle from './style';
import Overlay from '../PopoverLay';
var Popover = function Popover(props) {
  var theme = React.useContext(ThemeContext);
  var arrowSize = parseInt(theme.popoverArrowSize);
  var arrowRound = Math.round(-arrowSize - arrowSize / 2);
  return /*#__PURE__*/React.createElement(Overlay, {
    target: props.children,
    placement: props.placement,
    trigger: props.trigger,
    style: props.style,
    className: props.className,
    eventListener: props.eventListener,
    transformSize: 15,
    arrowRound: arrowRound,
    arrowSize: theme.popoverArrowSize
  }, /*#__PURE__*/React.createElement(PopoverStyle, null, _span || (_span = /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  })), typeof props.overlay === 'string' ? /*#__PURE__*/React.createElement("div", {
    className: "primitive-overlay"
  }, props.overlay) : props.overlay));
};
export default Popover;