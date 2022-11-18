"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _joinClassNames = _interopRequireDefault(require("../.utils/joinClassNames"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ToolButton = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var children = _ref.children,
    icon = _ref.icon,
    onClick = _ref.onClick,
    className = _ref.className,
    disabled = _ref.disabled,
    ariaLabel = _ref.ariaLabel;
  return /*#__PURE__*/_react["default"].createElement("button", {
    ref: ref,
    disabled: disabled,
    onClick: onClick,
    className: (0, _joinClassNames["default"])("dsa-tool-button", className),
    type: "button",
    "aria-label": ariaLabel
  }, icon, children && /*#__PURE__*/_react["default"].createElement("div", {
    className: "dsa-tool-button-text"
  }, children));
});
ToolButton.defaultProps = {
  disabled: false,
  icon: undefined,
  ariaLabel: undefined,
  className: undefined
};
ToolButton.propTypes = {
  disabled: _propTypes["default"].bool,
  icon: _propTypes["default"].node,
  children: _propTypes["default"].string,
  className: _propTypes["default"].string,
  ariaLabel: _propTypes["default"].string,
  onClick: _propTypes["default"].func.isRequired
};
var _default = ToolButton;
exports["default"] = _default;