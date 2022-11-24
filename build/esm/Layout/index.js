var _div;
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
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
import { LayoutStyle, LayoutContainer, LayoutContent, LayoutColumns, LayoutColumn, HeaderStyle, FooterStyle } from './style';
import LayoutContext from './layout-context';
var LayoutHeader = function LayoutHeader(props) {
  var className = props.className ? props.className.split(' ') : [];
  props.fixed && className.push('fixed');
  return /*#__PURE__*/React.createElement(HeaderStyle, {
    className: className.join(' ')
  }, /*#__PURE__*/React.createElement("nav", null, props.children));
};
var LayoutFooter = function LayoutFooter(props) {
  return /*#__PURE__*/React.createElement(FooterStyle, props, /*#__PURE__*/React.createElement("nav", null, props.children));
};
var Layout = function Layout(props) {
  var _React$useState = React.useState(props.className ? _toConsumableArray(props.className.split(' ')) : []),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    className = _React$useState2[0],
    setClassName = _React$useState2[1];
  var scrollRef = React.useRef(null);
  var addClass = function addClass(cssClass) {
    var updatedClass = _toConsumableArray(className);
    updatedClass.push.apply(updatedClass, _toConsumableArray(cssClass));
    setClassName(updatedClass);
  };
  React.useEffect(function () {
    if ((props.withScroll || props.windowMode) && !className.includes('with-scroll')) {
      addClass(['with-scroll']);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'initial';
    }
  }, [props.withScroll]);
  var removeClass = function removeClass(cssClass) {
    var updatedClass = _toConsumableArray(className);
    var _iterator = _createForOfIteratorHelper(updatedClass.keys()),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var i = _step.value;
        if (cssClass.includes(updatedClass[i])) {
          updatedClass.splice(i, 1);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    setClassName(updatedClass);
  };
  var addEventListener = function addEventListener(event, listener) {
    var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'scrollArea';
    switch (target) {
      case 'Layout':
        document.getElementById('oah-layout').addEventListener(event, listener);
        break;
      default:
        if ((props.withScroll || props.windowMode) && scrollRef.current) {
          scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current.addEventListener(event, listener);
        } else {
          window.addEventListener(event, listener);
        }
        break;
    }
  };
  var removeEventListener = function removeEventListener(event, listener) {
    var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'scrollArea';
    switch (target) {
      case 'Layout':
        document.getElementById('oah-layout').removeEventListener(event, listener);
        break;
      default:
        if ((props.withScroll || props.windowMode) && scrollRef.current) {
          scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current.removeEventListener(event, listener);
        } else {
          window.removeEventListener(event, listener);
        }
        break;
    }
  };
  return /*#__PURE__*/React.createElement(LayoutStyle, {
    id: "oah-layout",
    className: className.join(' '),
    style: props.style,
    withScroll: props.withScroll,
    windowMode: props.windowMode,
    withSubHeader: props.withSubHeader
  }, /*#__PURE__*/React.createElement(LayoutContext.Provider, {
    value: {
      addClass: addClass,
      removeClass: removeClass,
      removeEventListener: removeEventListener,
      addEventListener: addEventListener,
      dir: props.dir,
      evaIcons: props.evaIcons
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: scrollRef,
    className: "scrollable-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "layout"
  }, props.children)), _div || (_div = /*#__PURE__*/React.createElement("div", {
    id: "overlay-container"
  }))));
};
Layout.defaultProps = {
  dir: 'ltr'
};
export { Layout, LayoutHeader, LayoutContent, LayoutFooter, LayoutContainer, LayoutColumns, LayoutColumn, LayoutStyle, LayoutContext };