"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function MoreVertical(_ref) {
  var _ref$title = _ref.title,
    title = _ref$title === void 0 ? "Meny" : _ref$title,
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
    className: "feather feather-more-vertical",
    role: "img",
    "aria-hidden": ariaHidden,
    "aria-label": title
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "12",
    cy: "5",
    r: "1"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "12",
    cy: "19",
    r: "1"
  }));
}
var _default = MoreVertical;
exports["default"] = _default;