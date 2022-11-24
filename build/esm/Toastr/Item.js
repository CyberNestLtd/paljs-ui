function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import ReactDOM from 'react-dom';
import React from 'react';
import layoutContext from '../Layout/layout-context';
import { ToastrStyle } from './style';
import { isRightPosition } from '../utils';
import { ItemIcon } from '../Icon';
var Item = function Item(props) {
  var _layout$dir;
  var _React$useState = React.useState(true),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    show = _React$useState2[0],
    setShow = _React$useState2[1];
  var _React$useState3 = React.useState('animation'),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    animation = _React$useState4[0],
    setAnimation = _React$useState4[1];
  var layout = React.useContext(layoutContext);
  var destroyItem = function destroyItem() {
    setAnimation('animation');
    setTimeout(function () {
      setShow(false);
    }, 100);
  };
  var onClick = function onClick() {
    if (props.destroyByClick) {
      destroyItem();
    }
  };
  React.useEffect(function () {
    if (props !== null && props !== void 0 && props.duration && props.duration > 0) {
      setTimeout(function () {
        destroyItem();
      }, props.duration);
    }
    if (animation === 'animation') {
      setTimeout(function () {
        setAnimation('');
      }, 10);
    }
  }, []);
  return show ? /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement(ToastrStyle, _extends({
    isRight: isRightPosition((_layout$dir = layout.dir) !== null && _layout$dir !== void 0 ? _layout$dir : 'ltr', props.position),
    className: animation,
    onClick: onClick
  }, props), props.icon && props.hasIcon && /*#__PURE__*/React.createElement(ItemIcon, {
    icon: props.icon,
    className: "icon"
  }), /*#__PURE__*/React.createElement("div", {
    className: "content-container"
  }, props.title && /*#__PURE__*/React.createElement("span", {
    className: "title"
  }, props.title), /*#__PURE__*/React.createElement("div", {
    className: "message"
  }, props.message))), document.getElementById('toastr' + props.position)) : /*#__PURE__*/React.createElement(React.Fragment, null);
};
export default Item;