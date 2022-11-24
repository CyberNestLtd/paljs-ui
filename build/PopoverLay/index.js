"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.OverLayContext = void 0;
var _reactDom = _interopRequireDefault(require("react-dom"));
var _react = _interopRequireDefault(require("react"));
var _utils = require("../utils");
var _style = require("./style");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var initialContext = {
  positionHandle: function positionHandle() {},
  hide: function hide() {}
};
var OverLayContext = /*#__PURE__*/_react["default"].createContext(initialContext);
exports.OverLayContext = OverLayContext;
var Overlay = function Overlay(props) {
  var overlayRef = _react["default"].useRef(null);
  var targetRef = _react["default"].useRef(null);
  var _usePopoverPosition = (0, _utils.usePopoverPosition)(props, targetRef, overlayRef),
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
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, show && /*#__PURE__*/_reactDom["default"].createPortal( /*#__PURE__*/_react["default"].createElement(_style.OverlayStyle, {
    position: !!position,
    placement: placement,
    size: transformSize,
    arrowRound: props.arrowRound,
    arrowSize: props.arrowSize
  }, /*#__PURE__*/_react["default"].createElement(OverLayContext.Provider, {
    value: {
      positionHandle: positionHandle,
      hide: function hide() {
        return setShow(false);
      }
    }
  }, /*#__PURE__*/_react["default"].createElement("div", _extends({
    className: "overlay-pane",
    style: position && {
      top: position.top,
      left: position.left
    },
    ref: overlayRef,
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, overlayMouse), props.children))), document.getElementById('overlay-container')), /*#__PURE__*/_react["default"].createElement("div", _extends({
    style: props.style,
    className: props.className,
    ref: targetRef
  }, targetMouse), props.target));
};
var _default = Overlay;
exports["default"] = _default;