var Gu = Object.defineProperty;
var ts = (e) => {
  throw TypeError(e);
};
var Qu = (e, t, n) => t in e ? Gu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var g = (e, t, n) => Qu(e, typeof t != "symbol" ? t + "" : t, n), Yu = (e, t, n) => t.has(e) || ts("Cannot " + n);
var Ct = (e, t, n) => t.has(e) ? ts("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n);
var ns = (e, t, n) => (Yu(e, t, "access private method"), n);
import { app as te, BrowserWindow as sa, ipcMain as un, Menu as Xu, dialog as ec } from "electron";
import { createHash as tc, randomUUID as nc } from "node:crypto";
import oa, { readdir as rc, readFile as ic, mkdir as rs } from "node:fs/promises";
import * as tt from "node:path";
import $ from "node:path";
import * as k from "node:process";
import ci from "node:process";
import * as sc from "node:url";
import { fileURLToPath as aa } from "node:url";
import * as oc from "node:module";
import { createRequire as ac } from "node:module";
import dt from "node:fs";
import lc from "node:child_process";
import Yt from "node:os";
import { promisify as uc } from "node:util";
import { AsyncResource as cc } from "node:async_hooks";
import { EventEmitter as dc } from "node:events";
import la from "bcrypt";
const di = sc.fileURLToPath(import.meta.url);
globalThis.__dirname = tt.dirname(di);
const wt = oc.createRequire(import.meta.url);
var fc = Object.create, fi = Object.defineProperty, hc = Object.getOwnPropertyDescriptor, pc = Object.getOwnPropertyNames, mc = Object.getPrototypeOf, gc = Object.prototype.hasOwnProperty, _t = ((e) => typeof wt < "u" ? wt : typeof Proxy < "u" ? new Proxy(e, { get: (t, n) => (typeof wt < "u" ? wt : t)[n] }) : e)(function(e) {
  if (typeof wt < "u") return wt.apply(this, arguments);
  throw Error('Dynamic require of "' + e + '" is not supported');
}), ua = (e, t) => () => (e && (t = e(e = 0)), t), ye = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), Nt = (e, t) => {
  for (var n in t) fi(e, n, { get: t[n], enumerable: !0 });
}, yc = (e, t, n, r) => {
  if (t && typeof t == "object" || typeof t == "function") for (let i of pc(t)) !gc.call(e, i) && i !== n && fi(e, i, { get: () => t[i], enumerable: !(r = hc(t, i)) || r.enumerable });
  return e;
}, we = (e, t, n) => (n = e != null ? fc(mc(e)) : {}, yc(t || !e || !e.__esModule ? fi(n, "default", { value: e, enumerable: !0 }) : n, e)), ca = ye((e, t) => {
  t.exports = (n, r = k.argv) => {
    let i = n.startsWith("-") ? "" : n.length === 1 ? "-" : "--", s = r.indexOf(i + n), o = r.indexOf("--");
    return s !== -1 && (o === -1 || s < o);
  };
}), wc = ye((e, t) => {
  var n = _t("node:os"), r = _t("node:tty"), i = ca(), { env: s } = k, o;
  i("no-color") || i("no-colors") || i("color=false") || i("color=never") ? o = 0 : (i("color") || i("colors") || i("color=true") || i("color=always")) && (o = 1), "FORCE_COLOR" in s && (s.FORCE_COLOR === "true" ? o = 1 : s.FORCE_COLOR === "false" ? o = 0 : o = s.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(s.FORCE_COLOR, 10), 3));
  function a(c) {
    return c === 0 ? !1 : { level: c, hasBasic: !0, has256: c >= 2, has16m: c >= 3 };
  }
  function l(c, d) {
    if (o === 0) return 0;
    if (i("color=16m") || i("color=full") || i("color=truecolor")) return 3;
    if (i("color=256")) return 2;
    if (c && !d && o === void 0) return 0;
    let f = o || 0;
    if (s.TERM === "dumb") return f;
    if (k.platform === "win32") {
      let h = n.release().split(".");
      return Number(h[0]) >= 10 && Number(h[2]) >= 10586 ? Number(h[2]) >= 14931 ? 3 : 2 : 1;
    }
    if ("CI" in s) return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((h) => h in s) || s.CI_NAME === "codeship" ? 1 : f;
    if ("TEAMCITY_VERSION" in s) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(s.TEAMCITY_VERSION) ? 1 : 0;
    if (s.COLORTERM === "truecolor") return 3;
    if ("TERM_PROGRAM" in s) {
      let h = parseInt((s.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
      switch (s.TERM_PROGRAM) {
        case "iTerm.app":
          return h >= 3 ? 3 : 2;
        case "Apple_Terminal":
          return 2;
      }
    }
    return /-256(color)?$/i.test(s.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(s.TERM) || "COLORTERM" in s ? 1 : f;
  }
  function u(c) {
    let d = l(c, c && c.isTTY);
    return a(d);
  }
  t.exports = { supportsColor: u, stdout: a(l(!0, r.isatty(1))), stderr: a(l(!0, r.isatty(2))) };
}), vc = ye((e, t) => {
  var n = wc(), r = ca();
  function i(o) {
    if (/^\d{3,4}$/.test(o)) {
      let l = /(\d{1,2})(\d{2})/.exec(o) || [];
      return { major: 0, minor: parseInt(l[1], 10), patch: parseInt(l[2], 10) };
    }
    let a = (o || "").split(".").map((l) => parseInt(l, 10));
    return { major: a[0], minor: a[1], patch: a[2] };
  }
  function s(o) {
    let { CI: a, FORCE_HYPERLINK: l, NETLIFY: u, TEAMCITY_VERSION: c, TERM_PROGRAM: d, TERM_PROGRAM_VERSION: f, VTE_VERSION: h, TERM: p } = k.env;
    if (l) return !(l.length > 0 && parseInt(l, 10) === 0);
    if (r("no-hyperlink") || r("no-hyperlinks") || r("hyperlink=false") || r("hyperlink=never")) return !1;
    if (r("hyperlink=true") || r("hyperlink=always") || u) return !0;
    if (!n.supportsColor(o) || o && !o.isTTY) return !1;
    if ("WT_SESSION" in k.env) return !0;
    if (k.platform === "win32" || a || c) return !1;
    if (d) {
      let m = i(f || "");
      switch (d) {
        case "iTerm.app":
          return m.major === 3 ? m.minor >= 1 : m.major > 3;
        case "WezTerm":
          return m.major >= 20200620;
        case "vscode":
          return m.major > 1 || m.major === 1 && m.minor >= 72;
        case "ghostty":
          return !0;
      }
    }
    if (h) {
      if (h === "0.50.0") return !1;
      let m = i(h);
      return m.major > 0 || m.minor >= 50;
    }
    switch (p) {
      case "alacritty":
        return !0;
    }
    return !1;
  }
  t.exports = { supportsHyperlink: s, stdout: s(k.stdout), stderr: s(k.stderr) };
}), bc = ye((e, t) => {
  t.exports = { name: "@prisma/internals", version: "6.19.3", description: "This package is intended for Prisma's internal use", main: "dist/index.js", types: "dist/index.d.ts", repository: { type: "git", url: "https://github.com/prisma/prisma.git", directory: "packages/internals" }, homepage: "https://www.prisma.io", author: "Tim Suchanek <suchanek@prisma.io>", bugs: "https://github.com/prisma/prisma/issues", license: "Apache-2.0", scripts: { dev: "DEV=true tsx helpers/build.ts", build: "tsx helpers/build.ts", test: "dotenv -e ../../.db.env -- jest --silent", prepublishOnly: "pnpm run build" }, files: ["README.md", "dist", "!**/libquery_engine*", "!dist/get-generators/engines/*", "scripts"], devDependencies: { "@babel/helper-validator-identifier": "7.25.9", "@opentelemetry/api": "1.9.0", "@swc/core": "1.11.5", "@swc/jest": "0.2.37", "@types/babel__helper-validator-identifier": "7.15.2", "@types/jest": "29.5.14", "@types/node": "18.19.76", "@types/resolve": "1.20.6", archiver: "6.0.2", "checkpoint-client": "1.1.33", "cli-truncate": "4.0.0", dotenv: "16.5.0", empathic: "2.0.0", "escape-string-regexp": "5.0.0", execa: "8.0.1", "fast-glob": "3.3.3", "find-up": "7.0.0", "fp-ts": "2.16.9", "fs-extra": "11.3.0", "global-directory": "4.0.0", globby: "11.1.0", "identifier-regex": "1.0.0", "indent-string": "4.0.0", "is-windows": "1.0.2", "is-wsl": "3.1.0", jest: "29.7.0", "jest-junit": "16.0.0", kleur: "4.1.5", "mock-stdin": "1.0.0", "new-github-issue-url": "0.2.1", "node-fetch": "3.3.2", "npm-packlist": "5.1.3", open: "7.4.2", "p-map": "4.0.0", resolve: "1.22.10", "string-width": "7.2.0", "strip-indent": "4.0.0", "temp-dir": "2.0.0", tempy: "1.0.1", "terminal-link": "4.0.0", tmp: "0.2.3", "ts-pattern": "5.6.2", "ts-toolbelt": "9.6.0", typescript: "5.4.5", yarn: "1.22.22" }, dependencies: { "@prisma/config": "workspace:*", "@prisma/debug": "workspace:*", "@prisma/dmmf": "workspace:*", "@prisma/driver-adapter-utils": "workspace:*", "@prisma/engines": "workspace:*", "@prisma/fetch-engine": "workspace:*", "@prisma/generator": "workspace:*", "@prisma/generator-helper": "workspace:*", "@prisma/get-platform": "workspace:*", "@prisma/prisma-schema-wasm": "7.1.1-3.c2990dca591cba766e3b7ef5d9e8a84796e47ab7", "@prisma/schema-engine-wasm": "7.1.1-3.c2990dca591cba766e3b7ef5d9e8a84796e47ab7", "@prisma/schema-files-loader": "workspace:*", arg: "5.0.2", prompts: "2.4.2" }, peerDependencies: { typescript: ">=5.1.0" }, peerDependenciesMeta: { typescript: { optional: !0 } }, sideEffects: !1 };
}), da = ye((e, t) => {
  t.exports = { name: "@prisma/engines-version", version: "7.1.1-3.c2990dca591cba766e3b7ef5d9e8a84796e47ab7", main: "index.js", types: "index.d.ts", license: "Apache-2.0", author: "Tim Suchanek <suchanek@prisma.io>", prisma: { enginesVersion: "c2990dca591cba766e3b7ef5d9e8a84796e47ab7" }, repository: { type: "git", url: "https://github.com/prisma/engines-wrapper.git", directory: "packages/engines-version" }, devDependencies: { "@types/node": "18.19.76", typescript: "4.9.5" }, files: ["index.js", "index.d.ts"], scripts: { build: "tsc -d" } };
}), hi = ye((e) => {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.enginesVersion = void 0, e.enginesVersion = da().prisma.enginesVersion;
}), _c = ye((e, t) => {
  t.exports = (n) => {
    let r = n.match(/^[ \t]*(?=\S)/gm);
    return r ? r.reduce((i, s) => Math.min(i, s.length), 1 / 0) : 0;
  };
}), fa = ye((e, t) => {
  t.exports = (n, r = 1, i) => {
    if (i = { indent: " ", includeEmptyLines: !1, ...i }, typeof n != "string") throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof n}\``);
    if (typeof r != "number") throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof r}\``);
    if (typeof i.indent != "string") throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof i.indent}\``);
    if (r === 0) return n;
    let s = i.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
    return n.replace(s, i.indent.repeat(r));
  };
}), Ec = ye((e, t) => {
  t.exports = { name: "dotenv", version: "16.5.0", description: "Loads environment variables from .env file", main: "lib/main.js", types: "lib/main.d.ts", exports: { ".": { types: "./lib/main.d.ts", require: "./lib/main.js", default: "./lib/main.js" }, "./config": "./config.js", "./config.js": "./config.js", "./lib/env-options": "./lib/env-options.js", "./lib/env-options.js": "./lib/env-options.js", "./lib/cli-options": "./lib/cli-options.js", "./lib/cli-options.js": "./lib/cli-options.js", "./package.json": "./package.json" }, scripts: { "dts-check": "tsc --project tests/types/tsconfig.json", lint: "standard", pretest: "npm run lint && npm run dts-check", test: "tap run --allow-empty-coverage --disable-coverage --timeout=60000", "test:coverage": "tap run --show-full-coverage --timeout=60000 --coverage-report=lcov", prerelease: "npm test", release: "standard-version" }, repository: { type: "git", url: "git://github.com/motdotla/dotenv.git" }, homepage: "https://github.com/motdotla/dotenv#readme", funding: "https://dotenvx.com", keywords: ["dotenv", "env", ".env", "environment", "variables", "config", "settings"], readmeFilename: "README.md", license: "BSD-2-Clause", devDependencies: { "@types/node": "^18.11.3", decache: "^4.6.2", sinon: "^14.0.1", standard: "^17.0.0", "standard-version": "^9.5.0", tap: "^19.2.0", typescript: "^4.8.4" }, engines: { node: ">=12" }, browser: { fs: !1 } };
}), Pc = ye((e, t) => {
  var n = _t("node:fs"), r = _t("node:path"), i = _t("node:os"), s = _t("node:crypto"), o = Ec(), a = o.version, l = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
  function u(v) {
    let E = {}, S = v.toString();
    S = S.replace(/\r\n?/mg, `
`);
    let F;
    for (; (F = l.exec(S)) != null; ) {
      let j = F[1], D = F[2] || "";
      D = D.trim();
      let M = D[0];
      D = D.replace(/^(['"`])([\s\S]*)\1$/mg, "$2"), M === '"' && (D = D.replace(/\\n/g, `
`), D = D.replace(/\\r/g, "\r")), E[j] = D;
    }
    return E;
  }
  function c(v) {
    let E = m(v), S = T.configDotenv({ path: E });
    if (!S.parsed) {
      let M = new Error(`MISSING_DATA: Cannot parse ${E} for an unknown reason`);
      throw M.code = "MISSING_DATA", M;
    }
    let F = h(v).split(","), j = F.length, D;
    for (let M = 0; M < j; M++) try {
      let B = F[M].trim(), U = p(S, B);
      D = T.decrypt(U.ciphertext, U.key);
      break;
    } catch (B) {
      if (M + 1 >= j) throw B;
    }
    return T.parse(D);
  }
  function d(v) {
    console.log(`[dotenv@${a}][WARN] ${v}`);
  }
  function f(v) {
    console.log(`[dotenv@${a}][DEBUG] ${v}`);
  }
  function h(v) {
    return v && v.DOTENV_KEY && v.DOTENV_KEY.length > 0 ? v.DOTENV_KEY : k.env.DOTENV_KEY && k.env.DOTENV_KEY.length > 0 ? k.env.DOTENV_KEY : "";
  }
  function p(v, E) {
    let S;
    try {
      S = new URL(E);
    } catch (B) {
      if (B.code === "ERR_INVALID_URL") {
        let U = new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");
        throw U.code = "INVALID_DOTENV_KEY", U;
      }
      throw B;
    }
    let F = S.password;
    if (!F) {
      let B = new Error("INVALID_DOTENV_KEY: Missing key part");
      throw B.code = "INVALID_DOTENV_KEY", B;
    }
    let j = S.searchParams.get("environment");
    if (!j) {
      let B = new Error("INVALID_DOTENV_KEY: Missing environment part");
      throw B.code = "INVALID_DOTENV_KEY", B;
    }
    let D = `DOTENV_VAULT_${j.toUpperCase()}`, M = v.parsed[D];
    if (!M) {
      let B = new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${D} in your .env.vault file.`);
      throw B.code = "NOT_FOUND_DOTENV_ENVIRONMENT", B;
    }
    return { ciphertext: M, key: F };
  }
  function m(v) {
    let E = null;
    if (v && v.path && v.path.length > 0) if (Array.isArray(v.path)) for (let S of v.path) n.existsSync(S) && (E = S.endsWith(".vault") ? S : `${S}.vault`);
    else E = v.path.endsWith(".vault") ? v.path : `${v.path}.vault`;
    else E = r.resolve(k.cwd(), ".env.vault");
    return n.existsSync(E) ? E : null;
  }
  function b(v) {
    return v[0] === "~" ? r.join(i.homedir(), v.slice(1)) : v;
  }
  function _(v) {
    v && v.debug && f("Loading env from encrypted .env.vault");
    let E = T._parseVault(v), S = k.env;
    return v && v.processEnv != null && (S = v.processEnv), T.populate(S, E, v), { parsed: E };
  }
  function P(v) {
    let E = r.resolve(k.cwd(), ".env"), S = "utf8", F = !!(v && v.debug);
    v && v.encoding ? S = v.encoding : F && f("No encoding is specified. UTF-8 is used by default");
    let j = [E];
    if (v && v.path) if (!Array.isArray(v.path)) j = [b(v.path)];
    else {
      j = [];
      for (let U of v.path) j.push(b(U));
    }
    let D, M = {};
    for (let U of j) try {
      let L = T.parse(n.readFileSync(U, { encoding: S }));
      T.populate(M, L, v);
    } catch (L) {
      F && f(`Failed to load ${U} ${L.message}`), D = L;
    }
    let B = k.env;
    return v && v.processEnv != null && (B = v.processEnv), T.populate(B, M, v), D ? { parsed: M, error: D } : { parsed: M };
  }
  function O(v) {
    if (h(v).length === 0) return T.configDotenv(v);
    let E = m(v);
    return E ? T._configVault(v) : (d(`You set DOTENV_KEY but you are missing a .env.vault file at ${E}. Did you forget to build it?`), T.configDotenv(v));
  }
  function N(v, E) {
    let S = Buffer.from(E.slice(-64), "hex"), F = Buffer.from(v, "base64"), j = F.subarray(0, 12), D = F.subarray(-16);
    F = F.subarray(12, -16);
    try {
      let M = s.createDecipheriv("aes-256-gcm", S, j);
      return M.setAuthTag(D), `${M.update(F)}${M.final()}`;
    } catch (M) {
      let B = M instanceof RangeError, U = M.message === "Invalid key length", L = M.message === "Unsupported state or unable to authenticate data";
      if (B || U) {
        let Dt = new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");
        throw Dt.code = "INVALID_DOTENV_KEY", Dt;
      } else if (L) {
        let Dt = new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");
        throw Dt.code = "DECRYPTION_FAILED", Dt;
      } else throw M;
    }
  }
  function X(v, E, S = {}) {
    let F = !!(S && S.debug), j = !!(S && S.override);
    if (typeof E != "object") {
      let D = new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");
      throw D.code = "OBJECT_REQUIRED", D;
    }
    for (let D of Object.keys(E)) Object.prototype.hasOwnProperty.call(v, D) ? (j === !0 && (v[D] = E[D]), F && f(j === !0 ? `"${D}" is already defined and WAS overwritten` : `"${D}" is already defined and was NOT overwritten`)) : v[D] = E[D];
  }
  var T = { configDotenv: P, _configVault: _, _parseVault: c, config: O, decrypt: N, parse: u, populate: X };
  t.exports.configDotenv = T.configDotenv, t.exports._configVault = T._configVault, t.exports._parseVault = T._parseVault, t.exports.config = T.config, t.exports.decrypt = T.decrypt, t.exports.parse = T.parse, t.exports.populate = T.populate, t.exports = T;
}), $c = ye((e, t) => {
  t.exports = (n = {}) => {
    let r;
    if (n.repoUrl) r = n.repoUrl;
    else if (n.user && n.repo) r = `https://github.com/${n.user}/${n.repo}`;
    else throw new Error("You need to specify either the `repoUrl` option or both the `user` and `repo` options");
    let i = new URL(`${r}/issues/new`), s = ["body", "title", "labels", "template", "milestone", "assignee", "projects"];
    for (let o of s) {
      let a = n[o];
      if (a !== void 0) {
        if (o === "labels" || o === "projects") {
          if (!Array.isArray(a)) throw new TypeError(`The \`${o}\` option should be an array`);
          a = a.join(",");
        }
        i.searchParams.set(o, a);
      }
    }
    return i.toString();
  }, t.exports.default = t.exports;
}), ha = ye((e, t) => {
  t.exports = /* @__PURE__ */ function() {
    function n(r, i, s, o, a) {
      return r < i || s < i ? r > s ? s + 1 : r + 1 : o === a ? i : i + 1;
    }
    return function(r, i) {
      if (r === i) return 0;
      if (r.length > i.length) {
        var s = r;
        r = i, i = s;
      }
      for (var o = r.length, a = i.length; o > 0 && r.charCodeAt(o - 1) === i.charCodeAt(a - 1); ) o--, a--;
      for (var l = 0; l < o && r.charCodeAt(l) === i.charCodeAt(l); ) l++;
      if (o -= l, a -= l, o === 0 || a < 3) return a;
      var u = 0, c, d, f, h, p, m, b, _, P, O, N, X, T = [];
      for (c = 0; c < o; c++) T.push(c + 1), T.push(r.charCodeAt(l + c));
      for (var v = T.length - 1; u < a - 3; ) for (P = i.charCodeAt(l + (d = u)), O = i.charCodeAt(l + (f = u + 1)), N = i.charCodeAt(l + (h = u + 2)), X = i.charCodeAt(l + (p = u + 3)), m = u += 4, c = 0; c < v; c += 2) b = T[c], _ = T[c + 1], d = n(b, d, f, P, _), f = n(d, f, h, O, _), h = n(f, h, p, N, _), m = n(h, p, m, X, _), T[c] = m, p = h, h = f, f = d, d = b;
      for (; u < a; ) for (P = i.charCodeAt(l + (d = u)), m = ++u, c = 0; c < v; c += 2) b = T[c], T[c] = m = n(b, d, m, P, T[c + 1]), d = b;
      return m;
    };
  }();
}), Ac = ua(() => {
}), Sc = ua(() => {
}), pi = {};
Nt(pi, { defineExtension: () => Oc, getExtensionContext: () => kc });
function Oc(e) {
  return typeof e == "function" ? e : (t) => t.$extends(e);
}
function kc(e) {
  return e;
}
var Ic = {};
Nt(Ic, { validator: () => Nc });
function Nc(...e) {
  return (t) => t;
}
var Ar = {};
Nt(Ar, { $: () => wa, bgBlack: () => Uc, bgBlue: () => Zc, bgCyan: () => Wc, bgGreen: () => qc, bgMagenta: () => Bc, bgRed: () => zc, bgWhite: () => Jc, bgYellow: () => Vc, black: () => jc, blue: () => Vt, bold: () => Ee, cyan: () => lt, dim: () => cn, gray: () => mi, green: () => Xt, grey: () => Mc, hidden: () => Dc, inverse: () => xc, italic: () => Rc, magenta: () => Lc, red: () => ft, reset: () => Tc, strikethrough: () => Cc, underline: () => me, white: () => Fc, yellow: () => dn });
var Sr, pa, ma, ga, ya = !0;
typeof k < "u" && ({ FORCE_COLOR: Sr, NODE_DISABLE_COLORS: pa, NO_COLOR: ma, TERM: ga } = k.env || {}, ya = k.stdout && k.stdout.isTTY);
var wa = { enabled: !pa && ma == null && ga !== "dumb" && (Sr != null && Sr !== "0" || ya) };
function W(e, t) {
  let n = new RegExp(`\\x1b\\[${t}m`, "g"), r = `\x1B[${e}m`, i = `\x1B[${t}m`;
  return function(s) {
    return !wa.enabled || s == null ? s : r + (~("" + s).indexOf(i) ? s.replace(n, i + r) : s) + i;
  };
}
var Tc = W(0, 0), Ee = W(1, 22), cn = W(2, 22), Rc = W(3, 23), me = W(4, 24), xc = W(7, 27), Dc = W(8, 28), Cc = W(9, 29), jc = W(30, 39), ft = W(31, 39), Xt = W(32, 39), dn = W(33, 39), Vt = W(34, 39), Lc = W(35, 39), lt = W(36, 39), Fc = W(37, 39), mi = W(90, 39), Mc = W(90, 39), Uc = W(40, 49), zc = W(41, 49), qc = W(42, 49), Vc = W(43, 49), Zc = W(44, 49), Bc = W(45, 49), Wc = W(46, 49), Jc = W(47, 49), Hc = 100, is = ["green", "yellow", "blue", "magenta", "cyan", "red"], Zt = [], ss = Date.now(), Kc = 0, Or = typeof k < "u" ? k.env : {};
globalThis.DEBUG ?? (globalThis.DEBUG = Or.DEBUG ?? "");
globalThis.DEBUG_COLORS ?? (globalThis.DEBUG_COLORS = Or.DEBUG_COLORS ? Or.DEBUG_COLORS === "true" : !0);
var Bt = { enable(e) {
  typeof e == "string" && (globalThis.DEBUG = e);
}, disable() {
  let e = globalThis.DEBUG;
  return globalThis.DEBUG = "", e;
}, enabled(e) {
  let t = globalThis.DEBUG.split(",").map((i) => i.replace(/[.+?^${}()|[\]\\]/g, "\\$&")), n = t.some((i) => i === "" || i[0] === "-" ? !1 : e.match(RegExp(i.split("*").join(".*") + "$"))), r = t.some((i) => i === "" || i[0] !== "-" ? !1 : e.match(RegExp(i.slice(1).split("*").join(".*") + "$")));
  return n && !r;
}, log: (...e) => {
  let [t, n, ...r] = e;
  (console.warn ?? console.log)(`${t} ${n}`, ...r);
}, formatters: {} };
function Gc(e) {
  let t = { color: is[Kc++ % is.length], enabled: Bt.enabled(e), namespace: e, log: Bt.log, extend: () => {
  } }, n = (...r) => {
    let { enabled: i, namespace: s, color: o, log: a } = t;
    if (r.length !== 0 && Zt.push([s, ...r]), Zt.length > Hc && Zt.shift(), Bt.enabled(s) || i) {
      let l = r.map((c) => typeof c == "string" ? c : Qc(c)), u = `+${Date.now() - ss}ms`;
      ss = Date.now(), globalThis.DEBUG_COLORS ? a(Ar[o](Ee(s)), ...l, Ar[o](u)) : a(s, ...l, u);
    }
  };
  return new Proxy(n, { get: (r, i) => t[i], set: (r, i, s) => t[i] = s });
}
var fe = new Proxy(Gc, { get: (e, t) => Bt[t], set: (e, t, n) => Bt[t] = n });
function Qc(e, t = 2) {
  let n = /* @__PURE__ */ new Set();
  return JSON.stringify(e, (r, i) => {
    if (typeof i == "object" && i !== null) {
      if (n.has(i)) return "[Circular *]";
      n.add(i);
    } else if (typeof i == "bigint") return i.toString();
    return i;
  }, t);
}
function Yc(e = 7500) {
  let t = Zt.map(([n, ...r]) => `${n} ${r.map((i) => typeof i == "string" ? i : JSON.stringify(i)).join(" ")}`).join(`
`);
  return t.length < e ? t : t.slice(-e);
}
function Xc() {
  Zt.length = 0;
}
var gi = fe;
function ed() {
  let e = k.env.PRISMA_QUERY_ENGINE_LIBRARY;
  if (!(e && dt.existsSync(e)) && k.arch === "ia32") throw new Error('The default query engine type (Node-API, "library") is currently not supported for 32bit Node. Please set `engineType = "binary"` in the "generator" block of your "schema.prisma" file (or use the environment variables "PRISMA_CLIENT_ENGINE_TYPE=binary" and/or "PRISMA_CLI_QUERY_ENGINE_TYPE=binary".)');
}
var td = ["darwin", "darwin-arm64", "debian-openssl-1.0.x", "debian-openssl-1.1.x", "debian-openssl-3.0.x", "rhel-openssl-1.0.x", "rhel-openssl-1.1.x", "rhel-openssl-3.0.x", "linux-arm64-openssl-1.1.x", "linux-arm64-openssl-1.0.x", "linux-arm64-openssl-3.0.x", "linux-arm-openssl-1.1.x", "linux-arm-openssl-1.0.x", "linux-arm-openssl-3.0.x", "linux-musl", "linux-musl-openssl-3.0.x", "linux-musl-arm64-openssl-1.1.x", "linux-musl-arm64-openssl-3.0.x", "linux-nixos", "linux-static-x64", "linux-static-arm64", "windows", "freebsd11", "freebsd12", "freebsd13", "freebsd14", "freebsd15", "openbsd", "netbsd", "arm"], os = "libquery_engine";
function nd(e, t) {
  return e.includes("windows") ? `query_engine-${e}.dll.node` : e.includes("darwin") ? `${os}-${e}.dylib.node` : `${os}-${e}.so.node`;
}
var Ue = Symbol.for("@ts-pattern/matcher"), rd = Symbol.for("@ts-pattern/isVariadic"), jn = "@ts-pattern/anonymous-select-key", kr = (e) => !!(e && typeof e == "object"), On = (e) => e && !!e[Ue], ke = (e, t, n) => {
  if (On(e)) {
    let r = e[Ue](), { matched: i, selections: s } = r.match(t);
    return i && s && Object.keys(s).forEach((o) => n(o, s[o])), i;
  }
  if (kr(e)) {
    if (!kr(t)) return !1;
    if (Array.isArray(e)) {
      if (!Array.isArray(t)) return !1;
      let r = [], i = [], s = [];
      for (let o of e.keys()) {
        let a = e[o];
        On(a) && a[rd] ? s.push(a) : s.length ? i.push(a) : r.push(a);
      }
      if (s.length) {
        if (s.length > 1) throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
        if (t.length < r.length + i.length) return !1;
        let o = t.slice(0, r.length), a = i.length === 0 ? [] : t.slice(-i.length), l = t.slice(r.length, i.length === 0 ? 1 / 0 : -i.length);
        return r.every((u, c) => ke(u, o[c], n)) && i.every((u, c) => ke(u, a[c], n)) && (s.length === 0 || ke(s[0], l, n));
      }
      return e.length === t.length && e.every((o, a) => ke(o, t[a], n));
    }
    return Reflect.ownKeys(e).every((r) => {
      let i = e[r];
      return (r in t || On(s = i) && s[Ue]().matcherType === "optional") && ke(i, t[r], n);
      var s;
    });
  }
  return Object.is(t, e);
}, Ye = (e) => {
  var t, n, r;
  return kr(e) ? On(e) ? (t = (n = (r = e[Ue]()).getSelectionKeys) == null ? void 0 : n.call(r)) != null ? t : [] : Array.isArray(e) ? en(e, Ye) : en(Object.values(e), Ye) : [];
}, en = (e, t) => e.reduce((n, r) => n.concat(t(r)), []);
function ve(e) {
  return Object.assign(e, { optional: () => id(e), and: (t) => H(e, t), or: (t) => sd(e, t), select: (t) => t === void 0 ? as(e) : as(t, e) });
}
function id(e) {
  return ve({ [Ue]: () => ({ match: (t) => {
    let n = {}, r = (i, s) => {
      n[i] = s;
    };
    return t === void 0 ? (Ye(e).forEach((i) => r(i, void 0)), { matched: !0, selections: n }) : { matched: ke(e, t, r), selections: n };
  }, getSelectionKeys: () => Ye(e), matcherType: "optional" }) });
}
function H(...e) {
  return ve({ [Ue]: () => ({ match: (t) => {
    let n = {}, r = (i, s) => {
      n[i] = s;
    };
    return { matched: e.every((i) => ke(i, t, r)), selections: n };
  }, getSelectionKeys: () => en(e, Ye), matcherType: "and" }) });
}
function sd(...e) {
  return ve({ [Ue]: () => ({ match: (t) => {
    let n = {}, r = (i, s) => {
      n[i] = s;
    };
    return en(e, Ye).forEach((i) => r(i, void 0)), { matched: e.some((i) => ke(i, t, r)), selections: n };
  }, getSelectionKeys: () => en(e, Ye), matcherType: "or" }) });
}
function z(e) {
  return { [Ue]: () => ({ match: (t) => ({ matched: !!e(t) }) }) };
}
function as(...e) {
  let t = typeof e[0] == "string" ? e[0] : void 0, n = e.length === 2 ? e[1] : typeof e[0] == "string" ? void 0 : e[0];
  return ve({ [Ue]: () => ({ match: (r) => {
    let i = { [t ?? jn]: r };
    return { matched: n === void 0 || ke(n, r, (s, o) => {
      i[s] = o;
    }), selections: i };
  }, getSelectionKeys: () => [t ?? jn].concat(n === void 0 ? [] : Ye(n)) }) });
}
function Ae(e) {
  return typeof e == "number";
}
function Ve(e) {
  return typeof e == "string";
}
function Ze(e) {
  return typeof e == "bigint";
}
ve(z(function(e) {
  return !0;
}));
var Be = (e) => Object.assign(ve(e), { startsWith: (t) => {
  return Be(H(e, (n = t, z((r) => Ve(r) && r.startsWith(n)))));
  var n;
}, endsWith: (t) => {
  return Be(H(e, (n = t, z((r) => Ve(r) && r.endsWith(n)))));
  var n;
}, minLength: (t) => Be(H(e, ((n) => z((r) => Ve(r) && r.length >= n))(t))), length: (t) => Be(H(e, ((n) => z((r) => Ve(r) && r.length === n))(t))), maxLength: (t) => Be(H(e, ((n) => z((r) => Ve(r) && r.length <= n))(t))), includes: (t) => {
  return Be(H(e, (n = t, z((r) => Ve(r) && r.includes(n)))));
  var n;
}, regex: (t) => {
  return Be(H(e, (n = t, z((r) => Ve(r) && !!r.match(n)))));
  var n;
} });
Be(z(Ve));
var Se = (e) => Object.assign(ve(e), { between: (t, n) => Se(H(e, ((r, i) => z((s) => Ae(s) && r <= s && i >= s))(t, n))), lt: (t) => Se(H(e, ((n) => z((r) => Ae(r) && r < n))(t))), gt: (t) => Se(H(e, ((n) => z((r) => Ae(r) && r > n))(t))), lte: (t) => Se(H(e, ((n) => z((r) => Ae(r) && r <= n))(t))), gte: (t) => Se(H(e, ((n) => z((r) => Ae(r) && r >= n))(t))), int: () => Se(H(e, z((t) => Ae(t) && Number.isInteger(t)))), finite: () => Se(H(e, z((t) => Ae(t) && Number.isFinite(t)))), positive: () => Se(H(e, z((t) => Ae(t) && t > 0))), negative: () => Se(H(e, z((t) => Ae(t) && t < 0))) });
Se(z(Ae));
var We = (e) => Object.assign(ve(e), { between: (t, n) => We(H(e, ((r, i) => z((s) => Ze(s) && r <= s && i >= s))(t, n))), lt: (t) => We(H(e, ((n) => z((r) => Ze(r) && r < n))(t))), gt: (t) => We(H(e, ((n) => z((r) => Ze(r) && r > n))(t))), lte: (t) => We(H(e, ((n) => z((r) => Ze(r) && r <= n))(t))), gte: (t) => We(H(e, ((n) => z((r) => Ze(r) && r >= n))(t))), positive: () => We(H(e, z((t) => Ze(t) && t > 0))), negative: () => We(H(e, z((t) => Ze(t) && t < 0))) });
We(z(Ze));
ve(z(function(e) {
  return typeof e == "boolean";
}));
ve(z(function(e) {
  return typeof e == "symbol";
}));
ve(z(function(e) {
  return e == null;
}));
ve(z(function(e) {
  return e != null;
}));
var od = class extends Error {
  constructor(e) {
    let t;
    try {
      t = JSON.stringify(e);
    } catch {
      t = e;
    }
    super(`Pattern matching error: no pattern matches value ${t}`), this.input = void 0, this.input = e;
  }
}, Ir = { matched: !1, value: void 0 };
function Gn(e) {
  return new ad(e, Ir);
}
var ad = class Nr {
  constructor(t, n) {
    this.input = void 0, this.state = void 0, this.input = t, this.state = n;
  }
  with(...t) {
    if (this.state.matched) return this;
    let n = t[t.length - 1], r = [t[0]], i;
    t.length === 3 && typeof t[1] == "function" ? i = t[1] : t.length > 2 && r.push(...t.slice(1, t.length - 1));
    let s = !1, o = {}, a = (u, c) => {
      s = !0, o[u] = c;
    }, l = !r.some((u) => ke(u, this.input, a)) || i && !i(this.input) ? Ir : { matched: !0, value: n(s ? jn in o ? o[jn] : o : this.input, this.input) };
    return new Nr(this.input, l);
  }
  when(t, n) {
    if (this.state.matched) return this;
    let r = !!t(this.input);
    return new Nr(this.input, r ? { matched: !0, value: n(this.input, this.input) } : Ir);
  }
  otherwise(t) {
    return this.state.matched ? this.state.value : t(this.input);
  }
  exhaustive() {
    if (this.state.matched) return this.state.value;
    throw new od(this.input);
  }
  run() {
    return this.exhaustive();
  }
  returnType() {
    return this;
  }
}, ld = { warn: dn("prisma:warn") }, ud = { warn: () => !k.env.PRISMA_DISABLE_WARNINGS };
function fr(e, ...t) {
  ud.warn() && console.warn(`${ld.warn} ${e}`, ...t);
}
var cd = uc(lc.exec), ce = gi("prisma:get-platform"), dd = ["1.0.x", "1.1.x", "3.0.x"];
async function fd() {
  let e = Yt.platform(), t = k.arch;
  if (e === "freebsd") {
    let o = await Ln("freebsd-version");
    if (o && o.trim().length > 0) {
      let a = /^(\d+)\.?/.exec(o);
      if (a) return { platform: "freebsd", targetDistro: `freebsd${a[1]}`, arch: t };
    }
  }
  if (e !== "linux") return { platform: e, arch: t };
  let n = await pd(), r = await Pd(), i = gd({ arch: t, archFromUname: r, familyDistro: n.familyDistro }), { libssl: s } = await yd(i);
  return { platform: "linux", libssl: s, arch: t, archFromUname: r, ...n };
}
function hd(e) {
  let t = /^ID="?([^"\n]*)"?$/im, n = /^ID_LIKE="?([^"\n]*)"?$/im, r = t.exec(e), i = r && r[1] && r[1].toLowerCase() || "", s = n.exec(e), o = s && s[1] && s[1].toLowerCase() || "", a = Gn({ id: i, idLike: o }).with({ id: "alpine" }, ({ id: l }) => ({ targetDistro: "musl", familyDistro: l, originalDistro: l })).with({ id: "raspbian" }, ({ id: l }) => ({ targetDistro: "arm", familyDistro: "debian", originalDistro: l })).with({ id: "nixos" }, ({ id: l }) => ({ targetDistro: "nixos", originalDistro: l, familyDistro: "nixos" })).with({ id: "debian" }, { id: "ubuntu" }, ({ id: l }) => ({ targetDistro: "debian", familyDistro: "debian", originalDistro: l })).with({ id: "rhel" }, { id: "centos" }, { id: "fedora" }, ({ id: l }) => ({ targetDistro: "rhel", familyDistro: "rhel", originalDistro: l })).when(({ idLike: l }) => l.includes("debian") || l.includes("ubuntu"), ({ id: l }) => ({ targetDistro: "debian", familyDistro: "debian", originalDistro: l })).when(({ idLike: l }) => i === "arch" || l.includes("arch"), ({ id: l }) => ({ targetDistro: "debian", familyDistro: "arch", originalDistro: l })).when(({ idLike: l }) => l.includes("centos") || l.includes("fedora") || l.includes("rhel") || l.includes("suse"), ({ id: l }) => ({ targetDistro: "rhel", familyDistro: "rhel", originalDistro: l })).otherwise(({ id: l }) => ({ targetDistro: void 0, familyDistro: void 0, originalDistro: l }));
  return ce(`Found distro info:
${JSON.stringify(a, null, 2)}`), a;
}
async function pd() {
  let e = "/etc/os-release";
  try {
    let t = await oa.readFile(e, { encoding: "utf-8" });
    return hd(t);
  } catch {
    return { targetDistro: void 0, familyDistro: void 0, originalDistro: void 0 };
  }
}
function md(e) {
  let t = /^OpenSSL\s(\d+\.\d+)\.\d+/.exec(e);
  if (t) {
    let n = `${t[1]}.x`;
    return va(n);
  }
}
function ls(e) {
  let t = /libssl\.so\.(\d)(\.\d)?/.exec(e);
  if (t) {
    let n = `${t[1]}${t[2] ?? ".0"}.x`;
    return va(n);
  }
}
function va(e) {
  let t = (() => {
    if (_a(e)) return e;
    let n = e.split(".");
    return n[1] = "0", n.join(".");
  })();
  if (dd.includes(t)) return t;
}
function gd(e) {
  return Gn(e).with({ familyDistro: "musl" }, () => (ce('Trying platform-specific paths for "alpine"'), ["/lib", "/usr/lib"])).with({ familyDistro: "debian" }, ({ archFromUname: t }) => (ce('Trying platform-specific paths for "debian" (and "ubuntu")'), [`/usr/lib/${t}-linux-gnu`, `/lib/${t}-linux-gnu`])).with({ familyDistro: "rhel" }, () => (ce('Trying platform-specific paths for "rhel"'), ["/lib64", "/usr/lib64"])).otherwise(({ familyDistro: t, arch: n, archFromUname: r }) => (ce(`Don't know any platform-specific paths for "${t}" on ${n} (${r})`), []));
}
async function yd(e) {
  let t = 'grep -v "libssl.so.0"', n = await us(e);
  if (n) {
    ce(`Found libssl.so file using platform-specific paths: ${n}`);
    let s = ls(n);
    if (ce(`The parsed libssl version is: ${s}`), s) return { libssl: s, strategy: "libssl-specific-path" };
  }
  ce('Falling back to "ldconfig" and other generic paths');
  let r = await Ln(`ldconfig -p | sed "s/.*=>s*//" | sed "s|.*/||" | grep libssl | sort | ${t}`);
  if (r || (r = await us(["/lib64", "/usr/lib64", "/lib", "/usr/lib"])), r) {
    ce(`Found libssl.so file using "ldconfig" or other generic paths: ${r}`);
    let s = ls(r);
    if (ce(`The parsed libssl version is: ${s}`), s) return { libssl: s, strategy: "ldconfig" };
  }
  let i = await Ln("openssl version -v");
  if (i) {
    ce(`Found openssl binary with version: ${i}`);
    let s = md(i);
    if (ce(`The parsed openssl version is: ${s}`), s) return { libssl: s, strategy: "openssl-binary" };
  }
  return ce("Couldn't find any version of libssl or OpenSSL in the system"), {};
}
async function us(e) {
  for (let t of e) {
    let n = await wd(t);
    if (n) return n;
  }
}
async function wd(e) {
  try {
    return (await oa.readdir(e)).find((t) => t.startsWith("libssl.so.") && !t.startsWith("libssl.so.0"));
  } catch (t) {
    if (t.code === "ENOENT") return;
    throw t;
  }
}
async function yi() {
  let { binaryTarget: e } = await ba();
  return e;
}
function vd(e) {
  return e.binaryTarget !== void 0;
}
async function bd() {
  let { memoized: e, ...t } = await ba();
  return t;
}
var wn = {};
async function ba() {
  if (vd(wn)) return Promise.resolve({ ...wn, memoized: !0 });
  let e = await fd(), t = _d(e);
  return wn = { ...e, binaryTarget: t }, { ...wn, memoized: !1 };
}
function _d(e) {
  let { platform: t, arch: n, archFromUname: r, libssl: i, targetDistro: s, familyDistro: o, originalDistro: a } = e;
  t === "linux" && !["x64", "arm64"].includes(n) && fr(`Prisma only officially supports Linux on amd64 (x86_64) and arm64 (aarch64) system architectures (detected "${n}" instead). If you are using your own custom Prisma engines, you can ignore this warning, as long as you've compiled the engines for your system architecture "${r}".`);
  let l = "1.1.x";
  if (t === "linux" && i === void 0) {
    let c = Gn({ familyDistro: o }).with({ familyDistro: "debian" }, () => "Please manually install OpenSSL via `apt-get update -y && apt-get install -y openssl` and try installing Prisma again. If you're running Prisma on Docker, add this command to your Dockerfile, or switch to an image that already has OpenSSL installed.").otherwise(() => "Please manually install OpenSSL and try installing Prisma again.");
    fr(`Prisma failed to detect the libssl/openssl version to use, and may not work as expected. Defaulting to "openssl-${l}".
${c}`);
  }
  let u = "debian";
  if (t === "linux" && s === void 0 && ce(`Distro is "${a}". Falling back to Prisma engines built for "${u}".`), t === "darwin" && n === "arm64") return "darwin-arm64";
  if (t === "darwin") return "darwin";
  if (t === "win32") return "windows";
  if (t === "freebsd") return s;
  if (t === "openbsd") return "openbsd";
  if (t === "netbsd") return "netbsd";
  if (t === "linux" && s === "nixos") return "linux-nixos";
  if (t === "linux" && n === "arm64") return `${s === "musl" ? "linux-musl-arm64" : "linux-arm64"}-openssl-${i || l}`;
  if (t === "linux" && n === "arm") return `linux-arm-openssl-${i || l}`;
  if (t === "linux" && s === "musl") {
    let c = "linux-musl";
    return !i || _a(i) ? c : `${c}-openssl-${i}`;
  }
  return t === "linux" && s && i ? `${s}-openssl-${i}` : (t !== "linux" && fr(`Prisma detected unknown OS "${t}" and may not work as expected. Defaulting to "linux".`), i ? `${u}-openssl-${i}` : s ? `${s}-openssl-${l}` : `${u}-openssl-${l}`);
}
async function Ed(e) {
  try {
    return await e();
  } catch {
    return;
  }
}
function Ln(e) {
  return Ed(async () => {
    let t = await cd(e);
    return ce(`Command "${e}" successfully returned "${t.stdout}"`), t.stdout;
  });
}
async function Pd() {
  var e;
  return typeof Yt.machine == "function" ? Yt.machine() : (e = await Ln("uname -m")) == null ? void 0 : e.trim();
}
function _a(e) {
  return e.startsWith("1.");
}
var Ea = {};
Nt(Ea, { beep: () => Kd, clearScreen: () => Bd, clearTerminal: () => Wd, cursorBackward: () => Nd, cursorDown: () => kd, cursorForward: () => Id, cursorGetPosition: () => xd, cursorHide: () => jd, cursorLeft: () => Aa, cursorMove: () => Od, cursorNextLine: () => Dd, cursorPrevLine: () => Cd, cursorRestorePosition: () => Rd, cursorSavePosition: () => Td, cursorShow: () => Ld, cursorTo: () => Sd, cursorUp: () => $a, enterAlternativeScreen: () => Jd, eraseDown: () => zd, eraseEndLine: () => Md, eraseLine: () => Sa, eraseLines: () => Fd, eraseScreen: () => Tr, eraseStartLine: () => Ud, eraseUp: () => qd, exitAlternativeScreen: () => Hd, iTerm: () => Yd, image: () => Qd, link: () => Gd, scrollDown: () => Zd, scrollUp: () => Vd });
var Oo, wi = ((Oo = globalThis.window) == null ? void 0 : Oo.document) !== void 0, ko, Io;
(Io = (ko = globalThis.process) == null ? void 0 : ko.versions) == null || Io.node;
var No, To;
(To = (No = globalThis.process) == null ? void 0 : No.versions) == null || To.bun;
var Ro, xo;
(xo = (Ro = globalThis.Deno) == null ? void 0 : Ro.version) == null || xo.deno;
var Do, Co;
(Co = (Do = globalThis.process) == null ? void 0 : Do.versions) == null || Co.electron;
var jo, Lo;
(Lo = (jo = globalThis.navigator) == null ? void 0 : jo.userAgent) == null || Lo.includes("jsdom");
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
typeof DedicatedWorkerGlobalScope < "u" && globalThis instanceof DedicatedWorkerGlobalScope;
typeof SharedWorkerGlobalScope < "u" && globalThis instanceof SharedWorkerGlobalScope;
typeof ServiceWorkerGlobalScope < "u" && globalThis instanceof ServiceWorkerGlobalScope;
var Fo, Mo, Qn = (Mo = (Fo = globalThis.navigator) == null ? void 0 : Fo.userAgentData) == null ? void 0 : Mo.platform, Uo, zo, qo, Vo;
Qn === "macOS" || ((Uo = globalThis.navigator) == null ? void 0 : Uo.platform) === "MacIntel" || ((qo = (zo = globalThis.navigator) == null ? void 0 : zo.userAgent) == null ? void 0 : qo.includes(" Mac ")) === !0 || ((Vo = globalThis.process) == null || Vo.platform);
var Zo, Bo;
Qn === "Windows" || ((Zo = globalThis.navigator) == null ? void 0 : Zo.platform) === "Win32" || ((Bo = globalThis.process) == null || Bo.platform);
var Wo, Jo, Ho, Ko, Go;
Qn === "Linux" || ((Jo = (Wo = globalThis.navigator) == null ? void 0 : Wo.platform) == null ? void 0 : Jo.startsWith("Linux")) === !0 || ((Ko = (Ho = globalThis.navigator) == null ? void 0 : Ho.userAgent) == null ? void 0 : Ko.includes(" Linux ")) === !0 || ((Go = globalThis.process) == null || Go.platform);
var Qo, Yo, Xo, ea;
Qn === "Android" || ((Qo = globalThis.navigator) == null ? void 0 : Qo.platform) === "Android" || ((Xo = (Yo = globalThis.navigator) == null ? void 0 : Yo.userAgent) == null ? void 0 : Xo.includes(" Android ")) === !0 || ((ea = globalThis.process) == null || ea.platform);
var q = "\x1B[", tn = "\x1B]", Pt = "\x07", Mt = ";", Pa = !wi && ci.env.TERM_PROGRAM === "Apple_Terminal", $d = !wi && ci.platform === "win32", Ad = wi ? () => {
  throw new Error("`process.cwd()` only works in Node.js, not the browser.");
} : ci.cwd, Sd = (e, t) => {
  if (typeof e != "number") throw new TypeError("The `x` argument is required");
  return typeof t != "number" ? q + (e + 1) + "G" : q + (t + 1) + Mt + (e + 1) + "H";
}, Od = (e, t) => {
  if (typeof e != "number") throw new TypeError("The `x` argument is required");
  let n = "";
  return e < 0 ? n += q + -e + "D" : e > 0 && (n += q + e + "C"), t < 0 ? n += q + -t + "A" : t > 0 && (n += q + t + "B"), n;
}, $a = (e = 1) => q + e + "A", kd = (e = 1) => q + e + "B", Id = (e = 1) => q + e + "C", Nd = (e = 1) => q + e + "D", Aa = q + "G", Td = Pa ? "\x1B7" : q + "s", Rd = Pa ? "\x1B8" : q + "u", xd = q + "6n", Dd = q + "E", Cd = q + "F", jd = q + "?25l", Ld = q + "?25h", Fd = (e) => {
  let t = "";
  for (let n = 0; n < e; n++) t += Sa + (n < e - 1 ? $a() : "");
  return e && (t += Aa), t;
}, Md = q + "K", Ud = q + "1K", Sa = q + "2K", zd = q + "J", qd = q + "1J", Tr = q + "2J", Vd = q + "S", Zd = q + "T", Bd = "\x1Bc", Wd = $d ? `${Tr}${q}0f` : `${Tr}${q}3J${q}H`, Jd = q + "?1049h", Hd = q + "?1049l", Kd = Pt, Gd = (e, t) => [tn, "8", Mt, Mt, t, Pt, e, tn, "8", Mt, Mt, Pt].join(""), Qd = (e, t = {}) => {
  let n = `${tn}1337;File=inline=1`;
  return t.width && (n += `;width=${t.width}`), t.height && (n += `;height=${t.height}`), t.preserveAspectRatio === !1 && (n += ";preserveAspectRatio=0"), n + ":" + Buffer.from(e).toString("base64") + Pt;
}, Yd = { setCwd: (e = Ad()) => `${tn}50;CurrentDir=${e}${Pt}`, annotation(e, t = {}) {
  let n = `${tn}1337;`, r = t.x !== void 0, i = t.y !== void 0;
  if ((r || i) && !(r && i && t.length !== void 0)) throw new Error("`x`, `y` and `length` must be defined when `x` or `y` is defined");
  return e = e.replaceAll("|", ""), n += t.isHidden ? "AddHiddenAnnotation=" : "AddAnnotation=", t.length > 0 ? n += (r ? [e, t.length, t.x, t.y] : [t.length, e]).join("|") : n += e, n + Pt;
} }, vi = we(vc(), 1);
function nn(e, t, { target: n = "stdout", ...r } = {}) {
  return vi.default[n] ? Ea.link(e, t) : r.fallback === !1 ? e : typeof r.fallback == "function" ? r.fallback(e, t) : `${e} (​${t}​)`;
}
nn.isSupported = vi.default.stdout;
nn.stderr = (e, t, n = {}) => nn(e, t, { target: "stderr", ...n });
nn.stderr.isSupported = vi.default.stderr;
function Xd(e) {
  return nn(e, e, { fallback: me });
}
var ef = bc(), tf = ef.version;
function Rr(e) {
  return nf() || ((e == null ? void 0 : e.config.engineType) === "library" ? "library" : (e == null ? void 0 : e.config.engineType) === "binary" ? "binary" : (e == null ? void 0 : e.config.engineType) === "client" ? "client" : rf());
}
function nf() {
  let e = k.env.PRISMA_CLIENT_ENGINE_TYPE;
  return e === "library" ? "library" : e === "binary" ? "binary" : e === "client" ? "client" : void 0;
}
function rf() {
  return "library";
}
function Oa(e) {
  return e.name === "DriverAdapterError" && typeof e.cause == "object";
}
function bi(e) {
  return { ok: !0, value: e, map(t) {
    return bi(t(e));
  }, flatMap(t) {
    return t(e);
  } };
}
function $t(e) {
  return { ok: !1, error: e, map() {
    return $t(e);
  }, flatMap() {
    return $t(e);
  } };
}
var ka = fe("driver-adapter-utils"), sf = class {
  constructor() {
    g(this, "registeredErrors", []);
  }
  consumeError(e) {
    return this.registeredErrors[e];
  }
  registerNewError(e) {
    let t = 0;
    for (; this.registeredErrors[t] !== void 0; ) t++;
    return this.registeredErrors[t] = { error: e }, t;
  }
}, cs = (e, t = new sf()) => {
  let n = { adapterName: e.adapterName, errorRegistry: t, queryRaw: Le(t, e.queryRaw.bind(e)), executeRaw: Le(t, e.executeRaw.bind(e)), executeScript: Le(t, e.executeScript.bind(e)), dispose: Le(t, e.dispose.bind(e)), provider: e.provider, startTransaction: async (...r) => (await Le(t, e.startTransaction.bind(e))(...r)).map((i) => of(t, i)) };
  return e.getConnectionInfo && (n.getConnectionInfo = af(t, e.getConnectionInfo.bind(e))), n;
}, of = (e, t) => ({ adapterName: t.adapterName, provider: t.provider, options: t.options, queryRaw: Le(e, t.queryRaw.bind(t)), executeRaw: Le(e, t.executeRaw.bind(t)), commit: Le(e, t.commit.bind(t)), rollback: Le(e, t.rollback.bind(t)) });
function Le(e, t) {
  return async (...n) => {
    try {
      return bi(await t(...n));
    } catch (r) {
      if (ka("[error@wrapAsync]", r), Oa(r)) return $t(r.cause);
      let i = e.registerNewError(r);
      return $t({ kind: "GenericJs", id: i });
    }
  };
}
function af(e, t) {
  return (...n) => {
    try {
      return bi(t(...n));
    } catch (r) {
      if (ka("[error@wrapSync]", r), Oa(r)) return $t(r.cause);
      let i = e.registerNewError(r);
      return $t({ kind: "GenericJs", id: i });
    }
  };
}
we(hi());
we(hi());
fe("prisma:engines");
function lf() {
  return $.join(__dirname, "../");
}
$.join(__dirname, "../query-engine-darwin");
$.join(__dirname, "../query-engine-darwin-arm64");
$.join(__dirname, "../query-engine-debian-openssl-1.0.x");
$.join(__dirname, "../query-engine-debian-openssl-1.1.x");
$.join(__dirname, "../query-engine-debian-openssl-3.0.x");
$.join(__dirname, "../query-engine-linux-static-x64");
$.join(__dirname, "../query-engine-linux-static-arm64");
$.join(__dirname, "../query-engine-rhel-openssl-1.0.x");
$.join(__dirname, "../query-engine-rhel-openssl-1.1.x");
$.join(__dirname, "../query-engine-rhel-openssl-3.0.x");
$.join(__dirname, "../libquery_engine-darwin.dylib.node");
$.join(__dirname, "../libquery_engine-darwin-arm64.dylib.node");
$.join(__dirname, "../libquery_engine-debian-openssl-1.0.x.so.node");
$.join(__dirname, "../libquery_engine-debian-openssl-1.1.x.so.node");
$.join(__dirname, "../libquery_engine-debian-openssl-3.0.x.so.node");
$.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.0.x.so.node");
$.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.1.x.so.node");
$.join(__dirname, "../libquery_engine-linux-arm64-openssl-3.0.x.so.node");
$.join(__dirname, "../libquery_engine-linux-musl.so.node");
$.join(__dirname, "../libquery_engine-linux-musl-openssl-3.0.x.so.node");
$.join(__dirname, "../libquery_engine-rhel-openssl-1.0.x.so.node");
$.join(__dirname, "../libquery_engine-rhel-openssl-1.1.x.so.node");
$.join(__dirname, "../libquery_engine-rhel-openssl-3.0.x.so.node");
$.join(__dirname, "../query_engine-windows.dll.node");
gi("chmodPlusX");
function uf(e) {
  let t = e.e, n = (a) => `Prisma cannot find the required \`${a}\` system library in your system`, r = t.message.includes("cannot open shared object file"), i = `Please refer to the documentation about Prisma's system requirements: ${Xd("https://pris.ly/d/system-requirements")}`, s = `Unable to require(\`${cn(e.id)}\`).`, o = Gn({ message: t.message, code: t.code }).with({ code: "ENOENT" }, () => "File does not exist.").when(({ message: a }) => r && a.includes("libz"), () => `${n("libz")}. Please install it and try again.`).when(({ message: a }) => r && a.includes("libgcc_s"), () => `${n("libgcc_s")}. Please install it and try again.`).when(({ message: a }) => r && a.includes("libssl"), () => {
    let a = e.platformInfo.libssl ? `openssl-${e.platformInfo.libssl}` : "openssl";
    return `${n("libssl")}. Please install ${a} and try again.`;
  }).when(({ message: a }) => a.includes("GLIBC"), () => `Prisma has detected an incompatible version of the \`glibc\` C standard library installed in your system. This probably means your system may be too old to run Prisma. ${i}`).when(({ message: a }) => e.platformInfo.platform === "linux" && a.includes("symbol not found"), () => `The Prisma engines are not compatible with your system ${e.platformInfo.originalDistro} on (${e.platformInfo.archFromUname}) which uses the \`${e.platformInfo.binaryTarget}\` binaryTarget by default. ${i}`).otherwise(() => `The Prisma engines do not seem to be compatible with your system. ${i}`);
  return `${s}
${o}

Details: ${t.message}`;
}
var cf = we(_c(), 1);
function df(e) {
  let t = (0, cf.default)(e);
  if (t === 0) return e;
  let n = new RegExp(`^[ \\t]{${t}}`, "gm");
  return e.replace(n, "");
}
var ff = "prisma+postgres", Ia = `${ff}:`;
function Na(e) {
  return (e == null ? void 0 : e.toString().startsWith(`${Ia}//`)) ?? !1;
}
function hf(e) {
  if (!Na(e)) return !1;
  let { host: t } = new URL(e);
  return t.includes("localhost") || t.includes("127.0.0.1") || t.includes("[::1]");
}
var pf = we(fa());
function mf(e) {
  return String(new gf(e));
}
var gf = class {
  constructor(e) {
    this.config = e;
  }
  toString() {
    let { config: e } = this, t = e.provider.fromEnvVar ? `env("${e.provider.fromEnvVar}")` : e.provider.value, n = JSON.parse(JSON.stringify({ provider: t, binaryTargets: yf(e.binaryTargets) }));
    return `generator ${e.name} {
${(0, pf.default)(wf(n), 2)}
}`;
  }
};
function yf(e) {
  let t;
  if (e.length > 0) {
    let n = e.find((r) => r.fromEnvVar !== null);
    n ? t = `env("${n.fromEnvVar}")` : t = e.map((r) => r.native ? "native" : r.value);
  } else t = void 0;
  return t;
}
function wf(e) {
  let t = Object.keys(e).reduce((n, r) => Math.max(n, r.length), 0);
  return Object.entries(e).map(([n, r]) => `${n.padEnd(t)} = ${vf(r)}`).join(`
`);
}
function vf(e) {
  return JSON.parse(JSON.stringify(e, (t, n) => Array.isArray(n) ? `[${n.map((r) => JSON.stringify(r)).join(", ")}]` : JSON.stringify(n)));
}
var xr = {};
Nt(xr, { error: () => Ef, info: () => _f, log: () => bf, query: () => Pf, should: () => Ta, tags: () => fn, warn: () => Ra });
var fn = { error: ft("prisma:error"), warn: dn("prisma:warn"), info: lt("prisma:info"), query: Vt("prisma:query") }, Ta = { warn: () => !k.env.PRISMA_DISABLE_WARNINGS };
function bf(...e) {
  console.log(...e);
}
function Ra(e, ...t) {
  Ta.warn() && console.warn(`${fn.warn} ${e}`, ...t);
}
function _f(e, ...t) {
  console.info(`${fn.info} ${e}`, ...t);
}
function Ef(e, ...t) {
  console.error(`${fn.error} ${e}`, ...t);
}
function Pf(e, ...t) {
  console.log(`${fn.query} ${e}`, ...t);
}
function ds(e, t) {
  if (!e) throw new Error(`${t}. This should never happen. If you see this error, please, open an issue at https://pris.ly/prisma-prisma-bug-report`);
}
function _i(e, t) {
  throw new Error(t);
}
function $f({ onlyFirst: e = !1 } = {}) {
  let t = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?(?:\\u0007|\\u001B\\u005C|\\u009C))", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|");
  return new RegExp(t, e ? void 0 : "g");
}
var Af = $f();
function Dr(e) {
  if (typeof e != "string") throw new TypeError(`Expected a \`string\`, got \`${typeof e}\``);
  return e.replace(Af, "");
}
function Sf(e) {
  return $.sep === $.posix.sep ? e : e.split($.sep).join($.posix.sep);
}
var xa = we(Pc());
function Of(e) {
  let t = e.ignoreProcessEnv ? {} : k.env, n = (r) => {
    var i;
    return ((i = r.match(/(.?\${(?:[a-zA-Z0-9_]+)?})/g)) == null ? void 0 : i.reduce(function(s, o) {
      let a = /(.?)\${([a-zA-Z0-9_]+)?}/g.exec(o);
      if (!a) return s;
      let l = a[1], u, c;
      if (l === "\\") c = a[0], u = c.replace("\\$", "$");
      else {
        let d = a[2];
        c = a[0].substring(l.length), u = Object.hasOwnProperty.call(t, d) ? t[d] : e.parsed[d] || "", u = n(u);
      }
      return s.replace(c, u);
    }, r)) ?? r;
  };
  for (let r in e.parsed) {
    let i = Object.hasOwnProperty.call(t, r) ? t[r] : e.parsed[r];
    e.parsed[r] = n(i);
  }
  for (let r in e.parsed) t[r] = e.parsed[r];
  return e;
}
var Cr = gi("prisma:tryLoadEnv");
function kf({ rootEnvPath: e, schemaEnvPath: t }, n = { conflictCheck: "none" }) {
  var s, o;
  let r = fs(e);
  n.conflictCheck !== "none" && If(r, t, n.conflictCheck);
  let i = null;
  return Da(r == null ? void 0 : r.path, t) || (i = fs(t)), !r && !i && Cr("No Environment variables loaded"), i != null && i.dotenvResult.error ? console.error(ft(Ee("Schema Env Error: ")) + i.dotenvResult.error) : { message: [r == null ? void 0 : r.message, i == null ? void 0 : i.message].filter(Boolean).join(`
`), parsed: { ...(s = r == null ? void 0 : r.dotenvResult) == null ? void 0 : s.parsed, ...(o = i == null ? void 0 : i.dotenvResult) == null ? void 0 : o.parsed } };
}
function If(e, t, n) {
  let r = e == null ? void 0 : e.dotenvResult.parsed, i = !Da(e == null ? void 0 : e.path, t);
  if (r && t && i && dt.existsSync(t)) {
    let s = xa.default.parse(dt.readFileSync(t)), o = [];
    for (let a in s) r[a] === s[a] && o.push(a);
    if (o.length > 0) {
      let a = $.relative(k.cwd(), e.path), l = $.relative(k.cwd(), t);
      if (n === "error") {
        let u = `There is a conflict between env var${o.length > 1 ? "s" : ""} in ${me(a)} and ${me(l)}
Conflicting env vars:
${o.map((c) => `  ${Ee(c)}`).join(`
`)}

We suggest to move the contents of ${me(l)} to ${me(a)} to consolidate your env vars.
`;
        throw new Error(u);
      } else if (n === "warn") {
        let u = `Conflict for env var${o.length > 1 ? "s" : ""} ${o.map((c) => Ee(c)).join(", ")} in ${me(a)} and ${me(l)}
Env vars from ${me(l)} overwrite the ones from ${me(a)}
      `;
        console.warn(`${dn("warn(prisma)")} ${u}`);
      }
    }
  }
}
function fs(e) {
  if (Nf(e)) {
    Cr(`Environment variables loaded from ${e}`);
    let t = xa.default.config({ path: e, debug: k.env.DOTENV_CONFIG_DEBUG ? !0 : void 0 });
    return { dotenvResult: Of(t), message: cn(`Environment variables loaded from ${$.relative(k.cwd(), e)}`), path: e };
  } else Cr(`Environment variables not found at ${e}`);
  return null;
}
function Da(e, t) {
  return e && t && $.resolve(e) === $.resolve(t);
}
function Nf(e) {
  return !!(e && dt.existsSync(e));
}
function Tf(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Ca(e, t) {
  let n = {};
  for (let r of Object.keys(e)) n[r] = t(e[r], r);
  return n;
}
function Rf(e, t) {
  if (e.length === 0) return;
  let n = e[0];
  for (let r = 1; r < e.length; r++) t(n, e[r]) < 0 && (n = e[r]);
  return n;
}
function Y(e, t) {
  Object.defineProperty(e, "name", { value: t, configurable: !0 });
}
var hs = /* @__PURE__ */ new Set(), xf = (e, t, ...n) => {
  hs.has(e) || (hs.add(e), Ra(t, ...n));
}, ee = class ja extends Error {
  constructor(n, r, i) {
    super(n);
    g(this, "clientVersion");
    g(this, "errorCode");
    g(this, "retryable");
    this.name = "PrismaClientInitializationError", this.clientVersion = r, this.errorCode = i, Error.captureStackTrace(ja);
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientInitializationError";
  }
};
Y(ee, "PrismaClientInitializationError");
var ht = class extends Error {
  constructor(t, { code: n, clientVersion: r, meta: i, batchRequestIdx: s }) {
    super(t);
    g(this, "code");
    g(this, "meta");
    g(this, "clientVersion");
    g(this, "batchRequestIdx");
    this.name = "PrismaClientKnownRequestError", this.code = n, this.clientVersion = r, this.meta = i, Object.defineProperty(this, "batchRequestIdx", { value: s, enumerable: !1, writable: !0 });
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientKnownRequestError";
  }
};
Y(ht, "PrismaClientKnownRequestError");
var ut = class extends Error {
  constructor(t, n) {
    super(t);
    g(this, "clientVersion");
    this.name = "PrismaClientRustPanicError", this.clientVersion = n;
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientRustPanicError";
  }
};
Y(ut, "PrismaClientRustPanicError");
var ge = class extends Error {
  constructor(t, { clientVersion: n, batchRequestIdx: r }) {
    super(t);
    g(this, "clientVersion");
    g(this, "batchRequestIdx");
    this.name = "PrismaClientUnknownRequestError", this.clientVersion = n, Object.defineProperty(this, "batchRequestIdx", { value: r, writable: !0, enumerable: !1 });
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientUnknownRequestError";
  }
};
Y(ge, "PrismaClientUnknownRequestError");
var Ke = class extends Error {
  constructor(t, { clientVersion: n }) {
    super(t);
    g(this, "name", "PrismaClientValidationError");
    g(this, "clientVersion");
    this.clientVersion = n;
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientValidationError";
  }
};
Y(Ke, "PrismaClientValidationError");
var Wt = class {
  constructor() {
    g(this, "_map", /* @__PURE__ */ new Map());
  }
  get(e) {
    var t;
    return (t = this._map.get(e)) == null ? void 0 : t.value;
  }
  set(e, t) {
    this._map.set(e, { value: t });
  }
  getOrCreate(e, t) {
    let n = this._map.get(e);
    if (n) return n.value;
    let r = t();
    return this.set(e, r), r;
  }
};
function Yn(e) {
  return e.substring(0, 1).toLowerCase() + e.substring(1);
}
function Df(e, t) {
  let n = {};
  for (let r of e) {
    let i = r[t];
    n[i] = r;
  }
  return n;
}
function ps(e) {
  let t;
  return { get() {
    return t || (t = { value: e() }), t.value;
  } };
}
function Ei(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function La(e) {
  return e.toString() !== "Invalid Date";
}
var Et = 9e15, nt = 1e9, jr = "0123456789abcdef", Fn = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Mn = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Lr = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -Et, maxE: Et, crypto: !1 }, Fa, Fe, R = !0, Xn = "[DecimalError] ", Xe = Xn + "Invalid argument: ", Ma = Xn + "Precision limit exceeded", Ua = Xn + "crypto unavailable", za = "[object Decimal]", ae = Math.floor, ne = Math.pow, Cf = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, jf = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, Lf = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, qa = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Pe = 1e7, I = 7, Ff = 9007199254740991, Mf = Fn.length - 1, Fr = Mn.length - 1, y = { toStringTag: za };
y.absoluteValue = y.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), A(e);
};
y.ceil = function() {
  return A(new this.constructor(this), this.e + 1, 2);
};
y.clampedTo = y.clamp = function(e, t) {
  var n, r = this, i = r.constructor;
  if (e = new i(e), t = new i(t), !e.s || !t.s) return new i(NaN);
  if (e.gt(t)) throw Error(Xe + t);
  return n = r.cmp(e), n < 0 ? e : r.cmp(t) > 0 ? t : new i(r);
};
y.comparedTo = y.cmp = function(e) {
  var t, n, r, i, s = this, o = s.d, a = (e = new s.constructor(e)).d, l = s.s, u = e.s;
  if (!o || !a) return !l || !u ? NaN : l !== u ? l : o === a ? 0 : !o ^ l < 0 ? 1 : -1;
  if (!o[0] || !a[0]) return o[0] ? l : a[0] ? -u : 0;
  if (l !== u) return l;
  if (s.e !== e.e) return s.e > e.e ^ l < 0 ? 1 : -1;
  for (r = o.length, i = a.length, t = 0, n = r < i ? r : i; t < n; ++t) if (o[t] !== a[t]) return o[t] > a[t] ^ l < 0 ? 1 : -1;
  return r === i ? 0 : r > i ^ l < 0 ? 1 : -1;
};
y.cosine = y.cos = function() {
  var e, t, n = this, r = n.constructor;
  return n.d ? n.d[0] ? (e = r.precision, t = r.rounding, r.precision = e + Math.max(n.e, n.sd()) + I, r.rounding = 1, n = Uf(r, Ja(r, n)), r.precision = e, r.rounding = t, A(Fe == 2 || Fe == 3 ? n.neg() : n, e, t, !0)) : new r(1) : new r(NaN);
};
y.cubeRoot = y.cbrt = function() {
  var e, t, n, r, i, s, o, a, l, u, c = this, d = c.constructor;
  if (!c.isFinite() || c.isZero()) return new d(c);
  for (R = !1, s = c.s * ne(c.s * c, 1 / 3), !s || Math.abs(s) == 1 / 0 ? (n = se(c.d), e = c.e, (s = (e - n.length + 1) % 3) && (n += s == 1 || s == -2 ? "0" : "00"), s = ne(n, 1 / 3), e = ae((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), s == 1 / 0 ? n = "5e" + e : (n = s.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + e), r = new d(n), r.s = c.s) : r = new d(s.toString()), o = (e = d.precision) + 3; ; ) if (a = r, l = a.times(a).times(a), u = l.plus(c), r = Z(u.plus(c).times(a), u.plus(l), o + 2, 1), se(a.d).slice(0, o) === (n = se(r.d)).slice(0, o)) if (n = n.slice(o - 3, o + 1), n == "9999" || !i && n == "4999") {
    if (!i && (A(a, e + 1, 0), a.times(a).times(a).eq(c))) {
      r = a;
      break;
    }
    o += 4, i = 1;
  } else {
    (!+n || !+n.slice(1) && n.charAt(0) == "5") && (A(r, e + 1, 1), t = !r.times(r).times(r).eq(c));
    break;
  }
  return R = !0, A(r, e, d.rounding, t);
};
y.decimalPlaces = y.dp = function() {
  var e, t = this.d, n = NaN;
  if (t) {
    if (e = t.length - 1, n = (e - ae(this.e / I)) * I, e = t[e], e) for (; e % 10 == 0; e /= 10) n--;
    n < 0 && (n = 0);
  }
  return n;
};
y.dividedBy = y.div = function(e) {
  return Z(this, new this.constructor(e));
};
y.dividedToIntegerBy = y.divToInt = function(e) {
  var t = this, n = t.constructor;
  return A(Z(t, new n(e), 0, 1, 1), n.precision, n.rounding);
};
y.equals = y.eq = function(e) {
  return this.cmp(e) === 0;
};
y.floor = function() {
  return A(new this.constructor(this), this.e + 1, 3);
};
y.greaterThan = y.gt = function(e) {
  return this.cmp(e) > 0;
};
y.greaterThanOrEqualTo = y.gte = function(e) {
  var t = this.cmp(e);
  return t == 1 || t === 0;
};
y.hyperbolicCosine = y.cosh = function() {
  var e, t, n, r, i, s = this, o = s.constructor, a = new o(1);
  if (!s.isFinite()) return new o(s.s ? 1 / 0 : NaN);
  if (s.isZero()) return a;
  n = o.precision, r = o.rounding, o.precision = n + Math.max(s.e, s.sd()) + 4, o.rounding = 1, i = s.d.length, i < 32 ? (e = Math.ceil(i / 3), t = (1 / tr(4, e)).toString()) : (e = 16, t = "2.3283064365386962890625e-10"), s = At(o, 1, s.times(t), new o(1), !0);
  for (var l, u = e, c = new o(8); u--; ) l = s.times(s), s = a.minus(l.times(c.minus(l.times(c))));
  return A(s, o.precision = n, o.rounding = r, !0);
};
y.hyperbolicSine = y.sinh = function() {
  var e, t, n, r, i = this, s = i.constructor;
  if (!i.isFinite() || i.isZero()) return new s(i);
  if (t = s.precision, n = s.rounding, s.precision = t + Math.max(i.e, i.sd()) + 4, s.rounding = 1, r = i.d.length, r < 3) i = At(s, 2, i, i, !0);
  else {
    e = 1.4 * Math.sqrt(r), e = e > 16 ? 16 : e | 0, i = i.times(1 / tr(5, e)), i = At(s, 2, i, i, !0);
    for (var o, a = new s(5), l = new s(16), u = new s(20); e--; ) o = i.times(i), i = i.times(a.plus(o.times(l.times(o).plus(u))));
  }
  return s.precision = t, s.rounding = n, A(i, t, n, !0);
};
y.hyperbolicTangent = y.tanh = function() {
  var e, t, n = this, r = n.constructor;
  return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 7, r.rounding = 1, Z(n.sinh(), n.cosh(), r.precision = e, r.rounding = t)) : new r(n.s);
};
y.inverseCosine = y.acos = function() {
  var e = this, t = e.constructor, n = e.abs().cmp(1), r = t.precision, i = t.rounding;
  return n !== -1 ? n === 0 ? e.isNeg() ? Ie(t, r, i) : new t(0) : new t(NaN) : e.isZero() ? Ie(t, r + 4, i).times(0.5) : (t.precision = r + 6, t.rounding = 1, e = new t(1).minus(e).div(e.plus(1)).sqrt().atan(), t.precision = r, t.rounding = i, e.times(2));
};
y.inverseHyperbolicCosine = y.acosh = function() {
  var e, t, n = this, r = n.constructor;
  return n.lte(1) ? new r(n.eq(1) ? 0 : NaN) : n.isFinite() ? (e = r.precision, t = r.rounding, r.precision = e + Math.max(Math.abs(n.e), n.sd()) + 4, r.rounding = 1, R = !1, n = n.times(n).minus(1).sqrt().plus(n), R = !0, r.precision = e, r.rounding = t, n.ln()) : new r(n);
};
y.inverseHyperbolicSine = y.asinh = function() {
  var e, t, n = this, r = n.constructor;
  return !n.isFinite() || n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 2 * Math.max(Math.abs(n.e), n.sd()) + 6, r.rounding = 1, R = !1, n = n.times(n).plus(1).sqrt().plus(n), R = !0, r.precision = e, r.rounding = t, n.ln());
};
y.inverseHyperbolicTangent = y.atanh = function() {
  var e, t, n, r, i = this, s = i.constructor;
  return i.isFinite() ? i.e >= 0 ? new s(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = s.precision, t = s.rounding, r = i.sd(), Math.max(r, e) < 2 * -i.e - 1 ? A(new s(i), e, t, !0) : (s.precision = n = r - i.e, i = Z(i.plus(1), new s(1).minus(i), n + e, 1), s.precision = e + 4, s.rounding = 1, i = i.ln(), s.precision = e, s.rounding = t, i.times(0.5))) : new s(NaN);
};
y.inverseSine = y.asin = function() {
  var e, t, n, r, i = this, s = i.constructor;
  return i.isZero() ? new s(i) : (t = i.abs().cmp(1), n = s.precision, r = s.rounding, t !== -1 ? t === 0 ? (e = Ie(s, n + 4, r).times(0.5), e.s = i.s, e) : new s(NaN) : (s.precision = n + 6, s.rounding = 1, i = i.div(new s(1).minus(i.times(i)).sqrt().plus(1)).atan(), s.precision = n, s.rounding = r, i.times(2)));
};
y.inverseTangent = y.atan = function() {
  var e, t, n, r, i, s, o, a, l, u = this, c = u.constructor, d = c.precision, f = c.rounding;
  if (u.isFinite()) {
    if (u.isZero()) return new c(u);
    if (u.abs().eq(1) && d + 4 <= Fr) return o = Ie(c, d + 4, f).times(0.25), o.s = u.s, o;
  } else {
    if (!u.s) return new c(NaN);
    if (d + 4 <= Fr) return o = Ie(c, d + 4, f).times(0.5), o.s = u.s, o;
  }
  for (c.precision = a = d + 10, c.rounding = 1, n = Math.min(28, a / I + 2 | 0), e = n; e; --e) u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (R = !1, t = Math.ceil(a / I), r = 1, l = u.times(u), o = new c(u), i = u; e !== -1; ) if (i = i.times(l), s = o.minus(i.div(r += 2)), i = i.times(l), o = s.plus(i.div(r += 2)), o.d[t] !== void 0) for (e = t; o.d[e] === s.d[e] && e--; ) ;
  return n && (o = o.times(2 << n - 1)), R = !0, A(o, c.precision = d, c.rounding = f, !0);
};
y.isFinite = function() {
  return !!this.d;
};
y.isInteger = y.isInt = function() {
  return !!this.d && ae(this.e / I) > this.d.length - 2;
};
y.isNaN = function() {
  return !this.s;
};
y.isNegative = y.isNeg = function() {
  return this.s < 0;
};
y.isPositive = y.isPos = function() {
  return this.s > 0;
};
y.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
y.lessThan = y.lt = function(e) {
  return this.cmp(e) < 0;
};
y.lessThanOrEqualTo = y.lte = function(e) {
  return this.cmp(e) < 1;
};
y.logarithm = y.log = function(e) {
  var t, n, r, i, s, o, a, l, u = this, c = u.constructor, d = c.precision, f = c.rounding, h = 5;
  if (e == null) e = new c(10), t = !0;
  else {
    if (e = new c(e), n = e.d, e.s < 0 || !n || !n[0] || e.eq(1)) return new c(NaN);
    t = e.eq(10);
  }
  if (n = u.d, u.s < 0 || !n || !n[0] || u.eq(1)) return new c(n && !n[0] ? -1 / 0 : u.s != 1 ? NaN : n ? 0 : 1 / 0);
  if (t) if (n.length > 1) s = !0;
  else {
    for (i = n[0]; i % 10 === 0; ) i /= 10;
    s = i !== 1;
  }
  if (R = !1, a = d + h, o = Ge(u, a), r = t ? Un(c, a + 10) : Ge(e, a), l = Z(o, r, a, 1), rn(l.d, i = d, f)) do
    if (a += 10, o = Ge(u, a), r = t ? Un(c, a + 10) : Ge(e, a), l = Z(o, r, a, 1), !s) {
      +se(l.d).slice(i + 1, i + 15) + 1 == 1e14 && (l = A(l, d + 1, 0));
      break;
    }
  while (rn(l.d, i += 10, f));
  return R = !0, A(l, d, f);
};
y.minus = y.sub = function(e) {
  var t, n, r, i, s, o, a, l, u, c, d, f, h = this, p = h.constructor;
  if (e = new p(e), !h.d || !e.d) return !h.s || !e.s ? e = new p(NaN) : h.d ? e.s = -e.s : e = new p(e.d || h.s !== e.s ? h : NaN), e;
  if (h.s != e.s) return e.s = -e.s, h.plus(e);
  if (u = h.d, f = e.d, a = p.precision, l = p.rounding, !u[0] || !f[0]) {
    if (f[0]) e.s = -e.s;
    else if (u[0]) e = new p(h);
    else return new p(l === 3 ? -0 : 0);
    return R ? A(e, a, l) : e;
  }
  if (n = ae(e.e / I), c = ae(h.e / I), u = u.slice(), s = c - n, s) {
    for (d = s < 0, d ? (t = u, s = -s, o = f.length) : (t = f, n = c, o = u.length), r = Math.max(Math.ceil(a / I), o) + 2, s > r && (s = r, t.length = 1), t.reverse(), r = s; r--; ) t.push(0);
    t.reverse();
  } else {
    for (r = u.length, o = f.length, d = r < o, d && (o = r), r = 0; r < o; r++) if (u[r] != f[r]) {
      d = u[r] < f[r];
      break;
    }
    s = 0;
  }
  for (d && (t = u, u = f, f = t, e.s = -e.s), o = u.length, r = f.length - o; r > 0; --r) u[o++] = 0;
  for (r = f.length; r > s; ) {
    if (u[--r] < f[r]) {
      for (i = r; i && u[--i] === 0; ) u[i] = Pe - 1;
      --u[i], u[r] += Pe;
    }
    u[r] -= f[r];
  }
  for (; u[--o] === 0; ) u.pop();
  for (; u[0] === 0; u.shift()) --n;
  return u[0] ? (e.d = u, e.e = er(u, n), R ? A(e, a, l) : e) : new p(l === 3 ? -0 : 0);
};
y.modulo = y.mod = function(e) {
  var t, n = this, r = n.constructor;
  return e = new r(e), !n.d || !e.s || e.d && !e.d[0] ? new r(NaN) : !e.d || n.d && !n.d[0] ? A(new r(n), r.precision, r.rounding) : (R = !1, r.modulo == 9 ? (t = Z(n, e.abs(), 0, 3, 1), t.s *= e.s) : t = Z(n, e, 0, r.modulo, 1), t = t.times(e), R = !0, n.minus(t));
};
y.naturalExponential = y.exp = function() {
  return Mr(this);
};
y.naturalLogarithm = y.ln = function() {
  return Ge(this);
};
y.negated = y.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, A(e);
};
y.plus = y.add = function(e) {
  var t, n, r, i, s, o, a, l, u, c, d = this, f = d.constructor;
  if (e = new f(e), !d.d || !e.d) return !d.s || !e.s ? e = new f(NaN) : d.d || (e = new f(e.d || d.s === e.s ? d : NaN)), e;
  if (d.s != e.s) return e.s = -e.s, d.minus(e);
  if (u = d.d, c = e.d, a = f.precision, l = f.rounding, !u[0] || !c[0]) return c[0] || (e = new f(d)), R ? A(e, a, l) : e;
  if (s = ae(d.e / I), r = ae(e.e / I), u = u.slice(), i = s - r, i) {
    for (i < 0 ? (n = u, i = -i, o = c.length) : (n = c, r = s, o = u.length), s = Math.ceil(a / I), o = s > o ? s + 1 : o + 1, i > o && (i = o, n.length = 1), n.reverse(); i--; ) n.push(0);
    n.reverse();
  }
  for (o = u.length, i = c.length, o - i < 0 && (i = o, n = c, c = u, u = n), t = 0; i; ) t = (u[--i] = u[i] + c[i] + t) / Pe | 0, u[i] %= Pe;
  for (t && (u.unshift(t), ++r), o = u.length; u[--o] == 0; ) u.pop();
  return e.d = u, e.e = er(u, r), R ? A(e, a, l) : e;
};
y.precision = y.sd = function(e) {
  var t, n = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Xe + e);
  return n.d ? (t = Va(n.d), e && n.e + 1 > t && (t = n.e + 1)) : t = NaN, t;
};
y.round = function() {
  var e = this, t = e.constructor;
  return A(new t(e), e.e + 1, t.rounding);
};
y.sine = y.sin = function() {
  var e, t, n = this, r = n.constructor;
  return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + Math.max(n.e, n.sd()) + I, r.rounding = 1, n = qf(r, Ja(r, n)), r.precision = e, r.rounding = t, A(Fe > 2 ? n.neg() : n, e, t, !0)) : new r(NaN);
};
y.squareRoot = y.sqrt = function() {
  var e, t, n, r, i, s, o = this, a = o.d, l = o.e, u = o.s, c = o.constructor;
  if (u !== 1 || !a || !a[0]) return new c(!u || u < 0 && (!a || a[0]) ? NaN : a ? o : 1 / 0);
  for (R = !1, u = Math.sqrt(+o), u == 0 || u == 1 / 0 ? (t = se(a), (t.length + l) % 2 == 0 && (t += "0"), u = Math.sqrt(t), l = ae((l + 1) / 2) - (l < 0 || l % 2), u == 1 / 0 ? t = "5e" + l : (t = u.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + l), r = new c(t)) : r = new c(u.toString()), n = (l = c.precision) + 3; ; ) if (s = r, r = s.plus(Z(o, s, n + 2, 1)).times(0.5), se(s.d).slice(0, n) === (t = se(r.d)).slice(0, n)) if (t = t.slice(n - 3, n + 1), t == "9999" || !i && t == "4999") {
    if (!i && (A(s, l + 1, 0), s.times(s).eq(o))) {
      r = s;
      break;
    }
    n += 4, i = 1;
  } else {
    (!+t || !+t.slice(1) && t.charAt(0) == "5") && (A(r, l + 1, 1), e = !r.times(r).eq(o));
    break;
  }
  return R = !0, A(r, l, c.rounding, e);
};
y.tangent = y.tan = function() {
  var e, t, n = this, r = n.constructor;
  return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 10, r.rounding = 1, n = n.sin(), n.s = 1, n = Z(n, new r(1).minus(n.times(n)).sqrt(), e + 10, 0), r.precision = e, r.rounding = t, A(Fe == 2 || Fe == 4 ? n.neg() : n, e, t, !0)) : new r(NaN);
};
y.times = y.mul = function(e) {
  var t, n, r, i, s, o, a, l, u, c = this, d = c.constructor, f = c.d, h = (e = new d(e)).d;
  if (e.s *= c.s, !f || !f[0] || !h || !h[0]) return new d(!e.s || f && !f[0] && !h || h && !h[0] && !f ? NaN : !f || !h ? e.s / 0 : e.s * 0);
  for (n = ae(c.e / I) + ae(e.e / I), l = f.length, u = h.length, l < u && (s = f, f = h, h = s, o = l, l = u, u = o), s = [], o = l + u, r = o; r--; ) s.push(0);
  for (r = u; --r >= 0; ) {
    for (t = 0, i = l + r; i > r; ) a = s[i] + h[r] * f[i - r - 1] + t, s[i--] = a % Pe | 0, t = a / Pe | 0;
    s[i] = (s[i] + t) % Pe | 0;
  }
  for (; !s[--o]; ) s.pop();
  return t ? ++n : s.shift(), e.d = s, e.e = er(s, n), R ? A(e, d.precision, d.rounding) : e;
};
y.toBinary = function(e, t) {
  return Pi(this, 2, e, t);
};
y.toDecimalPlaces = y.toDP = function(e, t) {
  var n = this, r = n.constructor;
  return n = new r(n), e === void 0 ? n : (he(e, 0, nt), t === void 0 ? t = r.rounding : he(t, 0, 8), A(n, e + n.e + 1, t));
};
y.toExponential = function(e, t) {
  var n, r = this, i = r.constructor;
  return e === void 0 ? n = Re(r, !0) : (he(e, 0, nt), t === void 0 ? t = i.rounding : he(t, 0, 8), r = A(new i(r), e + 1, t), n = Re(r, !0, e + 1)), r.isNeg() && !r.isZero() ? "-" + n : n;
};
y.toFixed = function(e, t) {
  var n, r, i = this, s = i.constructor;
  return e === void 0 ? n = Re(i) : (he(e, 0, nt), t === void 0 ? t = s.rounding : he(t, 0, 8), r = A(new s(i), e + i.e + 1, t), n = Re(r, !1, e + r.e + 1)), i.isNeg() && !i.isZero() ? "-" + n : n;
};
y.toFraction = function(e) {
  var t, n, r, i, s, o, a, l, u, c, d, f, h = this, p = h.d, m = h.constructor;
  if (!p) return new m(h);
  if (u = n = new m(1), r = l = new m(0), t = new m(r), s = t.e = Va(p) - h.e - 1, o = s % I, t.d[0] = ne(10, o < 0 ? I + o : o), e == null) e = s > 0 ? t : u;
  else {
    if (a = new m(e), !a.isInt() || a.lt(u)) throw Error(Xe + a);
    e = a.gt(t) ? s > 0 ? t : u : a;
  }
  for (R = !1, a = new m(se(p)), c = m.precision, m.precision = s = p.length * I * 2; d = Z(a, t, 0, 1, 1), i = n.plus(d.times(r)), i.cmp(e) != 1; ) n = r, r = i, i = u, u = l.plus(d.times(i)), l = i, i = t, t = a.minus(d.times(i)), a = i;
  return i = Z(e.minus(n), r, 0, 1, 1), l = l.plus(i.times(u)), n = n.plus(i.times(r)), l.s = u.s = h.s, f = Z(u, r, s, 1).minus(h).abs().cmp(Z(l, n, s, 1).minus(h).abs()) < 1 ? [u, r] : [l, n], m.precision = c, R = !0, f;
};
y.toHexadecimal = y.toHex = function(e, t) {
  return Pi(this, 16, e, t);
};
y.toNearest = function(e, t) {
  var n = this, r = n.constructor;
  if (n = new r(n), e == null) {
    if (!n.d) return n;
    e = new r(1), t = r.rounding;
  } else {
    if (e = new r(e), t === void 0 ? t = r.rounding : he(t, 0, 8), !n.d) return e.s ? n : e;
    if (!e.d) return e.s && (e.s = n.s), e;
  }
  return e.d[0] ? (R = !1, n = Z(n, e, 0, t, 1).times(e), R = !0, A(n)) : (e.s = n.s, n = e), n;
};
y.toNumber = function() {
  return +this;
};
y.toOctal = function(e, t) {
  return Pi(this, 8, e, t);
};
y.toPower = y.pow = function(e) {
  var t, n, r, i, s, o, a = this, l = a.constructor, u = +(e = new l(e));
  if (!a.d || !e.d || !a.d[0] || !e.d[0]) return new l(ne(+a, u));
  if (a = new l(a), a.eq(1)) return a;
  if (r = l.precision, s = l.rounding, e.eq(1)) return A(a, r, s);
  if (t = ae(e.e / I), t >= e.d.length - 1 && (n = u < 0 ? -u : u) <= Ff) return i = Za(l, a, n, r), e.s < 0 ? new l(1).div(i) : A(i, r, s);
  if (o = a.s, o < 0) {
    if (t < e.d.length - 1) return new l(NaN);
    if (!(e.d[t] & 1) && (o = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1) return a.s = o, a;
  }
  return n = ne(+a, u), t = n == 0 || !isFinite(n) ? ae(u * (Math.log("0." + se(a.d)) / Math.LN10 + a.e + 1)) : new l(n + "").e, t > l.maxE + 1 || t < l.minE - 1 ? new l(t > 0 ? o / 0 : 0) : (R = !1, l.rounding = a.s = 1, n = Math.min(12, (t + "").length), i = Mr(e.times(Ge(a, r + n)), r), i.d && (i = A(i, r + 5, 1), rn(i.d, r, s) && (t = r + 10, i = A(Mr(e.times(Ge(a, t + n)), t), t + 5, 1), +se(i.d).slice(r + 1, r + 15) + 1 == 1e14 && (i = A(i, r + 1, 0)))), i.s = o, R = !0, l.rounding = s, A(i, r, s));
};
y.toPrecision = function(e, t) {
  var n, r = this, i = r.constructor;
  return e === void 0 ? n = Re(r, r.e <= i.toExpNeg || r.e >= i.toExpPos) : (he(e, 1, nt), t === void 0 ? t = i.rounding : he(t, 0, 8), r = A(new i(r), e, t), n = Re(r, e <= r.e || r.e <= i.toExpNeg, e)), r.isNeg() && !r.isZero() ? "-" + n : n;
};
y.toSignificantDigits = y.toSD = function(e, t) {
  var n = this, r = n.constructor;
  return e === void 0 ? (e = r.precision, t = r.rounding) : (he(e, 1, nt), t === void 0 ? t = r.rounding : he(t, 0, 8)), A(new r(n), e, t);
};
y.toString = function() {
  var e = this, t = e.constructor, n = Re(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + n : n;
};
y.truncated = y.trunc = function() {
  return A(new this.constructor(this), this.e + 1, 1);
};
y.valueOf = y.toJSON = function() {
  var e = this, t = e.constructor, n = Re(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() ? "-" + n : n;
};
function se(e) {
  var t, n, r, i = e.length - 1, s = "", o = e[0];
  if (i > 0) {
    for (s += o, t = 1; t < i; t++) r = e[t] + "", n = I - r.length, n && (s += He(n)), s += r;
    o = e[t], r = o + "", n = I - r.length, n && (s += He(n));
  } else if (o === 0) return "0";
  for (; o % 10 === 0; ) o /= 10;
  return s + o;
}
function he(e, t, n) {
  if (e !== ~~e || e < t || e > n) throw Error(Xe + e);
}
function rn(e, t, n, r) {
  var i, s, o, a;
  for (s = e[0]; s >= 10; s /= 10) --t;
  return --t < 0 ? (t += I, i = 0) : (i = Math.ceil((t + 1) / I), t %= I), s = ne(10, I - t), a = e[i] % s | 0, r == null ? t < 3 ? (t == 0 ? a = a / 100 | 0 : t == 1 && (a = a / 10 | 0), o = n < 4 && a == 99999 || n > 3 && a == 49999 || a == 5e4 || a == 0) : o = (n < 4 && a + 1 == s || n > 3 && a + 1 == s / 2) && (e[i + 1] / s / 100 | 0) == ne(10, t - 2) - 1 || (a == s / 2 || a == 0) && (e[i + 1] / s / 100 | 0) == 0 : t < 4 ? (t == 0 ? a = a / 1e3 | 0 : t == 1 ? a = a / 100 | 0 : t == 2 && (a = a / 10 | 0), o = (r || n < 4) && a == 9999 || !r && n > 3 && a == 4999) : o = ((r || n < 4) && a + 1 == s || !r && n > 3 && a + 1 == s / 2) && (e[i + 1] / s / 1e3 | 0) == ne(10, t - 3) - 1, o;
}
function kn(e, t, n) {
  for (var r, i = [0], s, o = 0, a = e.length; o < a; ) {
    for (s = i.length; s--; ) i[s] *= t;
    for (i[0] += jr.indexOf(e.charAt(o++)), r = 0; r < i.length; r++) i[r] > n - 1 && (i[r + 1] === void 0 && (i[r + 1] = 0), i[r + 1] += i[r] / n | 0, i[r] %= n);
  }
  return i.reverse();
}
function Uf(e, t) {
  var n, r, i;
  if (t.isZero()) return t;
  r = t.d.length, r < 32 ? (n = Math.ceil(r / 3), i = (1 / tr(4, n)).toString()) : (n = 16, i = "2.3283064365386962890625e-10"), e.precision += n, t = At(e, 1, t.times(i), new e(1));
  for (var s = n; s--; ) {
    var o = t.times(t);
    t = o.times(o).minus(o).times(8).plus(1);
  }
  return e.precision -= n, t;
}
var Z = /* @__PURE__ */ function() {
  function e(r, i, s) {
    var o, a = 0, l = r.length;
    for (r = r.slice(); l--; ) o = r[l] * i + a, r[l] = o % s | 0, a = o / s | 0;
    return a && r.unshift(a), r;
  }
  function t(r, i, s, o) {
    var a, l;
    if (s != o) l = s > o ? 1 : -1;
    else for (a = l = 0; a < s; a++) if (r[a] != i[a]) {
      l = r[a] > i[a] ? 1 : -1;
      break;
    }
    return l;
  }
  function n(r, i, s, o) {
    for (var a = 0; s--; ) r[s] -= a, a = r[s] < i[s] ? 1 : 0, r[s] = a * o + r[s] - i[s];
    for (; !r[0] && r.length > 1; ) r.shift();
  }
  return function(r, i, s, o, a, l) {
    var u, c, d, f, h, p, m, b, _, P, O, N, X, T, v, E, S, F, j, D, M = r.constructor, B = r.s == i.s ? 1 : -1, U = r.d, L = i.d;
    if (!U || !U[0] || !L || !L[0]) return new M(!r.s || !i.s || (U ? L && U[0] == L[0] : !L) ? NaN : U && U[0] == 0 || !L ? B * 0 : B / 0);
    for (l ? (h = 1, c = r.e - i.e) : (l = Pe, h = I, c = ae(r.e / h) - ae(i.e / h)), j = L.length, S = U.length, _ = new M(B), P = _.d = [], d = 0; L[d] == (U[d] || 0); d++) ;
    if (L[d] > (U[d] || 0) && c--, s == null ? (T = s = M.precision, o = M.rounding) : a ? T = s + (r.e - i.e) + 1 : T = s, T < 0) P.push(1), p = !0;
    else {
      if (T = T / h + 2 | 0, d = 0, j == 1) {
        for (f = 0, L = L[0], T++; (d < S || f) && T--; d++) v = f * l + (U[d] || 0), P[d] = v / L | 0, f = v % L | 0;
        p = f || d < S;
      } else {
        for (f = l / (L[0] + 1) | 0, f > 1 && (L = e(L, f, l), U = e(U, f, l), j = L.length, S = U.length), E = j, O = U.slice(0, j), N = O.length; N < j; ) O[N++] = 0;
        D = L.slice(), D.unshift(0), F = L[0], L[1] >= l / 2 && ++F;
        do
          f = 0, u = t(L, O, j, N), u < 0 ? (X = O[0], j != N && (X = X * l + (O[1] || 0)), f = X / F | 0, f > 1 ? (f >= l && (f = l - 1), m = e(L, f, l), b = m.length, N = O.length, u = t(m, O, b, N), u == 1 && (f--, n(m, j < b ? D : L, b, l))) : (f == 0 && (u = f = 1), m = L.slice()), b = m.length, b < N && m.unshift(0), n(O, m, N, l), u == -1 && (N = O.length, u = t(L, O, j, N), u < 1 && (f++, n(O, j < N ? D : L, N, l))), N = O.length) : u === 0 && (f++, O = [0]), P[d++] = f, u && O[0] ? O[N++] = U[E] || 0 : (O = [U[E]], N = 1);
        while ((E++ < S || O[0] !== void 0) && T--);
        p = O[0] !== void 0;
      }
      P[0] || P.shift();
    }
    if (h == 1) _.e = c, Fa = p;
    else {
      for (d = 1, f = P[0]; f >= 10; f /= 10) d++;
      _.e = d + c * h - 1, A(_, a ? s + _.e + 1 : s, o, p);
    }
    return _;
  };
}();
function A(e, t, n, r) {
  var i, s, o, a, l, u, c, d, f, h = e.constructor;
  e: if (t != null) {
    if (d = e.d, !d) return e;
    for (i = 1, a = d[0]; a >= 10; a /= 10) i++;
    if (s = t - i, s < 0) s += I, o = t, c = d[f = 0], l = c / ne(10, i - o - 1) % 10 | 0;
    else if (f = Math.ceil((s + 1) / I), a = d.length, f >= a) if (r) {
      for (; a++ <= f; ) d.push(0);
      c = l = 0, i = 1, s %= I, o = s - I + 1;
    } else break e;
    else {
      for (c = a = d[f], i = 1; a >= 10; a /= 10) i++;
      s %= I, o = s - I + i, l = o < 0 ? 0 : c / ne(10, i - o - 1) % 10 | 0;
    }
    if (r = r || t < 0 || d[f + 1] !== void 0 || (o < 0 ? c : c % ne(10, i - o - 1)), u = n < 4 ? (l || r) && (n == 0 || n == (e.s < 0 ? 3 : 2)) : l > 5 || l == 5 && (n == 4 || r || n == 6 && (s > 0 ? o > 0 ? c / ne(10, i - o) : 0 : d[f - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), t < 1 || !d[0]) return d.length = 0, u ? (t -= e.e + 1, d[0] = ne(10, (I - t % I) % I), e.e = -t || 0) : d[0] = e.e = 0, e;
    if (s == 0 ? (d.length = f, a = 1, f--) : (d.length = f + 1, a = ne(10, I - s), d[f] = o > 0 ? (c / ne(10, i - o) % ne(10, o) | 0) * a : 0), u) for (; ; ) if (f == 0) {
      for (s = 1, o = d[0]; o >= 10; o /= 10) s++;
      for (o = d[0] += a, a = 1; o >= 10; o /= 10) a++;
      s != a && (e.e++, d[0] == Pe && (d[0] = 1));
      break;
    } else {
      if (d[f] += a, d[f] != Pe) break;
      d[f--] = 0, a = 1;
    }
    for (s = d.length; d[--s] === 0; ) d.pop();
  }
  return R && (e.e > h.maxE ? (e.d = null, e.e = NaN) : e.e < h.minE && (e.e = 0, e.d = [0])), e;
}
function Re(e, t, n) {
  if (!e.isFinite()) return Wa(e);
  var r, i = e.e, s = se(e.d), o = s.length;
  return t ? (n && (r = n - o) > 0 ? s = s.charAt(0) + "." + s.slice(1) + He(r) : o > 1 && (s = s.charAt(0) + "." + s.slice(1)), s = s + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (s = "0." + He(-i - 1) + s, n && (r = n - o) > 0 && (s += He(r))) : i >= o ? (s += He(i + 1 - o), n && (r = n - i - 1) > 0 && (s = s + "." + He(r))) : ((r = i + 1) < o && (s = s.slice(0, r) + "." + s.slice(r)), n && (r = n - o) > 0 && (i + 1 === o && (s += "."), s += He(r))), s;
}
function er(e, t) {
  var n = e[0];
  for (t *= I; n >= 10; n /= 10) t++;
  return t;
}
function Un(e, t, n) {
  if (t > Mf) throw R = !0, n && (e.precision = n), Error(Ma);
  return A(new e(Fn), t, 1, !0);
}
function Ie(e, t, n) {
  if (t > Fr) throw Error(Ma);
  return A(new e(Mn), t, n, !0);
}
function Va(e) {
  var t = e.length - 1, n = t * I + 1;
  if (t = e[t], t) {
    for (; t % 10 == 0; t /= 10) n--;
    for (t = e[0]; t >= 10; t /= 10) n++;
  }
  return n;
}
function He(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function Za(e, t, n, r) {
  var i, s = new e(1), o = Math.ceil(r / I + 4);
  for (R = !1; ; ) {
    if (n % 2 && (s = s.times(t), gs(s.d, o) && (i = !0)), n = ae(n / 2), n === 0) {
      n = s.d.length - 1, i && s.d[n] === 0 && ++s.d[n];
      break;
    }
    t = t.times(t), gs(t.d, o);
  }
  return R = !0, s;
}
function ms(e) {
  return e.d[e.d.length - 1] & 1;
}
function Ba(e, t, n) {
  for (var r, i, s = new e(t[0]), o = 0; ++o < t.length; ) {
    if (i = new e(t[o]), !i.s) {
      s = i;
      break;
    }
    r = s.cmp(i), (r === n || r === 0 && s.s === n) && (s = i);
  }
  return s;
}
function Mr(e, t) {
  var n, r, i, s, o, a, l, u = 0, c = 0, d = 0, f = e.constructor, h = f.rounding, p = f.precision;
  if (!e.d || !e.d[0] || e.e > 17) return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
  for (t == null ? (R = !1, l = p) : l = t, a = new f(0.03125); e.e > -2; ) e = e.times(a), d += 5;
  for (r = Math.log(ne(2, d)) / Math.LN10 * 2 + 5 | 0, l += r, n = s = o = new f(1), f.precision = l; ; ) {
    if (s = A(s.times(e), l, 1), n = n.times(++c), a = o.plus(Z(s, n, l, 1)), se(a.d).slice(0, l) === se(o.d).slice(0, l)) {
      for (i = d; i--; ) o = A(o.times(o), l, 1);
      if (t == null) if (u < 3 && rn(o.d, l - r, h, u)) f.precision = l += 10, n = s = a = new f(1), c = 0, u++;
      else return A(o, f.precision = p, h, R = !0);
      else return f.precision = p, o;
    }
    o = a;
  }
}
function Ge(e, t) {
  var n, r, i, s, o, a, l, u, c, d, f, h = 1, p = 10, m = e, b = m.d, _ = m.constructor, P = _.rounding, O = _.precision;
  if (m.s < 0 || !b || !b[0] || !m.e && b[0] == 1 && b.length == 1) return new _(b && !b[0] ? -1 / 0 : m.s != 1 ? NaN : b ? 0 : m);
  if (t == null ? (R = !1, c = O) : c = t, _.precision = c += p, n = se(b), r = n.charAt(0), Math.abs(s = m.e) < 15e14) {
    for (; r < 7 && r != 1 || r == 1 && n.charAt(1) > 3; ) m = m.times(e), n = se(m.d), r = n.charAt(0), h++;
    s = m.e, r > 1 ? (m = new _("0." + n), s++) : m = new _(r + "." + n.slice(1));
  } else return u = Un(_, c + 2, O).times(s + ""), m = Ge(new _(r + "." + n.slice(1)), c - p).plus(u), _.precision = O, t == null ? A(m, O, P, R = !0) : m;
  for (d = m, l = o = m = Z(m.minus(1), m.plus(1), c, 1), f = A(m.times(m), c, 1), i = 3; ; ) {
    if (o = A(o.times(f), c, 1), u = l.plus(Z(o, new _(i), c, 1)), se(u.d).slice(0, c) === se(l.d).slice(0, c)) if (l = l.times(2), s !== 0 && (l = l.plus(Un(_, c + 2, O).times(s + ""))), l = Z(l, new _(h), c, 1), t == null) if (rn(l.d, c - p, P, a)) _.precision = c += p, u = o = m = Z(d.minus(1), d.plus(1), c, 1), f = A(m.times(m), c, 1), i = a = 1;
    else return A(l, _.precision = O, P, R = !0);
    else return _.precision = O, l;
    l = u, i += 2;
  }
}
function Wa(e) {
  return String(e.s * e.s / 0);
}
function In(e, t) {
  var n, r, i;
  for ((n = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (r = t.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +t.slice(r + 1), t = t.substring(0, r)) : n < 0 && (n = t.length), r = 0; t.charCodeAt(r) === 48; r++) ;
  for (i = t.length; t.charCodeAt(i - 1) === 48; --i) ;
  if (t = t.slice(r, i), t) {
    if (i -= r, e.e = n = n - r - 1, e.d = [], r = (n + 1) % I, n < 0 && (r += I), r < i) {
      for (r && e.d.push(+t.slice(0, r)), i -= I; r < i; ) e.d.push(+t.slice(r, r += I));
      t = t.slice(r), r = I - t.length;
    } else r -= i;
    for (; r--; ) t += "0";
    e.d.push(+t), R && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else e.e = 0, e.d = [0];
  return e;
}
function zf(e, t) {
  var n, r, i, s, o, a, l, u, c;
  if (t.indexOf("_") > -1) {
    if (t = t.replace(/(\d)_(?=\d)/g, "$1"), qa.test(t)) return In(e, t);
  } else if (t === "Infinity" || t === "NaN") return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (jf.test(t)) n = 16, t = t.toLowerCase();
  else if (Cf.test(t)) n = 2;
  else if (Lf.test(t)) n = 8;
  else throw Error(Xe + t);
  for (s = t.search(/p/i), s > 0 ? (l = +t.slice(s + 1), t = t.substring(2, s)) : t = t.slice(2), s = t.indexOf("."), o = s >= 0, r = e.constructor, o && (t = t.replace(".", ""), a = t.length, s = a - s, i = Za(r, new r(n), s, s * 2)), u = kn(t, n, Pe), c = u.length - 1, s = c; u[s] === 0; --s) u.pop();
  return s < 0 ? new r(e.s * 0) : (e.e = er(u, c), e.d = u, R = !1, o && (e = Z(e, i, a * 4)), l && (e = e.times(Math.abs(l) < 54 ? ne(2, l) : gt.pow(2, l))), R = !0, e);
}
function qf(e, t) {
  var n, r = t.d.length;
  if (r < 3) return t.isZero() ? t : At(e, 2, t, t);
  n = 1.4 * Math.sqrt(r), n = n > 16 ? 16 : n | 0, t = t.times(1 / tr(5, n)), t = At(e, 2, t, t);
  for (var i, s = new e(5), o = new e(16), a = new e(20); n--; ) i = t.times(t), t = t.times(s.plus(i.times(o.times(i).minus(a))));
  return t;
}
function At(e, t, n, r, i) {
  var s, o, a, l, u = e.precision, c = Math.ceil(u / I);
  for (R = !1, l = n.times(n), a = new e(r); ; ) {
    if (o = Z(a.times(l), new e(t++ * t++), u, 1), a = i ? r.plus(o) : r.minus(o), r = Z(o.times(l), new e(t++ * t++), u, 1), o = a.plus(r), o.d[c] !== void 0) {
      for (s = c; o.d[s] === a.d[s] && s--; ) ;
      if (s == -1) break;
    }
    s = a, a = r, r = o, o = s;
  }
  return R = !0, o.d.length = c + 1, o;
}
function tr(e, t) {
  for (var n = e; --t; ) n *= e;
  return n;
}
function Ja(e, t) {
  var n, r = t.s < 0, i = Ie(e, e.precision, 1), s = i.times(0.5);
  if (t = t.abs(), t.lte(s)) return Fe = r ? 4 : 1, t;
  if (n = t.divToInt(i), n.isZero()) Fe = r ? 3 : 2;
  else {
    if (t = t.minus(n.times(i)), t.lte(s)) return Fe = ms(n) ? r ? 2 : 3 : r ? 4 : 1, t;
    Fe = ms(n) ? r ? 1 : 4 : r ? 3 : 2;
  }
  return t.minus(i).abs();
}
function Pi(e, t, n, r) {
  var i, s, o, a, l, u, c, d, f, h = e.constructor, p = n !== void 0;
  if (p ? (he(n, 1, nt), r === void 0 ? r = h.rounding : he(r, 0, 8)) : (n = h.precision, r = h.rounding), !e.isFinite()) c = Wa(e);
  else {
    for (c = Re(e), o = c.indexOf("."), p ? (i = 2, t == 16 ? n = n * 4 - 3 : t == 8 && (n = n * 3 - 2)) : i = t, o >= 0 && (c = c.replace(".", ""), f = new h(1), f.e = c.length - o, f.d = kn(Re(f), 10, i), f.e = f.d.length), d = kn(c, 10, i), s = l = d.length; d[--l] == 0; ) d.pop();
    if (!d[0]) c = p ? "0p+0" : "0";
    else {
      if (o < 0 ? s-- : (e = new h(e), e.d = d, e.e = s, e = Z(e, f, n, r, 0, i), d = e.d, s = e.e, u = Fa), o = d[n], a = i / 2, u = u || d[n + 1] !== void 0, u = r < 4 ? (o !== void 0 || u) && (r === 0 || r === (e.s < 0 ? 3 : 2)) : o > a || o === a && (r === 4 || u || r === 6 && d[n - 1] & 1 || r === (e.s < 0 ? 8 : 7)), d.length = n, u) for (; ++d[--n] > i - 1; ) d[n] = 0, n || (++s, d.unshift(1));
      for (l = d.length; !d[l - 1]; --l) ;
      for (o = 0, c = ""; o < l; o++) c += jr.charAt(d[o]);
      if (p) {
        if (l > 1) if (t == 16 || t == 8) {
          for (o = t == 16 ? 4 : 3, --l; l % o; l++) c += "0";
          for (d = kn(c, i, t), l = d.length; !d[l - 1]; --l) ;
          for (o = 1, c = "1."; o < l; o++) c += jr.charAt(d[o]);
        } else c = c.charAt(0) + "." + c.slice(1);
        c = c + (s < 0 ? "p" : "p+") + s;
      } else if (s < 0) {
        for (; ++s; ) c = "0" + c;
        c = "0." + c;
      } else if (++s > l) for (s -= l; s--; ) c += "0";
      else s < l && (c = c.slice(0, s) + "." + c.slice(s));
    }
    c = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + c;
  }
  return e.s < 0 ? "-" + c : c;
}
function gs(e, t) {
  if (e.length > t) return e.length = t, !0;
}
function Vf(e) {
  return new this(e).abs();
}
function Zf(e) {
  return new this(e).acos();
}
function Bf(e) {
  return new this(e).acosh();
}
function Wf(e, t) {
  return new this(e).plus(t);
}
function Jf(e) {
  return new this(e).asin();
}
function Hf(e) {
  return new this(e).asinh();
}
function Kf(e) {
  return new this(e).atan();
}
function Gf(e) {
  return new this(e).atanh();
}
function Qf(e, t) {
  e = new this(e), t = new this(t);
  var n, r = this.precision, i = this.rounding, s = r + 4;
  return !e.s || !t.s ? n = new this(NaN) : !e.d && !t.d ? (n = Ie(this, s, 1).times(t.s > 0 ? 0.25 : 0.75), n.s = e.s) : !t.d || e.isZero() ? (n = t.s < 0 ? Ie(this, r, i) : new this(0), n.s = e.s) : !e.d || t.isZero() ? (n = Ie(this, s, 1).times(0.5), n.s = e.s) : t.s < 0 ? (this.precision = s, this.rounding = 1, n = this.atan(Z(e, t, s, 1)), t = Ie(this, s, 1), this.precision = r, this.rounding = i, n = e.s < 0 ? n.minus(t) : n.plus(t)) : n = this.atan(Z(e, t, s, 1)), n;
}
function Yf(e) {
  return new this(e).cbrt();
}
function Xf(e) {
  return A(e = new this(e), e.e + 1, 2);
}
function eh(e, t, n) {
  return new this(e).clamp(t, n);
}
function th(e) {
  if (!e || typeof e != "object") throw Error(Xn + "Object expected");
  var t, n, r, i = e.defaults === !0, s = ["precision", 1, nt, "rounding", 0, 8, "toExpNeg", -Et, 0, "toExpPos", 0, Et, "maxE", 0, Et, "minE", -Et, 0, "modulo", 0, 9];
  for (t = 0; t < s.length; t += 3) if (n = s[t], i && (this[n] = Lr[n]), (r = e[n]) !== void 0) if (ae(r) === r && r >= s[t + 1] && r <= s[t + 2]) this[n] = r;
  else throw Error(Xe + n + ": " + r);
  if (n = "crypto", i && (this[n] = Lr[n]), (r = e[n]) !== void 0) if (r === !0 || r === !1 || r === 0 || r === 1) if (r) if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[n] = !0;
  else throw Error(Ua);
  else this[n] = !1;
  else throw Error(Xe + n + ": " + r);
  return this;
}
function nh(e) {
  return new this(e).cos();
}
function rh(e) {
  return new this(e).cosh();
}
function Ha(e) {
  var t, n, r;
  function i(s) {
    var o, a, l, u = this;
    if (!(u instanceof i)) return new i(s);
    if (u.constructor = i, ys(s)) {
      u.s = s.s, R ? !s.d || s.e > i.maxE ? (u.e = NaN, u.d = null) : s.e < i.minE ? (u.e = 0, u.d = [0]) : (u.e = s.e, u.d = s.d.slice()) : (u.e = s.e, u.d = s.d ? s.d.slice() : s.d);
      return;
    }
    if (l = typeof s, l === "number") {
      if (s === 0) {
        u.s = 1 / s < 0 ? -1 : 1, u.e = 0, u.d = [0];
        return;
      }
      if (s < 0 ? (s = -s, u.s = -1) : u.s = 1, s === ~~s && s < 1e7) {
        for (o = 0, a = s; a >= 10; a /= 10) o++;
        R ? o > i.maxE ? (u.e = NaN, u.d = null) : o < i.minE ? (u.e = 0, u.d = [0]) : (u.e = o, u.d = [s]) : (u.e = o, u.d = [s]);
        return;
      }
      if (s * 0 !== 0) {
        s || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return In(u, s.toString());
    }
    if (l === "string") return (a = s.charCodeAt(0)) === 45 ? (s = s.slice(1), u.s = -1) : (a === 43 && (s = s.slice(1)), u.s = 1), qa.test(s) ? In(u, s) : zf(u, s);
    if (l === "bigint") return s < 0 ? (s = -s, u.s = -1) : u.s = 1, In(u, s.toString());
    throw Error(Xe + s);
  }
  if (i.prototype = y, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = th, i.clone = Ha, i.isDecimal = ys, i.abs = Vf, i.acos = Zf, i.acosh = Bf, i.add = Wf, i.asin = Jf, i.asinh = Hf, i.atan = Kf, i.atanh = Gf, i.atan2 = Qf, i.cbrt = Yf, i.ceil = Xf, i.clamp = eh, i.cos = nh, i.cosh = rh, i.div = ih, i.exp = sh, i.floor = oh, i.hypot = ah, i.ln = lh, i.log = uh, i.log10 = dh, i.log2 = ch, i.max = fh, i.min = hh, i.mod = ph, i.mul = mh, i.pow = gh, i.random = yh, i.round = wh, i.sign = vh, i.sin = bh, i.sinh = _h, i.sqrt = Eh, i.sub = Ph, i.sum = $h, i.tan = Ah, i.tanh = Sh, i.trunc = Oh, e === void 0 && (e = {}), e && e.defaults !== !0) for (r = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], t = 0; t < r.length; ) e.hasOwnProperty(n = r[t++]) || (e[n] = this[n]);
  return i.config(e), i;
}
function ih(e, t) {
  return new this(e).div(t);
}
function sh(e) {
  return new this(e).exp();
}
function oh(e) {
  return A(e = new this(e), e.e + 1, 3);
}
function ah() {
  var e, t, n = new this(0);
  for (R = !1, e = 0; e < arguments.length; ) if (t = new this(arguments[e++]), t.d) n.d && (n = n.plus(t.times(t)));
  else {
    if (t.s) return R = !0, new this(1 / 0);
    n = t;
  }
  return R = !0, n.sqrt();
}
function ys(e) {
  return e instanceof gt || e && e.toStringTag === za || !1;
}
function lh(e) {
  return new this(e).ln();
}
function uh(e, t) {
  return new this(e).log(t);
}
function ch(e) {
  return new this(e).log(2);
}
function dh(e) {
  return new this(e).log(10);
}
function fh() {
  return Ba(this, arguments, -1);
}
function hh() {
  return Ba(this, arguments, 1);
}
function ph(e, t) {
  return new this(e).mod(t);
}
function mh(e, t) {
  return new this(e).mul(t);
}
function gh(e, t) {
  return new this(e).pow(t);
}
function yh(e) {
  var t, n, r, i, s = 0, o = new this(1), a = [];
  if (e === void 0 ? e = this.precision : he(e, 1, nt), r = Math.ceil(e / I), this.crypto) if (crypto.getRandomValues) for (t = crypto.getRandomValues(new Uint32Array(r)); s < r; ) i = t[s], i >= 429e7 ? t[s] = crypto.getRandomValues(new Uint32Array(1))[0] : a[s++] = i % 1e7;
  else if (crypto.randomBytes) {
    for (t = crypto.randomBytes(r *= 4); s < r; ) i = t[s] + (t[s + 1] << 8) + (t[s + 2] << 16) + ((t[s + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(t, s) : (a.push(i % 1e7), s += 4);
    s = r / 4;
  } else throw Error(Ua);
  else for (; s < r; ) a[s++] = Math.random() * 1e7 | 0;
  for (r = a[--s], e %= I, r && e && (i = ne(10, I - e), a[s] = (r / i | 0) * i); a[s] === 0; s--) a.pop();
  if (s < 0) n = 0, a = [0];
  else {
    for (n = -1; a[0] === 0; n -= I) a.shift();
    for (r = 1, i = a[0]; i >= 10; i /= 10) r++;
    r < I && (n -= I - r);
  }
  return o.e = n, o.d = a, o;
}
function wh(e) {
  return A(e = new this(e), e.e + 1, this.rounding);
}
function vh(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function bh(e) {
  return new this(e).sin();
}
function _h(e) {
  return new this(e).sinh();
}
function Eh(e) {
  return new this(e).sqrt();
}
function Ph(e, t) {
  return new this(e).sub(t);
}
function $h() {
  var e = 0, t = arguments, n = new this(t[e]);
  for (R = !1; n.s && ++e < t.length; ) n = n.plus(t[e]);
  return R = !0, A(n, this.precision, this.rounding);
}
function Ah(e) {
  return new this(e).tan();
}
function Sh(e) {
  return new this(e).tanh();
}
function Oh(e) {
  return A(e = new this(e), e.e + 1, 1);
}
y[Symbol.for("nodejs.util.inspect.custom")] = y.toString;
y[Symbol.toStringTag] = "Decimal";
var gt = y.constructor = Ha(Lr);
Fn = new gt(Fn);
Mn = new gt(Mn);
var $i = gt;
function Ai(e) {
  return gt.isDecimal(e) ? !0 : e !== null && typeof e == "object" && typeof e.s == "number" && typeof e.e == "number" && typeof e.toFixed == "function" && Array.isArray(e.d);
}
var kh = {};
Nt(kh, { ModelAction: () => nr, datamodelEnumToSchemaEnum: () => Ih });
function Ih(e) {
  return { name: e.name, values: e.values.map((t) => t.name) };
}
var nr = ((e) => (e.findUnique = "findUnique", e.findUniqueOrThrow = "findUniqueOrThrow", e.findFirst = "findFirst", e.findFirstOrThrow = "findFirstOrThrow", e.findMany = "findMany", e.create = "create", e.createMany = "createMany", e.createManyAndReturn = "createManyAndReturn", e.update = "update", e.updateMany = "updateMany", e.updateManyAndReturn = "updateManyAndReturn", e.upsert = "upsert", e.delete = "delete", e.deleteMany = "deleteMany", e.groupBy = "groupBy", e.count = "count", e.aggregate = "aggregate", e.findRaw = "findRaw", e.aggregateRaw = "aggregateRaw", e))(nr || {}), Nh = we(fa()), Th = { keyword: lt, entity: lt, value: (e) => Ee(Vt(e)), punctuation: Vt, directive: lt, function: lt, variable: (e) => Ee(Vt(e)), string: (e) => Ee(Xt(e)), boolean: dn, number: lt, comment: mi }, Rh = (e) => e, vn = {}, xh = 0, C = { manual: vn.Prism && vn.Prism.manual, disableWorkerMessageHandler: vn.Prism && vn.Prism.disableWorkerMessageHandler, util: { encode: function(e) {
  if (e instanceof Oe) {
    let t = e;
    return new Oe(t.type, C.util.encode(t.content), t.alias);
  } else return Array.isArray(e) ? e.map(C.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
}, type: function(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}, objId: function(e) {
  return e.__id || Object.defineProperty(e, "__id", { value: ++xh }), e.__id;
}, clone: function e(t, n) {
  let r, i, s = C.util.type(t);
  switch (n = n || {}, s) {
    case "Object":
      if (i = C.util.objId(t), n[i]) return n[i];
      r = {}, n[i] = r;
      for (let o in t) t.hasOwnProperty(o) && (r[o] = e(t[o], n));
      return r;
    case "Array":
      return i = C.util.objId(t), n[i] ? n[i] : (r = [], n[i] = r, t.forEach(function(o, a) {
        r[a] = e(o, n);
      }), r);
    default:
      return t;
  }
} }, languages: { extend: function(e, t) {
  let n = C.util.clone(C.languages[e]);
  for (let r in t) n[r] = t[r];
  return n;
}, insertBefore: function(e, t, n, r) {
  r = r || C.languages;
  let i = r[e], s = {};
  for (let a in i) if (i.hasOwnProperty(a)) {
    if (a == t) for (let l in n) n.hasOwnProperty(l) && (s[l] = n[l]);
    n.hasOwnProperty(a) || (s[a] = i[a]);
  }
  let o = r[e];
  return r[e] = s, C.languages.DFS(C.languages, function(a, l) {
    l === o && a != e && (this[a] = s);
  }), s;
}, DFS: function e(t, n, r, i) {
  i = i || {};
  let s = C.util.objId;
  for (let o in t) if (t.hasOwnProperty(o)) {
    n.call(t, o, t[o], r || o);
    let a = t[o], l = C.util.type(a);
    l === "Object" && !i[s(a)] ? (i[s(a)] = !0, e(a, n, null, i)) : l === "Array" && !i[s(a)] && (i[s(a)] = !0, e(a, n, o, i));
  }
} }, plugins: {}, highlight: function(e, t, n) {
  let r = { code: e, grammar: t, language: n };
  return C.hooks.run("before-tokenize", r), r.tokens = C.tokenize(r.code, r.grammar), C.hooks.run("after-tokenize", r), Oe.stringify(C.util.encode(r.tokens), r.language);
}, matchGrammar: function(e, t, n, r, i, s, o) {
  for (let m in n) {
    if (!n.hasOwnProperty(m) || !n[m]) continue;
    if (m == o) return;
    let b = n[m];
    b = C.util.type(b) === "Array" ? b : [b];
    for (let _ = 0; _ < b.length; ++_) {
      let P = b[_], O = P.inside, N = !!P.lookbehind, X = !!P.greedy, T = 0, v = P.alias;
      if (X && !P.pattern.global) {
        let E = P.pattern.toString().match(/[imuy]*$/)[0];
        P.pattern = RegExp(P.pattern.source, E + "g");
      }
      P = P.pattern || P;
      for (let E = r, S = i; E < t.length; S += t[E].length, ++E) {
        let F = t[E];
        if (t.length > e.length) return;
        if (F instanceof Oe) continue;
        if (X && E != t.length - 1) {
          P.lastIndex = S;
          var d = P.exec(e);
          if (!d) break;
          var c = d.index + (N ? d[1].length : 0), f = d.index + d[0].length, a = E, l = S;
          for (let L = t.length; a < L && (l < f || !t[a].type && !t[a - 1].greedy); ++a) l += t[a].length, c >= l && (++E, S = l);
          if (t[E] instanceof Oe) continue;
          u = a - E, F = e.slice(S, l), d.index -= S;
        } else {
          P.lastIndex = 0;
          var d = P.exec(F), u = 1;
        }
        if (!d) {
          if (s) break;
          continue;
        }
        N && (T = d[1] ? d[1].length : 0);
        var c = d.index + T, d = d[0].slice(T), f = c + d.length, h = F.slice(0, c), p = F.slice(f);
        let j = [E, u];
        h && (++E, S += h.length, j.push(h));
        let D = new Oe(m, O ? C.tokenize(d, O) : d, v, d, X);
        if (j.push(D), p && j.push(p), Array.prototype.splice.apply(t, j), u != 1 && C.matchGrammar(e, t, n, E, S, !0, m), s) break;
      }
    }
  }
}, tokenize: function(e, t) {
  let n = [e], r = t.rest;
  if (r) {
    for (let i in r) t[i] = r[i];
    delete t.rest;
  }
  return C.matchGrammar(e, n, t, 0, 0, !1), n;
}, hooks: { all: {}, add: function(e, t) {
  let n = C.hooks.all;
  n[e] = n[e] || [], n[e].push(t);
}, run: function(e, t) {
  let n = C.hooks.all[e];
  if (!(!n || !n.length)) for (var r = 0, i; i = n[r++]; ) i(t);
} }, Token: Oe };
C.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, "class-name": { pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i, lookbehind: !0, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, boolean: /\b(?:true|false)\b/, function: /\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/, punctuation: /[{}[\];(),.:]/ };
C.languages.javascript = C.languages.extend("clike", { "class-name": [C.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/, lookbehind: !0 }], keyword: [{ pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 }, { pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: !0 }], number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/, function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/ });
C.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
C.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/, lookbehind: !0, greedy: !0 }, "function-variable": { pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/, lookbehind: !0, inside: C.languages.javascript }, { pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i, inside: C.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/, lookbehind: !0, inside: C.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/, lookbehind: !0, inside: C.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ });
C.languages.markup && C.languages.markup.tag.addInlined("script", "javascript");
C.languages.js = C.languages.javascript;
C.languages.typescript = C.languages.extend("javascript", { keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/, builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/ });
C.languages.ts = C.languages.typescript;
function Oe(e, t, n, r, i) {
  this.type = e, this.content = t, this.alias = n, this.length = (r || "").length | 0, this.greedy = !!i;
}
Oe.stringify = function(e, t) {
  return typeof e == "string" ? e : Array.isArray(e) ? e.map(function(n) {
    return Oe.stringify(n, t);
  }).join("") : Dh(e.type)(e.content);
};
function Dh(e) {
  return Th[e] || Rh;
}
function Ch(e) {
  return jh(e, C.languages.javascript);
}
function jh(e, t) {
  return C.tokenize(e, t).map((n) => Oe.stringify(n)).join("");
}
function Lh(e) {
  return df(e);
}
var Fh = class st {
  constructor(t, n) {
    g(this, "firstLineNumber");
    g(this, "lines");
    this.firstLineNumber = t, this.lines = n;
  }
  static read(t) {
    let n;
    try {
      n = dt.readFileSync(t, "utf-8");
    } catch {
      return null;
    }
    return st.fromContent(n);
  }
  static fromContent(t) {
    let n = t.split(/\r?\n/);
    return new st(1, n);
  }
  get lastLineNumber() {
    return this.firstLineNumber + this.lines.length - 1;
  }
  mapLineAt(t, n) {
    if (t < this.firstLineNumber || t > this.lines.length + this.firstLineNumber) return this;
    let r = t - this.firstLineNumber, i = [...this.lines];
    return i[r] = n(i[r]), new st(this.firstLineNumber, i);
  }
  mapLines(t) {
    return new st(this.firstLineNumber, this.lines.map((n, r) => t(n, this.firstLineNumber + r)));
  }
  lineAt(t) {
    return this.lines[t - this.firstLineNumber];
  }
  prependSymbolAt(t, n) {
    return this.mapLines((r, i) => i === t ? `${n} ${r}` : `  ${r}`);
  }
  slice(t, n) {
    let r = this.lines.slice(t - 1, n).join(`
`);
    return new st(t, Lh(r).split(`
`));
  }
  highlight() {
    let t = Ch(this.toString());
    return new st(this.firstLineNumber, t.split(`
`));
  }
  toString() {
    return this.lines.join(`
`);
  }
}, Mh = { red: ft, gray: mi, dim: cn, bold: Ee, underline: me, highlightSource: (e) => e.highlight() }, Uh = { red: (e) => e, gray: (e) => e, dim: (e) => e, bold: (e) => e, underline: (e) => e, highlightSource: (e) => e };
function zh({ message: e, originalMethod: t, isPanic: n, callArguments: r }) {
  return { functionName: `prisma.${t}()`, message: e, isPanic: n ?? !1, callArguments: r };
}
function qh({ callsite: e, message: t, originalMethod: n, isPanic: r, callArguments: i }, s) {
  var d;
  let o = zh({ message: t, originalMethod: n, isPanic: r, callArguments: i });
  if (!e || typeof window < "u" || k.env.NODE_ENV === "production") return o;
  let a = e.getLocation();
  if (!a || !a.lineNumber || !a.columnNumber) return o;
  let l = Math.max(1, a.lineNumber - 3), u = (d = Fh.read(a.fileName)) == null ? void 0 : d.slice(l, a.lineNumber), c = u == null ? void 0 : u.lineAt(a.lineNumber);
  if (u && c) {
    let f = Zh(c), h = Vh(c);
    if (!h) return o;
    o.functionName = `${h.code})`, o.location = a, r || (u = u.mapLineAt(a.lineNumber, (m) => m.slice(0, h.openingBraceIndex))), u = s.highlightSource(u);
    let p = String(u.lastLineNumber).length;
    if (o.contextLines = u.mapLines((m, b) => s.gray(String(b).padStart(p)) + " " + m).mapLines((m) => s.dim(m)).prependSymbolAt(a.lineNumber, s.bold(s.red("→"))), i) {
      let m = f + p + 1;
      m += 2, o.callArguments = (0, Nh.default)(i, m).slice(m);
    }
  }
  return o;
}
function Vh(e) {
  let t = Object.keys(nr).join("|"), n = new RegExp(String.raw`\.(${t})\(`).exec(e);
  if (n) {
    let r = n.index + n[0].length, i = e.lastIndexOf(" ", n.index) + 1;
    return { code: e.slice(i, r), openingBraceIndex: r };
  }
  return null;
}
function Zh(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) {
    if (e.charAt(n) !== " ") return t;
    t++;
  }
  return t;
}
function Bh({ functionName: e, location: t, message: n, isPanic: r, contextLines: i, callArguments: s }, o) {
  let a = [""], l = t ? " in" : ":";
  if (r ? (a.push(o.red(`Oops, an unknown error occurred! This is ${o.bold("on us")}, you did nothing wrong.`)), a.push(o.red(`It occurred in the ${o.bold(`\`${e}\``)} invocation${l}`))) : a.push(o.red(`Invalid ${o.bold(`\`${e}\``)} invocation${l}`)), t && a.push(o.underline(Wh(t))), i) {
    a.push("");
    let u = [i.toString()];
    s && (u.push(s), u.push(o.dim(")"))), a.push(u.join("")), s && a.push("");
  } else a.push(""), s && a.push(s), a.push("");
  return a.push(n), a.join(`
`);
}
function Wh(e) {
  let t = [e.fileName];
  return e.lineNumber && t.push(String(e.lineNumber)), e.columnNumber && t.push(String(e.columnNumber)), t.join(":");
}
function Ka(e) {
  let t = e.showColors ? Mh : Uh, n;
  return n = qh(e, t), Bh(n, t);
}
var Jh = we(ha());
function Hh(e, t, n) {
  let r = Ga(e), i = Kh(r), s = Qh(i);
  s ? nl(s, t, n) : t.addErrorMessage(() => "Unknown error");
}
function Ga(e) {
  return e.errors.flatMap((t) => t.kind === "Union" ? Ga(t) : [t]);
}
function Kh(e) {
  let t = /* @__PURE__ */ new Map(), n = [];
  for (let r of e) {
    if (r.kind !== "InvalidArgumentType") {
      n.push(r);
      continue;
    }
    let i = `${r.selectionPath.join(".")}:${r.argumentPath.join(".")}`, s = t.get(i);
    s ? t.set(i, { ...r, argument: { ...r.argument, typeNames: Gh(s.argument.typeNames, r.argument.typeNames) } }) : t.set(i, r);
  }
  return n.push(...t.values()), n;
}
function Gh(e, t) {
  return [...new Set(e.concat(t))];
}
function Qh(e) {
  return Rf(e, (t, n) => {
    let r = ws(t), i = ws(n);
    return r !== i ? r - i : vs(t) - vs(n);
  });
}
function ws(e) {
  let t = 0;
  return Array.isArray(e.selectionPath) && (t += e.selectionPath.length), Array.isArray(e.argumentPath) && (t += e.argumentPath.length), t;
}
function vs(e) {
  switch (e.kind) {
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
var xe = class {
  constructor(e, t) {
    g(this, "isRequired", !1);
    this.name = e, this.value = t;
  }
  makeRequired() {
    return this.isRequired = !0, this;
  }
  write(e) {
    let { colors: { green: t } } = e.context;
    e.addMarginSymbol(t(this.isRequired ? "+" : "?")), e.write(t(this.name)), this.isRequired || e.write(t("?")), e.write(t(": ")), typeof this.value == "string" ? e.write(t(this.value)) : e.write(this.value);
  }
};
Sc();
var Qa = class {
  constructor(e = 0, t) {
    g(this, "lines", []);
    g(this, "currentLine", "");
    g(this, "currentIndent", 0);
    g(this, "marginSymbol");
    g(this, "afterNextNewLineCallback");
    this.context = t, this.currentIndent = e;
  }
  write(e) {
    return typeof e == "string" ? this.currentLine += e : e.write(this), this;
  }
  writeJoined(e, t, n = (r, i) => i.write(r)) {
    let r = t.length - 1;
    for (let i = 0; i < t.length; i++) n(t[i], this), i !== r && this.write(e);
    return this;
  }
  writeLine(e) {
    return this.write(e).newLine();
  }
  newLine() {
    this.lines.push(this.indentedCurrentLine()), this.currentLine = "", this.marginSymbol = void 0;
    let e = this.afterNextNewLineCallback;
    return this.afterNextNewLineCallback = void 0, e == null || e(), this;
  }
  withIndent(e) {
    return this.indent(), e(this), this.unindent(), this;
  }
  afterNextNewline(e) {
    return this.afterNextNewLineCallback = e, this;
  }
  indent() {
    return this.currentIndent++, this;
  }
  unindent() {
    return this.currentIndent > 0 && this.currentIndent--, this;
  }
  addMarginSymbol(e) {
    return this.marginSymbol = e, this;
  }
  toString() {
    return this.lines.concat(this.indentedCurrentLine()).join(`
`);
  }
  getCurrentLineLength() {
    return this.currentLine.length;
  }
  indentedCurrentLine() {
    let e = this.currentLine.padStart(this.currentLine.length + 2 * this.currentIndent);
    return this.marginSymbol ? this.marginSymbol + e.slice(1) : e;
  }
};
Ac();
var Yh = class {
  constructor(e) {
    this.value = e;
  }
  write(e) {
    e.write(this.value);
  }
  markAsError() {
    this.value.markAsError();
  }
}, bn = (e) => e, Ya = { bold: bn, red: bn, green: bn, dim: bn, enabled: !1 }, Xh = { bold: Ee, red: ft, green: Xt, dim: cn, enabled: !0 }, Si = { write(e) {
  e.writeLine(",");
} }, rr = class {
  constructor(e) {
    g(this, "isUnderlined", !1);
    g(this, "color", (e) => e);
    this.contents = e;
  }
  underline() {
    return this.isUnderlined = !0, this;
  }
  setColor(e) {
    return this.color = e, this;
  }
  write(e) {
    let t = e.getCurrentLineLength();
    e.write(this.color(this.contents)), this.isUnderlined && e.afterNextNewline(() => {
      e.write(" ".repeat(t)).writeLine(this.color("~".repeat(this.contents.length)));
    });
  }
}, Oi = class {
  constructor() {
    g(this, "hasError", !1);
  }
  markAsError() {
    return this.hasError = !0, this;
  }
}, Xa = class extends Oi {
  constructor() {
    super(...arguments);
    g(this, "items", []);
  }
  addItem(t) {
    return this.items.push(new Yh(t)), this;
  }
  getField(t) {
    return this.items[t];
  }
  getPrintWidth() {
    return this.items.length === 0 ? 2 : Math.max(...this.items.map((t) => t.value.getPrintWidth())) + 2;
  }
  write(t) {
    if (this.items.length === 0) {
      this.writeEmpty(t);
      return;
    }
    this.writeWithItems(t);
  }
  writeEmpty(t) {
    let n = new rr("[]");
    this.hasError && n.setColor(t.context.colors.red).underline(), t.write(n);
  }
  writeWithItems(t) {
    let { colors: n } = t.context;
    t.writeLine("[").withIndent(() => t.writeJoined(Si, this.items).newLine()).write("]"), this.hasError && t.afterNextNewline(() => {
      t.writeLine(n.red("~".repeat(this.getPrintWidth())));
    });
  }
  asObject() {
  }
}, el = class Nn extends Oi {
  constructor() {
    super(...arguments);
    g(this, "fields", {});
    g(this, "suggestions", []);
  }
  addField(n) {
    this.fields[n.name] = n;
  }
  addSuggestion(n) {
    this.suggestions.push(n);
  }
  getField(n) {
    return this.fields[n];
  }
  getDeepField(n) {
    let [r, ...i] = n, s = this.getField(r);
    if (!s) return;
    let o = s;
    for (let a of i) {
      let l;
      if (o.value instanceof Nn ? l = o.value.getField(a) : o.value instanceof Xa && (l = o.value.getField(Number(a))), !l) return;
      o = l;
    }
    return o;
  }
  getDeepFieldValue(n) {
    var r;
    return n.length === 0 ? this : (r = this.getDeepField(n)) == null ? void 0 : r.value;
  }
  hasField(n) {
    return !!this.getField(n);
  }
  removeAllFields() {
    this.fields = {};
  }
  removeField(n) {
    delete this.fields[n];
  }
  getFields() {
    return this.fields;
  }
  isEmpty() {
    return Object.keys(this.fields).length === 0;
  }
  getFieldValue(n) {
    var r;
    return (r = this.getField(n)) == null ? void 0 : r.value;
  }
  getDeepSubSelectionValue(n) {
    let r = this;
    for (let i of n) {
      if (!(r instanceof Nn)) return;
      let s = r.getSubSelectionValue(i);
      if (!s) return;
      r = s;
    }
    return r;
  }
  getDeepSelectionParent(n) {
    let r = this.getSelectionParent();
    if (!r) return;
    let i = r;
    for (let s of n) {
      let o = i.value.getFieldValue(s);
      if (!o || !(o instanceof Nn)) return;
      let a = o.getSelectionParent();
      if (!a) return;
      i = a;
    }
    return i;
  }
  getSelectionParent() {
    var i, s;
    let n = (i = this.getField("select")) == null ? void 0 : i.value.asObject();
    if (n) return { kind: "select", value: n };
    let r = (s = this.getField("include")) == null ? void 0 : s.value.asObject();
    if (r) return { kind: "include", value: r };
  }
  getSubSelectionValue(n) {
    var r;
    return (r = this.getSelectionParent()) == null ? void 0 : r.value.fields[n].value;
  }
  getPrintWidth() {
    let n = Object.values(this.fields);
    return n.length == 0 ? 2 : Math.max(...n.map((r) => r.getPrintWidth())) + 2;
  }
  write(n) {
    let r = Object.values(this.fields);
    if (r.length === 0 && this.suggestions.length === 0) {
      this.writeEmpty(n);
      return;
    }
    this.writeWithContents(n, r);
  }
  asObject() {
    return this;
  }
  writeEmpty(n) {
    let r = new rr("{}");
    this.hasError && r.setColor(n.context.colors.red).underline(), n.write(r);
  }
  writeWithContents(n, r) {
    n.writeLine("{").withIndent(() => {
      n.writeJoined(Si, [...r, ...this.suggestions]).newLine();
    }), n.write("}"), this.hasError && n.afterNextNewline(() => {
      n.writeLine(n.context.colors.red("~".repeat(this.getPrintWidth())));
    });
  }
}, de = class extends Oi {
  constructor(e) {
    super(), this.text = e;
  }
  getPrintWidth() {
    return this.text.length;
  }
  write(e) {
    let t = new rr(this.text);
    this.hasError && t.underline().setColor(e.context.colors.red), e.write(t);
  }
  asObject() {
  }
}, tl = class {
  constructor() {
    g(this, "fields", []);
  }
  addField(e, t) {
    return this.fields.push({ write(n) {
      let { green: r, dim: i } = n.context.colors;
      n.write(r(i(`${e}: ${t}`))).addMarginSymbol(r(i("+")));
    } }), this;
  }
  write(e) {
    let { colors: { green: t } } = e.context;
    e.writeLine(t("{")).withIndent(() => {
      e.writeJoined(Si, this.fields).newLine();
    }).write(t("}")).addMarginSymbol(t("+"));
  }
};
function nl(e, t, n) {
  switch (e.kind) {
    case "MutuallyExclusiveFields":
      ep(e, t);
      break;
    case "IncludeOnScalar":
      tp(e, t);
      break;
    case "EmptySelection":
      np(e, t, n);
      break;
    case "UnknownSelectionField":
      op(e, t);
      break;
    case "InvalidSelectionValue":
      ap(e, t);
      break;
    case "UnknownArgument":
      lp(e, t);
      break;
    case "UnknownInputField":
      up(e, t);
      break;
    case "RequiredArgumentMissing":
      cp(e, t);
      break;
    case "InvalidArgumentType":
      dp(e, t);
      break;
    case "InvalidArgumentValue":
      fp(e, t);
      break;
    case "ValueTooLarge":
      hp(e, t);
      break;
    case "SomeFieldsMissing":
      pp(e, t);
      break;
    case "TooManyFieldsGiven":
      mp(e, t);
      break;
    case "Union":
      Hh(e, t, n);
      break;
    default:
      throw new Error("not implemented: " + e.kind);
  }
}
function ep(e, t) {
  var r, i, s;
  let n = (r = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : r.asObject();
  n && ((i = n.getField(e.firstField)) == null || i.markAsError(), (s = n.getField(e.secondField)) == null || s.markAsError()), t.addErrorMessage((o) => `Please ${o.bold("either")} use ${o.green(`\`${e.firstField}\``)} or ${o.green(`\`${e.secondField}\``)}, but ${o.red("not both")} at the same time.`);
}
function tp(e, t) {
  var o, a;
  let [n, r] = St(e.selectionPath), i = e.outputType, s = (o = t.arguments.getDeepSelectionParent(n)) == null ? void 0 : o.value;
  if (s && ((a = s.getField(r)) == null || a.markAsError(), i)) for (let l of i.fields) l.isRelation && s.addSuggestion(new xe(l.name, "true"));
  t.addErrorMessage((l) => {
    let u = `Invalid scalar field ${l.red(`\`${r}\``)} for ${l.bold("include")} statement`;
    return i ? u += ` on model ${l.bold(i.name)}. ${hn(l)}` : u += ".", u += `
Note that ${l.bold("include")} statements only accept relation fields.`, u;
  });
}
function np(e, t, n) {
  var i, s;
  let r = (i = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : i.asObject();
  if (r) {
    let o = (s = r.getField("omit")) == null ? void 0 : s.value.asObject();
    if (o) {
      rp(e, t, o);
      return;
    }
    if (r.hasField("select")) {
      ip(e, t);
      return;
    }
  }
  if (n != null && n[Yn(e.outputType.name)]) {
    sp(e, t);
    return;
  }
  t.addErrorMessage(() => `Unknown field at "${e.selectionPath.join(".")} selection"`);
}
function rp(e, t, n) {
  n.removeAllFields();
  for (let r of e.outputType.fields) n.addSuggestion(new xe(r.name, "false"));
  t.addErrorMessage((r) => `The ${r.red("omit")} statement includes every field of the model ${r.bold(e.outputType.name)}. At least one field must be included in the result`);
}
function ip(e, t) {
  var s;
  let n = e.outputType, r = (s = t.arguments.getDeepSelectionParent(e.selectionPath)) == null ? void 0 : s.value, i = (r == null ? void 0 : r.isEmpty()) ?? !1;
  r && (r.removeAllFields(), sl(r, n)), t.addErrorMessage((o) => i ? `The ${o.red("`select`")} statement for type ${o.bold(n.name)} must not be empty. ${hn(o)}` : `The ${o.red("`select`")} statement for type ${o.bold(n.name)} needs ${o.bold("at least one truthy value")}.`);
}
function sp(e, t) {
  var i, s;
  let n = new tl();
  for (let o of e.outputType.fields) o.isRelation || n.addField(o.name, "false");
  let r = new xe("omit", n).makeRequired();
  if (e.selectionPath.length === 0) t.arguments.addSuggestion(r);
  else {
    let [o, a] = St(e.selectionPath), l = (s = (i = t.arguments.getDeepSelectionParent(o)) == null ? void 0 : i.value.asObject()) == null ? void 0 : s.getField(a);
    if (l) {
      let u = (l == null ? void 0 : l.value.asObject()) ?? new el();
      u.addSuggestion(r), l.value = u;
    }
  }
  t.addErrorMessage((o) => `The global ${o.red("omit")} configuration excludes every field of the model ${o.bold(e.outputType.name)}. At least one field must be included in the result`);
}
function op(e, t) {
  let n = ol(e.selectionPath, t);
  if (n.parentKind !== "unknown") {
    n.field.markAsError();
    let r = n.parent;
    switch (n.parentKind) {
      case "select":
        sl(r, e.outputType);
        break;
      case "include":
        gp(r, e.outputType);
        break;
      case "omit":
        yp(r, e.outputType);
        break;
    }
  }
  t.addErrorMessage((r) => {
    let i = [`Unknown field ${r.red(`\`${n.fieldName}\``)}`];
    return n.parentKind !== "unknown" && i.push(`for ${r.bold(n.parentKind)} statement`), i.push(`on model ${r.bold(`\`${e.outputType.name}\``)}.`), i.push(hn(r)), i.join(" ");
  });
}
function ap(e, t) {
  let n = ol(e.selectionPath, t);
  n.parentKind !== "unknown" && n.field.value.markAsError(), t.addErrorMessage((r) => `Invalid value for selection field \`${r.red(n.fieldName)}\`: ${e.underlyingError}`);
}
function lp(e, t) {
  var i, s;
  let n = e.argumentPath[0], r = (i = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : i.asObject();
  r && ((s = r.getField(n)) == null || s.markAsError(), wp(r, e.arguments)), t.addErrorMessage((o) => rl(o, n, e.arguments.map((a) => a.name)));
}
function up(e, t) {
  var s, o, a;
  let [n, r] = St(e.argumentPath), i = (s = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : s.asObject();
  if (i) {
    (o = i.getDeepField(e.argumentPath)) == null || o.markAsError();
    let l = (a = i.getDeepFieldValue(n)) == null ? void 0 : a.asObject();
    l && al(l, e.inputType);
  }
  t.addErrorMessage((l) => rl(l, r, e.inputType.fields.map((u) => u.name)));
}
function rl(e, t, n) {
  let r = [`Unknown argument \`${e.red(t)}\`.`], i = bp(t, n);
  return i && r.push(`Did you mean \`${e.green(i)}\`?`), n.length > 0 && r.push(hn(e)), r.join(" ");
}
function cp(e, t) {
  var l, u, c;
  let n;
  t.addErrorMessage((d) => (n == null ? void 0 : n.value) instanceof de && n.value.text === "null" ? `Argument \`${d.green(s)}\` must not be ${d.red("null")}.` : `Argument \`${d.green(s)}\` is missing.`);
  let r = (l = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : l.asObject();
  if (!r) return;
  let [i, s] = St(e.argumentPath), o = new tl(), a = (u = r.getDeepFieldValue(i)) == null ? void 0 : u.asObject();
  if (a) {
    if (n = a.getField(s), n && a.removeField(s), e.inputTypes.length === 1 && e.inputTypes[0].kind === "object") {
      for (let d of e.inputTypes[0].fields) o.addField(d.name, d.typeNames.join(" | "));
      a.addSuggestion(new xe(s, o).makeRequired());
    } else {
      let d = e.inputTypes.map(il).join(" | ");
      a.addSuggestion(new xe(s, d).makeRequired());
    }
    if (e.dependentArgumentPath) {
      (c = r.getDeepField(e.dependentArgumentPath)) == null || c.markAsError();
      let [, d] = St(e.dependentArgumentPath);
      t.addErrorMessage((f) => `Argument \`${f.green(s)}\` is required because argument \`${f.green(d)}\` was provided.`);
    }
  }
}
function il(e) {
  return e.kind === "list" ? `${il(e.elementType)}[]` : e.name;
}
function dp(e, t) {
  var i, s;
  let n = e.argument.name, r = (i = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : i.asObject();
  r && ((s = r.getDeepFieldValue(e.argumentPath)) == null || s.markAsError()), t.addErrorMessage((o) => {
    let a = ir("or", e.argument.typeNames.map((l) => o.green(l)));
    return `Argument \`${o.bold(n)}\`: Invalid value provided. Expected ${a}, provided ${o.red(e.inferredType)}.`;
  });
}
function fp(e, t) {
  var i, s;
  let n = e.argument.name, r = (i = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : i.asObject();
  r && ((s = r.getDeepFieldValue(e.argumentPath)) == null || s.markAsError()), t.addErrorMessage((o) => {
    let a = [`Invalid value for argument \`${o.bold(n)}\``];
    if (e.underlyingError && a.push(`: ${e.underlyingError}`), a.push("."), e.argument.typeNames.length > 0) {
      let l = ir("or", e.argument.typeNames.map((u) => o.green(u)));
      a.push(` Expected ${l}.`);
    }
    return a.join("");
  });
}
function hp(e, t) {
  var s, o;
  let n = e.argument.name, r = (s = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : s.asObject(), i;
  if (r) {
    let a = (o = r.getDeepField(e.argumentPath)) == null ? void 0 : o.value;
    a == null || a.markAsError(), a instanceof de && (i = a.text);
  }
  t.addErrorMessage((a) => {
    let l = ["Unable to fit value"];
    return i && l.push(a.red(i)), l.push(`into a 64-bit signed integer for field \`${a.bold(n)}\``), l.join(" ");
  });
}
function pp(e, t) {
  var i, s;
  let n = e.argumentPath[e.argumentPath.length - 1], r = (i = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : i.asObject();
  if (r) {
    let o = (s = r.getDeepFieldValue(e.argumentPath)) == null ? void 0 : s.asObject();
    o && al(o, e.inputType);
  }
  t.addErrorMessage((o) => {
    let a = [`Argument \`${o.bold(n)}\` of type ${o.bold(e.inputType.name)} needs`];
    return e.constraints.minFieldCount === 1 ? e.constraints.requiredFields ? a.push(`${o.green("at least one of")} ${ir("or", e.constraints.requiredFields.map((l) => `\`${o.bold(l)}\``))} arguments.`) : a.push(`${o.green("at least one")} argument.`) : a.push(`${o.green(`at least ${e.constraints.minFieldCount}`)} arguments.`), a.push(hn(o)), a.join(" ");
  });
}
function mp(e, t) {
  var s, o;
  let n = e.argumentPath[e.argumentPath.length - 1], r = (s = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : s.asObject(), i = [];
  if (r) {
    let a = (o = r.getDeepFieldValue(e.argumentPath)) == null ? void 0 : o.asObject();
    a && (a.markAsError(), i = Object.keys(a.getFields()));
  }
  t.addErrorMessage((a) => {
    let l = [`Argument \`${a.bold(n)}\` of type ${a.bold(e.inputType.name)} needs`];
    return e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1 ? l.push(`${a.green("exactly one")} argument,`) : e.constraints.maxFieldCount == 1 ? l.push(`${a.green("at most one")} argument,`) : l.push(`${a.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`), l.push(`but you provided ${ir("and", i.map((u) => a.red(u)))}. Please choose`), e.constraints.maxFieldCount === 1 ? l.push("one.") : l.push(`${e.constraints.maxFieldCount}.`), l.join(" ");
  });
}
function sl(e, t) {
  for (let n of t.fields) e.hasField(n.name) || e.addSuggestion(new xe(n.name, "true"));
}
function gp(e, t) {
  for (let n of t.fields) n.isRelation && !e.hasField(n.name) && e.addSuggestion(new xe(n.name, "true"));
}
function yp(e, t) {
  for (let n of t.fields) !e.hasField(n.name) && !n.isRelation && e.addSuggestion(new xe(n.name, "true"));
}
function wp(e, t) {
  for (let n of t) e.hasField(n.name) || e.addSuggestion(new xe(n.name, n.typeNames.join(" | ")));
}
function ol(e, t) {
  var u, c, d, f;
  let [n, r] = St(e), i = (u = t.arguments.getDeepSubSelectionValue(n)) == null ? void 0 : u.asObject();
  if (!i) return { parentKind: "unknown", fieldName: r };
  let s = (c = i.getFieldValue("select")) == null ? void 0 : c.asObject(), o = (d = i.getFieldValue("include")) == null ? void 0 : d.asObject(), a = (f = i.getFieldValue("omit")) == null ? void 0 : f.asObject(), l = s == null ? void 0 : s.getField(r);
  return s && l ? { parentKind: "select", parent: s, field: l, fieldName: r } : (l = o == null ? void 0 : o.getField(r), o && l ? { parentKind: "include", field: l, parent: o, fieldName: r } : (l = a == null ? void 0 : a.getField(r), a && l ? { parentKind: "omit", field: l, parent: a, fieldName: r } : { parentKind: "unknown", fieldName: r }));
}
function al(e, t) {
  if (t.kind === "object") for (let n of t.fields) e.hasField(n.name) || e.addSuggestion(new xe(n.name, n.typeNames.join(" | ")));
}
function St(e) {
  let t = [...e], n = t.pop();
  if (!n) throw new Error("unexpected empty path");
  return [t, n];
}
function hn({ green: e, enabled: t }) {
  return "Available options are " + (t ? `listed in ${e("green")}` : "marked with ?") + ".";
}
function ir(e, t) {
  if (t.length === 1) return t[0];
  let n = [...t], r = n.pop();
  return `${n.join(", ")} ${e} ${r}`;
}
var vp = 3;
function bp(e, t) {
  let n = 1 / 0, r;
  for (let i of t) {
    let s = (0, Jh.default)(e, i);
    s > vp || s < n && (n = s, r = i);
  }
  return r;
}
var ll = class {
  constructor(e, t, n, r, i) {
    g(this, "modelName");
    g(this, "name");
    g(this, "typeName");
    g(this, "isList");
    g(this, "isEnum");
    this.modelName = e, this.name = t, this.typeName = n, this.isList = r, this.isEnum = i;
  }
  _toGraphQLInputType() {
    let e = this.isList ? "List" : "", t = this.isEnum ? "Enum" : "";
    return `${e}${t}${this.typeName}FieldRefInput<${this.modelName}>`;
  }
};
function ki(e) {
  return e instanceof ll;
}
var Tn = Symbol(), hr = /* @__PURE__ */ new WeakMap(), sr = class {
  constructor(e) {
    e === Tn ? hr.set(this, `Prisma.${this._getName()}`) : hr.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`);
  }
  _getName() {
    return this.constructor.name;
  }
  toString() {
    return hr.get(this);
  }
}, Ii = class extends sr {
  _getNamespace() {
    return "NullTypes";
  }
}, ai, ta, ul = (ta = class extends Ii {
  constructor() {
    super(...arguments);
    Ct(this, ai);
  }
}, ai = new WeakMap(), ta);
Ni(ul, "DbNull");
var li, na, cl = (na = class extends Ii {
  constructor() {
    super(...arguments);
    Ct(this, li);
  }
}, li = new WeakMap(), na);
Ni(cl, "JsonNull");
var ui, ra, dl = (ra = class extends Ii {
  constructor() {
    super(...arguments);
    Ct(this, ui);
  }
}, ui = new WeakMap(), ra);
Ni(dl, "AnyNull");
var _p = { instances: { DbNull: new ul(Tn), JsonNull: new cl(Tn), AnyNull: new dl(Tn) } };
function Ni(e, t) {
  Object.defineProperty(e, "name", { value: t, configurable: !0 });
}
var bs = ": ", Ep = class {
  constructor(e, t) {
    g(this, "hasError", !1);
    this.name = e, this.value = t;
  }
  markAsError() {
    this.hasError = !0;
  }
  getPrintWidth() {
    return this.name.length + this.value.getPrintWidth() + bs.length;
  }
  write(e) {
    let t = new rr(this.name);
    this.hasError && t.underline().setColor(e.context.colors.red), e.write(t).write(bs).write(this.value);
  }
}, Pp = class {
  constructor(e) {
    g(this, "arguments");
    g(this, "errorMessages", []);
    this.arguments = e;
  }
  write(e) {
    e.write(this.arguments);
  }
  addErrorMessage(e) {
    this.errorMessages.push(e);
  }
  renderAllMessages(e) {
    return this.errorMessages.map((t) => t(e)).join(`
`);
  }
};
function Ti(e) {
  return new Pp(fl(e));
}
function fl(e) {
  let t = new el();
  for (let [n, r] of Object.entries(e)) {
    let i = new Ep(n, hl(r));
    t.addField(i);
  }
  return t;
}
function hl(e) {
  if (typeof e == "string") return new de(JSON.stringify(e));
  if (typeof e == "number" || typeof e == "boolean") return new de(String(e));
  if (typeof e == "bigint") return new de(`${e}n`);
  if (e === null) return new de("null");
  if (e === void 0) return new de("undefined");
  if (Ai(e)) return new de(`new Prisma.Decimal("${e.toFixed()}")`);
  if (e instanceof Uint8Array) return Buffer.isBuffer(e) ? new de(`Buffer.alloc(${e.byteLength})`) : new de(`new Uint8Array(${e.byteLength})`);
  if (e instanceof Date) {
    let t = La(e) ? e.toISOString() : "Invalid Date";
    return new de(`new Date("${t}")`);
  }
  return e instanceof sr ? new de(`Prisma.${e._getName()}`) : ki(e) ? new de(`prisma.${Yn(e.modelName)}.$fields.${e.name}`) : Array.isArray(e) ? $p(e) : typeof e == "object" ? fl(e) : new de(Object.prototype.toString.call(e));
}
function $p(e) {
  let t = new Xa();
  for (let n of e) t.addItem(hl(n));
  return t;
}
function pl(e, t) {
  let n = t === "pretty" ? Xh : Ya, r = e.renderAllMessages(n), i = new Qa(0, { colors: n }).write(e).toString();
  return { message: r, args: i };
}
function ml({ args: e, errors: t, errorFormat: n, callsite: r, originalMethod: i, clientVersion: s, globalOmit: o }) {
  let a = Ti(e);
  for (let d of t) nl(d, a, o);
  let { message: l, args: u } = pl(a, n), c = Ka({ message: l, callsite: r, originalMethod: i, showColors: n === "pretty", callArguments: u });
  throw new Ke(c, { clientVersion: s });
}
function pn(e) {
  return e.replace(/^./, (t) => t.toLowerCase());
}
function Ap(e, t, n) {
  let r = pn(n);
  return !t.result || !(t.result.$allModels || t.result[r]) ? e : Sp({ ...e, ..._s(t.name, e, t.result.$allModels), ..._s(t.name, e, t.result[r]) });
}
function Sp(e) {
  let t = new Wt(), n = (r, i) => t.getOrCreate(r, () => i.has(r) ? [r] : (i.add(r), e[r] ? e[r].needs.flatMap((s) => n(s, i)) : [r]));
  return Ca(e, (r) => ({ ...r, needs: n(r.name, /* @__PURE__ */ new Set()) }));
}
function _s(e, t, n) {
  return n ? Ca(n, ({ needs: r, compute: i }, s) => ({ name: s, needs: r ? Object.keys(r).filter((o) => r[o]) : [], compute: Op(t, s, i) })) : {};
}
function Op(e, t, n) {
  var i;
  let r = (i = e == null ? void 0 : e[t]) == null ? void 0 : i.compute;
  return r ? (s) => n({ ...s, [t]: r(s) }) : n;
}
function kp(e, t) {
  if (!t) return e;
  let n = { ...e };
  for (let r of Object.values(t)) if (e[r.name]) for (let i of r.needs) n[i] = !0;
  return n;
}
function Ip(e, t) {
  if (!t) return e;
  let n = { ...e };
  for (let r of Object.values(t)) if (!e[r.name]) for (let i of r.needs) delete n[i];
  return n;
}
var Es = class {
  constructor(e, t) {
    g(this, "computedFieldsCache", new Wt());
    g(this, "modelExtensionsCache", new Wt());
    g(this, "queryCallbacksCache", new Wt());
    g(this, "clientExtensions", ps(() => {
      var e, t;
      return this.extension.client ? { ...(e = this.previous) == null ? void 0 : e.getAllClientExtensions(), ...this.extension.client } : (t = this.previous) == null ? void 0 : t.getAllClientExtensions();
    }));
    g(this, "batchCallbacks", ps(() => {
      var n, r;
      let e = ((n = this.previous) == null ? void 0 : n.getAllBatchQueryCallbacks()) ?? [], t = (r = this.extension.query) == null ? void 0 : r.$__internalBatch;
      return t ? e.concat(t) : e;
    }));
    this.extension = e, this.previous = t;
  }
  getAllComputedFields(e) {
    return this.computedFieldsCache.getOrCreate(e, () => {
      var t;
      return Ap((t = this.previous) == null ? void 0 : t.getAllComputedFields(e), this.extension, e);
    });
  }
  getAllClientExtensions() {
    return this.clientExtensions.get();
  }
  getAllModelExtensions(e) {
    return this.modelExtensionsCache.getOrCreate(e, () => {
      var n, r;
      let t = pn(e);
      return !this.extension.model || !(this.extension.model[t] || this.extension.model.$allModels) ? (n = this.previous) == null ? void 0 : n.getAllModelExtensions(e) : { ...(r = this.previous) == null ? void 0 : r.getAllModelExtensions(e), ...this.extension.model.$allModels, ...this.extension.model[t] };
    });
  }
  getAllQueryCallbacks(e, t) {
    return this.queryCallbacksCache.getOrCreate(`${e}:${t}`, () => {
      var s;
      let n = ((s = this.previous) == null ? void 0 : s.getAllQueryCallbacks(e, t)) ?? [], r = [], i = this.extension.query;
      return !i || !(i[e] || i.$allModels || i[t] || i.$allOperations) ? n : (i[e] !== void 0 && (i[e][t] !== void 0 && r.push(i[e][t]), i[e].$allOperations !== void 0 && r.push(i[e].$allOperations)), e !== "$none" && i.$allModels !== void 0 && (i.$allModels[t] !== void 0 && r.push(i.$allModels[t]), i.$allModels.$allOperations !== void 0 && r.push(i.$allModels.$allOperations)), i[t] !== void 0 && r.push(i[t]), i.$allOperations !== void 0 && r.push(i.$allOperations), n.concat(r));
    });
  }
  getAllBatchQueryCallbacks() {
    return this.batchCallbacks.get();
  }
}, gl = class Rn {
  constructor(t) {
    this.head = t;
  }
  static empty() {
    return new Rn();
  }
  static single(t) {
    return new Rn(new Es(t));
  }
  isEmpty() {
    return this.head === void 0;
  }
  append(t) {
    return new Rn(new Es(t, this.head));
  }
  getAllComputedFields(t) {
    var n;
    return (n = this.head) == null ? void 0 : n.getAllComputedFields(t);
  }
  getAllClientExtensions() {
    var t;
    return (t = this.head) == null ? void 0 : t.getAllClientExtensions();
  }
  getAllModelExtensions(t) {
    var n;
    return (n = this.head) == null ? void 0 : n.getAllModelExtensions(t);
  }
  getAllQueryCallbacks(t, n) {
    var r;
    return ((r = this.head) == null ? void 0 : r.getAllQueryCallbacks(t, n)) ?? [];
  }
  getAllBatchQueryCallbacks() {
    var t;
    return ((t = this.head) == null ? void 0 : t.getAllBatchQueryCallbacks()) ?? [];
  }
}, Np = class {
  constructor(e) {
    this.name = e;
  }
};
function Tp(e) {
  return e instanceof Np;
}
var yl = Symbol(), wl = class {
  constructor(e) {
    if (e !== yl) throw new Error("Skip instance can not be constructed directly");
  }
  ifUndefined(e) {
    return e === void 0 ? Rp : e;
  }
}, Rp = new wl(yl);
function pt(e) {
  return e instanceof wl;
}
var xp = { findUnique: "findUnique", findUniqueOrThrow: "findUniqueOrThrow", findFirst: "findFirst", findFirstOrThrow: "findFirstOrThrow", findMany: "findMany", count: "aggregate", create: "createOne", createMany: "createMany", createManyAndReturn: "createManyAndReturn", update: "updateOne", updateMany: "updateMany", updateManyAndReturn: "updateManyAndReturn", upsert: "upsertOne", delete: "deleteOne", deleteMany: "deleteMany", executeRaw: "executeRaw", queryRaw: "queryRaw", aggregate: "aggregate", groupBy: "groupBy", runCommandRaw: "runCommandRaw", findRaw: "findRaw", aggregateRaw: "aggregateRaw" }, vl = "explicitly `undefined` values are not allowed";
function Dp({ modelName: e, action: t, args: n, runtimeDataModel: r, extensions: i = gl.empty(), callsite: s, clientMethod: o, errorFormat: a, clientVersion: l, previewFeatures: u, globalOmit: c }) {
  let d = new Vp({ runtimeDataModel: r, modelName: e, action: t, rootArgs: n, callsite: s, extensions: i, selectionPath: [], argumentPath: [], originalMethod: o, errorFormat: a, clientVersion: l, previewFeatures: u, globalOmit: c });
  return { modelName: e, action: xp[t], query: sn(n, d) };
}
function sn({ select: e, include: t, ...n } = {}, r) {
  let i = n.omit;
  return delete n.omit, { arguments: _l(n, r), selection: Cp(e, t, i, r) };
}
function Cp(e, t, n, r) {
  return e ? (t ? r.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "include", secondField: "select", selectionPath: r.getSelectionPath() }) : n && r.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "omit", secondField: "select", selectionPath: r.getSelectionPath() }), Mp(e, r)) : jp(r, t, n);
}
function jp(e, t, n) {
  let r = {};
  return e.modelOrType && !e.isRawAction() && (r.$composites = !0, r.$scalars = !0), t && Lp(r, t, e), Fp(r, n, e), r;
}
function Lp(e, t, n) {
  for (let [r, i] of Object.entries(t)) {
    if (pt(i)) continue;
    let s = n.nestSelection(r);
    if (Ri(i, s), i === !1 || i === void 0) {
      e[r] = !1;
      continue;
    }
    let o = n.findField(r);
    if (o && o.kind !== "object" && n.throwValidationError({ kind: "IncludeOnScalar", selectionPath: n.getSelectionPath().concat(r), outputType: n.getOutputTypeDescription() }), o) {
      e[r] = sn(i === !0 ? {} : i, s);
      continue;
    }
    if (i === !0) {
      e[r] = !0;
      continue;
    }
    e[r] = sn(i, s);
  }
}
function Fp(e, t, n) {
  let r = n.getComputedFields(), i = { ...n.getGlobalOmit(), ...t }, s = Ip(i, r);
  for (let [o, a] of Object.entries(s)) {
    if (pt(a)) continue;
    Ri(a, n.nestSelection(o));
    let l = n.findField(o);
    r != null && r[o] && !l || (e[o] = !a);
  }
}
function Mp(e, t) {
  let n = {}, r = t.getComputedFields(), i = kp(e, r);
  for (let [s, o] of Object.entries(i)) {
    if (pt(o)) continue;
    let a = t.nestSelection(s);
    Ri(o, a);
    let l = t.findField(s);
    if (!(r != null && r[s] && !l)) {
      if (o === !1 || o === void 0 || pt(o)) {
        n[s] = !1;
        continue;
      }
      if (o === !0) {
        (l == null ? void 0 : l.kind) === "object" ? n[s] = sn({}, a) : n[s] = !0;
        continue;
      }
      n[s] = sn(o, a);
    }
  }
  return n;
}
function bl(e, t) {
  if (e === null) return null;
  if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return e;
  if (typeof e == "bigint") return { $type: "BigInt", value: String(e) };
  if (Ei(e)) {
    if (La(e)) return { $type: "DateTime", value: e.toISOString() };
    t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: ["Date"] }, underlyingError: "Provided Date object is invalid" });
  }
  if (Tp(e)) return { $type: "Param", value: e.name };
  if (ki(e)) return { $type: "FieldRef", value: { _ref: e.name, _container: e.modelName } };
  if (Array.isArray(e)) return Up(e, t);
  if (ArrayBuffer.isView(e)) {
    let { buffer: n, byteOffset: r, byteLength: i } = e;
    return { $type: "Bytes", value: Buffer.from(n, r, i).toString("base64") };
  }
  if (zp(e)) return e.values;
  if (Ai(e)) return { $type: "Decimal", value: e.toFixed() };
  if (e instanceof sr) {
    if (e !== _p.instances[e._getName()]) throw new Error("Invalid ObjectEnumValue");
    return { $type: "Enum", value: e._getName() };
  }
  if (qp(e)) return e.toJSON();
  if (typeof e == "object") return _l(e, t);
  t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: `We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it` });
}
function _l(e, t) {
  if (e.$type) return { $type: "Raw", value: e };
  let n = {};
  for (let r in e) {
    let i = e[r], s = t.nestArgument(r);
    pt(i) || (i !== void 0 ? n[r] = bl(i, s) : t.isPreviewFeatureOn("strictUndefinedChecks") && t.throwValidationError({ kind: "InvalidArgumentValue", argumentPath: s.getArgumentPath(), selectionPath: t.getSelectionPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: vl }));
  }
  return n;
}
function Up(e, t) {
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let i = t.nestArgument(String(r)), s = e[r];
    if (s === void 0 || pt(s)) {
      let o = s === void 0 ? "undefined" : "Prisma.skip";
      t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: i.getSelectionPath(), argumentPath: i.getArgumentPath(), argument: { name: `${t.getArgumentName()}[${r}]`, typeNames: [] }, underlyingError: `Can not use \`${o}\` value within array. Use \`null\` or filter out \`${o}\` values` });
    }
    n.push(bl(s, i));
  }
  return n;
}
function zp(e) {
  return typeof e == "object" && e !== null && e.__prismaRawParameters__ === !0;
}
function qp(e) {
  return typeof e == "object" && e !== null && typeof e.toJSON == "function";
}
function Ri(e, t) {
  e === void 0 && t.isPreviewFeatureOn("strictUndefinedChecks") && t.throwValidationError({ kind: "InvalidSelectionValue", selectionPath: t.getSelectionPath(), underlyingError: vl });
}
var Vp = class Ur {
  constructor(t) {
    g(this, "modelOrType");
    this.params = t, this.params.modelName && (this.modelOrType = this.params.runtimeDataModel.models[this.params.modelName] ?? this.params.runtimeDataModel.types[this.params.modelName]);
  }
  throwValidationError(t) {
    ml({ errors: [t], originalMethod: this.params.originalMethod, args: this.params.rootArgs ?? {}, callsite: this.params.callsite, errorFormat: this.params.errorFormat, clientVersion: this.params.clientVersion, globalOmit: this.params.globalOmit });
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
  getComputedFields() {
    if (this.params.modelName) return this.params.extensions.getAllComputedFields(this.params.modelName);
  }
  findField(t) {
    var n;
    return (n = this.modelOrType) == null ? void 0 : n.fields.find((r) => r.name === t);
  }
  nestSelection(t) {
    let n = this.findField(t), r = (n == null ? void 0 : n.kind) === "object" ? n.type : void 0;
    return new Ur({ ...this.params, modelName: r, selectionPath: this.params.selectionPath.concat(t) });
  }
  getGlobalOmit() {
    var t;
    return this.params.modelName && this.shouldApplyGlobalOmit() ? ((t = this.params.globalOmit) == null ? void 0 : t[Yn(this.params.modelName)]) ?? {} : {};
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
        return !0;
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
        return !1;
      default:
        _i(this.params.action, "Unknown action");
    }
  }
  nestArgument(t) {
    return new Ur({ ...this.params, argumentPath: this.params.argumentPath.concat(t) });
  }
};
function Ps(e) {
  if (!e._hasPreviewFlag("metrics")) throw new Ke("`metrics` preview feature must be enabled in order to access metrics API", { clientVersion: e._clientVersion });
}
var Zp = class {
  constructor(e) {
    g(this, "_client");
    this._client = e;
  }
  prometheus(e) {
    return Ps(this._client), this._client._engine.metrics({ format: "prometheus", ...e });
  }
  json(e) {
    return Ps(this._client), this._client._engine.metrics({ format: "json", ...e });
  }
}, pr = /* @__PURE__ */ new WeakMap(), zn = "$$PrismaTypedSql", Bp = class {
  constructor(e, t) {
    pr.set(this, { sql: e, values: t }), Object.defineProperty(this, zn, { value: zn });
  }
  get sql() {
    return pr.get(this).sql;
  }
  get values() {
    return pr.get(this).values;
  }
};
function El(e) {
  return e != null && e[zn] === zn;
}
var Wp = we(da()), mn = class zr {
  constructor(t, n) {
    if (t.length - 1 !== n.length) throw t.length === 0 ? new TypeError("Expected at least 1 string") : new TypeError(`Expected ${t.length} strings to have ${t.length - 1} values`);
    let r = n.reduce((o, a) => o + (a instanceof zr ? a.values.length : 1), 0);
    this.values = new Array(r), this.strings = new Array(r + 1), this.strings[0] = t[0];
    let i = 0, s = 0;
    for (; i < n.length; ) {
      let o = n[i++], a = t[i];
      if (o instanceof zr) {
        this.strings[s] += o.strings[0];
        let l = 0;
        for (; l < o.values.length; ) this.values[s++] = o.values[l++], this.strings[s] = o.strings[l];
        this.strings[s] += a;
      } else this.values[s++] = o, this.strings[s] = a;
    }
  }
  get sql() {
    let t = this.strings.length, n = 1, r = this.strings[0];
    for (; n < t; ) r += `?${this.strings[n++]}`;
    return r;
  }
  get statement() {
    let t = this.strings.length, n = 1, r = this.strings[0];
    for (; n < t; ) r += `:${n}${this.strings[n++]}`;
    return r;
  }
  get text() {
    let t = this.strings.length, n = 1, r = this.strings[0];
    for (; n < t; ) r += `$${n}${this.strings[n++]}`;
    return r;
  }
  inspect() {
    return { sql: this.sql, statement: this.statement, text: this.text, values: this.values };
  }
};
function Jp(e) {
  return new mn([e], []);
}
Jp("");
function Pl(e) {
  return { getKeys() {
    return Object.keys(e);
  }, getPropertyValue(t) {
    return e[t];
  } };
}
function Ne(e, t) {
  return { getKeys() {
    return [e];
  }, getPropertyValue() {
    return t();
  } };
}
function xi(e) {
  let t = new Wt();
  return { getKeys() {
    return e.getKeys();
  }, getPropertyValue(n) {
    return t.getOrCreate(n, () => e.getPropertyValue(n));
  }, getPropertyDescriptor(n) {
    var r;
    return (r = e.getPropertyDescriptor) == null ? void 0 : r.call(e, n);
  } };
}
var qr = { enumerable: !0, configurable: !0, writable: !0 };
function $l(e) {
  let t = new Set(e);
  return { getPrototypeOf: () => Object.prototype, getOwnPropertyDescriptor: () => qr, has: (n, r) => t.has(r), set: (n, r, i) => t.add(r) && Reflect.set(n, r, i), ownKeys: () => [...t] };
}
var $s = Symbol.for("nodejs.util.inspect.custom");
function Ot(e, t) {
  let n = Hp(t), r = /* @__PURE__ */ new Set(), i = new Proxy(e, { get(s, o) {
    if (r.has(o)) return s[o];
    let a = n.get(o);
    return a ? a.getPropertyValue(o) : s[o];
  }, has(s, o) {
    var l;
    if (r.has(o)) return !0;
    let a = n.get(o);
    return a ? ((l = a.has) == null ? void 0 : l.call(a, o)) ?? !0 : Reflect.has(s, o);
  }, ownKeys(s) {
    let o = As(Reflect.ownKeys(s), n), a = As(Array.from(n.keys()), n);
    return [.../* @__PURE__ */ new Set([...o, ...a, ...r])];
  }, set(s, o, a) {
    var l, u, c;
    return ((c = (u = (l = n.get(o)) == null ? void 0 : l.getPropertyDescriptor) == null ? void 0 : u.call(l, o)) == null ? void 0 : c.writable) === !1 ? !1 : (r.add(o), Reflect.set(s, o, a));
  }, getOwnPropertyDescriptor(s, o) {
    let a = Reflect.getOwnPropertyDescriptor(s, o);
    if (a && !a.configurable) return a;
    let l = n.get(o);
    return l ? l.getPropertyDescriptor ? { ...qr, ...l == null ? void 0 : l.getPropertyDescriptor(o) } : qr : a;
  }, defineProperty(s, o, a) {
    return r.add(o), Reflect.defineProperty(s, o, a);
  }, getPrototypeOf: () => Object.prototype });
  return i[$s] = function() {
    let s = { ...this };
    return delete s[$s], s;
  }, i;
}
function Hp(e) {
  let t = /* @__PURE__ */ new Map();
  for (let n of e) {
    let r = n.getKeys();
    for (let i of r) t.set(i, n);
  }
  return t;
}
function As(e, t) {
  return e.filter((n) => {
    var r, i;
    return ((i = (r = t.get(n)) == null ? void 0 : r.has) == null ? void 0 : i.call(r, n)) ?? !0;
  });
}
function Vr(e) {
  return { getKeys() {
    return e;
  }, has() {
    return !1;
  }, getPropertyValue() {
  } };
}
function Di(e, t) {
  return { batch: e, transaction: (t == null ? void 0 : t.kind) === "batch" ? { isolationLevel: t.options.isolationLevel } : void 0 };
}
function Kp(e) {
  if (e === void 0) return "";
  let t = Ti(e);
  return new Qa(0, { colors: Ya }).write(t).toString();
}
var Gp = "P2037";
function Ci({ error: e, user_facing_error: t }, n, r) {
  return t.error_code ? new ht(Qp(t, r), { code: t.error_code, clientVersion: n, meta: t.meta, batchRequestIdx: t.batch_request_idx }) : new ge(e, { clientVersion: n, batchRequestIdx: t.batch_request_idx });
}
function Qp(e, t) {
  let n = e.message;
  return (t === "postgresql" || t === "postgres" || t === "mysql") && e.error_code === Gp && (n += `
Prisma Accelerate has built-in connection pooling to prevent such errors: https://pris.ly/client/error-accelerate`), n;
}
var gn = "<unknown>";
function Yp(e) {
  var t = e.split(`
`);
  return t.reduce(function(n, r) {
    var i = tm(r) || rm(r) || om(r) || cm(r) || lm(r);
    return i && n.push(i), n;
  }, []);
}
var Xp = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|rsc|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, em = /\((\S*)(?::(\d+))(?::(\d+))\)/;
function tm(e) {
  var t = Xp.exec(e);
  if (!t) return null;
  var n = t[2] && t[2].indexOf("native") === 0, r = t[2] && t[2].indexOf("eval") === 0, i = em.exec(t[2]);
  return r && i != null && (t[2] = i[1], t[3] = i[2], t[4] = i[3]), { file: n ? null : t[2], methodName: t[1] || gn, arguments: n ? [t[2]] : [], lineNumber: t[3] ? +t[3] : null, column: t[4] ? +t[4] : null };
}
var nm = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|rsc|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function rm(e) {
  var t = nm.exec(e);
  return t ? { file: t[2], methodName: t[1] || gn, arguments: [], lineNumber: +t[3], column: t[4] ? +t[4] : null } : null;
}
var im = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|rsc|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i, sm = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
function om(e) {
  var t = im.exec(e);
  if (!t) return null;
  var n = t[3] && t[3].indexOf(" > eval") > -1, r = sm.exec(t[3]);
  return n && r != null && (t[3] = r[1], t[4] = r[2], t[5] = null), { file: t[3], methodName: t[1] || gn, arguments: t[2] ? t[2].split(",") : [], lineNumber: t[4] ? +t[4] : null, column: t[5] ? +t[5] : null };
}
var am = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
function lm(e) {
  var t = am.exec(e);
  return t ? { file: t[3], methodName: t[1] || gn, arguments: [], lineNumber: +t[4], column: t[5] ? +t[5] : null } : null;
}
var um = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function cm(e) {
  var t = um.exec(e);
  return t ? { file: t[2], methodName: t[1] || gn, arguments: [], lineNumber: +t[3], column: t[4] ? +t[4] : null } : null;
}
var dm = class {
  getLocation() {
    return null;
  }
}, fm = class {
  constructor() {
    g(this, "_error");
    this._error = new Error();
  }
  getLocation() {
    let e = this._error.stack;
    if (!e) return null;
    let t = Yp(e).find((n) => {
      if (!n.file) return !1;
      let r = Sf(n.file);
      return r !== "<anonymous>" && !r.includes("@prisma") && !r.includes("/packages/client/src/runtime/") && !r.endsWith("/runtime/binary.js") && !r.endsWith("/runtime/library.js") && !r.endsWith("/runtime/edge.js") && !r.endsWith("/runtime/edge-esm.js") && !r.startsWith("internal/") && !n.methodName.includes("new ") && !n.methodName.includes("getCallSite") && !n.methodName.includes("Proxy.") && n.methodName.split(".").length < 4;
    });
    return !t || !t.file ? null : { fileName: t.file, lineNumber: t.lineNumber, columnNumber: t.column };
  }
};
function Jt(e) {
  return e === "minimal" ? typeof $EnabledCallSite == "function" && e !== "minimal" ? new $EnabledCallSite() : new dm() : new fm();
}
var hm = { _avg: !0, _count: !0, _sum: !0, _min: !0, _max: !0 };
function qn(e = {}) {
  let t = pm(e);
  return Object.entries(t).reduce((n, [r, i]) => (hm[r] !== void 0 ? n.select[r] = { select: i } : n[r] = i, n), { select: {} });
}
function pm(e = {}) {
  return typeof e._count == "boolean" ? { ...e, _count: { _all: e._count } } : e;
}
function Zr(e = {}) {
  return (t) => (typeof e._count == "boolean" && (t._count = t._count._all), t);
}
function mm(e, t) {
  let n = Zr(e);
  return t({ action: "aggregate", unpacker: n, argsMapper: qn })(e);
}
function gm(e = {}) {
  let { select: t, ...n } = e;
  return qn(typeof t == "object" ? { ...n, _count: t } : { ...n, _count: { _all: !0 } });
}
function ym(e = {}) {
  return typeof e.select == "object" ? (t) => Zr(e)(t)._count : (t) => Zr(e)(t)._count._all;
}
function wm(e, t) {
  return t({ action: "count", unpacker: ym(e), argsMapper: gm })(e);
}
function vm(e = {}) {
  let t = qn(e);
  if (Array.isArray(t.by)) for (let n of t.by) typeof n == "string" && (t.select[n] = !0);
  else typeof t.by == "string" && (t.select[t.by] = !0);
  return t;
}
function bm(e = {}) {
  return (t) => (typeof (e == null ? void 0 : e._count) == "boolean" && t.forEach((n) => {
    n._count = n._count._all;
  }), t);
}
function _m(e, t) {
  return t({ action: "groupBy", unpacker: bm(e), argsMapper: vm })(e);
}
function Em(e, t, n) {
  if (t === "aggregate") return (r) => mm(r, n);
  if (t === "count") return (r) => wm(r, n);
  if (t === "groupBy") return (r) => _m(r, n);
}
function Pm(e, t) {
  let n = t.fields.filter((i) => !i.relationName), r = Df(n, "name");
  return new Proxy({}, { get(i, s) {
    if (s in i || typeof s == "symbol") return i[s];
    let o = r[s];
    if (o) return new ll(e, s, o.type, o.isList, o.kind === "enum");
  }, ...$l(Object.keys(r)) });
}
var Al = (e) => Array.isArray(e) ? e : e.split("."), Sl = (e, t) => Al(t).reduce((n, r) => n && n[r], e), $m = (e, t, n) => Al(t).reduceRight((r, i, s, o) => Object.assign({}, Sl(e, o.slice(0, s)), { [i]: r }), n);
function Am(e, t) {
  return e === void 0 || t === void 0 ? [] : [...t, "select", e];
}
function Sm(e, t, n) {
  return t === void 0 ? e ?? {} : $m(t, n, e || !0);
}
function Ol(e, t, n, r, i, s) {
  let o = e._runtimeDataModel.models[t].fields.reduce((a, l) => ({ ...a, [l.name]: l }), {});
  return (a) => {
    let l = Jt(e._errorFormat), u = Am(r, i), c = Sm(a, s, u), d = n({ dataPath: u, callsite: l })(c), f = Om(e, t);
    return new Proxy(d, { get(h, p) {
      if (!f.includes(p)) return h[p];
      let m = [o[p].type, n, p], b = [u, c];
      return Ol(e, ...m, ...b);
    }, ...$l([...f, ...Object.getOwnPropertyNames(d)]) });
  };
}
function Om(e, t) {
  return e._runtimeDataModel.models[t].fields.filter((n) => n.kind === "object").map((n) => n.name);
}
var km = ["findUnique", "findUniqueOrThrow", "findFirst", "findFirstOrThrow", "create", "update", "upsert", "delete"], Im = ["aggregate", "count", "groupBy"];
function Ss(e, t) {
  let n = e._extensions.getAllModelExtensions(t) ?? {}, r = [Nm(e, t), Rm(e, t), Pl(n), Ne("name", () => t), Ne("$name", () => t), Ne("$parent", () => e._appliedParent)];
  return Ot({}, r);
}
function Nm(e, t) {
  let n = pn(t), r = Object.keys(nr).concat("count");
  return { getKeys() {
    return r;
  }, getPropertyValue(i) {
    let s = i, o = (a) => (l) => {
      let u = Jt(e._errorFormat);
      return e._createPrismaPromise((c) => {
        let d = { args: l, dataPath: [], action: s, model: t, clientMethod: `${n}.${i}`, jsModelName: n, transaction: c, callsite: u };
        return e._request({ ...d, ...a });
      }, { action: s, args: l, model: t });
    };
    return km.includes(s) ? Ol(e, t, o) : Tm(i) ? Em(e, i, o) : o({});
  } };
}
function Tm(e) {
  return Im.includes(e);
}
function Rm(e, t) {
  return xi(Ne("fields", () => {
    let n = e._runtimeDataModel.models[t];
    return Pm(t, n);
  }));
}
function xm(e) {
  return e.replace(/^./, (t) => t.toUpperCase());
}
var Br = Symbol();
function Wr(e) {
  let t = [Dm(e), Cm(e), Ne(Br, () => e), Ne("$parent", () => e._appliedParent)], n = e._extensions.getAllClientExtensions();
  return n && t.push(Pl(n)), Ot(e, t);
}
function Dm(e) {
  let t = Object.getPrototypeOf(e._originalClient), n = [...new Set(Object.getOwnPropertyNames(t))];
  return { getKeys() {
    return n;
  }, getPropertyValue(r) {
    return e[r];
  } };
}
function Cm(e) {
  let t = Object.keys(e._runtimeDataModel.models), n = t.map(pn), r = [...new Set(t.concat(n))];
  return xi({ getKeys() {
    return r;
  }, getPropertyValue(i) {
    let s = xm(i);
    if (e._runtimeDataModel.models[s] !== void 0) return Ss(e, s);
    if (e._runtimeDataModel.models[i] !== void 0) return Ss(e, i);
  }, getPropertyDescriptor(i) {
    if (!n.includes(i)) return { enumerable: !1 };
  } });
}
function jm(e) {
  return e[Br] ? e[Br] : e;
}
function Lm(e) {
  var n;
  if (typeof e == "function") return e(this);
  if ((n = e.client) != null && n.__AccelerateEngine) {
    let r = e.client.__AccelerateEngine;
    this._originalClient._engine = new r(this._originalClient._accelerateEngineConfig);
  }
  let t = Object.create(this._originalClient, { _extensions: { value: this._extensions.append(e) }, _appliedParent: { value: this, configurable: !0 }, $on: { value: void 0 } });
  return Wr(t);
}
function Fm({ result: e, modelName: t, select: n, omit: r, extensions: i }) {
  let s = i.getAllComputedFields(t);
  if (!s) return e;
  let o = [], a = [];
  for (let l of Object.values(s)) {
    if (r) {
      if (r[l.name]) continue;
      let u = l.needs.filter((c) => r[c]);
      u.length > 0 && a.push(Vr(u));
    } else if (n) {
      if (!n[l.name]) continue;
      let u = l.needs.filter((c) => !n[c]);
      u.length > 0 && a.push(Vr(u));
    }
    Mm(e, l.needs) && o.push(Um(l, Ot(e, o)));
  }
  return o.length > 0 || a.length > 0 ? Ot(e, [...o, ...a]) : e;
}
function Mm(e, t) {
  return t.every((n) => Tf(e, n));
}
function Um(e, t) {
  return xi(Ne(e.name, () => e.compute(t)));
}
function ji({ visitor: e, result: t, args: n, runtimeDataModel: r, modelName: i }) {
  if (Array.isArray(t)) {
    for (let o = 0; o < t.length; o++) t[o] = ji({ result: t[o], args: n, modelName: i, runtimeDataModel: r, visitor: e });
    return t;
  }
  let s = e(t, i, n) ?? t;
  return n.include && Os({ includeOrSelect: n.include, result: s, parentModelName: i, runtimeDataModel: r, visitor: e }), n.select && Os({ includeOrSelect: n.select, result: s, parentModelName: i, runtimeDataModel: r, visitor: e }), s;
}
function Os({ includeOrSelect: e, result: t, parentModelName: n, runtimeDataModel: r, visitor: i }) {
  for (let [s, o] of Object.entries(e)) {
    if (!o || t[s] == null || pt(o)) continue;
    let a = r.models[n].fields.find((u) => u.name === s);
    if (!a || a.kind !== "object" || !a.relationName) continue;
    let l = typeof o == "object" ? o : {};
    t[s] = ji({ visitor: i, result: t[s], args: l, modelName: a.type, runtimeDataModel: r });
  }
}
function zm({ result: e, modelName: t, args: n, extensions: r, runtimeDataModel: i, globalOmit: s }) {
  return r.isEmpty() || e == null || typeof e != "object" || !i.models[t] ? e : ji({ result: e, args: n ?? {}, modelName: t, runtimeDataModel: i, visitor: (o, a, l) => {
    let u = pn(a);
    return Fm({ result: o, modelName: u, select: l.select, omit: l.select ? void 0 : { ...s == null ? void 0 : s[u], ...l.omit }, extensions: r });
  } });
}
var qm = ["$connect", "$disconnect", "$on", "$transaction", "$extends"], Vm = qm;
function Zm(e) {
  if (e instanceof mn) return Bm(e);
  if (El(e)) return Wm(e);
  if (Array.isArray(e)) {
    let n = [e[0]];
    for (let r = 1; r < e.length; r++) n[r] = Ht(e[r]);
    return n;
  }
  let t = {};
  for (let n in e) t[n] = Ht(e[n]);
  return t;
}
function Bm(e) {
  return new mn(e.strings, e.values);
}
function Wm(e) {
  return new Bp(e.sql, e.values);
}
function Ht(e) {
  if (typeof e != "object" || e == null || e instanceof sr || ki(e)) return e;
  if (Ai(e)) return new $i(e.toFixed());
  if (Ei(e)) return /* @__PURE__ */ new Date(+e);
  if (ArrayBuffer.isView(e)) return e.slice(0);
  if (Array.isArray(e)) {
    let t = e.length, n;
    for (n = Array(t); t--; ) n[t] = Ht(e[t]);
    return n;
  }
  if (typeof e == "object") {
    let t = {};
    for (let n in e) n === "__proto__" ? Object.defineProperty(t, n, { value: Ht(e[n]), configurable: !0, enumerable: !0, writable: !0 }) : t[n] = Ht(e[n]);
    return t;
  }
  _i(e, "Unknown value");
}
function kl(e, t, n, r = 0) {
  return e._createPrismaPromise((i) => {
    var o;
    let s = t.customDataProxyFetch;
    return "transaction" in t && i !== void 0 && (((o = t.transaction) == null ? void 0 : o.kind) === "batch" && t.transaction.lock.then(), t.transaction = i), r === n.length ? e._executeRequest(t) : n[r]({ model: t.model, operation: t.model ? t.action : t.clientMethod, args: Zm(t.args ?? {}), __internalParams: t, query: (a, l = t) => {
      let u = l.customDataProxyFetch;
      return l.customDataProxyFetch = Nl(s, u), l.args = a, kl(e, l, n, r + 1);
    } });
  });
}
function Jm(e, t) {
  let { jsModelName: n, action: r, clientMethod: i } = t, s = n ? r : i;
  if (e._extensions.isEmpty()) return e._executeRequest(t);
  let o = e._extensions.getAllQueryCallbacks(n ?? "$none", s);
  return kl(e, t, o);
}
function Hm(e) {
  return (t) => {
    let n = { requests: t }, r = t[0].extensions.getAllBatchQueryCallbacks();
    return r.length ? Il(n, r, 0, e) : e(n);
  };
}
function Il(e, t, n, r) {
  if (n === t.length) return r(e);
  let i = e.customDataProxyFetch, s = e.requests[0].transaction;
  return t[n]({ args: { queries: e.requests.map((o) => ({ model: o.modelName, operation: o.action, args: o.args })), transaction: s ? { isolationLevel: s.kind === "batch" ? s.isolationLevel : void 0 } : void 0 }, __internalParams: e, query(o, a = e) {
    let l = a.customDataProxyFetch;
    return a.customDataProxyFetch = Nl(i, l), Il(a, t, n + 1, r);
  } });
}
var ks = (e) => e;
function Nl(e = ks, t = ks) {
  return (n) => e(t(n));
}
var Is = fe("prisma:client"), Ns = { Vercel: "vercel", "Netlify CI": "netlify" };
function Km({ postinstall: e, ciName: t, clientVersion: n, generator: r }) {
  if (Is("checkPlatformCaching:postinstall", e), Is("checkPlatformCaching:ciName", t), e === !0 && !(r != null && r.output && typeof (r.output.fromEnvVar ?? r.output.value) == "string") && t && t in Ns) {
    let i = `Prisma has detected that this project was built on ${t}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${Ns[t]}-build`;
    throw console.error(i), new ee(i, n);
  }
}
function Gm(e, t) {
  return e ? e.datasources ? e.datasources : e.datasourceUrl ? { [t[0]]: { url: e.datasourceUrl } } : {} : {};
}
function Tl(e) {
  let { runtimeBinaryTarget: t } = e;
  return `Add "${t}" to \`binaryTargets\` in the "schema.prisma" file and run \`prisma generate\` after saving it:

${Qm(e)}`;
}
function Qm(e) {
  let { generator: t, generatorBinaryTargets: n, runtimeBinaryTarget: r } = e, i = { fromEnvVar: null, value: r }, s = [...n, i];
  return mf({ ...t, binaryTargets: s });
}
function or(e) {
  let { runtimeBinaryTarget: t } = e;
  return `Prisma Client could not locate the Query Engine for runtime "${t}".`;
}
function ar(e) {
  let { searchedLocations: t } = e;
  return `The following locations have been searched:
${[...new Set(t)].map((n) => `  ${n}`).join(`
`)}`;
}
function Ym(e) {
  let { runtimeBinaryTarget: t } = e;
  return `${or(e)}

This happened because \`binaryTargets\` have been pinned, but the actual deployment also required "${t}".
${Tl(e)}

${ar(e)}`;
}
function Rl(e) {
  return `We would appreciate if you could take the time to share some information with us.
Please help us by answering a few questions: https://pris.ly/${e}`;
}
function xl(e) {
  let { errorStack: t } = e;
  return t != null && t.match(/\/\.next|\/next@|\/next\//) ? `

We detected that you are using Next.js, learn how to fix this: https://pris.ly/d/engine-not-found-nextjs.` : "";
}
function Xm(e) {
  let { queryEngineName: t } = e;
  return `${or(e)}${xl(e)}

This is likely caused by a bundler that has not copied "${t}" next to the resulting bundle.
Ensure that "${t}" has been copied next to the bundle or in "${e.expectedLocation}".

${Rl("engine-not-found-bundler-investigation")}

${ar(e)}`;
}
function eg(e) {
  let { runtimeBinaryTarget: t, generatorBinaryTargets: n } = e, r = n.find((i) => i.native);
  return `${or(e)}

This happened because Prisma Client was generated for "${(r == null ? void 0 : r.value) ?? "unknown"}", but the actual deployment required "${t}".
${Tl(e)}

${ar(e)}`;
}
function tg(e) {
  let { queryEngineName: t } = e;
  return `${or(e)}${xl(e)}

This is likely caused by tooling that has not copied "${t}" to the deployment folder.
Ensure that you ran \`prisma generate\` and that "${t}" has been copied to "${e.expectedLocation}".

${Rl("engine-not-found-tooling-investigation")}

${ar(e)}`;
}
var ng = fe("prisma:client:engines:resolveEnginePath"), rg = () => new RegExp("runtime[\\\\/]library\\.m?js$");
async function ig(e, t) {
  var f;
  let n = { binary: k.env.PRISMA_QUERY_ENGINE_BINARY, library: k.env.PRISMA_QUERY_ENGINE_LIBRARY }[e] ?? t.prismaPath;
  if (n !== void 0) return n;
  let { enginePath: r, searchedLocations: i } = await sg(e, t);
  if (ng("enginePath", r), r !== void 0) return t.prismaPath = r;
  let s = await yi(), o = ((f = t.generator) == null ? void 0 : f.binaryTargets) ?? [], a = o.some((h) => h.native), l = !o.some((h) => h.value === s), u = di.match(rg()) === null, c = { searchedLocations: i, generatorBinaryTargets: o, generator: t.generator, runtimeBinaryTarget: s, queryEngineName: Dl(e, s), expectedLocation: $.relative(k.cwd(), t.dirname), errorStack: new Error().stack }, d;
  throw a && l ? d = eg(c) : l ? d = Ym(c) : u ? d = Xm(c) : d = tg(c), new ee(d, t.clientVersion);
}
async function sg(e, t) {
  var s, o;
  let n = await yi(), r = [], i = [t.dirname, $.resolve(__dirname, ".."), ((o = (s = t.generator) == null ? void 0 : s.output) == null ? void 0 : o.value) ?? __dirname, $.resolve(__dirname, "../../../.prisma/client"), "/tmp/prisma-engines", t.cwd];
  di.includes("resolveEnginePath") && i.push(lf());
  for (let a of i) {
    let l = Dl(e, n), u = $.join(a, l);
    if (r.push(a), dt.existsSync(u)) return { enginePath: u, searchedLocations: r };
  }
  return { enginePath: void 0, searchedLocations: r };
}
function Dl(e, t) {
  return nd(t);
}
function og(e) {
  return e ? e.replace(/".*"/g, '"X"').replace(/[\s:\[]([+-]?([0-9]*[.])?[0-9]+)/g, (t) => `${t[0]}5`) : "";
}
function ag(e) {
  return e.split(`
`).map((t) => t.replace(/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)\s*/, "").replace(/\+\d+\s*ms$/, "")).join(`
`);
}
var lg = we($c());
function ug({ title: e, user: t = "prisma", repo: n = "prisma", template: r = "bug_report.yml", body: i }) {
  return (0, lg.default)({ user: t, repo: n, template: r, title: e, body: i });
}
function cg({ version: e, binaryTarget: t, title: n, description: r, engineVersion: i, database: s, query: o }) {
  var f;
  let a = Yc(6e3 - ((o == null ? void 0 : o.length) ?? 0)), l = ag(Dr(a)), u = r ? `# Description
\`\`\`
${r}
\`\`\`` : "", c = Dr(`Hi Prisma Team! My Prisma Client just crashed. This is the report:
## Versions

| Name            | Version            |
|-----------------|--------------------|
| Node            | ${(f = k.version) == null ? void 0 : f.padEnd(19)}| 
| OS              | ${t == null ? void 0 : t.padEnd(19)}|
| Prisma Client   | ${e == null ? void 0 : e.padEnd(19)}|
| Query Engine    | ${i == null ? void 0 : i.padEnd(19)}|
| Database        | ${s == null ? void 0 : s.padEnd(19)}|

${u}

## Logs
\`\`\`
${l}
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
${o ? og(o) : ""}
\`\`\`
`), d = ug({ title: n, body: c });
  return `${n}

This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

${me(d)}

If you want the Prisma team to look into it, please open the link above 🙏
To increase the chance of success, please post your schema and a snippet of
how you used Prisma Client in the issue. 
`;
}
function dg(e, t) {
  throw new Error(t);
}
function fg(e) {
  return e !== null && typeof e == "object" && typeof e.$type == "string";
}
function hg(e, t) {
  let n = {};
  for (let r of Object.keys(e)) n[r] = t(e[r], r);
  return n;
}
function Jr(e) {
  return e === null ? e : Array.isArray(e) ? e.map(Jr) : typeof e == "object" ? fg(e) ? pg(e) : e.constructor !== null && e.constructor.name !== "Object" ? e : hg(e, Jr) : e;
}
function pg({ $type: e, value: t }) {
  switch (e) {
    case "BigInt":
      return BigInt(t);
    case "Bytes": {
      let { buffer: n, byteOffset: r, byteLength: i } = Buffer.from(t, "base64");
      return new Uint8Array(n, r, i);
    }
    case "DateTime":
      return new Date(t);
    case "Decimal":
      return new gt(t);
    case "Json":
      return JSON.parse(t);
    default:
      dg(t, "Unknown tagged value");
  }
}
var mg = "6.19.3", gg = () => {
  var e, t;
  return ((t = (e = globalThis.process) == null ? void 0 : e.release) == null ? void 0 : t.name) === "node";
}, yg = () => {
  var e, t;
  return !!globalThis.Bun || !!((t = (e = globalThis.process) == null ? void 0 : e.versions) != null && t.bun);
}, wg = () => !!globalThis.Deno, vg = () => typeof globalThis.Netlify == "object", bg = () => typeof globalThis.EdgeRuntime == "object", _g = () => {
  var e;
  return ((e = globalThis.navigator) == null ? void 0 : e.userAgent) === "Cloudflare-Workers";
};
function Eg() {
  return [[vg, "netlify"], [bg, "edge-light"], [_g, "workerd"], [wg, "deno"], [yg, "bun"], [gg, "node"]].flatMap((e) => e[0]() ? [e[1]] : []).at(0) ?? "";
}
var Pg = { node: "Node.js", workerd: "Cloudflare Workers", deno: "Deno and Deno Deploy", netlify: "Netlify Edge Functions", "edge-light": "Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)" };
function $g() {
  let e = Eg();
  return { id: e, prettyName: Pg[e] || e, isEdge: ["workerd", "deno", "netlify", "edge-light"].includes(e) };
}
function Li({ inlineDatasources: e, overrideDatasources: t, env: n, clientVersion: r }) {
  var l, u;
  let i, s = Object.keys(e)[0], o = (l = e[s]) == null ? void 0 : l.url, a = (u = t[s]) == null ? void 0 : u.url;
  if (s === void 0 ? i = void 0 : a ? i = a : o != null && o.value ? i = o.value : o != null && o.fromEnvVar && (i = n[o.fromEnvVar]), (o == null ? void 0 : o.fromEnvVar) !== void 0 && i === void 0) throw new ee(`error: Environment variable not found: ${o.fromEnvVar}.`, r);
  if (i === void 0) throw new ee("error: Missing URL environment variable, value, or override.", r);
  return i;
}
var Ag = class extends Error {
  constructor(t, n) {
    super(t);
    g(this, "clientVersion");
    g(this, "cause");
    this.clientVersion = n.clientVersion, this.cause = n.cause;
  }
  get [Symbol.toStringTag]() {
    return this.name;
  }
}, Tt = class extends Ag {
  constructor(t, n) {
    super(t, n);
    g(this, "isRetryable");
    this.isRetryable = n.isRetryable ?? !0;
  }
};
function le(e, t) {
  return { ...e, isRetryable: t };
}
var xn = class extends Tt {
  constructor(t, n) {
    super(t, le(n, !1));
    g(this, "name", "InvalidDatasourceError");
    g(this, "code", "P6001");
  }
};
Y(xn, "InvalidDatasourceError");
function Sg(e) {
  let t = { clientVersion: e.clientVersion }, n = Object.keys(e.inlineDatasources)[0], r = Li({ inlineDatasources: e.inlineDatasources, overrideDatasources: e.overrideDatasources, clientVersion: e.clientVersion, env: { ...e.env, ...typeof k < "u" ? k.env : {} } }), i;
  try {
    i = new URL(r);
  } catch {
    throw new xn(`Error validating datasource \`${n}\`: the URL must start with the protocol \`prisma://\``, t);
  }
  let { protocol: s, searchParams: o } = i;
  if (s !== "prisma:" && s !== Ia) throw new xn(`Error validating datasource \`${n}\`: the URL must start with the protocol \`prisma://\` or \`prisma+postgres://\``, t);
  let a = o.get("api_key");
  if (a === null || a.length < 1) throw new xn(`Error validating datasource \`${n}\`: the URL must contain a valid API key`, t);
  let l = hf(i) ? "http:" : "https:";
  k.env.TEST_CLIENT_ENGINE_REMOTE_EXECUTOR && i.searchParams.has("use_http") && (l = "http:");
  let u = new URL(i.href.replace(s, l));
  return { apiKey: a, url: u };
}
var Og = we(hi()), Kn, Cl, ia, kg = (ia = class {
  constructor({ apiKey: e, tracingHelper: t, logLevel: n, logQueries: r, engineHash: i }) {
    Ct(this, Kn);
    g(this, "apiKey");
    g(this, "tracingHelper");
    g(this, "logLevel");
    g(this, "logQueries");
    g(this, "engineHash");
    this.apiKey = e, this.tracingHelper = t, this.logLevel = n, this.logQueries = r, this.engineHash = i;
  }
  build({ traceparent: e, transactionId: t } = {}) {
    let n = { Accept: "application/json", Authorization: `Bearer ${this.apiKey}`, "Content-Type": "application/json", "Prisma-Engine-Hash": this.engineHash, "Prisma-Engine-Version": Og.enginesVersion };
    this.tracingHelper.isEnabled() && (n.traceparent = e ?? this.tracingHelper.getTraceParent()), t && (n["X-Transaction-Id"] = t);
    let r = ns(this, Kn, Cl).call(this);
    return r.length > 0 && (n["X-Capture-Telemetry"] = r.join(", ")), n;
  }
}, Kn = new WeakSet(), Cl = function() {
  let e = [];
  return this.tracingHelper.isEnabled() && e.push("tracing"), this.logLevel && e.push(this.logLevel), this.logQueries && e.push("query"), e;
}, ia);
function Ig(e) {
  return e[0] * 1e3 + e[1] / 1e6;
}
function Ts(e) {
  return new Date(Ig(e));
}
var Hr = class extends Tt {
  constructor(t) {
    super("This request must be retried", le(t, !0));
    g(this, "name", "ForcedRetryError");
    g(this, "code", "P5001");
  }
};
Y(Hr, "ForcedRetryError");
var Fi = class extends Tt {
  constructor(t, n) {
    super(t, le(n, !1));
    g(this, "name", "NotImplementedYetError");
    g(this, "code", "P5004");
  }
};
Y(Fi, "NotImplementedYetError");
var be = class extends Tt {
  constructor(t, n) {
    super(t, n);
    g(this, "response");
    this.response = n.response;
    let r = this.response.headers.get("prisma-request-id");
    if (r) {
      let i = `(The request id was: ${r})`;
      this.message = this.message + " " + i;
    }
  }
}, Mi = class extends be {
  constructor(t) {
    super("Schema needs to be uploaded", le(t, !0));
    g(this, "name", "SchemaMissingError");
    g(this, "code", "P5005");
  }
};
Y(Mi, "SchemaMissingError");
var jl = "This request could not be understood by the server", Ll = class extends be {
  constructor(t, n, r) {
    super(n || jl, le(t, !1));
    g(this, "name", "BadRequestError");
    g(this, "code", "P5000");
    r && (this.code = r);
  }
};
Y(Ll, "BadRequestError");
var Fl = class extends be {
  constructor(t, n) {
    super("Engine not started: healthcheck timeout", le(t, !0));
    g(this, "name", "HealthcheckTimeoutError");
    g(this, "code", "P5013");
    g(this, "logs");
    this.logs = n;
  }
};
Y(Fl, "HealthcheckTimeoutError");
var Ml = class extends be {
  constructor(t, n, r) {
    super(n, le(t, !0));
    g(this, "name", "EngineStartupError");
    g(this, "code", "P5014");
    g(this, "logs");
    this.logs = r;
  }
};
Y(Ml, "EngineStartupError");
var Ul = class extends be {
  constructor(t) {
    super("Engine version is not supported", le(t, !1));
    g(this, "name", "EngineVersionNotSupportedError");
    g(this, "code", "P5012");
  }
};
Y(Ul, "EngineVersionNotSupportedError");
var zl = "Request timed out", ql = class extends be {
  constructor(t, n = zl) {
    super(n, le(t, !1));
    g(this, "name", "GatewayTimeoutError");
    g(this, "code", "P5009");
  }
};
Y(ql, "GatewayTimeoutError");
var Ng = "Interactive transaction error", Vl = class extends be {
  constructor(t, n = Ng) {
    super(n, le(t, !1));
    g(this, "name", "InteractiveTransactionError");
    g(this, "code", "P5015");
  }
};
Y(Vl, "InteractiveTransactionError");
var Tg = "Request parameters are invalid", Zl = class extends be {
  constructor(t, n = Tg) {
    super(n, le(t, !1));
    g(this, "name", "InvalidRequestError");
    g(this, "code", "P5011");
  }
};
Y(Zl, "InvalidRequestError");
var Bl = "Requested resource does not exist", Wl = class extends be {
  constructor(t, n = Bl) {
    super(n, le(t, !1));
    g(this, "name", "NotFoundError");
    g(this, "code", "P5003");
  }
};
Y(Wl, "NotFoundError");
var Jl = "Unknown server error", Kr = class extends be {
  constructor(t, n, r) {
    super(n || Jl, le(t, !0));
    g(this, "name", "ServerError");
    g(this, "code", "P5006");
    g(this, "logs");
    this.logs = r;
  }
};
Y(Kr, "ServerError");
var Hl = "Unauthorized, check your connection string", Kl = class extends be {
  constructor(t, n = Hl) {
    super(n, le(t, !1));
    g(this, "name", "UnauthorizedError");
    g(this, "code", "P5007");
  }
};
Y(Kl, "UnauthorizedError");
var Gl = "Usage exceeded, retry again later", Ql = class extends be {
  constructor(t, n = Gl) {
    super(n, le(t, !0));
    g(this, "name", "UsageExceededError");
    g(this, "code", "P5008");
  }
};
Y(Ql, "UsageExceededError");
async function Rg(e) {
  let t;
  try {
    t = await e.text();
  } catch {
    return { type: "EmptyError" };
  }
  try {
    let n = JSON.parse(t);
    if (typeof n == "string") switch (n) {
      case "InternalDataProxyError":
        return { type: "DataProxyError", body: n };
      default:
        return { type: "UnknownTextError", body: n };
    }
    if (typeof n == "object" && n !== null) {
      if ("is_panic" in n && "message" in n && "error_code" in n) return { type: "QueryEngineError", body: n };
      if ("EngineNotStarted" in n || "InteractiveTransactionMisrouted" in n || "InvalidRequestError" in n) {
        let r = Object.values(n)[0].reason;
        return typeof r == "string" && !["SchemaMissing", "EngineVersionNotSupported"].includes(r) ? { type: "UnknownJsonError", body: n } : { type: "DataProxyError", body: n };
      }
    }
    return { type: "UnknownJsonError", body: n };
  } catch {
    return t === "" ? { type: "EmptyError" } : { type: "UnknownTextError", body: t };
  }
}
async function _n(e, t) {
  if (e.ok) return;
  let n = { clientVersion: t, response: e }, r = await Rg(e);
  if (r.type === "QueryEngineError") throw new ht(r.body.message, { code: r.body.error_code, clientVersion: t });
  if (r.type === "DataProxyError") {
    if (r.body === "InternalDataProxyError") throw new Kr(n, "Internal Data Proxy error");
    if ("EngineNotStarted" in r.body) {
      if (r.body.EngineNotStarted.reason === "SchemaMissing") return new Mi(n);
      if (r.body.EngineNotStarted.reason === "EngineVersionNotSupported") throw new Ul(n);
      if ("EngineStartupError" in r.body.EngineNotStarted.reason) {
        let { msg: i, logs: s } = r.body.EngineNotStarted.reason.EngineStartupError;
        throw new Ml(n, i, s);
      }
      if ("KnownEngineStartupError" in r.body.EngineNotStarted.reason) {
        let { msg: i, error_code: s } = r.body.EngineNotStarted.reason.KnownEngineStartupError;
        throw new ee(i, t, s);
      }
      if ("HealthcheckTimeout" in r.body.EngineNotStarted.reason) {
        let { logs: i } = r.body.EngineNotStarted.reason.HealthcheckTimeout;
        throw new Fl(n, i);
      }
    }
    if ("InteractiveTransactionMisrouted" in r.body) {
      let i = { IDParseError: "Could not parse interactive transaction ID", NoQueryEngineFoundError: "Could not find Query Engine for the specified host and transaction ID", TransactionStartError: "Could not start interactive transaction" };
      throw new Vl(n, i[r.body.InteractiveTransactionMisrouted.reason]);
    }
    if ("InvalidRequestError" in r.body) throw new Zl(n, r.body.InvalidRequestError.reason);
  }
  if (e.status === 401 || e.status === 403) throw new Kl(n, vt(Hl, r));
  if (e.status === 404) return new Wl(n, vt(Bl, r));
  if (e.status === 429) throw new Ql(n, vt(Gl, r));
  if (e.status === 504) throw new ql(n, vt(zl, r));
  if (e.status >= 500) throw new Kr(n, vt(Jl, r));
  if (e.status >= 400) throw new Ll(n, vt(jl, r));
}
function vt(e, t) {
  return t.type === "EmptyError" ? e : `${e}: ${JSON.stringify(t)}`;
}
function xg(e) {
  let t = Math.pow(2, e) * 50, n = Math.ceil(Math.random() * t) - Math.ceil(t / 2), r = t + n;
  return new Promise((i) => setTimeout(() => i(r), r));
}
var je = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function Dg(e) {
  let t = new TextEncoder().encode(e), n = "", r = t.byteLength, i = r % 3, s = r - i, o, a, l, u, c;
  for (let d = 0; d < s; d = d + 3) c = t[d] << 16 | t[d + 1] << 8 | t[d + 2], o = (c & 16515072) >> 18, a = (c & 258048) >> 12, l = (c & 4032) >> 6, u = c & 63, n += je[o] + je[a] + je[l] + je[u];
  return i == 1 ? (c = t[s], o = (c & 252) >> 2, a = (c & 3) << 4, n += je[o] + je[a] + "==") : i == 2 && (c = t[s] << 8 | t[s + 1], o = (c & 64512) >> 10, a = (c & 1008) >> 4, l = (c & 15) << 2, n += je[o] + je[a] + je[l] + "="), n;
}
function Cg(e) {
  var t;
  if ((t = e.generator) != null && t.previewFeatures.some((n) => n.toLowerCase().includes("metrics"))) throw new ee("The `metrics` preview feature is not yet available with Accelerate.\nPlease remove `metrics` from the `previewFeatures` in your schema.\n\nMore information about Accelerate: https://pris.ly/d/accelerate", e.clientVersion);
}
var jg = { "@prisma/engines-version": "7.1.1-3.c2990dca591cba766e3b7ef5d9e8a84796e47ab7" }, Yl = class extends Tt {
  constructor(t, n) {
    super(`Cannot fetch data from service:
${t}`, le(n, !0));
    g(this, "name", "RequestError");
    g(this, "code", "P5010");
  }
};
Y(Yl, "RequestError");
async function Ut(e, t, n = (r) => r) {
  let { clientVersion: r, ...i } = t, s = n(fetch);
  try {
    return await s(e, i);
  } catch (o) {
    let a = o.message ?? "Unknown error";
    throw new Yl(a, { clientVersion: r, cause: o });
  }
}
var Lg = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/, Xl = fe("prisma:client:dataproxyEngine");
async function Fg(e, t) {
  let n = jg["@prisma/engines-version"], r = t.clientVersion ?? "unknown";
  if (k.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION || globalThis.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION) return k.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION || globalThis.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION;
  if (e.includes("accelerate") && r !== "0.0.0" && r !== "in-memory") return r;
  let [i, s] = (r == null ? void 0 : r.split("-")) ?? [];
  if (s === void 0 && Lg.test(i)) return i;
  if (s !== void 0 || r === "0.0.0" || r === "in-memory") {
    let [o] = n.split("-") ?? [], [a, l, u] = o.split("."), c = Ug(`<=${a}.${l}.${u}`), d = await Ut(c, { clientVersion: r });
    if (!d.ok) throw new Error(`Failed to fetch stable Prisma version, unpkg.com status ${d.status} ${d.statusText}, response body: ${await d.text() || "<empty body>"}`);
    let f = await d.text();
    Xl("length of body fetched from unpkg.com", f.length);
    let h;
    try {
      h = JSON.parse(f);
    } catch (p) {
      throw console.error("JSON.parse error: body fetched from unpkg.com: ", f), p;
    }
    return h.version;
  }
  throw new Fi("Only `major.minor.patch` versions are supported by Accelerate.", { clientVersion: r });
}
async function Mg(e, t) {
  let n = await Fg(e, t);
  return Xl("version", n), n;
}
function Ug(e) {
  return encodeURI(`https://unpkg.com/prisma@${e}/package.json`);
}
var Rs = 3, jt = fe("prisma:client:dataproxyEngine"), zg = class {
  constructor(e) {
    g(this, "name", "DataProxyEngine");
    g(this, "inlineSchema");
    g(this, "inlineSchemaHash");
    g(this, "inlineDatasources");
    g(this, "config");
    g(this, "logEmitter");
    g(this, "env");
    g(this, "clientVersion");
    g(this, "engineHash");
    g(this, "tracingHelper");
    g(this, "remoteClientVersion");
    g(this, "host");
    g(this, "headerBuilder");
    g(this, "startPromise");
    g(this, "protocol");
    Cg(e), this.config = e, this.env = e.env, this.inlineSchema = Dg(e.inlineSchema), this.inlineDatasources = e.inlineDatasources, this.inlineSchemaHash = e.inlineSchemaHash, this.clientVersion = e.clientVersion, this.engineHash = e.engineVersion, this.logEmitter = e.logEmitter, this.tracingHelper = e.tracingHelper;
  }
  apiKey() {
    return this.headerBuilder.apiKey;
  }
  version() {
    return this.engineHash;
  }
  async start() {
    this.startPromise !== void 0 && await this.startPromise, this.startPromise = (async () => {
      let { apiKey: e, url: t } = this.getURLAndAPIKey();
      this.host = t.host, this.protocol = t.protocol, this.headerBuilder = new kg({ apiKey: e, tracingHelper: this.tracingHelper, logLevel: this.config.logLevel ?? "error", logQueries: this.config.logQueries, engineHash: this.engineHash }), this.remoteClientVersion = await Mg(this.host, this.config), jt("host", this.host), jt("protocol", this.protocol);
    })(), await this.startPromise;
  }
  async stop() {
  }
  propagateResponseExtensions(e) {
    var t, n;
    (t = e == null ? void 0 : e.logs) != null && t.length && e.logs.forEach((r) => {
      switch (r.level) {
        case "debug":
        case "trace":
          jt(r);
          break;
        case "error":
        case "warn":
        case "info": {
          this.logEmitter.emit(r.level, { timestamp: Ts(r.timestamp), message: r.attributes.message ?? "", target: r.target ?? "BinaryEngine" });
          break;
        }
        case "query": {
          this.logEmitter.emit("query", { query: r.attributes.query ?? "", timestamp: Ts(r.timestamp), duration: r.attributes.duration_ms ?? 0, params: r.attributes.params ?? "", target: r.target ?? "BinaryEngine" });
          break;
        }
        default:
          r.level;
      }
    }), (n = e == null ? void 0 : e.traces) != null && n.length && this.tracingHelper.dispatchEngineSpans(e.traces);
  }
  onBeforeExit() {
    throw new Error('"beforeExit" hook is not applicable to the remote query engine');
  }
  async url(e) {
    return await this.start(), `${this.protocol}//${this.host}/${this.remoteClientVersion}/${this.inlineSchemaHash}/${e}`;
  }
  async uploadSchema() {
    let e = { name: "schemaUpload", internal: !0 };
    return this.tracingHelper.runInChildSpan(e, async () => {
      let t = await Ut(await this.url("schema"), { method: "PUT", headers: this.headerBuilder.build(), body: this.inlineSchema, clientVersion: this.clientVersion });
      t.ok || jt("schema response status", t.status);
      let n = await _n(t, this.clientVersion);
      if (n) throw this.logEmitter.emit("warn", { message: `Error while uploading schema: ${n.message}`, timestamp: /* @__PURE__ */ new Date(), target: "" }), n;
      this.logEmitter.emit("info", { message: `Schema (re)uploaded (hash: ${this.inlineSchemaHash})`, timestamp: /* @__PURE__ */ new Date(), target: "" });
    });
  }
  request(e, { traceparent: t, interactiveTransaction: n, customDataProxyFetch: r }) {
    return this.requestInternal({ body: e, traceparent: t, interactiveTransaction: n, customDataProxyFetch: r });
  }
  async requestBatch(e, { traceparent: t, transaction: n, customDataProxyFetch: r }) {
    let i = (n == null ? void 0 : n.kind) === "itx" ? n.options : void 0, s = Di(e, n);
    return (await this.requestInternal({ body: s, customDataProxyFetch: r, interactiveTransaction: i, traceparent: t })).map((o) => (o.extensions && this.propagateResponseExtensions(o.extensions), "errors" in o ? this.convertProtocolErrorsToClientError(o.errors) : o));
  }
  requestInternal({ body: e, traceparent: t, customDataProxyFetch: n, interactiveTransaction: r }) {
    return this.withRetry({ actionGerund: "querying", callback: async ({ logHttpCall: i }) => {
      let s = r ? `${r.payload.endpoint}/graphql` : await this.url("graphql");
      i(s);
      let o = await Ut(s, { method: "POST", headers: this.headerBuilder.build({ traceparent: t, transactionId: r == null ? void 0 : r.id }), body: JSON.stringify(e), clientVersion: this.clientVersion }, n);
      o.ok || jt("graphql response status", o.status), await this.handleError(await _n(o, this.clientVersion));
      let a = await o.json();
      if (a.extensions && this.propagateResponseExtensions(a.extensions), "errors" in a) throw this.convertProtocolErrorsToClientError(a.errors);
      return "batchResult" in a ? a.batchResult : a;
    } });
  }
  async transaction(e, t, n) {
    let r = { start: "starting", commit: "committing", rollback: "rolling back" };
    return this.withRetry({ actionGerund: `${r[e]} transaction`, callback: async ({ logHttpCall: i }) => {
      if (e === "start") {
        let s = JSON.stringify({ max_wait: n.maxWait, timeout: n.timeout, isolation_level: n.isolationLevel }), o = await this.url("transaction/start");
        i(o);
        let a = await Ut(o, { method: "POST", headers: this.headerBuilder.build({ traceparent: t.traceparent }), body: s, clientVersion: this.clientVersion });
        await this.handleError(await _n(a, this.clientVersion));
        let l = await a.json(), { extensions: u } = l;
        u && this.propagateResponseExtensions(u);
        let c = l.id, d = l["data-proxy"].endpoint;
        return { id: c, payload: { endpoint: d } };
      } else {
        let s = `${n.payload.endpoint}/${e}`;
        i(s);
        let o = await Ut(s, { method: "POST", headers: this.headerBuilder.build({ traceparent: t.traceparent }), clientVersion: this.clientVersion });
        await this.handleError(await _n(o, this.clientVersion));
        let a = await o.json(), { extensions: l } = a;
        l && this.propagateResponseExtensions(l);
        return;
      }
    } });
  }
  getURLAndAPIKey() {
    return Sg({ clientVersion: this.clientVersion, env: this.env, inlineDatasources: this.inlineDatasources, overrideDatasources: this.config.overrideDatasources });
  }
  metrics() {
    throw new Fi("Metrics are not yet supported for Accelerate", { clientVersion: this.clientVersion });
  }
  async withRetry(e) {
    for (let t = 0; ; t++) {
      let n = (r) => {
        this.logEmitter.emit("info", { message: `Calling ${r} (n=${t})`, timestamp: /* @__PURE__ */ new Date(), target: "" });
      };
      try {
        return await e.callback({ logHttpCall: n });
      } catch (r) {
        if (!(r instanceof Tt) || !r.isRetryable) throw r;
        if (t >= Rs) throw r instanceof Hr ? r.cause : r;
        this.logEmitter.emit("warn", { message: `Attempt ${t + 1}/${Rs} failed for ${e.actionGerund}: ${r.message ?? "(unknown)"}`, timestamp: /* @__PURE__ */ new Date(), target: "" });
        let i = await xg(t);
        this.logEmitter.emit("warn", { message: `Retrying after ${i}ms`, timestamp: /* @__PURE__ */ new Date(), target: "" });
      }
    }
  }
  async handleError(e) {
    if (e instanceof Mi) throw await this.uploadSchema(), new Hr({ clientVersion: this.clientVersion, cause: e });
    if (e) throw e;
  }
  convertProtocolErrorsToClientError(e) {
    return e.length === 1 ? Ci(e[0], this.config.clientVersion, this.config.activeProvider) : new ge(JSON.stringify(e), { clientVersion: this.config.clientVersion });
  }
  applyPendingMigrations() {
    throw new Error("Method not implemented.");
  }
};
function qg(e) {
  if ((e == null ? void 0 : e.kind) === "itx") return e.options.id;
}
var mr = Symbol("PrismaLibraryEngineCache");
function Vg() {
  let e = globalThis;
  return e[mr] === void 0 && (e[mr] = {}), e[mr];
}
function Zg(e) {
  let t = Vg();
  if (t[e] !== void 0) return t[e];
  let n = $.toNamespacedPath(e), r = { exports: {} }, i = 0;
  return k.platform !== "win32" && (i = Yt.constants.dlopen.RTLD_LAZY | Yt.constants.dlopen.RTLD_DEEPBIND), k.dlopen(r, n, i), t[e] = r.exports, r.exports;
}
var Bg = { async loadLibrary(e) {
  let t = await bd(), n = await ig("library", e);
  try {
    return e.tracingHelper.runInChildSpan({ name: "loadLibrary", internal: !0 }, () => Zg(n));
  } catch (r) {
    let i = uf({ e: r, platformInfo: t, id: n });
    throw new ee(i, e.clientVersion);
  }
} }, gr, Wg = { async loadLibrary(e) {
  let { clientVersion: t, adapter: n, engineWasm: r } = e;
  if (n === void 0) throw new ee(`The \`adapter\` option for \`PrismaClient\` is required in this context (${$g().prettyName})`, t);
  if (r === void 0) throw new ee("WASM engine was unexpectedly `undefined`", t);
  gr === void 0 && (gr = (async () => {
    let s = await r.getRuntime(), o = await r.getQueryEngineWasmModule();
    if (o == null) throw new ee("The loaded wasm module was unexpectedly `undefined` or `null` once loaded", t);
    let a = { "./query_engine_bg.js": s }, l = new WebAssembly.Instance(o, a), u = l.exports.__wbindgen_start;
    return s.__wbg_set_wasm(l.exports), u(), s.QueryEngine;
  })());
  let i = await gr;
  return { debugPanic() {
    return Promise.reject("{}");
  }, dmmf() {
    return Promise.resolve("{}");
  }, version() {
    return { commit: "unknown", version: "unknown" };
  }, QueryEngine: i };
} }, Jg = "P2036", $e = fe("prisma:client:libraryEngine");
function Hg(e) {
  return e.item_type === "query" && "query" in e;
}
function Kg(e) {
  return "level" in e ? e.level === "error" && e.message === "PANIC" : !1;
}
var xs = [...td, "native"], Gg = 0xffffffffffffffffn, yr = 1n;
function Qg() {
  let e = yr++;
  return yr > Gg && (yr = 1n), e;
}
var Ds = class {
  constructor(e, t) {
    g(this, "name", "LibraryEngine");
    g(this, "engine");
    g(this, "libraryInstantiationPromise");
    g(this, "libraryStartingPromise");
    g(this, "libraryStoppingPromise");
    g(this, "libraryStarted");
    g(this, "executingQueryPromise");
    g(this, "config");
    g(this, "QueryEngineConstructor");
    g(this, "libraryLoader");
    g(this, "library");
    g(this, "logEmitter");
    g(this, "libQueryEnginePath");
    g(this, "binaryTarget");
    g(this, "datasourceOverrides");
    g(this, "datamodel");
    g(this, "logQueries");
    g(this, "logLevel");
    g(this, "lastQuery");
    g(this, "loggerRustPanic");
    g(this, "tracingHelper");
    g(this, "adapterPromise");
    g(this, "versionInfo");
    var i;
    this.libraryLoader = t ?? Bg, e.engineWasm !== void 0 && (this.libraryLoader = t ?? Wg), this.config = e, this.libraryStarted = !1, this.logQueries = e.logQueries ?? !1, this.logLevel = e.logLevel ?? "error", this.logEmitter = e.logEmitter, this.datamodel = e.inlineSchema, this.tracingHelper = e.tracingHelper, e.enableDebugLogs && (this.logLevel = "debug");
    let n = Object.keys(e.overrideDatasources)[0], r = (i = e.overrideDatasources[n]) == null ? void 0 : i.url;
    n !== void 0 && r !== void 0 && (this.datasourceOverrides = { [n]: r }), this.libraryInstantiationPromise = this.instantiateLibrary();
  }
  wrapEngine(e) {
    var t, n, r, i;
    return { applyPendingMigrations: (t = e.applyPendingMigrations) == null ? void 0 : t.bind(e), commitTransaction: this.withRequestId(e.commitTransaction.bind(e)), connect: this.withRequestId(e.connect.bind(e)), disconnect: this.withRequestId(e.disconnect.bind(e)), metrics: (n = e.metrics) == null ? void 0 : n.bind(e), query: this.withRequestId(e.query.bind(e)), rollbackTransaction: this.withRequestId(e.rollbackTransaction.bind(e)), sdlSchema: (r = e.sdlSchema) == null ? void 0 : r.bind(e), startTransaction: this.withRequestId(e.startTransaction.bind(e)), trace: e.trace.bind(e), free: (i = e.free) == null ? void 0 : i.bind(e) };
  }
  withRequestId(e) {
    return async (...t) => {
      var r;
      let n = Qg().toString();
      try {
        return await e(...t, n);
      } finally {
        if (this.tracingHelper.isEnabled()) {
          let i = await ((r = this.engine) == null ? void 0 : r.trace(n));
          if (i) {
            let s = JSON.parse(i);
            this.tracingHelper.dispatchEngineSpans(s.spans);
          }
        }
      }
    };
  }
  async applyPendingMigrations() {
    throw new Error("Cannot call this method from this type of engine instance");
  }
  async transaction(e, t, n) {
    var a, l, u;
    await this.start();
    let r = await this.adapterPromise, i = JSON.stringify(t), s;
    if (e === "start") {
      let c = JSON.stringify({ max_wait: n.maxWait, timeout: n.timeout, isolation_level: n.isolationLevel });
      s = await ((a = this.engine) == null ? void 0 : a.startTransaction(c, i));
    } else e === "commit" ? s = await ((l = this.engine) == null ? void 0 : l.commitTransaction(n.id, i)) : e === "rollback" && (s = await ((u = this.engine) == null ? void 0 : u.rollbackTransaction(n.id, i)));
    let o = this.parseEngineResponse(s);
    if (Yg(o)) {
      let c = this.getExternalAdapterError(o, r == null ? void 0 : r.errorRegistry);
      throw c ? c.error : new ht(o.message, { code: o.error_code, clientVersion: this.config.clientVersion, meta: o.meta });
    } else if (typeof o.message == "string") throw new ge(o.message, { clientVersion: this.config.clientVersion });
    return o;
  }
  async instantiateLibrary() {
    if ($e("internalSetup"), this.libraryInstantiationPromise) return this.libraryInstantiationPromise;
    ed(), this.binaryTarget = await this.getCurrentBinaryTarget(), await this.tracingHelper.runInChildSpan("load_engine", () => this.loadEngine()), this.version();
  }
  async getCurrentBinaryTarget() {
    {
      if (this.binaryTarget) return this.binaryTarget;
      let e = await this.tracingHelper.runInChildSpan("detect_platform", () => yi());
      if (!xs.includes(e)) throw new ee(`Unknown ${ft("PRISMA_QUERY_ENGINE_LIBRARY")} ${ft(Ee(e))}. Possible binaryTargets: ${Xt(xs.join(", "))} or a path to the query engine library.
You may have to run ${Xt("prisma generate")} for your changes to take effect.`, this.config.clientVersion);
      return e;
    }
  }
  parseEngineResponse(e) {
    if (!e) throw new ge("Response from the Engine was empty", { clientVersion: this.config.clientVersion });
    try {
      return JSON.parse(e);
    } catch {
      throw new ge("Unable to JSON.parse response from engine", { clientVersion: this.config.clientVersion });
    }
  }
  async loadEngine() {
    var e, t;
    if (!this.engine) {
      this.QueryEngineConstructor || (this.library = await this.libraryLoader.loadLibrary(this.config), this.QueryEngineConstructor = this.library.QueryEngine);
      try {
        let n = new WeakRef(this);
        this.adapterPromise || (this.adapterPromise = (t = (e = this.config.adapter) == null ? void 0 : e.connect()) == null ? void 0 : t.then(cs));
        let r = await this.adapterPromise;
        r && $e("Using driver adapter: %O", r), this.engine = this.wrapEngine(new this.QueryEngineConstructor({ datamodel: this.datamodel, env: k.env, logQueries: this.config.logQueries ?? !1, ignoreEnvVarErrors: !0, datasourceOverrides: this.datasourceOverrides ?? {}, logLevel: this.logLevel, configDir: this.config.cwd, engineProtocol: "json", enableTracing: this.tracingHelper.isEnabled() }, (i) => {
          var s;
          (s = n.deref()) == null || s.logger(i);
        }, r));
      } catch (n) {
        let r = n, i = this.parseInitError(r.message);
        throw typeof i == "string" ? r : new ee(i.message, this.config.clientVersion, i.error_code);
      }
    }
  }
  logger(e) {
    let t = this.parseEngineResponse(e);
    t && (t.level = (t == null ? void 0 : t.level.toLowerCase()) ?? "unknown", Hg(t) ? this.logEmitter.emit("query", { timestamp: /* @__PURE__ */ new Date(), query: t.query, params: t.params, duration: Number(t.duration_ms), target: t.module_path }) : Kg(t) ? this.loggerRustPanic = new ut(wr(this, `${t.message}: ${t.reason} in ${t.file}:${t.line}:${t.column}`), this.config.clientVersion) : this.logEmitter.emit(t.level, { timestamp: /* @__PURE__ */ new Date(), message: t.message, target: t.module_path }));
  }
  parseInitError(e) {
    try {
      return JSON.parse(e);
    } catch {
    }
    return e;
  }
  parseRequestError(e) {
    try {
      return JSON.parse(e);
    } catch {
    }
    return e;
  }
  onBeforeExit() {
    throw new Error('"beforeExit" hook is not applicable to the library engine since Prisma 5.0.0, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.');
  }
  async start() {
    if (this.libraryInstantiationPromise || (this.libraryInstantiationPromise = this.instantiateLibrary()), await this.libraryInstantiationPromise, await this.libraryStoppingPromise, this.libraryStartingPromise) return $e(`library already starting, this.libraryStarted: ${this.libraryStarted}`), this.libraryStartingPromise;
    if (this.libraryStarted) return;
    let e = async () => {
      var t, n, r;
      $e("library starting");
      try {
        let i = { traceparent: this.tracingHelper.getTraceParent() };
        await ((t = this.engine) == null ? void 0 : t.connect(JSON.stringify(i))), this.libraryStarted = !0, this.adapterPromise || (this.adapterPromise = (r = (n = this.config.adapter) == null ? void 0 : n.connect()) == null ? void 0 : r.then(cs)), await this.adapterPromise, $e("library started");
      } catch (i) {
        let s = this.parseInitError(i.message);
        throw typeof s == "string" ? i : new ee(s.message, this.config.clientVersion, s.error_code);
      } finally {
        this.libraryStartingPromise = void 0;
      }
    };
    return this.libraryStartingPromise = this.tracingHelper.runInChildSpan("connect", e), this.libraryStartingPromise;
  }
  async stop() {
    var t;
    if (await this.libraryInstantiationPromise, await this.libraryStartingPromise, await this.executingQueryPromise, this.libraryStoppingPromise) return $e("library is already stopping"), this.libraryStoppingPromise;
    if (!this.libraryStarted) {
      await ((t = await this.adapterPromise) == null ? void 0 : t.dispose()), this.adapterPromise = void 0;
      return;
    }
    let e = async () => {
      var r, i, s;
      await new Promise((o) => setImmediate(o)), $e("library stopping");
      let n = { traceparent: this.tracingHelper.getTraceParent() };
      await ((r = this.engine) == null ? void 0 : r.disconnect(JSON.stringify(n))), (i = this.engine) != null && i.free && this.engine.free(), this.engine = void 0, this.libraryStarted = !1, this.libraryStoppingPromise = void 0, this.libraryInstantiationPromise = void 0, await ((s = await this.adapterPromise) == null ? void 0 : s.dispose()), this.adapterPromise = void 0, $e("library stopped");
    };
    return this.libraryStoppingPromise = this.tracingHelper.runInChildSpan("disconnect", e), this.libraryStoppingPromise;
  }
  version() {
    var e, t;
    return this.versionInfo = (e = this.library) == null ? void 0 : e.version(), ((t = this.versionInfo) == null ? void 0 : t.version) ?? "unknown";
  }
  debugPanic(e) {
    var t;
    return (t = this.library) == null ? void 0 : t.debugPanic(e);
  }
  async request(e, { traceparent: t, interactiveTransaction: n }) {
    var s, o;
    $e(`sending request, this.libraryStarted: ${this.libraryStarted}`);
    let r = JSON.stringify({ traceparent: t }), i = JSON.stringify(e);
    try {
      await this.start();
      let a = await this.adapterPromise;
      this.executingQueryPromise = (s = this.engine) == null ? void 0 : s.query(i, r, n == null ? void 0 : n.id), this.lastQuery = i;
      let l = this.parseEngineResponse(await this.executingQueryPromise);
      if (l.errors) throw l.errors.length === 1 ? this.buildQueryError(l.errors[0], a == null ? void 0 : a.errorRegistry) : new ge(JSON.stringify(l.errors), { clientVersion: this.config.clientVersion });
      if (this.loggerRustPanic) throw this.loggerRustPanic;
      return { data: l };
    } catch (a) {
      if (a instanceof ee) throw a;
      if (a.code === "GenericFailure" && ((o = a.message) != null && o.startsWith("PANIC:"))) throw new ut(wr(this, a.message), this.config.clientVersion);
      let l = this.parseRequestError(a.message);
      throw typeof l == "string" ? a : new ge(`${l.message}
${l.backtrace}`, { clientVersion: this.config.clientVersion });
    }
  }
  async requestBatch(e, { transaction: t, traceparent: n }) {
    var u;
    $e("requestBatch");
    let r = Di(e, t);
    await this.start();
    let i = await this.adapterPromise;
    this.lastQuery = JSON.stringify(r), this.executingQueryPromise = (u = this.engine) == null ? void 0 : u.query(this.lastQuery, JSON.stringify({ traceparent: n }), qg(t));
    let s = await this.executingQueryPromise, o = this.parseEngineResponse(s);
    if (o.errors) throw o.errors.length === 1 ? this.buildQueryError(o.errors[0], i == null ? void 0 : i.errorRegistry) : new ge(JSON.stringify(o.errors), { clientVersion: this.config.clientVersion });
    let { batchResult: a, errors: l } = o;
    if (Array.isArray(a)) return a.map((c) => c.errors && c.errors.length > 0 ? this.loggerRustPanic ?? this.buildQueryError(c.errors[0], i == null ? void 0 : i.errorRegistry) : { data: c });
    throw l && l.length === 1 ? new Error(l[0].error) : new Error(JSON.stringify(o));
  }
  buildQueryError(e, t) {
    if (e.user_facing_error.is_panic) return new ut(wr(this, e.user_facing_error.message), this.config.clientVersion);
    let n = this.getExternalAdapterError(e.user_facing_error, t);
    return n ? n.error : Ci(e, this.config.clientVersion, this.config.activeProvider);
  }
  getExternalAdapterError(e, t) {
    var n;
    if (e.error_code === Jg && t) {
      let r = (n = e.meta) == null ? void 0 : n.id;
      ds(typeof r == "number", "Malformed external JS error received from the engine");
      let i = t.consumeError(r);
      return ds(i, "External error with reported id was not registered"), i;
    }
  }
  async metrics(e) {
    await this.start();
    let t = await this.engine.metrics(JSON.stringify(e));
    return e.format === "prometheus" ? t : this.parseEngineResponse(t);
  }
};
function Yg(e) {
  return typeof e == "object" && e !== null && e.error_code !== void 0;
}
function wr(e, t) {
  var n;
  return cg({ binaryTarget: e.binaryTarget, title: t, version: e.config.clientVersion, engineVersion: (n = e.versionInfo) == null ? void 0 : n.commit, database: e.config.activeProvider, query: e.lastQuery });
}
function Xg({ url: e, adapter: t, copyEngine: n, targetBuildType: r }) {
  let i = [], s = [], o = (m) => {
    i.push({ _tag: "warning", value: m });
  }, a = (m) => {
    let b = m.join(`
`);
    s.push({ _tag: "error", value: b });
  }, l = !!(e != null && e.startsWith("prisma://")), u = Na(e), c = !!t, d = l || u;
  !c && n && d && r !== "client" && r !== "wasm-compiler-edge" && o(["recommend--no-engine", "In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)"]);
  let f = d || !n;
  c && (f || r === "edge") && (d ? a(["You've provided both a driver adapter and an Accelerate database URL. Driver adapters currently cannot connect to Accelerate.", "Please provide either a driver adapter with a direct database URL or an Accelerate URL and no driver adapter."]) : n || a(["Prisma Client was configured to use the `adapter` option but `prisma generate` was run with `--no-engine`.", "Please run `prisma generate` without `--no-engine` to be able to use Prisma Client with the adapter."]));
  let h = { accelerate: f, ppg: u, driverAdapters: c };
  function p(m) {
    return m.length > 0;
  }
  return p(s) ? { ok: !1, diagnostics: { warnings: i, errors: s }, isUsing: h } : { ok: !0, diagnostics: { warnings: i }, isUsing: h };
}
function ey({ copyEngine: e = !0 }, t) {
  let n;
  try {
    n = Li({ inlineDatasources: t.inlineDatasources, overrideDatasources: t.overrideDatasources, env: { ...t.env, ...k.env }, clientVersion: t.clientVersion });
  } catch {
  }
  let { ok: r, isUsing: i, diagnostics: s } = Xg({ url: n, adapter: t.adapter, copyEngine: e, targetBuildType: "library" });
  for (let l of s.warnings) xf(...l.value);
  if (!r) {
    let l = s.errors[0];
    throw new Ke(l.value, { clientVersion: t.clientVersion });
  }
  let o = Rr(t.generator), a = o === "library";
  return i.accelerate ? new zg(t) : a ? new Ds(t) : new Ds(t);
}
function ty({ generator: e }) {
  return (e == null ? void 0 : e.previewFeatures) ?? [];
}
var ny = (e) => ({ command: e }), ry = (e) => e.strings.reduce((t, n, r) => `${t}@P${r}${n}`);
function Lt(e) {
  try {
    return Cs(e, "fast");
  } catch {
    return Cs(e, "slow");
  }
}
function Cs(e, t) {
  return JSON.stringify(e.map((n) => eu(n, t)));
}
function eu(e, t) {
  if (Array.isArray(e)) return e.map((n) => eu(n, t));
  if (typeof e == "bigint") return { prisma__type: "bigint", prisma__value: e.toString() };
  if (Ei(e)) return { prisma__type: "date", prisma__value: e.toJSON() };
  if ($i.isDecimal(e)) return { prisma__type: "decimal", prisma__value: e.toJSON() };
  if (Buffer.isBuffer(e)) return { prisma__type: "bytes", prisma__value: e.toString("base64") };
  if (iy(e)) return { prisma__type: "bytes", prisma__value: Buffer.from(e).toString("base64") };
  if (ArrayBuffer.isView(e)) {
    let { buffer: n, byteOffset: r, byteLength: i } = e;
    return { prisma__type: "bytes", prisma__value: Buffer.from(n, r, i).toString("base64") };
  }
  return typeof e == "object" && t === "slow" ? tu(e) : e;
}
function iy(e) {
  return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer ? !0 : typeof e == "object" && e !== null ? e[Symbol.toStringTag] === "ArrayBuffer" || e[Symbol.toStringTag] === "SharedArrayBuffer" : !1;
}
function tu(e) {
  if (typeof e != "object" || e === null) return e;
  if (typeof e.toJSON == "function") return e.toJSON();
  if (Array.isArray(e)) return e.map(js);
  let t = {};
  for (let n of Object.keys(e)) t[n] = js(e[n]);
  return t;
}
function js(e) {
  return typeof e == "bigint" ? e.toString() : tu(e);
}
var sy = /^(\s*alter\s)/i, Ls = fe("prisma:client");
function Fs(e, t, n, r) {
  if (!(e !== "postgresql" && e !== "cockroachdb") && n.length > 0 && sy.exec(t)) throw new Error(`Running ALTER using ${r} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
}
var Ms = ({ clientMethod: e, activeProvider: t }) => (n) => {
  let r = "", i;
  if (El(n)) r = n.sql, i = { values: Lt(n.values), __prismaRawParameters__: !0 };
  else if (Array.isArray(n)) {
    let [s, ...o] = n;
    r = s, i = { values: Lt(o || []), __prismaRawParameters__: !0 };
  } else switch (t) {
    case "sqlite":
    case "mysql": {
      r = n.sql, i = { values: Lt(n.values), __prismaRawParameters__: !0 };
      break;
    }
    case "cockroachdb":
    case "postgresql":
    case "postgres": {
      r = n.text, i = { values: Lt(n.values), __prismaRawParameters__: !0 };
      break;
    }
    case "sqlserver": {
      r = ry(n), i = { values: Lt(n.values), __prismaRawParameters__: !0 };
      break;
    }
    default:
      throw new Error(`The ${t} provider does not support ${e}`);
  }
  return i != null && i.values ? Ls(`prisma.${e}(${r}, ${i.values})`) : Ls(`prisma.${e}(${r})`), { query: r, parameters: i };
}, oy = { requestArgsToMiddlewareArgs(e) {
  return [e.strings, ...e.values];
}, middlewareArgsToRequestArgs(e) {
  let [t, ...n] = e;
  return new mn(t, n);
} }, ay = { requestArgsToMiddlewareArgs(e) {
  return [e];
}, middlewareArgsToRequestArgs(e) {
  return e[0];
} };
function Us(e) {
  return function(t, n) {
    let r, i = (s = e) => {
      try {
        return s === void 0 || (s == null ? void 0 : s.kind) === "itx" ? r ?? (r = zs(t(s))) : zs(t(s));
      } catch (o) {
        return Promise.reject(o);
      }
    };
    return { get spec() {
      return n;
    }, then(s, o) {
      return i().then(s, o);
    }, catch(s) {
      return i().catch(s);
    }, finally(s) {
      return i().finally(s);
    }, requestTransaction(s) {
      let o = i(s);
      return o.requestTransaction ? o.requestTransaction(s) : o;
    }, [Symbol.toStringTag]: "PrismaPromise" };
  };
}
function zs(e) {
  return typeof e.then == "function" ? e : Promise.resolve(e);
}
var ly = tf.split(".")[0], uy = { isEnabled() {
  return !1;
}, getTraceParent() {
  return "00-10-10-00";
}, dispatchEngineSpans() {
}, getActiveContext() {
}, runInChildSpan(e, t) {
  return t();
} }, cy = class {
  isEnabled() {
    return this.getGlobalTracingHelper().isEnabled();
  }
  getTraceParent(e) {
    return this.getGlobalTracingHelper().getTraceParent(e);
  }
  dispatchEngineSpans(e) {
    return this.getGlobalTracingHelper().dispatchEngineSpans(e);
  }
  getActiveContext() {
    return this.getGlobalTracingHelper().getActiveContext();
  }
  runInChildSpan(e, t) {
    return this.getGlobalTracingHelper().runInChildSpan(e, t);
  }
  getGlobalTracingHelper() {
    let e = globalThis[`V${ly}_PRISMA_INSTRUMENTATION`], t = globalThis.PRISMA_INSTRUMENTATION;
    return (e == null ? void 0 : e.helper) ?? (t == null ? void 0 : t.helper) ?? uy;
  }
};
function dy() {
  return new cy();
}
function fy(e, t = () => {
}) {
  let n, r = new Promise((i) => n = i);
  return { then(i) {
    return --e === 0 && n(t()), i == null ? void 0 : i(r);
  } };
}
function hy(e) {
  return typeof e == "string" ? e : e.reduce((t, n) => {
    let r = typeof n == "string" ? n : n.level;
    return r === "query" ? t : t && (n === "info" || t === "info") ? "info" : r;
  }, void 0);
}
function nu(e) {
  return typeof e.batchRequestIdx == "number";
}
function py(e) {
  if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow") return;
  let t = [];
  return e.modelName && t.push(e.modelName), e.query.arguments && t.push(Gr(e.query.arguments)), t.push(Gr(e.query.selection)), t.join("");
}
function Gr(e) {
  return `(${Object.keys(e).sort().map((t) => {
    let n = e[t];
    return typeof n == "object" && n !== null ? `(${t} ${Gr(n)})` : t;
  }).join(" ")})`;
}
var my = { aggregate: !1, aggregateRaw: !1, createMany: !0, createManyAndReturn: !0, createOne: !0, deleteMany: !0, deleteOne: !0, executeRaw: !0, findFirst: !1, findFirstOrThrow: !1, findMany: !1, findRaw: !1, findUnique: !1, findUniqueOrThrow: !1, groupBy: !1, queryRaw: !1, runCommandRaw: !0, updateMany: !0, updateManyAndReturn: !0, updateOne: !0, upsertOne: !0 };
function qs(e) {
  return my[e];
}
var gy = class {
  constructor(e) {
    g(this, "batches");
    g(this, "tickActive", !1);
    this.options = e, this.batches = {};
  }
  request(e) {
    let t = this.options.batchBy(e);
    return t ? (this.batches[t] || (this.batches[t] = [], this.tickActive || (this.tickActive = !0, k.nextTick(() => {
      this.dispatchBatches(), this.tickActive = !1;
    }))), new Promise((n, r) => {
      this.batches[t].push({ request: e, resolve: n, reject: r });
    })) : this.options.singleLoader(e);
  }
  dispatchBatches() {
    for (let e in this.batches) {
      let t = this.batches[e];
      delete this.batches[e], t.length === 1 ? this.options.singleLoader(t[0].request).then((n) => {
        n instanceof Error ? t[0].reject(n) : t[0].resolve(n);
      }).catch((n) => {
        t[0].reject(n);
      }) : (t.sort((n, r) => this.options.batchOrder(n.request, r.request)), this.options.batchLoader(t.map((n) => n.request)).then((n) => {
        if (n instanceof Error) for (let r = 0; r < t.length; r++) t[r].reject(n);
        else for (let r = 0; r < t.length; r++) {
          let i = n[r];
          i instanceof Error ? t[r].reject(i) : t[r].resolve(i);
        }
      }).catch((n) => {
        for (let r = 0; r < t.length; r++) t[r].reject(n);
      }));
    }
  }
  get [Symbol.toStringTag]() {
    return "DataLoader";
  }
};
function ot(e, t) {
  if (t === null) return t;
  switch (e) {
    case "bigint":
      return BigInt(t);
    case "bytes": {
      let { buffer: n, byteOffset: r, byteLength: i } = Buffer.from(t, "base64");
      return new Uint8Array(n, r, i);
    }
    case "decimal":
      return new $i(t);
    case "datetime":
    case "date":
      return new Date(t);
    case "time":
      return /* @__PURE__ */ new Date(`1970-01-01T${t}Z`);
    case "bigint-array":
      return t.map((n) => ot("bigint", n));
    case "bytes-array":
      return t.map((n) => ot("bytes", n));
    case "decimal-array":
      return t.map((n) => ot("decimal", n));
    case "datetime-array":
      return t.map((n) => ot("datetime", n));
    case "date-array":
      return t.map((n) => ot("date", n));
    case "time-array":
      return t.map((n) => ot("time", n));
    default:
      return t;
  }
}
function yy(e) {
  let t = [], n = wy(e);
  for (let r = 0; r < e.rows.length; r++) {
    let i = e.rows[r], s = { ...n };
    for (let o = 0; o < i.length; o++) s[e.columns[o]] = ot(e.types[o], i[o]);
    t.push(s);
  }
  return t;
}
function wy(e) {
  let t = {};
  for (let n = 0; n < e.columns.length; n++) t[e.columns[n]] = null;
  return t;
}
var vy = fe("prisma:client:request_handler"), by = class {
  constructor(e, t) {
    g(this, "client");
    g(this, "dataloader");
    g(this, "logEmitter");
    this.logEmitter = t, this.client = e, this.dataloader = new gy({ batchLoader: Hm(async ({ requests: n, customDataProxyFetch: r }) => {
      let { transaction: i, otelParentCtx: s } = n[0], o = n.map((u) => u.protocolQuery), a = this.client._tracingHelper.getTraceParent(s), l = n.some((u) => qs(u.protocolQuery.action));
      return (await this.client._engine.requestBatch(o, { traceparent: a, transaction: _y(i), containsWrite: l, customDataProxyFetch: r })).map((u, c) => {
        if (u instanceof Error) return u;
        try {
          return this.mapQueryEngineResult(n[c], u);
        } catch (d) {
          return d;
        }
      });
    }), singleLoader: async (n) => {
      var s;
      let r = ((s = n.transaction) == null ? void 0 : s.kind) === "itx" ? ru(n.transaction) : void 0, i = await this.client._engine.request(n.protocolQuery, { traceparent: this.client._tracingHelper.getTraceParent(), interactiveTransaction: r, isWrite: qs(n.protocolQuery.action), customDataProxyFetch: n.customDataProxyFetch });
      return this.mapQueryEngineResult(n, i);
    }, batchBy: (n) => {
      var r;
      return (r = n.transaction) != null && r.id ? `transaction-${n.transaction.id}` : py(n.protocolQuery);
    }, batchOrder(n, r) {
      var i, s;
      return ((i = n.transaction) == null ? void 0 : i.kind) === "batch" && ((s = r.transaction) == null ? void 0 : s.kind) === "batch" ? n.transaction.index - r.transaction.index : 0;
    } });
  }
  async request(e) {
    try {
      return await this.dataloader.request(e);
    } catch (t) {
      let { clientMethod: n, callsite: r, transaction: i, args: s, modelName: o } = e;
      this.handleAndLogRequestError({ error: t, clientMethod: n, callsite: r, transaction: i, args: s, modelName: o, globalOmit: e.globalOmit });
    }
  }
  mapQueryEngineResult({ dataPath: e, unpacker: t }, n) {
    let r = n == null ? void 0 : n.data, i = this.unpack(r, e, t);
    return k.env.PRISMA_CLIENT_GET_TIME ? { data: i } : i;
  }
  handleAndLogRequestError(e) {
    try {
      this.handleRequestError(e);
    } catch (t) {
      throw this.logEmitter && this.logEmitter.emit("error", { message: t.message, target: e.clientMethod, timestamp: /* @__PURE__ */ new Date() }), t;
    }
  }
  handleRequestError({ error: e, clientMethod: t, callsite: n, transaction: r, args: i, modelName: s, globalOmit: o }) {
    if (vy(e), Ey(e, r)) throw e;
    if (e instanceof ht && Py(e)) {
      let l = iu(e.meta);
      ml({ args: i, errors: [l], callsite: n, errorFormat: this.client._errorFormat, originalMethod: t, clientVersion: this.client._clientVersion, globalOmit: o });
    }
    let a = e.message;
    if (n && (a = Ka({ callsite: n, originalMethod: t, isPanic: e.isPanic, showColors: this.client._errorFormat === "pretty", message: a })), a = this.sanitizeMessage(a), e.code) {
      let l = s ? { modelName: s, ...e.meta } : e.meta;
      throw new ht(a, { code: e.code, clientVersion: this.client._clientVersion, meta: l, batchRequestIdx: e.batchRequestIdx });
    } else {
      if (e.isPanic) throw new ut(a, this.client._clientVersion);
      if (e instanceof ge) throw new ge(a, { clientVersion: this.client._clientVersion, batchRequestIdx: e.batchRequestIdx });
      if (e instanceof ee) throw new ee(a, this.client._clientVersion);
      if (e instanceof ut) throw new ut(a, this.client._clientVersion);
    }
    throw e.clientVersion = this.client._clientVersion, e;
  }
  sanitizeMessage(e) {
    return this.client._errorFormat && this.client._errorFormat !== "pretty" ? Dr(e) : e;
  }
  unpack(e, t, n) {
    if (!e || (e.data && (e = e.data), !e)) return e;
    let r = Object.keys(e)[0], i = Object.values(e)[0], s = t.filter((l) => l !== "select" && l !== "include"), o = Sl(i, s), a = r === "queryRaw" ? yy(o) : Jr(o);
    return n ? n(a) : a;
  }
  get [Symbol.toStringTag]() {
    return "RequestHandler";
  }
};
function _y(e) {
  if (e) {
    if (e.kind === "batch") return { kind: "batch", options: { isolationLevel: e.isolationLevel } };
    if (e.kind === "itx") return { kind: "itx", options: ru(e) };
    _i(e, "Unknown transaction kind");
  }
}
function ru(e) {
  return { id: e.id, payload: e.payload };
}
function Ey(e, t) {
  return nu(e) && (t == null ? void 0 : t.kind) === "batch" && e.batchRequestIdx !== t.index;
}
function Py(e) {
  return e.code === "P2009" || e.code === "P2012";
}
function iu(e) {
  if (e.kind === "Union") return { kind: "Union", errors: e.errors.map(iu) };
  if (Array.isArray(e.selectionPath)) {
    let [, ...t] = e.selectionPath;
    return { ...e, selectionPath: t };
  }
  return e;
}
var $y = mg, Ay = we(ha()), J = class extends Error {
  constructor(e) {
    super(e + `
Read more at https://pris.ly/d/client-constructor`), this.name = "PrismaClientConstructorValidationError";
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientConstructorValidationError";
  }
};
Y(J, "PrismaClientConstructorValidationError");
var Vs = ["datasources", "datasourceUrl", "errorFormat", "adapter", "log", "transactionOptions", "omit", "__internal"], Zs = ["pretty", "colorless", "minimal"], Bs = ["info", "query", "warn", "error"], Sy = { datasources: (e, { datasourceNames: t }) => {
  if (e) {
    if (typeof e != "object" || Array.isArray(e)) throw new J(`Invalid value ${JSON.stringify(e)} for "datasources" provided to PrismaClient constructor`);
    for (let [n, r] of Object.entries(e)) {
      if (!t.includes(n)) {
        let i = bt(n, t) || ` Available datasources: ${t.join(", ")}`;
        throw new J(`Unknown datasource ${n} provided to PrismaClient constructor.${i}`);
      }
      if (typeof r != "object" || Array.isArray(r)) throw new J(`Invalid value ${JSON.stringify(e)} for datasource "${n}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
      if (r && typeof r == "object") for (let [i, s] of Object.entries(r)) {
        if (i !== "url") throw new J(`Invalid value ${JSON.stringify(e)} for datasource "${n}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
        if (typeof s != "string") throw new J(`Invalid value ${JSON.stringify(s)} for datasource "${n}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
      }
    }
  }
}, adapter: (e, t) => {
  if (!e && Rr(t.generator) === "client") throw new J('Using engine type "client" requires a driver adapter to be provided to PrismaClient constructor.');
  if (e !== null) {
    if (e === void 0) throw new J('"adapter" property must not be undefined, use null to conditionally disable driver adapters.');
    if (Rr(t.generator) === "binary") throw new J('Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.');
  }
}, datasourceUrl: (e) => {
  if (typeof e < "u" && typeof e != "string") throw new J(`Invalid value ${JSON.stringify(e)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`);
}, errorFormat: (e) => {
  if (e) {
    if (typeof e != "string") throw new J(`Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`);
    if (!Zs.includes(e)) {
      let t = bt(e, Zs);
      throw new J(`Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`);
    }
  }
}, log: (e) => {
  if (!e) return;
  if (!Array.isArray(e)) throw new J(`Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`);
  function t(n) {
    if (typeof n == "string" && !Bs.includes(n)) {
      let r = bt(n, Bs);
      throw new J(`Invalid log level "${n}" provided to PrismaClient constructor.${r}`);
    }
  }
  for (let n of e) {
    t(n);
    let r = { level: t, emit: (i) => {
      let s = ["stdout", "event"];
      if (!s.includes(i)) {
        let o = bt(i, s);
        throw new J(`Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${o}`);
      }
    } };
    if (n && typeof n == "object") for (let [i, s] of Object.entries(n)) if (r[i]) r[i](s);
    else throw new J(`Invalid property ${i} for "log" provided to PrismaClient constructor`);
  }
}, transactionOptions: (e) => {
  if (!e) return;
  let t = e.maxWait;
  if (t != null && t <= 0) throw new J(`Invalid value ${t} for maxWait in "transactionOptions" provided to PrismaClient constructor. maxWait needs to be greater than 0`);
  let n = e.timeout;
  if (n != null && n <= 0) throw new J(`Invalid value ${n} for timeout in "transactionOptions" provided to PrismaClient constructor. timeout needs to be greater than 0`);
}, omit: (e, t) => {
  if (typeof e != "object") throw new J('"omit" option is expected to be an object.');
  if (e === null) throw new J('"omit" option can not be `null`');
  let n = [];
  for (let [r, i] of Object.entries(e)) {
    let s = Iy(r, t.runtimeDataModel);
    if (!s) {
      n.push({ kind: "UnknownModel", modelKey: r });
      continue;
    }
    for (let [o, a] of Object.entries(i)) {
      let l = s.fields.find((u) => u.name === o);
      if (!l) {
        n.push({ kind: "UnknownField", modelKey: r, fieldName: o });
        continue;
      }
      if (l.relationName) {
        n.push({ kind: "RelationInOmit", modelKey: r, fieldName: o });
        continue;
      }
      typeof a != "boolean" && n.push({ kind: "InvalidFieldValue", modelKey: r, fieldName: o });
    }
  }
  if (n.length > 0) throw new J(Ny(e, n));
}, __internal: (e) => {
  if (!e) return;
  let t = ["debug", "engine", "configOverride"];
  if (typeof e != "object") throw new J(`Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`);
  for (let [n] of Object.entries(e)) if (!t.includes(n)) {
    let r = bt(n, t);
    throw new J(`Invalid property ${JSON.stringify(n)} for "__internal" provided to PrismaClient constructor.${r}`);
  }
} };
function Oy(e, t) {
  for (let [n, r] of Object.entries(e)) {
    if (!Vs.includes(n)) {
      let i = bt(n, Vs);
      throw new J(`Unknown property ${n} provided to PrismaClient constructor.${i}`);
    }
    Sy[n](r, t);
  }
  if (e.datasourceUrl && e.datasources) throw new J('Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them');
}
function bt(e, t) {
  if (t.length === 0 || typeof e != "string") return "";
  let n = ky(e, t);
  return n ? ` Did you mean "${n}"?` : "";
}
function ky(e, t) {
  if (t.length === 0) return null;
  let n = t.map((i) => ({ value: i, distance: (0, Ay.default)(e, i) }));
  n.sort((i, s) => i.distance < s.distance ? -1 : 1);
  let r = n[0];
  return r.distance < 3 ? r.value : null;
}
function Iy(e, t) {
  return Ws(t.models, e) ?? Ws(t.types, e);
}
function Ws(e, t) {
  let n = Object.keys(e).find((r) => Yn(r) === t);
  if (n) return e[n];
}
function Ny(e, t) {
  var s, o, a, l;
  let n = Ti(e);
  for (let u of t) switch (u.kind) {
    case "UnknownModel":
      (s = n.arguments.getField(u.modelKey)) == null || s.markAsError(), n.addErrorMessage(() => `Unknown model name: ${u.modelKey}.`);
      break;
    case "UnknownField":
      (o = n.arguments.getDeepField([u.modelKey, u.fieldName])) == null || o.markAsError(), n.addErrorMessage(() => `Model "${u.modelKey}" does not have a field named "${u.fieldName}".`);
      break;
    case "RelationInOmit":
      (a = n.arguments.getDeepField([u.modelKey, u.fieldName])) == null || a.markAsError(), n.addErrorMessage(() => 'Relations are already excluded by default and can not be specified in "omit".');
      break;
    case "InvalidFieldValue":
      (l = n.arguments.getDeepFieldValue([u.modelKey, u.fieldName])) == null || l.markAsError(), n.addErrorMessage(() => "Omit field option value must be a boolean.");
      break;
  }
  let { message: r, args: i } = pl(n, "colorless");
  return `Error validating "omit" option:

${i}

${r}`;
}
function Ty(e) {
  return e.length === 0 ? Promise.resolve([]) : new Promise((t, n) => {
    let r = new Array(e.length), i = null, s = !1, o = 0, a = () => {
      s || (o++, o === e.length && (s = !0, i ? n(i) : t(r)));
    }, l = (u) => {
      s || (s = !0, n(u));
    };
    for (let u = 0; u < e.length; u++) e[u].then((c) => {
      r[u] = c, a();
    }, (c) => {
      if (!nu(c)) {
        l(c);
        return;
      }
      c.batchRequestIdx === u ? l(c) : (i || (i = c), a());
    });
  });
}
var qe = fe("prisma:client");
typeof globalThis == "object" && (globalThis.NODE_CLIENT = !0);
var Ry = { requestArgsToMiddlewareArgs: (e) => e, middlewareArgsToRequestArgs: (e) => e }, xy = Symbol.for("prisma.client.transaction.id"), Dy = { id: 0, nextId() {
  return ++this.id;
} };
function Cy(e) {
  class t {
    constructor(r) {
      g(this, "_originalClient", this);
      g(this, "_runtimeDataModel");
      g(this, "_requestHandler");
      g(this, "_connectionPromise");
      g(this, "_disconnectionPromise");
      g(this, "_engineConfig");
      g(this, "_accelerateEngineConfig");
      g(this, "_clientVersion");
      g(this, "_errorFormat");
      g(this, "_tracingHelper");
      g(this, "_previewFeatures");
      g(this, "_activeProvider");
      g(this, "_globalOmit");
      g(this, "_extensions");
      g(this, "_engine");
      g(this, "_appliedParent");
      g(this, "_createPrismaPromise", Us());
      g(this, "$metrics", new Zp(this));
      g(this, "$extends", Lm);
      var l, u, c, d, f, h;
      e = ((u = (l = r == null ? void 0 : r.__internal) == null ? void 0 : l.configOverride) == null ? void 0 : u.call(l, e)) ?? e, Km(e), r && Oy(r, e);
      let i = new dc().on("error", () => {
      });
      this._extensions = gl.empty(), this._previewFeatures = ty(e), this._clientVersion = e.clientVersion ?? $y, this._activeProvider = e.activeProvider, this._globalOmit = r == null ? void 0 : r.omit, this._tracingHelper = dy();
      let s = e.relativeEnvPaths && { rootEnvPath: e.relativeEnvPaths.rootEnvPath && $.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath), schemaEnvPath: e.relativeEnvPaths.schemaEnvPath && $.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath) }, o;
      if (r != null && r.adapter) {
        o = r.adapter;
        let p = e.activeProvider === "postgresql" || e.activeProvider === "cockroachdb" ? "postgres" : e.activeProvider;
        if (o.provider !== p) throw new ee(`The Driver Adapter \`${o.adapterName}\`, based on \`${o.provider}\`, is not compatible with the provider \`${p}\` specified in the Prisma schema.`, this._clientVersion);
        if (r.datasources || r.datasourceUrl !== void 0) throw new ee("Custom datasource configuration is not compatible with Prisma Driver Adapters. Please define the database connection string directly in the Driver Adapter configuration.", this._clientVersion);
      }
      let a = !o && s && kf(s, { conflictCheck: "none" }) || ((c = e.injectableEdgeEnv) == null ? void 0 : c.call(e));
      try {
        let p = r ?? {}, m = p.__internal ?? {}, b = m.debug === !0;
        b && fe.enable("prisma:client");
        let _ = $.resolve(e.dirname, e.relativePath);
        dt.existsSync(_) || (_ = e.dirname), qe("dirname", e.dirname), qe("relativePath", e.relativePath), qe("cwd", _);
        let P = m.engine || {};
        if (p.errorFormat ? this._errorFormat = p.errorFormat : k.env.NODE_ENV === "production" ? this._errorFormat = "minimal" : k.env.NO_COLOR ? this._errorFormat = "colorless" : this._errorFormat = "colorless", this._runtimeDataModel = e.runtimeDataModel, this._engineConfig = { cwd: _, dirname: e.dirname, enableDebugLogs: b, allowTriggerPanic: P.allowTriggerPanic, prismaPath: P.binaryPath ?? void 0, engineEndpoint: P.endpoint, generator: e.generator, showColors: this._errorFormat === "pretty", logLevel: p.log && hy(p.log), logQueries: p.log && !!(typeof p.log == "string" ? p.log === "query" : p.log.find((O) => typeof O == "string" ? O === "query" : O.level === "query")), env: (a == null ? void 0 : a.parsed) ?? {}, flags: [], engineWasm: e.engineWasm, compilerWasm: e.compilerWasm, clientVersion: e.clientVersion, engineVersion: e.engineVersion, previewFeatures: this._previewFeatures, activeProvider: e.activeProvider, inlineSchema: e.inlineSchema, overrideDatasources: Gm(p, e.datasourceNames), inlineDatasources: e.inlineDatasources, inlineSchemaHash: e.inlineSchemaHash, tracingHelper: this._tracingHelper, transactionOptions: { maxWait: ((d = p.transactionOptions) == null ? void 0 : d.maxWait) ?? 2e3, timeout: ((f = p.transactionOptions) == null ? void 0 : f.timeout) ?? 5e3, isolationLevel: (h = p.transactionOptions) == null ? void 0 : h.isolationLevel }, logEmitter: i, isBundled: e.isBundled, adapter: o }, this._accelerateEngineConfig = { ...this._engineConfig, accelerateUtils: { resolveDatasourceUrl: Li, getBatchRequestPayload: Di, prismaGraphQLToJSError: Ci, PrismaClientUnknownRequestError: ge, PrismaClientInitializationError: ee, PrismaClientKnownRequestError: ht, debug: fe("prisma:client:accelerateEngine"), engineVersion: Wp.version, clientVersion: e.clientVersion } }, qe("clientVersion", e.clientVersion), this._engine = ey(e, this._engineConfig), this._requestHandler = new by(this, i), p.log) for (let O of p.log) {
          let N = typeof O == "string" ? O : O.emit === "stdout" ? O.level : null;
          N && this.$on(N, (X) => {
            xr.log(`${xr.tags[N] ?? ""}`, X.message || X.query);
          });
        }
      } catch (p) {
        throw p.clientVersion = this._clientVersion, p;
      }
      return this._appliedParent = Wr(this);
    }
    get [Symbol.toStringTag]() {
      return "PrismaClient";
    }
    $on(r, i) {
      return r === "beforeExit" ? this._engine.onBeforeExit(i) : r && this._engineConfig.logEmitter.on(r, i), this;
    }
    $connect() {
      try {
        return this._engine.start();
      } catch (r) {
        throw r.clientVersion = this._clientVersion, r;
      }
    }
    async $disconnect() {
      try {
        await this._engine.stop();
      } catch (r) {
        throw r.clientVersion = this._clientVersion, r;
      } finally {
        Xc();
      }
    }
    $executeRawInternal(r, i, s, o) {
      let a = this._activeProvider;
      return this._request({ action: "executeRaw", args: s, transaction: r, clientMethod: i, argsMapper: Ms({ clientMethod: i, activeProvider: a }), callsite: Jt(this._errorFormat), dataPath: [], middlewareArgsMapper: o });
    }
    $executeRaw(r, ...i) {
      return this._createPrismaPromise((s) => {
        if (r.raw !== void 0 || r.sql !== void 0) {
          let [o, a] = Js(r, i);
          return Fs(this._activeProvider, o.text, o.values, Array.isArray(r) ? "prisma.$executeRaw`<SQL>`" : "prisma.$executeRaw(sql`<SQL>`)"), this.$executeRawInternal(s, "$executeRaw", o, a);
        }
        throw new Ke("`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n", { clientVersion: this._clientVersion });
      });
    }
    $executeRawUnsafe(r, ...i) {
      return this._createPrismaPromise((s) => (Fs(this._activeProvider, r, i, "prisma.$executeRawUnsafe(<SQL>, [...values])"), this.$executeRawInternal(s, "$executeRawUnsafe", [r, ...i])));
    }
    $runCommandRaw(r) {
      if (e.activeProvider !== "mongodb") throw new Ke(`The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`, { clientVersion: this._clientVersion });
      return this._createPrismaPromise((i) => this._request({ args: r, clientMethod: "$runCommandRaw", dataPath: [], action: "runCommandRaw", argsMapper: ny, callsite: Jt(this._errorFormat), transaction: i }));
    }
    async $queryRawInternal(r, i, s, o) {
      let a = this._activeProvider;
      return this._request({ action: "queryRaw", args: s, transaction: r, clientMethod: i, argsMapper: Ms({ clientMethod: i, activeProvider: a }), callsite: Jt(this._errorFormat), dataPath: [], middlewareArgsMapper: o });
    }
    $queryRaw(r, ...i) {
      return this._createPrismaPromise((s) => {
        if (r.raw !== void 0 || r.sql !== void 0) return this.$queryRawInternal(s, "$queryRaw", ...Js(r, i));
        throw new Ke("`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n", { clientVersion: this._clientVersion });
      });
    }
    $queryRawTyped(r) {
      return this._createPrismaPromise((i) => {
        if (!this._hasPreviewFlag("typedSql")) throw new Ke("`typedSql` preview feature must be enabled in order to access $queryRawTyped API", { clientVersion: this._clientVersion });
        return this.$queryRawInternal(i, "$queryRawTyped", r);
      });
    }
    $queryRawUnsafe(r, ...i) {
      return this._createPrismaPromise((s) => this.$queryRawInternal(s, "$queryRawUnsafe", [r, ...i]));
    }
    _transactionWithArray({ promises: r, options: i }) {
      let s = Dy.nextId(), o = fy(r.length), a = r.map((l, u) => {
        var f;
        if ((l == null ? void 0 : l[Symbol.toStringTag]) !== "PrismaPromise") throw new Error("All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.");
        let c = (i == null ? void 0 : i.isolationLevel) ?? this._engineConfig.transactionOptions.isolationLevel, d = { kind: "batch", id: s, index: u, isolationLevel: c, lock: o };
        return ((f = l.requestTransaction) == null ? void 0 : f.call(l, d)) ?? l;
      });
      return Ty(a);
    }
    async _transactionWithCallback({ callback: r, options: i }) {
      let s = { traceparent: this._tracingHelper.getTraceParent() }, o = { maxWait: (i == null ? void 0 : i.maxWait) ?? this._engineConfig.transactionOptions.maxWait, timeout: (i == null ? void 0 : i.timeout) ?? this._engineConfig.transactionOptions.timeout, isolationLevel: (i == null ? void 0 : i.isolationLevel) ?? this._engineConfig.transactionOptions.isolationLevel }, a = await this._engine.transaction("start", s, o), l;
      try {
        let u = { kind: "itx", ...a };
        l = await r(this._createItxClient(u)), await this._engine.transaction("commit", s, a);
      } catch (u) {
        throw await this._engine.transaction("rollback", s, a).catch(() => {
        }), u;
      }
      return l;
    }
    _createItxClient(r) {
      return Ot(Wr(Ot(jm(this), [Ne("_appliedParent", () => this._appliedParent._createItxClient(r)), Ne("_createPrismaPromise", () => Us(r)), Ne(xy, () => r.id)])), [Vr(Vm)]);
    }
    $transaction(r, i) {
      var a;
      let s;
      typeof r == "function" ? ((a = this._engineConfig.adapter) == null ? void 0 : a.adapterName) === "@prisma/adapter-d1" ? s = () => {
        throw new Error("Cloudflare D1 does not support interactive transactions. We recommend you to refactor your queries with that limitation in mind, and use batch transactions with `prisma.$transactions([])` where applicable.");
      } : s = () => this._transactionWithCallback({ callback: r, options: i }) : s = () => this._transactionWithArray({ promises: r, options: i });
      let o = { name: "transaction", attributes: { method: "$transaction" } };
      return this._tracingHelper.runInChildSpan(o, s);
    }
    _request(r) {
      r.otelParentCtx = this._tracingHelper.getActiveContext();
      let i = r.middlewareArgsMapper ?? Ry, s = { args: i.requestArgsToMiddlewareArgs(r.args), dataPath: r.dataPath, runInTransaction: !!r.transaction, action: r.action, model: r.model }, o = { operation: { name: "operation", attributes: { method: s.action, model: s.model, name: s.model ? `${s.model}.${s.action}` : s.action } } }, a = async (l) => {
        let { runInTransaction: u, args: c, ...d } = l, f = { ...r, ...d };
        c && (f.args = i.middlewareArgsToRequestArgs(c)), r.transaction !== void 0 && u === !1 && delete f.transaction;
        let h = await Jm(this, f);
        return f.model ? zm({ result: h, modelName: f.model, args: f.args, extensions: this._extensions, runtimeDataModel: this._runtimeDataModel, globalOmit: this._globalOmit }) : h;
      };
      return this._tracingHelper.runInChildSpan(o.operation, () => new cc("prisma-client-request").runInAsyncScope(() => a(s)));
    }
    async _executeRequest({ args: r, clientMethod: i, dataPath: s, callsite: o, action: a, model: l, argsMapper: u, transaction: c, unpacker: d, otelParentCtx: f, customDataProxyFetch: h }) {
      try {
        r = u ? u(r) : r;
        let p = { name: "serialize" }, m = this._tracingHelper.runInChildSpan(p, () => Dp({ modelName: l, runtimeDataModel: this._runtimeDataModel, action: a, args: r, clientMethod: i, callsite: o, extensions: this._extensions, errorFormat: this._errorFormat, clientVersion: this._clientVersion, previewFeatures: this._previewFeatures, globalOmit: this._globalOmit }));
        return fe.enabled("prisma:client") && (qe("Prisma Client call:"), qe(`prisma.${i}(${Kp(r)})`), qe("Generated request:"), qe(JSON.stringify(m, null, 2) + `
`)), (c == null ? void 0 : c.kind) === "batch" && await c.lock, this._requestHandler.request({ protocolQuery: m, modelName: l, action: a, clientMethod: i, dataPath: s, callsite: o, args: r, extensions: this._extensions, transaction: c, unpacker: d, otelParentCtx: f, otelChildCtx: this._tracingHelper.getActiveContext(), globalOmit: this._globalOmit, customDataProxyFetch: h });
      } catch (p) {
        throw p.clientVersion = this._clientVersion, p;
      }
    }
    _hasPreviewFlag(r) {
      var i;
      return !!((i = this._engineConfig.previewFeatures) != null && i.includes(r));
    }
    $applyPendingMigrations() {
      return this._engine.applyPendingMigrations();
    }
  }
  return t;
}
function Js(e, t) {
  return jy(e) ? [new mn(e, t), oy] : [e, ay];
}
function jy(e) {
  return Array.isArray(e) && Array.isArray(e.raw);
}
var Ly = /* @__PURE__ */ new Set(["toJSON", "$$typeof", "asymmetricMatch", Symbol.iterator, Symbol.toStringTag, Symbol.isConcatSpreadable, Symbol.toPrimitive]);
function Fy(e) {
  return new Proxy(e, { get(t, n) {
    if (n in t) return t[n];
    if (!Ly.has(n)) throw new TypeError(`Invalid enum value: ${String(n)}`);
  } });
}
/*! Bundled license information:

decimal.js/decimal.mjs:
  (*!
   *  decimal.js v10.5.0
   *  An arbitrary-precision Decimal type for JavaScript.
   *  https://github.com/MikeMcl/decimal.js
   *  Copyright (c) 2025 Michael Mclaughlin <M8ch88l@gmail.com>
   *  MIT Licence
   *)
*/
const on = {
  generator: {
    name: "client",
    provider: {
      fromEnvVar: null,
      value: "prisma-client"
    },
    output: {
      value: "C:\\Users\\marcosv\\Documents\\GitHub\\lib-app\\electron\\generated\\prisma",
      fromEnvVar: null
    },
    config: {
      engineType: "library"
    },
    binaryTargets: [
      {
        fromEnvVar: null,
        value: "windows",
        native: !0
      },
      {
        fromEnvVar: null,
        value: "debian-openssl-1.1.x"
      },
      {
        fromEnvVar: null,
        value: "debian-openssl-3.0.x"
      }
    ],
    previewFeatures: [],
    sourceFilePath: "C:\\Users\\marcosv\\Documents\\GitHub\\lib-app\\prisma\\schema.prisma",
    isCustomOutput: !0
  },
  relativePath: "../../../prisma",
  clientVersion: "6.19.3",
  engineVersion: "c2990dca591cba766e3b7ef5d9e8a84796e47ab7",
  datasourceNames: [
    "db"
  ],
  activeProvider: "sqlite",
  postinstall: !1,
  inlineDatasources: {
    db: {
      url: {
        fromEnvVar: "DATABASE_URL",
        value: null
      }
    }
  },
  inlineSchema: `generator client {
  provider      = "prisma-client"
  output        = "../electron/generated/prisma"
  // Keep native for development/build-host use and include engines for Mint 20.x and 21.x/22.x.
  binaryTargets = ["native", "debian-openssl-1.1.x", "debian-openssl-3.0.x"]
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model User {
  id                  String    @id @default(uuid())
  name                String
  email               String    @unique
  accessCode          String    @unique
  passwordHash        String    @map("password_hash")
  role                Role      @default(BIBLIOTECARIO)
  isActive            Boolean   @default(true) @map("is_active")
  mustChangePassword  Boolean   @default(true) @map("must_change_password")
  failedLoginAttempts Int       @default(0) @map("failed_login_attempts")
  lastFailedLoginAt   DateTime? @map("last_failed_login_at")
  lockedUntil         DateTime? @map("locked_until")
  createdAt           DateTime  @default(now()) @map("created_at")
  updatedAt           DateTime  @updatedAt @map("updated_at")

  accessLogs AccessLog[]

  @@map("users")
}

model AccessLog {
  id                  String   @id @default(uuid())
  userId              String?  @map("user_id")
  attemptedAccessCode String   @map("attempted_access_code")
  success             Boolean
  failureReason       String?  @map("failure_reason")
  createdAt           DateTime @default(now()) @map("created_at")

  user User? @relation(fields: [userId], references: [id], onDelete: SetNull)

  @@map("access_logs")
}

enum Role {
  BIBLIOTECARIO
}
`,
  inlineSchemaHash: "1a538187140b9a9b722d76ea074d21386fc4f9afe93017f874dc85631dcdc70a",
  copyEngine: !0,
  runtimeDataModel: {
    models: {},
    enums: {},
    types: {}
  },
  dirname: ""
};
on.runtimeDataModel = JSON.parse('{"models":{"User":{"dbName":"users","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":null,"default":{"name":"uuid","args":[4]},"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"accessCode","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"passwordHash","dbName":"password_hash","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"role","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Role","nativeType":null,"default":"BIBLIOTECARIO","isGenerated":false,"isUpdatedAt":false},{"name":"isActive","dbName":"is_active","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","nativeType":null,"default":true,"isGenerated":false,"isUpdatedAt":false},{"name":"mustChangePassword","dbName":"must_change_password","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","nativeType":null,"default":true,"isGenerated":false,"isUpdatedAt":false},{"name":"failedLoginAttempts","dbName":"failed_login_attempts","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","nativeType":null,"default":0,"isGenerated":false,"isUpdatedAt":false},{"name":"lastFailedLoginAt","dbName":"last_failed_login_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"lockedUntil","dbName":"locked_until","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","dbName":"updated_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":true},{"name":"accessLogs","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"AccessLog","nativeType":null,"relationName":"AccessLogToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"AccessLog":{"dbName":"access_logs","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":null,"default":{"name":"uuid","args":[4]},"isGenerated":false,"isUpdatedAt":false},{"name":"userId","dbName":"user_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"attemptedAccessCode","dbName":"attempted_access_code","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"success","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Boolean","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"failureReason","dbName":"failure_reason","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","nativeType":null,"relationName":"AccessLogToUser","relationFromFields":["userId"],"relationToFields":["id"],"relationOnDelete":"SetNull","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{"Role":{"values":[{"name":"BIBLIOTECARIO","dbName":null}],"dbName":null}},"types":{}}');
on.engineWasm = void 0;
on.compilerWasm = void 0;
function My(e) {
  return on.dirname = e, Cy(on);
}
pi.getExtensionContext;
Fy({
  Serializable: "Serializable"
});
pi.defineExtension;
globalThis.__dirname = tt.dirname(aa(import.meta.url));
const Uy = My(__dirname);
tt.join(__dirname, "query_engine-windows.dll.node");
tt.join(k.cwd(), "electron/generated/prisma/query_engine-windows.dll.node");
tt.join(__dirname, "libquery_engine-debian-openssl-1.1.x.so.node");
tt.join(k.cwd(), "electron/generated/prisma/libquery_engine-debian-openssl-1.1.x.so.node");
tt.join(__dirname, "libquery_engine-debian-openssl-3.0.x.so.node");
tt.join(k.cwd(), "electron/generated/prisma/libquery_engine-debian-openssl-3.0.x.so.node");
let Q;
async function zy(e) {
  Q = new Uy({ datasourceUrl: e }), await Q.$connect();
}
async function qy(e) {
  await Q.$executeRawUnsafe(`
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
  const t = (await rc(e, { withFileTypes: !0 })).filter((n) => n.isDirectory()).map((n) => n.name).sort();
  for (const n of t) {
    const r = await ic(
      $.join(e, n, "migration.sql"),
      "utf8"
    ).catch((a) => {
      if (a && typeof a == "object" && "code" in a && a.code === "ENOENT")
        return null;
      throw a;
    });
    if (r === null) continue;
    const i = tc("sha256").update(r).digest("hex"), s = await Q.$queryRaw`
      SELECT "checksum" FROM "_prisma_migrations"
      WHERE "migration_name" = ${n} AND "finished_at" IS NOT NULL
    `;
    if (s.length > 0) {
      if (s[0].checksum !== i)
        throw new Error(`MIGRATION_CHECKSUM_MISMATCH:${n}`);
      continue;
    }
    const o = r.replace(/^\s*--.*$/gm, "").split(";").map((a) => a.trim()).filter((a) => a.length > 0 && !/^PRAGMA\b/i.test(a));
    await Q.$transaction(async (a) => {
      for (const l of o)
        await a.$executeRawUnsafe(l);
      await a.$executeRaw`
        INSERT INTO "_prisma_migrations"
          ("id", "checksum", "finished_at", "migration_name", "started_at", "applied_steps_count")
        VALUES
          (${nc()}, ${i}, CURRENT_TIMESTAMP, ${n}, CURRENT_TIMESTAMP, ${o.length})
      `;
    });
  }
}
function Qr(e) {
  const t = Object.values(e).filter((r) => typeof r == "number");
  return Object.entries(e).filter(([r, i]) => t.indexOf(+r) === -1).map(([r, i]) => i);
}
function Hs(e, t = "|") {
  return e.map((n) => cu(n)).join(t);
}
function Yr(e, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
class Vy {
  constructor(t) {
    this._getter = t, this._value = void 0;
  }
  get value() {
    const t = this._getter;
    return t !== void 0 && (this._value = t(), this._getter = void 0), this._value;
  }
}
function Ui(e) {
  return new Vy(e);
}
function Zy(e) {
  return e == null;
}
function zi(e) {
  const t = e.startsWith("^") ? 1 : 0, n = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, n);
}
function yt(e, t, n) {
  Object.defineProperty(e, t, {
    value: n,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function su(e) {
  const t = Object.getOwnPropertyDescriptor(e, "shape");
  return t != null && t.get ? t.get.raw : t == null ? void 0 : t.value;
}
function ze(e) {
  return su(e._zod.def) ?? e._zod.def.shape;
}
function ou(e, t, n) {
  Object.defineProperty(e, t, {
    get() {
      const r = n();
      return yt(this, t, r), r;
    },
    enumerable: !0,
    configurable: !0
  });
}
function au(e, t, n) {
  t in e ? yt(e, t, n) : e[t] = n;
}
function mt(e, t, n, r) {
  const i = ze(t);
  for (const s of n) {
    const o = Object.getOwnPropertyDescriptor(i, s);
    o.enumerable && (o.get ? ou(e, s, () => {
      const a = t._zod.def.shape[s];
      return r ? r(a, s) : a;
    }) : au(e, s, r ? r(o.value, s) : o.value));
  }
}
function By(e, t) {
  for (const n of Reflect.ownKeys(t)) {
    const r = Object.getOwnPropertyDescriptor(t, n);
    r.enumerable && (r.get ? ou(e, n, () => t[n]) : au(e, n, r.value));
  }
}
function pe(...e) {
  const t = {};
  for (const n of e) {
    const r = Object.getOwnPropertyDescriptors(n);
    Object.assign(t, r);
  }
  return Object.defineProperties({}, t);
}
function Wy(e) {
  return JSON.stringify(e);
}
function Jy(e) {
  return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const lu = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function Vn(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const Hy = /* @__PURE__ */ Ui(() => {
  var e;
  if (De.jitless || typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) != null && e.includes("Cloudflare")))
    return !1;
  try {
    const t = Function;
    return new t(""), !0;
  } catch {
    return !1;
  }
});
function an(e) {
  if (Vn(e) === !1)
    return !1;
  const t = e.constructor;
  if (t === void 0 || typeof t != "function")
    return !0;
  const n = t.prototype;
  return !(Vn(n) === !1 || Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") === !1);
}
function uu(e) {
  return an(e) ? { ...e } : Array.isArray(e) ? [...e] : e instanceof Map ? new Map(e) : e instanceof Set ? new Set(e) : e;
}
const Ky = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function lr(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function rt(e, t, n) {
  const r = new e._zod.constr(t ?? e._zod.def);
  return (!t || n != null && n.parent) && (r._zod.parent = e), r;
}
function x(e) {
  const t = e;
  if (!t)
    return {};
  if (typeof t == "string")
    return { error: () => t };
  if ((t == null ? void 0 : t.message) !== void 0) {
    if ((t == null ? void 0 : t.error) !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    t.error = t.message;
  }
  return delete t.message, typeof t.error == "string" ? { ...t, error: () => t.error } : t;
}
function cu(e) {
  return typeof e == "bigint" ? e.toString() + "n" : typeof e == "string" ? `"${e}"` : `${e}`;
}
function Gy(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin !== void 0 && e[t]._zod.optout === "optional");
}
const Qy = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
}, Yy = {
  int64: [/* @__PURE__ */ BigInt("-9223372036854775808"), /* @__PURE__ */ BigInt("9223372036854775807")],
  uint64: [/* @__PURE__ */ BigInt(0), /* @__PURE__ */ BigInt("18446744073709551615")]
};
function Xy(e, t) {
  const n = e._zod.def, r = n.checks;
  if (r && r.length > 0)
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  const s = {};
  return mt(s, e, ur(e, t)), rt(e, pe(n, { shape: s, checks: [] }));
}
function ur(e, t) {
  var i;
  const n = ze(e), r = [];
  for (const s of Reflect.ownKeys(t)) {
    if (!((i = Object.getOwnPropertyDescriptor(n, s)) != null && i.enumerable))
      throw new Error(`Unrecognized key: "${String(s)}"`);
    t[s] && r.push(s);
  }
  return r;
}
function ew(e, t) {
  const n = e._zod.def, r = n.checks;
  if (r && r.length > 0)
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  const s = new Set(ur(e, t)), o = {};
  return mt(o, e, Reflect.ownKeys(ze(e)).filter((a) => !s.has(a))), rt(e, pe(n, { shape: o, checks: [] }));
}
function tw(e, t) {
  if (!an(t))
    throw new Error("Invalid input to extend: expected a plain object");
  const n = e._zod.def.checks;
  if (n && n.length > 0) {
    const i = ze(e);
    for (const s of Reflect.ownKeys(t))
      if (Object.getOwnPropertyDescriptor(i, s) !== void 0)
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  return rt(e, pe(e._zod.def, { shape: du(e, t) }));
}
function du(e, t) {
  const n = {};
  return mt(n, e, Reflect.ownKeys(ze(e))), By(n, t), n;
}
function nw(e, t) {
  if (!an(t))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  return rt(e, pe(e._zod.def, { shape: du(e, t) }));
}
function rw(e, t) {
  var i, s;
  if (!((i = t == null ? void 0 : t._zod) != null && i.def))
    throw new Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
  if ((s = e._zod.def.checks) != null && s.length)
    throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
  const n = {};
  mt(n, e, Reflect.ownKeys(ze(e))), mt(n, t, Reflect.ownKeys(ze(t)));
  const r = pe(e._zod.def, {
    shape: n,
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: t._zod.def.checks ?? []
  });
  return rt(e, r);
}
function Ks(e, t, n, r = "partial") {
  const s = t._zod.def.checks;
  if (s && s.length > 0)
    throw new Error(`.${r}() cannot be used on object schemas containing refinements`);
  const a = n ? new Set(ur(t, n)) : void 0, l = {};
  return mt(l, t, Reflect.ownKeys(ze(t)), e && ((u, c) => a && !a.has(c) ? u : new e({ type: "optional", innerType: u }))), rt(t, pe(t._zod.def, { shape: l, checks: [] }));
}
function iw(e, t, n) {
  const r = n ? new Set(ur(t, n)) : void 0, i = {};
  return mt(i, t, Reflect.ownKeys(ze(t)), (s, o) => (
    // overwrite with non-optional
    r && !r.has(o) ? s : new e({ type: "nonoptional", innerType: s })
  )), rt(t, pe(t._zod.def, { shape: i }));
}
function Me(e, t = 0) {
  var n;
  if (e.aborted === !0)
    return !0;
  for (let r = t; r < e.issues.length; r++)
    if (((n = e.issues[r]) == null ? void 0 : n.continue) !== !0)
      return !0;
  return !1;
}
function sw(e, t = 0) {
  var n;
  if (e.aborted === !0)
    return !0;
  for (let r = t; r < e.issues.length; r++)
    if (((n = e.issues[r]) == null ? void 0 : n.continue) === !1)
      return !0;
  return !1;
}
function fu(e, t) {
  return t.map((n) => {
    var r;
    return (r = n).path ?? (r.path = []), n.path.unshift(e), n;
  });
}
function Ft(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.message;
}
function Gs(e) {
  const t = [];
  for (const n of e ?? []) {
    const r = n._zod.def;
    if (!/_(length|size)$|_equals$/.test(r.check))
      break;
    const i = r.maximum ?? r.length ?? r.size;
    i >= 0 && t.push([i, n]);
  }
  return t;
}
function Xr(e, t, n) {
  var r;
  for (let i = t; i < e.length; i++)
    (r = e[i]).schema ?? (r.schema = n);
}
function Rt(e, t, n) {
  var l, u, c, d, f, h, p, m, b, _;
  var r;
  const i = (u = (l = e.inst) == null ? void 0 : l._zod) == null ? void 0 : u.traits;
  i != null && i.has("$ZodType") && (i.has("$ZodCheck") ? (r = e).schema ?? (r.schema = e.inst) : e.schema = e.inst);
  const s = e.schema !== e.inst ? (d = (c = e.schema) == null ? void 0 : c._zod.def) == null ? void 0 : d.error : void 0, o = e.message ? e.message : Ft((p = (h = (f = e.inst) == null ? void 0 : f._zod.def) == null ? void 0 : h.error) == null ? void 0 : p.call(h, e)) ?? Ft(s == null ? void 0 : s(e)) ?? Ft((m = t == null ? void 0 : t.error) == null ? void 0 : m.call(t, e)) ?? Ft((b = n.customError) == null ? void 0 : b.call(n, e)) ?? Ft((_ = n.localeError) == null ? void 0 : _.call(n, e)) ?? "Invalid input", a = {};
  for (const P of Object.keys(e))
    P === "inst" || P === "schema" || P === "continue" || P === "input" || P === "__proto__" || (a[P] = e[P]);
  return a.path ?? (a.path = []), a.message = o, t != null && t.reportInput && (a.input = e.input), a;
}
const ow = /[\uD800-\uDBFF]/;
function qi(e) {
  const t = e.length;
  if (!ow.test(e))
    return t;
  let n = t;
  for (let r = 0; r < t - 1; r++)
    (e.charCodeAt(r) & 64512) === 55296 && (e.charCodeAt(r + 1) & 64512) === 56320 && (n--, r++);
  return n;
}
function Vi(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function aw(e) {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "nan" : "number";
    case "object": {
      if (e === null)
        return "null";
      if (Array.isArray(e))
        return "array";
      const n = e;
      if (n && Object.getPrototypeOf(n) !== Object.prototype && "constructor" in n && n.constructor)
        return n.constructor.name;
    }
  }
  return t;
}
function ln(...e) {
  const [t, n, r] = e;
  return typeof t == "string" ? {
    message: t,
    code: "custom",
    input: n,
    inst: r
  } : { ...t };
}
function lw(e, t) {
  for (const n in t) {
    const r = Object.getOwnPropertyDescriptor(t, n);
    r.get ? Object.defineProperty(e, n, { ...r, enumerable: !1 }) : cw(e, n, r.value);
  }
}
function et(e, t, n, r = !0) {
  return Object.defineProperty(e, t, { configurable: !0, writable: !0, enumerable: r, value: n }), n;
}
function hu(e, t, n) {
  return et(e, t, n, !1);
}
function uw(e, t) {
  for (const n in e) {
    const r = e[n];
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !0,
      get() {
        return et(this, n, r(this));
      },
      set(i) {
        et(this, n, i);
      }
    });
  }
  return t;
}
function cw(e, t, n) {
  Object.defineProperty(e, t, {
    configurable: !0,
    get() {
      return this == null ? n : et(this, t, n.bind(this));
    },
    set(r) {
      et(this, t, r);
    }
  });
}
function dw(e, t) {
  const n = Object.getPrototypeOf(e);
  return t in n ? void 0 : n;
}
let vr, Je = !1;
const fw = {
  configurable: !0,
  get() {
    Je = !0;
  }
};
function V(e, t, n) {
  const r = Object.getPrototypeOf(e._zod);
  if (t in r && vr !== e._zod) {
    vr = void 0;
    return;
  }
  vr = e._zod, Object.defineProperty(r, t, {
    configurable: !0,
    get() {
      Object.defineProperty(this, t, fw);
      const i = Je;
      Je = !1;
      try {
        const s = n(this);
        return Je ? delete this[t] : Object.defineProperty(this, t, { configurable: !0, writable: !0, value: s }), Je = Je || i, s;
      } catch (s) {
        throw delete this[t], Je = Je || i, s;
      }
    },
    set(i) {
      Object.defineProperty(this, t, { configurable: !0, writable: !0, value: i });
    }
  });
}
function hw(e, t, n, r) {
  const i = dw(e, t);
  i && Object.defineProperty(i, t, {
    configurable: !0,
    get() {
      const s = { configurable: !0, writable: !0, enumerable: r, value: void 0 };
      return Object.defineProperty(this, t, s), s.value = n(this), Object.defineProperty(this, t, s), s.value;
    },
    set(s) {
      Object.defineProperty(this, t, { configurable: !0, writable: !0, enumerable: r, value: s });
    }
  });
}
const pw = "~constantCatch";
function mw(e) {
  const t = () => e;
  return t[pw] = !0, t;
}
var Qs;
const br = { value: void 0, enumerable: !1 };
let Ys = "captureStackTrace" in Error ? Error : null;
function gw(e) {
  const t = Ys;
  if (t) {
    const n = t.stackTraceLimit;
    if (typeof n == "number") {
      try {
        t.stackTraceLimit = 0;
      } catch {
        return Ys = null, new e();
      }
      try {
        return new e();
      } finally {
        t.stackTraceLimit = n;
      }
    }
  }
  return new e();
}
function w(e, t, n, r) {
  const i = {};
  function s(f) {
    this.def = f, this.constr = d, this.traits = /* @__PURE__ */ new Set();
  }
  s.prototype = i;
  const o = n, a = o && /* @__PURE__ */ new WeakSet();
  function l(f, h) {
    if (f._zod) {
      if (f._zod.traits.has(e))
        return;
    } else {
      br.value = new s(h);
      try {
        Object.defineProperty(f, "_zod", br);
      } finally {
        br.value = void 0;
      }
    }
    if (f._zod.traits.add(e), t(f, h), a) {
      const m = Object.getPrototypeOf(f), b = f._zod.constr.prototype;
      let _ = m;
      for (; _ && _ !== b; )
        _ = Object.getPrototypeOf(_);
      const P = _ ?? m;
      a.has(P) || (a.add(P), lw(P, o));
    }
    const p = d.prototype;
    for (const m in p)
      Object.prototype.hasOwnProperty.call(p, m) && (m in f || (f[m] = p[m].bind(f)));
  }
  const u = (r == null ? void 0 : r.Parent) ?? Object;
  class c extends u {
  }
  Object.defineProperty(c, "name", { value: e });
  function d(f) {
    var b;
    const h = r != null && r.Parent ? gw(c) : this;
    l(h, f);
    const p = h._zod.deferred;
    if (p) {
      for (const _ of p)
        _();
      h._zod.deferred = void 0;
    }
    const m = (b = globalThis.__zod_globalConfig) == null ? void 0 : b.postProcessor;
    return m && m(h), h;
  }
  return Object.defineProperty(d, "init", { value: l }), Object.defineProperty(d, Symbol.hasInstance, {
    value: (f) => {
      var h, p;
      return r != null && r.Parent && f instanceof r.Parent ? !0 : (p = (h = f == null ? void 0 : f._zod) == null ? void 0 : h.traits) == null ? void 0 : p.has(e);
    }
  }), Object.defineProperty(d, "name", { value: e }), d;
}
class ct extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class pu extends Error {
  constructor(t) {
    super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
  }
}
(Qs = globalThis).__zod_globalConfig ?? (Qs.__zod_globalConfig = {});
const De = globalThis.__zod_globalConfig;
function it(e) {
  return e && Object.assign(De, e), De;
}
function yw() {
  const e = this._zod;
  return e.message ?? (e.message = JSON.stringify(e.def, Yr, 2)), e.message;
}
function ww(e) {
  this._zod.message = e;
}
const vw = {
  get: yw,
  set: ww,
  enumerable: !0,
  configurable: !0
}, _r = { value: void 0, enumerable: !1 }, Xs = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]), bw = (e, t) => {
  e.name = "$ZodError", _r.value = t, Object.defineProperty(e, "issues", _r), _r.value = void 0, Object.defineProperty(e, "message", vw);
  const n = Object.getPrototypeOf(e);
  Xs.has(n) || (Xs.add(n), Object.defineProperty(n, "toString", {
    configurable: !0,
    enumerable: !1,
    get() {
      const r = () => this.message;
      return Object.defineProperty(this, "toString", { value: r, configurable: !0, writable: !0 }), r;
    },
    set(r) {
      Object.defineProperty(this, "toString", { value: r, configurable: !0, writable: !0 });
    }
  }));
}, _w = w("$ZodError", bw);
function Ew(e, t, n) {
  return Object.prototype.hasOwnProperty.call(e, t) || (t === "__proto__" ? Object.defineProperty(e, t, { value: n(), writable: !0, enumerable: !0, configurable: !0 }) : e[t] = n()), e[t];
}
function Pw(e, t = (n) => n.message) {
  const n = {}, r = [];
  for (const i of e.issues)
    i.path.length > 0 ? Ew(n, i.path[0], () => []).push(t(i)) : r.push(t(i));
  return { formErrors: r, fieldErrors: n };
}
function $w(e, t = (n) => n.message) {
  const n = { _errors: [] }, r = (i, s = []) => {
    for (const o of i.issues)
      if (o.code === "invalid_union" && o.errors.length)
        o.errors.map((a) => r({ issues: a }, [...s, ...o.path]));
      else if (o.code === "invalid_key")
        r({ issues: o.issues }, [...s, ...o.path]);
      else if (o.code === "invalid_element")
        r({ issues: o.issues }, [...s, ...o.path]);
      else {
        const a = [...s, ...o.path];
        if (a.length === 0)
          n._errors.push(t(o));
        else {
          let l = n, u = 0;
          for (; u < a.length; ) {
            const c = a[u], d = u === a.length - 1;
            if (c === "_errors") {
              d && l._errors.push(t(o)), u++;
              continue;
            }
            Object.prototype.hasOwnProperty.call(l, c) || Object.defineProperty(l, c, {
              value: { _errors: [] },
              enumerable: !0,
              writable: !0,
              configurable: !0
            });
            const f = l[c];
            d && f._errors.push(t(o)), l = f, u++;
          }
        }
      }
  };
  return r(e), n;
}
function cr(e, t) {
  return { callee: (t == null ? void 0 : t.callee) ?? e, Err: t == null ? void 0 : t.Err };
}
const Zi = (e) => {
  const t = (n, r, i, s) => {
    const o = i ? { ...i, async: !1 } : { async: !1 }, a = n._zod.run({ value: r, issues: [] }, o);
    if (a instanceof Promise)
      throw new ct();
    if (a.issues.length) {
      const l = new ((s == null ? void 0 : s.Err) ?? e)(a.issues.map((u) => Rt(u, o, it())));
      throw lu(l, (s == null ? void 0 : s.callee) ?? t), l;
    }
    return a.value;
  };
  return t;
}, Bi = (e) => {
  const t = async (n, r, i, s) => {
    const o = i ? { ...i, async: !0 } : { async: !0 };
    let a = n._zod.run({ value: r, issues: [] }, o);
    if (a instanceof Promise && (a = await a), a.issues.length) {
      const l = new ((s == null ? void 0 : s.Err) ?? e)(a.issues.map((u) => Rt(u, o, it())));
      throw lu(l, (s == null ? void 0 : s.callee) ?? t), l;
    }
    return a.value;
  };
  return t;
}, Wi = (e) => (t, n, r) => {
  const i = r ? { ...r, async: !1 } : { async: !1 }, s = t._zod.run({ value: n, issues: [] }, i);
  if (s instanceof Promise)
    throw new ct();
  return s.issues.length ? mu(e, s.issues, i) : { success: !0, data: s.value };
};
function mu(e, t, n) {
  let r;
  return {
    success: !1,
    get error() {
      return r || (r = new e(t.map((i) => Rt(i, n, it()))), t = void 0, n = void 0), r;
    },
    set error(i) {
      r = i, t = void 0, n = void 0;
    }
  };
}
const Ji = (e) => async (t, n, r) => {
  const i = r ? { ...r, async: !0 } : { async: !0 };
  let s = t._zod.run({ value: n, issues: [] }, i);
  return s instanceof Promise && (s = await s), s.issues.length ? mu(e, s.issues, i) : { success: !0, data: s.value };
}, Aw = /* @__PURE__ */ Symbol.for("zod.compile.invalid"), Sw = /* @__PURE__ */ Symbol.for("zod.compile.fallback"), Ow = (e, t, n) => {
  const r = e._zod.bag.validator;
  if (r !== void 0) {
    if (r(t) !== Aw)
      return !0;
    if (r.definite === !0 && n === void 0)
      return !1;
  }
  return kw(e, t, n);
};
function kw(e, t, n) {
  const r = n ? { ...n, async: !1, abortEarly: !0 } : { async: !1, abortEarly: !0 }, i = e._zod.bag.fallbackRun;
  let s;
  if (i ? (r[Sw] = !0, s = i({ value: t, issues: [] }, r)) : s = e._zod.run({ value: t, issues: [] }, r), s instanceof Promise)
    throw new ct();
  return s.issues.length === 0;
}
const Iw = async (e, t, n) => {
  const r = n ? { ...n, async: !0, abortEarly: !0 } : { async: !0, abortEarly: !0 };
  let i = e._zod.run({ value: t, issues: [] }, r);
  return i instanceof Promise && (i = await i), i.issues.length === 0;
}, Nw = (e) => {
  const t = Zi(e), n = (r, i, s, o) => {
    const a = s ? { ...s, direction: "backward" } : { direction: "backward" };
    return t(r, i, a, cr(n, o));
  };
  return n;
}, Tw = (e) => {
  const t = Zi(e), n = (r, i, s, o) => t(r, i, s, cr(n, o));
  return n;
}, Rw = (e) => {
  const t = Bi(e), n = async (r, i, s, o) => {
    const a = s ? { ...s, direction: "backward" } : { direction: "backward" };
    return await t(r, i, a, cr(n, o));
  };
  return n;
}, xw = (e) => {
  const t = Bi(e), n = async (r, i, s, o) => await t(r, i, s, cr(n, o));
  return n;
}, Dw = (e) => (t, n, r) => {
  const i = r ? { ...r, direction: "backward" } : { direction: "backward" };
  return Wi(e)(t, n, i);
}, Cw = (e) => (t, n, r) => Wi(e)(t, n, r), jw = (e) => async (t, n, r) => {
  const i = r ? { ...r, direction: "backward" } : { direction: "backward" };
  return Ji(e)(t, n, i);
}, Lw = (e) => async (t, n, r) => Ji(e)(t, n, r), Fw = /^[cC][0-9a-z]{6,}$/, Mw = /^[0-9a-z]+$/, Uw = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/, zw = /^[0-9a-vA-V]{20}$/, qw = /^[A-Za-z0-9]{27}$/, Vw = /^[a-zA-Z0-9_-]{21}$/;
function Zw(e) {
  return new RegExp(`^[a-zA-Z0-9_-]{${e}}$`);
}
const Bw = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Ww = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, eo = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Jw = /^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Hw = "^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$";
function Kw() {
  return new RegExp(Hw, "u");
}
const Gw = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Qw = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Yw = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Xw = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, ev = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, tv = /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/, nv = /^https?$/, rv = /^\+[1-9]\d{6,14}$/, gu = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
function iv(e) {
  return new RegExp(`^${e}$`);
}
const sv = /* @__PURE__ */ iv(gu);
function ei(e) {
  const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : e.seconds ? `${t}:[0-5]\\d(?:\\.\\d+)?` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function ov(e) {
  return new RegExp(`^${ei(e)}$`);
}
function av(e) {
  const t = ["Z"];
  e.offset && t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const n = `${ei({ precision: e.precision, seconds: !0 })}(?:${t.join("|")})`, r = e.local ? `${n}|${ei({ precision: e.precision })}` : n;
  return new RegExp(`^${gu}T(?:${r})$`);
}
const lv = /^[\s\S]{0,}$/, uv = /^[^A-Z]*$/, cv = /^[^a-z]*$/, Ce = /* @__PURE__ */ w("$ZodCheck", (e, t) => {
  var n;
  e._zod ?? (e._zod = {}), e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), Hi = (e) => {
  const t = e.value;
  return !Zy(t) && t.length !== void 0;
}, dv = /* @__PURE__ */ w("$ZodCheckMaxLength", (e, t) => {
  var n;
  Ce.init(e, t), (n = e._zod.def).when ?? (n.when = Hi), e._zod.check = (r) => {
    const i = r.value, s = i.length;
    if ((typeof i == "string" && s > t.maximum ? qi(i) : s) <= t.maximum)
      return;
    const a = Vi(i);
    r.issues.push({
      origin: a,
      code: "too_big",
      maximum: t.maximum,
      inclusive: !0,
      input: i,
      inst: e,
      continue: !t.abort
    });
  };
}), fv = /* @__PURE__ */ w("$ZodCheckMinLength", (e, t) => {
  var n;
  Ce.init(e, t), (n = e._zod.def).when ?? (n.when = Hi), e._zod.check = (r) => {
    const i = r.value, s = i.length;
    if ((typeof i == "string" && s >= t.minimum && s < t.minimum * 2 ? qi(i) : s) >= t.minimum)
      return;
    const a = Vi(i);
    r.issues.push({
      origin: a,
      code: "too_small",
      minimum: t.minimum,
      inclusive: !0,
      input: i,
      inst: e,
      continue: !t.abort
    });
  };
}), hv = /* @__PURE__ */ w("$ZodCheckLengthEquals", (e, t) => {
  var n;
  Ce.init(e, t), (n = e._zod.def).when ?? (n.when = Hi), e._zod.check = (r) => {
    const i = r.value, s = i.length, o = typeof i == "string" && s >= t.length && s <= t.length * 2 ? qi(i) : s;
    if (o === t.length)
      return;
    const a = Vi(i), l = o > t.length;
    r.issues.push({
      origin: a,
      ...l ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length },
      inclusive: !0,
      exact: !0,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), dr = /* @__PURE__ */ w("$ZodCheckStringFormat", (e, t) => {
  var n, r;
  Ce.init(e, t), t.pattern ? (n = e._zod).check ?? (n.check = (i) => {
    t.pattern.lastIndex = 0, !t.pattern.test(i.value) && i.issues.push({
      origin: "string",
      code: "invalid_format",
      format: t.format,
      input: i.value,
      ...t.pattern ? { pattern: t.pattern.toString() } : {},
      inst: e,
      continue: !t.abort
    });
  }) : (r = e._zod).check ?? (r.check = () => {
  });
}), pv = /* @__PURE__ */ w("$ZodCheckRegex", (e, t) => {
  dr.init(e, t), e._zod.check = (n) => {
    t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: n.value,
      pattern: t.pattern.toString(),
      inst: e,
      continue: !t.abort
    });
  };
}), mv = /* @__PURE__ */ w("$ZodCheckLowerCase", (e, t) => {
  t.pattern ?? (t.pattern = uv), dr.init(e, t);
}), gv = /* @__PURE__ */ w("$ZodCheckUpperCase", (e, t) => {
  t.pattern ?? (t.pattern = cv), dr.init(e, t);
}), yv = /* @__PURE__ */ w("$ZodCheckIncludes", (e, t) => {
  Ce.init(e, t);
  const n = lr(t.includes), r = new RegExp(typeof t.position == "number" ? `^.{${t.position},}${n}` : n);
  t.pattern = r, e._zod.check = (i) => {
    i.value.includes(t.includes, t.position) || i.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: t.includes,
      input: i.value,
      inst: e,
      continue: !t.abort
    });
  };
}), wv = /* @__PURE__ */ w("$ZodCheckStartsWith", (e, t) => {
  Ce.init(e, t);
  const n = new RegExp(`^${lr(t.prefix)}.*`);
  t.pattern ?? (t.pattern = n), e._zod.check = (r) => {
    r.value.startsWith(t.prefix) || r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: t.prefix,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), vv = /* @__PURE__ */ w("$ZodCheckEndsWith", (e, t) => {
  Ce.init(e, t);
  const n = new RegExp(`.*${lr(t.suffix)}$`);
  t.pattern ?? (t.pattern = n), e._zod.check = (r) => {
    r.value.endsWith(t.suffix) || r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: t.suffix,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), bv = /* @__PURE__ */ w("$ZodCheckOverwrite", (e, t) => {
  Ce.init(e, t), e._zod.check = (n) => {
    n.value = t.tx(n.value);
  };
});
class _v {
  constructor(t = [], n = {}) {
    this.content = [], this.indent = 0, this.args = t, this.closed = n;
  }
  // the compiler catches a child's throw and keeps writing into this doc, so the indent has to unwind with it
  indented(t) {
    this.indent += 1;
    try {
      t(this);
    } finally {
      this.indent -= 1;
    }
  }
  write(t) {
    if (typeof t == "function") {
      t(this, { execution: "sync" }), t(this, { execution: "async" });
      return;
    }
    const r = t.split(`
`).filter((o) => o), i = Math.min(...r.map((o) => o.length - o.trimStart().length)), s = r.map((o) => o.slice(i)).map((o) => " ".repeat(this.indent * 2) + o);
    for (const o of s)
      this.content.push(o);
  }
  compile() {
    const t = Function, n = (this == null ? void 0 : this.content) ?? [""];
    return new t(...Object.keys(this.closed), `return function (${this.args.join(", ")}) {
${n.join(`
`)}
};`)(...Object.values(this.closed));
  }
}
const Ev = {
  major: 4,
  minor: 6,
  patch: 7
}, re = /* @__PURE__ */ w("$ZodType", (e, t) => {
  var s;
  var n;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = Ev;
  const r = e._zod.def.checks, i = e._zod.traits.has("$ZodCheck") ? [e, ...r ?? []] : r != null && r.length ? [...r] : [];
  for (const o of i)
    for (const a of o._zod.onattach)
      a(e);
  if (i.length === 0)
    (n = e._zod).deferred ?? (n.deferred = []), (s = e._zod.deferred) == null || s.push(() => {
      e._zod.run = e._zod.parse;
    });
  else {
    const o = (l, u, c) => {
      if (l.memo)
        return l;
      let d = Me(l), f;
      for (const h of u) {
        if (h._zod.def.when) {
          if (sw(l) || !h._zod.def.when(l))
            continue;
        } else if (d)
          continue;
        const p = l.issues.length, m = h._zod.check(l);
        if (m instanceof Promise && (c == null ? void 0 : c.async) === !1)
          throw new ct();
        if (f || m instanceof Promise)
          f = (f ?? Promise.resolve()).then(async () => {
            await m, l.issues.length !== p && (Xr(l.issues, p, e), d || (d = Me(l, p)));
          });
        else {
          if (l.issues.length === p)
            continue;
          Xr(l.issues, p, e), d || (d = Me(l, p));
        }
      }
      return f ? f.then(() => l) : l;
    }, a = (l, u, c) => {
      if (Me(l))
        return l.aborted = !0, l;
      const d = o(u, i, c);
      if (d instanceof Promise) {
        if (c.async === !1)
          throw new ct();
        return d.then((f) => e._zod.parse(f, c));
      }
      return e._zod.parse(d, c);
    };
    e._zod.run = (l, u) => {
      if (u.skipChecks)
        return e._zod.parse(l, u);
      if (u.direction === "backward") {
        const d = e._zod.parse({ value: l.value, issues: [] }, { ...u, skipChecks: !0 });
        return d instanceof Promise ? d.then((f) => a(f, l, u)) : a(d, l, u);
      }
      const c = e._zod.parse(l, u);
      if (c instanceof Promise) {
        if (u.async === !1)
          throw new ct();
        return c.then((d) => o(d, i, u));
      }
      return o(c, i, u);
    };
  }
}, {
  // Wrappers extend this by installing a richer factory over it; reading it eagerly would defeat the laziness.
  get "~standard"() {
    return hu(this, "~standard", wu(this));
  },
  set "~standard"(e) {
    et(this, "~standard", e);
  }
}), yu = (e, t) => e.issues.length ? { issues: e.issues.map((n) => Rt(n, t, it())) } : { value: e.value };
async function Pv(e, t) {
  const n = { async: !0 };
  return yu(await e._zod.run({ value: t, issues: [] }, n), n);
}
function wu(e) {
  return {
    validate: (t) => {
      const n = { async: !1 };
      try {
        const r = e._zod.run({ value: t, issues: [] }, n);
        if (!(r instanceof Promise))
          return yu(r, n);
      } catch {
      }
      return Pv(e, t);
    },
    vendor: "zod",
    version: 1
  };
}
const Ki = /* @__PURE__ */ w("$ZodString", (e, t) => {
  re.init(e, t), e._zod.pattern = t.pattern ?? lv, e._zod.parse = (n, r) => {
    if (t.coerce)
      try {
        n.value = String(n.value);
      } catch {
      }
    return typeof n.value == "string" || n.issues.push({
      expected: "string",
      code: "invalid_type",
      input: n.value,
      inst: e
    }), n;
  };
}), K = /* @__PURE__ */ w("$ZodStringFormat", (e, t) => {
  dr.init(e, t), Ki.init(e, t);
}), $v = /* @__PURE__ */ w("$ZodGUID", (e, t) => {
  t.pattern ?? (t.pattern = Ww), K.init(e, t);
}), Av = /* @__PURE__ */ w("$ZodUUID", (e, t) => {
  if (t.version) {
    const r = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[t.version];
    if (r === void 0)
      throw new Error(`Invalid UUID version: "${t.version}"`);
    t.pattern ?? (t.pattern = eo(r));
  } else
    t.pattern ?? (t.pattern = eo());
  K.init(e, t);
}), Sv = /* @__PURE__ */ w("$ZodEmail", (e, t) => {
  t.pattern ?? (t.pattern = Jw), K.init(e, t);
}), vu = 1, Zn = 2;
function bu(e) {
  try {
    return typeof URL < "u" && typeof URL.canParse == "function" ? URL.canParse(e) : (new URL(e), !0);
  } catch {
    return !1;
  }
}
function Ov(e, t) {
  return !("normalize" in t) && !("hostname" in t) && !("protocol" in t) ? bu(e) || Zn : kv(e, t);
}
function kv(e, t) {
  var n;
  if (!t.normalize && ((n = t.protocol) == null ? void 0 : n.source) === nv.source && !/^https?:\/\//i.test(e))
    return vu;
  try {
    if (typeof URL < "u") {
      const r = URL;
      if (typeof r.parse == "function")
        return r.parse(e) ?? Zn;
    }
    return new URL(e);
  } catch {
    return Zn;
  }
}
const Iv = /[\t\n\r]/g;
function to(e) {
  return e.replace(Iv, "");
}
function Nv(e, t) {
  return t.lastIndex = 0, t.test(e.hostname);
}
function Tv(e, t) {
  return t.lastIndex = 0, t.test(e.protocol.endsWith(":") ? e.protocol.slice(0, -1) : e.protocol);
}
const Rv = /* @__PURE__ */ w("$ZodURL", (e, t) => {
  K.init(e, t), e._zod.check = (n) => {
    try {
      const r = n.value.trim(), i = Ov(r, t);
      if (i === vu) {
        n.issues.push({
          code: "invalid_format",
          format: "url",
          note: "Invalid URL format",
          input: n.value,
          inst: e,
          continue: !t.abort
        });
        return;
      }
      if (i === Zn) {
        n.issues.push({
          code: "invalid_format",
          format: "url",
          input: n.value,
          inst: e,
          continue: !t.abort
        });
        return;
      }
      if (i === !0) {
        n.value = to(r);
        return;
      }
      t.hostname && !Nv(i, t.hostname) && n.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: t.hostname.source,
        input: n.value,
        inst: e,
        continue: !t.abort
      }), t.protocol && !Tv(i, t.protocol) && n.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: t.protocol.source,
        input: n.value,
        inst: e,
        continue: !t.abort
      }), n.value = t.normalize ? i.href : to(r);
      return;
    } catch {
      n.issues.push({
        code: "invalid_format",
        format: "url",
        input: n.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), xv = /* @__PURE__ */ w("$ZodEmoji", (e, t) => {
  t.pattern ?? (t.pattern = Kw()), K.init(e, t);
}), Dv = /* @__PURE__ */ w("$ZodNanoID", (e, t) => {
  if (t.length !== void 0 && (!Number.isInteger(t.length) || t.length < 1))
    throw new Error(`Invalid nanoid length: ${t.length}`);
  t.pattern ?? (t.pattern = t.length === void 0 ? Vw : Zw(t.length)), K.init(e, t);
}), Cv = /* @__PURE__ */ w("$ZodCUID", (e, t) => {
  t.pattern ?? (t.pattern = Fw), K.init(e, t);
}), jv = /* @__PURE__ */ w("$ZodCUID2", (e, t) => {
  t.pattern ?? (t.pattern = Mw), K.init(e, t);
}), Lv = /* @__PURE__ */ w("$ZodULID", (e, t) => {
  t.pattern ?? (t.pattern = Uw), K.init(e, t);
}), Fv = /* @__PURE__ */ w("$ZodXID", (e, t) => {
  t.pattern ?? (t.pattern = zw), K.init(e, t);
}), Mv = /* @__PURE__ */ w("$ZodKSUID", (e, t) => {
  t.pattern ?? (t.pattern = qw), K.init(e, t);
}), Uv = /* @__PURE__ */ w("$ZodISODateTime", (e, t) => {
  t.pattern ?? (t.pattern = av(t)), K.init(e, t);
}), zv = /* @__PURE__ */ w("$ZodISODate", (e, t) => {
  t.pattern ?? (t.pattern = sv), K.init(e, t);
}), qv = /* @__PURE__ */ w("$ZodISOTime", (e, t) => {
  t.pattern ?? (t.pattern = ov(t)), K.init(e, t);
}), Vv = /* @__PURE__ */ w("$ZodISODuration", (e, t) => {
  t.pattern ?? (t.pattern = Bw), K.init(e, t);
}), Zv = /* @__PURE__ */ w("$ZodIPv4", (e, t) => {
  t.pattern ?? (t.pattern = Gw), K.init(e, t);
}), Bv = /^[0-9a-fA-F:.]+$/;
function _u(e) {
  return Bv.test(e) ? bu(`http://[${e}]`) : !1;
}
const Wv = /* @__PURE__ */ w("$ZodIPv6", (e, t) => {
  t.pattern ?? (t.pattern = Qw), K.init(e, t), e._zod.check = (n) => {
    _u(n.value) || n.issues.push({
      code: "invalid_format",
      format: "ipv6",
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Jv = /* @__PURE__ */ w("$ZodCIDRv4", (e, t) => {
  t.pattern ?? (t.pattern = Yw), K.init(e, t);
});
function Hv(e) {
  const t = e.split("/");
  if (t.length !== 2)
    return !1;
  const [n, r] = t;
  if (!r)
    return !1;
  const i = Number(r);
  return `${i}` !== r || i < 0 || i > 128 ? !1 : _u(n);
}
const Kv = /* @__PURE__ */ w("$ZodCIDRv6", (e, t) => {
  t.pattern ?? (t.pattern = Xw), K.init(e, t), e._zod.check = (n) => {
    Hv(n.value) || n.issues.push({
      code: "invalid_format",
      format: "cidrv6",
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
});
function Eu(e) {
  if (e === "")
    return !0;
  if (/\s/.test(e) || e.length % 4 !== 0)
    return !1;
  try {
    return atob(e), !0;
  } catch {
    return !1;
  }
}
const Pu = /^[0-9a-zA-Z+/]*={0,2}$/, Gv = /* @__PURE__ */ w("$ZodBase64", (e, t) => {
  t.pattern ?? (t.pattern = Pu), K.init(e, t), e._zod.check = (n) => {
    Eu(n.value) || n.issues.push({
      code: "invalid_format",
      format: "base64",
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Gi = /^[A-Za-z0-9_-]*$/;
function Qv(e) {
  if (!Gi.test(e))
    return !1;
  const t = e.replace(/[-_]/g, (r) => r === "-" ? "+" : "/"), n = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return Eu(n);
}
const Yv = /* @__PURE__ */ w("$ZodBase64URL", (e, t) => {
  t.pattern ?? (t.pattern = Gi), K.init(e, t), e._zod.check = (n) => {
    Qv(n.value) || n.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Xv = /* @__PURE__ */ w("$ZodE164", (e, t) => {
  t.pattern ?? (t.pattern = rv), K.init(e, t);
});
function eb(e, t = null) {
  try {
    const n = e.split(".");
    if (n.length !== 3)
      return !1;
    const [r] = n;
    if (!r)
      return !1;
    const i = JSON.parse(atob(r));
    return !("typ" in i && (i == null ? void 0 : i.typ) !== "JWT" || !i.alg || t && (!("alg" in i) || i.alg !== t));
  } catch {
    return !1;
  }
}
const tb = /* @__PURE__ */ w("$ZodJWT", (e, t) => {
  K.init(e, t), e._zod.check = (n) => {
    eb(n.value, t.alg) || n.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), nb = /* @__PURE__ */ w("$ZodUnknown", (e, t) => {
  re.init(e, t), e._zod.parse = (n) => n;
}), rb = /* @__PURE__ */ w("$ZodNever", (e, t) => {
  re.init(e, t), e._zod.parse = (n, r) => (n.issues.push({
    expected: "never",
    code: "invalid_type",
    input: n.value,
    inst: e
  }), n);
});
function ib(e, t) {
  const n = Gs(e._zod.def.checks);
  if (!n.length)
    return;
  const r = Math.min(...n.map((s) => s[0])), i = e._zod.parse;
  e._zod.parse = (s, o) => {
    const a = t(s.value);
    if (a > r && !(o != null && o.skipChecks) && (o == null ? void 0 : o.direction) !== "backward") {
      for (const [l, u] of Gs(e._zod.def.checks))
        if (a > l && u._zod.def.when(s)) {
          const c = s.issues.length;
          return u._zod.check(s), s.issues[c].continue = !1, Xr(s.issues, c, e), s;
        }
    }
    return i(s, o);
  };
}
const sb = (e) => Array.isArray(e) ? e.length : -1;
function no(e, t, n) {
  e.issues.length && t.issues.push(...fu(n, e.issues)), t.value[n] = e.value;
}
const ob = /* @__PURE__ */ w("$ZodArray", (e, t) => {
  re.init(e, t);
  const n = De.memoizer;
  n == null || n.attach(e), e._zod.parse = (r, i) => {
    const s = r.value;
    if (!Array.isArray(s))
      return r.issues.push({
        expected: "array",
        code: "invalid_type",
        input: s,
        inst: e
      }), r;
    r.value = n ? n.alloc(e, r, Array(s.length), i) : Array(s.length);
    const o = [], a = i == null ? void 0 : i.abortEarly;
    for (let l = 0; l < s.length; l++) {
      const u = s[l], c = t.element._zod.run({
        value: u,
        issues: []
      }, i);
      if (c instanceof Promise)
        o.push(c.then((d) => no(d, r, l)));
      else if (no(c, r, l), a && c.issues.length !== 0 && Me(c))
        break;
    }
    return o.length ? Promise.all(o).then(() => r) : r;
  }, ib(e, sb);
});
function Bn(e, t, n, r, i, s) {
  const o = n in r, a = s === "optional";
  if (!(!o && a && i === "optional")) {
    if (e.issues.length) {
      if (i !== void 0 && a && !o)
        return;
      t.issues.push(...fu(n, e.issues));
    }
    if (!o && i === void 0) {
      e.issues.length || t.issues.push({
        code: "invalid_type",
        expected: "nonoptional",
        input: void 0,
        path: [n]
      });
      return;
    }
    e.value === void 0 ? (o || i === "defaulted" && !a) && (t.value[n] = void 0) : t.value[n] = e.value;
  }
}
const ab = [];
function $u(e) {
  var o, a, l, u;
  const t = Object.keys(e.shape), n = Object.getOwnPropertySymbols(e.shape), r = n.length ? n : ab, i = r.length ? [...t, ...r] : t;
  for (const c of i)
    if (!((u = (l = (a = (o = e.shape) == null ? void 0 : o[c]) == null ? void 0 : a._zod) == null ? void 0 : l.traits) != null && u.has("$ZodType")))
      throw new Error(`Invalid element at key "${String(c)}": expected a Zod schema`);
  const s = Gy(e.shape);
  return {
    ...e,
    allKeys: i,
    symbolKeys: r,
    // string-only: handleCatchall matches it against `for...in`, which never yields a symbol
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(s)
  };
}
function Au(e, t, n, r, i, s, o) {
  const a = [], l = i.keySet, u = i.catchall._zod, c = u.def.type, d = u.optin, f = u.optout;
  let h = 0;
  for (const p in t) {
    if (o && n.issues.length !== h) {
      if (Me(n, h))
        break;
      h = n.issues.length;
    }
    if (l.has(p))
      continue;
    if (p === "__proto__") {
      c === "never" && a.push(p);
      continue;
    }
    if (c === "never") {
      a.push(p);
      continue;
    }
    const m = u.run({ value: t[p], issues: [] }, r);
    m instanceof Promise ? e.push(m.then((b) => Bn(b, n, p, t, d, f))) : Bn(m, n, p, t, d, f);
  }
  return a.length && n.issues.push({
    code: "unrecognized_keys",
    keys: a,
    input: t,
    inst: s,
    // Describes the shape of the input, not the validity of the parsed value, so it never aborts. The parse still fails; the schema's own checks just get to run first, and an enclosing intersection can reconcile the key against a sibling operand.
    continue: !0
  }), e.length ? Promise.all(e).then(() => n) : n;
}
const lb = /* @__PURE__ */ w("$ZodObject", (e, t) => {
  re.init(e, t);
  const n = Object.getOwnPropertyDescriptor(t, "shape"), r = n != null && n.get ? n.get.raw : t.shape ?? {};
  if (r) {
    const u = () => {
      const c = { ...r };
      return Object.defineProperty(t, "shape", { value: c }), u.raw = c, c;
    };
    u.raw = r, Object.defineProperty(t, "shape", { get: u });
  }
  const i = Ui(() => $u(t));
  V(e, "propValues", (u) => {
    const c = u.def.shape, d = {};
    for (const f in c) {
      const h = c[f]._zod;
      if (h.values) {
        Object.prototype.hasOwnProperty.call(d, f) || yt(d, f, /* @__PURE__ */ new Set());
        for (const p of h.values)
          d[f].add(p);
        h.optin !== void 0 && d[f].add(void 0);
      }
    }
    return d;
  });
  const s = Vn, o = t.catchall;
  let a;
  const l = De.memoizer;
  l == null || l.attach(e), e._zod.parse = (u, c) => {
    a ?? (a = i.value);
    const d = u.value;
    if (!s(d))
      return u.issues.push({
        expected: "object",
        code: "invalid_type",
        input: d,
        inst: e
      }), u;
    u.value = l ? l.alloc(e, u, {}, c) : {};
    const f = [], h = a.shape, p = c == null ? void 0 : c.abortEarly;
    let m = u.issues.length;
    for (const b of a.allKeys) {
      if (p && u.issues.length !== m) {
        if (Me(u, m))
          break;
        m = u.issues.length;
      }
      if (b === "__proto__")
        continue;
      const _ = h[b], P = _._zod.optin, O = _._zod.optout, N = _._zod.run({ value: d[b], issues: [] }, c);
      N instanceof Promise ? f.push(N.then((X) => Bn(X, u, b, d, P, O))) : Bn(N, u, b, d, P, O);
    }
    return o ? Au(f, d, u, c, i.value, e, p === !0) : f.length ? Promise.all(f).then(() => u) : u;
  };
}), ub = /* @__PURE__ */ w("$ZodObjectJIT", (e, t) => {
  lb.init(e, t);
  const n = e._zod.parse, r = Ui(() => $u(t)), i = De.memoizer, s = (h) => {
    var X, T;
    const p = r.value, m = p.symbolKeys, b = new _v(["payload", "ctx"], { shape: h, inst: e, memo: i, syms: m }), _ = (v) => `shape[${v}]._zod.run({ value: input[${v}], issues: [] }, ctx)`, P = (v, E) => `
          let ${v}_ab = false;
          for (let i = 0; i < ${v}.issues.length; i++) {
            const iss = ${v}.issues[i];
            iss.path = iss.path ? [${E}, ...iss.path] : [${E}];
            payload.issues.push(iss);
            if (iss.continue !== true) ${v}_ab = true;
          }
          if (${v}_ab && ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }`;
    b.write("const input = payload.value;");
    const O = /* @__PURE__ */ Object.create(null);
    let N = 0;
    for (const v of p.allKeys)
      O[v] = `key_${N++}`;
    b.write(i ? "const newResult = memo.alloc(inst, payload, {}, ctx);" : "const newResult = {};");
    for (const v of p.allKeys) {
      if (v === "__proto__")
        continue;
      const E = O[v], S = typeof v == "symbol" ? `syms[${m.indexOf(v)}]` : Wy(v), F = `${S} in input`, j = h[v], D = (X = j == null ? void 0 : j._zod) == null ? void 0 : X.optin, M = D !== void 0, B = ((T = j == null ? void 0 : j._zod) == null ? void 0 : T.optout) === "optional";
      if (b.write(`const ${E} = ${_(S)};`), M && B) {
        const U = D === "optional" ? `${E}_present` : `${E}.value !== undefined || ${E}_present`;
        b.write(`
        const ${E}_present = ${F};
        if (!${E}.issues.length || ${E}_present) {
          if (${E}.issues.length) {${P(E, S)}
          }

          if (${U}) {
            newResult[${S}] = ${E}.value;
          }
        }

      `);
      } else M ? (b.write(`
        if (${E}.issues.length) {${P(E, S)}
        }
      `), D === "defaulted" ? b.write(`newResult[${S}] = ${E}.value;`) : b.write(`
        if (${E}.value !== undefined || ${F}) {
          newResult[${S}] = ${E}.value;
        }
      `)) : b.write(`
        const ${E}_present = ${F};
        if (${E}.issues.length) {${P(E, S)}
        }
        if (!${E}_present && !${E}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${S}]
          });
          if (ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
        }

        if (${E}_present) {
          newResult[${S}] = ${E}.value;
        }

      `);
    }
    return b.write("payload.value = newResult;"), b.write("return payload;"), b.compile();
  };
  let o;
  const a = Vn, l = !De.jitless, c = l && Hy.value, d = t.catchall;
  let f;
  e._zod.parse = (h, p) => {
    f ?? (f = r.value);
    const m = h.value;
    return a(m) ? l && c && (p == null ? void 0 : p.async) === !1 && p.jitless !== !0 ? (o || (o = s(t.shape)), h = o(h, p), d ? Au([], m, h, p, f, e, (p == null ? void 0 : p.abortEarly) === !0) : h) : n(h, p) : (h.issues.push({
      expected: "object",
      code: "invalid_type",
      input: m,
      inst: e
    }), h);
  };
});
function ro(e, t, n, r) {
  for (const s of e)
    if (s.issues.length === 0)
      return t.value = s.value, t;
  const i = e.filter((s) => !Me(s));
  return i.length === 1 ? (t.value = i[0].value, i[0]) : (t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: n,
    errors: e.map((s) => s.issues.map((o) => Rt(o, r, it())))
  }), t);
}
const cb = /* @__PURE__ */ w("$ZodUnion", (e, t) => {
  re.init(e, t), V(e, "optin", (r) => r.def.options.some((i) => i._zod.optin === "defaulted") ? "defaulted" : r.def.options.some((i) => i._zod.optin !== void 0) ? "optional" : void 0), V(e, "optout", (r) => r.def.options.some((i) => i._zod.optout === "optional") ? "optional" : void 0), V(e, "values", (r) => {
    if (r.def.options.every((i) => i._zod.values))
      return new Set(r.def.options.flatMap((i) => Array.from(i._zod.values)));
  }), V(e, "pattern", (r) => {
    if (r.def.options.every((i) => i._zod.pattern)) {
      const i = r.def.options.map((s) => s._zod.pattern);
      return new RegExp(`^(${i.map((s) => zi(s.source)).join("|")})$`);
    }
  });
  const n = t.options.length === 1 ? t.options[0]._zod.run : null;
  e._zod.parse = (r, i) => {
    if (n)
      return n(r, i);
    let s = !1;
    const o = [];
    for (const a of t.options) {
      const l = a._zod.run({
        value: r.value,
        issues: []
      }, i);
      if (l instanceof Promise)
        o.push(l), s = !0;
      else {
        if (l.issues.length === 0)
          return l;
        o.push(l);
      }
    }
    return s ? Promise.all(o).then((a) => ro(a, r, e, i)) : ro(o, r, e, i);
  };
}), db = /* @__PURE__ */ w("$ZodIntersection", (e, t) => {
  re.init(e, t), e._zod.parse = (n, r) => {
    const i = n.value, s = t.left._zod.run({ value: i, issues: [] }, r), o = t.right._zod.run({ value: i, issues: [] }, r);
    return s instanceof Promise || o instanceof Promise ? Promise.all([s, o]).then(([l, u]) => io(n, l, u)) : io(n, s, o);
  };
});
function ti(e, t) {
  if (e === t)
    return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if (an(e) && an(t)) {
    const n = Object.keys(t), r = Object.keys(e).filter((s) => n.indexOf(s) !== -1), i = { ...e, ...t };
    Object.prototype.hasOwnProperty.call(i, "__proto__") && delete i.__proto__;
    for (const s of r) {
      if (s === "__proto__")
        continue;
      const o = ti(e[s], t[s]);
      if (!o.valid)
        return {
          valid: !1,
          mergeErrorPath: [s, ...o.mergeErrorPath]
        };
      i[s] = o.data;
    }
    return { valid: !0, data: i };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length)
      return { valid: !1, mergeErrorPath: [] };
    const n = [];
    for (let r = 0; r < e.length; r++) {
      const i = e[r], s = t[r], o = ti(i, s);
      if (!o.valid)
        return {
          valid: !1,
          mergeErrorPath: [r, ...o.mergeErrorPath]
        };
      n.push(o.data);
    }
    return { valid: !0, data: n };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function io(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  let i;
  const s = /* @__PURE__ */ new Map(), o = (u, c) => {
    var f, h;
    let d;
    if (u.code === "unrecognized_keys" && !((f = u.path) != null && f.length))
      i ?? (i = u), d = u.keys;
    else if (u.code === "invalid_key" && u.origin === "record" && ((h = u.path) == null ? void 0 : h.length) === 1) {
      const p = String(u.path[0]);
      s.has(p) || s.set(p, u), d = [p];
    } else
      return !1;
    for (const p of d)
      r.has(p) || r.set(p, {}), r.get(p)[c] = !0;
    return !0;
  };
  for (const u of t.issues)
    o(u, "l") || e.issues.push(u);
  for (const u of n.issues)
    o(u, "r") || e.issues.push(u);
  const a = [...r].filter(([, u]) => u.l && u.r).map(([u]) => u);
  if (a.length) {
    const u = i ? a.filter((c) => i.keys.includes(c)) : [];
    u.length && e.issues.push({ ...i, keys: u });
    for (const c of a)
      !u.includes(c) && s.has(c) && e.issues.push(s.get(c));
  }
  const l = ti(t.value, n.value);
  if (!l.valid) {
    if (Me(e))
      return e;
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(l.mergeErrorPath)}`);
  }
  return e.value = l.data, e;
}
const fb = /* @__PURE__ */ w("$ZodEnum", (e, t) => {
  re.init(e, t);
  const n = Qr(t.entries), r = new Set(n);
  e._zod.values = r, V(e, "pattern", (i) => {
    const s = Qr(i.def.entries).filter((o) => Ky.has(typeof o));
    return new RegExp(s.length ? `^(${s.map((o) => lr(o.toString())).join("|")})$` : "^[^\\s\\S]$");
  }), e._zod.parse = (i, s) => {
    const o = i.value;
    return r.has(o) || i.issues.push({
      code: "invalid_value",
      values: n,
      input: o,
      inst: e
    }), i;
  };
}), hb = /* @__PURE__ */ w("$ZodTransform", (e, t) => {
  var n;
  re.init(e, t), e._zod.optin = "optional", (n = De.memoizer) == null || n.guard(e), e._zod.parse = (r, i) => {
    if (i.direction === "backward")
      throw new pu(e.constructor.name);
    const s = t.transform(r.value, r);
    if (i.async)
      return (s instanceof Promise ? s : Promise.resolve(s)).then((a) => (r.value = a, r));
    if (s instanceof Promise)
      throw new ct();
    return r.value = s, r;
  };
});
function so(e, t) {
  return e.value = t.issues.length ? void 0 : t.value, e;
}
const Su = /* @__PURE__ */ w("$ZodOptional", (e, t) => {
  re.init(e, t), V(e, "optin", (n) => n.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), e._zod.optout = "optional", V(e, "values", (n) => {
    const r = n.def.innerType._zod.values;
    return r ? /* @__PURE__ */ new Set([...r, void 0]) : void 0;
  }), V(e, "pattern", (n) => {
    const r = n.def.innerType._zod.pattern;
    return r ? new RegExp(`^(${zi(r.source)})?$`) : void 0;
  }), e._zod.parse = (n, r) => {
    if (n.value === void 0) {
      if (t.innerType._zod.optin !== "defaulted")
        return n;
      const i = t.innerType._zod.run({ value: n.value, issues: [] }, r);
      return i instanceof Promise ? i.then((s) => so(n, s)) : so(n, i);
    }
    return t.innerType._zod.run(n, r);
  };
}), pb = /* @__PURE__ */ w("$ZodExactOptional", (e, t) => {
  Su.init(e, t), V(e, "values", (n) => n.def.innerType._zod.values), V(e, "pattern", (n) => n.def.innerType._zod.pattern), e._zod.parse = (n, r) => t.innerType._zod.run(n, r);
}), mb = /* @__PURE__ */ w("$ZodNullable", (e, t) => {
  re.init(e, t), V(e, "optin", (n) => n.def.innerType._zod.optin), V(e, "optout", (n) => n.def.innerType._zod.optout), V(e, "pattern", (n) => {
    const r = n.def.innerType._zod.pattern;
    return r ? new RegExp(`^(${zi(r.source)}|null)$`) : void 0;
  }), V(e, "values", (n) => n.def.innerType._zod.values ? /* @__PURE__ */ new Set([...n.def.innerType._zod.values, null]) : void 0), e._zod.parse = (n, r) => n.value === null ? n : t.innerType._zod.run(n, r);
}), gb = /* @__PURE__ */ w("$ZodDefault", (e, t) => {
  re.init(e, t), e._zod.optin = "defaulted", V(e, "values", (n) => n.def.innerType._zod.values), e._zod.parse = (n, r) => {
    if (r.direction === "backward")
      return t.innerType._zod.run(n, r);
    if (n.value === void 0)
      return n.value = t.defaultValue, n;
    const i = t.innerType._zod.run(n, r);
    return i instanceof Promise ? i.then((s) => oo(s, t)) : oo(i, t);
  };
});
function oo(e, t) {
  return e.value === void 0 && (e.value = t.defaultValue), e;
}
const yb = /* @__PURE__ */ w("$ZodPrefault", (e, t) => {
  re.init(e, t), e._zod.optin = "defaulted", V(e, "values", (n) => n.def.innerType._zod.values), e._zod.parse = (n, r) => (r.direction === "backward" || n.value === void 0 && (n.value = t.defaultValue), t.innerType._zod.run(n, r));
}), wb = /* @__PURE__ */ w("$ZodNonOptional", (e, t) => {
  re.init(e, t), V(e, "values", (n) => {
    const r = n.def.innerType._zod.values;
    return r ? new Set([...r].filter((i) => i !== void 0)) : void 0;
  }), e._zod.parse = (n, r) => {
    const i = t.innerType._zod.run(n, r);
    return i instanceof Promise ? i.then((s) => ao(s, e)) : ao(i, e);
  };
});
function ao(e, t) {
  return !e.issues.length && e.value === void 0 && e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: t
  }), e;
}
function lo(e, t, n, r) {
  return t.issues.length ? (e.value = n.catchValue({
    ...t,
    value: e.value,
    error: {
      issues: t.issues.map((i) => Rt(i, r, it()))
    },
    input: e.value
  }), e) : (e.value = t.value, t.memo && (e.memo = !0), e);
}
const vb = /* @__PURE__ */ w("$ZodCatch", (e, t) => {
  re.init(e, t), V(e, "optin", (n) => n.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), V(e, "optout", (n) => n.def.innerType._zod.optout), V(e, "values", (n) => n.def.innerType._zod.values), e._zod.parse = (n, r) => {
    if (r.direction === "backward")
      return t.innerType._zod.run(n, r);
    const i = t.innerType._zod.run({ value: n.value, issues: [] }, r);
    return i instanceof Promise ? i.then((s) => lo(n, s, t, r)) : lo(n, i, t, r);
  };
}), bb = /* @__PURE__ */ w("$ZodPipe", (e, t) => {
  re.init(e, t), V(e, "values", (n) => n.def.in._zod.values), V(e, "optin", (n) => n.def.in._zod.optin), V(e, "optout", (n) => n.def.out._zod.optout), V(e, "propValues", (n) => n.def.in._zod.propValues), e._zod.parse = (n, r) => {
    if (r.direction === "backward") {
      const s = t.out._zod.run(n, r);
      return s instanceof Promise ? s.then((o) => En(o, t.in, r)) : En(s, t.in, r);
    }
    const i = t.in._zod.run(n, r);
    return i instanceof Promise ? i.then((s) => En(s, t.out, r)) : En(i, t.out, r);
  };
});
function En(e, t, n) {
  return e.issues.some((r) => r.code !== "unrecognized_keys") ? (e.aborted = !0, e) : t._zod.run({ value: e.value, issues: e.issues }, n);
}
const _b = /* @__PURE__ */ w("$ZodReadonly", (e, t) => {
  re.init(e, t), V(e, "propValues", (n) => n.def.innerType._zod.propValues), V(e, "values", (n) => n.def.innerType._zod.values), V(e, "optin", (n) => {
    var r, i;
    return (i = (r = n.def.innerType) == null ? void 0 : r._zod) == null ? void 0 : i.optin;
  }), V(e, "optout", (n) => {
    var r, i;
    return (i = (r = n.def.innerType) == null ? void 0 : r._zod) == null ? void 0 : i.optout;
  }), e._zod.parse = (n, r) => {
    if (r.direction === "backward")
      return t.innerType._zod.run(n, r);
    const i = t.innerType._zod.run(n, r);
    return i instanceof Promise ? i.then(uo) : uo(i);
  };
});
function uo(e) {
  return e.memo || (e.value = Object.freeze(e.value)), e;
}
const Eb = /* @__PURE__ */ w("$ZodCustom", (e, t) => {
  Ce.init(e, t), re.init(e, t), e._zod.parse = (n, r) => n, e._zod.check = (n) => {
    const r = n.value, i = t.fn(r);
    if (i instanceof Promise)
      return i.then((s) => co(s, n, r, e));
    co(i, n, r, e);
  };
});
function co(e, t, n, r) {
  if (!e) {
    const i = {
      code: "custom",
      input: n,
      inst: r,
      // incorporates params.error into issue reporting
      path: [...r._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !r._zod.def.abort
      // params: inst._zod.def.params,
    };
    r._zod.def.params && (i.params = r._zod.def.params), t.issues.push(ln(i));
  }
}
class Pb extends Error {
  constructor() {
    super("Cannot parse a reference cycle that closes through a transform"), this.name = "ZodCyclicError";
  }
}
const ni = "~memo", fo = [];
function Ou(e) {
  return e !== null && typeof e == "object";
}
function Er(e) {
  return e.map((t) => t.path ? { ...t, path: t.path.slice() } : { ...t });
}
const ku = /* @__PURE__ */ new WeakMap(), zt = 0, Dn = 1, Kt = 2;
function Cn(e, t, n) {
  const r = ku.get(e);
  if (r !== void 0)
    return r ? Kt : zt;
  if (t.has(e))
    return Kt;
  t.add(e);
  let i = zt;
  const s = (c) => {
    if (i !== Kt && (c != null && c._zod)) {
      const d = Cn(c, t);
      d > i && (i = d);
    }
  }, o = (c, d) => {
    var h;
    let f = zt;
    for (const p of Reflect.ownKeys(c)) {
      const m = Object.getOwnPropertyDescriptor(c, p);
      if (!m.enumerable)
        continue;
      const b = m.get ? Dn : (h = m.value) != null && h._zod ? Cn(m.value, t) : zt;
      b > f && (f = b);
    }
    return f;
  }, a = (c) => {
    c > i && (i = c);
  }, l = e._zod.def;
  switch (l.type) {
    case "object": {
      const c = su(l);
      a(c ? o(c) : Dn), s(l.catchall);
      break;
    }
    case "array":
      s(l.element);
      break;
    case "tuple":
      for (const c of l.items)
        s(c);
      s(l.rest);
      break;
    case "record":
    case "map":
      s(l.keyType), s(l.valueType);
      break;
    case "set":
      s(l.valueType);
      break;
    case "union":
      for (const c of l.options)
        s(c);
      break;
    case "intersection":
      s(l.left), s(l.right);
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
      s(l.innerType);
      break;
    case "pipe":
      s(l.in), s(l.out);
      break;
    case "function":
      s(l.input), s(l.output);
      break;
    case "lazy": {
      const c = l._cachedInner ?? void 0;
      a(c ? Cn(c, t) : Dn);
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
    default:
      for (const c in l) {
        const d = Object.getOwnPropertyDescriptor(l, c);
        if (!d || d.get)
          continue;
        const f = d.value;
        if (!(!f || typeof f != "object")) {
          if (f._zod)
            s(f);
          else if (Array.isArray(f))
            for (const h of f)
              s(h);
        }
      }
  }
  return t.delete(e), $b(e, i);
}
function $b(e, t) {
  return t !== Dn && ku.set(e, t === Kt), t;
}
function Ab(e, t) {
  let n = e.buckets.get(t);
  return n || (n = /* @__PURE__ */ new WeakMap(), e.buckets.set(t, n)), n;
}
let Pn;
const $n = [], Sb = {
  alloc(e, t, n) {
    const r = Pn;
    if (!r)
      return n;
    Pn = void 0;
    const i = { value: n, issues: null };
    return r.set(t.value, i), $n.push(i), n;
  },
  guard(e) {
    var t;
    (t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred.push(() => {
      const n = e._zod.parse, r = (i, s) => {
        if (s.direction !== "backward" && kb(s, i.value))
          throw new Pb();
        return n(i, s);
      };
      e._zod.parse = r, e._zod.run === n && (e._zod.run = r);
    });
  },
  attach(e) {
    var t;
    let n, r = !1, i, s;
    (t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred.push(() => {
      const o = e._zod.parse, a = (l, u) => {
        if (n === void 0) {
          const _ = Cn(e, /* @__PURE__ */ new Set());
          if (_ === zt)
            return e._zod.parse = o, e._zod.run === a && (e._zod.run = o), o(l, u);
          _ === Kt || r ? n = !0 : r = !0;
        }
        const c = l.value;
        if (!Ou(c))
          return o(l, u);
        let d = u[ni];
        d || (d = { buckets: /* @__PURE__ */ new WeakMap(), backEdges: void 0 }, u[ni] = d);
        let f;
        i === u ? f = s : (f = Ab(d, e), i = u, s = f);
        const h = f.get(c);
        if (h)
          return l.value = h.value, h.issues ? h.issues.length && l.issues.push(...Er(h.issues)) : (l.memo = !0, d.backEdges ?? (d.backEdges = /* @__PURE__ */ new WeakSet()), d.backEdges.add(h.value)), l;
        Pn = f;
        const p = $n.length, m = o(l, u);
        Pn = void 0;
        const b = $n.length > p ? $n.pop() : void 0;
        return m instanceof Promise ? m.then((_) => (b && (b.issues = _.issues.length ? Er(_.issues) : fo), _)) : (b && (b.issues = m.issues.length ? Er(m.issues) : fo), m);
      };
      e._zod.parse = a, e._zod.run === o && (e._zod.run = a);
    });
  }
};
function Ob() {
  return Sb;
}
function kb(e, t) {
  var r;
  const n = (r = e[ni]) == null ? void 0 : r.backEdges;
  return n !== void 0 && Ou(t) && n.has(t);
}
const Ib = () => {
  const e = {
    string: { unit: "characters", verb: "to have" },
    file: { unit: "bytes", verb: "to have" },
    array: { unit: "items", verb: "to have" },
    set: { unit: "items", verb: "to have" },
    map: { unit: "entries", verb: "to have" }
  };
  function t(s) {
    return e[s] ?? null;
  }
  const n = {
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
  }, r = {
    // Compatibility: "nan" -> "NaN" for display
    nan: "NaN"
    // All other type names omitted - they fall back to raw values via ?? operator
  };
  function i(s, o) {
    return s === "number" && typeof o == "number" && !Number.isFinite(o) ? String(o) : r[s] ?? s;
  }
  return (s) => {
    switch (s.code) {
      case "invalid_type": {
        const o = i(s.expected), a = aw(s.input), l = i(a, s.input);
        return `Invalid input: expected ${o}, received ${l}`;
      }
      case "invalid_value":
        return s.values.length === 1 ? `Invalid input: expected ${cu(s.values[0])}` : `Invalid option: expected one of ${Hs(s.values, "|")}`;
      case "too_big": {
        const o = s.exact ? "exactly " : s.inclusive ? "<=" : "<", a = t(s.origin);
        return a ? `Too big: expected ${s.origin ?? "value"} to have ${o}${s.maximum.toString()} ${a.unit ?? "elements"}` : `Too big: expected ${s.origin ?? "value"} to be ${o}${s.maximum.toString()}`;
      }
      case "too_small": {
        const o = s.exact ? "exactly " : s.inclusive ? ">=" : ">", a = t(s.origin);
        return a ? `Too small: expected ${s.origin} to have ${o}${s.minimum.toString()} ${a.unit}` : `Too small: expected ${s.origin} to be ${o}${s.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = s;
        return o.format === "starts_with" ? `Invalid string: must start with "${o.prefix}"` : o.format === "ends_with" ? `Invalid string: must end with "${o.suffix}"` : o.format === "includes" ? `Invalid string: must include "${o.includes}"` : o.format === "regex" ? `Invalid string: must match pattern ${o.pattern}` : `Invalid ${n[o.format] ?? s.format}`;
      }
      case "not_multiple_of":
        return `Invalid number: must be a multiple of ${s.divisor}`;
      case "unrecognized_keys":
        return `Unrecognized key${s.keys.length > 1 ? "s" : ""}: ${Hs(s.keys, ", ")}`;
      case "invalid_key":
        return `Invalid key in ${s.origin}`;
      case "invalid_union":
        return s.options && Array.isArray(s.options) && s.options.length > 0 ? `Invalid discriminator value. Expected ${s.options.map((a) => `'${a}'`).join(" | ")}` : s.inclusive === !1 ? "Invalid input: more than one option matched" : "Invalid input";
      case "invalid_element":
        return `Invalid value in ${s.origin}`;
      default:
        return "Invalid input";
    }
  };
};
function Nb() {
  return {
    localeError: Ib()
  };
}
var ho;
class Tb {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(t, ...n) {
    const r = n[0];
    return this._map.set(t, r), r && typeof r == "object" && "id" in r && this._idmap.set(r.id, t), this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(t) {
    const n = this._map.get(t);
    return n && typeof n == "object" && "id" in n && this._idmap.delete(n.id), this._map.delete(t), this;
  }
  get(t) {
    const n = t._zod.parent;
    if (n) {
      const r = { ...this.get(n) ?? {} };
      delete r.id;
      const i = { ...r, ...this._map.get(t) };
      return Object.keys(i).length ? i : void 0;
    }
    return this._map.get(t);
  }
  has(t) {
    return this._map.has(t);
  }
}
function Rb() {
  return new Tb();
}
(ho = globalThis).__zod_globalRegistry ?? (ho.__zod_globalRegistry = Rb());
const qt = globalThis.__zod_globalRegistry;
function xb(e) {
  return e.checks && (e.checks = [...e.checks]), e;
}
// @__NO_SIDE_EFFECTS__
function Db(e, t) {
  return new e(xb({ type: "string", ...x(t) }));
}
// @__NO_SIDE_EFFECTS__
function Cb(e, t) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function jb(e, t) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Lb(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Fb(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Mb(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ub(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function zb(e, t) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function qb(e, t) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Vb(e, t) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Zb(e, t) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Bb(e, t) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Wb(e, t) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Jb(e, t) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Hb(e, t) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Kb(e, t) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Gb(e, t) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Qb(e, t) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Yb(e, t) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Xb(e, t) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function e_(e, t) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function t_(e, t) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function n_(e, t) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function r_(e, t) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function i_(e, t) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function s_(e, t) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function o_(e, t) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function a_(e) {
  return new e({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function l_(e, t) {
  return new e({
    type: "never",
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Iu(e, t) {
  return new dv({
    check: "max_length",
    ...x(t),
    maximum: e
  });
}
// @__NO_SIDE_EFFECTS__
function Wn(e, t) {
  return new fv({
    check: "min_length",
    ...x(t),
    minimum: e
  });
}
// @__NO_SIDE_EFFECTS__
function Nu(e, t) {
  return new hv({
    check: "length_equals",
    ...x(t),
    length: e
  });
}
// @__NO_SIDE_EFFECTS__
function u_(e, t) {
  return new pv({
    check: "string_format",
    format: "regex",
    ...x(t),
    pattern: e
  });
}
// @__NO_SIDE_EFFECTS__
function c_(e) {
  return new mv({
    check: "string_format",
    format: "lowercase",
    ...x(e)
  });
}
// @__NO_SIDE_EFFECTS__
function d_(e) {
  return new gv({
    check: "string_format",
    format: "uppercase",
    ...x(e)
  });
}
// @__NO_SIDE_EFFECTS__
function f_(e, t) {
  return new yv({
    check: "string_format",
    format: "includes",
    ...x(t),
    includes: e
  });
}
// @__NO_SIDE_EFFECTS__
function h_(e, t) {
  return new wv({
    check: "string_format",
    format: "starts_with",
    ...x(t),
    prefix: e
  });
}
// @__NO_SIDE_EFFECTS__
function p_(e, t) {
  return new vv({
    check: "string_format",
    format: "ends_with",
    ...x(t),
    suffix: e
  });
}
// @__NO_SIDE_EFFECTS__
function xt(e) {
  return new bv({
    check: "overwrite",
    tx: e
  });
}
// @__NO_SIDE_EFFECTS__
function m_(e) {
  return /* @__PURE__ */ xt((t) => t.normalize(e));
}
// @__NO_SIDE_EFFECTS__
function g_() {
  return /* @__PURE__ */ xt((e) => e.trim());
}
// @__NO_SIDE_EFFECTS__
function y_() {
  return /* @__PURE__ */ xt((e) => e.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function w_() {
  return /* @__PURE__ */ xt((e) => e.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function v_() {
  return /* @__PURE__ */ xt((e) => Jy(e));
}
// @__NO_SIDE_EFFECTS__
function b_(e, t, n) {
  return new e({
    type: "array",
    element: t,
    // get element() {
    //   return element;
    // },
    ...x(n)
  });
}
// @__NO_SIDE_EFFECTS__
function __(e, t, n) {
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...x(n)
  });
}
// @__NO_SIDE_EFFECTS__
function E_(e, t) {
  const n = /* @__PURE__ */ P_((r) => (r.addIssue = (i) => {
    if (typeof i == "string")
      r.issues.push(ln(i, r.value, n._zod.def));
    else {
      const s = i;
      s.fatal && (s.continue = !1), s.code ?? (s.code = "custom"), "input" in s || (s.input = r.value), s.inst ?? (s.inst = n), s.continue ?? (s.continue = !n._zod.def.abort), r.issues.push(ln(s));
    }
  }, e(r.value, r)), t);
  return n;
}
// @__NO_SIDE_EFFECTS__
function P_(e, t) {
  const n = new Ce({
    check: "custom",
    ...x(t)
  });
  return n._zod.check = e, n;
}
function Gt(e, ...t) {
  for (const n of t)
    for (const r of Reflect.ownKeys(n))
      Object.prototype.propertyIsEnumerable.call(n, r) && yt(e, r, n[r]);
  return e;
}
function Tu(e) {
  let t = (e == null ? void 0 : e.target) ?? "draft-2020-12";
  return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
    processors: e.processors ?? {},
    metadataRegistry: (e == null ? void 0 : e.metadata) ?? qt,
    target: t,
    unrepresentable: (e == null ? void 0 : e.unrepresentable) ?? "throw",
    override: (e == null ? void 0 : e.override) ?? (() => {
    }),
    io: (e == null ? void 0 : e.io) ?? "output",
    counter: 0,
    seen: /* @__PURE__ */ new Map(),
    sharedDefsExtractedFor: void 0,
    sharedEmitDoneFor: void 0,
    cycles: (e == null ? void 0 : e.cycles) ?? "ref",
    reused: (e == null ? void 0 : e.reused) ?? "inline",
    intersections: [],
    deferred: [],
    external: (e == null ? void 0 : e.external) ?? void 0
  };
}
function yn(e, t, n, r, i) {
  const s = typeof t.unrepresentable == "function" ? t.unrepresentable({ zodSchema: e, path: r.path, message: i }) : t.unrepresentable;
  if (s === "any")
    return !1;
  if (s === void 0 || s === "throw")
    throw new Error(i);
  return Object.assign(n, s), !0;
}
function oe(e, t, n = { path: [], schemaPath: [] }) {
  var c, d;
  var r;
  const i = e._zod.def, s = t.seen.get(e);
  if (s)
    return s.count++, n.schemaPath.includes(e) && (s.cycle = n.path), s.schema;
  const o = { schema: {}, count: 1, cycle: void 0, path: n.path };
  t.seen.set(e, o), t.sharedDefsExtractedFor = void 0, t.sharedEmitDoneFor = void 0;
  const a = (d = (c = e._zod).toJSONSchema) == null ? void 0 : d.call(c);
  if (a)
    o.schema = a;
  else {
    const f = {
      ...n,
      schemaPath: [...n.schemaPath, e],
      path: n.path
    };
    if (e._zod.processJSONSchema)
      e._zod.processJSONSchema(t, o.schema, f);
    else {
      const p = o.schema, m = t.processors[i.type];
      if (!m)
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${i.type}`);
      m(e, t, p, f);
    }
    const h = e._zod.parent;
    h && (o.ref || (o.ref = h), oe(h, t, f), t.seen.get(h).isParent = !0);
  }
  const l = t.metadataRegistry.get(e);
  return l && Gt(o.schema, l), t.io === "input" && ue(e) && (delete o.schema.examples, delete o.schema.default), t.io === "input" && "_prefault" in o.schema && ((r = o.schema).default ?? (r.default = o.schema._prefault)), delete o.schema._prefault, t.seen.get(e).schema;
}
function po(e) {
  return e.replace(/~/g, "~0").replace(/\//g, "~1");
}
function Ru(e, t) {
  var o, a, l, u;
  const n = e.seen.get(t);
  if (!n)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  if (e.external && e.sharedDefsExtractedFor === e.external)
    return;
  const r = /* @__PURE__ */ new Map();
  for (const c of e.seen.entries()) {
    const d = (o = e.metadataRegistry.get(c[0])) == null ? void 0 : o.id;
    if (d) {
      const f = r.get(d);
      if (f && f !== c[0])
        throw new Error(`Duplicate schema id "${d}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      r.set(d, c[0]);
    }
  }
  const i = (c) => {
    var m;
    const d = e.target === "draft-2020-12" ? "$defs" : "definitions";
    if (e.external) {
      const b = (m = e.external.registry.get(c[0])) == null ? void 0 : m.id, _ = e.external.uri ?? ((O) => O);
      if (b)
        return { ref: _(b) };
      const P = c[1].defId ?? c[1].schema.id ?? `schema${e.counter++}`;
      return c[1].defId = P, { defId: P, ref: `${_("__shared")}#/${d}/${po(P)}` };
    }
    const f = "#", h = `${f}/${d}/`;
    if (c[1] === n && !c[1].schema.id)
      return { ref: f };
    const p = c[1].schema.id ?? `__schema${e.counter++}`;
    return { defId: p, ref: h + po(p) };
  }, s = (c) => {
    if (c[1].schema.$ref)
      return;
    const d = c[1], { ref: f, defId: h } = i(c);
    d.def = { ...d.schema }, h && (d.defId = h);
    const p = d.schema;
    for (const m in p)
      delete p[m];
    p.$ref = f;
  };
  if (e.cycles === "throw")
    for (const c of e.seen.entries()) {
      const d = c[1];
      if (d.cycle)
        throw new Error(`Cycle detected: #/${(a = d.cycle) == null ? void 0 : a.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (const c of e.seen.entries()) {
    const d = c[1];
    if (t === c[0]) {
      s(c);
      continue;
    }
    if (e.external) {
      const h = (l = e.external.registry.get(c[0])) == null ? void 0 : l.id;
      if (t !== c[0] && h) {
        s(c);
        continue;
      }
    }
    if ((u = e.metadataRegistry.get(c[0])) == null ? void 0 : u.id) {
      s(c);
      continue;
    }
    if (d.cycle) {
      s(c);
      continue;
    }
    d.count > 1 && e.reused === "ref" && s(c);
  }
  e.external && (e.sharedDefsExtractedFor = e.external);
}
function xu(e) {
  const t = e.anyOf;
  if (!Array.isArray(t) || t.length === 0 || e.type !== void 0)
    return;
  const n = [];
  for (const r of t) {
    if (!r || typeof r != "object")
      return;
    xu(r);
    const i = Object.keys(r);
    if (i.length !== 1 || i[0] !== "type")
      return;
    const s = r.type;
    for (const o of Array.isArray(s) ? s : [s]) {
      if (typeof o != "string")
        return;
      n.includes(o) || n.push(o);
    }
  }
  delete e.anyOf, e.type = n.length === 1 ? n[0] : n;
}
const Du = /* @__PURE__ */ new Set(["type", "properties", "required", "additionalProperties"]), mo = ["oneOf", "anyOf"];
function go(e) {
  const t = e.additionalProperties;
  return t === void 0 || t === !1 || typeof t != "object" || t === null ? null : Object.keys(t).length ? t : null;
}
function ri(e) {
  var s;
  const t = [];
  for (const o of e) {
    if (typeof o != "object" || o.type !== "object")
      return null;
    for (const a in o)
      if (!Du.has(a))
        return null;
    t.push(o);
  }
  const n = {}, r = /* @__PURE__ */ new Set();
  for (const o of t) {
    for (const a in o.properties) {
      if (Object.prototype.hasOwnProperty.call(n, a))
        continue;
      const l = [];
      for (const c of t) {
        const d = ((s = c.properties) == null ? void 0 : s[a]) ?? go(c);
        d != null && (l.some((f) => JSON.stringify(f) === JSON.stringify(d)) || l.push(d));
      }
      const u = l.length === 1 ? l[0] : ri(l) ?? { allOf: l };
      yt(n, a, u);
    }
    for (const a of o.required ?? [])
      r.add(a);
  }
  const i = { type: "object", properties: n };
  if (r.size && (i.required = [...r]), t.every((o) => o.additionalProperties === !1))
    i.additionalProperties = !1;
  else {
    const o = [];
    for (const a of t) {
      const l = go(a);
      l && !o.some((u) => JSON.stringify(u) === JSON.stringify(l)) && o.push(l);
    }
    o.length === 1 ? i.additionalProperties = o[0] : o.length > 1 && (i.additionalProperties = { allOf: o });
  }
  return i;
}
function $_(e) {
  const t = e.allOf;
  if (!Array.isArray(t) || t.length < 2)
    return;
  for (const i of Du)
    if (i in e)
      return;
  const n = t.filter((i) => mo.some((s) => Array.isArray(i[s])));
  let r = null;
  if (!n.length)
    r = ri(t);
  else {
    const i = n[0], s = mo.find((l) => Array.isArray(i[l]));
    if (Object.keys(i).length !== 1)
      return;
    const o = t.filter((l) => l !== i), a = i[s].map((l) => ri([...o, l]));
    if (a.some((l) => !l))
      return;
    r = { [s]: a };
  }
  r && (delete e.allOf, Gt(e, r));
}
function Cu(e, t) {
  var a, l, u, c;
  const n = e.seen.get(t);
  if (!n)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const r = (d) => {
    const f = e.seen.get(d);
    if (f.ref === null)
      return;
    const h = f.def ?? f.schema, p = { ...h }, m = f.ref;
    if (f.ref = null, m) {
      r(m);
      const _ = e.seen.get(m), P = _.schema;
      if (P.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (h.allOf = h.allOf ?? [], h.allOf.push(P)) : Gt(h, P), Gt(h, p), d._zod.parent === m)
        for (const N in h)
          N === "$ref" || N === "allOf" || N in p || delete h[N];
      if (P.$ref && _.def)
        for (const N in h)
          N === "$ref" || N === "allOf" || N in _.def && JSON.stringify(h[N]) === JSON.stringify(_.def[N]) && delete h[N];
    }
    const b = d._zod.parent;
    if (b && b !== m) {
      r(b);
      const _ = e.seen.get(b);
      if (_ != null && _.schema.$ref && (h.$ref = _.schema.$ref, _.def))
        for (const P in h)
          P === "$ref" || P === "allOf" || P in _.def && JSON.stringify(h[P]) === JSON.stringify(_.def[P]) && delete h[P];
    }
    e.override({
      zodSchema: d,
      jsonSchema: h,
      path: f.path ?? []
    });
  };
  if (!e.external || e.sharedEmitDoneFor !== e.external) {
    for (const d of [...e.seen.entries()].reverse())
      r(d[0]);
    if (e.target !== "openapi-3.0")
      for (const d of e.seen.entries())
        xu(d[1].def ?? d[1].schema);
    for (const d of e.deferred)
      d();
    if (e.intersections.length) {
      const d = /* @__PURE__ */ new Map();
      for (const f of e.seen.values())
        for (const h of [f.schema, f.def]) {
          const p = h == null ? void 0 : h.allOf;
          if (!Array.isArray(p))
            continue;
          const m = d.get(p);
          m ? m.push(h) : d.set(p, [h]);
        }
      for (const f of e.intersections)
        for (const h of d.get(f) ?? [])
          $_(h);
    }
  }
  const i = {};
  if (e.target === "draft-2020-12" ? i.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? i.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? i.$schema = "http://json-schema.org/draft-04/schema#" : e.target, (a = e.external) != null && a.uri) {
    const d = (l = e.external.registry.get(t)) == null ? void 0 : l.id;
    if (!d)
      throw new Error("Schema is missing an `id` property");
    i.$id = e.external.uri(d);
  }
  Gt(i, n.defId ? n.schema : n.def ?? n.schema);
  const s = (u = e.metadataRegistry.get(t)) == null ? void 0 : u.id;
  s !== void 0 && i.id === s && delete i.id;
  const o = ((c = e.external) == null ? void 0 : c.defs) ?? {};
  if (!e.external || e.sharedEmitDoneFor !== e.external)
    for (const d of e.seen.entries()) {
      const f = d[1];
      f.def && f.defId && (f.def.id === f.defId && delete f.def.id, yt(o, f.defId, f.def));
    }
  e.external && (e.sharedEmitDoneFor = e.external), e.external || Object.keys(o).length > 0 && (e.target === "draft-2020-12" ? i.$defs = o : i.definitions = o);
  try {
    const d = JSON.parse(JSON.stringify(i));
    return Object.defineProperty(d, "~standard", {
      value: {
        ...t["~standard"],
        jsonSchema: {
          input: Jn(t, "input", e.processors),
          output: Jn(t, "output", e.processors)
        }
      },
      enumerable: !1,
      writable: !1
    }), d;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function ue(e, t) {
  const n = t ?? { seen: /* @__PURE__ */ new Set() };
  if (n.seen.has(e))
    return !1;
  n.seen.add(e);
  const r = e._zod.def;
  if (r.type === "transform")
    return !0;
  if (r.type === "array")
    return ue(r.element, n);
  if (r.type === "set")
    return ue(r.valueType, n);
  if (r.type === "lazy")
    return ue(r.getter(), n);
  if (r.type === "promise" || r.type === "optional" || r.type === "nonoptional" || r.type === "nullable" || r.type === "readonly" || r.type === "default" || r.type === "prefault" || r.type === "catch")
    return ue(r.innerType, n);
  if (r.type === "intersection")
    return ue(r.left, n) || ue(r.right, n);
  if (r.type === "record" || r.type === "map")
    return ue(r.keyType, n) || ue(r.valueType, n);
  if (r.type === "pipe")
    return e._zod.traits.has("$ZodCodec") ? !0 : ue(r.in, n) || ue(r.out, n);
  if (r.type === "object") {
    for (const i in r.shape)
      if (ue(r.shape[i], n))
        return !0;
    return !1;
  }
  if (r.type === "union") {
    for (const i of r.options)
      if (ue(i, n))
        return !0;
    return !1;
  }
  if (r.type === "tuple") {
    for (const i of r.items)
      if (ue(i, n))
        return !0;
    return !!(r.rest && ue(r.rest, n));
  }
  return !1;
}
const A_ = (e, t = {}) => (n) => {
  const r = Tu({ ...n, processors: t });
  return oe(e, r), Ru(r, e), Cu(r, e);
}, Jn = (e, t, n = {}) => (r) => {
  const { libraryOptions: i, target: s } = r ?? {}, o = Tu({ ...i ?? {}, target: s, io: t, processors: n });
  return oe(e, o), Ru(o, e), Cu(o, e);
}, kt = (e, t, n) => {
  (e[t] === void 0 || n > e[t]) && (e[t] = n);
}, It = (e, t, n) => {
  (e[t] === void 0 || n < e[t]) && (e[t] = n);
}, yo = (e, t) => {
  kt(e, "minimum", t), It(e, "maximum", t);
}, ju = (e, t) => {
  e.multipleOf ?? (e.multipleOf = []), e.multipleOf.includes(t) || e.multipleOf.push(t);
}, Lu = (e, t) => {
  e.patterns ?? (e.patterns = /* @__PURE__ */ new Set()), e.patterns.add(t);
}, Fu = (e, t) => {
  e.mime = e.mime ? e.mime.filter((n) => t.includes(n)) : [...t];
}, Mu = (e, t) => {
  e.format = t, t.includes("int") && (e.isInt = !0);
}, wo = (e, t) => kt(e, "minimum", t.minimum), vo = (e, t) => It(e, "maximum", t.maximum), bo = (e) => (t, n) => {
  Mu(t, n.format);
  const [r, i] = e[n.format];
  kt(t, "minimum", r), It(t, "maximum", i);
}, Pr = {
  greater_than: (e, t) => kt(e, t.inclusive ? "minimum" : "exclusiveMinimum", t.value),
  less_than: (e, t) => It(e, t.inclusive ? "maximum" : "exclusiveMaximum", t.value),
  multiple_of: (e, t) => ju(e, t.value),
  number_format: bo(Qy),
  bigint_format: bo(Yy),
  min_length: wo,
  max_length: vo,
  length_equals: (e, t) => yo(e, t.length),
  min_size: wo,
  max_size: vo,
  size_equals: (e, t) => yo(e, t.size),
  string_format: (e, t) => {
    Mu(e, t.format), t.pattern && Lu(e, t.pattern), (t.format === "base64" || t.format === "base64url") && (e.contentEncoding = t.format), (t.local || t.precision === -1) && (e.laxFormat = !0);
  },
  mime_type: (e, t) => Fu(e, t.mime)
};
function Qt(e) {
  var s;
  const t = {}, n = e._zod.def, r = e._zod.traits.has("$ZodCheck") ? [e, ...n.checks ?? []] : n.checks ?? [];
  for (const o of r)
    (s = Pr[o._zod.def.check]) == null || s.call(Pr, t, o._zod.def);
  const i = e._zod.bag;
  i.minimum !== void 0 && kt(t, "minimum", i.minimum), i.exclusiveMinimum !== void 0 && kt(t, "exclusiveMinimum", i.exclusiveMinimum), i.maximum !== void 0 && It(t, "maximum", i.maximum), i.exclusiveMaximum !== void 0 && It(t, "exclusiveMaximum", i.exclusiveMaximum), i.multipleOf !== void 0 && ju(t, i.multipleOf), i.format !== void 0 && (t.format ?? (t.format = i.format), i.format.includes("int") && (t.isInt = !0)), i.mime && Fu(t, i.mime);
  for (const o of i.patterns ?? [])
    Lu(t, o);
  return t;
}
const S_ = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
}, O_ = /* @__PURE__ */ new Map([
  [Pu, ev],
  [Gi, tv]
]), k_ = (e) => O_.get(e) ?? e, I_ = (e, t, n, r) => {
  const i = n;
  i.type = "string";
  const { minimum: s, maximum: o, format: a, patterns: l, contentEncoding: u, laxFormat: c } = Qt(e);
  if (typeof s == "number" && (i.minLength = s), typeof o == "number" && (i.maxLength = o), a && (i.format = S_[a] ?? a, i.format === "" && delete i.format, (a === "time" || c) && delete i.format), u && (i.contentEncoding = u), l && l.size > 0) {
    const d = [...l].map(k_);
    d.length === 1 ? i.pattern = d[0].source : d.length > 1 && (i.allOf = [
      ...d.map((f) => ({
        ...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {},
        pattern: f.source
      }))
    ]);
  }
}, N_ = (e, t, n, r) => {
  n.not = {};
}, T_ = (e, t, n, r) => {
}, R_ = (e, t, n, r) => {
  const i = e._zod.def, s = Qr(i.entries);
  if (s.length === 0) {
    n.not = {};
    return;
  }
  s.every((o) => typeof o == "number") && (n.type = "number"), s.every((o) => typeof o == "string") && (n.type = "string"), n.enum = s;
}, x_ = (e, t, n, r) => {
  yn(e, t, n, r, "Custom types cannot be represented in JSON Schema");
}, D_ = (e, t, n, r) => {
  yn(e, t, n, r, "Transforms cannot be represented in JSON Schema");
}, C_ = (e, t, n, r) => {
  const i = n, s = e._zod.def, { minimum: o, maximum: a } = Qt(e);
  typeof o == "number" && (i.minItems = o), typeof a == "number" && (i.maxItems = a), i.type = "array", i.items = oe(s.element, t, {
    ...r,
    path: [...r.path, "items"]
  });
};
function ii(e) {
  const t = e._zod.def;
  return t.type === "pipe" && t.in._zod.traits.has("$ZodTransform") ? ii(t.out) : t.type === "catch" ? ii(t.innerType) : e._zod.optin;
}
const j_ = (e, t, n, r) => {
  var u;
  const i = n, s = e._zod.def, o = s.shape;
  if (Object.getOwnPropertySymbols(o).length && yn(e, t, i, r, "Symbol keys cannot be represented in JSON Schema"))
    return;
  i.type = "object", i.properties = {};
  for (const c in o)
    yt(i.properties, c, oe(o[c], t, {
      ...r,
      path: [...r.path, "properties", c]
    }));
  const l = [];
  for (const c of Object.keys(o)) {
    const d = s.shape[c];
    (t.io === "input" ? ii(d) === void 0 : d._zod.optout === void 0) && l.push(c);
  }
  l.length > 0 && (i.required = l), ((u = s.catchall) == null ? void 0 : u._zod.def.type) === "never" ? i.additionalProperties = !1 : s.catchall ? s.catchall && (i.additionalProperties = oe(s.catchall, t, {
    ...r,
    path: [...r.path, "additionalProperties"]
  })) : t.io === "output" && (i.additionalProperties = !1);
}, L_ = (e, t, n, r) => {
  const i = e._zod.def, s = i.inclusive === !1, o = i.options.map((a, l) => oe(a, t, {
    ...r,
    path: [...r.path, s ? "oneOf" : "anyOf", l]
  }));
  s ? n.oneOf = o : n.anyOf = o;
}, F_ = (e, t, n, r) => {
  const i = e._zod.def, s = oe(i.left, t, {
    ...r,
    path: [...r.path, "allOf", 0]
  }), o = oe(i.right, t, {
    ...r,
    path: [...r.path, "allOf", 1]
  }), a = (u) => "allOf" in u && Object.keys(u).length === 1, l = [
    ...a(s) ? s.allOf : [s],
    ...a(o) ? o.allOf : [o]
  ];
  n.allOf = l, t.intersections.push(l);
}, M_ = (e, t, n, r) => {
  const i = e._zod.def, s = oe(i.innerType, t, r), o = t.seen.get(e);
  t.target === "openapi-3.0" ? (o.ref = i.innerType, n.nullable = !0) : n.anyOf = [s, { type: "null" }];
}, U_ = (e, t, n, r) => {
  const i = e._zod.def;
  oe(i.innerType, t, r);
  const s = t.seen.get(e);
  s.ref = i.innerType;
}, Qi = Symbol();
function Uu(e, t, n, r, i) {
  let s = !1;
  const o = JSON.stringify(e, (a, l) => typeof l != "bigint" ? l : (s = !0, null));
  return s ? (yn(t, n, r, i, "BigInt defaults cannot be represented in JSON Schema"), Qi) : JSON.parse(o);
}
const z_ = (e, t, n, r) => {
  const i = e._zod.def;
  oe(i.innerType, t, r);
  const s = t.seen.get(e);
  s.ref = i.innerType;
  const o = Uu(i.defaultValue, e, t, n, r);
  o !== Qi && (n.default = o);
}, q_ = (e, t, n, r) => {
  const i = e._zod.def;
  oe(i.innerType, t, r);
  const s = t.seen.get(e);
  if (s.ref = i.innerType, t.io !== "input")
    return;
  const o = Uu(i.defaultValue, e, t, n, r);
  o !== Qi && (n._prefault = o);
}, V_ = (e, t, n, r) => {
  const i = e._zod.def;
  oe(i.innerType, t, r);
  const s = t.seen.get(e);
  s.ref = i.innerType;
  let o;
  try {
    o = i.catchValue(void 0);
  } catch {
    yn(e, t, n, r, "Dynamic catch values are not supported in JSON Schema");
    return;
  }
  n.default = o;
}, Z_ = (e, t, n, r) => {
  const i = e._zod.def, s = i.in._zod.traits.has("$ZodTransform"), o = t.io === "input" ? s ? i.out : i.in : i.out;
  oe(o, t, r);
  const a = t.seen.get(e);
  a.ref = o;
}, B_ = (e, t, n, r) => {
  const i = e._zod.def;
  oe(i.innerType, t, r);
  const s = t.seen.get(e);
  s.ref = i.innerType, n.readOnly = !0;
}, zu = (e, t, n, r) => {
  const i = e._zod.def;
  oe(i.innerType, t, r);
  const s = t.seen.get(e);
  s.ref = i.innerType;
}, _o = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]);
function An(e, t, n) {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    get() {
      const r = n(this);
      return Object.defineProperty(this, t, { value: r, configurable: !0, writable: !0 }), r;
    },
    set(r) {
      Object.defineProperty(this, t, { value: r, configurable: !0, writable: !0 });
    }
  });
}
const W_ = (e, t) => {
  _w.init(e, t), e.name = "ZodError";
  const n = Object.getPrototypeOf(e);
  _o.has(n) || (_o.add(n), An(n, "format", (r) => (i) => $w(r, i)), An(n, "flatten", (r) => (i) => Pw(r, i)), An(n, "addIssue", (r) => (i) => {
    r.issues.push(i), r.message = JSON.stringify(r.issues, Yr, 2);
  }), An(n, "addIssues", (r) => (i) => {
    r.issues.push(...i), r.message = JSON.stringify(r.issues, Yr, 2);
  }), Object.defineProperty(n, "isEmpty", {
    configurable: !0,
    enumerable: !1,
    get() {
      return this.issues.length === 0;
    }
  }));
}, _e = /* @__PURE__ */ w("ZodError", W_, void 0, {
  Parent: Error
}), J_ = /* @__PURE__ */ Zi(_e), H_ = /* @__PURE__ */ Bi(_e), K_ = /* @__PURE__ */ Wi(_e), G_ = /* @__PURE__ */ Ji(_e), Q_ = /* @__PURE__ */ Nw(_e), Y_ = /* @__PURE__ */ Tw(_e), X_ = /* @__PURE__ */ Rw(_e), eE = /* @__PURE__ */ xw(_e), tE = /* @__PURE__ */ Dw(_e), nE = /* @__PURE__ */ Cw(_e), rE = /* @__PURE__ */ jw(_e), iE = /* @__PURE__ */ Lw(_e);
function sE() {
  De.localeError || it(Nb());
}
function Yi() {
  De.memoizer || it({ memoizer: Ob() });
}
const ie = /* @__PURE__ */ w("ZodType", (e, t) => (sE(), re.init(e, t), e.def = t, e.type = t.type, e), {
  check(...e) {
    const t = this.def;
    return this.clone(pe(t, {
      checks: [
        ...t.checks ?? [],
        ...e.map((n) => typeof n == "function" ? { _zod: { check: n, def: { check: "custom" }, onattach: [] } } : n)
      ]
    }), { parent: !0 });
  },
  with(...e) {
    return this.check(...e);
  },
  clone(e, t) {
    return rt(this, e, t);
  },
  brand() {
    return this;
  },
  register(e, t) {
    return e.add(this, t), this;
  },
  refine(e, t) {
    return this.check(tP(e, t));
  },
  superRefine(e, t) {
    return this.check(nP(e, t));
  },
  overwrite(e) {
    return this.check(/* @__PURE__ */ xt(e));
  },
  optional() {
    return Po(this);
  },
  exactOptional() {
    return qE(this);
  },
  nullable() {
    return $o(this);
  },
  nullish() {
    return Po($o(this));
  },
  nonoptional(e) {
    return HE(this, e);
  },
  array() {
    return xE(this);
  },
  or(e) {
    return jE([this, e]);
  },
  and(e) {
    return FE(this, e);
  },
  transform(e) {
    return Ao(this, zE(e));
  },
  default(e) {
    return BE(this, e);
  },
  prefault(e) {
    return JE(this, e);
  },
  catch(e) {
    return GE(this, e);
  },
  pipe(e) {
    return Ao(this, e);
  },
  readonly() {
    return XE(this);
  },
  describe(e) {
    const t = this.clone();
    return qt.add(t, { description: e }), t;
  },
  meta(...e) {
    if (e.length === 0)
      return qt.get(this);
    const t = this.clone();
    return qt.add(t, e[0]), t;
  },
  isOptional() {
    return this.safeParse(void 0).success;
  },
  isNullable() {
    return this.safeParse(null).success;
  },
  apply(e, ...t) {
    return t.length === 0 ? e(this) : e(this, ...t);
  },
  // Overrides core's `~standard` to add `jsonSchema`. Must stay a prototype entry: redefining it per instance demotes instances to dictionary mode.
  get "~standard"() {
    return hu(this, "~standard", {
      ...wu(this),
      jsonSchema: {
        input: Jn(this, "input"),
        output: Jn(this, "output")
      }
    });
  },
  set "~standard"(e) {
    et(this, "~standard", e);
  },
  parse: function e(t, n) {
    return J_(this, t, n, { callee: e });
  },
  parseAsync: async function e(t, n) {
    return await H_(this, t, n, { callee: e });
  },
  safeParse(e, t) {
    return K_(this, e, t);
  },
  async safeParseAsync(e, t) {
    return G_(this, e, t);
  },
  // `spa` is an alias: same function object as `safeParseAsync`, as before.
  get spa() {
    return this == null ? void 0 : this.safeParseAsync;
  },
  set spa(e) {
    et(this, "spa", e);
  },
  validate(e, t) {
    return Ow(this, e, t);
  },
  validateAsync(e, t) {
    return Iw(this, e, t);
  },
  encode: function e(t, n) {
    return Q_(this, t, n, { callee: e });
  },
  decode: function e(t, n) {
    return Y_(this, t, n, { callee: e });
  },
  encodeAsync: async function e(t, n) {
    return await X_(this, t, n, { callee: e });
  },
  decodeAsync: async function e(t, n) {
    return await eE(this, t, n, { callee: e });
  },
  safeEncode(e, t) {
    return tE(this, e, t);
  },
  safeDecode(e, t) {
    return nE(this, e, t);
  },
  async safeEncodeAsync(e, t) {
    return rE(this, e, t);
  },
  async safeDecodeAsync(e, t) {
    return iE(this, e, t);
  },
  toJSONSchema(e) {
    return A_(this, {})(e);
  },
  // Reads through to the registry on every access, so it must not cache.
  get description() {
    var e;
    return (e = qt.get(this)) == null ? void 0 : e.description;
  },
  // No setter: `schema._def = x` throws, as it did when `_def` was a non-writable own property.
  get _def() {
    return this._zod.def;
  }
}), qu = /* @__PURE__ */ w(
  "_ZodString",
  (e, t) => {
    Ki.init(e, t), ie.init(e, t), e._zod.processJSONSchema = (n, r, i) => I_(e, n, r);
  },
  /* @__PURE__ */ uw({
    format: (e) => Qt(e).format ?? null,
    minLength: (e) => Qt(e).minimum ?? null,
    maxLength: (e) => Qt(e).maximum ?? null
  }, {
    regex(...e) {
      return this.check(/* @__PURE__ */ u_(...e));
    },
    includes(...e) {
      return this.check(/* @__PURE__ */ f_(...e));
    },
    startsWith(...e) {
      return this.check(/* @__PURE__ */ h_(...e));
    },
    endsWith(...e) {
      return this.check(/* @__PURE__ */ p_(...e));
    },
    min(...e) {
      return this.check(/* @__PURE__ */ Wn(...e));
    },
    max(...e) {
      return this.check(/* @__PURE__ */ Iu(...e));
    },
    length(...e) {
      return this.check(/* @__PURE__ */ Nu(...e));
    },
    nonempty(...e) {
      return this.check(/* @__PURE__ */ Wn(1, ...e));
    },
    lowercase(e) {
      return this.check(/* @__PURE__ */ c_(e));
    },
    uppercase(e) {
      return this.check(/* @__PURE__ */ d_(e));
    },
    trim() {
      return this.check(/* @__PURE__ */ g_());
    },
    normalize(...e) {
      return this.check(/* @__PURE__ */ m_(...e));
    },
    toLowerCase() {
      return this.check(/* @__PURE__ */ y_());
    },
    toUpperCase() {
      return this.check(/* @__PURE__ */ w_());
    },
    slugify() {
      return this.check(/* @__PURE__ */ v_());
    }
  })
), oE = /* @__PURE__ */ w("ZodString", (e, t) => {
  Ki.init(e, t), qu.init(e, t);
}, {
  email(e) {
    return this.check(/* @__PURE__ */ Cb(dE, e));
  },
  url(e) {
    return this.check(/* @__PURE__ */ zb(hE, e));
  },
  jwt(e) {
    return this.check(/* @__PURE__ */ n_(kE, e));
  },
  emoji(e) {
    return this.check(/* @__PURE__ */ qb(pE, e));
  },
  guid(e) {
    return this.check(/* @__PURE__ */ jb(fE, e));
  },
  uuid(e) {
    return this.check(/* @__PURE__ */ Lb(Sn, e));
  },
  uuidv4(e) {
    return this.check(/* @__PURE__ */ Fb(Sn, e));
  },
  uuidv6(e) {
    return this.check(/* @__PURE__ */ Mb(Sn, e));
  },
  uuidv7(e) {
    return this.check(/* @__PURE__ */ Ub(Sn, e));
  },
  nanoid(e) {
    return this.check(/* @__PURE__ */ Vb(mE, e));
  },
  cuid(e) {
    return this.check(/* @__PURE__ */ Zb(gE, e));
  },
  cuid2(e) {
    return this.check(/* @__PURE__ */ Bb(yE, e));
  },
  ulid(e) {
    return this.check(/* @__PURE__ */ Wb(wE, e));
  },
  base64(e) {
    return this.check(/* @__PURE__ */ Xb(AE, e));
  },
  base64url(e) {
    return this.check(/* @__PURE__ */ e_(SE, e));
  },
  xid(e) {
    return this.check(/* @__PURE__ */ Jb(vE, e));
  },
  ksuid(e) {
    return this.check(/* @__PURE__ */ Hb(bE, e));
  },
  ipv4(e) {
    return this.check(/* @__PURE__ */ Kb(_E, e));
  },
  ipv6(e) {
    return this.check(/* @__PURE__ */ Gb(EE, e));
  },
  cidrv4(e) {
    return this.check(/* @__PURE__ */ Qb(PE, e));
  },
  cidrv6(e) {
    return this.check(/* @__PURE__ */ Yb($E, e));
  },
  e164(e) {
    return this.check(/* @__PURE__ */ t_(OE, e));
  },
  datetime(e) {
    return this.check(/* @__PURE__ */ r_(aE, e));
  },
  date(e) {
    return this.check(/* @__PURE__ */ i_(lE, e));
  },
  time(e) {
    return this.check(/* @__PURE__ */ s_(uE, e));
  },
  duration(e) {
    return this.check(/* @__PURE__ */ o_(cE, e));
  }
});
function Qe(e) {
  return /* @__PURE__ */ Db(oE, e);
}
const G = /* @__PURE__ */ w("ZodStringFormat", (e, t) => {
  K.init(e, t), qu.init(e, t);
}), aE = /* @__PURE__ */ w("ZodISODateTime", (e, t) => {
  Uv.init(e, t), G.init(e, t);
}), lE = /* @__PURE__ */ w("ZodISODate", (e, t) => {
  zv.init(e, t), G.init(e, t);
}), uE = /* @__PURE__ */ w("ZodISOTime", (e, t) => {
  qv.init(e, t), G.init(e, t);
}), cE = /* @__PURE__ */ w("ZodISODuration", (e, t) => {
  Vv.init(e, t), G.init(e, t);
}), dE = /* @__PURE__ */ w("ZodEmail", (e, t) => {
  Sv.init(e, t), G.init(e, t);
}), fE = /* @__PURE__ */ w("ZodGUID", (e, t) => {
  $v.init(e, t), G.init(e, t);
}), Sn = /* @__PURE__ */ w("ZodUUID", (e, t) => {
  Av.init(e, t), G.init(e, t);
}), hE = /* @__PURE__ */ w("ZodURL", (e, t) => {
  Rv.init(e, t), G.init(e, t);
}), pE = /* @__PURE__ */ w("ZodEmoji", (e, t) => {
  xv.init(e, t), G.init(e, t);
}), mE = /* @__PURE__ */ w("ZodNanoID", (e, t) => {
  Dv.init(e, t), G.init(e, t);
}), gE = /* @__PURE__ */ w("ZodCUID", (e, t) => {
  Cv.init(e, t), G.init(e, t);
}), yE = /* @__PURE__ */ w("ZodCUID2", (e, t) => {
  jv.init(e, t), G.init(e, t);
}), wE = /* @__PURE__ */ w("ZodULID", (e, t) => {
  Lv.init(e, t), G.init(e, t);
}), vE = /* @__PURE__ */ w("ZodXID", (e, t) => {
  Fv.init(e, t), G.init(e, t);
}), bE = /* @__PURE__ */ w("ZodKSUID", (e, t) => {
  Mv.init(e, t), G.init(e, t);
}), _E = /* @__PURE__ */ w("ZodIPv4", (e, t) => {
  Zv.init(e, t), G.init(e, t);
}), EE = /* @__PURE__ */ w("ZodIPv6", (e, t) => {
  Wv.init(e, t), G.init(e, t);
}), PE = /* @__PURE__ */ w("ZodCIDRv4", (e, t) => {
  Jv.init(e, t), G.init(e, t);
}), $E = /* @__PURE__ */ w("ZodCIDRv6", (e, t) => {
  Kv.init(e, t), G.init(e, t);
}), AE = /* @__PURE__ */ w("ZodBase64", (e, t) => {
  Gv.init(e, t), G.init(e, t);
}), SE = /* @__PURE__ */ w("ZodBase64URL", (e, t) => {
  Yv.init(e, t), G.init(e, t);
}), OE = /* @__PURE__ */ w("ZodE164", (e, t) => {
  Xv.init(e, t), G.init(e, t);
}), kE = /* @__PURE__ */ w("ZodJWT", (e, t) => {
  tb.init(e, t), G.init(e, t);
}), IE = /* @__PURE__ */ w("ZodUnknown", (e, t) => {
  nb.init(e, t), ie.init(e, t), e._zod.processJSONSchema = (n, r, i) => T_();
});
function Eo() {
  return /* @__PURE__ */ a_(IE);
}
const NE = /* @__PURE__ */ w("ZodNever", (e, t) => {
  rb.init(e, t), ie.init(e, t), e._zod.processJSONSchema = (n, r, i) => N_(e, n, r);
});
function TE(e) {
  return /* @__PURE__ */ l_(NE, e);
}
const RE = /* @__PURE__ */ w("ZodArray", (e, t) => {
  Yi(), ob.init(e, t), ie.init(e, t), e._zod.processJSONSchema = (n, r, i) => C_(e, n, r, i), e.element = t.element;
}, {
  min(e, t) {
    return this.check(/* @__PURE__ */ Wn(e, t));
  },
  nonempty(e) {
    return this.check(/* @__PURE__ */ Wn(1, e));
  },
  max(e, t) {
    return this.check(/* @__PURE__ */ Iu(e, t));
  },
  length(e, t) {
    return this.check(/* @__PURE__ */ Nu(e, t));
  },
  unwrap() {
    return this.element;
  }
});
function xE(e, t) {
  return /* @__PURE__ */ b_(RE, e, t);
}
const DE = /* @__PURE__ */ w("ZodObject", (e, t) => {
  Yi(), ub.init(e, t), ie.init(e, t), e._zod.processJSONSchema = (n, r, i) => j_(e, n, r, i), hw(e, "shape", (n) => n._zod.def.shape, !1);
}, {
  keyof() {
    return ME(Object.keys(this._zod.def.shape));
  },
  catchall(e) {
    return this.clone(pe(this._zod.def, { catchall: e }));
  },
  passthrough() {
    return this.clone(pe(this._zod.def, { catchall: Eo() }));
  },
  loose() {
    return this.clone(pe(this._zod.def, { catchall: Eo() }));
  },
  strict() {
    return this.clone(pe(this._zod.def, { catchall: TE() }));
  },
  strip() {
    return this.clone(pe(this._zod.def, { catchall: void 0 }));
  },
  extend(e) {
    return tw(this, e);
  },
  safeExtend(e) {
    return nw(this, e);
  },
  merge(e) {
    return rw(this, e);
  },
  pick(e) {
    return Xy(this, e);
  },
  omit(e) {
    return ew(this, e);
  },
  partial(...e) {
    return Ks(Vu, this, e[0]);
  },
  exactPartial(...e) {
    return Ks(Zu, this, e[0], "exactPartial");
  },
  required(...e) {
    return iw(Bu, this, e[0]);
  }
});
function Xi(e, t) {
  const n = {
    type: "object",
    shape: e ?? {},
    ...x(t)
  };
  return new DE(n);
}
const CE = /* @__PURE__ */ w("ZodUnion", (e, t) => {
  cb.init(e, t), ie.init(e, t), e._zod.processJSONSchema = (n, r, i) => L_(e, n, r, i), e.options = t.options;
});
function jE(e, t) {
  return new CE({
    type: "union",
    options: e,
    ...x(t)
  });
}
const LE = /* @__PURE__ */ w("ZodIntersection", (e, t) => {
  db.init(e, t), ie.init(e, t), e._zod.processJSONSchema = (n, r, i) => F_(e, n, r, i);
});
function FE(e, t) {
  return new LE({
    type: "intersection",
    left: e,
    right: t
  });
}
const si = /* @__PURE__ */ w("ZodEnum", (e, t) => {
  fb.init(e, t), ie.init(e, t), e._zod.processJSONSchema = (r, i, s) => R_(e, r, i), e.enum = t.entries, e.options = [...e._zod.values];
  const n = new Set(Object.keys(t.entries));
  e.extract = (r, i) => {
    const s = {};
    for (const o of r)
      if (n.has(o))
        s[o] = t.entries[o];
      else
        throw new Error(`Key ${o} not found in enum`);
    return new si({
      ...t,
      checks: [],
      ...x(i),
      entries: s
    });
  }, e.exclude = (r, i) => {
    const s = { ...t.entries };
    for (const o of r)
      if (n.has(o))
        delete s[o];
      else
        throw new Error(`Key ${o} not found in enum`);
    return new si({
      ...t,
      checks: [],
      ...x(i),
      entries: s
    });
  };
});
function ME(e, t) {
  const n = Array.isArray(e) ? Object.fromEntries(e.map((r) => [r, r])) : e;
  return new si({
    type: "enum",
    entries: n,
    ...x(t)
  });
}
const UE = /* @__PURE__ */ w("ZodTransform", (e, t) => {
  Yi(), hb.init(e, t), ie.init(e, t), e._zod.processJSONSchema = (n, r, i) => D_(e, n, r, i), e._zod.parse = (n, r) => {
    if (r.direction === "backward")
      throw new pu(e.constructor.name);
    n.addIssue = (s) => {
      if (typeof s == "string")
        n.issues.push(ln(s, n.value, t));
      else {
        const o = s;
        o.fatal && (o.continue = !1), o.code ?? (o.code = "custom"), "input" in o || (o.input = n.value), o.inst ?? (o.inst = e), n.issues.push(ln(o));
      }
    };
    const i = t.transform(n.value, n);
    return i instanceof Promise ? i.then((s) => (n.value = s, n)) : (n.value = i, n);
  };
});
function zE(e) {
  return new UE({
    type: "transform",
    transform: e
  });
}
const Vu = /* @__PURE__ */ w("ZodOptional", (e, t) => {
  Su.init(e, t), ie.init(e, t), e._zod.processJSONSchema = (n, r, i) => zu(e, n, r, i), e.unwrap = () => e._zod.def.innerType;
});
function Po(e) {
  return new Vu({
    type: "optional",
    innerType: e
  });
}
const Zu = /* @__PURE__ */ w("ZodExactOptional", (e, t) => {
  pb.init(e, t), ie.init(e, t), e._zod.processJSONSchema = (n, r, i) => zu(e, n, r, i), e.unwrap = () => e._zod.def.innerType;
});
function qE(e) {
  return new Zu({
    type: "optional",
    innerType: e
  });
}
const VE = /* @__PURE__ */ w("ZodNullable", (e, t) => {
  mb.init(e, t), ie.init(e, t), e._zod.processJSONSchema = (n, r, i) => M_(e, n, r, i), e.unwrap = () => e._zod.def.innerType;
});
function $o(e) {
  return new VE({
    type: "nullable",
    innerType: e
  });
}
const ZE = /* @__PURE__ */ w("ZodDefault", (e, t) => {
  gb.init(e, t), ie.init(e, t), e._zod.processJSONSchema = (n, r, i) => z_(e, n, r, i), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function BE(e, t) {
  return new ZE({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : uu(t);
    }
  });
}
const WE = /* @__PURE__ */ w("ZodPrefault", (e, t) => {
  yb.init(e, t), ie.init(e, t), e._zod.processJSONSchema = (n, r, i) => q_(e, n, r, i), e.unwrap = () => e._zod.def.innerType;
});
function JE(e, t) {
  return new WE({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : uu(t);
    }
  });
}
const Bu = /* @__PURE__ */ w("ZodNonOptional", (e, t) => {
  wb.init(e, t), ie.init(e, t), e._zod.processJSONSchema = (n, r, i) => U_(e, n, r, i), e.unwrap = () => e._zod.def.innerType;
});
function HE(e, t) {
  return new Bu({
    type: "nonoptional",
    innerType: e,
    ...x(t)
  });
}
const KE = /* @__PURE__ */ w("ZodCatch", (e, t) => {
  vb.init(e, t), ie.init(e, t), e._zod.processJSONSchema = (n, r, i) => V_(e, n, r, i), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function GE(e, t) {
  return new KE({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : mw(t)
  });
}
const QE = /* @__PURE__ */ w("ZodPipe", (e, t) => {
  bb.init(e, t), ie.init(e, t), e._zod.processJSONSchema = (n, r, i) => Z_(e, n, r, i), e.in = t.in, e.out = t.out;
});
function Ao(e, t) {
  return new QE({
    type: "pipe",
    in: e,
    out: t
    // ...util.normalizeParams(params),
  });
}
const YE = /* @__PURE__ */ w("ZodReadonly", (e, t) => {
  _b.init(e, t), ie.init(e, t), e._zod.processJSONSchema = (n, r, i) => B_(e, n, r, i), e.unwrap = () => e._zod.def.innerType;
});
function XE(e) {
  return new YE({
    type: "readonly",
    innerType: e
  });
}
const eP = /* @__PURE__ */ w("ZodCustom", (e, t) => {
  Eb.init(e, t), ie.init(e, t), e._zod.processJSONSchema = (n, r, i) => x_(e, n, r, i);
});
function tP(e, t = {}) {
  return /* @__PURE__ */ __(eP, e, t);
}
function nP(e, t) {
  return /* @__PURE__ */ E_(e, t);
}
const rP = Xi({
  accessCode: Qe().trim().min(1, "ACCESS_CODE_REQUIRED"),
  password: Qe().min(1, "PASSWORD_REQUIRED")
}).strict(), iP = Xi({
  name: Qe().trim().min(1, "INITIAL_LIBRARIAN_NAME_REQUIRED").max(120),
  email: Qe().trim().email("INITIAL_LIBRARIAN_EMAIL_INVALID").max(254),
  accessCode: Qe().trim().min(1, "INITIAL_LIBRARIAN_ACCESS_CODE_REQUIRED").max(64),
  password: Qe().min(1, "INITIAL_LIBRARIAN_PASSWORD_REQUIRED").max(128)
}).strict(), sP = Xi({
  currentPassword: Qe().min(1, "CURRENT_PASSWORD_REQUIRED"),
  newPassword: Qe().min(12, "PASSWORD_TOO_SHORT")
}).strict(), oP = 12;
async function So(e) {
  return la.hash(e, oP);
}
async function $r(e, t) {
  return la.compare(e, t);
}
const aP = 3, lP = 15;
class uP {
  async provisionInitialLibrarian(t) {
    if (await Q.user.count() > 0) return !1;
    const n = t, i = ["name", "email", "accessCode", "password"].filter(
      (f) => typeof (n == null ? void 0 : n[f]) != "string" || !n[f].trim()
    );
    if (i.length > 0) {
      const f = {
        name: "INITIAL_LIBRARIAN_NAME",
        email: "INITIAL_LIBRARIAN_EMAIL",
        accessCode: "INITIAL_LIBRARIAN_ACCESS_CODE",
        password: "INITIAL_LIBRARIAN_PASSWORD"
      };
      throw new Error(
        `INITIAL_LIBRARIAN_CONFIGURATION_MISSING:${i.map((h) => f[h]).join(",")}`
      );
    }
    const s = iP.safeParse(t);
    if (!s.success) {
      const f = s.error.issues[0];
      throw new Error((f == null ? void 0 : f.message) ?? "INVALID_INPUT");
    }
    const { name: o, email: a, accessCode: l, password: u } = s.data;
    if (a.endsWith(".invalid") || l.startsWith("CHANGE_ME") || u.includes("CHANGE_ME") || u === "TROQUE_POR_UMA_SENHA_TEMPORARIA_FORTE")
      throw new Error("INITIAL_LIBRARIAN_CONFIGURATION_HAS_PLACEHOLDERS");
    const c = await So(u);
    return await Q.$transaction(async (f) => await f.user.count() > 0 ? null : f.user.create({
      data: {
        name: o,
        email: a,
        accessCode: l,
        passwordHash: c,
        role: "BIBLIOTECARIO",
        isActive: !0,
        mustChangePassword: !0
      }
    })) !== null;
  }
  async login(t) {
    const n = rP.safeParse(t);
    if (!n.success) {
      const l = new Set(
        n.error.issues.map((u) => u.path[0])
      );
      throw l.has("accessCode") ? new Error("ACCESS_CODE_REQUIRED") : l.has("password") ? new Error("PASSWORD_REQUIRED") : new Error("INVALID_INPUT");
    }
    const { accessCode: r, password: i } = n.data, s = await Q.user.findUnique({ where: { accessCode: r } });
    if (!s)
      throw await Q.accessLog.create({
        data: {
          attemptedAccessCode: r,
          success: !1,
          failureReason: "INVALID_CREDENTIALS"
        }
      }), await Q.user.count() === 0 ? new Error("NO_CREDENTIALS_CONFIGURED") : new Error("INVALID_CREDENTIALS");
    const o = /* @__PURE__ */ new Date();
    if (s.lockedUntil && s.lockedUntil > o)
      throw await Q.accessLog.create({
        data: {
          userId: s.id,
          attemptedAccessCode: r,
          success: !1,
          failureReason: "ACCOUNT_LOCKED"
        }
      }), new Error(`ACCOUNT_LOCKED:${s.lockedUntil.toISOString()}`);
    if (!s.isActive)
      throw await Q.accessLog.create({
        data: {
          userId: s.id,
          attemptedAccessCode: r,
          success: !1,
          failureReason: "ACCOUNT_INACTIVE"
        }
      }), new Error("ACCOUNT_UNAVAILABLE");
    if (!await $r(i, s.passwordHash)) {
      for (let l = 0; l < 5; l += 1) {
        const u = await Q.user.findUnique({ where: { id: s.id } });
        if (!u) throw new Error("ACCOUNT_UNAVAILABLE");
        const c = /* @__PURE__ */ new Date();
        if (u.lockedUntil && u.lockedUntil > c)
          throw await Q.accessLog.create({
            data: {
              userId: s.id,
              attemptedAccessCode: r,
              success: !1,
              failureReason: "ACCOUNT_LOCKED"
            }
          }), new Error(`ACCOUNT_LOCKED:${u.lockedUntil.toISOString()}`);
        const f = (u.lockedUntil && u.lockedUntil <= c ? 0 : u.failedLoginAttempts) + 1, h = f >= aP ? new Date(c.getTime() + lP * 6e4) : null;
        if ((await Q.user.updateMany({
          where: {
            id: s.id,
            failedLoginAttempts: u.failedLoginAttempts,
            lockedUntil: u.lockedUntil
          },
          data: {
            failedLoginAttempts: f,
            lastFailedLoginAt: c,
            lockedUntil: h
          }
        })).count === 1)
          throw await Q.accessLog.create({
            data: {
              userId: s.id,
              attemptedAccessCode: r,
              success: !1,
              failureReason: "INVALID_CREDENTIALS"
            }
          }), new Error(
            h ? `ACCOUNT_LOCKED:${h.toISOString()}` : "INVALID_CREDENTIALS"
          );
      }
      throw new Error("LOGIN_RETRY_REQUIRED");
    }
    const a = {
      id: s.id,
      name: s.name,
      accessCode: s.accessCode,
      role: s.role,
      mustChangePassword: s.mustChangePassword
    };
    return await Q.$transaction([
      Q.user.update({
        where: { id: s.id },
        data: { failedLoginAttempts: 0, lockedUntil: null }
      }),
      Q.accessLog.create({
        data: {
          userId: s.id,
          attemptedAccessCode: r,
          success: !0,
          failureReason: null
        }
      })
    ]), { user: a };
  }
  async changePassword(t, n) {
    const r = sP.safeParse(n);
    if (!r.success) {
      const l = new Set(
        r.error.issues.map((u) => u.path[0])
      );
      throw l.has("currentPassword") ? new Error("CURRENT_PASSWORD_REQUIRED") : l.has("newPassword") ? new Error("PASSWORD_TOO_SHORT") : new Error("INVALID_INPUT");
    }
    const { currentPassword: i, newPassword: s } = r.data, o = await Q.user.findUnique({ where: { id: t } });
    if (!o || !o.isActive) throw new Error("ACCOUNT_UNAVAILABLE");
    if (!await $r(i, o.passwordHash))
      throw new Error("INVALID_CURRENT_PASSWORD");
    if (await $r(s, o.passwordHash))
      throw new Error("PASSWORD_MUST_BE_DIFFERENT");
    const a = await So(s);
    await Q.user.update({
      where: { id: o.id },
      data: {
        passwordHash: a,
        mustChangePassword: !1,
        failedLoginAttempts: 0,
        lockedUntil: null
      }
    });
  }
}
const cP = ac(import.meta.url), { config: dP } = cP("dotenv"), es = new uP(), Te = /* @__PURE__ */ new Map(), Hn = 15 * 60 * 1e3, Wu = $.dirname(aa(import.meta.url));
function Ju(e) {
  return `file:${e.replace(/\\/g, "/")}`;
}
function fP(e) {
  if (!e.startsWith("file:")) return e;
  const t = e.slice(5), n = t.indexOf("?"), r = n === -1 ? t : t.slice(0, n), i = n === -1 ? "" : t.slice(n), s = $.isAbsolute(r) ? r : $.resolve(te.getAppPath(), "prisma", r);
  return `${Ju(s)}${i}`;
}
process.env.APP_ROOT = $.join(Wu, "..");
const oi = process.env.VITE_DEV_SERVER_URL, kP = $.join(process.env.APP_ROOT, "dist-electron"), Hu = $.join(process.env.APP_ROOT, "dist");
process.env.VITE_PUBLIC = oi ? $.join(process.env.APP_ROOT, "public") : Hu;
let at;
function Ku() {
  at = new sa({
    title: "Libapp",
    autoHideMenuBar: !0,
    icon: $.join(process.env.VITE_PUBLIC, "images/app-icon.svg"),
    webPreferences: {
      preload: $.join(Wu, "preload.mjs"),
      contextIsolation: !0,
      nodeIntegration: !1,
      sandbox: !0
    }
  });
  const e = at.webContents.id;
  at.on("closed", () => {
    Te.delete(e), at = null;
  }), oi ? at.loadURL(oi) : at.loadFile($.join(Hu, "index.html"));
}
te.on("window-all-closed", () => {
  process.platform !== "darwin" && (te.quit(), at = null);
});
te.on("activate", () => {
  sa.getAllWindows().length === 0 && Ku();
});
un.handle("auth:login", async (e, t) => {
  if (e.senderFrame !== e.sender.mainFrame)
    throw new Error("UNAUTHORIZED");
  const n = await es.login(t);
  return Te.set(e.sender.id, {
    userId: n.user.id,
    lastActivityAt: Date.now()
  }), n;
});
un.handle("auth:get-session", async (e) => {
  if (e.senderFrame !== e.sender.mainFrame)
    throw new Error("UNAUTHORIZED");
  const t = Te.get(e.sender.id);
  if (!t) return null;
  if (Date.now() - t.lastActivityAt >= Hn)
    return Te.delete(e.sender.id), null;
  const n = await Q.user.findUnique({ where: { id: t.userId } });
  return !n || !n.isActive ? (Te.delete(e.sender.id), null) : (t.lastActivityAt = Date.now(), {
    user: {
      id: n.id,
      name: n.name,
      role: n.role,
      mustChangePassword: n.mustChangePassword
    },
    idleTimeoutMs: Hn
  });
});
un.handle("auth:logout", (e) => (Te.delete(e.sender.id), { success: !0 }));
un.handle("auth:activity", (e) => {
  if (e.senderFrame !== e.sender.mainFrame)
    throw new Error("UNAUTHORIZED");
  const t = Te.get(e.sender.id);
  return !t || Date.now() - t.lastActivityAt >= Hn ? (Te.delete(e.sender.id), !1) : (t.lastActivityAt = Date.now(), !0);
});
un.handle("auth:change-password", async (e, t) => {
  if (e.senderFrame !== e.sender.mainFrame)
    throw new Error("UNAUTHORIZED");
  const n = Te.get(e.sender.id);
  if (!n)
    throw new Error("NOT_AUTHENTICATED");
  if (Date.now() - n.lastActivityAt >= Hn)
    throw Te.delete(e.sender.id), new Error("SESSION_EXPIRED");
  return await es.changePassword(n.userId, t), n.lastActivityAt = Date.now(), { success: !0 };
});
te.whenReady().then(async () => {
  Xu.setApplicationMenu(null);
  const e = te.isPackaged ? $.join(te.getPath("userData"), ".env") : $.join(te.getAppPath(), ".env");
  dP({ path: e });
  const t = process.env.DATABASE_URL, n = $.join(te.getPath("userData"), "lib-app.db"), r = te.isPackaged ? Ju(n) : t && fP(t);
  if (!r)
    throw new Error("DATABASE_URL is required while running in development.");
  if (te.isPackaged)
    await rs($.dirname(n), { recursive: !0 });
  else if (t != null && t.startsWith("file:")) {
    const o = t.slice(5).split("?")[0], a = $.isAbsolute(o) ? o : $.resolve(te.getAppPath(), "prisma", o);
    await rs($.dirname(a), { recursive: !0 });
  }
  await zy(r);
  const i = te.isPackaged ? $.join(te.getAppPath(), "prisma", "migrations") : $.resolve(te.getAppPath(), "prisma", "migrations");
  await qy(i), await es.provisionInitialLibrarian({
    name: process.env.INITIAL_LIBRARIAN_NAME,
    email: process.env.INITIAL_LIBRARIAN_EMAIL,
    accessCode: process.env.INITIAL_LIBRARIAN_ACCESS_CODE,
    password: process.env.INITIAL_LIBRARIAN_PASSWORD
  }) && console.info("Created the initial librarian account from the provisioning environment."), Ku();
}).catch((e) => {
  console.error("Failed to initialize the SQLite database:", e);
  const t = e instanceof Error ? e.message : String(e), n = t.startsWith("INITIAL_LIBRARIAN_");
  ec.showErrorBox(
    "Biblioteca IFCE",
    n ? `The database is empty and the initial librarian could not be created. Configure INITIAL_LIBRARIAN_NAME, INITIAL_LIBRARIAN_EMAIL, INITIAL_LIBRARIAN_ACCESS_CODE, and INITIAL_LIBRARIAN_PASSWORD in ${te.isPackaged ? $.join(te.getPath("userData"), ".env") : $.join(te.getAppPath(), ".env")}. Restart the app after saving the file. (${t})` : `The application could not initialize its SQLite database. (${t})`
  ), te.quit();
});
export {
  kP as MAIN_DIST,
  Hu as RENDERER_DIST,
  oi as VITE_DEV_SERVER_URL
};
