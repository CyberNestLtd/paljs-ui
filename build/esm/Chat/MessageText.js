import React from 'react';
import { MessageTextStyle } from './style';
var MessageText = function MessageText(props) {
  return /*#__PURE__*/React.createElement(MessageTextStyle, null, (props.sender || props.date) && /*#__PURE__*/React.createElement("p", {
    className: "sender"
  }, props.sender, " ", /*#__PURE__*/React.createElement("time", null, props.date)), props.message && /*#__PURE__*/React.createElement("p", {
    className: "text"
  }, " ", props.message));
};
export default MessageText;