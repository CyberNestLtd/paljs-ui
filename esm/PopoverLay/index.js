function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* eslint-disable @typescript-eslint/no-empty-function */
/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import ReactDOM from 'react-dom';
import React from 'react';
import { usePopoverPosition } from '../utils';
import { OverlayStyle } from './style';
var initialContext = {
  positionHandle: function positionHandle() {},
  hide: function hide() {}
};
export var OverLayContext = /*#__PURE__*/React.createContext(initialContext);
var Overlay = function Overlay(props) {
  var overlayRef = React.useRef(null);
  var targetRef = React.useRef(null);
  var _usePopoverPosition = usePopoverPosition(props, targetRef, overlayRef),
    position = _usePopoverPosition.position,
    placement = _usePopoverPosition.placement,
    show = _usePopoverPosition.show,
    setShow = _usePopoverPosition.setShow,
    positionHandle = _usePopoverPosition.positionHandle;
  var timeOut;
  var _onMouseLeave = function onMouseLeave() {
    timeOut = setTimeout(function () {
      setShow(false);
    }, 500);
  };
  var _onMouseEnter = function onMouseEnter() {
    clearTimeout(timeOut);
  };
  var trigger = props.trigger,
    transformSize = props.transformSize;
  var overlayMouse = props.contextMenu ? {} : {
    onMouseEnter: function onMouseEnter() {
      return trigger === 'hover' && _onMouseEnter();
    },
    onMouseLeave: function onMouseLeave() {
      return trigger === 'hover' && _onMouseLeave();
    }
  };
  var targetMouse = props.contextMenu ? {
    onClick: function onClick(e) {
      e.stopPropagation();
      setShow(!show);
    }
  } : {
    onFocus: function onFocus() {
      return trigger === 'focus' && setShow(true);
    },
    onBlur: function onBlur() {
      return trigger === 'focus' && setShow(false);
    },
    onClick: function onClick(e) {
      e.stopPropagation();
      trigger === 'click' && setShow(!show);
    },
    onMouseEnter: function onMouseEnter() {
      return trigger === 'hint' ? setShow(true) : trigger === 'hover' && !show ? setShow(true) : trigger === 'hover' && _onMouseEnter();
    },
    onMouseLeave: function onMouseLeave() {
      trigger === 'hint' ? setShow(false) : trigger === 'hover' && _onMouseLeave();
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, show && /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement(OverlayStyle, {
    position: !!position,
    placement: placement,
    size: transformSize,
    arrowRound: props.arrowRound,
    arrowSize: props.arrowSize
  }, /*#__PURE__*/React.createElement(OverLayContext.Provider, {
    value: {
      positionHandle: positionHandle,
      hide: function hide() {
        return setShow(false);
      }
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    className: "overlay-pane",
    style: position && {
      top: position.top,
      left: position.left
    },
    ref: overlayRef,
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, overlayMouse), props.children))), document.getElementById('overlay-container')), /*#__PURE__*/React.createElement("div", _extends({
    style: props.style,
    className: props.className,
    ref: targetRef
  }, targetMouse), props.target));
};
export default Overlay;