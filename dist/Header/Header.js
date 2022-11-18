"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderVariant = exports.HeaderRoutes = exports.HeaderAuthenticationStatus = void 0;
exports["default"] = Header;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Logo = _interopRequireDefault(require("./Logo"));
var _PersonCompanyMenu = _interopRequireDefault(require("./PersonCompanyMenu"));
var _MenuButton = _interopRequireDefault(require("./MenuButton"));
var _LoginButton = _interopRequireDefault(require("./LoginButton"));
var _PersonMenu = _interopRequireDefault(require("./PersonMenu"));
var _CompanyMenu = _interopRequireDefault(require("./CompanyMenu"));
var _LoggedInUser = _interopRequireDefault(require("./LoggedInUser"));
var _joinClassNames = _interopRequireDefault(require("../.utils/joinClassNames"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var HeaderAuthenticationStatus = {
  UNKNOWN: "UNKNOWN",
  IS_AUTHENTICATED: "IS_AUTHENTICATED",
  NOT_AUTHENTICATED: "NOT_AUTHENTICATED"
};
exports.HeaderAuthenticationStatus = HeaderAuthenticationStatus;
var HeaderVariant = {
  ALL: "ALL",
  PERSON: "PERSON",
  COMPANY: "COMPANY"
};
exports.HeaderVariant = HeaderVariant;
var HeaderRoutes = {
  PERSON: "PERSON",
  BEDRIFT: "BEDRIFT",
  STILLIGER: "STILLIGER",
  JOBBTREFF: "JOBBTREFF",
  CV: "CV",
  STILLINGSANNONSER: "STILLINGSANNONSER",
  INTERESSEMELDIGER: "INTERESSEMELDIGER",
  KANDIDATLISTER: "KANDIDATLISTER",
  JOBBTREFF_BEDRIFT: "JOBBTREFF_BEDRIFT"
};
exports.HeaderRoutes = HeaderRoutes;
function Header(_ref) {
  var className = _ref.className,
    variant = _ref.variant,
    active = _ref.active,
    userName = _ref.userName,
    companyName = _ref.companyName,
    authenticationStatus = _ref.authenticationStatus,
    onLogin = _ref.onLogin,
    onLogout = _ref.onLogout;
  var _useState = (0, _react.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    isMobileMenuHidden = _useState2[0],
    setIsMobileMenuHidden = _useState2[1];
  var toggleMenu = function toggleMenu() {
    setIsMobileMenuHidden(function (prevState) {
      return !prevState;
    });
  };
  return /*#__PURE__*/_react["default"].createElement("header", {
    className: "dsa-header-wrapper dsa-container"
  }, /*#__PURE__*/_react["default"].createElement("nav", {
    "aria-label": "Hovedmeny",
    className: (0, _joinClassNames["default"])("dsa-header", className)
  }, /*#__PURE__*/_react["default"].createElement(_Logo["default"], null), variant === HeaderVariant.ALL ? /*#__PURE__*/_react["default"].createElement(_PersonCompanyMenu["default"], {
    active: active
  }) : /*#__PURE__*/_react["default"].createElement(_MenuButton["default"], {
    toggleMenu: toggleMenu,
    isMobileMenuHidden: isMobileMenuHidden
  }), variant === HeaderVariant.ALL ? /*#__PURE__*/_react["default"].createElement(_LoginButton["default"], {
    authenticationStatus: authenticationStatus,
    handleLogInClick: onLogin,
    handleLogOutClick: onLogout
  }) : /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _joinClassNames["default"])("dsa-header-menu", isMobileMenuHidden ? "dsa-header-menu-hidden" : undefined)
  }, variant === HeaderVariant.PERSON && /*#__PURE__*/_react["default"].createElement(_PersonMenu["default"], {
    active: active
  }), variant === HeaderVariant.COMPANY && /*#__PURE__*/_react["default"].createElement(_CompanyMenu["default"], {
    active: active
  }), authenticationStatus === HeaderAuthenticationStatus.IS_AUTHENTICATED && /*#__PURE__*/_react["default"].createElement(_LoggedInUser["default"], {
    variant: variant,
    userName: userName,
    companyName: companyName
  }), variant !== HeaderVariant.ALL && /*#__PURE__*/_react["default"].createElement(_LoginButton["default"], {
    authenticationStatus: authenticationStatus,
    handleLogInClick: onLogin,
    handleLogOutClick: onLogout
  }))));
}
Header.defaultProps = {
  variant: HeaderVariant.ALL,
  active: undefined,
  authenticationStatus: HeaderAuthenticationStatus.UNKNOWN,
  userName: undefined,
  companyName: undefined
};
Header.propTypes = {
  onLogin: _propTypes["default"].func.isRequired,
  onLogout: _propTypes["default"].func.isRequired,
  variant: _propTypes["default"].oneOf(Object.keys(HeaderVariant)),
  authenticationStatus: _propTypes["default"].oneOf(Object.keys(HeaderAuthenticationStatus)),
  userName: _propTypes["default"].string,
  companyName: _propTypes["default"].string,
  active: _propTypes["default"].oneOf(Object.keys(HeaderRoutes))
};