/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import Badge from '../Badge';
import UserStyle from './style';
var User = function User(props) {
  var getInitials = function getInitials() {
    if (props.name) {
      var names = props.name.split(' ');
      return names.map(function (n) {
        return n.charAt(0);
      }).splice(0, 2).join('').toUpperCase();
    }
    return '';
  };
  return /*#__PURE__*/React.createElement(UserStyle, props, /*#__PURE__*/React.createElement("div", {
    className: "user-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: 'user-picture ' + (props.image ? 'image' : 'initials')
  }, !props.image && props.showInitials && getInitials(), props.badge && /*#__PURE__*/React.createElement(Badge, {
    status: props.badge.status,
    position: props.badge.position
  }, props.badge.title)), !props.onlyPicture && /*#__PURE__*/React.createElement("div", {
    className: "info-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "user-name"
  }, props.name), /*#__PURE__*/React.createElement("div", {
    className: "user-title"
  }, props.title))));
};
User.defaultProps = {
  size: 'Medium',
  showInitials: true
};
export default User;