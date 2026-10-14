var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _a2, _b, _c2, _d2, _e, _f2, _g, _h, _i, _j, _k, _l2, _m2, _n2, _o2, _p2, _q, _r2, _s2, _t2, _u, _v, _w, _x, _y, _z, _A, _B, _e2, _C, _e3, _D, _e4, _E2, _Un_instances, e_fn, _F;
import { app, BrowserWindow, ipcMain, Menu, dialog } from "electron";
import { createHash, randomUUID } from "node:crypto";
import Bo, { readdir, readFile, mkdir } from "node:fs/promises";
import * as path from "node:path";
import path__default from "node:path";
import * as process$1 from "node:process";
import process__default from "node:process";
import * as __banner_node_url from "node:url";
import { fileURLToPath } from "node:url";
import * as __banner_node_module from "node:module";
import { createRequire } from "node:module";
import Ci from "node:fs";
import ku from "node:child_process";
import ni from "node:os";
import { promisify } from "node:util";
import { AsyncResource } from "node:async_hooks";
import { EventEmitter } from "node:events";
import bcrypt from "bcrypt";
const __filename$1 = __banner_node_url.fileURLToPath(import.meta.url);
globalThis["__dirname"] = path.dirname(__filename$1);
const require$2 = __banner_node_module.createRequire(import.meta.url);
var Xl = Object.create;
var Kn = Object.defineProperty;
var eu = Object.getOwnPropertyDescriptor;
var ru = Object.getOwnPropertyNames;
var tu = Object.getPrototypeOf, nu = Object.prototype.hasOwnProperty;
var fr = ((e10) => typeof require$2 < "u" ? require$2 : typeof Proxy < "u" ? new Proxy(e10, { get: (r, t) => (typeof require$2 < "u" ? require$2 : r)[t] }) : e10)(function(e10) {
  if (typeof require$2 < "u") return require$2.apply(this, arguments);
  throw Error('Dynamic require of "' + e10 + '" is not supported');
});
var To = (e10, r) => () => (e10 && (r = e10(e10 = 0)), r);
var ae = (e10, r) => () => (r || e10((r = { exports: {} }).exports, r), r.exports), gr = (e10, r) => {
  for (var t in r) Kn(e10, t, { get: r[t], enumerable: true });
}, iu = (e10, r, t, n) => {
  if (r && typeof r == "object" || typeof r == "function") for (let i of ru(r)) !nu.call(e10, i) && i !== t && Kn(e10, i, { get: () => r[i], enumerable: !(n = eu(r, i)) || n.enumerable });
  return e10;
};
var le = (e10, r, t) => (t = e10 != null ? Xl(tu(e10)) : {}, iu(r || !e10 || !e10.__esModule ? Kn(t, "default", { value: e10, enumerable: true }) : t, e10));
var ai = ae(($g, zo) => {
  zo.exports = (e10, r = process$1.argv) => {
    let t = e10.startsWith("-") ? "" : e10.length === 1 ? "-" : "--", n = r.indexOf(t + e10), i = r.indexOf("--");
    return n !== -1 && (i === -1 || n < i);
  };
});
var es = ae((qg, Xo) => {
  var xc = fr("node:os"), Zo = fr("node:tty"), pe = ai(), { env: U } = process$1, Ge;
  pe("no-color") || pe("no-colors") || pe("color=false") || pe("color=never") ? Ge = 0 : (pe("color") || pe("colors") || pe("color=true") || pe("color=always")) && (Ge = 1);
  "FORCE_COLOR" in U && (U.FORCE_COLOR === "true" ? Ge = 1 : U.FORCE_COLOR === "false" ? Ge = 0 : Ge = U.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(U.FORCE_COLOR, 10), 3));
  function li(e10) {
    return e10 === 0 ? false : { level: e10, hasBasic: true, has256: e10 >= 2, has16m: e10 >= 3 };
  }
  function ui(e10, r) {
    if (Ge === 0) return 0;
    if (pe("color=16m") || pe("color=full") || pe("color=truecolor")) return 3;
    if (pe("color=256")) return 2;
    if (e10 && !r && Ge === void 0) return 0;
    let t = Ge || 0;
    if (U.TERM === "dumb") return t;
    if (process$1.platform === "win32") {
      let n = xc.release().split(".");
      return Number(n[0]) >= 10 && Number(n[2]) >= 10586 ? Number(n[2]) >= 14931 ? 3 : 2 : 1;
    }
    if ("CI" in U) return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((n) => n in U) || U.CI_NAME === "codeship" ? 1 : t;
    if ("TEAMCITY_VERSION" in U) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(U.TEAMCITY_VERSION) ? 1 : 0;
    if (U.COLORTERM === "truecolor") return 3;
    if ("TERM_PROGRAM" in U) {
      let n = parseInt((U.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
      switch (U.TERM_PROGRAM) {
        case "iTerm.app":
          return n >= 3 ? 3 : 2;
        case "Apple_Terminal":
          return 2;
      }
    }
    return /-256(color)?$/i.test(U.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(U.TERM) || "COLORTERM" in U ? 1 : t;
  }
  function vc(e10) {
    let r = ui(e10, e10 && e10.isTTY);
    return li(r);
  }
  Xo.exports = { supportsColor: vc, stdout: li(ui(true, Zo.isatty(1))), stderr: li(ui(true, Zo.isatty(2))) };
});
var ns = ae((Vg, ts) => {
  var Pc = es(), Er = ai();
  function rs(e10) {
    if (/^\d{3,4}$/.test(e10)) {
      let t = /(\d{1,2})(\d{2})/.exec(e10) || [];
      return { major: 0, minor: parseInt(t[1], 10), patch: parseInt(t[2], 10) };
    }
    let r = (e10 || "").split(".").map((t) => parseInt(t, 10));
    return { major: r[0], minor: r[1], patch: r[2] };
  }
  function ci(e10) {
    let { CI: r, FORCE_HYPERLINK: t, NETLIFY: n, TEAMCITY_VERSION: i, TERM_PROGRAM: o, TERM_PROGRAM_VERSION: s, VTE_VERSION: a, TERM: l } = process$1.env;
    if (t) return !(t.length > 0 && parseInt(t, 10) === 0);
    if (Er("no-hyperlink") || Er("no-hyperlinks") || Er("hyperlink=false") || Er("hyperlink=never")) return false;
    if (Er("hyperlink=true") || Er("hyperlink=always") || n) return true;
    if (!Pc.supportsColor(e10) || e10 && !e10.isTTY) return false;
    if ("WT_SESSION" in process$1.env) return true;
    if (process$1.platform === "win32" || r || i) return false;
    if (o) {
      let u = rs(s || "");
      switch (o) {
        case "iTerm.app":
          return u.major === 3 ? u.minor >= 1 : u.major > 3;
        case "WezTerm":
          return u.major >= 20200620;
        case "vscode":
          return u.major > 1 || u.major === 1 && u.minor >= 72;
        case "ghostty":
          return true;
      }
    }
    if (a) {
      if (a === "0.50.0") return false;
      let u = rs(a);
      return u.major > 0 || u.minor >= 50;
    }
    switch (l) {
      case "alacritty":
        return true;
    }
    return false;
  }
  ts.exports = { supportsHyperlink: ci, stdout: ci(process$1.stdout), stderr: ci(process$1.stderr) };
});
var is = ae((Xg, Tc) => {
  Tc.exports = { name: "@prisma/internals", version: "6.19.3", description: "This package is intended for Prisma's internal use", main: "dist/index.js", types: "dist/index.d.ts", repository: { type: "git", url: "https://github.com/prisma/prisma.git", directory: "packages/internals" }, homepage: "https://www.prisma.io", author: "Tim Suchanek <suchanek@prisma.io>", bugs: "https://github.com/prisma/prisma/issues", license: "Apache-2.0", scripts: { dev: "DEV=true tsx helpers/build.ts", build: "tsx helpers/build.ts", test: "dotenv -e ../../.db.env -- jest --silent", prepublishOnly: "pnpm run build" }, files: ["README.md", "dist", "!**/libquery_engine*", "!dist/get-generators/engines/*", "scripts"], devDependencies: { "@babel/helper-validator-identifier": "7.25.9", "@opentelemetry/api": "1.9.0", "@swc/core": "1.11.5", "@swc/jest": "0.2.37", "@types/babel__helper-validator-identifier": "7.15.2", "@types/jest": "29.5.14", "@types/node": "18.19.76", "@types/resolve": "1.20.6", archiver: "6.0.2", "checkpoint-client": "1.1.33", "cli-truncate": "4.0.0", dotenv: "16.5.0", empathic: "2.0.0", "escape-string-regexp": "5.0.0", execa: "8.0.1", "fast-glob": "3.3.3", "find-up": "7.0.0", "fp-ts": "2.16.9", "fs-extra": "11.3.0", "global-directory": "4.0.0", globby: "11.1.0", "identifier-regex": "1.0.0", "indent-string": "4.0.0", "is-windows": "1.0.2", "is-wsl": "3.1.0", jest: "29.7.0", "jest-junit": "16.0.0", kleur: "4.1.5", "mock-stdin": "1.0.0", "new-github-issue-url": "0.2.1", "node-fetch": "3.3.2", "npm-packlist": "5.1.3", open: "7.4.2", "p-map": "4.0.0", resolve: "1.22.10", "string-width": "7.2.0", "strip-indent": "4.0.0", "temp-dir": "2.0.0", tempy: "1.0.1", "terminal-link": "4.0.0", tmp: "0.2.3", "ts-pattern": "5.6.2", "ts-toolbelt": "9.6.0", typescript: "5.4.5", yarn: "1.22.22" }, dependencies: { "@prisma/config": "workspace:*", "@prisma/debug": "workspace:*", "@prisma/dmmf": "workspace:*", "@prisma/driver-adapter-utils": "workspace:*", "@prisma/engines": "workspace:*", "@prisma/fetch-engine": "workspace:*", "@prisma/generator": "workspace:*", "@prisma/generator-helper": "workspace:*", "@prisma/get-platform": "workspace:*", "@prisma/prisma-schema-wasm": "7.1.1-3.c2990dca591cba766e3b7ef5d9e8a84796e47ab7", "@prisma/schema-engine-wasm": "7.1.1-3.c2990dca591cba766e3b7ef5d9e8a84796e47ab7", "@prisma/schema-files-loader": "workspace:*", arg: "5.0.2", prompts: "2.4.2" }, peerDependencies: { typescript: ">=5.1.0" }, peerDependenciesMeta: { typescript: { optional: true } }, sideEffects: false };
});
var gi = ae((wh, Dc) => {
  Dc.exports = { name: "@prisma/engines-version", version: "7.1.1-3.c2990dca591cba766e3b7ef5d9e8a84796e47ab7", main: "index.js", types: "index.d.ts", license: "Apache-2.0", author: "Tim Suchanek <suchanek@prisma.io>", prisma: { enginesVersion: "c2990dca591cba766e3b7ef5d9e8a84796e47ab7" }, repository: { type: "git", url: "https://github.com/prisma/engines-wrapper.git", directory: "packages/engines-version" }, devDependencies: { "@types/node": "18.19.76", typescript: "4.9.5" }, files: ["index.js", "index.d.ts"], scripts: { build: "tsc -d" } };
});
var Zt = ae((zt) => {
  Object.defineProperty(zt, "__esModule", { value: true });
  zt.enginesVersion = void 0;
  zt.enginesVersion = gi().prisma.enginesVersion;
});
var cs = ae((Fh, us) => {
  us.exports = (e10) => {
    let r = e10.match(/^[ \t]*(?=\S)/gm);
    return r ? r.reduce((t, n) => Math.min(t, n.length), 1 / 0) : 0;
  };
});
var wi = ae((qh, ms) => {
  ms.exports = (e10, r = 1, t) => {
    if (t = { indent: " ", includeEmptyLines: false, ...t }, typeof e10 != "string") throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e10}\``);
    if (typeof r != "number") throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof r}\``);
    if (typeof t.indent != "string") throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof t.indent}\``);
    if (r === 0) return e10;
    let n = t.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
    return e10.replace(n, t.indent.repeat(r));
  };
});
var hs = ae((Hh, jc) => {
  jc.exports = { name: "dotenv", version: "16.5.0", description: "Loads environment variables from .env file", main: "lib/main.js", types: "lib/main.d.ts", exports: { ".": { types: "./lib/main.d.ts", require: "./lib/main.js", default: "./lib/main.js" }, "./config": "./config.js", "./config.js": "./config.js", "./lib/env-options": "./lib/env-options.js", "./lib/env-options.js": "./lib/env-options.js", "./lib/cli-options": "./lib/cli-options.js", "./lib/cli-options.js": "./lib/cli-options.js", "./package.json": "./package.json" }, scripts: { "dts-check": "tsc --project tests/types/tsconfig.json", lint: "standard", pretest: "npm run lint && npm run dts-check", test: "tap run --allow-empty-coverage --disable-coverage --timeout=60000", "test:coverage": "tap run --show-full-coverage --timeout=60000 --coverage-report=lcov", prerelease: "npm test", release: "standard-version" }, repository: { type: "git", url: "git://github.com/motdotla/dotenv.git" }, homepage: "https://github.com/motdotla/dotenv#readme", funding: "https://dotenvx.com", keywords: ["dotenv", "env", ".env", "environment", "variables", "config", "settings"], readmeFilename: "README.md", license: "BSD-2-Clause", devDependencies: { "@types/node": "^18.11.3", decache: "^4.6.2", sinon: "^14.0.1", standard: "^17.0.0", "standard-version": "^9.5.0", tap: "^19.2.0", typescript: "^4.8.4" }, engines: { node: ">=12" }, browser: { fs: false } };
});
var xs = ae((Yh, _e5) => {
  var Ri = fr("node:fs"), Ai = fr("node:path"), Bc = fr("node:os"), Uc = fr("node:crypto"), Gc = hs(), bs = Gc.version, Qc = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
  function Wc(e10) {
    let r = {}, t = e10.toString();
    t = t.replace(/\r\n?/mg, `
`);
    let n;
    for (; (n = Qc.exec(t)) != null; ) {
      let i = n[1], o = n[2] || "";
      o = o.trim();
      let s = o[0];
      o = o.replace(/^(['"`])([\s\S]*)\1$/mg, "$2"), s === '"' && (o = o.replace(/\\n/g, `
`), o = o.replace(/\\r/g, "\r")), r[i] = o;
    }
    return r;
  }
  function Jc(e10) {
    let r = ws(e10), t = j.configDotenv({ path: r });
    if (!t.parsed) {
      let s = new Error(`MISSING_DATA: Cannot parse ${r} for an unknown reason`);
      throw s.code = "MISSING_DATA", s;
    }
    let n = Es(e10).split(","), i = n.length, o;
    for (let s = 0; s < i; s++) try {
      let a = n[s].trim(), l = Hc(t, a);
      o = j.decrypt(l.ciphertext, l.key);
      break;
    } catch (a) {
      if (s + 1 >= i) throw a;
    }
    return j.parse(o);
  }
  function Kc(e10) {
    console.log(`[dotenv@${bs}][WARN] ${e10}`);
  }
  function tt(e10) {
    console.log(`[dotenv@${bs}][DEBUG] ${e10}`);
  }
  function Es(e10) {
    return e10 && e10.DOTENV_KEY && e10.DOTENV_KEY.length > 0 ? e10.DOTENV_KEY : process$1.env.DOTENV_KEY && process$1.env.DOTENV_KEY.length > 0 ? process$1.env.DOTENV_KEY : "";
  }
  function Hc(e10, r) {
    let t;
    try {
      t = new URL(r);
    } catch (a) {
      if (a.code === "ERR_INVALID_URL") {
        let l = new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");
        throw l.code = "INVALID_DOTENV_KEY", l;
      }
      throw a;
    }
    let n = t.password;
    if (!n) {
      let a = new Error("INVALID_DOTENV_KEY: Missing key part");
      throw a.code = "INVALID_DOTENV_KEY", a;
    }
    let i = t.searchParams.get("environment");
    if (!i) {
      let a = new Error("INVALID_DOTENV_KEY: Missing environment part");
      throw a.code = "INVALID_DOTENV_KEY", a;
    }
    let o = `DOTENV_VAULT_${i.toUpperCase()}`, s = e10.parsed[o];
    if (!s) {
      let a = new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${o} in your .env.vault file.`);
      throw a.code = "NOT_FOUND_DOTENV_ENVIRONMENT", a;
    }
    return { ciphertext: s, key: n };
  }
  function ws(e10) {
    let r = null;
    if (e10 && e10.path && e10.path.length > 0) if (Array.isArray(e10.path)) for (let t of e10.path) Ri.existsSync(t) && (r = t.endsWith(".vault") ? t : `${t}.vault`);
    else r = e10.path.endsWith(".vault") ? e10.path : `${e10.path}.vault`;
    else r = Ai.resolve(process$1.cwd(), ".env.vault");
    return Ri.existsSync(r) ? r : null;
  }
  function ys(e10) {
    return e10[0] === "~" ? Ai.join(Bc.homedir(), e10.slice(1)) : e10;
  }
  function Yc(e10) {
    !!(e10 && e10.debug) && tt("Loading env from encrypted .env.vault");
    let t = j._parseVault(e10), n = process$1.env;
    return e10 && e10.processEnv != null && (n = e10.processEnv), j.populate(n, t, e10), { parsed: t };
  }
  function zc(e10) {
    let r = Ai.resolve(process$1.cwd(), ".env"), t = "utf8", n = !!(e10 && e10.debug);
    e10 && e10.encoding ? t = e10.encoding : n && tt("No encoding is specified. UTF-8 is used by default");
    let i = [r];
    if (e10 && e10.path) if (!Array.isArray(e10.path)) i = [ys(e10.path)];
    else {
      i = [];
      for (let l of e10.path) i.push(ys(l));
    }
    let o, s = {};
    for (let l of i) try {
      let u = j.parse(Ri.readFileSync(l, { encoding: t }));
      j.populate(s, u, e10);
    } catch (u) {
      n && tt(`Failed to load ${l} ${u.message}`), o = u;
    }
    let a = process$1.env;
    return e10 && e10.processEnv != null && (a = e10.processEnv), j.populate(a, s, e10), o ? { parsed: s, error: o } : { parsed: s };
  }
  function Zc(e10) {
    if (Es(e10).length === 0) return j.configDotenv(e10);
    let r = ws(e10);
    return r ? j._configVault(e10) : (Kc(`You set DOTENV_KEY but you are missing a .env.vault file at ${r}. Did you forget to build it?`), j.configDotenv(e10));
  }
  function Xc(e10, r) {
    let t = Buffer.from(r.slice(-64), "hex"), n = Buffer.from(e10, "base64"), i = n.subarray(0, 12), o = n.subarray(-16);
    n = n.subarray(12, -16);
    try {
      let s = Uc.createDecipheriv("aes-256-gcm", t, i);
      return s.setAuthTag(o), `${s.update(n)}${s.final()}`;
    } catch (s) {
      let a = s instanceof RangeError, l = s.message === "Invalid key length", u = s.message === "Unsupported state or unable to authenticate data";
      if (a || l) {
        let c = new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");
        throw c.code = "INVALID_DOTENV_KEY", c;
      } else if (u) {
        let c = new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");
        throw c.code = "DECRYPTION_FAILED", c;
      } else throw s;
    }
  }
  function ep(e10, r, t = {}) {
    let n = !!(t && t.debug), i = !!(t && t.override);
    if (typeof r != "object") {
      let o = new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");
      throw o.code = "OBJECT_REQUIRED", o;
    }
    for (let o of Object.keys(r)) Object.prototype.hasOwnProperty.call(e10, o) ? (i === true && (e10[o] = r[o]), n && tt(i === true ? `"${o}" is already defined and WAS overwritten` : `"${o}" is already defined and was NOT overwritten`)) : e10[o] = r[o];
  }
  var j = { configDotenv: zc, _configVault: Yc, _parseVault: Jc, config: Zc, decrypt: Xc, parse: Wc, populate: ep };
  _e5.exports.configDotenv = j.configDotenv;
  _e5.exports._configVault = j._configVault;
  _e5.exports._parseVault = j._parseVault;
  _e5.exports.config = j.config;
  _e5.exports.decrypt = j.decrypt;
  _e5.exports.parse = j.parse;
  _e5.exports.populate = j.populate;
  _e5.exports = j;
});
var Ss = ae((iy, nn) => {
  nn.exports = (e10 = {}) => {
    let r;
    if (e10.repoUrl) r = e10.repoUrl;
    else if (e10.user && e10.repo) r = `https://github.com/${e10.user}/${e10.repo}`;
    else throw new Error("You need to specify either the `repoUrl` option or both the `user` and `repo` options");
    let t = new URL(`${r}/issues/new`), n = ["body", "title", "labels", "template", "milestone", "assignee", "projects"];
    for (let i of n) {
      let o = e10[i];
      if (o !== void 0) {
        if (i === "labels" || i === "projects") {
          if (!Array.isArray(o)) throw new TypeError(`The \`${i}\` option should be an array`);
          o = o.join(",");
        }
        t.searchParams.set(i, o);
      }
    }
    return t.toString();
  };
  nn.exports.default = nn.exports;
});
var qi = ae((_b2, Ws) => {
  Ws.exports = /* @__PURE__ */ function() {
    function e10(r, t, n, i, o) {
      return r < t || n < t ? r > n ? n + 1 : r + 1 : i === o ? t : t + 1;
    }
    return function(r, t) {
      if (r === t) return 0;
      if (r.length > t.length) {
        var n = r;
        r = t, t = n;
      }
      for (var i = r.length, o = t.length; i > 0 && r.charCodeAt(i - 1) === t.charCodeAt(o - 1); ) i--, o--;
      for (var s = 0; s < i && r.charCodeAt(s) === t.charCodeAt(s); ) s++;
      if (i -= s, o -= s, i === 0 || o < 3) return o;
      var a = 0, l, u, c, p, d, f, h, g, I, T, S, b, D = [];
      for (l = 0; l < i; l++) D.push(l + 1), D.push(r.charCodeAt(s + l));
      for (var me = D.length - 1; a < o - 3; ) for (I = t.charCodeAt(s + (u = a)), T = t.charCodeAt(s + (c = a + 1)), S = t.charCodeAt(s + (p = a + 2)), b = t.charCodeAt(s + (d = a + 3)), f = a += 4, l = 0; l < me; l += 2) h = D[l], g = D[l + 1], u = e10(h, u, c, I, g), c = e10(u, c, p, T, g), p = e10(c, p, d, S, g), f = e10(p, d, f, b, g), D[l] = f, d = p, p = c, c = u, u = h;
      for (; a < o; ) for (I = t.charCodeAt(s + (u = a)), f = ++a, l = 0; l < me; l += 2) h = D[l], D[l] = f = e10(h, u, f, I, D[l + 1]), u = h;
      return f;
    };
  }();
});
var zs = To(() => {
});
var Zs = To(() => {
});
var Ao = {};
gr(Ao, { defineExtension: () => So, getExtensionContext: () => Ro });
function So(e10) {
  return typeof e10 == "function" ? e10 : (r) => r.$extends(e10);
}
function Ro(e10) {
  return e10;
}
var Io = {};
gr(Io, { validator: () => Co });
function Co(...e10) {
  return (r) => r;
}
var $t = {};
gr($t, { $: () => No, bgBlack: () => fu, bgBlue: () => bu, bgCyan: () => wu, bgGreen: () => hu, bgMagenta: () => Eu, bgRed: () => gu, bgWhite: () => xu, bgYellow: () => yu, black: () => cu, blue: () => tr, bold: () => Q, cyan: () => De, dim: () => Ce, gray: () => Jr, green: () => $e, grey: () => mu, hidden: () => lu, inverse: () => au, italic: () => su, magenta: () => pu, red: () => ue, reset: () => ou, strikethrough: () => uu, underline: () => H, white: () => du, yellow: () => Ie });
var Hn, Do, Oo, ko, _o = true;
typeof process$1 < "u" && ({ FORCE_COLOR: Hn, NODE_DISABLE_COLORS: Do, NO_COLOR: Oo, TERM: ko } = process$1.env || {}, _o = process$1.stdout && process$1.stdout.isTTY);
var No = { enabled: !Do && Oo == null && ko !== "dumb" && (Hn != null && Hn !== "0" || _o) };
function N(e10, r) {
  let t = new RegExp(`\\x1b\\[${r}m`, "g"), n = `\x1B[${e10}m`, i = `\x1B[${r}m`;
  return function(o) {
    return !No.enabled || o == null ? o : n + (~("" + o).indexOf(i) ? o.replace(t, i + n) : o) + i;
  };
}
var ou = N(0, 0), Q = N(1, 22), Ce = N(2, 22), su = N(3, 23), H = N(4, 24), au = N(7, 27), lu = N(8, 28), uu = N(9, 29), cu = N(30, 39), ue = N(31, 39), $e = N(32, 39), Ie = N(33, 39), tr = N(34, 39), pu = N(35, 39), De = N(36, 39), du = N(37, 39), Jr = N(90, 39), mu = N(90, 39), fu = N(40, 49), gu = N(41, 49), hu = N(42, 49), yu = N(43, 49), bu = N(44, 49), Eu = N(45, 49), wu = N(46, 49), xu = N(47, 49);
var vu = 100, Lo = ["green", "yellow", "blue", "magenta", "cyan", "red"], Kr = [], Fo = Date.now(), Pu = 0, Yn = typeof process$1 < "u" ? process$1.env : {};
globalThis.DEBUG ?? (globalThis.DEBUG = Yn.DEBUG ?? "");
globalThis.DEBUG_COLORS ?? (globalThis.DEBUG_COLORS = Yn.DEBUG_COLORS ? Yn.DEBUG_COLORS === "true" : true);
var Hr = { enable(e10) {
  typeof e10 == "string" && (globalThis.DEBUG = e10);
}, disable() {
  let e10 = globalThis.DEBUG;
  return globalThis.DEBUG = "", e10;
}, enabled(e10) {
  let r = globalThis.DEBUG.split(",").map((i) => i.replace(/[.+?^${}()|[\]\\]/g, "\\$&")), t = r.some((i) => i === "" || i[0] === "-" ? false : e10.match(RegExp(i.split("*").join(".*") + "$"))), n = r.some((i) => i === "" || i[0] !== "-" ? false : e10.match(RegExp(i.slice(1).split("*").join(".*") + "$")));
  return t && !n;
}, log: (...e10) => {
  let [r, t, ...n] = e10;
  (console.warn ?? console.log)(`${r} ${t}`, ...n);
}, formatters: {} };
function Tu(e10) {
  let r = { color: Lo[Pu++ % Lo.length], enabled: Hr.enabled(e10), namespace: e10, log: Hr.log, extend: () => {
  } }, t = (...n) => {
    let { enabled: i, namespace: o, color: s, log: a } = r;
    if (n.length !== 0 && Kr.push([o, ...n]), Kr.length > vu && Kr.shift(), Hr.enabled(o) || i) {
      let l = n.map((c) => typeof c == "string" ? c : Su(c)), u = `+${Date.now() - Fo}ms`;
      Fo = Date.now(), globalThis.DEBUG_COLORS ? a($t[s](Q(o)), ...l, $t[s](u)) : a(o, ...l, u);
    }
  };
  return new Proxy(t, { get: (n, i) => r[i], set: (n, i, o) => r[i] = o });
}
var L = new Proxy(Tu, { get: (e10, r) => Hr[r], set: (e10, r, t) => Hr[r] = t });
function Su(e10, r = 2) {
  let t = /* @__PURE__ */ new Set();
  return JSON.stringify(e10, (n, i) => {
    if (typeof i == "object" && i !== null) {
      if (t.has(i)) return "[Circular *]";
      t.add(i);
    } else if (typeof i == "bigint") return i.toString();
    return i;
  }, r);
}
function Mo(e10 = 7500) {
  let r = Kr.map(([t, ...n]) => `${t} ${n.map((i) => typeof i == "string" ? i : JSON.stringify(i)).join(" ")}`).join(`
`);
  return r.length < e10 ? r : r.slice(-e10);
}
function $o() {
  Kr.length = 0;
}
var hr = L;
function zn() {
  let e10 = process$1.env.PRISMA_QUERY_ENGINE_LIBRARY;
  if (!(e10 && Ci.existsSync(e10)) && process$1.arch === "ia32") throw new Error('The default query engine type (Node-API, "library") is currently not supported for 32bit Node. Please set `engineType = "binary"` in the "generator" block of your "schema.prisma" file (or use the environment variables "PRISMA_CLIENT_ENGINE_TYPE=binary" and/or "PRISMA_CLI_QUERY_ENGINE_TYPE=binary".)');
}
var Zn = ["darwin", "darwin-arm64", "debian-openssl-1.0.x", "debian-openssl-1.1.x", "debian-openssl-3.0.x", "rhel-openssl-1.0.x", "rhel-openssl-1.1.x", "rhel-openssl-3.0.x", "linux-arm64-openssl-1.1.x", "linux-arm64-openssl-1.0.x", "linux-arm64-openssl-3.0.x", "linux-arm-openssl-1.1.x", "linux-arm-openssl-1.0.x", "linux-arm-openssl-3.0.x", "linux-musl", "linux-musl-openssl-3.0.x", "linux-musl-arm64-openssl-1.1.x", "linux-musl-arm64-openssl-3.0.x", "linux-nixos", "linux-static-x64", "linux-static-arm64", "windows", "freebsd11", "freebsd12", "freebsd13", "freebsd14", "freebsd15", "openbsd", "netbsd", "arm"];
var qt = "libquery_engine";
function Vt(e10, r) {
  return e10.includes("windows") ? `query_engine-${e10}.dll.node` : e10.includes("darwin") ? `${qt}-${e10}.dylib.node` : `${qt}-${e10}.so.node`;
}
var Oe = Symbol.for("@ts-pattern/matcher"), Au = Symbol.for("@ts-pattern/isVariadic"), Bt = "@ts-pattern/anonymous-select-key", Xn = (e10) => !!(e10 && typeof e10 == "object"), jt = (e10) => e10 && !!e10[Oe], Ee = (e10, r, t) => {
  if (jt(e10)) {
    let n = e10[Oe](), { matched: i, selections: o } = n.match(r);
    return i && o && Object.keys(o).forEach((s) => t(s, o[s])), i;
  }
  if (Xn(e10)) {
    if (!Xn(r)) return false;
    if (Array.isArray(e10)) {
      if (!Array.isArray(r)) return false;
      let n = [], i = [], o = [];
      for (let s of e10.keys()) {
        let a = e10[s];
        jt(a) && a[Au] ? o.push(a) : o.length ? i.push(a) : n.push(a);
      }
      if (o.length) {
        if (o.length > 1) throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
        if (r.length < n.length + i.length) return false;
        let s = r.slice(0, n.length), a = i.length === 0 ? [] : r.slice(-i.length), l = r.slice(n.length, i.length === 0 ? 1 / 0 : -i.length);
        return n.every((u, c) => Ee(u, s[c], t)) && i.every((u, c) => Ee(u, a[c], t)) && (o.length === 0 || Ee(o[0], l, t));
      }
      return e10.length === r.length && e10.every((s, a) => Ee(s, r[a], t));
    }
    return Reflect.ownKeys(e10).every((n) => {
      let i = e10[n];
      return (n in r || jt(o = i) && o[Oe]().matcherType === "optional") && Ee(i, r[n], t);
      var o;
    });
  }
  return Object.is(r, e10);
}, Ue = (e10) => {
  var r, t, n;
  return Xn(e10) ? jt(e10) ? (r = (t = (n = e10[Oe]()).getSelectionKeys) == null ? void 0 : t.call(n)) != null ? r : [] : Array.isArray(e10) ? Yr(e10, Ue) : Yr(Object.values(e10), Ue) : [];
}, Yr = (e10, r) => e10.reduce((t, n) => t.concat(r(n)), []);
function ce(e10) {
  return Object.assign(e10, { optional: () => Cu(e10), and: (r) => $(e10, r), or: (r) => Iu(e10, r), select: (r) => r === void 0 ? qo(e10) : qo(r, e10) });
}
function Cu(e10) {
  return ce({ [Oe]: () => ({ match: (r) => {
    let t = {}, n = (i, o) => {
      t[i] = o;
    };
    return r === void 0 ? (Ue(e10).forEach((i) => n(i, void 0)), { matched: true, selections: t }) : { matched: Ee(e10, r, n), selections: t };
  }, getSelectionKeys: () => Ue(e10), matcherType: "optional" }) });
}
function $(...e10) {
  return ce({ [Oe]: () => ({ match: (r) => {
    let t = {}, n = (i, o) => {
      t[i] = o;
    };
    return { matched: e10.every((i) => Ee(i, r, n)), selections: t };
  }, getSelectionKeys: () => Yr(e10, Ue), matcherType: "and" }) });
}
function Iu(...e10) {
  return ce({ [Oe]: () => ({ match: (r) => {
    let t = {}, n = (i, o) => {
      t[i] = o;
    };
    return Yr(e10, Ue).forEach((i) => n(i, void 0)), { matched: e10.some((i) => Ee(i, r, n)), selections: t };
  }, getSelectionKeys: () => Yr(e10, Ue), matcherType: "or" }) });
}
function A(e10) {
  return { [Oe]: () => ({ match: (r) => ({ matched: !!e10(r) }) }) };
}
function qo(...e10) {
  let r = typeof e10[0] == "string" ? e10[0] : void 0, t = e10.length === 2 ? e10[1] : typeof e10[0] == "string" ? void 0 : e10[0];
  return ce({ [Oe]: () => ({ match: (n) => {
    let i = { [r ?? Bt]: n };
    return { matched: t === void 0 || Ee(t, n, (o, s) => {
      i[o] = s;
    }), selections: i };
  }, getSelectionKeys: () => [r ?? Bt].concat(t === void 0 ? [] : Ue(t)) }) });
}
function ye(e10) {
  return typeof e10 == "number";
}
function qe(e10) {
  return typeof e10 == "string";
}
function Ve(e10) {
  return typeof e10 == "bigint";
}
ce(A(function(e10) {
  return true;
}));
var je = (e10) => Object.assign(ce(e10), { startsWith: (r) => {
  return je($(e10, (t = r, A((n) => qe(n) && n.startsWith(t)))));
  var t;
}, endsWith: (r) => {
  return je($(e10, (t = r, A((n) => qe(n) && n.endsWith(t)))));
  var t;
}, minLength: (r) => je($(e10, ((t) => A((n) => qe(n) && n.length >= t))(r))), length: (r) => je($(e10, ((t) => A((n) => qe(n) && n.length === t))(r))), maxLength: (r) => je($(e10, ((t) => A((n) => qe(n) && n.length <= t))(r))), includes: (r) => {
  return je($(e10, (t = r, A((n) => qe(n) && n.includes(t)))));
  var t;
}, regex: (r) => {
  return je($(e10, (t = r, A((n) => qe(n) && !!n.match(t)))));
  var t;
} });
je(A(qe));
var be = (e10) => Object.assign(ce(e10), { between: (r, t) => be($(e10, ((n, i) => A((o) => ye(o) && n <= o && i >= o))(r, t))), lt: (r) => be($(e10, ((t) => A((n) => ye(n) && n < t))(r))), gt: (r) => be($(e10, ((t) => A((n) => ye(n) && n > t))(r))), lte: (r) => be($(e10, ((t) => A((n) => ye(n) && n <= t))(r))), gte: (r) => be($(e10, ((t) => A((n) => ye(n) && n >= t))(r))), int: () => be($(e10, A((r) => ye(r) && Number.isInteger(r)))), finite: () => be($(e10, A((r) => ye(r) && Number.isFinite(r)))), positive: () => be($(e10, A((r) => ye(r) && r > 0))), negative: () => be($(e10, A((r) => ye(r) && r < 0))) });
be(A(ye));
var Be = (e10) => Object.assign(ce(e10), { between: (r, t) => Be($(e10, ((n, i) => A((o) => Ve(o) && n <= o && i >= o))(r, t))), lt: (r) => Be($(e10, ((t) => A((n) => Ve(n) && n < t))(r))), gt: (r) => Be($(e10, ((t) => A((n) => Ve(n) && n > t))(r))), lte: (r) => Be($(e10, ((t) => A((n) => Ve(n) && n <= t))(r))), gte: (r) => Be($(e10, ((t) => A((n) => Ve(n) && n >= t))(r))), positive: () => Be($(e10, A((r) => Ve(r) && r > 0))), negative: () => Be($(e10, A((r) => Ve(r) && r < 0))) });
Be(A(Ve));
ce(A(function(e10) {
  return typeof e10 == "boolean";
}));
ce(A(function(e10) {
  return typeof e10 == "symbol";
}));
ce(A(function(e10) {
  return e10 == null;
}));
ce(A(function(e10) {
  return e10 != null;
}));
var ei = class extends Error {
  constructor(r) {
    let t;
    try {
      t = JSON.stringify(r);
    } catch {
      t = r;
    }
    super(`Pattern matching error: no pattern matches value ${t}`), this.input = void 0, this.input = r;
  }
}, ri = { matched: false, value: void 0 };
function yr(e10) {
  return new ti(e10, ri);
}
var ti = class e {
  constructor(r, t) {
    this.input = void 0, this.state = void 0, this.input = r, this.state = t;
  }
  with(...r) {
    if (this.state.matched) return this;
    let t = r[r.length - 1], n = [r[0]], i;
    r.length === 3 && typeof r[1] == "function" ? i = r[1] : r.length > 2 && n.push(...r.slice(1, r.length - 1));
    let o = false, s = {}, a = (u, c) => {
      o = true, s[u] = c;
    }, l = !n.some((u) => Ee(u, this.input, a)) || i && !i(this.input) ? ri : { matched: true, value: t(o ? Bt in s ? s[Bt] : s : this.input, this.input) };
    return new e(this.input, l);
  }
  when(r, t) {
    if (this.state.matched) return this;
    let n = !!r(this.input);
    return new e(this.input, n ? { matched: true, value: t(this.input, this.input) } : ri);
  }
  otherwise(r) {
    return this.state.matched ? this.state.value : r(this.input);
  }
  exhaustive() {
    if (this.state.matched) return this.state.value;
    throw new ei(this.input);
  }
  run() {
    return this.exhaustive();
  }
  returnType() {
    return this;
  }
};
var Du = { warn: Ie("prisma:warn") }, Ou = { warn: () => !process$1.env.PRISMA_DISABLE_WARNINGS };
function Ut(e10, ...r) {
  Ou.warn() && console.warn(`${Du.warn} ${e10}`, ...r);
}
var Nu = promisify(ku.exec), z = hr("prisma:get-platform"), Lu = ["1.0.x", "1.1.x", "3.0.x"];
async function Uo() {
  let e10 = ni.platform(), r = process$1.arch;
  if (e10 === "freebsd") {
    let s = await Qt("freebsd-version");
    if (s && s.trim().length > 0) {
      let l = /^(\d+)\.?/.exec(s);
      if (l) return { platform: "freebsd", targetDistro: `freebsd${l[1]}`, arch: r };
    }
  }
  if (e10 !== "linux") return { platform: e10, arch: r };
  let t = await Mu(), n = await Qu(), i = qu({ arch: r, archFromUname: n, familyDistro: t.familyDistro }), { libssl: o } = await Vu(i);
  return { platform: "linux", libssl: o, arch: r, archFromUname: n, ...t };
}
function Fu(e10) {
  let r = /^ID="?([^"\n]*)"?$/im, t = /^ID_LIKE="?([^"\n]*)"?$/im, n = r.exec(e10), i = n && n[1] && n[1].toLowerCase() || "", o = t.exec(e10), s = o && o[1] && o[1].toLowerCase() || "", a = yr({ id: i, idLike: s }).with({ id: "alpine" }, ({ id: l }) => ({ targetDistro: "musl", familyDistro: l, originalDistro: l })).with({ id: "raspbian" }, ({ id: l }) => ({ targetDistro: "arm", familyDistro: "debian", originalDistro: l })).with({ id: "nixos" }, ({ id: l }) => ({ targetDistro: "nixos", originalDistro: l, familyDistro: "nixos" })).with({ id: "debian" }, { id: "ubuntu" }, ({ id: l }) => ({ targetDistro: "debian", familyDistro: "debian", originalDistro: l })).with({ id: "rhel" }, { id: "centos" }, { id: "fedora" }, ({ id: l }) => ({ targetDistro: "rhel", familyDistro: "rhel", originalDistro: l })).when(({ idLike: l }) => l.includes("debian") || l.includes("ubuntu"), ({ id: l }) => ({ targetDistro: "debian", familyDistro: "debian", originalDistro: l })).when(({ idLike: l }) => i === "arch" || l.includes("arch"), ({ id: l }) => ({ targetDistro: "debian", familyDistro: "arch", originalDistro: l })).when(({ idLike: l }) => l.includes("centos") || l.includes("fedora") || l.includes("rhel") || l.includes("suse"), ({ id: l }) => ({ targetDistro: "rhel", familyDistro: "rhel", originalDistro: l })).otherwise(({ id: l }) => ({ targetDistro: void 0, familyDistro: void 0, originalDistro: l }));
  return z(`Found distro info:
${JSON.stringify(a, null, 2)}`), a;
}
async function Mu() {
  let e10 = "/etc/os-release";
  try {
    let r = await Bo.readFile(e10, { encoding: "utf-8" });
    return Fu(r);
  } catch {
    return { targetDistro: void 0, familyDistro: void 0, originalDistro: void 0 };
  }
}
function $u(e10) {
  let r = /^OpenSSL\s(\d+\.\d+)\.\d+/.exec(e10);
  if (r) {
    let t = `${r[1]}.x`;
    return Go(t);
  }
}
function Vo(e10) {
  let r = /libssl\.so\.(\d)(\.\d)?/.exec(e10);
  if (r) {
    let t = `${r[1]}${r[2] ?? ".0"}.x`;
    return Go(t);
  }
}
function Go(e10) {
  let r = (() => {
    if (Wo(e10)) return e10;
    let t = e10.split(".");
    return t[1] = "0", t.join(".");
  })();
  if (Lu.includes(r)) return r;
}
function qu(e10) {
  return yr(e10).with({ familyDistro: "musl" }, () => (z('Trying platform-specific paths for "alpine"'), ["/lib", "/usr/lib"])).with({ familyDistro: "debian" }, ({ archFromUname: r }) => (z('Trying platform-specific paths for "debian" (and "ubuntu")'), [`/usr/lib/${r}-linux-gnu`, `/lib/${r}-linux-gnu`])).with({ familyDistro: "rhel" }, () => (z('Trying platform-specific paths for "rhel"'), ["/lib64", "/usr/lib64"])).otherwise(({ familyDistro: r, arch: t, archFromUname: n }) => (z(`Don't know any platform-specific paths for "${r}" on ${t} (${n})`), []));
}
async function Vu(e10) {
  let r = 'grep -v "libssl.so.0"', t = await jo(e10);
  if (t) {
    z(`Found libssl.so file using platform-specific paths: ${t}`);
    let o = Vo(t);
    if (z(`The parsed libssl version is: ${o}`), o) return { libssl: o, strategy: "libssl-specific-path" };
  }
  z('Falling back to "ldconfig" and other generic paths');
  let n = await Qt(`ldconfig -p | sed "s/.*=>s*//" | sed "s|.*/||" | grep libssl | sort | ${r}`);
  if (n || (n = await jo(["/lib64", "/usr/lib64", "/lib", "/usr/lib"])), n) {
    z(`Found libssl.so file using "ldconfig" or other generic paths: ${n}`);
    let o = Vo(n);
    if (z(`The parsed libssl version is: ${o}`), o) return { libssl: o, strategy: "ldconfig" };
  }
  let i = await Qt("openssl version -v");
  if (i) {
    z(`Found openssl binary with version: ${i}`);
    let o = $u(i);
    if (z(`The parsed openssl version is: ${o}`), o) return { libssl: o, strategy: "openssl-binary" };
  }
  return z("Couldn't find any version of libssl or OpenSSL in the system"), {};
}
async function jo(e10) {
  for (let r of e10) {
    let t = await ju(r);
    if (t) return t;
  }
}
async function ju(e10) {
  try {
    return (await Bo.readdir(e10)).find((t) => t.startsWith("libssl.so.") && !t.startsWith("libssl.so.0"));
  } catch (r) {
    if (r.code === "ENOENT") return;
    throw r;
  }
}
async function nr() {
  let { binaryTarget: e10 } = await Qo();
  return e10;
}
function Bu(e10) {
  return e10.binaryTarget !== void 0;
}
async function ii() {
  let { memoized: e10, ...r } = await Qo();
  return r;
}
var Gt = {};
async function Qo() {
  if (Bu(Gt)) return Promise.resolve({ ...Gt, memoized: true });
  let e10 = await Uo(), r = Uu(e10);
  return Gt = { ...e10, binaryTarget: r }, { ...Gt, memoized: false };
}
function Uu(e10) {
  let { platform: r, arch: t, archFromUname: n, libssl: i, targetDistro: o, familyDistro: s, originalDistro: a } = e10;
  r === "linux" && !["x64", "arm64"].includes(t) && Ut(`Prisma only officially supports Linux on amd64 (x86_64) and arm64 (aarch64) system architectures (detected "${t}" instead). If you are using your own custom Prisma engines, you can ignore this warning, as long as you've compiled the engines for your system architecture "${n}".`);
  let l = "1.1.x";
  if (r === "linux" && i === void 0) {
    let c = yr({ familyDistro: s }).with({ familyDistro: "debian" }, () => "Please manually install OpenSSL via `apt-get update -y && apt-get install -y openssl` and try installing Prisma again. If you're running Prisma on Docker, add this command to your Dockerfile, or switch to an image that already has OpenSSL installed.").otherwise(() => "Please manually install OpenSSL and try installing Prisma again.");
    Ut(`Prisma failed to detect the libssl/openssl version to use, and may not work as expected. Defaulting to "openssl-${l}".
${c}`);
  }
  let u = "debian";
  if (r === "linux" && o === void 0 && z(`Distro is "${a}". Falling back to Prisma engines built for "${u}".`), r === "darwin" && t === "arm64") return "darwin-arm64";
  if (r === "darwin") return "darwin";
  if (r === "win32") return "windows";
  if (r === "freebsd") return o;
  if (r === "openbsd") return "openbsd";
  if (r === "netbsd") return "netbsd";
  if (r === "linux" && o === "nixos") return "linux-nixos";
  if (r === "linux" && t === "arm64") return `${o === "musl" ? "linux-musl-arm64" : "linux-arm64"}-openssl-${i || l}`;
  if (r === "linux" && t === "arm") return `linux-arm-openssl-${i || l}`;
  if (r === "linux" && o === "musl") {
    let c = "linux-musl";
    return !i || Wo(i) ? c : `${c}-openssl-${i}`;
  }
  return r === "linux" && o && i ? `${o}-openssl-${i}` : (r !== "linux" && Ut(`Prisma detected unknown OS "${r}" and may not work as expected. Defaulting to "linux".`), i ? `${u}-openssl-${i}` : o ? `${o}-openssl-${l}` : `${u}-openssl-${l}`);
}
async function Gu(e10) {
  try {
    return await e10();
  } catch {
    return;
  }
}
function Qt(e10) {
  return Gu(async () => {
    let r = await Nu(e10);
    return z(`Command "${e10}" successfully returned "${r.stdout}"`), r.stdout;
  });
}
async function Qu() {
  var _a3;
  return typeof ni.machine == "function" ? ni.machine() : (_a3 = await Qt("uname -m")) == null ? void 0 : _a3.trim();
}
function Wo(e10) {
  return e10.startsWith("1.");
}
var Jt = {};
gr(Jt, { beep: () => yc, clearScreen: () => mc, clearTerminal: () => fc, cursorBackward: () => Zu, cursorDown: () => Yu, cursorForward: () => zu, cursorGetPosition: () => rc, cursorHide: () => ic, cursorLeft: () => Ho, cursorMove: () => Hu, cursorNextLine: () => tc, cursorPrevLine: () => nc, cursorRestorePosition: () => ec, cursorSavePosition: () => Xu, cursorShow: () => oc, cursorTo: () => Ku, cursorUp: () => Ko, enterAlternativeScreen: () => gc, eraseDown: () => uc, eraseEndLine: () => ac, eraseLine: () => Yo, eraseLines: () => sc, eraseScreen: () => oi, eraseStartLine: () => lc, eraseUp: () => cc, exitAlternativeScreen: () => hc, iTerm: () => wc, image: () => Ec, link: () => bc, scrollDown: () => dc, scrollUp: () => pc });
var Wt = ((_a2 = globalThis.window) == null ? void 0 : _a2.document) !== void 0;
((_c2 = (_b = globalThis.process) == null ? void 0 : _b.versions) == null ? void 0 : _c2.node) !== void 0;
((_e = (_d2 = globalThis.process) == null ? void 0 : _d2.versions) == null ? void 0 : _e.bun) !== void 0;
((_g = (_f2 = globalThis.Deno) == null ? void 0 : _f2.version) == null ? void 0 : _g.deno) !== void 0;
((_i = (_h = globalThis.process) == null ? void 0 : _h.versions) == null ? void 0 : _i.electron) !== void 0;
((_k = (_j = globalThis.navigator) == null ? void 0 : _j.userAgent) == null ? void 0 : _k.includes("jsdom")) === true;
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
typeof DedicatedWorkerGlobalScope < "u" && globalThis instanceof DedicatedWorkerGlobalScope;
typeof SharedWorkerGlobalScope < "u" && globalThis instanceof SharedWorkerGlobalScope;
typeof ServiceWorkerGlobalScope < "u" && globalThis instanceof ServiceWorkerGlobalScope;
var zr = (_m2 = (_l2 = globalThis.navigator) == null ? void 0 : _l2.userAgentData) == null ? void 0 : _m2.platform;
zr === "macOS" || ((_n2 = globalThis.navigator) == null ? void 0 : _n2.platform) === "MacIntel" || ((_p2 = (_o2 = globalThis.navigator) == null ? void 0 : _o2.userAgent) == null ? void 0 : _p2.includes(" Mac ")) === true || ((_q = globalThis.process) == null ? void 0 : _q.platform) === "darwin";
zr === "Windows" || ((_r2 = globalThis.navigator) == null ? void 0 : _r2.platform) === "Win32" || ((_s2 = globalThis.process) == null ? void 0 : _s2.platform) === "win32";
zr === "Linux" || ((_u = (_t2 = globalThis.navigator) == null ? void 0 : _t2.platform) == null ? void 0 : _u.startsWith("Linux")) === true || ((_w = (_v = globalThis.navigator) == null ? void 0 : _v.userAgent) == null ? void 0 : _w.includes(" Linux ")) === true || ((_x = globalThis.process) == null ? void 0 : _x.platform) === "linux";
zr === "Android" || ((_y = globalThis.navigator) == null ? void 0 : _y.platform) === "Android" || ((_A = (_z = globalThis.navigator) == null ? void 0 : _z.userAgent) == null ? void 0 : _A.includes(" Android ")) === true || ((_B = globalThis.process) == null ? void 0 : _B.platform) === "android";
var C = "\x1B[", Xr = "\x1B]", br = "\x07", Zr = ";", Jo = !Wt && process__default.env.TERM_PROGRAM === "Apple_Terminal", Wu = !Wt && process__default.platform === "win32", Ju = Wt ? () => {
  throw new Error("`process.cwd()` only works in Node.js, not the browser.");
} : process__default.cwd, Ku = (e10, r) => {
  if (typeof e10 != "number") throw new TypeError("The `x` argument is required");
  return typeof r != "number" ? C + (e10 + 1) + "G" : C + (r + 1) + Zr + (e10 + 1) + "H";
}, Hu = (e10, r) => {
  if (typeof e10 != "number") throw new TypeError("The `x` argument is required");
  let t = "";
  return e10 < 0 ? t += C + -e10 + "D" : e10 > 0 && (t += C + e10 + "C"), r < 0 ? t += C + -r + "A" : r > 0 && (t += C + r + "B"), t;
}, Ko = (e10 = 1) => C + e10 + "A", Yu = (e10 = 1) => C + e10 + "B", zu = (e10 = 1) => C + e10 + "C", Zu = (e10 = 1) => C + e10 + "D", Ho = C + "G", Xu = Jo ? "\x1B7" : C + "s", ec = Jo ? "\x1B8" : C + "u", rc = C + "6n", tc = C + "E", nc = C + "F", ic = C + "?25l", oc = C + "?25h", sc = (e10) => {
  let r = "";
  for (let t = 0; t < e10; t++) r += Yo + (t < e10 - 1 ? Ko() : "");
  return e10 && (r += Ho), r;
}, ac = C + "K", lc = C + "1K", Yo = C + "2K", uc = C + "J", cc = C + "1J", oi = C + "2J", pc = C + "S", dc = C + "T", mc = "\x1Bc", fc = Wu ? `${oi}${C}0f` : `${oi}${C}3J${C}H`, gc = C + "?1049h", hc = C + "?1049l", yc = br, bc = (e10, r) => [Xr, "8", Zr, Zr, r, br, e10, Xr, "8", Zr, Zr, br].join(""), Ec = (e10, r = {}) => {
  let t = `${Xr}1337;File=inline=1`;
  return r.width && (t += `;width=${r.width}`), r.height && (t += `;height=${r.height}`), r.preserveAspectRatio === false && (t += ";preserveAspectRatio=0"), t + ":" + Buffer.from(e10).toString("base64") + br;
}, wc = { setCwd: (e10 = Ju()) => `${Xr}50;CurrentDir=${e10}${br}`, annotation(e10, r = {}) {
  let t = `${Xr}1337;`, n = r.x !== void 0, i = r.y !== void 0;
  if ((n || i) && !(n && i && r.length !== void 0)) throw new Error("`x`, `y` and `length` must be defined when `x` or `y` is defined");
  return e10 = e10.replaceAll("|", ""), t += r.isHidden ? "AddHiddenAnnotation=" : "AddAnnotation=", r.length > 0 ? t += (n ? [e10, r.length, r.x, r.y] : [r.length, e10]).join("|") : t += e10, t + br;
} };
var Kt = le(ns(), 1);
function ir(e10, r, { target: t = "stdout", ...n } = {}) {
  return Kt.default[t] ? Jt.link(e10, r) : n.fallback === false ? e10 : typeof n.fallback == "function" ? n.fallback(e10, r) : `${e10} (​${r}​)`;
}
ir.isSupported = Kt.default.stdout;
ir.stderr = (e10, r, t = {}) => ir(e10, r, { target: "stderr", ...t });
ir.stderr.isSupported = Kt.default.stderr;
function pi(e10) {
  return ir(e10, e10, { fallback: H });
}
var Sc = is(), di = Sc.version;
function wr(e10) {
  let r = Rc();
  return r || ((e10 == null ? void 0 : e10.config.engineType) === "library" ? "library" : (e10 == null ? void 0 : e10.config.engineType) === "binary" ? "binary" : (e10 == null ? void 0 : e10.config.engineType) === "client" ? "client" : Ac());
}
function Rc() {
  let e10 = process$1.env.PRISMA_CLIENT_ENGINE_TYPE;
  return e10 === "library" ? "library" : e10 === "binary" ? "binary" : e10 === "client" ? "client" : void 0;
}
function Ac() {
  return "library";
}
function mi(e10) {
  return e10.name === "DriverAdapterError" && typeof e10.cause == "object";
}
function Ht(e10) {
  return { ok: true, value: e10, map(r) {
    return Ht(r(e10));
  }, flatMap(r) {
    return r(e10);
  } };
}
function or(e10) {
  return { ok: false, error: e10, map() {
    return or(e10);
  }, flatMap() {
    return or(e10);
  } };
}
var os = L("driver-adapter-utils"), fi = class {
  constructor() {
    __publicField(this, "registeredErrors", []);
  }
  consumeError(r) {
    return this.registeredErrors[r];
  }
  registerNewError(r) {
    let t = 0;
    for (; this.registeredErrors[t] !== void 0; ) t++;
    return this.registeredErrors[t] = { error: r }, t;
  }
};
var Yt = (e10, r = new fi()) => {
  let t = { adapterName: e10.adapterName, errorRegistry: r, queryRaw: ke(r, e10.queryRaw.bind(e10)), executeRaw: ke(r, e10.executeRaw.bind(e10)), executeScript: ke(r, e10.executeScript.bind(e10)), dispose: ke(r, e10.dispose.bind(e10)), provider: e10.provider, startTransaction: async (...n) => (await ke(r, e10.startTransaction.bind(e10))(...n)).map((o) => Cc(r, o)) };
  return e10.getConnectionInfo && (t.getConnectionInfo = Ic(r, e10.getConnectionInfo.bind(e10))), t;
}, Cc = (e10, r) => ({ adapterName: r.adapterName, provider: r.provider, options: r.options, queryRaw: ke(e10, r.queryRaw.bind(r)), executeRaw: ke(e10, r.executeRaw.bind(r)), commit: ke(e10, r.commit.bind(r)), rollback: ke(e10, r.rollback.bind(r)) });
function ke(e10, r) {
  return async (...t) => {
    try {
      return Ht(await r(...t));
    } catch (n) {
      if (os("[error@wrapAsync]", n), mi(n)) return or(n.cause);
      let i = e10.registerNewError(n);
      return or({ kind: "GenericJs", id: i });
    }
  };
}
function Ic(e10, r) {
  return (...t) => {
    try {
      return Ht(r(...t));
    } catch (n) {
      if (os("[error@wrapSync]", n), mi(n)) return or(n.cause);
      let i = e10.registerNewError(n);
      return or({ kind: "GenericJs", id: i });
    }
  };
}
le(Zt());
le(Zt());
L("prisma:engines");
function ss() {
  return path__default.join(__dirname, "../");
}
path__default.join(__dirname, "../query-engine-darwin");
path__default.join(__dirname, "../query-engine-darwin-arm64");
path__default.join(__dirname, "../query-engine-debian-openssl-1.0.x");
path__default.join(__dirname, "../query-engine-debian-openssl-1.1.x");
path__default.join(__dirname, "../query-engine-debian-openssl-3.0.x");
path__default.join(__dirname, "../query-engine-linux-static-x64");
path__default.join(__dirname, "../query-engine-linux-static-arm64");
path__default.join(__dirname, "../query-engine-rhel-openssl-1.0.x");
path__default.join(__dirname, "../query-engine-rhel-openssl-1.1.x");
path__default.join(__dirname, "../query-engine-rhel-openssl-3.0.x");
path__default.join(__dirname, "../libquery_engine-darwin.dylib.node");
path__default.join(__dirname, "../libquery_engine-darwin-arm64.dylib.node");
path__default.join(__dirname, "../libquery_engine-debian-openssl-1.0.x.so.node");
path__default.join(__dirname, "../libquery_engine-debian-openssl-1.1.x.so.node");
path__default.join(__dirname, "../libquery_engine-debian-openssl-3.0.x.so.node");
path__default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.0.x.so.node");
path__default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.1.x.so.node");
path__default.join(__dirname, "../libquery_engine-linux-arm64-openssl-3.0.x.so.node");
path__default.join(__dirname, "../libquery_engine-linux-musl.so.node");
path__default.join(__dirname, "../libquery_engine-linux-musl-openssl-3.0.x.so.node");
path__default.join(__dirname, "../libquery_engine-rhel-openssl-1.0.x.so.node");
path__default.join(__dirname, "../libquery_engine-rhel-openssl-1.1.x.so.node");
path__default.join(__dirname, "../libquery_engine-rhel-openssl-3.0.x.so.node");
path__default.join(__dirname, "../query_engine-windows.dll.node");
hr("chmodPlusX");
function yi(e10) {
  let r = e10.e, t = (a) => `Prisma cannot find the required \`${a}\` system library in your system`, n = r.message.includes("cannot open shared object file"), i = `Please refer to the documentation about Prisma's system requirements: ${pi("https://pris.ly/d/system-requirements")}`, o = `Unable to require(\`${Ce(e10.id)}\`).`, s = yr({ message: r.message, code: r.code }).with({ code: "ENOENT" }, () => "File does not exist.").when(({ message: a }) => n && a.includes("libz"), () => `${t("libz")}. Please install it and try again.`).when(({ message: a }) => n && a.includes("libgcc_s"), () => `${t("libgcc_s")}. Please install it and try again.`).when(({ message: a }) => n && a.includes("libssl"), () => {
    let a = e10.platformInfo.libssl ? `openssl-${e10.platformInfo.libssl}` : "openssl";
    return `${t("libssl")}. Please install ${a} and try again.`;
  }).when(({ message: a }) => a.includes("GLIBC"), () => `Prisma has detected an incompatible version of the \`glibc\` C standard library installed in your system. This probably means your system may be too old to run Prisma. ${i}`).when(({ message: a }) => e10.platformInfo.platform === "linux" && a.includes("symbol not found"), () => `The Prisma engines are not compatible with your system ${e10.platformInfo.originalDistro} on (${e10.platformInfo.archFromUname}) which uses the \`${e10.platformInfo.binaryTarget}\` binaryTarget by default. ${i}`).otherwise(() => `The Prisma engines do not seem to be compatible with your system. ${i}`);
  return `${o}
${s}

Details: ${r.message}`;
}
var ps = le(cs(), 1);
function bi(e10) {
  let r = (0, ps.default)(e10);
  if (r === 0) return e10;
  let t = new RegExp(`^[ \\t]{${r}}`, "gm");
  return e10.replace(t, "");
}
var ds = "prisma+postgres", Xt = `${ds}:`;
function en$1(e10) {
  return (e10 == null ? void 0 : e10.toString().startsWith(`${Xt}//`)) ?? false;
}
function Ei(e10) {
  if (!en$1(e10)) return false;
  let { host: r } = new URL(e10);
  return r.includes("localhost") || r.includes("127.0.0.1") || r.includes("[::1]");
}
var fs = le(wi());
function vi(e10) {
  return String(new xi(e10));
}
var xi = class {
  constructor(r) {
    this.config = r;
  }
  toString() {
    let { config: r } = this, t = r.provider.fromEnvVar ? `env("${r.provider.fromEnvVar}")` : r.provider.value, n = JSON.parse(JSON.stringify({ provider: t, binaryTargets: _c(r.binaryTargets) }));
    return `generator ${r.name} {
${(0, fs.default)(Nc(n), 2)}
}`;
  }
};
function _c(e10) {
  let r;
  if (e10.length > 0) {
    let t = e10.find((n) => n.fromEnvVar !== null);
    t ? r = `env("${t.fromEnvVar}")` : r = e10.map((n) => n.native ? "native" : n.value);
  } else r = void 0;
  return r;
}
function Nc(e10) {
  let r = Object.keys(e10).reduce((t, n) => Math.max(t, n.length), 0);
  return Object.entries(e10).map(([t, n]) => `${t.padEnd(r)} = ${Lc(n)}`).join(`
`);
}
function Lc(e10) {
  return JSON.parse(JSON.stringify(e10, (r, t) => Array.isArray(t) ? `[${t.map((n) => JSON.stringify(n)).join(", ")}]` : JSON.stringify(t)));
}
var rt = {};
gr(rt, { error: () => $c, info: () => Mc, log: () => Fc, query: () => qc, should: () => gs, tags: () => et, warn: () => Pi });
var et = { error: ue("prisma:error"), warn: Ie("prisma:warn"), info: De("prisma:info"), query: tr("prisma:query") }, gs = { warn: () => !process$1.env.PRISMA_DISABLE_WARNINGS };
function Fc(...e10) {
  console.log(...e10);
}
function Pi(e10, ...r) {
  gs.warn() && console.warn(`${et.warn} ${e10}`, ...r);
}
function Mc(e10, ...r) {
  console.info(`${et.info} ${e10}`, ...r);
}
function $c(e10, ...r) {
  console.error(`${et.error} ${e10}`, ...r);
}
function qc(e10, ...r) {
  console.log(`${et.query} ${e10}`, ...r);
}
function rn(e10, r) {
  if (!e10) throw new Error(`${r}. This should never happen. If you see this error, please, open an issue at https://pris.ly/prisma-prisma-bug-report`);
}
function sr(e10, r) {
  throw new Error(r);
}
function Ti({ onlyFirst: e10 = false } = {}) {
  let t = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?(?:\\u0007|\\u001B\\u005C|\\u009C))", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|");
  return new RegExp(t, e10 ? void 0 : "g");
}
var Vc = Ti();
function xr(e10) {
  if (typeof e10 != "string") throw new TypeError(`Expected a \`string\`, got \`${typeof e10}\``);
  return e10.replace(Vc, "");
}
function Si(e10) {
  return path__default.sep === path__default.posix.sep ? e10 : e10.split(path__default.sep).join(path__default.posix.sep);
}
var Di = le(xs());
function vs(e10) {
  let r = e10.ignoreProcessEnv ? {} : process$1.env, t = (n) => {
    var _a3;
    return ((_a3 = n.match(/(.?\${(?:[a-zA-Z0-9_]+)?})/g)) == null ? void 0 : _a3.reduce(function(o, s) {
      let a = /(.?)\${([a-zA-Z0-9_]+)?}/g.exec(s);
      if (!a) return o;
      let l = a[1], u, c;
      if (l === "\\") c = a[0], u = c.replace("\\$", "$");
      else {
        let p = a[2];
        c = a[0].substring(l.length), u = Object.hasOwnProperty.call(r, p) ? r[p] : e10.parsed[p] || "", u = t(u);
      }
      return o.replace(c, u);
    }, n)) ?? n;
  };
  for (let n in e10.parsed) {
    let i = Object.hasOwnProperty.call(r, n) ? r[n] : e10.parsed[n];
    e10.parsed[n] = t(i);
  }
  for (let n in e10.parsed) r[n] = e10.parsed[n];
  return e10;
}
var Ii = hr("prisma:tryLoadEnv");
function it({ rootEnvPath: e10, schemaEnvPath: r }, t = { conflictCheck: "none" }) {
  var _a3, _b2;
  let n = Ps(e10);
  t.conflictCheck !== "none" && rp(n, r, t.conflictCheck);
  let i = null;
  return Ts(n == null ? void 0 : n.path, r) || (i = Ps(r)), !n && !i && Ii("No Environment variables loaded"), (i == null ? void 0 : i.dotenvResult.error) ? console.error(ue(Q("Schema Env Error: ")) + i.dotenvResult.error) : { message: [n == null ? void 0 : n.message, i == null ? void 0 : i.message].filter(Boolean).join(`
`), parsed: { ...(_a3 = n == null ? void 0 : n.dotenvResult) == null ? void 0 : _a3.parsed, ...(_b2 = i == null ? void 0 : i.dotenvResult) == null ? void 0 : _b2.parsed } };
}
function rp(e10, r, t) {
  let n = e10 == null ? void 0 : e10.dotenvResult.parsed, i = !Ts(e10 == null ? void 0 : e10.path, r);
  if (n && r && i && Ci.existsSync(r)) {
    let o = Di.default.parse(Ci.readFileSync(r)), s = [];
    for (let a in o) n[a] === o[a] && s.push(a);
    if (s.length > 0) {
      let a = path__default.relative(process$1.cwd(), e10.path), l = path__default.relative(process$1.cwd(), r);
      if (t === "error") {
        let u = `There is a conflict between env var${s.length > 1 ? "s" : ""} in ${H(a)} and ${H(l)}
Conflicting env vars:
${s.map((c) => `  ${Q(c)}`).join(`
`)}

We suggest to move the contents of ${H(l)} to ${H(a)} to consolidate your env vars.
`;
        throw new Error(u);
      } else if (t === "warn") {
        let u = `Conflict for env var${s.length > 1 ? "s" : ""} ${s.map((c) => Q(c)).join(", ")} in ${H(a)} and ${H(l)}
Env vars from ${H(l)} overwrite the ones from ${H(a)}
      `;
        console.warn(`${Ie("warn(prisma)")} ${u}`);
      }
    }
  }
}
function Ps(e10) {
  if (tp(e10)) {
    Ii(`Environment variables loaded from ${e10}`);
    let r = Di.default.config({ path: e10, debug: process$1.env.DOTENV_CONFIG_DEBUG ? true : void 0 });
    return { dotenvResult: vs(r), message: Ce(`Environment variables loaded from ${path__default.relative(process$1.cwd(), e10)}`), path: e10 };
  } else Ii(`Environment variables not found at ${e10}`);
  return null;
}
function Ts(e10, r) {
  return e10 && r && path__default.resolve(e10) === path__default.resolve(r);
}
function tp(e10) {
  return !!(e10 && Ci.existsSync(e10));
}
function Oi(e10, r) {
  return Object.prototype.hasOwnProperty.call(e10, r);
}
function on(e10, r) {
  let t = {};
  for (let n of Object.keys(e10)) t[n] = r(e10[n], n);
  return t;
}
function ki(e10, r) {
  if (e10.length === 0) return;
  let t = e10[0];
  for (let n = 1; n < e10.length; n++) r(t, e10[n]) < 0 && (t = e10[n]);
  return t;
}
function x(e10, r) {
  Object.defineProperty(e10, "name", { value: r, configurable: true });
}
var Rs = /* @__PURE__ */ new Set(), sn = (e10, r, ...t) => {
  Rs.has(e10) || (Rs.add(e10), Pi(r, ...t));
};
var P = class e2 extends Error {
  constructor(r, t, n) {
    super(r);
    __publicField(this, "clientVersion");
    __publicField(this, "errorCode");
    __publicField(this, "retryable");
    this.name = "PrismaClientInitializationError", this.clientVersion = t, this.errorCode = n, Error.captureStackTrace(e2);
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientInitializationError";
  }
};
x(P, "PrismaClientInitializationError");
var Z = class extends Error {
  constructor(r, { code: t, clientVersion: n, meta: i, batchRequestIdx: o }) {
    super(r);
    __publicField(this, "code");
    __publicField(this, "meta");
    __publicField(this, "clientVersion");
    __publicField(this, "batchRequestIdx");
    this.name = "PrismaClientKnownRequestError", this.code = t, this.clientVersion = n, this.meta = i, Object.defineProperty(this, "batchRequestIdx", { value: o, enumerable: false, writable: true });
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientKnownRequestError";
  }
};
x(Z, "PrismaClientKnownRequestError");
var de = class extends Error {
  constructor(r, t) {
    super(r);
    __publicField(this, "clientVersion");
    this.name = "PrismaClientRustPanicError", this.clientVersion = t;
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientRustPanicError";
  }
};
x(de, "PrismaClientRustPanicError");
var q = class extends Error {
  constructor(r, { clientVersion: t, batchRequestIdx: n }) {
    super(r);
    __publicField(this, "clientVersion");
    __publicField(this, "batchRequestIdx");
    this.name = "PrismaClientUnknownRequestError", this.clientVersion = t, Object.defineProperty(this, "batchRequestIdx", { value: n, writable: true, enumerable: false });
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientUnknownRequestError";
  }
};
x(q, "PrismaClientUnknownRequestError");
var X = class extends Error {
  constructor(r, { clientVersion: t }) {
    super(r);
    __publicField(this, "name", "PrismaClientValidationError");
    __publicField(this, "clientVersion");
    this.clientVersion = t;
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientValidationError";
  }
};
x(X, "PrismaClientValidationError");
var we = class {
  constructor() {
    __publicField(this, "_map", /* @__PURE__ */ new Map());
  }
  get(r) {
    var _a3;
    return (_a3 = this._map.get(r)) == null ? void 0 : _a3.value;
  }
  set(r, t) {
    this._map.set(r, { value: t });
  }
  getOrCreate(r, t) {
    let n = this._map.get(r);
    if (n) return n.value;
    let i = t();
    return this.set(r, i), i;
  }
};
function Qe(e10) {
  return e10.substring(0, 1).toLowerCase() + e10.substring(1);
}
function As(e10, r) {
  let t = {};
  for (let n of e10) {
    let i = n[r];
    t[i] = n;
  }
  return t;
}
function ot(e10) {
  let r;
  return { get() {
    return r || (r = { value: e10() }), r.value;
  } };
}
function vr(e10) {
  return e10 instanceof Date || Object.prototype.toString.call(e10) === "[object Date]";
}
function ln(e10) {
  return e10.toString() !== "Invalid Date";
}
var Pr = 9e15, He = 1e9, Ni = "0123456789abcdef", pn = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", dn = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Li = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -Pr, maxE: Pr, crypto: false }, Os, Ne, w = true, fn = "[DecimalError] ", Ke = fn + "Invalid argument: ", ks = fn + "Precision limit exceeded", _s = fn + "crypto unavailable", Ns = "[object Decimal]", Y = Math.floor, B = Math.pow, ip = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, op = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, sp = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Ls = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, fe = 1e7, E = 7, ap = 9007199254740991, lp = pn.length - 1, Fi = dn.length - 1, m = { toStringTag: Ns };
m.absoluteValue = m.abs = function() {
  var e10 = new this.constructor(this);
  return e10.s < 0 && (e10.s = 1), y(e10);
};
m.ceil = function() {
  return y(new this.constructor(this), this.e + 1, 2);
};
m.clampedTo = m.clamp = function(e10, r) {
  var t, n = this, i = n.constructor;
  if (e10 = new i(e10), r = new i(r), !e10.s || !r.s) return new i(NaN);
  if (e10.gt(r)) throw Error(Ke + r);
  return t = n.cmp(e10), t < 0 ? e10 : n.cmp(r) > 0 ? r : new i(n);
};
m.comparedTo = m.cmp = function(e10) {
  var r, t, n, i, o = this, s = o.d, a = (e10 = new o.constructor(e10)).d, l = o.s, u = e10.s;
  if (!s || !a) return !l || !u ? NaN : l !== u ? l : s === a ? 0 : !s ^ l < 0 ? 1 : -1;
  if (!s[0] || !a[0]) return s[0] ? l : a[0] ? -u : 0;
  if (l !== u) return l;
  if (o.e !== e10.e) return o.e > e10.e ^ l < 0 ? 1 : -1;
  for (n = s.length, i = a.length, r = 0, t = n < i ? n : i; r < t; ++r) if (s[r] !== a[r]) return s[r] > a[r] ^ l < 0 ? 1 : -1;
  return n === i ? 0 : n > i ^ l < 0 ? 1 : -1;
};
m.cosine = m.cos = function() {
  var e10, r, t = this, n = t.constructor;
  return t.d ? t.d[0] ? (e10 = n.precision, r = n.rounding, n.precision = e10 + Math.max(t.e, t.sd()) + E, n.rounding = 1, t = up(n, Vs(n, t)), n.precision = e10, n.rounding = r, y(Ne == 2 || Ne == 3 ? t.neg() : t, e10, r, true)) : new n(1) : new n(NaN);
};
m.cubeRoot = m.cbrt = function() {
  var e10, r, t, n, i, o, s, a, l, u, c = this, p = c.constructor;
  if (!c.isFinite() || c.isZero()) return new p(c);
  for (w = false, o = c.s * B(c.s * c, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (t = W(c.d), e10 = c.e, (o = (e10 - t.length + 1) % 3) && (t += o == 1 || o == -2 ? "0" : "00"), o = B(t, 1 / 3), e10 = Y((e10 + 1) / 3) - (e10 % 3 == (e10 < 0 ? -1 : 2)), o == 1 / 0 ? t = "5e" + e10 : (t = o.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e10), n = new p(t), n.s = c.s) : n = new p(o.toString()), s = (e10 = p.precision) + 3; ; ) if (a = n, l = a.times(a).times(a), u = l.plus(c), n = _(u.plus(c).times(a), u.plus(l), s + 2, 1), W(a.d).slice(0, s) === (t = W(n.d)).slice(0, s)) if (t = t.slice(s - 3, s + 1), t == "9999" || !i && t == "4999") {
    if (!i && (y(a, e10 + 1, 0), a.times(a).times(a).eq(c))) {
      n = a;
      break;
    }
    s += 4, i = 1;
  } else {
    (!+t || !+t.slice(1) && t.charAt(0) == "5") && (y(n, e10 + 1, 1), r = !n.times(n).times(n).eq(c));
    break;
  }
  return w = true, y(n, e10, p.rounding, r);
};
m.decimalPlaces = m.dp = function() {
  var e10, r = this.d, t = NaN;
  if (r) {
    if (e10 = r.length - 1, t = (e10 - Y(this.e / E)) * E, e10 = r[e10], e10) for (; e10 % 10 == 0; e10 /= 10) t--;
    t < 0 && (t = 0);
  }
  return t;
};
m.dividedBy = m.div = function(e10) {
  return _(this, new this.constructor(e10));
};
m.dividedToIntegerBy = m.divToInt = function(e10) {
  var r = this, t = r.constructor;
  return y(_(r, new t(e10), 0, 1, 1), t.precision, t.rounding);
};
m.equals = m.eq = function(e10) {
  return this.cmp(e10) === 0;
};
m.floor = function() {
  return y(new this.constructor(this), this.e + 1, 3);
};
m.greaterThan = m.gt = function(e10) {
  return this.cmp(e10) > 0;
};
m.greaterThanOrEqualTo = m.gte = function(e10) {
  var r = this.cmp(e10);
  return r == 1 || r === 0;
};
m.hyperbolicCosine = m.cosh = function() {
  var e10, r, t, n, i, o = this, s = o.constructor, a = new s(1);
  if (!o.isFinite()) return new s(o.s ? 1 / 0 : NaN);
  if (o.isZero()) return a;
  t = s.precision, n = s.rounding, s.precision = t + Math.max(o.e, o.sd()) + 4, s.rounding = 1, i = o.d.length, i < 32 ? (e10 = Math.ceil(i / 3), r = (1 / hn(4, e10)).toString()) : (e10 = 16, r = "2.3283064365386962890625e-10"), o = Tr(s, 1, o.times(r), new s(1), true);
  for (var l, u = e10, c = new s(8); u--; ) l = o.times(o), o = a.minus(l.times(c.minus(l.times(c))));
  return y(o, s.precision = t, s.rounding = n, true);
};
m.hyperbolicSine = m.sinh = function() {
  var e10, r, t, n, i = this, o = i.constructor;
  if (!i.isFinite() || i.isZero()) return new o(i);
  if (r = o.precision, t = o.rounding, o.precision = r + Math.max(i.e, i.sd()) + 4, o.rounding = 1, n = i.d.length, n < 3) i = Tr(o, 2, i, i, true);
  else {
    e10 = 1.4 * Math.sqrt(n), e10 = e10 > 16 ? 16 : e10 | 0, i = i.times(1 / hn(5, e10)), i = Tr(o, 2, i, i, true);
    for (var s, a = new o(5), l = new o(16), u = new o(20); e10--; ) s = i.times(i), i = i.times(a.plus(s.times(l.times(s).plus(u))));
  }
  return o.precision = r, o.rounding = t, y(i, r, t, true);
};
m.hyperbolicTangent = m.tanh = function() {
  var e10, r, t = this, n = t.constructor;
  return t.isFinite() ? t.isZero() ? new n(t) : (e10 = n.precision, r = n.rounding, n.precision = e10 + 7, n.rounding = 1, _(t.sinh(), t.cosh(), n.precision = e10, n.rounding = r)) : new n(t.s);
};
m.inverseCosine = m.acos = function() {
  var e10 = this, r = e10.constructor, t = e10.abs().cmp(1), n = r.precision, i = r.rounding;
  return t !== -1 ? t === 0 ? e10.isNeg() ? xe(r, n, i) : new r(0) : new r(NaN) : e10.isZero() ? xe(r, n + 4, i).times(0.5) : (r.precision = n + 6, r.rounding = 1, e10 = new r(1).minus(e10).div(e10.plus(1)).sqrt().atan(), r.precision = n, r.rounding = i, e10.times(2));
};
m.inverseHyperbolicCosine = m.acosh = function() {
  var e10, r, t = this, n = t.constructor;
  return t.lte(1) ? new n(t.eq(1) ? 0 : NaN) : t.isFinite() ? (e10 = n.precision, r = n.rounding, n.precision = e10 + Math.max(Math.abs(t.e), t.sd()) + 4, n.rounding = 1, w = false, t = t.times(t).minus(1).sqrt().plus(t), w = true, n.precision = e10, n.rounding = r, t.ln()) : new n(t);
};
m.inverseHyperbolicSine = m.asinh = function() {
  var e10, r, t = this, n = t.constructor;
  return !t.isFinite() || t.isZero() ? new n(t) : (e10 = n.precision, r = n.rounding, n.precision = e10 + 2 * Math.max(Math.abs(t.e), t.sd()) + 6, n.rounding = 1, w = false, t = t.times(t).plus(1).sqrt().plus(t), w = true, n.precision = e10, n.rounding = r, t.ln());
};
m.inverseHyperbolicTangent = m.atanh = function() {
  var e10, r, t, n, i = this, o = i.constructor;
  return i.isFinite() ? i.e >= 0 ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e10 = o.precision, r = o.rounding, n = i.sd(), Math.max(n, e10) < 2 * -i.e - 1 ? y(new o(i), e10, r, true) : (o.precision = t = n - i.e, i = _(i.plus(1), new o(1).minus(i), t + e10, 1), o.precision = e10 + 4, o.rounding = 1, i = i.ln(), o.precision = e10, o.rounding = r, i.times(0.5))) : new o(NaN);
};
m.inverseSine = m.asin = function() {
  var e10, r, t, n, i = this, o = i.constructor;
  return i.isZero() ? new o(i) : (r = i.abs().cmp(1), t = o.precision, n = o.rounding, r !== -1 ? r === 0 ? (e10 = xe(o, t + 4, n).times(0.5), e10.s = i.s, e10) : new o(NaN) : (o.precision = t + 6, o.rounding = 1, i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan(), o.precision = t, o.rounding = n, i.times(2)));
};
m.inverseTangent = m.atan = function() {
  var e10, r, t, n, i, o, s, a, l, u = this, c = u.constructor, p = c.precision, d = c.rounding;
  if (u.isFinite()) {
    if (u.isZero()) return new c(u);
    if (u.abs().eq(1) && p + 4 <= Fi) return s = xe(c, p + 4, d).times(0.25), s.s = u.s, s;
  } else {
    if (!u.s) return new c(NaN);
    if (p + 4 <= Fi) return s = xe(c, p + 4, d).times(0.5), s.s = u.s, s;
  }
  for (c.precision = a = p + 10, c.rounding = 1, t = Math.min(28, a / E + 2 | 0), e10 = t; e10; --e10) u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (w = false, r = Math.ceil(a / E), n = 1, l = u.times(u), s = new c(u), i = u; e10 !== -1; ) if (i = i.times(l), o = s.minus(i.div(n += 2)), i = i.times(l), s = o.plus(i.div(n += 2)), s.d[r] !== void 0) for (e10 = r; s.d[e10] === o.d[e10] && e10--; ) ;
  return t && (s = s.times(2 << t - 1)), w = true, y(s, c.precision = p, c.rounding = d, true);
};
m.isFinite = function() {
  return !!this.d;
};
m.isInteger = m.isInt = function() {
  return !!this.d && Y(this.e / E) > this.d.length - 2;
};
m.isNaN = function() {
  return !this.s;
};
m.isNegative = m.isNeg = function() {
  return this.s < 0;
};
m.isPositive = m.isPos = function() {
  return this.s > 0;
};
m.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
m.lessThan = m.lt = function(e10) {
  return this.cmp(e10) < 0;
};
m.lessThanOrEqualTo = m.lte = function(e10) {
  return this.cmp(e10) < 1;
};
m.logarithm = m.log = function(e10) {
  var r, t, n, i, o, s, a, l, u = this, c = u.constructor, p = c.precision, d = c.rounding, f = 5;
  if (e10 == null) e10 = new c(10), r = true;
  else {
    if (e10 = new c(e10), t = e10.d, e10.s < 0 || !t || !t[0] || e10.eq(1)) return new c(NaN);
    r = e10.eq(10);
  }
  if (t = u.d, u.s < 0 || !t || !t[0] || u.eq(1)) return new c(t && !t[0] ? -1 / 0 : u.s != 1 ? NaN : t ? 0 : 1 / 0);
  if (r) if (t.length > 1) o = true;
  else {
    for (i = t[0]; i % 10 === 0; ) i /= 10;
    o = i !== 1;
  }
  if (w = false, a = p + f, s = Je(u, a), n = r ? mn(c, a + 10) : Je(e10, a), l = _(s, n, a, 1), st(l.d, i = p, d)) do
    if (a += 10, s = Je(u, a), n = r ? mn(c, a + 10) : Je(e10, a), l = _(s, n, a, 1), !o) {
      +W(l.d).slice(i + 1, i + 15) + 1 == 1e14 && (l = y(l, p + 1, 0));
      break;
    }
  while (st(l.d, i += 10, d));
  return w = true, y(l, p, d);
};
m.minus = m.sub = function(e10) {
  var r, t, n, i, o, s, a, l, u, c, p, d, f = this, h = f.constructor;
  if (e10 = new h(e10), !f.d || !e10.d) return !f.s || !e10.s ? e10 = new h(NaN) : f.d ? e10.s = -e10.s : e10 = new h(e10.d || f.s !== e10.s ? f : NaN), e10;
  if (f.s != e10.s) return e10.s = -e10.s, f.plus(e10);
  if (u = f.d, d = e10.d, a = h.precision, l = h.rounding, !u[0] || !d[0]) {
    if (d[0]) e10.s = -e10.s;
    else if (u[0]) e10 = new h(f);
    else return new h(l === 3 ? -0 : 0);
    return w ? y(e10, a, l) : e10;
  }
  if (t = Y(e10.e / E), c = Y(f.e / E), u = u.slice(), o = c - t, o) {
    for (p = o < 0, p ? (r = u, o = -o, s = d.length) : (r = d, t = c, s = u.length), n = Math.max(Math.ceil(a / E), s) + 2, o > n && (o = n, r.length = 1), r.reverse(), n = o; n--; ) r.push(0);
    r.reverse();
  } else {
    for (n = u.length, s = d.length, p = n < s, p && (s = n), n = 0; n < s; n++) if (u[n] != d[n]) {
      p = u[n] < d[n];
      break;
    }
    o = 0;
  }
  for (p && (r = u, u = d, d = r, e10.s = -e10.s), s = u.length, n = d.length - s; n > 0; --n) u[s++] = 0;
  for (n = d.length; n > o; ) {
    if (u[--n] < d[n]) {
      for (i = n; i && u[--i] === 0; ) u[i] = fe - 1;
      --u[i], u[n] += fe;
    }
    u[n] -= d[n];
  }
  for (; u[--s] === 0; ) u.pop();
  for (; u[0] === 0; u.shift()) --t;
  return u[0] ? (e10.d = u, e10.e = gn(u, t), w ? y(e10, a, l) : e10) : new h(l === 3 ? -0 : 0);
};
m.modulo = m.mod = function(e10) {
  var r, t = this, n = t.constructor;
  return e10 = new n(e10), !t.d || !e10.s || e10.d && !e10.d[0] ? new n(NaN) : !e10.d || t.d && !t.d[0] ? y(new n(t), n.precision, n.rounding) : (w = false, n.modulo == 9 ? (r = _(t, e10.abs(), 0, 3, 1), r.s *= e10.s) : r = _(t, e10, 0, n.modulo, 1), r = r.times(e10), w = true, t.minus(r));
};
m.naturalExponential = m.exp = function() {
  return Mi(this);
};
m.naturalLogarithm = m.ln = function() {
  return Je(this);
};
m.negated = m.neg = function() {
  var e10 = new this.constructor(this);
  return e10.s = -e10.s, y(e10);
};
m.plus = m.add = function(e10) {
  var r, t, n, i, o, s, a, l, u, c, p = this, d = p.constructor;
  if (e10 = new d(e10), !p.d || !e10.d) return !p.s || !e10.s ? e10 = new d(NaN) : p.d || (e10 = new d(e10.d || p.s === e10.s ? p : NaN)), e10;
  if (p.s != e10.s) return e10.s = -e10.s, p.minus(e10);
  if (u = p.d, c = e10.d, a = d.precision, l = d.rounding, !u[0] || !c[0]) return c[0] || (e10 = new d(p)), w ? y(e10, a, l) : e10;
  if (o = Y(p.e / E), n = Y(e10.e / E), u = u.slice(), i = o - n, i) {
    for (i < 0 ? (t = u, i = -i, s = c.length) : (t = c, n = o, s = u.length), o = Math.ceil(a / E), s = o > s ? o + 1 : s + 1, i > s && (i = s, t.length = 1), t.reverse(); i--; ) t.push(0);
    t.reverse();
  }
  for (s = u.length, i = c.length, s - i < 0 && (i = s, t = c, c = u, u = t), r = 0; i; ) r = (u[--i] = u[i] + c[i] + r) / fe | 0, u[i] %= fe;
  for (r && (u.unshift(r), ++n), s = u.length; u[--s] == 0; ) u.pop();
  return e10.d = u, e10.e = gn(u, n), w ? y(e10, a, l) : e10;
};
m.precision = m.sd = function(e10) {
  var r, t = this;
  if (e10 !== void 0 && e10 !== !!e10 && e10 !== 1 && e10 !== 0) throw Error(Ke + e10);
  return t.d ? (r = Fs(t.d), e10 && t.e + 1 > r && (r = t.e + 1)) : r = NaN, r;
};
m.round = function() {
  var e10 = this, r = e10.constructor;
  return y(new r(e10), e10.e + 1, r.rounding);
};
m.sine = m.sin = function() {
  var e10, r, t = this, n = t.constructor;
  return t.isFinite() ? t.isZero() ? new n(t) : (e10 = n.precision, r = n.rounding, n.precision = e10 + Math.max(t.e, t.sd()) + E, n.rounding = 1, t = pp(n, Vs(n, t)), n.precision = e10, n.rounding = r, y(Ne > 2 ? t.neg() : t, e10, r, true)) : new n(NaN);
};
m.squareRoot = m.sqrt = function() {
  var e10, r, t, n, i, o, s = this, a = s.d, l = s.e, u = s.s, c = s.constructor;
  if (u !== 1 || !a || !a[0]) return new c(!u || u < 0 && (!a || a[0]) ? NaN : a ? s : 1 / 0);
  for (w = false, u = Math.sqrt(+s), u == 0 || u == 1 / 0 ? (r = W(a), (r.length + l) % 2 == 0 && (r += "0"), u = Math.sqrt(r), l = Y((l + 1) / 2) - (l < 0 || l % 2), u == 1 / 0 ? r = "5e" + l : (r = u.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + l), n = new c(r)) : n = new c(u.toString()), t = (l = c.precision) + 3; ; ) if (o = n, n = o.plus(_(s, o, t + 2, 1)).times(0.5), W(o.d).slice(0, t) === (r = W(n.d)).slice(0, t)) if (r = r.slice(t - 3, t + 1), r == "9999" || !i && r == "4999") {
    if (!i && (y(o, l + 1, 0), o.times(o).eq(s))) {
      n = o;
      break;
    }
    t += 4, i = 1;
  } else {
    (!+r || !+r.slice(1) && r.charAt(0) == "5") && (y(n, l + 1, 1), e10 = !n.times(n).eq(s));
    break;
  }
  return w = true, y(n, l, c.rounding, e10);
};
m.tangent = m.tan = function() {
  var e10, r, t = this, n = t.constructor;
  return t.isFinite() ? t.isZero() ? new n(t) : (e10 = n.precision, r = n.rounding, n.precision = e10 + 10, n.rounding = 1, t = t.sin(), t.s = 1, t = _(t, new n(1).minus(t.times(t)).sqrt(), e10 + 10, 0), n.precision = e10, n.rounding = r, y(Ne == 2 || Ne == 4 ? t.neg() : t, e10, r, true)) : new n(NaN);
};
m.times = m.mul = function(e10) {
  var r, t, n, i, o, s, a, l, u, c = this, p = c.constructor, d = c.d, f = (e10 = new p(e10)).d;
  if (e10.s *= c.s, !d || !d[0] || !f || !f[0]) return new p(!e10.s || d && !d[0] && !f || f && !f[0] && !d ? NaN : !d || !f ? e10.s / 0 : e10.s * 0);
  for (t = Y(c.e / E) + Y(e10.e / E), l = d.length, u = f.length, l < u && (o = d, d = f, f = o, s = l, l = u, u = s), o = [], s = l + u, n = s; n--; ) o.push(0);
  for (n = u; --n >= 0; ) {
    for (r = 0, i = l + n; i > n; ) a = o[i] + f[n] * d[i - n - 1] + r, o[i--] = a % fe | 0, r = a / fe | 0;
    o[i] = (o[i] + r) % fe | 0;
  }
  for (; !o[--s]; ) o.pop();
  return r ? ++t : o.shift(), e10.d = o, e10.e = gn(o, t), w ? y(e10, p.precision, p.rounding) : e10;
};
m.toBinary = function(e10, r) {
  return $i(this, 2, e10, r);
};
m.toDecimalPlaces = m.toDP = function(e10, r) {
  var t = this, n = t.constructor;
  return t = new n(t), e10 === void 0 ? t : (te(e10, 0, He), r === void 0 ? r = n.rounding : te(r, 0, 8), y(t, e10 + t.e + 1, r));
};
m.toExponential = function(e10, r) {
  var t, n = this, i = n.constructor;
  return e10 === void 0 ? t = ve(n, true) : (te(e10, 0, He), r === void 0 ? r = i.rounding : te(r, 0, 8), n = y(new i(n), e10 + 1, r), t = ve(n, true, e10 + 1)), n.isNeg() && !n.isZero() ? "-" + t : t;
};
m.toFixed = function(e10, r) {
  var t, n, i = this, o = i.constructor;
  return e10 === void 0 ? t = ve(i) : (te(e10, 0, He), r === void 0 ? r = o.rounding : te(r, 0, 8), n = y(new o(i), e10 + i.e + 1, r), t = ve(n, false, e10 + n.e + 1)), i.isNeg() && !i.isZero() ? "-" + t : t;
};
m.toFraction = function(e10) {
  var r, t, n, i, o, s, a, l, u, c, p, d, f = this, h = f.d, g = f.constructor;
  if (!h) return new g(f);
  if (u = t = new g(1), n = l = new g(0), r = new g(n), o = r.e = Fs(h) - f.e - 1, s = o % E, r.d[0] = B(10, s < 0 ? E + s : s), e10 == null) e10 = o > 0 ? r : u;
  else {
    if (a = new g(e10), !a.isInt() || a.lt(u)) throw Error(Ke + a);
    e10 = a.gt(r) ? o > 0 ? r : u : a;
  }
  for (w = false, a = new g(W(h)), c = g.precision, g.precision = o = h.length * E * 2; p = _(a, r, 0, 1, 1), i = t.plus(p.times(n)), i.cmp(e10) != 1; ) t = n, n = i, i = u, u = l.plus(p.times(i)), l = i, i = r, r = a.minus(p.times(i)), a = i;
  return i = _(e10.minus(t), n, 0, 1, 1), l = l.plus(i.times(u)), t = t.plus(i.times(n)), l.s = u.s = f.s, d = _(u, n, o, 1).minus(f).abs().cmp(_(l, t, o, 1).minus(f).abs()) < 1 ? [u, n] : [l, t], g.precision = c, w = true, d;
};
m.toHexadecimal = m.toHex = function(e10, r) {
  return $i(this, 16, e10, r);
};
m.toNearest = function(e10, r) {
  var t = this, n = t.constructor;
  if (t = new n(t), e10 == null) {
    if (!t.d) return t;
    e10 = new n(1), r = n.rounding;
  } else {
    if (e10 = new n(e10), r === void 0 ? r = n.rounding : te(r, 0, 8), !t.d) return e10.s ? t : e10;
    if (!e10.d) return e10.s && (e10.s = t.s), e10;
  }
  return e10.d[0] ? (w = false, t = _(t, e10, 0, r, 1).times(e10), w = true, y(t)) : (e10.s = t.s, t = e10), t;
};
m.toNumber = function() {
  return +this;
};
m.toOctal = function(e10, r) {
  return $i(this, 8, e10, r);
};
m.toPower = m.pow = function(e10) {
  var r, t, n, i, o, s, a = this, l = a.constructor, u = +(e10 = new l(e10));
  if (!a.d || !e10.d || !a.d[0] || !e10.d[0]) return new l(B(+a, u));
  if (a = new l(a), a.eq(1)) return a;
  if (n = l.precision, o = l.rounding, e10.eq(1)) return y(a, n, o);
  if (r = Y(e10.e / E), r >= e10.d.length - 1 && (t = u < 0 ? -u : u) <= ap) return i = Ms(l, a, t, n), e10.s < 0 ? new l(1).div(i) : y(i, n, o);
  if (s = a.s, s < 0) {
    if (r < e10.d.length - 1) return new l(NaN);
    if ((e10.d[r] & 1) == 0 && (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1) return a.s = s, a;
  }
  return t = B(+a, u), r = t == 0 || !isFinite(t) ? Y(u * (Math.log("0." + W(a.d)) / Math.LN10 + a.e + 1)) : new l(t + "").e, r > l.maxE + 1 || r < l.minE - 1 ? new l(r > 0 ? s / 0 : 0) : (w = false, l.rounding = a.s = 1, t = Math.min(12, (r + "").length), i = Mi(e10.times(Je(a, n + t)), n), i.d && (i = y(i, n + 5, 1), st(i.d, n, o) && (r = n + 10, i = y(Mi(e10.times(Je(a, r + t)), r), r + 5, 1), +W(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = y(i, n + 1, 0)))), i.s = s, w = true, l.rounding = o, y(i, n, o));
};
m.toPrecision = function(e10, r) {
  var t, n = this, i = n.constructor;
  return e10 === void 0 ? t = ve(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (te(e10, 1, He), r === void 0 ? r = i.rounding : te(r, 0, 8), n = y(new i(n), e10, r), t = ve(n, e10 <= n.e || n.e <= i.toExpNeg, e10)), n.isNeg() && !n.isZero() ? "-" + t : t;
};
m.toSignificantDigits = m.toSD = function(e10, r) {
  var t = this, n = t.constructor;
  return e10 === void 0 ? (e10 = n.precision, r = n.rounding) : (te(e10, 1, He), r === void 0 ? r = n.rounding : te(r, 0, 8)), y(new n(t), e10, r);
};
m.toString = function() {
  var e10 = this, r = e10.constructor, t = ve(e10, e10.e <= r.toExpNeg || e10.e >= r.toExpPos);
  return e10.isNeg() && !e10.isZero() ? "-" + t : t;
};
m.truncated = m.trunc = function() {
  return y(new this.constructor(this), this.e + 1, 1);
};
m.valueOf = m.toJSON = function() {
  var e10 = this, r = e10.constructor, t = ve(e10, e10.e <= r.toExpNeg || e10.e >= r.toExpPos);
  return e10.isNeg() ? "-" + t : t;
};
function W(e10) {
  var r, t, n, i = e10.length - 1, o = "", s = e10[0];
  if (i > 0) {
    for (o += s, r = 1; r < i; r++) n = e10[r] + "", t = E - n.length, t && (o += We(t)), o += n;
    s = e10[r], n = s + "", t = E - n.length, t && (o += We(t));
  } else if (s === 0) return "0";
  for (; s % 10 === 0; ) s /= 10;
  return o + s;
}
function te(e10, r, t) {
  if (e10 !== ~~e10 || e10 < r || e10 > t) throw Error(Ke + e10);
}
function st(e10, r, t, n) {
  var i, o, s, a;
  for (o = e10[0]; o >= 10; o /= 10) --r;
  return --r < 0 ? (r += E, i = 0) : (i = Math.ceil((r + 1) / E), r %= E), o = B(10, E - r), a = e10[i] % o | 0, n == null ? r < 3 ? (r == 0 ? a = a / 100 | 0 : r == 1 && (a = a / 10 | 0), s = t < 4 && a == 99999 || t > 3 && a == 49999 || a == 5e4 || a == 0) : s = (t < 4 && a + 1 == o || t > 3 && a + 1 == o / 2) && (e10[i + 1] / o / 100 | 0) == B(10, r - 2) - 1 || (a == o / 2 || a == 0) && (e10[i + 1] / o / 100 | 0) == 0 : r < 4 ? (r == 0 ? a = a / 1e3 | 0 : r == 1 ? a = a / 100 | 0 : r == 2 && (a = a / 10 | 0), s = (n || t < 4) && a == 9999 || !n && t > 3 && a == 4999) : s = ((n || t < 4) && a + 1 == o || !n && t > 3 && a + 1 == o / 2) && (e10[i + 1] / o / 1e3 | 0) == B(10, r - 3) - 1, s;
}
function un(e10, r, t) {
  for (var n, i = [0], o, s = 0, a = e10.length; s < a; ) {
    for (o = i.length; o--; ) i[o] *= r;
    for (i[0] += Ni.indexOf(e10.charAt(s++)), n = 0; n < i.length; n++) i[n] > t - 1 && (i[n + 1] === void 0 && (i[n + 1] = 0), i[n + 1] += i[n] / t | 0, i[n] %= t);
  }
  return i.reverse();
}
function up(e10, r) {
  var t, n, i;
  if (r.isZero()) return r;
  n = r.d.length, n < 32 ? (t = Math.ceil(n / 3), i = (1 / hn(4, t)).toString()) : (t = 16, i = "2.3283064365386962890625e-10"), e10.precision += t, r = Tr(e10, 1, r.times(i), new e10(1));
  for (var o = t; o--; ) {
    var s = r.times(r);
    r = s.times(s).minus(s).times(8).plus(1);
  }
  return e10.precision -= t, r;
}
var _ = /* @__PURE__ */ function() {
  function e10(n, i, o) {
    var s, a = 0, l = n.length;
    for (n = n.slice(); l--; ) s = n[l] * i + a, n[l] = s % o | 0, a = s / o | 0;
    return a && n.unshift(a), n;
  }
  function r(n, i, o, s) {
    var a, l;
    if (o != s) l = o > s ? 1 : -1;
    else for (a = l = 0; a < o; a++) if (n[a] != i[a]) {
      l = n[a] > i[a] ? 1 : -1;
      break;
    }
    return l;
  }
  function t(n, i, o, s) {
    for (var a = 0; o--; ) n[o] -= a, a = n[o] < i[o] ? 1 : 0, n[o] = a * s + n[o] - i[o];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, i, o, s, a, l) {
    var u, c, p, d, f, h, g, I, T, S, b, D, me, ie, Wr, V, re, Ae, J, mr, Mt = n.constructor, Jn = n.s == i.s ? 1 : -1, K = n.d, O = i.d;
    if (!K || !K[0] || !O || !O[0]) return new Mt(!n.s || !i.s || (K ? O && K[0] == O[0] : !O) ? NaN : K && K[0] == 0 || !O ? Jn * 0 : Jn / 0);
    for (l ? (f = 1, c = n.e - i.e) : (l = fe, f = E, c = Y(n.e / f) - Y(i.e / f)), J = O.length, re = K.length, T = new Mt(Jn), S = T.d = [], p = 0; O[p] == (K[p] || 0); p++) ;
    if (O[p] > (K[p] || 0) && c--, o == null ? (ie = o = Mt.precision, s = Mt.rounding) : a ? ie = o + (n.e - i.e) + 1 : ie = o, ie < 0) S.push(1), h = true;
    else {
      if (ie = ie / f + 2 | 0, p = 0, J == 1) {
        for (d = 0, O = O[0], ie++; (p < re || d) && ie--; p++) Wr = d * l + (K[p] || 0), S[p] = Wr / O | 0, d = Wr % O | 0;
        h = d || p < re;
      } else {
        for (d = l / (O[0] + 1) | 0, d > 1 && (O = e10(O, d, l), K = e10(K, d, l), J = O.length, re = K.length), V = J, b = K.slice(0, J), D = b.length; D < J; ) b[D++] = 0;
        mr = O.slice(), mr.unshift(0), Ae = O[0], O[1] >= l / 2 && ++Ae;
        do
          d = 0, u = r(O, b, J, D), u < 0 ? (me = b[0], J != D && (me = me * l + (b[1] || 0)), d = me / Ae | 0, d > 1 ? (d >= l && (d = l - 1), g = e10(O, d, l), I = g.length, D = b.length, u = r(g, b, I, D), u == 1 && (d--, t(g, J < I ? mr : O, I, l))) : (d == 0 && (u = d = 1), g = O.slice()), I = g.length, I < D && g.unshift(0), t(b, g, D, l), u == -1 && (D = b.length, u = r(O, b, J, D), u < 1 && (d++, t(b, J < D ? mr : O, D, l))), D = b.length) : u === 0 && (d++, b = [0]), S[p++] = d, u && b[0] ? b[D++] = K[V] || 0 : (b = [K[V]], D = 1);
        while ((V++ < re || b[0] !== void 0) && ie--);
        h = b[0] !== void 0;
      }
      S[0] || S.shift();
    }
    if (f == 1) T.e = c, Os = h;
    else {
      for (p = 1, d = S[0]; d >= 10; d /= 10) p++;
      T.e = p + c * f - 1, y(T, a ? o + T.e + 1 : o, s, h);
    }
    return T;
  };
}();
function y(e10, r, t, n) {
  var i, o, s, a, l, u, c, p, d, f = e10.constructor;
  e: if (r != null) {
    if (p = e10.d, !p) return e10;
    for (i = 1, a = p[0]; a >= 10; a /= 10) i++;
    if (o = r - i, o < 0) o += E, s = r, c = p[d = 0], l = c / B(10, i - s - 1) % 10 | 0;
    else if (d = Math.ceil((o + 1) / E), a = p.length, d >= a) if (n) {
      for (; a++ <= d; ) p.push(0);
      c = l = 0, i = 1, o %= E, s = o - E + 1;
    } else break e;
    else {
      for (c = a = p[d], i = 1; a >= 10; a /= 10) i++;
      o %= E, s = o - E + i, l = s < 0 ? 0 : c / B(10, i - s - 1) % 10 | 0;
    }
    if (n = n || r < 0 || p[d + 1] !== void 0 || (s < 0 ? c : c % B(10, i - s - 1)), u = t < 4 ? (l || n) && (t == 0 || t == (e10.s < 0 ? 3 : 2)) : l > 5 || l == 5 && (t == 4 || n || t == 6 && (o > 0 ? s > 0 ? c / B(10, i - s) : 0 : p[d - 1]) % 10 & 1 || t == (e10.s < 0 ? 8 : 7)), r < 1 || !p[0]) return p.length = 0, u ? (r -= e10.e + 1, p[0] = B(10, (E - r % E) % E), e10.e = -r || 0) : p[0] = e10.e = 0, e10;
    if (o == 0 ? (p.length = d, a = 1, d--) : (p.length = d + 1, a = B(10, E - o), p[d] = s > 0 ? (c / B(10, i - s) % B(10, s) | 0) * a : 0), u) for (; ; ) if (d == 0) {
      for (o = 1, s = p[0]; s >= 10; s /= 10) o++;
      for (s = p[0] += a, a = 1; s >= 10; s /= 10) a++;
      o != a && (e10.e++, p[0] == fe && (p[0] = 1));
      break;
    } else {
      if (p[d] += a, p[d] != fe) break;
      p[d--] = 0, a = 1;
    }
    for (o = p.length; p[--o] === 0; ) p.pop();
  }
  return w && (e10.e > f.maxE ? (e10.d = null, e10.e = NaN) : e10.e < f.minE && (e10.e = 0, e10.d = [0])), e10;
}
function ve(e10, r, t) {
  if (!e10.isFinite()) return qs(e10);
  var n, i = e10.e, o = W(e10.d), s = o.length;
  return r ? (t && (n = t - s) > 0 ? o = o.charAt(0) + "." + o.slice(1) + We(n) : s > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e10.e < 0 ? "e" : "e+") + e10.e) : i < 0 ? (o = "0." + We(-i - 1) + o, t && (n = t - s) > 0 && (o += We(n))) : i >= s ? (o += We(i + 1 - s), t && (n = t - i - 1) > 0 && (o = o + "." + We(n))) : ((n = i + 1) < s && (o = o.slice(0, n) + "." + o.slice(n)), t && (n = t - s) > 0 && (i + 1 === s && (o += "."), o += We(n))), o;
}
function gn(e10, r) {
  var t = e10[0];
  for (r *= E; t >= 10; t /= 10) r++;
  return r;
}
function mn(e10, r, t) {
  if (r > lp) throw w = true, t && (e10.precision = t), Error(ks);
  return y(new e10(pn), r, 1, true);
}
function xe(e10, r, t) {
  if (r > Fi) throw Error(ks);
  return y(new e10(dn), r, t, true);
}
function Fs(e10) {
  var r = e10.length - 1, t = r * E + 1;
  if (r = e10[r], r) {
    for (; r % 10 == 0; r /= 10) t--;
    for (r = e10[0]; r >= 10; r /= 10) t++;
  }
  return t;
}
function We(e10) {
  for (var r = ""; e10--; ) r += "0";
  return r;
}
function Ms(e10, r, t, n) {
  var i, o = new e10(1), s = Math.ceil(n / E + 4);
  for (w = false; ; ) {
    if (t % 2 && (o = o.times(r), Is(o.d, s) && (i = true)), t = Y(t / 2), t === 0) {
      t = o.d.length - 1, i && o.d[t] === 0 && ++o.d[t];
      break;
    }
    r = r.times(r), Is(r.d, s);
  }
  return w = true, o;
}
function Cs(e10) {
  return e10.d[e10.d.length - 1] & 1;
}
function $s(e10, r, t) {
  for (var n, i, o = new e10(r[0]), s = 0; ++s < r.length; ) {
    if (i = new e10(r[s]), !i.s) {
      o = i;
      break;
    }
    n = o.cmp(i), (n === t || n === 0 && o.s === t) && (o = i);
  }
  return o;
}
function Mi(e10, r) {
  var t, n, i, o, s, a, l, u = 0, c = 0, p = 0, d = e10.constructor, f = d.rounding, h = d.precision;
  if (!e10.d || !e10.d[0] || e10.e > 17) return new d(e10.d ? e10.d[0] ? e10.s < 0 ? 0 : 1 / 0 : 1 : e10.s ? e10.s < 0 ? 0 : e10 : NaN);
  for (r == null ? (w = false, l = h) : l = r, a = new d(0.03125); e10.e > -2; ) e10 = e10.times(a), p += 5;
  for (n = Math.log(B(2, p)) / Math.LN10 * 2 + 5 | 0, l += n, t = o = s = new d(1), d.precision = l; ; ) {
    if (o = y(o.times(e10), l, 1), t = t.times(++c), a = s.plus(_(o, t, l, 1)), W(a.d).slice(0, l) === W(s.d).slice(0, l)) {
      for (i = p; i--; ) s = y(s.times(s), l, 1);
      if (r == null) if (u < 3 && st(s.d, l - n, f, u)) d.precision = l += 10, t = o = a = new d(1), c = 0, u++;
      else return y(s, d.precision = h, f, w = true);
      else return d.precision = h, s;
    }
    s = a;
  }
}
function Je(e10, r) {
  var t, n, i, o, s, a, l, u, c, p, d, f = 1, h = 10, g = e10, I = g.d, T = g.constructor, S = T.rounding, b = T.precision;
  if (g.s < 0 || !I || !I[0] || !g.e && I[0] == 1 && I.length == 1) return new T(I && !I[0] ? -1 / 0 : g.s != 1 ? NaN : I ? 0 : g);
  if (r == null ? (w = false, c = b) : c = r, T.precision = c += h, t = W(I), n = t.charAt(0), Math.abs(o = g.e) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && t.charAt(1) > 3; ) g = g.times(e10), t = W(g.d), n = t.charAt(0), f++;
    o = g.e, n > 1 ? (g = new T("0." + t), o++) : g = new T(n + "." + t.slice(1));
  } else return u = mn(T, c + 2, b).times(o + ""), g = Je(new T(n + "." + t.slice(1)), c - h).plus(u), T.precision = b, r == null ? y(g, b, S, w = true) : g;
  for (p = g, l = s = g = _(g.minus(1), g.plus(1), c, 1), d = y(g.times(g), c, 1), i = 3; ; ) {
    if (s = y(s.times(d), c, 1), u = l.plus(_(s, new T(i), c, 1)), W(u.d).slice(0, c) === W(l.d).slice(0, c)) if (l = l.times(2), o !== 0 && (l = l.plus(mn(T, c + 2, b).times(o + ""))), l = _(l, new T(f), c, 1), r == null) if (st(l.d, c - h, S, a)) T.precision = c += h, u = s = g = _(p.minus(1), p.plus(1), c, 1), d = y(g.times(g), c, 1), i = a = 1;
    else return y(l, T.precision = b, S, w = true);
    else return T.precision = b, l;
    l = u, i += 2;
  }
}
function qs(e10) {
  return String(e10.s * e10.s / 0);
}
function cn(e10, r) {
  var t, n, i;
  for ((t = r.indexOf(".")) > -1 && (r = r.replace(".", "")), (n = r.search(/e/i)) > 0 ? (t < 0 && (t = n), t += +r.slice(n + 1), r = r.substring(0, n)) : t < 0 && (t = r.length), n = 0; r.charCodeAt(n) === 48; n++) ;
  for (i = r.length; r.charCodeAt(i - 1) === 48; --i) ;
  if (r = r.slice(n, i), r) {
    if (i -= n, e10.e = t = t - n - 1, e10.d = [], n = (t + 1) % E, t < 0 && (n += E), n < i) {
      for (n && e10.d.push(+r.slice(0, n)), i -= E; n < i; ) e10.d.push(+r.slice(n, n += E));
      r = r.slice(n), n = E - r.length;
    } else n -= i;
    for (; n--; ) r += "0";
    e10.d.push(+r), w && (e10.e > e10.constructor.maxE ? (e10.d = null, e10.e = NaN) : e10.e < e10.constructor.minE && (e10.e = 0, e10.d = [0]));
  } else e10.e = 0, e10.d = [0];
  return e10;
}
function cp(e10, r) {
  var t, n, i, o, s, a, l, u, c;
  if (r.indexOf("_") > -1) {
    if (r = r.replace(/(\d)_(?=\d)/g, "$1"), Ls.test(r)) return cn(e10, r);
  } else if (r === "Infinity" || r === "NaN") return +r || (e10.s = NaN), e10.e = NaN, e10.d = null, e10;
  if (op.test(r)) t = 16, r = r.toLowerCase();
  else if (ip.test(r)) t = 2;
  else if (sp.test(r)) t = 8;
  else throw Error(Ke + r);
  for (o = r.search(/p/i), o > 0 ? (l = +r.slice(o + 1), r = r.substring(2, o)) : r = r.slice(2), o = r.indexOf("."), s = o >= 0, n = e10.constructor, s && (r = r.replace(".", ""), a = r.length, o = a - o, i = Ms(n, new n(t), o, o * 2)), u = un(r, t, fe), c = u.length - 1, o = c; u[o] === 0; --o) u.pop();
  return o < 0 ? new n(e10.s * 0) : (e10.e = gn(u, c), e10.d = u, w = false, s && (e10 = _(e10, i, a * 4)), l && (e10 = e10.times(Math.abs(l) < 54 ? B(2, l) : Le.pow(2, l))), w = true, e10);
}
function pp(e10, r) {
  var t, n = r.d.length;
  if (n < 3) return r.isZero() ? r : Tr(e10, 2, r, r);
  t = 1.4 * Math.sqrt(n), t = t > 16 ? 16 : t | 0, r = r.times(1 / hn(5, t)), r = Tr(e10, 2, r, r);
  for (var i, o = new e10(5), s = new e10(16), a = new e10(20); t--; ) i = r.times(r), r = r.times(o.plus(i.times(s.times(i).minus(a))));
  return r;
}
function Tr(e10, r, t, n, i) {
  var o, s, a, l, c = e10.precision, p = Math.ceil(c / E);
  for (w = false, l = t.times(t), a = new e10(n); ; ) {
    if (s = _(a.times(l), new e10(r++ * r++), c, 1), a = i ? n.plus(s) : n.minus(s), n = _(s.times(l), new e10(r++ * r++), c, 1), s = a.plus(n), s.d[p] !== void 0) {
      for (o = p; s.d[o] === a.d[o] && o--; ) ;
      if (o == -1) break;
    }
    o = a, a = n, n = s, s = o;
  }
  return w = true, s.d.length = p + 1, s;
}
function hn(e10, r) {
  for (var t = e10; --r; ) t *= e10;
  return t;
}
function Vs(e10, r) {
  var t, n = r.s < 0, i = xe(e10, e10.precision, 1), o = i.times(0.5);
  if (r = r.abs(), r.lte(o)) return Ne = n ? 4 : 1, r;
  if (t = r.divToInt(i), t.isZero()) Ne = n ? 3 : 2;
  else {
    if (r = r.minus(t.times(i)), r.lte(o)) return Ne = Cs(t) ? n ? 2 : 3 : n ? 4 : 1, r;
    Ne = Cs(t) ? n ? 1 : 4 : n ? 3 : 2;
  }
  return r.minus(i).abs();
}
function $i(e10, r, t, n) {
  var i, o, s, a, l, u, c, p, d, f = e10.constructor, h = t !== void 0;
  if (h ? (te(t, 1, He), n === void 0 ? n = f.rounding : te(n, 0, 8)) : (t = f.precision, n = f.rounding), !e10.isFinite()) c = qs(e10);
  else {
    for (c = ve(e10), s = c.indexOf("."), h ? (i = 2, r == 16 ? t = t * 4 - 3 : r == 8 && (t = t * 3 - 2)) : i = r, s >= 0 && (c = c.replace(".", ""), d = new f(1), d.e = c.length - s, d.d = un(ve(d), 10, i), d.e = d.d.length), p = un(c, 10, i), o = l = p.length; p[--l] == 0; ) p.pop();
    if (!p[0]) c = h ? "0p+0" : "0";
    else {
      if (s < 0 ? o-- : (e10 = new f(e10), e10.d = p, e10.e = o, e10 = _(e10, d, t, n, 0, i), p = e10.d, o = e10.e, u = Os), s = p[t], a = i / 2, u = u || p[t + 1] !== void 0, u = n < 4 ? (s !== void 0 || u) && (n === 0 || n === (e10.s < 0 ? 3 : 2)) : s > a || s === a && (n === 4 || u || n === 6 && p[t - 1] & 1 || n === (e10.s < 0 ? 8 : 7)), p.length = t, u) for (; ++p[--t] > i - 1; ) p[t] = 0, t || (++o, p.unshift(1));
      for (l = p.length; !p[l - 1]; --l) ;
      for (s = 0, c = ""; s < l; s++) c += Ni.charAt(p[s]);
      if (h) {
        if (l > 1) if (r == 16 || r == 8) {
          for (s = r == 16 ? 4 : 3, --l; l % s; l++) c += "0";
          for (p = un(c, i, r), l = p.length; !p[l - 1]; --l) ;
          for (s = 1, c = "1."; s < l; s++) c += Ni.charAt(p[s]);
        } else c = c.charAt(0) + "." + c.slice(1);
        c = c + (o < 0 ? "p" : "p+") + o;
      } else if (o < 0) {
        for (; ++o; ) c = "0" + c;
        c = "0." + c;
      } else if (++o > l) for (o -= l; o--; ) c += "0";
      else o < l && (c = c.slice(0, o) + "." + c.slice(o));
    }
    c = (r == 16 ? "0x" : r == 2 ? "0b" : r == 8 ? "0o" : "") + c;
  }
  return e10.s < 0 ? "-" + c : c;
}
function Is(e10, r) {
  if (e10.length > r) return e10.length = r, true;
}
function dp(e10) {
  return new this(e10).abs();
}
function mp(e10) {
  return new this(e10).acos();
}
function fp(e10) {
  return new this(e10).acosh();
}
function gp(e10, r) {
  return new this(e10).plus(r);
}
function hp(e10) {
  return new this(e10).asin();
}
function yp(e10) {
  return new this(e10).asinh();
}
function bp(e10) {
  return new this(e10).atan();
}
function Ep(e10) {
  return new this(e10).atanh();
}
function wp(e10, r) {
  e10 = new this(e10), r = new this(r);
  var t, n = this.precision, i = this.rounding, o = n + 4;
  return !e10.s || !r.s ? t = new this(NaN) : !e10.d && !r.d ? (t = xe(this, o, 1).times(r.s > 0 ? 0.25 : 0.75), t.s = e10.s) : !r.d || e10.isZero() ? (t = r.s < 0 ? xe(this, n, i) : new this(0), t.s = e10.s) : !e10.d || r.isZero() ? (t = xe(this, o, 1).times(0.5), t.s = e10.s) : r.s < 0 ? (this.precision = o, this.rounding = 1, t = this.atan(_(e10, r, o, 1)), r = xe(this, o, 1), this.precision = n, this.rounding = i, t = e10.s < 0 ? t.minus(r) : t.plus(r)) : t = this.atan(_(e10, r, o, 1)), t;
}
function xp(e10) {
  return new this(e10).cbrt();
}
function vp(e10) {
  return y(e10 = new this(e10), e10.e + 1, 2);
}
function Pp(e10, r, t) {
  return new this(e10).clamp(r, t);
}
function Tp(e10) {
  if (!e10 || typeof e10 != "object") throw Error(fn + "Object expected");
  var r, t, n, i = e10.defaults === true, o = ["precision", 1, He, "rounding", 0, 8, "toExpNeg", -Pr, 0, "toExpPos", 0, Pr, "maxE", 0, Pr, "minE", -Pr, 0, "modulo", 0, 9];
  for (r = 0; r < o.length; r += 3) if (t = o[r], i && (this[t] = Li[t]), (n = e10[t]) !== void 0) if (Y(n) === n && n >= o[r + 1] && n <= o[r + 2]) this[t] = n;
  else throw Error(Ke + t + ": " + n);
  if (t = "crypto", i && (this[t] = Li[t]), (n = e10[t]) !== void 0) if (n === true || n === false || n === 0 || n === 1) if (n) if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[t] = true;
  else throw Error(_s);
  else this[t] = false;
  else throw Error(Ke + t + ": " + n);
  return this;
}
function Sp(e10) {
  return new this(e10).cos();
}
function Rp(e10) {
  return new this(e10).cosh();
}
function js(e10) {
  var r, t, n;
  function i(o) {
    var s, a, l, u = this;
    if (!(u instanceof i)) return new i(o);
    if (u.constructor = i, Ds(o)) {
      u.s = o.s, w ? !o.d || o.e > i.maxE ? (u.e = NaN, u.d = null) : o.e < i.minE ? (u.e = 0, u.d = [0]) : (u.e = o.e, u.d = o.d.slice()) : (u.e = o.e, u.d = o.d ? o.d.slice() : o.d);
      return;
    }
    if (l = typeof o, l === "number") {
      if (o === 0) {
        u.s = 1 / o < 0 ? -1 : 1, u.e = 0, u.d = [0];
        return;
      }
      if (o < 0 ? (o = -o, u.s = -1) : u.s = 1, o === ~~o && o < 1e7) {
        for (s = 0, a = o; a >= 10; a /= 10) s++;
        w ? s > i.maxE ? (u.e = NaN, u.d = null) : s < i.minE ? (u.e = 0, u.d = [0]) : (u.e = s, u.d = [o]) : (u.e = s, u.d = [o]);
        return;
      }
      if (o * 0 !== 0) {
        o || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return cn(u, o.toString());
    }
    if (l === "string") return (a = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (a === 43 && (o = o.slice(1)), u.s = 1), Ls.test(o) ? cn(u, o) : cp(u, o);
    if (l === "bigint") return o < 0 ? (o = -o, u.s = -1) : u.s = 1, cn(u, o.toString());
    throw Error(Ke + o);
  }
  if (i.prototype = m, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = Tp, i.clone = js, i.isDecimal = Ds, i.abs = dp, i.acos = mp, i.acosh = fp, i.add = gp, i.asin = hp, i.asinh = yp, i.atan = bp, i.atanh = Ep, i.atan2 = wp, i.cbrt = xp, i.ceil = vp, i.clamp = Pp, i.cos = Sp, i.cosh = Rp, i.div = Ap, i.exp = Cp, i.floor = Ip, i.hypot = Dp, i.ln = Op, i.log = kp, i.log10 = Np, i.log2 = _p, i.max = Lp, i.min = Fp, i.mod = Mp, i.mul = $p, i.pow = qp, i.random = Vp, i.round = jp, i.sign = Bp, i.sin = Up, i.sinh = Gp, i.sqrt = Qp, i.sub = Wp, i.sum = Jp, i.tan = Kp, i.tanh = Hp, i.trunc = Yp, e10 === void 0 && (e10 = {}), e10 && e10.defaults !== true) for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], r = 0; r < n.length; ) e10.hasOwnProperty(t = n[r++]) || (e10[t] = this[t]);
  return i.config(e10), i;
}
function Ap(e10, r) {
  return new this(e10).div(r);
}
function Cp(e10) {
  return new this(e10).exp();
}
function Ip(e10) {
  return y(e10 = new this(e10), e10.e + 1, 3);
}
function Dp() {
  var e10, r, t = new this(0);
  for (w = false, e10 = 0; e10 < arguments.length; ) if (r = new this(arguments[e10++]), r.d) t.d && (t = t.plus(r.times(r)));
  else {
    if (r.s) return w = true, new this(1 / 0);
    t = r;
  }
  return w = true, t.sqrt();
}
function Ds(e10) {
  return e10 instanceof Le || e10 && e10.toStringTag === Ns || false;
}
function Op(e10) {
  return new this(e10).ln();
}
function kp(e10, r) {
  return new this(e10).log(r);
}
function _p(e10) {
  return new this(e10).log(2);
}
function Np(e10) {
  return new this(e10).log(10);
}
function Lp() {
  return $s(this, arguments, -1);
}
function Fp() {
  return $s(this, arguments, 1);
}
function Mp(e10, r) {
  return new this(e10).mod(r);
}
function $p(e10, r) {
  return new this(e10).mul(r);
}
function qp(e10, r) {
  return new this(e10).pow(r);
}
function Vp(e10) {
  var r, t, n, i, o = 0, s = new this(1), a = [];
  if (e10 === void 0 ? e10 = this.precision : te(e10, 1, He), n = Math.ceil(e10 / E), this.crypto) if (crypto.getRandomValues) for (r = crypto.getRandomValues(new Uint32Array(n)); o < n; ) i = r[o], i >= 429e7 ? r[o] = crypto.getRandomValues(new Uint32Array(1))[0] : a[o++] = i % 1e7;
  else if (crypto.randomBytes) {
    for (r = crypto.randomBytes(n *= 4); o < n; ) i = r[o] + (r[o + 1] << 8) + (r[o + 2] << 16) + ((r[o + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(r, o) : (a.push(i % 1e7), o += 4);
    o = n / 4;
  } else throw Error(_s);
  else for (; o < n; ) a[o++] = Math.random() * 1e7 | 0;
  for (n = a[--o], e10 %= E, n && e10 && (i = B(10, E - e10), a[o] = (n / i | 0) * i); a[o] === 0; o--) a.pop();
  if (o < 0) t = 0, a = [0];
  else {
    for (t = -1; a[0] === 0; t -= E) a.shift();
    for (n = 1, i = a[0]; i >= 10; i /= 10) n++;
    n < E && (t -= E - n);
  }
  return s.e = t, s.d = a, s;
}
function jp(e10) {
  return y(e10 = new this(e10), e10.e + 1, this.rounding);
}
function Bp(e10) {
  return e10 = new this(e10), e10.d ? e10.d[0] ? e10.s : 0 * e10.s : e10.s || NaN;
}
function Up(e10) {
  return new this(e10).sin();
}
function Gp(e10) {
  return new this(e10).sinh();
}
function Qp(e10) {
  return new this(e10).sqrt();
}
function Wp(e10, r) {
  return new this(e10).sub(r);
}
function Jp() {
  var e10 = 0, r = arguments, t = new this(r[e10]);
  for (w = false; t.s && ++e10 < r.length; ) t = t.plus(r[e10]);
  return w = true, y(t, this.precision, this.rounding);
}
function Kp(e10) {
  return new this(e10).tan();
}
function Hp(e10) {
  return new this(e10).tanh();
}
function Yp(e10) {
  return y(e10 = new this(e10), e10.e + 1, 1);
}
m[Symbol.for("nodejs.util.inspect.custom")] = m.toString;
m[Symbol.toStringTag] = "Decimal";
var Le = m.constructor = js(Li);
pn = new Le(pn);
dn = new Le(dn);
var Ye = Le;
function Sr(e10) {
  return Le.isDecimal(e10) ? true : e10 !== null && typeof e10 == "object" && typeof e10.s == "number" && typeof e10.e == "number" && typeof e10.toFixed == "function" && Array.isArray(e10.d);
}
var yn = {};
gr(yn, { ModelAction: () => Rr, datamodelEnumToSchemaEnum: () => zp });
function zp(e10) {
  return { name: e10.name, values: e10.values.map((r) => r.name) };
}
var Rr = ((b) => (b.findUnique = "findUnique", b.findUniqueOrThrow = "findUniqueOrThrow", b.findFirst = "findFirst", b.findFirstOrThrow = "findFirstOrThrow", b.findMany = "findMany", b.create = "create", b.createMany = "createMany", b.createManyAndReturn = "createManyAndReturn", b.update = "update", b.updateMany = "updateMany", b.updateManyAndReturn = "updateManyAndReturn", b.upsert = "upsert", b.delete = "delete", b.deleteMany = "deleteMany", b.groupBy = "groupBy", b.count = "count", b.aggregate = "aggregate", b.findRaw = "findRaw", b.aggregateRaw = "aggregateRaw", b))(Rr || {});
var Qs = le(wi());
var Bs = { keyword: De, entity: De, value: (e10) => Q(tr(e10)), punctuation: tr, directive: De, function: De, variable: (e10) => Q(tr(e10)), string: (e10) => Q($e(e10)), boolean: Ie, number: De, comment: Jr };
var Zp = (e10) => e10, bn = {}, Xp = 0, v = { manual: bn.Prism && bn.Prism.manual, disableWorkerMessageHandler: bn.Prism && bn.Prism.disableWorkerMessageHandler, util: { encode: function(e10) {
  if (e10 instanceof ge) {
    let r = e10;
    return new ge(r.type, v.util.encode(r.content), r.alias);
  } else return Array.isArray(e10) ? e10.map(v.util.encode) : e10.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
}, type: function(e10) {
  return Object.prototype.toString.call(e10).slice(8, -1);
}, objId: function(e10) {
  return e10.__id || Object.defineProperty(e10, "__id", { value: ++Xp }), e10.__id;
}, clone: function e3(r, t) {
  let n, i, o = v.util.type(r);
  switch (t = t || {}, o) {
    case "Object":
      if (i = v.util.objId(r), t[i]) return t[i];
      n = {}, t[i] = n;
      for (let s in r) r.hasOwnProperty(s) && (n[s] = e3(r[s], t));
      return n;
    case "Array":
      return i = v.util.objId(r), t[i] ? t[i] : (n = [], t[i] = n, r.forEach(function(s, a) {
        n[a] = e3(s, t);
      }), n);
    default:
      return r;
  }
} }, languages: { extend: function(e10, r) {
  let t = v.util.clone(v.languages[e10]);
  for (let n in r) t[n] = r[n];
  return t;
}, insertBefore: function(e10, r, t, n) {
  n = n || v.languages;
  let i = n[e10], o = {};
  for (let a in i) if (i.hasOwnProperty(a)) {
    if (a == r) for (let l in t) t.hasOwnProperty(l) && (o[l] = t[l]);
    t.hasOwnProperty(a) || (o[a] = i[a]);
  }
  let s = n[e10];
  return n[e10] = o, v.languages.DFS(v.languages, function(a, l) {
    l === s && a != e10 && (this[a] = o);
  }), o;
}, DFS: function e4(r, t, n, i) {
  i = i || {};
  let o = v.util.objId;
  for (let s in r) if (r.hasOwnProperty(s)) {
    t.call(r, s, r[s], n || s);
    let a = r[s], l = v.util.type(a);
    l === "Object" && !i[o(a)] ? (i[o(a)] = true, e4(a, t, null, i)) : l === "Array" && !i[o(a)] && (i[o(a)] = true, e4(a, t, s, i));
  }
} }, plugins: {}, highlight: function(e10, r, t) {
  let n = { code: e10, grammar: r, language: t };
  return v.hooks.run("before-tokenize", n), n.tokens = v.tokenize(n.code, n.grammar), v.hooks.run("after-tokenize", n), ge.stringify(v.util.encode(n.tokens), n.language);
}, matchGrammar: function(e10, r, t, n, i, o, s) {
  for (let g in t) {
    if (!t.hasOwnProperty(g) || !t[g]) continue;
    if (g == s) return;
    let I = t[g];
    I = v.util.type(I) === "Array" ? I : [I];
    for (let T = 0; T < I.length; ++T) {
      let S = I[T], b = S.inside, D = !!S.lookbehind, me = !!S.greedy, ie = 0, Wr = S.alias;
      if (me && !S.pattern.global) {
        let V = S.pattern.toString().match(/[imuy]*$/)[0];
        S.pattern = RegExp(S.pattern.source, V + "g");
      }
      S = S.pattern || S;
      for (let V = n, re = i; V < r.length; re += r[V].length, ++V) {
        let Ae = r[V];
        if (r.length > e10.length) return;
        if (Ae instanceof ge) continue;
        if (me && V != r.length - 1) {
          S.lastIndex = re;
          var p = S.exec(e10);
          if (!p) break;
          var c = p.index + (D ? p[1].length : 0), d = p.index + p[0].length, a = V, l = re;
          for (let O = r.length; a < O && (l < d || !r[a].type && !r[a - 1].greedy); ++a) l += r[a].length, c >= l && (++V, re = l);
          if (r[V] instanceof ge) continue;
          u = a - V, Ae = e10.slice(re, l), p.index -= re;
        } else {
          S.lastIndex = 0;
          var p = S.exec(Ae), u = 1;
        }
        if (!p) {
          if (o) break;
          continue;
        }
        D && (ie = p[1] ? p[1].length : 0);
        var c = p.index + ie, p = p[0].slice(ie), d = c + p.length, f = Ae.slice(0, c), h = Ae.slice(d);
        let J = [V, u];
        f && (++V, re += f.length, J.push(f));
        let mr = new ge(g, b ? v.tokenize(p, b) : p, Wr, p, me);
        if (J.push(mr), h && J.push(h), Array.prototype.splice.apply(r, J), u != 1 && v.matchGrammar(e10, r, t, V, re, true, g), o) break;
      }
    }
  }
}, tokenize: function(e10, r) {
  let t = [e10], n = r.rest;
  if (n) {
    for (let i in n) r[i] = n[i];
    delete r.rest;
  }
  return v.matchGrammar(e10, t, r, 0, 0, false), t;
}, hooks: { all: {}, add: function(e10, r) {
  let t = v.hooks.all;
  t[e10] = t[e10] || [], t[e10].push(r);
}, run: function(e10, r) {
  let t = v.hooks.all[e10];
  if (!(!t || !t.length)) for (var n = 0, i; i = t[n++]; ) i(r);
} }, Token: ge };
v.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: true }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: true, greedy: true }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: true }, "class-name": { pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i, lookbehind: true, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, boolean: /\b(?:true|false)\b/, function: /\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/, punctuation: /[{}[\];(),.:]/ };
v.languages.javascript = v.languages.extend("clike", { "class-name": [v.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/, lookbehind: true }], keyword: [{ pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: true }, { pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: true }], number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/, function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/ });
v.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
v.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/, lookbehind: true, greedy: true }, "function-variable": { pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/, lookbehind: true, inside: v.languages.javascript }, { pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i, inside: v.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/, lookbehind: true, inside: v.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/, lookbehind: true, inside: v.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ });
v.languages.markup && v.languages.markup.tag.addInlined("script", "javascript");
v.languages.js = v.languages.javascript;
v.languages.typescript = v.languages.extend("javascript", { keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/, builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/ });
v.languages.ts = v.languages.typescript;
function ge(e10, r, t, n, i) {
  this.type = e10, this.content = r, this.alias = t, this.length = (n || "").length | 0, this.greedy = !!i;
}
ge.stringify = function(e10, r) {
  return typeof e10 == "string" ? e10 : Array.isArray(e10) ? e10.map(function(t) {
    return ge.stringify(t, r);
  }).join("") : ed(e10.type)(e10.content);
};
function ed(e10) {
  return Bs[e10] || Zp;
}
function Us(e10) {
  return rd(e10, v.languages.javascript);
}
function rd(e10, r) {
  return v.tokenize(e10, r).map((n) => ge.stringify(n)).join("");
}
function Gs(e10) {
  return bi(e10);
}
var En = class e5 {
  constructor(r, t) {
    __publicField(this, "firstLineNumber");
    __publicField(this, "lines");
    this.firstLineNumber = r, this.lines = t;
  }
  static read(r) {
    let t;
    try {
      t = Ci.readFileSync(r, "utf-8");
    } catch {
      return null;
    }
    return e5.fromContent(t);
  }
  static fromContent(r) {
    let t = r.split(/\r?\n/);
    return new e5(1, t);
  }
  get lastLineNumber() {
    return this.firstLineNumber + this.lines.length - 1;
  }
  mapLineAt(r, t) {
    if (r < this.firstLineNumber || r > this.lines.length + this.firstLineNumber) return this;
    let n = r - this.firstLineNumber, i = [...this.lines];
    return i[n] = t(i[n]), new e5(this.firstLineNumber, i);
  }
  mapLines(r) {
    return new e5(this.firstLineNumber, this.lines.map((t, n) => r(t, this.firstLineNumber + n)));
  }
  lineAt(r) {
    return this.lines[r - this.firstLineNumber];
  }
  prependSymbolAt(r, t) {
    return this.mapLines((n, i) => i === r ? `${t} ${n}` : `  ${n}`);
  }
  slice(r, t) {
    let n = this.lines.slice(r - 1, t).join(`
`);
    return new e5(r, Gs(n).split(`
`));
  }
  highlight() {
    let r = Us(this.toString());
    return new e5(this.firstLineNumber, r.split(`
`));
  }
  toString() {
    return this.lines.join(`
`);
  }
};
var nd = { red: ue, gray: Jr, dim: Ce, bold: Q, underline: H, highlightSource: (e10) => e10.highlight() }, id = { red: (e10) => e10, gray: (e10) => e10, dim: (e10) => e10, bold: (e10) => e10, underline: (e10) => e10, highlightSource: (e10) => e10 };
function od({ message: e10, originalMethod: r, isPanic: t, callArguments: n }) {
  return { functionName: `prisma.${r}()`, message: e10, isPanic: t ?? false, callArguments: n };
}
function sd({ callsite: e10, message: r, originalMethod: t, isPanic: n, callArguments: i }, o) {
  var _a3;
  let s = od({ message: r, originalMethod: t, isPanic: n, callArguments: i });
  if (!e10 || typeof window < "u" || process$1.env.NODE_ENV === "production") return s;
  let a = e10.getLocation();
  if (!a || !a.lineNumber || !a.columnNumber) return s;
  let l = Math.max(1, a.lineNumber - 3), u = (_a3 = En.read(a.fileName)) == null ? void 0 : _a3.slice(l, a.lineNumber), c = u == null ? void 0 : u.lineAt(a.lineNumber);
  if (u && c) {
    let p = ld(c), d = ad(c);
    if (!d) return s;
    s.functionName = `${d.code})`, s.location = a, n || (u = u.mapLineAt(a.lineNumber, (h) => h.slice(0, d.openingBraceIndex))), u = o.highlightSource(u);
    let f = String(u.lastLineNumber).length;
    if (s.contextLines = u.mapLines((h, g) => o.gray(String(g).padStart(f)) + " " + h).mapLines((h) => o.dim(h)).prependSymbolAt(a.lineNumber, o.bold(o.red("→"))), i) {
      let h = p + f + 1;
      h += 2, s.callArguments = (0, Qs.default)(i, h).slice(h);
    }
  }
  return s;
}
function ad(e10) {
  let r = Object.keys(Rr).join("|"), n = new RegExp(String.raw`\.(${r})\(`).exec(e10);
  if (n) {
    let i = n.index + n[0].length, o = e10.lastIndexOf(" ", n.index) + 1;
    return { code: e10.slice(o, i), openingBraceIndex: i };
  }
  return null;
}
function ld(e10) {
  let r = 0;
  for (let t = 0; t < e10.length; t++) {
    if (e10.charAt(t) !== " ") return r;
    r++;
  }
  return r;
}
function ud({ functionName: e10, location: r, message: t, isPanic: n, contextLines: i, callArguments: o }, s) {
  let a = [""], l = r ? " in" : ":";
  if (n ? (a.push(s.red(`Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`)), a.push(s.red(`It occurred in the ${s.bold(`\`${e10}\``)} invocation${l}`))) : a.push(s.red(`Invalid ${s.bold(`\`${e10}\``)} invocation${l}`)), r && a.push(s.underline(cd(r))), i) {
    a.push("");
    let u = [i.toString()];
    o && (u.push(o), u.push(s.dim(")"))), a.push(u.join("")), o && a.push("");
  } else a.push(""), o && a.push(o), a.push("");
  return a.push(t), a.join(`
`);
}
function cd(e10) {
  let r = [e10.fileName];
  return e10.lineNumber && r.push(String(e10.lineNumber)), e10.columnNumber && r.push(String(e10.columnNumber)), r.join(":");
}
function wn(e10) {
  let r = e10.showColors ? nd : id, t;
  return t = sd(e10, r), ud(t, r);
}
var ea = le(qi());
function Hs(e10, r, t) {
  let n = Ys(e10), i = pd(n), o = md(i);
  o ? xn(o, r, t) : r.addErrorMessage(() => "Unknown error");
}
function Ys(e10) {
  return e10.errors.flatMap((r) => r.kind === "Union" ? Ys(r) : [r]);
}
function pd(e10) {
  let r = /* @__PURE__ */ new Map(), t = [];
  for (let n of e10) {
    if (n.kind !== "InvalidArgumentType") {
      t.push(n);
      continue;
    }
    let i = `${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`, o = r.get(i);
    o ? r.set(i, { ...n, argument: { ...n.argument, typeNames: dd(o.argument.typeNames, n.argument.typeNames) } }) : r.set(i, n);
  }
  return t.push(...r.values()), t;
}
function dd(e10, r) {
  return [...new Set(e10.concat(r))];
}
function md(e10) {
  return ki(e10, (r, t) => {
    let n = Js(r), i = Js(t);
    return n !== i ? n - i : Ks(r) - Ks(t);
  });
}
function Js(e10) {
  let r = 0;
  return Array.isArray(e10.selectionPath) && (r += e10.selectionPath.length), Array.isArray(e10.argumentPath) && (r += e10.argumentPath.length), r;
}
function Ks(e10) {
  switch (e10.kind) {
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
var oe = class {
  constructor(r, t) {
    __publicField(this, "isRequired", false);
    this.name = r;
    this.value = t;
  }
  makeRequired() {
    return this.isRequired = true, this;
  }
  write(r) {
    let { colors: { green: t } } = r.context;
    r.addMarginSymbol(t(this.isRequired ? "+" : "?")), r.write(t(this.name)), this.isRequired || r.write(t("?")), r.write(t(": ")), typeof this.value == "string" ? r.write(t(this.value)) : r.write(this.value);
  }
};
Zs();
var Ar = class {
  constructor(r = 0, t) {
    __publicField(this, "lines", []);
    __publicField(this, "currentLine", "");
    __publicField(this, "currentIndent", 0);
    __publicField(this, "marginSymbol");
    __publicField(this, "afterNextNewLineCallback");
    this.context = t;
    this.currentIndent = r;
  }
  write(r) {
    return typeof r == "string" ? this.currentLine += r : r.write(this), this;
  }
  writeJoined(r, t, n = (i, o) => o.write(i)) {
    let i = t.length - 1;
    for (let o = 0; o < t.length; o++) n(t[o], this), o !== i && this.write(r);
    return this;
  }
  writeLine(r) {
    return this.write(r).newLine();
  }
  newLine() {
    this.lines.push(this.indentedCurrentLine()), this.currentLine = "", this.marginSymbol = void 0;
    let r = this.afterNextNewLineCallback;
    return this.afterNextNewLineCallback = void 0, r == null ? void 0 : r(), this;
  }
  withIndent(r) {
    return this.indent(), r(this), this.unindent(), this;
  }
  afterNextNewline(r) {
    return this.afterNextNewLineCallback = r, this;
  }
  indent() {
    return this.currentIndent++, this;
  }
  unindent() {
    return this.currentIndent > 0 && this.currentIndent--, this;
  }
  addMarginSymbol(r) {
    return this.marginSymbol = r, this;
  }
  toString() {
    return this.lines.concat(this.indentedCurrentLine()).join(`
`);
  }
  getCurrentLineLength() {
    return this.currentLine.length;
  }
  indentedCurrentLine() {
    let r = this.currentLine.padStart(this.currentLine.length + 2 * this.currentIndent);
    return this.marginSymbol ? this.marginSymbol + r.slice(1) : r;
  }
};
zs();
var vn = class {
  constructor(r) {
    this.value = r;
  }
  write(r) {
    r.write(this.value);
  }
  markAsError() {
    this.value.markAsError();
  }
};
var Pn = (e10) => e10, Tn = { bold: Pn, red: Pn, green: Pn, dim: Pn, enabled: false }, Xs = { bold: Q, red: ue, green: $e, dim: Ce, enabled: true }, Cr = { write(e10) {
  e10.writeLine(",");
} };
var Pe = class {
  constructor(r) {
    __publicField(this, "isUnderlined", false);
    __publicField(this, "color", (r) => r);
    this.contents = r;
  }
  underline() {
    return this.isUnderlined = true, this;
  }
  setColor(r) {
    return this.color = r, this;
  }
  write(r) {
    let t = r.getCurrentLineLength();
    r.write(this.color(this.contents)), this.isUnderlined && r.afterNextNewline(() => {
      r.write(" ".repeat(t)).writeLine(this.color("~".repeat(this.contents.length)));
    });
  }
};
var ze = class {
  constructor() {
    __publicField(this, "hasError", false);
  }
  markAsError() {
    return this.hasError = true, this;
  }
};
var Ir = class extends ze {
  constructor() {
    super(...arguments);
    __publicField(this, "items", []);
  }
  addItem(r) {
    return this.items.push(new vn(r)), this;
  }
  getField(r) {
    return this.items[r];
  }
  getPrintWidth() {
    return this.items.length === 0 ? 2 : Math.max(...this.items.map((t) => t.value.getPrintWidth())) + 2;
  }
  write(r) {
    if (this.items.length === 0) {
      this.writeEmpty(r);
      return;
    }
    this.writeWithItems(r);
  }
  writeEmpty(r) {
    let t = new Pe("[]");
    this.hasError && t.setColor(r.context.colors.red).underline(), r.write(t);
  }
  writeWithItems(r) {
    let { colors: t } = r.context;
    r.writeLine("[").withIndent(() => r.writeJoined(Cr, this.items).newLine()).write("]"), this.hasError && r.afterNextNewline(() => {
      r.writeLine(t.red("~".repeat(this.getPrintWidth())));
    });
  }
  asObject() {
  }
};
var Dr = class e6 extends ze {
  constructor() {
    super(...arguments);
    __publicField(this, "fields", {});
    __publicField(this, "suggestions", []);
  }
  addField(r) {
    this.fields[r.name] = r;
  }
  addSuggestion(r) {
    this.suggestions.push(r);
  }
  getField(r) {
    return this.fields[r];
  }
  getDeepField(r) {
    let [t, ...n] = r, i = this.getField(t);
    if (!i) return;
    let o = i;
    for (let s of n) {
      let a;
      if (o.value instanceof e6 ? a = o.value.getField(s) : o.value instanceof Ir && (a = o.value.getField(Number(s))), !a) return;
      o = a;
    }
    return o;
  }
  getDeepFieldValue(r) {
    var _a3;
    return r.length === 0 ? this : (_a3 = this.getDeepField(r)) == null ? void 0 : _a3.value;
  }
  hasField(r) {
    return !!this.getField(r);
  }
  removeAllFields() {
    this.fields = {};
  }
  removeField(r) {
    delete this.fields[r];
  }
  getFields() {
    return this.fields;
  }
  isEmpty() {
    return Object.keys(this.fields).length === 0;
  }
  getFieldValue(r) {
    var _a3;
    return (_a3 = this.getField(r)) == null ? void 0 : _a3.value;
  }
  getDeepSubSelectionValue(r) {
    let t = this;
    for (let n of r) {
      if (!(t instanceof e6)) return;
      let i = t.getSubSelectionValue(n);
      if (!i) return;
      t = i;
    }
    return t;
  }
  getDeepSelectionParent(r) {
    let t = this.getSelectionParent();
    if (!t) return;
    let n = t;
    for (let i of r) {
      let o = n.value.getFieldValue(i);
      if (!o || !(o instanceof e6)) return;
      let s = o.getSelectionParent();
      if (!s) return;
      n = s;
    }
    return n;
  }
  getSelectionParent() {
    var _a3, _b2;
    let r = (_a3 = this.getField("select")) == null ? void 0 : _a3.value.asObject();
    if (r) return { kind: "select", value: r };
    let t = (_b2 = this.getField("include")) == null ? void 0 : _b2.value.asObject();
    if (t) return { kind: "include", value: t };
  }
  getSubSelectionValue(r) {
    var _a3;
    return (_a3 = this.getSelectionParent()) == null ? void 0 : _a3.value.fields[r].value;
  }
  getPrintWidth() {
    let r = Object.values(this.fields);
    return r.length == 0 ? 2 : Math.max(...r.map((n) => n.getPrintWidth())) + 2;
  }
  write(r) {
    let t = Object.values(this.fields);
    if (t.length === 0 && this.suggestions.length === 0) {
      this.writeEmpty(r);
      return;
    }
    this.writeWithContents(r, t);
  }
  asObject() {
    return this;
  }
  writeEmpty(r) {
    let t = new Pe("{}");
    this.hasError && t.setColor(r.context.colors.red).underline(), r.write(t);
  }
  writeWithContents(r, t) {
    r.writeLine("{").withIndent(() => {
      r.writeJoined(Cr, [...t, ...this.suggestions]).newLine();
    }), r.write("}"), this.hasError && r.afterNextNewline(() => {
      r.writeLine(r.context.colors.red("~".repeat(this.getPrintWidth())));
    });
  }
};
var G = class extends ze {
  constructor(t) {
    super();
    this.text = t;
  }
  getPrintWidth() {
    return this.text.length;
  }
  write(t) {
    let n = new Pe(this.text);
    this.hasError && n.underline().setColor(t.context.colors.red), t.write(n);
  }
  asObject() {
  }
};
var at = class {
  constructor() {
    __publicField(this, "fields", []);
  }
  addField(r, t) {
    return this.fields.push({ write(n) {
      let { green: i, dim: o } = n.context.colors;
      n.write(i(o(`${r}: ${t}`))).addMarginSymbol(i(o("+")));
    } }), this;
  }
  write(r) {
    let { colors: { green: t } } = r.context;
    r.writeLine(t("{")).withIndent(() => {
      r.writeJoined(Cr, this.fields).newLine();
    }).write(t("}")).addMarginSymbol(t("+"));
  }
};
function xn(e10, r, t) {
  switch (e10.kind) {
    case "MutuallyExclusiveFields":
      fd(e10, r);
      break;
    case "IncludeOnScalar":
      gd(e10, r);
      break;
    case "EmptySelection":
      hd(e10, r, t);
      break;
    case "UnknownSelectionField":
      wd(e10, r);
      break;
    case "InvalidSelectionValue":
      xd(e10, r);
      break;
    case "UnknownArgument":
      vd(e10, r);
      break;
    case "UnknownInputField":
      Pd(e10, r);
      break;
    case "RequiredArgumentMissing":
      Td(e10, r);
      break;
    case "InvalidArgumentType":
      Sd(e10, r);
      break;
    case "InvalidArgumentValue":
      Rd(e10, r);
      break;
    case "ValueTooLarge":
      Ad(e10, r);
      break;
    case "SomeFieldsMissing":
      Cd(e10, r);
      break;
    case "TooManyFieldsGiven":
      Id(e10, r);
      break;
    case "Union":
      Hs(e10, r, t);
      break;
    default:
      throw new Error("not implemented: " + e10.kind);
  }
}
function fd(e10, r) {
  var _a3, _b2, _c3;
  let t = (_a3 = r.arguments.getDeepSubSelectionValue(e10.selectionPath)) == null ? void 0 : _a3.asObject();
  t && ((_b2 = t.getField(e10.firstField)) == null ? void 0 : _b2.markAsError(), (_c3 = t.getField(e10.secondField)) == null ? void 0 : _c3.markAsError()), r.addErrorMessage((n) => `Please ${n.bold("either")} use ${n.green(`\`${e10.firstField}\``)} or ${n.green(`\`${e10.secondField}\``)}, but ${n.red("not both")} at the same time.`);
}
function gd(e10, r) {
  var _a3, _b2;
  let [t, n] = Or(e10.selectionPath), i = e10.outputType, o = (_a3 = r.arguments.getDeepSelectionParent(t)) == null ? void 0 : _a3.value;
  if (o && ((_b2 = o.getField(n)) == null ? void 0 : _b2.markAsError(), i)) for (let s of i.fields) s.isRelation && o.addSuggestion(new oe(s.name, "true"));
  r.addErrorMessage((s) => {
    let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold("include")} statement`;
    return i ? a += ` on model ${s.bold(i.name)}. ${lt(s)}` : a += ".", a += `
Note that ${s.bold("include")} statements only accept relation fields.`, a;
  });
}
function hd(e10, r, t) {
  var _a3, _b2;
  let n = (_a3 = r.arguments.getDeepSubSelectionValue(e10.selectionPath)) == null ? void 0 : _a3.asObject();
  if (n) {
    let i = (_b2 = n.getField("omit")) == null ? void 0 : _b2.value.asObject();
    if (i) {
      yd(e10, r, i);
      return;
    }
    if (n.hasField("select")) {
      bd(e10, r);
      return;
    }
  }
  if (t == null ? void 0 : t[Qe(e10.outputType.name)]) {
    Ed(e10, r);
    return;
  }
  r.addErrorMessage(() => `Unknown field at "${e10.selectionPath.join(".")} selection"`);
}
function yd(e10, r, t) {
  t.removeAllFields();
  for (let n of e10.outputType.fields) t.addSuggestion(new oe(n.name, "false"));
  r.addErrorMessage((n) => `The ${n.red("omit")} statement includes every field of the model ${n.bold(e10.outputType.name)}. At least one field must be included in the result`);
}
function bd(e10, r) {
  var _a3;
  let t = e10.outputType, n = (_a3 = r.arguments.getDeepSelectionParent(e10.selectionPath)) == null ? void 0 : _a3.value, i = (n == null ? void 0 : n.isEmpty()) ?? false;
  n && (n.removeAllFields(), na(n, t)), r.addErrorMessage((o) => i ? `The ${o.red("`select`")} statement for type ${o.bold(t.name)} must not be empty. ${lt(o)}` : `The ${o.red("`select`")} statement for type ${o.bold(t.name)} needs ${o.bold("at least one truthy value")}.`);
}
function Ed(e10, r) {
  var _a3, _b2;
  let t = new at();
  for (let i of e10.outputType.fields) i.isRelation || t.addField(i.name, "false");
  let n = new oe("omit", t).makeRequired();
  if (e10.selectionPath.length === 0) r.arguments.addSuggestion(n);
  else {
    let [i, o] = Or(e10.selectionPath), a = (_b2 = (_a3 = r.arguments.getDeepSelectionParent(i)) == null ? void 0 : _a3.value.asObject()) == null ? void 0 : _b2.getField(o);
    if (a) {
      let l = (a == null ? void 0 : a.value.asObject()) ?? new Dr();
      l.addSuggestion(n), a.value = l;
    }
  }
  r.addErrorMessage((i) => `The global ${i.red("omit")} configuration excludes every field of the model ${i.bold(e10.outputType.name)}. At least one field must be included in the result`);
}
function wd(e10, r) {
  let t = ia(e10.selectionPath, r);
  if (t.parentKind !== "unknown") {
    t.field.markAsError();
    let n = t.parent;
    switch (t.parentKind) {
      case "select":
        na(n, e10.outputType);
        break;
      case "include":
        Dd(n, e10.outputType);
        break;
      case "omit":
        Od(n, e10.outputType);
        break;
    }
  }
  r.addErrorMessage((n) => {
    let i = [`Unknown field ${n.red(`\`${t.fieldName}\``)}`];
    return t.parentKind !== "unknown" && i.push(`for ${n.bold(t.parentKind)} statement`), i.push(`on model ${n.bold(`\`${e10.outputType.name}\``)}.`), i.push(lt(n)), i.join(" ");
  });
}
function xd(e10, r) {
  let t = ia(e10.selectionPath, r);
  t.parentKind !== "unknown" && t.field.value.markAsError(), r.addErrorMessage((n) => `Invalid value for selection field \`${n.red(t.fieldName)}\`: ${e10.underlyingError}`);
}
function vd(e10, r) {
  var _a3, _b2;
  let t = e10.argumentPath[0], n = (_a3 = r.arguments.getDeepSubSelectionValue(e10.selectionPath)) == null ? void 0 : _a3.asObject();
  n && ((_b2 = n.getField(t)) == null ? void 0 : _b2.markAsError(), kd(n, e10.arguments)), r.addErrorMessage((i) => ra(i, t, e10.arguments.map((o) => o.name)));
}
function Pd(e10, r) {
  var _a3, _b2, _c3;
  let [t, n] = Or(e10.argumentPath), i = (_a3 = r.arguments.getDeepSubSelectionValue(e10.selectionPath)) == null ? void 0 : _a3.asObject();
  if (i) {
    (_b2 = i.getDeepField(e10.argumentPath)) == null ? void 0 : _b2.markAsError();
    let o = (_c3 = i.getDeepFieldValue(t)) == null ? void 0 : _c3.asObject();
    o && oa(o, e10.inputType);
  }
  r.addErrorMessage((o) => ra(o, n, e10.inputType.fields.map((s) => s.name)));
}
function ra(e10, r, t) {
  let n = [`Unknown argument \`${e10.red(r)}\`.`], i = Nd(r, t);
  return i && n.push(`Did you mean \`${e10.green(i)}\`?`), t.length > 0 && n.push(lt(e10)), n.join(" ");
}
function Td(e10, r) {
  var _a3, _b2, _c3;
  let t;
  r.addErrorMessage((l) => (t == null ? void 0 : t.value) instanceof G && t.value.text === "null" ? `Argument \`${l.green(o)}\` must not be ${l.red("null")}.` : `Argument \`${l.green(o)}\` is missing.`);
  let n = (_a3 = r.arguments.getDeepSubSelectionValue(e10.selectionPath)) == null ? void 0 : _a3.asObject();
  if (!n) return;
  let [i, o] = Or(e10.argumentPath), s = new at(), a = (_b2 = n.getDeepFieldValue(i)) == null ? void 0 : _b2.asObject();
  if (a) {
    if (t = a.getField(o), t && a.removeField(o), e10.inputTypes.length === 1 && e10.inputTypes[0].kind === "object") {
      for (let l of e10.inputTypes[0].fields) s.addField(l.name, l.typeNames.join(" | "));
      a.addSuggestion(new oe(o, s).makeRequired());
    } else {
      let l = e10.inputTypes.map(ta).join(" | ");
      a.addSuggestion(new oe(o, l).makeRequired());
    }
    if (e10.dependentArgumentPath) {
      (_c3 = n.getDeepField(e10.dependentArgumentPath)) == null ? void 0 : _c3.markAsError();
      let [, l] = Or(e10.dependentArgumentPath);
      r.addErrorMessage((u) => `Argument \`${u.green(o)}\` is required because argument \`${u.green(l)}\` was provided.`);
    }
  }
}
function ta(e10) {
  return e10.kind === "list" ? `${ta(e10.elementType)}[]` : e10.name;
}
function Sd(e10, r) {
  var _a3, _b2;
  let t = e10.argument.name, n = (_a3 = r.arguments.getDeepSubSelectionValue(e10.selectionPath)) == null ? void 0 : _a3.asObject();
  n && ((_b2 = n.getDeepFieldValue(e10.argumentPath)) == null ? void 0 : _b2.markAsError()), r.addErrorMessage((i) => {
    let o = Sn("or", e10.argument.typeNames.map((s) => i.green(s)));
    return `Argument \`${i.bold(t)}\`: Invalid value provided. Expected ${o}, provided ${i.red(e10.inferredType)}.`;
  });
}
function Rd(e10, r) {
  var _a3, _b2;
  let t = e10.argument.name, n = (_a3 = r.arguments.getDeepSubSelectionValue(e10.selectionPath)) == null ? void 0 : _a3.asObject();
  n && ((_b2 = n.getDeepFieldValue(e10.argumentPath)) == null ? void 0 : _b2.markAsError()), r.addErrorMessage((i) => {
    let o = [`Invalid value for argument \`${i.bold(t)}\``];
    if (e10.underlyingError && o.push(`: ${e10.underlyingError}`), o.push("."), e10.argument.typeNames.length > 0) {
      let s = Sn("or", e10.argument.typeNames.map((a) => i.green(a)));
      o.push(` Expected ${s}.`);
    }
    return o.join("");
  });
}
function Ad(e10, r) {
  var _a3, _b2;
  let t = e10.argument.name, n = (_a3 = r.arguments.getDeepSubSelectionValue(e10.selectionPath)) == null ? void 0 : _a3.asObject(), i;
  if (n) {
    let s = (_b2 = n.getDeepField(e10.argumentPath)) == null ? void 0 : _b2.value;
    s == null ? void 0 : s.markAsError(), s instanceof G && (i = s.text);
  }
  r.addErrorMessage((o) => {
    let s = ["Unable to fit value"];
    return i && s.push(o.red(i)), s.push(`into a 64-bit signed integer for field \`${o.bold(t)}\``), s.join(" ");
  });
}
function Cd(e10, r) {
  var _a3, _b2;
  let t = e10.argumentPath[e10.argumentPath.length - 1], n = (_a3 = r.arguments.getDeepSubSelectionValue(e10.selectionPath)) == null ? void 0 : _a3.asObject();
  if (n) {
    let i = (_b2 = n.getDeepFieldValue(e10.argumentPath)) == null ? void 0 : _b2.asObject();
    i && oa(i, e10.inputType);
  }
  r.addErrorMessage((i) => {
    let o = [`Argument \`${i.bold(t)}\` of type ${i.bold(e10.inputType.name)} needs`];
    return e10.constraints.minFieldCount === 1 ? e10.constraints.requiredFields ? o.push(`${i.green("at least one of")} ${Sn("or", e10.constraints.requiredFields.map((s) => `\`${i.bold(s)}\``))} arguments.`) : o.push(`${i.green("at least one")} argument.`) : o.push(`${i.green(`at least ${e10.constraints.minFieldCount}`)} arguments.`), o.push(lt(i)), o.join(" ");
  });
}
function Id(e10, r) {
  var _a3, _b2;
  let t = e10.argumentPath[e10.argumentPath.length - 1], n = (_a3 = r.arguments.getDeepSubSelectionValue(e10.selectionPath)) == null ? void 0 : _a3.asObject(), i = [];
  if (n) {
    let o = (_b2 = n.getDeepFieldValue(e10.argumentPath)) == null ? void 0 : _b2.asObject();
    o && (o.markAsError(), i = Object.keys(o.getFields()));
  }
  r.addErrorMessage((o) => {
    let s = [`Argument \`${o.bold(t)}\` of type ${o.bold(e10.inputType.name)} needs`];
    return e10.constraints.minFieldCount === 1 && e10.constraints.maxFieldCount == 1 ? s.push(`${o.green("exactly one")} argument,`) : e10.constraints.maxFieldCount == 1 ? s.push(`${o.green("at most one")} argument,`) : s.push(`${o.green(`at most ${e10.constraints.maxFieldCount}`)} arguments,`), s.push(`but you provided ${Sn("and", i.map((a) => o.red(a)))}. Please choose`), e10.constraints.maxFieldCount === 1 ? s.push("one.") : s.push(`${e10.constraints.maxFieldCount}.`), s.join(" ");
  });
}
function na(e10, r) {
  for (let t of r.fields) e10.hasField(t.name) || e10.addSuggestion(new oe(t.name, "true"));
}
function Dd(e10, r) {
  for (let t of r.fields) t.isRelation && !e10.hasField(t.name) && e10.addSuggestion(new oe(t.name, "true"));
}
function Od(e10, r) {
  for (let t of r.fields) !e10.hasField(t.name) && !t.isRelation && e10.addSuggestion(new oe(t.name, "true"));
}
function kd(e10, r) {
  for (let t of r) e10.hasField(t.name) || e10.addSuggestion(new oe(t.name, t.typeNames.join(" | ")));
}
function ia(e10, r) {
  var _a3, _b2, _c3, _d3;
  let [t, n] = Or(e10), i = (_a3 = r.arguments.getDeepSubSelectionValue(t)) == null ? void 0 : _a3.asObject();
  if (!i) return { parentKind: "unknown", fieldName: n };
  let o = (_b2 = i.getFieldValue("select")) == null ? void 0 : _b2.asObject(), s = (_c3 = i.getFieldValue("include")) == null ? void 0 : _c3.asObject(), a = (_d3 = i.getFieldValue("omit")) == null ? void 0 : _d3.asObject(), l = o == null ? void 0 : o.getField(n);
  return o && l ? { parentKind: "select", parent: o, field: l, fieldName: n } : (l = s == null ? void 0 : s.getField(n), s && l ? { parentKind: "include", field: l, parent: s, fieldName: n } : (l = a == null ? void 0 : a.getField(n), a && l ? { parentKind: "omit", field: l, parent: a, fieldName: n } : { parentKind: "unknown", fieldName: n }));
}
function oa(e10, r) {
  if (r.kind === "object") for (let t of r.fields) e10.hasField(t.name) || e10.addSuggestion(new oe(t.name, t.typeNames.join(" | ")));
}
function Or(e10) {
  let r = [...e10], t = r.pop();
  if (!t) throw new Error("unexpected empty path");
  return [r, t];
}
function lt({ green: e10, enabled: r }) {
  return "Available options are " + (r ? `listed in ${e10("green")}` : "marked with ?") + ".";
}
function Sn(e10, r) {
  if (r.length === 1) return r[0];
  let t = [...r], n = t.pop();
  return `${t.join(", ")} ${e10} ${n}`;
}
var _d = 3;
function Nd(e10, r) {
  let t = 1 / 0, n;
  for (let i of r) {
    let o = (0, ea.default)(e10, i);
    o > _d || o < t && (t = o, n = i);
  }
  return n;
}
var ut = class {
  constructor(r, t, n, i, o) {
    __publicField(this, "modelName");
    __publicField(this, "name");
    __publicField(this, "typeName");
    __publicField(this, "isList");
    __publicField(this, "isEnum");
    this.modelName = r, this.name = t, this.typeName = n, this.isList = i, this.isEnum = o;
  }
  _toGraphQLInputType() {
    let r = this.isList ? "List" : "", t = this.isEnum ? "Enum" : "";
    return `${r}${t}${this.typeName}FieldRefInput<${this.modelName}>`;
  }
};
function kr(e10) {
  return e10 instanceof ut;
}
var Rn = Symbol(), ji = /* @__PURE__ */ new WeakMap(), Fe = class {
  constructor(r) {
    r === Rn ? ji.set(this, `Prisma.${this._getName()}`) : ji.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`);
  }
  _getName() {
    return this.constructor.name;
  }
  toString() {
    return ji.get(this);
  }
}, ct = class extends Fe {
  _getNamespace() {
    return "NullTypes";
  }
}, pt = (_C = class extends ct {
  constructor() {
    super(...arguments);
    __privateAdd(this, _e2);
  }
}, _e2 = new WeakMap(), _C);
Ui(pt, "DbNull");
var dt = (_D = class extends ct {
  constructor() {
    super(...arguments);
    __privateAdd(this, _e3);
  }
}, _e3 = new WeakMap(), _D);
Ui(dt, "JsonNull");
var mt = (_E2 = class extends ct {
  constructor() {
    super(...arguments);
    __privateAdd(this, _e4);
  }
}, _e4 = new WeakMap(), _E2);
Ui(mt, "AnyNull");
var Bi = { instances: { DbNull: new pt(Rn), JsonNull: new dt(Rn), AnyNull: new mt(Rn) } };
function Ui(e10, r) {
  Object.defineProperty(e10, "name", { value: r, configurable: true });
}
var sa = ": ", An = class {
  constructor(r, t) {
    __publicField(this, "hasError", false);
    this.name = r;
    this.value = t;
  }
  markAsError() {
    this.hasError = true;
  }
  getPrintWidth() {
    return this.name.length + this.value.getPrintWidth() + sa.length;
  }
  write(r) {
    let t = new Pe(this.name);
    this.hasError && t.underline().setColor(r.context.colors.red), r.write(t).write(sa).write(this.value);
  }
};
var Gi = class {
  constructor(r) {
    __publicField(this, "arguments");
    __publicField(this, "errorMessages", []);
    this.arguments = r;
  }
  write(r) {
    r.write(this.arguments);
  }
  addErrorMessage(r) {
    this.errorMessages.push(r);
  }
  renderAllMessages(r) {
    return this.errorMessages.map((t) => t(r)).join(`
`);
  }
};
function _r(e10) {
  return new Gi(aa(e10));
}
function aa(e10) {
  let r = new Dr();
  for (let [t, n] of Object.entries(e10)) {
    let i = new An(t, la(n));
    r.addField(i);
  }
  return r;
}
function la(e10) {
  if (typeof e10 == "string") return new G(JSON.stringify(e10));
  if (typeof e10 == "number" || typeof e10 == "boolean") return new G(String(e10));
  if (typeof e10 == "bigint") return new G(`${e10}n`);
  if (e10 === null) return new G("null");
  if (e10 === void 0) return new G("undefined");
  if (Sr(e10)) return new G(`new Prisma.Decimal("${e10.toFixed()}")`);
  if (e10 instanceof Uint8Array) return Buffer.isBuffer(e10) ? new G(`Buffer.alloc(${e10.byteLength})`) : new G(`new Uint8Array(${e10.byteLength})`);
  if (e10 instanceof Date) {
    let r = ln(e10) ? e10.toISOString() : "Invalid Date";
    return new G(`new Date("${r}")`);
  }
  return e10 instanceof Fe ? new G(`Prisma.${e10._getName()}`) : kr(e10) ? new G(`prisma.${Qe(e10.modelName)}.$fields.${e10.name}`) : Array.isArray(e10) ? Ld(e10) : typeof e10 == "object" ? aa(e10) : new G(Object.prototype.toString.call(e10));
}
function Ld(e10) {
  let r = new Ir();
  for (let t of e10) r.addItem(la(t));
  return r;
}
function Cn(e10, r) {
  let t = r === "pretty" ? Xs : Tn, n = e10.renderAllMessages(t), i = new Ar(0, { colors: t }).write(e10).toString();
  return { message: n, args: i };
}
function In({ args: e10, errors: r, errorFormat: t, callsite: n, originalMethod: i, clientVersion: o, globalOmit: s }) {
  let a = _r(e10);
  for (let p of r) xn(p, a, s);
  let { message: l, args: u } = Cn(a, t), c = wn({ message: l, callsite: n, originalMethod: i, showColors: t === "pretty", callArguments: u });
  throw new X(c, { clientVersion: o });
}
function Te(e10) {
  return e10.replace(/^./, (r) => r.toLowerCase());
}
function ca(e10, r, t) {
  let n = Te(t);
  return !r.result || !(r.result.$allModels || r.result[n]) ? e10 : Fd({ ...e10, ...ua(r.name, e10, r.result.$allModels), ...ua(r.name, e10, r.result[n]) });
}
function Fd(e10) {
  let r = new we(), t = (n, i) => r.getOrCreate(n, () => i.has(n) ? [n] : (i.add(n), e10[n] ? e10[n].needs.flatMap((o) => t(o, i)) : [n]));
  return on(e10, (n) => ({ ...n, needs: t(n.name, /* @__PURE__ */ new Set()) }));
}
function ua(e10, r, t) {
  return t ? on(t, ({ needs: n, compute: i }, o) => ({ name: o, needs: n ? Object.keys(n).filter((s) => n[s]) : [], compute: Md(r, o, i) })) : {};
}
function Md(e10, r, t) {
  var _a3;
  let n = (_a3 = e10 == null ? void 0 : e10[r]) == null ? void 0 : _a3.compute;
  return n ? (i) => t({ ...i, [r]: n(i) }) : t;
}
function pa(e10, r) {
  if (!r) return e10;
  let t = { ...e10 };
  for (let n of Object.values(r)) if (e10[n.name]) for (let i of n.needs) t[i] = true;
  return t;
}
function da(e10, r) {
  if (!r) return e10;
  let t = { ...e10 };
  for (let n of Object.values(r)) if (!e10[n.name]) for (let i of n.needs) delete t[i];
  return t;
}
var Dn = class {
  constructor(r, t) {
    __publicField(this, "computedFieldsCache", new we());
    __publicField(this, "modelExtensionsCache", new we());
    __publicField(this, "queryCallbacksCache", new we());
    __publicField(this, "clientExtensions", ot(() => {
      var _a3, _b2;
      return this.extension.client ? { ...(_a3 = this.previous) == null ? void 0 : _a3.getAllClientExtensions(), ...this.extension.client } : (_b2 = this.previous) == null ? void 0 : _b2.getAllClientExtensions();
    }));
    __publicField(this, "batchCallbacks", ot(() => {
      var _a3, _b2;
      let r = ((_a3 = this.previous) == null ? void 0 : _a3.getAllBatchQueryCallbacks()) ?? [], t = (_b2 = this.extension.query) == null ? void 0 : _b2.$__internalBatch;
      return t ? r.concat(t) : r;
    }));
    this.extension = r;
    this.previous = t;
  }
  getAllComputedFields(r) {
    return this.computedFieldsCache.getOrCreate(r, () => {
      var _a3;
      return ca((_a3 = this.previous) == null ? void 0 : _a3.getAllComputedFields(r), this.extension, r);
    });
  }
  getAllClientExtensions() {
    return this.clientExtensions.get();
  }
  getAllModelExtensions(r) {
    return this.modelExtensionsCache.getOrCreate(r, () => {
      var _a3, _b2;
      let t = Te(r);
      return !this.extension.model || !(this.extension.model[t] || this.extension.model.$allModels) ? (_a3 = this.previous) == null ? void 0 : _a3.getAllModelExtensions(r) : { ...(_b2 = this.previous) == null ? void 0 : _b2.getAllModelExtensions(r), ...this.extension.model.$allModels, ...this.extension.model[t] };
    });
  }
  getAllQueryCallbacks(r, t) {
    return this.queryCallbacksCache.getOrCreate(`${r}:${t}`, () => {
      var _a3;
      let n = ((_a3 = this.previous) == null ? void 0 : _a3.getAllQueryCallbacks(r, t)) ?? [], i = [], o = this.extension.query;
      return !o || !(o[r] || o.$allModels || o[t] || o.$allOperations) ? n : (o[r] !== void 0 && (o[r][t] !== void 0 && i.push(o[r][t]), o[r].$allOperations !== void 0 && i.push(o[r].$allOperations)), r !== "$none" && o.$allModels !== void 0 && (o.$allModels[t] !== void 0 && i.push(o.$allModels[t]), o.$allModels.$allOperations !== void 0 && i.push(o.$allModels.$allOperations)), o[t] !== void 0 && i.push(o[t]), o.$allOperations !== void 0 && i.push(o.$allOperations), n.concat(i));
    });
  }
  getAllBatchQueryCallbacks() {
    return this.batchCallbacks.get();
  }
}, Nr = class e7 {
  constructor(r) {
    this.head = r;
  }
  static empty() {
    return new e7();
  }
  static single(r) {
    return new e7(new Dn(r));
  }
  isEmpty() {
    return this.head === void 0;
  }
  append(r) {
    return new e7(new Dn(r, this.head));
  }
  getAllComputedFields(r) {
    var _a3;
    return (_a3 = this.head) == null ? void 0 : _a3.getAllComputedFields(r);
  }
  getAllClientExtensions() {
    var _a3;
    return (_a3 = this.head) == null ? void 0 : _a3.getAllClientExtensions();
  }
  getAllModelExtensions(r) {
    var _a3;
    return (_a3 = this.head) == null ? void 0 : _a3.getAllModelExtensions(r);
  }
  getAllQueryCallbacks(r, t) {
    var _a3;
    return ((_a3 = this.head) == null ? void 0 : _a3.getAllQueryCallbacks(r, t)) ?? [];
  }
  getAllBatchQueryCallbacks() {
    var _a3;
    return ((_a3 = this.head) == null ? void 0 : _a3.getAllBatchQueryCallbacks()) ?? [];
  }
};
var On = class {
  constructor(r) {
    this.name = r;
  }
};
function ma(e10) {
  return e10 instanceof On;
}
var fa = Symbol(), ft = class {
  constructor(r) {
    if (r !== fa) throw new Error("Skip instance can not be constructed directly");
  }
  ifUndefined(r) {
    return r === void 0 ? Qi : r;
  }
}, Qi = new ft(fa);
function Se(e10) {
  return e10 instanceof ft;
}
var qd = { findUnique: "findUnique", findUniqueOrThrow: "findUniqueOrThrow", findFirst: "findFirst", findFirstOrThrow: "findFirstOrThrow", findMany: "findMany", count: "aggregate", create: "createOne", createMany: "createMany", createManyAndReturn: "createManyAndReturn", update: "updateOne", updateMany: "updateMany", updateManyAndReturn: "updateManyAndReturn", upsert: "upsertOne", delete: "deleteOne", deleteMany: "deleteMany", executeRaw: "executeRaw", queryRaw: "queryRaw", aggregate: "aggregate", groupBy: "groupBy", runCommandRaw: "runCommandRaw", findRaw: "findRaw", aggregateRaw: "aggregateRaw" }, ga = "explicitly `undefined` values are not allowed";
function Ji({ modelName: e10, action: r, args: t, runtimeDataModel: n, extensions: i = Nr.empty(), callsite: o, clientMethod: s, errorFormat: a, clientVersion: l, previewFeatures: u, globalOmit: c }) {
  let p = new Wi({ runtimeDataModel: n, modelName: e10, action: r, rootArgs: t, callsite: o, extensions: i, selectionPath: [], argumentPath: [], originalMethod: s, errorFormat: a, clientVersion: l, previewFeatures: u, globalOmit: c });
  return { modelName: e10, action: qd[r], query: gt(t, p) };
}
function gt({ select: e10, include: r, ...t } = {}, n) {
  let i = t.omit;
  return delete t.omit, { arguments: ya(t, n), selection: Vd(e10, r, i, n) };
}
function Vd(e10, r, t, n) {
  return e10 ? (r ? n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "include", secondField: "select", selectionPath: n.getSelectionPath() }) : t && n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "omit", secondField: "select", selectionPath: n.getSelectionPath() }), Gd(e10, n)) : jd(n, r, t);
}
function jd(e10, r, t) {
  let n = {};
  return e10.modelOrType && !e10.isRawAction() && (n.$composites = true, n.$scalars = true), r && Bd(n, r, e10), Ud(n, t, e10), n;
}
function Bd(e10, r, t) {
  for (let [n, i] of Object.entries(r)) {
    if (Se(i)) continue;
    let o = t.nestSelection(n);
    if (Ki(i, o), i === false || i === void 0) {
      e10[n] = false;
      continue;
    }
    let s = t.findField(n);
    if (s && s.kind !== "object" && t.throwValidationError({ kind: "IncludeOnScalar", selectionPath: t.getSelectionPath().concat(n), outputType: t.getOutputTypeDescription() }), s) {
      e10[n] = gt(i === true ? {} : i, o);
      continue;
    }
    if (i === true) {
      e10[n] = true;
      continue;
    }
    e10[n] = gt(i, o);
  }
}
function Ud(e10, r, t) {
  let n = t.getComputedFields(), i = { ...t.getGlobalOmit(), ...r }, o = da(i, n);
  for (let [s, a] of Object.entries(o)) {
    if (Se(a)) continue;
    Ki(a, t.nestSelection(s));
    let l = t.findField(s);
    (n == null ? void 0 : n[s]) && !l || (e10[s] = !a);
  }
}
function Gd(e10, r) {
  let t = {}, n = r.getComputedFields(), i = pa(e10, n);
  for (let [o, s] of Object.entries(i)) {
    if (Se(s)) continue;
    let a = r.nestSelection(o);
    Ki(s, a);
    let l = r.findField(o);
    if (!((n == null ? void 0 : n[o]) && !l)) {
      if (s === false || s === void 0 || Se(s)) {
        t[o] = false;
        continue;
      }
      if (s === true) {
        (l == null ? void 0 : l.kind) === "object" ? t[o] = gt({}, a) : t[o] = true;
        continue;
      }
      t[o] = gt(s, a);
    }
  }
  return t;
}
function ha(e10, r) {
  if (e10 === null) return null;
  if (typeof e10 == "string" || typeof e10 == "number" || typeof e10 == "boolean") return e10;
  if (typeof e10 == "bigint") return { $type: "BigInt", value: String(e10) };
  if (vr(e10)) {
    if (ln(e10)) return { $type: "DateTime", value: e10.toISOString() };
    r.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: r.getSelectionPath(), argumentPath: r.getArgumentPath(), argument: { name: r.getArgumentName(), typeNames: ["Date"] }, underlyingError: "Provided Date object is invalid" });
  }
  if (ma(e10)) return { $type: "Param", value: e10.name };
  if (kr(e10)) return { $type: "FieldRef", value: { _ref: e10.name, _container: e10.modelName } };
  if (Array.isArray(e10)) return Qd(e10, r);
  if (ArrayBuffer.isView(e10)) {
    let { buffer: t, byteOffset: n, byteLength: i } = e10;
    return { $type: "Bytes", value: Buffer.from(t, n, i).toString("base64") };
  }
  if (Wd(e10)) return e10.values;
  if (Sr(e10)) return { $type: "Decimal", value: e10.toFixed() };
  if (e10 instanceof Fe) {
    if (e10 !== Bi.instances[e10._getName()]) throw new Error("Invalid ObjectEnumValue");
    return { $type: "Enum", value: e10._getName() };
  }
  if (Jd(e10)) return e10.toJSON();
  if (typeof e10 == "object") return ya(e10, r);
  r.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: r.getSelectionPath(), argumentPath: r.getArgumentPath(), argument: { name: r.getArgumentName(), typeNames: [] }, underlyingError: `We could not serialize ${Object.prototype.toString.call(e10)} value. Serialize the object to JSON or implement a ".toJSON()" method on it` });
}
function ya(e10, r) {
  if (e10.$type) return { $type: "Raw", value: e10 };
  let t = {};
  for (let n in e10) {
    let i = e10[n], o = r.nestArgument(n);
    Se(i) || (i !== void 0 ? t[n] = ha(i, o) : r.isPreviewFeatureOn("strictUndefinedChecks") && r.throwValidationError({ kind: "InvalidArgumentValue", argumentPath: o.getArgumentPath(), selectionPath: r.getSelectionPath(), argument: { name: r.getArgumentName(), typeNames: [] }, underlyingError: ga }));
  }
  return t;
}
function Qd(e10, r) {
  let t = [];
  for (let n = 0; n < e10.length; n++) {
    let i = r.nestArgument(String(n)), o = e10[n];
    if (o === void 0 || Se(o)) {
      let s = o === void 0 ? "undefined" : "Prisma.skip";
      r.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: i.getSelectionPath(), argumentPath: i.getArgumentPath(), argument: { name: `${r.getArgumentName()}[${n}]`, typeNames: [] }, underlyingError: `Can not use \`${s}\` value within array. Use \`null\` or filter out \`${s}\` values` });
    }
    t.push(ha(o, i));
  }
  return t;
}
function Wd(e10) {
  return typeof e10 == "object" && e10 !== null && e10.__prismaRawParameters__ === true;
}
function Jd(e10) {
  return typeof e10 == "object" && e10 !== null && typeof e10.toJSON == "function";
}
function Ki(e10, r) {
  e10 === void 0 && r.isPreviewFeatureOn("strictUndefinedChecks") && r.throwValidationError({ kind: "InvalidSelectionValue", selectionPath: r.getSelectionPath(), underlyingError: ga });
}
var Wi = class e8 {
  constructor(r) {
    __publicField(this, "modelOrType");
    this.params = r;
    this.params.modelName && (this.modelOrType = this.params.runtimeDataModel.models[this.params.modelName] ?? this.params.runtimeDataModel.types[this.params.modelName]);
  }
  throwValidationError(r) {
    In({ errors: [r], originalMethod: this.params.originalMethod, args: this.params.rootArgs ?? {}, callsite: this.params.callsite, errorFormat: this.params.errorFormat, clientVersion: this.params.clientVersion, globalOmit: this.params.globalOmit });
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
    if (!(!this.params.modelName || !this.modelOrType)) return { name: this.params.modelName, fields: this.modelOrType.fields.map((r) => ({ name: r.name, typeName: "boolean", isRelation: r.kind === "object" })) };
  }
  isRawAction() {
    return ["executeRaw", "queryRaw", "runCommandRaw", "findRaw", "aggregateRaw"].includes(this.params.action);
  }
  isPreviewFeatureOn(r) {
    return this.params.previewFeatures.includes(r);
  }
  getComputedFields() {
    if (this.params.modelName) return this.params.extensions.getAllComputedFields(this.params.modelName);
  }
  findField(r) {
    var _a3;
    return (_a3 = this.modelOrType) == null ? void 0 : _a3.fields.find((t) => t.name === r);
  }
  nestSelection(r) {
    let t = this.findField(r), n = (t == null ? void 0 : t.kind) === "object" ? t.type : void 0;
    return new e8({ ...this.params, modelName: n, selectionPath: this.params.selectionPath.concat(r) });
  }
  getGlobalOmit() {
    var _a3;
    return this.params.modelName && this.shouldApplyGlobalOmit() ? ((_a3 = this.params.globalOmit) == null ? void 0 : _a3[Qe(this.params.modelName)]) ?? {} : {};
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
        sr(this.params.action, "Unknown action");
    }
  }
  nestArgument(r) {
    return new e8({ ...this.params, argumentPath: this.params.argumentPath.concat(r) });
  }
};
function ba(e10) {
  if (!e10._hasPreviewFlag("metrics")) throw new X("`metrics` preview feature must be enabled in order to access metrics API", { clientVersion: e10._clientVersion });
}
var ht = class {
  constructor(r) {
    __publicField(this, "_client");
    this._client = r;
  }
  prometheus(r) {
    return ba(this._client), this._client._engine.metrics({ format: "prometheus", ...r });
  }
  json(r) {
    return ba(this._client), this._client._engine.metrics({ format: "json", ...r });
  }
};
var Yi = /* @__PURE__ */ new WeakMap(), kn = "$$PrismaTypedSql", yt = class {
  constructor(r, t) {
    Yi.set(this, { sql: r, values: t }), Object.defineProperty(this, kn, { value: kn });
  }
  get sql() {
    return Yi.get(this).sql;
  }
  get values() {
    return Yi.get(this).values;
  }
};
function _n(e10) {
  return e10 != null && e10[kn] === kn;
}
var Zl = le(gi());
var se = class e9 {
  constructor(r, t) {
    if (r.length - 1 !== t.length) throw r.length === 0 ? new TypeError("Expected at least 1 string") : new TypeError(`Expected ${r.length} strings to have ${r.length - 1} values`);
    let n = t.reduce((s, a) => s + (a instanceof e9 ? a.values.length : 1), 0);
    this.values = new Array(n), this.strings = new Array(n + 1), this.strings[0] = r[0];
    let i = 0, o = 0;
    for (; i < t.length; ) {
      let s = t[i++], a = r[i];
      if (s instanceof e9) {
        this.strings[o] += s.strings[0];
        let l = 0;
        for (; l < s.values.length; ) this.values[o++] = s.values[l++], this.strings[o] = s.strings[l];
        this.strings[o] += a;
      } else this.values[o++] = s, this.strings[o] = a;
    }
  }
  get sql() {
    let r = this.strings.length, t = 1, n = this.strings[0];
    for (; t < r; ) n += `?${this.strings[t++]}`;
    return n;
  }
  get statement() {
    let r = this.strings.length, t = 1, n = this.strings[0];
    for (; t < r; ) n += `:${t}${this.strings[t++]}`;
    return n;
  }
  get text() {
    let r = this.strings.length, t = 1, n = this.strings[0];
    for (; t < r; ) n += `$${t}${this.strings[t++]}`;
    return n;
  }
  inspect() {
    return { sql: this.sql, statement: this.statement, text: this.text, values: this.values };
  }
};
function Ea(e10) {
  return new se([e10], []);
}
Ea("");
function bt(e10) {
  return { getKeys() {
    return Object.keys(e10);
  }, getPropertyValue(r) {
    return e10[r];
  } };
}
function ee(e10, r) {
  return { getKeys() {
    return [e10];
  }, getPropertyValue() {
    return r();
  } };
}
function ar(e10) {
  let r = new we();
  return { getKeys() {
    return e10.getKeys();
  }, getPropertyValue(t) {
    return r.getOrCreate(t, () => e10.getPropertyValue(t));
  }, getPropertyDescriptor(t) {
    var _a3;
    return (_a3 = e10.getPropertyDescriptor) == null ? void 0 : _a3.call(e10, t);
  } };
}
var Nn = { enumerable: true, configurable: true, writable: true };
function Ln(e10) {
  let r = new Set(e10);
  return { getPrototypeOf: () => Object.prototype, getOwnPropertyDescriptor: () => Nn, has: (t, n) => r.has(n), set: (t, n, i) => r.add(n) && Reflect.set(t, n, i), ownKeys: () => [...r] };
}
var xa = Symbol.for("nodejs.util.inspect.custom");
function he(e10, r) {
  let t = Xd(r), n = /* @__PURE__ */ new Set(), i = new Proxy(e10, { get(o, s) {
    if (n.has(s)) return o[s];
    let a = t.get(s);
    return a ? a.getPropertyValue(s) : o[s];
  }, has(o, s) {
    var _a3;
    if (n.has(s)) return true;
    let a = t.get(s);
    return a ? ((_a3 = a.has) == null ? void 0 : _a3.call(a, s)) ?? true : Reflect.has(o, s);
  }, ownKeys(o) {
    let s = va(Reflect.ownKeys(o), t), a = va(Array.from(t.keys()), t);
    return [.../* @__PURE__ */ new Set([...s, ...a, ...n])];
  }, set(o, s, a) {
    var _a3, _b2, _c3;
    return ((_c3 = (_b2 = (_a3 = t.get(s)) == null ? void 0 : _a3.getPropertyDescriptor) == null ? void 0 : _b2.call(_a3, s)) == null ? void 0 : _c3.writable) === false ? false : (n.add(s), Reflect.set(o, s, a));
  }, getOwnPropertyDescriptor(o, s) {
    let a = Reflect.getOwnPropertyDescriptor(o, s);
    if (a && !a.configurable) return a;
    let l = t.get(s);
    return l ? l.getPropertyDescriptor ? { ...Nn, ...l == null ? void 0 : l.getPropertyDescriptor(s) } : Nn : a;
  }, defineProperty(o, s, a) {
    return n.add(s), Reflect.defineProperty(o, s, a);
  }, getPrototypeOf: () => Object.prototype });
  return i[xa] = function() {
    let o = { ...this };
    return delete o[xa], o;
  }, i;
}
function Xd(e10) {
  let r = /* @__PURE__ */ new Map();
  for (let t of e10) {
    let n = t.getKeys();
    for (let i of n) r.set(i, t);
  }
  return r;
}
function va(e10, r) {
  return e10.filter((t) => {
    var _a3, _b2;
    return ((_b2 = (_a3 = r.get(t)) == null ? void 0 : _a3.has) == null ? void 0 : _b2.call(_a3, t)) ?? true;
  });
}
function Lr(e10) {
  return { getKeys() {
    return e10;
  }, has() {
    return false;
  }, getPropertyValue() {
  } };
}
function Fr(e10, r) {
  return { batch: e10, transaction: (r == null ? void 0 : r.kind) === "batch" ? { isolationLevel: r.options.isolationLevel } : void 0 };
}
function Pa(e10) {
  if (e10 === void 0) return "";
  let r = _r(e10);
  return new Ar(0, { colors: Tn }).write(r).toString();
}
var em = "P2037";
function Mr({ error: e10, user_facing_error: r }, t, n) {
  return r.error_code ? new Z(rm(r, n), { code: r.error_code, clientVersion: t, meta: r.meta, batchRequestIdx: r.batch_request_idx }) : new q(e10, { clientVersion: t, batchRequestIdx: r.batch_request_idx });
}
function rm(e10, r) {
  let t = e10.message;
  return (r === "postgresql" || r === "postgres" || r === "mysql") && e10.error_code === em && (t += `
Prisma Accelerate has built-in connection pooling to prevent such errors: https://pris.ly/client/error-accelerate`), t;
}
var Et = "<unknown>";
function Ta(e10) {
  var r = e10.split(`
`);
  return r.reduce(function(t, n) {
    var i = im(n) || sm(n) || um(n) || mm(n) || pm(n);
    return i && t.push(i), t;
  }, []);
}
var tm = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|rsc|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, nm = /\((\S*)(?::(\d+))(?::(\d+))\)/;
function im(e10) {
  var r = tm.exec(e10);
  if (!r) return null;
  var t = r[2] && r[2].indexOf("native") === 0, n = r[2] && r[2].indexOf("eval") === 0, i = nm.exec(r[2]);
  return n && i != null && (r[2] = i[1], r[3] = i[2], r[4] = i[3]), { file: t ? null : r[2], methodName: r[1] || Et, arguments: t ? [r[2]] : [], lineNumber: r[3] ? +r[3] : null, column: r[4] ? +r[4] : null };
}
var om = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|rsc|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function sm(e10) {
  var r = om.exec(e10);
  return r ? { file: r[2], methodName: r[1] || Et, arguments: [], lineNumber: +r[3], column: r[4] ? +r[4] : null } : null;
}
var am = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|rsc|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i, lm = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
function um(e10) {
  var r = am.exec(e10);
  if (!r) return null;
  var t = r[3] && r[3].indexOf(" > eval") > -1, n = lm.exec(r[3]);
  return t && n != null && (r[3] = n[1], r[4] = n[2], r[5] = null), { file: r[3], methodName: r[1] || Et, arguments: r[2] ? r[2].split(",") : [], lineNumber: r[4] ? +r[4] : null, column: r[5] ? +r[5] : null };
}
var cm = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
function pm(e10) {
  var r = cm.exec(e10);
  return r ? { file: r[3], methodName: r[1] || Et, arguments: [], lineNumber: +r[4], column: r[5] ? +r[5] : null } : null;
}
var dm = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function mm(e10) {
  var r = dm.exec(e10);
  return r ? { file: r[2], methodName: r[1] || Et, arguments: [], lineNumber: +r[3], column: r[4] ? +r[4] : null } : null;
}
var zi = class {
  getLocation() {
    return null;
  }
}, Zi = class {
  constructor() {
    __publicField(this, "_error");
    this._error = new Error();
  }
  getLocation() {
    let r = this._error.stack;
    if (!r) return null;
    let n = Ta(r).find((i) => {
      if (!i.file) return false;
      let o = Si(i.file);
      return o !== "<anonymous>" && !o.includes("@prisma") && !o.includes("/packages/client/src/runtime/") && !o.endsWith("/runtime/binary.js") && !o.endsWith("/runtime/library.js") && !o.endsWith("/runtime/edge.js") && !o.endsWith("/runtime/edge-esm.js") && !o.startsWith("internal/") && !i.methodName.includes("new ") && !i.methodName.includes("getCallSite") && !i.methodName.includes("Proxy.") && i.methodName.split(".").length < 4;
    });
    return !n || !n.file ? null : { fileName: n.file, lineNumber: n.lineNumber, columnNumber: n.column };
  }
};
function Ze(e10) {
  return e10 === "minimal" ? typeof $EnabledCallSite == "function" && e10 !== "minimal" ? new $EnabledCallSite() : new zi() : new Zi();
}
var Sa = { _avg: true, _count: true, _sum: true, _min: true, _max: true };
function $r(e10 = {}) {
  let r = gm(e10);
  return Object.entries(r).reduce((n, [i, o]) => (Sa[i] !== void 0 ? n.select[i] = { select: o } : n[i] = o, n), { select: {} });
}
function gm(e10 = {}) {
  return typeof e10._count == "boolean" ? { ...e10, _count: { _all: e10._count } } : e10;
}
function Fn(e10 = {}) {
  return (r) => (typeof e10._count == "boolean" && (r._count = r._count._all), r);
}
function Ra(e10, r) {
  let t = Fn(e10);
  return r({ action: "aggregate", unpacker: t, argsMapper: $r })(e10);
}
function hm(e10 = {}) {
  let { select: r, ...t } = e10;
  return typeof r == "object" ? $r({ ...t, _count: r }) : $r({ ...t, _count: { _all: true } });
}
function ym(e10 = {}) {
  return typeof e10.select == "object" ? (r) => Fn(e10)(r)._count : (r) => Fn(e10)(r)._count._all;
}
function Aa(e10, r) {
  return r({ action: "count", unpacker: ym(e10), argsMapper: hm })(e10);
}
function bm(e10 = {}) {
  let r = $r(e10);
  if (Array.isArray(r.by)) for (let t of r.by) typeof t == "string" && (r.select[t] = true);
  else typeof r.by == "string" && (r.select[r.by] = true);
  return r;
}
function Em(e10 = {}) {
  return (r) => (typeof (e10 == null ? void 0 : e10._count) == "boolean" && r.forEach((t) => {
    t._count = t._count._all;
  }), r);
}
function Ca(e10, r) {
  return r({ action: "groupBy", unpacker: Em(e10), argsMapper: bm })(e10);
}
function Ia(e10, r, t) {
  if (r === "aggregate") return (n) => Ra(n, t);
  if (r === "count") return (n) => Aa(n, t);
  if (r === "groupBy") return (n) => Ca(n, t);
}
function Da(e10, r) {
  let t = r.fields.filter((i) => !i.relationName), n = As(t, "name");
  return new Proxy({}, { get(i, o) {
    if (o in i || typeof o == "symbol") return i[o];
    let s = n[o];
    if (s) return new ut(e10, o, s.type, s.isList, s.kind === "enum");
  }, ...Ln(Object.keys(n)) });
}
var Oa = (e10) => Array.isArray(e10) ? e10 : e10.split("."), Xi = (e10, r) => Oa(r).reduce((t, n) => t && t[n], e10), ka = (e10, r, t) => Oa(r).reduceRight((n, i, o, s) => Object.assign({}, Xi(e10, s.slice(0, o)), { [i]: n }), t);
function wm(e10, r) {
  return e10 === void 0 || r === void 0 ? [] : [...r, "select", e10];
}
function xm(e10, r, t) {
  return r === void 0 ? e10 ?? {} : ka(r, t, e10 || true);
}
function eo(e10, r, t, n, i, o) {
  let a = e10._runtimeDataModel.models[r].fields.reduce((l, u) => ({ ...l, [u.name]: u }), {});
  return (l) => {
    let u = Ze(e10._errorFormat), c = wm(n, i), p = xm(l, o, c), d = t({ dataPath: c, callsite: u })(p), f = vm(e10, r);
    return new Proxy(d, { get(h, g) {
      if (!f.includes(g)) return h[g];
      let T = [a[g].type, t, g], S = [c, p];
      return eo(e10, ...T, ...S);
    }, ...Ln([...f, ...Object.getOwnPropertyNames(d)]) });
  };
}
function vm(e10, r) {
  return e10._runtimeDataModel.models[r].fields.filter((t) => t.kind === "object").map((t) => t.name);
}
var Pm = ["findUnique", "findUniqueOrThrow", "findFirst", "findFirstOrThrow", "create", "update", "upsert", "delete"], Tm = ["aggregate", "count", "groupBy"];
function ro(e10, r) {
  let t = e10._extensions.getAllModelExtensions(r) ?? {}, n = [Sm(e10, r), Am(e10, r), bt(t), ee("name", () => r), ee("$name", () => r), ee("$parent", () => e10._appliedParent)];
  return he({}, n);
}
function Sm(e10, r) {
  let t = Te(r), n = Object.keys(Rr).concat("count");
  return { getKeys() {
    return n;
  }, getPropertyValue(i) {
    let o = i, s = (a) => (l) => {
      let u = Ze(e10._errorFormat);
      return e10._createPrismaPromise((c) => {
        let p = { args: l, dataPath: [], action: o, model: r, clientMethod: `${t}.${i}`, jsModelName: t, transaction: c, callsite: u };
        return e10._request({ ...p, ...a });
      }, { action: o, args: l, model: r });
    };
    return Pm.includes(o) ? eo(e10, r, s) : Rm(i) ? Ia(e10, i, s) : s({});
  } };
}
function Rm(e10) {
  return Tm.includes(e10);
}
function Am(e10, r) {
  return ar(ee("fields", () => {
    let t = e10._runtimeDataModel.models[r];
    return Da(r, t);
  }));
}
function _a$2(e10) {
  return e10.replace(/^./, (r) => r.toUpperCase());
}
var to = Symbol();
function wt(e10) {
  let r = [Cm(e10), Im(e10), ee(to, () => e10), ee("$parent", () => e10._appliedParent)], t = e10._extensions.getAllClientExtensions();
  return t && r.push(bt(t)), he(e10, r);
}
function Cm(e10) {
  let r = Object.getPrototypeOf(e10._originalClient), t = [...new Set(Object.getOwnPropertyNames(r))];
  return { getKeys() {
    return t;
  }, getPropertyValue(n) {
    return e10[n];
  } };
}
function Im(e10) {
  let r = Object.keys(e10._runtimeDataModel.models), t = r.map(Te), n = [...new Set(r.concat(t))];
  return ar({ getKeys() {
    return n;
  }, getPropertyValue(i) {
    let o = _a$2(i);
    if (e10._runtimeDataModel.models[o] !== void 0) return ro(e10, o);
    if (e10._runtimeDataModel.models[i] !== void 0) return ro(e10, i);
  }, getPropertyDescriptor(i) {
    if (!t.includes(i)) return { enumerable: false };
  } });
}
function Na(e10) {
  return e10[to] ? e10[to] : e10;
}
function La(e10) {
  var _a3;
  if (typeof e10 == "function") return e10(this);
  if ((_a3 = e10.client) == null ? void 0 : _a3.__AccelerateEngine) {
    let t = e10.client.__AccelerateEngine;
    this._originalClient._engine = new t(this._originalClient._accelerateEngineConfig);
  }
  let r = Object.create(this._originalClient, { _extensions: { value: this._extensions.append(e10) }, _appliedParent: { value: this, configurable: true }, $on: { value: void 0 } });
  return wt(r);
}
function Fa({ result: e10, modelName: r, select: t, omit: n, extensions: i }) {
  let o = i.getAllComputedFields(r);
  if (!o) return e10;
  let s = [], a = [];
  for (let l of Object.values(o)) {
    if (n) {
      if (n[l.name]) continue;
      let u = l.needs.filter((c) => n[c]);
      u.length > 0 && a.push(Lr(u));
    } else if (t) {
      if (!t[l.name]) continue;
      let u = l.needs.filter((c) => !t[c]);
      u.length > 0 && a.push(Lr(u));
    }
    Dm(e10, l.needs) && s.push(Om(l, he(e10, s)));
  }
  return s.length > 0 || a.length > 0 ? he(e10, [...s, ...a]) : e10;
}
function Dm(e10, r) {
  return r.every((t) => Oi(e10, t));
}
function Om(e10, r) {
  return ar(ee(e10.name, () => e10.compute(r)));
}
function Mn({ visitor: e10, result: r, args: t, runtimeDataModel: n, modelName: i }) {
  if (Array.isArray(r)) {
    for (let s = 0; s < r.length; s++) r[s] = Mn({ result: r[s], args: t, modelName: i, runtimeDataModel: n, visitor: e10 });
    return r;
  }
  let o = e10(r, i, t) ?? r;
  return t.include && Ma({ includeOrSelect: t.include, result: o, parentModelName: i, runtimeDataModel: n, visitor: e10 }), t.select && Ma({ includeOrSelect: t.select, result: o, parentModelName: i, runtimeDataModel: n, visitor: e10 }), o;
}
function Ma({ includeOrSelect: e10, result: r, parentModelName: t, runtimeDataModel: n, visitor: i }) {
  for (let [o, s] of Object.entries(e10)) {
    if (!s || r[o] == null || Se(s)) continue;
    let l = n.models[t].fields.find((c) => c.name === o);
    if (!l || l.kind !== "object" || !l.relationName) continue;
    let u = typeof s == "object" ? s : {};
    r[o] = Mn({ visitor: i, result: r[o], args: u, modelName: l.type, runtimeDataModel: n });
  }
}
function $a({ result: e10, modelName: r, args: t, extensions: n, runtimeDataModel: i, globalOmit: o }) {
  return n.isEmpty() || e10 == null || typeof e10 != "object" || !i.models[r] ? e10 : Mn({ result: e10, args: t ?? {}, modelName: r, runtimeDataModel: i, visitor: (a, l, u) => {
    let c = Te(l);
    return Fa({ result: a, modelName: c, select: u.select, omit: u.select ? void 0 : { ...o == null ? void 0 : o[c], ...u.omit }, extensions: n });
  } });
}
var km = ["$connect", "$disconnect", "$on", "$transaction", "$extends"], qa = km;
function Va(e10) {
  if (e10 instanceof se) return _m(e10);
  if (_n(e10)) return Nm(e10);
  if (Array.isArray(e10)) {
    let t = [e10[0]];
    for (let n = 1; n < e10.length; n++) t[n] = xt(e10[n]);
    return t;
  }
  let r = {};
  for (let t in e10) r[t] = xt(e10[t]);
  return r;
}
function _m(e10) {
  return new se(e10.strings, e10.values);
}
function Nm(e10) {
  return new yt(e10.sql, e10.values);
}
function xt(e10) {
  if (typeof e10 != "object" || e10 == null || e10 instanceof Fe || kr(e10)) return e10;
  if (Sr(e10)) return new Ye(e10.toFixed());
  if (vr(e10)) return /* @__PURE__ */ new Date(+e10);
  if (ArrayBuffer.isView(e10)) return e10.slice(0);
  if (Array.isArray(e10)) {
    let r = e10.length, t;
    for (t = Array(r); r--; ) t[r] = xt(e10[r]);
    return t;
  }
  if (typeof e10 == "object") {
    let r = {};
    for (let t in e10) t === "__proto__" ? Object.defineProperty(r, t, { value: xt(e10[t]), configurable: true, enumerable: true, writable: true }) : r[t] = xt(e10[t]);
    return r;
  }
  sr(e10, "Unknown value");
}
function Ba(e10, r, t, n = 0) {
  return e10._createPrismaPromise((i) => {
    var _a3;
    let o = r.customDataProxyFetch;
    return "transaction" in r && i !== void 0 && (((_a3 = r.transaction) == null ? void 0 : _a3.kind) === "batch" && r.transaction.lock.then(), r.transaction = i), n === t.length ? e10._executeRequest(r) : t[n]({ model: r.model, operation: r.model ? r.action : r.clientMethod, args: Va(r.args ?? {}), __internalParams: r, query: (s, a = r) => {
      let l = a.customDataProxyFetch;
      return a.customDataProxyFetch = Wa(o, l), a.args = s, Ba(e10, a, t, n + 1);
    } });
  });
}
function Ua(e10, r) {
  let { jsModelName: t, action: n, clientMethod: i } = r, o = t ? n : i;
  if (e10._extensions.isEmpty()) return e10._executeRequest(r);
  let s = e10._extensions.getAllQueryCallbacks(t ?? "$none", o);
  return Ba(e10, r, s);
}
function Ga(e10) {
  return (r) => {
    let t = { requests: r }, n = r[0].extensions.getAllBatchQueryCallbacks();
    return n.length ? Qa(t, n, 0, e10) : e10(t);
  };
}
function Qa(e10, r, t, n) {
  if (t === r.length) return n(e10);
  let i = e10.customDataProxyFetch, o = e10.requests[0].transaction;
  return r[t]({ args: { queries: e10.requests.map((s) => ({ model: s.modelName, operation: s.action, args: s.args })), transaction: o ? { isolationLevel: o.kind === "batch" ? o.isolationLevel : void 0 } : void 0 }, __internalParams: e10, query(s, a = e10) {
    let l = a.customDataProxyFetch;
    return a.customDataProxyFetch = Wa(i, l), Qa(a, r, t + 1, n);
  } });
}
var ja = (e10) => e10;
function Wa(e10 = ja, r = ja) {
  return (t) => e10(r(t));
}
var Ja = L("prisma:client"), Ka = { Vercel: "vercel", "Netlify CI": "netlify" };
function Ha({ postinstall: e10, ciName: r, clientVersion: t, generator: n }) {
  if (Ja("checkPlatformCaching:postinstall", e10), Ja("checkPlatformCaching:ciName", r), e10 === true && !((n == null ? void 0 : n.output) && typeof (n.output.fromEnvVar ?? n.output.value) == "string") && r && r in Ka) {
    let i = `Prisma has detected that this project was built on ${r}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${Ka[r]}-build`;
    throw console.error(i), new P(i, t);
  }
}
function Ya(e10, r) {
  return e10 ? e10.datasources ? e10.datasources : e10.datasourceUrl ? { [r[0]]: { url: e10.datasourceUrl } } : {} : {};
}
function $n(e10) {
  let { runtimeBinaryTarget: r } = e10;
  return `Add "${r}" to \`binaryTargets\` in the "schema.prisma" file and run \`prisma generate\` after saving it:

${Lm(e10)}`;
}
function Lm(e10) {
  let { generator: r, generatorBinaryTargets: t, runtimeBinaryTarget: n } = e10, i = { fromEnvVar: null, value: n }, o = [...t, i];
  return vi({ ...r, binaryTargets: o });
}
function Xe(e10) {
  let { runtimeBinaryTarget: r } = e10;
  return `Prisma Client could not locate the Query Engine for runtime "${r}".`;
}
function er(e10) {
  let { searchedLocations: r } = e10;
  return `The following locations have been searched:
${[...new Set(r)].map((i) => `  ${i}`).join(`
`)}`;
}
function za(e10) {
  let { runtimeBinaryTarget: r } = e10;
  return `${Xe(e10)}

This happened because \`binaryTargets\` have been pinned, but the actual deployment also required "${r}".
${$n(e10)}

${er(e10)}`;
}
function qn(e10) {
  return `We would appreciate if you could take the time to share some information with us.
Please help us by answering a few questions: https://pris.ly/${e10}`;
}
function Vn(e10) {
  let { errorStack: r } = e10;
  return (r == null ? void 0 : r.match(/\/\.next|\/next@|\/next\//)) ? `

We detected that you are using Next.js, learn how to fix this: https://pris.ly/d/engine-not-found-nextjs.` : "";
}
function Za(e10) {
  let { queryEngineName: r } = e10;
  return `${Xe(e10)}${Vn(e10)}

This is likely caused by a bundler that has not copied "${r}" next to the resulting bundle.
Ensure that "${r}" has been copied next to the bundle or in "${e10.expectedLocation}".

${qn("engine-not-found-bundler-investigation")}

${er(e10)}`;
}
function Xa(e10) {
  let { runtimeBinaryTarget: r, generatorBinaryTargets: t } = e10, n = t.find((i) => i.native);
  return `${Xe(e10)}

This happened because Prisma Client was generated for "${(n == null ? void 0 : n.value) ?? "unknown"}", but the actual deployment required "${r}".
${$n(e10)}

${er(e10)}`;
}
function el(e10) {
  let { queryEngineName: r } = e10;
  return `${Xe(e10)}${Vn(e10)}

This is likely caused by tooling that has not copied "${r}" to the deployment folder.
Ensure that you ran \`prisma generate\` and that "${r}" has been copied to "${e10.expectedLocation}".

${qn("engine-not-found-tooling-investigation")}

${er(e10)}`;
}
var Mm = L("prisma:client:engines:resolveEnginePath"), $m = () => new RegExp("runtime[\\\\/]library\\.m?js$");
async function rl(e10, r) {
  var _a3;
  let t = { binary: process$1.env.PRISMA_QUERY_ENGINE_BINARY, library: process$1.env.PRISMA_QUERY_ENGINE_LIBRARY }[e10] ?? r.prismaPath;
  if (t !== void 0) return t;
  let { enginePath: n, searchedLocations: i } = await qm(e10, r);
  if (Mm("enginePath", n), n !== void 0) return r.prismaPath = n;
  let o = await nr(), s = ((_a3 = r.generator) == null ? void 0 : _a3.binaryTargets) ?? [], a = s.some((d) => d.native), l = !s.some((d) => d.value === o), u = __filename$1.match($m()) === null, c = { searchedLocations: i, generatorBinaryTargets: s, generator: r.generator, runtimeBinaryTarget: o, queryEngineName: tl(e10, o), expectedLocation: path__default.relative(process$1.cwd(), r.dirname), errorStack: new Error().stack }, p;
  throw a && l ? p = Xa(c) : l ? p = za(c) : u ? p = Za(c) : p = el(c), new P(p, r.clientVersion);
}
async function qm(e10, r) {
  var _a3, _b2;
  let t = await nr(), n = [], i = [r.dirname, path__default.resolve(__dirname, ".."), ((_b2 = (_a3 = r.generator) == null ? void 0 : _a3.output) == null ? void 0 : _b2.value) ?? __dirname, path__default.resolve(__dirname, "../../../.prisma/client"), "/tmp/prisma-engines", r.cwd];
  __filename$1.includes("resolveEnginePath") && i.push(ss());
  for (let o of i) {
    let s = tl(e10, t), a = path__default.join(o, s);
    if (n.push(o), Ci.existsSync(a)) return { enginePath: a, searchedLocations: n };
  }
  return { enginePath: void 0, searchedLocations: n };
}
function tl(e10, r) {
  return Vt(r);
}
function nl(e10) {
  return e10 ? e10.replace(/".*"/g, '"X"').replace(/[\s:\[]([+-]?([0-9]*[.])?[0-9]+)/g, (r) => `${r[0]}5`) : "";
}
function il(e10) {
  return e10.split(`
`).map((r) => r.replace(/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)\s*/, "").replace(/\+\d+\s*ms$/, "")).join(`
`);
}
var ol = le(Ss());
function sl({ title: e10, user: r = "prisma", repo: t = "prisma", template: n = "bug_report.yml", body: i }) {
  return (0, ol.default)({ user: r, repo: t, template: n, title: e10, body: i });
}
function al({ version: e10, binaryTarget: r, title: t, description: n, engineVersion: i, database: o, query: s }) {
  var _a3;
  let a = Mo(6e3 - ((s == null ? void 0 : s.length) ?? 0)), l = il(xr(a)), u = n ? `# Description
\`\`\`
${n}
\`\`\`` : "", c = xr(`Hi Prisma Team! My Prisma Client just crashed. This is the report:
## Versions

| Name            | Version            |
|-----------------|--------------------|
| Node            | ${(_a3 = process$1.version) == null ? void 0 : _a3.padEnd(19)}| 
| OS              | ${r == null ? void 0 : r.padEnd(19)}|
| Prisma Client   | ${e10 == null ? void 0 : e10.padEnd(19)}|
| Query Engine    | ${i == null ? void 0 : i.padEnd(19)}|
| Database        | ${o == null ? void 0 : o.padEnd(19)}|

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
${s ? nl(s) : ""}
\`\`\`
`), p = sl({ title: t, body: c });
  return `${t}

This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

${H(p)}

If you want the Prisma team to look into it, please open the link above 🙏
To increase the chance of success, please post your schema and a snippet of
how you used Prisma Client in the issue. 
`;
}
function ll(e10, r) {
  throw new Error(r);
}
function Vm(e10) {
  return e10 !== null && typeof e10 == "object" && typeof e10.$type == "string";
}
function jm(e10, r) {
  let t = {};
  for (let n of Object.keys(e10)) t[n] = r(e10[n], n);
  return t;
}
function vt(e10) {
  return e10 === null ? e10 : Array.isArray(e10) ? e10.map(vt) : typeof e10 == "object" ? Vm(e10) ? Bm(e10) : e10.constructor !== null && e10.constructor.name !== "Object" ? e10 : jm(e10, vt) : e10;
}
function Bm({ $type: e10, value: r }) {
  switch (e10) {
    case "BigInt":
      return BigInt(r);
    case "Bytes": {
      let { buffer: t, byteOffset: n, byteLength: i } = Buffer.from(r, "base64");
      return new Uint8Array(t, n, i);
    }
    case "DateTime":
      return new Date(r);
    case "Decimal":
      return new Le(r);
    case "Json":
      return JSON.parse(r);
    default:
      ll(r, "Unknown tagged value");
  }
}
var ul = "6.19.3";
var Gm = () => {
  var _a3, _b2;
  return ((_b2 = (_a3 = globalThis.process) == null ? void 0 : _a3.release) == null ? void 0 : _b2.name) === "node";
}, Qm = () => {
  var _a3, _b2;
  return !!globalThis.Bun || !!((_b2 = (_a3 = globalThis.process) == null ? void 0 : _a3.versions) == null ? void 0 : _b2.bun);
}, Wm = () => !!globalThis.Deno, Jm = () => typeof globalThis.Netlify == "object", Km = () => typeof globalThis.EdgeRuntime == "object", Hm = () => {
  var _a3;
  return ((_a3 = globalThis.navigator) == null ? void 0 : _a3.userAgent) === "Cloudflare-Workers";
};
function Ym() {
  return [[Jm, "netlify"], [Km, "edge-light"], [Hm, "workerd"], [Wm, "deno"], [Qm, "bun"], [Gm, "node"]].flatMap((t) => t[0]() ? [t[1]] : []).at(0) ?? "";
}
var zm = { node: "Node.js", workerd: "Cloudflare Workers", deno: "Deno and Deno Deploy", netlify: "Netlify Edge Functions", "edge-light": "Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)" };
function no() {
  let e10 = Ym();
  return { id: e10, prettyName: zm[e10] || e10, isEdge: ["workerd", "deno", "netlify", "edge-light"].includes(e10) };
}
function qr({ inlineDatasources: e10, overrideDatasources: r, env: t, clientVersion: n }) {
  var _a3, _b2;
  let i, o = Object.keys(e10)[0], s = (_a3 = e10[o]) == null ? void 0 : _a3.url, a = (_b2 = r[o]) == null ? void 0 : _b2.url;
  if (o === void 0 ? i = void 0 : a ? i = a : (s == null ? void 0 : s.value) ? i = s.value : (s == null ? void 0 : s.fromEnvVar) && (i = t[s.fromEnvVar]), (s == null ? void 0 : s.fromEnvVar) !== void 0 && i === void 0) throw new P(`error: Environment variable not found: ${s.fromEnvVar}.`, n);
  if (i === void 0) throw new P("error: Missing URL environment variable, value, or override.", n);
  return i;
}
var Bn = class extends Error {
  constructor(r, t) {
    super(r);
    __publicField(this, "clientVersion");
    __publicField(this, "cause");
    this.clientVersion = t.clientVersion, this.cause = t.cause;
  }
  get [Symbol.toStringTag]() {
    return this.name;
  }
};
var ne = class extends Bn {
  constructor(r, t) {
    super(r, t);
    __publicField(this, "isRetryable");
    this.isRetryable = t.isRetryable ?? true;
  }
};
function R(e10, r) {
  return { ...e10, isRetryable: r };
}
var lr = class extends ne {
  constructor(r, t) {
    super(r, R(t, false));
    __publicField(this, "name", "InvalidDatasourceError");
    __publicField(this, "code", "P6001");
  }
};
x(lr, "InvalidDatasourceError");
function cl(e10) {
  let r = { clientVersion: e10.clientVersion }, t = Object.keys(e10.inlineDatasources)[0], n = qr({ inlineDatasources: e10.inlineDatasources, overrideDatasources: e10.overrideDatasources, clientVersion: e10.clientVersion, env: { ...e10.env, ...typeof process$1 < "u" ? process$1.env : {} } }), i;
  try {
    i = new URL(n);
  } catch {
    throw new lr(`Error validating datasource \`${t}\`: the URL must start with the protocol \`prisma://\``, r);
  }
  let { protocol: o, searchParams: s } = i;
  if (o !== "prisma:" && o !== Xt) throw new lr(`Error validating datasource \`${t}\`: the URL must start with the protocol \`prisma://\` or \`prisma+postgres://\``, r);
  let a = s.get("api_key");
  if (a === null || a.length < 1) throw new lr(`Error validating datasource \`${t}\`: the URL must contain a valid API key`, r);
  let l = Ei(i) ? "http:" : "https:";
  process$1.env.TEST_CLIENT_ENGINE_REMOTE_EXECUTOR && i.searchParams.has("use_http") && (l = "http:");
  let u = new URL(i.href.replace(o, l));
  return { apiKey: a, url: u };
}
var pl = le(Zt()), Un = (_F = class {
  constructor({ apiKey: r, tracingHelper: t, logLevel: n, logQueries: i, engineHash: o }) {
    __privateAdd(this, _Un_instances);
    __publicField(this, "apiKey");
    __publicField(this, "tracingHelper");
    __publicField(this, "logLevel");
    __publicField(this, "logQueries");
    __publicField(this, "engineHash");
    this.apiKey = r, this.tracingHelper = t, this.logLevel = n, this.logQueries = i, this.engineHash = o;
  }
  build({ traceparent: r, transactionId: t } = {}) {
    let n = { Accept: "application/json", Authorization: `Bearer ${this.apiKey}`, "Content-Type": "application/json", "Prisma-Engine-Hash": this.engineHash, "Prisma-Engine-Version": pl.enginesVersion };
    this.tracingHelper.isEnabled() && (n.traceparent = r ?? this.tracingHelper.getTraceParent()), t && (n["X-Transaction-Id"] = t);
    let i = __privateMethod(this, _Un_instances, e_fn).call(this);
    return i.length > 0 && (n["X-Capture-Telemetry"] = i.join(", ")), n;
  }
}, _Un_instances = new WeakSet(), e_fn = function() {
  let r = [];
  return this.tracingHelper.isEnabled() && r.push("tracing"), this.logLevel && r.push(this.logLevel), this.logQueries && r.push("query"), r;
}, _F);
function Zm(e10) {
  return e10[0] * 1e3 + e10[1] / 1e6;
}
function io(e10) {
  return new Date(Zm(e10));
}
var Vr = class extends ne {
  constructor(r) {
    super("This request must be retried", R(r, true));
    __publicField(this, "name", "ForcedRetryError");
    __publicField(this, "code", "P5001");
  }
};
x(Vr, "ForcedRetryError");
var ur = class extends ne {
  constructor(r, t) {
    super(r, R(t, false));
    __publicField(this, "name", "NotImplementedYetError");
    __publicField(this, "code", "P5004");
  }
};
x(ur, "NotImplementedYetError");
var F = class extends ne {
  constructor(r, t) {
    super(r, t);
    __publicField(this, "response");
    this.response = t.response;
    let n = this.response.headers.get("prisma-request-id");
    if (n) {
      let i = `(The request id was: ${n})`;
      this.message = this.message + " " + i;
    }
  }
};
var cr = class extends F {
  constructor(r) {
    super("Schema needs to be uploaded", R(r, true));
    __publicField(this, "name", "SchemaMissingError");
    __publicField(this, "code", "P5005");
  }
};
x(cr, "SchemaMissingError");
var oo = "This request could not be understood by the server", Pt = class extends F {
  constructor(r, t, n) {
    super(t || oo, R(r, false));
    __publicField(this, "name", "BadRequestError");
    __publicField(this, "code", "P5000");
    n && (this.code = n);
  }
};
x(Pt, "BadRequestError");
var Tt = class extends F {
  constructor(r, t) {
    super("Engine not started: healthcheck timeout", R(r, true));
    __publicField(this, "name", "HealthcheckTimeoutError");
    __publicField(this, "code", "P5013");
    __publicField(this, "logs");
    this.logs = t;
  }
};
x(Tt, "HealthcheckTimeoutError");
var St = class extends F {
  constructor(r, t, n) {
    super(t, R(r, true));
    __publicField(this, "name", "EngineStartupError");
    __publicField(this, "code", "P5014");
    __publicField(this, "logs");
    this.logs = n;
  }
};
x(St, "EngineStartupError");
var Rt = class extends F {
  constructor(r) {
    super("Engine version is not supported", R(r, false));
    __publicField(this, "name", "EngineVersionNotSupportedError");
    __publicField(this, "code", "P5012");
  }
};
x(Rt, "EngineVersionNotSupportedError");
var so = "Request timed out", At = class extends F {
  constructor(r, t = so) {
    super(t, R(r, false));
    __publicField(this, "name", "GatewayTimeoutError");
    __publicField(this, "code", "P5009");
  }
};
x(At, "GatewayTimeoutError");
var Xm = "Interactive transaction error", Ct = class extends F {
  constructor(r, t = Xm) {
    super(t, R(r, false));
    __publicField(this, "name", "InteractiveTransactionError");
    __publicField(this, "code", "P5015");
  }
};
x(Ct, "InteractiveTransactionError");
var ef = "Request parameters are invalid", It = class extends F {
  constructor(r, t = ef) {
    super(t, R(r, false));
    __publicField(this, "name", "InvalidRequestError");
    __publicField(this, "code", "P5011");
  }
};
x(It, "InvalidRequestError");
var ao = "Requested resource does not exist", Dt = class extends F {
  constructor(r, t = ao) {
    super(t, R(r, false));
    __publicField(this, "name", "NotFoundError");
    __publicField(this, "code", "P5003");
  }
};
x(Dt, "NotFoundError");
var lo = "Unknown server error", jr = class extends F {
  constructor(r, t, n) {
    super(t || lo, R(r, true));
    __publicField(this, "name", "ServerError");
    __publicField(this, "code", "P5006");
    __publicField(this, "logs");
    this.logs = n;
  }
};
x(jr, "ServerError");
var uo = "Unauthorized, check your connection string", Ot = class extends F {
  constructor(r, t = uo) {
    super(t, R(r, false));
    __publicField(this, "name", "UnauthorizedError");
    __publicField(this, "code", "P5007");
  }
};
x(Ot, "UnauthorizedError");
var co = "Usage exceeded, retry again later", kt = class extends F {
  constructor(r, t = co) {
    super(t, R(r, true));
    __publicField(this, "name", "UsageExceededError");
    __publicField(this, "code", "P5008");
  }
};
x(kt, "UsageExceededError");
async function rf(e10) {
  let r;
  try {
    r = await e10.text();
  } catch {
    return { type: "EmptyError" };
  }
  try {
    let t = JSON.parse(r);
    if (typeof t == "string") switch (t) {
      case "InternalDataProxyError":
        return { type: "DataProxyError", body: t };
      default:
        return { type: "UnknownTextError", body: t };
    }
    if (typeof t == "object" && t !== null) {
      if ("is_panic" in t && "message" in t && "error_code" in t) return { type: "QueryEngineError", body: t };
      if ("EngineNotStarted" in t || "InteractiveTransactionMisrouted" in t || "InvalidRequestError" in t) {
        let n = Object.values(t)[0].reason;
        return typeof n == "string" && !["SchemaMissing", "EngineVersionNotSupported"].includes(n) ? { type: "UnknownJsonError", body: t } : { type: "DataProxyError", body: t };
      }
    }
    return { type: "UnknownJsonError", body: t };
  } catch {
    return r === "" ? { type: "EmptyError" } : { type: "UnknownTextError", body: r };
  }
}
async function _t(e10, r) {
  if (e10.ok) return;
  let t = { clientVersion: r, response: e10 }, n = await rf(e10);
  if (n.type === "QueryEngineError") throw new Z(n.body.message, { code: n.body.error_code, clientVersion: r });
  if (n.type === "DataProxyError") {
    if (n.body === "InternalDataProxyError") throw new jr(t, "Internal Data Proxy error");
    if ("EngineNotStarted" in n.body) {
      if (n.body.EngineNotStarted.reason === "SchemaMissing") return new cr(t);
      if (n.body.EngineNotStarted.reason === "EngineVersionNotSupported") throw new Rt(t);
      if ("EngineStartupError" in n.body.EngineNotStarted.reason) {
        let { msg: i, logs: o } = n.body.EngineNotStarted.reason.EngineStartupError;
        throw new St(t, i, o);
      }
      if ("KnownEngineStartupError" in n.body.EngineNotStarted.reason) {
        let { msg: i, error_code: o } = n.body.EngineNotStarted.reason.KnownEngineStartupError;
        throw new P(i, r, o);
      }
      if ("HealthcheckTimeout" in n.body.EngineNotStarted.reason) {
        let { logs: i } = n.body.EngineNotStarted.reason.HealthcheckTimeout;
        throw new Tt(t, i);
      }
    }
    if ("InteractiveTransactionMisrouted" in n.body) {
      let i = { IDParseError: "Could not parse interactive transaction ID", NoQueryEngineFoundError: "Could not find Query Engine for the specified host and transaction ID", TransactionStartError: "Could not start interactive transaction" };
      throw new Ct(t, i[n.body.InteractiveTransactionMisrouted.reason]);
    }
    if ("InvalidRequestError" in n.body) throw new It(t, n.body.InvalidRequestError.reason);
  }
  if (e10.status === 401 || e10.status === 403) throw new Ot(t, Br(uo, n));
  if (e10.status === 404) return new Dt(t, Br(ao, n));
  if (e10.status === 429) throw new kt(t, Br(co, n));
  if (e10.status === 504) throw new At(t, Br(so, n));
  if (e10.status >= 500) throw new jr(t, Br(lo, n));
  if (e10.status >= 400) throw new Pt(t, Br(oo, n));
}
function Br(e10, r) {
  return r.type === "EmptyError" ? e10 : `${e10}: ${JSON.stringify(r)}`;
}
function dl(e10) {
  let r = Math.pow(2, e10) * 50, t = Math.ceil(Math.random() * r) - Math.ceil(r / 2), n = r + t;
  return new Promise((i) => setTimeout(() => i(n), n));
}
var Me = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function ml(e10) {
  let r = new TextEncoder().encode(e10), t = "", n = r.byteLength, i = n % 3, o = n - i, s, a, l, u, c;
  for (let p = 0; p < o; p = p + 3) c = r[p] << 16 | r[p + 1] << 8 | r[p + 2], s = (c & 16515072) >> 18, a = (c & 258048) >> 12, l = (c & 4032) >> 6, u = c & 63, t += Me[s] + Me[a] + Me[l] + Me[u];
  return i == 1 ? (c = r[o], s = (c & 252) >> 2, a = (c & 3) << 4, t += Me[s] + Me[a] + "==") : i == 2 && (c = r[o] << 8 | r[o + 1], s = (c & 64512) >> 10, a = (c & 1008) >> 4, l = (c & 15) << 2, t += Me[s] + Me[a] + Me[l] + "="), t;
}
function fl(e10) {
  var _a3;
  if (!!((_a3 = e10.generator) == null ? void 0 : _a3.previewFeatures.some((t) => t.toLowerCase().includes("metrics")))) throw new P("The `metrics` preview feature is not yet available with Accelerate.\nPlease remove `metrics` from the `previewFeatures` in your schema.\n\nMore information about Accelerate: https://pris.ly/d/accelerate", e10.clientVersion);
}
var gl = { "@prisma/engines-version": "7.1.1-3.c2990dca591cba766e3b7ef5d9e8a84796e47ab7" };
var Nt = class extends ne {
  constructor(r, t) {
    super(`Cannot fetch data from service:
${r}`, R(t, true));
    __publicField(this, "name", "RequestError");
    __publicField(this, "code", "P5010");
  }
};
x(Nt, "RequestError");
async function pr(e10, r, t = (n) => n) {
  let { clientVersion: n, ...i } = r, o = t(fetch);
  try {
    return await o(e10, i);
  } catch (s) {
    let a = s.message ?? "Unknown error";
    throw new Nt(a, { clientVersion: n, cause: s });
  }
}
var nf = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/, hl = L("prisma:client:dataproxyEngine");
async function of(e10, r) {
  let t = gl["@prisma/engines-version"], n = r.clientVersion ?? "unknown";
  if (process$1.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION || globalThis.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION) return process$1.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION || globalThis.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION;
  if (e10.includes("accelerate") && n !== "0.0.0" && n !== "in-memory") return n;
  let [i, o] = (n == null ? void 0 : n.split("-")) ?? [];
  if (o === void 0 && nf.test(i)) return i;
  if (o !== void 0 || n === "0.0.0" || n === "in-memory") {
    let [s] = t.split("-") ?? [], [a, l, u] = s.split("."), c = sf(`<=${a}.${l}.${u}`), p = await pr(c, { clientVersion: n });
    if (!p.ok) throw new Error(`Failed to fetch stable Prisma version, unpkg.com status ${p.status} ${p.statusText}, response body: ${await p.text() || "<empty body>"}`);
    let d = await p.text();
    hl("length of body fetched from unpkg.com", d.length);
    let f;
    try {
      f = JSON.parse(d);
    } catch (h) {
      throw console.error("JSON.parse error: body fetched from unpkg.com: ", d), h;
    }
    return f.version;
  }
  throw new ur("Only `major.minor.patch` versions are supported by Accelerate.", { clientVersion: n });
}
async function yl(e10, r) {
  let t = await of(e10, r);
  return hl("version", t), t;
}
function sf(e10) {
  return encodeURI(`https://unpkg.com/prisma@${e10}/package.json`);
}
var bl = 3, Lt = L("prisma:client:dataproxyEngine"), Ft = class {
  constructor(r) {
    __publicField(this, "name", "DataProxyEngine");
    __publicField(this, "inlineSchema");
    __publicField(this, "inlineSchemaHash");
    __publicField(this, "inlineDatasources");
    __publicField(this, "config");
    __publicField(this, "logEmitter");
    __publicField(this, "env");
    __publicField(this, "clientVersion");
    __publicField(this, "engineHash");
    __publicField(this, "tracingHelper");
    __publicField(this, "remoteClientVersion");
    __publicField(this, "host");
    __publicField(this, "headerBuilder");
    __publicField(this, "startPromise");
    __publicField(this, "protocol");
    fl(r), this.config = r, this.env = r.env, this.inlineSchema = ml(r.inlineSchema), this.inlineDatasources = r.inlineDatasources, this.inlineSchemaHash = r.inlineSchemaHash, this.clientVersion = r.clientVersion, this.engineHash = r.engineVersion, this.logEmitter = r.logEmitter, this.tracingHelper = r.tracingHelper;
  }
  apiKey() {
    return this.headerBuilder.apiKey;
  }
  version() {
    return this.engineHash;
  }
  async start() {
    this.startPromise !== void 0 && await this.startPromise, this.startPromise = (async () => {
      let { apiKey: r, url: t } = this.getURLAndAPIKey();
      this.host = t.host, this.protocol = t.protocol, this.headerBuilder = new Un({ apiKey: r, tracingHelper: this.tracingHelper, logLevel: this.config.logLevel ?? "error", logQueries: this.config.logQueries, engineHash: this.engineHash }), this.remoteClientVersion = await yl(this.host, this.config), Lt("host", this.host), Lt("protocol", this.protocol);
    })(), await this.startPromise;
  }
  async stop() {
  }
  propagateResponseExtensions(r) {
    var _a3, _b2;
    ((_a3 = r == null ? void 0 : r.logs) == null ? void 0 : _a3.length) && r.logs.forEach((t) => {
      switch (t.level) {
        case "debug":
        case "trace":
          Lt(t);
          break;
        case "error":
        case "warn":
        case "info": {
          this.logEmitter.emit(t.level, { timestamp: io(t.timestamp), message: t.attributes.message ?? "", target: t.target ?? "BinaryEngine" });
          break;
        }
        case "query": {
          this.logEmitter.emit("query", { query: t.attributes.query ?? "", timestamp: io(t.timestamp), duration: t.attributes.duration_ms ?? 0, params: t.attributes.params ?? "", target: t.target ?? "BinaryEngine" });
          break;
        }
        default:
          t.level;
      }
    }), ((_b2 = r == null ? void 0 : r.traces) == null ? void 0 : _b2.length) && this.tracingHelper.dispatchEngineSpans(r.traces);
  }
  onBeforeExit() {
    throw new Error('"beforeExit" hook is not applicable to the remote query engine');
  }
  async url(r) {
    return await this.start(), `${this.protocol}//${this.host}/${this.remoteClientVersion}/${this.inlineSchemaHash}/${r}`;
  }
  async uploadSchema() {
    let r = { name: "schemaUpload", internal: true };
    return this.tracingHelper.runInChildSpan(r, async () => {
      let t = await pr(await this.url("schema"), { method: "PUT", headers: this.headerBuilder.build(), body: this.inlineSchema, clientVersion: this.clientVersion });
      t.ok || Lt("schema response status", t.status);
      let n = await _t(t, this.clientVersion);
      if (n) throw this.logEmitter.emit("warn", { message: `Error while uploading schema: ${n.message}`, timestamp: /* @__PURE__ */ new Date(), target: "" }), n;
      this.logEmitter.emit("info", { message: `Schema (re)uploaded (hash: ${this.inlineSchemaHash})`, timestamp: /* @__PURE__ */ new Date(), target: "" });
    });
  }
  request(r, { traceparent: t, interactiveTransaction: n, customDataProxyFetch: i }) {
    return this.requestInternal({ body: r, traceparent: t, interactiveTransaction: n, customDataProxyFetch: i });
  }
  async requestBatch(r, { traceparent: t, transaction: n, customDataProxyFetch: i }) {
    let o = (n == null ? void 0 : n.kind) === "itx" ? n.options : void 0, s = Fr(r, n);
    return (await this.requestInternal({ body: s, customDataProxyFetch: i, interactiveTransaction: o, traceparent: t })).map((l) => (l.extensions && this.propagateResponseExtensions(l.extensions), "errors" in l ? this.convertProtocolErrorsToClientError(l.errors) : l));
  }
  requestInternal({ body: r, traceparent: t, customDataProxyFetch: n, interactiveTransaction: i }) {
    return this.withRetry({ actionGerund: "querying", callback: async ({ logHttpCall: o }) => {
      let s = i ? `${i.payload.endpoint}/graphql` : await this.url("graphql");
      o(s);
      let a = await pr(s, { method: "POST", headers: this.headerBuilder.build({ traceparent: t, transactionId: i == null ? void 0 : i.id }), body: JSON.stringify(r), clientVersion: this.clientVersion }, n);
      a.ok || Lt("graphql response status", a.status), await this.handleError(await _t(a, this.clientVersion));
      let l = await a.json();
      if (l.extensions && this.propagateResponseExtensions(l.extensions), "errors" in l) throw this.convertProtocolErrorsToClientError(l.errors);
      return "batchResult" in l ? l.batchResult : l;
    } });
  }
  async transaction(r, t, n) {
    let i = { start: "starting", commit: "committing", rollback: "rolling back" };
    return this.withRetry({ actionGerund: `${i[r]} transaction`, callback: async ({ logHttpCall: o }) => {
      if (r === "start") {
        let s = JSON.stringify({ max_wait: n.maxWait, timeout: n.timeout, isolation_level: n.isolationLevel }), a = await this.url("transaction/start");
        o(a);
        let l = await pr(a, { method: "POST", headers: this.headerBuilder.build({ traceparent: t.traceparent }), body: s, clientVersion: this.clientVersion });
        await this.handleError(await _t(l, this.clientVersion));
        let u = await l.json(), { extensions: c } = u;
        c && this.propagateResponseExtensions(c);
        let p = u.id, d = u["data-proxy"].endpoint;
        return { id: p, payload: { endpoint: d } };
      } else {
        let s = `${n.payload.endpoint}/${r}`;
        o(s);
        let a = await pr(s, { method: "POST", headers: this.headerBuilder.build({ traceparent: t.traceparent }), clientVersion: this.clientVersion });
        await this.handleError(await _t(a, this.clientVersion));
        let l = await a.json(), { extensions: u } = l;
        u && this.propagateResponseExtensions(u);
        return;
      }
    } });
  }
  getURLAndAPIKey() {
    return cl({ clientVersion: this.clientVersion, env: this.env, inlineDatasources: this.inlineDatasources, overrideDatasources: this.config.overrideDatasources });
  }
  metrics() {
    throw new ur("Metrics are not yet supported for Accelerate", { clientVersion: this.clientVersion });
  }
  async withRetry(r) {
    for (let t = 0; ; t++) {
      let n = (i) => {
        this.logEmitter.emit("info", { message: `Calling ${i} (n=${t})`, timestamp: /* @__PURE__ */ new Date(), target: "" });
      };
      try {
        return await r.callback({ logHttpCall: n });
      } catch (i) {
        if (!(i instanceof ne) || !i.isRetryable) throw i;
        if (t >= bl) throw i instanceof Vr ? i.cause : i;
        this.logEmitter.emit("warn", { message: `Attempt ${t + 1}/${bl} failed for ${r.actionGerund}: ${i.message ?? "(unknown)"}`, timestamp: /* @__PURE__ */ new Date(), target: "" });
        let o = await dl(t);
        this.logEmitter.emit("warn", { message: `Retrying after ${o}ms`, timestamp: /* @__PURE__ */ new Date(), target: "" });
      }
    }
  }
  async handleError(r) {
    if (r instanceof cr) throw await this.uploadSchema(), new Vr({ clientVersion: this.clientVersion, cause: r });
    if (r) throw r;
  }
  convertProtocolErrorsToClientError(r) {
    return r.length === 1 ? Mr(r[0], this.config.clientVersion, this.config.activeProvider) : new q(JSON.stringify(r), { clientVersion: this.config.clientVersion });
  }
  applyPendingMigrations() {
    throw new Error("Method not implemented.");
  }
};
function El(e10) {
  if ((e10 == null ? void 0 : e10.kind) === "itx") return e10.options.id;
}
var po = Symbol("PrismaLibraryEngineCache");
function lf() {
  let e10 = globalThis;
  return e10[po] === void 0 && (e10[po] = {}), e10[po];
}
function uf(e10) {
  let r = lf();
  if (r[e10] !== void 0) return r[e10];
  let t = path__default.toNamespacedPath(e10), n = { exports: {} }, i = 0;
  return process$1.platform !== "win32" && (i = ni.constants.dlopen.RTLD_LAZY | ni.constants.dlopen.RTLD_DEEPBIND), process$1.dlopen(n, t, i), r[e10] = n.exports, n.exports;
}
var xl = { async loadLibrary(e10) {
  let r = await ii(), t = await rl("library", e10);
  try {
    return e10.tracingHelper.runInChildSpan({ name: "loadLibrary", internal: true }, () => uf(t));
  } catch (n) {
    let i = yi({ e: n, platformInfo: r, id: t });
    throw new P(i, e10.clientVersion);
  }
} };
var mo, vl = { async loadLibrary(e10) {
  let { clientVersion: r, adapter: t, engineWasm: n } = e10;
  if (t === void 0) throw new P(`The \`adapter\` option for \`PrismaClient\` is required in this context (${no().prettyName})`, r);
  if (n === void 0) throw new P("WASM engine was unexpectedly `undefined`", r);
  mo === void 0 && (mo = (async () => {
    let o = await n.getRuntime(), s = await n.getQueryEngineWasmModule();
    if (s == null) throw new P("The loaded wasm module was unexpectedly `undefined` or `null` once loaded", r);
    let a = { "./query_engine_bg.js": o }, l = new WebAssembly.Instance(s, a), u = l.exports.__wbindgen_start;
    return o.__wbg_set_wasm(l.exports), u(), o.QueryEngine;
  })());
  let i = await mo;
  return { debugPanic() {
    return Promise.reject("{}");
  }, dmmf() {
    return Promise.resolve("{}");
  }, version() {
    return { commit: "unknown", version: "unknown" };
  }, QueryEngine: i };
} };
var cf = "P2036", Re = L("prisma:client:libraryEngine");
function pf(e10) {
  return e10.item_type === "query" && "query" in e10;
}
function df(e10) {
  return "level" in e10 ? e10.level === "error" && e10.message === "PANIC" : false;
}
var Pl = [...Zn, "native"], mf = 0xffffffffffffffffn, fo = 1n;
function ff() {
  let e10 = fo++;
  return fo > mf && (fo = 1n), e10;
}
var Ur = class {
  constructor(r, t) {
    __publicField(this, "name", "LibraryEngine");
    __publicField(this, "engine");
    __publicField(this, "libraryInstantiationPromise");
    __publicField(this, "libraryStartingPromise");
    __publicField(this, "libraryStoppingPromise");
    __publicField(this, "libraryStarted");
    __publicField(this, "executingQueryPromise");
    __publicField(this, "config");
    __publicField(this, "QueryEngineConstructor");
    __publicField(this, "libraryLoader");
    __publicField(this, "library");
    __publicField(this, "logEmitter");
    __publicField(this, "libQueryEnginePath");
    __publicField(this, "binaryTarget");
    __publicField(this, "datasourceOverrides");
    __publicField(this, "datamodel");
    __publicField(this, "logQueries");
    __publicField(this, "logLevel");
    __publicField(this, "lastQuery");
    __publicField(this, "loggerRustPanic");
    __publicField(this, "tracingHelper");
    __publicField(this, "adapterPromise");
    __publicField(this, "versionInfo");
    var _a3;
    this.libraryLoader = t ?? xl, r.engineWasm !== void 0 && (this.libraryLoader = t ?? vl), this.config = r, this.libraryStarted = false, this.logQueries = r.logQueries ?? false, this.logLevel = r.logLevel ?? "error", this.logEmitter = r.logEmitter, this.datamodel = r.inlineSchema, this.tracingHelper = r.tracingHelper, r.enableDebugLogs && (this.logLevel = "debug");
    let n = Object.keys(r.overrideDatasources)[0], i = (_a3 = r.overrideDatasources[n]) == null ? void 0 : _a3.url;
    n !== void 0 && i !== void 0 && (this.datasourceOverrides = { [n]: i }), this.libraryInstantiationPromise = this.instantiateLibrary();
  }
  wrapEngine(r) {
    var _a3, _b2, _c3, _d3;
    return { applyPendingMigrations: (_a3 = r.applyPendingMigrations) == null ? void 0 : _a3.bind(r), commitTransaction: this.withRequestId(r.commitTransaction.bind(r)), connect: this.withRequestId(r.connect.bind(r)), disconnect: this.withRequestId(r.disconnect.bind(r)), metrics: (_b2 = r.metrics) == null ? void 0 : _b2.bind(r), query: this.withRequestId(r.query.bind(r)), rollbackTransaction: this.withRequestId(r.rollbackTransaction.bind(r)), sdlSchema: (_c3 = r.sdlSchema) == null ? void 0 : _c3.bind(r), startTransaction: this.withRequestId(r.startTransaction.bind(r)), trace: r.trace.bind(r), free: (_d3 = r.free) == null ? void 0 : _d3.bind(r) };
  }
  withRequestId(r) {
    return async (...t) => {
      var _a3;
      let n = ff().toString();
      try {
        return await r(...t, n);
      } finally {
        if (this.tracingHelper.isEnabled()) {
          let i = await ((_a3 = this.engine) == null ? void 0 : _a3.trace(n));
          if (i) {
            let o = JSON.parse(i);
            this.tracingHelper.dispatchEngineSpans(o.spans);
          }
        }
      }
    };
  }
  async applyPendingMigrations() {
    throw new Error("Cannot call this method from this type of engine instance");
  }
  async transaction(r, t, n) {
    var _a3, _b2, _c3;
    await this.start();
    let i = await this.adapterPromise, o = JSON.stringify(t), s;
    if (r === "start") {
      let l = JSON.stringify({ max_wait: n.maxWait, timeout: n.timeout, isolation_level: n.isolationLevel });
      s = await ((_a3 = this.engine) == null ? void 0 : _a3.startTransaction(l, o));
    } else r === "commit" ? s = await ((_b2 = this.engine) == null ? void 0 : _b2.commitTransaction(n.id, o)) : r === "rollback" && (s = await ((_c3 = this.engine) == null ? void 0 : _c3.rollbackTransaction(n.id, o)));
    let a = this.parseEngineResponse(s);
    if (gf(a)) {
      let l = this.getExternalAdapterError(a, i == null ? void 0 : i.errorRegistry);
      throw l ? l.error : new Z(a.message, { code: a.error_code, clientVersion: this.config.clientVersion, meta: a.meta });
    } else if (typeof a.message == "string") throw new q(a.message, { clientVersion: this.config.clientVersion });
    return a;
  }
  async instantiateLibrary() {
    if (Re("internalSetup"), this.libraryInstantiationPromise) return this.libraryInstantiationPromise;
    zn(), this.binaryTarget = await this.getCurrentBinaryTarget(), await this.tracingHelper.runInChildSpan("load_engine", () => this.loadEngine()), this.version();
  }
  async getCurrentBinaryTarget() {
    {
      if (this.binaryTarget) return this.binaryTarget;
      let r = await this.tracingHelper.runInChildSpan("detect_platform", () => nr());
      if (!Pl.includes(r)) throw new P(`Unknown ${ue("PRISMA_QUERY_ENGINE_LIBRARY")} ${ue(Q(r))}. Possible binaryTargets: ${$e(Pl.join(", "))} or a path to the query engine library.
You may have to run ${$e("prisma generate")} for your changes to take effect.`, this.config.clientVersion);
      return r;
    }
  }
  parseEngineResponse(r) {
    if (!r) throw new q("Response from the Engine was empty", { clientVersion: this.config.clientVersion });
    try {
      return JSON.parse(r);
    } catch {
      throw new q("Unable to JSON.parse response from engine", { clientVersion: this.config.clientVersion });
    }
  }
  async loadEngine() {
    var _a3, _b2;
    if (!this.engine) {
      this.QueryEngineConstructor || (this.library = await this.libraryLoader.loadLibrary(this.config), this.QueryEngineConstructor = this.library.QueryEngine);
      try {
        let r = new WeakRef(this);
        this.adapterPromise || (this.adapterPromise = (_b2 = (_a3 = this.config.adapter) == null ? void 0 : _a3.connect()) == null ? void 0 : _b2.then(Yt));
        let t = await this.adapterPromise;
        t && Re("Using driver adapter: %O", t), this.engine = this.wrapEngine(new this.QueryEngineConstructor({ datamodel: this.datamodel, env: process$1.env, logQueries: this.config.logQueries ?? false, ignoreEnvVarErrors: true, datasourceOverrides: this.datasourceOverrides ?? {}, logLevel: this.logLevel, configDir: this.config.cwd, engineProtocol: "json", enableTracing: this.tracingHelper.isEnabled() }, (n) => {
          var _a4;
          (_a4 = r.deref()) == null ? void 0 : _a4.logger(n);
        }, t));
      } catch (r) {
        let t = r, n = this.parseInitError(t.message);
        throw typeof n == "string" ? t : new P(n.message, this.config.clientVersion, n.error_code);
      }
    }
  }
  logger(r) {
    let t = this.parseEngineResponse(r);
    t && (t.level = (t == null ? void 0 : t.level.toLowerCase()) ?? "unknown", pf(t) ? this.logEmitter.emit("query", { timestamp: /* @__PURE__ */ new Date(), query: t.query, params: t.params, duration: Number(t.duration_ms), target: t.module_path }) : df(t) ? this.loggerRustPanic = new de(go(this, `${t.message}: ${t.reason} in ${t.file}:${t.line}:${t.column}`), this.config.clientVersion) : this.logEmitter.emit(t.level, { timestamp: /* @__PURE__ */ new Date(), message: t.message, target: t.module_path }));
  }
  parseInitError(r) {
    try {
      return JSON.parse(r);
    } catch {
    }
    return r;
  }
  parseRequestError(r) {
    try {
      return JSON.parse(r);
    } catch {
    }
    return r;
  }
  onBeforeExit() {
    throw new Error('"beforeExit" hook is not applicable to the library engine since Prisma 5.0.0, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.');
  }
  async start() {
    if (this.libraryInstantiationPromise || (this.libraryInstantiationPromise = this.instantiateLibrary()), await this.libraryInstantiationPromise, await this.libraryStoppingPromise, this.libraryStartingPromise) return Re(`library already starting, this.libraryStarted: ${this.libraryStarted}`), this.libraryStartingPromise;
    if (this.libraryStarted) return;
    let r = async () => {
      var _a3, _b2, _c3;
      Re("library starting");
      try {
        let t = { traceparent: this.tracingHelper.getTraceParent() };
        await ((_a3 = this.engine) == null ? void 0 : _a3.connect(JSON.stringify(t))), this.libraryStarted = true, this.adapterPromise || (this.adapterPromise = (_c3 = (_b2 = this.config.adapter) == null ? void 0 : _b2.connect()) == null ? void 0 : _c3.then(Yt)), await this.adapterPromise, Re("library started");
      } catch (t) {
        let n = this.parseInitError(t.message);
        throw typeof n == "string" ? t : new P(n.message, this.config.clientVersion, n.error_code);
      } finally {
        this.libraryStartingPromise = void 0;
      }
    };
    return this.libraryStartingPromise = this.tracingHelper.runInChildSpan("connect", r), this.libraryStartingPromise;
  }
  async stop() {
    var _a3;
    if (await this.libraryInstantiationPromise, await this.libraryStartingPromise, await this.executingQueryPromise, this.libraryStoppingPromise) return Re("library is already stopping"), this.libraryStoppingPromise;
    if (!this.libraryStarted) {
      await ((_a3 = await this.adapterPromise) == null ? void 0 : _a3.dispose()), this.adapterPromise = void 0;
      return;
    }
    let r = async () => {
      var _a4, _b2, _c3;
      await new Promise((n) => setImmediate(n)), Re("library stopping");
      let t = { traceparent: this.tracingHelper.getTraceParent() };
      await ((_a4 = this.engine) == null ? void 0 : _a4.disconnect(JSON.stringify(t))), ((_b2 = this.engine) == null ? void 0 : _b2.free) && this.engine.free(), this.engine = void 0, this.libraryStarted = false, this.libraryStoppingPromise = void 0, this.libraryInstantiationPromise = void 0, await ((_c3 = await this.adapterPromise) == null ? void 0 : _c3.dispose()), this.adapterPromise = void 0, Re("library stopped");
    };
    return this.libraryStoppingPromise = this.tracingHelper.runInChildSpan("disconnect", r), this.libraryStoppingPromise;
  }
  version() {
    var _a3, _b2;
    return this.versionInfo = (_a3 = this.library) == null ? void 0 : _a3.version(), ((_b2 = this.versionInfo) == null ? void 0 : _b2.version) ?? "unknown";
  }
  debugPanic(r) {
    var _a3;
    return (_a3 = this.library) == null ? void 0 : _a3.debugPanic(r);
  }
  async request(r, { traceparent: t, interactiveTransaction: n }) {
    var _a3, _b2;
    Re(`sending request, this.libraryStarted: ${this.libraryStarted}`);
    let i = JSON.stringify({ traceparent: t }), o = JSON.stringify(r);
    try {
      await this.start();
      let s = await this.adapterPromise;
      this.executingQueryPromise = (_a3 = this.engine) == null ? void 0 : _a3.query(o, i, n == null ? void 0 : n.id), this.lastQuery = o;
      let a = this.parseEngineResponse(await this.executingQueryPromise);
      if (a.errors) throw a.errors.length === 1 ? this.buildQueryError(a.errors[0], s == null ? void 0 : s.errorRegistry) : new q(JSON.stringify(a.errors), { clientVersion: this.config.clientVersion });
      if (this.loggerRustPanic) throw this.loggerRustPanic;
      return { data: a };
    } catch (s) {
      if (s instanceof P) throw s;
      if (s.code === "GenericFailure" && ((_b2 = s.message) == null ? void 0 : _b2.startsWith("PANIC:"))) throw new de(go(this, s.message), this.config.clientVersion);
      let a = this.parseRequestError(s.message);
      throw typeof a == "string" ? s : new q(`${a.message}
${a.backtrace}`, { clientVersion: this.config.clientVersion });
    }
  }
  async requestBatch(r, { transaction: t, traceparent: n }) {
    var _a3;
    Re("requestBatch");
    let i = Fr(r, t);
    await this.start();
    let o = await this.adapterPromise;
    this.lastQuery = JSON.stringify(i), this.executingQueryPromise = (_a3 = this.engine) == null ? void 0 : _a3.query(this.lastQuery, JSON.stringify({ traceparent: n }), El(t));
    let s = await this.executingQueryPromise, a = this.parseEngineResponse(s);
    if (a.errors) throw a.errors.length === 1 ? this.buildQueryError(a.errors[0], o == null ? void 0 : o.errorRegistry) : new q(JSON.stringify(a.errors), { clientVersion: this.config.clientVersion });
    let { batchResult: l, errors: u } = a;
    if (Array.isArray(l)) return l.map((c) => c.errors && c.errors.length > 0 ? this.loggerRustPanic ?? this.buildQueryError(c.errors[0], o == null ? void 0 : o.errorRegistry) : { data: c });
    throw u && u.length === 1 ? new Error(u[0].error) : new Error(JSON.stringify(a));
  }
  buildQueryError(r, t) {
    if (r.user_facing_error.is_panic) return new de(go(this, r.user_facing_error.message), this.config.clientVersion);
    let n = this.getExternalAdapterError(r.user_facing_error, t);
    return n ? n.error : Mr(r, this.config.clientVersion, this.config.activeProvider);
  }
  getExternalAdapterError(r, t) {
    var _a3;
    if (r.error_code === cf && t) {
      let n = (_a3 = r.meta) == null ? void 0 : _a3.id;
      rn(typeof n == "number", "Malformed external JS error received from the engine");
      let i = t.consumeError(n);
      return rn(i, "External error with reported id was not registered"), i;
    }
  }
  async metrics(r) {
    await this.start();
    let t = await this.engine.metrics(JSON.stringify(r));
    return r.format === "prometheus" ? t : this.parseEngineResponse(t);
  }
};
function gf(e10) {
  return typeof e10 == "object" && e10 !== null && e10.error_code !== void 0;
}
function go(e10, r) {
  var _a3;
  return al({ binaryTarget: e10.binaryTarget, title: r, version: e10.config.clientVersion, engineVersion: (_a3 = e10.versionInfo) == null ? void 0 : _a3.commit, database: e10.config.activeProvider, query: e10.lastQuery });
}
function Tl({ url: e10, adapter: r, copyEngine: t, targetBuildType: n }) {
  let i = [], o = [], s = (g) => {
    i.push({ _tag: "warning", value: g });
  }, a = (g) => {
    let I = g.join(`
`);
    o.push({ _tag: "error", value: I });
  }, l = !!(e10 == null ? void 0 : e10.startsWith("prisma://")), u = en$1(e10), c = !!r, p = l || u;
  !c && t && p && n !== "client" && n !== "wasm-compiler-edge" && s(["recommend--no-engine", "In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)"]);
  let d = p || !t;
  c && (d || n === "edge") && (p ? a(["You've provided both a driver adapter and an Accelerate database URL. Driver adapters currently cannot connect to Accelerate.", "Please provide either a driver adapter with a direct database URL or an Accelerate URL and no driver adapter."]) : t || a(["Prisma Client was configured to use the `adapter` option but `prisma generate` was run with `--no-engine`.", "Please run `prisma generate` without `--no-engine` to be able to use Prisma Client with the adapter."]));
  let f = { accelerate: d, ppg: u, driverAdapters: c };
  function h(g) {
    return g.length > 0;
  }
  return h(o) ? { ok: false, diagnostics: { warnings: i, errors: o }, isUsing: f } : { ok: true, diagnostics: { warnings: i }, isUsing: f };
}
function Sl({ copyEngine: e10 = true }, r) {
  let t;
  try {
    t = qr({ inlineDatasources: r.inlineDatasources, overrideDatasources: r.overrideDatasources, env: { ...r.env, ...process$1.env }, clientVersion: r.clientVersion });
  } catch {
  }
  let { ok: n, isUsing: i, diagnostics: o } = Tl({ url: t, adapter: r.adapter, copyEngine: e10, targetBuildType: "library" });
  for (let p of o.warnings) sn(...p.value);
  if (!n) {
    let p = o.errors[0];
    throw new X(p.value, { clientVersion: r.clientVersion });
  }
  let s = wr(r.generator), a = s === "library";
  return i.accelerate ? new Ft(r) : a ? new Ur(r) : new Ur(r);
}
function Rl({ generator: e10 }) {
  return (e10 == null ? void 0 : e10.previewFeatures) ?? [];
}
var Al = (e10) => ({ command: e10 });
var Cl = (e10) => e10.strings.reduce((r, t, n) => `${r}@P${n}${t}`);
function Gr(e10) {
  try {
    return Il(e10, "fast");
  } catch {
    return Il(e10, "slow");
  }
}
function Il(e10, r) {
  return JSON.stringify(e10.map((t) => Ol(t, r)));
}
function Ol(e10, r) {
  if (Array.isArray(e10)) return e10.map((t) => Ol(t, r));
  if (typeof e10 == "bigint") return { prisma__type: "bigint", prisma__value: e10.toString() };
  if (vr(e10)) return { prisma__type: "date", prisma__value: e10.toJSON() };
  if (Ye.isDecimal(e10)) return { prisma__type: "decimal", prisma__value: e10.toJSON() };
  if (Buffer.isBuffer(e10)) return { prisma__type: "bytes", prisma__value: e10.toString("base64") };
  if (hf(e10)) return { prisma__type: "bytes", prisma__value: Buffer.from(e10).toString("base64") };
  if (ArrayBuffer.isView(e10)) {
    let { buffer: t, byteOffset: n, byteLength: i } = e10;
    return { prisma__type: "bytes", prisma__value: Buffer.from(t, n, i).toString("base64") };
  }
  return typeof e10 == "object" && r === "slow" ? kl(e10) : e10;
}
function hf(e10) {
  return e10 instanceof ArrayBuffer || e10 instanceof SharedArrayBuffer ? true : typeof e10 == "object" && e10 !== null ? e10[Symbol.toStringTag] === "ArrayBuffer" || e10[Symbol.toStringTag] === "SharedArrayBuffer" : false;
}
function kl(e10) {
  if (typeof e10 != "object" || e10 === null) return e10;
  if (typeof e10.toJSON == "function") return e10.toJSON();
  if (Array.isArray(e10)) return e10.map(Dl);
  let r = {};
  for (let t of Object.keys(e10)) r[t] = Dl(e10[t]);
  return r;
}
function Dl(e10) {
  return typeof e10 == "bigint" ? e10.toString() : kl(e10);
}
var yf = /^(\s*alter\s)/i, _l = L("prisma:client");
function ho(e10, r, t, n) {
  if (!(e10 !== "postgresql" && e10 !== "cockroachdb") && t.length > 0 && yf.exec(r)) throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
}
var yo = ({ clientMethod: e10, activeProvider: r }) => (t) => {
  let n = "", i;
  if (_n(t)) n = t.sql, i = { values: Gr(t.values), __prismaRawParameters__: true };
  else if (Array.isArray(t)) {
    let [o, ...s] = t;
    n = o, i = { values: Gr(s || []), __prismaRawParameters__: true };
  } else switch (r) {
    case "sqlite":
    case "mysql": {
      n = t.sql, i = { values: Gr(t.values), __prismaRawParameters__: true };
      break;
    }
    case "cockroachdb":
    case "postgresql":
    case "postgres": {
      n = t.text, i = { values: Gr(t.values), __prismaRawParameters__: true };
      break;
    }
    case "sqlserver": {
      n = Cl(t), i = { values: Gr(t.values), __prismaRawParameters__: true };
      break;
    }
    default:
      throw new Error(`The ${r} provider does not support ${e10}`);
  }
  return (i == null ? void 0 : i.values) ? _l(`prisma.${e10}(${n}, ${i.values})`) : _l(`prisma.${e10}(${n})`), { query: n, parameters: i };
}, Nl = { requestArgsToMiddlewareArgs(e10) {
  return [e10.strings, ...e10.values];
}, middlewareArgsToRequestArgs(e10) {
  let [r, ...t] = e10;
  return new se(r, t);
} }, Ll = { requestArgsToMiddlewareArgs(e10) {
  return [e10];
}, middlewareArgsToRequestArgs(e10) {
  return e10[0];
} };
function bo(e10) {
  return function(t, n) {
    let i, o = (s = e10) => {
      try {
        return s === void 0 || (s == null ? void 0 : s.kind) === "itx" ? i ?? (i = Fl(t(s))) : Fl(t(s));
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
function Fl(e10) {
  return typeof e10.then == "function" ? e10 : Promise.resolve(e10);
}
var bf = di.split(".")[0], Ef = { isEnabled() {
  return false;
}, getTraceParent() {
  return "00-10-10-00";
}, dispatchEngineSpans() {
}, getActiveContext() {
}, runInChildSpan(e10, r) {
  return r();
} }, Eo = class {
  isEnabled() {
    return this.getGlobalTracingHelper().isEnabled();
  }
  getTraceParent(r) {
    return this.getGlobalTracingHelper().getTraceParent(r);
  }
  dispatchEngineSpans(r) {
    return this.getGlobalTracingHelper().dispatchEngineSpans(r);
  }
  getActiveContext() {
    return this.getGlobalTracingHelper().getActiveContext();
  }
  runInChildSpan(r, t) {
    return this.getGlobalTracingHelper().runInChildSpan(r, t);
  }
  getGlobalTracingHelper() {
    let r = globalThis[`V${bf}_PRISMA_INSTRUMENTATION`], t = globalThis.PRISMA_INSTRUMENTATION;
    return (r == null ? void 0 : r.helper) ?? (t == null ? void 0 : t.helper) ?? Ef;
  }
};
function Ml() {
  return new Eo();
}
function $l(e10, r = () => {
}) {
  let t, n = new Promise((i) => t = i);
  return { then(i) {
    return --e10 === 0 && t(r()), i == null ? void 0 : i(n);
  } };
}
function ql(e10) {
  return typeof e10 == "string" ? e10 : e10.reduce((r, t) => {
    let n = typeof t == "string" ? t : t.level;
    return n === "query" ? r : r && (t === "info" || r === "info") ? "info" : n;
  }, void 0);
}
function Gn(e10) {
  return typeof e10.batchRequestIdx == "number";
}
function Vl(e10) {
  if (e10.action !== "findUnique" && e10.action !== "findUniqueOrThrow") return;
  let r = [];
  return e10.modelName && r.push(e10.modelName), e10.query.arguments && r.push(wo(e10.query.arguments)), r.push(wo(e10.query.selection)), r.join("");
}
function wo(e10) {
  return `(${Object.keys(e10).sort().map((t) => {
    let n = e10[t];
    return typeof n == "object" && n !== null ? `(${t} ${wo(n)})` : t;
  }).join(" ")})`;
}
var wf = { aggregate: false, aggregateRaw: false, createMany: true, createManyAndReturn: true, createOne: true, deleteMany: true, deleteOne: true, executeRaw: true, findFirst: false, findFirstOrThrow: false, findMany: false, findRaw: false, findUnique: false, findUniqueOrThrow: false, groupBy: false, queryRaw: false, runCommandRaw: true, updateMany: true, updateManyAndReturn: true, updateOne: true, upsertOne: true };
function xo(e10) {
  return wf[e10];
}
var Qn = class {
  constructor(r) {
    __publicField(this, "batches");
    __publicField(this, "tickActive", false);
    this.options = r;
    this.batches = {};
  }
  request(r) {
    let t = this.options.batchBy(r);
    return t ? (this.batches[t] || (this.batches[t] = [], this.tickActive || (this.tickActive = true, process$1.nextTick(() => {
      this.dispatchBatches(), this.tickActive = false;
    }))), new Promise((n, i) => {
      this.batches[t].push({ request: r, resolve: n, reject: i });
    })) : this.options.singleLoader(r);
  }
  dispatchBatches() {
    for (let r in this.batches) {
      let t = this.batches[r];
      delete this.batches[r], t.length === 1 ? this.options.singleLoader(t[0].request).then((n) => {
        n instanceof Error ? t[0].reject(n) : t[0].resolve(n);
      }).catch((n) => {
        t[0].reject(n);
      }) : (t.sort((n, i) => this.options.batchOrder(n.request, i.request)), this.options.batchLoader(t.map((n) => n.request)).then((n) => {
        if (n instanceof Error) for (let i = 0; i < t.length; i++) t[i].reject(n);
        else for (let i = 0; i < t.length; i++) {
          let o = n[i];
          o instanceof Error ? t[i].reject(o) : t[i].resolve(o);
        }
      }).catch((n) => {
        for (let i = 0; i < t.length; i++) t[i].reject(n);
      }));
    }
  }
  get [Symbol.toStringTag]() {
    return "DataLoader";
  }
};
function dr(e10, r) {
  if (r === null) return r;
  switch (e10) {
    case "bigint":
      return BigInt(r);
    case "bytes": {
      let { buffer: t, byteOffset: n, byteLength: i } = Buffer.from(r, "base64");
      return new Uint8Array(t, n, i);
    }
    case "decimal":
      return new Ye(r);
    case "datetime":
    case "date":
      return new Date(r);
    case "time":
      return /* @__PURE__ */ new Date(`1970-01-01T${r}Z`);
    case "bigint-array":
      return r.map((t) => dr("bigint", t));
    case "bytes-array":
      return r.map((t) => dr("bytes", t));
    case "decimal-array":
      return r.map((t) => dr("decimal", t));
    case "datetime-array":
      return r.map((t) => dr("datetime", t));
    case "date-array":
      return r.map((t) => dr("date", t));
    case "time-array":
      return r.map((t) => dr("time", t));
    default:
      return r;
  }
}
function vo(e10) {
  let r = [], t = xf(e10);
  for (let n = 0; n < e10.rows.length; n++) {
    let i = e10.rows[n], o = { ...t };
    for (let s = 0; s < i.length; s++) o[e10.columns[s]] = dr(e10.types[s], i[s]);
    r.push(o);
  }
  return r;
}
function xf(e10) {
  let r = {};
  for (let t = 0; t < e10.columns.length; t++) r[e10.columns[t]] = null;
  return r;
}
var vf = L("prisma:client:request_handler"), Wn = class {
  constructor(r, t) {
    __publicField(this, "client");
    __publicField(this, "dataloader");
    __publicField(this, "logEmitter");
    this.logEmitter = t, this.client = r, this.dataloader = new Qn({ batchLoader: Ga(async ({ requests: n, customDataProxyFetch: i }) => {
      let { transaction: o, otelParentCtx: s } = n[0], a = n.map((p) => p.protocolQuery), l = this.client._tracingHelper.getTraceParent(s), u = n.some((p) => xo(p.protocolQuery.action));
      return (await this.client._engine.requestBatch(a, { traceparent: l, transaction: Pf(o), containsWrite: u, customDataProxyFetch: i })).map((p, d) => {
        if (p instanceof Error) return p;
        try {
          return this.mapQueryEngineResult(n[d], p);
        } catch (f) {
          return f;
        }
      });
    }), singleLoader: async (n) => {
      var _a3;
      let i = ((_a3 = n.transaction) == null ? void 0 : _a3.kind) === "itx" ? jl(n.transaction) : void 0, o = await this.client._engine.request(n.protocolQuery, { traceparent: this.client._tracingHelper.getTraceParent(), interactiveTransaction: i, isWrite: xo(n.protocolQuery.action), customDataProxyFetch: n.customDataProxyFetch });
      return this.mapQueryEngineResult(n, o);
    }, batchBy: (n) => {
      var _a3;
      return ((_a3 = n.transaction) == null ? void 0 : _a3.id) ? `transaction-${n.transaction.id}` : Vl(n.protocolQuery);
    }, batchOrder(n, i) {
      var _a3, _b2;
      return ((_a3 = n.transaction) == null ? void 0 : _a3.kind) === "batch" && ((_b2 = i.transaction) == null ? void 0 : _b2.kind) === "batch" ? n.transaction.index - i.transaction.index : 0;
    } });
  }
  async request(r) {
    try {
      return await this.dataloader.request(r);
    } catch (t) {
      let { clientMethod: n, callsite: i, transaction: o, args: s, modelName: a } = r;
      this.handleAndLogRequestError({ error: t, clientMethod: n, callsite: i, transaction: o, args: s, modelName: a, globalOmit: r.globalOmit });
    }
  }
  mapQueryEngineResult({ dataPath: r, unpacker: t }, n) {
    let i = n == null ? void 0 : n.data, o = this.unpack(i, r, t);
    return process$1.env.PRISMA_CLIENT_GET_TIME ? { data: o } : o;
  }
  handleAndLogRequestError(r) {
    try {
      this.handleRequestError(r);
    } catch (t) {
      throw this.logEmitter && this.logEmitter.emit("error", { message: t.message, target: r.clientMethod, timestamp: /* @__PURE__ */ new Date() }), t;
    }
  }
  handleRequestError({ error: r, clientMethod: t, callsite: n, transaction: i, args: o, modelName: s, globalOmit: a }) {
    if (vf(r), Tf(r, i)) throw r;
    if (r instanceof Z && Sf(r)) {
      let u = Bl(r.meta);
      In({ args: o, errors: [u], callsite: n, errorFormat: this.client._errorFormat, originalMethod: t, clientVersion: this.client._clientVersion, globalOmit: a });
    }
    let l = r.message;
    if (n && (l = wn({ callsite: n, originalMethod: t, isPanic: r.isPanic, showColors: this.client._errorFormat === "pretty", message: l })), l = this.sanitizeMessage(l), r.code) {
      let u = s ? { modelName: s, ...r.meta } : r.meta;
      throw new Z(l, { code: r.code, clientVersion: this.client._clientVersion, meta: u, batchRequestIdx: r.batchRequestIdx });
    } else {
      if (r.isPanic) throw new de(l, this.client._clientVersion);
      if (r instanceof q) throw new q(l, { clientVersion: this.client._clientVersion, batchRequestIdx: r.batchRequestIdx });
      if (r instanceof P) throw new P(l, this.client._clientVersion);
      if (r instanceof de) throw new de(l, this.client._clientVersion);
    }
    throw r.clientVersion = this.client._clientVersion, r;
  }
  sanitizeMessage(r) {
    return this.client._errorFormat && this.client._errorFormat !== "pretty" ? xr(r) : r;
  }
  unpack(r, t, n) {
    if (!r || (r.data && (r = r.data), !r)) return r;
    let i = Object.keys(r)[0], o = Object.values(r)[0], s = t.filter((u) => u !== "select" && u !== "include"), a = Xi(o, s), l = i === "queryRaw" ? vo(a) : vt(a);
    return n ? n(l) : l;
  }
  get [Symbol.toStringTag]() {
    return "RequestHandler";
  }
};
function Pf(e10) {
  if (e10) {
    if (e10.kind === "batch") return { kind: "batch", options: { isolationLevel: e10.isolationLevel } };
    if (e10.kind === "itx") return { kind: "itx", options: jl(e10) };
    sr(e10, "Unknown transaction kind");
  }
}
function jl(e10) {
  return { id: e10.id, payload: e10.payload };
}
function Tf(e10, r) {
  return Gn(e10) && (r == null ? void 0 : r.kind) === "batch" && e10.batchRequestIdx !== r.index;
}
function Sf(e10) {
  return e10.code === "P2009" || e10.code === "P2012";
}
function Bl(e10) {
  if (e10.kind === "Union") return { kind: "Union", errors: e10.errors.map(Bl) };
  if (Array.isArray(e10.selectionPath)) {
    let [, ...r] = e10.selectionPath;
    return { ...e10, selectionPath: r };
  }
  return e10;
}
var Ul = ul;
var Kl = le(qi());
var k = class extends Error {
  constructor(r) {
    super(r + `
Read more at https://pris.ly/d/client-constructor`), this.name = "PrismaClientConstructorValidationError";
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientConstructorValidationError";
  }
};
x(k, "PrismaClientConstructorValidationError");
var Gl = ["datasources", "datasourceUrl", "errorFormat", "adapter", "log", "transactionOptions", "omit", "__internal"], Ql = ["pretty", "colorless", "minimal"], Wl = ["info", "query", "warn", "error"], Rf = { datasources: (e10, { datasourceNames: r }) => {
  if (e10) {
    if (typeof e10 != "object" || Array.isArray(e10)) throw new k(`Invalid value ${JSON.stringify(e10)} for "datasources" provided to PrismaClient constructor`);
    for (let [t, n] of Object.entries(e10)) {
      if (!r.includes(t)) {
        let i = Qr(t, r) || ` Available datasources: ${r.join(", ")}`;
        throw new k(`Unknown datasource ${t} provided to PrismaClient constructor.${i}`);
      }
      if (typeof n != "object" || Array.isArray(n)) throw new k(`Invalid value ${JSON.stringify(e10)} for datasource "${t}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
      if (n && typeof n == "object") for (let [i, o] of Object.entries(n)) {
        if (i !== "url") throw new k(`Invalid value ${JSON.stringify(e10)} for datasource "${t}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
        if (typeof o != "string") throw new k(`Invalid value ${JSON.stringify(o)} for datasource "${t}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
      }
    }
  }
}, adapter: (e10, r) => {
  if (!e10 && wr(r.generator) === "client") throw new k('Using engine type "client" requires a driver adapter to be provided to PrismaClient constructor.');
  if (e10 !== null) {
    if (e10 === void 0) throw new k('"adapter" property must not be undefined, use null to conditionally disable driver adapters.');
    if (wr(r.generator) === "binary") throw new k('Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.');
  }
}, datasourceUrl: (e10) => {
  if (typeof e10 < "u" && typeof e10 != "string") throw new k(`Invalid value ${JSON.stringify(e10)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`);
}, errorFormat: (e10) => {
  if (e10) {
    if (typeof e10 != "string") throw new k(`Invalid value ${JSON.stringify(e10)} for "errorFormat" provided to PrismaClient constructor.`);
    if (!Ql.includes(e10)) {
      let r = Qr(e10, Ql);
      throw new k(`Invalid errorFormat ${e10} provided to PrismaClient constructor.${r}`);
    }
  }
}, log: (e10) => {
  if (!e10) return;
  if (!Array.isArray(e10)) throw new k(`Invalid value ${JSON.stringify(e10)} for "log" provided to PrismaClient constructor.`);
  function r(t) {
    if (typeof t == "string" && !Wl.includes(t)) {
      let n = Qr(t, Wl);
      throw new k(`Invalid log level "${t}" provided to PrismaClient constructor.${n}`);
    }
  }
  for (let t of e10) {
    r(t);
    let n = { level: r, emit: (i) => {
      let o = ["stdout", "event"];
      if (!o.includes(i)) {
        let s = Qr(i, o);
        throw new k(`Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`);
      }
    } };
    if (t && typeof t == "object") for (let [i, o] of Object.entries(t)) if (n[i]) n[i](o);
    else throw new k(`Invalid property ${i} for "log" provided to PrismaClient constructor`);
  }
}, transactionOptions: (e10) => {
  if (!e10) return;
  let r = e10.maxWait;
  if (r != null && r <= 0) throw new k(`Invalid value ${r} for maxWait in "transactionOptions" provided to PrismaClient constructor. maxWait needs to be greater than 0`);
  let t = e10.timeout;
  if (t != null && t <= 0) throw new k(`Invalid value ${t} for timeout in "transactionOptions" provided to PrismaClient constructor. timeout needs to be greater than 0`);
}, omit: (e10, r) => {
  if (typeof e10 != "object") throw new k('"omit" option is expected to be an object.');
  if (e10 === null) throw new k('"omit" option can not be `null`');
  let t = [];
  for (let [n, i] of Object.entries(e10)) {
    let o = Cf(n, r.runtimeDataModel);
    if (!o) {
      t.push({ kind: "UnknownModel", modelKey: n });
      continue;
    }
    for (let [s, a] of Object.entries(i)) {
      let l = o.fields.find((u) => u.name === s);
      if (!l) {
        t.push({ kind: "UnknownField", modelKey: n, fieldName: s });
        continue;
      }
      if (l.relationName) {
        t.push({ kind: "RelationInOmit", modelKey: n, fieldName: s });
        continue;
      }
      typeof a != "boolean" && t.push({ kind: "InvalidFieldValue", modelKey: n, fieldName: s });
    }
  }
  if (t.length > 0) throw new k(If(e10, t));
}, __internal: (e10) => {
  if (!e10) return;
  let r = ["debug", "engine", "configOverride"];
  if (typeof e10 != "object") throw new k(`Invalid value ${JSON.stringify(e10)} for "__internal" to PrismaClient constructor`);
  for (let [t] of Object.entries(e10)) if (!r.includes(t)) {
    let n = Qr(t, r);
    throw new k(`Invalid property ${JSON.stringify(t)} for "__internal" provided to PrismaClient constructor.${n}`);
  }
} };
function Hl(e10, r) {
  for (let [t, n] of Object.entries(e10)) {
    if (!Gl.includes(t)) {
      let i = Qr(t, Gl);
      throw new k(`Unknown property ${t} provided to PrismaClient constructor.${i}`);
    }
    Rf[t](n, r);
  }
  if (e10.datasourceUrl && e10.datasources) throw new k('Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them');
}
function Qr(e10, r) {
  if (r.length === 0 || typeof e10 != "string") return "";
  let t = Af(e10, r);
  return t ? ` Did you mean "${t}"?` : "";
}
function Af(e10, r) {
  if (r.length === 0) return null;
  let t = r.map((i) => ({ value: i, distance: (0, Kl.default)(e10, i) }));
  t.sort((i, o) => i.distance < o.distance ? -1 : 1);
  let n = t[0];
  return n.distance < 3 ? n.value : null;
}
function Cf(e10, r) {
  return Jl(r.models, e10) ?? Jl(r.types, e10);
}
function Jl(e10, r) {
  let t = Object.keys(e10).find((n) => Qe(n) === r);
  if (t) return e10[t];
}
function If(e10, r) {
  var _a3, _b2, _c3, _d3;
  let t = _r(e10);
  for (let o of r) switch (o.kind) {
    case "UnknownModel":
      (_a3 = t.arguments.getField(o.modelKey)) == null ? void 0 : _a3.markAsError(), t.addErrorMessage(() => `Unknown model name: ${o.modelKey}.`);
      break;
    case "UnknownField":
      (_b2 = t.arguments.getDeepField([o.modelKey, o.fieldName])) == null ? void 0 : _b2.markAsError(), t.addErrorMessage(() => `Model "${o.modelKey}" does not have a field named "${o.fieldName}".`);
      break;
    case "RelationInOmit":
      (_c3 = t.arguments.getDeepField([o.modelKey, o.fieldName])) == null ? void 0 : _c3.markAsError(), t.addErrorMessage(() => 'Relations are already excluded by default and can not be specified in "omit".');
      break;
    case "InvalidFieldValue":
      (_d3 = t.arguments.getDeepFieldValue([o.modelKey, o.fieldName])) == null ? void 0 : _d3.markAsError(), t.addErrorMessage(() => "Omit field option value must be a boolean.");
      break;
  }
  let { message: n, args: i } = Cn(t, "colorless");
  return `Error validating "omit" option:

${i}

${n}`;
}
function Yl(e10) {
  return e10.length === 0 ? Promise.resolve([]) : new Promise((r, t) => {
    let n = new Array(e10.length), i = null, o = false, s = 0, a = () => {
      o || (s++, s === e10.length && (o = true, i ? t(i) : r(n)));
    }, l = (u) => {
      o || (o = true, t(u));
    };
    for (let u = 0; u < e10.length; u++) e10[u].then((c) => {
      n[u] = c, a();
    }, (c) => {
      if (!Gn(c)) {
        l(c);
        return;
      }
      c.batchRequestIdx === u ? l(c) : (i || (i = c), a());
    });
  });
}
var rr = L("prisma:client");
typeof globalThis == "object" && (globalThis.NODE_CLIENT = true);
var _f = { requestArgsToMiddlewareArgs: (e10) => e10, middlewareArgsToRequestArgs: (e10) => e10 }, Nf = Symbol.for("prisma.client.transaction.id"), Lf = { id: 0, nextId() {
  return ++this.id;
} };
function Ff(e10) {
  class r {
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
      __publicField(this, "_createPrismaPromise", bo());
      __publicField(this, "$metrics", new ht(this));
      __publicField(this, "$extends", La);
      var _a3, _b2, _c3, _d3, _e5, _f3;
      e10 = ((_b2 = (_a3 = n == null ? void 0 : n.__internal) == null ? void 0 : _a3.configOverride) == null ? void 0 : _b2.call(_a3, e10)) ?? e10, Ha(e10), n && Hl(n, e10);
      let i = new EventEmitter().on("error", () => {
      });
      this._extensions = Nr.empty(), this._previewFeatures = Rl(e10), this._clientVersion = e10.clientVersion ?? Ul, this._activeProvider = e10.activeProvider, this._globalOmit = n == null ? void 0 : n.omit, this._tracingHelper = Ml();
      let o = e10.relativeEnvPaths && { rootEnvPath: e10.relativeEnvPaths.rootEnvPath && path__default.resolve(e10.dirname, e10.relativeEnvPaths.rootEnvPath), schemaEnvPath: e10.relativeEnvPaths.schemaEnvPath && path__default.resolve(e10.dirname, e10.relativeEnvPaths.schemaEnvPath) }, s;
      if (n == null ? void 0 : n.adapter) {
        s = n.adapter;
        let l = e10.activeProvider === "postgresql" || e10.activeProvider === "cockroachdb" ? "postgres" : e10.activeProvider;
        if (s.provider !== l) throw new P(`The Driver Adapter \`${s.adapterName}\`, based on \`${s.provider}\`, is not compatible with the provider \`${l}\` specified in the Prisma schema.`, this._clientVersion);
        if (n.datasources || n.datasourceUrl !== void 0) throw new P("Custom datasource configuration is not compatible with Prisma Driver Adapters. Please define the database connection string directly in the Driver Adapter configuration.", this._clientVersion);
      }
      let a = !s && o && it(o, { conflictCheck: "none" }) || ((_c3 = e10.injectableEdgeEnv) == null ? void 0 : _c3.call(e10));
      try {
        let l = n ?? {}, u = l.__internal ?? {}, c = u.debug === true;
        c && L.enable("prisma:client");
        let p = path__default.resolve(e10.dirname, e10.relativePath);
        Ci.existsSync(p) || (p = e10.dirname), rr("dirname", e10.dirname), rr("relativePath", e10.relativePath), rr("cwd", p);
        let d = u.engine || {};
        if (l.errorFormat ? this._errorFormat = l.errorFormat : process$1.env.NODE_ENV === "production" ? this._errorFormat = "minimal" : process$1.env.NO_COLOR ? this._errorFormat = "colorless" : this._errorFormat = "colorless", this._runtimeDataModel = e10.runtimeDataModel, this._engineConfig = { cwd: p, dirname: e10.dirname, enableDebugLogs: c, allowTriggerPanic: d.allowTriggerPanic, prismaPath: d.binaryPath ?? void 0, engineEndpoint: d.endpoint, generator: e10.generator, showColors: this._errorFormat === "pretty", logLevel: l.log && ql(l.log), logQueries: l.log && !!(typeof l.log == "string" ? l.log === "query" : l.log.find((f) => typeof f == "string" ? f === "query" : f.level === "query")), env: (a == null ? void 0 : a.parsed) ?? {}, flags: [], engineWasm: e10.engineWasm, compilerWasm: e10.compilerWasm, clientVersion: e10.clientVersion, engineVersion: e10.engineVersion, previewFeatures: this._previewFeatures, activeProvider: e10.activeProvider, inlineSchema: e10.inlineSchema, overrideDatasources: Ya(l, e10.datasourceNames), inlineDatasources: e10.inlineDatasources, inlineSchemaHash: e10.inlineSchemaHash, tracingHelper: this._tracingHelper, transactionOptions: { maxWait: ((_d3 = l.transactionOptions) == null ? void 0 : _d3.maxWait) ?? 2e3, timeout: ((_e5 = l.transactionOptions) == null ? void 0 : _e5.timeout) ?? 5e3, isolationLevel: (_f3 = l.transactionOptions) == null ? void 0 : _f3.isolationLevel }, logEmitter: i, isBundled: e10.isBundled, adapter: s }, this._accelerateEngineConfig = { ...this._engineConfig, accelerateUtils: { resolveDatasourceUrl: qr, getBatchRequestPayload: Fr, prismaGraphQLToJSError: Mr, PrismaClientUnknownRequestError: q, PrismaClientInitializationError: P, PrismaClientKnownRequestError: Z, debug: L("prisma:client:accelerateEngine"), engineVersion: Zl.version, clientVersion: e10.clientVersion } }, rr("clientVersion", e10.clientVersion), this._engine = Sl(e10, this._engineConfig), this._requestHandler = new Wn(this, i), l.log) for (let f of l.log) {
          let h = typeof f == "string" ? f : f.emit === "stdout" ? f.level : null;
          h && this.$on(h, (g) => {
            rt.log(`${rt.tags[h] ?? ""}`, g.message || g.query);
          });
        }
      } catch (l) {
        throw l.clientVersion = this._clientVersion, l;
      }
      return this._appliedParent = wt(this);
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
        $o();
      }
    }
    $executeRawInternal(n, i, o, s) {
      let a = this._activeProvider;
      return this._request({ action: "executeRaw", args: o, transaction: n, clientMethod: i, argsMapper: yo({ clientMethod: i, activeProvider: a }), callsite: Ze(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
    }
    $executeRaw(n, ...i) {
      return this._createPrismaPromise((o) => {
        if (n.raw !== void 0 || n.sql !== void 0) {
          let [s, a] = zl(n, i);
          return ho(this._activeProvider, s.text, s.values, Array.isArray(n) ? "prisma.$executeRaw`<SQL>`" : "prisma.$executeRaw(sql`<SQL>`)"), this.$executeRawInternal(o, "$executeRaw", s, a);
        }
        throw new X("`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n", { clientVersion: this._clientVersion });
      });
    }
    $executeRawUnsafe(n, ...i) {
      return this._createPrismaPromise((o) => (ho(this._activeProvider, n, i, "prisma.$executeRawUnsafe(<SQL>, [...values])"), this.$executeRawInternal(o, "$executeRawUnsafe", [n, ...i])));
    }
    $runCommandRaw(n) {
      if (e10.activeProvider !== "mongodb") throw new X(`The ${e10.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`, { clientVersion: this._clientVersion });
      return this._createPrismaPromise((i) => this._request({ args: n, clientMethod: "$runCommandRaw", dataPath: [], action: "runCommandRaw", argsMapper: Al, callsite: Ze(this._errorFormat), transaction: i }));
    }
    async $queryRawInternal(n, i, o, s) {
      let a = this._activeProvider;
      return this._request({ action: "queryRaw", args: o, transaction: n, clientMethod: i, argsMapper: yo({ clientMethod: i, activeProvider: a }), callsite: Ze(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
    }
    $queryRaw(n, ...i) {
      return this._createPrismaPromise((o) => {
        if (n.raw !== void 0 || n.sql !== void 0) return this.$queryRawInternal(o, "$queryRaw", ...zl(n, i));
        throw new X("`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n", { clientVersion: this._clientVersion });
      });
    }
    $queryRawTyped(n) {
      return this._createPrismaPromise((i) => {
        if (!this._hasPreviewFlag("typedSql")) throw new X("`typedSql` preview feature must be enabled in order to access $queryRawTyped API", { clientVersion: this._clientVersion });
        return this.$queryRawInternal(i, "$queryRawTyped", n);
      });
    }
    $queryRawUnsafe(n, ...i) {
      return this._createPrismaPromise((o) => this.$queryRawInternal(o, "$queryRawUnsafe", [n, ...i]));
    }
    _transactionWithArray({ promises: n, options: i }) {
      let o = Lf.nextId(), s = $l(n.length), a = n.map((l, u) => {
        var _a3;
        if ((l == null ? void 0 : l[Symbol.toStringTag]) !== "PrismaPromise") throw new Error("All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.");
        let c = (i == null ? void 0 : i.isolationLevel) ?? this._engineConfig.transactionOptions.isolationLevel, p = { kind: "batch", id: o, index: u, isolationLevel: c, lock: s };
        return ((_a3 = l.requestTransaction) == null ? void 0 : _a3.call(l, p)) ?? l;
      });
      return Yl(a);
    }
    async _transactionWithCallback({ callback: n, options: i }) {
      let o = { traceparent: this._tracingHelper.getTraceParent() }, s = { maxWait: (i == null ? void 0 : i.maxWait) ?? this._engineConfig.transactionOptions.maxWait, timeout: (i == null ? void 0 : i.timeout) ?? this._engineConfig.transactionOptions.timeout, isolationLevel: (i == null ? void 0 : i.isolationLevel) ?? this._engineConfig.transactionOptions.isolationLevel }, a = await this._engine.transaction("start", o, s), l;
      try {
        let u = { kind: "itx", ...a };
        l = await n(this._createItxClient(u)), await this._engine.transaction("commit", o, a);
      } catch (u) {
        throw await this._engine.transaction("rollback", o, a).catch(() => {
        }), u;
      }
      return l;
    }
    _createItxClient(n) {
      return he(wt(he(Na(this), [ee("_appliedParent", () => this._appliedParent._createItxClient(n)), ee("_createPrismaPromise", () => bo(n)), ee(Nf, () => n.id)])), [Lr(qa)]);
    }
    $transaction(n, i) {
      var _a3;
      let o;
      typeof n == "function" ? ((_a3 = this._engineConfig.adapter) == null ? void 0 : _a3.adapterName) === "@prisma/adapter-d1" ? o = () => {
        throw new Error("Cloudflare D1 does not support interactive transactions. We recommend you to refactor your queries with that limitation in mind, and use batch transactions with `prisma.$transactions([])` where applicable.");
      } : o = () => this._transactionWithCallback({ callback: n, options: i }) : o = () => this._transactionWithArray({ promises: n, options: i });
      let s = { name: "transaction", attributes: { method: "$transaction" } };
      return this._tracingHelper.runInChildSpan(s, o);
    }
    _request(n) {
      n.otelParentCtx = this._tracingHelper.getActiveContext();
      let i = n.middlewareArgsMapper ?? _f, o = { args: i.requestArgsToMiddlewareArgs(n.args), dataPath: n.dataPath, runInTransaction: !!n.transaction, action: n.action, model: n.model }, s = { operation: { name: "operation", attributes: { method: o.action, model: o.model, name: o.model ? `${o.model}.${o.action}` : o.action } } }, a = async (l) => {
        let { runInTransaction: u, args: c, ...p } = l, d = { ...n, ...p };
        c && (d.args = i.middlewareArgsToRequestArgs(c)), n.transaction !== void 0 && u === false && delete d.transaction;
        let f = await Ua(this, d);
        return d.model ? $a({ result: f, modelName: d.model, args: d.args, extensions: this._extensions, runtimeDataModel: this._runtimeDataModel, globalOmit: this._globalOmit }) : f;
      };
      return this._tracingHelper.runInChildSpan(s.operation, () => new AsyncResource("prisma-client-request").runInAsyncScope(() => a(o)));
    }
    async _executeRequest({ args: n, clientMethod: i, dataPath: o, callsite: s, action: a, model: l, argsMapper: u, transaction: c, unpacker: p, otelParentCtx: d, customDataProxyFetch: f }) {
      try {
        n = u ? u(n) : n;
        let h = { name: "serialize" }, g = this._tracingHelper.runInChildSpan(h, () => Ji({ modelName: l, runtimeDataModel: this._runtimeDataModel, action: a, args: n, clientMethod: i, callsite: s, extensions: this._extensions, errorFormat: this._errorFormat, clientVersion: this._clientVersion, previewFeatures: this._previewFeatures, globalOmit: this._globalOmit }));
        return L.enabled("prisma:client") && (rr("Prisma Client call:"), rr(`prisma.${i}(${Pa(n)})`), rr("Generated request:"), rr(JSON.stringify(g, null, 2) + `
`)), (c == null ? void 0 : c.kind) === "batch" && await c.lock, this._requestHandler.request({ protocolQuery: g, modelName: l, action: a, clientMethod: i, dataPath: o, callsite: s, args: n, extensions: this._extensions, transaction: c, unpacker: p, otelParentCtx: d, otelChildCtx: this._tracingHelper.getActiveContext(), globalOmit: this._globalOmit, customDataProxyFetch: f });
      } catch (h) {
        throw h.clientVersion = this._clientVersion, h;
      }
    }
    _hasPreviewFlag(n) {
      var _a3;
      return !!((_a3 = this._engineConfig.previewFeatures) == null ? void 0 : _a3.includes(n));
    }
    $applyPendingMigrations() {
      return this._engine.applyPendingMigrations();
    }
  }
  return r;
}
function zl(e10, r) {
  return Mf(e10) ? [new se(e10, r), Nl] : [e10, Ll];
}
function Mf(e10) {
  return Array.isArray(e10) && Array.isArray(e10.raw);
}
var $f = /* @__PURE__ */ new Set(["toJSON", "$$typeof", "asymmetricMatch", Symbol.iterator, Symbol.toStringTag, Symbol.isConcatSpreadable, Symbol.toPrimitive]);
function qf(e10) {
  return new Proxy(e10, { get(r, t) {
    if (t in r) return r[t];
    if (!$f.has(t)) throw new TypeError(`Invalid enum value: ${String(t)}`);
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
const config$1 = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client"
    },
    "output": {
      "value": "C:\\Users\\marcosv\\Documents\\GitHub\\lib-app\\electron\\generated\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      },
      {
        "fromEnvVar": null,
        "value": "debian-openssl-1.1.x"
      },
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x"
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "C:\\Users\\marcosv\\Documents\\GitHub\\lib-app\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativePath": "../../../prisma",
  "clientVersion": "6.19.3",
  "engineVersion": "c2990dca591cba766e3b7ef5d9e8a84796e47ab7",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "sqlite",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": 'generator client {\n  provider      = "prisma-client"\n  output        = "../electron/generated/prisma"\n  // Keep native for development/build-host use and include engines for Mint 20.x and 21.x/22.x.\n  binaryTargets = ["native", "debian-openssl-1.1.x", "debian-openssl-3.0.x"]\n}\n\ndatasource db {\n  provider = "sqlite"\n  url      = env("DATABASE_URL")\n}\n\nmodel User {\n  id                  String    @id @default(uuid())\n  name                String\n  email               String    @unique\n  accessCode          String    @unique\n  passwordHash        String    @map("password_hash")\n  role                Role      @default(BIBLIOTECARIO)\n  isActive            Boolean   @default(true) @map("is_active")\n  mustChangePassword  Boolean   @default(true) @map("must_change_password")\n  failedLoginAttempts Int       @default(0) @map("failed_login_attempts")\n  lastFailedLoginAt   DateTime? @map("last_failed_login_at")\n  lockedUntil         DateTime? @map("locked_until")\n  createdAt           DateTime  @default(now()) @map("created_at")\n  updatedAt           DateTime  @updatedAt @map("updated_at")\n\n  accessLogs AccessLog[]\n\n  @@map("users")\n}\n\nmodel AccessLog {\n  id                  String   @id @default(uuid())\n  userId              String?  @map("user_id")\n  attemptedAccessCode String   @map("attempted_access_code")\n  success             Boolean\n  failureReason       String?  @map("failure_reason")\n  createdAt           DateTime @default(now()) @map("created_at")\n\n  user User? @relation(fields: [userId], references: [id], onDelete: SetNull)\n\n  @@map("access_logs")\n}\n\nenum Role {\n  BIBLIOTECARIO\n}\n',
  "inlineSchemaHash": "1a538187140b9a9b722d76ea074d21386fc4f9afe93017f874dc85631dcdc70a",
  "copyEngine": true,
  "runtimeDataModel": {
    "models": {},
    "enums": {},
    "types": {}
  },
  "dirname": ""
};
config$1.runtimeDataModel = JSON.parse('{"models":{"User":{"dbName":"users","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":null,"default":{"name":"uuid","args":[4]},"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"accessCode","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"passwordHash","dbName":"password_hash","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"role","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Role","nativeType":null,"default":"BIBLIOTECARIO","isGenerated":false,"isUpdatedAt":false},{"name":"isActive","dbName":"is_active","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","nativeType":null,"default":true,"isGenerated":false,"isUpdatedAt":false},{"name":"mustChangePassword","dbName":"must_change_password","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","nativeType":null,"default":true,"isGenerated":false,"isUpdatedAt":false},{"name":"failedLoginAttempts","dbName":"failed_login_attempts","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","nativeType":null,"default":0,"isGenerated":false,"isUpdatedAt":false},{"name":"lastFailedLoginAt","dbName":"last_failed_login_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"lockedUntil","dbName":"locked_until","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","dbName":"updated_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":true},{"name":"accessLogs","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"AccessLog","nativeType":null,"relationName":"AccessLogToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"AccessLog":{"dbName":"access_logs","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":null,"default":{"name":"uuid","args":[4]},"isGenerated":false,"isUpdatedAt":false},{"name":"userId","dbName":"user_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"attemptedAccessCode","dbName":"attempted_access_code","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"success","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Boolean","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"failureReason","dbName":"failure_reason","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","nativeType":null,"relationName":"AccessLogToUser","relationFromFields":["userId"],"relationToFields":["id"],"relationOnDelete":"SetNull","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{"Role":{"values":[{"name":"BIBLIOTECARIO","dbName":null}],"dbName":null}},"types":{}}');
config$1.engineWasm = void 0;
config$1.compilerWasm = void 0;
function getPrismaClientClass(dirname) {
  config$1.dirname = dirname;
  return Ff(config$1);
}
Ao.getExtensionContext;
qf({
  Serializable: "Serializable"
});
Ao.defineExtension;
globalThis["__dirname"] = path.dirname(fileURLToPath(import.meta.url));
const PrismaClient = getPrismaClientClass(__dirname);
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process$1.cwd(), "electron/generated/prisma/query_engine-windows.dll.node");
path.join(__dirname, "libquery_engine-debian-openssl-1.1.x.so.node");
path.join(process$1.cwd(), "electron/generated/prisma/libquery_engine-debian-openssl-1.1.x.so.node");
path.join(__dirname, "libquery_engine-debian-openssl-3.0.x.so.node");
path.join(process$1.cwd(), "electron/generated/prisma/libquery_engine-debian-openssl-3.0.x.so.node");
let prisma;
async function initializeDatabase(databaseUrl) {
  prisma = new PrismaClient({ datasourceUrl: databaseUrl });
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
    const sql = await readFile(
      path__default.join(migrationsDirectory, migrationName, "migration.sql"),
      "utf8"
    ).catch((error2) => {
      if (error2 && typeof error2 === "object" && "code" in error2 && error2.code === "ENOENT") {
        return null;
      }
      throw error2;
    });
    if (sql === null) continue;
    const checksum = createHash("sha256").update(sql).digest("hex");
    const applied = await prisma.$queryRaw`
      SELECT "checksum" FROM "_prisma_migrations"
      WHERE "migration_name" = ${migrationName} AND "finished_at" IS NOT NULL
    `;
    if (applied.length > 0) {
      if (applied[0].checksum !== checksum) {
        throw new Error(`MIGRATION_CHECKSUM_MISMATCH:${migrationName}`);
      }
      continue;
    }
    const statements = sql.replace(/^\s*--.*$/gm, "").split(";").map((statement) => statement.trim()).filter((statement) => statement.length > 0 && !/^PRAGMA\b/i.test(statement));
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
  }
}
function getEnumValues(entries) {
  const numericValues = Object.values(entries).filter((v2) => typeof v2 === "number");
  const values = Object.entries(entries).filter(([k2, _2]) => numericValues.indexOf(+k2) === -1).map(([_2, v2]) => v2);
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
  const raw = sourceShape(source);
  for (const key of keys) {
    const desc = Object.getOwnPropertyDescriptor(raw, key);
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
  var _a3;
  if (globalConfig.jitless) {
    return false;
  }
  if (typeof navigator !== "undefined" && ((_a3 = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : _a3.includes("Cloudflare"))) {
    return false;
  }
  try {
    const F2 = Function;
    new F2("");
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
  var _a3;
  const raw = sourceShape(schema);
  const keys = [];
  for (const key of Reflect.ownKeys(mask)) {
    if (!((_a3 = Object.getOwnPropertyDescriptor(raw, key)) == null ? void 0 : _a3.enumerable)) {
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
  var _a3, _b2;
  if (!((_a3 = b == null ? void 0 : b._zod) == null ? void 0 : _a3.def)) {
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
function partial(Class, schema, mask, name = "partial") {
  const currDef = schema._zod.def;
  const checks = currDef.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    throw new Error(`.${name}() cannot be used on object schemas containing refinements`);
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
function aborted(x2, startIndex = 0) {
  var _a3;
  if (x2.aborted === true)
    return true;
  for (let i = startIndex; i < x2.issues.length; i++) {
    if (((_a3 = x2.issues[i]) == null ? void 0 : _a3.continue) !== true) {
      return true;
    }
  }
  return false;
}
function explicitlyAborted(x2, startIndex = 0) {
  var _a3;
  if (x2.aborted === true)
    return true;
  for (let i = startIndex; i < x2.issues.length; i++) {
    if (((_a3 = x2.issues[i]) == null ? void 0 : _a3.continue) === false) {
      return true;
    }
  }
  return false;
}
function prefixIssues(path2, issues) {
  return issues.map((iss) => {
    var _a3;
    (_a3 = iss).path ?? (_a3.path = []);
    iss.path.unshift(path2);
    return iss;
  });
}
function unwrapMessage(message) {
  return typeof message === "string" ? message : message == null ? void 0 : message.message;
}
function attachSchema(issues, start, inst) {
  var _a3;
  for (let i = start; i < issues.length; i++) {
    (_a3 = issues[i]).schema ?? (_a3.schema = inst);
  }
}
function finalizeIssue(iss, ctx, config2) {
  var _a4, _b2, _c3, _d3, _e5, _f3, _g2, _h2, _i2, _j2;
  var _a3;
  const traits = (_b2 = (_a4 = iss.inst) == null ? void 0 : _a4._zod) == null ? void 0 : _b2.traits;
  if (traits == null ? void 0 : traits.has("$ZodType")) {
    if (traits.has("$ZodCheck"))
      (_a3 = iss).schema ?? (_a3.schema = iss.inst);
    else
      iss.schema = iss.inst;
  }
  const schemaError = iss.schema !== iss.inst ? (_d3 = (_c3 = iss.schema) == null ? void 0 : _c3._zod.def) == null ? void 0 : _d3.error : void 0;
  const message = iss.message ? iss.message : unwrapMessage((_g2 = (_f3 = (_e5 = iss.inst) == null ? void 0 : _e5._zod.def) == null ? void 0 : _f3.error) == null ? void 0 : _g2.call(_f3, iss)) ?? unwrapMessage(schemaError == null ? void 0 : schemaError(iss)) ?? unwrapMessage((_h2 = ctx == null ? void 0 : ctx.error) == null ? void 0 : _h2.call(ctx, iss)) ?? unwrapMessage((_i2 = config2.customError) == null ? void 0 : _i2.call(config2, iss)) ?? unwrapMessage((_j2 = config2.localeError) == null ? void 0 : _j2.call(config2, iss)) ?? "Invalid input";
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
  const E2 = _E;
  if (E2) {
    const saved = E2.stackTraceLimit;
    if (typeof saved === "number") {
      try {
        E2.stackTraceLimit = 0;
      } catch {
        _E = null;
        return new Definition();
      }
      try {
        return new Definition();
      } finally {
        E2.stackTraceLimit = saved;
      }
    }
  }
  return new Definition();
}
function $constructor(name, initializer2, proto, params) {
  const zodProto = {};
  function Internals(def) {
    this.def = def;
    this.constr = _2;
    this.traits = /* @__PURE__ */ new Set();
  }
  Internals.prototype = zodProto;
  const protoMembers = proto;
  const initialized = protoMembers && /* @__PURE__ */ new WeakSet();
  function init(inst, def) {
    if (!inst._zod) {
      _zodDesc.value = new Internals(def);
      try {
        Object.defineProperty(inst, "_zod", _zodDesc);
      } finally {
        _zodDesc.value = void 0;
      }
    } else if (inst._zod.traits.has(name)) {
      return;
    }
    inst._zod.traits.add(name);
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
  Object.defineProperty(Definition, "name", { value: name });
  function _2(def) {
    var _a3;
    const inst = (params == null ? void 0 : params.Parent) ? newError(Definition) : this;
    init(inst, def);
    const deferred = inst._zod.deferred;
    if (deferred) {
      for (const fn2 of deferred) {
        fn2();
      }
      inst._zod.deferred = void 0;
    }
    const pp2 = (_a3 = globalThis.__zod_globalConfig) == null ? void 0 : _a3.postProcessor;
    if (pp2)
      pp2(inst);
    return inst;
  }
  Object.defineProperty(_2, "init", { value: init });
  Object.defineProperty(_2, Symbol.hasInstance, {
    value: (inst) => {
      var _a3, _b2;
      if ((params == null ? void 0 : params.Parent) && inst instanceof params.Parent)
        return true;
      return (_b2 = (_a3 = inst == null ? void 0 : inst._zod) == null ? void 0 : _a3.traits) == null ? void 0 : _b2.has(name);
    }
  });
  Object.defineProperty(_2, "name", { value: name });
  return _2;
}
class $ZodAsyncError extends Error {
  constructor() {
    super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`);
  }
}
class $ZodEncodeError extends Error {
  constructor(name) {
    super(`Encountered unidirectional transform during encode: ${name}`);
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
  for (const sub of error2.issues) {
    if (sub.path.length > 0) {
      node(fieldErrors, sub.path[0], () => []).push(mapper(sub));
    } else {
      formErrors.push(mapper(sub));
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
      const e10 = new ((_params == null ? void 0 : _params.Err) ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
      captureStackTrace(e10, (_params == null ? void 0 : _params.callee) ?? fn2);
      throw e10;
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
      const e10 = new ((params == null ? void 0 : params.Err) ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
      captureStackTrace(e10, (params == null ? void 0 : params.callee) ?? fn2);
      throw e10;
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
    set error(e10) {
      error2 = e10;
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
  var _a3;
  inst._zod ?? (inst._zod = {});
  inst._zod.def = def;
  (_a3 = inst._zod).onattach ?? (_a3.onattach = []);
});
const _whenHasLength = (payload) => {
  const val = payload.value;
  return !nullish(val) && val.length !== void 0;
};
const $ZodCheckMaxLength = /* @__PURE__ */ $constructor("$ZodCheckMaxLength", (inst, def) => {
  var _a3;
  $ZodCheck.init(inst, def);
  (_a3 = inst._zod.def).when ?? (_a3.when = _whenHasLength);
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
  var _a3;
  $ZodCheck.init(inst, def);
  (_a3 = inst._zod.def).when ?? (_a3.when = _whenHasLength);
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
  var _a3;
  $ZodCheck.init(inst, def);
  (_a3 = inst._zod.def).when ?? (_a3.when = _whenHasLength);
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
  var _a3, _b2;
  $ZodCheck.init(inst, def);
  if (def.pattern)
    (_a3 = inst._zod).check ?? (_a3.check = (payload) => {
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
    const lines = content.split("\n").filter((x2) => x2);
    const minIndent = Math.min(...lines.map((x2) => x2.length - x2.trimStart().length));
    const dedented = lines.map((x2) => x2.slice(minIndent)).map((x2) => " ".repeat(this.indent * 2) + x2);
    for (const line of dedented) {
      this.content.push(line);
    }
  }
  compile() {
    const F2 = Function;
    const content = (this == null ? void 0 : this.content) ?? [``];
    const factory = new F2(...Object.keys(this.closed), `return function (${this.args.join(", ")}) {
${content.join("\n")}
};`);
    return factory(...Object.values(this.closed));
  }
}
const version = {
  major: 4,
  minor: 6,
  patch: 5
};
const $ZodType = /* @__PURE__ */ $constructor("$ZodType", (inst, def) => {
  var _a4;
  var _a3;
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
    (_a3 = inst._zod).deferred ?? (_a3.deferred = []);
    (_a4 = inst._zod.deferred) == null ? void 0 : _a4.push(() => {
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
    const v2 = versionMap[def.version];
    if (v2 === void 0)
      throw new Error(`Invalid UUID version: "${def.version}"`);
    def.pattern ?? (def.pattern = uuid(v2));
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
  var _a3;
  if (!def.normalize && ((_a3 = def.protocol) == null ? void 0 : _a3.source) === httpProtocol.source && !/^https?:\/\//i.test(trimmed)) {
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
  var _a3, _b2, _c3, _d3;
  const keys = Object.keys(def.shape);
  const ownSymbols = Object.getOwnPropertySymbols(def.shape);
  const symbolKeys = ownSymbols.length ? ownSymbols : NO_SYMBOL_KEYS;
  const allKeys = symbolKeys.length ? [...keys, ...symbolKeys] : keys;
  for (const k2 of allKeys) {
    if (!((_d3 = (_c3 = (_b2 = (_a3 = def.shape) == null ? void 0 : _a3[k2]) == null ? void 0 : _b2._zod) == null ? void 0 : _c3.traits) == null ? void 0 : _d3.has("$ZodType"))) {
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
        for (const v2 of field.values)
          propValues[key].add(v2);
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
    var _a3, _b2;
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
      const optin = (_a3 = schema == null ? void 0 : schema._zod) == null ? void 0 : _a3.optin;
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
    var _a3, _b2;
    let keys;
    if (iss.code === "unrecognized_keys" && !((_a3 = iss.path) == null ? void 0 : _a3.length)) {
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
  var _a3;
  $ZodType.init(inst, def);
  inst._zod.optin = "optional";
  (_a3 = globalConfig.memoizer) == null ? void 0 : _a3.guard(inst);
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
    const v2 = zod.def.innerType._zod.values;
    return v2 ? new Set([...v2].filter((x2) => x2 !== void 0)) : void 0;
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
    var _a3, _b2;
    return (_b2 = (_a3 = zod.def.innerType) == null ? void 0 : _a3._zod) == null ? void 0 : _b2.optin;
  });
  defineLazyInternal(inst, "optout", (zod) => {
    var _a3, _b2;
    return (_b2 = (_a3 = zod.def.innerType) == null ? void 0 : _a3._zod) == null ? void 0 : _b2.optout;
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
    var _a3;
    let answer = NONE;
    for (const key of Reflect.ownKeys(sh)) {
      const desc = Object.getOwnPropertyDescriptor(sh, key);
      if (!desc.enumerable)
        continue;
      const child = desc.get ? ASSUMED : ((_a3 = desc.value) == null ? void 0 : _a3._zod) ? isRecursive(desc.value, stack) : NONE;
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
      const raw = rawShape(def);
      merge2(raw ? shape(raw) : ASSUMED);
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
  alloc(_inst, payload, empty) {
    const bucket = handoff;
    if (!bucket)
      return empty;
    handoff = void 0;
    const entry = { value: empty, issues: null };
    bucket.set(payload.value, entry);
    open.push(entry);
    return empty;
  },
  guard(inst) {
    var _a3;
    (_a3 = inst._zod).deferred ?? (_a3.deferred = []);
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
    var _a3;
    let isRecursiveInst;
    let rechecked = false;
    let lastCtx;
    let lastBucket;
    (_a3 = inst._zod).deferred ?? (_a3.deferred = []);
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
  var _a3;
  const backEdges = (_a3 = ctx[STATE]) == null ? void 0 : _a3.backEdges;
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
  var _a4, _b2;
  var _a3;
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
  const overrideSchema = (_b2 = (_a4 = schema._zod).toJSONSchema) == null ? void 0 : _b2.call(_a4);
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
    (_a3 = result.schema).default ?? (_a3.default = result.schema._prefault);
  delete result.schema._prefault;
  const _result = ctx.seen.get(schema);
  return _result.schema;
}
function encodeJSONPointerSegment(segment) {
  return segment.replace(/~/g, "~0").replace(/\//g, "~1");
}
function extractDefs(ctx, schema) {
  var _a3, _b2, _c3, _d3;
  const root = ctx.seen.get(schema);
  if (!root)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  if (ctx.external && ctx.sharedDefsExtractedFor === ctx.external)
    return;
  const idToSchema = /* @__PURE__ */ new Map();
  for (const entry of ctx.seen.entries()) {
    const id2 = (_a3 = ctx.metadataRegistry.get(entry[0])) == null ? void 0 : _a3.id;
    if (id2) {
      const existing = idToSchema.get(id2);
      if (existing && existing !== entry[0]) {
        throw new Error(`Duplicate schema id "${id2}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      }
      idToSchema.set(id2, entry[0]);
    }
  }
  const makeURI = (entry) => {
    var _a4;
    const defsSegment = ctx.target === "draft-2020-12" ? "$defs" : "definitions";
    if (ctx.external) {
      const externalId = (_a4 = ctx.external.registry.get(entry[0])) == null ? void 0 : _a4.id;
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
  var _a3;
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
        const part = ((_a3 = other.properties) == null ? void 0 : _a3[key]) ?? undeclaredConstraint(other);
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
  const unions = allOf.filter((m2) => UNION_KEYS.some((k2) => Array.isArray(m2[k2])));
  let folded = null;
  if (!unions.length) {
    folded = foldObjects(allOf);
  } else {
    const union2 = unions[0];
    const keyword = UNION_KEYS.find((k2) => Array.isArray(union2[k2]));
    if (Object.keys(union2).length !== 1)
      return;
    const rest = allOf.filter((m2) => m2 !== union2);
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
  var _a3, _b2, _c3, _d3;
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
  if ((_a3 = ctx.external) == null ? void 0 : _a3.uri) {
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
  agg.mime = agg.mime ? agg.mime.filter((m2) => mime.includes(m2)) : [...mime];
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
  var _a3;
  const agg = {};
  const def = schema._zod.def;
  const list = schema._zod.traits.has("$ZodCheck") ? [schema, ...def.checks ?? []] : def.checks ?? [];
  for (const ch of list)
    (_a3 = contributors[ch._zod.def.check]) == null ? void 0 : _a3.call(contributors, agg, ch._zod.def);
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
  if (values.every((v2) => typeof v2 === "number"))
    json.type = "number";
  if (values.every((v2) => typeof v2 === "string"))
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
  var _a3;
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
  if (((_a3 = def.catchall) == null ? void 0 : _a3._zod.def.type) === "never") {
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
  const options = def.options.map((x2, i) => processSchema(x2, ctx, {
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
  _lazyMethod(proto, "format", (self) => (mapper) => formatError(self, mapper));
  _lazyMethod(proto, "flatten", (self) => (mapper) => flattenError(self, mapper));
  _lazyMethod(proto, "addIssue", (self) => (issue2) => {
    self.issues.push(issue2);
    self.message = JSON.stringify(self.issues, jsonStringifyReplacer, 2);
  });
  _lazyMethod(proto, "addIssues", (self) => (issues2) => {
    self.issues.push(...issues2);
    self.message = JSON.stringify(self.issues, jsonStringifyReplacer, 2);
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
    var _a3;
    return (_a3 = globalRegistry.get(this)) == null ? void 0 : _a3.description;
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
  installLazyProp(inst, "shape", (self) => self._zod.def.shape, false);
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
  const entries = Array.isArray(values) ? Object.fromEntries(values.map((v2) => [v2, v2])) : values;
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
const LoginSchema = object({
  accessCode: string().trim().min(1, "ACCESS_CODE_REQUIRED"),
  password: string().min(1, "PASSWORD_REQUIRED")
}).strict();
const InitialLibrarianSchema = object({
  name: string().trim().min(1, "INITIAL_LIBRARIAN_NAME_REQUIRED").max(120),
  email: string().trim().email("INITIAL_LIBRARIAN_EMAIL_INVALID").max(254),
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
    if (await prisma.user.count() > 0) return false;
    const configuration = input;
    const requiredFields = ["name", "email", "accessCode", "password"];
    const missingFields = requiredFields.filter(
      (field) => typeof (configuration == null ? void 0 : configuration[field]) !== "string" || !configuration[field].trim()
    );
    if (missingFields.length > 0) {
      const envNames = {
        name: "INITIAL_LIBRARIAN_NAME",
        email: "INITIAL_LIBRARIAN_EMAIL",
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
    const { name, email: email2, accessCode, password } = validate2.data;
    if (email2.endsWith(".invalid") || accessCode.startsWith("CHANGE_ME") || password.includes("CHANGE_ME") || password === "TROQUE_POR_UMA_SENHA_TEMPORARIA_FORTE") {
      throw new Error("INITIAL_LIBRARIAN_CONFIGURATION_HAS_PLACEHOLDERS");
    }
    const passwordHash = await hashPassword(password);
    const user = await prisma.$transaction(async (transaction) => {
      if (await transaction.user.count() > 0) return null;
      return transaction.user.create({
        data: {
          name,
          email: email2,
          accessCode,
          passwordHash,
          role: "BIBLIOTECARIO",
          isActive: true,
          mustChangePassword: true
        }
      });
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
    const user = await prisma.user.findUnique({ where: { accessCode } });
    if (!user) {
      await prisma.accessLog.create({
        data: {
          attemptedAccessCode: accessCode,
          success: false,
          failureReason: "INVALID_CREDENTIALS"
        }
      });
      if (await prisma.user.count() === 0)
        throw new Error("NO_CREDENTIALS_CONFIGURED");
      throw new Error("INVALID_CREDENTIALS");
    }
    const now = /* @__PURE__ */ new Date();
    if (user.lockedUntil && user.lockedUntil > now) {
      await prisma.accessLog.create({
        data: {
          userId: user.id,
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
          userId: user.id,
          attemptedAccessCode: accessCode,
          success: false,
          failureReason: "ACCOUNT_INACTIVE"
        }
      });
      throw new Error("ACCOUNT_UNAVAILABLE");
    }
    if (!await verifyPassword(password, user.passwordHash)) {
      for (let attempt = 0; attempt < 5; attempt += 1) {
        const latest = await prisma.user.findUnique({ where: { id: user.id } });
        if (!latest) throw new Error("ACCOUNT_UNAVAILABLE");
        const currentTime = /* @__PURE__ */ new Date();
        if (latest.lockedUntil && latest.lockedUntil > currentTime) {
          await prisma.accessLog.create({
            data: {
              userId: user.id,
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
        const changed = await prisma.user.updateMany({
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
              userId: user.id,
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
      name: user.name,
      accessCode: user.accessCode,
      role: user.role,
      mustChangePassword: user.mustChangePassword
    };
    await prisma.$transaction([
      prisma.user.update({
        where: { id: user.id },
        data: { failedLoginAttempts: 0, lockedUntil: null }
      }),
      prisma.accessLog.create({
        data: {
          userId: user.id,
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
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user || !user.isActive) throw new Error("ACCOUNT_UNAVAILABLE");
    if (!await verifyPassword(currentPassword, user.passwordHash)) {
      throw new Error("INVALID_CURRENT_PASSWORD");
    }
    if (await verifyPassword(newPassword, user.passwordHash)) {
      throw new Error("PASSWORD_MUST_BE_DIFFERENT");
    }
    const newPasswordHash = await hashPassword(newPassword);
    await prisma.user.update({
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
const require$1 = createRequire(import.meta.url);
const { config: loadDotEnv } = require$1("dotenv");
const authService = new AuthService();
const sessions = /* @__PURE__ */ new Map();
const SESSION_IDLE_TIMEOUT_MS = 15 * 60 * 1e3;
const __dirname$1 = path__default.dirname(fileURLToPath(import.meta.url));
function toSqliteFileUrl(absolutePath) {
  return `file:${absolutePath.replace(/\\/g, "/")}`;
}
function resolveDevelopmentDatabaseUrl(databaseUrl) {
  if (!databaseUrl.startsWith("file:")) return databaseUrl;
  const fileUrl = databaseUrl.slice("file:".length);
  const queryIndex = fileUrl.indexOf("?");
  const databasePath = queryIndex === -1 ? fileUrl : fileUrl.slice(0, queryIndex);
  const query = queryIndex === -1 ? "" : fileUrl.slice(queryIndex);
  const absolutePath = path__default.isAbsolute(databasePath) ? databasePath : path__default.resolve(app.getAppPath(), "prisma", databasePath);
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
    icon: path__default.join(process.env.VITE_PUBLIC, "images/app-icon.svg"),
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
  const user = await prisma.user.findUnique({ where: { id: session.userId } });
  if (!user || !user.isActive) {
    sessions.delete(event.sender.id);
    return null;
  }
  session.lastActivityAt = Date.now();
  return {
    user: {
      id: user.id,
      name: user.name,
      role: user.role,
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
app.whenReady().then(async () => {
  Menu.setApplicationMenu(null);
  const provisioningEnvPath = app.isPackaged ? path__default.join(app.getPath("userData"), ".env") : path__default.join(app.getAppPath(), ".env");
  loadDotEnv({ path: provisioningEnvPath });
  const configuredDatabaseUrl = process.env.DATABASE_URL;
  const packagedDatabasePath = path__default.join(app.getPath("userData"), "lib-app.db");
  const databaseUrl = app.isPackaged ? toSqliteFileUrl(packagedDatabasePath) : configuredDatabaseUrl ? resolveDevelopmentDatabaseUrl(configuredDatabaseUrl) : configuredDatabaseUrl;
  if (!databaseUrl) {
    throw new Error("DATABASE_URL is required while running in development.");
  }
  if (app.isPackaged) {
    await mkdir(path__default.dirname(packagedDatabasePath), { recursive: true });
  } else if (configuredDatabaseUrl == null ? void 0 : configuredDatabaseUrl.startsWith("file:")) {
    const databasePath = configuredDatabaseUrl.slice("file:".length).split("?")[0];
    const absoluteDatabasePath = path__default.isAbsolute(databasePath) ? databasePath : path__default.resolve(app.getAppPath(), "prisma", databasePath);
    await mkdir(path__default.dirname(absoluteDatabasePath), { recursive: true });
  }
  await initializeDatabase(databaseUrl);
  const migrationsDirectory = app.isPackaged ? path__default.join(app.getAppPath(), "prisma", "migrations") : path__default.resolve(app.getAppPath(), "prisma", "migrations");
  await applySqliteMigrations(migrationsDirectory);
  const librarianCreated = await authService.provisionInitialLibrarian({
    name: process.env.INITIAL_LIBRARIAN_NAME,
    email: process.env.INITIAL_LIBRARIAN_EMAIL,
    accessCode: process.env.INITIAL_LIBRARIAN_ACCESS_CODE,
    password: process.env.INITIAL_LIBRARIAN_PASSWORD
  });
  if (librarianCreated) {
    console.info("Created the initial librarian account from the provisioning environment.");
  }
  createWindow();
}).catch((error2) => {
  console.error("Failed to initialize the SQLite database:", error2);
  const message = error2 instanceof Error ? error2.message : String(error2);
  const configurationError = message.startsWith("INITIAL_LIBRARIAN_");
  dialog.showErrorBox(
    "Biblioteca IFCE",
    configurationError ? `The database is empty and the initial librarian could not be created. Configure INITIAL_LIBRARIAN_NAME, INITIAL_LIBRARIAN_EMAIL, INITIAL_LIBRARIAN_ACCESS_CODE, and INITIAL_LIBRARIAN_PASSWORD in ${app.isPackaged ? path__default.join(app.getPath("userData"), ".env") : path__default.join(app.getAppPath(), ".env")}. Restart the app after saving the file. (${message})` : `The application could not initialize its SQLite database. (${message})`
  );
  app.quit();
});
export {
  MAIN_DIST,
  RENDERER_DIST,
  VITE_DEV_SERVER_URL
};
