"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function XOctagon(_ref) {
  var _ref$title = _ref.title,
    title = _ref$title === void 0 ? "Lukk" : _ref$title,
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
    className: "feather feather-x-octagon",
    role: "img",
    "aria-hidden": ariaHidden,
    "aria-label": title
  }, /*#__PURE__*/_react["default"].createElement("title", null, title), /*#__PURE__*/_react["default"].createElement("polygon", {
    points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
  }), /*#__PURE__*/_react["default"].createElement("line", {
    x1: "15",
    y1: "9",
    x2: "9",
    y2: "15"
  }), /*#__PURE__*/_react["default"].createElement("line", {
    x1: "9",
    y1: "9",
    x2: "15",
    y2: "15"
  }));
}
var _default = XOctagon;
exports["default"] = _default;