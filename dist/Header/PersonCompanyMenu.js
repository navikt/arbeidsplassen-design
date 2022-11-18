"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Header = require("./Header");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function PersonCompanyMenu(_ref) {
  var active = _ref.active;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "dsa-header-menu-both"
  }, /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/",
    className: active === _Header.HeaderRoutes.PERSON ? "dsa-header-active" : undefined
  }, "Person")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/bedrift",
    className: active === _Header.HeaderRoutes.BEDRIFT ? "dsa-header-active" : undefined
  }, "Bedrift"))));
}
var _default = PersonCompanyMenu;
exports["default"] = _default;