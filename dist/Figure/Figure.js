"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _joinClassNames = _interopRequireDefault(require("../.utils/joinClassNames"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Figure(_ref) {
  var children = _ref.children,
    className = _ref.className;
  return /*#__PURE__*/_react["default"].createElement("figure", {
    className: (0, _joinClassNames["default"])("dsa-figure", className)
  }, children);
}
Figure.defaultProps = {
  className: undefined
};
Figure.propTypes = {
  className: _propTypes["default"].string
};
var _default = Figure;
exports["default"] = _default;