"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _style = require("./style");
var _Icon = require("../Icon");
var _Button = require("../Button");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
var ChatForm = function ChatForm(props) {
  var _props$message;
  var _React$useState = _react["default"].useState((_props$message = props.message) !== null && _props$message !== void 0 ? _props$message : ''),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    message = _React$useState2[0],
    setMessage = _React$useState2[1];
  var _React$useState3 = _react["default"].useState([]),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    files = _React$useState4[0],
    setFiles = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(false),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    fileOver = _React$useState6[0],
    setFileOver = _React$useState6[1];
  var formRef = _react["default"].useRef(null);
  var inputRef = _react["default"].useRef(null);
  var onDragOver = function onDragOver() {
    var _inputRef$current;
    (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();
    setFileOver(true);
  };
  var onDragLeave = function onDragLeave() {
    var _inputRef$current2;
    (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 ? void 0 : _inputRef$current2.blur();
    setFileOver(false);
  };
  var onDropFile = function onDropFile(e) {
    if (props.dropFiles) {
      var _inputRef$current3;
      e.preventDefault();
      e.stopPropagation();
      (_inputRef$current3 = inputRef.current) === null || _inputRef$current3 === void 0 ? void 0 : _inputRef$current3.focus();
      setFileOver(true);
      if (e.dataTransfer && e.dataTransfer.files) {
        var droppedFiles = _toConsumableArray(files);
        var _loop = function _loop(i) {
          var _props$imgDropTypes;
          var res = _objectSpread(_objectSpread({}, e.dataTransfer.files[i]), {}, {
            src: '',
            urlStyle: ''
          });
          if ((_props$imgDropTypes = props.imgDropTypes) !== null && _props$imgDropTypes !== void 0 && _props$imgDropTypes.includes(e.dataTransfer.files[i].type)) {
            var fr = new FileReader();
            fr.onload = function (event) {
              var _event$target;
              res.src = (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.result;
              res.urlStyle = "url(".concat(res.src, ")");
            };
            fr.readAsDataURL(e.dataTransfer.files[i]);
          }
          droppedFiles.push(res);
        };
        for (var i = 0; i < e.dataTransfer.files.length; i++) {
          _loop(i);
        }
        setTimeout(function () {
          setFiles(droppedFiles);
        }, 500);
      }
    }
  };
  _react["default"].useEffect(function () {
    if (formRef && formRef.current) {
      formRef.current.addEventListener('drop', onDropFile);
      formRef.current.addEventListener('dragover', onDragOver);
      formRef.current.addEventListener('dragleave', onDragLeave);
    }
    return function () {
      if (formRef && formRef.current) {
        formRef.current.removeEventListener('drop', onDropFile);
        formRef.current.removeEventListener('dragover', onDragOver);
        formRef.current.removeEventListener('dragleave', onDragLeave);
      }
    };
  }, [files]);
  var removeFile = function removeFile(file) {
    var droppedFiles = _toConsumableArray(files);
    var index = droppedFiles.indexOf(file);
    if (index >= 0) {
      droppedFiles.splice(index, 1);
    }
    setFiles(droppedFiles);
  };
  var sendMessage = function sendMessage() {
    if (files.length || String(message).trim().length) {
      typeof props.onSend === 'function' && props.onSend({
        message: message,
        files: files
      });
      setMessage('');
      setFiles([]);
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "form",
    ref: formRef
  }, /*#__PURE__*/_react["default"].createElement(_style.FormStyle, {
    buttonIcon: !!props.buttonIcon,
    showButton: !!props.showButton
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "dropped-files"
  }, files.map(function (file, index) {
    return file.urlStyle ? /*#__PURE__*/_react["default"].createElement("div", {
      key: index,
      style: {
        backgroundImage: file.urlStyle
      }
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "remove",
      onClick: function onClick() {
        return removeFile(file);
      }
    }, "\xD7")) : /*#__PURE__*/_react["default"].createElement("div", {
      key: index,
      className: props.filesIcon
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "remove",
      onClick: function onClick() {
        return removeFile(file);
      }
    }, "\xD7"));
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "message-row"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    value: message,
    onChange: function onChange(e) {
      return setMessage(e.target.value);
    },
    placeholder: fileOver ? props.fileOverPlaceholder : props.placeholder,
    onKeyUp: function onKeyUp(e) {
      e.preventDefault();
      if (e.key === 'Enter') {
        sendMessage();
      }
    }
  }), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    className: "send-button",
    onClick: sendMessage
  }, props.buttonIcon ? /*#__PURE__*/_react["default"].createElement(_Icon.ItemIcon, {
    icon: props.buttonIcon
  }) : props.buttonTitle))));
};
ChatForm.defaultProps = {
  imgDropTypes: ['image/png', 'image/jpeg', 'image/gif'],
  showButton: true,
  dropFiles: false,
  buttonTitle: 'Send',
  placeholder: 'Type a message',
  fileOverPlaceholder: 'Drop file to send'
};
var _default = ChatForm;
exports["default"] = _default;