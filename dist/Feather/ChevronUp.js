"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ChevronUp(_ref) {
  var _ref$title = _ref.title,
    title = _ref$title === void 0 ? "Opp" : _ref$title,
    _ref$ariaHidden = _ref.ariaHidden,
    ariaHidden = _ref$ariaHidden === void 0 ? true : _ref$ariaHidden,
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
    className: "feather feather-chevron-up",
    role: "img",
    "aria-hidden": ariaHidden,
    "aria-label": title
  }, /*#__PURE__*/_react["default"].createElement("title", null, title), /*#__PURE__*/_react["default"].createElement("polyline", {
    points: "18 15 12 9 6 15"
  }));
}
var _default = ChevronUp;
exports["default"] = _default;