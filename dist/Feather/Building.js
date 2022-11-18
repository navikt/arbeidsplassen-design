"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Building(_ref) {
  var _ref$title = _ref.title,
    title = _ref$title === void 0 ? "Bedrift" : _ref$title,
    _ref$ariaHidden = _ref.ariaHidden,
    ariaHidden = _ref$ariaHidden === void 0 ? true : _ref$ariaHidden;
  return /*#__PURE__*/_react["default"].createElement("svg", {
    role: "img",
    "aria-hidden": ariaHidden,
    "aria-label": title,
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("title", null, title), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15 3H9C8.44771 3 8 3.44772 8 4V21H16V4C16 3.44772 15.5523 3 15 3ZM9 1C7.34315 1 6 2.34315 6 4V23H18V4C18 2.34315 16.6569 1 15 1H9Z",
    fill: "currentColor"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4 10C3.44772 10 3 10.4477 3 11V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V11C21 10.4477 20.5523 10 20 10H17V8H20C21.6569 8 23 9.34315 23 11V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V11C1 9.34315 2.34315 8 4 8H7V10H4Z",
    fill: "currentColor"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.5 5C11.0523 5 11.5 5.44772 11.5 6V7C11.5 7.55228 11.0523 8 10.5 8C9.94772 8 9.5 7.55228 9.5 7V6C9.5 5.44772 9.94772 5 10.5 5Z",
    fill: "currentColor"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.5 9C11.0523 9 11.5 9.44772 11.5 10V11C11.5 11.5523 11.0523 12 10.5 12C9.94772 12 9.5 11.5523 9.5 11V10C9.5 9.44772 9.94772 9 10.5 9Z",
    fill: "currentColor"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.5 5C14.0523 5 14.5 5.44772 14.5 6V7C14.5 7.55228 14.0523 8 13.5 8C12.9477 8 12.5 7.55228 12.5 7V6C12.5 5.44772 12.9477 5 13.5 5Z",
    fill: "currentColor"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.5 9C14.0523 9 14.5 9.44772 14.5 10V11C14.5 11.5523 14.0523 12 13.5 12C12.9477 12 12.5 11.5523 12.5 11V10C12.5 9.44772 12.9477 9 13.5 9Z",
    fill: "currentColor"
  }));
}
var _default = Building;
exports["default"] = _default;