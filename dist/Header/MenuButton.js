"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Menu = _interopRequireDefault(require("../Feather/Menu"));
var _XIcon = _interopRequireDefault(require("../Feather/XIcon"));
var _ToolButton = _interopRequireDefault(require("../ToolButton/ToolButton"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function MenuButton(_ref) {
  var isMobileMenuHidden = _ref.isMobileMenuHidden,
    toggleMenu = _ref.toggleMenu;
  return /*#__PURE__*/_react["default"].createElement(_ToolButton["default"], {
    className: "dsa-header-menu-button dsa-header-hide-on-desktop",
    onClick: toggleMenu,
    icon: isMobileMenuHidden ? /*#__PURE__*/_react["default"].createElement(_Menu["default"], null) : /*#__PURE__*/_react["default"].createElement(_XIcon["default"], null)
  }, isMobileMenuHidden ? "Meny" : "Lukk");
}
MenuButton.propTypes = {};
var _default = MenuButton;
exports["default"] = _default;