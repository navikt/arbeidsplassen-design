"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function joinClassNames() {
  for (var _len = arguments.length, strings = new Array(_len), _key = 0; _key < _len; _key++) {
    strings[_key] = arguments[_key];
  }
  return strings.filter(function (x) {
    return typeof x === "string" && x.length > 0;
  }).join(" ");
}
var _default = joinClassNames;
exports["default"] = _default;