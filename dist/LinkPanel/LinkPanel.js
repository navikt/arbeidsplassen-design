"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.LinkPanelTitle = exports.LinkPanelDescription = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _joinClassNames = _interopRequireDefault(require("../.utils/joinClassNames"));
var _ChevronRight = _interopRequireDefault(require("../Feather/ChevronRight"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var LinkPanel = /*#__PURE__*/_react["default"].forwardRef(function LinkPanel(_ref, ref) {
  var onClick = _ref.onClick,
    href = _ref.href,
    children = _ref.children,
    className = _ref.className,
    color = _ref.color,
    size = _ref.size;
  return /*#__PURE__*/_react["default"].createElement("a", {
    className: (0, _joinClassNames["default"])("dsa-link-panel", "dsa-link-panel-".concat(color), "dsa-link-panel-".concat(size), className),
    href: href,
    ref: ref,
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "dsa-link-panel-content"
  }, children), /*#__PURE__*/_react["default"].createElement("div", {
    className: "dsa-link-panel-icon"
  }, /*#__PURE__*/_react["default"].createElement(_ChevronRight["default"], {
    size: size === "small" ? "1.5rem" : "2rem"
  })));
});
var LinkPanelDescription = function LinkPanelDescription(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "dsa-link-panel-description"
  }, children);
};
exports.LinkPanelDescription = LinkPanelDescription;
var LinkPanelTitle = function LinkPanelTitle(_ref3) {
  var children = _ref3.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "dsa-link-panel-title"
  }, children);
};
exports.LinkPanelTitle = LinkPanelTitle;
LinkPanel.defaultProps = {
  className: undefined,
  color: "orange",
  size: "small"
};
LinkPanel.propTypes = {
  className: _propTypes["default"].string,
  color: _propTypes["default"].oneOf(["dark-green", "light-green", "blue", "orange"]),
  size: _propTypes["default"].oneOf(["small", "large"])
};
var _default = LinkPanel;
exports["default"] = _default;