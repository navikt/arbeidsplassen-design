"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ArrowRight(_ref) {
  var title = _ref.title,
    ariaHidden = _ref.ariaHidden;
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
    className: "feather feather-arrow-right",
    role: "img",
    "aria-hidden": ariaHidden,
    "aria-label": title
  }, /*#__PURE__*/_react["default"].createElement("title", null, title), /*#__PURE__*/_react["default"].createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }), /*#__PURE__*/_react["default"].createElement("polyline", {
    points: "12 5 19 12 12 19"
  }));
}
var _default = ArrowRight;
exports["default"] = _default;