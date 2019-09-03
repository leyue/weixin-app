"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _store = _interopRequireDefault(require('../store/index.js'));

var _x = require('../vendor.js')(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_core["default"].page({
  store: _store["default"],
  computed: _objectSpread({}, (0, _x.mapState)(['token'])),
  methods: _objectSpread({}, (0, _x.mapMutations)(['setToken']), {
    onGotUserInfo: function onGotUserInfo(e) {
      console.log(e.$wx.detail.rawData);
    },
    Login: function Login() {
      var me = this;
      wx.login({
        success: function success(res) {
          if (res.code) {
            //发起网络请求
            wx.request({
              url: 'http://nats-sh.unisoc.com:30001/app/session',
              data: {
                name: 'root',
                pwd: '123456780'
              },
              header: {
                'content-type': 'application/json'
              },
              method: 'POST',
              success: function success(res) {
                _store["default"].commit({
                  type: 'setToken',
                  token: res.data.token
                });

                me.$navigate({
                  url: "main"
                });
              }
            });
          } else {
            console.log('登录失败！' + res.errMsg);
          }
        }
      });
    }
  })
}, {info: {"components":{},"on":{}}, handlers: {'5-76': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onGotUserInfo($event)
      })();
    
  }, "tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.Login($event)
      })();
    
  }}}, models: {} });