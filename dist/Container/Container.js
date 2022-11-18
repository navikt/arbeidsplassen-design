"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _joinClassNames = _interopRequireDefault(require("../.utils/joinClassNames"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Container(_ref) {
  var size = _ref.size,
    children = _ref.children,
    className = _ref.className,
    color = _ref.color;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _joinClassNames["default"])("dsa-container", "dsa-container-".concat(color), className)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _joinClassNames["default"])("dsa-container-inner", "dsa-container-inner-".concat(size))
  }, children));
}
Container.defaultProps = {
  className: undefined,
  size: "large",
  color: "none"
};
Container.propTypes = {
  className: _propTypes["default"].string,
  size: _propTypes["default"].oneOf(["large", "medium", "small"]),
  color: _propTypes["default"].oneOf(["none", "green", "blue", "orange"])
};
var _default = Container;
exports["default"] = _default;