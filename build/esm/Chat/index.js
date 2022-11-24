import React from 'react';
import { ChatStyle } from './style';
import ChatMessages from './Messages';
import ChatForm from './Form';
var Chat = function Chat(props) {
  return /*#__PURE__*/React.createElement(ChatStyle, props, /*#__PURE__*/React.createElement("header", null, props.title), props.children);
};
Chat.defaultProps = {
  size: 'Medium',
  status: 'Primary'
};
export { Chat, ChatMessages, ChatForm };
export * from './types';