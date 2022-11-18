"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _joinClassNames = _interopRequireDefault(require("../.utils/joinClassNames"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Panel(_ref) {
  var children = _ref.children,
    className = _ref.className,
    color = _ref.color,
    compact = _ref.compact,
    fullscreen = _ref.fullscreen;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _joinClassNames["default"])("dsa-panel", "dsa-panel-".concat(color), fullscreen ? "dsa-panel-fullscreen" : "dsa-panel-inline", compact ? "dsa-panel-compact" : undefined, className)
  }, children);
}
Panel.defaultProps = {
  className: undefined,
  compact: false,
  fullscreen: false,
  color: undefined
};
Panel.propTypes = {
  className: _propTypes["default"].string,
  compact: _propTypes["default"].bool,
  fullscreen: _propTypes["default"].bool,
  color: _propTypes["default"].oneOf(["green", "blue", "orange"])
};
var _default = Panel;
exports["default"] = _default;