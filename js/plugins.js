/*
1- PACE
https://github.com/HubSpot/PACE
js/plugins/pace/js/pace.min.js


2- animsition v4.0.2
https://github.com/blivesta/animsition
js/plugins/animsition/js/animsition.min.js

3- jquery-match-height 0.7.0
https://github.com/liabru/jquery-match-height
js/plugins/matchHeight/jquery.matchHeight-min.js
*/

// 1- PACE
(function () {
  var a,
    b,
    c,
    d,
    e,
    f,
    g,
    h,
    i,
    j,
    k,
    l,
    m,
    n,
    o,
    p,
    q,
    r,
    s,
    t,
    u,
    v,
    w,
    x,
    y,
    z,
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
    J,
    K,
    L,
    M,
    N,
    O,
    P,
    Q,
    R,
    S,
    T,
    U,
    V,
    W,
    X = [].slice,
    Y = {}.hasOwnProperty,
    Z = function (a, b) {
      function d() {
        this.constructor = a;
      }
      for (var c in b) Y.call(b, c) && (a[c] = b[c]);
      return (
        (d.prototype = b.prototype),
        (a.prototype = new d()),
        (a.__super__ = b.prototype),
        a
      );
    },
    $ =
      [].indexOf ||
      function (a) {
        for (var b = 0, c = this.length; b < c; b++)
          if (b in this && this[b] === a) return b;
        return -1;
      };
  for (
    u = {
      catchupTime: 100,
      initialRate: 0.03,
      minTime: 250,
      ghostTime: 100,
      maxProgressPerFrame: 20,
      easeFactor: 1.25,
      startOnPageLoad: !0,
      restartOnPushState: !0,
      restartOnRequestAfter: 500,
      target: "body",
      elements: { checkInterval: 100, selectors: ["body"] },
      eventLag: { minSamples: 10, sampleCount: 3, lagThreshold: 3 },
      ajax: { trackMethods: ["GET"], trackWebSockets: !0, ignoreURLs: [] },
    },
      C = function () {
        var a;
        return null !=
          (a =
            "undefined" != typeof performance &&
            null !== performance &&
            "function" == typeof performance.now
              ? performance.now()
              : void 0)
          ? a
          : +new Date();
      },
      E =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame,
      t = window.cancelAnimationFrame || window.mozCancelAnimationFrame,
      null == E &&
        ((E = function (a) {
          return setTimeout(a, 50);
        }),
        (t = function (a) {
          return clearTimeout(a);
        })),
      G = function (a) {
        var b, c;
        return (
          (b = C()),
          (c = function () {
            var d;
            return (
              (d = C() - b),
              d >= 33
                ? ((b = C()),
                  a(d, function () {
                    return E(c);
                  }))
                : setTimeout(c, 33 - d)
            );
          })()
        );
      },
      F = function () {
        var a, b, c;
        return (
          (c = arguments[0]),
          (b = arguments[1]),
          (a = 3 <= arguments.length ? X.call(arguments, 2) : []),
          "function" == typeof c[b] ? c[b].apply(c, a) : c[b]
        );
      },
      v = function () {
        var a, b, c, d, e, f, g;
        for (
          b = arguments[0],
            d = 2 <= arguments.length ? X.call(arguments, 1) : [],
            f = 0,
            g = d.length;
          f < g;
          f++
        )
          if ((c = d[f]))
            for (a in c)
              Y.call(c, a) &&
                ((e = c[a]),
                null != b[a] &&
                "object" == typeof b[a] &&
                null != e &&
                "object" == typeof e
                  ? v(b[a], e)
                  : (b[a] = e));
        return b;
      },
      q = function (a) {
        var b, c, d, e, f;
        for (c = b = 0, e = 0, f = a.length; e < f; e++)
          (d = a[e]), (c += Math.abs(d)), b++;
        return c / b;
      },
      x = function (a, b) {
        var c, d, e;
        if (
          (null == a && (a = "options"),
          null == b && (b = !0),
          (e = document.querySelector("[data-pace-" + a + "]")))
        ) {
          if (((c = e.getAttribute("data-pace-" + a)), !b)) return c;
          try {
            return JSON.parse(c);
          } catch (a) {
            return (
              (d = a),
              "undefined" != typeof console && null !== console
                ? console.error("Error parsing inline pace options", d)
                : void 0
            );
          }
        }
      },
      g = (function () {
        function a() {}
        return (
          (a.prototype.on = function (a, b, c, d) {
            var e;
            return (
              null == d && (d = !1),
              null == this.bindings && (this.bindings = {}),
              null == (e = this.bindings)[a] && (e[a] = []),
              this.bindings[a].push({ handler: b, ctx: c, once: d })
            );
          }),
          (a.prototype.once = function (a, b, c) {
            return this.on(a, b, c, !0);
          }),
          (a.prototype.off = function (a, b) {
            var c, d, e;
            if (null != (null != (d = this.bindings) ? d[a] : void 0)) {
              if (null == b) return delete this.bindings[a];
              for (c = 0, e = []; c < this.bindings[a].length; )
                this.bindings[a][c].handler === b
                  ? e.push(this.bindings[a].splice(c, 1))
                  : e.push(c++);
              return e;
            }
          }),
          (a.prototype.trigger = function () {
            var a, b, c, d, e, f, g, h, i;
            if (
              ((c = arguments[0]),
              (a = 2 <= arguments.length ? X.call(arguments, 1) : []),
              null != (g = this.bindings) ? g[c] : void 0)
            ) {
              for (e = 0, i = []; e < this.bindings[c].length; )
                (h = this.bindings[c][e]),
                  (d = h.handler),
                  (b = h.ctx),
                  (f = h.once),
                  d.apply(null != b ? b : this, a),
                  f ? i.push(this.bindings[c].splice(e, 1)) : i.push(e++);
              return i;
            }
          }),
          a
        );
      })(),
      j = window.Pace || {},
      window.Pace = j,
      v(j, g.prototype),
      D = j.options = v({}, u, window.paceOptions, x()),
      U = ["ajax", "document", "eventLag", "elements"],
      Q = 0,
      S = U.length;
    Q < S;
    Q++
  )
    (K = U[Q]), D[K] === !0 && (D[K] = u[K]);
  (i = (function (a) {
    function b() {
      return (V = b.__super__.constructor.apply(this, arguments));
    }
    return Z(b, a), b;
  })(Error)),
    (b = (function () {
      function a() {
        this.progress = 0;
      }
      return (
        (a.prototype.getElement = function () {
          var a;
          if (null == this.el) {
            if (((a = document.querySelector(D.target)), !a)) throw new i();
            (this.el = document.createElement("div")),
              (this.el.className = "pace pace-active"),
              (document.body.className = document.body.className.replace(
                /pace-done/g,
                ""
              )),
              (document.body.className += " pace-running"),
              (this.el.innerHTML =
                '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>\n<div class="pace-preloader-text-percent"><div class="gfort-page-preloader-container"><div class="gfort-page-preloader-divs-container"><div class="gfort-page-preloader-1"></div><div class="gfort-page-preloader-2"></div><div class="gfort-page-preloader-3"></div><div class="gfort-page-preloader-4"></div><div class="gfort-page-preloader-5"></div></div><div class="gfort-page-preloader-text"></div></div></div>'),
              null != a.firstChild
                ? a.insertBefore(this.el, a.firstChild)
                : a.appendChild(this.el);
          }
          return this.el;
        }),
        (a.prototype.finish = function () {
          var a;
          return (
            (a = this.getElement()),
            (a.className = a.className.replace("pace-active", "")),
            (a.className += " pace-inactive"),
            (document.body.className = document.body.className.replace(
              "pace-running",
              ""
            )),
            (document.body.className += " pace-done")
          );
        }),
        (a.prototype.update = function (a) {
          return (this.progress = a), this.render();
        }),
        (a.prototype.destroy = function () {
          try {
            this.getElement().parentNode.removeChild(this.getElement());
          } catch (a) {
            i = a;
          }
          return (this.el = void 0);
        }),
        (a.prototype.render = function () {
          var a, b, c, d, e, f, g;
          if (null == document.querySelector(D.target)) return !1;
          for (
            a = this.getElement(),
              d = "translate3d(" + this.progress + "%, 0, 0)",
              g = ["webkitTransform", "msTransform", "transform"],
              e = 0,
              f = g.length;
            e < f;
            e++
          )
            (b = g[e]), (a.children[0].style[b] = d);
          return (
            (!this.lastRenderedProgress ||
              this.lastRenderedProgress | (0 !== this.progress) | 0) &&
              (a.children[0].setAttribute(
                "data-progress-text",
                "" + (0 | this.progress) + "%"
              ),
              a.children[2].setAttribute(
                "data-progress-text",
                "" + (0 | this.progress) + "%"
              ),
              this.progress >= 100
                ? (c = "99")
                : ((c = this.progress < 10 ? "0" : ""),
                  (c += 0 | this.progress)),
              a.children[0].setAttribute("data-progress", "" + c)),
            (this.lastRenderedProgress = this.progress)
          );
        }),
        (a.prototype.done = function () {
          return this.progress >= 100;
        }),
        a
      );
    })()),
    (h = (function () {
      function a() {
        this.bindings = {};
      }
      return (
        (a.prototype.trigger = function (a, b) {
          var c, d, e, f, g;
          if (null != this.bindings[a]) {
            for (f = this.bindings[a], g = [], d = 0, e = f.length; d < e; d++)
              (c = f[d]), g.push(c.call(this, b));
            return g;
          }
        }),
        (a.prototype.on = function (a, b) {
          var c;
          return (
            null == (c = this.bindings)[a] && (c[a] = []),
            this.bindings[a].push(b)
          );
        }),
        a
      );
    })()),
    (P = window.XMLHttpRequest),
    (O = window.XDomainRequest),
    (N = window.WebSocket),
    (w = function (a, b) {
      var c, d, e;
      e = [];
      for (d in b.prototype)
        try {
          null == a[d] && "function" != typeof b[d]
            ? "function" == typeof Object.defineProperty
              ? e.push(
                  Object.defineProperty(a, d, {
                    get: function () {
                      return b.prototype[d];
                    },
                    configurable: !0,
                    enumerable: !0,
                  })
                )
              : e.push((a[d] = b.prototype[d]))
            : e.push(void 0);
        } catch (a) {
          c = a;
        }
      return e;
    }),
    (A = []),
    (j.ignore = function () {
      var a, b, c;
      return (
        (b = arguments[0]),
        (a = 2 <= arguments.length ? X.call(arguments, 1) : []),
        A.unshift("ignore"),
        (c = b.apply(null, a)),
        A.shift(),
        c
      );
    }),
    (j.track = function () {
      var a, b, c;
      return (
        (b = arguments[0]),
        (a = 2 <= arguments.length ? X.call(arguments, 1) : []),
        A.unshift("track"),
        (c = b.apply(null, a)),
        A.shift(),
        c
      );
    }),
    (J = function (a) {
      var b;
      if ((null == a && (a = "GET"), "track" === A[0])) return "force";
      if (!A.length && D.ajax) {
        if ("socket" === a && D.ajax.trackWebSockets) return !0;
        if (((b = a.toUpperCase()), $.call(D.ajax.trackMethods, b) >= 0))
          return !0;
      }
      return !1;
    }),
    (k = (function (a) {
      function b() {
        var a,
          c = this;
        b.__super__.constructor.apply(this, arguments),
          (a = function (a) {
            var b;
            return (
              (b = a.open),
              (a.open = function (d, e, f) {
                return (
                  J(d) && c.trigger("request", { type: d, url: e, request: a }),
                  b.apply(a, arguments)
                );
              })
            );
          }),
          (window.XMLHttpRequest = function (b) {
            var c;
            return (c = new P(b)), a(c), c;
          });
        try {
          w(window.XMLHttpRequest, P);
        } catch (a) {}
        if (null != O) {
          window.XDomainRequest = function () {
            var b;
            return (b = new O()), a(b), b;
          };
          try {
            w(window.XDomainRequest, O);
          } catch (a) {}
        }
        if (null != N && D.ajax.trackWebSockets) {
          window.WebSocket = function (a, b) {
            var d;
            return (
              (d = null != b ? new N(a, b) : new N(a)),
              J("socket") &&
                c.trigger("request", {
                  type: "socket",
                  url: a,
                  protocols: b,
                  request: d,
                }),
              d
            );
          };
          try {
            w(window.WebSocket, N);
          } catch (a) {}
        }
      }
      return Z(b, a), b;
    })(h)),
    (R = null),
    (y = function () {
      return null == R && (R = new k()), R;
    }),
    (I = function (a) {
      var b, c, d, e;
      for (e = D.ajax.ignoreURLs, c = 0, d = e.length; c < d; c++)
        if (((b = e[c]), "string" == typeof b)) {
          if (a.indexOf(b) !== -1) return !0;
        } else if (b.test(a)) return !0;
      return !1;
    }),
    y().on("request", function (b) {
      var c, d, e, f, g;
      if (((f = b.type), (e = b.request), (g = b.url), !I(g)))
        return j.running || (D.restartOnRequestAfter === !1 && "force" !== J(f))
          ? void 0
          : ((d = arguments),
            (c = D.restartOnRequestAfter || 0),
            "boolean" == typeof c && (c = 0),
            setTimeout(function () {
              var b, c, g, h, i, k;
              if (
                (b =
                  "socket" === f
                    ? e.readyState < 2
                    : 0 < (h = e.readyState) && h < 4)
              ) {
                for (
                  j.restart(), i = j.sources, k = [], c = 0, g = i.length;
                  c < g;
                  c++
                ) {
                  if (((K = i[c]), K instanceof a)) {
                    K.watch.apply(K, d);
                    break;
                  }
                  k.push(void 0);
                }
                return k;
              }
            }, c));
    }),
    (a = (function () {
      function a() {
        var a = this;
        (this.elements = []),
          y().on("request", function () {
            return a.watch.apply(a, arguments);
          });
      }
      return (
        (a.prototype.watch = function (a) {
          var b, c, d, e;
          if (((d = a.type), (b = a.request), (e = a.url), !I(e)))
            return (
              (c = "socket" === d ? new n(b) : new o(b)), this.elements.push(c)
            );
        }),
        a
      );
    })()),
    (o = (function () {
      function a(a) {
        var b,
          c,
          d,
          e,
          f,
          g,
          h = this;
        if (((this.progress = 0), null != window.ProgressEvent))
          for (
            c = null,
              a.addEventListener(
                "progress",
                function (a) {
                  return a.lengthComputable
                    ? (h.progress = (100 * a.loaded) / a.total)
                    : (h.progress = h.progress + (100 - h.progress) / 2);
                },
                !1
              ),
              g = ["load", "abort", "timeout", "error"],
              d = 0,
              e = g.length;
            d < e;
            d++
          )
            (b = g[d]),
              a.addEventListener(
                b,
                function () {
                  return (h.progress = 100);
                },
                !1
              );
        else
          (f = a.onreadystatechange),
            (a.onreadystatechange = function () {
              var b;
              return (
                0 === (b = a.readyState) || 4 === b
                  ? (h.progress = 100)
                  : 3 === a.readyState && (h.progress = 50),
                "function" == typeof f ? f.apply(null, arguments) : void 0
              );
            });
      }
      return a;
    })()),
    (n = (function () {
      function a(a) {
        var b,
          c,
          d,
          e,
          f = this;
        for (
          this.progress = 0, e = ["error", "open"], c = 0, d = e.length;
          c < d;
          c++
        )
          (b = e[c]),
            a.addEventListener(
              b,
              function () {
                return (f.progress = 100);
              },
              !1
            );
      }
      return a;
    })()),
    (d = (function () {
      function a(a) {
        var b, c, d, f;
        for (
          null == a && (a = {}),
            this.elements = [],
            null == a.selectors && (a.selectors = []),
            f = a.selectors,
            c = 0,
            d = f.length;
          c < d;
          c++
        )
          (b = f[c]), this.elements.push(new e(b));
      }
      return a;
    })()),
    (e = (function () {
      function a(a) {
        (this.selector = a), (this.progress = 0), this.check();
      }
      return (
        (a.prototype.check = function () {
          var a = this;
          return document.querySelector(this.selector)
            ? this.done()
            : setTimeout(function () {
                return a.check();
              }, D.elements.checkInterval);
        }),
        (a.prototype.done = function () {
          return (this.progress = 100);
        }),
        a
      );
    })()),
    (c = (function () {
      function a() {
        var a,
          b,
          c = this;
        (this.progress =
          null != (b = this.states[document.readyState]) ? b : 100),
          (a = document.onreadystatechange),
          (document.onreadystatechange = function () {
            return (
              null != c.states[document.readyState] &&
                (c.progress = c.states[document.readyState]),
              "function" == typeof a ? a.apply(null, arguments) : void 0
            );
          });
      }
      return (
        (a.prototype.states = { loading: 0, interactive: 50, complete: 100 }), a
      );
    })()),
    (f = (function () {
      function a() {
        var a,
          b,
          c,
          d,
          e,
          f = this;
        (this.progress = 0),
          (a = 0),
          (e = []),
          (d = 0),
          (c = C()),
          (b = setInterval(function () {
            var g;
            return (
              (g = C() - c - 50),
              (c = C()),
              e.push(g),
              e.length > D.eventLag.sampleCount && e.shift(),
              (a = q(e)),
              ++d >= D.eventLag.minSamples && a < D.eventLag.lagThreshold
                ? ((f.progress = 100), clearInterval(b))
                : (f.progress = 100 * (3 / (a + 3)))
            );
          }, 50));
      }
      return a;
    })()),
    (m = (function () {
      function a(a) {
        (this.source = a),
          (this.last = this.sinceLastUpdate = 0),
          (this.rate = D.initialRate),
          (this.catchup = 0),
          (this.progress = this.lastProgress = 0),
          null != this.source && (this.progress = F(this.source, "progress"));
      }
      return (
        (a.prototype.tick = function (a, b) {
          var c;
          return (
            null == b && (b = F(this.source, "progress")),
            b >= 100 && (this.done = !0),
            b === this.last
              ? (this.sinceLastUpdate += a)
              : (this.sinceLastUpdate &&
                  (this.rate = (b - this.last) / this.sinceLastUpdate),
                (this.catchup = (b - this.progress) / D.catchupTime),
                (this.sinceLastUpdate = 0),
                (this.last = b)),
            b > this.progress && (this.progress += this.catchup * a),
            (c = 1 - Math.pow(this.progress / 100, D.easeFactor)),
            (this.progress += c * this.rate * a),
            (this.progress = Math.min(
              this.lastProgress + D.maxProgressPerFrame,
              this.progress
            )),
            (this.progress = Math.max(0, this.progress)),
            (this.progress = Math.min(100, this.progress)),
            (this.lastProgress = this.progress),
            this.progress
          );
        }),
        a
      );
    })()),
    (L = null),
    (H = null),
    (r = null),
    (M = null),
    (p = null),
    (s = null),
    (j.running = !1),
    (z = function () {
      if (D.restartOnPushState) return j.restart();
    }),
    null != window.history.pushState &&
      ((T = window.history.pushState),
      (window.history.pushState = function () {
        return z(), T.apply(window.history, arguments);
      })),
    null != window.history.replaceState &&
      ((W = window.history.replaceState),
      (window.history.replaceState = function () {
        return z(), W.apply(window.history, arguments);
      })),
    (l = { ajax: a, elements: d, document: c, eventLag: f }),
    (B = function () {
      var a, c, d, e, f, g, h, i;
      for (
        j.sources = L = [],
          g = ["ajax", "elements", "document", "eventLag"],
          c = 0,
          e = g.length;
        c < e;
        c++
      )
        (a = g[c]), D[a] !== !1 && L.push(new l[a](D[a]));
      for (
        i = null != (h = D.extraSources) ? h : [], d = 0, f = i.length;
        d < f;
        d++
      )
        (K = i[d]), L.push(new K(D));
      return (j.bar = r = new b()), (H = []), (M = new m());
    })(),
    (j.stop = function () {
      return (
        j.trigger("stop"),
        (j.running = !1),
        r.destroy(),
        (s = !0),
        null != p && ("function" == typeof t && t(p), (p = null)),
        B()
      );
    }),
    (j.restart = function () {
      return j.trigger("restart"), j.stop(), j.start();
    }),
    (j.go = function () {
      var a;
      return (
        (j.running = !0),
        r.render(),
        (a = C()),
        (s = !1),
        (p = G(function (b, c) {
          var d, e, f, g, h, i, k, l, n, o, p, q, t, u, v, w;
          for (
            l = 100 - r.progress, e = p = 0, f = !0, i = q = 0, u = L.length;
            q < u;
            i = ++q
          )
            for (
              K = L[i],
                o = null != H[i] ? H[i] : (H[i] = []),
                h = null != (w = K.elements) ? w : [K],
                k = t = 0,
                v = h.length;
              t < v;
              k = ++t
            )
              (g = h[k]),
                (n = null != o[k] ? o[k] : (o[k] = new m(g))),
                (f &= n.done),
                n.done || (e++, (p += n.tick(b)));
          return (
            (d = p / e),
            r.update(M.tick(b, d)),
            r.done() || f || s
              ? (r.update(100),
                j.trigger("done"),
                setTimeout(function () {
                  return r.finish(), (j.running = !1), j.trigger("hide");
                }, Math.max(D.ghostTime, Math.max(D.minTime - (C() - a), 0))))
              : c()
          );
        }))
      );
    }),
    (j.start = function (a) {
      v(D, a), (j.running = !0);
      try {
        r.render();
      } catch (a) {
        i = a;
      }
      return document.querySelector(".pace")
        ? (j.trigger("start"), j.go())
        : setTimeout(j.start, 50);
    }),
    "function" == typeof define && define.amd
      ? define(["pace"], function () {
          return j;
        })
      : "object" == typeof exports
      ? (module.exports = j)
      : D.startOnPageLoad && j.start();
}).call(this);

// 2- animsition v4.0.2
!(function (t) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], t)
    : "object" == typeof exports
    ? (module.exports = t(require("jquery")))
    : t(jQuery);
})(function (t) {
  "use strict";
  var n = "animsition",
    i = {
      init: function (a) {
        (a = t.extend(
          {
            inClass: "fade-in",
            outClass: "fade-out",
            inDuration: 1500,
            outDuration: 800,
            linkElement: ".animsition-link",
            loading: !0,
            loadingParentElement: "body",
            loadingClass: "animsition-loading",
            loadingInner: "",
            timeout: !1,
            timeoutCountdown: 5e3,
            onLoadEvent: !0,
            browser: ["animation-duration", "-webkit-animation-duration"],
            overlay: !1,
            overlayClass: "animsition-overlay-slide",
            overlayParentElement: "body",
            transition: function (t) {
              window.location.href = t;
            },
          },
          a
        )),
          (i.settings = {
            timer: !1,
            data: {
              inClass: "animsition-in-class",
              inDuration: "animsition-in-duration",
              outClass: "animsition-out-class",
              outDuration: "animsition-out-duration",
              overlay: "animsition-overlay",
            },
            events: {
              inStart: "animsition.inStart",
              inEnd: "animsition.inEnd",
              outStart: "animsition.outStart",
              outEnd: "animsition.outEnd",
            },
          });
        var o = i.supportCheck.call(this, a);
        if (!o && a.browser.length > 0 && (!o || !this.length))
          return (
            "console" in window ||
              ((window.console = {}),
              (window.console.log = function (t) {
                return t;
              })),
            this.length ||
              console.log("Animsition: Element does not exist on page."),
            o || console.log("Animsition: Does not support this browser."),
            i.destroy.call(this)
          );
        var e = i.optionCheck.call(this, a);
        return (
          e &&
            t("." + a.overlayClass).length <= 0 &&
            i.addOverlay.call(this, a),
          a.loading &&
            t("." + a.loadingClass).length <= 0 &&
            i.addLoading.call(this, a),
          this.each(function () {
            var o = this,
              e = t(this),
              s = t(window),
              r = t(document),
              l = e.data(n);
            l ||
              ((a = t.extend({}, a)),
              e.data(n, { options: a }),
              a.timeout && i.addTimer.call(o),
              a.onLoadEvent &&
                s.on("load." + n, function () {
                  i.settings.timer && clearTimeout(i.settings.timer),
                    i["in"].call(o);
                }),
              s.on("pageshow." + n, function (t) {
                t.originalEvent.persisted && i["in"].call(o);
              }),
              s.on("unload." + n, function () {}),
              r.on("click." + n, a.linkElement, function (n) {
                n.preventDefault();
                var a = t(this),
                  e = a.attr("href");
                2 === n.which ||
                n.metaKey ||
                n.shiftKey ||
                (-1 !== navigator.platform.toUpperCase().indexOf("WIN") &&
                  n.ctrlKey)
                  ? window.open(e, "_blank")
                  : i.out.call(o, a, e);
              }));
          })
        );
      },
      addOverlay: function (n) {
        t(n.overlayParentElement).prepend(
          '<div class="' + n.overlayClass + '"></div>'
        );
      },
      addLoading: function (n) {
        t(n.loadingParentElement).append(
          '<div class="' + n.loadingClass + '">' + n.loadingInner + "</div>"
        );
      },
      removeLoading: function () {
        var i = t(this),
          a = i.data(n).options,
          o = t(a.loadingParentElement).children("." + a.loadingClass);
        o.fadeOut().remove();
      },
      addTimer: function () {
        var a = this,
          o = t(this),
          e = o.data(n).options;
        i.settings.timer = setTimeout(function () {
          i["in"].call(a), t(window).off("load." + n);
        }, e.timeoutCountdown);
      },
      supportCheck: function (n) {
        var i = t(this),
          a = n.browser,
          o = a.length,
          e = !1;
        0 === o && (e = !0);
        for (var s = 0; o > s; s++)
          if ("string" == typeof i.css(a[s])) {
            e = !0;
            break;
          }
        return e;
      },
      optionCheck: function (n) {
        var a,
          o = t(this);
        return (a = n.overlay || o.data(i.settings.data.overlay) ? !0 : !1);
      },
      animationCheck: function (i, a, o) {
        var e = t(this),
          s = e.data(n).options,
          r = typeof i,
          l = !a && "number" === r,
          d = a && "string" === r && i.length > 0;
        return (
          l || d
            ? (i = i)
            : a && o
            ? (i = s.inClass)
            : !a && o
            ? (i = s.inDuration)
            : a && !o
            ? (i = s.outClass)
            : a || o || (i = s.outDuration),
          i
        );
      },
      in: function () {
        var a = this,
          o = t(this),
          e = o.data(n).options,
          s = o.data(i.settings.data.inDuration),
          r = o.data(i.settings.data.inClass),
          l = i.animationCheck.call(a, s, !1, !0),
          d = i.animationCheck.call(a, r, !0, !0),
          u = i.optionCheck.call(a, e),
          c = o.data(n).outClass;
        e.loading && i.removeLoading.call(a),
          c && o.removeClass(c),
          u ? i.inOverlay.call(a, d, l) : i.inDefault.call(a, d, l);
      },
      inDefault: function (n, a) {
        var o = t(this);
        o.css({ "animation-duration": a + "ms" })
          .addClass(n)
          .trigger(i.settings.events.inStart)
          .animateCallback(function () {
            o.removeClass(n)
              .css({ opacity: 1 })
              .trigger(i.settings.events.inEnd);
          });
      },
      inOverlay: function (a, o) {
        var e = t(this),
          s = e.data(n).options;
        e.css({ opacity: 1 }).trigger(i.settings.events.inStart),
          t(s.overlayParentElement)
            .children("." + s.overlayClass)
            .css({ "animation-duration": o + "ms" })
            .addClass(a)
            .animateCallback(function () {
              e.trigger(i.settings.events.inEnd);
            });
      },
      out: function (a, o) {
        var e = this,
          s = t(this),
          r = s.data(n).options,
          l = a.data(i.settings.data.outClass),
          d = s.data(i.settings.data.outClass),
          u = a.data(i.settings.data.outDuration),
          c = s.data(i.settings.data.outDuration),
          m = l ? l : d,
          g = u ? u : c,
          f = i.animationCheck.call(e, m, !0, !1),
          v = i.animationCheck.call(e, g, !1, !1),
          h = i.optionCheck.call(e, r);
        (s.data(n).outClass = f),
          h ? i.outOverlay.call(e, f, v, o) : i.outDefault.call(e, f, v, o);
      },
      outDefault: function (a, o, e) {
        var s = t(this),
          r = s.data(n).options;
        s.css({ "animation-duration": o + 1 + "ms" })
          .addClass(a)
          .trigger(i.settings.events.outStart)
          .animateCallback(function () {
            s.trigger(i.settings.events.outEnd), r.transition(e);
          });
      },
      outOverlay: function (a, o, e) {
        var s = this,
          r = t(this),
          l = r.data(n).options,
          d = r.data(i.settings.data.inClass),
          u = i.animationCheck.call(s, d, !0, !0);
        t(l.overlayParentElement)
          .children("." + l.overlayClass)
          .css({ "animation-duration": o + 1 + "ms" })
          .removeClass(u)
          .addClass(a)
          .trigger(i.settings.events.outStart)
          .animateCallback(function () {
            r.trigger(i.settings.events.outEnd), l.transition(e);
          });
      },
      destroy: function () {
        return this.each(function () {
          var i = t(this);
          t(window).off("." + n), i.css({ opacity: 1 }).removeData(n);
        });
      },
    };
  (t.fn.animateCallback = function (n) {
    var i = "animationend webkitAnimationEnd";
    return this.each(function () {
      var a = t(this);
      a.on(i, function () {
        return a.off(i), n.call(this);
      });
    });
  }),
    (t.fn.animsition = function (a) {
      return i[a]
        ? i[a].apply(this, Array.prototype.slice.call(arguments, 1))
        : "object" != typeof a && a
        ? void t.error("Method " + a + " does not exist on jQuery." + n)
        : i.init.apply(this, arguments);
    });
});

// 3- jquery-match-height 0.7.0
!(function (t) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], t)
    : "undefined" != typeof module && module.exports
    ? (module.exports = t(require("jquery")))
    : t(jQuery);
})(function (t) {
  var e = -1,
    o = -1,
    i = function (t) {
      return parseFloat(t) || 0;
    },
    a = function (e) {
      var o = 1,
        a = t(e),
        n = null,
        r = [];
      return (
        a.each(function () {
          var e = t(this),
            a = e.offset().top - i(e.css("margin-top")),
            s = r.length > 0 ? r[r.length - 1] : null;
          null === s
            ? r.push(e)
            : Math.floor(Math.abs(n - a)) <= o
            ? (r[r.length - 1] = s.add(e))
            : r.push(e),
            (n = a);
        }),
        r
      );
    },
    n = function (e) {
      var o = {
        byRow: !0,
        property: "height",
        target: null,
        remove: !1,
      };
      return "object" == typeof e
        ? t.extend(o, e)
        : ("boolean" == typeof e
            ? (o.byRow = e)
            : "remove" === e && (o.remove = !0),
          o);
    },
    r = (t.fn.matchHeight = function (e) {
      var o = n(e);
      if (o.remove) {
        var i = this;
        return (
          this.css(o.property, ""),
          t.each(r._groups, function (t, e) {
            e.elements = e.elements.not(i);
          }),
          this
        );
      }
      return this.length <= 1 && !o.target
        ? this
        : (r._groups.push({ elements: this, options: o }),
          r._apply(this, o),
          this);
    });
  (r.version = "0.7.0"),
    (r._groups = []),
    (r._throttle = 80),
    (r._maintainScroll = !1),
    (r._beforeUpdate = null),
    (r._afterUpdate = null),
    (r._rows = a),
    (r._parse = i),
    (r._parseOptions = n),
    (r._apply = function (e, o) {
      var s = n(o),
        h = t(e),
        l = [h],
        c = t(window).scrollTop(),
        p = t("html").outerHeight(!0),
        d = h.parents().filter(":hidden");
      return (
        d.each(function () {
          var e = t(this);
          e.data("style-cache", e.attr("style"));
        }),
        d.css("display", "block"),
        s.byRow &&
          !s.target &&
          (h.each(function () {
            var e = t(this),
              o = e.css("display");
            "inline-block" !== o &&
              "flex" !== o &&
              "inline-flex" !== o &&
              (o = "block"),
              e.data("style-cache", e.attr("style")),
              e.css({
                display: o,
                "padding-top": "0",
                "padding-bottom": "0",
                "margin-top": "0",
                "margin-bottom": "0",
                "border-top-width": "0",
                "border-bottom-width": "0",
                height: "100px",
                overflow: "hidden",
              });
          }),
          (l = a(h)),
          h.each(function () {
            var e = t(this);
            e.attr("style", e.data("style-cache") || "");
          })),
        t.each(l, function (e, o) {
          var a = t(o),
            n = 0;
          if (s.target) n = s.target.outerHeight(!1);
          else {
            if (s.byRow && a.length <= 1) return void a.css(s.property, "");
            a.each(function () {
              var e = t(this),
                o = e.attr("style"),
                i = e.css("display");
              "inline-block" !== i &&
                "flex" !== i &&
                "inline-flex" !== i &&
                (i = "block");
              var a = {
                display: i,
              };
              (a[s.property] = ""),
                e.css(a),
                e.outerHeight(!1) > n && (n = e.outerHeight(!1)),
                o ? e.attr("style", o) : e.css("display", "");
            });
          }
          a.each(function () {
            var e = t(this),
              o = 0;
            (s.target && e.is(s.target)) ||
              ("border-box" !== e.css("box-sizing") &&
                ((o +=
                  i(e.css("border-top-width")) +
                  i(e.css("border-bottom-width"))),
                (o += i(e.css("padding-top")) + i(e.css("padding-bottom")))),
              e.css(s.property, n - o + "px"));
          });
        }),
        d.each(function () {
          var e = t(this);
          e.attr("style", e.data("style-cache") || null);
        }),
        r._maintainScroll &&
          t(window).scrollTop((c / p) * t("html").outerHeight(!0)),
        this
      );
    }),
    (r._applyDataApi = function () {
      var e = {};
      t("[data-match-height], [data-mh]").each(function () {
        var o = t(this),
          i = o.attr("data-mh") || o.attr("data-match-height");
        i in e ? (e[i] = e[i].add(o)) : (e[i] = o);
      }),
        t.each(e, function () {
          this.matchHeight(!0);
        });
    });
  var s = function (e) {
    r._beforeUpdate && r._beforeUpdate(e, r._groups),
      t.each(r._groups, function () {
        r._apply(this.elements, this.options);
      }),
      r._afterUpdate && r._afterUpdate(e, r._groups);
  };
  (r._update = function (i, a) {
    if (a && "resize" === a.type) {
      var n = t(window).width();
      if (n === e) return;
      e = n;
    }
    i
      ? -1 === o &&
        (o = setTimeout(function () {
          s(a), (o = -1);
        }, r._throttle))
      : s(a);
  }),
    t(r._applyDataApi),
    t(window).bind("load", function (t) {
      r._update(!1, t);
    }),
    t(window).bind("resize orientationchange", function (t) {
      r._update(!0, t);
    });
});
