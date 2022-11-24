var _Icon, _Icon2;
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
import React from 'react';
import AccordionContext from './Context';
import { ItemStyle } from './style';
import { Icon } from '../Icon';
export var AccordionItem = function AccordionItem(_ref) {
  var title = _ref.title,
    uniqueKey = _ref.uniqueKey,
    children = _ref.children;
  var _React$useContext = React.useContext(AccordionContext),
    expanded = _React$useContext.expanded,
    disabled = _React$useContext.disabled,
    handleToggle = _React$useContext.handleToggle,
    keys = _React$useContext.keys,
    setKeys = _React$useContext.setKeys;
  React.useEffect(function () {
    setKeys([].concat(_toConsumableArray(keys), [uniqueKey]));
  }, []);
  var state = {
    expanded: expanded.includes(uniqueKey),
    disabled: disabled.includes(uniqueKey)
  };
  var cssStyle = [];
  state.expanded ? cssStyle.push('expanded') : cssStyle.push('collapsed');
  state.disabled && cssStyle.push('disabled');
  return /*#__PURE__*/React.createElement(ItemStyle, {
    className: cssStyle.join(' ')
  }, /*#__PURE__*/React.createElement("header", {
    onClick: function onClick() {
      return handleToggle(uniqueKey);
    }
  }, title, !state.disabled && state.expanded ? _Icon || (_Icon = /*#__PURE__*/React.createElement(Icon, {
    className: "expansion-indicator",
    name: "chevron-up-outline"
  })) : _Icon2 || (_Icon2 = /*#__PURE__*/React.createElement(Icon, {
    className: "expansion-indicator",
    name: "chevron-down-outline"
  }))), /*#__PURE__*/React.createElement("div", {
    className: state.expanded ? 'expanded' : 'collapsed'
  }, /*#__PURE__*/React.createElement("div", {
    className: "item-body"
  }, children)));
};