var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet(obj, member, value, setter);
  },
  get _() {
    return __privateGet(obj, member, getter);
  }
});
var _a2, _representation, _b, __brand_DbNull, _c2, __brand_JsonNull, _d2, __brand_AnyNull, _e2, _e3, _f, _e4, _g, _e5, _t2, _r2, _i2, _o2, _s2, _a3, _e8_instances, n_fn, u_fn, l_fn, p_fn, c_fn, d_fn, _h, _e6, _t3, _r3, _Li_instances, i_fn, o_fn, s_fn, a_fn, n_fn2, u_fn2, l_fn2, p_fn2, _i3, _e7, _t4, _r4, _j, _e8, _t5, _r5, _i4, _ln_instances, o_fn2, s_fn2, a_fn2, n_fn3, u_fn3, l_fn3, p_fn3, c_fn2, _k, _e9, _t6, _r6, _gr_instances, i_fn2, o_fn3, s_fn3, a_fn3, n_fn4, u_fn4, l_fn4, p_fn4, c_fn3, d_fn2, m_fn, f_fn, y_fn, g_fn, _l2, _e10, _t7, _r7, _i5, _o3, _m, _e11, _t8, _r8, _n2, _xn_instances, e_fn, _o4, _e12, _t9, _r9, _i6, _o5, _s3, _bn_instances, a_fn4, n_fn5, u_fn5, l_fn5, _p2, _e13, _t10, _r10, _Bi_instances, i_fn3, o_fn4, _q, _e14, _t11, _r11, _i7, _o6, _s4, _a4, _yr_instances, n_fn6, u_fn6, l_fn6, p_fn5, c_fn4, d_fn3, m_fn2, f_fn2, y_fn2, g_fn2, h_fn, _r12, _unlockParent, _s5, _mutex, _t12, _config, _options, _u2;
import { app, BrowserWindow, ipcMain, Menu, dialog } from "electron";
import require$$6, { createHash, randomUUID, randomBytes } from "node:crypto";
import { readdir, readFile, mkdir } from "node:fs/promises";
import * as path from "node:path";
import path__default from "node:path";
import { fileURLToPath } from "node:url";
import require$$2 from "node:fs";
import require$$3 from "node:async_hooks";
import require$$4 from "node:events";
import require$$5 from "node:os";
import Database from "better-sqlite3";
import bcrypt from "bcrypt";
import { createRequire } from "node:module";
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export$1 = (target, all) => {
  for (var name2 in all)
    __defProp$1(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to2, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to2, key) && key !== except)
        __defProp$1(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to2;
};
var __toCommonJS = (mod2) => __copyProps(__defProp$1({}, "__esModule", { value: true }), mod2);
var index_exports = {};
__export$1(index_exports, {
  AnyNull: () => AnyNull,
  AnyNullClass: () => AnyNullClass,
  DbNull: () => DbNull,
  DbNullClass: () => DbNullClass,
  Decimal: () => Decimal,
  JsonNull: () => JsonNull,
  JsonNullClass: () => JsonNullClass,
  NullTypes: () => NullTypes,
  ObjectEnumValue: () => ObjectEnumValue,
  PrismaClientInitializationError: () => PrismaClientInitializationError,
  PrismaClientKnownRequestError: () => PrismaClientKnownRequestError,
  PrismaClientRustError: () => PrismaClientRustError,
  PrismaClientRustPanicError: () => PrismaClientRustPanicError,
  PrismaClientUnknownRequestError: () => PrismaClientUnknownRequestError,
  PrismaClientValidationError: () => PrismaClientValidationError,
  Sql: () => Sql,
  empty: () => empty,
  hasBatchIndex: () => hasBatchIndex,
  isAnyNull: () => isAnyNull,
  isDbNull: () => isDbNull,
  isJsonNull: () => isJsonNull,
  isObjectEnumValue: () => isObjectEnumValue,
  join: () => join,
  raw: () => raw,
  sql: () => sql
});
var dist = __toCommonJS(index_exports);
function hasBatchIndex(value) {
  return typeof value["batchRequestIdx"] === "number";
}
function setClassName(classObject, name2) {
  Object.defineProperty(classObject, "name", {
    value: name2,
    configurable: true
  });
}
var PrismaClientInitializationError = class _PrismaClientInitializationError extends Error {
  constructor(message, clientVersion, errorCode) {
    super(message);
    __publicField(this, "clientVersion");
    __publicField(this, "errorCode");
    __publicField(this, "retryable");
    this.name = "PrismaClientInitializationError";
    this.clientVersion = clientVersion;
    this.errorCode = errorCode;
    Error.captureStackTrace(_PrismaClientInitializationError);
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientInitializationError";
  }
};
setClassName(PrismaClientInitializationError, "PrismaClientInitializationError");
var PrismaClientKnownRequestError = class extends Error {
  constructor(message, { code, clientVersion, meta, batchRequestIdx }) {
    super(message);
    __publicField(this, "code");
    __publicField(this, "meta");
    __publicField(this, "clientVersion");
    __publicField(this, "batchRequestIdx");
    this.name = "PrismaClientKnownRequestError";
    this.code = code;
    this.clientVersion = clientVersion;
    this.meta = meta;
    Object.defineProperty(this, "batchRequestIdx", {
      value: batchRequestIdx,
      enumerable: false,
      writable: true
    });
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientKnownRequestError";
  }
};
setClassName(PrismaClientKnownRequestError, "PrismaClientKnownRequestError");
function getBacktrace(log3) {
  var _a5, _b2, _c3, _d3, _e15, _f2, _g2;
  if ((_a5 = log3.fields) == null ? void 0 : _a5.message) {
    let str = (_b2 = log3.fields) == null ? void 0 : _b2.message;
    if ((_c3 = log3.fields) == null ? void 0 : _c3.file) {
      str += ` in ${log3.fields.file}`;
      if ((_d3 = log3.fields) == null ? void 0 : _d3.line) {
        str += `:${log3.fields.line}`;
      }
      if ((_e15 = log3.fields) == null ? void 0 : _e15.column) {
        str += `:${log3.fields.column}`;
      }
    }
    if ((_f2 = log3.fields) == null ? void 0 : _f2.reason) {
      str += `
${(_g2 = log3.fields) == null ? void 0 : _g2.reason}`;
    }
    return str;
  }
  return "Unknown error";
}
function isPanic(err) {
  var _a5;
  return ((_a5 = err.fields) == null ? void 0 : _a5.message) === "PANIC";
}
var PrismaClientRustError = class extends Error {
  constructor({ clientVersion, error: error2 }) {
    const backtrace = getBacktrace(error2);
    super(backtrace ?? "Unknown error");
    __publicField(this, "clientVersion");
    __publicField(this, "_isPanic");
    this._isPanic = isPanic(error2);
    this.clientVersion = clientVersion;
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientRustError";
  }
  isPanic() {
    return this._isPanic;
  }
};
setClassName(PrismaClientRustError, "PrismaClientRustError");
var PrismaClientRustPanicError = class extends Error {
  constructor(message, clientVersion) {
    super(message);
    __publicField(this, "clientVersion");
    this.name = "PrismaClientRustPanicError";
    this.clientVersion = clientVersion;
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientRustPanicError";
  }
};
setClassName(PrismaClientRustPanicError, "PrismaClientRustPanicError");
var PrismaClientUnknownRequestError = class extends Error {
  constructor(message, { clientVersion, batchRequestIdx }) {
    super(message);
    __publicField(this, "clientVersion");
    __publicField(this, "batchRequestIdx");
    this.name = "PrismaClientUnknownRequestError";
    this.clientVersion = clientVersion;
    Object.defineProperty(this, "batchRequestIdx", {
      value: batchRequestIdx,
      writable: true,
      enumerable: false
    });
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientUnknownRequestError";
  }
};
setClassName(PrismaClientUnknownRequestError, "PrismaClientUnknownRequestError");
var PrismaClientValidationError = class extends Error {
  constructor(message, { clientVersion }) {
    super(message);
    __publicField(this, "name", "PrismaClientValidationError");
    __publicField(this, "clientVersion");
    this.clientVersion = clientVersion;
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientValidationError";
  }
};
setClassName(PrismaClientValidationError, "PrismaClientValidationError");
var secret = Symbol();
var PRISMA_OBJECT_ENUM_VALUE = Symbol.for("prisma.objectEnumValue");
var ObjectEnumValue = (_a2 = PRISMA_OBJECT_ENUM_VALUE, _b = class {
  constructor(arg) {
    __publicField(this, _a2, true);
    __privateAdd(this, _representation);
    if (arg === secret) {
      __privateSet(this, _representation, `Prisma.${this._getName()}`);
    } else {
      __privateSet(this, _representation, `new Prisma.${this._getNamespace()}.${this._getName()}()`);
    }
  }
  _getName() {
    return this.constructor.name;
  }
  toString() {
    return __privateGet(this, _representation);
  }
}, _representation = new WeakMap(), _b);
function setClassName2(classObject, name2) {
  Object.defineProperty(classObject, "name", {
    value: name2,
    configurable: true
  });
}
var NullTypesEnumValue = class extends ObjectEnumValue {
  _getNamespace() {
    return "NullTypes";
  }
};
var DbNullClass = (_c2 = class extends NullTypesEnumValue {
  constructor() {
    super(...arguments);
    // Phantom private property to prevent structural type equality
    // eslint-disable-next-line no-unused-private-class-members
    __privateAdd(this, __brand_DbNull);
  }
}, __brand_DbNull = new WeakMap(), _c2);
setClassName2(DbNullClass, "DbNull");
var JsonNullClass = (_d2 = class extends NullTypesEnumValue {
  constructor() {
    super(...arguments);
    // Phantom private property to prevent structural type equality
    // eslint-disable-next-line no-unused-private-class-members
    __privateAdd(this, __brand_JsonNull);
  }
}, __brand_JsonNull = new WeakMap(), _d2);
setClassName2(JsonNullClass, "JsonNull");
var AnyNullClass = (_e2 = class extends NullTypesEnumValue {
  constructor() {
    super(...arguments);
    // Phantom private property to prevent structural type equality
    // eslint-disable-next-line no-unused-private-class-members
    __privateAdd(this, __brand_AnyNull);
  }
}, __brand_AnyNull = new WeakMap(), _e2);
setClassName2(AnyNullClass, "AnyNull");
var NullTypes = {
  DbNull: DbNullClass,
  JsonNull: JsonNullClass,
  AnyNull: AnyNullClass
};
var DbNull = new DbNullClass(secret);
var JsonNull = new JsonNullClass(secret);
var AnyNull = new AnyNullClass(secret);
function isObjectEnumValue(value) {
  return typeof value === "object" && value !== null && value[PRISMA_OBJECT_ENUM_VALUE] === true;
}
function isDbNull(value) {
  return value === DbNull;
}
function isJsonNull(value) {
  return value === JsonNull;
}
function isAnyNull(value) {
  return value === AnyNull;
}
var EXP_LIMIT = 9e15;
var MAX_DIGITS = 1e9;
var NUMERALS = "0123456789abcdef";
var LN10 = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
var PI = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
var DEFAULTS = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed at run-time using the `Decimal.config` method.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used when rounding to `precision`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The modulo mode used when calculating the modulus: a mod n.
  // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
  // The remainder (r) is calculated as: r = a - n * q.
  //
  // UP         0 The remainder is positive if the dividend is negative, else is negative.
  // DOWN       1 The remainder has the same sign as the dividend (JavaScript %).
  // FLOOR      3 The remainder has the same sign as the divisor (Python %).
  // HALF_EVEN  6 The IEEE 754 remainder function.
  // EUCLID     9 Euclidian division. q = sign(n) * floor(a / abs(n)). Always positive.
  //
  // Truncated division (1), floored division (3), the IEEE 754 remainder (6), and Euclidian
  // division (9) are commonly used for the modulus operation. The other rounding modes can also
  // be used, but they may not give useful results.
  modulo: 1,
  // 0 to 9
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -EXP_LIMIT
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to EXP_LIMIT
  // The minimum exponent value, beneath which underflow to zero occurs.
  // JavaScript numbers: -324  (5e-324)
  minE: -EXP_LIMIT,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: EXP_LIMIT,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: false
  // true/false
};
var inexact;
var quadrant;
var external = true;
var decimalError = "[DecimalError] ";
var invalidArgument = decimalError + "Invalid argument: ";
var precisionLimitExceeded = decimalError + "Precision limit exceeded";
var cryptoUnavailable = decimalError + "crypto unavailable";
var tag = "[object Decimal]";
var mathfloor = Math.floor;
var mathpow = Math.pow;
var isBinary = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
var isHex = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
var isOctal = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
var isDecimal = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
var BASE = 1e7;
var LOG_BASE = 7;
var MAX_SAFE_INTEGER = 9007199254740991;
var LN10_PRECISION = LN10.length - 1;
var PI_PRECISION = PI.length - 1;
var P = { toStringTag: tag };
P.absoluteValue = P.abs = function() {
  var x = new this.constructor(this);
  if (x.s < 0) x.s = 1;
  return finalise(x);
};
P.ceil = function() {
  return finalise(new this.constructor(this), this.e + 1, 2);
};
P.clampedTo = P.clamp = function(min2, max2) {
  var k2, x = this, Ctor = x.constructor;
  min2 = new Ctor(min2);
  max2 = new Ctor(max2);
  if (!min2.s || !max2.s) return new Ctor(NaN);
  if (min2.gt(max2)) throw Error(invalidArgument + max2);
  k2 = x.cmp(min2);
  return k2 < 0 ? min2 : x.cmp(max2) > 0 ? max2 : new Ctor(x);
};
P.comparedTo = P.cmp = function(y) {
  var i, j2, xdL, ydL, x = this, xd2 = x.d, yd2 = (y = new x.constructor(y)).d, xs2 = x.s, ys2 = y.s;
  if (!xd2 || !yd2) {
    return !xs2 || !ys2 ? NaN : xs2 !== ys2 ? xs2 : xd2 === yd2 ? 0 : !xd2 ^ xs2 < 0 ? 1 : -1;
  }
  if (!xd2[0] || !yd2[0]) return xd2[0] ? xs2 : yd2[0] ? -ys2 : 0;
  if (xs2 !== ys2) return xs2;
  if (x.e !== y.e) return x.e > y.e ^ xs2 < 0 ? 1 : -1;
  xdL = xd2.length;
  ydL = yd2.length;
  for (i = 0, j2 = xdL < ydL ? xdL : ydL; i < j2; ++i) {
    if (xd2[i] !== yd2[i]) return xd2[i] > yd2[i] ^ xs2 < 0 ? 1 : -1;
  }
  return xdL === ydL ? 0 : xdL > ydL ^ xs2 < 0 ? 1 : -1;
};
P.cosine = P.cos = function() {
  var pr2, rm2, x = this, Ctor = x.constructor;
  if (!x.d) return new Ctor(NaN);
  if (!x.d[0]) return new Ctor(1);
  pr2 = Ctor.precision;
  rm2 = Ctor.rounding;
  Ctor.precision = pr2 + Math.max(x.e, x.sd()) + LOG_BASE;
  Ctor.rounding = 1;
  x = cosine(Ctor, toLessThanHalfPi(Ctor, x));
  Ctor.precision = pr2;
  Ctor.rounding = rm2;
  return finalise(quadrant == 2 || quadrant == 3 ? x.neg() : x, pr2, rm2, true);
};
P.cubeRoot = P.cbrt = function() {
  var e8, m, n, r, rep, s, sd2, t, t3, t3plusx, x = this, Ctor = x.constructor;
  if (!x.isFinite() || x.isZero()) return new Ctor(x);
  external = false;
  s = x.s * mathpow(x.s * x, 1 / 3);
  if (!s || Math.abs(s) == 1 / 0) {
    n = digitsToString(x.d);
    e8 = x.e;
    if (s = (e8 - n.length + 1) % 3) n += s == 1 || s == -2 ? "0" : "00";
    s = mathpow(n, 1 / 3);
    e8 = mathfloor((e8 + 1) / 3) - (e8 % 3 == (e8 < 0 ? -1 : 2));
    if (s == 1 / 0) {
      n = "5e" + e8;
    } else {
      n = s.toExponential();
      n = n.slice(0, n.indexOf("e") + 1) + e8;
    }
    r = new Ctor(n);
    r.s = x.s;
  } else {
    r = new Ctor(s.toString());
  }
  sd2 = (e8 = Ctor.precision) + 3;
  for (; ; ) {
    t = r;
    t3 = t.times(t).times(t);
    t3plusx = t3.plus(x);
    r = divide(t3plusx.plus(x).times(t), t3plusx.plus(t3), sd2 + 2, 1);
    if (digitsToString(t.d).slice(0, sd2) === (n = digitsToString(r.d)).slice(0, sd2)) {
      n = n.slice(sd2 - 3, sd2 + 1);
      if (n == "9999" || !rep && n == "4999") {
        if (!rep) {
          finalise(t, e8 + 1, 0);
          if (t.times(t).times(t).eq(x)) {
            r = t;
            break;
          }
        }
        sd2 += 4;
        rep = 1;
      } else {
        if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
          finalise(r, e8 + 1, 1);
          m = !r.times(r).times(r).eq(x);
        }
        break;
      }
    }
  }
  external = true;
  return finalise(r, e8, Ctor.rounding, m);
};
P.decimalPlaces = P.dp = function() {
  var w, d = this.d, n = NaN;
  if (d) {
    w = d.length - 1;
    n = (w - mathfloor(this.e / LOG_BASE)) * LOG_BASE;
    w = d[w];
    if (w) for (; w % 10 == 0; w /= 10) n--;
    if (n < 0) n = 0;
  }
  return n;
};
P.dividedBy = P.div = function(y) {
  return divide(this, new this.constructor(y));
};
P.dividedToIntegerBy = P.divToInt = function(y) {
  var x = this, Ctor = x.constructor;
  return finalise(divide(x, new Ctor(y), 0, 1, 1), Ctor.precision, Ctor.rounding);
};
P.equals = P.eq = function(y) {
  return this.cmp(y) === 0;
};
P.floor = function() {
  return finalise(new this.constructor(this), this.e + 1, 3);
};
P.greaterThan = P.gt = function(y) {
  return this.cmp(y) > 0;
};
P.greaterThanOrEqualTo = P.gte = function(y) {
  var k2 = this.cmp(y);
  return k2 == 1 || k2 === 0;
};
P.hyperbolicCosine = P.cosh = function() {
  var k2, n, pr2, rm2, len, x = this, Ctor = x.constructor, one = new Ctor(1);
  if (!x.isFinite()) return new Ctor(x.s ? 1 / 0 : NaN);
  if (x.isZero()) return one;
  pr2 = Ctor.precision;
  rm2 = Ctor.rounding;
  Ctor.precision = pr2 + Math.max(x.e, x.sd()) + 4;
  Ctor.rounding = 1;
  len = x.d.length;
  if (len < 32) {
    k2 = Math.ceil(len / 3);
    n = (1 / tinyPow(4, k2)).toString();
  } else {
    k2 = 16;
    n = "2.3283064365386962890625e-10";
  }
  x = taylorSeries(Ctor, 1, x.times(n), new Ctor(1), true);
  var cosh2_x, i = k2, d8 = new Ctor(8);
  for (; i--; ) {
    cosh2_x = x.times(x);
    x = one.minus(cosh2_x.times(d8.minus(cosh2_x.times(d8))));
  }
  return finalise(x, Ctor.precision = pr2, Ctor.rounding = rm2, true);
};
P.hyperbolicSine = P.sinh = function() {
  var k2, pr2, rm2, len, x = this, Ctor = x.constructor;
  if (!x.isFinite() || x.isZero()) return new Ctor(x);
  pr2 = Ctor.precision;
  rm2 = Ctor.rounding;
  Ctor.precision = pr2 + Math.max(x.e, x.sd()) + 4;
  Ctor.rounding = 1;
  len = x.d.length;
  if (len < 3) {
    x = taylorSeries(Ctor, 2, x, x, true);
  } else {
    k2 = 1.4 * Math.sqrt(len);
    k2 = k2 > 16 ? 16 : k2 | 0;
    x = x.times(1 / tinyPow(5, k2));
    x = taylorSeries(Ctor, 2, x, x, true);
    var sinh2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20);
    for (; k2--; ) {
      sinh2_x = x.times(x);
      x = x.times(d5.plus(sinh2_x.times(d16.times(sinh2_x).plus(d20))));
    }
  }
  Ctor.precision = pr2;
  Ctor.rounding = rm2;
  return finalise(x, pr2, rm2, true);
};
P.hyperbolicTangent = P.tanh = function() {
  var pr2, rm2, x = this, Ctor = x.constructor;
  if (!x.isFinite()) return new Ctor(x.s);
  if (x.isZero()) return new Ctor(x);
  pr2 = Ctor.precision;
  rm2 = Ctor.rounding;
  Ctor.precision = pr2 + 7;
  Ctor.rounding = 1;
  return divide(x.sinh(), x.cosh(), Ctor.precision = pr2, Ctor.rounding = rm2);
};
P.inverseCosine = P.acos = function() {
  var x = this, Ctor = x.constructor, k2 = x.abs().cmp(1), pr2 = Ctor.precision, rm2 = Ctor.rounding;
  if (k2 !== -1) {
    return k2 === 0 ? x.isNeg() ? getPi(Ctor, pr2, rm2) : new Ctor(0) : new Ctor(NaN);
  }
  if (x.isZero()) return getPi(Ctor, pr2 + 4, rm2).times(0.5);
  Ctor.precision = pr2 + 6;
  Ctor.rounding = 1;
  x = new Ctor(1).minus(x).div(x.plus(1)).sqrt().atan();
  Ctor.precision = pr2;
  Ctor.rounding = rm2;
  return x.times(2);
};
P.inverseHyperbolicCosine = P.acosh = function() {
  var pr2, rm2, x = this, Ctor = x.constructor;
  if (x.lte(1)) return new Ctor(x.eq(1) ? 0 : NaN);
  if (!x.isFinite()) return new Ctor(x);
  pr2 = Ctor.precision;
  rm2 = Ctor.rounding;
  Ctor.precision = pr2 + Math.max(Math.abs(x.e), x.sd()) + 4;
  Ctor.rounding = 1;
  external = false;
  x = x.times(x).minus(1).sqrt().plus(x);
  external = true;
  Ctor.precision = pr2;
  Ctor.rounding = rm2;
  return x.ln();
};
P.inverseHyperbolicSine = P.asinh = function() {
  var pr2, rm2, x = this, Ctor = x.constructor;
  if (!x.isFinite() || x.isZero()) return new Ctor(x);
  pr2 = Ctor.precision;
  rm2 = Ctor.rounding;
  Ctor.precision = pr2 + 2 * Math.max(Math.abs(x.e), x.sd()) + 6;
  Ctor.rounding = 1;
  external = false;
  x = x.times(x).plus(1).sqrt().plus(x);
  external = true;
  Ctor.precision = pr2;
  Ctor.rounding = rm2;
  return x.ln();
};
P.inverseHyperbolicTangent = P.atanh = function() {
  var pr2, rm2, wpr, xsd, x = this, Ctor = x.constructor;
  if (!x.isFinite()) return new Ctor(NaN);
  if (x.e >= 0) return new Ctor(x.abs().eq(1) ? x.s / 0 : x.isZero() ? x : NaN);
  pr2 = Ctor.precision;
  rm2 = Ctor.rounding;
  xsd = x.sd();
  if (Math.max(xsd, pr2) < 2 * -x.e - 1) return finalise(new Ctor(x), pr2, rm2, true);
  Ctor.precision = wpr = xsd - x.e;
  x = divide(x.plus(1), new Ctor(1).minus(x), wpr + pr2, 1);
  Ctor.precision = pr2 + 4;
  Ctor.rounding = 1;
  x = x.ln();
  Ctor.precision = pr2;
  Ctor.rounding = rm2;
  return x.times(0.5);
};
P.inverseSine = P.asin = function() {
  var halfPi, k2, pr2, rm2, x = this, Ctor = x.constructor;
  if (x.isZero()) return new Ctor(x);
  k2 = x.abs().cmp(1);
  pr2 = Ctor.precision;
  rm2 = Ctor.rounding;
  if (k2 !== -1) {
    if (k2 === 0) {
      halfPi = getPi(Ctor, pr2 + 4, rm2).times(0.5);
      halfPi.s = x.s;
      return halfPi;
    }
    return new Ctor(NaN);
  }
  Ctor.precision = pr2 + 6;
  Ctor.rounding = 1;
  x = x.div(new Ctor(1).minus(x.times(x)).sqrt().plus(1)).atan();
  Ctor.precision = pr2;
  Ctor.rounding = rm2;
  return x.times(2);
};
P.inverseTangent = P.atan = function() {
  var i, j2, k2, n, px, t, r, wpr, x2, x = this, Ctor = x.constructor, pr2 = Ctor.precision, rm2 = Ctor.rounding;
  if (!x.isFinite()) {
    if (!x.s) return new Ctor(NaN);
    if (pr2 + 4 <= PI_PRECISION) {
      r = getPi(Ctor, pr2 + 4, rm2).times(0.5);
      r.s = x.s;
      return r;
    }
  } else if (x.isZero()) {
    return new Ctor(x);
  } else if (x.abs().eq(1) && pr2 + 4 <= PI_PRECISION) {
    r = getPi(Ctor, pr2 + 4, rm2).times(0.25);
    r.s = x.s;
    return r;
  }
  Ctor.precision = wpr = pr2 + 10;
  Ctor.rounding = 1;
  k2 = Math.min(28, wpr / LOG_BASE + 2 | 0);
  for (i = k2; i; --i) x = x.div(x.times(x).plus(1).sqrt().plus(1));
  external = false;
  j2 = Math.ceil(wpr / LOG_BASE);
  n = 1;
  x2 = x.times(x);
  r = new Ctor(x);
  px = x;
  for (; i !== -1; ) {
    px = px.times(x2);
    t = r.minus(px.div(n += 2));
    px = px.times(x2);
    r = t.plus(px.div(n += 2));
    if (r.d[j2] !== void 0) for (i = j2; r.d[i] === t.d[i] && i--; ) ;
  }
  if (k2) r = r.times(2 << k2 - 1);
  external = true;
  return finalise(r, Ctor.precision = pr2, Ctor.rounding = rm2, true);
};
P.isFinite = function() {
  return !!this.d;
};
P.isInteger = P.isInt = function() {
  return !!this.d && mathfloor(this.e / LOG_BASE) > this.d.length - 2;
};
P.isNaN = function() {
  return !this.s;
};
P.isNegative = P.isNeg = function() {
  return this.s < 0;
};
P.isPositive = P.isPos = function() {
  return this.s > 0;
};
P.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
P.lessThan = P.lt = function(y) {
  return this.cmp(y) < 0;
};
P.lessThanOrEqualTo = P.lte = function(y) {
  return this.cmp(y) < 1;
};
P.logarithm = P.log = function(base) {
  var isBase10, d, denominator, k2, inf, num, sd2, r, arg = this, Ctor = arg.constructor, pr2 = Ctor.precision, rm2 = Ctor.rounding, guard = 5;
  if (base == null) {
    base = new Ctor(10);
    isBase10 = true;
  } else {
    base = new Ctor(base);
    d = base.d;
    if (base.s < 0 || !d || !d[0] || base.eq(1)) return new Ctor(NaN);
    isBase10 = base.eq(10);
  }
  d = arg.d;
  if (arg.s < 0 || !d || !d[0] || arg.eq(1)) {
    return new Ctor(d && !d[0] ? -1 / 0 : arg.s != 1 ? NaN : d ? 0 : 1 / 0);
  }
  if (isBase10) {
    if (d.length > 1) {
      inf = true;
    } else {
      for (k2 = d[0]; k2 % 10 === 0; ) k2 /= 10;
      inf = k2 !== 1;
    }
  }
  external = false;
  sd2 = pr2 + guard;
  num = naturalLogarithm(arg, sd2);
  denominator = isBase10 ? getLn10(Ctor, sd2 + 10) : naturalLogarithm(base, sd2);
  r = divide(num, denominator, sd2, 1);
  if (checkRoundingDigits(r.d, k2 = pr2, rm2)) {
    do {
      sd2 += 10;
      num = naturalLogarithm(arg, sd2);
      denominator = isBase10 ? getLn10(Ctor, sd2 + 10) : naturalLogarithm(base, sd2);
      r = divide(num, denominator, sd2, 1);
      if (!inf) {
        if (+digitsToString(r.d).slice(k2 + 1, k2 + 15) + 1 == 1e14) {
          r = finalise(r, pr2 + 1, 0);
        }
        break;
      }
    } while (checkRoundingDigits(r.d, k2 += 10, rm2));
  }
  external = true;
  return finalise(r, pr2, rm2);
};
P.minus = P.sub = function(y) {
  var d, e8, i, j2, k2, len, pr2, rm2, xd2, xe2, xLTy, yd2, x = this, Ctor = x.constructor;
  y = new Ctor(y);
  if (!x.d || !y.d) {
    if (!x.s || !y.s) y = new Ctor(NaN);
    else if (x.d) y.s = -y.s;
    else y = new Ctor(y.d || x.s !== y.s ? x : NaN);
    return y;
  }
  if (x.s != y.s) {
    y.s = -y.s;
    return x.plus(y);
  }
  xd2 = x.d;
  yd2 = y.d;
  pr2 = Ctor.precision;
  rm2 = Ctor.rounding;
  if (!xd2[0] || !yd2[0]) {
    if (yd2[0]) y.s = -y.s;
    else if (xd2[0]) y = new Ctor(x);
    else return new Ctor(rm2 === 3 ? -0 : 0);
    return external ? finalise(y, pr2, rm2) : y;
  }
  e8 = mathfloor(y.e / LOG_BASE);
  xe2 = mathfloor(x.e / LOG_BASE);
  xd2 = xd2.slice();
  k2 = xe2 - e8;
  if (k2) {
    xLTy = k2 < 0;
    if (xLTy) {
      d = xd2;
      k2 = -k2;
      len = yd2.length;
    } else {
      d = yd2;
      e8 = xe2;
      len = xd2.length;
    }
    i = Math.max(Math.ceil(pr2 / LOG_BASE), len) + 2;
    if (k2 > i) {
      k2 = i;
      d.length = 1;
    }
    d.reverse();
    for (i = k2; i--; ) d.push(0);
    d.reverse();
  } else {
    i = xd2.length;
    len = yd2.length;
    xLTy = i < len;
    if (xLTy) len = i;
    for (i = 0; i < len; i++) {
      if (xd2[i] != yd2[i]) {
        xLTy = xd2[i] < yd2[i];
        break;
      }
    }
    k2 = 0;
  }
  if (xLTy) {
    d = xd2;
    xd2 = yd2;
    yd2 = d;
    y.s = -y.s;
  }
  len = xd2.length;
  for (i = yd2.length - len; i > 0; --i) xd2[len++] = 0;
  for (i = yd2.length; i > k2; ) {
    if (xd2[--i] < yd2[i]) {
      for (j2 = i; j2 && xd2[--j2] === 0; ) xd2[j2] = BASE - 1;
      --xd2[j2];
      xd2[i] += BASE;
    }
    xd2[i] -= yd2[i];
  }
  for (; xd2[--len] === 0; ) xd2.pop();
  for (; xd2[0] === 0; xd2.shift()) --e8;
  if (!xd2[0]) return new Ctor(rm2 === 3 ? -0 : 0);
  y.d = xd2;
  y.e = getBase10Exponent(xd2, e8);
  return external ? finalise(y, pr2, rm2) : y;
};
P.modulo = P.mod = function(y) {
  var q, x = this, Ctor = x.constructor;
  y = new Ctor(y);
  if (!x.d || !y.s || y.d && !y.d[0]) return new Ctor(NaN);
  if (!y.d || x.d && !x.d[0]) {
    return finalise(new Ctor(x), Ctor.precision, Ctor.rounding);
  }
  external = false;
  if (Ctor.modulo == 9) {
    q = divide(x, y.abs(), 0, 3, 1);
    q.s *= y.s;
  } else {
    q = divide(x, y, 0, Ctor.modulo, 1);
  }
  q = q.times(y);
  external = true;
  return x.minus(q);
};
P.naturalExponential = P.exp = function() {
  return naturalExponential(this);
};
P.naturalLogarithm = P.ln = function() {
  return naturalLogarithm(this);
};
P.negated = P.neg = function() {
  var x = new this.constructor(this);
  x.s = -x.s;
  return finalise(x);
};
P.plus = P.add = function(y) {
  var carry, d, e8, i, k2, len, pr2, rm2, xd2, yd2, x = this, Ctor = x.constructor;
  y = new Ctor(y);
  if (!x.d || !y.d) {
    if (!x.s || !y.s) y = new Ctor(NaN);
    else if (!x.d) y = new Ctor(y.d || x.s === y.s ? x : NaN);
    return y;
  }
  if (x.s != y.s) {
    y.s = -y.s;
    return x.minus(y);
  }
  xd2 = x.d;
  yd2 = y.d;
  pr2 = Ctor.precision;
  rm2 = Ctor.rounding;
  if (!xd2[0] || !yd2[0]) {
    if (!yd2[0]) y = new Ctor(x);
    return external ? finalise(y, pr2, rm2) : y;
  }
  k2 = mathfloor(x.e / LOG_BASE);
  e8 = mathfloor(y.e / LOG_BASE);
  xd2 = xd2.slice();
  i = k2 - e8;
  if (i) {
    if (i < 0) {
      d = xd2;
      i = -i;
      len = yd2.length;
    } else {
      d = yd2;
      e8 = k2;
      len = xd2.length;
    }
    k2 = Math.ceil(pr2 / LOG_BASE);
    len = k2 > len ? k2 + 1 : len + 1;
    if (i > len) {
      i = len;
      d.length = 1;
    }
    d.reverse();
    for (; i--; ) d.push(0);
    d.reverse();
  }
  len = xd2.length;
  i = yd2.length;
  if (len - i < 0) {
    i = len;
    d = yd2;
    yd2 = xd2;
    xd2 = d;
  }
  for (carry = 0; i; ) {
    carry = (xd2[--i] = xd2[i] + yd2[i] + carry) / BASE | 0;
    xd2[i] %= BASE;
  }
  if (carry) {
    xd2.unshift(carry);
    ++e8;
  }
  for (len = xd2.length; xd2[--len] == 0; ) xd2.pop();
  y.d = xd2;
  y.e = getBase10Exponent(xd2, e8);
  return external ? finalise(y, pr2, rm2) : y;
};
P.precision = P.sd = function(z) {
  var k2, x = this;
  if (z !== void 0 && z !== !!z && z !== 1 && z !== 0) throw Error(invalidArgument + z);
  if (x.d) {
    k2 = getPrecision(x.d);
    if (z && x.e + 1 > k2) k2 = x.e + 1;
  } else {
    k2 = NaN;
  }
  return k2;
};
P.round = function() {
  var x = this, Ctor = x.constructor;
  return finalise(new Ctor(x), x.e + 1, Ctor.rounding);
};
P.sine = P.sin = function() {
  var pr2, rm2, x = this, Ctor = x.constructor;
  if (!x.isFinite()) return new Ctor(NaN);
  if (x.isZero()) return new Ctor(x);
  pr2 = Ctor.precision;
  rm2 = Ctor.rounding;
  Ctor.precision = pr2 + Math.max(x.e, x.sd()) + LOG_BASE;
  Ctor.rounding = 1;
  x = sine(Ctor, toLessThanHalfPi(Ctor, x));
  Ctor.precision = pr2;
  Ctor.rounding = rm2;
  return finalise(quadrant > 2 ? x.neg() : x, pr2, rm2, true);
};
P.squareRoot = P.sqrt = function() {
  var m, n, sd2, r, rep, t, x = this, d = x.d, e8 = x.e, s = x.s, Ctor = x.constructor;
  if (s !== 1 || !d || !d[0]) {
    return new Ctor(!s || s < 0 && (!d || d[0]) ? NaN : d ? x : 1 / 0);
  }
  external = false;
  s = Math.sqrt(+x);
  if (s == 0 || s == 1 / 0) {
    n = digitsToString(d);
    if ((n.length + e8) % 2 == 0) n += "0";
    s = Math.sqrt(n);
    e8 = mathfloor((e8 + 1) / 2) - (e8 < 0 || e8 % 2);
    if (s == 1 / 0) {
      n = "5e" + e8;
    } else {
      n = s.toExponential();
      n = n.slice(0, n.indexOf("e") + 1) + e8;
    }
    r = new Ctor(n);
  } else {
    r = new Ctor(s.toString());
  }
  sd2 = (e8 = Ctor.precision) + 3;
  for (; ; ) {
    t = r;
    r = t.plus(divide(x, t, sd2 + 2, 1)).times(0.5);
    if (digitsToString(t.d).slice(0, sd2) === (n = digitsToString(r.d)).slice(0, sd2)) {
      n = n.slice(sd2 - 3, sd2 + 1);
      if (n == "9999" || !rep && n == "4999") {
        if (!rep) {
          finalise(t, e8 + 1, 0);
          if (t.times(t).eq(x)) {
            r = t;
            break;
          }
        }
        sd2 += 4;
        rep = 1;
      } else {
        if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
          finalise(r, e8 + 1, 1);
          m = !r.times(r).eq(x);
        }
        break;
      }
    }
  }
  external = true;
  return finalise(r, e8, Ctor.rounding, m);
};
P.tangent = P.tan = function() {
  var pr2, rm2, x = this, Ctor = x.constructor;
  if (!x.isFinite()) return new Ctor(NaN);
  if (x.isZero()) return new Ctor(x);
  pr2 = Ctor.precision;
  rm2 = Ctor.rounding;
  Ctor.precision = pr2 + 10;
  Ctor.rounding = 1;
  x = x.sin();
  x.s = 1;
  x = divide(x, new Ctor(1).minus(x.times(x)).sqrt(), pr2 + 10, 0);
  Ctor.precision = pr2;
  Ctor.rounding = rm2;
  return finalise(quadrant == 2 || quadrant == 4 ? x.neg() : x, pr2, rm2, true);
};
P.times = P.mul = function(y) {
  var carry, e8, i, k2, r, rL, t, xdL, ydL, x = this, Ctor = x.constructor, xd2 = x.d, yd2 = (y = new Ctor(y)).d;
  y.s *= x.s;
  if (!xd2 || !xd2[0] || !yd2 || !yd2[0]) {
    return new Ctor(!y.s || xd2 && !xd2[0] && !yd2 || yd2 && !yd2[0] && !xd2 ? NaN : !xd2 || !yd2 ? y.s / 0 : y.s * 0);
  }
  e8 = mathfloor(x.e / LOG_BASE) + mathfloor(y.e / LOG_BASE);
  xdL = xd2.length;
  ydL = yd2.length;
  if (xdL < ydL) {
    r = xd2;
    xd2 = yd2;
    yd2 = r;
    rL = xdL;
    xdL = ydL;
    ydL = rL;
  }
  r = [];
  rL = xdL + ydL;
  for (i = rL; i--; ) r.push(0);
  for (i = ydL; --i >= 0; ) {
    carry = 0;
    for (k2 = xdL + i; k2 > i; ) {
      t = r[k2] + yd2[i] * xd2[k2 - i - 1] + carry;
      r[k2--] = t % BASE | 0;
      carry = t / BASE | 0;
    }
    r[k2] = (r[k2] + carry) % BASE | 0;
  }
  for (; !r[--rL]; ) r.pop();
  if (carry) ++e8;
  else r.shift();
  y.d = r;
  y.e = getBase10Exponent(r, e8);
  return external ? finalise(y, Ctor.precision, Ctor.rounding) : y;
};
P.toBinary = function(sd2, rm2) {
  return toStringBinary(this, 2, sd2, rm2);
};
P.toDecimalPlaces = P.toDP = function(dp2, rm2) {
  var x = this, Ctor = x.constructor;
  x = new Ctor(x);
  if (dp2 === void 0) return x;
  checkInt32(dp2, 0, MAX_DIGITS);
  if (rm2 === void 0) rm2 = Ctor.rounding;
  else checkInt32(rm2, 0, 8);
  return finalise(x, dp2 + x.e + 1, rm2);
};
P.toExponential = function(dp2, rm2) {
  var str, x = this, Ctor = x.constructor;
  if (dp2 === void 0) {
    str = finiteToString(x, true);
  } else {
    checkInt32(dp2, 0, MAX_DIGITS);
    if (rm2 === void 0) rm2 = Ctor.rounding;
    else checkInt32(rm2, 0, 8);
    x = finalise(new Ctor(x), dp2 + 1, rm2);
    str = finiteToString(x, true, dp2 + 1);
  }
  return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.toFixed = function(dp2, rm2) {
  var str, y, x = this, Ctor = x.constructor;
  if (dp2 === void 0) {
    str = finiteToString(x);
  } else {
    checkInt32(dp2, 0, MAX_DIGITS);
    if (rm2 === void 0) rm2 = Ctor.rounding;
    else checkInt32(rm2, 0, 8);
    y = finalise(new Ctor(x), dp2 + x.e + 1, rm2);
    str = finiteToString(y, false, dp2 + y.e + 1);
  }
  return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.toFraction = function(maxD) {
  var d, d0, d1, d2, e8, k2, n, n0, n1, pr2, q, r, x = this, xd2 = x.d, Ctor = x.constructor;
  if (!xd2) return new Ctor(x);
  n1 = d0 = new Ctor(1);
  d1 = n0 = new Ctor(0);
  d = new Ctor(d1);
  e8 = d.e = getPrecision(xd2) - x.e - 1;
  k2 = e8 % LOG_BASE;
  d.d[0] = mathpow(10, k2 < 0 ? LOG_BASE + k2 : k2);
  if (maxD == null) {
    maxD = e8 > 0 ? d : n1;
  } else {
    n = new Ctor(maxD);
    if (!n.isInt() || n.lt(n1)) throw Error(invalidArgument + n);
    maxD = n.gt(d) ? e8 > 0 ? d : n1 : n;
  }
  external = false;
  n = new Ctor(digitsToString(xd2));
  pr2 = Ctor.precision;
  Ctor.precision = e8 = xd2.length * LOG_BASE * 2;
  for (; ; ) {
    q = divide(n, d, 0, 1, 1);
    d2 = d0.plus(q.times(d1));
    if (d2.cmp(maxD) == 1) break;
    d0 = d1;
    d1 = d2;
    d2 = n1;
    n1 = n0.plus(q.times(d2));
    n0 = d2;
    d2 = d;
    d = n.minus(q.times(d2));
    n = d2;
  }
  d2 = divide(maxD.minus(d0), d1, 0, 1, 1);
  n0 = n0.plus(d2.times(n1));
  d0 = d0.plus(d2.times(d1));
  n0.s = n1.s = x.s;
  r = divide(n1, d1, e8, 1).minus(x).abs().cmp(divide(n0, d0, e8, 1).minus(x).abs()) < 1 ? [n1, d1] : [n0, d0];
  Ctor.precision = pr2;
  external = true;
  return r;
};
P.toHexadecimal = P.toHex = function(sd2, rm2) {
  return toStringBinary(this, 16, sd2, rm2);
};
P.toNearest = function(y, rm2) {
  var x = this, Ctor = x.constructor;
  x = new Ctor(x);
  if (y == null) {
    if (!x.d) return x;
    y = new Ctor(1);
    rm2 = Ctor.rounding;
  } else {
    y = new Ctor(y);
    if (rm2 === void 0) {
      rm2 = Ctor.rounding;
    } else {
      checkInt32(rm2, 0, 8);
    }
    if (!x.d) return y.s ? x : y;
    if (!y.d) {
      if (y.s) y.s = x.s;
      return y;
    }
  }
  if (y.d[0]) {
    external = false;
    x = divide(x, y, 0, rm2, 1).times(y);
    external = true;
    finalise(x);
  } else {
    y.s = x.s;
    x = y;
  }
  return x;
};
P.toNumber = function() {
  return +this;
};
P.toOctal = function(sd2, rm2) {
  return toStringBinary(this, 8, sd2, rm2);
};
P.toPower = P.pow = function(y) {
  var e8, k2, pr2, r, rm2, s, x = this, Ctor = x.constructor, yn2 = +(y = new Ctor(y));
  if (!x.d || !y.d || !x.d[0] || !y.d[0]) return new Ctor(mathpow(+x, yn2));
  x = new Ctor(x);
  if (x.eq(1)) return x;
  pr2 = Ctor.precision;
  rm2 = Ctor.rounding;
  if (y.eq(1)) return finalise(x, pr2, rm2);
  e8 = mathfloor(y.e / LOG_BASE);
  if (e8 >= y.d.length - 1 && (k2 = yn2 < 0 ? -yn2 : yn2) <= MAX_SAFE_INTEGER) {
    r = intPow(Ctor, x, k2, pr2);
    return y.s < 0 ? new Ctor(1).div(r) : finalise(r, pr2, rm2);
  }
  s = x.s;
  if (s < 0) {
    if (e8 < y.d.length - 1) return new Ctor(NaN);
    if ((y.d[e8] & 1) == 0) s = 1;
    if (x.e == 0 && x.d[0] == 1 && x.d.length == 1) {
      x.s = s;
      return x;
    }
  }
  k2 = mathpow(+x, yn2);
  e8 = k2 == 0 || !isFinite(k2) ? mathfloor(yn2 * (Math.log("0." + digitsToString(x.d)) / Math.LN10 + x.e + 1)) : new Ctor(k2 + "").e;
  if (e8 > Ctor.maxE + 1 || e8 < Ctor.minE - 1) return new Ctor(e8 > 0 ? s / 0 : 0);
  external = false;
  Ctor.rounding = x.s = 1;
  k2 = Math.min(12, (e8 + "").length);
  r = naturalExponential(y.times(naturalLogarithm(x, pr2 + k2)), pr2);
  if (r.d) {
    r = finalise(r, pr2 + 5, 1);
    if (checkRoundingDigits(r.d, pr2, rm2)) {
      e8 = pr2 + 10;
      r = finalise(naturalExponential(y.times(naturalLogarithm(x, e8 + k2)), e8), e8 + 5, 1);
      if (+digitsToString(r.d).slice(pr2 + 1, pr2 + 15) + 1 == 1e14) {
        r = finalise(r, pr2 + 1, 0);
      }
    }
  }
  r.s = s;
  external = true;
  Ctor.rounding = rm2;
  return finalise(r, pr2, rm2);
};
P.toPrecision = function(sd2, rm2) {
  var str, x = this, Ctor = x.constructor;
  if (sd2 === void 0) {
    str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
  } else {
    checkInt32(sd2, 1, MAX_DIGITS);
    if (rm2 === void 0) rm2 = Ctor.rounding;
    else checkInt32(rm2, 0, 8);
    x = finalise(new Ctor(x), sd2, rm2);
    str = finiteToString(x, sd2 <= x.e || x.e <= Ctor.toExpNeg, sd2);
  }
  return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.toSignificantDigits = P.toSD = function(sd2, rm2) {
  var x = this, Ctor = x.constructor;
  if (sd2 === void 0) {
    sd2 = Ctor.precision;
    rm2 = Ctor.rounding;
  } else {
    checkInt32(sd2, 1, MAX_DIGITS);
    if (rm2 === void 0) rm2 = Ctor.rounding;
    else checkInt32(rm2, 0, 8);
  }
  return finalise(new Ctor(x), sd2, rm2);
};
P.toString = function() {
  var x = this, Ctor = x.constructor, str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
  return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.truncated = P.trunc = function() {
  return finalise(new this.constructor(this), this.e + 1, 1);
};
P.valueOf = P.toJSON = function() {
  var x = this, Ctor = x.constructor, str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
  return x.isNeg() ? "-" + str : str;
};
function digitsToString(d) {
  var i, k2, ws2, indexOfLastWord = d.length - 1, str = "", w = d[0];
  if (indexOfLastWord > 0) {
    str += w;
    for (i = 1; i < indexOfLastWord; i++) {
      ws2 = d[i] + "";
      k2 = LOG_BASE - ws2.length;
      if (k2) str += getZeroString(k2);
      str += ws2;
    }
    w = d[i];
    ws2 = w + "";
    k2 = LOG_BASE - ws2.length;
    if (k2) str += getZeroString(k2);
  } else if (w === 0) {
    return "0";
  }
  for (; w % 10 === 0; ) w /= 10;
  return str + w;
}
function checkInt32(i, min2, max2) {
  if (i !== ~~i || i < min2 || i > max2) {
    throw Error(invalidArgument + i);
  }
}
function checkRoundingDigits(d, i, rm2, repeating) {
  var di2, k2, r, rd2;
  for (k2 = d[0]; k2 >= 10; k2 /= 10) --i;
  if (--i < 0) {
    i += LOG_BASE;
    di2 = 0;
  } else {
    di2 = Math.ceil((i + 1) / LOG_BASE);
    i %= LOG_BASE;
  }
  k2 = mathpow(10, LOG_BASE - i);
  rd2 = d[di2] % k2 | 0;
  if (repeating == null) {
    if (i < 3) {
      if (i == 0) rd2 = rd2 / 100 | 0;
      else if (i == 1) rd2 = rd2 / 10 | 0;
      r = rm2 < 4 && rd2 == 99999 || rm2 > 3 && rd2 == 49999 || rd2 == 5e4 || rd2 == 0;
    } else {
      r = (rm2 < 4 && rd2 + 1 == k2 || rm2 > 3 && rd2 + 1 == k2 / 2) && (d[di2 + 1] / k2 / 100 | 0) == mathpow(10, i - 2) - 1 || (rd2 == k2 / 2 || rd2 == 0) && (d[di2 + 1] / k2 / 100 | 0) == 0;
    }
  } else {
    if (i < 4) {
      if (i == 0) rd2 = rd2 / 1e3 | 0;
      else if (i == 1) rd2 = rd2 / 100 | 0;
      else if (i == 2) rd2 = rd2 / 10 | 0;
      r = (repeating || rm2 < 4) && rd2 == 9999 || !repeating && rm2 > 3 && rd2 == 4999;
    } else {
      r = ((repeating || rm2 < 4) && rd2 + 1 == k2 || !repeating && rm2 > 3 && rd2 + 1 == k2 / 2) && (d[di2 + 1] / k2 / 1e3 | 0) == mathpow(10, i - 3) - 1;
    }
  }
  return r;
}
function convertBase(str, baseIn, baseOut) {
  var j2, arr = [0], arrL, i = 0, strL = str.length;
  for (; i < strL; ) {
    for (arrL = arr.length; arrL--; ) arr[arrL] *= baseIn;
    arr[0] += NUMERALS.indexOf(str.charAt(i++));
    for (j2 = 0; j2 < arr.length; j2++) {
      if (arr[j2] > baseOut - 1) {
        if (arr[j2 + 1] === void 0) arr[j2 + 1] = 0;
        arr[j2 + 1] += arr[j2] / baseOut | 0;
        arr[j2] %= baseOut;
      }
    }
  }
  return arr.reverse();
}
function cosine(Ctor, x) {
  var k2, len, y;
  if (x.isZero()) return x;
  len = x.d.length;
  if (len < 32) {
    k2 = Math.ceil(len / 3);
    y = (1 / tinyPow(4, k2)).toString();
  } else {
    k2 = 16;
    y = "2.3283064365386962890625e-10";
  }
  Ctor.precision += k2;
  x = taylorSeries(Ctor, 1, x.times(y), new Ctor(1));
  for (var i = k2; i--; ) {
    var cos2x = x.times(x);
    x = cos2x.times(cos2x).minus(cos2x).times(8).plus(1);
  }
  Ctor.precision -= k2;
  return x;
}
var divide = /* @__PURE__ */ function() {
  function multiplyInteger(x, k2, base) {
    var temp, carry = 0, i = x.length;
    for (x = x.slice(); i--; ) {
      temp = x[i] * k2 + carry;
      x[i] = temp % base | 0;
      carry = temp / base | 0;
    }
    if (carry) x.unshift(carry);
    return x;
  }
  function compare(a, b, aL, bL) {
    var i, r;
    if (aL != bL) {
      r = aL > bL ? 1 : -1;
    } else {
      for (i = r = 0; i < aL; i++) {
        if (a[i] != b[i]) {
          r = a[i] > b[i] ? 1 : -1;
          break;
        }
      }
    }
    return r;
  }
  function subtract(a, b, aL, base) {
    var i = 0;
    for (; aL--; ) {
      a[aL] -= i;
      i = a[aL] < b[aL] ? 1 : 0;
      a[aL] = i * base + a[aL] - b[aL];
    }
    for (; !a[0] && a.length > 1; ) a.shift();
  }
  return function(x, y, pr2, rm2, dp2, base) {
    var cmp, e8, i, k2, logBase, more, prod, prodL, q, qd2, rem, remL, rem0, sd2, t, xi2, xL, yd0, yL, yz, Ctor = x.constructor, sign2 = x.s == y.s ? 1 : -1, xd2 = x.d, yd2 = y.d;
    if (!xd2 || !xd2[0] || !yd2 || !yd2[0]) {
      return new Ctor(
        // Return NaN if either NaN, or both Infinity or 0.
        !x.s || !y.s || (xd2 ? yd2 && xd2[0] == yd2[0] : !yd2) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          xd2 && xd2[0] == 0 || !yd2 ? sign2 * 0 : sign2 / 0
        )
      );
    }
    if (base) {
      logBase = 1;
      e8 = x.e - y.e;
    } else {
      base = BASE;
      logBase = LOG_BASE;
      e8 = mathfloor(x.e / logBase) - mathfloor(y.e / logBase);
    }
    yL = yd2.length;
    xL = xd2.length;
    q = new Ctor(sign2);
    qd2 = q.d = [];
    for (i = 0; yd2[i] == (xd2[i] || 0); i++) ;
    if (yd2[i] > (xd2[i] || 0)) e8--;
    if (pr2 == null) {
      sd2 = pr2 = Ctor.precision;
      rm2 = Ctor.rounding;
    } else if (dp2) {
      sd2 = pr2 + (x.e - y.e) + 1;
    } else {
      sd2 = pr2;
    }
    if (sd2 < 0) {
      qd2.push(1);
      more = true;
    } else {
      sd2 = sd2 / logBase + 2 | 0;
      i = 0;
      if (yL == 1) {
        k2 = 0;
        yd2 = yd2[0];
        sd2++;
        for (; (i < xL || k2) && sd2--; i++) {
          t = k2 * base + (xd2[i] || 0);
          qd2[i] = t / yd2 | 0;
          k2 = t % yd2 | 0;
        }
        more = k2 || i < xL;
      } else {
        k2 = base / (yd2[0] + 1) | 0;
        if (k2 > 1) {
          yd2 = multiplyInteger(yd2, k2, base);
          xd2 = multiplyInteger(xd2, k2, base);
          yL = yd2.length;
          xL = xd2.length;
        }
        xi2 = yL;
        rem = xd2.slice(0, yL);
        remL = rem.length;
        for (; remL < yL; ) rem[remL++] = 0;
        yz = yd2.slice();
        yz.unshift(0);
        yd0 = yd2[0];
        if (yd2[1] >= base / 2) ++yd0;
        do {
          k2 = 0;
          cmp = compare(yd2, rem, yL, remL);
          if (cmp < 0) {
            rem0 = rem[0];
            if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);
            k2 = rem0 / yd0 | 0;
            if (k2 > 1) {
              if (k2 >= base) k2 = base - 1;
              prod = multiplyInteger(yd2, k2, base);
              prodL = prod.length;
              remL = rem.length;
              cmp = compare(prod, rem, prodL, remL);
              if (cmp == 1) {
                k2--;
                subtract(prod, yL < prodL ? yz : yd2, prodL, base);
              }
            } else {
              if (k2 == 0) cmp = k2 = 1;
              prod = yd2.slice();
            }
            prodL = prod.length;
            if (prodL < remL) prod.unshift(0);
            subtract(rem, prod, remL, base);
            if (cmp == -1) {
              remL = rem.length;
              cmp = compare(yd2, rem, yL, remL);
              if (cmp < 1) {
                k2++;
                subtract(rem, yL < remL ? yz : yd2, remL, base);
              }
            }
            remL = rem.length;
          } else if (cmp === 0) {
            k2++;
            rem = [0];
          }
          qd2[i++] = k2;
          if (cmp && rem[0]) {
            rem[remL++] = xd2[xi2] || 0;
          } else {
            rem = [xd2[xi2]];
            remL = 1;
          }
        } while ((xi2++ < xL || rem[0] !== void 0) && sd2--);
        more = rem[0] !== void 0;
      }
      if (!qd2[0]) qd2.shift();
    }
    if (logBase == 1) {
      q.e = e8;
      inexact = more;
    } else {
      for (i = 1, k2 = qd2[0]; k2 >= 10; k2 /= 10) i++;
      q.e = i + e8 * logBase - 1;
      finalise(q, dp2 ? pr2 + q.e + 1 : pr2, rm2, more);
    }
    return q;
  };
}();
function finalise(x, sd2, rm2, isTruncated) {
  var digits, i, j2, k2, rd2, roundUp, w, xd2, xdi, Ctor = x.constructor;
  out: if (sd2 != null) {
    xd2 = x.d;
    if (!xd2) return x;
    for (digits = 1, k2 = xd2[0]; k2 >= 10; k2 /= 10) digits++;
    i = sd2 - digits;
    if (i < 0) {
      i += LOG_BASE;
      j2 = sd2;
      w = xd2[xdi = 0];
      rd2 = w / mathpow(10, digits - j2 - 1) % 10 | 0;
    } else {
      xdi = Math.ceil((i + 1) / LOG_BASE);
      k2 = xd2.length;
      if (xdi >= k2) {
        if (isTruncated) {
          for (; k2++ <= xdi; ) xd2.push(0);
          w = rd2 = 0;
          digits = 1;
          i %= LOG_BASE;
          j2 = i - LOG_BASE + 1;
        } else {
          break out;
        }
      } else {
        w = k2 = xd2[xdi];
        for (digits = 1; k2 >= 10; k2 /= 10) digits++;
        i %= LOG_BASE;
        j2 = i - LOG_BASE + digits;
        rd2 = j2 < 0 ? 0 : w / mathpow(10, digits - j2 - 1) % 10 | 0;
      }
    }
    isTruncated = isTruncated || sd2 < 0 || xd2[xdi + 1] !== void 0 || (j2 < 0 ? w : w % mathpow(10, digits - j2 - 1));
    roundUp = rm2 < 4 ? (rd2 || isTruncated) && (rm2 == 0 || rm2 == (x.s < 0 ? 3 : 2)) : rd2 > 5 || rd2 == 5 && (rm2 == 4 || isTruncated || rm2 == 6 && // Check whether the digit to the left of the rounding digit is odd.
    (i > 0 ? j2 > 0 ? w / mathpow(10, digits - j2) : 0 : xd2[xdi - 1]) % 10 & 1 || rm2 == (x.s < 0 ? 8 : 7));
    if (sd2 < 1 || !xd2[0]) {
      xd2.length = 0;
      if (roundUp) {
        sd2 -= x.e + 1;
        xd2[0] = mathpow(10, (LOG_BASE - sd2 % LOG_BASE) % LOG_BASE);
        x.e = -sd2 || 0;
      } else {
        xd2[0] = x.e = 0;
      }
      return x;
    }
    if (i == 0) {
      xd2.length = xdi;
      k2 = 1;
      xdi--;
    } else {
      xd2.length = xdi + 1;
      k2 = mathpow(10, LOG_BASE - i);
      xd2[xdi] = j2 > 0 ? (w / mathpow(10, digits - j2) % mathpow(10, j2) | 0) * k2 : 0;
    }
    if (roundUp) {
      for (; ; ) {
        if (xdi == 0) {
          for (i = 1, j2 = xd2[0]; j2 >= 10; j2 /= 10) i++;
          j2 = xd2[0] += k2;
          for (k2 = 1; j2 >= 10; j2 /= 10) k2++;
          if (i != k2) {
            x.e++;
            if (xd2[0] == BASE) xd2[0] = 1;
          }
          break;
        } else {
          xd2[xdi] += k2;
          if (xd2[xdi] != BASE) break;
          xd2[xdi--] = 0;
          k2 = 1;
        }
      }
    }
    for (i = xd2.length; xd2[--i] === 0; ) xd2.pop();
  }
  if (external) {
    if (x.e > Ctor.maxE) {
      x.d = null;
      x.e = NaN;
    } else if (x.e < Ctor.minE) {
      x.e = 0;
      x.d = [0];
    }
  }
  return x;
}
function finiteToString(x, isExp, sd2) {
  if (!x.isFinite()) return nonFiniteToString(x);
  var k2, e8 = x.e, str = digitsToString(x.d), len = str.length;
  if (isExp) {
    if (sd2 && (k2 = sd2 - len) > 0) {
      str = str.charAt(0) + "." + str.slice(1) + getZeroString(k2);
    } else if (len > 1) {
      str = str.charAt(0) + "." + str.slice(1);
    }
    str = str + (x.e < 0 ? "e" : "e+") + x.e;
  } else if (e8 < 0) {
    str = "0." + getZeroString(-e8 - 1) + str;
    if (sd2 && (k2 = sd2 - len) > 0) str += getZeroString(k2);
  } else if (e8 >= len) {
    str += getZeroString(e8 + 1 - len);
    if (sd2 && (k2 = sd2 - e8 - 1) > 0) str = str + "." + getZeroString(k2);
  } else {
    if ((k2 = e8 + 1) < len) str = str.slice(0, k2) + "." + str.slice(k2);
    if (sd2 && (k2 = sd2 - len) > 0) {
      if (e8 + 1 === len) str += ".";
      str += getZeroString(k2);
    }
  }
  return str;
}
function getBase10Exponent(digits, e8) {
  var w = digits[0];
  for (e8 *= LOG_BASE; w >= 10; w /= 10) e8++;
  return e8;
}
function getLn10(Ctor, sd2, pr2) {
  if (sd2 > LN10_PRECISION) {
    external = true;
    if (pr2) Ctor.precision = pr2;
    throw Error(precisionLimitExceeded);
  }
  return finalise(new Ctor(LN10), sd2, 1, true);
}
function getPi(Ctor, sd2, rm2) {
  if (sd2 > PI_PRECISION) throw Error(precisionLimitExceeded);
  return finalise(new Ctor(PI), sd2, rm2, true);
}
function getPrecision(digits) {
  var w = digits.length - 1, len = w * LOG_BASE + 1;
  w = digits[w];
  if (w) {
    for (; w % 10 == 0; w /= 10) len--;
    for (w = digits[0]; w >= 10; w /= 10) len++;
  }
  return len;
}
function getZeroString(k2) {
  var zs2 = "";
  for (; k2--; ) zs2 += "0";
  return zs2;
}
function intPow(Ctor, x, n, pr2) {
  var isTruncated, r = new Ctor(1), k2 = Math.ceil(pr2 / LOG_BASE + 4);
  external = false;
  for (; ; ) {
    if (n % 2) {
      r = r.times(x);
      if (truncate(r.d, k2)) isTruncated = true;
    }
    n = mathfloor(n / 2);
    if (n === 0) {
      n = r.d.length - 1;
      if (isTruncated && r.d[n] === 0) ++r.d[n];
      break;
    }
    x = x.times(x);
    truncate(x.d, k2);
  }
  external = true;
  return r;
}
function isOdd(n) {
  return n.d[n.d.length - 1] & 1;
}
function maxOrMin(Ctor, args, n) {
  var k2, y, x = new Ctor(args[0]), i = 0;
  for (; ++i < args.length; ) {
    y = new Ctor(args[i]);
    if (!y.s) {
      x = y;
      break;
    }
    k2 = x.cmp(y);
    if (k2 === n || k2 === 0 && x.s === n) {
      x = y;
    }
  }
  return x;
}
function naturalExponential(x, sd2) {
  var denominator, guard, j2, pow2, sum2, t, wpr, rep = 0, i = 0, k2 = 0, Ctor = x.constructor, rm2 = Ctor.rounding, pr2 = Ctor.precision;
  if (!x.d || !x.d[0] || x.e > 17) {
    return new Ctor(x.d ? !x.d[0] ? 1 : x.s < 0 ? 0 : 1 / 0 : x.s ? x.s < 0 ? 0 : x : 0 / 0);
  }
  if (sd2 == null) {
    external = false;
    wpr = pr2;
  } else {
    wpr = sd2;
  }
  t = new Ctor(0.03125);
  while (x.e > -2) {
    x = x.times(t);
    k2 += 5;
  }
  guard = Math.log(mathpow(2, k2)) / Math.LN10 * 2 + 5 | 0;
  wpr += guard;
  denominator = pow2 = sum2 = new Ctor(1);
  Ctor.precision = wpr;
  for (; ; ) {
    pow2 = finalise(pow2.times(x), wpr, 1);
    denominator = denominator.times(++i);
    t = sum2.plus(divide(pow2, denominator, wpr, 1));
    if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum2.d).slice(0, wpr)) {
      j2 = k2;
      while (j2--) sum2 = finalise(sum2.times(sum2), wpr, 1);
      if (sd2 == null) {
        if (rep < 3 && checkRoundingDigits(sum2.d, wpr - guard, rm2, rep)) {
          Ctor.precision = wpr += 10;
          denominator = pow2 = t = new Ctor(1);
          i = 0;
          rep++;
        } else {
          return finalise(sum2, Ctor.precision = pr2, rm2, external = true);
        }
      } else {
        Ctor.precision = pr2;
        return sum2;
      }
    }
    sum2 = t;
  }
}
function naturalLogarithm(y, sd2) {
  var c, c0, denominator, e8, numerator, rep, sum2, t, wpr, x1, x2, n = 1, guard = 10, x = y, xd2 = x.d, Ctor = x.constructor, rm2 = Ctor.rounding, pr2 = Ctor.precision;
  if (x.s < 0 || !xd2 || !xd2[0] || !x.e && xd2[0] == 1 && xd2.length == 1) {
    return new Ctor(xd2 && !xd2[0] ? -1 / 0 : x.s != 1 ? NaN : xd2 ? 0 : x);
  }
  if (sd2 == null) {
    external = false;
    wpr = pr2;
  } else {
    wpr = sd2;
  }
  Ctor.precision = wpr += guard;
  c = digitsToString(xd2);
  c0 = c.charAt(0);
  if (Math.abs(e8 = x.e) < 15e14) {
    while (c0 < 7 && c0 != 1 || c0 == 1 && c.charAt(1) > 3) {
      x = x.times(y);
      c = digitsToString(x.d);
      c0 = c.charAt(0);
      n++;
    }
    e8 = x.e;
    if (c0 > 1) {
      x = new Ctor("0." + c);
      e8++;
    } else {
      x = new Ctor(c0 + "." + c.slice(1));
    }
  } else {
    t = getLn10(Ctor, wpr + 2, pr2).times(e8 + "");
    x = naturalLogarithm(new Ctor(c0 + "." + c.slice(1)), wpr - guard).plus(t);
    Ctor.precision = pr2;
    return sd2 == null ? finalise(x, pr2, rm2, external = true) : x;
  }
  x1 = x;
  sum2 = numerator = x = divide(x.minus(1), x.plus(1), wpr, 1);
  x2 = finalise(x.times(x), wpr, 1);
  denominator = 3;
  for (; ; ) {
    numerator = finalise(numerator.times(x2), wpr, 1);
    t = sum2.plus(divide(numerator, new Ctor(denominator), wpr, 1));
    if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum2.d).slice(0, wpr)) {
      sum2 = sum2.times(2);
      if (e8 !== 0) sum2 = sum2.plus(getLn10(Ctor, wpr + 2, pr2).times(e8 + ""));
      sum2 = divide(sum2, new Ctor(n), wpr, 1);
      if (sd2 == null) {
        if (checkRoundingDigits(sum2.d, wpr - guard, rm2, rep)) {
          Ctor.precision = wpr += guard;
          t = numerator = x = divide(x1.minus(1), x1.plus(1), wpr, 1);
          x2 = finalise(x.times(x), wpr, 1);
          denominator = rep = 1;
        } else {
          return finalise(sum2, Ctor.precision = pr2, rm2, external = true);
        }
      } else {
        Ctor.precision = pr2;
        return sum2;
      }
    }
    sum2 = t;
    denominator += 2;
  }
}
function nonFiniteToString(x) {
  return String(x.s * x.s / 0);
}
function parseDecimal(x, str) {
  var e8, i, len;
  if ((e8 = str.indexOf(".")) > -1) str = str.replace(".", "");
  if ((i = str.search(/e/i)) > 0) {
    if (e8 < 0) e8 = i;
    e8 += +str.slice(i + 1);
    str = str.substring(0, i);
  } else if (e8 < 0) {
    e8 = str.length;
  }
  for (i = 0; str.charCodeAt(i) === 48; i++) ;
  for (len = str.length; str.charCodeAt(len - 1) === 48; --len) ;
  str = str.slice(i, len);
  if (str) {
    len -= i;
    x.e = e8 = e8 - i - 1;
    x.d = [];
    i = (e8 + 1) % LOG_BASE;
    if (e8 < 0) i += LOG_BASE;
    if (i < len) {
      if (i) x.d.push(+str.slice(0, i));
      for (len -= LOG_BASE; i < len; ) x.d.push(+str.slice(i, i += LOG_BASE));
      str = str.slice(i);
      i = LOG_BASE - str.length;
    } else {
      i -= len;
    }
    for (; i--; ) str += "0";
    x.d.push(+str);
    if (external) {
      if (x.e > x.constructor.maxE) {
        x.d = null;
        x.e = NaN;
      } else if (x.e < x.constructor.minE) {
        x.e = 0;
        x.d = [0];
      }
    }
  } else {
    x.e = 0;
    x.d = [0];
  }
  return x;
}
function parseOther(x, str) {
  var base, Ctor, divisor, i, isFloat, len, p, xd2, xe2;
  if (str.indexOf("_") > -1) {
    str = str.replace(/(\d)_(?=\d)/g, "$1");
    if (isDecimal.test(str)) return parseDecimal(x, str);
  } else if (str === "Infinity" || str === "NaN") {
    if (!+str) x.s = NaN;
    x.e = NaN;
    x.d = null;
    return x;
  }
  if (isHex.test(str)) {
    base = 16;
    str = str.toLowerCase();
  } else if (isBinary.test(str)) {
    base = 2;
  } else if (isOctal.test(str)) {
    base = 8;
  } else {
    throw Error(invalidArgument + str);
  }
  i = str.search(/p/i);
  if (i > 0) {
    p = +str.slice(i + 1);
    str = str.substring(2, i);
  } else {
    str = str.slice(2);
  }
  i = str.indexOf(".");
  isFloat = i >= 0;
  Ctor = x.constructor;
  if (isFloat) {
    str = str.replace(".", "");
    len = str.length;
    i = len - i;
    divisor = intPow(Ctor, new Ctor(base), i, i * 2);
  }
  xd2 = convertBase(str, base, BASE);
  xe2 = xd2.length - 1;
  for (i = xe2; xd2[i] === 0; --i) xd2.pop();
  if (i < 0) return new Ctor(x.s * 0);
  x.e = getBase10Exponent(xd2, xe2);
  x.d = xd2;
  external = false;
  if (isFloat) x = divide(x, divisor, len * 4);
  if (p) x = x.times(Math.abs(p) < 54 ? mathpow(2, p) : Decimal.pow(2, p));
  external = true;
  return x;
}
function sine(Ctor, x) {
  var k2, len = x.d.length;
  if (len < 3) {
    return x.isZero() ? x : taylorSeries(Ctor, 2, x, x);
  }
  k2 = 1.4 * Math.sqrt(len);
  k2 = k2 > 16 ? 16 : k2 | 0;
  x = x.times(1 / tinyPow(5, k2));
  x = taylorSeries(Ctor, 2, x, x);
  var sin2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20);
  for (; k2--; ) {
    sin2_x = x.times(x);
    x = x.times(d5.plus(sin2_x.times(d16.times(sin2_x).minus(d20))));
  }
  return x;
}
function taylorSeries(Ctor, n, x, y, isHyperbolic) {
  var j2, t, u, x2, pr2 = Ctor.precision, k2 = Math.ceil(pr2 / LOG_BASE);
  external = false;
  x2 = x.times(x);
  u = new Ctor(y);
  for (; ; ) {
    t = divide(u.times(x2), new Ctor(n++ * n++), pr2, 1);
    u = isHyperbolic ? y.plus(t) : y.minus(t);
    y = divide(t.times(x2), new Ctor(n++ * n++), pr2, 1);
    t = u.plus(y);
    if (t.d[k2] !== void 0) {
      for (j2 = k2; t.d[j2] === u.d[j2] && j2--; ) ;
      if (j2 == -1) break;
    }
    j2 = u;
    u = y;
    y = t;
    t = j2;
  }
  external = true;
  t.d.length = k2 + 1;
  return t;
}
function tinyPow(b, e8) {
  var n = b;
  while (--e8) n *= b;
  return n;
}
function toLessThanHalfPi(Ctor, x) {
  var t, isNeg = x.s < 0, pi2 = getPi(Ctor, Ctor.precision, 1), halfPi = pi2.times(0.5);
  x = x.abs();
  if (x.lte(halfPi)) {
    quadrant = isNeg ? 4 : 1;
    return x;
  }
  t = x.divToInt(pi2);
  if (t.isZero()) {
    quadrant = isNeg ? 3 : 2;
  } else {
    x = x.minus(t.times(pi2));
    if (x.lte(halfPi)) {
      quadrant = isOdd(t) ? isNeg ? 2 : 3 : isNeg ? 4 : 1;
      return x;
    }
    quadrant = isOdd(t) ? isNeg ? 1 : 4 : isNeg ? 3 : 2;
  }
  return x.minus(pi2).abs();
}
function toStringBinary(x, baseOut, sd2, rm2) {
  var base, e8, i, k2, len, roundUp, str, xd2, y, Ctor = x.constructor, isExp = sd2 !== void 0;
  if (isExp) {
    checkInt32(sd2, 1, MAX_DIGITS);
    if (rm2 === void 0) rm2 = Ctor.rounding;
    else checkInt32(rm2, 0, 8);
  } else {
    sd2 = Ctor.precision;
    rm2 = Ctor.rounding;
  }
  if (!x.isFinite()) {
    str = nonFiniteToString(x);
  } else {
    str = finiteToString(x);
    i = str.indexOf(".");
    if (isExp) {
      base = 2;
      if (baseOut == 16) {
        sd2 = sd2 * 4 - 3;
      } else if (baseOut == 8) {
        sd2 = sd2 * 3 - 2;
      }
    } else {
      base = baseOut;
    }
    if (i >= 0) {
      str = str.replace(".", "");
      y = new Ctor(1);
      y.e = str.length - i;
      y.d = convertBase(finiteToString(y), 10, base);
      y.e = y.d.length;
    }
    xd2 = convertBase(str, 10, base);
    e8 = len = xd2.length;
    for (; xd2[--len] == 0; ) xd2.pop();
    if (!xd2[0]) {
      str = isExp ? "0p+0" : "0";
    } else {
      if (i < 0) {
        e8--;
      } else {
        x = new Ctor(x);
        x.d = xd2;
        x.e = e8;
        x = divide(x, y, sd2, rm2, 0, base);
        xd2 = x.d;
        e8 = x.e;
        roundUp = inexact;
      }
      i = xd2[sd2];
      k2 = base / 2;
      roundUp = roundUp || xd2[sd2 + 1] !== void 0;
      roundUp = rm2 < 4 ? (i !== void 0 || roundUp) && (rm2 === 0 || rm2 === (x.s < 0 ? 3 : 2)) : i > k2 || i === k2 && (rm2 === 4 || roundUp || rm2 === 6 && xd2[sd2 - 1] & 1 || rm2 === (x.s < 0 ? 8 : 7));
      xd2.length = sd2;
      if (roundUp) {
        for (; ++xd2[--sd2] > base - 1; ) {
          xd2[sd2] = 0;
          if (!sd2) {
            ++e8;
            xd2.unshift(1);
          }
        }
      }
      for (len = xd2.length; !xd2[len - 1]; --len) ;
      for (i = 0, str = ""; i < len; i++) str += NUMERALS.charAt(xd2[i]);
      if (isExp) {
        if (len > 1) {
          if (baseOut == 16 || baseOut == 8) {
            i = baseOut == 16 ? 4 : 3;
            for (--len; len % i; len++) str += "0";
            xd2 = convertBase(str, base, baseOut);
            for (len = xd2.length; !xd2[len - 1]; --len) ;
            for (i = 1, str = "1."; i < len; i++) str += NUMERALS.charAt(xd2[i]);
          } else {
            str = str.charAt(0) + "." + str.slice(1);
          }
        }
        str = str + (e8 < 0 ? "p" : "p+") + e8;
      } else if (e8 < 0) {
        for (; ++e8; ) str = "0" + str;
        str = "0." + str;
      } else {
        if (++e8 > len) for (e8 -= len; e8--; ) str += "0";
        else if (e8 < len) str = str.slice(0, e8) + "." + str.slice(e8);
      }
    }
    str = (baseOut == 16 ? "0x" : baseOut == 2 ? "0b" : baseOut == 8 ? "0o" : "") + str;
  }
  return x.s < 0 ? "-" + str : str;
}
function truncate(arr, len) {
  if (arr.length > len) {
    arr.length = len;
    return true;
  }
}
function abs(x) {
  return new this(x).abs();
}
function acos(x) {
  return new this(x).acos();
}
function acosh(x) {
  return new this(x).acosh();
}
function add(x, y) {
  return new this(x).plus(y);
}
function asin(x) {
  return new this(x).asin();
}
function asinh(x) {
  return new this(x).asinh();
}
function atan(x) {
  return new this(x).atan();
}
function atanh(x) {
  return new this(x).atanh();
}
function atan2(y, x) {
  y = new this(y);
  x = new this(x);
  var r, pr2 = this.precision, rm2 = this.rounding, wpr = pr2 + 4;
  if (!y.s || !x.s) {
    r = new this(NaN);
  } else if (!y.d && !x.d) {
    r = getPi(this, wpr, 1).times(x.s > 0 ? 0.25 : 0.75);
    r.s = y.s;
  } else if (!x.d || y.isZero()) {
    r = x.s < 0 ? getPi(this, pr2, rm2) : new this(0);
    r.s = y.s;
  } else if (!y.d || x.isZero()) {
    r = getPi(this, wpr, 1).times(0.5);
    r.s = y.s;
  } else if (x.s < 0) {
    this.precision = wpr;
    this.rounding = 1;
    r = this.atan(divide(y, x, wpr, 1));
    x = getPi(this, wpr, 1);
    this.precision = pr2;
    this.rounding = rm2;
    r = y.s < 0 ? r.minus(x) : r.plus(x);
  } else {
    r = this.atan(divide(y, x, wpr, 1));
  }
  return r;
}
function cbrt(x) {
  return new this(x).cbrt();
}
function ceil(x) {
  return finalise(x = new this(x), x.e + 1, 2);
}
function clamp(x, min2, max2) {
  return new this(x).clamp(min2, max2);
}
function config$2(obj) {
  if (!obj || typeof obj !== "object") throw Error(decimalError + "Object expected");
  var i, p, v, useDefaults = obj.defaults === true, ps2 = [
    "precision",
    1,
    MAX_DIGITS,
    "rounding",
    0,
    8,
    "toExpNeg",
    -EXP_LIMIT,
    0,
    "toExpPos",
    0,
    EXP_LIMIT,
    "maxE",
    0,
    EXP_LIMIT,
    "minE",
    -EXP_LIMIT,
    0,
    "modulo",
    0,
    9
  ];
  for (i = 0; i < ps2.length; i += 3) {
    if (p = ps2[i], useDefaults) this[p] = DEFAULTS[p];
    if ((v = obj[p]) !== void 0) {
      if (mathfloor(v) === v && v >= ps2[i + 1] && v <= ps2[i + 2]) this[p] = v;
      else throw Error(invalidArgument + p + ": " + v);
    }
  }
  if (p = "crypto", useDefaults) this[p] = DEFAULTS[p];
  if ((v = obj[p]) !== void 0) {
    if (v === true || v === false || v === 0 || v === 1) {
      if (v) {
        if (typeof crypto != "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
          this[p] = true;
        } else {
          throw Error(cryptoUnavailable);
        }
      } else {
        this[p] = false;
      }
    } else {
      throw Error(invalidArgument + p + ": " + v);
    }
  }
  return this;
}
function cos(x) {
  return new this(x).cos();
}
function cosh(x) {
  return new this(x).cosh();
}
function clone$1(obj) {
  var i, p, ps2;
  function Decimal2(v) {
    var e8, i2, t, x = this;
    if (!(x instanceof Decimal2)) return new Decimal2(v);
    x.constructor = Decimal2;
    if (isDecimalInstance(v)) {
      x.s = v.s;
      if (external) {
        if (!v.d || v.e > Decimal2.maxE) {
          x.e = NaN;
          x.d = null;
        } else if (v.e < Decimal2.minE) {
          x.e = 0;
          x.d = [0];
        } else {
          x.e = v.e;
          x.d = v.d.slice();
        }
      } else {
        x.e = v.e;
        x.d = v.d ? v.d.slice() : v.d;
      }
      return;
    }
    t = typeof v;
    if (t === "number") {
      if (v === 0) {
        x.s = 1 / v < 0 ? -1 : 1;
        x.e = 0;
        x.d = [0];
        return;
      }
      if (v < 0) {
        v = -v;
        x.s = -1;
      } else {
        x.s = 1;
      }
      if (v === ~~v && v < 1e7) {
        for (e8 = 0, i2 = v; i2 >= 10; i2 /= 10) e8++;
        if (external) {
          if (e8 > Decimal2.maxE) {
            x.e = NaN;
            x.d = null;
          } else if (e8 < Decimal2.minE) {
            x.e = 0;
            x.d = [0];
          } else {
            x.e = e8;
            x.d = [v];
          }
        } else {
          x.e = e8;
          x.d = [v];
        }
        return;
      }
      if (v * 0 !== 0) {
        if (!v) x.s = NaN;
        x.e = NaN;
        x.d = null;
        return;
      }
      return parseDecimal(x, v.toString());
    }
    if (t === "string") {
      if ((i2 = v.charCodeAt(0)) === 45) {
        v = v.slice(1);
        x.s = -1;
      } else {
        if (i2 === 43) v = v.slice(1);
        x.s = 1;
      }
      return isDecimal.test(v) ? parseDecimal(x, v) : parseOther(x, v);
    }
    if (t === "bigint") {
      if (v < 0) {
        v = -v;
        x.s = -1;
      } else {
        x.s = 1;
      }
      return parseDecimal(x, v.toString());
    }
    throw Error(invalidArgument + v);
  }
  Decimal2.prototype = P;
  Decimal2.ROUND_UP = 0;
  Decimal2.ROUND_DOWN = 1;
  Decimal2.ROUND_CEIL = 2;
  Decimal2.ROUND_FLOOR = 3;
  Decimal2.ROUND_HALF_UP = 4;
  Decimal2.ROUND_HALF_DOWN = 5;
  Decimal2.ROUND_HALF_EVEN = 6;
  Decimal2.ROUND_HALF_CEIL = 7;
  Decimal2.ROUND_HALF_FLOOR = 8;
  Decimal2.EUCLID = 9;
  Decimal2.config = Decimal2.set = config$2;
  Decimal2.clone = clone$1;
  Decimal2.isDecimal = isDecimalInstance;
  Decimal2.abs = abs;
  Decimal2.acos = acos;
  Decimal2.acosh = acosh;
  Decimal2.add = add;
  Decimal2.asin = asin;
  Decimal2.asinh = asinh;
  Decimal2.atan = atan;
  Decimal2.atanh = atanh;
  Decimal2.atan2 = atan2;
  Decimal2.cbrt = cbrt;
  Decimal2.ceil = ceil;
  Decimal2.clamp = clamp;
  Decimal2.cos = cos;
  Decimal2.cosh = cosh;
  Decimal2.div = div;
  Decimal2.exp = exp;
  Decimal2.floor = floor;
  Decimal2.hypot = hypot;
  Decimal2.ln = ln$1;
  Decimal2.log = log;
  Decimal2.log10 = log10;
  Decimal2.log2 = log2;
  Decimal2.max = max;
  Decimal2.min = min;
  Decimal2.mod = mod;
  Decimal2.mul = mul;
  Decimal2.pow = pow;
  Decimal2.random = random;
  Decimal2.round = round;
  Decimal2.sign = sign;
  Decimal2.sin = sin;
  Decimal2.sinh = sinh;
  Decimal2.sqrt = sqrt;
  Decimal2.sub = sub;
  Decimal2.sum = sum;
  Decimal2.tan = tan;
  Decimal2.tanh = tanh;
  Decimal2.trunc = trunc;
  if (obj === void 0) obj = {};
  if (obj) {
    if (obj.defaults !== true) {
      ps2 = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"];
      for (i = 0; i < ps2.length; ) if (!obj.hasOwnProperty(p = ps2[i++])) obj[p] = this[p];
    }
  }
  Decimal2.config(obj);
  return Decimal2;
}
function div(x, y) {
  return new this(x).div(y);
}
function exp(x) {
  return new this(x).exp();
}
function floor(x) {
  return finalise(x = new this(x), x.e + 1, 3);
}
function hypot() {
  var i, n, t = new this(0);
  external = false;
  for (i = 0; i < arguments.length; ) {
    n = new this(arguments[i++]);
    if (!n.d) {
      if (n.s) {
        external = true;
        return new this(1 / 0);
      }
      t = n;
    } else if (t.d) {
      t = t.plus(n.times(n));
    }
  }
  external = true;
  return t.sqrt();
}
function isDecimalInstance(obj) {
  return obj instanceof Decimal || obj && obj.toStringTag === tag || false;
}
function ln$1(x) {
  return new this(x).ln();
}
function log(x, y) {
  return new this(x).log(y);
}
function log2(x) {
  return new this(x).log(2);
}
function log10(x) {
  return new this(x).log(10);
}
function max() {
  return maxOrMin(this, arguments, -1);
}
function min() {
  return maxOrMin(this, arguments, 1);
}
function mod(x, y) {
  return new this(x).mod(y);
}
function mul(x, y) {
  return new this(x).mul(y);
}
function pow(x, y) {
  return new this(x).pow(y);
}
function random(sd2) {
  var d, e8, k2, n, i = 0, r = new this(1), rd2 = [];
  if (sd2 === void 0) sd2 = this.precision;
  else checkInt32(sd2, 1, MAX_DIGITS);
  k2 = Math.ceil(sd2 / LOG_BASE);
  if (!this.crypto) {
    for (; i < k2; ) rd2[i++] = Math.random() * 1e7 | 0;
  } else if (crypto.getRandomValues) {
    d = crypto.getRandomValues(new Uint32Array(k2));
    for (; i < k2; ) {
      n = d[i];
      if (n >= 429e7) {
        d[i] = crypto.getRandomValues(new Uint32Array(1))[0];
      } else {
        rd2[i++] = n % 1e7;
      }
    }
  } else if (crypto.randomBytes) {
    d = crypto.randomBytes(k2 *= 4);
    for (; i < k2; ) {
      n = d[i] + (d[i + 1] << 8) + (d[i + 2] << 16) + ((d[i + 3] & 127) << 24);
      if (n >= 214e7) {
        crypto.randomBytes(4).copy(d, i);
      } else {
        rd2.push(n % 1e7);
        i += 4;
      }
    }
    i = k2 / 4;
  } else {
    throw Error(cryptoUnavailable);
  }
  k2 = rd2[--i];
  sd2 %= LOG_BASE;
  if (k2 && sd2) {
    n = mathpow(10, LOG_BASE - sd2);
    rd2[i] = (k2 / n | 0) * n;
  }
  for (; rd2[i] === 0; i--) rd2.pop();
  if (i < 0) {
    e8 = 0;
    rd2 = [0];
  } else {
    e8 = -1;
    for (; rd2[0] === 0; e8 -= LOG_BASE) rd2.shift();
    for (k2 = 1, n = rd2[0]; n >= 10; n /= 10) k2++;
    if (k2 < LOG_BASE) e8 -= LOG_BASE - k2;
  }
  r.e = e8;
  r.d = rd2;
  return r;
}
function round(x) {
  return finalise(x = new this(x), x.e + 1, this.rounding);
}
function sign(x) {
  x = new this(x);
  return x.d ? x.d[0] ? x.s : 0 * x.s : x.s || NaN;
}
function sin(x) {
  return new this(x).sin();
}
function sinh(x) {
  return new this(x).sinh();
}
function sqrt(x) {
  return new this(x).sqrt();
}
function sub(x, y) {
  return new this(x).sub(y);
}
function sum() {
  var i = 0, args = arguments, x = new this(args[i]);
  external = false;
  for (; x.s && ++i < args.length; ) x = x.plus(args[i]);
  external = true;
  return finalise(x, this.precision, this.rounding);
}
function tan(x) {
  return new this(x).tan();
}
function tanh(x) {
  return new this(x).tanh();
}
function trunc(x) {
  return finalise(x = new this(x), x.e + 1, 1);
}
P[Symbol.for("nodejs.util.inspect.custom")] = P.toString;
P[Symbol.toStringTag] = "Decimal";
var Decimal = P.constructor = clone$1(DEFAULTS);
LN10 = new Decimal(LN10);
PI = new Decimal(PI);
var Sql = class _Sql {
  constructor(rawStrings, rawValues) {
    if (rawStrings.length - 1 !== rawValues.length) {
      if (rawStrings.length === 0) {
        throw new TypeError("Expected at least 1 string");
      }
      throw new TypeError(`Expected ${rawStrings.length} strings to have ${rawStrings.length - 1} values`);
    }
    const valuesLength = rawValues.reduce((len, value) => len + (value instanceof _Sql ? value.values.length : 1), 0);
    this.values = new Array(valuesLength);
    this.strings = new Array(valuesLength + 1);
    this.strings[0] = rawStrings[0];
    let i = 0, pos = 0;
    while (i < rawValues.length) {
      const child = rawValues[i++];
      const rawString = rawStrings[i];
      if (child instanceof _Sql) {
        this.strings[pos] += child.strings[0];
        let childIndex = 0;
        while (childIndex < child.values.length) {
          this.values[pos++] = child.values[childIndex++];
          this.strings[pos] = child.strings[childIndex];
        }
        this.strings[pos] += rawString;
      } else {
        this.values[pos++] = child;
        this.strings[pos] = rawString;
      }
    }
  }
  get sql() {
    const len = this.strings.length;
    let i = 1;
    let value = this.strings[0];
    while (i < len)
      value += `?${this.strings[i++]}`;
    return value;
  }
  get statement() {
    const len = this.strings.length;
    let i = 1;
    let value = this.strings[0];
    while (i < len)
      value += `:${i}${this.strings[i++]}`;
    return value;
  }
  get text() {
    const len = this.strings.length;
    let i = 1;
    let value = this.strings[0];
    while (i < len)
      value += `$${i}${this.strings[i++]}`;
    return value;
  }
  inspect() {
    return {
      sql: this.sql,
      statement: this.statement,
      text: this.text,
      values: this.values
    };
  }
};
function join(values, separator = ",", prefix = "", suffix = "") {
  if (values.length === 0) {
    throw new TypeError("Expected `join([])` to be called with an array of multiple elements, but got an empty array");
  }
  return new Sql([prefix, ...Array(values.length - 1).fill(separator), suffix], values);
}
function raw(value) {
  return new Sql([value], []);
}
var empty = raw("");
function sql(strings, ...values) {
  return new Sql(strings, values);
}
var pu = Object.create;
var xr = Object.defineProperty;
var du = Object.getOwnPropertyDescriptor;
var mu = Object.getOwnPropertyNames;
var fu = Object.getPrototypeOf, gu = Object.prototype.hasOwnProperty;
var eo = (e11, t) => () => (e11 && (t = e11(e11 = 0)), t);
var at = (e11, t) => () => (t || e11((t = { exports: {} }).exports, t), t.exports), lt = (e11, t) => {
  for (var r in t) xr(e11, r, { get: t[r], enumerable: true });
}, to = (e11, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function") for (let i of mu(t)) !gu.call(e11, i) && i !== r && xr(e11, i, { get: () => t[i], enumerable: !(n = du(t, i)) || n.enumerable });
  return e11;
};
var Pe = (e11, t, r) => (r = e11 != null ? pu(fu(e11)) : {}, to(t || !e11 || !e11.__esModule ? xr(r, "default", { value: e11, enumerable: true }) : r, e11)), yu = (e11) => to(xr({}, "__esModule", { value: true }), e11);
var ho = at((Rf, Lu) => {
  Lu.exports = { name: "@prisma/engines-version", version: "8.1.0-1.d1b3f377ca835d73fd50954a5e22128b9ebdd6b8", main: "index.js", types: "index.d.ts", license: "Apache-2.0", author: "Tim Suchanek <suchanek@prisma.io>", prisma: { enginesVersion: "d1b3f377ca835d73fd50954a5e22128b9ebdd6b8" }, repository: { type: "git", url: "https://github.com/prisma/engines-wrapper.git", directory: "packages/engines-version" }, devDependencies: { "@types/node": "18.19.76", typescript: "4.9.5" }, files: ["index.js", "index.d.ts"], scripts: { build: "tsc -d" } };
});
var wo = at((Pr) => {
  Object.defineProperty(Pr, "__esModule", { value: true });
  Pr.enginesVersion = void 0;
  Pr.enginesVersion = ho().prisma.enginesVersion;
});
var bo = at((If, xo) => {
  xo.exports = (e11) => {
    let t = e11.match(/^[ \t]*(?=\S)/gm);
    return t ? t.reduce((r, n) => Math.min(r, n.length), 1 / 0) : 0;
  };
});
var So = at((Nf, vo) => {
  vo.exports = (e11, t = 1, r) => {
    if (r = { indent: " ", includeEmptyLines: false, ...r }, typeof e11 != "string") throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e11}\``);
    if (typeof t != "number") throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);
    if (typeof r.indent != "string") throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``);
    if (t === 0) return e11;
    let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
    return e11.replace(n, r.indent.repeat(t));
  };
});
var Ro = at((Lf, Tr) => {
  Tr.exports = (e11 = {}) => {
    let t;
    if (e11.repoUrl) t = e11.repoUrl;
    else if (e11.user && e11.repo) t = `https://github.com/${e11.user}/${e11.repo}`;
    else throw new Error("You need to specify either the `repoUrl` option or both the `user` and `repo` options");
    let r = new URL(`${t}/issues/new`), n = ["body", "title", "labels", "template", "milestone", "assignee", "projects"];
    for (let i of n) {
      let o = e11[i];
      if (o !== void 0) {
        if (i === "labels" || i === "projects") {
          if (!Array.isArray(o)) throw new TypeError(`The \`${i}\` option should be an array`);
          o = o.join(",");
        }
        r.searchParams.set(i, o);
      }
    }
    return r.toString();
  };
  Tr.exports.default = Tr.exports;
});
var qn = at((Ig, Fo) => {
  Fo.exports = /* @__PURE__ */ function() {
    function e11(t, r, n, i, o) {
      return t < r || n < r ? t > n ? n + 1 : t + 1 : i === o ? r : r + 1;
    }
    return function(t, r) {
      if (t === r) return 0;
      if (t.length > r.length) {
        var n = t;
        t = r, r = n;
      }
      for (var i = t.length, o = r.length; i > 0 && t.charCodeAt(i - 1) === r.charCodeAt(o - 1); ) i--, o--;
      for (var s = 0; s < i && t.charCodeAt(s) === r.charCodeAt(s); ) s++;
      if (i -= s, o -= s, i === 0 || o < 3) return o;
      var a = 0, u, m, P2, T, S, I, A, M, L, q, E, D, H = [];
      for (u = 0; u < i; u++) H.push(u + 1), H.push(t.charCodeAt(s + u));
      for (var ce = H.length - 1; a < o - 3; ) for (L = r.charCodeAt(s + (m = a)), q = r.charCodeAt(s + (P2 = a + 1)), E = r.charCodeAt(s + (T = a + 2)), D = r.charCodeAt(s + (S = a + 3)), I = a += 4, u = 0; u < ce; u += 2) A = H[u], M = H[u + 1], m = e11(A, m, P2, L, M), P2 = e11(m, P2, T, q, M), T = e11(P2, T, S, E, M), I = e11(T, S, I, D, M), H[u] = I, S = T, T = P2, P2 = m, m = A;
      for (; a < o; ) for (L = r.charCodeAt(s + (m = a)), I = ++a, u = 0; u < ce; u += 2) A = H[u], H[u] = I = e11(A, m, I, L, H[u + 1]), m = A;
      return I;
    };
  }();
});
var qo = eo(() => {
});
var Uo = eo(() => {
});
var Hm = {};
lt(Hm, { AnyNull: () => ee.AnyNull, DMMF: () => Qt, DbNull: () => ee.DbNull, Debug: () => K, Decimal: () => cu.Decimal, Extensions: () => Rn, JsonNull: () => ee.JsonNull, NullTypes: () => ee.NullTypes, ObjectEnumValue: () => ee.ObjectEnumValue, PrismaClientInitializationError: () => _.PrismaClientInitializationError, PrismaClientKnownRequestError: () => _.PrismaClientKnownRequestError, PrismaClientRustPanicError: () => _.PrismaClientRustPanicError, PrismaClientUnknownRequestError: () => _.PrismaClientUnknownRequestError, PrismaClientValidationError: () => _.PrismaClientValidationError, Public: () => Cn, Sql: () => Fe.Sql, createParam: () => os, defineDmmfProperty: () => ps, deserializeJsonObject: () => Ae, deserializeRawResult: () => Tn, dmmfToRuntimeDataModel: () => so, empty: () => Fe.empty, getPrismaClient: () => au, getRuntime: () => uu, isAnyNull: () => ee.isAnyNull, isDbNull: () => ee.isDbNull, isJsonNull: () => ee.isJsonNull, isObjectEnumValue: () => ee.isObjectEnumValue, join: () => Fe.join, makeStrictEnum: () => lu, makeTypedQueryFactory: () => ds, raw: () => Fe.raw, serializeJsonQuery: () => Vr, skip: () => Lr, sqltag: () => Fe.sql, warnOnce: () => Vn });
var client = yu(Hm);
var Rn = {};
lt(Rn, { defineExtension: () => ro, getExtensionContext: () => no });
function ro(e11) {
  return typeof e11 == "function" ? e11 : (t) => t.$extends(e11);
}
function no(e11) {
  return e11;
}
var Cn = {};
lt(Cn, { validator: () => io });
function io(...e11) {
  return (t) => t;
}
var Ie = class {
  constructor() {
    __publicField(this, "_map", /* @__PURE__ */ new Map());
  }
  get(t) {
    var _a5;
    return (_a5 = this._map.get(t)) == null ? void 0 : _a5.value;
  }
  set(t, r) {
    this._map.set(t, { value: r });
  }
  getOrCreate(t, r) {
    let n = this._map.get(t);
    if (n) return n.value;
    let i = r();
    return this.set(t, i), i;
  }
};
function qe(e11) {
  return e11.substring(0, 1).toLowerCase() + e11.substring(1);
}
function oo(e11, t) {
  let r = {};
  for (let n of e11) {
    let i = n[t];
    r[i] = n;
  }
  return r;
}
function Nt(e11) {
  let t;
  return { get() {
    return t || (t = { value: e11() }), t.value;
  } };
}
function so(e11) {
  return { models: In(e11.models), enums: In(e11.enums), types: In(e11.types) };
}
function In(e11) {
  let t = {};
  for (let { name: r, ...n } of e11) t[r] = n;
  return t;
}
var as = dist;
var br = {};
lt(br, { $: () => po, bgBlack: () => Au, bgBlue: () => ku, bgCyan: () => Nu, bgGreen: () => Cu, bgMagenta: () => Ou, bgRed: () => Ru, bgWhite: () => Du, bgYellow: () => Iu, black: () => Eu, blue: () => He, bold: () => Ee, cyan: () => _e, dim: () => Dt, gray: () => $t, green: () => Ft, grey: () => Su, hidden: () => bu, inverse: () => xu, italic: () => wu, magenta: () => Tu, red: () => ze, reset: () => hu, strikethrough: () => Pu, underline: () => Mt, white: () => vu, yellow: () => _t });
var kn, ao, lo, uo, co = true;
typeof process < "u" && ({ FORCE_COLOR: kn, NODE_DISABLE_COLORS: ao, NO_COLOR: lo, TERM: uo } = process.env || {}, co = process.stdout && process.stdout.isTTY);
var po = { enabled: !ao && lo == null && uo !== "dumb" && (kn != null && kn !== "0" || co) };
function B(e11, t) {
  let r = new RegExp(`\\x1b\\[${t}m`, "g"), n = `\x1B[${e11}m`, i = `\x1B[${t}m`;
  return function(o) {
    return !po.enabled || o == null ? o : n + (~("" + o).indexOf(i) ? o.replace(r, i + n) : o) + i;
  };
}
var hu = B(0, 0), Ee = B(1, 22), Dt = B(2, 22), wu = B(3, 23), Mt = B(4, 24), xu = B(7, 27), bu = B(8, 28), Pu = B(9, 29), Eu = B(30, 39), ze = B(31, 39), Ft = B(32, 39), _t = B(33, 39), He = B(34, 39), Tu = B(35, 39), _e = B(36, 39), vu = B(37, 39), $t = B(90, 39), Su = B(90, 39), Au = B(40, 49), Ru = B(41, 49), Cu = B(42, 49), Iu = B(43, 49), ku = B(44, 49), Ou = B(45, 49), Nu = B(46, 49), Du = B(47, 49);
var Mu = 100, mo = ["green", "yellow", "blue", "magenta", "cyan", "red"], Lt = [], fo = Date.now(), Fu = 0, On = typeof process < "u" ? process.env : {};
globalThis.DEBUG ?? (globalThis.DEBUG = On.DEBUG ?? "");
globalThis.DEBUG_COLORS ?? (globalThis.DEBUG_COLORS = On.DEBUG_COLORS ? On.DEBUG_COLORS === "true" : true);
var Vt = { enable(e11) {
  typeof e11 == "string" && (globalThis.DEBUG = e11);
}, disable() {
  let e11 = globalThis.DEBUG;
  return globalThis.DEBUG = "", e11;
}, enabled(e11) {
  let t = globalThis.DEBUG.split(",").map((i) => i.replace(/[.+?^${}()|[\]\\]/g, "\\$&")), r = t.some((i) => i === "" || i[0] === "-" ? false : e11.match(RegExp(i.split("*").join(".*") + "$"))), n = t.some((i) => i === "" || i[0] !== "-" ? false : e11.match(RegExp(i.slice(1).split("*").join(".*") + "$")));
  return r && !n;
}, log: (...e11) => {
  let [t, r, ...n] = e11;
  (console.warn ?? console.log)(`${t} ${r}`, ...n);
}, formatters: {} };
function _u(e11) {
  let t = { color: mo[Fu++ % mo.length], enabled: Vt.enabled(e11), namespace: e11, log: Vt.log, extend: () => {
  } }, r = (...n) => {
    let { enabled: i, namespace: o, color: s, log: a } = t;
    if (n.length !== 0 && Lt.push([o, ...n]), Lt.length > Mu && Lt.shift(), Vt.enabled(o) || i) {
      let u = n.map((P2) => typeof P2 == "string" ? P2 : $u(P2)), m = `+${Date.now() - fo}ms`;
      fo = Date.now(), globalThis.DEBUG_COLORS ? a(br[s](Ee(o)), ...u, br[s](m)) : a(o, ...u, m);
    }
  };
  return new Proxy(r, { get: (n, i) => t[i], set: (n, i, o) => t[i] = o });
}
var K = new Proxy(_u, { get: (e11, t) => Vt[t], set: (e11, t, r) => Vt[t] = r });
function $u(e11, t = 2) {
  let r = /* @__PURE__ */ new Set();
  return JSON.stringify(e11, (n, i) => {
    if (typeof i == "object" && i !== null) {
      if (r.has(i)) return "[Circular *]";
      r.add(i);
    } else if (typeof i == "bigint") return i.toString();
    return i;
  }, t);
}
function go(e11 = 7500) {
  let t = Lt.map(([r, ...n]) => `${r} ${n.map((i) => typeof i == "string" ? i : JSON.stringify(i)).join(" ")}`).join(`
`);
  return t.length < e11 ? t : t.slice(-e11);
}
function yo() {
  Lt.length = 0;
}
function $e(e11, t) {
  throw new Error(t);
}
var Po = Pe(bo(), 1);
function Nn(e11) {
  let t = (0, Po.default)(e11);
  if (t === 0) return e11;
  let r = new RegExp(`^[ \\t]{${t}}`, "gm");
  return e11.replace(r, "");
}
var Eo = "prisma+postgres", Er = `${Eo}:`;
function To(e11) {
  return (e11 == null ? void 0 : e11.toString().startsWith(`${Er}//`)) ?? false;
}
function Dn(e11) {
  if (!To(e11)) return false;
  let { host: t } = new URL(e11);
  return t.includes("localhost") || t.includes("127.0.0.1") || t.includes("[::1]");
}
var Ut = {};
lt(Ut, { error: () => Uu, info: () => qu, log: () => Vu, query: () => ju, should: () => Ao, tags: () => qt, warn: () => Mn });
var qt = { error: ze("prisma:error"), warn: _t("prisma:warn"), info: _e("prisma:info"), query: He("prisma:query") }, Ao = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS };
function Vu(...e11) {
  console.log(...e11);
}
function Mn(e11, ...t) {
  Ao.warn() && console.warn(`${qt.warn} ${e11}`, ...t);
}
function qu(e11, ...t) {
  console.info(`${qt.info} ${e11}`, ...t);
}
function Uu(e11, ...t) {
  console.error(`${qt.error} ${e11}`, ...t);
}
function ju(e11, ...t) {
  console.log(`${qt.query} ${e11}`, ...t);
}
function Fn({ onlyFirst: e11 = false } = {}) {
  let r = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?(?:\\u0007|\\u001B\\u005C|\\u009C))", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|");
  return new RegExp(r, e11 ? void 0 : "g");
}
var Bu = Fn();
function ut(e11) {
  if (typeof e11 != "string") throw new TypeError(`Expected a \`string\`, got \`${typeof e11}\``);
  return e11.replace(Bu, "");
}
var jt = Pe(path__default);
function _n(e11) {
  return jt.default.sep === jt.default.posix.sep ? e11 : e11.split(jt.default.sep).join(jt.default.posix.sep);
}
function $n(e11, t) {
  return Object.prototype.hasOwnProperty.call(e11, t);
}
function vr(e11, t) {
  let r = {};
  for (let n of Object.keys(e11)) r[n] = t(e11[n], n);
  return r;
}
function Ln(e11, t) {
  if (e11.length === 0) return;
  let r = e11[0];
  for (let n = 1; n < e11.length; n++) t(r, e11[n]) < 0 && (r = e11[n]);
  return r;
}
function Bt(e11, t) {
  Object.defineProperty(e11, "name", { value: t, configurable: true });
}
var Co = /* @__PURE__ */ new Set(), Vn = (e11, t, ...r) => {
  Co.has(e11) || (Co.add(e11), Mn(t, ...r));
};
function ct(e11) {
  return e11 instanceof Date || Object.prototype.toString.call(e11) === "[object Date]";
}
function pt(e11) {
  return e11.toString() !== "Invalid Date";
}
var Io = dist;
function dt(e11) {
  return Io.Decimal.isDecimal(e11) ? true : e11 !== null && typeof e11 == "object" && typeof e11.s == "number" && typeof e11.e == "number" && typeof e11.toFixed == "function" && Array.isArray(e11.d);
}
var Yo = dist;
var Qt = {};
lt(Qt, { ModelAction: () => mt, datamodelEnumToSchemaEnum: () => Qu });
function Qu(e11) {
  return { name: e11.name, values: e11.values.map((t) => t.name) };
}
var mt = ((D) => (D.findUnique = "findUnique", D.findUniqueOrThrow = "findUniqueOrThrow", D.findFirst = "findFirst", D.findFirstOrThrow = "findFirstOrThrow", D.findMany = "findMany", D.create = "create", D.createMany = "createMany", D.createManyAndReturn = "createManyAndReturn", D.update = "update", D.updateMany = "updateMany", D.updateManyAndReturn = "updateManyAndReturn", D.upsert = "upsert", D.delete = "delete", D.deleteMany = "deleteMany", D.groupBy = "groupBy", D.count = "count", D.aggregate = "aggregate", D.findRaw = "findRaw", D.aggregateRaw = "aggregateRaw", D))(mt || {});
var Mo = Pe(So());
var Do = Pe(require$$2);
var ko = { keyword: _e, entity: _e, value: (e11) => Ee(He(e11)), punctuation: He, directive: _e, function: _e, variable: (e11) => Ee(He(e11)), string: (e11) => Ee(Ft(e11)), boolean: _t, number: _e, comment: $t };
var Ju = (e11) => e11, Sr = {}, Gu = 0, O = { manual: Sr.Prism && Sr.Prism.manual, disableWorkerMessageHandler: Sr.Prism && Sr.Prism.disableWorkerMessageHandler, util: { encode: function(e11) {
  if (e11 instanceof Te) {
    let t = e11;
    return new Te(t.type, O.util.encode(t.content), t.alias);
  } else return Array.isArray(e11) ? e11.map(O.util.encode) : e11.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
}, type: function(e11) {
  return Object.prototype.toString.call(e11).slice(8, -1);
}, objId: function(e11) {
  return e11.__id || Object.defineProperty(e11, "__id", { value: ++Gu }), e11.__id;
}, clone: function e(t, r) {
  let n, i, o = O.util.type(t);
  switch (r = r || {}, o) {
    case "Object":
      if (i = O.util.objId(t), r[i]) return r[i];
      n = {}, r[i] = n;
      for (let s in t) t.hasOwnProperty(s) && (n[s] = e(t[s], r));
      return n;
    case "Array":
      return i = O.util.objId(t), r[i] ? r[i] : (n = [], r[i] = n, t.forEach(function(s, a) {
        n[a] = e(s, r);
      }), n);
    default:
      return t;
  }
} }, languages: { extend: function(e11, t) {
  let r = O.util.clone(O.languages[e11]);
  for (let n in t) r[n] = t[n];
  return r;
}, insertBefore: function(e11, t, r, n) {
  n = n || O.languages;
  let i = n[e11], o = {};
  for (let a in i) if (i.hasOwnProperty(a)) {
    if (a == t) for (let u in r) r.hasOwnProperty(u) && (o[u] = r[u]);
    r.hasOwnProperty(a) || (o[a] = i[a]);
  }
  let s = n[e11];
  return n[e11] = o, O.languages.DFS(O.languages, function(a, u) {
    u === s && a != e11 && (this[a] = o);
  }), o;
}, DFS: function e2(t, r, n, i) {
  i = i || {};
  let o = O.util.objId;
  for (let s in t) if (t.hasOwnProperty(s)) {
    r.call(t, s, t[s], n || s);
    let a = t[s], u = O.util.type(a);
    u === "Object" && !i[o(a)] ? (i[o(a)] = true, e2(a, r, null, i)) : u === "Array" && !i[o(a)] && (i[o(a)] = true, e2(a, r, s, i));
  }
} }, plugins: {}, highlight: function(e11, t, r) {
  let n = { code: e11, grammar: t, language: r };
  return O.hooks.run("before-tokenize", n), n.tokens = O.tokenize(n.code, n.grammar), O.hooks.run("after-tokenize", n), Te.stringify(O.util.encode(n.tokens), n.language);
}, matchGrammar: function(e11, t, r, n, i, o, s) {
  for (let M in r) {
    if (!r.hasOwnProperty(M) || !r[M]) continue;
    if (M == s) return;
    let L = r[M];
    L = O.util.type(L) === "Array" ? L : [L];
    for (let q = 0; q < L.length; ++q) {
      let E = L[q], D = E.inside, H = !!E.lookbehind, ce = !!E.greedy, ie = 0, be = E.alias;
      if (ce && !E.pattern.global) {
        let l = E.pattern.toString().match(/[imuy]*$/)[0];
        E.pattern = RegExp(E.pattern.source, l + "g");
      }
      E = E.pattern || E;
      for (let l = n, c = i; l < t.length; c += t[l].length, ++l) {
        let p = t[l];
        if (t.length > e11.length) return;
        if (p instanceof Te) continue;
        if (ce && l != t.length - 1) {
          E.lastIndex = c;
          var T = E.exec(e11);
          if (!T) break;
          var P2 = T.index + (H ? T[1].length : 0), S = T.index + T[0].length, a = l, u = c;
          for (let g = t.length; a < g && (u < S || !t[a].type && !t[a - 1].greedy); ++a) u += t[a].length, P2 >= u && (++l, c = u);
          if (t[l] instanceof Te) continue;
          m = a - l, p = e11.slice(c, u), T.index -= c;
        } else {
          E.lastIndex = 0;
          var T = E.exec(p), m = 1;
        }
        if (!T) {
          if (o) break;
          continue;
        }
        H && (ie = T[1] ? T[1].length : 0);
        var P2 = T.index + ie, T = T[0].slice(ie), S = P2 + T.length, I = p.slice(0, P2), A = p.slice(S);
        let h = [l, m];
        I && (++l, c += I.length, h.push(I));
        let f = new Te(M, D ? O.tokenize(T, D) : T, be, T, ce);
        if (h.push(f), A && h.push(A), Array.prototype.splice.apply(t, h), m != 1 && O.matchGrammar(e11, t, r, l, c, true, M), o) break;
      }
    }
  }
}, tokenize: function(e11, t) {
  let r = [e11], n = t.rest;
  if (n) {
    for (let i in n) t[i] = n[i];
    delete t.rest;
  }
  return O.matchGrammar(e11, r, t, 0, 0, false), r;
}, hooks: { all: {}, add: function(e11, t) {
  let r = O.hooks.all;
  r[e11] = r[e11] || [], r[e11].push(t);
}, run: function(e11, t) {
  let r = O.hooks.all[e11];
  if (!(!r || !r.length)) for (var n = 0, i; i = r[n++]; ) i(t);
} }, Token: Te };
O.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: true }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: true, greedy: true }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: true }, "class-name": { pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i, lookbehind: true, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, boolean: /\b(?:true|false)\b/, function: /\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/, punctuation: /[{}[\];(),.:]/ };
O.languages.javascript = O.languages.extend("clike", { "class-name": [O.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/, lookbehind: true }], keyword: [{ pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: true }, { pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: true }], number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/, function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/ });
O.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
O.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/, lookbehind: true, greedy: true }, "function-variable": { pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/, lookbehind: true, inside: O.languages.javascript }, { pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i, inside: O.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/, lookbehind: true, inside: O.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/, lookbehind: true, inside: O.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ });
O.languages.markup && O.languages.markup.tag.addInlined("script", "javascript");
O.languages.js = O.languages.javascript;
O.languages.typescript = O.languages.extend("javascript", { keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/, builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/ });
O.languages.ts = O.languages.typescript;
function Te(e11, t, r, n, i) {
  this.type = e11, this.content = t, this.alias = r, this.length = (n || "").length | 0, this.greedy = !!i;
}
Te.stringify = function(e11, t) {
  return typeof e11 == "string" ? e11 : Array.isArray(e11) ? e11.map(function(r) {
    return Te.stringify(r, t);
  }).join("") : zu(e11.type)(e11.content);
};
function zu(e11) {
  return ko[e11] || Ju;
}
function Oo(e11) {
  return Hu(e11, O.languages.javascript);
}
function Hu(e11, t) {
  return O.tokenize(e11, t).map((n) => Te.stringify(n)).join("");
}
function No(e11) {
  return Nn(e11);
}
var Ar = class e3 {
  constructor(t, r) {
    __publicField(this, "firstLineNumber");
    __publicField(this, "lines");
    this.firstLineNumber = t, this.lines = r;
  }
  static read(t) {
    let r;
    try {
      r = Do.default.readFileSync(t, "utf-8");
    } catch {
      return null;
    }
    return e3.fromContent(r);
  }
  static fromContent(t) {
    let r = t.split(/\r?\n/);
    return new e3(1, r);
  }
  get lastLineNumber() {
    return this.firstLineNumber + this.lines.length - 1;
  }
  mapLineAt(t, r) {
    if (t < this.firstLineNumber || t > this.lastLineNumber) return this;
    let n = t - this.firstLineNumber, i = [...this.lines];
    return i[n] = r(i[n]), new e3(this.firstLineNumber, i);
  }
  mapLines(t) {
    return new e3(this.firstLineNumber, this.lines.map((r, n) => t(r, this.firstLineNumber + n)));
  }
  lineAt(t) {
    return this.lines[t - this.firstLineNumber];
  }
  prependSymbolAt(t, r) {
    return this.mapLines((n, i) => i === t ? `${r} ${n}` : `  ${n}`);
  }
  slice(t, r) {
    let n = Math.max(t, this.firstLineNumber), i = Math.min(r, this.lastLineNumber);
    if (n > i) return new e3(t, []);
    let o = this.lines.slice(n - this.firstLineNumber, i - this.firstLineNumber + 1).join(`
`);
    return new e3(n, No(o).split(`
`));
  }
  highlight() {
    let t = Oo(this.toString());
    return new e3(this.firstLineNumber, t.split(`
`));
  }
  toString() {
    return this.lines.join(`
`);
  }
};
var Wu = { red: ze, gray: $t, dim: Dt, bold: Ee, underline: Mt, highlightSource: (e11) => e11.highlight() }, Ku = { red: (e11) => e11, gray: (e11) => e11, dim: (e11) => e11, bold: (e11) => e11, underline: (e11) => e11, highlightSource: (e11) => e11 };
function Zu({ message: e11, originalMethod: t, isPanic: r, callArguments: n }) {
  return { functionName: `prisma.${t}()`, message: e11, isPanic: r ?? false, callArguments: n };
}
function Xu({ callsite: e11, message: t, originalMethod: r, isPanic: n, callArguments: i }, o) {
  var _a5;
  let s = Zu({ message: t, originalMethod: r, isPanic: n, callArguments: i });
  if (!e11 || typeof window < "u" || process.env.NODE_ENV === "production") return s;
  let a = e11.getLocation();
  if (!a || !a.lineNumber || !a.columnNumber) return s;
  let u = Math.max(1, a.lineNumber - 3), m = (_a5 = Ar.read(a.fileName)) == null ? void 0 : _a5.slice(u, a.lineNumber), P2 = m == null ? void 0 : m.lineAt(a.lineNumber);
  if (m && P2) {
    let T = ec(P2), S = Yu(P2);
    if (!S) return s;
    s.functionName = `${S.code})`, s.location = a, n || (m = m.mapLineAt(a.lineNumber, (A) => A.slice(0, S.openingBraceIndex))), m = o.highlightSource(m);
    let I = String(m.lastLineNumber).length;
    if (s.contextLines = m.mapLines((A, M) => o.gray(String(M).padStart(I)) + " " + A).mapLines((A) => o.dim(A)).prependSymbolAt(a.lineNumber, o.bold(o.red("→"))), i) {
      let A = T + I + 1;
      A += 2, s.callArguments = (0, Mo.default)(i, A).slice(A);
    }
  }
  return s;
}
function Yu(e11) {
  let t = Object.keys(mt).join("|"), n = new RegExp(String.raw`\.(${t})\(`).exec(e11);
  if (n) {
    let i = n.index + n[0].length, o = e11.lastIndexOf(" ", n.index) + 1;
    return { code: e11.slice(o, i), openingBraceIndex: i };
  }
  return null;
}
function ec(e11) {
  let t = 0;
  for (let r = 0; r < e11.length; r++) {
    if (e11.charAt(r) !== " ") return t;
    t++;
  }
  return t;
}
function tc({ functionName: e11, location: t, message: r, isPanic: n, contextLines: i, callArguments: o }, s) {
  let a = [""], u = t ? " in" : ":";
  if (n ? (a.push(s.red(`Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`)), a.push(s.red(`It occurred in the ${s.bold(`\`${e11}\``)} invocation${u}`))) : a.push(s.red(`Invalid ${s.bold(`\`${e11}\``)} invocation${u}`)), t && a.push(s.underline(rc(t))), i) {
    a.push("");
    let m = [i.toString()];
    o && (m.push(o), m.push(s.dim(")"))), a.push(m.join("")), o && a.push("");
  } else a.push(""), o && a.push(o), a.push("");
  return a.push(r), a.join(`
`);
}
function rc(e11) {
  let t = [e11.fileName];
  return e11.lineNumber && t.push(String(e11.lineNumber)), e11.columnNumber && t.push(String(e11.columnNumber)), t.join(":");
}
function Rr(e11) {
  let t = e11.showColors ? Wu : Ku, r;
  return r = Xu(e11, t), tc(r, t);
}
var Bo = Pe(qn());
function Lo(e11, t, r) {
  let n = Vo(e11), i = nc(n), o = oc(i);
  o ? Cr(o, t, r) : t.addErrorMessage(() => "Unknown error");
}
function Vo(e11) {
  return e11.errors.flatMap((t) => t.kind === "Union" ? Vo(t) : [t]);
}
function nc(e11) {
  let t = /* @__PURE__ */ new Map(), r = [];
  for (let n of e11) {
    if (n.kind !== "InvalidArgumentType") {
      r.push(n);
      continue;
    }
    let i = `${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`, o = t.get(i);
    o ? t.set(i, { ...n, argument: { ...n.argument, typeNames: ic(o.argument.typeNames, n.argument.typeNames) } }) : t.set(i, n);
  }
  return r.push(...t.values()), r;
}
function ic(e11, t) {
  return [...new Set(e11.concat(t))];
}
function oc(e11) {
  return Ln(e11, (t, r) => {
    let n = _o(t), i = _o(r);
    return n !== i ? n - i : $o(t) - $o(r);
  });
}
function _o(e11) {
  let t = 0;
  return Array.isArray(e11.selectionPath) && (t += e11.selectionPath.length), Array.isArray(e11.argumentPath) && (t += e11.argumentPath.length), t;
}
function $o(e11) {
  switch (e11.kind) {
    case "InvalidArgumentValue":
    case "ValueTooLarge":
      return 20;
    case "InvalidArgumentType":
      return 10;
    case "RequiredArgumentMissing":
      return -10;
    default:
      return 0;
  }
}
var pe = class {
  constructor(t, r) {
    __publicField(this, "isRequired", false);
    this.name = t;
    this.value = r;
  }
  makeRequired() {
    return this.isRequired = true, this;
  }
  write(t) {
    let { colors: { green: r } } = t.context;
    t.addMarginSymbol(r(this.isRequired ? "+" : "?")), t.write(r(this.name)), this.isRequired || t.write(r("?")), t.write(r(": ")), typeof this.value == "string" ? t.write(r(this.value)) : t.write(this.value);
  }
};
Uo();
var ft = class {
  constructor(t = 0, r) {
    __publicField(this, "lines", []);
    __publicField(this, "currentLine", "");
    __publicField(this, "currentIndent", 0);
    __publicField(this, "marginSymbol");
    __publicField(this, "afterNextNewLineCallback");
    this.context = r;
    this.currentIndent = t;
  }
  write(t) {
    return typeof t == "string" ? this.currentLine += t : t.write(this), this;
  }
  writeJoined(t, r, n = (i, o) => o.write(i)) {
    let i = r.length - 1;
    for (let o = 0; o < r.length; o++) n(r[o], this), o !== i && this.write(t);
    return this;
  }
  writeLine(t) {
    return this.write(t).newLine();
  }
  newLine() {
    this.lines.push(this.indentedCurrentLine()), this.currentLine = "", this.marginSymbol = void 0;
    let t = this.afterNextNewLineCallback;
    return this.afterNextNewLineCallback = void 0, t == null ? void 0 : t(), this;
  }
  withIndent(t) {
    return this.indent(), t(this), this.unindent(), this;
  }
  afterNextNewline(t) {
    return this.afterNextNewLineCallback = t, this;
  }
  indent() {
    return this.currentIndent++, this;
  }
  unindent() {
    return this.currentIndent > 0 && this.currentIndent--, this;
  }
  addMarginSymbol(t) {
    return this.marginSymbol = t, this;
  }
  toString() {
    return this.lines.concat(this.indentedCurrentLine()).join(`
`);
  }
  getCurrentLineLength() {
    return this.currentLine.length;
  }
  indentedCurrentLine() {
    let t = this.currentLine.padStart(this.currentLine.length + 2 * this.currentIndent);
    return this.marginSymbol ? this.marginSymbol + t.slice(1) : t;
  }
};
qo();
var Ir = class {
  constructor(t) {
    this.value = t;
  }
  write(t) {
    t.write(this.value);
  }
  markAsError() {
    this.value.markAsError();
  }
};
var kr = (e11) => e11, Or = { bold: kr, red: kr, green: kr, dim: kr, enabled: false }, jo = { bold: Ee, red: ze, green: Ft, dim: Dt, enabled: true }, gt = { write(e11) {
  e11.writeLine(",");
} };
var ke = class {
  constructor(t) {
    __publicField(this, "isUnderlined", false);
    __publicField(this, "color", (t) => t);
    this.contents = t;
  }
  underline() {
    return this.isUnderlined = true, this;
  }
  setColor(t) {
    return this.color = t, this;
  }
  write(t) {
    let r = t.getCurrentLineLength();
    t.write(this.color(this.contents)), this.isUnderlined && t.afterNextNewline(() => {
      t.write(" ".repeat(r)).writeLine(this.color("~".repeat(this.contents.length)));
    });
  }
};
var Ue = class {
  constructor() {
    __publicField(this, "hasError", false);
  }
  markAsError() {
    return this.hasError = true, this;
  }
};
var yt = class extends Ue {
  constructor() {
    super(...arguments);
    __publicField(this, "items", []);
  }
  addItem(t) {
    return this.items.push(new Ir(t)), this;
  }
  getField(t) {
    return this.items[t];
  }
  getPrintWidth() {
    return this.items.length === 0 ? 2 : Math.max(...this.items.map((r) => r.value.getPrintWidth())) + 2;
  }
  write(t) {
    if (this.items.length === 0) {
      this.writeEmpty(t);
      return;
    }
    this.writeWithItems(t);
  }
  writeEmpty(t) {
    let r = new ke("[]");
    this.hasError && r.setColor(t.context.colors.red).underline(), t.write(r);
  }
  writeWithItems(t) {
    let { colors: r } = t.context;
    t.writeLine("[").withIndent(() => t.writeJoined(gt, this.items).newLine()).write("]"), this.hasError && t.afterNextNewline(() => {
      t.writeLine(r.red("~".repeat(this.getPrintWidth())));
    });
  }
  asObject() {
  }
};
var ht = class e4 extends Ue {
  constructor() {
    super(...arguments);
    __publicField(this, "fields", {});
    __publicField(this, "suggestions", []);
  }
  addField(t) {
    this.fields[t.name] = t;
  }
  addSuggestion(t) {
    this.suggestions.push(t);
  }
  getField(t) {
    return this.fields[t];
  }
  getDeepField(t) {
    let [r, ...n] = t, i = this.getField(r);
    if (!i) return;
    let o = i;
    for (let s of n) {
      let a;
      if (o.value instanceof e4 ? a = o.value.getField(s) : o.value instanceof yt && (a = o.value.getField(Number(s))), !a) return;
      o = a;
    }
    return o;
  }
  getDeepFieldValue(t) {
    var _a5;
    return t.length === 0 ? this : (_a5 = this.getDeepField(t)) == null ? void 0 : _a5.value;
  }
  hasField(t) {
    return !!this.getField(t);
  }
  removeAllFields() {
    this.fields = {};
  }
  removeField(t) {
    delete this.fields[t];
  }
  getFields() {
    return this.fields;
  }
  isEmpty() {
    return Object.keys(this.fields).length === 0;
  }
  getFieldValue(t) {
    var _a5;
    return (_a5 = this.getField(t)) == null ? void 0 : _a5.value;
  }
  getDeepSubSelectionValue(t) {
    let r = this;
    for (let n of t) {
      if (!(r instanceof e4)) return;
      let i = r.getSubSelectionValue(n);
      if (!i) return;
      r = i;
    }
    return r;
  }
  getDeepSelectionParent(t) {
    let r = this.getSelectionParent();
    if (!r) return;
    let n = r;
    for (let i of t) {
      let o = n.value.getFieldValue(i);
      if (!o || !(o instanceof e4)) return;
      let s = o.getSelectionParent();
      if (!s) return;
      n = s;
    }
    return n;
  }
  getSelectionParent() {
    var _a5, _b2;
    let t = (_a5 = this.getField("select")) == null ? void 0 : _a5.value.asObject();
    if (t) return { kind: "select", value: t };
    let r = (_b2 = this.getField("include")) == null ? void 0 : _b2.value.asObject();
    if (r) return { kind: "include", value: r };
  }
  getSubSelectionValue(t) {
    var _a5;
    return (_a5 = this.getSelectionParent()) == null ? void 0 : _a5.value.fields[t].value;
  }
  getPrintWidth() {
    let t = Object.values(this.fields);
    return t.length == 0 ? 2 : Math.max(...t.map((n) => n.getPrintWidth())) + 2;
  }
  write(t) {
    let r = Object.values(this.fields);
    if (r.length === 0 && this.suggestions.length === 0) {
      this.writeEmpty(t);
      return;
    }
    this.writeWithContents(t, r);
  }
  asObject() {
    return this;
  }
  writeEmpty(t) {
    let r = new ke("{}");
    this.hasError && r.setColor(t.context.colors.red).underline(), t.write(r);
  }
  writeWithContents(t, r) {
    t.writeLine("{").withIndent(() => {
      t.writeJoined(gt, [...r, ...this.suggestions]).newLine();
    }), t.write("}"), this.hasError && t.afterNextNewline(() => {
      t.writeLine(t.context.colors.red("~".repeat(this.getPrintWidth())));
    });
  }
};
var Z = class extends Ue {
  constructor(r) {
    super();
    this.text = r;
  }
  getPrintWidth() {
    return this.text.length;
  }
  write(r) {
    let n = new ke(this.text);
    this.hasError && n.underline().setColor(r.context.colors.red), r.write(n);
  }
  asObject() {
  }
};
var Jt = class {
  constructor() {
    __publicField(this, "fields", []);
  }
  addField(t, r) {
    return this.fields.push({ write(n) {
      let { green: i, dim: o } = n.context.colors;
      n.write(i(o(`${t}: ${r}`))).addMarginSymbol(i(o("+")));
    } }), this;
  }
  write(t) {
    let { colors: { green: r } } = t.context;
    t.writeLine(r("{")).withIndent(() => {
      t.writeJoined(gt, this.fields).newLine();
    }).write(r("}")).addMarginSymbol(r("+"));
  }
};
function Cr(e11, t, r) {
  switch (e11.kind) {
    case "MutuallyExclusiveFields":
      sc(e11, t);
      break;
    case "IncludeOnScalar":
      ac(e11, t);
      break;
    case "EmptySelection":
      lc(e11, t, r);
      break;
    case "UnknownSelectionField":
      dc(e11, t);
      break;
    case "InvalidSelectionValue":
      mc(e11, t);
      break;
    case "UnknownArgument":
      fc(e11, t);
      break;
    case "UnknownInputField":
      gc(e11, t);
      break;
    case "RequiredArgumentMissing":
      yc(e11, t);
      break;
    case "InvalidArgumentType":
      hc(e11, t);
      break;
    case "InvalidArgumentValue":
      wc(e11, t);
      break;
    case "ValueTooLarge":
      xc(e11, t);
      break;
    case "SomeFieldsMissing":
      bc(e11, t);
      break;
    case "TooManyFieldsGiven":
      Pc(e11, t);
      break;
    case "Union":
      Lo(e11, t, r);
      break;
    default:
      throw new Error("not implemented: " + e11.kind);
  }
}
function sc(e11, t) {
  var _a5, _b2, _c3;
  let r = (_a5 = t.arguments.getDeepSubSelectionValue(e11.selectionPath)) == null ? void 0 : _a5.asObject();
  r && ((_b2 = r.getField(e11.firstField)) == null ? void 0 : _b2.markAsError(), (_c3 = r.getField(e11.secondField)) == null ? void 0 : _c3.markAsError()), t.addErrorMessage((n) => `Please ${n.bold("either")} use ${n.green(`\`${e11.firstField}\``)} or ${n.green(`\`${e11.secondField}\``)}, but ${n.red("not both")} at the same time.`);
}
function ac(e11, t) {
  var _a5, _b2;
  let [r, n] = wt(e11.selectionPath), i = e11.outputType, o = (_a5 = t.arguments.getDeepSelectionParent(r)) == null ? void 0 : _a5.value;
  if (o && ((_b2 = o.getField(n)) == null ? void 0 : _b2.markAsError(), i)) for (let s of i.fields) s.isRelation && o.addSuggestion(new pe(s.name, "true"));
  t.addErrorMessage((s) => {
    let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold("include")} statement`;
    return i ? a += ` on model ${s.bold(i.name)}. ${Gt(s)}` : a += ".", a += `
Note that ${s.bold("include")} statements only accept relation fields.`, a;
  });
}
function lc(e11, t, r) {
  var _a5, _b2;
  let n = (_a5 = t.arguments.getDeepSubSelectionValue(e11.selectionPath)) == null ? void 0 : _a5.asObject();
  if (n) {
    let i = (_b2 = n.getField("omit")) == null ? void 0 : _b2.value.asObject();
    if (i) {
      uc(e11, t, i);
      return;
    }
    if (n.hasField("select")) {
      cc(e11, t);
      return;
    }
  }
  if (r == null ? void 0 : r[qe(e11.outputType.name)]) {
    pc(e11, t);
    return;
  }
  t.addErrorMessage(() => `Unknown field at "${e11.selectionPath.join(".")} selection"`);
}
function uc(e11, t, r) {
  r.removeAllFields();
  for (let n of e11.outputType.fields) r.addSuggestion(new pe(n.name, "false"));
  t.addErrorMessage((n) => `The ${n.red("omit")} statement includes every field of the model ${n.bold(e11.outputType.name)}. At least one field must be included in the result`);
}
function cc(e11, t) {
  var _a5;
  let r = e11.outputType, n = (_a5 = t.arguments.getDeepSelectionParent(e11.selectionPath)) == null ? void 0 : _a5.value, i = (n == null ? void 0 : n.isEmpty()) ?? false;
  n && (n.removeAllFields(), Go(n, r)), t.addErrorMessage((o) => i ? `The ${o.red("`select`")} statement for type ${o.bold(r.name)} must not be empty. ${Gt(o)}` : `The ${o.red("`select`")} statement for type ${o.bold(r.name)} needs ${o.bold("at least one truthy value")}.`);
}
function pc(e11, t) {
  var _a5, _b2;
  let r = new Jt();
  for (let i of e11.outputType.fields) i.isRelation || r.addField(i.name, "false");
  let n = new pe("omit", r).makeRequired();
  if (e11.selectionPath.length === 0) t.arguments.addSuggestion(n);
  else {
    let [i, o] = wt(e11.selectionPath), a = (_b2 = (_a5 = t.arguments.getDeepSelectionParent(i)) == null ? void 0 : _a5.value.asObject()) == null ? void 0 : _b2.getField(o);
    if (a) {
      let u = (a == null ? void 0 : a.value.asObject()) ?? new ht();
      u.addSuggestion(n), a.value = u;
    }
  }
  t.addErrorMessage((i) => `The global ${i.red("omit")} configuration excludes every field of the model ${i.bold(e11.outputType.name)}. At least one field must be included in the result`);
}
function dc(e11, t) {
  let r = zo(e11.selectionPath, t);
  if (r.parentKind !== "unknown") {
    r.field.markAsError();
    let n = r.parent;
    switch (r.parentKind) {
      case "select":
        Go(n, e11.outputType);
        break;
      case "include":
        Ec(n, e11.outputType);
        break;
      case "omit":
        Tc(n, e11.outputType);
        break;
    }
  }
  t.addErrorMessage((n) => {
    let i = [`Unknown field ${n.red(`\`${r.fieldName}\``)}`];
    return r.parentKind !== "unknown" && i.push(`for ${n.bold(r.parentKind)} statement`), i.push(`on model ${n.bold(`\`${e11.outputType.name}\``)}.`), i.push(Gt(n)), i.join(" ");
  });
}
function mc(e11, t) {
  let r = zo(e11.selectionPath, t);
  r.parentKind !== "unknown" && r.field.value.markAsError(), t.addErrorMessage((n) => `Invalid value for selection field \`${n.red(r.fieldName)}\`: ${e11.underlyingError}`);
}
function fc(e11, t) {
  var _a5, _b2;
  let r = e11.argumentPath[0], n = (_a5 = t.arguments.getDeepSubSelectionValue(e11.selectionPath)) == null ? void 0 : _a5.asObject();
  n && ((_b2 = n.getField(r)) == null ? void 0 : _b2.markAsError(), vc(n, e11.arguments)), t.addErrorMessage((i) => Qo(i, r, e11.arguments.map((o) => o.name)));
}
function gc(e11, t) {
  var _a5, _b2, _c3;
  let [r, n] = wt(e11.argumentPath), i = (_a5 = t.arguments.getDeepSubSelectionValue(e11.selectionPath)) == null ? void 0 : _a5.asObject();
  if (i) {
    (_b2 = i.getDeepField(e11.argumentPath)) == null ? void 0 : _b2.markAsError();
    let o = (_c3 = i.getDeepFieldValue(r)) == null ? void 0 : _c3.asObject();
    o && Ho(o, e11.inputType);
  }
  t.addErrorMessage((o) => Qo(o, n, e11.inputType.fields.map((s) => s.name)));
}
function Qo(e11, t, r) {
  let n = [`Unknown argument \`${e11.red(t)}\`.`], i = Ac(t, r);
  return i && n.push(`Did you mean \`${e11.green(i)}\`?`), r.length > 0 && n.push(Gt(e11)), n.join(" ");
}
function yc(e11, t) {
  var _a5, _b2, _c3;
  let r;
  t.addErrorMessage((u) => (r == null ? void 0 : r.value) instanceof Z && r.value.text === "null" ? `Argument \`${u.green(o)}\` must not be ${u.red("null")}.` : `Argument \`${u.green(o)}\` is missing.`);
  let n = (_a5 = t.arguments.getDeepSubSelectionValue(e11.selectionPath)) == null ? void 0 : _a5.asObject();
  if (!n) return;
  let [i, o] = wt(e11.argumentPath), s = new Jt(), a = (_b2 = n.getDeepFieldValue(i)) == null ? void 0 : _b2.asObject();
  if (a) {
    if (r = a.getField(o), r && a.removeField(o), e11.inputTypes.length === 1 && e11.inputTypes[0].kind === "object") {
      for (let u of e11.inputTypes[0].fields) s.addField(u.name, u.typeNames.join(" | "));
      a.addSuggestion(new pe(o, s).makeRequired());
    } else {
      let u = e11.inputTypes.map(Jo).join(" | ");
      a.addSuggestion(new pe(o, u).makeRequired());
    }
    if (e11.dependentArgumentPath) {
      (_c3 = n.getDeepField(e11.dependentArgumentPath)) == null ? void 0 : _c3.markAsError();
      let [, u] = wt(e11.dependentArgumentPath);
      t.addErrorMessage((m) => `Argument \`${m.green(o)}\` is required because argument \`${m.green(u)}\` was provided.`);
    }
  }
}
function Jo(e11) {
  return e11.kind === "list" ? `${Jo(e11.elementType)}[]` : e11.name;
}
function hc(e11, t) {
  var _a5, _b2;
  let r = e11.argument.name, n = (_a5 = t.arguments.getDeepSubSelectionValue(e11.selectionPath)) == null ? void 0 : _a5.asObject();
  n && ((_b2 = n.getDeepFieldValue(e11.argumentPath)) == null ? void 0 : _b2.markAsError()), t.addErrorMessage((i) => {
    let o = Nr("or", e11.argument.typeNames.map((s) => i.green(s)));
    return `Argument \`${i.bold(r)}\`: Invalid value provided. Expected ${o}, provided ${i.red(e11.inferredType)}.`;
  });
}
function wc(e11, t) {
  var _a5, _b2;
  let r = e11.argument.name, n = (_a5 = t.arguments.getDeepSubSelectionValue(e11.selectionPath)) == null ? void 0 : _a5.asObject();
  n && ((_b2 = n.getDeepFieldValue(e11.argumentPath)) == null ? void 0 : _b2.markAsError()), t.addErrorMessage((i) => {
    let o = [`Invalid value for argument \`${i.bold(r)}\``];
    if (e11.underlyingError && o.push(`: ${e11.underlyingError}`), o.push("."), e11.argument.typeNames.length > 0) {
      let s = Nr("or", e11.argument.typeNames.map((a) => i.green(a)));
      o.push(` Expected ${s}.`);
    }
    return o.join("");
  });
}
function xc(e11, t) {
  var _a5, _b2;
  let r = e11.argument.name, n = (_a5 = t.arguments.getDeepSubSelectionValue(e11.selectionPath)) == null ? void 0 : _a5.asObject(), i;
  if (n) {
    let s = (_b2 = n.getDeepField(e11.argumentPath)) == null ? void 0 : _b2.value;
    s == null ? void 0 : s.markAsError(), s instanceof Z && (i = s.text);
  }
  t.addErrorMessage((o) => {
    let s = ["Unable to fit value"];
    return i && s.push(o.red(i)), s.push(`into a 64-bit signed integer for field \`${o.bold(r)}\``), s.join(" ");
  });
}
function bc(e11, t) {
  var _a5, _b2;
  let r = e11.argumentPath[e11.argumentPath.length - 1], n = (_a5 = t.arguments.getDeepSubSelectionValue(e11.selectionPath)) == null ? void 0 : _a5.asObject();
  if (n) {
    let i = (_b2 = n.getDeepFieldValue(e11.argumentPath)) == null ? void 0 : _b2.asObject();
    i && Ho(i, e11.inputType);
  }
  t.addErrorMessage((i) => {
    let o = [`Argument \`${i.bold(r)}\` of type ${i.bold(e11.inputType.name)} needs`];
    return e11.constraints.minFieldCount === 1 ? e11.constraints.requiredFields ? o.push(`${i.green("at least one of")} ${Nr("or", e11.constraints.requiredFields.map((s) => `\`${i.bold(s)}\``))} arguments.`) : o.push(`${i.green("at least one")} argument.`) : o.push(`${i.green(`at least ${e11.constraints.minFieldCount}`)} arguments.`), o.push(Gt(i)), o.join(" ");
  });
}
function Pc(e11, t) {
  var _a5, _b2;
  let r = e11.argumentPath[e11.argumentPath.length - 1], n = (_a5 = t.arguments.getDeepSubSelectionValue(e11.selectionPath)) == null ? void 0 : _a5.asObject(), i = [];
  if (n) {
    let o = (_b2 = n.getDeepFieldValue(e11.argumentPath)) == null ? void 0 : _b2.asObject();
    o && (o.markAsError(), i = Object.keys(o.getFields()));
  }
  t.addErrorMessage((o) => {
    let s = [`Argument \`${o.bold(r)}\` of type ${o.bold(e11.inputType.name)} needs`];
    return e11.constraints.minFieldCount === 1 && e11.constraints.maxFieldCount == 1 ? s.push(`${o.green("exactly one")} argument,`) : e11.constraints.maxFieldCount == 1 ? s.push(`${o.green("at most one")} argument,`) : s.push(`${o.green(`at most ${e11.constraints.maxFieldCount}`)} arguments,`), s.push(`but you provided ${Nr("and", i.map((a) => o.red(a)))}. Please choose`), e11.constraints.maxFieldCount === 1 ? s.push("one.") : s.push(`${e11.constraints.maxFieldCount}.`), s.join(" ");
  });
}
function Go(e11, t) {
  for (let r of t.fields) e11.hasField(r.name) || e11.addSuggestion(new pe(r.name, "true"));
}
function Ec(e11, t) {
  for (let r of t.fields) r.isRelation && !e11.hasField(r.name) && e11.addSuggestion(new pe(r.name, "true"));
}
function Tc(e11, t) {
  for (let r of t.fields) !e11.hasField(r.name) && !r.isRelation && e11.addSuggestion(new pe(r.name, "true"));
}
function vc(e11, t) {
  for (let r of t) e11.hasField(r.name) || e11.addSuggestion(new pe(r.name, r.typeNames.join(" | ")));
}
function zo(e11, t) {
  var _a5, _b2, _c3, _d3;
  let [r, n] = wt(e11), i = (_a5 = t.arguments.getDeepSubSelectionValue(r)) == null ? void 0 : _a5.asObject();
  if (!i) return { parentKind: "unknown", fieldName: n };
  let o = (_b2 = i.getFieldValue("select")) == null ? void 0 : _b2.asObject(), s = (_c3 = i.getFieldValue("include")) == null ? void 0 : _c3.asObject(), a = (_d3 = i.getFieldValue("omit")) == null ? void 0 : _d3.asObject(), u = o == null ? void 0 : o.getField(n);
  return o && u ? { parentKind: "select", parent: o, field: u, fieldName: n } : (u = s == null ? void 0 : s.getField(n), s && u ? { parentKind: "include", field: u, parent: s, fieldName: n } : (u = a == null ? void 0 : a.getField(n), a && u ? { parentKind: "omit", field: u, parent: a, fieldName: n } : { parentKind: "unknown", fieldName: n }));
}
function Ho(e11, t) {
  if (t.kind === "object") for (let r of t.fields) e11.hasField(r.name) || e11.addSuggestion(new pe(r.name, r.typeNames.join(" | ")));
}
function wt(e11) {
  let t = [...e11], r = t.pop();
  if (!r) throw new Error("unexpected empty path");
  return [t, r];
}
function Gt({ green: e11, enabled: t }) {
  return "Available options are " + (t ? `listed in ${e11("green")}` : "marked with ?") + ".";
}
function Nr(e11, t) {
  if (t.length === 1) return t[0];
  let r = [...t], n = r.pop();
  return `${r.join(", ")} ${e11} ${n}`;
}
var Sc = 3;
function Ac(e11, t) {
  let r = 1 / 0, n;
  for (let i of t) {
    let o = (0, Bo.default)(e11, i);
    o > Sc || o < r && (r = o, n = i);
  }
  return n;
}
var Ko = dist;
var zt = class {
  constructor(t, r, n, i, o) {
    __publicField(this, "modelName");
    __publicField(this, "name");
    __publicField(this, "typeName");
    __publicField(this, "isList");
    __publicField(this, "isEnum");
    this.modelName = t, this.name = r, this.typeName = n, this.isList = i, this.isEnum = o;
  }
  _toGraphQLInputType() {
    let t = this.isList ? "List" : "", r = this.isEnum ? "Enum" : "";
    return `${t}${r}${this.typeName}FieldRefInput<${this.modelName}>`;
  }
};
function xt(e11) {
  return e11 instanceof zt;
}
var Wo = ": ", Dr = class {
  constructor(t, r) {
    __publicField(this, "hasError", false);
    this.name = t;
    this.value = r;
  }
  markAsError() {
    this.hasError = true;
  }
  getPrintWidth() {
    return this.name.length + this.value.getPrintWidth() + Wo.length;
  }
  write(t) {
    let r = new ke(this.name);
    this.hasError && r.underline().setColor(t.context.colors.red), t.write(r).write(Wo).write(this.value);
  }
};
var jn = class {
  constructor(t) {
    __publicField(this, "arguments");
    __publicField(this, "errorMessages", []);
    this.arguments = t;
  }
  write(t) {
    t.write(this.arguments);
  }
  addErrorMessage(t) {
    this.errorMessages.push(t);
  }
  renderAllMessages(t) {
    return this.errorMessages.map((r) => r(t)).join(`
`);
  }
};
function bt(e11) {
  return new jn(Zo(e11));
}
function Zo(e11) {
  let t = new ht();
  for (let [r, n] of Object.entries(e11)) {
    let i = new Dr(r, Xo(n));
    t.addField(i);
  }
  return t;
}
function Xo(e11) {
  if (typeof e11 == "string") return new Z(JSON.stringify(e11));
  if (typeof e11 == "number" || typeof e11 == "boolean") return new Z(String(e11));
  if (typeof e11 == "bigint") return new Z(`${e11}n`);
  if (e11 === null) return new Z("null");
  if (e11 === void 0) return new Z("undefined");
  if (dt(e11)) return new Z(`new Prisma.Decimal("${e11.toFixed()}")`);
  if (e11 instanceof Uint8Array) return Buffer.isBuffer(e11) ? new Z(`Buffer.alloc(${e11.byteLength})`) : new Z(`new Uint8Array(${e11.byteLength})`);
  if (e11 instanceof Date) {
    let t = pt(e11) ? e11.toISOString() : "Invalid Date";
    return new Z(`new Date("${t}")`);
  }
  return (0, Ko.isObjectEnumValue)(e11) ? new Z(`Prisma.${e11._getName()}`) : xt(e11) ? new Z(`prisma.${qe(e11.modelName)}.$fields.${e11.name}`) : Array.isArray(e11) ? Rc(e11) : typeof e11 == "object" ? Zo(e11) : new Z(Object.prototype.toString.call(e11));
}
function Rc(e11) {
  let t = new yt();
  for (let r of e11) t.addItem(Xo(r));
  return t;
}
function Mr(e11, t) {
  let r = t === "pretty" ? jo : Or, n = e11.renderAllMessages(r), i = new ft(0, { colors: r }).write(e11).toString();
  return { message: n, args: i };
}
function Fr({ args: e11, errors: t, errorFormat: r, callsite: n, originalMethod: i, clientVersion: o, globalOmit: s }) {
  let a = bt(e11);
  for (let T of t) Cr(T, a, s);
  let { message: u, args: m } = Mr(a, r), P2 = Rr({ message: u, callsite: n, originalMethod: i, showColors: r === "pretty", callArguments: m });
  throw new Yo.PrismaClientValidationError(P2, { clientVersion: o });
}
function Oe(e11) {
  return e11.replace(/^./, (t) => t.toLowerCase());
}
function ts(e11, t, r) {
  let n = Oe(r);
  return !t.result || !(t.result.$allModels || t.result[n]) ? e11 : Cc({ ...e11, ...es(t.name, e11, t.result.$allModels), ...es(t.name, e11, t.result[n]) });
}
function Cc(e11) {
  let t = new Ie(), r = (n, i) => t.getOrCreate(n, () => i.has(n) ? [n] : (i.add(n), e11[n] ? e11[n].needs.flatMap((o) => r(o, i)) : [n]));
  return vr(e11, (n) => ({ ...n, needs: r(n.name, /* @__PURE__ */ new Set()) }));
}
function es(e11, t, r) {
  return r ? vr(r, ({ needs: n, compute: i }, o) => ({ name: o, needs: n ? Object.keys(n).filter((s) => n[s]) : [], compute: Ic(t, o, i) })) : {};
}
function Ic(e11, t, r) {
  var _a5;
  let n = (_a5 = e11 == null ? void 0 : e11[t]) == null ? void 0 : _a5.compute;
  return n ? (i, o) => r({ ...i, [t]: n(i, o) }, o) : r;
}
function rs(e11, t) {
  if (!t) return e11;
  let r = { ...e11 };
  for (let n of Object.values(t)) if (e11[n.name]) for (let i of n.needs) r[i] = true;
  return r;
}
function ns(e11, t) {
  if (!t) return e11;
  let r = { ...e11 };
  for (let n of Object.values(t)) if (!e11[n.name]) for (let i of n.needs) delete r[i];
  return r;
}
var _r = class {
  constructor(t, r) {
    __publicField(this, "computedFieldsCache", new Ie());
    __publicField(this, "modelExtensionsCache", new Ie());
    __publicField(this, "queryCallbacksCache", new Ie());
    __publicField(this, "clientExtensions", Nt(() => {
      var _a5, _b2;
      return this.extension.client ? { ...(_a5 = this.previous) == null ? void 0 : _a5.getAllClientExtensions(), ...this.extension.client } : (_b2 = this.previous) == null ? void 0 : _b2.getAllClientExtensions();
    }));
    __publicField(this, "batchCallbacks", Nt(() => {
      var _a5, _b2;
      let t = ((_a5 = this.previous) == null ? void 0 : _a5.getAllBatchQueryCallbacks()) ?? [], r = (_b2 = this.extension.query) == null ? void 0 : _b2.$__internalBatch;
      return r ? t.concat(r) : t;
    }));
    this.extension = t;
    this.previous = r;
  }
  getAllComputedFields(t) {
    return this.computedFieldsCache.getOrCreate(t, () => {
      var _a5;
      return ts((_a5 = this.previous) == null ? void 0 : _a5.getAllComputedFields(t), this.extension, t);
    });
  }
  getAllClientExtensions() {
    return this.clientExtensions.get();
  }
  getAllModelExtensions(t) {
    return this.modelExtensionsCache.getOrCreate(t, () => {
      var _a5, _b2;
      let r = Oe(t);
      return !this.extension.model || !(this.extension.model[r] || this.extension.model.$allModels) ? (_a5 = this.previous) == null ? void 0 : _a5.getAllModelExtensions(t) : { ...(_b2 = this.previous) == null ? void 0 : _b2.getAllModelExtensions(t), ...this.extension.model.$allModels, ...this.extension.model[r] };
    });
  }
  getAllQueryCallbacks(t, r) {
    return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => {
      var _a5;
      let n = ((_a5 = this.previous) == null ? void 0 : _a5.getAllQueryCallbacks(t, r)) ?? [], i = [], o = this.extension.query;
      return !o || !(o[t] || o.$allModels || o[r] || o.$allOperations) ? n : (o[t] !== void 0 && (o[t][r] !== void 0 && i.push(o[t][r]), o[t].$allOperations !== void 0 && i.push(o[t].$allOperations)), t !== "$none" && o.$allModels !== void 0 && (o.$allModels[r] !== void 0 && i.push(o.$allModels[r]), o.$allModels.$allOperations !== void 0 && i.push(o.$allModels.$allOperations)), o[r] !== void 0 && i.push(o[r]), o.$allOperations !== void 0 && i.push(o.$allOperations), n.concat(i));
    });
  }
  getAllBatchQueryCallbacks() {
    return this.batchCallbacks.get();
  }
}, Pt = class e5 {
  constructor(t) {
    this.head = t;
  }
  static empty() {
    return new e5();
  }
  static single(t) {
    return new e5(new _r(t));
  }
  isEmpty() {
    return this.head === void 0;
  }
  append(t) {
    return new e5(new _r(t, this.head));
  }
  getAllComputedFields(t) {
    var _a5;
    return (_a5 = this.head) == null ? void 0 : _a5.getAllComputedFields(t);
  }
  getAllClientExtensions() {
    var _a5;
    return (_a5 = this.head) == null ? void 0 : _a5.getAllClientExtensions();
  }
  getAllModelExtensions(t) {
    var _a5;
    return (_a5 = this.head) == null ? void 0 : _a5.getAllModelExtensions(t);
  }
  getAllQueryCallbacks(t, r) {
    var _a5;
    return ((_a5 = this.head) == null ? void 0 : _a5.getAllQueryCallbacks(t, r)) ?? [];
  }
  getAllBatchQueryCallbacks() {
    var _a5;
    return ((_a5 = this.head) == null ? void 0 : _a5.getAllBatchQueryCallbacks()) ?? [];
  }
};
var $r = class {
  constructor(t) {
    this.name = t;
  }
};
function is(e11) {
  return e11 instanceof $r;
}
function os(e11) {
  return new $r(e11);
}
var ss = Symbol(), Ht = class {
  constructor(t) {
    if (t !== ss) throw new Error("Skip instance can not be constructed directly");
  }
  ifUndefined(t) {
    return t === void 0 ? Lr : t;
  }
}, Lr = new Ht(ss);
function fe(e11) {
  return e11 instanceof Ht;
}
var kc = { findUnique: "findUnique", findUniqueOrThrow: "findUniqueOrThrow", findFirst: "findFirst", findFirstOrThrow: "findFirstOrThrow", findMany: "findMany", count: "aggregate", create: "createOne", createMany: "createMany", createManyAndReturn: "createManyAndReturn", update: "updateOne", updateMany: "updateMany", updateManyAndReturn: "updateManyAndReturn", upsert: "upsertOne", delete: "deleteOne", deleteMany: "deleteMany", executeRaw: "executeRaw", queryRaw: "queryRaw", aggregate: "aggregate", groupBy: "groupBy", runCommandRaw: "runCommandRaw", findRaw: "findRaw", aggregateRaw: "aggregateRaw" }, ls = "explicitly `undefined` values are not allowed";
function Vr({ modelName: e11, action: t, args: r, runtimeDataModel: n, extensions: i = Pt.empty(), callsite: o, clientMethod: s, errorFormat: a, clientVersion: u, previewFeatures: m, globalOmit: P2, wrapRawValues: T }) {
  let S = new Bn({ runtimeDataModel: n, modelName: e11, action: t, rootArgs: r, callsite: o, extensions: i, selectionPath: [], argumentPath: [], originalMethod: s, errorFormat: a, clientVersion: u, previewFeatures: m, globalOmit: P2, wrapRawValues: T });
  return { modelName: e11, action: kc[t], query: Wt(r, S) };
}
function Wt({ select: e11, include: t, ...r } = {}, n) {
  let i = r.omit;
  return delete r.omit, { arguments: cs(r, n), selection: Oc(e11, t, i, n) };
}
function Oc(e11, t, r, n) {
  return e11 ? (t ? n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "include", secondField: "select", selectionPath: n.getSelectionPath() }) : r && n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "omit", secondField: "select", selectionPath: n.getSelectionPath() }), Fc(e11, n)) : Nc(n, t, r);
}
function Nc(e11, t, r) {
  let n = {};
  return e11.modelOrType && !e11.isRawAction() && (n.$composites = true, n.$scalars = true), t && Dc(n, t, e11), Mc(n, r, e11), n;
}
function Dc(e11, t, r) {
  for (let [n, i] of Object.entries(t)) {
    if (fe(i)) continue;
    let o = r.nestSelection(n);
    if (Qn(i, o), i === false || i === void 0) {
      e11[n] = false;
      continue;
    }
    let s = r.findField(n);
    if (s && s.kind !== "object" && r.throwValidationError({ kind: "IncludeOnScalar", selectionPath: r.getSelectionPath().concat(n), outputType: r.getOutputTypeDescription() }), s) {
      e11[n] = Wt(i === true ? {} : i, o);
      continue;
    }
    if (i === true) {
      e11[n] = true;
      continue;
    }
    e11[n] = Wt(i, o);
  }
}
function Mc(e11, t, r) {
  let n = r.getComputedFields(), i = { ...r.getGlobalOmit(), ...t }, o = ns(i, n);
  for (let [s, a] of Object.entries(o)) {
    if (fe(a)) continue;
    Qn(a, r.nestSelection(s));
    let u = r.findField(s);
    (n == null ? void 0 : n[s]) && !u || (e11[s] = !a);
  }
}
function Fc(e11, t) {
  let r = {}, n = t.getComputedFields(), i = rs(e11, n);
  for (let [o, s] of Object.entries(i)) {
    if (fe(s)) continue;
    let a = t.nestSelection(o);
    Qn(s, a);
    let u = t.findField(o);
    if (!((n == null ? void 0 : n[o]) && !u)) {
      if (s === false || s === void 0 || fe(s)) {
        r[o] = false;
        continue;
      }
      if (s === true) {
        (u == null ? void 0 : u.kind) === "object" ? r[o] = Wt({}, a) : r[o] = true;
        continue;
      }
      r[o] = Wt(s, a);
    }
  }
  return r;
}
function us(e11, t) {
  if (e11 === null) return null;
  if (typeof e11 == "string" || typeof e11 == "number" || typeof e11 == "boolean") return e11;
  if (typeof e11 == "bigint") return { $type: "BigInt", value: String(e11) };
  if (ct(e11)) {
    if (pt(e11)) return { $type: "DateTime", value: e11.toISOString() };
    t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: ["Date"] }, underlyingError: "Provided Date object is invalid" });
  }
  if (is(e11)) return { $type: "Param", value: e11.name };
  if (xt(e11)) return { $type: "FieldRef", value: { _ref: e11.name, _container: e11.modelName } };
  if (Array.isArray(e11)) return _c(e11, t);
  if (ArrayBuffer.isView(e11)) {
    let { buffer: r, byteOffset: n, byteLength: i } = e11;
    return { $type: "Bytes", value: Buffer.from(r, n, i).toString("base64") };
  }
  if ($c(e11)) return e11.values;
  if (dt(e11)) return { $type: "Decimal", value: e11.toFixed() };
  if ((0, as.isObjectEnumValue)(e11)) {
    let r = e11._getName();
    if (r !== "DbNull" && r !== "JsonNull" && r !== "AnyNull") throw new Error(`Invalid ObjectEnumValue: expected DbNull, JsonNull, or AnyNull, got ${r}`);
    return { $type: "Enum", value: r };
  }
  if (Lc(e11)) return e11.toJSON();
  if (typeof e11 == "object") return cs(e11, t);
  t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: `We could not serialize ${Object.prototype.toString.call(e11)} value. Serialize the object to JSON or implement a ".toJSON()" method on it` });
}
function cs(e11, t) {
  if (t.shouldWrapRawValues() && e11.$type) return { $type: "Raw", value: e11 };
  let r = {};
  for (let n in e11) {
    let i = e11[n], o = t.nestArgument(n);
    fe(i) || (i !== void 0 ? r[n] = us(i, o) : t.isPreviewFeatureOn("strictUndefinedChecks") && t.throwValidationError({ kind: "InvalidArgumentValue", argumentPath: o.getArgumentPath(), selectionPath: t.getSelectionPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: ls }));
  }
  return r;
}
function _c(e11, t) {
  let r = [];
  for (let n = 0; n < e11.length; n++) {
    let i = t.nestArgument(String(n)), o = e11[n];
    if (o === void 0 || fe(o)) {
      let s = o === void 0 ? "undefined" : "Prisma.skip";
      t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: i.getSelectionPath(), argumentPath: i.getArgumentPath(), argument: { name: `${t.getArgumentName()}[${n}]`, typeNames: [] }, underlyingError: `Can not use \`${s}\` value within array. Use \`null\` or filter out \`${s}\` values` });
    }
    r.push(us(o, i));
  }
  return r;
}
function $c(e11) {
  return typeof e11 == "object" && e11 !== null && e11.__prismaRawParameters__ === true;
}
function Lc(e11) {
  return typeof e11 == "object" && e11 !== null && typeof e11.toJSON == "function";
}
function Qn(e11, t) {
  e11 === void 0 && t.isPreviewFeatureOn("strictUndefinedChecks") && t.throwValidationError({ kind: "InvalidSelectionValue", selectionPath: t.getSelectionPath(), underlyingError: ls });
}
var Bn = class e6 {
  constructor(t) {
    __publicField(this, "modelOrType");
    this.params = t;
    this.params.modelName && (this.modelOrType = this.params.runtimeDataModel.models[this.params.modelName] ?? this.params.runtimeDataModel.types[this.params.modelName]);
  }
  throwValidationError(t) {
    Fr({ errors: [t], originalMethod: this.params.originalMethod, args: this.params.rootArgs ?? {}, callsite: this.params.callsite, errorFormat: this.params.errorFormat, clientVersion: this.params.clientVersion, globalOmit: this.params.globalOmit });
  }
  getSelectionPath() {
    return this.params.selectionPath;
  }
  getArgumentPath() {
    return this.params.argumentPath;
  }
  getArgumentName() {
    return this.params.argumentPath[this.params.argumentPath.length - 1];
  }
  getOutputTypeDescription() {
    if (!(!this.params.modelName || !this.modelOrType)) return { name: this.params.modelName, fields: this.modelOrType.fields.map((t) => ({ name: t.name, typeName: "boolean", isRelation: t.kind === "object" })) };
  }
  isRawAction() {
    return ["executeRaw", "queryRaw", "runCommandRaw", "findRaw", "aggregateRaw"].includes(this.params.action);
  }
  isPreviewFeatureOn(t) {
    return this.params.previewFeatures.includes(t);
  }
  shouldWrapRawValues() {
    return this.params.wrapRawValues ?? true;
  }
  getComputedFields() {
    if (this.params.modelName) return this.params.extensions.getAllComputedFields(this.params.modelName);
  }
  findField(t) {
    var _a5;
    return (_a5 = this.modelOrType) == null ? void 0 : _a5.fields.find((r) => r.name === t);
  }
  nestSelection(t) {
    let r = this.findField(t), n = (r == null ? void 0 : r.kind) === "object" ? r.type : void 0;
    return new e6({ ...this.params, modelName: n, selectionPath: this.params.selectionPath.concat(t) });
  }
  getGlobalOmit() {
    var _a5;
    return this.params.modelName && this.shouldApplyGlobalOmit() ? ((_a5 = this.params.globalOmit) == null ? void 0 : _a5[qe(this.params.modelName)]) ?? {} : {};
  }
  shouldApplyGlobalOmit() {
    switch (this.params.action) {
      case "findFirst":
      case "findFirstOrThrow":
      case "findUniqueOrThrow":
      case "findMany":
      case "upsert":
      case "findUnique":
      case "createManyAndReturn":
      case "create":
      case "update":
      case "updateManyAndReturn":
      case "delete":
        return true;
      case "executeRaw":
      case "aggregateRaw":
      case "runCommandRaw":
      case "findRaw":
      case "createMany":
      case "deleteMany":
      case "groupBy":
      case "updateMany":
      case "count":
      case "aggregate":
      case "queryRaw":
        return false;
      default:
        $e(this.params.action, "Unknown action");
    }
  }
  nestArgument(t) {
    return new e6({ ...this.params, argumentPath: this.params.argumentPath.concat(t) });
  }
};
function ps(e11, t) {
  let r = Nt(() => Vc(t));
  Object.defineProperty(e11, "dmmf", { get: () => r.get() });
}
function Vc(e11) {
  return { datamodel: { models: Jn(e11.models), enums: Jn(e11.enums), types: Jn(e11.types) } };
}
function Jn(e11) {
  return Object.entries(e11).map(([t, r]) => ({ name: t, ...r }));
}
var Gn = /* @__PURE__ */ new WeakMap(), qr = "$$PrismaTypedSql", Kt = class {
  constructor(t, r) {
    Gn.set(this, { sql: t, values: r }), Object.defineProperty(this, qr, { value: qr });
  }
  get sql() {
    return Gn.get(this).sql;
  }
  get values() {
    return Gn.get(this).values;
  }
};
function ds(e11) {
  return (...t) => new Kt(e11, t);
}
function Ur(e11) {
  return e11 != null && e11[qr] === qr;
}
var nu = dist;
var iu = require$$3, ou = require$$4;
function Zt(e11) {
  return { getKeys() {
    return Object.keys(e11);
  }, getPropertyValue(t) {
    return e11[t];
  } };
}
function ae(e11, t) {
  return { getKeys() {
    return [e11];
  }, getPropertyValue() {
    return t();
  } };
}
function We(e11) {
  let t = new Ie();
  return { getKeys() {
    return e11.getKeys();
  }, getPropertyValue(r) {
    return t.getOrCreate(r, () => e11.getPropertyValue(r));
  }, getPropertyDescriptor(r) {
    var _a5;
    return (_a5 = e11.getPropertyDescriptor) == null ? void 0 : _a5.call(e11, r);
  } };
}
var jr = { enumerable: true, configurable: true, writable: true };
function Br(e11) {
  let t = new Set(e11);
  return { getPrototypeOf: () => Object.prototype, getOwnPropertyDescriptor: () => jr, has: (r, n) => t.has(n), set: (r, n, i) => t.add(n) && Reflect.set(r, n, i), ownKeys: () => [...t] };
}
var ms = Symbol.for("nodejs.util.inspect.custom");
function ve(e11, t) {
  let r = qc(t), n = /* @__PURE__ */ new Set(), i = new Proxy(e11, { get(o, s) {
    if (n.has(s)) return o[s];
    let a = r.get(s);
    return a ? a.getPropertyValue(s) : o[s];
  }, has(o, s) {
    var _a5;
    if (n.has(s)) return true;
    let a = r.get(s);
    return a ? ((_a5 = a.has) == null ? void 0 : _a5.call(a, s)) ?? true : Reflect.has(o, s);
  }, ownKeys(o) {
    let s = fs(Reflect.ownKeys(o), r), a = fs(Array.from(r.keys()), r);
    return [.../* @__PURE__ */ new Set([...s, ...a, ...n])];
  }, set(o, s, a) {
    var _a5, _b2, _c3;
    return ((_c3 = (_b2 = (_a5 = r.get(s)) == null ? void 0 : _a5.getPropertyDescriptor) == null ? void 0 : _b2.call(_a5, s)) == null ? void 0 : _c3.writable) === false ? false : (n.add(s), Reflect.set(o, s, a));
  }, getOwnPropertyDescriptor(o, s) {
    let a = Reflect.getOwnPropertyDescriptor(o, s);
    if (a && !a.configurable) return a;
    let u = r.get(s);
    return u ? u.getPropertyDescriptor ? { ...jr, ...u == null ? void 0 : u.getPropertyDescriptor(s) } : jr : a;
  }, defineProperty(o, s, a) {
    return n.add(s), Reflect.defineProperty(o, s, a);
  }, getPrototypeOf: () => Object.prototype });
  return i[ms] = function() {
    let o = { ...this };
    return delete o[ms], o;
  }, i;
}
function qc(e11) {
  let t = /* @__PURE__ */ new Map();
  for (let r of e11) {
    let n = r.getKeys();
    for (let i of n) t.set(i, r);
  }
  return t;
}
function fs(e11, t) {
  return e11.filter((r) => {
    var _a5, _b2;
    return ((_b2 = (_a5 = t.get(r)) == null ? void 0 : _a5.has) == null ? void 0 : _b2.call(_a5, r)) ?? true;
  });
}
function Et(e11) {
  return { getKeys() {
    return e11;
  }, has() {
    return false;
  }, getPropertyValue() {
  } };
}
function gs(e11) {
  if (e11 === void 0) return "";
  let t = bt(e11);
  return new ft(0, { colors: Or }).write(t).toString();
}
var Xt = "<unknown>";
function ys(e11) {
  var t = e11.split(`
`);
  return t.reduce(function(r, n) {
    var i = Bc(n) || Jc(n) || Hc(n) || Xc(n) || Kc(n);
    return i && r.push(i), r;
  }, []);
}
var Uc = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|rsc|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, jc = /\((\S*)(?::(\d+))(?::(\d+))\)/;
function Bc(e11) {
  var t = Uc.exec(e11);
  if (!t) return null;
  var r = t[2] && t[2].indexOf("native") === 0, n = t[2] && t[2].indexOf("eval") === 0, i = jc.exec(t[2]);
  return n && i != null && (t[2] = i[1], t[3] = i[2], t[4] = i[3]), { file: r ? null : t[2], methodName: t[1] || Xt, arguments: r ? [t[2]] : [], lineNumber: t[3] ? +t[3] : null, column: t[4] ? +t[4] : null };
}
var Qc = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|rsc|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function Jc(e11) {
  var t = Qc.exec(e11);
  return t ? { file: t[2], methodName: t[1] || Xt, arguments: [], lineNumber: +t[3], column: t[4] ? +t[4] : null } : null;
}
var Gc = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|rsc|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i, zc = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
function Hc(e11) {
  var t = Gc.exec(e11);
  if (!t) return null;
  var r = t[3] && t[3].indexOf(" > eval") > -1, n = zc.exec(t[3]);
  return r && n != null && (t[3] = n[1], t[4] = n[2], t[5] = null), { file: t[3], methodName: t[1] || Xt, arguments: t[2] ? t[2].split(",") : [], lineNumber: t[4] ? +t[4] : null, column: t[5] ? +t[5] : null };
}
var Wc = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
function Kc(e11) {
  var t = Wc.exec(e11);
  return t ? { file: t[3], methodName: t[1] || Xt, arguments: [], lineNumber: +t[4], column: t[5] ? +t[5] : null } : null;
}
var Zc = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function Xc(e11) {
  var t = Zc.exec(e11);
  return t ? { file: t[2], methodName: t[1] || Xt, arguments: [], lineNumber: +t[3], column: t[4] ? +t[4] : null } : null;
}
var zn = class {
  getLocation() {
    return null;
  }
}, Hn = class {
  constructor() {
    __publicField(this, "_error");
    this._error = new Error();
  }
  getLocation() {
    let t = this._error.stack;
    if (!t) return null;
    let n = ys(t).find((i) => {
      if (!i.file) return false;
      let o = _n(i.file);
      return o !== "<anonymous>" && !o.includes("@prisma") && !o.includes("/packages/client/src/runtime/") && !o.endsWith("/runtime/client.js") && !o.startsWith("internal/") && !i.methodName.includes("new ") && !i.methodName.includes("getCallSite") && !i.methodName.includes("Proxy.") && i.methodName.split(".").length < 4;
    });
    return !n || !n.file ? null : { fileName: n.file, lineNumber: n.lineNumber, columnNumber: n.column };
  }
};
function je(e11) {
  return e11 === "minimal" ? typeof $EnabledCallSite == "function" && e11 !== "minimal" ? new $EnabledCallSite() : new zn() : new Hn();
}
var hs = { _avg: true, _count: true, _sum: true, _min: true, _max: true };
function Tt(e11 = {}) {
  let t = ep(e11);
  return Object.entries(t).reduce((n, [i, o]) => (hs[i] !== void 0 ? n.select[i] = { select: o } : n[i] = o, n), { select: {} });
}
function ep(e11 = {}) {
  return typeof e11._count == "boolean" ? { ...e11, _count: { _all: e11._count } } : e11;
}
function Qr(e11 = {}) {
  return (t) => (typeof e11._count == "boolean" && (t._count = t._count._all), t);
}
function ws(e11, t) {
  let r = Qr(e11);
  return t({ action: "aggregate", unpacker: r, argsMapper: Tt })(e11);
}
function tp(e11 = {}) {
  let { select: t, ...r } = e11;
  return typeof t == "object" ? Tt({ ...r, _count: t }) : Tt({ ...r, _count: { _all: true } });
}
function rp(e11 = {}) {
  return typeof e11.select == "object" ? (t) => Qr(e11)(t)._count : (t) => Qr(e11)(t)._count._all;
}
function xs(e11, t) {
  return t({ action: "count", unpacker: rp(e11), argsMapper: tp })(e11);
}
function np(e11 = {}) {
  let t = Tt(e11);
  if (Array.isArray(t.by)) for (let r of t.by) typeof r == "string" && (t.select[r] = true);
  else typeof t.by == "string" && (t.select[t.by] = true);
  return t;
}
function ip(e11 = {}) {
  return (t) => (typeof (e11 == null ? void 0 : e11._count) == "boolean" && t.forEach((r) => {
    r._count = r._count._all;
  }), t);
}
function bs(e11, t) {
  return t({ action: "groupBy", unpacker: ip(e11), argsMapper: np })(e11);
}
function Ps(e11, t, r) {
  if (t === "aggregate") return (n) => ws(n, r);
  if (t === "count") return (n) => xs(n, r);
  if (t === "groupBy") return (n) => bs(n, r);
}
function Es(e11, t) {
  let r = t.fields.filter((i) => !i.relationName), n = oo(r, "name");
  return new Proxy({}, { get(i, o) {
    if (o in i || typeof o == "symbol") return i[o];
    let s = n[o];
    if (s) return new zt(e11, o, s.type, s.isList, s.kind === "enum");
  }, ...Br(Object.keys(n)) });
}
var Ts = (e11) => Array.isArray(e11) ? e11 : e11.split("."), Wn = (e11, t) => Ts(t).reduce((r, n) => r && r[n], e11), vs = (e11, t, r) => Ts(t).reduceRight((n, i, o, s) => Object.assign({}, Wn(e11, s.slice(0, o)), { [i]: n }), r);
function op(e11, t) {
  return e11 === void 0 || t === void 0 ? [] : [...t, "select", e11];
}
function sp(e11, t, r) {
  return t === void 0 ? e11 ?? {} : vs(t, r, e11 || true);
}
function Kn(e11, t, r, n, i, o) {
  let s = e11._runtimeDataModel.models[t], a;
  return (u) => {
    let m = je(e11._errorFormat), P2 = op(n, i), T = sp(u, o, P2), S = r({ dataPath: P2, callsite: m })(T), I = ap(e11, t);
    return new Proxy(S, { get(A, M) {
      if (!I.includes(M)) return A[M];
      a ?? (a = Object.fromEntries(s.fields.map((D) => [D.name, D])));
      let q = [a[M].type, r, M], E = [P2, T];
      return Kn(e11, ...q, ...E);
    }, ...Br([...I, ...Object.getOwnPropertyNames(S)]) });
  };
}
function ap(e11, t) {
  return e11._runtimeDataModel.models[t].fields.filter((r) => r.kind === "object").map((r) => r.name);
}
var lp = ["findUnique", "findUniqueOrThrow", "findFirst", "findFirstOrThrow", "create", "update", "upsert", "delete"], up = ["aggregate", "count", "groupBy"];
function Zn(e11, t) {
  let r = e11._extensions.getAllModelExtensions(t) ?? {}, n = [cp(e11, t), dp(e11, t), Zt(r), ae("name", () => t), ae("$name", () => t), ae("$parent", () => e11._appliedParent)];
  return ve({}, n);
}
function cp(e11, t) {
  let r = Oe(t), n = Object.keys(mt).concat("count");
  return { getKeys() {
    return n;
  }, getPropertyValue(i) {
    let o = i, s = (a) => (u) => {
      let m = je(e11._errorFormat);
      return e11._createPrismaPromise((P2) => {
        let T = { args: u, dataPath: [], action: o, model: t, clientMethod: `${r}.${i}`, jsModelName: r, transaction: P2, callsite: m };
        return e11._request({ ...T, ...a });
      }, { action: o, args: u, model: t });
    };
    return lp.includes(o) ? Kn(e11, t, s) : pp(i) ? Ps(e11, i, s) : s({});
  } };
}
function pp(e11) {
  return up.includes(e11);
}
function dp(e11, t) {
  return We(ae("fields", () => {
    let r = e11._runtimeDataModel.models[t];
    return Es(t, r);
  }));
}
function Ss(e11) {
  return e11.replace(/^./, (t) => t.toUpperCase());
}
var Xn = Symbol();
function Yt(e11) {
  let t = [mp(e11), fp(e11), ae(Xn, () => e11), ae("$parent", () => e11._appliedParent)], r = e11._extensions.getAllClientExtensions();
  return r && t.push(Zt(r)), ve(e11, t);
}
function mp(e11) {
  let t = Object.getPrototypeOf(e11._originalClient), r = [...new Set(Object.getOwnPropertyNames(t))];
  return { getKeys() {
    return r;
  }, getPropertyValue(n) {
    return e11[n];
  } };
}
function fp(e11) {
  let t = Object.keys(e11._runtimeDataModel.models), r = t.map(Oe), n = [...new Set(t.concat(r))];
  return We({ getKeys() {
    return n;
  }, getPropertyValue(i) {
    let o = Ss(i);
    if (e11._runtimeDataModel.models[o] !== void 0) return Zn(e11, o);
    if (e11._runtimeDataModel.models[i] !== void 0) return Zn(e11, i);
  }, getPropertyDescriptor(i) {
    if (!r.includes(i)) return { enumerable: false };
  } });
}
function As(e11) {
  return e11[Xn] ? e11[Xn] : e11;
}
function Rs(e11) {
  if (typeof e11 == "function") return e11(this);
  let t = Object.create(this._originalClient, { _extensions: { value: this._extensions.append(e11) }, _appliedParent: { value: this, configurable: true }, $on: { value: void 0 } });
  return Yt(t);
}
function Cs({ result: e11, modelName: t, select: r, omit: n, extensions: i }) {
  let o = i.getAllComputedFields(t);
  if (!o) return e11;
  let s = [], a = [];
  for (let u of Object.values(o)) {
    if (n) {
      if (n[u.name]) continue;
      let m = u.needs.filter((P2) => n[P2]);
      m.length > 0 && a.push(Et(m));
    } else if (r) {
      if (!r[u.name]) continue;
      let m = u.needs.filter((P2) => !r[P2]);
      m.length > 0 && a.push(Et(m));
    }
    gp(e11, u.needs) && s.push(yp(u, ve(e11, s), t));
  }
  return s.length > 0 || a.length > 0 ? ve(e11, [...s, ...a]) : e11;
}
function gp(e11, t) {
  return t.every((r) => $n(e11, r));
}
function yp(e11, t, r) {
  return We(ae(e11.name, () => e11.compute(t, r)));
}
function Jr({ visitor: e11, result: t, args: r, runtimeDataModel: n, modelName: i }) {
  if (Array.isArray(t)) {
    for (let s = 0; s < t.length; s++) t[s] = Jr({ result: t[s], args: r, modelName: i, runtimeDataModel: n, visitor: e11 });
    return t;
  }
  let o = e11(t, i, r) ?? t;
  return r.include && Is({ includeOrSelect: r.include, result: o, parentModelName: i, runtimeDataModel: n, visitor: e11 }), r.select && Is({ includeOrSelect: r.select, result: o, parentModelName: i, runtimeDataModel: n, visitor: e11 }), o;
}
function Is({ includeOrSelect: e11, result: t, parentModelName: r, runtimeDataModel: n, visitor: i }) {
  for (let [o, s] of Object.entries(e11)) {
    if (!s || t[o] == null || fe(s)) continue;
    let u = n.models[r].fields.find((P2) => P2.name === o);
    if (!u || u.kind !== "object" || !u.relationName) continue;
    let m = typeof s == "object" ? s : {};
    t[o] = Jr({ visitor: i, result: t[o], args: m, modelName: u.type, runtimeDataModel: n });
  }
}
function ks({ result: e11, modelName: t, args: r, extensions: n, runtimeDataModel: i, globalOmit: o }) {
  return n.isEmpty() || e11 == null || typeof e11 != "object" || !i.models[t] ? e11 : Jr({ result: e11, args: r ?? {}, modelName: t, runtimeDataModel: i, visitor: (a, u, m) => {
    let P2 = Oe(u);
    return Cs({ result: a, modelName: P2, select: m.select, omit: m.select ? void 0 : { ...o == null ? void 0 : o[P2], ...m.omit }, extensions: n });
  } });
}
var Ke = dist;
var hp = ["$connect", "$disconnect", "$on", "$use", "$extends"], Os = hp;
function Ns(e11) {
  if (e11 instanceof Ke.Sql) return wp(e11);
  if (Ur(e11)) return xp(e11);
  if (Array.isArray(e11)) {
    let r = [e11[0]];
    for (let n = 1; n < e11.length; n++) r[n] = er(e11[n]);
    return r;
  }
  let t = {};
  for (let r in e11) t[r] = er(e11[r]);
  return t;
}
function wp(e11) {
  return new Ke.Sql(e11.strings, e11.values);
}
function xp(e11) {
  return new Kt(e11.sql, e11.values);
}
function er(e11) {
  if (typeof e11 != "object" || e11 == null || (0, Ke.isObjectEnumValue)(e11) || xt(e11) || fe(e11)) return e11;
  if (dt(e11)) return new Ke.Decimal(e11.toFixed());
  if (ct(e11)) return /* @__PURE__ */ new Date(+e11);
  if (ArrayBuffer.isView(e11)) return e11.slice(0);
  if (Array.isArray(e11)) {
    let t = e11.length, r;
    for (r = Array(t); t--; ) r[t] = er(e11[t]);
    return r;
  }
  if (typeof e11 == "object") {
    let t = {};
    for (let r in e11) r === "__proto__" ? Object.defineProperty(t, r, { value: er(e11[r]), configurable: true, enumerable: true, writable: true }) : t[r] = er(e11[r]);
    return t;
  }
  $e(e11, "Unknown value");
}
function Ms(e11, t, r, n = 0) {
  return e11._createPrismaPromise((i) => {
    var _a5;
    let o = t.customDataProxyFetch;
    return "transaction" in t && i !== void 0 && (((_a5 = t.transaction) == null ? void 0 : _a5.kind) === "batch" && t.transaction.lock.then(), t.transaction = i), n === r.length ? e11._executeRequest(t) : r[n]({ model: t.model, operation: t.model ? t.action : t.clientMethod, args: Ns(t.args ?? {}), __internalParams: t, query: (s, a = t) => {
      let u = a.customDataProxyFetch;
      return a.customDataProxyFetch = Ls(o, u), a.args = s, Ms(e11, a, r, n + 1);
    } });
  });
}
function Fs(e11, t) {
  let { jsModelName: r, action: n, clientMethod: i } = t, o = r ? n : i;
  if (e11._extensions.isEmpty()) return e11._executeRequest(t);
  let s = e11._extensions.getAllQueryCallbacks(r ?? "$none", o);
  return Ms(e11, t, s);
}
function _s(e11) {
  return (t) => {
    let r = { requests: t }, n = t[0].extensions.getAllBatchQueryCallbacks();
    return n.length ? $s(r, n, 0, e11) : e11(r);
  };
}
function $s(e11, t, r, n) {
  if (r === t.length) return n(e11);
  let i = e11.customDataProxyFetch, o = e11.requests[0].transaction;
  return t[r]({ args: { queries: e11.requests.map((s) => ({ model: s.modelName, operation: s.action, args: s.args })), transaction: o ? { isolationLevel: o.kind === "batch" ? o.isolationLevel : void 0 } : void 0 }, __internalParams: e11, query(s, a = e11) {
    let u = a.customDataProxyFetch;
    return a.customDataProxyFetch = Ls(i, u), $s(a, t, r + 1, n);
  } });
}
var Ds = (e11) => e11;
function Ls(e11 = Ds, t = Ds) {
  return (r) => e11(t(r));
}
function qs({ dataPath: e11, modelName: t, args: r, runtimeDataModel: n }) {
  let i = { modelName: t, args: r ?? {} }, o = bp(e11);
  if (!o || o.length === 0) return i;
  let s = t, a = r ?? {};
  for (let u of o) {
    let m = n.models[s];
    if (!m) return i;
    let P2 = m.fields.find((T) => T.name === u);
    if (!P2) throw new Error(`Could not resolve relation field "${u}" on model "${s}" from dataPath "${e11.join(".")}"`);
    if (P2.kind !== "object" || !P2.relationName) return i;
    s = P2.type, a = Pp(a, u);
  }
  return { modelName: s, args: a };
}
function bp(e11) {
  let t = [];
  for (let r = 0; r < e11.length; r += 2) {
    let n = e11[r], i = e11[r + 1];
    if (n !== "select" && n !== "include" || i === void 0) return;
    t.push(i);
  }
  return t;
}
function Pp(e11, t) {
  var _a5, _b2;
  let r = (_a5 = e11.select) == null ? void 0 : _a5[t];
  if (Vs(r)) return r;
  let n = (_b2 = e11.include) == null ? void 0 : _b2[t];
  return Vs(n) ? n : {};
}
function Vs(e11) {
  return !!e11 && typeof e11 == "object" && !Array.isArray(e11);
}
var Gs = dist;
var tr = dist;
function vt(e11) {
  return ArrayBuffer.isView(e11) && Object.prototype.toString.call(e11) === "[object Uint8Array]";
}
function rr(e11) {
  return Object.prototype.toString.call(e11) === "[object Date]";
}
function V(e11, t) {
  throw new Error(t);
}
function ei(e11, t) {
  return e11 === t || e11 !== null && t !== null && typeof e11 == "object" && typeof t == "object" && Object.keys(e11).length === Object.keys(t).length && Object.keys(e11).every((r) => ei(e11[r], t[r]));
}
function St(e11, t) {
  let r = Object.keys(e11), n = Object.keys(t);
  return (r.length < n.length ? r : n).every((o) => {
    var _a5, _b2;
    if (typeof e11[o] == typeof t[o] && typeof e11[o] != "object") return e11[o] === t[o];
    if (tr.Decimal.isDecimal(e11[o]) || tr.Decimal.isDecimal(t[o])) {
      let s = Us(e11[o]), a = Us(t[o]);
      return s && a && s.equals(a);
    } else if (vt(e11[o]) || vt(t[o])) {
      let s = js(e11[o]), a = js(t[o]);
      return s && a && s.equals(a);
    } else {
      if (rr(e11[o]) || rr(t[o])) return ((_a5 = Bs(e11[o])) == null ? void 0 : _a5.getTime()) === ((_b2 = Bs(t[o])) == null ? void 0 : _b2.getTime());
      if (typeof e11[o] == "bigint" || typeof t[o] == "bigint") return Qs(e11[o]) === Qs(t[o]);
      if (typeof e11[o] == "number" || typeof t[o] == "number") return Js(e11[o]) === Js(t[o]);
    }
    return ei(e11[o], t[o]);
  });
}
function Us(e11) {
  return tr.Decimal.isDecimal(e11) ? e11 : typeof e11 == "number" || typeof e11 == "string" ? new tr.Decimal(e11) : void 0;
}
function js(e11) {
  return Buffer.isBuffer(e11) ? e11 : vt(e11) ? Buffer.from(e11.buffer, e11.byteOffset, e11.byteLength) : typeof e11 == "string" ? Buffer.from(e11, "base64") : void 0;
}
function Bs(e11) {
  return rr(e11) ? e11 : typeof e11 == "string" || typeof e11 == "number" ? new Date(e11) : void 0;
}
function Qs(e11) {
  return typeof e11 == "bigint" ? e11 : typeof e11 == "number" || typeof e11 == "string" ? BigInt(e11) : void 0;
}
function Js(e11) {
  return typeof e11 == "number" ? e11 : typeof e11 == "string" ? Number(e11) : void 0;
}
function Se(e11) {
  return JSON.stringify(e11, (t, r) => typeof r == "bigint" ? r.toString() : ArrayBuffer.isView(r) ? Buffer.from(r.buffer, r.byteOffset, r.byteLength).toString("base64") : r);
}
var Yn = 8192;
function Gr(e11, t) {
  if (t.length <= Yn) {
    e11.push(...t);
    return;
  }
  for (let r = 0; r < t.length; r += Yn) e11.push(...t.slice(r, r + Yn));
}
function Ep(e11) {
  return e11 !== null && typeof e11 == "object" && typeof e11.$type == "string";
}
function Tp(e11, t) {
  let r = {};
  for (let n of Object.keys(e11)) r[n] = t(e11[n], n);
  return r;
}
function Ae(e11) {
  return e11 === null ? e11 : Array.isArray(e11) ? e11.map(Ae) : typeof e11 == "object" ? Ep(e11) ? vp(e11) : e11.constructor !== null && e11.constructor.name !== "Object" ? e11 : Tp(e11, Ae) : e11;
}
function vp({ $type: e11, value: t }) {
  switch (e11) {
    case "BigInt":
      return BigInt(t);
    case "Bytes":
      return new Uint8Array(Buffer.from(t, "base64"));
    case "DateTime":
      return new Date(t);
    case "Decimal":
      return new Gs.Decimal(t);
    case "Json":
      return JSON.parse(t);
    case "Raw":
      return t;
    case "FieldRef":
      throw new Error("FieldRef tagged values cannot be deserialized to JavaScript values");
    case "Enum":
      return t;
    default:
      V(t, "Unknown tagged value");
  }
}
function zr(e11) {
  return e11.name === "DriverAdapterError" && typeof e11.cause == "object";
}
var k = { Int32: 0, Int64: 1, Float: 2, Double: 3, Numeric: 4, Boolean: 5, Character: 6, Text: 7, Date: 8, Time: 9, DateTime: 10, Json: 11, Enum: 12, Bytes: 13, Set: 14, Uuid: 15, Int32Array: 64, Int64Array: 65, FloatArray: 66, DoubleArray: 67, NumericArray: 68, BooleanArray: 69, CharacterArray: 70, TextArray: 71, DateArray: 72, TimeArray: 73, DateTimeArray: 74, JsonArray: 75, EnumArray: 76, BytesArray: 77, UuidArray: 78, UnknownNumber: 128 };
var X = class extends Error {
  constructor(t, r, n) {
    super(t);
    __publicField(this, "name", "UserFacingError");
    __publicField(this, "code");
    __publicField(this, "meta");
    this.code = r, this.meta = n ?? {};
  }
  toQueryResponseErrorObject() {
    return { error: this.message, user_facing_error: { is_panic: false, message: this.message, meta: this.meta, error_code: this.code } };
  }
};
function Be(e11) {
  if (!zr(e11)) throw e11;
  let t = Cp(e11), r = Hs(e11);
  if (t !== void 0 && r !== void 0) {
    let n = { driverAdapterError: e11 };
    throw e11.cause.kind === "UniqueConstraintViolation" && e11.cause.table && (n.table = e11.cause.table), new X(r, t, n);
  }
  throw Rp(e11.cause.kind) ? Ap(e11) : e11;
}
function ri(e11) {
  throw zr(e11) ? Sp(e11) : e11;
}
function Sp(e11) {
  let t = e11.cause.originalCode ?? "N/A", r = zs(e11);
  return new X(`Raw query failed. Code: \`${t}\`. Message: \`${r}\``, "P2010", { driverAdapterError: e11 });
}
function Ap(e11) {
  let t = e11.cause.originalCode ?? "N/A", r = zs(e11);
  return new X(`Database error. Code: \`${t}\`. Message: \`${r}\``, "P2039", { driverAdapterError: e11 });
}
function zs(e11) {
  return e11.cause.originalMessage ?? Hs(e11) ?? e11.message ?? "N/A";
}
function Rp(e11) {
  switch (e11) {
    case "postgres":
    case "mysql":
    case "sqlite":
    case "mssql":
      return true;
    default:
      return false;
  }
}
function Cp(e11) {
  switch (e11.cause.kind) {
    case "AuthenticationFailed":
      return "P1000";
    case "DatabaseNotReachable":
      return "P1001";
    case "DatabaseDoesNotExist":
      return "P1003";
    case "SocketTimeout":
      return "P1008";
    case "DatabaseAlreadyExists":
      return "P1009";
    case "DatabaseAccessDenied":
      return "P1010";
    case "TlsConnectionError":
      return "P1011";
    case "ConnectionClosed":
      return "P1017";
    case "TransactionAlreadyClosed":
      return "P1018";
    case "LengthMismatch":
      return "P2000";
    case "UniqueConstraintViolation":
      return "P2002";
    case "ForeignKeyConstraintViolation":
    case "RestrictViolation":
      return "P2003";
    case "InvalidInputValue":
      return "P2007";
    case "UnsupportedNativeDataType":
      return "P2010";
    case "NullConstraintViolation":
      return "P2011";
    case "ValueOutOfRange":
      return "P2020";
    case "TableDoesNotExist":
      return "P2021";
    case "ColumnNotFound":
      return "P2022";
    case "InvalidIsolationLevel":
    case "InconsistentColumnData":
      return "P2023";
    case "MissingFullTextSearchIndex":
      return "P2030";
    case "TransactionWriteConflict":
      return "P2034";
    case "GenericJs":
      return "P2036";
    case "TooManyConnections":
      return "P2037";
    case "postgres":
    case "sqlite":
    case "mysql":
    case "mssql":
      return;
    default:
      V(e11.cause, `Unknown error: ${Se(e11.cause)}`);
  }
}
function Hs(e11) {
  switch (e11.cause.kind) {
    case "AuthenticationFailed":
      return `Authentication failed against the database server, the provided database credentials for \`${e11.cause.user ?? "(not available)"}\` are not valid`;
    case "DatabaseNotReachable": {
      let t = e11.cause.host && e11.cause.port ? `${e11.cause.host}:${e11.cause.port}` : e11.cause.host;
      return `Can't reach database server${t ? ` at ${t}` : ""}`;
    }
    case "DatabaseDoesNotExist":
      return `Database \`${e11.cause.db ?? "(not available)"}\` does not exist on the database server`;
    case "SocketTimeout":
      return "Operation has timed out";
    case "DatabaseAlreadyExists":
      return `Database \`${e11.cause.db ?? "(not available)"}\` already exists on the database server`;
    case "DatabaseAccessDenied":
      return `User was denied access on the database \`${e11.cause.db ?? "(not available)"}\``;
    case "TlsConnectionError":
      return `Error opening a TLS connection: ${e11.cause.reason}`;
    case "ConnectionClosed":
      return "Server has closed the connection.";
    case "TransactionAlreadyClosed":
      return e11.cause.cause;
    case "LengthMismatch":
      return `The provided value for the column is too long for the column's type. Column: ${e11.cause.column ?? "(not available)"}`;
    case "UniqueConstraintViolation":
      return `Unique constraint failed on the ${ti(e11.cause.constraint)}`;
    case "ForeignKeyConstraintViolation":
    case "RestrictViolation":
      return `Foreign key constraint violated on the ${ti(e11.cause.constraint)}`;
    case "UnsupportedNativeDataType":
      return `Failed to deserialize column of type '${e11.cause.type}'. If you're using $queryRaw and this column is explicitly marked as \`Unsupported\` in your Prisma schema, try casting this column to any supported Prisma type such as \`String\`.`;
    case "NullConstraintViolation":
      return `Null constraint violation on the ${ti(e11.cause.constraint)}`;
    case "ValueOutOfRange":
      return `Value out of range for the type: ${e11.cause.cause}`;
    case "TableDoesNotExist":
      return `The table \`${e11.cause.table ?? "(not available)"}\` does not exist in the current database.`;
    case "ColumnNotFound":
      return `The column \`${e11.cause.column ?? "(not available)"}\` does not exist in the current database.`;
    case "InvalidIsolationLevel":
      return `Error in connector: Conversion error: ${e11.cause.level}`;
    case "InconsistentColumnData":
      return `Inconsistent column data: ${e11.cause.cause}`;
    case "MissingFullTextSearchIndex":
      return "Cannot find a fulltext index to use for the native search, try adding a @@fulltext([Fields...]) to your schema";
    case "TransactionWriteConflict":
      return "Transaction failed due to a write conflict or a deadlock. Please retry your transaction";
    case "GenericJs":
      return `Error in external connector (id ${e11.cause.id})`;
    case "TooManyConnections":
      return `Too many database connections opened: ${e11.cause.cause}`;
    case "InvalidInputValue":
      return `Invalid input value: ${e11.cause.message}`;
    case "sqlite":
    case "postgres":
    case "mysql":
    case "mssql":
      return;
    default:
      V(e11.cause, `Unknown error: ${Se(e11.cause)}`);
  }
}
function ti(e11) {
  return e11 && "fields" in e11 ? `fields: (${e11.fields.map((t) => `\`${t}\``).join(", ")})` : e11 && "index" in e11 ? `constraint: \`${e11.index}\`` : e11 && "foreignKey" in e11 ? "foreign key" : "(not available)";
}
function Ip(e11) {
  if (typeof e11 != "object" || e11 === null) return false;
  let t = e11;
  return "$type" in t && t.$type === "Param" || "prisma__type" in t && t.prisma__type === "param";
}
function kp(e11) {
  var _a5;
  return "prisma__type" in e11 ? (_a5 = e11.prisma__value) == null ? void 0 : _a5.name : e11.value.name;
}
function Op(e11, t) {
  let r = {};
  for (let [n, i] of Object.entries(e11)) if (r[n] = i, Ip(i)) {
    let o = kp(i);
    o && o in t && (r[n] = t[o]);
  }
  return r;
}
function Ws(e11, t, r = {}) {
  let n = e11.map((o) => t.keys.reduce((s, a) => (s[a] = Ae(o[a]), s), {})), i = new Set(t.nestedSelection);
  return t.arguments.map((o) => {
    let s = Op(o, r), a = n.findIndex((u) => St(u, s));
    if (a === -1) return t.expectNonEmpty ? new X("An operation failed because it depends on one or more records that were required but not found", "P2025") : null;
    {
      let u = Object.entries(e11[a]).filter(([m]) => i.has(m));
      return Object.fromEntries(u);
    }
  });
}
var Xs = dist;
var Q = class extends X {
  constructor(t, r) {
    super(t, "P2023", r);
    __publicField(this, "name", "DataMapperError");
  }
}, Ks = /* @__PURE__ */ new WeakMap();
function Np(e11) {
  let t = Ks.get(e11);
  return t || (t = Object.entries(e11), Ks.set(e11, t)), t;
}
function ii(e11, t, r) {
  switch (t.type) {
    case "affectedRows":
      if (typeof e11 != "number") throw new Q(`Expected an affected rows count, got: ${typeof e11} (${e11})`);
      return { count: e11 };
    case "object":
      return oi(e11, t.fields, r, t.skipNulls);
    case "field":
      return ni(e11, "<result>", t.fieldType, r);
    default:
      V(t, `Invalid data mapping type: '${t.type}'`);
  }
}
function oi(e11, t, r, n) {
  if (e11 === null) return null;
  if (Array.isArray(e11)) {
    let i = e11;
    return n && (i = i.filter((o) => o !== null)), i.map((o) => Zs(o, t, r));
  }
  if (typeof e11 == "object") return Zs(e11, t, r);
  if (typeof e11 == "string") {
    let i;
    try {
      i = JSON.parse(e11);
    } catch (o) {
      throw new Q("Expected an array or object, got a string that is not valid JSON", { cause: o });
    }
    return oi(i, t, r, n);
  }
  throw new Q(`Expected an array or an object, got: ${typeof e11}`);
}
function Zs(e11, t, r) {
  if (typeof e11 != "object") throw new Q(`Expected an object, but got '${typeof e11}'`);
  let n = {};
  for (let [i, o] of Np(t)) switch (o.type) {
    case "affectedRows":
      throw new Q(`Unexpected 'AffectedRows' node in data mapping for field '${i}'`);
    case "object": {
      let { serializedName: s, fields: a, skipNulls: u } = o;
      if (s !== null && !Object.hasOwn(e11, s)) throw new Q(`Missing data field (Object): '${i}'; node: ${JSON.stringify(o)}; data: ${JSON.stringify(e11)}`);
      let m = s !== null ? e11[s] : e11;
      n[i] = oi(m, a, r, u);
      break;
    }
    case "field":
      {
        let s = o.dbName;
        if (Object.hasOwn(e11, s)) n[i] = Dp(e11[s], s, o.fieldType, r);
        else throw new Q(`Missing data field (Value): '${s}'; node: ${JSON.stringify(o)}; data: ${JSON.stringify(e11)}`);
      }
      break;
    default:
      V(o, `DataMapper: Invalid data mapping node type: '${o.type}'`);
  }
  return n;
}
function Dp(e11, t, r, n) {
  return e11 === null ? r.arity === "list" ? [] : null : r.arity === "list" ? e11.map((o, s) => ni(o, `${t}[${s}]`, r, n)) : ni(e11, t, r, n);
}
function ni(e11, t, r, n) {
  switch (r.type) {
    case "unsupported":
      return e11;
    case "string": {
      if (typeof e11 != "string") throw new Q(`Expected a string in column '${t}', got ${typeof e11}: ${e11}`);
      return e11;
    }
    case "int":
      switch (typeof e11) {
        case "number":
          return Math.trunc(e11);
        case "string": {
          let i = Math.trunc(Number(e11));
          if (Number.isNaN(i) || !Number.isFinite(i)) throw new Q(`Expected an integer in column '${t}', got string: ${e11}`);
          if (!Number.isSafeInteger(i)) throw new Q(`Integer value in column '${t}' is too large to represent as a JavaScript number without loss of precision, got: ${e11}. Consider using BigInt type.`);
          return i;
        }
        default:
          throw new Q(`Expected an integer in column '${t}', got ${typeof e11}: ${e11}`);
      }
    case "bigint": {
      if (typeof e11 != "number" && typeof e11 != "string") throw new Q(`Expected a bigint in column '${t}', got ${typeof e11}: ${e11}`);
      return { $type: "BigInt", value: e11 };
    }
    case "float": {
      if (typeof e11 == "number") return e11;
      if (typeof e11 == "string") {
        let i = Number(e11);
        if (Number.isNaN(i) && !/^[-+]?nan$/.test(e11.toLowerCase())) throw new Q(`Expected a float in column '${t}', got string: ${e11}`);
        return i;
      }
      throw new Q(`Expected a float in column '${t}', got ${typeof e11}: ${e11}`);
    }
    case "boolean": {
      if (typeof e11 == "boolean") return e11;
      if (typeof e11 == "number") return e11 === 1;
      if (typeof e11 == "string") {
        if (e11 === "true" || e11 === "TRUE" || e11 === "1") return true;
        if (e11 === "false" || e11 === "FALSE" || e11 === "0") return false;
        throw new Q(`Expected a boolean in column '${t}', got ${typeof e11}: ${e11}`);
      }
      if (Array.isArray(e11) || vt(e11)) {
        for (let i of e11) if (i !== 0) return true;
        return false;
      }
      throw new Q(`Expected a boolean in column '${t}', got ${typeof e11}: ${e11}`);
    }
    case "decimal":
      if (typeof e11 != "number" && typeof e11 != "string" && !Xs.Decimal.isDecimal(e11)) throw new Q(`Expected a decimal in column '${t}', got ${typeof e11}: ${e11}`);
      return { $type: "Decimal", value: e11 };
    case "datetime": {
      if (typeof e11 == "string") return { $type: "DateTime", value: Fp(e11) };
      if (typeof e11 == "number" || rr(e11)) return { $type: "DateTime", value: e11 };
      throw new Q(`Expected a date in column '${t}', got ${typeof e11}: ${e11}`);
    }
    case "object":
      return { $type: "Json", value: Se(e11) };
    case "json":
      return { $type: "Json", value: `${e11}` };
    case "bytes": {
      switch (r.encoding) {
        case "base64":
          if (typeof e11 != "string") throw new Q(`Expected a base64-encoded byte array in column '${t}', got ${typeof e11}: ${e11}`);
          return { $type: "Bytes", value: e11 };
        case "hex":
          if (typeof e11 != "string" || !e11.startsWith("\\x")) throw new Q(`Expected a hex-encoded byte array in column '${t}', got ${typeof e11}: ${e11}`);
          return { $type: "Bytes", value: Buffer.from(e11.slice(2), "hex").toString("base64") };
        case "array":
          if (Array.isArray(e11)) return { $type: "Bytes", value: Buffer.from(e11).toString("base64") };
          if (vt(e11)) return { $type: "Bytes", value: Buffer.from(e11).toString("base64") };
          throw new Q(`Expected a byte array in column '${t}', got ${typeof e11}: ${e11}`);
        default:
          V(r.encoding, `DataMapper: Unknown bytes encoding: ${r.encoding}`);
      }
      break;
    }
    case "enum": {
      let i = n[r.name];
      if (i === void 0) throw new Q(`Unknown enum '${r.name}'`);
      let o = i[`${e11}`];
      if (o === void 0) throw new Q(`Value '${e11}' not found in enum '${r.name}'`);
      return o;
    }
    default:
      V(r, `DataMapper: Unknown result type: ${r.type}`);
  }
}
var Mp = /\d{2}:\d{2}:\d{2}(?:\.\d+)?(Z|[+-]\d{2}(:?\d{2})?)?$/;
function Fp(e11) {
  let t = Mp.exec(e11);
  if (t === null) return `${e11}T00:00:00Z`;
  let r = e11, [n, i, o] = t;
  if (i !== void 0 && i !== "Z" && o === void 0 ? r = `${e11}:00` : i === void 0 && (r = `${e11}Z`), n.length === e11.length) return `1970-01-01T${r}`;
  let s = t.index - 1;
  return r[s] === " " && (r = `${r.slice(0, s)}T${r.slice(s + 1)}`), r;
}
function ge(e11) {
  if (typeof e11 != "object") return e11;
  var t, r, n = Object.prototype.toString.call(e11);
  if (n === "[object Object]") {
    if (e11.constructor !== Object && typeof e11.constructor == "function") {
      r = new e11.constructor();
      for (t in e11) e11.hasOwnProperty(t) && r[t] !== e11[t] && (r[t] = ge(e11[t]));
    } else {
      r = {};
      for (t in e11) t === "__proto__" ? Object.defineProperty(r, t, { value: ge(e11[t]), configurable: true, enumerable: true, writable: true }) : r[t] = ge(e11[t]);
    }
    return r;
  }
  if (n === "[object Array]") {
    for (t = e11.length, r = Array(t); t--; ) r[t] = ge(e11[t]);
    return r;
  }
  return n === "[object Set]" ? (r = /* @__PURE__ */ new Set(), e11.forEach(function(i) {
    r.add(ge(i));
  }), r) : n === "[object Map]" ? (r = /* @__PURE__ */ new Map(), e11.forEach(function(i, o) {
    r.set(ge(o), ge(i));
  }), r) : n === "[object Date]" ? /* @__PURE__ */ new Date(+e11) : n === "[object RegExp]" ? (r = new RegExp(e11.source, e11.flags), r.lastIndex = e11.lastIndex, r) : n === "[object DataView]" ? new e11.constructor(ge(e11.buffer)) : n === "[object ArrayBuffer]" ? e11.slice(0) : n.slice(-6) === "Array]" ? new e11.constructor(e11) : e11;
}
function _p(e11) {
  let t = Object.entries(e11);
  return t.length === 0 ? "" : (t.sort(([n], [i]) => n.localeCompare(i)), `/*${t.map(([n, i]) => {
    let o = encodeURIComponent(n), s = encodeURIComponent(i).replace(/'/g, "\\'");
    return `${o}='${s}'`;
  }).join(",")}*/`);
}
function Hr(e11, t) {
  let r = {};
  for (let n of e11) {
    let i = n(ge(t));
    for (let [o, s] of Object.entries(i)) s !== void 0 && (r[o] = s);
  }
  return r;
}
function Ys(e11, t) {
  let r = Hr(e11, t);
  return _p(r);
}
function ea(e11, t) {
  return t ? `${e11} ${t}` : e11;
}
var nr;
(function(e11) {
  e11[e11.INTERNAL = 0] = "INTERNAL", e11[e11.SERVER = 1] = "SERVER", e11[e11.CLIENT = 2] = "CLIENT", e11[e11.PRODUCER = 3] = "PRODUCER", e11[e11.CONSUMER = 4] = "CONSUMER";
})(nr || (nr = {}));
function $p(e11) {
  switch (e11) {
    case "postgresql":
    case "postgres":
    case "prisma+postgres":
      return "postgresql";
    case "sqlserver":
      return "mssql";
    case "mysql":
    case "sqlite":
    case "cockroachdb":
    case "mongodb":
      return e11;
    default:
      V(e11, `Unknown provider: ${e11}`);
  }
}
async function Wr({ query: e11, tracingHelper: t, provider: r, onQuery: n, execute: i }) {
  let o = n === void 0 ? i : async () => {
    let s = /* @__PURE__ */ new Date(), a = performance.now(), u = await i(), m = performance.now();
    return n({ timestamp: s, duration: m - a, query: e11.sql, params: e11.args }), u;
  };
  return t.isEnabled() ? await t.runInChildSpan({ name: "db_query", kind: nr.CLIENT, attributes: { "db.query.text": e11.sql, "db.system.name": $p(r) } }, o) : o();
}
function Ze(e11, t) {
  var r = "000000000" + e11;
  return r.substr(r.length - t);
}
var ta = Pe(require$$5, 1);
function Lp() {
  try {
    return ta.default.hostname();
  } catch {
    return process.env._CLUSTER_NETWORK_NAME_ || process.env.COMPUTERNAME || "hostname";
  }
}
var ra = 2, Vp = Ze(process.pid.toString(36), ra), na = Lp(), qp = na.length, Up = Ze(na.split("").reduce(function(e11, t) {
  return +e11 + t.charCodeAt(0);
}, +qp + 36).toString(36), ra);
function si() {
  return Vp + Up;
}
function Kr(e11) {
  return typeof e11 == "string" && /^c[a-z0-9]{20,32}$/.test(e11);
}
function ai(e11) {
  let n = Math.pow(36, 4), i = 0;
  function o() {
    return Ze((Math.random() * n << 0).toString(36), 4);
  }
  function s() {
    return i = i < n ? i : 0, i++, i - 1;
  }
  function a() {
    var u = "c", m = (/* @__PURE__ */ new Date()).getTime().toString(36), P2 = Ze(s().toString(36), 4), T = e11(), S = o() + o();
    return u + m + P2 + T + S;
  }
  return a.fingerprint = e11, a.isCuid = Kr, a;
}
var jp = ai(si);
var ia = jp;
var Zr = BigInt(4294967295), oa = BigInt(32);
function Bp(e11, t = false) {
  return t ? { h: Number(e11 & Zr), l: Number(e11 >> oa & Zr) } : { h: Number(e11 >> oa & Zr) | 0, l: Number(e11 & Zr) | 0 };
}
function sa(e11, t = false) {
  let r = e11.length, n = new Uint32Array(r), i = new Uint32Array(r);
  for (let o = 0; o < r; o++) {
    let { h: s, l: a } = Bp(e11[o], t);
    [n[o], i[o]] = [s, a];
  }
  return [n, i];
}
var aa = (e11, t, r) => e11 << r | t >>> 32 - r, la = (e11, t, r) => t << r | e11 >>> 32 - r, ua = (e11, t, r) => t << r - 32 | e11 >>> 64 - r, ca = (e11, t, r) => e11 << r - 32 | t >>> 64 - r;
function Qp(e11) {
  return e11 instanceof Uint8Array || ArrayBuffer.isView(e11) && e11.constructor.name === "Uint8Array" && "BYTES_PER_ELEMENT" in e11 && e11.BYTES_PER_ELEMENT === 1;
}
function Xr(e11, t = "") {
  if (typeof e11 != "number") {
    let r = t && `"${t}" `;
    throw new TypeError(`${r}expected number, got ${typeof e11}`);
  }
  if (!Number.isSafeInteger(e11) || e11 < 0) {
    let r = t && `"${t}" `;
    throw new RangeError(`${r}expected integer >= 0, got ${e11}`);
  }
}
function Yr(e11, t, r = "") {
  let n = Qp(e11), i = e11 == null ? void 0 : e11.length, o = t !== void 0;
  if (!n || o) {
    let s = r && `"${r}" `, a = "", u = n ? `length=${i}` : `type=${typeof e11}`, m = s + "expected Uint8Array" + a + ", got " + u;
    throw n ? new RangeError(m) : new TypeError(m);
  }
  return e11;
}
function li(e11, t = true) {
  if (e11.destroyed) throw new Error("Hash instance has been destroyed");
  if (t && e11.finished) throw new Error("Hash#digest() has already been called");
}
function pa(e11, t) {
  Yr(e11, void 0, "digestInto() output");
  let r = t.outputLen;
  if (e11.length < r) throw new RangeError('"digestInto() output" expected to be of length >=' + r);
}
function da(e11) {
  return new Uint32Array(e11.buffer, e11.byteOffset, Math.floor(e11.byteLength / 4));
}
function ui(...e11) {
  for (let t = 0; t < e11.length; t++) e11[t].fill(0);
}
var Jp = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
function Gp(e11) {
  return e11 << 24 & 4278190080 | e11 << 8 & 16711680 | e11 >>> 8 & 65280 | e11 >>> 24 & 255;
}
function zp(e11) {
  for (let t = 0; t < e11.length; t++) e11[t] = Gp(e11[t]);
  return e11;
}
var ci = Jp ? (e11) => e11 : zp;
function ma(e11, t = {}) {
  let r = (i, o) => e11(o).update(i).digest(), n = e11(void 0);
  return r.outputLen = n.outputLen, r.blockLen = n.blockLen, r.canXOF = n.canXOF, r.create = (i) => e11(i), Object.assign(r, t), Object.freeze(r);
}
var fa = (e11) => ({ oid: Uint8Array.from([6, 9, 96, 134, 72, 1, 101, 3, 4, 2, e11]) });
var Hp = BigInt(0), ir = BigInt(1), Wp = BigInt(2), Kp = BigInt(7), Zp = BigInt(256), Xp = BigInt(113), ha = [], wa = [], xa = [];
for (let e11 = 0, t = ir, r = 1, n = 0; e11 < 24; e11++) {
  [r, n] = [n, (2 * r + 3 * n) % 5], ha.push(2 * (5 * n + r)), wa.push((e11 + 1) * (e11 + 2) / 2 % 64);
  let i = Hp;
  for (let o = 0; o < 7; o++) t = (t << ir ^ (t >> Kp) * Xp) % Zp, t & Wp && (i ^= ir << (ir << BigInt(o)) - ir);
  xa.push(i);
}
var ba = sa(xa, true), Yp = ba[0], ed = ba[1], ga = (e11, t, r) => r > 32 ? ua(e11, t, r) : aa(e11, t, r), ya = (e11, t, r) => r > 32 ? ca(e11, t, r) : la(e11, t, r);
function td(e11, t = 24) {
  if (Xr(t, "rounds"), t < 1 || t > 24) throw new Error('"rounds" expected integer 1..24');
  let r = new Uint32Array(5 * 2);
  for (let n = 24 - t; n < 24; n++) {
    for (let s = 0; s < 10; s++) r[s] = e11[s] ^ e11[s + 10] ^ e11[s + 20] ^ e11[s + 30] ^ e11[s + 40];
    for (let s = 0; s < 10; s += 2) {
      let a = (s + 8) % 10, u = (s + 2) % 10, m = r[u], P2 = r[u + 1], T = ga(m, P2, 1) ^ r[a], S = ya(m, P2, 1) ^ r[a + 1];
      for (let I = 0; I < 50; I += 10) e11[s + I] ^= T, e11[s + I + 1] ^= S;
    }
    let i = e11[2], o = e11[3];
    for (let s = 0; s < 24; s++) {
      let a = wa[s], u = ga(i, o, a), m = ya(i, o, a), P2 = ha[s];
      i = e11[P2], o = e11[P2 + 1], e11[P2] = u, e11[P2 + 1] = m;
    }
    for (let s = 0; s < 50; s += 10) {
      let a = e11[s], u = e11[s + 1], m = e11[s + 2], P2 = e11[s + 3];
      e11[s] ^= ~e11[s + 2] & e11[s + 4], e11[s + 1] ^= ~e11[s + 3] & e11[s + 5], e11[s + 2] ^= ~e11[s + 4] & e11[s + 6], e11[s + 3] ^= ~e11[s + 5] & e11[s + 7], e11[s + 4] ^= ~e11[s + 6] & e11[s + 8], e11[s + 5] ^= ~e11[s + 7] & e11[s + 9], e11[s + 6] ^= ~e11[s + 8] & a, e11[s + 7] ^= ~e11[s + 9] & u, e11[s + 8] ^= ~a & m, e11[s + 9] ^= ~u & P2;
    }
    e11[0] ^= Yp[n], e11[1] ^= ed[n];
  }
  ui(r);
}
var pi = class e7 {
  constructor(t, r, n, i = false, o = 24) {
    __publicField(this, "state");
    __publicField(this, "pos", 0);
    __publicField(this, "posOut", 0);
    __publicField(this, "finished", false);
    __publicField(this, "state32");
    __publicField(this, "destroyed", false);
    __publicField(this, "blockLen");
    __publicField(this, "suffix");
    __publicField(this, "outputLen");
    __publicField(this, "canXOF");
    __publicField(this, "enableXOF", false);
    __publicField(this, "rounds");
    if (this.blockLen = t, this.suffix = r, this.outputLen = n, this.enableXOF = i, this.canXOF = i, this.rounds = o, Xr(n, "outputLen"), !(0 < t && t < 200)) throw new Error("only keccak-f1600 function is supported");
    this.state = new Uint8Array(200), this.state32 = da(this.state);
  }
  clone() {
    return this._cloneInto();
  }
  keccak() {
    ci(this.state32), td(this.state32, this.rounds), ci(this.state32), this.posOut = 0, this.pos = 0;
  }
  update(t) {
    li(this), Yr(t);
    let { blockLen: r, state: n } = this, i = t.length;
    for (let o = 0; o < i; ) {
      let s = Math.min(r - this.pos, i - o);
      for (let a = 0; a < s; a++) n[this.pos++] ^= t[o++];
      this.pos === r && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished) return;
    this.finished = true;
    let { state: t, suffix: r, pos: n, blockLen: i } = this;
    t[n] ^= r, (r & 128) !== 0 && n === i - 1 && this.keccak(), t[i - 1] ^= 128, this.keccak();
  }
  writeInto(t) {
    li(this, false), Yr(t), this.finish();
    let r = this.state, { blockLen: n } = this;
    for (let i = 0, o = t.length; i < o; ) {
      this.posOut >= n && this.keccak();
      let s = Math.min(n - this.posOut, o - i);
      t.set(r.subarray(this.posOut, this.posOut + s), i), this.posOut += s, i += s;
    }
    return t;
  }
  xofInto(t) {
    if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
    return this.writeInto(t);
  }
  xof(t) {
    return Xr(t), this.xofInto(new Uint8Array(t));
  }
  digestInto(t) {
    if (pa(t, this), this.finished) throw new Error("digest() was already called");
    this.writeInto(t.subarray(0, this.outputLen)), this.destroy();
  }
  digest() {
    let t = new Uint8Array(this.outputLen);
    return this.digestInto(t), t;
  }
  destroy() {
    this.destroyed = true, ui(this.state);
  }
  _cloneInto(t) {
    let { blockLen: r, suffix: n, outputLen: i, rounds: o, enableXOF: s } = this;
    return t || (t = new e7(r, n, i, s, o)), t.blockLen = r, t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = o, t.suffix = n, t.outputLen = i, t.enableXOF = s, t.canXOF = this.canXOF, t.destroyed = this.destroyed, t;
  }
}, rd = (e11, t, r, n = {}) => ma(() => new pi(t, e11, r), n);
var Pa = rd(6, 72, 64, fa(10));
var nd = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, di = Math.ceil, he = Math.floor, le = "[BigNumber Error] ", Ea = le + "Number primitive has more than 15 significant digits: ", Re = 1e14, N = 14, mi = 9007199254740991, fi = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], Qe = 1e7, Y = 1e9;
function Ta(e11) {
  var t, r, n, i = E.prototype = { constructor: E, toString: null, valueOf: null }, o = new E(1), s = 20, a = 4, u = -7, m = 21, P2 = -1e7, T = 1e7, S = false, I = 1, A = 0, M = { prefix: "", groupSize: 3, secondaryGroupSize: 0, groupSeparator: ",", decimalSeparator: ".", fractionGroupSize: 0, fractionGroupSeparator: " ", suffix: "" }, L = "0123456789abcdefghijklmnopqrstuvwxyz", q = true;
  function E(l, c) {
    var p, h, f, y, b, d, g, x, w = this;
    if (!(w instanceof E)) return new E(l, c);
    if (c == null) {
      if (l && l._isBigNumber === true) {
        w.s = l.s, !l.c || l.e > T ? w.c = w.e = null : l.e < P2 ? w.c = [w.e = 0] : (w.e = l.e, w.c = l.c.slice());
        return;
      }
      if ((d = typeof l == "number") && l * 0 == 0) {
        if (w.s = 1 / l < 0 ? (l = -l, -1) : 1, l === ~~l) {
          for (y = 0, b = l; b >= 10; b /= 10, y++) ;
          y > T ? w.c = w.e = null : (w.e = y, w.c = [l]);
          return;
        }
        x = String(l);
      } else {
        if (!nd.test(x = String(l))) return n(w, x, d);
        w.s = x.charCodeAt(0) == 45 ? (x = x.slice(1), -1) : 1;
      }
      (y = x.indexOf(".")) > -1 && (x = x.replace(".", "")), (b = x.search(/e/i)) > 0 ? (y < 0 && (y = b), y += +x.slice(b + 1), x = x.substring(0, b)) : y < 0 && (y = x.length);
    } else {
      if (J(c, 2, L.length, "Base"), c == 10 && q) return w = new E(l), ie(w, s + w.e + 1, a);
      if (x = String(l), d = typeof l == "number") {
        if (l * 0 != 0) return n(w, x, d, c);
        if (w.s = 1 / l < 0 ? (x = x.slice(1), -1) : 1, E.DEBUG && x.replace(/^0\.0*|\./, "").length > 15) throw Error(Ea + l);
      } else w.s = x.charCodeAt(0) === 45 ? (x = x.slice(1), -1) : 1;
      for (p = L.slice(0, c), y = b = 0, g = x.length; b < g; b++) if (p.indexOf(h = x.charAt(b)) < 0) {
        if (h == ".") {
          if (b > y) {
            y = g;
            continue;
          }
        } else if (!f && (x == x.toUpperCase() && (x = x.toLowerCase()) || x == x.toLowerCase() && (x = x.toUpperCase()))) {
          f = true, b = -1, y = 0;
          continue;
        }
        return n(w, String(l), d, c);
      }
      d = false, x = r(x, c, 10, w.s), (y = x.indexOf(".")) > -1 ? x = x.replace(".", "") : y = x.length;
    }
    for (b = 0; x.charCodeAt(b) === 48; b++) ;
    for (g = x.length; x.charCodeAt(--g) === 48; ) ;
    if (x = x.slice(b, ++g)) {
      if (g -= b, d && E.DEBUG && g > 15 && (l > mi || l !== he(l))) throw Error(Ea + w.s * l);
      if ((y = y - b - 1) > T) w.c = w.e = null;
      else if (y < P2) w.c = [w.e = 0];
      else {
        if (w.e = y, w.c = [], b = (y + 1) % N, y < 0 && (b += N), b < g) {
          for (b && w.c.push(+x.slice(0, b)), g -= N; b < g; ) w.c.push(+x.slice(b, b += N));
          b = N - (x = x.slice(b)).length;
        } else b -= g;
        for (; b--; x += "0") ;
        w.c.push(+x);
      }
    } else w.c = [w.e = 0];
  }
  E.clone = Ta, E.ROUND_UP = 0, E.ROUND_DOWN = 1, E.ROUND_CEIL = 2, E.ROUND_FLOOR = 3, E.ROUND_HALF_UP = 4, E.ROUND_HALF_DOWN = 5, E.ROUND_HALF_EVEN = 6, E.ROUND_HALF_CEIL = 7, E.ROUND_HALF_FLOOR = 8, E.EUCLID = 9, E.config = E.set = function(l) {
    var c, p;
    if (l != null) if (typeof l == "object") {
      if (l.hasOwnProperty(c = "DECIMAL_PLACES") && (p = l[c], J(p, 0, Y, c), s = p), l.hasOwnProperty(c = "ROUNDING_MODE") && (p = l[c], J(p, 0, 8, c), a = p), l.hasOwnProperty(c = "EXPONENTIAL_AT") && (p = l[c], p && p.pop ? (J(p[0], -Y, 0, c), J(p[1], 0, Y, c), u = p[0], m = p[1]) : (J(p, -Y, Y, c), u = -(m = p < 0 ? -p : p))), l.hasOwnProperty(c = "RANGE")) if (p = l[c], p && p.pop) J(p[0], -Y, -1, c), J(p[1], 1, Y, c), P2 = p[0], T = p[1];
      else if (J(p, -Y, Y, c), p) P2 = -(T = p < 0 ? -p : p);
      else throw Error(le + c + " cannot be zero: " + p);
      if (l.hasOwnProperty(c = "CRYPTO")) if (p = l[c], p === !!p) if (p) if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) S = p;
      else throw S = !p, Error(le + "crypto unavailable");
      else S = p;
      else throw Error(le + c + " not true or false: " + p);
      if (l.hasOwnProperty(c = "MODULO_MODE") && (p = l[c], J(p, 0, 9, c), I = p), l.hasOwnProperty(c = "POW_PRECISION") && (p = l[c], J(p, 0, Y, c), A = p), l.hasOwnProperty(c = "FORMAT")) if (p = l[c], typeof p == "object") M = p;
      else throw Error(le + c + " not an object: " + p);
      if (l.hasOwnProperty(c = "ALPHABET")) if (p = l[c], typeof p == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(p)) q = p.slice(0, 10) == "0123456789", L = p;
      else throw Error(le + c + " invalid: " + p);
    } else throw Error(le + "Object expected: " + l);
    return { DECIMAL_PLACES: s, ROUNDING_MODE: a, EXPONENTIAL_AT: [u, m], RANGE: [P2, T], CRYPTO: S, MODULO_MODE: I, POW_PRECISION: A, FORMAT: M, ALPHABET: L };
  }, E.isBigNumber = function(l) {
    if (!l || l._isBigNumber !== true) return false;
    if (!E.DEBUG) return true;
    var c, p, h = l.c, f = l.e, y = l.s;
    e: if ({}.toString.call(h) == "[object Array]") {
      if ((y === 1 || y === -1) && f >= -Y && f <= Y && f === he(f)) {
        if (h[0] === 0) {
          if (f === 0 && h.length === 1) return true;
          break e;
        }
        if (c = (f + 1) % N, c < 1 && (c += N), String(h[0]).length == c) {
          for (c = 0; c < h.length; c++) if (p = h[c], p < 0 || p >= Re || p !== he(p)) break e;
          if (p !== 0) return true;
        }
      }
    } else if (h === null && f === null && (y === null || y === 1 || y === -1)) return true;
    throw Error(le + "Invalid BigNumber: " + l);
  }, E.maximum = E.max = function() {
    return H(arguments, -1);
  }, E.minimum = E.min = function() {
    return H(arguments, 1);
  }, E.random = function() {
    var l = 9007199254740992, c = Math.random() * l & 2097151 ? function() {
      return he(Math.random() * l);
    } : function() {
      return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
    };
    return function(p) {
      var h, f, y, b, d, g = 0, x = [], w = new E(o);
      if (p == null ? p = s : J(p, 0, Y), b = di(p / N), S) if (crypto.getRandomValues) {
        for (h = crypto.getRandomValues(new Uint32Array(b *= 2)); g < b; ) d = h[g] * 131072 + (h[g + 1] >>> 11), d >= 9e15 ? (f = crypto.getRandomValues(new Uint32Array(2)), h[g] = f[0], h[g + 1] = f[1]) : (x.push(d % 1e14), g += 2);
        g = b / 2;
      } else if (crypto.randomBytes) {
        for (h = crypto.randomBytes(b *= 7); g < b; ) d = (h[g] & 31) * 281474976710656 + h[g + 1] * 1099511627776 + h[g + 2] * 4294967296 + h[g + 3] * 16777216 + (h[g + 4] << 16) + (h[g + 5] << 8) + h[g + 6], d >= 9e15 ? crypto.randomBytes(7).copy(h, g) : (x.push(d % 1e14), g += 7);
        g = b / 7;
      } else throw S = false, Error(le + "crypto unavailable");
      if (!S) for (; g < b; ) d = c(), d < 9e15 && (x[g++] = d % 1e14);
      for (b = x[--g], p %= N, b && p && (d = fi[N - p], x[g] = he(b / d) * d); x[g] === 0; x.pop(), g--) ;
      if (g < 0) x = [y = 0];
      else {
        for (y = -1; x[0] === 0; x.splice(0, 1), y -= N) ;
        for (g = 1, d = x[0]; d >= 10; d /= 10, g++) ;
        g < N && (y -= N - g);
      }
      return w.e = y, w.c = x, w;
    };
  }(), E.sum = function() {
    for (var l = 1, c = arguments, p = new E(c[0]); l < c.length; ) p = p.plus(c[l++]);
    return p;
  }, r = /* @__PURE__ */ function() {
    var l = "0123456789";
    function c(p, h, f, y) {
      for (var b, d = [0], g, x = 0, w = p.length; x < w; ) {
        for (g = d.length; g--; d[g] *= h) ;
        for (d[0] += y.indexOf(p.charAt(x++)), b = 0; b < d.length; b++) d[b] > f - 1 && (d[b + 1] == null && (d[b + 1] = 0), d[b + 1] += d[b] / f | 0, d[b] %= f);
      }
      return d.reverse();
    }
    return function(p, h, f, y, b) {
      var d, g, x, w, v, R, C, $2, G = p.indexOf("."), W = s, F = a;
      for (G >= 0 && (w = A, A = 0, p = p.replace(".", ""), $2 = new E(h), R = $2.pow(p.length - G), A = w, $2.c = c(Le(ye(R.c), R.e, "0"), 10, f, l), $2.e = $2.c.length), C = c(p, h, f, b ? (d = L, l) : (d = l, L)), x = w = C.length; C[--w] == 0; C.pop()) ;
      if (!C[0]) return d.charAt(0);
      if (G < 0 ? --x : (R.c = C, R.e = x, R.s = y, R = t(R, $2, W, F, f), C = R.c, v = R.r, x = R.e), g = x + W + 1, G = C[g], w = f / 2, v = v || g < 0 || C[g + 1] != null, v = F < 4 ? (G != null || v) && (F == 0 || F == (R.s < 0 ? 3 : 2)) : G > w || G == w && (F == 4 || v || F == 6 && C[g - 1] & 1 || F == (R.s < 0 ? 8 : 7)), g < 1 || !C[0]) p = v ? Le(d.charAt(1), -W, d.charAt(0)) : d.charAt(0);
      else {
        if (C.length = g, v) for (--f; ++C[--g] > f; ) C[g] = 0, g || (++x, C = [1].concat(C));
        for (w = C.length; !C[--w]; ) ;
        for (G = 0, p = ""; G <= w; p += d.charAt(C[G++])) ;
        p = Le(p, x, d.charAt(0));
      }
      return p;
    };
  }(), t = /* @__PURE__ */ function() {
    function l(h, f, y) {
      var b, d, g, x, w = 0, v = h.length, R = f % Qe, C = f / Qe | 0;
      for (h = h.slice(); v--; ) g = h[v] % Qe, x = h[v] / Qe | 0, b = C * g + x * R, d = R * g + b % Qe * Qe + w, w = (d / y | 0) + (b / Qe | 0) + C * x, h[v] = d % y;
      return w && (h = [w].concat(h)), h;
    }
    function c(h, f, y, b) {
      var d, g;
      if (y != b) g = y > b ? 1 : -1;
      else for (d = g = 0; d < y; d++) if (h[d] != f[d]) {
        g = h[d] > f[d] ? 1 : -1;
        break;
      }
      return g;
    }
    function p(h, f, y, b) {
      for (var d = 0; y--; ) h[y] -= d, d = h[y] < f[y] ? 1 : 0, h[y] = d * b + h[y] - f[y];
      for (; !h[0] && h.length > 1; h.splice(0, 1)) ;
    }
    return function(h, f, y, b, d) {
      var g, x, w, v, R, C, $2, G, W, F, U, oe, wr, Sn, An, Ce, Ot, me = h.s == f.s ? 1 : -1, se = h.c, z = f.c;
      if (!se || !se[0] || !z || !z[0]) return new E(!h.s || !f.s || (se ? z && se[0] == z[0] : !z) ? NaN : se && se[0] == 0 || !z ? me * 0 : me / 0);
      for (G = new E(me), W = G.c = [], x = h.e - f.e, me = y + x + 1, d || (d = Re, x = we(h.e / N) - we(f.e / N), me = me / N | 0), w = 0; z[w] == (se[w] || 0); w++) ;
      if (z[w] > (se[w] || 0) && x--, me < 0) W.push(1), v = true;
      else {
        for (Sn = se.length, Ce = z.length, w = 0, me += 2, R = he(d / (z[0] + 1)), R > 1 && (z = l(z, R, d), se = l(se, R, d), Ce = z.length, Sn = se.length), wr = Ce, F = se.slice(0, Ce), U = F.length; U < Ce; F[U++] = 0) ;
        Ot = z.slice(), Ot = [0].concat(Ot), An = z[0], z[1] >= d / 2 && An++;
        do {
          if (R = 0, g = c(z, F, Ce, U), g < 0) {
            if (oe = F[0], Ce != U && (oe = oe * d + (F[1] || 0)), R = he(oe / An), R > 1) for (R >= d && (R = d - 1), C = l(z, R, d), $2 = C.length, U = F.length; c(C, F, $2, U) == 1; ) R--, p(C, Ce < $2 ? Ot : z, $2, d), $2 = C.length, g = 1;
            else R == 0 && (g = R = 1), C = z.slice(), $2 = C.length;
            if ($2 < U && (C = [0].concat(C)), p(F, C, U, d), U = F.length, g == -1) for (; c(z, F, Ce, U) < 1; ) R++, p(F, Ce < U ? Ot : z, U, d), U = F.length;
          } else g === 0 && (R++, F = [0]);
          W[w++] = R, F[0] ? F[U++] = se[wr] || 0 : (F = [se[wr]], U = 1);
        } while ((wr++ < Sn || F[0] != null) && me--);
        v = F[0] != null, W[0] || W.splice(0, 1);
      }
      if (d == Re) {
        for (w = 1, me = W[0]; me >= 10; me /= 10, w++) ;
        ie(G, y + (G.e = w + x * N - 1) + 1, b, v);
      } else G.e = x, G.r = +v;
      return G;
    };
  }();
  function D(l, c, p, h) {
    var f, y, b, d, g;
    if (p == null ? p = a : J(p, 0, 8), !l.c) return l.toString();
    if (f = l.c[0], b = l.e, c == null) g = ye(l.c), g = h == 1 || h == 2 && (b <= u || b >= m) ? tn(g, b) : Le(g, b, "0");
    else if (l = ie(new E(l), c, p), y = l.e, g = ye(l.c), d = g.length, h == 1 || h == 2 && (c <= y || y <= u)) {
      for (; d < c; g += "0", d++) ;
      g = tn(g, y);
    } else if (c -= b + (h === 2 && y > b), g = Le(g, y, "0"), y + 1 > d) {
      if (--c > 0) for (g += "."; c--; g += "0") ;
    } else if (c += y - d, c > 0) for (y + 1 == d && (g += "."); c--; g += "0") ;
    return l.s < 0 && f ? "-" + g : g;
  }
  function H(l, c) {
    for (var p, h, f = 1, y = new E(l[0]); f < l.length; f++) h = new E(l[f]), (!h.s || (p = Xe(y, h)) === c || p === 0 && y.s === c) && (y = h);
    return y;
  }
  function ce(l, c, p) {
    for (var h = 1, f = c.length; !c[--f]; c.pop()) ;
    for (f = c[0]; f >= 10; f /= 10, h++) ;
    return (p = h + p * N - 1) > T ? l.c = l.e = null : p < P2 ? l.c = [l.e = 0] : (l.e = p, l.c = c), l;
  }
  n = /* @__PURE__ */ function() {
    var l = /^(-?)0([xbo])(?=\w[\w.]*$)/i, c = /^([^.]+)\.$/, p = /^\.([^.]+)$/, h = /^-?(Infinity|NaN)$/, f = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function(y, b, d, g) {
      var x, w = d ? b : b.replace(f, "");
      if (h.test(w)) y.s = isNaN(w) ? null : w < 0 ? -1 : 1;
      else {
        if (!d && (w = w.replace(l, function(v, R, C) {
          return x = (C = C.toLowerCase()) == "x" ? 16 : C == "b" ? 2 : 8, !g || g == x ? R : v;
        }), g && (x = g, w = w.replace(c, "$1").replace(p, "0.$1")), b != w)) return new E(w, x);
        if (E.DEBUG) throw Error(le + "Not a" + (g ? " base " + g : "") + " number: " + b);
        y.s = null;
      }
      y.c = y.e = null;
    };
  }();
  function ie(l, c, p, h) {
    var f, y, b, d, g, x, w, v = l.c, R = fi;
    if (v) {
      e: {
        for (f = 1, d = v[0]; d >= 10; d /= 10, f++) ;
        if (y = c - f, y < 0) y += N, b = c, g = v[x = 0], w = he(g / R[f - b - 1] % 10);
        else if (x = di((y + 1) / N), x >= v.length) if (h) {
          for (; v.length <= x; v.push(0)) ;
          g = w = 0, f = 1, y %= N, b = y - N + 1;
        } else break e;
        else {
          for (g = d = v[x], f = 1; d >= 10; d /= 10, f++) ;
          y %= N, b = y - N + f, w = b < 0 ? 0 : he(g / R[f - b - 1] % 10);
        }
        if (h = h || c < 0 || v[x + 1] != null || (b < 0 ? g : g % R[f - b - 1]), h = p < 4 ? (w || h) && (p == 0 || p == (l.s < 0 ? 3 : 2)) : w > 5 || w == 5 && (p == 4 || h || p == 6 && (y > 0 ? b > 0 ? g / R[f - b] : 0 : v[x - 1]) % 10 & 1 || p == (l.s < 0 ? 8 : 7)), c < 1 || !v[0]) return v.length = 0, h ? (c -= l.e + 1, v[0] = R[(N - c % N) % N], l.e = -c || 0) : v[0] = l.e = 0, l;
        if (y == 0 ? (v.length = x, d = 1, x--) : (v.length = x + 1, d = R[N - y], v[x] = b > 0 ? he(g / R[f - b] % R[b]) * d : 0), h) for (; ; ) if (x == 0) {
          for (y = 1, b = v[0]; b >= 10; b /= 10, y++) ;
          for (b = v[0] += d, d = 1; b >= 10; b /= 10, d++) ;
          y != d && (l.e++, v[0] == Re && (v[0] = 1));
          break;
        } else {
          if (v[x] += d, v[x] != Re) break;
          v[x--] = 0, d = 1;
        }
        for (y = v.length; v[--y] === 0; v.pop()) ;
      }
      l.e > T ? l.c = l.e = null : l.e < P2 && (l.c = [l.e = 0]);
    }
    return l;
  }
  function be(l) {
    var c, p = l.e;
    return p === null ? l.toString() : (c = ye(l.c), c = p <= u || p >= m ? tn(c, p) : Le(c, p, "0"), l.s < 0 ? "-" + c : c);
  }
  return i.absoluteValue = i.abs = function() {
    var l = new E(this);
    return l.s < 0 && (l.s = 1), l;
  }, i.comparedTo = function(l, c) {
    return Xe(this, new E(l, c));
  }, i.decimalPlaces = i.dp = function(l, c) {
    var p, h, f, y = this;
    if (l != null) return J(l, 0, Y), c == null ? c = a : J(c, 0, 8), ie(new E(y), l + y.e + 1, c);
    if (!(p = y.c)) return null;
    if (h = ((f = p.length - 1) - we(this.e / N)) * N, f = p[f]) for (; f % 10 == 0; f /= 10, h--) ;
    return h < 0 && (h = 0), h;
  }, i.dividedBy = i.div = function(l, c) {
    return t(this, new E(l, c), s, a);
  }, i.dividedToIntegerBy = i.idiv = function(l, c) {
    return t(this, new E(l, c), 0, 1);
  }, i.exponentiatedBy = i.pow = function(l, c) {
    var p, h, f, y, b, d, g, x, w, v = this;
    if (l = new E(l), l.c && !l.isInteger()) throw Error(le + "Exponent not an integer: " + be(l));
    if (c != null && (c = new E(c)), d = l.e > 14, !v.c || !v.c[0] || v.c[0] == 1 && !v.e && v.c.length == 1 || !l.c || !l.c[0]) return w = new E(Math.pow(+be(v), d ? l.s * (2 - en$1(l)) : +be(l))), c ? w.mod(c) : w;
    if (g = l.s < 0, c) {
      if (c.c ? !c.c[0] : !c.s) return new E(NaN);
      h = !g && v.isInteger() && c.isInteger(), h && (v = v.mod(c));
    } else {
      if (l.e > 9 && (v.e > 0 || v.e < -1 || (v.e == 0 ? v.c[0] > 1 || d && v.c[1] >= 24e7 : v.c[0] < 8e13 || d && v.c[0] <= 9999975e7))) return y = v.s < 0 && en$1(l) ? -0 : 0, v.e > -1 && (y = 1 / y), new E(g ? 1 / y : y);
      A && (y = di(A / N + 2));
    }
    for (d ? (p = new E(0.5), g && (l.s = 1), x = en$1(l)) : (f = Math.abs(+be(l)), x = f % 2), w = new E(o); ; ) {
      if (x) {
        if (w = w.times(v), !w.c) break;
        y ? w.c.length > y && (w.c.length = y) : h && (w = w.mod(c));
      }
      if (f) {
        if (f = he(f / 2), f === 0) break;
        x = f % 2;
      } else if (l = l.times(p), ie(l, l.e + 1, 1), l.e > 14) x = en$1(l);
      else {
        if (f = +be(l), f === 0) break;
        x = f % 2;
      }
      v = v.times(v), y ? v.c && v.c.length > y && (v.c.length = y) : h && (v = v.mod(c));
    }
    return h ? w : (g && (w = o.div(w)), c ? w.mod(c) : y ? ie(w, A, a, b) : w);
  }, i.integerValue = function(l) {
    var c = new E(this);
    return l == null ? l = a : J(l, 0, 8), ie(c, c.e + 1, l);
  }, i.isEqualTo = i.eq = function(l, c) {
    return Xe(this, new E(l, c)) === 0;
  }, i.isFinite = function() {
    return !!this.c;
  }, i.isGreaterThan = i.gt = function(l, c) {
    return Xe(this, new E(l, c)) > 0;
  }, i.isGreaterThanOrEqualTo = i.gte = function(l, c) {
    return (c = Xe(this, new E(l, c))) === 1 || c === 0;
  }, i.isInteger = function() {
    return !!this.c && we(this.e / N) > this.c.length - 2;
  }, i.isLessThan = i.lt = function(l, c) {
    return Xe(this, new E(l, c)) < 0;
  }, i.isLessThanOrEqualTo = i.lte = function(l, c) {
    return (c = Xe(this, new E(l, c))) === -1 || c === 0;
  }, i.isNaN = function() {
    return !this.s;
  }, i.isNegative = function() {
    return this.s < 0;
  }, i.isPositive = function() {
    return this.s > 0;
  }, i.isZero = function() {
    return !!this.c && this.c[0] == 0;
  }, i.minus = function(l, c) {
    var p, h, f, y, b = this, d = b.s;
    if (l = new E(l, c), c = l.s, !d || !c) return new E(NaN);
    if (d != c) return l.s = -c, b.plus(l);
    var g = b.e / N, x = l.e / N, w = b.c, v = l.c;
    if (!g || !x) {
      if (!w || !v) return w ? (l.s = -c, l) : new E(v ? b : NaN);
      if (!w[0] || !v[0]) return v[0] ? (l.s = -c, l) : new E(w[0] ? b : a == 3 ? -0 : 0);
    }
    if (g = we(g), x = we(x), w = w.slice(), d = g - x) {
      for ((y = d < 0) ? (d = -d, f = w) : (x = g, f = v), f.reverse(), c = d; c--; f.push(0)) ;
      f.reverse();
    } else for (h = (y = (d = w.length) < (c = v.length)) ? d : c, d = c = 0; c < h; c++) if (w[c] != v[c]) {
      y = w[c] < v[c];
      break;
    }
    if (y && (f = w, w = v, v = f, l.s = -l.s), c = (h = v.length) - (p = w.length), c > 0) for (; c--; w[p++] = 0) ;
    for (c = Re - 1; h > d; ) {
      if (w[--h] < v[h]) {
        for (p = h; p && !w[--p]; w[p] = c) ;
        --w[p], w[h] += Re;
      }
      w[h] -= v[h];
    }
    for (; w[0] == 0; w.splice(0, 1), --x) ;
    return w[0] ? ce(l, w, x) : (l.s = a == 3 ? -1 : 1, l.c = [l.e = 0], l);
  }, i.modulo = i.mod = function(l, c) {
    var p, h, f = this;
    return l = new E(l, c), !f.c || !l.s || l.c && !l.c[0] ? new E(NaN) : !l.c || f.c && !f.c[0] ? new E(f) : (I == 9 ? (h = l.s, l.s = 1, p = t(f, l, 0, 3), l.s = h, p.s *= h) : p = t(f, l, 0, I), l = f.minus(p.times(l)), !l.c[0] && I == 1 && (l.s = f.s), l);
  }, i.multipliedBy = i.times = function(l, c) {
    var p, h, f, y, b, d, g, x, w, v, R, C, $2, G, W, F = this, U = F.c, oe = (l = new E(l, c)).c;
    if (!U || !oe || !U[0] || !oe[0]) return !F.s || !l.s || U && !U[0] && !oe || oe && !oe[0] && !U ? l.c = l.e = l.s = null : (l.s *= F.s, !U || !oe ? l.c = l.e = null : (l.c = [0], l.e = 0)), l;
    for (h = we(F.e / N) + we(l.e / N), l.s *= F.s, g = U.length, v = oe.length, g < v && ($2 = U, U = oe, oe = $2, f = g, g = v, v = f), f = g + v, $2 = []; f--; $2.push(0)) ;
    for (G = Re, W = Qe, f = v; --f >= 0; ) {
      for (p = 0, R = oe[f] % W, C = oe[f] / W | 0, b = g, y = f + b; y > f; ) x = U[--b] % W, w = U[b] / W | 0, d = C * x + w * R, x = R * x + d % W * W + $2[y] + p, p = (x / G | 0) + (d / W | 0) + C * w, $2[y--] = x % G;
      $2[y] = p;
    }
    return p ? ++h : $2.splice(0, 1), ce(l, $2, h);
  }, i.negated = function() {
    var l = new E(this);
    return l.s = -l.s || null, l;
  }, i.plus = function(l, c) {
    var p, h = this, f = h.s;
    if (l = new E(l, c), c = l.s, !f || !c) return new E(NaN);
    if (f != c) return l.s = -c, h.minus(l);
    var y = h.e / N, b = l.e / N, d = h.c, g = l.c;
    if (!y || !b) {
      if (!d || !g) return new E(f / 0);
      if (!d[0] || !g[0]) return g[0] ? l : new E(d[0] ? h : f * 0);
    }
    if (y = we(y), b = we(b), d = d.slice(), f = y - b) {
      for (f > 0 ? (b = y, p = g) : (f = -f, p = d), p.reverse(); f--; p.push(0)) ;
      p.reverse();
    }
    for (f = d.length, c = g.length, f - c < 0 && (p = g, g = d, d = p, c = f), f = 0; c; ) f = (d[--c] = d[c] + g[c] + f) / Re | 0, d[c] = Re === d[c] ? 0 : d[c] % Re;
    return f && (d = [f].concat(d), ++b), ce(l, d, b);
  }, i.precision = i.sd = function(l, c) {
    var p, h, f, y = this;
    if (l != null && l !== !!l) return J(l, 1, Y), c == null ? c = a : J(c, 0, 8), ie(new E(y), l, c);
    if (!(p = y.c)) return null;
    if (f = p.length - 1, h = f * N + 1, f = p[f]) {
      for (; f % 10 == 0; f /= 10, h--) ;
      for (f = p[0]; f >= 10; f /= 10, h++) ;
    }
    return l && y.e + 1 > h && (h = y.e + 1), h;
  }, i.shiftedBy = function(l) {
    return J(l, -mi, mi), this.times("1e" + l);
  }, i.squareRoot = i.sqrt = function() {
    var l, c, p, h, f, y = this, b = y.c, d = y.s, g = y.e, x = s + 4, w = new E("0.5");
    if (d !== 1 || !b || !b[0]) return new E(!d || d < 0 && (!b || b[0]) ? NaN : b ? y : 1 / 0);
    if (d = Math.sqrt(+be(y)), d == 0 || d == 1 / 0 ? (c = ye(b), (c.length + g) % 2 == 0 && (c += "0"), d = Math.sqrt(+c), g = we((g + 1) / 2) - (g < 0 || g % 2), d == 1 / 0 ? c = "5e" + g : (c = d.toExponential(), c = c.slice(0, c.indexOf("e") + 1) + g), p = new E(c)) : p = new E(d + ""), p.c[0]) {
      for (g = p.e, d = g + x, d < 3 && (d = 0); ; ) if (f = p, p = w.times(f.plus(t(y, f, x, 1))), ye(f.c).slice(0, d) === (c = ye(p.c)).slice(0, d)) if (p.e < g && --d, c = c.slice(d - 3, d + 1), c == "9999" || !h && c == "4999") {
        if (!h && (ie(f, f.e + s + 2, 0), f.times(f).eq(y))) {
          p = f;
          break;
        }
        x += 4, d += 4, h = 1;
      } else {
        (!+c || !+c.slice(1) && c.charAt(0) == "5") && (ie(p, p.e + s + 2, 1), l = !p.times(p).eq(y));
        break;
      }
    }
    return ie(p, p.e + s + 1, a, l);
  }, i.toExponential = function(l, c) {
    return l != null && (J(l, 0, Y), l++), D(this, l, c, 1);
  }, i.toFixed = function(l, c) {
    return l != null && (J(l, 0, Y), l = l + this.e + 1), D(this, l, c);
  }, i.toFormat = function(l, c, p) {
    var h, f = this;
    if (p == null) l != null && c && typeof c == "object" ? (p = c, c = null) : l && typeof l == "object" ? (p = l, l = c = null) : p = M;
    else if (typeof p != "object") throw Error(le + "Argument not an object: " + p);
    if (h = f.toFixed(l, c), f.c) {
      var y, b = h.split("."), d = +p.groupSize, g = +p.secondaryGroupSize, x = p.groupSeparator || "", w = b[0], v = b[1], R = f.s < 0, C = R ? w.slice(1) : w, $2 = C.length;
      if (g && (y = d, d = g, g = y, $2 -= y), d > 0 && $2 > 0) {
        for (y = $2 % d || d, w = C.substr(0, y); y < $2; y += d) w += x + C.substr(y, d);
        g > 0 && (w += x + C.slice(y)), R && (w = "-" + w);
      }
      h = v ? w + (p.decimalSeparator || "") + ((g = +p.fractionGroupSize) ? v.replace(new RegExp("\\d{" + g + "}\\B", "g"), "$&" + (p.fractionGroupSeparator || "")) : v) : w;
    }
    return (p.prefix || "") + h + (p.suffix || "");
  }, i.toFraction = function(l) {
    var c, p, h, f, y, b, d, g, x, w, v, R, C = this, $2 = C.c;
    if (l != null && (d = new E(l), !d.isInteger() && (d.c || d.s !== 1) || d.lt(o))) throw Error(le + "Argument " + (d.isInteger() ? "out of range: " : "not an integer: ") + be(d));
    if (!$2) return new E(C);
    for (c = new E(o), x = p = new E(o), h = g = new E(o), R = ye($2), y = c.e = R.length - C.e - 1, c.c[0] = fi[(b = y % N) < 0 ? N + b : b], l = !l || d.comparedTo(c) > 0 ? y > 0 ? c : x : d, b = T, T = 1 / 0, d = new E(R), g.c[0] = 0; w = t(d, c, 0, 1), f = p.plus(w.times(h)), f.comparedTo(l) != 1; ) p = h, h = f, x = g.plus(w.times(f = x)), g = f, c = d.minus(w.times(f = c)), d = f;
    return f = t(l.minus(p), h, 0, 1), g = g.plus(f.times(x)), p = p.plus(f.times(h)), g.s = x.s = C.s, y = y * 2, v = t(x, h, y, a).minus(C).abs().comparedTo(t(g, p, y, a).minus(C).abs()) < 1 ? [x, h] : [g, p], T = b, v;
  }, i.toNumber = function() {
    return +be(this);
  }, i.toPrecision = function(l, c) {
    return l != null && J(l, 1, Y), D(this, l, c, 2);
  }, i.toString = function(l) {
    var c, p = this, h = p.s, f = p.e;
    return f === null ? h ? (c = "Infinity", h < 0 && (c = "-" + c)) : c = "NaN" : (l == null ? c = f <= u || f >= m ? tn(ye(p.c), f) : Le(ye(p.c), f, "0") : l === 10 && q ? (p = ie(new E(p), s + f + 1, a), c = Le(ye(p.c), p.e, "0")) : (J(l, 2, L.length, "Base"), c = r(Le(ye(p.c), f, "0"), 10, l, h, true)), h < 0 && p.c[0] && (c = "-" + c)), c;
  }, i.valueOf = i.toJSON = function() {
    return be(this);
  }, i._isBigNumber = true, i[Symbol.toStringTag] = "BigNumber", i[Symbol.for("nodejs.util.inspect.custom")] = i.valueOf, e11 != null && E.set(e11), E;
}
function we(e11) {
  var t = e11 | 0;
  return e11 > 0 || e11 === t ? t : t - 1;
}
function ye(e11) {
  for (var t, r, n = 1, i = e11.length, o = e11[0] + ""; n < i; ) {
    for (t = e11[n++] + "", r = N - t.length; r--; t = "0" + t) ;
    o += t;
  }
  for (i = o.length; o.charCodeAt(--i) === 48; ) ;
  return o.slice(0, i + 1 || 1);
}
function Xe(e11, t) {
  var r, n, i = e11.c, o = t.c, s = e11.s, a = t.s, u = e11.e, m = t.e;
  if (!s || !a) return null;
  if (r = i && !i[0], n = o && !o[0], r || n) return r ? n ? 0 : -a : s;
  if (s != a) return s;
  if (r = s < 0, n = u == m, !i || !o) return n ? 0 : !i ^ r ? 1 : -1;
  if (!n) return u > m ^ r ? 1 : -1;
  for (a = (u = i.length) < (m = o.length) ? u : m, s = 0; s < a; s++) if (i[s] != o[s]) return i[s] > o[s] ^ r ? 1 : -1;
  return u == m ? 0 : u > m ^ r ? 1 : -1;
}
function J(e11, t, r, n) {
  if (e11 < t || e11 > r || e11 !== he(e11)) throw Error(le + (n || "Argument") + (typeof e11 == "number" ? e11 < t || e11 > r ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(e11));
}
function en$1(e11) {
  var t = e11.c.length - 1;
  return we(e11.e / N) == t && e11.c[t] % 2 != 0;
}
function tn(e11, t) {
  return (e11.length > 1 ? e11.charAt(0) + "." + e11.slice(1) : e11) + (t < 0 ? "e" : "e+") + t;
}
function Le(e11, t, r) {
  var n, i;
  if (t < 0) {
    for (i = r + "."; ++t; i += r) ;
    e11 = i + e11;
  } else if (n = e11.length, ++t > n) {
    for (i = r, t -= n; --t; i += r) ;
    e11 += i;
  } else t < n && (e11 = e11.slice(0, t) + "." + e11.slice(t));
  return e11;
}
var id = Ta(), va = id;
var od = 24, or = 32, sd = () => typeof globalThis < "u" && globalThis.crypto && typeof globalThis.crypto.getRandomValues == "function" ? () => {
  let e11 = new Uint32Array(1);
  return globalThis.crypto.getRandomValues(e11), e11[0] / 4294967296;
} : Math.random, yi = sd(), gi = (e11 = 4, t = yi) => {
  let r = "";
  for (; r.length < e11; ) r = r + Math.floor(t() * 36).toString(36);
  return r;
};
function ad(e11) {
  let t = new va(0);
  for (let r of e11.values()) t = t.multipliedBy(256).plus(r);
  return t;
}
var Aa = (e11 = "") => {
  let t = new TextEncoder();
  return ad(Pa(t.encode(e11))).toString(36).slice(1);
}, Sa = Array.from({ length: 26 }, (e11, t) => String.fromCharCode(t + 97)), ld = (e11) => Sa[Math.floor(e11() * Sa.length)], ud = ({ globalObj: e11 = typeof commonjsGlobal < "u" ? commonjsGlobal : typeof window < "u" ? window : {}, random: t = yi } = {}) => {
  let r = Object.keys(e11).toString(), n = r.length ? r + gi(or, t) : gi(or, t);
  return Aa(n).substring(0, or);
}, cd = (e11) => () => e11++, pd = 476782367, Ra = ({ random: e11 = yi, counter: t = cd(Math.floor(e11() * pd)), length: r = od, fingerprint: n = ud({ random: e11 }) } = {}) => {
  if (r > or) throw new Error(`Length must be between 2 and ${or}. Received: ${r}`);
  return function() {
    let o = ld(e11), s = Date.now().toString(36), a = t().toString(36), u = gi(r, e11), m = `${s + u + a + n}`;
    return `${o + Aa(m).substring(1, r)}`;
  };
}, hi = dd(Ra);
function dd(e11) {
  let t;
  return () => (t || (t = e11()), t());
}
var wi = require$$6;
var Ca = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
var md = 128, Je, At;
function fd(e11) {
  if (e11 < 0) throw new RangeError("Wrong ID size");
  try {
    !Je || Je.length < e11 ? (Je = Buffer.allocUnsafe(e11 * md), wi.webcrypto.getRandomValues(Je), At = 0) : At + e11 > Je.length && (wi.webcrypto.getRandomValues(Je), At = 0);
  } catch (t) {
    throw Je = void 0, t;
  }
  At += e11;
}
function xi(e11 = 21) {
  fd(e11 |= 0);
  let t = "";
  for (let r = At - e11; r < At; r++) t += Ca[Je[r] & 63];
  return t;
}
var sr = Pe(require$$6, 1);
var ka = "0123456789ABCDEFGHJKMNPQRSTVWXYZ", ar = 32;
var gd = 16, Oa = 10, Ia = 281474976710655;
var Ye;
(function(e11) {
  e11.Base32IncorrectEncoding = "B32_ENC_INVALID", e11.DecodeTimeInvalidCharacter = "DEC_TIME_CHAR", e11.DecodeTimeValueMalformed = "DEC_TIME_MALFORMED", e11.EncodeTimeNegative = "ENC_TIME_NEG", e11.EncodeTimeSizeExceeded = "ENC_TIME_SIZE_EXCEED", e11.EncodeTimeValueMalformed = "ENC_TIME_MALFORMED", e11.PRNGDetectFailure = "PRNG_DETECT", e11.ULIDInvalid = "ULID_INVALID", e11.Unexpected = "UNEXPECTED", e11.UUIDInvalid = "UUID_INVALID";
})(Ye || (Ye = {}));
var et = class extends Error {
  constructor(t, r) {
    super(`${r} (${t})`), this.name = "ULIDError", this.code = t;
  }
};
function yd(e11) {
  let t = Math.floor(e11() * ar);
  return t === ar && (t = ar - 1), ka.charAt(t);
}
function hd(e11) {
  var _a5;
  let t = wd(), r = t && (t.crypto || t.msCrypto) || (typeof sr.default < "u" ? sr.default : null);
  if (typeof (r == null ? void 0 : r.getRandomValues) == "function") return () => {
    let n = new Uint8Array(1);
    return r.getRandomValues(n), n[0] / 255;
  };
  if (typeof (r == null ? void 0 : r.randomBytes) == "function") return () => r.randomBytes(1).readUInt8() / 255;
  if ((_a5 = sr.default) == null ? void 0 : _a5.randomBytes) return () => sr.default.randomBytes(1).readUInt8() / 255;
  throw new et(Ye.PRNGDetectFailure, "Failed to find a reliable PRNG");
}
function wd() {
  return Pd() ? self : typeof window < "u" ? window : typeof commonjsGlobal < "u" ? commonjsGlobal : typeof globalThis < "u" ? globalThis : null;
}
function xd(e11, t) {
  let r = "";
  for (; e11 > 0; e11--) r = yd(t) + r;
  return r;
}
function bd(e11, t = Oa) {
  if (isNaN(e11)) throw new et(Ye.EncodeTimeValueMalformed, `Time must be a number: ${e11}`);
  if (e11 > Ia) throw new et(Ye.EncodeTimeSizeExceeded, `Cannot encode a time larger than ${Ia}: ${e11}`);
  if (e11 < 0) throw new et(Ye.EncodeTimeNegative, `Time must be positive: ${e11}`);
  if (Number.isInteger(e11) === false) throw new et(Ye.EncodeTimeValueMalformed, `Time must be an integer: ${e11}`);
  let r, n = "";
  for (let i = t; i > 0; i--) r = e11 % ar, n = ka.charAt(r) + n, e11 = (e11 - r) / ar;
  return n;
}
function Pd() {
  return typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope;
}
function Na(e11, t) {
  let r = hd(), n = Date.now();
  return bd(n, Oa) + xd(gd, r);
}
var te = [];
for (let e11 = 0; e11 < 256; ++e11) te.push((e11 + 256).toString(16).slice(1));
function rn(e11, t = 0) {
  return (te[e11[t + 0]] + te[e11[t + 1]] + te[e11[t + 2]] + te[e11[t + 3]] + "-" + te[e11[t + 4]] + te[e11[t + 5]] + "-" + te[e11[t + 6]] + te[e11[t + 7]] + "-" + te[e11[t + 8]] + te[e11[t + 9]] + "-" + te[e11[t + 10]] + te[e11[t + 11]] + te[e11[t + 12]] + te[e11[t + 13]] + te[e11[t + 14]] + te[e11[t + 15]]).toLowerCase();
}
var Ed = new Uint8Array(16);
function Rt() {
  return crypto.getRandomValues(Ed);
}
function Td(e11, t, r) {
  return !t && !e11 && crypto.randomUUID ? crypto.randomUUID() : vd(e11, t, r);
}
function vd(e11, t, r) {
  var _a5;
  e11 = e11 || {};
  let n = e11.random ?? ((_a5 = e11.rng) == null ? void 0 : _a5.call(e11)) ?? Rt();
  if (n.length < 16) throw new Error("Random bytes length must be >= 16");
  if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, t) {
    if (r = r || 0, r < 0 || r + 16 > t.length) throw new RangeError(`UUID byte range ${r}:${r + 15} is out of buffer bounds`);
    for (let i = 0; i < 16; ++i) t[r + i] = n[i];
    return t;
  }
  return rn(n);
}
var bi = Td;
var Pi = {};
function Sd(e11, t, r) {
  var _a5;
  let n;
  if (e11) n = Da(e11.random ?? ((_a5 = e11.rng) == null ? void 0 : _a5.call(e11)) ?? Rt(), e11.msecs, e11.seq, t, r);
  else {
    let i = Date.now(), o = Rt();
    Ad(Pi, i, o), n = Da(o, Pi.msecs, Pi.seq, t, r);
  }
  return t ?? rn(n);
}
function Ad(e11, t, r) {
  return e11.msecs ?? (e11.msecs = -1 / 0), e11.seq ?? (e11.seq = 0), t > e11.msecs ? (e11.seq = r[6] << 23 | r[7] << 16 | r[8] << 8 | r[9], e11.msecs = t) : (e11.seq = e11.seq + 1 | 0, e11.seq === 0 && e11.msecs++), e11;
}
function Da(e11, t, r, n, i = 0) {
  if (e11.length < 16) throw new Error("Random bytes length must be >= 16");
  if (!n) n = new Uint8Array(16), i = 0;
  else if (i < 0 || i + 16 > n.length) throw new RangeError(`UUID byte range ${i}:${i + 15} is out of buffer bounds`);
  return t ?? (t = Date.now()), r ?? (r = e11[6] * 127 << 24 | e11[7] << 16 | e11[8] << 8 | e11[9]), n[i++] = t / 1099511627776 & 255, n[i++] = t / 4294967296 & 255, n[i++] = t / 16777216 & 255, n[i++] = t / 65536 & 255, n[i++] = t / 256 & 255, n[i++] = t & 255, n[i++] = 112 | r >>> 28 & 15, n[i++] = r >>> 20 & 255, n[i++] = 128 | r >>> 14 & 63, n[i++] = r >>> 6 & 255, n[i++] = r << 2 & 255 | e11[10] & 3, n[i++] = e11[11], n[i++] = e11[12], n[i++] = e11[13], n[i++] = e11[14], n[i++] = e11[15], n;
}
var Ei = Sd;
var nn = (_f = class {
  constructor() {
    __privateAdd(this, _e3, {});
    this.register("uuid", new vi()), this.register("cuid", new Si()), this.register("ulid", new Ai()), this.register("nanoid", new Ri()), this.register("product", new Ci());
  }
  snapshot() {
    return Object.create(__privateGet(this, _e3), { now: { value: new Ti() } });
  }
  register(t, r) {
    __privateGet(this, _e3)[t] = r;
  }
}, _e3 = new WeakMap(), _f), Ti = (_g = class {
  constructor() {
    __privateAdd(this, _e4);
  }
  generate() {
    return __privateGet(this, _e4) === void 0 && __privateSet(this, _e4, /* @__PURE__ */ new Date()), __privateGet(this, _e4).toISOString();
  }
}, _e4 = new WeakMap(), _g), vi = class {
  generate(t) {
    if (t === 4) return bi();
    if (t === 7) return Ei();
    throw new Error("Invalid UUID generator arguments");
  }
}, Si = class {
  generate(t) {
    if (t === 1) return ia();
    if (t === 2) return hi();
    throw new Error("Invalid CUID generator arguments");
  }
}, Ai = class {
  generate() {
    return Na();
  }
}, Ri = class {
  generate(t) {
    if (typeof t == "number") return xi(t);
    if (t === void 0) return xi();
    throw new Error("Invalid Nanoid generator arguments");
  }
}, Ci = class {
  generate(t, r) {
    if (t === void 0 || r === void 0) throw new Error("Invalid Product generator arguments");
    return Array.isArray(t) && Array.isArray(r) ? t.flatMap((n) => r.map((i) => [n, i])) : Array.isArray(t) ? t.map((n) => [n, r]) : Array.isArray(r) ? r.map((n) => [t, n]) : [[t, r]];
  }
};
function lr(e11, t) {
  return e11 == null ? e11 : typeof e11 == "string" ? lr(JSON.parse(e11), t) : Array.isArray(e11) ? Cd(e11, t) : Rd(e11, t);
}
function Rd(e11, t) {
  if (t.pagination) {
    let { skip: r, take: n, cursor: i } = t.pagination;
    if (r !== null && r > 0 || n === 0 || i !== null && !St(e11, i)) return null;
  }
  return Fa(e11, t.nested);
}
function Fa(e11, t) {
  for (let [r, n] of Object.entries(t)) e11[r] = lr(e11[r], n);
  return e11;
}
function Cd(e11, t) {
  if (t.distinct !== null) {
    let r = t.linkingFields !== null ? [...t.distinct, ...t.linkingFields] : t.distinct;
    e11 = Id(e11, r);
  }
  return t.pagination && (e11 = kd(e11, t.pagination, t.linkingFields)), t.reverse && e11.reverse(), Object.keys(t.nested).length === 0 ? e11 : e11.map((r) => Fa(r, t.nested));
}
function Id(e11, t) {
  let r = /* @__PURE__ */ new Set(), n = [];
  for (let i of e11) {
    let o = tt(i, t);
    r.has(o) || (r.add(o), n.push(i));
  }
  return n;
}
function kd(e11, t, r) {
  if (r === null) return Ma(e11, t);
  let n = /* @__PURE__ */ new Map();
  for (let o of e11) {
    let s = tt(o, r);
    n.has(s) || n.set(s, []), n.get(s).push(o);
  }
  let i = Array.from(n.entries());
  return i.sort(([o], [s]) => o < s ? -1 : o > s ? 1 : 0), i.flatMap(([, o]) => Ma(o, t));
}
function Ma(e11, { cursor: t, skip: r, take: n }) {
  let i = t !== null ? e11.findIndex((a) => St(a, t)) : 0;
  if (i === -1) return [];
  let o = i + (r ?? 0), s = n !== null ? o + n : e11.length;
  return e11.slice(o, s);
}
function tt(e11, t, r) {
  let n = t.map((i, o) => (r == null ? void 0 : r[o]) ? e11[i] !== null ? r[o](e11[i]) : null : e11[i]);
  return JSON.stringify(n);
}
function Ii(e11) {
  return typeof e11 == "object" && e11 !== null && e11.prisma__type === "param";
}
function ki(e11) {
  return typeof e11 == "object" && e11 !== null && e11.prisma__type === "generatorCall";
}
function Di(e11, t, r, n) {
  let i = e11.args.map((o) => de(o, t, r));
  switch (e11.type) {
    case "rawSql":
      return [Dd(e11.sql, i, e11.argTypes)];
    case "templateSql":
      return (e11.chunkable ? Fd(e11.fragments, i, n) : [i]).map((s) => {
        let a = Od(e11.fragments, e11.placeholderFormat, s, e11.argTypes);
        if (n !== void 0 && a.args.length > n) throw new X("The query parameter limit supported by your database is exceeded.", "P2029");
        return a;
      });
    default:
      V(e11.type, "Invalid query type");
  }
}
function de(e11, t, r) {
  for (; Md(e11); ) if (Ii(e11)) {
    let n = t[e11.prisma__value.name];
    if (n === void 0) throw new Error(`Missing value for query variable ${e11.prisma__value.name}`);
    e11.prisma__value.type === "DateTime" && typeof n == "string" ? e11 = new Date(n) : e11 = n;
  } else if (ki(e11)) {
    let { name: n, args: i } = e11.prisma__value, o = r[n];
    if (!o) throw new Error(`Encountered an unknown generator '${n}'`);
    e11 = o.generate(...i.map((s) => de(s, t, r)));
  } else V(e11, `Unexpected unevaluated value type: ${e11}`);
  return Array.isArray(e11) && (e11 = e11.map((n) => de(n, t, r))), e11;
}
function Od(e11, t, r, n) {
  let i = "", o = { placeholderNumber: 1 }, s = [], a = [];
  for (let u of Ni(e11, r, n)) {
    if (i += Nd(u, t, o), u.type === "stringChunk") continue;
    let m = Array.from(_a$2(u)), P2 = m.length;
    if (Gr(s, m), u.argType.arity === "tuple") {
      if (P2 % u.argType.elements.length !== 0) throw new Error(`Malformed query template. Expected the number of parameters to match the tuple arity, but got ${P2} parameters for a tuple of arity ${u.argType.elements.length}.`);
      for (let T = 0; T < P2 / u.argType.elements.length; T++) a.push(...u.argType.elements);
    } else for (let T = 0; T < P2; T++) a.push(u.argType);
  }
  return { sql: i, args: s, argTypes: a };
}
function Nd(e11, t, r) {
  let n = e11.type;
  switch (n) {
    case "parameter":
      return Oi(t, r.placeholderNumber++);
    case "stringChunk":
      return e11.chunk;
    case "parameterTuple":
      return `(${e11.value.length == 0 ? "NULL" : e11.value.map(() => {
        let o = Oi(t, r.placeholderNumber++);
        return `${e11.itemPrefix}${o}${e11.itemSuffix}`;
      }).join(e11.itemSeparator)})`;
    case "parameterTupleList":
      return e11.value.map((i) => {
        let o = i.map(() => Oi(t, r.placeholderNumber++)).join(e11.itemSeparator);
        return `${e11.itemPrefix}${o}${e11.itemSuffix}`;
      }).join(e11.groupSeparator);
    default:
      V(n, "Invalid fragment type");
  }
}
function Oi(e11, t) {
  return e11.hasNumbering ? `${e11.prefix}${t}` : e11.prefix;
}
function Dd(e11, t, r) {
  return { sql: e11, args: t, argTypes: r };
}
function Md(e11) {
  return Ii(e11) || ki(e11);
}
function* Ni(e11, t, r) {
  let n = 0;
  for (let i of e11) switch (i.type) {
    case "parameter": {
      if (n >= t.length) throw new Error(`Malformed query template. Fragments attempt to read over ${t.length} parameters.`);
      yield { ...i, value: t[n], argType: r == null ? void 0 : r[n] }, n++;
      break;
    }
    case "stringChunk": {
      yield i;
      break;
    }
    case "parameterTuple": {
      if (n >= t.length) throw new Error(`Malformed query template. Fragments attempt to read over ${t.length} parameters.`);
      let o = t[n];
      yield { ...i, value: Array.isArray(o) ? o : [o], argType: r == null ? void 0 : r[n] }, n++;
      break;
    }
    case "parameterTupleList": {
      if (n >= t.length) throw new Error(`Malformed query template. Fragments attempt to read over ${t.length} parameters.`);
      let o = t[n];
      if (!Array.isArray(o)) throw new Error("Malformed query template. Tuple list expected.");
      if (o.length === 0) throw new Error("Malformed query template. Tuple list cannot be empty.");
      for (let s of o) if (!Array.isArray(s)) throw new Error("Malformed query template. Tuple expected.");
      yield { ...i, value: o, argType: r == null ? void 0 : r[n] }, n++;
      break;
    }
  }
}
function* _a$2(e11) {
  switch (e11.type) {
    case "parameter":
      yield e11.value;
      break;
    case "stringChunk":
      break;
    case "parameterTuple":
      yield* e11.value;
      break;
    case "parameterTupleList":
      for (let t of e11.value) yield* t;
      break;
  }
}
function Fd(e11, t, r) {
  let n = 0, i = 0;
  for (let s of Ni(e11, t, void 0)) {
    let a = 0;
    for (let u of _a$2(s)) a++;
    i = Math.max(i, a), n += a;
  }
  let o = [[]];
  for (let s of Ni(e11, t, void 0)) switch (s.type) {
    case "parameter": {
      for (let a of o) a.push(s.value);
      break;
    }
    case "stringChunk":
      break;
    case "parameterTuple": {
      let a = s.value.length, u = [];
      if (r && o.length === 1 && a === i && n > r && n - a < r) {
        let m = r - (n - a);
        u = _d(s.value, m);
      } else u = [s.value];
      o = o.flatMap((m) => u.map((P2) => [...m, P2]));
      break;
    }
    case "parameterTupleList": {
      let a = s.value.reduce((T, S) => T + S.length, 0), u = [], m = [], P2 = 0;
      for (let T of s.value) r && o.length === 1 && a === i && m.length > 0 && n - a + P2 + T.length > r && (u.push(m), m = [], P2 = 0), m.push(T), P2 += T.length;
      m.length > 0 && u.push(m), o = o.flatMap((T) => u.map((S) => [...T, S]));
      break;
    }
  }
  return o;
}
function _d(e11, t) {
  let r = [];
  for (let n = 0; n < e11.length; n += t) r.push(e11.slice(n, n + t));
  return r;
}
function $a(e11) {
  return e11.rows.map((t) => t.reduce((r, n, i) => (r[e11.columnNames[i]] = n, r), {}));
}
function La(e11) {
  return { columns: e11.columnNames, types: e11.columnTypes.map((t) => $d(t)), rows: e11.rows.map((t) => t.map((r, n) => ur(r, e11.columnTypes[n]))) };
}
function ur(e11, t) {
  if (e11 === null) return null;
  switch (t) {
    case k.Int32:
      switch (typeof e11) {
        case "number":
          return Math.trunc(e11);
        case "string":
          return Math.trunc(Number(e11));
        default:
          throw new Error(`Cannot serialize value of type ${typeof e11} as Int32`);
      }
    case k.Int32Array:
      if (!Array.isArray(e11)) throw new Error(`Cannot serialize value of type ${typeof e11} as Int32Array`);
      return e11.map((r) => ur(r, k.Int32));
    case k.Int64:
      switch (typeof e11) {
        case "number":
          return BigInt(Math.trunc(e11));
        case "string":
          return e11;
        default:
          throw new Error(`Cannot serialize value of type ${typeof e11} as Int64`);
      }
    case k.Int64Array:
      if (!Array.isArray(e11)) throw new Error(`Cannot serialize value of type ${typeof e11} as Int64Array`);
      return e11.map((r) => ur(r, k.Int64));
    case k.Json:
      switch (typeof e11) {
        case "string":
          return JSON.parse(e11);
        default:
          throw new Error(`Cannot serialize value of type ${typeof e11} as Json`);
      }
    case k.JsonArray:
      if (!Array.isArray(e11)) throw new Error(`Cannot serialize value of type ${typeof e11} as JsonArray`);
      return e11.map((r) => ur(r, k.Json));
    case k.Boolean:
      switch (typeof e11) {
        case "boolean":
          return e11;
        case "string":
          return e11 === "true" || e11 === "1";
        case "number":
          return e11 === 1;
        default:
          throw new Error(`Cannot serialize value of type ${typeof e11} as Boolean`);
      }
    case k.BooleanArray:
      if (!Array.isArray(e11)) throw new Error(`Cannot serialize value of type ${typeof e11} as BooleanArray`);
      return e11.map((r) => ur(r, k.Boolean));
    default:
      return e11;
  }
}
function $d(e11) {
  switch (e11) {
    case k.Int32:
      return "int";
    case k.Int64:
      return "bigint";
    case k.Float:
      return "float";
    case k.Double:
      return "double";
    case k.Text:
      return "string";
    case k.Enum:
      return "enum";
    case k.Bytes:
      return "bytes";
    case k.Boolean:
      return "bool";
    case k.Character:
      return "char";
    case k.Numeric:
      return "decimal";
    case k.Json:
      return "json";
    case k.Uuid:
      return "uuid";
    case k.DateTime:
      return "datetime";
    case k.Date:
      return "date";
    case k.Time:
      return "time";
    case k.Int32Array:
      return "int-array";
    case k.Int64Array:
      return "bigint-array";
    case k.FloatArray:
      return "float-array";
    case k.DoubleArray:
      return "double-array";
    case k.TextArray:
      return "string-array";
    case k.EnumArray:
      return "string-array";
    case k.BytesArray:
      return "bytes-array";
    case k.BooleanArray:
      return "bool-array";
    case k.CharacterArray:
      return "char-array";
    case k.NumericArray:
      return "decimal-array";
    case k.JsonArray:
      return "json-array";
    case k.UuidArray:
      return "uuid-array";
    case k.DateTimeArray:
      return "datetime-array";
    case k.DateArray:
      return "date-array";
    case k.TimeArray:
      return "time-array";
    case k.UnknownNumber:
      return "unknown";
    case k.Set:
      return "string";
    default:
      V(e11, `Unexpected column type: ${e11}`);
  }
}
function Mi(e11, t, r) {
  if (!t.every((n) => on(e11, n))) {
    let n = Ld(e11, r), i = Vd(r);
    throw new X(n, i, r.context);
  }
}
function on(e11, t) {
  switch (t.type) {
    case "rowCountEq":
      return Array.isArray(e11) ? e11.length === t.args : e11 === null ? t.args === 0 : t.args === 1;
    case "rowCountNeq":
      return Array.isArray(e11) ? e11.length !== t.args : e11 === null ? t.args !== 0 : t.args !== 1;
    case "affectedRowCountEq":
      return e11 === t.args;
    case "never":
      return false;
    default:
      V(t, `Unknown rule type: ${t.type}`);
  }
}
function Ld(e11, t) {
  switch (t.errorIdentifier) {
    case "RELATION_VIOLATION":
      return `The change you are trying to make would violate the required relation '${t.context.relation}' between the \`${t.context.modelA}\` and \`${t.context.modelB}\` models.`;
    case "MISSING_RECORD":
      return `An operation failed because it depends on one or more records that were required but not found. No record was found for ${t.context.operation}.`;
    case "MISSING_RELATED_RECORD": {
      let r = t.context.neededFor ? ` (needed to ${t.context.neededFor})` : "";
      return `An operation failed because it depends on one or more records that were required but not found. No '${t.context.model}' record${r} was found for ${t.context.operation} on ${t.context.relationType} relation '${t.context.relation}'.`;
    }
    case "INCOMPLETE_CONNECT_INPUT":
      return `An operation failed because it depends on one or more records that were required but not found. Expected ${t.context.expectedRows} records to be connected, found only ${Array.isArray(e11) ? e11.length : e11}.`;
    case "INCOMPLETE_CONNECT_OUTPUT":
      return `The required connected records were not found. Expected ${t.context.expectedRows} records to be connected after connect operation on ${t.context.relationType} relation '${t.context.relation}', found ${Array.isArray(e11) ? e11.length : e11}.`;
    case "RECORDS_NOT_CONNECTED":
      return `The records for relation \`${t.context.relation}\` between the \`${t.context.parent}\` and \`${t.context.child}\` models are not connected.`;
    default:
      V(t, `Unknown error identifier: ${t}`);
  }
}
function Vd(e11) {
  switch (e11.errorIdentifier) {
    case "RELATION_VIOLATION":
      return "P2014";
    case "RECORDS_NOT_CONNECTED":
      return "P2017";
    case "INCOMPLETE_CONNECT_OUTPUT":
      return "P2018";
    case "MISSING_RECORD":
    case "MISSING_RELATED_RECORD":
    case "INCOMPLETE_CONNECT_INPUT":
      return "P2025";
    default:
      V(e11, `Unknown error identifier: ${e11}`);
  }
}
var qd = K("prisma:client:queryInterpreter"), dr = (_h = class {
  constructor({ onQuery: t, tracingHelper: r, serializer: n, rawSerializer: i, provider: o, connectionInfo: s }) {
    __privateAdd(this, _e8_instances);
    __privateAdd(this, _e5);
    __privateAdd(this, _t2, new nn());
    __privateAdd(this, _r2);
    __privateAdd(this, _i2);
    __privateAdd(this, _o2);
    __privateAdd(this, _s2);
    __privateAdd(this, _a3);
    __privateSet(this, _e5, t), __privateSet(this, _r2, r), __privateSet(this, _i2, n), __privateSet(this, _o2, i ?? n), __privateSet(this, _s2, o), __privateSet(this, _a3, s);
  }
  static forSql(t) {
    return new _h({ onQuery: t.onQuery, tracingHelper: t.tracingHelper, serializer: $a, rawSerializer: La, provider: t.provider, connectionInfo: t.connectionInfo });
  }
  async run(t, r) {
    var _a5;
    let n = __privateGet(this, _t2).snapshot(), i = { ...r, generators: n }, o = (_a5 = jd(t, (a) => this.interpretNode(a, i))) == null ? void 0 : _a5.catch((a) => Be(a));
    if (o) try {
      return __privateMethod(this, _e8_instances, n_fn).call(this, await o, i.scope, n).value;
    } catch (a) {
      Be(a);
    }
    let { value: s } = await this.interpretNode(t, i).catch((a) => Be(a));
    return s;
  }
  async interpretNode(t, r) {
    switch (t.type) {
      case "value":
        return { value: de(t.args, r.scope, r.generators), lastInsertId: t.lastInsertId };
      case "seq": {
        let n;
        for (let i of t.args) n = await this.interpretNode(i, r);
        return n ?? { value: void 0 };
      }
      case "let": {
        let n = Object.create(r.scope);
        for (let i of t.args.bindings) {
          let { value: o } = await this.interpretNode(i.expr, { ...r, scope: n });
          n[i.name] = o;
        }
        return this.interpretNode(t.args.expr, { ...r, scope: n });
      }
      case "concat": {
        let n = await Promise.all(t.args.map((i) => this.interpretNode(i, r).then((o) => o.value)));
        return { value: n.length > 0 ? n.reduce((i, o) => i.concat(Ct(o)), []) : [] };
      }
      case "sum": {
        let n = await Promise.all(t.args.map((i) => this.interpretNode(i, r).then((o) => o.value)));
        return { value: n.length > 0 ? n.reduce((i, o) => xe(i) + xe(o)) : 0 };
      }
      case "execute": {
        let n = Di(t.args, r.scope, r.generators, __privateMethod(this, _e8_instances, p_fn).call(this));
        return __privateMethod(this, _e8_instances, u_fn).call(this, n.length, r, async (i) => {
          let o = 0;
          for (let s of n) {
            let a = ja(s, i.sqlCommenter);
            o += await __privateMethod(this, _e8_instances, d_fn).call(this, a, i.queryable, () => i.queryable.executeRaw(sn(a)).catch((u) => t.args.type === "rawSql" ? ri(u) : Be(u)));
          }
          return { value: o };
        });
      }
      case "query": {
        let n = Di(t.args, r.scope, r.generators, __privateMethod(this, _e8_instances, p_fn).call(this));
        return __privateMethod(this, _e8_instances, u_fn).call(this, n.length, r, async (i) => {
          let o;
          for (let s of n) {
            let a = ja(s, i.sqlCommenter), u = await __privateMethod(this, _e8_instances, d_fn).call(this, a, i.queryable, () => i.queryable.queryRaw(sn(a)).catch((m) => t.args.type === "rawSql" ? ri(m) : Be(m)));
            o === void 0 ? o = u : (Gr(o.rows, u.rows), o.lastInsertId = u.lastInsertId);
          }
          return { value: t.args.type === "rawSql" ? __privateGet(this, _o2).call(this, o) : __privateGet(this, _i2).call(this, o), lastInsertId: o == null ? void 0 : o.lastInsertId };
        });
      }
      case "reverse": {
        let { value: n, lastInsertId: i } = await this.interpretNode(t.args, r);
        return { value: Array.isArray(n) ? n.reverse() : n, lastInsertId: i };
      }
      case "unique": {
        let { value: n, lastInsertId: i } = await this.interpretNode(t.args, r);
        if (!Array.isArray(n)) return { value: n, lastInsertId: i };
        if (n.length > 1) throw new Error(`Expected zero or one element, got ${n.length}`);
        return { value: n[0] ?? null, lastInsertId: i };
      }
      case "required": {
        let { value: n, lastInsertId: i } = await this.interpretNode(t.args, r);
        if (Fi(n)) throw new Error("Required value is empty");
        return { value: n, lastInsertId: i };
      }
      case "mapField": {
        let { value: n, lastInsertId: i } = await this.interpretNode(t.args.records, r);
        return { value: _i(n, t.args.field), lastInsertId: i };
      }
      case "join": {
        let { value: n, lastInsertId: i } = await this.interpretNode(t.args.parent, r);
        if (n === null) return { value: null, lastInsertId: i };
        let o = await Promise.all(t.args.children.map(async (s) => ({ joinExpr: s, childRecords: (await this.interpretNode(s.child, r)).value })));
        return { value: Va(n, o, t.args.canAssumeStrictEquality), lastInsertId: i };
      }
      case "transaction":
        return __privateMethod(this, _e8_instances, l_fn).call(this, r, (n) => this.interpretNode(t.args, n));
      case "dataMap": {
        let { value: n, lastInsertId: i } = await this.interpretNode(t.args.expr, r);
        return { value: ii(n, t.args.structure, t.args.enums), lastInsertId: i };
      }
      case "validate": {
        let { value: n, lastInsertId: i } = await this.interpretNode(t.args.expr, r);
        return Mi(n, t.args.rules, t.args), { value: n, lastInsertId: i };
      }
      case "if": {
        let { value: n } = await this.interpretNode(t.args.value, r);
        return on(n, t.args.rule) ? await this.interpretNode(t.args.then, r) : await this.interpretNode(t.args.else, r);
      }
      case "diff": {
        let { value: n } = await this.interpretNode(t.args.from, r), { value: i } = await this.interpretNode(t.args.to, r), o = (a) => a !== null ? tt(rt(a), t.args.fields) : null, s = new Set(Ct(i).map(o));
        return { value: Ct(n).filter((a) => !s.has(o(a))) };
      }
      case "process": {
        let { value: n, lastInsertId: i } = await this.interpretNode(t.args.expr, r), o = sn(t.args.operations);
        return $i(o, r.scope, r.generators), { value: lr(n, o), lastInsertId: i };
      }
      case "initializeRecord": {
        let { lastInsertId: n } = await this.interpretNode(t.args.expr, r), i = {};
        for (let [o, s] of Object.entries(t.args.fields)) i[o] = qa(s, n, r.scope, r.generators);
        return { value: i, lastInsertId: n };
      }
      case "mapRecord": {
        let { value: n, lastInsertId: i } = await this.interpretNode(t.args.expr, r), o = n === null ? {} : rt(n);
        for (let [s, a] of Object.entries(t.args.fields)) o[s] = Ua(a, o[s], r.scope, r.generators);
        return { value: o, lastInsertId: i };
      }
      default:
        return __privateMethod(this, _e8_instances, n_fn).call(this, t, r.scope, r.generators);
    }
  }
}, _e5 = new WeakMap(), _t2 = new WeakMap(), _r2 = new WeakMap(), _i2 = new WeakMap(), _o2 = new WeakMap(), _s2 = new WeakMap(), _a3 = new WeakMap(), _e8_instances = new WeakSet(), n_fn = function(t, r, n) {
  switch (t.type) {
    case "value":
      return { value: de(t.args, r, n), lastInsertId: t.lastInsertId };
    case "seq": {
      let i;
      for (let o of t.args) i = __privateMethod(this, _e8_instances, n_fn).call(this, o, r, n);
      return i ?? { value: void 0 };
    }
    case "get":
      return { value: r[t.args.name] };
    case "let": {
      let i = Object.create(r);
      for (let o of t.args.bindings) {
        let { value: s } = __privateMethod(this, _e8_instances, n_fn).call(this, o.expr, i, n);
        i[o.name] = s;
      }
      return __privateMethod(this, _e8_instances, n_fn).call(this, t.args.expr, i, n);
    }
    case "getFirstNonEmpty": {
      for (let i of t.args.names) {
        let o = r[i];
        if (!Fi(o)) return { value: o };
      }
      return { value: [] };
    }
    case "concat": {
      let i = t.args.map((o) => __privateMethod(this, _e8_instances, n_fn).call(this, o, r, n).value);
      return { value: i.length > 0 ? i.reduce((o, s) => o.concat(Ct(s)), []) : [] };
    }
    case "sum": {
      let i = t.args.map((o) => __privateMethod(this, _e8_instances, n_fn).call(this, o, r, n).value);
      return { value: i.length > 0 ? i.reduce((o, s) => xe(o) + xe(s)) : 0 };
    }
    case "reverse": {
      let { value: i, lastInsertId: o } = __privateMethod(this, _e8_instances, n_fn).call(this, t.args, r, n);
      return { value: Array.isArray(i) ? i.reverse() : i, lastInsertId: o };
    }
    case "unique": {
      let { value: i, lastInsertId: o } = __privateMethod(this, _e8_instances, n_fn).call(this, t.args, r, n);
      if (!Array.isArray(i)) return { value: i, lastInsertId: o };
      if (i.length > 1) throw new Error(`Expected zero or one element, got ${i.length}`);
      return { value: i[0] ?? null, lastInsertId: o };
    }
    case "required": {
      let { value: i, lastInsertId: o } = __privateMethod(this, _e8_instances, n_fn).call(this, t.args, r, n);
      if (Fi(i)) throw new Error("Required value is empty");
      return { value: i, lastInsertId: o };
    }
    case "mapField": {
      let { value: i, lastInsertId: o } = __privateMethod(this, _e8_instances, n_fn).call(this, t.args.records, r, n);
      return { value: _i(i, t.args.field), lastInsertId: o };
    }
    case "join": {
      let { value: i, lastInsertId: o } = __privateMethod(this, _e8_instances, n_fn).call(this, t.args.parent, r, n);
      if (i === null) return { value: null, lastInsertId: o };
      let s = t.args.children.map((a) => ({ joinExpr: a, childRecords: __privateMethod(this, _e8_instances, n_fn).call(this, a.child, r, n).value }));
      return { value: Va(i, s, t.args.canAssumeStrictEquality), lastInsertId: o };
    }
    case "dataMap": {
      let { value: i, lastInsertId: o } = __privateMethod(this, _e8_instances, n_fn).call(this, t.args.expr, r, n);
      return { value: ii(i, t.args.structure, t.args.enums), lastInsertId: o };
    }
    case "validate": {
      let { value: i, lastInsertId: o } = __privateMethod(this, _e8_instances, n_fn).call(this, t.args.expr, r, n);
      return Mi(i, t.args.rules, t.args), { value: i, lastInsertId: o };
    }
    case "if": {
      let { value: i } = __privateMethod(this, _e8_instances, n_fn).call(this, t.args.value, r, n);
      return on(i, t.args.rule) ? __privateMethod(this, _e8_instances, n_fn).call(this, t.args.then, r, n) : __privateMethod(this, _e8_instances, n_fn).call(this, t.args.else, r, n);
    }
    case "unit":
      return { value: void 0 };
    case "diff": {
      let { value: i } = __privateMethod(this, _e8_instances, n_fn).call(this, t.args.from, r, n), { value: o } = __privateMethod(this, _e8_instances, n_fn).call(this, t.args.to, r, n), s = (u) => u !== null ? tt(rt(u), t.args.fields) : null, a = new Set(Ct(o).map(s));
      return { value: Ct(i).filter((u) => !a.has(s(u))) };
    }
    case "process": {
      let { value: i, lastInsertId: o } = __privateMethod(this, _e8_instances, n_fn).call(this, t.args.expr, r, n), s = sn(t.args.operations);
      return $i(s, r, n), { value: lr(i, s), lastInsertId: o };
    }
    case "initializeRecord": {
      let { lastInsertId: i } = __privateMethod(this, _e8_instances, n_fn).call(this, t.args.expr, r, n), o = {};
      for (let [s, a] of Object.entries(t.args.fields)) o[s] = qa(a, i, r, n);
      return { value: o, lastInsertId: i };
    }
    case "mapRecord": {
      let { value: i, lastInsertId: o } = __privateMethod(this, _e8_instances, n_fn).call(this, t.args.expr, r, n), s = i === null ? {} : rt(i);
      for (let [a, u] of Object.entries(t.args.fields)) s[a] = Ua(u, s[a], r, n);
      return { value: s, lastInsertId: o };
    }
    default:
      V(t, `Unexpected node type: ${t.type}`);
  }
}, u_fn = function(t, r, n) {
  return t <= 1 ? n(r) : __privateMethod(this, _e8_instances, l_fn).call(this, r, n);
}, l_fn = async function(t, r) {
  if (!t.transactionManager.enabled) return r(t);
  let n = t.transactionManager.manager, i = await n.startInternalTransaction(), o = await n.getTransaction(i, "query");
  try {
    let s = await r({ ...t, queryable: o, transactionManager: { enabled: false } });
    return await n.commitTransaction(i.id), s;
  } catch (s) {
    try {
      await n.rollbackTransaction(i.id);
    } catch (a) {
      qd("failed to roll back an internal transaction", a);
    }
    throw s;
  }
}, p_fn = function() {
  var _a5;
  return ((_a5 = __privateGet(this, _a3)) == null ? void 0 : _a5.maxBindValues) !== void 0 ? __privateGet(this, _a3).maxBindValues : __privateMethod(this, _e8_instances, c_fn).call(this);
}, c_fn = function() {
  if (__privateGet(this, _s2) !== void 0) switch (__privateGet(this, _s2)) {
    case "cockroachdb":
    case "postgres":
    case "postgresql":
    case "prisma+postgres":
      return 32766;
    case "mysql":
      return 65535;
    case "sqlite":
      return 999;
    case "sqlserver":
      return 2098;
    case "mongodb":
      return;
    default:
      V(__privateGet(this, _s2), `Unexpected provider: ${__privateGet(this, _s2)}`);
  }
}, d_fn = function(t, r, n) {
  return Wr({ query: t, execute: n, provider: __privateGet(this, _s2) ?? r.provider, tracingHelper: __privateGet(this, _r2), onQuery: __privateGet(this, _e5) });
}, _h);
function Fi(e11) {
  return Array.isArray(e11) ? e11.length === 0 : e11 == null;
}
function Ct(e11) {
  return Array.isArray(e11) ? e11 : [e11];
}
function xe(e11) {
  if (typeof e11 == "number") return e11;
  if (typeof e11 == "string") return Number(e11);
  throw new Error(`Expected number, got ${typeof e11}`);
}
function rt(e11) {
  if (typeof e11 == "object" && e11 !== null) return e11;
  throw new Error(`Expected object, got ${typeof e11}`);
}
function _i(e11, t) {
  return Array.isArray(e11) ? e11.map((r) => _i(r, t)) : typeof e11 == "object" && e11 !== null ? e11[t] ?? null : e11;
}
function Va(e11, t, r) {
  for (let { joinExpr: n, childRecords: i } of t) {
    let o = n.on.map(([P2]) => P2), s = n.on.map(([, P2]) => P2), a = {}, u = Array.isArray(e11) ? e11 : [e11];
    for (let P2 of u) {
      let T = rt(P2), S = tt(T, o);
      a[S] || (a[S] = []), a[S].push(T), n.isRelationUnique ? T[n.parentField] = null : T[n.parentField] = [];
    }
    let m = r ? void 0 : Ud(u, o);
    for (let P2 of Array.isArray(i) ? i : [i]) {
      if (P2 === null) continue;
      let T = tt(rt(P2), s, m);
      for (let S of a[T] ?? []) n.isRelationUnique ? S[n.parentField] = P2 : S[n.parentField].push(P2);
    }
  }
  return e11;
}
function Ud(e11, t) {
  function r(o) {
    switch (o) {
      case "number":
        return Number;
      case "string":
        return String;
      case "boolean":
        return Boolean;
      case "bigint":
        return BigInt;
      default:
        return;
    }
  }
  let n = Array.from({ length: t.length }), i = 0;
  for (let o of e11) {
    let s = rt(o);
    for (let [a, u] of t.entries()) if (s[u] !== null && n[a] === void 0) {
      let m = r(typeof s[u]);
      m !== void 0 && (n[a] = m), i++;
    }
    if (i === t.length) break;
  }
  return n;
}
function qa(e11, t, r, n) {
  switch (e11.type) {
    case "value":
      return de(e11.value, r, n);
    case "lastInsertId":
      return t;
    default:
      V(e11, `Unexpected field initializer type: ${e11.type}`);
  }
}
function Ua(e11, t, r, n) {
  switch (e11.type) {
    case "set":
      return de(e11.value, r, n);
    case "add":
      return xe(t) + xe(de(e11.value, r, n));
    case "subtract":
      return xe(t) - xe(de(e11.value, r, n));
    case "multiply":
      return xe(t) * xe(de(e11.value, r, n));
    case "divide": {
      let i = xe(t), o = xe(de(e11.value, r, n));
      return o === 0 ? null : i / o;
    }
    default:
      V(e11, `Unexpected field operation type: ${e11.type}`);
  }
}
function jd(e11, t) {
  let r = pr(e11);
  if (r) return t(r).then((n) => {
    let i = { type: "value", args: n.value, lastInsertId: n.lastInsertId }, o = cr(e11, r, i);
    if (!o) throw new Error("Could not substitute the evaluated impure node into the query plan");
    return o;
  });
}
function cr(e11, t, r) {
  if (e11 === t) return r;
  switch (e11.type) {
    case "seq":
    case "sum":
    case "concat": {
      for (let n = 0; n < e11.args.length; n++) {
        let i = cr(e11.args[n], t, r);
        if (i) return { ...e11, args: e11.args.map((o, s) => s === n ? i : o) };
      }
      return;
    }
    case "dataMap":
    case "validate":
    case "initializeRecord":
    case "mapRecord":
    case "process": {
      let n = cr(e11.args.expr, t, r);
      return n && { ...e11, args: { ...e11.args, expr: n } };
    }
    case "mapField": {
      let n = cr(e11.args.records, t, r);
      return n && { ...e11, args: { ...e11.args, records: n } };
    }
    case "reverse":
    case "unique":
    case "required": {
      let n = cr(e11.args, t, r);
      return n && { ...e11, args: n };
    }
    default:
      return;
  }
}
function pr(e11) {
  switch (e11.type) {
    case "query":
    case "execute":
      return e11;
    case "seq":
    case "sum":
    case "concat": {
      let t;
      for (let r of e11.args) {
        let n = pr(r);
        if (n === null) return null;
        if (n) {
          if (t) return null;
          t = n;
        }
      }
      return t;
    }
    case "dataMap":
    case "validate":
    case "initializeRecord":
    case "mapRecord":
    case "process":
      return pr(e11.args.expr);
    case "mapField":
      return pr(e11.args.records);
    case "reverse":
    case "unique":
    case "required":
      return pr(e11.args);
    case "let":
    case "join":
    case "diff":
    case "if":
    case "transaction":
      return null;
    case "value":
    case "get":
    case "getFirstNonEmpty":
    case "unit":
      return;
    default:
      V(e11, `Unexpected node type: ${e11.type}`);
  }
}
function ja(e11, t) {
  if (!t || t.plugins.length === 0) return e11;
  let r = Ys(t.plugins, { query: t.queryInfo, sql: e11.sql });
  return r ? { ...e11, sql: ea(e11.sql, r) } : e11;
}
function $i(e11, t, r) {
  var _a5;
  let n = (_a5 = e11.pagination) == null ? void 0 : _a5.cursor;
  if (n) for (let [i, o] of Object.entries(n)) n[i] = de(o, t, r);
  for (let i of Object.values(e11.nested)) $i(i, t, r);
}
function sn(e11) {
  return ge(e11);
}
function Ba(e11) {
  return new Li(e11).deserialize();
}
function Bd(e11) {
  return Buffer.from(e11, "base64url");
}
var Li = (_i3 = class {
  constructor(t) {
    __privateAdd(this, _Li_instances);
    __privateAdd(this, _e6);
    __privateAdd(this, _t3);
    __privateAdd(this, _r3, 0);
    __privateSet(this, _e6, t);
    let r = Bd(t.graph);
    __privateSet(this, _t3, new DataView(r.buffer, r.byteOffset, r.byteLength));
  }
  deserialize() {
    let { inputNodeCount: t, outputNodeCount: r, rootCount: n } = __privateMethod(this, _Li_instances, n_fn2).call(this), i = __privateMethod(this, _Li_instances, u_fn2).call(this, t), o = __privateMethod(this, _Li_instances, l_fn2).call(this, r), s = __privateMethod(this, _Li_instances, p_fn2).call(this, n);
    return { strings: __privateGet(this, _e6).strings, inputNodes: i, outputNodes: o, roots: s };
  }
}, _e6 = new WeakMap(), _t3 = new WeakMap(), _r3 = new WeakMap(), _Li_instances = new WeakSet(), i_fn = function() {
  let t = 0, r = 0, n;
  do
    n = __privateGet(this, _t3).getUint8(__privateWrapper(this, _r3)._++), t |= (n & 127) << r, r += 7;
  while (n >= 128);
  return t;
}, o_fn = function() {
  let t = __privateMethod(this, _Li_instances, i_fn).call(this);
  return t === 0 ? void 0 : t - 1;
}, s_fn = function() {
  let t = __privateGet(this, _t3).getUint8(__privateGet(this, _r3));
  return __privateSet(this, _r3, __privateGet(this, _r3) + 1), t;
}, a_fn = function() {
  let t = __privateGet(this, _t3).getUint16(__privateGet(this, _r3), true);
  return __privateSet(this, _r3, __privateGet(this, _r3) + 2), t;
}, n_fn2 = function() {
  let t = __privateMethod(this, _Li_instances, i_fn).call(this), r = __privateMethod(this, _Li_instances, i_fn).call(this), n = __privateMethod(this, _Li_instances, i_fn).call(this);
  return { inputNodeCount: t, outputNodeCount: r, rootCount: n };
}, u_fn2 = function(t) {
  let r = [];
  for (let n = 0; n < t; n++) {
    let i = __privateMethod(this, _Li_instances, i_fn).call(this), o = {};
    for (let s = 0; s < i; s++) {
      let a = __privateMethod(this, _Li_instances, i_fn).call(this), u = __privateMethod(this, _Li_instances, a_fn).call(this), m = __privateMethod(this, _Li_instances, o_fn).call(this), P2 = __privateMethod(this, _Li_instances, o_fn).call(this), S = { flags: __privateMethod(this, _Li_instances, s_fn).call(this) };
      u !== 0 && (S.scalarMask = u), m !== void 0 && (S.childNodeId = m), P2 !== void 0 && (S.enumNameIndex = P2), o[a] = S;
    }
    r.push({ edges: o });
  }
  return r;
}, l_fn2 = function(t) {
  let r = [];
  for (let n = 0; n < t; n++) {
    let i = __privateMethod(this, _Li_instances, i_fn).call(this), o = {};
    for (let s = 0; s < i; s++) {
      let a = __privateMethod(this, _Li_instances, i_fn).call(this), u = __privateMethod(this, _Li_instances, o_fn).call(this), m = __privateMethod(this, _Li_instances, o_fn).call(this), P2 = {};
      u !== void 0 && (P2.argsNodeId = u), m !== void 0 && (P2.outputNodeId = m), o[a] = P2;
    }
    r.push({ edges: o });
  }
  return r;
}, p_fn2 = function(t) {
  let r = {};
  for (let n = 0; n < t; n++) {
    let i = __privateMethod(this, _Li_instances, i_fn).call(this), o = __privateMethod(this, _Li_instances, o_fn).call(this), s = __privateMethod(this, _Li_instances, o_fn).call(this), a = __privateGet(this, _e6).strings[i], u = {};
    o !== void 0 && (u.argsNodeId = o), s !== void 0 && (u.outputNodeId = s), r[a] = u;
  }
  return r;
}, _i3);
var mr = (_j = class {
  constructor(t, r) {
    __privateAdd(this, _e7);
    __privateAdd(this, _t4);
    __privateAdd(this, _r4);
    __privateSet(this, _e7, t), __privateSet(this, _r4, r), __privateSet(this, _t4, /* @__PURE__ */ new Map());
    for (let n = 0; n < t.strings.length; n++) __privateGet(this, _t4).set(t.strings[n], n);
  }
  static deserialize(t, r) {
    let n = Ba(t);
    return new _j(n, r);
  }
  static fromData(t, r) {
    return new _j(t, r);
  }
  root(t) {
    let r = __privateGet(this, _e7).roots[t];
    if (r) return { argsNodeId: r.argsNodeId, outputNodeId: r.outputNodeId };
  }
  inputNode(t) {
    if (!(t === void 0 || t < 0 || t >= __privateGet(this, _e7).inputNodes.length)) return { id: t };
  }
  outputNode(t) {
    if (!(t === void 0 || t < 0 || t >= __privateGet(this, _e7).outputNodes.length)) return { id: t };
  }
  inputEdge(t, r) {
    if (!t) return;
    let n = __privateGet(this, _e7).inputNodes[t.id];
    if (!n) return;
    let i = __privateGet(this, _t4).get(r);
    if (i === void 0) return;
    let o = n.edges[i];
    if (o) return { flags: o.flags, childNodeId: o.childNodeId, scalarMask: o.scalarMask ?? 0, enumNameIndex: o.enumNameIndex };
  }
  outputEdge(t, r) {
    if (!t) return;
    let n = __privateGet(this, _e7).outputNodes[t.id];
    if (!n) return;
    let i = __privateGet(this, _t4).get(r);
    if (i === void 0) return;
    let o = n.edges[i];
    if (o) return { argsNodeId: o.argsNodeId, outputNodeId: o.outputNodeId };
  }
  enumValues(t) {
    if ((t == null ? void 0 : t.enumNameIndex) === void 0) return;
    let r = __privateGet(this, _e7).strings[t.enumNameIndex];
    if (r) return __privateGet(this, _r4).call(this, r);
  }
  getString(t) {
    return __privateGet(this, _e7).strings[t];
  }
}, _e7 = new WeakMap(), _t4 = new WeakMap(), _r4 = new WeakMap(), _j), Ne = { ParamScalar: 1, ParamEnum: 2, ParamListScalar: 4, ListObject: 16, Object: 32 }, re = { String: 1, Int: 2, BigInt: 4, Float: 8, Decimal: 16, Boolean: 32, DateTime: 64, Json: 128, Bytes: 256 };
function De(e11, t) {
  return (e11.flags & t) !== 0;
}
function Ge(e11) {
  return e11.scalarMask;
}
var Qd = /* @__PURE__ */ new Set(["DateTime", "Decimal", "BigInt", "Bytes", "Json", "Raw"]);
function an(e11) {
  if (e11 == null) return { kind: "null" };
  if (typeof e11 == "string") return { kind: "primitive", value: e11 };
  if (typeof e11 == "number") return { kind: "primitive", value: e11 };
  if (typeof e11 == "boolean") return { kind: "primitive", value: e11 };
  if (Array.isArray(e11)) return { kind: "array", items: e11 };
  if (typeof e11 == "object") {
    let t = e11;
    if ("$type" in t && typeof t.$type == "string") {
      let r = t.$type;
      return Qd.has(r) ? { kind: "taggedScalar", tag: r, value: t.value } : { kind: "structural", value: t.value };
    }
    return { kind: "object", entries: t };
  }
  return { kind: "structural", value: e11 };
}
function Qa(e11) {
  return typeof e11 == "object" && e11 !== null && !Array.isArray(e11) && !("$type" in e11);
}
function Ja(e11) {
  return typeof e11 == "object" && e11 !== null && "$type" in e11 && typeof e11.$type == "string";
}
function Vi(e11, t) {
  let r = new ln(t), n = e11.modelName ? `${e11.modelName}.${e11.action}` : e11.action, i = t.root(n);
  return { parameterizedQuery: { ...e11, query: r.parameterizeFieldSelection(e11.query, i == null ? void 0 : i.argsNodeId, i == null ? void 0 : i.outputNodeId) }, placeholderValues: r.getPlaceholderValues() };
}
function qi(e11, t) {
  let r = new ln(t), n = [];
  for (let i = 0; i < e11.batch.length; i++) {
    let o = e11.batch[i], s = o.modelName ? `${o.modelName}.${o.action}` : o.action, a = t.root(s);
    n.push({ ...o, query: r.parameterizeFieldSelection(o.query, a == null ? void 0 : a.argsNodeId, a == null ? void 0 : a.outputNodeId) });
  }
  return { parameterizedBatch: { ...e11, batch: n }, placeholderValues: r.getPlaceholderValues() };
}
var ln = (_k = class {
  constructor(t) {
    __privateAdd(this, _ln_instances);
    __privateAdd(this, _e8);
    __privateAdd(this, _t5, /* @__PURE__ */ new Map());
    __privateAdd(this, _r5, /* @__PURE__ */ new Map());
    __privateAdd(this, _i4, 1);
    __privateSet(this, _e8, t);
  }
  getPlaceholderValues() {
    return Object.fromEntries(__privateGet(this, _t5));
  }
  parameterizeFieldSelection(t, r, n) {
    let i = __privateGet(this, _e8).inputNode(r), o = __privateGet(this, _e8).outputNode(n), s = { ...t };
    return t.arguments && t.arguments.$type !== "Raw" && (s.arguments = __privateMethod(this, _ln_instances, s_fn2).call(this, t.arguments, i)), t.selection && (s.selection = __privateMethod(this, _ln_instances, c_fn2).call(this, t.selection, o)), s;
  }
}, _e8 = new WeakMap(), _t5 = new WeakMap(), _r5 = new WeakMap(), _i4 = new WeakMap(), _ln_instances = new WeakSet(), o_fn2 = function(t, r) {
  let n = Gd(t, r), i = __privateGet(this, _r5).get(n);
  if (i !== void 0) return Ga(i, r);
  let o = `%${__privateWrapper(this, _i4)._++}`;
  return __privateGet(this, _r5).set(n, o), __privateGet(this, _t5).set(o, t), Ga(o, r);
}, s_fn2 = function(t, r) {
  if (!r) return t;
  let n = {};
  for (let [i, o] of Object.entries(t)) {
    let s = __privateGet(this, _e8).inputEdge(r, i);
    s ? n[i] = __privateMethod(this, _ln_instances, a_fn2).call(this, o, s) : n[i] = o;
  }
  return n;
}, a_fn2 = function(t, r) {
  let n = an(t);
  switch (n.kind) {
    case "null":
      return t;
    case "structural":
      return t;
    case "primitive":
      return __privateMethod(this, _ln_instances, n_fn3).call(this, n.value, r);
    case "taggedScalar":
      return __privateMethod(this, _ln_instances, u_fn3).call(this, t, n.tag, r);
    case "array":
      return __privateMethod(this, _ln_instances, l_fn3).call(this, n.items, t, r);
    case "object":
      return __privateMethod(this, _ln_instances, p_fn3).call(this, n.entries, r);
    default:
      throw new Error(`Unknown value kind ${n.kind}`);
  }
}, n_fn3 = function(t, r) {
  if (De(r, Ne.ParamEnum) && r.enumNameIndex !== void 0 && typeof t == "string") {
    let o = __privateGet(this, _e8).enumValues(r);
    if (o && Object.hasOwn(o, t)) {
      let s = { type: "Enum" };
      return __privateMethod(this, _ln_instances, o_fn2).call(this, o[t], s);
    }
  }
  if (!De(r, Ne.ParamScalar)) return t;
  let n = Ge(r);
  if (n === 0) return t;
  let i = Ui(t);
  return Ha(i, n) ? (n & re.Json && (t = JSON.stringify(t)), __privateMethod(this, _ln_instances, o_fn2).call(this, t, i)) : t;
}, u_fn3 = function(t, r, n) {
  if (!De(n, Ne.ParamScalar)) return t;
  let i = Ge(n);
  if (i === 0 || !Ka(r, i)) return t;
  let o = Wa(t.$type), s = Za(t);
  return __privateMethod(this, _ln_instances, o_fn2).call(this, s, o);
}, l_fn3 = function(t, r, n) {
  if (De(n, Ne.ParamScalar) && Ge(n) & re.Json) {
    let i = Se(Ae(t)), o = { type: "Json" };
    return __privateMethod(this, _ln_instances, o_fn2).call(this, i, o);
  }
  if (De(n, Ne.ParamEnum)) {
    let i = __privateGet(this, _e8).enumValues(n);
    if (i && t.every((o) => typeof o == "string" && Object.hasOwn(i, o))) {
      let o = { type: "List", inner: { type: "Enum" } };
      return __privateMethod(this, _ln_instances, o_fn2).call(this, t, o);
    }
  }
  if (De(n, Ne.ParamListScalar) && t.every((o) => Zd(o, n)) && t.length > 0) {
    let o = t.map((u) => Xd(u)), a = { type: "List", inner: Wd(t) };
    return __privateMethod(this, _ln_instances, o_fn2).call(this, o, a);
  }
  if (De(n, Ne.ListObject)) {
    let i = __privateGet(this, _e8).inputNode(n.childNodeId);
    if (i) return t.map((o) => Qa(o) ? __privateMethod(this, _ln_instances, s_fn2).call(this, o, i) : o);
  }
  return r;
}, p_fn3 = function(t, r) {
  if (De(r, Ne.Object)) {
    let i = __privateGet(this, _e8).inputNode(r.childNodeId);
    if (i) return __privateMethod(this, _ln_instances, s_fn2).call(this, t, i);
  }
  if (Ge(r) & re.Json) {
    let i = Se(Ae(t)), o = { type: "Json" };
    return __privateMethod(this, _ln_instances, o_fn2).call(this, i, o);
  }
  return t;
}, c_fn2 = function(t, r) {
  if (!t || !r) return t;
  let n = {};
  for (let [i, o] of Object.entries(t)) {
    if (i === "$scalars" || i === "$composites" || typeof o == "boolean") {
      n[i] = o;
      continue;
    }
    let s = __privateGet(this, _e8).outputEdge(r, i);
    if (s) {
      let a = o, u = __privateGet(this, _e8).inputNode(s.argsNodeId), m = __privateGet(this, _e8).outputNode(s.outputNodeId), P2 = { selection: a.selection ? __privateMethod(this, _ln_instances, c_fn2).call(this, a.selection, m) : {} };
      a.arguments && (P2.arguments = __privateMethod(this, _ln_instances, s_fn2).call(this, a.arguments, u)), n[i] = P2;
    } else n[i] = o;
  }
  return n;
}, _k);
function Ga(e11, t) {
  return { $type: "Param", value: { name: e11, ...t } };
}
function za(e11) {
  return e11.type === "List" ? `List<${za(e11.inner)}>` : e11.type;
}
function Jd(e11) {
  return ArrayBuffer.isView(e11) ? Buffer.from(e11.buffer, e11.byteOffset, e11.byteLength).toString("base64") : JSON.stringify(e11);
}
function Gd(e11, t) {
  let r = za(t), n = Jd(e11);
  return `${r}:${n}`;
}
var zd = 2 ** 31 - 1, Hd = -2147483648;
function Ui(e11) {
  switch (typeof e11) {
    case "boolean":
      return { type: "Boolean" };
    case "number":
      return Number.isInteger(e11) ? Hd <= e11 && e11 <= zd ? { type: "Int" } : { type: "BigInt" } : { type: "Float" };
    case "string":
      return { type: "String" };
    default:
      throw new Error("unreachable");
  }
}
function Ha({ type: e11 }, t) {
  switch (e11) {
    case "Boolean":
      return (t & re.Boolean) !== 0;
    case "Int":
      return (t & (re.Int | re.BigInt | re.Float)) !== 0;
    case "BigInt":
      return (t & re.BigInt) !== 0;
    case "Float":
      return (t & re.Float) !== 0;
    case "String":
      return (t & re.String) !== 0;
    default:
      return false;
  }
}
function Wa(e11) {
  switch (e11) {
    case "BigInt":
    case "Bytes":
    case "DateTime":
    case "Json":
      return { type: e11 };
    case "Decimal":
      return { type: "Float" };
    default:
      return;
  }
}
function Wd(e11) {
  let t = { type: "Any" };
  for (let r of e11) {
    let n = an(r), i;
    switch (n.kind) {
      case "primitive":
        i = Ui(n.value);
        break;
      case "taggedScalar":
        i = Wa(n.tag) ?? { type: "Any" };
        break;
      default:
        return { type: "Any" };
    }
    t = Kd(t, i);
  }
  return t;
}
function Kd(e11, t) {
  if (e11.type === "Any") return t;
  if (t.type === "Any" || e11.type === t.type) return e11;
  let r = { Int: 0, BigInt: 1, Float: 2 }, n = r[e11.type], i = r[t.type];
  return n !== void 0 && i !== void 0 ? n >= i ? e11 : t : { type: "Any" };
}
function Ka(e11, t) {
  switch (e11) {
    case "DateTime":
      return (t & re.DateTime) !== 0;
    case "Decimal":
      return (t & re.Decimal) !== 0;
    case "BigInt":
      return (t & re.BigInt) !== 0;
    case "Bytes":
      return (t & re.Bytes) !== 0;
    case "Json":
      return (t & re.Json) !== 0;
    default:
      return false;
  }
}
function Zd(e11, t) {
  let r = an(e11);
  switch (r.kind) {
    case "structural":
      return false;
    case "null":
      return false;
    case "primitive": {
      let n = Ui(r.value), i = Ge(t);
      return i !== 0 && Ha(n, i);
    }
    case "taggedScalar": {
      let n = Ge(t);
      return n !== 0 && Ka(r.tag, n);
    }
    default:
      return false;
  }
}
function Xd(e11) {
  return Ja(e11) ? Za(e11) : e11;
}
function Za(e11) {
  return e11.value;
}
async function Yd() {
  return globalThis.crypto ?? await import("node:crypto");
}
async function Xa() {
  return (await Yd()).randomUUID();
}
async function Ya(e11, t) {
  return new Promise((r) => {
    e11.addEventListener(t, r, { once: true });
  });
}
var ue = class extends X {
  constructor(t, r) {
    super("Transaction API error: " + t, "P2028", r);
    __publicField(this, "name", "TransactionManagerError");
  }
}, nt = class extends ue {
  constructor() {
    super("Transaction not found. Transaction ID is invalid, refers to an old closed transaction Prisma doesn't have information about anymore, or was obtained before disconnecting.");
  }
}, un = class extends ue {
  constructor(t) {
    super(`Transaction already closed: A ${t} cannot be executed on a committed transaction.`);
  }
}, cn = class extends ue {
  constructor(t) {
    super(`Transaction already closed: A ${t} cannot be executed on a transaction that was rolled back.`);
  }
}, fr = class extends ue {
  constructor() {
    super("Unable to start a transaction in the given time.");
  }
}, pn = class extends ue {
  constructor(t, { timeout: r, timeTaken: n }) {
    super(`A ${t} cannot be executed on an expired transaction. The timeout for this transaction was ${r} ms, however ${n} ms passed since the start of the transaction. Consider increasing the interactive transaction timeout or doing less work in the transaction.`, { operation: t, timeout: r, timeTaken: n });
  }
}, Me = class extends ue {
  constructor(t) {
    super(`Internal Consistency Error: ${t}`);
  }
}, dn = class extends ue {
  constructor(t) {
    super(`Invalid isolation level: ${t}`, { isolationLevel: t });
  }
};
var em = 100, tm = 2e3;
function rm() {
  let e11, t = new Promise((r) => {
    e11 = r;
  });
  return { abortController: new AbortController(), settled: t, markSettled: e11 };
}
var it = K("prisma:client:transactionManager"), nm = () => ({ sql: "COMMIT", args: [], argTypes: [] }), el = () => ({ sql: "ROLLBACK", args: [], argTypes: [] }), im = () => ({ sql: '-- Implicit "COMMIT" query via underlying driver', args: [], argTypes: [] }), om = () => ({ sql: '-- Implicit "ROLLBACK" query via underlying driver', args: [], argTypes: [] }), gr = (_l2 = class {
  constructor({ driverAdapter: t, transactionOptions: r, tracingHelper: n, onQuery: i, provider: o }) {
    __privateAdd(this, _gr_instances);
    __publicField(this, "transactions", /* @__PURE__ */ new Map());
    __publicField(this, "closedTransactions", []);
    __privateAdd(this, _e9, /* @__PURE__ */ new Set());
    __publicField(this, "driverAdapter");
    __publicField(this, "transactionOptions");
    __publicField(this, "tracingHelper");
    __privateAdd(this, _t6);
    __privateAdd(this, _r6);
    this.driverAdapter = t, this.transactionOptions = r, this.tracingHelper = n, __privateSet(this, _t6, i), __privateSet(this, _r6, o);
  }
  async startInternalTransaction(t) {
    let r = t !== void 0 ? __privateMethod(this, _gr_instances, y_fn).call(this, t) : {};
    return await this.tracingHelper.runInChildSpan("start_transaction", () => __privateMethod(this, _gr_instances, i_fn2).call(this, r));
  }
  async startTransaction(t) {
    let r = t !== void 0 ? __privateMethod(this, _gr_instances, y_fn).call(this, t) : this.transactionOptions;
    return await this.tracingHelper.runInChildSpan("start_transaction", () => __privateMethod(this, _gr_instances, i_fn2).call(this, r));
  }
  async commitTransaction(t) {
    return await this.tracingHelper.runInChildSpan("commit_transaction", async () => {
      await __privateMethod(this, _gr_instances, d_fn2).call(this, t, "commit", async (r) => {
        if (r.depth > 1) {
          if (!r.transaction) throw new nt();
          let n = r.savepoints.at(-1);
          if (!n) throw new Me(`Missing savepoint for nested commit. Depth: ${r.depth}, transactionId: ${r.id}`);
          try {
            await __privateMethod(this, _gr_instances, l_fn4).call(this, r.transaction, n);
          } finally {
            r.savepoints.pop(), r.depth -= 1;
          }
          return;
        }
        await __privateMethod(this, _gr_instances, f_fn).call(this, r, "committed");
      });
    });
  }
  async rollbackTransaction(t) {
    return await this.tracingHelper.runInChildSpan("rollback_transaction", async () => {
      await __privateMethod(this, _gr_instances, d_fn2).call(this, t, "rollback", async (r) => {
        if (r.depth > 1) {
          if (!r.transaction) throw new nt();
          let n = r.savepoints.at(-1);
          if (!n) throw new Me(`Missing savepoint for nested rollback. Depth: ${r.depth}, transactionId: ${r.id}`);
          try {
            await __privateMethod(this, _gr_instances, u_fn4).call(this, r.transaction)(n), await __privateMethod(this, _gr_instances, l_fn4).call(this, r.transaction, n);
          } finally {
            r.savepoints.pop(), r.depth -= 1;
          }
          return;
        }
        await __privateMethod(this, _gr_instances, f_fn).call(this, r, "rolled_back");
      });
    });
  }
  async getTransaction(t, r) {
    let n = __privateMethod(this, _gr_instances, s_fn3).call(this, t.id, r);
    if (n.status === "closing" && (await n.closing, n = __privateMethod(this, _gr_instances, s_fn3).call(this, t.id, r)), !n.transaction) throw new nt();
    return n.transaction;
  }
  async cancelAllTransactions() {
    let t = [...__privateGet(this, _e9)];
    for (let { abortController: r } of t) r.abort();
    await Promise.allSettled([...[...this.transactions.values()].map((r) => __privateMethod(this, _gr_instances, m_fn).call(this, r, async () => {
      let n = this.transactions.get(r.id);
      n && await __privateMethod(this, _gr_instances, f_fn).call(this, n, "rolled_back");
    })), ...t.map(({ settled: r }) => sm(r, tm))]);
  }
}, _e9 = new WeakMap(), _t6 = new WeakMap(), _r6 = new WeakMap(), _gr_instances = new WeakSet(), i_fn2 = async function(t) {
  var _a5;
  if (t.newTxId) return await __privateMethod(this, _gr_instances, d_fn2).call(this, t.newTxId, "start", async (o) => {
    if (o.status !== "running") throw new Me(`Transaction in invalid state ${o.status} when starting a nested transaction.`);
    if (!o.transaction) throw new Me("Transaction missing underlying driver transaction when starting a nested transaction.");
    o.depth += 1;
    let s = __privateMethod(this, _gr_instances, a_fn3).call(this, o);
    o.savepoints.push(s);
    try {
      await __privateMethod(this, _gr_instances, n_fn4).call(this, o.transaction)(s);
    } catch (a) {
      throw o.depth -= 1, o.savepoints.pop(), a;
    }
    return { id: o.id };
  });
  let r = rm(), { abortController: n } = r;
  __privateGet(this, _e9).add(r);
  let i;
  try {
    let o = { id: await Xa(), status: "waiting", timer: void 0, timeout: t.timeout, startedAt: Date.now(), transaction: void 0, operationQueue: Promise.resolve(), depth: 1, savepoints: [], savepointCounter: 0 };
    if (n.signal.aborted) throw new fr();
    let s = tl(() => n.abort(), t.maxWait);
    (_a5 = s == null ? void 0 : s.unref) == null ? void 0 : _a5.call(s);
    let a = this.driverAdapter.startTransaction(t.isolationLevel).catch(Be);
    switch (o.transaction = await Promise.race([a.finally(() => clearTimeout(s)), Ya(n.signal, "abort").then(() => {
    })]), this.transactions.set(o.id, o), o.status) {
      case "waiting":
        if (n.signal.aborted) throw o.transaction = void 0, i = __privateMethod(this, _gr_instances, o_fn3).call(this, a), await __privateMethod(this, _gr_instances, f_fn).call(this, o, "timed_out"), new fr();
        return o.status = "running", o.startedAt = Date.now(), o.timer = __privateMethod(this, _gr_instances, c_fn3).call(this, o.id, t.timeout), { id: o.id };
      case "timed_out":
      case "running":
      case "committed":
      case "rolled_back":
        throw new Me(`Transaction in invalid state ${o.status} although it just finished startup.`);
      default:
        return V(o.status, "Unknown transaction status.");
    }
  } finally {
    __privateGet(this, _e9).delete(r), i ? i.finally(r.markSettled) : r.markSettled();
  }
}, o_fn3 = async function(t) {
  try {
    let r = await t;
    if (r.options.usePhantomQuery) await r.rollback();
    else try {
      await r.executeRaw(el());
    } finally {
      await r.rollback();
    }
  } catch (r) {
    it("error in discarded transaction:", r);
  }
}, s_fn3 = function(t, r) {
  let n = this.transactions.get(t);
  if (!n) {
    let i = this.closedTransactions.find((o) => o.id === t);
    if (i) switch (it("Transaction already closed.", { transactionId: t, status: i.status }), i.status) {
      case "closing":
      case "waiting":
      case "running":
        throw new Me("Active transaction found in closed transactions list.");
      case "committed":
        throw new un(r);
      case "rolled_back":
        throw new cn(r);
      case "timed_out":
        throw new pn(r, { timeout: i.timeout, timeTaken: Date.now() - i.startedAt });
    }
    else throw it("Transaction not found.", t), new nt();
  }
  if (["committed", "rolled_back", "timed_out"].includes(n.status)) throw new Me("Closed transaction found in active transactions map.");
  return n;
}, a_fn3 = function(t) {
  return `prisma_sp_${t.savepointCounter++}`;
}, n_fn4 = function(t) {
  if (t.createSavepoint) return t.createSavepoint.bind(t);
  throw new ue(`Nested transactions are not supported by adapter "${t.adapterName}" (${t.provider}): createSavepoint is not implemented.`);
}, u_fn4 = function(t) {
  if (t.rollbackToSavepoint) return t.rollbackToSavepoint.bind(t);
  throw new ue(`Nested transactions are not supported by adapter "${t.adapterName}" (${t.provider}): rollbackToSavepoint is not implemented.`);
}, l_fn4 = async function(t, r) {
  t.releaseSavepoint && await t.releaseSavepoint(r);
}, p_fn4 = function(t) {
  it("Transaction already committed or rolled back when timeout happened.", t);
}, c_fn3 = function(t, r) {
  var _a5;
  let n = Date.now(), i = tl(async () => {
    try {
      it("Transaction timed out.", { transactionId: t, timeoutStartedAt: n, timeout: r });
      let o = this.transactions.get(t);
      if (!o) {
        __privateMethod(this, _gr_instances, p_fn4).call(this, t);
        return;
      }
      await __privateMethod(this, _gr_instances, m_fn).call(this, o, async () => {
        let s = this.transactions.get(t);
        s && ["running", "waiting"].includes(s.status) ? await __privateMethod(this, _gr_instances, f_fn).call(this, s, "timed_out") : __privateMethod(this, _gr_instances, p_fn4).call(this, t);
      });
    } catch (o) {
      it("Error while closing timed-out transaction.", { transactionId: t, error: o });
    }
  }, r);
  return (_a5 = i == null ? void 0 : i.unref) == null ? void 0 : _a5.call(i), i;
}, d_fn2 = async function(t, r, n) {
  let i = __privateMethod(this, _gr_instances, s_fn3).call(this, t, r);
  return await __privateMethod(this, _gr_instances, m_fn).call(this, i, async () => {
    let o = __privateMethod(this, _gr_instances, s_fn3).call(this, t, r);
    return await n(o);
  });
}, m_fn = async function(t, r) {
  let n = t.operationQueue, i;
  t.operationQueue = new Promise((o) => {
    i = o;
  }), await n;
  try {
    return await r();
  } finally {
    i();
  }
}, f_fn = async function(t, r) {
  let n = async () => {
    it("Closing transaction.", { transactionId: t.id, status: r });
    try {
      if (t.transaction && r === "committed") if (t.transaction.options.usePhantomQuery) await __privateMethod(this, _gr_instances, g_fn).call(this, im(), t.transaction, () => t.transaction.commit());
      else {
        let i = nm();
        await __privateMethod(this, _gr_instances, g_fn).call(this, i, t.transaction, () => t.transaction.executeRaw(i)).then(() => t.transaction.commit(), (o) => {
          let s = () => Promise.reject(o);
          return t.transaction.rollback().then(s, s);
        });
      }
      else if (t.transaction) if (t.transaction.options.usePhantomQuery) await __privateMethod(this, _gr_instances, g_fn).call(this, om(), t.transaction, () => t.transaction.rollback());
      else {
        let i = el();
        try {
          await __privateMethod(this, _gr_instances, g_fn).call(this, i, t.transaction, () => t.transaction.executeRaw(i));
        } finally {
          await t.transaction.rollback();
        }
      }
    } finally {
      t.status = r, clearTimeout(t.timer), t.timer = void 0, this.transactions.delete(t.id), this.closedTransactions.push(t), this.closedTransactions.length > em && this.closedTransactions.shift();
    }
  };
  t.status === "closing" ? (await t.closing, __privateMethod(this, _gr_instances, s_fn3).call(this, t.id, r === "committed" ? "commit" : "rollback")) : await Object.assign(t, { status: "closing", reason: r, closing: n() }).closing;
}, y_fn = function(t) {
  if (!t.timeout) throw new ue("timeout is required");
  if (!t.maxWait) throw new ue("maxWait is required");
  if (t.isolationLevel === "SNAPSHOT") throw new dn(t.isolationLevel);
  return { ...t, timeout: t.timeout, maxWait: t.maxWait };
}, g_fn = function(t, r, n) {
  return Wr({ query: t, execute: n, provider: __privateGet(this, _r6) ?? r.provider, tracingHelper: this.tracingHelper, onQuery: __privateGet(this, _t6) });
}, _l2);
function tl(e11, t) {
  return t !== void 0 ? setTimeout(e11, t) : void 0;
}
function sm(e11, t) {
  let r, n = new Promise((i) => {
    var _a5;
    r = setTimeout(i, t), (_a5 = r == null ? void 0 : r.unref) == null ? void 0 : _a5.call(r);
  });
  return Promise.race([e11, n]).finally(() => clearTimeout(r));
}
var ne = dist;
var mn = "7.10.1";
var rl = { bigint: "bigint", date: "datetime", decimal: "decimal", bytes: "bytes" };
function il(e11) {
  let t;
  try {
    t = JSON.parse(e11);
  } catch (i) {
    throw new Error(`Received invalid serialized parameters: ${i.message}`);
  }
  if (!Array.isArray(t)) throw new Error("Received invalid serialized parameters: expected an array");
  let r = t.map((i) => ol(i)), n = t.map((i) => lm(i));
  return { args: r, argTypes: n };
}
function ol(e11) {
  if (Array.isArray(e11)) return e11.map((t) => ol(t));
  if (typeof e11 == "object" && e11 !== null && "prisma__value" in e11) {
    if (!("prisma__type" in e11)) throw new Error("Invalid serialized parameter, prisma__type should be present when prisma__value is present");
    return `${e11.prisma__value}`;
  }
  return typeof e11 == "object" && e11 !== null ? JSON.stringify(e11) : e11;
}
function lm(e11) {
  return Array.isArray(e11) ? { scalarType: e11.length > 0 ? nl(e11[0]) : "unknown", arity: "list" } : { scalarType: nl(e11), arity: "scalar" };
}
function nl(e11) {
  return typeof e11 == "object" && e11 !== null && "prisma__type" in e11 && typeof e11.prisma__type == "string" && e11.prisma__type in rl ? rl[e11.prisma__type] : typeof e11 == "number" ? "decimal" : typeof e11 == "string" ? "string" : "unknown";
}
function sl(e11, t) {
  return { batch: e11, transaction: (t == null ? void 0 : t.kind) === "batch" ? { isolationLevel: t.options.isolationLevel } : void 0 };
}
function al(e11) {
  return e11 ? e11.replace(/"(?:[^"\\]|\\.)*"/g, '"X"').replace(/[\s:\[]([+-]?([0-9]*[.])?[0-9]+)/g, (t) => `${t[0]}5`) : "";
}
function ll(e11) {
  return e11.split(`
`).map((t) => t.replace(/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)\s*/, "").replace(/\+\d+\s*ms$/, "")).join(`
`);
}
var ul = Pe(Ro());
function cl({ title: e11, user: t = "prisma", repo: r = "prisma", template: n = "bug_report.yml", body: i }) {
  return (0, ul.default)({ user: t, repo: r, template: n, title: e11, body: i });
}
function pl({ version: e11, binaryTarget: t, title: r, description: n, engineVersion: i, database: o, query: s }) {
  var _a5;
  let a = go(6e3 - ((s == null ? void 0 : s.length) ?? 0)), u = ll(ut(a)), m = n ? `# Description
\`\`\`
${n}
\`\`\`` : "", P2 = ut(`Hi Prisma Team! My Prisma Client just crashed. This is the report:
## Versions

| Name            | Version            |
|-----------------|--------------------|
| Node            | ${(_a5 = process.version) == null ? void 0 : _a5.padEnd(19)}| 
| OS              | ${t == null ? void 0 : t.padEnd(19)}|
| Prisma Client   | ${e11 == null ? void 0 : e11.padEnd(19)}|
| Query Engine    | ${i == null ? void 0 : i.padEnd(19)}|
| Database        | ${o == null ? void 0 : o.padEnd(19)}|

${m}

## Logs
\`\`\`
${u}
\`\`\`

## Client Snippet
\`\`\`ts
// PLEASE FILL YOUR CODE SNIPPET HERE
\`\`\`

## Schema
\`\`\`prisma
// PLEASE ADD YOUR SCHEMA HERE IF POSSIBLE
\`\`\`

## Prisma Engine Query
\`\`\`
${s ? al(s) : ""}
\`\`\`
`), T = cl({ title: r, body: P2 });
  return `${r}

This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

${Mt(T)}

If you want the Prisma team to look into it, please open the link above 🙏
To increase the chance of success, please post your schema and a snippet of
how you used Prisma Client in the issue. 
`;
}
var fn = (_m = class {
  constructor(t, r, n) {
    __privateAdd(this, _e10);
    __privateAdd(this, _t7);
    __privateAdd(this, _r7);
    __privateAdd(this, _i5);
    __privateAdd(this, _o3);
    var _a5;
    __privateSet(this, _e10, t), __privateSet(this, _t7, r), __privateSet(this, _r7, n), __privateSet(this, _i5, (_a5 = r.getConnectionInfo) == null ? void 0 : _a5.call(r)), __privateSet(this, _o3, dr.forSql({ onQuery: __privateGet(this, _e10).onQuery, tracingHelper: __privateGet(this, _e10).tracingHelper, provider: __privateGet(this, _e10).provider, connectionInfo: __privateGet(this, _i5) }));
  }
  static async connect(t) {
    let r, n;
    try {
      r = await t.driverAdapterFactory.connect(), n = new gr({ driverAdapter: r, transactionOptions: t.transactionOptions, tracingHelper: t.tracingHelper, onQuery: t.onQuery, provider: t.provider });
    } catch (i) {
      throw await (r == null ? void 0 : r.dispose()), i;
    }
    return new _m(t, r, n);
  }
  getConnectionInfo() {
    let t = __privateGet(this, _i5) ?? { supportsRelationJoins: false };
    return Promise.resolve({ provider: __privateGet(this, _t7).provider, connectionInfo: t });
  }
  async execute({ plan: t, placeholderValues: r, transaction: n, batchIndex: i, queryInfo: o }) {
    let s = n ? await __privateGet(this, _r7).getTransaction(n, i !== void 0 ? "batch query" : "query") : __privateGet(this, _t7);
    return await __privateGet(this, _o3).run(t, { queryable: s, transactionManager: n ? { enabled: false } : { enabled: true, manager: __privateGet(this, _r7) }, scope: r, sqlCommenter: __privateGet(this, _e10).sqlCommenters && { plugins: __privateGet(this, _e10).sqlCommenters, queryInfo: o } });
  }
  async startTransaction(t) {
    return { ...await __privateGet(this, _r7).startTransaction(t), payload: void 0 };
  }
  async commitTransaction(t) {
    await __privateGet(this, _r7).commitTransaction(t.id);
  }
  async rollbackTransaction(t) {
    await __privateGet(this, _r7).rollbackTransaction(t.id);
  }
  async disconnect() {
    try {
      await __privateGet(this, _r7).cancelAllTransactions();
    } finally {
      await __privateGet(this, _t7).dispose();
    }
  }
  apiKey() {
    return null;
  }
}, _e10 = new WeakMap(), _t7 = new WeakMap(), _r7 = new WeakMap(), _i5 = new WeakMap(), _o3 = new WeakMap(), _m);
var gn = (_n2 = class {
  constructor(t = 1e3) {
    __privateAdd(this, _e11);
    __privateAdd(this, _t8);
    __privateAdd(this, _r8);
    __privateSet(this, _e11, /* @__PURE__ */ new Map()), __privateSet(this, _t8, /* @__PURE__ */ new Map()), __privateSet(this, _r8, t);
  }
  getSingle(t) {
    let r = __privateGet(this, _e11).get(t);
    return r && (__privateGet(this, _e11).delete(t), __privateGet(this, _e11).set(t, r)), r;
  }
  setSingle(t, r) {
    if (__privateGet(this, _e11).has(t)) {
      __privateGet(this, _e11).delete(t), __privateGet(this, _e11).set(t, r);
      return;
    }
    if (__privateGet(this, _e11).size >= __privateGet(this, _r8)) {
      let n = __privateGet(this, _e11).keys().next().value;
      n !== void 0 && __privateGet(this, _e11).delete(n);
    }
    __privateGet(this, _e11).set(t, r);
  }
  getBatch(t) {
    let r = __privateGet(this, _t8).get(t);
    return r && (__privateGet(this, _t8).delete(t), __privateGet(this, _t8).set(t, r)), r;
  }
  setBatch(t, r) {
    if (__privateGet(this, _t8).has(t)) {
      __privateGet(this, _t8).delete(t), __privateGet(this, _t8).set(t, r);
      return;
    }
    if (__privateGet(this, _t8).size >= __privateGet(this, _r8)) {
      let n = __privateGet(this, _t8).keys().next().value;
      n !== void 0 && __privateGet(this, _t8).delete(n);
    }
    __privateGet(this, _t8).set(t, r);
  }
  clear() {
    __privateGet(this, _e11).clear(), __privateGet(this, _t8).clear();
  }
  get size() {
    return __privateGet(this, _e11).size + __privateGet(this, _t8).size;
  }
  get singleCacheSize() {
    return __privateGet(this, _e11).size;
  }
  get batchCacheSize() {
    return __privateGet(this, _t8).size;
  }
}, _e11 = new WeakMap(), _t8 = new WeakMap(), _r8 = new WeakMap(), _n2);
var hl = dist;
var yn = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
function dl(e11, t, r) {
  let n = {}, i = n.encode || encodeURIComponent;
  if (typeof i != "function") throw new TypeError("option encode is invalid");
  if (!yn.test(e11)) throw new TypeError("argument name is invalid");
  let o = i(t);
  if (o && !yn.test(o)) throw new TypeError("argument val is invalid");
  let s = e11 + "=" + o;
  if (n.maxAge !== void 0 && n.maxAge !== null) {
    let a = n.maxAge - 0;
    if (Number.isNaN(a) || !Number.isFinite(a)) throw new TypeError("option maxAge is invalid");
    s += "; Max-Age=" + Math.floor(a);
  }
  if (n.domain) {
    if (!yn.test(n.domain)) throw new TypeError("option domain is invalid");
    s += "; Domain=" + n.domain;
  }
  if (n.path) {
    if (!yn.test(n.path)) throw new TypeError("option path is invalid");
    s += "; Path=" + n.path;
  }
  if (n.expires) {
    if (!um(n.expires) || Number.isNaN(n.expires.valueOf())) throw new TypeError("option expires is invalid");
    s += "; Expires=" + n.expires.toUTCString();
  }
  if (n.httpOnly && (s += "; HttpOnly"), n.secure && (s += "; Secure"), n.priority) switch (typeof n.priority == "string" ? n.priority.toLowerCase() : n.priority) {
    case "low": {
      s += "; Priority=Low";
      break;
    }
    case "medium": {
      s += "; Priority=Medium";
      break;
    }
    case "high": {
      s += "; Priority=High";
      break;
    }
    default:
      throw new TypeError("option priority is invalid");
  }
  if (n.sameSite) switch (typeof n.sameSite == "string" ? n.sameSite.toLowerCase() : n.sameSite) {
    case true: {
      s += "; SameSite=Strict";
      break;
    }
    case "lax": {
      s += "; SameSite=Lax";
      break;
    }
    case "strict": {
      s += "; SameSite=Strict";
      break;
    }
    case "none": {
      s += "; SameSite=None";
      break;
    }
    default:
      throw new TypeError("option sameSite is invalid");
  }
  return n.partitioned && (s += "; Partitioned"), s;
}
function um(e11) {
  return Object.prototype.toString.call(e11) === "[object Date]" || e11 instanceof Date;
}
function ml(e11, t) {
  let r = (e11 || "").split(";").filter((u) => typeof u == "string" && !!u.trim()), n = r.shift() || "", i = cm(n), o = i.name, s = i.value;
  try {
    s = (t == null ? void 0 : t.decode) === false ? s : ((t == null ? void 0 : t.decode) || decodeURIComponent)(s);
  } catch {
  }
  let a = { name: o, value: s };
  for (let u of r) {
    let m = u.split("="), P2 = (m.shift() || "").trimStart().toLowerCase(), T = m.join("=");
    switch (P2) {
      case "expires": {
        a.expires = new Date(T);
        break;
      }
      case "max-age": {
        a.maxAge = Number.parseInt(T, 10);
        break;
      }
      case "secure": {
        a.secure = true;
        break;
      }
      case "httponly": {
        a.httpOnly = true;
        break;
      }
      case "samesite": {
        a.sameSite = T;
        break;
      }
      default:
        a[P2] = T;
    }
  }
  return a;
}
function cm(e11) {
  let t = "", r = "", n = e11.split("=");
  return n.length > 1 ? (t = n.shift(), r = n.join("=")) : r = e11, { name: t, value: r };
}
var hn = class extends Error {
  constructor(t, r) {
    super(t);
    __publicField(this, "clientVersion");
    __publicField(this, "cause");
    this.clientVersion = r.clientVersion, this.cause = r.cause;
  }
  get [Symbol.toStringTag]() {
    return this.name;
  }
};
var wn = class extends hn {
  constructor(t, r) {
    super(t, r);
    __publicField(this, "isRetryable");
    this.isRetryable = r.isRetryable ?? true;
  }
};
function fl(e11, t) {
  return { ...e11, isRetryable: t };
}
var ot = class extends wn {
  constructor(t, r) {
    super(t, fl(r, false));
    __publicField(this, "name", "InvalidDatasourceError");
    __publicField(this, "code", "P6001");
  }
};
Bt(ot, "InvalidDatasourceError");
function gl(e11) {
  let t = { clientVersion: e11.clientVersion }, r;
  try {
    r = new URL(e11.accelerateUrl);
  } catch (u) {
    let m = u.message;
    throw new ot(`Error validating \`accelerateUrl\`, the URL cannot be parsed, reason: ${m}`, t);
  }
  let { protocol: n, searchParams: i } = r;
  if (n !== "prisma:" && n !== Er) throw new ot("Error validating `accelerateUrl`: the URL must start with the protocol `prisma://` or `prisma+postgres://`", t);
  let o = i.get("api_key");
  if (o === null || o.length < 1) throw new ot("Error validating `accelerateUrl`: the URL must contain a valid API key", t);
  let s = Dn(r) ? "http:" : "https:";
  process.env.TEST_CLIENT_ENGINE_REMOTE_EXECUTOR && r.searchParams.has("use_http") && (s = "http:");
  let a = new URL(r.href.replace(n, s));
  return { apiKey: o, url: a };
}
var yl = Pe(wo()), xn = (_o4 = class {
  constructor({ apiKey: t, tracingHelper: r, logLevel: n, logQueries: i, engineHash: o }) {
    __privateAdd(this, _xn_instances);
    __publicField(this, "apiKey");
    __publicField(this, "tracingHelper");
    __publicField(this, "logLevel");
    __publicField(this, "logQueries");
    __publicField(this, "engineHash");
    this.apiKey = t, this.tracingHelper = r, this.logLevel = n, this.logQueries = i, this.engineHash = o;
  }
  build({ traceparent: t, transactionId: r } = {}) {
    let n = { Accept: "application/json", Authorization: `Bearer ${this.apiKey}`, "Content-Type": "application/json", "Prisma-Engine-Hash": this.engineHash, "Prisma-Engine-Version": yl.enginesVersion };
    this.tracingHelper.isEnabled() && (n.traceparent = t ?? this.tracingHelper.getTraceParent()), r && (n["X-Transaction-Id"] = r);
    let i = __privateMethod(this, _xn_instances, e_fn).call(this);
    return i.length > 0 && (n["X-Capture-Telemetry"] = i.join(", ")), n;
  }
}, _xn_instances = new WeakSet(), e_fn = function() {
  let t = [];
  return this.tracingHelper.isEnabled() && t.push("tracing"), this.logLevel && t.push(this.logLevel), this.logQueries && t.push("query"), t;
}, _o4);
function pm(e11) {
  return e11[0] * 1e3 + e11[1] / 1e6;
}
function ji(e11) {
  return new Date(pm(e11));
}
var wl = K("prisma:client:clientEngine:remoteExecutor"), bn = (_p2 = class {
  constructor(t) {
    __privateAdd(this, _bn_instances);
    __privateAdd(this, _e12);
    __privateAdd(this, _t9);
    __privateAdd(this, _r9);
    __privateAdd(this, _i6);
    __privateAdd(this, _o5);
    __privateAdd(this, _s3);
    __privateSet(this, _e12, t.clientVersion), __privateSet(this, _i6, t.logEmitter), __privateSet(this, _o5, t.tracingHelper), __privateSet(this, _s3, t.sqlCommenters);
    let { url: r, apiKey: n } = gl({ clientVersion: t.clientVersion, accelerateUrl: t.accelerateUrl });
    __privateSet(this, _r9, new Bi(r)), __privateSet(this, _t9, new xn({ apiKey: n, engineHash: t.clientVersion, logLevel: t.logLevel, logQueries: t.logQueries, tracingHelper: t.tracingHelper }));
  }
  async getConnectionInfo() {
    return await __privateMethod(this, _bn_instances, a_fn4).call(this, { path: "/connection-info", method: "GET" });
  }
  async execute({ plan: t, placeholderValues: r, batchIndex: n, model: i, operation: o, transaction: s, customFetch: a, queryInfo: u }) {
    var _a5;
    let m = u && ((_a5 = __privateGet(this, _s3)) == null ? void 0 : _a5.length) ? Hr(__privateGet(this, _s3), { query: u }) : void 0;
    return (await __privateMethod(this, _bn_instances, a_fn4).call(this, { path: s ? `/transaction/${s.id}/query` : "/query", method: "POST", body: { model: i, operation: o, plan: t, params: r, comments: m && Object.keys(m).length > 0 ? m : void 0 }, batchRequestIdx: n, fetch: a })).data;
  }
  async startTransaction(t) {
    return { ...await __privateMethod(this, _bn_instances, a_fn4).call(this, { path: "/transaction/start", method: "POST", body: t }), payload: void 0 };
  }
  async commitTransaction(t) {
    await __privateMethod(this, _bn_instances, a_fn4).call(this, { path: `/transaction/${t.id}/commit`, method: "POST" });
  }
  async rollbackTransaction(t) {
    await __privateMethod(this, _bn_instances, a_fn4).call(this, { path: `/transaction/${t.id}/rollback`, method: "POST" });
  }
  disconnect() {
    return Promise.resolve();
  }
  apiKey() {
    return __privateGet(this, _t9).apiKey;
  }
}, _e12 = new WeakMap(), _t9 = new WeakMap(), _r9 = new WeakMap(), _i6 = new WeakMap(), _o5 = new WeakMap(), _s3 = new WeakMap(), _bn_instances = new WeakSet(), a_fn4 = async function({ path: t, method: r, body: n, fetch: i = globalThis.fetch, batchRequestIdx: o }) {
  let s = await __privateGet(this, _r9).request({ method: r, path: t, headers: __privateGet(this, _t9).build(), body: n, fetch: i });
  s.ok || await __privateMethod(this, _bn_instances, n_fn5).call(this, s, o);
  let a = await s.json();
  return typeof a.extensions == "object" && a.extensions !== null && __privateMethod(this, _bn_instances, u_fn5).call(this, a.extensions), a;
}, n_fn5 = async function(t, r) {
  let n = t.headers.get("Prisma-Error-Code"), i = await t.text(), o, s = i;
  try {
    o = JSON.parse(i);
  } catch {
    o = {};
  }
  typeof o.code == "string" && (n = o.code), typeof o.error == "string" ? s = o.error : typeof o.message == "string" ? s = o.message : typeof o.InvalidRequestError == "object" && o.InvalidRequestError !== null && typeof o.InvalidRequestError.reason == "string" && (s = o.InvalidRequestError.reason), s = s || `HTTP ${t.status}: ${t.statusText}`;
  let a = typeof o.meta == "object" && o.meta !== null ? o.meta : o;
  throw new hl.PrismaClientKnownRequestError(s, { clientVersion: __privateGet(this, _e12), code: n ?? "P6000", batchRequestIdx: r, meta: a });
}, u_fn5 = function(t) {
  let r = t.logs ?? [];
  if (t.spans) __privateGet(this, _o5).dispatchEngineSpans(t.spans, r, (n) => __privateMethod(this, _bn_instances, l_fn5).call(this, n));
  else for (let n of r) __privateMethod(this, _bn_instances, l_fn5).call(this, n);
}, l_fn5 = function(t) {
  switch (t.level) {
    case "debug":
    case "trace":
      wl(t);
      break;
    case "error":
    case "warn":
    case "info": {
      __privateGet(this, _i6).emit(t.level, { timestamp: ji(t.timestamp), message: t.attributes.message ?? "", target: t.target ?? "RemoteExecutor" });
      break;
    }
    case "query": {
      __privateGet(this, _i6).emit("query", { query: t.attributes.query ?? "", timestamp: ji(t.timestamp), duration: t.attributes.duration_ms ?? 0, params: t.attributes.params ?? "", target: t.target ?? "RemoteExecutor" });
      break;
    }
    default:
      throw new Error(`Unexpected log level: ${t.level}`);
  }
}, _p2), Bi = (_q = class {
  constructor(t) {
    __privateAdd(this, _Bi_instances);
    __privateAdd(this, _e13);
    __privateAdd(this, _t10);
    __privateAdd(this, _r10);
    __privateSet(this, _e13, t), __privateSet(this, _t10, /* @__PURE__ */ new Map());
  }
  async request({ method: t, path: r, headers: n, body: i, fetch: o }) {
    let s = new URL(r, __privateGet(this, _e13)), a = __privateMethod(this, _Bi_instances, i_fn3).call(this, s);
    a && (n.Cookie = a), __privateGet(this, _r10) && (n["Accelerate-Query-Engine-Jwt"] = __privateGet(this, _r10));
    let u = await o(s.href, { method: t, body: i !== void 0 ? JSON.stringify(i) : void 0, headers: n });
    return wl(t, s, u.status, u.statusText), __privateSet(this, _r10, u.headers.get("Accelerate-Query-Engine-Jwt") ?? void 0), __privateMethod(this, _Bi_instances, o_fn4).call(this, s, u), u;
  }
}, _e13 = new WeakMap(), _t10 = new WeakMap(), _r10 = new WeakMap(), _Bi_instances = new WeakSet(), i_fn3 = function(t) {
  let r = [], n = /* @__PURE__ */ new Date();
  for (let [i, o] of __privateGet(this, _t10)) {
    if (o.expires && o.expires < n) {
      __privateGet(this, _t10).delete(i);
      continue;
    }
    let s = o.domain ?? t.hostname, a = o.path ?? "/";
    t.hostname.endsWith(s) && t.pathname.startsWith(a) && r.push(dl(o.name, o.value));
  }
  return r.length > 0 ? r.join("; ") : void 0;
}, o_fn4 = function(t, r) {
  var _a5, _b2;
  let n = ((_b2 = (_a5 = r.headers).getSetCookie) == null ? void 0 : _b2.call(_a5)) || [];
  if (n.length === 0) {
    let i = r.headers.get("Set-Cookie");
    i && n.push(i);
  }
  for (let i of n) {
    let o = ml(i), s = o.domain ?? t.hostname, a = o.path ?? "/", u = `${s}:${a}:${o.name}`;
    __privateGet(this, _t10).set(u, { name: o.name, value: o.value, domain: s, path: a, expires: o.expires });
  }
}, _q);
var Ji = dist, Qi = {}, xl = { async loadQueryCompiler(e11) {
  let { clientVersion: t, compilerWasm: r } = e11;
  if (r === void 0) throw new Ji.PrismaClientInitializationError("WASM query compiler was unexpectedly `undefined`", t);
  let n;
  return e11.activeProvider === void 0 || Qi[e11.activeProvider] === void 0 ? (n = (async () => {
    let i = await r.getRuntime(), o = await r.getQueryCompilerWasmModule();
    if (o == null) throw new Ji.PrismaClientInitializationError("The loaded wasm module was unexpectedly `undefined` or `null` once loaded", t);
    let s = { [r.importName]: i }, a = new WebAssembly.Instance(o, s), u = a.exports.__wbindgen_start;
    return i.__wbg_set_wasm(a.exports), u(), i.QueryCompiler;
  })(), e11.activeProvider !== void 0 && (Qi[e11.activeProvider] = n)) : n = Qi[e11.activeProvider], await n;
} };
var dm = "P2038", Ve = K("prisma:client:clientEngine"), Tl = globalThis;
Tl.PRISMA_WASM_PANIC_REGISTRY = { set_message(e11) {
  throw new ne.PrismaClientRustPanicError(e11, mn);
} };
var yr = (_r12 = class {
  constructor(t, r) {
    __privateAdd(this, _yr_instances);
    __publicField(this, "name", "ClientEngine");
    __privateAdd(this, _e14);
    __privateAdd(this, _t11, { type: "disconnected" });
    __privateAdd(this, _r11);
    __privateAdd(this, _i7);
    __privateAdd(this, _o6);
    __privateAdd(this, _s4);
    __publicField(this, "config");
    __publicField(this, "datamodel");
    __publicField(this, "logEmitter");
    __publicField(this, "logQueries");
    __publicField(this, "logLevel");
    __publicField(this, "tracingHelper");
    __privateAdd(this, _a4);
    if (t.accelerateUrl !== void 0) __privateSet(this, _i7, { remote: true, accelerateUrl: t.accelerateUrl });
    else if (t.adapter) __privateSet(this, _i7, { remote: false, driverAdapterFactory: t.adapter }), Ve("Using driver adapter: %O", t.adapter);
    else throw new ne.PrismaClientInitializationError("PrismaClient requires a driver adapter to connect to your database, but none was provided. Pass one to the PrismaClient constructor, e.g. `new PrismaClient({ adapter })`. Learn more: https://pris.ly/d/driver-adapters", t.clientVersion, dm);
    __privateSet(this, _r11, r ?? xl), this.config = t, this.logQueries = t.logQueries ?? false, this.logLevel = t.logLevel ?? "error", this.logEmitter = t.logEmitter, this.datamodel = t.inlineSchema, this.tracingHelper = t.tracingHelper, __privateSet(this, _o6, t.queryPlanCacheMaxSize === 0 ? void 0 : new gn(t.queryPlanCacheMaxSize)), __privateSet(this, _s4, mr.deserialize(t.parameterizationSchema, (n) => {
      if (!Object.hasOwn(t.runtimeDataModel.enums, n)) return;
      let i = {};
      for (let o of t.runtimeDataModel.enums[n].values) i[o.name] = o.dbName ?? o.name;
      return i;
    })), t.enableDebugLogs && (this.logLevel = "debug"), this.logQueries && __privateSet(this, _a4, (n) => {
      this.logEmitter.emit("query", { ...n, params: Se(n.params), target: "ClientEngine" });
    });
  }
  onBeforeExit() {
    throw new Error('"beforeExit" hook is not applicable to the client engine, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.');
  }
  async start() {
    await __privateMethod(this, _yr_instances, n_fn6).call(this);
  }
  async stop() {
    switch (__privateGet(this, _t11).type) {
      case "disconnected":
        return;
      case "connecting":
        return await __privateGet(this, _t11).promise, await this.stop();
      case "connected": {
        let t = __privateGet(this, _t11).engine, r = this.tracingHelper.runInChildSpan("disconnect", async () => {
          try {
            await t.executor.disconnect(), t.queryCompiler.free();
          } finally {
            __privateSet(this, _t11, { type: "disconnected" });
          }
        });
        return __privateSet(this, _t11, { type: "disconnecting", promise: r }), await r;
      }
      case "disconnecting":
        return await __privateGet(this, _t11).promise;
    }
  }
  version() {
    return "unknown";
  }
  async transaction(t, r, n) {
    let i, { executor: o } = await __privateMethod(this, _yr_instances, n_fn6).call(this);
    try {
      if (t === "start") {
        let s = n;
        i = await o.startTransaction({ ...s, isolationLevel: __privateMethod(this, _yr_instances, g_fn2).call(this, s.isolationLevel) });
      } else if (t === "commit") {
        let s = n;
        await o.commitTransaction(s);
      } else if (t === "rollback") {
        let s = n;
        await o.rollbackTransaction(s);
      } else $e(t, "Invalid transaction action.");
    } catch (s) {
      throw __privateMethod(this, _yr_instances, c_fn4).call(this, s);
    }
    return i ? { id: i.id, payload: void 0 } : void 0;
  }
  async request(t, { interactiveTransaction: r, customDataProxyFetch: n }) {
    var _a5, _b2;
    Ve("sending request");
    let { executor: i, queryCompiler: o } = await __privateMethod(this, _yr_instances, n_fn6).call(this).catch((m) => {
      throw __privateMethod(this, _yr_instances, c_fn4).call(this, m, JSON.stringify(t));
    }), s, a = {}, u = t.query;
    if (Pl(t)) s = El(t);
    else {
      let { parameterizedQuery: m, placeholderValues: P2 } = Vi(t, __privateGet(this, _s4)), T = JSON.stringify(m);
      a = P2, u = m.query;
      let S = t.action !== "createMany" && t.action !== "createManyAndReturn", I = S ? (_a5 = __privateGet(this, _o6)) == null ? void 0 : _a5.getSingle(T) : void 0;
      I ? (Ve("query plan cache hit"), s = I) : (Ve("query plan cache miss"), s = __privateMethod(this, _yr_instances, f_fn2).call(this, m, T, o), S && ((_b2 = __privateGet(this, _o6)) == null ? void 0 : _b2.setSingle(T, s)));
    }
    try {
      Ve("query plan created", s);
      let m = await i.execute({ plan: s, model: t.modelName, operation: t.action, placeholderValues: a, transaction: r, batchIndex: void 0, customFetch: n == null ? void 0 : n(globalThis.fetch), queryInfo: { type: "single", modelName: t.modelName, action: t.action, query: u } });
      return Ve("query plan executed"), { data: { [t.action]: m } };
    } catch (m) {
      throw __privateMethod(this, _yr_instances, c_fn4).call(this, m, JSON.stringify(t));
    }
  }
  async requestBatch(t, { transaction: r, customDataProxyFetch: n }) {
    var _a5, _b2;
    if (t.length === 0) return [];
    let i = t[0].action, o = t[0].modelName, s = sl(t, r), a = JSON.stringify(s), { executor: u, queryCompiler: m } = await __privateMethod(this, _yr_instances, n_fn6).call(this).catch((A) => {
      throw __privateMethod(this, _yr_instances, c_fn4).call(this, A, a);
    }), P2 = o === void 0, T, S = {}, I = t.map((A) => A.query);
    if (P2) T = __privateMethod(this, _yr_instances, y_fn2).call(this, t, a, m);
    else {
      let { parameterizedBatch: A, placeholderValues: M } = qi(s, __privateGet(this, _s4)), L = JSON.stringify(A);
      S = M, I = A.batch.map((E) => E.query);
      let q = (_a5 = __privateGet(this, _o6)) == null ? void 0 : _a5.getBatch(L);
      if (q) Ve("batch query plan cache hit"), T = q;
      else {
        Ve("batch query plan cache miss");
        try {
          T = __privateMethod(this, _yr_instances, y_fn2).call(this, A.batch, L, m), (_b2 = __privateGet(this, _o6)) == null ? void 0 : _b2.setBatch(L, T);
        } catch (E) {
          throw __privateMethod(this, _yr_instances, d_fn3).call(this, E);
        }
      }
    }
    try {
      let A;
      switch ((r == null ? void 0 : r.kind) === "itx" && (A = r.options), T.type) {
        case "multi": {
          if ((r == null ? void 0 : r.kind) !== "itx") {
            let E = r == null ? void 0 : r.options, D = { maxWait: (E == null ? void 0 : E.maxWait) ?? this.config.transactionOptions.maxWait, timeout: (E == null ? void 0 : E.timeout) ?? this.config.transactionOptions.timeout, isolationLevel: (E == null ? void 0 : E.isolationLevel) ?? this.config.transactionOptions.isolationLevel };
            A = await this.transaction("start", {}, D);
          }
          let M = [], L = false, q;
          for (let [E, D] of T.plans.entries()) try {
            let H = await u.execute({ plan: D, placeholderValues: S, model: t[E].modelName, operation: t[E].action, batchIndex: E, transaction: A, customFetch: n == null ? void 0 : n(globalThis.fetch), queryInfo: { type: "single", modelName: t[E].modelName, action: t[E].action, query: I[E] } });
            M.push({ data: { [t[E].action]: H } });
          } catch (H) {
            if (q ?? (q = (r == null ? void 0 : r.kind) !== "batch" && t.every((ce) => ce.action === "findUnique" || ce.action === "findUniqueOrThrow")), M.push(H), L = true, !q) break;
          }
          return A !== void 0 && (r == null ? void 0 : r.kind) !== "itx" && (L ? await this.transaction("rollback", {}, A) : await this.transaction("commit", {}, A)), M;
        }
        case "compacted": {
          if (!t.every((q) => q.action === i && q.modelName === o)) {
            let q = t.map((D) => D.action).join(", "), E = t.map((D) => D.modelName).join(", ");
            throw new Error(`Internal error: All queries in a compacted batch must have the same action and model name, but received actions: [${q}] and model names: [${E}]. This indicates a bug in the client. Please report this issue to the Prisma team with your query details.`);
          }
          if (o === void 0) throw new Error("Internal error: A compacted batch cannot contain raw queries. This indicates a bug in the client. Please report this issue to the Prisma team with your query details.");
          let M = await u.execute({ plan: T.plan, placeholderValues: S, model: o, operation: i, batchIndex: void 0, transaction: A, customFetch: n == null ? void 0 : n(globalThis.fetch), queryInfo: { type: "compacted", action: i, modelName: o, queries: I } });
          return Ws(M, T, S).map((q) => ({ data: { [i]: q } }));
        }
      }
    } catch (A) {
      throw __privateMethod(this, _yr_instances, c_fn4).call(this, A, a);
    }
  }
  async apiKey() {
    let { executor: t } = await __privateMethod(this, _yr_instances, n_fn6).call(this);
    return t.apiKey();
  }
}, _e14 = new WeakMap(), _t11 = new WeakMap(), _r11 = new WeakMap(), _i7 = new WeakMap(), _o6 = new WeakMap(), _s4 = new WeakMap(), _a4 = new WeakMap(), _yr_instances = new WeakSet(), n_fn6 = async function() {
  switch (__privateGet(this, _t11).type) {
    case "disconnected": {
      let t = this.tracingHelper.runInChildSpan("connect", async () => {
        let r, n;
        try {
          r = await __privateMethod(this, _yr_instances, u_fn6).call(this), n = await __privateMethod(this, _yr_instances, l_fn6).call(this, r);
        } catch (o) {
          throw __privateSet(this, _t11, { type: "disconnected" }), n == null ? void 0 : n.free(), await (r == null ? void 0 : r.disconnect()), o;
        }
        let i = { executor: r, queryCompiler: n };
        return __privateSet(this, _t11, { type: "connected", engine: i }), i;
      });
      return __privateSet(this, _t11, { type: "connecting", promise: t }), await t;
    }
    case "connecting":
      return await __privateGet(this, _t11).promise;
    case "connected":
      return __privateGet(this, _t11).engine;
    case "disconnecting":
      return await __privateGet(this, _t11).promise, await __privateMethod(this, _yr_instances, n_fn6).call(this);
  }
}, u_fn6 = async function() {
  return __privateGet(this, _i7).remote ? new bn({ clientVersion: this.config.clientVersion, accelerateUrl: __privateGet(this, _i7).accelerateUrl, logEmitter: this.logEmitter, logLevel: this.logLevel, logQueries: this.logQueries, tracingHelper: this.tracingHelper, sqlCommenters: this.config.sqlCommenters }) : await fn.connect({ driverAdapterFactory: __privateGet(this, _i7).driverAdapterFactory, tracingHelper: this.tracingHelper, transactionOptions: { ...this.config.transactionOptions, isolationLevel: __privateMethod(this, _yr_instances, g_fn2).call(this, this.config.transactionOptions.isolationLevel) }, onQuery: __privateGet(this, _a4), provider: this.config.activeProvider, sqlCommenters: this.config.sqlCommenters });
}, l_fn6 = async function(t) {
  let r = __privateGet(this, _e14);
  r === void 0 && (r = await __privateGet(this, _r11).loadQueryCompiler(this.config), __privateSet(this, _e14, r));
  let { provider: n, connectionInfo: i } = await t.getConnectionInfo();
  try {
    return __privateMethod(this, _yr_instances, m_fn2).call(this, () => new r({ datamodel: this.datamodel, provider: n, connectionInfo: i }), void 0, false);
  } catch (o) {
    throw __privateMethod(this, _yr_instances, p_fn5).call(this, o);
  }
}, p_fn5 = function(t) {
  if (t instanceof ne.PrismaClientRustPanicError) return t;
  try {
    let r = JSON.parse(t.message);
    return new ne.PrismaClientInitializationError(r.message, this.config.clientVersion, r.error_code);
  } catch {
    return t;
  }
}, c_fn4 = function(t, r) {
  var _a5;
  if (t instanceof ne.PrismaClientInitializationError) return t;
  if (t.code === "GenericFailure" && ((_a5 = t.message) == null ? void 0 : _a5.startsWith("PANIC:"))) return new ne.PrismaClientRustPanicError(bl(this, t.message, r), this.config.clientVersion);
  if (t instanceof X) return new ne.PrismaClientKnownRequestError(t.message, { code: t.code, meta: t.meta, clientVersion: this.config.clientVersion });
  try {
    let n = JSON.parse(t);
    return new ne.PrismaClientUnknownRequestError(`${n.message}
${n.backtrace}`, { clientVersion: this.config.clientVersion });
  } catch {
    return t;
  }
}, d_fn3 = function(t) {
  return t instanceof ne.PrismaClientRustPanicError ? t : typeof t.message == "string" && typeof t.code == "string" ? new ne.PrismaClientKnownRequestError(t.message, { code: t.code, meta: t.meta, clientVersion: this.config.clientVersion }) : typeof t.message == "string" ? new ne.PrismaClientUnknownRequestError(t.message, { clientVersion: this.config.clientVersion }) : t;
}, m_fn2 = function(t, r, n = true) {
  let i = Tl.PRISMA_WASM_PANIC_REGISTRY.set_message, o;
  commonjsGlobal.PRISMA_WASM_PANIC_REGISTRY.set_message = (s) => {
    o = s;
  };
  try {
    return t();
  } finally {
    if (commonjsGlobal.PRISMA_WASM_PANIC_REGISTRY.set_message = i, o) throw __privateSet(this, _e14, void 0), n && this.stop().catch((s) => Ve("failed to disconnect:", s)), new ne.PrismaClientRustPanicError(bl(this, o, r), this.config.clientVersion);
  }
}, f_fn2 = function(t, r, n) {
  try {
    return __privateMethod(this, _yr_instances, m_fn2).call(this, () => __privateMethod(this, _yr_instances, h_fn).call(this, { queries: [t], execute: () => n.compile(r) }));
  } catch (i) {
    throw __privateMethod(this, _yr_instances, d_fn3).call(this, i);
  }
}, y_fn2 = function(t, r, n) {
  if (t.every(Pl)) return { type: "multi", plans: t.map((i) => El(i)) };
  try {
    return __privateMethod(this, _yr_instances, m_fn2).call(this, () => __privateMethod(this, _yr_instances, h_fn).call(this, { queries: t, execute: () => n.compileBatch(r) }));
  } catch (i) {
    throw __privateMethod(this, _yr_instances, d_fn3).call(this, i);
  }
}, g_fn2 = function(t) {
  switch (t) {
    case void 0:
      return;
    case "ReadUncommitted":
      return "READ UNCOMMITTED";
    case "ReadCommitted":
      return "READ COMMITTED";
    case "RepeatableRead":
      return "REPEATABLE READ";
    case "Serializable":
      return "SERIALIZABLE";
    case "Snapshot":
      return "SNAPSHOT";
    default:
      throw new ne.PrismaClientKnownRequestError(`Inconsistent column data: Conversion failed: Invalid isolation level \`${t}\``, { code: "P2023", clientVersion: this.config.clientVersion, meta: { providedIsolationLevel: t } });
  }
}, h_fn = function({ queries: t, execute: r }) {
  return this.tracingHelper.runInChildSpan({ name: "compile", attributes: { models: t.map((n) => n.modelName).filter((n) => n !== void 0), actions: t.map((n) => n.action) } }, r);
}, _r12);
function bl(e11, t, r) {
  return pl({ binaryTarget: void 0, title: t, version: e11.config.clientVersion, engineVersion: "unknown", database: e11.config.activeProvider, query: r });
}
function Pl(e11) {
  return e11.action === "queryRaw" || e11.action === "executeRaw";
}
function El(e11) {
  let t = e11.query.arguments.query, { args: r, argTypes: n } = il(e11.query.arguments.parameters);
  return { type: e11.action === "queryRaw" ? "query" : "execute", args: { type: "rawSql", sql: t, args: r, argTypes: n } };
}
function vl(e11) {
  return new yr(e11);
}
var Sl = (e11) => ({ command: e11 });
var Nl = dist;
var Al = (e11) => e11.strings.reduce((t, r, n) => `${t}@P${n}${r}`);
var Pn = dist;
function It(e11, t) {
  try {
    return Rl(e11, "fast", t);
  } catch (r) {
    if (r instanceof TypeError) return Rl(e11, "slow", t);
    throw r;
  }
}
function Rl(e11, t, r) {
  return JSON.stringify(e11.map((n) => Il(n, t, r)));
}
function Il(e11, t, r) {
  if (Array.isArray(e11)) return e11.map((n) => Il(n, t, r));
  if (typeof e11 == "bigint") return { prisma__type: "bigint", prisma__value: e11.toString() };
  if (ct(e11)) {
    if (!pt(e11)) throw new Pn.PrismaClientValidationError("Provided Date object is invalid", { clientVersion: r });
    return { prisma__type: "date", prisma__value: e11.toJSON() };
  }
  if (Pn.Decimal.isDecimal(e11)) return { prisma__type: "decimal", prisma__value: e11.toJSON() };
  if (Buffer.isBuffer(e11)) return { prisma__type: "bytes", prisma__value: e11.toString("base64") };
  if (mm(e11)) return { prisma__type: "bytes", prisma__value: Buffer.from(e11).toString("base64") };
  if (ArrayBuffer.isView(e11)) {
    let { buffer: n, byteOffset: i, byteLength: o } = e11;
    return { prisma__type: "bytes", prisma__value: Buffer.from(n, i, o).toString("base64") };
  }
  return typeof e11 == "object" && t === "slow" ? kl(e11) : e11;
}
function mm(e11) {
  return e11 instanceof ArrayBuffer || e11 instanceof SharedArrayBuffer ? true : typeof e11 == "object" && e11 !== null ? e11[Symbol.toStringTag] === "ArrayBuffer" || e11[Symbol.toStringTag] === "SharedArrayBuffer" : false;
}
function kl(e11) {
  if (typeof e11 != "object" || e11 === null) return e11;
  if (typeof e11.toJSON == "function") return e11.toJSON();
  if (Array.isArray(e11)) return e11.map(Cl);
  let t = {};
  for (let r of Object.keys(e11)) t[r] = Cl(e11[r]);
  return t;
}
function Cl(e11) {
  return typeof e11 == "bigint" ? e11.toString() : kl(e11);
}
var fm = /^(\s*alter\s)/i, Ol = K("prisma:client");
function Gi(e11, t, r, n) {
  if (!(e11 !== "postgresql" && e11 !== "cockroachdb") && r.length > 0 && fm.exec(t)) throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
}
var zi = ({ clientMethod: e11, activeProvider: t, clientVersion: r }) => (n) => {
  let i = "", o;
  if (Ur(n)) i = n.sql, o = { values: It(n.values, r), __prismaRawParameters__: true };
  else if (Array.isArray(n)) {
    let [s, ...a] = n;
    i = s, o = { values: It(a || [], r), __prismaRawParameters__: true };
  } else switch (t) {
    case "sqlite":
    case "mysql": {
      i = n.sql, o = { values: It(n.values, r), __prismaRawParameters__: true };
      break;
    }
    case "cockroachdb":
    case "postgresql":
    case "postgres": {
      i = n.text, o = { values: It(n.values, r), __prismaRawParameters__: true };
      break;
    }
    case "sqlserver": {
      i = Al(n), o = { values: It(n.values, r), __prismaRawParameters__: true };
      break;
    }
    default:
      throw new Error(`The ${t} provider does not support ${e11}`);
  }
  return (o == null ? void 0 : o.values) ? Ol(`prisma.${e11}(${i}, ${o.values})`) : Ol(`prisma.${e11}(${i})`), { query: i, parameters: o };
}, Dl = { requestArgsToMiddlewareArgs(e11) {
  return [e11.strings, ...e11.values];
}, middlewareArgsToRequestArgs(e11) {
  let [t, ...r] = e11;
  return new Nl.Sql(t, r);
} }, Ml = { requestArgsToMiddlewareArgs(e11) {
  return [e11];
}, middlewareArgsToRequestArgs(e11) {
  return e11[0];
} };
function Hi(e11) {
  return function(r, n) {
    let i, o = (s = e11) => {
      try {
        return s === void 0 || (s == null ? void 0 : s.kind) === "itx" ? i ?? (i = Fl(r(s))) : Fl(r(s));
      } catch (a) {
        return Promise.reject(a);
      }
    };
    return { get spec() {
      return n;
    }, then(s, a) {
      return o().then(s, a);
    }, catch(s) {
      return o().catch(s);
    }, finally(s) {
      return o().finally(s);
    }, requestTransaction(s) {
      let a = o(s);
      return a.requestTransaction ? a.requestTransaction(s) : a;
    }, [Symbol.toStringTag]: "PrismaPromise" };
  };
}
function Fl(e11) {
  return typeof e11.then == "function" ? e11 : Promise.resolve(e11);
}
var _l = { version: "7.10.1" };
var ym = _l.version.split(".")[0], hm = "PRISMA_INSTRUMENTATION", wm = `V${ym}_PRISMA_INSTRUMENTATION`, $l = globalThis;
function Ll() {
  var _a5;
  let e11 = $l[wm];
  return (e11 == null ? void 0 : e11.helper) ? e11.helper : (_a5 = $l[hm]) == null ? void 0 : _a5.helper;
}
var xm = { isEnabled() {
  return false;
}, getTraceParent() {
  return "00-10-10-00";
}, dispatchEngineSpans(e11, t, r) {
  for (let n of t) r(n);
}, getActiveContext() {
}, runInChildSpan(e11, t) {
  return t();
} }, Wi = class {
  isEnabled() {
    return this.getTracingHelper().isEnabled();
  }
  getTraceParent(t) {
    return this.getTracingHelper().getTraceParent(t);
  }
  dispatchEngineSpans(t, r, n) {
    return this.getTracingHelper().dispatchEngineSpans(t, r, n);
  }
  getActiveContext() {
    return this.getTracingHelper().getActiveContext();
  }
  runInChildSpan(t, r) {
    return this.getTracingHelper().runInChildSpan(t, r);
  }
  getTracingHelper() {
    return Ll() ?? xm;
  }
};
function Vl() {
  return new Wi();
}
function ql(e11, t = () => {
}) {
  let r, n = new Promise((i) => r = i);
  return { then(i) {
    return --e11 === 0 && r(t()), i == null ? void 0 : i(n);
  } };
}
function Ul(e11) {
  return typeof e11 == "string" ? e11 : e11.reduce((t, r) => {
    let n = typeof r == "string" ? r : r.level;
    return n === "query" ? t : t && (r === "info" || t === "info") ? "info" : n;
  }, void 0);
}
var Ql = dist;
function Zi(e11) {
  if (e11.action !== "findUnique" && e11.action !== "findUniqueOrThrow") return;
  let t = [];
  return e11.modelName && t.push(e11.modelName), e11.query.arguments && t.push(Ki(e11.query.arguments)), t.push(Ki(e11.query.selection)), t.join("");
}
function Ki(e11) {
  return `(${Object.keys(e11).sort().map((r) => {
    let n = e11[r];
    return typeof n == "object" && n !== null ? `(${r} ${Ki(n)})` : r;
  }).join(" ")})`;
}
var bm = { aggregate: false, aggregateRaw: false, createMany: true, createManyAndReturn: true, createOne: true, deleteMany: true, deleteOne: true, executeRaw: true, findFirst: false, findFirstOrThrow: false, findMany: false, findRaw: false, findUnique: false, findUniqueOrThrow: false, groupBy: false, queryRaw: false, runCommandRaw: true, updateMany: true, updateManyAndReturn: true, updateOne: true, upsertOne: true };
function Xi(e11) {
  return bm[e11];
}
var En = class {
  constructor(t) {
    __publicField(this, "batches");
    __publicField(this, "tickActive", false);
    this.options = t;
    this.batches = {};
  }
  request(t) {
    let r = this.options.batchBy(t);
    return r ? (this.batches[r] || (this.batches[r] = [], this.tickActive || (this.tickActive = true, process.nextTick(() => {
      this.dispatchBatches(), this.tickActive = false;
    }))), new Promise((n, i) => {
      this.batches[r].push({ request: t, resolve: n, reject: i });
    })) : this.options.singleLoader(t);
  }
  dispatchBatches() {
    for (let t in this.batches) {
      let r = this.batches[t];
      delete this.batches[t], r.length === 1 ? this.options.singleLoader(r[0].request).then((n) => {
        n instanceof Error ? r[0].reject(n) : r[0].resolve(n);
      }).catch((n) => {
        r[0].reject(n);
      }) : (r.sort((n, i) => this.options.batchOrder(n.request, i.request)), this.options.batchLoader(r.map((n) => n.request)).then((n) => {
        if (n instanceof Error) for (let i = 0; i < r.length; i++) r[i].reject(n);
        else for (let i = 0; i < r.length; i++) {
          let o = n[i];
          o instanceof Error ? r[i].reject(o) : r[i].resolve(o);
        }
      }).catch((n) => {
        for (let i = 0; i < r.length; i++) r[i].reject(n);
      }));
    }
  }
  get [Symbol.toStringTag]() {
    return "DataLoader";
  }
};
var jl = dist;
function st(e11, t) {
  if (t === null) return t;
  switch (e11) {
    case "bigint":
      return BigInt(t);
    case "bytes":
      return new Uint8Array(Buffer.from(t, "base64"));
    case "decimal":
      return new jl.Decimal(t);
    case "datetime":
    case "date":
      return new Date(t);
    case "time":
      return /* @__PURE__ */ new Date(`1970-01-01T${t}Z`);
    case "bigint-array":
      return t.map((r) => st("bigint", r));
    case "bytes-array":
      return t.map((r) => st("bytes", r));
    case "decimal-array":
      return t.map((r) => st("decimal", r));
    case "datetime-array":
      return t.map((r) => st("datetime", r));
    case "date-array":
      return t.map((r) => st("date", r));
    case "time-array":
      return t.map((r) => st("time", r));
    default:
      return t;
  }
}
function Tn(e11) {
  let t = [], r = Pm(e11);
  for (let n = 0; n < e11.rows.length; n++) {
    let i = e11.rows[n], o = { ...r };
    for (let s = 0; s < i.length; s++) o[e11.columns[s]] = st(e11.types[s], i[s]);
    t.push(o);
  }
  return t;
}
function Pm(e11) {
  let t = {};
  for (let r = 0; r < e11.columns.length; r++) t[e11.columns[r]] = null;
  return t;
}
function Bl(e11, t) {
  var _a5;
  let { schema: r, name: n } = Em(t), i = Object.entries(e11.models).filter(([o, s]) => (s.dbName ?? o) === n);
  if (i.length <= 1) return (_a5 = i[0]) == null ? void 0 : _a5[0];
  if (r !== void 0) {
    let o = i.filter(([, s]) => s.schema === r);
    if (o.length === 1) return o[0][0];
  }
}
function Em(e11) {
  let t = e11.lastIndexOf(".");
  return t === -1 ? { schema: void 0, name: e11 } : { schema: e11.slice(0, t), name: e11.slice(t + 1) };
}
var Tm = K("prisma:client:request_handler"), vn = class {
  constructor(t, r) {
    __publicField(this, "client");
    __publicField(this, "dataloader");
    __publicField(this, "logEmitter");
    this.logEmitter = r, this.client = t, this.dataloader = new En({ batchLoader: _s(async ({ requests: n, customDataProxyFetch: i }) => {
      let { transaction: o, otelParentCtx: s } = n[0], a = n.map((T) => T.protocolQuery), u = this.client._tracingHelper.getTraceParent(s), m = n.some((T) => Xi(T.protocolQuery.action));
      return (await this.client._engine.requestBatch(a, { traceparent: u, transaction: vm(o), containsWrite: m, customDataProxyFetch: i })).map((T, S) => {
        if (T instanceof Error) return T;
        try {
          return this.mapQueryEngineResult(n[S], T);
        } catch (I) {
          return I;
        }
      });
    }), singleLoader: async (n) => {
      var _a5;
      let i = ((_a5 = n.transaction) == null ? void 0 : _a5.kind) === "itx" ? Jl(n.transaction) : void 0, o = await this.client._engine.request(n.protocolQuery, { traceparent: this.client._tracingHelper.getTraceParent(), interactiveTransaction: i, isWrite: Xi(n.protocolQuery.action), customDataProxyFetch: n.customDataProxyFetch });
      return this.mapQueryEngineResult(n, o);
    }, batchBy: (n) => {
      var _a5, _b2;
      if (((_a5 = n.transaction) == null ? void 0 : _a5.kind) === "itx") {
        let i = Zi(n.protocolQuery);
        return `itx-${n.transaction.id}${i ? `-${i}` : ""}`;
      }
      return ((_b2 = n.transaction) == null ? void 0 : _b2.id) ? `transaction-${n.transaction.id}` : Zi(n.protocolQuery);
    }, batchOrder(n, i) {
      var _a5, _b2;
      return ((_a5 = n.transaction) == null ? void 0 : _a5.kind) === "batch" && ((_b2 = i.transaction) == null ? void 0 : _b2.kind) === "batch" ? n.transaction.index - i.transaction.index : 0;
    } });
  }
  async request(t) {
    try {
      return await this.dataloader.request(t);
    } catch (r) {
      let { clientMethod: n, callsite: i, transaction: o, args: s, modelName: a } = t;
      this.handleAndLogRequestError({ error: r, clientMethod: n, callsite: i, transaction: o, args: s, modelName: a, globalOmit: t.globalOmit });
    }
  }
  mapQueryEngineResult({ dataPath: t, unpacker: r }, n) {
    let i = n == null ? void 0 : n.data, o = this.unpack(i, t, r);
    return process.env.PRISMA_CLIENT_GET_TIME ? { data: o } : o;
  }
  handleAndLogRequestError(t) {
    try {
      this.handleRequestError(t);
    } catch (r) {
      throw this.logEmitter && this.logEmitter.emit("error", { message: r.message, target: t.clientMethod, timestamp: /* @__PURE__ */ new Date() }), r;
    }
  }
  handleRequestError({ error: t, clientMethod: r, callsite: n, transaction: i, args: o, modelName: s, globalOmit: a }) {
    if (Tm(t), Sm(t, i)) throw t;
    if (t instanceof _.PrismaClientKnownRequestError && Am(t)) {
      let m = Gl(t.meta);
      Fr({ args: o, errors: [m], callsite: n, errorFormat: this.client._errorFormat, originalMethod: r, clientVersion: this.client._clientVersion, globalOmit: a });
    }
    let u = t.message;
    if (n && (u = Rr({ callsite: n, originalMethod: r, isPanic: t.isPanic, showColors: this.client._errorFormat === "pretty", message: u })), u = this.sanitizeMessage(u), t.code) {
      let m = this.resolveErrorMeta(t.meta, t.code, s);
      throw new _.PrismaClientKnownRequestError(u, { code: t.code, clientVersion: this.client._clientVersion, meta: m, batchRequestIdx: t.batchRequestIdx });
    } else {
      if (t.isPanic) throw new _.PrismaClientRustPanicError(u, this.client._clientVersion);
      if (t instanceof _.PrismaClientUnknownRequestError) throw new _.PrismaClientUnknownRequestError(u, { clientVersion: this.client._clientVersion, batchRequestIdx: t.batchRequestIdx });
      if (t instanceof _.PrismaClientInitializationError) throw new _.PrismaClientInitializationError(u, this.client._clientVersion);
      if (t instanceof _.PrismaClientRustPanicError) throw new _.PrismaClientRustPanicError(u, this.client._clientVersion);
    }
    throw t.clientVersion = this.client._clientVersion, t;
  }
  resolveErrorMeta(t, r, n) {
    if (r !== "P2002" || typeof (t == null ? void 0 : t.table) != "string") return n ? { modelName: n, ...t } : t;
    let i = { ...t };
    delete i.table;
    let o = Bl(this.client._runtimeDataModel, t.table) ?? (typeof i.modelName == "string" ? i.modelName : n);
    return o !== void 0 ? { ...i, modelName: o } : i;
  }
  sanitizeMessage(t) {
    return this.client._errorFormat && this.client._errorFormat !== "pretty" ? ut(t) : t;
  }
  unpack(t, r, n) {
    if (!t || (t.data && (t = t.data), !t)) return t;
    let i = Object.keys(t)[0], o = Object.values(t)[0], s = Rm(r), a = Wn(o, s), u = i === "queryRaw" ? Tn(a) : Ae(a);
    return n ? n(u) : u;
  }
  get [Symbol.toStringTag]() {
    return "RequestHandler";
  }
};
function vm(e11) {
  if (e11) {
    if (e11.kind === "batch") return { kind: "batch", options: { isolationLevel: e11.isolationLevel, maxWait: e11.maxWait, timeout: e11.timeout } };
    if (e11.kind === "itx") return { kind: "itx", options: Jl(e11) };
    $e(e11, "Unknown transaction kind");
  }
}
function Jl(e11) {
  return { id: e11.id, payload: e11.payload };
}
function Sm(e11, t) {
  return (0, Ql.hasBatchIndex)(e11) && (t == null ? void 0 : t.kind) === "batch" && e11.batchRequestIdx !== t.index;
}
function Am(e11) {
  return e11.code === "P2009" || e11.code === "P2012";
}
function Gl(e11) {
  if (e11.kind === "Union") return { kind: "Union", errors: e11.errors.map(Gl) };
  if (Array.isArray(e11.selectionPath)) {
    let [, ...t] = e11.selectionPath;
    return { ...e11, selectionPath: t };
  }
  return e11;
}
function Rm(e11) {
  let t = [];
  for (let r = 1; r < e11.length; r += 2) t.push(e11[r]);
  return t;
}
var Yi = mn;
var Zl = Pe(qn());
var j = class extends Error {
  constructor(t) {
    super(t + `
Read more at https://pris.ly/d/client-constructor`), this.name = "PrismaClientConstructorValidationError";
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientConstructorValidationError";
  }
};
Bt(j, "PrismaClientConstructorValidationError");
var zl = ["errorFormat", "adapter", "accelerateUrl", "log", "transactionOptions", "omit", "comments", "queryPlanCacheMaxSize", "__internal"], Hl = ["pretty", "colorless", "minimal"], Wl = ["info", "query", "warn", "error"], Cm = { adapter: () => {
}, accelerateUrl: (e11) => {
  if (e11 !== void 0) {
    if (typeof e11 != "string") throw new j(`Invalid value ${JSON.stringify(e11)} for "accelerateUrl" provided to PrismaClient constructor.`);
    if (e11.trim().length === 0) throw new j('"accelerateUrl" provided to PrismaClient constructor must be a non-empty string.');
  }
}, errorFormat: (e11) => {
  if (e11) {
    if (typeof e11 != "string") throw new j(`Invalid value ${JSON.stringify(e11)} for "errorFormat" provided to PrismaClient constructor.`);
    if (!Hl.includes(e11)) {
      let t = hr(e11, Hl);
      throw new j(`Invalid errorFormat ${e11} provided to PrismaClient constructor.${t}`);
    }
  }
}, log: (e11) => {
  if (!e11) return;
  if (!Array.isArray(e11)) throw new j(`Invalid value ${JSON.stringify(e11)} for "log" provided to PrismaClient constructor.`);
  function t(r) {
    if (typeof r == "string" && !Wl.includes(r)) {
      let n = hr(r, Wl);
      throw new j(`Invalid log level "${r}" provided to PrismaClient constructor.${n}`);
    }
  }
  for (let r of e11) {
    t(r);
    let n = { level: t, emit: (i) => {
      let o = ["stdout", "event"];
      if (!o.includes(i)) {
        let s = hr(i, o);
        throw new j(`Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`);
      }
    } };
    if (r && typeof r == "object") for (let [i, o] of Object.entries(r)) if (n[i]) n[i](o);
    else throw new j(`Invalid property ${i} for "log" provided to PrismaClient constructor`);
  }
}, transactionOptions: (e11) => {
  if (!e11) return;
  let t = e11.maxWait;
  if (t != null && t <= 0) throw new j(`Invalid value ${t} for maxWait in "transactionOptions" provided to PrismaClient constructor. maxWait needs to be greater than 0`);
  let r = e11.timeout;
  if (r != null && r <= 0) throw new j(`Invalid value ${r} for timeout in "transactionOptions" provided to PrismaClient constructor. timeout needs to be greater than 0`);
}, omit: (e11, t) => {
  if (typeof e11 != "object") throw new j('"omit" option is expected to be an object.');
  if (e11 === null) throw new j('"omit" option can not be `null`');
  let r = [];
  for (let [n, i] of Object.entries(e11)) {
    let o = Om(n, t.runtimeDataModel);
    if (!o) {
      r.push({ kind: "UnknownModel", modelKey: n });
      continue;
    }
    for (let [s, a] of Object.entries(i)) {
      let u = o.fields.find((m) => m.name === s);
      if (!u) {
        r.push({ kind: "UnknownField", modelKey: n, fieldName: s });
        continue;
      }
      if (u.relationName) {
        r.push({ kind: "RelationInOmit", modelKey: n, fieldName: s });
        continue;
      }
      typeof a != "boolean" && r.push({ kind: "InvalidFieldValue", modelKey: n, fieldName: s });
    }
  }
  if (r.length > 0) throw new j(Nm(e11, r));
}, queryPlanCacheMaxSize: (e11) => {
  if (e11 !== void 0) {
    if (typeof e11 != "number") throw new j(`Invalid value ${JSON.stringify(e11)} for "queryPlanCacheMaxSize" provided to PrismaClient constructor. Expected a number.`);
    if (!Number.isInteger(e11)) throw new j(`Invalid value ${e11} for "queryPlanCacheMaxSize" provided to PrismaClient constructor. Expected an integer.`);
    if (e11 < 0) throw new j(`Invalid value ${e11} for "queryPlanCacheMaxSize" provided to PrismaClient constructor. Cache size needs to be greater or equal to 0.`);
  }
}, comments: (e11) => {
  if (e11 !== void 0) {
    if (!Array.isArray(e11)) throw new j(`Invalid value ${JSON.stringify(e11)} for "comments" provided to PrismaClient constructor. Expected an array of SQL commenter plugins.`);
    for (let t = 0; t < e11.length; t++) if (typeof e11[t] != "function") throw new j(`Invalid value at index ${t} for "comments" provided to PrismaClient constructor. Each plugin must be a function.`);
  }
}, __internal: (e11) => {
  if (!e11) return;
  let t = ["debug", "engine", "configOverride"];
  if (typeof e11 != "object") throw new j(`Invalid value ${JSON.stringify(e11)} for "__internal" to PrismaClient constructor`);
  for (let [r] of Object.entries(e11)) if (!t.includes(r)) {
    let n = hr(r, t);
    throw new j(`Invalid property ${JSON.stringify(r)} for "__internal" provided to PrismaClient constructor.${n}`);
  }
} };
function Im(e11) {
  let t = e11.adapter !== void 0, r = e11.accelerateUrl !== void 0;
  if (t && r) throw new j('The "adapter" and "accelerateUrl" options are mutually exclusive. Please provide only one of them.');
  if (!t && !r) throw new j(`PrismaClient requires a driver adapter to connect to your database, but none was provided.

Pass a driver adapter to the PrismaClient constructor, for example:

  import { PrismaPg } from '@prisma/adapter-pg'
  import { PrismaClient } from './generated/prisma/client'

  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
  const prisma = new PrismaClient({ adapter })

Learn more about driver adapters: https://pris.ly/d/driver-adapters

If you use Prisma Accelerate instead of connecting to your database directly, pass \`accelerateUrl\` to the PrismaClient constructor instead of \`adapter\`.`);
}
function Xl(e11, t) {
  for (let [r, n] of Object.entries(e11)) {
    if (!zl.includes(r)) {
      let i = hr(r, zl);
      throw new j(`Unknown property ${r} provided to PrismaClient constructor.${i}`);
    }
    Cm[r](n, t);
  }
  Im(e11);
}
function hr(e11, t) {
  if (t.length === 0 || typeof e11 != "string") return "";
  let r = km(e11, t);
  return r ? ` Did you mean "${r}"?` : "";
}
function km(e11, t) {
  if (t.length === 0) return null;
  let r = t.map((i) => ({ value: i, distance: (0, Zl.default)(e11, i) }));
  r.sort((i, o) => i.distance < o.distance ? -1 : 1);
  let n = r[0];
  return n.distance < 3 ? n.value : null;
}
function Om(e11, t) {
  return Kl(t.models, e11) ?? Kl(t.types, e11);
}
function Kl(e11, t) {
  let r = Object.keys(e11).find((n) => qe(n) === t);
  if (r) return e11[r];
}
function Nm(e11, t) {
  var _a5, _b2, _c3, _d3;
  let r = bt(e11);
  for (let o of t) switch (o.kind) {
    case "UnknownModel":
      (_a5 = r.arguments.getField(o.modelKey)) == null ? void 0 : _a5.markAsError(), r.addErrorMessage(() => `Unknown model name: ${o.modelKey}.`);
      break;
    case "UnknownField":
      (_b2 = r.arguments.getDeepField([o.modelKey, o.fieldName])) == null ? void 0 : _b2.markAsError(), r.addErrorMessage(() => `Model "${o.modelKey}" does not have a field named "${o.fieldName}".`);
      break;
    case "RelationInOmit":
      (_c3 = r.arguments.getDeepField([o.modelKey, o.fieldName])) == null ? void 0 : _c3.markAsError(), r.addErrorMessage(() => 'Relations are already excluded by default and can not be specified in "omit".');
      break;
    case "InvalidFieldValue":
      (_d3 = r.arguments.getDeepFieldValue([o.modelKey, o.fieldName])) == null ? void 0 : _d3.markAsError(), r.addErrorMessage(() => "Omit field option value must be a boolean.");
      break;
  }
  let { message: n, args: i } = Mr(r, "colorless");
  return `Error validating "omit" option:

${i}

${n}`;
}
var Yl = dist;
function eu(e11) {
  return e11.length === 0 ? Promise.resolve([]) : new Promise((t, r) => {
    let n = new Array(e11.length), i = null, o = false, s = 0, a = () => {
      o || (s++, s === e11.length && (o = true, i ? r(i) : t(n)));
    }, u = (m) => {
      o || (o = true, r(m));
    };
    for (let m = 0; m < e11.length; m++) e11[m].then((P2) => {
      n[m] = P2, a();
    }, (P2) => {
      if (!(0, Yl.hasBatchIndex)(P2)) {
        u(P2);
        return;
      }
      P2.batchRequestIdx === m ? u(P2) : (i || (i = P2), a());
    });
  });
}
var kt = K("prisma:client");
typeof globalThis == "object" && (globalThis.NODE_CLIENT = true);
var Dm = { requestArgsToMiddlewareArgs: (e11) => e11, middlewareArgsToRequestArgs: (e11) => e11 }, su = Symbol.for("prisma.client.transaction.scope_context");
function tu(e11) {
  let r = e11[su];
  if (r === void 0) return { kind: "top-level" };
  if (Mm(r)) return r;
  throw new Error("Internal error: inconsistent transaction scope context.");
}
function Mm(e11) {
  if (typeof e11 != "object" || e11 === null) return false;
  let t = e11;
  return t.kind === "nested" && typeof t.txId == "string" && typeof t.scopeId == "string" && Fm(t.scopeState);
}
function Fm(e11) {
  return typeof e11 != "object" || e11 === null ? false : Array.isArray(e11.stack);
}
function _m2() {
  var _a5;
  return typeof ((_a5 = globalThis.crypto) == null ? void 0 : _a5.randomUUID) == "function" ? globalThis.crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
var $m = { id: 0, nextId() {
  return ++this.id;
} };
function au(e11) {
  class t {
    constructor(n) {
      __publicField(this, "_originalClient", this);
      __publicField(this, "_runtimeDataModel");
      __publicField(this, "_requestHandler");
      __publicField(this, "_connectionPromise");
      __publicField(this, "_disconnectionPromise");
      __publicField(this, "_engineConfig");
      __publicField(this, "_accelerateEngineConfig");
      __publicField(this, "_clientVersion");
      __publicField(this, "_errorFormat");
      __publicField(this, "_tracingHelper");
      __publicField(this, "_previewFeatures");
      __publicField(this, "_activeProvider");
      __publicField(this, "_globalOmit");
      __publicField(this, "_extensions");
      __publicField(this, "_engine");
      __publicField(this, "_appliedParent");
      __publicField(this, "_createPrismaPromise", Hi());
      __publicField(this, "$extends", Rs);
      var _a5, _b2, _c3, _d3, _e15;
      if (!n) throw new _.PrismaClientInitializationError(`PrismaClient was instantiated without any options. A driver adapter is required to connect to your database.

Pass a driver adapter to the PrismaClient constructor, for example:

  import { PrismaPg } from '@prisma/adapter-pg'
  import { PrismaClient } from './generated/prisma/client'

  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
  const prisma = new PrismaClient({ adapter })

Learn more about driver adapters: https://pris.ly/d/driver-adapters

If you use Prisma Accelerate instead of connecting to your database directly, pass \`accelerateUrl\` to the PrismaClient constructor instead of \`adapter\`.`, Yi);
      e11 = ((_b2 = (_a5 = n.__internal) == null ? void 0 : _a5.configOverride) == null ? void 0 : _b2.call(_a5, e11)) ?? e11, Xl(n, e11);
      let i = new ou.EventEmitter().on("error", () => {
      });
      this._extensions = Pt.empty(), this._previewFeatures = e11.previewFeatures, this._clientVersion = e11.clientVersion ?? Yi, this._activeProvider = e11.activeProvider, this._globalOmit = n == null ? void 0 : n.omit, this._tracingHelper = Vl();
      let o;
      if (n.adapter) {
        o = n.adapter;
        let s = e11.activeProvider === "postgresql" || e11.activeProvider === "cockroachdb" ? "postgres" : e11.activeProvider;
        if (o.provider !== s) throw new _.PrismaClientInitializationError(`The Driver Adapter \`${o.adapterName}\`, based on \`${o.provider}\`, is not compatible with the provider \`${s}\` specified in the Prisma schema.`, this._clientVersion);
      }
      try {
        let s = n ?? {}, u = (s.__internal ?? {}).debug === true;
        if (u && K.enable("prisma:client"), s.errorFormat ? this._errorFormat = s.errorFormat : process.env.NODE_ENV === "production" ? this._errorFormat = "minimal" : process.env.NO_COLOR ? this._errorFormat = "colorless" : this._errorFormat = "colorless", this._runtimeDataModel = e11.runtimeDataModel, this._engineConfig = { enableDebugLogs: u, logLevel: s.log && Ul(s.log), logQueries: s.log && !!(typeof s.log == "string" ? s.log === "query" : s.log.find((m) => typeof m == "string" ? m === "query" : m.level === "query")), compilerWasm: e11.compilerWasm, clientVersion: e11.clientVersion, previewFeatures: this._previewFeatures, activeProvider: e11.activeProvider, inlineSchema: e11.inlineSchema, tracingHelper: this._tracingHelper, transactionOptions: { maxWait: ((_c3 = s.transactionOptions) == null ? void 0 : _c3.maxWait) ?? 2e3, timeout: ((_d3 = s.transactionOptions) == null ? void 0 : _d3.timeout) ?? 5e3, isolationLevel: (_e15 = s.transactionOptions) == null ? void 0 : _e15.isolationLevel }, logEmitter: i, adapter: o, accelerateUrl: s.accelerateUrl, sqlCommenters: s.comments, parameterizationSchema: e11.parameterizationSchema, runtimeDataModel: e11.runtimeDataModel, queryPlanCacheMaxSize: n.queryPlanCacheMaxSize }, this._accelerateEngineConfig = Object.create(this._engineConfig), this._accelerateEngineConfig.accelerateUtils = { resolveDatasourceUrl: () => {
          if (s.accelerateUrl) return s.accelerateUrl;
          throw new _.PrismaClientInitializationError(`\`accelerateUrl\` is required when using \`@prisma/extension-accelerate\`:

new PrismaClient({
  accelerateUrl: "prisma://...",
}).$extends(withAccelerate())
`, e11.clientVersion);
        } }, kt("clientVersion", e11.clientVersion), this._engine = vl(this._engineConfig), this._requestHandler = new vn(this, i), s.log) for (let m of s.log) {
          let P2 = typeof m == "string" ? m : m.emit === "stdout" ? m.level : null;
          P2 && this.$on(P2, (T) => {
            Ut.log(`${Ut.tags[P2] ?? ""}`, T.message || T.query);
          });
        }
      } catch (s) {
        throw s.clientVersion = this._clientVersion, s;
      }
      return this._appliedParent = Yt(this);
    }
    get [Symbol.toStringTag]() {
      return "PrismaClient";
    }
    $on(n, i) {
      return n === "beforeExit" ? this._engine.onBeforeExit(i) : n && this._engineConfig.logEmitter.on(n, i), this;
    }
    $connect() {
      try {
        return this._engine.start();
      } catch (n) {
        throw n.clientVersion = this._clientVersion, n;
      }
    }
    async $disconnect() {
      try {
        await this._engine.stop();
      } catch (n) {
        throw n.clientVersion = this._clientVersion, n;
      } finally {
        yo();
      }
    }
    $executeRawInternal(n, i, o, s) {
      let a = this._activeProvider;
      return this._request({ action: "executeRaw", args: o, transaction: n, clientMethod: i, argsMapper: zi({ clientMethod: i, activeProvider: a, clientVersion: this._clientVersion }), callsite: je(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
    }
    $executeRaw(n, ...i) {
      return this._createPrismaPromise((o) => {
        if (n.raw !== void 0 || n.sql !== void 0) {
          let [s, a] = ru(n, i);
          return Gi(this._activeProvider, s.text, s.values, Array.isArray(n) ? "prisma.$executeRaw`<SQL>`" : "prisma.$executeRaw(sql`<SQL>`)"), this.$executeRawInternal(o, "$executeRaw", s, a);
        }
        throw new _.PrismaClientValidationError("`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n", { clientVersion: this._clientVersion });
      });
    }
    $executeRawUnsafe(n, ...i) {
      return this._createPrismaPromise((o) => (Gi(this._activeProvider, n, i, "prisma.$executeRawUnsafe(<SQL>, [...values])"), this.$executeRawInternal(o, "$executeRawUnsafe", [n, ...i])));
    }
    $runCommandRaw(n) {
      if (e11.activeProvider !== "mongodb") throw new _.PrismaClientValidationError(`The ${e11.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`, { clientVersion: this._clientVersion });
      return this._createPrismaPromise((i) => this._request({ args: n, clientMethod: "$runCommandRaw", dataPath: [], action: "runCommandRaw", argsMapper: Sl, callsite: je(this._errorFormat), transaction: i }));
    }
    async $queryRawInternal(n, i, o, s) {
      let a = this._activeProvider;
      return this._request({ action: "queryRaw", args: o, transaction: n, clientMethod: i, argsMapper: zi({ clientMethod: i, activeProvider: a, clientVersion: this._clientVersion }), callsite: je(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
    }
    $queryRaw(n, ...i) {
      return this._createPrismaPromise((o) => {
        if (n.raw !== void 0 || n.sql !== void 0) return this.$queryRawInternal(o, "$queryRaw", ...ru(n, i));
        throw new _.PrismaClientValidationError("`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n", { clientVersion: this._clientVersion });
      });
    }
    $queryRawTyped(n) {
      return this._createPrismaPromise((i) => {
        if (!this._hasPreviewFlag("typedSql")) throw new _.PrismaClientValidationError("`typedSql` preview feature must be enabled in order to access $queryRawTyped API", { clientVersion: this._clientVersion });
        return this.$queryRawInternal(i, "$queryRawTyped", n);
      });
    }
    $queryRawUnsafe(n, ...i) {
      return this._createPrismaPromise((o) => this.$queryRawInternal(o, "$queryRawUnsafe", [n, ...i]));
    }
    _transactionWithArray({ promises: n, options: i }) {
      let o = $m.nextId(), s = ql(n.length), a = n.map((u, m) => {
        var _a5;
        if ((u == null ? void 0 : u[Symbol.toStringTag]) !== "PrismaPromise") throw new Error("All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.");
        let P2 = (i == null ? void 0 : i.isolationLevel) ?? this._engineConfig.transactionOptions.isolationLevel, T = { kind: "batch", id: o, index: m, isolationLevel: P2, maxWait: (i == null ? void 0 : i.maxWait) ?? this._engineConfig.transactionOptions.maxWait, timeout: (i == null ? void 0 : i.timeout) ?? this._engineConfig.transactionOptions.timeout, lock: s };
        return ((_a5 = u.requestTransaction) == null ? void 0 : _a5.call(u, T)) ?? u;
      });
      return eu(a);
    }
    async _transactionWithCallback({ callback: n, options: i = {} }) {
      let o = tu(this), s = o.kind === "nested", a = s ? o.scopeState : { stack: [] }, u = a.stack, m = _m2();
      if (s && u.at(-1) !== o.scopeId) throw new Error("Concurrent nested transactions are not supported");
      u.push(m);
      let P2 = { traceparent: this._tracingHelper.getTraceParent() }, T = { maxWait: (i == null ? void 0 : i.maxWait) ?? this._engineConfig.transactionOptions.maxWait, timeout: (i == null ? void 0 : i.timeout) ?? this._engineConfig.transactionOptions.timeout, isolationLevel: (i == null ? void 0 : i.isolationLevel) ?? this._engineConfig.transactionOptions.isolationLevel, newTxId: s ? o.txId : void 0 }, S;
      try {
        S = await this._engine.transaction("start", P2, T);
      } catch (A) {
        throw u.at(-1) === m && u.pop(), A;
      }
      let I;
      try {
        let A = { kind: "itx", ...S };
        if (I = await n(this._createItxClient(A, m, a)), s) {
          if (u.at(-1) !== m) throw new Error("Nested transactions must be closed in reverse order of creation.");
        } else if (u.length !== 1) throw new Error("Cannot close transaction while a nested transaction is still active.");
        await this._engine.transaction("commit", P2, S);
      } catch (A) {
        let L = u.at(-1) !== m ? Math.max(1, u.length) : 1;
        for (let q = 0; q < L; q++) await this._engine.transaction("rollback", P2, S).catch((E) => {
          kt("rollback attempt %d/%d failed: %O", q + 1, L, E);
        });
        throw A;
      } finally {
        u.at(-1) === m ? u.pop() : u.length = 0;
      }
      return I;
    }
    _createItxClient(n, i, o) {
      let s = { kind: "nested", txId: n.id, scopeId: i, scopeState: o };
      return ve(Yt(ve(As(this), [ae("_appliedParent", () => this._appliedParent._createItxClient(n, i, o)), ae("_createPrismaPromise", () => Hi(n)), ae(su, () => s)])), [Et(Os)]);
    }
    $transaction(n, i) {
      var _a5;
      let o;
      typeof n == "function" ? ((_a5 = this._engineConfig.adapter) == null ? void 0 : _a5.adapterName) === "@prisma/adapter-d1" ? o = () => {
        throw new Error("Cloudflare D1 does not support interactive transactions. We recommend you to refactor your queries with that limitation in mind, and use batch transactions with `prisma.$transactions([])` where applicable.");
      } : e11.activeProvider === "mongodb" && tu(this).kind === "nested" ? o = () => {
        throw new _.PrismaClientValidationError(`The ${e11.activeProvider} provider does not support nested transactions`, { clientVersion: this._clientVersion });
      } : o = () => this._transactionWithCallback({ callback: n, options: i }) : o = () => this._transactionWithArray({ promises: n, options: i });
      let s = { name: "transaction", attributes: { method: "$transaction" } };
      return this._tracingHelper.runInChildSpan(s, o);
    }
    _request(n) {
      n.otelParentCtx = this._tracingHelper.getActiveContext();
      let i = n.middlewareArgsMapper ?? Dm, o = { args: i.requestArgsToMiddlewareArgs(n.args), dataPath: n.dataPath, runInTransaction: !!n.transaction, action: n.action, model: n.model }, s = { operation: { name: "operation", attributes: { method: o.action, model: o.model, name: o.model ? `${o.model}.${o.action}` : o.action } } }, a = async (u) => {
        let { runInTransaction: m, args: P2, ...T } = u, S = { ...n, ...T };
        P2 && (S.args = i.middlewareArgsToRequestArgs(P2)), n.transaction !== void 0 && m === false && delete S.transaction;
        let I = await Fs(this, S);
        if (!S.model) return I;
        let A = qs({ dataPath: S.dataPath, modelName: S.model, args: S.args, runtimeDataModel: this._runtimeDataModel });
        return ks({ result: I, modelName: A.modelName, args: A.args, extensions: this._extensions, runtimeDataModel: this._runtimeDataModel, globalOmit: this._globalOmit });
      };
      return this._tracingHelper.runInChildSpan(s.operation, () => new iu.AsyncResource("prisma-client-request").runInAsyncScope(() => a(o)));
    }
    async _executeRequest({ args: n, clientMethod: i, dataPath: o, callsite: s, action: a, model: u, argsMapper: m, transaction: P2, unpacker: T, otelParentCtx: S, customDataProxyFetch: I }) {
      try {
        n = m ? m(n) : n;
        let A = { name: "serialize" }, M = this._tracingHelper.runInChildSpan(A, () => Vr({ modelName: u, runtimeDataModel: this._runtimeDataModel, action: a, args: n, clientMethod: i, callsite: s, extensions: this._extensions, errorFormat: this._errorFormat, clientVersion: this._clientVersion, previewFeatures: this._previewFeatures, globalOmit: this._globalOmit }));
        return K.enabled("prisma:client") && (kt("Prisma Client call:"), kt(`prisma.${i}(${gs(n)})`), kt("Generated request:"), kt(JSON.stringify(M, null, 2) + `
`)), (P2 == null ? void 0 : P2.kind) === "batch" && await P2.lock, this._requestHandler.request({ protocolQuery: M, modelName: u, action: a, clientMethod: i, dataPath: o, callsite: s, args: n, extensions: this._extensions, transaction: P2, unpacker: T, otelParentCtx: S, otelChildCtx: this._tracingHelper.getActiveContext(), globalOmit: this._globalOmit, customDataProxyFetch: I });
      } catch (A) {
        throw A.clientVersion = this._clientVersion, A;
      }
    }
    _hasPreviewFlag(n) {
      var _a5;
      return !!((_a5 = this._engineConfig.previewFeatures) == null ? void 0 : _a5.includes(n));
    }
  }
  return t;
}
function ru(e11, t) {
  return Lm(e11) ? [new nu.Sql(e11, t), Dl] : [e11, Ml];
}
function Lm(e11) {
  return Array.isArray(e11) && Array.isArray(e11.raw);
}
var Vm = /* @__PURE__ */ new Set(["toJSON", "$$typeof", "asymmetricMatch", Symbol.iterator, Symbol.toStringTag, Symbol.isConcatSpreadable, Symbol.toPrimitive]);
function lu(e11) {
  return new Proxy(e11, { get(t, r) {
    if (r in t) return t[r];
    if (!Vm.has(r)) throw new TypeError(`Invalid enum value: ${String(r)}`);
  } });
}
var qm = () => {
  var _a5, _b2;
  return ((_b2 = (_a5 = globalThis.process) == null ? void 0 : _a5.release) == null ? void 0 : _b2.name) === "node";
}, Um = () => {
  var _a5, _b2;
  return !!globalThis.Bun || !!((_b2 = (_a5 = globalThis.process) == null ? void 0 : _a5.versions) == null ? void 0 : _b2.bun);
}, jm = () => !!globalThis.Deno, Bm = () => typeof globalThis.Netlify == "object", Qm = () => typeof globalThis.EdgeRuntime == "object", Jm = () => {
  var _a5;
  return ((_a5 = globalThis.navigator) == null ? void 0 : _a5.userAgent) === "Cloudflare-Workers";
};
function Gm() {
  return [[Bm, "netlify"], [Qm, "edge-light"], [Jm, "workerd"], [jm, "deno"], [Um, "bun"], [qm, "node"]].flatMap((r) => r[0]() ? [r[1]] : []).at(0) ?? "";
}
var zm = { node: "Node.js", workerd: "Cloudflare Workers", deno: "Deno and Deno Deploy", netlify: "Netlify Edge Functions", "edge-light": "Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)" };
function uu() {
  let e11 = Gm();
  return { id: e11, prettyName: zm[e11] || e11, isEdge: ["workerd", "deno", "netlify", "edge-light"].includes(e11) };
}
var _ = dist, Fe = dist, ee = dist, cu = dist;
const config$1 = {
  "previewFeatures": [],
  "clientVersion": "7.10.1",
  "engineVersion": "d1b3f377ca835d73fd50954a5e22128b9ebdd6b8",
  "activeProvider": "sqlite",
  "inlineSchema": 'generator client {\n  provider = "prisma-client"\n  output   = "../electron/generated/prisma"\n}\n\ndatasource db {\n  provider = "sqlite"\n}\n\nmodel Person {\n  id        String   @id @default(uuid())\n  cpf       String   @unique\n  name      String\n  email     String   @unique\n  createdAt DateTime @default(now()) @map("created_at")\n  updatedAt DateTime @updatedAt @map("updated_at")\n\n  librarian Librarian?\n  student   Student?\n  professor Professor?\n\n  registrationLogs RegistrationLog[]\n\n  @@map("people")\n}\n\nmodel Librarian {\n  id                  String    @id @default(uuid())\n  personId            String    @unique @map("person_id")\n  accessCode          String    @unique @map("access_code")\n  passwordHash        String    @map("password_hash")\n  isActive            Boolean   @default(true) @map("is_active")\n  mustChangePassword  Boolean   @default(true) @map("must_change_password")\n  failedLoginAttempts Int       @default(0) @map("failed_login_attempts")\n  lastFailedLoginAt   DateTime? @map("last_failed_login_at")\n  lockedUntil         DateTime? @map("locked_until")\n  createdAt           DateTime  @default(now()) @map("created_at")\n  updatedAt           DateTime  @updatedAt @map("updated_at")\n\n  person                  Person                  @relation(fields: [personId], references: [id], onDelete: Restrict)\n  accessLogs              AccessLog[]\n  registrationsMade       RegistrationLog[]       @relation("RegistrationCreatedBy")\n  authorRegistrationsMade RegistrationAuthorLog[] @relation("AuthorRegistrationCreatedBy")\n\n  @@map("librarians")\n}\n\nmodel Student {\n  id                 String   @id @default(uuid())\n  personId           String   @unique @map("person_id")\n  registrationNumber String   @unique @map("registration_number")\n  course             String\n  isActive           Boolean  @default(true) @map("is_active")\n  createdAt          DateTime @default(now()) @map("created_at")\n  updatedAt          DateTime @updatedAt @map("updated_at")\n\n  person Person @relation(fields: [personId], references: [id], onDelete: Restrict)\n\n  @@map("students")\n}\n\nmodel Professor {\n  id                 String   @id @default(uuid())\n  personId           String   @unique @map("person_id")\n  department         String\n  registrationNumber String   @unique @map("registration_number")\n  isActive           Boolean  @default(true) @map("is_active")\n  createdAt          DateTime @default(now()) @map("created_at")\n  updatedAt          DateTime @updatedAt @map("updated_at")\n\n  person Person @relation(fields: [personId], references: [id], onDelete: Restrict)\n\n  @@map("professors")\n}\n\nmodel AccessLog {\n  id                  String   @id @default(uuid())\n  librarianId         String?  @map("librarian_id")\n  attemptedAccessCode String   @map("attempted_access_code")\n  success             Boolean\n  failureReason       String?  @map("failure_reason")\n  createdAt           DateTime @default(now()) @map("created_at")\n\n  librarian Librarian? @relation(fields: [librarianId], references: [id], onDelete: SetNull)\n\n  @@map("access_logs")\n}\n\nmodel RegistrationLog {\n  id                   String   @id @default(uuid())\n  personId             String   @map("person_id")\n  createdByLibrarianId String?  @map("created_by_librarian_id")\n  createdAt            DateTime @default(now()) @map("created_at")\n\n  person             Person     @relation(fields: [personId], references: [id], onDelete: Restrict)\n  createdByLibrarian Librarian? @relation("RegistrationCreatedBy", fields: [createdByLibrarianId], references: [id], onDelete: Restrict)\n\n  @@index([personId])\n  @@index([createdByLibrarianId, createdAt])\n  @@map("registration_logs")\n}\n\nmodel Author {\n  id          String    @id @default(uuid())\n  name        String\n  nationality String\n  pseudonym   String?\n  dateOfBirth DateTime? @map("date_of_birth")\n  dateOfDeath DateTime? @map("date_of_death")\n  biography   String?\n  isActive    Boolean   @default(true) @map("is_active")\n\n  createdAt DateTime @default(now()) @map("created_at")\n  updatedAt DateTime @updatedAt @map("updated_at")\n\n  registrationLogs RegistrationAuthorLog[]\n\n  @@map("authors")\n}\n\nmodel RegistrationAuthorLog {\n  id                   String   @id @default(uuid())\n  authorId             String   @map("author_id")\n  createdByLibrarianId String   @map("created_by_librarian_id")\n  createdAt            DateTime @default(now()) @map("created_at")\n\n  author             Author    @relation(fields: [authorId], references: [id], onDelete: Restrict)\n  createdByLibrarian Librarian @relation("AuthorRegistrationCreatedBy", fields: [createdByLibrarianId], references: [id], onDelete: Restrict)\n\n  @@index([authorId])\n  @@index([createdByLibrarianId, createdAt])\n  @@map("registration_author_logs")\n}\n',
  "runtimeDataModel": {
    "models": {},
    "enums": {},
    "types": {}
  },
  "parameterizationSchema": {
    "strings": [],
    "graph": ""
  }
};
config$1.runtimeDataModel = JSON.parse('{"models":{"Person":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"cpf","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime","dbName":"created_at"},{"name":"updatedAt","kind":"scalar","type":"DateTime","dbName":"updated_at"},{"name":"librarian","kind":"object","type":"Librarian","relationName":"LibrarianToPerson"},{"name":"student","kind":"object","type":"Student","relationName":"PersonToStudent"},{"name":"professor","kind":"object","type":"Professor","relationName":"PersonToProfessor"},{"name":"registrationLogs","kind":"object","type":"RegistrationLog","relationName":"PersonToRegistrationLog"}],"dbName":"people","schema":null},"Librarian":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"personId","kind":"scalar","type":"String","dbName":"person_id"},{"name":"accessCode","kind":"scalar","type":"String","dbName":"access_code"},{"name":"passwordHash","kind":"scalar","type":"String","dbName":"password_hash"},{"name":"isActive","kind":"scalar","type":"Boolean","dbName":"is_active"},{"name":"mustChangePassword","kind":"scalar","type":"Boolean","dbName":"must_change_password"},{"name":"failedLoginAttempts","kind":"scalar","type":"Int","dbName":"failed_login_attempts"},{"name":"lastFailedLoginAt","kind":"scalar","type":"DateTime","dbName":"last_failed_login_at"},{"name":"lockedUntil","kind":"scalar","type":"DateTime","dbName":"locked_until"},{"name":"createdAt","kind":"scalar","type":"DateTime","dbName":"created_at"},{"name":"updatedAt","kind":"scalar","type":"DateTime","dbName":"updated_at"},{"name":"person","kind":"object","type":"Person","relationName":"LibrarianToPerson"},{"name":"accessLogs","kind":"object","type":"AccessLog","relationName":"AccessLogToLibrarian"},{"name":"registrationsMade","kind":"object","type":"RegistrationLog","relationName":"RegistrationCreatedBy"},{"name":"authorRegistrationsMade","kind":"object","type":"RegistrationAuthorLog","relationName":"AuthorRegistrationCreatedBy"}],"dbName":"librarians","schema":null},"Student":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"personId","kind":"scalar","type":"String","dbName":"person_id"},{"name":"registrationNumber","kind":"scalar","type":"String","dbName":"registration_number"},{"name":"course","kind":"scalar","type":"String"},{"name":"isActive","kind":"scalar","type":"Boolean","dbName":"is_active"},{"name":"createdAt","kind":"scalar","type":"DateTime","dbName":"created_at"},{"name":"updatedAt","kind":"scalar","type":"DateTime","dbName":"updated_at"},{"name":"person","kind":"object","type":"Person","relationName":"PersonToStudent"}],"dbName":"students","schema":null},"Professor":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"personId","kind":"scalar","type":"String","dbName":"person_id"},{"name":"department","kind":"scalar","type":"String"},{"name":"registrationNumber","kind":"scalar","type":"String","dbName":"registration_number"},{"name":"isActive","kind":"scalar","type":"Boolean","dbName":"is_active"},{"name":"createdAt","kind":"scalar","type":"DateTime","dbName":"created_at"},{"name":"updatedAt","kind":"scalar","type":"DateTime","dbName":"updated_at"},{"name":"person","kind":"object","type":"Person","relationName":"PersonToProfessor"}],"dbName":"professors","schema":null},"AccessLog":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"librarianId","kind":"scalar","type":"String","dbName":"librarian_id"},{"name":"attemptedAccessCode","kind":"scalar","type":"String","dbName":"attempted_access_code"},{"name":"success","kind":"scalar","type":"Boolean"},{"name":"failureReason","kind":"scalar","type":"String","dbName":"failure_reason"},{"name":"createdAt","kind":"scalar","type":"DateTime","dbName":"created_at"},{"name":"librarian","kind":"object","type":"Librarian","relationName":"AccessLogToLibrarian"}],"dbName":"access_logs","schema":null},"RegistrationLog":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"personId","kind":"scalar","type":"String","dbName":"person_id"},{"name":"createdByLibrarianId","kind":"scalar","type":"String","dbName":"created_by_librarian_id"},{"name":"createdAt","kind":"scalar","type":"DateTime","dbName":"created_at"},{"name":"person","kind":"object","type":"Person","relationName":"PersonToRegistrationLog"},{"name":"createdByLibrarian","kind":"object","type":"Librarian","relationName":"RegistrationCreatedBy"}],"dbName":"registration_logs","schema":null},"Author":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"nationality","kind":"scalar","type":"String"},{"name":"pseudonym","kind":"scalar","type":"String"},{"name":"dateOfBirth","kind":"scalar","type":"DateTime","dbName":"date_of_birth"},{"name":"dateOfDeath","kind":"scalar","type":"DateTime","dbName":"date_of_death"},{"name":"biography","kind":"scalar","type":"String"},{"name":"isActive","kind":"scalar","type":"Boolean","dbName":"is_active"},{"name":"createdAt","kind":"scalar","type":"DateTime","dbName":"created_at"},{"name":"updatedAt","kind":"scalar","type":"DateTime","dbName":"updated_at"},{"name":"registrationLogs","kind":"object","type":"RegistrationAuthorLog","relationName":"AuthorToRegistrationAuthorLog"}],"dbName":"authors","schema":null},"RegistrationAuthorLog":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"authorId","kind":"scalar","type":"String","dbName":"author_id"},{"name":"createdByLibrarianId","kind":"scalar","type":"String","dbName":"created_by_librarian_id"},{"name":"createdAt","kind":"scalar","type":"DateTime","dbName":"created_at"},{"name":"author","kind":"object","type":"Author","relationName":"AuthorToRegistrationAuthorLog"},{"name":"createdByLibrarian","kind":"object","type":"Librarian","relationName":"AuthorRegistrationCreatedBy"}],"dbName":"registration_author_logs","schema":null}},"enums":{},"types":{}}');
config$1.parameterizationSchema = {
  strings: JSON.parse('["where","person","orderBy","cursor","librarian","accessLogs","createdByLibrarian","registrationsMade","registrationLogs","_count","author","authorRegistrationsMade","student","professor","Person.findUnique","Person.findUniqueOrThrow","Person.findFirst","Person.findFirstOrThrow","Person.findMany","data","Person.createOne","Person.createMany","Person.createManyAndReturn","Person.updateOne","Person.updateMany","Person.updateManyAndReturn","create","update","Person.upsertOne","Person.deleteOne","Person.deleteMany","having","_min","_max","Person.groupBy","Person.aggregate","Librarian.findUnique","Librarian.findUniqueOrThrow","Librarian.findFirst","Librarian.findFirstOrThrow","Librarian.findMany","Librarian.createOne","Librarian.createMany","Librarian.createManyAndReturn","Librarian.updateOne","Librarian.updateMany","Librarian.updateManyAndReturn","Librarian.upsertOne","Librarian.deleteOne","Librarian.deleteMany","_avg","_sum","Librarian.groupBy","Librarian.aggregate","Student.findUnique","Student.findUniqueOrThrow","Student.findFirst","Student.findFirstOrThrow","Student.findMany","Student.createOne","Student.createMany","Student.createManyAndReturn","Student.updateOne","Student.updateMany","Student.updateManyAndReturn","Student.upsertOne","Student.deleteOne","Student.deleteMany","Student.groupBy","Student.aggregate","Professor.findUnique","Professor.findUniqueOrThrow","Professor.findFirst","Professor.findFirstOrThrow","Professor.findMany","Professor.createOne","Professor.createMany","Professor.createManyAndReturn","Professor.updateOne","Professor.updateMany","Professor.updateManyAndReturn","Professor.upsertOne","Professor.deleteOne","Professor.deleteMany","Professor.groupBy","Professor.aggregate","AccessLog.findUnique","AccessLog.findUniqueOrThrow","AccessLog.findFirst","AccessLog.findFirstOrThrow","AccessLog.findMany","AccessLog.createOne","AccessLog.createMany","AccessLog.createManyAndReturn","AccessLog.updateOne","AccessLog.updateMany","AccessLog.updateManyAndReturn","AccessLog.upsertOne","AccessLog.deleteOne","AccessLog.deleteMany","AccessLog.groupBy","AccessLog.aggregate","RegistrationLog.findUnique","RegistrationLog.findUniqueOrThrow","RegistrationLog.findFirst","RegistrationLog.findFirstOrThrow","RegistrationLog.findMany","RegistrationLog.createOne","RegistrationLog.createMany","RegistrationLog.createManyAndReturn","RegistrationLog.updateOne","RegistrationLog.updateMany","RegistrationLog.updateManyAndReturn","RegistrationLog.upsertOne","RegistrationLog.deleteOne","RegistrationLog.deleteMany","RegistrationLog.groupBy","RegistrationLog.aggregate","Author.findUnique","Author.findUniqueOrThrow","Author.findFirst","Author.findFirstOrThrow","Author.findMany","Author.createOne","Author.createMany","Author.createManyAndReturn","Author.updateOne","Author.updateMany","Author.updateManyAndReturn","Author.upsertOne","Author.deleteOne","Author.deleteMany","Author.groupBy","Author.aggregate","RegistrationAuthorLog.findUnique","RegistrationAuthorLog.findUniqueOrThrow","RegistrationAuthorLog.findFirst","RegistrationAuthorLog.findFirstOrThrow","RegistrationAuthorLog.findMany","RegistrationAuthorLog.createOne","RegistrationAuthorLog.createMany","RegistrationAuthorLog.createManyAndReturn","RegistrationAuthorLog.updateOne","RegistrationAuthorLog.updateMany","RegistrationAuthorLog.updateManyAndReturn","RegistrationAuthorLog.upsertOne","RegistrationAuthorLog.deleteOne","RegistrationAuthorLog.deleteMany","RegistrationAuthorLog.groupBy","RegistrationAuthorLog.aggregate","AND","OR","NOT","id","authorId","createdByLibrarianId","createdAt","equals","in","notIn","lt","lte","gt","gte","not","contains","startsWith","endsWith","name","nationality","pseudonym","dateOfBirth","dateOfDeath","biography","isActive","updatedAt","every","some","none","personId","librarianId","attemptedAccessCode","success","failureReason","department","registrationNumber","course","accessCode","passwordHash","mustChangePassword","failedLoginAttempts","lastFailedLoginAt","lockedUntil","cpf","email","is","isNot","connectOrCreate","upsert","createMany","set","disconnect","delete","connect","updateMany","deleteMany","increment","decrement","multiply","divide"]'),
  graph: "yQNGgAENBAAAhwIAIAgAAIQCACAMAACIAgAgDQAAiQIAIJYBAACGAgAwlwEAAB8AEJgBAACGAgAwmQEBAAAAAZwBQAD0AQAhqAEBAPABACGvAUAA9AEAIcEBAQAAAAHCAQEAAAABAQAAAAEAIBIBAAD6AQAgBQAAgwIAIAcAAIQCACALAAD1AQAglgEAAIECADCXAQAAAwAQmAEAAIECADCZAQEA8AEAIZwBQAD0AQAhrgEgAPMBACGvAUAA9AEAIbMBAQDwAQAhuwEBAPABACG8AQEA8AEAIb0BIADzAQAhvgECAIICACG_AUAA8gEAIcABQADyAQAhAQAAAAMAIAoEAACHAgAglgEAAI4CADCXAQAABQAQmAEAAI4CADCZAQEA8AEAIZwBQAD0AQAhtAEBAPEBACG1AQEA8AEAIbYBIADzAQAhtwEBAPEBACEDBAAAmQMAILQBAACYAgAgtwEAAJgCACAKBAAAhwIAIJYBAACOAgAwlwEAAAUAEJgBAACOAgAwmQEBAAAAAZwBQAD0AQAhtAEBAPEBACG1AQEA8AEAIbYBIADzAQAhtwEBAPEBACEDAAAABQAgAgAABgAwAwAABwAgAQAAAAMAIAkBAAD6AQAgBgAAhwIAIJYBAACNAgAwlwEAAAoAEJgBAACNAgAwmQEBAPABACGbAQEA8QEAIZwBQAD0AQAhswEBAPABACEDAQAAvwIAIAYAAJkDACCbAQAAmAIAIAkBAAD6AQAgBgAAhwIAIJYBAACNAgAwlwEAAAoAEJgBAACNAgAwmQEBAAAAAZsBAQDxAQAhnAFAAPQBACGzAQEA8AEAIQMAAAAKACACAAALADADAAAMACABAAAAAwAgCQYAAIwCACAKAACLAgAglgEAAIoCADCXAQAADwAQmAEAAIoCADCZAQEA8AEAIZoBAQDwAQAhmwEBAPABACGcAUAA9AEAIQIGAACZAwAgCgAAnAMAIAkGAACMAgAgCgAAiwIAIJYBAACKAgAwlwEAAA8AEJgBAACKAgAwmQEBAAAAAZoBAQDwAQAhmwEBAPABACGcAUAA9AEAIQMAAAAPACACAAAQADADAAARACADAAAADwAgAgAAEAAwAwAAEQAgAQAAAA8AIAEAAAAFACABAAAACgAgAQAAAA8AIAsBAAD6AQAglgEAAPwBADCXAQAAGAAQmAEAAPwBADCZAQEA8AEAIZwBQAD0AQAhrgEgAPMBACGvAUAA9AEAIbMBAQDwAQAhuQEBAPABACG6AQEA8AEAIQEAAAAYACALAQAA-gEAIJYBAAD5AQAwlwEAABoAEJgBAAD5AQAwmQEBAPABACGcAUAA9AEAIa4BIADzAQAhrwFAAPQBACGzAQEA8AEAIbgBAQDwAQAhuQEBAPABACEBAAAAGgAgAwAAAAoAIAIAAAsAMAMAAAwAIAEAAAAKACABAAAAAQAgDQQAAIcCACAIAACEAgAgDAAAiAIAIA0AAIkCACCWAQAAhgIAMJcBAAAfABCYAQAAhgIAMJkBAQDwAQAhnAFAAPQBACGoAQEA8AEAIa8BQAD0AQAhwQEBAPABACHCAQEA8AEAIQQEAACZAwAgCAAA9QIAIAwAAJoDACANAACbAwAgAwAAAB8AIAIAACAAMAMAAAEAIAMAAAAfACACAAAgADADAAABACADAAAAHwAgAgAAIAAwAwAAAQAgCgQAAJUDACAIAACYAwAgDAAAlgMAIA0AAJcDACCZAQEAAAABnAFAAAAAAagBAQAAAAGvAUAAAAABwQEBAAAAAcIBAQAAAAEBEwAAJAAgBpkBAQAAAAGcAUAAAAABqAEBAAAAAa8BQAAAAAHBAQEAAAABwgEBAAAAAQETAAAmADABEwAAJgAwCgQAAPkCACAIAAD8AgAgDAAA-gIAIA0AAPsCACCZAQEAkgIAIZwBQACTAgAhqAEBAJICACGvAUAAkwIAIcEBAQCSAgAhwgEBAJICACECAAAAAQAgEwAAKQAgBpkBAQCSAgAhnAFAAJMCACGoAQEAkgIAIa8BQACTAgAhwQEBAJICACHCAQEAkgIAIQIAAAAfACATAAArACACAAAAHwAgEwAAKwAgAwAAAAEAIBoAACQAIBsAACkAIAEAAAABACABAAAAHwAgAwkAAPYCACAgAAD4AgAgIQAA9wIAIAmWAQAAhQIAMJcBAAAyABCYAQAAhQIAMJkBAQDdAQAhnAFAAN4BACGoAQEA3QEAIa8BQADeAQAhwQEBAN0BACHCAQEA3QEAIQMAAAAfACACAAAxADAfAAAyACADAAAAHwAgAgAAIAAwAwAAAQAgEgEAAPoBACAFAACDAgAgBwAAhAIAIAsAAPUBACCWAQAAgQIAMJcBAAADABCYAQAAgQIAMJkBAQAAAAGcAUAA9AEAIa4BIADzAQAhrwFAAPQBACGzAQEAAAABuwEBAAAAAbwBAQDwAQAhvQEgAPMBACG-AQIAggIAIb8BQADyAQAhwAFAAPIBACEBAAAANQAgAQAAADUAIAYBAAC_AgAgBQAA9AIAIAcAAPUCACALAACtAgAgvwEAAJgCACDAAQAAmAIAIAMAAAADACACAAA4ADADAAA1ACADAAAAAwAgAgAAOAAwAwAANQAgAwAAAAMAIAIAADgAMAMAADUAIA8BAADwAgAgBQAA8QIAIAcAAPICACALAADzAgAgmQEBAAAAAZwBQAAAAAGuASAAAAABrwFAAAAAAbMBAQAAAAG7AQEAAAABvAEBAAAAAb0BIAAAAAG-AQIAAAABvwFAAAAAAcABQAAAAAEBEwAAPAAgC5kBAQAAAAGcAUAAAAABrgEgAAAAAa8BQAAAAAGzAQEAAAABuwEBAAAAAbwBAQAAAAG9ASAAAAABvgECAAAAAb8BQAAAAAHAAUAAAAABARMAAD4AMAETAAA-ADAPAQAAywIAIAUAAMwCACAHAADNAgAgCwAAzgIAIJkBAQCSAgAhnAFAAJMCACGuASAAngIAIa8BQACTAgAhswEBAJICACG7AQEAkgIAIbwBAQCSAgAhvQEgAJ4CACG-AQIAygIAIb8BQACdAgAhwAFAAJ0CACECAAAANQAgEwAAQQAgC5kBAQCSAgAhnAFAAJMCACGuASAAngIAIa8BQACTAgAhswEBAJICACG7AQEAkgIAIbwBAQCSAgAhvQEgAJ4CACG-AQIAygIAIb8BQACdAgAhwAFAAJ0CACECAAAAAwAgEwAAQwAgAgAAAAMAIBMAAEMAIAMAAAA1ACAaAAA8ACAbAABBACABAAAANQAgAQAAAAMAIAcJAADFAgAgIAAAyAIAICEAAMcCACAyAADGAgAgMwAAyQIAIL8BAACYAgAgwAEAAJgCACAOlgEAAP0BADCXAQAASgAQmAEAAP0BADCZAQEA3QEAIZwBQADeAQAhrgEgAOcBACGvAUAA3gEAIbMBAQDdAQAhuwEBAN0BACG8AQEA3QEAIb0BIADnAQAhvgECAP4BACG_AUAA5gEAIcABQADmAQAhAwAAAAMAIAIAAEkAMB8AAEoAIAMAAAADACACAAA4ADADAAA1ACALAQAA-gEAIJYBAAD8AQAwlwEAABgAEJgBAAD8AQAwmQEBAAAAAZwBQAD0AQAhrgEgAPMBACGvAUAA9AEAIbMBAQAAAAG5AQEAAAABugEBAPABACEBAAAATQAgAQAAAE0AIAEBAAC_AgAgAwAAABgAIAIAAFAAMAMAAE0AIAMAAAAYACACAABQADADAABNACADAAAAGAAgAgAAUAAwAwAATQAgCAEAAMQCACCZAQEAAAABnAFAAAAAAa4BIAAAAAGvAUAAAAABswEBAAAAAbkBAQAAAAG6AQEAAAABARMAAFQAIAeZAQEAAAABnAFAAAAAAa4BIAAAAAGvAUAAAAABswEBAAAAAbkBAQAAAAG6AQEAAAABARMAAFYAMAETAABWADAIAQAAwwIAIJkBAQCSAgAhnAFAAJMCACGuASAAngIAIa8BQACTAgAhswEBAJICACG5AQEAkgIAIboBAQCSAgAhAgAAAE0AIBMAAFkAIAeZAQEAkgIAIZwBQACTAgAhrgEgAJ4CACGvAUAAkwIAIbMBAQCSAgAhuQEBAJICACG6AQEAkgIAIQIAAAAYACATAABbACACAAAAGAAgEwAAWwAgAwAAAE0AIBoAAFQAIBsAAFkAIAEAAABNACABAAAAGAAgAwkAAMACACAgAADCAgAgIQAAwQIAIAqWAQAA-wEAMJcBAABiABCYAQAA-wEAMJkBAQDdAQAhnAFAAN4BACGuASAA5wEAIa8BQADeAQAhswEBAN0BACG5AQEA3QEAIboBAQDdAQAhAwAAABgAIAIAAGEAMB8AAGIAIAMAAAAYACACAABQADADAABNACALAQAA-gEAIJYBAAD5AQAwlwEAABoAEJgBAAD5AQAwmQEBAAAAAZwBQAD0AQAhrgEgAPMBACGvAUAA9AEAIbMBAQAAAAG4AQEA8AEAIbkBAQAAAAEBAAAAZQAgAQAAAGUAIAEBAAC_AgAgAwAAABoAIAIAAGgAMAMAAGUAIAMAAAAaACACAABoADADAABlACADAAAAGgAgAgAAaAAwAwAAZQAgCAEAAL4CACCZAQEAAAABnAFAAAAAAa4BIAAAAAGvAUAAAAABswEBAAAAAbgBAQAAAAG5AQEAAAABARMAAGwAIAeZAQEAAAABnAFAAAAAAa4BIAAAAAGvAUAAAAABswEBAAAAAbgBAQAAAAG5AQEAAAABARMAAG4AMAETAABuADAIAQAAvQIAIJkBAQCSAgAhnAFAAJMCACGuASAAngIAIa8BQACTAgAhswEBAJICACG4AQEAkgIAIbkBAQCSAgAhAgAAAGUAIBMAAHEAIAeZAQEAkgIAIZwBQACTAgAhrgEgAJ4CACGvAUAAkwIAIbMBAQCSAgAhuAEBAJICACG5AQEAkgIAIQIAAAAaACATAABzACACAAAAGgAgEwAAcwAgAwAAAGUAIBoAAGwAIBsAAHEAIAEAAABlACABAAAAGgAgAwkAALoCACAgAAC8AgAgIQAAuwIAIAqWAQAA-AEAMJcBAAB6ABCYAQAA-AEAMJkBAQDdAQAhnAFAAN4BACGuASAA5wEAIa8BQADeAQAhswEBAN0BACG4AQEA3QEAIbkBAQDdAQAhAwAAABoAIAIAAHkAMB8AAHoAIAMAAAAaACACAABoADADAABlACABAAAABwAgAQAAAAcAIAMAAAAFACACAAAGADADAAAHACADAAAABQAgAgAABgAwAwAABwAgAwAAAAUAIAIAAAYAMAMAAAcAIAcEAAC5AgAgmQEBAAAAAZwBQAAAAAG0AQEAAAABtQEBAAAAAbYBIAAAAAG3AQEAAAABARMAAIIBACAGmQEBAAAAAZwBQAAAAAG0AQEAAAABtQEBAAAAAbYBIAAAAAG3AQEAAAABARMAAIQBADABEwAAhAEAMAEAAAADACAHBAAAuAIAIJkBAQCSAgAhnAFAAJMCACG0AQEAnAIAIbUBAQCSAgAhtgEgAJ4CACG3AQEAnAIAIQIAAAAHACATAACIAQAgBpkBAQCSAgAhnAFAAJMCACG0AQEAnAIAIbUBAQCSAgAhtgEgAJ4CACG3AQEAnAIAIQIAAAAFACATAACKAQAgAgAAAAUAIBMAAIoBACABAAAAAwAgAwAAAAcAIBoAAIIBACAbAACIAQAgAQAAAAcAIAEAAAAFACAFCQAAtQIAICAAALcCACAhAAC2AgAgtAEAAJgCACC3AQAAmAIAIAmWAQAA9wEAMJcBAACSAQAQmAEAAPcBADCZAQEA3QEAIZwBQADeAQAhtAEBAOUBACG1AQEA3QEAIbYBIADnAQAhtwEBAOUBACEDAAAABQAgAgAAkQEAMB8AAJIBACADAAAABQAgAgAABgAwAwAABwAgAQAAAAwAIAEAAAAMACADAAAACgAgAgAACwAwAwAADAAgAwAAAAoAIAIAAAsAMAMAAAwAIAMAAAAKACACAAALADADAAAMACAGAQAAswIAIAYAALQCACCZAQEAAAABmwEBAAAAAZwBQAAAAAGzAQEAAAABARMAAJoBACAEmQEBAAAAAZsBAQAAAAGcAUAAAAABswEBAAAAAQETAACcAQAwARMAAJwBADABAAAAAwAgBgEAALECACAGAACyAgAgmQEBAJICACGbAQEAnAIAIZwBQACTAgAhswEBAJICACECAAAADAAgEwAAoAEAIASZAQEAkgIAIZsBAQCcAgAhnAFAAJMCACGzAQEAkgIAIQIAAAAKACATAACiAQAgAgAAAAoAIBMAAKIBACABAAAAAwAgAwAAAAwAIBoAAJoBACAbAACgAQAgAQAAAAwAIAEAAAAKACAECQAArgIAICAAALACACAhAACvAgAgmwEAAJgCACAHlgEAAPYBADCXAQAAqgEAEJgBAAD2AQAwmQEBAN0BACGbAQEA5QEAIZwBQADeAQAhswEBAN0BACEDAAAACgAgAgAAqQEAMB8AAKoBACADAAAACgAgAgAACwAwAwAADAAgDggAAPUBACCWAQAA7wEAMJcBAACwAQAQmAEAAO8BADCZAQEAAAABnAFAAPQBACGoAQEA8AEAIakBAQDwAQAhqgEBAPEBACGrAUAA8gEAIawBQADyAQAhrQEBAPEBACGuASAA8wEAIa8BQAD0AQAhAQAAAK0BACABAAAArQEAIA4IAAD1AQAglgEAAO8BADCXAQAAsAEAEJgBAADvAQAwmQEBAPABACGcAUAA9AEAIagBAQDwAQAhqQEBAPABACGqAQEA8QEAIasBQADyAQAhrAFAAPIBACGtAQEA8QEAIa4BIADzAQAhrwFAAPQBACEFCAAArQIAIKoBAACYAgAgqwEAAJgCACCsAQAAmAIAIK0BAACYAgAgAwAAALABACACAACxAQAwAwAArQEAIAMAAACwAQAgAgAAsQEAMAMAAK0BACADAAAAsAEAIAIAALEBADADAACtAQAgCwgAAKwCACCZAQEAAAABnAFAAAAAAagBAQAAAAGpAQEAAAABqgEBAAAAAasBQAAAAAGsAUAAAAABrQEBAAAAAa4BIAAAAAGvAUAAAAABARMAALUBACAKmQEBAAAAAZwBQAAAAAGoAQEAAAABqQEBAAAAAaoBAQAAAAGrAUAAAAABrAFAAAAAAa0BAQAAAAGuASAAAAABrwFAAAAAAQETAAC3AQAwARMAALcBADALCAAAnwIAIJkBAQCSAgAhnAFAAJMCACGoAQEAkgIAIakBAQCSAgAhqgEBAJwCACGrAUAAnQIAIawBQACdAgAhrQEBAJwCACGuASAAngIAIa8BQACTAgAhAgAAAK0BACATAAC6AQAgCpkBAQCSAgAhnAFAAJMCACGoAQEAkgIAIakBAQCSAgAhqgEBAJwCACGrAUAAnQIAIawBQACdAgAhrQEBAJwCACGuASAAngIAIa8BQACTAgAhAgAAALABACATAAC8AQAgAgAAALABACATAAC8AQAgAwAAAK0BACAaAAC1AQAgGwAAugEAIAEAAACtAQAgAQAAALABACAHCQAAmQIAICAAAJsCACAhAACaAgAgqgEAAJgCACCrAQAAmAIAIKwBAACYAgAgrQEAAJgCACANlgEAAOQBADCXAQAAwwEAEJgBAADkAQAwmQEBAN0BACGcAUAA3gEAIagBAQDdAQAhqQEBAN0BACGqAQEA5QEAIasBQADmAQAhrAFAAOYBACGtAQEA5QEAIa4BIADnAQAhrwFAAN4BACEDAAAAsAEAIAIAAMIBADAfAADDAQAgAwAAALABACACAACxAQAwAwAArQEAIAEAAAARACABAAAAEQAgAwAAAA8AIAIAABAAMAMAABEAIAMAAAAPACACAAAQADADAAARACADAAAADwAgAgAAEAAwAwAAEQAgBgYAAJcCACAKAACWAgAgmQEBAAAAAZoBAQAAAAGbAQEAAAABnAFAAAAAAQETAADLAQAgBJkBAQAAAAGaAQEAAAABmwEBAAAAAZwBQAAAAAEBEwAAzQEAMAETAADNAQAwBgYAAJUCACAKAACUAgAgmQEBAJICACGaAQEAkgIAIZsBAQCSAgAhnAFAAJMCACECAAAAEQAgEwAA0AEAIASZAQEAkgIAIZoBAQCSAgAhmwEBAJICACGcAUAAkwIAIQIAAAAPACATAADSAQAgAgAAAA8AIBMAANIBACADAAAAEQAgGgAAywEAIBsAANABACABAAAAEQAgAQAAAA8AIAMJAACPAgAgIAAAkQIAICEAAJACACAHlgEAANwBADCXAQAA2QEAEJgBAADcAQAwmQEBAN0BACGaAQEA3QEAIZsBAQDdAQAhnAFAAN4BACEDAAAADwAgAgAA2AEAMB8AANkBACADAAAADwAgAgAAEAAwAwAAEQAgB5YBAADcAQAwlwEAANkBABCYAQAA3AEAMJkBAQDdAQAhmgEBAN0BACGbAQEA3QEAIZwBQADeAQAhDgkAAOABACAgAADjAQAgIQAA4wEAIJ0BAQAAAAGeAQEAAAAEnwEBAAAABKABAQAAAAGhAQEAAAABogEBAAAAAaMBAQAAAAGkAQEA4gEAIaUBAQAAAAGmAQEAAAABpwEBAAAAAQsJAADgAQAgIAAA4QEAICEAAOEBACCdAUAAAAABngFAAAAABJ8BQAAAAASgAUAAAAABoQFAAAAAAaIBQAAAAAGjAUAAAAABpAFAAN8BACELCQAA4AEAICAAAOEBACAhAADhAQAgnQFAAAAAAZ4BQAAAAASfAUAAAAAEoAFAAAAAAaEBQAAAAAGiAUAAAAABowFAAAAAAaQBQADfAQAhCJ0BAgAAAAGeAQIAAAAEnwECAAAABKABAgAAAAGhAQIAAAABogECAAAAAaMBAgAAAAGkAQIA4AEAIQidAUAAAAABngFAAAAABJ8BQAAAAASgAUAAAAABoQFAAAAAAaIBQAAAAAGjAUAAAAABpAFAAOEBACEOCQAA4AEAICAAAOMBACAhAADjAQAgnQEBAAAAAZ4BAQAAAASfAQEAAAAEoAEBAAAAAaEBAQAAAAGiAQEAAAABowEBAAAAAaQBAQDiAQAhpQEBAAAAAaYBAQAAAAGnAQEAAAABC50BAQAAAAGeAQEAAAAEnwEBAAAABKABAQAAAAGhAQEAAAABogEBAAAAAaMBAQAAAAGkAQEA4wEAIaUBAQAAAAGmAQEAAAABpwEBAAAAAQ2WAQAA5AEAMJcBAADDAQAQmAEAAOQBADCZAQEA3QEAIZwBQADeAQAhqAEBAN0BACGpAQEA3QEAIaoBAQDlAQAhqwFAAOYBACGsAUAA5gEAIa0BAQDlAQAhrgEgAOcBACGvAUAA3gEAIQ4JAADrAQAgIAAA7gEAICEAAO4BACCdAQEAAAABngEBAAAABZ8BAQAAAAWgAQEAAAABoQEBAAAAAaIBAQAAAAGjAQEAAAABpAEBAO0BACGlAQEAAAABpgEBAAAAAacBAQAAAAELCQAA6wEAICAAAOwBACAhAADsAQAgnQFAAAAAAZ4BQAAAAAWfAUAAAAAFoAFAAAAAAaEBQAAAAAGiAUAAAAABowFAAAAAAaQBQADqAQAhBQkAAOABACAgAADpAQAgIQAA6QEAIJ0BIAAAAAGkASAA6AEAIQUJAADgAQAgIAAA6QEAICEAAOkBACCdASAAAAABpAEgAOgBACECnQEgAAAAAaQBIADpAQAhCwkAAOsBACAgAADsAQAgIQAA7AEAIJ0BQAAAAAGeAUAAAAAFnwFAAAAABaABQAAAAAGhAUAAAAABogFAAAAAAaMBQAAAAAGkAUAA6gEAIQidAQIAAAABngECAAAABZ8BAgAAAAWgAQIAAAABoQECAAAAAaIBAgAAAAGjAQIAAAABpAECAOsBACEInQFAAAAAAZ4BQAAAAAWfAUAAAAAFoAFAAAAAAaEBQAAAAAGiAUAAAAABowFAAAAAAaQBQADsAQAhDgkAAOsBACAgAADuAQAgIQAA7gEAIJ0BAQAAAAGeAQEAAAAFnwEBAAAABaABAQAAAAGhAQEAAAABogEBAAAAAaMBAQAAAAGkAQEA7QEAIaUBAQAAAAGmAQEAAAABpwEBAAAAAQudAQEAAAABngEBAAAABZ8BAQAAAAWgAQEAAAABoQEBAAAAAaIBAQAAAAGjAQEAAAABpAEBAO4BACGlAQEAAAABpgEBAAAAAacBAQAAAAEOCAAA9QEAIJYBAADvAQAwlwEAALABABCYAQAA7wEAMJkBAQDwAQAhnAFAAPQBACGoAQEA8AEAIakBAQDwAQAhqgEBAPEBACGrAUAA8gEAIawBQADyAQAhrQEBAPEBACGuASAA8wEAIa8BQAD0AQAhC50BAQAAAAGeAQEAAAAEnwEBAAAABKABAQAAAAGhAQEAAAABogEBAAAAAaMBAQAAAAGkAQEA4wEAIaUBAQAAAAGmAQEAAAABpwEBAAAAAQudAQEAAAABngEBAAAABZ8BAQAAAAWgAQEAAAABoQEBAAAAAaIBAQAAAAGjAQEAAAABpAEBAO4BACGlAQEAAAABpgEBAAAAAacBAQAAAAEInQFAAAAAAZ4BQAAAAAWfAUAAAAAFoAFAAAAAAaEBQAAAAAGiAUAAAAABowFAAAAAAaQBQADsAQAhAp0BIAAAAAGkASAA6QEAIQidAUAAAAABngFAAAAABJ8BQAAAAASgAUAAAAABoQFAAAAAAaIBQAAAAAGjAUAAAAABpAFAAOEBACEDsAEAAA8AILEBAAAPACCyAQAADwAgB5YBAAD2AQAwlwEAAKoBABCYAQAA9gEAMJkBAQDdAQAhmwEBAOUBACGcAUAA3gEAIbMBAQDdAQAhCZYBAAD3AQAwlwEAAJIBABCYAQAA9wEAMJkBAQDdAQAhnAFAAN4BACG0AQEA5QEAIbUBAQDdAQAhtgEgAOcBACG3AQEA5QEAIQqWAQAA-AEAMJcBAAB6ABCYAQAA-AEAMJkBAQDdAQAhnAFAAN4BACGuASAA5wEAIa8BQADeAQAhswEBAN0BACG4AQEA3QEAIbkBAQDdAQAhCwEAAPoBACCWAQAA-QEAMJcBAAAaABCYAQAA-QEAMJkBAQDwAQAhnAFAAPQBACGuASAA8wEAIa8BQAD0AQAhswEBAPABACG4AQEA8AEAIbkBAQDwAQAhDwQAAIcCACAIAACEAgAgDAAAiAIAIA0AAIkCACCWAQAAhgIAMJcBAAAfABCYAQAAhgIAMJkBAQDwAQAhnAFAAPQBACGoAQEA8AEAIa8BQAD0AQAhwQEBAPABACHCAQEA8AEAIcMBAAAfACDEAQAAHwAgCpYBAAD7AQAwlwEAAGIAEJgBAAD7AQAwmQEBAN0BACGcAUAA3gEAIa4BIADnAQAhrwFAAN4BACGzAQEA3QEAIbkBAQDdAQAhugEBAN0BACELAQAA-gEAIJYBAAD8AQAwlwEAABgAEJgBAAD8AQAwmQEBAPABACGcAUAA9AEAIa4BIADzAQAhrwFAAPQBACGzAQEA8AEAIbkBAQDwAQAhugEBAPABACEOlgEAAP0BADCXAQAASgAQmAEAAP0BADCZAQEA3QEAIZwBQADeAQAhrgEgAOcBACGvAUAA3gEAIbMBAQDdAQAhuwEBAN0BACG8AQEA3QEAIb0BIADnAQAhvgECAP4BACG_AUAA5gEAIcABQADmAQAhDQkAAOABACAgAADgAQAgIQAA4AEAIDIAAIACACAzAADgAQAgnQECAAAAAZ4BAgAAAASfAQIAAAAEoAECAAAAAaEBAgAAAAGiAQIAAAABowECAAAAAaQBAgD_AQAhDQkAAOABACAgAADgAQAgIQAA4AEAIDIAAIACACAzAADgAQAgnQECAAAAAZ4BAgAAAASfAQIAAAAEoAECAAAAAaEBAgAAAAGiAQIAAAABowECAAAAAaQBAgD_AQAhCJ0BCAAAAAGeAQgAAAAEnwEIAAAABKABCAAAAAGhAQgAAAABogEIAAAAAaMBCAAAAAGkAQgAgAIAIRIBAAD6AQAgBQAAgwIAIAcAAIQCACALAAD1AQAglgEAAIECADCXAQAAAwAQmAEAAIECADCZAQEA8AEAIZwBQAD0AQAhrgEgAPMBACGvAUAA9AEAIbMBAQDwAQAhuwEBAPABACG8AQEA8AEAIb0BIADzAQAhvgECAIICACG_AUAA8gEAIcABQADyAQAhCJ0BAgAAAAGeAQIAAAAEnwECAAAABKABAgAAAAGhAQIAAAABogECAAAAAaMBAgAAAAGkAQIA4AEAIQOwAQAABQAgsQEAAAUAILIBAAAFACADsAEAAAoAILEBAAAKACCyAQAACgAgCZYBAACFAgAwlwEAADIAEJgBAACFAgAwmQEBAN0BACGcAUAA3gEAIagBAQDdAQAhrwFAAN4BACHBAQEA3QEAIcIBAQDdAQAhDQQAAIcCACAIAACEAgAgDAAAiAIAIA0AAIkCACCWAQAAhgIAMJcBAAAfABCYAQAAhgIAMJkBAQDwAQAhnAFAAPQBACGoAQEA8AEAIa8BQAD0AQAhwQEBAPABACHCAQEA8AEAIRQBAAD6AQAgBQAAgwIAIAcAAIQCACALAAD1AQAglgEAAIECADCXAQAAAwAQmAEAAIECADCZAQEA8AEAIZwBQAD0AQAhrgEgAPMBACGvAUAA9AEAIbMBAQDwAQAhuwEBAPABACG8AQEA8AEAIb0BIADzAQAhvgECAIICACG_AUAA8gEAIcABQADyAQAhwwEAAAMAIMQBAAADACANAQAA-gEAIJYBAAD8AQAwlwEAABgAEJgBAAD8AQAwmQEBAPABACGcAUAA9AEAIa4BIADzAQAhrwFAAPQBACGzAQEA8AEAIbkBAQDwAQAhugEBAPABACHDAQAAGAAgxAEAABgAIA0BAAD6AQAglgEAAPkBADCXAQAAGgAQmAEAAPkBADCZAQEA8AEAIZwBQAD0AQAhrgEgAPMBACGvAUAA9AEAIbMBAQDwAQAhuAEBAPABACG5AQEA8AEAIcMBAAAaACDEAQAAGgAgCQYAAIwCACAKAACLAgAglgEAAIoCADCXAQAADwAQmAEAAIoCADCZAQEA8AEAIZoBAQDwAQAhmwEBAPABACGcAUAA9AEAIRAIAAD1AQAglgEAAO8BADCXAQAAsAEAEJgBAADvAQAwmQEBAPABACGcAUAA9AEAIagBAQDwAQAhqQEBAPABACGqAQEA8QEAIasBQADyAQAhrAFAAPIBACGtAQEA8QEAIa4BIADzAQAhrwFAAPQBACHDAQAAsAEAIMQBAACwAQAgFAEAAPoBACAFAACDAgAgBwAAhAIAIAsAAPUBACCWAQAAgQIAMJcBAAADABCYAQAAgQIAMJkBAQDwAQAhnAFAAPQBACGuASAA8wEAIa8BQAD0AQAhswEBAPABACG7AQEA8AEAIbwBAQDwAQAhvQEgAPMBACG-AQIAggIAIb8BQADyAQAhwAFAAPIBACHDAQAAAwAgxAEAAAMAIAkBAAD6AQAgBgAAhwIAIJYBAACNAgAwlwEAAAoAEJgBAACNAgAwmQEBAPABACGbAQEA8QEAIZwBQAD0AQAhswEBAPABACEKBAAAhwIAIJYBAACOAgAwlwEAAAUAEJgBAACOAgAwmQEBAPABACGcAUAA9AEAIbQBAQDxAQAhtQEBAPABACG2ASAA8wEAIbcBAQDxAQAhAAAAAcgBAQAAAAEByAFAAAAAAQUaAADCAwAgGwAAyAMAIMUBAADDAwAgxgEAAMcDACDLAQAArQEAIAUaAADAAwAgGwAAxQMAIMUBAADBAwAgxgEAAMQDACDLAQAANQAgAxoAAMIDACDFAQAAwwMAIMsBAACtAQAgAxoAAMADACDFAQAAwQMAIMsBAAA1ACAAAAAAAcgBAQAAAAEByAFAAAAAAQHIASAAAAABCxoAAKACADAbAAClAgAwxQEAAKECADDGAQAAogIAMMcBAACjAgAgyAEAAKQCADDJAQAApAIAMMoBAACkAgAwywEAAKQCADDMAQAApgIAMM0BAACnAgAwBAYAAJcCACCZAQEAAAABmwEBAAAAAZwBQAAAAAECAAAAEQAgGgAAqwIAIAMAAAARACAaAACrAgAgGwAAqgIAIAETAAC_AwAwCQYAAIwCACAKAACLAgAglgEAAIoCADCXAQAADwAQmAEAAIoCADCZAQEAAAABmgEBAPABACGbAQEA8AEAIZwBQAD0AQAhAgAAABEAIBMAAKoCACACAAAAqAIAIBMAAKkCACAHlgEAAKcCADCXAQAAqAIAEJgBAACnAgAwmQEBAPABACGaAQEA8AEAIZsBAQDwAQAhnAFAAPQBACEHlgEAAKcCADCXAQAAqAIAEJgBAACnAgAwmQEBAPABACGaAQEA8AEAIZsBAQDwAQAhnAFAAPQBACEDmQEBAJICACGbAQEAkgIAIZwBQACTAgAhBAYAAJUCACCZAQEAkgIAIZsBAQCSAgAhnAFAAJMCACEEBgAAlwIAIJkBAQAAAAGbAQEAAAABnAFAAAAAAQQaAACgAgAwxQEAAKECADDHAQAAowIAIMsBAACkAgAwAAAAAAUaAAC3AwAgGwAAvQMAIMUBAAC4AwAgxgEAALwDACDLAQAAAQAgBxoAALUDACAbAAC6AwAgxQEAALYDACDGAQAAuQMAIMkBAAADACDKAQAAAwAgywEAADUAIAMaAAC3AwAgxQEAALgDACDLAQAAAQAgAxoAALUDACDFAQAAtgMAIMsBAAA1ACAAAAAHGgAAsAMAIBsAALMDACDFAQAAsQMAIMYBAACyAwAgyQEAAAMAIMoBAAADACDLAQAANQAgAxoAALADACDFAQAAsQMAIMsBAAA1ACAAAAAFGgAAqwMAIBsAAK4DACDFAQAArAMAIMYBAACtAwAgywEAAAEAIAMaAACrAwAgxQEAAKwDACDLAQAAAQAgBAQAAJkDACAIAAD1AgAgDAAAmgMAIA0AAJsDACAAAAAFGgAApgMAIBsAAKkDACDFAQAApwMAIMYBAACoAwAgywEAAAEAIAMaAACmAwAgxQEAAKcDACDLAQAAAQAgAAAAAAAFyAECAAAAAc4BAgAAAAHPAQIAAAAB0AECAAAAAdEBAgAAAAEFGgAAngMAIBsAAKQDACDFAQAAnwMAIMYBAACjAwAgywEAAAEAIAsaAADkAgAwGwAA6QIAMMUBAADlAgAwxgEAAOYCADDHAQAA5wIAIMgBAADoAgAwyQEAAOgCADDKAQAA6AIAMMsBAADoAgAwzAEAAOoCADDNAQAA6wIAMAsaAADYAgAwGwAA3QIAMMUBAADZAgAwxgEAANoCADDHAQAA2wIAIMgBAADcAgAwyQEAANwCADDKAQAA3AIAMMsBAADcAgAwzAEAAN4CADDNAQAA3wIAMAsaAADPAgAwGwAA0wIAMMUBAADQAgAwxgEAANECADDHAQAA0gIAIMgBAACkAgAwyQEAAKQCADDKAQAApAIAMMsBAACkAgAwzAEAANQCADDNAQAApwIAMAQKAACWAgAgmQEBAAAAAZoBAQAAAAGcAUAAAAABAgAAABEAIBoAANcCACADAAAAEQAgGgAA1wIAIBsAANYCACABEwAAogMAMAIAAAARACATAADWAgAgAgAAAKgCACATAADVAgAgA5kBAQCSAgAhmgEBAJICACGcAUAAkwIAIQQKAACUAgAgmQEBAJICACGaAQEAkgIAIZwBQACTAgAhBAoAAJYCACCZAQEAAAABmgEBAAAAAZwBQAAAAAEEAQAAswIAIJkBAQAAAAGcAUAAAAABswEBAAAAAQIAAAAMACAaAADjAgAgAwAAAAwAIBoAAOMCACAbAADiAgAgARMAAKEDADAJAQAA-gEAIAYAAIcCACCWAQAAjQIAMJcBAAAKABCYAQAAjQIAMJkBAQAAAAGbAQEA8QEAIZwBQAD0AQAhswEBAPABACECAAAADAAgEwAA4gIAIAIAAADgAgAgEwAA4QIAIAeWAQAA3wIAMJcBAADgAgAQmAEAAN8CADCZAQEA8AEAIZsBAQDxAQAhnAFAAPQBACGzAQEA8AEAIQeWAQAA3wIAMJcBAADgAgAQmAEAAN8CADCZAQEA8AEAIZsBAQDxAQAhnAFAAPQBACGzAQEA8AEAIQOZAQEAkgIAIZwBQACTAgAhswEBAJICACEEAQAAsQIAIJkBAQCSAgAhnAFAAJMCACGzAQEAkgIAIQQBAACzAgAgmQEBAAAAAZwBQAAAAAGzAQEAAAABBZkBAQAAAAGcAUAAAAABtQEBAAAAAbYBIAAAAAG3AQEAAAABAgAAAAcAIBoAAO8CACADAAAABwAgGgAA7wIAIBsAAO4CACABEwAAoAMAMAoEAACHAgAglgEAAI4CADCXAQAABQAQmAEAAI4CADCZAQEAAAABnAFAAPQBACG0AQEA8QEAIbUBAQDwAQAhtgEgAPMBACG3AQEA8QEAIQIAAAAHACATAADuAgAgAgAAAOwCACATAADtAgAgCZYBAADrAgAwlwEAAOwCABCYAQAA6wIAMJkBAQDwAQAhnAFAAPQBACG0AQEA8QEAIbUBAQDwAQAhtgEgAPMBACG3AQEA8QEAIQmWAQAA6wIAMJcBAADsAgAQmAEAAOsCADCZAQEA8AEAIZwBQAD0AQAhtAEBAPEBACG1AQEA8AEAIbYBIADzAQAhtwEBAPEBACEFmQEBAJICACGcAUAAkwIAIbUBAQCSAgAhtgEgAJ4CACG3AQEAnAIAIQWZAQEAkgIAIZwBQACTAgAhtQEBAJICACG2ASAAngIAIbcBAQCcAgAhBZkBAQAAAAGcAUAAAAABtQEBAAAAAbYBIAAAAAG3AQEAAAABAxoAAJ4DACDFAQAAnwMAIMsBAAABACAEGgAA5AIAMMUBAADlAgAwxwEAAOcCACDLAQAA6AIAMAQaAADYAgAwxQEAANkCADDHAQAA2wIAIMsBAADcAgAwBBoAAM8CADDFAQAA0AIAMMcBAADSAgAgywEAAKQCADAAAAAAAAcaAACQAwAgGwAAkwMAIMUBAACRAwAgxgEAAJIDACDJAQAAAwAgygEAAAMAIMsBAAA1ACAHGgAAiwMAIBsAAI4DACDFAQAAjAMAIMYBAACNAwAgyQEAABgAIMoBAAAYACDLAQAATQAgBxoAAIYDACAbAACJAwAgxQEAAIcDACDGAQAAiAMAIMkBAAAaACDKAQAAGgAgywEAAGUAIAsaAAD9AgAwGwAAgQMAMMUBAAD-AgAwxgEAAP8CADDHAQAAgAMAIMgBAADcAgAwyQEAANwCADDKAQAA3AIAMMsBAADcAgAwzAEAAIIDADDNAQAA3wIAMAQGAAC0AgAgmQEBAAAAAZsBAQAAAAGcAUAAAAABAgAAAAwAIBoAAIUDACADAAAADAAgGgAAhQMAIBsAAIQDACABEwAAnQMAMAIAAAAMACATAACEAwAgAgAAAOACACATAACDAwAgA5kBAQCSAgAhmwEBAJwCACGcAUAAkwIAIQQGAACyAgAgmQEBAJICACGbAQEAnAIAIZwBQACTAgAhBAYAALQCACCZAQEAAAABmwEBAAAAAZwBQAAAAAEGmQEBAAAAAZwBQAAAAAGuASAAAAABrwFAAAAAAbgBAQAAAAG5AQEAAAABAgAAAGUAIBoAAIYDACADAAAAGgAgGgAAhgMAIBsAAIoDACAIAAAAGgAgEwAAigMAIJkBAQCSAgAhnAFAAJMCACGuASAAngIAIa8BQACTAgAhuAEBAJICACG5AQEAkgIAIQaZAQEAkgIAIZwBQACTAgAhrgEgAJ4CACGvAUAAkwIAIbgBAQCSAgAhuQEBAJICACEGmQEBAAAAAZwBQAAAAAGuASAAAAABrwFAAAAAAbkBAQAAAAG6AQEAAAABAgAAAE0AIBoAAIsDACADAAAAGAAgGgAAiwMAIBsAAI8DACAIAAAAGAAgEwAAjwMAIJkBAQCSAgAhnAFAAJMCACGuASAAngIAIa8BQACTAgAhuQEBAJICACG6AQEAkgIAIQaZAQEAkgIAIZwBQACTAgAhrgEgAJ4CACGvAUAAkwIAIbkBAQCSAgAhugEBAJICACENBQAA8QIAIAcAAPICACALAADzAgAgmQEBAAAAAZwBQAAAAAGuASAAAAABrwFAAAAAAbsBAQAAAAG8AQEAAAABvQEgAAAAAb4BAgAAAAG_AUAAAAABwAFAAAAAAQIAAAA1ACAaAACQAwAgAwAAAAMAIBoAAJADACAbAACUAwAgDwAAAAMAIAUAAMwCACAHAADNAgAgCwAAzgIAIBMAAJQDACCZAQEAkgIAIZwBQACTAgAhrgEgAJ4CACGvAUAAkwIAIbsBAQCSAgAhvAEBAJICACG9ASAAngIAIb4BAgDKAgAhvwFAAJ0CACHAAUAAnQIAIQ0FAADMAgAgBwAAzQIAIAsAAM4CACCZAQEAkgIAIZwBQACTAgAhrgEgAJ4CACGvAUAAkwIAIbsBAQCSAgAhvAEBAJICACG9ASAAngIAIb4BAgDKAgAhvwFAAJ0CACHAAUAAnQIAIQMaAACQAwAgxQEAAJEDACDLAQAANQAgAxoAAIsDACDFAQAAjAMAIMsBAABNACADGgAAhgMAIMUBAACHAwAgywEAAGUAIAQaAAD9AgAwxQEAAP4CADDHAQAAgAMAIMsBAADcAgAwBgEAAL8CACAFAAD0AgAgBwAA9QIAIAsAAK0CACC_AQAAmAIAIMABAACYAgAgAQEAAL8CACABAQAAvwIAIAUIAACtAgAgqgEAAJgCACCrAQAAmAIAIKwBAACYAgAgrQEAAJgCACADmQEBAAAAAZsBAQAAAAGcAUAAAAABCQgAAJgDACAMAACWAwAgDQAAlwMAIJkBAQAAAAGcAUAAAAABqAEBAAAAAa8BQAAAAAHBAQEAAAABwgEBAAAAAQIAAAABACAaAACeAwAgBZkBAQAAAAGcAUAAAAABtQEBAAAAAbYBIAAAAAG3AQEAAAABA5kBAQAAAAGcAUAAAAABswEBAAAAAQOZAQEAAAABmgEBAAAAAZwBQAAAAAEDAAAAHwAgGgAAngMAIBsAAKUDACALAAAAHwAgCAAA_AIAIAwAAPoCACANAAD7AgAgEwAApQMAIJkBAQCSAgAhnAFAAJMCACGoAQEAkgIAIa8BQACTAgAhwQEBAJICACHCAQEAkgIAIQkIAAD8AgAgDAAA-gIAIA0AAPsCACCZAQEAkgIAIZwBQACTAgAhqAEBAJICACGvAUAAkwIAIcEBAQCSAgAhwgEBAJICACEJBAAAlQMAIAgAAJgDACANAACXAwAgmQEBAAAAAZwBQAAAAAGoAQEAAAABrwFAAAAAAcEBAQAAAAHCAQEAAAABAgAAAAEAIBoAAKYDACADAAAAHwAgGgAApgMAIBsAAKoDACALAAAAHwAgBAAA-QIAIAgAAPwCACANAAD7AgAgEwAAqgMAIJkBAQCSAgAhnAFAAJMCACGoAQEAkgIAIa8BQACTAgAhwQEBAJICACHCAQEAkgIAIQkEAAD5AgAgCAAA_AIAIA0AAPsCACCZAQEAkgIAIZwBQACTAgAhqAEBAJICACGvAUAAkwIAIcEBAQCSAgAhwgEBAJICACEJBAAAlQMAIAgAAJgDACAMAACWAwAgmQEBAAAAAZwBQAAAAAGoAQEAAAABrwFAAAAAAcEBAQAAAAHCAQEAAAABAgAAAAEAIBoAAKsDACADAAAAHwAgGgAAqwMAIBsAAK8DACALAAAAHwAgBAAA-QIAIAgAAPwCACAMAAD6AgAgEwAArwMAIJkBAQCSAgAhnAFAAJMCACGoAQEAkgIAIa8BQACTAgAhwQEBAJICACHCAQEAkgIAIQkEAAD5AgAgCAAA_AIAIAwAAPoCACCZAQEAkgIAIZwBQACTAgAhqAEBAJICACGvAUAAkwIAIcEBAQCSAgAhwgEBAJICACEOAQAA8AIAIAcAAPICACALAADzAgAgmQEBAAAAAZwBQAAAAAGuASAAAAABrwFAAAAAAbMBAQAAAAG7AQEAAAABvAEBAAAAAb0BIAAAAAG-AQIAAAABvwFAAAAAAcABQAAAAAECAAAANQAgGgAAsAMAIAMAAAADACAaAACwAwAgGwAAtAMAIBAAAAADACABAADLAgAgBwAAzQIAIAsAAM4CACATAAC0AwAgmQEBAJICACGcAUAAkwIAIa4BIACeAgAhrwFAAJMCACGzAQEAkgIAIbsBAQCSAgAhvAEBAJICACG9ASAAngIAIb4BAgDKAgAhvwFAAJ0CACHAAUAAnQIAIQ4BAADLAgAgBwAAzQIAIAsAAM4CACCZAQEAkgIAIZwBQACTAgAhrgEgAJ4CACGvAUAAkwIAIbMBAQCSAgAhuwEBAJICACG8AQEAkgIAIb0BIACeAgAhvgECAMoCACG_AUAAnQIAIcABQACdAgAhDgEAAPACACAFAADxAgAgCwAA8wIAIJkBAQAAAAGcAUAAAAABrgEgAAAAAa8BQAAAAAGzAQEAAAABuwEBAAAAAbwBAQAAAAG9ASAAAAABvgECAAAAAb8BQAAAAAHAAUAAAAABAgAAADUAIBoAALUDACAJBAAAlQMAIAwAAJYDACANAACXAwAgmQEBAAAAAZwBQAAAAAGoAQEAAAABrwFAAAAAAcEBAQAAAAHCAQEAAAABAgAAAAEAIBoAALcDACADAAAAAwAgGgAAtQMAIBsAALsDACAQAAAAAwAgAQAAywIAIAUAAMwCACALAADOAgAgEwAAuwMAIJkBAQCSAgAhnAFAAJMCACGuASAAngIAIa8BQACTAgAhswEBAJICACG7AQEAkgIAIbwBAQCSAgAhvQEgAJ4CACG-AQIAygIAIb8BQACdAgAhwAFAAJ0CACEOAQAAywIAIAUAAMwCACALAADOAgAgmQEBAJICACGcAUAAkwIAIa4BIACeAgAhrwFAAJMCACGzAQEAkgIAIbsBAQCSAgAhvAEBAJICACG9ASAAngIAIb4BAgDKAgAhvwFAAJ0CACHAAUAAnQIAIQMAAAAfACAaAAC3AwAgGwAAvgMAIAsAAAAfACAEAAD5AgAgDAAA-gIAIA0AAPsCACATAAC-AwAgmQEBAJICACGcAUAAkwIAIagBAQCSAgAhrwFAAJMCACHBAQEAkgIAIcIBAQCSAgAhCQQAAPkCACAMAAD6AgAgDQAA-wIAIJkBAQCSAgAhnAFAAJMCACGoAQEAkgIAIa8BQACTAgAhwQEBAJICACHCAQEAkgIAIQOZAQEAAAABmwEBAAAAAZwBQAAAAAEOAQAA8AIAIAUAAPECACAHAADyAgAgmQEBAAAAAZwBQAAAAAGuASAAAAABrwFAAAAAAbMBAQAAAAG7AQEAAAABvAEBAAAAAb0BIAAAAAG-AQIAAAABvwFAAAAAAcABQAAAAAECAAAANQAgGgAAwAMAIAqZAQEAAAABnAFAAAAAAagBAQAAAAGpAQEAAAABqgEBAAAAAasBQAAAAAGsAUAAAAABrQEBAAAAAa4BIAAAAAGvAUAAAAABAgAAAK0BACAaAADCAwAgAwAAAAMAIBoAAMADACAbAADGAwAgEAAAAAMAIAEAAMsCACAFAADMAgAgBwAAzQIAIBMAAMYDACCZAQEAkgIAIZwBQACTAgAhrgEgAJ4CACGvAUAAkwIAIbMBAQCSAgAhuwEBAJICACG8AQEAkgIAIb0BIACeAgAhvgECAMoCACG_AUAAnQIAIcABQACdAgAhDgEAAMsCACAFAADMAgAgBwAAzQIAIJkBAQCSAgAhnAFAAJMCACGuASAAngIAIa8BQACTAgAhswEBAJICACG7AQEAkgIAIbwBAQCSAgAhvQEgAJ4CACG-AQIAygIAIb8BQACdAgAhwAFAAJ0CACEDAAAAsAEAIBoAAMIDACAbAADJAwAgDAAAALABACATAADJAwAgmQEBAJICACGcAUAAkwIAIagBAQCSAgAhqQEBAJICACGqAQEAnAIAIasBQACdAgAhrAFAAJ0CACGtAQEAnAIAIa4BIACeAgAhrwFAAJMCACEKmQEBAJICACGcAUAAkwIAIagBAQCSAgAhqQEBAJICACGqAQEAnAIAIasBQACdAgAhrAFAAJ0CACGtAQEAnAIAIa4BIACeAgAhrwFAAJMCACEFBAQCCBwECQALDBkJDRsKBQEAAQUIAwcNBAkACAsSBQEECQICAQABBg4CAgYAAgoABgIIEwUJAAcBCBQAAwUVAAcWAAsXAAEBAAEBAQABAQgdAAAAAAMJABAgABEhABIAAAADCQAQIAARIQASAQEAAQEBAAEFCQAXIAAaIQAbMgAYMwAZAAAAAAAFCQAXIAAaIQAbMgAYMwAZAQEAAQEBAAEDCQAgIAAhIQAiAAAAAwkAICAAISEAIgEBAAEBAQABAwkAJyAAKCEAKQAAAAMJACcgACghACkBBIcBAgEEjQECAwkALiAALyEAMAAAAAMJAC4gAC8hADACAQABBp8BAgIBAAEGpQECAwkANSAANiEANwAAAAMJADUgADYhADcAAAMJADwgAD0hAD4AAAADCQA8IAA9IQA-AgYAAgoABgIGAAIKAAYDCQBDIABEIQBFAAAAAwkAQyAARCEARQ4CAQ8eARAhAREiARIjARQlARUnDBYoDRcqARgsDBktDhwuAR0vAR4wDCIzDyM0EyQ2AiU3AiY5Aic6Aig7Aik9Aio_DCtAFCxCAi1EDC5FFS9GAjBHAjFIDDRLFjVMHDZOCTdPCThRCTlSCTpTCTtVCTxXDD1YHT5aCT9cDEBdHkFeCUJfCUNgDERjH0VkI0ZmCkdnCkhpCklqCkprCkttCkxvDE1wJE5yCk90DFB1JVF2ClJ3ClN4DFR7JlV8KlZ9A1d-A1h_A1mAAQNagQEDW4MBA1yFAQxdhgErXokBA1-LAQxgjAEsYY4BA2KPAQNjkAEMZJMBLWWUATFmlQEEZ5YBBGiXAQRpmAEEapkBBGubAQRsnQEMbZ4BMm6hAQRvowEMcKQBM3GmAQRypwEEc6gBDHSrATR1rAE4dq4BBnevAQZ4sgEGebMBBnq0AQZ7tgEGfLgBDH25ATl-uwEGf70BDIABvgE6gQG_AQaCAcABBoMBwQEMhAHEATuFAcUBP4YBxgEFhwHHAQWIAcgBBYkByQEFigHKAQWLAcwBBYwBzgEMjQHPAUCOAdEBBY8B0wEMkAHUAUGRAdUBBZIB1gEFkwHXAQyUAdoBQpUB2wFG"
};
async function decodeBase64AsWasm(wasmBase64) {
  const { Buffer: Buffer2 } = await import("node:buffer");
  const wasmArray = Buffer2.from(wasmBase64, "base64");
  return new WebAssembly.Module(wasmArray);
}
config$1.compilerWasm = {
  getRuntime: async () => await import("./query_compiler_fast_bg.sqlite-gBoRaSMa.js"),
  getQueryCompilerWasmModule: async () => {
    const { wasm } = await import("./query_compiler_fast_bg.sqlite.wasm-base64-CDgMAsF5.js");
    return await decodeBase64AsWasm(wasm);
  },
  importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
  return client.getPrismaClient(config$1);
}
client.Extensions.getExtensionContext;
({
  DbNull: client.NullTypes.DbNull,
  JsonNull: client.NullTypes.JsonNull,
  AnyNull: client.NullTypes.AnyNull
});
client.makeStrictEnum({
  Serializable: "Serializable"
});
client.Extensions.defineExtension;
globalThis["__dirname"] = path.dirname(fileURLToPath(import.meta.url));
const PrismaClient = getPrismaClientClass();
var __defProp2 = Object.defineProperty;
var __export = (target, all) => {
  for (var name2 in all)
    __defProp2(target, name2, { get: all[name2], enumerable: true });
};
var colors_exports = {};
__export(colors_exports, {
  $: () => $,
  bgBlack: () => bgBlack,
  bgBlue: () => bgBlue,
  bgCyan: () => bgCyan,
  bgGreen: () => bgGreen,
  bgMagenta: () => bgMagenta,
  bgRed: () => bgRed,
  bgWhite: () => bgWhite,
  bgYellow: () => bgYellow,
  black: () => black,
  blue: () => blue,
  bold: () => bold,
  cyan: () => cyan,
  dim: () => dim,
  gray: () => gray,
  green: () => green,
  grey: () => grey,
  hidden: () => hidden,
  inverse: () => inverse,
  italic: () => italic,
  magenta: () => magenta,
  red: () => red,
  reset: () => reset,
  strikethrough: () => strikethrough,
  underline: () => underline,
  white: () => white,
  yellow: () => yellow
});
var FORCE_COLOR;
var NODE_DISABLE_COLORS;
var NO_COLOR;
var TERM;
var isTTY = true;
if (typeof process !== "undefined") {
  ({ FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM } = process.env || {});
  isTTY = process.stdout && process.stdout.isTTY;
}
var $ = {
  enabled: !NODE_DISABLE_COLORS && NO_COLOR == null && TERM !== "dumb" && (FORCE_COLOR != null && FORCE_COLOR !== "0" || isTTY)
};
function init(x, y) {
  let rgx = new RegExp(`\\x1b\\[${y}m`, "g");
  let open2 = `\x1B[${x}m`, close = `\x1B[${y}m`;
  return function(txt) {
    if (!$.enabled || txt == null) return txt;
    return open2 + (!!~("" + txt).indexOf(close) ? txt.replace(rgx, close + open2) : txt) + close;
  };
}
var reset = init(0, 0);
var bold = init(1, 22);
var dim = init(2, 22);
var italic = init(3, 23);
var underline = init(4, 24);
var inverse = init(7, 27);
var hidden = init(8, 28);
var strikethrough = init(9, 29);
var black = init(30, 39);
var red = init(31, 39);
var green = init(32, 39);
var yellow = init(33, 39);
var blue = init(34, 39);
var magenta = init(35, 39);
var cyan = init(36, 39);
var white = init(37, 39);
var gray = init(90, 39);
var grey = init(90, 39);
var bgBlack = init(40, 49);
var bgRed = init(41, 49);
var bgGreen = init(42, 49);
var bgYellow = init(43, 49);
var bgBlue = init(44, 49);
var bgMagenta = init(45, 49);
var bgCyan = init(46, 49);
var bgWhite = init(47, 49);
var MAX_ARGS_HISTORY = 100;
var COLORS = ["green", "yellow", "blue", "magenta", "cyan", "red"];
var argsHistory = [];
var lastTimestamp = Date.now();
var lastColor = 0;
var processEnv = typeof process !== "undefined" ? process.env : {};
globalThis.DEBUG ?? (globalThis.DEBUG = processEnv.DEBUG ?? "");
globalThis.DEBUG_COLORS ?? (globalThis.DEBUG_COLORS = processEnv.DEBUG_COLORS ? processEnv.DEBUG_COLORS === "true" : true);
var topProps = {
  enable(namespace) {
    if (typeof namespace === "string") {
      globalThis.DEBUG = namespace;
    }
  },
  disable() {
    const prev = globalThis.DEBUG;
    globalThis.DEBUG = "";
    return prev;
  },
  // this is the core logic to check if logging should happen or not
  enabled(namespace) {
    const listenedNamespaces = globalThis.DEBUG.split(",").map((s) => {
      return s.replace(/[.+?^${}()|[\]\\]/g, "\\$&");
    });
    const isListened = listenedNamespaces.some((listenedNamespace) => {
      if (listenedNamespace === "" || listenedNamespace[0] === "-") return false;
      return namespace.match(RegExp(listenedNamespace.split("*").join(".*") + "$"));
    });
    const isExcluded = listenedNamespaces.some((listenedNamespace) => {
      if (listenedNamespace === "" || listenedNamespace[0] !== "-") return false;
      return namespace.match(RegExp(listenedNamespace.slice(1).split("*").join(".*") + "$"));
    });
    return isListened && !isExcluded;
  },
  log: (...args) => {
    const [namespace, format, ...rest] = args;
    const logWithFormatting = console.warn ?? console.log;
    logWithFormatting(`${namespace} ${format}`, ...rest);
  },
  formatters: {}
  // not implemented
};
function debugCreate(namespace) {
  const instanceProps = {
    color: COLORS[lastColor++ % COLORS.length],
    enabled: topProps.enabled(namespace),
    namespace,
    log: topProps.log,
    extend: () => {
    }
    // not implemented
  };
  const debugCall = (...args) => {
    const { enabled, namespace: namespace2, color, log: log3 } = instanceProps;
    if (args.length !== 0) {
      argsHistory.push([namespace2, ...args]);
    }
    if (argsHistory.length > MAX_ARGS_HISTORY) {
      argsHistory.shift();
    }
    if (topProps.enabled(namespace2) || enabled) {
      const stringArgs = args.map((arg) => {
        if (typeof arg === "string") {
          return arg;
        }
        return safeStringify(arg);
      });
      const ms2 = `+${Date.now() - lastTimestamp}ms`;
      lastTimestamp = Date.now();
      if (globalThis.DEBUG_COLORS) {
        log3(colors_exports[color](bold(namespace2)), ...stringArgs, colors_exports[color](ms2));
      } else {
        log3(namespace2, ...stringArgs, ms2);
      }
    }
  };
  return new Proxy(debugCall, {
    get: (_2, prop) => instanceProps[prop],
    set: (_2, prop, value) => instanceProps[prop] = value
  });
}
var Debug = new Proxy(debugCreate, {
  get: (_2, prop) => topProps[prop],
  set: (_2, prop, value) => topProps[prop] = value
});
function safeStringify(value, indent = 2) {
  const cache = /* @__PURE__ */ new Set();
  return JSON.stringify(
    value,
    (key, value2) => {
      if (typeof value2 === "object" && value2 !== null) {
        if (cache.has(value2)) {
          return `[Circular *]`;
        }
        cache.add(value2);
      } else if (typeof value2 === "bigint") {
        return value2.toString();
      }
      return value2;
    },
    indent
  );
}
var DriverAdapterError = class extends Error {
  constructor(payload) {
    super(typeof payload["message"] === "string" ? payload["message"] : payload.kind);
    __publicField(this, "name", "DriverAdapterError");
    __publicField(this, "cause");
    this.cause = payload;
  }
};
Debug("driver-adapter-utils");
var ColumnTypeEnum = {
  // Scalars
  Int32: 0,
  Int64: 1,
  Float: 2,
  Double: 3,
  Numeric: 4,
  Boolean: 5,
  Text: 7,
  Date: 8,
  Time: 9,
  DateTime: 10,
  Json: 11,
  Bytes: 13,
  // Custom
  UnknownNumber: 128
};
var E_CANCELED = new Error("request for lock canceled");
var __awaiter$2 = function(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e8) {
        reject(e8);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e8) {
        reject(e8);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var Semaphore = class {
  constructor(_value, _cancelError = E_CANCELED) {
    this._value = _value;
    this._cancelError = _cancelError;
    this._queue = [];
    this._weightedWaiters = [];
  }
  acquire(weight = 1, priority = 0) {
    if (weight <= 0)
      throw new Error(`invalid weight ${weight}: must be positive`);
    return new Promise((resolve, reject) => {
      const task = { resolve, reject, weight, priority };
      const i = findIndexFromEnd(this._queue, (other) => priority <= other.priority);
      if (i === -1 && weight <= this._value) {
        this._dispatchItem(task);
      } else {
        this._queue.splice(i + 1, 0, task);
      }
    });
  }
  runExclusive(callback_1) {
    return __awaiter$2(this, arguments, void 0, function* (callback, weight = 1, priority = 0) {
      const [value, release] = yield this.acquire(weight, priority);
      try {
        return yield callback(value);
      } finally {
        release();
      }
    });
  }
  waitForUnlock(weight = 1, priority = 0) {
    if (weight <= 0)
      throw new Error(`invalid weight ${weight}: must be positive`);
    if (this._couldLockImmediately(weight, priority)) {
      return Promise.resolve();
    } else {
      return new Promise((resolve) => {
        if (!this._weightedWaiters[weight - 1])
          this._weightedWaiters[weight - 1] = [];
        insertSorted(this._weightedWaiters[weight - 1], { resolve, priority });
      });
    }
  }
  isLocked() {
    return this._value <= 0;
  }
  getValue() {
    return this._value;
  }
  setValue(value) {
    this._value = value;
    this._dispatchQueue();
  }
  release(weight = 1) {
    if (weight <= 0)
      throw new Error(`invalid weight ${weight}: must be positive`);
    this._value += weight;
    this._dispatchQueue();
  }
  cancel() {
    this._queue.forEach((entry) => entry.reject(this._cancelError));
    this._queue = [];
  }
  _dispatchQueue() {
    this._drainUnlockWaiters();
    while (this._queue.length > 0 && this._queue[0].weight <= this._value) {
      this._dispatchItem(this._queue.shift());
      this._drainUnlockWaiters();
    }
  }
  _dispatchItem(item) {
    const previousValue = this._value;
    this._value -= item.weight;
    item.resolve([previousValue, this._newReleaser(item.weight)]);
  }
  _newReleaser(weight) {
    let called = false;
    return () => {
      if (called)
        return;
      called = true;
      this.release(weight);
    };
  }
  _drainUnlockWaiters() {
    if (this._queue.length === 0) {
      for (let weight = this._value; weight > 0; weight--) {
        const waiters = this._weightedWaiters[weight - 1];
        if (!waiters)
          continue;
        waiters.forEach((waiter) => waiter.resolve());
        this._weightedWaiters[weight - 1] = [];
      }
    } else {
      const queuedPriority = this._queue[0].priority;
      for (let weight = this._value; weight > 0; weight--) {
        const waiters = this._weightedWaiters[weight - 1];
        if (!waiters)
          continue;
        const i = waiters.findIndex((waiter) => waiter.priority <= queuedPriority);
        (i === -1 ? waiters : waiters.splice(0, i)).forEach((waiter) => waiter.resolve());
      }
    }
  }
  _couldLockImmediately(weight, priority) {
    return (this._queue.length === 0 || this._queue[0].priority < priority) && weight <= this._value;
  }
};
function insertSorted(a, v) {
  const i = findIndexFromEnd(a, (other) => v.priority <= other.priority);
  a.splice(i + 1, 0, v);
}
function findIndexFromEnd(a, predicate) {
  for (let i = a.length - 1; i >= 0; i--) {
    if (predicate(a[i])) {
      return i;
    }
  }
  return -1;
}
var __awaiter$1 = function(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e8) {
        reject(e8);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e8) {
        reject(e8);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var Mutex = class {
  constructor(cancelError) {
    this._semaphore = new Semaphore(1, cancelError);
  }
  acquire() {
    return __awaiter$1(this, arguments, void 0, function* (priority = 0) {
      const [, releaser] = yield this._semaphore.acquire(1, priority);
      return releaser;
    });
  }
  runExclusive(callback, priority = 0) {
    return this._semaphore.runExclusive(() => callback(), 1, priority);
  }
  isLocked() {
    return this._semaphore.isLocked();
  }
  waitForUnlock(priority = 0) {
    return this._semaphore.waitForUnlock(1, priority);
  }
  release() {
    if (this._semaphore.isLocked())
      this._semaphore.release();
  }
  cancel() {
    return this._semaphore.cancel();
  }
};
var name = "@prisma/adapter-better-sqlite3";
var debug = Debug("prisma:driver-adapter:better-sqlite3:conversion");
function mapDeclType(declType) {
  if (declType === null) {
    return null;
  }
  switch (declType.toUpperCase()) {
    case "":
      return null;
    case "DECIMAL":
      return ColumnTypeEnum.Numeric;
    case "FLOAT":
      return ColumnTypeEnum.Float;
    case "DOUBLE":
    case "DOUBLE PRECISION":
    case "NUMERIC":
    case "REAL":
      return ColumnTypeEnum.Double;
    case "TINYINT":
    case "SMALLINT":
    case "MEDIUMINT":
    case "INT":
    case "INTEGER":
    case "SERIAL":
    case "INT2":
      return ColumnTypeEnum.Int32;
    case "BIGINT":
    case "UNSIGNED BIG INT":
    case "INT8":
      return ColumnTypeEnum.Int64;
    case "DATETIME":
    case "TIMESTAMP":
      return ColumnTypeEnum.DateTime;
    case "TIME":
      return ColumnTypeEnum.Time;
    case "DATE":
      return ColumnTypeEnum.Date;
    case "TEXT":
    case "CLOB":
    case "CHARACTER":
    case "VARCHAR":
    case "VARYING CHARACTER":
    case "NCHAR":
    case "NATIVE CHARACTER":
    case "NVARCHAR":
      return ColumnTypeEnum.Text;
    case "BLOB":
      return ColumnTypeEnum.Bytes;
    case "BOOLEAN":
      return ColumnTypeEnum.Boolean;
    case "JSONB":
      return ColumnTypeEnum.Json;
    default:
      debug("unknown decltype:", declType);
      return null;
  }
}
function mapDeclaredColumnTypes(columnTypes) {
  const emptyIndices = /* @__PURE__ */ new Set();
  const result = columnTypes.map((typeName, index) => {
    const mappedType = mapDeclType(typeName);
    if (mappedType === null) {
      emptyIndices.add(index);
    }
    return mappedType;
  });
  return [result, emptyIndices];
}
function getColumnTypes(declaredTypes, rows) {
  const [columnTypes, emptyIndices] = mapDeclaredColumnTypes(declaredTypes);
  if (emptyIndices.size === 0) {
    return columnTypes;
  }
  columnLoop: for (const columnIndex of emptyIndices) {
    for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
      const candidateValue = rows[rowIndex][columnIndex];
      if (candidateValue !== null) {
        columnTypes[columnIndex] = inferColumnType(candidateValue);
        continue columnLoop;
      }
    }
    columnTypes[columnIndex] = ColumnTypeEnum.Int32;
  }
  return columnTypes;
}
function inferColumnType(value) {
  switch (typeof value) {
    case "string":
      return ColumnTypeEnum.Text;
    case "bigint":
      return ColumnTypeEnum.Int64;
    case "boolean":
      return ColumnTypeEnum.Boolean;
    case "number":
      return ColumnTypeEnum.UnknownNumber;
    case "object":
      return inferObjectType(value);
    default:
      throw new UnexpectedTypeError(value);
  }
}
function inferObjectType(value) {
  if (value instanceof ArrayBuffer) {
    return ColumnTypeEnum.Bytes;
  }
  throw new UnexpectedTypeError(value);
}
var UnexpectedTypeError = class extends Error {
  constructor(value) {
    const type = typeof value;
    const repr = type === "object" ? JSON.stringify(value) : String(value);
    super(`unexpected value of type ${type}: ${repr}`);
    __publicField(this, "name", "UnexpectedTypeError");
  }
};
function mapRow(row, columnTypes) {
  const result = [];
  for (let i = 0; i < row.length; i++) {
    const value = row[i];
    if (typeof value === "number" && (columnTypes[i] === ColumnTypeEnum.Int32 || columnTypes[i] === ColumnTypeEnum.Int64) && !Number.isInteger(value)) {
      result[i] = Math.trunc(value);
      continue;
    }
    if (["number", "bigint"].includes(typeof value) && columnTypes[i] === ColumnTypeEnum.DateTime) {
      result[i] = new Date(Number(value)).toISOString();
      continue;
    }
    if (typeof value === "bigint") {
      const asNumber = Number(value);
      result[i] = Number.isSafeInteger(asNumber) ? asNumber : value.toString();
      continue;
    }
    result[i] = value;
  }
  return result;
}
function mapArg(arg, argType, options) {
  if (arg === null) {
    return null;
  }
  if (typeof arg === "string" && argType.scalarType === "int") {
    return Number.parseInt(arg);
  }
  if (typeof arg === "string" && argType.scalarType === "float") {
    return Number.parseFloat(arg);
  }
  if (typeof arg === "string" && argType.scalarType === "decimal") {
    return Number.parseFloat(arg);
  }
  if (typeof arg === "string" && argType.scalarType === "bigint") {
    return BigInt(arg);
  }
  if (typeof arg === "boolean") {
    return arg ? 1 : 0;
  }
  if (typeof arg === "string" && argType.scalarType === "datetime") {
    arg = new Date(arg);
  }
  if (arg instanceof Date) {
    const format = (options == null ? void 0 : options.timestampFormat) ?? "iso8601";
    switch (format) {
      case "unixepoch-ms":
        return arg.getTime();
      case "iso8601":
        return arg.toISOString().replace("Z", "+00:00");
      default:
        throw new Error(`Unknown timestamp format: ${format}`);
    }
  }
  if (typeof arg === "string" && argType.scalarType === "bytes") {
    return Buffer.from(arg, "base64");
  }
  return arg;
}
var SQLITE_BUSY = 5;
var PRIMARY_ERROR_CODE_MASK = 255;
var UNKNOWN_ERROR_CODE_PREFIX = "UNKNOWN_SQLITE_ERROR_";
function convertDriverError(error2) {
  if (isDriverError(error2)) {
    return {
      originalCode: error2.code,
      originalMessage: error2.message,
      ...mapDriverError(error2)
    };
  }
  throw error2;
}
function mapDriverError(error2) {
  var _a5, _b2, _c3;
  switch (error2.code) {
    case "SQLITE_CONSTRAINT_UNIQUE":
    case "SQLITE_CONSTRAINT_PRIMARYKEY": {
      const columns = (_a5 = error2.message.split("constraint failed: ").at(1)) == null ? void 0 : _a5.split(", ");
      const fields = columns == null ? void 0 : columns.map((field) => field.split(".").pop());
      const table = ((_b2 = columns == null ? void 0 : columns.at(0)) == null ? void 0 : _b2.split(".").slice(0, -1).join(".")) || void 0;
      return {
        kind: "UniqueConstraintViolation",
        constraint: fields !== void 0 ? { fields } : void 0,
        table
      };
    }
    case "SQLITE_CONSTRAINT_NOTNULL": {
      const fields = (_c3 = error2.message.split("constraint failed: ").at(1)) == null ? void 0 : _c3.split(", ").map((field) => field.split(".").pop());
      return {
        kind: "NullConstraintViolation",
        constraint: fields !== void 0 ? { fields } : void 0
      };
    }
    case "SQLITE_CONSTRAINT_FOREIGNKEY":
    case "SQLITE_CONSTRAINT_TRIGGER":
      return {
        kind: "ForeignKeyConstraintViolation",
        constraint: { foreignKey: {} }
      };
    default: {
      const extendedCode = extendedCodeFromName(error2.code);
      if (error2.code.startsWith("SQLITE_BUSY") || extendedCode !== void 0 && (extendedCode & PRIMARY_ERROR_CODE_MASK) === SQLITE_BUSY) {
        return {
          kind: "SocketTimeout"
        };
      } else if (error2.message.startsWith("no such table")) {
        return {
          kind: "TableDoesNotExist",
          table: error2.message.split(": ").at(1)
        };
      } else if (error2.message.startsWith("no such column")) {
        return {
          kind: "ColumnNotFound",
          column: error2.message.split(": ").at(1)
        };
      } else if (error2.message.includes("has no column named ")) {
        return {
          kind: "ColumnNotFound",
          column: error2.message.split("has no column named ").at(1)
        };
      }
      return {
        kind: "sqlite",
        // Falling back to the generic code, like the d1 adapter does when the
        // driver gives it none.
        extendedCode: extendedCode ?? 1,
        message: error2.message
      };
    }
  }
}
function extendedCodeFromName(code) {
  if (!code.startsWith(UNKNOWN_ERROR_CODE_PREFIX)) {
    return void 0;
  }
  const extendedCode = Number(code.slice(UNKNOWN_ERROR_CODE_PREFIX.length));
  return Number.isInteger(extendedCode) ? extendedCode : void 0;
}
function isDriverError(error2) {
  return typeof error2.code === "string" && typeof error2.message === "string";
}
var debug2 = Debug("prisma:driver-adapter:better-sqlite3");
var BetterSQLite3Queryable = class {
  constructor(client2, adapterOptions) {
    __publicField(this, "provider", "sqlite");
    __publicField(this, "adapterName", name);
    this.client = client2;
    this.adapterOptions = adapterOptions;
  }
  /**
   * Execute a query given as SQL, interpolating the given parameters.
   */
  async queryRaw(query) {
    const tag2 = "[js::queryRaw]";
    debug2(`${tag2} %O`, query);
    const { columnNames, declaredTypes, values } = await this.performIO(query);
    const rows = values;
    const columnTypes = getColumnTypes(declaredTypes, rows);
    return {
      columnNames,
      columnTypes,
      rows: rows.map((row) => mapRow(row, columnTypes))
    };
  }
  /**
   * Execute a query given as SQL, interpolating the given parameters and
   * returning the number of affected rows.
   * Note: Queryable expects a u64, but napi.rs only supports u32.
   */
  async executeRaw(query) {
    const tag2 = "[js::executeRaw]";
    debug2(`${tag2} %O`, query);
    return (await this.executeIO(query)).changes;
  }
  /**
   * Run a query against the database, returning the result set.
   * Should the query fail due to a connection error, the connection is
   * marked as unhealthy.
   */
  executeIO(query) {
    try {
      const args = query.args.map((arg, i) => mapArg(arg, query.argTypes[i], this.adapterOptions));
      const stmt = this.client.prepare(query.sql).bind(args);
      const result = stmt.run();
      return Promise.resolve(result);
    } catch (e8) {
      this.onError(e8);
    }
  }
  /**
   * Run a query against the database, returning the result set.
   * Should the query fail due to a connection error, the connection is
   * marked as unhealthy.
   */
  performIO(query) {
    try {
      const args = query.args.map((arg, i) => mapArg(arg, query.argTypes[i], this.adapterOptions));
      const stmt = this.client.prepare(query.sql).bind(args);
      if (!stmt.reader) {
        stmt.run();
        return Promise.resolve({
          columnNames: [],
          declaredTypes: [],
          values: []
        });
      }
      const columns = stmt.columns();
      const resultSet = {
        declaredTypes: columns.map((column) => column.type),
        columnNames: columns.map((column) => column.name),
        values: stmt.raw().all()
      };
      return Promise.resolve(resultSet);
    } catch (e8) {
      this.onError(e8);
    }
  }
  onError(error2) {
    debug2("Error in performIO: %O", error2);
    throw new DriverAdapterError(convertDriverError(error2));
  }
};
var BetterSQLite3Transaction = (_s5 = class extends BetterSQLite3Queryable {
  constructor(client2, options, adapterOptions, unlockParent) {
    super(client2, adapterOptions);
    __privateAdd(this, _unlockParent);
    this.options = options;
    __privateSet(this, _unlockParent, unlockParent);
  }
  commit() {
    debug2(`[js::commit]`);
    __privateGet(this, _unlockParent).call(this);
    return Promise.resolve();
  }
  rollback() {
    debug2(`[js::rollback]`);
    __privateGet(this, _unlockParent).call(this);
    return Promise.resolve();
  }
  async createSavepoint(name2) {
    await this.executeRaw({ sql: `SAVEPOINT ${name2}`, args: [], argTypes: [] });
  }
  async rollbackToSavepoint(name2) {
    await this.executeRaw({ sql: `ROLLBACK TO ${name2}`, args: [], argTypes: [] });
  }
  async releaseSavepoint(name2) {
    await this.executeRaw({ sql: `RELEASE SAVEPOINT ${name2}`, args: [], argTypes: [] });
  }
}, _unlockParent = new WeakMap(), _s5);
var PrismaBetterSqlite3Adapter = (_t12 = class extends BetterSQLite3Queryable {
  constructor(client2, adapterOptions) {
    super(client2, adapterOptions);
    __privateAdd(this, _mutex, new Mutex());
  }
  executeScript(script) {
    try {
      this.client.exec(script);
    } catch (e8) {
      this.onError(e8);
    }
    return Promise.resolve();
  }
  async startTransaction(isolationLevel) {
    if (isolationLevel && isolationLevel !== "SERIALIZABLE") {
      throw new DriverAdapterError({
        kind: "InvalidIsolationLevel",
        level: isolationLevel
      });
    }
    const options = {
      usePhantomQuery: false
    };
    const tag2 = "[js::startTransaction]";
    debug2("%s options: %O", tag2, options);
    try {
      const release = await __privateGet(this, _mutex).acquire();
      this.client.prepare("BEGIN").run();
      return new BetterSQLite3Transaction(this.client, options, this.adapterOptions, release);
    } catch (e8) {
      this.onError(e8);
    }
  }
  dispose() {
    this.client.close();
    return Promise.resolve();
  }
}, _mutex = new WeakMap(), _t12);
var PrismaBetterSqlite3AdapterFactory = (_u2 = class {
  constructor(config2, options) {
    __publicField(this, "provider", "sqlite");
    __publicField(this, "adapterName", name);
    __privateAdd(this, _config);
    __privateAdd(this, _options);
    __privateSet(this, _config, config2);
    __privateSet(this, _options, options);
  }
  connect() {
    return Promise.resolve(new PrismaBetterSqlite3Adapter(createBetterSQLite3Client(__privateGet(this, _config)), __privateGet(this, _options)));
  }
  connectToShadowDb() {
    var _a5;
    const url = ((_a5 = __privateGet(this, _options)) == null ? void 0 : _a5.shadowDatabaseUrl) ?? ":memory:";
    return Promise.resolve(
      new PrismaBetterSqlite3Adapter(createBetterSQLite3Client({ ...__privateGet(this, _config), url }), __privateGet(this, _options))
    );
  }
}, _config = new WeakMap(), _options = new WeakMap(), _u2);
function createBetterSQLite3Client(input) {
  const { url, ...config2 } = input;
  const dbPath = url.replace(/^file:/, "");
  const db = new Database(dbPath, config2);
  db.defaultSafeIntegers(true);
  return db;
}
let prisma;
async function initializeDatabase(databaseUrl) {
  const adapter = new PrismaBetterSqlite3AdapterFactory({ url: databaseUrl });
  prisma = new PrismaClient({ adapter });
  await prisma.$connect();
}
async function applySqliteMigrations(migrationsDirectory) {
  await prisma.$executeRawUnsafe(`
    CREATE TABLE IF NOT EXISTS "_prisma_migrations" (
      "id" TEXT NOT NULL PRIMARY KEY,
      "checksum" TEXT NOT NULL,
      "finished_at" DATETIME,
      "migration_name" TEXT NOT NULL,
      "logs" TEXT,
      "rolled_back_at" DATETIME,
      "started_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "applied_steps_count" INTEGER UNSIGNED NOT NULL DEFAULT 0
    )
  `);
  const migrationNames = (await readdir(migrationsDirectory, { withFileTypes: true })).filter((entry) => entry.isDirectory()).map((entry) => entry.name).sort();
  for (const migrationName of migrationNames) {
    const sql2 = await readFile(
      path__default.join(migrationsDirectory, migrationName, "migration.sql"),
      "utf8"
    ).catch((error2) => {
      if (error2 && typeof error2 === "object" && "code" in error2 && error2.code === "ENOENT") {
        return null;
      }
      throw error2;
    });
    if (sql2 === null) continue;
    const checksum = createHash("sha256").update(sql2).digest("hex");
    const applied = await prisma.$queryRaw`
      SELECT "checksum" FROM "_prisma_migrations"
      WHERE "migration_name" = ${migrationName} AND "finished_at" IS NOT NULL
    `;
    if (applied.length > 0) {
      const acceptedLegacyChecksum = migrationName === "20261018151416_add_cpf_and_professor_department" && applied[0].checksum === "d66836df46923ff4b5799cd260947de8d7c2b0afb8f65684f8b3ac9d087255a3";
      if (applied[0].checksum !== checksum && !acceptedLegacyChecksum) {
        throw new Error(`MIGRATION_CHECKSUM_MISMATCH:${migrationName}`);
      }
      continue;
    }
    const statements = sql2.replace(/^\s*--.*$/gm, "").split(";").map((statement) => statement.trim()).filter(
      (statement) => statement.length > 0 && (!/^PRAGMA\b/i.test(statement) || /^PRAGMA\s+defer_foreign_keys\s*=\s*ON$/i.test(statement))
    );
    await prisma.$executeRawUnsafe("PRAGMA foreign_keys = OFF");
    try {
      await prisma.$transaction(async (transaction) => {
        for (const statement of statements) {
          await transaction.$executeRawUnsafe(statement);
        }
        await transaction.$executeRaw`
          INSERT INTO "_prisma_migrations"
            ("id", "checksum", "finished_at", "migration_name", "started_at", "applied_steps_count")
          VALUES
            (${randomUUID()}, ${checksum}, CURRENT_TIMESTAMP, ${migrationName}, CURRENT_TIMESTAMP, ${statements.length})
        `;
      });
    } finally {
      await prisma.$executeRawUnsafe("PRAGMA foreign_keys = ON");
    }
    const violations = await prisma.$queryRaw`PRAGMA foreign_key_check`;
    if (violations.length > 0) {
      throw new Error(`MIGRATION_FOREIGN_KEY_CHECK_FAILED:${migrationName}`);
    }
  }
}
function getEnumValues(entries) {
  const numericValues = Object.values(entries).filter((v) => typeof v === "number");
  const values = Object.entries(entries).filter(([k2, _2]) => numericValues.indexOf(+k2) === -1).map(([_2, v]) => v);
  return values;
}
function joinValues(array2, separator = "|") {
  return array2.map((val) => stringifyPrimitive(val)).join(separator);
}
function jsonStringifyReplacer(_2, value) {
  if (typeof value === "bigint")
    return value.toString();
  return value;
}
class Cached {
  constructor(getter) {
    this._getter = getter;
    this._value = void 0;
  }
  get value() {
    const getter = this._getter;
    if (getter !== void 0) {
      this._value = getter();
      this._getter = void 0;
    }
    return this._value;
  }
}
function cached(getter) {
  return new Cached(getter);
}
function nullish(input) {
  return input === null || input === void 0;
}
function cleanRegex(source) {
  const start = source.startsWith("^") ? 1 : 0;
  const end = source.endsWith("$") ? source.length - 1 : source.length;
  return source.slice(start, end);
}
function assignProp(target, prop, value) {
  Object.defineProperty(target, prop, {
    value,
    writable: true,
    enumerable: true,
    configurable: true
  });
}
function rawShape(def) {
  const desc = Object.getOwnPropertyDescriptor(def, "shape");
  return (desc == null ? void 0 : desc.get) ? desc.get.raw : desc == null ? void 0 : desc.value;
}
function sourceShape(schema) {
  return rawShape(schema._zod.def) ?? schema._zod.def.shape;
}
function deferProp(target, key, getter) {
  Object.defineProperty(target, key, {
    get() {
      const value = getter();
      assignProp(this, key, value);
      return value;
    },
    enumerable: true,
    configurable: true
  });
}
function putProp(target, key, value) {
  if (key in target)
    assignProp(target, key, value);
  else
    target[key] = value;
}
function mirrorShape(target, source, keys, wrap) {
  const raw2 = sourceShape(source);
  for (const key of keys) {
    const desc = Object.getOwnPropertyDescriptor(raw2, key);
    if (!desc.enumerable)
      continue;
    if (desc.get) {
      deferProp(target, key, () => {
        const value = source._zod.def.shape[key];
        return wrap ? wrap(value, key) : value;
      });
    } else
      putProp(target, key, wrap ? wrap(desc.value, key) : desc.value);
  }
}
function mirrorProps(target, source) {
  for (const key of Reflect.ownKeys(source)) {
    const desc = Object.getOwnPropertyDescriptor(source, key);
    if (!desc.enumerable)
      continue;
    if (desc.get)
      deferProp(target, key, () => source[key]);
    else
      putProp(target, key, desc.value);
  }
}
function mergeDefs(...defs) {
  const mergedDescriptors = {};
  for (const def of defs) {
    const descriptors = Object.getOwnPropertyDescriptors(def);
    Object.assign(mergedDescriptors, descriptors);
  }
  return Object.defineProperties({}, mergedDescriptors);
}
function esc(str) {
  return JSON.stringify(str);
}
function slugify(input) {
  return input.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const captureStackTrace = "captureStackTrace" in Error ? Error.captureStackTrace : (..._args) => {
};
function isObject(data) {
  return typeof data === "object" && data !== null && !Array.isArray(data);
}
const allowsEval = /* @__PURE__ */ cached(() => {
  var _a5;
  if (globalConfig.jitless) {
    return false;
  }
  if (typeof navigator !== "undefined" && ((_a5 = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : _a5.includes("Cloudflare"))) {
    return false;
  }
  try {
    const F = Function;
    new F("");
    return true;
  } catch (_2) {
    return false;
  }
});
function isPlainObject(o) {
  if (isObject(o) === false)
    return false;
  const ctor = o.constructor;
  if (ctor === void 0)
    return true;
  if (typeof ctor !== "function")
    return true;
  const prot = ctor.prototype;
  if (isObject(prot) === false)
    return false;
  if (Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === false) {
    return false;
  }
  return true;
}
function shallowClone(o) {
  if (isPlainObject(o))
    return { ...o };
  if (Array.isArray(o))
    return [...o];
  if (o instanceof Map)
    return new Map(o);
  if (o instanceof Set)
    return new Set(o);
  return o;
}
const propertyKeyTypes = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function clone(inst, def, params) {
  const cl2 = new inst._zod.constr(def ?? inst._zod.def);
  if (!def || (params == null ? void 0 : params.parent))
    cl2._zod.parent = inst;
  return cl2;
}
function normalizeParams(_params) {
  const params = _params;
  if (!params)
    return {};
  if (typeof params === "string")
    return { error: () => params };
  if ((params == null ? void 0 : params.message) !== void 0) {
    if ((params == null ? void 0 : params.error) !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    params.error = params.message;
  }
  delete params.message;
  if (typeof params.error === "string")
    return { ...params, error: () => params.error };
  return params;
}
function stringifyPrimitive(value) {
  if (typeof value === "bigint")
    return value.toString() + "n";
  if (typeof value === "string")
    return `"${value}"`;
  return `${value}`;
}
function optionalKeys(shape) {
  return Object.keys(shape).filter((k2) => {
    return shape[k2]._zod.optin !== void 0 && shape[k2]._zod.optout === "optional";
  });
}
const NUMBER_FORMAT_RANGES = /* @__PURE__ */ (() => ({
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
}))();
const BIGINT_FORMAT_RANGES = {
  int64: [/* @__PURE__ */ BigInt("-9223372036854775808"), /* @__PURE__ */ BigInt("9223372036854775807")],
  uint64: [/* @__PURE__ */ BigInt(0), /* @__PURE__ */ BigInt("18446744073709551615")]
};
function pick(schema, mask) {
  const currDef = schema._zod.def;
  const checks = currDef.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  }
  const newShape = {};
  mirrorShape(newShape, schema, maskedKeys(schema, mask));
  return clone(schema, mergeDefs(currDef, { shape: newShape, checks: [] }));
}
function maskedKeys(schema, mask) {
  var _a5;
  const raw2 = sourceShape(schema);
  const keys = [];
  for (const key of Reflect.ownKeys(mask)) {
    if (!((_a5 = Object.getOwnPropertyDescriptor(raw2, key)) == null ? void 0 : _a5.enumerable)) {
      throw new Error(`Unrecognized key: "${String(key)}"`);
    }
    if (mask[key])
      keys.push(key);
  }
  return keys;
}
function omit(schema, mask) {
  const currDef = schema._zod.def;
  const checks = currDef.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  }
  const omitted = new Set(maskedKeys(schema, mask));
  const newShape = {};
  mirrorShape(newShape, schema, Reflect.ownKeys(sourceShape(schema)).filter((key) => !omitted.has(key)));
  return clone(schema, mergeDefs(currDef, { shape: newShape, checks: [] }));
}
function extend(schema, shape) {
  if (!isPlainObject(shape)) {
    throw new Error("Invalid input to extend: expected a plain object");
  }
  const checks = schema._zod.def.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    const existingShape = sourceShape(schema);
    for (const key of Reflect.ownKeys(shape)) {
      if (Object.getOwnPropertyDescriptor(existingShape, key) !== void 0) {
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
      }
    }
  }
  return clone(schema, mergeDefs(schema._zod.def, { shape: extended(schema, shape) }));
}
function extended(schema, shape) {
  const newShape = {};
  mirrorShape(newShape, schema, Reflect.ownKeys(sourceShape(schema)));
  mirrorProps(newShape, shape);
  return newShape;
}
function safeExtend(schema, shape) {
  if (!isPlainObject(shape)) {
    throw new Error("Invalid input to safeExtend: expected a plain object");
  }
  return clone(schema, mergeDefs(schema._zod.def, { shape: extended(schema, shape) }));
}
function merge(a, b) {
  var _a5, _b2;
  if (!((_a5 = b == null ? void 0 : b._zod) == null ? void 0 : _a5.def)) {
    throw new Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
  }
  if ((_b2 = a._zod.def.checks) == null ? void 0 : _b2.length) {
    throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
  }
  const newShape = {};
  mirrorShape(newShape, a, Reflect.ownKeys(sourceShape(a)));
  mirrorShape(newShape, b, Reflect.ownKeys(sourceShape(b)));
  const def = mergeDefs(a._zod.def, {
    shape: newShape,
    get catchall() {
      return b._zod.def.catchall;
    },
    checks: b._zod.def.checks ?? []
  });
  return clone(a, def);
}
function partial(Class, schema, mask, name2 = "partial") {
  const currDef = schema._zod.def;
  const checks = currDef.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    throw new Error(`.${name2}() cannot be used on object schemas containing refinements`);
  }
  const selected = mask ? new Set(maskedKeys(schema, mask)) : void 0;
  const newShape = {};
  mirrorShape(newShape, schema, Reflect.ownKeys(sourceShape(schema)), Class && ((value, key) => selected && !selected.has(key) ? value : new Class({ type: "optional", innerType: value })));
  return clone(schema, mergeDefs(schema._zod.def, { shape: newShape, checks: [] }));
}
function required(Class, schema, mask) {
  const selected = mask ? new Set(maskedKeys(schema, mask)) : void 0;
  const newShape = {};
  mirrorShape(newShape, schema, Reflect.ownKeys(sourceShape(schema)), (value, key) => (
    // overwrite with non-optional
    selected && !selected.has(key) ? value : new Class({ type: "nonoptional", innerType: value })
  ));
  return clone(schema, mergeDefs(schema._zod.def, { shape: newShape }));
}
function aborted(x, startIndex = 0) {
  var _a5;
  if (x.aborted === true)
    return true;
  for (let i = startIndex; i < x.issues.length; i++) {
    if (((_a5 = x.issues[i]) == null ? void 0 : _a5.continue) !== true) {
      return true;
    }
  }
  return false;
}
function explicitlyAborted(x, startIndex = 0) {
  var _a5;
  if (x.aborted === true)
    return true;
  for (let i = startIndex; i < x.issues.length; i++) {
    if (((_a5 = x.issues[i]) == null ? void 0 : _a5.continue) === false) {
      return true;
    }
  }
  return false;
}
function prefixIssues(path2, issues) {
  return issues.map((iss) => {
    var _a5;
    (_a5 = iss).path ?? (_a5.path = []);
    iss.path.unshift(path2);
    return iss;
  });
}
function unwrapMessage(message) {
  return typeof message === "string" ? message : message == null ? void 0 : message.message;
}
function sizeCaps(defChecks) {
  const caps = [];
  for (const ch of defChecks ?? []) {
    const d = ch._zod.def;
    if (!/_(length|size)$|_equals$/.test(d.check))
      break;
    const max2 = d.maximum ?? d.length ?? d.size;
    if (max2 >= 0)
      caps.push([max2, ch]);
  }
  return caps;
}
function attachSchema(issues, start, inst) {
  var _a5;
  for (let i = start; i < issues.length; i++) {
    (_a5 = issues[i]).schema ?? (_a5.schema = inst);
  }
}
function finalizeIssue(iss, ctx, config2) {
  var _a6, _b2, _c3, _d3, _e15, _f2, _g2, _h2, _i8, _j2;
  var _a5;
  const traits = (_b2 = (_a6 = iss.inst) == null ? void 0 : _a6._zod) == null ? void 0 : _b2.traits;
  if (traits == null ? void 0 : traits.has("$ZodType")) {
    if (traits.has("$ZodCheck"))
      (_a5 = iss).schema ?? (_a5.schema = iss.inst);
    else
      iss.schema = iss.inst;
  }
  const schemaError = iss.schema !== iss.inst ? (_d3 = (_c3 = iss.schema) == null ? void 0 : _c3._zod.def) == null ? void 0 : _d3.error : void 0;
  const message = iss.message ? iss.message : unwrapMessage((_g2 = (_f2 = (_e15 = iss.inst) == null ? void 0 : _e15._zod.def) == null ? void 0 : _f2.error) == null ? void 0 : _g2.call(_f2, iss)) ?? unwrapMessage(schemaError == null ? void 0 : schemaError(iss)) ?? unwrapMessage((_h2 = ctx == null ? void 0 : ctx.error) == null ? void 0 : _h2.call(ctx, iss)) ?? unwrapMessage((_i8 = config2.customError) == null ? void 0 : _i8.call(config2, iss)) ?? unwrapMessage((_j2 = config2.localeError) == null ? void 0 : _j2.call(config2, iss)) ?? "Invalid input";
  const full = {};
  for (const k2 of Object.keys(iss)) {
    if (k2 === "inst" || k2 === "schema" || k2 === "continue" || k2 === "input" || k2 === "__proto__")
      continue;
    full[k2] = iss[k2];
  }
  full.path ?? (full.path = []);
  full.message = message;
  if (ctx == null ? void 0 : ctx.reportInput) {
    full.input = iss.input;
  }
  return full;
}
const highSurrogate = /[\uD800-\uDBFF]/;
function codePointLength(str) {
  const units = str.length;
  if (!highSurrogate.test(str))
    return units;
  let count = units;
  for (let i = 0; i < units - 1; i++) {
    if ((str.charCodeAt(i) & 64512) === 55296 && (str.charCodeAt(i + 1) & 64512) === 56320) {
      count--;
      i++;
    }
  }
  return count;
}
function getLengthableOrigin(input) {
  if (Array.isArray(input))
    return "array";
  if (typeof input === "string")
    return "string";
  return "unknown";
}
function parsedType(data) {
  const t = typeof data;
  switch (t) {
    case "number": {
      return Number.isNaN(data) ? "nan" : "number";
    }
    case "object": {
      if (data === null) {
        return "null";
      }
      if (Array.isArray(data)) {
        return "array";
      }
      const obj = data;
      if (obj && Object.getPrototypeOf(obj) !== Object.prototype && "constructor" in obj && obj.constructor) {
        return obj.constructor.name;
      }
    }
  }
  return t;
}
function issue(...args) {
  const [iss, input, inst] = args;
  if (typeof iss === "string") {
    return {
      message: iss,
      code: "custom",
      input,
      inst
    };
  }
  return { ...iss };
}
function members(proto, table) {
  for (const key in table) {
    const desc = Object.getOwnPropertyDescriptor(table, key);
    if (desc.get)
      Object.defineProperty(proto, key, { ...desc, enumerable: false });
    else
      defineBound(proto, key, desc.value);
  }
}
function own(inst, key, value, enumerable = true) {
  Object.defineProperty(inst, key, { configurable: true, writable: true, enumerable, value });
  return value;
}
function hide(inst, key, value) {
  return own(inst, key, value, false);
}
function derived(computes, table) {
  for (const key in computes) {
    const compute = computes[key];
    Object.defineProperty(table, key, {
      configurable: true,
      enumerable: true,
      get() {
        return own(this, key, compute(this));
      },
      set(value) {
        own(this, key, value);
      }
    });
  }
  return table;
}
function defineBound(proto, key, fn2) {
  Object.defineProperty(proto, key, {
    configurable: true,
    get() {
      return this == null ? fn2 : own(this, key, fn2.bind(this));
    },
    set(value) {
      own(this, key, value);
    }
  });
}
function claim(inst, sentinel) {
  const proto = Object.getPrototypeOf(inst);
  return sentinel in proto ? void 0 : proto;
}
let installing;
let broke = false;
const breaker = {
  configurable: true,
  get() {
    broke = true;
    return void 0;
  }
};
function defineLazyInternal(inst, key, compute) {
  const proto = Object.getPrototypeOf(inst._zod);
  if (key in proto && installing !== inst._zod) {
    installing = void 0;
    return;
  }
  installing = inst._zod;
  Object.defineProperty(proto, key, {
    configurable: true,
    get() {
      Object.defineProperty(this, key, breaker);
      const outer = broke;
      broke = false;
      try {
        const value = compute(this);
        if (broke)
          delete this[key];
        else
          Object.defineProperty(this, key, { configurable: true, writable: true, value });
        broke = broke || outer;
        return value;
      } catch (err) {
        delete this[key];
        broke = broke || outer;
        throw err;
      }
    },
    set(value) {
      Object.defineProperty(this, key, { configurable: true, writable: true, value });
    }
  });
}
function installLazyProp(inst, key, make, enumerable) {
  const proto = claim(inst, key);
  if (!proto)
    return;
  Object.defineProperty(proto, key, {
    configurable: true,
    get() {
      const desc = { configurable: true, writable: true, enumerable, value: void 0 };
      Object.defineProperty(this, key, desc);
      desc.value = make(this);
      Object.defineProperty(this, key, desc);
      return desc.value;
    },
    set(value) {
      Object.defineProperty(this, key, { configurable: true, writable: true, enumerable, value });
    }
  });
}
const CONSTANT_CATCH = "~constantCatch";
function constantCatch(value) {
  const fn2 = () => value;
  fn2[CONSTANT_CATCH] = true;
  return fn2;
}
var _a$1;
const _zodDesc = { value: void 0, enumerable: false };
let _E = "captureStackTrace" in Error ? Error : null;
function newError(Definition) {
  const E = _E;
  if (E) {
    const saved = E.stackTraceLimit;
    if (typeof saved === "number") {
      try {
        E.stackTraceLimit = 0;
      } catch {
        _E = null;
        return new Definition();
      }
      try {
        return new Definition();
      } finally {
        E.stackTraceLimit = saved;
      }
    }
  }
  return new Definition();
}
function $constructor(name2, initializer2, proto, params) {
  const zodProto = {};
  function Internals(def) {
    this.def = def;
    this.constr = _2;
    this.traits = /* @__PURE__ */ new Set();
  }
  Internals.prototype = zodProto;
  const protoMembers = proto;
  const initialized = protoMembers && /* @__PURE__ */ new WeakSet();
  function init2(inst, def) {
    if (!inst._zod) {
      _zodDesc.value = new Internals(def);
      try {
        Object.defineProperty(inst, "_zod", _zodDesc);
      } finally {
        _zodDesc.value = void 0;
      }
    } else if (inst._zod.traits.has(name2)) {
      return;
    }
    inst._zod.traits.add(name2);
    initializer2(inst, def);
    if (initialized) {
      const own2 = Object.getPrototypeOf(inst);
      const ctorProto = inst._zod.constr.prototype;
      let up2 = own2;
      while (up2 && up2 !== ctorProto)
        up2 = Object.getPrototypeOf(up2);
      const target = up2 ?? own2;
      if (!initialized.has(target)) {
        initialized.add(target);
        members(target, protoMembers);
      }
    }
    const proto2 = _2.prototype;
    for (const k2 in proto2) {
      if (!Object.prototype.hasOwnProperty.call(proto2, k2))
        continue;
      if (!(k2 in inst)) {
        inst[k2] = proto2[k2].bind(inst);
      }
    }
  }
  const Parent = (params == null ? void 0 : params.Parent) ?? Object;
  class Definition extends Parent {
  }
  Object.defineProperty(Definition, "name", { value: name2 });
  function _2(def) {
    var _a5;
    const inst = (params == null ? void 0 : params.Parent) ? newError(Definition) : this;
    init2(inst, def);
    const deferred = inst._zod.deferred;
    if (deferred) {
      for (const fn2 of deferred) {
        fn2();
      }
      inst._zod.deferred = void 0;
    }
    const pp2 = (_a5 = globalThis.__zod_globalConfig) == null ? void 0 : _a5.postProcessor;
    if (pp2)
      pp2(inst);
    return inst;
  }
  Object.defineProperty(_2, "init", { value: init2 });
  Object.defineProperty(_2, Symbol.hasInstance, {
    value: (inst) => {
      var _a5, _b2;
      if ((params == null ? void 0 : params.Parent) && inst instanceof params.Parent)
        return true;
      return (_b2 = (_a5 = inst == null ? void 0 : inst._zod) == null ? void 0 : _a5.traits) == null ? void 0 : _b2.has(name2);
    }
  });
  Object.defineProperty(_2, "name", { value: name2 });
  return _2;
}
class $ZodAsyncError extends Error {
  constructor() {
    super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`);
  }
}
class $ZodEncodeError extends Error {
  constructor(name2) {
    super(`Encountered unidirectional transform during encode: ${name2}`);
    this.name = "ZodEncodeError";
  }
}
(_a$1 = globalThis).__zod_globalConfig ?? (_a$1.__zod_globalConfig = {});
const globalConfig = globalThis.__zod_globalConfig;
function config(newConfig) {
  if (newConfig)
    Object.assign(globalConfig, newConfig);
  return globalConfig;
}
function _getMessage() {
  const internals = this._zod;
  internals.message ?? (internals.message = JSON.stringify(internals.def, jsonStringifyReplacer, 2));
  return internals.message;
}
function _setMessage(value) {
  this._zod.message = value;
}
const _messageDesc = {
  get: _getMessage,
  set: _setMessage,
  enumerable: true,
  configurable: true
};
const _issuesDesc = { value: void 0, enumerable: false };
const _installedToString = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]);
const initializer$1 = (inst, def) => {
  inst.name = "$ZodError";
  _issuesDesc.value = def;
  Object.defineProperty(inst, "issues", _issuesDesc);
  _issuesDesc.value = void 0;
  Object.defineProperty(inst, "message", _messageDesc);
  const proto = Object.getPrototypeOf(inst);
  if (!_installedToString.has(proto)) {
    _installedToString.add(proto);
    Object.defineProperty(proto, "toString", {
      configurable: true,
      enumerable: false,
      get() {
        const value = () => this.message;
        Object.defineProperty(this, "toString", { value, configurable: true, writable: true });
        return value;
      },
      set(value) {
        Object.defineProperty(this, "toString", { value, configurable: true, writable: true });
      }
    });
  }
};
const $ZodError = $constructor("$ZodError", initializer$1);
function node(obj, key, make) {
  if (!Object.prototype.hasOwnProperty.call(obj, key)) {
    if (key === "__proto__") {
      Object.defineProperty(obj, key, { value: make(), writable: true, enumerable: true, configurable: true });
    } else {
      obj[key] = make();
    }
  }
  return obj[key];
}
function flattenError(error2, mapper = (issue2) => issue2.message) {
  const fieldErrors = {};
  const formErrors = [];
  for (const sub2 of error2.issues) {
    if (sub2.path.length > 0) {
      node(fieldErrors, sub2.path[0], () => []).push(mapper(sub2));
    } else {
      formErrors.push(mapper(sub2));
    }
  }
  return { formErrors, fieldErrors };
}
function formatError(error2, mapper = (issue2) => issue2.message) {
  const fieldErrors = { _errors: [] };
  const processError = (error3, path2 = []) => {
    for (const issue2 of error3.issues) {
      if (issue2.code === "invalid_union" && issue2.errors.length) {
        issue2.errors.map((issues) => processError({ issues }, [...path2, ...issue2.path]));
      } else if (issue2.code === "invalid_key") {
        processError({ issues: issue2.issues }, [...path2, ...issue2.path]);
      } else if (issue2.code === "invalid_element") {
        processError({ issues: issue2.issues }, [...path2, ...issue2.path]);
      } else {
        const fullpath = [...path2, ...issue2.path];
        if (fullpath.length === 0) {
          fieldErrors._errors.push(mapper(issue2));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < fullpath.length) {
            const el2 = fullpath[i];
            const terminal = i === fullpath.length - 1;
            if (el2 === "_errors") {
              if (terminal)
                curr._errors.push(mapper(issue2));
              i++;
              continue;
            }
            if (!Object.prototype.hasOwnProperty.call(curr, el2)) {
              Object.defineProperty(curr, el2, {
                value: { _errors: [] },
                enumerable: true,
                writable: true,
                configurable: true
              });
            }
            const node2 = curr[el2];
            if (terminal) {
              node2._errors.push(mapper(issue2));
            }
            curr = node2;
            i++;
          }
        }
      }
    }
  };
  processError(error2);
  return fieldErrors;
}
function finalizeParams(callee, params) {
  return { callee: (params == null ? void 0 : params.callee) ?? callee, Err: params == null ? void 0 : params.Err };
}
const _parse = (_Err) => {
  const fn2 = (schema, value, _ctx, _params) => {
    const ctx = _ctx ? { ..._ctx, async: false } : { async: false };
    const result = schema._zod.run({ value, issues: [] }, ctx);
    if (result instanceof Promise) {
      throw new $ZodAsyncError();
    }
    if (result.issues.length) {
      const e8 = new ((_params == null ? void 0 : _params.Err) ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
      captureStackTrace(e8, (_params == null ? void 0 : _params.callee) ?? fn2);
      throw e8;
    }
    return result.value;
  };
  return fn2;
};
const _parseAsync = (_Err) => {
  const fn2 = async (schema, value, _ctx, params) => {
    const ctx = _ctx ? { ..._ctx, async: true } : { async: true };
    let result = schema._zod.run({ value, issues: [] }, ctx);
    if (result instanceof Promise)
      result = await result;
    if (result.issues.length) {
      const e8 = new ((params == null ? void 0 : params.Err) ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
      captureStackTrace(e8, (params == null ? void 0 : params.callee) ?? fn2);
      throw e8;
    }
    return result.value;
  };
  return fn2;
};
const _safeParse = (_Err) => (schema, value, _ctx) => {
  const ctx = _ctx ? { ..._ctx, async: false } : { async: false };
  const result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise) {
    throw new $ZodAsyncError();
  }
  return result.issues.length ? failure(_Err, result.issues, ctx) : { success: true, data: result.value };
};
function failure(Err, issues, ctx) {
  let error2;
  return {
    success: false,
    get error() {
      if (!error2) {
        error2 = new Err(issues.map((iss) => finalizeIssue(iss, ctx, config())));
        issues = void 0;
        ctx = void 0;
      }
      return error2;
    },
    set error(e8) {
      error2 = e8;
      issues = void 0;
      ctx = void 0;
    }
  };
}
const _safeParseAsync = (_Err) => async (schema, value, _ctx) => {
  const ctx = _ctx ? { ..._ctx, async: true } : { async: true };
  let result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise)
    result = await result;
  return result.issues.length ? failure(_Err, result.issues, ctx) : { success: true, data: result.value };
};
const COMPILE_INVALID = /* @__PURE__ */ Symbol.for("zod.compile.invalid");
const COMPILE_FALLBACK = /* @__PURE__ */ Symbol.for("zod.compile.fallback");
const validate = (schema, value, _ctx) => {
  const validator = schema._zod.bag.validator;
  if (validator !== void 0) {
    if (validator(value) !== COMPILE_INVALID)
      return true;
    if (validator.definite === true && _ctx === void 0)
      return false;
  }
  return validateFallback(schema, value, _ctx);
};
function validateFallback(schema, value, _ctx) {
  const ctx = _ctx ? { ..._ctx, async: false, abortEarly: true } : { async: false, abortEarly: true };
  const fallbackRun = schema._zod.bag.fallbackRun;
  let result;
  if (fallbackRun) {
    ctx[COMPILE_FALLBACK] = true;
    result = fallbackRun({ value, issues: [] }, ctx);
  } else {
    result = schema._zod.run({ value, issues: [] }, ctx);
  }
  if (result instanceof Promise) {
    throw new $ZodAsyncError();
  }
  return result.issues.length === 0;
}
const validateAsync$1 = async (schema, value, _ctx) => {
  const ctx = _ctx ? { ..._ctx, async: true, abortEarly: true } : { async: true, abortEarly: true };
  let result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise)
    result = await result;
  return result.issues.length === 0;
};
const _encode = (_Err) => {
  const parse2 = _parse(_Err);
  const fn2 = (schema, value, _ctx, _params) => {
    const ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
    return parse2(schema, value, ctx, finalizeParams(fn2, _params));
  };
  return fn2;
};
const _decode = (_Err) => {
  const parse2 = _parse(_Err);
  const fn2 = (schema, value, _ctx, _params) => {
    return parse2(schema, value, _ctx, finalizeParams(fn2, _params));
  };
  return fn2;
};
const _encodeAsync = (_Err) => {
  const parseAsync2 = _parseAsync(_Err);
  const fn2 = async (schema, value, _ctx, _params) => {
    const ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
    return await parseAsync2(schema, value, ctx, finalizeParams(fn2, _params));
  };
  return fn2;
};
const _decodeAsync = (_Err) => {
  const parseAsync2 = _parseAsync(_Err);
  const fn2 = async (schema, value, _ctx, _params) => {
    return await parseAsync2(schema, value, _ctx, finalizeParams(fn2, _params));
  };
  return fn2;
};
const _safeEncode = (_Err) => (schema, value, _ctx) => {
  const ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
  return _safeParse(_Err)(schema, value, ctx);
};
const _safeDecode = (_Err) => (schema, value, _ctx) => {
  return _safeParse(_Err)(schema, value, _ctx);
};
const _safeEncodeAsync = (_Err) => async (schema, value, _ctx) => {
  const ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
  return _safeParseAsync(_Err)(schema, value, ctx);
};
const _safeDecodeAsync = (_Err) => async (schema, value, _ctx) => {
  return _safeParseAsync(_Err)(schema, value, _ctx);
};
const cuid = /^[cC][0-9a-z]{6,}$/;
const cuid2 = /^[0-9a-z]+$/;
const ulid = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/;
const xid = /^[0-9a-vA-V]{20}$/;
const ksuid = /^[A-Za-z0-9]{27}$/;
const nanoid = /^[a-zA-Z0-9_-]{21}$/;
function nanoidOfLength(length) {
  return new RegExp(`^[a-zA-Z0-9_-]{${length}}$`);
}
const duration = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
const guid = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
const uuid = (version2) => {
  if (!version2)
    return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
  return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${version2}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`);
};
const email = /^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
const _emoji$1 = `^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$`;
function emoji() {
  return new RegExp(_emoji$1, "u");
}
const ipv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
const ipv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
const cidrv4 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
const cidrv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
const base64 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
const base64url = /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/;
const httpProtocol = /^https?$/;
const e164 = /^\+[1-9]\d{6,14}$/;
const dateSource = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;
function anchor(source) {
  return new RegExp(`^${source}$`);
}
const date = /* @__PURE__ */ anchor(dateSource);
function timeSource(args) {
  const hhmm = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
  const regex = typeof args.precision === "number" ? args.precision === -1 ? `${hhmm}` : args.precision === 0 ? `${hhmm}:[0-5]\\d` : `${hhmm}:[0-5]\\d\\.\\d{${args.precision}}` : args.seconds ? `${hhmm}:[0-5]\\d(?:\\.\\d+)?` : `${hhmm}(?::[0-5]\\d(?:\\.\\d+)?)?`;
  return regex;
}
function time(args) {
  return new RegExp(`^${timeSource(args)}$`);
}
function datetime(args) {
  const opts = ["Z"];
  if (args.offset)
    opts.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);
  const qualified = `${timeSource({ precision: args.precision, seconds: true })}(?:${opts.join("|")})`;
  const timeRegex = args.local ? `${qualified}|${timeSource({ precision: args.precision })}` : qualified;
  return new RegExp(`^${dateSource}T(?:${timeRegex})$`);
}
const anyString = /^[\s\S]{0,}$/;
const lowercase = /^[^A-Z]*$/;
const uppercase = /^[^a-z]*$/;
const $ZodCheck = /* @__PURE__ */ $constructor("$ZodCheck", (inst, def) => {
  var _a5;
  inst._zod ?? (inst._zod = {});
  inst._zod.def = def;
  (_a5 = inst._zod).onattach ?? (_a5.onattach = []);
});
const _whenHasLength = (payload) => {
  const val = payload.value;
  return !nullish(val) && val.length !== void 0;
};
const $ZodCheckMaxLength = /* @__PURE__ */ $constructor("$ZodCheckMaxLength", (inst, def) => {
  var _a5;
  $ZodCheck.init(inst, def);
  (_a5 = inst._zod.def).when ?? (_a5.when = _whenHasLength);
  inst._zod.check = (payload) => {
    const input = payload.value;
    const units = input.length;
    const length = typeof input === "string" && units > def.maximum ? codePointLength(input) : units;
    if (length <= def.maximum)
      return;
    const origin = getLengthableOrigin(input);
    payload.issues.push({
      origin,
      code: "too_big",
      maximum: def.maximum,
      inclusive: true,
      input,
      inst,
      continue: !def.abort
    });
  };
});
const $ZodCheckMinLength = /* @__PURE__ */ $constructor("$ZodCheckMinLength", (inst, def) => {
  var _a5;
  $ZodCheck.init(inst, def);
  (_a5 = inst._zod.def).when ?? (_a5.when = _whenHasLength);
  inst._zod.check = (payload) => {
    const input = payload.value;
    const units = input.length;
    const length = typeof input === "string" && units >= def.minimum && units < def.minimum * 2 ? codePointLength(input) : units;
    if (length >= def.minimum)
      return;
    const origin = getLengthableOrigin(input);
    payload.issues.push({
      origin,
      code: "too_small",
      minimum: def.minimum,
      inclusive: true,
      input,
      inst,
      continue: !def.abort
    });
  };
});
const $ZodCheckLengthEquals = /* @__PURE__ */ $constructor("$ZodCheckLengthEquals", (inst, def) => {
  var _a5;
  $ZodCheck.init(inst, def);
  (_a5 = inst._zod.def).when ?? (_a5.when = _whenHasLength);
  inst._zod.check = (payload) => {
    const input = payload.value;
    const units = input.length;
    const length = typeof input === "string" && units >= def.length && units <= def.length * 2 ? codePointLength(input) : units;
    if (length === def.length)
      return;
    const origin = getLengthableOrigin(input);
    const tooBig = length > def.length;
    payload.issues.push({
      origin,
      ...tooBig ? { code: "too_big", maximum: def.length } : { code: "too_small", minimum: def.length },
      inclusive: true,
      exact: true,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
const $ZodCheckStringFormat = /* @__PURE__ */ $constructor("$ZodCheckStringFormat", (inst, def) => {
  var _a5, _b2;
  $ZodCheck.init(inst, def);
  if (def.pattern)
    (_a5 = inst._zod).check ?? (_a5.check = (payload) => {
      def.pattern.lastIndex = 0;
      if (def.pattern.test(payload.value))
        return;
      payload.issues.push({
        origin: "string",
        code: "invalid_format",
        format: def.format,
        input: payload.value,
        ...def.pattern ? { pattern: def.pattern.toString() } : {},
        inst,
        continue: !def.abort
      });
    });
  else
    (_b2 = inst._zod).check ?? (_b2.check = () => {
    });
});
const $ZodCheckRegex = /* @__PURE__ */ $constructor("$ZodCheckRegex", (inst, def) => {
  $ZodCheckStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    def.pattern.lastIndex = 0;
    if (def.pattern.test(payload.value))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: payload.value,
      pattern: def.pattern.toString(),
      inst,
      continue: !def.abort
    });
  };
});
const $ZodCheckLowerCase = /* @__PURE__ */ $constructor("$ZodCheckLowerCase", (inst, def) => {
  def.pattern ?? (def.pattern = lowercase);
  $ZodCheckStringFormat.init(inst, def);
});
const $ZodCheckUpperCase = /* @__PURE__ */ $constructor("$ZodCheckUpperCase", (inst, def) => {
  def.pattern ?? (def.pattern = uppercase);
  $ZodCheckStringFormat.init(inst, def);
});
const $ZodCheckIncludes = /* @__PURE__ */ $constructor("$ZodCheckIncludes", (inst, def) => {
  $ZodCheck.init(inst, def);
  const escapedRegex = escapeRegex(def.includes);
  const pattern = new RegExp(typeof def.position === "number" ? `^.{${def.position},}${escapedRegex}` : escapedRegex);
  def.pattern = pattern;
  inst._zod.check = (payload) => {
    if (payload.value.includes(def.includes, def.position))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: def.includes,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
const $ZodCheckStartsWith = /* @__PURE__ */ $constructor("$ZodCheckStartsWith", (inst, def) => {
  $ZodCheck.init(inst, def);
  const pattern = new RegExp(`^${escapeRegex(def.prefix)}.*`);
  def.pattern ?? (def.pattern = pattern);
  inst._zod.check = (payload) => {
    if (payload.value.startsWith(def.prefix))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: def.prefix,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
const $ZodCheckEndsWith = /* @__PURE__ */ $constructor("$ZodCheckEndsWith", (inst, def) => {
  $ZodCheck.init(inst, def);
  const pattern = new RegExp(`.*${escapeRegex(def.suffix)}$`);
  def.pattern ?? (def.pattern = pattern);
  inst._zod.check = (payload) => {
    if (payload.value.endsWith(def.suffix))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: def.suffix,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
const $ZodCheckOverwrite = /* @__PURE__ */ $constructor("$ZodCheckOverwrite", (inst, def) => {
  $ZodCheck.init(inst, def);
  inst._zod.check = (payload) => {
    payload.value = def.tx(payload.value);
  };
});
class Doc {
  constructor(args = [], closed = {}) {
    this.content = [];
    this.indent = 0;
    this.args = args;
    this.closed = closed;
  }
  // the compiler catches a child's throw and keeps writing into this doc, so the indent has to unwind with it
  indented(fn2) {
    this.indent += 1;
    try {
      fn2(this);
    } finally {
      this.indent -= 1;
    }
  }
  write(arg) {
    if (typeof arg === "function") {
      arg(this, { execution: "sync" });
      arg(this, { execution: "async" });
      return;
    }
    const content = arg;
    const lines = content.split("\n").filter((x) => x);
    const minIndent = Math.min(...lines.map((x) => x.length - x.trimStart().length));
    const dedented = lines.map((x) => x.slice(minIndent)).map((x) => " ".repeat(this.indent * 2) + x);
    for (const line of dedented) {
      this.content.push(line);
    }
  }
  compile() {
    const F = Function;
    const content = (this == null ? void 0 : this.content) ?? [``];
    const factory = new F(...Object.keys(this.closed), `return function (${this.args.join(", ")}) {
${content.join("\n")}
};`);
    return factory(...Object.values(this.closed));
  }
}
const version = {
  major: 4,
  minor: 6,
  patch: 7
};
const $ZodType = /* @__PURE__ */ $constructor("$ZodType", (inst, def) => {
  var _a6;
  var _a5;
  inst ?? (inst = {});
  inst._zod.def = def;
  inst._zod.bag = inst._zod.bag || {};
  inst._zod.version = version;
  const defChecks = inst._zod.def.checks;
  const checks = inst._zod.traits.has("$ZodCheck") ? [inst, ...defChecks ?? []] : (defChecks == null ? void 0 : defChecks.length) ? [...defChecks] : [];
  for (const ch of checks) {
    for (const fn2 of ch._zod.onattach) {
      fn2(inst);
    }
  }
  if (checks.length === 0) {
    (_a5 = inst._zod).deferred ?? (_a5.deferred = []);
    (_a6 = inst._zod.deferred) == null ? void 0 : _a6.push(() => {
      inst._zod.run = inst._zod.parse;
    });
  } else {
    const runChecks = (payload, checks2, ctx) => {
      if (payload.memo)
        return payload;
      let isAborted = aborted(payload);
      let asyncResult;
      for (const ch of checks2) {
        if (ch._zod.def.when) {
          if (explicitlyAborted(payload))
            continue;
          const shouldRun = ch._zod.def.when(payload);
          if (!shouldRun)
            continue;
        } else if (isAborted) {
          continue;
        }
        const currLen = payload.issues.length;
        const _2 = ch._zod.check(payload);
        if (_2 instanceof Promise && (ctx == null ? void 0 : ctx.async) === false) {
          throw new $ZodAsyncError();
        }
        if (asyncResult || _2 instanceof Promise) {
          asyncResult = (asyncResult ?? Promise.resolve()).then(async () => {
            await _2;
            const nextLen = payload.issues.length;
            if (nextLen === currLen)
              return;
            attachSchema(payload.issues, currLen, inst);
            if (!isAborted)
              isAborted = aborted(payload, currLen);
          });
        } else {
          const nextLen = payload.issues.length;
          if (nextLen === currLen)
            continue;
          attachSchema(payload.issues, currLen, inst);
          if (!isAborted)
            isAborted = aborted(payload, currLen);
        }
      }
      if (asyncResult) {
        return asyncResult.then(() => {
          return payload;
        });
      }
      return payload;
    };
    const handleCanaryResult = (canary, payload, ctx) => {
      if (aborted(canary)) {
        canary.aborted = true;
        return canary;
      }
      const checkResult = runChecks(payload, checks, ctx);
      if (checkResult instanceof Promise) {
        if (ctx.async === false)
          throw new $ZodAsyncError();
        return checkResult.then((checkResult2) => inst._zod.parse(checkResult2, ctx));
      }
      return inst._zod.parse(checkResult, ctx);
    };
    inst._zod.run = (payload, ctx) => {
      if (ctx.skipChecks) {
        return inst._zod.parse(payload, ctx);
      }
      if (ctx.direction === "backward") {
        const canary = inst._zod.parse({ value: payload.value, issues: [] }, { ...ctx, skipChecks: true });
        if (canary instanceof Promise) {
          return canary.then((canary2) => {
            return handleCanaryResult(canary2, payload, ctx);
          });
        }
        return handleCanaryResult(canary, payload, ctx);
      }
      const result = inst._zod.parse(payload, ctx);
      if (result instanceof Promise) {
        if (ctx.async === false)
          throw new $ZodAsyncError();
        return result.then((result2) => runChecks(result2, checks, ctx));
      }
      return runChecks(result, checks, ctx);
    };
  }
}, {
  // Wrappers extend this by installing a richer factory over it; reading it eagerly would defeat the laziness.
  get "~standard"() {
    return hide(this, "~standard", standardProps(this));
  },
  set "~standard"(value) {
    own(this, "~standard", value);
  }
});
const toStandardResult = (r, ctx) => r.issues.length ? { issues: r.issues.map((iss) => finalizeIssue(iss, ctx, config())) } : { value: r.value };
async function validateAsync(inst, value) {
  const ctx = { async: true };
  return toStandardResult(await inst._zod.run({ value, issues: [] }, ctx), ctx);
}
function standardProps(inst) {
  return {
    validate: (value) => {
      const ctx = { async: false };
      try {
        const r = inst._zod.run({ value, issues: [] }, ctx);
        if (!(r instanceof Promise))
          return toStandardResult(r, ctx);
      } catch (_2) {
      }
      return validateAsync(inst, value);
    },
    vendor: "zod",
    version: 1
  };
}
const $ZodString = /* @__PURE__ */ $constructor("$ZodString", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = def.pattern ?? anyString;
  inst._zod.parse = (payload, _2) => {
    if (def.coerce)
      try {
        payload.value = String(payload.value);
      } catch (_3) {
      }
    if (typeof payload.value === "string")
      return payload;
    payload.issues.push({
      expected: "string",
      code: "invalid_type",
      input: payload.value,
      inst
    });
    return payload;
  };
});
const $ZodStringFormat = /* @__PURE__ */ $constructor("$ZodStringFormat", (inst, def) => {
  $ZodCheckStringFormat.init(inst, def);
  $ZodString.init(inst, def);
});
const $ZodGUID = /* @__PURE__ */ $constructor("$ZodGUID", (inst, def) => {
  def.pattern ?? (def.pattern = guid);
  $ZodStringFormat.init(inst, def);
});
const $ZodUUID = /* @__PURE__ */ $constructor("$ZodUUID", (inst, def) => {
  if (def.version) {
    const versionMap = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    };
    const v = versionMap[def.version];
    if (v === void 0)
      throw new Error(`Invalid UUID version: "${def.version}"`);
    def.pattern ?? (def.pattern = uuid(v));
  } else
    def.pattern ?? (def.pattern = uuid());
  $ZodStringFormat.init(inst, def);
});
const $ZodEmail = /* @__PURE__ */ $constructor("$ZodEmail", (inst, def) => {
  def.pattern ?? (def.pattern = email);
  $ZodStringFormat.init(inst, def);
});
const URL_BAD_FORMAT = 1;
const URL_UNPARSEABLE = 2;
function canParseURL(input) {
  try {
    if (typeof URL !== "undefined" && typeof URL.canParse === "function")
      return URL.canParse(input);
    new URL(input);
    return true;
  } catch {
    return false;
  }
}
function validateURL(trimmed, def) {
  if (!("normalize" in def) && !("hostname" in def) && !("protocol" in def)) {
    return canParseURL(trimmed) || URL_UNPARSEABLE;
  }
  return parseURLObject(trimmed, def);
}
function parseURLObject(trimmed, def) {
  var _a5;
  if (!def.normalize && ((_a5 = def.protocol) == null ? void 0 : _a5.source) === httpProtocol.source && !/^https?:\/\//i.test(trimmed)) {
    return URL_BAD_FORMAT;
  }
  try {
    if (typeof URL !== "undefined") {
      const URLStatic = URL;
      if (typeof URLStatic.parse === "function")
        return URLStatic.parse(trimmed) ?? URL_UNPARSEABLE;
    }
    return new URL(trimmed);
  } catch {
    return URL_UNPARSEABLE;
  }
}
const asciiTabOrNewline = /[\t\n\r]/g;
function stripTabAndNewline(value) {
  return value.replace(asciiTabOrNewline, "");
}
function urlHostnameOk(url, hostname) {
  hostname.lastIndex = 0;
  return hostname.test(url.hostname);
}
function urlProtocolOk(url, protocol) {
  protocol.lastIndex = 0;
  return protocol.test(url.protocol.endsWith(":") ? url.protocol.slice(0, -1) : url.protocol);
}
const $ZodURL = /* @__PURE__ */ $constructor("$ZodURL", (inst, def) => {
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    try {
      const trimmed = payload.value.trim();
      const url = validateURL(trimmed, def);
      if (url === URL_BAD_FORMAT) {
        payload.issues.push({
          code: "invalid_format",
          format: "url",
          note: "Invalid URL format",
          input: payload.value,
          inst,
          continue: !def.abort
        });
        return;
      }
      if (url === URL_UNPARSEABLE) {
        payload.issues.push({
          code: "invalid_format",
          format: "url",
          input: payload.value,
          inst,
          continue: !def.abort
        });
        return;
      }
      if (url === true) {
        payload.value = stripTabAndNewline(trimmed);
        return;
      }
      if (def.hostname && !urlHostnameOk(url, def.hostname)) {
        payload.issues.push({
          code: "invalid_format",
          format: "url",
          note: "Invalid hostname",
          pattern: def.hostname.source,
          input: payload.value,
          inst,
          continue: !def.abort
        });
      }
      if (def.protocol && !urlProtocolOk(url, def.protocol)) {
        payload.issues.push({
          code: "invalid_format",
          format: "url",
          note: "Invalid protocol",
          pattern: def.protocol.source,
          input: payload.value,
          inst,
          continue: !def.abort
        });
      }
      payload.value = def.normalize ? url.href : stripTabAndNewline(trimmed);
      return;
    } catch (_2) {
      payload.issues.push({
        code: "invalid_format",
        format: "url",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    }
  };
});
const $ZodEmoji = /* @__PURE__ */ $constructor("$ZodEmoji", (inst, def) => {
  def.pattern ?? (def.pattern = emoji());
  $ZodStringFormat.init(inst, def);
});
const $ZodNanoID = /* @__PURE__ */ $constructor("$ZodNanoID", (inst, def) => {
  if (def.length !== void 0 && (!Number.isInteger(def.length) || def.length < 1))
    throw new Error(`Invalid nanoid length: ${def.length}`);
  def.pattern ?? (def.pattern = def.length === void 0 ? nanoid : nanoidOfLength(def.length));
  $ZodStringFormat.init(inst, def);
});
const $ZodCUID = /* @__PURE__ */ $constructor("$ZodCUID", (inst, def) => {
  def.pattern ?? (def.pattern = cuid);
  $ZodStringFormat.init(inst, def);
});
const $ZodCUID2 = /* @__PURE__ */ $constructor("$ZodCUID2", (inst, def) => {
  def.pattern ?? (def.pattern = cuid2);
  $ZodStringFormat.init(inst, def);
});
const $ZodULID = /* @__PURE__ */ $constructor("$ZodULID", (inst, def) => {
  def.pattern ?? (def.pattern = ulid);
  $ZodStringFormat.init(inst, def);
});
const $ZodXID = /* @__PURE__ */ $constructor("$ZodXID", (inst, def) => {
  def.pattern ?? (def.pattern = xid);
  $ZodStringFormat.init(inst, def);
});
const $ZodKSUID = /* @__PURE__ */ $constructor("$ZodKSUID", (inst, def) => {
  def.pattern ?? (def.pattern = ksuid);
  $ZodStringFormat.init(inst, def);
});
const $ZodISODateTime = /* @__PURE__ */ $constructor("$ZodISODateTime", (inst, def) => {
  def.pattern ?? (def.pattern = datetime(def));
  $ZodStringFormat.init(inst, def);
});
const $ZodISODate = /* @__PURE__ */ $constructor("$ZodISODate", (inst, def) => {
  def.pattern ?? (def.pattern = date);
  $ZodStringFormat.init(inst, def);
});
const $ZodISOTime = /* @__PURE__ */ $constructor("$ZodISOTime", (inst, def) => {
  def.pattern ?? (def.pattern = time(def));
  $ZodStringFormat.init(inst, def);
});
const $ZodISODuration = /* @__PURE__ */ $constructor("$ZodISODuration", (inst, def) => {
  def.pattern ?? (def.pattern = duration);
  $ZodStringFormat.init(inst, def);
});
const $ZodIPv4 = /* @__PURE__ */ $constructor("$ZodIPv4", (inst, def) => {
  def.pattern ?? (def.pattern = ipv4);
  $ZodStringFormat.init(inst, def);
});
const ipv6Alphabet = /^[0-9a-fA-F:.]+$/;
function isValidIPv6(value) {
  if (!ipv6Alphabet.test(value))
    return false;
  return canParseURL(`http://[${value}]`);
}
const $ZodIPv6 = /* @__PURE__ */ $constructor("$ZodIPv6", (inst, def) => {
  def.pattern ?? (def.pattern = ipv6);
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    if (!isValidIPv6(payload.value)) {
      payload.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    }
  };
});
const $ZodCIDRv4 = /* @__PURE__ */ $constructor("$ZodCIDRv4", (inst, def) => {
  def.pattern ?? (def.pattern = cidrv4);
  $ZodStringFormat.init(inst, def);
});
function isValidCIDRv6(value) {
  const parts = value.split("/");
  if (parts.length !== 2)
    return false;
  const [address, prefix] = parts;
  if (!prefix)
    return false;
  const prefixNum = Number(prefix);
  if (`${prefixNum}` !== prefix)
    return false;
  if (prefixNum < 0 || prefixNum > 128)
    return false;
  return isValidIPv6(address);
}
const $ZodCIDRv6 = /* @__PURE__ */ $constructor("$ZodCIDRv6", (inst, def) => {
  def.pattern ?? (def.pattern = cidrv6);
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    if (!isValidCIDRv6(payload.value)) {
      payload.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    }
  };
});
function isValidBase64(data) {
  if (data === "")
    return true;
  if (/\s/.test(data))
    return false;
  if (data.length % 4 !== 0)
    return false;
  try {
    atob(data);
    return true;
  } catch {
    return false;
  }
}
const base64Charset = /^[0-9a-zA-Z+/]*={0,2}$/;
const $ZodBase64 = /* @__PURE__ */ $constructor("$ZodBase64", (inst, def) => {
  def.pattern ?? (def.pattern = base64Charset);
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    if (isValidBase64(payload.value))
      return;
    payload.issues.push({
      code: "invalid_format",
      format: "base64",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
const base64urlCharset = /^[A-Za-z0-9_-]*$/;
function isValidBase64URL(data) {
  if (!base64urlCharset.test(data))
    return false;
  const base642 = data.replace(/[-_]/g, (c) => c === "-" ? "+" : "/");
  const padded = base642.padEnd(Math.ceil(base642.length / 4) * 4, "=");
  return isValidBase64(padded);
}
const $ZodBase64URL = /* @__PURE__ */ $constructor("$ZodBase64URL", (inst, def) => {
  def.pattern ?? (def.pattern = base64urlCharset);
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    if (isValidBase64URL(payload.value))
      return;
    payload.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
const $ZodE164 = /* @__PURE__ */ $constructor("$ZodE164", (inst, def) => {
  def.pattern ?? (def.pattern = e164);
  $ZodStringFormat.init(inst, def);
});
function isValidJWT(token, algorithm = null) {
  try {
    const tokensParts = token.split(".");
    if (tokensParts.length !== 3)
      return false;
    const [header] = tokensParts;
    if (!header)
      return false;
    const parsedHeader = JSON.parse(atob(header));
    if ("typ" in parsedHeader && (parsedHeader == null ? void 0 : parsedHeader.typ) !== "JWT")
      return false;
    if (!parsedHeader.alg)
      return false;
    if (algorithm && (!("alg" in parsedHeader) || parsedHeader.alg !== algorithm))
      return false;
    return true;
  } catch {
    return false;
  }
}
const $ZodJWT = /* @__PURE__ */ $constructor("$ZodJWT", (inst, def) => {
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    if (isValidJWT(payload.value, def.alg))
      return;
    payload.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
const $ZodUnknown = /* @__PURE__ */ $constructor("$ZodUnknown", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload) => payload;
});
const $ZodNever = /* @__PURE__ */ $constructor("$ZodNever", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _ctx) => {
    payload.issues.push({
      expected: "never",
      code: "invalid_type",
      input: payload.value,
      inst
    });
    return payload;
  };
});
function capSize(inst, size) {
  const caps = sizeCaps(inst._zod.def.checks);
  if (!caps.length)
    return;
  const cap = Math.min(...caps.map((c) => c[0]));
  const parse2 = inst._zod.parse;
  inst._zod.parse = (payload, ctx) => {
    const n = size(payload.value);
    if (n > cap && !(ctx == null ? void 0 : ctx.skipChecks) && (ctx == null ? void 0 : ctx.direction) !== "backward") {
      for (const [max2, ch] of sizeCaps(inst._zod.def.checks)) {
        if (n > max2 && ch._zod.def.when(payload)) {
          const start = payload.issues.length;
          ch._zod.check(payload);
          payload.issues[start].continue = false;
          attachSchema(payload.issues, start, inst);
          return payload;
        }
      }
    }
    return parse2(payload, ctx);
  };
}
const arraySize = (input) => Array.isArray(input) ? input.length : -1;
function handleArrayResult(result, final, index) {
  if (result.issues.length) {
    final.issues.push(...prefixIssues(index, result.issues));
  }
  final.value[index] = result.value;
}
const $ZodArray = /* @__PURE__ */ $constructor("$ZodArray", (inst, def) => {
  $ZodType.init(inst, def);
  const memo2 = globalConfig.memoizer;
  memo2 == null ? void 0 : memo2.attach(inst);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!Array.isArray(input)) {
      payload.issues.push({
        expected: "array",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    payload.value = memo2 ? memo2.alloc(inst, payload, Array(input.length), ctx) : Array(input.length);
    const proms = [];
    const abortEarly = ctx == null ? void 0 : ctx.abortEarly;
    for (let i = 0; i < input.length; i++) {
      const item = input[i];
      const result = def.element._zod.run({
        value: item,
        issues: []
      }, ctx);
      if (result instanceof Promise) {
        proms.push(result.then((result2) => handleArrayResult(result2, payload, i)));
      } else {
        handleArrayResult(result, payload, i);
        if (abortEarly && result.issues.length !== 0 && aborted(result))
          break;
      }
    }
    if (proms.length) {
      return Promise.all(proms).then(() => payload);
    }
    return payload;
  };
  capSize(inst, arraySize);
});
function handlePropertyResult(result, final, key, input, optin, optout) {
  const isPresent = key in input;
  const isOptionalOut = optout === "optional";
  if (!isPresent && isOptionalOut && optin === "optional") {
    return;
  }
  if (result.issues.length) {
    if (optin !== void 0 && isOptionalOut && !isPresent) {
      return;
    }
    final.issues.push(...prefixIssues(key, result.issues));
  }
  if (!isPresent && optin === void 0) {
    if (!result.issues.length) {
      final.issues.push({
        code: "invalid_type",
        expected: "nonoptional",
        input: void 0,
        path: [key]
      });
    }
    return;
  }
  if (result.value === void 0) {
    if (isPresent || optin === "defaulted" && !isOptionalOut) {
      final.value[key] = void 0;
    }
  } else {
    final.value[key] = result.value;
  }
}
const NO_SYMBOL_KEYS = [];
function normalizeDef(def) {
  var _a5, _b2, _c3, _d3;
  const keys = Object.keys(def.shape);
  const ownSymbols = Object.getOwnPropertySymbols(def.shape);
  const symbolKeys = ownSymbols.length ? ownSymbols : NO_SYMBOL_KEYS;
  const allKeys = symbolKeys.length ? [...keys, ...symbolKeys] : keys;
  for (const k2 of allKeys) {
    if (!((_d3 = (_c3 = (_b2 = (_a5 = def.shape) == null ? void 0 : _a5[k2]) == null ? void 0 : _b2._zod) == null ? void 0 : _c3.traits) == null ? void 0 : _d3.has("$ZodType"))) {
      throw new Error(`Invalid element at key "${String(k2)}": expected a Zod schema`);
    }
  }
  const okeys = optionalKeys(def.shape);
  return {
    ...def,
    allKeys,
    symbolKeys,
    // string-only: handleCatchall matches it against `for...in`, which never yields a symbol
    keySet: new Set(keys),
    numKeys: keys.length,
    optionalKeys: new Set(okeys)
  };
}
function handleCatchall(proms, input, payload, ctx, def, inst, abortEarly) {
  const unrecognized = [];
  const keySet = def.keySet;
  const _catchall = def.catchall._zod;
  const t = _catchall.def.type;
  const optin = _catchall.optin;
  const optout = _catchall.optout;
  let seen = 0;
  for (const key in input) {
    if (abortEarly && payload.issues.length !== seen) {
      if (aborted(payload, seen))
        break;
      seen = payload.issues.length;
    }
    if (keySet.has(key))
      continue;
    if (key === "__proto__") {
      if (t === "never")
        unrecognized.push(key);
      continue;
    }
    if (t === "never") {
      unrecognized.push(key);
      continue;
    }
    const r = _catchall.run({ value: input[key], issues: [] }, ctx);
    if (r instanceof Promise) {
      proms.push(r.then((r2) => handlePropertyResult(r2, payload, key, input, optin, optout)));
    } else {
      handlePropertyResult(r, payload, key, input, optin, optout);
    }
  }
  if (unrecognized.length) {
    payload.issues.push({
      code: "unrecognized_keys",
      keys: unrecognized,
      input,
      inst,
      // Describes the shape of the input, not the validity of the parsed value, so it never aborts. The parse still fails; the schema's own checks just get to run first, and an enclosing intersection can reconcile the key against a sibling operand.
      continue: true
    });
  }
  if (!proms.length)
    return payload;
  return Promise.all(proms).then(() => {
    return payload;
  });
}
const $ZodObject = /* @__PURE__ */ $constructor("$ZodObject", (inst, def) => {
  $ZodType.init(inst, def);
  const desc = Object.getOwnPropertyDescriptor(def, "shape");
  const sh = (desc == null ? void 0 : desc.get) ? desc.get.raw : def.shape ?? {};
  if (sh) {
    const get = () => {
      const newSh = { ...sh };
      Object.defineProperty(def, "shape", { value: newSh });
      get.raw = newSh;
      return newSh;
    };
    get.raw = sh;
    Object.defineProperty(def, "shape", { get });
  }
  const _normalized = cached(() => normalizeDef(def));
  defineLazyInternal(inst, "propValues", (zod) => {
    const shape = zod.def.shape;
    const propValues = {};
    for (const key in shape) {
      const field = shape[key]._zod;
      if (field.values) {
        if (!Object.prototype.hasOwnProperty.call(propValues, key)) {
          assignProp(propValues, key, /* @__PURE__ */ new Set());
        }
        for (const v of field.values)
          propValues[key].add(v);
        if (field.optin !== void 0)
          propValues[key].add(void 0);
      }
    }
    return propValues;
  });
  const isObject$1 = isObject;
  const catchall = def.catchall;
  let value;
  const memo2 = globalConfig.memoizer;
  memo2 == null ? void 0 : memo2.attach(inst);
  inst._zod.parse = (payload, ctx) => {
    value ?? (value = _normalized.value);
    const input = payload.value;
    if (!isObject$1(input)) {
      payload.issues.push({
        expected: "object",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    payload.value = memo2 ? memo2.alloc(inst, payload, {}, ctx) : {};
    const proms = [];
    const shape = value.shape;
    const abortEarly = ctx == null ? void 0 : ctx.abortEarly;
    let seen = payload.issues.length;
    for (const key of value.allKeys) {
      if (abortEarly && payload.issues.length !== seen) {
        if (aborted(payload, seen))
          break;
        seen = payload.issues.length;
      }
      if (key === "__proto__")
        continue;
      const el2 = shape[key];
      const optin = el2._zod.optin;
      const optout = el2._zod.optout;
      const r = el2._zod.run({ value: input[key], issues: [] }, ctx);
      if (r instanceof Promise) {
        proms.push(r.then((r2) => handlePropertyResult(r2, payload, key, input, optin, optout)));
      } else {
        handlePropertyResult(r, payload, key, input, optin, optout);
      }
    }
    if (!catchall) {
      return proms.length ? Promise.all(proms).then(() => payload) : payload;
    }
    return handleCatchall(proms, input, payload, ctx, _normalized.value, inst, abortEarly === true);
  };
});
const $ZodObjectJIT = /* @__PURE__ */ $constructor("$ZodObjectJIT", (inst, def) => {
  $ZodObject.init(inst, def);
  const superParse = inst._zod.parse;
  const _normalized = cached(() => normalizeDef(def));
  const memo2 = globalConfig.memoizer;
  const generateFastpass = (shape) => {
    var _a5, _b2;
    const normalized = _normalized.value;
    const syms = normalized.symbolKeys;
    const doc = new Doc(["payload", "ctx"], { shape, inst, memo: memo2, syms });
    const parseStr = (k2) => `shape[${k2}]._zod.run({ value: input[${k2}], issues: [] }, ctx)`;
    const prefixStr = (id2, k2) => `
          let ${id2}_ab = false;
          for (let i = 0; i < ${id2}.issues.length; i++) {
            const iss = ${id2}.issues[i];
            iss.path = iss.path ? [${k2}, ...iss.path] : [${k2}];
            payload.issues.push(iss);
            if (iss.continue !== true) ${id2}_ab = true;
          }
          if (${id2}_ab && ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }`;
    doc.write(`const input = payload.value;`);
    const ids = /* @__PURE__ */ Object.create(null);
    let counter = 0;
    for (const key of normalized.allKeys) {
      ids[key] = `key_${counter++}`;
    }
    doc.write(memo2 ? `const newResult = memo.alloc(inst, payload, {}, ctx);` : `const newResult = {};`);
    for (const key of normalized.allKeys) {
      if (key === "__proto__")
        continue;
      const id2 = ids[key];
      const k2 = typeof key === "symbol" ? `syms[${syms.indexOf(key)}]` : esc(key);
      const isPresent = `${k2} in input`;
      const schema = shape[key];
      const optin = (_a5 = schema == null ? void 0 : schema._zod) == null ? void 0 : _a5.optin;
      const isOptionalIn = optin !== void 0;
      const isOptionalOut = ((_b2 = schema == null ? void 0 : schema._zod) == null ? void 0 : _b2.optout) === "optional";
      doc.write(`const ${id2} = ${parseStr(k2)};`);
      if (isOptionalIn && isOptionalOut) {
        const assign = optin === "optional" ? `${id2}_present` : `${id2}.value !== undefined || ${id2}_present`;
        doc.write(`
        const ${id2}_present = ${isPresent};
        if (!${id2}.issues.length || ${id2}_present) {
          if (${id2}.issues.length) {${prefixStr(id2, k2)}
          }

          if (${assign}) {
            newResult[${k2}] = ${id2}.value;
          }
        }

      `);
      } else if (!isOptionalIn) {
        doc.write(`
        const ${id2}_present = ${isPresent};
        if (${id2}.issues.length) {${prefixStr(id2, k2)}
        }
        if (!${id2}_present && !${id2}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${k2}]
          });
          if (ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
        }

        if (${id2}_present) {
          newResult[${k2}] = ${id2}.value;
        }

      `);
      } else {
        doc.write(`
        if (${id2}.issues.length) {${prefixStr(id2, k2)}
        }
      `);
        if (optin === "defaulted") {
          doc.write(`newResult[${k2}] = ${id2}.value;`);
        } else {
          doc.write(`
        if (${id2}.value !== undefined || ${isPresent}) {
          newResult[${k2}] = ${id2}.value;
        }
      `);
        }
      }
    }
    doc.write(`payload.value = newResult;`);
    doc.write(`return payload;`);
    return doc.compile();
  };
  let fastpass;
  const isObject$1 = isObject;
  const jit = !globalConfig.jitless;
  const allowsEval$1 = allowsEval;
  const fastEnabled = jit && allowsEval$1.value;
  const catchall = def.catchall;
  let value;
  inst._zod.parse = (payload, ctx) => {
    value ?? (value = _normalized.value);
    const input = payload.value;
    if (!isObject$1(input)) {
      payload.issues.push({
        expected: "object",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    if (jit && fastEnabled && (ctx == null ? void 0 : ctx.async) === false && ctx.jitless !== true) {
      if (!fastpass)
        fastpass = generateFastpass(def.shape);
      payload = fastpass(payload, ctx);
      if (!catchall)
        return payload;
      return handleCatchall([], input, payload, ctx, value, inst, (ctx == null ? void 0 : ctx.abortEarly) === true);
    }
    return superParse(payload, ctx);
  };
});
function handleUnionResults(results, final, inst, ctx) {
  for (const result of results) {
    if (result.issues.length === 0) {
      final.value = result.value;
      return final;
    }
  }
  const nonaborted = results.filter((r) => !aborted(r));
  if (nonaborted.length === 1) {
    final.value = nonaborted[0].value;
    return nonaborted[0];
  }
  final.issues.push({
    code: "invalid_union",
    input: final.value,
    inst,
    errors: results.map((result) => result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
  });
  return final;
}
const $ZodUnion = /* @__PURE__ */ $constructor("$ZodUnion", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazyInternal(inst, "optin", (zod) => zod.def.options.some((o) => o._zod.optin === "defaulted") ? "defaulted" : zod.def.options.some((o) => o._zod.optin !== void 0) ? "optional" : void 0);
  defineLazyInternal(inst, "optout", (zod) => zod.def.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0);
  defineLazyInternal(inst, "values", (zod) => {
    if (zod.def.options.every((o) => o._zod.values)) {
      return new Set(zod.def.options.flatMap((option) => Array.from(option._zod.values)));
    }
    return void 0;
  });
  defineLazyInternal(inst, "pattern", (zod) => {
    if (zod.def.options.every((o) => o._zod.pattern)) {
      const patterns = zod.def.options.map((o) => o._zod.pattern);
      return new RegExp(`^(${patterns.map((p) => cleanRegex(p.source)).join("|")})$`);
    }
    return void 0;
  });
  const first = def.options.length === 1 ? def.options[0]._zod.run : null;
  inst._zod.parse = (payload, ctx) => {
    if (first) {
      return first(payload, ctx);
    }
    let async = false;
    const results = [];
    for (const option of def.options) {
      const result = option._zod.run({
        value: payload.value,
        issues: []
      }, ctx);
      if (result instanceof Promise) {
        results.push(result);
        async = true;
      } else {
        if (result.issues.length === 0)
          return result;
        results.push(result);
      }
    }
    if (!async)
      return handleUnionResults(results, payload, inst, ctx);
    return Promise.all(results).then((results2) => {
      return handleUnionResults(results2, payload, inst, ctx);
    });
  };
});
const $ZodIntersection = /* @__PURE__ */ $constructor("$ZodIntersection", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    const left = def.left._zod.run({ value: input, issues: [] }, ctx);
    const right = def.right._zod.run({ value: input, issues: [] }, ctx);
    const async = left instanceof Promise || right instanceof Promise;
    if (async) {
      return Promise.all([left, right]).then(([left2, right2]) => {
        return handleIntersectionResults(payload, left2, right2);
      });
    }
    return handleIntersectionResults(payload, left, right);
  };
});
function mergeValues(a, b) {
  if (a === b) {
    return { valid: true, data: a };
  }
  if (a instanceof Date && b instanceof Date && +a === +b) {
    return { valid: true, data: a };
  }
  if (isPlainObject(a) && isPlainObject(b)) {
    const bKeys = Object.keys(b);
    const sharedKeys = Object.keys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    if (Object.prototype.hasOwnProperty.call(newObj, "__proto__"))
      delete newObj.__proto__;
    for (const key of sharedKeys) {
      if (key === "__proto__")
        continue;
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return {
          valid: false,
          mergeErrorPath: [key, ...sharedValue.mergeErrorPath]
        };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return { valid: false, mergeErrorPath: [] };
    }
    const newArray = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return {
          valid: false,
          mergeErrorPath: [index, ...sharedValue.mergeErrorPath]
        };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  }
  return { valid: false, mergeErrorPath: [] };
}
function handleIntersectionResults(result, left, right) {
  const unrecKeys = /* @__PURE__ */ new Map();
  let unrecIssue;
  const keyIssues = /* @__PURE__ */ new Map();
  const collect = (iss, side) => {
    var _a5, _b2;
    let keys;
    if (iss.code === "unrecognized_keys" && !((_a5 = iss.path) == null ? void 0 : _a5.length)) {
      unrecIssue ?? (unrecIssue = iss);
      keys = iss.keys;
    } else if (iss.code === "invalid_key" && iss.origin === "record" && ((_b2 = iss.path) == null ? void 0 : _b2.length) === 1) {
      const k2 = String(iss.path[0]);
      if (!keyIssues.has(k2))
        keyIssues.set(k2, iss);
      keys = [k2];
    } else {
      return false;
    }
    for (const k2 of keys) {
      if (!unrecKeys.has(k2))
        unrecKeys.set(k2, {});
      unrecKeys.get(k2)[side] = true;
    }
    return true;
  };
  for (const iss of left.issues) {
    if (!collect(iss, "l"))
      result.issues.push(iss);
  }
  for (const iss of right.issues) {
    if (!collect(iss, "r"))
      result.issues.push(iss);
  }
  const bothKeys = [...unrecKeys].filter(([, f]) => f.l && f.r).map(([k2]) => k2);
  if (bothKeys.length) {
    const aggregated = unrecIssue ? bothKeys.filter((k2) => unrecIssue.keys.includes(k2)) : [];
    if (aggregated.length)
      result.issues.push({ ...unrecIssue, keys: aggregated });
    for (const k2 of bothKeys) {
      if (!aggregated.includes(k2) && keyIssues.has(k2))
        result.issues.push(keyIssues.get(k2));
    }
  }
  const merged = mergeValues(left.value, right.value);
  if (!merged.valid) {
    if (aborted(result))
      return result;
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(merged.mergeErrorPath)}`);
  }
  result.value = merged.data;
  return result;
}
const $ZodEnum = /* @__PURE__ */ $constructor("$ZodEnum", (inst, def) => {
  $ZodType.init(inst, def);
  const values = getEnumValues(def.entries);
  const valuesSet = new Set(values);
  inst._zod.values = valuesSet;
  defineLazyInternal(inst, "pattern", (zod) => {
    const patternValues = getEnumValues(zod.def.entries).filter((k2) => propertyKeyTypes.has(typeof k2));
    return new RegExp(patternValues.length ? `^(${patternValues.map((o) => escapeRegex(o.toString())).join("|")})$` : "^[^\\s\\S]$");
  });
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (valuesSet.has(input)) {
      return payload;
    }
    payload.issues.push({
      code: "invalid_value",
      values,
      input,
      inst
    });
    return payload;
  };
});
const $ZodTransform = /* @__PURE__ */ $constructor("$ZodTransform", (inst, def) => {
  var _a5;
  $ZodType.init(inst, def);
  inst._zod.optin = "optional";
  (_a5 = globalConfig.memoizer) == null ? void 0 : _a5.guard(inst);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      throw new $ZodEncodeError(inst.constructor.name);
    }
    const _out = def.transform(payload.value, payload);
    if (ctx.async) {
      const output = _out instanceof Promise ? _out : Promise.resolve(_out);
      return output.then((output2) => {
        payload.value = output2;
        return payload;
      });
    }
    if (_out instanceof Promise) {
      throw new $ZodAsyncError();
    }
    payload.value = _out;
    return payload;
  };
});
function handleOptionalResult(payload, result) {
  payload.value = result.issues.length ? void 0 : result.value;
  return payload;
}
const $ZodOptional = /* @__PURE__ */ $constructor("$ZodOptional", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazyInternal(inst, "optin", (zod) => zod.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional");
  inst._zod.optout = "optional";
  defineLazyInternal(inst, "values", (zod) => {
    const values = zod.def.innerType._zod.values;
    return values ? /* @__PURE__ */ new Set([...values, void 0]) : void 0;
  });
  defineLazyInternal(inst, "pattern", (zod) => {
    const pattern = zod.def.innerType._zod.pattern;
    return pattern ? new RegExp(`^(${cleanRegex(pattern.source)})?$`) : void 0;
  });
  inst._zod.parse = (payload, ctx) => {
    if (payload.value === void 0) {
      if (def.innerType._zod.optin !== "defaulted")
        return payload;
      const result = def.innerType._zod.run({ value: payload.value, issues: [] }, ctx);
      if (result instanceof Promise)
        return result.then((result2) => handleOptionalResult(payload, result2));
      return handleOptionalResult(payload, result);
    }
    return def.innerType._zod.run(payload, ctx);
  };
});
const $ZodExactOptional = /* @__PURE__ */ $constructor("$ZodExactOptional", (inst, def) => {
  $ZodOptional.init(inst, def);
  defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
  defineLazyInternal(inst, "pattern", (zod) => zod.def.innerType._zod.pattern);
  inst._zod.parse = (payload, ctx) => {
    return def.innerType._zod.run(payload, ctx);
  };
});
const $ZodNullable = /* @__PURE__ */ $constructor("$ZodNullable", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazyInternal(inst, "optin", (zod) => zod.def.innerType._zod.optin);
  defineLazyInternal(inst, "optout", (zod) => zod.def.innerType._zod.optout);
  defineLazyInternal(inst, "pattern", (zod) => {
    const pattern = zod.def.innerType._zod.pattern;
    return pattern ? new RegExp(`^(${cleanRegex(pattern.source)}|null)$`) : void 0;
  });
  defineLazyInternal(inst, "values", (zod) => {
    return zod.def.innerType._zod.values ? /* @__PURE__ */ new Set([...zod.def.innerType._zod.values, null]) : void 0;
  });
  inst._zod.parse = (payload, ctx) => {
    if (payload.value === null)
      return payload;
    return def.innerType._zod.run(payload, ctx);
  };
});
const $ZodDefault = /* @__PURE__ */ $constructor("$ZodDefault", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.optin = "defaulted";
  defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    if (payload.value === void 0) {
      payload.value = def.defaultValue;
      return payload;
    }
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then((result2) => handleDefaultResult(result2, def));
    }
    return handleDefaultResult(result, def);
  };
});
function handleDefaultResult(payload, def) {
  if (payload.value === void 0) {
    payload.value = def.defaultValue;
  }
  return payload;
}
const $ZodPrefault = /* @__PURE__ */ $constructor("$ZodPrefault", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.optin = "defaulted";
  defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    if (payload.value === void 0) {
      payload.value = def.defaultValue;
    }
    return def.innerType._zod.run(payload, ctx);
  };
});
const $ZodNonOptional = /* @__PURE__ */ $constructor("$ZodNonOptional", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazyInternal(inst, "values", (zod) => {
    const v = zod.def.innerType._zod.values;
    return v ? new Set([...v].filter((x) => x !== void 0)) : void 0;
  });
  inst._zod.parse = (payload, ctx) => {
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then((result2) => handleNonOptionalResult(result2, inst));
    }
    return handleNonOptionalResult(result, inst);
  };
});
function handleNonOptionalResult(payload, inst) {
  if (!payload.issues.length && payload.value === void 0) {
    payload.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: payload.value,
      inst
    });
  }
  return payload;
}
function handleCatchResult(payload, result, def, ctx) {
  if (!result.issues.length) {
    payload.value = result.value;
    if (result.memo)
      payload.memo = true;
    return payload;
  }
  payload.value = def.catchValue({
    ...result,
    value: payload.value,
    error: {
      issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config()))
    },
    input: payload.value
  });
  return payload;
}
const $ZodCatch = /* @__PURE__ */ $constructor("$ZodCatch", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazyInternal(inst, "optin", (zod) => zod.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional");
  defineLazyInternal(inst, "optout", (zod) => zod.def.innerType._zod.optout);
  defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    const result = def.innerType._zod.run({ value: payload.value, issues: [] }, ctx);
    if (result instanceof Promise) {
      return result.then((result2) => handleCatchResult(payload, result2, def, ctx));
    }
    return handleCatchResult(payload, result, def, ctx);
  };
});
const $ZodPipe = /* @__PURE__ */ $constructor("$ZodPipe", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazyInternal(inst, "values", (zod) => zod.def.in._zod.values);
  defineLazyInternal(inst, "optin", (zod) => zod.def.in._zod.optin);
  defineLazyInternal(inst, "optout", (zod) => zod.def.out._zod.optout);
  defineLazyInternal(inst, "propValues", (zod) => zod.def.in._zod.propValues);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      const right = def.out._zod.run(payload, ctx);
      if (right instanceof Promise) {
        return right.then((right2) => handlePipeResult(right2, def.in, ctx));
      }
      return handlePipeResult(right, def.in, ctx);
    }
    const left = def.in._zod.run(payload, ctx);
    if (left instanceof Promise) {
      return left.then((left2) => handlePipeResult(left2, def.out, ctx));
    }
    return handlePipeResult(left, def.out, ctx);
  };
});
function handlePipeResult(left, next, ctx) {
  if (left.issues.some((iss) => iss.code !== "unrecognized_keys")) {
    left.aborted = true;
    return left;
  }
  return next._zod.run({ value: left.value, issues: left.issues }, ctx);
}
const $ZodReadonly = /* @__PURE__ */ $constructor("$ZodReadonly", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazyInternal(inst, "propValues", (zod) => zod.def.innerType._zod.propValues);
  defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
  defineLazyInternal(inst, "optin", (zod) => {
    var _a5, _b2;
    return (_b2 = (_a5 = zod.def.innerType) == null ? void 0 : _a5._zod) == null ? void 0 : _b2.optin;
  });
  defineLazyInternal(inst, "optout", (zod) => {
    var _a5, _b2;
    return (_b2 = (_a5 = zod.def.innerType) == null ? void 0 : _a5._zod) == null ? void 0 : _b2.optout;
  });
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then(handleReadonlyResult);
    }
    return handleReadonlyResult(result);
  };
});
function handleReadonlyResult(payload) {
  if (!payload.memo)
    payload.value = Object.freeze(payload.value);
  return payload;
}
const $ZodCustom = /* @__PURE__ */ $constructor("$ZodCustom", (inst, def) => {
  $ZodCheck.init(inst, def);
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _2) => {
    return payload;
  };
  inst._zod.check = (payload) => {
    const input = payload.value;
    const r = def.fn(input);
    if (r instanceof Promise) {
      return r.then((r2) => handleRefineResult(r2, payload, input, inst));
    }
    handleRefineResult(r, payload, input, inst);
    return;
  };
});
function handleRefineResult(result, payload, input, inst) {
  if (!result) {
    const _iss = {
      code: "custom",
      input,
      inst,
      // incorporates params.error into issue reporting
      path: [...inst._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !inst._zod.def.abort
      // params: inst._zod.def.params,
    };
    if (inst._zod.def.params)
      _iss.params = inst._zod.def.params;
    payload.issues.push(issue(_iss));
  }
}
class $ZodCyclicError extends Error {
  constructor() {
    super(`Cannot parse a reference cycle that closes through a transform`);
    this.name = "ZodCyclicError";
  }
}
const STATE = "~memo";
const NO_ISSUES = [];
function isRef(value) {
  return value !== null && typeof value === "object";
}
function cloneIssues(issues) {
  return issues.map((iss) => iss.path ? { ...iss, path: iss.path.slice() } : { ...iss });
}
const recursive = /* @__PURE__ */ new WeakMap();
const NONE = 0;
const ASSUMED = 1;
const PROVEN = 2;
function isRecursive(inst, stack, resolve) {
  const cached2 = recursive.get(inst);
  if (cached2 !== void 0)
    return cached2 ? PROVEN : NONE;
  if (stack.has(inst))
    return PROVEN;
  stack.add(inst);
  let result = NONE;
  const check = (child) => {
    if (result !== PROVEN && (child == null ? void 0 : child._zod)) {
      const answer = isRecursive(child, stack);
      if (answer > result)
        result = answer;
    }
  };
  const shape = (sh, spread) => {
    var _a5;
    let answer = NONE;
    for (const key of Reflect.ownKeys(sh)) {
      const desc = Object.getOwnPropertyDescriptor(sh, key);
      if (!desc.enumerable)
        continue;
      const child = desc.get ? ASSUMED : ((_a5 = desc.value) == null ? void 0 : _a5._zod) ? isRecursive(desc.value, stack) : NONE;
      if (child > answer)
        answer = child;
    }
    return answer;
  };
  const merge2 = (answer) => {
    if (answer > result)
      result = answer;
  };
  const def = inst._zod.def;
  const kind = def.type;
  switch (kind) {
    case "object": {
      const raw2 = rawShape(def);
      merge2(raw2 ? shape(raw2) : ASSUMED);
      check(def.catchall);
      break;
    }
    case "array":
      check(def.element);
      break;
    case "tuple":
      for (const el2 of def.items)
        check(el2);
      check(def.rest);
      break;
    case "record":
    case "map":
      check(def.keyType);
      check(def.valueType);
      break;
    case "set":
      check(def.valueType);
      break;
    case "union":
      for (const el2 of def.options)
        check(el2);
      break;
    case "intersection":
      check(def.left);
      check(def.right);
      break;
    case "optional":
    case "nullable":
    case "default":
    case "prefault":
    case "catch":
    case "readonly":
    case "nonoptional":
    case "promise":
    case "success":
      check(def.innerType);
      break;
    case "pipe":
      check(def.in);
      check(def.out);
      break;
    case "function":
      check(def.input);
      check(def.output);
      break;
    case "lazy": {
      const inner = def._cachedInner ?? void 0;
      merge2(inner ? isRecursive(inner, stack) : ASSUMED);
      break;
    }
    case "template_literal":
    case "string":
    case "number":
    case "int":
    case "boolean":
    case "bigint":
    case "symbol":
    case "undefined":
    case "null":
    case "void":
    case "never":
    case "any":
    case "unknown":
    case "date":
    case "nan":
    case "enum":
    case "literal":
    case "file":
    case "transform":
    case "custom":
      break;
    default: {
      for (const key in def) {
        const desc = Object.getOwnPropertyDescriptor(def, key);
        if (!desc || desc.get)
          continue;
        const value = desc.value;
        if (!value || typeof value !== "object")
          continue;
        if (value._zod)
          check(value);
        else if (Array.isArray(value))
          for (const el2 of value)
            check(el2);
      }
    }
  }
  stack.delete(inst);
  return settle(inst, result);
}
function settle(inst, answer) {
  if (answer !== ASSUMED)
    recursive.set(inst, answer === PROVEN);
  return answer;
}
function bucketFor(state, inst) {
  let bucket = state.buckets.get(inst);
  if (!bucket) {
    bucket = /* @__PURE__ */ new WeakMap();
    state.buckets.set(inst, bucket);
  }
  return bucket;
}
let handoff;
const open = [];
const memo = {
  alloc(_inst, payload, empty2) {
    const bucket = handoff;
    if (!bucket)
      return empty2;
    handoff = void 0;
    const entry = { value: empty2, issues: null };
    bucket.set(payload.value, entry);
    open.push(entry);
    return empty2;
  },
  guard(inst) {
    var _a5;
    (_a5 = inst._zod).deferred ?? (_a5.deferred = []);
    inst._zod.deferred.push(() => {
      const base = inst._zod.parse;
      const wrapped = (payload, ctx) => {
        if (ctx.direction !== "backward" && isBackEdge(ctx, payload.value))
          throw new $ZodCyclicError();
        return base(payload, ctx);
      };
      inst._zod.parse = wrapped;
      if (inst._zod.run === base)
        inst._zod.run = wrapped;
    });
  },
  attach(inst) {
    var _a5;
    let isRecursiveInst;
    let rechecked = false;
    let lastCtx;
    let lastBucket;
    (_a5 = inst._zod).deferred ?? (_a5.deferred = []);
    inst._zod.deferred.push(() => {
      const base = inst._zod.parse;
      const wrapped = (payload, ctx) => {
        if (isRecursiveInst === void 0) {
          const walked = isRecursive(inst, /* @__PURE__ */ new Set());
          if (walked === NONE) {
            inst._zod.parse = base;
            if (inst._zod.run === wrapped)
              inst._zod.run = base;
            return base(payload, ctx);
          }
          if (walked === PROVEN || rechecked)
            isRecursiveInst = true;
          else
            rechecked = true;
        }
        const input = payload.value;
        if (!isRef(input))
          return base(payload, ctx);
        let state = ctx[STATE];
        if (!state) {
          state = { buckets: /* @__PURE__ */ new WeakMap(), backEdges: void 0 };
          ctx[STATE] = state;
        }
        let bucket;
        if (lastCtx === ctx) {
          bucket = lastBucket;
        } else {
          bucket = bucketFor(state, inst);
          lastCtx = ctx;
          lastBucket = bucket;
        }
        const hit = bucket.get(input);
        if (hit) {
          payload.value = hit.value;
          if (hit.issues) {
            if (hit.issues.length)
              payload.issues.push(...cloneIssues(hit.issues));
          } else {
            payload.memo = true;
            state.backEdges ?? (state.backEdges = /* @__PURE__ */ new WeakSet());
            state.backEdges.add(hit.value);
          }
          return payload;
        }
        handoff = bucket;
        const depth = open.length;
        const result = base(payload, ctx);
        handoff = void 0;
        const entry = open.length > depth ? open.pop() : void 0;
        if (result instanceof Promise) {
          return result.then((r) => {
            if (entry)
              entry.issues = r.issues.length ? cloneIssues(r.issues) : NO_ISSUES;
            return r;
          });
        }
        if (entry)
          entry.issues = result.issues.length ? cloneIssues(result.issues) : NO_ISSUES;
        return result;
      };
      inst._zod.parse = wrapped;
      if (inst._zod.run === base)
        inst._zod.run = wrapped;
    });
  }
};
function memoizer() {
  return memo;
}
function isBackEdge(ctx, value) {
  var _a5;
  const backEdges = (_a5 = ctx[STATE]) == null ? void 0 : _a5.backEdges;
  return backEdges !== void 0 && isRef(value) && backEdges.has(value);
}
const error = () => {
  const Sizable = {
    string: { unit: "characters", verb: "to have" },
    file: { unit: "bytes", verb: "to have" },
    array: { unit: "items", verb: "to have" },
    set: { unit: "items", verb: "to have" },
    map: { unit: "entries", verb: "to have" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "input",
    email: "email address",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datetime",
    date: "ISO date",
    time: "ISO time",
    duration: "ISO duration",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    mac: "MAC address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded string",
    base64url: "base64url-encoded string",
    json_string: "JSON string",
    e164: "E.164 number",
    currency_code: "currency code",
    credit_card: "credit card number",
    iban: "IBAN",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    // Compatibility: "nan" -> "NaN" for display
    nan: "NaN"
    // All other type names omitted - they fall back to raw values via ?? operator
  };
  function getTypeName(type, input) {
    if (type === "number" && typeof input === "number" && !Number.isFinite(input)) {
      return String(input);
    }
    return TypeDictionary[type] ?? type;
  }
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = getTypeName(issue2.expected);
        const receivedType = parsedType(issue2.input);
        const received = getTypeName(receivedType, issue2.input);
        return `Invalid input: expected ${expected}, received ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Invalid input: expected ${stringifyPrimitive(issue2.values[0])}`;
        return `Invalid option: expected one of ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.exact ? "exactly " : issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Too big: expected ${issue2.origin ?? "value"} to have ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elements"}`;
        return `Too big: expected ${issue2.origin ?? "value"} to be ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.exact ? "exactly " : issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Too small: expected ${issue2.origin} to have ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Too small: expected ${issue2.origin} to be ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Invalid string: must start with "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `Invalid string: must end with "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Invalid string: must include "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Invalid string: must match pattern ${_issue.pattern}`;
        return `Invalid ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Invalid number: must be a multiple of ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Unrecognized key${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Invalid key in ${issue2.origin}`;
      case "invalid_union":
        if (issue2.options && Array.isArray(issue2.options) && issue2.options.length > 0) {
          const opts = issue2.options.map((o) => `'${o}'`).join(" | ");
          return `Invalid discriminator value. Expected ${opts}`;
        }
        if (issue2.inclusive === false) {
          return "Invalid input: more than one option matched";
        }
        return "Invalid input";
      case "invalid_element":
        return `Invalid value in ${issue2.origin}`;
      default:
        return `Invalid input`;
    }
  };
};
function en() {
  return {
    localeError: error()
  };
}
var _a;
class $ZodRegistry {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap();
    this._idmap = /* @__PURE__ */ new Map();
  }
  add(schema, ..._meta) {
    const meta = _meta[0];
    this._map.set(schema, meta);
    if (meta && typeof meta === "object" && "id" in meta) {
      this._idmap.set(meta.id, schema);
    }
    return this;
  }
  clear() {
    this._map = /* @__PURE__ */ new WeakMap();
    this._idmap = /* @__PURE__ */ new Map();
    return this;
  }
  remove(schema) {
    const meta = this._map.get(schema);
    if (meta && typeof meta === "object" && "id" in meta) {
      this._idmap.delete(meta.id);
    }
    this._map.delete(schema);
    return this;
  }
  get(schema) {
    const p = schema._zod.parent;
    if (p) {
      const pm2 = { ...this.get(p) ?? {} };
      delete pm2.id;
      const f = { ...pm2, ...this._map.get(schema) };
      return Object.keys(f).length ? f : void 0;
    }
    return this._map.get(schema);
  }
  has(schema) {
    return this._map.has(schema);
  }
}
function registry() {
  return new $ZodRegistry();
}
(_a = globalThis).__zod_globalRegistry ?? (_a.__zod_globalRegistry = registry());
const globalRegistry = globalThis.__zod_globalRegistry;
function snapshotChecks(def) {
  if (def.checks)
    def.checks = [...def.checks];
  return def;
}
// @__NO_SIDE_EFFECTS__
function _string(Class, params) {
  return new Class(snapshotChecks({ type: "string", ...normalizeParams(params) }));
}
// @__NO_SIDE_EFFECTS__
function _email(Class, params) {
  return new Class({
    type: "string",
    format: "email",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _guid(Class, params) {
  return new Class({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uuid(Class, params) {
  return new Class({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uuidv4(Class, params) {
  return new Class({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v4",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uuidv6(Class, params) {
  return new Class({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v6",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uuidv7(Class, params) {
  return new Class({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v7",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _url(Class, params) {
  return new Class({
    type: "string",
    format: "url",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _emoji(Class, params) {
  return new Class({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _nanoid(Class, params) {
  return new Class({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _cuid(Class, params) {
  return new Class({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _cuid2(Class, params) {
  return new Class({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _ulid(Class, params) {
  return new Class({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _xid(Class, params) {
  return new Class({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _ksuid(Class, params) {
  return new Class({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _ipv4(Class, params) {
  return new Class({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _ipv6(Class, params) {
  return new Class({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _cidrv4(Class, params) {
  return new Class({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _cidrv6(Class, params) {
  return new Class({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _base64(Class, params) {
  return new Class({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _base64url(Class, params) {
  return new Class({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _e164(Class, params) {
  return new Class({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _jwt(Class, params) {
  return new Class({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _isoDateTime(Class, params) {
  return new Class({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: false,
    local: false,
    precision: null,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _isoDate(Class, params) {
  return new Class({
    type: "string",
    format: "date",
    check: "string_format",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _isoTime(Class, params) {
  return new Class({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _isoDuration(Class, params) {
  return new Class({
    type: "string",
    format: "duration",
    check: "string_format",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _unknown(Class) {
  return new Class({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function _never(Class, params) {
  return new Class({
    type: "never",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _maxLength(maximum, params) {
  const ch = new $ZodCheckMaxLength({
    check: "max_length",
    ...normalizeParams(params),
    maximum
  });
  return ch;
}
// @__NO_SIDE_EFFECTS__
function _minLength(minimum, params) {
  return new $ZodCheckMinLength({
    check: "min_length",
    ...normalizeParams(params),
    minimum
  });
}
// @__NO_SIDE_EFFECTS__
function _length(length, params) {
  return new $ZodCheckLengthEquals({
    check: "length_equals",
    ...normalizeParams(params),
    length
  });
}
// @__NO_SIDE_EFFECTS__
function _regex(pattern, params) {
  return new $ZodCheckRegex({
    check: "string_format",
    format: "regex",
    ...normalizeParams(params),
    pattern
  });
}
// @__NO_SIDE_EFFECTS__
function _lowercase(params) {
  return new $ZodCheckLowerCase({
    check: "string_format",
    format: "lowercase",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uppercase(params) {
  return new $ZodCheckUpperCase({
    check: "string_format",
    format: "uppercase",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _includes(includes, params) {
  return new $ZodCheckIncludes({
    check: "string_format",
    format: "includes",
    ...normalizeParams(params),
    includes
  });
}
// @__NO_SIDE_EFFECTS__
function _startsWith(prefix, params) {
  return new $ZodCheckStartsWith({
    check: "string_format",
    format: "starts_with",
    ...normalizeParams(params),
    prefix
  });
}
// @__NO_SIDE_EFFECTS__
function _endsWith(suffix, params) {
  return new $ZodCheckEndsWith({
    check: "string_format",
    format: "ends_with",
    ...normalizeParams(params),
    suffix
  });
}
// @__NO_SIDE_EFFECTS__
function _overwrite(tx) {
  return new $ZodCheckOverwrite({
    check: "overwrite",
    tx
  });
}
// @__NO_SIDE_EFFECTS__
function _normalize(form) {
  return /* @__PURE__ */ _overwrite((input) => input.normalize(form));
}
// @__NO_SIDE_EFFECTS__
function _trim() {
  return /* @__PURE__ */ _overwrite((input) => input.trim());
}
// @__NO_SIDE_EFFECTS__
function _toLowerCase() {
  return /* @__PURE__ */ _overwrite((input) => input.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function _toUpperCase() {
  return /* @__PURE__ */ _overwrite((input) => input.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function _slugify() {
  return /* @__PURE__ */ _overwrite((input) => slugify(input));
}
// @__NO_SIDE_EFFECTS__
function _array(Class, element, params) {
  return new Class({
    type: "array",
    element,
    // get element() {
    //   return element;
    // },
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _refine(Class, fn2, _params) {
  const schema = new Class({
    type: "custom",
    check: "custom",
    fn: fn2,
    ...normalizeParams(_params)
  });
  return schema;
}
// @__NO_SIDE_EFFECTS__
function _superRefine(fn2, params) {
  const ch = /* @__PURE__ */ _check((payload) => {
    payload.addIssue = (issue$1) => {
      if (typeof issue$1 === "string") {
        payload.issues.push(issue(issue$1, payload.value, ch._zod.def));
      } else {
        const _issue = issue$1;
        if (_issue.fatal)
          _issue.continue = false;
        _issue.code ?? (_issue.code = "custom");
        if (!("input" in _issue))
          _issue.input = payload.value;
        _issue.inst ?? (_issue.inst = ch);
        _issue.continue ?? (_issue.continue = !ch._zod.def.abort);
        payload.issues.push(issue(_issue));
      }
    };
    return fn2(payload.value, payload);
  }, params);
  return ch;
}
// @__NO_SIDE_EFFECTS__
function _check(fn2, params) {
  const ch = new $ZodCheck({
    check: "custom",
    ...normalizeParams(params)
  });
  ch._zod.check = fn2;
  return ch;
}
function assignProps(target, ...sources) {
  for (const source of sources) {
    for (const key of Reflect.ownKeys(source)) {
      if (Object.prototype.propertyIsEnumerable.call(source, key)) {
        assignProp(target, key, source[key]);
      }
    }
  }
  return target;
}
function initializeContext(params) {
  let target = (params == null ? void 0 : params.target) ?? "draft-2020-12";
  if (target === "draft-4")
    target = "draft-04";
  if (target === "draft-7")
    target = "draft-07";
  return {
    processors: params.processors ?? {},
    metadataRegistry: (params == null ? void 0 : params.metadata) ?? globalRegistry,
    target,
    unrepresentable: (params == null ? void 0 : params.unrepresentable) ?? "throw",
    override: (params == null ? void 0 : params.override) ?? (() => {
    }),
    io: (params == null ? void 0 : params.io) ?? "output",
    counter: 0,
    seen: /* @__PURE__ */ new Map(),
    sharedDefsExtractedFor: void 0,
    sharedEmitDoneFor: void 0,
    cycles: (params == null ? void 0 : params.cycles) ?? "ref",
    reused: (params == null ? void 0 : params.reused) ?? "inline",
    intersections: [],
    deferred: [],
    external: (params == null ? void 0 : params.external) ?? void 0
  };
}
function handleUnrepresentable(schema, ctx, json, params, message) {
  const result = typeof ctx.unrepresentable === "function" ? ctx.unrepresentable({ zodSchema: schema, path: params.path, message }) : ctx.unrepresentable;
  if (result === "any")
    return false;
  if (result === void 0 || result === "throw")
    throw new Error(message);
  Object.assign(json, result);
  return true;
}
function processSchema(schema, ctx, _params = { path: [], schemaPath: [] }) {
  var _a6, _b2;
  var _a5;
  const def = schema._zod.def;
  const seen = ctx.seen.get(schema);
  if (seen) {
    seen.count++;
    const isCycle = _params.schemaPath.includes(schema);
    if (isCycle) {
      seen.cycle = _params.path;
    }
    return seen.schema;
  }
  const result = { schema: {}, count: 1, cycle: void 0, path: _params.path };
  ctx.seen.set(schema, result);
  ctx.sharedDefsExtractedFor = void 0;
  ctx.sharedEmitDoneFor = void 0;
  const overrideSchema = (_b2 = (_a6 = schema._zod).toJSONSchema) == null ? void 0 : _b2.call(_a6);
  if (overrideSchema) {
    result.schema = overrideSchema;
  } else {
    const params = {
      ..._params,
      schemaPath: [..._params.schemaPath, schema],
      path: _params.path
    };
    if (schema._zod.processJSONSchema) {
      schema._zod.processJSONSchema(ctx, result.schema, params);
    } else {
      const _json = result.schema;
      const processor = ctx.processors[def.type];
      if (!processor) {
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${def.type}`);
      }
      processor(schema, ctx, _json, params);
    }
    const parent = schema._zod.parent;
    if (parent) {
      if (!result.ref)
        result.ref = parent;
      processSchema(parent, ctx, params);
      ctx.seen.get(parent).isParent = true;
    }
  }
  const meta = ctx.metadataRegistry.get(schema);
  if (meta)
    assignProps(result.schema, meta);
  if (ctx.io === "input" && isTransforming(schema)) {
    delete result.schema.examples;
    delete result.schema.default;
  }
  if (ctx.io === "input" && "_prefault" in result.schema)
    (_a5 = result.schema).default ?? (_a5.default = result.schema._prefault);
  delete result.schema._prefault;
  const _result = ctx.seen.get(schema);
  return _result.schema;
}
function encodeJSONPointerSegment(segment) {
  return segment.replace(/~/g, "~0").replace(/\//g, "~1");
}
function extractDefs(ctx, schema) {
  var _a5, _b2, _c3, _d3;
  const root = ctx.seen.get(schema);
  if (!root)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  if (ctx.external && ctx.sharedDefsExtractedFor === ctx.external)
    return;
  const idToSchema = /* @__PURE__ */ new Map();
  for (const entry of ctx.seen.entries()) {
    const id2 = (_a5 = ctx.metadataRegistry.get(entry[0])) == null ? void 0 : _a5.id;
    if (id2) {
      const existing = idToSchema.get(id2);
      if (existing && existing !== entry[0]) {
        throw new Error(`Duplicate schema id "${id2}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      }
      idToSchema.set(id2, entry[0]);
    }
  }
  const makeURI = (entry) => {
    var _a6;
    const defsSegment = ctx.target === "draft-2020-12" ? "$defs" : "definitions";
    if (ctx.external) {
      const externalId = (_a6 = ctx.external.registry.get(entry[0])) == null ? void 0 : _a6.id;
      const uriGenerator = ctx.external.uri ?? ((id3) => id3);
      if (externalId) {
        return { ref: uriGenerator(externalId) };
      }
      const id2 = entry[1].defId ?? entry[1].schema.id ?? `schema${ctx.counter++}`;
      entry[1].defId = id2;
      return { defId: id2, ref: `${uriGenerator("__shared")}#/${defsSegment}/${encodeJSONPointerSegment(id2)}` };
    }
    const uriPrefix = `#`;
    const defUriPrefix = `${uriPrefix}/${defsSegment}/`;
    if (entry[1] === root && !entry[1].schema.id) {
      return { ref: uriPrefix };
    }
    const defId = entry[1].schema.id ?? `__schema${ctx.counter++}`;
    return { defId, ref: defUriPrefix + encodeJSONPointerSegment(defId) };
  };
  const extractToDef = (entry) => {
    if (entry[1].schema.$ref) {
      return;
    }
    const seen = entry[1];
    const { ref, defId } = makeURI(entry);
    seen.def = { ...seen.schema };
    if (defId)
      seen.defId = defId;
    const schema2 = seen.schema;
    for (const key in schema2) {
      delete schema2[key];
    }
    schema2.$ref = ref;
  };
  if (ctx.cycles === "throw") {
    for (const entry of ctx.seen.entries()) {
      const seen = entry[1];
      if (seen.cycle) {
        throw new Error(`Cycle detected: #/${(_b2 = seen.cycle) == null ? void 0 : _b2.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
      }
    }
  }
  for (const entry of ctx.seen.entries()) {
    const seen = entry[1];
    if (schema === entry[0]) {
      extractToDef(entry);
      continue;
    }
    if (ctx.external) {
      const ext = (_c3 = ctx.external.registry.get(entry[0])) == null ? void 0 : _c3.id;
      if (schema !== entry[0] && ext) {
        extractToDef(entry);
        continue;
      }
    }
    const id2 = (_d3 = ctx.metadataRegistry.get(entry[0])) == null ? void 0 : _d3.id;
    if (id2) {
      extractToDef(entry);
      continue;
    }
    if (seen.cycle) {
      extractToDef(entry);
      continue;
    }
    if (seen.count > 1) {
      if (ctx.reused === "ref") {
        extractToDef(entry);
      }
    }
  }
  if (ctx.external)
    ctx.sharedDefsExtractedFor = ctx.external;
}
function compactTypeUnion(schema) {
  const options = schema.anyOf;
  if (!Array.isArray(options) || options.length === 0 || schema.type !== void 0)
    return;
  const types = [];
  for (const option of options) {
    if (!option || typeof option !== "object")
      return;
    compactTypeUnion(option);
    const keys = Object.keys(option);
    if (keys.length !== 1 || keys[0] !== "type")
      return;
    const type = option.type;
    for (const member of Array.isArray(type) ? type : [type]) {
      if (typeof member !== "string")
        return;
      if (!types.includes(member))
        types.push(member);
    }
  }
  delete schema.anyOf;
  schema.type = types.length === 1 ? types[0] : types;
}
const FOLDABLE_KEYS = /* @__PURE__ */ new Set(["type", "properties", "required", "additionalProperties"]);
const UNION_KEYS = ["oneOf", "anyOf"];
function undeclaredConstraint(member) {
  const extra = member.additionalProperties;
  if (extra === void 0 || extra === false || typeof extra !== "object" || extra === null)
    return null;
  return Object.keys(extra).length ? extra : null;
}
function foldObjects(members2) {
  var _a5;
  const objects = [];
  for (const member of members2) {
    if (typeof member !== "object" || member.type !== "object")
      return null;
    for (const key in member) {
      if (!FOLDABLE_KEYS.has(key))
        return null;
    }
    objects.push(member);
  }
  const properties = {};
  const required2 = /* @__PURE__ */ new Set();
  for (const object2 of objects) {
    for (const key in object2.properties) {
      if (Object.prototype.hasOwnProperty.call(properties, key))
        continue;
      const parts = [];
      for (const other of objects) {
        const part = ((_a5 = other.properties) == null ? void 0 : _a5[key]) ?? undeclaredConstraint(other);
        if (part === null || part === void 0)
          continue;
        if (!parts.some((seen) => JSON.stringify(seen) === JSON.stringify(part)))
          parts.push(part);
      }
      const merged = parts.length === 1 ? parts[0] : foldObjects(parts) ?? { allOf: parts };
      assignProp(properties, key, merged);
    }
    for (const key of object2.required ?? [])
      required2.add(key);
  }
  const folded = { type: "object", properties };
  if (required2.size)
    folded.required = [...required2];
  if (objects.every((object2) => object2.additionalProperties === false)) {
    folded.additionalProperties = false;
  } else {
    const constraints = [];
    for (const object2 of objects) {
      const constraint = undeclaredConstraint(object2);
      if (constraint && !constraints.some((seen) => JSON.stringify(seen) === JSON.stringify(constraint)))
        constraints.push(constraint);
    }
    if (constraints.length === 1)
      folded.additionalProperties = constraints[0];
    else if (constraints.length > 1)
      folded.additionalProperties = { allOf: constraints };
  }
  return folded;
}
function foldIntersection(json) {
  const allOf = json.allOf;
  if (!Array.isArray(allOf) || allOf.length < 2)
    return;
  for (const key of FOLDABLE_KEYS)
    if (key in json)
      return;
  const unions = allOf.filter((m) => UNION_KEYS.some((k2) => Array.isArray(m[k2])));
  let folded = null;
  if (!unions.length) {
    folded = foldObjects(allOf);
  } else {
    const union2 = unions[0];
    const keyword = UNION_KEYS.find((k2) => Array.isArray(union2[k2]));
    if (Object.keys(union2).length !== 1)
      return;
    const rest = allOf.filter((m) => m !== union2);
    const branches = union2[keyword].map((branch) => foldObjects([...rest, branch]));
    if (branches.some((b) => !b))
      return;
    folded = { [keyword]: branches };
  }
  if (!folded)
    return;
  delete json.allOf;
  assignProps(json, folded);
}
function finalize(ctx, schema) {
  var _a5, _b2, _c3, _d3;
  const root = ctx.seen.get(schema);
  if (!root)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const flattenRef = (zodSchema) => {
    const seen = ctx.seen.get(zodSchema);
    if (seen.ref === null)
      return;
    const schema2 = seen.def ?? seen.schema;
    const _cached = { ...schema2 };
    const ref = seen.ref;
    seen.ref = null;
    if (ref) {
      flattenRef(ref);
      const refSeen = ctx.seen.get(ref);
      const refSchema = refSeen.schema;
      if (refSchema.$ref && (ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0")) {
        schema2.allOf = schema2.allOf ?? [];
        schema2.allOf.push(refSchema);
      } else {
        assignProps(schema2, refSchema);
      }
      assignProps(schema2, _cached);
      const isParentRef = zodSchema._zod.parent === ref;
      if (isParentRef) {
        for (const key in schema2) {
          if (key === "$ref" || key === "allOf")
            continue;
          if (!(key in _cached)) {
            delete schema2[key];
          }
        }
      }
      if (refSchema.$ref && refSeen.def) {
        for (const key in schema2) {
          if (key === "$ref" || key === "allOf")
            continue;
          if (key in refSeen.def && JSON.stringify(schema2[key]) === JSON.stringify(refSeen.def[key])) {
            delete schema2[key];
          }
        }
      }
    }
    const parent = zodSchema._zod.parent;
    if (parent && parent !== ref) {
      flattenRef(parent);
      const parentSeen = ctx.seen.get(parent);
      if (parentSeen == null ? void 0 : parentSeen.schema.$ref) {
        schema2.$ref = parentSeen.schema.$ref;
        if (parentSeen.def) {
          for (const key in schema2) {
            if (key === "$ref" || key === "allOf")
              continue;
            if (key in parentSeen.def && JSON.stringify(schema2[key]) === JSON.stringify(parentSeen.def[key])) {
              delete schema2[key];
            }
          }
        }
      }
    }
    ctx.override({
      zodSchema,
      jsonSchema: schema2,
      path: seen.path ?? []
    });
  };
  if (!ctx.external || ctx.sharedEmitDoneFor !== ctx.external) {
    for (const entry of [...ctx.seen.entries()].reverse()) {
      flattenRef(entry[0]);
    }
    if (ctx.target !== "openapi-3.0") {
      for (const entry of ctx.seen.entries()) {
        compactTypeUnion(entry[1].def ?? entry[1].schema);
      }
    }
    for (const rewrite of ctx.deferred)
      rewrite();
    if (ctx.intersections.length) {
      const carriers = /* @__PURE__ */ new Map();
      for (const seen of ctx.seen.values()) {
        for (const json of [seen.schema, seen.def]) {
          const allOf = json == null ? void 0 : json.allOf;
          if (!Array.isArray(allOf))
            continue;
          const existing = carriers.get(allOf);
          if (existing)
            existing.push(json);
          else
            carriers.set(allOf, [json]);
        }
      }
      for (const allOf of ctx.intersections) {
        for (const json of carriers.get(allOf) ?? [])
          foldIntersection(json);
      }
    }
  }
  const result = {};
  if (ctx.target === "draft-2020-12") {
    result.$schema = "https://json-schema.org/draft/2020-12/schema";
  } else if (ctx.target === "draft-07") {
    result.$schema = "http://json-schema.org/draft-07/schema#";
  } else if (ctx.target === "draft-04") {
    result.$schema = "http://json-schema.org/draft-04/schema#";
  } else if (ctx.target === "openapi-3.0") ;
  else ;
  if ((_a5 = ctx.external) == null ? void 0 : _a5.uri) {
    const id2 = (_b2 = ctx.external.registry.get(schema)) == null ? void 0 : _b2.id;
    if (!id2)
      throw new Error("Schema is missing an `id` property");
    result.$id = ctx.external.uri(id2);
  }
  assignProps(result, root.defId ? root.schema : root.def ?? root.schema);
  const rootMetaId = (_c3 = ctx.metadataRegistry.get(schema)) == null ? void 0 : _c3.id;
  if (rootMetaId !== void 0 && result.id === rootMetaId)
    delete result.id;
  const defs = ((_d3 = ctx.external) == null ? void 0 : _d3.defs) ?? {};
  if (!ctx.external || ctx.sharedEmitDoneFor !== ctx.external) {
    for (const entry of ctx.seen.entries()) {
      const seen = entry[1];
      if (seen.def && seen.defId) {
        if (seen.def.id === seen.defId)
          delete seen.def.id;
        assignProp(defs, seen.defId, seen.def);
      }
    }
  }
  if (ctx.external)
    ctx.sharedEmitDoneFor = ctx.external;
  if (ctx.external) ;
  else {
    if (Object.keys(defs).length > 0) {
      if (ctx.target === "draft-2020-12") {
        result.$defs = defs;
      } else {
        result.definitions = defs;
      }
    }
  }
  try {
    const finalized = JSON.parse(JSON.stringify(result));
    Object.defineProperty(finalized, "~standard", {
      value: {
        ...schema["~standard"],
        jsonSchema: {
          input: createStandardJSONSchemaMethod(schema, "input", ctx.processors),
          output: createStandardJSONSchemaMethod(schema, "output", ctx.processors)
        }
      },
      enumerable: false,
      writable: false
    });
    return finalized;
  } catch (_err) {
    throw new Error("Error converting schema to JSON.");
  }
}
function isTransforming(_schema, _ctx) {
  const ctx = _ctx ?? { seen: /* @__PURE__ */ new Set() };
  if (ctx.seen.has(_schema))
    return false;
  ctx.seen.add(_schema);
  const def = _schema._zod.def;
  if (def.type === "transform")
    return true;
  if (def.type === "array")
    return isTransforming(def.element, ctx);
  if (def.type === "set")
    return isTransforming(def.valueType, ctx);
  if (def.type === "lazy")
    return isTransforming(def.getter(), ctx);
  if (def.type === "promise" || def.type === "optional" || def.type === "nonoptional" || def.type === "nullable" || def.type === "readonly" || def.type === "default" || def.type === "prefault" || def.type === "catch") {
    return isTransforming(def.innerType, ctx);
  }
  if (def.type === "intersection") {
    return isTransforming(def.left, ctx) || isTransforming(def.right, ctx);
  }
  if (def.type === "record" || def.type === "map") {
    return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
  }
  if (def.type === "pipe") {
    if (_schema._zod.traits.has("$ZodCodec"))
      return true;
    return isTransforming(def.in, ctx) || isTransforming(def.out, ctx);
  }
  if (def.type === "object") {
    for (const key in def.shape) {
      if (isTransforming(def.shape[key], ctx))
        return true;
    }
    return false;
  }
  if (def.type === "union") {
    for (const option of def.options) {
      if (isTransforming(option, ctx))
        return true;
    }
    return false;
  }
  if (def.type === "tuple") {
    for (const item of def.items) {
      if (isTransforming(item, ctx))
        return true;
    }
    if (def.rest && isTransforming(def.rest, ctx))
      return true;
    return false;
  }
  return false;
}
const createToJSONSchemaMethod = (schema, processors = {}) => (params) => {
  const ctx = initializeContext({ ...params, processors });
  processSchema(schema, ctx);
  extractDefs(ctx, schema);
  return finalize(ctx, schema);
};
const createStandardJSONSchemaMethod = (schema, io2, processors = {}) => (params) => {
  const { libraryOptions, target } = params ?? {};
  const ctx = initializeContext({ ...libraryOptions ?? {}, target, io: io2, processors });
  processSchema(schema, ctx);
  extractDefs(ctx, schema);
  return finalize(ctx, schema);
};
const narrowMin = (agg, key, value) => {
  if (agg[key] === void 0 || value > agg[key])
    agg[key] = value;
};
const narrowMax = (agg, key, value) => {
  if (agg[key] === void 0 || value < agg[key])
    agg[key] = value;
};
const narrowBoth = (agg, value) => {
  narrowMin(agg, "minimum", value);
  narrowMax(agg, "maximum", value);
};
const addDivisor = (agg, value) => {
  agg.multipleOf ?? (agg.multipleOf = []);
  if (!agg.multipleOf.includes(value))
    agg.multipleOf.push(value);
};
const addPattern = (agg, pattern) => {
  agg.patterns ?? (agg.patterns = /* @__PURE__ */ new Set());
  agg.patterns.add(pattern);
};
const intersectMime = (agg, mime) => {
  agg.mime = agg.mime ? agg.mime.filter((m) => mime.includes(m)) : [...mime];
};
const setFormat = (agg, format) => {
  agg.format = format;
  if (format.includes("int"))
    agg.isInt = true;
};
const minContributor = (agg, def) => narrowMin(agg, "minimum", def.minimum);
const maxContributor = (agg, def) => narrowMax(agg, "maximum", def.maximum);
const formatContributor = (ranges) => (agg, def) => {
  setFormat(agg, def.format);
  const [minimum, maximum] = ranges[def.format];
  narrowMin(agg, "minimum", minimum);
  narrowMax(agg, "maximum", maximum);
};
const contributors = {
  greater_than: (agg, def) => narrowMin(agg, def.inclusive ? "minimum" : "exclusiveMinimum", def.value),
  less_than: (agg, def) => narrowMax(agg, def.inclusive ? "maximum" : "exclusiveMaximum", def.value),
  multiple_of: (agg, def) => addDivisor(agg, def.value),
  number_format: formatContributor(NUMBER_FORMAT_RANGES),
  bigint_format: formatContributor(BIGINT_FORMAT_RANGES),
  min_length: minContributor,
  max_length: maxContributor,
  length_equals: (agg, def) => narrowBoth(agg, def.length),
  min_size: minContributor,
  max_size: maxContributor,
  size_equals: (agg, def) => narrowBoth(agg, def.size),
  string_format: (agg, def) => {
    setFormat(agg, def.format);
    if (def.pattern)
      addPattern(agg, def.pattern);
    if (def.format === "base64" || def.format === "base64url")
      agg.contentEncoding = def.format;
    if (def.local || def.precision === -1)
      agg.laxFormat = true;
  },
  mime_type: (agg, def) => intersectMime(agg, def.mime)
};
function aggregateChecks(schema) {
  var _a5;
  const agg = {};
  const def = schema._zod.def;
  const list = schema._zod.traits.has("$ZodCheck") ? [schema, ...def.checks ?? []] : def.checks ?? [];
  for (const ch of list)
    (_a5 = contributors[ch._zod.def.check]) == null ? void 0 : _a5.call(contributors, agg, ch._zod.def);
  const bag = schema._zod.bag;
  if (bag.minimum !== void 0)
    narrowMin(agg, "minimum", bag.minimum);
  if (bag.exclusiveMinimum !== void 0)
    narrowMin(agg, "exclusiveMinimum", bag.exclusiveMinimum);
  if (bag.maximum !== void 0)
    narrowMax(agg, "maximum", bag.maximum);
  if (bag.exclusiveMaximum !== void 0)
    narrowMax(agg, "exclusiveMaximum", bag.exclusiveMaximum);
  if (bag.multipleOf !== void 0)
    addDivisor(agg, bag.multipleOf);
  if (bag.format !== void 0) {
    agg.format ?? (agg.format = bag.format);
    if (bag.format.includes("int"))
      agg.isInt = true;
  }
  if (bag.mime)
    intersectMime(agg, bag.mime);
  for (const pattern of bag.patterns ?? [])
    addPattern(agg, pattern);
  return agg;
}
const formatMap = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
};
const exactPatterns = /* @__PURE__ */ new Map([
  [base64Charset, base64],
  [base64urlCharset, base64url]
]);
const exactPattern = (p) => exactPatterns.get(p) ?? p;
const stringProcessor = (schema, ctx, _json, _params) => {
  const json = _json;
  json.type = "string";
  const { minimum, maximum, format, patterns, contentEncoding, laxFormat } = aggregateChecks(schema);
  if (typeof minimum === "number")
    json.minLength = minimum;
  if (typeof maximum === "number")
    json.maxLength = maximum;
  if (format) {
    json.format = formatMap[format] ?? format;
    if (json.format === "")
      delete json.format;
    if (format === "time" || laxFormat) {
      delete json.format;
    }
  }
  if (contentEncoding)
    json.contentEncoding = contentEncoding;
  if (patterns && patterns.size > 0) {
    const patternList = [...patterns].map(exactPattern);
    if (patternList.length === 1)
      json.pattern = patternList[0].source;
    else if (patternList.length > 1) {
      json.allOf = [
        ...patternList.map((regex) => ({
          ...ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0" ? { type: "string" } : {},
          pattern: regex.source
        }))
      ];
    }
  }
};
const neverProcessor = (_schema, _ctx, json, _params) => {
  json.not = {};
};
const unknownProcessor = (_schema, _ctx, _json, _params) => {
};
const enumProcessor = (schema, _ctx, json, _params) => {
  const def = schema._zod.def;
  const values = getEnumValues(def.entries);
  if (values.length === 0) {
    json.not = {};
    return;
  }
  if (values.every((v) => typeof v === "number"))
    json.type = "number";
  if (values.every((v) => typeof v === "string"))
    json.type = "string";
  json.enum = values;
};
const customProcessor = (schema, ctx, json, params) => {
  handleUnrepresentable(schema, ctx, json, params, "Custom types cannot be represented in JSON Schema");
};
const transformProcessor = (schema, ctx, json, params) => {
  handleUnrepresentable(schema, ctx, json, params, "Transforms cannot be represented in JSON Schema");
};
const arrayProcessor = (schema, ctx, _json, params) => {
  const json = _json;
  const def = schema._zod.def;
  const { minimum, maximum } = aggregateChecks(schema);
  if (typeof minimum === "number")
    json.minItems = minimum;
  if (typeof maximum === "number")
    json.maxItems = maximum;
  json.type = "array";
  json.items = processSchema(def.element, ctx, {
    ...params,
    path: [...params.path, "items"]
  });
};
function inputOptin(schema) {
  const def = schema._zod.def;
  if (def.type === "pipe" && def.in._zod.traits.has("$ZodTransform")) {
    return inputOptin(def.out);
  }
  if (def.type === "catch") {
    return inputOptin(def.innerType);
  }
  return schema._zod.optin;
}
const objectProcessor = (schema, ctx, _json, params) => {
  var _a5;
  const json = _json;
  const def = schema._zod.def;
  const shape = def.shape;
  const symbolKeys = Object.getOwnPropertySymbols(shape);
  if (symbolKeys.length && handleUnrepresentable(schema, ctx, json, params, "Symbol keys cannot be represented in JSON Schema")) {
    return;
  }
  json.type = "object";
  json.properties = {};
  for (const key in shape) {
    assignProp(json.properties, key, processSchema(shape[key], ctx, {
      ...params,
      path: [...params.path, "properties", key]
    }));
  }
  const requiredKeys = [];
  for (const key of Object.keys(shape)) {
    const field = def.shape[key];
    if (ctx.io === "input" ? inputOptin(field) === void 0 : field._zod.optout === void 0) {
      requiredKeys.push(key);
    }
  }
  if (requiredKeys.length > 0) {
    json.required = requiredKeys;
  }
  if (((_a5 = def.catchall) == null ? void 0 : _a5._zod.def.type) === "never") {
    json.additionalProperties = false;
  } else if (!def.catchall) {
    if (ctx.io === "output")
      json.additionalProperties = false;
  } else if (def.catchall) {
    json.additionalProperties = processSchema(def.catchall, ctx, {
      ...params,
      path: [...params.path, "additionalProperties"]
    });
  }
};
const unionProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  const isExclusive = def.inclusive === false;
  const options = def.options.map((x, i) => processSchema(x, ctx, {
    ...params,
    path: [...params.path, isExclusive ? "oneOf" : "anyOf", i]
  }));
  if (isExclusive) {
    json.oneOf = options;
  } else {
    json.anyOf = options;
  }
};
const intersectionProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  const a = processSchema(def.left, ctx, {
    ...params,
    path: [...params.path, "allOf", 0]
  });
  const b = processSchema(def.right, ctx, {
    ...params,
    path: [...params.path, "allOf", 1]
  });
  const isSimpleIntersection = (val) => "allOf" in val && Object.keys(val).length === 1;
  const allOf = [
    ...isSimpleIntersection(a) ? a.allOf : [a],
    ...isSimpleIntersection(b) ? b.allOf : [b]
  ];
  json.allOf = allOf;
  ctx.intersections.push(allOf);
};
const nullableProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  const inner = processSchema(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  if (ctx.target === "openapi-3.0") {
    seen.ref = def.innerType;
    json.nullable = true;
  } else {
    json.anyOf = [inner, { type: "null" }];
  }
};
const nonoptionalProcessor = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  processSchema(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
};
const UNREPRESENTABLE_DEFAULT = Symbol();
function serializeDefaultValue(value, schema, ctx, json, params) {
  let unrepresentable = false;
  const serialized = JSON.stringify(value, (_2, val) => {
    if (typeof val !== "bigint")
      return val;
    unrepresentable = true;
    return null;
  });
  if (!unrepresentable)
    return JSON.parse(serialized);
  handleUnrepresentable(schema, ctx, json, params, "BigInt defaults cannot be represented in JSON Schema");
  return UNREPRESENTABLE_DEFAULT;
}
const defaultProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  processSchema(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  const value = serializeDefaultValue(def.defaultValue, schema, ctx, json, params);
  if (value !== UNREPRESENTABLE_DEFAULT)
    json.default = value;
};
const prefaultProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  processSchema(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  if (ctx.io !== "input")
    return;
  const value = serializeDefaultValue(def.defaultValue, schema, ctx, json, params);
  if (value !== UNREPRESENTABLE_DEFAULT)
    json._prefault = value;
};
const catchProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  processSchema(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  let catchValue;
  try {
    catchValue = def.catchValue(void 0);
  } catch {
    handleUnrepresentable(schema, ctx, json, params, "Dynamic catch values are not supported in JSON Schema");
    return;
  }
  json.default = catchValue;
};
const pipeProcessor = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  const inIsTransform = def.in._zod.traits.has("$ZodTransform");
  const innerType = ctx.io === "input" ? inIsTransform ? def.out : def.in : def.out;
  processSchema(innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = innerType;
};
const readonlyProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  processSchema(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  json.readOnly = true;
};
const optionalProcessor = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  processSchema(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
};
const _installedErrorProtos = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]);
function _lazyMethod(proto, key, make) {
  Object.defineProperty(proto, key, {
    configurable: true,
    enumerable: false,
    get() {
      const value = make(this);
      Object.defineProperty(this, key, { value, configurable: true, writable: true });
      return value;
    },
    set(value) {
      Object.defineProperty(this, key, { value, configurable: true, writable: true });
    }
  });
}
const initializer = (inst, issues) => {
  $ZodError.init(inst, issues);
  inst.name = "ZodError";
  const proto = Object.getPrototypeOf(inst);
  if (_installedErrorProtos.has(proto))
    return;
  _installedErrorProtos.add(proto);
  _lazyMethod(proto, "format", (self2) => (mapper) => formatError(self2, mapper));
  _lazyMethod(proto, "flatten", (self2) => (mapper) => flattenError(self2, mapper));
  _lazyMethod(proto, "addIssue", (self2) => (issue2) => {
    self2.issues.push(issue2);
    self2.message = JSON.stringify(self2.issues, jsonStringifyReplacer, 2);
  });
  _lazyMethod(proto, "addIssues", (self2) => (issues2) => {
    self2.issues.push(...issues2);
    self2.message = JSON.stringify(self2.issues, jsonStringifyReplacer, 2);
  });
  Object.defineProperty(proto, "isEmpty", {
    configurable: true,
    enumerable: false,
    get() {
      return this.issues.length === 0;
    }
  });
};
const ZodRealError = /* @__PURE__ */ $constructor("ZodError", initializer, void 0, {
  Parent: Error
});
const parse = /* @__PURE__ */ _parse(ZodRealError);
const parseAsync = /* @__PURE__ */ _parseAsync(ZodRealError);
const safeParse = /* @__PURE__ */ _safeParse(ZodRealError);
const safeParseAsync = /* @__PURE__ */ _safeParseAsync(ZodRealError);
const encode = /* @__PURE__ */ _encode(ZodRealError);
const decode = /* @__PURE__ */ _decode(ZodRealError);
const encodeAsync = /* @__PURE__ */ _encodeAsync(ZodRealError);
const decodeAsync = /* @__PURE__ */ _decodeAsync(ZodRealError);
const safeEncode = /* @__PURE__ */ _safeEncode(ZodRealError);
const safeDecode = /* @__PURE__ */ _safeDecode(ZodRealError);
const safeEncodeAsync = /* @__PURE__ */ _safeEncodeAsync(ZodRealError);
const safeDecodeAsync = /* @__PURE__ */ _safeDecodeAsync(ZodRealError);
function _ensureDefaultLocale() {
  if (!globalConfig.localeError)
    config(en());
}
function _ensureDefaultMemoizer() {
  if (!globalConfig.memoizer)
    config({ memoizer: memoizer() });
}
const ZodType = /* @__PURE__ */ $constructor("ZodType", (inst, def) => {
  _ensureDefaultLocale();
  $ZodType.init(inst, def);
  inst.def = def;
  inst.type = def.type;
  return inst;
}, {
  check(...chks) {
    const def = this.def;
    return this.clone(mergeDefs(def, {
      checks: [
        ...def.checks ?? [],
        ...chks.map((ch) => typeof ch === "function" ? { _zod: { check: ch, def: { check: "custom" }, onattach: [] } } : ch)
      ]
    }), { parent: true });
  },
  with(...chks) {
    return this.check(...chks);
  },
  clone(def, params) {
    return clone(this, def, params);
  },
  brand() {
    return this;
  },
  register(reg, meta) {
    reg.add(this, meta);
    return this;
  },
  refine(check, params) {
    return this.check(refine(check, params));
  },
  superRefine(refinement, params) {
    return this.check(superRefine(refinement, params));
  },
  overwrite(fn2) {
    return this.check(/* @__PURE__ */ _overwrite(fn2));
  },
  optional() {
    return optional(this);
  },
  exactOptional() {
    return exactOptional(this);
  },
  nullable() {
    return nullable(this);
  },
  nullish() {
    return optional(nullable(this));
  },
  nonoptional(params) {
    return nonoptional(this, params);
  },
  array() {
    return array(this);
  },
  or(arg) {
    return union([this, arg]);
  },
  and(arg) {
    return intersection(this, arg);
  },
  transform(tx) {
    return pipe(this, transform(tx));
  },
  default(d) {
    return _default(this, d);
  },
  prefault(d) {
    return prefault(this, d);
  },
  catch(params) {
    return _catch(this, params);
  },
  pipe(target) {
    return pipe(this, target);
  },
  readonly() {
    return readonly(this);
  },
  describe(description) {
    const cl2 = this.clone();
    globalRegistry.add(cl2, { description });
    return cl2;
  },
  meta(...args) {
    if (args.length === 0)
      return globalRegistry.get(this);
    const cl2 = this.clone();
    globalRegistry.add(cl2, args[0]);
    return cl2;
  },
  isOptional() {
    return this.safeParse(void 0).success;
  },
  isNullable() {
    return this.safeParse(null).success;
  },
  apply(fn2, ...args) {
    return args.length === 0 ? fn2(this) : fn2(this, ...args);
  },
  // Overrides core's `~standard` to add `jsonSchema`. Must stay a prototype entry: redefining it per instance demotes instances to dictionary mode.
  get "~standard"() {
    return hide(this, "~standard", {
      ...standardProps(this),
      jsonSchema: {
        input: createStandardJSONSchemaMethod(this, "input"),
        output: createStandardJSONSchemaMethod(this, "output")
      }
    });
  },
  set "~standard"(value) {
    own(this, "~standard", value);
  },
  parse: function _parse2(data, params) {
    return parse(this, data, params, { callee: _parse2 });
  },
  parseAsync: async function _parseAsync2(data, params) {
    return await parseAsync(this, data, params, { callee: _parseAsync2 });
  },
  safeParse(data, params) {
    return safeParse(this, data, params);
  },
  async safeParseAsync(data, params) {
    return safeParseAsync(this, data, params);
  },
  // `spa` is an alias: same function object as `safeParseAsync`, as before.
  get spa() {
    return this == null ? void 0 : this.safeParseAsync;
  },
  set spa(value) {
    own(this, "spa", value);
  },
  validate(data, params) {
    return validate(this, data, params);
  },
  validateAsync(data, params) {
    return validateAsync$1(this, data, params);
  },
  encode: function _encode2(data, params) {
    return encode(this, data, params, { callee: _encode2 });
  },
  decode: function _decode2(data, params) {
    return decode(this, data, params, { callee: _decode2 });
  },
  encodeAsync: async function _encodeAsync2(data, params) {
    return await encodeAsync(this, data, params, { callee: _encodeAsync2 });
  },
  decodeAsync: async function _decodeAsync2(data, params) {
    return await decodeAsync(this, data, params, { callee: _decodeAsync2 });
  },
  safeEncode(data, params) {
    return safeEncode(this, data, params);
  },
  safeDecode(data, params) {
    return safeDecode(this, data, params);
  },
  async safeEncodeAsync(data, params) {
    return safeEncodeAsync(this, data, params);
  },
  async safeDecodeAsync(data, params) {
    return safeDecodeAsync(this, data, params);
  },
  toJSONSchema(params) {
    return createToJSONSchemaMethod(this, {})(params);
  },
  // Reads through to the registry on every access, so it must not cache.
  get description() {
    var _a5;
    return (_a5 = globalRegistry.get(this)) == null ? void 0 : _a5.description;
  },
  // No setter: `schema._def = x` throws, as it did when `_def` was a non-writable own property.
  get _def() {
    return this._zod.def;
  }
});
const _ZodString = /* @__PURE__ */ $constructor(
  "_ZodString",
  (inst, def) => {
    $ZodString.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => stringProcessor(inst, ctx, json);
  },
  /* @__PURE__ */ derived({
    format: (inst) => aggregateChecks(inst).format ?? null,
    minLength: (inst) => aggregateChecks(inst).minimum ?? null,
    maxLength: (inst) => aggregateChecks(inst).maximum ?? null
  }, {
    regex(...args) {
      return this.check(/* @__PURE__ */ _regex(...args));
    },
    includes(...args) {
      return this.check(/* @__PURE__ */ _includes(...args));
    },
    startsWith(...args) {
      return this.check(/* @__PURE__ */ _startsWith(...args));
    },
    endsWith(...args) {
      return this.check(/* @__PURE__ */ _endsWith(...args));
    },
    min(...args) {
      return this.check(/* @__PURE__ */ _minLength(...args));
    },
    max(...args) {
      return this.check(/* @__PURE__ */ _maxLength(...args));
    },
    length(...args) {
      return this.check(/* @__PURE__ */ _length(...args));
    },
    nonempty(...args) {
      return this.check(/* @__PURE__ */ _minLength(1, ...args));
    },
    lowercase(params) {
      return this.check(/* @__PURE__ */ _lowercase(params));
    },
    uppercase(params) {
      return this.check(/* @__PURE__ */ _uppercase(params));
    },
    trim() {
      return this.check(/* @__PURE__ */ _trim());
    },
    normalize(...args) {
      return this.check(/* @__PURE__ */ _normalize(...args));
    },
    toLowerCase() {
      return this.check(/* @__PURE__ */ _toLowerCase());
    },
    toUpperCase() {
      return this.check(/* @__PURE__ */ _toUpperCase());
    },
    slugify() {
      return this.check(/* @__PURE__ */ _slugify());
    }
  })
);
const ZodString = /* @__PURE__ */ $constructor("ZodString", (inst, def) => {
  $ZodString.init(inst, def);
  _ZodString.init(inst, def);
}, {
  email(params) {
    return this.check(/* @__PURE__ */ _email(ZodEmail, params));
  },
  url(params) {
    return this.check(/* @__PURE__ */ _url(ZodURL, params));
  },
  jwt(params) {
    return this.check(/* @__PURE__ */ _jwt(ZodJWT, params));
  },
  emoji(params) {
    return this.check(/* @__PURE__ */ _emoji(ZodEmoji, params));
  },
  guid(params) {
    return this.check(/* @__PURE__ */ _guid(ZodGUID, params));
  },
  uuid(params) {
    return this.check(/* @__PURE__ */ _uuid(ZodUUID, params));
  },
  uuidv4(params) {
    return this.check(/* @__PURE__ */ _uuidv4(ZodUUID, params));
  },
  uuidv6(params) {
    return this.check(/* @__PURE__ */ _uuidv6(ZodUUID, params));
  },
  uuidv7(params) {
    return this.check(/* @__PURE__ */ _uuidv7(ZodUUID, params));
  },
  nanoid(params) {
    return this.check(/* @__PURE__ */ _nanoid(ZodNanoID, params));
  },
  cuid(params) {
    return this.check(/* @__PURE__ */ _cuid(ZodCUID, params));
  },
  cuid2(params) {
    return this.check(/* @__PURE__ */ _cuid2(ZodCUID2, params));
  },
  ulid(params) {
    return this.check(/* @__PURE__ */ _ulid(ZodULID, params));
  },
  base64(params) {
    return this.check(/* @__PURE__ */ _base64(ZodBase64, params));
  },
  base64url(params) {
    return this.check(/* @__PURE__ */ _base64url(ZodBase64URL, params));
  },
  xid(params) {
    return this.check(/* @__PURE__ */ _xid(ZodXID, params));
  },
  ksuid(params) {
    return this.check(/* @__PURE__ */ _ksuid(ZodKSUID, params));
  },
  ipv4(params) {
    return this.check(/* @__PURE__ */ _ipv4(ZodIPv4, params));
  },
  ipv6(params) {
    return this.check(/* @__PURE__ */ _ipv6(ZodIPv6, params));
  },
  cidrv4(params) {
    return this.check(/* @__PURE__ */ _cidrv4(ZodCIDRv4, params));
  },
  cidrv6(params) {
    return this.check(/* @__PURE__ */ _cidrv6(ZodCIDRv6, params));
  },
  e164(params) {
    return this.check(/* @__PURE__ */ _e164(ZodE164, params));
  },
  datetime(params) {
    return this.check(/* @__PURE__ */ _isoDateTime(ZodISODateTime, params));
  },
  date(params) {
    return this.check(/* @__PURE__ */ _isoDate(ZodISODate, params));
  },
  time(params) {
    return this.check(/* @__PURE__ */ _isoTime(ZodISOTime, params));
  },
  duration(params) {
    return this.check(/* @__PURE__ */ _isoDuration(ZodISODuration, params));
  }
});
function string(params) {
  return /* @__PURE__ */ _string(ZodString, params);
}
const ZodStringFormat = /* @__PURE__ */ $constructor("ZodStringFormat", (inst, def) => {
  $ZodStringFormat.init(inst, def);
  _ZodString.init(inst, def);
});
const ZodISODateTime = /* @__PURE__ */ $constructor("ZodISODateTime", (inst, def) => {
  $ZodISODateTime.init(inst, def);
  ZodStringFormat.init(inst, def);
});
const ZodISODate = /* @__PURE__ */ $constructor("ZodISODate", (inst, def) => {
  $ZodISODate.init(inst, def);
  ZodStringFormat.init(inst, def);
});
const ZodISOTime = /* @__PURE__ */ $constructor("ZodISOTime", (inst, def) => {
  $ZodISOTime.init(inst, def);
  ZodStringFormat.init(inst, def);
});
const ZodISODuration = /* @__PURE__ */ $constructor("ZodISODuration", (inst, def) => {
  $ZodISODuration.init(inst, def);
  ZodStringFormat.init(inst, def);
});
const ZodEmail = /* @__PURE__ */ $constructor("ZodEmail", (inst, def) => {
  $ZodEmail.init(inst, def);
  ZodStringFormat.init(inst, def);
});
const ZodGUID = /* @__PURE__ */ $constructor("ZodGUID", (inst, def) => {
  $ZodGUID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
const ZodUUID = /* @__PURE__ */ $constructor("ZodUUID", (inst, def) => {
  $ZodUUID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
const ZodURL = /* @__PURE__ */ $constructor("ZodURL", (inst, def) => {
  $ZodURL.init(inst, def);
  ZodStringFormat.init(inst, def);
});
const ZodEmoji = /* @__PURE__ */ $constructor("ZodEmoji", (inst, def) => {
  $ZodEmoji.init(inst, def);
  ZodStringFormat.init(inst, def);
});
const ZodNanoID = /* @__PURE__ */ $constructor("ZodNanoID", (inst, def) => {
  $ZodNanoID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
const ZodCUID = /* @__PURE__ */ $constructor("ZodCUID", (inst, def) => {
  $ZodCUID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
const ZodCUID2 = /* @__PURE__ */ $constructor("ZodCUID2", (inst, def) => {
  $ZodCUID2.init(inst, def);
  ZodStringFormat.init(inst, def);
});
const ZodULID = /* @__PURE__ */ $constructor("ZodULID", (inst, def) => {
  $ZodULID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
const ZodXID = /* @__PURE__ */ $constructor("ZodXID", (inst, def) => {
  $ZodXID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
const ZodKSUID = /* @__PURE__ */ $constructor("ZodKSUID", (inst, def) => {
  $ZodKSUID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
const ZodIPv4 = /* @__PURE__ */ $constructor("ZodIPv4", (inst, def) => {
  $ZodIPv4.init(inst, def);
  ZodStringFormat.init(inst, def);
});
const ZodIPv6 = /* @__PURE__ */ $constructor("ZodIPv6", (inst, def) => {
  $ZodIPv6.init(inst, def);
  ZodStringFormat.init(inst, def);
});
const ZodCIDRv4 = /* @__PURE__ */ $constructor("ZodCIDRv4", (inst, def) => {
  $ZodCIDRv4.init(inst, def);
  ZodStringFormat.init(inst, def);
});
const ZodCIDRv6 = /* @__PURE__ */ $constructor("ZodCIDRv6", (inst, def) => {
  $ZodCIDRv6.init(inst, def);
  ZodStringFormat.init(inst, def);
});
const ZodBase64 = /* @__PURE__ */ $constructor("ZodBase64", (inst, def) => {
  $ZodBase64.init(inst, def);
  ZodStringFormat.init(inst, def);
});
const ZodBase64URL = /* @__PURE__ */ $constructor("ZodBase64URL", (inst, def) => {
  $ZodBase64URL.init(inst, def);
  ZodStringFormat.init(inst, def);
});
const ZodE164 = /* @__PURE__ */ $constructor("ZodE164", (inst, def) => {
  $ZodE164.init(inst, def);
  ZodStringFormat.init(inst, def);
});
const ZodJWT = /* @__PURE__ */ $constructor("ZodJWT", (inst, def) => {
  $ZodJWT.init(inst, def);
  ZodStringFormat.init(inst, def);
});
const ZodUnknown = /* @__PURE__ */ $constructor("ZodUnknown", (inst, def) => {
  $ZodUnknown.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => unknownProcessor();
});
function unknown() {
  return /* @__PURE__ */ _unknown(ZodUnknown);
}
const ZodNever = /* @__PURE__ */ $constructor("ZodNever", (inst, def) => {
  $ZodNever.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => neverProcessor(inst, ctx, json);
});
function never(params) {
  return /* @__PURE__ */ _never(ZodNever, params);
}
const ZodArray = /* @__PURE__ */ $constructor("ZodArray", (inst, def) => {
  _ensureDefaultMemoizer();
  $ZodArray.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => arrayProcessor(inst, ctx, json, params);
  inst.element = def.element;
}, {
  min(n, params) {
    return this.check(/* @__PURE__ */ _minLength(n, params));
  },
  nonempty(params) {
    return this.check(/* @__PURE__ */ _minLength(1, params));
  },
  max(n, params) {
    return this.check(/* @__PURE__ */ _maxLength(n, params));
  },
  length(n, params) {
    return this.check(/* @__PURE__ */ _length(n, params));
  },
  unwrap() {
    return this.element;
  }
});
function array(element, params) {
  return /* @__PURE__ */ _array(ZodArray, element, params);
}
const ZodObject = /* @__PURE__ */ $constructor("ZodObject", (inst, def) => {
  _ensureDefaultMemoizer();
  $ZodObjectJIT.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => objectProcessor(inst, ctx, json, params);
  installLazyProp(inst, "shape", (self2) => self2._zod.def.shape, false);
}, {
  keyof() {
    return _enum(Object.keys(this._zod.def.shape));
  },
  catchall(catchall) {
    return this.clone(mergeDefs(this._zod.def, { catchall }));
  },
  passthrough() {
    return this.clone(mergeDefs(this._zod.def, { catchall: unknown() }));
  },
  loose() {
    return this.clone(mergeDefs(this._zod.def, { catchall: unknown() }));
  },
  strict() {
    return this.clone(mergeDefs(this._zod.def, { catchall: never() }));
  },
  strip() {
    return this.clone(mergeDefs(this._zod.def, { catchall: void 0 }));
  },
  extend(incoming) {
    return extend(this, incoming);
  },
  safeExtend(incoming) {
    return safeExtend(this, incoming);
  },
  merge(other) {
    return merge(this, other);
  },
  pick(mask) {
    return pick(this, mask);
  },
  omit(mask) {
    return omit(this, mask);
  },
  partial(...args) {
    return partial(ZodOptional, this, args[0]);
  },
  exactPartial(...args) {
    return partial(ZodExactOptional, this, args[0], "exactPartial");
  },
  required(...args) {
    return required(ZodNonOptional, this, args[0]);
  }
});
function object(shape, params) {
  const def = {
    type: "object",
    shape: shape ?? {},
    ...normalizeParams(params)
  };
  return new ZodObject(def);
}
const ZodUnion = /* @__PURE__ */ $constructor("ZodUnion", (inst, def) => {
  $ZodUnion.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => unionProcessor(inst, ctx, json, params);
  inst.options = def.options;
});
function union(options, params) {
  return new ZodUnion({
    type: "union",
    options,
    ...normalizeParams(params)
  });
}
const ZodIntersection = /* @__PURE__ */ $constructor("ZodIntersection", (inst, def) => {
  $ZodIntersection.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => intersectionProcessor(inst, ctx, json, params);
});
function intersection(left, right) {
  return new ZodIntersection({
    type: "intersection",
    left,
    right
  });
}
const ZodEnum = /* @__PURE__ */ $constructor("ZodEnum", (inst, def) => {
  $ZodEnum.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => enumProcessor(inst, ctx, json);
  inst.enum = def.entries;
  inst.options = [...inst._zod.values];
  const keys = new Set(Object.keys(def.entries));
  inst.extract = (values, params) => {
    const newEntries = {};
    for (const value of values) {
      if (keys.has(value)) {
        newEntries[value] = def.entries[value];
      } else
        throw new Error(`Key ${value} not found in enum`);
    }
    return new ZodEnum({
      ...def,
      checks: [],
      ...normalizeParams(params),
      entries: newEntries
    });
  };
  inst.exclude = (values, params) => {
    const newEntries = { ...def.entries };
    for (const value of values) {
      if (keys.has(value)) {
        delete newEntries[value];
      } else
        throw new Error(`Key ${value} not found in enum`);
    }
    return new ZodEnum({
      ...def,
      checks: [],
      ...normalizeParams(params),
      entries: newEntries
    });
  };
});
function _enum(values, params) {
  const entries = Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values;
  return new ZodEnum({
    type: "enum",
    entries,
    ...normalizeParams(params)
  });
}
const ZodTransform = /* @__PURE__ */ $constructor("ZodTransform", (inst, def) => {
  _ensureDefaultMemoizer();
  $ZodTransform.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => transformProcessor(inst, ctx, json, params);
  inst._zod.parse = (payload, _ctx) => {
    if (_ctx.direction === "backward") {
      throw new $ZodEncodeError(inst.constructor.name);
    }
    payload.addIssue = (issue$1) => {
      if (typeof issue$1 === "string") {
        payload.issues.push(issue(issue$1, payload.value, def));
      } else {
        const _issue = issue$1;
        if (_issue.fatal)
          _issue.continue = false;
        _issue.code ?? (_issue.code = "custom");
        if (!("input" in _issue))
          _issue.input = payload.value;
        _issue.inst ?? (_issue.inst = inst);
        payload.issues.push(issue(_issue));
      }
    };
    const output = def.transform(payload.value, payload);
    if (output instanceof Promise) {
      return output.then((output2) => {
        payload.value = output2;
        return payload;
      });
    }
    payload.value = output;
    return payload;
  };
});
function transform(fn2) {
  return new ZodTransform({
    type: "transform",
    transform: fn2
  });
}
const ZodOptional = /* @__PURE__ */ $constructor("ZodOptional", (inst, def) => {
  $ZodOptional.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function optional(innerType) {
  return new ZodOptional({
    type: "optional",
    innerType
  });
}
const ZodExactOptional = /* @__PURE__ */ $constructor("ZodExactOptional", (inst, def) => {
  $ZodExactOptional.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function exactOptional(innerType) {
  return new ZodExactOptional({
    type: "optional",
    innerType
  });
}
const ZodNullable = /* @__PURE__ */ $constructor("ZodNullable", (inst, def) => {
  $ZodNullable.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => nullableProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function nullable(innerType) {
  return new ZodNullable({
    type: "nullable",
    innerType
  });
}
const ZodDefault = /* @__PURE__ */ $constructor("ZodDefault", (inst, def) => {
  $ZodDefault.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => defaultProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
  inst.removeDefault = inst.unwrap;
});
function _default(innerType, defaultValue) {
  return new ZodDefault({
    type: "default",
    innerType,
    get defaultValue() {
      return typeof defaultValue === "function" ? defaultValue() : shallowClone(defaultValue);
    }
  });
}
const ZodPrefault = /* @__PURE__ */ $constructor("ZodPrefault", (inst, def) => {
  $ZodPrefault.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => prefaultProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function prefault(innerType, defaultValue) {
  return new ZodPrefault({
    type: "prefault",
    innerType,
    get defaultValue() {
      return typeof defaultValue === "function" ? defaultValue() : shallowClone(defaultValue);
    }
  });
}
const ZodNonOptional = /* @__PURE__ */ $constructor("ZodNonOptional", (inst, def) => {
  $ZodNonOptional.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => nonoptionalProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function nonoptional(innerType, params) {
  return new ZodNonOptional({
    type: "nonoptional",
    innerType,
    ...normalizeParams(params)
  });
}
const ZodCatch = /* @__PURE__ */ $constructor("ZodCatch", (inst, def) => {
  $ZodCatch.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => catchProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
  inst.removeCatch = inst.unwrap;
});
function _catch(innerType, catchValue) {
  return new ZodCatch({
    type: "catch",
    innerType,
    catchValue: typeof catchValue === "function" ? catchValue : constantCatch(catchValue)
  });
}
const ZodPipe = /* @__PURE__ */ $constructor("ZodPipe", (inst, def) => {
  $ZodPipe.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => pipeProcessor(inst, ctx, json, params);
  inst.in = def.in;
  inst.out = def.out;
});
function pipe(in_, out) {
  return new ZodPipe({
    type: "pipe",
    in: in_,
    out
    // ...util.normalizeParams(params),
  });
}
const ZodReadonly = /* @__PURE__ */ $constructor("ZodReadonly", (inst, def) => {
  $ZodReadonly.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => readonlyProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function readonly(innerType) {
  return new ZodReadonly({
    type: "readonly",
    innerType
  });
}
const ZodCustom = /* @__PURE__ */ $constructor("ZodCustom", (inst, def) => {
  $ZodCustom.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => customProcessor(inst, ctx, json, params);
});
function refine(fn2, _params = {}) {
  return /* @__PURE__ */ _refine(ZodCustom, fn2, _params);
}
function superRefine(fn2, params) {
  return /* @__PURE__ */ _superRefine(fn2, params);
}
function isValidCpf$1(value) {
  if (!/^\d{11}$/.test(value) || /^(\d)\1{10}$/.test(value)) {
    return false;
  }
  let sum2 = 0;
  for (let index = 0; index < 9; index += 1) {
    sum2 += Number(value[index]) * (10 - index);
  }
  const firstDigit = sum2 % 11 < 2 ? 0 : 11 - sum2 % 11;
  if (firstDigit !== Number(value[9])) {
    return false;
  }
  sum2 = 0;
  for (let index = 0; index < 10; index += 1) {
    sum2 += Number(value[index]) * (11 - index);
  }
  const secondDigit = sum2 % 11 < 2 ? 0 : 11 - sum2 % 11;
  return secondDigit === Number(value[10]);
}
const cpfSchema$1 = string().trim().refine(
  (value) => /^\d{11}$/.test(value) || /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(value),
  { message: "CPF_FORMAT_INVALID" }
).transform((value) => value.replace(/[.-]/g, "")).refine(isValidCpf$1, { message: "CPF_INVALID" });
const LoginSchema = object({
  accessCode: string().trim().min(1, "ACCESS_CODE_REQUIRED"),
  password: string().min(1, "PASSWORD_REQUIRED")
}).strict();
const InitialLibrarianSchema = object({
  name: string().trim().min(1, "INITIAL_LIBRARIAN_NAME_REQUIRED").max(120),
  email: string().trim().email("INITIAL_LIBRARIAN_EMAIL_INVALID").max(254),
  cpf: cpfSchema$1,
  accessCode: string().trim().min(1, "INITIAL_LIBRARIAN_ACCESS_CODE_REQUIRED").max(64),
  password: string().min(1, "INITIAL_LIBRARIAN_PASSWORD_REQUIRED").max(128)
}).strict();
const ChangePasswordSchema = object({
  currentPassword: string().min(1, "CURRENT_PASSWORD_REQUIRED"),
  newPassword: string().min(12, "PASSWORD_TOO_SHORT")
}).strict();
const SALT_ROUNDS = 12;
async function hashPassword(password) {
  return bcrypt.hash(password, SALT_ROUNDS);
}
async function verifyPassword(password, passwordHash) {
  return bcrypt.compare(password, passwordHash);
}
const MAX_FAILED_ATTEMPTS = 3;
const LOCK_DURATION_MINUTES = 15;
class AuthService {
  async provisionInitialLibrarian(input) {
    if (await prisma.librarian.count() > 0) return false;
    const configuration = input;
    const requiredFields = [
      "name",
      "email",
      "cpf",
      "accessCode",
      "password"
    ];
    const missingFields = requiredFields.filter(
      (field) => typeof (configuration == null ? void 0 : configuration[field]) !== "string" || !configuration[field].trim()
    );
    if (missingFields.length > 0) {
      const envNames = {
        name: "INITIAL_LIBRARIAN_NAME",
        email: "INITIAL_LIBRARIAN_EMAIL",
        cpf: "INITIAL_LIBRARIAN_CPF",
        accessCode: "INITIAL_LIBRARIAN_ACCESS_CODE",
        password: "INITIAL_LIBRARIAN_PASSWORD"
      };
      throw new Error(
        `INITIAL_LIBRARIAN_CONFIGURATION_MISSING:${missingFields.map((field) => envNames[field]).join(",")}`
      );
    }
    const validate2 = InitialLibrarianSchema.safeParse(input);
    if (!validate2.success) {
      const issue2 = validate2.error.issues[0];
      throw new Error((issue2 == null ? void 0 : issue2.message) ?? "INVALID_INPUT");
    }
    const { name: name2, email: email2, cpf, accessCode, password } = validate2.data;
    if (email2.endsWith(".invalid") || accessCode.startsWith("CHANGE_ME") || cpf === "CHANGE_ME_VALID_CPF" || password.includes("CHANGE_ME") || password === "TROQUE_POR_UMA_SENHA_TEMPORARIA_FORTE") {
      throw new Error("INITIAL_LIBRARIAN_CONFIGURATION_HAS_PLACEHOLDERS");
    }
    const passwordHash = await hashPassword(password);
    const user = await prisma.$transaction(async (transaction) => {
      if (await transaction.librarian.count() > 0) return null;
      const person = await transaction.person.create({
        data: { name: name2, email: email2, cpf }
      });
      const librarian = await transaction.librarian.create({
        data: {
          personId: person.id,
          accessCode,
          passwordHash,
          isActive: true,
          mustChangePassword: true
        }
      });
      await transaction.registrationLog.create({
        data: { personId: person.id, createdByLibrarianId: null }
      });
      return librarian;
    });
    return user !== null;
  }
  async login(input) {
    const validate2 = LoginSchema.safeParse(input);
    if (!validate2.success) {
      const invalidFields = new Set(
        validate2.error.issues.map((issue2) => issue2.path[0])
      );
      if (invalidFields.has("accessCode")) {
        throw new Error("ACCESS_CODE_REQUIRED");
      }
      if (invalidFields.has("password")) {
        throw new Error("PASSWORD_REQUIRED");
      }
      throw new Error("INVALID_INPUT");
    }
    const { accessCode, password } = validate2.data;
    const user = await prisma.librarian.findUnique({
      where: { accessCode },
      include: { person: true }
    });
    if (!user) {
      await prisma.accessLog.create({
        data: {
          attemptedAccessCode: accessCode,
          success: false,
          failureReason: "INVALID_CREDENTIALS"
        }
      });
      if (await prisma.librarian.count() === 0)
        throw new Error("NO_CREDENTIALS_CONFIGURED");
      throw new Error("INVALID_CREDENTIALS");
    }
    const now = /* @__PURE__ */ new Date();
    if (user.lockedUntil && user.lockedUntil > now) {
      await prisma.accessLog.create({
        data: {
          librarianId: user.id,
          attemptedAccessCode: accessCode,
          success: false,
          failureReason: "ACCOUNT_LOCKED"
        }
      });
      throw new Error(`ACCOUNT_LOCKED:${user.lockedUntil.toISOString()}`);
    }
    if (!user.isActive) {
      await prisma.accessLog.create({
        data: {
          librarianId: user.id,
          attemptedAccessCode: accessCode,
          success: false,
          failureReason: "ACCOUNT_INACTIVE"
        }
      });
      throw new Error("ACCOUNT_UNAVAILABLE");
    }
    if (!await verifyPassword(password, user.passwordHash)) {
      for (let attempt = 0; attempt < 5; attempt += 1) {
        const latest = await prisma.librarian.findUnique({
          where: { id: user.id }
        });
        if (!latest) throw new Error("ACCOUNT_UNAVAILABLE");
        const currentTime = /* @__PURE__ */ new Date();
        if (latest.lockedUntil && latest.lockedUntil > currentTime) {
          await prisma.accessLog.create({
            data: {
              librarianId: user.id,
              attemptedAccessCode: accessCode,
              success: false,
              failureReason: "ACCOUNT_LOCKED"
            }
          });
          throw new Error(`ACCOUNT_LOCKED:${latest.lockedUntil.toISOString()}`);
        }
        const currentAttempts = latest.lockedUntil && latest.lockedUntil <= currentTime ? 0 : latest.failedLoginAttempts;
        const failedAttempts = currentAttempts + 1;
        const lockedUntil = failedAttempts >= MAX_FAILED_ATTEMPTS ? new Date(currentTime.getTime() + LOCK_DURATION_MINUTES * 6e4) : null;
        const changed = await prisma.librarian.updateMany({
          where: {
            id: user.id,
            failedLoginAttempts: latest.failedLoginAttempts,
            lockedUntil: latest.lockedUntil
          },
          data: {
            failedLoginAttempts: failedAttempts,
            lastFailedLoginAt: currentTime,
            lockedUntil
          }
        });
        if (changed.count === 1) {
          await prisma.accessLog.create({
            data: {
              librarianId: user.id,
              attemptedAccessCode: accessCode,
              success: false,
              failureReason: "INVALID_CREDENTIALS"
            }
          });
          throw new Error(
            lockedUntil ? `ACCOUNT_LOCKED:${lockedUntil.toISOString()}` : "INVALID_CREDENTIALS"
          );
        }
      }
      throw new Error("LOGIN_RETRY_REQUIRED");
    }
    const authenticatedUser = {
      id: user.id,
      name: user.person.name,
      accessCode: user.accessCode,
      role: "BIBLIOTECARIO",
      mustChangePassword: user.mustChangePassword
    };
    await prisma.$transaction([
      prisma.librarian.update({
        where: { id: user.id },
        data: { failedLoginAttempts: 0, lockedUntil: null }
      }),
      prisma.accessLog.create({
        data: {
          librarianId: user.id,
          attemptedAccessCode: accessCode,
          success: true,
          failureReason: null
        }
      })
    ]);
    return { user: authenticatedUser };
  }
  async changePassword(userId, input) {
    const validate2 = ChangePasswordSchema.safeParse(input);
    if (!validate2.success) {
      const invalidFields = new Set(
        validate2.error.issues.map((issue2) => issue2.path[0])
      );
      if (invalidFields.has("currentPassword")) {
        throw new Error("CURRENT_PASSWORD_REQUIRED");
      }
      if (invalidFields.has("newPassword")) {
        throw new Error("PASSWORD_TOO_SHORT");
      }
      throw new Error("INVALID_INPUT");
    }
    const { currentPassword, newPassword } = validate2.data;
    const user = await prisma.librarian.findUnique({ where: { id: userId } });
    if (!user || !user.isActive) throw new Error("ACCOUNT_UNAVAILABLE");
    if (!await verifyPassword(currentPassword, user.passwordHash)) {
      throw new Error("INVALID_CURRENT_PASSWORD");
    }
    if (await verifyPassword(newPassword, user.passwordHash)) {
      throw new Error("PASSWORD_MUST_BE_DIFFERENT");
    }
    const newPasswordHash = await hashPassword(newPassword);
    await prisma.librarian.update({
      where: { id: user.id },
      data: {
        passwordHash: newPasswordHash,
        mustChangePassword: false,
        failedLoginAttempts: 0,
        lockedUntil: null
      }
    });
  }
}
function isValidCpf(value) {
  if (!/^\d{11}$/.test(value) || /^(\d)\1{10}$/.test(value)) {
    return false;
  }
  let sum2 = 0;
  for (let index = 0; index < 9; index += 1) {
    sum2 += Number(value[index]) * (10 - index);
  }
  const firstDigit = sum2 % 11 < 2 ? 0 : 11 - sum2 % 11;
  if (firstDigit !== Number(value[9])) {
    return false;
  }
  sum2 = 0;
  for (let index = 0; index < 10; index += 1) {
    sum2 += Number(value[index]) * (11 - index);
  }
  const secondDigit = sum2 % 11 < 2 ? 0 : 11 - sum2 % 11;
  return secondDigit === Number(value[10]);
}
const cpfSchema = string().trim().refine(
  (value) => /^\d{11}$/.test(value) || /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(value),
  { message: "CPF_FORMAT_INVALID" }
).transform((value) => value.replace(/[.-]/g, "")).refine(isValidCpf, { message: "CPF_INVALID" });
const personFields = {
  name: string().trim().min(1, "NAME_REQUIRED").max(120),
  cpf: cpfSchema,
  email: string().trim().email("EMAIL_INVALID").max(254)
};
const CreateStudentSchema = object({
  ...personFields,
  registrationNumber: string().trim().min(1, "REGISTRATION_NUMBER_REQUIRED").max(40),
  course: string().trim().min(1, "COURSE_REQUIRED").max(120)
}).strict();
const CreateProfessorSchema = object({
  ...personFields,
  registrationNumber: string().trim().min(1, "REGISTRATION_NUMBER_REQUIRED").max(40),
  department: string().trim().min(1, "DEPARTMENT_REQUIRED")
}).strict();
const CreateLibrarianSchema = object({
  ...personFields
}).strict();
function handleDatabaseError$1(error2) {
  if (error2 && typeof error2 === "object" && "code" in error2 && error2.code === "P2002") {
    throw new Error("DUPLICATE_DATA");
  }
  throw error2;
}
class RegistrationService {
  async createStudent(input, librarianId) {
    const data = CreateStudentSchema.parse(input);
    const emailAlreadyExists = await prisma.person.findUnique({
      where: { email: data.email }
    });
    if (emailAlreadyExists) {
      throw new Error("EMAIL_ALREADY_REGISTERED");
    }
    const registrationNumberAlreadyExists = await prisma.student.findUnique({
      where: {
        registrationNumber: data.registrationNumber
      }
    });
    if (registrationNumberAlreadyExists) {
      throw new Error("REGISTRATION_NUMBER_ALREADY_REGISTERED");
    }
    try {
      return await prisma.$transaction(async (transaction) => {
        const person = await transaction.person.create({
          data: {
            name: data.name,
            email: data.email,
            cpf: data.cpf
          }
        });
        const student = await transaction.student.create({
          data: {
            personId: person.id,
            registrationNumber: data.registrationNumber,
            course: data.course
          }
        });
        await transaction.registrationLog.create({
          data: {
            personId: person.id,
            createdByLibrarianId: librarianId
          }
        });
        return {
          id: student.id,
          name: person.name,
          email: person.email,
          registrationNumber: student.registrationNumber,
          course: student.course
        };
      });
    } catch (error2) {
      handleDatabaseError$1(error2);
    }
  }
  async createProfessor(input, librarianId) {
    const data = CreateProfessorSchema.parse(input);
    const emailAlreadyExists = await prisma.person.findUnique({
      where: { email: data.email }
    });
    if (emailAlreadyExists) {
      throw new Error("EMAIL_ALREADY_REGISTERED");
    }
    const registrationNumberAlreadyExists = await prisma.professor.findUnique({
      where: {
        registrationNumber: data.registrationNumber
      }
    });
    if (registrationNumberAlreadyExists) {
      throw new Error("REGISTRATION_NUMBER_ALREADY_REGISTERED");
    }
    try {
      return await prisma.$transaction(async (transaction) => {
        const person = await transaction.person.create({
          data: {
            name: data.name,
            email: data.email,
            cpf: data.cpf
          }
        });
        const professor = await transaction.professor.create({
          data: {
            personId: person.id,
            registrationNumber: data.registrationNumber,
            department: data.department
          }
        });
        await transaction.registrationLog.create({
          data: {
            personId: person.id,
            createdByLibrarianId: librarianId
          }
        });
        return {
          id: professor.id,
          name: person.name,
          email: person.email,
          registrationNumber: professor.registrationNumber
        };
      });
    } catch (error2) {
      handleDatabaseError$1(error2);
    }
  }
  async createLibrarian(input, creatorId) {
    const data = CreateLibrarianSchema.parse(input);
    const emailAlreadyExists = await prisma.person.findUnique({
      where: { email: data.email }
    });
    if (emailAlreadyExists) {
      throw new Error("EMAIL_ALREADY_REGISTERED");
    }
    let accessCode = randomBytes(6).toString("hex").toUpperCase();
    while (await prisma.librarian.findUnique({ where: { accessCode } })) {
      accessCode = randomBytes(6).toString("hex").toUpperCase();
    }
    const temporaryPassword = randomBytes(18).toString("base64url");
    const passwordHash = await hashPassword(temporaryPassword);
    try {
      return await prisma.$transaction(async (transaction) => {
        const person = await transaction.person.create({
          data: {
            name: data.name,
            email: data.email,
            cpf: data.cpf
          }
        });
        const librarian = await transaction.librarian.create({
          data: {
            personId: person.id,
            accessCode,
            passwordHash,
            isActive: true,
            mustChangePassword: true
          }
        });
        await transaction.registrationLog.create({
          data: {
            personId: person.id,
            createdByLibrarianId: creatorId
          }
        });
        return {
          id: librarian.id,
          name: person.name,
          email: person.email,
          accessCode: librarian.accessCode,
          temporaryPassword
        };
      });
    } catch (error2) {
      handleDatabaseError$1(error2);
    }
  }
}
const optionalText = (max2) => string().trim().max(max2, "TEXT_TOO_LONG").transform((value) => value.length === 0 ? void 0 : value).optional();
const optionalDate = string().trim().optional().transform((value) => value === "" ? void 0 : value).refine(
  (value) => value === void 0 || /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(`${value}T00:00:00.000Z`)) && (/* @__PURE__ */ new Date(`${value}T00:00:00.000Z`)).toISOString().slice(0, 10) === value,
  { message: "DATE_INVALID" }
).refine(
  (value) => value === void 0 || value <= (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
  { message: "DATE_CANNOT_BE_FUTURE" }
).transform(
  (value) => value === void 0 ? void 0 : /* @__PURE__ */ new Date(`${value}T00:00:00.000Z`)
);
const CreateAuthorSchema = object({
  name: string().trim().min(1, "NAME_REQUIRED").max(240),
  nationality: string().trim().min(1, "NATIONALITY_REQUIRED").max(100),
  pseudonym: optionalText(120),
  dateOfBirth: optionalDate,
  dateOfDeath: optionalDate,
  biography: optionalText(2e3)
}).strict().superRefine((author, context) => {
  if (author.dateOfBirth && author.dateOfDeath && author.dateOfDeath < author.dateOfBirth) {
    context.addIssue({
      code: "custom",
      path: ["dateOfDeath"],
      message: "DATE_OF_DEATH_BEFORE_BIRTH"
    });
  }
});
function normalizeName(name2) {
  return name2.normalize("NFD").replace(new RegExp("\\p{Diacritic}", "gu"), "").trim().replace(/\s+/g, " ").toLocaleLowerCase("pt-BR");
}
function isDuplicateAuthor(existing, input) {
  var _a5;
  if (normalizeName(existing.name) !== normalizeName(input.name)) return false;
  if (!input.dateOfBirth) return true;
  return ((_a5 = existing.dateOfBirth) == null ? void 0 : _a5.getTime()) === input.dateOfBirth.getTime();
}
function handleDatabaseError(error2) {
  if (error2 && typeof error2 === "object" && "code" in error2 && error2.code === "P2002") {
    throw new Error("DUPLICATE_AUTHOR");
  }
  throw error2;
}
class AuthorService {
  async createAuthor(input, librarianId) {
    const data = CreateAuthorSchema.parse(input);
    try {
      return await prisma.$transaction(async (transaction) => {
        const authorsWithSameName = await transaction.author.findMany({
          select: { name: true, dateOfBirth: true }
        });
        if (authorsWithSameName.some((author2) => isDuplicateAuthor(author2, data))) {
          throw new Error("DUPLICATE_AUTHOR");
        }
        const author = await transaction.author.create({
          data: {
            name: data.name,
            nationality: data.nationality,
            pseudonym: data.pseudonym,
            dateOfBirth: data.dateOfBirth,
            dateOfDeath: data.dateOfDeath,
            biography: data.biography,
            isActive: true
          }
        });
        await transaction.registrationAuthorLog.create({
          data: {
            authorId: author.id,
            createdByLibrarianId: librarianId
          }
        });
        return author;
      });
    } catch (error2) {
      handleDatabaseError(error2);
    }
  }
}
const require$1 = createRequire(import.meta.url);
const { config: loadDotEnv } = require$1("dotenv");
const authService = new AuthService();
const registrationService = new RegistrationService();
const authorService = new AuthorService();
const sessions = /* @__PURE__ */ new Map();
const SESSION_IDLE_TIMEOUT_MS = 15 * 60 * 1e3;
const __dirname$1 = path__default.dirname(fileURLToPath(import.meta.url));
async function requireActiveLibrarian(event) {
  if (event.senderFrame !== event.sender.mainFrame) {
    throw new Error("UNAUTHORIZED");
  }
  const session = sessions.get(event.sender.id);
  if (!session) {
    throw new Error("NOT_AUTHENTICATED");
  }
  if (Date.now() - session.lastActivityAt >= SESSION_IDLE_TIMEOUT_MS) {
    sessions.delete(event.sender.id);
    throw new Error("SESSION_EXPIRED");
  }
  const librarian = await prisma.librarian.findUnique({
    where: { id: session.userId },
    select: {
      id: true,
      isActive: true,
      mustChangePassword: true
    }
  });
  if (!librarian || !librarian.isActive) {
    sessions.delete(event.sender.id);
    throw new Error("ACCOUNT_UNAVAILABLE");
  }
  if (librarian.mustChangePassword) {
    throw new Error("PASSWORD_CHANGE_REQUIRED");
  }
  session.lastActivityAt = Date.now();
  return librarian.id;
}
function toSqliteFileUrl(absolutePath) {
  return `file:${absolutePath.replace(/\\/g, "/")}`;
}
function resolveDevelopmentDatabaseUrl(databaseUrl) {
  if (!databaseUrl.startsWith("file:")) return databaseUrl;
  const fileUrl = databaseUrl.slice("file:".length);
  const queryIndex = fileUrl.indexOf("?");
  const databasePath = queryIndex === -1 ? fileUrl : fileUrl.slice(0, queryIndex);
  const query = queryIndex === -1 ? "" : fileUrl.slice(queryIndex);
  const absolutePath = path__default.isAbsolute(databasePath) ? databasePath : path__default.resolve(app.getAppPath(), databasePath);
  return `${toSqliteFileUrl(absolutePath)}${query}`;
}
process.env.APP_ROOT = path__default.join(__dirname$1, "..");
const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];
const MAIN_DIST = path__default.join(process.env.APP_ROOT, "dist-electron");
const RENDERER_DIST = path__default.join(process.env.APP_ROOT, "dist");
process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL ? path__default.join(process.env.APP_ROOT, "public") : RENDERER_DIST;
let win;
function createWindow() {
  win = new BrowserWindow({
    title: "Libapp",
    autoHideMenuBar: true,
    webPreferences: {
      preload: path__default.join(__dirname$1, "preload.mjs"),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });
  const windowId = win.webContents.id;
  win.on("closed", () => {
    sessions.delete(windowId);
    win = null;
  });
  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(path__default.join(RENDERER_DIST, "index.html"));
  }
}
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
    win = null;
  }
});
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
ipcMain.handle("auth:login", async (event, input) => {
  if (event.senderFrame !== event.sender.mainFrame)
    throw new Error("UNAUTHORIZED");
  const result = await authService.login(input);
  sessions.set(event.sender.id, {
    userId: result.user.id,
    lastActivityAt: Date.now()
  });
  return result;
});
ipcMain.handle("auth:get-session", async (event) => {
  if (event.senderFrame !== event.sender.mainFrame)
    throw new Error("UNAUTHORIZED");
  const session = sessions.get(event.sender.id);
  if (!session) return null;
  if (Date.now() - session.lastActivityAt >= SESSION_IDLE_TIMEOUT_MS) {
    sessions.delete(event.sender.id);
    return null;
  }
  const user = await prisma.librarian.findUnique({
    where: { id: session.userId },
    include: { person: true }
  });
  if (!user || !user.isActive) {
    sessions.delete(event.sender.id);
    return null;
  }
  session.lastActivityAt = Date.now();
  return {
    user: {
      id: user.id,
      name: user.person.name,
      role: "BIBLIOTECARIO",
      mustChangePassword: user.mustChangePassword
    },
    idleTimeoutMs: SESSION_IDLE_TIMEOUT_MS
  };
});
ipcMain.handle("auth:logout", (event) => {
  sessions.delete(event.sender.id);
  return { success: true };
});
ipcMain.handle("auth:activity", (event) => {
  if (event.senderFrame !== event.sender.mainFrame)
    throw new Error("UNAUTHORIZED");
  const session = sessions.get(event.sender.id);
  if (!session || Date.now() - session.lastActivityAt >= SESSION_IDLE_TIMEOUT_MS) {
    sessions.delete(event.sender.id);
    return false;
  }
  session.lastActivityAt = Date.now();
  return true;
});
ipcMain.handle("auth:change-password", async (event, input) => {
  if (event.senderFrame !== event.sender.mainFrame)
    throw new Error("UNAUTHORIZED");
  const session = sessions.get(event.sender.id);
  if (!session) {
    throw new Error("NOT_AUTHENTICATED");
  }
  if (Date.now() - session.lastActivityAt >= SESSION_IDLE_TIMEOUT_MS) {
    sessions.delete(event.sender.id);
    throw new Error("SESSION_EXPIRED");
  }
  await authService.changePassword(session.userId, input);
  session.lastActivityAt = Date.now();
  return { success: true };
});
ipcMain.handle("registration:create-student", async (event, input) => {
  const librarianId = await requireActiveLibrarian(event);
  return registrationService.createStudent(input, librarianId);
});
ipcMain.handle(
  "registration:create-professor",
  async (event, input) => {
    const librarianId = await requireActiveLibrarian(event);
    return registrationService.createProfessor(input, librarianId);
  }
);
ipcMain.handle(
  "registration:create-librarian",
  async (event, input) => {
    const librarianId = await requireActiveLibrarian(event);
    return registrationService.createLibrarian(input, librarianId);
  }
);
ipcMain.handle("author:create", async (event, input) => {
  const librarianId = await requireActiveLibrarian(event);
  return authorService.createAuthor(input, librarianId);
});
app.whenReady().then(async () => {
  Menu.setApplicationMenu(null);
  const provisioningEnvPath = app.isPackaged ? path__default.join(app.getPath("userData"), ".env") : path__default.join(app.getAppPath(), ".env");
  loadDotEnv({ path: provisioningEnvPath });
  const configuredDatabaseUrl = process.env.DATABASE_URL;
  const packagedDatabasePath = path__default.join(
    app.getPath("userData"),
    "lib-app.db"
  );
  const databaseUrl = app.isPackaged ? toSqliteFileUrl(packagedDatabasePath) : configuredDatabaseUrl ? resolveDevelopmentDatabaseUrl(configuredDatabaseUrl) : configuredDatabaseUrl;
  if (!databaseUrl) {
    throw new Error("DATABASE_URL is required while running in development.");
  }
  if (app.isPackaged) {
    await mkdir(path__default.dirname(packagedDatabasePath), { recursive: true });
  } else if (configuredDatabaseUrl == null ? void 0 : configuredDatabaseUrl.startsWith("file:")) {
    const databasePath = configuredDatabaseUrl.slice("file:".length).split("?")[0];
    const absoluteDatabasePath = path__default.isAbsolute(databasePath) ? databasePath : path__default.resolve(app.getAppPath(), databasePath);
    await mkdir(path__default.dirname(absoluteDatabasePath), { recursive: true });
  }
  await initializeDatabase(databaseUrl);
  const migrationsDirectory = app.isPackaged ? path__default.join(app.getAppPath(), "prisma", "migrations") : path__default.resolve(app.getAppPath(), "prisma", "migrations");
  await applySqliteMigrations(migrationsDirectory);
  const librarianCreated = await authService.provisionInitialLibrarian({
    name: process.env.INITIAL_LIBRARIAN_NAME,
    email: process.env.INITIAL_LIBRARIAN_EMAIL,
    cpf: process.env.INITIAL_LIBRARIAN_CPF,
    accessCode: process.env.INITIAL_LIBRARIAN_ACCESS_CODE,
    password: process.env.INITIAL_LIBRARIAN_PASSWORD
  });
  if (librarianCreated) {
    console.info(
      "Created the initial librarian account from the provisioning environment."
    );
  }
  createWindow();
}).catch((error2) => {
  console.error("Failed to initialize the SQLite database:", error2);
  const message = error2 instanceof Error ? error2.message : String(error2);
  const configurationError = message.startsWith("INITIAL_LIBRARIAN_");
  dialog.showErrorBox(
    "Biblioteca IFCE",
    configurationError ? `The database is empty and the initial librarian could not be created. Configure INITIAL_LIBRARIAN_NAME, INITIAL_LIBRARIAN_EMAIL,INITIAL_LIBRARIAN_CPF, INITIAL_LIBRARIAN_ACCESS_CODE, and INITIAL_LIBRARIAN_PASSWORD in ${app.isPackaged ? path__default.join(app.getPath("userData"), ".env") : path__default.join(app.getAppPath(), ".env")}. Restart the app after saving the file. (${message})` : `The application could not initialize its SQLite database. (${message})`
  );
  app.quit();
});
export {
  MAIN_DIST,
  RENDERER_DIST,
  VITE_DEV_SERVER_URL
};
