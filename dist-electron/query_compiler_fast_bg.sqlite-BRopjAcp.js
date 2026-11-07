var S = () => {
};
S.prototype = S;
let o;
function $(n) {
  o = n;
}
let y = null;
function l() {
  return (y === null || y.byteLength === 0) && (y = new Uint8Array(o.memory.buffer)), y;
}
let h = new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 });
h.decode();
const j = 2146435072;
let I = 0;
function O(n, e) {
  return I += e, I >= j && (h = new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 }), h.decode(), I = e), h.decode(l().subarray(n, n + e));
}
function p(n, e) {
  return n = n >>> 0, O(n, e);
}
let b = 0;
const d = new TextEncoder();
"encodeInto" in d || (d.encodeInto = function(n, e) {
  const t = d.encode(n);
  return e.set(t), { read: n.length, written: t.length };
});
function w(n, e, t) {
  if (t === void 0) {
    const c = d.encode(n), f = e(c.length, 1) >>> 0;
    return l().subarray(f, f + c.length).set(c), b = c.length, f;
  }
  let r = n.length, _ = e(r, 1) >>> 0;
  const s = l();
  let i = 0;
  for (; i < r; i++) {
    const c = n.charCodeAt(i);
    if (c > 127) break;
    s[_ + i] = c;
  }
  if (i !== r) {
    i !== 0 && (n = n.slice(i)), _ = t(_, r, r = i + n.length * 3, 1) >>> 0;
    const c = l().subarray(_ + i, _ + r), f = d.encodeInto(n, c);
    i += f.written, _ = t(_, r, i, 1) >>> 0;
  }
  return b = i, _;
}
let u = null;
function a() {
  return (u === null || u.buffer.detached === !0 || u.buffer.detached === void 0 && u.buffer !== o.memory.buffer) && (u = new DataView(o.memory.buffer)), u;
}
function m(n) {
  return n == null;
}
function A(n) {
  const e = typeof n;
  if (e == "number" || e == "boolean" || n == null) return `${n}`;
  if (e == "string") return `"${n}"`;
  if (e == "symbol") {
    const _ = n.description;
    return _ == null ? "Symbol" : `Symbol(${_})`;
  }
  if (e == "function") {
    const _ = n.name;
    return typeof _ == "string" && _.length > 0 ? `Function(${_})` : "Function";
  }
  if (Array.isArray(n)) {
    const _ = n.length;
    let s = "[";
    _ > 0 && (s += A(n[0]));
    for (let i = 1; i < _; i++) s += ", " + A(n[i]);
    return s += "]", s;
  }
  const t = /\[object ([^\]]+)\]/.exec(toString.call(n));
  let r;
  if (t && t.length > 1) r = t[1];
  else return toString.call(n);
  if (r == "Object") try {
    return "Object(" + JSON.stringify(n) + ")";
  } catch {
    return "Object";
  }
  return n instanceof Error ? `${n.name}: ${n.message}
${n.stack}` : r;
}
function B(n, e) {
  return n = n >>> 0, l().subarray(n / 1, n / 1 + e);
}
function g(n) {
  const e = o.__wbindgen_externrefs.get(n);
  return o.__externref_table_dealloc(n), e;
}
const v = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => o.__wbg_querycompiler_free(n >>> 0, 1));
class x {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, v.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    o.__wbg_querycompiler_free(e, 0);
  }
  compileBatch(e) {
    const t = w(e, o.__wbindgen_malloc, o.__wbindgen_realloc), r = b, _ = o.querycompiler_compileBatch(this.__wbg_ptr, t, r);
    if (_[2]) throw g(_[1]);
    return g(_[0]);
  }
  constructor(e) {
    const t = o.querycompiler_new(e);
    if (t[2]) throw g(t[1]);
    return this.__wbg_ptr = t[0] >>> 0, v.register(this, this.__wbg_ptr, this), this;
  }
  compile(e) {
    const t = w(e, o.__wbindgen_malloc, o.__wbindgen_realloc), r = b, _ = o.querycompiler_compile(this.__wbg_ptr, t, r);
    if (_[2]) throw g(_[1]);
    return g(_[0]);
  }
}
Symbol.dispose && (x.prototype[Symbol.dispose] = x.prototype.free);
function q(n, e) {
  return Error(p(n, e));
}
function E(n) {
  return Number(n);
}
function N(n, e) {
  const t = String(e), r = w(t, o.__wbindgen_malloc, o.__wbindgen_realloc), _ = b;
  a().setInt32(n + 4 * 1, _, !0), a().setInt32(n + 4 * 0, r, !0);
}
function T(n) {
  const e = n, t = typeof e == "boolean" ? e : void 0;
  return m(t) ? 16777215 : t ? 1 : 0;
}
function U(n, e) {
  const t = A(e), r = w(t, o.__wbindgen_malloc, o.__wbindgen_realloc), _ = b;
  a().setInt32(n + 4 * 1, _, !0), a().setInt32(n + 4 * 0, r, !0);
}
function F(n, e) {
  return n in e;
}
function M(n) {
  const e = n;
  return typeof e == "object" && e !== null;
}
function R(n) {
  return typeof n == "string";
}
function D(n) {
  return n === void 0;
}
function k(n, e) {
  return n == e;
}
function C(n, e) {
  const t = e, r = typeof t == "number" ? t : void 0;
  a().setFloat64(n + 8 * 1, m(r) ? 0 : r, !0), a().setInt32(n + 4 * 0, !m(r), !0);
}
function z(n, e) {
  const t = e, r = typeof t == "string" ? t : void 0;
  var _ = m(r) ? 0 : w(r, o.__wbindgen_malloc, o.__wbindgen_realloc), s = b;
  a().setInt32(n + 4 * 1, s, !0), a().setInt32(n + 4 * 0, _, !0);
}
function P(n, e) {
  throw new Error(p(n, e));
}
function G(n) {
  return Object.entries(n);
}
function J(n) {
  return n.getTime();
}
function L(n, e) {
  return n[e >>> 0];
}
function Q(n, e) {
  return n[e];
}
function V(n) {
  let e;
  try {
    e = n instanceof ArrayBuffer;
  } catch {
    e = !1;
  }
  return e;
}
function W(n) {
  let e;
  try {
    e = n instanceof Uint8Array;
  } catch {
    e = !1;
  }
  return e;
}
function Y(n) {
  return Number.isSafeInteger(n);
}
function H(n) {
  return n.length;
}
function K(n) {
  return n.length;
}
function X() {
  return /* @__PURE__ */ new Date();
}
function Z() {
  return new Object();
}
function nn(n) {
  return new Uint8Array(n);
}
function en() {
  return /* @__PURE__ */ new Map();
}
function tn() {
  return new Array();
}
function _n(n, e, t) {
  Uint8Array.prototype.set.call(B(n, e), t);
}
function rn(n, e, t) {
  n[e] = t;
}
function on(n, e, t) {
  return n.set(e, t);
}
function cn(n, e, t) {
  n[e >>> 0] = t;
}
function sn(n, e) {
  global.PRISMA_WASM_PANIC_REGISTRY.set_message(p(n, e));
}
function an(n, e) {
  return p(n, e);
}
function bn(n) {
  return BigInt.asUintN(64, n);
}
function un(n) {
  return n;
}
function fn(n) {
  return n;
}
function gn() {
  const n = o.__wbindgen_externrefs, e = n.grow(4);
  n.set(0, void 0), n.set(e + 0, void 0), n.set(e + 1, null), n.set(e + 2, !0), n.set(e + 3, !1);
}
export {
  x as QueryCompiler,
  q as __wbg_Error_e83987f665cf5504,
  E as __wbg_Number_bb48ca12f395cd08,
  N as __wbg_String_8f0eb39a4a4c2f66,
  T as __wbg___wbindgen_boolean_get_6d5a1ee65bab5f68,
  U as __wbg___wbindgen_debug_string_df47ffb5e35e6763,
  F as __wbg___wbindgen_in_bb933bd9e1b3bc0f,
  M as __wbg___wbindgen_is_object_c818261d21f283a4,
  R as __wbg___wbindgen_is_string_fbb76cb2940daafd,
  D as __wbg___wbindgen_is_undefined_2d472862bd29a478,
  k as __wbg___wbindgen_jsval_loose_eq_b664b38a2f582147,
  C as __wbg___wbindgen_number_get_a20bf9b85341449d,
  z as __wbg___wbindgen_string_get_e4f06c90489ad01b,
  P as __wbg___wbindgen_throw_b855445ff6a94295,
  G as __wbg_entries_e171b586f8f6bdbf,
  J as __wbg_getTime_14776bfb48a1bff9,
  L as __wbg_get_7bed016f185add81,
  Q as __wbg_get_with_ref_key_1dc361bd10053bfe,
  V as __wbg_instanceof_ArrayBuffer_70beb1189ca63b38,
  W as __wbg_instanceof_Uint8Array_20c8e73002f7af98,
  Y as __wbg_isSafeInteger_d216eda7911dde36,
  H as __wbg_length_69bca3cb64fc8748,
  K as __wbg_length_cdd215e10d9dd507,
  X as __wbg_new_0_f9740686d739025c,
  Z as __wbg_new_1acc0b6eea89d040,
  nn as __wbg_new_5a79be3ab53b8aa5,
  en as __wbg_new_68651c719dcda04e,
  tn as __wbg_new_e17d9f43105b08be,
  _n as __wbg_prototypesetcall_2a6620b6922694b2,
  rn as __wbg_set_3f1d0b984ed272ed,
  on as __wbg_set_907fb406c34a251d,
  cn as __wbg_set_c213c871859d6500,
  sn as __wbg_set_message_82ae475bb413aa5c,
  $ as __wbg_set_wasm,
  an as __wbindgen_cast_2241b6af4c4b2941,
  bn as __wbindgen_cast_4625c577ab2ec9ee,
  un as __wbindgen_cast_9ae0607507abb057,
  fn as __wbindgen_cast_d6cd19b81560fd6e,
  gn as __wbindgen_init_externref_table
};
