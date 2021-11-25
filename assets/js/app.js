(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
            [888], {
                4465: function(t, e, n) {
                    "use strict";
                    n.d(e, { Z: function() { return o } });
                    var r = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
                        o = function(t) { var e = {}; return function(n) { return void 0 === e[n] && (e[n] = t(n)), e[n] } }((function(t) { return r.test(t) || 111 === t.charCodeAt(0) && 110 === t.charCodeAt(1) && t.charCodeAt(2) < 91 }))
                },
                3905: function(t, e, n) {
                    "use strict";
                    n.d(e, { Zo: function() { return c }, kt: function() { return p } });
                    var r = n(7294);

                    function o(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

                    function i(t, e) {
                        var n = Object.keys(t);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(t);
                            e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r)
                        }
                        return n
                    }

                    function a(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? i(Object(n), !0).forEach((function(e) { o(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) }))
                        }
                        return t
                    }

                    function s(t, e) {
                        if (null == t) return {};
                        var n, r, o = function(t, e) {
                            if (null == t) return {};
                            var n, r, o = {},
                                i = Object.keys(t);
                            for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                            return o
                        }(t, e);
                        if (Object.getOwnPropertySymbols) { var i = Object.getOwnPropertySymbols(t); for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]) }
                        return o
                    }
                    var u = r.createContext({}),
                        l = function(t) {
                            var e = r.useContext(u),
                                n = e;
                            return t && (n = "function" === typeof t ? t(e) : a(a({}, e), t)), n
                        },
                        c = function(t) { var e = l(t.components); return r.createElement(u.Provider, { value: e }, t.children) },
                        f = { inlineCode: "code", wrapper: function(t) { var e = t.children; return r.createElement(r.Fragment, {}, e) } },
                        d = r.forwardRef((function(t, e) {
                            var n = t.components,
                                o = t.mdxType,
                                i = t.originalType,
                                u = t.parentName,
                                c = s(t, ["components", "mdxType", "originalType", "parentName"]),
                                d = l(n),
                                p = o,
                                h = d["".concat(u, ".").concat(p)] || d[p] || f[p] || i;
                            return n ? r.createElement(h, a(a({ ref: e }, c), {}, { components: n })) : r.createElement(h, a({ ref: e }, c))
                        }));

                    function p(t, e) {
                        var n = arguments,
                            o = e && e.mdxType;
                        if ("string" === typeof t || o) {
                            var i = n.length,
                                a = new Array(i);
                            a[0] = d;
                            var s = {};
                            for (var u in e) hasOwnProperty.call(e, u) && (s[u] = e[u]);
                            s.originalType = t, s.mdxType = "string" === typeof t ? t : o, a[1] = s;
                            for (var l = 2; l < i; l++) a[l] = n[l];
                            return r.createElement.apply(null, a)
                        }
                        return r.createElement.apply(null, n)
                    }
                    d.displayName = "MDXCreateElement"
                },
                9160: function(t, e, n) {
                    "use strict";
                    n.d(e, { M_: function() { return wi }, sm: function() { return Ci }, ww: function() { return vi }, q_: function() { return Li }, Hm: function() { return Mi } });
                    var r = function(t, e) {
                        return (r = Object.setPrototypeOf || { __proto__: [] }
                            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
                    };

                    function o(t, e) {
                        function n() { this.constructor = t }
                        r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                    }
                    var i = function() {
                        return (i = Object.assign || function(t) {
                            for (var e, n = 1, r = arguments.length; n < r; n++)
                                for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                            return t
                        }).apply(this, arguments)
                    };

                    function a(t, e) { var n = {}; for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]); if (null != t && "function" === typeof Object.getOwnPropertySymbols) { var o = 0; for (r = Object.getOwnPropertySymbols(t); o < r.length; o++) e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]]) } return n }

                    function s(t) {
                        var e = "function" === typeof Symbol && Symbol.iterator,
                            n = e && t[e],
                            r = 0;
                        if (n) return n.call(t);
                        if (t && "number" === typeof t.length) return { next: function() { return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t } } };
                        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
                    }

                    function u(t, e) {
                        var n = "function" === typeof Symbol && t[Symbol.iterator];
                        if (!n) return t;
                        var r, o, i = n.call(t),
                            a = [];
                        try {
                            for (;
                                (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
                        } catch (s) { o = { error: s } } finally { try { r && !r.done && (n = i.return) && n.call(i) } finally { if (o) throw o.error } }
                        return a
                    }

                    function l() { for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(u(arguments[e])); return t }
                    var c = 1 / 60 * 1e3,
                        f = "undefined" !== typeof window ? function(t) { return window.requestAnimationFrame(t) } : function(t) { return setTimeout((function() { return t(performance.now()) }), c) };
                    var d = !0,
                        p = !1,
                        h = !1,
                        v = { delta: 0, timestamp: 0 },
                        g = ["read", "update", "preRender", "render", "postRender"],
                        m = g.reduce((function(t, e) {
                            return t[e] = function(t) {
                                var e = [],
                                    n = [],
                                    r = 0,
                                    o = !1,
                                    i = new WeakSet,
                                    a = {
                                        schedule: function(t, a, s) {
                                            void 0 === a && (a = !1), void 0 === s && (s = !1);
                                            var u = s && o,
                                                l = u ? e : n;
                                            return a && i.add(t), -1 === l.indexOf(t) && (l.push(t), u && o && (r = e.length)), t
                                        },
                                        cancel: function(t) { var e = n.indexOf(t); - 1 !== e && n.splice(e, 1), i.delete(t) },
                                        process: function(s) {
                                            var u;
                                            if (o = !0, e = (u = [n, e])[0], (n = u[1]).length = 0, r = e.length)
                                                for (var l = 0; l < r; l++) {
                                                    var c = e[l];
                                                    c(s), i.has(c) && (a.schedule(c), t())
                                                }
                                            o = !1
                                        }
                                    };
                                return a
                            }((function() { return p = !0 })), t
                        }), {}),
                        y = g.reduce((function(t, e) { var n = m[e]; return t[e] = function(t, e, r) { return void 0 === e && (e = !1), void 0 === r && (r = !1), p || S(), n.schedule(t, e, r) }, t }), {}),
                        b = g.reduce((function(t, e) { return t[e] = m[e].cancel, t }), {}),
                        x = function(t) { return m[t].process(v) },
                        w = function(t) { p = !1, v.delta = d ? c : Math.max(Math.min(t - v.timestamp, 40), 1), v.timestamp = t, h = !0, g.forEach(x), h = !1, p && (d = !1, f(w)) },
                        S = function() { p = !0, d = !0, h || f(w) },
                        k = function() { return v },
                        E = y,
                        C = n(4394);
                    var j = function() {
                        return (j = Object.assign || function(t) {
                            for (var e, n = 1, r = arguments.length; n < r; n++)
                                for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                            return t
                        }).apply(this, arguments)
                    };
                    var O = function(t, e) { return function(n) { return Math.max(Math.min(n, e), t) } },
                        A = function(t) { return t % 1 ? Number(t.toFixed(5)) : t },
                        P = /(-)?(\d[\d\.]*)/g,
                        M = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
                        T = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i,
                        L = { test: function(t) { return "number" === typeof t }, parse: parseFloat, transform: function(t) { return t } },
                        B = j(j({}, L), { transform: O(0, 1) }),
                        R = j(j({}, L), { default: 1 }),
                        V = function(t) { return { test: function(e) { return "string" === typeof e && e.endsWith(t) && 1 === e.split(" ").length }, parse: parseFloat, transform: function(e) { return "" + e + t } } },
                        I = V("deg"),
                        D = V("%"),
                        $ = V("px"),
                        z = V("vh"),
                        F = V("vw"),
                        G = j(j({}, D), { parse: function(t) { return D.parse(t) / 100 }, transform: function(t) { return D.transform(100 * t) } }),
                        H = O(0, 255),
                        W = function(t) { return void 0 !== t.red },
                        _ = function(t) { return void 0 !== t.hue };
                    var U = function(t) { return function(e) { if ("string" !== typeof e) return e; for (var n = {}, r = function(t) { return t.substring(t.indexOf("(") + 1, t.lastIndexOf(")")) }(e).replace(/(,|\/)/g, " ").split(/ \s*/), o = 0; o < 4; o++) n[t[o]] = void 0 !== r[o] ? parseFloat(r[o]) : 1; return n } },
                        N = j(j({}, L), { transform: function(t) { return Math.round(H(t)) } });

                    function q(t, e) { return t.startsWith(e) && T.test(t) }
                    var X = {
                            test: function(t) { return "string" === typeof t ? q(t, "rgb") : W(t) },
                            parse: U(["red", "green", "blue", "alpha"]),
                            transform: function(t) {
                                var e = t.red,
                                    n = t.green,
                                    r = t.blue,
                                    o = t.alpha,
                                    i = void 0 === o ? 1 : o;
                                return function(t) {
                                    var e = t.red,
                                        n = t.green,
                                        r = t.blue,
                                        o = t.alpha;
                                    return "rgba(" + e + ", " + n + ", " + r + ", " + (void 0 === o ? 1 : o) + ")"
                                }({ red: N.transform(e), green: N.transform(n), blue: N.transform(r), alpha: A(B.transform(i)) })
                            }
                        },
                        Y = {
                            test: function(t) { return "string" === typeof t ? q(t, "hsl") : _(t) },
                            parse: U(["hue", "saturation", "lightness", "alpha"]),
                            transform: function(t) {
                                var e = t.hue,
                                    n = t.saturation,
                                    r = t.lightness,
                                    o = t.alpha,
                                    i = void 0 === o ? 1 : o;
                                return function(t) {
                                    var e = t.hue,
                                        n = t.saturation,
                                        r = t.lightness,
                                        o = t.alpha;
                                    return "hsla(" + e + ", " + n + ", " + r + ", " + (void 0 === o ? 1 : o) + ")"
                                }({ hue: Math.round(e), saturation: D.transform(A(n)), lightness: D.transform(A(r)), alpha: A(B.transform(i)) })
                            }
                        },
                        Z = j(j({}, X), {
                            test: function(t) { return "string" === typeof t && q(t, "#") },
                            parse: function(t) {
                                var e = "",
                                    n = "",
                                    r = "";
                                return t.length > 4 ? (e = t.substr(1, 2), n = t.substr(3, 2), r = t.substr(5, 2)) : (e = t.substr(1, 1), n = t.substr(2, 1), r = t.substr(3, 1), e += e, n += n, r += r), { red: parseInt(e, 16), green: parseInt(n, 16), blue: parseInt(r, 16), alpha: 1 }
                            }
                        }),
                        K = { test: function(t) { return "string" === typeof t && T.test(t) || W(t) || _(t) }, parse: function(t) { return X.test(t) ? X.parse(t) : Y.test(t) ? Y.parse(t) : Z.test(t) ? Z.parse(t) : t }, transform: function(t) { return W(t) ? X.transform(t) : _(t) ? Y.transform(t) : t } },
                        J = "${c}",
                        Q = "${n}",
                        tt = function(t) { return "number" === typeof t ? 0 : t },
                        et = {
                            test: function(t) {
                                if ("string" !== typeof t || !isNaN(t)) return !1;
                                var e = 0,
                                    n = t.match(P),
                                    r = t.match(M);
                                return n && (e += n.length), r && (e += r.length), e > 0
                            },
                            parse: function(t) {
                                var e = t,
                                    n = [],
                                    r = e.match(M);
                                r && (e = e.replace(M, J), n.push.apply(n, r.map(K.parse)));
                                var o = e.match(P);
                                return o && n.push.apply(n, o.map(L.parse)), n
                            },
                            createTransformer: function(t) {
                                var e = t,
                                    n = 0,
                                    r = t.match(M),
                                    o = r ? r.length : 0;
                                if (r)
                                    for (var i = 0; i < o; i++) e = e.replace(r[i], J), n++;
                                var a = e.match(P),
                                    s = a ? a.length : 0;
                                if (a)
                                    for (i = 0; i < s; i++) e = e.replace(a[i], Q), n++;
                                return function(t) { for (var r = e, i = 0; i < n; i++) r = r.replace(i < o ? J : Q, i < o ? K.transform(t[i]) : A(t[i])); return r }
                            },
                            getAnimatableNone: function(t) { var e = et.parse(t); return et.createTransformer(t)(e.map(tt)) }
                        },
                        nt = function(t, e, n) { return Math.min(Math.max(n, t), e) },
                        rt = .001;

                    function ot(t) {
                        var e, n, r = t.duration,
                            o = void 0 === r ? 800 : r,
                            i = t.bounce,
                            a = void 0 === i ? .25 : i,
                            s = t.velocity,
                            u = void 0 === s ? 0 : s,
                            l = t.mass,
                            c = void 0 === l ? 1 : l;
                        (0, C.K)(o <= 1e4, "Spring duration must be 10 seconds or less");
                        var f = 1 - a;
                        f = nt(.05, 1, f), o = nt(.01, 10, o / 1e3), f < 1 ? (e = function(t) {
                            var e = t * f,
                                n = e * o,
                                r = e - u,
                                i = it(t, f),
                                a = Math.exp(-n);
                            return rt - r / i * a
                        }, n = function(t) {
                            var n = t * f * o,
                                r = n * u + u,
                                i = Math.pow(f, 2) * Math.pow(t, 2) * o,
                                a = Math.exp(-n),
                                s = it(Math.pow(t, 2), f);
                            return (-e(t) + rt > 0 ? -1 : 1) * ((r - i) * a) / s
                        }) : (e = function(t) { return Math.exp(-t * o) * ((t - u) * o + 1) - .001 }, n = function(t) { return Math.exp(-t * o) * (o * o * (u - t)) });
                        var d = function(t, e, n) { for (var r = n, o = 1; o < 12; o++) r -= t(r) / e(r); return r }(e, n, 5 / o);
                        if (isNaN(d)) return { stiffness: 100, damping: 10 };
                        var p = Math.pow(d, 2) * c;
                        return { stiffness: p, damping: 2 * f * Math.sqrt(c * p) }
                    }

                    function it(t, e) { return t * Math.sqrt(1 - e * e) }
                    var at = ["duration", "bounce"],
                        st = ["stiffness", "damping", "mass"];

                    function ut(t, e) { return e.some((function(e) { return void 0 !== t[e] })) }

                    function lt(t) {
                        var e = t.from,
                            n = void 0 === e ? 0 : e,
                            r = t.to,
                            o = void 0 === r ? 1 : r,
                            s = t.restSpeed,
                            u = void 0 === s ? 2 : s,
                            l = t.restDelta,
                            c = a(t, ["from", "to", "restSpeed", "restDelta"]),
                            f = { done: !1, value: n },
                            d = function(t) {
                                var e = i({ velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1 }, t);
                                if (!ut(t, st) && ut(t, at)) {
                                    var n = ot(t);
                                    (e = i(i(i({}, e), n), { velocity: 0, mass: 1 })).isResolvedFromDuration = !0
                                }
                                return e
                            }(c),
                            p = d.stiffness,
                            h = d.damping,
                            v = d.mass,
                            g = d.velocity,
                            m = d.isResolvedFromDuration,
                            y = ct,
                            b = ct;

                        function x() {
                            var t = g ? -g / 1e3 : 0,
                                e = o - n,
                                r = h / (2 * Math.sqrt(p * v)),
                                i = Math.sqrt(p / v) / 1e3;
                            if (null !== l && void 0 !== l || (l = Math.abs(o - n) <= 1 ? .01 : .4), r < 1) {
                                var a = it(i, r);
                                y = function(n) { var s = Math.exp(-r * i * n); return o - s * ((t + r * i * e) / a * Math.sin(a * n) + e * Math.cos(a * n)) }, b = function(n) { var o = Math.exp(-r * i * n); return r * i * o * (Math.sin(a * n) * (t + r * i * e) / a + e * Math.cos(a * n)) - o * (Math.cos(a * n) * (t + r * i * e) - a * e * Math.sin(a * n)) }
                            } else if (1 === r) y = function(n) { return o - Math.exp(-i * n) * (e + (t + i * e) * n) };
                            else {
                                var s = i * Math.sqrt(r * r - 1);
                                y = function(n) {
                                    var a = Math.exp(-r * i * n),
                                        u = Math.min(s * n, 300);
                                    return o - a * ((t + r * i * e) * Math.sinh(u) + s * e * Math.cosh(u)) / s
                                }
                            }
                        }
                        return x(), {
                            next: function(t) {
                                var e = y(t);
                                if (m) f.done = t >= c.duration;
                                else {
                                    var n = 1e3 * b(t),
                                        r = Math.abs(n) <= u,
                                        i = Math.abs(o - e) <= l;
                                    f.done = r && i
                                }
                                return f.value = f.done ? o : e, f
                            },
                            flipTarget: function() {
                                var t;
                                g = -g, n = (t = [o, n])[0], o = t[1], x()
                            }
                        }
                    }
                    lt.needsInterpolation = function(t, e) { return "string" === typeof t || "string" === typeof e };
                    var ct = function(t) { return 0 },
                        ft = function(t, e, n) { var r = e - t; return 0 === r ? 1 : (n - t) / r },
                        dt = function(t, e, n) { return -n * t + n * e + t },
                        pt = function(t, e, n) {
                            var r = t * t,
                                o = e * e;
                            return Math.sqrt(Math.max(0, n * (o - r) + r))
                        },
                        ht = [Z, X, Y],
                        vt = function(t) { return ht.find((function(e) { return e.test(t) })) },
                        gt = function(t) { return "'" + t + "' is not an animatable color. Use the equivalent color code instead." },
                        mt = function(t, e) {
                            var n = vt(t),
                                r = vt(e);
                            (0, C.k)(!!n, gt(t)), (0, C.k)(!!r, gt(e)), (0, C.k)(n.transform === r.transform, "Both colors must be hex/RGBA, OR both must be HSLA.");
                            var o = n.parse(t),
                                a = r.parse(e),
                                s = i({}, o),
                                u = n === Y ? dt : pt;
                            return function(t) { for (var e in s) "alpha" !== e && (s[e] = u(o[e], a[e], t)); return s.alpha = dt(o.alpha, a.alpha, t), n.transform(s) }
                        },
                        yt = function(t) { return "number" === typeof t },
                        bt = function(t, e) { return function(n) { return e(t(n)) } },
                        xt = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]; return t.reduce(bt) };

                    function wt(t, e) { return yt(t) ? function(n) { return dt(t, e, n) } : K.test(t) ? mt(t, e) : Ct(t, e) }
                    var St = function(t, e) {
                            var n = function() {
                                    for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
                                    var r = Array(t),
                                        o = 0;
                                    for (e = 0; e < n; e++)
                                        for (var i = arguments[e], a = 0, s = i.length; a < s; a++, o++) r[o] = i[a];
                                    return r
                                }(t),
                                r = n.length,
                                o = t.map((function(t, n) { return wt(t, e[n]) }));
                            return function(t) { for (var e = 0; e < r; e++) n[e] = o[e](t); return n }
                        },
                        kt = function(t, e) {
                            var n = i(i({}, t), e),
                                r = {};
                            for (var o in n) void 0 !== t[o] && void 0 !== e[o] && (r[o] = wt(t[o], e[o]));
                            return function(t) { for (var e in r) n[e] = r[e](t); return n }
                        };

                    function Et(t) { for (var e = et.parse(t), n = e.length, r = 0, o = 0, i = 0, a = 0; a < n; a++) r || "number" === typeof e[a] ? r++ : void 0 !== e[a].hue ? i++ : o++; return { parsed: e, numNumbers: r, numRGB: o, numHSL: i } }
                    var Ct = function(t, e) {
                            var n = et.createTransformer(e),
                                r = Et(t),
                                o = Et(e);
                            return (0, C.k)(r.numHSL === o.numHSL && r.numRGB === o.numRGB && r.numNumbers >= o.numNumbers, "Complex values '" + t + "' and '" + e + "' too different to mix. Ensure all colors are of the same type."), xt(St(r.parsed, o.parsed), n)
                        },
                        jt = function(t, e) { return function(n) { return dt(t, e, n) } };

                    function Ot(t, e, n) {
                        for (var r, o = [], i = n || ("number" === typeof(r = t[0]) ? jt : "string" === typeof r ? K.test(r) ? mt : Ct : Array.isArray(r) ? St : "object" === typeof r ? kt : void 0), a = t.length - 1, s = 0; s < a; s++) {
                            var u = i(t[s], t[s + 1]);
                            if (e) {
                                var l = Array.isArray(e) ? e[s] : e;
                                u = xt(l, u)
                            }
                            o.push(u)
                        }
                        return o
                    }

                    function At(t, e, n) {
                        var r = void 0 === n ? {} : n,
                            o = r.clamp,
                            i = void 0 === o || o,
                            a = r.ease,
                            s = r.mixer,
                            u = t.length;
                        (0, C.k)(u === e.length, "Both input and output ranges must be the same length"), (0, C.k)(!a || !Array.isArray(a) || a.length === u - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), t[0] > t[u - 1] && (t = [].concat(t), e = [].concat(e), t.reverse(), e.reverse());
                        var l = Ot(e, a, s),
                            c = 2 === u ? function(t, e) {
                                var n = t[0],
                                    r = t[1],
                                    o = e[0];
                                return function(t) { return o(ft(n, r, t)) }
                            }(t, l) : function(t, e) {
                                var n = t.length,
                                    r = n - 1;
                                return function(o) {
                                    var i = 0,
                                        a = !1;
                                    if (o <= t[0] ? a = !0 : o >= t[r] && (i = r - 1, a = !0), !a) {
                                        for (var s = 1; s < n && !(t[s] > o || s === r); s++);
                                        i = s - 1
                                    }
                                    var u = ft(t[i], t[i + 1], o);
                                    return e[i](u)
                                }
                            }(t, l);
                        return i ? function(e) { return c(nt(t[0], t[u - 1], e)) } : c
                    }
                    var Pt = function(t) { return function(e) { return 1 - t(1 - e) } },
                        Mt = function(t) { return function(e) { return e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2 } },
                        Tt = function(t) { return function(e) { return e * e * ((t + 1) * e - t) } },
                        Lt = function(t) { var e = Tt(t); return function(t) { return (t *= 2) < 1 ? .5 * e(t) : .5 * (2 - Math.pow(2, -10 * (t - 1))) } },
                        Bt = function(t) { return t },
                        Rt = function(t) { return function(e) { return Math.pow(e, t) } }(2),
                        Vt = Pt(Rt),
                        It = Mt(Rt),
                        Dt = function(t) { return 1 - Math.sin(Math.acos(t)) },
                        $t = Pt(Dt),
                        zt = Mt($t),
                        Ft = Tt(1.525),
                        Gt = Pt(Ft),
                        Ht = Mt(Ft),
                        Wt = Lt(1.525),
                        _t = function(t) { if (1 === t || 0 === t) return t; var e = t * t; return t < .36363636363636365 ? 7.5625 * e : t < .7272727272727273 ? 9.075 * e - 9.9 * t + 3.4 : t < .9 ? 12.066481994459833 * e - 19.63545706371191 * t + 8.898060941828255 : 10.8 * t * t - 20.52 * t + 10.72 },
                        Ut = Pt(_t);

                    function Nt(t, e) { return t.map((function() { return e || It })).splice(0, t.length - 1) }

                    function qt(t) {
                        var e = t.from,
                            n = void 0 === e ? 0 : e,
                            r = t.to,
                            o = void 0 === r ? 1 : r,
                            i = t.ease,
                            a = t.offset,
                            s = t.duration,
                            u = void 0 === s ? 300 : s,
                            l = { done: !1, value: n },
                            c = Array.isArray(o) ? o : [n, o],
                            f = function(t, e) { return t.map((function(t) { return t * e })) }(a && a.length === c.length ? a : function(t) { var e = t.length; return t.map((function(t, n) { return 0 !== n ? n / (e - 1) : 0 })) }(c), u);

                        function d() { return At(f, c, { ease: Array.isArray(i) ? i : Nt(c, i) }) }
                        var p = d();
                        return { next: function(t) { return l.value = p(t), l.done = t >= u, l }, flipTarget: function() { c.reverse(), p = d() } }
                    }
                    var Xt = {
                        keyframes: qt,
                        spring: lt,
                        decay: function(t) {
                            var e = t.velocity,
                                n = void 0 === e ? 0 : e,
                                r = t.from,
                                o = void 0 === r ? 0 : r,
                                i = t.power,
                                a = void 0 === i ? .8 : i,
                                s = t.timeConstant,
                                u = void 0 === s ? 350 : s,
                                l = t.restDelta,
                                c = void 0 === l ? .5 : l,
                                f = t.modifyTarget,
                                d = { done: !1, value: o },
                                p = a * n,
                                h = o + p,
                                v = void 0 === f ? h : f(h);
                            return v !== h && (p = v - o), { next: function(t) { var e = -p * Math.exp(-t / u); return d.done = !(e > c || e < -c), d.value = d.done ? v : v + e, d }, flipTarget: function() {} }
                        }
                    };

                    function Yt(t, e, n) { return void 0 === n && (n = 0), t - e - n }
                    var Zt = function(t) { var e = function(e) { var n = e.delta; return t(n) }; return { start: function() { return E.update(e, !0, !0) }, stop: function() { return b.update(e) } } };

                    function Kt(t) {
                        var e, n, r, o, s, u = t.from,
                            l = t.autoplay,
                            c = void 0 === l || l,
                            f = t.driver,
                            d = void 0 === f ? Zt : f,
                            p = t.elapsed,
                            h = void 0 === p ? 0 : p,
                            v = t.repeat,
                            g = void 0 === v ? 0 : v,
                            m = t.repeatType,
                            y = void 0 === m ? "loop" : m,
                            b = t.repeatDelay,
                            x = void 0 === b ? 0 : b,
                            w = t.onPlay,
                            S = t.onStop,
                            k = t.onComplete,
                            E = t.onRepeat,
                            C = t.onUpdate,
                            j = a(t, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]),
                            O = j.to,
                            A = 0,
                            P = j.duration,
                            M = !1,
                            T = !0,
                            L = function(t) { if (Array.isArray(t.to)) return qt; if (Xt[t.type]) return Xt[t.type]; var e = new Set(Object.keys(t)); return e.has("ease") || e.has("duration") && !e.has("dampingRatio") ? qt : e.has("dampingRatio") || e.has("stiffness") || e.has("mass") || e.has("damping") || e.has("restSpeed") || e.has("restDelta") ? lt : qt }(j);
                        (null === (n = (e = L).needsInterpolation) || void 0 === n ? void 0 : n.call(e, u, O)) && (s = At([0, 100], [u, O], { clamp: !1 }), u = 0, O = 100);
                        var B = L(i(i({}, j), { from: u, to: O }));

                        function R() { A++, "reverse" === y ? h = function(t, e, n, r) { return void 0 === n && (n = 0), void 0 === r && (r = !0), r ? Yt(e + -t, e, n) : e - (t - e) + n }(h, P, x, T = A % 2 === 0) : (h = Yt(h, P, x), "mirror" === y && B.flipTarget()), M = !1, E && E() }

                        function V(t) {
                            if (T || (t = -t), h += t, !M) {
                                var e = B.next(Math.max(0, h));
                                o = e.value, s && (o = s(o)), M = T ? e.done : h <= 0
                            }
                            null === C || void 0 === C || C(o), M && (0 === A && (null !== P && void 0 !== P || (P = h)), A < g ? function(t, e, n, r) { return r ? t >= e + n : t <= -n }(h, P, x, T) && R() : (r.stop(), k && k()))
                        }
                        return c && (null === w || void 0 === w || w(), (r = d(V)).start()), { stop: function() { null === S || void 0 === S || S(), r.stop() } }
                    }

                    function Jt(t, e) { return e ? t * (1e3 / e) : 0 }
                    var Qt = function(t) { return t },
                        te = function(t) {
                            return void 0 === t && (t = Qt),
                                function(e, n, r) {
                                    var o = n - r,
                                        i = -(0 - e + 1) * (0 - t(Math.abs(o)));
                                    return o <= 0 ? n + i : n - i
                                }
                        },
                        ee = (Math.sqrt, function(t) { return t.hasOwnProperty("x") && t.hasOwnProperty("y") }),
                        ne = function(t) { return ee(t) && t.hasOwnProperty("z") },
                        re = function(t, e) { return Math.abs(t - e) };

                    function oe(t, e) {
                        if (yt(t) && yt(e)) return re(t, e);
                        if (ee(t) && ee(e)) {
                            var n = re(t.x, e.x),
                                r = re(t.y, e.y),
                                o = ne(t) && ne(e) ? re(t.z, e.z) : 0;
                            return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2) + Math.pow(o, 2))
                        }
                    }
                    var ie = function(t, e) { return 1 - 3 * e + 3 * t },
                        ae = function(t, e) { return 3 * e - 6 * t },
                        se = function(t) { return 3 * t },
                        ue = function(t, e, n) { return ((ie(e, n) * t + ae(e, n)) * t + se(e)) * t },
                        le = function(t, e, n) { return 3 * ie(e, n) * t * t + 2 * ae(e, n) * t + se(e) };
                    var ce = .1;

                    function fe(t, e, n, r) {
                        if (t === e && n === r) return Bt;
                        for (var o = new Float32Array(11), i = 0; i < 11; ++i) o[i] = ue(i * ce, t, n);

                        function a(e) {
                            for (var r = 0, i = 1; 10 !== i && o[i] <= e; ++i) r += ce;
                            --i;
                            var a = r + (e - o[i]) / (o[i + 1] - o[i]) * ce,
                                s = le(a, t, n);
                            return s >= .001 ? function(t, e, n, r) {
                                for (var o = 0; o < 8; ++o) {
                                    var i = le(e, n, r);
                                    if (0 === i) return e;
                                    e -= (ue(e, n, r) - t) / i
                                }
                                return e
                            }(e, a, t, n) : 0 === s ? a : function(t, e, n, r, o) {
                                var i, a, s = 0;
                                do {
                                    (i = ue(a = e + (n - e) / 2, r, o) - t) > 0 ? n = a : e = a
                                } while (Math.abs(i) > 1e-7 && ++s < 10);
                                return a
                            }(e, r, r + ce, t, n)
                        }
                        return function(t) { return 0 === t || 1 === t ? t : ue(a(t), e, r) }
                    }
                    var de = n(7294),
                        pe = function(t) { return "object" === typeof t && t.hasOwnProperty("current") },
                        he = function() {
                            function t() { this.subscriptions = new Set }
                            return t.prototype.add = function(t) {
                                var e = this;
                                return this.subscriptions.add(t),
                                    function() { e.subscriptions.delete(t) }
                            }, t.prototype.notify = function(t, e, n) {
                                var r, o;
                                if (this.subscriptions.size) try {
                                    for (var i = s(this.subscriptions), a = i.next(); !a.done; a = i.next()) {
                                        (0, a.value)(t, e, n)
                                    }
                                } catch (u) { r = { error: u } } finally { try { a && !a.done && (o = i.return) && o.call(i) } finally { if (r) throw r.error } }
                            }, t.prototype.clear = function() { this.subscriptions.clear() }, t
                        }(),
                        ve = function() {
                            function t(t) {
                                var e, n = this;
                                this.timeDelta = 0, this.lastUpdated = 0, this.updateSubscribers = new he, this.renderSubscribers = new he, this.canTrackVelocity = !1, this.updateAndNotify = function(t, e) {
                                    void 0 === e && (e = !0), n.prev = n.current, n.current = t, n.prev !== n.current && n.updateSubscribers.notify(n.current), e && n.renderSubscribers.notify(n.current);
                                    var r = k(),
                                        o = r.delta,
                                        i = r.timestamp;
                                    n.lastUpdated !== i && (n.timeDelta = o, n.lastUpdated = i, E.postRender(n.scheduleVelocityCheck))
                                }, this.scheduleVelocityCheck = function() { return E.postRender(n.velocityCheck) }, this.velocityCheck = function(t) { t.timestamp !== n.lastUpdated && (n.prev = n.current) }, this.current = t, this.canTrackVelocity = (e = this.current, !isNaN(parseFloat(e)))
                            }
                            return t.prototype.onChange = function(t) { return this.updateSubscribers.add(t) }, t.prototype.clearListeners = function() { this.updateSubscribers.clear() }, t.prototype.onRenderRequest = function(t) { return t(this.get()), this.renderSubscribers.add(t) }, t.prototype.attach = function(t) { this.passiveEffect = t }, t.prototype.set = function(t, e) { void 0 === e && (e = !0), e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e) }, t.prototype.get = function() { return this.current }, t.prototype.getPrevious = function() { return this.prev }, t.prototype.getVelocity = function() { return this.canTrackVelocity ? Jt(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0 }, t.prototype.start = function(t) { var e = this; return this.stop(), new Promise((function(n) { e.stopAnimation = t(n) })).then((function() { return e.clearAnimation() })) }, t.prototype.stop = function() { this.stopAnimation && this.stopAnimation(), this.clearAnimation() }, t.prototype.isAnimating = function() { return !!this.stopAnimation }, t.prototype.clearAnimation = function() { this.stopAnimation = null }, t.prototype.destroy = function() { this.updateSubscribers.clear(), this.renderSubscribers.clear(), this.stop() }, t
                        }();

                    function ge(t) { return new ve(t) }
                    var me = function() {
                        function t(t, e) {
                            var n = this;
                            this.children = new Set, this.baseTarget = {}, this.latest = {}, this.values = new Map, this.valueSubscriptions = new Map, this.config = {}, this.isMounted = !1, this.update = function() { return n.config.onUpdate(n.latest) }, this.triggerRender = function() { return n.render() }, this.ref = function(t) { t ? n.mount(t) : n.unmount(), n.externalRef && ("function" === typeof n.externalRef ? n.externalRef(t) : pe(n.externalRef) && (n.externalRef.current = t)) }, this.parent = t, this.rootParent = t ? t.rootParent : this, this.treePath = t ? l(t.treePath, [t]) : [], this.depth = t ? t.depth + 1 : 0, this.externalRef = e
                        }
                        return t.prototype.getVariantPayload = function() { return this.config.custom }, t.prototype.getVariant = function(t) { var e; return null === (e = this.config.variants) || void 0 === e ? void 0 : e[t] }, t.prototype.addVariantChild = function(t) {
                            var e = this;
                            return this.variantChildren || (this.variantChildren = new Set), this.variantChildren.add(t),
                                function() { return e.variantChildren.delete(t) }
                        }, t.prototype.addVariantChildOrder = function(t) { this.variantChildrenOrder || (this.variantChildrenOrder = new Set), this.variantChildrenOrder.add(t) }, t.prototype.onAnimationStart = function() {
                            var t, e;
                            null === (e = (t = this.config).onAnimationStart) || void 0 === e || e.call(t)
                        }, t.prototype.onAnimationComplete = function() {
                            var t, e;
                            this.isMounted && (null === (e = (t = this.config).onAnimationComplete) || void 0 === e || e.call(t))
                        }, t.prototype.getDefaultTransition = function() { return this.config.transition }, t.prototype.subscribe = function(t) {
                            var e = this;
                            return this.children.add(t),
                                function() { return e.children.delete(t) }
                        }, t.prototype.hasValue = function(t) { return this.values.has(t) }, t.prototype.addValue = function(t, e) { this.hasValue(t) && this.removeValue(t), this.values.set(t, e), this.setSingleStaticValue(t, e.get()), this.subscribeToValue(t, e) }, t.prototype.removeValue = function(t) {
                            var e;
                            null === (e = this.valueSubscriptions.get(t)) || void 0 === e || e(), this.valueSubscriptions.delete(t), this.values.delete(t), delete this.latest[t]
                        }, t.prototype.getValue = function(t, e) { var n = this.values.get(t); return void 0 === n && void 0 !== e && (n = new ve(e), this.addValue(t, n)), n }, t.prototype.forEachValue = function(t) { this.values.forEach(t) }, t.prototype.getInstance = function() { return this.element }, t.prototype.updateConfig = function(t) { void 0 === t && (t = {}), this.config = i({}, t) }, t.prototype.getBaseValue = function(t, e) { return this.baseTarget[t] }, t.prototype.setSingleStaticValue = function(t, e) { this.latest[t] = e }, t.prototype.setStaticValues = function(t, e) {
                            if ("string" === typeof t) this.setSingleStaticValue(t, e);
                            else
                                for (var n in t) this.setSingleStaticValue(n, t[n])
                        }, t.prototype.scheduleRender = function() { E.render(this.triggerRender, !1, !0) }, t.prototype.scheduleUpdateLayoutDelta = function() { E.preRender(this.rootParent.updateLayoutDelta, !1, !0) }, t.prototype.subscribeToValue = function(t, e) {
                            var n = this,
                                r = e.onChange((function(e) { n.setSingleStaticValue(t, e), n.element && n.config.onUpdate && E.update(n.update, !1, !0) })),
                                o = e.onRenderRequest((function() { n.element && n.scheduleRender() }));
                            this.valueSubscriptions.set(t, (function() { r(), o() }))
                        }, t.prototype.mount = function(t) {
                            (0, C.k)(!!t, "No ref found. Ensure components created with motion.custom forward refs using React.forwardRef"), this.parent && (this.removeFromParent = this.parent.subscribe(this)), this.element = this.current = t
                        }, t.prototype.unmount = function() {
                            var t = this;
                            this.forEachValue((function(e, n) { return t.removeValue(n) })), b.update(this.update), b.render(this.render), this.removeFromParent && this.removeFromParent()
                        }, t
                    }();

                    function ye(t) { return t }

                    function be(t) { var e = t.top; return { x: { min: t.left, max: t.right }, y: { min: e, max: t.bottom } } }

                    function xe(t) { return { x: i({}, t.x), y: i({}, t.y) } }
                    var we = { translate: 0, scale: 1, origin: 0, originPoint: 0 };

                    function Se() { return { x: i({}, we), y: i({}, we) } }
                    var ke = i(i({}, L), { transform: Math.round }),
                        Ee = { color: K, backgroundColor: K, outlineColor: K, fill: K, stroke: K, borderColor: K, borderTopColor: K, borderRightColor: K, borderBottomColor: K, borderLeftColor: K, borderWidth: $, borderTopWidth: $, borderRightWidth: $, borderBottomWidth: $, borderLeftWidth: $, borderRadius: $, radius: $, borderTopLeftRadius: $, borderTopRightRadius: $, borderBottomRightRadius: $, borderBottomLeftRadius: $, width: $, maxWidth: $, height: $, maxHeight: $, size: $, top: $, right: $, bottom: $, left: $, padding: $, paddingTop: $, paddingRight: $, paddingBottom: $, paddingLeft: $, margin: $, marginTop: $, marginRight: $, marginBottom: $, marginLeft: $, rotate: I, rotateX: I, rotateY: I, rotateZ: I, scale: R, scaleX: R, scaleY: R, scaleZ: R, skew: I, skewX: I, skewY: I, distance: $, translateX: $, translateY: $, translateZ: $, x: $, y: $, z: $, perspective: $, transformPerspective: $, opacity: B, originX: G, originY: G, originZ: $, zIndex: ke, fillOpacity: B, strokeOpacity: B, numOctaves: ke },
                        Ce = [L, $, D, I, F, z, { test: function(t) { return "auto" === t }, parse: function(t) { return t } }],
                        je = function(t) { return function(e) { return e.test(t) } },
                        Oe = function(t) { return Ce.find(je(t)) },
                        Ae = l(Ce, [K, et]),
                        Pe = function(t) { return Ae.find(je(t)) },
                        Me = function(t) { return Ee[t] },
                        Te = function(t, e) { return e && "number" === typeof t ? e.transform(t) : t },
                        Le = ["", "X", "Y", "Z"],
                        Be = ["transformPerspective", "x", "y", "z"];

                    function Re(t, e) { return Be.indexOf(t) - Be.indexOf(e) }["perspective", "translate", "scale", "rotate", "skew"].forEach((function(t) {
                        Le.forEach((function(e) {
                            var n = t + e;
                            Be.push(n)
                        }))
                    }));
                    var Ve = new Set(Be);

                    function Ie(t) { return Ve.has(t) }
                    var De = new Set(["originX", "originY", "originZ"]);

                    function $e(t) { return De.has(t) }
                    var ze = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" };

                    function Fe(t, e, n) {
                        var r = t.x,
                            o = t.y,
                            i = "translate3d(" + r.translate / e.x + "px, " + o.translate / e.y + "px, 0) ";
                        if (n) {
                            var a = n.rotate,
                                s = n.rotateX,
                                u = n.rotateY;
                            a && (i += "rotate(" + a + ") "), s && (i += "rotateX(" + s + ") "), u && (i += "rotateY(" + u + ") ")
                        }
                        return i += "scale(" + r.scale + ", " + o.scale + ")", n || i !== Ge ? i : ""
                    }
                    var Ge = Fe(Se(), { x: 1, y: 1 });

                    function He(t) { return t.startsWith("--") }

                    function We(t) { return "string" === typeof t && t.startsWith("var(--") }
                    var _e = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

                    function Ue(t, e, n) {
                        void 0 === n && (n = 1), (0, C.k)(n <= 4, 'Max CSS variable fallback depth detected in property "' + t + '". This may indicate a circular fallback dependency.');
                        var r = u(function(t) { var e = _e.exec(t); if (!e) return [, ]; var n = u(e, 3); return [n[1], n[2]] }(t), 2),
                            o = r[0],
                            i = r[1];
                        if (o) { var a = window.getComputedStyle(e).getPropertyValue(o); return a ? a.trim() : We(i) ? Ue(i, e, n + 1) : i }
                    }

                    function Ne(t, e) { return t / (e.max - e.min) * 100 }
                    var qe = "_$css";
                    var Xe = {
                            process: function(t, e) {
                                if ("string" === typeof t) {
                                    if (!$.test(t)) return t;
                                    t = parseFloat(t)
                                }
                                return Ne(t, e.x) + "% " + Ne(t, e.y) + "%"
                            }
                        },
                        Ye = {
                            borderRadius: i(i({}, Xe), { applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"] }),
                            borderTopLeftRadius: Xe,
                            borderTopRightRadius: Xe,
                            borderBottomLeftRadius: Xe,
                            borderBottomRightRadius: Xe,
                            boxShadow: {
                                process: function(t, e, n, r) {
                                    var o = t,
                                        i = t.includes("var("),
                                        a = [];
                                    i && (t = t.replace(_e, (function(t) { return a.push(t), qe })));
                                    var s = et.parse(t);
                                    if (s.length > 5) return o;
                                    var u = et.createTransformer(t),
                                        l = "number" !== typeof s[0] ? 1 : 0,
                                        c = n.x.scale * r.x,
                                        f = n.y.scale * r.y;
                                    s[0 + l] /= c, s[1 + l] /= f;
                                    var d = dt(c, f, .5);
                                    "number" === typeof s[2 + l] && (s[2 + l] /= d), "number" === typeof s[3 + l] && (s[3 + l] /= d);
                                    var p = u(s);
                                    if (i) {
                                        var h = 0;
                                        p = p.replace(qe, (function() { var t = a[h]; return h++, t }))
                                    }
                                    return p
                                }
                            }
                        };

                    function Ze(t, e, n, r, o, i, a, s, u, l, c, f) {
                        var d = a.enableHardwareAcceleration,
                            p = a.transformTemplate,
                            h = a.allowTransformNone;
                        i.length = 0;
                        var v = !1,
                            g = !1,
                            m = !0;
                        for (var y in t) {
                            var b = t[y],
                                x = Me(y),
                                w = Te(b, x);
                            if (Ie(y)) {
                                if (v = !0, r[y] = w, i.push(y), !m) continue;
                                b !== (void 0 !== x.default ? x.default : 0) && (m = !1)
                            } else if ($e(y)) o[y] = w, g = !0;
                            else if ("transform" !== y || "function" !== typeof b) {
                                var S = He(y) ? n : e;
                                if (s && Ye[y]) {
                                    var k = Ye[y].process(b, f, u, c),
                                        E = Ye[y].applyTo;
                                    if (E)
                                        for (var C = E.length, j = 0; j < C; j++) S[E[j]] = k;
                                    else S[y] = k
                                } else S[y] = w
                            }
                        }
                        s ? (e.transform = Fe(l, c, v ? r : void 0), p && (e.transform = p(r, e.transform)), e.transformOrigin = function(t) {
                            var e = t.x,
                                n = t.y;
                            return 100 * e.origin + "% " + 100 * n.origin + "% 0"
                        }(l)) : (v && (e.transform = function(t, e, n, r, o, i) {
                            void 0 === o && (o = !0), void 0 === i && (i = !0);
                            var a = "";
                            e.sort(Re);
                            for (var s = !1, u = e.length, l = 0; l < u; l++) {
                                var c = e[l];
                                a += (ze[c] || c) + "(" + t[c] + ") ", "z" === c && (s = !0)
                            }
                            return !s && o ? a += "translateZ(0)" : a = a.trim(), n ? a = n(t, r ? "" : a) : i && r && (a = "none"), a
                        }(r, i, p, m, d, h)), g && (e.transformOrigin = function(t) {
                            var e = t.originX,
                                n = void 0 === e ? "50%" : e,
                                r = t.originY,
                                o = void 0 === r ? "50%" : r,
                                i = t.originZ;
                            return n + " " + o + " " + (void 0 === i ? 0 : i)
                        }(o)))
                    }

                    function Ke(t, e) { t.min = e.min, t.max = e.max }

                    function Je(t, e, n) { return n + e * (t - n) }

                    function Qe(t, e, n, r, o) { return void 0 !== o && (t = Je(t, o, r)), Je(t, n, r) + e }

                    function tn(t, e, n, r, o) { void 0 === e && (e = 0), void 0 === n && (n = 1), t.min = Qe(t.min, e, n, r, o), t.max = Qe(t.max, e, n, r, o) }

                    function en(t, e) {
                        var n = e.x,
                            r = e.y;
                        tn(t.x, n.translate, n.scale, n.originPoint), tn(t.y, r.translate, r.scale, r.originPoint)
                    }

                    function nn(t, e, n, r) {
                        var o = u(r, 3),
                            i = o[0],
                            a = o[1],
                            s = o[2];
                        t.min = e.min, t.max = e.max;
                        var l = void 0 !== n[s] ? n[s] : .5,
                            c = dt(e.min, e.max, l);
                        tn(t, n[i], n[a], c, n.scale)
                    }
                    var rn = ["x", "scaleX", "originX"],
                        on = ["y", "scaleY", "originY"];

                    function an(t, e, n, r, o) { return t = Je(t -= e, 1 / n, r), void 0 !== o && (t = Je(t, 1 / o, r)), t }

                    function sn(t, e, n) {
                        var r = u(n, 3),
                            o = r[0],
                            i = r[1],
                            a = r[2];
                        ! function(t, e, n, r, o) {
                            void 0 === e && (e = 0), void 0 === n && (n = 1), void 0 === r && (r = .5);
                            var i = dt(t.min, t.max, r) - e;
                            t.min = an(t.min, e, n, i, o), t.max = an(t.max, e, n, i, o)
                        }(t, e[o], e[i], e[a], e.scale)
                    }

                    function un(t, e, n) { return void 0 === e && (e = 0), void 0 === n && (n = .01), oe(t, e) < n }

                    function ln(t) { return t.max - t.min }

                    function cn(t, e) {
                        var n = .5,
                            r = ln(t),
                            o = ln(e);
                        return o > r ? n = ft(e.min, e.max - r, t.min) : r > o && (n = ft(t.min, t.max - o, e.min)), nt(0, 1, n)
                    }

                    function fn(t, e, n, r) { t.origin = void 0 === r ? cn(e, n) : r, t.originPoint = dt(e.min, e.max, t.origin), t.scale = ln(n) / ln(e), un(t.scale, 1, 1e-4) && (t.scale = 1), t.translate = dt(n.min, n.max, t.origin) - t.originPoint, un(t.translate) && (t.translate = 0) }

                    function dn(t, e, n, r) { fn(t.x, e.x, n.x, r), fn(t.y, e.y, n.y, r) }

                    function pn(t) { return [t("x"), t("y")] }

                    function hn(t, e) {
                        return be(function(t, e) {
                            var n = t.top,
                                r = t.left,
                                o = t.bottom,
                                i = t.right;
                            void 0 === e && (e = ye);
                            var a = e({ x: r, y: n }),
                                s = e({ x: i, y: o });
                            return { top: a.y, left: a.x, bottom: s.y, right: s.x }
                        }(t.getBoundingClientRect(), e))
                    }
                    var vn, gn = function(t) { return Array.isArray(t) },
                        mn = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
                        yn = function(t) { return mn.has(t) },
                        bn = function(t, e) { t.set(e, !1), t.set(e) },
                        xn = function(t) { return t === L || t === $ };
                    ! function(t) { t.width = "width", t.height = "height", t.left = "left", t.right = "right", t.top = "top", t.bottom = "bottom" }(vn || (vn = {}));
                    var wn = function(t, e) { return parseFloat(t.split(", ")[e]) },
                        Sn = function(t, e) { return function(n, r) { var o = r.transform; if ("none" === o || !o) return 0; var i = o.match(/^matrix3d\((.+)\)$/); if (i) return wn(i[1], e); var a = o.match(/^matrix\((.+)\)$/); return a ? wn(a[1], t) : 0 } },
                        kn = new Set(["x", "y", "z"]),
                        En = Be.filter((function(t) { return !kn.has(t) }));
                    var Cn = {
                            width: function(t) { var e = t.x; return e.max - e.min },
                            height: function(t) { var e = t.y; return e.max - e.min },
                            top: function(t, e) { var n = e.top; return parseFloat(n) },
                            left: function(t, e) { var n = e.left; return parseFloat(n) },
                            bottom: function(t, e) {
                                var n = t.y,
                                    r = e.top;
                                return parseFloat(r) + (n.max - n.min)
                            },
                            right: function(t, e) {
                                var n = t.x,
                                    r = e.left;
                                return parseFloat(r) + (n.max - n.min)
                            },
                            x: Sn(4, 13),
                            y: Sn(5, 14)
                        },
                        jn = function(t, e, n, r) {
                            void 0 === n && (n = {}), void 0 === r && (r = {}), e = i({}, e), r = i({}, r);
                            var o = Object.keys(e).filter(yn),
                                a = [],
                                s = !1,
                                l = [];
                            if (o.forEach((function(o) {
                                    var i = t.getValue(o);
                                    if (t.hasValue(o)) {
                                        var u, c = n[o],
                                            f = e[o],
                                            d = Oe(c);
                                        if (gn(f))
                                            for (var p = f.length, h = null === f[0] ? 1 : 0; h < p; h++) u ? (0, C.k)(Oe(f[h]) === u, "All keyframes must be of the same type") : (u = Oe(f[h]), (0, C.k)(u === d || xn(d) && xn(u), "Keyframes must be of the same dimension as the current value"));
                                        else u = Oe(f);
                                        if (d !== u)
                                            if (xn(d) && xn(u)) { var v = i.get(); "string" === typeof v && i.set(parseFloat(v)), "string" === typeof f ? e[o] = parseFloat(f) : Array.isArray(f) && u === $ && (e[o] = f.map(parseFloat)) } else(null === d || void 0 === d ? void 0 : d.transform) && (null === u || void 0 === u ? void 0 : u.transform) && (0 === c || 0 === f) ? 0 === c ? i.set(u.transform(c)) : e[o] = d.transform(f) : (s || (a = function(t) {
                                                var e = [];
                                                return En.forEach((function(n) {
                                                    var r = t.getValue(n);
                                                    void 0 !== r && (e.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
                                                })), e.length && t.render(), e
                                            }(t), s = !0), l.push(o), r[o] = void 0 !== r[o] ? r[o] : e[o], bn(i, f))
                                    }
                                })), l.length) {
                                var c = function(t, e, n) {
                                    var r = e.getBoundingBox(),
                                        o = e.getComputedStyle(),
                                        i = o.display,
                                        a = { top: o.top, left: o.left, bottom: o.bottom, right: o.right, transform: o.transform };
                                    "none" === i && e.setStaticValues("display", t.display || "block"), e.render();
                                    var s = e.getBoundingBox();
                                    return n.forEach((function(n) {
                                        var i = e.getValue(n);
                                        bn(i, Cn[n](r, a)), t[n] = Cn[n](s, o)
                                    })), t
                                }(e, t, l);
                                return a.length && a.forEach((function(e) {
                                    var n = u(e, 2),
                                        r = n[0],
                                        o = n[1];
                                    t.getValue(r).set(o)
                                })), t.render(), { target: c, transitionEnd: r }
                            }
                            return { target: e, transitionEnd: r }
                        };

                    function On(t, e, n, r) { return function(t) { return Object.keys(t).some(yn) }(e) ? jn(t, e, n, r) : { target: e, transitionEnd: r } }
                    var An = function(t, e, n, r) {
                        var o = function(t, e, n) {
                            var r, o = a(e, []),
                                s = t.getInstance();
                            if (!(s instanceof HTMLElement)) return { target: o, transitionEnd: n };
                            for (var u in n && (n = i({}, n)), t.forEachValue((function(t) {
                                    var e = t.get();
                                    if (We(e)) {
                                        var n = Ue(e, s);
                                        n && t.set(n)
                                    }
                                })), o) {
                                var l = o[u];
                                if (We(l)) {
                                    var c = Ue(l, s);
                                    c && (o[u] = c, n && (null !== (r = n[u]) && void 0 !== r || (n[u] = l)))
                                }
                            }
                            return { target: o, transitionEnd: n }
                        }(t, e, r);
                        return On(t, e = o.target, n, r = o.transitionEnd)
                    };

                    function Pn(t) { return Array.isArray(t) }

                    function Mn(t, e, n) { return "string" === typeof e && (e = t.getVariant(e)), "function" === typeof e ? e(null !== n && void 0 !== n ? n : t.getVariantPayload(), function(t) { var e = {}; return t.forEachValue((function(t, n) { return e[n] = t.get() })), e }(t), function(t) { var e = {}; return t.forEachValue((function(t, n) { return e[n] = t.getVelocity() })), e }(t)) : e }

                    function Tn(t, e, n) { t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, ge(n)) }

                    function Ln(t, e) {
                        var n, r = Mn(t, e),
                            o = r ? t.makeTargetAnimatable(r, !1) : {},
                            s = o.transitionEnd,
                            u = void 0 === s ? {} : s,
                            l = (o.transition, a(o, ["transitionEnd", "transition"]));
                        for (var c in l = i(i({}, l), u)) { Tn(t, c, (n = l[c], gn(n) ? n[n.length - 1] || 0 : n)) }
                    }

                    function Bn(t, e) {
                        l(e).reverse().forEach((function(n) {
                            var r;
                            Ln(t, t.getVariant(n)), null === (r = t.variantChildren) || void 0 === r || r.forEach((function(t) { Bn(t, e) }))
                        }))
                    }

                    function Rn(t, e) { return Array.isArray(e) ? Bn(t, e) : "string" === typeof e ? Bn(t, [e]) : void Ln(t, e) }

                    function Vn(t, e, n) {
                        var r, o, i, a = Object.keys(e).filter((function(e) { return !t.hasValue(e) })),
                            s = a.length;
                        if (s)
                            for (var u = 0; u < s; u++) {
                                var l = a[u],
                                    c = e[l],
                                    f = null;
                                if (Array.isArray(c) && (f = c[0]), null === f) {
                                    var d = null !== (r = n[l]) && void 0 !== r ? r : t.readNativeValue(l);
                                    f = void 0 !== d ? d : e[l], (0, C.k)(null !== f, 'No initial value for "' + l + '" can be inferred. Ensure an initial value for "' + l + '" is defined on the component.')
                                }
                                "string" === typeof f && /^\-?\d*\.?\d+$/.test(f) ? f = parseFloat(f) : !Pe(f) && et.test(c) && (f = et.getAnimatableNone(c)), t.addValue(l, ge(f)), null !== (o = (i = n)[l]) && void 0 !== o || (i[l] = f), t.baseTarget[l] = f
                            }
                    }

                    function In(t, e) { if (e) return (e[t] || e.default || e).from }

                    function Dn(t, e, n) { var r, o, i = {}; for (var a in t) i[a] = null !== (r = In(a, e)) && void 0 !== r ? r : null === (o = n.getValue(a)) || void 0 === o ? void 0 : o.get(); return i }
                    var $n = function(t) { return t instanceof ve },
                        zn = function(t) {
                            function e() { var e = null !== t && t.apply(this, arguments) || this; return e.defaultConfig = { enableHardwareAcceleration: !0, allowTransformNone: !0 }, e.style = {}, e.reactStyle = {}, e.vars = {}, e.transform = {}, e.transformOrigin = {}, e.transformKeys = [], e.config = e.defaultConfig, e.isLayoutProjectionEnabled = !1, e.layoutUpdateListeners = new he, e.layoutMeasureListeners = new he, e.viewportBoxUpdateListeners = new he, e.hasViewportBoxUpdated = !1, e.targetBoxFinal = { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } }, e.treeScale = { x: 1, y: 1 }, e.delta = Se(), e.deltaFinal = Se(), e.deltaTransform = Ge, e.stopLayoutAxisAnimation = { x: function() {}, y: function() {} }, e.isTargetBoxLocked = !1, e.updateLayoutDelta = function() { e.isLayoutProjectionEnabled && e.box && e.updateLayoutDeltas(), e.children.forEach(Fn) }, e }
                            return o(e, t), e.prototype.removeValue = function(e) { t.prototype.removeValue.call(this, e), delete this.vars[e], delete this.style[e] }, e.prototype.clean = function() { this.style = {}, this.vars = {}, this.transform = {} }, e.prototype.updateConfig = function(t) { void 0 === t && (t = {}), this.config = i(i({}, this.defaultConfig), t) }, e.prototype.read = function(t) { var e = this.getComputedStyle(); return (He(t) ? e.getPropertyValue(t) : e[t]) || 0 }, e.prototype.addValue = function(e, n) { t.prototype.addValue.call(this, e, n), e.startsWith("rotate") && (this.layoutOrigin = .5) }, e.prototype.readNativeValue = function(t) { if (Ie(t)) { var e = Me(t); return e && e.default || 0 } return this.read(t) }, e.prototype.getBaseValue = function(e, n) { var r, o = null === (r = n.style) || void 0 === r ? void 0 : r[e]; return void 0 === o || $n(o) ? t.prototype.getBaseValue.call(this, e, n) : o }, e.prototype.makeTargetAnimatable = function(t, e) {
                                void 0 === e && (e = !0);
                                var n = t.transition,
                                    r = t.transitionEnd,
                                    o = a(t, ["transition", "transitionEnd"]),
                                    s = this.config.transformValues,
                                    u = Dn(o, n || {}, this);
                                if (s && (r && (r = s(r)), o && (o = s(o)), u && (u = s(u))), e) {
                                    Vn(this, o, u);
                                    var l = An(this, o, u, r);
                                    r = l.transitionEnd, o = l.target
                                }
                                return i({ transition: n, transitionEnd: r }, o)
                            }, e.prototype.enableLayoutProjection = function() { this.isLayoutProjectionEnabled = !0 }, e.prototype.hide = function() {!1 !== this.isVisible && (this.isVisible = !1, this.scheduleRender()) }, e.prototype.show = function() {!0 !== this.isVisible && (this.isVisible = !0, this.scheduleRender()) }, e.prototype.onLayoutUpdate = function(t) { return this.layoutUpdateListeners.add(t) }, e.prototype.onLayoutMeasure = function(t) { return this.layoutMeasureListeners.add(t) }, e.prototype.onViewportBoxUpdate = function(t) { return this.viewportBoxUpdateListeners.add(t) }, e.prototype.layoutReady = function(t) { this.layoutUpdateListeners.notify(this.box, this.prevViewportBox || this.box, t) }, e.prototype.getBoundingBox = function() { var t = this.config.transformPagePoint; return hn(this.element, t) }, e.prototype.getBoundingBoxWithoutTransforms = function() { var t, e, n = this.getBoundingBox(); return t = n, e = this.latest, sn(t.x, e, rn), sn(t.y, e, on), n }, e.prototype.getComputedStyle = function() { return window.getComputedStyle(this.element) }, e.prototype.snapshotBoundingBox = function() { this.prevViewportBox = this.getBoundingBoxWithoutTransforms(), this.rebaseTargetBox(!1, this.prevViewportBox) }, e.prototype.rebaseTargetBox = function(t, e) {
                                var n = this;
                                void 0 === t && (t = !1), void 0 === e && (e = this.box);
                                var r = this.getAxisProgress(),
                                    o = r.x,
                                    i = r.y,
                                    a = this.box && !this.isTargetBoxLocked && !o.isAnimating() && !i.isAnimating();
                                (t || a) && pn((function(t) {
                                    var r = e[t],
                                        o = r.min,
                                        i = r.max;
                                    n.setAxisTarget(t, o, i)
                                }))
                            }, e.prototype.measureLayout = function() {
                                var t = this;
                                this.box = this.getBoundingBox(), this.boxCorrected = xe(this.box), this.targetBox || (this.targetBox = xe(this.box)), this.layoutMeasureListeners.notify(this.box, this.prevViewportBox || this.box), E.update((function() { return t.rebaseTargetBox() }))
                            }, e.prototype.lockTargetBox = function() { this.isTargetBoxLocked = !0 }, e.prototype.unlockTargetBox = function() { this.stopLayoutAnimation(), this.isTargetBoxLocked = !1 }, e.prototype.resetTransform = function() {
                                var t = this.config.transformTemplate;
                                this.element.style.transform = t ? t({}, "") : "none", this.scheduleRender()
                            }, e.prototype.setAxisTarget = function(t, e, n) {
                                var r = this.targetBox[t];
                                r.min = e, r.max = n, this.hasViewportBoxUpdated = !0, this.rootParent.scheduleUpdateLayoutDelta()
                            }, e.prototype.getAxisProgress = function() { return this.axisProgress || (this.axisProgress = { x: ge(0), y: ge(0) }), this.axisProgress }, e.prototype.startLayoutAxisAnimation = function(t, e) {
                                var n, r = this,
                                    o = this.getAxisProgress()[t],
                                    i = this.targetBox[t],
                                    a = i.min,
                                    s = i.max - a;
                                return o.clearListeners(), o.set(a), o.set(a), o.onChange((function(e) { return r.setAxisTarget(t, e, e + s) })), null === (n = this.animateMotionValue) || void 0 === n ? void 0 : n.call(this, t, o, 0, e)
                            }, e.prototype.stopLayoutAnimation = function() {
                                var t = this;
                                pn((function(e) { return t.getAxisProgress()[e].stop() }))
                            }, e.prototype.withoutTransform = function(t) { this.isLayoutProjectionEnabled && this.resetTransform(), this.parent ? this.parent.withoutTransform(t) : t(), this.isLayoutProjectionEnabled && (this.element.style.transform = this.style.transform) }, e.prototype.updateLayoutDeltas = function() {
                                var t, e;
                                t = this.boxCorrected, e = this.box, Ke(t.x, e.x), Ke(t.y, e.y);
                                var n = this.treeScale.x,
                                    r = this.treeScale.y;
                                ! function(t, e, n) {
                                    var r = n.length;
                                    if (r) {
                                        e.x = e.y = 1;
                                        for (var o = 0; o < r; o++) {
                                            var i = n[o].delta;
                                            e.x *= i.x.scale, e.y *= i.y.scale, en(t, i)
                                        }
                                    }
                                }(this.boxCorrected, this.treeScale, this.treePath), dn(this.delta, this.boxCorrected, this.targetBox, this.layoutOrigin), this.hasViewportBoxUpdated && this.viewportBoxUpdateListeners.notify(this.targetBox, this.delta), this.hasViewportBoxUpdated = !1;
                                var o = Fe(this.delta, this.treeScale);
                                o === this.deltaTransform && n === this.treeScale.x && r === this.treeScale.y || this.scheduleRender(), this.deltaTransform = o
                            }, e.prototype.updateTransformDeltas = function() {
                                var t, e, n;
                                this.isLayoutProjectionEnabled && this.box && (t = this.targetBoxFinal, e = this.targetBox, n = this.latest, nn(t.x, e.x, n, rn), nn(t.y, e.y, n, on), dn(this.deltaFinal, this.boxCorrected, this.targetBoxFinal, this.layoutOrigin))
                            }, e.prototype.build = function() { this.updateTransformDeltas(), void 0 !== this.isVisible && (this.style.visibility = this.isVisible ? "visible" : "hidden"), Ze(this.latest, this.style, this.vars, this.transform, this.transformOrigin, this.transformKeys, this.config, this.isLayoutProjectionEnabled && !!this.box, this.delta, this.deltaFinal, this.treeScale, this.targetBoxFinal) }, e.prototype.render = function() { for (var t in this.build(), Object.assign(this.element.style, this.style), this.vars) this.element.style.setProperty(t, this.vars[t]) }, e
                        }(me),
                        Fn = function(t) { return t.updateLayoutDelta() };

                    function Gn(t) { var e = (0, de.useRef)(null); return null === e.current && (e.current = t()), e.current }

                    function Hn(t, e, n) { return "string" === typeof t ? t : $.transform(e + n * t) }
                    var Wn = function(t, e) { return $.transform(t * e) },
                        _n = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
                        Un = { offset: "strokeDashoffset", array: "strokeDasharray" };
                    var Nn = { x: 0, y: 0, width: 0, height: 0 };

                    function qn(t, e, n, r, o, i, s, u, l, c, f, d, p, h, v) {
                        var g = t.attrX,
                            m = t.attrY,
                            y = t.originX,
                            b = t.originY,
                            x = t.pathLength,
                            w = t.pathSpacing,
                            S = void 0 === w ? 1 : w,
                            k = t.pathOffset,
                            E = void 0 === k ? 0 : k;
                        return Ze(a(t, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]), r, n, o, i, s, u, f, d, p, h, v), r.transform && (e.transform = r.transform, delete r.transform), (void 0 !== y || void 0 !== b || e.transform) && (e.transformOrigin = function(t, e, n) { return Hn(e, t.x, t.width) + " " + Hn(n, t.y, t.height) }(l || Nn, void 0 !== y ? y : .5, void 0 !== b ? b : .5)), void 0 !== g && (r.x = g), void 0 !== m && (r.y = m), void 0 !== c && void 0 !== x && function(t, e, n, r, o, i) {
                            void 0 === r && (r = 1), void 0 === o && (o = 0), void 0 === i && (i = !0);
                            var a = i ? _n : Un;
                            t[a.offset] = Wn(-o, e);
                            var s = Wn(n, e),
                                u = Wn(r, e);
                            t[a.array] = s + " " + u
                        }(r, c, x, S, E, !1), r
                    }
                    var Xn = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox"]),
                        Yn = /([a-z])([A-Z])/g,
                        Zn = function(t) { return t.replace(Yn, "$1-$2").toLowerCase() },
                        Kn = function(t) {
                            function e() { var e = null !== t && t.apply(this, arguments) || this; return e.attrs = {}, e.defaultConfig = { enableHardwareAcceleration: !1 }, e.config = e.defaultConfig, e }
                            return o(e, t), e.prototype.mount = function(e) { t.prototype.mount.call(this, e), this.measure() }, e.prototype.measure = function() { var t = this; try { this.dimensions = "function" === typeof this.element.getBBox ? this.element.getBBox() : this.element.getBoundingClientRect() } catch (e) { this.dimensions = { x: 0, y: 0, width: 0, height: 0 } } "path" === this.element.tagName && (this.totalPathLength = this.element.getTotalLength()), E.render((function() { return t.render() })) }, e.prototype.getBaseValue = function(e, n) { var r = n[e]; return void 0 === r || $n(r) ? t.prototype.getBaseValue.call(this, e, n) : r }, e.prototype.clean = function() { t.prototype.clean.call(this), this.attrs = {} }, e.prototype.read = function(t) { return t = Xn.has(t) ? t : Zn(t), this.element.getAttribute(t) }, e.prototype.build = function() { this.updateTransformDeltas(), qn(this.latest, this.style, this.vars, this.attrs, this.transform, this.transformOrigin, this.transformKeys, this.config, this.dimensions, this.totalPathLength, this.isLayoutProjectionEnabled && !!this.box, this.delta, this.deltaFinal, this.treeScale, this.targetBoxFinal) }, e.prototype.render = function() { for (var e in t.prototype.render.call(this), this.attrs) this.element.setAttribute(Xn.has(e) ? e : Zn(e), this.attrs[e]) }, e
                        }(zn);
                    var Jn = new Set(["animate", "circle", "clipPath", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "switch", "symbol", "text", "textPath", "tspan", "use", "view"]);

                    function Qn(t) { return "string" === typeof t && Jn.has(t) }
                    var tr = (0, de.createContext)(null),
                        er = (0, de.createContext)({ variantContext: {} });

                    function nr() { return (0, de.useContext)(er).variantContext }

                    function rr() { return (0, de.useContext)(er).visualElement }
                    var or = (0, de.createContext)(null),
                        ir = (0, de.createContext)({ transformPagePoint: function(t) { return t }, features: [], isStatic: !1 });

                    function ar(t) { return (0, de.useEffect)((function() { return function() { return t() } }), []) }

                    function sr(t, e, n, r) {
                        return t.addEventListener(e, n, r),
                            function() { return t.removeEventListener(e, n, r) }
                    }

                    function ur(t, e, n, r) {
                        (0, de.useEffect)((function() { var o = t.current; if (n && o) return sr(o, e, n, r) }), [t, e, n, r])
                    }

                    function lr(t) { return "undefined" !== typeof PointerEvent && t instanceof PointerEvent ? !("mouse" !== t.pointerType) : t instanceof MouseEvent }

                    function cr(t) { return !!t.touches }
                    var fr = { pageX: 0, pageY: 0 };

                    function dr(t, e) { void 0 === e && (e = "page"); var n = t.touches[0] || t.changedTouches[0] || fr; return { x: n[e + "X"], y: n[e + "Y"] } }

                    function pr(t, e) { return void 0 === e && (e = "page"), { x: t[e + "X"], y: t[e + "Y"] } }

                    function hr(t, e) { return void 0 === e && (e = "page"), { point: cr(t) ? dr(t, e) : pr(t, e) } }

                    function vr(t) { return hr(t, "client") }
                    var gr = function(t, e) {
                            void 0 === e && (e = !1);
                            var n, r = function(e) { return t(e, hr(e)) };
                            return e ? (n = r, function(t) {
                                var e = t instanceof MouseEvent;
                                (!e || e && 0 === t.button) && n(t)
                            }) : r
                        },
                        mr = "undefined" !== typeof window,
                        yr = { pointerdown: "mousedown", pointermove: "mousemove", pointerup: "mouseup", pointercancel: "mousecancel", pointerover: "mouseover", pointerout: "mouseout", pointerenter: "mouseenter", pointerleave: "mouseleave" },
                        br = { pointerdown: "touchstart", pointermove: "touchmove", pointerup: "touchend", pointercancel: "touchcancel" };

                    function xr(t) { return mr && null === window.onpointerdown ? t : mr && null === window.ontouchstart ? br[t] : mr && null === window.onmousedown ? yr[t] : t }

                    function wr(t, e, n, r) { return sr(t, xr(e), gr(n, "pointerdown" === e), r) }

                    function Sr(t, e, n, r) { return ur(t, xr(e), n && gr(n, "pointerdown" === e), r) }
                    var kr = function(t) { return 1e3 * t },
                        Er = function() {
                            function t(t, e, n) {
                                var r = this,
                                    o = (void 0 === n ? {} : n).transformPagePoint;
                                if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = function() {
                                        if (r.lastMoveEvent && r.lastMoveEventInfo) {
                                            var t = Or(r.lastMoveEventInfo, r.history),
                                                e = null !== r.startEvent,
                                                n = oe(t.offset, { x: 0, y: 0 }) >= 3;
                                            if (e || n) {
                                                var o = t.point,
                                                    a = k().timestamp;
                                                r.history.push(i(i({}, o), { timestamp: a }));
                                                var s = r.handlers,
                                                    u = s.onStart,
                                                    l = s.onMove;
                                                e || (u && u(r.lastMoveEvent, t), r.startEvent = r.lastMoveEvent), l && l(r.lastMoveEvent, t)
                                            }
                                        }
                                    }, this.handlePointerMove = function(t, e) { r.lastMoveEvent = t, r.lastMoveEventInfo = Cr(e, r.transformPagePoint), lr(t) && 0 === t.buttons ? r.handlePointerUp(t, e) : E.update(r.updatePoint, !0) }, this.handlePointerUp = function(t, e) {
                                        r.end();
                                        var n = r.handlers.onEnd;
                                        if (n) {
                                            var o = Or(Cr(e, r.transformPagePoint), r.history);
                                            n && n(t, o)
                                        }
                                    }, !(cr(t) && t.touches.length > 1)) {
                                    this.handlers = e, this.transformPagePoint = o;
                                    var a = Cr(hr(t), this.transformPagePoint),
                                        s = a.point,
                                        u = k().timestamp;
                                    this.history = [i(i({}, s), { timestamp: u })];
                                    var l = e.onSessionStart;
                                    l && l(t, Or(a, this.history)), this.removeListeners = xt(wr(window, "pointermove", this.handlePointerMove), wr(window, "pointerup", this.handlePointerUp), wr(window, "pointercancel", this.handlePointerUp))
                                }
                            }
                            return t.prototype.updateHandlers = function(t) { this.handlers = t }, t.prototype.end = function() { this.removeListeners && this.removeListeners(), b.update(this.updatePoint) }, t
                        }();

                    function Cr(t, e) { return e ? { point: e(t.point) } : t }

                    function jr(t, e) { return { x: t.x - e.x, y: t.y - e.y } }

                    function Or(t, e) { var n = t.point; return { point: n, delta: jr(n, Pr(e)), offset: jr(n, Ar(e)), velocity: Mr(e, .1) } }

                    function Ar(t) { return t[0] }

                    function Pr(t) { return t[t.length - 1] }

                    function Mr(t, e) { if (t.length < 2) return { x: 0, y: 0 }; for (var n = t.length - 1, r = null, o = Pr(t); n >= 0 && (r = t[n], !(o.timestamp - r.timestamp > kr(e)));) n--; if (!r) return { x: 0, y: 0 }; var i = (o.timestamp - r.timestamp) / 1e3; if (0 === i) return { x: 0, y: 0 }; var a = { x: (o.x - r.x) / i, y: (o.y - r.y) / i }; return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a }
                    var Tr = function(t, e) { return !!e && (t === e || Tr(t, e.parentElement)) };

                    function Lr(t) { var e = null; return function() { return null === e && (e = t, function() { e = null }) } }
                    var Br = Lr("dragHorizontal"),
                        Rr = Lr("dragVertical");

                    function Vr(t) {
                        var e = !1;
                        if ("y" === t) e = Rr();
                        else if ("x" === t) e = Br();
                        else {
                            var n = Br(),
                                r = Rr();
                            n && r ? e = function() { n(), r() } : (n && n(), r && r())
                        }
                        return e
                    }
                    var Ir = { linear: Bt, easeIn: Rt, easeInOut: It, easeOut: Vt, circIn: Dt, circInOut: zt, circOut: $t, backIn: Ft, backInOut: Ht, backOut: Gt, anticipate: Wt, bounceIn: Ut, bounceInOut: function(t) { return t < .5 ? .5 * (1 - _t(1 - 2 * t)) : .5 * _t(2 * t - 1) + .5 }, bounceOut: _t },
                        Dr = function(t) {
                            if (Array.isArray(t)) {
                                (0, C.k)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                                var e = u(t, 4);
                                return fe(e[0], e[1], e[2], e[3])
                            }
                            return "string" === typeof t ? ((0, C.k)(void 0 !== Ir[t], "Invalid easing type '" + t + "'"), Ir[t]) : t
                        },
                        $r = function(t, e) { return "zIndex" !== t && (!("number" !== typeof e && !Array.isArray(e)) || !("string" !== typeof e || !et.test(e) || e.startsWith("url("))) },
                        zr = function() { return { type: "spring", stiffness: 500, damping: 25, restDelta: .5, restSpeed: 10 } },
                        Fr = function(t) { return { type: "spring", stiffness: 550, damping: 0 === t ? 100 : 30, restDelta: .01, restSpeed: 10 } },
                        Gr = function() { return { type: "keyframes", ease: "linear", duration: .3 } },
                        Hr = function(t) { return { type: "keyframes", duration: .8, values: t } },
                        Wr = { x: zr, y: zr, z: zr, rotate: zr, rotateX: zr, rotateY: zr, rotateZ: zr, scaleX: Fr, scaleY: Fr, scale: Fr, opacity: Gr, backgroundColor: Gr, color: Gr, default: Fr };
                    var _r = !1;

                    function Ur(t) {
                        var e = t.ease,
                            n = t.times,
                            r = t.yoyo,
                            o = t.flip,
                            s = t.loop,
                            u = a(t, ["ease", "times", "yoyo", "flip", "loop"]),
                            l = i({}, u);
                        return n && (l.offset = n), u.duration && (l.duration = kr(u.duration)), u.repeatDelay && (l.repeatDelay = kr(u.repeatDelay)), e && (l.ease = function(t) { return Array.isArray(t) && "number" !== typeof t[0] }(e) ? e.map(Dr) : Dr(e)), "tween" === u.type && (l.type = "keyframes"), (r || s || o) && ((0, C.K)(!_r, "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options."), _r = !0, r ? l.repeatType = "reverse" : s ? l.repeatType = "loop" : o && (l.repeatType = "mirror"), l.repeat = s || r || o || u.repeat), "spring" !== u.type && (l.type = "keyframes"), l
                    }

                    function Nr(t, e, n) {
                        var r;
                        return Array.isArray(e.to) && (null !== (r = t.duration) && void 0 !== r || (t.duration = .8)),
                            function(t) { Array.isArray(t.to) && null === t.to[0] && (t.to = l(t.to), t.to[0] = t.from) }(e),
                            function(t) { t.when, t.delay, t.delayChildren, t.staggerChildren, t.staggerDirection, t.repeat, t.repeatType, t.repeatDelay, t.from; var e = a(t, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"]); return !!Object.keys(e).length }(t) || (t = i(i({}, t), function(t, e) { var n; return n = gn(e) ? Hr : Wr[t] || Wr.default, i({ to: e }, n(e)) }(n, e.to))), i(i({}, e), Ur(t))
                    }

                    function qr(t, e, n, r, o) {
                        var a, s = function(t, e) { return t[e] || t.default || t }(r, t),
                            u = null !== (a = s.from) && void 0 !== a ? a : e.get(),
                            l = $r(t, n);
                        "none" === u && l && "string" === typeof n && (u = et.getAnimatableNone(n));
                        var c = $r(t, u);
                        return (0, C.K)(c === l, "You are trying to animate " + t + ' from "' + u + '" to "' + n + '". ' + u + " is not an animatable value - to enable this animation set " + u + " to a value animatable to " + n + " via the `style` property."), c && l && !1 !== s.type ? function() {
                            var r = { from: u, to: n, velocity: e.getVelocity(), onComplete: o, onUpdate: function(t) { return e.set(t) } };
                            return "inertia" === s.type || "decay" === s.type ? function(t) {
                                var e, n = t.from,
                                    r = void 0 === n ? 0 : n,
                                    o = t.velocity,
                                    a = void 0 === o ? 0 : o,
                                    s = t.min,
                                    u = t.max,
                                    l = t.power,
                                    c = void 0 === l ? .8 : l,
                                    f = t.timeConstant,
                                    d = void 0 === f ? 750 : f,
                                    p = t.bounceStiffness,
                                    h = void 0 === p ? 500 : p,
                                    v = t.bounceDamping,
                                    g = void 0 === v ? 10 : v,
                                    m = t.restDelta,
                                    y = void 0 === m ? 1 : m,
                                    b = t.modifyTarget,
                                    x = t.driver,
                                    w = t.onUpdate,
                                    S = t.onComplete;

                                function E(t) { return void 0 !== s && t < s || void 0 !== u && t > u }

                                function C(t) { return void 0 === s ? u : void 0 === u || Math.abs(s - t) < Math.abs(u - t) ? s : u }

                                function j(t) {
                                    null === e || void 0 === e || e.stop(), e = Kt(i(i({}, t), {
                                        driver: x,
                                        onUpdate: function(e) {
                                            var n;
                                            null === w || void 0 === w || w(e), null === (n = t.onUpdate) || void 0 === n || n.call(t, e)
                                        },
                                        onComplete: S
                                    }))
                                }

                                function O(t) { j(i({ type: "spring", stiffness: h, damping: g, restDelta: y }, t)) }
                                if (E(r)) O({ from: r, velocity: a, to: C(r) });
                                else {
                                    var A = c * a + r;
                                    "undefined" !== typeof b && (A = b(A));
                                    var P, M, T = C(A),
                                        L = T === s ? -1 : 1;
                                    j({ type: "decay", from: r, velocity: a, timeConstant: d, power: c, restDelta: y, modifyTarget: b, onUpdate: E(A) ? function(t) { P = M, M = t, a = Jt(t - P, k().delta), (1 === L && t > T || -1 === L && t < T) && O({ from: t, to: T, velocity: a }) } : void 0 })
                                }
                                return { stop: function() { return null === e || void 0 === e ? void 0 : e.stop() } }
                            }(i(i({}, r), s)) : Kt(i(i({}, Nr(s, r, t)), {
                                onUpdate: function(t) {
                                    var e;
                                    r.onUpdate(t), null === (e = s.onUpdate) || void 0 === e || e.call(s, t)
                                },
                                onComplete: function() {
                                    var t;
                                    r.onComplete(), null === (t = s.onComplete) || void 0 === t || t.call(s)
                                }
                            }))
                        } : function() { var t; return e.set(n), o(), null === (t = null === s || void 0 === s ? void 0 : s.onComplete) || void 0 === t || t.call(s), { stop: function() {} } }
                    }

                    function Xr(t, e, n, r) {
                        return void 0 === r && (r = {}), e.start((function(o) {
                            var i, a, s = qr(t, e, n, r, o),
                                u = function(t, e) { var n, r, o, i, a; return null !== (a = null !== (i = null !== (r = null === (n = t[e]) || void 0 === n ? void 0 : n.delay) && void 0 !== r ? r : null === (o = t.default) || void 0 === o ? void 0 : o.delay) && void 0 !== i ? i : t.delay) && void 0 !== a ? a : 0 }(r, t),
                                l = function() { return a = s() };
                            return u ? i = setTimeout(l, kr(u)) : l(),
                                function() { clearTimeout(i), null === a || void 0 === a || a.stop() }
                        }))
                    }

                    function Yr(t, e, n) {
                        var r;
                        if (t.onAnimationStart(), Array.isArray(e)) {
                            var o = e.map((function(e) { return Zr(t, e, n) }));
                            r = Promise.all(o)
                        } else r = "string" === typeof e ? Zr(t, e, n) : Kr(t, e, n);
                        return r.then((function() { return t.onAnimationComplete() }))
                    }

                    function Zr(t, e, n) {
                        var r;
                        void 0 === n && (n = {});
                        var o = Mn(t, e, n.custom),
                            a = (o || {}).transition,
                            s = void 0 === a ? t.getDefaultTransition() || {} : a;
                        n.transitionOverride && (s = n.transitionOverride);
                        var l = o ? function() { return Kr(t, o, n) } : function() { return Promise.resolve() },
                            c = (null === (r = t.variantChildrenOrder) || void 0 === r ? void 0 : r.size) ? function(r) {
                                void 0 === r && (r = 0);
                                var o = s.delayChildren,
                                    a = void 0 === o ? 0 : o,
                                    u = s.staggerChildren,
                                    l = s.staggerDirection;
                                return function(t, e, n, r, o, a) {
                                    void 0 === n && (n = 0);
                                    void 0 === r && (r = 0);
                                    void 0 === o && (o = 1);
                                    var s = [],
                                        u = (t.variantChildrenOrder.size - 1) * r,
                                        l = 1 === o ? function(t) { return void 0 === t && (t = 0), t * r } : function(t) { return void 0 === t && (t = 0), u - t * r };
                                    return Array.from(t.variantChildrenOrder).forEach((function(t, r) {
                                        var o = Zr(t, e, i(i({}, a), { delay: n + l(r) }));
                                        s.push(o)
                                    })), Promise.all(s)
                                }(t, e, a + r, u, l, n)
                            } : function() { return Promise.resolve() },
                            f = s.when;
                        if (f) {
                            var d = u("beforeChildren" === f ? [l, c] : [c, l], 2),
                                p = d[0],
                                h = d[1];
                            return p().then(h)
                        }
                        return Promise.all([l(), c(n.delay)])
                    }

                    function Kr(t, e, n) {
                        var r, o = void 0 === n ? {} : n,
                            s = o.delay,
                            u = void 0 === s ? 0 : s,
                            l = o.transitionOverride,
                            c = o.type,
                            f = t.makeTargetAnimatable(e),
                            d = f.transition,
                            p = void 0 === d ? t.getDefaultTransition() : d,
                            h = f.transitionEnd,
                            v = a(f, ["transition", "transitionEnd"]);
                        l && (p = l);
                        var g = [],
                            m = c && (null === (r = t.animationState) || void 0 === r ? void 0 : r.getProtectedKeys(c));
                        for (var y in v) {
                            var b = t.getValue(y),
                                x = v[y];
                            if (b && void 0 !== x && void 0 === (null === m || void 0 === m ? void 0 : m[y])) {
                                var w = Xr(y, b, x, i({ delay: u }, p));
                                g.push(w)
                            }
                        }
                        return Promise.all(g).then((function() { h && Ln(t, h) }))
                    }
                    var Jr, Qr = function() {
                        function t() { this.hasMounted = !1, this.pendingAnimations = [], this.subscribers = new Set }
                        return t.prototype.subscribe = function(t) {
                            var e = this;
                            return this.subscribers.add(t),
                                function() { return e.subscribers.delete(t) }
                        }, t.prototype.start = function(t, e) { var n = this; if (this.hasMounted) { var r = []; return this.subscribers.forEach((function(n) { r.push(Yr(n, t, { transitionOverride: e })) })), Promise.all(r) } return new Promise((function(r) { n.pendingAnimations.push({ animation: [t, e], resolve: r }) })) }, t.prototype.set = function(t) { return (0, C.k)(this.hasMounted, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."), this.subscribers.forEach((function(e) { Rn(e, t) })) }, t.prototype.stop = function() { this.subscribers.forEach((function(t) {! function(t) { t.forEachValue((function(t) { return t.stop() })) }(t) })) }, t.prototype.mount = function() {
                            var t = this;
                            this.hasMounted = !0, this.pendingAnimations.forEach((function(e) {
                                var n = e.animation,
                                    r = e.resolve;
                                t.start.apply(t, l(n)).then(r)
                            }))
                        }, t.prototype.unmount = function() { this.hasMounted = !1, this.stop() }, t
                    }();
                    ! function(t) { t.Animate = "animate", t.Hover = "whileHover", t.Tap = "whileTap", t.Drag = "whileDrag", t.Focus = "whileFocus", t.Exit = "exit" }(Jr || (Jr = {}));
                    var to = [Jr.Animate, Jr.Hover, Jr.Tap, Jr.Drag, Jr.Focus, Jr.Exit],
                        eo = l(to).reverse(),
                        no = to.length;

                    function ro(t) {
                        var e, n, r = function(t) {
                                return function(e) {
                                    return Promise.all(e.map((function(e) {
                                        var n = e.animation,
                                            r = e.options;
                                        return Yr(t, n, r)
                                    })))
                                }
                            }(t),
                            o = function() { var t; return (t = {})[Jr.Animate] = oo(!0), t[Jr.Hover] = oo(), t[Jr.Tap] = oo(), t[Jr.Drag] = oo(), t[Jr.Focus] = oo(), t[Jr.Exit] = oo(), t }(),
                            s = !0,
                            u = function(e, n) {
                                var r = Mn(t, n);
                                if (r) {
                                    r.transition;
                                    var o = r.transitionEnd,
                                        s = a(r, ["transition", "transitionEnd"]);
                                    e = i(i(i({}, e), s), o)
                                }
                                return e
                            };

                        function c(a, c, f, d) {
                            void 0 === c && (c = {}), e = a, n = c;
                            var p = [],
                                h = new Set,
                                v = {};
                            a.variants && t.updateConfig(i(i({}, t.config), { variants: a.variants }));
                            for (var g = 1 / 0, m = function(e) {
                                    var n, r = eo[e],
                                        m = o[r],
                                        y = null !== (C = a[r]) && void 0 !== C ? C : c[r],
                                        b = "string" === typeof(n = y) || Pn(n),
                                        x = r === d ? m.isActive : null;
                                    !1 === x && (g = e);
                                    var w = y === c[r] && b;
                                    if (w && s && t.manuallyAnimateOnMount && (w = !1), s && r === Jr.Animate && t.prevSnapshot && (s = !1, m.prevResolvedValues = t.prevSnapshot), m.protectedKeys = i({}, v), !m.isActive && null === x || !y && !m.prevProp || y instanceof Qr || "boolean" === typeof y) return "continue";
                                    var S = function(t, e) {
                                            if ("string" === typeof e) return e !== t;
                                            if (Pn(e)) return ! function(t, e) {
                                                if (!Array.isArray(e)) return !1;
                                                var n = e.length;
                                                if (n !== t.length) return !1;
                                                for (var r = 0; r < n; r++)
                                                    if (e[r] !== t[r]) return !1;
                                                return !0
                                            }(e, t);
                                            return !1
                                        }(m.prevProp, y) || r === d && m.isActive && !w && b || e > g && b,
                                        k = Array.isArray(y) ? y : [y],
                                        E = k.reduce(u, {});
                                    !1 === x && (E = {});
                                    var C = m.prevResolvedValues,
                                        j = void 0 === C ? {} : C,
                                        O = i(i({}, j), E);
                                    for (var A in O) {
                                        var P = E[A],
                                            M = j[A];
                                        v.hasOwnProperty(A) || (P !== M ? void 0 !== P ? (S = !0, h.delete(A)) : h.add(A) : void 0 !== P && h.has(A) ? (S = !0, h.delete(A)) : m.protectedKeys[A] = !0)
                                    }
                                    m.prevProp = y, m.prevResolvedValues = E, m.isActive && (v = i(i({}, v), E)), S && !w && p.push.apply(p, l(k.map((function(t) { return { animation: t, options: i({ type: r }, f) } }))))
                                }, y = 0; y < no; y++) m(y);
                            if (h.size) {
                                var b = {};
                                h.forEach((function(e) {
                                    var n = t.getBaseValue(e, a);
                                    void 0 !== n && (b[e] = n)
                                })), p.push({ animation: b })
                            }
                            var x = Boolean(p.length);
                            return s && !1 === a.initial && !t.manuallyAnimateOnMount && (x = !1), s = !1, x ? r(p) : Promise.resolve()
                        }
                        return { getProtectedKeys: function(t) { return o[t].protectedKeys }, setProps: c, setActive: function(r, i, a) { var s; return o[r].isActive === i ? Promise.resolve() : (null === (s = t.variantChildrenOrder) || void 0 === s || s.forEach((function(t) { var e; return null === (e = t.animationState) || void 0 === e ? void 0 : e.setActive(r, i) })), o[r].isActive = i, c(e, n, a, r)) }, setAnimateFunction: function(e) { r = e(t) } }
                    }

                    function oo(t) { return void 0 === t && (t = !1), { isActive: t, protectedKeys: {}, prevResolvedValues: {} } }
                    var io = function(t) { return function(e, n) { lr(e) && t(e, n) } };

                    function ao(t, e) {
                        ! function(t, e) {
                            var n = t.onPan,
                                r = t.onPanStart,
                                o = t.onPanEnd,
                                i = t.onPanSessionStart,
                                a = n || r || o || i,
                                s = (0, de.useRef)(null),
                                u = (0, de.useContext)(ir).transformPagePoint,
                                l = { onSessionStart: i, onStart: r, onMove: n, onEnd: function(t, e) { s.current = null, o && o(t, e) } };
                            (0, de.useEffect)((function() { null !== s.current && s.current.updateHandlers(l) })), Sr(e, "pointerdown", a && function(t) { s.current = new Er(t, l, { transformPagePoint: u }) }), ar((function() { return s.current && s.current.end() }))
                        }(t, e),
                        function(t, e) {
                            var n = t.onTap,
                                r = t.onTapStart,
                                o = t.onTapCancel,
                                i = t.whileTap,
                                a = n || r || o || i,
                                s = (0, de.useRef)(!1),
                                u = (0, de.useRef)(null);

                            function l() {
                                var t;
                                null === (t = u.current) || void 0 === t || t.call(u), u.current = null
                            }
                            var c = (0, de.useRef)(null);
                            c.current = function(t, r) {
                                var i, a = e.getInstance();
                                if (l(), s.current && a) {
                                    s.current = !1, null === (i = e.animationState) || void 0 === i || i.setActive(Jr.Tap, !1);
                                    var u = Vr(!0);
                                    u && (u(), Tr(a, t.target) ? null === n || void 0 === n || n(t, r) : null === o || void 0 === o || o(t, r))
                                }
                            }, Sr(e, "pointerdown", a ? function(t, n) {
                                var o;
                                l(), u.current = xt(wr(window, "pointerup", (function(t, e) { var n; return null === (n = c.current) || void 0 === n ? void 0 : n.call(c, t, e) })), wr(window, "pointercancel", (function(t, e) { var n; return null === (n = c.current) || void 0 === n ? void 0 : n.call(c, t, e) }))), e.getInstance() && !s.current && (s.current = !0, null === r || void 0 === r || r(t, n), null === (o = e.animationState) || void 0 === o || o.setActive(Jr.Tap, !0))
                            } : void 0), ar(l)
                        }(t, e),
                        function(t, e) {
                            var n = t.onHoverStart,
                                r = t.onHoverEnd,
                                o = t.whileHover,
                                i = io((function(t, r) {
                                    var o;
                                    null === n || void 0 === n || n(t, r), null === (o = e.animationState) || void 0 === o || o.setActive(Jr.Hover, !0)
                                })),
                                a = io((function(t, n) {
                                    var o;
                                    null === r || void 0 === r || r(t, n), null === (o = e.animationState) || void 0 === o || o.setActive(Jr.Hover, !1)
                                }));
                            Sr(e, "pointerenter", n || o ? i : void 0), Sr(e, "pointerleave", r || o ? a : void 0)
                        }(t, e),
                        function(t, e) {
                            var n = t.whileFocus;
                            ur(e, "focus", n ? function() {
                                var t;
                                null === (t = e.animationState) || void 0 === t || t.setActive(Jr.Focus, !0)
                            } : void 0), ur(e, "blur", n ? function() {
                                var t;
                                null === (t = e.animationState) || void 0 === t || t.setActive(Jr.Focus, !1)
                            } : void 0)
                        }(t, e)
                    }
                    var so = function(t) { return function(e) { return t(e), null } },
                        uo = ["onPan", "onPanStart", "onPanEnd", "onPanSessionStart", "onTap", "onTapStart", "onTapCancel", "onHoverStart", "onHoverEnd", "whileFocus", "whileTap", "whileHover"],
                        lo = so((function(t) {
                            var e = t.visualElement;
                            ao(a(t, ["visualElement"]), e)
                        })),
                        co = { key: "gestures", shouldRender: function(t) { return uo.some((function(e) { return t.hasOwnProperty(e) })) }, getComponent: function() { return lo } },
                        fo = new Set(l(["initial", "animate", "exit", "style", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "onLayoutAnimationComplete", "onViewportBoxUpdate", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "whileDrag"], uo));

                    function po(t) { return fo.has(t) }
                    var ho = function(t) { return !po(t) };
                    try {
                        var vo = n(4465).Z;
                        ho = function(t) { return t.startsWith("on") ? !po(t) : vo(t) }
                    } catch (Bi) {}

                    function go(t, e) {
                        var n = e.layout,
                            r = e.layoutId;
                        return Ie(t) || $e(t) || (n || void 0 !== r) && !!Ye[t]
                    }

                    function mo(t, e, n, r, o) {
                        for (var i in void 0 === r && (r = !1), r && (t.reactStyle = {}), n) {
                            var a = n[i],
                                s = !1;
                            if ($n(a)) xo.has(i) || (t.addValue(i, a), s = !0);
                            else if (go(i, o)) {
                                if (t.hasValue(i)) {
                                    if (a !== e[i]) {
                                        if ($n(e[i])) t.addValue(i, ge(a));
                                        else t.getValue(i).set(a)
                                    }
                                } else t.addValue(i, ge(a));
                                s = !0
                            } else r && (t.reactStyle[i] = a);
                            s && (e[i] = a)
                        }
                    }
                    var yo, bo, xo = new Set([]),
                        wo = function() { return {} };
                    ! function(t) { t[t.Entering = 0] = "Entering", t[t.Present = 1] = "Present", t[t.Exiting = 2] = "Exiting" }(yo || (yo = {})),
                    function(t) { t[t.Hide = 0] = "Hide", t[t.Show = 1] = "Show" }(bo || (bo = {}));
                    var So = { measureLayout: function(t) { return t.measureLayout() }, layoutReady: function(t) { return t.layoutReady() } },
                        ko = function(t, e) { return t.depth - e.depth };

                    function Eo() {
                        var t = new Set;
                        return {
                            add: function(e) { return t.add(e) },
                            flush: function(e) {
                                var n = void 0 === e ? So : e,
                                    r = n.measureLayout,
                                    o = n.layoutReady,
                                    i = n.parent,
                                    a = Array.from(t).sort(ko),
                                    s = function() { a.forEach((function(t) { return t.resetTransform() })), a.forEach(r) };
                                i ? i.withoutTransform(s) : s(), a.forEach(o), a.forEach((function(t) { t.isPresent && (t.presence = yo.Present) })), t.clear()
                            }
                        }
                    }

                    function Co(t) { return !!t.forceUpdate }
                    var jo = (0, de.createContext)(Eo()),
                        Oo = (0, de.createContext)(Eo()),
                        Ao = "undefined" !== typeof window ? de.useLayoutEffect : de.useEffect;

                    function Po() {
                        var t = (0, de.useContext)(tr);
                        if (null === t) return [!0, null];
                        var e = t.isPresent,
                            n = t.onExitComplete,
                            r = t.register,
                            o = Bo();
                        (0, de.useEffect)((function() { return r(o) }), []);
                        return !e && n ? [!1, function() { return null === n || void 0 === n ? void 0 : n(o) }] : [!0]
                    }

                    function Mo(t) { return null === t || t.isPresent }
                    var To = 0,
                        Lo = function() { return To++ },
                        Bo = function() { return Gn(Lo) };

                    function Ro(t, e) {
                        void 0 === e && (e = !1);
                        var n = (0, de.useRef)(!0);
                        (!e || e && n.current) && t(), n.current = !1
                    }

                    function Vo(t) {
                        var e = t.animate,
                            n = t.variants,
                            r = t.inherit;
                        return null !== r && void 0 !== r ? r : !!n && !e
                    }

                    function Io(t, e, n) {
                        var r, o, i, a = nr(),
                            s = (0, de.useContext)(tr),
                            u = Vo(e),
                            l = [],
                            c = {},
                            f = !1;
                        (function(t) { var e; return "function" === typeof(null === (e = t.animate) || void 0 === e ? void 0 : e.start) || zo(t.animate) || zo(t.whileHover) || zo(t.whileDrag) || zo(t.whileTap) || zo(t.whileFocus) || zo(t.exit) })(e) && (f = !0, a = {});
                        for (var d = f || e.variants, p = 0; p < $o; p++) {
                            var h = Do[p],
                                v = e[h],
                                g = a[h];
                            zo(v) || !1 === v ? (c[h] = v, l.push(v)) : ((zo(g) || !1 === g) && (c[h] = g), l.push(null)), l.push(zo(g) ? g : null)
                        }
                        var m = null !== (r = e.animate) && void 0 !== r ? r : c.animate,
                            y = e.initial;
                        void 0 !== y || !zo(m) && !1 === c.initial || (y = c.initial), !1 === (null === s || void 0 === s ? void 0 : s.initial) && (y = c.initial = !1), c.parent = d ? t : a.parent, Ro((function() {
                            var e, n = !1 === y ? m : y;
                            n && "boolean" !== typeof n && ("object" !== typeof(e = n) || "function" !== typeof e.start) && Rn(t, n)
                        }), !n), Ro((function() { t.forEachValue((function(e, n) { t.baseTarget[n] = e.get() })) }), !0);
                        var b, x = (0, de.useMemo)((function() { return c }), l);
                        return d && u && !f && (b = null === (o = a.parent) || void 0 === o ? void 0 : o.addVariantChild(t), t.inheritsVariants = !0), !f && u && (null === (i = t.parent) || void 0 === i ? void 0 : i.isMounted) && !1 !== y && m && (t.manuallyAnimateOnMount = !0), (0, de.useEffect)((function() {
                            return t.isMounted = !0,
                                function() { t.isMounted = !1, null === b || void 0 === b || b() }
                        }), []), Ao((function() {
                            var e;
                            Mo(s) && (null === (e = t.variantChildrenOrder) || void 0 === e || e.clear())
                        })), (0, de.useEffect)((function() {
                            var e;
                            d && (null === (e = a.parent) || void 0 === e || e.addVariantChildOrder(t))
                        })), x
                    }
                    var Do = l(["initial"], to),
                        $o = Do.length;

                    function zo(t) { return "string" === typeof t || Array.isArray(t) }

                    function Fo(t, e) {
                        var n = e.defaultFeatures,
                            r = e.useVisualElement,
                            o = e.useRender;
                        return (0, de.forwardRef)((function(e, a) {
                            var s = (0, de.useContext)(ir).isStatic,
                                u = r(t, e, s, a);
                            ! function(t, e) {
                                var n = Gn(wo);
                                for (var r in n) {
                                    var o = go(r, e),
                                        i = void 0 !== e[r],
                                        a = e.style && void 0 !== e.style[r],
                                        s = i && $n(e[r]),
                                        u = a && $n(e.style[r]);
                                    (o && !i && !a || !o && !s && !u) && (t.removeValue(r), delete n[r])
                                }
                                mo(t, n, e, !1, e), e.style && mo(t, n, e.style, !0, e), e.transformValues && (t.reactStyle = e.transformValues(t.reactStyle))
                            }(u, e);
                            var c = Io(u, e, s),
                                f = function(t, e, n, r) {
                                    var o = (0, de.useContext)(ir);
                                    if (e || "undefined" === typeof window) return null;
                                    for (var a = l(t, o.features), s = a.length, u = [], c = 0; c < s; c++) {
                                        var f = a[c],
                                            d = f.shouldRender,
                                            p = f.key,
                                            h = f.getComponent;
                                        if (d(r)) {
                                            var v = h(r);
                                            v && u.push((0, de.createElement)(v, i({ key: p }, r, { visualElement: n })))
                                        }
                                    }
                                    return u
                                }(n, s, u, e),
                                d = (0, de.useMemo)((function() { return { visualElement: u, variantContext: c } }), [u, c]),
                                p = o(t, e, u);
                            return function(t) {
                                var e = (0, de.useContext)(jo),
                                    n = (0, de.useContext)(Oo);
                                Ao((function() { return function() { Co(e) && e.remove(t), Co(n) && n.remove(t) } }), [])
                            }(u), (0, de.createElement)(de.Fragment, null, (0, de.createElement)(er.Provider, { value: d }, p), f)
                        }))
                    }

                    function Go(t, e, n) {
                        var r = e.min,
                            o = e.max;
                        return void 0 !== r && t < r ? t = n ? dt(r, t, n) : Math.max(t, r) : void 0 !== o && t > o && (t = n ? dt(o, t, n) : Math.min(t, o)), t
                    }

                    function Ho(t, e, n) { return { min: void 0 !== e ? t.min + e : void 0, max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0 } }

                    function Wo(t, e) {
                        var n, r = e.min - t.min,
                            o = e.max - t.max;
                        return e.max - e.min < t.max - t.min && (r = (n = u([o, r], 2))[0], o = n[1]), { min: t.min + r, max: t.min + o }
                    }
                    var _o, Uo = new WeakMap,
                        No = function() {
                            function t(t) {
                                var e = t.visualElement;
                                this.isDragging = !1, this.currentDirection = null, this.constraints = !1, this.props = {}, this.hasMutatedConstraints = !1, this.cursorProgress = { x: .5, y: .5 }, this.originPoint = {}, this.openGlobalLock = null, this.panSession = null, this.visualElement = e, this.visualElement.enableLayoutProjection(), Uo.set(e, this)
                            }
                            return t.prototype.start = function(t, e) {
                                var n = this,
                                    r = void 0 === e ? {} : e,
                                    o = r.snapToCursor,
                                    i = void 0 !== o && o,
                                    a = r.cursorProgress;
                                i && this.snapToCursor(t);
                                var s = this.props.transformPagePoint;
                                this.panSession = new Er(t, {
                                    onSessionStart: function() { n.stopMotion() },
                                    onStart: function(t, e) {
                                        var r, o, i, s = n.props,
                                            u = s.drag,
                                            l = s.dragPropagation;
                                        if (!u || l || (n.openGlobalLock && n.openGlobalLock(), n.openGlobalLock = Vr(u), n.openGlobalLock)) {
                                            n.prepareBoundingBox(), n.visualElement.lockTargetBox(), n.resolveDragConstraints();
                                            var c = vr(t).point;
                                            pn((function(t) {
                                                var e = n.visualElement.targetBox[t],
                                                    r = e.min,
                                                    o = e.max;
                                                n.cursorProgress[t] = a ? a[t] : ft(r, o, c[t]);
                                                var i = n.getAxisMotionValue(t);
                                                i && (n.originPoint[t] = i.get())
                                            })), n.isDragging = !0, n.currentDirection = null, null === (o = (r = n.props).onDragStart) || void 0 === o || o.call(r, t, e), null === (i = n.visualElement.animationState) || void 0 === i || i.setActive(Jr.Drag, !0)
                                        }
                                    },
                                    onMove: function(t, e) {
                                        var r, o, i, a, s = n.props,
                                            u = s.dragPropagation,
                                            l = s.dragDirectionLock;
                                        if (u || n.openGlobalLock) {
                                            var c = e.offset;
                                            if (l && null === n.currentDirection) return n.currentDirection = function(t, e) {
                                                void 0 === e && (e = 10);
                                                var n = null;
                                                Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x");
                                                return n
                                            }(c), void(null !== n.currentDirection && (null === (o = (r = n.props).onDirectionLock) || void 0 === o || o.call(r, n.currentDirection)));
                                            n.updateAxis("x", t, c), n.updateAxis("y", t, c), null === (a = (i = n.props).onDrag) || void 0 === a || a.call(i, t, e), _o = t
                                        }
                                    },
                                    onEnd: function(t, e) { return n.stop(t, e) }
                                }, { transformPagePoint: s })
                            }, t.prototype.prepareBoundingBox = function() {
                                var t = this.visualElement;
                                t.withoutTransform((function() { t.measureLayout() })), t.rebaseTargetBox(!0, t.getBoundingBoxWithoutTransforms())
                            }, t.prototype.resolveDragConstraints = function() {
                                var t = this,
                                    e = this.props.dragConstraints;
                                this.constraints = !!e && (pe(e) ? this.resolveRefConstraints(this.visualElement.box, e) : function(t, e) {
                                    var n = e.top,
                                        r = e.left,
                                        o = e.bottom,
                                        i = e.right;
                                    return { x: Ho(t.x, r, i), y: Ho(t.y, n, o) }
                                }(this.visualElement.box, e)), this.constraints && !this.hasMutatedConstraints && pn((function(e) { t.getAxisMotionValue(e) && (t.constraints[e] = function(t, e) { var n = {}; return void 0 !== e.min && (n.min = e.min - t.min), void 0 !== e.max && (n.max = e.max - t.min), n }(t.visualElement.box[e], t.constraints[e])) }))
                            }, t.prototype.resolveRefConstraints = function(t, e) {
                                var n = this.props,
                                    r = n.onMeasureDragConstraints,
                                    o = n.transformPagePoint,
                                    i = e.current;
                                (0, C.k)(null !== i, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."), this.constraintsBox = hn(i, o);
                                var a = function(t, e) { return { x: Wo(t.x, e.x), y: Wo(t.y, e.y) } }(t, this.constraintsBox);
                                if (r) {
                                    var s = r(function(t) {
                                        var e = t.x,
                                            n = t.y;
                                        return { top: n.min, bottom: n.max, left: e.min, right: e.max }
                                    }(a));
                                    this.hasMutatedConstraints = !!s, s && (a = be(s))
                                }
                                return a
                            }, t.prototype.cancelDrag = function() {
                                var t;
                                this.isDragging = !1, this.panSession && this.panSession.end(), this.panSession = null, !this.props.dragPropagation && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), null === (t = this.visualElement.animationState) || void 0 === t || t.setActive(Jr.Drag, !1)
                            }, t.prototype.stop = function(t, e) {
                                var n;
                                this.visualElement.unlockTargetBox(), null === (n = this.panSession) || void 0 === n || n.end(), this.panSession = null;
                                var r = this.isDragging;
                                if (this.cancelDrag(), r) {
                                    var o = this.props,
                                        i = o.dragMomentum,
                                        a = o.dragElastic,
                                        s = o.onDragEnd;
                                    if (i || a) {
                                        var u = e.velocity;
                                        this.animateDragEnd(u)
                                    }
                                    null === s || void 0 === s || s(t, e)
                                }
                            }, t.prototype.snapToCursor = function(t) {
                                var e = this;
                                this.prepareBoundingBox(), pn((function(n) {
                                    var r = e.getAxisMotionValue(n);
                                    if (r) {
                                        var o = vr(t).point,
                                            i = e.visualElement.box,
                                            a = i[n].max - i[n].min,
                                            s = i[n].min + a / 2,
                                            u = o[n] - s;
                                        e.originPoint[n] = o[n], r.set(u)
                                    } else e.cursorProgress[n] = .5, e.updateVisualElementAxis(n, t)
                                }))
                            }, t.prototype.updateAxis = function(t, e, n) { if (qo(t, this.props.drag, this.currentDirection)) return this.getAxisMotionValue(t) ? this.updateAxisMotionValue(t, n) : this.updateVisualElementAxis(t, e) }, t.prototype.updateAxisMotionValue = function(t, e) {
                                var n = this.getAxisMotionValue(t);
                                if (e && n) {
                                    var r = this.props.dragElastic,
                                        o = this.originPoint[t] + e[t],
                                        i = this.constraints ? Go(o, this.constraints[t], r) : o;
                                    n.set(i)
                                }
                            }, t.prototype.updateVisualElementAxis = function(t, e) {
                                var n, r = this.props.dragElastic,
                                    o = this.visualElement.box[t],
                                    i = o.max - o.min,
                                    a = this.cursorProgress[t],
                                    s = function(t, e, n, r, o) { var i = t - e * n; return r ? Go(i, r, o) : i }(vr(e).point[t], i, a, null === (n = this.constraints) || void 0 === n ? void 0 : n[t], r);
                                this.visualElement.setAxisTarget(t, s, s + i)
                            }, t.prototype.updateProps = function(t) {
                                var e = t.drag,
                                    n = void 0 !== e && e,
                                    r = t.dragDirectionLock,
                                    o = void 0 !== r && r,
                                    s = t.dragPropagation,
                                    u = void 0 !== s && s,
                                    l = t.dragConstraints,
                                    c = void 0 !== l && l,
                                    f = t.dragElastic,
                                    d = void 0 === f ? .35 : f,
                                    p = t.dragMomentum,
                                    h = void 0 === p || p,
                                    v = a(t, ["drag", "dragDirectionLock", "dragPropagation", "dragConstraints", "dragElastic", "dragMomentum"]);
                                this.props = i({ drag: n, dragDirectionLock: o, dragPropagation: u, dragConstraints: c, dragElastic: d, dragMomentum: h }, v)
                            }, t.prototype.getAxisMotionValue = function(t) {
                                var e = this.props,
                                    n = e.layout,
                                    r = e.layoutId,
                                    o = "_drag" + t.toUpperCase();
                                return this.props[o] ? this.props[o] : n || void 0 !== r ? void 0 : this.visualElement.getValue(t, 0)
                            }, t.prototype.animateDragEnd = function(t) {
                                var e = this,
                                    n = this.props,
                                    r = n.drag,
                                    o = n.dragMomentum,
                                    a = n.dragElastic,
                                    s = n.dragTransition,
                                    u = pn((function(n) {
                                        if (qo(n, r, e.currentDirection)) {
                                            var u = e.constraints ? e.constraints[n] : {},
                                                l = a ? 200 : 1e6,
                                                c = a ? 40 : 1e7,
                                                f = i(i({ type: "inertia", velocity: o ? t[n] : 0, bounceStiffness: l, bounceDamping: c, timeConstant: 750, restDelta: 1, restSpeed: 10 }, s), u);
                                            return e.getAxisMotionValue(n) ? e.startAxisValueAnimation(n, f) : e.visualElement.startLayoutAxisAnimation(n, f)
                                        }
                                    }));
                                return Promise.all(u).then((function() {
                                    var t, n;
                                    null === (n = (t = e.props).onDragTransitionEnd) || void 0 === n || n.call(t)
                                }))
                            }, t.prototype.stopMotion = function() {
                                var t = this;
                                pn((function(e) {
                                    var n = t.getAxisMotionValue(e);
                                    n ? n.stop() : t.visualElement.stopLayoutAnimation()
                                }))
                            }, t.prototype.startAxisValueAnimation = function(t, e) { var n = this.getAxisMotionValue(t); if (n) { var r = n.get(); return n.set(r), n.set(r), Xr(t, n, 0, e) } }, t.prototype.scalePoint = function() {
                                var t = this,
                                    e = this.props,
                                    n = e.drag,
                                    r = e.dragConstraints;
                                if (pe(r) && this.constraintsBox) {
                                    this.stopMotion();
                                    var o = { x: 0, y: 0 };
                                    pn((function(e) { o[e] = cn(t.visualElement.targetBox[e], t.constraintsBox[e]) })), this.prepareBoundingBox(), this.resolveDragConstraints(), pn((function(e) {
                                        if (qo(e, n, null)) {
                                            var r = function(t, e, n) {
                                                    var r = t.max - t.min,
                                                        o = dt(e.min, e.max - r, n);
                                                    return { min: o, max: o + r }
                                                }(t.visualElement.targetBox[e], t.constraintsBox[e], o[e]),
                                                i = r.min,
                                                a = r.max;
                                            t.visualElement.setAxisTarget(e, i, a)
                                        }
                                    }))
                                }
                            }, t.prototype.mount = function(t) {
                                var e = this,
                                    n = wr(t.getInstance(), "pointerdown", (function(t) {
                                        var n = e.props,
                                            r = n.drag,
                                            o = n.dragListener;
                                        r && (void 0 === o || o) && e.start(t)
                                    })),
                                    r = sr(window, "resize", (function() { e.scalePoint() })),
                                    o = t.onLayoutUpdate((function() { e.isDragging && e.resolveDragConstraints() })),
                                    i = t.prevSnapshot;
                                return (null === i || void 0 === i ? void 0 : i.isDragging) && this.start(_o, { cursorProgress: i.cursorProgress }),
                                    function() { null === n || void 0 === n || n(), null === r || void 0 === r || r(), null === o || void 0 === o || o(), e.cancelDrag() }
                            }, t
                        }();

                    function qo(t, e, n) { return (!0 === e || e === t) && (null === n || n === t) }
                    var Xo = so((function(t) {
                            var e = t.visualElement;
                            return function(t, e) {
                                var n = t.dragControls,
                                    r = (0, de.useContext)(ir).transformPagePoint,
                                    o = Gn((function() { return new No({ visualElement: e }) }));
                                o.updateProps(i(i({}, t), { transformPagePoint: r })), (0, de.useEffect)((function() { return n && n.subscribe(o) }), [o]), (0, de.useEffect)((function() { return o.mount(e) }), [])
                            }(a(t, ["visualElement"]), e)
                        })),
                        Yo = { key: "drag", shouldRender: function(t) { return !!t.drag || !!t.dragControls }, getComponent: function() { return Xo } },
                        Zo = so((function(t) {
                            var e = t.custom,
                                n = t.visualElement,
                                r = u(Po(), 2),
                                o = r[0],
                                i = r[1],
                                a = (0, de.useContext)(tr);
                            (0, de.useEffect)((function() { var t, r, s = null === (t = n.animationState) || void 0 === t ? void 0 : t.setActive(Jr.Exit, !o, { custom: null !== (r = null === a || void 0 === a ? void 0 : a.custom) && void 0 !== r ? r : e });!o && (null === s || void 0 === s || s.then(i)) }), [o])
                        })),
                        Ko = { key: "exit", shouldRender: function(t) { return !!t.exit && !Vo(t) }, getComponent: function() { return Zo } };
                    var Jo = so((function(t) {
                            var e = t.visualElement,
                                n = t.animate;
                            e.animationState || (e.animationState = ro(e));
                            var r = nr();
                            (0, de.useEffect)((function() { e.animationState.setProps(t, e.inheritsVariants ? r : void 0) })), n instanceof Qr && function(t, e) {
                                var n = (0, de.useMemo)((function() { return e.subscribe(t) }), [e]);
                                ar((function() { return null === n || void 0 === n ? void 0 : n() }))
                            }(e, n)
                        })),
                        Qo = {
                            key: "animation",
                            shouldRender: function() { return !0 },
                            getComponent: function(t) {
                                var e = t.animate,
                                    n = t.whileHover,
                                    r = t.whileFocus,
                                    o = t.whileTap,
                                    i = t.whileDrag,
                                    a = t.exit,
                                    s = t.variants;
                                return e || n || r || o || i || a || s ? Jo : void 0
                            }
                        };
                    var ti = function(t) {
                        function e() {
                            var e = null !== t && t.apply(this, arguments) || this;
                            return e.frameTarget = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }, e.stopAxisAnimation = { x: void 0, y: void 0 }, e.animate = function(t, n, r) {
                                void 0 === r && (r = {});
                                var o = r.originBox,
                                    i = r.targetBox,
                                    s = r.visibilityAction,
                                    u = r.shouldStackAnimate,
                                    l = a(r, ["originBox", "targetBox", "visibilityAction", "shouldStackAnimate"]),
                                    c = e.props,
                                    f = c.visualElement,
                                    d = c.layout;
                                if (!1 === u) return e.safeToRemove();
                                var p = ni(n = o || n, t = i || t),
                                    h = pn((function(r) {
                                        if ("position" === d) {
                                            var o = t[r].max - t[r].min;
                                            n[r].max = n[r].min + o
                                        }
                                        if (!f.isTargetBoxLocked) return void 0 === s ? p ? e.animateAxis(r, t[r], n[r], l) : f.setAxisTarget(r, t[r].min, t[r].max) : void(s === bo.Hide ? f.hide() : f.show())
                                    }));
                                return f.render(), Promise.all(h).then((function() {
                                    var t, n;
                                    null === (n = (t = e.props).onLayoutAnimationComplete) || void 0 === n || n.call(t), f.isPresent ? f.presence = yo.Present : e.safeToRemove()
                                }))
                            }, e
                        }
                        return o(e, t), e.prototype.componentDidMount = function() {
                            var t = this,
                                e = this.props.visualElement;
                            e.animateMotionValue = Xr, e.enableLayoutProjection(), this.unsubLayoutReady = e.onLayoutUpdate(this.animate), e.updateConfig(i(i({}, e.config), { safeToRemove: function() { return t.safeToRemove() } }))
                        }, e.prototype.componentWillUnmount = function() {
                            var t = this;
                            this.unsubLayoutReady(), pn((function(e) { var n, r; return null === (r = (n = t.stopAxisAnimation)[e]) || void 0 === r ? void 0 : r.call(n) }))
                        }, e.prototype.animateAxis = function(t, e, n, r) {
                            var o, i, a = void 0 === r ? {} : r,
                                s = a.transition,
                                u = a.crossfadeOpacity;
                            null === (i = (o = this.stopAxisAnimation)[t]) || void 0 === i || i.call(o);
                            var l, c = this.props.visualElement,
                                f = this.frameTarget[t],
                                d = c.getAxisProgress()[t];
                            d.clearListeners(), d.set(0), d.set(0), u && (l = this.createCrossfadeAnimation(u), c.show());
                            var p = function() { var r = d.get() / 1e3;! function(t, e, n, r) { t.min = dt(e.min, n.min, r), t.max = dt(e.max, n.max, r) }(f, n, e, r), c.setAxisTarget(t, f.min, f.max), null === l || void 0 === l || l(r) };
                            p(), c.updateLayoutDelta();
                            var h = d.onChange(p),
                                v = Xr("x" === t ? "layoutX" : "layoutY", d, 1e3, s || this.props.transition || oi).then(h);
                            return this.stopAxisAnimation[t] = function() { d.stop(), h() }, v
                        }, e.prototype.createCrossfadeAnimation = function(t) { var e = this.props.visualElement.getValue("opacity", 0); return function(n) { e.set(ai(dt(0, 1, n))), t.set(si(dt(1, 0, n))) } }, e.prototype.safeToRemove = function() {
                            var t, e;
                            null === (e = (t = this.props).safeToRemove) || void 0 === e || e.call(t)
                        }, e.prototype.render = function() { return null }, e
                    }(de.Component);

                    function ei(t) { var e = u(Po(), 2)[1]; return (0, de.createElement)(ti, i({}, t, { safeToRemove: e })) }

                    function ni(t, e) { return ri(t.x, e.x) || ri(t.y, e.y) }

                    function ri(t, e) { return t.min !== e.min || t.max !== e.max }
                    var oi = { duration: .45, ease: [.4, 0, .1, 1] };

                    function ii(t, e, n) { return function(r) { return r < t ? 0 : r > e ? 1 : n(ft(t, e, r)) } }
                    var ai = ii(0, .5, $t),
                        si = ii(.5, .95, Bt),
                        ui = { key: "animate-layout", shouldRender: function(t) { return !!t.layout || !!t.layoutId }, getComponent: function() { return ei } },
                        li = function(t) {
                            function e() { return null !== t && t.apply(this, arguments) || this }
                            return o(e, t), e.prototype.componentDidMount = function() {
                                var t = this.props,
                                    e = t.syncLayout,
                                    n = t.framerSyncLayout,
                                    r = t.visualElement;
                                Co(e) && e.register(r), Co(n) && n.register(r)
                            }, e.prototype.getSnapshotBeforeUpdate = function() {
                                var t = this.props,
                                    e = t.syncLayout,
                                    n = t.visualElement;
                                return Co(e) ? e.syncUpdate() : (n.snapshotBoundingBox(), e.add(n)), null
                            }, e.prototype.componentDidUpdate = function() {
                                var t = this.props,
                                    e = t.syncLayout,
                                    n = t.visualElement;
                                Co(e) || e.flush(), n.rebaseTargetBox()
                            }, e.prototype.render = function() { return null }, e
                        }(de.Component);

                    function ci(t) {
                        var e = (0, de.useContext)(jo),
                            n = (0, de.useContext)(Oo);
                        return de.createElement(li, i({}, t, { syncLayout: e, framerSyncLayout: n }))
                    }
                    var fi = { key: "measure-layout", shouldRender: function(t) { return !!t.drag || !!t.layout || !!t.layoutId }, getComponent: function() { return ci } },
                        di = [fi, Qo, Yo, co, Ko, ui],
                        pi = {
                            useVisualElement: function(t, e, n, r) {
                                var o = rr(),
                                    a = Gn((function() { return new(Qn(t) ? Kn : zn)(o, r) }));
                                n && (a.values.clear(), a.latest = {}), a.updateConfig(i(i(i({}, a.config), { enableHardwareAcceleration: !n }), e));
                                var s = (0, de.useContext)(or);
                                a.layoutId = s && e.layoutId ? s + "-" + e.layoutId : e.layoutId;
                                var u = (0, de.useContext)(tr),
                                    l = null === u || u.isPresent;
                                a.isPresent = void 0 !== e.isPresent ? e.isPresent : l;
                                var c = null === u || void 0 === u ? void 0 : u.id;
                                return a.isPresenceRoot = !o || o.presenceId !== c, (0, de.useEffect)((function() { if (e.onViewportBoxUpdate) return a.onViewportBoxUpdate(e.onViewportBoxUpdate) }), [e.onViewportBoxUpdate]), a
                            },
                            useRender: function(t, e, n) {
                                var r = "string" === typeof t ? function(t) { var e = {}; for (var n in t) ho(n) && (e[n] = t[n]); return e }(e) : e;
                                n.clean(), n.build();
                                var o = Qn(t) ? function(t) { return i(i({}, t.attrs), { style: i({}, t.reactStyle) }) }(n) : function(t, e) {
                                    var n = e.drag,
                                        r = {},
                                        o = i(i(i({}, t.reactStyle), t.style), t.vars);
                                    return n && (r.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = !0 === n ? "none" : "pan-" + ("x" === n ? "y" : "x")), r.style = o, r
                                }(n, e);
                                return (0, de.createElement)(t, i(i(i({}, r), { ref: n.ref }), o))
                            }
                        };

                    function hi(t) { var e = i(i({}, pi), { defaultFeatures: t }); var n = new Map; return new Proxy({ custom: function(t) { return Fo(t, e) } }, { get: function(t, r) { return "custom" === r ? t.custom : (n.has(r) || n.set(r, Fo(r, e)), n.get(r)) } }) }
                    var vi = hi(di);
                    var gi = 0;

                    function mi() { var t = gi; return gi++, t }
                    var yi = function(t) {
                        var e = t.children,
                            n = t.initial,
                            r = t.isPresent,
                            o = t.onExitComplete,
                            i = t.custom,
                            a = t.presenceAffectsLayout,
                            s = Gn(bi),
                            u = Gn(mi),
                            l = (0, de.useMemo)((function() {
                                return {
                                    id: u,
                                    initial: n,
                                    isPresent: r,
                                    custom: i,
                                    onExitComplete: function(t) {
                                        s.set(t, !0);
                                        var e = !0;
                                        s.forEach((function(t) { t || (e = !1) })), e && (null === o || void 0 === o || o())
                                    },
                                    register: function(t) {
                                        return s.set(t, !1),
                                            function() { return s.delete(t) }
                                    }
                                }
                            }), a ? void 0 : [r]);
                        return (0, de.useMemo)((function() { s.forEach((function(t, e) { return s.set(e, !1) })) }), [r]), (0, de.createElement)(tr.Provider, { value: l }, e)
                    };

                    function bi() { return new Map }

                    function xi(t) { return t.key || "" }
                    var wi = function(t) {
                        var e = t.children,
                            n = t.custom,
                            r = t.initial,
                            o = void 0 === r || r,
                            i = t.onExitComplete,
                            a = t.exitBeforeEnter,
                            s = t.presenceAffectsLayout,
                            c = void 0 === s || s,
                            f = function() {
                                var t = (0, de.useRef)(!1),
                                    e = u((0, de.useState)(0), 2),
                                    n = e[0],
                                    r = e[1];
                                return ar((function() { return t.current = !0 })), (0, de.useCallback)((function() {!t.current && r(n + 1) }), [n])
                            }(),
                            d = (0, de.useContext)(jo);
                        Co(d) && (f = d.forceUpdate);
                        var p = (0, de.useRef)(!0),
                            h = function(t) {
                                var e = [];
                                return de.Children.forEach(t, (function(t) {
                                    (0, de.isValidElement)(t) && e.push(t)
                                })), e
                            }(e),
                            v = (0, de.useRef)(h),
                            g = (0, de.useRef)(new Map).current,
                            m = (0, de.useRef)(new Set).current;
                        if (function(t, e) {
                                t.forEach((function(t) {
                                    var n = xi(t);
                                    e.set(n, t)
                                }))
                            }(h, g), p.current) return p.current = !1, (0, de.createElement)(de.Fragment, null, h.map((function(t) { return (0, de.createElement)(yi, { key: xi(t), isPresent: !0, initial: !!o && void 0, presenceAffectsLayout: c }, t) })));
                        for (var y = l(h), b = v.current.map(xi), x = h.map(xi), w = b.length, S = 0; S < w; S++) { var k = b[S]; - 1 === x.indexOf(k) ? m.add(k) : m.delete(k) }
                        return a && m.size && (y = []), m.forEach((function(t) {
                            if (-1 === x.indexOf(t)) {
                                var e = g.get(t);
                                if (e) {
                                    var r = b.indexOf(t);
                                    y.splice(r, 0, (0, de.createElement)(yi, {
                                        key: xi(e),
                                        isPresent: !1,
                                        onExitComplete: function() {
                                            g.delete(t), m.delete(t);
                                            var e = v.current.findIndex((function(e) { return e.key === t }));
                                            v.current.splice(e, 1), m.size || (v.current = h, f(), i && i())
                                        },
                                        custom: n,
                                        presenceAffectsLayout: c
                                    }, e))
                                }
                            }
                        })), y = y.map((function(t) { var e = t.key; return m.has(e) ? t : (0, de.createElement)(yi, { key: xi(t), isPresent: !0, presenceAffectsLayout: c }, t) })), v.current = y, (0, de.createElement)(de.Fragment, null, m.size ? y : y.map((function(t) { return (0, de.cloneElement)(t) })))
                    };

                    function Si(t, e) { return e && t !== e.lead ? { visibilityAction: bo.Hide } : e && t.presence !== yo.Entering && t === e.lead && e.lead !== e.prevLead ? { visibilityAction: bo.Show } : (t.presence === yo.Entering ? n = null === e || void 0 === e ? void 0 : e.getFollowOrigin() : t.presence === yo.Exiting && (r = null === e || void 0 === e ? void 0 : e.getFollowTarget()), { originBox: n, targetBox: r }); var n, r }

                    function ki(t, e) {
                        var n, r, o, i = {},
                            a = e && e.lead,
                            s = null === a || void 0 === a ? void 0 : a.presence;
                        return e && t === a ? t.presence === yo.Entering ? i.originBox = e.getFollowOrigin() : t.presence === yo.Exiting && (i.targetBox = e.getFollowTarget()) : e && t === e.follow && (i.transition = e.getLeadTransition(), s === yo.Entering ? i.targetBox = e.getLeadTarget() : s === yo.Exiting && (i.originBox = e.getLeadOrigin())), (null === (n = null === e || void 0 === e ? void 0 : e.follow) || void 0 === n ? void 0 : n.isPresenceRoot) || (null === a || void 0 === a ? void 0 : a.isPresenceRoot) ? (e && t !== a ? e && t === e.follow ? a && s !== yo.Entering && s === yo.Exiting && (i.crossfadeOpacity = null === (o = null === e || void 0 === e ? void 0 : e.lead) || void 0 === o ? void 0 : o.getValue("opacity", 1)) : i.visibilityAction = bo.Hide : t.presence === yo.Entering && (i.crossfadeOpacity = null === (r = null === e || void 0 === e ? void 0 : e.follow) || void 0 === r ? void 0 : r.getValue("opacity", 0)), i) : i
                    }
                    var Ei = function() {
                        function t() { this.order = [], this.hasChildren = !1 }
                        return t.prototype.add = function(t) {
                            var e;
                            if (this.order.push(t), this.snapshot) { t.prevSnapshot = this.snapshot, t.prevViewportBox = this.snapshot.boundingBox; var n = this.snapshot.latestMotionValues; for (var r in n) t.hasValue(r) ? null === (e = t.getValue(r)) || void 0 === e || e.set(n[r]) : t.addValue(r, ge(n[r])) }
                            this.hasChildren = !0
                        }, t.prototype.remove = function(t) { var e = this.order.findIndex((function(e) { return t === e })); - 1 !== e && this.order.splice(e, 1) }, t.prototype.updateLeadAndFollow = function() {
                            this.prevLead = this.lead, this.prevFollow = this.follow;
                            var t = u(function(t, e) {
                                    for (var n = u(e, 2), r = n[0], o = n[1], i = void 0, a = 0, s = void 0, l = t.length, c = !1, f = l - 1; f >= 0; f--) {
                                        var d = t[f];
                                        if (f === l - 1 && (c = d.isPresent), c) i = d;
                                        else {
                                            var p = t[f - 1];
                                            p && p.isPresent && (i = d)
                                        }
                                        if (i) { a = f; break }
                                    }
                                    if (i || (i = t[0]), s = t[a - 1], i)
                                        for (f = a - 1; f >= 0; f--)
                                            if ((d = t[f]).isPresent) { s = d; break }
                                    return i !== r && !c && s === o && t.find((function(t) { return t === r })) && (i = r), [i, s]
                                }(this.order, [this.lead, this.follow]), 2),
                                e = t[0],
                                n = t[1];
                            this.lead = e, this.follow = n
                        }, t.prototype.updateSnapshot = function() {
                            if (this.lead) {
                                var t = { boundingBox: this.lead.prevViewportBox, latestMotionValues: {} };
                                this.lead.forEachValue((function(e, n) {
                                    var r = e.get();
                                    Ie(r) || (t.latestMotionValues[n] = r)
                                }));
                                var e = Uo.get(this.lead);
                                e && e.isDragging && (t.isDragging = !0, t.cursorProgress = e.cursorProgress), this.snapshot = t
                            }
                        }, t.prototype.isLeadPresent = function() { var t; return this.lead && (null === (t = this.lead) || void 0 === t ? void 0 : t.presence) !== yo.Exiting }, t.prototype.getFollowOrigin = function() { var t; return this.follow ? this.follow.prevViewportBox : null === (t = this.snapshot) || void 0 === t ? void 0 : t.boundingBox }, t.prototype.getFollowTarget = function() { var t; return null === (t = this.follow) || void 0 === t ? void 0 : t.box }, t.prototype.getLeadOrigin = function() { var t; return null === (t = this.lead) || void 0 === t ? void 0 : t.prevViewportBox }, t.prototype.getLeadTarget = function() { var t; return null === (t = this.lead) || void 0 === t ? void 0 : t.box }, t.prototype.getLeadTransition = function() { var t; return null === (t = this.lead) || void 0 === t ? void 0 : t.config.transition }, t
                    }();
                    var Ci = function(t) {
                        function e() { var e = null !== t && t.apply(this, arguments) || this; return e.children = new Set, e.stacks = new Map, e.hasMounted = !1, e.updateScheduled = !1, e.renderScheduled = !1, e.syncContext = i(i({}, Eo()), { syncUpdate: function(t) { return e.scheduleUpdate(t) }, forceUpdate: function() { e.syncContext = i({}, e.syncContext), e.scheduleUpdate(!0) }, register: function(t) { return e.addChild(t) }, remove: function(t) { return e.removeChild(t) } }), e }
                        return o(e, t), e.prototype.componentDidMount = function() { this.hasMounted = !0, this.updateStacks() }, e.prototype.componentDidUpdate = function() { this.startLayoutAnimation() }, e.prototype.shouldComponentUpdate = function() { return this.renderScheduled = !0, !0 }, e.prototype.startLayoutAnimation = function() {
                            var t = this;
                            this.renderScheduled = this.updateScheduled = !1;
                            var e = this.props.type;
                            this.children.forEach((function(t) { t.isPresent ? t.presence !== yo.Entering && (t.presence = t.presence === yo.Exiting ? yo.Entering : yo.Present) : t.presence = yo.Exiting })), this.updateStacks();
                            var n = "crossfade" === e ? ki : Si,
                                r = {
                                    measureLayout: function(t) { return t.measureLayout() },
                                    layoutReady: function(e) {
                                        var r = e.layoutId;
                                        e.layoutReady(n(e, t.getStack(r)))
                                    },
                                    parent: this.context.visualElement
                                };
                            this.children.forEach((function(e) { return t.syncContext.add(e) })), this.syncContext.flush(r), this.stacks.forEach((function(t) { return t.snapshot = void 0 }))
                        }, e.prototype.updateStacks = function() { this.stacks.forEach((function(t) { return t.updateLeadAndFollow() })) }, e.prototype.scheduleUpdate = function(t) {
                            void 0 === t && (t = !1), !t && this.updateScheduled || (this.updateScheduled = !0, this.children.forEach((function(t) {
                                return function(t) {
                                    for (var e = !1, n = {}, r = 0; r < Le.length; r++) {
                                        var o = "rotate" + Le[r];
                                        t.hasValue(o) && 0 !== t.latest[o] && (e = !0, n[o] = t.latest[o], t.latest[o] = 0)
                                    }
                                    if (e) {
                                        for (var o in t.render(), n) t.latest[o] = n[o];
                                        t.scheduleRender()
                                    }
                                }(t)
                            })), this.children.forEach((function(t) { return t.snapshotBoundingBox() })), this.stacks.forEach((function(t) { return t.updateSnapshot() })), !t && this.renderScheduled || (this.renderScheduled = !0, this.forceUpdate()))
                        }, e.prototype.addChild = function(t) { this.children.add(t), this.addToStack(t), t.presence = this.hasMounted ? yo.Entering : yo.Present }, e.prototype.removeChild = function(t) { this.scheduleUpdate(), this.children.delete(t), this.removeFromStack(t) }, e.prototype.addToStack = function(t) {
                            var e = this.getStack(t.layoutId);
                            null === e || void 0 === e || e.add(t)
                        }, e.prototype.removeFromStack = function(t) {
                            var e = this.getStack(t.layoutId);
                            null === e || void 0 === e || e.remove(t)
                        }, e.prototype.getStack = function(t) { if (void 0 !== t) return !this.stacks.has(t) && this.stacks.set(t, new Ei), this.stacks.get(t) }, e.prototype.render = function() { return (0, de.createElement)(jo.Provider, { value: this.syncContext }, this.props.children) }, e.contextType = er, e
                    }(de.Component);

                    function ji(t) { return Gn((function() { return ge(t) })) }

                    function Oi(t, e) {
                        (0, de.useEffect)((function() { return $n(t) ? t.onChange(e) : void 0 }))
                    }

                    function Ai(t, e) {
                        var n = ji(e()),
                            r = function() { return n.set(e()) };
                        return r(),
                            function(t, e) {
                                (0, de.useEffect)((function() { var n = t.map((function(t) { return t.onChange(e) })); return function() { return n.forEach((function(t) { return t() })) } }))
                            }(t, (function() { return E.update(r, !1, !0) })), n
                    }
                    var Pi = function(t) { return function(t) { return "object" === typeof t && t.mix }(t) ? t.mix : void 0 };

                    function Mi(t, e, n, r) {
                        var o = "function" === typeof e ? e : function() {
                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                            var n = !Array.isArray(t[0]),
                                r = n ? 0 : -1,
                                o = t[0 + r],
                                a = t[1 + r],
                                s = t[2 + r],
                                u = t[3 + r],
                                l = At(a, s, i({ mixer: Pi(s[0]) }, u));
                            return n ? l(o) : l
                        }(e, n, r);
                        return Array.isArray(t) ? Ti(t, o) : Ti([t], (function(t) { var e = u(t, 1)[0]; return o(e) }))
                    }

                    function Ti(t, e) { var n = Gn((function() { return [] })); return Ai(t, (function() { n.length = 0; for (var r = t.length, o = 0; o < r; o++) n[o] = t[o].get(); return e(n) })) }

                    function Li(t, e) {
                        void 0 === e && (e = {});
                        var n = (0, de.useContext)(ir).isStatic,
                            r = (0, de.useRef)(null),
                            o = ji($n(t) ? t.get() : t);
                        return (0, de.useMemo)((function() { return o.attach((function(t, a) { return n ? a(t) : (r.current && r.current.stop(), r.current = Kt(i(i({ from: o.get(), to: t, velocity: o.getVelocity() }, e), { onUpdate: a })), o.get()) })) }), Object.values(e)), Oi(t, (function(t) { return o.set(parseFloat(t)) })), o
                    }! function() {
                        function t() { this.componentControls = new Set }
                        t.prototype.subscribe = function(t) {
                            var e = this;
                            return this.componentControls.add(t),
                                function() { return e.componentControls.delete(t) }
                        }, t.prototype.start = function(t, e) { this.componentControls.forEach((function(n) { n.start(t.nativeEvent || t, e) })) }, t.prototype.updateConstraints = function() { this.componentControls.forEach((function(t) { t.prepareBoundingBox(), t.resolveDragConstraints() })) }
                    }();
                    ! function(t) {
                        function e() { var e = null !== t && t.apply(this, arguments) || this; return e.initialState = {}, e }
                        o(e, t), e.prototype.updateLayoutDelta = function() {}, e.prototype.build = function() {}, e.prototype.clean = function() {}, e.prototype.makeTargetAnimatable = function(t) {
                            var e = t.transition,
                                n = t.transitionEnd,
                                r = a(t, ["transition", "transitionEnd"]);
                            return Vn(this, r, Dn(r, e || {}, this)), i({ transition: e, transitionEnd: n }, r)
                        }, e.prototype.getBoundingBox = function() { return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } } }, e.prototype.readNativeValue = function(t) { return this.initialState[t] || 0 }, e.prototype.render = function() { this.build() }
                    }(me)
                },
                4394: function(t, e, n) {
                    "use strict";
                    n.d(e, { k: function() { return o }, K: function() { return r } });
                    var r = function() {},
                        o = function() {}
                },
                425: function(t, e, n) {
                        "use strict";
                        n.d(e, { f: function() { return l }, F: function() { return a } });
                        var r = n(7294),
                            o = n(9008);
                        const i = (0, r.createContext)({ setTheme: t => {}, themes: [] }),
                            a = () => (0, r.useContext)(i),
                            s = ["light", "dark"],
                            u = "(prefers-color-scheme: dark)",
                            l = ({ forcedTheme: t, disableTransitionOnChange: e = !1, enableSystem: n = !0, enableColorScheme: o = !0, storageKey: a = "theme", themes: l = ["light", "dark"], defaultTheme: h = (n ? "system" : "light"), attribute: v = "data-theme", value: g, children: m }) => {
                                const [y, b] = (0, r.useState)((() => f(a, h))), [x, w] = (0, r.useState)((() => f(a))), S = g ? Object.values(g) : l, k = (0, r.useCallback)((e => {
                                    const n = p(e);
                                    w(n), "system" !== y || t || C(n, !1)
                                }), [y, t]), E = (0, r.useRef)(k);
                                E.current = k;
                                const C = (0, r.useCallback)(((t, r = !0, o = !0) => {
                                    let i = (null == g ? void 0 : g[t]) || t;
                                    const s = e && o ? d() : null;
                                    if (r) try { localStorage.setItem(a, t) } catch (t) {}
                                    if ("system" === t && n) {
                                        const t = p();
                                        i = (null == g ? void 0 : g[t]) || t
                                    }
                                    if (o) { const t = document.documentElement; "class" === v ? (t.classList.remove(...S), t.classList.add(i)) : t.setAttribute(v, i), null == s || s() }
                                }), []);
                                (0, r.useEffect)((() => {
                                    const t = function() { return E.current(...[].slice.call(arguments)) },
                                        e = window.matchMedia(u);
                                    return e.addListener(t), t(e), () => e.removeListener(t)
                                }), []);
                                const j = (0, r.useCallback)((e => { t ? C(e, !0, !1) : C(e), b(e) }), [t]);
                                return (0, r.useEffect)((() => { const t = t => { t.key === a && j(t.newValue || h) }; return window.addEventListener("storage", t), () => window.removeEventListener("storage", t) }), [j]), (0, r.useEffect)((() => {
                                    if (!o) return;
                                    let e = t && s.includes(t) ? t : y && s.includes(y) ? y : "system" === y && x || null;
                                    document.documentElement.style.setProperty("color-scheme", e)
                                }), [o, y, x, t]), r.createElement(i.Provider, { value: { theme: y, setTheme: j, forcedTheme: t, resolvedTheme: "system" === y ? x : y, themes: n ? [...l, "system"] : l, systemTheme: n ? x : void 0 } }, r.createElement(c, { forcedTheme: t, storageKey: a, attribute: v, value: g, enableSystem: n, defaultTheme: h, attrs: S }), m)
                            },
                            c = (0, r.memo)((({ forcedTheme: t, storageKey: e, attribute: n, enableSystem: i, defaultTheme: a, value: s, attrs: l }) => { const c = "class" === n ? `var d=document.documentElement.classList;d.remove(${l.map((t=>`'${t}'`)).join(",")});`:"var d=document.documentElement;",f=(t,e)=>{t=(null==s?void 0:s[t])||t;const r=e?t:`'${t}'`;return"class"===n?`d.add(${r})`:`d.setAttribute('${n}', ${r})`},d="system"===a;return r.createElement(o.default,null,r.createElement("script",t?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:`!function(){${c}${f(t)}}()`}}:i?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:`!function(){try {${c}var e=localStorage.getItem('${e}');${d?"":f(a)+";"}if("system"===e||(!e&&${d})){var t="${u}",m=window.matchMedia(t);m.media!==t||m.matches?${f("dark")}:${f("light")}}else if(e) ${s?`var x=${JSON.stringify(s)};`:""}${f(s?"x[e]":"e",!0)}}catch(e){}}()`}}:{key:"next-themes-script",dangerouslySetInnerHTML:{__html:`!function(){try{${c}var e=localStorage.getItem("${e}");if(e){${s?`var x=${JSON.stringify(s)};`:""}${f(s?"x[e]":"e",!0)}}else{${f(a)};}}catch(t){}}();`}}))}),((t,e)=>t.forcedTheme===e.forcedTheme)),f=(t,e)=>{if("undefined"==typeof window)return;let n;try{n=localStorage.getItem(t)||void 0}catch(t){}return n||e},d=()=>{const t=document.createElement("style");return t.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout((()=>{document.head.removeChild(t)}),1)}},p=t=>(t||(t=window.matchMedia(u)),t.matches?"dark":"light")},6363:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(2957)}])},8045:function(t,e,n){"use strict";function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function o(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}e.default=function(t){var e=t.src,n=t.sizes,o=t.unoptimized,u=void 0!==o&&o,c=t.priority,f=void 0!==c&&c,v=t.loading,m=t.lazyBoundary,y=void 0===m?"200px":m,b=t.className,x=t.quality,w=t.width,S=t.height,j=t.objectFit,O=t.objectPosition,A=t.onLoadingComplete,P=t.loader,M=void 0===P?C:P,T=t.placeholder,L=void 0===T?"empty":T,B=t.blurDataURL,R=function(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}(t,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),V=n?"responsive":"intrinsic";"layout"in R&&(R.layout&&(V=R.layout),delete R.layout);var I="";if(function(t){return"object"===typeof t&&(g(t)||function(t){return void 0!==t.src}(t))}(e)){var D=g(e)?e.default:e;if(!D.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(D)));if(B=B||D.blurDataURL,I=D.src,(!V||"fill"!==V)&&(S=S||D.height,w=w||D.width,!D.height||!D.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(D)))}e="string"===typeof e?e:I;var $=E(w),z=E(S),F=E(x),G=!f&&("lazy"===v||"undefined"===typeof v);(e.startsWith("data:")||e.startsWith("blob:"))&&(u=!0,G=!1);p.has(e)&&(G=!1);0;var H,W=r(l.useIntersection({rootMargin:y,disabled:!G}),2),_=W[0],U=W[1],N=!G||U,q={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},X={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},Y=!1,Z={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:j,objectPosition:O},K="blur"===L?{filter:"blur(20px)",backgroundSize:j||"cover",backgroundImage:'url("'.concat(B,'")'),backgroundPosition:O||"0% 0%"}:{};if("fill"===V)q.display="block",q.position="absolute",q.top=0,q.left=0,q.bottom=0,q.right=0;else if("undefined"!==typeof $&&"undefined"!==typeof z){var J=z/$,Q=isNaN(J)?"100%":"".concat(100*J,"%");"responsive"===V?(q.display="block",q.position="relative",Y=!0,X.paddingTop=Q):"intrinsic"===V?(q.display="inline-block",q.position="relative",q.maxWidth="100%",Y=!0,X.maxWidth="100%",H='<svg width="'.concat($,'" height="').concat(z,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===V&&(q.display="inline-block",q.position="relative",q.width=$,q.height=z)}else 0;var tt={src:h,srcSet:void 0,sizes:void 0};N&&(tt=k({src:e,unoptimized:u,layout:V,width:$,quality:F,sizes:n,loader:M}));var et=e;0;return i.default.createElement("span",{style:q},Y?i.default.createElement("span",{style:X},H?i.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:"data:image/svg+xml;base64,".concat(s.toBase64(H))}):null):null,i.default.createElement("img",Object.assign({},R,tt,{decoding:"async","data-nimg":V,className:b,ref:function(t){_(t),function(t,e,n,r,o){if(!t)return;var i=function(){t.src!==h&&("decode"in t?t.decode():Promise.resolve()).catch((function(){})).then((function(){if("blur"===r&&(t.style.filter="none",t.style.backgroundSize="none",t.style.backgroundImage="none"),p.add(e),o){var n=t.naturalWidth,i=t.naturalHeight;o({naturalWidth:n,naturalHeight:i})}}))};t.complete?i():t.onload=i}(t,et,0,L,A)},style:d({},Z,K)})),i.default.createElement("noscript",null,i.default.createElement("img",Object.assign({},R,k({src:e,unoptimized:u,layout:V,width:$,quality:F,sizes:n,loader:M}),{decoding:"async","data-nimg":V,style:Z,className:b,loading:v||"lazy"}))),f?i.default.createElement(a.default,null,i.default.createElement("link",{key:"__nimg-"+tt.src+tt.srcSet+tt.sizes,rel:"preload",as:"image",href:tt.srcSet?void 0:tt.src,imagesrcset:tt.srcSet,imagesizes:tt.sizes})):null)};var i=f(n(7294)),a=f(n(5443)),s=n(6978),u=n(5809),l=n(7190);function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t){return t&&t.__esModule?t:{default:t}}function d(t){for(var e=arguments,n=function(n){var r=null!=e[n]?e[n]:{},o=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),o.forEach((function(e){c(t,e,r[e])}))},r=1;r<arguments.length;r++)n(r);return t}var p=new Set,h=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var v=new Map([["default",function(t){var e=t.root,n=t.src,r=t.width,o=t.quality;0;return"".concat(e,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(o||75)}],["imgix",function(t){var e=t.root,n=t.src,r=t.width,o=t.quality,i=new URL("".concat(e).concat(j(n))),a=i.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),o&&a.set("q",o.toString());return i.href}],["cloudinary",function(t){var e=t.root,n=t.src,r=t.width,o=t.quality,i=["f_auto","c_limit","w_"+r,"q_"+(o||"auto")].join(",")+"/";return"".concat(e).concat(i).concat(j(n))}],["akamai",function(t){var e=t.root,n=t.src,r=t.width;return"".concat(e).concat(j(n),"?imwidth=").concat(r)}],["custom",function(t){var e=t.src;throw new Error('Image with src "'.concat(e,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function g(t){return void 0!==t.default}var m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"}||u.imageConfigDefault,y=m.deviceSizes,b=m.imageSizes,x=m.loader,w=m.path,S=(m.domains,o(y).concat(o(b)));function k(t){var e=t.src,n=t.unoptimized,r=t.layout,i=t.width,a=t.quality,s=t.sizes,u=t.loader;if(n)return{src:e,srcSet:void 0,sizes:void 0};var l=function(t,e,n){if(n&&("fill"===e||"responsive"===e)){for(var r,i=/(^|\s)(1?\d?\d)vw/g,a=[];r=i.exec(n);r)a.push(parseInt(r[2]));if(a.length){var s,u=.01*(s=Math).min.apply(s,o(a));return{widths:S.filter((function(t){return t>=y[0]*u})),kind:"w"}}return{widths:S,kind:"w"}}return"number"!==typeof t||"fill"===e||"responsive"===e?{widths:y,kind:"w"}:{widths:o(new Set([t,2*t].map((function(t){return S.find((function(e){return e>=t}))||S[S.length-1]})))),kind:"x"}}(i,r,s),c=l.widths,f=l.kind,d=c.length-1;return{sizes:s||"w"!==f?s:"100vw",srcSet:c.map((function(t,n){return"".concat(u({src:e,quality:a,width:t})," ").concat("w"===f?t:n+1).concat(f)})).join(", "),src:u({src:e,quality:a,width:c[d]})}}function E(t){return"number"===typeof t?t:"string"===typeof t?parseInt(t,10):void 0}function C(t){var e=v.get(x);if(e)return e(d({root:w},t));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(u.VALID_LOADERS.join(", "),". Received: ").concat(x))}function j(t){return"/"===t[0]?t.slice(1):t}y.sort((function(t,e){return t-e})),S.sort((function(t,e){return t-e}))},8418:function(t,e,n){"use strict";function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}e.default=void 0;var o,i=(o=n(7294))&&o.__esModule?o:{default:o},a=n(6273),s=n(387),u=n(7190);var l={};function c(t,e,n,r){if(t&&a.isLocalURL(e)){t.prefetch(e,n,r).catch((function(t){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:t&&t.locale;l[e+"%"+n+(o?"%"+o:"")]=!0}}var f=function(t){var e,n=!1!==t.prefetch,o=s.useRouter(),f=i.default.useMemo((function(){var e=r(a.resolveHref(o,t.href,!0),2),n=e[0],i=e[1];return{href:n,as:t.as?a.resolveHref(o,t.as):i||n}}),[o,t.href,t.as]),d=f.href,p=f.as,h=t.children,v=t.replace,g=t.shallow,m=t.scroll,y=t.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var b=(e=i.default.Children.only(h))&&"object"===typeof e&&e.ref,x=r(u.useIntersection({rootMargin:"200px"}),2),w=x[0],S=x[1],k=i.default.useCallback((function(t){w(t),b&&("function"===typeof b?b(t):"object"===typeof b&&(b.current=t))}),[b,w]);i.default.useEffect((function(){var t=S&&n&&a.isLocalURL(d),e="undefined"!==typeof y?y:o&&o.locale,r=l[d+"%"+p+(e?"%"+e:"")];t&&!r&&c(o,d,p,{locale:e})}),[p,d,S,y,n,o]);var E={ref:k,onClick:function(t){e.props&&"function"===typeof e.props.onClick&&e.props.onClick(t),t.defaultPrevented||function(t,e,n,r,o,i,s,u){("A"!==t.currentTarget.nodeName||!function(t){var e=t.currentTarget.target;return e&&"_self"!==e||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which}(t)&&a.isLocalURL(n))&&(t.preventDefault(),null==s&&r.indexOf("#")>=0&&(s=!1),e[o?"replace":"push"](n,r,{shallow:i,locale:u,scroll:s}))}(t,o,d,p,v,g,m,y)},onMouseEnter:function(t){a.isLocalURL(d)&&(e.props&&"function"===typeof e.props.onMouseEnter&&e.props.onMouseEnter(t),c(o,d,p,{priority:!0}))}};if(t.passHref||"a"===e.type&&!("href"in e.props)){var C="undefined"!==typeof y?y:o&&o.locale,j=o&&o.isLocaleDomain&&a.getDomainLocale(p,C,o&&o.locales,o&&o.domainLocales);E.href=j||a.addBasePath(a.addLocale(p,C,o&&o.defaultLocale))}return i.default.cloneElement(e,E)};e.default=f},7190:function(t,e,n){"use strict";function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(e,"__esModule",{value:!0}),e.useIntersection=function(t){var e=t.rootMargin,n=t.disabled||!a,u=o.useRef(),l=r(o.useState(!1),2),c=l[0],f=l[1],d=o.useCallback((function(t){u.current&&(u.current(),u.current=void 0),n||c||t&&t.tagName&&(u.current=function(t,e,n){var r=function(t){var e=t.rootMargin||"",n=s.get(e);if(n)return n;var r=new Map,o=new IntersectionObserver((function(t){t.forEach((function(t){var e=r.get(t.target),n=t.isIntersecting||t.intersectionRatio>0;e&&n&&e(n)}))}),t);return s.set(e,n={id:e,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,a=r.elements;return a.set(t,e),i.observe(t),function(){a.delete(t),i.unobserve(t),0===a.size&&(i.disconnect(),s.delete(o))}}(t,(function(t){return t&&f(t)}),{rootMargin:e}))}),[n,e,c]);return o.useEffect((function(){if(!a&&!c){var t=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(t)}}}),[c]),[d,c]};var o=n(7294),i=n(9311),a="undefined"!==typeof IntersectionObserver;var s=new Map},6978:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.toBase64=function(t){return window.btoa(t)}},1415:function(t,e,n){"use strict";n.d(e,{Ar:function(){return l},xN:function(){return c},Ej:function(){return f}});var r=n(5893),o=n(4935),i=n(9160),a=n(4581);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){s(t,e,n[e])}))}return t}function l(t){var e=t.children,n=e.find((function(t){return"h1"===t.props.originalType})).props.children,i=e.find((function(t){return"h2"===t.props.originalType})).props.children,s=a.entries.find((function(t){return t.title===n})).date;return(0,r.jsxs)(o.xu,{css:{position:"relative"},children:[(0,r.jsx)(o.h_,{title:n,description:i}),(0,r.jsx)(c,{minHeight:"calc(100vh - 120px)",children:(0,r.jsx)(f,{children:s})}),e]})}function c(t){var e=t.children,n=t.minHeight;return(0,r.jsx)(o.xu,{css:{width:"1px",height:"calc(100% + 120px)",position:"absolute",top:0,left:-44,borderLeft:"2px dotted $gray6","@mobile":{display:"none"}},style:{minHeight:n},children:e})}function f(t){var e=t.children,n=t.css;return(0,r.jsx)(o.xv,{as:i.ww.aside,layoutId:e,family:"serif",size:"14",weight:"600",css:u({position:"absolute",left:-38,top:0,color:"$gray8",whiteSpace:"nowrap"},n),style:{writingMode:"tb-rl"},children:e})}},4935:function(t,e,n){"use strict";n.d(e,{xN:function(){return dn.xN},xS:function(){return fn},xu:function(){return o},Ej:function(){return dn.Ej},s4:function(){return De},JO:function(){return m},ck:function(){return $e},rU:function(){return l},h_:function(){return sn},T3:function(){return Je},Pz:function(){return b},Z0:function(){return Ke},nE:function(){return Lt},xv:function(){return Pt},R5:function(){return At},u:function(){return St}});var r=n(7009),o=(0,r.zo)("div",{boxSizing:"border-box"}),i=n(5893),a=n(7294);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=a.forwardRef((function(t,e){var n=t.children,r=t.variant,o=t.href,a=t.css,l=u(t,["children","variant","href","css"]);return(0,i.jsx)("a",function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){s(t,e,n[e])}))}return t}({ref:e,href:o,target:"_blank",rel:"noopener noreferrer",className:c({variant:r,css:a})},l,{children:n}))})),c=(0,r.iv)({textDecoration:"none",color:"$gray12",borderBottom:"1px solid $gray6",fontWeight:500,paddingBottom:"4px",transition:"border-color 150ms ease","&:hover":{borderColor:"$gray8"},"&:focus":{outline:0,boxShadow:"none","&:focus:focus-visible":{boxShadow:"inset 0 0 0 2px var(--colors-gray7)"}}}),f=n(5675),d=n(425),p=n(3935);(0,r.iv)({pointerEvents:"none",width:240,height:150,borderRadius:"12px",boxShadow:"$small",padding:8,img:{pointerEvents:"none",objectFit:"cover",height:"100%",width:"100%",objectPosition:"top center",borderRadius:"8px"}});function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function v(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var g={logo:(0,i.jsx)("svg",{width:"51.715",height:"70",viewBox:"0 0 51.715 70",fill:"white",children:(0,i.jsx)("g",{transform:"translate(-385 388)",children:(0,i.jsxs)("g",{transform:"translate(-140 -77)",children:[(0,i.jsx)("rect",{width:"21",height:"70",transform:"translate(525 -311)"}),(0,i.jsx)("circle",{cx:"20",cy:"20",r:"20",transform:"translate(525 -311)"}),(0,i.jsx)("path",{d:"M34.263,78.811H2.548V47.1L34.262,78.81Z",transform:"translate(542.452 -319.811)"})]})})}),logo2:(0,i.jsxs)("svg",{width:"51.715",height:"70",viewBox:"0 0 51.715 70",children:[(0,i.jsx)("defs",{children:(0,i.jsxs)("linearGradient",{id:"linear-gradient",x1:"1.199",y1:"1.722",x2:"-0.068",y2:"0.034",gradientUnits:"objectBoundingBox",children:[(0,i.jsx)("stop",{id:"stopGradient",offset:"0",stopColor:"#4e4e4e"}),(0,i.jsx)("stop",{offset:"1",stopColor:"#fff"})]})}),(0,i.jsx)("g",{id:"Group_2","data-name":"Group 2",transform:"translate(-385 388)",children:(0,i.jsxs)("g",{id:"Group_1","data-name":"Group 1",transform:"translate(-140 -77)",children:[(0,i.jsx)("path",{id:"Subtraction_1","data-name":"Subtraction 1",d:"M34.263,78.811H2.548V47.1L34.262,78.81Z",transform:"translate(542.452 -319.811)",fill:"url(#linear-gradient)"}),(0,i.jsx)("circle",{id:"Ellipse_1","data-name":"Ellipse 1",cx:"20",cy:"20",r:"20",transform:"translate(525 -311)",fill:"url(#linear-gradient)"}),(0,i.jsx)("rect",{id:"Rectangle_1","data-name":"Rectangle 1",width:"21",height:"70",transform:"translate(525 -311)",fill:"url(#linear-gradient)"})]})})]}),twitter:(0,i.jsxs)("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"currentColor",children:[(0,i.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,i.jsx)("path",{d:"M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"})]}),github:(0,i.jsxs)("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"currentColor",children:[(0,i.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,i.jsx)("path",{d:"M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"})]}),linkedin:(0,i.jsxs)("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"currentColor",children:[(0,i.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,i.jsx)("path",{d:"M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"})]}),mail:(0,i.jsx)("svg",{viewBox:"0 0 24 24",children:(0,i.jsxs)("g",{fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,i.jsx)("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),(0,i.jsx)("polyline",{points:"22,6 12,13 2,6"})]})}),help:(0,i.jsxs)("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"currentColor",children:[(0,i.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,i.jsx)("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm2-1.645A3.502 3.502 0 0 0 12 6.5a3.501 3.501 0 0 0-3.433 2.813l1.962.393A1.5 1.5 0 1 1 12 11.5a1 1 0 0 0-1 1V14h2v-.645z"})]})};function m(t){var e=t.name,n=t.size,r=v(t,["name","size"]);return a.cloneElement(g[e],function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){h(t,e,n[e])}))}return t}({},n&&{width:n,height:n},r))}var y=(0,r.zo)("div",{width:"100%",display:"inline-block",position:"relative",overflow:"hidden",br:"12px",variants:{variant:{fullWidth:{height:"460px"},halfWidth:{width:"calc(50% - 16px)",height:"500px","@mobile":{width:"100%",mx:"0"}}}}});function b(t){var e=t.base64,n=t.src,r=t.alt,o=t.variant,a=t.css;return(0,i.jsxs)(y,{variant:o,css:a,children:[(0,i.jsx)(fn,{alt:r,src:e}),(0,i.jsx)(f.default,{src:n,layout:"fill",objectFit:"cover"})]})}function x(){return!("undefined"===typeof window||!window.document||!window.document.createElement)}var w=x()?a.useLayoutEffect:a.useEffect,S=!1,k=0,E=function(){return++k};function C(t){return x()?t?t.ownerDocument:document:null}function j(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.filter((function(t){return null!=t})).join("--")}function O(t){return!(!t||"[object Function]"!={}.toString.call(t))}function A(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function P(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"===typeof t)return A(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(t,e):void 0}}(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=t[Symbol.iterator]()).next.bind(n)}function M(t,e){if(null!=t)if(O(t))t(e);else try{t.current=e}catch(n){throw new Error('Cannot assign value "'+e+'" to ref "'+t+'"')}}function T(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return(0,a.useCallback)((function(t){for(var n,r=P(e);!(n=r()).done;){M(n.value,t)}}),e)}function L(t,e){return function(n){if(t&&t(n),!n.defaultPrevented)return e(n)}}var B=function(t){var e=t.children,n=t.type,r=void 0===n?"reach-portal":n,o=t.containerRef,i=(0,a.useRef)(null),s=(0,a.useRef)(null),u=function(){var t=(0,a.useState)(Object.create(null))[1];return(0,a.useCallback)((function(){t(Object.create(null))}),[])}();return w((function(){if(i.current){var t=i.current.ownerDocument,e=(null==o?void 0:o.current)||t.body;return s.current=null==t?void 0:t.createElement(r),e.appendChild(s.current),u(),function(){s.current&&e&&e.removeChild(s.current)}}}),[r,u,o]),s.current?(0,p.createPortal)(e,s.current):(0,a.createElement)("span",{ref:i})};n(5697);function R(){return(R=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var V=["as","style"],I=(0,a.forwardRef)((function(t,e){var n=t.as,r=void 0===n?"span":n,o=t.style,i=void 0===o?{}:o,s=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,V);return(0,a.createElement)(r,R({ref:e,style:R({border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"},i)},s))}));var D,$=["bottom","height","left","right","top","width"],z=new Map,F=function t(){var e=[];z.forEach((function(t,n){var r,o,i=n.getBoundingClientRect();r=i,o=t.rect,void 0===r&&(r={}),void 0===o&&(o={}),$.some((function(t){return r[t]!==o[t]}))&&(t.rect=i,e.push(t))})),e.forEach((function(t){t.callbacks.forEach((function(e){return e(t.rect)}))})),D=window.requestAnimationFrame(t)};var G=function(t,e){return{observe:function(){var n=0===z.size;z.has(t)?z.get(t).callbacks.push(e):z.set(t,{rect:void 0,hasRectChanged:!1,callbacks:[e]}),n&&F()},unobserve:function(){var n=z.get(t);if(n){var r=n.callbacks.indexOf(e);r>=0&&n.callbacks.splice(r,1),n.callbacks.length||z.delete(t),z.size||cancelAnimationFrame(D)}}}};function H(t,e,n){var r,o,i;"boolean"===typeof e?r=e:(r=null==(i=null==e?void 0:e.observe)||i,o=null==e?void 0:e.onChange);O(n)&&(o=n);var s=(0,a.useState)(t.current),u=s[0],l=s[1],c=(0,a.useRef)(!1),f=(0,a.useRef)(!1),d=(0,a.useState)(null),p=d[0],h=d[1],v=(0,a.useRef)(o);return w((function(){v.current=o,t.current!==u&&l(t.current)})),w((function(){u&&!c.current&&(c.current=!0,h(u.getBoundingClientRect()))}),[u]),w((function(){if(r){var e=u;if(f.current||(f.current=!0,e=t.current),e){var n=G(e,(function(t){null==v.current||v.current(t),h(t)}));return n.observe(),function(){n.unobserve()}}}}),[r,u,t]),p}function W(){return(W=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function _(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}var U,N,q,X,Y,Z,K,J,Q=["label","ariaLabel","isVisible","id"],tt=["ariaLabel","aria-label","as","id","isVisible","label","position","style","triggerRect"],et=["type"];!function(t){t.Idle="IDLE",t.Focused="FOCUSED",t.Visible="VISIBLE",t.LeavingVisible="LEAVING_VISIBLE",t.Dismissed="DISMISSED"}(K||(K={})),function(t){t.Blur="BLUR",t.Focus="FOCUS",t.GlobalMouseMove="GLOBAL_MOUSE_MOVE",t.MouseDown="MOUSE_DOWN",t.MouseEnter="MOUSE_ENTER",t.MouseLeave="MOUSE_LEAVE",t.MouseMove="MOUSE_MOVE",t.Rest="REST",t.SelectWithKeyboard="SELECT_WITH_KEYBOARD",t.TimeComplete="TIME_COMPLETE"}(J||(J={}));var nt,rt,ot={initial:K.Idle,states:(Z={},Z[K.Idle]={enter:st,on:(U={},U[J.MouseEnter]=K.Focused,U[J.Focus]=K.Visible,U)},Z[K.Focused]={enter:function(){window.clearTimeout(nt),nt=window.setTimeout((function(){pt({type:J.Rest})}),100)},leave:function(){window.clearTimeout(nt)},on:(N={},N[J.MouseMove]=K.Focused,N[J.MouseLeave]=K.Idle,N[J.MouseDown]=K.Dismissed,N[J.Blur]=K.Idle,N[J.Rest]=K.Visible,N)},Z[K.Visible]={on:(q={},q[J.Focus]=K.Focused,q[J.MouseEnter]=K.Focused,q[J.MouseLeave]=K.LeavingVisible,q[J.Blur]=K.LeavingVisible,q[J.MouseDown]=K.Dismissed,q[J.SelectWithKeyboard]=K.Dismissed,q[J.GlobalMouseMove]=K.LeavingVisible,q)},Z[K.LeavingVisible]={enter:function(){window.clearTimeout(rt),rt=window.setTimeout((function(){return pt({type:J.TimeComplete})}),500)},leave:function(){window.clearTimeout(rt),st()},on:(X={},X[J.MouseEnter]=K.Visible,X[J.Focus]=K.Visible,X[J.TimeComplete]=K.Idle,X)},Z[K.Dismissed]={leave:function(){st()},on:(Y={},Y[J.MouseLeave]=K.Idle,Y[J.Blur]=K.Idle,Y)},Z)},it={value:ot.initial,context:{id:null}},at=[];function st(){it.context.id=null}function ut(t){var e=void 0===t?{}:t,n=e.id,r=e.onPointerEnter,o=e.onPointerMove,i=e.onPointerLeave,s=e.onPointerDown,u=e.onMouseEnter,l=e.onMouseMove,c=e.onMouseLeave,f=e.onMouseDown,d=e.onFocus,p=e.onBlur,h=e.onKeyDown,v=e.disabled,g=e.ref,m=e.DEBUG_STYLE,y=String(function(t){var e=t||(S?E():null),n=(0,a.useState)(e),r=n[0],o=n[1];return w((function(){null===r&&o(E())}),[]),(0,a.useEffect)((function(){!1===S&&(S=!0)}),[]),null!=r?String(r):void 0}(n)),b=(0,a.useState)(!!m||ht(y,!0)),x=b[0],k=b[1],O=(0,a.useRef)(null),A=T(g,O),P=H(O,{observe:x});function M(t,e){return"undefined"!==typeof window&&"PointerEvent"in window?t:L(t,e)}function B(t){return function(e){"mouse"===e.pointerType&&t(e)}}function R(){pt({type:J.MouseEnter,id:y})}function V(){pt({type:J.MouseMove,id:y})}function I(){pt({type:J.MouseLeave})}function D(){it.context.id===y&&pt({type:J.MouseDown})}return(0,a.useEffect)((function(){return t=function(){k(ht(y))},at.push(t),function(){at.splice(at.indexOf(t),1)};var t}),[y]),(0,a.useEffect)((function(){var t=C(O.current);function e(t){"Escape"!==t.key&&"Esc"!==t.key||it.value!==K.Visible||pt({type:J.SelectWithKeyboard})}return t.addEventListener("keydown",e),function(){return t.removeEventListener("keydown",e)}}),[]),function(t){var e=t.disabled,n=t.isVisible,r=t.ref;(0,a.useEffect)((function(){if("undefined"!==typeof window&&"PointerEvent"in window&&e&&n){var t=C(r.current);return t.addEventListener("mousemove",o),function(){t.removeEventListener("mousemove",o)}}function o(t){n&&(t.target instanceof Element&&t.target.closest("[data-reach-tooltip-trigger][data-state='tooltip-visible']")||pt({type:J.GlobalMouseMove}))}}),[e,n,r])}({disabled:v,isVisible:x,ref:O}),[{"aria-describedby":x?j("tooltip",y):void 0,"data-state":x?"tooltip-visible":"tooltip-hidden","data-reach-tooltip-trigger":"",ref:A,onPointerEnter:L(r,B(R)),onPointerMove:L(o,B(V)),onPointerLeave:L(i,B(I)),onPointerDown:L(s,B(D)),onMouseEnter:M(u,R),onMouseMove:M(l,V),onMouseLeave:M(c,I),onMouseDown:M(f,D),onFocus:L(d,(function(){window.__REACH_DISABLE_TOOLTIPS||pt({type:J.Focus,id:y})})),onBlur:L(p,(function(){it.context.id===y&&pt({type:J.Blur})})),onKeyDown:L(h,(function(t){"Enter"!==t.key&&" "!==t.key||pt({type:J.SelectWithKeyboard})}))},{id:y,triggerRect:P,isVisible:x},x]}var lt=(0,a.forwardRef)((function(t,e){var n=t.label,r=t.ariaLabel,o=t.isVisible,i=t.id,s=_(t,Q);return o?(0,a.createElement)(B,null,(0,a.createElement)(ct,W({ref:e,label:n,"aria-label":r,isVisible:o},s,{id:j("tooltip",String(i))}))):null}));var ct=(0,a.forwardRef)((function(t,e){var n=t.ariaLabel,r=t["aria-label"],o=t.as,i=void 0===o?"div":o,s=t.id,u=t.isVisible,l=t.label,c=t.position,f=void 0===c?dt:c,d=t.style,p=t.triggerRect,h=_(t,tt),v=null!=(r||n),g=(0,a.useRef)(null),m=T(e,g),y=H(g,{observe:u});return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(i,W({role:v?void 0:"tooltip"},h,{ref:m,"data-reach-tooltip":"",id:v?void 0:s,style:W({},d,ft(f,p,y))}),l),v&&(0,a.createElement)(I,{role:"tooltip",id:s},r||n))}));function ft(t,e,n){return!n?{visibility:"hidden"}:t(e,n)}var dt=function(t,e,n){void 0===n&&(n=8);var r=function(t){var e,n,r=C(t),o=r.defaultView||window;return r?{width:null!=(e=r.documentElement.clientWidth)?e:o.innerWidth,height:null!=(n=r.documentElement.clientHeight)?n:o.innerHeight}:{width:0,height:0}}(),o=r.width,i=r.height;if(!t||!e)return{};var a={top:t.top-e.height<0,right:o<t.left+e.width,bottom:i<t.bottom+e.height+n,left:t.left-e.width<0},s=a.bottom&&!a.top;return{left:a.right&&!a.left?t.right-e.width+window.pageXOffset+"px":t.left+window.pageXOffset+"px",top:s?t.top-n-e.height+window.pageYOffset+"px":t.top+n+t.height+window.pageYOffset+"px"}};function pt(t){var e=function(t,e){var n=ot.states[t.value],r=n&&n.on&&n.on[e.type];if(!r)return W({},t,{changed:!1});n&&n.leave&&n.leave(t.context,e);e.type;var o=_(e,et),i=W({},it.context,o),a="string"===typeof r?r:r.target,s=ot.states[a];s&&s.enter&&s.enter(t.context,e);return{value:a,context:i,changed:!0}}(it,t),n=e.value,r=e.context;e.changed&&(it={value:n,context:r},at.forEach((function(t){return t(it)})))}function ht(t,e){return it.context.id===t&&(e?it.value===K.Visible:it.value===K.Visible||it.value===K.LeavingVisible)}var vt=n(9160);function gt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function mt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){gt(t,e,n[e])}))}return t}function yt(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function bt(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var xt=vt.ww.custom(lt),wt=(0,r.zo)(xt,{position:"absolute",padding:"4px 8px",boxShadow:"$small",color:"$gray11",fontFamily:"$sans",fontSize:"12px",background:"white",borderRadius:"6px",border:"1px solid $gray6",zIndex:"1337",pointerEvents:"none",wordBreak:"break-word",".dark &":{background:"$gray2"}});function St(t){var e,n,r,o,s,u,l,c,f,d,p,h,v,g,m,y=t.children,b=t.debug,x=yt(t,["children","debug"]),w=bt(ut({onMouseEnter:null===(e=y)||void 0===e||null===(n=e.props)||void 0===n?void 0:n.onMouseEnter,onMouseMove:null===(r=y)||void 0===r||null===(o=r.props)||void 0===o?void 0:o.onMouseMove,onMouseDown:null===(s=y)||void 0===s||null===(u=s.props)||void 0===u?void 0:u.onMouseDown,onMouseLeave:null===(l=y)||void 0===l||null===(c=l.props)||void 0===c?void 0:c.onMouseLeave,onFocus:null===(f=y)||void 0===f||null===(d=f.props)||void 0===d?void 0:d.onFocus,onBlur:null===(p=y)||void 0===p||null===(h=p.props)||void 0===h?void 0:h.onBlur,onKeyDown:null===(v=y)||void 0===v||null===(g=v.props)||void 0===g?void 0:g.onKeyDown,ref:null===(m=y)||void 0===m?void 0:m.ref,DEBUG_STYLE:b}),3),S=w[0],k=w[1],E=w[2];return(0,i.jsxs)(i.Fragment,{children:[a.cloneElement(y,S),(0,i.jsx)(vt.M_,{children:E&&(0,i.jsx)(wt,mt({initial:{opacity:0,y:4},animate:{opacity:1,y:0},exit:{opacity:0,y:4},transition:{duration:.15},position:kt},k,x))})]})}function kt(t,e){if(!t||!e)return{};var n=function(t,e){return{top:t.top-e.height<0,right:window.innerWidth<t.left+e.width,bottom:window.innerHeight<t.bottom+e.height,left:t.left+t.width-e.width<0}}(t,e);return{left:n.left&&!n.right?t.left+window.pageXOffset:n.right&&!n.left?t.right+window.pageXOffset-e.width:t.right-e.width+(e.width/2-t.width/2)+window.pageXOffset,top:n.top?t.top+8+t.height+window.pageYOffset:t.top-8-e.height+window.pageYOffset}}var Et=n(8030);function Ct(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var jt={mass:3,damping:35,stiffness:250},Ot={dark:{rotate:40,r:9,cx:50,cy:23,opacity:0},light:{rotate:90,r:5,cx:100,cy:0,opacity:1}},At=a.forwardRef((function(){var t=(0,d.F)().theme,e=Ct(a.useState(!1),2),n=e[0],r=e[1],o=(0,Et.cT)("/static/bleep.mp3"),s="dark"===t?"dark":"light";a.useEffect((function(){return r(!0)}),[]);var u=(0,vt.q_)(Ot[s].rotate,jt),l=(0,vt.q_)(Ot[s].r,jt),c=(0,vt.q_)(Ot[s].cx,jt),f=(0,vt.q_)(Ot[s].cy,jt),p=(0,vt.Hm)(c,(function(t){return"".concat(t,"%")})),h=(0,vt.Hm)(f,(function(t){return"".concat(t,"%")})),v=(0,vt.q_)(Ot[s].opacity,jt);return a.useEffect((function(){u.set(Ot[s].rotate),l.set(Ot[s].r),c.set(Ot[s].cx),f.set(Ot[s].cy),v.set(Ot[s].opacity),o()}),[t]),n?(0,i.jsxs)(vt.ww.svg,{width:"48",height:"48",viewBox:"0 0 24 24",color:"var(--colors-gray10)",fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor",style:{rotate:u},children:[(0,i.jsxs)("mask",{id:"myMask2",children:[(0,i.jsx)("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"white"}),(0,i.jsx)(vt.ww.circle,{style:{cx:p,cy:h},r:"9",fill:"black"})]}),(0,i.jsx)(vt.ww.circle,{cx:"12",cy:"12",fill:"var(--colors-gray10)",style:{r:l},mask:"url(#myMask2)"}),(0,i.jsxs)(vt.ww.g,{stroke:"currentColor",style:{opacity:v},children:[(0,i.jsx)("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),(0,i.jsx)("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),(0,i.jsx)("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),(0,i.jsx)("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),(0,i.jsx)("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),(0,i.jsx)("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),(0,i.jsx)("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),(0,i.jsx)("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]})]}):null}));var Pt=(0,r.zo)("h1",{display:"block",margin:0,variants:{family:{sans:{fontFamily:"$sans"},serif:{fontFamily:"$serif"}},gradient:{writing:{us:"none",display:"inline-block",backgroundImage:"linear-gradient(90deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent"}},size:{10:{fontSize:"$10"},12:{fontSize:"$12"},14:{fontSize:"$14"},15:{fontSize:"15px"},16:{fontSize:"$16"},20:{fontSize:"$20"},24:{fontSize:"$24"},32:{fontSize:"$32"},40:{fontSize:"$40"},48:{fontSize:"$48"}},lineHeight:{12:{lineHeight:"$12"},16:{lineHeight:"$16"},20:{lineHeight:"$20"},24:{lineHeight:"$24"},28:{lineHeight:"28px"},32:{lineHeight:"$32"},40:{lineHeight:"$40"},48:{lineHeight:"$48"},56:{lineHeight:"$56"}},weight:{400:{fontWeight:"400"},500:{fontWeight:"500"},600:{fontWeight:"600"},700:{fontWeight:"700"},800:{fontWeight:"800"}},color:{gray11:{color:"$gray11"},gray12:{color:"$gray12"},red:{color:"$red11"}}},defaultVariants:{size:"14",lineHeight:"24",weight:"400",color:"gray12",family:"$sans"}});function Mt(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var Tt=(0,r.F4)({"0%":{transform:"rotate(0deg)"},"25%":{transform:"rotate(15deg)"},"50%":{transform:"rotate(-13deg)"},"75%":{transform:"rotate(12deg)"},"100%":{transform:"rotate(0deg)"}});function Lt(){var t=Mt(a.useState(!1),2),e=t[0],n=t[1],r=Mt(a.useState(!1),2),s=r[0],u=r[1],l=Mt((0,Et.DU)(),2),c=l[0],f=l[1],d=(0,Et.cT)("/static/enable-sound.mp3"),p=(0,Et.cT)("/static/disable-sound.mp3");return a.useEffect((function(){return n(!0)}),[]),e?(0,i.jsx)($e,{label:c?"Sound off":"Sound on",onClick:function(){u(!0),c?p():d(),f()},children:(0,i.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 18 18",fill:"none",children:[(0,i.jsx)(o,{as:"path",d:"M8.25 3.75L4.5 6.75H1.5V11.25H4.5L8.25 14.25V3.75Z",fill:"currentColor",css:{animation:c&&s?"".concat(Tt," 350ms ease"):"none",transformOrigin:"30% center"}}),(0,i.jsx)(o,{as:"path",d:" M14.3025 3.69751 C15.7086 5.10397 16.4984 7.01128 16.4984 9.00001 C16.4984 10.9887 15.7086 12.8961 14.3025 14.3025 ",css:{stroke:"$gray11",transition:"opacity 200ms ease",transitionDelay:c?"150ms":"0ms",opacity:c?1:0}}),(0,i.jsx)(o,{as:"path",d:" M11.655 6.34501 C12.358 7.04824 12.753 8.00189 12.753 8.99626 C12.753 9.99063 12.358 10.9443 11.655 11.6475 ",css:{stroke:"$gray10",transition:"opacity 200ms ease",transitionDelay:c?"0ms":"150ms",opacity:c?1:0}})]})}):(0,i.jsx)($e,{children:(0,i.jsx)("div",{})})}var Bt=n(8520),Rt=n.n(Bt);const Vt=(t,e,n)=>{const r=e-t;return 0===r?1:(n-t)/r},It=(t,e,n)=>-n*t+n*e+t,Dt=(t,e)=>n=>Math.max(Math.min(n,e),t),$t=t=>t%1?Number(t.toFixed(5)):t,zt=/(-)?([\d]*\.?[\d])+/g,Ft=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,Gt=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;function Ht(t){return"string"===typeof t}const Wt={test:t=>"number"===typeof t,parse:parseFloat,transform:t=>t},_t=Object.assign(Object.assign({},Wt),{transform:Dt(0,1)}),Ut=(Object.assign(Object.assign({},Wt),{default:1}),(t,e)=>n=>Boolean(Ht(n)&&Gt.test(n)&&n.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(n,e))),Nt=(t,e,n)=>r=>{if(!Ht(r))return r;const[o,i,a,s]=r.match(zt);return{[t]:parseFloat(o),[e]:parseFloat(i),[n]:parseFloat(a),alpha:void 0!==s?parseFloat(s):1}},qt=Dt(0,255),Xt=Object.assign(Object.assign({},Wt),{transform:t=>Math.round(qt(t))}),Yt={test:Ut("rgb","red"),parse:Nt("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:r=1})=>"rgba("+Xt.transform(t)+", "+Xt.transform(e)+", "+Xt.transform(n)+", "+$t(_t.transform(r))+")"};const Zt={test:Ut("#"),parse:function(t){let e="",n="",r="",o="";return t.length>5?(e=t.substr(1,2),n=t.substr(3,2),r=t.substr(5,2),o=t.substr(7,2)):(e=t.substr(1,1),n=t.substr(2,1),r=t.substr(3,1),o=t.substr(4,1),e+=e,n+=n,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}},transform:Yt.transform},Kt=t=>({test:e=>Ht(e)&&e.endsWith(t)&&1===e.split(" ").length,parse:parseFloat,transform:e=>`${e}${t}`}),Jt=(Kt("deg"),Kt("%")),Qt=(Kt("px"),Kt("vh"),Kt("vw"),Object.assign(Object.assign({},Jt),{parse:t=>Jt.parse(t)/100,transform:t=>Jt.transform(100*t)}),{test:Ut("hsl","hue"),parse:Nt("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:r=1})=>"hsla("+Math.round(t)+", "+Jt.transform($t(e))+", "+Jt.transform($t(n))+", "+$t(_t.transform(r))+")"});var te=n(4394);function ee(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function ne({hue:t,saturation:e,lightness:n,alpha:r}){t/=360,n/=100;let o=0,i=0,a=0;if(e/=100){const r=n<.5?n*(1+e):n+e-n*e,s=2*n-r;o=ee(s,r,t+1/3),i=ee(s,r,t),a=ee(s,r,t-1/3)}else o=i=a=n;return{red:Math.round(255*o),green:Math.round(255*i),blue:Math.round(255*a),alpha:r}}const re=(t,e,n)=>{const r=t*t,o=e*e;return Math.sqrt(Math.max(0,n*(o-r)+r))},oe=[Zt,Yt,Qt],ie=t=>oe.find((e=>e.test(t))),ae=t=>`'${t}' is not an animatable color. Use the equivalent color code instead.`,se=(t,e)=>{let n=ie(t),r=ie(e);(0,te.k)(!!n,ae(t)),(0,te.k)(!!r,ae(e));let o=n.parse(t),i=r.parse(e);n===Qt&&(o=ne(o),n=Yt),r===Qt&&(i=ne(i),r=Yt);const a=Object.assign({},o);return t=>{for(const e in a)"alpha"!==e&&(a[e]=re(o[e],i[e],t));return a.alpha=It(o.alpha,i.alpha,t),n.transform(a)}},ue=t=>Yt.test(t)||Zt.test(t)||Qt.test(t),le=t=>Yt.test(t)?Yt.parse(t):Qt.test(t)?Qt.parse(t):Zt.parse(t),ce=t=>Ht(t)?t:t.hasOwnProperty("red")?Yt.transform(t):Qt.transform(t),fe="${c}",de="${n}";function pe(t){"number"===typeof t&&(t=`${t}`);const e=[];let n=0;const r=t.match(Ft);r&&(n=r.length,t=t.replace(Ft,fe),e.push(...r.map(le)));const o=t.match(zt);return o&&(t=t.replace(zt,de),e.push(...o.map(Wt.parse))),{values:e,numColors:n,tokenised:t}}function he(t){return pe(t).values}function ve(t){const{values:e,numColors:n,tokenised:r}=pe(t),o=e.length;return t=>{let e=r;for(let r=0;r<o;r++)e=e.replace(r<n?fe:de,r<n?ce(t[r]):$t(t[r]));return e}}const ge=t=>"number"===typeof t?0:t;const me={test:function(t){var e,n,r,o;return isNaN(t)&&Ht(t)&&(null!==(n=null===(e=t.match(zt))||void 0===e?void 0:e.length)&&void 0!==n?n:0)+(null!==(o=null===(r=t.match(Ft))||void 0===r?void 0:r.length)&&void 0!==o?o:0)>0},parse:he,createTransformer:ve,getAnimatableNone:function(t){const e=he(t);return ve(t)(e.map(ge))}},ye=(t,e)=>n=>e(t(n)),be=(...t)=>t.reduce(ye);function xe(t,e){return"number"===typeof t?n=>It(t,e,n):ue(t)?se(t,e):Ee(t,e)}const we=(t,e)=>{const n=[...t],r=n.length,o=t.map(((t,n)=>xe(t,e[n])));return t=>{for(let e=0;e<r;e++)n[e]=o[e](t);return n}},Se=(t,e)=>{const n=Object.assign(Object.assign({},t),e),r={};for(const o in n)void 0!==t[o]&&void 0!==e[o]&&(r[o]=xe(t[o],e[o]));return t=>{for(const e in r)n[e]=r[e](t);return n}};function ke(t){const e=me.parse(t),n=e.length;let r=0,o=0,i=0;for(let a=0;a<n;a++)r||"number"===typeof e[a]?r++:void 0!==e[a].hue?i++:o++;return{parsed:e,numNumbers:r,numRGB:o,numHSL:i}}const Ee=(t,e)=>{const n=me.createTransformer(e),r=ke(t),o=ke(e);return r.numHSL===o.numHSL&&r.numRGB===o.numRGB&&r.numNumbers>=o.numNumbers?be(we(r.parsed,o.parsed),n):((0,te.K)(!0,`Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),n=>`${n>0?e:t}`)},Ce=(t,e)=>n=>It(t,e,n);function je(t,e,n){const r=[],o=n||("number"===typeof(i=t[0])?Ce:"string"===typeof i?ue(i)?se:Ee:Array.isArray(i)?we:"object"===typeof i?Se:void 0);var i;const a=t.length-1;for(let s=0;s<a;s++){let n=o(t[s],t[s+1]);if(e){const t=Array.isArray(e)?e[s]:e;n=be(t,n)}r.push(n)}return r}function Oe(t,e,{clamp:n=!0,ease:r,mixer:o}={}){const i=t.length;(0,te.k)(i===e.length,"Both input and output ranges must be the same length"),(0,te.k)(!r||!Array.isArray(r)||r.length===i-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),t[0]>t[i-1]&&(t=[].concat(t),e=[].concat(e),t.reverse(),e.reverse());const a=je(e,r,o),s=2===i?function([t,e],[n]){return r=>n(Vt(t,e,r))}(t,a):function(t,e){const n=t.length,r=n-1;return o=>{let i=0,a=!1;if(o<=t[0]?a=!0:o>=t[r]&&(i=r-1,a=!0),!a){let e=1;for(;e<n&&!(t[e]>o||e===r);e++);i=e-1}const s=Vt(t[i],t[i+1],o);return e[i](s)}}(t,a);return n?e=>s(((t,e,n)=>Math.min(Math.max(n,t),e))(t[0],t[i-1],e)):s}var Ae=n(1163);function Pe(t,e,n,r,o,i,a){try{var s=t[i](a),u=s.value}catch(l){return void n(l)}s.done?e(u):Promise.resolve(u).then(r,o)}function Me(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){Pe(i,r,o,a,s,"next",t)}function s(t){Pe(i,r,o,a,s,"throw",t)}a(void 0)}))}}function Te(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Le(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){Te(t,e,n[e])}))}return t}function Be(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function Re(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var Ve=a.createContext(0),Ie=(0,r.F4)({"0%":{opacity:0,transform:"translate(-50%, -50%) translateY(64px)"},"100%":{opacity:1,transform:"translate(-50%, -50%) translateY(0)"}});function De(){var t=(0,d.F)(),e=t.theme,n=t.resolvedTheme,r=t.setTheme,s=Re(a.useState(null),2),u=s[0],l=s[1];return(0,i.jsx)(o,{id:"footer",as:"footer",css:{display:"flex",ai:"flex-end",width:"auto",height:"70px",px:"10px",position:"fixed",bottom:"-8px",background:"$lowContrast",boxShadow:"$large",backdropFilter:"blur(25px)",border:"1px solid $gray4",left:"50%",borderRadius:"20px",opacity:0,zIndex:10,transform:"translate(-50%, -50%) translateY(64px)",animation:"".concat(Ie," 500ms ease forwards 200ms"),"@mobile":{width:"calc(100% - 64px)"},".dark &":{background:"rgba(22, 22, 22, 0.85)"}},onPointerMove:function(t){"mouse"===t.pointerType&&l(t.clientX)},onPointerLeave:function(){l(null)},children:(0,i.jsx)(o,{css:{display:"flex",ai:"flex-end",gap:"8px",width:"100%",height:"150px",py:"10px","@mobile":{overflowX:"auto",overflowY:"hidden"}},children:(0,i.jsx)(vt.sm,{children:(0,i.jsxs)(Ve.Provider,{value:u,children:[(0,i.jsx)($e,{href:"https://ultra.tf",label:"Ultra",children:(0,i.jsx)(Ne,{})}),(0,i.jsx)(ze,{}),(0,i.jsx)($e,{href:"/",label:"Home",children:(0,i.jsx)(Ge,{})}),(0,i.jsx)($e,{href:"/projects",label:"Projects",children:(0,i.jsx)(We,{})}),(0,i.jsx)($e,{href:"/writing",label:"Writing",children:(0,i.jsx)(He,{})}),(0,i.jsx)($e,{href:"/photos",label:"Photos",children:(0,i.jsx)(_e,{})}),(0,i.jsx)(ze,{}),(0,i.jsx)($e,{label:"Twitter",href:"https://twitter.com/Tx3Developers",children:(0,i.jsx)(Ue,{})}),(0,i.jsx)($e,{label:"GitHub",href:"https://github.com/trunglaptrinh",children:(0,i.jsx)(m,{name:"github"})}),(0,i.jsx)($e,{label:"Mail",href:"mailto:trunglaptrinh2009@gmail.com",children:(0,i.jsx)(qe,{})}),(0,i.jsx)(ze,{}),(0,i.jsx)($e,{label:"dark"===e?"Light mode":"Dark mode",onClick:function(){r("dark"===n?"light":"dark")},children:(0,i.jsx)(At,{})}),(0,i.jsx)(Lt,{})]})})})})}function $e(t){var e=t.children,n=t.href,r=t.label,s=t.onClick,u=Be(t,["children","href","label","onClick"]),l=a.useContext(Ve),c=a.useRef(null),f=(0,Ae.useRouter)(),d=Re(f.pathname.split("/"),2)[1],p="/".concat(d)===n,h=48,v=288,g=[-288,-230.4,-144,0,144,230.4,v],m=[h,1.1*h,67.872,96,67.872,1.1*h,h],y=(0,vt.q_)(h,{damping:40,stiffness:500,mass:1}),b=(0,vt.q_)(0,{damping:19,stiffness:250});function x(){return(x=Me(Rt().mark((function t(){return Rt().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n&&(n.startsWith("/")?f.push(n,void 0,{scroll:!1}):window.open(n)),null===s||void 0===s||s(),b.set(-40),setTimeout((function(){b.set(0)}),300);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return a.useEffect((function(){var t=c.current;if(t){var e=289;if(null!==l){var n=t.getBoundingClientRect(),r=n.left+n.width/2;e=l-r}else e=289;var o=Oe(g,m)(e);y.set(o)}}),[l]),(0,i.jsx)(St,{label:r,children:(0,i.jsxs)(o,Le({ref:c,as:vt.ww.button,css:{"--gradient-color-1":"$colors$gray2","--gradient-color-2":"$colors$gray5",border:0,padding:0,margin:0,display:"flex",ai:"center",jc:"center",width:"48px",height:"100%",background:"$gray3",borderRadius:"23%",position:"relative",color:"$gray10",focus:!0,cursor:"pointer",flexShrink:0,backgroundImage:"linear-gradient(\n            45deg,\n            var(--gradient-color-1),\n            var(--gradient-color-2),\n            var(--gradient-color-1),\n            var(--gradient-color-2)\n          )",backgroundSize:"200% 100%",".dark &":{"--gradient-color-1":"$colors$gray2","--gradient-color-2":"$colors$gray3"},"svg, img":{size:"50%",transformOrigin:"unset !important",pointerEvents:"none"}},style:{width:y,height:y,y:b},onClick:function(){return x.apply(this,arguments)}},u,{children:[e,p&&(0,i.jsx)(o,{layoutId:"active",as:vt.ww.div,css:{background:"$gray7",position:"absolute",size:"4px",br:"$round",bottom:-7,zIndex:1}})]}))})}function ze(){return(0,i.jsx)(o,{as:"hr",css:{margin:0,border:0,width:"1px",height:"48px",background:"$gray4",mx:"4px",flexShrink:0}})}var Fe="var(--colors-gray10)";function Ge(){return(0,i.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,i.jsx)("path",{opacity:"0.25",d:"M20 18.8V6.63998L13.6514 2.81501L13.6514 2.815C13.0511 2.45333 12.751 2.2725 12.4304 2.20186C12.1469 2.13938 11.8531 2.13938 11.5696 2.20186C11.249 2.2725 10.9489 2.45334 10.3486 2.81501L4 6.64001V18.8C4 19.9201 4 20.4802 4.21799 20.908C4.40973 21.2843 4.71569 21.5903 5.09202 21.782C5.51984 22 6.0799 22 7.2 22H16.8C17.9201 22 18.4802 22 18.908 21.782C19.2843 21.5903 19.5903 21.2843 19.782 20.908C20 20.4802 20 19.9201 20 18.8Z",fill:Fe}),(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.14251 9.5145C1.42665 9.98808 2.04091 10.1416 2.51449 9.85749L12 4.16619L21.4855 9.85749C21.9591 10.1416 22.5733 9.98808 22.8575 9.5145C23.1416 9.04092 22.9881 8.42666 22.5145 8.14251L13.029 2.45121C12.3956 2.07119 11.6044 2.07119 10.971 2.45121L1.4855 8.14251C1.01192 8.42666 0.858357 9.04092 1.14251 9.5145Z",fill:Fe}),(0,i.jsx)("path",{d:"M9 16C9 14.3431 10.3431 13 12 13C13.6569 13 15 14.3431 15 16V22H9V16Z",fill:Fe})]})}function He(){return(0,i.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,i.jsx)("path",{d:"M3.69601 15.8112L2.15894 19.91C1.70676 21.1158 2.88429 22.2934 4.09012 21.8412L8.18896 20.3041C8.72361 20.1036 9.20914 19.791 9.6129 19.3872L10 19L5 14L4.6129 14.3872C4.20914 14.791 3.8965 15.2765 3.69601 15.8112Z",fill:Fe}),(0,i.jsx)("path",{opacity:"0.25",d:"M5 14L10 19L19.5 9.5L14.5 4.5L5 14Z",fill:Fe}),(0,i.jsx)("path",{d:"M20.8787 8.12136L19.5 9.5L14.5 4.5L15.8787 3.12135C17.0503 1.94978 18.9497 1.94978 20.1213 3.12136L20.8787 3.87872C22.0503 5.05029 22.0503 6.94978 20.8787 8.12136Z",fill:Fe})]})}function We(){return(0,i.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,i.jsx)("path",{d:"M8 20C8 19.4477 8.44772 19 9 19H15C15.5523 19 16 19.4477 16 20V21C16 22.6569 14.6569 24 13 24H11C9.34315 24 8 22.6569 8 21V20Z",fill:Fe}),(0,i.jsx)("path",{opacity:"0.25",d:"M20 8C20 10.5264 18.8289 12.7793 17 14.2454V15C17 16.1046 16.1046 17 15 17C10.8358 17 15.5135 17 9 17C7.89543 17 7 16.1046 7 15V14.2454C5.17107 12.7793 4 10.5264 4 8C4 3.58172 7.58172 0 12 0C16.4183 0 20 3.58172 20 8Z",fill:Fe}),(0,i.jsx)("path",{d:"M10.7071 8.29289C10.3166 7.90237 9.68342 7.90237 9.29289 8.29289C8.90237 8.68342 8.90237 9.31658 9.29289 9.70711L11 11.4142V17H13V11.4142L14.7071 9.70711C15.0976 9.31658 15.0976 8.68342 14.7071 8.29289C14.3166 7.90237 13.6834 7.90237 13.2929 8.29289L12 9.58579L10.7071 8.29289Z",fill:Fe})]})}function _e(){return(0,i.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,i.jsx)("path",{opacity:"0.25",d:"M2 8.34233C2 6.96573 2.93689 5.76578 4.27239 5.4319L6 5L7.1094 3.3359C7.6658 2.5013 8.60249 2 9.60555 2H14.3944C15.3975 2 16.3342 2.5013 16.8906 3.3359L18 5L19.7276 5.4319C21.0631 5.76578 22 6.96573 22 8.34233V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V8.34233Z",fill:Fe}),(0,i.jsx)("path",{d:"M18 10C18.5523 10 19 9.55228 19 9C19 8.44772 18.5523 8 18 8C17.4477 8 17 8.44772 17 9C17 9.55228 17.4477 10 18 10Z",fill:Fe}),(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 13C16 15.2091 14.2091 17 12 17C9.79086 17 8 15.2091 8 13C8 10.7909 9.79086 9 12 9C14.2091 9 16 10.7909 16 13ZM14 13C14 14.1046 13.1046 15 12 15C10.8954 15 10 14.1046 10 13C10 11.8954 10.8954 11 12 11C13.1046 11 14 11.8954 14 13Z",fill:Fe})]})}function Ue(){return(0,i.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,i.jsx)("path",{opacity:"0.25",d:"M20.9999 7.5C21.4999 15 15.9999 21 8.99995 21C6.58804 21 4.17613 20.6768 2.28388 19.7706C1.85051 19.5631 2.0199 18.985 2.49936 18.9532C4.82944 18.7987 6.75765 18.2423 7.99995 17C11.0001 14 11.5 13 12.2646 9.02396C12.0933 8.54804 11.9999 8.03492 11.9999 7.5C11.9999 5.01472 14.0147 3 16.4999 3C18.0181 3 19.3607 3.75182 20.1757 4.90346L21.8929 4.65815C22.3207 4.59703 22.6194 5.07087 22.3796 5.43047L20.9999 7.5Z",fill:Fe}),(0,i.jsx)("path",{d:"M7.99998 16.9999C2.58358 15.1944 1.64928 8.49939 2.62226 5.00708C2.73651 4.59701 3.26964 4.59488 3.48453 4.96234C5.14601 7.80359 8.30518 9.38991 12.2646 9.02385C18.5 9.02385 17 19.9999 7.99998 16.9999Z",fill:Fe})]})}function Ne(){return(0,i.jsx)(o,{as:"img",src:"/static/bg.png",css:{size:"24px",br:"9999px"}})}function qe(){return(0,i.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,i.jsx)("path",{opacity:"0.25",d:"M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6Z",fill:Fe}),(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.23177 7.35981C5.58534 6.93553 6.2159 6.87821 6.64018 7.23177L11.3598 11.1648C11.7307 11.4738 12.2693 11.4738 12.6402 11.1648L17.3598 7.23177C17.7841 6.87821 18.4147 6.93553 18.7682 7.35981C19.1218 7.78409 19.0645 8.41465 18.6402 8.76822L13.9205 12.7012C12.808 13.6284 11.192 13.6284 10.0794 12.7012L5.35981 8.76822C4.93553 8.41465 4.87821 7.78409 5.23177 7.35981Z",fill:Fe})]})}function Xe(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ye(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var Ze=(0,r.iv)({height:1,background:"$gray6",border:0,my:"24px",mb:"48px"});function Ke(t){var e=t.css,n=Ye(t,["css"]);return(0,i.jsx)("hr",function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){Xe(t,e,n[e])}))}return t}({className:Ze({css:e})},n))}function Je(t){var e=t.title,n=t.description;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Pt,{as:"h1",size:"32",lineHeight:"40",weight:"700",family:"serif",css:{mb:"8px",us:"none"},children:e}),(0,i.jsx)(Pt,{as:"p",size:"15",color:"gray11",css:{mb:"24px",dottedBorderBottom:!0},children:n})]})}var Qe=n(9008);function tn(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var en={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},nn=function(t){var e=[];t.titleTemplate&&(en.templateTitle=t.titleTemplate);var n="";t.title&&(n=t.title,en.templateTitle&&(n=en.templateTitle.replace(/%s/g,(function(){return n}))),e.push(a.createElement("title",{key:"title"},n)));var r=t.noindex||en.noindex||t.dangerouslySetAllPagesToNoIndex,o=t.nofollow||en.nofollow||t.dangerouslySetAllPagesToNoFollow;if(r||o?(t.dangerouslySetAllPagesToNoIndex&&(en.noindex=!0),t.dangerouslySetAllPagesToNoFollow&&(en.nofollow=!0),e.push(a.createElement("meta",{key:"robots",name:"robots",content:(r?"noindex":"index")+","+(o?"nofollow":"follow")})),e.push(a.createElement("meta",{key:"googlebot",name:"googlebot",content:(r?"noindex":"index")+","+(o?"nofollow":"follow")}))):(e.push(a.createElement("meta",{key:"robots",name:"robots",content:"index,follow"})),e.push(a.createElement("meta",{key:"googlebot",name:"googlebot",content:"index,follow"}))),t.description&&e.push(a.createElement("meta",{key:"description",name:"description",content:t.description})),t.mobileAlternate&&e.push(a.createElement("link",{rel:"alternate",key:"mobileAlternate",media:t.mobileAlternate.media,href:t.mobileAlternate.href})),t.languageAlternates&&t.languageAlternates.length>0&&t.languageAlternates.forEach((function(t){e.push(a.createElement("link",{rel:"alternate",key:"languageAlternate-"+t.hrefLang,hrefLang:t.hrefLang,href:t.href}))})),t.twitter&&(t.twitter.cardType&&e.push(a.createElement("meta",{key:"twitter:card",name:"twitter:card",content:t.twitter.cardType})),t.twitter.site&&e.push(a.createElement("meta",{key:"twitter:site",name:"twitter:site",content:t.twitter.site})),t.twitter.handle&&e.push(a.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:t.twitter.handle}))),t.facebook&&t.facebook.appId&&e.push(a.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:t.facebook.appId})),t.openGraph){if((t.openGraph.url||t.canonical)&&e.push(a.createElement("meta",{key:"og:url",property:"og:url",content:t.openGraph.url||t.canonical})),t.openGraph.type){var i=t.openGraph.type.toLowerCase();e.push(a.createElement("meta",{key:"og:type",property:"og:type",content:i})),"profile"===i&&t.openGraph.profile?(t.openGraph.profile.firstName&&e.push(a.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:t.openGraph.profile.firstName})),t.openGraph.profile.lastName&&e.push(a.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:t.openGraph.profile.lastName})),t.openGraph.profile.username&&e.push(a.createElement("meta",{key:"profile:username",property:"profile:username",content:t.openGraph.profile.username})),t.openGraph.profile.gender&&e.push(a.createElement("meta",{key:"profile:gender",property:"profile:gender",content:t.openGraph.profile.gender}))):"book"===i&&t.openGraph.book?(t.openGraph.book.authors&&t.openGraph.book.authors.length&&t.openGraph.book.authors.forEach((function(t,n){e.push(a.createElement("meta",{key:"book:author:0"+n,property:"book:author",content:t}))})),t.openGraph.book.isbn&&e.push(a.createElement("meta",{key:"book:isbn",property:"book:isbn",content:t.openGraph.book.isbn})),t.openGraph.book.releaseDate&&e.push(a.createElement("meta",{key:"book:release_date",property:"book:release_date",content:t.openGraph.book.releaseDate})),t.openGraph.book.tags&&t.openGraph.book.tags.length&&t.openGraph.book.tags.forEach((function(t,n){e.push(a.createElement("meta",{key:"book:tag:0"+n,property:"book:tag",content:t}))}))):"article"===i&&t.openGraph.article?(t.openGraph.article.publishedTime&&e.push(a.createElement("meta",{key:"article:published_time",property:"article:published_time",content:t.openGraph.article.publishedTime})),t.openGraph.article.modifiedTime&&e.push(a.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:t.openGraph.article.modifiedTime})),t.openGraph.article.expirationTime&&e.push(a.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:t.openGraph.article.expirationTime})),t.openGraph.article.authors&&t.openGraph.article.authors.length&&t.openGraph.article.authors.forEach((function(t,n){e.push(a.createElement("meta",{key:"article:author:0"+n,property:"article:author",content:t}))})),t.openGraph.article.section&&e.push(a.createElement("meta",{key:"article:section",property:"article:section",content:t.openGraph.article.section})),t.openGraph.article.tags&&t.openGraph.article.tags.length&&t.openGraph.article.tags.forEach((function(t,n){e.push(a.createElement("meta",{key:"article:tag:0"+n,property:"article:tag",content:t}))}))):"video.movie"!==i&&"video.episode"!==i&&"video.tv_show"!==i&&"video.other"!==i||!t.openGraph.video||(t.openGraph.video.actors&&t.openGraph.video.actors.length&&t.openGraph.video.actors.forEach((function(t,n){t.profile&&e.push(a.createElement("meta",{key:"video:actor:0"+n,property:"video:actor",content:t.profile})),t.role&&e.push(a.createElement("meta",{key:"video:actor:role:0"+n,property:"video:actor:role",content:t.role}))})),t.openGraph.video.directors&&t.openGraph.video.directors.length&&t.openGraph.video.directors.forEach((function(t,n){e.push(a.createElement("meta",{key:"video:director:0"+n,property:"video:director",content:t}))})),t.openGraph.video.writers&&t.openGraph.video.writers.length&&t.openGraph.video.writers.forEach((function(t,n){e.push(a.createElement("meta",{key:"video:writer:0"+n,property:"video:writer",content:t}))})),t.openGraph.video.duration&&e.push(a.createElement("meta",{key:"video:duration",property:"video:duration",content:t.openGraph.video.duration.toString()})),t.openGraph.video.releaseDate&&e.push(a.createElement("meta",{key:"video:release_date",property:"video:release_date",content:t.openGraph.video.releaseDate})),t.openGraph.video.tags&&t.openGraph.video.tags.length&&t.openGraph.video.tags.forEach((function(t,n){e.push(a.createElement("meta",{key:"video:tag:0"+n,property:"video:tag",content:t}))})),t.openGraph.video.series&&e.push(a.createElement("meta",{key:"video:series",property:"video:series",content:t.openGraph.video.series})))}(t.openGraph.title||t.title)&&e.push(a.createElement("meta",{key:"og:title",property:"og:title",content:t.openGraph.title||n})),(t.openGraph.description||t.description)&&e.push(a.createElement("meta",{key:"og:description",property:"og:description",content:t.openGraph.description||t.description})),t.defaultOpenGraphImageWidth&&(en.defaultOpenGraphImageWidth=t.defaultOpenGraphImageWidth),t.defaultOpenGraphImageHeight&&(en.defaultOpenGraphImageHeight=t.defaultOpenGraphImageHeight),t.openGraph.images&&t.openGraph.images.length&&t.openGraph.images.forEach((function(t,n){e.push(a.createElement("meta",{key:"og:image:0"+n,property:"og:image",content:t.url})),t.alt&&e.push(a.createElement("meta",{key:"og:image:alt0"+n,property:"og:image:alt",content:t.alt})),t.width?e.push(a.createElement("meta",{key:"og:image:width0"+n,property:"og:image:width",content:t.width.toString()})):en.defaultOpenGraphImageWidth&&e.push(a.createElement("meta",{key:"og:image:width0"+n,property:"og:image:width",content:en.defaultOpenGraphImageWidth.toString()})),t.height?e.push(a.createElement("meta",{key:"og:image:height"+n,property:"og:image:height",content:t.height.toString()})):en.defaultOpenGraphImageHeight&&e.push(a.createElement("meta",{key:"og:image:height"+n,property:"og:image:height",content:en.defaultOpenGraphImageHeight.toString()}))})),t.defaultOpenGraphVideoWidth&&(en.defaultOpenGraphVideoWidth=t.defaultOpenGraphVideoWidth),t.defaultOpenGraphVideoHeight&&(en.defaultOpenGraphVideoHeight=t.defaultOpenGraphVideoHeight),t.openGraph.videos&&t.openGraph.videos.length&&t.openGraph.videos.forEach((function(t,n){e.push(a.createElement("meta",{key:"og:video:0"+n,property:"og:video",content:t.url})),t.alt&&e.push(a.createElement("meta",{key:"og:video:alt0"+n,property:"og:video:alt",content:t.alt})),t.width?e.push(a.createElement("meta",{key:"og:video:width0"+n,property:"og:video:width",content:t.width.toString()})):en.defaultOpenGraphVideoWidth&&e.push(a.createElement("meta",{key:"og:video:width0"+n,property:"og:video:width",content:en.defaultOpenGraphVideoWidth.toString()})),t.height?e.push(a.createElement("meta",{key:"og:video:height"+n,property:"og:video:height",content:t.height.toString()})):en.defaultOpenGraphVideoHeight&&e.push(a.createElement("meta",{key:"og:video:height"+n,property:"og:video:height",content:en.defaultOpenGraphVideoHeight.toString()}))})),t.openGraph.locale&&e.push(a.createElement("meta",{key:"og:locale",property:"og:locale",content:t.openGraph.locale})),t.openGraph.site_name&&e.push(a.createElement("meta",{key:"og:site_name",property:"og:site_name",content:t.openGraph.site_name}))}return t.canonical&&e.push(a.createElement("link",{rel:"canonical",href:t.canonical,key:"canonical"})),t.additionalMetaTags&&t.additionalMetaTags.length>0&&t.additionalMetaTags.forEach((function(t){e.push(a.createElement("meta",Object.assign({key:t.name?t.name:t.property},t)))})),e},rn=(a.Component,function(t){function e(){return t.apply(this,arguments)||this}return tn(e,t),e.prototype.render=function(){var t=this.props,e=t.title,n=t.noindex,r=void 0!==n&&n,o=t.nofollow,i=t.description,s=t.canonical,u=t.openGraph,l=t.facebook,c=t.twitter,f=t.additionalMetaTags,d=t.titleTemplate,p=t.mobileAlternate,h=t.languageAlternates;return a.createElement(Qe.default,null,nn({title:e,noindex:r,nofollow:o,description:i,canonical:s,facebook:l,openGraph:u,additionalMetaTags:f,twitter:c,titleTemplate:d,mobileAlternate:p,languageAlternates:h}))},e}(a.Component));function on(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var an="https://rauno.me";function sn(t){var e=t.title,n=t.description,r=void 0===n?"Design engineer in love with emotional interfaces.":n,o=(0,Ae.useRouter)(),a=(0,d.F)().systemTheme,s=on(o.pathname.split("/writing"),2)[1],u=s?s.replace("/",""):void 0,l="TrungLapTrinh";return e&&(l=s?e:"".concat(e," \u2014 TrungLapTrinh")),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Qe.default,{children:(0,i.jsx)("link",{rel:"shortcut icon",href:"light"===a?"/favicon-dark.png":"/favicon-light.png"})}),(0,i.jsx)(rn,{title:l,description:r,openGraph:{type:"website",url:s?"".concat(an).concat(o.pathname):an,title:l,description:r,images:[{url:u?"".concat(an,"/static/og-").concat(u,".png"):"".concat(an,"/og.png"),alt:e}]}})]})}var un=function(t){var e=function(){return Boolean(t.match(/Android/i))},n=function(){return Boolean(t.match(/iPhone|iPad|iPod/i))},r=function(){return Boolean(t.match(/SSR/i))},o=function(){return Boolean(e()||n()||Boolean(t.match(/Opera Mini/i))||Boolean(t.match(/IEMobile/i)))};return{isMobile:o,isDesktop:function(){return Boolean(!o()&&!r())},isAndroid:e,isIos:n,isSSR:r}};function ln(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var cn="undefined"!==typeof navigator&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent);function fn(t){return(0,function(){var t="undefined"===typeof navigator?"SSR":navigator.userAgent;return un(t)}().isMobile)()?null:(0,i.jsx)("img",function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){ln(t,e,n[e])}))}return t}({"aria-hidden":"true",style:{position:"absolute",top:0,left:0,right:0,bottom:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",filter:cn?"blur(10px)":"blur(32px)",transform:"scale(1.2)"}},t))}var dn=n(1415)},8030:function(t,e,n){"use strict";n.d(e,{cT:function(){return c},DU:function(){return u}});var r=n(7294);var o={},i=function(t,e,n){return o[t]||(o[t]={callbacks:[],value:n}),o[t].callbacks.push(e),{deregister:function(){var n=o[t].callbacks,r=n.indexOf(e);r>-1&&n.splice(r,1)},emit:function(n){o[t].value!==n&&(o[t].value=n,o[t].callbacks.forEach((function(t){e!==t&&t(n)})))}}};function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var s=function(t,e){if(void 0===e&&(e="undefined"!=typeof n.g&&n.g.localStorage?n.g.localStorage:"undefined"!=typeof globalThis&&globalThis.localStorage?globalThis.localStorage:"undefined"!=typeof window&&window.localStorage?window.localStorage:"undefined"!=typeof localStorage?localStorage:null),e){var o=(a=e,{get:function(t,e){var n=a.getItem(t);return null==n?"function"==typeof e?e():e:JSON.parse(n)},set:function(t,e){a.setItem(t,JSON.stringify(e))}});return function(e){return function(t,e,o){var a=o.get,s=o.set,u=(0,r.useRef)(null),l=(0,r.useState)((function(){return a(e,t)})),c=l[0],f=l[1];(function(t,e,o,i){void 0===o&&(o=n.g),void 0===i&&(i={});var a=(0,r.useRef)(),s=i.capture,u=i.passive,l=i.once;(0,r.useEffect)((function(){a.current=e}),[e]),(0,r.useEffect)((function(){if(o&&o.addEventListener){var e=function(t){return a.current(t)},n={capture:s,passive:u,once:l};return o.addEventListener(t,e,n),function(){o.removeEventListener(t,e,n)}}}),[t,o,s,u,l])})("storage",(function(t){if(t.key===e){var n=JSON.parse(t.newValue);c!==n&&f(n)}})),(0,r.useEffect)((function(){return u.current=i(e,f,t),function(){u.current.deregister()}}),[t,e]);var d=(0,r.useCallback)((function(t){var n="function"==typeof t?t(c):t;s(e,n),f(n),u.current.emit(t)}),[c,s,e]);return[c,d]}(e,t,o)}}var a;return r.useState}("__sound_enabled__");function u(){var t=a(s(!0),2),e=t[0],n=t[1];return[e,function(){n(!e)}]}function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function c(t){var e=(0,r.useRef)(void 0),n=l(u(),1)[0];return(0,r.useEffect)((function(){void 0===e.current&&"Audio"in window&&(e.current=f(t))}),[t]),function(){(n||"/static/enable-sound.mp3"===t)&&e.current&&(e.current.paused||(e.current.pause(),e.current=f(t)),e.current.play())}}function f(t){if("Audio"in window)return new Audio(t)}},2957:function(t,e,n){"use strict";n.r(e),n.d(e,{isDev:function(){return g},default:function(){return m}});var r=n(5893),o=n(7294),i=(n(5985),n(9008)),a=n(3905),s=n(9160),u=n(4935),l=n(425),c=n(7009),f=n(1415),d=n(8030);function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){p(t,e,n[e])}))}return t}var v={initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},g=!1;function m(t){var e=t.Component,n=t.pageProps,p=t.router,m=(0,d.cT)("/static/Blow.mp3");return(0,c.W0)(),o.useEffect((function(){m(),setTimeout((function(){window.scrollTo({top:0,left:0})}),200)}),[p.route]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:"TrungLapTrinh"}),(0,r.jsx)("meta",{name:"keywords",content:"rauno freiberg, design engineer, react"}),(0,r.jsx)("meta",{name:"twitter:site",content:"@raunofreiberg"}),(0,r.jsx)("meta",{name:"twitter:creator",content:"@raunofreiberg"}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),!g&&(0,r.jsx)("script",{async:!0,defer:!0,"data-domain":"rauno.me",src:"/js/script.js"})]}),(0,r.jsx)(a.Zo,{components:{wrapper:f.Ar,a:u.rU,hr:u.Z0,Break:function(){return(0,r.jsx)(u.Z0,{css:{width:"10%",margin:"64px auto"}})},p:function(t){return(0,r.jsx)(u.xv,h({as:"p",color:"gray11",lineHeight:"28",weight:"400",size:"16",css:{"+ p":{mt:"24px"}}},t))},h1:function(t){return(0,r.jsx)(u.xv,h({as:"h1",size:"32",family:"serif",lineHeight:"40",gradient:"writing",weight:"700"},t,{css:{us:"none"}}))},h2:function(t){return(0,r.jsx)(u.xv,h({as:"h2",size:"15",color:"gray11",css:{mt:"8px",dottedBorderBottom:!0}},t))},h3:function(t){return(0,r.jsx)(u.xv,h({as:"h3",size:"24",lineHeight:"32",weight:"600",css:{mb:"$8"}},t))},h4:function(t){return(0,r.jsx)(u.xv,h({as:"h4",size:"20",lineHeight:"40",weight:"600",css:{mb:"$8"}},t))}},children:(0,r.jsxs)(l.f,{disableTransitionOnChange:!0,attribute:"class",value:{dark:c.$_.className},children:[(0,r.jsx)(u.s4,{}),(0,r.jsx)(u.xu,{as:"main",css:{display:"flex",fd:"column",maxWidth:"720px",position:"relative",minHeight:"100vh",px:"$2",py:"120px",margin:"0 auto","@mobile":{pt:"40px"}},children:(0,r.jsx)(s.sm,{children:(0,r.jsx)(s.M_,{exitBeforeEnter:!0,children:(0,r.jsx)(s.ww.div,h({},v,{transition:{duration:.2},children:(0,o.createElement)(e,h({},n,{key:p.route}))}),p.route)})})})]})})]})}},4581:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return u},entries:function(){return l}});var r=n(5893),o=n(1664),i=n(4935),a=n(7009);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(){return(0,r.jsxs)(i.xu,{css:{position:"relative"},children:[(0,r.jsx)(i.h_,{title:"Writing"}),(0,r.jsx)(i.xN,{minHeight:"calc(100vh - 120px)"}),(0,r.jsx)(i.T3,{title:"Writing",description:(0,r.jsxs)(r.Fragment,{children:["A collection of my ",(0,r.jsx)("strike",{children:"somewhat"})," (un)organized musings."]})}),l.map((function(t){return(0,r.jsx)(c,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){s(t,e,n[e])}))}return t}({},t),t.title)}))]})}var l=[{slug:"growing-through-design",title:"Growing through design",description:"Design as a reflection of inner change.",date:"November 16"}];function c(t){var e=t.title,n=t.description,a=t.slug,s=t.date;return(0,r.jsx)(o.default,{passHref:!0,href:"/writing/".concat(a),children:(0,r.jsxs)("a",{className:f({draft:"Draft"===s}),children:[(0,r.jsx)(i.Ej,{layoutId:s,css:{left:-60,top:8},children:s}),(0,r.jsxs)(i.xu,{as:"header",children:[(0,r.jsx)(i.xv,{as:"h3",color:"gray12",weight:"600",size:"20",children:e}),(0,r.jsx)(i.xv,{as:"p",size:"14",color:"gray11",css:{mt:"8px"},children:n})]})]})})}var f=(0,a.iv)({display:"block",width:"calc(100% + 48px)",position:"relative",br:"12px",cursor:"pointer",padding:20,margin:"0px -20px -20px -20px",transition:"background 150ms ease",WebkitTapHighlightColor:"transparent",outline:0,"&:not(:first-of-type)":{mt:"40px"},"@hover":{"&:hover":{background:"$gray3"}},"&:focus":{background:"$gray3"},"@mobile":{width:"100%"},variants:{draft:{true:{cursor:"not-allowed","&:hover":{background:"none"},header:{opacity:.4}}}}})},7009:function(t,e,n){"use strict";n.d(e,{iv:function(){return et},$_:function(){return it},W0:function(){return at},F4:function(){return ot},zo:function(){return tt}});var r=n(7294),o="colors",i="sizes",a="space",s={gap:a,gridGap:a,columnGap:a,gridColumnGap:a,rowGap:a,gridRowGap:a,inset:a,insetBlock:a,insetBlockEnd:a,insetBlockStart:a,insetInline:a,insetInlineEnd:a,insetInlineStart:a,margin:a,marginTop:a,marginRight:a,marginBottom:a,marginLeft:a,marginBlock:a,marginBlockEnd:a,marginBlockStart:a,marginInline:a,marginInlineEnd:a,marginInlineStart:a,padding:a,paddingTop:a,paddingRight:a,paddingBottom:a,paddingLeft:a,paddingBlock:a,paddingBlockEnd:a,paddingBlockStart:a,paddingInline:a,paddingInlineEnd:a,paddingInlineStart:a,top:a,right:a,bottom:a,left:a,scrollMargin:a,scrollMarginTop:a,scrollMarginRight:a,scrollMarginBottom:a,scrollMarginLeft:a,scrollMarginX:a,scrollMarginY:a,scrollMarginBlock:a,scrollMarginBlockEnd:a,scrollMarginBlockStart:a,scrollMarginInline:a,scrollMarginInlineEnd:a,scrollMarginInlineStart:a,scrollPadding:a,scrollPaddingTop:a,scrollPaddingRight:a,scrollPaddingBottom:a,scrollPaddingLeft:a,scrollPaddingX:a,scrollPaddingY:a,scrollPaddingBlock:a,scrollPaddingBlockEnd:a,scrollPaddingBlockStart:a,scrollPaddingInline:a,scrollPaddingInlineEnd:a,scrollPaddingInlineStart:a,fontSize:"fontSizes",background:o,backgroundColor:o,backgroundImage:o,borderImage:o,border:o,borderBlock:o,borderBlockEnd:o,borderBlockStart:o,borderBottom:o,borderBottomColor:o,borderColor:o,borderInline:o,borderInlineEnd:o,borderInlineStart:o,borderLeft:o,borderLeftColor:o,borderRight:o,borderRightColor:o,borderTop:o,borderTopColor:o,caretColor:o,color:o,columnRuleColor:o,fill:o,outline:o,outlineColor:o,stroke:o,textDecorationColor:o,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:i,minBlockSize:i,maxBlockSize:i,inlineSize:i,minInlineSize:i,maxInlineSize:i,width:i,minWidth:i,maxWidth:i,height:i,minHeight:i,maxHeight:i,flexBasis:i,gridTemplateColumns:i,gridTemplateRows:i,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},u=(t,e)=>"function"==typeof e?{"()":Function.prototype.toString.call(e)}:e,l=()=>{const t=Object.create(null);return(e,n,...r)=>{const o=(t=>JSON.stringify(t,u))(e);return o in t?t[o]:t[o]=n(e,...r)}},c=Symbol.for("sxs.internal"),f=(t,e)=>Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)),d=t=>{for(const e in t)return!0;return!1},{hasOwnProperty:p}=Object.prototype,h=t=>t.includes("-")?t:t.replace(/[A-Z]/g,(t=>"-"+t.toLowerCase())),v=/\s+(?![^()]*\))/,g=t=>e=>t(..."string"==typeof e?String(e).split(v):[e]),m={appearance:t=>({WebkitAppearance:t,appearance:t}),backfaceVisibility:t=>({WebkitBackfaceVisibility:t,backfaceVisibility:t}),backdropFilter:t=>({WebkitBackdropFilter:t,backdropFilter:t}),backgroundClip:t=>({WebkitBackgroundClip:t,backgroundClip:t}),boxDecorationBreak:t=>({WebkitBoxDecorationBreak:t,boxDecorationBreak:t}),clipPath:t=>({WebkitClipPath:t,clipPath:t}),content:t=>({content:t.includes('"')||t.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(t)?t:`"${t}"`}),hyphens:t=>({WebkitHyphens:t,hyphens:t}),maskImage:t=>({WebkitMaskImage:t,maskImage:t}),maskSize:t=>({WebkitMaskSize:t,maskSize:t}),tabSize:t=>({MozTabSize:t,tabSize:t}),textSizeAdjust:t=>({WebkitTextSizeAdjust:t,textSizeAdjust:t}),userSelect:t=>({WebkitUserSelect:t,userSelect:t}),marginBlock:g(((t,e)=>({marginBlockStart:t,marginBlockEnd:e||t}))),marginInline:g(((t,e)=>({marginInlineStart:t,marginInlineEnd:e||t}))),maxSize:g(((t,e)=>({maxBlockSize:t,maxInlineSize:e||t}))),minSize:g(((t,e)=>({minBlockSize:t,minInlineSize:e||t}))),paddingBlock:g(((t,e)=>({paddingBlockStart:t,paddingBlockEnd:e||t}))),paddingInline:g(((t,e)=>({paddingInlineStart:t,paddingInlineEnd:e||t})))},y=/([\d.]+)([^]*)/,b=(t,e)=>t.length?t.reduce(((t,n)=>(t.push(...e.map((t=>t.includes("&")?t.replace(/&/g,/[ +>|~]/.test(n)&&/&.*&/.test(t)?`:is(${n})`:n):n+" "+t))),t)),[]):e,x=(t,e)=>t in w&&"string"==typeof e?e.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,((e,n,r,o)=>n+("stretch"===r?`-moz-available${o};${h(t)}:${n}-webkit-fill-available`:`-moz-fit-content${o};${h(t)}:${n}fit-content`)+o)):String(e),w={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},S=t=>t?t+"-":"",k=(t,e,n)=>t.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,((t,r,o,i,a)=>"$"==i==!!o?t:(r||"--"==i?"calc(":"")+"var(--"+("$"===i?S(e)+(a.includes("$")?"":S(n))+a.replace(/\$/g,"-"):a)+")"+(r||"--"==i?"*"+(r||"")+(o||"1")+")":""))),E=/\s*,\s*(?![^()]*\))/,C=Object.prototype.toString,j=(t,e,n,r,o)=>{let i,a,s;const u=(t,e,n)=>{let l,c;const f=t=>{for(l in t){const v=64===l.charCodeAt(0),g=v&&Array.isArray(t[l])?t[l]:[t[l]];for(c of g){const t=/[A-Z]/.test(p=l)?p:p.replace(/-[^]/g,(t=>t[1].toUpperCase())),g="object"==typeof c&&c&&c.toString===C&&(!r.utils[t]||!e.length);if(t in r.utils&&!g){const e=r.utils[t];if(e!==a){a=e,f(e(c)),a=null;continue}}else if(t in m){const e=m[t];if(e!==s){s=e,f(e(c)),s=null;continue}}if(v&&(d=l.slice(1)in r.media?"@media "+r.media[l.slice(1)]:l,l=d.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,((t,e,n,r,o,i)=>{const a=y.test(e),s=.0625*(a?-1:1),[u,l]=a?[r,e]:[e,r];return"("+("="===n[0]?"":">"===n[0]===a?"max-":"min-")+u+":"+("="!==n[0]&&1===n.length?l.replace(y,((t,e,r)=>Number(e)+s*(">"===n?1:-1)+r)):l)+(o?") and ("+(">"===o[0]?"min-":"max-")+u+":"+(1===o.length?i.replace(y,((t,e,n)=>Number(e)+s*(">"===o?-1:1)+n)):i):"")+")"}))),g){const t=v?n.concat(l):[...n],r=v?[...e]:b(e,l.split(E));void 0!==i&&o(O(...i)),i=void 0,u(c,r,t)}else void 0===i&&(i=[[],e,n]),l=v||36!==l.charCodeAt(0)?l:`--${S(r.prefix)}${l.slice(1).replace(/\$/g,"-")}`,c=g?c:"number"==typeof c?c&&t in A?String(c)+"px":String(c):k(x(t,null==c?"":c),r.prefix,r.themeMap[t]),i[0].push(`${v?`${l} `:`${h(l)}:`}${c}`)}}var d,p};f(t),void 0!==i&&o(O(...i)),i=void 0};u(t,e,n)},O=(t,e,n)=>`${n.map((t=>`${t}{`)).join("")}${e.length?`${e.join(",")}{`:""}${t.join(";")}${e.length?"}":""}${Array(n.length?n.length+1:0).join("}")}`,A={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},P=t=>String.fromCharCode(t+(t>25?39:97)),M=t=>(t=>{let e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=P(e%52)+n;return P(e%52)+n})(((t,e)=>{let n=e.length;for(;n;)t=33*t^e.charCodeAt(--n);return t})(5381,JSON.stringify(t))>>>0),T=l(),L=(t,e)=>T(t,(()=>(...n)=>{let r={type:null,composers:new Set};for(const e of n)if(null!=e)if(e[c]){null==r.type&&(r.type=e[c].type);for(const t of e[c].composers)r.composers.add(t)}else e.constructor!==Object||e.$$typeof?null==r.type&&(r.type=e):r.composers.add(B(e,t));return null==r.type&&(r.type="span"),r.composers.size||r.composers.add(["PJLV",{},[],[],{},[]]),R(t,r,e)})),B=({variants:t,compoundVariants:e,defaultVariants:n,...r},o)=>{const i=`${S(o.prefix)}c-${M(r)}`,a=[],s=[],u=Object.create(null),l=[];for(const d in n)u[d]=String(n[d]);if("object"==typeof t&&t)for(const h in t){c=u,f=h,p.call(c,f)||(u[h]="undefined");const e=t[h];for(const t in e){const n={[h]:String(t)};"undefined"===String(t)&&l.push(h);const r=e[t],o=[n,r,!d(r)];a.push(o)}}var c,f;if("object"==typeof e&&e)for(const p of e){let{css:t,...e}=p;t="object"==typeof t&&t||{};for(const r in e)e[r]=String(e[r]);const n=[e,t,!d(t)];s.push(n)}return[i,r,a,s,u,l]},R=(t,e,n)=>{const[r,o,i,a]=V(e.composers),s=`.${r}${o.length>1?`:where(.${o.slice(1).join(".")})`:""}`,u=u=>{u="object"==typeof u&&u||D;const{css:l,...c}=u,f={};for(const t in i)if(delete c[t],t in u){let e=u[t];"object"==typeof e&&e?f[t]={"@initial":i[t],...e}:(e=String(e),f[t]="undefined"!==e||a.has(t)?e:i[t])}else f[t]=i[t];const d=new Set([...o]);for(const[r,o,i,a]of e.composers){n.rules.styled.cache.has(r)||(n.rules.styled.cache.add(r),j(o,[`.${r}`],[],t,(t=>{n.rules.styled.apply(t)})));const e=I(i,f,t.media),s=I(a,f,t.media,!0);for(const o of e)if(void 0!==o)for(const[e,i]of o){const o=`${r}-${M(i)}-${e}`;d.add(o),n.rules.onevar.cache.has(o)||(n.rules.onevar.cache.add(o),j(i,[`.${o}`],[],t,(t=>{n.rules.onevar.apply(t)})))}for(const o of s)if(void 0!==o)for(const[e,i]of o){const o=`${r}-${M(i)}-${e}`;d.add(o),n.rules.allvar.cache.has(o)||(n.rules.allvar.cache.add(o),j(i,[`.${o}`],[],t,(t=>{n.rules.allvar.apply(t)})))}}if("object"==typeof l&&l){const e=`${r}-i${M(l)}-css`;d.add(e),n.rules.inline.cache.has(e)||(n.rules.inline.cache.add(e),j(l,[`.${e}`],[],t,(t=>{n.rules.inline.apply(t)})))}for(const t of String(u.className||"").trim().split(/\s+/))t&&d.add(t);const p=c.className=[...d].join(" ");return{type:e.type,className:p,selector:s,props:c,toString:()=>p}};return f(u,{className:r,selector:s,[c]:e,toString:()=>(n.rules.styled.cache.has(r)||u(),r)})},V=t=>{let e="";const n=[],r={},o=[];for(const[i,,,,a,s]of t){""===e&&(e=i),n.push(i),o.push(...s);for(const t in a){const e=a[t];(void 0===r[t]||"undefined"!==e||s.includes(e))&&(r[t]=e)}}return[e,n,r,new Set(o)]},I=(t,e,n,r)=>{const o=[];t:for(let[i,a,s]of t){if(s)continue;let t,u=0;for(t in i){const r=i[t];let o=e[t];if(o!==r){if("object"!=typeof o||!o)continue t;{let t,e=0;for(const i in o)r===String(o[i])&&("@initial"!==i&&(a={[i in n?n[i]:i]:a}),u+=e,t=!0),++e;if(!t)continue t}}}(o[u]=o[u]||[]).push([r?"cv":`${t}-${i[t]}`,a])}return o},D={},$=l(),z=(t,e)=>$(t,(()=>(...n)=>{const r=()=>{for(let r of n){r="object"==typeof r&&r||{};let n=M(r);if(!e.rules.global.cache.has(n)){if(e.rules.global.cache.add(n),"@import"in r){let t=[].indexOf.call(e.sheet.cssRules,e.rules.themed.group)-1;for(let n of[].concat(r["@import"]))n=n.includes('"')||n.includes("'")?n:`"${n}"`,e.sheet.insertRule(`@import ${n};`,t++);delete r["@import"]}j(r,[],[],t,(t=>{e.rules.global.apply(t)}))}}return""};return f(r,{toString:r})})),F=l(),G=(t,e)=>F(t,(()=>n=>{const r=`${S(t.prefix)}k-${M(n)}`,o=()=>{if(!e.rules.global.cache.has(r)){e.rules.global.cache.add(r);const o=[];j(n,[],[],t,(t=>o.push(t)));const i=`@keyframes ${r}{${o.join("")}}`;e.rules.global.apply(i)}return r};return f(o,{get name(){return o()},toString:o})})),H=class{constructor(t,e,n,r){this.token=null==t?"":String(t),this.value=null==e?"":String(e),this.scale=null==n?"":String(n),this.prefix=null==r?"":String(r)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+S(this.prefix)+S(this.scale)+this.token}toString(){return this.computedValue}},W=l(),_=(t,e)=>W(t,(()=>(n,r)=>{r="object"==typeof n&&n||Object(r);const o=`.${n=(n="string"==typeof n?n:"")||`${S(t.prefix)}t-${M(r)}`}`,i={},a=[];for(const e in r){i[e]={};for(const n in r[e]){const o=`--${S(t.prefix)}${e}-${n}`,s=k(String(r[e][n]),t.prefix,e);i[e][n]=new H(n,s,e,t.prefix),a.push(`${o}:${s}`)}}const s=()=>{if(a.length&&!e.rules.themed.cache.has(n)){e.rules.themed.cache.add(n);const o=`${r===t.theme?":root,":""}.${n}{${a.join(";")}}`;e.rules.themed.apply(o)}return n};return{...i,get className(){return s()},selector:o,toString:s}})),U=["themed","global","styled","onevar","allvar","inline"],N=t=>{let e;const n=()=>{if(e){const{rules:t,sheet:n}=e;if(!n.deleteRule){for(;3===Object(Object(n.cssRules)[0]).type;)n.cssRules.splice(0,1);n.cssRules=[]}for(const e in t)delete t[e];n.ownerRule&&(n.ownerRule.textContent=n.ownerRule.textContent)}const r=Object(t).styleSheets||[];for(const t of r)if(!t.href||t.href.startsWith(location.origin)){for(let r=0,o=t.cssRules;o[r];++r){const i=Object(o[r]);if(1!==i.type)continue;const a=Object(o[r+1]);if(4!==a.type)continue;++r;const{cssText:s}=i;if(!s.startsWith("--sxs"))continue;const u=s.slice(14,-3).trim().split(/\s+/),l=U[u[0]];l&&(e||(e={sheet:t,reset:n,rules:{}}),e.rules[l]={group:a,index:r,cache:new Set(u)})}if(e)break}if(!e){const r=(t,e)=>({type:e,cssRules:[],insertRule(t,e){this.cssRules.splice(e,0,r(t,{import:3,undefined:1}[(t.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return"@media{}"===t?`@media{${[].map.call(this.cssRules,(t=>t.cssText)).join("")}}`:t}});e={sheet:t?(t.head||t).appendChild(document.createElement("style")).sheet:r("","text/css"),rules:{},reset:n,toString(){const{cssRules:t}=e.sheet;return[].map.call(t,((n,r)=>{const{cssText:o}=n;let i="";if(o.startsWith("--sxs"))return"";if(t[r-1]&&(i=t[r-1].cssText).startsWith("--sxs")){if(!n.cssRules.length)return"";for(const t in e.rules)if(e.rules[t].group===n)return`--sxs{--sxs:${[...e.rules[t].cache].join(" ")}}${o}`;return n.cssRules.length?`${i}${o}`:""}return o})).join("")}}}const{sheet:o,rules:i}=e;if(!i.inline){const t=o.cssRules.length;o.insertRule("@media{}",t),o.insertRule("--sxs{--sxs:5}",t),i.inline={index:t,group:o.cssRules[t+1],cache:new Set([5])}}if(q(i.inline),!i.allvar){const t=i.inline.index;o.insertRule("@media{}",t),o.insertRule("--sxs{--sxs:4}",t),i.allvar={index:t,group:o.cssRules[t+1],cache:new Set([4])}}if(q(i.allvar),!i.onevar){const t=i.allvar.index;o.insertRule("@media{}",t),o.insertRule("--sxs{--sxs:3}",t),i.onevar={index:t,group:o.cssRules[t+1],cache:new Set([3])}}if(q(i.onevar),!i.styled){const t=i.onevar.index;o.insertRule("@media{}",t),o.insertRule("--sxs{--sxs:2}",t),i.styled={index:t,group:o.cssRules[t+1],cache:new Set([2])}}if(q(i.styled),!i.global){const t=i.styled.index;o.insertRule("@media{}",t),o.insertRule("--sxs{--sxs:1}",t),i.global={index:t,group:o.cssRules[t+1],cache:new Set([1])}}if(q(i.global),!i.themed){const t=i.global.index;o.insertRule("@media{}",t),o.insertRule("--sxs{--sxs:0}",t),i.themed={index:t,group:o.cssRules[t+1],cache:new Set([0])}}q(i.themed)};return n(),e},q=t=>{const e=t.group;let n=e.cssRules.length;t.apply=t=>{try{e.insertRule(t,n),++n}catch{}}},X=l(),Y=l(),Z=t=>{const e=(t=>{let e=!1;const n=X(t,(t=>{e=!0;const n="prefix"in(t="object"==typeof t&&t||{})?String(t.prefix):"",r="object"==typeof t.media&&t.media||{},o="object"==typeof t.root?t.root||null:globalThis.document||null,i="object"==typeof t.theme&&t.theme||{},a={prefix:n,media:r,theme:i,themeMap:"object"==typeof t.themeMap&&t.themeMap||{...s},utils:"object"==typeof t.utils&&t.utils||{}},u=N(o),l={css:L(a,u),globalCss:z(a,u),keyframes:G(a,u),createTheme:_(a,u),reset(){u.reset(),l.theme.toString()},theme:{},sheet:u,config:a,prefix:n,getCssText:u.toString,toString:u.toString};return String(l.theme=l.createTheme(i)),l}));return e||n.reset(),n})(t);return e.styled=(({config:t,sheet:e})=>Y(t,(()=>{const n=L(t,e);return(...t)=>{const e=n(...t),o=e[c].type,i=r.forwardRef(((t,n)=>{const i=t&&t.as||o,a=e(t).props;return delete a.as,a.ref=n,r.createElement(i,a)}));return i.className=e.className,i.displayName=`Styled.${o.displayName||o.name||o}`,i.selector=e.selector,i.toString=()=>e.selector,i[c]=e[c],i}})))(e),e};function K(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function J(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){K(t,e,n[e])}))}return t}var Q=Z({theme:{colors:J({},{gray1:"hsl(0 0% 99.0%)",gray2:"hsl(0 0% 97.3%)",gray3:"hsl(0 0% 95.1%)",gray4:"hsl(0 0% 93.0%)",gray5:"hsl(0 0% 90.9%)",gray6:"hsl(0 0% 88.7%)",gray7:"hsl(0 0% 85.8%)",gray8:"hsl(0 0% 78.0%)",gray9:"hsl(0 0% 56.1%)",gray10:"hsl(0 0% 52.3%)",gray11:"hsl(0 0% 43.5%)",gray12:"hsl(0 0% 9.0%)"},{bg:"#FFF",lowContrast:"#FFFFFF",highContrast:"black"},{blue1:"hsl(206 100% 99.2%)",blue2:"hsl(210 100% 98.0%)",blue3:"hsl(209 100% 96.5%)",blue4:"hsl(210 98.8% 94.0%)",blue5:"hsl(209 95.0% 90.1%)",blue6:"hsl(209 81.2% 84.5%)",blue7:"hsl(208 77.5% 76.9%)",blue8:"hsl(206 81.9% 65.3%)",blue9:"hsl(206 100% 50.0%)",blue10:"hsl(208 100% 47.3%)",blue11:"hsl(211 100% 43.2%)",blue12:"hsl(211 100% 15.0%)"}),fonts:{sans:'"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',serif:"Lusitana, serif"},space:{1:"8px",2:"16px",3:"24px",4:"32px",5:"40px",6:"48px",7:"56px",8:"64px",9:"72px",10:"80px",11:"88px"},fontWeights:{400:400,500:500,600:600,700:700,800:800},lineHeights:{12:"12px",16:"16px",20:"20px",24:"24px",32:"32px",40:"40px",48:"48px",56:"56px"},fontSizes:{10:"10px",12:"12px",14:"14px",16:"16px",20:"20px",24:"24px",32:"32px",40:"40px",48:"48px"},radii:{1:"4px",2:"8px",3:"16px",round:"50%"},shadows:{small:"0 5px 10px rgba(0, 0, 0, 0.12)",medium:"0 8px 30px rgba(0, 0, 0, 0.12)",large:"0 30px 60px rgba(0, 0, 0, 0.12)"},transitions:{snappy:"cubic-bezier(.2, .8, .2, 1)"}},media:{mobile:"(max-width: 720px)",hover:"(any-hover: hover)"},utils:{m:function(t){return{margin:t}},mt:function(t){return{marginTop:t}},mr:function(t){return{marginRight:t}},mb:function(t){return{marginBottom:t}},ml:function(t){return{marginLeft:t}},mx:function(t){return{marginLeft:t,marginRight:t}},my:function(t){return{marginTop:t,marginBottom:t}},p:function(t){return{padding:t}},pt:function(t){return{paddingTop:t}},pr:function(t){return{paddingRight:t}},pb:function(t){return{paddingBottom:t}},pl:function(t){return{paddingLeft:t}},px:function(t){return{paddingLeft:t,paddingRight:t}},py:function(t){return{paddingTop:t,paddingBottom:t}},size:function(t){return{width:t,height:t}},ta:function(t){return{textAlign:t}},fd:function(t){return{flexDirection:t}},d:function(t){return{display:t}},fw:function(t){return{flexWrap:t}},ai:function(t){return{alignItems:t}},ac:function(t){return{alignContent:t}},jc:function(t){return{justifyContent:t}},as:function(t){return{alignSelf:t}},fg:function(t){return{flexGrow:t}},fs:function(t){return{flexShrink:t}},fb:function(t){return{flexBasis:t}},bc:function(t){return{backgroundColor:t}},br:function(t){return{borderRadius:t}},btrr:function(t){return{borderTopRightRadius:t}},bbrr:function(t){return{borderBottomRightRadius:t}},bblr:function(t){return{borderBottomLeftRadius:t}},btlr:function(t){return{borderTopLeftRadius:t}},bs:function(t){return{boxShadow:t}},lh:function(t){return{lineHeight:t}},ox:function(t){return{overflowX:t}},oy:function(t){return{overflowY:t}},truncate:function(){return{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}},us:function(t){return{WebkitUserSelect:t,userSelect:t}},center:function(){return{d:"flex",ai:"center",jc:"center"}},focus:function(){return{$$focusColor:"$colors$gray7","&:focus":{outline:0,boxShadow:"inset 0 0 0 2px $$focusColor"},"&:focus:not(:focus-visible)":{boxShadow:"none"}}},darkHeaderBlur:function(){return{backdropFilter:"blur(25px)",".dark-theme &":{bc:"rgb(22 22 22 / 90%)",border:"1px solid $gray4"}}},dottedBorderBottom:function(){return{borderBottom:"2px dotted $gray6",pb:"24px",mb:"24px"}}}}),tt=Q.styled,et=Q.css,nt=Q.globalCss,rt=(Q.getCssText,Q.createTheme),ot=Q.keyframes,it=(Q.config,Q.theme,rt("dark",{colors:J({},{gray1:"hsl(0 0% 8.5%)",gray2:"hsl(0 0% 11.0%)",gray3:"hsl(0 0% 13.6%)",gray4:"hsl(0 0% 15.8%)",gray5:"hsl(0 0% 17.9%)",gray6:"hsl(0 0% 20.5%)",gray7:"hsl(0 0% 24.3%)",gray8:"hsl(0 0% 31.2%)",gray9:"hsl(0 0% 43.9%)",gray10:"hsl(0 0% 49.4%)",gray11:"hsl(0 0% 62.8%)",gray12:"hsl(0 0% 93.0%)"},{blue1:"hsl(212 35.0% 9.2%)",blue2:"hsl(216 50.0% 11.8%)",blue3:"hsl(214 59.4% 15.3%)",blue4:"hsl(214 65.8% 17.9%)",blue5:"hsl(213 71.2% 20.2%)",blue6:"hsl(212 77.4% 23.1%)",blue7:"hsl(211 85.1% 27.4%)",blue8:"hsl(211 89.7% 34.1%)",blue9:"hsl(206 100% 50.0%)",blue10:"hsl(209 100% 60.6%)",blue11:"hsl(210 100% 66.1%)",blue12:"hsl(206 98.0% 95.8%)"},{bg:"#000",lowContrast:"black",highContrast:"white"})})),at=nt({"*, *::before, *::after":{boxSizing:"border-box",margin:0,"-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale"},body:{fontFamily:"$sans"},"::selection":{background:"$highContrast",color:"$lowContrast"},"input, background":{background:"none",border:0,margin:0,padding:0,fontFamily:"$sans"},strong:{fontWeight:"600",color:"$gray12"}})},5985:function(){},5809:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.imageConfigDefault=e.VALID_LOADERS=void 0;e.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];e.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},9008:function(t,e,n){t.exports=n(5443)},5675:function(t,e,n){t.exports=n(8045)},1664:function(t,e,n){t.exports=n(8418)},1163:function(t,e,n){t.exports=n(387)}},function(t){var e=function(e){return t(t.s=e)};t.O(0,[774,179],(function(){return e(6363),e(387)}));var n=t.O();_N_E=n}]);