"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _x = _interopRequireDefault(require('../vendor.js')(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = new _x["default"].Store({
  state: {
    token: '',
    name: '',
    pwd: ''
  },
  mutations: {
    setToken: function setToken(state, payload) {
      state.token = payload.token;
    }
  }
});

exports["default"] = _default;