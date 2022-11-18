"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _joinClassNames = _interopRequireDefault(require("../.utils/joinClassNames"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Tag(_ref) {
  var children = _ref.children,
    color = _ref.color,
    small = _ref.small,
    className = _ref.className;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _joinClassNames["default"])("dsa-tag", "dsa-tag-".concat(color), small ? "dsa-tag-small" : undefined, className)
  }, children);
}
Tag.defaultProps = {
  color: "blue",
  className: undefined,
  small: false
};
Tag.propTypes = {
  small: _propTypes["default"].bool,
  color: _propTypes["default"].oneOf(["blue", "green", "red", "grey"]),
  className: _propTypes["default"].string,
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node]).isRequired
};
var _default = Tag;
exports["default"] = _default;