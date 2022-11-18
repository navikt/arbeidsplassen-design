"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Logo() {
  return /*#__PURE__*/_react["default"].createElement("a", {
    href: "/",
    className: "dsa-header-logo",
    "aria-label": "G\xE5 til forsiden"
  }, /*#__PURE__*/_react["default"].createElement("i", {
    role: "img",
    "aria-label": "Arbeidsplassen logo"
  }));
}
Logo.propTypes = {};
var _default = Logo;
exports["default"] = _default;