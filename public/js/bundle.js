// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === "function" && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({
  1039: [function (require, module, exports) {

    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
    var global = module.exports = typeof window != 'undefined' && window.Math == Math
      ? window : typeof self != 'undefined' && self.Math == Math ? self
        // eslint-disable-next-line no-new-func
        : Function('return this')();
    if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

  }, {}], 1056: [function (require, module, exports) {
    var hasOwnProperty = {}.hasOwnProperty;
    module.exports = function (it, key) {
      return hasOwnProperty.call(it, key);
    };

  }, {}], 1075: [function (require, module, exports) {
    module.exports = function (exec) {
      try {
        return !!exec();
      } catch (e) {
        return true;
      }
    };

  }, {}], 1057: [function (require, module, exports) {
    // Thank's IE8 for his funny defineProperty
    module.exports = !require('./_fails')(function () {
      return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
    });

  }, { "./_fails": 1075 }], 870: [function (require, module, exports) {
    var core = module.exports = { version: '2.6.12' };
    if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

  }, {}], 1072: [function (require, module, exports) {
    module.exports = function (it) {
      return typeof it === 'object' ? it !== null : typeof it === 'function';
    };

  }, {}], 1051: [function (require, module, exports) {
    var isObject = require('./_is-object');
    module.exports = function (it) {
      if (!isObject(it)) throw TypeError(it + ' is not an object!');
      return it;
    };

  }, { "./_is-object": 1072 }], 1138: [function (require, module, exports) {
    var isObject = require('./_is-object');
    var document = require('./_global').document;
    // typeof document.createElement is 'object' in old IE
    var is = isObject(document) && isObject(document.createElement);
    module.exports = function (it) {
      return is ? document.createElement(it) : {};
    };

  }, { "./_is-object": 1072, "./_global": 1039 }], 1058: [function (require, module, exports) {
    module.exports = !require('./_descriptors') && !require('./_fails')(function () {
      return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
    });

  }, { "./_descriptors": 1057, "./_fails": 1075, "./_dom-create": 1138 }], 1054: [function (require, module, exports) {
    // 7.1.1 ToPrimitive(input [, PreferredType])
    var isObject = require('./_is-object');
    // instead of the ES6 spec version, we didn't implement @@toPrimitive case
    // and the second argument - flag - preferred type is a string
    module.exports = function (it, S) {
      if (!isObject(it)) return it;
      var fn, val;
      if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
      if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
      if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
      throw TypeError("Can't convert object to primitive value");
    };

  }, { "./_is-object": 1072 }], 1080: [function (require, module, exports) {
    var anObject = require('./_an-object');
    var IE8_DOM_DEFINE = require('./_ie8-dom-define');
    var toPrimitive = require('./_to-primitive');
    var dP = Object.defineProperty;

    exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPrimitive(P, true);
      anObject(Attributes);
      if (IE8_DOM_DEFINE) try {
        return dP(O, P, Attributes);
      } catch (e) { /* empty */ }
      if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
      if ('value' in Attributes) O[P] = Attributes.value;
      return O;
    };

  }, { "./_an-object": 1051, "./_ie8-dom-define": 1058, "./_to-primitive": 1054, "./_descriptors": 1057 }], 1053: [function (require, module, exports) {
    module.exports = function (bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
      };
    };

  }, {}], 1042: [function (require, module, exports) {
    var dP = require('./_object-dp');
    var createDesc = require('./_property-desc');
    module.exports = require('./_descriptors') ? function (object, key, value) {
      return dP.f(object, key, createDesc(1, value));
    } : function (object, key, value) {
      object[key] = value;
      return object;
    };

  }, { "./_object-dp": 1080, "./_property-desc": 1053, "./_descriptors": 1057 }], 1122: [function (require, module, exports) {
    var id = 0;
    var px = Math.random();
    module.exports = function (key) {
      return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
    };

  }, {}], 1061: [function (require, module, exports) {
    module.exports = false;

  }, {}], 1121: [function (require, module, exports) {

    var core = require('./_core');
    var global = require('./_global');
    var SHARED = '__core-js_shared__';
    var store = global[SHARED] || (global[SHARED] = {});

    (module.exports = function (key, value) {
      return store[key] || (store[key] = value !== undefined ? value : {});
    })('versions', []).push({
      version: core.version,
      mode: require('./_library') ? 'pure' : 'global',
      copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
    });

  }, { "./_core": 870, "./_global": 1039, "./_library": 1061 }], 1145: [function (require, module, exports) {
    module.exports = require('./_shared')('native-function-to-string', Function.toString);

  }, { "./_shared": 1121 }], 1074: [function (require, module, exports) {

    var global = require('./_global');
    var hide = require('./_hide');
    var has = require('./_has');
    var SRC = require('./_uid')('src');
    var $toString = require('./_function-to-string');
    var TO_STRING = 'toString';
    var TPL = ('' + $toString).split(TO_STRING);

    require('./_core').inspectSource = function (it) {
      return $toString.call(it);
    };

    (module.exports = function (O, key, val, safe) {
      var isFunction = typeof val == 'function';
      if (isFunction) has(val, 'name') || hide(val, 'name', key);
      if (O[key] === val) return;
      if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
      if (O === global) {
        O[key] = val;
      } else if (!safe) {
        delete O[key];
        hide(O, key, val);
      } else if (O[key]) {
        O[key] = val;
      } else {
        hide(O, key, val);
      }
      // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
    })(Function.prototype, TO_STRING, function toString() {
      return typeof this == 'function' && this[SRC] || $toString.call(this);
    });

  }, { "./_global": 1039, "./_hide": 1042, "./_has": 1056, "./_uid": 1122, "./_function-to-string": 1145, "./_core": 870 }], 887: [function (require, module, exports) {
    module.exports = function (it) {
      if (typeof it != 'function') throw TypeError(it + ' is not a function!');
      return it;
    };

  }, {}], 1062: [function (require, module, exports) {
    // optional / simple context binding
    var aFunction = require('./_a-function');
    module.exports = function (fn, that, length) {
      aFunction(fn);
      if (that === undefined) return fn;
      switch (length) {
        case 1: return function (a) {
          return fn.call(that, a);
        };
        case 2: return function (a, b) {
          return fn.call(that, a, b);
        };
        case 3: return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
      }
      return function (/* ...args */) {
        return fn.apply(that, arguments);
      };
    };

  }, { "./_a-function": 887 }], 882: [function (require, module, exports) {

    var global = require('./_global');
    var core = require('./_core');
    var hide = require('./_hide');
    var redefine = require('./_redefine');
    var ctx = require('./_ctx');
    var PROTOTYPE = 'prototype';

    var $export = function (type, name, source) {
      var IS_FORCED = type & $export.F;
      var IS_GLOBAL = type & $export.G;
      var IS_STATIC = type & $export.S;
      var IS_PROTO = type & $export.P;
      var IS_BIND = type & $export.B;
      var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
      var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
      var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
      var key, own, out, exp;
      if (IS_GLOBAL) source = name;
      for (key in source) {
        // contains in native
        own = !IS_FORCED && target && target[key] !== undefined;
        // export native or passed
        out = (own ? target : source)[key];
        // bind timers to global for call from export context
        exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
        // extend global
        if (target) redefine(target, key, out, type & $export.U);
        // export
        if (exports[key] != out) hide(exports, key, exp);
        if (IS_PROTO && expProto[key] != out) expProto[key] = out;
      }
    };
    global.core = core;
    // type bitmap
    $export.F = 1;   // forced
    $export.G = 2;   // global
    $export.S = 4;   // static
    $export.P = 8;   // proto
    $export.B = 16;  // bind
    $export.W = 32;  // wrap
    $export.U = 64;  // safe
    $export.R = 128; // real proto method for `library`
    module.exports = $export;

  }, { "./_global": 1039, "./_core": 870, "./_hide": 1042, "./_redefine": 1074, "./_ctx": 1062 }], 1091: [function (require, module, exports) {
    var META = require('./_uid')('meta');
    var isObject = require('./_is-object');
    var has = require('./_has');
    var setDesc = require('./_object-dp').f;
    var id = 0;
    var isExtensible = Object.isExtensible || function () {
      return true;
    };
    var FREEZE = !require('./_fails')(function () {
      return isExtensible(Object.preventExtensions({}));
    });
    var setMeta = function (it) {
      setDesc(it, META, {
        value: {
          i: 'O' + ++id, // object ID
          w: {}          // weak collections IDs
        }
      });
    };
    var fastKey = function (it, create) {
      // return primitive with prefix
      if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
      if (!has(it, META)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return 'F';
        // not necessary to add metadata
        if (!create) return 'E';
        // add missing metadata
        setMeta(it);
        // return object ID
      } return it[META].i;
    };
    var getWeak = function (it, create) {
      if (!has(it, META)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return true;
        // not necessary to add metadata
        if (!create) return false;
        // add missing metadata
        setMeta(it);
        // return hash weak collections IDs
      } return it[META].w;
    };
    // add metadata on freeze-family methods calling
    var onFreeze = function (it) {
      if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
      return it;
    };
    var meta = module.exports = {
      KEY: META,
      NEED: false,
      fastKey: fastKey,
      getWeak: getWeak,
      onFreeze: onFreeze
    };

  }, { "./_uid": 1122, "./_is-object": 1072, "./_has": 1056, "./_object-dp": 1080, "./_fails": 1075 }], 1041: [function (require, module, exports) {
    var store = require('./_shared')('wks');
    var uid = require('./_uid');
    var Symbol = require('./_global').Symbol;
    var USE_SYMBOL = typeof Symbol == 'function';

    var $exports = module.exports = function (name) {
      return store[name] || (store[name] =
        USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
    };

    $exports.store = store;

  }, { "./_shared": 1121, "./_uid": 1122, "./_global": 1039 }], 1066: [function (require, module, exports) {
    var def = require('./_object-dp').f;
    var has = require('./_has');
    var TAG = require('./_wks')('toStringTag');

    module.exports = function (it, tag, stat) {
      if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
    };

  }, { "./_object-dp": 1080, "./_has": 1056, "./_wks": 1041 }], 881: [function (require, module, exports) {
    exports.f = require('./_wks');

  }, { "./_wks": 1041 }], 1046: [function (require, module, exports) {

    var global = require('./_global');
    var core = require('./_core');
    var LIBRARY = require('./_library');
    var wksExt = require('./_wks-ext');
    var defineProperty = require('./_object-dp').f;
    module.exports = function (name) {
      var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
      if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
    };

  }, { "./_global": 1039, "./_core": 870, "./_library": 1061, "./_wks-ext": 881, "./_object-dp": 1080 }], 1100: [function (require, module, exports) {
    var toString = {}.toString;

    module.exports = function (it) {
      return toString.call(it).slice(8, -1);
    };

  }, {}], 1078: [function (require, module, exports) {
    // fallback for non-array-like ES3 and non-enumerable old V8 strings
    var cof = require('./_cof');
    // eslint-disable-next-line no-prototype-builtins
    module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
      return cof(it) == 'String' ? it.split('') : Object(it);
    };

  }, { "./_cof": 1100 }], 1043: [function (require, module, exports) {
    // 7.2.1 RequireObjectCoercible(argument)
    module.exports = function (it) {
      if (it == undefined) throw TypeError("Can't call method on  " + it);
      return it;
    };

  }, {}], 891: [function (require, module, exports) {
    // to indexed object, toObject with fallback for non-array-like ES3 strings
    var IObject = require('./_iobject');
    var defined = require('./_defined');
    module.exports = function (it) {
      return IObject(defined(it));
    };

  }, { "./_iobject": 1078, "./_defined": 1043 }], 1045: [function (require, module, exports) {
    // 7.1.4 ToInteger
    var ceil = Math.ceil;
    var floor = Math.floor;
    module.exports = function (it) {
      return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
    };

  }, {}], 883: [function (require, module, exports) {
    // 7.1.15 ToLength
    var toInteger = require('./_to-integer');
    var min = Math.min;
    module.exports = function (it) {
      return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
    };

  }, { "./_to-integer": 1045 }], 1077: [function (require, module, exports) {
    var toInteger = require('./_to-integer');
    var max = Math.max;
    var min = Math.min;
    module.exports = function (index, length) {
      index = toInteger(index);
      return index < 0 ? max(index + length, 0) : min(index, length);
    };

  }, { "./_to-integer": 1045 }], 890: [function (require, module, exports) {
    // false -> Array#indexOf
    // true  -> Array#includes
    var toIObject = require('./_to-iobject');
    var toLength = require('./_to-length');
    var toAbsoluteIndex = require('./_to-absolute-index');
    module.exports = function (IS_INCLUDES) {
      return function ($this, el, fromIndex) {
        var O = toIObject($this);
        var length = toLength(O.length);
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare
        if (IS_INCLUDES && el != el) while (length > index) {
          value = O[index++];
          // eslint-disable-next-line no-self-compare
          if (value != value) return true;
          // Array#indexOf ignores holes, Array#includes - not
        } else for (; length > index; index++) if (IS_INCLUDES || index in O) {
          if (O[index] === el) return IS_INCLUDES || index || 0;
        } return !IS_INCLUDES && -1;
      };
    };

  }, { "./_to-iobject": 891, "./_to-length": 883, "./_to-absolute-index": 1077 }], 1141: [function (require, module, exports) {
    var shared = require('./_shared')('keys');
    var uid = require('./_uid');
    module.exports = function (key) {
      return shared[key] || (shared[key] = uid(key));
    };

  }, { "./_shared": 1121, "./_uid": 1122 }], 1136: [function (require, module, exports) {
    var has = require('./_has');
    var toIObject = require('./_to-iobject');
    var arrayIndexOf = require('./_array-includes')(false);
    var IE_PROTO = require('./_shared-key')('IE_PROTO');

    module.exports = function (object, names) {
      var O = toIObject(object);
      var i = 0;
      var result = [];
      var key;
      for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
      // Don't enum bug & hidden keys
      while (names.length > i) if (has(O, key = names[i++])) {
        ~arrayIndexOf(result, key) || result.push(key);
      }
      return result;
    };

  }, { "./_has": 1056, "./_to-iobject": 891, "./_array-includes": 890, "./_shared-key": 1141 }], 1137: [function (require, module, exports) {
    // IE 8- don't enum bug keys
    module.exports = (
      'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
    ).split(',');

  }, {}], 1079: [function (require, module, exports) {
    // 19.1.2.14 / 15.2.3.14 Object.keys(O)
    var $keys = require('./_object-keys-internal');
    var enumBugKeys = require('./_enum-bug-keys');

    module.exports = Object.keys || function keys(O) {
      return $keys(O, enumBugKeys);
    };

  }, { "./_object-keys-internal": 1136, "./_enum-bug-keys": 1137 }], 1050: [function (require, module, exports) {
    exports.f = Object.getOwnPropertySymbols;

  }, {}], 1055: [function (require, module, exports) {
    exports.f = {}.propertyIsEnumerable;

  }, {}], 1123: [function (require, module, exports) {
    // all enumerable object keys, includes symbols
    var getKeys = require('./_object-keys');
    var gOPS = require('./_object-gops');
    var pIE = require('./_object-pie');
    module.exports = function (it) {
      var result = getKeys(it);
      var getSymbols = gOPS.f;
      if (getSymbols) {
        var symbols = getSymbols(it);
        var isEnum = pIE.f;
        var i = 0;
        var key;
        while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
      } return result;
    };

  }, { "./_object-keys": 1079, "./_object-gops": 1050, "./_object-pie": 1055 }], 1073: [function (require, module, exports) {
    // 7.2.2 IsArray(argument)
    var cof = require('./_cof');
    module.exports = Array.isArray || function isArray(arg) {
      return cof(arg) == 'Array';
    };

  }, { "./_cof": 1100 }], 886: [function (require, module, exports) {
    // 7.1.13 ToObject(argument)
    var defined = require('./_defined');
    module.exports = function (it) {
      return Object(defined(it));
    };

  }, { "./_defined": 1043 }], 1082: [function (require, module, exports) {
    var dP = require('./_object-dp');
    var anObject = require('./_an-object');
    var getKeys = require('./_object-keys');

    module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties) {
      anObject(O);
      var keys = getKeys(Properties);
      var length = keys.length;
      var i = 0;
      var P;
      while (length > i) dP.f(O, P = keys[i++], Properties[P]);
      return O;
    };

  }, { "./_object-dp": 1080, "./_an-object": 1051, "./_object-keys": 1079, "./_descriptors": 1057 }], 1099: [function (require, module, exports) {
    var document = require('./_global').document;
    module.exports = document && document.documentElement;

  }, { "./_global": 1039 }], 1083: [function (require, module, exports) {
    // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
    var anObject = require('./_an-object');
    var dPs = require('./_object-dps');
    var enumBugKeys = require('./_enum-bug-keys');
    var IE_PROTO = require('./_shared-key')('IE_PROTO');
    var Empty = function () { /* empty */ };
    var PROTOTYPE = 'prototype';

    // Create object with fake `null` prototype: use iframe Object with cleared prototype
    var createDict = function () {
      // Thrash, waste and sodomy: IE GC bug
      var iframe = require('./_dom-create')('iframe');
      var i = enumBugKeys.length;
      var lt = '<';
      var gt = '>';
      var iframeDocument;
      iframe.style.display = 'none';
      require('./_html').appendChild(iframe);
      iframe.src = 'javascript:'; // eslint-disable-line no-script-url
      // createDict = iframe.contentWindow.Object;
      // html.removeChild(iframe);
      iframeDocument = iframe.contentWindow.document;
      iframeDocument.open();
      iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
      iframeDocument.close();
      createDict = iframeDocument.F;
      while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
      return createDict();
    };

    module.exports = Object.create || function create(O, Properties) {
      var result;
      if (O !== null) {
        Empty[PROTOTYPE] = anObject(O);
        result = new Empty();
        Empty[PROTOTYPE] = null;
        // add "__proto__" for Object.getPrototypeOf polyfill
        result[IE_PROTO] = O;
      } else result = createDict();
      return Properties === undefined ? result : dPs(result, Properties);
    };

  }, { "./_an-object": 1051, "./_object-dps": 1082, "./_enum-bug-keys": 1137, "./_shared-key": 1141, "./_dom-create": 1138, "./_html": 1099 }], 1052: [function (require, module, exports) {
    // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
    var $keys = require('./_object-keys-internal');
    var hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return $keys(O, hiddenKeys);
    };

  }, { "./_object-keys-internal": 1136, "./_enum-bug-keys": 1137 }], 1124: [function (require, module, exports) {
    // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
    var toIObject = require('./_to-iobject');
    var gOPN = require('./_object-gopn').f;
    var toString = {}.toString;

    var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
      ? Object.getOwnPropertyNames(window) : [];

    var getWindowNames = function (it) {
      try {
        return gOPN(it);
      } catch (e) {
        return windowNames.slice();
      }
    };

    module.exports.f = function getOwnPropertyNames(it) {
      return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
    };

  }, { "./_to-iobject": 891, "./_object-gopn": 1052 }], 893: [function (require, module, exports) {
    var pIE = require('./_object-pie');
    var createDesc = require('./_property-desc');
    var toIObject = require('./_to-iobject');
    var toPrimitive = require('./_to-primitive');
    var has = require('./_has');
    var IE8_DOM_DEFINE = require('./_ie8-dom-define');
    var gOPD = Object.getOwnPropertyDescriptor;

    exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P) {
      O = toIObject(O);
      P = toPrimitive(P, true);
      if (IE8_DOM_DEFINE) try {
        return gOPD(O, P);
      } catch (e) { /* empty */ }
      if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
    };

  }, { "./_object-pie": 1055, "./_property-desc": 1053, "./_to-iobject": 891, "./_to-primitive": 1054, "./_has": 1056, "./_ie8-dom-define": 1058, "./_descriptors": 1057 }], 898: [function (require, module, exports) {

    'use strict';
    // ECMAScript 6 symbols shim
    var global = require('./_global');
    var has = require('./_has');
    var DESCRIPTORS = require('./_descriptors');
    var $export = require('./_export');
    var redefine = require('./_redefine');
    var META = require('./_meta').KEY;
    var $fails = require('./_fails');
    var shared = require('./_shared');
    var setToStringTag = require('./_set-to-string-tag');
    var uid = require('./_uid');
    var wks = require('./_wks');
    var wksExt = require('./_wks-ext');
    var wksDefine = require('./_wks-define');
    var enumKeys = require('./_enum-keys');
    var isArray = require('./_is-array');
    var anObject = require('./_an-object');
    var isObject = require('./_is-object');
    var toObject = require('./_to-object');
    var toIObject = require('./_to-iobject');
    var toPrimitive = require('./_to-primitive');
    var createDesc = require('./_property-desc');
    var _create = require('./_object-create');
    var gOPNExt = require('./_object-gopn-ext');
    var $GOPD = require('./_object-gopd');
    var $GOPS = require('./_object-gops');
    var $DP = require('./_object-dp');
    var $keys = require('./_object-keys');
    var gOPD = $GOPD.f;
    var dP = $DP.f;
    var gOPN = gOPNExt.f;
    var $Symbol = global.Symbol;
    var $JSON = global.JSON;
    var _stringify = $JSON && $JSON.stringify;
    var PROTOTYPE = 'prototype';
    var HIDDEN = wks('_hidden');
    var TO_PRIMITIVE = wks('toPrimitive');
    var isEnum = {}.propertyIsEnumerable;
    var SymbolRegistry = shared('symbol-registry');
    var AllSymbols = shared('symbols');
    var OPSymbols = shared('op-symbols');
    var ObjectProto = Object[PROTOTYPE];
    var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
    var QObject = global.QObject;
    // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
    var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

    // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
    var setSymbolDesc = DESCRIPTORS && $fails(function () {
      return _create(dP({}, 'a', {
        get: function () { return dP(this, 'a', { value: 7 }).a; }
      })).a != 7;
    }) ? function (it, key, D) {
      var protoDesc = gOPD(ObjectProto, key);
      if (protoDesc) delete ObjectProto[key];
      dP(it, key, D);
      if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
    } : dP;

    var wrap = function (tag) {
      var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
      sym._k = tag;
      return sym;
    };

    var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
      return typeof it == 'symbol';
    } : function (it) {
      return it instanceof $Symbol;
    };

    var $defineProperty = function defineProperty(it, key, D) {
      if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
      anObject(it);
      key = toPrimitive(key, true);
      anObject(D);
      if (has(AllSymbols, key)) {
        if (!D.enumerable) {
          if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
          it[HIDDEN][key] = true;
        } else {
          if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
          D = _create(D, { enumerable: createDesc(0, false) });
        } return setSymbolDesc(it, key, D);
      } return dP(it, key, D);
    };
    var $defineProperties = function defineProperties(it, P) {
      anObject(it);
      var keys = enumKeys(P = toIObject(P));
      var i = 0;
      var l = keys.length;
      var key;
      while (l > i) $defineProperty(it, key = keys[i++], P[key]);
      return it;
    };
    var $create = function create(it, P) {
      return P === undefined ? _create(it) : $defineProperties(_create(it), P);
    };
    var $propertyIsEnumerable = function propertyIsEnumerable(key) {
      var E = isEnum.call(this, key = toPrimitive(key, true));
      if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
      return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
    };
    var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
      it = toIObject(it);
      key = toPrimitive(key, true);
      if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
      var D = gOPD(it, key);
      if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
      return D;
    };
    var $getOwnPropertyNames = function getOwnPropertyNames(it) {
      var names = gOPN(toIObject(it));
      var result = [];
      var i = 0;
      var key;
      while (names.length > i) {
        if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
      } return result;
    };
    var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
      var IS_OP = it === ObjectProto;
      var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
      var result = [];
      var i = 0;
      var key;
      while (names.length > i) {
        if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
      } return result;
    };

    // 19.4.1.1 Symbol([description])
    if (!USE_NATIVE) {
      $Symbol = function Symbol() {
        if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
        var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
        var $set = function (value) {
          if (this === ObjectProto) $set.call(OPSymbols, value);
          if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
          setSymbolDesc(this, tag, createDesc(1, value));
        };
        if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
        return wrap(tag);
      };
      redefine($Symbol[PROTOTYPE], 'toString', function toString() {
        return this._k;
      });

      $GOPD.f = $getOwnPropertyDescriptor;
      $DP.f = $defineProperty;
      require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
      require('./_object-pie').f = $propertyIsEnumerable;
      $GOPS.f = $getOwnPropertySymbols;

      if (DESCRIPTORS && !require('./_library')) {
        redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
      }

      wksExt.f = function (name) {
        return wrap(wks(name));
      };
    }

    $export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

    for (var es6Symbols = (
      // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
      'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
    ).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

    for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

    $export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
      // 19.4.2.1 Symbol.for(key)
      'for': function (key) {
        return has(SymbolRegistry, key += '')
          ? SymbolRegistry[key]
          : SymbolRegistry[key] = $Symbol(key);
      },
      // 19.4.2.5 Symbol.keyFor(sym)
      keyFor: function keyFor(sym) {
        if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
        for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
      },
      useSetter: function () { setter = true; },
      useSimple: function () { setter = false; }
    });

    $export($export.S + $export.F * !USE_NATIVE, 'Object', {
      // 19.1.2.2 Object.create(O [, Properties])
      create: $create,
      // 19.1.2.4 Object.defineProperty(O, P, Attributes)
      defineProperty: $defineProperty,
      // 19.1.2.3 Object.defineProperties(O, Properties)
      defineProperties: $defineProperties,
      // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
      getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
      // 19.1.2.7 Object.getOwnPropertyNames(O)
      getOwnPropertyNames: $getOwnPropertyNames,
      // 19.1.2.8 Object.getOwnPropertySymbols(O)
      getOwnPropertySymbols: $getOwnPropertySymbols
    });

    // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
    // https://bugs.chromium.org/p/v8/issues/detail?id=3443
    var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

    $export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
      getOwnPropertySymbols: function getOwnPropertySymbols(it) {
        return $GOPS.f(toObject(it));
      }
    });

    // 24.3.2 JSON.stringify(value [, replacer [, space]])
    $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
      var S = $Symbol();
      // MS Edge converts symbol values to JSON as {}
      // WebKit converts symbol values to JSON as null
      // V8 throws on boxed symbols
      return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
    })), 'JSON', {
      stringify: function stringify(it) {
        var args = [it];
        var i = 1;
        var replacer, $replacer;
        while (arguments.length > i) args.push(arguments[i++]);
        $replacer = replacer = args[1];
        if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
        if (!isArray(replacer)) replacer = function (key, value) {
          if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
          if (!isSymbol(value)) return value;
        };
        args[1] = replacer;
        return _stringify.apply($JSON, args);
      }
    });

    // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
    $Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
    // 19.4.3.5 Symbol.prototype[@@toStringTag]
    setToStringTag($Symbol, 'Symbol');
    // 20.2.1.9 Math[@@toStringTag]
    setToStringTag(Math, 'Math', true);
    // 24.3.3 JSON[@@toStringTag]
    setToStringTag(global.JSON, 'JSON', true);

  }, { "./_global": 1039, "./_has": 1056, "./_descriptors": 1057, "./_export": 882, "./_redefine": 1074, "./_meta": 1091, "./_fails": 1075, "./_shared": 1121, "./_set-to-string-tag": 1066, "./_uid": 1122, "./_wks": 1041, "./_wks-ext": 881, "./_wks-define": 1046, "./_enum-keys": 1123, "./_is-array": 1073, "./_an-object": 1051, "./_is-object": 1072, "./_to-object": 886, "./_to-iobject": 891, "./_to-primitive": 1054, "./_property-desc": 1053, "./_object-create": 1083, "./_object-gopn-ext": 1124, "./_object-gopd": 893, "./_object-gops": 1050, "./_object-dp": 1080, "./_object-keys": 1079, "./_object-gopn": 1052, "./_object-pie": 1055, "./_library": 1061, "./_hide": 1042 }], 901: [function (require, module, exports) {
    var $export = require('./_export');
    // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
    $export($export.S, 'Object', { create: require('./_object-create') });

  }, { "./_export": 882, "./_object-create": 1083 }], 900: [function (require, module, exports) {
    var $export = require('./_export');
    // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
    $export($export.S + $export.F * !require('./_descriptors'), 'Object', { defineProperty: require('./_object-dp').f });

  }, { "./_export": 882, "./_descriptors": 1057, "./_object-dp": 1080 }], 899: [function (require, module, exports) {
    var $export = require('./_export');
    // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
    $export($export.S + $export.F * !require('./_descriptors'), 'Object', { defineProperties: require('./_object-dps') });

  }, { "./_export": 882, "./_descriptors": 1057, "./_object-dps": 1082 }], 1085: [function (require, module, exports) {
    // most Object methods by ES6 should accept primitives
    var $export = require('./_export');
    var core = require('./_core');
    var fails = require('./_fails');
    module.exports = function (KEY, exec) {
      var fn = (core.Object || {})[KEY] || Object[KEY];
      var exp = {};
      exp[KEY] = exec(fn);
      $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
    };

  }, { "./_export": 882, "./_core": 870, "./_fails": 1075 }], 920: [function (require, module, exports) {
    // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
    var toIObject = require('./_to-iobject');
    var $getOwnPropertyDescriptor = require('./_object-gopd').f;

    require('./_object-sap')('getOwnPropertyDescriptor', function () {
      return function getOwnPropertyDescriptor(it, key) {
        return $getOwnPropertyDescriptor(toIObject(it), key);
      };
    });

  }, { "./_to-iobject": 891, "./_object-gopd": 893, "./_object-sap": 1085 }], 1086: [function (require, module, exports) {
    // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
    var has = require('./_has');
    var toObject = require('./_to-object');
    var IE_PROTO = require('./_shared-key')('IE_PROTO');
    var ObjectProto = Object.prototype;

    module.exports = Object.getPrototypeOf || function (O) {
      O = toObject(O);
      if (has(O, IE_PROTO)) return O[IE_PROTO];
      if (typeof O.constructor == 'function' && O instanceof O.constructor) {
        return O.constructor.prototype;
      } return O instanceof Object ? ObjectProto : null;
    };

  }, { "./_has": 1056, "./_to-object": 886, "./_shared-key": 1141 }], 906: [function (require, module, exports) {
    // 19.1.2.9 Object.getPrototypeOf(O)
    var toObject = require('./_to-object');
    var $getPrototypeOf = require('./_object-gpo');

    require('./_object-sap')('getPrototypeOf', function () {
      return function getPrototypeOf(it) {
        return $getPrototypeOf(toObject(it));
      };
    });

  }, { "./_to-object": 886, "./_object-gpo": 1086, "./_object-sap": 1085 }], 902: [function (require, module, exports) {
    // 19.1.2.14 Object.keys(O)
    var toObject = require('./_to-object');
    var $keys = require('./_object-keys');

    require('./_object-sap')('keys', function () {
      return function keys(it) {
        return $keys(toObject(it));
      };
    });

  }, { "./_to-object": 886, "./_object-keys": 1079, "./_object-sap": 1085 }], 904: [function (require, module, exports) {
    // 19.1.2.7 Object.getOwnPropertyNames(O)
    require('./_object-sap')('getOwnPropertyNames', function () {
      return require('./_object-gopn-ext').f;
    });

  }, { "./_object-sap": 1085, "./_object-gopn-ext": 1124 }], 905: [function (require, module, exports) {
    // 19.1.2.5 Object.freeze(O)
    var isObject = require('./_is-object');
    var meta = require('./_meta').onFreeze;

    require('./_object-sap')('freeze', function ($freeze) {
      return function freeze(it) {
        return $freeze && isObject(it) ? $freeze(meta(it)) : it;
      };
    });

  }, { "./_is-object": 1072, "./_meta": 1091, "./_object-sap": 1085 }], 903: [function (require, module, exports) {
    // 19.1.2.17 Object.seal(O)
    var isObject = require('./_is-object');
    var meta = require('./_meta').onFreeze;

    require('./_object-sap')('seal', function ($seal) {
      return function seal(it) {
        return $seal && isObject(it) ? $seal(meta(it)) : it;
      };
    });

  }, { "./_is-object": 1072, "./_meta": 1091, "./_object-sap": 1085 }], 908: [function (require, module, exports) {
    // 19.1.2.15 Object.preventExtensions(O)
    var isObject = require('./_is-object');
    var meta = require('./_meta').onFreeze;

    require('./_object-sap')('preventExtensions', function ($preventExtensions) {
      return function preventExtensions(it) {
        return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
      };
    });

  }, { "./_is-object": 1072, "./_meta": 1091, "./_object-sap": 1085 }], 907: [function (require, module, exports) {
    // 19.1.2.12 Object.isFrozen(O)
    var isObject = require('./_is-object');

    require('./_object-sap')('isFrozen', function ($isFrozen) {
      return function isFrozen(it) {
        return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
      };
    });

  }, { "./_is-object": 1072, "./_object-sap": 1085 }], 912: [function (require, module, exports) {
    // 19.1.2.13 Object.isSealed(O)
    var isObject = require('./_is-object');

    require('./_object-sap')('isSealed', function ($isSealed) {
      return function isSealed(it) {
        return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
      };
    });

  }, { "./_is-object": 1072, "./_object-sap": 1085 }], 909: [function (require, module, exports) {
    // 19.1.2.11 Object.isExtensible(O)
    var isObject = require('./_is-object');

    require('./_object-sap')('isExtensible', function ($isExtensible) {
      return function isExtensible(it) {
        return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
      };
    });

  }, { "./_is-object": 1072, "./_object-sap": 1085 }], 1092: [function (require, module, exports) {
    'use strict';
    // 19.1.2.1 Object.assign(target, source, ...)
    var DESCRIPTORS = require('./_descriptors');
    var getKeys = require('./_object-keys');
    var gOPS = require('./_object-gops');
    var pIE = require('./_object-pie');
    var toObject = require('./_to-object');
    var IObject = require('./_iobject');
    var $assign = Object.assign;

    // should work with symbols and should have deterministic property order (V8 bug)
    module.exports = !$assign || require('./_fails')(function () {
      var A = {};
      var B = {};
      // eslint-disable-next-line no-undef
      var S = Symbol();
      var K = 'abcdefghijklmnopqrst';
      A[S] = 7;
      K.split('').forEach(function (k) { B[k] = k; });
      return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
    }) ? function assign(target, source) { // eslint-disable-line no-unused-vars
      var T = toObject(target);
      var aLen = arguments.length;
      var index = 1;
      var getSymbols = gOPS.f;
      var isEnum = pIE.f;
      while (aLen > index) {
        var S = IObject(arguments[index++]);
        var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
        var length = keys.length;
        var j = 0;
        var key;
        while (length > j) {
          key = keys[j++];
          if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
        }
      } return T;
    } : $assign;

  }, { "./_descriptors": 1057, "./_object-keys": 1079, "./_object-gops": 1050, "./_object-pie": 1055, "./_to-object": 886, "./_iobject": 1078, "./_fails": 1075 }], 916: [function (require, module, exports) {
    // 19.1.3.1 Object.assign(target, source)
    var $export = require('./_export');

    $export($export.S + $export.F, 'Object', { assign: require('./_object-assign') });

  }, { "./_export": 882, "./_object-assign": 1092 }], 1087: [function (require, module, exports) {
    // 7.2.9 SameValue(x, y)
    module.exports = Object.is || function is(x, y) {
      // eslint-disable-next-line no-self-compare
      return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
    };

  }, {}], 914: [function (require, module, exports) {
    // 19.1.3.10 Object.is(value1, value2)
    var $export = require('./_export');
    $export($export.S, 'Object', { is: require('./_same-value') });

  }, { "./_export": 882, "./_same-value": 1087 }], 1084: [function (require, module, exports) {
    // Works with __proto__ only. Old v8 can't work with null proto objects.
    /* eslint-disable no-proto */
    var isObject = require('./_is-object');
    var anObject = require('./_an-object');
    var check = function (O, proto) {
      anObject(O);
      if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
    };
    module.exports = {
      set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
        function (test, buggy, set) {
          try {
            set = require('./_ctx')(Function.call, require('./_object-gopd').f(Object.prototype, '__proto__').set, 2);
            set(test, []);
            buggy = !(test instanceof Array);
          } catch (e) { buggy = true; }
          return function setPrototypeOf(O, proto) {
            check(O, proto);
            if (buggy) O.__proto__ = proto;
            else set(O, proto);
            return O;
          };
        }({}, false) : undefined),
      check: check
    };

  }, { "./_is-object": 1072, "./_an-object": 1051, "./_ctx": 1062, "./_object-gopd": 893 }], 910: [function (require, module, exports) {
    // 19.1.3.19 Object.setPrototypeOf(O, proto)
    var $export = require('./_export');
    $export($export.S, 'Object', { setPrototypeOf: require('./_set-proto').set });

  }, { "./_export": 882, "./_set-proto": 1084 }], 1059: [function (require, module, exports) {
    // getting tag from 19.1.3.6 Object.prototype.toString()
    var cof = require('./_cof');
    var TAG = require('./_wks')('toStringTag');
    // ES3 wrong here
    var ARG = cof(function () { return arguments; }()) == 'Arguments';

    // fallback for IE11 Script Access Denied error
    var tryGet = function (it, key) {
      try {
        return it[key];
      } catch (e) { /* empty */ }
    };

    module.exports = function (it) {
      var O, T, B;
      return it === undefined ? 'Undefined' : it === null ? 'Null'
        // @@toStringTag case
        : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
          // builtinTag case
          : ARG ? cof(O)
            // ES3 arguments fallback
            : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
    };

  }, { "./_cof": 1100, "./_wks": 1041 }], 915: [function (require, module, exports) {
    'use strict';
    // 19.1.3.6 Object.prototype.toString()
    var classof = require('./_classof');
    var test = {};
    test[require('./_wks')('toStringTag')] = 'z';
    if (test + '' != '[object z]') {
      require('./_redefine')(Object.prototype, 'toString', function toString() {
        return '[object ' + classof(this) + ']';
      }, true);
    }

  }, { "./_classof": 1059, "./_wks": 1041, "./_redefine": 1074 }], 1140: [function (require, module, exports) {
    // fast apply, http://jsperf.lnkit.com/fast-apply/5
    module.exports = function (fn, args, that) {
      var un = that === undefined;
      switch (args.length) {
        case 0: return un ? fn()
          : fn.call(that);
        case 1: return un ? fn(args[0])
          : fn.call(that, args[0]);
        case 2: return un ? fn(args[0], args[1])
          : fn.call(that, args[0], args[1]);
        case 3: return un ? fn(args[0], args[1], args[2])
          : fn.call(that, args[0], args[1], args[2]);
        case 4: return un ? fn(args[0], args[1], args[2], args[3])
          : fn.call(that, args[0], args[1], args[2], args[3]);
      } return fn.apply(that, args);
    };

  }, {}], 1107: [function (require, module, exports) {
    'use strict';
    var aFunction = require('./_a-function');
    var isObject = require('./_is-object');
    var invoke = require('./_invoke');
    var arraySlice = [].slice;
    var factories = {};

    var construct = function (F, len, args) {
      if (!(len in factories)) {
        for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
        // eslint-disable-next-line no-new-func
        factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
      } return factories[len](F, args);
    };

    module.exports = Function.bind || function bind(that /* , ...args */) {
      var fn = aFunction(this);
      var partArgs = arraySlice.call(arguments, 1);
      var bound = function (/* args... */) {
        var args = partArgs.concat(arraySlice.call(arguments));
        return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
      };
      if (isObject(fn.prototype)) bound.prototype = fn.prototype;
      return bound;
    };

  }, { "./_a-function": 887, "./_is-object": 1072, "./_invoke": 1140 }], 917: [function (require, module, exports) {
    // 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
    var $export = require('./_export');

    $export($export.P, 'Function', { bind: require('./_bind') });

  }, { "./_export": 882, "./_bind": 1107 }], 913: [function (require, module, exports) {
    var dP = require('./_object-dp').f;
    var FProto = Function.prototype;
    var nameRE = /^\s*function ([^ (]*)/;
    var NAME = 'name';

    // 19.2.4.2 name
    NAME in FProto || require('./_descriptors') && dP(FProto, NAME, {
      configurable: true,
      get: function () {
        try {
          return ('' + this).match(nameRE)[1];
        } catch (e) {
          return '';
        }
      }
    });

  }, { "./_object-dp": 1080, "./_descriptors": 1057 }], 911: [function (require, module, exports) {
    'use strict';
    var isObject = require('./_is-object');
    var getPrototypeOf = require('./_object-gpo');
    var HAS_INSTANCE = require('./_wks')('hasInstance');
    var FunctionProto = Function.prototype;
    // 19.2.3.6 Function.prototype[@@hasInstance](V)
    if (!(HAS_INSTANCE in FunctionProto)) require('./_object-dp').f(FunctionProto, HAS_INSTANCE, {
      value: function (O) {
        if (typeof this != 'function' || !isObject(O)) return false;
        if (!isObject(this.prototype)) return O instanceof this;
        // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
        while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
        return false;
      }
    });

  }, { "./_is-object": 1072, "./_object-gpo": 1086, "./_wks": 1041, "./_object-dp": 1080 }], 1076: [function (require, module, exports) {
    module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
      '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  }, {}], 889: [function (require, module, exports) {
    var $export = require('./_export');
    var defined = require('./_defined');
    var fails = require('./_fails');
    var spaces = require('./_string-ws');
    var space = '[' + spaces + ']';
    var non = '\u200b\u0085';
    var ltrim = RegExp('^' + space + space + '*');
    var rtrim = RegExp(space + space + '*$');

    var exporter = function (KEY, exec, ALIAS) {
      var exp = {};
      var FORCE = fails(function () {
        return !!spaces[KEY]() || non[KEY]() != non;
      });
      var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
      if (ALIAS) exp[ALIAS] = fn;
      $export($export.P + $export.F * FORCE, 'String', exp);
    };

    // 1 -> String#trimLeft
    // 2 -> String#trimRight
    // 3 -> String#trim
    var trim = exporter.trim = function (string, TYPE) {
      string = String(defined(string));
      if (TYPE & 1) string = string.replace(ltrim, '');
      if (TYPE & 2) string = string.replace(rtrim, '');
      return string;
    };

    module.exports = exporter;

  }, { "./_export": 882, "./_defined": 1043, "./_fails": 1075, "./_string-ws": 1076 }], 1109: [function (require, module, exports) {
    var $parseInt = require('./_global').parseInt;
    var $trim = require('./_string-trim').trim;
    var ws = require('./_string-ws');
    var hex = /^[-+]?0[xX]/;

    module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
      var string = $trim(String(str), 3);
      return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
    } : $parseInt;

  }, { "./_global": 1039, "./_string-trim": 889, "./_string-ws": 1076 }], 923: [function (require, module, exports) {
    var $export = require('./_export');
    var $parseInt = require('./_parse-int');
    // 18.2.5 parseInt(string, radix)
    $export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });

  }, { "./_export": 882, "./_parse-int": 1109 }], 1103: [function (require, module, exports) {
    var $parseFloat = require('./_global').parseFloat;
    var $trim = require('./_string-trim').trim;

    module.exports = 1 / $parseFloat(require('./_string-ws') + '-0') !== -Infinity ? function parseFloat(str) {
      var string = $trim(String(str), 3);
      var result = $parseFloat(string);
      return result === 0 && string.charAt(0) == '-' ? -0 : result;
    } : $parseFloat;

  }, { "./_global": 1039, "./_string-trim": 889, "./_string-ws": 1076 }], 919: [function (require, module, exports) {
    var $export = require('./_export');
    var $parseFloat = require('./_parse-float');
    // 18.2.4 parseFloat(string)
    $export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });

  }, { "./_export": 882, "./_parse-float": 1103 }], 1129: [function (require, module, exports) {
    var isObject = require('./_is-object');
    var setPrototypeOf = require('./_set-proto').set;
    module.exports = function (that, target, C) {
      var S = target.constructor;
      var P;
      if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
        setPrototypeOf(that, P);
      } return that;
    };

  }, { "./_is-object": 1072, "./_set-proto": 1084 }], 918: [function (require, module, exports) {

    'use strict';
    var global = require('./_global');
    var has = require('./_has');
    var cof = require('./_cof');
    var inheritIfRequired = require('./_inherit-if-required');
    var toPrimitive = require('./_to-primitive');
    var fails = require('./_fails');
    var gOPN = require('./_object-gopn').f;
    var gOPD = require('./_object-gopd').f;
    var dP = require('./_object-dp').f;
    var $trim = require('./_string-trim').trim;
    var NUMBER = 'Number';
    var $Number = global[NUMBER];
    var Base = $Number;
    var proto = $Number.prototype;
    // Opera ~12 has broken Object#toString
    var BROKEN_COF = cof(require('./_object-create')(proto)) == NUMBER;
    var TRIM = 'trim' in String.prototype;

    // 7.1.3 ToNumber(argument)
    var toNumber = function (argument) {
      var it = toPrimitive(argument, false);
      if (typeof it == 'string' && it.length > 2) {
        it = TRIM ? it.trim() : $trim(it, 3);
        var first = it.charCodeAt(0);
        var third, radix, maxCode;
        if (first === 43 || first === 45) {
          third = it.charCodeAt(2);
          if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
        } else if (first === 48) {
          switch (it.charCodeAt(1)) {
            case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
            case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
            default: return +it;
          }
          for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
            code = digits.charCodeAt(i);
            // parseInt parses a string to a first unavailable symbol
            // but ToNumber should return NaN if a string contains unavailable symbols
            if (code < 48 || code > maxCode) return NaN;
          } return parseInt(digits, radix);
        }
      } return +it;
    };

    if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
      $Number = function Number(value) {
        var it = arguments.length < 1 ? 0 : value;
        var that = this;
        return that instanceof $Number
          // check on 1..constructor(foo) case
          && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
          ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
      };
      for (var keys = require('./_descriptors') ? gOPN(Base) : (
        // ES3:
        'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
        // ES6 (in case, if modules with ES6 Number statics required before):
        'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
        'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
      ).split(','), j = 0, key; keys.length > j; j++) {
        if (has(Base, key = keys[j]) && !has($Number, key)) {
          dP($Number, key, gOPD(Base, key));
        }
      }
      $Number.prototype = proto;
      proto.constructor = $Number;
      require('./_redefine')(global, NUMBER, $Number);
    }

  }, { "./_global": 1039, "./_has": 1056, "./_cof": 1100, "./_inherit-if-required": 1129, "./_to-primitive": 1054, "./_fails": 1075, "./_object-gopn": 1052, "./_object-gopd": 893, "./_object-dp": 1080, "./_string-trim": 889, "./_object-create": 1083, "./_descriptors": 1057, "./_redefine": 1074 }], 1132: [function (require, module, exports) {
    var cof = require('./_cof');
    module.exports = function (it, msg) {
      if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
      return +it;
    };

  }, { "./_cof": 1100 }], 1081: [function (require, module, exports) {
    'use strict';
    var toInteger = require('./_to-integer');
    var defined = require('./_defined');

    module.exports = function repeat(count) {
      var str = String(defined(this));
      var res = '';
      var n = toInteger(count);
      if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
      for (; n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
      return res;
    };

  }, { "./_to-integer": 1045, "./_defined": 1043 }], 921: [function (require, module, exports) {
    'use strict';
    var $export = require('./_export');
    var toInteger = require('./_to-integer');
    var aNumberValue = require('./_a-number-value');
    var repeat = require('./_string-repeat');
    var $toFixed = 1.0.toFixed;
    var floor = Math.floor;
    var data = [0, 0, 0, 0, 0, 0];
    var ERROR = 'Number.toFixed: incorrect invocation!';
    var ZERO = '0';

    var multiply = function (n, c) {
      var i = -1;
      var c2 = c;
      while (++i < 6) {
        c2 += n * data[i];
        data[i] = c2 % 1e7;
        c2 = floor(c2 / 1e7);
      }
    };
    var divide = function (n) {
      var i = 6;
      var c = 0;
      while (--i >= 0) {
        c += data[i];
        data[i] = floor(c / n);
        c = (c % n) * 1e7;
      }
    };
    var numToString = function () {
      var i = 6;
      var s = '';
      while (--i >= 0) {
        if (s !== '' || i === 0 || data[i] !== 0) {
          var t = String(data[i]);
          s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
        }
      } return s;
    };
    var pow = function (x, n, acc) {
      return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
    };
    var log = function (x) {
      var n = 0;
      var x2 = x;
      while (x2 >= 4096) {
        n += 12;
        x2 /= 4096;
      }
      while (x2 >= 2) {
        n += 1;
        x2 /= 2;
      } return n;
    };

    $export($export.P + $export.F * (!!$toFixed && (
      0.00008.toFixed(3) !== '0.000' ||
      0.9.toFixed(0) !== '1' ||
      1.255.toFixed(2) !== '1.25' ||
      1000000000000000128.0.toFixed(0) !== '1000000000000000128'
    ) || !require('./_fails')(function () {
      // V8 ~ Android 4.3-
      $toFixed.call({});
    })), 'Number', {
      toFixed: function toFixed(fractionDigits) {
        var x = aNumberValue(this, ERROR);
        var f = toInteger(fractionDigits);
        var s = '';
        var m = ZERO;
        var e, z, j, k;
        if (f < 0 || f > 20) throw RangeError(ERROR);
        // eslint-disable-next-line no-self-compare
        if (x != x) return 'NaN';
        if (x <= -1e21 || x >= 1e21) return String(x);
        if (x < 0) {
          s = '-';
          x = -x;
        }
        if (x > 1e-21) {
          e = log(x * pow(2, 69, 1)) - 69;
          z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
          z *= 0x10000000000000;
          e = 52 - e;
          if (e > 0) {
            multiply(0, z);
            j = f;
            while (j >= 7) {
              multiply(1e7, 0);
              j -= 7;
            }
            multiply(pow(10, j, 1), 0);
            j = e - 1;
            while (j >= 23) {
              divide(1 << 23);
              j -= 23;
            }
            divide(1 << j);
            multiply(1, 1);
            divide(2);
            m = numToString();
          } else {
            multiply(0, z);
            multiply(1 << -e, 0);
            m = numToString() + repeat.call(ZERO, f);
          }
        }
        if (f > 0) {
          k = m.length;
          m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
        } else {
          m = s + m;
        } return m;
      }
    });

  }, { "./_export": 882, "./_to-integer": 1045, "./_a-number-value": 1132, "./_string-repeat": 1081, "./_fails": 1075 }], 922: [function (require, module, exports) {
    'use strict';
    var $export = require('./_export');
    var $fails = require('./_fails');
    var aNumberValue = require('./_a-number-value');
    var $toPrecision = 1.0.toPrecision;

    $export($export.P + $export.F * ($fails(function () {
      // IE7-
      return $toPrecision.call(1, undefined) !== '1';
    }) || !$fails(function () {
      // V8 ~ Android 4.3-
      $toPrecision.call({});
    })), 'Number', {
      toPrecision: function toPrecision(precision) {
        var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
        return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
      }
    });

  }, { "./_export": 882, "./_fails": 1075, "./_a-number-value": 1132 }], 924: [function (require, module, exports) {
    // 20.1.2.1 Number.EPSILON
    var $export = require('./_export');

    $export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });

  }, { "./_export": 882 }], 928: [function (require, module, exports) {
    // 20.1.2.2 Number.isFinite(number)
    var $export = require('./_export');
    var _isFinite = require('./_global').isFinite;

    $export($export.S, 'Number', {
      isFinite: function isFinite(it) {
        return typeof it == 'number' && _isFinite(it);
      }
    });

  }, { "./_export": 882, "./_global": 1039 }], 1133: [function (require, module, exports) {
    // 20.1.2.3 Number.isInteger(number)
    var isObject = require('./_is-object');
    var floor = Math.floor;
    module.exports = function isInteger(it) {
      return !isObject(it) && isFinite(it) && floor(it) === it;
    };

  }, { "./_is-object": 1072 }], 925: [function (require, module, exports) {
    // 20.1.2.3 Number.isInteger(number)
    var $export = require('./_export');

    $export($export.S, 'Number', { isInteger: require('./_is-integer') });

  }, { "./_export": 882, "./_is-integer": 1133 }], 927: [function (require, module, exports) {
    // 20.1.2.4 Number.isNaN(number)
    var $export = require('./_export');

    $export($export.S, 'Number', {
      isNaN: function isNaN(number) {
        // eslint-disable-next-line no-self-compare
        return number != number;
      }
    });

  }, { "./_export": 882 }], 926: [function (require, module, exports) {
    // 20.1.2.5 Number.isSafeInteger(number)
    var $export = require('./_export');
    var isInteger = require('./_is-integer');
    var abs = Math.abs;

    $export($export.S, 'Number', {
      isSafeInteger: function isSafeInteger(number) {
        return isInteger(number) && abs(number) <= 0x1fffffffffffff;
      }
    });

  }, { "./_export": 882, "./_is-integer": 1133 }], 929: [function (require, module, exports) {
    // 20.1.2.6 Number.MAX_SAFE_INTEGER
    var $export = require('./_export');

    $export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });

  }, { "./_export": 882 }], 931: [function (require, module, exports) {
    // 20.1.2.10 Number.MIN_SAFE_INTEGER
    var $export = require('./_export');

    $export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });

  }, { "./_export": 882 }], 930: [function (require, module, exports) {
    var $export = require('./_export');
    var $parseFloat = require('./_parse-float');
    // 20.1.2.12 Number.parseFloat(string)
    $export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });

  }, { "./_export": 882, "./_parse-float": 1103 }], 932: [function (require, module, exports) {
    var $export = require('./_export');
    var $parseInt = require('./_parse-int');
    // 20.1.2.13 Number.parseInt(string, radix)
    $export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });

  }, { "./_export": 882, "./_parse-int": 1109 }], 1098: [function (require, module, exports) {
    // 20.2.2.20 Math.log1p(x)
    module.exports = Math.log1p || function log1p(x) {
      return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
    };

  }, {}], 935: [function (require, module, exports) {
    // 20.2.2.3 Math.acosh(x)
    var $export = require('./_export');
    var log1p = require('./_math-log1p');
    var sqrt = Math.sqrt;
    var $acosh = Math.acosh;

    $export($export.S + $export.F * !($acosh
      // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
      && Math.floor($acosh(Number.MAX_VALUE)) == 710
      // Tor Browser bug: Math.acosh(Infinity) -> NaN
      && $acosh(Infinity) == Infinity
    ), 'Math', {
      acosh: function acosh(x) {
        return (x = +x) < 1 ? NaN : x > 94906265.62425156
          ? Math.log(x) + Math.LN2
          : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
      }
    });

  }, { "./_export": 882, "./_math-log1p": 1098 }], 933: [function (require, module, exports) {
    // 20.2.2.5 Math.asinh(x)
    var $export = require('./_export');
    var $asinh = Math.asinh;

    function asinh(x) {
      return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
    }

    // Tor Browser bug: Math.asinh(0) -> -0
    $export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });

  }, { "./_export": 882 }], 937: [function (require, module, exports) {
    // 20.2.2.7 Math.atanh(x)
    var $export = require('./_export');
    var $atanh = Math.atanh;

    // Tor Browser bug: Math.atanh(-0) -> 0
    $export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
      atanh: function atanh(x) {
        return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
      }
    });

  }, { "./_export": 882 }], 1116: [function (require, module, exports) {
    // 20.2.2.28 Math.sign(x)
    module.exports = Math.sign || function sign(x) {
      // eslint-disable-next-line no-self-compare
      return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
    };

  }, {}], 934: [function (require, module, exports) {
    // 20.2.2.9 Math.cbrt(x)
    var $export = require('./_export');
    var sign = require('./_math-sign');

    $export($export.S, 'Math', {
      cbrt: function cbrt(x) {
        return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
      }
    });

  }, { "./_export": 882, "./_math-sign": 1116 }], 939: [function (require, module, exports) {
    // 20.2.2.11 Math.clz32(x)
    var $export = require('./_export');

    $export($export.S, 'Math', {
      clz32: function clz32(x) {
        return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
      }
    });

  }, { "./_export": 882 }], 936: [function (require, module, exports) {
    // 20.2.2.12 Math.cosh(x)
    var $export = require('./_export');
    var exp = Math.exp;

    $export($export.S, 'Math', {
      cosh: function cosh(x) {
        return (exp(x = +x) + exp(-x)) / 2;
      }
    });

  }, { "./_export": 882 }], 1097: [function (require, module, exports) {
    // 20.2.2.14 Math.expm1(x)
    var $expm1 = Math.expm1;
    module.exports = (!$expm1
      // Old FF bug
      || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
      // Tor Browser bug
      || $expm1(-2e-17) != -2e-17
    ) ? function expm1(x) {
      return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
    } : $expm1;

  }, {}], 942: [function (require, module, exports) {
    // 20.2.2.14 Math.expm1(x)
    var $export = require('./_export');
    var $expm1 = require('./_math-expm1');

    $export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });

  }, { "./_export": 882, "./_math-expm1": 1097 }], 1130: [function (require, module, exports) {
    // 20.2.2.16 Math.fround(x)
    var sign = require('./_math-sign');
    var pow = Math.pow;
    var EPSILON = pow(2, -52);
    var EPSILON32 = pow(2, -23);
    var MAX32 = pow(2, 127) * (2 - EPSILON32);
    var MIN32 = pow(2, -126);

    var roundTiesToEven = function (n) {
      return n + 1 / EPSILON - 1 / EPSILON;
    };

    module.exports = Math.fround || function fround(x) {
      var $abs = Math.abs(x);
      var $sign = sign(x);
      var a, result;
      if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
      a = (1 + EPSILON32 / EPSILON) * $abs;
      result = a - (a - $abs);
      // eslint-disable-next-line no-self-compare
      if (result > MAX32 || result != result) return $sign * Infinity;
      return $sign * result;
    };

  }, { "./_math-sign": 1116 }], 938: [function (require, module, exports) {
    // 20.2.2.16 Math.fround(x)
    var $export = require('./_export');

    $export($export.S, 'Math', { fround: require('./_math-fround') });

  }, { "./_export": 882, "./_math-fround": 1130 }], 941: [function (require, module, exports) {
    // 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
    var $export = require('./_export');
    var abs = Math.abs;

    $export($export.S, 'Math', {
      hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
        var sum = 0;
        var i = 0;
        var aLen = arguments.length;
        var larg = 0;
        var arg, div;
        while (i < aLen) {
          arg = abs(arguments[i++]);
          if (larg < arg) {
            div = larg / arg;
            sum = sum * div * div + 1;
            larg = arg;
          } else if (arg > 0) {
            div = arg / larg;
            sum += div * div;
          } else sum += arg;
        }
        return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
      }
    });

  }, { "./_export": 882 }], 944: [function (require, module, exports) {
    // 20.2.2.18 Math.imul(x, y)
    var $export = require('./_export');
    var $imul = Math.imul;

    // some WebKit versions fails with big numbers, some has wrong arity
    $export($export.S + $export.F * require('./_fails')(function () {
      return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
    }), 'Math', {
      imul: function imul(x, y) {
        var UINT16 = 0xffff;
        var xn = +x;
        var yn = +y;
        var xl = UINT16 & xn;
        var yl = UINT16 & yn;
        return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
      }
    });

  }, { "./_export": 882, "./_fails": 1075 }], 940: [function (require, module, exports) {
    // 20.2.2.21 Math.log10(x)
    var $export = require('./_export');

    $export($export.S, 'Math', {
      log10: function log10(x) {
        return Math.log(x) * Math.LOG10E;
      }
    });

  }, { "./_export": 882 }], 943: [function (require, module, exports) {
    // 20.2.2.20 Math.log1p(x)
    var $export = require('./_export');

    $export($export.S, 'Math', { log1p: require('./_math-log1p') });

  }, { "./_export": 882, "./_math-log1p": 1098 }], 946: [function (require, module, exports) {
    // 20.2.2.22 Math.log2(x)
    var $export = require('./_export');

    $export($export.S, 'Math', {
      log2: function log2(x) {
        return Math.log(x) / Math.LN2;
      }
    });

  }, { "./_export": 882 }], 947: [function (require, module, exports) {
    // 20.2.2.28 Math.sign(x)
    var $export = require('./_export');

    $export($export.S, 'Math', { sign: require('./_math-sign') });

  }, { "./_export": 882, "./_math-sign": 1116 }], 945: [function (require, module, exports) {
    // 20.2.2.30 Math.sinh(x)
    var $export = require('./_export');
    var expm1 = require('./_math-expm1');
    var exp = Math.exp;

    // V8 near Chromium 38 has a problem with very small numbers
    $export($export.S + $export.F * require('./_fails')(function () {
      return !Math.sinh(-2e-17) != -2e-17;
    }), 'Math', {
      sinh: function sinh(x) {
        return Math.abs(x = +x) < 1
          ? (expm1(x) - expm1(-x)) / 2
          : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
      }
    });

  }, { "./_export": 882, "./_math-expm1": 1097, "./_fails": 1075 }], 949: [function (require, module, exports) {
    // 20.2.2.33 Math.tanh(x)
    var $export = require('./_export');
    var expm1 = require('./_math-expm1');
    var exp = Math.exp;

    $export($export.S, 'Math', {
      tanh: function tanh(x) {
        var a = expm1(x = +x);
        var b = expm1(-x);
        return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
      }
    });

  }, { "./_export": 882, "./_math-expm1": 1097 }], 948: [function (require, module, exports) {
    // 20.2.2.34 Math.trunc(x)
    var $export = require('./_export');

    $export($export.S, 'Math', {
      trunc: function trunc(it) {
        return (it > 0 ? Math.floor : Math.ceil)(it);
      }
    });

  }, { "./_export": 882 }], 951: [function (require, module, exports) {
    var $export = require('./_export');
    var toAbsoluteIndex = require('./_to-absolute-index');
    var fromCharCode = String.fromCharCode;
    var $fromCodePoint = String.fromCodePoint;

    // length should be 1, old FF problem
    $export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
      // 21.1.2.2 String.fromCodePoint(...codePoints)
      fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
        var res = [];
        var aLen = arguments.length;
        var i = 0;
        var code;
        while (aLen > i) {
          code = +arguments[i++];
          if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
          res.push(code < 0x10000
            ? fromCharCode(code)
            : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
          );
        } return res.join('');
      }
    });

  }, { "./_export": 882, "./_to-absolute-index": 1077 }], 954: [function (require, module, exports) {
    var $export = require('./_export');
    var toIObject = require('./_to-iobject');
    var toLength = require('./_to-length');

    $export($export.S, 'String', {
      // 21.1.2.4 String.raw(callSite, ...substitutions)
      raw: function raw(callSite) {
        var tpl = toIObject(callSite.raw);
        var len = toLength(tpl.length);
        var aLen = arguments.length;
        var res = [];
        var i = 0;
        while (len > i) {
          res.push(String(tpl[i++]));
          if (i < aLen) res.push(String(arguments[i]));
        } return res.join('');
      }
    });

  }, { "./_export": 882, "./_to-iobject": 891, "./_to-length": 883 }], 950: [function (require, module, exports) {
    'use strict';
    // 21.1.3.25 String.prototype.trim()
    require('./_string-trim')('trim', function ($trim) {
      return function trim() {
        return $trim(this, 3);
      };
    });

  }, { "./_string-trim": 889 }], 1105: [function (require, module, exports) {
    var toInteger = require('./_to-integer');
    var defined = require('./_defined');
    // true  -> String#at
    // false -> String#codePointAt
    module.exports = function (TO_STRING) {
      return function (that, pos) {
        var s = String(defined(that));
        var i = toInteger(pos);
        var l = s.length;
        var a, b;
        if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
        a = s.charCodeAt(i);
        return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
          ? TO_STRING ? s.charAt(i) : a
          : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
      };
    };

  }, { "./_to-integer": 1045, "./_defined": 1043 }], 1134: [function (require, module, exports) {
    module.exports = {};

  }, {}], 1139: [function (require, module, exports) {
    'use strict';
    var create = require('./_object-create');
    var descriptor = require('./_property-desc');
    var setToStringTag = require('./_set-to-string-tag');
    var IteratorPrototype = {};

    // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
    require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function () { return this; });

    module.exports = function (Constructor, NAME, next) {
      Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
      setToStringTag(Constructor, NAME + ' Iterator');
    };

  }, { "./_object-create": 1083, "./_property-desc": 1053, "./_set-to-string-tag": 1066, "./_hide": 1042, "./_wks": 1041 }], 1106: [function (require, module, exports) {
    'use strict';
    var LIBRARY = require('./_library');
    var $export = require('./_export');
    var redefine = require('./_redefine');
    var hide = require('./_hide');
    var Iterators = require('./_iterators');
    var $iterCreate = require('./_iter-create');
    var setToStringTag = require('./_set-to-string-tag');
    var getPrototypeOf = require('./_object-gpo');
    var ITERATOR = require('./_wks')('iterator');
    var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
    var FF_ITERATOR = '@@iterator';
    var KEYS = 'keys';
    var VALUES = 'values';

    var returnThis = function () { return this; };

    module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
      $iterCreate(Constructor, NAME, next);
      var getMethod = function (kind) {
        if (!BUGGY && kind in proto) return proto[kind];
        switch (kind) {
          case KEYS: return function keys() { return new Constructor(this, kind); };
          case VALUES: return function values() { return new Constructor(this, kind); };
        } return function entries() { return new Constructor(this, kind); };
      };
      var TAG = NAME + ' Iterator';
      var DEF_VALUES = DEFAULT == VALUES;
      var VALUES_BUG = false;
      var proto = Base.prototype;
      var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
      var $default = $native || getMethod(DEFAULT);
      var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
      var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
      var methods, key, IteratorPrototype;
      // Fix native
      if ($anyNative) {
        IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
        if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
          // Set @@toStringTag to native iterators
          setToStringTag(IteratorPrototype, TAG, true);
          // fix for some old engines
          if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
        }
      }
      // fix Array#{values, @@iterator}.name in V8 / FF
      if (DEF_VALUES && $native && $native.name !== VALUES) {
        VALUES_BUG = true;
        $default = function values() { return $native.call(this); };
      }
      // Define iterator
      if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
        hide(proto, ITERATOR, $default);
      }
      // Plug for library
      Iterators[NAME] = $default;
      Iterators[TAG] = returnThis;
      if (DEFAULT) {
        methods = {
          values: DEF_VALUES ? $default : getMethod(VALUES),
          keys: IS_SET ? $default : getMethod(KEYS),
          entries: $entries
        };
        if (FORCED) for (key in methods) {
          if (!(key in proto)) redefine(proto, key, methods[key]);
        } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
      }
      return methods;
    };

  }, { "./_library": 1061, "./_export": 882, "./_redefine": 1074, "./_hide": 1042, "./_iterators": 1134, "./_iter-create": 1139, "./_set-to-string-tag": 1066, "./_object-gpo": 1086, "./_wks": 1041 }], 952: [function (require, module, exports) {
    'use strict';
    var $at = require('./_string-at')(true);

    // 21.1.3.27 String.prototype[@@iterator]()
    require('./_iter-define')(String, 'String', function (iterated) {
      this._t = String(iterated); // target
      this._i = 0;                // next index
      // 21.1.5.2.1 %StringIteratorPrototype%.next()
    }, function () {
      var O = this._t;
      var index = this._i;
      var point;
      if (index >= O.length) return { value: undefined, done: true };
      point = $at(O, index);
      this._i += point.length;
      return { value: point, done: false };
    });

  }, { "./_string-at": 1105, "./_iter-define": 1106 }], 953: [function (require, module, exports) {
    'use strict';
    var $export = require('./_export');
    var $at = require('./_string-at')(false);
    $export($export.P, 'String', {
      // 21.1.3.3 String.prototype.codePointAt(pos)
      codePointAt: function codePointAt(pos) {
        return $at(this, pos);
      }
    });

  }, { "./_export": 882, "./_string-at": 1105 }], 1131: [function (require, module, exports) {
    // 7.2.8 IsRegExp(argument)
    var isObject = require('./_is-object');
    var cof = require('./_cof');
    var MATCH = require('./_wks')('match');
    module.exports = function (it) {
      var isRegExp;
      return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
    };

  }, { "./_is-object": 1072, "./_cof": 1100, "./_wks": 1041 }], 1113: [function (require, module, exports) {
    // helper for String#{startsWith, endsWith, includes}
    var isRegExp = require('./_is-regexp');
    var defined = require('./_defined');

    module.exports = function (that, searchString, NAME) {
      if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
      return String(defined(that));
    };

  }, { "./_is-regexp": 1131, "./_defined": 1043 }], 1115: [function (require, module, exports) {
    var MATCH = require('./_wks')('match');
    module.exports = function (KEY) {
      var re = /./;
      try {
        '/./'[KEY](re);
      } catch (e) {
        try {
          re[MATCH] = false;
          return !'/./'[KEY](re);
        } catch (f) { /* empty */ }
      } return true;
    };

  }, { "./_wks": 1041 }], 955: [function (require, module, exports) {
    // 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
    'use strict';
    var $export = require('./_export');
    var toLength = require('./_to-length');
    var context = require('./_string-context');
    var ENDS_WITH = 'endsWith';
    var $endsWith = ''[ENDS_WITH];

    $export($export.P + $export.F * require('./_fails-is-regexp')(ENDS_WITH), 'String', {
      endsWith: function endsWith(searchString /* , endPosition = @length */) {
        var that = context(this, searchString, ENDS_WITH);
        var endPosition = arguments.length > 1 ? arguments[1] : undefined;
        var len = toLength(that.length);
        var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
        var search = String(searchString);
        return $endsWith
          ? $endsWith.call(that, search, end)
          : that.slice(end - search.length, end) === search;
      }
    });

  }, { "./_export": 882, "./_to-length": 883, "./_string-context": 1113, "./_fails-is-regexp": 1115 }], 958: [function (require, module, exports) {
    // 21.1.3.7 String.prototype.includes(searchString, position = 0)
    'use strict';
    var $export = require('./_export');
    var context = require('./_string-context');
    var INCLUDES = 'includes';

    $export($export.P + $export.F * require('./_fails-is-regexp')(INCLUDES), 'String', {
      includes: function includes(searchString /* , position = 0 */) {
        return !!~context(this, searchString, INCLUDES)
          .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
      }
    });

  }, { "./_export": 882, "./_string-context": 1113, "./_fails-is-regexp": 1115 }], 970: [function (require, module, exports) {
    var $export = require('./_export');

    $export($export.P, 'String', {
      // 21.1.3.13 String.prototype.repeat(count)
      repeat: require('./_string-repeat')
    });

  }, { "./_export": 882, "./_string-repeat": 1081 }], 957: [function (require, module, exports) {
    // 21.1.3.18 String.prototype.startsWith(searchString [, position ])
    'use strict';
    var $export = require('./_export');
    var toLength = require('./_to-length');
    var context = require('./_string-context');
    var STARTS_WITH = 'startsWith';
    var $startsWith = ''[STARTS_WITH];

    $export($export.P + $export.F * require('./_fails-is-regexp')(STARTS_WITH), 'String', {
      startsWith: function startsWith(searchString /* , position = 0 */) {
        var that = context(this, searchString, STARTS_WITH);
        var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
        var search = String(searchString);
        return $startsWith
          ? $startsWith.call(that, search, index)
          : that.slice(index, index + search.length) === search;
      }
    });

  }, { "./_export": 882, "./_to-length": 883, "./_string-context": 1113, "./_fails-is-regexp": 1115 }], 1101: [function (require, module, exports) {
    var $export = require('./_export');
    var fails = require('./_fails');
    var defined = require('./_defined');
    var quot = /"/g;
    // B.2.3.2.1 CreateHTML(string, tag, attribute, value)
    var createHTML = function (string, tag, attribute, value) {
      var S = String(defined(string));
      var p1 = '<' + tag;
      if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
      return p1 + '>' + S + '</' + tag + '>';
    };
    module.exports = function (NAME, exec) {
      var O = {};
      O[NAME] = exec(createHTML);
      $export($export.P + $export.F * fails(function () {
        var test = ''[NAME]('"');
        return test !== test.toLowerCase() || test.split('"').length > 3;
      }), 'String', O);
    };

  }, { "./_export": 882, "./_fails": 1075, "./_defined": 1043 }], 956: [function (require, module, exports) {
    'use strict';
    // B.2.3.2 String.prototype.anchor(name)
    require('./_string-html')('anchor', function (createHTML) {
      return function anchor(name) {
        return createHTML(this, 'a', 'name', name);
      };
    });

  }, { "./_string-html": 1101 }], 962: [function (require, module, exports) {
    'use strict';
    // B.2.3.3 String.prototype.big()
    require('./_string-html')('big', function (createHTML) {
      return function big() {
        return createHTML(this, 'big', '', '');
      };
    });

  }, { "./_string-html": 1101 }], 961: [function (require, module, exports) {
    'use strict';
    // B.2.3.4 String.prototype.blink()
    require('./_string-html')('blink', function (createHTML) {
      return function blink() {
        return createHTML(this, 'blink', '', '');
      };
    });

  }, { "./_string-html": 1101 }], 959: [function (require, module, exports) {
    'use strict';
    // B.2.3.5 String.prototype.bold()
    require('./_string-html')('bold', function (createHTML) {
      return function bold() {
        return createHTML(this, 'b', '', '');
      };
    });

  }, { "./_string-html": 1101 }], 964: [function (require, module, exports) {
    'use strict';
    // B.2.3.6 String.prototype.fixed()
    require('./_string-html')('fixed', function (createHTML) {
      return function fixed() {
        return createHTML(this, 'tt', '', '');
      };
    });

  }, { "./_string-html": 1101 }], 965: [function (require, module, exports) {
    'use strict';
    // B.2.3.7 String.prototype.fontcolor(color)
    require('./_string-html')('fontcolor', function (createHTML) {
      return function fontcolor(color) {
        return createHTML(this, 'font', 'color', color);
      };
    });

  }, { "./_string-html": 1101 }], 966: [function (require, module, exports) {
    'use strict';
    // B.2.3.8 String.prototype.fontsize(size)
    require('./_string-html')('fontsize', function (createHTML) {
      return function fontsize(size) {
        return createHTML(this, 'font', 'size', size);
      };
    });

  }, { "./_string-html": 1101 }], 960: [function (require, module, exports) {
    'use strict';
    // B.2.3.9 String.prototype.italics()
    require('./_string-html')('italics', function (createHTML) {
      return function italics() {
        return createHTML(this, 'i', '', '');
      };
    });

  }, { "./_string-html": 1101 }], 963: [function (require, module, exports) {
    'use strict';
    // B.2.3.10 String.prototype.link(url)
    require('./_string-html')('link', function (createHTML) {
      return function link(url) {
        return createHTML(this, 'a', 'href', url);
      };
    });

  }, { "./_string-html": 1101 }], 968: [function (require, module, exports) {
    'use strict';
    // B.2.3.11 String.prototype.small()
    require('./_string-html')('small', function (createHTML) {
      return function small() {
        return createHTML(this, 'small', '', '');
      };
    });

  }, { "./_string-html": 1101 }], 967: [function (require, module, exports) {
    'use strict';
    // B.2.3.12 String.prototype.strike()
    require('./_string-html')('strike', function (createHTML) {
      return function strike() {
        return createHTML(this, 'strike', '', '');
      };
    });

  }, { "./_string-html": 1101 }], 972: [function (require, module, exports) {
    'use strict';
    // B.2.3.13 String.prototype.sub()
    require('./_string-html')('sub', function (createHTML) {
      return function sub() {
        return createHTML(this, 'sub', '', '');
      };
    });

  }, { "./_string-html": 1101 }], 971: [function (require, module, exports) {
    'use strict';
    // B.2.3.14 String.prototype.sup()
    require('./_string-html')('sup', function (createHTML) {
      return function sup() {
        return createHTML(this, 'sup', '', '');
      };
    });

  }, { "./_string-html": 1101 }], 979: [function (require, module, exports) {
    // 20.3.3.1 / 15.9.4.4 Date.now()
    var $export = require('./_export');

    $export($export.S, 'Date', { now: function () { return new Date().getTime(); } });

  }, { "./_export": 882 }], 973: [function (require, module, exports) {
    'use strict';
    var $export = require('./_export');
    var toObject = require('./_to-object');
    var toPrimitive = require('./_to-primitive');

    $export($export.P + $export.F * require('./_fails')(function () {
      return new Date(NaN).toJSON() !== null
        || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
    }), 'Date', {
      // eslint-disable-next-line no-unused-vars
      toJSON: function toJSON(key) {
        var O = toObject(this);
        var pv = toPrimitive(O);
        return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
      }
    });

  }, { "./_export": 882, "./_to-object": 886, "./_to-primitive": 1054, "./_fails": 1075 }], 1089: [function (require, module, exports) {
    'use strict';
    // 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
    var fails = require('./_fails');
    var getTime = Date.prototype.getTime;
    var $toISOString = Date.prototype.toISOString;

    var lz = function (num) {
      return num > 9 ? num : '0' + num;
    };

    // PhantomJS / old WebKit has a broken implementations
    module.exports = (fails(function () {
      return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
    }) || !fails(function () {
      $toISOString.call(new Date(NaN));
    })) ? function toISOString() {
      if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
      var d = this;
      var y = d.getUTCFullYear();
      var m = d.getUTCMilliseconds();
      var s = y < 0 ? '-' : y > 9999 ? '+' : '';
      return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
        '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
        'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
        ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
    } : $toISOString;

  }, { "./_fails": 1075 }], 969: [function (require, module, exports) {
    // 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
    var $export = require('./_export');
    var toISOString = require('./_date-to-iso-string');

    // PhantomJS / old WebKit has a broken implementations
    $export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
      toISOString: toISOString
    });

  }, { "./_export": 882, "./_date-to-iso-string": 1089 }], 975: [function (require, module, exports) {
    var DateProto = Date.prototype;
    var INVALID_DATE = 'Invalid Date';
    var TO_STRING = 'toString';
    var $toString = DateProto[TO_STRING];
    var getTime = DateProto.getTime;
    if (new Date(NaN) + '' != INVALID_DATE) {
      require('./_redefine')(DateProto, TO_STRING, function toString() {
        var value = getTime.call(this);
        // eslint-disable-next-line no-self-compare
        return value === value ? $toString.call(this) : INVALID_DATE;
      });
    }

  }, { "./_redefine": 1074 }], 1120: [function (require, module, exports) {
    'use strict';
    var anObject = require('./_an-object');
    var toPrimitive = require('./_to-primitive');
    var NUMBER = 'number';

    module.exports = function (hint) {
      if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
      return toPrimitive(anObject(this), hint != NUMBER);
    };

  }, { "./_an-object": 1051, "./_to-primitive": 1054 }], 977: [function (require, module, exports) {
    var TO_PRIMITIVE = require('./_wks')('toPrimitive');
    var proto = Date.prototype;

    if (!(TO_PRIMITIVE in proto)) require('./_hide')(proto, TO_PRIMITIVE, require('./_date-to-primitive'));

  }, { "./_wks": 1041, "./_hide": 1042, "./_date-to-primitive": 1120 }], 980: [function (require, module, exports) {
    // 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
    var $export = require('./_export');

    $export($export.S, 'Array', { isArray: require('./_is-array') });

  }, { "./_export": 882, "./_is-array": 1073 }], 1110: [function (require, module, exports) {
    // call something on iterator step with safe closing on error
    var anObject = require('./_an-object');
    module.exports = function (iterator, fn, value, entries) {
      try {
        return entries ? fn(anObject(value)[0], value[1]) : fn(value);
        // 7.4.6 IteratorClose(iterator, completion)
      } catch (e) {
        var ret = iterator['return'];
        if (ret !== undefined) anObject(ret.call(iterator));
        throw e;
      }
    };

  }, { "./_an-object": 1051 }], 1111: [function (require, module, exports) {
    // check on default Array iterator
    var Iterators = require('./_iterators');
    var ITERATOR = require('./_wks')('iterator');
    var ArrayProto = Array.prototype;

    module.exports = function (it) {
      return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
    };

  }, { "./_iterators": 1134, "./_wks": 1041 }], 892: [function (require, module, exports) {
    'use strict';
    var $defineProperty = require('./_object-dp');
    var createDesc = require('./_property-desc');

    module.exports = function (object, index, value) {
      if (index in object) $defineProperty.f(object, index, createDesc(0, value));
      else object[index] = value;
    };

  }, { "./_object-dp": 1080, "./_property-desc": 1053 }], 1112: [function (require, module, exports) {
    var classof = require('./_classof');
    var ITERATOR = require('./_wks')('iterator');
    var Iterators = require('./_iterators');
    module.exports = require('./_core').getIteratorMethod = function (it) {
      if (it != undefined) return it[ITERATOR]
        || it['@@iterator']
        || Iterators[classof(it)];
    };

  }, { "./_classof": 1059, "./_wks": 1041, "./_iterators": 1134, "./_core": 870 }], 1069: [function (require, module, exports) {
    var ITERATOR = require('./_wks')('iterator');
    var SAFE_CLOSING = false;

    try {
      var riter = [7][ITERATOR]();
      riter['return'] = function () { SAFE_CLOSING = true; };
      // eslint-disable-next-line no-throw-literal
      Array.from(riter, function () { throw 2; });
    } catch (e) { /* empty */ }

    module.exports = function (exec, skipClosing) {
      if (!skipClosing && !SAFE_CLOSING) return false;
      var safe = false;
      try {
        var arr = [7];
        var iter = arr[ITERATOR]();
        iter.next = function () { return { done: safe = true }; };
        arr[ITERATOR] = function () { return iter; };
        exec(arr);
      } catch (e) { /* empty */ }
      return safe;
    };

  }, { "./_wks": 1041 }], 974: [function (require, module, exports) {
    'use strict';
    var ctx = require('./_ctx');
    var $export = require('./_export');
    var toObject = require('./_to-object');
    var call = require('./_iter-call');
    var isArrayIter = require('./_is-array-iter');
    var toLength = require('./_to-length');
    var createProperty = require('./_create-property');
    var getIterFn = require('./core.get-iterator-method');

    $export($export.S + $export.F * !require('./_iter-detect')(function (iter) { Array.from(iter); }), 'Array', {
      // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
      from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
        var O = toObject(arrayLike);
        var C = typeof this == 'function' ? this : Array;
        var aLen = arguments.length;
        var mapfn = aLen > 1 ? arguments[1] : undefined;
        var mapping = mapfn !== undefined;
        var index = 0;
        var iterFn = getIterFn(O);
        var length, result, step, iterator;
        if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
        // if object isn't iterable or it's array with default iterator - use simple case
        if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
          for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
            createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
          }
        } else {
          length = toLength(O.length);
          for (result = new C(length); length > index; index++) {
            createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
          }
        }
        result.length = index;
        return result;
      }
    });

  }, { "./_ctx": 1062, "./_export": 882, "./_to-object": 886, "./_iter-call": 1110, "./_is-array-iter": 1111, "./_to-length": 883, "./_create-property": 892, "./core.get-iterator-method": 1112, "./_iter-detect": 1069 }], 996: [function (require, module, exports) {
    'use strict';
    var $export = require('./_export');
    var createProperty = require('./_create-property');

    // WebKit Array.of isn't generic
    $export($export.S + $export.F * require('./_fails')(function () {
      function F() { /* empty */ }
      return !(Array.of.call(F) instanceof F);
    }), 'Array', {
      // 22.1.2.3 Array.of( ...items)
      of: function of(/* ...args */) {
        var index = 0;
        var aLen = arguments.length;
        var result = new (typeof this == 'function' ? this : Array)(aLen);
        while (aLen > index) createProperty(result, index, arguments[index++]);
        result.length = aLen;
        return result;
      }
    });

  }, { "./_export": 882, "./_create-property": 892, "./_fails": 1075 }], 1102: [function (require, module, exports) {
    'use strict';
    var fails = require('./_fails');

    module.exports = function (method, arg) {
      return !!method && fails(function () {
        // eslint-disable-next-line no-useless-call
        arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
      });
    };

  }, { "./_fails": 1075 }], 976: [function (require, module, exports) {
    'use strict';
    // 22.1.3.13 Array.prototype.join(separator)
    var $export = require('./_export');
    var toIObject = require('./_to-iobject');
    var arrayJoin = [].join;

    // fallback for not array-like strings
    $export($export.P + $export.F * (require('./_iobject') != Object || !require('./_strict-method')(arrayJoin)), 'Array', {
      join: function join(separator) {
        return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
      }
    });

  }, { "./_export": 882, "./_to-iobject": 891, "./_iobject": 1078, "./_strict-method": 1102 }], 978: [function (require, module, exports) {
    'use strict';
    var $export = require('./_export');
    var html = require('./_html');
    var cof = require('./_cof');
    var toAbsoluteIndex = require('./_to-absolute-index');
    var toLength = require('./_to-length');
    var arraySlice = [].slice;

    // fallback for not array-like ES3 strings and DOM objects
    $export($export.P + $export.F * require('./_fails')(function () {
      if (html) arraySlice.call(html);
    }), 'Array', {
      slice: function slice(begin, end) {
        var len = toLength(this.length);
        var klass = cof(this);
        end = end === undefined ? len : end;
        if (klass == 'Array') return arraySlice.call(this, begin, end);
        var start = toAbsoluteIndex(begin, len);
        var upTo = toAbsoluteIndex(end, len);
        var size = toLength(upTo - start);
        var cloned = new Array(size);
        var i = 0;
        for (; i < size; i++) cloned[i] = klass == 'String'
          ? this.charAt(start + i)
          : this[start + i];
        return cloned;
      }
    });

  }, { "./_export": 882, "./_html": 1099, "./_cof": 1100, "./_to-absolute-index": 1077, "./_to-length": 883, "./_fails": 1075 }], 982: [function (require, module, exports) {
    'use strict';
    var $export = require('./_export');
    var aFunction = require('./_a-function');
    var toObject = require('./_to-object');
    var fails = require('./_fails');
    var $sort = [].sort;
    var test = [1, 2, 3];

    $export($export.P + $export.F * (fails(function () {
      // IE8-
      test.sort(undefined);
    }) || !fails(function () {
      // V8 bug
      test.sort(null);
      // Old WebKit
    }) || !require('./_strict-method')($sort)), 'Array', {
      // 22.1.3.25 Array.prototype.sort(comparefn)
      sort: function sort(comparefn) {
        return comparefn === undefined
          ? $sort.call(toObject(this))
          : $sort.call(toObject(this), aFunction(comparefn));
      }
    });

  }, { "./_export": 882, "./_a-function": 887, "./_to-object": 886, "./_fails": 1075, "./_strict-method": 1102 }], 1047: [function (require, module, exports) {
    var isObject = require('./_is-object');
    var isArray = require('./_is-array');
    var SPECIES = require('./_wks')('species');

    module.exports = function (original) {
      var C;
      if (isArray(original)) {
        C = original.constructor;
        // cross-realm fallback
        if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
        if (isObject(C)) {
          C = C[SPECIES];
          if (C === null) C = undefined;
        }
      } return C === undefined ? Array : C;
    };

  }, { "./_is-object": 1072, "./_is-array": 1073, "./_wks": 1041 }], 885: [function (require, module, exports) {
    // 9.4.2.3 ArraySpeciesCreate(originalArray, length)
    var speciesConstructor = require('./_array-species-constructor');

    module.exports = function (original, length) {
      return new (speciesConstructor(original))(length);
    };

  }, { "./_array-species-constructor": 1047 }], 1090: [function (require, module, exports) {
    // 0 -> Array#forEach
    // 1 -> Array#map
    // 2 -> Array#filter
    // 3 -> Array#some
    // 4 -> Array#every
    // 5 -> Array#find
    // 6 -> Array#findIndex
    var ctx = require('./_ctx');
    var IObject = require('./_iobject');
    var toObject = require('./_to-object');
    var toLength = require('./_to-length');
    var asc = require('./_array-species-create');
    module.exports = function (TYPE, $create) {
      var IS_MAP = TYPE == 1;
      var IS_FILTER = TYPE == 2;
      var IS_SOME = TYPE == 3;
      var IS_EVERY = TYPE == 4;
      var IS_FIND_INDEX = TYPE == 6;
      var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
      var create = $create || asc;
      return function ($this, callbackfn, that) {
        var O = toObject($this);
        var self = IObject(O);
        var f = ctx(callbackfn, that, 3);
        var length = toLength(self.length);
        var index = 0;
        var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
        var val, res;
        for (; length > index; index++) if (NO_HOLES || index in self) {
          val = self[index];
          res = f(val, index, O);
          if (TYPE) {
            if (IS_MAP) result[index] = res;   // map
            else if (res) switch (TYPE) {
              case 3: return true;             // some
              case 5: return val;              // find
              case 6: return index;            // findIndex
              case 2: result.push(val);        // filter
            } else if (IS_EVERY) return false; // every
          }
        }
        return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
      };
    };

  }, { "./_ctx": 1062, "./_iobject": 1078, "./_to-object": 886, "./_to-length": 883, "./_array-species-create": 885 }], 981: [function (require, module, exports) {
    'use strict';
    var $export = require('./_export');
    var $forEach = require('./_array-methods')(0);
    var STRICT = require('./_strict-method')([].forEach, true);

    $export($export.P + $export.F * !STRICT, 'Array', {
      // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
      forEach: function forEach(callbackfn /* , thisArg */) {
        return $forEach(this, callbackfn, arguments[1]);
      }
    });

  }, { "./_export": 882, "./_array-methods": 1090, "./_strict-method": 1102 }], 983: [function (require, module, exports) {
    'use strict';
    var $export = require('./_export');
    var $map = require('./_array-methods')(1);

    $export($export.P + $export.F * !require('./_strict-method')([].map, true), 'Array', {
      // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
      map: function map(callbackfn /* , thisArg */) {
        return $map(this, callbackfn, arguments[1]);
      }
    });

  }, { "./_export": 882, "./_array-methods": 1090, "./_strict-method": 1102 }], 984: [function (require, module, exports) {
    'use strict';
    var $export = require('./_export');
    var $filter = require('./_array-methods')(2);

    $export($export.P + $export.F * !require('./_strict-method')([].filter, true), 'Array', {
      // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
      filter: function filter(callbackfn /* , thisArg */) {
        return $filter(this, callbackfn, arguments[1]);
      }
    });

  }, { "./_export": 882, "./_array-methods": 1090, "./_strict-method": 1102 }], 985: [function (require, module, exports) {
    'use strict';
    var $export = require('./_export');
    var $some = require('./_array-methods')(3);

    $export($export.P + $export.F * !require('./_strict-method')([].some, true), 'Array', {
      // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
      some: function some(callbackfn /* , thisArg */) {
        return $some(this, callbackfn, arguments[1]);
      }
    });

  }, { "./_export": 882, "./_array-methods": 1090, "./_strict-method": 1102 }], 987: [function (require, module, exports) {
    'use strict';
    var $export = require('./_export');
    var $every = require('./_array-methods')(4);

    $export($export.P + $export.F * !require('./_strict-method')([].every, true), 'Array', {
      // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
      every: function every(callbackfn /* , thisArg */) {
        return $every(this, callbackfn, arguments[1]);
      }
    });

  }, { "./_export": 882, "./_array-methods": 1090, "./_strict-method": 1102 }], 1125: [function (require, module, exports) {
    var aFunction = require('./_a-function');
    var toObject = require('./_to-object');
    var IObject = require('./_iobject');
    var toLength = require('./_to-length');

    module.exports = function (that, callbackfn, aLen, memo, isRight) {
      aFunction(callbackfn);
      var O = toObject(that);
      var self = IObject(O);
      var length = toLength(O.length);
      var index = isRight ? length - 1 : 0;
      var i = isRight ? -1 : 1;
      if (aLen < 2) for (; ;) {
        if (index in self) {
          memo = self[index];
          index += i;
          break;
        }
        index += i;
        if (isRight ? index < 0 : length <= index) {
          throw TypeError('Reduce of empty array with no initial value');
        }
      }
      for (; isRight ? index >= 0 : length > index; index += i) if (index in self) {
        memo = callbackfn(memo, self[index], index, O);
      }
      return memo;
    };

  }, { "./_a-function": 887, "./_to-object": 886, "./_iobject": 1078, "./_to-length": 883 }], 986: [function (require, module, exports) {
    'use strict';
    var $export = require('./_export');
    var $reduce = require('./_array-reduce');

    $export($export.P + $export.F * !require('./_strict-method')([].reduce, true), 'Array', {
      // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
      reduce: function reduce(callbackfn /* , initialValue */) {
        return $reduce(this, callbackfn, arguments.length, arguments[1], false);
      }
    });

  }, { "./_export": 882, "./_array-reduce": 1125, "./_strict-method": 1102 }], 988: [function (require, module, exports) {
    'use strict';
    var $export = require('./_export');
    var $reduce = require('./_array-reduce');

    $export($export.P + $export.F * !require('./_strict-method')([].reduceRight, true), 'Array', {
      // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
      reduceRight: function reduceRight(callbackfn /* , initialValue */) {
        return $reduce(this, callbackfn, arguments.length, arguments[1], true);
      }
    });

  }, { "./_export": 882, "./_array-reduce": 1125, "./_strict-method": 1102 }], 990: [function (require, module, exports) {
    'use strict';
    var $export = require('./_export');
    var $indexOf = require('./_array-includes')(false);
    var $native = [].indexOf;
    var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

    $export($export.P + $export.F * (NEGATIVE_ZERO || !require('./_strict-method')($native)), 'Array', {
      // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
      indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
        return NEGATIVE_ZERO
          // convert -0 to +0
          ? $native.apply(this, arguments) || 0
          : $indexOf(this, searchElement, arguments[1]);
      }
    });

  }, { "./_export": 882, "./_array-includes": 890, "./_strict-method": 1102 }], 989: [function (require, module, exports) {
    'use strict';
    var $export = require('./_export');
    var toIObject = require('./_to-iobject');
    var toInteger = require('./_to-integer');
    var toLength = require('./_to-length');
    var $native = [].lastIndexOf;
    var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

    $export($export.P + $export.F * (NEGATIVE_ZERO || !require('./_strict-method')($native)), 'Array', {
      // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
      lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
        // convert -0 to +0
        if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
        var O = toIObject(this);
        var length = toLength(O.length);
        var index = length - 1;
        if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
        if (index < 0) index = length + index;
        for (; index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
        return -1;
      }
    });

  }, { "./_export": 882, "./_to-iobject": 891, "./_to-integer": 1045, "./_to-length": 883, "./_strict-method": 1102 }], 1108: [function (require, module, exports) {
    // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
    'use strict';
    var toObject = require('./_to-object');
    var toAbsoluteIndex = require('./_to-absolute-index');
    var toLength = require('./_to-length');

    module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
      var O = toObject(this);
      var len = toLength(O.length);
      var to = toAbsoluteIndex(target, len);
      var from = toAbsoluteIndex(start, len);
      var end = arguments.length > 2 ? arguments[2] : undefined;
      var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
      var inc = 1;
      if (from < to && to < from + count) {
        inc = -1;
        from += count - 1;
        to += count - 1;
      }
      while (count-- > 0) {
        if (from in O) O[to] = O[from];
        else delete O[to];
        to += inc;
        from += inc;
      } return O;
    };

  }, { "./_to-object": 886, "./_to-absolute-index": 1077, "./_to-length": 883 }], 888: [function (require, module, exports) {
    // 22.1.3.31 Array.prototype[@@unscopables]
    var UNSCOPABLES = require('./_wks')('unscopables');
    var ArrayProto = Array.prototype;
    if (ArrayProto[UNSCOPABLES] == undefined) require('./_hide')(ArrayProto, UNSCOPABLES, {});
    module.exports = function (key) {
      ArrayProto[UNSCOPABLES][key] = true;
    };

  }, { "./_wks": 1041, "./_hide": 1042 }], 991: [function (require, module, exports) {
    // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
    var $export = require('./_export');

    $export($export.P, 'Array', { copyWithin: require('./_array-copy-within') });

    require('./_add-to-unscopables')('copyWithin');

  }, { "./_export": 882, "./_array-copy-within": 1108, "./_add-to-unscopables": 888 }], 1114: [function (require, module, exports) {
    // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
    'use strict';
    var toObject = require('./_to-object');
    var toAbsoluteIndex = require('./_to-absolute-index');
    var toLength = require('./_to-length');
    module.exports = function fill(value /* , start = 0, end = @length */) {
      var O = toObject(this);
      var length = toLength(O.length);
      var aLen = arguments.length;
      var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
      var end = aLen > 2 ? arguments[2] : undefined;
      var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
      while (endPos > index) O[index++] = value;
      return O;
    };

  }, { "./_to-object": 886, "./_to-absolute-index": 1077, "./_to-length": 883 }], 992: [function (require, module, exports) {
    // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
    var $export = require('./_export');

    $export($export.P, 'Array', { fill: require('./_array-fill') });

    require('./_add-to-unscopables')('fill');

  }, { "./_export": 882, "./_array-fill": 1114, "./_add-to-unscopables": 888 }], 995: [function (require, module, exports) {
    'use strict';
    // 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
    var $export = require('./_export');
    var $find = require('./_array-methods')(5);
    var KEY = 'find';
    var forced = true;
    // Shouldn't skip holes
    if (KEY in []) Array(1)[KEY](function () { forced = false; });
    $export($export.P + $export.F * forced, 'Array', {
      find: function find(callbackfn /* , that = undefined */) {
        return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      }
    });
    require('./_add-to-unscopables')(KEY);

  }, { "./_export": 882, "./_array-methods": 1090, "./_add-to-unscopables": 888 }], 993: [function (require, module, exports) {
    'use strict';
    // 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
    var $export = require('./_export');
    var $find = require('./_array-methods')(6);
    var KEY = 'findIndex';
    var forced = true;
    // Shouldn't skip holes
    if (KEY in []) Array(1)[KEY](function () { forced = false; });
    $export($export.P + $export.F * forced, 'Array', {
      findIndex: function findIndex(callbackfn /* , that = undefined */) {
        return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      }
    });
    require('./_add-to-unscopables')(KEY);

  }, { "./_export": 882, "./_array-methods": 1090, "./_add-to-unscopables": 888 }], 1067: [function (require, module, exports) {

    'use strict';
    var global = require('./_global');
    var dP = require('./_object-dp');
    var DESCRIPTORS = require('./_descriptors');
    var SPECIES = require('./_wks')('species');

    module.exports = function (KEY) {
      var C = global[KEY];
      if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
        configurable: true,
        get: function () { return this; }
      });
    };

  }, { "./_global": 1039, "./_object-dp": 1080, "./_descriptors": 1057, "./_wks": 1041 }], 994: [function (require, module, exports) {
    require('./_set-species')('Array');

  }, { "./_set-species": 1067 }], 1135: [function (require, module, exports) {
    module.exports = function (done, value) {
      return { value: value, done: !!done };
    };

  }, {}], 997: [function (require, module, exports) {
    'use strict';
    var addToUnscopables = require('./_add-to-unscopables');
    var step = require('./_iter-step');
    var Iterators = require('./_iterators');
    var toIObject = require('./_to-iobject');

    // 22.1.3.4 Array.prototype.entries()
    // 22.1.3.13 Array.prototype.keys()
    // 22.1.3.29 Array.prototype.values()
    // 22.1.3.30 Array.prototype[@@iterator]()
    module.exports = require('./_iter-define')(Array, 'Array', function (iterated, kind) {
      this._t = toIObject(iterated); // target
      this._i = 0;                   // next index
      this._k = kind;                // kind
      // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
    }, function () {
      var O = this._t;
      var kind = this._k;
      var index = this._i++;
      if (!O || index >= O.length) {
        this._t = undefined;
        return step(1);
      }
      if (kind == 'keys') return step(0, index);
      if (kind == 'values') return step(0, O[index]);
      return step(0, [index, O[index]]);
    }, 'values');

    // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
    Iterators.Arguments = Iterators.Array;

    addToUnscopables('keys');
    addToUnscopables('values');
    addToUnscopables('entries');

  }, { "./_add-to-unscopables": 888, "./_iter-step": 1135, "./_iterators": 1134, "./_to-iobject": 891, "./_iter-define": 1106 }], 1088: [function (require, module, exports) {
    'use strict';
    // 21.2.5.3 get RegExp.prototype.flags
    var anObject = require('./_an-object');
    module.exports = function () {
      var that = anObject(this);
      var result = '';
      if (that.global) result += 'g';
      if (that.ignoreCase) result += 'i';
      if (that.multiline) result += 'm';
      if (that.unicode) result += 'u';
      if (that.sticky) result += 'y';
      return result;
    };

  }, { "./_an-object": 1051 }], 998: [function (require, module, exports) {

    var global = require('./_global');
    var inheritIfRequired = require('./_inherit-if-required');
    var dP = require('./_object-dp').f;
    var gOPN = require('./_object-gopn').f;
    var isRegExp = require('./_is-regexp');
    var $flags = require('./_flags');
    var $RegExp = global.RegExp;
    var Base = $RegExp;
    var proto = $RegExp.prototype;
    var re1 = /a/g;
    var re2 = /a/g;
    // "new" creates a new object, old webkit buggy here
    var CORRECT_NEW = new $RegExp(re1) !== re1;

    if (require('./_descriptors') && (!CORRECT_NEW || require('./_fails')(function () {
      re2[require('./_wks')('match')] = false;
      // RegExp constructor can alter flags and IsRegExp works correct with @@match
      return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
    }))) {
      $RegExp = function RegExp(p, f) {
        var tiRE = this instanceof $RegExp;
        var piRE = isRegExp(p);
        var fiU = f === undefined;
        return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
          : inheritIfRequired(CORRECT_NEW
            ? new Base(piRE && !fiU ? p.source : p, f)
            : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
            , tiRE ? this : proto, $RegExp);
      };
      var proxy = function (key) {
        key in $RegExp || dP($RegExp, key, {
          configurable: true,
          get: function () { return Base[key]; },
          set: function (it) { Base[key] = it; }
        });
      };
      for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
      proto.constructor = $RegExp;
      $RegExp.prototype = proto;
      require('./_redefine')(global, 'RegExp', $RegExp);
    }

    require('./_set-species')('RegExp');

  }, { "./_global": 1039, "./_inherit-if-required": 1129, "./_object-dp": 1080, "./_object-gopn": 1052, "./_is-regexp": 1131, "./_flags": 1088, "./_descriptors": 1057, "./_fails": 1075, "./_wks": 1041, "./_redefine": 1074, "./_set-species": 1067 }], 1117: [function (require, module, exports) {
    'use strict';

    var regexpFlags = require('./_flags');

    var nativeExec = RegExp.prototype.exec;
    // This always refers to the native implementation, because the
    // String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
    // which loads this file before patching the method.
    var nativeReplace = String.prototype.replace;

    var patchedExec = nativeExec;

    var LAST_INDEX = 'lastIndex';

    var UPDATES_LAST_INDEX_WRONG = (function () {
      var re1 = /a/,
        re2 = /b*/g;
      nativeExec.call(re1, 'a');
      nativeExec.call(re2, 'a');
      return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
    })();

    // nonparticipating capturing group, copied from es5-shim's String#split patch.
    var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

    var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

    if (PATCH) {
      patchedExec = function exec(str) {
        var re = this;
        var lastIndex, reCopy, match, i;

        if (NPCG_INCLUDED) {
          reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
        }
        if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

        match = nativeExec.call(re, str);

        if (UPDATES_LAST_INDEX_WRONG && match) {
          re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
        }
        if (NPCG_INCLUDED && match && match.length > 1) {
          // Fix browsers whose `exec` methods don't consistently return `undefined`
          // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
          // eslint-disable-next-line no-loop-func
          nativeReplace.call(match[0], reCopy, function () {
            for (i = 1; i < arguments.length - 2; i++) {
              if (arguments[i] === undefined) match[i] = undefined;
            }
          });
        }

        return match;
      };
    }

    module.exports = patchedExec;

  }, { "./_flags": 1088 }], 1005: [function (require, module, exports) {
    'use strict';
    var regexpExec = require('./_regexp-exec');
    require('./_export')({
      target: 'RegExp',
      proto: true,
      forced: regexpExec !== /./.exec
    }, {
      exec: regexpExec
    });

  }, { "./_regexp-exec": 1117, "./_export": 882 }], 1000: [function (require, module, exports) {
    // 21.2.5.3 get RegExp.prototype.flags()
    if (require('./_descriptors') && /./g.flags != 'g') require('./_object-dp').f(RegExp.prototype, 'flags', {
      configurable: true,
      get: require('./_flags')
    });

  }, { "./_descriptors": 1057, "./_object-dp": 1080, "./_flags": 1088 }], 999: [function (require, module, exports) {

    'use strict';
    require('./es6.regexp.flags');
    var anObject = require('./_an-object');
    var $flags = require('./_flags');
    var DESCRIPTORS = require('./_descriptors');
    var TO_STRING = 'toString';
    var $toString = /./[TO_STRING];

    var define = function (fn) {
      require('./_redefine')(RegExp.prototype, TO_STRING, fn, true);
    };

    // 21.2.5.14 RegExp.prototype.toString()
    if (require('./_fails')(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
      define(function toString() {
        var R = anObject(this);
        return '/'.concat(R.source, '/',
          'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
      });
      // FF44- RegExp#toString has a wrong name
    } else if ($toString.name != TO_STRING) {
      define(function toString() {
        return $toString.call(this);
      });
    }

  }, { "./es6.regexp.flags": 1000, "./_an-object": 1051, "./_flags": 1088, "./_descriptors": 1057, "./_redefine": 1074, "./_fails": 1075 }], 1127: [function (require, module, exports) {
    'use strict';
    var at = require('./_string-at')(true);

    // `AdvanceStringIndex` abstract operation
    // https://tc39.github.io/ecma262/#sec-advancestringindex
    module.exports = function (S, index, unicode) {
      return index + (unicode ? at(S, index).length : 1);
    };

  }, { "./_string-at": 1105 }], 1128: [function (require, module, exports) {
    'use strict';

    var classof = require('./_classof');
    var builtinExec = RegExp.prototype.exec;

    // `RegExpExec` abstract operation
    // https://tc39.github.io/ecma262/#sec-regexpexec
    module.exports = function (R, S) {
      var exec = R.exec;
      if (typeof exec === 'function') {
        var result = exec.call(R, S);
        if (typeof result !== 'object') {
          throw new TypeError('RegExp exec method returned something other than an Object or null');
        }
        return result;
      }
      if (classof(R) !== 'RegExp') {
        throw new TypeError('RegExp#exec called on incompatible receiver');
      }
      return builtinExec.call(R, S);
    };

  }, { "./_classof": 1059 }], 1126: [function (require, module, exports) {
    'use strict';
    require('./es6.regexp.exec');
    var redefine = require('./_redefine');
    var hide = require('./_hide');
    var fails = require('./_fails');
    var defined = require('./_defined');
    var wks = require('./_wks');
    var regexpExec = require('./_regexp-exec');

    var SPECIES = wks('species');

    var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
      // #replace needs built-in support for named groups.
      // #match works fine because it just return the exec results, even if it has
      // a "grops" property.
      var re = /./;
      re.exec = function () {
        var result = [];
        result.groups = { a: '7' };
        return result;
      };
      return ''.replace(re, '$<a>') !== '7';
    });

    var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
      // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
      var re = /(?:)/;
      var originalExec = re.exec;
      re.exec = function () { return originalExec.apply(this, arguments); };
      var result = 'ab'.split(re);
      return result.length === 2 && result[0] === 'a' && result[1] === 'b';
    })();

    module.exports = function (KEY, length, exec) {
      var SYMBOL = wks(KEY);

      var DELEGATES_TO_SYMBOL = !fails(function () {
        // String methods call symbol-named RegEp methods
        var O = {};
        O[SYMBOL] = function () { return 7; };
        return ''[KEY](O) != 7;
      });

      var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
        // Symbol-named RegExp methods call .exec
        var execCalled = false;
        var re = /a/;
        re.exec = function () { execCalled = true; return null; };
        if (KEY === 'split') {
          // RegExp[@@split] doesn't call the regex's exec method, but first creates
          // a new one. We need to return the patched regex when creating the new one.
          re.constructor = {};
          re.constructor[SPECIES] = function () { return re; };
        }
        re[SYMBOL]('');
        return !execCalled;
      }) : undefined;

      if (
        !DELEGATES_TO_SYMBOL ||
        !DELEGATES_TO_EXEC ||
        (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
        (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
      ) {
        var nativeRegExpMethod = /./[SYMBOL];
        var fns = exec(
          defined,
          SYMBOL,
          ''[KEY],
          function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
            if (regexp.exec === regexpExec) {
              if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
                // The native String method already delegates to @@method (this
                // polyfilled function), leasing to infinite recursion.
                // We avoid it by directly calling the native @@method method.
                return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
              }
              return { done: true, value: nativeMethod.call(str, regexp, arg2) };
            }
            return { done: false };
          }
        );
        var strfn = fns[0];
        var rxfn = fns[1];

        redefine(String.prototype, KEY, strfn);
        hide(RegExp.prototype, SYMBOL, length == 2
          // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
          // 21.2.5.11 RegExp.prototype[@@split](string, limit)
          ? function (string, arg) { return rxfn.call(string, this, arg); }
          // 21.2.5.6 RegExp.prototype[@@match](string)
          // 21.2.5.9 RegExp.prototype[@@search](string)
          : function (string) { return rxfn.call(string, this); }
        );
      }
    };

  }, { "./es6.regexp.exec": 1005, "./_redefine": 1074, "./_hide": 1042, "./_fails": 1075, "./_defined": 1043, "./_wks": 1041, "./_regexp-exec": 1117 }], 1003: [function (require, module, exports) {
    'use strict';

    var anObject = require('./_an-object');
    var toLength = require('./_to-length');
    var advanceStringIndex = require('./_advance-string-index');
    var regExpExec = require('./_regexp-exec-abstract');

    // @@match logic
    require('./_fix-re-wks')('match', 1, function (defined, MATCH, $match, maybeCallNative) {
      return [
        // `String.prototype.match` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.match
        function match(regexp) {
          var O = defined(this);
          var fn = regexp == undefined ? undefined : regexp[MATCH];
          return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
        },
        // `RegExp.prototype[@@match]` method
        // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
        function (regexp) {
          var res = maybeCallNative($match, regexp, this);
          if (res.done) return res.value;
          var rx = anObject(regexp);
          var S = String(this);
          if (!rx.global) return regExpExec(rx, S);
          var fullUnicode = rx.unicode;
          rx.lastIndex = 0;
          var A = [];
          var n = 0;
          var result;
          while ((result = regExpExec(rx, S)) !== null) {
            var matchStr = String(result[0]);
            A[n] = matchStr;
            if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
            n++;
          }
          return n === 0 ? null : A;
        }
      ];
    });

  }, { "./_an-object": 1051, "./_to-length": 883, "./_advance-string-index": 1127, "./_regexp-exec-abstract": 1128, "./_fix-re-wks": 1126 }], 1001: [function (require, module, exports) {
    var global = arguments[3];
    'use strict';

    var anObject = require('./_an-object');
    var toObject = require('./_to-object');
    var toLength = require('./_to-length');
    var toInteger = require('./_to-integer');
    var advanceStringIndex = require('./_advance-string-index');
    var regExpExec = require('./_regexp-exec-abstract');
    var max = Math.max;
    var min = Math.min;
    var floor = Math.floor;
    var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
    var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

    var maybeToString = function (it) {
      return it === undefined ? it : String(it);
    };

    // @@replace logic
    require('./_fix-re-wks')('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
      return [
        // `String.prototype.replace` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.replace
        function replace(searchValue, replaceValue) {
          var O = defined(this);
          var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
          return fn !== undefined
            ? fn.call(searchValue, O, replaceValue)
            : $replace.call(String(O), searchValue, replaceValue);
        },
        // `RegExp.prototype[@@replace]` method
        // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
        function (regexp, replaceValue) {
          var res = maybeCallNative($replace, regexp, this, replaceValue);
          if (res.done) return res.value;

          var rx = anObject(regexp);
          var S = String(this);
          var functionalReplace = typeof replaceValue === 'function';
          if (!functionalReplace) replaceValue = String(replaceValue);
          var global = rx.global;
          if (global) {
            var fullUnicode = rx.unicode;
            rx.lastIndex = 0;
          }
          var results = [];
          while (true) {
            var result = regExpExec(rx, S);
            if (result === null) break;
            results.push(result);
            if (!global) break;
            var matchStr = String(result[0]);
            if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
          }
          var accumulatedResult = '';
          var nextSourcePosition = 0;
          for (var i = 0; i < results.length; i++) {
            result = results[i];
            var matched = String(result[0]);
            var position = max(min(toInteger(result.index), S.length), 0);
            var captures = [];
            // NOTE: This is equivalent to
            //   captures = result.slice(1).map(maybeToString)
            // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
            // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
            // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
            for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
            var namedCaptures = result.groups;
            if (functionalReplace) {
              var replacerArgs = [matched].concat(captures, position, S);
              if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
              var replacement = String(replaceValue.apply(undefined, replacerArgs));
            } else {
              replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
            }
            if (position >= nextSourcePosition) {
              accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
              nextSourcePosition = position + matched.length;
            }
          }
          return accumulatedResult + S.slice(nextSourcePosition);
        }
      ];

      // https://tc39.github.io/ecma262/#sec-getsubstitution
      function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
        var tailPos = position + matched.length;
        var m = captures.length;
        var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
        if (namedCaptures !== undefined) {
          namedCaptures = toObject(namedCaptures);
          symbols = SUBSTITUTION_SYMBOLS;
        }
        return $replace.call(replacement, symbols, function (match, ch) {
          var capture;
          switch (ch.charAt(0)) {
            case '$': return '$';
            case '&': return matched;
            case '`': return str.slice(0, position);
            case "'": return str.slice(tailPos);
            case '<':
              capture = namedCaptures[ch.slice(1, -1)];
              break;
            default: // \d\d?
              var n = +ch;
              if (n === 0) return match;
              if (n > m) {
                var f = floor(n / 10);
                if (f === 0) return match;
                if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
                return match;
              }
              capture = captures[n - 1];
          }
          return capture === undefined ? '' : capture;
        });
      }
    });

  }, { "./_an-object": 1051, "./_to-object": 886, "./_to-length": 883, "./_to-integer": 1045, "./_advance-string-index": 1127, "./_regexp-exec-abstract": 1128, "./_fix-re-wks": 1126 }], 1004: [function (require, module, exports) {
    'use strict';

    var anObject = require('./_an-object');
    var sameValue = require('./_same-value');
    var regExpExec = require('./_regexp-exec-abstract');

    // @@search logic
    require('./_fix-re-wks')('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
      return [
        // `String.prototype.search` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.search
        function search(regexp) {
          var O = defined(this);
          var fn = regexp == undefined ? undefined : regexp[SEARCH];
          return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
        },
        // `RegExp.prototype[@@search]` method
        // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
        function (regexp) {
          var res = maybeCallNative($search, regexp, this);
          if (res.done) return res.value;
          var rx = anObject(regexp);
          var S = String(this);
          var previousLastIndex = rx.lastIndex;
          if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
          var result = regExpExec(rx, S);
          if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
          return result === null ? -1 : result.index;
        }
      ];
    });

  }, { "./_an-object": 1051, "./_same-value": 1087, "./_regexp-exec-abstract": 1128, "./_fix-re-wks": 1126 }], 1044: [function (require, module, exports) {
    // 7.3.20 SpeciesConstructor(O, defaultConstructor)
    var anObject = require('./_an-object');
    var aFunction = require('./_a-function');
    var SPECIES = require('./_wks')('species');
    module.exports = function (O, D) {
      var C = anObject(O).constructor;
      var S;
      return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
    };

  }, { "./_an-object": 1051, "./_a-function": 887, "./_wks": 1041 }], 1002: [function (require, module, exports) {
    'use strict';

    var isRegExp = require('./_is-regexp');
    var anObject = require('./_an-object');
    var speciesConstructor = require('./_species-constructor');
    var advanceStringIndex = require('./_advance-string-index');
    var toLength = require('./_to-length');
    var callRegExpExec = require('./_regexp-exec-abstract');
    var regexpExec = require('./_regexp-exec');
    var fails = require('./_fails');
    var $min = Math.min;
    var $push = [].push;
    var $SPLIT = 'split';
    var LENGTH = 'length';
    var LAST_INDEX = 'lastIndex';
    var MAX_UINT32 = 0xffffffff;

    // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
    var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

    // @@split logic
    require('./_fix-re-wks')('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
      var internalSplit;
      if (
        'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
        'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
        'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
        '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
        '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
        ''[$SPLIT](/.?/)[LENGTH]
      ) {
        // based on es5-shim implementation, need to rework it
        internalSplit = function (separator, limit) {
          var string = String(this);
          if (separator === undefined && limit === 0) return [];
          // If `separator` is not a regex, use native split
          if (!isRegExp(separator)) return $split.call(string, separator, limit);
          var output = [];
          var flags = (separator.ignoreCase ? 'i' : '') +
            (separator.multiline ? 'm' : '') +
            (separator.unicode ? 'u' : '') +
            (separator.sticky ? 'y' : '');
          var lastLastIndex = 0;
          var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
          // Make `global` and avoid `lastIndex` issues by working with a copy
          var separatorCopy = new RegExp(separator.source, flags + 'g');
          var match, lastIndex, lastLength;
          while (match = regexpExec.call(separatorCopy, string)) {
            lastIndex = separatorCopy[LAST_INDEX];
            if (lastIndex > lastLastIndex) {
              output.push(string.slice(lastLastIndex, match.index));
              if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
              lastLength = match[0][LENGTH];
              lastLastIndex = lastIndex;
              if (output[LENGTH] >= splitLimit) break;
            }
            if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
          }
          if (lastLastIndex === string[LENGTH]) {
            if (lastLength || !separatorCopy.test('')) output.push('');
          } else output.push(string.slice(lastLastIndex));
          return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
        };
        // Chakra, V8
      } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
        internalSplit = function (separator, limit) {
          return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
        };
      } else {
        internalSplit = $split;
      }

      return [
        // `String.prototype.split` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.split
        function split(separator, limit) {
          var O = defined(this);
          var splitter = separator == undefined ? undefined : separator[SPLIT];
          return splitter !== undefined
            ? splitter.call(separator, O, limit)
            : internalSplit.call(String(O), separator, limit);
        },
        // `RegExp.prototype[@@split]` method
        // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
        //
        // NOTE: This cannot be properly polyfilled in engines that don't support
        // the 'y' flag.
        function (regexp, limit) {
          var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
          if (res.done) return res.value;

          var rx = anObject(regexp);
          var S = String(this);
          var C = speciesConstructor(rx, RegExp);

          var unicodeMatching = rx.unicode;
          var flags = (rx.ignoreCase ? 'i' : '') +
            (rx.multiline ? 'm' : '') +
            (rx.unicode ? 'u' : '') +
            (SUPPORTS_Y ? 'y' : 'g');

          // ^(? + rx + ) is needed, in combination with some S slicing, to
          // simulate the 'y' flag.
          var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
          var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
          if (lim === 0) return [];
          if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
          var p = 0;
          var q = 0;
          var A = [];
          while (q < S.length) {
            splitter.lastIndex = SUPPORTS_Y ? q : 0;
            var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
            var e;
            if (
              z === null ||
              (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
            ) {
              q = advanceStringIndex(S, q, unicodeMatching);
            } else {
              A.push(S.slice(p, q));
              if (A.length === lim) return A;
              for (var i = 1; i <= z.length - 1; i++) {
                A.push(z[i]);
                if (A.length === lim) return A;
              }
              q = p = e;
            }
          }
          A.push(S.slice(p));
          return A;
        }
      ];
    });

  }, { "./_is-regexp": 1131, "./_an-object": 1051, "./_species-constructor": 1044, "./_advance-string-index": 1127, "./_to-length": 883, "./_regexp-exec-abstract": 1128, "./_regexp-exec": 1117, "./_fails": 1075, "./_fix-re-wks": 1126 }], 1060: [function (require, module, exports) {
    module.exports = function (it, Constructor, name, forbiddenField) {
      if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
        throw TypeError(name + ': incorrect invocation!');
      } return it;
    };

  }, {}], 1064: [function (require, module, exports) {
    var ctx = require('./_ctx');
    var call = require('./_iter-call');
    var isArrayIter = require('./_is-array-iter');
    var anObject = require('./_an-object');
    var toLength = require('./_to-length');
    var getIterFn = require('./core.get-iterator-method');
    var BREAK = {};
    var RETURN = {};
    var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
      var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
      var f = ctx(fn, that, entries ? 2 : 1);
      var index = 0;
      var length, step, iterator, result;
      if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
      // fast case for arrays with default iterator
      if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
        result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
        if (result === BREAK || result === RETURN) return result;
      } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
        result = call(iterator, f, step.value, entries);
        if (result === BREAK || result === RETURN) return result;
      }
    };
    exports.BREAK = BREAK;
    exports.RETURN = RETURN;

  }, { "./_ctx": 1062, "./_iter-call": 1110, "./_is-array-iter": 1111, "./_an-object": 1051, "./_to-length": 883, "./core.get-iterator-method": 1112 }], 1068: [function (require, module, exports) {


    var ctx = require('./_ctx');
    var invoke = require('./_invoke');
    var html = require('./_html');
    var cel = require('./_dom-create');
    var global = require('./_global');
    var process = global.process;
    var setTask = global.setImmediate;
    var clearTask = global.clearImmediate;
    var MessageChannel = global.MessageChannel;
    var Dispatch = global.Dispatch;
    var counter = 0;
    var queue = {};
    var ONREADYSTATECHANGE = 'onreadystatechange';
    var defer, channel, port;
    var run = function () {
      var id = +this;
      // eslint-disable-next-line no-prototype-builtins
      if (queue.hasOwnProperty(id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
      }
    };
    var listener = function (event) {
      run.call(event.data);
    };
    // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
    if (!setTask || !clearTask) {
      setTask = function setImmediate(fn) {
        var args = [];
        var i = 1;
        while (arguments.length > i) args.push(arguments[i++]);
        queue[++counter] = function () {
          // eslint-disable-next-line no-new-func
          invoke(typeof fn == 'function' ? fn : Function(fn), args);
        };
        defer(counter);
        return counter;
      };
      clearTask = function clearImmediate(id) {
        delete queue[id];
      };
      // Node.js 0.8-
      if (require('./_cof')(process) == 'process') {
        defer = function (id) {
          process.nextTick(ctx(run, id, 1));
        };
        // Sphere (JS game engine) Dispatch API
      } else if (Dispatch && Dispatch.now) {
        defer = function (id) {
          Dispatch.now(ctx(run, id, 1));
        };
        // Browsers with MessageChannel, includes WebWorkers
      } else if (MessageChannel) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = listener;
        defer = ctx(port.postMessage, port, 1);
        // Browsers with postMessage, skip WebWorkers
        // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
      } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
        defer = function (id) {
          global.postMessage(id + '', '*');
        };
        global.addEventListener('message', listener, false);
        // IE8-
      } else if (ONREADYSTATECHANGE in cel('script')) {
        defer = function (id) {
          html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
            html.removeChild(this);
            run.call(id);
          };
        };
        // Rest old browsers
      } else {
        defer = function (id) {
          setTimeout(ctx(run, id, 1), 0);
        };
      }
    }
    module.exports = {
      set: setTask,
      clear: clearTask
    };

  }, { "./_ctx": 1062, "./_invoke": 1140, "./_html": 1099, "./_dom-create": 1138, "./_global": 1039, "./_cof": 1100 }], 1063: [function (require, module, exports) {


    var global = require('./_global');
    var macrotask = require('./_task').set;
    var Observer = global.MutationObserver || global.WebKitMutationObserver;
    var process = global.process;
    var Promise = global.Promise;
    var isNode = require('./_cof')(process) == 'process';

    module.exports = function () {
      var head, last, notify;

      var flush = function () {
        var parent, fn;
        if (isNode && (parent = process.domain)) parent.exit();
        while (head) {
          fn = head.fn;
          head = head.next;
          try {
            fn();
          } catch (e) {
            if (head) notify();
            else last = undefined;
            throw e;
          }
        } last = undefined;
        if (parent) parent.enter();
      };

      // Node.js
      if (isNode) {
        notify = function () {
          process.nextTick(flush);
        };
        // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
      } else if (Observer && !(global.navigator && global.navigator.standalone)) {
        var toggle = true;
        var node = document.createTextNode('');
        new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
        notify = function () {
          node.data = toggle = !toggle;
        };
        // environments with maybe non-completely correct, but existent Promise
      } else if (Promise && Promise.resolve) {
        // Promise.resolve without an argument throws an error in LG WebOS 2
        var promise = Promise.resolve(undefined);
        notify = function () {
          promise.then(flush);
        };
        // for other environments - macrotask based on:
        // - setImmediate
        // - MessageChannel
        // - window.postMessag
        // - onreadystatechange
        // - setTimeout
      } else {
        notify = function () {
          // strange IE + webpack dev server bug - use .call(global)
          macrotask.call(global, flush);
        };
      }

      return function (fn) {
        var task = { fn: fn, next: undefined };
        if (last) last.next = task;
        if (!head) {
          head = task;
          notify();
        } last = task;
      };
    };

  }, { "./_global": 1039, "./_task": 1068, "./_cof": 1100 }], 1065: [function (require, module, exports) {
    'use strict';
    // 25.4.1.5 NewPromiseCapability(C)
    var aFunction = require('./_a-function');

    function PromiseCapability(C) {
      var resolve, reject;
      this.promise = new C(function ($$resolve, $$reject) {
        if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
        resolve = $$resolve;
        reject = $$reject;
      });
      this.resolve = aFunction(resolve);
      this.reject = aFunction(reject);
    }

    module.exports.f = function (C) {
      return new PromiseCapability(C);
    };

  }, { "./_a-function": 887 }], 1070: [function (require, module, exports) {
    module.exports = function (exec) {
      try {
        return { e: false, v: exec() };
      } catch (e) {
        return { e: true, v: e };
      }
    };

  }, {}], 897: [function (require, module, exports) {

    var global = require('./_global');
    var navigator = global.navigator;

    module.exports = navigator && navigator.userAgent || '';

  }, { "./_global": 1039 }], 1040: [function (require, module, exports) {
    var anObject = require('./_an-object');
    var isObject = require('./_is-object');
    var newPromiseCapability = require('./_new-promise-capability');

    module.exports = function (C, x) {
      anObject(C);
      if (isObject(x) && x.constructor === C) return x;
      var promiseCapability = newPromiseCapability.f(C);
      var resolve = promiseCapability.resolve;
      resolve(x);
      return promiseCapability.promise;
    };

  }, { "./_an-object": 1051, "./_is-object": 1072, "./_new-promise-capability": 1065 }], 1071: [function (require, module, exports) {
    var redefine = require('./_redefine');
    module.exports = function (target, src, safe) {
      for (var key in src) redefine(target, key, src[key], safe);
      return target;
    };

  }, { "./_redefine": 1074 }], 878: [function (require, module, exports) {


    'use strict';
    var LIBRARY = require('./_library');
    var global = require('./_global');
    var ctx = require('./_ctx');
    var classof = require('./_classof');
    var $export = require('./_export');
    var isObject = require('./_is-object');
    var aFunction = require('./_a-function');
    var anInstance = require('./_an-instance');
    var forOf = require('./_for-of');
    var speciesConstructor = require('./_species-constructor');
    var task = require('./_task').set;
    var microtask = require('./_microtask')();
    var newPromiseCapabilityModule = require('./_new-promise-capability');
    var perform = require('./_perform');
    var userAgent = require('./_user-agent');
    var promiseResolve = require('./_promise-resolve');
    var PROMISE = 'Promise';
    var TypeError = global.TypeError;
    var process = global.process;
    var versions = process && process.versions;
    var v8 = versions && versions.v8 || '';
    var $Promise = global[PROMISE];
    var isNode = classof(process) == 'process';
    var empty = function () { /* empty */ };
    var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
    var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

    var USE_NATIVE = !!function () {
      try {
        // correct subclassing with @@species support
        var promise = $Promise.resolve(1);
        var FakePromise = (promise.constructor = {})[require('./_wks')('species')] = function (exec) {
          exec(empty, empty);
        };
        // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
        return (isNode || typeof PromiseRejectionEvent == 'function')
          && promise.then(empty) instanceof FakePromise
          // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
          // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
          // we can't detect it synchronously, so just check versions
          && v8.indexOf('6.6') !== 0
          && userAgent.indexOf('Chrome/66') === -1;
      } catch (e) { /* empty */ }
    }();

    // helpers
    var isThenable = function (it) {
      var then;
      return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
    };
    var notify = function (promise, isReject) {
      if (promise._n) return;
      promise._n = true;
      var chain = promise._c;
      microtask(function () {
        var value = promise._v;
        var ok = promise._s == 1;
        var i = 0;
        var run = function (reaction) {
          var handler = ok ? reaction.ok : reaction.fail;
          var resolve = reaction.resolve;
          var reject = reaction.reject;
          var domain = reaction.domain;
          var result, then, exited;
          try {
            if (handler) {
              if (!ok) {
                if (promise._h == 2) onHandleUnhandled(promise);
                promise._h = 1;
              }
              if (handler === true) result = value;
              else {
                if (domain) domain.enter();
                result = handler(value); // may throw
                if (domain) {
                  domain.exit();
                  exited = true;
                }
              }
              if (result === reaction.promise) {
                reject(TypeError('Promise-chain cycle'));
              } else if (then = isThenable(result)) {
                then.call(result, resolve, reject);
              } else resolve(result);
            } else reject(value);
          } catch (e) {
            if (domain && !exited) domain.exit();
            reject(e);
          }
        };
        while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
        promise._c = [];
        promise._n = false;
        if (isReject && !promise._h) onUnhandled(promise);
      });
    };
    var onUnhandled = function (promise) {
      task.call(global, function () {
        var value = promise._v;
        var unhandled = isUnhandled(promise);
        var result, handler, console;
        if (unhandled) {
          result = perform(function () {
            if (isNode) {
              process.emit('unhandledRejection', value, promise);
            } else if (handler = global.onunhandledrejection) {
              handler({ promise: promise, reason: value });
            } else if ((console = global.console) && console.error) {
              console.error('Unhandled promise rejection', value);
            }
          });
          // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
          promise._h = isNode || isUnhandled(promise) ? 2 : 1;
        } promise._a = undefined;
        if (unhandled && result.e) throw result.v;
      });
    };
    var isUnhandled = function (promise) {
      return promise._h !== 1 && (promise._a || promise._c).length === 0;
    };
    var onHandleUnhandled = function (promise) {
      task.call(global, function () {
        var handler;
        if (isNode) {
          process.emit('rejectionHandled', promise);
        } else if (handler = global.onrejectionhandled) {
          handler({ promise: promise, reason: promise._v });
        }
      });
    };
    var $reject = function (value) {
      var promise = this;
      if (promise._d) return;
      promise._d = true;
      promise = promise._w || promise; // unwrap
      promise._v = value;
      promise._s = 2;
      if (!promise._a) promise._a = promise._c.slice();
      notify(promise, true);
    };
    var $resolve = function (value) {
      var promise = this;
      var then;
      if (promise._d) return;
      promise._d = true;
      promise = promise._w || promise; // unwrap
      try {
        if (promise === value) throw TypeError("Promise can't be resolved itself");
        if (then = isThenable(value)) {
          microtask(function () {
            var wrapper = { _w: promise, _d: false }; // wrap
            try {
              then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
            } catch (e) {
              $reject.call(wrapper, e);
            }
          });
        } else {
          promise._v = value;
          promise._s = 1;
          notify(promise, false);
        }
      } catch (e) {
        $reject.call({ _w: promise, _d: false }, e); // wrap
      }
    };

    // constructor polyfill
    if (!USE_NATIVE) {
      // 25.4.3.1 Promise(executor)
      $Promise = function Promise(executor) {
        anInstance(this, $Promise, PROMISE, '_h');
        aFunction(executor);
        Internal.call(this);
        try {
          executor(ctx($resolve, this, 1), ctx($reject, this, 1));
        } catch (err) {
          $reject.call(this, err);
        }
      };
      // eslint-disable-next-line no-unused-vars
      Internal = function Promise(executor) {
        this._c = [];             // <- awaiting reactions
        this._a = undefined;      // <- checked in isUnhandled reactions
        this._s = 0;              // <- state
        this._d = false;          // <- done
        this._v = undefined;      // <- value
        this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
        this._n = false;          // <- notify
      };
      Internal.prototype = require('./_redefine-all')($Promise.prototype, {
        // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
        then: function then(onFulfilled, onRejected) {
          var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
          reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
          reaction.fail = typeof onRejected == 'function' && onRejected;
          reaction.domain = isNode ? process.domain : undefined;
          this._c.push(reaction);
          if (this._a) this._a.push(reaction);
          if (this._s) notify(this, false);
          return reaction.promise;
        },
        // 25.4.5.1 Promise.prototype.catch(onRejected)
        'catch': function (onRejected) {
          return this.then(undefined, onRejected);
        }
      });
      OwnPromiseCapability = function () {
        var promise = new Internal();
        this.promise = promise;
        this.resolve = ctx($resolve, promise, 1);
        this.reject = ctx($reject, promise, 1);
      };
      newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
        return C === $Promise || C === Wrapper
          ? new OwnPromiseCapability(C)
          : newGenericPromiseCapability(C);
      };
    }

    $export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
    require('./_set-to-string-tag')($Promise, PROMISE);
    require('./_set-species')(PROMISE);
    Wrapper = require('./_core')[PROMISE];

    // statics
    $export($export.S + $export.F * !USE_NATIVE, PROMISE, {
      // 25.4.4.5 Promise.reject(r)
      reject: function reject(r) {
        var capability = newPromiseCapability(this);
        var $$reject = capability.reject;
        $$reject(r);
        return capability.promise;
      }
    });
    $export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
      // 25.4.4.6 Promise.resolve(x)
      resolve: function resolve(x) {
        return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
      }
    });
    $export($export.S + $export.F * !(USE_NATIVE && require('./_iter-detect')(function (iter) {
      $Promise.all(iter)['catch'](empty);
    })), PROMISE, {
      // 25.4.4.1 Promise.all(iterable)
      all: function all(iterable) {
        var C = this;
        var capability = newPromiseCapability(C);
        var resolve = capability.resolve;
        var reject = capability.reject;
        var result = perform(function () {
          var values = [];
          var index = 0;
          var remaining = 1;
          forOf(iterable, false, function (promise) {
            var $index = index++;
            var alreadyCalled = false;
            values.push(undefined);
            remaining++;
            C.resolve(promise).then(function (value) {
              if (alreadyCalled) return;
              alreadyCalled = true;
              values[$index] = value;
              --remaining || resolve(values);
            }, reject);
          });
          --remaining || resolve(values);
        });
        if (result.e) reject(result.v);
        return capability.promise;
      },
      // 25.4.4.4 Promise.race(iterable)
      race: function race(iterable) {
        var C = this;
        var capability = newPromiseCapability(C);
        var reject = capability.reject;
        var result = perform(function () {
          forOf(iterable, false, function (promise) {
            C.resolve(promise).then(capability.resolve, reject);
          });
        });
        if (result.e) reject(result.v);
        return capability.promise;
      }
    });

  }, { "./_library": 1061, "./_global": 1039, "./_ctx": 1062, "./_classof": 1059, "./_export": 882, "./_is-object": 1072, "./_a-function": 887, "./_an-instance": 1060, "./_for-of": 1064, "./_species-constructor": 1044, "./_task": 1068, "./_microtask": 1063, "./_new-promise-capability": 1065, "./_perform": 1070, "./_user-agent": 897, "./_promise-resolve": 1040, "./_wks": 1041, "./_redefine-all": 1071, "./_set-to-string-tag": 1066, "./_set-species": 1067, "./_core": 870, "./_iter-detect": 1069 }], 1095: [function (require, module, exports) {
    var isObject = require('./_is-object');
    module.exports = function (it, TYPE) {
      if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
      return it;
    };

  }, { "./_is-object": 1072 }], 1096: [function (require, module, exports) {
    'use strict';
    var dP = require('./_object-dp').f;
    var create = require('./_object-create');
    var redefineAll = require('./_redefine-all');
    var ctx = require('./_ctx');
    var anInstance = require('./_an-instance');
    var forOf = require('./_for-of');
    var $iterDefine = require('./_iter-define');
    var step = require('./_iter-step');
    var setSpecies = require('./_set-species');
    var DESCRIPTORS = require('./_descriptors');
    var fastKey = require('./_meta').fastKey;
    var validate = require('./_validate-collection');
    var SIZE = DESCRIPTORS ? '_s' : 'size';

    var getEntry = function (that, key) {
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return that._i[index];
      // frozen object case
      for (entry = that._f; entry; entry = entry.n) {
        if (entry.k == key) return entry;
      }
    };

    module.exports = {
      getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
        var C = wrapper(function (that, iterable) {
          anInstance(that, C, NAME, '_i');
          that._t = NAME;         // collection type
          that._i = create(null); // index
          that._f = undefined;    // first entry
          that._l = undefined;    // last entry
          that[SIZE] = 0;         // size
          if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        });
        redefineAll(C.prototype, {
          // 23.1.3.1 Map.prototype.clear()
          // 23.2.3.2 Set.prototype.clear()
          clear: function clear() {
            for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
              entry.r = true;
              if (entry.p) entry.p = entry.p.n = undefined;
              delete data[entry.i];
            }
            that._f = that._l = undefined;
            that[SIZE] = 0;
          },
          // 23.1.3.3 Map.prototype.delete(key)
          // 23.2.3.4 Set.prototype.delete(value)
          'delete': function (key) {
            var that = validate(this, NAME);
            var entry = getEntry(that, key);
            if (entry) {
              var next = entry.n;
              var prev = entry.p;
              delete that._i[entry.i];
              entry.r = true;
              if (prev) prev.n = next;
              if (next) next.p = prev;
              if (that._f == entry) that._f = next;
              if (that._l == entry) that._l = prev;
              that[SIZE]--;
            } return !!entry;
          },
          // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
          // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
          forEach: function forEach(callbackfn /* , that = undefined */) {
            validate(this, NAME);
            var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
            var entry;
            while (entry = entry ? entry.n : this._f) {
              f(entry.v, entry.k, this);
              // revert to the last existing entry
              while (entry && entry.r) entry = entry.p;
            }
          },
          // 23.1.3.7 Map.prototype.has(key)
          // 23.2.3.7 Set.prototype.has(value)
          has: function has(key) {
            return !!getEntry(validate(this, NAME), key);
          }
        });
        if (DESCRIPTORS) dP(C.prototype, 'size', {
          get: function () {
            return validate(this, NAME)[SIZE];
          }
        });
        return C;
      },
      def: function (that, key, value) {
        var entry = getEntry(that, key);
        var prev, index;
        // change existing entry
        if (entry) {
          entry.v = value;
          // create new entry
        } else {
          that._l = entry = {
            i: index = fastKey(key, true), // <- index
            k: key,                        // <- key
            v: value,                      // <- value
            p: prev = that._l,             // <- previous entry
            n: undefined,                  // <- next entry
            r: false                       // <- removed
          };
          if (!that._f) that._f = entry;
          if (prev) prev.n = entry;
          that[SIZE]++;
          // add to index
          if (index !== 'F') that._i[index] = entry;
        } return that;
      },
      getEntry: getEntry,
      setStrong: function (C, NAME, IS_MAP) {
        // add .keys, .values, .entries, [@@iterator]
        // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
        $iterDefine(C, NAME, function (iterated, kind) {
          this._t = validate(iterated, NAME); // target
          this._k = kind;                     // kind
          this._l = undefined;                // previous
        }, function () {
          var that = this;
          var kind = that._k;
          var entry = that._l;
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
          // get next entry
          if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
            // or finish the iteration
            that._t = undefined;
            return step(1);
          }
          // return step by kind
          if (kind == 'keys') return step(0, entry.k);
          if (kind == 'values') return step(0, entry.v);
          return step(0, [entry.k, entry.v]);
        }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

        // add [@@species], 23.1.2.2, 23.2.2.2
        setSpecies(NAME);
      }
    };

  }, { "./_object-dp": 1080, "./_object-create": 1083, "./_redefine-all": 1071, "./_ctx": 1062, "./_an-instance": 1060, "./_for-of": 1064, "./_iter-define": 1106, "./_iter-step": 1135, "./_set-species": 1067, "./_descriptors": 1057, "./_meta": 1091, "./_validate-collection": 1095 }], 1094: [function (require, module, exports) {

    'use strict';
    var global = require('./_global');
    var $export = require('./_export');
    var redefine = require('./_redefine');
    var redefineAll = require('./_redefine-all');
    var meta = require('./_meta');
    var forOf = require('./_for-of');
    var anInstance = require('./_an-instance');
    var isObject = require('./_is-object');
    var fails = require('./_fails');
    var $iterDetect = require('./_iter-detect');
    var setToStringTag = require('./_set-to-string-tag');
    var inheritIfRequired = require('./_inherit-if-required');

    module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
      var Base = global[NAME];
      var C = Base;
      var ADDER = IS_MAP ? 'set' : 'add';
      var proto = C && C.prototype;
      var O = {};
      var fixMethod = function (KEY) {
        var fn = proto[KEY];
        redefine(proto, KEY,
          KEY == 'delete' ? function (a) {
            return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
          } : KEY == 'has' ? function has(a) {
            return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
          } : KEY == 'get' ? function get(a) {
            return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
          } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
            : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
        );
      };
      if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
        new C().entries().next();
      }))) {
        // create collection constructor
        C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
        redefineAll(C.prototype, methods);
        meta.NEED = true;
      } else {
        var instance = new C();
        // early implementations not supports chaining
        var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
        // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
        var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
        // most early implementations doesn't supports iterables, most modern - not close it correctly
        var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
        // for early implementations -0 and +0 not the same
        var BUGGY_ZERO = !IS_WEAK && fails(function () {
          // V8 ~ Chromium 42- fails only with 5+ elements
          var $instance = new C();
          var index = 5;
          while (index--) $instance[ADDER](index, index);
          return !$instance.has(-0);
        });
        if (!ACCEPT_ITERABLES) {
          C = wrapper(function (target, iterable) {
            anInstance(target, C, NAME);
            var that = inheritIfRequired(new Base(), target, C);
            if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
            return that;
          });
          C.prototype = proto;
          proto.constructor = C;
        }
        if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
          fixMethod('delete');
          fixMethod('has');
          IS_MAP && fixMethod('get');
        }
        if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
        // weak collections should not contains .clear method
        if (IS_WEAK && proto.clear) delete proto.clear;
      }

      setToStringTag(C, NAME);

      O[NAME] = C;
      $export($export.G + $export.W + $export.F * (C != Base), O);

      if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

      return C;
    };

  }, { "./_global": 1039, "./_export": 882, "./_redefine": 1074, "./_redefine-all": 1071, "./_meta": 1091, "./_for-of": 1064, "./_an-instance": 1060, "./_is-object": 1072, "./_fails": 1075, "./_iter-detect": 1069, "./_set-to-string-tag": 1066, "./_inherit-if-required": 1129 }], 1009: [function (require, module, exports) {
    'use strict';
    var strong = require('./_collection-strong');
    var validate = require('./_validate-collection');
    var MAP = 'Map';

    // 23.1 Map Objects
    module.exports = require('./_collection')(MAP, function (get) {
      return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
    }, {
      // 23.1.3.6 Map.prototype.get(key)
      get: function get(key) {
        var entry = strong.getEntry(validate(this, MAP), key);
        return entry && entry.v;
      },
      // 23.1.3.9 Map.prototype.set(key, value)
      set: function set(key, value) {
        return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
      }
    }, strong, true);

  }, { "./_collection-strong": 1096, "./_validate-collection": 1095, "./_collection": 1094 }], 1007: [function (require, module, exports) {
    'use strict';
    var strong = require('./_collection-strong');
    var validate = require('./_validate-collection');
    var SET = 'Set';

    // 23.2 Set Objects
    module.exports = require('./_collection')(SET, function (get) {
      return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
    }, {
      // 23.2.3.1 Set.prototype.add(value)
      add: function add(value) {
        return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
      }
    }, strong);

  }, { "./_collection-strong": 1096, "./_validate-collection": 1095, "./_collection": 1094 }], 1093: [function (require, module, exports) {
    'use strict';
    var redefineAll = require('./_redefine-all');
    var getWeak = require('./_meta').getWeak;
    var anObject = require('./_an-object');
    var isObject = require('./_is-object');
    var anInstance = require('./_an-instance');
    var forOf = require('./_for-of');
    var createArrayMethod = require('./_array-methods');
    var $has = require('./_has');
    var validate = require('./_validate-collection');
    var arrayFind = createArrayMethod(5);
    var arrayFindIndex = createArrayMethod(6);
    var id = 0;

    // fallback for uncaught frozen keys
    var uncaughtFrozenStore = function (that) {
      return that._l || (that._l = new UncaughtFrozenStore());
    };
    var UncaughtFrozenStore = function () {
      this.a = [];
    };
    var findUncaughtFrozen = function (store, key) {
      return arrayFind(store.a, function (it) {
        return it[0] === key;
      });
    };
    UncaughtFrozenStore.prototype = {
      get: function (key) {
        var entry = findUncaughtFrozen(this, key);
        if (entry) return entry[1];
      },
      has: function (key) {
        return !!findUncaughtFrozen(this, key);
      },
      set: function (key, value) {
        var entry = findUncaughtFrozen(this, key);
        if (entry) entry[1] = value;
        else this.a.push([key, value]);
      },
      'delete': function (key) {
        var index = arrayFindIndex(this.a, function (it) {
          return it[0] === key;
        });
        if (~index) this.a.splice(index, 1);
        return !!~index;
      }
    };

    module.exports = {
      getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
        var C = wrapper(function (that, iterable) {
          anInstance(that, C, NAME, '_i');
          that._t = NAME;      // collection type
          that._i = id++;      // collection id
          that._l = undefined; // leak store for uncaught frozen objects
          if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        });
        redefineAll(C.prototype, {
          // 23.3.3.2 WeakMap.prototype.delete(key)
          // 23.4.3.3 WeakSet.prototype.delete(value)
          'delete': function (key) {
            if (!isObject(key)) return false;
            var data = getWeak(key);
            if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
            return data && $has(data, this._i) && delete data[this._i];
          },
          // 23.3.3.4 WeakMap.prototype.has(key)
          // 23.4.3.4 WeakSet.prototype.has(value)
          has: function has(key) {
            if (!isObject(key)) return false;
            var data = getWeak(key);
            if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
            return data && $has(data, this._i);
          }
        });
        return C;
      },
      def: function (that, key, value) {
        var data = getWeak(anObject(key), true);
        if (data === true) uncaughtFrozenStore(that).set(key, value);
        else data[that._i] = value;
        return that;
      },
      ufstore: uncaughtFrozenStore
    };

  }, { "./_redefine-all": 1071, "./_meta": 1091, "./_an-object": 1051, "./_is-object": 1072, "./_an-instance": 1060, "./_for-of": 1064, "./_array-methods": 1090, "./_has": 1056, "./_validate-collection": 1095 }], 1010: [function (require, module, exports) {

    'use strict';
    var global = require('./_global');
    var each = require('./_array-methods')(0);
    var redefine = require('./_redefine');
    var meta = require('./_meta');
    var assign = require('./_object-assign');
    var weak = require('./_collection-weak');
    var isObject = require('./_is-object');
    var validate = require('./_validate-collection');
    var NATIVE_WEAK_MAP = require('./_validate-collection');
    var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
    var WEAK_MAP = 'WeakMap';
    var getWeak = meta.getWeak;
    var isExtensible = Object.isExtensible;
    var uncaughtFrozenStore = weak.ufstore;
    var InternalMap;

    var wrapper = function (get) {
      return function WeakMap() {
        return get(this, arguments.length > 0 ? arguments[0] : undefined);
      };
    };

    var methods = {
      // 23.3.3.3 WeakMap.prototype.get(key)
      get: function get(key) {
        if (isObject(key)) {
          var data = getWeak(key);
          if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
          return data ? data[this._i] : undefined;
        }
      },
      // 23.3.3.5 WeakMap.prototype.set(key, value)
      set: function set(key, value) {
        return weak.def(validate(this, WEAK_MAP), key, value);
      }
    };

    // 23.3 WeakMap Objects
    var $WeakMap = module.exports = require('./_collection')(WEAK_MAP, wrapper, methods, weak, true, true);

    // IE11 WeakMap frozen keys fix
    if (NATIVE_WEAK_MAP && IS_IE11) {
      InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
      assign(InternalMap.prototype, methods);
      meta.NEED = true;
      each(['delete', 'has', 'get', 'set'], function (key) {
        var proto = $WeakMap.prototype;
        var method = proto[key];
        redefine(proto, key, function (a, b) {
          // store frozen objects on internal weakmap shim
          if (isObject(a) && !isExtensible(a)) {
            if (!this._f) this._f = new InternalMap();
            var result = this._f[key](a, b);
            return key == 'set' ? this : result;
            // store all the rest on native weakmap
          } return method.call(this, a, b);
        });
      });
    }

  }, { "./_global": 1039, "./_array-methods": 1090, "./_redefine": 1074, "./_meta": 1091, "./_object-assign": 1092, "./_collection-weak": 1093, "./_is-object": 1072, "./_validate-collection": 1095, "./_collection": 1094 }], 1006: [function (require, module, exports) {
    'use strict';
    var weak = require('./_collection-weak');
    var validate = require('./_validate-collection');
    var WEAK_SET = 'WeakSet';

    // 23.4 WeakSet Objects
    require('./_collection')(WEAK_SET, function (get) {
      return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
    }, {
      // 23.4.3.1 WeakSet.prototype.add(value)
      add: function add(value) {
        return weak.def(validate(this, WEAK_SET), value, true);
      }
    }, weak, false, true);

  }, { "./_collection-weak": 1093, "./_validate-collection": 1095, "./_collection": 1094 }], 1119: [function (require, module, exports) {

    var global = require('./_global');
    var hide = require('./_hide');
    var uid = require('./_uid');
    var TYPED = uid('typed_array');
    var VIEW = uid('view');
    var ABV = !!(global.ArrayBuffer && global.DataView);
    var CONSTR = ABV;
    var i = 0;
    var l = 9;
    var Typed;

    var TypedArrayConstructors = (
      'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
    ).split(',');

    while (i < l) {
      if (Typed = global[TypedArrayConstructors[i++]]) {
        hide(Typed.prototype, TYPED, true);
        hide(Typed.prototype, VIEW, true);
      } else CONSTR = false;
    }

    module.exports = {
      ABV: ABV,
      CONSTR: CONSTR,
      TYPED: TYPED,
      VIEW: VIEW
    };

  }, { "./_global": 1039, "./_hide": 1042, "./_uid": 1122 }], 1146: [function (require, module, exports) {
    // https://tc39.github.io/ecma262/#sec-toindex
    var toInteger = require('./_to-integer');
    var toLength = require('./_to-length');
    module.exports = function (it) {
      if (it === undefined) return 0;
      var number = toInteger(it);
      var length = toLength(number);
      if (number !== length) throw RangeError('Wrong length!');
      return length;
    };

  }, { "./_to-integer": 1045, "./_to-length": 883 }], 1118: [function (require, module, exports) {

    'use strict';
    var global = require('./_global');
    var DESCRIPTORS = require('./_descriptors');
    var LIBRARY = require('./_library');
    var $typed = require('./_typed');
    var hide = require('./_hide');
    var redefineAll = require('./_redefine-all');
    var fails = require('./_fails');
    var anInstance = require('./_an-instance');
    var toInteger = require('./_to-integer');
    var toLength = require('./_to-length');
    var toIndex = require('./_to-index');
    var gOPN = require('./_object-gopn').f;
    var dP = require('./_object-dp').f;
    var arrayFill = require('./_array-fill');
    var setToStringTag = require('./_set-to-string-tag');
    var ARRAY_BUFFER = 'ArrayBuffer';
    var DATA_VIEW = 'DataView';
    var PROTOTYPE = 'prototype';
    var WRONG_LENGTH = 'Wrong length!';
    var WRONG_INDEX = 'Wrong index!';
    var $ArrayBuffer = global[ARRAY_BUFFER];
    var $DataView = global[DATA_VIEW];
    var Math = global.Math;
    var RangeError = global.RangeError;
    // eslint-disable-next-line no-shadow-restricted-names
    var Infinity = global.Infinity;
    var BaseBuffer = $ArrayBuffer;
    var abs = Math.abs;
    var pow = Math.pow;
    var floor = Math.floor;
    var log = Math.log;
    var LN2 = Math.LN2;
    var BUFFER = 'buffer';
    var BYTE_LENGTH = 'byteLength';
    var BYTE_OFFSET = 'byteOffset';
    var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
    var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
    var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

    // IEEE754 conversions based on https://github.com/feross/ieee754
    function packIEEE754(value, mLen, nBytes) {
      var buffer = new Array(nBytes);
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
      var i = 0;
      var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
      var e, m, c;
      value = abs(value);
      // eslint-disable-next-line no-self-compare
      if (value != value || value === Infinity) {
        // eslint-disable-next-line no-self-compare
        m = value != value ? 1 : 0;
        e = eMax;
      } else {
        e = floor(log(value) / LN2);
        if (value * (c = pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }
        if (e + eBias >= 1) {
          value += rt / c;
        } else {
          value += rt * pow(2, 1 - eBias);
        }
        if (value * c >= 2) {
          e++;
          c /= 2;
        }
        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value * c - 1) * pow(2, mLen);
          e = e + eBias;
        } else {
          m = value * pow(2, eBias - 1) * pow(2, mLen);
          e = 0;
        }
      }
      for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
      e = e << mLen | m;
      eLen += mLen;
      for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
      buffer[--i] |= s * 128;
      return buffer;
    }
    function unpackIEEE754(buffer, mLen, nBytes) {
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = eLen - 7;
      var i = nBytes - 1;
      var s = buffer[i--];
      var e = s & 127;
      var m;
      s >>= 7;
      for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
      m = e & (1 << -nBits) - 1;
      e >>= -nBits;
      nBits += mLen;
      for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
      if (e === 0) {
        e = 1 - eBias;
      } else if (e === eMax) {
        return m ? NaN : s ? -Infinity : Infinity;
      } else {
        m = m + pow(2, mLen);
        e = e - eBias;
      } return (s ? -1 : 1) * m * pow(2, e - mLen);
    }

    function unpackI32(bytes) {
      return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
    }
    function packI8(it) {
      return [it & 0xff];
    }
    function packI16(it) {
      return [it & 0xff, it >> 8 & 0xff];
    }
    function packI32(it) {
      return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
    }
    function packF64(it) {
      return packIEEE754(it, 52, 8);
    }
    function packF32(it) {
      return packIEEE754(it, 23, 4);
    }

    function addGetter(C, key, internal) {
      dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
    }

    function get(view, bytes, index, isLittleEndian) {
      var numIndex = +index;
      var intIndex = toIndex(numIndex);
      if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
      var store = view[$BUFFER]._b;
      var start = intIndex + view[$OFFSET];
      var pack = store.slice(start, start + bytes);
      return isLittleEndian ? pack : pack.reverse();
    }
    function set(view, bytes, index, conversion, value, isLittleEndian) {
      var numIndex = +index;
      var intIndex = toIndex(numIndex);
      if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
      var store = view[$BUFFER]._b;
      var start = intIndex + view[$OFFSET];
      var pack = conversion(+value);
      for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
    }

    if (!$typed.ABV) {
      $ArrayBuffer = function ArrayBuffer(length) {
        anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
        var byteLength = toIndex(length);
        this._b = arrayFill.call(new Array(byteLength), 0);
        this[$LENGTH] = byteLength;
      };

      $DataView = function DataView(buffer, byteOffset, byteLength) {
        anInstance(this, $DataView, DATA_VIEW);
        anInstance(buffer, $ArrayBuffer, DATA_VIEW);
        var bufferLength = buffer[$LENGTH];
        var offset = toInteger(byteOffset);
        if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
        byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
        if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
        this[$BUFFER] = buffer;
        this[$OFFSET] = offset;
        this[$LENGTH] = byteLength;
      };

      if (DESCRIPTORS) {
        addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
        addGetter($DataView, BUFFER, '_b');
        addGetter($DataView, BYTE_LENGTH, '_l');
        addGetter($DataView, BYTE_OFFSET, '_o');
      }

      redefineAll($DataView[PROTOTYPE], {
        getInt8: function getInt8(byteOffset) {
          return get(this, 1, byteOffset)[0] << 24 >> 24;
        },
        getUint8: function getUint8(byteOffset) {
          return get(this, 1, byteOffset)[0];
        },
        getInt16: function getInt16(byteOffset /* , littleEndian */) {
          var bytes = get(this, 2, byteOffset, arguments[1]);
          return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
        },
        getUint16: function getUint16(byteOffset /* , littleEndian */) {
          var bytes = get(this, 2, byteOffset, arguments[1]);
          return bytes[1] << 8 | bytes[0];
        },
        getInt32: function getInt32(byteOffset /* , littleEndian */) {
          return unpackI32(get(this, 4, byteOffset, arguments[1]));
        },
        getUint32: function getUint32(byteOffset /* , littleEndian */) {
          return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
        },
        getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
          return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
        },
        getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
          return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
        },
        setInt8: function setInt8(byteOffset, value) {
          set(this, 1, byteOffset, packI8, value);
        },
        setUint8: function setUint8(byteOffset, value) {
          set(this, 1, byteOffset, packI8, value);
        },
        setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
          set(this, 2, byteOffset, packI16, value, arguments[2]);
        },
        setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
          set(this, 2, byteOffset, packI16, value, arguments[2]);
        },
        setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
          set(this, 4, byteOffset, packI32, value, arguments[2]);
        },
        setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
          set(this, 4, byteOffset, packI32, value, arguments[2]);
        },
        setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
          set(this, 4, byteOffset, packF32, value, arguments[2]);
        },
        setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
          set(this, 8, byteOffset, packF64, value, arguments[2]);
        }
      });
    } else {
      if (!fails(function () {
        $ArrayBuffer(1);
      }) || !fails(function () {
        new $ArrayBuffer(-1); // eslint-disable-line no-new
      }) || fails(function () {
        new $ArrayBuffer(); // eslint-disable-line no-new
        new $ArrayBuffer(1.5); // eslint-disable-line no-new
        new $ArrayBuffer(NaN); // eslint-disable-line no-new
        return $ArrayBuffer.name != ARRAY_BUFFER;
      })) {
        $ArrayBuffer = function ArrayBuffer(length) {
          anInstance(this, $ArrayBuffer);
          return new BaseBuffer(toIndex(length));
        };
        var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
        for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
          if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
        }
        if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
      }
      // iOS Safari 7.x bug
      var view = new $DataView(new $ArrayBuffer(2));
      var $setInt8 = $DataView[PROTOTYPE].setInt8;
      view.setInt8(0, 2147483648);
      view.setInt8(1, 2147483649);
      if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
        setInt8: function setInt8(byteOffset, value) {
          $setInt8.call(this, byteOffset, value << 24 >> 24);
        },
        setUint8: function setUint8(byteOffset, value) {
          $setInt8.call(this, byteOffset, value << 24 >> 24);
        }
      }, true);
    }
    setToStringTag($ArrayBuffer, ARRAY_BUFFER);
    setToStringTag($DataView, DATA_VIEW);
    hide($DataView[PROTOTYPE], $typed.VIEW, true);
    exports[ARRAY_BUFFER] = $ArrayBuffer;
    exports[DATA_VIEW] = $DataView;

  }, { "./_global": 1039, "./_descriptors": 1057, "./_library": 1061, "./_typed": 1119, "./_hide": 1042, "./_redefine-all": 1071, "./_fails": 1075, "./_an-instance": 1060, "./_to-integer": 1045, "./_to-length": 883, "./_to-index": 1146, "./_object-gopn": 1052, "./_object-dp": 1080, "./_array-fill": 1114, "./_set-to-string-tag": 1066 }], 1014: [function (require, module, exports) {
    'use strict';
    var $export = require('./_export');
    var $typed = require('./_typed');
    var buffer = require('./_typed-buffer');
    var anObject = require('./_an-object');
    var toAbsoluteIndex = require('./_to-absolute-index');
    var toLength = require('./_to-length');
    var isObject = require('./_is-object');
    var ArrayBuffer = require('./_global').ArrayBuffer;
    var speciesConstructor = require('./_species-constructor');
    var $ArrayBuffer = buffer.ArrayBuffer;
    var $DataView = buffer.DataView;
    var $isView = $typed.ABV && ArrayBuffer.isView;
    var $slice = $ArrayBuffer.prototype.slice;
    var VIEW = $typed.VIEW;
    var ARRAY_BUFFER = 'ArrayBuffer';

    $export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

    $export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
      // 24.1.3.1 ArrayBuffer.isView(arg)
      isView: function isView(it) {
        return $isView && $isView(it) || isObject(it) && VIEW in it;
      }
    });

    $export($export.P + $export.U + $export.F * require('./_fails')(function () {
      return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
    }), ARRAY_BUFFER, {
      // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
      slice: function slice(start, end) {
        if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
        var len = anObject(this).byteLength;
        var first = toAbsoluteIndex(start, len);
        var fin = toAbsoluteIndex(end === undefined ? len : end, len);
        var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
        var viewS = new $DataView(this);
        var viewT = new $DataView(result);
        var index = 0;
        while (first < fin) {
          viewT.setUint8(index++, viewS.getUint8(first++));
        } return result;
      }
    });

    require('./_set-species')(ARRAY_BUFFER);

  }, { "./_export": 882, "./_typed": 1119, "./_typed-buffer": 1118, "./_an-object": 1051, "./_to-absolute-index": 1077, "./_to-length": 883, "./_is-object": 1072, "./_global": 1039, "./_species-constructor": 1044, "./_fails": 1075, "./_set-species": 1067 }], 1008: [function (require, module, exports) {
    var $export = require('./_export');
    $export($export.G + $export.W + $export.F * !require('./_typed').ABV, {
      DataView: require('./_typed-buffer').DataView
    });

  }, { "./_export": 882, "./_typed": 1119, "./_typed-buffer": 1118 }], 1104: [function (require, module, exports) {
    var global = arguments[3];
    'use strict';
    if (require('./_descriptors')) {
      var LIBRARY = require('./_library');
      var global = require('./_global');
      var fails = require('./_fails');
      var $export = require('./_export');
      var $typed = require('./_typed');
      var $buffer = require('./_typed-buffer');
      var ctx = require('./_ctx');
      var anInstance = require('./_an-instance');
      var propertyDesc = require('./_property-desc');
      var hide = require('./_hide');
      var redefineAll = require('./_redefine-all');
      var toInteger = require('./_to-integer');
      var toLength = require('./_to-length');
      var toIndex = require('./_to-index');
      var toAbsoluteIndex = require('./_to-absolute-index');
      var toPrimitive = require('./_to-primitive');
      var has = require('./_has');
      var classof = require('./_classof');
      var isObject = require('./_is-object');
      var toObject = require('./_to-object');
      var isArrayIter = require('./_is-array-iter');
      var create = require('./_object-create');
      var getPrototypeOf = require('./_object-gpo');
      var gOPN = require('./_object-gopn').f;
      var getIterFn = require('./core.get-iterator-method');
      var uid = require('./_uid');
      var wks = require('./_wks');
      var createArrayMethod = require('./_array-methods');
      var createArrayIncludes = require('./_array-includes');
      var speciesConstructor = require('./_species-constructor');
      var ArrayIterators = require('./es6.array.iterator');
      var Iterators = require('./_iterators');
      var $iterDetect = require('./_iter-detect');
      var setSpecies = require('./_set-species');
      var arrayFill = require('./_array-fill');
      var arrayCopyWithin = require('./_array-copy-within');
      var $DP = require('./_object-dp');
      var $GOPD = require('./_object-gopd');
      var dP = $DP.f;
      var gOPD = $GOPD.f;
      var RangeError = global.RangeError;
      var TypeError = global.TypeError;
      var Uint8Array = global.Uint8Array;
      var ARRAY_BUFFER = 'ArrayBuffer';
      var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
      var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
      var PROTOTYPE = 'prototype';
      var ArrayProto = Array[PROTOTYPE];
      var $ArrayBuffer = $buffer.ArrayBuffer;
      var $DataView = $buffer.DataView;
      var arrayForEach = createArrayMethod(0);
      var arrayFilter = createArrayMethod(2);
      var arraySome = createArrayMethod(3);
      var arrayEvery = createArrayMethod(4);
      var arrayFind = createArrayMethod(5);
      var arrayFindIndex = createArrayMethod(6);
      var arrayIncludes = createArrayIncludes(true);
      var arrayIndexOf = createArrayIncludes(false);
      var arrayValues = ArrayIterators.values;
      var arrayKeys = ArrayIterators.keys;
      var arrayEntries = ArrayIterators.entries;
      var arrayLastIndexOf = ArrayProto.lastIndexOf;
      var arrayReduce = ArrayProto.reduce;
      var arrayReduceRight = ArrayProto.reduceRight;
      var arrayJoin = ArrayProto.join;
      var arraySort = ArrayProto.sort;
      var arraySlice = ArrayProto.slice;
      var arrayToString = ArrayProto.toString;
      var arrayToLocaleString = ArrayProto.toLocaleString;
      var ITERATOR = wks('iterator');
      var TAG = wks('toStringTag');
      var TYPED_CONSTRUCTOR = uid('typed_constructor');
      var DEF_CONSTRUCTOR = uid('def_constructor');
      var ALL_CONSTRUCTORS = $typed.CONSTR;
      var TYPED_ARRAY = $typed.TYPED;
      var VIEW = $typed.VIEW;
      var WRONG_LENGTH = 'Wrong length!';

      var $map = createArrayMethod(1, function (O, length) {
        return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
      });

      var LITTLE_ENDIAN = fails(function () {
        // eslint-disable-next-line no-undef
        return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
      });

      var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
        new Uint8Array(1).set({});
      });

      var toOffset = function (it, BYTES) {
        var offset = toInteger(it);
        if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
        return offset;
      };

      var validate = function (it) {
        if (isObject(it) && TYPED_ARRAY in it) return it;
        throw TypeError(it + ' is not a typed array!');
      };

      var allocate = function (C, length) {
        if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
          throw TypeError('It is not a typed array constructor!');
        } return new C(length);
      };

      var speciesFromList = function (O, list) {
        return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
      };

      var fromList = function (C, list) {
        var index = 0;
        var length = list.length;
        var result = allocate(C, length);
        while (length > index) result[index] = list[index++];
        return result;
      };

      var addGetter = function (it, key, internal) {
        dP(it, key, { get: function () { return this._d[internal]; } });
      };

      var $from = function from(source /* , mapfn, thisArg */) {
        var O = toObject(source);
        var aLen = arguments.length;
        var mapfn = aLen > 1 ? arguments[1] : undefined;
        var mapping = mapfn !== undefined;
        var iterFn = getIterFn(O);
        var i, length, values, result, step, iterator;
        if (iterFn != undefined && !isArrayIter(iterFn)) {
          for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
            values.push(step.value);
          } O = values;
        }
        if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
        for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
          result[i] = mapping ? mapfn(O[i], i) : O[i];
        }
        return result;
      };

      var $of = function of(/* ...items */) {
        var index = 0;
        var length = arguments.length;
        var result = allocate(this, length);
        while (length > index) result[index] = arguments[index++];
        return result;
      };

      // iOS Safari 6.x fails here
      var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

      var $toLocaleString = function toLocaleString() {
        return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
      };

      var proto = {
        copyWithin: function copyWithin(target, start /* , end */) {
          return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
        },
        every: function every(callbackfn /* , thisArg */) {
          return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        },
        fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
          return arrayFill.apply(validate(this), arguments);
        },
        filter: function filter(callbackfn /* , thisArg */) {
          return speciesFromList(this, arrayFilter(validate(this), callbackfn,
            arguments.length > 1 ? arguments[1] : undefined));
        },
        find: function find(predicate /* , thisArg */) {
          return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
        },
        findIndex: function findIndex(predicate /* , thisArg */) {
          return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
        },
        forEach: function forEach(callbackfn /* , thisArg */) {
          arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        },
        indexOf: function indexOf(searchElement /* , fromIndex */) {
          return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
        },
        includes: function includes(searchElement /* , fromIndex */) {
          return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
        },
        join: function join(separator) { // eslint-disable-line no-unused-vars
          return arrayJoin.apply(validate(this), arguments);
        },
        lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
          return arrayLastIndexOf.apply(validate(this), arguments);
        },
        map: function map(mapfn /* , thisArg */) {
          return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
        },
        reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
          return arrayReduce.apply(validate(this), arguments);
        },
        reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
          return arrayReduceRight.apply(validate(this), arguments);
        },
        reverse: function reverse() {
          var that = this;
          var length = validate(that).length;
          var middle = Math.floor(length / 2);
          var index = 0;
          var value;
          while (index < middle) {
            value = that[index];
            that[index++] = that[--length];
            that[length] = value;
          } return that;
        },
        some: function some(callbackfn /* , thisArg */) {
          return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        },
        sort: function sort(comparefn) {
          return arraySort.call(validate(this), comparefn);
        },
        subarray: function subarray(begin, end) {
          var O = validate(this);
          var length = O.length;
          var $begin = toAbsoluteIndex(begin, length);
          return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
            O.buffer,
            O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
            toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
          );
        }
      };

      var $slice = function slice(start, end) {
        return speciesFromList(this, arraySlice.call(validate(this), start, end));
      };

      var $set = function set(arrayLike /* , offset */) {
        validate(this);
        var offset = toOffset(arguments[1], 1);
        var length = this.length;
        var src = toObject(arrayLike);
        var len = toLength(src.length);
        var index = 0;
        if (len + offset > length) throw RangeError(WRONG_LENGTH);
        while (index < len) this[offset + index] = src[index++];
      };

      var $iterators = {
        entries: function entries() {
          return arrayEntries.call(validate(this));
        },
        keys: function keys() {
          return arrayKeys.call(validate(this));
        },
        values: function values() {
          return arrayValues.call(validate(this));
        }
      };

      var isTAIndex = function (target, key) {
        return isObject(target)
          && target[TYPED_ARRAY]
          && typeof key != 'symbol'
          && key in target
          && String(+key) == String(key);
      };
      var $getDesc = function getOwnPropertyDescriptor(target, key) {
        return isTAIndex(target, key = toPrimitive(key, true))
          ? propertyDesc(2, target[key])
          : gOPD(target, key);
      };
      var $setDesc = function defineProperty(target, key, desc) {
        if (isTAIndex(target, key = toPrimitive(key, true))
          && isObject(desc)
          && has(desc, 'value')
          && !has(desc, 'get')
          && !has(desc, 'set')
          // TODO: add validation descriptor w/o calling accessors
          && !desc.configurable
          && (!has(desc, 'writable') || desc.writable)
          && (!has(desc, 'enumerable') || desc.enumerable)
        ) {
          target[key] = desc.value;
          return target;
        } return dP(target, key, desc);
      };

      if (!ALL_CONSTRUCTORS) {
        $GOPD.f = $getDesc;
        $DP.f = $setDesc;
      }

      $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
        getOwnPropertyDescriptor: $getDesc,
        defineProperty: $setDesc
      });

      if (fails(function () { arrayToString.call({}); })) {
        arrayToString = arrayToLocaleString = function toString() {
          return arrayJoin.call(this);
        };
      }

      var $TypedArrayPrototype$ = redefineAll({}, proto);
      redefineAll($TypedArrayPrototype$, $iterators);
      hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
      redefineAll($TypedArrayPrototype$, {
        slice: $slice,
        set: $set,
        constructor: function () { /* noop */ },
        toString: arrayToString,
        toLocaleString: $toLocaleString
      });
      addGetter($TypedArrayPrototype$, 'buffer', 'b');
      addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
      addGetter($TypedArrayPrototype$, 'byteLength', 'l');
      addGetter($TypedArrayPrototype$, 'length', 'e');
      dP($TypedArrayPrototype$, TAG, {
        get: function () { return this[TYPED_ARRAY]; }
      });

      // eslint-disable-next-line max-statements
      module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
        CLAMPED = !!CLAMPED;
        var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
        var GETTER = 'get' + KEY;
        var SETTER = 'set' + KEY;
        var TypedArray = global[NAME];
        var Base = TypedArray || {};
        var TAC = TypedArray && getPrototypeOf(TypedArray);
        var FORCED = !TypedArray || !$typed.ABV;
        var O = {};
        var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
        var getter = function (that, index) {
          var data = that._d;
          return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
        };
        var setter = function (that, index, value) {
          var data = that._d;
          if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
          data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
        };
        var addElement = function (that, index) {
          dP(that, index, {
            get: function () {
              return getter(this, index);
            },
            set: function (value) {
              return setter(this, index, value);
            },
            enumerable: true
          });
        };
        if (FORCED) {
          TypedArray = wrapper(function (that, data, $offset, $length) {
            anInstance(that, TypedArray, NAME, '_d');
            var index = 0;
            var offset = 0;
            var buffer, byteLength, length, klass;
            if (!isObject(data)) {
              length = toIndex(data);
              byteLength = length * BYTES;
              buffer = new $ArrayBuffer(byteLength);
            } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
              buffer = data;
              offset = toOffset($offset, BYTES);
              var $len = data.byteLength;
              if ($length === undefined) {
                if ($len % BYTES) throw RangeError(WRONG_LENGTH);
                byteLength = $len - offset;
                if (byteLength < 0) throw RangeError(WRONG_LENGTH);
              } else {
                byteLength = toLength($length) * BYTES;
                if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
              }
              length = byteLength / BYTES;
            } else if (TYPED_ARRAY in data) {
              return fromList(TypedArray, data);
            } else {
              return $from.call(TypedArray, data);
            }
            hide(that, '_d', {
              b: buffer,
              o: offset,
              l: byteLength,
              e: length,
              v: new $DataView(buffer)
            });
            while (index < length) addElement(that, index++);
          });
          TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
          hide(TypedArrayPrototype, 'constructor', TypedArray);
        } else if (!fails(function () {
          TypedArray(1);
        }) || !fails(function () {
          new TypedArray(-1); // eslint-disable-line no-new
        }) || !$iterDetect(function (iter) {
          new TypedArray(); // eslint-disable-line no-new
          new TypedArray(null); // eslint-disable-line no-new
          new TypedArray(1.5); // eslint-disable-line no-new
          new TypedArray(iter); // eslint-disable-line no-new
        }, true)) {
          TypedArray = wrapper(function (that, data, $offset, $length) {
            anInstance(that, TypedArray, NAME);
            var klass;
            // `ws` module bug, temporarily remove validation length for Uint8Array
            // https://github.com/websockets/ws/pull/645
            if (!isObject(data)) return new Base(toIndex(data));
            if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
              return $length !== undefined
                ? new Base(data, toOffset($offset, BYTES), $length)
                : $offset !== undefined
                  ? new Base(data, toOffset($offset, BYTES))
                  : new Base(data);
            }
            if (TYPED_ARRAY in data) return fromList(TypedArray, data);
            return $from.call(TypedArray, data);
          });
          arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
            if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
          });
          TypedArray[PROTOTYPE] = TypedArrayPrototype;
          if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
        }
        var $nativeIterator = TypedArrayPrototype[ITERATOR];
        var CORRECT_ITER_NAME = !!$nativeIterator
          && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
        var $iterator = $iterators.values;
        hide(TypedArray, TYPED_CONSTRUCTOR, true);
        hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
        hide(TypedArrayPrototype, VIEW, true);
        hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

        if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
          dP(TypedArrayPrototype, TAG, {
            get: function () { return NAME; }
          });
        }

        O[NAME] = TypedArray;

        $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

        $export($export.S, NAME, {
          BYTES_PER_ELEMENT: BYTES
        });

        $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
          from: $from,
          of: $of
        });

        if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

        $export($export.P, NAME, proto);

        setSpecies(NAME);

        $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

        $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

        if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

        $export($export.P + $export.F * fails(function () {
          new TypedArray(1).slice();
        }), NAME, { slice: $slice });

        $export($export.P + $export.F * (fails(function () {
          return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
        }) || !fails(function () {
          TypedArrayPrototype.toLocaleString.call([1, 2]);
        })), NAME, { toLocaleString: $toLocaleString });

        Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
        if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
      };
    } else module.exports = function () { /* empty */ };

  }, { "./_descriptors": 1057, "./_library": 1061, "./_global": 1039, "./_fails": 1075, "./_export": 882, "./_typed": 1119, "./_typed-buffer": 1118, "./_ctx": 1062, "./_an-instance": 1060, "./_property-desc": 1053, "./_hide": 1042, "./_redefine-all": 1071, "./_to-integer": 1045, "./_to-length": 883, "./_to-index": 1146, "./_to-absolute-index": 1077, "./_to-primitive": 1054, "./_has": 1056, "./_classof": 1059, "./_is-object": 1072, "./_to-object": 886, "./_is-array-iter": 1111, "./_object-create": 1083, "./_object-gpo": 1086, "./_object-gopn": 1052, "./core.get-iterator-method": 1112, "./_uid": 1122, "./_wks": 1041, "./_array-methods": 1090, "./_array-includes": 890, "./_species-constructor": 1044, "./es6.array.iterator": 997, "./_iterators": 1134, "./_iter-detect": 1069, "./_set-species": 1067, "./_array-fill": 1114, "./_array-copy-within": 1108, "./_object-dp": 1080, "./_object-gopd": 893 }], 1013: [function (require, module, exports) {
    require('./_typed-array')('Int8', 1, function (init) {
      return function Int8Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    });

  }, { "./_typed-array": 1104 }], 1012: [function (require, module, exports) {
    require('./_typed-array')('Uint8', 1, function (init) {
      return function Uint8Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    });

  }, { "./_typed-array": 1104 }], 1011: [function (require, module, exports) {
    require('./_typed-array')('Uint8', 1, function (init) {
      return function Uint8ClampedArray(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    }, true);

  }, { "./_typed-array": 1104 }], 1017: [function (require, module, exports) {
    require('./_typed-array')('Int16', 2, function (init) {
      return function Int16Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    });

  }, { "./_typed-array": 1104 }], 1016: [function (require, module, exports) {
    require('./_typed-array')('Uint16', 2, function (init) {
      return function Uint16Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    });

  }, { "./_typed-array": 1104 }], 1015: [function (require, module, exports) {
    require('./_typed-array')('Int32', 4, function (init) {
      return function Int32Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    });

  }, { "./_typed-array": 1104 }], 1021: [function (require, module, exports) {
    require('./_typed-array')('Uint32', 4, function (init) {
      return function Uint32Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    });

  }, { "./_typed-array": 1104 }], 1020: [function (require, module, exports) {
    require('./_typed-array')('Float32', 4, function (init) {
      return function Float32Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    });

  }, { "./_typed-array": 1104 }], 1018: [function (require, module, exports) {
    require('./_typed-array')('Float64', 8, function (init) {
      return function Float64Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    });

  }, { "./_typed-array": 1104 }], 1019: [function (require, module, exports) {
    // 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
    var $export = require('./_export');
    var aFunction = require('./_a-function');
    var anObject = require('./_an-object');
    var rApply = (require('./_global').Reflect || {}).apply;
    var fApply = Function.apply;
    // MS Edge argumentsList argument is optional
    $export($export.S + $export.F * !require('./_fails')(function () {
      rApply(function () { /* empty */ });
    }), 'Reflect', {
      apply: function apply(target, thisArgument, argumentsList) {
        var T = aFunction(target);
        var L = anObject(argumentsList);
        return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
      }
    });

  }, { "./_export": 882, "./_a-function": 887, "./_an-object": 1051, "./_global": 1039, "./_fails": 1075 }], 1024: [function (require, module, exports) {
    // 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
    var $export = require('./_export');
    var create = require('./_object-create');
    var aFunction = require('./_a-function');
    var anObject = require('./_an-object');
    var isObject = require('./_is-object');
    var fails = require('./_fails');
    var bind = require('./_bind');
    var rConstruct = (require('./_global').Reflect || {}).construct;

    // MS Edge supports only 2 arguments and argumentsList argument is optional
    // FF Nightly sets third argument as `new.target`, but does not create `this` from it
    var NEW_TARGET_BUG = fails(function () {
      function F() { /* empty */ }
      return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
    });
    var ARGS_BUG = !fails(function () {
      rConstruct(function () { /* empty */ });
    });

    $export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
      construct: function construct(Target, args /* , newTarget */) {
        aFunction(Target);
        anObject(args);
        var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
        if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
        if (Target == newTarget) {
          // w/o altered newTarget, optimization for 0-4 arguments
          switch (args.length) {
            case 0: return new Target();
            case 1: return new Target(args[0]);
            case 2: return new Target(args[0], args[1]);
            case 3: return new Target(args[0], args[1], args[2]);
            case 4: return new Target(args[0], args[1], args[2], args[3]);
          }
          // w/o altered newTarget, lot of arguments case
          var $args = [null];
          $args.push.apply($args, args);
          return new (bind.apply(Target, $args))();
        }
        // with altered newTarget, not support built-in constructors
        var proto = newTarget.prototype;
        var instance = create(isObject(proto) ? proto : Object.prototype);
        var result = Function.apply.call(Target, instance, args);
        return isObject(result) ? result : instance;
      }
    });

  }, { "./_export": 882, "./_object-create": 1083, "./_a-function": 887, "./_an-object": 1051, "./_is-object": 1072, "./_fails": 1075, "./_bind": 1107, "./_global": 1039 }], 1022: [function (require, module, exports) {
    // 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
    var dP = require('./_object-dp');
    var $export = require('./_export');
    var anObject = require('./_an-object');
    var toPrimitive = require('./_to-primitive');

    // MS Edge has broken Reflect.defineProperty - throwing instead of returning false
    $export($export.S + $export.F * require('./_fails')(function () {
      // eslint-disable-next-line no-undef
      Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
    }), 'Reflect', {
      defineProperty: function defineProperty(target, propertyKey, attributes) {
        anObject(target);
        propertyKey = toPrimitive(propertyKey, true);
        anObject(attributes);
        try {
          dP.f(target, propertyKey, attributes);
          return true;
        } catch (e) {
          return false;
        }
      }
    });

  }, { "./_object-dp": 1080, "./_export": 882, "./_an-object": 1051, "./_to-primitive": 1054, "./_fails": 1075 }], 1023: [function (require, module, exports) {
    // 26.1.4 Reflect.deleteProperty(target, propertyKey)
    var $export = require('./_export');
    var gOPD = require('./_object-gopd').f;
    var anObject = require('./_an-object');

    $export($export.S, 'Reflect', {
      deleteProperty: function deleteProperty(target, propertyKey) {
        var desc = gOPD(anObject(target), propertyKey);
        return desc && !desc.configurable ? false : delete target[propertyKey];
      }
    });

  }, { "./_export": 882, "./_object-gopd": 893, "./_an-object": 1051 }], 1025: [function (require, module, exports) {
    'use strict';
    // 26.1.5 Reflect.enumerate(target)
    var $export = require('./_export');
    var anObject = require('./_an-object');
    var Enumerate = function (iterated) {
      this._t = anObject(iterated); // target
      this._i = 0;                  // next index
      var keys = this._k = [];      // keys
      var key;
      for (key in iterated) keys.push(key);
    };
    require('./_iter-create')(Enumerate, 'Object', function () {
      var that = this;
      var keys = that._k;
      var key;
      do {
        if (that._i >= keys.length) return { value: undefined, done: true };
      } while (!((key = keys[that._i++]) in that._t));
      return { value: key, done: false };
    });

    $export($export.S, 'Reflect', {
      enumerate: function enumerate(target) {
        return new Enumerate(target);
      }
    });

  }, { "./_export": 882, "./_an-object": 1051, "./_iter-create": 1139 }], 1030: [function (require, module, exports) {
    // 26.1.6 Reflect.get(target, propertyKey [, receiver])
    var gOPD = require('./_object-gopd');
    var getPrototypeOf = require('./_object-gpo');
    var has = require('./_has');
    var $export = require('./_export');
    var isObject = require('./_is-object');
    var anObject = require('./_an-object');

    function get(target, propertyKey /* , receiver */) {
      var receiver = arguments.length < 3 ? target : arguments[2];
      var desc, proto;
      if (anObject(target) === receiver) return target[propertyKey];
      if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
        ? desc.value
        : desc.get !== undefined
          ? desc.get.call(receiver)
          : undefined;
      if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
    }

    $export($export.S, 'Reflect', { get: get });

  }, { "./_object-gopd": 893, "./_object-gpo": 1086, "./_has": 1056, "./_export": 882, "./_is-object": 1072, "./_an-object": 1051 }], 1026: [function (require, module, exports) {
    // 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
    var gOPD = require('./_object-gopd');
    var $export = require('./_export');
    var anObject = require('./_an-object');

    $export($export.S, 'Reflect', {
      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
        return gOPD.f(anObject(target), propertyKey);
      }
    });

  }, { "./_object-gopd": 893, "./_export": 882, "./_an-object": 1051 }], 1028: [function (require, module, exports) {
    // 26.1.8 Reflect.getPrototypeOf(target)
    var $export = require('./_export');
    var getProto = require('./_object-gpo');
    var anObject = require('./_an-object');

    $export($export.S, 'Reflect', {
      getPrototypeOf: function getPrototypeOf(target) {
        return getProto(anObject(target));
      }
    });

  }, { "./_export": 882, "./_object-gpo": 1086, "./_an-object": 1051 }], 1027: [function (require, module, exports) {
    // 26.1.9 Reflect.has(target, propertyKey)
    var $export = require('./_export');

    $export($export.S, 'Reflect', {
      has: function has(target, propertyKey) {
        return propertyKey in target;
      }
    });

  }, { "./_export": 882 }], 1033: [function (require, module, exports) {
    // 26.1.10 Reflect.isExtensible(target)
    var $export = require('./_export');
    var anObject = require('./_an-object');
    var $isExtensible = Object.isExtensible;

    $export($export.S, 'Reflect', {
      isExtensible: function isExtensible(target) {
        anObject(target);
        return $isExtensible ? $isExtensible(target) : true;
      }
    });

  }, { "./_export": 882, "./_an-object": 1051 }], 894: [function (require, module, exports) {
    // all object keys, includes non-enumerable and symbols
    var gOPN = require('./_object-gopn');
    var gOPS = require('./_object-gops');
    var anObject = require('./_an-object');
    var Reflect = require('./_global').Reflect;
    module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
      var keys = gOPN.f(anObject(it));
      var getSymbols = gOPS.f;
      return getSymbols ? keys.concat(getSymbols(it)) : keys;
    };

  }, { "./_object-gopn": 1052, "./_object-gops": 1050, "./_an-object": 1051, "./_global": 1039 }], 1029: [function (require, module, exports) {
    // 26.1.11 Reflect.ownKeys(target)
    var $export = require('./_export');

    $export($export.S, 'Reflect', { ownKeys: require('./_own-keys') });

  }, { "./_export": 882, "./_own-keys": 894 }], 1031: [function (require, module, exports) {
    // 26.1.12 Reflect.preventExtensions(target)
    var $export = require('./_export');
    var anObject = require('./_an-object');
    var $preventExtensions = Object.preventExtensions;

    $export($export.S, 'Reflect', {
      preventExtensions: function preventExtensions(target) {
        anObject(target);
        try {
          if ($preventExtensions) $preventExtensions(target);
          return true;
        } catch (e) {
          return false;
        }
      }
    });

  }, { "./_export": 882, "./_an-object": 1051 }], 1032: [function (require, module, exports) {
    // 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
    var dP = require('./_object-dp');
    var gOPD = require('./_object-gopd');
    var getPrototypeOf = require('./_object-gpo');
    var has = require('./_has');
    var $export = require('./_export');
    var createDesc = require('./_property-desc');
    var anObject = require('./_an-object');
    var isObject = require('./_is-object');

    function set(target, propertyKey, V /* , receiver */) {
      var receiver = arguments.length < 4 ? target : arguments[3];
      var ownDesc = gOPD.f(anObject(target), propertyKey);
      var existingDescriptor, proto;
      if (!ownDesc) {
        if (isObject(proto = getPrototypeOf(target))) {
          return set(proto, propertyKey, V, receiver);
        }
        ownDesc = createDesc(0);
      }
      if (has(ownDesc, 'value')) {
        if (ownDesc.writable === false || !isObject(receiver)) return false;
        if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
          if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
          existingDescriptor.value = V;
          dP.f(receiver, propertyKey, existingDescriptor);
        } else dP.f(receiver, propertyKey, createDesc(0, V));
        return true;
      }
      return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
    }

    $export($export.S, 'Reflect', { set: set });

  }, { "./_object-dp": 1080, "./_object-gopd": 893, "./_object-gpo": 1086, "./_has": 1056, "./_export": 882, "./_property-desc": 1053, "./_an-object": 1051, "./_is-object": 1072 }], 1034: [function (require, module, exports) {
    // 26.1.14 Reflect.setPrototypeOf(target, proto)
    var $export = require('./_export');
    var setProto = require('./_set-proto');

    if (setProto) $export($export.S, 'Reflect', {
      setPrototypeOf: function setPrototypeOf(target, proto) {
        setProto.check(target, proto);
        try {
          setProto.set(target, proto);
          return true;
        } catch (e) {
          return false;
        }
      }
    });

  }, { "./_export": 882, "./_set-proto": 1084 }], 867: [function (require, module, exports) {
    require('../modules/es6.symbol');
    require('../modules/es6.object.create');
    require('../modules/es6.object.define-property');
    require('../modules/es6.object.define-properties');
    require('../modules/es6.object.get-own-property-descriptor');
    require('../modules/es6.object.get-prototype-of');
    require('../modules/es6.object.keys');
    require('../modules/es6.object.get-own-property-names');
    require('../modules/es6.object.freeze');
    require('../modules/es6.object.seal');
    require('../modules/es6.object.prevent-extensions');
    require('../modules/es6.object.is-frozen');
    require('../modules/es6.object.is-sealed');
    require('../modules/es6.object.is-extensible');
    require('../modules/es6.object.assign');
    require('../modules/es6.object.is');
    require('../modules/es6.object.set-prototype-of');
    require('../modules/es6.object.to-string');
    require('../modules/es6.function.bind');
    require('../modules/es6.function.name');
    require('../modules/es6.function.has-instance');
    require('../modules/es6.parse-int');
    require('../modules/es6.parse-float');
    require('../modules/es6.number.constructor');
    require('../modules/es6.number.to-fixed');
    require('../modules/es6.number.to-precision');
    require('../modules/es6.number.epsilon');
    require('../modules/es6.number.is-finite');
    require('../modules/es6.number.is-integer');
    require('../modules/es6.number.is-nan');
    require('../modules/es6.number.is-safe-integer');
    require('../modules/es6.number.max-safe-integer');
    require('../modules/es6.number.min-safe-integer');
    require('../modules/es6.number.parse-float');
    require('../modules/es6.number.parse-int');
    require('../modules/es6.math.acosh');
    require('../modules/es6.math.asinh');
    require('../modules/es6.math.atanh');
    require('../modules/es6.math.cbrt');
    require('../modules/es6.math.clz32');
    require('../modules/es6.math.cosh');
    require('../modules/es6.math.expm1');
    require('../modules/es6.math.fround');
    require('../modules/es6.math.hypot');
    require('../modules/es6.math.imul');
    require('../modules/es6.math.log10');
    require('../modules/es6.math.log1p');
    require('../modules/es6.math.log2');
    require('../modules/es6.math.sign');
    require('../modules/es6.math.sinh');
    require('../modules/es6.math.tanh');
    require('../modules/es6.math.trunc');
    require('../modules/es6.string.from-code-point');
    require('../modules/es6.string.raw');
    require('../modules/es6.string.trim');
    require('../modules/es6.string.iterator');
    require('../modules/es6.string.code-point-at');
    require('../modules/es6.string.ends-with');
    require('../modules/es6.string.includes');
    require('../modules/es6.string.repeat');
    require('../modules/es6.string.starts-with');
    require('../modules/es6.string.anchor');
    require('../modules/es6.string.big');
    require('../modules/es6.string.blink');
    require('../modules/es6.string.bold');
    require('../modules/es6.string.fixed');
    require('../modules/es6.string.fontcolor');
    require('../modules/es6.string.fontsize');
    require('../modules/es6.string.italics');
    require('../modules/es6.string.link');
    require('../modules/es6.string.small');
    require('../modules/es6.string.strike');
    require('../modules/es6.string.sub');
    require('../modules/es6.string.sup');
    require('../modules/es6.date.now');
    require('../modules/es6.date.to-json');
    require('../modules/es6.date.to-iso-string');
    require('../modules/es6.date.to-string');
    require('../modules/es6.date.to-primitive');
    require('../modules/es6.array.is-array');
    require('../modules/es6.array.from');
    require('../modules/es6.array.of');
    require('../modules/es6.array.join');
    require('../modules/es6.array.slice');
    require('../modules/es6.array.sort');
    require('../modules/es6.array.for-each');
    require('../modules/es6.array.map');
    require('../modules/es6.array.filter');
    require('../modules/es6.array.some');
    require('../modules/es6.array.every');
    require('../modules/es6.array.reduce');
    require('../modules/es6.array.reduce-right');
    require('../modules/es6.array.index-of');
    require('../modules/es6.array.last-index-of');
    require('../modules/es6.array.copy-within');
    require('../modules/es6.array.fill');
    require('../modules/es6.array.find');
    require('../modules/es6.array.find-index');
    require('../modules/es6.array.species');
    require('../modules/es6.array.iterator');
    require('../modules/es6.regexp.constructor');
    require('../modules/es6.regexp.exec');
    require('../modules/es6.regexp.to-string');
    require('../modules/es6.regexp.flags');
    require('../modules/es6.regexp.match');
    require('../modules/es6.regexp.replace');
    require('../modules/es6.regexp.search');
    require('../modules/es6.regexp.split');
    require('../modules/es6.promise');
    require('../modules/es6.map');
    require('../modules/es6.set');
    require('../modules/es6.weak-map');
    require('../modules/es6.weak-set');
    require('../modules/es6.typed.array-buffer');
    require('../modules/es6.typed.data-view');
    require('../modules/es6.typed.int8-array');
    require('../modules/es6.typed.uint8-array');
    require('../modules/es6.typed.uint8-clamped-array');
    require('../modules/es6.typed.int16-array');
    require('../modules/es6.typed.uint16-array');
    require('../modules/es6.typed.int32-array');
    require('../modules/es6.typed.uint32-array');
    require('../modules/es6.typed.float32-array');
    require('../modules/es6.typed.float64-array');
    require('../modules/es6.reflect.apply');
    require('../modules/es6.reflect.construct');
    require('../modules/es6.reflect.define-property');
    require('../modules/es6.reflect.delete-property');
    require('../modules/es6.reflect.enumerate');
    require('../modules/es6.reflect.get');
    require('../modules/es6.reflect.get-own-property-descriptor');
    require('../modules/es6.reflect.get-prototype-of');
    require('../modules/es6.reflect.has');
    require('../modules/es6.reflect.is-extensible');
    require('../modules/es6.reflect.own-keys');
    require('../modules/es6.reflect.prevent-extensions');
    require('../modules/es6.reflect.set');
    require('../modules/es6.reflect.set-prototype-of');
    module.exports = require('../modules/_core');

  }, { "../modules/es6.symbol": 898, "../modules/es6.object.create": 901, "../modules/es6.object.define-property": 900, "../modules/es6.object.define-properties": 899, "../modules/es6.object.get-own-property-descriptor": 920, "../modules/es6.object.get-prototype-of": 906, "../modules/es6.object.keys": 902, "../modules/es6.object.get-own-property-names": 904, "../modules/es6.object.freeze": 905, "../modules/es6.object.seal": 903, "../modules/es6.object.prevent-extensions": 908, "../modules/es6.object.is-frozen": 907, "../modules/es6.object.is-sealed": 912, "../modules/es6.object.is-extensible": 909, "../modules/es6.object.assign": 916, "../modules/es6.object.is": 914, "../modules/es6.object.set-prototype-of": 910, "../modules/es6.object.to-string": 915, "../modules/es6.function.bind": 917, "../modules/es6.function.name": 913, "../modules/es6.function.has-instance": 911, "../modules/es6.parse-int": 923, "../modules/es6.parse-float": 919, "../modules/es6.number.constructor": 918, "../modules/es6.number.to-fixed": 921, "../modules/es6.number.to-precision": 922, "../modules/es6.number.epsilon": 924, "../modules/es6.number.is-finite": 928, "../modules/es6.number.is-integer": 925, "../modules/es6.number.is-nan": 927, "../modules/es6.number.is-safe-integer": 926, "../modules/es6.number.max-safe-integer": 929, "../modules/es6.number.min-safe-integer": 931, "../modules/es6.number.parse-float": 930, "../modules/es6.number.parse-int": 932, "../modules/es6.math.acosh": 935, "../modules/es6.math.asinh": 933, "../modules/es6.math.atanh": 937, "../modules/es6.math.cbrt": 934, "../modules/es6.math.clz32": 939, "../modules/es6.math.cosh": 936, "../modules/es6.math.expm1": 942, "../modules/es6.math.fround": 938, "../modules/es6.math.hypot": 941, "../modules/es6.math.imul": 944, "../modules/es6.math.log10": 940, "../modules/es6.math.log1p": 943, "../modules/es6.math.log2": 946, "../modules/es6.math.sign": 947, "../modules/es6.math.sinh": 945, "../modules/es6.math.tanh": 949, "../modules/es6.math.trunc": 948, "../modules/es6.string.from-code-point": 951, "../modules/es6.string.raw": 954, "../modules/es6.string.trim": 950, "../modules/es6.string.iterator": 952, "../modules/es6.string.code-point-at": 953, "../modules/es6.string.ends-with": 955, "../modules/es6.string.includes": 958, "../modules/es6.string.repeat": 970, "../modules/es6.string.starts-with": 957, "../modules/es6.string.anchor": 956, "../modules/es6.string.big": 962, "../modules/es6.string.blink": 961, "../modules/es6.string.bold": 959, "../modules/es6.string.fixed": 964, "../modules/es6.string.fontcolor": 965, "../modules/es6.string.fontsize": 966, "../modules/es6.string.italics": 960, "../modules/es6.string.link": 963, "../modules/es6.string.small": 968, "../modules/es6.string.strike": 967, "../modules/es6.string.sub": 972, "../modules/es6.string.sup": 971, "../modules/es6.date.now": 979, "../modules/es6.date.to-json": 973, "../modules/es6.date.to-iso-string": 969, "../modules/es6.date.to-string": 975, "../modules/es6.date.to-primitive": 977, "../modules/es6.array.is-array": 980, "../modules/es6.array.from": 974, "../modules/es6.array.of": 996, "../modules/es6.array.join": 976, "../modules/es6.array.slice": 978, "../modules/es6.array.sort": 982, "../modules/es6.array.for-each": 981, "../modules/es6.array.map": 983, "../modules/es6.array.filter": 984, "../modules/es6.array.some": 985, "../modules/es6.array.every": 987, "../modules/es6.array.reduce": 986, "../modules/es6.array.reduce-right": 988, "../modules/es6.array.index-of": 990, "../modules/es6.array.last-index-of": 989, "../modules/es6.array.copy-within": 991, "../modules/es6.array.fill": 992, "../modules/es6.array.find": 995, "../modules/es6.array.find-index": 993, "../modules/es6.array.species": 994, "../modules/es6.array.iterator": 997, "../modules/es6.regexp.constructor": 998, "../modules/es6.regexp.exec": 1005, "../modules/es6.regexp.to-string": 999, "../modules/es6.regexp.flags": 1000, "../modules/es6.regexp.match": 1003, "../modules/es6.regexp.replace": 1001, "../modules/es6.regexp.search": 1004, "../modules/es6.regexp.split": 1002, "../modules/es6.promise": 878, "../modules/es6.map": 1009, "../modules/es6.set": 1007, "../modules/es6.weak-map": 1010, "../modules/es6.weak-set": 1006, "../modules/es6.typed.array-buffer": 1014, "../modules/es6.typed.data-view": 1008, "../modules/es6.typed.int8-array": 1013, "../modules/es6.typed.uint8-array": 1012, "../modules/es6.typed.uint8-clamped-array": 1011, "../modules/es6.typed.int16-array": 1017, "../modules/es6.typed.uint16-array": 1016, "../modules/es6.typed.int32-array": 1015, "../modules/es6.typed.uint32-array": 1021, "../modules/es6.typed.float32-array": 1020, "../modules/es6.typed.float64-array": 1018, "../modules/es6.reflect.apply": 1019, "../modules/es6.reflect.construct": 1024, "../modules/es6.reflect.define-property": 1022, "../modules/es6.reflect.delete-property": 1023, "../modules/es6.reflect.enumerate": 1025, "../modules/es6.reflect.get": 1030, "../modules/es6.reflect.get-own-property-descriptor": 1026, "../modules/es6.reflect.get-prototype-of": 1028, "../modules/es6.reflect.has": 1027, "../modules/es6.reflect.is-extensible": 1033, "../modules/es6.reflect.own-keys": 1029, "../modules/es6.reflect.prevent-extensions": 1031, "../modules/es6.reflect.set": 1032, "../modules/es6.reflect.set-prototype-of": 1034, "../modules/_core": 870 }], 872: [function (require, module, exports) {
    'use strict';
    // https://github.com/tc39/Array.prototype.includes
    var $export = require('./_export');
    var $includes = require('./_array-includes')(true);

    $export($export.P, 'Array', {
      includes: function includes(el /* , fromIndex = 0 */) {
        return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
      }
    });

    require('./_add-to-unscopables')('includes');

  }, { "./_export": 882, "./_array-includes": 890, "./_add-to-unscopables": 888 }], 853: [function (require, module, exports) {
    require('../../modules/es7.array.includes');
    module.exports = require('../../modules/_core').Array.includes;

  }, { "../../modules/es7.array.includes": 872, "../../modules/_core": 870 }], 884: [function (require, module, exports) {
    'use strict';
    // https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
    var isArray = require('./_is-array');
    var isObject = require('./_is-object');
    var toLength = require('./_to-length');
    var ctx = require('./_ctx');
    var IS_CONCAT_SPREADABLE = require('./_wks')('isConcatSpreadable');

    function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
      var targetIndex = start;
      var sourceIndex = 0;
      var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
      var element, spreadable;

      while (sourceIndex < sourceLen) {
        if (sourceIndex in source) {
          element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

          spreadable = false;
          if (isObject(element)) {
            spreadable = element[IS_CONCAT_SPREADABLE];
            spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
          }

          if (spreadable && depth > 0) {
            targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
          } else {
            if (targetIndex >= 0x1fffffffffffff) throw TypeError();
            target[targetIndex] = element;
          }

          targetIndex++;
        }
        sourceIndex++;
      }
      return targetIndex;
    }

    module.exports = flattenIntoArray;

  }, { "./_is-array": 1073, "./_is-object": 1072, "./_to-length": 883, "./_ctx": 1062, "./_wks": 1041 }], 869: [function (require, module, exports) {
    'use strict';
    // https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
    var $export = require('./_export');
    var flattenIntoArray = require('./_flatten-into-array');
    var toObject = require('./_to-object');
    var toLength = require('./_to-length');
    var aFunction = require('./_a-function');
    var arraySpeciesCreate = require('./_array-species-create');

    $export($export.P, 'Array', {
      flatMap: function flatMap(callbackfn /* , thisArg */) {
        var O = toObject(this);
        var sourceLen, A;
        aFunction(callbackfn);
        sourceLen = toLength(O.length);
        A = arraySpeciesCreate(O, 0);
        flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
        return A;
      }
    });

    require('./_add-to-unscopables')('flatMap');

  }, { "./_export": 882, "./_flatten-into-array": 884, "./_to-object": 886, "./_to-length": 883, "./_a-function": 887, "./_array-species-create": 885, "./_add-to-unscopables": 888 }], 854: [function (require, module, exports) {
    require('../../modules/es7.array.flat-map');
    module.exports = require('../../modules/_core').Array.flatMap;

  }, { "../../modules/es7.array.flat-map": 869, "../../modules/_core": 870 }], 896: [function (require, module, exports) {
    // https://github.com/tc39/proposal-string-pad-start-end
    var toLength = require('./_to-length');
    var repeat = require('./_string-repeat');
    var defined = require('./_defined');

    module.exports = function (that, maxLength, fillString, left) {
      var S = String(defined(that));
      var stringLength = S.length;
      var fillStr = fillString === undefined ? ' ' : String(fillString);
      var intMaxLength = toLength(maxLength);
      if (intMaxLength <= stringLength || fillStr == '') return S;
      var fillLen = intMaxLength - stringLength;
      var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
      if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
      return left ? stringFiller + S : S + stringFiller;
    };

  }, { "./_to-length": 883, "./_string-repeat": 1081, "./_defined": 1043 }], 873: [function (require, module, exports) {
    'use strict';
    // https://github.com/tc39/proposal-string-pad-start-end
    var $export = require('./_export');
    var $pad = require('./_string-pad');
    var userAgent = require('./_user-agent');

    // https://github.com/zloirock/core-js/issues/280
    var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

    $export($export.P + $export.F * WEBKIT_BUG, 'String', {
      padStart: function padStart(maxLength /* , fillString = ' ' */) {
        return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
      }
    });

  }, { "./_export": 882, "./_string-pad": 896, "./_user-agent": 897 }], 855: [function (require, module, exports) {
    require('../../modules/es7.string.pad-start');
    module.exports = require('../../modules/_core').String.padStart;

  }, { "../../modules/es7.string.pad-start": 873, "../../modules/_core": 870 }], 876: [function (require, module, exports) {
    'use strict';
    // https://github.com/tc39/proposal-string-pad-start-end
    var $export = require('./_export');
    var $pad = require('./_string-pad');
    var userAgent = require('./_user-agent');

    // https://github.com/zloirock/core-js/issues/280
    var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

    $export($export.P + $export.F * WEBKIT_BUG, 'String', {
      padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
        return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
      }
    });

  }, { "./_export": 882, "./_string-pad": 896, "./_user-agent": 897 }], 857: [function (require, module, exports) {
    require('../../modules/es7.string.pad-end');
    module.exports = require('../../modules/_core').String.padEnd;

  }, { "../../modules/es7.string.pad-end": 876, "../../modules/_core": 870 }], 871: [function (require, module, exports) {
    'use strict';
    // https://github.com/sebmarkbage/ecmascript-string-left-right-trim
    require('./_string-trim')('trimLeft', function ($trim) {
      return function trimLeft() {
        return $trim(this, 1);
      };
    }, 'trimStart');

  }, { "./_string-trim": 889 }], 856: [function (require, module, exports) {
    require('../../modules/es7.string.trim-left');
    module.exports = require('../../modules/_core').String.trimLeft;

  }, { "../../modules/es7.string.trim-left": 871, "../../modules/_core": 870 }], 875: [function (require, module, exports) {
    'use strict';
    // https://github.com/sebmarkbage/ecmascript-string-left-right-trim
    require('./_string-trim')('trimRight', function ($trim) {
      return function trimRight() {
        return $trim(this, 2);
      };
    }, 'trimEnd');

  }, { "./_string-trim": 889 }], 858: [function (require, module, exports) {
    require('../../modules/es7.string.trim-right');
    module.exports = require('../../modules/_core').String.trimRight;

  }, { "../../modules/es7.string.trim-right": 875, "../../modules/_core": 870 }], 880: [function (require, module, exports) {
    require('./_wks-define')('asyncIterator');

  }, { "./_wks-define": 1046 }], 859: [function (require, module, exports) {
    require('../../modules/es7.symbol.async-iterator');
    module.exports = require('../../modules/_wks-ext').f('asyncIterator');

  }, { "../../modules/es7.symbol.async-iterator": 880, "../../modules/_wks-ext": 881 }], 874: [function (require, module, exports) {
    // https://github.com/tc39/proposal-object-getownpropertydescriptors
    var $export = require('./_export');
    var ownKeys = require('./_own-keys');
    var toIObject = require('./_to-iobject');
    var gOPD = require('./_object-gopd');
    var createProperty = require('./_create-property');

    $export($export.S, 'Object', {
      getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
        var O = toIObject(object);
        var getDesc = gOPD.f;
        var keys = ownKeys(O);
        var result = {};
        var i = 0;
        var key, desc;
        while (keys.length > i) {
          desc = getDesc(O, key = keys[i++]);
          if (desc !== undefined) createProperty(result, key, desc);
        }
        return result;
      }
    });

  }, { "./_export": 882, "./_own-keys": 894, "./_to-iobject": 891, "./_object-gopd": 893, "./_create-property": 892 }], 860: [function (require, module, exports) {
    require('../../modules/es7.object.get-own-property-descriptors');
    module.exports = require('../../modules/_core').Object.getOwnPropertyDescriptors;

  }, { "../../modules/es7.object.get-own-property-descriptors": 874, "../../modules/_core": 870 }], 895: [function (require, module, exports) {
    var DESCRIPTORS = require('./_descriptors');
    var getKeys = require('./_object-keys');
    var toIObject = require('./_to-iobject');
    var isEnum = require('./_object-pie').f;
    module.exports = function (isEntries) {
      return function (it) {
        var O = toIObject(it);
        var keys = getKeys(O);
        var length = keys.length;
        var i = 0;
        var result = [];
        var key;
        while (length > i) {
          key = keys[i++];
          if (!DESCRIPTORS || isEnum.call(O, key)) {
            result.push(isEntries ? [key, O[key]] : O[key]);
          }
        }
        return result;
      };
    };

  }, { "./_descriptors": 1057, "./_object-keys": 1079, "./_to-iobject": 891, "./_object-pie": 1055 }], 1038: [function (require, module, exports) {
    // https://github.com/tc39/proposal-object-values-entries
    var $export = require('./_export');
    var $values = require('./_object-to-array')(false);

    $export($export.S, 'Object', {
      values: function values(it) {
        return $values(it);
      }
    });

  }, { "./_export": 882, "./_object-to-array": 895 }], 861: [function (require, module, exports) {
    require('../../modules/es7.object.values');
    module.exports = require('../../modules/_core').Object.values;

  }, { "../../modules/es7.object.values": 1038, "../../modules/_core": 870 }], 877: [function (require, module, exports) {
    // https://github.com/tc39/proposal-object-values-entries
    var $export = require('./_export');
    var $entries = require('./_object-to-array')(true);

    $export($export.S, 'Object', {
      entries: function entries(it) {
        return $entries(it);
      }
    });

  }, { "./_export": 882, "./_object-to-array": 895 }], 862: [function (require, module, exports) {
    require('../../modules/es7.object.entries');
    module.exports = require('../../modules/_core').Object.entries;

  }, { "../../modules/es7.object.entries": 877, "../../modules/_core": 870 }], 879: [function (require, module, exports) {

    // https://github.com/tc39/proposal-promise-finally
    'use strict';
    var $export = require('./_export');
    var core = require('./_core');
    var global = require('./_global');
    var speciesConstructor = require('./_species-constructor');
    var promiseResolve = require('./_promise-resolve');

    $export($export.P + $export.R, 'Promise', {
      'finally': function (onFinally) {
        var C = speciesConstructor(this, core.Promise || global.Promise);
        var isFunction = typeof onFinally == 'function';
        return this.then(
          isFunction ? function (x) {
            return promiseResolve(C, onFinally()).then(function () { return x; });
          } : onFinally,
          isFunction ? function (e) {
            return promiseResolve(C, onFinally()).then(function () { throw e; });
          } : onFinally
        );
      }
    });

  }, { "./_export": 882, "./_core": 870, "./_global": 1039, "./_species-constructor": 1044, "./_promise-resolve": 1040 }], 863: [function (require, module, exports) {
    'use strict';
    require('../../modules/es6.promise');
    require('../../modules/es7.promise.finally');
    module.exports = require('../../modules/_core').Promise['finally'];

  }, { "../../modules/es6.promise": 878, "../../modules/es7.promise.finally": 879, "../../modules/_core": 870 }], 1035: [function (require, module, exports) {

    // ie9- setTimeout & setInterval additional parameters fix
    var global = require('./_global');
    var $export = require('./_export');
    var userAgent = require('./_user-agent');
    var slice = [].slice;
    var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
    var wrap = function (set) {
      return function (fn, time /* , ...args */) {
        var boundArgs = arguments.length > 2;
        var args = boundArgs ? slice.call(arguments, 2) : false;
        return set(boundArgs ? function () {
          // eslint-disable-next-line no-new-func
          (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
        } : fn, time);
      };
    };
    $export($export.G + $export.B + $export.F * MSIE, {
      setTimeout: wrap(global.setTimeout),
      setInterval: wrap(global.setInterval)
    });

  }, { "./_global": 1039, "./_export": 882, "./_user-agent": 897 }], 1036: [function (require, module, exports) {
    var $export = require('./_export');
    var $task = require('./_task');
    $export($export.G + $export.B, {
      setImmediate: $task.set,
      clearImmediate: $task.clear
    });

  }, { "./_export": 882, "./_task": 1068 }], 1037: [function (require, module, exports) {

    var $iterators = require('./es6.array.iterator');
    var getKeys = require('./_object-keys');
    var redefine = require('./_redefine');
    var global = require('./_global');
    var hide = require('./_hide');
    var Iterators = require('./_iterators');
    var wks = require('./_wks');
    var ITERATOR = wks('iterator');
    var TO_STRING_TAG = wks('toStringTag');
    var ArrayValues = Iterators.Array;

    var DOMIterables = {
      CSSRuleList: true, // TODO: Not spec compliant, should be false.
      CSSStyleDeclaration: false,
      CSSValueList: false,
      ClientRectList: false,
      DOMRectList: false,
      DOMStringList: false,
      DOMTokenList: true,
      DataTransferItemList: false,
      FileList: false,
      HTMLAllCollection: false,
      HTMLCollection: false,
      HTMLFormElement: false,
      HTMLSelectElement: false,
      MediaList: true, // TODO: Not spec compliant, should be false.
      MimeTypeArray: false,
      NamedNodeMap: false,
      NodeList: true,
      PaintRequestList: false,
      Plugin: false,
      PluginArray: false,
      SVGLengthList: false,
      SVGNumberList: false,
      SVGPathSegList: false,
      SVGPointList: false,
      SVGStringList: false,
      SVGTransformList: false,
      SourceBufferList: false,
      StyleSheetList: true, // TODO: Not spec compliant, should be false.
      TextTrackCueList: false,
      TextTrackList: false,
      TouchList: false
    };

    for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
      var NAME = collections[i];
      var explicit = DOMIterables[NAME];
      var Collection = global[NAME];
      var proto = Collection && Collection.prototype;
      var key;
      if (proto) {
        if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
        if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
        Iterators[NAME] = ArrayValues;
        if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
      }
    }

  }, { "./es6.array.iterator": 997, "./_object-keys": 1079, "./_redefine": 1074, "./_global": 1039, "./_hide": 1042, "./_iterators": 1134, "./_wks": 1041 }], 868: [function (require, module, exports) {
    require('../modules/web.timers');
    require('../modules/web.immediate');
    require('../modules/web.dom.iterable');
    module.exports = require('../modules/_core');

  }, { "../modules/web.timers": 1035, "../modules/web.immediate": 1036, "../modules/web.dom.iterable": 1037, "../modules/_core": 870 }], 864: [function (require, module, exports) {
    var define;
    /**
     * Copyright (c) 2014-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    var runtime = (function (exports) {
      "use strict";

      var Op = Object.prototype;
      var hasOwn = Op.hasOwnProperty;
      var defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; };
      var undefined; // More compressible than void 0.
      var $Symbol = typeof Symbol === "function" ? Symbol : {};
      var iteratorSymbol = $Symbol.iterator || "@@iterator";
      var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
      var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

      function define(obj, key, value) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
        return obj[key];
      }
      try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
      } catch (err) {
        define = function (obj, key, value) {
          return obj[key] = value;
        };
      }

      function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);

        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) });

        return generator;
      }
      exports.wrap = wrap;

      // Try/catch helper to minimize deoptimizations. Returns a completion
      // record like context.tryEntries[i].completion. This interface could
      // have been (and was previously) designed to take a closure to be
      // invoked without arguments, but in all the cases we care about we
      // already have an existing method we want to call, so there's no need
      // to create a new function object. We can even get away with assuming
      // the method takes exactly one argument, since that happens to be true
      // in every case, so we don't have to touch the arguments object. The
      // only additional allocation required is the completion record, which
      // has a stable shape and so hopefully should be cheap to allocate.
      function tryCatch(fn, obj, arg) {
        try {
          return { type: "normal", arg: fn.call(obj, arg) };
        } catch (err) {
          return { type: "throw", arg: err };
        }
      }

      var GenStateSuspendedStart = "suspendedStart";
      var GenStateSuspendedYield = "suspendedYield";
      var GenStateExecuting = "executing";
      var GenStateCompleted = "completed";

      // Returning this object from the innerFn has the same effect as
      // breaking out of the dispatch switch statement.
      var ContinueSentinel = {};

      // Dummy constructor functions that we use as the .constructor and
      // .constructor.prototype properties for functions that return Generator
      // objects. For full spec compliance, you may wish to configure your
      // minifier not to mangle the names of these two functions.
      function Generator() { }
      function GeneratorFunction() { }
      function GeneratorFunctionPrototype() { }

      // This is a polyfill for %IteratorPrototype% for environments that
      // don't natively support it.
      var IteratorPrototype = {};
      define(IteratorPrototype, iteratorSymbol, function () {
        return this;
      });

      var getProto = Object.getPrototypeOf;
      var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
      if (NativeIteratorPrototype &&
        NativeIteratorPrototype !== Op &&
        hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
        // This environment has a native %IteratorPrototype%; use it instead
        // of the polyfill.
        IteratorPrototype = NativeIteratorPrototype;
      }

      var Gp = GeneratorFunctionPrototype.prototype =
        Generator.prototype = Object.create(IteratorPrototype);
      GeneratorFunction.prototype = GeneratorFunctionPrototype;
      defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: true });
      defineProperty(
        GeneratorFunctionPrototype,
        "constructor",
        { value: GeneratorFunction, configurable: true }
      );
      GeneratorFunction.displayName = define(
        GeneratorFunctionPrototype,
        toStringTagSymbol,
        "GeneratorFunction"
      );

      // Helper for defining the .next, .throw, and .return methods of the
      // Iterator interface in terms of a single ._invoke method.
      function defineIteratorMethods(prototype) {
        ["next", "throw", "return"].forEach(function (method) {
          define(prototype, method, function (arg) {
            return this._invoke(method, arg);
          });
        });
      }

      exports.isGeneratorFunction = function (genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor
          ? ctor === GeneratorFunction ||
          // For the native GeneratorFunction constructor, the best we can
          // do is to check its .name property.
          (ctor.displayName || ctor.name) === "GeneratorFunction"
          : false;
      };

      exports.mark = function (genFun) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        } else {
          genFun.__proto__ = GeneratorFunctionPrototype;
          define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
      };

      // Within the body of any async function, `await x` is transformed to
      // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
      // `hasOwn.call(value, "__await")` to determine if the yielded value is
      // meant to be awaited.
      exports.awrap = function (arg) {
        return { __await: arg };
      };

      function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
          var record = tryCatch(generator[method], generator, arg);
          if (record.type === "throw") {
            reject(record.arg);
          } else {
            var result = record.arg;
            var value = result.value;
            if (value &&
              typeof value === "object" &&
              hasOwn.call(value, "__await")) {
              return PromiseImpl.resolve(value.__await).then(function (value) {
                invoke("next", value, resolve, reject);
              }, function (err) {
                invoke("throw", err, resolve, reject);
              });
            }

            return PromiseImpl.resolve(value).then(function (unwrapped) {
              // When a yielded Promise is resolved, its final value becomes
              // the .value of the Promise<{value,done}> result for the
              // current iteration.
              result.value = unwrapped;
              resolve(result);
            }, function (error) {
              // If a rejected Promise was yielded, throw the rejection back
              // into the async generator function so it can be handled there.
              return invoke("throw", error, resolve, reject);
            });
          }
        }

        var previousPromise;

        function enqueue(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function (resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }

          return previousPromise =
            // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(
              callInvokeWithMethodAndArg,
              // Avoid propagating failures to Promises returned by later
              // invocations of the iterator.
              callInvokeWithMethodAndArg
            ) : callInvokeWithMethodAndArg();
        }

        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        defineProperty(this, "_invoke", { value: enqueue });
      }

      defineIteratorMethods(AsyncIterator.prototype);
      define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
        return this;
      });
      exports.AsyncIterator = AsyncIterator;

      // Note that simple async functions are implemented on top of
      // AsyncIterator objects; they just return a Promise for the value of
      // the final result produced by the iterator.
      exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;

        var iter = new AsyncIterator(
          wrap(innerFn, outerFn, self, tryLocsList),
          PromiseImpl
        );

        return exports.isGeneratorFunction(outerFn)
          ? iter // If outerFn is a generator, return the full iterator.
          : iter.next().then(function (result) {
            return result.done ? result.value : iter.next();
          });
      };

      function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;

        return function invoke(method, arg) {
          if (state === GenStateExecuting) {
            throw new Error("Generator is already running");
          }

          if (state === GenStateCompleted) {
            if (method === "throw") {
              throw arg;
            }

            // Be forgiving, per 25.3.3.3.3 of the spec:
            // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
            return doneResult();
          }

          context.method = method;
          context.arg = arg;

          while (true) {
            var delegate = context.delegate;
            if (delegate) {
              var delegateResult = maybeInvokeDelegate(delegate, context);
              if (delegateResult) {
                if (delegateResult === ContinueSentinel) continue;
                return delegateResult;
              }
            }

            if (context.method === "next") {
              // Setting context._sent for legacy support of Babel's
              // function.sent implementation.
              context.sent = context._sent = context.arg;

            } else if (context.method === "throw") {
              if (state === GenStateSuspendedStart) {
                state = GenStateCompleted;
                throw context.arg;
              }

              context.dispatchException(context.arg);

            } else if (context.method === "return") {
              context.abrupt("return", context.arg);
            }

            state = GenStateExecuting;

            var record = tryCatch(innerFn, self, context);
            if (record.type === "normal") {
              // If an exception is thrown from innerFn, we leave state ===
              // GenStateExecuting and loop back for another invocation.
              state = context.done
                ? GenStateCompleted
                : GenStateSuspendedYield;

              if (record.arg === ContinueSentinel) {
                continue;
              }

              return {
                value: record.arg,
                done: context.done
              };

            } else if (record.type === "throw") {
              state = GenStateCompleted;
              // Dispatch the exception by looping back around to the
              // context.dispatchException(context.arg) call above.
              context.method = "throw";
              context.arg = record.arg;
            }
          }
        };
      }

      // Call delegate.iterator[context.method](context.arg) and handle the
      // result, either by returning a { value, done } result from the
      // delegate iterator, or by modifying context.method and context.arg,
      // setting context.delegate to null, and returning the ContinueSentinel.
      function maybeInvokeDelegate(delegate, context) {
        var methodName = context.method;
        var method = delegate.iterator[methodName];
        if (method === undefined) {
          // A .throw or .return when the delegate iterator has no .throw
          // method, or a missing .next mehtod, always terminate the
          // yield* loop.
          context.delegate = null;

          // Note: ["return"] must be used for ES3 parsing compatibility.
          if (methodName === "throw" && delegate.iterator["return"]) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }
          if (methodName !== "return") {
            context.method = "throw";
            context.arg = new TypeError(
              "The iterator does not provide a '" + methodName + "' method");
          }

          return ContinueSentinel;
        }

        var record = tryCatch(method, delegate.iterator, context.arg);

        if (record.type === "throw") {
          context.method = "throw";
          context.arg = record.arg;
          context.delegate = null;
          return ContinueSentinel;
        }

        var info = record.arg;

        if (!info) {
          context.method = "throw";
          context.arg = new TypeError("iterator result is not an object");
          context.delegate = null;
          return ContinueSentinel;
        }

        if (info.done) {
          // Assign the result of the finished delegate to the temporary
          // variable specified by delegate.resultName (see delegateYield).
          context[delegate.resultName] = info.value;

          // Resume execution at the desired location (see delegateYield).
          context.next = delegate.nextLoc;

          // If context.method was "throw" but the delegate handled the
          // exception, let the outer generator proceed normally. If
          // context.method was "next", forget context.arg since it has been
          // "consumed" by the delegate iterator. If context.method was
          // "return", allow the original .return call to continue in the
          // outer generator.
          if (context.method !== "return") {
            context.method = "next";
            context.arg = undefined;
          }

        } else {
          // Re-yield the result returned by the delegate method.
          return info;
        }

        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
      }

      // Define Generator.prototype.{next,throw,return} in terms of the
      // unified ._invoke helper method.
      defineIteratorMethods(Gp);

      define(Gp, toStringTagSymbol, "Generator");

      // A Generator should always return itself as the iterator object when the
      // @@iterator function is called on it. Some browsers' implementations of the
      // iterator prototype chain incorrectly implement this, causing the Generator
      // object to not be returned from this call. This ensures that doesn't happen.
      // See https://github.com/facebook/regenerator/issues/274 for more details.
      define(Gp, iteratorSymbol, function () {
        return this;
      });

      define(Gp, "toString", function () {
        return "[object Generator]";
      });

      function pushTryEntry(locs) {
        var entry = { tryLoc: locs[0] };

        if (1 in locs) {
          entry.catchLoc = locs[1];
        }

        if (2 in locs) {
          entry.finallyLoc = locs[2];
          entry.afterLoc = locs[3];
        }

        this.tryEntries.push(entry);
      }

      function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
      }

      function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [{ tryLoc: "root" }];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
      }

      exports.keys = function (val) {
        var object = Object(val);
        var keys = [];
        for (var key in object) {
          keys.push(key);
        }
        keys.reverse();

        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
          while (keys.length) {
            var key = keys.pop();
            if (key in object) {
              next.value = key;
              next.done = false;
              return next;
            }
          }

          // To avoid creating an additional object, we just hang the .value
          // and .done properties off the next function object itself. This
          // also ensures that the minifier will not anonymize the function.
          next.done = true;
          return next;
        };
      };

      function values(iterable) {
        if (iterable) {
          var iteratorMethod = iterable[iteratorSymbol];
          if (iteratorMethod) {
            return iteratorMethod.call(iterable);
          }

          if (typeof iterable.next === "function") {
            return iterable;
          }

          if (!isNaN(iterable.length)) {
            var i = -1, next = function next() {
              while (++i < iterable.length) {
                if (hasOwn.call(iterable, i)) {
                  next.value = iterable[i];
                  next.done = false;
                  return next;
                }
              }

              next.value = undefined;
              next.done = true;

              return next;
            };

            return next.next = next;
          }
        }

        // Return an iterator with no values.
        return { next: doneResult };
      }
      exports.values = values;

      function doneResult() {
        return { value: undefined, done: true };
      }

      Context.prototype = {
        constructor: Context,

        reset: function (skipTempReset) {
          this.prev = 0;
          this.next = 0;
          // Resetting context._sent for legacy support of Babel's
          // function.sent implementation.
          this.sent = this._sent = undefined;
          this.done = false;
          this.delegate = null;

          this.method = "next";
          this.arg = undefined;

          this.tryEntries.forEach(resetTryEntry);

          if (!skipTempReset) {
            for (var name in this) {
              // Not sure about the optimal order of these conditions:
              if (name.charAt(0) === "t" &&
                hasOwn.call(this, name) &&
                !isNaN(+name.slice(1))) {
                this[name] = undefined;
              }
            }
          }
        },

        stop: function () {
          this.done = true;

          var rootEntry = this.tryEntries[0];
          var rootRecord = rootEntry.completion;
          if (rootRecord.type === "throw") {
            throw rootRecord.arg;
          }

          return this.rval;
        },

        dispatchException: function (exception) {
          if (this.done) {
            throw exception;
          }

          var context = this;
          function handle(loc, caught) {
            record.type = "throw";
            record.arg = exception;
            context.next = loc;

            if (caught) {
              // If the dispatched exception was caught by a catch block,
              // then let that catch block handle the exception normally.
              context.method = "next";
              context.arg = undefined;
            }

            return !!caught;
          }

          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            var record = entry.completion;

            if (entry.tryLoc === "root") {
              // Exception thrown outside of any try block that could handle
              // it, so set the completion value of the entire function to
              // throw the exception.
              return handle("end");
            }

            if (entry.tryLoc <= this.prev) {
              var hasCatch = hasOwn.call(entry, "catchLoc");
              var hasFinally = hasOwn.call(entry, "finallyLoc");

              if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                } else if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }

              } else if (hasCatch) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                }

              } else if (hasFinally) {
                if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }

              } else {
                throw new Error("try statement without catch or finally");
              }
            }
          }
        },

        abrupt: function (type, arg) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.tryLoc <= this.prev &&
              hasOwn.call(entry, "finallyLoc") &&
              this.prev < entry.finallyLoc) {
              var finallyEntry = entry;
              break;
            }
          }

          if (finallyEntry &&
            (type === "break" ||
              type === "continue") &&
            finallyEntry.tryLoc <= arg &&
            arg <= finallyEntry.finallyLoc) {
            // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
          }

          var record = finallyEntry ? finallyEntry.completion : {};
          record.type = type;
          record.arg = arg;

          if (finallyEntry) {
            this.method = "next";
            this.next = finallyEntry.finallyLoc;
            return ContinueSentinel;
          }

          return this.complete(record);
        },

        complete: function (record, afterLoc) {
          if (record.type === "throw") {
            throw record.arg;
          }

          if (record.type === "break" ||
            record.type === "continue") {
            this.next = record.arg;
          } else if (record.type === "return") {
            this.rval = this.arg = record.arg;
            this.method = "return";
            this.next = "end";
          } else if (record.type === "normal" && afterLoc) {
            this.next = afterLoc;
          }

          return ContinueSentinel;
        },

        finish: function (finallyLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.finallyLoc === finallyLoc) {
              this.complete(entry.completion, entry.afterLoc);
              resetTryEntry(entry);
              return ContinueSentinel;
            }
          }
        },

        "catch": function (tryLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.tryLoc === tryLoc) {
              var record = entry.completion;
              if (record.type === "throw") {
                var thrown = record.arg;
                resetTryEntry(entry);
              }
              return thrown;
            }
          }

          // The context.catch method must only be called with a location
          // argument that corresponds to a known catch block.
          throw new Error("illegal catch attempt");
        },

        delegateYield: function (iterable, resultName, nextLoc) {
          this.delegate = {
            iterator: values(iterable),
            resultName: resultName,
            nextLoc: nextLoc
          };

          if (this.method === "next") {
            // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
          }

          return ContinueSentinel;
        }
      };

      // Regardless of whether this script is executing as a CommonJS module
      // or not, return the runtime object so that we can declare the variable
      // regeneratorRuntime in the outer scope, which allows this module to be
      // injected easily by `bin/regenerator --include-runtime script.js`.
      return exports;

    }(
      // If this script is executing as a CommonJS module, use module.exports
      // as the regeneratorRuntime namespace. Otherwise create a new empty
      // object. Either way, the resulting object will be used to initialize
      // the regeneratorRuntime variable at the top of this file.
      typeof module === "object" ? module.exports : {}
    ));

    try {
      regeneratorRuntime = runtime;
    } catch (accidentalStrictMode) {
      // This module should not be running in strict mode, so the above
      // assignment should always work unless something is misconfigured. Just
      // in case runtime.js accidentally runs in strict mode, in modern engines
      // we can explicitly access globalThis. In older engines we can escape
      // strict mode using a global Function call. This could conceivably fail
      // if a Content Security Policy forbids using Function, but in that case
      // the proper solution is to fix the accidental strict mode problem. If
      // you've misconfigured your bundler to force strict mode and applied a
      // CSP to forbid Function, and you're not willing to fix either of those
      // problems, please detail your unique predicament in a GitHub issue.
      if (typeof globalThis === "object") {
        globalThis.regeneratorRuntime = runtime;
      } else {
        Function("r", "regeneratorRuntime = r")(runtime);
      }
    }

  }, {}], 851: [function (require, module, exports) {
    "use strict";

    require("core-js/es6");

    require("core-js/fn/array/includes");

    require("core-js/fn/array/flat-map");

    require("core-js/fn/string/pad-start");

    require("core-js/fn/string/pad-end");

    require("core-js/fn/string/trim-start");

    require("core-js/fn/string/trim-end");

    require("core-js/fn/symbol/async-iterator");

    require("core-js/fn/object/get-own-property-descriptors");

    require("core-js/fn/object/values");

    require("core-js/fn/object/entries");

    require("core-js/fn/promise/finally");

    require("core-js/web");

    require("regenerator-runtime/runtime");
  }, { "core-js/es6": 867, "core-js/fn/array/includes": 853, "core-js/fn/array/flat-map": 854, "core-js/fn/string/pad-start": 855, "core-js/fn/string/pad-end": 857, "core-js/fn/string/trim-start": 856, "core-js/fn/string/trim-end": 858, "core-js/fn/symbol/async-iterator": 859, "core-js/fn/object/get-own-property-descriptors": 860, "core-js/fn/object/values": 861, "core-js/fn/object/entries": 862, "core-js/fn/promise/finally": 863, "core-js/web": 868, "regenerator-runtime/runtime": 864 }], 1049: [function (require, module, exports) {

    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
    var global = module.exports = typeof window != 'undefined' && window.Math == Math
      ? window : typeof self != 'undefined' && self.Math == Math ? self
        // eslint-disable-next-line no-new-func
        : Function('return this')();
    if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

  }, {}], 866: [function (require, module, exports) {
    var core = module.exports = { version: '2.6.12' };
    if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

  }, {}], 1150: [function (require, module, exports) {
    module.exports = function (it) {
      if (typeof it != 'function') throw TypeError(it + ' is not a function!');
      return it;
    };

  }, {}], 1143: [function (require, module, exports) {
    // optional / simple context binding
    var aFunction = require('./_a-function');
    module.exports = function (fn, that, length) {
      aFunction(fn);
      if (that === undefined) return fn;
      switch (length) {
        case 1: return function (a) {
          return fn.call(that, a);
        };
        case 2: return function (a, b) {
          return fn.call(that, a, b);
        };
        case 3: return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
      }
      return function (/* ...args */) {
        return fn.apply(that, arguments);
      };
    };

  }, { "./_a-function": 1150 }], 1155: [function (require, module, exports) {
    module.exports = function (it) {
      return typeof it === 'object' ? it !== null : typeof it === 'function';
    };

  }, {}], 1152: [function (require, module, exports) {
    var isObject = require('./_is-object');
    module.exports = function (it) {
      if (!isObject(it)) throw TypeError(it + ' is not an object!');
      return it;
    };

  }, { "./_is-object": 1155 }], 1151: [function (require, module, exports) {
    module.exports = function (exec) {
      try {
        return !!exec();
      } catch (e) {
        return true;
      }
    };

  }, {}], 1149: [function (require, module, exports) {
    // Thank's IE8 for his funny defineProperty
    module.exports = !require('./_fails')(function () {
      return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
    });

  }, { "./_fails": 1151 }], 1156: [function (require, module, exports) {
    var isObject = require('./_is-object');
    var document = require('./_global').document;
    // typeof document.createElement is 'object' in old IE
    var is = isObject(document) && isObject(document.createElement);
    module.exports = function (it) {
      return is ? document.createElement(it) : {};
    };

  }, { "./_is-object": 1155, "./_global": 1049 }], 1154: [function (require, module, exports) {
    module.exports = !require('./_descriptors') && !require('./_fails')(function () {
      return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
    });

  }, { "./_descriptors": 1149, "./_fails": 1151, "./_dom-create": 1156 }], 1153: [function (require, module, exports) {
    // 7.1.1 ToPrimitive(input [, PreferredType])
    var isObject = require('./_is-object');
    // instead of the ES6 spec version, we didn't implement @@toPrimitive case
    // and the second argument - flag - preferred type is a string
    module.exports = function (it, S) {
      if (!isObject(it)) return it;
      var fn, val;
      if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
      if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
      if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
      throw TypeError("Can't convert object to primitive value");
    };

  }, { "./_is-object": 1155 }], 1148: [function (require, module, exports) {
    var anObject = require('./_an-object');
    var IE8_DOM_DEFINE = require('./_ie8-dom-define');
    var toPrimitive = require('./_to-primitive');
    var dP = Object.defineProperty;

    exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPrimitive(P, true);
      anObject(Attributes);
      if (IE8_DOM_DEFINE) try {
        return dP(O, P, Attributes);
      } catch (e) { /* empty */ }
      if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
      if ('value' in Attributes) O[P] = Attributes.value;
      return O;
    };

  }, { "./_an-object": 1152, "./_ie8-dom-define": 1154, "./_to-primitive": 1153, "./_descriptors": 1149 }], 1147: [function (require, module, exports) {
    module.exports = function (bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
      };
    };

  }, {}], 1142: [function (require, module, exports) {
    var dP = require('./_object-dp');
    var createDesc = require('./_property-desc');
    module.exports = require('./_descriptors') ? function (object, key, value) {
      return dP.f(object, key, createDesc(1, value));
    } : function (object, key, value) {
      object[key] = value;
      return object;
    };

  }, { "./_object-dp": 1148, "./_property-desc": 1147, "./_descriptors": 1149 }], 1144: [function (require, module, exports) {
    var hasOwnProperty = {}.hasOwnProperty;
    module.exports = function (it, key) {
      return hasOwnProperty.call(it, key);
    };

  }, {}], 1048: [function (require, module, exports) {

    var global = require('./_global');
    var core = require('./_core');
    var ctx = require('./_ctx');
    var hide = require('./_hide');
    var has = require('./_has');
    var PROTOTYPE = 'prototype';

    var $export = function (type, name, source) {
      var IS_FORCED = type & $export.F;
      var IS_GLOBAL = type & $export.G;
      var IS_STATIC = type & $export.S;
      var IS_PROTO = type & $export.P;
      var IS_BIND = type & $export.B;
      var IS_WRAP = type & $export.W;
      var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
      var expProto = exports[PROTOTYPE];
      var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
      var key, own, out;
      if (IS_GLOBAL) source = name;
      for (key in source) {
        // contains in native
        own = !IS_FORCED && target && target[key] !== undefined;
        if (own && has(exports, key)) continue;
        // export native or passed
        out = own ? target[key] : source[key];
        // prevent global pollution for namespaces
        exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
          // bind timers to global for call from export context
          : IS_BIND && own ? ctx(out, global)
            // wrap global constructors for prevent change them in library
            : IS_WRAP && target[key] == out ? (function (C) {
              var F = function (a, b, c) {
                if (this instanceof C) {
                  switch (arguments.length) {
                    case 0: return new C();
                    case 1: return new C(a);
                    case 2: return new C(a, b);
                  } return new C(a, b, c);
                } return C.apply(this, arguments);
              };
              F[PROTOTYPE] = C[PROTOTYPE];
              return F;
              // make static versions for prototype methods
            })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
        // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
        if (IS_PROTO) {
          (exports.virtual || (exports.virtual = {}))[key] = out;
          // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
          if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
        }
      }
    };
    // type bitmap
    $export.F = 1;   // forced
    $export.G = 2;   // global
    $export.S = 4;   // static
    $export.P = 8;   // proto
    $export.B = 16;  // bind
    $export.W = 32;  // wrap
    $export.U = 64;  // safe
    $export.R = 128; // real proto method for `library`
    module.exports = $export;

  }, { "./_global": 1049, "./_core": 866, "./_ctx": 1143, "./_hide": 1142, "./_has": 1144 }], 865: [function (require, module, exports) {
    // https://github.com/tc39/proposal-global
    var $export = require('./_export');

    $export($export.G, { global: require('./_global') });

  }, { "./_export": 1048, "./_global": 1049 }], 852: [function (require, module, exports) {
    require('../modules/es7.global');
    module.exports = require('../modules/_core').global;

  }, { "../modules/es7.global": 865, "../modules/_core": 866 }], 850: [function (require, module, exports) {
    "use strict";

    require("./noConflict");

    var _global = _interopRequireDefault(require("core-js/library/fn/global"));

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

    if (_global["default"]._babelPolyfill && typeof console !== "undefined" && console.warn) {
      console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended " + "and may have consequences if different versions of the polyfills are applied sequentially. " + "If you do need to load the polyfill more than once, use @babel/polyfill/noConflict " + "instead to bypass the warning.");
    }

    _global["default"]._babelPolyfill = true;
  }, { "./noConflict": 851, "core-js/library/fn/global": 852 }], 3: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /* eslint-disable */
    var displayMap = exports.displayMap = function displayMap(locations) {
      mapboxgl.accessToken = 'pk.eyJ1IjoieXVpbW9yaWkiLCJhIjoiY2xsamxsZXd0MTQwejNkcjYwbzFscTYzOSJ9.x-BM1dPOqU1AR2jpuqJR7A';

      var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/yuimorii/clljpug4o026p01qn7y6t5t55',
        scrollZoom: false
        // center: [-118.113491, 34.111745],
        // zoom: 10,
        // interactive: false
      });

      var bounds = new mapboxgl.LngLatBounds();

      locations.forEach(function (loc) {
        // Create marker
        var el = document.createElement('div');
        el.className = 'marker';

        // Add marker
        new mapboxgl.Marker({
          element: el,
          anchor: 'bottom'
        }).setLngLat(loc.coordinates).addTo(map);

        // Add popup
        new mapboxgl.Popup({
          offset: 30
        }).setLngLat(loc.coordinates).setHTML('<p>Day ' + loc.day + ': ' + loc.description + '</p>').addTo(map);

        // Extend map bounds to include current location
        bounds.extend(loc.coordinates);
      });

      map.fitBounds(bounds, {
        padding: {
          top: 200,
          bottom: 150,
          left: 100,
          right: 100
        }
      });
    };
  }, {}], 541: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = bind;
    function bind(fn, thisArg) {
      return function wrap() {
        return fn.apply(thisArg, arguments);
      };
    }
  }, {}], 540: [function (require, module, exports) {
    var global = arguments[3];
    var define;
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _bind = require('./helpers/bind.js');

    var _bind2 = _interopRequireDefault(_bind);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    // utils is a library of generic helper functions non-specific to axios

    const { toString } = Object.prototype;
    const { getPrototypeOf } = Object;

    const kindOf = (cache => thing => {
      const str = toString.call(thing);
      return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
    })(Object.create(null));

    const kindOfTest = type => {
      type = type.toLowerCase();
      return thing => kindOf(thing) === type;
    };

    const typeOfTest = type => thing => typeof thing === type;

    /**
     * Determine if a value is an Array
     *
     * @param {Object} val The value to test
     *
     * @returns {boolean} True if value is an Array, otherwise false
     */
    const { isArray } = Array;

    /**
     * Determine if a value is undefined
     *
     * @param {*} val The value to test
     *
     * @returns {boolean} True if the value is undefined, otherwise false
     */
    const isUndefined = typeOfTest('undefined');

    /**
     * Determine if a value is a Buffer
     *
     * @param {*} val The value to test
     *
     * @returns {boolean} True if value is a Buffer, otherwise false
     */
    function isBuffer(val) {
      return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
    }

    /**
     * Determine if a value is an ArrayBuffer
     *
     * @param {*} val The value to test
     *
     * @returns {boolean} True if value is an ArrayBuffer, otherwise false
     */
    const isArrayBuffer = kindOfTest('ArrayBuffer');

    /**
     * Determine if a value is a view on an ArrayBuffer
     *
     * @param {*} val The value to test
     *
     * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
     */
    function isArrayBufferView(val) {
      let result;
      if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
        result = ArrayBuffer.isView(val);
      } else {
        result = val && val.buffer && isArrayBuffer(val.buffer);
      }
      return result;
    }

    /**
     * Determine if a value is a String
     *
     * @param {*} val The value to test
     *
     * @returns {boolean} True if value is a String, otherwise false
     */
    const isString = typeOfTest('string');

    /**
     * Determine if a value is a Function
     *
     * @param {*} val The value to test
     * @returns {boolean} True if value is a Function, otherwise false
     */
    const isFunction = typeOfTest('function');

    /**
     * Determine if a value is a Number
     *
     * @param {*} val The value to test
     *
     * @returns {boolean} True if value is a Number, otherwise false
     */
    const isNumber = typeOfTest('number');

    /**
     * Determine if a value is an Object
     *
     * @param {*} thing The value to test
     *
     * @returns {boolean} True if value is an Object, otherwise false
     */
    const isObject = thing => thing !== null && typeof thing === 'object';

    /**
     * Determine if a value is a Boolean
     *
     * @param {*} thing The value to test
     * @returns {boolean} True if value is a Boolean, otherwise false
     */
    const isBoolean = thing => thing === true || thing === false;

    /**
     * Determine if a value is a plain Object
     *
     * @param {*} val The value to test
     *
     * @returns {boolean} True if value is a plain Object, otherwise false
     */
    const isPlainObject = val => {
      if (kindOf(val) !== 'object') {
        return false;
      }

      const prototype = getPrototypeOf(val);
      return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
    };

    /**
     * Determine if a value is a Date
     *
     * @param {*} val The value to test
     *
     * @returns {boolean} True if value is a Date, otherwise false
     */
    const isDate = kindOfTest('Date');

    /**
     * Determine if a value is a File
     *
     * @param {*} val The value to test
     *
     * @returns {boolean} True if value is a File, otherwise false
     */
    const isFile = kindOfTest('File');

    /**
     * Determine if a value is a Blob
     *
     * @param {*} val The value to test
     *
     * @returns {boolean} True if value is a Blob, otherwise false
     */
    const isBlob = kindOfTest('Blob');

    /**
     * Determine if a value is a FileList
     *
     * @param {*} val The value to test
     *
     * @returns {boolean} True if value is a File, otherwise false
     */
    const isFileList = kindOfTest('FileList');

    /**
     * Determine if a value is a Stream
     *
     * @param {*} val The value to test
     *
     * @returns {boolean} True if value is a Stream, otherwise false
     */
    const isStream = val => isObject(val) && isFunction(val.pipe);

    /**
     * Determine if a value is a FormData
     *
     * @param {*} thing The value to test
     *
     * @returns {boolean} True if value is an FormData, otherwise false
     */
    const isFormData = thing => {
      let kind;
      return thing && (typeof FormData === 'function' && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === 'formdata' ||
        // detect form-data instance
        kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]'));
    };

    /**
     * Determine if a value is a URLSearchParams object
     *
     * @param {*} val The value to test
     *
     * @returns {boolean} True if value is a URLSearchParams object, otherwise false
     */
    const isURLSearchParams = kindOfTest('URLSearchParams');

    /**
     * Trim excess whitespace off the beginning and end of a string
     *
     * @param {String} str The String to trim
     *
     * @returns {String} The String freed of excess whitespace
     */
    const trim = str => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

    /**
     * Iterate over an Array or an Object invoking a function for each item.
     *
     * If `obj` is an Array callback will be called passing
     * the value, index, and complete array for each item.
     *
     * If 'obj' is an Object callback will be called passing
     * the value, key, and complete object for each property.
     *
     * @param {Object|Array} obj The object to iterate
     * @param {Function} fn The callback to invoke for each item
     *
     * @param {Boolean} [allOwnKeys = false]
     * @returns {any}
     */
    function forEach(obj, fn, { allOwnKeys = false } = {}) {
      // Don't bother if no value provided
      if (obj === null || typeof obj === 'undefined') {
        return;
      }

      let i;
      let l;

      // Force an array if not already something iterable
      if (typeof obj !== 'object') {
        /*eslint no-param-reassign:0*/
        obj = [obj];
      }

      if (isArray(obj)) {
        // Iterate over array values
        for (i = 0, l = obj.length; i < l; i++) {
          fn.call(null, obj[i], i, obj);
        }
      } else {
        // Iterate over object keys
        const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
        const len = keys.length;
        let key;

        for (i = 0; i < len; i++) {
          key = keys[i];
          fn.call(null, obj[key], key, obj);
        }
      }
    }

    function findKey(obj, key) {
      key = key.toLowerCase();
      const keys = Object.keys(obj);
      let i = keys.length;
      let _key;
      while (i-- > 0) {
        _key = keys[i];
        if (key === _key.toLowerCase()) {
          return _key;
        }
      }
      return null;
    }

    const _global = (() => {
      /*eslint no-undef:0*/
      if (typeof globalThis !== "undefined") return globalThis;
      return typeof self !== "undefined" ? self : typeof window !== 'undefined' ? window : global;
    })();

    const isContextDefined = context => !isUndefined(context) && context !== _global;

    /**
     * Accepts varargs expecting each argument to be an object, then
     * immutably merges the properties of each object and returns result.
     *
     * When multiple objects contain the same key the later object in
     * the arguments list will take precedence.
     *
     * Example:
     *
     * ```js
     * var result = merge({foo: 123}, {foo: 456});
     * console.log(result.foo); // outputs 456
     * ```
     *
     * @param {Object} obj1 Object to merge
     *
     * @returns {Object} Result of all merge properties
     */
    function merge() /* obj1, obj2, obj3, ... */ {
      const { caseless } = isContextDefined(this) && this || {};
      const result = {};
      const assignValue = (val, key) => {
        const targetKey = caseless && findKey(result, key) || key;
        if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
          result[targetKey] = merge(result[targetKey], val);
        } else if (isPlainObject(val)) {
          result[targetKey] = merge({}, val);
        } else if (isArray(val)) {
          result[targetKey] = val.slice();
        } else {
          result[targetKey] = val;
        }
      };

      for (let i = 0, l = arguments.length; i < l; i++) {
        arguments[i] && forEach(arguments[i], assignValue);
      }
      return result;
    }

    /**
     * Extends object a by mutably adding to it the properties of object b.
     *
     * @param {Object} a The object to be extended
     * @param {Object} b The object to copy properties from
     * @param {Object} thisArg The object to bind function to
     *
     * @param {Boolean} [allOwnKeys]
     * @returns {Object} The resulting value of object a
     */
    const extend = (a, b, thisArg, { allOwnKeys } = {}) => {
      forEach(b, (val, key) => {
        if (thisArg && isFunction(val)) {
          a[key] = (0, _bind2.default)(val, thisArg);
        } else {
          a[key] = val;
        }
      }, { allOwnKeys });
      return a;
    };

    /**
     * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
     *
     * @param {string} content with BOM
     *
     * @returns {string} content value without BOM
     */
    const stripBOM = content => {
      if (content.charCodeAt(0) === 0xFEFF) {
        content = content.slice(1);
      }
      return content;
    };

    /**
     * Inherit the prototype methods from one constructor into another
     * @param {function} constructor
     * @param {function} superConstructor
     * @param {object} [props]
     * @param {object} [descriptors]
     *
     * @returns {void}
     */
    const inherits = (constructor, superConstructor, props, descriptors) => {
      constructor.prototype = Object.create(superConstructor.prototype, descriptors);
      constructor.prototype.constructor = constructor;
      Object.defineProperty(constructor, 'super', {
        value: superConstructor.prototype
      });
      props && Object.assign(constructor.prototype, props);
    };

    /**
     * Resolve object with deep prototype chain to a flat object
     * @param {Object} sourceObj source object
     * @param {Object} [destObj]
     * @param {Function|Boolean} [filter]
     * @param {Function} [propFilter]
     *
     * @returns {Object}
     */
    const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
      let props;
      let i;
      let prop;
      const merged = {};

      destObj = destObj || {};
      // eslint-disable-next-line no-eq-null,eqeqeq
      if (sourceObj == null) return destObj;

      do {
        props = Object.getOwnPropertyNames(sourceObj);
        i = props.length;
        while (i-- > 0) {
          prop = props[i];
          if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
            destObj[prop] = sourceObj[prop];
            merged[prop] = true;
          }
        }
        sourceObj = filter !== false && getPrototypeOf(sourceObj);
      } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

      return destObj;
    };

    /**
     * Determines whether a string ends with the characters of a specified string
     *
     * @param {String} str
     * @param {String} searchString
     * @param {Number} [position= 0]
     *
     * @returns {boolean}
     */
    const endsWith = (str, searchString, position) => {
      str = String(str);
      if (position === undefined || position > str.length) {
        position = str.length;
      }
      position -= searchString.length;
      const lastIndex = str.indexOf(searchString, position);
      return lastIndex !== -1 && lastIndex === position;
    };

    /**
     * Returns new array from array like object or null if failed
     *
     * @param {*} [thing]
     *
     * @returns {?Array}
     */
    const toArray = thing => {
      if (!thing) return null;
      if (isArray(thing)) return thing;
      let i = thing.length;
      if (!isNumber(i)) return null;
      const arr = new Array(i);
      while (i-- > 0) {
        arr[i] = thing[i];
      }
      return arr;
    };

    /**
     * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
     * thing passed in is an instance of Uint8Array
     *
     * @param {TypedArray}
     *
     * @returns {Array}
     */
    // eslint-disable-next-line func-names
    const isTypedArray = (TypedArray => {
      // eslint-disable-next-line func-names
      return thing => {
        return TypedArray && thing instanceof TypedArray;
      };
    })(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

    /**
     * For each entry in the object, call the function with the key and value.
     *
     * @param {Object<any, any>} obj - The object to iterate over.
     * @param {Function} fn - The function to call for each entry.
     *
     * @returns {void}
     */
    const forEachEntry = (obj, fn) => {
      const generator = obj && obj[Symbol.iterator];

      const iterator = generator.call(obj);

      let result;

      while ((result = iterator.next()) && !result.done) {
        const pair = result.value;
        fn.call(obj, pair[0], pair[1]);
      }
    };

    /**
     * It takes a regular expression and a string, and returns an array of all the matches
     *
     * @param {string} regExp - The regular expression to match against.
     * @param {string} str - The string to search.
     *
     * @returns {Array<boolean>}
     */
    const matchAll = (regExp, str) => {
      let matches;
      const arr = [];

      while ((matches = regExp.exec(str)) !== null) {
        arr.push(matches);
      }

      return arr;
    };

    /* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
    const isHTMLForm = kindOfTest('HTMLFormElement');

    const toCamelCase = str => {
      return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
        return p1.toUpperCase() + p2;
      });
    };

    /* Creating a function that will check if an object has a property. */
    const hasOwnProperty = (({ hasOwnProperty }) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);

    /**
     * Determine if a value is a RegExp object
     *
     * @param {*} val The value to test
     *
     * @returns {boolean} True if value is a RegExp object, otherwise false
     */
    const isRegExp = kindOfTest('RegExp');

    const reduceDescriptors = (obj, reducer) => {
      const descriptors = Object.getOwnPropertyDescriptors(obj);
      const reducedDescriptors = {};

      forEach(descriptors, (descriptor, name) => {
        if (reducer(descriptor, name, obj) !== false) {
          reducedDescriptors[name] = descriptor;
        }
      });

      Object.defineProperties(obj, reducedDescriptors);
    };

    /**
     * Makes all methods read-only
     * @param {Object} obj
     */

    const freezeMethods = obj => {
      reduceDescriptors(obj, (descriptor, name) => {
        // skip restricted props in strict mode
        if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
          return false;
        }

        const value = obj[name];

        if (!isFunction(value)) return;

        descriptor.enumerable = false;

        if ('writable' in descriptor) {
          descriptor.writable = false;
          return;
        }

        if (!descriptor.set) {
          descriptor.set = () => {
            throw Error('Can not rewrite read-only method \'' + name + '\'');
          };
        }
      });
    };

    const toObjectSet = (arrayOrString, delimiter) => {
      const obj = {};

      const define = arr => {
        arr.forEach(value => {
          obj[value] = true;
        });
      };

      isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));

      return obj;
    };

    const noop = () => { };

    const toFiniteNumber = (value, defaultValue) => {
      value = +value;
      return Number.isFinite(value) ? value : defaultValue;
    };

    const ALPHA = 'abcdefghijklmnopqrstuvwxyz';

    const DIGIT = '0123456789';

    const ALPHABET = {
      DIGIT,
      ALPHA,
      ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
    };

    const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
      let str = '';
      const { length } = alphabet;
      while (size--) {
        str += alphabet[Math.random() * length | 0];
      }

      return str;
    };

    /**
     * If the thing is a FormData object, return true, otherwise return false.
     *
     * @param {unknown} thing - The thing to check.
     *
     * @returns {boolean}
     */
    function isSpecCompliantForm(thing) {
      return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
    }

    const toJSONObject = obj => {
      const stack = new Array(10);

      const visit = (source, i) => {

        if (isObject(source)) {
          if (stack.indexOf(source) >= 0) {
            return;
          }

          if (!('toJSON' in source)) {
            stack[i] = source;
            const target = isArray(source) ? [] : {};

            forEach(source, (value, key) => {
              const reducedValue = visit(value, i + 1);
              !isUndefined(reducedValue) && (target[key] = reducedValue);
            });

            stack[i] = undefined;

            return target;
          }
        }

        return source;
      };

      return visit(obj, 0);
    };

    const isAsyncFn = kindOfTest('AsyncFunction');

    const isThenable = thing => thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);

    exports.default = {
      isArray,
      isArrayBuffer,
      isBuffer,
      isFormData,
      isArrayBufferView,
      isString,
      isNumber,
      isBoolean,
      isObject,
      isPlainObject,
      isUndefined,
      isDate,
      isFile,
      isBlob,
      isRegExp,
      isFunction,
      isStream,
      isURLSearchParams,
      isTypedArray,
      isFileList,
      forEach,
      merge,
      extend,
      trim,
      stripBOM,
      inherits,
      toFlatObject,
      kindOf,
      kindOfTest,
      endsWith,
      toArray,
      forEachEntry,
      matchAll,
      isHTMLForm,
      hasOwnProperty,
      hasOwnProp: hasOwnProperty, // an alias to avoid ESLint no-prototype-builtins detection
      reduceDescriptors,
      freezeMethods,
      toObjectSet,
      toCamelCase,
      noop,
      toFiniteNumber,
      findKey,
      global: _global,
      isContextDefined,
      ALPHABET,
      generateString,
      isSpecCompliantForm,
      toJSONObject,
      isAsyncFn,
      isThenable
    };
  }, { "./helpers/bind.js": 541 }], 551: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _utils = require('../utils.js');

    var _utils2 = _interopRequireDefault(_utils);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    /**
     * Create an Error with the specified message, config, error code, request and response.
     *
     * @param {string} message The error message.
     * @param {string} [code] The error code (for example, 'ECONNABORTED').
     * @param {Object} [config] The config.
     * @param {Object} [request] The request.
     * @param {Object} [response] The response.
     *
     * @returns {Error} The created error.
     */
    function AxiosError(message, code, config, request, response) {
      Error.call(this);

      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      } else {
        this.stack = new Error().stack;
      }

      this.message = message;
      this.name = 'AxiosError';
      code && (this.code = code);
      config && (this.config = config);
      request && (this.request = request);
      response && (this.response = response);
    }

    _utils2.default.inherits(AxiosError, Error, {
      toJSON: function toJSON() {
        return {
          // Standard
          message: this.message,
          name: this.name,
          // Microsoft
          description: this.description,
          number: this.number,
          // Mozilla
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          // Axios
          config: _utils2.default.toJSONObject(this.config),
          code: this.code,
          status: this.response && this.response.status ? this.response.status : null
        };
      }
    });

    const prototype = AxiosError.prototype;
    const descriptors = {};

    ['ERR_BAD_OPTION_VALUE', 'ERR_BAD_OPTION', 'ECONNABORTED', 'ETIMEDOUT', 'ERR_NETWORK', 'ERR_FR_TOO_MANY_REDIRECTS', 'ERR_DEPRECATED', 'ERR_BAD_RESPONSE', 'ERR_BAD_REQUEST', 'ERR_CANCELED', 'ERR_NOT_SUPPORT', 'ERR_INVALID_URL'
      // eslint-disable-next-line func-names
    ].forEach(code => {
      descriptors[code] = { value: code };
    });

    Object.defineProperties(AxiosError, descriptors);
    Object.defineProperty(prototype, 'isAxiosError', { value: true });

    // eslint-disable-next-line func-names
    AxiosError.from = (error, code, config, request, response, customProps) => {
      const axiosError = Object.create(prototype);

      _utils2.default.toFlatObject(error, axiosError, function filter(obj) {
        return obj !== Error.prototype;
      }, prop => {
        return prop !== 'isAxiosError';
      });

      AxiosError.call(axiosError, error.message, code, config, request, response);

      axiosError.cause = error;

      axiosError.name = error.name;

      customProps && Object.assign(axiosError, customProps);

      return axiosError;
    };

    exports.default = AxiosError;
  }, { "../utils.js": 540 }], 763: [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    // eslint-disable-next-line strict
    exports.default = null;
  }, {}], 836: [function (require, module, exports) {
    'use strict'

    exports.byteLength = byteLength
    exports.toByteArray = toByteArray
    exports.fromByteArray = fromByteArray

    var lookup = []
    var revLookup = []
    var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

    var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
    for (var i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i]
      revLookup[code.charCodeAt(i)] = i
    }

    // Support decoding URL-safe base64 strings, as Node.js does.
    // See: https://en.wikipedia.org/wiki/Base64#URL_applications
    revLookup['-'.charCodeAt(0)] = 62
    revLookup['_'.charCodeAt(0)] = 63

    function getLens(b64) {
      var len = b64.length

      if (len % 4 > 0) {
        throw new Error('Invalid string. Length must be a multiple of 4')
      }

      // Trim off extra bytes after placeholder bytes are found
      // See: https://github.com/beatgammit/base64-js/issues/42
      var validLen = b64.indexOf('=')
      if (validLen === -1) validLen = len

      var placeHoldersLen = validLen === len
        ? 0
        : 4 - (validLen % 4)

      return [validLen, placeHoldersLen]
    }

    // base64 is 4/3 + up to two characters of the original data
    function byteLength(b64) {
      var lens = getLens(b64)
      var validLen = lens[0]
      var placeHoldersLen = lens[1]
      return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
    }

    function _byteLength(b64, validLen, placeHoldersLen) {
      return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
    }

    function toByteArray(b64) {
      var tmp
      var lens = getLens(b64)
      var validLen = lens[0]
      var placeHoldersLen = lens[1]

      var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

      var curByte = 0

      // if there are placeholders, only get up to the last complete 4 chars
      var len = placeHoldersLen > 0
        ? validLen - 4
        : validLen

      for (var i = 0; i < len; i += 4) {
        tmp =
          (revLookup[b64.charCodeAt(i)] << 18) |
          (revLookup[b64.charCodeAt(i + 1)] << 12) |
          (revLookup[b64.charCodeAt(i + 2)] << 6) |
          revLookup[b64.charCodeAt(i + 3)]
        arr[curByte++] = (tmp >> 16) & 0xFF
        arr[curByte++] = (tmp >> 8) & 0xFF
        arr[curByte++] = tmp & 0xFF
      }

      if (placeHoldersLen === 2) {
        tmp =
          (revLookup[b64.charCodeAt(i)] << 2) |
          (revLookup[b64.charCodeAt(i + 1)] >> 4)
        arr[curByte++] = tmp & 0xFF
      }

      if (placeHoldersLen === 1) {
        tmp =
          (revLookup[b64.charCodeAt(i)] << 10) |
          (revLookup[b64.charCodeAt(i + 1)] << 4) |
          (revLookup[b64.charCodeAt(i + 2)] >> 2)
        arr[curByte++] = (tmp >> 8) & 0xFF
        arr[curByte++] = tmp & 0xFF
      }

      return arr
    }

    function tripletToBase64(num) {
      return lookup[num >> 18 & 0x3F] +
        lookup[num >> 12 & 0x3F] +
        lookup[num >> 6 & 0x3F] +
        lookup[num & 0x3F]
    }

    function encodeChunk(uint8, start, end) {
      var tmp
      var output = []
      for (var i = start; i < end; i += 3) {
        tmp =
          ((uint8[i] << 16) & 0xFF0000) +
          ((uint8[i + 1] << 8) & 0xFF00) +
          (uint8[i + 2] & 0xFF)
        output.push(tripletToBase64(tmp))
      }
      return output.join('')
    }

    function fromByteArray(uint8) {
      var tmp
      var len = uint8.length
      var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
      var parts = []
      var maxChunkLength = 16383 // must be multiple of 3

      // go through the array every three bytes, we'll deal with trailing stuff later
      for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
        parts.push(encodeChunk(
          uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
        ))
      }

      // pad the end with zeros, but make sure to not forget the extra bytes
      if (extraBytes === 1) {
        tmp = uint8[len - 1]
        parts.push(
          lookup[tmp >> 2] +
          lookup[(tmp << 4) & 0x3F] +
          '=='
        )
      } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1]
        parts.push(
          lookup[tmp >> 10] +
          lookup[(tmp >> 4) & 0x3F] +
          lookup[(tmp << 2) & 0x3F] +
          '='
        )
      }

      return parts.join('')
    }

  }, {}], 837: [function (require, module, exports) {
    exports.read = function (buffer, offset, isLE, mLen, nBytes) {
      var e, m
      var eLen = (nBytes * 8) - mLen - 1
      var eMax = (1 << eLen) - 1
      var eBias = eMax >> 1
      var nBits = -7
      var i = isLE ? (nBytes - 1) : 0
      var d = isLE ? -1 : 1
      var s = buffer[offset + i]

      i += d

      e = s & ((1 << (-nBits)) - 1)
      s >>= (-nBits)
      nBits += eLen
      for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) { }

      m = e & ((1 << (-nBits)) - 1)
      e >>= (-nBits)
      nBits += mLen
      for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) { }

      if (e === 0) {
        e = 1 - eBias
      } else if (e === eMax) {
        return m ? NaN : ((s ? -1 : 1) * Infinity)
      } else {
        m = m + Math.pow(2, mLen)
        e = e - eBias
      }
      return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
    }

    exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
      var e, m, c
      var eLen = (nBytes * 8) - mLen - 1
      var eMax = (1 << eLen) - 1
      var eBias = eMax >> 1
      var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
      var i = isLE ? 0 : (nBytes - 1)
      var d = isLE ? 1 : -1
      var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

      value = Math.abs(value)

      if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0
        e = eMax
      } else {
        e = Math.floor(Math.log(value) / Math.LN2)
        if (value * (c = Math.pow(2, -e)) < 1) {
          e--
          c *= 2
        }
        if (e + eBias >= 1) {
          value += rt / c
        } else {
          value += rt * Math.pow(2, 1 - eBias)
        }
        if (value * c >= 2) {
          e++
          c /= 2
        }

        if (e + eBias >= eMax) {
          m = 0
          e = eMax
        } else if (e + eBias >= 1) {
          m = ((value * c) - 1) * Math.pow(2, mLen)
          e = e + eBias
        } else {
          m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
          e = 0
        }
      }

      for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) { }

      e = (e << mLen) | m
      eLen += mLen
      for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) { }

      buffer[offset + i - d] |= s * 128
    }

  }, {}], 835: [function (require, module, exports) {
    var toString = {}.toString;

    module.exports = Array.isArray || function (arr) {
      return toString.call(arr) == '[object Array]';
    };

  }, {}], 764: [function (require, module, exports) {

    var global = arguments[3];
    /*!
     * The buffer module from node.js, for the browser.
     *
     * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
     * @license  MIT
     */
    /* eslint-disable no-proto */

    'use strict'

    var base64 = require('base64-js')
    var ieee754 = require('ieee754')
    var isArray = require('isarray')

    exports.Buffer = Buffer
    exports.SlowBuffer = SlowBuffer
    exports.INSPECT_MAX_BYTES = 50

    /**
     * If `Buffer.TYPED_ARRAY_SUPPORT`:
     *   === true    Use Uint8Array implementation (fastest)
     *   === false   Use Object implementation (most compatible, even IE6)
     *
     * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
     * Opera 11.6+, iOS 4.2+.
     *
     * Due to various browser bugs, sometimes the Object implementation will be used even
     * when the browser supports typed arrays.
     *
     * Note:
     *
     *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
     *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
     *
     *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
     *
     *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
     *     incorrect length in some situations.
    
     * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
     * get the Object implementation, which is slower but behaves correctly.
     */
    Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
      ? global.TYPED_ARRAY_SUPPORT
      : typedArraySupport()

    /*
     * Export kMaxLength after typed array support is determined.
     */
    exports.kMaxLength = kMaxLength()

    function typedArraySupport() {
      try {
        var arr = new Uint8Array(1)
        arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function () { return 42 } }
        return arr.foo() === 42 && // typed array instances can be augmented
          typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
          arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
      } catch (e) {
        return false
      }
    }

    function kMaxLength() {
      return Buffer.TYPED_ARRAY_SUPPORT
        ? 0x7fffffff
        : 0x3fffffff
    }

    function createBuffer(that, length) {
      if (kMaxLength() < length) {
        throw new RangeError('Invalid typed array length')
      }
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        // Return an augmented `Uint8Array` instance, for best performance
        that = new Uint8Array(length)
        that.__proto__ = Buffer.prototype
      } else {
        // Fallback: Return an object instance of the Buffer class
        if (that === null) {
          that = new Buffer(length)
        }
        that.length = length
      }

      return that
    }

    /**
     * The Buffer constructor returns instances of `Uint8Array` that have their
     * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
     * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
     * and the `Uint8Array` methods. Square bracket notation works as expected -- it
     * returns a single octet.
     *
     * The `Uint8Array` prototype remains unmodified.
     */

    function Buffer(arg, encodingOrOffset, length) {
      if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
        return new Buffer(arg, encodingOrOffset, length)
      }

      // Common case.
      if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') {
          throw new Error(
            'If encoding is specified then the first argument must be a string'
          )
        }
        return allocUnsafe(this, arg)
      }
      return from(this, arg, encodingOrOffset, length)
    }

    Buffer.poolSize = 8192 // not used by this implementation

    // TODO: Legacy, not needed anymore. Remove in next major version.
    Buffer._augment = function (arr) {
      arr.__proto__ = Buffer.prototype
      return arr
    }

    function from(that, value, encodingOrOffset, length) {
      if (typeof value === 'number') {
        throw new TypeError('"value" argument must not be a number')
      }

      if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
        return fromArrayBuffer(that, value, encodingOrOffset, length)
      }

      if (typeof value === 'string') {
        return fromString(that, value, encodingOrOffset)
      }

      return fromObject(that, value)
    }

    /**
     * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
     * if value is a number.
     * Buffer.from(str[, encoding])
     * Buffer.from(array)
     * Buffer.from(buffer)
     * Buffer.from(arrayBuffer[, byteOffset[, length]])
     **/
    Buffer.from = function (value, encodingOrOffset, length) {
      return from(null, value, encodingOrOffset, length)
    }

    if (Buffer.TYPED_ARRAY_SUPPORT) {
      Buffer.prototype.__proto__ = Uint8Array.prototype
      Buffer.__proto__ = Uint8Array
      if (typeof Symbol !== 'undefined' && Symbol.species &&
        Buffer[Symbol.species] === Buffer) {
        // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
        Object.defineProperty(Buffer, Symbol.species, {
          value: null,
          configurable: true
        })
      }
    }

    function assertSize(size) {
      if (typeof size !== 'number') {
        throw new TypeError('"size" argument must be a number')
      } else if (size < 0) {
        throw new RangeError('"size" argument must not be negative')
      }
    }

    function alloc(that, size, fill, encoding) {
      assertSize(size)
      if (size <= 0) {
        return createBuffer(that, size)
      }
      if (fill !== undefined) {
        // Only pay attention to encoding if it's a string. This
        // prevents accidentally sending in a number that would
        // be interpretted as a start offset.
        return typeof encoding === 'string'
          ? createBuffer(that, size).fill(fill, encoding)
          : createBuffer(that, size).fill(fill)
      }
      return createBuffer(that, size)
    }

    /**
     * Creates a new filled Buffer instance.
     * alloc(size[, fill[, encoding]])
     **/
    Buffer.alloc = function (size, fill, encoding) {
      return alloc(null, size, fill, encoding)
    }

    function allocUnsafe(that, size) {
      assertSize(size)
      that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
      if (!Buffer.TYPED_ARRAY_SUPPORT) {
        for (var i = 0; i < size; ++i) {
          that[i] = 0
        }
      }
      return that
    }

    /**
     * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
     * */
    Buffer.allocUnsafe = function (size) {
      return allocUnsafe(null, size)
    }
    /**
     * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
     */
    Buffer.allocUnsafeSlow = function (size) {
      return allocUnsafe(null, size)
    }

    function fromString(that, string, encoding) {
      if (typeof encoding !== 'string' || encoding === '') {
        encoding = 'utf8'
      }

      if (!Buffer.isEncoding(encoding)) {
        throw new TypeError('"encoding" must be a valid string encoding')
      }

      var length = byteLength(string, encoding) | 0
      that = createBuffer(that, length)

      var actual = that.write(string, encoding)

      if (actual !== length) {
        // Writing a hex string, for example, that contains invalid characters will
        // cause everything after the first invalid character to be ignored. (e.g.
        // 'abxxcd' will be treated as 'ab')
        that = that.slice(0, actual)
      }

      return that
    }

    function fromArrayLike(that, array) {
      var length = array.length < 0 ? 0 : checked(array.length) | 0
      that = createBuffer(that, length)
      for (var i = 0; i < length; i += 1) {
        that[i] = array[i] & 255
      }
      return that
    }

    function fromArrayBuffer(that, array, byteOffset, length) {
      array.byteLength // this throws if `array` is not a valid ArrayBuffer

      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('\'offset\' is out of bounds')
      }

      if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('\'length\' is out of bounds')
      }

      if (byteOffset === undefined && length === undefined) {
        array = new Uint8Array(array)
      } else if (length === undefined) {
        array = new Uint8Array(array, byteOffset)
      } else {
        array = new Uint8Array(array, byteOffset, length)
      }

      if (Buffer.TYPED_ARRAY_SUPPORT) {
        // Return an augmented `Uint8Array` instance, for best performance
        that = array
        that.__proto__ = Buffer.prototype
      } else {
        // Fallback: Return an object instance of the Buffer class
        that = fromArrayLike(that, array)
      }
      return that
    }

    function fromObject(that, obj) {
      if (Buffer.isBuffer(obj)) {
        var len = checked(obj.length) | 0
        that = createBuffer(that, len)

        if (that.length === 0) {
          return that
        }

        obj.copy(that, 0, 0, len)
        return that
      }

      if (obj) {
        if ((typeof ArrayBuffer !== 'undefined' &&
          obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
          if (typeof obj.length !== 'number' || isnan(obj.length)) {
            return createBuffer(that, 0)
          }
          return fromArrayLike(that, obj)
        }

        if (obj.type === 'Buffer' && isArray(obj.data)) {
          return fromArrayLike(that, obj.data)
        }
      }

      throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
    }

    function checked(length) {
      // Note: cannot use `length < kMaxLength()` here because that fails when
      // length is NaN (which is otherwise coerced to zero.)
      if (length >= kMaxLength()) {
        throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
          'size: 0x' + kMaxLength().toString(16) + ' bytes')
      }
      return length | 0
    }

    function SlowBuffer(length) {
      if (+length != length) { // eslint-disable-line eqeqeq
        length = 0
      }
      return Buffer.alloc(+length)
    }

    Buffer.isBuffer = function isBuffer(b) {
      return !!(b != null && b._isBuffer)
    }

    Buffer.compare = function compare(a, b) {
      if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
        throw new TypeError('Arguments must be Buffers')
      }

      if (a === b) return 0

      var x = a.length
      var y = b.length

      for (var i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
          x = a[i]
          y = b[i]
          break
        }
      }

      if (x < y) return -1
      if (y < x) return 1
      return 0
    }

    Buffer.isEncoding = function isEncoding(encoding) {
      switch (String(encoding).toLowerCase()) {
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return true
        default:
          return false
      }
    }

    Buffer.concat = function concat(list, length) {
      if (!isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers')
      }

      if (list.length === 0) {
        return Buffer.alloc(0)
      }

      var i
      if (length === undefined) {
        length = 0
        for (i = 0; i < list.length; ++i) {
          length += list[i].length
        }
      }

      var buffer = Buffer.allocUnsafe(length)
      var pos = 0
      for (i = 0; i < list.length; ++i) {
        var buf = list[i]
        if (!Buffer.isBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers')
        }
        buf.copy(buffer, pos)
        pos += buf.length
      }
      return buffer
    }

    function byteLength(string, encoding) {
      if (Buffer.isBuffer(string)) {
        return string.length
      }
      if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
        (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
        return string.byteLength
      }
      if (typeof string !== 'string') {
        string = '' + string
      }

      var len = string.length
      if (len === 0) return 0

      // Use a for loop to avoid recursion
      var loweredCase = false
      for (; ;) {
        switch (encoding) {
          case 'ascii':
          case 'latin1':
          case 'binary':
            return len
          case 'utf8':
          case 'utf-8':
          case undefined:
            return utf8ToBytes(string).length
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return len * 2
          case 'hex':
            return len >>> 1
          case 'base64':
            return base64ToBytes(string).length
          default:
            if (loweredCase) return utf8ToBytes(string).length // assume utf8
            encoding = ('' + encoding).toLowerCase()
            loweredCase = true
        }
      }
    }
    Buffer.byteLength = byteLength

    function slowToString(encoding, start, end) {
      var loweredCase = false

      // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
      // property of a typed array.

      // This behaves neither like String nor Uint8Array in that we set start/end
      // to their upper/lower bounds if the value passed is out of range.
      // undefined is handled specially as per ECMA-262 6th Edition,
      // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
      if (start === undefined || start < 0) {
        start = 0
      }
      // Return early if start > this.length. Done here to prevent potential uint32
      // coercion fail below.
      if (start > this.length) {
        return ''
      }

      if (end === undefined || end > this.length) {
        end = this.length
      }

      if (end <= 0) {
        return ''
      }

      // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
      end >>>= 0
      start >>>= 0

      if (end <= start) {
        return ''
      }

      if (!encoding) encoding = 'utf8'

      while (true) {
        switch (encoding) {
          case 'hex':
            return hexSlice(this, start, end)

          case 'utf8':
          case 'utf-8':
            return utf8Slice(this, start, end)

          case 'ascii':
            return asciiSlice(this, start, end)

          case 'latin1':
          case 'binary':
            return latin1Slice(this, start, end)

          case 'base64':
            return base64Slice(this, start, end)

          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return utf16leSlice(this, start, end)

          default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
            encoding = (encoding + '').toLowerCase()
            loweredCase = true
        }
      }
    }

    // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
    // Buffer instances.
    Buffer.prototype._isBuffer = true

    function swap(b, n, m) {
      var i = b[n]
      b[n] = b[m]
      b[m] = i
    }

    Buffer.prototype.swap16 = function swap16() {
      var len = this.length
      if (len % 2 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 16-bits')
      }
      for (var i = 0; i < len; i += 2) {
        swap(this, i, i + 1)
      }
      return this
    }

    Buffer.prototype.swap32 = function swap32() {
      var len = this.length
      if (len % 4 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 32-bits')
      }
      for (var i = 0; i < len; i += 4) {
        swap(this, i, i + 3)
        swap(this, i + 1, i + 2)
      }
      return this
    }

    Buffer.prototype.swap64 = function swap64() {
      var len = this.length
      if (len % 8 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 64-bits')
      }
      for (var i = 0; i < len; i += 8) {
        swap(this, i, i + 7)
        swap(this, i + 1, i + 6)
        swap(this, i + 2, i + 5)
        swap(this, i + 3, i + 4)
      }
      return this
    }

    Buffer.prototype.toString = function toString() {
      var length = this.length | 0
      if (length === 0) return ''
      if (arguments.length === 0) return utf8Slice(this, 0, length)
      return slowToString.apply(this, arguments)
    }

    Buffer.prototype.equals = function equals(b) {
      if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
      if (this === b) return true
      return Buffer.compare(this, b) === 0
    }

    Buffer.prototype.inspect = function inspect() {
      var str = ''
      var max = exports.INSPECT_MAX_BYTES
      if (this.length > 0) {
        str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
        if (this.length > max) str += ' ... '
      }
      return '<Buffer ' + str + '>'
    }

    Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
      if (!Buffer.isBuffer(target)) {
        throw new TypeError('Argument must be a Buffer')
      }

      if (start === undefined) {
        start = 0
      }
      if (end === undefined) {
        end = target ? target.length : 0
      }
      if (thisStart === undefined) {
        thisStart = 0
      }
      if (thisEnd === undefined) {
        thisEnd = this.length
      }

      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError('out of range index')
      }

      if (thisStart >= thisEnd && start >= end) {
        return 0
      }
      if (thisStart >= thisEnd) {
        return -1
      }
      if (start >= end) {
        return 1
      }

      start >>>= 0
      end >>>= 0
      thisStart >>>= 0
      thisEnd >>>= 0

      if (this === target) return 0

      var x = thisEnd - thisStart
      var y = end - start
      var len = Math.min(x, y)

      var thisCopy = this.slice(thisStart, thisEnd)
      var targetCopy = target.slice(start, end)

      for (var i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i]
          y = targetCopy[i]
          break
        }
      }

      if (x < y) return -1
      if (y < x) return 1
      return 0
    }

    // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
    // OR the last index of `val` in `buffer` at offset <= `byteOffset`.
    //
    // Arguments:
    // - buffer - a Buffer to search
    // - val - a string, Buffer, or number
    // - byteOffset - an index into `buffer`; will be clamped to an int32
    // - encoding - an optional encoding, relevant is val is a string
    // - dir - true for indexOf, false for lastIndexOf
    function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
      // Empty buffer means no match
      if (buffer.length === 0) return -1

      // Normalize byteOffset
      if (typeof byteOffset === 'string') {
        encoding = byteOffset
        byteOffset = 0
      } else if (byteOffset > 0x7fffffff) {
        byteOffset = 0x7fffffff
      } else if (byteOffset < -0x80000000) {
        byteOffset = -0x80000000
      }
      byteOffset = +byteOffset  // Coerce to Number.
      if (isNaN(byteOffset)) {
        // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
        byteOffset = dir ? 0 : (buffer.length - 1)
      }

      // Normalize byteOffset: negative offsets start from the end of the buffer
      if (byteOffset < 0) byteOffset = buffer.length + byteOffset
      if (byteOffset >= buffer.length) {
        if (dir) return -1
        else byteOffset = buffer.length - 1
      } else if (byteOffset < 0) {
        if (dir) byteOffset = 0
        else return -1
      }

      // Normalize val
      if (typeof val === 'string') {
        val = Buffer.from(val, encoding)
      }

      // Finally, search either indexOf (if dir is true) or lastIndexOf
      if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) {
          return -1
        }
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
      } else if (typeof val === 'number') {
        val = val & 0xFF // Search for a byte value [0-255]
        if (Buffer.TYPED_ARRAY_SUPPORT &&
          typeof Uint8Array.prototype.indexOf === 'function') {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
          }
        }
        return arrayIndexOf(buffer, [val], byteOffset, encoding, dir)
      }

      throw new TypeError('val must be string, number or Buffer')
    }

    function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
      var indexSize = 1
      var arrLength = arr.length
      var valLength = val.length

      if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase()
        if (encoding === 'ucs2' || encoding === 'ucs-2' ||
          encoding === 'utf16le' || encoding === 'utf-16le') {
          if (arr.length < 2 || val.length < 2) {
            return -1
          }
          indexSize = 2
          arrLength /= 2
          valLength /= 2
          byteOffset /= 2
        }
      }

      function read(buf, i) {
        if (indexSize === 1) {
          return buf[i]
        } else {
          return buf.readUInt16BE(i * indexSize)
        }
      }

      var i
      if (dir) {
        var foundIndex = -1
        for (i = byteOffset; i < arrLength; i++) {
          if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
          } else {
            if (foundIndex !== -1) i -= i - foundIndex
            foundIndex = -1
          }
        }
      } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
        for (i = byteOffset; i >= 0; i--) {
          var found = true
          for (var j = 0; j < valLength; j++) {
            if (read(arr, i + j) !== read(val, j)) {
              found = false
              break
            }
          }
          if (found) return i
        }
      }

      return -1
    }

    Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1
    }

    Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
    }

    Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
    }

    function hexWrite(buf, string, offset, length) {
      offset = Number(offset) || 0
      var remaining = buf.length - offset
      if (!length) {
        length = remaining
      } else {
        length = Number(length)
        if (length > remaining) {
          length = remaining
        }
      }

      // must be an even number of digits
      var strLen = string.length
      if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

      if (length > strLen / 2) {
        length = strLen / 2
      }
      for (var i = 0; i < length; ++i) {
        var parsed = parseInt(string.substr(i * 2, 2), 16)
        if (isNaN(parsed)) return i
        buf[offset + i] = parsed
      }
      return i
    }

    function utf8Write(buf, string, offset, length) {
      return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
    }

    function asciiWrite(buf, string, offset, length) {
      return blitBuffer(asciiToBytes(string), buf, offset, length)
    }

    function latin1Write(buf, string, offset, length) {
      return asciiWrite(buf, string, offset, length)
    }

    function base64Write(buf, string, offset, length) {
      return blitBuffer(base64ToBytes(string), buf, offset, length)
    }

    function ucs2Write(buf, string, offset, length) {
      return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
    }

    Buffer.prototype.write = function write(string, offset, length, encoding) {
      // Buffer#write(string)
      if (offset === undefined) {
        encoding = 'utf8'
        length = this.length
        offset = 0
        // Buffer#write(string, encoding)
      } else if (length === undefined && typeof offset === 'string') {
        encoding = offset
        length = this.length
        offset = 0
        // Buffer#write(string, offset[, length][, encoding])
      } else if (isFinite(offset)) {
        offset = offset | 0
        if (isFinite(length)) {
          length = length | 0
          if (encoding === undefined) encoding = 'utf8'
        } else {
          encoding = length
          length = undefined
        }
        // legacy write(string, encoding, offset, length) - remove in v0.13
      } else {
        throw new Error(
          'Buffer.write(string, encoding, offset[, length]) is no longer supported'
        )
      }

      var remaining = this.length - offset
      if (length === undefined || length > remaining) length = remaining

      if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
        throw new RangeError('Attempt to write outside buffer bounds')
      }

      if (!encoding) encoding = 'utf8'

      var loweredCase = false
      for (; ;) {
        switch (encoding) {
          case 'hex':
            return hexWrite(this, string, offset, length)

          case 'utf8':
          case 'utf-8':
            return utf8Write(this, string, offset, length)

          case 'ascii':
            return asciiWrite(this, string, offset, length)

          case 'latin1':
          case 'binary':
            return latin1Write(this, string, offset, length)

          case 'base64':
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length)

          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return ucs2Write(this, string, offset, length)

          default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
            encoding = ('' + encoding).toLowerCase()
            loweredCase = true
        }
      }
    }

    Buffer.prototype.toJSON = function toJSON() {
      return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
      }
    }

    function base64Slice(buf, start, end) {
      if (start === 0 && end === buf.length) {
        return base64.fromByteArray(buf)
      } else {
        return base64.fromByteArray(buf.slice(start, end))
      }
    }

    function utf8Slice(buf, start, end) {
      end = Math.min(buf.length, end)
      var res = []

      var i = start
      while (i < end) {
        var firstByte = buf[i]
        var codePoint = null
        var bytesPerSequence = (firstByte > 0xEF) ? 4
          : (firstByte > 0xDF) ? 3
            : (firstByte > 0xBF) ? 2
              : 1

        if (i + bytesPerSequence <= end) {
          var secondByte, thirdByte, fourthByte, tempCodePoint

          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 0x80) {
                codePoint = firstByte
              }
              break
            case 2:
              secondByte = buf[i + 1]
              if ((secondByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
                if (tempCodePoint > 0x7F) {
                  codePoint = tempCodePoint
                }
              }
              break
            case 3:
              secondByte = buf[i + 1]
              thirdByte = buf[i + 2]
              if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
                if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                  codePoint = tempCodePoint
                }
              }
              break
            case 4:
              secondByte = buf[i + 1]
              thirdByte = buf[i + 2]
              fourthByte = buf[i + 3]
              if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
                if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                  codePoint = tempCodePoint
                }
              }
          }
        }

        if (codePoint === null) {
          // we did not generate a valid codePoint so insert a
          // replacement char (U+FFFD) and advance only 1 byte
          codePoint = 0xFFFD
          bytesPerSequence = 1
        } else if (codePoint > 0xFFFF) {
          // encode to utf16 (surrogate pair dance)
          codePoint -= 0x10000
          res.push(codePoint >>> 10 & 0x3FF | 0xD800)
          codePoint = 0xDC00 | codePoint & 0x3FF
        }

        res.push(codePoint)
        i += bytesPerSequence
      }

      return decodeCodePointsArray(res)
    }

    // Based on http://stackoverflow.com/a/22747272/680742, the browser with
    // the lowest limit is Chrome, with 0x10000 args.
    // We go 1 magnitude less, for safety
    var MAX_ARGUMENTS_LENGTH = 0x1000

    function decodeCodePointsArray(codePoints) {
      var len = codePoints.length
      if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
      }

      // Decode in chunks to avoid "call stack size exceeded".
      var res = ''
      var i = 0
      while (i < len) {
        res += String.fromCharCode.apply(
          String,
          codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
        )
      }
      return res
    }

    function asciiSlice(buf, start, end) {
      var ret = ''
      end = Math.min(buf.length, end)

      for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i] & 0x7F)
      }
      return ret
    }

    function latin1Slice(buf, start, end) {
      var ret = ''
      end = Math.min(buf.length, end)

      for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i])
      }
      return ret
    }

    function hexSlice(buf, start, end) {
      var len = buf.length

      if (!start || start < 0) start = 0
      if (!end || end < 0 || end > len) end = len

      var out = ''
      for (var i = start; i < end; ++i) {
        out += toHex(buf[i])
      }
      return out
    }

    function utf16leSlice(buf, start, end) {
      var bytes = buf.slice(start, end)
      var res = ''
      for (var i = 0; i < bytes.length; i += 2) {
        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
      }
      return res
    }

    Buffer.prototype.slice = function slice(start, end) {
      var len = this.length
      start = ~~start
      end = end === undefined ? len : ~~end

      if (start < 0) {
        start += len
        if (start < 0) start = 0
      } else if (start > len) {
        start = len
      }

      if (end < 0) {
        end += len
        if (end < 0) end = 0
      } else if (end > len) {
        end = len
      }

      if (end < start) end = start

      var newBuf
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        newBuf = this.subarray(start, end)
        newBuf.__proto__ = Buffer.prototype
      } else {
        var sliceLen = end - start
        newBuf = new Buffer(sliceLen, undefined)
        for (var i = 0; i < sliceLen; ++i) {
          newBuf[i] = this[i + start]
        }
      }

      return newBuf
    }

    /*
     * Need to make sure that buffer isn't trying to write out of bounds.
     */
    function checkOffset(offset, ext, length) {
      if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
      if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
    }

    Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
      offset = offset | 0
      byteLength = byteLength | 0
      if (!noAssert) checkOffset(offset, byteLength, this.length)

      var val = this[offset]
      var mul = 1
      var i = 0
      while (++i < byteLength && (mul *= 0x100)) {
        val += this[offset + i] * mul
      }

      return val
    }

    Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
      offset = offset | 0
      byteLength = byteLength | 0
      if (!noAssert) {
        checkOffset(offset, byteLength, this.length)
      }

      var val = this[offset + --byteLength]
      var mul = 1
      while (byteLength > 0 && (mul *= 0x100)) {
        val += this[offset + --byteLength] * mul
      }

      return val
    }

    Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 1, this.length)
      return this[offset]
    }

    Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 2, this.length)
      return this[offset] | (this[offset + 1] << 8)
    }

    Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 2, this.length)
      return (this[offset] << 8) | this[offset + 1]
    }

    Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length)

      return ((this[offset]) |
        (this[offset + 1] << 8) |
        (this[offset + 2] << 16)) +
        (this[offset + 3] * 0x1000000)
    }

    Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length)

      return (this[offset] * 0x1000000) +
        ((this[offset + 1] << 16) |
          (this[offset + 2] << 8) |
          this[offset + 3])
    }

    Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
      offset = offset | 0
      byteLength = byteLength | 0
      if (!noAssert) checkOffset(offset, byteLength, this.length)

      var val = this[offset]
      var mul = 1
      var i = 0
      while (++i < byteLength && (mul *= 0x100)) {
        val += this[offset + i] * mul
      }
      mul *= 0x80

      if (val >= mul) val -= Math.pow(2, 8 * byteLength)

      return val
    }

    Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
      offset = offset | 0
      byteLength = byteLength | 0
      if (!noAssert) checkOffset(offset, byteLength, this.length)

      var i = byteLength
      var mul = 1
      var val = this[offset + --i]
      while (i > 0 && (mul *= 0x100)) {
        val += this[offset + --i] * mul
      }
      mul *= 0x80

      if (val >= mul) val -= Math.pow(2, 8 * byteLength)

      return val
    }

    Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 1, this.length)
      if (!(this[offset] & 0x80)) return (this[offset])
      return ((0xff - this[offset] + 1) * -1)
    }

    Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 2, this.length)
      var val = this[offset] | (this[offset + 1] << 8)
      return (val & 0x8000) ? val | 0xFFFF0000 : val
    }

    Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 2, this.length)
      var val = this[offset + 1] | (this[offset] << 8)
      return (val & 0x8000) ? val | 0xFFFF0000 : val
    }

    Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length)

      return (this[offset]) |
        (this[offset + 1] << 8) |
        (this[offset + 2] << 16) |
        (this[offset + 3] << 24)
    }

    Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length)

      return (this[offset] << 24) |
        (this[offset + 1] << 16) |
        (this[offset + 2] << 8) |
        (this[offset + 3])
    }

    Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length)
      return ieee754.read(this, offset, true, 23, 4)
    }

    Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length)
      return ieee754.read(this, offset, false, 23, 4)
    }

    Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 8, this.length)
      return ieee754.read(this, offset, true, 52, 8)
    }

    Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 8, this.length)
      return ieee754.read(this, offset, false, 52, 8)
    }

    function checkInt(buf, value, offset, ext, max, min) {
      if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
      if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
      if (offset + ext > buf.length) throw new RangeError('Index out of range')
    }

    Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
      value = +value
      offset = offset | 0
      byteLength = byteLength | 0
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1
        checkInt(this, value, offset, byteLength, maxBytes, 0)
      }

      var mul = 1
      var i = 0
      this[offset] = value & 0xFF
      while (++i < byteLength && (mul *= 0x100)) {
        this[offset + i] = (value / mul) & 0xFF
      }

      return offset + byteLength
    }

    Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
      value = +value
      offset = offset | 0
      byteLength = byteLength | 0
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1
        checkInt(this, value, offset, byteLength, maxBytes, 0)
      }

      var i = byteLength - 1
      var mul = 1
      this[offset + i] = value & 0xFF
      while (--i >= 0 && (mul *= 0x100)) {
        this[offset + i] = (value / mul) & 0xFF
      }

      return offset + byteLength
    }

    Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
      value = +value
      offset = offset | 0
      if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
      if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
      this[offset] = (value & 0xff)
      return offset + 1
    }

    function objectWriteUInt16(buf, value, offset, littleEndian) {
      if (value < 0) value = 0xffff + value + 1
      for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
        buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
          (littleEndian ? i : 1 - i) * 8
      }
    }

    Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
      value = +value
      offset = offset | 0
      if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value & 0xff)
        this[offset + 1] = (value >>> 8)
      } else {
        objectWriteUInt16(this, value, offset, true)
      }
      return offset + 2
    }

    Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
      value = +value
      offset = offset | 0
      if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value >>> 8)
        this[offset + 1] = (value & 0xff)
      } else {
        objectWriteUInt16(this, value, offset, false)
      }
      return offset + 2
    }

    function objectWriteUInt32(buf, value, offset, littleEndian) {
      if (value < 0) value = 0xffffffff + value + 1
      for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
        buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
      }
    }

    Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
      value = +value
      offset = offset | 0
      if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset + 3] = (value >>> 24)
        this[offset + 2] = (value >>> 16)
        this[offset + 1] = (value >>> 8)
        this[offset] = (value & 0xff)
      } else {
        objectWriteUInt32(this, value, offset, true)
      }
      return offset + 4
    }

    Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
      value = +value
      offset = offset | 0
      if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value >>> 24)
        this[offset + 1] = (value >>> 16)
        this[offset + 2] = (value >>> 8)
        this[offset + 3] = (value & 0xff)
      } else {
        objectWriteUInt32(this, value, offset, false)
      }
      return offset + 4
    }

    Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
      value = +value
      offset = offset | 0
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1)

        checkInt(this, value, offset, byteLength, limit - 1, -limit)
      }

      var i = 0
      var mul = 1
      var sub = 0
      this[offset] = value & 0xFF
      while (++i < byteLength && (mul *= 0x100)) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
          sub = 1
        }
        this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
      }

      return offset + byteLength
    }

    Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
      value = +value
      offset = offset | 0
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1)

        checkInt(this, value, offset, byteLength, limit - 1, -limit)
      }

      var i = byteLength - 1
      var mul = 1
      var sub = 0
      this[offset + i] = value & 0xFF
      while (--i >= 0 && (mul *= 0x100)) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
          sub = 1
        }
        this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
      }

      return offset + byteLength
    }

    Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
      value = +value
      offset = offset | 0
      if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
      if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
      if (value < 0) value = 0xff + value + 1
      this[offset] = (value & 0xff)
      return offset + 1
    }

    Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
      value = +value
      offset = offset | 0
      if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value & 0xff)
        this[offset + 1] = (value >>> 8)
      } else {
        objectWriteUInt16(this, value, offset, true)
      }
      return offset + 2
    }

    Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
      value = +value
      offset = offset | 0
      if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value >>> 8)
        this[offset + 1] = (value & 0xff)
      } else {
        objectWriteUInt16(this, value, offset, false)
      }
      return offset + 2
    }

    Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
      value = +value
      offset = offset | 0
      if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value & 0xff)
        this[offset + 1] = (value >>> 8)
        this[offset + 2] = (value >>> 16)
        this[offset + 3] = (value >>> 24)
      } else {
        objectWriteUInt32(this, value, offset, true)
      }
      return offset + 4
    }

    Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
      value = +value
      offset = offset | 0
      if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
      if (value < 0) value = 0xffffffff + value + 1
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value >>> 24)
        this[offset + 1] = (value >>> 16)
        this[offset + 2] = (value >>> 8)
        this[offset + 3] = (value & 0xff)
      } else {
        objectWriteUInt32(this, value, offset, false)
      }
      return offset + 4
    }

    function checkIEEE754(buf, value, offset, ext, max, min) {
      if (offset + ext > buf.length) throw new RangeError('Index out of range')
      if (offset < 0) throw new RangeError('Index out of range')
    }

    function writeFloat(buf, value, offset, littleEndian, noAssert) {
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
      }
      ieee754.write(buf, value, offset, littleEndian, 23, 4)
      return offset + 4
    }

    Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert)
    }

    Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert)
    }

    function writeDouble(buf, value, offset, littleEndian, noAssert) {
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
      }
      ieee754.write(buf, value, offset, littleEndian, 52, 8)
      return offset + 8
    }

    Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert)
    }

    Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert)
    }

    // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
    Buffer.prototype.copy = function copy(target, targetStart, start, end) {
      if (!start) start = 0
      if (!end && end !== 0) end = this.length
      if (targetStart >= target.length) targetStart = target.length
      if (!targetStart) targetStart = 0
      if (end > 0 && end < start) end = start

      // Copy 0 bytes; we're done
      if (end === start) return 0
      if (target.length === 0 || this.length === 0) return 0

      // Fatal error conditions
      if (targetStart < 0) {
        throw new RangeError('targetStart out of bounds')
      }
      if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
      if (end < 0) throw new RangeError('sourceEnd out of bounds')

      // Are we oob?
      if (end > this.length) end = this.length
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start
      }

      var len = end - start
      var i

      if (this === target && start < targetStart && targetStart < end) {
        // descending copy from end
        for (i = len - 1; i >= 0; --i) {
          target[i + targetStart] = this[i + start]
        }
      } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
        // ascending copy from start
        for (i = 0; i < len; ++i) {
          target[i + targetStart] = this[i + start]
        }
      } else {
        Uint8Array.prototype.set.call(
          target,
          this.subarray(start, start + len),
          targetStart
        )
      }

      return len
    }

    // Usage:
    //    buffer.fill(number[, offset[, end]])
    //    buffer.fill(buffer[, offset[, end]])
    //    buffer.fill(string[, offset[, end]][, encoding])
    Buffer.prototype.fill = function fill(val, start, end, encoding) {
      // Handle string cases:
      if (typeof val === 'string') {
        if (typeof start === 'string') {
          encoding = start
          start = 0
          end = this.length
        } else if (typeof end === 'string') {
          encoding = end
          end = this.length
        }
        if (val.length === 1) {
          var code = val.charCodeAt(0)
          if (code < 256) {
            val = code
          }
        }
        if (encoding !== undefined && typeof encoding !== 'string') {
          throw new TypeError('encoding must be a string')
        }
        if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
          throw new TypeError('Unknown encoding: ' + encoding)
        }
      } else if (typeof val === 'number') {
        val = val & 255
      }

      // Invalid ranges are not set to a default, so can range check early.
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError('Out of range index')
      }

      if (end <= start) {
        return this
      }

      start = start >>> 0
      end = end === undefined ? this.length : end >>> 0

      if (!val) val = 0

      var i
      if (typeof val === 'number') {
        for (i = start; i < end; ++i) {
          this[i] = val
        }
      } else {
        var bytes = Buffer.isBuffer(val)
          ? val
          : utf8ToBytes(new Buffer(val, encoding).toString())
        var len = bytes.length
        for (i = 0; i < end - start; ++i) {
          this[i + start] = bytes[i % len]
        }
      }

      return this
    }

    // HELPER FUNCTIONS
    // ================

    var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

    function base64clean(str) {
      // Node strips out invalid characters like \n and \t from the string, base64-js does not
      str = stringtrim(str).replace(INVALID_BASE64_RE, '')
      // Node converts strings with length < 2 to ''
      if (str.length < 2) return ''
      // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
      while (str.length % 4 !== 0) {
        str = str + '='
      }
      return str
    }

    function stringtrim(str) {
      if (str.trim) return str.trim()
      return str.replace(/^\s+|\s+$/g, '')
    }

    function toHex(n) {
      if (n < 16) return '0' + n.toString(16)
      return n.toString(16)
    }

    function utf8ToBytes(string, units) {
      units = units || Infinity
      var codePoint
      var length = string.length
      var leadSurrogate = null
      var bytes = []

      for (var i = 0; i < length; ++i) {
        codePoint = string.charCodeAt(i)

        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
          // last char was a lead
          if (!leadSurrogate) {
            // no lead yet
            if (codePoint > 0xDBFF) {
              // unexpected trail
              if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
              continue
            } else if (i + 1 === length) {
              // unpaired lead
              if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
              continue
            }

            // valid lead
            leadSurrogate = codePoint

            continue
          }

          // 2 leads in a row
          if (codePoint < 0xDC00) {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
            leadSurrogate = codePoint
            continue
          }

          // valid surrogate pair
          codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
        } else if (leadSurrogate) {
          // valid bmp char, but last char was a lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        }

        leadSurrogate = null

        // encode utf8
        if (codePoint < 0x80) {
          if ((units -= 1) < 0) break
          bytes.push(codePoint)
        } else if (codePoint < 0x800) {
          if ((units -= 2) < 0) break
          bytes.push(
            codePoint >> 0x6 | 0xC0,
            codePoint & 0x3F | 0x80
          )
        } else if (codePoint < 0x10000) {
          if ((units -= 3) < 0) break
          bytes.push(
            codePoint >> 0xC | 0xE0,
            codePoint >> 0x6 & 0x3F | 0x80,
            codePoint & 0x3F | 0x80
          )
        } else if (codePoint < 0x110000) {
          if ((units -= 4) < 0) break
          bytes.push(
            codePoint >> 0x12 | 0xF0,
            codePoint >> 0xC & 0x3F | 0x80,
            codePoint >> 0x6 & 0x3F | 0x80,
            codePoint & 0x3F | 0x80
          )
        } else {
          throw new Error('Invalid code point')
        }
      }

      return bytes
    }

    function asciiToBytes(str) {
      var byteArray = []
      for (var i = 0; i < str.length; ++i) {
        // Node's code seems to be doing this and not & 0x7F..
        byteArray.push(str.charCodeAt(i) & 0xFF)
      }
      return byteArray
    }

    function utf16leToBytes(str, units) {
      var c, hi, lo
      var byteArray = []
      for (var i = 0; i < str.length; ++i) {
        if ((units -= 2) < 0) break

        c = str.charCodeAt(i)
        hi = c >> 8
        lo = c % 256
        byteArray.push(lo)
        byteArray.push(hi)
      }

      return byteArray
    }

    function base64ToBytes(str) {
      return base64.toByteArray(base64clean(str))
    }

    function blitBuffer(src, dst, offset, length) {
      for (var i = 0; i < length; ++i) {
        if ((i + offset >= dst.length) || (i >= src.length)) break
        dst[i + offset] = src[i]
      }
      return i
    }

    function isnan(val) {
      return val !== val // eslint-disable-line no-self-compare
    }

  }, { "base64-js": 836, "ieee754": 837, "isarray": 835, "buffer": 764 }], 550: [function (require, module, exports) {
    var Buffer = require("buffer").Buffer;
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _utils = require('../utils.js');

    var _utils2 = _interopRequireDefault(_utils);

    var _AxiosError = require('../core/AxiosError.js');

    var _AxiosError2 = _interopRequireDefault(_AxiosError);

    var _FormData = require('../platform/node/classes/FormData.js');

    var _FormData2 = _interopRequireDefault(_FormData);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    /**
     * Determines if the given thing is a array or js object.
     *
     * @param {string} thing - The object or array to be visited.
     *
     * @returns {boolean}
     */
    function isVisitable(thing) {
      return _utils2.default.isPlainObject(thing) || _utils2.default.isArray(thing);
    }

    /**
     * It removes the brackets from the end of a string
     *
     * @param {string} key - The key of the parameter.
     *
     * @returns {string} the key without the brackets.
     */

    // temporary hotfix to avoid circular references until AxiosURLSearchParams is refactored
    function removeBrackets(key) {
      return _utils2.default.endsWith(key, '[]') ? key.slice(0, -2) : key;
    }

    /**
     * It takes a path, a key, and a boolean, and returns a string
     *
     * @param {string} path - The path to the current key.
     * @param {string} key - The key of the current object being iterated over.
     * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
     *
     * @returns {string} The path to the current key.
     */
    function renderKey(path, key, dots) {
      if (!path) return key;
      return path.concat(key).map(function each(token, i) {
        // eslint-disable-next-line no-param-reassign
        token = removeBrackets(token);
        return !dots && i ? '[' + token + ']' : token;
      }).join(dots ? '.' : '');
    }

    /**
     * If the array is an array and none of its elements are visitable, then it's a flat array.
     *
     * @param {Array<any>} arr - The array to check
     *
     * @returns {boolean}
     */
    function isFlatArray(arr) {
      return _utils2.default.isArray(arr) && !arr.some(isVisitable);
    }

    const predicates = _utils2.default.toFlatObject(_utils2.default, {}, null, function filter(prop) {
      return (/^is[A-Z]/.test(prop)
      );
    });

    /**
     * Convert a data object to FormData
     *
     * @param {Object} obj
     * @param {?Object} [formData]
     * @param {?Object} [options]
     * @param {Function} [options.visitor]
     * @param {Boolean} [options.metaTokens = true]
     * @param {Boolean} [options.dots = false]
     * @param {?Boolean} [options.indexes = false]
     *
     * @returns {Object}
     **/

    /**
     * It converts an object into a FormData object
     *
     * @param {Object<any, any>} obj - The object to convert to form data.
     * @param {string} formData - The FormData object to append to.
     * @param {Object<string, any>} options
     *
     * @returns
     */
    function toFormData(obj, formData, options) {
      if (!_utils2.default.isObject(obj)) {
        throw new TypeError('target must be an object');
      }

      // eslint-disable-next-line no-param-reassign
      formData = formData || new (_FormData2.default || FormData)();

      // eslint-disable-next-line no-param-reassign
      options = _utils2.default.toFlatObject(options, {
        metaTokens: true,
        dots: false,
        indexes: false
      }, false, function defined(option, source) {
        // eslint-disable-next-line no-eq-null,eqeqeq
        return !_utils2.default.isUndefined(source[option]);
      });

      const metaTokens = options.metaTokens;
      // eslint-disable-next-line no-use-before-define
      const visitor = options.visitor || defaultVisitor;
      const dots = options.dots;
      const indexes = options.indexes;
      const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
      const useBlob = _Blob && _utils2.default.isSpecCompliantForm(formData);

      if (!_utils2.default.isFunction(visitor)) {
        throw new TypeError('visitor must be a function');
      }

      function convertValue(value) {
        if (value === null) return '';

        if (_utils2.default.isDate(value)) {
          return value.toISOString();
        }

        if (!useBlob && _utils2.default.isBlob(value)) {
          throw new _AxiosError2.default('Blob is not supported. Use a Buffer instead.');
        }

        if (_utils2.default.isArrayBuffer(value) || _utils2.default.isTypedArray(value)) {
          return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
        }

        return value;
      }

      /**
       * Default visitor.
       *
       * @param {*} value
       * @param {String|Number} key
       * @param {Array<String|Number>} path
       * @this {FormData}
       *
       * @returns {boolean} return true to visit the each prop of the value recursively
       */
      function defaultVisitor(value, key, path) {
        let arr = value;

        if (value && !path && typeof value === 'object') {
          if (_utils2.default.endsWith(key, '{}')) {
            // eslint-disable-next-line no-param-reassign
            key = metaTokens ? key : key.slice(0, -2);
            // eslint-disable-next-line no-param-reassign
            value = JSON.stringify(value);
          } else if (_utils2.default.isArray(value) && isFlatArray(value) || (_utils2.default.isFileList(value) || _utils2.default.endsWith(key, '[]')) && (arr = _utils2.default.toArray(value))) {
            // eslint-disable-next-line no-param-reassign
            key = removeBrackets(key);

            arr.forEach(function each(el, index) {
              !(_utils2.default.isUndefined(el) || el === null) && formData.append(
                // eslint-disable-next-line no-nested-ternary
                indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + '[]', convertValue(el));
            });
            return false;
          }
        }

        if (isVisitable(value)) {
          return true;
        }

        formData.append(renderKey(path, key, dots), convertValue(value));

        return false;
      }

      const stack = [];

      const exposedHelpers = Object.assign(predicates, {
        defaultVisitor,
        convertValue,
        isVisitable
      });

      function build(value, path) {
        if (_utils2.default.isUndefined(value)) return;

        if (stack.indexOf(value) !== -1) {
          throw Error('Circular reference detected in ' + path.join('.'));
        }

        stack.push(value);

        _utils2.default.forEach(value, function each(el, key) {
          const result = !(_utils2.default.isUndefined(el) || el === null) && visitor.call(formData, el, _utils2.default.isString(key) ? key.trim() : key, path, exposedHelpers);

          if (result === true) {
            build(el, path ? path.concat(key) : [key]);
          }
        });

        stack.pop();
      }

      if (!_utils2.default.isObject(obj)) {
        throw new TypeError('data must be an object');
      }

      build(obj);

      return formData;
    }

    exports.default = toFormData;
  }, { "../utils.js": 540, "../core/AxiosError.js": 551, "../platform/node/classes/FormData.js": 763, "buffer": 764 }], 830: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _toFormData = require('./toFormData.js');

    var _toFormData2 = _interopRequireDefault(_toFormData);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    /**
     * It encodes a string by replacing all characters that are not in the unreserved set with
     * their percent-encoded equivalents
     *
     * @param {string} str - The string to encode.
     *
     * @returns {string} The encoded string.
     */
    function encode(str) {
      const charMap = {
        '!': '%21',
        "'": '%27',
        '(': '%28',
        ')': '%29',
        '~': '%7E',
        '%20': '+',
        '%00': '\x00'
      };
      return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
        return charMap[match];
      });
    }

    /**
     * It takes a params object and converts it to a FormData object
     *
     * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
     * @param {Object<string, any>} options - The options object passed to the Axios constructor.
     *
     * @returns {void}
     */
    function AxiosURLSearchParams(params, options) {
      this._pairs = [];

      params && (0, _toFormData2.default)(params, this, options);
    }

    const prototype = AxiosURLSearchParams.prototype;

    prototype.append = function append(name, value) {
      this._pairs.push([name, value]);
    };

    prototype.toString = function toString(encoder) {
      const _encode = encoder ? function (value) {
        return encoder.call(this, value, encode);
      } : encode;

      return this._pairs.map(function each(pair) {
        return _encode(pair[0]) + '=' + _encode(pair[1]);
      }, '').join('&');
    };

    exports.default = AxiosURLSearchParams;
  }, { "./toFormData.js": 550 }], 807: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = buildURL;

    var _utils = require('../utils.js');

    var _utils2 = _interopRequireDefault(_utils);

    var _AxiosURLSearchParams = require('../helpers/AxiosURLSearchParams.js');

    var _AxiosURLSearchParams2 = _interopRequireDefault(_AxiosURLSearchParams);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    /**
     * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
     * URI encoded counterparts
     *
     * @param {string} val The value to be encoded.
     *
     * @returns {string} The encoded value.
     */
    function encode(val) {
      return encodeURIComponent(val).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
    }

    /**
     * Build a URL by appending params to the end
     *
     * @param {string} url The base of the url (e.g., http://www.google.com)
     * @param {object} [params] The params to be appended
     * @param {?object} options
     *
     * @returns {string} The formatted url
     */
    function buildURL(url, params, options) {
      /*eslint no-param-reassign:0*/
      if (!params) {
        return url;
      }

      const _encode = options && options.encode || encode;

      const serializeFn = options && options.serialize;

      let serializedParams;

      if (serializeFn) {
        serializedParams = serializeFn(params, options);
      } else {
        serializedParams = _utils2.default.isURLSearchParams(params) ? params.toString() : new _AxiosURLSearchParams2.default(params, options).toString(_encode);
      }

      if (serializedParams) {
        const hashmarkIndex = url.indexOf("#");

        if (hashmarkIndex !== -1) {
          url = url.slice(0, hashmarkIndex);
        }
        url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
      }

      return url;
    }
  }, { "../utils.js": 540, "../helpers/AxiosURLSearchParams.js": 830 }], 808: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _utils = require('./../utils.js');

    var _utils2 = _interopRequireDefault(_utils);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    class InterceptorManager {
      constructor() {
        this.handlers = [];
      }

      /**
       * Add a new interceptor to the stack
       *
       * @param {Function} fulfilled The function to handle `then` for a `Promise`
       * @param {Function} rejected The function to handle `reject` for a `Promise`
       *
       * @return {Number} An ID used to remove interceptor later
       */
      use(fulfilled, rejected, options) {
        this.handlers.push({
          fulfilled,
          rejected,
          synchronous: options ? options.synchronous : false,
          runWhen: options ? options.runWhen : null
        });
        return this.handlers.length - 1;
      }

      /**
       * Remove an interceptor from the stack
       *
       * @param {Number} id The ID that was returned by `use`
       *
       * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
       */
      eject(id) {
        if (this.handlers[id]) {
          this.handlers[id] = null;
        }
      }

      /**
       * Clear all interceptors from the stack
       *
       * @returns {void}
       */
      clear() {
        if (this.handlers) {
          this.handlers = [];
        }
      }

      /**
       * Iterate over all the registered interceptors
       *
       * This method is particularly useful for skipping over any
       * interceptors that may have become `null` calling `eject`.
       *
       * @param {Function} fn The function to call for each interceptor
       *
       * @returns {void}
       */
      forEach(fn) {
        _utils2.default.forEach(this.handlers, function forEachHandler(h) {
          if (h !== null) {
            fn(h);
          }
        });
      }
    }

    exports.default = InterceptorManager;
  }, { "./../utils.js": 540 }], 826: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false
    };
  }, {}], 834: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _AxiosURLSearchParams = require('../../../helpers/AxiosURLSearchParams.js');

    var _AxiosURLSearchParams2 = _interopRequireDefault(_AxiosURLSearchParams);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    exports.default = typeof URLSearchParams !== 'undefined' ? URLSearchParams : _AxiosURLSearchParams2.default;
  }, { "../../../helpers/AxiosURLSearchParams.js": 830 }], 832: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = typeof FormData !== 'undefined' ? FormData : null;
  }, {}], 833: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = typeof Blob !== 'undefined' ? Blob : null;
  }, {}], 831: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _URLSearchParams = require('./classes/URLSearchParams.js');

    var _URLSearchParams2 = _interopRequireDefault(_URLSearchParams);

    var _FormData = require('./classes/FormData.js');

    var _FormData2 = _interopRequireDefault(_FormData);

    var _Blob = require('./classes/Blob.js');

    var _Blob2 = _interopRequireDefault(_Blob);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    /**
     * Determine if we're running in a standard browser environment
     *
     * This allows axios to run in a web worker, and react-native.
     * Both environments support XMLHttpRequest, but not fully standard globals.
     *
     * web workers:
     *  typeof window -> undefined
     *  typeof document -> undefined
     *
     * react-native:
     *  navigator.product -> 'ReactNative'
     * nativescript
     *  navigator.product -> 'NativeScript' or 'NS'
     *
     * @returns {boolean}
     */
    const isStandardBrowserEnv = (() => {
      let product;
      if (typeof navigator !== 'undefined' && ((product = navigator.product) === 'ReactNative' || product === 'NativeScript' || product === 'NS')) {
        return false;
      }

      return typeof window !== 'undefined' && typeof document !== 'undefined';
    })();

    /**
     * Determine if we're running in a standard browser webWorker environment
     *
     * Although the `isStandardBrowserEnv` method indicates that
     * `allows axios to run in a web worker`, the WebWorker will still be
     * filtered out due to its judgment standard
     * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
     * This leads to a problem when axios post `FormData` in webWorker
     */
    const isStandardBrowserWebWorkerEnv = (() => {
      return typeof WorkerGlobalScope !== 'undefined' &&
        // eslint-disable-next-line no-undef
        self instanceof WorkerGlobalScope && typeof self.importScripts === 'function';
    })();

    exports.default = {
      isBrowser: true,
      classes: {
        URLSearchParams: _URLSearchParams2.default,
        FormData: _FormData2.default,
        Blob: _Blob2.default
      },
      isStandardBrowserEnv,
      isStandardBrowserWebWorkerEnv,
      protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
    };
  }, { "./classes/URLSearchParams.js": 834, "./classes/FormData.js": 832, "./classes/Blob.js": 833 }], 827: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = undefined;

    var _index = require('./node/index.js');

    var _index2 = _interopRequireDefault(_index);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    exports.default = _index2.default;
  }, { "./node/index.js": 831 }], 825: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = toURLEncodedForm;

    var _utils = require('../utils.js');

    var _utils2 = _interopRequireDefault(_utils);

    var _toFormData = require('./toFormData.js');

    var _toFormData2 = _interopRequireDefault(_toFormData);

    var _index = require('../platform/index.js');

    var _index2 = _interopRequireDefault(_index);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function toURLEncodedForm(data, options) {
      return (0, _toFormData2.default)(data, new _index2.default.classes.URLSearchParams(), Object.assign({
        visitor: function (value, key, path, helpers) {
          if (_index2.default.isNode && _utils2.default.isBuffer(value)) {
            this.append(key, value.toString('base64'));
            return false;
          }

          return helpers.defaultVisitor.apply(this, arguments);
        }
      }, options));
    }
  }, { "../utils.js": 540, "./toFormData.js": 550, "../platform/index.js": 827 }], 545: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _utils = require('../utils.js');

    var _utils2 = _interopRequireDefault(_utils);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    /**
     * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
     *
     * @param {string} name - The name of the property to get.
     *
     * @returns An array of strings.
     */
    function parsePropPath(name) {
      // foo[x][y][z]
      // foo.x.y.z
      // foo-x-y-z
      // foo x y z
      return _utils2.default.matchAll(/\w+|\[(\w*)]/g, name).map(match => {
        return match[0] === '[]' ? '' : match[1] || match[0];
      });
    }

    /**
     * Convert an array to an object.
     *
     * @param {Array<any>} arr - The array to convert to an object.
     *
     * @returns An object with the same keys and values as the array.
     */
    function arrayToObject(arr) {
      const obj = {};
      const keys = Object.keys(arr);
      let i;
      const len = keys.length;
      let key;
      for (i = 0; i < len; i++) {
        key = keys[i];
        obj[key] = arr[key];
      }
      return obj;
    }

    /**
     * It takes a FormData object and returns a JavaScript object
     *
     * @param {string} formData The FormData object to convert to JSON.
     *
     * @returns {Object<string, any> | null} The converted object.
     */
    function formDataToJSON(formData) {
      function buildPath(path, value, target, index) {
        let name = path[index++];
        const isNumericKey = Number.isFinite(+name);
        const isLast = index >= path.length;
        name = !name && _utils2.default.isArray(target) ? target.length : name;

        if (isLast) {
          if (_utils2.default.hasOwnProp(target, name)) {
            target[name] = [target[name], value];
          } else {
            target[name] = value;
          }

          return !isNumericKey;
        }

        if (!target[name] || !_utils2.default.isObject(target[name])) {
          target[name] = [];
        }

        const result = buildPath(path, value, target[name], index);

        if (result && _utils2.default.isArray(target[name])) {
          target[name] = arrayToObject(target[name]);
        }

        return !isNumericKey;
      }

      if (_utils2.default.isFormData(formData) && _utils2.default.isFunction(formData.entries)) {
        const obj = {};

        _utils2.default.forEachEntry(formData, (name, value) => {
          buildPath(parsePropPath(name), value, obj, 0);
        });

        return obj;
      }

      return null;
    }

    exports.default = formDataToJSON;
  }, { "../utils.js": 540 }], 544: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _utils = require('../utils.js');

    var _utils2 = _interopRequireDefault(_utils);

    var _AxiosError = require('../core/AxiosError.js');

    var _AxiosError2 = _interopRequireDefault(_AxiosError);

    var _transitional = require('./transitional.js');

    var _transitional2 = _interopRequireDefault(_transitional);

    var _toFormData = require('../helpers/toFormData.js');

    var _toFormData2 = _interopRequireDefault(_toFormData);

    var _toURLEncodedForm = require('../helpers/toURLEncodedForm.js');

    var _toURLEncodedForm2 = _interopRequireDefault(_toURLEncodedForm);

    var _index = require('../platform/index.js');

    var _index2 = _interopRequireDefault(_index);

    var _formDataToJSON = require('../helpers/formDataToJSON.js');

    var _formDataToJSON2 = _interopRequireDefault(_formDataToJSON);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    const DEFAULT_CONTENT_TYPE = {
      'Content-Type': undefined
    };

    /**
     * It takes a string, tries to parse it, and if it fails, it returns the stringified version
     * of the input
     *
     * @param {any} rawValue - The value to be stringified.
     * @param {Function} parser - A function that parses a string into a JavaScript object.
     * @param {Function} encoder - A function that takes a value and returns a string.
     *
     * @returns {string} A stringified version of the rawValue.
     */
    function stringifySafely(rawValue, parser, encoder) {
      if (_utils2.default.isString(rawValue)) {
        try {
          (parser || JSON.parse)(rawValue);
          return _utils2.default.trim(rawValue);
        } catch (e) {
          if (e.name !== 'SyntaxError') {
            throw e;
          }
        }
      }

      return (encoder || JSON.stringify)(rawValue);
    }

    const defaults = {

      transitional: _transitional2.default,

      adapter: ['xhr', 'http'],

      transformRequest: [function transformRequest(data, headers) {
        const contentType = headers.getContentType() || '';
        const hasJSONContentType = contentType.indexOf('application/json') > -1;
        const isObjectPayload = _utils2.default.isObject(data);

        if (isObjectPayload && _utils2.default.isHTMLForm(data)) {
          data = new FormData(data);
        }

        const isFormData = _utils2.default.isFormData(data);

        if (isFormData) {
          if (!hasJSONContentType) {
            return data;
          }
          return hasJSONContentType ? JSON.stringify((0, _formDataToJSON2.default)(data)) : data;
        }

        if (_utils2.default.isArrayBuffer(data) || _utils2.default.isBuffer(data) || _utils2.default.isStream(data) || _utils2.default.isFile(data) || _utils2.default.isBlob(data)) {
          return data;
        }
        if (_utils2.default.isArrayBufferView(data)) {
          return data.buffer;
        }
        if (_utils2.default.isURLSearchParams(data)) {
          headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
          return data.toString();
        }

        let isFileList;

        if (isObjectPayload) {
          if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
            return (0, _toURLEncodedForm2.default)(data, this.formSerializer).toString();
          }

          if ((isFileList = _utils2.default.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
            const _FormData = this.env && this.env.FormData;

            return (0, _toFormData2.default)(isFileList ? { 'files[]': data } : data, _FormData && new _FormData(), this.formSerializer);
          }
        }

        if (isObjectPayload || hasJSONContentType) {
          headers.setContentType('application/json', false);
          return stringifySafely(data);
        }

        return data;
      }],

      transformResponse: [function transformResponse(data) {
        const transitional = this.transitional || defaults.transitional;
        const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
        const JSONRequested = this.responseType === 'json';

        if (data && _utils2.default.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
          const silentJSONParsing = transitional && transitional.silentJSONParsing;
          const strictJSONParsing = !silentJSONParsing && JSONRequested;

          try {
            return JSON.parse(data);
          } catch (e) {
            if (strictJSONParsing) {
              if (e.name === 'SyntaxError') {
                throw _AxiosError2.default.from(e, _AxiosError2.default.ERR_BAD_RESPONSE, this, null, this.response);
              }
              throw e;
            }
          }
        }

        return data;
      }],

      /**
       * A timeout in milliseconds to abort a request. If set to 0 (default) a
       * timeout is not created.
       */
      timeout: 0,

      xsrfCookieName: 'XSRF-TOKEN',
      xsrfHeaderName: 'X-XSRF-TOKEN',

      maxContentLength: -1,
      maxBodyLength: -1,

      env: {
        FormData: _index2.default.classes.FormData,
        Blob: _index2.default.classes.Blob
      },

      validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
      },

      headers: {
        common: {
          'Accept': 'application/json, text/plain, */*'
        }
      }
    };

    _utils2.default.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
      defaults.headers[method] = {};
    });

    _utils2.default.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
      defaults.headers[method] = _utils2.default.merge(DEFAULT_CONTENT_TYPE);
    });

    exports.default = defaults;
  }, { "../utils.js": 540, "../core/AxiosError.js": 551, "./transitional.js": 826, "../helpers/toFormData.js": 550, "../helpers/toURLEncodedForm.js": 825, "../platform/index.js": 827, "../helpers/formDataToJSON.js": 545 }], 820: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _utils = require('./../utils.js');

    var _utils2 = _interopRequireDefault(_utils);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    // RawAxiosHeaders whose duplicates are ignored by node
    // c.f. https://nodejs.org/api/http.html#http_message_headers
    const ignoreDuplicateOf = _utils2.default.toObjectSet(['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent']);

    /**
     * Parse headers into an object
     *
     * ```
     * Date: Wed, 27 Aug 2014 08:58:49 GMT
     * Content-Type: application/json
     * Connection: keep-alive
     * Transfer-Encoding: chunked
     * ```
     *
     * @param {String} rawHeaders Headers needing to be parsed
     *
     * @returns {Object} Headers parsed into an object
     */

    exports.default = rawHeaders => {
      const parsed = {};
      let key;
      let val;
      let i;

      rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
        i = line.indexOf(':');
        key = line.substring(0, i).trim().toLowerCase();
        val = line.substring(i + 1).trim();

        if (!key || parsed[key] && ignoreDuplicateOf[key]) {
          return;
        }

        if (key === 'set-cookie') {
          if (parsed[key]) {
            parsed[key].push(val);
          } else {
            parsed[key] = [val];
          }
        } else {
          parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
        }
      });

      return parsed;
    };
  }, { "./../utils.js": 540 }], 554: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _utils = require('../utils.js');

    var _utils2 = _interopRequireDefault(_utils);

    var _parseHeaders = require('../helpers/parseHeaders.js');

    var _parseHeaders2 = _interopRequireDefault(_parseHeaders);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    const $internals = Symbol('internals');

    function normalizeHeader(header) {
      return header && String(header).trim().toLowerCase();
    }

    function normalizeValue(value) {
      if (value === false || value == null) {
        return value;
      }

      return _utils2.default.isArray(value) ? value.map(normalizeValue) : String(value);
    }

    function parseTokens(str) {
      const tokens = Object.create(null);
      const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
      let match;

      while (match = tokensRE.exec(str)) {
        tokens[match[1]] = match[2];
      }

      return tokens;
    }

    const isValidHeaderName = str => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());

    function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
      if (_utils2.default.isFunction(filter)) {
        return filter.call(this, value, header);
      }

      if (isHeaderNameFilter) {
        value = header;
      }

      if (!_utils2.default.isString(value)) return;

      if (_utils2.default.isString(filter)) {
        return value.indexOf(filter) !== -1;
      }

      if (_utils2.default.isRegExp(filter)) {
        return filter.test(value);
      }
    }

    function formatHeader(header) {
      return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
        return char.toUpperCase() + str;
      });
    }

    function buildAccessors(obj, header) {
      const accessorName = _utils2.default.toCamelCase(' ' + header);

      ['get', 'set', 'has'].forEach(methodName => {
        Object.defineProperty(obj, methodName + accessorName, {
          value: function (arg1, arg2, arg3) {
            return this[methodName].call(this, header, arg1, arg2, arg3);
          },
          configurable: true
        });
      });
    }

    class AxiosHeaders {
      constructor(headers) {
        headers && this.set(headers);
      }

      set(header, valueOrRewrite, rewrite) {
        const self = this;

        function setHeader(_value, _header, _rewrite) {
          const lHeader = normalizeHeader(_header);

          if (!lHeader) {
            throw new Error('header name must be a non-empty string');
          }

          const key = _utils2.default.findKey(self, lHeader);

          if (!key || self[key] === undefined || _rewrite === true || _rewrite === undefined && self[key] !== false) {
            self[key || _header] = normalizeValue(_value);
          }
        }

        const setHeaders = (headers, _rewrite) => _utils2.default.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));

        if (_utils2.default.isPlainObject(header) || header instanceof this.constructor) {
          setHeaders(header, valueOrRewrite);
        } else if (_utils2.default.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
          setHeaders((0, _parseHeaders2.default)(header), valueOrRewrite);
        } else {
          header != null && setHeader(valueOrRewrite, header, rewrite);
        }

        return this;
      }

      get(header, parser) {
        header = normalizeHeader(header);

        if (header) {
          const key = _utils2.default.findKey(this, header);

          if (key) {
            const value = this[key];

            if (!parser) {
              return value;
            }

            if (parser === true) {
              return parseTokens(value);
            }

            if (_utils2.default.isFunction(parser)) {
              return parser.call(this, value, key);
            }

            if (_utils2.default.isRegExp(parser)) {
              return parser.exec(value);
            }

            throw new TypeError('parser must be boolean|regexp|function');
          }
        }
      }

      has(header, matcher) {
        header = normalizeHeader(header);

        if (header) {
          const key = _utils2.default.findKey(this, header);

          return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
        }

        return false;
      }

      delete(header, matcher) {
        const self = this;
        let deleted = false;

        function deleteHeader(_header) {
          _header = normalizeHeader(_header);

          if (_header) {
            const key = _utils2.default.findKey(self, _header);

            if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
              delete self[key];

              deleted = true;
            }
          }
        }

        if (_utils2.default.isArray(header)) {
          header.forEach(deleteHeader);
        } else {
          deleteHeader(header);
        }

        return deleted;
      }

      clear(matcher) {
        const keys = Object.keys(this);
        let i = keys.length;
        let deleted = false;

        while (i--) {
          const key = keys[i];
          if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
            delete this[key];
            deleted = true;
          }
        }

        return deleted;
      }

      normalize(format) {
        const self = this;
        const headers = {};

        _utils2.default.forEach(this, (value, header) => {
          const key = _utils2.default.findKey(headers, header);

          if (key) {
            self[key] = normalizeValue(value);
            delete self[header];
            return;
          }

          const normalized = format ? formatHeader(header) : String(header).trim();

          if (normalized !== header) {
            delete self[header];
          }

          self[normalized] = normalizeValue(value);

          headers[normalized] = true;
        });

        return this;
      }

      concat(...targets) {
        return this.constructor.concat(this, ...targets);
      }

      toJSON(asStrings) {
        const obj = Object.create(null);

        _utils2.default.forEach(this, (value, header) => {
          value != null && value !== false && (obj[header] = asStrings && _utils2.default.isArray(value) ? value.join(', ') : value);
        });

        return obj;
      }

      [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
      }

      toString() {
        return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
      }

      get [Symbol.toStringTag]() {
        return 'AxiosHeaders';
      }

      static from(thing) {
        return thing instanceof this ? thing : new this(thing);
      }

      static concat(first, ...targets) {
        const computed = new this(first);

        targets.forEach(target => computed.set(target));

        return computed;
      }

      static accessor(header) {
        const internals = this[$internals] = this[$internals] = {
          accessors: {}
        };

        const accessors = internals.accessors;
        const prototype = this.prototype;

        function defineAccessor(_header) {
          const lHeader = normalizeHeader(_header);

          if (!accessors[lHeader]) {
            buildAccessors(prototype, _header);
            accessors[lHeader] = true;
          }
        }

        _utils2.default.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);

        return this;
      }
    }

    AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);

    _utils2.default.freezeMethods(AxiosHeaders.prototype);
    _utils2.default.freezeMethods(AxiosHeaders);

    exports.default = AxiosHeaders;
  }, { "../utils.js": 540, "../helpers/parseHeaders.js": 820 }], 838: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = transformData;

    var _utils = require('./../utils.js');

    var _utils2 = _interopRequireDefault(_utils);

    var _index = require('../defaults/index.js');

    var _index2 = _interopRequireDefault(_index);

    var _AxiosHeaders = require('../core/AxiosHeaders.js');

    var _AxiosHeaders2 = _interopRequireDefault(_AxiosHeaders);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    /**
     * Transform the data for a request or a response
     *
     * @param {Array|Function} fns A single function or Array of functions
     * @param {?Object} response The response object
     *
     * @returns {*} The resulting transformed data
     */
    function transformData(fns, response) {
      const config = this || _index2.default;
      const context = response || config;
      const headers = _AxiosHeaders2.default.from(context.headers);
      let data = context.data;

      _utils2.default.forEach(fns, function transform(fn) {
        data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
      });

      headers.normalize();

      return data;
    }
  }, { "./../utils.js": 540, "../defaults/index.js": 544, "../core/AxiosHeaders.js": 554 }], 548: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isCancel;
    function isCancel(value) {
      return !!(value && value.__CANCEL__);
    }
  }, {}], 546: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _AxiosError = require('../core/AxiosError.js');

    var _AxiosError2 = _interopRequireDefault(_AxiosError);

    var _utils = require('../utils.js');

    var _utils2 = _interopRequireDefault(_utils);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    /**
     * A `CanceledError` is an object that is thrown when an operation is canceled.
     *
     * @param {string=} message The message.
     * @param {Object=} config The config.
     * @param {Object=} request The request.
     *
     * @returns {CanceledError} The created error.
     */
    function CanceledError(message, config, request) {
      // eslint-disable-next-line no-eq-null,eqeqeq
      _AxiosError2.default.call(this, message == null ? 'canceled' : message, _AxiosError2.default.ERR_CANCELED, config, request);
      this.name = 'CanceledError';
    }

    _utils2.default.inherits(CanceledError, _AxiosError2.default, {
      __CANCEL__: true
    });

    exports.default = CanceledError;
  }, { "../core/AxiosError.js": 551, "../utils.js": 540 }], 843: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = settle;

    var _AxiosError = require('./AxiosError.js');

    var _AxiosError2 = _interopRequireDefault(_AxiosError);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    /**
     * Resolve or reject a Promise based on response status.
     *
     * @param {Function} resolve A function that resolves the promise.
     * @param {Function} reject A function that rejects the promise.
     * @param {object} response The response.
     *
     * @returns {object} The response.
     */
    function settle(resolve, reject, response) {
      const validateStatus = response.config.validateStatus;
      if (!response.status || !validateStatus || validateStatus(response.status)) {
        resolve(response);
      } else {
        reject(new _AxiosError2.default('Request failed with status code ' + response.status, [_AxiosError2.default.ERR_BAD_REQUEST, _AxiosError2.default.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4], response.config, response.request, response));
      }
    }
  }, { "./AxiosError.js": 551 }], 844: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _utils = require('./../utils.js');

    var _utils2 = _interopRequireDefault(_utils);

    var _index = require('../platform/index.js');

    var _index2 = _interopRequireDefault(_index);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    exports.default = _index2.default.isStandardBrowserEnv ?

      // Standard browser envs support document.cookie
      function standardBrowserEnv() {
        return {
          write: function write(name, value, expires, path, domain, secure) {
            const cookie = [];
            cookie.push(name + '=' + encodeURIComponent(value));

            if (_utils2.default.isNumber(expires)) {
              cookie.push('expires=' + new Date(expires).toGMTString());
            }

            if (_utils2.default.isString(path)) {
              cookie.push('path=' + path);
            }

            if (_utils2.default.isString(domain)) {
              cookie.push('domain=' + domain);
            }

            if (secure === true) {
              cookie.push('secure');
            }

            document.cookie = cookie.join('; ');
          },

          read: function read(name) {
            const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
            return match ? decodeURIComponent(match[3]) : null;
          },

          remove: function remove(name) {
            this.write(name, '', Date.now() - 86400000);
          }
        };
      }() :

      // Non standard browser env (web workers, react-native) lack needed support.
      function nonStandardBrowserEnv() {
        return {
          write: function write() { },
          read: function read() {
            return null;
          },
          remove: function remove() { }
        };
      }();
  }, { "./../utils.js": 540, "../platform/index.js": 827 }], 840: [function (require, module, exports) {
    'use strict';

    /**
     * Determines whether the specified URL is absolute
     *
     * @param {string} url The URL to test
     *
     * @returns {boolean} True if the specified URL is absolute, otherwise false
     */

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isAbsoluteURL;
    function isAbsoluteURL(url) {
      // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
      // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
      // by any combination of letters, digits, plus, period, or hyphen.
      return (/^([a-z][a-z\d+\-.]*:)?\/\//i.test(url)
      );
    }
  }, {}], 841: [function (require, module, exports) {
    'use strict';

    /**
     * Creates a new URL by combining the specified URLs
     *
     * @param {string} baseURL The base URL
     * @param {string} relativeURL The relative URL
     *
     * @returns {string} The combined URL
     */

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = combineURLs;
    function combineURLs(baseURL, relativeURL) {
      return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
    }
  }, {}], 810: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = buildFullPath;

    var _isAbsoluteURL = require('../helpers/isAbsoluteURL.js');

    var _isAbsoluteURL2 = _interopRequireDefault(_isAbsoluteURL);

    var _combineURLs = require('../helpers/combineURLs.js');

    var _combineURLs2 = _interopRequireDefault(_combineURLs);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    /**
     * Creates a new URL by combining the baseURL with the requestedURL,
     * only when the requestedURL is not already an absolute URL.
     * If the requestURL is absolute, this function returns the requestedURL untouched.
     *
     * @param {string} baseURL The base URL
     * @param {string} requestedURL Absolute or relative URL to combine
     *
     * @returns {string} The combined full path
     */
    function buildFullPath(baseURL, requestedURL) {
      if (baseURL && !(0, _isAbsoluteURL2.default)(requestedURL)) {
        return (0, _combineURLs2.default)(baseURL, requestedURL);
      }
      return requestedURL;
    }
  }, { "../helpers/isAbsoluteURL.js": 840, "../helpers/combineURLs.js": 841 }], 845: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _utils = require('./../utils.js');

    var _utils2 = _interopRequireDefault(_utils);

    var _index = require('../platform/index.js');

    var _index2 = _interopRequireDefault(_index);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    exports.default = _index2.default.isStandardBrowserEnv ?

      // Standard browser envs have full support of the APIs needed to test
      // whether the request URL is of the same origin as current location.
      function standardBrowserEnv() {
        const msie = /(msie|trident)/i.test(navigator.userAgent);
        const urlParsingNode = document.createElement('a');
        let originURL;

        /**
        * Parse a URL to discover it's components
        *
        * @param {String} url The URL to be parsed
        * @returns {Object}
        */
        function resolveURL(url) {
          let href = url;

          if (msie) {
            // IE needs attribute set twice to normalize properties
            urlParsingNode.setAttribute('href', href);
            href = urlParsingNode.href;
          }

          urlParsingNode.setAttribute('href', href);

          // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
          return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
          };
        }

        originURL = resolveURL(window.location.href);

        /**
        * Determine if a URL shares the same origin as the current location
        *
        * @param {String} requestURL The URL to test
        * @returns {boolean} True if URL shares the same origin, otherwise false
        */
        return function isURLSameOrigin(requestURL) {
          const parsed = _utils2.default.isString(requestURL) ? resolveURL(requestURL) : requestURL;
          return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
        };
      }() :

      // Non standard browser envs (web workers, react-native) lack needed support.
      function nonStandardBrowserEnv() {
        return function isURLSameOrigin() {
          return true;
        };
      }();
  }, { "./../utils.js": 540, "../platform/index.js": 827 }], 846: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = parseProtocol;
    function parseProtocol(url) {
      const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
      return match && match[1] || '';
    }
  }, {}], 847: [function (require, module, exports) {
    'use strict';

    /**
     * Calculate data maxRate
     * @param {Number} [samplesCount= 10]
     * @param {Number} [min= 1000]
     * @returns {Function}
     */

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function speedometer(samplesCount, min) {
      samplesCount = samplesCount || 10;
      const bytes = new Array(samplesCount);
      const timestamps = new Array(samplesCount);
      let head = 0;
      let tail = 0;
      let firstSampleTS;

      min = min !== undefined ? min : 1000;

      return function push(chunkLength) {
        const now = Date.now();

        const startedAt = timestamps[tail];

        if (!firstSampleTS) {
          firstSampleTS = now;
        }

        bytes[head] = chunkLength;
        timestamps[head] = now;

        let i = tail;
        let bytesCount = 0;

        while (i !== head) {
          bytesCount += bytes[i++];
          i = i % samplesCount;
        }

        head = (head + 1) % samplesCount;

        if (head === tail) {
          tail = (tail + 1) % samplesCount;
        }

        if (now - firstSampleTS < min) {
          return;
        }

        const passed = startedAt && now - startedAt;

        return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
      };
    }

    exports.default = speedometer;
  }, {}], 842: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _utils = require('./../utils.js');

    var _utils2 = _interopRequireDefault(_utils);

    var _settle = require('./../core/settle.js');

    var _settle2 = _interopRequireDefault(_settle);

    var _cookies = require('./../helpers/cookies.js');

    var _cookies2 = _interopRequireDefault(_cookies);

    var _buildURL = require('./../helpers/buildURL.js');

    var _buildURL2 = _interopRequireDefault(_buildURL);

    var _buildFullPath = require('../core/buildFullPath.js');

    var _buildFullPath2 = _interopRequireDefault(_buildFullPath);

    var _isURLSameOrigin = require('./../helpers/isURLSameOrigin.js');

    var _isURLSameOrigin2 = _interopRequireDefault(_isURLSameOrigin);

    var _transitional = require('../defaults/transitional.js');

    var _transitional2 = _interopRequireDefault(_transitional);

    var _AxiosError = require('../core/AxiosError.js');

    var _AxiosError2 = _interopRequireDefault(_AxiosError);

    var _CanceledError = require('../cancel/CanceledError.js');

    var _CanceledError2 = _interopRequireDefault(_CanceledError);

    var _parseProtocol = require('../helpers/parseProtocol.js');

    var _parseProtocol2 = _interopRequireDefault(_parseProtocol);

    var _index = require('../platform/index.js');

    var _index2 = _interopRequireDefault(_index);

    var _AxiosHeaders = require('../core/AxiosHeaders.js');

    var _AxiosHeaders2 = _interopRequireDefault(_AxiosHeaders);

    var _speedometer2 = require('../helpers/speedometer.js');

    var _speedometer3 = _interopRequireDefault(_speedometer2);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function progressEventReducer(listener, isDownloadStream) {
      let bytesNotified = 0;
      const _speedometer = (0, _speedometer3.default)(50, 250);

      return e => {
        const loaded = e.loaded;
        const total = e.lengthComputable ? e.total : undefined;
        const progressBytes = loaded - bytesNotified;
        const rate = _speedometer(progressBytes);
        const inRange = loaded <= total;

        bytesNotified = loaded;

        const data = {
          loaded,
          total,
          progress: total ? loaded / total : undefined,
          bytes: progressBytes,
          rate: rate ? rate : undefined,
          estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
          event: e
        };

        data[isDownloadStream ? 'download' : 'upload'] = true;

        listener(data);
      };
    }

    const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';

    exports.default = isXHRAdapterSupported && function (config) {
      return new Promise(function dispatchXhrRequest(resolve, reject) {
        let requestData = config.data;
        const requestHeaders = _AxiosHeaders2.default.from(config.headers).normalize();
        const responseType = config.responseType;
        let onCanceled;
        function done() {
          if (config.cancelToken) {
            config.cancelToken.unsubscribe(onCanceled);
          }

          if (config.signal) {
            config.signal.removeEventListener('abort', onCanceled);
          }
        }

        if (_utils2.default.isFormData(requestData)) {
          if (_index2.default.isStandardBrowserEnv || _index2.default.isStandardBrowserWebWorkerEnv) {
            requestHeaders.setContentType(false); // Let the browser set it
          } else {
            requestHeaders.setContentType('multipart/form-data;', false); // mobile/desktop app frameworks
          }
        }

        let request = new XMLHttpRequest();

        // HTTP basic authentication
        if (config.auth) {
          const username = config.auth.username || '';
          const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
          requestHeaders.set('Authorization', 'Basic ' + btoa(username + ':' + password));
        }

        const fullPath = (0, _buildFullPath2.default)(config.baseURL, config.url);

        request.open(config.method.toUpperCase(), (0, _buildURL2.default)(fullPath, config.params, config.paramsSerializer), true);

        // Set the request timeout in MS
        request.timeout = config.timeout;

        function onloadend() {
          if (!request) {
            return;
          }
          // Prepare the response
          const responseHeaders = _AxiosHeaders2.default.from('getAllResponseHeaders' in request && request.getAllResponseHeaders());
          const responseData = !responseType || responseType === 'text' || responseType === 'json' ? request.responseText : request.response;
          const response = {
            data: responseData,
            status: request.status,
            statusText: request.statusText,
            headers: responseHeaders,
            config,
            request
          };

          (0, _settle2.default)(function _resolve(value) {
            resolve(value);
            done();
          }, function _reject(err) {
            reject(err);
            done();
          }, response);

          // Clean up request
          request = null;
        }

        if ('onloadend' in request) {
          // Use onloadend if available
          request.onloadend = onloadend;
        } else {
          // Listen for ready state to emulate onloadend
          request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) {
              return;
            }

            // The request errored out and we didn't get a response, this will be
            // handled by onerror instead
            // With one exception: request that using file: protocol, most browsers
            // will return status as 0 even though it's a successful request
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
              return;
            }
            // readystate handler is calling before onerror or ontimeout handlers,
            // so we should call onloadend on the next 'tick'
            setTimeout(onloadend);
          };
        }

        // Handle browser request cancellation (as opposed to a manual cancellation)
        request.onabort = function handleAbort() {
          if (!request) {
            return;
          }

          reject(new _AxiosError2.default('Request aborted', _AxiosError2.default.ECONNABORTED, config, request));

          // Clean up request
          request = null;
        };

        // Handle low level network errors
        request.onerror = function handleError() {
          // Real errors are hidden from us by the browser
          // onerror should only fire if it's a network error
          reject(new _AxiosError2.default('Network Error', _AxiosError2.default.ERR_NETWORK, config, request));

          // Clean up request
          request = null;
        };

        // Handle timeout
        request.ontimeout = function handleTimeout() {
          let timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
          const transitional = config.transitional || _transitional2.default;
          if (config.timeoutErrorMessage) {
            timeoutErrorMessage = config.timeoutErrorMessage;
          }
          reject(new _AxiosError2.default(timeoutErrorMessage, transitional.clarifyTimeoutError ? _AxiosError2.default.ETIMEDOUT : _AxiosError2.default.ECONNABORTED, config, request));

          // Clean up request
          request = null;
        };

        // Add xsrf header
        // This is only done if running in a standard browser environment.
        // Specifically not if we're in a web worker, or react-native.
        if (_index2.default.isStandardBrowserEnv) {
          // Add xsrf header
          const xsrfValue = (config.withCredentials || (0, _isURLSameOrigin2.default)(fullPath)) && config.xsrfCookieName && _cookies2.default.read(config.xsrfCookieName);

          if (xsrfValue) {
            requestHeaders.set(config.xsrfHeaderName, xsrfValue);
          }
        }

        // Remove Content-Type if data is undefined
        requestData === undefined && requestHeaders.setContentType(null);

        // Add headers to the request
        if ('setRequestHeader' in request) {
          _utils2.default.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
            request.setRequestHeader(key, val);
          });
        }

        // Add withCredentials to request if needed
        if (!_utils2.default.isUndefined(config.withCredentials)) {
          request.withCredentials = !!config.withCredentials;
        }

        // Add responseType to request if needed
        if (responseType && responseType !== 'json') {
          request.responseType = config.responseType;
        }

        // Handle progress if needed
        if (typeof config.onDownloadProgress === 'function') {
          request.addEventListener('progress', progressEventReducer(config.onDownloadProgress, true));
        }

        // Not all browsers support upload events
        if (typeof config.onUploadProgress === 'function' && request.upload) {
          request.upload.addEventListener('progress', progressEventReducer(config.onUploadProgress));
        }

        if (config.cancelToken || config.signal) {
          // Handle cancellation
          // eslint-disable-next-line func-names
          onCanceled = cancel => {
            if (!request) {
              return;
            }
            reject(!cancel || cancel.type ? new _CanceledError2.default(null, config, request) : cancel);
            request.abort();
            request = null;
          };

          config.cancelToken && config.cancelToken.subscribe(onCanceled);
          if (config.signal) {
            config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
          }
        }

        const protocol = (0, _parseProtocol2.default)(fullPath);

        if (protocol && _index2.default.protocols.indexOf(protocol) === -1) {
          reject(new _AxiosError2.default('Unsupported protocol ' + protocol + ':', _AxiosError2.default.ERR_BAD_REQUEST, config));
          return;
        }

        // Send the request
        request.send(requestData || null);
      });
    };
  }, { "./../utils.js": 540, "./../core/settle.js": 843, "./../helpers/cookies.js": 844, "./../helpers/buildURL.js": 807, "../core/buildFullPath.js": 810, "./../helpers/isURLSameOrigin.js": 845, "../defaults/transitional.js": 826, "../core/AxiosError.js": 551, "../cancel/CanceledError.js": 546, "../helpers/parseProtocol.js": 846, "../platform/index.js": 827, "../core/AxiosHeaders.js": 554, "../helpers/speedometer.js": 847 }], 839: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _utils = require('../utils.js');

    var _utils2 = _interopRequireDefault(_utils);

    var _http = require('./http.js');

    var _http2 = _interopRequireDefault(_http);

    var _xhr = require('./xhr.js');

    var _xhr2 = _interopRequireDefault(_xhr);

    var _AxiosError = require('../core/AxiosError.js');

    var _AxiosError2 = _interopRequireDefault(_AxiosError);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    const knownAdapters = {
      http: _http2.default,
      xhr: _xhr2.default
    };

    _utils2.default.forEach(knownAdapters, (fn, value) => {
      if (fn) {
        try {
          Object.defineProperty(fn, 'name', { value });
        } catch (e) {
          // eslint-disable-next-line no-empty
        }
        Object.defineProperty(fn, 'adapterName', { value });
      }
    });

    exports.default = {
      getAdapter: adapters => {
        adapters = _utils2.default.isArray(adapters) ? adapters : [adapters];

        const { length } = adapters;
        let nameOrAdapter;
        let adapter;

        for (let i = 0; i < length; i++) {
          nameOrAdapter = adapters[i];
          if (adapter = _utils2.default.isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter) {
            break;
          }
        }

        if (!adapter) {
          if (adapter === false) {
            throw new _AxiosError2.default(`Adapter ${nameOrAdapter} is not supported by the environment`, 'ERR_NOT_SUPPORT');
          }

          throw new Error(_utils2.default.hasOwnProp(knownAdapters, nameOrAdapter) ? `Adapter '${nameOrAdapter}' is not available in the build` : `Unknown adapter '${nameOrAdapter}'`);
        }

        if (!_utils2.default.isFunction(adapter)) {
          throw new TypeError('adapter is not a function');
        }

        return adapter;
      },
      adapters: knownAdapters
    };
  }, { "../utils.js": 540, "./http.js": 763, "./xhr.js": 842, "../core/AxiosError.js": 551 }], 809: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = dispatchRequest;

    var _transformData = require('./transformData.js');

    var _transformData2 = _interopRequireDefault(_transformData);

    var _isCancel = require('../cancel/isCancel.js');

    var _isCancel2 = _interopRequireDefault(_isCancel);

    var _index = require('../defaults/index.js');

    var _index2 = _interopRequireDefault(_index);

    var _CanceledError = require('../cancel/CanceledError.js');

    var _CanceledError2 = _interopRequireDefault(_CanceledError);

    var _AxiosHeaders = require('../core/AxiosHeaders.js');

    var _AxiosHeaders2 = _interopRequireDefault(_AxiosHeaders);

    var _adapters = require('../adapters/adapters.js');

    var _adapters2 = _interopRequireDefault(_adapters);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    /**
     * Throws a `CanceledError` if cancellation has been requested.
     *
     * @param {Object} config The config that is to be used for the request
     *
     * @returns {void}
     */
    function throwIfCancellationRequested(config) {
      if (config.cancelToken) {
        config.cancelToken.throwIfRequested();
      }

      if (config.signal && config.signal.aborted) {
        throw new _CanceledError2.default(null, config);
      }
    }

    /**
     * Dispatch a request to the server using the configured adapter.
     *
     * @param {object} config The config that is to be used for the request
     *
     * @returns {Promise} The Promise to be fulfilled
     */
    function dispatchRequest(config) {
      throwIfCancellationRequested(config);

      config.headers = _AxiosHeaders2.default.from(config.headers);

      // Transform request data
      config.data = _transformData2.default.call(config, config.transformRequest);

      if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
        config.headers.setContentType('application/x-www-form-urlencoded', false);
      }

      const adapter = _adapters2.default.getAdapter(config.adapter || _index2.default.adapter);

      return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);

        // Transform response data
        response.data = _transformData2.default.call(config, config.transformResponse, response);

        response.headers = _AxiosHeaders2.default.from(response.headers);

        return response;
      }, function onAdapterRejection(reason) {
        if (!(0, _isCancel2.default)(reason)) {
          throwIfCancellationRequested(config);

          // Transform response data
          if (reason && reason.response) {
            reason.response.data = _transformData2.default.call(config, config.transformResponse, reason.response);
            reason.response.headers = _AxiosHeaders2.default.from(reason.response.headers);
          }
        }

        return Promise.reject(reason);
      });
    }
  }, { "./transformData.js": 838, "../cancel/isCancel.js": 548, "../defaults/index.js": 544, "../cancel/CanceledError.js": 546, "../core/AxiosHeaders.js": 554, "../adapters/adapters.js": 839 }], 543: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = mergeConfig;

    var _utils = require('../utils.js');

    var _utils2 = _interopRequireDefault(_utils);

    var _AxiosHeaders = require('./AxiosHeaders.js');

    var _AxiosHeaders2 = _interopRequireDefault(_AxiosHeaders);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    const headersToObject = thing => thing instanceof _AxiosHeaders2.default ? thing.toJSON() : thing;

    /**
     * Config-specific merge-function which creates a new config-object
     * by merging two configuration objects together.
     *
     * @param {Object} config1
     * @param {Object} config2
     *
     * @returns {Object} New object resulting from merging config2 to config1
     */
    function mergeConfig(config1, config2) {
      // eslint-disable-next-line no-param-reassign
      config2 = config2 || {};
      const config = {};

      function getMergedValue(target, source, caseless) {
        if (_utils2.default.isPlainObject(target) && _utils2.default.isPlainObject(source)) {
          return _utils2.default.merge.call({ caseless }, target, source);
        } else if (_utils2.default.isPlainObject(source)) {
          return _utils2.default.merge({}, source);
        } else if (_utils2.default.isArray(source)) {
          return source.slice();
        }
        return source;
      }

      // eslint-disable-next-line consistent-return
      function mergeDeepProperties(a, b, caseless) {
        if (!_utils2.default.isUndefined(b)) {
          return getMergedValue(a, b, caseless);
        } else if (!_utils2.default.isUndefined(a)) {
          return getMergedValue(undefined, a, caseless);
        }
      }

      // eslint-disable-next-line consistent-return
      function valueFromConfig2(a, b) {
        if (!_utils2.default.isUndefined(b)) {
          return getMergedValue(undefined, b);
        }
      }

      // eslint-disable-next-line consistent-return
      function defaultToConfig2(a, b) {
        if (!_utils2.default.isUndefined(b)) {
          return getMergedValue(undefined, b);
        } else if (!_utils2.default.isUndefined(a)) {
          return getMergedValue(undefined, a);
        }
      }

      // eslint-disable-next-line consistent-return
      function mergeDirectKeys(a, b, prop) {
        if (prop in config2) {
          return getMergedValue(a, b);
        } else if (prop in config1) {
          return getMergedValue(undefined, a);
        }
      }

      const mergeMap = {
        url: valueFromConfig2,
        method: valueFromConfig2,
        data: valueFromConfig2,
        baseURL: defaultToConfig2,
        transformRequest: defaultToConfig2,
        transformResponse: defaultToConfig2,
        paramsSerializer: defaultToConfig2,
        timeout: defaultToConfig2,
        timeoutMessage: defaultToConfig2,
        withCredentials: defaultToConfig2,
        adapter: defaultToConfig2,
        responseType: defaultToConfig2,
        xsrfCookieName: defaultToConfig2,
        xsrfHeaderName: defaultToConfig2,
        onUploadProgress: defaultToConfig2,
        onDownloadProgress: defaultToConfig2,
        decompress: defaultToConfig2,
        maxContentLength: defaultToConfig2,
        maxBodyLength: defaultToConfig2,
        beforeRedirect: defaultToConfig2,
        transport: defaultToConfig2,
        httpAgent: defaultToConfig2,
        httpsAgent: defaultToConfig2,
        cancelToken: defaultToConfig2,
        socketPath: defaultToConfig2,
        responseEncoding: defaultToConfig2,
        validateStatus: mergeDirectKeys,
        headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
      };

      _utils2.default.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
        const merge = mergeMap[prop] || mergeDeepProperties;
        const configValue = merge(config1[prop], config2[prop], prop);
        _utils2.default.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
      });

      return config;
    }
  }, { "../utils.js": 540, "./AxiosHeaders.js": 554 }], 549: [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const VERSION = exports.VERSION = "1.4.0";
  }, {}], 811: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _data = require('../env/data.js');

    var _AxiosError = require('../core/AxiosError.js');

    var _AxiosError2 = _interopRequireDefault(_AxiosError);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    const validators = {};

    // eslint-disable-next-line func-names
    ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
      validators[type] = function validator(thing) {
        return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
      };
    });

    const deprecatedWarnings = {};

    /**
     * Transitional option validator
     *
     * @param {function|boolean?} validator - set to false if the transitional option has been removed
     * @param {string?} version - deprecated version / removed since version
     * @param {string?} message - some message with additional info
     *
     * @returns {function}
     */
    validators.transitional = function transitional(validator, version, message) {
      function formatMessage(opt, desc) {
        return '[Axios v' + _data.VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
      }

      // eslint-disable-next-line func-names
      return (value, opt, opts) => {
        if (validator === false) {
          throw new _AxiosError2.default(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')), _AxiosError2.default.ERR_DEPRECATED);
        }

        if (version && !deprecatedWarnings[opt]) {
          deprecatedWarnings[opt] = true;
          // eslint-disable-next-line no-console
          console.warn(formatMessage(opt, ' has been deprecated since v' + version + ' and will be removed in the near future'));
        }

        return validator ? validator(value, opt, opts) : true;
      };
    };

    /**
     * Assert object's properties type
     *
     * @param {object} options
     * @param {object} schema
     * @param {boolean?} allowUnknown
     *
     * @returns {object}
     */

    function assertOptions(options, schema, allowUnknown) {
      if (typeof options !== 'object') {
        throw new _AxiosError2.default('options must be an object', _AxiosError2.default.ERR_BAD_OPTION_VALUE);
      }
      const keys = Object.keys(options);
      let i = keys.length;
      while (i-- > 0) {
        const opt = keys[i];
        const validator = schema[opt];
        if (validator) {
          const value = options[opt];
          const result = value === undefined || validator(value, opt, options);
          if (result !== true) {
            throw new _AxiosError2.default('option ' + opt + ' must be ' + result, _AxiosError2.default.ERR_BAD_OPTION_VALUE);
          }
          continue;
        }
        if (allowUnknown !== true) {
          throw new _AxiosError2.default('Unknown option ' + opt, _AxiosError2.default.ERR_BAD_OPTION);
        }
      }
    }

    exports.default = {
      assertOptions,
      validators
    };
  }, { "../env/data.js": 549, "../core/AxiosError.js": 551 }], 542: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _utils = require('./../utils.js');

    var _utils2 = _interopRequireDefault(_utils);

    var _buildURL = require('../helpers/buildURL.js');

    var _buildURL2 = _interopRequireDefault(_buildURL);

    var _InterceptorManager = require('./InterceptorManager.js');

    var _InterceptorManager2 = _interopRequireDefault(_InterceptorManager);

    var _dispatchRequest = require('./dispatchRequest.js');

    var _dispatchRequest2 = _interopRequireDefault(_dispatchRequest);

    var _mergeConfig = require('./mergeConfig.js');

    var _mergeConfig2 = _interopRequireDefault(_mergeConfig);

    var _buildFullPath = require('./buildFullPath.js');

    var _buildFullPath2 = _interopRequireDefault(_buildFullPath);

    var _validator = require('../helpers/validator.js');

    var _validator2 = _interopRequireDefault(_validator);

    var _AxiosHeaders = require('./AxiosHeaders.js');

    var _AxiosHeaders2 = _interopRequireDefault(_AxiosHeaders);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    const validators = _validator2.default.validators;

    /**
     * Create a new instance of Axios
     *
     * @param {Object} instanceConfig The default config for the instance
     *
     * @return {Axios} A new instance of Axios
     */
    class Axios {
      constructor(instanceConfig) {
        this.defaults = instanceConfig;
        this.interceptors = {
          request: new _InterceptorManager2.default(),
          response: new _InterceptorManager2.default()
        };
      }

      /**
       * Dispatch a request
       *
       * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
       * @param {?Object} config
       *
       * @returns {Promise} The Promise to be fulfilled
       */
      request(configOrUrl, config) {
        /*eslint no-param-reassign:0*/
        // Allow for axios('example/url'[, config]) a la fetch API
        if (typeof configOrUrl === 'string') {
          config = config || {};
          config.url = configOrUrl;
        } else {
          config = configOrUrl || {};
        }

        config = (0, _mergeConfig2.default)(this.defaults, config);

        const { transitional, paramsSerializer, headers } = config;

        if (transitional !== undefined) {
          _validator2.default.assertOptions(transitional, {
            silentJSONParsing: validators.transitional(validators.boolean),
            forcedJSONParsing: validators.transitional(validators.boolean),
            clarifyTimeoutError: validators.transitional(validators.boolean)
          }, false);
        }

        if (paramsSerializer != null) {
          if (_utils2.default.isFunction(paramsSerializer)) {
            config.paramsSerializer = {
              serialize: paramsSerializer
            };
          } else {
            _validator2.default.assertOptions(paramsSerializer, {
              encode: validators.function,
              serialize: validators.function
            }, true);
          }
        }

        // Set config.method
        config.method = (config.method || this.defaults.method || 'get').toLowerCase();

        let contextHeaders;

        // Flatten headers
        contextHeaders = headers && _utils2.default.merge(headers.common, headers[config.method]);

        contextHeaders && _utils2.default.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], method => {
          delete headers[method];
        });

        config.headers = _AxiosHeaders2.default.concat(contextHeaders, headers);

        // filter out skipped interceptors
        const requestInterceptorChain = [];
        let synchronousRequestInterceptors = true;
        this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
          if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
            return;
          }

          synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

          requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
        });

        const responseInterceptorChain = [];
        this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
          responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
        });

        let promise;
        let i = 0;
        let len;

        if (!synchronousRequestInterceptors) {
          const chain = [_dispatchRequest2.default.bind(this), undefined];
          chain.unshift.apply(chain, requestInterceptorChain);
          chain.push.apply(chain, responseInterceptorChain);
          len = chain.length;

          promise = Promise.resolve(config);

          while (i < len) {
            promise = promise.then(chain[i++], chain[i++]);
          }

          return promise;
        }

        len = requestInterceptorChain.length;

        let newConfig = config;

        i = 0;

        while (i < len) {
          const onFulfilled = requestInterceptorChain[i++];
          const onRejected = requestInterceptorChain[i++];
          try {
            newConfig = onFulfilled(newConfig);
          } catch (error) {
            onRejected.call(this, error);
            break;
          }
        }

        try {
          promise = _dispatchRequest2.default.call(this, newConfig);
        } catch (error) {
          return Promise.reject(error);
        }

        i = 0;
        len = responseInterceptorChain.length;

        while (i < len) {
          promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
        }

        return promise;
      }

      getUri(config) {
        config = (0, _mergeConfig2.default)(this.defaults, config);
        const fullPath = (0, _buildFullPath2.default)(config.baseURL, config.url);
        return (0, _buildURL2.default)(fullPath, config.params, config.paramsSerializer);
      }
    }

    // Provide aliases for supported request methods
    _utils2.default.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
      /*eslint func-names:0*/
      Axios.prototype[method] = function (url, config) {
        return this.request((0, _mergeConfig2.default)(config || {}, {
          method,
          url,
          data: (config || {}).data
        }));
      };
    });

    _utils2.default.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
      /*eslint func-names:0*/

      function generateHTTPMethod(isForm) {
        return function httpMethod(url, data, config) {
          return this.request((0, _mergeConfig2.default)(config || {}, {
            method,
            headers: isForm ? {
              'Content-Type': 'multipart/form-data'
            } : {},
            url,
            data
          }));
        };
      }

      Axios.prototype[method] = generateHTTPMethod();

      Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
    });

    exports.default = Axios;
  }, { "./../utils.js": 540, "../helpers/buildURL.js": 807, "./InterceptorManager.js": 808, "./dispatchRequest.js": 809, "./mergeConfig.js": 543, "./buildFullPath.js": 810, "../helpers/validator.js": 811, "./AxiosHeaders.js": 554 }], 547: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _CanceledError = require('./CanceledError.js');

    var _CanceledError2 = _interopRequireDefault(_CanceledError);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    /**
     * A `CancelToken` is an object that can be used to request cancellation of an operation.
     *
     * @param {Function} executor The executor function.
     *
     * @returns {CancelToken}
     */
    class CancelToken {
      constructor(executor) {
        if (typeof executor !== 'function') {
          throw new TypeError('executor must be a function.');
        }

        let resolvePromise;

        this.promise = new Promise(function promiseExecutor(resolve) {
          resolvePromise = resolve;
        });

        const token = this;

        // eslint-disable-next-line func-names
        this.promise.then(cancel => {
          if (!token._listeners) return;

          let i = token._listeners.length;

          while (i-- > 0) {
            token._listeners[i](cancel);
          }
          token._listeners = null;
        });

        // eslint-disable-next-line func-names
        this.promise.then = onfulfilled => {
          let _resolve;
          // eslint-disable-next-line func-names
          const promise = new Promise(resolve => {
            token.subscribe(resolve);
            _resolve = resolve;
          }).then(onfulfilled);

          promise.cancel = function reject() {
            token.unsubscribe(_resolve);
          };

          return promise;
        };

        executor(function cancel(message, config, request) {
          if (token.reason) {
            // Cancellation has already been requested
            return;
          }

          token.reason = new _CanceledError2.default(message, config, request);
          resolvePromise(token.reason);
        });
      }

      /**
       * Throws a `CanceledError` if cancellation has been requested.
       */
      throwIfRequested() {
        if (this.reason) {
          throw this.reason;
        }
      }

      /**
       * Subscribe to the cancel signal
       */

      subscribe(listener) {
        if (this.reason) {
          listener(this.reason);
          return;
        }

        if (this._listeners) {
          this._listeners.push(listener);
        } else {
          this._listeners = [listener];
        }
      }

      /**
       * Unsubscribe from the cancel signal
       */

      unsubscribe(listener) {
        if (!this._listeners) {
          return;
        }
        const index = this._listeners.indexOf(listener);
        if (index !== -1) {
          this._listeners.splice(index, 1);
        }
      }

      /**
       * Returns an object that contains a new `CancelToken` and a function that, when called,
       * cancels the `CancelToken`.
       */
      static source() {
        let cancel;
        const token = new CancelToken(function executor(c) {
          cancel = c;
        });
        return {
          token,
          cancel
        };
      }
    }

    exports.default = CancelToken;
  }, { "./CanceledError.js": 546 }], 552: [function (require, module, exports) {
    'use strict';

    /**
     * Syntactic sugar for invoking a function and expanding an array for arguments.
     *
     * Common use case would be to use `Function.prototype.apply`.
     *
     *  ```js
     *  function f(x, y, z) {}
     *  var args = [1, 2, 3];
     *  f.apply(null, args);
     *  ```
     *
     * With `spread` this example can be re-written.
     *
     *  ```js
     *  spread(function(x, y, z) {})([1, 2, 3]);
     *  ```
     *
     * @param {Function} callback
     *
     * @returns {Function}
     */

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = spread;
    function spread(callback) {
      return function wrap(arr) {
        return callback.apply(null, arr);
      };
    }
  }, {}], 553: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isAxiosError;

    var _utils = require('./../utils.js');

    var _utils2 = _interopRequireDefault(_utils);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    /**
     * Determines whether the payload is an error thrown by Axios
     *
     * @param {*} payload The value to test
     *
     * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
     */
    function isAxiosError(payload) {
      return _utils2.default.isObject(payload) && payload.isAxiosError === true;
    }
  }, { "./../utils.js": 540 }], 555: [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const HttpStatusCode = {
      Continue: 100,
      SwitchingProtocols: 101,
      Processing: 102,
      EarlyHints: 103,
      Ok: 200,
      Created: 201,
      Accepted: 202,
      NonAuthoritativeInformation: 203,
      NoContent: 204,
      ResetContent: 205,
      PartialContent: 206,
      MultiStatus: 207,
      AlreadyReported: 208,
      ImUsed: 226,
      MultipleChoices: 300,
      MovedPermanently: 301,
      Found: 302,
      SeeOther: 303,
      NotModified: 304,
      UseProxy: 305,
      Unused: 306,
      TemporaryRedirect: 307,
      PermanentRedirect: 308,
      BadRequest: 400,
      Unauthorized: 401,
      PaymentRequired: 402,
      Forbidden: 403,
      NotFound: 404,
      MethodNotAllowed: 405,
      NotAcceptable: 406,
      ProxyAuthenticationRequired: 407,
      RequestTimeout: 408,
      Conflict: 409,
      Gone: 410,
      LengthRequired: 411,
      PreconditionFailed: 412,
      PayloadTooLarge: 413,
      UriTooLong: 414,
      UnsupportedMediaType: 415,
      RangeNotSatisfiable: 416,
      ExpectationFailed: 417,
      ImATeapot: 418,
      MisdirectedRequest: 421,
      UnprocessableEntity: 422,
      Locked: 423,
      FailedDependency: 424,
      TooEarly: 425,
      UpgradeRequired: 426,
      PreconditionRequired: 428,
      TooManyRequests: 429,
      RequestHeaderFieldsTooLarge: 431,
      UnavailableForLegalReasons: 451,
      InternalServerError: 500,
      NotImplemented: 501,
      BadGateway: 502,
      ServiceUnavailable: 503,
      GatewayTimeout: 504,
      HttpVersionNotSupported: 505,
      VariantAlsoNegotiates: 506,
      InsufficientStorage: 507,
      LoopDetected: 508,
      NotExtended: 510,
      NetworkAuthenticationRequired: 511
    };

    Object.entries(HttpStatusCode).forEach(([key, value]) => {
      HttpStatusCode[value] = key;
    });

    exports.default = HttpStatusCode;
  }, {}], 539: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _utils = require('./utils.js');

    var _utils2 = _interopRequireDefault(_utils);

    var _bind = require('./helpers/bind.js');

    var _bind2 = _interopRequireDefault(_bind);

    var _Axios = require('./core/Axios.js');

    var _Axios2 = _interopRequireDefault(_Axios);

    var _mergeConfig = require('./core/mergeConfig.js');

    var _mergeConfig2 = _interopRequireDefault(_mergeConfig);

    var _index = require('./defaults/index.js');

    var _index2 = _interopRequireDefault(_index);

    var _formDataToJSON = require('./helpers/formDataToJSON.js');

    var _formDataToJSON2 = _interopRequireDefault(_formDataToJSON);

    var _CanceledError = require('./cancel/CanceledError.js');

    var _CanceledError2 = _interopRequireDefault(_CanceledError);

    var _CancelToken = require('./cancel/CancelToken.js');

    var _CancelToken2 = _interopRequireDefault(_CancelToken);

    var _isCancel = require('./cancel/isCancel.js');

    var _isCancel2 = _interopRequireDefault(_isCancel);

    var _data = require('./env/data.js');

    var _toFormData = require('./helpers/toFormData.js');

    var _toFormData2 = _interopRequireDefault(_toFormData);

    var _AxiosError = require('./core/AxiosError.js');

    var _AxiosError2 = _interopRequireDefault(_AxiosError);

    var _spread = require('./helpers/spread.js');

    var _spread2 = _interopRequireDefault(_spread);

    var _isAxiosError = require('./helpers/isAxiosError.js');

    var _isAxiosError2 = _interopRequireDefault(_isAxiosError);

    var _AxiosHeaders = require('./core/AxiosHeaders.js');

    var _AxiosHeaders2 = _interopRequireDefault(_AxiosHeaders);

    var _HttpStatusCode = require('./helpers/HttpStatusCode.js');

    var _HttpStatusCode2 = _interopRequireDefault(_HttpStatusCode);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    /**
     * Create an instance of Axios
     *
     * @param {Object} defaultConfig The default config for the instance
     *
     * @returns {Axios} A new instance of Axios
     */
    function createInstance(defaultConfig) {
      const context = new _Axios2.default(defaultConfig);
      const instance = (0, _bind2.default)(_Axios2.default.prototype.request, context);

      // Copy axios.prototype to instance
      _utils2.default.extend(instance, _Axios2.default.prototype, context, { allOwnKeys: true });

      // Copy context to instance
      _utils2.default.extend(instance, context, null, { allOwnKeys: true });

      // Factory for creating new instances
      instance.create = function create(instanceConfig) {
        return createInstance((0, _mergeConfig2.default)(defaultConfig, instanceConfig));
      };

      return instance;
    }

    // Create the default instance to be exported
    const axios = createInstance(_index2.default);

    // Expose Axios class to allow class inheritance
    axios.Axios = _Axios2.default;

    // Expose Cancel & CancelToken
    axios.CanceledError = _CanceledError2.default;
    axios.CancelToken = _CancelToken2.default;
    axios.isCancel = _isCancel2.default;
    axios.VERSION = _data.VERSION;
    axios.toFormData = _toFormData2.default;

    // Expose AxiosError class
    axios.AxiosError = _AxiosError2.default;

    // alias for CanceledError for backward compatibility
    axios.Cancel = axios.CanceledError;

    // Expose all/spread
    axios.all = function all(promises) {
      return Promise.all(promises);
    };

    axios.spread = _spread2.default;

    // Expose isAxiosError
    axios.isAxiosError = _isAxiosError2.default;

    // Expose mergeConfig
    axios.mergeConfig = _mergeConfig2.default;

    axios.AxiosHeaders = _AxiosHeaders2.default;

    axios.formToJSON = thing => (0, _formDataToJSON2.default)(_utils2.default.isHTMLForm(thing) ? new FormData(thing) : thing);

    axios.HttpStatusCode = _HttpStatusCode2.default;

    axios.default = axios;

    // this module should only have a default export
    exports.default = axios;
  }, { "./utils.js": 540, "./helpers/bind.js": 541, "./core/Axios.js": 542, "./core/mergeConfig.js": 543, "./defaults/index.js": 544, "./helpers/formDataToJSON.js": 545, "./cancel/CanceledError.js": 546, "./cancel/CancelToken.js": 547, "./cancel/isCancel.js": 548, "./env/data.js": 549, "./helpers/toFormData.js": 550, "./core/AxiosError.js": 551, "./helpers/spread.js": 552, "./helpers/isAxiosError.js": 553, "./core/AxiosHeaders.js": 554, "./helpers/HttpStatusCode.js": 555 }], 13: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.mergeConfig = exports.formToJSON = exports.HttpStatusCode = exports.AxiosHeaders = exports.toFormData = exports.spread = exports.isAxiosError = exports.Cancel = exports.all = exports.VERSION = exports.CancelToken = exports.isCancel = exports.CanceledError = exports.AxiosError = exports.Axios = exports.default = undefined;

    var _axios = require('./lib/axios.js');

    var _axios2 = _interopRequireDefault(_axios);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    // This module is intended to unwrap Axios default export as named.
    // Keep top-level export same with static properties
    // so that it can keep same with es module or cjs
    const {
      Axios,
      AxiosError,
      CanceledError,
      isCancel,
      CancelToken,
      VERSION,
      all,
      Cancel,
      isAxiosError,
      spread,
      toFormData,
      AxiosHeaders,
      HttpStatusCode,
      formToJSON,
      mergeConfig
    } = _axios2.default;

    exports.default = _axios2.default;
    exports.Axios = Axios;
    exports.AxiosError = AxiosError;
    exports.CanceledError = CanceledError;
    exports.isCancel = isCancel;
    exports.CancelToken = CancelToken;
    exports.VERSION = VERSION;
    exports.all = all;
    exports.Cancel = Cancel;
    exports.isAxiosError = isAxiosError;
    exports.spread = spread;
    exports.toFormData = toFormData;
    exports.AxiosHeaders = AxiosHeaders;
    exports.HttpStatusCode = HttpStatusCode;
    exports.formToJSON = formToJSON;
    exports.mergeConfig = mergeConfig;
  }, { "./lib/axios.js": 539 }], 11: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /* eslint-disable */

    var hideAlert = exports.hideAlert = function hideAlert() {
      var el = document.querySelector('.alert');
      if (el) el.parentElement.removeChild(el);
    };

    // type is 'success' or 'error'
    var showAlert = exports.showAlert = function showAlert(type, msg) {
      hideAlert();
      var markup = '<div class="alert alert--' + type + '">' + msg + '</div>';
      document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
      window.setTimeout(hideAlert, 5000);
    };
  }, {}], 4: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.logout = exports.login = undefined;
    var _this = undefined;

    var _axios = require('axios');

    var _axios2 = _interopRequireDefault(_axios);

    var _alerts = require('./alerts');

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /* eslint-disable */


    var login = exports.login = function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(email, password) {
        var res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('LOGIN');
                console.log(email, password);
                alert(email, password);
                _context.prev = 3;
                _context.next = 6;
                return (0, _axios2.default)({
                  method: 'POST',
                  url: 'http://127.0.0.1:3000/api/v1/users/login',
                  data: {
                    email: email,
                    password: password
                  }
                });

              case 6:
                res = _context.sent;


                if (res.data.status === 'success') {
                  (0, _alerts.showAlert)('success', 'Logged in successfully!');
                  window.setTimeout(function () {
                    location.assign('/');
                  }, 1500);
                }
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context['catch'](3);

                (0, _alerts.showAlert)('error', _context.t0.response.data.message);

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[3, 10]]);
      }));

      return function login(_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();

    var logout = exports.logout = function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return (0, _axios2.default)({
                  method: 'GET',
                  url: 'http://127.0.0.1:3000/api/v1/users/logout'
                });

              case 3:
                res = _context2.sent;

                if (res.data.status = 'success') location.reload(true);
                _context2.next = 11;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2['catch'](0);

                console.log(_context2.t0.response);
                (0, _alerts.showAlert)('error', 'Error logging out! Try again.');

              case 11:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this, [[0, 7]]);
      }));

      return function logout() {
        return _ref2.apply(this, arguments);
      };
    }();
  }, { "axios": 13, "./alerts": 11 }], 5: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.updateSettings = undefined;
    var _this = undefined;

    var _axios = require('axios');

    var _axios2 = _interopRequireDefault(_axios);

    var _alerts = require('./alerts');

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /* eslint-disable */


    // type is either 'password' or 'data'
    var updateSettings = exports.updateSettings = function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data, type) {
        var url, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                url = type === 'password' ? 'http://127.0.0.1:3000/api/v1/users/updateMyPassword' : 'http://127.0.0.1:3000/api/v1/users/updateMe';
                _context.next = 4;
                return (0, _axios2.default)({
                  method: 'PATCH',
                  url: url,
                  data: data
                });

              case 4:
                res = _context.sent;


                if (res.data.status === 'success') {
                  (0, _alerts.showAlert)('success', type.toUpperCase() + ' updated successfully!');
                }
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context['catch'](0);

                (0, _alerts.showAlert)('error', _context.t0.response.data.message);

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[0, 8]]);
      }));

      return function updateSettings(_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();
  }, { "axios": 13, "./alerts": 11 }], 1: [function (require, module, exports) {
    'use strict';

    var _this = undefined;

    require('@babel/polyfill');

    var _mapbox = require('./mapbox');

    var _login = require('./login');

    var _updateSettings = require('./updateSettings');

    function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /* eslint-disable */

    // import "core-js/stable";

    // DOM ELEMENTS
    var mapBox = document.getElementById('map');
    var loginForm = document.querySelector('.form--login');
    var logOutBtn = document.querySelector('.nav__el--logout');
    var userDataForm = document.querySelector('.form-user-data');
    var userPasswordForm = document.querySelector('.form-user-password');

    // DELEGATION
    if (mapBox) {
      var locations = JSON.parse(mapBox.dataset.locations);
      (0, _mapbox.displayMap)(locations);
    }

    if (loginForm) loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      (0, _login.login)(email, password);
    });

    if (logOutBtn) logOutBtn.addEventListener('click', _login.logout);

    if (userDataForm) userDataForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      (0, _updateSettings.updateSettings)({ name: name, email: email }, 'data');
    });

    if (userPasswordForm) userPasswordForm.addEventListener('submit', function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
        var passwordCurrent, password, passwordConfirm;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                document.querySelector('.btn--save-password').textContent = 'Updating...';

                passwordCurrent = document.getElementById('password-current').value;
                password = document.getElementById('password').value;
                passwordConfirm = document.getElementById('password-confirm').value;
                _context.next = 7;
                return (0, _updateSettings.updateSettings)({ passwordCurrent: passwordCurrent, password: password, passwordConfirm: passwordConfirm }, 'password');

              case 7:

                document.querySelector('.btn--save-password').textContent = 'Save password';
                document.getElementById('password-current').value = '';
                document.getElementById('password').value = '';
                document.getElementById('password-confirm').value = '';

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }, { "@babel/polyfill": 850, "./mapbox": 3, "./login": 4, "./updateSettings": 5 }], 1163: [function (require, module, exports) {
    var global = arguments[3];
    var OVERLAY_ID = '__parcel__error__overlay__';

    var OldModule = module.bundle.Module;

    function Module(moduleName) {
      OldModule.call(this, moduleName);
      this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function (fn) {
          this._acceptCallbacks.push(fn || function () { });
        },
        dispose: function (fn) {
          this._disposeCallbacks.push(fn);
        }
      };

      module.bundle.hotData = null;
    }

    module.bundle.Module = Module;

    var parent = module.bundle.parent;
    if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
      var hostname = '' || location.hostname;
      var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
      var ws = new WebSocket(protocol + '://' + hostname + ':' + '63875' + '/');
      ws.onmessage = function (event) {
        var data = JSON.parse(event.data);

        if (data.type === 'update') {
          data.assets.forEach(function (asset) {
            hmrApply(global.parcelRequire, asset);
          });

          data.assets.forEach(function (asset) {
            if (!asset.isNew) {
              hmrAccept(global.parcelRequire, asset.id);
            }
          });
          // Clear the console after HMR
          console.clear();
        }

        if (data.type === 'reload') {
          ws.close();
          ws.onclose = function () {
            location.reload();
          };
        }

        if (data.type === 'error-resolved') {
          console.log('[parcel] ✨ Error resolved');

          removeErrorOverlay();
        }

        if (data.type === 'error') {
          console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

          removeErrorOverlay();

          var overlay = createErrorOverlay(data);
          document.body.appendChild(overlay);
        }
      };
    }

    function removeErrorOverlay() {
      var overlay = document.getElementById(OVERLAY_ID);
      if (overlay) {
        overlay.remove();
      }
    }

    function createErrorOverlay(data) {
      var overlay = document.createElement('div');
      overlay.id = OVERLAY_ID;

      // html encode message and stack trace
      var message = document.createElement('div');
      var stackTrace = document.createElement('pre');
      message.innerText = data.error.message;
      stackTrace.innerText = data.error.stack;

      overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

      return overlay;
    }

    function getParents(bundle, id) {
      var modules = bundle.modules;
      if (!modules) {
        return [];
      }

      var parents = [];
      var k, d, dep;

      for (k in modules) {
        for (d in modules[k][1]) {
          dep = modules[k][1][d];
          if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
            parents.push(+k);
          }
        }
      }

      if (bundle.parent) {
        parents = parents.concat(getParents(bundle.parent, id));
      }

      return parents;
    }

    function hmrApply(bundle, asset) {
      var modules = bundle.modules;
      if (!modules) {
        return;
      }

      if (modules[asset.id] || !bundle.parent) {
        var fn = new Function('require', 'module', 'exports', asset.generated.js);
        asset.isNew = !modules[asset.id];
        modules[asset.id] = [fn, asset.deps];
      } else if (bundle.parent) {
        hmrApply(bundle.parent, asset);
      }
    }

    function hmrAccept(bundle, id) {
      var modules = bundle.modules;
      if (!modules) {
        return;
      }

      if (!modules[id] && bundle.parent) {
        return hmrAccept(bundle.parent, id);
      }

      var cached = bundle.cache[id];
      bundle.hotData = {};
      if (cached) {
        cached.hot.data = bundle.hotData;
      }

      if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
        cached.hot._disposeCallbacks.forEach(function (cb) {
          cb(bundle.hotData);
        });
      }

      delete bundle.cache[id];
      bundle(id);

      cached = bundle.cache[id];
      if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        cached.hot._acceptCallbacks.forEach(function (cb) {
          cb();
        });
        return true;
      }

      return getParents(global.parcelRequire, id).some(function (id) {
        return hmrAccept(global.parcelRequire, id);
      });
    }
  }, {}]
}, {}, [1163, 1], null)
//# sourceMappingURL=/bundle.map