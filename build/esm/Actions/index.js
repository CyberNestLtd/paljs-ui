function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import { ActionsStyle, ActionStyle } from './style';
import Badge from '../Badge';
import { ItemIcon } from '../Icon';
var Actions = function Actions(_ref) {
  var actions = _ref.actions,
    className = _ref.className,
    style = _ref.style,
    fullWidth = _ref.fullWidth,
    size = _ref.size,
    inverse = _ref.inverse,
    Link = _ref.Link,
    nextJs = _ref.nextJs;
  return /*#__PURE__*/React.createElement(ActionsStyle, {
    className: className,
    style: style
  }, actions.map(function (action, index) {
    var icon = /*#__PURE__*/React.createElement(ItemIcon, {
      icon: action.icon,
      className: "control-icon"
    });
    return /*#__PURE__*/React.createElement(ActionStyle, {
      key: index,
      fullWidth: fullWidth,
      size: size,
      inverse: inverse,
      disabled: !!action.disabled
    }, action.icon ? action.link && Link ? nextJs ? /*#__PURE__*/React.createElement(Link, action.link, /*#__PURE__*/React.createElement("a", {
      className: "icon-container"
    }, icon)) : /*#__PURE__*/React.createElement(Link, _extends({}, action.link, {
      className: "icon-container"
    }), icon) : /*#__PURE__*/React.createElement("a", _extends({}, action.url, {
      className: "icon-container"
    }), icon) : action.content, action.badge && /*#__PURE__*/React.createElement(Badge, {
      status: action.badge.status,
      position: action.badge.position
    }, action.badge.title));
  }));
};
Actions.defaultProps = {
  size: 'Small'
};
export { Actions };