"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Header = require("./Header");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function PersonMenu(_ref) {
  var active = _ref.active;
  return /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", {
    className: "dsa-header-hide-on-desktop"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/",
    className: active === _Header.HeaderRoutes.PERSON ? "dsa-header-active" : undefined
  }, "Forside")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/stillinger",
    className: active === _Header.HeaderRoutes.STILLIGER ? "dsa-header-active" : undefined
  }, "Ledige stillinger")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/jobbtreff",
    className: active === _Header.HeaderRoutes.JOBBTREFF ? "dsa-header-active" : undefined
  }, "Jobbtreff")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/cv",
    className: active === _Header.HeaderRoutes.CV ? "dsa-header-active" : undefined
  }, "CV")));
}
PersonMenu.propTypes = {};
var _default = PersonMenu;
exports["default"] = _default;