"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _joinClassNames = _interopRequireDefault(require("../.utils/joinClassNames"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function BodyText(_ref) {
  var children = _ref.children,
    className = _ref.className;
  return /*#__PURE__*/_react["default"].createElement("p", {
    className: (0, _joinClassNames["default"])("dsa-body-text", className)
  }, children);
}
BodyText.defaultProps = {
  className: undefined
};
BodyText.propTypes = {
  className: _propTypes["default"].string
};
var _default = BodyText;
exports["default"] = _default;