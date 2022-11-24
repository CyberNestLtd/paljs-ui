var _Icon, _Icon2;
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import { SearchStyle, SearchFieldStyle } from './style';
import Overlay from '../Overlay';
import layoutContext from '../Layout/layout-context';
import { Icon } from '../Icon';
import { Button } from '../Button';
export var Search = function Search(props) {
  var _React$useState = React.useState(''),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    value = _React$useState2[0],
    setValue = _React$useState2[1];
  var _React$useState3 = React.useState(),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    show = _React$useState4[0],
    setShow = _React$useState4[1];
  var inputRef = React.useRef(null);
  var layout = React.useContext(layoutContext);
  React.useEffect(function () {
    if (show === 'show') {
      var _inputRef$current;
      (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();
    } else if (show === undefined) {
      layout.removeClass([props.type]);
    }
  }, [show]);
  var handleOpen = function handleOpen() {
    setShow('');
    layout.addClass([props.type, 'with-search']);
    setTimeout(function () {
      setShow('show');
    }, 50);
  };
  var handleClose = function handleClose() {
    layout.removeClass(['with-search']);
    setShow('');
    setTimeout(function () {
      setShow(undefined);
    }, 200);
  };
  var onChangeHandle = function onChangeHandle(e) {
    typeof props.onChange === 'function' && props.onChange(e.target.value);
    setValue(e.target.value);
  };
  return /*#__PURE__*/React.createElement(SearchStyle, {
    className: props.className
  }, /*#__PURE__*/React.createElement(Button, {
    appearance: "ghost",
    onClick: handleOpen
  }, _Icon || (_Icon = /*#__PURE__*/React.createElement(Icon, {
    name: "search-outline"
  }))), show !== undefined && /*#__PURE__*/React.createElement(Overlay, null, /*#__PURE__*/React.createElement(SearchFieldStyle, {
    className: props.type + ' ' + show
  }, /*#__PURE__*/React.createElement("div", {
    className: "search",
    onKeyUp: function onKeyUp(e) {
      e.preventDefault();
      e.key === 'Escape' && handleClose();
    }
  }, /*#__PURE__*/React.createElement(Button, {
    appearance: "ghost",
    onClick: handleClose
  }, _Icon2 || (_Icon2 = /*#__PURE__*/React.createElement(Icon, {
    name: "close-outline"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "form-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-content"
  }, /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    onKeyUp: function onKeyUp(e) {
      e.preventDefault();
      if (e.key === 'Enter') {
        handleClose();
        props.submit(value);
      }
    },
    onChange: onChangeHandle,
    placeholder: props.placeholder,
    className: "search-input",
    autoComplete: "off",
    tabIndex: -1,
    value: value
  })), /*#__PURE__*/React.createElement("span", {
    className: "info"
  }, props.hint)))))));
};