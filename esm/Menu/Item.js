var _Icon, _Icon2;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import { Icon, ItemIcon } from '../Icon';
import { ItemStyle } from './style';
var getExtras = function getExtras(item) {
  var _item$extras, _item$extras2;
  return {
    customAfter: (_item$extras = item.extras) === null || _item$extras === void 0 ? void 0 : _item$extras.filter(function (x) {
      return x.position === 'after';
    }).map(function (x) {
      return x.content;
    }),
    customBefore: (_item$extras2 = item.extras) === null || _item$extras2 === void 0 ? void 0 : _item$extras2.filter(function (x) {
      return x.position === 'before';
    }).map(function (x) {
      return x.content;
    })
  };
};
var LinkContent = function LinkContent(_ref) {
  var item = _ref.item;
  var _getExtras = getExtras(item),
    customAfter = _getExtras.customAfter,
    customBefore = _getExtras.customBefore;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ItemIcon, {
    icon: item.icon,
    className: "menu-icon"
  }), customBefore, /*#__PURE__*/React.createElement("span", {
    className: "menu-title"
  }, item.title), customAfter);
};
var Item = function Item(_ref2) {
  var item = _ref2.item,
    toggleSidebar = _ref2.toggleSidebar,
    toggleSubMenu = _ref2.toggleSubMenu,
    selectItem = _ref2.selectItem,
    id = _ref2.id,
    Link = _ref2.Link,
    nextJs = _ref2.nextJs,
    currentPath = _ref2.currentPath;
  React.useEffect(function () {
    var _item$link, _item$link2;
    var link = nextJs ? (_item$link = item.link) === null || _item$link === void 0 ? void 0 : _item$link.href : (_item$link2 = item.link) === null || _item$link2 === void 0 ? void 0 : _item$link2.to;
    if (link && (currentPath === link || item.hasDynamicPath && currentPath !== null && currentPath !== void 0 && currentPath.startsWith(link)) && !item.selected) selectItem(id);
  }, [currentPath]);
  var onClickHandler = function onClickHandler() {
    !item.selected && selectItem(id);
    toggleSidebar && toggleSidebar();
  };
  var handleToggleSubMenu = function handleToggleSubMenu() {
    toggleSubMenu(item);
  };
  var _getExtras2 = getExtras(item),
    customAfter = _getExtras2.customAfter,
    customBefore = _getExtras2.customBefore;
  return /*#__PURE__*/React.createElement(ItemStyle, {
    className: item.group ? 'menu-item menu-group' : 'menu-item'
  }, item.group ? /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(ItemIcon, {
    icon: item.icon,
    className: "menu-icon"
  }), customBefore, item.title, customAfter) : item.link && !item.children ? nextJs ? /*#__PURE__*/React.createElement(Link, item.link, /*#__PURE__*/React.createElement("a", {
    onClick: onClickHandler,
    className: item.selected ? 'active' : ''
  }, /*#__PURE__*/React.createElement(LinkContent, {
    item: item
  }))) : /*#__PURE__*/React.createElement(Link, _extends({}, item.link, {
    className: item.selected ? 'active' : '',
    onClick: onClickHandler
  }), /*#__PURE__*/React.createElement(LinkContent, {
    item: item
  })) : item.url && !item.children ? /*#__PURE__*/React.createElement("a", {
    href: item.url
  }, /*#__PURE__*/React.createElement(LinkContent, {
    item: item
  })) : item.children ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("a", {
    href: "#",
    title: item.title,
    onClick: function onClick(e) {
      e.preventDefault();
      handleToggleSubMenu();
    },
    className: item.selected ? 'active' : ''
  }, /*#__PURE__*/React.createElement(ItemIcon, {
    icon: item.icon,
    className: "menu-icon"
  }), customBefore, /*#__PURE__*/React.createElement("span", {
    className: "menu-title"
  }, item.title), customAfter, /*#__PURE__*/React.createElement("i", {
    className: "chevron"
  }, item.expanded ? _Icon || (_Icon = /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down-outline"
  })) : _Icon2 || (_Icon2 = /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left-outline"
  })))), /*#__PURE__*/React.createElement("ul", {
    className: item.expanded ? 'menu-items expanded' : 'menu-items collapsed'
  }, item.children.map(function (item2, index) {
    return !item.hidden && /*#__PURE__*/React.createElement(Item, {
      key: index,
      item: item2,
      id: id.concat([index]),
      Link: Link,
      nextJs: nextJs,
      currentPath: currentPath,
      selectItem: selectItem,
      toggleSidebar: toggleSidebar,
      toggleSubMenu: toggleSubMenu
    });
  }))) : '');
};
export default Item;