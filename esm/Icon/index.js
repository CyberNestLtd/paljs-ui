function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import { defaultIcons } from './defaultIcons';
import IconStyle from './style';
import { LayoutContext } from '../Layout';
export var Icon = function Icon(props) {
  return /*#__PURE__*/React.createElement(IconStyle, {
    dangerouslySetInnerHTML: {
      __html: defaultIcons[props.name]
    },
    status: props.status,
    className: props.className
  });
};
export var EvaIcon = function EvaIcon(props) {
  var _React$useContext = React.useContext(LayoutContext),
    evaIcons = _React$useContext.evaIcons;
  var svgIcon = '';
  if (evaIcons && evaIcons[props.name]) {
    svgIcon = evaIcons[props.name](props.options);
  }
  return /*#__PURE__*/React.createElement(IconStyle, {
    dangerouslySetInnerHTML: {
      __html: svgIcon
    },
    status: props.status,
    className: props.className
  });
};
export var ItemIcon = function ItemIcon(_ref) {
  var icon = _ref.icon,
    className = _ref.className;
  var _React$useContext2 = React.useContext(LayoutContext),
    evaIcons = _React$useContext2.evaIcons;
  if (typeof icon === 'string') {
    if (icon in defaultIcons) {
      return /*#__PURE__*/React.createElement(Icon, {
        name: icon,
        className: className
      });
    } else if (evaIcons && icon in evaIcons) {
      return /*#__PURE__*/React.createElement(EvaIcon, {
        name: icon,
        className: className
      });
    } else {
      return /*#__PURE__*/React.createElement("i", {
        className: className + ' ' + icon
      });
    }
  } else if (_typeof(icon) === 'object' && evaIcons && evaIcons[icon.name]) {
    icon.className += ' ' + className;
    return /*#__PURE__*/React.createElement(EvaIcon, icon);
  } else {
    return /*#__PURE__*/React.createElement(React.Fragment, null);
  }
};