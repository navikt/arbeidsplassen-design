"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Header = require("./Header");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function CompanyMenu(_ref) {
  var active = _ref.active;
  return /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", {
    className: "dsa-header-hide-on-desktop"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/bedrift",
    className: active === _Header.HeaderRoutes.BEDRIFT ? "dsa-header-active" : undefined
  }, "Forside")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/bedrift/stillingsannonser",
    className: active === _Header.HeaderRoutes.STILLINGSANNONSER ? "dsa-header-active" : undefined
  }, "Stillingsannonser")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/bedrift/jobbtreff",
    className: active === _Header.HeaderRoutes.JOBBTREFF_BEDRIFT ? "dsa-header-active" : undefined
  }, "Jobbtreff")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/bedrift/interessemeldinger",
    className: active === _Header.HeaderRoutes.INTERESSEMELDIGER ? "dsa-header-active" : undefined
  }, "Interessemeldinger")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/bedrift/kandidater",
    className: active === _Header.HeaderRoutes.KANDIDATLISTER ? "dsa-header-active" : undefined
  }, "Kandidatlister")));
}
var _default = CompanyMenu;
exports["default"] = _default;