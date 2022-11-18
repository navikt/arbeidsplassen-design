"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _joinClassNames = _interopRequireDefault(require("../.utils/joinClassNames"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Button = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var children = _ref.children,
    htmlType = _ref.htmlType,
    variant = _ref.variant,
    icon = _ref.icon,
    onClick = _ref.onClick,
    className = _ref.className,
    disabled = _ref.disabled;
  return /*#__PURE__*/_react["default"].createElement("button", {
    ref: ref,
    disabled: disabled,
    onClick: onClick,
    className: (0, _joinClassNames["default"])("dsa-button", "dsa-button-".concat(variant), className),
    type: htmlType
  }, icon && /*#__PURE__*/_react["default"].createElement("span", {
    className: "dsa-button-icon"
  }, icon), /*#__PURE__*/_react["default"].createElement("span", {
    className: "dsa-button-text"
  }, children));
});
Button.defaultProps = {
  variant: "primary",
  disabled: false,
  icon: undefined,
  className: undefined,
  htmlType: "button"
};
Button.propTypes = {
  variant: _propTypes["default"].oneOf(["primary", "secondary", "tertiary"]),
  disabled: _propTypes["default"].bool,
  icon: _propTypes["default"].node,
  htmlType: _propTypes["default"].oneOf(["submit", "button", "reset"]),
  children: _propTypes["default"].string.isRequired,
  className: _propTypes["default"].string,
  onClick: _propTypes["default"].func.isRequired
};
var _default = Button;
exports["default"] = _default;