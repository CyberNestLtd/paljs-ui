var _span;
/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import ContextMenuStyle from './style';
import { Menu } from '../Menu';
import Overlay, { OverLayContext } from '../PopoverLay';
var Component = function Component(props) {
  var _React$useContext = React.useContext(OverLayContext),
    hide = _React$useContext.hide;
  return /*#__PURE__*/React.createElement(ContextMenuStyle, null, _span || (_span = /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  })), /*#__PURE__*/React.createElement(Menu, {
    className: "context-menu",
    nextJs: props.nextJs,
    currentPath: props.currentPath,
    Link: props.Link,
    items: props.items,
    toggleSidebar: hide
  }));
};
var ContextMenu = function ContextMenu(props) {
  return /*#__PURE__*/React.createElement(Overlay, {
    target: props.children,
    placement: props.placement,
    style: props.style,
    className: props.className,
    eventListener: props.eventListener,
    transformSize: 15,
    contextMenu: true
  }, /*#__PURE__*/React.createElement(Component, props));
};
export default ContextMenu;