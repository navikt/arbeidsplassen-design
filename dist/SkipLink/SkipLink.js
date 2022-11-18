"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function SkipLink(_ref) {
  var href = _ref.href;
  return /*#__PURE__*/_react["default"].createElement("a", {
    className: "dsa-skip-link",
    href: href
  }, "G\xE5 til hovedinnhold");
}
SkipLink.propTypes = {
  href: _propTypes["default"].string.isRequired
};
var _default = SkipLink;
exports["default"] = _default;