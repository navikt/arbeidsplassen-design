"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _joinClassNames = _interopRequireDefault(require("../.utils/joinClassNames"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 *
 * @param children {"sad" | "asdasd"} asd ads
 * @param caption asdasd
 * @param className asd ad
 * @returns {JSX.Element}
 * @constructor
 */
function Blockquote(_ref) {
  var children = _ref.children,
    caption = _ref.caption,
    className = _ref.className;
  return /*#__PURE__*/_react["default"].createElement("figure", {
    className: (0, _joinClassNames["default"])("dsa-blockquote-figure", className)
  }, /*#__PURE__*/_react["default"].createElement("blockquote", {
    className: "dsa-blockquote"
  }, children), /*#__PURE__*/_react["default"].createElement("figcaption", {
    className: "dsa-blockquote-figcaption"
  }, caption));
}
var _default = Blockquote;
exports["default"] = _default;