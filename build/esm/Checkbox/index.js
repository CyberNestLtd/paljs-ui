var _Icon, _Icon2;
/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import CheckboxStyle from './style';
import { Icon } from '../Icon';
var Checkbox = function Checkbox(props) {
  return /*#__PURE__*/React.createElement(CheckboxStyle, {
    disabled: props.disabled,
    checked: props.checked,
    status: props.status,
    className: props.className,
    style: props.style
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    className: "native-input visually-hidden",
    disabled: props.disabled,
    onBlur: props.onBlur,
    checked: props.checked,
    onChange: function onChange(e) {
      return props.onChange(e.target.checked);
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "custom-checkbox"
  }, props.checked && !props.indeterminate && (_Icon || (_Icon = /*#__PURE__*/React.createElement(Icon, {
    name: "checkmark-bold-outline"
  }))), props.indeterminate && (_Icon2 || (_Icon2 = /*#__PURE__*/React.createElement(Icon, {
    name: "minus-bold-outline"
  })))), /*#__PURE__*/React.createElement("span", {
    className: "text"
  }, props.children));
};
Checkbox.defaultProps = {
  status: 'Basic'
};
export { Checkbox };