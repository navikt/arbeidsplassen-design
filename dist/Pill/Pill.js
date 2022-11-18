"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _joinClassNames = _interopRequireDefault(require("../.utils/joinClassNames"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Pill = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    onClick = _ref.onClick;
  return /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "dsa-pill-screen-reader-only"
  }, children), /*#__PURE__*/_react["default"].createElement("button", {
    ref: ref,
    className: (0, _joinClassNames["default"])("dsa-pill", className),
    "aria-label": "Slett ".concat(children),
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement("span", {
    "aria-hidden": "true"
  }, children), /*#__PURE__*/_react["default"].createElement("svg", {
    role: "img",
    "aria-hidden": "true",
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.5896 4.4107C15.915 4.73614 15.915 5.26378 15.5896 5.58921L5.58958 15.5892C5.26414 15.9147 4.73651 15.9147 4.41107 15.5892C4.08563 15.2638 4.08563 14.7361 4.41107 14.4107L14.4111 4.4107C14.7365 4.08527 15.2641 4.08527 15.5896 4.4107Z",
    fill: "currentColor"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.41107 4.4107C4.73651 4.08527 5.26414 4.08527 5.58958 4.4107L15.5896 14.4107C15.915 14.7361 15.915 15.2638 15.5896 15.5892C15.2641 15.9147 14.7365 15.9147 14.4111 15.5892L4.41107 5.58921C4.08563 5.26378 4.08563 4.73614 4.41107 4.4107Z",
    fill: "currentColor"
  }))));
});
Pill.defaultProps = {
  className: undefined
};
Pill.propTypes = {
  className: _propTypes["default"].string,
  children: _propTypes["default"].string.isRequired,
  onClick: _propTypes["default"].func.isRequired
};
var _default = Pill;
exports["default"] = _default;