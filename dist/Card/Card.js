"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CardToolbar = exports.CardTitle = exports.CardSecondaryMenu = exports.CardExpandableContent = exports.CardContent = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _joinClassNames = _interopRequireDefault(require("../.utils/joinClassNames"));
var _ChevronDown = _interopRequireDefault(require("../Feather/ChevronDown"));
var _ChevronUp = _interopRequireDefault(require("../Feather/ChevronUp"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CardTitle = function CardTitle(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "dsa-card-title"
  }, children);
};
exports.CardTitle = CardTitle;
var CardToolbar = function CardToolbar(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "dsa-card-toolbar"
  }, children);
};
exports.CardToolbar = CardToolbar;
var CardContent = function CardContent(_ref3) {
  var children = _ref3.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "dsa-card-main"
  }, children);
};
exports.CardContent = CardContent;
var CardExpandableContent = function CardExpandableContent(_ref4) {
  var children = _ref4.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "dsa-card-expandable-content"
  }, children);
};
exports.CardExpandableContent = CardExpandableContent;
var CardSecondaryMenu = function CardSecondaryMenu(_ref5) {
  var children = _ref5.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "dsa-card-secondary-menu"
  }, children);
};
exports.CardSecondaryMenu = CardSecondaryMenu;
function Card(_ref6) {
  var children = _ref6.children,
    className = _ref6.className,
    expandable = _ref6.expandable,
    expandedByDefault = _ref6.expandedByDefault;
  var _useState = (0, _react.useState)(expandedByDefault),
    _useState2 = _slicedToArray(_useState, 2),
    expanded = _useState2[0],
    setExpanded = _useState2[1];
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _joinClassNames["default"])("dsa-card", className)
  }, expandable && /*#__PURE__*/_react["default"].createElement("button", {
    className: (0, _joinClassNames["default"])("dsa-card-expander", expanded ? "dsa-card-expanded" : undefined),
    "aria-expanded": expanded ? "true" : "false",
    onClick: function onClick() {
      setExpanded(!expanded);
    }
  }, expanded ? /*#__PURE__*/_react["default"].createElement(_ChevronUp["default"], {
    size: "1.5rem"
  }) : /*#__PURE__*/_react["default"].createElement(_ChevronDown["default"], {
    size: "1.5rem"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _joinClassNames["default"])("dsa-card-content", !expandable ? "dsa-card-content-border" : undefined, !expanded ? "dsa-card-hidden" : undefined)
  }, children));
}
Card.defaultProps = {
  className: undefined,
  expandable: false,
  expandedByDefault: false
};
Card.propTypes = {
  className: _propTypes["default"].string,
  expandable: _propTypes["default"].bool,
  expandedByDefault: _propTypes["default"].bool
};
var _default = Card;
exports["default"] = _default;