"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function User(_ref) {
  var _ref$title = _ref.title,
    title = _ref$title === void 0 ? "Person" : _ref$title,
    _ref$ariaHidden = _ref.ariaHidden,
    ariaHidden = _ref$ariaHidden === void 0 ? true : _ref$ariaHidden;
  return /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "feather feather-user",
    role: "img",
    "aria-hidden": ariaHidden,
    "aria-label": title
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "12",
    cy: "7",
    r: "4"
  }));
}
User.propTypes = {};
var _default = User;
exports["default"] = _default;