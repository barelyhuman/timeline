var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// node_modules/preact/dist/preact.module.js
function h(n2, l2) {
  for (var u2 in l2)
    n2[u2] = l2[u2];
  return n2;
}
function v(n2) {
  var l2 = n2.parentNode;
  l2 && l2.removeChild(n2);
}
function y(l2, u2, i2) {
  var t2, r2, o3, f2 = {};
  for (o3 in u2)
    "key" == o3 ? t2 = u2[o3] : "ref" == o3 ? r2 = u2[o3] : f2[o3] = u2[o3];
  if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n.call(arguments, 2) : i2), "function" == typeof l2 && null != l2.defaultProps)
    for (o3 in l2.defaultProps)
      void 0 === f2[o3] && (f2[o3] = l2.defaultProps[o3]);
  return p(l2, f2, t2, r2, null);
}
function p(n2, i2, t2, r2, o3) {
  var f2 = { type: n2, props: i2, key: t2, ref: r2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == o3 ? ++u : o3 };
  return null == o3 && null != l.vnode && l.vnode(f2), f2;
}
function _(n2) {
  return n2.children;
}
function k(n2, l2) {
  this.props = n2, this.context = l2;
}
function b(n2, l2) {
  if (null == l2)
    return n2.__ ? b(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++)
    if (null != (u2 = n2.__k[l2]) && null != u2.__e)
      return u2.__e;
  return "function" == typeof n2.type ? b(n2) : null;
}
function g(n2) {
  var l2, u2;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
      if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
        n2.__e = n2.__c.base = u2.__e;
        break;
      }
    return g(n2);
  }
}
function m(n2) {
  (!n2.__d && (n2.__d = true) && t.push(n2) && !w.__r++ || r !== l.debounceRendering) && ((r = l.debounceRendering) || o)(w);
}
function w() {
  var n2, l2, u2, i2, r2, o3, e2, c2;
  for (t.sort(f); n2 = t.shift(); )
    n2.__d && (l2 = t.length, i2 = void 0, r2 = void 0, e2 = (o3 = (u2 = n2).__v).__e, (c2 = u2.__P) && (i2 = [], (r2 = h({}, o3)).__v = o3.__v + 1, L(c2, o3, r2, u2.__n, void 0 !== c2.ownerSVGElement, null != o3.__h ? [e2] : null, i2, null == e2 ? b(o3) : e2, o3.__h), M(i2, o3), o3.__e != e2 && g(o3)), t.length > l2 && t.sort(f));
  w.__r = 0;
}
function x(n2, l2, u2, i2, t2, r2, o3, f2, e2, a2) {
  var h2, v2, y2, d, k2, g2, m2, w2 = i2 && i2.__k || s, x2 = w2.length;
  for (u2.__k = [], h2 = 0; h2 < l2.length; h2++)
    if (null != (d = u2.__k[h2] = null == (d = l2[h2]) || "boolean" == typeof d || "function" == typeof d ? null : "string" == typeof d || "number" == typeof d || "bigint" == typeof d ? p(null, d, null, null, d) : Array.isArray(d) ? p(_, { children: d }, null, null, null) : d.__b > 0 ? p(d.type, d.props, d.key, d.ref ? d.ref : null, d.__v) : d)) {
      if (d.__ = u2, d.__b = u2.__b + 1, null === (y2 = w2[h2]) || y2 && d.key == y2.key && d.type === y2.type)
        w2[h2] = void 0;
      else
        for (v2 = 0; v2 < x2; v2++) {
          if ((y2 = w2[v2]) && d.key == y2.key && d.type === y2.type) {
            w2[v2] = void 0;
            break;
          }
          y2 = null;
        }
      L(n2, d, y2 = y2 || c, t2, r2, o3, f2, e2, a2), k2 = d.__e, (v2 = d.ref) && y2.ref != v2 && (m2 || (m2 = []), y2.ref && m2.push(y2.ref, null, d), m2.push(v2, d.__c || k2, d)), null != k2 ? (null == g2 && (g2 = k2), "function" == typeof d.type && d.__k === y2.__k ? d.__d = e2 = A(d, e2, n2) : e2 = C(n2, d, y2, w2, k2, e2), "function" == typeof u2.type && (u2.__d = e2)) : e2 && y2.__e == e2 && e2.parentNode != n2 && (e2 = b(y2));
    }
  for (u2.__e = g2, h2 = x2; h2--; )
    null != w2[h2] && ("function" == typeof u2.type && null != w2[h2].__e && w2[h2].__e == u2.__d && (u2.__d = $(i2).nextSibling), S(w2[h2], w2[h2]));
  if (m2)
    for (h2 = 0; h2 < m2.length; h2++)
      O(m2[h2], m2[++h2], m2[++h2]);
}
function A(n2, l2, u2) {
  for (var i2, t2 = n2.__k, r2 = 0; t2 && r2 < t2.length; r2++)
    (i2 = t2[r2]) && (i2.__ = n2, l2 = "function" == typeof i2.type ? A(i2, l2, u2) : C(u2, i2, i2, t2, i2.__e, l2));
  return l2;
}
function C(n2, l2, u2, i2, t2, r2) {
  var o3, f2, e2;
  if (void 0 !== l2.__d)
    o3 = l2.__d, l2.__d = void 0;
  else if (null == u2 || t2 != r2 || null == t2.parentNode)
    n:
      if (null == r2 || r2.parentNode !== n2)
        n2.appendChild(t2), o3 = null;
      else {
        for (f2 = r2, e2 = 0; (f2 = f2.nextSibling) && e2 < i2.length; e2 += 1)
          if (f2 == t2)
            break n;
        n2.insertBefore(t2, r2), o3 = r2;
      }
  return void 0 !== o3 ? o3 : t2.nextSibling;
}
function $(n2) {
  var l2, u2, i2;
  if (null == n2.type || "string" == typeof n2.type)
    return n2.__e;
  if (n2.__k) {
    for (l2 = n2.__k.length - 1; l2 >= 0; l2--)
      if ((u2 = n2.__k[l2]) && (i2 = $(u2)))
        return i2;
  }
  return null;
}
function H(n2, l2, u2, i2, t2) {
  var r2;
  for (r2 in u2)
    "children" === r2 || "key" === r2 || r2 in l2 || T(n2, r2, null, u2[r2], i2);
  for (r2 in l2)
    t2 && "function" != typeof l2[r2] || "children" === r2 || "key" === r2 || "value" === r2 || "checked" === r2 || u2[r2] === l2[r2] || T(n2, r2, l2[r2], u2[r2], i2);
}
function I(n2, l2, u2) {
  "-" === l2[0] ? n2.setProperty(l2, null == u2 ? "" : u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || a.test(l2) ? u2 : u2 + "px";
}
function T(n2, l2, u2, i2, t2) {
  var r2;
  n:
    if ("style" === l2)
      if ("string" == typeof u2)
        n2.style.cssText = u2;
      else {
        if ("string" == typeof i2 && (n2.style.cssText = i2 = ""), i2)
          for (l2 in i2)
            u2 && l2 in u2 || I(n2.style, l2, "");
        if (u2)
          for (l2 in u2)
            i2 && u2[l2] === i2[l2] || I(n2.style, l2, u2[l2]);
      }
    else if ("o" === l2[0] && "n" === l2[1])
      r2 = l2 !== (l2 = l2.replace(/Capture$/, "")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + r2] = u2, u2 ? i2 || n2.addEventListener(l2, r2 ? z : j, r2) : n2.removeEventListener(l2, r2 ? z : j, r2);
    else if ("dangerouslySetInnerHTML" !== l2) {
      if (t2)
        l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" !== l2 && "height" !== l2 && "href" !== l2 && "list" !== l2 && "form" !== l2 && "tabIndex" !== l2 && "download" !== l2 && l2 in n2)
        try {
          n2[l2] = null == u2 ? "" : u2;
          break n;
        } catch (n3) {
        }
      "function" == typeof u2 || (null == u2 || false === u2 && "-" !== l2[4] ? n2.removeAttribute(l2) : n2.setAttribute(l2, u2));
    }
}
function j(n2) {
  return this.l[n2.type + false](l.event ? l.event(n2) : n2);
}
function z(n2) {
  return this.l[n2.type + true](l.event ? l.event(n2) : n2);
}
function L(n2, u2, i2, t2, r2, o3, f2, e2, c2) {
  var s2, a2, v2, y2, p2, d, b2, g2, m2, w2, A2, P, C2, $2, H2, I2 = u2.type;
  if (void 0 !== u2.constructor)
    return null;
  null != i2.__h && (c2 = i2.__h, e2 = u2.__e = i2.__e, u2.__h = null, o3 = [e2]), (s2 = l.__b) && s2(u2);
  try {
    n:
      if ("function" == typeof I2) {
        if (g2 = u2.props, m2 = (s2 = I2.contextType) && t2[s2.__c], w2 = s2 ? m2 ? m2.props.value : s2.__ : t2, i2.__c ? b2 = (a2 = u2.__c = i2.__c).__ = a2.__E : ("prototype" in I2 && I2.prototype.render ? u2.__c = a2 = new I2(g2, w2) : (u2.__c = a2 = new k(g2, w2), a2.constructor = I2, a2.render = q), m2 && m2.sub(a2), a2.props = g2, a2.state || (a2.state = {}), a2.context = w2, a2.__n = t2, v2 = a2.__d = true, a2.__h = [], a2._sb = []), null == a2.__s && (a2.__s = a2.state), null != I2.getDerivedStateFromProps && (a2.__s == a2.state && (a2.__s = h({}, a2.__s)), h(a2.__s, I2.getDerivedStateFromProps(g2, a2.__s))), y2 = a2.props, p2 = a2.state, a2.__v = u2, v2)
          null == I2.getDerivedStateFromProps && null != a2.componentWillMount && a2.componentWillMount(), null != a2.componentDidMount && a2.__h.push(a2.componentDidMount);
        else {
          if (null == I2.getDerivedStateFromProps && g2 !== y2 && null != a2.componentWillReceiveProps && a2.componentWillReceiveProps(g2, w2), !a2.__e && null != a2.shouldComponentUpdate && false === a2.shouldComponentUpdate(g2, a2.__s, w2) || u2.__v === i2.__v) {
            for (u2.__v !== i2.__v && (a2.props = g2, a2.state = a2.__s, a2.__d = false), a2.__e = false, u2.__e = i2.__e, u2.__k = i2.__k, u2.__k.forEach(function(n3) {
              n3 && (n3.__ = u2);
            }), A2 = 0; A2 < a2._sb.length; A2++)
              a2.__h.push(a2._sb[A2]);
            a2._sb = [], a2.__h.length && f2.push(a2);
            break n;
          }
          null != a2.componentWillUpdate && a2.componentWillUpdate(g2, a2.__s, w2), null != a2.componentDidUpdate && a2.__h.push(function() {
            a2.componentDidUpdate(y2, p2, d);
          });
        }
        if (a2.context = w2, a2.props = g2, a2.__P = n2, P = l.__r, C2 = 0, "prototype" in I2 && I2.prototype.render) {
          for (a2.state = a2.__s, a2.__d = false, P && P(u2), s2 = a2.render(a2.props, a2.state, a2.context), $2 = 0; $2 < a2._sb.length; $2++)
            a2.__h.push(a2._sb[$2]);
          a2._sb = [];
        } else
          do {
            a2.__d = false, P && P(u2), s2 = a2.render(a2.props, a2.state, a2.context), a2.state = a2.__s;
          } while (a2.__d && ++C2 < 25);
        a2.state = a2.__s, null != a2.getChildContext && (t2 = h(h({}, t2), a2.getChildContext())), v2 || null == a2.getSnapshotBeforeUpdate || (d = a2.getSnapshotBeforeUpdate(y2, p2)), H2 = null != s2 && s2.type === _ && null == s2.key ? s2.props.children : s2, x(n2, Array.isArray(H2) ? H2 : [H2], u2, i2, t2, r2, o3, f2, e2, c2), a2.base = u2.__e, u2.__h = null, a2.__h.length && f2.push(a2), b2 && (a2.__E = a2.__ = null), a2.__e = false;
      } else
        null == o3 && u2.__v === i2.__v ? (u2.__k = i2.__k, u2.__e = i2.__e) : u2.__e = N(i2.__e, u2, i2, t2, r2, o3, f2, c2);
    (s2 = l.diffed) && s2(u2);
  } catch (n3) {
    u2.__v = null, (c2 || null != o3) && (u2.__e = e2, u2.__h = !!c2, o3[o3.indexOf(e2)] = null), l.__e(n3, u2, i2);
  }
}
function M(n2, u2) {
  l.__c && l.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l.__e(n3, u3.__v);
    }
  });
}
function N(l2, u2, i2, t2, r2, o3, f2, e2) {
  var s2, a2, h2, y2 = i2.props, p2 = u2.props, d = u2.type, _3 = 0;
  if ("svg" === d && (r2 = true), null != o3) {
    for (; _3 < o3.length; _3++)
      if ((s2 = o3[_3]) && "setAttribute" in s2 == !!d && (d ? s2.localName === d : 3 === s2.nodeType)) {
        l2 = s2, o3[_3] = null;
        break;
      }
  }
  if (null == l2) {
    if (null === d)
      return document.createTextNode(p2);
    l2 = r2 ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, p2.is && p2), o3 = null, e2 = false;
  }
  if (null === d)
    y2 === p2 || e2 && l2.data === p2 || (l2.data = p2);
  else {
    if (o3 = o3 && n.call(l2.childNodes), a2 = (y2 = i2.props || c).dangerouslySetInnerHTML, h2 = p2.dangerouslySetInnerHTML, !e2) {
      if (null != o3)
        for (y2 = {}, _3 = 0; _3 < l2.attributes.length; _3++)
          y2[l2.attributes[_3].name] = l2.attributes[_3].value;
      (h2 || a2) && (h2 && (a2 && h2.__html == a2.__html || h2.__html === l2.innerHTML) || (l2.innerHTML = h2 && h2.__html || ""));
    }
    if (H(l2, p2, y2, r2, e2), h2)
      u2.__k = [];
    else if (_3 = u2.props.children, x(l2, Array.isArray(_3) ? _3 : [_3], u2, i2, t2, r2 && "foreignObject" !== d, o3, f2, o3 ? o3[0] : i2.__k && b(i2, 0), e2), null != o3)
      for (_3 = o3.length; _3--; )
        null != o3[_3] && v(o3[_3]);
    e2 || ("value" in p2 && void 0 !== (_3 = p2.value) && (_3 !== l2.value || "progress" === d && !_3 || "option" === d && _3 !== y2.value) && T(l2, "value", _3, y2.value, false), "checked" in p2 && void 0 !== (_3 = p2.checked) && _3 !== l2.checked && T(l2, "checked", _3, y2.checked, false));
  }
  return l2;
}
function O(n2, u2, i2) {
  try {
    "function" == typeof n2 ? n2(u2) : n2.current = u2;
  } catch (n3) {
    l.__e(n3, i2);
  }
}
function S(n2, u2, i2) {
  var t2, r2;
  if (l.unmount && l.unmount(n2), (t2 = n2.ref) && (t2.current && t2.current !== n2.__e || O(t2, null, u2)), null != (t2 = n2.__c)) {
    if (t2.componentWillUnmount)
      try {
        t2.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u2);
      }
    t2.base = t2.__P = null, n2.__c = void 0;
  }
  if (t2 = n2.__k)
    for (r2 = 0; r2 < t2.length; r2++)
      t2[r2] && S(t2[r2], u2, i2 || "function" != typeof n2.type);
  i2 || null == n2.__e || v(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
}
function q(n2, l2, u2) {
  return this.constructor(n2, u2);
}
function B(u2, i2, t2) {
  var r2, o3, f2;
  l.__ && l.__(u2, i2), o3 = (r2 = "function" == typeof t2) ? null : t2 && t2.__k || i2.__k, f2 = [], L(i2, u2 = (!r2 && t2 || i2).__k = y(_, null, [u2]), o3 || c, c, void 0 !== i2.ownerSVGElement, !r2 && t2 ? [t2] : o3 ? null : i2.firstChild ? n.call(i2.childNodes) : null, f2, !r2 && t2 ? t2 : o3 ? o3.__e : i2.firstChild, r2), M(f2, u2);
}
function D(n2, l2) {
  B(n2, l2, D);
}
var n, l, u, i, t, r, o, f, e, c, s, a;
var init_preact_module = __esm({
  "node_modules/preact/dist/preact.module.js"() {
    c = {};
    s = [];
    a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
    n = s.slice, l = { __e: function(n2, l2, u2, i2) {
      for (var t2, r2, o3; l2 = l2.__; )
        if ((t2 = l2.__c) && !t2.__)
          try {
            if ((r2 = t2.constructor) && null != r2.getDerivedStateFromError && (t2.setState(r2.getDerivedStateFromError(n2)), o3 = t2.__d), null != t2.componentDidCatch && (t2.componentDidCatch(n2, i2 || {}), o3 = t2.__d), o3)
              return t2.__E = t2;
          } catch (l3) {
            n2 = l3;
          }
      throw n2;
    } }, u = 0, i = function(n2) {
      return null != n2 && void 0 === n2.constructor;
    }, k.prototype.setState = function(n2, l2) {
      var u2;
      u2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h({}, this.state), "function" == typeof n2 && (n2 = n2(h({}, u2), this.props)), n2 && h(u2, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), m(this));
    }, k.prototype.forceUpdate = function(n2) {
      this.__v && (this.__e = true, n2 && this.__h.push(n2), m(this));
    }, k.prototype.render = _, t = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l2) {
      return n2.__v.__b - l2.__v.__b;
    }, w.__r = 0, e = 0;
  }
});

// node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
function o2(o3, e2, n2, t2, f2, l2) {
  var s2, u2, a2 = {};
  for (u2 in e2)
    "ref" == u2 ? s2 = e2[u2] : a2[u2] = e2[u2];
  var i2 = { type: o3, props: a2, key: n2, ref: s2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_2, __source: f2, __self: l2 };
  if ("function" == typeof o3 && (s2 = o3.defaultProps))
    for (u2 in s2)
      void 0 === a2[u2] && (a2[u2] = s2[u2]);
  return l.vnode && l.vnode(i2), i2;
}
var _2;
var init_jsxRuntime_module = __esm({
  "node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js"() {
    init_preact_module();
    init_preact_module();
    _2 = 0;
  }
});

// src/components/TimelineItem.island.js
var TimelineItem_island_exports = {};
__export(TimelineItem_island_exports, {
  default: () => TimelineItem
});
function TimelineItem({ name, time, children }) {
  return /* @__PURE__ */ o2(
    "div",
    {
      ref: (node) => {
        if (!node)
          return;
        node.children[0].style.height = node.offsetHeight + "px";
      },
      class: "flex items-center gap-2 min-h-[200px]",
      children: [
        /* @__PURE__ */ o2("div", { class: "relative flex flex-col items-center", children: [
          /* @__PURE__ */ o2(
            "div",
            {
              ref: (node) => {
                const box = node.parentNode.nextSibling.getBoundingClientRect();
                const toAdd = Math.abs(node.getBoundingClientRect().y - box.y);
                node.style.height = toAdd + "px";
              },
              class: "h-4 w-[1px] bg-zinc-100"
            }
          ),
          /* @__PURE__ */ o2("div", { class: "relative h-4 w-4 flex-none rounded-full bg-zinc-700 drop-shadow-xl", children: /* @__PURE__ */ o2("p", { class: "text-zinc-400 absolute text-xs right-7 top-[50%] translate-y-[-50%]", children: time }) }),
          /* @__PURE__ */ o2("div", { class: "h-full flex-1 w-[1px] bg-zinc-100" })
        ] }),
        /* @__PURE__ */ o2("div", { class: "ml-10  flex flex-col w-full", children: [
          /* @__PURE__ */ o2("div", { children: /* @__PURE__ */ o2("h1", { class: "font-bold text-zinc-700", children: name }) }),
          /* @__PURE__ */ o2("div", { class: "w-full", children })
        ] })
      ]
    }
  );
}
var init_TimelineItem_island = __esm({
  "src/components/TimelineItem.island.js"() {
    init_jsxRuntime_module();
  }
});

// .prev/.generated/TimelineItem.island.client-is1133157928.js
init_preact_module();
var restoreTree = (type, props = {}) => {
  if (typeof props.children === "object") {
    if (Array.isArray(props.children)) {
      return y(
        type,
        props,
        ...props.children.map((x2) => {
          return restoreTree(x2.type, x2.props);
        })
      );
    }
    return y(
      type,
      props,
      restoreTree(props.children.type || "", props.children.props || {})
    );
  }
  return y(type, props);
};
customElements.define("island-timeline-item", class IslandTimelineItem extends HTMLElement {
  async connectedCallback() {
    const c2 = await Promise.resolve().then(() => (init_TimelineItem_island(), TimelineItem_island_exports));
    const props = JSON.parse(this.dataset.props || "{}");
    D(restoreTree(c2.default, props, props.children || []), this);
  }
});
