"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _joinClassNames = _interopRequireDefault(require("../.utils/joinClassNames"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Label(_ref) {
  var children = _ref.children,
    className = _ref.className,
    mini = _ref.mini;
  return /*#__PURE__*/_react["default"].createElement("p", {
    className: (0, _joinClassNames["default"])("dsa-label", mini ? "dsa-label-mini" : undefined, className)
  }, children);
}
Label.defaultProps = {
  className: undefined,
  mini: false
};
Label.propTypes = {
  className: _propTypes["default"].string,
  mini: _propTypes["default"].bool
};
var _default = Label;
exports["default"] = _default;