var _div;
import React from 'react';
import MessageFile from './MessageFile';
import MessageMap from './MessageMap';
import MessageText from './MessageText';
import MessageQuote from './MessageQuote';
import { MessageStyle } from './style';
import { EvaIcon } from '../Icon';
var Messages = function Messages(props) {
  var scrollRef = React.useRef(null);
  React.useEffect(function () {
    if (scrollRef && scrollRef.current) scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight);
  }, [props.messages]);
  var getMessageComponent = function getMessageComponent(msg) {
    switch (msg.type) {
      case 'file':
        return /*#__PURE__*/React.createElement(MessageFile, {
          sender: msg.sender,
          message: msg.message,
          date: msg.date,
          files: msg.files
        });
      case 'map':
        return /*#__PURE__*/React.createElement(MessageMap, {
          sender: msg.sender,
          message: msg.message,
          date: msg.date,
          latitude: msg.latitude,
          longitude: msg.longitude,
          mapKey: props.mapKey
        });
      case 'quote':
        return /*#__PURE__*/React.createElement(MessageQuote, {
          sender: msg.sender,
          message: msg.message,
          date: msg.date,
          quote: msg.quote
        });
      default:
        return /*#__PURE__*/React.createElement(MessageText, {
          sender: msg.sender,
          message: msg.message,
          date: msg.date
        });
    }
  };
  var getInitials = function getInitials(name) {
    if (name) {
      var names = name.split(' ');
      return names.map(function (n) {
        return n.charAt(0);
      }).splice(0, 2).join('').toUpperCase();
    }
    return '';
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "scrollable",
    ref: scrollRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "messages"
  }, props.messages.map(function (msg, index) {
    return /*#__PURE__*/React.createElement(MessageStyle, {
      reply: msg.reply,
      key: index
    }, !msg.reply && (_div || (_div = /*#__PURE__*/React.createElement("div", {
      className: "avatar"
    }, /*#__PURE__*/React.createElement(EvaIcon, {
      name: "thumbs-up"
    })))), /*#__PURE__*/React.createElement("div", {
      className: "message"
    }, getMessageComponent(msg)));
  }), !props.messages.length && /*#__PURE__*/React.createElement("p", {
    className: "no-messages"
  }, props.noMessages ? props.noMessages : 'No messages yet.')));
};
export default Messages;