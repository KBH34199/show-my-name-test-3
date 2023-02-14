"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var MyDetails = function MyDetails(props) {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h2", null, "MyDetails"), /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", null, "Address: ", props.address), /*#__PURE__*/_react["default"].createElement("li", null, "Phone#: ", props.contact), /*#__PURE__*/_react["default"].createElement("li", null, "E-Mail: ", props.email), /*#__PURE__*/_react["default"].createElement("li", null, "Linkedln: ", props.url)));
};
var _default = MyDetails;
exports["default"] = _default;