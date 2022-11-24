"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _MessageFile = _interopRequireDefault(require("./MessageFile"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var MessageMap = function MessageMap(props) {
  var file = {
    url: "https://maps.googleapis.com/maps/api/staticmap?center=".concat(props.latitude, ",").concat(props.longitude, "&zoom=12&size=400x400&key=").concat(props.mapKey),
    type: 'image/png',
    icon: ''
  };
  return /*#__PURE__*/_react["default"].createElement(_MessageFile["default"], {
    sender: props.sender,
    message: props.message,
    date: props.date,
    files: [file]
  });
};
var _default = MessageMap;
exports["default"] = _default;