/* Copyright 2018 Observable, Inc. */ ! function () {
    "use strict";
    const e = 33,
        t = 17;

    function n(e, t, n) {
        n = n || {};
        var r = e.ownerDocument,
            o = r.defaultView.CustomEvent;
        "function" == typeof o ? o = new o(t, {
            detail: n
        }) : ((o = r.createEvent("Event")).initEvent(t, !1, !1), o.detail = n), e.dispatchEvent(o)
    }

    function r(e) {
        return Array.isArray(e) || e instanceof Int8Array || e instanceof Int16Array || e instanceof Int32Array || e instanceof Uint8Array || e instanceof Uint8ClampedArray || e instanceof Uint16Array || e instanceof Uint32Array || e instanceof Float32Array || e instanceof Float64Array
    }

    function o(e) {
        return e === (0 | e) + ""
    }
    const i = Symbol.prototype.toString;

    function a(e) {
        return i.call(e)
    }
    const {
        getOwnPropertySymbols: s,
        prototype: {
            hasOwnProperty: u
        }
    } = Object, {
        toStringTag: l
    } = Symbol, c = {}, d = s;

    function f(e, t) {
        return u.call(e, t)
    }

    function p(e) {
        return e[l] || e.constructor && e.constructor.name || "Object"
    }

    function h(e, t) {
        try {
            const n = e[t];
            return n && n.constructor, n
        } catch (e) {
            return c
        }
    }

    function m(e) {
        const t = r(e);
        let o, i, a;
        e instanceof Map ? (o = `Map(${e.size})`, i = v) : e instanceof Set ? (o = `Set(${e.size})`, i = b) : t ? (o = `${e.constructor.name}(${e.length})`, i = _) : (o = p(e), i = w);
        const s = document.createElement("span");
        s.className = "observablehq--expanded";
        const u = s.appendChild(document.createElement("a"));
        u.innerHTML = "<svg width=8 height=8 class='observablehq--caret'>\n    <path d='M4 7L0 1h8z' fill='currentColor' />\n  </svg>", u.appendChild(document.createTextNode(`${o}${t?" [":" {"}`)), u.addEventListener("mouseup", function (t) {
            t.stopPropagation(), G(s, E(e))
        }), i = i(e);
        for (let n = 0; !(a = i.next()).done && n < 20; ++n) s.appendChild(a.value);
        if (!a.done) {
            const e = s.appendChild(document.createElement("a"));
            e.className = "observablehq--field", e.style.display = "block", e.appendChild(document.createTextNode("  … more")), e.addEventListener("mouseup", function (e) {
                e.stopPropagation(), s.insertBefore(a.value, s.lastChild.previousSibling);
                for (let t = 0; !(a = i.next()).done && t < 19; ++t) s.insertBefore(a.value, s.lastChild.previousSibling);
                a.done && s.removeChild(s.lastChild.previousSibling), n(s, "load")
            })
        }
        return s.appendChild(document.createTextNode(t ? "]" : "}")), s
    }

    function* v(e) {
        for (const [t, n] of e) yield y(t, n);
        yield* w(e)
    }

    function* b(e) {
        for (const t of e) yield x(t);
        yield* w(e)
    }

    function* _(e) {
        for (let t = 0, n = e.length; t < n; ++t) t in e && (yield g(t, h(e, t), "observablehq--index"));
        for (const t in e) !o(t) && f(e, t) && (yield g(t, h(e, t), "observablehq--key"));
        for (const t of d(e)) yield g(a(t), h(e, t), "observablehq--symbol")
    }

    function* w(e) {
        for (const t in e) f(e, t) && (yield g(t, h(e, t), "observablehq--key"));
        for (const t of d(e)) yield g(a(t), h(e, t), "observablehq--symbol")
    }

    function g(e, t, n) {
        const r = document.createElement("div"),
            o = r.appendChild(document.createElement("span"));
        return r.className = "observablehq--field", o.className = n, o.textContent = `  ${e}`, r.appendChild(document.createTextNode(": ")), r.appendChild(I(t)), r
    }

    function y(e, t) {
        const n = document.createElement("div");
        return n.className = "observablehq--field", n.appendChild(document.createTextNode("  ")), n.appendChild(I(e)), n.appendChild(document.createTextNode(" => ")), n.appendChild(I(t)), n
    }

    function x(e) {
        const t = document.createElement("div");
        return t.className = "observablehq--field", t.appendChild(document.createTextNode("  ")), t.appendChild(I(e)), t
    }

    function E(e, t) {
        const n = r(e);
        let o, i, a;
        if (e instanceof Map ? (o = `Map(${e.size})`, i = C) : e instanceof Set ? (o = `Set(${e.size})`, i = q) : n ? (o = `${e.constructor.name}(${e.length})`, i = k) : (o = p(e), i = N), t) {
            const t = document.createElement("span");
            return t.className = "observablehq--shallow", t.appendChild(document.createTextNode(o)), t.addEventListener("mouseup", function (n) {
                n.stopPropagation(), G(t, E(e))
            }), t
        }
        const s = document.createElement("span");
        s.className = "observablehq--collapsed";
        const u = s.appendChild(document.createElement("a"));
        u.innerHTML = "<svg width=8 height=8 class='observablehq--caret'>\n    <path d='M7 4L1 8V0z' fill='currentColor' />\n  </svg>", u.appendChild(document.createTextNode(`${o}${n?" [":" {"}`)), s.addEventListener("mouseup", function (t) {
            t.stopPropagation(), G(s, m(e))
        }, !0), i = i(e);
        for (let r = 0; !(a = i.next()).done && r < 20; ++r) r > 0 && s.appendChild(document.createTextNode(", ")), s.appendChild(a.value);
        return a.done || s.appendChild(document.createTextNode(", …")), s.appendChild(document.createTextNode(n ? "]" : "}")), s
    }

    function* C(e) {
        for (const [t, n] of e) yield P(t, n);
        yield* N(e)
    }

    function* q(e) {
        for (const t of e) yield I(t, !0);
        yield* N(e)
    }

    function* k(e) {
        for (let t = -1, n = 0, r = e.length; n < r; ++n)
            if (n in e) {
                let r = n - t - 1;
                if (r > 0) {
                    const e = document.createElement("span");
                    e.className = "observablehq--empty", e.textContent = 1 === r ? "empty" : `empty × ${n-t-1}`, yield e
                }
                yield I(h(e, n), !0), t = n
            } for (const t in e) !o(t) && f(e, t) && (yield O(t, h(e, t), "observablehq--key"));
        for (const t of d(e)) yield O(a(t), h(e, t), "observablehq--symbol")
    }

    function* N(e) {
        for (const t in e) f(e, t) && (yield O(t, h(e, t), "observablehq--key"));
        for (const t of d(e)) yield O(a(t), h(e, t), "observablehq--symbol")
    }

    function O(e, t, n) {
        const r = document.createDocumentFragment(),
            o = r.appendChild(document.createElement("span"));
        return o.className = n, o.textContent = e, r.appendChild(document.createTextNode(": ")), r.appendChild(I(t, !0)), r
    }

    function P(e, t) {
        const n = document.createDocumentFragment();
        return n.appendChild(I(e, !0)), n.appendChild(document.createTextNode(" => ")), n.appendChild(I(t, !0)), n
    }

    function M(e, t) {
        var n = e + "",
            r = n.length;
        return r < t ? new Array(t - r + 1).join(0) + n : n
    }
    var S = Error.prototype.toString,
        j = RegExp.prototype.toString;
    const $ = 20;

    function L(e) {
        return e.replace(/[\\`\x00-\x09\x0b-\x19]|\${/g, A)
    }

    function A(e) {
        var t = e.charCodeAt(0);
        return t < 16 ? "\\x0" + t.toString(16) : t < 32 ? "\\x" + t.toString(16) : "\\" + e
    }

    function T(e, t) {
        for (var n = 0; t.exec(e);) ++n;
        return n
    }
    var z = Function.prototype.toString,
        R = {
            prefix: "async ƒ"
        },
        D = {
            prefix: "async ƒ*"
        },
        F = {
            prefix: "class"
        },
        U = {
            prefix: "ƒ"
        },
        W = {
            prefix: "ƒ*"
        };

    function B(e, t) {
        var n = document.createElement("span");
        n.className = "observablehq--function";
        var r = n.appendChild(document.createElement("span"));
        return r.className = "observablehq--keyword", r.textContent = e.prefix, n.appendChild(document.createTextNode(" " + t)), n
    }
    const {
        prototype: {
            toString: H
        }
    } = Object;

    function I(e, t, n) {
        let r = typeof e;
        switch (r) {
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
                e = a(e);
                break;
            case "function":
                return function (e) {
                    var t, n, r = z.call(e);
                    switch (e.constructor && e.constructor.name) {
                        case "AsyncFunction":
                            t = R;
                            break;
                        case "AsyncGeneratorFunction":
                            t = D;
                            break;
                        case "GeneratorFunction":
                            t = W;
                            break;
                        default:
                            t = /^class\b/.test(r) ? F : U
                    }
                    return t === F ? B(t, e.name || "") : (n = /^(?:async\s*)?(\w+)\s*=>/.exec(r)) ? B(t, "(" + n[1] + ")") : (n = /^(?:async\s*)?\(\s*(\w+(?:\s*,\s*\w+)*)?\s*\)/.exec(r)) ? B(t, n[1] ? "(" + n[1].replace(/\s*,\s*/g, ", ") + ")" : "()") : (n = /^(?:async\s*)?function(?:\s*\*)?(?:\s*\w+)?\s*\(\s*(\w+(?:\s*,\s*\w+)*)?\s*\)/.exec(r)) ? B(t, (e.name || "") + (n[1] ? "(" + n[1].replace(/\s*,\s*/g, ", ") + ")" : "()")) : B(t, (e.name || "") + "(…)")
                }(e);
            case "string":
                return function (e, t, n) {
                    if (!1 === t) {
                        if (T(e, /["\n]/g) <= T(e, /`|\${/g)) {
                            const t = document.createElement("span");
                            return t.className = "observablehq--string", t.textContent = JSON.stringify(e), t
                        }
                        const r = e.split("\n");
                        if (r.length > $ && !n) {
                            const n = document.createElement("div");
                            n.className = "observablehq--string", n.textContent = "`" + L(r.slice(0, $).join("\n"));
                            const o = n.appendChild(document.createElement("span")),
                                i = r.length - $;
                            return o.textContent = `Show ${i} truncated line${i>1?"s":""}`, o.className = "observablehq--string-expand", o.addEventListener("mouseup", function (r) {
                                r.stopPropagation(), G(n, I(e, t, !0))
                            }), n
                        }
                        const o = document.createElement("span");
                        return o.className = `observablehq--string${n?" observablehq--expanded":""}`, o.textContent = "`" + L(e) + "`", o
                    }
                    const r = document.createElement("span");
                    return r.className = "observablehq--string", r.textContent = JSON.stringify(e.length > 100 ? `${e.slice(0,50)}…${e.slice(-49)}` : e), r
                }(e, t, n);
            default:
                if (null === e) {
                    r = null, e = "null";
                    break
                }
                if (e instanceof Date) {
                    r = "date", e = function (e) {
                        return isNaN(e) ? "Invalid Date" : M(e.getFullYear(), 4) + "-" + M(e.getMonth() + 1, 2) + "-" + M(e.getDate(), 2) + (e.getMilliseconds() ? "T" + M(e.getHours(), 2) + ":" + M(e.getMinutes(), 2) + ":" + M(e.getSeconds(), 2) + "." + M(e.getMilliseconds(), 3) : e.getSeconds() ? "T" + M(e.getHours(), 2) + ":" + M(e.getMinutes(), 2) + ":" + M(e.getSeconds(), 2) : e.getMinutes() || e.getHours() ? "T" + M(e.getHours(), 2) + ":" + M(e.getMinutes(), 2) : "")
                    }(e);
                    break
                }
                if (e === c) {
                    r = "forbidden", e = "[forbidden]";
                    break
                }
                switch (H.call(e)) {
                    case "[object RegExp]":
                        r = "regexp", e = function (e) {
                            return j.call(e)
                        }(e);
                        break;
                    case "[object Error]":
                    case "[object DOMException]":
                        r = "error", e = function (e) {
                            return e.stack || S.call(e)
                        }(e);
                        break;
                    default:
                        return (n ? m : E)(e, t)
                }
        }
        const o = document.createElement("span");
        return o.className = `observablehq--${r}`, o.textContent = e, o
    }

    function G(e, t) {
        e.classList.contains("observablehq--inspect") && t.classList.add("observablehq--inspect"), e.parentNode.replaceChild(t, e), n(t, "load")
    }
    const V = /\s+\(\d+:\d+\)$/m;
    class J {
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
        fulfilled(e) {
            const {
                _node: t
            } = this;
            if ((!(e instanceof Element || e instanceof Text) || e.parentNode && e.parentNode !== t) && (e = I(e, !1, t.firstChild && t.firstChild.classList && t.firstChild.classList.contains("observablehq--expanded"))).classList.add("observablehq--inspect"), t.classList.remove("observablehq--running", "observablehq--error"), t.firstChild !== e)
                if (t.firstChild) {
                    for (; t.lastChild !== t.firstChild;) t.removeChild(t.lastChild);
                    t.replaceChild(e, t.firstChild)
                } else t.appendChild(e);
            n(t, "update")
        }
        rejected(e) {
            const {
                _node: t
            } = this;
            for (t.classList.remove("observablehq--running"), t.classList.add("observablehq--error"); t.lastChild;) t.removeChild(t.lastChild);
            var r = document.createElement("span");
            r.className = "observablehq--inspect", r.textContent = (e + "").replace(V, ""), t.appendChild(r), n(t, "error", {
                error: e
            })
        }
    }

    function X(e) {
        return function () {
            return e
        }
    }
    J.into = function (e) {
        if ("string" == typeof e && null == (e = document.querySelector(e))) throw new Error("container not found");
        return function () {
            return new J(e.appendChild(document.createElement("div")))
        }
    };
    var Y = {
            math: "http://www.w3.org/1998/Math/MathML",
            svg: "http://www.w3.org/2000/svg",
            xhtml: "http://www.w3.org/1999/xhtml",
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace",
            xmlns: "http://www.w3.org/2000/xmlns/"
        },
        K = 0;

    function Q(e) {
        this.id = e, this.href = window.location.href + "#" + e
    }
    Q.prototype.toString = function () {
        return "url(" + this.href + ")"
    };
    var Z = {
            canvas: function (e, t) {
                var n = document.createElement("canvas");
                return n.width = e, n.height = t, n
            },
            context2d: function (e, t, n) {
                null == n && (n = devicePixelRatio);
                var r = document.createElement("canvas");
                r.width = e * n, r.height = t * n, r.style.width = e + "px";
                var o = r.getContext("2d");
                return o.scale(n, n), o
            },
            download: function (e, t, n) {
                var r = document.createElement("a");
                return r.appendChild(document.createElement("button")).textContent = null == n ? "Download" : n, r.download = null == t ? "untitled" : t, r.onclick = function () {
                    var t = r.href = URL.createObjectURL(e);
                    setTimeout(function () {
                        URL.revokeObjectURL(t)
                    }, 50)
                }, r
            },
            element: function (e, t) {
                var n, r = e += "",
                    o = r.indexOf(":");
                o >= 0 && "xmlns" !== (r = e.slice(0, o)) && (e = e.slice(o + 1));
                var i = Y.hasOwnProperty(r) ? document.createElementNS(Y[r], e) : document.createElement(e);
                if (t)
                    for (var a in t) o = (r = a).indexOf(":"), n = t[a], o >= 0 && "xmlns" !== (r = a.slice(0, o)) && (a = a.slice(o + 1)), Y.hasOwnProperty(r) ? i.setAttributeNS(Y[r], a, n) : i.setAttribute(a, n);
                return i
            },
            input: function (e) {
                var t = document.createElement("input");
                return null != e && (t.type = e), t
            },
            range: function (e, t, n) {
                1 === arguments.length && (t = e, e = null);
                var r = document.createElement("input");
                return r.min = e = null == e ? 0 : +e, r.max = t = null == t ? 1 : +t, r.step = null == n ? "any" : n = +n, r.type = "range", r
            },
            select: function (e) {
                var t = document.createElement("select");
                return Array.prototype.forEach.call(e, function (e) {
                    var n = document.createElement("option");
                    n.value = n.textContent = e, t.appendChild(n)
                }), t
            },
            svg: function (e, t) {
                var n = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                return n.setAttribute("viewBox", [0, 0, e, t]), n.setAttribute("width", e), n.setAttribute("height", t), n
            },
            text: function (e) {
                return document.createTextNode(e)
            },
            uid: function (e) {
                return new Q("O-" + (null == e ? "" : e + "-") + ++K)
            }
        },
        ee = {
            buffer: function (e) {
                return new Promise(function (t, n) {
                    var r = new FileReader;
                    r.onload = function () {
                        t(r.result)
                    }, r.onerror = n, r.readAsArrayBuffer(e)
                })
            },
            text: function (e) {
                return new Promise(function (t, n) {
                    var r = new FileReader;
                    r.onload = function () {
                        t(r.result)
                    }, r.onerror = n, r.readAsText(e)
                })
            },
            url: function (e) {
                return new Promise(function (t, n) {
                    var r = new FileReader;
                    r.onload = function () {
                        t(r.result)
                    }, r.onerror = n, r.readAsDataURL(e)
                })
            }
        };

    function te() {
        return this
    }

    function ne(e, t) {
        let n = !1;
        return {
            [Symbol.iterator]: te,
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

    function re(e) {
        let t, n, r = !1;
        const o = e(function (e) {
            return n ? (n(e), n = null) : r = !0, t = e
        });
        return {
            [Symbol.iterator]: te,
            throw: () => ({
                done: !0
            }),
            return: () => (null != o && o(), {
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

    function oe(e) {
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
    var ie = {
        disposable: ne,
        filter: function* (e, t) {
            for (var n, r = -1; !(n = e.next()).done;) t(n.value, ++r) && (yield n.value)
        },
        input: function (e) {
            return re(function (t) {
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
                    r = oe(e);

                function o() {
                    t(oe(e))
                }
                return e.addEventListener(n, o), void 0 !== r && t(r),
                    function () {
                        e.removeEventListener(n, o)
                    }
            })
        },
        map: function* (e, t) {
            for (var n, r = -1; !(n = e.next()).done;) yield t(n.value, ++r)
        },
        observe: re,
        queue: function (e) {
            let t;
            const n = [],
                r = e(function (e) {
                    return n.push(e), t && (t(n.shift()), t = null), e
                });
            return {
                [Symbol.iterator]: te,
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
            e = +e, t = +t, n = (o = arguments.length) < 2 ? (t = e, e = 0, 1) : o < 3 ? 1 : +n;
            for (var r = -1, o = 0 | Math.max(0, Math.ceil((t - e) / n)); ++r < o;) yield e + r * n
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
            return ne(n, () => {
                n.terminate(), URL.revokeObjectURL(t)
            })
        }
    };

    function ae(e, t) {
        return function (n) {
            var r, o, i, a, s, u, l, c, d = n[0],
                f = [],
                p = null,
                h = -1;
            for (s = 1, u = arguments.length; s < u; ++s) {
                if ((r = arguments[s]) instanceof Node) f[++h] = r, d += "\x3c!--o:" + h + "--\x3e";
                else if (Array.isArray(r)) {
                    for (l = 0, c = r.length; l < c; ++l)(o = r[l]) instanceof Node ? (null === p && (f[++h] = p = document.createDocumentFragment(), d += "\x3c!--o:" + h + "--\x3e"), p.appendChild(o)) : (p = null, d += o);
                    p = null
                } else d += r;
                d += n[s]
            }
            if (p = e(d), ++h > 0) {
                for (i = new Array(h), a = document.createTreeWalker(p, NodeFilter.SHOW_COMMENT, null, !1); a.nextNode();) o = a.currentNode, /^o:/.test(o.nodeValue) && (i[+o.nodeValue.slice(2)] = o);
                for (s = 0; s < h; ++s)(o = i[s]) && o.parentNode.replaceChild(f[s], o)
            }
            return 1 === p.childNodes.length ? p.removeChild(p.firstChild) : 11 === p.nodeType ? ((o = t()).appendChild(p), o) : p
        }
    }
    var se = ae(function (e) {
        var t = document.createElement("template");
        return t.innerHTML = e.trim(), document.importNode(t.content, !0)
    }, function () {
        return document.createElement("div")
    });

    function ue(e) {
        let t;
        Object.defineProperties(this, {
            generator: {
                value: re(e => void(t = e))
            },
            value: {
                get: () => e,
                set: n => t(e = n)
            }
        }), void 0 !== e && t(e)
    }

    function* le() {
        for (;;) yield Date.now()
    }
    var ce = new Map;

    function de(e, t) {
        var n;
        return (n = ce.get(e = +e)) ? n.then(X(t)) : (n = Date.now()) >= e ? Promise.resolve(t) : function (e, t) {
            var n = new Promise(function (n) {
                ce.delete(t);
                var r = t - e;
                if (!(r > 0)) throw new Error("invalid time");
                if (r > 2147483647) throw new Error("too long to wait");
                setTimeout(n, r)
            });
            return ce.set(t, n), n
        }(n, e).then(X(t))
    }
    var fe = {
        delay: function (e, t) {
            return new Promise(function (n) {
                setTimeout(function () {
                    n(t)
                }, e)
            })
        },
        tick: function (e, t) {
            return de(Math.ceil((Date.now() + 1) / e) * e, t)
        },
        when: de
    };

    function pe(e, t) {
        if (/^(\w+:)|\/\//i.test(e)) return e;
        if (/^[.]{0,2}\//i.test(e)) return new URL(e, null == t ? location : t).href;
        if (!e.length || /^[\s._]/.test(e) || /\s$/.test(e)) throw new Error("illegal name");
        return "https://unpkg.com/" + e
    }
    const he = new Map,
        me = [],
        ve = me.map,
        be = me.some,
        _e = me.hasOwnProperty,
        we = "https://unpkg.com/",
        ge = /^((?:@[^\/@]+\/)?[^\/@]+)(?:@([^\/]+))?(?:\/(.*))?$/,
        ye = /^\d+\.\d+\.\d+(-[\w-.+]+)?$/;

    function xe(e) {
        return "string" == typeof e ? e : ""
    }

    function Ee(e) {
        const t = ge.exec(e);
        return t && {
            name: t[1],
            version: t[2],
            path: t[3]
        }
    }

    function Ce(e) {
        const t = `${we}${e.name}${e.version?`@${e.version}`:""}/package.json`;
        let n = he.get(t);
        return n || he.set(t, n = fetch(t).then(e => {
            if (!e.ok) throw new Error("unable to load package.json");
            return e.redirected && !he.has(e.url) && he.set(e.url, n), e.json()
        })), n
    }
    const qe = ke(async function (e, t) {
        if (e.startsWith(we) && (e = e.substring(we.length)), /^(\w+:)|\/\//i.test(e)) return e;
        if (/^[.]{0,2}\//i.test(e)) return new URL(e, null == t ? location : t).href;
        if (!e.length || /^[\s._]/.test(e) || /\s$/.test(e)) throw new Error("illegal name");
        const n = Ee(e);
        if (!n) return `${we}${e}`;
        if (!n.version && null != t && t.startsWith(we)) {
            const e = await Ce(Ee(t.substring(we.length)));
            n.version = e.dependencies && e.dependencies[n.name] || e.peerDependencies && e.peerDependencies[n.name]
        }
        if (n.path && n.version && ye.test(n.version)) return `${we}${n.name}@${n.version}/${n.path}`;
        const r = await Ce(n);
        return `${we}${r.name}@${r.version}/${n.path||xe(r.unpkg)||xe(r.browser)||xe(r.main)||"index.js"}`
    });

    function ke(e) {
        const t = new Map,
            n = o(null);

        function r(e) {
            if ("string" != typeof e) return e;
            let n = t.get(e);
            return n || t.set(e, n = new Promise((t, n) => {
                const r = document.createElement("script");
                r.onload = (() => {
                    try {
                        t(me.pop()(o(e)))
                    } catch (e) {
                        n(new Error("invalid module"))
                    }
                    r.remove()
                }), r.onerror = (() => {
                    n(new Error("unable to load module")), r.remove()
                }), r.async = !0, r.src = e, window.define = Me, document.head.appendChild(r)
            })), n
        }

        function o(t) {
            return n => Promise.resolve(e(n, t)).then(r)
        }

        function i(e) {
            return arguments.length > 1 ? Promise.all(ve.call(arguments, n)).then(Ne) : n(e)
        }
        return i.alias = function (t) {
            return ke((n, r) => n in t && (r = null, "string" != typeof (n = t[n])) ? n : e(n, r))
        }, i.resolve = e, i
    }

    function Ne(e) {
        const t = {};
        for (const n of e)
            for (const e in n) _e.call(n, e) && (null == n[e] ? Object.defineProperty(t, e, {
                get: Oe(n, e)
            }) : t[e] = n[e]);
        return t
    }

    function Oe(e, t) {
        return () => e[t]
    }

    function Pe(e) {
        return e + "" == "exports"
    }

    function Me(e, t, n) {
        const r = arguments.length;
        r < 2 ? (n = e, t = []) : r < 3 && (n = t, t = "string" == typeof e ? [] : e), me.push(be.call(t, Pe) ? e => {
            const r = {};
            return Promise.all(ve.call(t, t => Pe(t += "") ? r : e(t))).then(e => (n.apply(null, e), r))
        } : e => Promise.all(ve.call(t, e)).then(e => "function" == typeof n ? n.apply(null, e) : n))
    }
    Me.amd = {};
    var Se = ae(function (e) {
            var t = document.createElementNS("http://www.w3.org/2000/svg", "g");
            return t.innerHTML = e.trim(), t
        }, function () {
            return document.createElementNS("http://www.w3.org/2000/svg", "g")
        }),
        je = String.raw;

    function $e(e) {
        return new Promise(function (t, n) {
            var r = document.createElement("link");
            r.rel = "stylesheet", r.href = e, r.onerror = n, r.onload = t, document.head.appendChild(r)
        })
    }
    var Le = 28;

    function Ae() {
        return re(function (e) {
            var t = e(window.innerWidth - Le);

            function n() {
                var n = window.innerWidth - Le;
                n !== t && e(t = n)
            }
            return window.addEventListener("resize", n),
                function () {
                    window.removeEventListener("resize", n)
                }
        })
    }

    function Te(e) {
        const t = function (e) {
            return null == e ? qe : ke(e)
        }(e);
        Object.defineProperties(this, {
            DOM: {
                value: Z,
                writable: !0,
                enumerable: !0
            },
            Files: {
                value: ee,
                writable: !0,
                enumerable: !0
            },
            Generators: {
                value: ie,
                writable: !0,
                enumerable: !0
            },
            html: {
                value: X(se),
                writable: !0,
                enumerable: !0
            },
            md: {
                value: function (e) {
                    return function () {
                        return e("marked@0.3.12/marked.min.js").then(function (t) {
                            return ae(function (n) {
                                var r = document.createElement("div");
                                r.innerHTML = t(n, {
                                    langPrefix: ""
                                }).trim();
                                var o = r.querySelectorAll("pre code[class]");
                                return o.length > 0 && e("@observablehq/highlight.js@1.1.1/highlight.min.js").then(function (e) {
                                    o.forEach(e.highlightBlock)
                                }), r
                            }, function () {
                                return document.createElement("div")
                            })
                        })
                    }
                }(t),
                writable: !0,
                enumerable: !0
            },
            Mutable: {
                value: X(ue),
                writable: !0,
                enumerable: !0
            },
            now: {
                value: le,
                writable: !0,
                enumerable: !0
            },
            Promises: {
                value: fe,
                writable: !0,
                enumerable: !0
            },
            require: {
                value: X(t),
                writable: !0,
                enumerable: !0
            },
            resolve: {
                value: X(pe),
                writable: !0,
                enumerable: !0
            },
            svg: {
                value: X(Se),
                writable: !0,
                enumerable: !0
            },
            tex: {
                value: function (e) {
                    return function () {
                        return Promise.all([e("@observablehq/katex@0.10.1/dist/katex.min.js"), e.resolve("@observablehq/katex@0.10.1/dist/katex.min.css").then($e)]).then(function (e) {
                            var t = e[0],
                                n = r();

                            function r(e) {
                                return function () {
                                    var n = document.createElement("div");
                                    return t.render(je.apply(String, arguments), n, e), n.removeChild(n.firstChild)
                                }
                            }
                            return n.block = r({
                                displayMode: !0
                            }), n
                        })
                    }
                }(t),
                writable: !0,
                enumerable: !0
            },
            width: {
                value: Ae,
                writable: !0,
                enumerable: !0
            }
        })
    }

    function ze(e, t) {
        this.message = e + "", this.input = t
    }
    ze.prototype = Object.create(Error.prototype), ze.prototype.name = "RuntimeError", ze.prototype.constructor = ze;
    var Re = Array.prototype,
        De = Re.map,
        Fe = Re.forEach;

    function Ue(e) {
        return function () {
            return e
        }
    }

    function We(e) {
        return e
    }

    function Be() {}
    var He = 2,
        Ie = 3,
        Ge = {};

    function Ve(e, t, n) {
        var r;
        null == n && (n = Ge), Object.defineProperties(this, {
            _observer: {
                value: n,
                writable: !0
            },
            _definition: {
                value: Ye,
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
                value: -1,
                writable: !0
            },
            _inputs: {
                value: [],
                writable: !0
            },
            _invalidate: {
                value: Be,
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
                value: n !== Ge,
                writable: !0
            },
            _rejector: {
                value: (r = this, function (e) {
                    if (e === Ye) throw new ze(r._name + " is not defined", r._name);
                    throw new ze(r._name + " could not be resolved", r._name)
                })
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

    function Je(e) {
        e._module._runtime._dirty.add(e), e._outputs.add(this)
    }

    function Xe(e) {
        e._module._runtime._dirty.add(e), e._outputs.delete(this)
    }

    function Ye() {
        throw Ye
    }

    function Ke(e) {
        return function () {
            throw new ze(e + " is defined more than once")
        }
    }

    function Qe(e, t, n) {
        var r = this._module._scope,
            o = this._module._runtime;
        if (this._inputs.forEach(Xe, this), t.forEach(Je, this), this._inputs = t, this._definition = n, this._value = void 0, e == this._name && r.get(e) === this) this._outputs.forEach(o._updates.add, o._updates);
        else {
            var i, a;
            if (this._name)
                if (this._outputs.size) r.delete(this._name), (a = this._module._resolve(this._name))._outputs = this._outputs, this._outputs = new Set, a._outputs.forEach(function (e) {
                    e._inputs[e._inputs.indexOf(this)] = a
                }, this), a._outputs.forEach(o._updates.add, o._updates), o._dirty.add(a).add(this), r.set(this._name, a);
                else if ((a = r.get(this._name)) === this) r.delete(this._name);
            else {
                if (a._type !== Ie) throw new Error;
                a._duplicates.delete(this), this._duplicate = void 0, 1 === a._duplicates.size && (a = a._duplicates.keys().next().value, i = r.get(this._name), a._outputs = i._outputs, i._outputs = new Set, a._outputs.forEach(function (e) {
                    e._inputs[e._inputs.indexOf(i)] = a
                }), a._definition = a._duplicate, a._duplicate = void 0, o._dirty.add(i).add(a), o._updates.add(a), r.set(this._name, a))
            }
            if (this._outputs.size) throw new Error;
            e && ((a = r.get(e)) ? a._type === Ie ? (this._definition = Ke(e), this._duplicate = n, a._duplicates.add(this)) : a._type === He ? (this._outputs = a._outputs, a._outputs = new Set, this._outputs.forEach(function (e) {
                e._inputs[e._inputs.indexOf(a)] = this
            }, this), o._dirty.add(a).add(this), r.set(e, this)) : (a._duplicate = a._definition, this._duplicate = n, (i = new Ve(Ie, this._module))._name = e, i._definition = this._definition = a._definition = Ke(e), i._outputs = a._outputs, a._outputs = new Set, i._outputs.forEach(function (e) {
                e._inputs[e._inputs.indexOf(a)] = i
            }), i._duplicates = new Set([this, a]), o._dirty.add(a).add(i), o._updates.add(a).add(i), r.set(e, i)) : r.set(e, this)), this._name = e
        }
        return o._updates.add(this), o._compute(), this
    }
    Object.defineProperties(Ve.prototype, {
        _pending: {
            value: function () {
                this._observer.pending && this._observer.pending()
            },
            writable: !0,
            configurable: !0
        },
        _fulfilled: {
            value: function (e) {
                this._observer.fulfilled && this._observer.fulfilled(e)
            },
            writable: !0,
            configurable: !0
        },
        _rejected: {
            value: function (e) {
                this._observer.rejected && this._observer.rejected(e)
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
                return Qe.call(this, null == e ? null : e + "", null == t ? [] : De.call(t, this._module._resolve, this._module), "function" == typeof n ? n : Ue(n))
            },
            writable: !0,
            configurable: !0
        },
        delete: {
            value: function () {
                return Qe.call(this, null, [], Be)
            },
            writable: !0,
            configurable: !0
        },
        import: {
            value: function (e, t, n) {
                return arguments.length < 3 && (n = t, t = e), Qe.call(this, t + "", [n._resolve(e + "")], We)
            },
            writable: !0,
            configurable: !0
        }
    });
    var Ze = new Map;

    function et(e) {
        Object.defineProperties(this, {
            _runtime: {
                value: e
            },
            _scope: {
                value: new Map
            }
        })
    }

    function tt(e) {
        return e._name
    }
    Object.defineProperties(et.prototype, {
        _copy: {
            value: function (e, t, n) {
                var r = new et(this._runtime);
                return n.set(this, r), this._scope.forEach(function (o, i) {
                    var a, s = new Ve(o._type, r);
                    if (a = e.get(i)) s.import(a.name, a.alias, t);
                    else if (o._definition === We) {
                        var u = o._inputs[0],
                            l = u._module,
                            c = n.get(l) || l._copy(Ze, null, n);
                        s.import(u._name, i, c)
                    } else s.define(i, o._inputs.map(tt), o._definition)
                }), r
            },
            writable: !0,
            configurable: !0
        },
        _resolve: {
            value: function (e) {
                var t, n = this._scope.get(e);
                return n || (n = new Ve(He, this), this._runtime._builtin._scope.has(e) ? n.import(e, this._runtime._builtin) : void 0 !== (t = this._runtime._global(e)) ? n.define(e, Ue(t)) : "invalidation" === e ? n.define(e, nt) : "visibility" === e ? n.define(e, rt) : this._scope.set(n._name = e, n)), n
            },
            writable: !0,
            configurable: !0
        },
        define: {
            value: function () {
                var e = new Ve(1, this);
                return e.define.apply(e, arguments)
            },
            writable: !0,
            configurable: !0
        },
        derive: {
            value: function (e, t) {
                var n = new Map;
                return Fe.call(e, function (e) {
                    "object" != typeof e && (e = {
                        name: e + ""
                    }), null == e.alias && (e.alias = e.name), n.set(e.alias, e)
                }), this._copy(n, t, new Map)
            },
            writable: !0,
            configurable: !0
        },
        import: {
            value: function () {
                var e = new Ve(1, this);
                return e.import.apply(e, arguments)
            },
            writable: !0,
            configurable: !0
        },
        variable: {
            value: function (e) {
                return new Ve(1, this, e)
            },
            writable: !0,
            configurable: !0
        }
    });
    var nt = {},
        rt = {};

    function ot(e, t = function (e) {
        return window[e]
    }) {
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
                _builtin: {
                    value: n
                },
                _global: {
                    value: t
                }
            }), e)
            for (var r in e) new Ve(He, n).define(r, [], e[r])
    }

    function it(e) {
        ++e._indegree
    }

    function at(e) {
        return e._promise.catch(e._rejector)
    }

    function st(e) {
        return new Promise(function (t) {
            e._invalidate = t
        })
    }

    function ut(e, t) {
        let n, r, o = "function" == typeof IntersectionObserver && t._observer && t._observer._node,
            i = !o,
            a = Be,
            s = Be;
        return o && ((r = new IntersectionObserver(([e]) => (i = e.isIntersecting) && (n = null, a()))).observe(o), e.then(() => (r.disconnect(), r = null, s()))),
            function (e) {
                return i ? Promise.resolve(e) : r ? (n || (n = new Promise((e, t) => (a = e, s = t))), n.then(() => e)) : Promise.reject()
            }
    }

    function lt(e) {
        e._invalidate(), e._invalidate = Be, e._pending();
        var t = e._value,
            n = ++e._version,
            r = null,
            o = e._promise = Promise.all(e._inputs.map(at)).then(function (o) {
                if (e._version === n) {
                    for (var i = 0, a = o.length; i < a; ++i) switch (o[i]) {
                        case nt:
                            o[i] = r = st(e);
                            break;
                        case rt:
                            r || (r = st(e)), o[i] = ut(r, e)
                    }
                    return e._definition.apply(t, o)
                }
            }).then(function (t) {
                return function (e) {
                    return e && "function" == typeof e.next && "function" == typeof e.return
                }(t) ? ((r || st(e)).then((i = t, function () {
                    i.return()
                })), function (e, t, n, r) {
                    function o() {
                        var n = new Promise(function (e) {
                            e(r.next())
                        }).then(function (r) {
                            return r.done ? void 0 : Promise.resolve(r.value).then(function (r) {
                                if (e._version === t) return ct(e, r, n).then(o), e._fulfilled(r), r
                            })
                        });
                        n.catch(function (r) {
                            e._version === t && (ct(e, void 0, n), e._rejected(r))
                        })
                    }
                    return new Promise(function (e) {
                        e(r.next())
                    }).then(function (e) {
                        if (!e.done) return n.then(o), e.value
                    })
                }(e, n, o, t)) : t;
                var i
            });
        o.then(function (t) {
            e._version === n && (e._value = t, e._fulfilled(t))
        }, function (t) {
            e._version === n && (e._value = void 0, e._rejected(t))
        })
    }

    function ct(e, t, n) {
        var r = e._module._runtime;
        return e._value = t, e._promise = n, e._outputs.forEach(r._updates.add, r._updates), r._compute()
    }
    let dt, ft, pt, ht;

    function mt() {
        const e = new Promise(e => ht = e);
        return parent.postMessage({
            type: "secrets"
        }, "https://beta.observablehq.com"), e.then(e => {
            const t = new Map(e.map(({
                name: e,
                value: t
            }) => [e, t]));
            return function (e) {
                if (!t.has(e += "")) throw new Error("secret not found");
                return t.get(e)
            }
        })
    }

    function vt(e) {
        let t = ft.get(e);
        return t || ft.set(e, t = pt.module()), t
    }

    function bt(e) {
        const t = e ? new J(e) : null;
        Object.defineProperties(this, {
            _node: {
                value: e
            },
            _error: {
                value: void 0,
                writable: !0
            },
            _variable: {
                value: dt.variable(t)
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

    function _t(e, t) {
        let n = e._scope.get(t);
        return n ? n._exdegree = (n._exdegree || 0) + 1 : (n = e.variable())._exdegree = 1, n
    }

    function wt(e, t, n) {
        const r = `viewof ${e.name}`;
        t.define(r, e.inputs, e.value), n.define(e.name, ["Generators", r], Ct)
    }

    function gt(e, t, n, r) {
        const o = `initial ${e.name}`,
            i = `mutable ${e.name}`;
        t.define(o, e.inputs, e.value), n.define(i, ["Mutable", o], qt), r.define(e.name, [i], kt)
    }

    function yt(e) {
        e._imports && (e._imports.forEach(Et), e._imports = null)
    }

    function xt(e) {
        e._initializer && (e._initializer.delete(), e._initializer = null), e._source && (e._source.delete(), e._source = null)
    }

    function Et(e) {
        0 == --e._exdegree && e.delete()
    }

    function Ct(e, t) {
        return e.input(t)
    }

    function qt(e, t) {
        return new e(t)
    }

    function kt(e) {
        return e.generator
    }
    Object.defineProperties(ot, {
        load: {
            value: function (e, t, n) {
                if ("function" == typeof t && (n = t, t = null), "function" != typeof n) throw new Error("invalid observer");
                null == t && (t = new Te);
                const {
                    modules: r,
                    id: o
                } = e, i = new Map, a = new ot(t), s = u(o);

                function u(e) {
                    let t = i.get(e);
                    return t || i.set(e, t = a.module()), t
                }
                for (const l of r) {
                    const e = u(l.id);
                    let t = 0;
                    for (const r of l.variables) r.from ? e.import(r.remote, r.name, u(r.from)) : e === s ? e.variable(n(r, t, l.variables)).define(r.name, r.inputs, r.value) : e.define(r.name, r.inputs, r.value), ++t
                }
                return a
            },
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperties(ot.prototype, {
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
                return new Promise(function (t) {
                    requestAnimationFrame(function () {
                        t(), e._computeNow()
                    })
                })
            },
            writable: !0,
            configurable: !0
        },
        _computeNow: {
            value: function () {
                var e, t, n = [];
                for ((e = new Set(this._dirty)).forEach(function (t) {
                        t._inputs.forEach(e.add, e);
                        const n = function (e) {
                            if (e._observer !== Ge) return !0;
                            var t = new Set(e._outputs);
                            for (const n of t) {
                                if (n._observer !== Ge) return !0;
                                n._outputs.forEach(t.add, t)
                            }
                            return !1
                        }(t);
                        n > t._reachable ? this._updates.add(t) : n < t._reachable && t._invalidate(), t._reachable = n
                    }, this), (e = new Set(this._updates)).forEach(function (t) {
                        t._reachable ? (t._indegree = 0, t._outputs.forEach(e.add, e)) : (t._indegree = -1, e.delete(t))
                    }), this._computing = null, this._updates.clear(), this._dirty.clear(), e.forEach(function (e) {
                        e._outputs.forEach(it)
                    }), e.forEach(function (e) {
                        0 === e._indegree && n.push(e)
                    }); t = n.pop();) lt(t), t._outputs.forEach(r), e.delete(t);

                function r(e) {
                    0 == --e._indegree && n.push(e)
                }
                e.forEach(function (e) {
                    var t = new ze("circular definition");
                    e._value = void 0, (e._promise = Promise.reject(t)).catch(Be), e._rejected(t)
                })
            },
            writable: !0,
            configurable: !0
        },
        module: {
            value: function () {
                return new et(this)
            },
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperties(bt.prototype, {
        define: {
            value: function (e) {
                if (yt(this), e.modules) {
                    const t = [],
                        n = vt(e.id);
                    e.modules.forEach(e => {
                        const n = vt(e.id);
                        e.values.forEach(e => {
                            let r = n._scope.get(e.name);
                            if (r ? r._exdegree = (r._exdegree || 0) + 1 : (r = n.variable())._exdegree = 1, e.module) r.import(e.remote, e.name, vt(e.module));
                            else if (e.view) {
                                const o = _t(n, `viewof ${e.name}`);
                                wt(e, o, r), t.push(o)
                            } else if (e.mutable) {
                                const o = _t(n, `initial ${e.name}`),
                                    i = _t(n, `mutable ${e.name}`);
                                gt(e, o, i, r), t.push(i)
                            } else r.define(e.name, e.inputs, e.value);
                            t.push(r)
                        })
                    }), e.imports.forEach(e => {
                        const r = dt.variable();
                        r._exdegree = 1, r.import(e.remote, e.name, n), t.push(r)
                    }), xt(this), this._imports = t, this._variable.define(function (e) {
                        const {
                            module: t,
                            origin: n
                        } = e, r = document.createElement("span");
                        r.className = "observablehq--inspect observablehq--import", r.appendChild(document.createTextNode("import "));
                        const o = r.appendChild(document.createElement("a")),
                            i = t.replace(/@[0-9]+(?=\?|$)/, "");
                        return o.href = `${n}/${t.indexOf("/")<0?"d/":""}${i}`, o.textContent = t, r
                    }(e))
                } else e.view ? (this._source || (this._source = dt.variable()), wt(e, this._variable, this._source)) : e.mutable ? (this._initializer || (this._initializer = dt.variable()), this._source || (this._source = dt.variable()), gt(e, this._initializer, this._source, this._variable)) : (xt(this), this._variable.define(e.name, e.inputs, e.value));
                return this
            },
            writable: !0,
            configurable: !0
        },
        delete: {
            value: function () {
                yt(this), xt(this), this._variable.delete()
            },
            writable: !0,
            configurable: !0
        }
    });
    let Nt = null,
        Ot = new Set;

    function Pt(t) {
        const n = document.createElement("div");
        n.id = `r${t}`, n.setAttribute("dir", "auto"), n.className = "observablehq";
        const r = new bt(n);
        let o;
        r.resize = function () {
            const t = Math.max(e, n.offsetHeight);
            r._height !== t && (parent.postMessage({
                type: "resize",
                id: r._id,
                height: t
            }, "https://beta.observablehq.com"), r._height = t)
        }, "undefined" == typeof ResizeObserver ? ((o = new MutationObserver(r.resize)).observe(n, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
        }), n.addEventListener("load", r.resize, !0)) : (o = new ResizeObserver(r.resize)).observe(n);
        let i = e => (function (e, t) {
            e._loaded || (e._loaded = !0, parent.postMessage({
                type: "load",
                id: e._id
            }, "https://beta.observablehq.com"));
            const n = t.detail && t.detail.error;
            (n || e._error) && (e._error = n, parent.postMessage({
                type: "error",
                id: e._id,
                error: n && {
                    message: Mt(n.message),
                    stack: Mt(n.stack),
                    runtime: n instanceof ze ? {
                        input: Mt(n.input)
                    } : null
                }
            }, "https://beta.observablehq.com"));
            Ot.add(e._node), null === Nt && (Nt = requestAnimationFrame(St));
            e._node.classList.add("observablehq--changed"), e.resize()
        })(r, e);
        return n.addEventListener("update", i, !0), n.addEventListener("error", i, !0), n.addEventListener("mouseenter", () => {
            parent.postMessage({
                type: "hover",
                id: r._id
            }, "https://beta.observablehq.com")
        }), Object.defineProperties(r, {
            _id: {
                value: t
            },
            _height: {
                value: e,
                writable: !0
            },
            _resizer: {
                value: o,
                writable: !1
            },
            _timeout: {
                value: null,
                writable: !0
            }
        }), r
    }

    function Mt(e) {
        return null == e ? void 0 : e + ""
    }

    function St() {
        for (const e of Ot) e.classList.remove("observablehq--changed");
        Ot = new Set, Nt = null
    }
    const jt = eval;

    function $t(e) {
        try {
            return jt(e)
        } catch (t) {
            return function (e) {
                return function () {
                    throw e
                }
            }(t)
        }
    }

    function Lt(e) {
        try {
            return new Function(e), !0
        } catch (n) {}
    }
    var At = [{
        name: "asyncGenerator",
        support: Lt("async function* a() {}")
    }, {
        name: "bigInt",
        support: "undefined" != typeof BigInt
    }, {
        name: "dynamicImport",
        support: Lt('import("")')
    }];

    function Tt({
        name: e,
        path: t,
        prefix: n
    }) {
        const r = dt._scope.get(e);
        if (!r || !r._value) return [];
        let o = r._value;
        for (let a of t) {
            const e = Object.getOwnPropertyDescriptor(o, a) || Object.getOwnPropertyDescriptor(Object.getPrototypeOf(o), a);
            if (!e || e.get) return [];
            o = o[a]
        }
        let i = function (e) {
            if (null == e) return [];
            let t = Object.keys(e),
                n = Object.getPrototypeOf(e);
            for (; n && n !== Object.prototype;) t = t.concat(Object.getOwnPropertyNames(n)), n = Object.getPrototypeOf(n);
            return t
        }(o).filter(e => /^[a-z_]/i.test(e));
        return n && (i = i.filter(e => e.startsWith(n))), i.slice(0, 200).sort()
    }
    const zt = document.body,
        Rt = new Map;

    function Dt(e) {
        const t = ((n = e).modules ? n.modules.forEach(e => {
            e.values.forEach(e => {
                "body" in e && (e.value = $t(e.body))
            })
        }) : n.value = $t(n.body), n);
        var n;
        return void 0 === t.value && (t.value = document.createTextNode("")), t
    }
    if (addEventListener("message", async function (e) {
            if ("https://beta.observablehq.com" === e.origin) switch (e.data.type) {
                case "hello":
                    dt || (pt = new ot(Object.assign(new Te, {
                        Secret: mt
                    })), dt = pt.module(), ft = new Map, parent.postMessage({
                        type: "ready",
                        platformSupport: At
                    }, "https://beta.observablehq.com")), e.data.id && ft.set(e.data.id, dt), e.data.path && (document.querySelector("base").href = `https://beta.observablehq.com${e.data.path}`);
                    break;
                case "bundle":
                    e.data.events.forEach(Ft);
                    break;
                default:
                    throw new Error("unknown event type")
            }
        }), "undefined" == typeof ResizeObserver) {
        let e = innerWidth;
        document.fonts && document.fonts.addEventListener("loadingdone", () => {
            Rt.forEach(e => e.resize())
        }), addEventListener("resize", () => {
            e !== innerWidth && (e = innerWidth, Rt.forEach(e => e.resize()))
        })
    }

    function Ft(e) {
        const {
            node_id: n
        } = e;
        switch (e.type) {
            case "insert_node":
                {
                    const t = Pt(n);
                    if (Rt.has(n)) throw new Error("duplicate node");Rt.set(n, t),
                    zt.insertBefore(t._node, Wt(e.new_next_node_id)),
                    t.define(Dt(e.new_node_value));
                    break
                }
            case "move_node":
                zt.insertBefore(Ut(n)._node, Wt(e.new_next_node_id));
                break;
            case "modify_node":
                Ut(n).define(Dt(e.new_node_value));
                break;
            case "offset_node":
                Ut(n)._node.style.marginBottom = `${t+e.height}px`;
                break;
            case "remove_node":
                {
                    const e = Ut(n);e.delete(),
                    Rt.delete(n),
                    e._resizer && e._resizer.disconnect(),
                    zt.removeChild(e._node);
                    break
                }
            case "crop":
                {
                    const {
                        minWidth: t,
                        minHeight: n
                    } = e;parent.postMessage({
                        type: "cropped",
                        crop: function (e, t) {
                            const n = innerWidth,
                                r = n / 1.6,
                                o = document.querySelectorAll("svg,img,canvas");
                            for (const a of o) {
                                const r = a.getBoundingClientRect();
                                if (r.width >= e && r.height >= t) {
                                    const e = Math.max(0, Math.min(n, r.x)),
                                        t = Math.max(0, Math.min(n, r.x + r.width)),
                                        o = Math.max(0, r.y);
                                    return {
                                        x: e,
                                        y: o,
                                        width: t - e,
                                        height: Math.max(0, r.y + r.height) - o
                                    }
                                }
                            }
                            const i = document.querySelector(".observablehq:first-of-type h1");
                            return {
                                x: 0,
                                y: i ? i.getBoundingClientRect().bottom : 0,
                                width: n,
                                height: r
                            }
                        }(t, n)
                    }, "https://beta.observablehq.com");
                    break
                }
            case "secrets":
                ht(e.secrets);
                break;
            case "dark":
                document.body.className = "observablehq--dark";
                break;
            case "autocomplete":
                parent.postMessage({
                    type: "autocompleted",
                    list: Tt(e),
                    nonce: e.nonce
                }, "https://beta.observablehq.com");
                break;
            default:
                throw new Error("unknown event type")
        }
    }

    function Ut(e) {
        const t = Rt.get(e);
        if (!t) throw new Error("unknown node");
        return t
    }

    function Wt(e) {
        return null === e ? null : zt.querySelector(`#r${e}`)
    }
}();