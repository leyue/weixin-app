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
  data: {
    name: 'root',
    pwd: '123456780',
    token: '',
    app: {
      project: '',
      type: '',
      priority: 2,
      requirement: '',
      archive: {
        cases: {
          online: [],
          offline: []
        },
        report: {
          module: []
        }
      },
      status: {
        name: ''
      },
      depend: {
        pac0: ''
      }
    },
    priorities: {
      0: '最低',
      1: '低',
      2: '中等',
      3: '高',
      4: '最高',
      10: '最低 已提升',
      11: '低 已提升',
      12: '中等 已提升',
      13: '高 已提升',
      14: '最高 已提升'
    }
  },
  computed: _objectSpread({}, (0, _x.mapState)(['token'])),
  methods: _objectSpread({}, (0, _x.mapMutations)(['setToken'])),
  onLoad: function onLoad(options) {
    var me = this; // 回調函數中this的指代意義不同

    wx.request({
      url: // 'http://nats-sh.unisoc.com:30001/app/task/SWVPT201906040922313972',
      'http://nats-sh.unisoc.com:30001/app/task/SWVTT20180727153035bad6',
      header: {
        'content-type': 'application/json',
        Authorization: 'Bearer ' + _store["default"].state.token
      },
      method: 'GET',
      success: function success(res) {
        me.app = res.data[0];
        console.log(me.app);
      }
    });
  }
}, {info: {"components":{"basicInfo":{"path":"..\\components\\basicInfo"},"modulesTable":{"path":"..\\components\\modulesTable"},"categoryTable":{"path":"..\\components\\categoryTable"},"toolTable":{"path":"..\\components\\toolTable"},"caseTable":{"path":"..\\components\\caseTable"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"basicInfo":{"path":"..\\components\\basicInfo"},"modulesTable":{"path":"..\\components\\modulesTable"},"categoryTable":{"path":"..\\components\\categoryTable"},"toolTable":{"path":"..\\components\\toolTable"},"caseTable":{"path":"..\\components\\caseTable"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"basicInfo":{"path":"..\\components\\basicInfo"},"modulesTable":{"path":"..\\components\\modulesTable"},"categoryTable":{"path":"..\\components\\categoryTable"},"toolTable":{"path":"..\\components\\toolTable"},"caseTable":{"path":"..\\components\\caseTable"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"basicInfo":{"path":"..\\components\\basicInfo"},"modulesTable":{"path":"..\\components\\modulesTable"},"categoryTable":{"path":"..\\components\\categoryTable"},"toolTable":{"path":"..\\components\\toolTable"},"caseTable":{"path":"..\\components\\caseTable"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"basicInfo":{"path":"..\\components\\basicInfo"},"modulesTable":{"path":"..\\components\\modulesTable"},"categoryTable":{"path":"..\\components\\categoryTable"},"toolTable":{"path":"..\\components\\toolTable"},"caseTable":{"path":"..\\components\\caseTable"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"basicInfo":{"path":"..\\components\\basicInfo"},"modulesTable":{"path":"..\\components\\modulesTable"},"categoryTable":{"path":"..\\components\\categoryTable"},"toolTable":{"path":"..\\components\\toolTable"},"caseTable":{"path":"..\\components\\caseTable"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"basicInfo":{"path":"..\\components\\basicInfo"},"modulesTable":{"path":"..\\components\\modulesTable"},"categoryTable":{"path":"..\\components\\categoryTable"},"toolTable":{"path":"..\\components\\toolTable"},"caseTable":{"path":"..\\components\\caseTable"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"basicInfo":{"path":"..\\components\\basicInfo"},"modulesTable":{"path":"..\\components\\modulesTable"},"categoryTable":{"path":"..\\components\\categoryTable"},"toolTable":{"path":"..\\components\\toolTable"},"caseTable":{"path":"..\\components\\caseTable"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"basicInfo":{"path":"..\\components\\basicInfo"},"modulesTable":{"path":"..\\components\\modulesTable"},"categoryTable":{"path":"..\\components\\categoryTable"},"toolTable":{"path":"..\\components\\toolTable"},"caseTable":{"path":"..\\components\\caseTable"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"basicInfo":{"path":"..\\components\\basicInfo"},"modulesTable":{"path":"..\\components\\modulesTable"},"categoryTable":{"path":"..\\components\\categoryTable"},"toolTable":{"path":"..\\components\\toolTable"},"caseTable":{"path":"..\\components\\caseTable"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"basicInfo":{"path":"..\\components\\basicInfo"},"modulesTable":{"path":"..\\components\\modulesTable"},"categoryTable":{"path":"..\\components\\categoryTable"},"toolTable":{"path":"..\\components\\toolTable"},"caseTable":{"path":"..\\components\\caseTable"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"basicInfo":{"path":"..\\components\\basicInfo"},"modulesTable":{"path":"..\\components\\modulesTable"},"categoryTable":{"path":"..\\components\\categoryTable"},"toolTable":{"path":"..\\components\\toolTable"},"caseTable":{"path":"..\\components\\caseTable"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"basicInfo":{"path":"..\\components\\basicInfo"},"modulesTable":{"path":"..\\components\\modulesTable"},"categoryTable":{"path":"..\\components\\categoryTable"},"toolTable":{"path":"..\\components\\toolTable"},"caseTable":{"path":"..\\components\\caseTable"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"basicInfo":{"path":"..\\components\\basicInfo"},"modulesTable":{"path":"..\\components\\modulesTable"},"categoryTable":{"path":"..\\components\\categoryTable"},"toolTable":{"path":"..\\components\\toolTable"},"caseTable":{"path":"..\\components\\caseTable"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"basicInfo":{"path":"..\\components\\basicInfo"},"modulesTable":{"path":"..\\components\\modulesTable"},"categoryTable":{"path":"..\\components\\categoryTable"},"toolTable":{"path":"..\\components\\toolTable"},"caseTable":{"path":"..\\components\\caseTable"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"basicInfo":{"path":"..\\components\\basicInfo"},"modulesTable":{"path":"..\\components\\modulesTable"},"categoryTable":{"path":"..\\components\\categoryTable"},"toolTable":{"path":"..\\components\\toolTable"},"caseTable":{"path":"..\\components\\caseTable"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"basicInfo":{"path":"..\\components\\basicInfo"},"modulesTable":{"path":"..\\components\\modulesTable"},"categoryTable":{"path":"..\\components\\categoryTable"},"toolTable":{"path":"..\\components\\toolTable"},"caseTable":{"path":"..\\components\\caseTable"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"basicInfo":{"path":"..\\components\\basicInfo"},"modulesTable":{"path":"..\\components\\modulesTable"},"categoryTable":{"path":"..\\components\\categoryTable"},"toolTable":{"path":"..\\components\\toolTable"},"caseTable":{"path":"..\\components\\caseTable"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"basicInfo":{"path":"..\\components\\basicInfo"},"modulesTable":{"path":"..\\components\\modulesTable"},"categoryTable":{"path":"..\\components\\categoryTable"},"toolTable":{"path":"..\\components\\toolTable"},"caseTable":{"path":"..\\components\\caseTable"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"basicInfo":{"path":"..\\components\\basicInfo"},"modulesTable":{"path":"..\\components\\modulesTable"},"categoryTable":{"path":"..\\components\\categoryTable"},"toolTable":{"path":"..\\components\\toolTable"},"caseTable":{"path":"..\\components\\caseTable"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"basicInfo":{"path":"..\\components\\basicInfo"},"modulesTable":{"path":"..\\components\\modulesTable"},"categoryTable":{"path":"..\\components\\categoryTable"},"toolTable":{"path":"..\\components\\toolTable"},"caseTable":{"path":"..\\components\\caseTable"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"basicInfo":{"path":"..\\components\\basicInfo"},"modulesTable":{"path":"..\\components\\modulesTable"},"categoryTable":{"path":"..\\components\\categoryTable"},"toolTable":{"path":"..\\components\\toolTable"},"caseTable":{"path":"..\\components\\caseTable"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"basicInfo":{"path":"..\\components\\basicInfo"},"modulesTable":{"path":"..\\components\\modulesTable"},"categoryTable":{"path":"..\\components\\categoryTable"},"toolTable":{"path":"..\\components\\toolTable"},"caseTable":{"path":"..\\components\\caseTable"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"basicInfo":{"path":"..\\components\\basicInfo"},"modulesTable":{"path":"..\\components\\modulesTable"},"categoryTable":{"path":"..\\components\\categoryTable"},"toolTable":{"path":"..\\components\\toolTable"},"caseTable":{"path":"..\\components\\caseTable"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"basicInfo":{"path":"..\\components\\basicInfo"},"modulesTable":{"path":"..\\components\\modulesTable"},"categoryTable":{"path":"..\\components\\categoryTable"},"toolTable":{"path":"..\\components\\toolTable"},"caseTable":{"path":"..\\components\\caseTable"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"basicInfo":{"path":"..\\components\\basicInfo"},"modulesTable":{"path":"..\\components\\modulesTable"},"categoryTable":{"path":"..\\components\\categoryTable"},"toolTable":{"path":"..\\components\\toolTable"},"caseTable":{"path":"..\\components\\caseTable"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"basicInfo":{"path":"..\\components\\basicInfo"},"modulesTable":{"path":"..\\components\\modulesTable"},"categoryTable":{"path":"..\\components\\categoryTable"},"toolTable":{"path":"..\\components\\toolTable"},"caseTable":{"path":"..\\components\\caseTable"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"basicInfo":{"path":"..\\components\\basicInfo"},"modulesTable":{"path":"..\\components\\modulesTable"},"categoryTable":{"path":"..\\components\\categoryTable"},"toolTable":{"path":"..\\components\\toolTable"},"caseTable":{"path":"..\\components\\caseTable"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"basicInfo":{"path":"..\\components\\basicInfo"},"modulesTable":{"path":"..\\components\\modulesTable"},"categoryTable":{"path":"..\\components\\categoryTable"},"toolTable":{"path":"..\\components\\toolTable"},"caseTable":{"path":"..\\components\\caseTable"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"basicInfo":{"path":"..\\components\\basicInfo"},"modulesTable":{"path":"..\\components\\modulesTable"},"categoryTable":{"path":"..\\components\\categoryTable"},"toolTable":{"path":"..\\components\\toolTable"},"caseTable":{"path":"..\\components\\caseTable"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"basicInfo":{"path":"..\\components\\basicInfo"},"modulesTable":{"path":"..\\components\\modulesTable"},"categoryTable":{"path":"..\\components\\categoryTable"},"toolTable":{"path":"..\\components\\toolTable"},"caseTable":{"path":"..\\components\\caseTable"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"basicInfo":{"path":"..\\components\\basicInfo"},"modulesTable":{"path":"..\\components\\modulesTable"},"categoryTable":{"path":"..\\components\\categoryTable"},"toolTable":{"path":"..\\components\\toolTable"},"caseTable":{"path":"..\\components\\caseTable"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"basicInfo":{"path":"..\\components\\basicInfo"},"modulesTable":{"path":"..\\components\\modulesTable"},"categoryTable":{"path":"..\\components\\categoryTable"},"toolTable":{"path":"..\\components\\toolTable"},"caseTable":{"path":"..\\components\\caseTable"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"basicInfo":{"path":"..\\components\\basicInfo"},"modulesTable":{"path":"..\\components\\modulesTable"},"categoryTable":{"path":"..\\components\\categoryTable"},"toolTable":{"path":"..\\components\\toolTable"},"caseTable":{"path":"..\\components\\caseTable"}},"on":{}}, handlers: {}, models: {} });