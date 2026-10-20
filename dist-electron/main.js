var ic = Object.defineProperty;
var os = (e) => {
  throw TypeError(e);
};
var sc = (e, t, n) => t in e ? ic(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var g = (e, t, n) => sc(e, typeof t != "symbol" ? t + "" : t, n), ac = (e, t, n) => t.has(e) || os("Cannot " + n);
var Ut = (e, t, n) => t.has(e) ? os("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n);
var ls = (e, t, n) => (ac(e, t, "access private method"), n);
import { app as ne, BrowserWindow as po, ipcMain as ze, Menu as oc, dialog as lc } from "electron";
import { createHash as uc, randomUUID as cc, randomBytes as hr } from "node:crypto";
import ho, { readdir as dc, readFile as fc, mkdir as us } from "node:fs/promises";
import * as nt from "node:path";
import P from "node:path";
import * as R from "node:process";
import mi from "node:process";
import * as pc from "node:url";
import { fileURLToPath as mo } from "node:url";
import * as hc from "node:module";
import { createRequire as mc } from "node:module";
import ft from "node:fs";
import gc from "node:child_process";
import en from "node:os";
import { promisify as yc } from "node:util";
import { AsyncResource as wc } from "node:async_hooks";
import { EventEmitter as bc } from "node:events";
import go from "bcrypt";
const gi = pc.fileURLToPath(import.meta.url);
globalThis.__dirname = nt.dirname(gi);
const vt = hc.createRequire(import.meta.url);
var vc = Object.create, yi = Object.defineProperty, _c = Object.getOwnPropertyDescriptor, Ec = Object.getOwnPropertyNames, Ac = Object.getPrototypeOf, Pc = Object.prototype.hasOwnProperty, At = ((e) => typeof vt < "u" ? vt : typeof Proxy < "u" ? new Proxy(e, { get: (t, n) => (typeof vt < "u" ? vt : t)[n] }) : e)(function(e) {
  if (typeof vt < "u") return vt.apply(this, arguments);
  throw Error('Dynamic require of "' + e + '" is not supported');
}), yo = (e, t) => () => (e && (t = e(e = 0)), t), be = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), kt = (e, t) => {
  for (var n in t) yi(e, n, { get: t[n], enumerable: !0 });
}, Oc = (e, t, n, r) => {
  if (t && typeof t == "object" || typeof t == "function") for (let i of Ec(t)) !Pc.call(e, i) && i !== n && yi(e, i, { get: () => t[i], enumerable: !(r = _c(t, i)) || r.enumerable });
  return e;
}, ve = (e, t, n) => (n = e != null ? vc(Ac(e)) : {}, Oc(t || !e || !e.__esModule ? yi(n, "default", { value: e, enumerable: !0 }) : n, e)), wo = be((e, t) => {
  t.exports = (n, r = R.argv) => {
    let i = n.startsWith("-") ? "" : n.length === 1 ? "-" : "--", s = r.indexOf(i + n), a = r.indexOf("--");
    return s !== -1 && (a === -1 || s < a);
  };
}), Sc = be((e, t) => {
  var n = At("node:os"), r = At("node:tty"), i = wo(), { env: s } = R, a;
  i("no-color") || i("no-colors") || i("color=false") || i("color=never") ? a = 0 : (i("color") || i("colors") || i("color=true") || i("color=always")) && (a = 1), "FORCE_COLOR" in s && (s.FORCE_COLOR === "true" ? a = 1 : s.FORCE_COLOR === "false" ? a = 0 : a = s.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(s.FORCE_COLOR, 10), 3));
  function o(c) {
    return c === 0 ? !1 : { level: c, hasBasic: !0, has256: c >= 2, has16m: c >= 3 };
  }
  function l(c, d) {
    if (a === 0) return 0;
    if (i("color=16m") || i("color=full") || i("color=truecolor")) return 3;
    if (i("color=256")) return 2;
    if (c && !d && a === void 0) return 0;
    let f = a || 0;
    if (s.TERM === "dumb") return f;
    if (R.platform === "win32") {
      let p = n.release().split(".");
      return Number(p[0]) >= 10 && Number(p[2]) >= 10586 ? Number(p[2]) >= 14931 ? 3 : 2 : 1;
    }
    if ("CI" in s) return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((p) => p in s) || s.CI_NAME === "codeship" ? 1 : f;
    if ("TEAMCITY_VERSION" in s) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(s.TEAMCITY_VERSION) ? 1 : 0;
    if (s.COLORTERM === "truecolor") return 3;
    if ("TERM_PROGRAM" in s) {
      let p = parseInt((s.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
      switch (s.TERM_PROGRAM) {
        case "iTerm.app":
          return p >= 3 ? 3 : 2;
        case "Apple_Terminal":
          return 2;
      }
    }
    return /-256(color)?$/i.test(s.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(s.TERM) || "COLORTERM" in s ? 1 : f;
  }
  function u(c) {
    let d = l(c, c && c.isTTY);
    return o(d);
  }
  t.exports = { supportsColor: u, stdout: o(l(!0, r.isatty(1))), stderr: o(l(!0, r.isatty(2))) };
}), Ic = be((e, t) => {
  var n = Sc(), r = wo();
  function i(a) {
    if (/^\d{3,4}$/.test(a)) {
      let l = /(\d{1,2})(\d{2})/.exec(a) || [];
      return { major: 0, minor: parseInt(l[1], 10), patch: parseInt(l[2], 10) };
    }
    let o = (a || "").split(".").map((l) => parseInt(l, 10));
    return { major: o[0], minor: o[1], patch: o[2] };
  }
  function s(a) {
    let { CI: o, FORCE_HYPERLINK: l, NETLIFY: u, TEAMCITY_VERSION: c, TERM_PROGRAM: d, TERM_PROGRAM_VERSION: f, VTE_VERSION: p, TERM: h } = R.env;
    if (l) return !(l.length > 0 && parseInt(l, 10) === 0);
    if (r("no-hyperlink") || r("no-hyperlinks") || r("hyperlink=false") || r("hyperlink=never")) return !1;
    if (r("hyperlink=true") || r("hyperlink=always") || u) return !0;
    if (!n.supportsColor(a) || a && !a.isTTY) return !1;
    if ("WT_SESSION" in R.env) return !0;
    if (R.platform === "win32" || o || c) return !1;
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
    if (p) {
      if (p === "0.50.0") return !1;
      let m = i(p);
      return m.major > 0 || m.minor >= 50;
    }
    switch (h) {
      case "alacritty":
        return !0;
    }
    return !1;
  }
  t.exports = { supportsHyperlink: s, stdout: s(R.stdout), stderr: s(R.stderr) };
}), Rc = be((e, t) => {
  t.exports = { name: "@prisma/internals", version: "6.19.3", description: "This package is intended for Prisma's internal use", main: "dist/index.js", types: "dist/index.d.ts", repository: { type: "git", url: "https://github.com/prisma/prisma.git", directory: "packages/internals" }, homepage: "https://www.prisma.io", author: "Tim Suchanek <suchanek@prisma.io>", bugs: "https://github.com/prisma/prisma/issues", license: "Apache-2.0", scripts: { dev: "DEV=true tsx helpers/build.ts", build: "tsx helpers/build.ts", test: "dotenv -e ../../.db.env -- jest --silent", prepublishOnly: "pnpm run build" }, files: ["README.md", "dist", "!**/libquery_engine*", "!dist/get-generators/engines/*", "scripts"], devDependencies: { "@babel/helper-validator-identifier": "7.25.9", "@opentelemetry/api": "1.9.0", "@swc/core": "1.11.5", "@swc/jest": "0.2.37", "@types/babel__helper-validator-identifier": "7.15.2", "@types/jest": "29.5.14", "@types/node": "18.19.76", "@types/resolve": "1.20.6", archiver: "6.0.2", "checkpoint-client": "1.1.33", "cli-truncate": "4.0.0", dotenv: "16.5.0", empathic: "2.0.0", "escape-string-regexp": "5.0.0", execa: "8.0.1", "fast-glob": "3.3.3", "find-up": "7.0.0", "fp-ts": "2.16.9", "fs-extra": "11.3.0", "global-directory": "4.0.0", globby: "11.1.0", "identifier-regex": "1.0.0", "indent-string": "4.0.0", "is-windows": "1.0.2", "is-wsl": "3.1.0", jest: "29.7.0", "jest-junit": "16.0.0", kleur: "4.1.5", "mock-stdin": "1.0.0", "new-github-issue-url": "0.2.1", "node-fetch": "3.3.2", "npm-packlist": "5.1.3", open: "7.4.2", "p-map": "4.0.0", resolve: "1.22.10", "string-width": "7.2.0", "strip-indent": "4.0.0", "temp-dir": "2.0.0", tempy: "1.0.1", "terminal-link": "4.0.0", tmp: "0.2.3", "ts-pattern": "5.6.2", "ts-toolbelt": "9.6.0", typescript: "5.4.5", yarn: "1.22.22" }, dependencies: { "@prisma/config": "workspace:*", "@prisma/debug": "workspace:*", "@prisma/dmmf": "workspace:*", "@prisma/driver-adapter-utils": "workspace:*", "@prisma/engines": "workspace:*", "@prisma/fetch-engine": "workspace:*", "@prisma/generator": "workspace:*", "@prisma/generator-helper": "workspace:*", "@prisma/get-platform": "workspace:*", "@prisma/prisma-schema-wasm": "7.1.1-3.c2990dca591cba766e3b7ef5d9e8a84796e47ab7", "@prisma/schema-engine-wasm": "7.1.1-3.c2990dca591cba766e3b7ef5d9e8a84796e47ab7", "@prisma/schema-files-loader": "workspace:*", arg: "5.0.2", prompts: "2.4.2" }, peerDependencies: { typescript: ">=5.1.0" }, peerDependenciesMeta: { typescript: { optional: !0 } }, sideEffects: !1 };
}), bo = be((e, t) => {
  t.exports = { name: "@prisma/engines-version", version: "7.1.1-3.c2990dca591cba766e3b7ef5d9e8a84796e47ab7", main: "index.js", types: "index.d.ts", license: "Apache-2.0", author: "Tim Suchanek <suchanek@prisma.io>", prisma: { enginesVersion: "c2990dca591cba766e3b7ef5d9e8a84796e47ab7" }, repository: { type: "git", url: "https://github.com/prisma/engines-wrapper.git", directory: "packages/engines-version" }, devDependencies: { "@types/node": "18.19.76", typescript: "4.9.5" }, files: ["index.js", "index.d.ts"], scripts: { build: "tsc -d" } };
}), wi = be((e) => {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.enginesVersion = void 0, e.enginesVersion = bo().prisma.enginesVersion;
}), $c = be((e, t) => {
  t.exports = (n) => {
    let r = n.match(/^[ \t]*(?=\S)/gm);
    return r ? r.reduce((i, s) => Math.min(i, s.length), 1 / 0) : 0;
  };
}), vo = be((e, t) => {
  t.exports = (n, r = 1, i) => {
    if (i = { indent: " ", includeEmptyLines: !1, ...i }, typeof n != "string") throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof n}\``);
    if (typeof r != "number") throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof r}\``);
    if (typeof i.indent != "string") throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof i.indent}\``);
    if (r === 0) return n;
    let s = i.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
    return n.replace(s, i.indent.repeat(r));
  };
}), Tc = be((e, t) => {
  t.exports = { name: "dotenv", version: "16.5.0", description: "Loads environment variables from .env file", main: "lib/main.js", types: "lib/main.d.ts", exports: { ".": { types: "./lib/main.d.ts", require: "./lib/main.js", default: "./lib/main.js" }, "./config": "./config.js", "./config.js": "./config.js", "./lib/env-options": "./lib/env-options.js", "./lib/env-options.js": "./lib/env-options.js", "./lib/cli-options": "./lib/cli-options.js", "./lib/cli-options.js": "./lib/cli-options.js", "./package.json": "./package.json" }, scripts: { "dts-check": "tsc --project tests/types/tsconfig.json", lint: "standard", pretest: "npm run lint && npm run dts-check", test: "tap run --allow-empty-coverage --disable-coverage --timeout=60000", "test:coverage": "tap run --show-full-coverage --timeout=60000 --coverage-report=lcov", prerelease: "npm test", release: "standard-version" }, repository: { type: "git", url: "git://github.com/motdotla/dotenv.git" }, homepage: "https://github.com/motdotla/dotenv#readme", funding: "https://dotenvx.com", keywords: ["dotenv", "env", ".env", "environment", "variables", "config", "settings"], readmeFilename: "README.md", license: "BSD-2-Clause", devDependencies: { "@types/node": "^18.11.3", decache: "^4.6.2", sinon: "^14.0.1", standard: "^17.0.0", "standard-version": "^9.5.0", tap: "^19.2.0", typescript: "^4.8.4" }, engines: { node: ">=12" }, browser: { fs: !1 } };
}), Nc = be((e, t) => {
  var n = At("node:fs"), r = At("node:path"), i = At("node:os"), s = At("node:crypto"), a = Tc(), o = a.version, l = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
  function u(b) {
    let E = {}, S = b.toString();
    S = S.replace(/\r\n?/mg, `
`);
    let j;
    for (; (j = l.exec(S)) != null; ) {
      let C = j[1], x = j[2] || "";
      x = x.trim();
      let q = x[0];
      x = x.replace(/^(['"`])([\s\S]*)\1$/mg, "$2"), q === '"' && (x = x.replace(/\\n/g, `
`), x = x.replace(/\\r/g, "\r")), E[C] = x;
    }
    return E;
  }
  function c(b) {
    let E = m(b), S = N.configDotenv({ path: E });
    if (!S.parsed) {
      let q = new Error(`MISSING_DATA: Cannot parse ${E} for an unknown reason`);
      throw q.code = "MISSING_DATA", q;
    }
    let j = p(b).split(","), C = j.length, x;
    for (let q = 0; q < C; q++) try {
      let G = j[q].trim(), M = h(S, G);
      x = N.decrypt(M.ciphertext, M.key);
      break;
    } catch (G) {
      if (q + 1 >= C) throw G;
    }
    return N.parse(x);
  }
  function d(b) {
    console.log(`[dotenv@${o}][WARN] ${b}`);
  }
  function f(b) {
    console.log(`[dotenv@${o}][DEBUG] ${b}`);
  }
  function p(b) {
    return b && b.DOTENV_KEY && b.DOTENV_KEY.length > 0 ? b.DOTENV_KEY : R.env.DOTENV_KEY && R.env.DOTENV_KEY.length > 0 ? R.env.DOTENV_KEY : "";
  }
  function h(b, E) {
    let S;
    try {
      S = new URL(E);
    } catch (G) {
      if (G.code === "ERR_INVALID_URL") {
        let M = new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");
        throw M.code = "INVALID_DOTENV_KEY", M;
      }
      throw G;
    }
    let j = S.password;
    if (!j) {
      let G = new Error("INVALID_DOTENV_KEY: Missing key part");
      throw G.code = "INVALID_DOTENV_KEY", G;
    }
    let C = S.searchParams.get("environment");
    if (!C) {
      let G = new Error("INVALID_DOTENV_KEY: Missing environment part");
      throw G.code = "INVALID_DOTENV_KEY", G;
    }
    let x = `DOTENV_VAULT_${C.toUpperCase()}`, q = b.parsed[x];
    if (!q) {
      let G = new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${x} in your .env.vault file.`);
      throw G.code = "NOT_FOUND_DOTENV_ENVIRONMENT", G;
    }
    return { ciphertext: q, key: j };
  }
  function m(b) {
    let E = null;
    if (b && b.path && b.path.length > 0) if (Array.isArray(b.path)) for (let S of b.path) n.existsSync(S) && (E = S.endsWith(".vault") ? S : `${S}.vault`);
    else E = b.path.endsWith(".vault") ? b.path : `${b.path}.vault`;
    else E = r.resolve(R.cwd(), ".env.vault");
    return n.existsSync(E) ? E : null;
  }
  function v(b) {
    return b[0] === "~" ? r.join(i.homedir(), b.slice(1)) : b;
  }
  function _(b) {
    b && b.debug && f("Loading env from encrypted .env.vault");
    let E = N._parseVault(b), S = R.env;
    return b && b.processEnv != null && (S = b.processEnv), N.populate(S, E, b), { parsed: E };
  }
  function A(b) {
    let E = r.resolve(R.cwd(), ".env"), S = "utf8", j = !!(b && b.debug);
    b && b.encoding ? S = b.encoding : j && f("No encoding is specified. UTF-8 is used by default");
    let C = [E];
    if (b && b.path) if (!Array.isArray(b.path)) C = [v(b.path)];
    else {
      C = [];
      for (let M of b.path) C.push(v(M));
    }
    let x, q = {};
    for (let M of C) try {
      let F = N.parse(n.readFileSync(M, { encoding: S }));
      N.populate(q, F, b);
    } catch (F) {
      j && f(`Failed to load ${M} ${F.message}`), x = F;
    }
    let G = R.env;
    return b && b.processEnv != null && (G = b.processEnv), N.populate(G, q, b), x ? { parsed: q, error: x } : { parsed: q };
  }
  function I(b) {
    if (p(b).length === 0) return N.configDotenv(b);
    let E = m(b);
    return E ? N._configVault(b) : (d(`You set DOTENV_KEY but you are missing a .env.vault file at ${E}. Did you forget to build it?`), N.configDotenv(b));
  }
  function T(b, E) {
    let S = Buffer.from(E.slice(-64), "hex"), j = Buffer.from(b, "base64"), C = j.subarray(0, 12), x = j.subarray(-16);
    j = j.subarray(12, -16);
    try {
      let q = s.createDecipheriv("aes-256-gcm", S, C);
      return q.setAuthTag(x), `${q.update(j)}${q.final()}`;
    } catch (q) {
      let G = q instanceof RangeError, M = q.message === "Invalid key length", F = q.message === "Unsupported state or unable to authenticate data";
      if (G || M) {
        let Ct = new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");
        throw Ct.code = "INVALID_DOTENV_KEY", Ct;
      } else if (F) {
        let Ct = new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");
        throw Ct.code = "DECRYPTION_FAILED", Ct;
      } else throw q;
    }
  }
  function X(b, E, S = {}) {
    let j = !!(S && S.debug), C = !!(S && S.override);
    if (typeof E != "object") {
      let x = new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");
      throw x.code = "OBJECT_REQUIRED", x;
    }
    for (let x of Object.keys(E)) Object.prototype.hasOwnProperty.call(b, x) ? (C === !0 && (b[x] = E[x]), j && f(C === !0 ? `"${x}" is already defined and WAS overwritten` : `"${x}" is already defined and was NOT overwritten`)) : b[x] = E[x];
  }
  var N = { configDotenv: A, _configVault: _, _parseVault: c, config: I, decrypt: T, parse: u, populate: X };
  t.exports.configDotenv = N.configDotenv, t.exports._configVault = N._configVault, t.exports._parseVault = N._parseVault, t.exports.config = N.config, t.exports.decrypt = N.decrypt, t.exports.parse = N.parse, t.exports.populate = N.populate, t.exports = N;
}), kc = be((e, t) => {
  t.exports = (n = {}) => {
    let r;
    if (n.repoUrl) r = n.repoUrl;
    else if (n.user && n.repo) r = `https://github.com/${n.user}/${n.repo}`;
    else throw new Error("You need to specify either the `repoUrl` option or both the `user` and `repo` options");
    let i = new URL(`${r}/issues/new`), s = ["body", "title", "labels", "template", "milestone", "assignee", "projects"];
    for (let a of s) {
      let o = n[a];
      if (o !== void 0) {
        if (a === "labels" || a === "projects") {
          if (!Array.isArray(o)) throw new TypeError(`The \`${a}\` option should be an array`);
          o = o.join(",");
        }
        i.searchParams.set(a, o);
      }
    }
    return i.toString();
  }, t.exports.default = t.exports;
}), _o = be((e, t) => {
  t.exports = /* @__PURE__ */ function() {
    function n(r, i, s, a, o) {
      return r < i || s < i ? r > s ? s + 1 : r + 1 : a === o ? i : i + 1;
    }
    return function(r, i) {
      if (r === i) return 0;
      if (r.length > i.length) {
        var s = r;
        r = i, i = s;
      }
      for (var a = r.length, o = i.length; a > 0 && r.charCodeAt(a - 1) === i.charCodeAt(o - 1); ) a--, o--;
      for (var l = 0; l < a && r.charCodeAt(l) === i.charCodeAt(l); ) l++;
      if (a -= l, o -= l, a === 0 || o < 3) return o;
      var u = 0, c, d, f, p, h, m, v, _, A, I, T, X, N = [];
      for (c = 0; c < a; c++) N.push(c + 1), N.push(r.charCodeAt(l + c));
      for (var b = N.length - 1; u < o - 3; ) for (A = i.charCodeAt(l + (d = u)), I = i.charCodeAt(l + (f = u + 1)), T = i.charCodeAt(l + (p = u + 2)), X = i.charCodeAt(l + (h = u + 3)), m = u += 4, c = 0; c < b; c += 2) v = N[c], _ = N[c + 1], d = n(v, d, f, A, _), f = n(d, f, p, I, _), p = n(f, p, h, T, _), m = n(p, h, m, X, _), N[c] = m, h = p, p = f, f = d, d = v;
      for (; u < o; ) for (A = i.charCodeAt(l + (d = u)), m = ++u, c = 0; c < b; c += 2) v = N[c], N[c] = m = n(v, d, m, A, N[c + 1]), d = v;
      return m;
    };
  }();
}), Dc = yo(() => {
}), xc = yo(() => {
}), bi = {};
kt(bi, { defineExtension: () => Lc, getExtensionContext: () => Cc });
function Lc(e) {
  return typeof e == "function" ? e : (t) => t.$extends(e);
}
function Cc(e) {
  return e;
}
var Uc = {};
kt(Uc, { validator: () => Fc });
function Fc(...e) {
  return (t) => t;
}
var $r = {};
kt($r, { $: () => So, bgBlack: () => Jc, bgBlue: () => Yc, bgCyan: () => ed, bgGreen: () => Kc, bgMagenta: () => Xc, bgRed: () => Hc, bgWhite: () => td, bgYellow: () => Qc, black: () => Zc, blue: () => Bt, bold: () => Pe, cyan: () => ut, dim: () => fn, gray: () => vi, green: () => tn, grey: () => Wc, hidden: () => Vc, inverse: () => Mc, italic: () => qc, magenta: () => Bc, red: () => pt, reset: () => jc, strikethrough: () => zc, underline: () => ye, white: () => Gc, yellow: () => pn });
var Tr, Eo, Ao, Po, Oo = !0;
typeof R < "u" && ({ FORCE_COLOR: Tr, NODE_DISABLE_COLORS: Eo, NO_COLOR: Ao, TERM: Po } = R.env || {}, Oo = R.stdout && R.stdout.isTTY);
var So = { enabled: !Eo && Ao == null && Po !== "dumb" && (Tr != null && Tr !== "0" || Oo) };
function W(e, t) {
  let n = new RegExp(`\\x1b\\[${t}m`, "g"), r = `\x1B[${e}m`, i = `\x1B[${t}m`;
  return function(s) {
    return !So.enabled || s == null ? s : r + (~("" + s).indexOf(i) ? s.replace(n, i + r) : s) + i;
  };
}
var jc = W(0, 0), Pe = W(1, 22), fn = W(2, 22), qc = W(3, 23), ye = W(4, 24), Mc = W(7, 27), Vc = W(8, 28), zc = W(9, 29), Zc = W(30, 39), pt = W(31, 39), tn = W(32, 39), pn = W(33, 39), Bt = W(34, 39), Bc = W(35, 39), ut = W(36, 39), Gc = W(37, 39), vi = W(90, 39), Wc = W(90, 39), Jc = W(40, 49), Hc = W(41, 49), Kc = W(42, 49), Qc = W(43, 49), Yc = W(44, 49), Xc = W(45, 49), ed = W(46, 49), td = W(47, 49), nd = 100, cs = ["green", "yellow", "blue", "magenta", "cyan", "red"], Gt = [], ds = Date.now(), rd = 0, Nr = typeof R < "u" ? R.env : {};
globalThis.DEBUG ?? (globalThis.DEBUG = Nr.DEBUG ?? "");
globalThis.DEBUG_COLORS ?? (globalThis.DEBUG_COLORS = Nr.DEBUG_COLORS ? Nr.DEBUG_COLORS === "true" : !0);
var Wt = { enable(e) {
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
function id(e) {
  let t = { color: cs[rd++ % cs.length], enabled: Wt.enabled(e), namespace: e, log: Wt.log, extend: () => {
  } }, n = (...r) => {
    let { enabled: i, namespace: s, color: a, log: o } = t;
    if (r.length !== 0 && Gt.push([s, ...r]), Gt.length > nd && Gt.shift(), Wt.enabled(s) || i) {
      let l = r.map((c) => typeof c == "string" ? c : sd(c)), u = `+${Date.now() - ds}ms`;
      ds = Date.now(), globalThis.DEBUG_COLORS ? o($r[a](Pe(s)), ...l, $r[a](u)) : o(s, ...l, u);
    }
  };
  return new Proxy(n, { get: (r, i) => t[i], set: (r, i, s) => t[i] = s });
}
var pe = new Proxy(id, { get: (e, t) => Wt[t], set: (e, t, n) => Wt[t] = n });
function sd(e, t = 2) {
  let n = /* @__PURE__ */ new Set();
  return JSON.stringify(e, (r, i) => {
    if (typeof i == "object" && i !== null) {
      if (n.has(i)) return "[Circular *]";
      n.add(i);
    } else if (typeof i == "bigint") return i.toString();
    return i;
  }, t);
}
function ad(e = 7500) {
  let t = Gt.map(([n, ...r]) => `${n} ${r.map((i) => typeof i == "string" ? i : JSON.stringify(i)).join(" ")}`).join(`
`);
  return t.length < e ? t : t.slice(-e);
}
function od() {
  Gt.length = 0;
}
var _i = pe;
function ld() {
  let e = R.env.PRISMA_QUERY_ENGINE_LIBRARY;
  if (!(e && ft.existsSync(e)) && R.arch === "ia32") throw new Error('The default query engine type (Node-API, "library") is currently not supported for 32bit Node. Please set `engineType = "binary"` in the "generator" block of your "schema.prisma" file (or use the environment variables "PRISMA_CLIENT_ENGINE_TYPE=binary" and/or "PRISMA_CLI_QUERY_ENGINE_TYPE=binary".)');
}
var ud = ["darwin", "darwin-arm64", "debian-openssl-1.0.x", "debian-openssl-1.1.x", "debian-openssl-3.0.x", "rhel-openssl-1.0.x", "rhel-openssl-1.1.x", "rhel-openssl-3.0.x", "linux-arm64-openssl-1.1.x", "linux-arm64-openssl-1.0.x", "linux-arm64-openssl-3.0.x", "linux-arm-openssl-1.1.x", "linux-arm-openssl-1.0.x", "linux-arm-openssl-3.0.x", "linux-musl", "linux-musl-openssl-3.0.x", "linux-musl-arm64-openssl-1.1.x", "linux-musl-arm64-openssl-3.0.x", "linux-nixos", "linux-static-x64", "linux-static-arm64", "windows", "freebsd11", "freebsd12", "freebsd13", "freebsd14", "freebsd15", "openbsd", "netbsd", "arm"], fs = "libquery_engine";
function cd(e, t) {
  return e.includes("windows") ? `query_engine-${e}.dll.node` : e.includes("darwin") ? `${fs}-${e}.dylib.node` : `${fs}-${e}.so.node`;
}
var Me = Symbol.for("@ts-pattern/matcher"), dd = Symbol.for("@ts-pattern/isVariadic"), Fn = "@ts-pattern/anonymous-select-key", kr = (e) => !!(e && typeof e == "object"), $n = (e) => e && !!e[Me], Te = (e, t, n) => {
  if ($n(e)) {
    let r = e[Me](), { matched: i, selections: s } = r.match(t);
    return i && s && Object.keys(s).forEach((a) => n(a, s[a])), i;
  }
  if (kr(e)) {
    if (!kr(t)) return !1;
    if (Array.isArray(e)) {
      if (!Array.isArray(t)) return !1;
      let r = [], i = [], s = [];
      for (let a of e.keys()) {
        let o = e[a];
        $n(o) && o[dd] ? s.push(o) : s.length ? i.push(o) : r.push(o);
      }
      if (s.length) {
        if (s.length > 1) throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
        if (t.length < r.length + i.length) return !1;
        let a = t.slice(0, r.length), o = i.length === 0 ? [] : t.slice(-i.length), l = t.slice(r.length, i.length === 0 ? 1 / 0 : -i.length);
        return r.every((u, c) => Te(u, a[c], n)) && i.every((u, c) => Te(u, o[c], n)) && (s.length === 0 || Te(s[0], l, n));
      }
      return e.length === t.length && e.every((a, o) => Te(a, t[o], n));
    }
    return Reflect.ownKeys(e).every((r) => {
      let i = e[r];
      return (r in t || $n(s = i) && s[Me]().matcherType === "optional") && Te(i, t[r], n);
      var s;
    });
  }
  return Object.is(t, e);
}, Xe = (e) => {
  var t, n, r;
  return kr(e) ? $n(e) ? (t = (n = (r = e[Me]()).getSelectionKeys) == null ? void 0 : n.call(r)) != null ? t : [] : Array.isArray(e) ? nn(e, Xe) : nn(Object.values(e), Xe) : [];
}, nn = (e, t) => e.reduce((n, r) => n.concat(t(r)), []);
function _e(e) {
  return Object.assign(e, { optional: () => fd(e), and: (t) => H(e, t), or: (t) => pd(e, t), select: (t) => t === void 0 ? ps(e) : ps(t, e) });
}
function fd(e) {
  return _e({ [Me]: () => ({ match: (t) => {
    let n = {}, r = (i, s) => {
      n[i] = s;
    };
    return t === void 0 ? (Xe(e).forEach((i) => r(i, void 0)), { matched: !0, selections: n }) : { matched: Te(e, t, r), selections: n };
  }, getSelectionKeys: () => Xe(e), matcherType: "optional" }) });
}
function H(...e) {
  return _e({ [Me]: () => ({ match: (t) => {
    let n = {}, r = (i, s) => {
      n[i] = s;
    };
    return { matched: e.every((i) => Te(i, t, r)), selections: n };
  }, getSelectionKeys: () => nn(e, Xe), matcherType: "and" }) });
}
function pd(...e) {
  return _e({ [Me]: () => ({ match: (t) => {
    let n = {}, r = (i, s) => {
      n[i] = s;
    };
    return nn(e, Xe).forEach((i) => r(i, void 0)), { matched: e.some((i) => Te(i, t, r)), selections: n };
  }, getSelectionKeys: () => nn(e, Xe), matcherType: "or" }) });
}
function V(e) {
  return { [Me]: () => ({ match: (t) => ({ matched: !!e(t) }) }) };
}
function ps(...e) {
  let t = typeof e[0] == "string" ? e[0] : void 0, n = e.length === 2 ? e[1] : typeof e[0] == "string" ? void 0 : e[0];
  return _e({ [Me]: () => ({ match: (r) => {
    let i = { [t ?? Fn]: r };
    return { matched: n === void 0 || Te(n, r, (s, a) => {
      i[s] = a;
    }), selections: i };
  }, getSelectionKeys: () => [t ?? Fn].concat(n === void 0 ? [] : Xe(n)) }) });
}
function Ie(e) {
  return typeof e == "number";
}
function Be(e) {
  return typeof e == "string";
}
function Ge(e) {
  return typeof e == "bigint";
}
_e(V(function(e) {
  return !0;
}));
var We = (e) => Object.assign(_e(e), { startsWith: (t) => {
  return We(H(e, (n = t, V((r) => Be(r) && r.startsWith(n)))));
  var n;
}, endsWith: (t) => {
  return We(H(e, (n = t, V((r) => Be(r) && r.endsWith(n)))));
  var n;
}, minLength: (t) => We(H(e, ((n) => V((r) => Be(r) && r.length >= n))(t))), length: (t) => We(H(e, ((n) => V((r) => Be(r) && r.length === n))(t))), maxLength: (t) => We(H(e, ((n) => V((r) => Be(r) && r.length <= n))(t))), includes: (t) => {
  return We(H(e, (n = t, V((r) => Be(r) && r.includes(n)))));
  var n;
}, regex: (t) => {
  return We(H(e, (n = t, V((r) => Be(r) && !!r.match(n)))));
  var n;
} });
We(V(Be));
var Re = (e) => Object.assign(_e(e), { between: (t, n) => Re(H(e, ((r, i) => V((s) => Ie(s) && r <= s && i >= s))(t, n))), lt: (t) => Re(H(e, ((n) => V((r) => Ie(r) && r < n))(t))), gt: (t) => Re(H(e, ((n) => V((r) => Ie(r) && r > n))(t))), lte: (t) => Re(H(e, ((n) => V((r) => Ie(r) && r <= n))(t))), gte: (t) => Re(H(e, ((n) => V((r) => Ie(r) && r >= n))(t))), int: () => Re(H(e, V((t) => Ie(t) && Number.isInteger(t)))), finite: () => Re(H(e, V((t) => Ie(t) && Number.isFinite(t)))), positive: () => Re(H(e, V((t) => Ie(t) && t > 0))), negative: () => Re(H(e, V((t) => Ie(t) && t < 0))) });
Re(V(Ie));
var Je = (e) => Object.assign(_e(e), { between: (t, n) => Je(H(e, ((r, i) => V((s) => Ge(s) && r <= s && i >= s))(t, n))), lt: (t) => Je(H(e, ((n) => V((r) => Ge(r) && r < n))(t))), gt: (t) => Je(H(e, ((n) => V((r) => Ge(r) && r > n))(t))), lte: (t) => Je(H(e, ((n) => V((r) => Ge(r) && r <= n))(t))), gte: (t) => Je(H(e, ((n) => V((r) => Ge(r) && r >= n))(t))), positive: () => Je(H(e, V((t) => Ge(t) && t > 0))), negative: () => Je(H(e, V((t) => Ge(t) && t < 0))) });
Je(V(Ge));
_e(V(function(e) {
  return typeof e == "boolean";
}));
_e(V(function(e) {
  return typeof e == "symbol";
}));
_e(V(function(e) {
  return e == null;
}));
_e(V(function(e) {
  return e != null;
}));
var hd = class extends Error {
  constructor(e) {
    let t;
    try {
      t = JSON.stringify(e);
    } catch {
      t = e;
    }
    super(`Pattern matching error: no pattern matches value ${t}`), this.input = void 0, this.input = e;
  }
}, Dr = { matched: !1, value: void 0 };
function Qn(e) {
  return new md(e, Dr);
}
var md = class xr {
  constructor(t, n) {
    this.input = void 0, this.state = void 0, this.input = t, this.state = n;
  }
  with(...t) {
    if (this.state.matched) return this;
    let n = t[t.length - 1], r = [t[0]], i;
    t.length === 3 && typeof t[1] == "function" ? i = t[1] : t.length > 2 && r.push(...t.slice(1, t.length - 1));
    let s = !1, a = {}, o = (u, c) => {
      s = !0, a[u] = c;
    }, l = !r.some((u) => Te(u, this.input, o)) || i && !i(this.input) ? Dr : { matched: !0, value: n(s ? Fn in a ? a[Fn] : a : this.input, this.input) };
    return new xr(this.input, l);
  }
  when(t, n) {
    if (this.state.matched) return this;
    let r = !!t(this.input);
    return new xr(this.input, r ? { matched: !0, value: n(this.input, this.input) } : Dr);
  }
  otherwise(t) {
    return this.state.matched ? this.state.value : t(this.input);
  }
  exhaustive() {
    if (this.state.matched) return this.state.value;
    throw new hd(this.input);
  }
  run() {
    return this.exhaustive();
  }
  returnType() {
    return this;
  }
}, gd = { warn: pn("prisma:warn") }, yd = { warn: () => !R.env.PRISMA_DISABLE_WARNINGS };
function mr(e, ...t) {
  yd.warn() && console.warn(`${gd.warn} ${e}`, ...t);
}
var wd = yc(gc.exec), de = _i("prisma:get-platform"), bd = ["1.0.x", "1.1.x", "3.0.x"];
async function vd() {
  let e = en.platform(), t = R.arch;
  if (e === "freebsd") {
    let a = await jn("freebsd-version");
    if (a && a.trim().length > 0) {
      let o = /^(\d+)\.?/.exec(a);
      if (o) return { platform: "freebsd", targetDistro: `freebsd${o[1]}`, arch: t };
    }
  }
  if (e !== "linux") return { platform: e, arch: t };
  let n = await Ed(), r = await Nd(), i = Pd({ arch: t, archFromUname: r, familyDistro: n.familyDistro }), { libssl: s } = await Od(i);
  return { platform: "linux", libssl: s, arch: t, archFromUname: r, ...n };
}
function _d(e) {
  let t = /^ID="?([^"\n]*)"?$/im, n = /^ID_LIKE="?([^"\n]*)"?$/im, r = t.exec(e), i = r && r[1] && r[1].toLowerCase() || "", s = n.exec(e), a = s && s[1] && s[1].toLowerCase() || "", o = Qn({ id: i, idLike: a }).with({ id: "alpine" }, ({ id: l }) => ({ targetDistro: "musl", familyDistro: l, originalDistro: l })).with({ id: "raspbian" }, ({ id: l }) => ({ targetDistro: "arm", familyDistro: "debian", originalDistro: l })).with({ id: "nixos" }, ({ id: l }) => ({ targetDistro: "nixos", originalDistro: l, familyDistro: "nixos" })).with({ id: "debian" }, { id: "ubuntu" }, ({ id: l }) => ({ targetDistro: "debian", familyDistro: "debian", originalDistro: l })).with({ id: "rhel" }, { id: "centos" }, { id: "fedora" }, ({ id: l }) => ({ targetDistro: "rhel", familyDistro: "rhel", originalDistro: l })).when(({ idLike: l }) => l.includes("debian") || l.includes("ubuntu"), ({ id: l }) => ({ targetDistro: "debian", familyDistro: "debian", originalDistro: l })).when(({ idLike: l }) => i === "arch" || l.includes("arch"), ({ id: l }) => ({ targetDistro: "debian", familyDistro: "arch", originalDistro: l })).when(({ idLike: l }) => l.includes("centos") || l.includes("fedora") || l.includes("rhel") || l.includes("suse"), ({ id: l }) => ({ targetDistro: "rhel", familyDistro: "rhel", originalDistro: l })).otherwise(({ id: l }) => ({ targetDistro: void 0, familyDistro: void 0, originalDistro: l }));
  return de(`Found distro info:
${JSON.stringify(o, null, 2)}`), o;
}
async function Ed() {
  let e = "/etc/os-release";
  try {
    let t = await ho.readFile(e, { encoding: "utf-8" });
    return _d(t);
  } catch {
    return { targetDistro: void 0, familyDistro: void 0, originalDistro: void 0 };
  }
}
function Ad(e) {
  let t = /^OpenSSL\s(\d+\.\d+)\.\d+/.exec(e);
  if (t) {
    let n = `${t[1]}.x`;
    return Io(n);
  }
}
function hs(e) {
  let t = /libssl\.so\.(\d)(\.\d)?/.exec(e);
  if (t) {
    let n = `${t[1]}${t[2] ?? ".0"}.x`;
    return Io(n);
  }
}
function Io(e) {
  let t = (() => {
    if ($o(e)) return e;
    let n = e.split(".");
    return n[1] = "0", n.join(".");
  })();
  if (bd.includes(t)) return t;
}
function Pd(e) {
  return Qn(e).with({ familyDistro: "musl" }, () => (de('Trying platform-specific paths for "alpine"'), ["/lib", "/usr/lib"])).with({ familyDistro: "debian" }, ({ archFromUname: t }) => (de('Trying platform-specific paths for "debian" (and "ubuntu")'), [`/usr/lib/${t}-linux-gnu`, `/lib/${t}-linux-gnu`])).with({ familyDistro: "rhel" }, () => (de('Trying platform-specific paths for "rhel"'), ["/lib64", "/usr/lib64"])).otherwise(({ familyDistro: t, arch: n, archFromUname: r }) => (de(`Don't know any platform-specific paths for "${t}" on ${n} (${r})`), []));
}
async function Od(e) {
  let t = 'grep -v "libssl.so.0"', n = await ms(e);
  if (n) {
    de(`Found libssl.so file using platform-specific paths: ${n}`);
    let s = hs(n);
    if (de(`The parsed libssl version is: ${s}`), s) return { libssl: s, strategy: "libssl-specific-path" };
  }
  de('Falling back to "ldconfig" and other generic paths');
  let r = await jn(`ldconfig -p | sed "s/.*=>s*//" | sed "s|.*/||" | grep libssl | sort | ${t}`);
  if (r || (r = await ms(["/lib64", "/usr/lib64", "/lib", "/usr/lib"])), r) {
    de(`Found libssl.so file using "ldconfig" or other generic paths: ${r}`);
    let s = hs(r);
    if (de(`The parsed libssl version is: ${s}`), s) return { libssl: s, strategy: "ldconfig" };
  }
  let i = await jn("openssl version -v");
  if (i) {
    de(`Found openssl binary with version: ${i}`);
    let s = Ad(i);
    if (de(`The parsed openssl version is: ${s}`), s) return { libssl: s, strategy: "openssl-binary" };
  }
  return de("Couldn't find any version of libssl or OpenSSL in the system"), {};
}
async function ms(e) {
  for (let t of e) {
    let n = await Sd(t);
    if (n) return n;
  }
}
async function Sd(e) {
  try {
    return (await ho.readdir(e)).find((t) => t.startsWith("libssl.so.") && !t.startsWith("libssl.so.0"));
  } catch (t) {
    if (t.code === "ENOENT") return;
    throw t;
  }
}
async function Ei() {
  let { binaryTarget: e } = await Ro();
  return e;
}
function Id(e) {
  return e.binaryTarget !== void 0;
}
async function Rd() {
  let { memoized: e, ...t } = await Ro();
  return t;
}
var vn = {};
async function Ro() {
  if (Id(vn)) return Promise.resolve({ ...vn, memoized: !0 });
  let e = await vd(), t = $d(e);
  return vn = { ...e, binaryTarget: t }, { ...vn, memoized: !1 };
}
function $d(e) {
  let { platform: t, arch: n, archFromUname: r, libssl: i, targetDistro: s, familyDistro: a, originalDistro: o } = e;
  t === "linux" && !["x64", "arm64"].includes(n) && mr(`Prisma only officially supports Linux on amd64 (x86_64) and arm64 (aarch64) system architectures (detected "${n}" instead). If you are using your own custom Prisma engines, you can ignore this warning, as long as you've compiled the engines for your system architecture "${r}".`);
  let l = "1.1.x";
  if (t === "linux" && i === void 0) {
    let c = Qn({ familyDistro: a }).with({ familyDistro: "debian" }, () => "Please manually install OpenSSL via `apt-get update -y && apt-get install -y openssl` and try installing Prisma again. If you're running Prisma on Docker, add this command to your Dockerfile, or switch to an image that already has OpenSSL installed.").otherwise(() => "Please manually install OpenSSL and try installing Prisma again.");
    mr(`Prisma failed to detect the libssl/openssl version to use, and may not work as expected. Defaulting to "openssl-${l}".
${c}`);
  }
  let u = "debian";
  if (t === "linux" && s === void 0 && de(`Distro is "${o}". Falling back to Prisma engines built for "${u}".`), t === "darwin" && n === "arm64") return "darwin-arm64";
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
    return !i || $o(i) ? c : `${c}-openssl-${i}`;
  }
  return t === "linux" && s && i ? `${s}-openssl-${i}` : (t !== "linux" && mr(`Prisma detected unknown OS "${t}" and may not work as expected. Defaulting to "linux".`), i ? `${u}-openssl-${i}` : s ? `${s}-openssl-${l}` : `${u}-openssl-${l}`);
}
async function Td(e) {
  try {
    return await e();
  } catch {
    return;
  }
}
function jn(e) {
  return Td(async () => {
    let t = await wd(e);
    return de(`Command "${e}" successfully returned "${t.stdout}"`), t.stdout;
  });
}
async function Nd() {
  var e;
  return typeof en.machine == "function" ? en.machine() : (e = await jn("uname -m")) == null ? void 0 : e.trim();
}
function $o(e) {
  return e.startsWith("1.");
}
var To = {};
kt(To, { beep: () => rf, clearScreen: () => Xd, clearTerminal: () => ef, cursorBackward: () => Fd, cursorDown: () => Cd, cursorForward: () => Ud, cursorGetPosition: () => Md, cursorHide: () => Zd, cursorLeft: () => Do, cursorMove: () => Ld, cursorNextLine: () => Vd, cursorPrevLine: () => zd, cursorRestorePosition: () => qd, cursorSavePosition: () => jd, cursorShow: () => Bd, cursorTo: () => xd, cursorUp: () => ko, enterAlternativeScreen: () => tf, eraseDown: () => Hd, eraseEndLine: () => Wd, eraseLine: () => xo, eraseLines: () => Gd, eraseScreen: () => Lr, eraseStartLine: () => Jd, eraseUp: () => Kd, exitAlternativeScreen: () => nf, iTerm: () => of, image: () => af, link: () => sf, scrollDown: () => Yd, scrollUp: () => Qd });
var xa, Ai = ((xa = globalThis.window) == null ? void 0 : xa.document) !== void 0, La, Ca;
(Ca = (La = globalThis.process) == null ? void 0 : La.versions) == null || Ca.node;
var Ua, Fa;
(Fa = (Ua = globalThis.process) == null ? void 0 : Ua.versions) == null || Fa.bun;
var ja, qa;
(qa = (ja = globalThis.Deno) == null ? void 0 : ja.version) == null || qa.deno;
var Ma, Va;
(Va = (Ma = globalThis.process) == null ? void 0 : Ma.versions) == null || Va.electron;
var za, Za;
(Za = (za = globalThis.navigator) == null ? void 0 : za.userAgent) == null || Za.includes("jsdom");
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
typeof DedicatedWorkerGlobalScope < "u" && globalThis instanceof DedicatedWorkerGlobalScope;
typeof SharedWorkerGlobalScope < "u" && globalThis instanceof SharedWorkerGlobalScope;
typeof ServiceWorkerGlobalScope < "u" && globalThis instanceof ServiceWorkerGlobalScope;
var Ba, Ga, Yn = (Ga = (Ba = globalThis.navigator) == null ? void 0 : Ba.userAgentData) == null ? void 0 : Ga.platform, Wa, Ja, Ha, Ka;
Yn === "macOS" || ((Wa = globalThis.navigator) == null ? void 0 : Wa.platform) === "MacIntel" || ((Ha = (Ja = globalThis.navigator) == null ? void 0 : Ja.userAgent) == null ? void 0 : Ha.includes(" Mac ")) === !0 || ((Ka = globalThis.process) == null || Ka.platform);
var Qa, Ya;
Yn === "Windows" || ((Qa = globalThis.navigator) == null ? void 0 : Qa.platform) === "Win32" || ((Ya = globalThis.process) == null || Ya.platform);
var Xa, eo, to, no, ro;
Yn === "Linux" || ((eo = (Xa = globalThis.navigator) == null ? void 0 : Xa.platform) == null ? void 0 : eo.startsWith("Linux")) === !0 || ((no = (to = globalThis.navigator) == null ? void 0 : to.userAgent) == null ? void 0 : no.includes(" Linux ")) === !0 || ((ro = globalThis.process) == null || ro.platform);
var io, so, ao, oo;
Yn === "Android" || ((io = globalThis.navigator) == null ? void 0 : io.platform) === "Android" || ((ao = (so = globalThis.navigator) == null ? void 0 : so.userAgent) == null ? void 0 : ao.includes(" Android ")) === !0 || ((oo = globalThis.process) == null || oo.platform);
var z = "\x1B[", rn = "\x1B]", Ot = "\x07", Mt = ";", No = !Ai && mi.env.TERM_PROGRAM === "Apple_Terminal", kd = !Ai && mi.platform === "win32", Dd = Ai ? () => {
  throw new Error("`process.cwd()` only works in Node.js, not the browser.");
} : mi.cwd, xd = (e, t) => {
  if (typeof e != "number") throw new TypeError("The `x` argument is required");
  return typeof t != "number" ? z + (e + 1) + "G" : z + (t + 1) + Mt + (e + 1) + "H";
}, Ld = (e, t) => {
  if (typeof e != "number") throw new TypeError("The `x` argument is required");
  let n = "";
  return e < 0 ? n += z + -e + "D" : e > 0 && (n += z + e + "C"), t < 0 ? n += z + -t + "A" : t > 0 && (n += z + t + "B"), n;
}, ko = (e = 1) => z + e + "A", Cd = (e = 1) => z + e + "B", Ud = (e = 1) => z + e + "C", Fd = (e = 1) => z + e + "D", Do = z + "G", jd = No ? "\x1B7" : z + "s", qd = No ? "\x1B8" : z + "u", Md = z + "6n", Vd = z + "E", zd = z + "F", Zd = z + "?25l", Bd = z + "?25h", Gd = (e) => {
  let t = "";
  for (let n = 0; n < e; n++) t += xo + (n < e - 1 ? ko() : "");
  return e && (t += Do), t;
}, Wd = z + "K", Jd = z + "1K", xo = z + "2K", Hd = z + "J", Kd = z + "1J", Lr = z + "2J", Qd = z + "S", Yd = z + "T", Xd = "\x1Bc", ef = kd ? `${Lr}${z}0f` : `${Lr}${z}3J${z}H`, tf = z + "?1049h", nf = z + "?1049l", rf = Ot, sf = (e, t) => [rn, "8", Mt, Mt, t, Ot, e, rn, "8", Mt, Mt, Ot].join(""), af = (e, t = {}) => {
  let n = `${rn}1337;File=inline=1`;
  return t.width && (n += `;width=${t.width}`), t.height && (n += `;height=${t.height}`), t.preserveAspectRatio === !1 && (n += ";preserveAspectRatio=0"), n + ":" + Buffer.from(e).toString("base64") + Ot;
}, of = { setCwd: (e = Dd()) => `${rn}50;CurrentDir=${e}${Ot}`, annotation(e, t = {}) {
  let n = `${rn}1337;`, r = t.x !== void 0, i = t.y !== void 0;
  if ((r || i) && !(r && i && t.length !== void 0)) throw new Error("`x`, `y` and `length` must be defined when `x` or `y` is defined");
  return e = e.replaceAll("|", ""), n += t.isHidden ? "AddHiddenAnnotation=" : "AddAnnotation=", t.length > 0 ? n += (r ? [e, t.length, t.x, t.y] : [t.length, e]).join("|") : n += e, n + Ot;
} }, Pi = ve(Ic(), 1);
function sn(e, t, { target: n = "stdout", ...r } = {}) {
  return Pi.default[n] ? To.link(e, t) : r.fallback === !1 ? e : typeof r.fallback == "function" ? r.fallback(e, t) : `${e} (​${t}​)`;
}
sn.isSupported = Pi.default.stdout;
sn.stderr = (e, t, n = {}) => sn(e, t, { target: "stderr", ...n });
sn.stderr.isSupported = Pi.default.stderr;
function lf(e) {
  return sn(e, e, { fallback: ye });
}
var uf = Rc(), cf = uf.version;
function Cr(e) {
  return df() || ((e == null ? void 0 : e.config.engineType) === "library" ? "library" : (e == null ? void 0 : e.config.engineType) === "binary" ? "binary" : (e == null ? void 0 : e.config.engineType) === "client" ? "client" : ff());
}
function df() {
  let e = R.env.PRISMA_CLIENT_ENGINE_TYPE;
  return e === "library" ? "library" : e === "binary" ? "binary" : e === "client" ? "client" : void 0;
}
function ff() {
  return "library";
}
function Lo(e) {
  return e.name === "DriverAdapterError" && typeof e.cause == "object";
}
function Oi(e) {
  return { ok: !0, value: e, map(t) {
    return Oi(t(e));
  }, flatMap(t) {
    return t(e);
  } };
}
function St(e) {
  return { ok: !1, error: e, map() {
    return St(e);
  }, flatMap() {
    return St(e);
  } };
}
var Co = pe("driver-adapter-utils"), pf = class {
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
}, gs = (e, t = new pf()) => {
  let n = { adapterName: e.adapterName, errorRegistry: t, queryRaw: Fe(t, e.queryRaw.bind(e)), executeRaw: Fe(t, e.executeRaw.bind(e)), executeScript: Fe(t, e.executeScript.bind(e)), dispose: Fe(t, e.dispose.bind(e)), provider: e.provider, startTransaction: async (...r) => (await Fe(t, e.startTransaction.bind(e))(...r)).map((i) => hf(t, i)) };
  return e.getConnectionInfo && (n.getConnectionInfo = mf(t, e.getConnectionInfo.bind(e))), n;
}, hf = (e, t) => ({ adapterName: t.adapterName, provider: t.provider, options: t.options, queryRaw: Fe(e, t.queryRaw.bind(t)), executeRaw: Fe(e, t.executeRaw.bind(t)), commit: Fe(e, t.commit.bind(t)), rollback: Fe(e, t.rollback.bind(t)) });
function Fe(e, t) {
  return async (...n) => {
    try {
      return Oi(await t(...n));
    } catch (r) {
      if (Co("[error@wrapAsync]", r), Lo(r)) return St(r.cause);
      let i = e.registerNewError(r);
      return St({ kind: "GenericJs", id: i });
    }
  };
}
function mf(e, t) {
  return (...n) => {
    try {
      return Oi(t(...n));
    } catch (r) {
      if (Co("[error@wrapSync]", r), Lo(r)) return St(r.cause);
      let i = e.registerNewError(r);
      return St({ kind: "GenericJs", id: i });
    }
  };
}
ve(wi());
ve(wi());
pe("prisma:engines");
function gf() {
  return P.join(__dirname, "../");
}
P.join(__dirname, "../query-engine-darwin");
P.join(__dirname, "../query-engine-darwin-arm64");
P.join(__dirname, "../query-engine-debian-openssl-1.0.x");
P.join(__dirname, "../query-engine-debian-openssl-1.1.x");
P.join(__dirname, "../query-engine-debian-openssl-3.0.x");
P.join(__dirname, "../query-engine-linux-static-x64");
P.join(__dirname, "../query-engine-linux-static-arm64");
P.join(__dirname, "../query-engine-rhel-openssl-1.0.x");
P.join(__dirname, "../query-engine-rhel-openssl-1.1.x");
P.join(__dirname, "../query-engine-rhel-openssl-3.0.x");
P.join(__dirname, "../libquery_engine-darwin.dylib.node");
P.join(__dirname, "../libquery_engine-darwin-arm64.dylib.node");
P.join(__dirname, "../libquery_engine-debian-openssl-1.0.x.so.node");
P.join(__dirname, "../libquery_engine-debian-openssl-1.1.x.so.node");
P.join(__dirname, "../libquery_engine-debian-openssl-3.0.x.so.node");
P.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.0.x.so.node");
P.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.1.x.so.node");
P.join(__dirname, "../libquery_engine-linux-arm64-openssl-3.0.x.so.node");
P.join(__dirname, "../libquery_engine-linux-musl.so.node");
P.join(__dirname, "../libquery_engine-linux-musl-openssl-3.0.x.so.node");
P.join(__dirname, "../libquery_engine-rhel-openssl-1.0.x.so.node");
P.join(__dirname, "../libquery_engine-rhel-openssl-1.1.x.so.node");
P.join(__dirname, "../libquery_engine-rhel-openssl-3.0.x.so.node");
P.join(__dirname, "../query_engine-windows.dll.node");
_i("chmodPlusX");
function yf(e) {
  let t = e.e, n = (o) => `Prisma cannot find the required \`${o}\` system library in your system`, r = t.message.includes("cannot open shared object file"), i = `Please refer to the documentation about Prisma's system requirements: ${lf("https://pris.ly/d/system-requirements")}`, s = `Unable to require(\`${fn(e.id)}\`).`, a = Qn({ message: t.message, code: t.code }).with({ code: "ENOENT" }, () => "File does not exist.").when(({ message: o }) => r && o.includes("libz"), () => `${n("libz")}. Please install it and try again.`).when(({ message: o }) => r && o.includes("libgcc_s"), () => `${n("libgcc_s")}. Please install it and try again.`).when(({ message: o }) => r && o.includes("libssl"), () => {
    let o = e.platformInfo.libssl ? `openssl-${e.platformInfo.libssl}` : "openssl";
    return `${n("libssl")}. Please install ${o} and try again.`;
  }).when(({ message: o }) => o.includes("GLIBC"), () => `Prisma has detected an incompatible version of the \`glibc\` C standard library installed in your system. This probably means your system may be too old to run Prisma. ${i}`).when(({ message: o }) => e.platformInfo.platform === "linux" && o.includes("symbol not found"), () => `The Prisma engines are not compatible with your system ${e.platformInfo.originalDistro} on (${e.platformInfo.archFromUname}) which uses the \`${e.platformInfo.binaryTarget}\` binaryTarget by default. ${i}`).otherwise(() => `The Prisma engines do not seem to be compatible with your system. ${i}`);
  return `${s}
${a}

Details: ${t.message}`;
}
var wf = ve($c(), 1);
function bf(e) {
  let t = (0, wf.default)(e);
  if (t === 0) return e;
  let n = new RegExp(`^[ \\t]{${t}}`, "gm");
  return e.replace(n, "");
}
var vf = "prisma+postgres", Uo = `${vf}:`;
function Fo(e) {
  return (e == null ? void 0 : e.toString().startsWith(`${Uo}//`)) ?? !1;
}
function _f(e) {
  if (!Fo(e)) return !1;
  let { host: t } = new URL(e);
  return t.includes("localhost") || t.includes("127.0.0.1") || t.includes("[::1]");
}
var Ef = ve(vo());
function Af(e) {
  return String(new Pf(e));
}
var Pf = class {
  constructor(e) {
    this.config = e;
  }
  toString() {
    let { config: e } = this, t = e.provider.fromEnvVar ? `env("${e.provider.fromEnvVar}")` : e.provider.value, n = JSON.parse(JSON.stringify({ provider: t, binaryTargets: Of(e.binaryTargets) }));
    return `generator ${e.name} {
${(0, Ef.default)(Sf(n), 2)}
}`;
  }
};
function Of(e) {
  let t;
  if (e.length > 0) {
    let n = e.find((r) => r.fromEnvVar !== null);
    n ? t = `env("${n.fromEnvVar}")` : t = e.map((r) => r.native ? "native" : r.value);
  } else t = void 0;
  return t;
}
function Sf(e) {
  let t = Object.keys(e).reduce((n, r) => Math.max(n, r.length), 0);
  return Object.entries(e).map(([n, r]) => `${n.padEnd(t)} = ${If(r)}`).join(`
`);
}
function If(e) {
  return JSON.parse(JSON.stringify(e, (t, n) => Array.isArray(n) ? `[${n.map((r) => JSON.stringify(r)).join(", ")}]` : JSON.stringify(n)));
}
var Ur = {};
kt(Ur, { error: () => Tf, info: () => $f, log: () => Rf, query: () => Nf, should: () => jo, tags: () => hn, warn: () => qo });
var hn = { error: pt("prisma:error"), warn: pn("prisma:warn"), info: ut("prisma:info"), query: Bt("prisma:query") }, jo = { warn: () => !R.env.PRISMA_DISABLE_WARNINGS };
function Rf(...e) {
  console.log(...e);
}
function qo(e, ...t) {
  jo.warn() && console.warn(`${hn.warn} ${e}`, ...t);
}
function $f(e, ...t) {
  console.info(`${hn.info} ${e}`, ...t);
}
function Tf(e, ...t) {
  console.error(`${hn.error} ${e}`, ...t);
}
function Nf(e, ...t) {
  console.log(`${hn.query} ${e}`, ...t);
}
function ys(e, t) {
  if (!e) throw new Error(`${t}. This should never happen. If you see this error, please, open an issue at https://pris.ly/prisma-prisma-bug-report`);
}
function Si(e, t) {
  throw new Error(t);
}
function kf({ onlyFirst: e = !1 } = {}) {
  let t = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?(?:\\u0007|\\u001B\\u005C|\\u009C))", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|");
  return new RegExp(t, e ? void 0 : "g");
}
var Df = kf();
function Fr(e) {
  if (typeof e != "string") throw new TypeError(`Expected a \`string\`, got \`${typeof e}\``);
  return e.replace(Df, "");
}
function xf(e) {
  return P.sep === P.posix.sep ? e : e.split(P.sep).join(P.posix.sep);
}
var Mo = ve(Nc());
function Lf(e) {
  let t = e.ignoreProcessEnv ? {} : R.env, n = (r) => {
    var i;
    return ((i = r.match(/(.?\${(?:[a-zA-Z0-9_]+)?})/g)) == null ? void 0 : i.reduce(function(s, a) {
      let o = /(.?)\${([a-zA-Z0-9_]+)?}/g.exec(a);
      if (!o) return s;
      let l = o[1], u, c;
      if (l === "\\") c = o[0], u = c.replace("\\$", "$");
      else {
        let d = o[2];
        c = o[0].substring(l.length), u = Object.hasOwnProperty.call(t, d) ? t[d] : e.parsed[d] || "", u = n(u);
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
var jr = _i("prisma:tryLoadEnv");
function Cf({ rootEnvPath: e, schemaEnvPath: t }, n = { conflictCheck: "none" }) {
  var s, a;
  let r = ws(e);
  n.conflictCheck !== "none" && Uf(r, t, n.conflictCheck);
  let i = null;
  return Vo(r == null ? void 0 : r.path, t) || (i = ws(t)), !r && !i && jr("No Environment variables loaded"), i != null && i.dotenvResult.error ? console.error(pt(Pe("Schema Env Error: ")) + i.dotenvResult.error) : { message: [r == null ? void 0 : r.message, i == null ? void 0 : i.message].filter(Boolean).join(`
`), parsed: { ...(s = r == null ? void 0 : r.dotenvResult) == null ? void 0 : s.parsed, ...(a = i == null ? void 0 : i.dotenvResult) == null ? void 0 : a.parsed } };
}
function Uf(e, t, n) {
  let r = e == null ? void 0 : e.dotenvResult.parsed, i = !Vo(e == null ? void 0 : e.path, t);
  if (r && t && i && ft.existsSync(t)) {
    let s = Mo.default.parse(ft.readFileSync(t)), a = [];
    for (let o in s) r[o] === s[o] && a.push(o);
    if (a.length > 0) {
      let o = P.relative(R.cwd(), e.path), l = P.relative(R.cwd(), t);
      if (n === "error") {
        let u = `There is a conflict between env var${a.length > 1 ? "s" : ""} in ${ye(o)} and ${ye(l)}
Conflicting env vars:
${a.map((c) => `  ${Pe(c)}`).join(`
`)}

We suggest to move the contents of ${ye(l)} to ${ye(o)} to consolidate your env vars.
`;
        throw new Error(u);
      } else if (n === "warn") {
        let u = `Conflict for env var${a.length > 1 ? "s" : ""} ${a.map((c) => Pe(c)).join(", ")} in ${ye(o)} and ${ye(l)}
Env vars from ${ye(l)} overwrite the ones from ${ye(o)}
      `;
        console.warn(`${pn("warn(prisma)")} ${u}`);
      }
    }
  }
}
function ws(e) {
  if (Ff(e)) {
    jr(`Environment variables loaded from ${e}`);
    let t = Mo.default.config({ path: e, debug: R.env.DOTENV_CONFIG_DEBUG ? !0 : void 0 });
    return { dotenvResult: Lf(t), message: fn(`Environment variables loaded from ${P.relative(R.cwd(), e)}`), path: e };
  } else jr(`Environment variables not found at ${e}`);
  return null;
}
function Vo(e, t) {
  return e && t && P.resolve(e) === P.resolve(t);
}
function Ff(e) {
  return !!(e && ft.existsSync(e));
}
function jf(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function zo(e, t) {
  let n = {};
  for (let r of Object.keys(e)) n[r] = t(e[r], r);
  return n;
}
function qf(e, t) {
  if (e.length === 0) return;
  let n = e[0];
  for (let r = 1; r < e.length; r++) t(n, e[r]) < 0 && (n = e[r]);
  return n;
}
function Y(e, t) {
  Object.defineProperty(e, "name", { value: t, configurable: !0 });
}
var bs = /* @__PURE__ */ new Set(), Mf = (e, t, ...n) => {
  bs.has(e) || (bs.add(e), qo(t, ...n));
}, ee = class Zo extends Error {
  constructor(n, r, i) {
    super(n);
    g(this, "clientVersion");
    g(this, "errorCode");
    g(this, "retryable");
    this.name = "PrismaClientInitializationError", this.clientVersion = r, this.errorCode = i, Error.captureStackTrace(Zo);
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
var ct = class extends Error {
  constructor(t, n) {
    super(t);
    g(this, "clientVersion");
    this.name = "PrismaClientRustPanicError", this.clientVersion = n;
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientRustPanicError";
  }
};
Y(ct, "PrismaClientRustPanicError");
var we = class extends Error {
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
Y(we, "PrismaClientUnknownRequestError");
var Qe = class extends Error {
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
Y(Qe, "PrismaClientValidationError");
var Jt = class {
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
function Xn(e) {
  return e.substring(0, 1).toLowerCase() + e.substring(1);
}
function Vf(e, t) {
  let n = {};
  for (let r of e) {
    let i = r[t];
    n[i] = r;
  }
  return n;
}
function vs(e) {
  let t;
  return { get() {
    return t || (t = { value: e() }), t.value;
  } };
}
function Ii(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function Bo(e) {
  return e.toString() !== "Invalid Date";
}
var Pt = 9e15, rt = 1e9, qr = "0123456789abcdef", qn = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Mn = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Mr = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -Pt, maxE: Pt, crypto: !1 }, Go, je, k = !0, er = "[DecimalError] ", et = er + "Invalid argument: ", Wo = er + "Precision limit exceeded", Jo = er + "crypto unavailable", Ho = "[object Decimal]", le = Math.floor, re = Math.pow, zf = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, Zf = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, Bf = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Ko = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Oe = 1e7, $ = 7, Gf = 9007199254740991, Wf = qn.length - 1, Vr = Mn.length - 1, y = { toStringTag: Ho };
y.absoluteValue = y.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), O(e);
};
y.ceil = function() {
  return O(new this.constructor(this), this.e + 1, 2);
};
y.clampedTo = y.clamp = function(e, t) {
  var n, r = this, i = r.constructor;
  if (e = new i(e), t = new i(t), !e.s || !t.s) return new i(NaN);
  if (e.gt(t)) throw Error(et + t);
  return n = r.cmp(e), n < 0 ? e : r.cmp(t) > 0 ? t : new i(r);
};
y.comparedTo = y.cmp = function(e) {
  var t, n, r, i, s = this, a = s.d, o = (e = new s.constructor(e)).d, l = s.s, u = e.s;
  if (!a || !o) return !l || !u ? NaN : l !== u ? l : a === o ? 0 : !a ^ l < 0 ? 1 : -1;
  if (!a[0] || !o[0]) return a[0] ? l : o[0] ? -u : 0;
  if (l !== u) return l;
  if (s.e !== e.e) return s.e > e.e ^ l < 0 ? 1 : -1;
  for (r = a.length, i = o.length, t = 0, n = r < i ? r : i; t < n; ++t) if (a[t] !== o[t]) return a[t] > o[t] ^ l < 0 ? 1 : -1;
  return r === i ? 0 : r > i ^ l < 0 ? 1 : -1;
};
y.cosine = y.cos = function() {
  var e, t, n = this, r = n.constructor;
  return n.d ? n.d[0] ? (e = r.precision, t = r.rounding, r.precision = e + Math.max(n.e, n.sd()) + $, r.rounding = 1, n = Jf(r, tl(r, n)), r.precision = e, r.rounding = t, O(je == 2 || je == 3 ? n.neg() : n, e, t, !0)) : new r(1) : new r(NaN);
};
y.cubeRoot = y.cbrt = function() {
  var e, t, n, r, i, s, a, o, l, u, c = this, d = c.constructor;
  if (!c.isFinite() || c.isZero()) return new d(c);
  for (k = !1, s = c.s * re(c.s * c, 1 / 3), !s || Math.abs(s) == 1 / 0 ? (n = ae(c.d), e = c.e, (s = (e - n.length + 1) % 3) && (n += s == 1 || s == -2 ? "0" : "00"), s = re(n, 1 / 3), e = le((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), s == 1 / 0 ? n = "5e" + e : (n = s.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + e), r = new d(n), r.s = c.s) : r = new d(s.toString()), a = (e = d.precision) + 3; ; ) if (o = r, l = o.times(o).times(o), u = l.plus(c), r = B(u.plus(c).times(o), u.plus(l), a + 2, 1), ae(o.d).slice(0, a) === (n = ae(r.d)).slice(0, a)) if (n = n.slice(a - 3, a + 1), n == "9999" || !i && n == "4999") {
    if (!i && (O(o, e + 1, 0), o.times(o).times(o).eq(c))) {
      r = o;
      break;
    }
    a += 4, i = 1;
  } else {
    (!+n || !+n.slice(1) && n.charAt(0) == "5") && (O(r, e + 1, 1), t = !r.times(r).times(r).eq(c));
    break;
  }
  return k = !0, O(r, e, d.rounding, t);
};
y.decimalPlaces = y.dp = function() {
  var e, t = this.d, n = NaN;
  if (t) {
    if (e = t.length - 1, n = (e - le(this.e / $)) * $, e = t[e], e) for (; e % 10 == 0; e /= 10) n--;
    n < 0 && (n = 0);
  }
  return n;
};
y.dividedBy = y.div = function(e) {
  return B(this, new this.constructor(e));
};
y.dividedToIntegerBy = y.divToInt = function(e) {
  var t = this, n = t.constructor;
  return O(B(t, new n(e), 0, 1, 1), n.precision, n.rounding);
};
y.equals = y.eq = function(e) {
  return this.cmp(e) === 0;
};
y.floor = function() {
  return O(new this.constructor(this), this.e + 1, 3);
};
y.greaterThan = y.gt = function(e) {
  return this.cmp(e) > 0;
};
y.greaterThanOrEqualTo = y.gte = function(e) {
  var t = this.cmp(e);
  return t == 1 || t === 0;
};
y.hyperbolicCosine = y.cosh = function() {
  var e, t, n, r, i, s = this, a = s.constructor, o = new a(1);
  if (!s.isFinite()) return new a(s.s ? 1 / 0 : NaN);
  if (s.isZero()) return o;
  n = a.precision, r = a.rounding, a.precision = n + Math.max(s.e, s.sd()) + 4, a.rounding = 1, i = s.d.length, i < 32 ? (e = Math.ceil(i / 3), t = (1 / nr(4, e)).toString()) : (e = 16, t = "2.3283064365386962890625e-10"), s = It(a, 1, s.times(t), new a(1), !0);
  for (var l, u = e, c = new a(8); u--; ) l = s.times(s), s = o.minus(l.times(c.minus(l.times(c))));
  return O(s, a.precision = n, a.rounding = r, !0);
};
y.hyperbolicSine = y.sinh = function() {
  var e, t, n, r, i = this, s = i.constructor;
  if (!i.isFinite() || i.isZero()) return new s(i);
  if (t = s.precision, n = s.rounding, s.precision = t + Math.max(i.e, i.sd()) + 4, s.rounding = 1, r = i.d.length, r < 3) i = It(s, 2, i, i, !0);
  else {
    e = 1.4 * Math.sqrt(r), e = e > 16 ? 16 : e | 0, i = i.times(1 / nr(5, e)), i = It(s, 2, i, i, !0);
    for (var a, o = new s(5), l = new s(16), u = new s(20); e--; ) a = i.times(i), i = i.times(o.plus(a.times(l.times(a).plus(u))));
  }
  return s.precision = t, s.rounding = n, O(i, t, n, !0);
};
y.hyperbolicTangent = y.tanh = function() {
  var e, t, n = this, r = n.constructor;
  return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 7, r.rounding = 1, B(n.sinh(), n.cosh(), r.precision = e, r.rounding = t)) : new r(n.s);
};
y.inverseCosine = y.acos = function() {
  var e = this, t = e.constructor, n = e.abs().cmp(1), r = t.precision, i = t.rounding;
  return n !== -1 ? n === 0 ? e.isNeg() ? Ne(t, r, i) : new t(0) : new t(NaN) : e.isZero() ? Ne(t, r + 4, i).times(0.5) : (t.precision = r + 6, t.rounding = 1, e = new t(1).minus(e).div(e.plus(1)).sqrt().atan(), t.precision = r, t.rounding = i, e.times(2));
};
y.inverseHyperbolicCosine = y.acosh = function() {
  var e, t, n = this, r = n.constructor;
  return n.lte(1) ? new r(n.eq(1) ? 0 : NaN) : n.isFinite() ? (e = r.precision, t = r.rounding, r.precision = e + Math.max(Math.abs(n.e), n.sd()) + 4, r.rounding = 1, k = !1, n = n.times(n).minus(1).sqrt().plus(n), k = !0, r.precision = e, r.rounding = t, n.ln()) : new r(n);
};
y.inverseHyperbolicSine = y.asinh = function() {
  var e, t, n = this, r = n.constructor;
  return !n.isFinite() || n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 2 * Math.max(Math.abs(n.e), n.sd()) + 6, r.rounding = 1, k = !1, n = n.times(n).plus(1).sqrt().plus(n), k = !0, r.precision = e, r.rounding = t, n.ln());
};
y.inverseHyperbolicTangent = y.atanh = function() {
  var e, t, n, r, i = this, s = i.constructor;
  return i.isFinite() ? i.e >= 0 ? new s(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = s.precision, t = s.rounding, r = i.sd(), Math.max(r, e) < 2 * -i.e - 1 ? O(new s(i), e, t, !0) : (s.precision = n = r - i.e, i = B(i.plus(1), new s(1).minus(i), n + e, 1), s.precision = e + 4, s.rounding = 1, i = i.ln(), s.precision = e, s.rounding = t, i.times(0.5))) : new s(NaN);
};
y.inverseSine = y.asin = function() {
  var e, t, n, r, i = this, s = i.constructor;
  return i.isZero() ? new s(i) : (t = i.abs().cmp(1), n = s.precision, r = s.rounding, t !== -1 ? t === 0 ? (e = Ne(s, n + 4, r).times(0.5), e.s = i.s, e) : new s(NaN) : (s.precision = n + 6, s.rounding = 1, i = i.div(new s(1).minus(i.times(i)).sqrt().plus(1)).atan(), s.precision = n, s.rounding = r, i.times(2)));
};
y.inverseTangent = y.atan = function() {
  var e, t, n, r, i, s, a, o, l, u = this, c = u.constructor, d = c.precision, f = c.rounding;
  if (u.isFinite()) {
    if (u.isZero()) return new c(u);
    if (u.abs().eq(1) && d + 4 <= Vr) return a = Ne(c, d + 4, f).times(0.25), a.s = u.s, a;
  } else {
    if (!u.s) return new c(NaN);
    if (d + 4 <= Vr) return a = Ne(c, d + 4, f).times(0.5), a.s = u.s, a;
  }
  for (c.precision = o = d + 10, c.rounding = 1, n = Math.min(28, o / $ + 2 | 0), e = n; e; --e) u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (k = !1, t = Math.ceil(o / $), r = 1, l = u.times(u), a = new c(u), i = u; e !== -1; ) if (i = i.times(l), s = a.minus(i.div(r += 2)), i = i.times(l), a = s.plus(i.div(r += 2)), a.d[t] !== void 0) for (e = t; a.d[e] === s.d[e] && e--; ) ;
  return n && (a = a.times(2 << n - 1)), k = !0, O(a, c.precision = d, c.rounding = f, !0);
};
y.isFinite = function() {
  return !!this.d;
};
y.isInteger = y.isInt = function() {
  return !!this.d && le(this.e / $) > this.d.length - 2;
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
  var t, n, r, i, s, a, o, l, u = this, c = u.constructor, d = c.precision, f = c.rounding, p = 5;
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
  if (k = !1, o = d + p, a = Ye(u, o), r = t ? Vn(c, o + 10) : Ye(e, o), l = B(a, r, o, 1), an(l.d, i = d, f)) do
    if (o += 10, a = Ye(u, o), r = t ? Vn(c, o + 10) : Ye(e, o), l = B(a, r, o, 1), !s) {
      +ae(l.d).slice(i + 1, i + 15) + 1 == 1e14 && (l = O(l, d + 1, 0));
      break;
    }
  while (an(l.d, i += 10, f));
  return k = !0, O(l, d, f);
};
y.minus = y.sub = function(e) {
  var t, n, r, i, s, a, o, l, u, c, d, f, p = this, h = p.constructor;
  if (e = new h(e), !p.d || !e.d) return !p.s || !e.s ? e = new h(NaN) : p.d ? e.s = -e.s : e = new h(e.d || p.s !== e.s ? p : NaN), e;
  if (p.s != e.s) return e.s = -e.s, p.plus(e);
  if (u = p.d, f = e.d, o = h.precision, l = h.rounding, !u[0] || !f[0]) {
    if (f[0]) e.s = -e.s;
    else if (u[0]) e = new h(p);
    else return new h(l === 3 ? -0 : 0);
    return k ? O(e, o, l) : e;
  }
  if (n = le(e.e / $), c = le(p.e / $), u = u.slice(), s = c - n, s) {
    for (d = s < 0, d ? (t = u, s = -s, a = f.length) : (t = f, n = c, a = u.length), r = Math.max(Math.ceil(o / $), a) + 2, s > r && (s = r, t.length = 1), t.reverse(), r = s; r--; ) t.push(0);
    t.reverse();
  } else {
    for (r = u.length, a = f.length, d = r < a, d && (a = r), r = 0; r < a; r++) if (u[r] != f[r]) {
      d = u[r] < f[r];
      break;
    }
    s = 0;
  }
  for (d && (t = u, u = f, f = t, e.s = -e.s), a = u.length, r = f.length - a; r > 0; --r) u[a++] = 0;
  for (r = f.length; r > s; ) {
    if (u[--r] < f[r]) {
      for (i = r; i && u[--i] === 0; ) u[i] = Oe - 1;
      --u[i], u[r] += Oe;
    }
    u[r] -= f[r];
  }
  for (; u[--a] === 0; ) u.pop();
  for (; u[0] === 0; u.shift()) --n;
  return u[0] ? (e.d = u, e.e = tr(u, n), k ? O(e, o, l) : e) : new h(l === 3 ? -0 : 0);
};
y.modulo = y.mod = function(e) {
  var t, n = this, r = n.constructor;
  return e = new r(e), !n.d || !e.s || e.d && !e.d[0] ? new r(NaN) : !e.d || n.d && !n.d[0] ? O(new r(n), r.precision, r.rounding) : (k = !1, r.modulo == 9 ? (t = B(n, e.abs(), 0, 3, 1), t.s *= e.s) : t = B(n, e, 0, r.modulo, 1), t = t.times(e), k = !0, n.minus(t));
};
y.naturalExponential = y.exp = function() {
  return zr(this);
};
y.naturalLogarithm = y.ln = function() {
  return Ye(this);
};
y.negated = y.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, O(e);
};
y.plus = y.add = function(e) {
  var t, n, r, i, s, a, o, l, u, c, d = this, f = d.constructor;
  if (e = new f(e), !d.d || !e.d) return !d.s || !e.s ? e = new f(NaN) : d.d || (e = new f(e.d || d.s === e.s ? d : NaN)), e;
  if (d.s != e.s) return e.s = -e.s, d.minus(e);
  if (u = d.d, c = e.d, o = f.precision, l = f.rounding, !u[0] || !c[0]) return c[0] || (e = new f(d)), k ? O(e, o, l) : e;
  if (s = le(d.e / $), r = le(e.e / $), u = u.slice(), i = s - r, i) {
    for (i < 0 ? (n = u, i = -i, a = c.length) : (n = c, r = s, a = u.length), s = Math.ceil(o / $), a = s > a ? s + 1 : a + 1, i > a && (i = a, n.length = 1), n.reverse(); i--; ) n.push(0);
    n.reverse();
  }
  for (a = u.length, i = c.length, a - i < 0 && (i = a, n = c, c = u, u = n), t = 0; i; ) t = (u[--i] = u[i] + c[i] + t) / Oe | 0, u[i] %= Oe;
  for (t && (u.unshift(t), ++r), a = u.length; u[--a] == 0; ) u.pop();
  return e.d = u, e.e = tr(u, r), k ? O(e, o, l) : e;
};
y.precision = y.sd = function(e) {
  var t, n = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(et + e);
  return n.d ? (t = Qo(n.d), e && n.e + 1 > t && (t = n.e + 1)) : t = NaN, t;
};
y.round = function() {
  var e = this, t = e.constructor;
  return O(new t(e), e.e + 1, t.rounding);
};
y.sine = y.sin = function() {
  var e, t, n = this, r = n.constructor;
  return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + Math.max(n.e, n.sd()) + $, r.rounding = 1, n = Kf(r, tl(r, n)), r.precision = e, r.rounding = t, O(je > 2 ? n.neg() : n, e, t, !0)) : new r(NaN);
};
y.squareRoot = y.sqrt = function() {
  var e, t, n, r, i, s, a = this, o = a.d, l = a.e, u = a.s, c = a.constructor;
  if (u !== 1 || !o || !o[0]) return new c(!u || u < 0 && (!o || o[0]) ? NaN : o ? a : 1 / 0);
  for (k = !1, u = Math.sqrt(+a), u == 0 || u == 1 / 0 ? (t = ae(o), (t.length + l) % 2 == 0 && (t += "0"), u = Math.sqrt(t), l = le((l + 1) / 2) - (l < 0 || l % 2), u == 1 / 0 ? t = "5e" + l : (t = u.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + l), r = new c(t)) : r = new c(u.toString()), n = (l = c.precision) + 3; ; ) if (s = r, r = s.plus(B(a, s, n + 2, 1)).times(0.5), ae(s.d).slice(0, n) === (t = ae(r.d)).slice(0, n)) if (t = t.slice(n - 3, n + 1), t == "9999" || !i && t == "4999") {
    if (!i && (O(s, l + 1, 0), s.times(s).eq(a))) {
      r = s;
      break;
    }
    n += 4, i = 1;
  } else {
    (!+t || !+t.slice(1) && t.charAt(0) == "5") && (O(r, l + 1, 1), e = !r.times(r).eq(a));
    break;
  }
  return k = !0, O(r, l, c.rounding, e);
};
y.tangent = y.tan = function() {
  var e, t, n = this, r = n.constructor;
  return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 10, r.rounding = 1, n = n.sin(), n.s = 1, n = B(n, new r(1).minus(n.times(n)).sqrt(), e + 10, 0), r.precision = e, r.rounding = t, O(je == 2 || je == 4 ? n.neg() : n, e, t, !0)) : new r(NaN);
};
y.times = y.mul = function(e) {
  var t, n, r, i, s, a, o, l, u, c = this, d = c.constructor, f = c.d, p = (e = new d(e)).d;
  if (e.s *= c.s, !f || !f[0] || !p || !p[0]) return new d(!e.s || f && !f[0] && !p || p && !p[0] && !f ? NaN : !f || !p ? e.s / 0 : e.s * 0);
  for (n = le(c.e / $) + le(e.e / $), l = f.length, u = p.length, l < u && (s = f, f = p, p = s, a = l, l = u, u = a), s = [], a = l + u, r = a; r--; ) s.push(0);
  for (r = u; --r >= 0; ) {
    for (t = 0, i = l + r; i > r; ) o = s[i] + p[r] * f[i - r - 1] + t, s[i--] = o % Oe | 0, t = o / Oe | 0;
    s[i] = (s[i] + t) % Oe | 0;
  }
  for (; !s[--a]; ) s.pop();
  return t ? ++n : s.shift(), e.d = s, e.e = tr(s, n), k ? O(e, d.precision, d.rounding) : e;
};
y.toBinary = function(e, t) {
  return Ri(this, 2, e, t);
};
y.toDecimalPlaces = y.toDP = function(e, t) {
  var n = this, r = n.constructor;
  return n = new r(n), e === void 0 ? n : (he(e, 0, rt), t === void 0 ? t = r.rounding : he(t, 0, 8), O(n, e + n.e + 1, t));
};
y.toExponential = function(e, t) {
  var n, r = this, i = r.constructor;
  return e === void 0 ? n = De(r, !0) : (he(e, 0, rt), t === void 0 ? t = i.rounding : he(t, 0, 8), r = O(new i(r), e + 1, t), n = De(r, !0, e + 1)), r.isNeg() && !r.isZero() ? "-" + n : n;
};
y.toFixed = function(e, t) {
  var n, r, i = this, s = i.constructor;
  return e === void 0 ? n = De(i) : (he(e, 0, rt), t === void 0 ? t = s.rounding : he(t, 0, 8), r = O(new s(i), e + i.e + 1, t), n = De(r, !1, e + r.e + 1)), i.isNeg() && !i.isZero() ? "-" + n : n;
};
y.toFraction = function(e) {
  var t, n, r, i, s, a, o, l, u, c, d, f, p = this, h = p.d, m = p.constructor;
  if (!h) return new m(p);
  if (u = n = new m(1), r = l = new m(0), t = new m(r), s = t.e = Qo(h) - p.e - 1, a = s % $, t.d[0] = re(10, a < 0 ? $ + a : a), e == null) e = s > 0 ? t : u;
  else {
    if (o = new m(e), !o.isInt() || o.lt(u)) throw Error(et + o);
    e = o.gt(t) ? s > 0 ? t : u : o;
  }
  for (k = !1, o = new m(ae(h)), c = m.precision, m.precision = s = h.length * $ * 2; d = B(o, t, 0, 1, 1), i = n.plus(d.times(r)), i.cmp(e) != 1; ) n = r, r = i, i = u, u = l.plus(d.times(i)), l = i, i = t, t = o.minus(d.times(i)), o = i;
  return i = B(e.minus(n), r, 0, 1, 1), l = l.plus(i.times(u)), n = n.plus(i.times(r)), l.s = u.s = p.s, f = B(u, r, s, 1).minus(p).abs().cmp(B(l, n, s, 1).minus(p).abs()) < 1 ? [u, r] : [l, n], m.precision = c, k = !0, f;
};
y.toHexadecimal = y.toHex = function(e, t) {
  return Ri(this, 16, e, t);
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
  return e.d[0] ? (k = !1, n = B(n, e, 0, t, 1).times(e), k = !0, O(n)) : (e.s = n.s, n = e), n;
};
y.toNumber = function() {
  return +this;
};
y.toOctal = function(e, t) {
  return Ri(this, 8, e, t);
};
y.toPower = y.pow = function(e) {
  var t, n, r, i, s, a, o = this, l = o.constructor, u = +(e = new l(e));
  if (!o.d || !e.d || !o.d[0] || !e.d[0]) return new l(re(+o, u));
  if (o = new l(o), o.eq(1)) return o;
  if (r = l.precision, s = l.rounding, e.eq(1)) return O(o, r, s);
  if (t = le(e.e / $), t >= e.d.length - 1 && (n = u < 0 ? -u : u) <= Gf) return i = Yo(l, o, n, r), e.s < 0 ? new l(1).div(i) : O(i, r, s);
  if (a = o.s, a < 0) {
    if (t < e.d.length - 1) return new l(NaN);
    if (!(e.d[t] & 1) && (a = 1), o.e == 0 && o.d[0] == 1 && o.d.length == 1) return o.s = a, o;
  }
  return n = re(+o, u), t = n == 0 || !isFinite(n) ? le(u * (Math.log("0." + ae(o.d)) / Math.LN10 + o.e + 1)) : new l(n + "").e, t > l.maxE + 1 || t < l.minE - 1 ? new l(t > 0 ? a / 0 : 0) : (k = !1, l.rounding = o.s = 1, n = Math.min(12, (t + "").length), i = zr(e.times(Ye(o, r + n)), r), i.d && (i = O(i, r + 5, 1), an(i.d, r, s) && (t = r + 10, i = O(zr(e.times(Ye(o, t + n)), t), t + 5, 1), +ae(i.d).slice(r + 1, r + 15) + 1 == 1e14 && (i = O(i, r + 1, 0)))), i.s = a, k = !0, l.rounding = s, O(i, r, s));
};
y.toPrecision = function(e, t) {
  var n, r = this, i = r.constructor;
  return e === void 0 ? n = De(r, r.e <= i.toExpNeg || r.e >= i.toExpPos) : (he(e, 1, rt), t === void 0 ? t = i.rounding : he(t, 0, 8), r = O(new i(r), e, t), n = De(r, e <= r.e || r.e <= i.toExpNeg, e)), r.isNeg() && !r.isZero() ? "-" + n : n;
};
y.toSignificantDigits = y.toSD = function(e, t) {
  var n = this, r = n.constructor;
  return e === void 0 ? (e = r.precision, t = r.rounding) : (he(e, 1, rt), t === void 0 ? t = r.rounding : he(t, 0, 8)), O(new r(n), e, t);
};
y.toString = function() {
  var e = this, t = e.constructor, n = De(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + n : n;
};
y.truncated = y.trunc = function() {
  return O(new this.constructor(this), this.e + 1, 1);
};
y.valueOf = y.toJSON = function() {
  var e = this, t = e.constructor, n = De(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() ? "-" + n : n;
};
function ae(e) {
  var t, n, r, i = e.length - 1, s = "", a = e[0];
  if (i > 0) {
    for (s += a, t = 1; t < i; t++) r = e[t] + "", n = $ - r.length, n && (s += Ke(n)), s += r;
    a = e[t], r = a + "", n = $ - r.length, n && (s += Ke(n));
  } else if (a === 0) return "0";
  for (; a % 10 === 0; ) a /= 10;
  return s + a;
}
function he(e, t, n) {
  if (e !== ~~e || e < t || e > n) throw Error(et + e);
}
function an(e, t, n, r) {
  var i, s, a, o;
  for (s = e[0]; s >= 10; s /= 10) --t;
  return --t < 0 ? (t += $, i = 0) : (i = Math.ceil((t + 1) / $), t %= $), s = re(10, $ - t), o = e[i] % s | 0, r == null ? t < 3 ? (t == 0 ? o = o / 100 | 0 : t == 1 && (o = o / 10 | 0), a = n < 4 && o == 99999 || n > 3 && o == 49999 || o == 5e4 || o == 0) : a = (n < 4 && o + 1 == s || n > 3 && o + 1 == s / 2) && (e[i + 1] / s / 100 | 0) == re(10, t - 2) - 1 || (o == s / 2 || o == 0) && (e[i + 1] / s / 100 | 0) == 0 : t < 4 ? (t == 0 ? o = o / 1e3 | 0 : t == 1 ? o = o / 100 | 0 : t == 2 && (o = o / 10 | 0), a = (r || n < 4) && o == 9999 || !r && n > 3 && o == 4999) : a = ((r || n < 4) && o + 1 == s || !r && n > 3 && o + 1 == s / 2) && (e[i + 1] / s / 1e3 | 0) == re(10, t - 3) - 1, a;
}
function Tn(e, t, n) {
  for (var r, i = [0], s, a = 0, o = e.length; a < o; ) {
    for (s = i.length; s--; ) i[s] *= t;
    for (i[0] += qr.indexOf(e.charAt(a++)), r = 0; r < i.length; r++) i[r] > n - 1 && (i[r + 1] === void 0 && (i[r + 1] = 0), i[r + 1] += i[r] / n | 0, i[r] %= n);
  }
  return i.reverse();
}
function Jf(e, t) {
  var n, r, i;
  if (t.isZero()) return t;
  r = t.d.length, r < 32 ? (n = Math.ceil(r / 3), i = (1 / nr(4, n)).toString()) : (n = 16, i = "2.3283064365386962890625e-10"), e.precision += n, t = It(e, 1, t.times(i), new e(1));
  for (var s = n; s--; ) {
    var a = t.times(t);
    t = a.times(a).minus(a).times(8).plus(1);
  }
  return e.precision -= n, t;
}
var B = /* @__PURE__ */ function() {
  function e(r, i, s) {
    var a, o = 0, l = r.length;
    for (r = r.slice(); l--; ) a = r[l] * i + o, r[l] = a % s | 0, o = a / s | 0;
    return o && r.unshift(o), r;
  }
  function t(r, i, s, a) {
    var o, l;
    if (s != a) l = s > a ? 1 : -1;
    else for (o = l = 0; o < s; o++) if (r[o] != i[o]) {
      l = r[o] > i[o] ? 1 : -1;
      break;
    }
    return l;
  }
  function n(r, i, s, a) {
    for (var o = 0; s--; ) r[s] -= o, o = r[s] < i[s] ? 1 : 0, r[s] = o * a + r[s] - i[s];
    for (; !r[0] && r.length > 1; ) r.shift();
  }
  return function(r, i, s, a, o, l) {
    var u, c, d, f, p, h, m, v, _, A, I, T, X, N, b, E, S, j, C, x, q = r.constructor, G = r.s == i.s ? 1 : -1, M = r.d, F = i.d;
    if (!M || !M[0] || !F || !F[0]) return new q(!r.s || !i.s || (M ? F && M[0] == F[0] : !F) ? NaN : M && M[0] == 0 || !F ? G * 0 : G / 0);
    for (l ? (p = 1, c = r.e - i.e) : (l = Oe, p = $, c = le(r.e / p) - le(i.e / p)), C = F.length, S = M.length, _ = new q(G), A = _.d = [], d = 0; F[d] == (M[d] || 0); d++) ;
    if (F[d] > (M[d] || 0) && c--, s == null ? (N = s = q.precision, a = q.rounding) : o ? N = s + (r.e - i.e) + 1 : N = s, N < 0) A.push(1), h = !0;
    else {
      if (N = N / p + 2 | 0, d = 0, C == 1) {
        for (f = 0, F = F[0], N++; (d < S || f) && N--; d++) b = f * l + (M[d] || 0), A[d] = b / F | 0, f = b % F | 0;
        h = f || d < S;
      } else {
        for (f = l / (F[0] + 1) | 0, f > 1 && (F = e(F, f, l), M = e(M, f, l), C = F.length, S = M.length), E = C, I = M.slice(0, C), T = I.length; T < C; ) I[T++] = 0;
        x = F.slice(), x.unshift(0), j = F[0], F[1] >= l / 2 && ++j;
        do
          f = 0, u = t(F, I, C, T), u < 0 ? (X = I[0], C != T && (X = X * l + (I[1] || 0)), f = X / j | 0, f > 1 ? (f >= l && (f = l - 1), m = e(F, f, l), v = m.length, T = I.length, u = t(m, I, v, T), u == 1 && (f--, n(m, C < v ? x : F, v, l))) : (f == 0 && (u = f = 1), m = F.slice()), v = m.length, v < T && m.unshift(0), n(I, m, T, l), u == -1 && (T = I.length, u = t(F, I, C, T), u < 1 && (f++, n(I, C < T ? x : F, T, l))), T = I.length) : u === 0 && (f++, I = [0]), A[d++] = f, u && I[0] ? I[T++] = M[E] || 0 : (I = [M[E]], T = 1);
        while ((E++ < S || I[0] !== void 0) && N--);
        h = I[0] !== void 0;
      }
      A[0] || A.shift();
    }
    if (p == 1) _.e = c, Go = h;
    else {
      for (d = 1, f = A[0]; f >= 10; f /= 10) d++;
      _.e = d + c * p - 1, O(_, o ? s + _.e + 1 : s, a, h);
    }
    return _;
  };
}();
function O(e, t, n, r) {
  var i, s, a, o, l, u, c, d, f, p = e.constructor;
  e: if (t != null) {
    if (d = e.d, !d) return e;
    for (i = 1, o = d[0]; o >= 10; o /= 10) i++;
    if (s = t - i, s < 0) s += $, a = t, c = d[f = 0], l = c / re(10, i - a - 1) % 10 | 0;
    else if (f = Math.ceil((s + 1) / $), o = d.length, f >= o) if (r) {
      for (; o++ <= f; ) d.push(0);
      c = l = 0, i = 1, s %= $, a = s - $ + 1;
    } else break e;
    else {
      for (c = o = d[f], i = 1; o >= 10; o /= 10) i++;
      s %= $, a = s - $ + i, l = a < 0 ? 0 : c / re(10, i - a - 1) % 10 | 0;
    }
    if (r = r || t < 0 || d[f + 1] !== void 0 || (a < 0 ? c : c % re(10, i - a - 1)), u = n < 4 ? (l || r) && (n == 0 || n == (e.s < 0 ? 3 : 2)) : l > 5 || l == 5 && (n == 4 || r || n == 6 && (s > 0 ? a > 0 ? c / re(10, i - a) : 0 : d[f - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), t < 1 || !d[0]) return d.length = 0, u ? (t -= e.e + 1, d[0] = re(10, ($ - t % $) % $), e.e = -t || 0) : d[0] = e.e = 0, e;
    if (s == 0 ? (d.length = f, o = 1, f--) : (d.length = f + 1, o = re(10, $ - s), d[f] = a > 0 ? (c / re(10, i - a) % re(10, a) | 0) * o : 0), u) for (; ; ) if (f == 0) {
      for (s = 1, a = d[0]; a >= 10; a /= 10) s++;
      for (a = d[0] += o, o = 1; a >= 10; a /= 10) o++;
      s != o && (e.e++, d[0] == Oe && (d[0] = 1));
      break;
    } else {
      if (d[f] += o, d[f] != Oe) break;
      d[f--] = 0, o = 1;
    }
    for (s = d.length; d[--s] === 0; ) d.pop();
  }
  return k && (e.e > p.maxE ? (e.d = null, e.e = NaN) : e.e < p.minE && (e.e = 0, e.d = [0])), e;
}
function De(e, t, n) {
  if (!e.isFinite()) return el(e);
  var r, i = e.e, s = ae(e.d), a = s.length;
  return t ? (n && (r = n - a) > 0 ? s = s.charAt(0) + "." + s.slice(1) + Ke(r) : a > 1 && (s = s.charAt(0) + "." + s.slice(1)), s = s + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (s = "0." + Ke(-i - 1) + s, n && (r = n - a) > 0 && (s += Ke(r))) : i >= a ? (s += Ke(i + 1 - a), n && (r = n - i - 1) > 0 && (s = s + "." + Ke(r))) : ((r = i + 1) < a && (s = s.slice(0, r) + "." + s.slice(r)), n && (r = n - a) > 0 && (i + 1 === a && (s += "."), s += Ke(r))), s;
}
function tr(e, t) {
  var n = e[0];
  for (t *= $; n >= 10; n /= 10) t++;
  return t;
}
function Vn(e, t, n) {
  if (t > Wf) throw k = !0, n && (e.precision = n), Error(Wo);
  return O(new e(qn), t, 1, !0);
}
function Ne(e, t, n) {
  if (t > Vr) throw Error(Wo);
  return O(new e(Mn), t, n, !0);
}
function Qo(e) {
  var t = e.length - 1, n = t * $ + 1;
  if (t = e[t], t) {
    for (; t % 10 == 0; t /= 10) n--;
    for (t = e[0]; t >= 10; t /= 10) n++;
  }
  return n;
}
function Ke(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function Yo(e, t, n, r) {
  var i, s = new e(1), a = Math.ceil(r / $ + 4);
  for (k = !1; ; ) {
    if (n % 2 && (s = s.times(t), Es(s.d, a) && (i = !0)), n = le(n / 2), n === 0) {
      n = s.d.length - 1, i && s.d[n] === 0 && ++s.d[n];
      break;
    }
    t = t.times(t), Es(t.d, a);
  }
  return k = !0, s;
}
function _s(e) {
  return e.d[e.d.length - 1] & 1;
}
function Xo(e, t, n) {
  for (var r, i, s = new e(t[0]), a = 0; ++a < t.length; ) {
    if (i = new e(t[a]), !i.s) {
      s = i;
      break;
    }
    r = s.cmp(i), (r === n || r === 0 && s.s === n) && (s = i);
  }
  return s;
}
function zr(e, t) {
  var n, r, i, s, a, o, l, u = 0, c = 0, d = 0, f = e.constructor, p = f.rounding, h = f.precision;
  if (!e.d || !e.d[0] || e.e > 17) return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
  for (t == null ? (k = !1, l = h) : l = t, o = new f(0.03125); e.e > -2; ) e = e.times(o), d += 5;
  for (r = Math.log(re(2, d)) / Math.LN10 * 2 + 5 | 0, l += r, n = s = a = new f(1), f.precision = l; ; ) {
    if (s = O(s.times(e), l, 1), n = n.times(++c), o = a.plus(B(s, n, l, 1)), ae(o.d).slice(0, l) === ae(a.d).slice(0, l)) {
      for (i = d; i--; ) a = O(a.times(a), l, 1);
      if (t == null) if (u < 3 && an(a.d, l - r, p, u)) f.precision = l += 10, n = s = o = new f(1), c = 0, u++;
      else return O(a, f.precision = h, p, k = !0);
      else return f.precision = h, a;
    }
    a = o;
  }
}
function Ye(e, t) {
  var n, r, i, s, a, o, l, u, c, d, f, p = 1, h = 10, m = e, v = m.d, _ = m.constructor, A = _.rounding, I = _.precision;
  if (m.s < 0 || !v || !v[0] || !m.e && v[0] == 1 && v.length == 1) return new _(v && !v[0] ? -1 / 0 : m.s != 1 ? NaN : v ? 0 : m);
  if (t == null ? (k = !1, c = I) : c = t, _.precision = c += h, n = ae(v), r = n.charAt(0), Math.abs(s = m.e) < 15e14) {
    for (; r < 7 && r != 1 || r == 1 && n.charAt(1) > 3; ) m = m.times(e), n = ae(m.d), r = n.charAt(0), p++;
    s = m.e, r > 1 ? (m = new _("0." + n), s++) : m = new _(r + "." + n.slice(1));
  } else return u = Vn(_, c + 2, I).times(s + ""), m = Ye(new _(r + "." + n.slice(1)), c - h).plus(u), _.precision = I, t == null ? O(m, I, A, k = !0) : m;
  for (d = m, l = a = m = B(m.minus(1), m.plus(1), c, 1), f = O(m.times(m), c, 1), i = 3; ; ) {
    if (a = O(a.times(f), c, 1), u = l.plus(B(a, new _(i), c, 1)), ae(u.d).slice(0, c) === ae(l.d).slice(0, c)) if (l = l.times(2), s !== 0 && (l = l.plus(Vn(_, c + 2, I).times(s + ""))), l = B(l, new _(p), c, 1), t == null) if (an(l.d, c - h, A, o)) _.precision = c += h, u = a = m = B(d.minus(1), d.plus(1), c, 1), f = O(m.times(m), c, 1), i = o = 1;
    else return O(l, _.precision = I, A, k = !0);
    else return _.precision = I, l;
    l = u, i += 2;
  }
}
function el(e) {
  return String(e.s * e.s / 0);
}
function Nn(e, t) {
  var n, r, i;
  for ((n = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (r = t.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +t.slice(r + 1), t = t.substring(0, r)) : n < 0 && (n = t.length), r = 0; t.charCodeAt(r) === 48; r++) ;
  for (i = t.length; t.charCodeAt(i - 1) === 48; --i) ;
  if (t = t.slice(r, i), t) {
    if (i -= r, e.e = n = n - r - 1, e.d = [], r = (n + 1) % $, n < 0 && (r += $), r < i) {
      for (r && e.d.push(+t.slice(0, r)), i -= $; r < i; ) e.d.push(+t.slice(r, r += $));
      t = t.slice(r), r = $ - t.length;
    } else r -= i;
    for (; r--; ) t += "0";
    e.d.push(+t), k && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else e.e = 0, e.d = [0];
  return e;
}
function Hf(e, t) {
  var n, r, i, s, a, o, l, u, c;
  if (t.indexOf("_") > -1) {
    if (t = t.replace(/(\d)_(?=\d)/g, "$1"), Ko.test(t)) return Nn(e, t);
  } else if (t === "Infinity" || t === "NaN") return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (Zf.test(t)) n = 16, t = t.toLowerCase();
  else if (zf.test(t)) n = 2;
  else if (Bf.test(t)) n = 8;
  else throw Error(et + t);
  for (s = t.search(/p/i), s > 0 ? (l = +t.slice(s + 1), t = t.substring(2, s)) : t = t.slice(2), s = t.indexOf("."), a = s >= 0, r = e.constructor, a && (t = t.replace(".", ""), o = t.length, s = o - s, i = Yo(r, new r(n), s, s * 2)), u = Tn(t, n, Oe), c = u.length - 1, s = c; u[s] === 0; --s) u.pop();
  return s < 0 ? new r(e.s * 0) : (e.e = tr(u, c), e.d = u, k = !1, a && (e = B(e, i, o * 4)), l && (e = e.times(Math.abs(l) < 54 ? re(2, l) : yt.pow(2, l))), k = !0, e);
}
function Kf(e, t) {
  var n, r = t.d.length;
  if (r < 3) return t.isZero() ? t : It(e, 2, t, t);
  n = 1.4 * Math.sqrt(r), n = n > 16 ? 16 : n | 0, t = t.times(1 / nr(5, n)), t = It(e, 2, t, t);
  for (var i, s = new e(5), a = new e(16), o = new e(20); n--; ) i = t.times(t), t = t.times(s.plus(i.times(a.times(i).minus(o))));
  return t;
}
function It(e, t, n, r, i) {
  var s, a, o, l, u = e.precision, c = Math.ceil(u / $);
  for (k = !1, l = n.times(n), o = new e(r); ; ) {
    if (a = B(o.times(l), new e(t++ * t++), u, 1), o = i ? r.plus(a) : r.minus(a), r = B(a.times(l), new e(t++ * t++), u, 1), a = o.plus(r), a.d[c] !== void 0) {
      for (s = c; a.d[s] === o.d[s] && s--; ) ;
      if (s == -1) break;
    }
    s = o, o = r, r = a, a = s;
  }
  return k = !0, a.d.length = c + 1, a;
}
function nr(e, t) {
  for (var n = e; --t; ) n *= e;
  return n;
}
function tl(e, t) {
  var n, r = t.s < 0, i = Ne(e, e.precision, 1), s = i.times(0.5);
  if (t = t.abs(), t.lte(s)) return je = r ? 4 : 1, t;
  if (n = t.divToInt(i), n.isZero()) je = r ? 3 : 2;
  else {
    if (t = t.minus(n.times(i)), t.lte(s)) return je = _s(n) ? r ? 2 : 3 : r ? 4 : 1, t;
    je = _s(n) ? r ? 1 : 4 : r ? 3 : 2;
  }
  return t.minus(i).abs();
}
function Ri(e, t, n, r) {
  var i, s, a, o, l, u, c, d, f, p = e.constructor, h = n !== void 0;
  if (h ? (he(n, 1, rt), r === void 0 ? r = p.rounding : he(r, 0, 8)) : (n = p.precision, r = p.rounding), !e.isFinite()) c = el(e);
  else {
    for (c = De(e), a = c.indexOf("."), h ? (i = 2, t == 16 ? n = n * 4 - 3 : t == 8 && (n = n * 3 - 2)) : i = t, a >= 0 && (c = c.replace(".", ""), f = new p(1), f.e = c.length - a, f.d = Tn(De(f), 10, i), f.e = f.d.length), d = Tn(c, 10, i), s = l = d.length; d[--l] == 0; ) d.pop();
    if (!d[0]) c = h ? "0p+0" : "0";
    else {
      if (a < 0 ? s-- : (e = new p(e), e.d = d, e.e = s, e = B(e, f, n, r, 0, i), d = e.d, s = e.e, u = Go), a = d[n], o = i / 2, u = u || d[n + 1] !== void 0, u = r < 4 ? (a !== void 0 || u) && (r === 0 || r === (e.s < 0 ? 3 : 2)) : a > o || a === o && (r === 4 || u || r === 6 && d[n - 1] & 1 || r === (e.s < 0 ? 8 : 7)), d.length = n, u) for (; ++d[--n] > i - 1; ) d[n] = 0, n || (++s, d.unshift(1));
      for (l = d.length; !d[l - 1]; --l) ;
      for (a = 0, c = ""; a < l; a++) c += qr.charAt(d[a]);
      if (h) {
        if (l > 1) if (t == 16 || t == 8) {
          for (a = t == 16 ? 4 : 3, --l; l % a; l++) c += "0";
          for (d = Tn(c, i, t), l = d.length; !d[l - 1]; --l) ;
          for (a = 1, c = "1."; a < l; a++) c += qr.charAt(d[a]);
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
function Es(e, t) {
  if (e.length > t) return e.length = t, !0;
}
function Qf(e) {
  return new this(e).abs();
}
function Yf(e) {
  return new this(e).acos();
}
function Xf(e) {
  return new this(e).acosh();
}
function ep(e, t) {
  return new this(e).plus(t);
}
function tp(e) {
  return new this(e).asin();
}
function np(e) {
  return new this(e).asinh();
}
function rp(e) {
  return new this(e).atan();
}
function ip(e) {
  return new this(e).atanh();
}
function sp(e, t) {
  e = new this(e), t = new this(t);
  var n, r = this.precision, i = this.rounding, s = r + 4;
  return !e.s || !t.s ? n = new this(NaN) : !e.d && !t.d ? (n = Ne(this, s, 1).times(t.s > 0 ? 0.25 : 0.75), n.s = e.s) : !t.d || e.isZero() ? (n = t.s < 0 ? Ne(this, r, i) : new this(0), n.s = e.s) : !e.d || t.isZero() ? (n = Ne(this, s, 1).times(0.5), n.s = e.s) : t.s < 0 ? (this.precision = s, this.rounding = 1, n = this.atan(B(e, t, s, 1)), t = Ne(this, s, 1), this.precision = r, this.rounding = i, n = e.s < 0 ? n.minus(t) : n.plus(t)) : n = this.atan(B(e, t, s, 1)), n;
}
function ap(e) {
  return new this(e).cbrt();
}
function op(e) {
  return O(e = new this(e), e.e + 1, 2);
}
function lp(e, t, n) {
  return new this(e).clamp(t, n);
}
function up(e) {
  if (!e || typeof e != "object") throw Error(er + "Object expected");
  var t, n, r, i = e.defaults === !0, s = ["precision", 1, rt, "rounding", 0, 8, "toExpNeg", -Pt, 0, "toExpPos", 0, Pt, "maxE", 0, Pt, "minE", -Pt, 0, "modulo", 0, 9];
  for (t = 0; t < s.length; t += 3) if (n = s[t], i && (this[n] = Mr[n]), (r = e[n]) !== void 0) if (le(r) === r && r >= s[t + 1] && r <= s[t + 2]) this[n] = r;
  else throw Error(et + n + ": " + r);
  if (n = "crypto", i && (this[n] = Mr[n]), (r = e[n]) !== void 0) if (r === !0 || r === !1 || r === 0 || r === 1) if (r) if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[n] = !0;
  else throw Error(Jo);
  else this[n] = !1;
  else throw Error(et + n + ": " + r);
  return this;
}
function cp(e) {
  return new this(e).cos();
}
function dp(e) {
  return new this(e).cosh();
}
function nl(e) {
  var t, n, r;
  function i(s) {
    var a, o, l, u = this;
    if (!(u instanceof i)) return new i(s);
    if (u.constructor = i, As(s)) {
      u.s = s.s, k ? !s.d || s.e > i.maxE ? (u.e = NaN, u.d = null) : s.e < i.minE ? (u.e = 0, u.d = [0]) : (u.e = s.e, u.d = s.d.slice()) : (u.e = s.e, u.d = s.d ? s.d.slice() : s.d);
      return;
    }
    if (l = typeof s, l === "number") {
      if (s === 0) {
        u.s = 1 / s < 0 ? -1 : 1, u.e = 0, u.d = [0];
        return;
      }
      if (s < 0 ? (s = -s, u.s = -1) : u.s = 1, s === ~~s && s < 1e7) {
        for (a = 0, o = s; o >= 10; o /= 10) a++;
        k ? a > i.maxE ? (u.e = NaN, u.d = null) : a < i.minE ? (u.e = 0, u.d = [0]) : (u.e = a, u.d = [s]) : (u.e = a, u.d = [s]);
        return;
      }
      if (s * 0 !== 0) {
        s || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return Nn(u, s.toString());
    }
    if (l === "string") return (o = s.charCodeAt(0)) === 45 ? (s = s.slice(1), u.s = -1) : (o === 43 && (s = s.slice(1)), u.s = 1), Ko.test(s) ? Nn(u, s) : Hf(u, s);
    if (l === "bigint") return s < 0 ? (s = -s, u.s = -1) : u.s = 1, Nn(u, s.toString());
    throw Error(et + s);
  }
  if (i.prototype = y, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = up, i.clone = nl, i.isDecimal = As, i.abs = Qf, i.acos = Yf, i.acosh = Xf, i.add = ep, i.asin = tp, i.asinh = np, i.atan = rp, i.atanh = ip, i.atan2 = sp, i.cbrt = ap, i.ceil = op, i.clamp = lp, i.cos = cp, i.cosh = dp, i.div = fp, i.exp = pp, i.floor = hp, i.hypot = mp, i.ln = gp, i.log = yp, i.log10 = bp, i.log2 = wp, i.max = vp, i.min = _p, i.mod = Ep, i.mul = Ap, i.pow = Pp, i.random = Op, i.round = Sp, i.sign = Ip, i.sin = Rp, i.sinh = $p, i.sqrt = Tp, i.sub = Np, i.sum = kp, i.tan = Dp, i.tanh = xp, i.trunc = Lp, e === void 0 && (e = {}), e && e.defaults !== !0) for (r = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], t = 0; t < r.length; ) e.hasOwnProperty(n = r[t++]) || (e[n] = this[n]);
  return i.config(e), i;
}
function fp(e, t) {
  return new this(e).div(t);
}
function pp(e) {
  return new this(e).exp();
}
function hp(e) {
  return O(e = new this(e), e.e + 1, 3);
}
function mp() {
  var e, t, n = new this(0);
  for (k = !1, e = 0; e < arguments.length; ) if (t = new this(arguments[e++]), t.d) n.d && (n = n.plus(t.times(t)));
  else {
    if (t.s) return k = !0, new this(1 / 0);
    n = t;
  }
  return k = !0, n.sqrt();
}
function As(e) {
  return e instanceof yt || e && e.toStringTag === Ho || !1;
}
function gp(e) {
  return new this(e).ln();
}
function yp(e, t) {
  return new this(e).log(t);
}
function wp(e) {
  return new this(e).log(2);
}
function bp(e) {
  return new this(e).log(10);
}
function vp() {
  return Xo(this, arguments, -1);
}
function _p() {
  return Xo(this, arguments, 1);
}
function Ep(e, t) {
  return new this(e).mod(t);
}
function Ap(e, t) {
  return new this(e).mul(t);
}
function Pp(e, t) {
  return new this(e).pow(t);
}
function Op(e) {
  var t, n, r, i, s = 0, a = new this(1), o = [];
  if (e === void 0 ? e = this.precision : he(e, 1, rt), r = Math.ceil(e / $), this.crypto) if (crypto.getRandomValues) for (t = crypto.getRandomValues(new Uint32Array(r)); s < r; ) i = t[s], i >= 429e7 ? t[s] = crypto.getRandomValues(new Uint32Array(1))[0] : o[s++] = i % 1e7;
  else if (crypto.randomBytes) {
    for (t = crypto.randomBytes(r *= 4); s < r; ) i = t[s] + (t[s + 1] << 8) + (t[s + 2] << 16) + ((t[s + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(t, s) : (o.push(i % 1e7), s += 4);
    s = r / 4;
  } else throw Error(Jo);
  else for (; s < r; ) o[s++] = Math.random() * 1e7 | 0;
  for (r = o[--s], e %= $, r && e && (i = re(10, $ - e), o[s] = (r / i | 0) * i); o[s] === 0; s--) o.pop();
  if (s < 0) n = 0, o = [0];
  else {
    for (n = -1; o[0] === 0; n -= $) o.shift();
    for (r = 1, i = o[0]; i >= 10; i /= 10) r++;
    r < $ && (n -= $ - r);
  }
  return a.e = n, a.d = o, a;
}
function Sp(e) {
  return O(e = new this(e), e.e + 1, this.rounding);
}
function Ip(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function Rp(e) {
  return new this(e).sin();
}
function $p(e) {
  return new this(e).sinh();
}
function Tp(e) {
  return new this(e).sqrt();
}
function Np(e, t) {
  return new this(e).sub(t);
}
function kp() {
  var e = 0, t = arguments, n = new this(t[e]);
  for (k = !1; n.s && ++e < t.length; ) n = n.plus(t[e]);
  return k = !0, O(n, this.precision, this.rounding);
}
function Dp(e) {
  return new this(e).tan();
}
function xp(e) {
  return new this(e).tanh();
}
function Lp(e) {
  return O(e = new this(e), e.e + 1, 1);
}
y[Symbol.for("nodejs.util.inspect.custom")] = y.toString;
y[Symbol.toStringTag] = "Decimal";
var yt = y.constructor = nl(Mr);
qn = new yt(qn);
Mn = new yt(Mn);
var $i = yt;
function Ti(e) {
  return yt.isDecimal(e) ? !0 : e !== null && typeof e == "object" && typeof e.s == "number" && typeof e.e == "number" && typeof e.toFixed == "function" && Array.isArray(e.d);
}
var Cp = {};
kt(Cp, { ModelAction: () => rr, datamodelEnumToSchemaEnum: () => Up });
function Up(e) {
  return { name: e.name, values: e.values.map((t) => t.name) };
}
var rr = ((e) => (e.findUnique = "findUnique", e.findUniqueOrThrow = "findUniqueOrThrow", e.findFirst = "findFirst", e.findFirstOrThrow = "findFirstOrThrow", e.findMany = "findMany", e.create = "create", e.createMany = "createMany", e.createManyAndReturn = "createManyAndReturn", e.update = "update", e.updateMany = "updateMany", e.updateManyAndReturn = "updateManyAndReturn", e.upsert = "upsert", e.delete = "delete", e.deleteMany = "deleteMany", e.groupBy = "groupBy", e.count = "count", e.aggregate = "aggregate", e.findRaw = "findRaw", e.aggregateRaw = "aggregateRaw", e))(rr || {}), Fp = ve(vo()), jp = { keyword: ut, entity: ut, value: (e) => Pe(Bt(e)), punctuation: Bt, directive: ut, function: ut, variable: (e) => Pe(Bt(e)), string: (e) => Pe(tn(e)), boolean: pn, number: ut, comment: vi }, qp = (e) => e, _n = {}, Mp = 0, L = { manual: _n.Prism && _n.Prism.manual, disableWorkerMessageHandler: _n.Prism && _n.Prism.disableWorkerMessageHandler, util: { encode: function(e) {
  if (e instanceof $e) {
    let t = e;
    return new $e(t.type, L.util.encode(t.content), t.alias);
  } else return Array.isArray(e) ? e.map(L.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
}, type: function(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}, objId: function(e) {
  return e.__id || Object.defineProperty(e, "__id", { value: ++Mp }), e.__id;
}, clone: function e(t, n) {
  let r, i, s = L.util.type(t);
  switch (n = n || {}, s) {
    case "Object":
      if (i = L.util.objId(t), n[i]) return n[i];
      r = {}, n[i] = r;
      for (let a in t) t.hasOwnProperty(a) && (r[a] = e(t[a], n));
      return r;
    case "Array":
      return i = L.util.objId(t), n[i] ? n[i] : (r = [], n[i] = r, t.forEach(function(a, o) {
        r[o] = e(a, n);
      }), r);
    default:
      return t;
  }
} }, languages: { extend: function(e, t) {
  let n = L.util.clone(L.languages[e]);
  for (let r in t) n[r] = t[r];
  return n;
}, insertBefore: function(e, t, n, r) {
  r = r || L.languages;
  let i = r[e], s = {};
  for (let o in i) if (i.hasOwnProperty(o)) {
    if (o == t) for (let l in n) n.hasOwnProperty(l) && (s[l] = n[l]);
    n.hasOwnProperty(o) || (s[o] = i[o]);
  }
  let a = r[e];
  return r[e] = s, L.languages.DFS(L.languages, function(o, l) {
    l === a && o != e && (this[o] = s);
  }), s;
}, DFS: function e(t, n, r, i) {
  i = i || {};
  let s = L.util.objId;
  for (let a in t) if (t.hasOwnProperty(a)) {
    n.call(t, a, t[a], r || a);
    let o = t[a], l = L.util.type(o);
    l === "Object" && !i[s(o)] ? (i[s(o)] = !0, e(o, n, null, i)) : l === "Array" && !i[s(o)] && (i[s(o)] = !0, e(o, n, a, i));
  }
} }, plugins: {}, highlight: function(e, t, n) {
  let r = { code: e, grammar: t, language: n };
  return L.hooks.run("before-tokenize", r), r.tokens = L.tokenize(r.code, r.grammar), L.hooks.run("after-tokenize", r), $e.stringify(L.util.encode(r.tokens), r.language);
}, matchGrammar: function(e, t, n, r, i, s, a) {
  for (let m in n) {
    if (!n.hasOwnProperty(m) || !n[m]) continue;
    if (m == a) return;
    let v = n[m];
    v = L.util.type(v) === "Array" ? v : [v];
    for (let _ = 0; _ < v.length; ++_) {
      let A = v[_], I = A.inside, T = !!A.lookbehind, X = !!A.greedy, N = 0, b = A.alias;
      if (X && !A.pattern.global) {
        let E = A.pattern.toString().match(/[imuy]*$/)[0];
        A.pattern = RegExp(A.pattern.source, E + "g");
      }
      A = A.pattern || A;
      for (let E = r, S = i; E < t.length; S += t[E].length, ++E) {
        let j = t[E];
        if (t.length > e.length) return;
        if (j instanceof $e) continue;
        if (X && E != t.length - 1) {
          A.lastIndex = S;
          var d = A.exec(e);
          if (!d) break;
          var c = d.index + (T ? d[1].length : 0), f = d.index + d[0].length, o = E, l = S;
          for (let F = t.length; o < F && (l < f || !t[o].type && !t[o - 1].greedy); ++o) l += t[o].length, c >= l && (++E, S = l);
          if (t[E] instanceof $e) continue;
          u = o - E, j = e.slice(S, l), d.index -= S;
        } else {
          A.lastIndex = 0;
          var d = A.exec(j), u = 1;
        }
        if (!d) {
          if (s) break;
          continue;
        }
        T && (N = d[1] ? d[1].length : 0);
        var c = d.index + N, d = d[0].slice(N), f = c + d.length, p = j.slice(0, c), h = j.slice(f);
        let C = [E, u];
        p && (++E, S += p.length, C.push(p));
        let x = new $e(m, I ? L.tokenize(d, I) : d, b, d, X);
        if (C.push(x), h && C.push(h), Array.prototype.splice.apply(t, C), u != 1 && L.matchGrammar(e, t, n, E, S, !0, m), s) break;
      }
    }
  }
}, tokenize: function(e, t) {
  let n = [e], r = t.rest;
  if (r) {
    for (let i in r) t[i] = r[i];
    delete t.rest;
  }
  return L.matchGrammar(e, n, t, 0, 0, !1), n;
}, hooks: { all: {}, add: function(e, t) {
  let n = L.hooks.all;
  n[e] = n[e] || [], n[e].push(t);
}, run: function(e, t) {
  let n = L.hooks.all[e];
  if (!(!n || !n.length)) for (var r = 0, i; i = n[r++]; ) i(t);
} }, Token: $e };
L.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, "class-name": { pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i, lookbehind: !0, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, boolean: /\b(?:true|false)\b/, function: /\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/, punctuation: /[{}[\];(),.:]/ };
L.languages.javascript = L.languages.extend("clike", { "class-name": [L.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/, lookbehind: !0 }], keyword: [{ pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 }, { pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: !0 }], number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/, function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/ });
L.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
L.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/, lookbehind: !0, greedy: !0 }, "function-variable": { pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/, lookbehind: !0, inside: L.languages.javascript }, { pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i, inside: L.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/, lookbehind: !0, inside: L.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/, lookbehind: !0, inside: L.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ });
L.languages.markup && L.languages.markup.tag.addInlined("script", "javascript");
L.languages.js = L.languages.javascript;
L.languages.typescript = L.languages.extend("javascript", { keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/, builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/ });
L.languages.ts = L.languages.typescript;
function $e(e, t, n, r, i) {
  this.type = e, this.content = t, this.alias = n, this.length = (r || "").length | 0, this.greedy = !!i;
}
$e.stringify = function(e, t) {
  return typeof e == "string" ? e : Array.isArray(e) ? e.map(function(n) {
    return $e.stringify(n, t);
  }).join("") : Vp(e.type)(e.content);
};
function Vp(e) {
  return jp[e] || qp;
}
function zp(e) {
  return Zp(e, L.languages.javascript);
}
function Zp(e, t) {
  return L.tokenize(e, t).map((n) => $e.stringify(n)).join("");
}
function Bp(e) {
  return bf(e);
}
var Gp = class at {
  constructor(t, n) {
    g(this, "firstLineNumber");
    g(this, "lines");
    this.firstLineNumber = t, this.lines = n;
  }
  static read(t) {
    let n;
    try {
      n = ft.readFileSync(t, "utf-8");
    } catch {
      return null;
    }
    return at.fromContent(n);
  }
  static fromContent(t) {
    let n = t.split(/\r?\n/);
    return new at(1, n);
  }
  get lastLineNumber() {
    return this.firstLineNumber + this.lines.length - 1;
  }
  mapLineAt(t, n) {
    if (t < this.firstLineNumber || t > this.lines.length + this.firstLineNumber) return this;
    let r = t - this.firstLineNumber, i = [...this.lines];
    return i[r] = n(i[r]), new at(this.firstLineNumber, i);
  }
  mapLines(t) {
    return new at(this.firstLineNumber, this.lines.map((n, r) => t(n, this.firstLineNumber + r)));
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
    return new at(t, Bp(r).split(`
`));
  }
  highlight() {
    let t = zp(this.toString());
    return new at(this.firstLineNumber, t.split(`
`));
  }
  toString() {
    return this.lines.join(`
`);
  }
}, Wp = { red: pt, gray: vi, dim: fn, bold: Pe, underline: ye, highlightSource: (e) => e.highlight() }, Jp = { red: (e) => e, gray: (e) => e, dim: (e) => e, bold: (e) => e, underline: (e) => e, highlightSource: (e) => e };
function Hp({ message: e, originalMethod: t, isPanic: n, callArguments: r }) {
  return { functionName: `prisma.${t}()`, message: e, isPanic: n ?? !1, callArguments: r };
}
function Kp({ callsite: e, message: t, originalMethod: n, isPanic: r, callArguments: i }, s) {
  var d;
  let a = Hp({ message: t, originalMethod: n, isPanic: r, callArguments: i });
  if (!e || typeof window < "u" || R.env.NODE_ENV === "production") return a;
  let o = e.getLocation();
  if (!o || !o.lineNumber || !o.columnNumber) return a;
  let l = Math.max(1, o.lineNumber - 3), u = (d = Gp.read(o.fileName)) == null ? void 0 : d.slice(l, o.lineNumber), c = u == null ? void 0 : u.lineAt(o.lineNumber);
  if (u && c) {
    let f = Yp(c), p = Qp(c);
    if (!p) return a;
    a.functionName = `${p.code})`, a.location = o, r || (u = u.mapLineAt(o.lineNumber, (m) => m.slice(0, p.openingBraceIndex))), u = s.highlightSource(u);
    let h = String(u.lastLineNumber).length;
    if (a.contextLines = u.mapLines((m, v) => s.gray(String(v).padStart(h)) + " " + m).mapLines((m) => s.dim(m)).prependSymbolAt(o.lineNumber, s.bold(s.red("→"))), i) {
      let m = f + h + 1;
      m += 2, a.callArguments = (0, Fp.default)(i, m).slice(m);
    }
  }
  return a;
}
function Qp(e) {
  let t = Object.keys(rr).join("|"), n = new RegExp(String.raw`\.(${t})\(`).exec(e);
  if (n) {
    let r = n.index + n[0].length, i = e.lastIndexOf(" ", n.index) + 1;
    return { code: e.slice(i, r), openingBraceIndex: r };
  }
  return null;
}
function Yp(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) {
    if (e.charAt(n) !== " ") return t;
    t++;
  }
  return t;
}
function Xp({ functionName: e, location: t, message: n, isPanic: r, contextLines: i, callArguments: s }, a) {
  let o = [""], l = t ? " in" : ":";
  if (r ? (o.push(a.red(`Oops, an unknown error occurred! This is ${a.bold("on us")}, you did nothing wrong.`)), o.push(a.red(`It occurred in the ${a.bold(`\`${e}\``)} invocation${l}`))) : o.push(a.red(`Invalid ${a.bold(`\`${e}\``)} invocation${l}`)), t && o.push(a.underline(eh(t))), i) {
    o.push("");
    let u = [i.toString()];
    s && (u.push(s), u.push(a.dim(")"))), o.push(u.join("")), s && o.push("");
  } else o.push(""), s && o.push(s), o.push("");
  return o.push(n), o.join(`
`);
}
function eh(e) {
  let t = [e.fileName];
  return e.lineNumber && t.push(String(e.lineNumber)), e.columnNumber && t.push(String(e.columnNumber)), t.join(":");
}
function rl(e) {
  let t = e.showColors ? Wp : Jp, n;
  return n = Kp(e, t), Xp(n, t);
}
var th = ve(_o());
function nh(e, t, n) {
  let r = il(e), i = rh(r), s = sh(i);
  s ? cl(s, t, n) : t.addErrorMessage(() => "Unknown error");
}
function il(e) {
  return e.errors.flatMap((t) => t.kind === "Union" ? il(t) : [t]);
}
function rh(e) {
  let t = /* @__PURE__ */ new Map(), n = [];
  for (let r of e) {
    if (r.kind !== "InvalidArgumentType") {
      n.push(r);
      continue;
    }
    let i = `${r.selectionPath.join(".")}:${r.argumentPath.join(".")}`, s = t.get(i);
    s ? t.set(i, { ...r, argument: { ...r.argument, typeNames: ih(s.argument.typeNames, r.argument.typeNames) } }) : t.set(i, r);
  }
  return n.push(...t.values()), n;
}
function ih(e, t) {
  return [...new Set(e.concat(t))];
}
function sh(e) {
  return qf(e, (t, n) => {
    let r = Ps(t), i = Ps(n);
    return r !== i ? r - i : Os(t) - Os(n);
  });
}
function Ps(e) {
  let t = 0;
  return Array.isArray(e.selectionPath) && (t += e.selectionPath.length), Array.isArray(e.argumentPath) && (t += e.argumentPath.length), t;
}
function Os(e) {
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
xc();
var sl = class {
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
Dc();
var ah = class {
  constructor(e) {
    this.value = e;
  }
  write(e) {
    e.write(this.value);
  }
  markAsError() {
    this.value.markAsError();
  }
}, En = (e) => e, al = { bold: En, red: En, green: En, dim: En, enabled: !1 }, oh = { bold: Pe, red: pt, green: tn, dim: fn, enabled: !0 }, Ni = { write(e) {
  e.writeLine(",");
} }, ir = class {
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
}, ki = class {
  constructor() {
    g(this, "hasError", !1);
  }
  markAsError() {
    return this.hasError = !0, this;
  }
}, ol = class extends ki {
  constructor() {
    super(...arguments);
    g(this, "items", []);
  }
  addItem(t) {
    return this.items.push(new ah(t)), this;
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
    let n = new ir("[]");
    this.hasError && n.setColor(t.context.colors.red).underline(), t.write(n);
  }
  writeWithItems(t) {
    let { colors: n } = t.context;
    t.writeLine("[").withIndent(() => t.writeJoined(Ni, this.items).newLine()).write("]"), this.hasError && t.afterNextNewline(() => {
      t.writeLine(n.red("~".repeat(this.getPrintWidth())));
    });
  }
  asObject() {
  }
}, ll = class kn extends ki {
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
    let a = s;
    for (let o of i) {
      let l;
      if (a.value instanceof kn ? l = a.value.getField(o) : a.value instanceof ol && (l = a.value.getField(Number(o))), !l) return;
      a = l;
    }
    return a;
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
      if (!(r instanceof kn)) return;
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
      let a = i.value.getFieldValue(s);
      if (!a || !(a instanceof kn)) return;
      let o = a.getSelectionParent();
      if (!o) return;
      i = o;
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
    let r = new ir("{}");
    this.hasError && r.setColor(n.context.colors.red).underline(), n.write(r);
  }
  writeWithContents(n, r) {
    n.writeLine("{").withIndent(() => {
      n.writeJoined(Ni, [...r, ...this.suggestions]).newLine();
    }), n.write("}"), this.hasError && n.afterNextNewline(() => {
      n.writeLine(n.context.colors.red("~".repeat(this.getPrintWidth())));
    });
  }
}, fe = class extends ki {
  constructor(e) {
    super(), this.text = e;
  }
  getPrintWidth() {
    return this.text.length;
  }
  write(e) {
    let t = new ir(this.text);
    this.hasError && t.underline().setColor(e.context.colors.red), e.write(t);
  }
  asObject() {
  }
}, ul = class {
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
      e.writeJoined(Ni, this.fields).newLine();
    }).write(t("}")).addMarginSymbol(t("+"));
  }
};
function cl(e, t, n) {
  switch (e.kind) {
    case "MutuallyExclusiveFields":
      lh(e, t);
      break;
    case "IncludeOnScalar":
      uh(e, t);
      break;
    case "EmptySelection":
      ch(e, t, n);
      break;
    case "UnknownSelectionField":
      hh(e, t);
      break;
    case "InvalidSelectionValue":
      mh(e, t);
      break;
    case "UnknownArgument":
      gh(e, t);
      break;
    case "UnknownInputField":
      yh(e, t);
      break;
    case "RequiredArgumentMissing":
      wh(e, t);
      break;
    case "InvalidArgumentType":
      bh(e, t);
      break;
    case "InvalidArgumentValue":
      vh(e, t);
      break;
    case "ValueTooLarge":
      _h(e, t);
      break;
    case "SomeFieldsMissing":
      Eh(e, t);
      break;
    case "TooManyFieldsGiven":
      Ah(e, t);
      break;
    case "Union":
      nh(e, t, n);
      break;
    default:
      throw new Error("not implemented: " + e.kind);
  }
}
function lh(e, t) {
  var r, i, s;
  let n = (r = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : r.asObject();
  n && ((i = n.getField(e.firstField)) == null || i.markAsError(), (s = n.getField(e.secondField)) == null || s.markAsError()), t.addErrorMessage((a) => `Please ${a.bold("either")} use ${a.green(`\`${e.firstField}\``)} or ${a.green(`\`${e.secondField}\``)}, but ${a.red("not both")} at the same time.`);
}
function uh(e, t) {
  var a, o;
  let [n, r] = Rt(e.selectionPath), i = e.outputType, s = (a = t.arguments.getDeepSelectionParent(n)) == null ? void 0 : a.value;
  if (s && ((o = s.getField(r)) == null || o.markAsError(), i)) for (let l of i.fields) l.isRelation && s.addSuggestion(new xe(l.name, "true"));
  t.addErrorMessage((l) => {
    let u = `Invalid scalar field ${l.red(`\`${r}\``)} for ${l.bold("include")} statement`;
    return i ? u += ` on model ${l.bold(i.name)}. ${mn(l)}` : u += ".", u += `
Note that ${l.bold("include")} statements only accept relation fields.`, u;
  });
}
function ch(e, t, n) {
  var i, s;
  let r = (i = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : i.asObject();
  if (r) {
    let a = (s = r.getField("omit")) == null ? void 0 : s.value.asObject();
    if (a) {
      dh(e, t, a);
      return;
    }
    if (r.hasField("select")) {
      fh(e, t);
      return;
    }
  }
  if (n != null && n[Xn(e.outputType.name)]) {
    ph(e, t);
    return;
  }
  t.addErrorMessage(() => `Unknown field at "${e.selectionPath.join(".")} selection"`);
}
function dh(e, t, n) {
  n.removeAllFields();
  for (let r of e.outputType.fields) n.addSuggestion(new xe(r.name, "false"));
  t.addErrorMessage((r) => `The ${r.red("omit")} statement includes every field of the model ${r.bold(e.outputType.name)}. At least one field must be included in the result`);
}
function fh(e, t) {
  var s;
  let n = e.outputType, r = (s = t.arguments.getDeepSelectionParent(e.selectionPath)) == null ? void 0 : s.value, i = (r == null ? void 0 : r.isEmpty()) ?? !1;
  r && (r.removeAllFields(), pl(r, n)), t.addErrorMessage((a) => i ? `The ${a.red("`select`")} statement for type ${a.bold(n.name)} must not be empty. ${mn(a)}` : `The ${a.red("`select`")} statement for type ${a.bold(n.name)} needs ${a.bold("at least one truthy value")}.`);
}
function ph(e, t) {
  var i, s;
  let n = new ul();
  for (let a of e.outputType.fields) a.isRelation || n.addField(a.name, "false");
  let r = new xe("omit", n).makeRequired();
  if (e.selectionPath.length === 0) t.arguments.addSuggestion(r);
  else {
    let [a, o] = Rt(e.selectionPath), l = (s = (i = t.arguments.getDeepSelectionParent(a)) == null ? void 0 : i.value.asObject()) == null ? void 0 : s.getField(o);
    if (l) {
      let u = (l == null ? void 0 : l.value.asObject()) ?? new ll();
      u.addSuggestion(r), l.value = u;
    }
  }
  t.addErrorMessage((a) => `The global ${a.red("omit")} configuration excludes every field of the model ${a.bold(e.outputType.name)}. At least one field must be included in the result`);
}
function hh(e, t) {
  let n = hl(e.selectionPath, t);
  if (n.parentKind !== "unknown") {
    n.field.markAsError();
    let r = n.parent;
    switch (n.parentKind) {
      case "select":
        pl(r, e.outputType);
        break;
      case "include":
        Ph(r, e.outputType);
        break;
      case "omit":
        Oh(r, e.outputType);
        break;
    }
  }
  t.addErrorMessage((r) => {
    let i = [`Unknown field ${r.red(`\`${n.fieldName}\``)}`];
    return n.parentKind !== "unknown" && i.push(`for ${r.bold(n.parentKind)} statement`), i.push(`on model ${r.bold(`\`${e.outputType.name}\``)}.`), i.push(mn(r)), i.join(" ");
  });
}
function mh(e, t) {
  let n = hl(e.selectionPath, t);
  n.parentKind !== "unknown" && n.field.value.markAsError(), t.addErrorMessage((r) => `Invalid value for selection field \`${r.red(n.fieldName)}\`: ${e.underlyingError}`);
}
function gh(e, t) {
  var i, s;
  let n = e.argumentPath[0], r = (i = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : i.asObject();
  r && ((s = r.getField(n)) == null || s.markAsError(), Sh(r, e.arguments)), t.addErrorMessage((a) => dl(a, n, e.arguments.map((o) => o.name)));
}
function yh(e, t) {
  var s, a, o;
  let [n, r] = Rt(e.argumentPath), i = (s = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : s.asObject();
  if (i) {
    (a = i.getDeepField(e.argumentPath)) == null || a.markAsError();
    let l = (o = i.getDeepFieldValue(n)) == null ? void 0 : o.asObject();
    l && ml(l, e.inputType);
  }
  t.addErrorMessage((l) => dl(l, r, e.inputType.fields.map((u) => u.name)));
}
function dl(e, t, n) {
  let r = [`Unknown argument \`${e.red(t)}\`.`], i = Rh(t, n);
  return i && r.push(`Did you mean \`${e.green(i)}\`?`), n.length > 0 && r.push(mn(e)), r.join(" ");
}
function wh(e, t) {
  var l, u, c;
  let n;
  t.addErrorMessage((d) => (n == null ? void 0 : n.value) instanceof fe && n.value.text === "null" ? `Argument \`${d.green(s)}\` must not be ${d.red("null")}.` : `Argument \`${d.green(s)}\` is missing.`);
  let r = (l = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : l.asObject();
  if (!r) return;
  let [i, s] = Rt(e.argumentPath), a = new ul(), o = (u = r.getDeepFieldValue(i)) == null ? void 0 : u.asObject();
  if (o) {
    if (n = o.getField(s), n && o.removeField(s), e.inputTypes.length === 1 && e.inputTypes[0].kind === "object") {
      for (let d of e.inputTypes[0].fields) a.addField(d.name, d.typeNames.join(" | "));
      o.addSuggestion(new xe(s, a).makeRequired());
    } else {
      let d = e.inputTypes.map(fl).join(" | ");
      o.addSuggestion(new xe(s, d).makeRequired());
    }
    if (e.dependentArgumentPath) {
      (c = r.getDeepField(e.dependentArgumentPath)) == null || c.markAsError();
      let [, d] = Rt(e.dependentArgumentPath);
      t.addErrorMessage((f) => `Argument \`${f.green(s)}\` is required because argument \`${f.green(d)}\` was provided.`);
    }
  }
}
function fl(e) {
  return e.kind === "list" ? `${fl(e.elementType)}[]` : e.name;
}
function bh(e, t) {
  var i, s;
  let n = e.argument.name, r = (i = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : i.asObject();
  r && ((s = r.getDeepFieldValue(e.argumentPath)) == null || s.markAsError()), t.addErrorMessage((a) => {
    let o = sr("or", e.argument.typeNames.map((l) => a.green(l)));
    return `Argument \`${a.bold(n)}\`: Invalid value provided. Expected ${o}, provided ${a.red(e.inferredType)}.`;
  });
}
function vh(e, t) {
  var i, s;
  let n = e.argument.name, r = (i = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : i.asObject();
  r && ((s = r.getDeepFieldValue(e.argumentPath)) == null || s.markAsError()), t.addErrorMessage((a) => {
    let o = [`Invalid value for argument \`${a.bold(n)}\``];
    if (e.underlyingError && o.push(`: ${e.underlyingError}`), o.push("."), e.argument.typeNames.length > 0) {
      let l = sr("or", e.argument.typeNames.map((u) => a.green(u)));
      o.push(` Expected ${l}.`);
    }
    return o.join("");
  });
}
function _h(e, t) {
  var s, a;
  let n = e.argument.name, r = (s = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : s.asObject(), i;
  if (r) {
    let o = (a = r.getDeepField(e.argumentPath)) == null ? void 0 : a.value;
    o == null || o.markAsError(), o instanceof fe && (i = o.text);
  }
  t.addErrorMessage((o) => {
    let l = ["Unable to fit value"];
    return i && l.push(o.red(i)), l.push(`into a 64-bit signed integer for field \`${o.bold(n)}\``), l.join(" ");
  });
}
function Eh(e, t) {
  var i, s;
  let n = e.argumentPath[e.argumentPath.length - 1], r = (i = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : i.asObject();
  if (r) {
    let a = (s = r.getDeepFieldValue(e.argumentPath)) == null ? void 0 : s.asObject();
    a && ml(a, e.inputType);
  }
  t.addErrorMessage((a) => {
    let o = [`Argument \`${a.bold(n)}\` of type ${a.bold(e.inputType.name)} needs`];
    return e.constraints.minFieldCount === 1 ? e.constraints.requiredFields ? o.push(`${a.green("at least one of")} ${sr("or", e.constraints.requiredFields.map((l) => `\`${a.bold(l)}\``))} arguments.`) : o.push(`${a.green("at least one")} argument.`) : o.push(`${a.green(`at least ${e.constraints.minFieldCount}`)} arguments.`), o.push(mn(a)), o.join(" ");
  });
}
function Ah(e, t) {
  var s, a;
  let n = e.argumentPath[e.argumentPath.length - 1], r = (s = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : s.asObject(), i = [];
  if (r) {
    let o = (a = r.getDeepFieldValue(e.argumentPath)) == null ? void 0 : a.asObject();
    o && (o.markAsError(), i = Object.keys(o.getFields()));
  }
  t.addErrorMessage((o) => {
    let l = [`Argument \`${o.bold(n)}\` of type ${o.bold(e.inputType.name)} needs`];
    return e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1 ? l.push(`${o.green("exactly one")} argument,`) : e.constraints.maxFieldCount == 1 ? l.push(`${o.green("at most one")} argument,`) : l.push(`${o.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`), l.push(`but you provided ${sr("and", i.map((u) => o.red(u)))}. Please choose`), e.constraints.maxFieldCount === 1 ? l.push("one.") : l.push(`${e.constraints.maxFieldCount}.`), l.join(" ");
  });
}
function pl(e, t) {
  for (let n of t.fields) e.hasField(n.name) || e.addSuggestion(new xe(n.name, "true"));
}
function Ph(e, t) {
  for (let n of t.fields) n.isRelation && !e.hasField(n.name) && e.addSuggestion(new xe(n.name, "true"));
}
function Oh(e, t) {
  for (let n of t.fields) !e.hasField(n.name) && !n.isRelation && e.addSuggestion(new xe(n.name, "true"));
}
function Sh(e, t) {
  for (let n of t) e.hasField(n.name) || e.addSuggestion(new xe(n.name, n.typeNames.join(" | ")));
}
function hl(e, t) {
  var u, c, d, f;
  let [n, r] = Rt(e), i = (u = t.arguments.getDeepSubSelectionValue(n)) == null ? void 0 : u.asObject();
  if (!i) return { parentKind: "unknown", fieldName: r };
  let s = (c = i.getFieldValue("select")) == null ? void 0 : c.asObject(), a = (d = i.getFieldValue("include")) == null ? void 0 : d.asObject(), o = (f = i.getFieldValue("omit")) == null ? void 0 : f.asObject(), l = s == null ? void 0 : s.getField(r);
  return s && l ? { parentKind: "select", parent: s, field: l, fieldName: r } : (l = a == null ? void 0 : a.getField(r), a && l ? { parentKind: "include", field: l, parent: a, fieldName: r } : (l = o == null ? void 0 : o.getField(r), o && l ? { parentKind: "omit", field: l, parent: o, fieldName: r } : { parentKind: "unknown", fieldName: r }));
}
function ml(e, t) {
  if (t.kind === "object") for (let n of t.fields) e.hasField(n.name) || e.addSuggestion(new xe(n.name, n.typeNames.join(" | ")));
}
function Rt(e) {
  let t = [...e], n = t.pop();
  if (!n) throw new Error("unexpected empty path");
  return [t, n];
}
function mn({ green: e, enabled: t }) {
  return "Available options are " + (t ? `listed in ${e("green")}` : "marked with ?") + ".";
}
function sr(e, t) {
  if (t.length === 1) return t[0];
  let n = [...t], r = n.pop();
  return `${n.join(", ")} ${e} ${r}`;
}
var Ih = 3;
function Rh(e, t) {
  let n = 1 / 0, r;
  for (let i of t) {
    let s = (0, th.default)(e, i);
    s > Ih || s < n && (n = s, r = i);
  }
  return r;
}
var gl = class {
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
function Di(e) {
  return e instanceof gl;
}
var Dn = Symbol(), gr = /* @__PURE__ */ new WeakMap(), ar = class {
  constructor(e) {
    e === Dn ? gr.set(this, `Prisma.${this._getName()}`) : gr.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`);
  }
  _getName() {
    return this.constructor.name;
  }
  toString() {
    return gr.get(this);
  }
}, xi = class extends ar {
  _getNamespace() {
    return "NullTypes";
  }
}, fi, lo, yl = (lo = class extends xi {
  constructor() {
    super(...arguments);
    Ut(this, fi);
  }
}, fi = new WeakMap(), lo);
Li(yl, "DbNull");
var pi, uo, wl = (uo = class extends xi {
  constructor() {
    super(...arguments);
    Ut(this, pi);
  }
}, pi = new WeakMap(), uo);
Li(wl, "JsonNull");
var hi, co, bl = (co = class extends xi {
  constructor() {
    super(...arguments);
    Ut(this, hi);
  }
}, hi = new WeakMap(), co);
Li(bl, "AnyNull");
var $h = { instances: { DbNull: new yl(Dn), JsonNull: new wl(Dn), AnyNull: new bl(Dn) } };
function Li(e, t) {
  Object.defineProperty(e, "name", { value: t, configurable: !0 });
}
var Ss = ": ", Th = class {
  constructor(e, t) {
    g(this, "hasError", !1);
    this.name = e, this.value = t;
  }
  markAsError() {
    this.hasError = !0;
  }
  getPrintWidth() {
    return this.name.length + this.value.getPrintWidth() + Ss.length;
  }
  write(e) {
    let t = new ir(this.name);
    this.hasError && t.underline().setColor(e.context.colors.red), e.write(t).write(Ss).write(this.value);
  }
}, Nh = class {
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
function Ci(e) {
  return new Nh(vl(e));
}
function vl(e) {
  let t = new ll();
  for (let [n, r] of Object.entries(e)) {
    let i = new Th(n, _l(r));
    t.addField(i);
  }
  return t;
}
function _l(e) {
  if (typeof e == "string") return new fe(JSON.stringify(e));
  if (typeof e == "number" || typeof e == "boolean") return new fe(String(e));
  if (typeof e == "bigint") return new fe(`${e}n`);
  if (e === null) return new fe("null");
  if (e === void 0) return new fe("undefined");
  if (Ti(e)) return new fe(`new Prisma.Decimal("${e.toFixed()}")`);
  if (e instanceof Uint8Array) return Buffer.isBuffer(e) ? new fe(`Buffer.alloc(${e.byteLength})`) : new fe(`new Uint8Array(${e.byteLength})`);
  if (e instanceof Date) {
    let t = Bo(e) ? e.toISOString() : "Invalid Date";
    return new fe(`new Date("${t}")`);
  }
  return e instanceof ar ? new fe(`Prisma.${e._getName()}`) : Di(e) ? new fe(`prisma.${Xn(e.modelName)}.$fields.${e.name}`) : Array.isArray(e) ? kh(e) : typeof e == "object" ? vl(e) : new fe(Object.prototype.toString.call(e));
}
function kh(e) {
  let t = new ol();
  for (let n of e) t.addItem(_l(n));
  return t;
}
function El(e, t) {
  let n = t === "pretty" ? oh : al, r = e.renderAllMessages(n), i = new sl(0, { colors: n }).write(e).toString();
  return { message: r, args: i };
}
function Al({ args: e, errors: t, errorFormat: n, callsite: r, originalMethod: i, clientVersion: s, globalOmit: a }) {
  let o = Ci(e);
  for (let d of t) cl(d, o, a);
  let { message: l, args: u } = El(o, n), c = rl({ message: l, callsite: r, originalMethod: i, showColors: n === "pretty", callArguments: u });
  throw new Qe(c, { clientVersion: s });
}
function gn(e) {
  return e.replace(/^./, (t) => t.toLowerCase());
}
function Dh(e, t, n) {
  let r = gn(n);
  return !t.result || !(t.result.$allModels || t.result[r]) ? e : xh({ ...e, ...Is(t.name, e, t.result.$allModels), ...Is(t.name, e, t.result[r]) });
}
function xh(e) {
  let t = new Jt(), n = (r, i) => t.getOrCreate(r, () => i.has(r) ? [r] : (i.add(r), e[r] ? e[r].needs.flatMap((s) => n(s, i)) : [r]));
  return zo(e, (r) => ({ ...r, needs: n(r.name, /* @__PURE__ */ new Set()) }));
}
function Is(e, t, n) {
  return n ? zo(n, ({ needs: r, compute: i }, s) => ({ name: s, needs: r ? Object.keys(r).filter((a) => r[a]) : [], compute: Lh(t, s, i) })) : {};
}
function Lh(e, t, n) {
  var i;
  let r = (i = e == null ? void 0 : e[t]) == null ? void 0 : i.compute;
  return r ? (s) => n({ ...s, [t]: r(s) }) : n;
}
function Ch(e, t) {
  if (!t) return e;
  let n = { ...e };
  for (let r of Object.values(t)) if (e[r.name]) for (let i of r.needs) n[i] = !0;
  return n;
}
function Uh(e, t) {
  if (!t) return e;
  let n = { ...e };
  for (let r of Object.values(t)) if (!e[r.name]) for (let i of r.needs) delete n[i];
  return n;
}
var Rs = class {
  constructor(e, t) {
    g(this, "computedFieldsCache", new Jt());
    g(this, "modelExtensionsCache", new Jt());
    g(this, "queryCallbacksCache", new Jt());
    g(this, "clientExtensions", vs(() => {
      var e, t;
      return this.extension.client ? { ...(e = this.previous) == null ? void 0 : e.getAllClientExtensions(), ...this.extension.client } : (t = this.previous) == null ? void 0 : t.getAllClientExtensions();
    }));
    g(this, "batchCallbacks", vs(() => {
      var n, r;
      let e = ((n = this.previous) == null ? void 0 : n.getAllBatchQueryCallbacks()) ?? [], t = (r = this.extension.query) == null ? void 0 : r.$__internalBatch;
      return t ? e.concat(t) : e;
    }));
    this.extension = e, this.previous = t;
  }
  getAllComputedFields(e) {
    return this.computedFieldsCache.getOrCreate(e, () => {
      var t;
      return Dh((t = this.previous) == null ? void 0 : t.getAllComputedFields(e), this.extension, e);
    });
  }
  getAllClientExtensions() {
    return this.clientExtensions.get();
  }
  getAllModelExtensions(e) {
    return this.modelExtensionsCache.getOrCreate(e, () => {
      var n, r;
      let t = gn(e);
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
}, Pl = class xn {
  constructor(t) {
    this.head = t;
  }
  static empty() {
    return new xn();
  }
  static single(t) {
    return new xn(new Rs(t));
  }
  isEmpty() {
    return this.head === void 0;
  }
  append(t) {
    return new xn(new Rs(t, this.head));
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
}, Fh = class {
  constructor(e) {
    this.name = e;
  }
};
function jh(e) {
  return e instanceof Fh;
}
var Ol = Symbol(), Sl = class {
  constructor(e) {
    if (e !== Ol) throw new Error("Skip instance can not be constructed directly");
  }
  ifUndefined(e) {
    return e === void 0 ? qh : e;
  }
}, qh = new Sl(Ol);
function mt(e) {
  return e instanceof Sl;
}
var Mh = { findUnique: "findUnique", findUniqueOrThrow: "findUniqueOrThrow", findFirst: "findFirst", findFirstOrThrow: "findFirstOrThrow", findMany: "findMany", count: "aggregate", create: "createOne", createMany: "createMany", createManyAndReturn: "createManyAndReturn", update: "updateOne", updateMany: "updateMany", updateManyAndReturn: "updateManyAndReturn", upsert: "upsertOne", delete: "deleteOne", deleteMany: "deleteMany", executeRaw: "executeRaw", queryRaw: "queryRaw", aggregate: "aggregate", groupBy: "groupBy", runCommandRaw: "runCommandRaw", findRaw: "findRaw", aggregateRaw: "aggregateRaw" }, Il = "explicitly `undefined` values are not allowed";
function Vh({ modelName: e, action: t, args: n, runtimeDataModel: r, extensions: i = Pl.empty(), callsite: s, clientMethod: a, errorFormat: o, clientVersion: l, previewFeatures: u, globalOmit: c }) {
  let d = new Qh({ runtimeDataModel: r, modelName: e, action: t, rootArgs: n, callsite: s, extensions: i, selectionPath: [], argumentPath: [], originalMethod: a, errorFormat: o, clientVersion: l, previewFeatures: u, globalOmit: c });
  return { modelName: e, action: Mh[t], query: on(n, d) };
}
function on({ select: e, include: t, ...n } = {}, r) {
  let i = n.omit;
  return delete n.omit, { arguments: $l(n, r), selection: zh(e, t, i, r) };
}
function zh(e, t, n, r) {
  return e ? (t ? r.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "include", secondField: "select", selectionPath: r.getSelectionPath() }) : n && r.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "omit", secondField: "select", selectionPath: r.getSelectionPath() }), Wh(e, r)) : Zh(r, t, n);
}
function Zh(e, t, n) {
  let r = {};
  return e.modelOrType && !e.isRawAction() && (r.$composites = !0, r.$scalars = !0), t && Bh(r, t, e), Gh(r, n, e), r;
}
function Bh(e, t, n) {
  for (let [r, i] of Object.entries(t)) {
    if (mt(i)) continue;
    let s = n.nestSelection(r);
    if (Ui(i, s), i === !1 || i === void 0) {
      e[r] = !1;
      continue;
    }
    let a = n.findField(r);
    if (a && a.kind !== "object" && n.throwValidationError({ kind: "IncludeOnScalar", selectionPath: n.getSelectionPath().concat(r), outputType: n.getOutputTypeDescription() }), a) {
      e[r] = on(i === !0 ? {} : i, s);
      continue;
    }
    if (i === !0) {
      e[r] = !0;
      continue;
    }
    e[r] = on(i, s);
  }
}
function Gh(e, t, n) {
  let r = n.getComputedFields(), i = { ...n.getGlobalOmit(), ...t }, s = Uh(i, r);
  for (let [a, o] of Object.entries(s)) {
    if (mt(o)) continue;
    Ui(o, n.nestSelection(a));
    let l = n.findField(a);
    r != null && r[a] && !l || (e[a] = !o);
  }
}
function Wh(e, t) {
  let n = {}, r = t.getComputedFields(), i = Ch(e, r);
  for (let [s, a] of Object.entries(i)) {
    if (mt(a)) continue;
    let o = t.nestSelection(s);
    Ui(a, o);
    let l = t.findField(s);
    if (!(r != null && r[s] && !l)) {
      if (a === !1 || a === void 0 || mt(a)) {
        n[s] = !1;
        continue;
      }
      if (a === !0) {
        (l == null ? void 0 : l.kind) === "object" ? n[s] = on({}, o) : n[s] = !0;
        continue;
      }
      n[s] = on(a, o);
    }
  }
  return n;
}
function Rl(e, t) {
  if (e === null) return null;
  if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return e;
  if (typeof e == "bigint") return { $type: "BigInt", value: String(e) };
  if (Ii(e)) {
    if (Bo(e)) return { $type: "DateTime", value: e.toISOString() };
    t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: ["Date"] }, underlyingError: "Provided Date object is invalid" });
  }
  if (jh(e)) return { $type: "Param", value: e.name };
  if (Di(e)) return { $type: "FieldRef", value: { _ref: e.name, _container: e.modelName } };
  if (Array.isArray(e)) return Jh(e, t);
  if (ArrayBuffer.isView(e)) {
    let { buffer: n, byteOffset: r, byteLength: i } = e;
    return { $type: "Bytes", value: Buffer.from(n, r, i).toString("base64") };
  }
  if (Hh(e)) return e.values;
  if (Ti(e)) return { $type: "Decimal", value: e.toFixed() };
  if (e instanceof ar) {
    if (e !== $h.instances[e._getName()]) throw new Error("Invalid ObjectEnumValue");
    return { $type: "Enum", value: e._getName() };
  }
  if (Kh(e)) return e.toJSON();
  if (typeof e == "object") return $l(e, t);
  t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: `We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it` });
}
function $l(e, t) {
  if (e.$type) return { $type: "Raw", value: e };
  let n = {};
  for (let r in e) {
    let i = e[r], s = t.nestArgument(r);
    mt(i) || (i !== void 0 ? n[r] = Rl(i, s) : t.isPreviewFeatureOn("strictUndefinedChecks") && t.throwValidationError({ kind: "InvalidArgumentValue", argumentPath: s.getArgumentPath(), selectionPath: t.getSelectionPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: Il }));
  }
  return n;
}
function Jh(e, t) {
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let i = t.nestArgument(String(r)), s = e[r];
    if (s === void 0 || mt(s)) {
      let a = s === void 0 ? "undefined" : "Prisma.skip";
      t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: i.getSelectionPath(), argumentPath: i.getArgumentPath(), argument: { name: `${t.getArgumentName()}[${r}]`, typeNames: [] }, underlyingError: `Can not use \`${a}\` value within array. Use \`null\` or filter out \`${a}\` values` });
    }
    n.push(Rl(s, i));
  }
  return n;
}
function Hh(e) {
  return typeof e == "object" && e !== null && e.__prismaRawParameters__ === !0;
}
function Kh(e) {
  return typeof e == "object" && e !== null && typeof e.toJSON == "function";
}
function Ui(e, t) {
  e === void 0 && t.isPreviewFeatureOn("strictUndefinedChecks") && t.throwValidationError({ kind: "InvalidSelectionValue", selectionPath: t.getSelectionPath(), underlyingError: Il });
}
var Qh = class Zr {
  constructor(t) {
    g(this, "modelOrType");
    this.params = t, this.params.modelName && (this.modelOrType = this.params.runtimeDataModel.models[this.params.modelName] ?? this.params.runtimeDataModel.types[this.params.modelName]);
  }
  throwValidationError(t) {
    Al({ errors: [t], originalMethod: this.params.originalMethod, args: this.params.rootArgs ?? {}, callsite: this.params.callsite, errorFormat: this.params.errorFormat, clientVersion: this.params.clientVersion, globalOmit: this.params.globalOmit });
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
    return new Zr({ ...this.params, modelName: r, selectionPath: this.params.selectionPath.concat(t) });
  }
  getGlobalOmit() {
    var t;
    return this.params.modelName && this.shouldApplyGlobalOmit() ? ((t = this.params.globalOmit) == null ? void 0 : t[Xn(this.params.modelName)]) ?? {} : {};
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
        Si(this.params.action, "Unknown action");
    }
  }
  nestArgument(t) {
    return new Zr({ ...this.params, argumentPath: this.params.argumentPath.concat(t) });
  }
};
function $s(e) {
  if (!e._hasPreviewFlag("metrics")) throw new Qe("`metrics` preview feature must be enabled in order to access metrics API", { clientVersion: e._clientVersion });
}
var Yh = class {
  constructor(e) {
    g(this, "_client");
    this._client = e;
  }
  prometheus(e) {
    return $s(this._client), this._client._engine.metrics({ format: "prometheus", ...e });
  }
  json(e) {
    return $s(this._client), this._client._engine.metrics({ format: "json", ...e });
  }
}, yr = /* @__PURE__ */ new WeakMap(), zn = "$$PrismaTypedSql", Xh = class {
  constructor(e, t) {
    yr.set(this, { sql: e, values: t }), Object.defineProperty(this, zn, { value: zn });
  }
  get sql() {
    return yr.get(this).sql;
  }
  get values() {
    return yr.get(this).values;
  }
};
function Tl(e) {
  return e != null && e[zn] === zn;
}
var em = ve(bo()), yn = class Br {
  constructor(t, n) {
    if (t.length - 1 !== n.length) throw t.length === 0 ? new TypeError("Expected at least 1 string") : new TypeError(`Expected ${t.length} strings to have ${t.length - 1} values`);
    let r = n.reduce((a, o) => a + (o instanceof Br ? o.values.length : 1), 0);
    this.values = new Array(r), this.strings = new Array(r + 1), this.strings[0] = t[0];
    let i = 0, s = 0;
    for (; i < n.length; ) {
      let a = n[i++], o = t[i];
      if (a instanceof Br) {
        this.strings[s] += a.strings[0];
        let l = 0;
        for (; l < a.values.length; ) this.values[s++] = a.values[l++], this.strings[s] = a.strings[l];
        this.strings[s] += o;
      } else this.values[s++] = a, this.strings[s] = o;
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
function tm(e) {
  return new yn([e], []);
}
tm("");
function Nl(e) {
  return { getKeys() {
    return Object.keys(e);
  }, getPropertyValue(t) {
    return e[t];
  } };
}
function ke(e, t) {
  return { getKeys() {
    return [e];
  }, getPropertyValue() {
    return t();
  } };
}
function Fi(e) {
  let t = new Jt();
  return { getKeys() {
    return e.getKeys();
  }, getPropertyValue(n) {
    return t.getOrCreate(n, () => e.getPropertyValue(n));
  }, getPropertyDescriptor(n) {
    var r;
    return (r = e.getPropertyDescriptor) == null ? void 0 : r.call(e, n);
  } };
}
var Gr = { enumerable: !0, configurable: !0, writable: !0 };
function kl(e) {
  let t = new Set(e);
  return { getPrototypeOf: () => Object.prototype, getOwnPropertyDescriptor: () => Gr, has: (n, r) => t.has(r), set: (n, r, i) => t.add(r) && Reflect.set(n, r, i), ownKeys: () => [...t] };
}
var Ts = Symbol.for("nodejs.util.inspect.custom");
function $t(e, t) {
  let n = nm(t), r = /* @__PURE__ */ new Set(), i = new Proxy(e, { get(s, a) {
    if (r.has(a)) return s[a];
    let o = n.get(a);
    return o ? o.getPropertyValue(a) : s[a];
  }, has(s, a) {
    var l;
    if (r.has(a)) return !0;
    let o = n.get(a);
    return o ? ((l = o.has) == null ? void 0 : l.call(o, a)) ?? !0 : Reflect.has(s, a);
  }, ownKeys(s) {
    let a = Ns(Reflect.ownKeys(s), n), o = Ns(Array.from(n.keys()), n);
    return [.../* @__PURE__ */ new Set([...a, ...o, ...r])];
  }, set(s, a, o) {
    var l, u, c;
    return ((c = (u = (l = n.get(a)) == null ? void 0 : l.getPropertyDescriptor) == null ? void 0 : u.call(l, a)) == null ? void 0 : c.writable) === !1 ? !1 : (r.add(a), Reflect.set(s, a, o));
  }, getOwnPropertyDescriptor(s, a) {
    let o = Reflect.getOwnPropertyDescriptor(s, a);
    if (o && !o.configurable) return o;
    let l = n.get(a);
    return l ? l.getPropertyDescriptor ? { ...Gr, ...l == null ? void 0 : l.getPropertyDescriptor(a) } : Gr : o;
  }, defineProperty(s, a, o) {
    return r.add(a), Reflect.defineProperty(s, a, o);
  }, getPrototypeOf: () => Object.prototype });
  return i[Ts] = function() {
    let s = { ...this };
    return delete s[Ts], s;
  }, i;
}
function nm(e) {
  let t = /* @__PURE__ */ new Map();
  for (let n of e) {
    let r = n.getKeys();
    for (let i of r) t.set(i, n);
  }
  return t;
}
function Ns(e, t) {
  return e.filter((n) => {
    var r, i;
    return ((i = (r = t.get(n)) == null ? void 0 : r.has) == null ? void 0 : i.call(r, n)) ?? !0;
  });
}
function Wr(e) {
  return { getKeys() {
    return e;
  }, has() {
    return !1;
  }, getPropertyValue() {
  } };
}
function ji(e, t) {
  return { batch: e, transaction: (t == null ? void 0 : t.kind) === "batch" ? { isolationLevel: t.options.isolationLevel } : void 0 };
}
function rm(e) {
  if (e === void 0) return "";
  let t = Ci(e);
  return new sl(0, { colors: al }).write(t).toString();
}
var im = "P2037";
function qi({ error: e, user_facing_error: t }, n, r) {
  return t.error_code ? new ht(sm(t, r), { code: t.error_code, clientVersion: n, meta: t.meta, batchRequestIdx: t.batch_request_idx }) : new we(e, { clientVersion: n, batchRequestIdx: t.batch_request_idx });
}
function sm(e, t) {
  let n = e.message;
  return (t === "postgresql" || t === "postgres" || t === "mysql") && e.error_code === im && (n += `
Prisma Accelerate has built-in connection pooling to prevent such errors: https://pris.ly/client/error-accelerate`), n;
}
var wn = "<unknown>";
function am(e) {
  var t = e.split(`
`);
  return t.reduce(function(n, r) {
    var i = um(r) || dm(r) || hm(r) || wm(r) || gm(r);
    return i && n.push(i), n;
  }, []);
}
var om = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|rsc|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, lm = /\((\S*)(?::(\d+))(?::(\d+))\)/;
function um(e) {
  var t = om.exec(e);
  if (!t) return null;
  var n = t[2] && t[2].indexOf("native") === 0, r = t[2] && t[2].indexOf("eval") === 0, i = lm.exec(t[2]);
  return r && i != null && (t[2] = i[1], t[3] = i[2], t[4] = i[3]), { file: n ? null : t[2], methodName: t[1] || wn, arguments: n ? [t[2]] : [], lineNumber: t[3] ? +t[3] : null, column: t[4] ? +t[4] : null };
}
var cm = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|rsc|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function dm(e) {
  var t = cm.exec(e);
  return t ? { file: t[2], methodName: t[1] || wn, arguments: [], lineNumber: +t[3], column: t[4] ? +t[4] : null } : null;
}
var fm = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|rsc|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i, pm = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
function hm(e) {
  var t = fm.exec(e);
  if (!t) return null;
  var n = t[3] && t[3].indexOf(" > eval") > -1, r = pm.exec(t[3]);
  return n && r != null && (t[3] = r[1], t[4] = r[2], t[5] = null), { file: t[3], methodName: t[1] || wn, arguments: t[2] ? t[2].split(",") : [], lineNumber: t[4] ? +t[4] : null, column: t[5] ? +t[5] : null };
}
var mm = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
function gm(e) {
  var t = mm.exec(e);
  return t ? { file: t[3], methodName: t[1] || wn, arguments: [], lineNumber: +t[4], column: t[5] ? +t[5] : null } : null;
}
var ym = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function wm(e) {
  var t = ym.exec(e);
  return t ? { file: t[2], methodName: t[1] || wn, arguments: [], lineNumber: +t[3], column: t[4] ? +t[4] : null } : null;
}
var bm = class {
  getLocation() {
    return null;
  }
}, vm = class {
  constructor() {
    g(this, "_error");
    this._error = new Error();
  }
  getLocation() {
    let e = this._error.stack;
    if (!e) return null;
    let t = am(e).find((n) => {
      if (!n.file) return !1;
      let r = xf(n.file);
      return r !== "<anonymous>" && !r.includes("@prisma") && !r.includes("/packages/client/src/runtime/") && !r.endsWith("/runtime/binary.js") && !r.endsWith("/runtime/library.js") && !r.endsWith("/runtime/edge.js") && !r.endsWith("/runtime/edge-esm.js") && !r.startsWith("internal/") && !n.methodName.includes("new ") && !n.methodName.includes("getCallSite") && !n.methodName.includes("Proxy.") && n.methodName.split(".").length < 4;
    });
    return !t || !t.file ? null : { fileName: t.file, lineNumber: t.lineNumber, columnNumber: t.column };
  }
};
function Ht(e) {
  return e === "minimal" ? typeof $EnabledCallSite == "function" && e !== "minimal" ? new $EnabledCallSite() : new bm() : new vm();
}
var _m = { _avg: !0, _count: !0, _sum: !0, _min: !0, _max: !0 };
function Zn(e = {}) {
  let t = Em(e);
  return Object.entries(t).reduce((n, [r, i]) => (_m[r] !== void 0 ? n.select[r] = { select: i } : n[r] = i, n), { select: {} });
}
function Em(e = {}) {
  return typeof e._count == "boolean" ? { ...e, _count: { _all: e._count } } : e;
}
function Jr(e = {}) {
  return (t) => (typeof e._count == "boolean" && (t._count = t._count._all), t);
}
function Am(e, t) {
  let n = Jr(e);
  return t({ action: "aggregate", unpacker: n, argsMapper: Zn })(e);
}
function Pm(e = {}) {
  let { select: t, ...n } = e;
  return Zn(typeof t == "object" ? { ...n, _count: t } : { ...n, _count: { _all: !0 } });
}
function Om(e = {}) {
  return typeof e.select == "object" ? (t) => Jr(e)(t)._count : (t) => Jr(e)(t)._count._all;
}
function Sm(e, t) {
  return t({ action: "count", unpacker: Om(e), argsMapper: Pm })(e);
}
function Im(e = {}) {
  let t = Zn(e);
  if (Array.isArray(t.by)) for (let n of t.by) typeof n == "string" && (t.select[n] = !0);
  else typeof t.by == "string" && (t.select[t.by] = !0);
  return t;
}
function Rm(e = {}) {
  return (t) => (typeof (e == null ? void 0 : e._count) == "boolean" && t.forEach((n) => {
    n._count = n._count._all;
  }), t);
}
function $m(e, t) {
  return t({ action: "groupBy", unpacker: Rm(e), argsMapper: Im })(e);
}
function Tm(e, t, n) {
  if (t === "aggregate") return (r) => Am(r, n);
  if (t === "count") return (r) => Sm(r, n);
  if (t === "groupBy") return (r) => $m(r, n);
}
function Nm(e, t) {
  let n = t.fields.filter((i) => !i.relationName), r = Vf(n, "name");
  return new Proxy({}, { get(i, s) {
    if (s in i || typeof s == "symbol") return i[s];
    let a = r[s];
    if (a) return new gl(e, s, a.type, a.isList, a.kind === "enum");
  }, ...kl(Object.keys(r)) });
}
var Dl = (e) => Array.isArray(e) ? e : e.split("."), xl = (e, t) => Dl(t).reduce((n, r) => n && n[r], e), km = (e, t, n) => Dl(t).reduceRight((r, i, s, a) => Object.assign({}, xl(e, a.slice(0, s)), { [i]: r }), n);
function Dm(e, t) {
  return e === void 0 || t === void 0 ? [] : [...t, "select", e];
}
function xm(e, t, n) {
  return t === void 0 ? e ?? {} : km(t, n, e || !0);
}
function Ll(e, t, n, r, i, s) {
  let a = e._runtimeDataModel.models[t].fields.reduce((o, l) => ({ ...o, [l.name]: l }), {});
  return (o) => {
    let l = Ht(e._errorFormat), u = Dm(r, i), c = xm(o, s, u), d = n({ dataPath: u, callsite: l })(c), f = Lm(e, t);
    return new Proxy(d, { get(p, h) {
      if (!f.includes(h)) return p[h];
      let m = [a[h].type, n, h], v = [u, c];
      return Ll(e, ...m, ...v);
    }, ...kl([...f, ...Object.getOwnPropertyNames(d)]) });
  };
}
function Lm(e, t) {
  return e._runtimeDataModel.models[t].fields.filter((n) => n.kind === "object").map((n) => n.name);
}
var Cm = ["findUnique", "findUniqueOrThrow", "findFirst", "findFirstOrThrow", "create", "update", "upsert", "delete"], Um = ["aggregate", "count", "groupBy"];
function ks(e, t) {
  let n = e._extensions.getAllModelExtensions(t) ?? {}, r = [Fm(e, t), qm(e, t), Nl(n), ke("name", () => t), ke("$name", () => t), ke("$parent", () => e._appliedParent)];
  return $t({}, r);
}
function Fm(e, t) {
  let n = gn(t), r = Object.keys(rr).concat("count");
  return { getKeys() {
    return r;
  }, getPropertyValue(i) {
    let s = i, a = (o) => (l) => {
      let u = Ht(e._errorFormat);
      return e._createPrismaPromise((c) => {
        let d = { args: l, dataPath: [], action: s, model: t, clientMethod: `${n}.${i}`, jsModelName: n, transaction: c, callsite: u };
        return e._request({ ...d, ...o });
      }, { action: s, args: l, model: t });
    };
    return Cm.includes(s) ? Ll(e, t, a) : jm(i) ? Tm(e, i, a) : a({});
  } };
}
function jm(e) {
  return Um.includes(e);
}
function qm(e, t) {
  return Fi(ke("fields", () => {
    let n = e._runtimeDataModel.models[t];
    return Nm(t, n);
  }));
}
function Mm(e) {
  return e.replace(/^./, (t) => t.toUpperCase());
}
var Hr = Symbol();
function Kr(e) {
  let t = [Vm(e), zm(e), ke(Hr, () => e), ke("$parent", () => e._appliedParent)], n = e._extensions.getAllClientExtensions();
  return n && t.push(Nl(n)), $t(e, t);
}
function Vm(e) {
  let t = Object.getPrototypeOf(e._originalClient), n = [...new Set(Object.getOwnPropertyNames(t))];
  return { getKeys() {
    return n;
  }, getPropertyValue(r) {
    return e[r];
  } };
}
function zm(e) {
  let t = Object.keys(e._runtimeDataModel.models), n = t.map(gn), r = [...new Set(t.concat(n))];
  return Fi({ getKeys() {
    return r;
  }, getPropertyValue(i) {
    let s = Mm(i);
    if (e._runtimeDataModel.models[s] !== void 0) return ks(e, s);
    if (e._runtimeDataModel.models[i] !== void 0) return ks(e, i);
  }, getPropertyDescriptor(i) {
    if (!n.includes(i)) return { enumerable: !1 };
  } });
}
function Zm(e) {
  return e[Hr] ? e[Hr] : e;
}
function Bm(e) {
  var n;
  if (typeof e == "function") return e(this);
  if ((n = e.client) != null && n.__AccelerateEngine) {
    let r = e.client.__AccelerateEngine;
    this._originalClient._engine = new r(this._originalClient._accelerateEngineConfig);
  }
  let t = Object.create(this._originalClient, { _extensions: { value: this._extensions.append(e) }, _appliedParent: { value: this, configurable: !0 }, $on: { value: void 0 } });
  return Kr(t);
}
function Gm({ result: e, modelName: t, select: n, omit: r, extensions: i }) {
  let s = i.getAllComputedFields(t);
  if (!s) return e;
  let a = [], o = [];
  for (let l of Object.values(s)) {
    if (r) {
      if (r[l.name]) continue;
      let u = l.needs.filter((c) => r[c]);
      u.length > 0 && o.push(Wr(u));
    } else if (n) {
      if (!n[l.name]) continue;
      let u = l.needs.filter((c) => !n[c]);
      u.length > 0 && o.push(Wr(u));
    }
    Wm(e, l.needs) && a.push(Jm(l, $t(e, a)));
  }
  return a.length > 0 || o.length > 0 ? $t(e, [...a, ...o]) : e;
}
function Wm(e, t) {
  return t.every((n) => jf(e, n));
}
function Jm(e, t) {
  return Fi(ke(e.name, () => e.compute(t)));
}
function Mi({ visitor: e, result: t, args: n, runtimeDataModel: r, modelName: i }) {
  if (Array.isArray(t)) {
    for (let a = 0; a < t.length; a++) t[a] = Mi({ result: t[a], args: n, modelName: i, runtimeDataModel: r, visitor: e });
    return t;
  }
  let s = e(t, i, n) ?? t;
  return n.include && Ds({ includeOrSelect: n.include, result: s, parentModelName: i, runtimeDataModel: r, visitor: e }), n.select && Ds({ includeOrSelect: n.select, result: s, parentModelName: i, runtimeDataModel: r, visitor: e }), s;
}
function Ds({ includeOrSelect: e, result: t, parentModelName: n, runtimeDataModel: r, visitor: i }) {
  for (let [s, a] of Object.entries(e)) {
    if (!a || t[s] == null || mt(a)) continue;
    let o = r.models[n].fields.find((u) => u.name === s);
    if (!o || o.kind !== "object" || !o.relationName) continue;
    let l = typeof a == "object" ? a : {};
    t[s] = Mi({ visitor: i, result: t[s], args: l, modelName: o.type, runtimeDataModel: r });
  }
}
function Hm({ result: e, modelName: t, args: n, extensions: r, runtimeDataModel: i, globalOmit: s }) {
  return r.isEmpty() || e == null || typeof e != "object" || !i.models[t] ? e : Mi({ result: e, args: n ?? {}, modelName: t, runtimeDataModel: i, visitor: (a, o, l) => {
    let u = gn(o);
    return Gm({ result: a, modelName: u, select: l.select, omit: l.select ? void 0 : { ...s == null ? void 0 : s[u], ...l.omit }, extensions: r });
  } });
}
var Km = ["$connect", "$disconnect", "$on", "$transaction", "$extends"], Qm = Km;
function Ym(e) {
  if (e instanceof yn) return Xm(e);
  if (Tl(e)) return eg(e);
  if (Array.isArray(e)) {
    let n = [e[0]];
    for (let r = 1; r < e.length; r++) n[r] = Kt(e[r]);
    return n;
  }
  let t = {};
  for (let n in e) t[n] = Kt(e[n]);
  return t;
}
function Xm(e) {
  return new yn(e.strings, e.values);
}
function eg(e) {
  return new Xh(e.sql, e.values);
}
function Kt(e) {
  if (typeof e != "object" || e == null || e instanceof ar || Di(e)) return e;
  if (Ti(e)) return new $i(e.toFixed());
  if (Ii(e)) return /* @__PURE__ */ new Date(+e);
  if (ArrayBuffer.isView(e)) return e.slice(0);
  if (Array.isArray(e)) {
    let t = e.length, n;
    for (n = Array(t); t--; ) n[t] = Kt(e[t]);
    return n;
  }
  if (typeof e == "object") {
    let t = {};
    for (let n in e) n === "__proto__" ? Object.defineProperty(t, n, { value: Kt(e[n]), configurable: !0, enumerable: !0, writable: !0 }) : t[n] = Kt(e[n]);
    return t;
  }
  Si(e, "Unknown value");
}
function Cl(e, t, n, r = 0) {
  return e._createPrismaPromise((i) => {
    var a;
    let s = t.customDataProxyFetch;
    return "transaction" in t && i !== void 0 && (((a = t.transaction) == null ? void 0 : a.kind) === "batch" && t.transaction.lock.then(), t.transaction = i), r === n.length ? e._executeRequest(t) : n[r]({ model: t.model, operation: t.model ? t.action : t.clientMethod, args: Ym(t.args ?? {}), __internalParams: t, query: (o, l = t) => {
      let u = l.customDataProxyFetch;
      return l.customDataProxyFetch = Fl(s, u), l.args = o, Cl(e, l, n, r + 1);
    } });
  });
}
function tg(e, t) {
  let { jsModelName: n, action: r, clientMethod: i } = t, s = n ? r : i;
  if (e._extensions.isEmpty()) return e._executeRequest(t);
  let a = e._extensions.getAllQueryCallbacks(n ?? "$none", s);
  return Cl(e, t, a);
}
function ng(e) {
  return (t) => {
    let n = { requests: t }, r = t[0].extensions.getAllBatchQueryCallbacks();
    return r.length ? Ul(n, r, 0, e) : e(n);
  };
}
function Ul(e, t, n, r) {
  if (n === t.length) return r(e);
  let i = e.customDataProxyFetch, s = e.requests[0].transaction;
  return t[n]({ args: { queries: e.requests.map((a) => ({ model: a.modelName, operation: a.action, args: a.args })), transaction: s ? { isolationLevel: s.kind === "batch" ? s.isolationLevel : void 0 } : void 0 }, __internalParams: e, query(a, o = e) {
    let l = o.customDataProxyFetch;
    return o.customDataProxyFetch = Fl(i, l), Ul(o, t, n + 1, r);
  } });
}
var xs = (e) => e;
function Fl(e = xs, t = xs) {
  return (n) => e(t(n));
}
var Ls = pe("prisma:client"), Cs = { Vercel: "vercel", "Netlify CI": "netlify" };
function rg({ postinstall: e, ciName: t, clientVersion: n, generator: r }) {
  if (Ls("checkPlatformCaching:postinstall", e), Ls("checkPlatformCaching:ciName", t), e === !0 && !(r != null && r.output && typeof (r.output.fromEnvVar ?? r.output.value) == "string") && t && t in Cs) {
    let i = `Prisma has detected that this project was built on ${t}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${Cs[t]}-build`;
    throw console.error(i), new ee(i, n);
  }
}
function ig(e, t) {
  return e ? e.datasources ? e.datasources : e.datasourceUrl ? { [t[0]]: { url: e.datasourceUrl } } : {} : {};
}
function jl(e) {
  let { runtimeBinaryTarget: t } = e;
  return `Add "${t}" to \`binaryTargets\` in the "schema.prisma" file and run \`prisma generate\` after saving it:

${sg(e)}`;
}
function sg(e) {
  let { generator: t, generatorBinaryTargets: n, runtimeBinaryTarget: r } = e, i = { fromEnvVar: null, value: r }, s = [...n, i];
  return Af({ ...t, binaryTargets: s });
}
function or(e) {
  let { runtimeBinaryTarget: t } = e;
  return `Prisma Client could not locate the Query Engine for runtime "${t}".`;
}
function lr(e) {
  let { searchedLocations: t } = e;
  return `The following locations have been searched:
${[...new Set(t)].map((n) => `  ${n}`).join(`
`)}`;
}
function ag(e) {
  let { runtimeBinaryTarget: t } = e;
  return `${or(e)}

This happened because \`binaryTargets\` have been pinned, but the actual deployment also required "${t}".
${jl(e)}

${lr(e)}`;
}
function ql(e) {
  return `We would appreciate if you could take the time to share some information with us.
Please help us by answering a few questions: https://pris.ly/${e}`;
}
function Ml(e) {
  let { errorStack: t } = e;
  return t != null && t.match(/\/\.next|\/next@|\/next\//) ? `

We detected that you are using Next.js, learn how to fix this: https://pris.ly/d/engine-not-found-nextjs.` : "";
}
function og(e) {
  let { queryEngineName: t } = e;
  return `${or(e)}${Ml(e)}

This is likely caused by a bundler that has not copied "${t}" next to the resulting bundle.
Ensure that "${t}" has been copied next to the bundle or in "${e.expectedLocation}".

${ql("engine-not-found-bundler-investigation")}

${lr(e)}`;
}
function lg(e) {
  let { runtimeBinaryTarget: t, generatorBinaryTargets: n } = e, r = n.find((i) => i.native);
  return `${or(e)}

This happened because Prisma Client was generated for "${(r == null ? void 0 : r.value) ?? "unknown"}", but the actual deployment required "${t}".
${jl(e)}

${lr(e)}`;
}
function ug(e) {
  let { queryEngineName: t } = e;
  return `${or(e)}${Ml(e)}

This is likely caused by tooling that has not copied "${t}" to the deployment folder.
Ensure that you ran \`prisma generate\` and that "${t}" has been copied to "${e.expectedLocation}".

${ql("engine-not-found-tooling-investigation")}

${lr(e)}`;
}
var cg = pe("prisma:client:engines:resolveEnginePath"), dg = () => new RegExp("runtime[\\\\/]library\\.m?js$");
async function fg(e, t) {
  var f;
  let n = { binary: R.env.PRISMA_QUERY_ENGINE_BINARY, library: R.env.PRISMA_QUERY_ENGINE_LIBRARY }[e] ?? t.prismaPath;
  if (n !== void 0) return n;
  let { enginePath: r, searchedLocations: i } = await pg(e, t);
  if (cg("enginePath", r), r !== void 0) return t.prismaPath = r;
  let s = await Ei(), a = ((f = t.generator) == null ? void 0 : f.binaryTargets) ?? [], o = a.some((p) => p.native), l = !a.some((p) => p.value === s), u = gi.match(dg()) === null, c = { searchedLocations: i, generatorBinaryTargets: a, generator: t.generator, runtimeBinaryTarget: s, queryEngineName: Vl(e, s), expectedLocation: P.relative(R.cwd(), t.dirname), errorStack: new Error().stack }, d;
  throw o && l ? d = lg(c) : l ? d = ag(c) : u ? d = og(c) : d = ug(c), new ee(d, t.clientVersion);
}
async function pg(e, t) {
  var s, a;
  let n = await Ei(), r = [], i = [t.dirname, P.resolve(__dirname, ".."), ((a = (s = t.generator) == null ? void 0 : s.output) == null ? void 0 : a.value) ?? __dirname, P.resolve(__dirname, "../../../.prisma/client"), "/tmp/prisma-engines", t.cwd];
  gi.includes("resolveEnginePath") && i.push(gf());
  for (let o of i) {
    let l = Vl(e, n), u = P.join(o, l);
    if (r.push(o), ft.existsSync(u)) return { enginePath: u, searchedLocations: r };
  }
  return { enginePath: void 0, searchedLocations: r };
}
function Vl(e, t) {
  return cd(t);
}
function hg(e) {
  return e ? e.replace(/".*"/g, '"X"').replace(/[\s:\[]([+-]?([0-9]*[.])?[0-9]+)/g, (t) => `${t[0]}5`) : "";
}
function mg(e) {
  return e.split(`
`).map((t) => t.replace(/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)\s*/, "").replace(/\+\d+\s*ms$/, "")).join(`
`);
}
var gg = ve(kc());
function yg({ title: e, user: t = "prisma", repo: n = "prisma", template: r = "bug_report.yml", body: i }) {
  return (0, gg.default)({ user: t, repo: n, template: r, title: e, body: i });
}
function wg({ version: e, binaryTarget: t, title: n, description: r, engineVersion: i, database: s, query: a }) {
  var f;
  let o = ad(6e3 - ((a == null ? void 0 : a.length) ?? 0)), l = mg(Fr(o)), u = r ? `# Description
\`\`\`
${r}
\`\`\`` : "", c = Fr(`Hi Prisma Team! My Prisma Client just crashed. This is the report:
## Versions

| Name            | Version            |
|-----------------|--------------------|
| Node            | ${(f = R.version) == null ? void 0 : f.padEnd(19)}| 
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
${a ? hg(a) : ""}
\`\`\`
`), d = yg({ title: n, body: c });
  return `${n}

This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

${ye(d)}

If you want the Prisma team to look into it, please open the link above 🙏
To increase the chance of success, please post your schema and a snippet of
how you used Prisma Client in the issue. 
`;
}
function bg(e, t) {
  throw new Error(t);
}
function vg(e) {
  return e !== null && typeof e == "object" && typeof e.$type == "string";
}
function _g(e, t) {
  let n = {};
  for (let r of Object.keys(e)) n[r] = t(e[r], r);
  return n;
}
function Qr(e) {
  return e === null ? e : Array.isArray(e) ? e.map(Qr) : typeof e == "object" ? vg(e) ? Eg(e) : e.constructor !== null && e.constructor.name !== "Object" ? e : _g(e, Qr) : e;
}
function Eg({ $type: e, value: t }) {
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
      return new yt(t);
    case "Json":
      return JSON.parse(t);
    default:
      bg(t, "Unknown tagged value");
  }
}
var Ag = "6.19.3", Pg = () => {
  var e, t;
  return ((t = (e = globalThis.process) == null ? void 0 : e.release) == null ? void 0 : t.name) === "node";
}, Og = () => {
  var e, t;
  return !!globalThis.Bun || !!((t = (e = globalThis.process) == null ? void 0 : e.versions) != null && t.bun);
}, Sg = () => !!globalThis.Deno, Ig = () => typeof globalThis.Netlify == "object", Rg = () => typeof globalThis.EdgeRuntime == "object", $g = () => {
  var e;
  return ((e = globalThis.navigator) == null ? void 0 : e.userAgent) === "Cloudflare-Workers";
};
function Tg() {
  return [[Ig, "netlify"], [Rg, "edge-light"], [$g, "workerd"], [Sg, "deno"], [Og, "bun"], [Pg, "node"]].flatMap((e) => e[0]() ? [e[1]] : []).at(0) ?? "";
}
var Ng = { node: "Node.js", workerd: "Cloudflare Workers", deno: "Deno and Deno Deploy", netlify: "Netlify Edge Functions", "edge-light": "Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)" };
function kg() {
  let e = Tg();
  return { id: e, prettyName: Ng[e] || e, isEdge: ["workerd", "deno", "netlify", "edge-light"].includes(e) };
}
function Vi({ inlineDatasources: e, overrideDatasources: t, env: n, clientVersion: r }) {
  var l, u;
  let i, s = Object.keys(e)[0], a = (l = e[s]) == null ? void 0 : l.url, o = (u = t[s]) == null ? void 0 : u.url;
  if (s === void 0 ? i = void 0 : o ? i = o : a != null && a.value ? i = a.value : a != null && a.fromEnvVar && (i = n[a.fromEnvVar]), (a == null ? void 0 : a.fromEnvVar) !== void 0 && i === void 0) throw new ee(`error: Environment variable not found: ${a.fromEnvVar}.`, r);
  if (i === void 0) throw new ee("error: Missing URL environment variable, value, or override.", r);
  return i;
}
var Dg = class extends Error {
  constructor(t, n) {
    super(t);
    g(this, "clientVersion");
    g(this, "cause");
    this.clientVersion = n.clientVersion, this.cause = n.cause;
  }
  get [Symbol.toStringTag]() {
    return this.name;
  }
}, Dt = class extends Dg {
  constructor(t, n) {
    super(t, n);
    g(this, "isRetryable");
    this.isRetryable = n.isRetryable ?? !0;
  }
};
function ue(e, t) {
  return { ...e, isRetryable: t };
}
var Ln = class extends Dt {
  constructor(t, n) {
    super(t, ue(n, !1));
    g(this, "name", "InvalidDatasourceError");
    g(this, "code", "P6001");
  }
};
Y(Ln, "InvalidDatasourceError");
function xg(e) {
  let t = { clientVersion: e.clientVersion }, n = Object.keys(e.inlineDatasources)[0], r = Vi({ inlineDatasources: e.inlineDatasources, overrideDatasources: e.overrideDatasources, clientVersion: e.clientVersion, env: { ...e.env, ...typeof R < "u" ? R.env : {} } }), i;
  try {
    i = new URL(r);
  } catch {
    throw new Ln(`Error validating datasource \`${n}\`: the URL must start with the protocol \`prisma://\``, t);
  }
  let { protocol: s, searchParams: a } = i;
  if (s !== "prisma:" && s !== Uo) throw new Ln(`Error validating datasource \`${n}\`: the URL must start with the protocol \`prisma://\` or \`prisma+postgres://\``, t);
  let o = a.get("api_key");
  if (o === null || o.length < 1) throw new Ln(`Error validating datasource \`${n}\`: the URL must contain a valid API key`, t);
  let l = _f(i) ? "http:" : "https:";
  R.env.TEST_CLIENT_ENGINE_REMOTE_EXECUTOR && i.searchParams.has("use_http") && (l = "http:");
  let u = new URL(i.href.replace(s, l));
  return { apiKey: o, url: u };
}
var Lg = ve(wi()), Kn, zl, fo, Cg = (fo = class {
  constructor({ apiKey: e, tracingHelper: t, logLevel: n, logQueries: r, engineHash: i }) {
    Ut(this, Kn);
    g(this, "apiKey");
    g(this, "tracingHelper");
    g(this, "logLevel");
    g(this, "logQueries");
    g(this, "engineHash");
    this.apiKey = e, this.tracingHelper = t, this.logLevel = n, this.logQueries = r, this.engineHash = i;
  }
  build({ traceparent: e, transactionId: t } = {}) {
    let n = { Accept: "application/json", Authorization: `Bearer ${this.apiKey}`, "Content-Type": "application/json", "Prisma-Engine-Hash": this.engineHash, "Prisma-Engine-Version": Lg.enginesVersion };
    this.tracingHelper.isEnabled() && (n.traceparent = e ?? this.tracingHelper.getTraceParent()), t && (n["X-Transaction-Id"] = t);
    let r = ls(this, Kn, zl).call(this);
    return r.length > 0 && (n["X-Capture-Telemetry"] = r.join(", ")), n;
  }
}, Kn = new WeakSet(), zl = function() {
  let e = [];
  return this.tracingHelper.isEnabled() && e.push("tracing"), this.logLevel && e.push(this.logLevel), this.logQueries && e.push("query"), e;
}, fo);
function Ug(e) {
  return e[0] * 1e3 + e[1] / 1e6;
}
function Us(e) {
  return new Date(Ug(e));
}
var Yr = class extends Dt {
  constructor(t) {
    super("This request must be retried", ue(t, !0));
    g(this, "name", "ForcedRetryError");
    g(this, "code", "P5001");
  }
};
Y(Yr, "ForcedRetryError");
var zi = class extends Dt {
  constructor(t, n) {
    super(t, ue(n, !1));
    g(this, "name", "NotImplementedYetError");
    g(this, "code", "P5004");
  }
};
Y(zi, "NotImplementedYetError");
var Ee = class extends Dt {
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
}, Zi = class extends Ee {
  constructor(t) {
    super("Schema needs to be uploaded", ue(t, !0));
    g(this, "name", "SchemaMissingError");
    g(this, "code", "P5005");
  }
};
Y(Zi, "SchemaMissingError");
var Zl = "This request could not be understood by the server", Bl = class extends Ee {
  constructor(t, n, r) {
    super(n || Zl, ue(t, !1));
    g(this, "name", "BadRequestError");
    g(this, "code", "P5000");
    r && (this.code = r);
  }
};
Y(Bl, "BadRequestError");
var Gl = class extends Ee {
  constructor(t, n) {
    super("Engine not started: healthcheck timeout", ue(t, !0));
    g(this, "name", "HealthcheckTimeoutError");
    g(this, "code", "P5013");
    g(this, "logs");
    this.logs = n;
  }
};
Y(Gl, "HealthcheckTimeoutError");
var Wl = class extends Ee {
  constructor(t, n, r) {
    super(n, ue(t, !0));
    g(this, "name", "EngineStartupError");
    g(this, "code", "P5014");
    g(this, "logs");
    this.logs = r;
  }
};
Y(Wl, "EngineStartupError");
var Jl = class extends Ee {
  constructor(t) {
    super("Engine version is not supported", ue(t, !1));
    g(this, "name", "EngineVersionNotSupportedError");
    g(this, "code", "P5012");
  }
};
Y(Jl, "EngineVersionNotSupportedError");
var Hl = "Request timed out", Kl = class extends Ee {
  constructor(t, n = Hl) {
    super(n, ue(t, !1));
    g(this, "name", "GatewayTimeoutError");
    g(this, "code", "P5009");
  }
};
Y(Kl, "GatewayTimeoutError");
var Fg = "Interactive transaction error", Ql = class extends Ee {
  constructor(t, n = Fg) {
    super(n, ue(t, !1));
    g(this, "name", "InteractiveTransactionError");
    g(this, "code", "P5015");
  }
};
Y(Ql, "InteractiveTransactionError");
var jg = "Request parameters are invalid", Yl = class extends Ee {
  constructor(t, n = jg) {
    super(n, ue(t, !1));
    g(this, "name", "InvalidRequestError");
    g(this, "code", "P5011");
  }
};
Y(Yl, "InvalidRequestError");
var Xl = "Requested resource does not exist", eu = class extends Ee {
  constructor(t, n = Xl) {
    super(n, ue(t, !1));
    g(this, "name", "NotFoundError");
    g(this, "code", "P5003");
  }
};
Y(eu, "NotFoundError");
var tu = "Unknown server error", Xr = class extends Ee {
  constructor(t, n, r) {
    super(n || tu, ue(t, !0));
    g(this, "name", "ServerError");
    g(this, "code", "P5006");
    g(this, "logs");
    this.logs = r;
  }
};
Y(Xr, "ServerError");
var nu = "Unauthorized, check your connection string", ru = class extends Ee {
  constructor(t, n = nu) {
    super(n, ue(t, !1));
    g(this, "name", "UnauthorizedError");
    g(this, "code", "P5007");
  }
};
Y(ru, "UnauthorizedError");
var iu = "Usage exceeded, retry again later", su = class extends Ee {
  constructor(t, n = iu) {
    super(n, ue(t, !0));
    g(this, "name", "UsageExceededError");
    g(this, "code", "P5008");
  }
};
Y(su, "UsageExceededError");
async function qg(e) {
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
async function An(e, t) {
  if (e.ok) return;
  let n = { clientVersion: t, response: e }, r = await qg(e);
  if (r.type === "QueryEngineError") throw new ht(r.body.message, { code: r.body.error_code, clientVersion: t });
  if (r.type === "DataProxyError") {
    if (r.body === "InternalDataProxyError") throw new Xr(n, "Internal Data Proxy error");
    if ("EngineNotStarted" in r.body) {
      if (r.body.EngineNotStarted.reason === "SchemaMissing") return new Zi(n);
      if (r.body.EngineNotStarted.reason === "EngineVersionNotSupported") throw new Jl(n);
      if ("EngineStartupError" in r.body.EngineNotStarted.reason) {
        let { msg: i, logs: s } = r.body.EngineNotStarted.reason.EngineStartupError;
        throw new Wl(n, i, s);
      }
      if ("KnownEngineStartupError" in r.body.EngineNotStarted.reason) {
        let { msg: i, error_code: s } = r.body.EngineNotStarted.reason.KnownEngineStartupError;
        throw new ee(i, t, s);
      }
      if ("HealthcheckTimeout" in r.body.EngineNotStarted.reason) {
        let { logs: i } = r.body.EngineNotStarted.reason.HealthcheckTimeout;
        throw new Gl(n, i);
      }
    }
    if ("InteractiveTransactionMisrouted" in r.body) {
      let i = { IDParseError: "Could not parse interactive transaction ID", NoQueryEngineFoundError: "Could not find Query Engine for the specified host and transaction ID", TransactionStartError: "Could not start interactive transaction" };
      throw new Ql(n, i[r.body.InteractiveTransactionMisrouted.reason]);
    }
    if ("InvalidRequestError" in r.body) throw new Yl(n, r.body.InvalidRequestError.reason);
  }
  if (e.status === 401 || e.status === 403) throw new ru(n, _t(nu, r));
  if (e.status === 404) return new eu(n, _t(Xl, r));
  if (e.status === 429) throw new su(n, _t(iu, r));
  if (e.status === 504) throw new Kl(n, _t(Hl, r));
  if (e.status >= 500) throw new Xr(n, _t(tu, r));
  if (e.status >= 400) throw new Bl(n, _t(Zl, r));
}
function _t(e, t) {
  return t.type === "EmptyError" ? e : `${e}: ${JSON.stringify(t)}`;
}
function Mg(e) {
  let t = Math.pow(2, e) * 50, n = Math.ceil(Math.random() * t) - Math.ceil(t / 2), r = t + n;
  return new Promise((i) => setTimeout(() => i(r), r));
}
var Ue = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function Vg(e) {
  let t = new TextEncoder().encode(e), n = "", r = t.byteLength, i = r % 3, s = r - i, a, o, l, u, c;
  for (let d = 0; d < s; d = d + 3) c = t[d] << 16 | t[d + 1] << 8 | t[d + 2], a = (c & 16515072) >> 18, o = (c & 258048) >> 12, l = (c & 4032) >> 6, u = c & 63, n += Ue[a] + Ue[o] + Ue[l] + Ue[u];
  return i == 1 ? (c = t[s], a = (c & 252) >> 2, o = (c & 3) << 4, n += Ue[a] + Ue[o] + "==") : i == 2 && (c = t[s] << 8 | t[s + 1], a = (c & 64512) >> 10, o = (c & 1008) >> 4, l = (c & 15) << 2, n += Ue[a] + Ue[o] + Ue[l] + "="), n;
}
function zg(e) {
  var t;
  if ((t = e.generator) != null && t.previewFeatures.some((n) => n.toLowerCase().includes("metrics"))) throw new ee("The `metrics` preview feature is not yet available with Accelerate.\nPlease remove `metrics` from the `previewFeatures` in your schema.\n\nMore information about Accelerate: https://pris.ly/d/accelerate", e.clientVersion);
}
var Zg = { "@prisma/engines-version": "7.1.1-3.c2990dca591cba766e3b7ef5d9e8a84796e47ab7" }, au = class extends Dt {
  constructor(t, n) {
    super(`Cannot fetch data from service:
${t}`, ue(n, !0));
    g(this, "name", "RequestError");
    g(this, "code", "P5010");
  }
};
Y(au, "RequestError");
async function Vt(e, t, n = (r) => r) {
  let { clientVersion: r, ...i } = t, s = n(fetch);
  try {
    return await s(e, i);
  } catch (a) {
    let o = a.message ?? "Unknown error";
    throw new au(o, { clientVersion: r, cause: a });
  }
}
var Bg = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/, ou = pe("prisma:client:dataproxyEngine");
async function Gg(e, t) {
  let n = Zg["@prisma/engines-version"], r = t.clientVersion ?? "unknown";
  if (R.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION || globalThis.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION) return R.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION || globalThis.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION;
  if (e.includes("accelerate") && r !== "0.0.0" && r !== "in-memory") return r;
  let [i, s] = (r == null ? void 0 : r.split("-")) ?? [];
  if (s === void 0 && Bg.test(i)) return i;
  if (s !== void 0 || r === "0.0.0" || r === "in-memory") {
    let [a] = n.split("-") ?? [], [o, l, u] = a.split("."), c = Jg(`<=${o}.${l}.${u}`), d = await Vt(c, { clientVersion: r });
    if (!d.ok) throw new Error(`Failed to fetch stable Prisma version, unpkg.com status ${d.status} ${d.statusText}, response body: ${await d.text() || "<empty body>"}`);
    let f = await d.text();
    ou("length of body fetched from unpkg.com", f.length);
    let p;
    try {
      p = JSON.parse(f);
    } catch (h) {
      throw console.error("JSON.parse error: body fetched from unpkg.com: ", f), h;
    }
    return p.version;
  }
  throw new zi("Only `major.minor.patch` versions are supported by Accelerate.", { clientVersion: r });
}
async function Wg(e, t) {
  let n = await Gg(e, t);
  return ou("version", n), n;
}
function Jg(e) {
  return encodeURI(`https://unpkg.com/prisma@${e}/package.json`);
}
var Fs = 3, Ft = pe("prisma:client:dataproxyEngine"), Hg = class {
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
    zg(e), this.config = e, this.env = e.env, this.inlineSchema = Vg(e.inlineSchema), this.inlineDatasources = e.inlineDatasources, this.inlineSchemaHash = e.inlineSchemaHash, this.clientVersion = e.clientVersion, this.engineHash = e.engineVersion, this.logEmitter = e.logEmitter, this.tracingHelper = e.tracingHelper;
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
      this.host = t.host, this.protocol = t.protocol, this.headerBuilder = new Cg({ apiKey: e, tracingHelper: this.tracingHelper, logLevel: this.config.logLevel ?? "error", logQueries: this.config.logQueries, engineHash: this.engineHash }), this.remoteClientVersion = await Wg(this.host, this.config), Ft("host", this.host), Ft("protocol", this.protocol);
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
          Ft(r);
          break;
        case "error":
        case "warn":
        case "info": {
          this.logEmitter.emit(r.level, { timestamp: Us(r.timestamp), message: r.attributes.message ?? "", target: r.target ?? "BinaryEngine" });
          break;
        }
        case "query": {
          this.logEmitter.emit("query", { query: r.attributes.query ?? "", timestamp: Us(r.timestamp), duration: r.attributes.duration_ms ?? 0, params: r.attributes.params ?? "", target: r.target ?? "BinaryEngine" });
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
      let t = await Vt(await this.url("schema"), { method: "PUT", headers: this.headerBuilder.build(), body: this.inlineSchema, clientVersion: this.clientVersion });
      t.ok || Ft("schema response status", t.status);
      let n = await An(t, this.clientVersion);
      if (n) throw this.logEmitter.emit("warn", { message: `Error while uploading schema: ${n.message}`, timestamp: /* @__PURE__ */ new Date(), target: "" }), n;
      this.logEmitter.emit("info", { message: `Schema (re)uploaded (hash: ${this.inlineSchemaHash})`, timestamp: /* @__PURE__ */ new Date(), target: "" });
    });
  }
  request(e, { traceparent: t, interactiveTransaction: n, customDataProxyFetch: r }) {
    return this.requestInternal({ body: e, traceparent: t, interactiveTransaction: n, customDataProxyFetch: r });
  }
  async requestBatch(e, { traceparent: t, transaction: n, customDataProxyFetch: r }) {
    let i = (n == null ? void 0 : n.kind) === "itx" ? n.options : void 0, s = ji(e, n);
    return (await this.requestInternal({ body: s, customDataProxyFetch: r, interactiveTransaction: i, traceparent: t })).map((a) => (a.extensions && this.propagateResponseExtensions(a.extensions), "errors" in a ? this.convertProtocolErrorsToClientError(a.errors) : a));
  }
  requestInternal({ body: e, traceparent: t, customDataProxyFetch: n, interactiveTransaction: r }) {
    return this.withRetry({ actionGerund: "querying", callback: async ({ logHttpCall: i }) => {
      let s = r ? `${r.payload.endpoint}/graphql` : await this.url("graphql");
      i(s);
      let a = await Vt(s, { method: "POST", headers: this.headerBuilder.build({ traceparent: t, transactionId: r == null ? void 0 : r.id }), body: JSON.stringify(e), clientVersion: this.clientVersion }, n);
      a.ok || Ft("graphql response status", a.status), await this.handleError(await An(a, this.clientVersion));
      let o = await a.json();
      if (o.extensions && this.propagateResponseExtensions(o.extensions), "errors" in o) throw this.convertProtocolErrorsToClientError(o.errors);
      return "batchResult" in o ? o.batchResult : o;
    } });
  }
  async transaction(e, t, n) {
    let r = { start: "starting", commit: "committing", rollback: "rolling back" };
    return this.withRetry({ actionGerund: `${r[e]} transaction`, callback: async ({ logHttpCall: i }) => {
      if (e === "start") {
        let s = JSON.stringify({ max_wait: n.maxWait, timeout: n.timeout, isolation_level: n.isolationLevel }), a = await this.url("transaction/start");
        i(a);
        let o = await Vt(a, { method: "POST", headers: this.headerBuilder.build({ traceparent: t.traceparent }), body: s, clientVersion: this.clientVersion });
        await this.handleError(await An(o, this.clientVersion));
        let l = await o.json(), { extensions: u } = l;
        u && this.propagateResponseExtensions(u);
        let c = l.id, d = l["data-proxy"].endpoint;
        return { id: c, payload: { endpoint: d } };
      } else {
        let s = `${n.payload.endpoint}/${e}`;
        i(s);
        let a = await Vt(s, { method: "POST", headers: this.headerBuilder.build({ traceparent: t.traceparent }), clientVersion: this.clientVersion });
        await this.handleError(await An(a, this.clientVersion));
        let o = await a.json(), { extensions: l } = o;
        l && this.propagateResponseExtensions(l);
        return;
      }
    } });
  }
  getURLAndAPIKey() {
    return xg({ clientVersion: this.clientVersion, env: this.env, inlineDatasources: this.inlineDatasources, overrideDatasources: this.config.overrideDatasources });
  }
  metrics() {
    throw new zi("Metrics are not yet supported for Accelerate", { clientVersion: this.clientVersion });
  }
  async withRetry(e) {
    for (let t = 0; ; t++) {
      let n = (r) => {
        this.logEmitter.emit("info", { message: `Calling ${r} (n=${t})`, timestamp: /* @__PURE__ */ new Date(), target: "" });
      };
      try {
        return await e.callback({ logHttpCall: n });
      } catch (r) {
        if (!(r instanceof Dt) || !r.isRetryable) throw r;
        if (t >= Fs) throw r instanceof Yr ? r.cause : r;
        this.logEmitter.emit("warn", { message: `Attempt ${t + 1}/${Fs} failed for ${e.actionGerund}: ${r.message ?? "(unknown)"}`, timestamp: /* @__PURE__ */ new Date(), target: "" });
        let i = await Mg(t);
        this.logEmitter.emit("warn", { message: `Retrying after ${i}ms`, timestamp: /* @__PURE__ */ new Date(), target: "" });
      }
    }
  }
  async handleError(e) {
    if (e instanceof Zi) throw await this.uploadSchema(), new Yr({ clientVersion: this.clientVersion, cause: e });
    if (e) throw e;
  }
  convertProtocolErrorsToClientError(e) {
    return e.length === 1 ? qi(e[0], this.config.clientVersion, this.config.activeProvider) : new we(JSON.stringify(e), { clientVersion: this.config.clientVersion });
  }
  applyPendingMigrations() {
    throw new Error("Method not implemented.");
  }
};
function Kg(e) {
  if ((e == null ? void 0 : e.kind) === "itx") return e.options.id;
}
var wr = Symbol("PrismaLibraryEngineCache");
function Qg() {
  let e = globalThis;
  return e[wr] === void 0 && (e[wr] = {}), e[wr];
}
function Yg(e) {
  let t = Qg();
  if (t[e] !== void 0) return t[e];
  let n = P.toNamespacedPath(e), r = { exports: {} }, i = 0;
  return R.platform !== "win32" && (i = en.constants.dlopen.RTLD_LAZY | en.constants.dlopen.RTLD_DEEPBIND), R.dlopen(r, n, i), t[e] = r.exports, r.exports;
}
var Xg = { async loadLibrary(e) {
  let t = await Rd(), n = await fg("library", e);
  try {
    return e.tracingHelper.runInChildSpan({ name: "loadLibrary", internal: !0 }, () => Yg(n));
  } catch (r) {
    let i = yf({ e: r, platformInfo: t, id: n });
    throw new ee(i, e.clientVersion);
  }
} }, br, ey = { async loadLibrary(e) {
  let { clientVersion: t, adapter: n, engineWasm: r } = e;
  if (n === void 0) throw new ee(`The \`adapter\` option for \`PrismaClient\` is required in this context (${kg().prettyName})`, t);
  if (r === void 0) throw new ee("WASM engine was unexpectedly `undefined`", t);
  br === void 0 && (br = (async () => {
    let s = await r.getRuntime(), a = await r.getQueryEngineWasmModule();
    if (a == null) throw new ee("The loaded wasm module was unexpectedly `undefined` or `null` once loaded", t);
    let o = { "./query_engine_bg.js": s }, l = new WebAssembly.Instance(a, o), u = l.exports.__wbindgen_start;
    return s.__wbg_set_wasm(l.exports), u(), s.QueryEngine;
  })());
  let i = await br;
  return { debugPanic() {
    return Promise.reject("{}");
  }, dmmf() {
    return Promise.resolve("{}");
  }, version() {
    return { commit: "unknown", version: "unknown" };
  }, QueryEngine: i };
} }, ty = "P2036", Se = pe("prisma:client:libraryEngine");
function ny(e) {
  return e.item_type === "query" && "query" in e;
}
function ry(e) {
  return "level" in e ? e.level === "error" && e.message === "PANIC" : !1;
}
var js = [...ud, "native"], iy = 0xffffffffffffffffn, vr = 1n;
function sy() {
  let e = vr++;
  return vr > iy && (vr = 1n), e;
}
var qs = class {
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
    this.libraryLoader = t ?? Xg, e.engineWasm !== void 0 && (this.libraryLoader = t ?? ey), this.config = e, this.libraryStarted = !1, this.logQueries = e.logQueries ?? !1, this.logLevel = e.logLevel ?? "error", this.logEmitter = e.logEmitter, this.datamodel = e.inlineSchema, this.tracingHelper = e.tracingHelper, e.enableDebugLogs && (this.logLevel = "debug");
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
      let n = sy().toString();
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
    var o, l, u;
    await this.start();
    let r = await this.adapterPromise, i = JSON.stringify(t), s;
    if (e === "start") {
      let c = JSON.stringify({ max_wait: n.maxWait, timeout: n.timeout, isolation_level: n.isolationLevel });
      s = await ((o = this.engine) == null ? void 0 : o.startTransaction(c, i));
    } else e === "commit" ? s = await ((l = this.engine) == null ? void 0 : l.commitTransaction(n.id, i)) : e === "rollback" && (s = await ((u = this.engine) == null ? void 0 : u.rollbackTransaction(n.id, i)));
    let a = this.parseEngineResponse(s);
    if (ay(a)) {
      let c = this.getExternalAdapterError(a, r == null ? void 0 : r.errorRegistry);
      throw c ? c.error : new ht(a.message, { code: a.error_code, clientVersion: this.config.clientVersion, meta: a.meta });
    } else if (typeof a.message == "string") throw new we(a.message, { clientVersion: this.config.clientVersion });
    return a;
  }
  async instantiateLibrary() {
    if (Se("internalSetup"), this.libraryInstantiationPromise) return this.libraryInstantiationPromise;
    ld(), this.binaryTarget = await this.getCurrentBinaryTarget(), await this.tracingHelper.runInChildSpan("load_engine", () => this.loadEngine()), this.version();
  }
  async getCurrentBinaryTarget() {
    {
      if (this.binaryTarget) return this.binaryTarget;
      let e = await this.tracingHelper.runInChildSpan("detect_platform", () => Ei());
      if (!js.includes(e)) throw new ee(`Unknown ${pt("PRISMA_QUERY_ENGINE_LIBRARY")} ${pt(Pe(e))}. Possible binaryTargets: ${tn(js.join(", "))} or a path to the query engine library.
You may have to run ${tn("prisma generate")} for your changes to take effect.`, this.config.clientVersion);
      return e;
    }
  }
  parseEngineResponse(e) {
    if (!e) throw new we("Response from the Engine was empty", { clientVersion: this.config.clientVersion });
    try {
      return JSON.parse(e);
    } catch {
      throw new we("Unable to JSON.parse response from engine", { clientVersion: this.config.clientVersion });
    }
  }
  async loadEngine() {
    var e, t;
    if (!this.engine) {
      this.QueryEngineConstructor || (this.library = await this.libraryLoader.loadLibrary(this.config), this.QueryEngineConstructor = this.library.QueryEngine);
      try {
        let n = new WeakRef(this);
        this.adapterPromise || (this.adapterPromise = (t = (e = this.config.adapter) == null ? void 0 : e.connect()) == null ? void 0 : t.then(gs));
        let r = await this.adapterPromise;
        r && Se("Using driver adapter: %O", r), this.engine = this.wrapEngine(new this.QueryEngineConstructor({ datamodel: this.datamodel, env: R.env, logQueries: this.config.logQueries ?? !1, ignoreEnvVarErrors: !0, datasourceOverrides: this.datasourceOverrides ?? {}, logLevel: this.logLevel, configDir: this.config.cwd, engineProtocol: "json", enableTracing: this.tracingHelper.isEnabled() }, (i) => {
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
    t && (t.level = (t == null ? void 0 : t.level.toLowerCase()) ?? "unknown", ny(t) ? this.logEmitter.emit("query", { timestamp: /* @__PURE__ */ new Date(), query: t.query, params: t.params, duration: Number(t.duration_ms), target: t.module_path }) : ry(t) ? this.loggerRustPanic = new ct(_r(this, `${t.message}: ${t.reason} in ${t.file}:${t.line}:${t.column}`), this.config.clientVersion) : this.logEmitter.emit(t.level, { timestamp: /* @__PURE__ */ new Date(), message: t.message, target: t.module_path }));
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
    if (this.libraryInstantiationPromise || (this.libraryInstantiationPromise = this.instantiateLibrary()), await this.libraryInstantiationPromise, await this.libraryStoppingPromise, this.libraryStartingPromise) return Se(`library already starting, this.libraryStarted: ${this.libraryStarted}`), this.libraryStartingPromise;
    if (this.libraryStarted) return;
    let e = async () => {
      var t, n, r;
      Se("library starting");
      try {
        let i = { traceparent: this.tracingHelper.getTraceParent() };
        await ((t = this.engine) == null ? void 0 : t.connect(JSON.stringify(i))), this.libraryStarted = !0, this.adapterPromise || (this.adapterPromise = (r = (n = this.config.adapter) == null ? void 0 : n.connect()) == null ? void 0 : r.then(gs)), await this.adapterPromise, Se("library started");
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
    if (await this.libraryInstantiationPromise, await this.libraryStartingPromise, await this.executingQueryPromise, this.libraryStoppingPromise) return Se("library is already stopping"), this.libraryStoppingPromise;
    if (!this.libraryStarted) {
      await ((t = await this.adapterPromise) == null ? void 0 : t.dispose()), this.adapterPromise = void 0;
      return;
    }
    let e = async () => {
      var r, i, s;
      await new Promise((a) => setImmediate(a)), Se("library stopping");
      let n = { traceparent: this.tracingHelper.getTraceParent() };
      await ((r = this.engine) == null ? void 0 : r.disconnect(JSON.stringify(n))), (i = this.engine) != null && i.free && this.engine.free(), this.engine = void 0, this.libraryStarted = !1, this.libraryStoppingPromise = void 0, this.libraryInstantiationPromise = void 0, await ((s = await this.adapterPromise) == null ? void 0 : s.dispose()), this.adapterPromise = void 0, Se("library stopped");
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
    var s, a;
    Se(`sending request, this.libraryStarted: ${this.libraryStarted}`);
    let r = JSON.stringify({ traceparent: t }), i = JSON.stringify(e);
    try {
      await this.start();
      let o = await this.adapterPromise;
      this.executingQueryPromise = (s = this.engine) == null ? void 0 : s.query(i, r, n == null ? void 0 : n.id), this.lastQuery = i;
      let l = this.parseEngineResponse(await this.executingQueryPromise);
      if (l.errors) throw l.errors.length === 1 ? this.buildQueryError(l.errors[0], o == null ? void 0 : o.errorRegistry) : new we(JSON.stringify(l.errors), { clientVersion: this.config.clientVersion });
      if (this.loggerRustPanic) throw this.loggerRustPanic;
      return { data: l };
    } catch (o) {
      if (o instanceof ee) throw o;
      if (o.code === "GenericFailure" && ((a = o.message) != null && a.startsWith("PANIC:"))) throw new ct(_r(this, o.message), this.config.clientVersion);
      let l = this.parseRequestError(o.message);
      throw typeof l == "string" ? o : new we(`${l.message}
${l.backtrace}`, { clientVersion: this.config.clientVersion });
    }
  }
  async requestBatch(e, { transaction: t, traceparent: n }) {
    var u;
    Se("requestBatch");
    let r = ji(e, t);
    await this.start();
    let i = await this.adapterPromise;
    this.lastQuery = JSON.stringify(r), this.executingQueryPromise = (u = this.engine) == null ? void 0 : u.query(this.lastQuery, JSON.stringify({ traceparent: n }), Kg(t));
    let s = await this.executingQueryPromise, a = this.parseEngineResponse(s);
    if (a.errors) throw a.errors.length === 1 ? this.buildQueryError(a.errors[0], i == null ? void 0 : i.errorRegistry) : new we(JSON.stringify(a.errors), { clientVersion: this.config.clientVersion });
    let { batchResult: o, errors: l } = a;
    if (Array.isArray(o)) return o.map((c) => c.errors && c.errors.length > 0 ? this.loggerRustPanic ?? this.buildQueryError(c.errors[0], i == null ? void 0 : i.errorRegistry) : { data: c });
    throw l && l.length === 1 ? new Error(l[0].error) : new Error(JSON.stringify(a));
  }
  buildQueryError(e, t) {
    if (e.user_facing_error.is_panic) return new ct(_r(this, e.user_facing_error.message), this.config.clientVersion);
    let n = this.getExternalAdapterError(e.user_facing_error, t);
    return n ? n.error : qi(e, this.config.clientVersion, this.config.activeProvider);
  }
  getExternalAdapterError(e, t) {
    var n;
    if (e.error_code === ty && t) {
      let r = (n = e.meta) == null ? void 0 : n.id;
      ys(typeof r == "number", "Malformed external JS error received from the engine");
      let i = t.consumeError(r);
      return ys(i, "External error with reported id was not registered"), i;
    }
  }
  async metrics(e) {
    await this.start();
    let t = await this.engine.metrics(JSON.stringify(e));
    return e.format === "prometheus" ? t : this.parseEngineResponse(t);
  }
};
function ay(e) {
  return typeof e == "object" && e !== null && e.error_code !== void 0;
}
function _r(e, t) {
  var n;
  return wg({ binaryTarget: e.binaryTarget, title: t, version: e.config.clientVersion, engineVersion: (n = e.versionInfo) == null ? void 0 : n.commit, database: e.config.activeProvider, query: e.lastQuery });
}
function oy({ url: e, adapter: t, copyEngine: n, targetBuildType: r }) {
  let i = [], s = [], a = (m) => {
    i.push({ _tag: "warning", value: m });
  }, o = (m) => {
    let v = m.join(`
`);
    s.push({ _tag: "error", value: v });
  }, l = !!(e != null && e.startsWith("prisma://")), u = Fo(e), c = !!t, d = l || u;
  !c && n && d && r !== "client" && r !== "wasm-compiler-edge" && a(["recommend--no-engine", "In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)"]);
  let f = d || !n;
  c && (f || r === "edge") && (d ? o(["You've provided both a driver adapter and an Accelerate database URL. Driver adapters currently cannot connect to Accelerate.", "Please provide either a driver adapter with a direct database URL or an Accelerate URL and no driver adapter."]) : n || o(["Prisma Client was configured to use the `adapter` option but `prisma generate` was run with `--no-engine`.", "Please run `prisma generate` without `--no-engine` to be able to use Prisma Client with the adapter."]));
  let p = { accelerate: f, ppg: u, driverAdapters: c };
  function h(m) {
    return m.length > 0;
  }
  return h(s) ? { ok: !1, diagnostics: { warnings: i, errors: s }, isUsing: p } : { ok: !0, diagnostics: { warnings: i }, isUsing: p };
}
function ly({ copyEngine: e = !0 }, t) {
  let n;
  try {
    n = Vi({ inlineDatasources: t.inlineDatasources, overrideDatasources: t.overrideDatasources, env: { ...t.env, ...R.env }, clientVersion: t.clientVersion });
  } catch {
  }
  let { ok: r, isUsing: i, diagnostics: s } = oy({ url: n, adapter: t.adapter, copyEngine: e, targetBuildType: "library" });
  for (let l of s.warnings) Mf(...l.value);
  if (!r) {
    let l = s.errors[0];
    throw new Qe(l.value, { clientVersion: t.clientVersion });
  }
  let a = Cr(t.generator), o = a === "library";
  return i.accelerate ? new Hg(t) : o ? new qs(t) : new qs(t);
}
function uy({ generator: e }) {
  return (e == null ? void 0 : e.previewFeatures) ?? [];
}
var cy = (e) => ({ command: e }), dy = (e) => e.strings.reduce((t, n, r) => `${t}@P${r}${n}`);
function jt(e) {
  try {
    return Ms(e, "fast");
  } catch {
    return Ms(e, "slow");
  }
}
function Ms(e, t) {
  return JSON.stringify(e.map((n) => lu(n, t)));
}
function lu(e, t) {
  if (Array.isArray(e)) return e.map((n) => lu(n, t));
  if (typeof e == "bigint") return { prisma__type: "bigint", prisma__value: e.toString() };
  if (Ii(e)) return { prisma__type: "date", prisma__value: e.toJSON() };
  if ($i.isDecimal(e)) return { prisma__type: "decimal", prisma__value: e.toJSON() };
  if (Buffer.isBuffer(e)) return { prisma__type: "bytes", prisma__value: e.toString("base64") };
  if (fy(e)) return { prisma__type: "bytes", prisma__value: Buffer.from(e).toString("base64") };
  if (ArrayBuffer.isView(e)) {
    let { buffer: n, byteOffset: r, byteLength: i } = e;
    return { prisma__type: "bytes", prisma__value: Buffer.from(n, r, i).toString("base64") };
  }
  return typeof e == "object" && t === "slow" ? uu(e) : e;
}
function fy(e) {
  return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer ? !0 : typeof e == "object" && e !== null ? e[Symbol.toStringTag] === "ArrayBuffer" || e[Symbol.toStringTag] === "SharedArrayBuffer" : !1;
}
function uu(e) {
  if (typeof e != "object" || e === null) return e;
  if (typeof e.toJSON == "function") return e.toJSON();
  if (Array.isArray(e)) return e.map(Vs);
  let t = {};
  for (let n of Object.keys(e)) t[n] = Vs(e[n]);
  return t;
}
function Vs(e) {
  return typeof e == "bigint" ? e.toString() : uu(e);
}
var py = /^(\s*alter\s)/i, zs = pe("prisma:client");
function Zs(e, t, n, r) {
  if (!(e !== "postgresql" && e !== "cockroachdb") && n.length > 0 && py.exec(t)) throw new Error(`Running ALTER using ${r} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
}
var Bs = ({ clientMethod: e, activeProvider: t }) => (n) => {
  let r = "", i;
  if (Tl(n)) r = n.sql, i = { values: jt(n.values), __prismaRawParameters__: !0 };
  else if (Array.isArray(n)) {
    let [s, ...a] = n;
    r = s, i = { values: jt(a || []), __prismaRawParameters__: !0 };
  } else switch (t) {
    case "sqlite":
    case "mysql": {
      r = n.sql, i = { values: jt(n.values), __prismaRawParameters__: !0 };
      break;
    }
    case "cockroachdb":
    case "postgresql":
    case "postgres": {
      r = n.text, i = { values: jt(n.values), __prismaRawParameters__: !0 };
      break;
    }
    case "sqlserver": {
      r = dy(n), i = { values: jt(n.values), __prismaRawParameters__: !0 };
      break;
    }
    default:
      throw new Error(`The ${t} provider does not support ${e}`);
  }
  return i != null && i.values ? zs(`prisma.${e}(${r}, ${i.values})`) : zs(`prisma.${e}(${r})`), { query: r, parameters: i };
}, hy = { requestArgsToMiddlewareArgs(e) {
  return [e.strings, ...e.values];
}, middlewareArgsToRequestArgs(e) {
  let [t, ...n] = e;
  return new yn(t, n);
} }, my = { requestArgsToMiddlewareArgs(e) {
  return [e];
}, middlewareArgsToRequestArgs(e) {
  return e[0];
} };
function Gs(e) {
  return function(t, n) {
    let r, i = (s = e) => {
      try {
        return s === void 0 || (s == null ? void 0 : s.kind) === "itx" ? r ?? (r = Ws(t(s))) : Ws(t(s));
      } catch (a) {
        return Promise.reject(a);
      }
    };
    return { get spec() {
      return n;
    }, then(s, a) {
      return i().then(s, a);
    }, catch(s) {
      return i().catch(s);
    }, finally(s) {
      return i().finally(s);
    }, requestTransaction(s) {
      let a = i(s);
      return a.requestTransaction ? a.requestTransaction(s) : a;
    }, [Symbol.toStringTag]: "PrismaPromise" };
  };
}
function Ws(e) {
  return typeof e.then == "function" ? e : Promise.resolve(e);
}
var gy = cf.split(".")[0], yy = { isEnabled() {
  return !1;
}, getTraceParent() {
  return "00-10-10-00";
}, dispatchEngineSpans() {
}, getActiveContext() {
}, runInChildSpan(e, t) {
  return t();
} }, wy = class {
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
    let e = globalThis[`V${gy}_PRISMA_INSTRUMENTATION`], t = globalThis.PRISMA_INSTRUMENTATION;
    return (e == null ? void 0 : e.helper) ?? (t == null ? void 0 : t.helper) ?? yy;
  }
};
function by() {
  return new wy();
}
function vy(e, t = () => {
}) {
  let n, r = new Promise((i) => n = i);
  return { then(i) {
    return --e === 0 && n(t()), i == null ? void 0 : i(r);
  } };
}
function _y(e) {
  return typeof e == "string" ? e : e.reduce((t, n) => {
    let r = typeof n == "string" ? n : n.level;
    return r === "query" ? t : t && (n === "info" || t === "info") ? "info" : r;
  }, void 0);
}
function cu(e) {
  return typeof e.batchRequestIdx == "number";
}
function Ey(e) {
  if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow") return;
  let t = [];
  return e.modelName && t.push(e.modelName), e.query.arguments && t.push(ei(e.query.arguments)), t.push(ei(e.query.selection)), t.join("");
}
function ei(e) {
  return `(${Object.keys(e).sort().map((t) => {
    let n = e[t];
    return typeof n == "object" && n !== null ? `(${t} ${ei(n)})` : t;
  }).join(" ")})`;
}
var Ay = { aggregate: !1, aggregateRaw: !1, createMany: !0, createManyAndReturn: !0, createOne: !0, deleteMany: !0, deleteOne: !0, executeRaw: !0, findFirst: !1, findFirstOrThrow: !1, findMany: !1, findRaw: !1, findUnique: !1, findUniqueOrThrow: !1, groupBy: !1, queryRaw: !1, runCommandRaw: !0, updateMany: !0, updateManyAndReturn: !0, updateOne: !0, upsertOne: !0 };
function Js(e) {
  return Ay[e];
}
var Py = class {
  constructor(e) {
    g(this, "batches");
    g(this, "tickActive", !1);
    this.options = e, this.batches = {};
  }
  request(e) {
    let t = this.options.batchBy(e);
    return t ? (this.batches[t] || (this.batches[t] = [], this.tickActive || (this.tickActive = !0, R.nextTick(() => {
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
function Oy(e) {
  let t = [], n = Sy(e);
  for (let r = 0; r < e.rows.length; r++) {
    let i = e.rows[r], s = { ...n };
    for (let a = 0; a < i.length; a++) s[e.columns[a]] = ot(e.types[a], i[a]);
    t.push(s);
  }
  return t;
}
function Sy(e) {
  let t = {};
  for (let n = 0; n < e.columns.length; n++) t[e.columns[n]] = null;
  return t;
}
var Iy = pe("prisma:client:request_handler"), Ry = class {
  constructor(e, t) {
    g(this, "client");
    g(this, "dataloader");
    g(this, "logEmitter");
    this.logEmitter = t, this.client = e, this.dataloader = new Py({ batchLoader: ng(async ({ requests: n, customDataProxyFetch: r }) => {
      let { transaction: i, otelParentCtx: s } = n[0], a = n.map((u) => u.protocolQuery), o = this.client._tracingHelper.getTraceParent(s), l = n.some((u) => Js(u.protocolQuery.action));
      return (await this.client._engine.requestBatch(a, { traceparent: o, transaction: $y(i), containsWrite: l, customDataProxyFetch: r })).map((u, c) => {
        if (u instanceof Error) return u;
        try {
          return this.mapQueryEngineResult(n[c], u);
        } catch (d) {
          return d;
        }
      });
    }), singleLoader: async (n) => {
      var s;
      let r = ((s = n.transaction) == null ? void 0 : s.kind) === "itx" ? du(n.transaction) : void 0, i = await this.client._engine.request(n.protocolQuery, { traceparent: this.client._tracingHelper.getTraceParent(), interactiveTransaction: r, isWrite: Js(n.protocolQuery.action), customDataProxyFetch: n.customDataProxyFetch });
      return this.mapQueryEngineResult(n, i);
    }, batchBy: (n) => {
      var r;
      return (r = n.transaction) != null && r.id ? `transaction-${n.transaction.id}` : Ey(n.protocolQuery);
    }, batchOrder(n, r) {
      var i, s;
      return ((i = n.transaction) == null ? void 0 : i.kind) === "batch" && ((s = r.transaction) == null ? void 0 : s.kind) === "batch" ? n.transaction.index - r.transaction.index : 0;
    } });
  }
  async request(e) {
    try {
      return await this.dataloader.request(e);
    } catch (t) {
      let { clientMethod: n, callsite: r, transaction: i, args: s, modelName: a } = e;
      this.handleAndLogRequestError({ error: t, clientMethod: n, callsite: r, transaction: i, args: s, modelName: a, globalOmit: e.globalOmit });
    }
  }
  mapQueryEngineResult({ dataPath: e, unpacker: t }, n) {
    let r = n == null ? void 0 : n.data, i = this.unpack(r, e, t);
    return R.env.PRISMA_CLIENT_GET_TIME ? { data: i } : i;
  }
  handleAndLogRequestError(e) {
    try {
      this.handleRequestError(e);
    } catch (t) {
      throw this.logEmitter && this.logEmitter.emit("error", { message: t.message, target: e.clientMethod, timestamp: /* @__PURE__ */ new Date() }), t;
    }
  }
  handleRequestError({ error: e, clientMethod: t, callsite: n, transaction: r, args: i, modelName: s, globalOmit: a }) {
    if (Iy(e), Ty(e, r)) throw e;
    if (e instanceof ht && Ny(e)) {
      let l = fu(e.meta);
      Al({ args: i, errors: [l], callsite: n, errorFormat: this.client._errorFormat, originalMethod: t, clientVersion: this.client._clientVersion, globalOmit: a });
    }
    let o = e.message;
    if (n && (o = rl({ callsite: n, originalMethod: t, isPanic: e.isPanic, showColors: this.client._errorFormat === "pretty", message: o })), o = this.sanitizeMessage(o), e.code) {
      let l = s ? { modelName: s, ...e.meta } : e.meta;
      throw new ht(o, { code: e.code, clientVersion: this.client._clientVersion, meta: l, batchRequestIdx: e.batchRequestIdx });
    } else {
      if (e.isPanic) throw new ct(o, this.client._clientVersion);
      if (e instanceof we) throw new we(o, { clientVersion: this.client._clientVersion, batchRequestIdx: e.batchRequestIdx });
      if (e instanceof ee) throw new ee(o, this.client._clientVersion);
      if (e instanceof ct) throw new ct(o, this.client._clientVersion);
    }
    throw e.clientVersion = this.client._clientVersion, e;
  }
  sanitizeMessage(e) {
    return this.client._errorFormat && this.client._errorFormat !== "pretty" ? Fr(e) : e;
  }
  unpack(e, t, n) {
    if (!e || (e.data && (e = e.data), !e)) return e;
    let r = Object.keys(e)[0], i = Object.values(e)[0], s = t.filter((l) => l !== "select" && l !== "include"), a = xl(i, s), o = r === "queryRaw" ? Oy(a) : Qr(a);
    return n ? n(o) : o;
  }
  get [Symbol.toStringTag]() {
    return "RequestHandler";
  }
};
function $y(e) {
  if (e) {
    if (e.kind === "batch") return { kind: "batch", options: { isolationLevel: e.isolationLevel } };
    if (e.kind === "itx") return { kind: "itx", options: du(e) };
    Si(e, "Unknown transaction kind");
  }
}
function du(e) {
  return { id: e.id, payload: e.payload };
}
function Ty(e, t) {
  return cu(e) && (t == null ? void 0 : t.kind) === "batch" && e.batchRequestIdx !== t.index;
}
function Ny(e) {
  return e.code === "P2009" || e.code === "P2012";
}
function fu(e) {
  if (e.kind === "Union") return { kind: "Union", errors: e.errors.map(fu) };
  if (Array.isArray(e.selectionPath)) {
    let [, ...t] = e.selectionPath;
    return { ...e, selectionPath: t };
  }
  return e;
}
var ky = Ag, Dy = ve(_o()), J = class extends Error {
  constructor(e) {
    super(e + `
Read more at https://pris.ly/d/client-constructor`), this.name = "PrismaClientConstructorValidationError";
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientConstructorValidationError";
  }
};
Y(J, "PrismaClientConstructorValidationError");
var Hs = ["datasources", "datasourceUrl", "errorFormat", "adapter", "log", "transactionOptions", "omit", "__internal"], Ks = ["pretty", "colorless", "minimal"], Qs = ["info", "query", "warn", "error"], xy = { datasources: (e, { datasourceNames: t }) => {
  if (e) {
    if (typeof e != "object" || Array.isArray(e)) throw new J(`Invalid value ${JSON.stringify(e)} for "datasources" provided to PrismaClient constructor`);
    for (let [n, r] of Object.entries(e)) {
      if (!t.includes(n)) {
        let i = Et(n, t) || ` Available datasources: ${t.join(", ")}`;
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
  if (!e && Cr(t.generator) === "client") throw new J('Using engine type "client" requires a driver adapter to be provided to PrismaClient constructor.');
  if (e !== null) {
    if (e === void 0) throw new J('"adapter" property must not be undefined, use null to conditionally disable driver adapters.');
    if (Cr(t.generator) === "binary") throw new J('Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.');
  }
}, datasourceUrl: (e) => {
  if (typeof e < "u" && typeof e != "string") throw new J(`Invalid value ${JSON.stringify(e)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`);
}, errorFormat: (e) => {
  if (e) {
    if (typeof e != "string") throw new J(`Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`);
    if (!Ks.includes(e)) {
      let t = Et(e, Ks);
      throw new J(`Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`);
    }
  }
}, log: (e) => {
  if (!e) return;
  if (!Array.isArray(e)) throw new J(`Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`);
  function t(n) {
    if (typeof n == "string" && !Qs.includes(n)) {
      let r = Et(n, Qs);
      throw new J(`Invalid log level "${n}" provided to PrismaClient constructor.${r}`);
    }
  }
  for (let n of e) {
    t(n);
    let r = { level: t, emit: (i) => {
      let s = ["stdout", "event"];
      if (!s.includes(i)) {
        let a = Et(i, s);
        throw new J(`Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${a}`);
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
    let s = Uy(r, t.runtimeDataModel);
    if (!s) {
      n.push({ kind: "UnknownModel", modelKey: r });
      continue;
    }
    for (let [a, o] of Object.entries(i)) {
      let l = s.fields.find((u) => u.name === a);
      if (!l) {
        n.push({ kind: "UnknownField", modelKey: r, fieldName: a });
        continue;
      }
      if (l.relationName) {
        n.push({ kind: "RelationInOmit", modelKey: r, fieldName: a });
        continue;
      }
      typeof o != "boolean" && n.push({ kind: "InvalidFieldValue", modelKey: r, fieldName: a });
    }
  }
  if (n.length > 0) throw new J(Fy(e, n));
}, __internal: (e) => {
  if (!e) return;
  let t = ["debug", "engine", "configOverride"];
  if (typeof e != "object") throw new J(`Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`);
  for (let [n] of Object.entries(e)) if (!t.includes(n)) {
    let r = Et(n, t);
    throw new J(`Invalid property ${JSON.stringify(n)} for "__internal" provided to PrismaClient constructor.${r}`);
  }
} };
function Ly(e, t) {
  for (let [n, r] of Object.entries(e)) {
    if (!Hs.includes(n)) {
      let i = Et(n, Hs);
      throw new J(`Unknown property ${n} provided to PrismaClient constructor.${i}`);
    }
    xy[n](r, t);
  }
  if (e.datasourceUrl && e.datasources) throw new J('Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them');
}
function Et(e, t) {
  if (t.length === 0 || typeof e != "string") return "";
  let n = Cy(e, t);
  return n ? ` Did you mean "${n}"?` : "";
}
function Cy(e, t) {
  if (t.length === 0) return null;
  let n = t.map((i) => ({ value: i, distance: (0, Dy.default)(e, i) }));
  n.sort((i, s) => i.distance < s.distance ? -1 : 1);
  let r = n[0];
  return r.distance < 3 ? r.value : null;
}
function Uy(e, t) {
  return Ys(t.models, e) ?? Ys(t.types, e);
}
function Ys(e, t) {
  let n = Object.keys(e).find((r) => Xn(r) === t);
  if (n) return e[n];
}
function Fy(e, t) {
  var s, a, o, l;
  let n = Ci(e);
  for (let u of t) switch (u.kind) {
    case "UnknownModel":
      (s = n.arguments.getField(u.modelKey)) == null || s.markAsError(), n.addErrorMessage(() => `Unknown model name: ${u.modelKey}.`);
      break;
    case "UnknownField":
      (a = n.arguments.getDeepField([u.modelKey, u.fieldName])) == null || a.markAsError(), n.addErrorMessage(() => `Model "${u.modelKey}" does not have a field named "${u.fieldName}".`);
      break;
    case "RelationInOmit":
      (o = n.arguments.getDeepField([u.modelKey, u.fieldName])) == null || o.markAsError(), n.addErrorMessage(() => 'Relations are already excluded by default and can not be specified in "omit".');
      break;
    case "InvalidFieldValue":
      (l = n.arguments.getDeepFieldValue([u.modelKey, u.fieldName])) == null || l.markAsError(), n.addErrorMessage(() => "Omit field option value must be a boolean.");
      break;
  }
  let { message: r, args: i } = El(n, "colorless");
  return `Error validating "omit" option:

${i}

${r}`;
}
function jy(e) {
  return e.length === 0 ? Promise.resolve([]) : new Promise((t, n) => {
    let r = new Array(e.length), i = null, s = !1, a = 0, o = () => {
      s || (a++, a === e.length && (s = !0, i ? n(i) : t(r)));
    }, l = (u) => {
      s || (s = !0, n(u));
    };
    for (let u = 0; u < e.length; u++) e[u].then((c) => {
      r[u] = c, o();
    }, (c) => {
      if (!cu(c)) {
        l(c);
        return;
      }
      c.batchRequestIdx === u ? l(c) : (i || (i = c), o());
    });
  });
}
var Ze = pe("prisma:client");
typeof globalThis == "object" && (globalThis.NODE_CLIENT = !0);
var qy = { requestArgsToMiddlewareArgs: (e) => e, middlewareArgsToRequestArgs: (e) => e }, My = Symbol.for("prisma.client.transaction.id"), Vy = { id: 0, nextId() {
  return ++this.id;
} };
function zy(e) {
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
      g(this, "_createPrismaPromise", Gs());
      g(this, "$metrics", new Yh(this));
      g(this, "$extends", Bm);
      var l, u, c, d, f, p;
      e = ((u = (l = r == null ? void 0 : r.__internal) == null ? void 0 : l.configOverride) == null ? void 0 : u.call(l, e)) ?? e, rg(e), r && Ly(r, e);
      let i = new bc().on("error", () => {
      });
      this._extensions = Pl.empty(), this._previewFeatures = uy(e), this._clientVersion = e.clientVersion ?? ky, this._activeProvider = e.activeProvider, this._globalOmit = r == null ? void 0 : r.omit, this._tracingHelper = by();
      let s = e.relativeEnvPaths && { rootEnvPath: e.relativeEnvPaths.rootEnvPath && P.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath), schemaEnvPath: e.relativeEnvPaths.schemaEnvPath && P.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath) }, a;
      if (r != null && r.adapter) {
        a = r.adapter;
        let h = e.activeProvider === "postgresql" || e.activeProvider === "cockroachdb" ? "postgres" : e.activeProvider;
        if (a.provider !== h) throw new ee(`The Driver Adapter \`${a.adapterName}\`, based on \`${a.provider}\`, is not compatible with the provider \`${h}\` specified in the Prisma schema.`, this._clientVersion);
        if (r.datasources || r.datasourceUrl !== void 0) throw new ee("Custom datasource configuration is not compatible with Prisma Driver Adapters. Please define the database connection string directly in the Driver Adapter configuration.", this._clientVersion);
      }
      let o = !a && s && Cf(s, { conflictCheck: "none" }) || ((c = e.injectableEdgeEnv) == null ? void 0 : c.call(e));
      try {
        let h = r ?? {}, m = h.__internal ?? {}, v = m.debug === !0;
        v && pe.enable("prisma:client");
        let _ = P.resolve(e.dirname, e.relativePath);
        ft.existsSync(_) || (_ = e.dirname), Ze("dirname", e.dirname), Ze("relativePath", e.relativePath), Ze("cwd", _);
        let A = m.engine || {};
        if (h.errorFormat ? this._errorFormat = h.errorFormat : R.env.NODE_ENV === "production" ? this._errorFormat = "minimal" : R.env.NO_COLOR ? this._errorFormat = "colorless" : this._errorFormat = "colorless", this._runtimeDataModel = e.runtimeDataModel, this._engineConfig = { cwd: _, dirname: e.dirname, enableDebugLogs: v, allowTriggerPanic: A.allowTriggerPanic, prismaPath: A.binaryPath ?? void 0, engineEndpoint: A.endpoint, generator: e.generator, showColors: this._errorFormat === "pretty", logLevel: h.log && _y(h.log), logQueries: h.log && !!(typeof h.log == "string" ? h.log === "query" : h.log.find((I) => typeof I == "string" ? I === "query" : I.level === "query")), env: (o == null ? void 0 : o.parsed) ?? {}, flags: [], engineWasm: e.engineWasm, compilerWasm: e.compilerWasm, clientVersion: e.clientVersion, engineVersion: e.engineVersion, previewFeatures: this._previewFeatures, activeProvider: e.activeProvider, inlineSchema: e.inlineSchema, overrideDatasources: ig(h, e.datasourceNames), inlineDatasources: e.inlineDatasources, inlineSchemaHash: e.inlineSchemaHash, tracingHelper: this._tracingHelper, transactionOptions: { maxWait: ((d = h.transactionOptions) == null ? void 0 : d.maxWait) ?? 2e3, timeout: ((f = h.transactionOptions) == null ? void 0 : f.timeout) ?? 5e3, isolationLevel: (p = h.transactionOptions) == null ? void 0 : p.isolationLevel }, logEmitter: i, isBundled: e.isBundled, adapter: a }, this._accelerateEngineConfig = { ...this._engineConfig, accelerateUtils: { resolveDatasourceUrl: Vi, getBatchRequestPayload: ji, prismaGraphQLToJSError: qi, PrismaClientUnknownRequestError: we, PrismaClientInitializationError: ee, PrismaClientKnownRequestError: ht, debug: pe("prisma:client:accelerateEngine"), engineVersion: em.version, clientVersion: e.clientVersion } }, Ze("clientVersion", e.clientVersion), this._engine = ly(e, this._engineConfig), this._requestHandler = new Ry(this, i), h.log) for (let I of h.log) {
          let T = typeof I == "string" ? I : I.emit === "stdout" ? I.level : null;
          T && this.$on(T, (X) => {
            Ur.log(`${Ur.tags[T] ?? ""}`, X.message || X.query);
          });
        }
      } catch (h) {
        throw h.clientVersion = this._clientVersion, h;
      }
      return this._appliedParent = Kr(this);
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
        od();
      }
    }
    $executeRawInternal(r, i, s, a) {
      let o = this._activeProvider;
      return this._request({ action: "executeRaw", args: s, transaction: r, clientMethod: i, argsMapper: Bs({ clientMethod: i, activeProvider: o }), callsite: Ht(this._errorFormat), dataPath: [], middlewareArgsMapper: a });
    }
    $executeRaw(r, ...i) {
      return this._createPrismaPromise((s) => {
        if (r.raw !== void 0 || r.sql !== void 0) {
          let [a, o] = Xs(r, i);
          return Zs(this._activeProvider, a.text, a.values, Array.isArray(r) ? "prisma.$executeRaw`<SQL>`" : "prisma.$executeRaw(sql`<SQL>`)"), this.$executeRawInternal(s, "$executeRaw", a, o);
        }
        throw new Qe("`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n", { clientVersion: this._clientVersion });
      });
    }
    $executeRawUnsafe(r, ...i) {
      return this._createPrismaPromise((s) => (Zs(this._activeProvider, r, i, "prisma.$executeRawUnsafe(<SQL>, [...values])"), this.$executeRawInternal(s, "$executeRawUnsafe", [r, ...i])));
    }
    $runCommandRaw(r) {
      if (e.activeProvider !== "mongodb") throw new Qe(`The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`, { clientVersion: this._clientVersion });
      return this._createPrismaPromise((i) => this._request({ args: r, clientMethod: "$runCommandRaw", dataPath: [], action: "runCommandRaw", argsMapper: cy, callsite: Ht(this._errorFormat), transaction: i }));
    }
    async $queryRawInternal(r, i, s, a) {
      let o = this._activeProvider;
      return this._request({ action: "queryRaw", args: s, transaction: r, clientMethod: i, argsMapper: Bs({ clientMethod: i, activeProvider: o }), callsite: Ht(this._errorFormat), dataPath: [], middlewareArgsMapper: a });
    }
    $queryRaw(r, ...i) {
      return this._createPrismaPromise((s) => {
        if (r.raw !== void 0 || r.sql !== void 0) return this.$queryRawInternal(s, "$queryRaw", ...Xs(r, i));
        throw new Qe("`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n", { clientVersion: this._clientVersion });
      });
    }
    $queryRawTyped(r) {
      return this._createPrismaPromise((i) => {
        if (!this._hasPreviewFlag("typedSql")) throw new Qe("`typedSql` preview feature must be enabled in order to access $queryRawTyped API", { clientVersion: this._clientVersion });
        return this.$queryRawInternal(i, "$queryRawTyped", r);
      });
    }
    $queryRawUnsafe(r, ...i) {
      return this._createPrismaPromise((s) => this.$queryRawInternal(s, "$queryRawUnsafe", [r, ...i]));
    }
    _transactionWithArray({ promises: r, options: i }) {
      let s = Vy.nextId(), a = vy(r.length), o = r.map((l, u) => {
        var f;
        if ((l == null ? void 0 : l[Symbol.toStringTag]) !== "PrismaPromise") throw new Error("All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.");
        let c = (i == null ? void 0 : i.isolationLevel) ?? this._engineConfig.transactionOptions.isolationLevel, d = { kind: "batch", id: s, index: u, isolationLevel: c, lock: a };
        return ((f = l.requestTransaction) == null ? void 0 : f.call(l, d)) ?? l;
      });
      return jy(o);
    }
    async _transactionWithCallback({ callback: r, options: i }) {
      let s = { traceparent: this._tracingHelper.getTraceParent() }, a = { maxWait: (i == null ? void 0 : i.maxWait) ?? this._engineConfig.transactionOptions.maxWait, timeout: (i == null ? void 0 : i.timeout) ?? this._engineConfig.transactionOptions.timeout, isolationLevel: (i == null ? void 0 : i.isolationLevel) ?? this._engineConfig.transactionOptions.isolationLevel }, o = await this._engine.transaction("start", s, a), l;
      try {
        let u = { kind: "itx", ...o };
        l = await r(this._createItxClient(u)), await this._engine.transaction("commit", s, o);
      } catch (u) {
        throw await this._engine.transaction("rollback", s, o).catch(() => {
        }), u;
      }
      return l;
    }
    _createItxClient(r) {
      return $t(Kr($t(Zm(this), [ke("_appliedParent", () => this._appliedParent._createItxClient(r)), ke("_createPrismaPromise", () => Gs(r)), ke(My, () => r.id)])), [Wr(Qm)]);
    }
    $transaction(r, i) {
      var o;
      let s;
      typeof r == "function" ? ((o = this._engineConfig.adapter) == null ? void 0 : o.adapterName) === "@prisma/adapter-d1" ? s = () => {
        throw new Error("Cloudflare D1 does not support interactive transactions. We recommend you to refactor your queries with that limitation in mind, and use batch transactions with `prisma.$transactions([])` where applicable.");
      } : s = () => this._transactionWithCallback({ callback: r, options: i }) : s = () => this._transactionWithArray({ promises: r, options: i });
      let a = { name: "transaction", attributes: { method: "$transaction" } };
      return this._tracingHelper.runInChildSpan(a, s);
    }
    _request(r) {
      r.otelParentCtx = this._tracingHelper.getActiveContext();
      let i = r.middlewareArgsMapper ?? qy, s = { args: i.requestArgsToMiddlewareArgs(r.args), dataPath: r.dataPath, runInTransaction: !!r.transaction, action: r.action, model: r.model }, a = { operation: { name: "operation", attributes: { method: s.action, model: s.model, name: s.model ? `${s.model}.${s.action}` : s.action } } }, o = async (l) => {
        let { runInTransaction: u, args: c, ...d } = l, f = { ...r, ...d };
        c && (f.args = i.middlewareArgsToRequestArgs(c)), r.transaction !== void 0 && u === !1 && delete f.transaction;
        let p = await tg(this, f);
        return f.model ? Hm({ result: p, modelName: f.model, args: f.args, extensions: this._extensions, runtimeDataModel: this._runtimeDataModel, globalOmit: this._globalOmit }) : p;
      };
      return this._tracingHelper.runInChildSpan(a.operation, () => new wc("prisma-client-request").runInAsyncScope(() => o(s)));
    }
    async _executeRequest({ args: r, clientMethod: i, dataPath: s, callsite: a, action: o, model: l, argsMapper: u, transaction: c, unpacker: d, otelParentCtx: f, customDataProxyFetch: p }) {
      try {
        r = u ? u(r) : r;
        let h = { name: "serialize" }, m = this._tracingHelper.runInChildSpan(h, () => Vh({ modelName: l, runtimeDataModel: this._runtimeDataModel, action: o, args: r, clientMethod: i, callsite: a, extensions: this._extensions, errorFormat: this._errorFormat, clientVersion: this._clientVersion, previewFeatures: this._previewFeatures, globalOmit: this._globalOmit }));
        return pe.enabled("prisma:client") && (Ze("Prisma Client call:"), Ze(`prisma.${i}(${rm(r)})`), Ze("Generated request:"), Ze(JSON.stringify(m, null, 2) + `
`)), (c == null ? void 0 : c.kind) === "batch" && await c.lock, this._requestHandler.request({ protocolQuery: m, modelName: l, action: o, clientMethod: i, dataPath: s, callsite: a, args: r, extensions: this._extensions, transaction: c, unpacker: d, otelParentCtx: f, otelChildCtx: this._tracingHelper.getActiveContext(), globalOmit: this._globalOmit, customDataProxyFetch: p });
      } catch (h) {
        throw h.clientVersion = this._clientVersion, h;
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
function Xs(e, t) {
  return Zy(e) ? [new yn(e, t), hy] : [e, my];
}
function Zy(e) {
  return Array.isArray(e) && Array.isArray(e.raw);
}
var By = /* @__PURE__ */ new Set(["toJSON", "$$typeof", "asymmetricMatch", Symbol.iterator, Symbol.toStringTag, Symbol.isConcatSpreadable, Symbol.toPrimitive]);
function Gy(e) {
  return new Proxy(e, { get(t, n) {
    if (n in t) return t[n];
    if (!By.has(n)) throw new TypeError(`Invalid enum value: ${String(n)}`);
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
const ln = {
  generator: {
    name: "client",
    provider: {
      fromEnvVar: null,
      value: "prisma-client"
    },
    output: {
      value: "/home/marcosv/lib-app/electron/generated/prisma",
      fromEnvVar: null
    },
    config: {
      engineType: "library"
    },
    binaryTargets: [
      {
        fromEnvVar: null,
        value: "debian-openssl-3.0.x",
        native: !0
      },
      {
        fromEnvVar: null,
        value: "debian-openssl-1.1.x"
      },
      {
        fromEnvVar: null,
        value: "debian-openssl-3.0.x"
      },
      {
        fromEnvVar: null,
        value: "windows"
      }
    ],
    previewFeatures: [],
    sourceFilePath: "/home/marcosv/lib-app/prisma/schema.prisma",
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
  // Keep native for development/build-host use and include Linux Mint and Windows engines.
  binaryTargets = ["native", "debian-openssl-1.1.x", "debian-openssl-3.0.x", "windows"]
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model Person {
  id        String   @id @default(uuid())
  cpf       String   @unique
  name      String
  email     String   @unique
  createdAt DateTime @default(now()) @map("created_at")
  updatedAt DateTime @updatedAt @map("updated_at")

  librarian Librarian?
  student   Student?
  professor Professor?

  registrationLogs RegistrationLog[]

  @@map("people")
}

model Librarian {
  id                  String    @id @default(uuid())
  personId            String    @unique @map("person_id")
  accessCode          String    @unique @map("access_code")
  passwordHash        String    @map("password_hash")
  isActive            Boolean   @default(true) @map("is_active")
  mustChangePassword  Boolean   @default(true) @map("must_change_password")
  failedLoginAttempts Int       @default(0) @map("failed_login_attempts")
  lastFailedLoginAt   DateTime? @map("last_failed_login_at")
  lockedUntil         DateTime? @map("locked_until")
  createdAt           DateTime  @default(now()) @map("created_at")
  updatedAt           DateTime  @updatedAt @map("updated_at")

  person                  Person                  @relation(fields: [personId], references: [id], onDelete: Restrict)
  accessLogs              AccessLog[]
  registrationsMade       RegistrationLog[]       @relation("RegistrationCreatedBy")
  authorRegistrationsMade RegistrationAuthorLog[] @relation("AuthorRegistrationCreatedBy")

  @@map("librarians")
}

model Student {
  id                 String   @id @default(uuid())
  personId           String   @unique @map("person_id")
  registrationNumber String   @unique @map("registration_number")
  course             String
  isActive           Boolean  @default(true) @map("is_active")
  createdAt          DateTime @default(now()) @map("created_at")
  updatedAt          DateTime @updatedAt @map("updated_at")

  person Person @relation(fields: [personId], references: [id], onDelete: Restrict)

  @@map("students")
}

model Professor {
  id                 String   @id @default(uuid())
  personId           String   @unique @map("person_id")
  department         String
  registrationNumber String   @unique @map("registration_number")
  isActive           Boolean  @default(true) @map("is_active")
  createdAt          DateTime @default(now()) @map("created_at")
  updatedAt          DateTime @updatedAt @map("updated_at")

  person Person @relation(fields: [personId], references: [id], onDelete: Restrict)

  @@map("professors")
}

model AccessLog {
  id                  String   @id @default(uuid())
  librarianId         String?  @map("librarian_id")
  attemptedAccessCode String   @map("attempted_access_code")
  success             Boolean
  failureReason       String?  @map("failure_reason")
  createdAt           DateTime @default(now()) @map("created_at")

  librarian Librarian? @relation(fields: [librarianId], references: [id], onDelete: SetNull)

  @@map("access_logs")
}

model RegistrationLog {
  id                   String   @id @default(uuid())
  personId             String   @map("person_id")
  createdByLibrarianId String?  @map("created_by_librarian_id")
  createdAt            DateTime @default(now()) @map("created_at")

  person             Person     @relation(fields: [personId], references: [id], onDelete: Restrict)
  createdByLibrarian Librarian? @relation("RegistrationCreatedBy", fields: [createdByLibrarianId], references: [id], onDelete: Restrict)

  @@index([personId])
  @@index([createdByLibrarianId, createdAt])
  @@map("registration_logs")
}

model Author {
  id          String    @id @default(uuid())
  name        String
  nationality String
  pseudonym   String?
  dateOfBirth DateTime? @map("date_of_birth")
  dateOfDeath DateTime? @map("date_of_death")
  biography   String?
  isActive    Boolean   @default(true) @map("is_active")

  createdAt DateTime @default(now()) @map("created_at")
  updatedAt DateTime @updatedAt @map("updated_at")

  registrationLogs RegistrationAuthorLog[]

  @@map("authors")
}

model RegistrationAuthorLog {
  id                   String   @id @default(uuid())
  authorId             String   @map("author_id")
  createdByLibrarianId String   @map("created_by_librarian_id")
  createdAt            DateTime @default(now()) @map("created_at")

  author             Author    @relation(fields: [authorId], references: [id], onDelete: Restrict)
  createdByLibrarian Librarian @relation("AuthorRegistrationCreatedBy", fields: [createdByLibrarianId], references: [id], onDelete: Restrict)

  @@index([authorId])
  @@index([createdByLibrarianId, createdAt])
  @@map("registration_author_logs")
}
`,
  inlineSchemaHash: "382c6c8247d7f9175ae3c5857daee0bd219bd5b25b2e6bcca8844f36ba5fc4d5",
  copyEngine: !0,
  runtimeDataModel: {
    models: {},
    enums: {},
    types: {}
  },
  dirname: ""
};
ln.runtimeDataModel = JSON.parse('{"models":{"Person":{"dbName":"people","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":null,"default":{"name":"uuid","args":[4]},"isGenerated":false,"isUpdatedAt":false},{"name":"cpf","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","dbName":"updated_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":true},{"name":"librarian","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Librarian","nativeType":null,"relationName":"LibrarianToPerson","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"student","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Student","nativeType":null,"relationName":"PersonToStudent","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"professor","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Professor","nativeType":null,"relationName":"PersonToProfessor","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"registrationLogs","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"RegistrationLog","nativeType":null,"relationName":"PersonToRegistrationLog","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Librarian":{"dbName":"librarians","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":null,"default":{"name":"uuid","args":[4]},"isGenerated":false,"isUpdatedAt":false},{"name":"personId","dbName":"person_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"accessCode","dbName":"access_code","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"passwordHash","dbName":"password_hash","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"isActive","dbName":"is_active","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","nativeType":null,"default":true,"isGenerated":false,"isUpdatedAt":false},{"name":"mustChangePassword","dbName":"must_change_password","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","nativeType":null,"default":true,"isGenerated":false,"isUpdatedAt":false},{"name":"failedLoginAttempts","dbName":"failed_login_attempts","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","nativeType":null,"default":0,"isGenerated":false,"isUpdatedAt":false},{"name":"lastFailedLoginAt","dbName":"last_failed_login_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"lockedUntil","dbName":"locked_until","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","dbName":"updated_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":true},{"name":"person","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Person","nativeType":null,"relationName":"LibrarianToPerson","relationFromFields":["personId"],"relationToFields":["id"],"relationOnDelete":"Restrict","isGenerated":false,"isUpdatedAt":false},{"name":"accessLogs","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"AccessLog","nativeType":null,"relationName":"AccessLogToLibrarian","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"registrationsMade","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"RegistrationLog","nativeType":null,"relationName":"RegistrationCreatedBy","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"authorRegistrationsMade","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"RegistrationAuthorLog","nativeType":null,"relationName":"AuthorRegistrationCreatedBy","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Student":{"dbName":"students","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":null,"default":{"name":"uuid","args":[4]},"isGenerated":false,"isUpdatedAt":false},{"name":"personId","dbName":"person_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"registrationNumber","dbName":"registration_number","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"course","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"isActive","dbName":"is_active","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","nativeType":null,"default":true,"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","dbName":"updated_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":true},{"name":"person","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Person","nativeType":null,"relationName":"PersonToStudent","relationFromFields":["personId"],"relationToFields":["id"],"relationOnDelete":"Restrict","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Professor":{"dbName":"professors","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":null,"default":{"name":"uuid","args":[4]},"isGenerated":false,"isUpdatedAt":false},{"name":"personId","dbName":"person_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"department","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"registrationNumber","dbName":"registration_number","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"isActive","dbName":"is_active","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","nativeType":null,"default":true,"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","dbName":"updated_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":true},{"name":"person","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Person","nativeType":null,"relationName":"PersonToProfessor","relationFromFields":["personId"],"relationToFields":["id"],"relationOnDelete":"Restrict","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"AccessLog":{"dbName":"access_logs","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":null,"default":{"name":"uuid","args":[4]},"isGenerated":false,"isUpdatedAt":false},{"name":"librarianId","dbName":"librarian_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"attemptedAccessCode","dbName":"attempted_access_code","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"success","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Boolean","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"failureReason","dbName":"failure_reason","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"librarian","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Librarian","nativeType":null,"relationName":"AccessLogToLibrarian","relationFromFields":["librarianId"],"relationToFields":["id"],"relationOnDelete":"SetNull","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"RegistrationLog":{"dbName":"registration_logs","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":null,"default":{"name":"uuid","args":[4]},"isGenerated":false,"isUpdatedAt":false},{"name":"personId","dbName":"person_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"createdByLibrarianId","dbName":"created_by_librarian_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"person","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Person","nativeType":null,"relationName":"PersonToRegistrationLog","relationFromFields":["personId"],"relationToFields":["id"],"relationOnDelete":"Restrict","isGenerated":false,"isUpdatedAt":false},{"name":"createdByLibrarian","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Librarian","nativeType":null,"relationName":"RegistrationCreatedBy","relationFromFields":["createdByLibrarianId"],"relationToFields":["id"],"relationOnDelete":"Restrict","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Author":{"dbName":"authors","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":null,"default":{"name":"uuid","args":[4]},"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"nationality","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"pseudonym","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"dateOfBirth","dbName":"date_of_birth","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"dateOfDeath","dbName":"date_of_death","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"biography","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"isActive","dbName":"is_active","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","nativeType":null,"default":true,"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","dbName":"updated_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":true},{"name":"registrationLogs","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"RegistrationAuthorLog","nativeType":null,"relationName":"AuthorToRegistrationAuthorLog","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"RegistrationAuthorLog":{"dbName":"registration_author_logs","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":null,"default":{"name":"uuid","args":[4]},"isGenerated":false,"isUpdatedAt":false},{"name":"authorId","dbName":"author_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"createdByLibrarianId","dbName":"created_by_librarian_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"author","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Author","nativeType":null,"relationName":"AuthorToRegistrationAuthorLog","relationFromFields":["authorId"],"relationToFields":["id"],"relationOnDelete":"Restrict","isGenerated":false,"isUpdatedAt":false},{"name":"createdByLibrarian","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Librarian","nativeType":null,"relationName":"AuthorRegistrationCreatedBy","relationFromFields":["createdByLibrarianId"],"relationToFields":["id"],"relationOnDelete":"Restrict","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{},"types":{}}');
ln.engineWasm = void 0;
ln.compilerWasm = void 0;
function Wy(e) {
  return ln.dirname = e, zy(ln);
}
bi.getExtensionContext;
Gy({
  Serializable: "Serializable"
});
bi.defineExtension;
globalThis.__dirname = nt.dirname(mo(import.meta.url));
const Jy = Wy(__dirname);
nt.join(__dirname, "libquery_engine-debian-openssl-3.0.x.so.node");
nt.join(R.cwd(), "electron/generated/prisma/libquery_engine-debian-openssl-3.0.x.so.node");
nt.join(__dirname, "libquery_engine-debian-openssl-1.1.x.so.node");
nt.join(R.cwd(), "electron/generated/prisma/libquery_engine-debian-openssl-1.1.x.so.node");
nt.join(__dirname, "query_engine-windows.dll.node");
nt.join(R.cwd(), "electron/generated/prisma/query_engine-windows.dll.node");
let U;
async function Hy(e) {
  U = new Jy({ datasourceUrl: e }), await U.$connect();
}
async function Ky(e) {
  await U.$executeRawUnsafe(`
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
  const t = (await dc(e, { withFileTypes: !0 })).filter((n) => n.isDirectory()).map((n) => n.name).sort();
  for (const n of t) {
    const r = await fc(
      P.join(e, n, "migration.sql"),
      "utf8"
    ).catch((l) => {
      if (l && typeof l == "object" && "code" in l && l.code === "ENOENT")
        return null;
      throw l;
    });
    if (r === null) continue;
    const i = uc("sha256").update(r).digest("hex"), s = await U.$queryRaw`
      SELECT "checksum" FROM "_prisma_migrations"
      WHERE "migration_name" = ${n} AND "finished_at" IS NOT NULL
    `;
    if (s.length > 0) {
      const l = n === "20261018151416_add_cpf_and_professor_department" && s[0].checksum === "d66836df46923ff4b5799cd260947de8d7c2b0afb8f65684f8b3ac9d087255a3";
      if (s[0].checksum !== i && !l)
        throw new Error(`MIGRATION_CHECKSUM_MISMATCH:${n}`);
      continue;
    }
    const a = r.replace(/^\s*--.*$/gm, "").split(";").map((l) => l.trim()).filter(
      (l) => l.length > 0 && (!/^PRAGMA\b/i.test(l) || /^PRAGMA\s+defer_foreign_keys\s*=\s*ON$/i.test(l))
    );
    await U.$executeRawUnsafe("PRAGMA foreign_keys = OFF");
    try {
      await U.$transaction(async (l) => {
        for (const u of a)
          await l.$executeRawUnsafe(u);
        await l.$executeRaw`
          INSERT INTO "_prisma_migrations"
            ("id", "checksum", "finished_at", "migration_name", "started_at", "applied_steps_count")
          VALUES
            (${cc()}, ${i}, CURRENT_TIMESTAMP, ${n}, CURRENT_TIMESTAMP, ${a.length})
        `;
      });
    } finally {
      await U.$executeRawUnsafe("PRAGMA foreign_keys = ON");
    }
    if ((await U.$queryRaw`PRAGMA foreign_key_check`).length > 0)
      throw new Error(`MIGRATION_FOREIGN_KEY_CHECK_FAILED:${n}`);
  }
}
function ti(e) {
  const t = Object.values(e).filter((r) => typeof r == "number");
  return Object.entries(e).filter(([r, i]) => t.indexOf(+r) === -1).map(([r, i]) => i);
}
function ea(e, t = "|") {
  return e.map((n) => wu(n)).join(t);
}
function ni(e, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
class Qy {
  constructor(t) {
    this._getter = t, this._value = void 0;
  }
  get value() {
    const t = this._getter;
    return t !== void 0 && (this._value = t(), this._getter = void 0), this._value;
  }
}
function Bi(e) {
  return new Qy(e);
}
function Yy(e) {
  return e == null;
}
function Gi(e) {
  const t = e.startsWith("^") ? 1 : 0, n = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, n);
}
function wt(e, t, n) {
  Object.defineProperty(e, t, {
    value: n,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function pu(e) {
  const t = Object.getOwnPropertyDescriptor(e, "shape");
  return t != null && t.get ? t.get.raw : t == null ? void 0 : t.value;
}
function Ve(e) {
  return pu(e._zod.def) ?? e._zod.def.shape;
}
function hu(e, t, n) {
  Object.defineProperty(e, t, {
    get() {
      const r = n();
      return wt(this, t, r), r;
    },
    enumerable: !0,
    configurable: !0
  });
}
function mu(e, t, n) {
  t in e ? wt(e, t, n) : e[t] = n;
}
function gt(e, t, n, r) {
  const i = Ve(t);
  for (const s of n) {
    const a = Object.getOwnPropertyDescriptor(i, s);
    a.enumerable && (a.get ? hu(e, s, () => {
      const o = t._zod.def.shape[s];
      return r ? r(o, s) : o;
    }) : mu(e, s, r ? r(a.value, s) : a.value));
  }
}
function Xy(e, t) {
  for (const n of Reflect.ownKeys(t)) {
    const r = Object.getOwnPropertyDescriptor(t, n);
    r.enumerable && (r.get ? hu(e, n, () => t[n]) : mu(e, n, r.value));
  }
}
function me(...e) {
  const t = {};
  for (const n of e) {
    const r = Object.getOwnPropertyDescriptors(n);
    Object.assign(t, r);
  }
  return Object.defineProperties({}, t);
}
function ew(e) {
  return JSON.stringify(e);
}
function tw(e) {
  return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const gu = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function Bn(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const nw = /* @__PURE__ */ Bi(() => {
  var e;
  if (Le.jitless || typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) != null && e.includes("Cloudflare")))
    return !1;
  try {
    const t = Function;
    return new t(""), !0;
  } catch {
    return !1;
  }
});
function un(e) {
  if (Bn(e) === !1)
    return !1;
  const t = e.constructor;
  if (t === void 0 || typeof t != "function")
    return !0;
  const n = t.prototype;
  return !(Bn(n) === !1 || Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") === !1);
}
function yu(e) {
  return un(e) ? { ...e } : Array.isArray(e) ? [...e] : e instanceof Map ? new Map(e) : e instanceof Set ? new Set(e) : e;
}
const rw = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function ur(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function it(e, t, n) {
  const r = new e._zod.constr(t ?? e._zod.def);
  return (!t || n != null && n.parent) && (r._zod.parent = e), r;
}
function D(e) {
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
function wu(e) {
  return typeof e == "bigint" ? e.toString() + "n" : typeof e == "string" ? `"${e}"` : `${e}`;
}
function iw(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin !== void 0 && e[t]._zod.optout === "optional");
}
const sw = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
}, aw = {
  int64: [/* @__PURE__ */ BigInt("-9223372036854775808"), /* @__PURE__ */ BigInt("9223372036854775807")],
  uint64: [/* @__PURE__ */ BigInt(0), /* @__PURE__ */ BigInt("18446744073709551615")]
};
function ow(e, t) {
  const n = e._zod.def, r = n.checks;
  if (r && r.length > 0)
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  const s = {};
  return gt(s, e, cr(e, t)), it(e, me(n, { shape: s, checks: [] }));
}
function cr(e, t) {
  var i;
  const n = Ve(e), r = [];
  for (const s of Reflect.ownKeys(t)) {
    if (!((i = Object.getOwnPropertyDescriptor(n, s)) != null && i.enumerable))
      throw new Error(`Unrecognized key: "${String(s)}"`);
    t[s] && r.push(s);
  }
  return r;
}
function lw(e, t) {
  const n = e._zod.def, r = n.checks;
  if (r && r.length > 0)
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  const s = new Set(cr(e, t)), a = {};
  return gt(a, e, Reflect.ownKeys(Ve(e)).filter((o) => !s.has(o))), it(e, me(n, { shape: a, checks: [] }));
}
function uw(e, t) {
  if (!un(t))
    throw new Error("Invalid input to extend: expected a plain object");
  const n = e._zod.def.checks;
  if (n && n.length > 0) {
    const i = Ve(e);
    for (const s of Reflect.ownKeys(t))
      if (Object.getOwnPropertyDescriptor(i, s) !== void 0)
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  return it(e, me(e._zod.def, { shape: bu(e, t) }));
}
function bu(e, t) {
  const n = {};
  return gt(n, e, Reflect.ownKeys(Ve(e))), Xy(n, t), n;
}
function cw(e, t) {
  if (!un(t))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  return it(e, me(e._zod.def, { shape: bu(e, t) }));
}
function dw(e, t) {
  var i, s;
  if (!((i = t == null ? void 0 : t._zod) != null && i.def))
    throw new Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
  if ((s = e._zod.def.checks) != null && s.length)
    throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
  const n = {};
  gt(n, e, Reflect.ownKeys(Ve(e))), gt(n, t, Reflect.ownKeys(Ve(t)));
  const r = me(e._zod.def, {
    shape: n,
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: t._zod.def.checks ?? []
  });
  return it(e, r);
}
function ta(e, t, n, r = "partial") {
  const s = t._zod.def.checks;
  if (s && s.length > 0)
    throw new Error(`.${r}() cannot be used on object schemas containing refinements`);
  const o = n ? new Set(cr(t, n)) : void 0, l = {};
  return gt(l, t, Reflect.ownKeys(Ve(t)), e && ((u, c) => o && !o.has(c) ? u : new e({ type: "optional", innerType: u }))), it(t, me(t._zod.def, { shape: l, checks: [] }));
}
function fw(e, t, n) {
  const r = n ? new Set(cr(t, n)) : void 0, i = {};
  return gt(i, t, Reflect.ownKeys(Ve(t)), (s, a) => (
    // overwrite with non-optional
    r && !r.has(a) ? s : new e({ type: "nonoptional", innerType: s })
  )), it(t, me(t._zod.def, { shape: i }));
}
function qe(e, t = 0) {
  var n;
  if (e.aborted === !0)
    return !0;
  for (let r = t; r < e.issues.length; r++)
    if (((n = e.issues[r]) == null ? void 0 : n.continue) !== !0)
      return !0;
  return !1;
}
function pw(e, t = 0) {
  var n;
  if (e.aborted === !0)
    return !0;
  for (let r = t; r < e.issues.length; r++)
    if (((n = e.issues[r]) == null ? void 0 : n.continue) === !1)
      return !0;
  return !1;
}
function vu(e, t) {
  return t.map((n) => {
    var r;
    return (r = n).path ?? (r.path = []), n.path.unshift(e), n;
  });
}
function qt(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.message;
}
function na(e) {
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
function ri(e, t, n) {
  var r;
  for (let i = t; i < e.length; i++)
    (r = e[i]).schema ?? (r.schema = n);
}
function xt(e, t, n) {
  var l, u, c, d, f, p, h, m, v, _;
  var r;
  const i = (u = (l = e.inst) == null ? void 0 : l._zod) == null ? void 0 : u.traits;
  i != null && i.has("$ZodType") && (i.has("$ZodCheck") ? (r = e).schema ?? (r.schema = e.inst) : e.schema = e.inst);
  const s = e.schema !== e.inst ? (d = (c = e.schema) == null ? void 0 : c._zod.def) == null ? void 0 : d.error : void 0, a = e.message ? e.message : qt((h = (p = (f = e.inst) == null ? void 0 : f._zod.def) == null ? void 0 : p.error) == null ? void 0 : h.call(p, e)) ?? qt(s == null ? void 0 : s(e)) ?? qt((m = t == null ? void 0 : t.error) == null ? void 0 : m.call(t, e)) ?? qt((v = n.customError) == null ? void 0 : v.call(n, e)) ?? qt((_ = n.localeError) == null ? void 0 : _.call(n, e)) ?? "Invalid input", o = {};
  for (const A of Object.keys(e))
    A === "inst" || A === "schema" || A === "continue" || A === "input" || A === "__proto__" || (o[A] = e[A]);
  return o.path ?? (o.path = []), o.message = a, t != null && t.reportInput && (o.input = e.input), o;
}
const hw = /[\uD800-\uDBFF]/;
function Wi(e) {
  const t = e.length;
  if (!hw.test(e))
    return t;
  let n = t;
  for (let r = 0; r < t - 1; r++)
    (e.charCodeAt(r) & 64512) === 55296 && (e.charCodeAt(r + 1) & 64512) === 56320 && (n--, r++);
  return n;
}
function Ji(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function mw(e) {
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
function cn(...e) {
  const [t, n, r] = e;
  return typeof t == "string" ? {
    message: t,
    code: "custom",
    input: n,
    inst: r
  } : { ...t };
}
function gw(e, t) {
  for (const n in t) {
    const r = Object.getOwnPropertyDescriptor(t, n);
    r.get ? Object.defineProperty(e, n, { ...r, enumerable: !1 }) : ww(e, n, r.value);
  }
}
function tt(e, t, n, r = !0) {
  return Object.defineProperty(e, t, { configurable: !0, writable: !0, enumerable: r, value: n }), n;
}
function _u(e, t, n) {
  return tt(e, t, n, !1);
}
function yw(e, t) {
  for (const n in e) {
    const r = e[n];
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !0,
      get() {
        return tt(this, n, r(this));
      },
      set(i) {
        tt(this, n, i);
      }
    });
  }
  return t;
}
function ww(e, t, n) {
  Object.defineProperty(e, t, {
    configurable: !0,
    get() {
      return this == null ? n : tt(this, t, n.bind(this));
    },
    set(r) {
      tt(this, t, r);
    }
  });
}
function bw(e, t) {
  const n = Object.getPrototypeOf(e);
  return t in n ? void 0 : n;
}
let Er, He = !1;
const vw = {
  configurable: !0,
  get() {
    He = !0;
  }
};
function Z(e, t, n) {
  const r = Object.getPrototypeOf(e._zod);
  if (t in r && Er !== e._zod) {
    Er = void 0;
    return;
  }
  Er = e._zod, Object.defineProperty(r, t, {
    configurable: !0,
    get() {
      Object.defineProperty(this, t, vw);
      const i = He;
      He = !1;
      try {
        const s = n(this);
        return He ? delete this[t] : Object.defineProperty(this, t, { configurable: !0, writable: !0, value: s }), He = He || i, s;
      } catch (s) {
        throw delete this[t], He = He || i, s;
      }
    },
    set(i) {
      Object.defineProperty(this, t, { configurable: !0, writable: !0, value: i });
    }
  });
}
function _w(e, t, n, r) {
  const i = bw(e, t);
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
const Ew = "~constantCatch";
function Aw(e) {
  const t = () => e;
  return t[Ew] = !0, t;
}
var ra;
const Ar = { value: void 0, enumerable: !1 };
let ia = "captureStackTrace" in Error ? Error : null;
function Pw(e) {
  const t = ia;
  if (t) {
    const n = t.stackTraceLimit;
    if (typeof n == "number") {
      try {
        t.stackTraceLimit = 0;
      } catch {
        return ia = null, new e();
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
  const a = n, o = a && /* @__PURE__ */ new WeakSet();
  function l(f, p) {
    if (f._zod) {
      if (f._zod.traits.has(e))
        return;
    } else {
      Ar.value = new s(p);
      try {
        Object.defineProperty(f, "_zod", Ar);
      } finally {
        Ar.value = void 0;
      }
    }
    if (f._zod.traits.add(e), t(f, p), o) {
      const m = Object.getPrototypeOf(f), v = f._zod.constr.prototype;
      let _ = m;
      for (; _ && _ !== v; )
        _ = Object.getPrototypeOf(_);
      const A = _ ?? m;
      o.has(A) || (o.add(A), gw(A, a));
    }
    const h = d.prototype;
    for (const m in h)
      Object.prototype.hasOwnProperty.call(h, m) && (m in f || (f[m] = h[m].bind(f)));
  }
  const u = (r == null ? void 0 : r.Parent) ?? Object;
  class c extends u {
  }
  Object.defineProperty(c, "name", { value: e });
  function d(f) {
    var v;
    const p = r != null && r.Parent ? Pw(c) : this;
    l(p, f);
    const h = p._zod.deferred;
    if (h) {
      for (const _ of h)
        _();
      p._zod.deferred = void 0;
    }
    const m = (v = globalThis.__zod_globalConfig) == null ? void 0 : v.postProcessor;
    return m && m(p), p;
  }
  return Object.defineProperty(d, "init", { value: l }), Object.defineProperty(d, Symbol.hasInstance, {
    value: (f) => {
      var p, h;
      return r != null && r.Parent && f instanceof r.Parent ? !0 : (h = (p = f == null ? void 0 : f._zod) == null ? void 0 : p.traits) == null ? void 0 : h.has(e);
    }
  }), Object.defineProperty(d, "name", { value: e }), d;
}
class dt extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class Eu extends Error {
  constructor(t) {
    super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
  }
}
(ra = globalThis).__zod_globalConfig ?? (ra.__zod_globalConfig = {});
const Le = globalThis.__zod_globalConfig;
function st(e) {
  return e && Object.assign(Le, e), Le;
}
function Ow() {
  const e = this._zod;
  return e.message ?? (e.message = JSON.stringify(e.def, ni, 2)), e.message;
}
function Sw(e) {
  this._zod.message = e;
}
const Iw = {
  get: Ow,
  set: Sw,
  enumerable: !0,
  configurable: !0
}, Pr = { value: void 0, enumerable: !1 }, sa = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]), Rw = (e, t) => {
  e.name = "$ZodError", Pr.value = t, Object.defineProperty(e, "issues", Pr), Pr.value = void 0, Object.defineProperty(e, "message", Iw);
  const n = Object.getPrototypeOf(e);
  sa.has(n) || (sa.add(n), Object.defineProperty(n, "toString", {
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
}, $w = w("$ZodError", Rw);
function Tw(e, t, n) {
  return Object.prototype.hasOwnProperty.call(e, t) || (t === "__proto__" ? Object.defineProperty(e, t, { value: n(), writable: !0, enumerable: !0, configurable: !0 }) : e[t] = n()), e[t];
}
function Nw(e, t = (n) => n.message) {
  const n = {}, r = [];
  for (const i of e.issues)
    i.path.length > 0 ? Tw(n, i.path[0], () => []).push(t(i)) : r.push(t(i));
  return { formErrors: r, fieldErrors: n };
}
function kw(e, t = (n) => n.message) {
  const n = { _errors: [] }, r = (i, s = []) => {
    for (const a of i.issues)
      if (a.code === "invalid_union" && a.errors.length)
        a.errors.map((o) => r({ issues: o }, [...s, ...a.path]));
      else if (a.code === "invalid_key")
        r({ issues: a.issues }, [...s, ...a.path]);
      else if (a.code === "invalid_element")
        r({ issues: a.issues }, [...s, ...a.path]);
      else {
        const o = [...s, ...a.path];
        if (o.length === 0)
          n._errors.push(t(a));
        else {
          let l = n, u = 0;
          for (; u < o.length; ) {
            const c = o[u], d = u === o.length - 1;
            if (c === "_errors") {
              d && l._errors.push(t(a)), u++;
              continue;
            }
            Object.prototype.hasOwnProperty.call(l, c) || Object.defineProperty(l, c, {
              value: { _errors: [] },
              enumerable: !0,
              writable: !0,
              configurable: !0
            });
            const f = l[c];
            d && f._errors.push(t(a)), l = f, u++;
          }
        }
      }
  };
  return r(e), n;
}
function dr(e, t) {
  return { callee: (t == null ? void 0 : t.callee) ?? e, Err: t == null ? void 0 : t.Err };
}
const Hi = (e) => {
  const t = (n, r, i, s) => {
    const a = i ? { ...i, async: !1 } : { async: !1 }, o = n._zod.run({ value: r, issues: [] }, a);
    if (o instanceof Promise)
      throw new dt();
    if (o.issues.length) {
      const l = new ((s == null ? void 0 : s.Err) ?? e)(o.issues.map((u) => xt(u, a, st())));
      throw gu(l, (s == null ? void 0 : s.callee) ?? t), l;
    }
    return o.value;
  };
  return t;
}, Ki = (e) => {
  const t = async (n, r, i, s) => {
    const a = i ? { ...i, async: !0 } : { async: !0 };
    let o = n._zod.run({ value: r, issues: [] }, a);
    if (o instanceof Promise && (o = await o), o.issues.length) {
      const l = new ((s == null ? void 0 : s.Err) ?? e)(o.issues.map((u) => xt(u, a, st())));
      throw gu(l, (s == null ? void 0 : s.callee) ?? t), l;
    }
    return o.value;
  };
  return t;
}, Qi = (e) => (t, n, r) => {
  const i = r ? { ...r, async: !1 } : { async: !1 }, s = t._zod.run({ value: n, issues: [] }, i);
  if (s instanceof Promise)
    throw new dt();
  return s.issues.length ? Au(e, s.issues, i) : { success: !0, data: s.value };
};
function Au(e, t, n) {
  let r;
  return {
    success: !1,
    get error() {
      return r || (r = new e(t.map((i) => xt(i, n, st()))), t = void 0, n = void 0), r;
    },
    set error(i) {
      r = i, t = void 0, n = void 0;
    }
  };
}
const Yi = (e) => async (t, n, r) => {
  const i = r ? { ...r, async: !0 } : { async: !0 };
  let s = t._zod.run({ value: n, issues: [] }, i);
  return s instanceof Promise && (s = await s), s.issues.length ? Au(e, s.issues, i) : { success: !0, data: s.value };
}, Dw = /* @__PURE__ */ Symbol.for("zod.compile.invalid"), xw = /* @__PURE__ */ Symbol.for("zod.compile.fallback"), Lw = (e, t, n) => {
  const r = e._zod.bag.validator;
  if (r !== void 0) {
    if (r(t) !== Dw)
      return !0;
    if (r.definite === !0 && n === void 0)
      return !1;
  }
  return Cw(e, t, n);
};
function Cw(e, t, n) {
  const r = n ? { ...n, async: !1, abortEarly: !0 } : { async: !1, abortEarly: !0 }, i = e._zod.bag.fallbackRun;
  let s;
  if (i ? (r[xw] = !0, s = i({ value: t, issues: [] }, r)) : s = e._zod.run({ value: t, issues: [] }, r), s instanceof Promise)
    throw new dt();
  return s.issues.length === 0;
}
const Uw = async (e, t, n) => {
  const r = n ? { ...n, async: !0, abortEarly: !0 } : { async: !0, abortEarly: !0 };
  let i = e._zod.run({ value: t, issues: [] }, r);
  return i instanceof Promise && (i = await i), i.issues.length === 0;
}, Fw = (e) => {
  const t = Hi(e), n = (r, i, s, a) => {
    const o = s ? { ...s, direction: "backward" } : { direction: "backward" };
    return t(r, i, o, dr(n, a));
  };
  return n;
}, jw = (e) => {
  const t = Hi(e), n = (r, i, s, a) => t(r, i, s, dr(n, a));
  return n;
}, qw = (e) => {
  const t = Ki(e), n = async (r, i, s, a) => {
    const o = s ? { ...s, direction: "backward" } : { direction: "backward" };
    return await t(r, i, o, dr(n, a));
  };
  return n;
}, Mw = (e) => {
  const t = Ki(e), n = async (r, i, s, a) => await t(r, i, s, dr(n, a));
  return n;
}, Vw = (e) => (t, n, r) => {
  const i = r ? { ...r, direction: "backward" } : { direction: "backward" };
  return Qi(e)(t, n, i);
}, zw = (e) => (t, n, r) => Qi(e)(t, n, r), Zw = (e) => async (t, n, r) => {
  const i = r ? { ...r, direction: "backward" } : { direction: "backward" };
  return Yi(e)(t, n, i);
}, Bw = (e) => async (t, n, r) => Yi(e)(t, n, r), Gw = /^[cC][0-9a-z]{6,}$/, Ww = /^[0-9a-z]+$/, Jw = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/, Hw = /^[0-9a-vA-V]{20}$/, Kw = /^[A-Za-z0-9]{27}$/, Qw = /^[a-zA-Z0-9_-]{21}$/;
function Yw(e) {
  return new RegExp(`^[a-zA-Z0-9_-]{${e}}$`);
}
const Xw = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, eb = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, aa = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, tb = /^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, nb = "^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$";
function rb() {
  return new RegExp(nb, "u");
}
const ib = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, sb = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, ab = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, ob = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, lb = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, ub = /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/, cb = /^https?$/, db = /^\+[1-9]\d{6,14}$/, Pu = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
function fb(e) {
  return new RegExp(`^${e}$`);
}
const pb = /* @__PURE__ */ fb(Pu);
function ii(e) {
  const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : e.seconds ? `${t}:[0-5]\\d(?:\\.\\d+)?` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function hb(e) {
  return new RegExp(`^${ii(e)}$`);
}
function mb(e) {
  const t = ["Z"];
  e.offset && t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const n = `${ii({ precision: e.precision, seconds: !0 })}(?:${t.join("|")})`, r = e.local ? `${n}|${ii({ precision: e.precision })}` : n;
  return new RegExp(`^${Pu}T(?:${r})$`);
}
const gb = /^[\s\S]{0,}$/, yb = /^[^A-Z]*$/, wb = /^[^a-z]*$/, Ce = /* @__PURE__ */ w("$ZodCheck", (e, t) => {
  var n;
  e._zod ?? (e._zod = {}), e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), Xi = (e) => {
  const t = e.value;
  return !Yy(t) && t.length !== void 0;
}, bb = /* @__PURE__ */ w("$ZodCheckMaxLength", (e, t) => {
  var n;
  Ce.init(e, t), (n = e._zod.def).when ?? (n.when = Xi), e._zod.check = (r) => {
    const i = r.value, s = i.length;
    if ((typeof i == "string" && s > t.maximum ? Wi(i) : s) <= t.maximum)
      return;
    const o = Ji(i);
    r.issues.push({
      origin: o,
      code: "too_big",
      maximum: t.maximum,
      inclusive: !0,
      input: i,
      inst: e,
      continue: !t.abort
    });
  };
}), vb = /* @__PURE__ */ w("$ZodCheckMinLength", (e, t) => {
  var n;
  Ce.init(e, t), (n = e._zod.def).when ?? (n.when = Xi), e._zod.check = (r) => {
    const i = r.value, s = i.length;
    if ((typeof i == "string" && s >= t.minimum && s < t.minimum * 2 ? Wi(i) : s) >= t.minimum)
      return;
    const o = Ji(i);
    r.issues.push({
      origin: o,
      code: "too_small",
      minimum: t.minimum,
      inclusive: !0,
      input: i,
      inst: e,
      continue: !t.abort
    });
  };
}), _b = /* @__PURE__ */ w("$ZodCheckLengthEquals", (e, t) => {
  var n;
  Ce.init(e, t), (n = e._zod.def).when ?? (n.when = Xi), e._zod.check = (r) => {
    const i = r.value, s = i.length, a = typeof i == "string" && s >= t.length && s <= t.length * 2 ? Wi(i) : s;
    if (a === t.length)
      return;
    const o = Ji(i), l = a > t.length;
    r.issues.push({
      origin: o,
      ...l ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length },
      inclusive: !0,
      exact: !0,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), fr = /* @__PURE__ */ w("$ZodCheckStringFormat", (e, t) => {
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
}), Eb = /* @__PURE__ */ w("$ZodCheckRegex", (e, t) => {
  fr.init(e, t), e._zod.check = (n) => {
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
}), Ab = /* @__PURE__ */ w("$ZodCheckLowerCase", (e, t) => {
  t.pattern ?? (t.pattern = yb), fr.init(e, t);
}), Pb = /* @__PURE__ */ w("$ZodCheckUpperCase", (e, t) => {
  t.pattern ?? (t.pattern = wb), fr.init(e, t);
}), Ob = /* @__PURE__ */ w("$ZodCheckIncludes", (e, t) => {
  Ce.init(e, t);
  const n = ur(t.includes), r = new RegExp(typeof t.position == "number" ? `^.{${t.position},}${n}` : n);
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
}), Sb = /* @__PURE__ */ w("$ZodCheckStartsWith", (e, t) => {
  Ce.init(e, t);
  const n = new RegExp(`^${ur(t.prefix)}.*`);
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
}), Ib = /* @__PURE__ */ w("$ZodCheckEndsWith", (e, t) => {
  Ce.init(e, t);
  const n = new RegExp(`.*${ur(t.suffix)}$`);
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
}), Rb = /* @__PURE__ */ w("$ZodCheckOverwrite", (e, t) => {
  Ce.init(e, t), e._zod.check = (n) => {
    n.value = t.tx(n.value);
  };
});
class $b {
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
`).filter((a) => a), i = Math.min(...r.map((a) => a.length - a.trimStart().length)), s = r.map((a) => a.slice(i)).map((a) => " ".repeat(this.indent * 2) + a);
    for (const a of s)
      this.content.push(a);
  }
  compile() {
    const t = Function, n = (this == null ? void 0 : this.content) ?? [""];
    return new t(...Object.keys(this.closed), `return function (${this.args.join(", ")}) {
${n.join(`
`)}
};`)(...Object.values(this.closed));
  }
}
const Tb = {
  major: 4,
  minor: 6,
  patch: 7
}, ie = /* @__PURE__ */ w("$ZodType", (e, t) => {
  var s;
  var n;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = Tb;
  const r = e._zod.def.checks, i = e._zod.traits.has("$ZodCheck") ? [e, ...r ?? []] : r != null && r.length ? [...r] : [];
  for (const a of i)
    for (const o of a._zod.onattach)
      o(e);
  if (i.length === 0)
    (n = e._zod).deferred ?? (n.deferred = []), (s = e._zod.deferred) == null || s.push(() => {
      e._zod.run = e._zod.parse;
    });
  else {
    const a = (l, u, c) => {
      if (l.memo)
        return l;
      let d = qe(l), f;
      for (const p of u) {
        if (p._zod.def.when) {
          if (pw(l) || !p._zod.def.when(l))
            continue;
        } else if (d)
          continue;
        const h = l.issues.length, m = p._zod.check(l);
        if (m instanceof Promise && (c == null ? void 0 : c.async) === !1)
          throw new dt();
        if (f || m instanceof Promise)
          f = (f ?? Promise.resolve()).then(async () => {
            await m, l.issues.length !== h && (ri(l.issues, h, e), d || (d = qe(l, h)));
          });
        else {
          if (l.issues.length === h)
            continue;
          ri(l.issues, h, e), d || (d = qe(l, h));
        }
      }
      return f ? f.then(() => l) : l;
    }, o = (l, u, c) => {
      if (qe(l))
        return l.aborted = !0, l;
      const d = a(u, i, c);
      if (d instanceof Promise) {
        if (c.async === !1)
          throw new dt();
        return d.then((f) => e._zod.parse(f, c));
      }
      return e._zod.parse(d, c);
    };
    e._zod.run = (l, u) => {
      if (u.skipChecks)
        return e._zod.parse(l, u);
      if (u.direction === "backward") {
        const d = e._zod.parse({ value: l.value, issues: [] }, { ...u, skipChecks: !0 });
        return d instanceof Promise ? d.then((f) => o(f, l, u)) : o(d, l, u);
      }
      const c = e._zod.parse(l, u);
      if (c instanceof Promise) {
        if (u.async === !1)
          throw new dt();
        return c.then((d) => a(d, i, u));
      }
      return a(c, i, u);
    };
  }
}, {
  // Wrappers extend this by installing a richer factory over it; reading it eagerly would defeat the laziness.
  get "~standard"() {
    return _u(this, "~standard", Su(this));
  },
  set "~standard"(e) {
    tt(this, "~standard", e);
  }
}), Ou = (e, t) => e.issues.length ? { issues: e.issues.map((n) => xt(n, t, st())) } : { value: e.value };
async function Nb(e, t) {
  const n = { async: !0 };
  return Ou(await e._zod.run({ value: t, issues: [] }, n), n);
}
function Su(e) {
  return {
    validate: (t) => {
      const n = { async: !1 };
      try {
        const r = e._zod.run({ value: t, issues: [] }, n);
        if (!(r instanceof Promise))
          return Ou(r, n);
      } catch {
      }
      return Nb(e, t);
    },
    vendor: "zod",
    version: 1
  };
}
const es = /* @__PURE__ */ w("$ZodString", (e, t) => {
  ie.init(e, t), e._zod.pattern = t.pattern ?? gb, e._zod.parse = (n, r) => {
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
  fr.init(e, t), es.init(e, t);
}), kb = /* @__PURE__ */ w("$ZodGUID", (e, t) => {
  t.pattern ?? (t.pattern = eb), K.init(e, t);
}), Db = /* @__PURE__ */ w("$ZodUUID", (e, t) => {
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
    t.pattern ?? (t.pattern = aa(r));
  } else
    t.pattern ?? (t.pattern = aa());
  K.init(e, t);
}), xb = /* @__PURE__ */ w("$ZodEmail", (e, t) => {
  t.pattern ?? (t.pattern = tb), K.init(e, t);
}), Iu = 1, Gn = 2;
function Ru(e) {
  try {
    return typeof URL < "u" && typeof URL.canParse == "function" ? URL.canParse(e) : (new URL(e), !0);
  } catch {
    return !1;
  }
}
function Lb(e, t) {
  return !("normalize" in t) && !("hostname" in t) && !("protocol" in t) ? Ru(e) || Gn : Cb(e, t);
}
function Cb(e, t) {
  var n;
  if (!t.normalize && ((n = t.protocol) == null ? void 0 : n.source) === cb.source && !/^https?:\/\//i.test(e))
    return Iu;
  try {
    if (typeof URL < "u") {
      const r = URL;
      if (typeof r.parse == "function")
        return r.parse(e) ?? Gn;
    }
    return new URL(e);
  } catch {
    return Gn;
  }
}
const Ub = /[\t\n\r]/g;
function oa(e) {
  return e.replace(Ub, "");
}
function Fb(e, t) {
  return t.lastIndex = 0, t.test(e.hostname);
}
function jb(e, t) {
  return t.lastIndex = 0, t.test(e.protocol.endsWith(":") ? e.protocol.slice(0, -1) : e.protocol);
}
const qb = /* @__PURE__ */ w("$ZodURL", (e, t) => {
  K.init(e, t), e._zod.check = (n) => {
    try {
      const r = n.value.trim(), i = Lb(r, t);
      if (i === Iu) {
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
      if (i === Gn) {
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
        n.value = oa(r);
        return;
      }
      t.hostname && !Fb(i, t.hostname) && n.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: t.hostname.source,
        input: n.value,
        inst: e,
        continue: !t.abort
      }), t.protocol && !jb(i, t.protocol) && n.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: t.protocol.source,
        input: n.value,
        inst: e,
        continue: !t.abort
      }), n.value = t.normalize ? i.href : oa(r);
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
}), Mb = /* @__PURE__ */ w("$ZodEmoji", (e, t) => {
  t.pattern ?? (t.pattern = rb()), K.init(e, t);
}), Vb = /* @__PURE__ */ w("$ZodNanoID", (e, t) => {
  if (t.length !== void 0 && (!Number.isInteger(t.length) || t.length < 1))
    throw new Error(`Invalid nanoid length: ${t.length}`);
  t.pattern ?? (t.pattern = t.length === void 0 ? Qw : Yw(t.length)), K.init(e, t);
}), zb = /* @__PURE__ */ w("$ZodCUID", (e, t) => {
  t.pattern ?? (t.pattern = Gw), K.init(e, t);
}), Zb = /* @__PURE__ */ w("$ZodCUID2", (e, t) => {
  t.pattern ?? (t.pattern = Ww), K.init(e, t);
}), Bb = /* @__PURE__ */ w("$ZodULID", (e, t) => {
  t.pattern ?? (t.pattern = Jw), K.init(e, t);
}), Gb = /* @__PURE__ */ w("$ZodXID", (e, t) => {
  t.pattern ?? (t.pattern = Hw), K.init(e, t);
}), Wb = /* @__PURE__ */ w("$ZodKSUID", (e, t) => {
  t.pattern ?? (t.pattern = Kw), K.init(e, t);
}), Jb = /* @__PURE__ */ w("$ZodISODateTime", (e, t) => {
  t.pattern ?? (t.pattern = mb(t)), K.init(e, t);
}), Hb = /* @__PURE__ */ w("$ZodISODate", (e, t) => {
  t.pattern ?? (t.pattern = pb), K.init(e, t);
}), Kb = /* @__PURE__ */ w("$ZodISOTime", (e, t) => {
  t.pattern ?? (t.pattern = hb(t)), K.init(e, t);
}), Qb = /* @__PURE__ */ w("$ZodISODuration", (e, t) => {
  t.pattern ?? (t.pattern = Xw), K.init(e, t);
}), Yb = /* @__PURE__ */ w("$ZodIPv4", (e, t) => {
  t.pattern ?? (t.pattern = ib), K.init(e, t);
}), Xb = /^[0-9a-fA-F:.]+$/;
function $u(e) {
  return Xb.test(e) ? Ru(`http://[${e}]`) : !1;
}
const ev = /* @__PURE__ */ w("$ZodIPv6", (e, t) => {
  t.pattern ?? (t.pattern = sb), K.init(e, t), e._zod.check = (n) => {
    $u(n.value) || n.issues.push({
      code: "invalid_format",
      format: "ipv6",
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), tv = /* @__PURE__ */ w("$ZodCIDRv4", (e, t) => {
  t.pattern ?? (t.pattern = ab), K.init(e, t);
});
function nv(e) {
  const t = e.split("/");
  if (t.length !== 2)
    return !1;
  const [n, r] = t;
  if (!r)
    return !1;
  const i = Number(r);
  return `${i}` !== r || i < 0 || i > 128 ? !1 : $u(n);
}
const rv = /* @__PURE__ */ w("$ZodCIDRv6", (e, t) => {
  t.pattern ?? (t.pattern = ob), K.init(e, t), e._zod.check = (n) => {
    nv(n.value) || n.issues.push({
      code: "invalid_format",
      format: "cidrv6",
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
});
function Tu(e) {
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
const Nu = /^[0-9a-zA-Z+/]*={0,2}$/, iv = /* @__PURE__ */ w("$ZodBase64", (e, t) => {
  t.pattern ?? (t.pattern = Nu), K.init(e, t), e._zod.check = (n) => {
    Tu(n.value) || n.issues.push({
      code: "invalid_format",
      format: "base64",
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), ts = /^[A-Za-z0-9_-]*$/;
function sv(e) {
  if (!ts.test(e))
    return !1;
  const t = e.replace(/[-_]/g, (r) => r === "-" ? "+" : "/"), n = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return Tu(n);
}
const av = /* @__PURE__ */ w("$ZodBase64URL", (e, t) => {
  t.pattern ?? (t.pattern = ts), K.init(e, t), e._zod.check = (n) => {
    sv(n.value) || n.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), ov = /* @__PURE__ */ w("$ZodE164", (e, t) => {
  t.pattern ?? (t.pattern = db), K.init(e, t);
});
function lv(e, t = null) {
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
const uv = /* @__PURE__ */ w("$ZodJWT", (e, t) => {
  K.init(e, t), e._zod.check = (n) => {
    lv(n.value, t.alg) || n.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), cv = /* @__PURE__ */ w("$ZodUnknown", (e, t) => {
  ie.init(e, t), e._zod.parse = (n) => n;
}), dv = /* @__PURE__ */ w("$ZodNever", (e, t) => {
  ie.init(e, t), e._zod.parse = (n, r) => (n.issues.push({
    expected: "never",
    code: "invalid_type",
    input: n.value,
    inst: e
  }), n);
});
function fv(e, t) {
  const n = na(e._zod.def.checks);
  if (!n.length)
    return;
  const r = Math.min(...n.map((s) => s[0])), i = e._zod.parse;
  e._zod.parse = (s, a) => {
    const o = t(s.value);
    if (o > r && !(a != null && a.skipChecks) && (a == null ? void 0 : a.direction) !== "backward") {
      for (const [l, u] of na(e._zod.def.checks))
        if (o > l && u._zod.def.when(s)) {
          const c = s.issues.length;
          return u._zod.check(s), s.issues[c].continue = !1, ri(s.issues, c, e), s;
        }
    }
    return i(s, a);
  };
}
const pv = (e) => Array.isArray(e) ? e.length : -1;
function la(e, t, n) {
  e.issues.length && t.issues.push(...vu(n, e.issues)), t.value[n] = e.value;
}
const hv = /* @__PURE__ */ w("$ZodArray", (e, t) => {
  ie.init(e, t);
  const n = Le.memoizer;
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
    const a = [], o = i == null ? void 0 : i.abortEarly;
    for (let l = 0; l < s.length; l++) {
      const u = s[l], c = t.element._zod.run({
        value: u,
        issues: []
      }, i);
      if (c instanceof Promise)
        a.push(c.then((d) => la(d, r, l)));
      else if (la(c, r, l), o && c.issues.length !== 0 && qe(c))
        break;
    }
    return a.length ? Promise.all(a).then(() => r) : r;
  }, fv(e, pv);
});
function Wn(e, t, n, r, i, s) {
  const a = n in r, o = s === "optional";
  if (!(!a && o && i === "optional")) {
    if (e.issues.length) {
      if (i !== void 0 && o && !a)
        return;
      t.issues.push(...vu(n, e.issues));
    }
    if (!a && i === void 0) {
      e.issues.length || t.issues.push({
        code: "invalid_type",
        expected: "nonoptional",
        input: void 0,
        path: [n]
      });
      return;
    }
    e.value === void 0 ? (a || i === "defaulted" && !o) && (t.value[n] = void 0) : t.value[n] = e.value;
  }
}
const mv = [];
function ku(e) {
  var a, o, l, u;
  const t = Object.keys(e.shape), n = Object.getOwnPropertySymbols(e.shape), r = n.length ? n : mv, i = r.length ? [...t, ...r] : t;
  for (const c of i)
    if (!((u = (l = (o = (a = e.shape) == null ? void 0 : a[c]) == null ? void 0 : o._zod) == null ? void 0 : l.traits) != null && u.has("$ZodType")))
      throw new Error(`Invalid element at key "${String(c)}": expected a Zod schema`);
  const s = iw(e.shape);
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
function Du(e, t, n, r, i, s, a) {
  const o = [], l = i.keySet, u = i.catchall._zod, c = u.def.type, d = u.optin, f = u.optout;
  let p = 0;
  for (const h in t) {
    if (a && n.issues.length !== p) {
      if (qe(n, p))
        break;
      p = n.issues.length;
    }
    if (l.has(h))
      continue;
    if (h === "__proto__") {
      c === "never" && o.push(h);
      continue;
    }
    if (c === "never") {
      o.push(h);
      continue;
    }
    const m = u.run({ value: t[h], issues: [] }, r);
    m instanceof Promise ? e.push(m.then((v) => Wn(v, n, h, t, d, f))) : Wn(m, n, h, t, d, f);
  }
  return o.length && n.issues.push({
    code: "unrecognized_keys",
    keys: o,
    input: t,
    inst: s,
    // Describes the shape of the input, not the validity of the parsed value, so it never aborts. The parse still fails; the schema's own checks just get to run first, and an enclosing intersection can reconcile the key against a sibling operand.
    continue: !0
  }), e.length ? Promise.all(e).then(() => n) : n;
}
const gv = /* @__PURE__ */ w("$ZodObject", (e, t) => {
  ie.init(e, t);
  const n = Object.getOwnPropertyDescriptor(t, "shape"), r = n != null && n.get ? n.get.raw : t.shape ?? {};
  if (r) {
    const u = () => {
      const c = { ...r };
      return Object.defineProperty(t, "shape", { value: c }), u.raw = c, c;
    };
    u.raw = r, Object.defineProperty(t, "shape", { get: u });
  }
  const i = Bi(() => ku(t));
  Z(e, "propValues", (u) => {
    const c = u.def.shape, d = {};
    for (const f in c) {
      const p = c[f]._zod;
      if (p.values) {
        Object.prototype.hasOwnProperty.call(d, f) || wt(d, f, /* @__PURE__ */ new Set());
        for (const h of p.values)
          d[f].add(h);
        p.optin !== void 0 && d[f].add(void 0);
      }
    }
    return d;
  });
  const s = Bn, a = t.catchall;
  let o;
  const l = Le.memoizer;
  l == null || l.attach(e), e._zod.parse = (u, c) => {
    o ?? (o = i.value);
    const d = u.value;
    if (!s(d))
      return u.issues.push({
        expected: "object",
        code: "invalid_type",
        input: d,
        inst: e
      }), u;
    u.value = l ? l.alloc(e, u, {}, c) : {};
    const f = [], p = o.shape, h = c == null ? void 0 : c.abortEarly;
    let m = u.issues.length;
    for (const v of o.allKeys) {
      if (h && u.issues.length !== m) {
        if (qe(u, m))
          break;
        m = u.issues.length;
      }
      if (v === "__proto__")
        continue;
      const _ = p[v], A = _._zod.optin, I = _._zod.optout, T = _._zod.run({ value: d[v], issues: [] }, c);
      T instanceof Promise ? f.push(T.then((X) => Wn(X, u, v, d, A, I))) : Wn(T, u, v, d, A, I);
    }
    return a ? Du(f, d, u, c, i.value, e, h === !0) : f.length ? Promise.all(f).then(() => u) : u;
  };
}), yv = /* @__PURE__ */ w("$ZodObjectJIT", (e, t) => {
  gv.init(e, t);
  const n = e._zod.parse, r = Bi(() => ku(t)), i = Le.memoizer, s = (p) => {
    var X, N;
    const h = r.value, m = h.symbolKeys, v = new $b(["payload", "ctx"], { shape: p, inst: e, memo: i, syms: m }), _ = (b) => `shape[${b}]._zod.run({ value: input[${b}], issues: [] }, ctx)`, A = (b, E) => `
          let ${b}_ab = false;
          for (let i = 0; i < ${b}.issues.length; i++) {
            const iss = ${b}.issues[i];
            iss.path = iss.path ? [${E}, ...iss.path] : [${E}];
            payload.issues.push(iss);
            if (iss.continue !== true) ${b}_ab = true;
          }
          if (${b}_ab && ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }`;
    v.write("const input = payload.value;");
    const I = /* @__PURE__ */ Object.create(null);
    let T = 0;
    for (const b of h.allKeys)
      I[b] = `key_${T++}`;
    v.write(i ? "const newResult = memo.alloc(inst, payload, {}, ctx);" : "const newResult = {};");
    for (const b of h.allKeys) {
      if (b === "__proto__")
        continue;
      const E = I[b], S = typeof b == "symbol" ? `syms[${m.indexOf(b)}]` : ew(b), j = `${S} in input`, C = p[b], x = (X = C == null ? void 0 : C._zod) == null ? void 0 : X.optin, q = x !== void 0, G = ((N = C == null ? void 0 : C._zod) == null ? void 0 : N.optout) === "optional";
      if (v.write(`const ${E} = ${_(S)};`), q && G) {
        const M = x === "optional" ? `${E}_present` : `${E}.value !== undefined || ${E}_present`;
        v.write(`
        const ${E}_present = ${j};
        if (!${E}.issues.length || ${E}_present) {
          if (${E}.issues.length) {${A(E, S)}
          }

          if (${M}) {
            newResult[${S}] = ${E}.value;
          }
        }

      `);
      } else q ? (v.write(`
        if (${E}.issues.length) {${A(E, S)}
        }
      `), x === "defaulted" ? v.write(`newResult[${S}] = ${E}.value;`) : v.write(`
        if (${E}.value !== undefined || ${j}) {
          newResult[${S}] = ${E}.value;
        }
      `)) : v.write(`
        const ${E}_present = ${j};
        if (${E}.issues.length) {${A(E, S)}
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
    return v.write("payload.value = newResult;"), v.write("return payload;"), v.compile();
  };
  let a;
  const o = Bn, l = !Le.jitless, c = l && nw.value, d = t.catchall;
  let f;
  e._zod.parse = (p, h) => {
    f ?? (f = r.value);
    const m = p.value;
    return o(m) ? l && c && (h == null ? void 0 : h.async) === !1 && h.jitless !== !0 ? (a || (a = s(t.shape)), p = a(p, h), d ? Du([], m, p, h, f, e, (h == null ? void 0 : h.abortEarly) === !0) : p) : n(p, h) : (p.issues.push({
      expected: "object",
      code: "invalid_type",
      input: m,
      inst: e
    }), p);
  };
});
function ua(e, t, n, r) {
  for (const s of e)
    if (s.issues.length === 0)
      return t.value = s.value, t;
  const i = e.filter((s) => !qe(s));
  return i.length === 1 ? (t.value = i[0].value, i[0]) : (t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: n,
    errors: e.map((s) => s.issues.map((a) => xt(a, r, st())))
  }), t);
}
const wv = /* @__PURE__ */ w("$ZodUnion", (e, t) => {
  ie.init(e, t), Z(e, "optin", (r) => r.def.options.some((i) => i._zod.optin === "defaulted") ? "defaulted" : r.def.options.some((i) => i._zod.optin !== void 0) ? "optional" : void 0), Z(e, "optout", (r) => r.def.options.some((i) => i._zod.optout === "optional") ? "optional" : void 0), Z(e, "values", (r) => {
    if (r.def.options.every((i) => i._zod.values))
      return new Set(r.def.options.flatMap((i) => Array.from(i._zod.values)));
  }), Z(e, "pattern", (r) => {
    if (r.def.options.every((i) => i._zod.pattern)) {
      const i = r.def.options.map((s) => s._zod.pattern);
      return new RegExp(`^(${i.map((s) => Gi(s.source)).join("|")})$`);
    }
  });
  const n = t.options.length === 1 ? t.options[0]._zod.run : null;
  e._zod.parse = (r, i) => {
    if (n)
      return n(r, i);
    let s = !1;
    const a = [];
    for (const o of t.options) {
      const l = o._zod.run({
        value: r.value,
        issues: []
      }, i);
      if (l instanceof Promise)
        a.push(l), s = !0;
      else {
        if (l.issues.length === 0)
          return l;
        a.push(l);
      }
    }
    return s ? Promise.all(a).then((o) => ua(o, r, e, i)) : ua(a, r, e, i);
  };
}), bv = /* @__PURE__ */ w("$ZodIntersection", (e, t) => {
  ie.init(e, t), e._zod.parse = (n, r) => {
    const i = n.value, s = t.left._zod.run({ value: i, issues: [] }, r), a = t.right._zod.run({ value: i, issues: [] }, r);
    return s instanceof Promise || a instanceof Promise ? Promise.all([s, a]).then(([l, u]) => ca(n, l, u)) : ca(n, s, a);
  };
});
function si(e, t) {
  if (e === t)
    return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if (un(e) && un(t)) {
    const n = Object.keys(t), r = Object.keys(e).filter((s) => n.indexOf(s) !== -1), i = { ...e, ...t };
    Object.prototype.hasOwnProperty.call(i, "__proto__") && delete i.__proto__;
    for (const s of r) {
      if (s === "__proto__")
        continue;
      const a = si(e[s], t[s]);
      if (!a.valid)
        return {
          valid: !1,
          mergeErrorPath: [s, ...a.mergeErrorPath]
        };
      i[s] = a.data;
    }
    return { valid: !0, data: i };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length)
      return { valid: !1, mergeErrorPath: [] };
    const n = [];
    for (let r = 0; r < e.length; r++) {
      const i = e[r], s = t[r], a = si(i, s);
      if (!a.valid)
        return {
          valid: !1,
          mergeErrorPath: [r, ...a.mergeErrorPath]
        };
      n.push(a.data);
    }
    return { valid: !0, data: n };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function ca(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  let i;
  const s = /* @__PURE__ */ new Map(), a = (u, c) => {
    var f, p;
    let d;
    if (u.code === "unrecognized_keys" && !((f = u.path) != null && f.length))
      i ?? (i = u), d = u.keys;
    else if (u.code === "invalid_key" && u.origin === "record" && ((p = u.path) == null ? void 0 : p.length) === 1) {
      const h = String(u.path[0]);
      s.has(h) || s.set(h, u), d = [h];
    } else
      return !1;
    for (const h of d)
      r.has(h) || r.set(h, {}), r.get(h)[c] = !0;
    return !0;
  };
  for (const u of t.issues)
    a(u, "l") || e.issues.push(u);
  for (const u of n.issues)
    a(u, "r") || e.issues.push(u);
  const o = [...r].filter(([, u]) => u.l && u.r).map(([u]) => u);
  if (o.length) {
    const u = i ? o.filter((c) => i.keys.includes(c)) : [];
    u.length && e.issues.push({ ...i, keys: u });
    for (const c of o)
      !u.includes(c) && s.has(c) && e.issues.push(s.get(c));
  }
  const l = si(t.value, n.value);
  if (!l.valid) {
    if (qe(e))
      return e;
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(l.mergeErrorPath)}`);
  }
  return e.value = l.data, e;
}
const vv = /* @__PURE__ */ w("$ZodEnum", (e, t) => {
  ie.init(e, t);
  const n = ti(t.entries), r = new Set(n);
  e._zod.values = r, Z(e, "pattern", (i) => {
    const s = ti(i.def.entries).filter((a) => rw.has(typeof a));
    return new RegExp(s.length ? `^(${s.map((a) => ur(a.toString())).join("|")})$` : "^[^\\s\\S]$");
  }), e._zod.parse = (i, s) => {
    const a = i.value;
    return r.has(a) || i.issues.push({
      code: "invalid_value",
      values: n,
      input: a,
      inst: e
    }), i;
  };
}), _v = /* @__PURE__ */ w("$ZodTransform", (e, t) => {
  var n;
  ie.init(e, t), e._zod.optin = "optional", (n = Le.memoizer) == null || n.guard(e), e._zod.parse = (r, i) => {
    if (i.direction === "backward")
      throw new Eu(e.constructor.name);
    const s = t.transform(r.value, r);
    if (i.async)
      return (s instanceof Promise ? s : Promise.resolve(s)).then((o) => (r.value = o, r));
    if (s instanceof Promise)
      throw new dt();
    return r.value = s, r;
  };
});
function da(e, t) {
  return e.value = t.issues.length ? void 0 : t.value, e;
}
const xu = /* @__PURE__ */ w("$ZodOptional", (e, t) => {
  ie.init(e, t), Z(e, "optin", (n) => n.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), e._zod.optout = "optional", Z(e, "values", (n) => {
    const r = n.def.innerType._zod.values;
    return r ? /* @__PURE__ */ new Set([...r, void 0]) : void 0;
  }), Z(e, "pattern", (n) => {
    const r = n.def.innerType._zod.pattern;
    return r ? new RegExp(`^(${Gi(r.source)})?$`) : void 0;
  }), e._zod.parse = (n, r) => {
    if (n.value === void 0) {
      if (t.innerType._zod.optin !== "defaulted")
        return n;
      const i = t.innerType._zod.run({ value: n.value, issues: [] }, r);
      return i instanceof Promise ? i.then((s) => da(n, s)) : da(n, i);
    }
    return t.innerType._zod.run(n, r);
  };
}), Ev = /* @__PURE__ */ w("$ZodExactOptional", (e, t) => {
  xu.init(e, t), Z(e, "values", (n) => n.def.innerType._zod.values), Z(e, "pattern", (n) => n.def.innerType._zod.pattern), e._zod.parse = (n, r) => t.innerType._zod.run(n, r);
}), Av = /* @__PURE__ */ w("$ZodNullable", (e, t) => {
  ie.init(e, t), Z(e, "optin", (n) => n.def.innerType._zod.optin), Z(e, "optout", (n) => n.def.innerType._zod.optout), Z(e, "pattern", (n) => {
    const r = n.def.innerType._zod.pattern;
    return r ? new RegExp(`^(${Gi(r.source)}|null)$`) : void 0;
  }), Z(e, "values", (n) => n.def.innerType._zod.values ? /* @__PURE__ */ new Set([...n.def.innerType._zod.values, null]) : void 0), e._zod.parse = (n, r) => n.value === null ? n : t.innerType._zod.run(n, r);
}), Pv = /* @__PURE__ */ w("$ZodDefault", (e, t) => {
  ie.init(e, t), e._zod.optin = "defaulted", Z(e, "values", (n) => n.def.innerType._zod.values), e._zod.parse = (n, r) => {
    if (r.direction === "backward")
      return t.innerType._zod.run(n, r);
    if (n.value === void 0)
      return n.value = t.defaultValue, n;
    const i = t.innerType._zod.run(n, r);
    return i instanceof Promise ? i.then((s) => fa(s, t)) : fa(i, t);
  };
});
function fa(e, t) {
  return e.value === void 0 && (e.value = t.defaultValue), e;
}
const Ov = /* @__PURE__ */ w("$ZodPrefault", (e, t) => {
  ie.init(e, t), e._zod.optin = "defaulted", Z(e, "values", (n) => n.def.innerType._zod.values), e._zod.parse = (n, r) => (r.direction === "backward" || n.value === void 0 && (n.value = t.defaultValue), t.innerType._zod.run(n, r));
}), Sv = /* @__PURE__ */ w("$ZodNonOptional", (e, t) => {
  ie.init(e, t), Z(e, "values", (n) => {
    const r = n.def.innerType._zod.values;
    return r ? new Set([...r].filter((i) => i !== void 0)) : void 0;
  }), e._zod.parse = (n, r) => {
    const i = t.innerType._zod.run(n, r);
    return i instanceof Promise ? i.then((s) => pa(s, e)) : pa(i, e);
  };
});
function pa(e, t) {
  return !e.issues.length && e.value === void 0 && e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: t
  }), e;
}
function ha(e, t, n, r) {
  return t.issues.length ? (e.value = n.catchValue({
    ...t,
    value: e.value,
    error: {
      issues: t.issues.map((i) => xt(i, r, st()))
    },
    input: e.value
  }), e) : (e.value = t.value, t.memo && (e.memo = !0), e);
}
const Iv = /* @__PURE__ */ w("$ZodCatch", (e, t) => {
  ie.init(e, t), Z(e, "optin", (n) => n.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), Z(e, "optout", (n) => n.def.innerType._zod.optout), Z(e, "values", (n) => n.def.innerType._zod.values), e._zod.parse = (n, r) => {
    if (r.direction === "backward")
      return t.innerType._zod.run(n, r);
    const i = t.innerType._zod.run({ value: n.value, issues: [] }, r);
    return i instanceof Promise ? i.then((s) => ha(n, s, t, r)) : ha(n, i, t, r);
  };
}), Rv = /* @__PURE__ */ w("$ZodPipe", (e, t) => {
  ie.init(e, t), Z(e, "values", (n) => n.def.in._zod.values), Z(e, "optin", (n) => n.def.in._zod.optin), Z(e, "optout", (n) => n.def.out._zod.optout), Z(e, "propValues", (n) => n.def.in._zod.propValues), e._zod.parse = (n, r) => {
    if (r.direction === "backward") {
      const s = t.out._zod.run(n, r);
      return s instanceof Promise ? s.then((a) => Pn(a, t.in, r)) : Pn(s, t.in, r);
    }
    const i = t.in._zod.run(n, r);
    return i instanceof Promise ? i.then((s) => Pn(s, t.out, r)) : Pn(i, t.out, r);
  };
});
function Pn(e, t, n) {
  return e.issues.some((r) => r.code !== "unrecognized_keys") ? (e.aborted = !0, e) : t._zod.run({ value: e.value, issues: e.issues }, n);
}
const $v = /* @__PURE__ */ w("$ZodReadonly", (e, t) => {
  ie.init(e, t), Z(e, "propValues", (n) => n.def.innerType._zod.propValues), Z(e, "values", (n) => n.def.innerType._zod.values), Z(e, "optin", (n) => {
    var r, i;
    return (i = (r = n.def.innerType) == null ? void 0 : r._zod) == null ? void 0 : i.optin;
  }), Z(e, "optout", (n) => {
    var r, i;
    return (i = (r = n.def.innerType) == null ? void 0 : r._zod) == null ? void 0 : i.optout;
  }), e._zod.parse = (n, r) => {
    if (r.direction === "backward")
      return t.innerType._zod.run(n, r);
    const i = t.innerType._zod.run(n, r);
    return i instanceof Promise ? i.then(ma) : ma(i);
  };
});
function ma(e) {
  return e.memo || (e.value = Object.freeze(e.value)), e;
}
const Tv = /* @__PURE__ */ w("$ZodCustom", (e, t) => {
  Ce.init(e, t), ie.init(e, t), e._zod.parse = (n, r) => n, e._zod.check = (n) => {
    const r = n.value, i = t.fn(r);
    if (i instanceof Promise)
      return i.then((s) => ga(s, n, r, e));
    ga(i, n, r, e);
  };
});
function ga(e, t, n, r) {
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
    r._zod.def.params && (i.params = r._zod.def.params), t.issues.push(cn(i));
  }
}
class Nv extends Error {
  constructor() {
    super("Cannot parse a reference cycle that closes through a transform"), this.name = "ZodCyclicError";
  }
}
const ai = "~memo", ya = [];
function Lu(e) {
  return e !== null && typeof e == "object";
}
function Or(e) {
  return e.map((t) => t.path ? { ...t, path: t.path.slice() } : { ...t });
}
const Cu = /* @__PURE__ */ new WeakMap(), zt = 0, Cn = 1, Qt = 2;
function Un(e, t, n) {
  const r = Cu.get(e);
  if (r !== void 0)
    return r ? Qt : zt;
  if (t.has(e))
    return Qt;
  t.add(e);
  let i = zt;
  const s = (c) => {
    if (i !== Qt && (c != null && c._zod)) {
      const d = Un(c, t);
      d > i && (i = d);
    }
  }, a = (c, d) => {
    var p;
    let f = zt;
    for (const h of Reflect.ownKeys(c)) {
      const m = Object.getOwnPropertyDescriptor(c, h);
      if (!m.enumerable)
        continue;
      const v = m.get ? Cn : (p = m.value) != null && p._zod ? Un(m.value, t) : zt;
      v > f && (f = v);
    }
    return f;
  }, o = (c) => {
    c > i && (i = c);
  }, l = e._zod.def;
  switch (l.type) {
    case "object": {
      const c = pu(l);
      o(c ? a(c) : Cn), s(l.catchall);
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
      o(c ? Un(c, t) : Cn);
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
            for (const p of f)
              s(p);
        }
      }
  }
  return t.delete(e), kv(e, i);
}
function kv(e, t) {
  return t !== Cn && Cu.set(e, t === Qt), t;
}
function Dv(e, t) {
  let n = e.buckets.get(t);
  return n || (n = /* @__PURE__ */ new WeakMap(), e.buckets.set(t, n)), n;
}
let On;
const Sn = [], xv = {
  alloc(e, t, n) {
    const r = On;
    if (!r)
      return n;
    On = void 0;
    const i = { value: n, issues: null };
    return r.set(t.value, i), Sn.push(i), n;
  },
  guard(e) {
    var t;
    (t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred.push(() => {
      const n = e._zod.parse, r = (i, s) => {
        if (s.direction !== "backward" && Cv(s, i.value))
          throw new Nv();
        return n(i, s);
      };
      e._zod.parse = r, e._zod.run === n && (e._zod.run = r);
    });
  },
  attach(e) {
    var t;
    let n, r = !1, i, s;
    (t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred.push(() => {
      const a = e._zod.parse, o = (l, u) => {
        if (n === void 0) {
          const _ = Un(e, /* @__PURE__ */ new Set());
          if (_ === zt)
            return e._zod.parse = a, e._zod.run === o && (e._zod.run = a), a(l, u);
          _ === Qt || r ? n = !0 : r = !0;
        }
        const c = l.value;
        if (!Lu(c))
          return a(l, u);
        let d = u[ai];
        d || (d = { buckets: /* @__PURE__ */ new WeakMap(), backEdges: void 0 }, u[ai] = d);
        let f;
        i === u ? f = s : (f = Dv(d, e), i = u, s = f);
        const p = f.get(c);
        if (p)
          return l.value = p.value, p.issues ? p.issues.length && l.issues.push(...Or(p.issues)) : (l.memo = !0, d.backEdges ?? (d.backEdges = /* @__PURE__ */ new WeakSet()), d.backEdges.add(p.value)), l;
        On = f;
        const h = Sn.length, m = a(l, u);
        On = void 0;
        const v = Sn.length > h ? Sn.pop() : void 0;
        return m instanceof Promise ? m.then((_) => (v && (v.issues = _.issues.length ? Or(_.issues) : ya), _)) : (v && (v.issues = m.issues.length ? Or(m.issues) : ya), m);
      };
      e._zod.parse = o, e._zod.run === a && (e._zod.run = o);
    });
  }
};
function Lv() {
  return xv;
}
function Cv(e, t) {
  var r;
  const n = (r = e[ai]) == null ? void 0 : r.backEdges;
  return n !== void 0 && Lu(t) && n.has(t);
}
const Uv = () => {
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
  function i(s, a) {
    return s === "number" && typeof a == "number" && !Number.isFinite(a) ? String(a) : r[s] ?? s;
  }
  return (s) => {
    switch (s.code) {
      case "invalid_type": {
        const a = i(s.expected), o = mw(s.input), l = i(o, s.input);
        return `Invalid input: expected ${a}, received ${l}`;
      }
      case "invalid_value":
        return s.values.length === 1 ? `Invalid input: expected ${wu(s.values[0])}` : `Invalid option: expected one of ${ea(s.values, "|")}`;
      case "too_big": {
        const a = s.exact ? "exactly " : s.inclusive ? "<=" : "<", o = t(s.origin);
        return o ? `Too big: expected ${s.origin ?? "value"} to have ${a}${s.maximum.toString()} ${o.unit ?? "elements"}` : `Too big: expected ${s.origin ?? "value"} to be ${a}${s.maximum.toString()}`;
      }
      case "too_small": {
        const a = s.exact ? "exactly " : s.inclusive ? ">=" : ">", o = t(s.origin);
        return o ? `Too small: expected ${s.origin} to have ${a}${s.minimum.toString()} ${o.unit}` : `Too small: expected ${s.origin} to be ${a}${s.minimum.toString()}`;
      }
      case "invalid_format": {
        const a = s;
        return a.format === "starts_with" ? `Invalid string: must start with "${a.prefix}"` : a.format === "ends_with" ? `Invalid string: must end with "${a.suffix}"` : a.format === "includes" ? `Invalid string: must include "${a.includes}"` : a.format === "regex" ? `Invalid string: must match pattern ${a.pattern}` : `Invalid ${n[a.format] ?? s.format}`;
      }
      case "not_multiple_of":
        return `Invalid number: must be a multiple of ${s.divisor}`;
      case "unrecognized_keys":
        return `Unrecognized key${s.keys.length > 1 ? "s" : ""}: ${ea(s.keys, ", ")}`;
      case "invalid_key":
        return `Invalid key in ${s.origin}`;
      case "invalid_union":
        return s.options && Array.isArray(s.options) && s.options.length > 0 ? `Invalid discriminator value. Expected ${s.options.map((o) => `'${o}'`).join(" | ")}` : s.inclusive === !1 ? "Invalid input: more than one option matched" : "Invalid input";
      case "invalid_element":
        return `Invalid value in ${s.origin}`;
      default:
        return "Invalid input";
    }
  };
};
function Fv() {
  return {
    localeError: Uv()
  };
}
var wa;
class jv {
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
function qv() {
  return new jv();
}
(wa = globalThis).__zod_globalRegistry ?? (wa.__zod_globalRegistry = qv());
const Zt = globalThis.__zod_globalRegistry;
function Mv(e) {
  return e.checks && (e.checks = [...e.checks]), e;
}
// @__NO_SIDE_EFFECTS__
function Vv(e, t) {
  return new e(Mv({ type: "string", ...D(t) }));
}
// @__NO_SIDE_EFFECTS__
function zv(e, t) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...D(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Zv(e, t) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...D(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Bv(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...D(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Gv(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...D(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Wv(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...D(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Jv(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...D(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Hv(e, t) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...D(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Kv(e, t) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...D(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Qv(e, t) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...D(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Yv(e, t) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...D(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Xv(e, t) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...D(t)
  });
}
// @__NO_SIDE_EFFECTS__
function e_(e, t) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...D(t)
  });
}
// @__NO_SIDE_EFFECTS__
function t_(e, t) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...D(t)
  });
}
// @__NO_SIDE_EFFECTS__
function n_(e, t) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...D(t)
  });
}
// @__NO_SIDE_EFFECTS__
function r_(e, t) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...D(t)
  });
}
// @__NO_SIDE_EFFECTS__
function i_(e, t) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...D(t)
  });
}
// @__NO_SIDE_EFFECTS__
function s_(e, t) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...D(t)
  });
}
// @__NO_SIDE_EFFECTS__
function a_(e, t) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...D(t)
  });
}
// @__NO_SIDE_EFFECTS__
function o_(e, t) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...D(t)
  });
}
// @__NO_SIDE_EFFECTS__
function l_(e, t) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...D(t)
  });
}
// @__NO_SIDE_EFFECTS__
function u_(e, t) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...D(t)
  });
}
// @__NO_SIDE_EFFECTS__
function c_(e, t) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...D(t)
  });
}
// @__NO_SIDE_EFFECTS__
function d_(e, t) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...D(t)
  });
}
// @__NO_SIDE_EFFECTS__
function f_(e, t) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...D(t)
  });
}
// @__NO_SIDE_EFFECTS__
function p_(e, t) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...D(t)
  });
}
// @__NO_SIDE_EFFECTS__
function h_(e, t) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...D(t)
  });
}
// @__NO_SIDE_EFFECTS__
function m_(e) {
  return new e({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function g_(e, t) {
  return new e({
    type: "never",
    ...D(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Uu(e, t) {
  return new bb({
    check: "max_length",
    ...D(t),
    maximum: e
  });
}
// @__NO_SIDE_EFFECTS__
function Jn(e, t) {
  return new vb({
    check: "min_length",
    ...D(t),
    minimum: e
  });
}
// @__NO_SIDE_EFFECTS__
function Fu(e, t) {
  return new _b({
    check: "length_equals",
    ...D(t),
    length: e
  });
}
// @__NO_SIDE_EFFECTS__
function y_(e, t) {
  return new Eb({
    check: "string_format",
    format: "regex",
    ...D(t),
    pattern: e
  });
}
// @__NO_SIDE_EFFECTS__
function w_(e) {
  return new Ab({
    check: "string_format",
    format: "lowercase",
    ...D(e)
  });
}
// @__NO_SIDE_EFFECTS__
function b_(e) {
  return new Pb({
    check: "string_format",
    format: "uppercase",
    ...D(e)
  });
}
// @__NO_SIDE_EFFECTS__
function v_(e, t) {
  return new Ob({
    check: "string_format",
    format: "includes",
    ...D(t),
    includes: e
  });
}
// @__NO_SIDE_EFFECTS__
function __(e, t) {
  return new Sb({
    check: "string_format",
    format: "starts_with",
    ...D(t),
    prefix: e
  });
}
// @__NO_SIDE_EFFECTS__
function E_(e, t) {
  return new Ib({
    check: "string_format",
    format: "ends_with",
    ...D(t),
    suffix: e
  });
}
// @__NO_SIDE_EFFECTS__
function Lt(e) {
  return new Rb({
    check: "overwrite",
    tx: e
  });
}
// @__NO_SIDE_EFFECTS__
function A_(e) {
  return /* @__PURE__ */ Lt((t) => t.normalize(e));
}
// @__NO_SIDE_EFFECTS__
function P_() {
  return /* @__PURE__ */ Lt((e) => e.trim());
}
// @__NO_SIDE_EFFECTS__
function O_() {
  return /* @__PURE__ */ Lt((e) => e.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function S_() {
  return /* @__PURE__ */ Lt((e) => e.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function I_() {
  return /* @__PURE__ */ Lt((e) => tw(e));
}
// @__NO_SIDE_EFFECTS__
function R_(e, t, n) {
  return new e({
    type: "array",
    element: t,
    // get element() {
    //   return element;
    // },
    ...D(n)
  });
}
// @__NO_SIDE_EFFECTS__
function $_(e, t, n) {
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...D(n)
  });
}
// @__NO_SIDE_EFFECTS__
function T_(e, t) {
  const n = /* @__PURE__ */ N_((r) => (r.addIssue = (i) => {
    if (typeof i == "string")
      r.issues.push(cn(i, r.value, n._zod.def));
    else {
      const s = i;
      s.fatal && (s.continue = !1), s.code ?? (s.code = "custom"), "input" in s || (s.input = r.value), s.inst ?? (s.inst = n), s.continue ?? (s.continue = !n._zod.def.abort), r.issues.push(cn(s));
    }
  }, e(r.value, r)), t);
  return n;
}
// @__NO_SIDE_EFFECTS__
function N_(e, t) {
  const n = new Ce({
    check: "custom",
    ...D(t)
  });
  return n._zod.check = e, n;
}
function Yt(e, ...t) {
  for (const n of t)
    for (const r of Reflect.ownKeys(n))
      Object.prototype.propertyIsEnumerable.call(n, r) && wt(e, r, n[r]);
  return e;
}
function ju(e) {
  let t = (e == null ? void 0 : e.target) ?? "draft-2020-12";
  return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
    processors: e.processors ?? {},
    metadataRegistry: (e == null ? void 0 : e.metadata) ?? Zt,
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
function bn(e, t, n, r, i) {
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
  const a = { schema: {}, count: 1, cycle: void 0, path: n.path };
  t.seen.set(e, a), t.sharedDefsExtractedFor = void 0, t.sharedEmitDoneFor = void 0;
  const o = (d = (c = e._zod).toJSONSchema) == null ? void 0 : d.call(c);
  if (o)
    a.schema = o;
  else {
    const f = {
      ...n,
      schemaPath: [...n.schemaPath, e],
      path: n.path
    };
    if (e._zod.processJSONSchema)
      e._zod.processJSONSchema(t, a.schema, f);
    else {
      const h = a.schema, m = t.processors[i.type];
      if (!m)
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${i.type}`);
      m(e, t, h, f);
    }
    const p = e._zod.parent;
    p && (a.ref || (a.ref = p), oe(p, t, f), t.seen.get(p).isParent = !0);
  }
  const l = t.metadataRegistry.get(e);
  return l && Yt(a.schema, l), t.io === "input" && ce(e) && (delete a.schema.examples, delete a.schema.default), t.io === "input" && "_prefault" in a.schema && ((r = a.schema).default ?? (r.default = a.schema._prefault)), delete a.schema._prefault, t.seen.get(e).schema;
}
function ba(e) {
  return e.replace(/~/g, "~0").replace(/\//g, "~1");
}
function qu(e, t) {
  var a, o, l, u;
  const n = e.seen.get(t);
  if (!n)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  if (e.external && e.sharedDefsExtractedFor === e.external)
    return;
  const r = /* @__PURE__ */ new Map();
  for (const c of e.seen.entries()) {
    const d = (a = e.metadataRegistry.get(c[0])) == null ? void 0 : a.id;
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
      const v = (m = e.external.registry.get(c[0])) == null ? void 0 : m.id, _ = e.external.uri ?? ((I) => I);
      if (v)
        return { ref: _(v) };
      const A = c[1].defId ?? c[1].schema.id ?? `schema${e.counter++}`;
      return c[1].defId = A, { defId: A, ref: `${_("__shared")}#/${d}/${ba(A)}` };
    }
    const f = "#", p = `${f}/${d}/`;
    if (c[1] === n && !c[1].schema.id)
      return { ref: f };
    const h = c[1].schema.id ?? `__schema${e.counter++}`;
    return { defId: h, ref: p + ba(h) };
  }, s = (c) => {
    if (c[1].schema.$ref)
      return;
    const d = c[1], { ref: f, defId: p } = i(c);
    d.def = { ...d.schema }, p && (d.defId = p);
    const h = d.schema;
    for (const m in h)
      delete h[m];
    h.$ref = f;
  };
  if (e.cycles === "throw")
    for (const c of e.seen.entries()) {
      const d = c[1];
      if (d.cycle)
        throw new Error(`Cycle detected: #/${(o = d.cycle) == null ? void 0 : o.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (const c of e.seen.entries()) {
    const d = c[1];
    if (t === c[0]) {
      s(c);
      continue;
    }
    if (e.external) {
      const p = (l = e.external.registry.get(c[0])) == null ? void 0 : l.id;
      if (t !== c[0] && p) {
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
function Mu(e) {
  const t = e.anyOf;
  if (!Array.isArray(t) || t.length === 0 || e.type !== void 0)
    return;
  const n = [];
  for (const r of t) {
    if (!r || typeof r != "object")
      return;
    Mu(r);
    const i = Object.keys(r);
    if (i.length !== 1 || i[0] !== "type")
      return;
    const s = r.type;
    for (const a of Array.isArray(s) ? s : [s]) {
      if (typeof a != "string")
        return;
      n.includes(a) || n.push(a);
    }
  }
  delete e.anyOf, e.type = n.length === 1 ? n[0] : n;
}
const Vu = /* @__PURE__ */ new Set(["type", "properties", "required", "additionalProperties"]), va = ["oneOf", "anyOf"];
function _a(e) {
  const t = e.additionalProperties;
  return t === void 0 || t === !1 || typeof t != "object" || t === null ? null : Object.keys(t).length ? t : null;
}
function oi(e) {
  var s;
  const t = [];
  for (const a of e) {
    if (typeof a != "object" || a.type !== "object")
      return null;
    for (const o in a)
      if (!Vu.has(o))
        return null;
    t.push(a);
  }
  const n = {}, r = /* @__PURE__ */ new Set();
  for (const a of t) {
    for (const o in a.properties) {
      if (Object.prototype.hasOwnProperty.call(n, o))
        continue;
      const l = [];
      for (const c of t) {
        const d = ((s = c.properties) == null ? void 0 : s[o]) ?? _a(c);
        d != null && (l.some((f) => JSON.stringify(f) === JSON.stringify(d)) || l.push(d));
      }
      const u = l.length === 1 ? l[0] : oi(l) ?? { allOf: l };
      wt(n, o, u);
    }
    for (const o of a.required ?? [])
      r.add(o);
  }
  const i = { type: "object", properties: n };
  if (r.size && (i.required = [...r]), t.every((a) => a.additionalProperties === !1))
    i.additionalProperties = !1;
  else {
    const a = [];
    for (const o of t) {
      const l = _a(o);
      l && !a.some((u) => JSON.stringify(u) === JSON.stringify(l)) && a.push(l);
    }
    a.length === 1 ? i.additionalProperties = a[0] : a.length > 1 && (i.additionalProperties = { allOf: a });
  }
  return i;
}
function k_(e) {
  const t = e.allOf;
  if (!Array.isArray(t) || t.length < 2)
    return;
  for (const i of Vu)
    if (i in e)
      return;
  const n = t.filter((i) => va.some((s) => Array.isArray(i[s])));
  let r = null;
  if (!n.length)
    r = oi(t);
  else {
    const i = n[0], s = va.find((l) => Array.isArray(i[l]));
    if (Object.keys(i).length !== 1)
      return;
    const a = t.filter((l) => l !== i), o = i[s].map((l) => oi([...a, l]));
    if (o.some((l) => !l))
      return;
    r = { [s]: o };
  }
  r && (delete e.allOf, Yt(e, r));
}
function zu(e, t) {
  var o, l, u, c;
  const n = e.seen.get(t);
  if (!n)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const r = (d) => {
    const f = e.seen.get(d);
    if (f.ref === null)
      return;
    const p = f.def ?? f.schema, h = { ...p }, m = f.ref;
    if (f.ref = null, m) {
      r(m);
      const _ = e.seen.get(m), A = _.schema;
      if (A.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (p.allOf = p.allOf ?? [], p.allOf.push(A)) : Yt(p, A), Yt(p, h), d._zod.parent === m)
        for (const T in p)
          T === "$ref" || T === "allOf" || T in h || delete p[T];
      if (A.$ref && _.def)
        for (const T in p)
          T === "$ref" || T === "allOf" || T in _.def && JSON.stringify(p[T]) === JSON.stringify(_.def[T]) && delete p[T];
    }
    const v = d._zod.parent;
    if (v && v !== m) {
      r(v);
      const _ = e.seen.get(v);
      if (_ != null && _.schema.$ref && (p.$ref = _.schema.$ref, _.def))
        for (const A in p)
          A === "$ref" || A === "allOf" || A in _.def && JSON.stringify(p[A]) === JSON.stringify(_.def[A]) && delete p[A];
    }
    e.override({
      zodSchema: d,
      jsonSchema: p,
      path: f.path ?? []
    });
  };
  if (!e.external || e.sharedEmitDoneFor !== e.external) {
    for (const d of [...e.seen.entries()].reverse())
      r(d[0]);
    if (e.target !== "openapi-3.0")
      for (const d of e.seen.entries())
        Mu(d[1].def ?? d[1].schema);
    for (const d of e.deferred)
      d();
    if (e.intersections.length) {
      const d = /* @__PURE__ */ new Map();
      for (const f of e.seen.values())
        for (const p of [f.schema, f.def]) {
          const h = p == null ? void 0 : p.allOf;
          if (!Array.isArray(h))
            continue;
          const m = d.get(h);
          m ? m.push(p) : d.set(h, [p]);
        }
      for (const f of e.intersections)
        for (const p of d.get(f) ?? [])
          k_(p);
    }
  }
  const i = {};
  if (e.target === "draft-2020-12" ? i.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? i.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? i.$schema = "http://json-schema.org/draft-04/schema#" : e.target, (o = e.external) != null && o.uri) {
    const d = (l = e.external.registry.get(t)) == null ? void 0 : l.id;
    if (!d)
      throw new Error("Schema is missing an `id` property");
    i.$id = e.external.uri(d);
  }
  Yt(i, n.defId ? n.schema : n.def ?? n.schema);
  const s = (u = e.metadataRegistry.get(t)) == null ? void 0 : u.id;
  s !== void 0 && i.id === s && delete i.id;
  const a = ((c = e.external) == null ? void 0 : c.defs) ?? {};
  if (!e.external || e.sharedEmitDoneFor !== e.external)
    for (const d of e.seen.entries()) {
      const f = d[1];
      f.def && f.defId && (f.def.id === f.defId && delete f.def.id, wt(a, f.defId, f.def));
    }
  e.external && (e.sharedEmitDoneFor = e.external), e.external || Object.keys(a).length > 0 && (e.target === "draft-2020-12" ? i.$defs = a : i.definitions = a);
  try {
    const d = JSON.parse(JSON.stringify(i));
    return Object.defineProperty(d, "~standard", {
      value: {
        ...t["~standard"],
        jsonSchema: {
          input: Hn(t, "input", e.processors),
          output: Hn(t, "output", e.processors)
        }
      },
      enumerable: !1,
      writable: !1
    }), d;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function ce(e, t) {
  const n = t ?? { seen: /* @__PURE__ */ new Set() };
  if (n.seen.has(e))
    return !1;
  n.seen.add(e);
  const r = e._zod.def;
  if (r.type === "transform")
    return !0;
  if (r.type === "array")
    return ce(r.element, n);
  if (r.type === "set")
    return ce(r.valueType, n);
  if (r.type === "lazy")
    return ce(r.getter(), n);
  if (r.type === "promise" || r.type === "optional" || r.type === "nonoptional" || r.type === "nullable" || r.type === "readonly" || r.type === "default" || r.type === "prefault" || r.type === "catch")
    return ce(r.innerType, n);
  if (r.type === "intersection")
    return ce(r.left, n) || ce(r.right, n);
  if (r.type === "record" || r.type === "map")
    return ce(r.keyType, n) || ce(r.valueType, n);
  if (r.type === "pipe")
    return e._zod.traits.has("$ZodCodec") ? !0 : ce(r.in, n) || ce(r.out, n);
  if (r.type === "object") {
    for (const i in r.shape)
      if (ce(r.shape[i], n))
        return !0;
    return !1;
  }
  if (r.type === "union") {
    for (const i of r.options)
      if (ce(i, n))
        return !0;
    return !1;
  }
  if (r.type === "tuple") {
    for (const i of r.items)
      if (ce(i, n))
        return !0;
    return !!(r.rest && ce(r.rest, n));
  }
  return !1;
}
const D_ = (e, t = {}) => (n) => {
  const r = ju({ ...n, processors: t });
  return oe(e, r), qu(r, e), zu(r, e);
}, Hn = (e, t, n = {}) => (r) => {
  const { libraryOptions: i, target: s } = r ?? {}, a = ju({ ...i ?? {}, target: s, io: t, processors: n });
  return oe(e, a), qu(a, e), zu(a, e);
}, Tt = (e, t, n) => {
  (e[t] === void 0 || n > e[t]) && (e[t] = n);
}, Nt = (e, t, n) => {
  (e[t] === void 0 || n < e[t]) && (e[t] = n);
}, Ea = (e, t) => {
  Tt(e, "minimum", t), Nt(e, "maximum", t);
}, Zu = (e, t) => {
  e.multipleOf ?? (e.multipleOf = []), e.multipleOf.includes(t) || e.multipleOf.push(t);
}, Bu = (e, t) => {
  e.patterns ?? (e.patterns = /* @__PURE__ */ new Set()), e.patterns.add(t);
}, Gu = (e, t) => {
  e.mime = e.mime ? e.mime.filter((n) => t.includes(n)) : [...t];
}, Wu = (e, t) => {
  e.format = t, t.includes("int") && (e.isInt = !0);
}, Aa = (e, t) => Tt(e, "minimum", t.minimum), Pa = (e, t) => Nt(e, "maximum", t.maximum), Oa = (e) => (t, n) => {
  Wu(t, n.format);
  const [r, i] = e[n.format];
  Tt(t, "minimum", r), Nt(t, "maximum", i);
}, Sr = {
  greater_than: (e, t) => Tt(e, t.inclusive ? "minimum" : "exclusiveMinimum", t.value),
  less_than: (e, t) => Nt(e, t.inclusive ? "maximum" : "exclusiveMaximum", t.value),
  multiple_of: (e, t) => Zu(e, t.value),
  number_format: Oa(sw),
  bigint_format: Oa(aw),
  min_length: Aa,
  max_length: Pa,
  length_equals: (e, t) => Ea(e, t.length),
  min_size: Aa,
  max_size: Pa,
  size_equals: (e, t) => Ea(e, t.size),
  string_format: (e, t) => {
    Wu(e, t.format), t.pattern && Bu(e, t.pattern), (t.format === "base64" || t.format === "base64url") && (e.contentEncoding = t.format), (t.local || t.precision === -1) && (e.laxFormat = !0);
  },
  mime_type: (e, t) => Gu(e, t.mime)
};
function Xt(e) {
  var s;
  const t = {}, n = e._zod.def, r = e._zod.traits.has("$ZodCheck") ? [e, ...n.checks ?? []] : n.checks ?? [];
  for (const a of r)
    (s = Sr[a._zod.def.check]) == null || s.call(Sr, t, a._zod.def);
  const i = e._zod.bag;
  i.minimum !== void 0 && Tt(t, "minimum", i.minimum), i.exclusiveMinimum !== void 0 && Tt(t, "exclusiveMinimum", i.exclusiveMinimum), i.maximum !== void 0 && Nt(t, "maximum", i.maximum), i.exclusiveMaximum !== void 0 && Nt(t, "exclusiveMaximum", i.exclusiveMaximum), i.multipleOf !== void 0 && Zu(t, i.multipleOf), i.format !== void 0 && (t.format ?? (t.format = i.format), i.format.includes("int") && (t.isInt = !0)), i.mime && Gu(t, i.mime);
  for (const a of i.patterns ?? [])
    Bu(t, a);
  return t;
}
const x_ = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
}, L_ = /* @__PURE__ */ new Map([
  [Nu, lb],
  [ts, ub]
]), C_ = (e) => L_.get(e) ?? e, U_ = (e, t, n, r) => {
  const i = n;
  i.type = "string";
  const { minimum: s, maximum: a, format: o, patterns: l, contentEncoding: u, laxFormat: c } = Xt(e);
  if (typeof s == "number" && (i.minLength = s), typeof a == "number" && (i.maxLength = a), o && (i.format = x_[o] ?? o, i.format === "" && delete i.format, (o === "time" || c) && delete i.format), u && (i.contentEncoding = u), l && l.size > 0) {
    const d = [...l].map(C_);
    d.length === 1 ? i.pattern = d[0].source : d.length > 1 && (i.allOf = [
      ...d.map((f) => ({
        ...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {},
        pattern: f.source
      }))
    ]);
  }
}, F_ = (e, t, n, r) => {
  n.not = {};
}, j_ = (e, t, n, r) => {
}, q_ = (e, t, n, r) => {
  const i = e._zod.def, s = ti(i.entries);
  if (s.length === 0) {
    n.not = {};
    return;
  }
  s.every((a) => typeof a == "number") && (n.type = "number"), s.every((a) => typeof a == "string") && (n.type = "string"), n.enum = s;
}, M_ = (e, t, n, r) => {
  bn(e, t, n, r, "Custom types cannot be represented in JSON Schema");
}, V_ = (e, t, n, r) => {
  bn(e, t, n, r, "Transforms cannot be represented in JSON Schema");
}, z_ = (e, t, n, r) => {
  const i = n, s = e._zod.def, { minimum: a, maximum: o } = Xt(e);
  typeof a == "number" && (i.minItems = a), typeof o == "number" && (i.maxItems = o), i.type = "array", i.items = oe(s.element, t, {
    ...r,
    path: [...r.path, "items"]
  });
};
function li(e) {
  const t = e._zod.def;
  return t.type === "pipe" && t.in._zod.traits.has("$ZodTransform") ? li(t.out) : t.type === "catch" ? li(t.innerType) : e._zod.optin;
}
const Z_ = (e, t, n, r) => {
  var u;
  const i = n, s = e._zod.def, a = s.shape;
  if (Object.getOwnPropertySymbols(a).length && bn(e, t, i, r, "Symbol keys cannot be represented in JSON Schema"))
    return;
  i.type = "object", i.properties = {};
  for (const c in a)
    wt(i.properties, c, oe(a[c], t, {
      ...r,
      path: [...r.path, "properties", c]
    }));
  const l = [];
  for (const c of Object.keys(a)) {
    const d = s.shape[c];
    (t.io === "input" ? li(d) === void 0 : d._zod.optout === void 0) && l.push(c);
  }
  l.length > 0 && (i.required = l), ((u = s.catchall) == null ? void 0 : u._zod.def.type) === "never" ? i.additionalProperties = !1 : s.catchall ? s.catchall && (i.additionalProperties = oe(s.catchall, t, {
    ...r,
    path: [...r.path, "additionalProperties"]
  })) : t.io === "output" && (i.additionalProperties = !1);
}, B_ = (e, t, n, r) => {
  const i = e._zod.def, s = i.inclusive === !1, a = i.options.map((o, l) => oe(o, t, {
    ...r,
    path: [...r.path, s ? "oneOf" : "anyOf", l]
  }));
  s ? n.oneOf = a : n.anyOf = a;
}, G_ = (e, t, n, r) => {
  const i = e._zod.def, s = oe(i.left, t, {
    ...r,
    path: [...r.path, "allOf", 0]
  }), a = oe(i.right, t, {
    ...r,
    path: [...r.path, "allOf", 1]
  }), o = (u) => "allOf" in u && Object.keys(u).length === 1, l = [
    ...o(s) ? s.allOf : [s],
    ...o(a) ? a.allOf : [a]
  ];
  n.allOf = l, t.intersections.push(l);
}, W_ = (e, t, n, r) => {
  const i = e._zod.def, s = oe(i.innerType, t, r), a = t.seen.get(e);
  t.target === "openapi-3.0" ? (a.ref = i.innerType, n.nullable = !0) : n.anyOf = [s, { type: "null" }];
}, J_ = (e, t, n, r) => {
  const i = e._zod.def;
  oe(i.innerType, t, r);
  const s = t.seen.get(e);
  s.ref = i.innerType;
}, ns = Symbol();
function Ju(e, t, n, r, i) {
  let s = !1;
  const a = JSON.stringify(e, (o, l) => typeof l != "bigint" ? l : (s = !0, null));
  return s ? (bn(t, n, r, i, "BigInt defaults cannot be represented in JSON Schema"), ns) : JSON.parse(a);
}
const H_ = (e, t, n, r) => {
  const i = e._zod.def;
  oe(i.innerType, t, r);
  const s = t.seen.get(e);
  s.ref = i.innerType;
  const a = Ju(i.defaultValue, e, t, n, r);
  a !== ns && (n.default = a);
}, K_ = (e, t, n, r) => {
  const i = e._zod.def;
  oe(i.innerType, t, r);
  const s = t.seen.get(e);
  if (s.ref = i.innerType, t.io !== "input")
    return;
  const a = Ju(i.defaultValue, e, t, n, r);
  a !== ns && (n._prefault = a);
}, Q_ = (e, t, n, r) => {
  const i = e._zod.def;
  oe(i.innerType, t, r);
  const s = t.seen.get(e);
  s.ref = i.innerType;
  let a;
  try {
    a = i.catchValue(void 0);
  } catch {
    bn(e, t, n, r, "Dynamic catch values are not supported in JSON Schema");
    return;
  }
  n.default = a;
}, Y_ = (e, t, n, r) => {
  const i = e._zod.def, s = i.in._zod.traits.has("$ZodTransform"), a = t.io === "input" ? s ? i.out : i.in : i.out;
  oe(a, t, r);
  const o = t.seen.get(e);
  o.ref = a;
}, X_ = (e, t, n, r) => {
  const i = e._zod.def;
  oe(i.innerType, t, r);
  const s = t.seen.get(e);
  s.ref = i.innerType, n.readOnly = !0;
}, Hu = (e, t, n, r) => {
  const i = e._zod.def;
  oe(i.innerType, t, r);
  const s = t.seen.get(e);
  s.ref = i.innerType;
}, Sa = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]);
function In(e, t, n) {
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
const eE = (e, t) => {
  $w.init(e, t), e.name = "ZodError";
  const n = Object.getPrototypeOf(e);
  Sa.has(n) || (Sa.add(n), In(n, "format", (r) => (i) => kw(r, i)), In(n, "flatten", (r) => (i) => Nw(r, i)), In(n, "addIssue", (r) => (i) => {
    r.issues.push(i), r.message = JSON.stringify(r.issues, ni, 2);
  }), In(n, "addIssues", (r) => (i) => {
    r.issues.push(...i), r.message = JSON.stringify(r.issues, ni, 2);
  }), Object.defineProperty(n, "isEmpty", {
    configurable: !0,
    enumerable: !1,
    get() {
      return this.issues.length === 0;
    }
  }));
}, Ae = /* @__PURE__ */ w("ZodError", eE, void 0, {
  Parent: Error
}), tE = /* @__PURE__ */ Hi(Ae), nE = /* @__PURE__ */ Ki(Ae), rE = /* @__PURE__ */ Qi(Ae), iE = /* @__PURE__ */ Yi(Ae), sE = /* @__PURE__ */ Fw(Ae), aE = /* @__PURE__ */ jw(Ae), oE = /* @__PURE__ */ qw(Ae), lE = /* @__PURE__ */ Mw(Ae), uE = /* @__PURE__ */ Vw(Ae), cE = /* @__PURE__ */ zw(Ae), dE = /* @__PURE__ */ Zw(Ae), fE = /* @__PURE__ */ Bw(Ae);
function pE() {
  Le.localeError || st(Fv());
}
function rs() {
  Le.memoizer || st({ memoizer: Lv() });
}
const se = /* @__PURE__ */ w("ZodType", (e, t) => (pE(), ie.init(e, t), e.def = t, e.type = t.type, e), {
  check(...e) {
    const t = this.def;
    return this.clone(me(t, {
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
    return it(this, e, t);
  },
  brand() {
    return this;
  },
  register(e, t) {
    return e.add(this, t), this;
  },
  refine(e, t) {
    return this.check(uA(e, t));
  },
  superRefine(e, t) {
    return this.check(cA(e, t));
  },
  overwrite(e) {
    return this.check(/* @__PURE__ */ Lt(e));
  },
  optional() {
    return Ra(this);
  },
  exactOptional() {
    return KE(this);
  },
  nullable() {
    return $a(this);
  },
  nullish() {
    return Ra($a(this));
  },
  nonoptional(e) {
    return nA(this, e);
  },
  array() {
    return ME(this);
  },
  or(e) {
    return ZE([this, e]);
  },
  and(e) {
    return GE(this, e);
  },
  transform(e) {
    return Ta(this, HE(e));
  },
  default(e) {
    return XE(this, e);
  },
  prefault(e) {
    return tA(this, e);
  },
  catch(e) {
    return iA(this, e);
  },
  pipe(e) {
    return Ta(this, e);
  },
  readonly() {
    return oA(this);
  },
  describe(e) {
    const t = this.clone();
    return Zt.add(t, { description: e }), t;
  },
  meta(...e) {
    if (e.length === 0)
      return Zt.get(this);
    const t = this.clone();
    return Zt.add(t, e[0]), t;
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
    return _u(this, "~standard", {
      ...Su(this),
      jsonSchema: {
        input: Hn(this, "input"),
        output: Hn(this, "output")
      }
    });
  },
  set "~standard"(e) {
    tt(this, "~standard", e);
  },
  parse: function e(t, n) {
    return tE(this, t, n, { callee: e });
  },
  parseAsync: async function e(t, n) {
    return await nE(this, t, n, { callee: e });
  },
  safeParse(e, t) {
    return rE(this, e, t);
  },
  async safeParseAsync(e, t) {
    return iE(this, e, t);
  },
  // `spa` is an alias: same function object as `safeParseAsync`, as before.
  get spa() {
    return this == null ? void 0 : this.safeParseAsync;
  },
  set spa(e) {
    tt(this, "spa", e);
  },
  validate(e, t) {
    return Lw(this, e, t);
  },
  validateAsync(e, t) {
    return Uw(this, e, t);
  },
  encode: function e(t, n) {
    return sE(this, t, n, { callee: e });
  },
  decode: function e(t, n) {
    return aE(this, t, n, { callee: e });
  },
  encodeAsync: async function e(t, n) {
    return await oE(this, t, n, { callee: e });
  },
  decodeAsync: async function e(t, n) {
    return await lE(this, t, n, { callee: e });
  },
  safeEncode(e, t) {
    return uE(this, e, t);
  },
  safeDecode(e, t) {
    return cE(this, e, t);
  },
  async safeEncodeAsync(e, t) {
    return dE(this, e, t);
  },
  async safeDecodeAsync(e, t) {
    return fE(this, e, t);
  },
  toJSONSchema(e) {
    return D_(this, {})(e);
  },
  // Reads through to the registry on every access, so it must not cache.
  get description() {
    var e;
    return (e = Zt.get(this)) == null ? void 0 : e.description;
  },
  // No setter: `schema._def = x` throws, as it did when `_def` was a non-writable own property.
  get _def() {
    return this._zod.def;
  }
}), Ku = /* @__PURE__ */ w(
  "_ZodString",
  (e, t) => {
    es.init(e, t), se.init(e, t), e._zod.processJSONSchema = (n, r, i) => U_(e, n, r);
  },
  /* @__PURE__ */ yw({
    format: (e) => Xt(e).format ?? null,
    minLength: (e) => Xt(e).minimum ?? null,
    maxLength: (e) => Xt(e).maximum ?? null
  }, {
    regex(...e) {
      return this.check(/* @__PURE__ */ y_(...e));
    },
    includes(...e) {
      return this.check(/* @__PURE__ */ v_(...e));
    },
    startsWith(...e) {
      return this.check(/* @__PURE__ */ __(...e));
    },
    endsWith(...e) {
      return this.check(/* @__PURE__ */ E_(...e));
    },
    min(...e) {
      return this.check(/* @__PURE__ */ Jn(...e));
    },
    max(...e) {
      return this.check(/* @__PURE__ */ Uu(...e));
    },
    length(...e) {
      return this.check(/* @__PURE__ */ Fu(...e));
    },
    nonempty(...e) {
      return this.check(/* @__PURE__ */ Jn(1, ...e));
    },
    lowercase(e) {
      return this.check(/* @__PURE__ */ w_(e));
    },
    uppercase(e) {
      return this.check(/* @__PURE__ */ b_(e));
    },
    trim() {
      return this.check(/* @__PURE__ */ P_());
    },
    normalize(...e) {
      return this.check(/* @__PURE__ */ A_(...e));
    },
    toLowerCase() {
      return this.check(/* @__PURE__ */ O_());
    },
    toUpperCase() {
      return this.check(/* @__PURE__ */ S_());
    },
    slugify() {
      return this.check(/* @__PURE__ */ I_());
    }
  })
), hE = /* @__PURE__ */ w("ZodString", (e, t) => {
  es.init(e, t), Ku.init(e, t);
}, {
  email(e) {
    return this.check(/* @__PURE__ */ zv(bE, e));
  },
  url(e) {
    return this.check(/* @__PURE__ */ Hv(_E, e));
  },
  jwt(e) {
    return this.check(/* @__PURE__ */ c_(CE, e));
  },
  emoji(e) {
    return this.check(/* @__PURE__ */ Kv(EE, e));
  },
  guid(e) {
    return this.check(/* @__PURE__ */ Zv(vE, e));
  },
  uuid(e) {
    return this.check(/* @__PURE__ */ Bv(Rn, e));
  },
  uuidv4(e) {
    return this.check(/* @__PURE__ */ Gv(Rn, e));
  },
  uuidv6(e) {
    return this.check(/* @__PURE__ */ Wv(Rn, e));
  },
  uuidv7(e) {
    return this.check(/* @__PURE__ */ Jv(Rn, e));
  },
  nanoid(e) {
    return this.check(/* @__PURE__ */ Qv(AE, e));
  },
  cuid(e) {
    return this.check(/* @__PURE__ */ Yv(PE, e));
  },
  cuid2(e) {
    return this.check(/* @__PURE__ */ Xv(OE, e));
  },
  ulid(e) {
    return this.check(/* @__PURE__ */ e_(SE, e));
  },
  base64(e) {
    return this.check(/* @__PURE__ */ o_(DE, e));
  },
  base64url(e) {
    return this.check(/* @__PURE__ */ l_(xE, e));
  },
  xid(e) {
    return this.check(/* @__PURE__ */ t_(IE, e));
  },
  ksuid(e) {
    return this.check(/* @__PURE__ */ n_(RE, e));
  },
  ipv4(e) {
    return this.check(/* @__PURE__ */ r_($E, e));
  },
  ipv6(e) {
    return this.check(/* @__PURE__ */ i_(TE, e));
  },
  cidrv4(e) {
    return this.check(/* @__PURE__ */ s_(NE, e));
  },
  cidrv6(e) {
    return this.check(/* @__PURE__ */ a_(kE, e));
  },
  e164(e) {
    return this.check(/* @__PURE__ */ u_(LE, e));
  },
  datetime(e) {
    return this.check(/* @__PURE__ */ d_(mE, e));
  },
  date(e) {
    return this.check(/* @__PURE__ */ f_(gE, e));
  },
  time(e) {
    return this.check(/* @__PURE__ */ p_(yE, e));
  },
  duration(e) {
    return this.check(/* @__PURE__ */ h_(wE, e));
  }
});
function te(e) {
  return /* @__PURE__ */ Vv(hE, e);
}
const Q = /* @__PURE__ */ w("ZodStringFormat", (e, t) => {
  K.init(e, t), Ku.init(e, t);
}), mE = /* @__PURE__ */ w("ZodISODateTime", (e, t) => {
  Jb.init(e, t), Q.init(e, t);
}), gE = /* @__PURE__ */ w("ZodISODate", (e, t) => {
  Hb.init(e, t), Q.init(e, t);
}), yE = /* @__PURE__ */ w("ZodISOTime", (e, t) => {
  Kb.init(e, t), Q.init(e, t);
}), wE = /* @__PURE__ */ w("ZodISODuration", (e, t) => {
  Qb.init(e, t), Q.init(e, t);
}), bE = /* @__PURE__ */ w("ZodEmail", (e, t) => {
  xb.init(e, t), Q.init(e, t);
}), vE = /* @__PURE__ */ w("ZodGUID", (e, t) => {
  kb.init(e, t), Q.init(e, t);
}), Rn = /* @__PURE__ */ w("ZodUUID", (e, t) => {
  Db.init(e, t), Q.init(e, t);
}), _E = /* @__PURE__ */ w("ZodURL", (e, t) => {
  qb.init(e, t), Q.init(e, t);
}), EE = /* @__PURE__ */ w("ZodEmoji", (e, t) => {
  Mb.init(e, t), Q.init(e, t);
}), AE = /* @__PURE__ */ w("ZodNanoID", (e, t) => {
  Vb.init(e, t), Q.init(e, t);
}), PE = /* @__PURE__ */ w("ZodCUID", (e, t) => {
  zb.init(e, t), Q.init(e, t);
}), OE = /* @__PURE__ */ w("ZodCUID2", (e, t) => {
  Zb.init(e, t), Q.init(e, t);
}), SE = /* @__PURE__ */ w("ZodULID", (e, t) => {
  Bb.init(e, t), Q.init(e, t);
}), IE = /* @__PURE__ */ w("ZodXID", (e, t) => {
  Gb.init(e, t), Q.init(e, t);
}), RE = /* @__PURE__ */ w("ZodKSUID", (e, t) => {
  Wb.init(e, t), Q.init(e, t);
}), $E = /* @__PURE__ */ w("ZodIPv4", (e, t) => {
  Yb.init(e, t), Q.init(e, t);
}), TE = /* @__PURE__ */ w("ZodIPv6", (e, t) => {
  ev.init(e, t), Q.init(e, t);
}), NE = /* @__PURE__ */ w("ZodCIDRv4", (e, t) => {
  tv.init(e, t), Q.init(e, t);
}), kE = /* @__PURE__ */ w("ZodCIDRv6", (e, t) => {
  rv.init(e, t), Q.init(e, t);
}), DE = /* @__PURE__ */ w("ZodBase64", (e, t) => {
  iv.init(e, t), Q.init(e, t);
}), xE = /* @__PURE__ */ w("ZodBase64URL", (e, t) => {
  av.init(e, t), Q.init(e, t);
}), LE = /* @__PURE__ */ w("ZodE164", (e, t) => {
  ov.init(e, t), Q.init(e, t);
}), CE = /* @__PURE__ */ w("ZodJWT", (e, t) => {
  uv.init(e, t), Q.init(e, t);
}), UE = /* @__PURE__ */ w("ZodUnknown", (e, t) => {
  cv.init(e, t), se.init(e, t), e._zod.processJSONSchema = (n, r, i) => j_();
});
function Ia() {
  return /* @__PURE__ */ m_(UE);
}
const FE = /* @__PURE__ */ w("ZodNever", (e, t) => {
  dv.init(e, t), se.init(e, t), e._zod.processJSONSchema = (n, r, i) => F_(e, n, r);
});
function jE(e) {
  return /* @__PURE__ */ g_(FE, e);
}
const qE = /* @__PURE__ */ w("ZodArray", (e, t) => {
  rs(), hv.init(e, t), se.init(e, t), e._zod.processJSONSchema = (n, r, i) => z_(e, n, r, i), e.element = t.element;
}, {
  min(e, t) {
    return this.check(/* @__PURE__ */ Jn(e, t));
  },
  nonempty(e) {
    return this.check(/* @__PURE__ */ Jn(1, e));
  },
  max(e, t) {
    return this.check(/* @__PURE__ */ Uu(e, t));
  },
  length(e, t) {
    return this.check(/* @__PURE__ */ Fu(e, t));
  },
  unwrap() {
    return this.element;
  }
});
function ME(e, t) {
  return /* @__PURE__ */ R_(qE, e, t);
}
const VE = /* @__PURE__ */ w("ZodObject", (e, t) => {
  rs(), yv.init(e, t), se.init(e, t), e._zod.processJSONSchema = (n, r, i) => Z_(e, n, r, i), _w(e, "shape", (n) => n._zod.def.shape, !1);
}, {
  keyof() {
    return WE(Object.keys(this._zod.def.shape));
  },
  catchall(e) {
    return this.clone(me(this._zod.def, { catchall: e }));
  },
  passthrough() {
    return this.clone(me(this._zod.def, { catchall: Ia() }));
  },
  loose() {
    return this.clone(me(this._zod.def, { catchall: Ia() }));
  },
  strict() {
    return this.clone(me(this._zod.def, { catchall: jE() }));
  },
  strip() {
    return this.clone(me(this._zod.def, { catchall: void 0 }));
  },
  extend(e) {
    return uw(this, e);
  },
  safeExtend(e) {
    return cw(this, e);
  },
  merge(e) {
    return dw(this, e);
  },
  pick(e) {
    return ow(this, e);
  },
  omit(e) {
    return lw(this, e);
  },
  partial(...e) {
    return ta(Qu, this, e[0]);
  },
  exactPartial(...e) {
    return ta(Yu, this, e[0], "exactPartial");
  },
  required(...e) {
    return fw(Xu, this, e[0]);
  }
});
function bt(e, t) {
  const n = {
    type: "object",
    shape: e ?? {},
    ...D(t)
  };
  return new VE(n);
}
const zE = /* @__PURE__ */ w("ZodUnion", (e, t) => {
  wv.init(e, t), se.init(e, t), e._zod.processJSONSchema = (n, r, i) => B_(e, n, r, i), e.options = t.options;
});
function ZE(e, t) {
  return new zE({
    type: "union",
    options: e,
    ...D(t)
  });
}
const BE = /* @__PURE__ */ w("ZodIntersection", (e, t) => {
  bv.init(e, t), se.init(e, t), e._zod.processJSONSchema = (n, r, i) => G_(e, n, r, i);
});
function GE(e, t) {
  return new BE({
    type: "intersection",
    left: e,
    right: t
  });
}
const ui = /* @__PURE__ */ w("ZodEnum", (e, t) => {
  vv.init(e, t), se.init(e, t), e._zod.processJSONSchema = (r, i, s) => q_(e, r, i), e.enum = t.entries, e.options = [...e._zod.values];
  const n = new Set(Object.keys(t.entries));
  e.extract = (r, i) => {
    const s = {};
    for (const a of r)
      if (n.has(a))
        s[a] = t.entries[a];
      else
        throw new Error(`Key ${a} not found in enum`);
    return new ui({
      ...t,
      checks: [],
      ...D(i),
      entries: s
    });
  }, e.exclude = (r, i) => {
    const s = { ...t.entries };
    for (const a of r)
      if (n.has(a))
        delete s[a];
      else
        throw new Error(`Key ${a} not found in enum`);
    return new ui({
      ...t,
      checks: [],
      ...D(i),
      entries: s
    });
  };
});
function WE(e, t) {
  const n = Array.isArray(e) ? Object.fromEntries(e.map((r) => [r, r])) : e;
  return new ui({
    type: "enum",
    entries: n,
    ...D(t)
  });
}
const JE = /* @__PURE__ */ w("ZodTransform", (e, t) => {
  rs(), _v.init(e, t), se.init(e, t), e._zod.processJSONSchema = (n, r, i) => V_(e, n, r, i), e._zod.parse = (n, r) => {
    if (r.direction === "backward")
      throw new Eu(e.constructor.name);
    n.addIssue = (s) => {
      if (typeof s == "string")
        n.issues.push(cn(s, n.value, t));
      else {
        const a = s;
        a.fatal && (a.continue = !1), a.code ?? (a.code = "custom"), "input" in a || (a.input = n.value), a.inst ?? (a.inst = e), n.issues.push(cn(a));
      }
    };
    const i = t.transform(n.value, n);
    return i instanceof Promise ? i.then((s) => (n.value = s, n)) : (n.value = i, n);
  };
});
function HE(e) {
  return new JE({
    type: "transform",
    transform: e
  });
}
const Qu = /* @__PURE__ */ w("ZodOptional", (e, t) => {
  xu.init(e, t), se.init(e, t), e._zod.processJSONSchema = (n, r, i) => Hu(e, n, r, i), e.unwrap = () => e._zod.def.innerType;
});
function Ra(e) {
  return new Qu({
    type: "optional",
    innerType: e
  });
}
const Yu = /* @__PURE__ */ w("ZodExactOptional", (e, t) => {
  Ev.init(e, t), se.init(e, t), e._zod.processJSONSchema = (n, r, i) => Hu(e, n, r, i), e.unwrap = () => e._zod.def.innerType;
});
function KE(e) {
  return new Yu({
    type: "optional",
    innerType: e
  });
}
const QE = /* @__PURE__ */ w("ZodNullable", (e, t) => {
  Av.init(e, t), se.init(e, t), e._zod.processJSONSchema = (n, r, i) => W_(e, n, r, i), e.unwrap = () => e._zod.def.innerType;
});
function $a(e) {
  return new QE({
    type: "nullable",
    innerType: e
  });
}
const YE = /* @__PURE__ */ w("ZodDefault", (e, t) => {
  Pv.init(e, t), se.init(e, t), e._zod.processJSONSchema = (n, r, i) => H_(e, n, r, i), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function XE(e, t) {
  return new YE({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : yu(t);
    }
  });
}
const eA = /* @__PURE__ */ w("ZodPrefault", (e, t) => {
  Ov.init(e, t), se.init(e, t), e._zod.processJSONSchema = (n, r, i) => K_(e, n, r, i), e.unwrap = () => e._zod.def.innerType;
});
function tA(e, t) {
  return new eA({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : yu(t);
    }
  });
}
const Xu = /* @__PURE__ */ w("ZodNonOptional", (e, t) => {
  Sv.init(e, t), se.init(e, t), e._zod.processJSONSchema = (n, r, i) => J_(e, n, r, i), e.unwrap = () => e._zod.def.innerType;
});
function nA(e, t) {
  return new Xu({
    type: "nonoptional",
    innerType: e,
    ...D(t)
  });
}
const rA = /* @__PURE__ */ w("ZodCatch", (e, t) => {
  Iv.init(e, t), se.init(e, t), e._zod.processJSONSchema = (n, r, i) => Q_(e, n, r, i), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function iA(e, t) {
  return new rA({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : Aw(t)
  });
}
const sA = /* @__PURE__ */ w("ZodPipe", (e, t) => {
  Rv.init(e, t), se.init(e, t), e._zod.processJSONSchema = (n, r, i) => Y_(e, n, r, i), e.in = t.in, e.out = t.out;
});
function Ta(e, t) {
  return new sA({
    type: "pipe",
    in: e,
    out: t
    // ...util.normalizeParams(params),
  });
}
const aA = /* @__PURE__ */ w("ZodReadonly", (e, t) => {
  $v.init(e, t), se.init(e, t), e._zod.processJSONSchema = (n, r, i) => X_(e, n, r, i), e.unwrap = () => e._zod.def.innerType;
});
function oA(e) {
  return new aA({
    type: "readonly",
    innerType: e
  });
}
const lA = /* @__PURE__ */ w("ZodCustom", (e, t) => {
  Tv.init(e, t), se.init(e, t), e._zod.processJSONSchema = (n, r, i) => M_(e, n, r, i);
});
function uA(e, t = {}) {
  return /* @__PURE__ */ $_(lA, e, t);
}
function cA(e, t) {
  return /* @__PURE__ */ T_(e, t);
}
function dA(e) {
  if (!/^\d{11}$/.test(e) || /^(\d)\1{10}$/.test(e))
    return !1;
  let t = 0;
  for (let i = 0; i < 9; i += 1)
    t += Number(e[i]) * (10 - i);
  if ((t % 11 < 2 ? 0 : 11 - t % 11) !== Number(e[9]))
    return !1;
  t = 0;
  for (let i = 0; i < 10; i += 1)
    t += Number(e[i]) * (11 - i);
  return (t % 11 < 2 ? 0 : 11 - t % 11) === Number(e[10]);
}
const fA = te().trim().refine(
  (e) => /^\d{11}$/.test(e) || /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(e),
  { message: "CPF_FORMAT_INVALID" }
).transform((e) => e.replace(/[.-]/g, "")).refine(dA, { message: "CPF_INVALID" }), pA = bt({
  accessCode: te().trim().min(1, "ACCESS_CODE_REQUIRED"),
  password: te().min(1, "PASSWORD_REQUIRED")
}).strict(), hA = bt({
  name: te().trim().min(1, "INITIAL_LIBRARIAN_NAME_REQUIRED").max(120),
  email: te().trim().email("INITIAL_LIBRARIAN_EMAIL_INVALID").max(254),
  cpf: fA,
  accessCode: te().trim().min(1, "INITIAL_LIBRARIAN_ACCESS_CODE_REQUIRED").max(64),
  password: te().min(1, "INITIAL_LIBRARIAN_PASSWORD_REQUIRED").max(128)
}).strict(), mA = bt({
  currentPassword: te().min(1, "CURRENT_PASSWORD_REQUIRED"),
  newPassword: te().min(12, "PASSWORD_TOO_SHORT")
}).strict(), gA = 12;
async function ci(e) {
  return go.hash(e, gA);
}
async function Ir(e, t) {
  return go.compare(e, t);
}
const yA = 3, wA = 15;
class bA {
  async provisionInitialLibrarian(t) {
    if (await U.librarian.count() > 0) return !1;
    const n = t, i = [
      "name",
      "email",
      "cpf",
      "accessCode",
      "password"
    ].filter(
      (p) => typeof (n == null ? void 0 : n[p]) != "string" || !n[p].trim()
    );
    if (i.length > 0) {
      const p = {
        name: "INITIAL_LIBRARIAN_NAME",
        email: "INITIAL_LIBRARIAN_EMAIL",
        cpf: "INITIAL_LIBRARIAN_CPF",
        accessCode: "INITIAL_LIBRARIAN_ACCESS_CODE",
        password: "INITIAL_LIBRARIAN_PASSWORD"
      };
      throw new Error(
        `INITIAL_LIBRARIAN_CONFIGURATION_MISSING:${i.map((h) => p[h]).join(",")}`
      );
    }
    const s = hA.safeParse(t);
    if (!s.success) {
      const p = s.error.issues[0];
      throw new Error((p == null ? void 0 : p.message) ?? "INVALID_INPUT");
    }
    const { name: a, email: o, cpf: l, accessCode: u, password: c } = s.data;
    if (o.endsWith(".invalid") || u.startsWith("CHANGE_ME") || l === "CHANGE_ME_VALID_CPF" || c.includes("CHANGE_ME") || c === "TROQUE_POR_UMA_SENHA_TEMPORARIA_FORTE")
      throw new Error("INITIAL_LIBRARIAN_CONFIGURATION_HAS_PLACEHOLDERS");
    const d = await ci(c);
    return await U.$transaction(async (p) => {
      if (await p.librarian.count() > 0) return null;
      const h = await p.person.create({
        data: { name: a, email: o, cpf: l }
      }), m = await p.librarian.create({
        data: {
          personId: h.id,
          accessCode: u,
          passwordHash: d,
          isActive: !0,
          mustChangePassword: !0
        }
      });
      return await p.registrationLog.create({
        data: { personId: h.id, createdByLibrarianId: null }
      }), m;
    }) !== null;
  }
  async login(t) {
    const n = pA.safeParse(t);
    if (!n.success) {
      const l = new Set(
        n.error.issues.map((u) => u.path[0])
      );
      throw l.has("accessCode") ? new Error("ACCESS_CODE_REQUIRED") : l.has("password") ? new Error("PASSWORD_REQUIRED") : new Error("INVALID_INPUT");
    }
    const { accessCode: r, password: i } = n.data, s = await U.librarian.findUnique({
      where: { accessCode: r },
      include: { person: !0 }
    });
    if (!s)
      throw await U.accessLog.create({
        data: {
          attemptedAccessCode: r,
          success: !1,
          failureReason: "INVALID_CREDENTIALS"
        }
      }), await U.librarian.count() === 0 ? new Error("NO_CREDENTIALS_CONFIGURED") : new Error("INVALID_CREDENTIALS");
    const a = /* @__PURE__ */ new Date();
    if (s.lockedUntil && s.lockedUntil > a)
      throw await U.accessLog.create({
        data: {
          librarianId: s.id,
          attemptedAccessCode: r,
          success: !1,
          failureReason: "ACCOUNT_LOCKED"
        }
      }), new Error(`ACCOUNT_LOCKED:${s.lockedUntil.toISOString()}`);
    if (!s.isActive)
      throw await U.accessLog.create({
        data: {
          librarianId: s.id,
          attemptedAccessCode: r,
          success: !1,
          failureReason: "ACCOUNT_INACTIVE"
        }
      }), new Error("ACCOUNT_UNAVAILABLE");
    if (!await Ir(i, s.passwordHash)) {
      for (let l = 0; l < 5; l += 1) {
        const u = await U.librarian.findUnique({
          where: { id: s.id }
        });
        if (!u) throw new Error("ACCOUNT_UNAVAILABLE");
        const c = /* @__PURE__ */ new Date();
        if (u.lockedUntil && u.lockedUntil > c)
          throw await U.accessLog.create({
            data: {
              librarianId: s.id,
              attemptedAccessCode: r,
              success: !1,
              failureReason: "ACCOUNT_LOCKED"
            }
          }), new Error(`ACCOUNT_LOCKED:${u.lockedUntil.toISOString()}`);
        const f = (u.lockedUntil && u.lockedUntil <= c ? 0 : u.failedLoginAttempts) + 1, p = f >= yA ? new Date(c.getTime() + wA * 6e4) : null;
        if ((await U.librarian.updateMany({
          where: {
            id: s.id,
            failedLoginAttempts: u.failedLoginAttempts,
            lockedUntil: u.lockedUntil
          },
          data: {
            failedLoginAttempts: f,
            lastFailedLoginAt: c,
            lockedUntil: p
          }
        })).count === 1)
          throw await U.accessLog.create({
            data: {
              librarianId: s.id,
              attemptedAccessCode: r,
              success: !1,
              failureReason: "INVALID_CREDENTIALS"
            }
          }), new Error(
            p ? `ACCOUNT_LOCKED:${p.toISOString()}` : "INVALID_CREDENTIALS"
          );
      }
      throw new Error("LOGIN_RETRY_REQUIRED");
    }
    const o = {
      id: s.id,
      name: s.person.name,
      accessCode: s.accessCode,
      role: "BIBLIOTECARIO",
      mustChangePassword: s.mustChangePassword
    };
    return await U.$transaction([
      U.librarian.update({
        where: { id: s.id },
        data: { failedLoginAttempts: 0, lockedUntil: null }
      }),
      U.accessLog.create({
        data: {
          librarianId: s.id,
          attemptedAccessCode: r,
          success: !0,
          failureReason: null
        }
      })
    ]), { user: o };
  }
  async changePassword(t, n) {
    const r = mA.safeParse(n);
    if (!r.success) {
      const l = new Set(
        r.error.issues.map((u) => u.path[0])
      );
      throw l.has("currentPassword") ? new Error("CURRENT_PASSWORD_REQUIRED") : l.has("newPassword") ? new Error("PASSWORD_TOO_SHORT") : new Error("INVALID_INPUT");
    }
    const { currentPassword: i, newPassword: s } = r.data, a = await U.librarian.findUnique({ where: { id: t } });
    if (!a || !a.isActive) throw new Error("ACCOUNT_UNAVAILABLE");
    if (!await Ir(i, a.passwordHash))
      throw new Error("INVALID_CURRENT_PASSWORD");
    if (await Ir(s, a.passwordHash))
      throw new Error("PASSWORD_MUST_BE_DIFFERENT");
    const o = await ci(s);
    await U.librarian.update({
      where: { id: a.id },
      data: {
        passwordHash: o,
        mustChangePassword: !1,
        failedLoginAttempts: 0,
        lockedUntil: null
      }
    });
  }
}
function vA(e) {
  if (!/^\d{11}$/.test(e) || /^(\d)\1{10}$/.test(e))
    return !1;
  let t = 0;
  for (let i = 0; i < 9; i += 1)
    t += Number(e[i]) * (10 - i);
  if ((t % 11 < 2 ? 0 : 11 - t % 11) !== Number(e[9]))
    return !1;
  t = 0;
  for (let i = 0; i < 10; i += 1)
    t += Number(e[i]) * (11 - i);
  return (t % 11 < 2 ? 0 : 11 - t % 11) === Number(e[10]);
}
const _A = te().trim().refine(
  (e) => /^\d{11}$/.test(e) || /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(e),
  { message: "CPF_FORMAT_INVALID" }
).transform((e) => e.replace(/[.-]/g, "")).refine(vA, { message: "CPF_INVALID" }), is = {
  name: te().trim().min(1, "NAME_REQUIRED").max(120),
  cpf: _A,
  email: te().trim().email("EMAIL_INVALID").max(254)
}, EA = bt({
  ...is,
  registrationNumber: te().trim().min(1, "REGISTRATION_NUMBER_REQUIRED").max(40),
  course: te().trim().min(1, "COURSE_REQUIRED").max(120)
}).strict(), AA = bt({
  ...is,
  registrationNumber: te().trim().min(1, "REGISTRATION_NUMBER_REQUIRED").max(40),
  department: te().trim().min(1, "DEPARTMENT_REQUIRED")
}).strict(), PA = bt({
  ...is
}).strict();
function Rr(e) {
  throw e && typeof e == "object" && "code" in e && e.code === "P2002" ? new Error("DUPLICATE_DATA") : e;
}
class OA {
  async createStudent(t, n) {
    const r = EA.parse(t);
    if (await U.person.findUnique({
      where: { email: r.email }
    }))
      throw new Error("EMAIL_ALREADY_REGISTERED");
    if (await U.student.findUnique({
      where: {
        registrationNumber: r.registrationNumber
      }
    }))
      throw new Error("REGISTRATION_NUMBER_ALREADY_REGISTERED");
    try {
      return await U.$transaction(async (a) => {
        const o = await a.person.create({
          data: {
            name: r.name,
            email: r.email,
            cpf: r.cpf
          }
        }), l = await a.student.create({
          data: {
            personId: o.id,
            registrationNumber: r.registrationNumber,
            course: r.course
          }
        });
        return await a.registrationLog.create({
          data: {
            personId: o.id,
            createdByLibrarianId: n
          }
        }), {
          id: l.id,
          name: o.name,
          email: o.email,
          registrationNumber: l.registrationNumber,
          course: l.course
        };
      });
    } catch (a) {
      Rr(a);
    }
  }
  async createProfessor(t, n) {
    const r = AA.parse(t);
    if (await U.person.findUnique({
      where: { email: r.email }
    }))
      throw new Error("EMAIL_ALREADY_REGISTERED");
    if (await U.professor.findUnique({
      where: {
        registrationNumber: r.registrationNumber
      }
    }))
      throw new Error("REGISTRATION_NUMBER_ALREADY_REGISTERED");
    try {
      return await U.$transaction(async (a) => {
        const o = await a.person.create({
          data: {
            name: r.name,
            email: r.email,
            cpf: r.cpf
          }
        }), l = await a.professor.create({
          data: {
            personId: o.id,
            registrationNumber: r.registrationNumber,
            department: r.department
          }
        });
        return await a.registrationLog.create({
          data: {
            personId: o.id,
            createdByLibrarianId: n
          }
        }), {
          id: l.id,
          name: o.name,
          email: o.email,
          registrationNumber: l.registrationNumber
        };
      });
    } catch (a) {
      Rr(a);
    }
  }
  async createLibrarian(t, n) {
    const r = PA.parse(t);
    if (await U.person.findUnique({
      where: { email: r.email }
    }))
      throw new Error("EMAIL_ALREADY_REGISTERED");
    let s = hr(6).toString("hex").toUpperCase();
    for (; await U.librarian.findUnique({ where: { accessCode: s } }); )
      s = hr(6).toString("hex").toUpperCase();
    const a = hr(18).toString("base64url"), o = await ci(a);
    try {
      return await U.$transaction(async (l) => {
        const u = await l.person.create({
          data: {
            name: r.name,
            email: r.email,
            cpf: r.cpf
          }
        }), c = await l.librarian.create({
          data: {
            personId: u.id,
            accessCode: s,
            passwordHash: o,
            isActive: !0,
            mustChangePassword: !0
          }
        });
        return await l.registrationLog.create({
          data: {
            personId: u.id,
            createdByLibrarianId: n
          }
        }), {
          id: c.id,
          name: u.name,
          email: u.email,
          accessCode: c.accessCode,
          temporaryPassword: a
        };
      });
    } catch (l) {
      Rr(l);
    }
  }
}
const Na = (e) => te().trim().max(e, "TEXT_TOO_LONG").transform((t) => t.length === 0 ? void 0 : t).optional(), ka = te().trim().optional().transform((e) => e === "" ? void 0 : e).refine(
  (e) => e === void 0 || /^\d{4}-\d{2}-\d{2}$/.test(e) && !Number.isNaN(Date.parse(`${e}T00:00:00.000Z`)) && (/* @__PURE__ */ new Date(`${e}T00:00:00.000Z`)).toISOString().slice(0, 10) === e,
  { message: "DATE_INVALID" }
).refine(
  (e) => e === void 0 || e <= (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
  { message: "DATE_CANNOT_BE_FUTURE" }
).transform(
  (e) => e === void 0 ? void 0 : /* @__PURE__ */ new Date(`${e}T00:00:00.000Z`)
), SA = bt({
  name: te().trim().min(1, "NAME_REQUIRED").max(240),
  nationality: te().trim().min(1, "NATIONALITY_REQUIRED").max(100),
  pseudonym: Na(120),
  dateOfBirth: ka,
  dateOfDeath: ka,
  biography: Na(2e3)
}).strict().superRefine((e, t) => {
  e.dateOfBirth && e.dateOfDeath && e.dateOfDeath < e.dateOfBirth && t.addIssue({
    code: "custom",
    path: ["dateOfDeath"],
    message: "DATE_OF_DEATH_BEFORE_BIRTH"
  });
});
function Da(e) {
  return e.normalize("NFD").replace(new RegExp("\\p{Diacritic}", "gu"), "").trim().replace(/\s+/g, " ").toLocaleLowerCase("pt-BR");
}
function IA(e, t) {
  var n;
  return Da(e.name) !== Da(t.name) ? !1 : t.dateOfBirth ? ((n = e.dateOfBirth) == null ? void 0 : n.getTime()) === t.dateOfBirth.getTime() : !0;
}
function RA(e) {
  throw e && typeof e == "object" && "code" in e && e.code === "P2002" ? new Error("DUPLICATE_AUTHOR") : e;
}
class $A {
  async createAuthor(t, n) {
    const r = SA.parse(t);
    try {
      return await U.$transaction(async (i) => {
        if ((await i.author.findMany({
          select: { name: !0, dateOfBirth: !0 }
        })).some((o) => IA(o, r)))
          throw new Error("DUPLICATE_AUTHOR");
        const a = await i.author.create({
          data: {
            name: r.name,
            nationality: r.nationality,
            pseudonym: r.pseudonym,
            dateOfBirth: r.dateOfBirth,
            dateOfDeath: r.dateOfDeath,
            biography: r.biography,
            isActive: !0
          }
        });
        return await i.registrationAuthorLog.create({
          data: {
            authorId: a.id,
            createdByLibrarianId: n
          }
        }), a;
      });
    } catch (i) {
      RA(i);
    }
  }
}
const TA = mc(import.meta.url), { config: NA } = TA("dotenv"), ss = new bA(), as = new OA(), kA = new $A(), ge = /* @__PURE__ */ new Map(), dn = 15 * 60 * 1e3, ec = P.dirname(mo(import.meta.url));
async function pr(e) {
  if (e.senderFrame !== e.sender.mainFrame)
    throw new Error("UNAUTHORIZED");
  const t = ge.get(e.sender.id);
  if (!t)
    throw new Error("NOT_AUTHENTICATED");
  if (Date.now() - t.lastActivityAt >= dn)
    throw ge.delete(e.sender.id), new Error("SESSION_EXPIRED");
  const n = await U.librarian.findUnique({
    where: { id: t.userId },
    select: {
      id: !0,
      isActive: !0,
      mustChangePassword: !0
    }
  });
  if (!n || !n.isActive)
    throw ge.delete(e.sender.id), new Error("ACCOUNT_UNAVAILABLE");
  if (n.mustChangePassword)
    throw new Error("PASSWORD_CHANGE_REQUIRED");
  return t.lastActivityAt = Date.now(), n.id;
}
function tc(e) {
  return `file:${e.replace(/\\/g, "/")}`;
}
function DA(e) {
  if (!e.startsWith("file:")) return e;
  const t = e.slice(5), n = t.indexOf("?"), r = n === -1 ? t : t.slice(0, n), i = n === -1 ? "" : t.slice(n), s = P.isAbsolute(r) ? r : P.resolve(ne.getAppPath(), "prisma", r);
  return `${tc(s)}${i}`;
}
process.env.APP_ROOT = P.join(ec, "..");
const di = process.env.VITE_DEV_SERVER_URL, HA = P.join(process.env.APP_ROOT, "dist-electron"), nc = P.join(process.env.APP_ROOT, "dist");
process.env.VITE_PUBLIC = di ? P.join(process.env.APP_ROOT, "public") : nc;
let lt;
function rc() {
  lt = new po({
    title: "Libapp",
    autoHideMenuBar: !0,
    webPreferences: {
      preload: P.join(ec, "preload.mjs"),
      contextIsolation: !0,
      nodeIntegration: !1,
      sandbox: !0
    }
  });
  const e = lt.webContents.id;
  lt.on("closed", () => {
    ge.delete(e), lt = null;
  }), di ? lt.loadURL(di) : lt.loadFile(P.join(nc, "index.html"));
}
ne.on("window-all-closed", () => {
  process.platform !== "darwin" && (ne.quit(), lt = null);
});
ne.on("activate", () => {
  po.getAllWindows().length === 0 && rc();
});
ze.handle("auth:login", async (e, t) => {
  if (e.senderFrame !== e.sender.mainFrame)
    throw new Error("UNAUTHORIZED");
  const n = await ss.login(t);
  return ge.set(e.sender.id, {
    userId: n.user.id,
    lastActivityAt: Date.now()
  }), n;
});
ze.handle("auth:get-session", async (e) => {
  if (e.senderFrame !== e.sender.mainFrame)
    throw new Error("UNAUTHORIZED");
  const t = ge.get(e.sender.id);
  if (!t) return null;
  if (Date.now() - t.lastActivityAt >= dn)
    return ge.delete(e.sender.id), null;
  const n = await U.librarian.findUnique({
    where: { id: t.userId },
    include: { person: !0 }
  });
  return !n || !n.isActive ? (ge.delete(e.sender.id), null) : (t.lastActivityAt = Date.now(), {
    user: {
      id: n.id,
      name: n.person.name,
      role: "BIBLIOTECARIO",
      mustChangePassword: n.mustChangePassword
    },
    idleTimeoutMs: dn
  });
});
ze.handle("auth:logout", (e) => (ge.delete(e.sender.id), { success: !0 }));
ze.handle("auth:activity", (e) => {
  if (e.senderFrame !== e.sender.mainFrame)
    throw new Error("UNAUTHORIZED");
  const t = ge.get(e.sender.id);
  return !t || Date.now() - t.lastActivityAt >= dn ? (ge.delete(e.sender.id), !1) : (t.lastActivityAt = Date.now(), !0);
});
ze.handle("auth:change-password", async (e, t) => {
  if (e.senderFrame !== e.sender.mainFrame)
    throw new Error("UNAUTHORIZED");
  const n = ge.get(e.sender.id);
  if (!n)
    throw new Error("NOT_AUTHENTICATED");
  if (Date.now() - n.lastActivityAt >= dn)
    throw ge.delete(e.sender.id), new Error("SESSION_EXPIRED");
  return await ss.changePassword(n.userId, t), n.lastActivityAt = Date.now(), { success: !0 };
});
ze.handle("registration:create-student", async (e, t) => {
  const n = await pr(e);
  return as.createStudent(t, n);
});
ze.handle(
  "registration:create-professor",
  async (e, t) => {
    const n = await pr(e);
    return as.createProfessor(t, n);
  }
);
ze.handle(
  "registration:create-librarian",
  async (e, t) => {
    const n = await pr(e);
    return as.createLibrarian(t, n);
  }
);
ze.handle("author:create", async (e, t) => {
  const n = await pr(e);
  return kA.createAuthor(t, n);
});
ne.whenReady().then(async () => {
  oc.setApplicationMenu(null);
  const e = ne.isPackaged ? P.join(ne.getPath("userData"), ".env") : P.join(ne.getAppPath(), ".env");
  NA({ path: e });
  const t = process.env.DATABASE_URL, n = P.join(
    ne.getPath("userData"),
    "lib-app.db"
  ), r = ne.isPackaged ? tc(n) : t && DA(t);
  if (!r)
    throw new Error("DATABASE_URL is required while running in development.");
  if (ne.isPackaged)
    await us(P.dirname(n), { recursive: !0 });
  else if (t != null && t.startsWith("file:")) {
    const a = t.slice(5).split("?")[0], o = P.isAbsolute(a) ? a : P.resolve(ne.getAppPath(), "prisma", a);
    await us(P.dirname(o), { recursive: !0 });
  }
  await Hy(r);
  const i = ne.isPackaged ? P.join(ne.getAppPath(), "prisma", "migrations") : P.resolve(ne.getAppPath(), "prisma", "migrations");
  await Ky(i), await ss.provisionInitialLibrarian({
    name: process.env.INITIAL_LIBRARIAN_NAME,
    email: process.env.INITIAL_LIBRARIAN_EMAIL,
    cpf: process.env.INITIAL_LIBRARIAN_CPF,
    accessCode: process.env.INITIAL_LIBRARIAN_ACCESS_CODE,
    password: process.env.INITIAL_LIBRARIAN_PASSWORD
  }) && console.info(
    "Created the initial librarian account from the provisioning environment."
  ), rc();
}).catch((e) => {
  console.error("Failed to initialize the SQLite database:", e);
  const t = e instanceof Error ? e.message : String(e), n = t.startsWith("INITIAL_LIBRARIAN_");
  lc.showErrorBox(
    "Biblioteca IFCE",
    n ? `The database is empty and the initial librarian could not be created. Configure INITIAL_LIBRARIAN_NAME, INITIAL_LIBRARIAN_EMAIL,INITIAL_LIBRARIAN_CPF, INITIAL_LIBRARIAN_ACCESS_CODE, and INITIAL_LIBRARIAN_PASSWORD in ${ne.isPackaged ? P.join(ne.getPath("userData"), ".env") : P.join(ne.getAppPath(), ".env")}. Restart the app after saving the file. (${t})` : `The application could not initialize its SQLite database. (${t})`
  ), ne.quit();
});
export {
  HA as MAIN_DIST,
  nc as RENDERER_DIST,
  di as VITE_DEV_SERVER_URL
};
