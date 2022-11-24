var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import styled, { css } from 'styled-components';
import React from 'react';
var ProgressStyle = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref) {
  var theme = _ref.theme,
    size = _ref.size,
    status = _ref.status,
    value = _ref.value;
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    display: block;\n    .progress-container {\n      overflow: hidden;\n      border-radius: ", ";\n    }\n    .progress-value {\n      height: 100%;\n      width: ", "%;\n      text-align: center;\n      overflow: hidden;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-family: ", ";\n      transition-duration: ", ";\n      transition-property: width, background-color;\n    }\n    ", "\n    ", "\n  "])), theme.progressBarBorderRadius, value, theme.progressBarTextFontFamily, theme.progressBarAnimationDuration, size && css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      .progress-container {\n        height: ", ";\n      }\n\n      .progress-value {\n        font-size: ", ";\n        font-weight: ", ";\n        line-height: ", ";\n      }\n    "])), theme["progressBar".concat(size, "Height")], theme["progressBar".concat(size, "TextFontSize")], theme["progressBar".concat(size, "TextFontWeight")], theme["progressBar".concat(size, "TextLineHeight")]), status && css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      .progress-container {\n        background-color: ", ";\n      }\n\n      .progress-value {\n        background-color: ", ";\n        color: ", ";\n      }\n    "])), theme["progressBar".concat(status, "BackgroundColor")], theme["progressBar".concat(status, "FilledBackgroundColor")], theme["progressBar".concat(status, "TextColor")]));
});
var Progress = function Progress(props) {
  return /*#__PURE__*/React.createElement(ProgressStyle, props, /*#__PURE__*/React.createElement("div", {
    className: "progress-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "progress-value"
  }, props.displayValue && /*#__PURE__*/React.createElement("span", null, props.value, "%"), props.children)));
};
Progress.defaultProps = {
  size: 'Medium',
  status: 'Basic',
  value: 0
};
export default Progress;