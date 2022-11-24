"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = void 0;
var _react = _interopRequireDefault(require("react"));
var _Overlay = _interopRequireDefault(require("../Overlay"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Modal = function Modal(props) {
  if (!props.on) return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
  return /*#__PURE__*/_react["default"].createElement(_Overlay["default"], null, /*#__PURE__*/_react["default"].createElement(StyledModal, null, /*#__PURE__*/_react["default"].createElement(Background, {
    onClick: props.toggle
  }), /*#__PURE__*/_react["default"].createElement(Content, null, props.children)));
};
exports.Modal = Modal;
var StyledModal = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));
var Background = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  opacity: 0.6;\n  background-color: black;\n"])));
var Content = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: relative;\n  z-index: 2;\n  max-width: 100%;\n  max-height: 100%;\n"])));