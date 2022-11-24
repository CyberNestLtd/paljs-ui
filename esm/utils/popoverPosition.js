function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import layoutContext from '../Layout/layout-context';
import { getPhysicalPosition } from './positionHelper';
var getMaxPlacement = function getMaxPlacement(target, overlay) {
  var positions = {
    top: target.top - overlay.height,
    bottom: window.innerHeight - target.bottom - overlay.height,
    left: target.left - overlay.width,
    right: window.innerWidth - target.right - overlay.width
  };
  var arr = Object.values(positions);
  var max = Math.max.apply(Math, arr);
  return Object.keys(positions).find(function (key) {
    return positions[key] === max;
  });
};
var getPositionOfPlacement = function getPositionOfPlacement(placement, target, overlay) {
  var topBottom = {
    top: target.top + target.height / 2 - overlay.height / 2,
    bottom: window.innerHeight - (target.top + target.height / 2 + overlay.height / 2)
  };
  var leftRight = {
    left: target.left + (target.width / 2 - overlay.width / 2),
    right: window.innerWidth - (target.left + target.width / 2 + overlay.width / 2)
  };
  switch (placement) {
    case 'left':
      return _objectSpread({
        left: target.left - overlay.width
      }, topBottom);
    case 'right':
      return _objectSpread({
        left: target.right
      }, topBottom);
    case 'top':
      return _objectSpread({
        top: target.top - overlay.height
      }, leftRight);
    case 'bottom':
      return _objectSpread({
        top: target.bottom
      }, leftRight);
  }
};
var getAdjustmentPlacement = function getAdjustmentPlacement(placement, targetRef, overlayRef) {
  var _targetRef$current, _overlayRef$current;
  var key = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  var target = (_targetRef$current = targetRef.current) === null || _targetRef$current === void 0 ? void 0 : _targetRef$current.getBoundingClientRect();
  var overlay = (_overlayRef$current = overlayRef.current) === null || _overlayRef$current === void 0 ? void 0 : _overlayRef$current.getBoundingClientRect();
  if (target && overlay) {
    var _position$bottom, _position$right;
    if (key > 4) {
      var maxPlacement = getMaxPlacement(target, overlay);
      var _position = getPositionOfPlacement(maxPlacement, target, overlay);
      return {
        placement: maxPlacement,
        position: _position
      };
    }
    var position = getPositionOfPlacement(placement, target, overlay);
    var topBottom = position.top < 0 || ((_position$bottom = position.bottom) !== null && _position$bottom !== void 0 ? _position$bottom : 0) < 0;
    var leftRight = position.left < 0 || ((_position$right = position.right) !== null && _position$right !== void 0 ? _position$right : 0) < 0;
    switch (placement) {
      case 'left':
        if (position.left - 15 < 0 || topBottom) {
          return getAdjustmentPlacement('top', targetRef, overlayRef, key + 1);
        }
        break;
      case 'top':
        if (position.top - 15 < 0 || leftRight) {
          return getAdjustmentPlacement('right', targetRef, overlayRef, key + 1);
        }
        break;
      case 'right':
        if (window.innerWidth - position.left - 15 < overlay.width || topBottom) {
          return getAdjustmentPlacement('bottom', targetRef, overlayRef, key + 1);
        }
        break;
      case 'bottom':
        if (window.innerHeight - position.top - 15 < overlay.height || leftRight) {
          return getAdjustmentPlacement('left', targetRef, overlayRef, key + 1);
        }
        break;
    }
    return {
      placement: placement,
      position: position
    };
  }
};
export function usePopoverPosition(props, targetRef, overlayRef) {
  var _layout$dir;
  var layout = React.useContext(layoutContext);
  var _React$useState = React.useState(),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    position = _React$useState2[0],
    setPosition = _React$useState2[1];
  var _React$useState3 = React.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    show = _React$useState4[0],
    setShow = _React$useState4[1];
  var physicalPosition = getPhysicalPosition((_layout$dir = layout.dir) !== null && _layout$dir !== void 0 ? _layout$dir : 'ltr', props.placement);
  var _React$useState5 = React.useState(physicalPosition),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    placement = _React$useState6[0],
    setPlacement = _React$useState6[1];
  var onClickHandle = function onClickHandle() {
    setShow(false);
  };
  var positionHandle = function positionHandle() {
    var data = getAdjustmentPlacement(physicalPosition, targetRef, overlayRef);
    if (data) {
      setPosition(data.position);
      setPlacement(data.placement);
    }
  };
  React.useEffect(function () {
    if (show) {
      positionHandle();
      window.addEventListener('resize', positionHandle);
      window.addEventListener('orientationchange', positionHandle);
      layout.addEventListener('scroll', positionHandle);
      window.addEventListener('click', onClickHandle);
      if (props.eventListener) {
        var _document$querySelect;
        (_document$querySelect = document.querySelector(props.eventListener)) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.addEventListener('scroll', positionHandle);
      }
      return function () {
        window.removeEventListener('click', onClickHandle);
        window.removeEventListener('resize', positionHandle);
        window.removeEventListener('orientationchange', positionHandle);
        layout.removeEventListener('scroll', positionHandle);
        if (props.eventListener) {
          var _document$querySelect2;
          (_document$querySelect2 = document.querySelector(props.eventListener)) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.removeEventListener('scroll', positionHandle);
        }
      };
    }
  }, [show, overlayRef.current]);
  return {
    position: position,
    placement: placement,
    show: show,
    setShow: setShow,
    positionHandle: positionHandle
  };
}