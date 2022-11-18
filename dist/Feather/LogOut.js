"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function LogOut(_ref) {
  var _ref$title = _ref.title,
    title = _ref$title === void 0 ? "Logg ut" : _ref$title,
    ariaHidden = _ref.ariaHidden;
  return /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1.5em",
    height: "1.5em",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "feather feather-log-out",
    role: "img",
    "aria-hidden": ariaHidden,
    "aria-label": title
  }, /*#__PURE__*/_react["default"].createElement("title", null, title), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
  }), /*#__PURE__*/_react["default"].createElement("polyline", {
    points: "16 17 21 12 16 7"
  }), /*#__PURE__*/_react["default"].createElement("line", {
    x1: "21",
    y1: "12",
    x2: "9",
    y2: "12"
  }));
}
var _default = LogOut;
exports["default"] = _default;