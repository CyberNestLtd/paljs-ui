"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _styledComponents = require("styled-components");
var _reactSelect = _interopRequireDefault(require("react-select"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function customStyles(_ref) {
  var theme = _ref.theme,
    status = _ref.status,
    shape = _ref.shape,
    size = _ref.size;
  var getThemeKey = function getThemeKey(key) {
    return theme[key].toString();
  };
  return {
    control: function control(base, state) {
      var _state$selectProps = state.selectProps,
        menuPlacement = _state$selectProps.menuPlacement,
        isDisabled = _state$selectProps.isDisabled,
        menuIsOpen = _state$selectProps.menuIsOpen;
      var border = menuIsOpen ? menuPlacement === 'top' ? {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0
      } : {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
      } : {};
      var disabled = isDisabled ? {
        color: getThemeKey("selectOutline".concat(status, "DisabledTextColor")),
        backgroundColor: getThemeKey("selectOutline".concat(status, "DisabledBackgroundColor")),
        borderColor: getThemeKey("selectOutline".concat(status, "DisabledBorderColor"))
      } : {};
      return _objectSpread(_objectSpread(_objectSpread({}, base), {}, {
        borderStyle: getThemeKey('selectOutlineBorderStyle'),
        borderWidth: getThemeKey('selectOutlineBorderWidth'),
        borderRadius: getThemeKey("select".concat(shape, "BorderRadius")),
        backgroundColor: getThemeKey("selectOutline".concat(status, "BackgroundColor")),
        borderColor: getThemeKey("selectOutline".concat(status, "BorderColor")),
        color: getThemeKey("selectOutline".concat(status, "TextColor")),
        minHeight: 'auto',
        boxShadow: 'none',
        "div[class$='indicatorContainer']": {
          padding: getThemeKey("selectOutline".concat(size, "Padding"))
        },
        '&:focus': {
          backgroundColor: getThemeKey("selectOutline".concat(status, "FocusBackgroundColor")),
          borderColor: getThemeKey("selectOutline".concat(status, "FocusBorderColor"))
        },
        '&:hover': {
          backgroundColor: getThemeKey("selectOutline".concat(status, "HoverBackgroundColor")),
          borderColor: getThemeKey("selectOutline".concat(status, "HoverBorderColor"))
        }
      }, disabled), border);
    },
    menu: function menu(base, state) {
      var _state$selectProps2 = state.selectProps,
        menuPlacement = _state$selectProps2.menuPlacement,
        menuIsOpen = _state$selectProps2.menuIsOpen;
      var border = menuIsOpen ? menuPlacement === 'top' ? {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
      } : {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0
      } : {};
      return _objectSpread(_objectSpread({}, base), {}, {
        margin: 0,
        boxShadow: getThemeKey('selectOptionsListShadow'),
        borderStyle: getThemeKey('selectOutlineBorderStyle'),
        borderWidth: getThemeKey('selectOutlineBorderWidth'),
        backgroundColor: getThemeKey("selectOutline".concat(status, "BackgroundColor")),
        borderColor: getThemeKey("selectOutline".concat(status, "BorderColor"))
      }, border);
    },
    placeholder: function placeholder(base) {
      return _objectSpread(_objectSpread({}, base), {}, {
        color: getThemeKey("selectOutline".concat(status, "PlaceholderTextColor"))
      });
    },
    singleValue: function singleValue(base) {
      return _objectSpread(_objectSpread({}, base), {}, {
        color: getThemeKey("selectOutline".concat(status, "TextColor"))
      });
    },
    indicatorSeparator: function indicatorSeparator(base) {
      return _objectSpread(_objectSpread({}, base), {}, {
        color: getThemeKey("selectOutline".concat(status, "PlaceholderTextColor"))
      });
    },
    dropdownIndicator: function dropdownIndicator(base) {
      return _objectSpread(_objectSpread({}, base), {}, {
        color: getThemeKey("selectOutline".concat(status, "PlaceholderTextColor"))
      });
    },
    multiValue: function multiValue(base) {
      return _objectSpread(_objectSpread({}, base), {}, {
        borderRadius: getThemeKey("select".concat(shape, "BorderRadius"))
      });
    },
    input: function input(base) {
      return _objectSpread(_objectSpread({}, base), {}, {
        color: getThemeKey("selectOutline".concat(status, "TextColor"))
      });
    },
    multiValueRemove: function multiValueRemove(base) {
      var _objectSpread2;
      var borderTop = theme.dir === 'rtl' ? 'borderTopLeftRadius' : 'borderTopRightRadius';
      var borderBottom = theme.dir === 'rtl' ? 'borderBottomLeftRadius' : 'borderBottomRightRadius';
      return _objectSpread(_objectSpread({}, base), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, borderTop, getThemeKey("select".concat(shape, "BorderRadius"))), _defineProperty(_objectSpread2, borderBottom, getThemeKey("select".concat(shape, "BorderRadius"))), _defineProperty(_objectSpread2, "color", getThemeKey("selectOutline".concat(status, "PlaceholderTextColor"))), _objectSpread2));
    },
    option: function option(base, state) {
      var optionStyle = state.isDisabled ? {
        backgroundColor: getThemeKey('selectOptionDisabledBackgroundColor'),
        color: getThemeKey('selectOptionDisabledTextColor')
      } : state.isSelected ? {
        backgroundColor: state.isFocused ? getThemeKey('selectOptionSelectedFocusBackgroundColor') : getThemeKey('selectOptionSelectedBackgroundColor'),
        color: state.isFocused ? getThemeKey('selectOptionSelectedFocusTextColor') : getThemeKey('selectOptionSelectedTextColor'),
        '&:hover': {
          backgroundColor: getThemeKey('selectOptionSelectedHoverBackgroundColor'),
          color: getThemeKey('selectOptionSelectedHoverTextColor')
        }
      } : {
        backgroundColor: state.isFocused ? getThemeKey('selectOptionFocusBackgroundColor') : getThemeKey('selectOptionBackgroundColor'),
        color: state.isFocused ? getThemeKey('selectOptionFocusTextColor') : getThemeKey('selectOptionTextColor'),
        '&:hover': {
          backgroundColor: getThemeKey('selectOptionHoverBackgroundColor'),
          color: getThemeKey('selectOptionHoverTextColor')
        }
      };
      return _objectSpread(_objectSpread(_objectSpread({}, base), optionStyle), {}, {
        padding: getThemeKey("selectOptionOutline".concat(size, "Padding"))
      });
    }
  };
}
var SelectMain = function SelectMain(props) {
  var theme = _react["default"].useContext(_styledComponents.ThemeContext);
  return /*#__PURE__*/_react["default"].createElement(_reactSelect["default"], _extends({}, props, {
    isRtl: theme.dir === 'rtl',
    styles: customStyles(_objectSpread(_objectSpread({}, props), {}, {
      theme: theme
    }))
  }));
};
SelectMain.defaultProps = {
  shape: 'Rectangle',
  status: 'Basic',
  size: 'Medium'
};
var _default = SelectMain;
exports["default"] = _default;