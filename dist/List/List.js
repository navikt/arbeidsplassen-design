"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _joinClassNames = _interopRequireDefault(require("../.utils/joinClassNames"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function List(_ref) {
  var children = _ref.children,
    variant = _ref.variant,
    className = _ref.className;
  var ListType = variant;
  return /*#__PURE__*/_react["default"].createElement(ListType, {
    className: (0, _joinClassNames["default"])("dsa-list", className)
  }, children);
}
List.defaultProps = {
  className: undefined,
  variant: "ul"
};
List.propTypes = {
  className: _propTypes["default"].string,
  variant: _propTypes["default"].oneOf(["ul", "ol"])
};
var _default = List;
exports["default"] = _default;