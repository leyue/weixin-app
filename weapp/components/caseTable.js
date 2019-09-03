"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  data: {
    autoType: 0,
    manualType: 0,
    regex: /^case_.+_([^.]+).py$/i,
    items: [{
      name: '所有项',
      value: 0,
      checked: true
    }, {
      name: '待确认',
      value: 1
    }, {
      name: '失败项',
      value: 2
    }]
  },
  props: {
    cases: {},
    app: String,
    _id: String
  },
  methods: {
    radioChange: function radioChange() {
      console.log('changed' + this.items.checked.value);
    },
    log: function log() {
      console.log(autoTree);
    },
    handleDownloadLog: function handleDownloadLog(caseValue, online) {
      var path = "http://nats-sh.unisoc.com:30001/nginx/download/logs/test/".concat(this.app, "_").concat(this._id, "/").concat(online ? 'online' : 'offline').concat(caseValue.log.httpUri);
      var me = this.app;
      wx.downloadFile({
        url: path,
        success: function success(res) {
          console.log('下载log成功');
          console.log(res);
        }
      });
    }
  },
  computed: {
    autoAllTree: function autoAllTree() {
      var tree = {};
      if (this.cases == null) return tree;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.cases.online[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;

          if (tree[item.module] === undefined) {
            tree[item.module] = {};
          }

          if (tree[item.module][item.category] === undefined) {
            tree[item.module][item.category] = {
              caseList: []
            };
          }

          tree[item.module][item.category].caseList.push(item);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return tree;
    },
    autoToConfirmTree: function autoToConfirmTree() {
      var tree = {};
      if (this.cases == null) return tree;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.cases.online[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var item = _step2.value;
          var name = item.status1.name;
          var doName = item.status1.doName;

          if (!(name === 'failed' && doName === 'NA')) {
            continue;
          }

          if (tree[item.module] === undefined) {
            tree[item.module] = {};
          }

          if (tree[item.module][item.category] === undefined) {
            tree[item.module][item.category] = {
              caseList: []
            };
          }

          tree[item.module][item.category].caseList.push(item);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return tree;
    },
    autoFailTree: function autoFailTree() {
      var tree = {};
      if (this.cases == null) return tree;
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.cases.online[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var item = _step3.value;
          var doName = item.status1.doName;

          if (doName !== 'failed') {
            continue;
          }

          if (tree[item.module] === undefined) {
            tree[item.module] = {};
          }

          if (tree[item.module][item.category] === undefined) {
            tree[item.module][item.category] = {
              caseList: []
            };
          }

          tree[item.module][item.category].caseList.push(item);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return tree;
    },
    manualAllTree: function manualAllTree() {
      var tree = {};
      if (this.cases == null) return tree;
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = this.cases.offline[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var item = _step4.value;

          if (tree[item.module] === undefined) {
            tree[item.module] = {};
          }

          if (tree[item.module][item.category] === undefined) {
            tree[item.module][item.category] = {};
          }

          if (tree[item.module][item.category][item.caseSet] === undefined) {
            tree[item.module][item.category][item.caseSet] = {
              caseList: []
            };
          }

          tree[item.module][item.category][item.caseSet].caseList.push(item);
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
            _iterator4["return"]();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      return tree;
    },
    manualToConfirmTree: function manualToConfirmTree() {
      var tree = {};
      if (this.cases == null) return tree;
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = this.cases.offline[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var item = _step5.value;
          var name = item.status1.name;
          var doName = item.status1.doName;

          if (!(name === 'failed' && doName === 'NA')) {
            continue;
          }

          if (tree[item.module] === undefined) {
            tree[item.module] = {};
          }

          if (tree[item.module][item.category] === undefined) {
            tree[item.module][item.category] = {};
          }

          if (tree[item.module][item.category][item.caseSet] === undefined) {
            tree[item.module][item.category][item.caseSet] = {
              caseList: []
            };
          }

          tree[item.module][item.category][item.caseSet].caseList.push(item);
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
            _iterator5["return"]();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }

      return tree;
    },
    manualToTestTree: function manualToTestTree() {
      var tree = {};
      if (this.cases == null) return tree;
      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = this.cases.offline[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var item = _step6.value;
          var name = item.status1.name;

          if (name === 'failed' || name === 'passed') {
            continue;
          }

          if (tree[item.module] === undefined) {
            tree[item.module] = {};
          }

          if (tree[item.module][item.category] === undefined) {
            tree[item.module][item.category] = {};
          }

          if (tree[item.module][item.category][item.caseSet] === undefined) {
            tree[item.module][item.category][item.caseSet] = {
              caseList: []
            };
          }

          tree[item.module][item.category][item.caseSet].caseList.push(item);
        }
      } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
            _iterator6["return"]();
          }
        } finally {
          if (_didIteratorError6) {
            throw _iteratorError6;
          }
        }
      }

      return tree;
    },
    manualFailTree: function manualFailTree() {
      var tree = {};
      if (this.cases == null) return tree;
      var _iteratorNormalCompletion7 = true;
      var _didIteratorError7 = false;
      var _iteratorError7 = undefined;

      try {
        for (var _iterator7 = this.cases.offline[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
          var item = _step7.value;
          var doName = item.status1.doName;

          if (doName !== 'failed') {
            continue;
          }

          if (tree[item.module] === undefined) {
            tree[item.module] = {};
          }

          if (tree[item.module][item.category] === undefined) {
            tree[item.module][item.category] = {};
          }

          if (tree[item.module][item.category][item.caseSet] === undefined) {
            tree[item.module][item.category][item.caseSet] = {
              caseList: []
            };
          }

          tree[item.module][item.category][item.caseSet].caseList.push(item);
        }
      } catch (err) {
        _didIteratorError7 = true;
        _iteratorError7 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
            _iterator7["return"]();
          }
        } finally {
          if (_didIteratorError7) {
            throw _iteratorError7;
          }
        }
      }

      return tree;
    },
    autoTree: function autoTree() {
      switch (this.autoType) {
        case 0:
        case '0':
          return this.autoAllTree;

        case 1:
        case '1':
          return this.autoToConfirmTree;

        case 2:
        case '2':
          return this.autoFailTree;

        default:
          return {};
      }
    },
    manualTree: function manualTree() {
      switch (this.manualType) {
        case 0:
          return this.manualAllTree;

        case 1:
          return this.manualToConfirmTree;

        case 2:
          return this.manualFailTree;

        case 3:
          return this.manualToTestTree;

        default:
          return {};
      }
    }
  }
}, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (caseValue) {
    
    var _vm=this;
      return (function () {
        _vm.handleDownloadLog(caseValue, true)
      })();
    
  }}}, models: {'0': {
      type: "change",
      expr: "autoType",
      handler: function set ($v) {
      var _vm=this;
        _vm.autoType = $v;
      
    }
    }} });