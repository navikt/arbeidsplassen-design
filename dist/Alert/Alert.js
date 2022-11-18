"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _XOctagon = _interopRequireDefault(require("../Feather/XOctagon"));
var _AlertCircle = _interopRequireDefault(require("../Feather/AlertCircle"));
var _AlertTriangle = _interopRequireDefault(require("../Feather/AlertTriangle"));
var _XIcon = _interopRequireDefault(require("../Feather/XIcon"));
var _joinClassNames = _interopRequireDefault(require("../.utils/joinClassNames"));
var _ToolButton = _interopRequireDefault(require("../ToolButton/ToolButton"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Alert(_ref) {
  var variant = _ref.variant,
    fullscreen = _ref.fullscreen,
    children = _ref.children,
    onClose = _ref.onClose,
    className = _ref.className,
    closeButton = _ref.closeButton;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _joinClassNames["default"])("dsa-alert", "dsa-alert-".concat(variant), closeButton ? "dsa-alert-with-close" : undefined, fullscreen ? "dsa-alert-fullscreen dsa-container" : "dsa-alert-inline", className)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "dsa-alert-inner"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "dsa-alert-icon"
  }, variant === "info" && /*#__PURE__*/_react["default"].createElement(_AlertCircle["default"], {
    title: "Informasjon"
  }), variant === "warning" && /*#__PURE__*/_react["default"].createElement(_AlertTriangle["default"], {
    title: "Advarsel"
  }), variant === "error" && /*#__PURE__*/_react["default"].createElement(_XOctagon["default"], {
    title: "Feil"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "dsa-alert-content"
  }, children)), closeButton && /*#__PURE__*/_react["default"].createElement(_ToolButton["default"], {
    className: "dsa-alert-close",
    onClick: onClose,
    ariaLabel: "Lukk",
    icon: /*#__PURE__*/_react["default"].createElement(_XIcon["default"], null)
  }));
}
Alert.defaultProps = {
  variant: "info",
  onClose: undefined,
  className: undefined,
  fullscreen: false,
  closeButton: false
};
Alert.propTypes = {
  variant: _propTypes["default"].oneOf(["info", "warning", "error"]),
  fullscreen: _propTypes["default"].bool,
  onClose: _propTypes["default"].func,
  className: _propTypes["default"].string,
  closeButton: _propTypes["default"].bool
};
var _default = Alert;
exports["default"] = _default;