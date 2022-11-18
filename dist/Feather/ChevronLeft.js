"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ChevronLeft(_ref) {
  var _ref$title = _ref.title,
    title = _ref$title === void 0 ? "Venstre" : _ref$title,
    ariaHidden = _ref.ariaHidden,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "1.5em" : _ref$size;
  return /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "feather feather-chevron-left",
    role: "img",
    "aria-hidden": ariaHidden,
    "aria-label": title
  }, /*#__PURE__*/_react["default"].createElement("title", null, title), /*#__PURE__*/_react["default"].createElement("polyline", {
    points: "15 18 9 12 15 6"
  }));
}
var _default = ChevronLeft;
exports["default"] = _default;