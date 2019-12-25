/* Copyright 2019 Observable, Inc. */ ! function () {
  "use strict";
  var e = {},
      t = {},
      n = 34,
      r = 10,
      i = 13;

  function o(e) {
      return new Function("d", "return {" + e.map((function (e, t) {
          return JSON.stringify(e) + ": d[" + t + "]"
      })).join(",") + "}")
  }

  function s(e) {
      var t = Object.create(null),
          n = [];
      return e.forEach((function (e) {
          for (var r in e) r in t || n.push(t[r] = r)
      })), n
  }

  function a(e, t) {
      var n = e + "",
          r = n.length;
      return r < t ? new Array(t - r + 1).join(0) + n : n
  }

  function l(e) {
      var t = e.getUTCHours(),
          n = e.getUTCMinutes(),
          r = e.getUTCSeconds(),
          i = e.getUTCMilliseconds();
      return isNaN(e) ? "Invalid Date" : function (e) {
          return e < 0 ? "-" + a(-e, 6) : e > 9999 ? "+" + a(e, 6) : a(e, 4)
      }(e.getUTCFullYear()) + "-" + a(e.getUTCMonth() + 1, 2) + "-" + a(e.getUTCDate(), 2) + (i ? "T" + a(t, 2) +
          ":" + a(n, 2) + ":" + a(r, 2) + "." + a(i, 3) + "Z" : r ? "T" + a(t, 2) + ":" + a(n, 2) + ":" + a(r, 2) +
          "Z" : n || t ? "T" + a(t, 2) + ":" + a(n, 2) + "Z" : "")
  }

  function u(a) {
      var u = new RegExp('["' + a + "\n\r]"),
          c = a.charCodeAt(0);

      function d(o, s) {
          var a, l = [],
              u = o.length,
              d = 0,
              h = 0,
              p = u <= 0,
              f = !1;

          function m() {
              if (p) return t;
              if (f) return f = !1, e;
              var s, a, l = d;
              if (o.charCodeAt(l) === n) {
                  for (; d++ < u && o.charCodeAt(d) !== n || o.charCodeAt(++d) === n;);
                  return (s = d) >= u ? p = !0 : (a = o.charCodeAt(d++)) === r ? f = !0 : a === i && (f = !0, o.charCodeAt(
                      d) === r && ++d), o.slice(l + 1, s - 1).replace(/""/g, '"')
              }
              for (; d < u;) {
                  if ((a = o.charCodeAt(s = d++)) === r) f = !0;
                  else if (a === i) f = !0, o.charCodeAt(d) === r && ++d;
                  else if (a !== c) continue;
                  return o.slice(l, s)
              }
              return p = !0, o.slice(l, u)
          }
          for (o.charCodeAt(u - 1) === r && --u, o.charCodeAt(u - 1) === i && --u;
              (a = m()) !== t;) {
              for (var b = []; a !== e && a !== t;) b.push(a), a = m();
              s && null == (b = s(b, h++)) || l.push(b)
          }
          return l
      }

      function h(e, t) {
          return e.map((function (e) {
              return t.map((function (t) {
                  return f(e[t])
              })).join(a)
          }))
      }

      function p(e) {
          return e.map(f).join(a)
      }

      function f(e) {
          return null == e ? "" : e instanceof Date ? l(e) : u.test(e += "") ? '"' + e.replace(/"/g, '""') + '"' : e
      }
      return {
          parse: function (e, t) {
              var n, r, i = d(e, (function (e, i) {
                  if (n) return n(e, i - 1);
                  r = e, n = t ? function (e, t) {
                      var n = o(e);
                      return function (r, i) {
                          return t(n(r), i, e)
                      }
                  }(e, t) : o(e)
              }));
              return i.columns = r || [], i
          },
          parseRows: d,
          format: function (e, t) {
              return null == t && (t = s(e)), [t.map(f).join(a)].concat(h(e, t)).join("\n")
          },
          formatBody: function (e, t) {
              return null == t && (t = s(e)), h(e, t).join("\n")
          },
          formatRows: function (e) {
              return e.map(p).join("\n")
          }
      }
  }
  var c = u(","),
      d = c.format,
      h = c.formatRows;
  u("\t");
  const p = 33,
      f = 17;
  Object.freeze({
      FileAttachment: "FileAttachment",
      Secret: "Secret",
      DatabaseClient: "DatabaseClient"
  }), Object.freeze({
      HISTORY: "HISTORY",
      KEYBOARD_SHORTCUTS: "KEYBOARD_SHORTCUTS",
      FILES: "FILES"
  });

  function m(e, t, n) {
      n = n || {};
      var r = e.ownerDocument,
          i = r.defaultView.CustomEvent;
      "function" == typeof i ? i = new i(t, {
          detail: n
      }) : ((i = r.createEvent("Event")).initEvent(t, !1, !1), i.detail = n), e.dispatchEvent(i)
  }

  function b(e) {
      return Array.isArray(e) || e instanceof Int8Array || e instanceof Int16Array || e instanceof Int32Array || e instanceof Uint8Array ||
          e instanceof Uint8ClampedArray || e instanceof Uint16Array || e instanceof Uint32Array || e instanceof Float32Array ||
          e instanceof Float64Array
  }

  function g(e) {
      return e === (0 | e) + ""
  }

  function v(e) {
      const t = document.createElement("span");
      return t.className = "observablehq--cellname", t.textContent = `${e} = `, t
  }
  const _ = Symbol.prototype.toString;

  function w(e) {
      return _.call(e)
  }
  const {
      getOwnPropertySymbols: y,
      prototype: {
          hasOwnProperty: x
      }
  } = Object, {
      toStringTag: k
  } = Symbol, E = {}, C = y;

  function S(e, t) {
      return x.call(e, t)
  }

  function N(e) {
      return e[k] || e.constructor && e.constructor.name || "Object"
  }

  function q(e, t) {
      try {
          const n = e[t];
          return n && n.constructor, n
      } catch (n) {
          return E
      }
  }
  const A = [{
      symbol: "@@__IMMUTABLE_INDEXED__@@",
      name: "Indexed",
      modifier: !0
  }, {
      symbol: "@@__IMMUTABLE_KEYED__@@",
      name: "Keyed",
      modifier: !0
  }, {
      symbol: "@@__IMMUTABLE_LIST__@@",
      name: "List",
      arrayish: !0
  }, {
      symbol: "@@__IMMUTABLE_MAP__@@",
      name: "Map"
  }, {
      symbol: "@@__IMMUTABLE_ORDERED__@@",
      name: "Ordered",
      modifier: !0,
      prefix: !0
  }, {
      symbol: "@@__IMMUTABLE_RECORD__@@",
      name: "Record"
  }, {
      symbol: "@@__IMMUTABLE_SET__@@",
      name: "Set",
      arrayish: !0,
      setish: !0
  }, {
      symbol: "@@__IMMUTABLE_STACK__@@",
      name: "Stack",
      arrayish: !0
  }];

  function O(e) {
      try {
          let t = A.filter(({
              symbol: t
          }) => !0 === e[t]);
          if (!t.length) return;
          const n = t.find(e => !e.modifier),
              r = "Map" === n.name && t.find(e => e.modifier && e.prefix),
              i = t.some(e => e.arrayish),
              o = t.some(e => e.setish);
          return {
              name: `${r?r.name:""}${n.name}`,
              symbols: t,
              arrayish: i && !o,
              setish: o
          }
      } catch (t) {
          return null
      }
  }
  const {
      getPrototypeOf: L,
      getOwnPropertyDescriptors: j
  } = Object, $ = L({});

  function T(e, t, n, r) {
      let i, o, s, a, l = b(e);
      e instanceof Map ? (i = `Map(${e.size})`, o = P) : e instanceof Set ? (i = `Set(${e.size})`, o = M) : l ? (i =
          `${e.constructor.name}(${e.length})`, o = U) : (a = O(e)) ? (i =
          `Immutable.${a.name}${"Record"===a.name?"":`(${e.size})`}`, l = a.arrayish, o = a.arrayish ? z : a.setish ?
          R : F) : r ? (i = N(e), o = D) : (i = N(e), o = I);
      const u = document.createElement("span");
      u.className = "observablehq--expanded", n && u.appendChild(v(n));
      const c = u.appendChild(document.createElement("a"));
      c.innerHTML =
          "<svg width=8 height=8 class='observablehq--caret'>\n    <path d='M4 7L0 1h8z' fill='currentColor' />\n  </svg>",
          c.appendChild(document.createTextNode(`${i}${l?" [":" {"}`)), c.addEventListener("mouseup", (function (t) {
              t.stopPropagation(), xe(u, J(e, null, n, r))
          })), o = o(e);
      for (let d = 0; !(s = o.next()).done && d < 20; ++d) u.appendChild(s.value);
      if (!s.done) {
          const e = u.appendChild(document.createElement("a"));
          e.className = "observablehq--field", e.style.display = "block", e.appendChild(document.createTextNode(
              "  … more")), e.addEventListener("mouseup", (function (e) {
              e.stopPropagation(), u.insertBefore(s.value, u.lastChild.previousSibling);
              for (let t = 0; !(s = o.next()).done && t < 19; ++t) u.insertBefore(s.value, u.lastChild.previousSibling);
              s.done && u.removeChild(u.lastChild.previousSibling), m(u, "load")
          }))
      }
      return u.appendChild(document.createTextNode(l ? "]" : "}")), u
  }

  function* P(e) {
      for (const [t, n] of e) yield W(t, n);
      yield* I(e)
  }

  function* M(e) {
      for (const t of e) yield Y(t);
      yield* I(e)
  }

  function* R(e) {
      for (const t of e) yield Y(t)
  }

  function* U(e) {
      for (let t = 0, n = e.length; t < n; ++t) t in e && (yield H(t, q(e, t), "observablehq--index"));
      for (const t in e) !g(t) && S(e, t) && (yield H(t, q(e, t), "observablehq--key"));
      for (const t of C(e)) yield H(w(t), q(e, t), "observablehq--symbol")
  }

  function* z(e) {
      let t = 0;
      for (const n = e.size; t < n; ++t) yield H(t, e.get(t), !0)
  }

  function* D(e) {
      for (const n in j(e)) yield H(n, q(e, n), "observablehq--key");
      for (const n of C(e)) yield H(w(n), q(e, n), "observablehq--symbol");
      const t = L(e);
      t && t !== $ && (yield B(t))
  }

  function* I(e) {
      for (const n in e) S(e, n) && (yield H(n, q(e, n), "observablehq--key"));
      for (const n of C(e)) yield H(w(n), q(e, n), "observablehq--symbol");
      const t = L(e);
      t && t !== $ && (yield B(t))
  }

  function* F(e) {
      for (const [t, n] of e) yield H(t, n, "observablehq--key")
  }

  function B(e) {
      const t = document.createElement("div"),
          n = t.appendChild(document.createElement("span"));
      return t.className = "observablehq--field", n.className = "observablehq--prototype-key", n.textContent =
          "  <prototype>", t.appendChild(document.createTextNode(": ")), t.appendChild(ye(e, void 0, void 0, void 0,
              !0)), t
  }

  function H(e, t, n) {
      const r = document.createElement("div"),
          i = r.appendChild(document.createElement("span"));
      return r.className = "observablehq--field", i.className = n, i.textContent = `  ${e}`, r.appendChild(document.createTextNode(
          ": ")), r.appendChild(ye(t)), r
  }

  function W(e, t) {
      const n = document.createElement("div");
      return n.className = "observablehq--field", n.appendChild(document.createTextNode("  ")), n.appendChild(ye(e)),
          n.appendChild(document.createTextNode(" => ")), n.appendChild(ye(t)), n
  }

  function Y(e) {
      const t = document.createElement("div");
      return t.className = "observablehq--field", t.appendChild(document.createTextNode("  ")), t.appendChild(ye(e)),
          t
  }

  function K(e) {
      const t = window.getSelection();
      return "Range" === t.type && (t.containsNode(e, !0) || t.anchorNode.isSelfOrDescendant(e) || t.focusNode.isSelfOrDescendant(
          e))
  }

  function J(e, t, n, r) {
      let i, o, s, a, l = b(e);
      if (e instanceof Map ? (i = `Map(${e.size})`, o = V) : e instanceof Set ? (i = `Set(${e.size})`, o = G) : l ? (
              i = `${e.constructor.name}(${e.length})`, o = Q) : (a = O(e)) ? (i =
              `Immutable.${a.name}${"Record"===a.name?"":`(${e.size})`}`, l = a.arrayish, o = a.arrayish ? Z : a.setish ?
              X : te) : (i = N(e), o = ee), t) {
          const t = document.createElement("span");
          return t.className = "observablehq--shallow", n && t.appendChild(v(n)), t.appendChild(document.createTextNode(
              i)), t.addEventListener("mouseup", (function (n) {
              K(t) || (n.stopPropagation(), xe(t, J(e)))
          })), t
      }
      const u = document.createElement("span");
      u.className = "observablehq--collapsed", n && u.appendChild(v(n));
      const c = u.appendChild(document.createElement("a"));
      c.innerHTML =
          "<svg width=8 height=8 class='observablehq--caret'>\n    <path d='M7 4L1 8V0z' fill='currentColor' />\n  </svg>",
          c.appendChild(document.createTextNode(`${i}${l?" [":" {"}`)), u.addEventListener("mouseup", (function (t) {
              K(u) || (t.stopPropagation(), xe(u, T(e, 0, n, r)))
          }), !0), o = o(e);
      for (let d = 0; !(s = o.next()).done && d < 20; ++d) d > 0 && u.appendChild(document.createTextNode(", ")), u.appendChild(
          s.value);
      return s.done || u.appendChild(document.createTextNode(", …")), u.appendChild(document.createTextNode(l ? "]" :
          "}")), u
  }

  function* V(e) {
      for (const [t, n] of e) yield ie(t, n);
      yield* ee(e)
  }

  function* G(e) {
      for (const t of e) yield ye(t, !0);
      yield* ee(e)
  }

  function* X(e) {
      for (const t of e) yield ye(t, !0)
  }

  function* Z(e) {
      let t = -1,
          n = 0;
      for (const r = e.size; n < r; ++n) n > t + 1 && (yield ne(n - t - 1)), yield ye(e.get(n), !0), t = n;
      n > t + 1 && (yield ne(n - t - 1))
  }

  function* Q(e) {
      let t = -1,
          n = 0;
      for (const r = e.length; n < r; ++n) n in e && (n > t + 1 && (yield ne(n - t - 1)), yield ye(q(e, n), !0),
          t = n);
      n > t + 1 && (yield ne(n - t - 1));
      for (const r in e) !g(r) && S(e, r) && (yield re(r, q(e, r), "observablehq--key"));
      for (const r of C(e)) yield re(w(r), q(e, r), "observablehq--symbol")
  }

  function* ee(e) {
      for (const t in e) S(e, t) && (yield re(t, q(e, t), "observablehq--key"));
      for (const t of C(e)) yield re(w(t), q(e, t), "observablehq--symbol")
  }

  function* te(e) {
      for (const [t, n] of e) yield re(t, n, "observablehq--key")
  }

  function ne(e) {
      const t = document.createElement("span");
      return t.className = "observablehq--empty", t.textContent = 1 === e ? "empty" : `empty × ${e}`, t
  }

  function re(e, t, n) {
      const r = document.createDocumentFragment(),
          i = r.appendChild(document.createElement("span"));
      return i.className = n, i.textContent = e, r.appendChild(document.createTextNode(": ")), r.appendChild(ye(t, !0)),
          r
  }

  function ie(e, t) {
      const n = document.createDocumentFragment();
      return n.appendChild(ye(e, !0)), n.appendChild(document.createTextNode(" => ")), n.appendChild(ye(t, !0)), n
  }

  function oe(e, t) {
      var n = e + "",
          r = n.length;
      return r < t ? new Array(t - r + 1).join(0) + n : n
  }

  function se(e) {
      return e < 0 ? "-" + oe(-e, 6) : e > 9999 ? "+" + oe(e, 6) : oe(e, 4)
  }
  var ae = Error.prototype.toString;
  var le = RegExp.prototype.toString;
  const ue = 20;

  function ce(e) {
      return e.replace(/[\\`\x00-\x09\x0b-\x19]|\${/g, de)
  }

  function de(e) {
      var t = e.charCodeAt(0);
      switch (t) {
          case 8:
              return "\\b";
          case 9:
              return "\\t";
          case 11:
              return "\\v";
          case 12:
              return "\\f";
          case 13:
              return "\\r"
      }
      return t < 16 ? "\\x0" + t.toString(16) : t < 32 ? "\\x" + t.toString(16) : "\\" + e
  }

  function he(e, t) {
      for (var n = 0; t.exec(e);) ++n;
      return n
  }
  var pe = Function.prototype.toString,
      fe = {
          prefix: "async ƒ"
      },
      me = {
          prefix: "async ƒ*"
      },
      be = {
          prefix: "class"
      },
      ge = {
          prefix: "ƒ"
      },
      ve = {
          prefix: "ƒ*"
      };

  function _e(e, t, n) {
      var r = document.createElement("span");
      r.className = "observablehq--function", n && r.appendChild(v(n));
      var i = r.appendChild(document.createElement("span"));
      return i.className = "observablehq--keyword", i.textContent = e.prefix, r.appendChild(document.createTextNode(t)),
          r
  }
  const {
      prototype: {
          toString: we
      }
  } = Object;

  function ye(e, t, n, r, i) {
      let o = typeof e;
      switch (o) {
          case "boolean":
          case "undefined":
              e += "";
              break;
          case "number":
              e = 0 === e && 1 / e < 0 ? "-0" : e + "";
              break;
          case "bigint":
              e += "n";
              break;
          case "symbol":
              e = w(e);
              break;
          case "function":
              return function (e, t) {
                  var n, r, i = pe.call(e);
                  switch (e.constructor && e.constructor.name) {
                      case "AsyncFunction":
                          n = fe;
                          break;
                      case "AsyncGeneratorFunction":
                          n = me;
                          break;
                      case "GeneratorFunction":
                          n = ve;
                          break;
                      default:
                          n = /^class\b/.test(i) ? be : ge
                  }
                  return n === be ? _e(n, "", t) : (r = /^(?:async\s*)?(\w+)\s*=>/.exec(i)) ? _e(n, "(" + r[1] +
                      ")", t) : (r = /^(?:async\s*)?\(\s*(\w+(?:\s*,\s*\w+)*)?\s*\)/.exec(i)) ? _e(n, r[1] ?
                      "(" + r[1].replace(/\s*,\s*/g, ", ") + ")" : "()", t) : (r =
                      /^(?:async\s*)?function(?:\s*\*)?(?:\s*\w+)?\s*\(\s*(\w+(?:\s*,\s*\w+)*)?\s*\)/.exec(i)
                  ) ? _e(n, r[1] ? "(" + r[1].replace(/\s*,\s*/g, ", ") + ")" : "()", t) : _e(n, "(…)", t)
              }(e, r);
          case "string":
              return function (e, t, n, r) {
                  if (!1 === t) {
                      if (he(e, /["\n]/g) <= he(e, /`|\${/g)) {
                          const t = document.createElement("span");
                          r && t.appendChild(v(r));
                          const n = t.appendChild(document.createElement("span"));
                          return n.className = "observablehq--string", n.textContent = JSON.stringify(e), t
                      }
                      const i = e.split("\n");
                      if (i.length > ue && !n) {
                          const n = document.createElement("div");
                          r && n.appendChild(v(r));
                          const o = n.appendChild(document.createElement("span"));
                          o.className = "observablehq--string", o.textContent = "`" + ce(i.slice(0, ue).join("\n"));
                          const s = n.appendChild(document.createElement("span")),
                              a = i.length - ue;
                          return s.textContent = `Show ${a} truncated line${a>1?"s":""}`, s.className =
                              "observablehq--string-expand", s.addEventListener("mouseup", (function (i) {
                                  i.stopPropagation(), xe(n, ye(e, t, !0, r))
                              })), n
                      }
                      const o = document.createElement("span");
                      r && o.appendChild(v(r));
                      const s = o.appendChild(document.createElement("span"));
                      return s.className = `observablehq--string${n?" observablehq--expanded":""}`, s.textContent =
                          "`" + ce(e) + "`", o
                  }
                  const i = document.createElement("span");
                  r && i.appendChild(v(r));
                  const o = i.appendChild(document.createElement("span"));
                  return o.className = "observablehq--string", o.textContent = JSON.stringify(e.length > 100 ?
                      `${e.slice(0,50)}…${e.slice(-49)}` : e), i
              }(e, t, n, r);
          default:
              if (null === e) {
                  o = null, e = "null";
                  break
              }
              if (e instanceof Date) {
                  o = "date", e = function (e) {
                      return isNaN(e) ? "Invalid Date" : function (e) {
                              return 0 === e.getUTCMilliseconds() && 0 === e.getUTCSeconds() && 0 === e.getUTCMinutes() &&
                                  0 === e.getUTCHours()
                          }(e) ? se(e.getUTCFullYear()) + "-" + oe(e.getUTCMonth() + 1, 2) + "-" + oe(e.getUTCDate(),
                              2) : se(e.getFullYear()) + "-" + oe(e.getMonth() + 1, 2) + "-" + oe(e.getDate(), 2) +
                          "T" + oe(e.getHours(), 2) + ":" + oe(e.getMinutes(), 2) + (e.getMilliseconds() ? ":" +
                              oe(e.getSeconds(), 2) + "." + oe(e.getMilliseconds(), 3) : e.getSeconds() ? ":" +
                              oe(e.getSeconds(), 2) : "")
                  }(e);
                  break
              }
              if (e === E) {
                  o = "forbidden", e = "[forbidden]";
                  break
              }
              switch (we.call(e)) {
                  case "[object RegExp]":
                      o = "regexp", e = function (e) {
                          return le.call(e)
                      }(e);
                      break;
                  case "[object Error]":
                  case "[object DOMException]":
                      o = "error", e = function (e) {
                          return e.stack || ae.call(e)
                      }(e);
                      break;
                  default:
                      return (n ? T : J)(e, t, r, i)
              }
      }
      const s = document.createElement("span");
      r && s.appendChild(v(r));
      const a = s.appendChild(document.createElement("span"));
      return a.className = `observablehq--${o}`, a.textContent = e, s
  }

  function xe(e, t) {
      e.classList.contains("observablehq--inspect") && t.classList.add("observablehq--inspect"), e.parentNode.replaceChild(
          t, e), m(t, "load")
  }
  const ke = /\s+\(\d+:\d+\)$/m;
  class Ee {
      constructor(e) {
          if (!e) throw new Error("invalid node");
          this._node = e, e.classList.add("observablehq")
      }
      pending() {
          const {
              _node: e
          } = this;
          e.classList.remove("observablehq--error"), e.classList.add("observablehq--running")
      }
      fulfilled(e, t) {
          const {
              _node: n
          } = this;
          if ((!(e instanceof Element || e instanceof Text) || e.parentNode && e.parentNode !== n) && (e = ye(e,
                  !1, n.firstChild && n.firstChild.classList && n.firstChild.classList.contains(
                      "observablehq--expanded"), t)).classList.add("observablehq--inspect"), n.classList.remove(
                  "observablehq--running", "observablehq--error"), n.firstChild !== e)
              if (n.firstChild) {
                  for (; n.lastChild !== n.firstChild;) n.removeChild(n.lastChild);
                  n.replaceChild(e, n.firstChild)
              } else n.appendChild(e);
          m(n, "update")
      }
      rejected(e, t) {
          const {
              _node: n
          } = this;
          for (n.classList.remove("observablehq--running"), n.classList.add("observablehq--error"); n.lastChild;)
              n.removeChild(n.lastChild);
          var r = document.createElement("div");
          r.className = "observablehq--inspect", t && r.appendChild(v(t)), r.appendChild(document.createTextNode(
              (e + "").replace(ke, ""))), n.appendChild(r), m(n, "error", {
              error: e
          })
      }
  }
  async function Ce(e) {
      const t = await fetch(await e.url());
      if (!t.ok) throw new Error(`Unable to load file: ${e.name}`);
      return t
  }
  Ee.into = function (e) {
      if ("string" == typeof e && null == (e = document.querySelector(e))) throw new Error("container not found");
      return function () {
          return new Ee(e.appendChild(document.createElement("div")))
      }
  };
  class FileAttachment {
      constructor(e, t) {
          Object.defineProperties(this, {
              _url: {
                  value: e
              },
              name: {
                  value: t,
                  enumerable: !0
              }
          })
      }
      async url() {
          return this._url
      }
      async blob() {
          return (await Ce(this)).blob()
      }
      async arrayBuffer() {
          return (await Ce(this)).arrayBuffer()
      }
      async text() {
          return (await Ce(this)).text()
      }
      async json() {
          return (await Ce(this)).json()
      }
      async stream() {
          return (await Ce(this)).body
      }
      async image() {
          const e = await this.url();
          return new Promise((t, n) => {
              const r = new Image;
              new URL(e, document.baseURI).origin !== new URL(location).origin && (r.crossOrigin =
                  "anonymous"), r.onload = () => t(r), r.onerror = () => n(new Error(
                  `Unable to load file: ${this.name}`)), r.src = e
          })
      }
  }

  function Se(e) {
      throw new Error(`File not found: ${e}`)
  }

  function Ne(e) {
      return function () {
          return e
      }
  }
  var qe = {
      math: "http://www.w3.org/1998/Math/MathML",
      svg: "http://www.w3.org/2000/svg",
      xhtml: "http://www.w3.org/1999/xhtml",
      xlink: "http://www.w3.org/1999/xlink",
      xml: "http://www.w3.org/XML/1998/namespace",
      xmlns: "http://www.w3.org/2000/xmlns/"
  };
  var Ae = 0;

  function Oe(e) {
      this.id = e, this.href = new URL(`#${e}`, location) + ""
  }
  Oe.prototype.toString = function () {
      return "url(" + this.href + ")"
  };
  var Le = {
      canvas: function (e, t) {
          var n = document.createElement("canvas");
          return n.width = e, n.height = t, n
      },
      context2d: function (e, t, n) {
          null == n && (n = devicePixelRatio);
          var r = document.createElement("canvas");
          r.width = e * n, r.height = t * n, r.style.width = e + "px";
          var i = r.getContext("2d");
          return i.scale(n, n), i
      },
      download: function (e, t = "untitled", n = "Save") {
          const r = document.createElement("a"),
              i = r.appendChild(document.createElement("button"));
          async function o() {
              await new Promise(requestAnimationFrame), URL.revokeObjectURL(r.href), r.removeAttribute(
                  "href"), i.textContent = n, i.disabled = !1
          }
          return i.textContent = n, r.download = t, r.onclick = async t => {
              if (i.disabled = !0, r.href) return o();
              i.textContent = "Saving…";
              try {
                  const t = await ("function" == typeof e ? e() : e);
                  i.textContent = "Download", r.href = URL.createObjectURL(t)
              } catch (s) {
                  i.textContent = n
              }
              if (t.eventPhase) return o();
              i.disabled = !1
          }, r
      },
      element: function (e, t) {
          var n, r = e += "",
              i = r.indexOf(":");
          i >= 0 && "xmlns" !== (r = e.slice(0, i)) && (e = e.slice(i + 1));
          var o = qe.hasOwnProperty(r) ? document.createElementNS(qe[r], e) : document.createElement(e);
          if (t)
              for (var s in t) i = (r = s).indexOf(":"), n = t[s], i >= 0 && "xmlns" !== (r = s.slice(0, i)) &&
                  (s = s.slice(i + 1)), qe.hasOwnProperty(r) ? o.setAttributeNS(qe[r], s, n) : o.setAttribute(
                      s, n);
          return o
      },
      input: function (e) {
          var t = document.createElement("input");
          return null != e && (t.type = e), t
      },
      range: function (e, t, n) {
          1 === arguments.length && (t = e, e = null);
          var r = document.createElement("input");
          return r.min = e = null == e ? 0 : +e, r.max = t = null == t ? 1 : +t, r.step = null == n ? "any" :
              n = +n, r.type = "range", r
      },
      select: function (e) {
          var t = document.createElement("select");
          return Array.prototype.forEach.call(e, (function (e) {
              var n = document.createElement("option");
              n.value = n.textContent = e, t.appendChild(n)
          })), t
      },
      svg: function (e, t) {
          var n = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          return n.setAttribute("viewBox", [0, 0, e, t]), n.setAttribute("width", e), n.setAttribute("height",
              t), n
      },
      text: function (e) {
          return document.createTextNode(e)
      },
      uid: function (e) {
          return new Oe("O-" + (null == e ? "" : e + "-") + ++Ae)
      }
  };
  var je = {
      buffer: function (e) {
          return new Promise((function (t, n) {
              var r = new FileReader;
              r.onload = function () {
                  t(r.result)
              }, r.onerror = n, r.readAsArrayBuffer(e)
          }))
      },
      text: function (e) {
          return new Promise((function (t, n) {
              var r = new FileReader;
              r.onload = function () {
                  t(r.result)
              }, r.onerror = n, r.readAsText(e)
          }))
      },
      url: function (e) {
          return new Promise((function (t, n) {
              var r = new FileReader;
              r.onload = function () {
                  t(r.result)
              }, r.onerror = n, r.readAsDataURL(e)
          }))
      }
  };

  function $e() {
      return this
  }

  function Te(e, t) {
      let n = !1;
      return {
          [Symbol.iterator]: $e,
          next: () => n ? {
              done: !0
          } : (n = !0, {
              done: !1,
              value: e
          }),
          return: () => (n = !0, t(e), {
              done: !0
          }),
          throw: () => ({
              done: n = !0
          })
      }
  }

  function Pe(e) {
      let t, n, r = !1;
      const i = e((function (e) {
          n ? (n(e), n = null) : r = !0;
          return t = e
      }));
      return {
          [Symbol.iterator]: $e,
          throw: () => ({
              done: !0
          }),
          return: () => (null != i && i(), {
              done: !0
          }),
          next: function () {
              return {
                  done: !1,
                  value: r ? (r = !1, Promise.resolve(t)) : new Promise(e => n = e)
              }
          }
      }
  }

  function Me(e) {
      switch (e.type) {
          case "range":
          case "number":
              return e.valueAsNumber;
          case "date":
              return e.valueAsDate;
          case "checkbox":
              return e.checked;
          case "file":
              return e.multiple ? e.files : e.files[0];
          default:
              return e.value
      }
  }
  var Re = {
      disposable: Te,
      filter: function* (e, t) {
          for (var n, r = -1; !(n = e.next()).done;) t(n.value, ++r) && (yield n.value)
      },
      input: function (e) {
          return Pe((function (t) {
              var n = function (e) {
                      switch (e.type) {
                          case "button":
                          case "submit":
                          case "checkbox":
                              return "click";
                          case "file":
                              return "change";
                          default:
                              return "input"
                      }
                  }(e),
                  r = Me(e);

              function i() {
                  t(Me(e))
              }
              return e.addEventListener(n, i), void 0 !== r && t(r),
                  function () {
                      e.removeEventListener(n, i)
                  }
          }))
      },
      map: function* (e, t) {
          for (var n, r = -1; !(n = e.next()).done;) yield t(n.value, ++r)
      },
      observe: Pe,
      queue: function (e) {
          let t;
          const n = [],
              r = e((function (e) {
                  n.push(e), t && (t(n.shift()), t = null);
                  return e
              }));
          return {
              [Symbol.iterator]: $e,
              throw: () => ({
                  done: !0
              }),
              return: () => (null != r && r(), {
                  done: !0
              }),
              next: function () {
                  return {
                      done: !1,
                      value: n.length ? Promise.resolve(n.shift()) : new Promise(e => t = e)
                  }
              }
          }
      },
      range: function* (e, t, n) {
          e = +e, t = +t, n = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +n;
          for (var r = -1, i = 0 | Math.max(0, Math.ceil((t - e) / n)); ++r < i;) yield e + r * n
      },
      valueAt: function (e, t) {
          if (!(!isFinite(t = +t) || t < 0 || t != t | 0))
              for (var n, r = -1; !(n = e.next()).done;)
                  if (++r === t) return n.value
      },
      worker: function (e) {
          const t = URL.createObjectURL(new Blob([e], {
                  type: "text/javascript"
              })),
              n = new Worker(t);
          return Te(n, () => {
              n.terminate(), URL.revokeObjectURL(t)
          })
      }
  };

  function Ue(e, t) {
      return function (n) {
          var r, i, o, s, a, l, u, c, d = n[0],
              h = [],
              p = null,
              f = -1;
          for (a = 1, l = arguments.length; a < l; ++a) {
              if ((r = arguments[a]) instanceof Node) h[++f] = r, d += "\x3c!--o:" + f + "--\x3e";
              else if (Array.isArray(r)) {
                  for (u = 0, c = r.length; u < c; ++u)(i = r[u]) instanceof Node ? (null === p && (h[++f] = p =
                      document.createDocumentFragment(), d += "\x3c!--o:" + f + "--\x3e"), p.appendChild(
                      i)) : (p = null, d += i);
                  p = null
              } else d += r;
              d += n[a]
          }
          if (p = e(d), ++f > 0) {
              for (o = new Array(f), s = document.createTreeWalker(p, NodeFilter.SHOW_COMMENT, null, !1); s.nextNode();)
                  i = s.currentNode, /^o:/.test(i.nodeValue) && (o[+i.nodeValue.slice(2)] = i);
              for (a = 0; a < f; ++a)(i = o[a]) && i.parentNode.replaceChild(h[a], i)
          }
          return 1 === p.childNodes.length ? p.removeChild(p.firstChild) : 11 === p.nodeType ? ((i = t()).appendChild(
              p), i) : p
      }
  }
  var ze = Ue((function (e) {
          var t = document.createElement("template");
          return t.innerHTML = e.trim(), document.importNode(t.content, !0)
      }), (function () {
          return document.createElement("span")
      })),
      De = {
          newline: /^\n+/,
          code: /^( {4}[^\n]+\n*)+/,
          fences: Xe,
          hr: /^( *[-*_]){3,} *(?:\n+|$)/,
          heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
          nptable: Xe,
          lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
          blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
          list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
          html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
          def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
          table: Xe,
          paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
          text: /^[^\n]+/
      };

  function Ie(e) {
      this.tokens = [], this.tokens.links = {}, this.options = e || Qe.defaults, this.rules = De.normal, this.options
          .gfm && (this.options.tables ? this.rules = De.tables : this.rules = De.gfm)
  }
  De.bullet = /(?:[*+-]|\d+\.)/, De.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/, De.item = Ke(De.item, "gm")(
          /bull/g, De.bullet)(), De.list = Ke(De.list)(/bull/g, De.bullet)("hr",
          "\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def", "\\n+(?=" + De.def.source + ")")(), De.blockquote = Ke(De.blockquote)
      ("def", De.def)(), De._tag =
      "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b",
      De.html = Ke(De.html)("comment", /<!--[\s\S]*?-->/)("closed", /<(tag)[\s\S]+?<\/\1>/)("closing",
          /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g, De._tag)(), De.paragraph = Ke(De.paragraph)("hr", De.hr)(
          "heading", De.heading)("lheading", De.lheading)("blockquote", De.blockquote)("tag", "<" + De._tag)("def",
          De.def)(), De.normal = Ze({}, De), De.gfm = Ze({}, De.normal, {
          fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
          paragraph: /^/,
          heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
      }), De.gfm.paragraph = Ke(De.paragraph)("(?!", "(?!" + De.gfm.fences.source.replace("\\1", "\\2") + "|" + De.list
          .source.replace("\\1", "\\3") + "|")(), De.tables = Ze({}, De.gfm, {
          nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
          table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
      }), Ie.rules = De, Ie.lex = function (e, t) {
          return new Ie(t).lex(e)
      }, Ie.prototype.lex = function (e) {
          return e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g,
              "\n"), this.token(e, !0)
      }, Ie.prototype.token = function (e, t, n) {
          var r, i, o, s, a, l, u, c, d;
          for (e = e.replace(/^ +$/gm, ""); e;)
              if ((o = this.rules.newline.exec(e)) && (e = e.substring(o[0].length), o[0].length > 1 && this.tokens.push({
                      type: "space"
                  })), o = this.rules.code.exec(e)) e = e.substring(o[0].length), o = o[0].replace(/^ {4}/gm, ""),
                  this.tokens.push({
                      type: "code",
                      text: this.options.pedantic ? o : o.replace(/\n+$/, "")
                  });
              else if (o = this.rules.fences.exec(e)) e = e.substring(o[0].length), this.tokens.push({
              type: "code",
              lang: o[2],
              text: o[3] || ""
          });
          else if (o = this.rules.heading.exec(e)) e = e.substring(o[0].length), this.tokens.push({
              type: "heading",
              depth: o[1].length,
              text: o[2]
          });
          else if (t && (o = this.rules.nptable.exec(e))) {
              for (e = e.substring(o[0].length), l = {
                      type: "table",
                      header: o[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
                      align: o[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                      cells: o[3].replace(/\n$/, "").split("\n")
                  }, c = 0; c < l.align.length; c++) /^ *-+: *$/.test(l.align[c]) ? l.align[c] = "right" :
                  /^ *:-+: *$/.test(l.align[c]) ? l.align[c] = "center" : /^ *:-+ *$/.test(l.align[c]) ? l.align[c] =
                  "left" : l.align[c] = null;
              for (c = 0; c < l.cells.length; c++) l.cells[c] = l.cells[c].split(/ *\| */);
              this.tokens.push(l)
          } else if (o = this.rules.lheading.exec(e)) e = e.substring(o[0].length), this.tokens.push({
              type: "heading",
              depth: "=" === o[2] ? 1 : 2,
              text: o[1]
          });
          else if (o = this.rules.hr.exec(e)) e = e.substring(o[0].length), this.tokens.push({
              type: "hr"
          });
          else if (o = this.rules.blockquote.exec(e)) e = e.substring(o[0].length), this.tokens.push({
              type: "blockquote_start"
          }), o = o[0].replace(/^ *> ?/gm, ""), this.token(o, t, !0), this.tokens.push({
              type: "blockquote_end"
          });
          else if (o = this.rules.list.exec(e)) {
              for (e = e.substring(o[0].length), s = o[2], this.tokens.push({
                      type: "list_start",
                      ordered: s.length > 1
                  }), r = !1, d = (o = o[0].match(this.rules.item)).length, c = 0; c < d; c++) u = (l = o[c]).length,
                  ~(l = l.replace(/^ *([*+-]|\d+\.) +/, "")).indexOf("\n ") && (u -= l.length, l = this.options.pedantic ?
                      l.replace(/^ {1,4}/gm, "") : l.replace(new RegExp("^ {1," + u + "}", "gm"), "")), this.options.smartLists &&
                  c !== d - 1 && (s === (a = De.bullet.exec(o[c + 1])[0]) || s.length > 1 && a.length > 1 || (e = o.slice(
                      c + 1).join("\n") + e, c = d - 1)), i = r || /\n\n(?!\s*$)/.test(l), c !== d - 1 && (r = "\n" ===
                      l.charAt(l.length - 1), i || (i = r)), this.tokens.push({
                      type: i ? "loose_item_start" : "list_item_start"
                  }), this.token(l, !1, n), this.tokens.push({
                      type: "list_item_end"
                  });
              this.tokens.push({
                  type: "list_end"
              })
          } else if (o = this.rules.html.exec(e)) e = e.substring(o[0].length), this.tokens.push({
              type: this.options.sanitize ? "paragraph" : "html",
              pre: !this.options.sanitizer && ("pre" === o[1] || "script" === o[1] || "style" === o[1]),
              text: o[0]
          });
          else if (!n && t && (o = this.rules.def.exec(e))) e = e.substring(o[0].length), this.tokens.links[o[1].toLowerCase()] = {
              href: o[2],
              title: o[3]
          };
          else if (t && (o = this.rules.table.exec(e))) {
              for (e = e.substring(o[0].length), l = {
                      type: "table",
                      header: o[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
                      align: o[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                      cells: o[3].replace(/(?: *\| *)?\n$/, "").split("\n")
                  }, c = 0; c < l.align.length; c++) /^ *-+: *$/.test(l.align[c]) ? l.align[c] = "right" :
                  /^ *:-+: *$/.test(l.align[c]) ? l.align[c] = "center" : /^ *:-+ *$/.test(l.align[c]) ? l.align[c] =
                  "left" : l.align[c] = null;
              for (c = 0; c < l.cells.length; c++) l.cells[c] = l.cells[c].replace(/^ *\| *| *\| *$/g, "").split(
                  / *\| */);
              this.tokens.push(l)
          } else if (t && (o = this.rules.paragraph.exec(e))) e = e.substring(o[0].length), this.tokens.push({
              type: "paragraph",
              text: "\n" === o[1].charAt(o[1].length - 1) ? o[1].slice(0, -1) : o[1]
          });
          else if (o = this.rules.text.exec(e)) e = e.substring(o[0].length), this.tokens.push({
              type: "text",
              text: o[0]
          });
          else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0));
          return this.tokens
      };
  var Fe = {
      escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
      autolink: /^<([^ <>]+(@|:\/)[^ <>]+)>/,
      url: Xe,
      tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^<'">])*?>/,
      link: /^!?\[(inside)\]\(href\)/,
      reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
      nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
      strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
      em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
      code: /^(`+)([\s\S]*?[^`])\1(?!`)/,
      br: /^ {2,}\n(?!\s*$)/,
      del: Xe,
      text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
  };

  function Be(e, t) {
      if (this.options = t || Qe.defaults, this.links = e, this.rules = Fe.normal, this.renderer = this.options.renderer ||
          new He, this.renderer.options = this.options, !this.links) throw new Error(
          "Tokens array requires a `links` property.");
      this.options.gfm ? this.options.breaks ? this.rules = Fe.breaks : this.rules = Fe.gfm : this.options.pedantic &&
          (this.rules = Fe.pedantic)
  }

  function He(e) {
      this.options = e || {}
  }

  function We(e) {
      this.tokens = [], this.token = null, this.options = e || Qe.defaults, this.options.renderer = this.options.renderer ||
          new He, this.renderer = this.options.renderer, this.renderer.options = this.options
  }

  function Ye(e, t) {
      return e.replace(t ? /&/g : /&(?!#?\w+;)/g, "&").replace(/</g, "<").replace(/>/g, ">").replace(/"/g,"\"").replace(/'/g, "'")
  }

  function Ke(e, t) {
      return e = e.source, t = t || "",
          function n(r, i) {
              return r ? (i = (i = i.source || i).replace(/(^|[^\[])\^/g, "$1"), e = e.replace(r, i), n) : new RegExp(
                  e, t)
          }
  }

  function Je(e, t) {
      return Ve[" " + e] || (/^[^:]+:\/*[^\/]*$/.test(e) ? Ve[" " + e] = e + "/" : Ve[" " + e] = e.replace(/[^\/]*$/,
              "")), e = Ve[" " + e], "//" === t.slice(0, 2) ? e.replace(/:[\s\S]*/, ":") + t : "/" === t.charAt(0) ?
          e.replace(/(:\/*[^\/]*)[\s\S]*/, "$1") + t : e + t
  }
  Fe._inside = /(?:\[[^\]]*\]|\\[\[\]]|[^\[\]]|\](?=[^\[]*\]))*/, Fe._href =
      /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/, Fe.link = Ke(Fe.link)("inside", Fe._inside)("href", Fe._href)
      (), Fe.reflink = Ke(Fe.reflink)("inside", Fe._inside)(), Fe.normal = Ze({}, Fe), Fe.pedantic = Ze({}, Fe.normal, {
          strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
          em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
      }), Fe.gfm = Ze({}, Fe.normal, {
          escape: Ke(Fe.escape)("])", "~|])")(),
          url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
          del: /^~~(?=\S)([\s\S]*?\S)~~/,
          text: Ke(Fe.text)("]|", "~]|")("|", "|https?://|")()
      }), Fe.breaks = Ze({}, Fe.gfm, {
          br: Ke(Fe.br)("{2,}", "*")(),
          text: Ke(Fe.gfm.text)("{2,}", "*")()
      }), Be.rules = Fe, Be.output = function (e, t, n) {
          return new Be(t, n).output(e)
      }, Be.prototype.output = function (e) {
          for (var t, n, r, i, o = ""; e;)
              if (i = this.rules.escape.exec(e)) e = e.substring(i[0].length), o += i[1];
              else if (i = this.rules.autolink.exec(e)) e = e.substring(i[0].length), "@" === i[2] ? (n = Ye(":" ===
                  i[1].charAt(6) ? this.mangle(i[1].substring(7)) : this.mangle(i[1])), r = this.mangle("mailto:") +
              n) : r = n = Ye(i[1]), o += this.renderer.link(r, null, n);
          else if (this.inLink || !(i = this.rules.url.exec(e))) {
              if (i = this.rules.tag.exec(e)) !this.inLink && /^<a /i.test(i[0]) ? this.inLink = !0 : this.inLink &&
                  /^<\/a>/i.test(i[0]) && (this.inLink = !1), e = e.substring(i[0].length), o += this.options.sanitize ?
                  this.options.sanitizer ? this.options.sanitizer(i[0]) : Ye(i[0]) : i[0];
              else if (i = this.rules.link.exec(e)) e = e.substring(i[0].length), this.inLink = !0, o += this.outputLink(
                  i, {
                      href: i[2],
                      title: i[3]
                  }), this.inLink = !1;
              else if ((i = this.rules.reflink.exec(e)) || (i = this.rules.nolink.exec(e))) {
                  if (e = e.substring(i[0].length), t = (i[2] || i[1]).replace(/\s+/g, " "), !(t = this.links[t.toLowerCase()]) ||
                      !t.href) {
                      o += i[0].charAt(0), e = i[0].substring(1) + e;
                      continue
                  }
                  this.inLink = !0, o += this.outputLink(i, t), this.inLink = !1
              } else if (i = this.rules.strong.exec(e)) e = e.substring(i[0].length), o += this.renderer.strong(this.output(
                  i[2] || i[1]));
              else if (i = this.rules.em.exec(e)) e = e.substring(i[0].length), o += this.renderer.em(this.output(i[2] ||
                  i[1]));
              else if (i = this.rules.code.exec(e)) e = e.substring(i[0].length), o += this.renderer.codespan(Ye(i[2]
                  .trim(), !0));
              else if (i = this.rules.br.exec(e)) e = e.substring(i[0].length), o += this.renderer.br();
              else if (i = this.rules.del.exec(e)) e = e.substring(i[0].length), o += this.renderer.del(this.output(i[
                  1]));
              else if (i = this.rules.text.exec(e)) e = e.substring(i[0].length), o += this.renderer.text(Ye(this.smartypants(
                  i[0])));
              else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0))
          } else e = e.substring(i[0].length), r = n = Ye(i[1]), o += this.renderer.link(r, null, n);
          return o
      }, Be.prototype.outputLink = function (e, t) {
          var n = Ye(t.href),
              r = t.title ? Ye(t.title) : null;
          return "!" !== e[0].charAt(0) ? this.renderer.link(n, r, this.output(e[1])) : this.renderer.image(n, r, Ye(
              e[1]))
      }, Be.prototype.smartypants = function (e) {
          return this.options.smartypants ? e.replace(/---/g, "—").replace(/--/g, "–").replace(
              /(^|[-\u2014\/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,
              "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…") : e
      }, Be.prototype.mangle = function (e) {
          if (!this.options.mangle) return e;
          for (var t, n = "", r = e.length, i = 0; i < r; i++) t = e.charCodeAt(i), Math.random() > .5 && (t = "x" +
              t.toString(16)), n += "&#" + t + ";";
          return n
      }, He.prototype.code = function (e, t, n) {
          if (this.options.highlight) {
              var r = this.options.highlight(e, t);
              null != r && r !== e && (n = !0, e = r)
          }
          return t ? '<pre><code class="' + this.options.langPrefix + Ye(t, !0) + '">' + (n ? e : Ye(e, !0)) +
              "\n</code></pre>\n" : "<pre><code>" + (n ? e : Ye(e, !0)) + "\n</code></pre>"
      }, He.prototype.blockquote = function (e) {
          return "<blockquote>\n" + e + "</blockquote>\n"
      }, He.prototype.html = function (e) {
          return e
      }, He.prototype.heading = function (e, t, n) {
          return "<h" + t + ' id="' + this.options.headerPrefix + n.toLowerCase().replace(/[^\w]+/g, "-") + '">' + e +
              "</h" + t + ">\n"
      }, He.prototype.hr = function () {
          return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
      }, He.prototype.list = function (e, t) {
          var n = t ? "ol" : "ul";
          return "<" + n + ">\n" + e + "</" + n + ">\n"
      }, He.prototype.listitem = function (e) {
          return "<li>" + e + "</li>\n"
      }, He.prototype.paragraph = function (e) {
          return "<p>" + e + "</p>\n"
      }, He.prototype.table = function (e, t) {
          return "<table>\n<thead>\n" + e + "</thead>\n<tbody>\n" + t + "</tbody>\n</table>\n"
      }, He.prototype.tablerow = function (e) {
          return "<tr>\n" + e + "</tr>\n"
      }, He.prototype.tablecell = function (e, t) {
          var n = t.header ? "th" : "td";
          return (t.align ? "<" + n + ' style="text-align:' + t.align + '">' : "<" + n + ">") + e + "</" + n + ">\n"
      }, He.prototype.strong = function (e) {
          return "<strong>" + e + "</strong>"
      }, He.prototype.em = function (e) {
          return "<em>" + e + "</em>"
      }, He.prototype.codespan = function (e) {
          return "<code>" + e + "</code>"
      }, He.prototype.br = function () {
          return this.options.xhtml ? "<br/>" : "<br>"
      }, He.prototype.del = function (e) {
          return "<del>" + e + "</del>"
      }, He.prototype.link = function (e, t, n) {
          if (this.options.sanitize) {
              try {
                  var r = decodeURIComponent(function (e) {
                      return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi, (function (e, t) {
                          return "colon" === (t = t.toLowerCase()) ? ":" : "#" === t.charAt(0) ?
                              "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2),
                                  16)) : String.fromCharCode(+t.substring(1)) : ""
                      }))
                  }(e)).replace(/[^\w:]/g, "").toLowerCase()
              } catch (o) {
                  return n
              }
              if (0 === r.indexOf("javascript:") || 0 === r.indexOf("vbscript:") || 0 === r.indexOf("data:")) return n
          }
          this.options.baseUrl && !Ge.test(e) && (e = Je(this.options.baseUrl, e));
          var i = '<a href="' + e + '"';
          return t && (i += ' title="' + t + '"'), i += ">" + n + "</a>"
      }, He.prototype.image = function (e, t, n) {
          this.options.baseUrl && !Ge.test(e) && (e = Je(this.options.baseUrl, e));
          var r = '<img src="' + e + '" alt="' + n + '"';
          return t && (r += ' title="' + t + '"'), r += this.options.xhtml ? "/>" : ">"
      }, He.prototype.text = function (e) {
          return e
      }, We.parse = function (e, t, n) {
          return new We(t, n).parse(e)
      }, We.prototype.parse = function (e) {
          this.inline = new Be(e.links, this.options, this.renderer), this.tokens = e.reverse();
          for (var t = ""; this.next();) t += this.tok();
          return t
      }, We.prototype.next = function () {
          return this.token = this.tokens.pop()
      }, We.prototype.peek = function () {
          return this.tokens[this.tokens.length - 1] || 0
      }, We.prototype.parseText = function () {
          for (var e = this.token.text;
              "text" === this.peek().type;) e += "\n" + this.next().text;
          return this.inline.output(e)
      }, We.prototype.tok = function () {
          switch (this.token.type) {
              case "space":
                  return "";
              case "hr":
                  return this.renderer.hr();
              case "heading":
                  return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, this.token.text);
              case "code":
                  return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
              case "table":
                  var e, t, n, r, i = "",
                      o = "";
                  for (n = "", e = 0; e < this.token.header.length; e++)({
                      header: !0,
                      align: this.token.align[e]
                  }), n += this.renderer.tablecell(this.inline.output(this.token.header[e]), {
                      header: !0,
                      align: this.token.align[e]
                  });
                  for (i += this.renderer.tablerow(n), e = 0; e < this.token.cells.length; e++) {
                      for (t = this.token.cells[e], n = "", r = 0; r < t.length; r++) n += this.renderer.tablecell(
                          this.inline.output(t[r]), {
                              header: !1,
                              align: this.token.align[r]
                          });
                      o += this.renderer.tablerow(n)
                  }
                  return this.renderer.table(i, o);
              case "blockquote_start":
                  for (o = "";
                      "blockquote_end" !== this.next().type;) o += this.tok();
                  return this.renderer.blockquote(o);
              case "list_start":
                  o = "";
                  for (var s = this.token.ordered;
                      "list_end" !== this.next().type;) o += this.tok();
                  return this.renderer.list(o, s);
              case "list_item_start":
                  for (o = "";
                      "list_item_end" !== this.next().type;) o += "text" === this.token.type ? this.parseText() :
                      this.tok();
                  return this.renderer.listitem(o);
              case "loose_item_start":
                  for (o = "";
                      "list_item_end" !== this.next().type;) o += this.tok();
                  return this.renderer.listitem(o);
              case "html":
                  var a = this.token.pre || this.options.pedantic ? this.token.text : this.inline.output(this.token.text);
                  return this.renderer.html(a);
              case "paragraph":
                  return this.renderer.paragraph(this.inline.output(this.token.text));
              case "text":
                  return this.renderer.paragraph(this.parseText())
          }
      };
  var Ve = {},
      Ge = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

  function Xe() {}

  function Ze(e) {
      for (var t, n, r = 1; r < arguments.length; r++)
          for (n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      return e
  }

  function Qe(e, t, n) {
      if (n || "function" == typeof t) {
          n || (n = t, t = null);
          var r, i, o = (t = Ze({}, Qe.defaults, t || {})).highlight,
              s = 0;
          try {
              r = Ie.lex(e, t)
          } catch (l) {
              return n(l)
          }
          i = r.length;
          var a = function (e) {
              if (e) return t.highlight = o, n(e);
              var i;
              try {
                  i = We.parse(r, t)
              } catch (l) {
                  e = l
              }
              return t.highlight = o, e ? n(e) : n(null, i)
          };
          if (!o || o.length < 3) return a();
          if (delete t.highlight, !i) return a();
          for (; s < r.length; s++) ! function (e) {
              "code" !== e.type ? --i || a() : o(e.text, e.lang, (function (t, n) {
                  return t ? a(t) : null == n || n === e.text ? --i || a() : (e.text = n, e.escaped = !
                      0, void(--i || a()))
              }))
          }(r[s])
      } else try {
          return t && (t = Ze({}, Qe.defaults, t)), We.parse(Ie.lex(e, t), t)
      } catch (l) {
          if (l.message += "\nPlease report this to https://github.com/chjj/marked.", (t || Qe.defaults).silent)
              return "<p>An error occurred:</p><pre>" + Ye(l.message + "", !0) + "</pre>";
          throw l
      }
  }
  Xe.exec = Xe, Qe.options = Qe.setOptions = function (e) {
          return Ze(Qe.defaults, e), Qe
      }, Qe.defaults = {
          gfm: !0,
          tables: !0,
          breaks: !1,
          pedantic: !1,
          sanitize: !1,
          sanitizer: null,
          mangle: !0,
          smartLists: !1,
          silent: !1,
          highlight: null,
          langPrefix: "lang-",
          smartypants: !1,
          headerPrefix: "",
          renderer: new He,
          xhtml: !1,
          baseUrl: null
      }, Qe.Parser = We, Qe.parser = We.parse, Qe.Renderer = He, Qe.Lexer = Ie, Qe.lexer = Ie.lex, Qe.InlineLexer =
      Be, Qe.inlineLexer = Be.output, Qe.parse = Qe;
  const et = "https://cdn.jsdelivr.net/npm/@observablehq/highlight.js@2.0.0/";

  function tt(e) {
      return function () {
          return Ue((function (t) {
              var n = document.createElement("div");
              n.innerHTML = Qe(t, {
                  langPrefix: ""
              }).trim();
              var r = n.querySelectorAll("pre code[class]");
              return r.length > 0 && e(et + "highlight.min.js").then((function (t) {
                  r.forEach((function (n) {
                      function r() {
                          t.highlightBlock(n), n.parentNode.classList.add(
                              "observablehq--md-pre")
                      }
                      t.getLanguage(n.className) ? r() : e(et +
                          "async-languages/index.js").then(r => {
                          if (r.has(n.className)) return e(et +
                              "async-languages/" + r.get(n.className)
                          ).then(e => {
                              t.registerLanguage(n.className,
                                  e)
                          })
                      }).then(r, r)
                  }))
              })), n
          }), (function () {
              return document.createElement("div")
          }))
      }
  }

  function nt(e) {
      let t;
      Object.defineProperties(this, {
          generator: {
              value: Pe(e => void(t = e))
          },
          value: {
              get: () => e,
              set: n => t(e = n)
          }
      }), void 0 !== e && t(e)
  }

  function* rt() {
      for (;;) yield Date.now()
  }
  var it = new Map;

  function ot(e, t) {
      var n;
      return (n = it.get(e = +e)) ? n.then(Ne(t)) : (n = Date.now()) >= e ? Promise.resolve(t) : function (e, t) {
          var n = new Promise((function (n) {
              it.delete(t);
              var r = t - e;
              if (!(r > 0)) throw new Error("invalid time");
              if (r > 2147483647) throw new Error("too long to wait");
              setTimeout(n, r)
          }));
          return it.set(t, n), n
      }(n, e).then(Ne(t))
  }
  var st = {
      delay: function (e, t) {
          return new Promise((function (n) {
              setTimeout((function () {
                  n(t)
              }), e)
          }))
      },
      tick: function (e, t) {
          return ot(Math.ceil((Date.now() + 1) / e) * e, t)
      },
      when: ot
  };

  function at(e, t) {
      if (/^(\w+:)|\/\//i.test(e)) return e;
      if (/^[.]{0,2}\//i.test(e)) return new URL(e, null == t ? location : t).href;
      if (!e.length || /^[\s._]/.test(e) || /\s$/.test(e)) throw new Error("illegal name");
      return "https://unpkg.com/" + e
  }
  const lt = new Map,
      ut = [],
      ct = ut.map,
      dt = ut.some,
      ht = ut.hasOwnProperty,
      pt = "https://cdn.jsdelivr.net/npm/",
      ft = /^((?:@[^\/@]+\/)?[^\/@]+)(?:@([^\/]+))?(?:\/(.*))?$/,
      mt = /^\d+\.\d+\.\d+(-[\w-.+]+)?$/,
      bt = /\.[^\/]*$/,
      gt = ["unpkg", "jsdelivr", "browser", "main"];
  class vt extends Error {
      constructor(e) {
          super(e)
      }
  }

  function _t(e) {
      const t = ft.exec(e);
      return t && {
          name: t[1],
          version: t[2],
          path: t[3]
      }
  }

  function wt(e) {
      const t = `${pt}${e.name}${e.version?`@${e.version}`:""}/package.json`;
      let n = lt.get(t);
      return n || lt.set(t, n = fetch(t).then(e => {
          if (!e.ok) throw new vt("unable to load package.json");
          return e.redirected && !lt.has(e.url) && lt.set(e.url, n), e.json()
      })), n
  }
  vt.prototype.name = vt.name;
  var yt = xt((async function (e, t) {
      if (e.startsWith(pt) && (e = e.substring(pt.length)), /^(\w+:)|\/\//i.test(e)) return e;
      if (/^[.]{0,2}\//i.test(e)) return new URL(e, null == t ? location : t).href;
      if (!e.length || /^[\s._]/.test(e) || /\s$/.test(e)) throw new vt("illegal name");
      const n = _t(e);
      if (!n) return `${pt}${e}`;
      if (!n.version && null != t && t.startsWith(pt)) {
          const e = await wt(_t(t.substring(pt.length)));
          n.version = e.dependencies && e.dependencies[n.name] || e.peerDependencies && e.peerDependencies[
              n.name]
      }
      if (n.path && !bt.test(n.path) && (n.path += ".js"), n.path && n.version && mt.test(n.version))
          return `${pt}${n.name}@${n.version}/${n.path}`;
      const r = await wt(n);
      return `${pt}${r.name}@${r.version}/${n.path||function(e){for(const t of gt){const n=e[t];if("string"==typeof n)return bt.test(n)?n:`${n}.js`}}(r)||"index.js"}`
  }));

  function xt(e) {
      const t = new Map,
          n = i(null);

      function r(e) {
          if ("string" != typeof e) return e;
          let n = t.get(e);
          return n || t.set(e, n = new Promise((t, n) => {
              const r = document.createElement("script");
              r.onload = () => {
                  try {
                      t(ut.pop()(i(e)))
                  } catch (o) {
                      n(new vt("invalid module"))
                  }
                  r.remove()
              }, r.onerror = () => {
                  n(new vt("unable to load module")), r.remove()
              }, r.async = !0, r.src = e, window.define = St, document.head.appendChild(r)
          })), n
      }

      function i(t) {
          return n => Promise.resolve(e(n, t)).then(r)
      }

      function o(e) {
          return arguments.length > 1 ? Promise.all(ct.call(arguments, n)).then(kt) : n(e)
      }
      return o.alias = function (t) {
          return xt((n, r) => n in t && (r = null, "string" != typeof (n = t[n])) ? n : e(n, r))
      }, o.resolve = e, o
  }

  function kt(e) {
      const t = {};
      for (const n of e)
          for (const e in n) ht.call(n, e) && (null == n[e] ? Object.defineProperty(t, e, {
              get: Et(n, e)
          }) : t[e] = n[e]);
      return t
  }

  function Et(e, t) {
      return () => e[t]
  }

  function Ct(e) {
      return "exports" === (e += "") || "module" === e
  }

  function St(e, t, n) {
      const r = arguments.length;
      r < 2 ? (n = e, t = []) : r < 3 && (n = t, t = "string" == typeof e ? [] : e), ut.push(dt.call(t, Ct) ? e => {
          const r = {},
              i = {
                  exports: r
              };
          return Promise.all(ct.call(t, t => "exports" === (t += "") ? r : "module" === t ? i : e(t))).then(e =>
              (n.apply(null, e), i.exports))
      } : e => Promise.all(ct.call(t, e)).then(e => "function" == typeof n ? n.apply(null, e) : n))
  }

  function Nt(e) {
      return null == e ? yt : xt(e)
  }
  St.amd = {};
  var qt = Ue((function (e) {
          var t = document.createElementNS("http://www.w3.org/2000/svg", "g");
          return t.innerHTML = e.trim(), t
      }), (function () {
          return document.createElementNS("http://www.w3.org/2000/svg", "g")
      })),
      At = String.raw;

  function Ot(e) {
      return new Promise((function (t, n) {
          var r = document.createElement("link");
          r.rel = "stylesheet", r.href = e, r.onerror = n, r.onload = t, document.head.appendChild(r)
      }))
  }

  function Lt(e) {
      return function () {
          return Promise.all([e("@observablehq/katex@0.11.1/dist/katex.min.js"), e.resolve(
              "@observablehq/katex@0.11.1/dist/katex.min.css").then(Ot)]).then((function (e) {
              var t = e[0],
                  n = r();

              function r(e) {
                  return function () {
                      var n = document.createElement("div");
                      return t.render(At.apply(String, arguments), n, e), n.removeChild(n.firstChild)
                  }
              }
              return n.options = r, n.block = r({
                  displayMode: !0
              }), n
          }))
      }
  }

  function jt() {
      return Pe((function (e) {
          var t = e(document.body.clientWidth);

          function n() {
              var n = document.body.clientWidth;
              n !== t && e(t = n)
          }
          return window.addEventListener("resize", n),
              function () {
                  window.removeEventListener("resize", n)
              }
      }))
  }

  function $t(e) {
      const t = Nt(e);
      Object.defineProperties(this, {
          DOM: {
              value: Le,
              writable: !0,
              enumerable: !0
          },
          FileAttachment: {
              value: Ne(Se),
              writable: !0,
              enumerable: !0
          },
          Files: {
              value: je,
              writable: !0,
              enumerable: !0
          },
          Generators: {
              value: Re,
              writable: !0,
              enumerable: !0
          },
          html: {
              value: Ne(ze),
              writable: !0,
              enumerable: !0
          },
          md: {
              value: tt(t),
              writable: !0,
              enumerable: !0
          },
          Mutable: {
              value: Ne(nt),
              writable: !0,
              enumerable: !0
          },
          now: {
              value: rt,
              writable: !0,
              enumerable: !0
          },
          Promises: {
              value: st,
              writable: !0,
              enumerable: !0
          },
          require: {
              value: Ne(t),
              writable: !0,
              enumerable: !0
          },
          resolve: {
              value: Ne(at),
              writable: !0,
              enumerable: !0
          },
          svg: {
              value: Ne(qt),
              writable: !0,
              enumerable: !0
          },
          tex: {
              value: Lt(t),
              writable: !0,
              enumerable: !0
          },
          width: {
              value: jt,
              writable: !0,
              enumerable: !0
          }
      })
  }

  function Tt(e, t) {
      this.message = e + "", this.input = t
  }
  Tt.prototype = Object.create(Error.prototype), Tt.prototype.name = "RuntimeError", Tt.prototype.constructor = Tt;
  var Pt = Array.prototype,
      Mt = Pt.map,
      Rt = Pt.forEach;

  function Ut(e) {
      return function () {
          return e
      }
  }

  function zt(e) {
      return e
  }

  function Dt() {}
  var It = 1,
      Ft = 2,
      Bt = 3,
      Ht = {};

  function Wt(e, t, n) {
      null == n && (n = Ht), Object.defineProperties(this, {
          _observer: {
              value: n,
              writable: !0
          },
          _definition: {
              value: Jt,
              writable: !0
          },
          _duplicate: {
              value: void 0,
              writable: !0
          },
          _duplicates: {
              value: void 0,
              writable: !0
          },
          _indegree: {
              value: NaN,
              writable: !0
          },
          _inputs: {
              value: [],
              writable: !0
          },
          _invalidate: {
              value: Dt,
              writable: !0
          },
          _module: {
              value: t
          },
          _name: {
              value: null,
              writable: !0
          },
          _outputs: {
              value: new Set,
              writable: !0
          },
          _promise: {
              value: Promise.resolve(void 0),
              writable: !0
          },
          _reachable: {
              value: n !== Ht,
              writable: !0
          },
          _rejector: {
              value: Vt(this)
          },
          _type: {
              value: e
          },
          _value: {
              value: void 0,
              writable: !0
          },
          _version: {
              value: 0,
              writable: !0
          }
      })
  }

  function Yt(e) {
      e._module._runtime._dirty.add(e), e._outputs.add(this)
  }

  function Kt(e) {
      e._module._runtime._dirty.add(e), e._outputs.delete(this)
  }

  function Jt() {
      throw Jt
  }

  function Vt(e) {
      return function (t) {
          if (t === Jt) throw new Tt(e._name + " is not defined", e._name);
          throw new Tt(e._name + " could not be resolved", e._name)
      }
  }

  function Gt(e) {
      return function () {
          throw new Tt(e + " is defined more than once")
      }
  }

  function Xt(e, t, n) {
      var r = this._module._scope,
          i = this._module._runtime;
      if (this._inputs.forEach(Kt, this), t.forEach(Yt, this), this._inputs = t, this._definition = n, this._value =
          void 0, n === Dt ? i._variables.delete(this) : i._variables.add(this), e == this._name && r.get(e) === this
      ) this._outputs.forEach(i._updates.add, i._updates);
      else {
          var o, s;
          if (this._name)
              if (this._outputs.size) r.delete(this._name), (s = this._module._resolve(this._name))._outputs = this._outputs,
                  this._outputs = new Set, s._outputs.forEach((function (e) {
                      e._inputs[e._inputs.indexOf(this)] = s
                  }), this), s._outputs.forEach(i._updates.add, i._updates), i._dirty.add(s).add(this), r.set(this._name,
                      s);
              else if ((s = r.get(this._name)) === this) r.delete(this._name);
          else {
              if (s._type !== Bt) throw new Error;
              s._duplicates.delete(this), this._duplicate = void 0, 1 === s._duplicates.size && (s = s._duplicates.keys()
                  .next().value, o = r.get(this._name), s._outputs = o._outputs, o._outputs = new Set, s._outputs
                  .forEach((function (e) {
                      e._inputs[e._inputs.indexOf(o)] = s
                  })), s._definition = s._duplicate, s._duplicate = void 0, i._dirty.add(o).add(s), i._updates.add(
                      s), r.set(this._name, s))
          }
          if (this._outputs.size) throw new Error;
          e && ((s = r.get(e)) ? s._type === Bt ? (this._definition = Gt(e), this._duplicate = n, s._duplicates.add(
              this)) : s._type === Ft ? (this._outputs = s._outputs, s._outputs = new Set, this._outputs.forEach(
              (function (e) {
                  e._inputs[e._inputs.indexOf(s)] = this
              }), this), i._dirty.add(s).add(this), r.set(e, this)) : (s._duplicate = s._definition, this._duplicate =
              n, (o = new Wt(Bt, this._module))._name = e, o._definition = this._definition = s._definition =
              Gt(e), o._outputs = s._outputs, s._outputs = new Set, o._outputs.forEach((function (e) {
                  e._inputs[e._inputs.indexOf(s)] = o
              })), o._duplicates = new Set([this, s]), i._dirty.add(s).add(o), i._updates.add(s).add(o), r.set(
                  e, o)) : r.set(e, this)), this._name = e
      }
      return i._updates.add(this), i._compute(), this
  }

  function Zt(e, t = []) {
      Object.defineProperties(this, {
          _runtime: {
              value: e
          },
          _scope: {
              value: new Map
          },
          _builtins: {
              value: new Map([["invalidation", tn], ["visibility", nn], ...t])
          },
          _source: {
              value: null,
              writable: !0
          }
      })
  }

  function Qt(e) {
      return e._name
  }
  Object.defineProperties(Wt.prototype, {
      _pending: {
          value: function () {
              this._observer.pending && this._observer.pending()
          },
          writable: !0,
          configurable: !0
      },
      _fulfilled: {
          value: function (e) {
              this._observer.fulfilled && this._observer.fulfilled(e, this._name)
          },
          writable: !0,
          configurable: !0
      },
      _rejected: {
          value: function (e) {
              this._observer.rejected && this._observer.rejected(e, this._name)
          },
          writable: !0,
          configurable: !0
      },
      define: {
          value: function (e, t, n) {
              switch (arguments.length) {
                  case 1:
                      n = e, e = t = null;
                      break;
                  case 2:
                      n = t, "string" == typeof e ? t = null : (t = e, e = null)
              }
              return Xt.call(this, null == e ? null : e + "", null == t ? [] : Mt.call(t, this._module._resolve,
                  this._module), "function" == typeof n ? n : Ut(n))
          },
          writable: !0,
          configurable: !0
      },
      delete: {
          value: function () {
              return Xt.call(this, null, [], Dt)
          },
          writable: !0,
          configurable: !0
      },
      import: {
          value: function (e, t, n) {
              arguments.length < 3 && (n = t, t = e);
              return Xt.call(this, t + "", [n._resolve(e + "")], zt)
          },
          writable: !0,
          configurable: !0
      }
  }), Object.defineProperties(Zt.prototype, {
      _copy: {
          value: function (e, t) {
              e._source = this, t.set(this, e);
              for (const [o, s] of this._scope) {
                  var n = e._scope.get(o);
                  if (!n || n._type !== It)
                      if (s._definition === zt) {
                          var r = s._inputs[0],
                              i = r._module;
                          e.import(r._name, o, t.get(i) || (i._source ? i._copy(new Zt(e._runtime, e._builtins),
                              t) : i))
                      } else e.define(o, s._inputs.map(Qt), s._definition)
              }
              return e
          },
          writable: !0,
          configurable: !0
      },
      _resolve: {
          value: function (e) {
              var t, n = this._scope.get(e);
              if (!n)
                  if (n = new Wt(Ft, this), this._builtins.has(e)) n.define(e, Ut(this._builtins.get(e)));
                  else if (this._runtime._builtin._scope.has(e)) n.import(e, this._runtime._builtin);
              else {
                  try {
                      t = this._runtime._global(e)
                  } catch (r) {
                      return n.define(e, function (e) {
                          return function () {
                              throw e
                          }
                      }(r))
                  }
                  void 0 === t ? this._scope.set(n._name = e, n) : n.define(e, Ut(t))
              }
              return n
          },
          writable: !0,
          configurable: !0
      },
      redefine: {
          value: function (e) {
              var t = this._scope.get(e);
              if (!t) throw new Tt(e + " is not defined");
              if (t._type === Bt) throw new Tt(e + " is defined more than once");
              return t.define.apply(t, arguments)
          },
          writable: !0,
          configurable: !0
      },
      define: {
          value: function () {
              var e = new Wt(It, this);
              return e.define.apply(e, arguments)
          },
          writable: !0,
          configurable: !0
      },
      derive: {
          value: function (e, t) {
              var n = new Zt(this._runtime, this._builtins);
              return n._source = this, Rt.call(e, (function (e) {
                  "object" != typeof e && (e = {
                      name: e + ""
                  }), null == e.alias && (e.alias = e.name), n.import(e.name, e.alias, t)
              })), Promise.resolve().then(() => {
                  const e = new Set([this]);
                  for (const t of e)
                      for (const n of t._scope.values())
                          if (n._definition === zt) {
                              const t = n._inputs[0]._module,
                                  r = t._source || t;
                              if (r === this) return void console.warn(
                                  "circular module definition; ignoring");
                              e.add(r)
                          } this._copy(n, new Map)
              }), n
          },
          writable: !0,
          configurable: !0
      },
      import: {
          value: function () {
              var e = new Wt(It, this);
              return e.import.apply(e, arguments)
          },
          writable: !0,
          configurable: !0
      },
      value: {
          value: async function (e) {
              var t = this._scope.get(e);
              if (!t) throw new Tt(e + " is not defined");
              t._observer === Ht && (t._observer = !0, this._runtime._dirty.add(t));
              return await this._runtime._compute(), t._promise
          },
          writable: !0,
          configurable: !0
      },
      variable: {
          value: function (e) {
              return new Wt(It, this, e)
          },
          writable: !0,
          configurable: !0
      },
      builtin: {
          value: function (e, t) {
              this._builtins.set(e, t)
          },
          writable: !0,
          configurable: !0
      }
  });
  const en = "function" == typeof requestAnimationFrame ? requestAnimationFrame : setImmediate;
  var tn = {},
      nn = {};

  function rn(e = new $t, t = fn) {
      var n = this.module();
      if (Object.defineProperties(this, {
              _dirty: {
                  value: new Set
              },
              _updates: {
                  value: new Set
              },
              _computing: {
                  value: null,
                  writable: !0
              },
              _init: {
                  value: null,
                  writable: !0
              },
              _modules: {
                  value: new Map
              },
              _variables: {
                  value: new Set
              },
              _disposed: {
                  value: !1,
                  writable: !0
              },
              _builtin: {
                  value: n
              },
              _global: {
                  value: t
              }
          }), e)
          for (var r in e) new Wt(Ft, n).define(r, [], e[r])
  }

  function on(e) {
      const t = new Set(e._inputs);
      for (const n of t) {
          if (n === e) return !0;
          n._inputs.forEach(t.add, t)
      }
      return !1
  }

  function sn(e) {
      ++e._indegree
  }

  function an(e) {
      --e._indegree
  }

  function ln(e) {
      return e._promise.catch(e._rejector)
  }

  function un(e) {
      return new Promise((function (t) {
          e._invalidate = t
      }))
  }

  function cn(e, t) {
      let n, r, i = "function" == typeof IntersectionObserver && t._observer && t._observer._node,
          o = !i,
          s = Dt,
          a = Dt;
      return i && ((r = new IntersectionObserver(([e]) => (o = e.isIntersecting) && (n = null, s()))).observe(i), e.then(
              () => (r.disconnect(), r = null, a()))),
          function (e) {
              return o ? Promise.resolve(e) : r ? (n || (n = new Promise((e, t) => (s = e, a = t))), n.then(() => e)) :
                  Promise.reject()
          }
  }

  function dn(e) {
      e._invalidate(), e._invalidate = Dt, e._pending();
      var t = e._value,
          n = ++e._version,
          r = null,
          i = e._promise = Promise.all(e._inputs.map(ln)).then((function (i) {
              if (e._version === n) {
                  for (var o = 0, s = i.length; o < s; ++o) switch (i[o]) {
                      case tn:
                          i[o] = r = un(e);
                          break;
                      case nn:
                          r || (r = un(e)), i[o] = cn(r, e)
                  }
                  return e._definition.apply(t, i)
              }
          })).then((function (t) {
              return function (e) {
                  return e && "function" == typeof e.next && "function" == typeof e.return
              }(t) ? e._version !== n ? void t.return() : ((r || un(e)).then(function (e) {
                  return function () {
                      e.return()
                  }
              }(t)), function (e, t, n, r) {
                  function i() {
                      var n = new Promise((function (e) {
                          e(r.next())
                      })).then((function (r) {
                          return r.done ? void 0 : Promise.resolve(r.value).then((
                              function (r) {
                                  if (e._version === t) return hn(e, r, n).then(i),
                                      e._fulfilled(r), r
                              }))
                      }));
                      n.catch((function (r) {
                          e._version === t && (hn(e, void 0, n), e._rejected(r))
                      }))
                  }
                  return new Promise((function (e) {
                      e(r.next())
                  })).then((function (e) {
                      if (!e.done) return n.then(i), e.value
                  }))
              }(e, n, i, t)) : t
          }));
      i.then((function (t) {
          e._version === n && (e._value = t, e._fulfilled(t))
      }), (function (t) {
          e._version === n && (e._value = void 0, e._rejected(t))
      }))
  }

  function hn(e, t, n) {
      var r = e._module._runtime;
      return e._value = t, e._promise = n, e._outputs.forEach(r._updates.add, r._updates), r._compute()
  }

  function pn(e, t) {
      e._invalidate(), e._invalidate = Dt, e._pending(), ++e._version, e._indegree = NaN, (e._promise = Promise.reject(
          t)).catch(Dt), e._value = void 0, e._rejected(t)
  }

  function fn(e) {
      return window[e]
  }
  Object.defineProperties(rn, {
      load: {
          value: function (e, t, n) {
              if ("function" == typeof t && (n = t, t = null), "function" != typeof n) throw new Error(
                  "invalid observer");
              null == t && (t = new $t);
              const {
                  modules: r,
                  id: i
              } = e, o = new Map, s = new rn(t), a = l(i);

              function l(e) {
                  let t = o.get(e);
                  return t || o.set(e, t = s.module()), t
              }
              for (const u of r) {
                  const e = l(u.id);
                  let t = 0;
                  for (const r of u.variables) r.from ? e.import(r.remote, r.name, l(r.from)) : e === a ?
                      e.variable(n(r, t, u.variables)).define(r.name, r.inputs, r.value) : e.define(r.name,
                          r.inputs, r.value), ++t
              }
              return s
          },
          writable: !0,
          configurable: !0
      }
  }), Object.defineProperties(rn.prototype, {
      _compute: {
          value: function () {
              return this._computing || (this._computing = this._computeSoon())
          },
          writable: !0,
          configurable: !0
      },
      _computeSoon: {
          value: function () {
              var e = this;
              return new Promise((function (t) {
                  en((function () {
                      t(), e._disposed || e._computeNow()
                  }))
              }))
          },
          writable: !0,
          configurable: !0
      },
      _computeNow: {
          value: function () {
              var e, t, n = [];
              (e = new Set(this._dirty)).forEach((function (t) {
                  t._inputs.forEach(e.add, e);
                  const n = function (e) {
                      if (e._observer !== Ht) return !0;
                      var t = new Set(e._outputs);
                      for (const n of t) {
                          if (n._observer !== Ht) return !0;
                          n._outputs.forEach(t.add, t)
                      }
                      return !1
                  }(t);
                  n > t._reachable ? this._updates.add(t) : n < t._reachable && t._invalidate(),
                      t._reachable = n
              }), this), (e = new Set(this._updates)).forEach((function (t) {
                  t._reachable ? (t._indegree = 0, t._outputs.forEach(e.add, e)) : (t._indegree =
                      NaN, e.delete(t))
              })), this._computing = null, this._updates.clear(), this._dirty.clear(), e.forEach((
                  function (e) {
                      e._outputs.forEach(sn)
                  }));
              do {
                  for (e.forEach((function (e) {
                          0 === e._indegree && n.push(e)
                      })); t = n.pop();) dn(t), t._outputs.forEach(r), e.delete(t);
                  e.forEach((function (t) {
                      on(t) && (pn(t, new Tt("circular definition")), t._outputs.forEach(an),
                          e.delete(t))
                  }))
              } while (e.size);

              function r(e) {
                  0 == --e._indegree && n.push(e)
              }
          },
          writable: !0,
          configurable: !0
      },
      dispose: {
          value: function () {
              this._computing = Promise.resolve(), this._disposed = !0, this._variables.forEach(e => {
                  e._invalidate(), e._version = NaN
              })
          },
          writable: !0,
          configurable: !0
      },
      module: {
          value: function (e, t = Dt) {
              let n;
              if (void 0 === e) return (n = this._init) ? (this._init = null, n) : new Zt(this);
              if (n = this._modules.get(e)) return n;
              this._init = n = new Zt(this), this._modules.set(e, n);
              try {
                  e(this, t)
              } finally {
                  this._init = null
              }
              return n
          },
          writable: !0,
          configurable: !0
      },
      fileAttachments: {
          value: function (e) {
              return t => {
                  const n = e(t += "");
                  if (null == n) throw new Error(`File not found: ${t}`);
                  return new FileAttachment(n, t)
              }
          },
          writable: !0,
          configurable: !0
      }
  });
  const mn = new Map;
  const bn = 1e4;

  function DatabaseClient(e) {
      if (void 0 === new.target) return vn(e += "").then(t => {
          switch (t) {
              case void 0:
                  throw new Error("Databases are only available in private notebooks");
              case null:
                  throw new Error("Database not found");
              case !1:
                  throw new Error("Database denied for this notebook")
          }
          let {
              type: n,
              exp: r,
              origin: i = "https://connector.observableusercontent.com"
          } = gn(t);
          switch (n) {
              case "bigquery":
                  n = BigQueryDatabaseClient;
                  break;
              case "postgres":
                  n = PostgreSQLDatabaseClient;
                  break;
              case "mysql":
                  n = MySQLDatabaseClient;
                  break;
              default:
                  throw new Error("Unsupported database type")
          }
          return new n({
              _origin: i,
              _expiration: r,
              _token: t,
              name: e
          })
      });
      if (new.target === DatabaseClient) throw new TypeError("DatabaseClient is not a constructor");
      Object.defineProperties(this, {
          _origin: {
              value: e._origin
          },
          _expiration: {
              value: e._expiration,
              writable: !0
          },
          _request: {
              value: null,
              writable: !0
          },
          _token: {
              value: e._token,
              writable: !0
          },
          name: {
              value: e.name,
              enumerable: !0
          }
      })
  }

  function gn(e) {
      return JSON.parse(atob(e.split(".")[0]))
  }
  async function vn(e) {
      if (!e) throw new Error("Database not found");
      const t = mn.get(e);
      if (t) return t.promise;
      let n;
      const r = new Promise(e => n = e);
      return mn.set(e, {
          promise: r,
          resolve: n
      }), parent.postMessage({
          type: "data_connector",
          name: e
      }, "https://observablehq.com"), r
  }
  Object.defineProperties(DatabaseClient.prototype, {
      query: {
          value: async function (e, t, n) {
              if (this._expiration < Date.now() + bn)
                  if (this._request) await this._request;
                  else {
                      this._request = vn(this.name);
                      try {
                          this._token = await this._request, this._expiration = gn(this._token).exp
                      } finally {
                          this._request = null
                      }
                  } const r = await fetch(`${this._origin}/query`, {
                  method: "POST",
                  headers: {
                      Authorization: `Bearer ${this._token}`,
                      "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                      sql: e,
                      params: t,
                      options: n
                  })
              });
              if (!r.ok) {
                  if (401 === r.status) throw this._token = null, this._expiration = 0, new Error(
                      "Unauthorized: invalid or expired token. Try again?");
                  const e = r.headers.get("content-type");
                  throw new Error(e && e.startsWith("application/json") ? (await r.json()).message :
                      await r.text())
              }
              const {
                  data: i,
                  schema: o
              } = await r.json();
              o && (! function ({
                  items: {
                      properties: e
                  }
              }, t) {
                  for (const [n, {
                          type: r,
                          buffer: i,
                          date: o
                      }] of Object.entries(e)) {
                      let e;
                      if (i) e = _n;
                      else if (o) e = wn;
                      else {
                          if (!r.includes("integer") && !r.includes("number")) continue;
                          e = yn
                      }
                      for (const r of t) null !== r[n] && (r[n] = e(r[n]))
                  }
              }(o, i), Object.defineProperty(i, "_schema", {
                  value: o,
                  writable: !0
              }));
              return i
          },
          writable: !0,
          configurable: !0
      },
      queryRow: {
          value: async function (...e) {
              return (await this.query(...e))[0] || null
          },
          writable: !0,
          configurable: !0
      }
  });
  class BigQueryDatabaseClient extends DatabaseClient {}
  class PostgreSQLDatabaseClient extends DatabaseClient {
      async describe(e) {
          return xn(await (void 0 === e ? this.query(
              "SELECT table_schema, table_name\nFROM information_schema.tables\nWHERE table_schema NOT IN ('pg_catalog', 'information_schema')\nORDER BY 1, 2"
          ) : this.query(
              "SELECT column_name, data_type, column_default, is_nullable\nFROM information_schema.columns\nWHERE table_name = $1",
              [e])))
      }
      async explain(e, t, n) {
          return function (e) {
              const t = document.createElement("pre");
              return t.className = "observablehq--inspect", t.appendChild(document.createTextNode(e)), t
          }((await this.query(`EXPLAIN ANALYZE ${e}`, t, n)).map(e => e["QUERY PLAN"]).join("\n"))
      }
  }
  class MySQLDatabaseClient extends DatabaseClient {
      async describe(e) {
          return xn(await this.query(void 0 === e ? "SHOW TABLES" : `DESCRIBE ${e}`))
      }
  }

  function _n(e) {
      return Uint8Array.from(e.data).buffer
  }

  function wn(e) {
      return new Date(e)
  }

  function yn(e) {
      return +e
  }

  function xn(e) {
      if (!e.length) throw new Error("Not found");
      const t = document.createElement("table"),
          n = t.appendChild(document.createElement("thead")).appendChild(document.createElement("tr"));
      for (const i of Object.keys(e._schema.items.properties)) n.appendChild(document.createElement("th")).appendChild(
          document.createTextNode(i));
      const r = t.appendChild(document.createElement("tbody"));
      for (const i of e) {
          const e = r.appendChild(document.createElement("tr"));
          for (const t of Object.values(i)) e.appendChild(document.createElement("td")).appendChild(document.createTextNode(
              t))
      }
      return t.value = e, t
  }
  const kn = "http://www.w3.org/2000/xmlns/",
      En = "http://www.w3.org/1999/xlink",
      Cn = "http://www.w3.org/2000/svg",
      Sn = .5,
      Nn = 50,
      qn = 50;
  let An = 0;

  function On(e) {
      if (++An > qn) return !1;
      const t = typeof e,
          n = null == e || "number" === t || "string" === t || "boolean" === t || "toJSON" in e || jn(e) || Ln(e);
      return --An, n
  }

  function Ln(e) {
      if (null != e && "object" == typeof e && Object.getPrototypeOf(e) === Object.prototype) {
          let t = 0;
          for (let n of Object.values(e)) {
              if ("function" === typeof n) return !1;
              if (!On(n)) return !1;
              if (++t >= Nn) break
          }
          return !0
      }
      return !1
  }

  function jn(e) {
      if (!Array.isArray(e)) return !1;
      let t = 0;
      for (let n of e) {
          if (!On(n)) return !1;
          if (++t >= Nn) break
      }
      return !0
  }

  function $n(e) {
      An = 0;
      try {
          return Pn(e) ? "svg" : Mn(e) ? "canvas" : function (e) {
              return e instanceof HTMLStyleElement
          }(e) ? "css" : function (e) {
              return e instanceof Int8Array || e instanceof Int16Array || e instanceof Int32Array || e instanceof Uint8Array ||
                  e instanceof Uint8ClampedArray || e instanceof Uint16Array || e instanceof Uint32Array || e instanceof Float32Array
          }(e) ? "typedarray" : function (e) {
              if (!Array.isArray(e)) return !1;
              let t = 0;
              for (let n of e) {
                  let e = null;
                  if (Array.isArray(n)) e = n;
                  else {
                      if (!Ln(n)) return !1;
                      e = Object.values(n)
                  }
                  let r = 0;
                  for (let t of e) {
                      const e = typeof t;
                      if (null != t && "string" !== e && "number" !== e && !(t instanceof Date)) return !1;
                      if (++r >= Nn) break
                  }
                  if (++t >= Nn) break
              }
              return !0
          }(e) ? "csv" : jn(e) ? "array" : Ln(e) ? "object" : function (e) {
              if (e instanceof Map) {
                  let t = 0;
                  for (let n of e.keys()) {
                      const r = typeof n;
                      if ("number" !== r && "string" !== r) return !1;
                      if (!On(e.get(n))) return !1;
                      if (++t >= Nn) break
                  }
                  return !0
              }
              return !1
          }(e) ? "map" : function (e) {
              if (e instanceof Set) {
                  let t = 0;
                  for (let n of e.values()) {
                      if (!On(n)) return !1;
                      if (++t >= Nn) break
                  }
                  return !0
              }
              return !1
          }(e) ? "set" : "string" == typeof e && "string"
      } catch (t) {
          return !1
      }
  }

  function Tn(e, t) {
      const n = e.getBoundingClientRect(),
          r = t.getBoundingClientRect();
      return r.width * r.height / (n.width * n.height) >= Sn
  }

  function Pn(e) {
      if (e instanceof SVGSVGElement) return e;
      if (e instanceof Element) {
          const t = e.querySelectorAll("svg");
          if (1 === t.length && Tn(e, t[0])) return t[0]
      }
      return null
  }

  function Mn(e) {
      if (e instanceof HTMLCanvasElement) return e;
      if (e instanceof Element) {
          const t = e.querySelectorAll("canvas");
          if (1 === t.length && Tn(e, t[0])) return t[0]
      }
      return null
  }
  async function Rn(e) {
      let t, n;
      const r = new Promise((e, r) => (t = e, n = r)),
          i = new Image;
      return i.onerror = n, i.onload = () => {
          const n = e.getBoundingClientRect(),
              r = window.devicePixelRatio || 1,
              o = document.createElement("canvas");
          o.width = n.width * r, o.height = n.height * r;
          const s = o.getContext("2d");
          s.scale(r, r), s.drawImage(i, 0, 0, n.width, n.height), URL.revokeObjectURL(i.src), t(o)
      }, i.src = URL.createObjectURL(await async function (e) {
          const t = e.getBoundingClientRect();
          (e = e.cloneNode(!0)).setAttribute("width", t.width), e.setAttribute("height", t.height),
              document.body.appendChild(e);
          const n = document.createElementNS(Cn, "svg"),
              r = document.createElementNS(Cn, "g");
          n.appendChild(r), document.body.appendChild(n);
          const i = getComputedStyle(r),
              o = window.location.href + "#",
              s = [],
              a = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, null, !1);
          for (; a.nextNode();) {
              const e = a.currentNode;
              for (const r of e.attributes) r.value.includes(o) && (r.value = r.value.replace(o, "#"));
              if ("image" === e.tagName) {
                  let t;
                  try {
                      t = new URL(e.getAttribute("href"))
                  } catch (u) {}
                  t && "https:" === t.protocol && s.push(a.currentNode)
              }
              const t = getComputedStyle(e);
              let n = "";
              for (let r = 0; r < t.length; r++) {
                  let o = t[r],
                      s = t.getPropertyValue(o);
                  s !== i.getPropertyValue(o) && s !== e.getAttribute(o) && (n += o + ": " + s + "; ")
              }
              e.setAttribute("style", n)
          }
          try {
              await Promise.all(s.map(e => new Promise((t, n) => {
                  const r = new Image;
                  r.crossOrigin = "*", r.onerror = n, r.onload = () => {
                      const i = document.createElement("canvas");
                      i.width = r.width, i.height = r.height;
                      const o = i.getContext("2d");
                      try {
                          o.drawImage(r, 0, 0, r.width, r.height), e.setAttribute(
                              "href", o.canvas.toDataURL()), t()
                      } catch (u) {
                          n(u)
                      }
                  }, r.src = e.getAttribute("href")
              })))
          } catch (u) {}
          e.setAttributeNS(kn, "xmlns", Cn), e.setAttributeNS(kn, "xmlns:xlink", En);
          const l = (new window.XMLSerializer).serializeToString(e);
          return n.remove(), e.remove(), new Blob([l], {
              type: "image/svg+xml"
          })
      }(e)), r
  }
  const Un = new Map,
      zn = new Map,
      Dn = new Map;
  const In = rn.prototype.fileAttachments(e => {
      const t = zn.get(e);
      if (void 0 === t) return;
      if ("pending" !== t.status) return t.url;
      let n;
      const r = Dn.get(e);
      if (r) n = r.promise;
      else {
          let t, r;
          n = new Promise((e, n) => (t = e, r = n)), Dn.set(e, {
              promise: n,
              resolve: t,
              reject: r
          })
      }
      return n
  });
  class Fn {
      constructor(e, t) {
          Object.defineProperties(this, {
              _file: {
                  value: t
              },
              _url: {
                  value: void 0,
                  writable: !0
              },
              name: {
                  value: e,
                  enumerable: !0
              }
          })
      }
      async url() {
          return null == this._url && (this._url = URL.createObjectURL(this._file)), this._url
      }
      async blob() {
          return this._file
      }
      async arrayBuffer() {
          return new Promise((e, t) => {
              const n = new FileReader;
              n.onload = () => e(n.result), n.onerror = t, n.readAsArrayBuffer(this._file)
          })
      }
      async text() {
          return new Promise((e, t) => {
              const n = new FileReader;
              n.onload = () => e(n.result), n.onerror = t, n.readAsText(this._file)
          })
      }
      async json() {
          return JSON.parse(await this.text())
      }
      async stream() {
          return this._file.stream()
      }
      async image() {
          const e = await this.url();
          return new Promise((t, n) => {
              const r = new Image;
              r.onload = () => t(r), r.onerror = () => n(new Error(`Unable to load file: ${this.name}`)),
                  r.src = e
          })
      }
  }

  function Bn(e) {
      if (void 0 === new.target) return e += "", Un.has(e) ? new Fn(e, Un.get(e)) : In(e);
      if (new.target === Bn) throw new TypeError("FileAttachment is not a constructor");
      Object.defineProperties(this, {
          name: {
              value: e,
              enumerable: !0
          }
      })
  }
  Object.defineProperties(Fn, {
      name: {
          value: "FileAttachment"
      }
  });
  let Hn, Wn, Yn, Kn, Jn = e => {
      try {
          return (Jn = new Function("x", "return import(x)"))(e)
      } catch (t) {
          return (Jn = Vn)(e)
      }
  };

  function Vn(e) {
      return new Promise((t, n) => {
          const r = "__import" + Math.random().toString(32).substring(2),
              i = document.createElement("script");

          function o() {
              delete window[r], i.remove(), URL.revokeObjectURL(i.src)
          }
          i.type = "module", i.src = URL.createObjectURL(new Blob([
              `import * as m from "${e}"; window.${r} = m;`], {
              type: "text/javascript"
          })), i.onload = () => {
              t(window[r]), o()
          }, i.onerror = () => {
              n(new TypeError("Failed to fetch dynamically imported module: " + e)), o()
          }, document.head.appendChild(i)
      })
  }

  function Gn() {
      const e = new Promise(e => Kn = e);
      return parent.postMessage({
          type: "secrets"
      }, "https://observablehq.com"), e.then(e => {
          if (void 0 === e) return function () {
              throw new Error("Secrets are only available in private notebooks")
          };
          if (!1 === e) return function () {
              throw new Error("Secrets denied for this notebook")
          };
          const t = new Map(e.map(({
              name: e,
              value: t
          }) => [e, t]));
          return function (e) {
              if (!t.has(e += "")) throw new Error("Secret not found");
              return t.get(e)
          }
      })
  }

  function Xn(e, t) {
      Object.defineProperties(this, {
          _node: {
              value: e
          },
          _id: {
              value: t
          },
          _error: {
              value: void 0,
              writable: !0
          },
          _variable: {
              value: Hn.variable(e ? new Ee(e) : null)
          },
          _loaded: {
              value: !1,
              writable: !0
          },
          _view: {
              value: null,
              writable: !0
          },
          _imports: {
              value: null,
              writable: !0
          },
          _source: {
              value: null,
              writable: !0
          }
      })
  }
  Object.defineProperties(Xn.prototype, {
      define: {
          value: function (e) {
              Qn(this), er(this), e.imports ? this._imports = function (e, t) {
                      const {
                          imports: n,
                          exports: r,
                          href: i
                      } = e, o = Jn(i).then(({
                          default: e
                      }) => {
                          const t = Yn.module(e);
                          return r ? t.derive(r.map(e => ({
                              name: e.remote,
                              alias: e.name
                          })), Hn) : t
                      }), s = n.map(e => {
                          const t = Hn.define(e.name, o.then(async n => {
                              t.import(e.remote, e.name, n), await Hn._runtime._computing,
                                  await t._promise
                          }).catch(() => {}));
                          return t
                      });
                      return t.define(o.then(t => (function ({
                          imports: e,
                          notebook: t
                      }, n) {
                          const r = document.createElement("span");
                          r.className = "observablehq--inspect observablehq--import", r.appendChild(
                              document.createTextNode("import {"));
                          const i = new Set(e.map(e => e.name).filter(e => Zn.test(e)).map(
                              e => e.split(" ")[1]));
                          let o = !1;
                          for (const {
                                  name: s,
                                  remote: a
                              } of e) {
                              if (i.has(s)) continue;
                              const e = n._scope.get(a);
                              o ? r.appendChild(document.createTextNode(", ")) : o = !0;
                              const l = document.createElement("a");
                              1 !== e._type ? l.className = "observablehq--unknown" : t &&
                                  (l.href = new URL(`#${a.replace(Zn,"")}`, t.href)), l.textContent =
                                  a, r.appendChild(l), s !== a && r.appendChild(document.createTextNode(
                                      ` as ${s.replace(Zn,"")}`))
                          }
                          if (r.appendChild(document.createTextNode("}")), t) {
                              r.appendChild(document.createTextNode(" from "));
                              const e = r.appendChild(document.createElement("a"));
                              e.href = t.href, e.textContent = t.specifier
                          }
                          return r
                      })(e, t))), s
                  }(e, this._variable) : e.view ? (this._source || (this._source = Hn.variable()),
                      function (e, t, n) {
                          const r = `viewof ${e.name}`;
                          t.define(r, e.inputs, e.value), n.define(e.name, ["Generators", r], nr)
                      }(e, this._variable, this._source)) : e.mutable ? (this._initializer || (this._initializer =
                      Hn.variable()), this._source || (this._source = Hn.variable()), function (e, t,
                      n, r) {
                      const i = `initial ${e.name}`,
                          o = `mutable ${e.name}`;
                      t.define(i, e.inputs, e.value), n.define(o, ["Mutable", i], rr), r.define(e.name,
                          [o], ir)
                  }(e, this._initializer, this._source, this._variable)) : void 0 === e.value ? this._variable
                  .define(document.createTextNode("")) : this._variable.define(e.name, e.inputs, e.value);
              return this
          },
          writable: !0,
          configurable: !0
      },
      delete: {
          value: function () {
              Qn(this), er(this), this._variable.delete()
          },
          writable: !0,
          configurable: !0
      },
      resolve: {
          value: function () {
              return Promise.resolve(this._variable._module._runtime._computing).then(() => this._variable
                  ._promise)
          },
          writable: !0,
          configurable: !0
      },
      downloadType: {
          value: function () {
              return $n(this._variable._value)
          },
          writable: !0,
          configurable: !0
      }
  });
  const Zn = /^(viewof|mutable) /;

  function Qn(e) {
      e._imports && (e._imports.forEach(tr), e._imports = null)
  }

  function er(e) {
      e._initializer && (e._initializer.delete(), e._initializer = null), e._source && (e._source.delete(), e._source =
          null)
  }

  function tr(e) {
      e.delete()
  }

  function nr(e, t) {
      return e.input(t)
  }

  function rr(e, t) {
      return new e(t)
  }

  function ir(e) {
      return e.generator
  }
  let or = null,
      sr = new Set,
      ar = null;

  function lr(e) {
      const t = document.createElement("div");
      t.setAttribute("dir", "auto"), t.className = "observablehq";
      const n = new Xn(t, e);
      let r;
      n.resize = () => {
          const r = Math.max(p, t.offsetHeight);
          n._height !== r && (parent.postMessage({
              type: "resize",
              id: e,
              height: r
          }, "https://observablehq.com"), n._height = r)
      }, "undefined" == typeof ResizeObserver ? ((r = new MutationObserver(n.resize)).observe(t, {
          attributes: !0,
          childList: !0,
          characterData: !0,
          subtree: !0
      }), t.addEventListener("load", n.resize, !0)) : (r = new ResizeObserver(n.resize)).observe(t);
      let i = e => (function (e, t) {
          e._loaded || (e._loaded = !0, parent.postMessage({
              type: "load",
              id: e._id
          }, "https://observablehq.com"));
          const n = t.detail && t.detail.error;
          (n || e._error) && (e._error = n, parent.postMessage({
              type: "error",
              id: e._id,
              error: n && {
                  message: ur(n.message),
                  stack: ur(n.stack),
                  runtime: n instanceof Tt ? {
                      input: ur(n.input)
                  } : null
              }
          }, "https://observablehq.com"));
          sr.add(e._node), null === or && (or = setTimeout(cr, 150));
          e._node.classList.add("observablehq--changed")
      })(n, e);
      return t.addEventListener("update", i, !0), t.addEventListener("error", i, !0), t.addEventListener("mouseenter",
          () => {
              ar && (ar = void clearTimeout(ar)), parent.postMessage({
                  type: "hover",
                  id: e
              }, "https://observablehq.com")
          }), Object.defineProperties(n, {
          _height: {
              value: p,
              writable: !0
          },
          _resizer: {
              value: r,
              writable: !1
          },
          _timeout: {
              value: null,
              writable: !0
          }
      }), n
  }

  function ur(e) {
      return null == e ? void 0 : e + ""
  }

  function cr() {
      for (const e of sr) e.classList.remove("observablehq--changed");
      sr = new Set, or = null
  }
  document.addEventListener("mouseenter", e => {
      ar && clearTimeout(ar), ar = setTimeout(() => {
          ar = null;
          for (const t of document.querySelectorAll("body > .observablehq"))
              if (t.offsetTop >= e.pageY) return void parent.postMessage({
                  type: "hover",
                  id: +t.id.slice(1)
              }, "https://observablehq.com")
      }, 50)
  });
  const dr = eval;

  function hr(e) {
      return e.modules ? e.modules.forEach(e => {
          e.values.forEach(e => {
              "body" in e && (e.value = pr(e.body))
          })
      }) : e.value = pr(e.body), e
  }

  function pr(e) {
      try {
          return dr(e)
      } catch (t) {
          return function (e) {
              return function () {
                  throw e
              }
          }(t)
      }
  }

  function fr(e) {
      try {
          return new Function(e), !0
      } catch (t) {}
  }
  var mr = [{
      name: "asyncGenerator",
      support: fr("async function* a() {}")
  }, {
      name: "bigInt",
      support: "undefined" != typeof BigInt
  }, {
      name: "dynamicImport",
      support: fr('import("")')
  }];
  const br = new Set(Object.getOwnPropertyNames(window).concat(Object.getOwnPropertyNames(EventTarget.prototype)).filter(
          e => {
              try {
                  return "web3" !== e && !/^webkit/i.test(e) && !/^onmoz/i.test(e) && null != window[e]
              } catch (t) {
                  return !1
              }
          })),
      gr = new Map([["FileAttachment", Bn], ["DatabaseClient", DatabaseClient], ["Secret", Gn]]),
      vr = new Set(Object.getOwnPropertyNames(Object.prototype));

  function _r(e) {
      const t = [];
      for (; e;) {
          for (const n of Object.getOwnPropertyNames(e)) /^_/.test(n) || vr.has(n) || t.push(n);
          e = Object.getPrototypeOf(e)
      }
      return t
  }

  function wr() {
      const e = [];
      for (const t of Hn._scope.keys()) /^initial /.test(t) || e.push(t);
      return e
  }

  function yr({
      name: e,
      path: t,
      func: n = null,
      arg: r = null
  }) {
      if (n) {
          const e = gr.get(n);
          return {
              local: e ? _r(e(r)) : []
          }
      }
      if (e) {
          let {
              value: n,
              type: r
          } = function (e) {
              const t = Hn._scope.get(e);
              return t && t._value ? {
                  value: t._value,
                  type: "cell"
              } : br.has(e) ? {
                  value: window[e],
                  type: "global"
              } : {}
          }(e);
          if (!n) return {};
          for (let e of t) {
              const t = Object.getOwnPropertyDescriptor(n, e) || Object.getOwnPropertyDescriptor(Object.getPrototypeOf(
                  n), e);
              if (!t || t.get) return {};
              n = n[e]
          }
          return {
              [r]: n === window || n === self ? [...br] : _r(n).filter(e => /^[a-z_]/i.test(e))
          }
      }
      return {
          cell: wr(),
          global: [...br]
      }
  }
  const xr = document.body,
      kr = new Map;

  function Er(e) {
      history.replaceState({}, "", new URL(e, location)), window.dispatchEvent(new HashChangeEvent("hashchange"))
  }
  let Cr;
  if (addEventListener("fullscreenchange", () => {
          document.body.classList.toggle("fullscreen", !!document.fullscreenElement), dispatchEvent(new CustomEvent(
              "resize"))
      }), window.addEventListener("focus", () => {
          parent.postMessage({
              type: "focus"
          }, "https://observablehq.com")
      }), function (e) {
          function t(t) {
              if (t.defaultPrevented || t.button && 0 !== t.button || t.ctrlKey || t.metaKey || t.altKey || t.shiftKey)
                  return;
              const n = function (e) {
                  for (; e;) {
                      if (e instanceof HTMLAnchorElement && e.href) return e;
                      e = e.parentNode
                  }
              }(t.target);
              n && (n.hasAttribute("download") || n.hasAttribute("target") || "https:" !== n.protocol ||
                  "https://observablehq.com" !== n.origin || n.hash || (t.preventDefault(), e(n.pathname + n.search +
                      n.hash)))
          }
          document.documentElement.addEventListener("click", t)
      }(e => {
          parent.postMessage({
              type: "navigate",
              href: e
          }, "https://observablehq.com")
      }), addEventListener("message", async e => {
          const {
              origin: t,
              data: {
                  type: n,
                  id: r,
                  events: i,
                  pathname: o,
                  search: s,
                  hash: a
              }
          } = e;
          if ("https://observablehq.com" === t) switch (n) {
              case "hello":
                  Hn || (! function () {
                      Yn = new rn(Object.assign(new $t, {
                          Secret: Gn,
                          DatabaseClient: () => DatabaseClient
                      })), (Hn = Yn.module()).builtin("FileAttachment", Bn), Wn = new Map
                  }(), parent.postMessage({
                      type: "ready",
                      platformSupport: mr,
                      globals: br
                  }, "https://observablehq.com")), r && Wn.set(r, Hn), o && (document.querySelector(
                      "base").href = `https://observablehq.com${o}${s}`), a && Er(a), Cr || (Cr =
                      setInterval(() => parent.postMessage({
                          type: "ping"
                      }, "https://observablehq.com"), 5e3));
                  break;
              case "bundle":
                  i.forEach(Nr);
                  break;
              case "hashchange":
                  Er(a);
                  break;
              case "report_cell_output_for_testing":
                  {
                      const e = [...document.getElementsByClassName("observablehq")].map(e => e.innerText);parent
                      .postMessage({
                          type: "report_cell_output_for_testing",
                          content: e
                      }, "https://observablehq.com");
                      break
                  }
              default:
                  throw new Error("unknown event type")
          }
      }), "undefined" == typeof ResizeObserver) {
      let e = innerWidth;
      document.fonts && document.fonts.addEventListener("loadingdone", () => {
          kr.forEach(e => e.resize())
      }), addEventListener("resize", () => {
          e !== innerWidth && (e = innerWidth, kr.forEach(e => e.resize()))
      })
  }

  function Sr(e, t) {
      parent.postMessage({
          type: "download_ready",
          blob: e,
          filename: t
      }, "https://observablehq.com")
  }

  function Nr(e) {
      const {
          node_id: t
      } = e;
      switch (e.type) {
          case "insert_node":
              {
                  const n = lr(t);
                  if (kr.has(t)) throw new Error("duplicate node");kr.set(t, n),
                  xr.insertBefore(n._node, Ar(e.new_next_node_id)),
                  n.define(hr(e.new_node_value));
                  break
              }
          case "move_node":
              xr.insertBefore(qr(t)._node, Ar(e.new_next_node_id));
              break;
          case "modify_node":
              qr(t).define(hr(e.new_node_value));
              break;
          case "offset_node":
              qr(t)._node.style.marginBottom = `${f+e.height}px`;
              break;
          case "remove_node":
              {
                  const e = qr(t);e.delete(),
                  kr.delete(t),
                  e._resizer && e._resizer.disconnect(),
                  xr.removeChild(e._node);
                  break
              }
          case "extract_title":
              {
                  const e = qr(t);e && e.resolve().then(() => {
                      const t = e._node.querySelector("h1");
                      parent.postMessage({
                          type: "title",
                          value: (t ? t.textContent : "").substring(0, 255)
                      }, "https://observablehq.com")
                  });
                  break
              }
          case "detect_download_type":
              {
                  const e = qr(t);e && parent.postMessage({
                      type: "download_type",
                      id: t,
                      download_type: e.downloadType()
                  }, "https://observablehq.com");
                  break
              }
          case "request_download":
              {
                  const {
                      download_type: n,
                      filename: r,
                      format: i
                  } = e,
                  o = qr(t);o && o.resolve().then(() => {
                      let e;
                      try {
                          const t = o._variable._value;
                          switch (n) {
                              case "svg":
                                  const n = Pn(t);
                                  return void("svg" === i ? async function (e) {
                                      e = e.cloneNode(!0);
                                      const t = window.location.href + "#",
                                          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT,
                                              null, !1);
                                      for (; n.nextNode();) {
                                          const e = n.currentNode;
                                          for (const n of e.attributes) n.value.includes(t) && (n.value =
                                              n.value.replace(t, "#"))
                                      }
                                      e.setAttributeNS(kn, "xmlns", Cn), e.setAttributeNS(kn,
                                          "xmlns:xlink", En);
                                      const r = (new window.XMLSerializer).serializeToString(e);
                                      return new Blob([r], {
                                          type: "image/svg+xml"
                                      })
                                  }(n).then(e => Sr(e, r)): Rn(n).then(e => e.toBlob(e => Sr(e, r))));
                              case "canvas":
                                  return void Mn(t).toBlob(e => Sr(e, r));
                              case "css":
                                  return void Sr(new Blob([t.textContent.trim()], {
                                      type: "text/css"
                                  }), r);
                              case "string":
                                  return void Sr(new Blob([t], {
                                      type: "text/plain"
                                  }), r);
                              case "csv":
                                  if ("csv" === i) {
                                      const e = Array.isArray(t[0]) ? h(t) : d(t);
                                      return void Sr(new Blob([e], {
                                          type: "text/csv"
                                      }), r)
                                  }
                                  e = t;
                                  break;
                              case "map":
                              case "set":
                              case "typedarray":
                                  e = Array.from(t);
                                  break;
                              case "array":
                              case "object":
                                  e = t
                          }
                          Sr(new Blob([JSON.stringify(e)], {
                              type: "application/json"
                          }), r)
                      } catch (t) {
                          parent.postMessage({
                              type: "download_error"
                          }, "https://observablehq.com")
                      }
                  });
                  break
              }
          case "secrets":
              Kn(e.secrets);
              break;
          case "data_connector":
              ! function (e, t) {
                  mn.get(e).resolve(t), mn.delete(e)
              }(e.name, e.dataConnector);
              break;
          case "file_attachment":
              ! function (e) {
                  zn.set(e.name, e);
                  const t = Dn.get(e.name);
                  switch (e.status) {
                      case "deleted":
                          t && t.reject(new Error(`File not found: ${e.name}`)), Dn.delete(e.name), Un.delete(e.name),
                              zn.delete(e.name);
                          break;
                      case "private":
                      case "public":
                          t && t.resolve(e.url), Dn.delete(e.name)
                  }
              }(e.file);
              break;
          case "file_attachment_local":
              ! function (e, t) {
                  null != t ? Un.set(e, t) : Un.delete(e)
              }(e.name, e.file);
              break;
          case "autocomplete":
              parent.postMessage({
                  type: "autocompleted",
                  completions: yr(e),
                  nonce: e.nonce
              }, "https://observablehq.com");
              break;
          default:
              throw new Error("unknown event type")
      }
  }

  function qr(e) {
      const t = kr.get(e);
      if (!t) throw new Error("unknown node");
      return t
  }

  function Ar(e) {
      const t = kr.get(e);
      if (t) return t._node
  }
}();