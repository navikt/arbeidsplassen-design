"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Button = _interopRequireDefault(require("../Button/Button"));
var _LogOut = _interopRequireDefault(require("../Feather/LogOut"));
var _LogIn = _interopRequireDefault(require("../Feather/LogIn"));
var _Header = require("./Header");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function LoginButton(_ref) {
  var authenticationStatus = _ref.authenticationStatus,
    handleLogOutClick = _ref.handleLogOutClick,
    handleLogInClick = _ref.handleLogInClick;
  if (authenticationStatus === _Header.HeaderAuthenticationStatus.IS_AUTHENTICATED) {
    return /*#__PURE__*/_react["default"].createElement(_Button["default"], {
      variant: "secondary",
      onClick: handleLogOutClick,
      icon: /*#__PURE__*/_react["default"].createElement(_LogOut["default"], null),
      className: "dsa-header-login-button"
    }, "Logg ut");
  } else if (authenticationStatus === _Header.HeaderAuthenticationStatus.NOT_AUTHENTICATED) {
    return /*#__PURE__*/_react["default"].createElement(_Button["default"], {
      variant: "secondary",
      onClick: handleLogInClick,
      icon: /*#__PURE__*/_react["default"].createElement(_LogIn["default"], null),
      className: "dsa-header-logout-button"
    }, "Logg inn");
  } else {
    return /*#__PURE__*/_react["default"].createElement("div", null);
  }
}
var _default = LoginButton;
exports["default"] = _default;