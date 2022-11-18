"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TabMenuItem = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _joinClassNames = _interopRequireDefault(require("../.utils/joinClassNames"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function TabMenu(_ref) {
  var children = _ref.children,
    className = _ref.className;
  return /*#__PURE__*/_react["default"].createElement("ul", {
    className: (0, _joinClassNames["default"])("dsa-tab-menu", className)
  }, children);
}
TabMenu.defaultProps = {
  className: undefined
};
TabMenu.propTypes = {
  className: _propTypes["default"].string
};
var TabMenuItem = function TabMenuItem(_ref2) {
  var children = _ref2.children,
    active = _ref2.active,
    className = _ref2.className;
  return /*#__PURE__*/_react["default"].createElement("li", {
    className: (0, _joinClassNames["default"])("dsa-tab-menu-item", active ? "dsa-tab-menu-active" : undefined, className)
  }, children);
};
exports.TabMenuItem = TabMenuItem;
TabMenuItem.defaultProps = {
  className: undefined,
  active: false
};
TabMenuItem.propTypes = {
  className: _propTypes["default"].string,
  active: _propTypes["default"].bool
};
var _default = TabMenu;
exports["default"] = _default;