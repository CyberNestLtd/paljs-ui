function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
import React from 'react';
import { MessageFileStyle } from './style';
import MessageText from './MessageText';
var FileComponent = function FileComponent(props) {
  return /*#__PURE__*/React.createElement("a", {
    href: props.url,
    target: "_blank",
    rel: "noopener noreferrer"
  }, !props.urlStyle && /*#__PURE__*/React.createElement("span", {
    className: props.icon
  }), props.isImage && /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: props.urlStyle
    }
  }));
};
var MessageFile = function MessageFile(props) {
  var isImages = function isImages(file) {
    return !!file.type && ['image/png', 'image/jpeg', 'image/gif'].includes(file.type);
  };
  var readyFiles = props.files ? props.files.map(function (file) {
    var isImage = isImages(file);
    return _objectSpread(_objectSpread({}, file), {}, {
      urlStyle: isImage ? "url(".concat(file.url, ")") : '',
      isImage: isImage
    });
  }) : [];
  return /*#__PURE__*/React.createElement(MessageFileStyle, null, /*#__PURE__*/React.createElement(MessageText, {
    sender: props.sender,
    message: props.message,
    date: props.date
  }), readyFiles.length > 1 ? /*#__PURE__*/React.createElement("div", {
    className: "message-content-group"
  }, readyFiles.map(function (file, index) {
    return /*#__PURE__*/React.createElement(FileComponent, _extends({
      key: index
    }, file));
  })) : readyFiles.length === 1 && /*#__PURE__*/React.createElement(FileComponent, readyFiles[0]));
};
export default MessageFile;