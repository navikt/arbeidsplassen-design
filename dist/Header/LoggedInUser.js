"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _User = _interopRequireDefault(require("../Feather/User"));
var _Building = _interopRequireDefault(require("../Feather/Building"));
var _Header = require("./Header");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function LoggedInUser(_ref) {
  var variant = _ref.variant,
    userName = _ref.userName,
    companyName = _ref.companyName;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "dsa-header-user"
  }, variant === _Header.HeaderVariant.PERSON && /*#__PURE__*/_react["default"].createElement("a", {
    href: "/minside",
    className: "dsa-header-account"
  }, /*#__PURE__*/_react["default"].createElement(_User["default"], null), userName ? userName : "Min side"), variant === _Header.HeaderVariant.COMPANY && /*#__PURE__*/_react["default"].createElement("a", {
    href: "/bedrift/din-bedrift",
    className: "dsa-header-account"
  }, /*#__PURE__*/_react["default"].createElement(_Building["default"], null), companyName ? companyName : "Din bedrift"));
}
LoggedInUser.propTypes = {};
var _default = LoggedInUser;
exports["default"] = _default;