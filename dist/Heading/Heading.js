"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _joinClassNames = _interopRequireDefault(require("../.utils/joinClassNames"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Heading(_ref) {
  var level = _ref.level,
    size = _ref.size,
    children = _ref.children,
    className = _ref.className,
    id = _ref.id;
  var defaultSizes = ["xxlarge", "xlarge", "large", "medium", "small", "xsmall"];
  var HeadingLevel = "h" + level;
  if (!size) {
    size = defaultSizes[parseInt(level) - 1];
  }
  return /*#__PURE__*/_react["default"].createElement(HeadingLevel, {
    id: id,
    className: (0, _joinClassNames["default"])("dsa-heading", "dsa-heading-".concat(size), className)
  }, children);
}
Heading.defaultProps = {
  id: undefined,
  size: undefined,
  className: undefined
};
Heading.propTypes = {
  id: _propTypes["default"].string,
  level: _propTypes["default"].oneOf(["1", "2", "3", "4", "5", "6"]).isRequired,
  size: _propTypes["default"].oneOf(["xxlarge", "xlarge", "large", "medium", "small", "xsmall"]),
  className: _propTypes["default"].string
};
var _default = Heading;
exports["default"] = _default;