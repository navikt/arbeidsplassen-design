"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _joinClassNames = _interopRequireDefault(require("../.utils/joinClassNames"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function PullOutside(_ref) {
  var children = _ref.children,
    className = _ref.className;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _joinClassNames["default"])("dsa-pull-outside", className)
  }, children);
}
PullOutside.defaultProps = {
  className: undefined
};
PullOutside.propTypes = {
  className: _propTypes["default"].string
};
var _default = PullOutside;
exports["default"] = _default;