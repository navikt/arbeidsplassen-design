"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Trash(_ref) {
  var _ref$title = _ref.title,
    title = _ref$title === void 0 ? "Slett" : _ref$title,
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
    className: "feather feather-trash-2",
    role: "img",
    "aria-hidden": ariaHidden,
    "aria-label": title
  }, /*#__PURE__*/_react["default"].createElement("title", null, title), /*#__PURE__*/_react["default"].createElement("polyline", {
    points: "3 6 5 6 21 6"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
  }), /*#__PURE__*/_react["default"].createElement("line", {
    x1: "10",
    y1: "11",
    x2: "10",
    y2: "17"
  }), /*#__PURE__*/_react["default"].createElement("line", {
    x1: "14",
    y1: "11",
    x2: "14",
    y2: "17"
  }));
}
Trash.propTypes = {};
var _default = Trash;
exports["default"] = _default;