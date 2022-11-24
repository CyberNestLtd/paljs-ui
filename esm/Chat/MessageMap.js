import React from 'react';
import MessageFile from './MessageFile';
var MessageMap = function MessageMap(props) {
  var file = {
    url: "https://maps.googleapis.com/maps/api/staticmap?center=".concat(props.latitude, ",").concat(props.longitude, "&zoom=12&size=400x400&key=").concat(props.mapKey),
    type: 'image/png',
    icon: ''
  };
  return /*#__PURE__*/React.createElement(MessageFile, {
    sender: props.sender,
    message: props.message,
    date: props.date,
    files: [file]
  });
};
export default MessageMap;