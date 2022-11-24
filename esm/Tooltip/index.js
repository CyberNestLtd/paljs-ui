var _span;
/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import TooltipStyle from './style';
import { ItemIcon } from '../Icon';
import Overlay from '../PopoverLay';
var Tooltip = function Tooltip(props) {
  var arrowSize = 6;
  var arrowRound = Math.round(-arrowSize - arrowSize / 2.5);
  return /*#__PURE__*/React.createElement(Overlay, {
    target: props.children,
    placement: props.placement,
    trigger: props.trigger,
    style: props.style,
    className: props.className,
    eventListener: props.eventListener,
    transformSize: 5,
    arrowRound: arrowRound,
    arrowSize: arrowSize.toString() + 'px'
  }, /*#__PURE__*/React.createElement(TooltipStyle, {
    status: props.status,
    arrowSize: arrowSize.toString() + 'px'
  }, _span || (_span = /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  })), /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, props.icon && /*#__PURE__*/React.createElement(ItemIcon, {
    className: "icon",
    icon: props.icon
  }), props.content && /*#__PURE__*/React.createElement("span", null, props.content))));
};
export default Tooltip;