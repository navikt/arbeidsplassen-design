"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _joinClassNames = _interopRequireDefault(require("../.utils/joinClassNames"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Anchor = /*#__PURE__*/_react["default"].forwardRef(function Anchor(_ref, ref) {
  var onClick = _ref.onClick,
    href = _ref.href,
    children = _ref.children,
    dark = _ref.dark,
    className = _ref.className;
  return /*#__PURE__*/_react["default"].createElement("a", {
    href: href,
    className: (0, _joinClassNames["default"])("dsa-anchor", dark ? "dsa-anchor-dark" : undefined, className),
    onClick: onClick,
    ref: ref
  }, children);
});
Anchor.defaultProps = {
  dark: false,
  onClick: undefined,
  className: undefined
};
Anchor.propTypes = {
  dark: _propTypes["default"].bool,
  onClick: _propTypes["default"].func,
  className: _propTypes["default"].string
};
var _default = Anchor;
exports["default"] = _default;