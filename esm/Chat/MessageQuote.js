import React from 'react';
import { MessageQuoteStyle } from './style';
import MessageText from './MessageText';
var MessageQuote = function MessageQuote(props) {
  return /*#__PURE__*/React.createElement(MessageQuoteStyle, null, (props.sender || props.date) && /*#__PURE__*/React.createElement("p", {
    className: "sender"
  }, props.sender, " ", /*#__PURE__*/React.createElement("time", null, props.date)), /*#__PURE__*/React.createElement("p", {
    className: "quote"
  }, props.quote), /*#__PURE__*/React.createElement(MessageText, {
    message: props.message
  }));
};
export default MessageQuote;