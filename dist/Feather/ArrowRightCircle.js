"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ArrowRightCircle(_ref) {
  var _ref$title = _ref.title,
    title = _ref$title === void 0 ? "Høyre" : _ref$title,
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
    className: "feather feather-arrow-right-circle",
    role: "img",
    "aria-hidden": ariaHidden,
    "aria-label": title
  }, /*#__PURE__*/_react["default"].createElement("title", null, title), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/_react["default"].createElement("polyline", {
    points: "12 16 16 12 12 8"
  }), /*#__PURE__*/_react["default"].createElement("line", {
    x1: "8",
    y1: "12",
    x2: "16",
    y2: "12"
  }));
}
ArrowRightCircle.defaultProps = {};
ArrowRightCircle.propTypes = {};
var _default = ArrowRightCircle;
exports["default"] = _default;