function An(t, e) {
  const n = Object.create(null),
    o = t.split(',');
  for (let r = 0; r < o.length; r++) n[o[r]] = !0;
  return e ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
const Q = {},
  pe = [],
  Yt = () => {},
  gi = () => !1,
  mi = /^on[^a-z]/,
  Ke = (t) => mi.test(t),
  mo = (t) => t.startsWith('onUpdate:'),
  nt = Object.assign,
  vo = (t, e) => {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1);
  },
  vi = Object.prototype.hasOwnProperty,
  J = (t, e) => vi.call(t, e),
  M = Array.isArray,
  de = (t) => Ge(t) === '[object Map]',
  Tn = (t) => Ge(t) === '[object Set]',
  Do = (t) => Ge(t) === '[object Date]',
  q = (t) => typeof t == 'function',
  et = (t) => typeof t == 'string',
  Ue = (t) => typeof t == 'symbol',
  Y = (t) => t !== null && typeof t == 'object',
  Wr = (t) => Y(t) && q(t.then) && q(t.catch),
  zr = Object.prototype.toString,
  Ge = (t) => zr.call(t),
  qr = (t) => Ge(t) === '[object Object]',
  yo = (t) => et(t) && t !== 'NaN' && t[0] !== '-' && '' + parseInt(t, 10) === t,
  Le = An(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
  ),
  Rn = (t) => {
    const e = Object.create(null);
    return (n) => e[n] || (e[n] = t(n));
  },
  yi = /-(\w)/g,
  Mt = Rn((t) => t.replace(yi, (e, n) => (n ? n.toUpperCase() : ''))),
  _i = /\B([A-Z])/g,
  fe = Rn((t) => t.replace(_i, '-$1').toLowerCase()),
  On = Rn((t) => t.charAt(0).toUpperCase() + t.slice(1)),
  cn = Rn((t) => (t ? `on${On(t)}` : '')),
  Ve = (t, e) => !Object.is(t, e),
  un = (t, e) => {
    for (let n = 0; n < t.length; n++) t[n](e);
  },
  fn = (t, e, n) => {
    Object.defineProperty(t, e, { configurable: !0, enumerable: !1, value: n });
  },
  no = (t) => {
    const e = parseFloat(t);
    return isNaN(e) ? t : e;
  },
  bi = (t) => {
    const e = et(t) ? Number(t) : NaN;
    return isNaN(e) ? t : e;
  };
let Wo;
const wi = An(
  'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console',
);
function Fn(t) {
  if (M(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const o = t[n],
        r = et(o) ? Ei(o) : Fn(o);
      if (r) for (const s in r) e[s] = r[s];
    }
    return e;
  }
  return et(t) || Y(t) ? t : void 0;
}
const Ci = /;(?![^(]*\))/g,
  xi = /:([^]+)/,
  Si = /\/\*[^]*?\*\//g;
function Ei(t) {
  const e = {};
  return (
    t
      .replace(Si, '')
      .split(Ci)
      .forEach((n) => {
        if (n) {
          const o = n.split(xi);
          o.length > 1 && (e[o[0].trim()] = o[1].trim());
        }
      }),
    e
  );
}
function Ln(t) {
  let e = '';
  if (et(t)) e = t;
  else if (M(t))
    for (let n = 0; n < t.length; n++) {
      const o = Ln(t[n]);
      o && (e += o + ' ');
    }
  else if (Y(t)) for (const n in t) t[n] && (e += n + ' ');
  return e.trim();
}
function Ua(t) {
  if (!t) return null;
  let { class: e, style: n } = t;
  return e && !et(e) && (t.class = Ln(e)), n && (t.style = Fn(n)), t;
}
const ki = An('itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly');
function zo(t) {
  return !!t || t === '';
}
function ve(t, e) {
  if (t === e) return !0;
  let n = Do(t),
    o = Do(e);
  if (n || o) return !(!n || !o) && t.getTime() === e.getTime();
  if (((n = Ue(t)), (o = Ue(e)), n || o)) return t === e;
  if (((n = M(t)), (o = M(e)), n || o))
    return (
      !(!n || !o) &&
      (function (r, s) {
        if (r.length !== s.length) return !1;
        let i = !0;
        for (let l = 0; i && l < r.length; l++) i = ve(r[l], s[l]);
        return i;
      })(t, e)
    );
  if (((n = Y(t)), (o = Y(e)), n || o)) {
    if (!n || !o || Object.keys(t).length !== Object.keys(e).length) return !1;
    for (const r in t) {
      const s = t.hasOwnProperty(r),
        i = e.hasOwnProperty(r);
      if ((s && !i) || (!s && i) || !ve(t[r], e[r])) return !1;
    }
  }
  return String(t) === String(e);
}
function Kr(t, e) {
  return t.findIndex((n) => ve(n, e));
}
const Va = (t) =>
    et(t)
      ? t
      : t == null
      ? ''
      : M(t) || (Y(t) && (t.toString === zr || !q(t.toString)))
      ? JSON.stringify(t, Gr, 2)
      : String(t),
  Gr = (t, e) =>
    e && e.__v_isRef
      ? Gr(t, e.value)
      : de(e)
      ? { [`Map(${e.size})`]: [...e.entries()].reduce((n, [o, r]) => ((n[`${o} =>`] = r), n), {}) }
      : Tn(e)
      ? { [`Set(${e.size})`]: [...e.values()] }
      : !Y(e) || M(e) || qr(e)
      ? e
      : String(e);
let yt;
class Xr {
  constructor(e = !1) {
    (this.detached = e),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = yt),
      !e && yt && (this.index = (yt.scopes || (yt.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(e) {
    if (this._active) {
      const n = yt;
      try {
        return (yt = this), e();
      } finally {
        yt = n;
      }
    }
  }
  on() {
    yt = this;
  }
  off() {
    yt = this.parent;
  }
  stop(e) {
    if (this._active) {
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++) this.effects[n].stop();
      for (n = 0, o = this.cleanups.length; n < o; n++) this.cleanups[n]();
      if (this.scopes) for (n = 0, o = this.scopes.length; n < o; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !e) {
        const r = this.parent.scopes.pop();
        r && r !== this && ((this.parent.scopes[this.index] = r), (r.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function Ba(t) {
  return new Xr(t);
}
function Ai(t, e = yt) {
  e && e.active && e.effects.push(t);
}
function Ti() {
  return yt;
}
function Ha(t) {
  yt && yt.cleanups.push(t);
}
const _o = (t) => {
    const e = new Set(t);
    return (e.w = 0), (e.n = 0), e;
  },
  Jr = (t) => (t.w & Xt) > 0,
  Yr = (t) => (t.n & Xt) > 0,
  mn = new WeakMap();
let Re = 0,
  Xt = 1,
  Rt;
const ce = Symbol(''),
  oo = Symbol('');
class bo {
  constructor(e, n = null, o) {
    (this.fn = e), (this.scheduler = n), (this.active = !0), (this.deps = []), (this.parent = void 0), Ai(this, o);
  }
  run() {
    if (!this.active) return this.fn();
    let e = Rt,
      n = Zt;
    for (; e; ) {
      if (e === this) return;
      e = e.parent;
    }
    try {
      return (
        (this.parent = Rt),
        (Rt = this),
        (Zt = !0),
        (Xt = 1 << ++Re),
        Re <= 30
          ? (({ deps: o }) => {
              if (o.length) for (let r = 0; r < o.length; r++) o[r].w |= Xt;
            })(this)
          : qo(this),
        this.fn()
      );
    } finally {
      Re <= 30 &&
        ((o) => {
          const { deps: r } = o;
          if (r.length) {
            let s = 0;
            for (let i = 0; i < r.length; i++) {
              const l = r[i];
              Jr(l) && !Yr(l) ? l.delete(o) : (r[s++] = l), (l.w &= ~Xt), (l.n &= ~Xt);
            }
            r.length = s;
          }
        })(this),
        (Xt = 1 << --Re),
        (Rt = this.parent),
        (Zt = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    Rt === this ? (this.deferStop = !0) : this.active && (qo(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function qo(t) {
  const { deps: e } = t;
  if (e.length) {
    for (let n = 0; n < e.length; n++) e[n].delete(t);
    e.length = 0;
  }
}
let Zt = !0;
const Zr = [];
function ye() {
  Zr.push(Zt), (Zt = !1);
}
function _e() {
  const t = Zr.pop();
  Zt = t === void 0 || t;
}
function mt(t, e, n) {
  if (Zt && Rt) {
    let o = mn.get(t);
    o || mn.set(t, (o = new Map()));
    let r = o.get(n);
    r || o.set(n, (r = _o())), Qr(r);
  }
}
function Qr(t, e) {
  let n = !1;
  Re <= 30 ? Yr(t) || ((t.n |= Xt), (n = !Jr(t))) : (n = !t.has(Rt)), n && (t.add(Rt), Rt.deps.push(t));
}
function Vt(t, e, n, o, r, s) {
  const i = mn.get(t);
  if (!i) return;
  let l = [];
  if (e === 'clear') l = [...i.values()];
  else if (n === 'length' && M(t)) {
    const a = Number(o);
    i.forEach((c, f) => {
      (f === 'length' || f >= a) && l.push(c);
    });
  } else
    switch ((n !== void 0 && l.push(i.get(n)), e)) {
      case 'add':
        M(t) ? yo(n) && l.push(i.get('length')) : (l.push(i.get(ce)), de(t) && l.push(i.get(oo)));
        break;
      case 'delete':
        M(t) || (l.push(i.get(ce)), de(t) && l.push(i.get(oo)));
        break;
      case 'set':
        de(t) && l.push(i.get(ce));
    }
  if (l.length === 1) l[0] && ro(l[0]);
  else {
    const a = [];
    for (const c of l) c && a.push(...c);
    ro(_o(a));
  }
}
function ro(t, e) {
  const n = M(t) ? t : [...t];
  for (const o of n) o.computed && Ko(o);
  for (const o of n) o.computed || Ko(o);
}
function Ko(t, e) {
  (t !== Rt || t.allowRecurse) && (t.scheduler ? t.scheduler() : t.run());
}
const Ri = An('__proto__,__v_isRef,__isVue'),
  ts = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((t) => t !== 'arguments' && t !== 'caller')
      .map((t) => Symbol[t])
      .filter(Ue),
  ),
  Oi = Pn(),
  Fi = Pn(!1, !0),
  Li = Pn(!0),
  Pi = Pn(!0, !0),
  Go = $i();
function $i() {
  const t = {};
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach((e) => {
      t[e] = function (...n) {
        const o = X(this);
        for (let s = 0, i = this.length; s < i; s++) mt(o, 0, s + '');
        const r = o[e](...n);
        return r === -1 || r === !1 ? o[e](...n.map(X)) : r;
      };
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((e) => {
      t[e] = function (...n) {
        ye();
        const o = X(this)[e].apply(this, n);
        return _e(), o;
      };
    }),
    t
  );
}
function Ii(t) {
  const e = X(this);
  return mt(e, 0, t), e.hasOwnProperty(t);
}
function Pn(t = !1, e = !1) {
  return function (n, o, r) {
    if (o === '__v_isReactive') return !t;
    if (o === '__v_isReadonly') return t;
    if (o === '__v_isShallow') return e;
    if (o === '__v_raw' && r === (t ? (e ? zi : is) : e ? ss : rs).get(n)) return n;
    const s = M(n);
    if (!t) {
      if (s && J(Go, o)) return Reflect.get(Go, o, r);
      if (o === 'hasOwnProperty') return Ii;
    }
    const i = Reflect.get(n, o, r);
    return (Ue(o) ? ts.has(o) : Ri(o))
      ? i
      : (t || mt(n, 0, o), e ? i : lt(i) ? (s && yo(o) ? i : i.value) : Y(i) ? (t ? ls(i) : In(i)) : i);
  };
}
function es(t = !1) {
  return function (e, n, o, r) {
    let s = e[n];
    if (be(s) && lt(s) && !lt(o)) return !1;
    if (!t && (vn(o) || be(o) || ((s = X(s)), (o = X(o))), !M(e) && lt(s) && !lt(o))) return (s.value = o), !0;
    const i = M(e) && yo(n) ? Number(n) < e.length : J(e, n),
      l = Reflect.set(e, n, o, r);
    return e === X(r) && (i ? Ve(o, s) && Vt(e, 'set', n, o) : Vt(e, 'add', n, o)), l;
  };
}
const ns = {
    get: Oi,
    set: es(),
    deleteProperty: function (t, e) {
      const n = J(t, e),
        o = Reflect.deleteProperty(t, e);
      return o && n && Vt(t, 'delete', e, void 0), o;
    },
    has: function (t, e) {
      const n = Reflect.has(t, e);
      return (Ue(e) && ts.has(e)) || mt(t, 0, e), n;
    },
    ownKeys: function (t) {
      return mt(t, 0, M(t) ? 'length' : ce), Reflect.ownKeys(t);
    },
  },
  os = { get: Li, set: (t, e) => !0, deleteProperty: (t, e) => !0 },
  Mi = nt({}, ns, { get: Fi, set: es(!0) });
nt({}, os, { get: Pi });
const wo = (t) => t,
  $n = (t) => Reflect.getPrototypeOf(t);
function Ze(t, e, n = !1, o = !1) {
  const r = X((t = t.__v_raw)),
    s = X(e);
  n || (e !== s && mt(r, 0, e), mt(r, 0, s));
  const { has: i } = $n(r),
    l = o ? wo : n ? So : Be;
  return i.call(r, e) ? l(t.get(e)) : i.call(r, s) ? l(t.get(s)) : void (t !== r && t.get(e));
}
function Qe(t, e = !1) {
  const n = this.__v_raw,
    o = X(n),
    r = X(t);
  return e || (t !== r && mt(o, 0, t), mt(o, 0, r)), t === r ? n.has(t) : n.has(t) || n.has(r);
}
function tn(t, e = !1) {
  return (t = t.__v_raw), !e && mt(X(t), 0, ce), Reflect.get(t, 'size', t);
}
function Xo(t) {
  t = X(t);
  const e = X(this);
  return $n(e).has.call(e, t) || (e.add(t), Vt(e, 'add', t, t)), this;
}
function Jo(t, e) {
  e = X(e);
  const n = X(this),
    { has: o, get: r } = $n(n);
  let s = o.call(n, t);
  s || ((t = X(t)), (s = o.call(n, t)));
  const i = r.call(n, t);
  return n.set(t, e), s ? Ve(e, i) && Vt(n, 'set', t, e) : Vt(n, 'add', t, e), this;
}
function Yo(t) {
  const e = X(this),
    { has: n, get: o } = $n(e);
  let r = n.call(e, t);
  r || ((t = X(t)), (r = n.call(e, t))), o && o.call(e, t);
  const s = e.delete(t);
  return r && Vt(e, 'delete', t, void 0), s;
}
function Zo() {
  const t = X(this),
    e = t.size !== 0,
    n = t.clear();
  return e && Vt(t, 'clear', void 0, void 0), n;
}
function en(t, e) {
  return function (n, o) {
    const r = this,
      s = r.__v_raw,
      i = X(s),
      l = e ? wo : t ? So : Be;
    return !t && mt(i, 0, ce), s.forEach((a, c) => n.call(o, l(a), l(c), r));
  };
}
function nn(t, e, n) {
  return function (...o) {
    const r = this.__v_raw,
      s = X(r),
      i = de(s),
      l = t === 'entries' || (t === Symbol.iterator && i),
      a = t === 'keys' && i,
      c = r[t](...o),
      f = n ? wo : e ? So : Be;
    return (
      !e && mt(s, 0, a ? oo : ce),
      {
        next() {
          const { value: d, done: g } = c.next();
          return g ? { value: d, done: g } : { value: l ? [f(d[0]), f(d[1])] : f(d), done: g };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Wt(t) {
  return function (...e) {
    return t !== 'delete' && this;
  };
}
function ji() {
  const t = {
      get(r) {
        return Ze(this, r);
      },
      get size() {
        return tn(this);
      },
      has: Qe,
      add: Xo,
      set: Jo,
      delete: Yo,
      clear: Zo,
      forEach: en(!1, !1),
    },
    e = {
      get(r) {
        return Ze(this, r, !1, !0);
      },
      get size() {
        return tn(this);
      },
      has: Qe,
      add: Xo,
      set: Jo,
      delete: Yo,
      clear: Zo,
      forEach: en(!1, !0),
    },
    n = {
      get(r) {
        return Ze(this, r, !0);
      },
      get size() {
        return tn(this, !0);
      },
      has(r) {
        return Qe.call(this, r, !0);
      },
      add: Wt('add'),
      set: Wt('set'),
      delete: Wt('delete'),
      clear: Wt('clear'),
      forEach: en(!0, !1),
    },
    o = {
      get(r) {
        return Ze(this, r, !0, !0);
      },
      get size() {
        return tn(this, !0);
      },
      has(r) {
        return Qe.call(this, r, !0);
      },
      add: Wt('add'),
      set: Wt('set'),
      delete: Wt('delete'),
      clear: Wt('clear'),
      forEach: en(!0, !0),
    };
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach((r) => {
      (t[r] = nn(r, !1, !1)), (n[r] = nn(r, !0, !1)), (e[r] = nn(r, !1, !0)), (o[r] = nn(r, !0, !0));
    }),
    [t, n, e, o]
  );
}
const [Ni, Ui, Vi, Bi] = ji();
function Co(t, e) {
  const n = e ? (t ? Bi : Vi) : t ? Ui : Ni;
  return (o, r, s) =>
    r === '__v_isReactive'
      ? !t
      : r === '__v_isReadonly'
      ? t
      : r === '__v_raw'
      ? o
      : Reflect.get(J(n, r) && r in o ? n : o, r, s);
}
const Hi = { get: Co(!1, !1) },
  Di = { get: Co(!1, !0) },
  Wi = { get: Co(!0, !1) },
  rs = new WeakMap(),
  ss = new WeakMap(),
  is = new WeakMap(),
  zi = new WeakMap();
function qi(t) {
  return t.__v_skip || !Object.isExtensible(t)
    ? 0
    : (function (e) {
        switch (e) {
          case 'Object':
          case 'Array':
            return 1;
          case 'Map':
          case 'Set':
          case 'WeakMap':
          case 'WeakSet':
            return 2;
          default:
            return 0;
        }
      })(((e) => Ge(e).slice(8, -1))(t));
}
function In(t) {
  return be(t) ? t : xo(t, !1, ns, Hi, rs);
}
function Ki(t) {
  return xo(t, !1, Mi, Di, ss);
}
function ls(t) {
  return xo(t, !0, os, Wi, is);
}
function xo(t, e, n, o, r) {
  if (!Y(t) || (t.__v_raw && (!e || !t.__v_isReactive))) return t;
  const s = r.get(t);
  if (s) return s;
  const i = qi(t);
  if (i === 0) return t;
  const l = new Proxy(t, i === 2 ? o : n);
  return r.set(t, l), l;
}
function he(t) {
  return be(t) ? he(t.__v_raw) : !(!t || !t.__v_isReactive);
}
function be(t) {
  return !(!t || !t.__v_isReadonly);
}
function vn(t) {
  return !(!t || !t.__v_isShallow);
}
function as(t) {
  return he(t) || be(t);
}
function X(t) {
  const e = t && t.__v_raw;
  return e ? X(e) : t;
}
function Pe(t) {
  return fn(t, '__v_skip', !0), t;
}
const Be = (t) => (Y(t) ? In(t) : t),
  So = (t) => (Y(t) ? ls(t) : t);
function cs(t) {
  Zt && Rt && Qr((t = X(t)).dep || (t.dep = _o()));
}
function Eo(t, e) {
  const n = (t = X(t)).dep;
  n && ro(n);
}
function lt(t) {
  return !(!t || t.__v_isRef !== !0);
}
function ko(t) {
  return us(t, !1);
}
function Gi(t) {
  return us(t, !0);
}
function us(t, e) {
  return lt(t) ? t : new Xi(t, e);
}
class Xi {
  constructor(e, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? e : X(e)),
      (this._value = n ? e : Be(e));
  }
  get value() {
    return cs(this), this._value;
  }
  set value(e) {
    const n = this.__v_isShallow || vn(e) || be(e);
    (e = n ? e : X(e)), Ve(e, this._rawValue) && ((this._rawValue = e), (this._value = n ? e : Be(e)), Eo(this));
  }
}
function Da(t) {
  Eo(t);
}
function Ji(t) {
  return lt(t) ? t.value : t;
}
const Yi = {
  get: (t, e, n) => Ji(Reflect.get(t, e, n)),
  set: (t, e, n, o) => {
    const r = t[e];
    return lt(r) && !lt(n) ? ((r.value = n), !0) : Reflect.set(t, e, n, o);
  },
};
function fs(t) {
  return he(t) ? t : new Proxy(t, Yi);
}
function Wa(t) {
  const e = M(t) ? new Array(t.length) : {};
  for (const n in t) e[n] = ps(t, n);
  return e;
}
class Zi {
  constructor(e, n, o) {
    (this._object = e), (this._key = n), (this._defaultValue = o), (this.__v_isRef = !0);
  }
  get value() {
    const e = this._object[this._key];
    return e === void 0 ? this._defaultValue : e;
  }
  set value(e) {
    this._object[this._key] = e;
  }
  get dep() {
    return (e = X(this._object)), (n = this._key), (o = mn.get(e)) == null ? void 0 : o.get(n);
    var e, n, o;
  }
}
class Qi {
  constructor(e) {
    (this._getter = e), (this.__v_isRef = !0), (this.__v_isReadonly = !0);
  }
  get value() {
    return this._getter();
  }
}
function za(t, e, n) {
  return lt(t) ? t : q(t) ? new Qi(t) : Y(t) && arguments.length > 1 ? ps(t, e, n) : ko(t);
}
function ps(t, e, n) {
  const o = t[e];
  return lt(o) ? o : new Zi(t, e, n);
}
class tl {
  constructor(e, n, o, r) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this._dirty = !0),
      (this.effect = new bo(e, () => {
        this._dirty || ((this._dirty = !0), Eo(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !r),
      (this.__v_isReadonly = o);
  }
  get value() {
    const e = X(this);
    return cs(e), (!e._dirty && e._cacheable) || ((e._dirty = !1), (e._value = e.effect.run())), e._value;
  }
  set value(e) {
    this._setter(e);
  }
}
function qa(t, ...e) {}
function Qt(t, e, n, o) {
  let r;
  try {
    r = o ? t(...o) : t();
  } catch (s) {
    Mn(s, e, n);
  }
  return r;
}
function Ft(t, e, n, o) {
  if (q(t)) {
    const s = Qt(t, e, n, o);
    return (
      s &&
        Wr(s) &&
        s.catch((i) => {
          Mn(i, e, n);
        }),
      s
    );
  }
  const r = [];
  for (let s = 0; s < t.length; s++) r.push(Ft(t[s], e, n, o));
  return r;
}
function Mn(t, e, n, o = !0) {
  if (e) {
    let r = e.parent;
    const s = e.proxy,
      i = n;
    for (; r; ) {
      const a = r.ec;
      if (a) {
        for (let c = 0; c < a.length; c++) if (a[c](t, s, i) === !1) return;
      }
      r = r.parent;
    }
    const l = e.appContext.config.errorHandler;
    if (l) return void Qt(l, null, 10, [t, s, i]);
  }
  (function (r, s, i, l = !0) {
    console.error(r);
  })(t, 0, 0, o);
}
let He = !1,
  so = !1;
const ut = [];
let $t = 0;
const ge = [];
let Ut = null,
  re = 0;
const ds = Promise.resolve();
let Ao = null;
function hs(t) {
  const e = Ao || ds;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function To(t) {
  (ut.length && ut.includes(t, He && t.allowRecurse ? $t + 1 : $t)) ||
    (t.id == null
      ? ut.push(t)
      : ut.splice(
          (function (e) {
            let n = $t + 1,
              o = ut.length;
            for (; n < o; ) {
              const r = (n + o) >>> 1;
              De(ut[r]) < e ? (n = r + 1) : (o = r);
            }
            return n;
          })(t.id),
          0,
          t,
        ),
    gs());
}
function gs() {
  He || so || ((so = !0), (Ao = ds.then(ms)));
}
function el(t) {
  M(t) ? ge.push(...t) : (Ut && Ut.includes(t, t.allowRecurse ? re + 1 : re)) || ge.push(t), gs();
}
function Qo(t, e = He ? $t + 1 : 0) {
  for (; e < ut.length; e++) {
    const n = ut[e];
    n && n.pre && (ut.splice(e, 1), e--, n());
  }
}
function yn(t) {
  if (ge.length) {
    const e = [...new Set(ge)];
    if (((ge.length = 0), Ut)) return void Ut.push(...e);
    for (Ut = e, Ut.sort((n, o) => De(n) - De(o)), re = 0; re < Ut.length; re++) Ut[re]();
    (Ut = null), (re = 0);
  }
}
const De = (t) => (t.id == null ? 1 / 0 : t.id),
  nl = (t, e) => {
    const n = De(t) - De(e);
    if (n === 0) {
      if (t.pre && !e.pre) return -1;
      if (e.pre && !t.pre) return 1;
    }
    return n;
  };
function ms(t) {
  (so = !1), (He = !0), ut.sort(nl);
  try {
    for ($t = 0; $t < ut.length; $t++) {
      const e = ut[$t];
      e && e.active !== !1 && Qt(e, null, 14);
    }
  } finally {
    ($t = 0), (ut.length = 0), yn(), (He = !1), (Ao = null), (ut.length || ge.length) && ms();
  }
}
function ol(t, e, ...n) {
  if (t.isUnmounted) return;
  const o = t.vnode.props || Q;
  let r = n;
  const s = e.startsWith('update:'),
    i = s && e.slice(7);
  if (i && i in o) {
    const f = `${i === 'modelValue' ? 'model' : i}Modifiers`,
      { number: d, trim: g } = o[f] || Q;
    g && (r = n.map((O) => (et(O) ? O.trim() : O))), d && (r = n.map(no));
  }
  let l,
    a = o[(l = cn(e))] || o[(l = cn(Mt(e)))];
  !a && s && (a = o[(l = cn(fe(e)))]), a && Ft(a, t, 6, r);
  const c = o[l + 'Once'];
  if (c) {
    if (t.emitted) {
      if (t.emitted[l]) return;
    } else t.emitted = {};
    (t.emitted[l] = !0), Ft(c, t, 6, r);
  }
}
function vs(t, e, n = !1) {
  const o = e.emitsCache,
    r = o.get(t);
  if (r !== void 0) return r;
  const s = t.emits;
  let i = {},
    l = !1;
  if (!q(t)) {
    const a = (c) => {
      const f = vs(c, e, !0);
      f && ((l = !0), nt(i, f));
    };
    !n && e.mixins.length && e.mixins.forEach(a), t.extends && a(t.extends), t.mixins && t.mixins.forEach(a);
  }
  return s || l
    ? (M(s) ? s.forEach((a) => (i[a] = null)) : nt(i, s), Y(t) && o.set(t, i), i)
    : (Y(t) && o.set(t, null), null);
}
function _n(t, e) {
  return (
    !(!t || !Ke(e)) &&
    ((e = e.slice(2).replace(/Once$/, '')), J(t, e[0].toLowerCase() + e.slice(1)) || J(t, fe(e)) || J(t, e))
  );
}
let ct = null,
  jn = null;
function bn(t) {
  const e = ct;
  return (ct = t), (jn = (t && t.type.__scopeId) || null), e;
}
function Ka(t) {
  jn = t;
}
function Ga() {
  jn = null;
}
function rl(t, e = ct, n) {
  if (!e || t._n) return t;
  const o = (...r) => {
    o._d && mr(-1);
    const s = bn(e);
    let i;
    try {
      i = t(...r);
    } finally {
      bn(s), o._d && mr(1);
    }
    return i;
  };
  return (o._n = !0), (o._c = !0), (o._d = !0), o;
}
function Gn(t) {
  const {
    type: e,
    vnode: n,
    proxy: o,
    withProxy: r,
    props: s,
    propsOptions: [i],
    slots: l,
    attrs: a,
    emit: c,
    render: f,
    renderCache: d,
    data: g,
    setupState: O,
    ctx: R,
    inheritAttrs: $,
  } = t;
  let m, S;
  const j = bn(t);
  try {
    if (4 & n.shapeFlag) {
      const V = r || o;
      (m = Tt(f.call(V, V, d, s, O, g, R))), (S = a);
    } else {
      const V = e;
      (m = Tt(V(s, V.length > 1 ? { attrs: a, slots: l, emit: c } : null))), (S = e.props ? a : sl(a));
    }
  } catch (V) {
    (je.length = 0), Mn(V, t, 1), (m = at(_t));
  }
  let K = m;
  if (S && $ !== !1) {
    const V = Object.keys(S),
      { shapeFlag: D } = K;
    V.length && 7 & D && (i && V.some(mo) && (S = il(S, i)), (K = te(K, S)));
  }
  return (
    n.dirs && ((K = te(K)), (K.dirs = K.dirs ? K.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (K.transition = n.transition),
    (m = K),
    bn(j),
    m
  );
}
const sl = (t) => {
    let e;
    for (const n in t) (n === 'class' || n === 'style' || Ke(n)) && ((e || (e = {}))[n] = t[n]);
    return e;
  },
  il = (t, e) => {
    const n = {};
    for (const o in t) (mo(o) && o.slice(9) in e) || (n[o] = t[o]);
    return n;
  };
function tr(t, e, n) {
  const o = Object.keys(e);
  if (o.length !== Object.keys(t).length) return !0;
  for (let r = 0; r < o.length; r++) {
    const s = o[r];
    if (e[s] !== t[s] && !_n(n, s)) return !0;
  }
  return !1;
}
function ll({ vnode: t, parent: e }, n) {
  for (; e && e.subTree === t; ) ((t = e.vnode).el = n), (e = e.parent);
}
const al = (t) => t.__isSuspense;
function ys(t, e) {
  e && e.pendingBranch ? (M(t) ? e.effects.push(...t) : e.effects.push(t)) : el(t);
}
function cl(t, e) {
  return Nn(t, null, e);
}
function Xa(t, e) {
  return Nn(t, null, { flush: 'post' });
}
const on = {};
function pn(t, e, n) {
  return Nn(t, e, n);
}
function Nn(t, e, { immediate: n, deep: o, flush: r } = Q) {
  var s;
  const i = Ti() === ((s = it) == null ? void 0 : s.scope) ? it : null;
  let l,
    a,
    c = !1,
    f = !1;
  if (
    (lt(t)
      ? ((l = () => t.value), (c = vn(t)))
      : he(t)
      ? ((l = () => t), (o = !0))
      : M(t)
      ? ((f = !0),
        (c = t.some((m) => he(m) || vn(m))),
        (l = () => t.map((m) => (lt(m) ? m.value : he(m) ? le(m) : q(m) ? Qt(m, i, 2) : void 0))))
      : (l = q(t)
          ? e
            ? () => Qt(t, i, 2)
            : () => {
                if (!i || !i.isUnmounted) return a && a(), Ft(t, i, 3, [d]);
              }
          : Yt),
    e && o)
  ) {
    const m = l;
    l = () => le(m());
  }
  let d = (m) => {
      a = $.onStop = () => {
        Qt(m, i, 4);
      };
    },
    g = f ? new Array(t.length).fill(on) : on;
  const O = () => {
    if ($.active)
      if (e) {
        const m = $.run();
        (o || c || (f ? m.some((S, j) => Ve(S, g[j])) : Ve(m, g))) &&
          (a && a(), Ft(e, i, 3, [m, g === on ? void 0 : f && g[0] === on ? [] : g, d]), (g = m));
      } else $.run();
  };
  let R;
  (O.allowRecurse = !!e),
    r === 'sync'
      ? (R = O)
      : r === 'post'
      ? (R = () => gt(O, i && i.suspense))
      : ((O.pre = !0), i && (O.id = i.uid), (R = () => To(O)));
  const $ = new bo(l, R);
  return (
    e ? (n ? O() : (g = $.run())) : r === 'post' ? gt($.run.bind($), i && i.suspense) : $.run(),
    () => {
      $.stop(), i && i.scope && vo(i.scope.effects, $);
    }
  );
}
function ul(t, e, n) {
  const o = this.proxy,
    r = et(t) ? (t.includes('.') ? _s(o, t) : () => o[t]) : t.bind(o, o);
  let s;
  q(e) ? (s = e) : ((s = e.handler), (n = e));
  const i = it;
  Ce(this);
  const l = Nn(r, s.bind(o), n);
  return i ? Ce(i) : ue(), l;
}
function _s(t, e) {
  const n = e.split('.');
  return () => {
    let o = t;
    for (let r = 0; r < n.length && o; r++) o = o[n[r]];
    return o;
  };
}
function le(t, e) {
  if (!Y(t) || t.__v_skip || (e = e || new Set()).has(t)) return t;
  if ((e.add(t), lt(t))) le(t.value, e);
  else if (M(t)) for (let n = 0; n < t.length; n++) le(t[n], e);
  else if (Tn(t) || de(t))
    t.forEach((n) => {
      le(n, e);
    });
  else if (qr(t)) for (const n in t) le(t[n], e);
  return t;
}
function Ja(t, e) {
  const n = ct;
  if (n === null) return t;
  const o = Dn(n) || n.proxy,
    r = t.dirs || (t.dirs = []);
  for (let s = 0; s < e.length; s++) {
    let [i, l, a, c = Q] = e[s];
    i &&
      (q(i) && (i = { mounted: i, updated: i }),
      i.deep && le(l),
      r.push({ dir: i, instance: o, value: l, oldValue: void 0, arg: a, modifiers: c }));
  }
  return t;
}
function Pt(t, e, n, o) {
  const r = t.dirs,
    s = e && e.dirs;
  for (let i = 0; i < r.length; i++) {
    const l = r[i];
    s && (l.oldValue = s[i].value);
    let a = l.dir[o];
    a && (ye(), Ft(a, n, 8, [t.el, l, t, e]), _e());
  }
}
function bs() {
  const t = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map() };
  return (
    Bn(() => {
      t.isMounted = !0;
    }),
    ks(() => {
      t.isUnmounting = !0;
    }),
    t
  );
}
const St = [Function, Array],
  ws = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: St,
    onEnter: St,
    onAfterEnter: St,
    onEnterCancelled: St,
    onBeforeLeave: St,
    onLeave: St,
    onAfterLeave: St,
    onLeaveCancelled: St,
    onBeforeAppear: St,
    onAppear: St,
    onAfterAppear: St,
    onAppearCancelled: St,
  },
  fl = {
    name: 'BaseTransition',
    props: ws,
    setup(t, { slots: e }) {
      const n = Mo(),
        o = bs();
      let r;
      return () => {
        const s = e.default && Ro(e.default(), !0);
        if (!s || !s.length) return;
        let i = s[0];
        if (s.length > 1) {
          for (const $ of s)
            if ($.type !== _t) {
              i = $;
              break;
            }
        }
        const l = X(t),
          { mode: a } = l;
        if (o.isLeaving) return Xn(i);
        const c = er(i);
        if (!c) return Xn(i);
        const f = We(c, l, o, n);
        ze(c, f);
        const d = n.subTree,
          g = d && er(d);
        let O = !1;
        const { getTransitionKey: R } = c.type;
        if (R) {
          const $ = R();
          r === void 0 ? (r = $) : $ !== r && ((r = $), (O = !0));
        }
        if (g && g.type !== _t && (!se(c, g) || O)) {
          const $ = We(g, l, o, n);
          if ((ze(g, $), a === 'out-in'))
            return (
              (o.isLeaving = !0),
              ($.afterLeave = () => {
                (o.isLeaving = !1), n.update.active !== !1 && n.update();
              }),
              Xn(i)
            );
          a === 'in-out' &&
            c.type !== _t &&
            ($.delayLeave = (m, S, j) => {
              (Cs(o, g)[String(g.key)] = g),
                (m._leaveCb = () => {
                  S(), (m._leaveCb = void 0), delete f.delayedLeave;
                }),
                (f.delayedLeave = j);
            });
        }
        return i;
      };
    },
  };
function Cs(t, e) {
  const { leavingVNodes: n } = t;
  let o = n.get(e.type);
  return o || ((o = Object.create(null)), n.set(e.type, o)), o;
}
function We(t, e, n, o) {
  const {
      appear: r,
      mode: s,
      persisted: i = !1,
      onBeforeEnter: l,
      onEnter: a,
      onAfterEnter: c,
      onEnterCancelled: f,
      onBeforeLeave: d,
      onLeave: g,
      onAfterLeave: O,
      onLeaveCancelled: R,
      onBeforeAppear: $,
      onAppear: m,
      onAfterAppear: S,
      onAppearCancelled: j,
    } = e,
    K = String(t.key),
    V = Cs(n, t),
    D = (I, W) => {
      I && Ft(I, o, 9, W);
    },
    G = (I, W) => {
      const z = W[1];
      D(I, W), M(I) ? I.every((ot) => ot.length <= 1) && z() : I.length <= 1 && z();
    },
    U = {
      mode: s,
      persisted: i,
      beforeEnter(I) {
        let W = l;
        if (!n.isMounted) {
          if (!r) return;
          W = $ || l;
        }
        I._leaveCb && I._leaveCb(!0);
        const z = V[K];
        z && se(t, z) && z.el._leaveCb && z.el._leaveCb(), D(W, [I]);
      },
      enter(I) {
        let W = a,
          z = c,
          ot = f;
        if (!n.isMounted) {
          if (!r) return;
          (W = m || a), (z = S || c), (ot = j || f);
        }
        let A = !1;
        const E = (I._enterCb = (H) => {
          A || ((A = !0), D(H ? ot : z, [I]), U.delayedLeave && U.delayedLeave(), (I._enterCb = void 0));
        });
        W ? G(W, [I, E]) : E();
      },
      leave(I, W) {
        const z = String(t.key);
        if ((I._enterCb && I._enterCb(!0), n.isUnmounting)) return W();
        D(d, [I]);
        let ot = !1;
        const A = (I._leaveCb = (E) => {
          ot || ((ot = !0), W(), D(E ? R : O, [I]), (I._leaveCb = void 0), V[z] === t && delete V[z]);
        });
        (V[z] = t), g ? G(g, [I, A]) : A();
      },
      clone: (I) => We(I, e, n, o),
    };
  return U;
}
function Xn(t) {
  if (Un(t)) return ((t = te(t)).children = null), t;
}
function er(t) {
  return Un(t) ? (t.children ? t.children[0] : void 0) : t;
}
function ze(t, e) {
  6 & t.shapeFlag && t.component
    ? ze(t.component.subTree, e)
    : 128 & t.shapeFlag
    ? ((t.ssContent.transition = e.clone(t.ssContent)), (t.ssFallback.transition = e.clone(t.ssFallback)))
    : (t.transition = e);
}
function Ro(t, e = !1, n) {
  let o = [],
    r = 0;
  for (let s = 0; s < t.length; s++) {
    let i = t[s];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
    i.type === dt
      ? (128 & i.patchFlag && r++, (o = o.concat(Ro(i.children, e, l))))
      : (e || i.type !== _t) && o.push(l != null ? te(i, { key: l }) : i);
  }
  if (r > 1) for (let s = 0; s < o.length; s++) o[s].patchFlag = -2;
  return o;
}
function xs(t, e) {
  return q(t) ? (() => nt({ name: t.name }, e, { setup: t }))() : t;
}
const me = (t) => !!t.type.__asyncLoader,
  Un = (t) => t.type.__isKeepAlive;
function pl(t, e) {
  Ss(t, 'a', e);
}
function dl(t, e) {
  Ss(t, 'da', e);
}
function Ss(t, e, n = it) {
  const o =
    t.__wdc ||
    (t.__wdc = () => {
      let r = n;
      for (; r; ) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return t();
    });
  if ((Vn(e, o, n), n)) {
    let r = n.parent;
    for (; r && r.parent; ) Un(r.parent.vnode) && hl(o, e, n, r), (r = r.parent);
  }
}
function hl(t, e, n, o) {
  const r = Vn(e, t, o, !0);
  Hn(() => {
    vo(o[e], r);
  }, n);
}
function Vn(t, e, n = it, o = !1) {
  if (n) {
    const r = n[t] || (n[t] = []),
      s =
        e.__weh ||
        (e.__weh = (...i) => {
          if (n.isUnmounted) return;
          ye(), Ce(n);
          const l = Ft(e, n, t, i);
          return ue(), _e(), l;
        });
    return o ? r.unshift(s) : r.push(s), s;
  }
}
const Bt =
    (t) =>
    (e, n = it) =>
      (!kn || t === 'sp') && Vn(t, (...o) => e(...o), n),
  gl = Bt('bm'),
  Bn = Bt('m'),
  ml = Bt('bu'),
  Es = Bt('u'),
  ks = Bt('bum'),
  Hn = Bt('um'),
  vl = Bt('sp'),
  yl = Bt('rtg'),
  _l = Bt('rtc');
function bl(t, e = it) {
  Vn('ec', t, e);
}
const Oo = 'components';
function Ya(t, e) {
  return Fo(Oo, t, !0, e) || t;
}
const As = Symbol.for('v-ndc');
function Za(t) {
  return et(t) ? Fo(Oo, t, !1) || t : t || As;
}
function Qa(t) {
  return Fo('directives', t);
}
function Fo(t, e, n = !0, o = !1) {
  const r = ct || it;
  if (r) {
    const s = r.type;
    if (t === Oo) {
      const l = Il(s, !1);
      if (l && (l === e || l === Mt(e) || l === On(Mt(e)))) return s;
    }
    const i = nr(r[t] || s[t], e) || nr(r.appContext[t], e);
    return !i && o ? s : i;
  }
}
function nr(t, e) {
  return t && (t[e] || t[Mt(e)] || t[On(Mt(e))]);
}
function tc(t, e, n, o) {
  let r;
  const s = n && n[o];
  if (M(t) || et(t)) {
    r = new Array(t.length);
    for (let i = 0, l = t.length; i < l; i++) r[i] = e(t[i], i, void 0, s && s[i]);
  } else if (typeof t == 'number') {
    r = new Array(t);
    for (let i = 0; i < t; i++) r[i] = e(i + 1, i, void 0, s && s[i]);
  } else if (Y(t))
    if (t[Symbol.iterator]) r = Array.from(t, (i, l) => e(i, l, void 0, s && s[l]));
    else {
      const i = Object.keys(t);
      r = new Array(i.length);
      for (let l = 0, a = i.length; l < a; l++) {
        const c = i[l];
        r[l] = e(t[c], c, l, s && s[l]);
      }
    }
  else r = [];
  return n && (n[o] = r), r;
}
function ec(t, e) {
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    if (M(o)) for (let r = 0; r < o.length; r++) t[o[r].name] = o[r].fn;
    else
      o &&
        (t[o.name] = o.key
          ? (...r) => {
              const s = o.fn(...r);
              return s && (s.key = o.key), s;
            }
          : o.fn);
  }
  return t;
}
function nc(t, e, n = {}, o, r) {
  if (ct.isCE || (ct.parent && me(ct.parent) && ct.parent.isCE))
    return e !== 'default' && (n.name = e), at('slot', n, o && o());
  let s = t[e];
  s && s._c && (s._d = !1), Is();
  const i = s && Ts(s(n)),
    l = js(dt, { key: n.key || (i && i.key) || `_${e}` }, i || (o ? o() : []), i && t._ === 1 ? 64 : -2);
  return !r && l.scopeId && (l.slotScopeIds = [l.scopeId + '-s']), s && s._c && (s._d = !0), l;
}
function Ts(t) {
  return t.some((e) => !Sn(e) || (e.type !== _t && !(e.type === dt && !Ts(e.children)))) ? t : null;
}
function oc(t, e) {
  const n = {};
  for (const o in t) n[e && /[A-Z]/.test(o) ? `on:${o}` : cn(o)] = t[o];
  return n;
}
const io = (t) => (t ? (Bs(t) ? Dn(t) || t.proxy : io(t.parent)) : null),
  $e = nt(Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => io(t.parent),
    $root: (t) => io(t.root),
    $emit: (t) => t.emit,
    $options: (t) => Lo(t),
    $forceUpdate: (t) => t.f || (t.f = () => To(t.update)),
    $nextTick: (t) => t.n || (t.n = hs.bind(t.proxy)),
    $watch: (t) => ul.bind(t),
  }),
  Jn = (t, e) => t !== Q && !t.__isScriptSetup && J(t, e),
  lo = {
    get({ _: t }, e) {
      const { ctx: n, setupState: o, data: r, props: s, accessCache: i, type: l, appContext: a } = t;
      let c;
      if (e[0] !== '$') {
        const O = i[e];
        if (O !== void 0)
          switch (O) {
            case 1:
              return o[e];
            case 2:
              return r[e];
            case 4:
              return n[e];
            case 3:
              return s[e];
          }
        else {
          if (Jn(o, e)) return (i[e] = 1), o[e];
          if (r !== Q && J(r, e)) return (i[e] = 2), r[e];
          if ((c = t.propsOptions[0]) && J(c, e)) return (i[e] = 3), s[e];
          if (n !== Q && J(n, e)) return (i[e] = 4), n[e];
          ao && (i[e] = 0);
        }
      }
      const f = $e[e];
      let d, g;
      return f
        ? (e === '$attrs' && mt(t, 0, e), f(t))
        : (d = l.__cssModules) && (d = d[e])
        ? d
        : n !== Q && J(n, e)
        ? ((i[e] = 4), n[e])
        : ((g = a.config.globalProperties), J(g, e) ? g[e] : void 0);
    },
    set({ _: t }, e, n) {
      const { data: o, setupState: r, ctx: s } = t;
      return Jn(r, e)
        ? ((r[e] = n), !0)
        : o !== Q && J(o, e)
        ? ((o[e] = n), !0)
        : !J(t.props, e) && (e[0] !== '$' || !(e.slice(1) in t)) && ((s[e] = n), !0);
    },
    has({ _: { data: t, setupState: e, accessCache: n, ctx: o, appContext: r, propsOptions: s } }, i) {
      let l;
      return (
        !!n[i] ||
        (t !== Q && J(t, i)) ||
        Jn(e, i) ||
        ((l = s[0]) && J(l, i)) ||
        J(o, i) ||
        J($e, i) ||
        J(r.config.globalProperties, i)
      );
    },
    defineProperty(t, e, n) {
      return (
        n.get != null ? (t._.accessCache[e] = 0) : J(n, 'value') && this.set(t, e, n.value, null),
        Reflect.defineProperty(t, e, n)
      );
    },
  };
nt({}, lo, {
  get(t, e) {
    if (e !== Symbol.unscopables) return lo.get(t, e, t);
  },
  has: (t, e) => e[0] !== '_' && !wi(e),
});
function rc() {
  return Rs().slots;
}
function sc() {
  return Rs().attrs;
}
function Rs() {
  const t = Mo();
  return t.setupContext || (t.setupContext = Ds(t));
}
function or(t) {
  return M(t) ? t.reduce((e, n) => ((e[n] = null), e), {}) : t;
}
let ao = !0;
function wl(t) {
  const e = Lo(t),
    n = t.proxy,
    o = t.ctx;
  (ao = !1), e.beforeCreate && rr(e.beforeCreate, t, 'bc');
  const {
    data: r,
    computed: s,
    methods: i,
    watch: l,
    provide: a,
    inject: c,
    created: f,
    beforeMount: d,
    mounted: g,
    beforeUpdate: O,
    updated: R,
    activated: $,
    deactivated: m,
    beforeUnmount: S,
    unmounted: j,
    render: K,
    renderTracked: V,
    renderTriggered: D,
    errorCaptured: G,
    serverPrefetch: U,
    expose: I,
    inheritAttrs: W,
    components: z,
    directives: ot,
  } = e;
  if (
    (c &&
      (function (E, H, tt = Yt) {
        M(E) && (E = co(E));
        for (const bt in E) {
          const wt = E[bt];
          let Ct;
          (Ct = Y(wt) ? ('default' in wt ? Ie(wt.from || bt, wt.default, !0) : Ie(wt.from || bt)) : Ie(wt)),
            lt(Ct)
              ? Object.defineProperty(H, bt, {
                  enumerable: !0,
                  configurable: !0,
                  get: () => Ct.value,
                  set: (Lt) => (Ct.value = Lt),
                })
              : (H[bt] = Ct);
        }
      })(c, o, null),
    i)
  )
    for (const E in i) {
      const H = i[E];
      q(H) && (o[E] = H.bind(n));
    }
  if (r) {
    const E = r.call(n, n);
    Y(E) && (t.data = In(E));
  }
  if (((ao = !0), s))
    for (const E in s) {
      const H = s[E],
        tt = q(H) ? H.bind(n, n) : q(H.get) ? H.get.bind(n, n) : Yt,
        bt = !q(H) && q(H.set) ? H.set.bind(n) : Yt,
        wt = At({ get: tt, set: bt });
      Object.defineProperty(o, E, {
        enumerable: !0,
        configurable: !0,
        get: () => wt.value,
        set: (Ct) => (wt.value = Ct),
      });
    }
  if (l) for (const E in l) Os(l[E], o, n, E);
  if (a) {
    const E = q(a) ? a.call(n) : a;
    Reflect.ownKeys(E).forEach((H) => {
      El(H, E[H]);
    });
  }
  function A(E, H) {
    M(H) ? H.forEach((tt) => E(tt.bind(n))) : H && E(H.bind(n));
  }
  if (
    (f && rr(f, t, 'c'),
    A(gl, d),
    A(Bn, g),
    A(ml, O),
    A(Es, R),
    A(pl, $),
    A(dl, m),
    A(bl, G),
    A(_l, V),
    A(yl, D),
    A(ks, S),
    A(Hn, j),
    A(vl, U),
    M(I))
  )
    if (I.length) {
      const E = t.exposed || (t.exposed = {});
      I.forEach((H) => {
        Object.defineProperty(E, H, { get: () => n[H], set: (tt) => (n[H] = tt) });
      });
    } else t.exposed || (t.exposed = {});
  K && t.render === Yt && (t.render = K),
    W != null && (t.inheritAttrs = W),
    z && (t.components = z),
    ot && (t.directives = ot);
}
function rr(t, e, n) {
  Ft(M(t) ? t.map((o) => o.bind(e.proxy)) : t.bind(e.proxy), e, n);
}
function Os(t, e, n, o) {
  const r = o.includes('.') ? _s(n, o) : () => n[o];
  if (et(t)) {
    const s = e[t];
    q(s) && pn(r, s);
  } else if (q(t)) pn(r, t.bind(n));
  else if (Y(t))
    if (M(t)) t.forEach((s) => Os(s, e, n, o));
    else {
      const s = q(t.handler) ? t.handler.bind(n) : e[t.handler];
      q(s) && pn(r, s, t);
    }
}
function Lo(t) {
  const e = t.type,
    { mixins: n, extends: o } = e,
    {
      mixins: r,
      optionsCache: s,
      config: { optionMergeStrategies: i },
    } = t.appContext,
    l = s.get(e);
  let a;
  return (
    l ? (a = l) : r.length || n || o ? ((a = {}), r.length && r.forEach((c) => wn(a, c, i, !0)), wn(a, e, i)) : (a = e),
    Y(e) && s.set(e, a),
    a
  );
}
function wn(t, e, n, o = !1) {
  const { mixins: r, extends: s } = e;
  s && wn(t, s, n, !0), r && r.forEach((i) => wn(t, i, n, !0));
  for (const i in e)
    if (!(o && i === 'expose')) {
      const l = Cl[i] || (n && n[i]);
      t[i] = l ? l(t[i], e[i]) : e[i];
    }
  return t;
}
const Cl = {
  data: sr,
  props: ir,
  emits: ir,
  methods: ke,
  computed: ke,
  beforeCreate: pt,
  created: pt,
  beforeMount: pt,
  mounted: pt,
  beforeUpdate: pt,
  updated: pt,
  beforeDestroy: pt,
  beforeUnmount: pt,
  destroyed: pt,
  unmounted: pt,
  activated: pt,
  deactivated: pt,
  errorCaptured: pt,
  serverPrefetch: pt,
  components: ke,
  directives: ke,
  watch: function (t, e) {
    if (!t) return e;
    if (!e) return t;
    const n = nt(Object.create(null), t);
    for (const o in e) n[o] = pt(t[o], e[o]);
    return n;
  },
  provide: sr,
  inject: function (t, e) {
    return ke(co(t), co(e));
  },
};
function sr(t, e) {
  return e
    ? t
      ? function () {
          return nt(q(t) ? t.call(this, this) : t, q(e) ? e.call(this, this) : e);
        }
      : e
    : t;
}
function co(t) {
  if (M(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) e[t[n]] = t[n];
    return e;
  }
  return t;
}
function pt(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function ke(t, e) {
  return t ? nt(Object.create(null), t, e) : e;
}
function ir(t, e) {
  return t ? (M(t) && M(e) ? [...new Set([...t, ...e])] : nt(Object.create(null), or(t), or(e ?? {}))) : e;
}
function Fs() {
  return {
    app: null,
    config: {
      isNativeTag: gi,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let xl = 0;
function Sl(t, e) {
  return function (n, o = null) {
    q(n) || (n = nt({}, n)), o == null || Y(o) || (o = null);
    const r = Fs(),
      s = new Set();
    let i = !1;
    const l = (r.app = {
      _uid: xl++,
      _component: n,
      _props: o,
      _container: null,
      _context: r,
      _instance: null,
      version: Ml,
      get config() {
        return r.config;
      },
      set config(a) {},
      use: (a, ...c) => (
        s.has(a) || (a && q(a.install) ? (s.add(a), a.install(l, ...c)) : q(a) && (s.add(a), a(l, ...c))), l
      ),
      mixin: (a) => (r.mixins.includes(a) || r.mixins.push(a), l),
      component: (a, c) => (c ? ((r.components[a] = c), l) : r.components[a]),
      directive: (a, c) => (c ? ((r.directives[a] = c), l) : r.directives[a]),
      mount(a, c, f) {
        if (!i) {
          const d = at(n, o);
          return (
            (d.appContext = r),
            c && e ? e(d, a) : t(d, a, f),
            (i = !0),
            (l._container = a),
            (a.__vue_app__ = l),
            Dn(d.component) || d.component.proxy
          );
        }
      },
      unmount() {
        i && (t(null, l._container), delete l._container.__vue_app__);
      },
      provide: (a, c) => ((r.provides[a] = c), l),
      runWithContext(a) {
        Cn = l;
        try {
          return a();
        } finally {
          Cn = null;
        }
      },
    });
    return l;
  };
}
let Cn = null;
function El(t, e) {
  if (it) {
    let n = it.provides;
    const o = it.parent && it.parent.provides;
    o === n && (n = it.provides = Object.create(o)), (n[t] = e);
  }
}
function Ie(t, e, n = !1) {
  const o = it || ct;
  if (o || Cn) {
    const r = o
      ? o.parent == null
        ? o.vnode.appContext && o.vnode.appContext.provides
        : o.parent.provides
      : Cn._context.provides;
    if (r && t in r) return r[t];
    if (arguments.length > 1) return n && q(e) ? e.call(o && o.proxy) : e;
  }
}
function lr(t, e, n, o) {
  const [r, s] = t.propsOptions;
  let i,
    l = !1;
  if (e)
    for (let a in e) {
      if (Le(a)) continue;
      const c = e[a];
      let f;
      r && J(r, (f = Mt(a)))
        ? s && s.includes(f)
          ? ((i || (i = {}))[f] = c)
          : (n[f] = c)
        : _n(t.emitsOptions, a) || (a in o && c === o[a]) || ((o[a] = c), (l = !0));
    }
  if (s) {
    const a = X(n),
      c = i || Q;
    for (let f = 0; f < s.length; f++) {
      const d = s[f];
      n[d] = uo(r, a, d, c[d], t, !J(c, d));
    }
  }
  return l;
}
function uo(t, e, n, o, r, s) {
  const i = t[n];
  if (i != null) {
    const l = J(i, 'default');
    if (l && o === void 0) {
      const a = i.default;
      if (i.type !== Function && !i.skipFactory && q(a)) {
        const { propsDefaults: c } = r;
        n in c ? (o = c[n]) : (Ce(r), (o = c[n] = a.call(null, e)), ue());
      } else o = a;
    }
    i[0] && (s && !l ? (o = !1) : !i[1] || (o !== '' && o !== fe(n)) || (o = !0));
  }
  return o;
}
function Ls(t, e, n = !1) {
  const o = e.propsCache,
    r = o.get(t);
  if (r) return r;
  const s = t.props,
    i = {},
    l = [];
  let a = !1;
  if (!q(t)) {
    const f = (d) => {
      a = !0;
      const [g, O] = Ls(d, e, !0);
      nt(i, g), O && l.push(...O);
    };
    !n && e.mixins.length && e.mixins.forEach(f), t.extends && f(t.extends), t.mixins && t.mixins.forEach(f);
  }
  if (!s && !a) return Y(t) && o.set(t, pe), pe;
  if (M(s))
    for (let f = 0; f < s.length; f++) {
      const d = Mt(s[f]);
      ar(d) && (i[d] = Q);
    }
  else if (s)
    for (const f in s) {
      const d = Mt(f);
      if (ar(d)) {
        const g = s[f],
          O = (i[d] = M(g) || q(g) ? { type: g } : nt({}, g));
        if (O) {
          const R = fr(Boolean, O.type),
            $ = fr(String, O.type);
          (O[0] = R > -1), (O[1] = $ < 0 || R < $), (R > -1 || J(O, 'default')) && l.push(d);
        }
      }
    }
  const c = [i, l];
  return Y(t) && o.set(t, c), c;
}
function ar(t) {
  return t[0] !== '$';
}
function cr(t) {
  const e = t && t.toString().match(/^\s*(function|class) (\w+)/);
  return e ? e[2] : t === null ? 'null' : '';
}
function ur(t, e) {
  return cr(t) === cr(e);
}
function fr(t, e) {
  return M(e) ? e.findIndex((n) => ur(n, t)) : q(e) && ur(e, t) ? 0 : -1;
}
const Ps = (t) => t[0] === '_' || t === '$stable',
  Po = (t) => (M(t) ? t.map(Tt) : [Tt(t)]),
  kl = (t, e, n) => {
    if (e._n) return e;
    const o = rl((...r) => Po(e(...r)), n);
    return (o._c = !1), o;
  },
  pr = (t, e, n) => {
    const o = t._ctx;
    for (const r in t) {
      if (Ps(r)) continue;
      const s = t[r];
      if (q(s)) e[r] = kl(0, s, o);
      else if (s != null) {
        const i = Po(s);
        e[r] = () => i;
      }
    }
  },
  dr = (t, e) => {
    const n = Po(e);
    t.slots.default = () => n;
  };
function xn(t, e, n, o, r = !1) {
  if (M(t)) return void t.forEach((g, O) => xn(g, e && (M(e) ? e[O] : e), n, o, r));
  if (me(o) && !r) return;
  const s = 4 & o.shapeFlag ? Dn(o.component) || o.component.proxy : o.el,
    i = r ? null : s,
    { i: l, r: a } = t,
    c = e && e.r,
    f = l.refs === Q ? (l.refs = {}) : l.refs,
    d = l.setupState;
  if ((c != null && c !== a && (et(c) ? ((f[c] = null), J(d, c) && (d[c] = null)) : lt(c) && (c.value = null)), q(a)))
    Qt(a, l, 12, [i, f]);
  else {
    const g = et(a),
      O = lt(a);
    if (g || O) {
      const R = () => {
        if (t.f) {
          const $ = g ? (J(d, a) ? d[a] : f[a]) : a.value;
          r
            ? M($) && vo($, s)
            : M($)
            ? $.includes(s) || $.push(s)
            : g
            ? ((f[a] = [s]), J(d, a) && (d[a] = f[a]))
            : ((a.value = [s]), t.k && (f[t.k] = a.value));
        } else g ? ((f[a] = i), J(d, a) && (d[a] = i)) : O && ((a.value = i), t.k && (f[t.k] = i));
      };
      i ? ((R.id = -1), gt(R, n)) : R();
    }
  }
}
let zt = !1;
const rn = (t) => /svg/.test(t.namespaceURI) && t.tagName !== 'foreignObject',
  sn = (t) => t.nodeType === 8;
function Al(t) {
  const {
      mt: e,
      p: n,
      o: { patchProp: o, createText: r, nextSibling: s, parentNode: i, remove: l, insert: a, createComment: c },
    } = t,
    f = (m, S, j, K, V, D = !1) => {
      const G = sn(m) && m.data === '[',
        U = () => R(m, S, j, K, V, G),
        { type: I, ref: W, shapeFlag: z, patchFlag: ot } = S;
      let A = m.nodeType;
      (S.el = m), ot === -2 && ((D = !1), (S.dynamicChildren = null));
      let E = null;
      switch (I) {
        case we:
          A !== 3
            ? S.children === ''
              ? (a((S.el = r('')), i(m), m), (E = m))
              : (E = U())
            : (m.data !== S.children && ((zt = !0), (m.data = S.children)), (E = s(m)));
          break;
        case _t:
          E = A !== 8 || G ? U() : s(m);
          break;
        case Me:
          if ((G && (A = (m = s(m)).nodeType), A === 1 || A === 3)) {
            E = m;
            const H = !S.children.length;
            for (let tt = 0; tt < S.staticCount; tt++)
              H && (S.children += E.nodeType === 1 ? E.outerHTML : E.data),
                tt === S.staticCount - 1 && (S.anchor = E),
                (E = s(E));
            return G ? s(E) : E;
          }
          U();
          break;
        case dt:
          E = G ? O(m, S, j, K, V, D) : U();
          break;
        default:
          if (1 & z) E = A !== 1 || S.type.toLowerCase() !== m.tagName.toLowerCase() ? U() : d(m, S, j, K, V, D);
          else if (6 & z) {
            S.slotScopeIds = V;
            const H = i(m);
            if (
              (e(S, H, null, j, K, rn(H), D),
              (E = G ? $(m) : s(m)),
              E && sn(E) && E.data === 'teleport end' && (E = s(E)),
              me(S))
            ) {
              let tt;
              G
                ? ((tt = at(dt)), (tt.anchor = E ? E.previousSibling : H.lastChild))
                : (tt = m.nodeType === 3 ? Vs('') : at('div')),
                (tt.el = m),
                (S.component.subTree = tt);
            }
          } else
            64 & z
              ? (E = A !== 8 ? U() : S.type.hydrate(m, S, j, K, V, D, t, g))
              : 128 & z && (E = S.type.hydrate(m, S, j, K, rn(i(m)), V, D, t, f));
      }
      return W != null && xn(W, null, K, S), E;
    },
    d = (m, S, j, K, V, D) => {
      D = D || !!S.dynamicChildren;
      const { type: G, props: U, patchFlag: I, shapeFlag: W, dirs: z } = S,
        ot = (G === 'input' && z) || G === 'option';
      if (ot || I !== -1) {
        if ((z && Pt(S, null, j, 'created'), U))
          if (ot || !D || 48 & I)
            for (const E in U) ((ot && E.endsWith('value')) || (Ke(E) && !Le(E))) && o(m, E, null, U[E], !1, void 0, j);
          else U.onClick && o(m, 'onClick', null, U.onClick, !1, void 0, j);
        let A;
        if (
          ((A = U && U.onVnodeBeforeMount) && Et(A, j, S),
          z && Pt(S, null, j, 'beforeMount'),
          ((A = U && U.onVnodeMounted) || z) &&
            ys(() => {
              A && Et(A, j, S), z && Pt(S, null, j, 'mounted');
            }, K),
          16 & W && (!U || (!U.innerHTML && !U.textContent)))
        ) {
          let E = g(m.firstChild, S, m, j, K, V, D);
          for (; E; ) {
            zt = !0;
            const H = E;
            (E = E.nextSibling), l(H);
          }
        } else 8 & W && m.textContent !== S.children && ((zt = !0), (m.textContent = S.children));
      }
      return m.nextSibling;
    },
    g = (m, S, j, K, V, D, G) => {
      G = G || !!S.dynamicChildren;
      const U = S.children,
        I = U.length;
      for (let W = 0; W < I; W++) {
        const z = G ? U[W] : (U[W] = Tt(U[W]));
        if (m) m = f(m, z, K, V, D, G);
        else {
          if (z.type === we && !z.children) continue;
          (zt = !0), n(null, z, j, null, K, V, rn(j), D);
        }
      }
      return m;
    },
    O = (m, S, j, K, V, D) => {
      const { slotScopeIds: G } = S;
      G && (V = V ? V.concat(G) : G);
      const U = i(m),
        I = g(s(m), S, U, j, K, V, D);
      return I && sn(I) && I.data === ']' ? s((S.anchor = I)) : ((zt = !0), a((S.anchor = c(']')), U, I), I);
    },
    R = (m, S, j, K, V, D) => {
      if (((zt = !0), (S.el = null), D)) {
        const I = $(m);
        for (;;) {
          const W = s(m);
          if (!W || W === I) break;
          l(W);
        }
      }
      const G = s(m),
        U = i(m);
      return l(m), n(null, S, U, G, j, K, rn(U), V), G;
    },
    $ = (m) => {
      let S = 0;
      for (; m; )
        if ((m = s(m)) && sn(m) && (m.data === '[' && S++, m.data === ']')) {
          if (S === 0) return s(m);
          S--;
        }
      return m;
    };
  return [
    (m, S) => {
      if (!S.hasChildNodes()) return n(null, m, S), yn(), void (S._vnode = m);
      (zt = !1),
        f(S.firstChild, m, null, null, null),
        yn(),
        (S._vnode = m),
        zt && console.error('Hydration completed but contains mismatches.');
    },
    f,
  ];
}
const gt = ys;
function Tl(t) {
  return $s(t);
}
function Rl(t) {
  return $s(t, Al);
}
function $s(t, e) {
  (
    Wo ||
    (Wo =
      typeof globalThis < 'u'
        ? globalThis
        : typeof self < 'u'
        ? self
        : typeof window < 'u'
        ? window
        : typeof global < 'u'
        ? global
        : {})
  ).__VUE__ = !0;
  const {
      insert: n,
      remove: o,
      patchProp: r,
      createElement: s,
      createText: i,
      createComment: l,
      setText: a,
      setElementText: c,
      parentNode: f,
      nextSibling: d,
      setScopeId: g = Yt,
      insertStaticContent: O,
    } = t,
    R = (u, p, v, C = null, y = null, _ = null, F = !1, w = null, b = !!p.dynamicChildren) => {
      if (u === p) return;
      u && !se(u, p) && ((C = Xe(u)), Lt(u, y, _, !0), (u = null)),
        p.patchFlag === -2 && ((b = !1), (p.dynamicChildren = null));
      const { type: h, ref: T, shapeFlag: k } = p;
      switch (h) {
        case we:
          $(u, p, v, C);
          break;
        case _t:
          m(u, p, v, C);
          break;
        case Me:
          u == null && S(p, v, C, F);
          break;
        case dt:
          W(u, p, v, C, y, _, F, w, b);
          break;
        default:
          1 & k
            ? j(u, p, v, C, y, _, F, w, b)
            : 6 & k
            ? z(u, p, v, C, y, _, F, w, b)
            : (64 & k || 128 & k) && h.process(u, p, v, C, y, _, F, w, b, Se);
      }
      T != null && y && xn(T, u && u.ref, _, p || u, !p);
    },
    $ = (u, p, v, C) => {
      if (u == null) n((p.el = i(p.children)), v, C);
      else {
        const y = (p.el = u.el);
        p.children !== u.children && a(y, p.children);
      }
    },
    m = (u, p, v, C) => {
      u == null ? n((p.el = l(p.children || '')), v, C) : (p.el = u.el);
    },
    S = (u, p, v, C) => {
      [u.el, u.anchor] = O(u.children, p, v, C, u.el, u.anchor);
    },
    j = (u, p, v, C, y, _, F, w, b) => {
      (F = F || p.type === 'svg'), u == null ? K(p, v, C, y, _, F, w, b) : G(u, p, y, _, F, w, b);
    },
    K = (u, p, v, C, y, _, F, w) => {
      let b, h;
      const { type: T, props: k, shapeFlag: L, transition: x, dirs: P } = u;
      if (
        ((b = u.el = s(u.type, _, k && k.is, k)),
        8 & L ? c(b, u.children) : 16 & L && D(u.children, b, null, C, y, _ && T !== 'foreignObject', F, w),
        P && Pt(u, null, C, 'created'),
        V(b, u, u.scopeId, F, C),
        k)
      ) {
        for (const N in k) N === 'value' || Le(N) || r(b, N, null, k[N], _, u.children, C, y, jt);
        'value' in k && r(b, 'value', null, k.value), (h = k.onVnodeBeforeMount) && Et(h, C, u);
      }
      P && Pt(u, null, C, 'beforeMount');
      const B = (!y || (y && !y.pendingBranch)) && x && !x.persisted;
      B && x.beforeEnter(b),
        n(b, p, v),
        ((h = k && k.onVnodeMounted) || B || P) &&
          gt(() => {
            h && Et(h, C, u), B && x.enter(b), P && Pt(u, null, C, 'mounted');
          }, y);
    },
    V = (u, p, v, C, y) => {
      if ((v && g(u, v), C)) for (let _ = 0; _ < C.length; _++) g(u, C[_]);
      if (y && p === y.subTree) {
        const _ = y.vnode;
        V(u, _, _.scopeId, _.slotScopeIds, y.parent);
      }
    },
    D = (u, p, v, C, y, _, F, w, b = 0) => {
      for (let h = b; h < u.length; h++) {
        const T = (u[h] = w ? Gt(u[h]) : Tt(u[h]));
        R(null, T, p, v, C, y, _, F, w);
      }
    },
    G = (u, p, v, C, y, _, F) => {
      const w = (p.el = u.el);
      let { patchFlag: b, dynamicChildren: h, dirs: T } = p;
      b |= 16 & u.patchFlag;
      const k = u.props || Q,
        L = p.props || Q;
      let x;
      v && ne(v, !1), (x = L.onVnodeBeforeUpdate) && Et(x, v, p, u), T && Pt(p, u, v, 'beforeUpdate'), v && ne(v, !0);
      const P = y && p.type !== 'foreignObject';
      if ((h ? U(u.dynamicChildren, h, w, v, C, P, _) : F || tt(u, p, w, null, v, C, P, _, !1), b > 0)) {
        if (16 & b) I(w, p, k, L, v, C, y);
        else if (
          (2 & b && k.class !== L.class && r(w, 'class', null, L.class, y),
          4 & b && r(w, 'style', k.style, L.style, y),
          8 & b)
        ) {
          const B = p.dynamicProps;
          for (let N = 0; N < B.length; N++) {
            const Z = B[N],
              rt = k[Z],
              vt = L[Z];
            (vt === rt && Z !== 'value') || r(w, Z, rt, vt, y, u.children, v, C, jt);
          }
        }
        1 & b && u.children !== p.children && c(w, p.children);
      } else F || h != null || I(w, p, k, L, v, C, y);
      ((x = L.onVnodeUpdated) || T) &&
        gt(() => {
          x && Et(x, v, p, u), T && Pt(p, u, v, 'updated');
        }, C);
    },
    U = (u, p, v, C, y, _, F) => {
      for (let w = 0; w < p.length; w++) {
        const b = u[w],
          h = p[w],
          T = b.el && (b.type === dt || !se(b, h) || 70 & b.shapeFlag) ? f(b.el) : v;
        R(b, h, T, null, C, y, _, F, !0);
      }
    },
    I = (u, p, v, C, y, _, F) => {
      if (v !== C) {
        if (v !== Q) for (const w in v) Le(w) || w in C || r(u, w, v[w], null, F, p.children, y, _, jt);
        for (const w in C) {
          if (Le(w)) continue;
          const b = C[w],
            h = v[w];
          b !== h && w !== 'value' && r(u, w, h, b, F, p.children, y, _, jt);
        }
        'value' in C && r(u, 'value', v.value, C.value);
      }
    },
    W = (u, p, v, C, y, _, F, w, b) => {
      const h = (p.el = u ? u.el : i('')),
        T = (p.anchor = u ? u.anchor : i(''));
      let { patchFlag: k, dynamicChildren: L, slotScopeIds: x } = p;
      x && (w = w ? w.concat(x) : x),
        u == null
          ? (n(h, v, C), n(T, v, C), D(p.children, v, T, y, _, F, w, b))
          : k > 0 && 64 & k && L && u.dynamicChildren
          ? (U(u.dynamicChildren, L, v, y, _, F, w), (p.key != null || (y && p === y.subTree)) && $o(u, p, !0))
          : tt(u, p, v, T, y, _, F, w, b);
    },
    z = (u, p, v, C, y, _, F, w, b) => {
      (p.slotScopeIds = w),
        u == null ? (512 & p.shapeFlag ? y.ctx.activate(p, v, C, F, b) : ot(p, v, C, y, _, F, b)) : A(u, p, b);
    },
    ot = (u, p, v, C, y, _, F) => {
      const w = (u.component = (function (b, h, T) {
        const k = b.type,
          L = (h ? h.appContext : b.appContext) || Pl,
          x = {
            uid: $l++,
            vnode: b,
            type: k,
            parent: h,
            appContext: L,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            scope: new Xr(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: h ? h.provides : Object.create(L.provides),
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: Ls(k, L),
            emitsOptions: vs(k, L),
            emit: null,
            emitted: null,
            propsDefaults: Q,
            inheritAttrs: k.inheritAttrs,
            ctx: Q,
            data: Q,
            props: Q,
            attrs: Q,
            slots: Q,
            refs: Q,
            setupState: Q,
            setupContext: null,
            attrsProxy: null,
            slotsProxy: null,
            suspense: T,
            suspenseId: T ? T.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null,
          };
        return (x.ctx = { _: x }), (x.root = h ? h.root : x), (x.emit = ol.bind(null, x)), b.ce && b.ce(x), x;
      })(u, C, y));
      if (
        (Un(u) && (w.ctx.renderer = Se),
        (function (b, h = !1) {
          kn = h;
          const { props: T, children: k } = b.vnode,
            L = Bs(b);
          (function (x, P, B, N = !1) {
            const Z = {},
              rt = {};
            fn(rt, En, 1), (x.propsDefaults = Object.create(null)), lr(x, P, Z, rt);
            for (const vt in x.propsOptions[0]) vt in Z || (Z[vt] = void 0);
            (x.props = B ? (N ? Z : Ki(Z)) : x.type.props ? Z : rt), (x.attrs = rt);
          })(b, T, L, h),
            ((x, P) => {
              if (32 & x.vnode.shapeFlag) {
                const B = P._;
                B ? ((x.slots = X(P)), fn(P, '_', B)) : pr(P, (x.slots = {}));
              } else (x.slots = {}), P && dr(x, P);
              fn(x.slots, En, 1);
            })(b, k),
            L &&
              (function (x, P) {
                const B = x.type;
                (x.accessCache = Object.create(null)), (x.proxy = Pe(new Proxy(x.ctx, lo)));
                const { setup: N } = B;
                if (N) {
                  const Z = (x.setupContext = N.length > 1 ? Ds(x) : null);
                  Ce(x), ye();
                  const rt = Qt(N, x, 0, [x.props, Z]);
                  if ((_e(), ue(), Wr(rt))) {
                    if ((rt.then(ue, ue), P))
                      return rt
                        .then((vt) => {
                          yr(x, vt, P);
                        })
                        .catch((vt) => {
                          Mn(vt, x, 0);
                        });
                    x.asyncDep = rt;
                  } else yr(x, rt, P);
                } else Hs(x, P);
              })(b, h),
            (kn = !1);
        })(w),
        w.asyncDep)
      ) {
        if ((y && y.registerDep(w, E), !u.el)) {
          const b = (w.subTree = at(_t));
          m(null, b, p, v);
        }
      } else E(w, u, p, v, y, _, F);
    },
    A = (u, p, v) => {
      const C = (p.component = u.component);
      if (
        (function (y, _, F) {
          const { props: w, children: b, component: h } = y,
            { props: T, children: k, patchFlag: L } = _,
            x = h.emitsOptions;
          if (_.dirs || _.transition) return !0;
          if (!(F && L >= 0)) return !((!b && !k) || (k && k.$stable)) || (w !== T && (w ? !T || tr(w, T, x) : !!T));
          if (1024 & L) return !0;
          if (16 & L) return w ? tr(w, T, x) : !!T;
          if (8 & L) {
            const P = _.dynamicProps;
            for (let B = 0; B < P.length; B++) {
              const N = P[B];
              if (T[N] !== w[N] && !_n(x, N)) return !0;
            }
          }
          return !1;
        })(u, p, v)
      ) {
        if (C.asyncDep && !C.asyncResolved) return void H(C, p, v);
        (C.next = p),
          (function (y) {
            const _ = ut.indexOf(y);
            _ > $t && ut.splice(_, 1);
          })(C.update),
          C.update();
      } else (p.el = u.el), (C.vnode = p);
    },
    E = (u, p, v, C, y, _, F) => {
      const w = (u.effect = new bo(
          () => {
            if (u.isMounted) {
              let h,
                { next: T, bu: k, u: L, parent: x, vnode: P } = u,
                B = T;
              ne(u, !1),
                T ? ((T.el = P.el), H(u, T, F)) : (T = P),
                k && un(k),
                (h = T.props && T.props.onVnodeBeforeUpdate) && Et(h, x, T, P),
                ne(u, !0);
              const N = Gn(u),
                Z = u.subTree;
              (u.subTree = N),
                R(Z, N, f(Z.el), Xe(Z), u, y, _),
                (T.el = N.el),
                B === null && ll(u, N.el),
                L && gt(L, y),
                (h = T.props && T.props.onVnodeUpdated) && gt(() => Et(h, x, T, P), y);
            } else {
              let h;
              const { el: T, props: k } = p,
                { bm: L, m: x, parent: P } = u,
                B = me(p);
              if ((ne(u, !1), L && un(L), !B && (h = k && k.onVnodeBeforeMount) && Et(h, P, p), ne(u, !0), T && qn)) {
                const N = () => {
                  (u.subTree = Gn(u)), qn(T, u.subTree, u, y, null);
                };
                B ? p.type.__asyncLoader().then(() => !u.isUnmounted && N()) : N();
              } else {
                const N = (u.subTree = Gn(u));
                R(null, N, v, C, u, y, _), (p.el = N.el);
              }
              if ((x && gt(x, y), !B && (h = k && k.onVnodeMounted))) {
                const N = p;
                gt(() => Et(h, P, N), y);
              }
              (256 & p.shapeFlag || (P && me(P.vnode) && 256 & P.vnode.shapeFlag)) && u.a && gt(u.a, y),
                (u.isMounted = !0),
                (p = v = C = null);
            }
          },
          () => To(b),
          u.scope,
        )),
        b = (u.update = () => w.run());
      (b.id = u.uid), ne(u, !0), b();
    },
    H = (u, p, v) => {
      p.component = u;
      const C = u.vnode.props;
      (u.vnode = p),
        (u.next = null),
        (function (y, _, F, w) {
          const {
              props: b,
              attrs: h,
              vnode: { patchFlag: T },
            } = y,
            k = X(b),
            [L] = y.propsOptions;
          let x = !1;
          if (!(w || T > 0) || 16 & T) {
            let P;
            lr(y, _, b, h) && (x = !0);
            for (const B in k)
              (_ && (J(_, B) || ((P = fe(B)) !== B && J(_, P)))) ||
                (L ? !F || (F[B] === void 0 && F[P] === void 0) || (b[B] = uo(L, k, B, void 0, y, !0)) : delete b[B]);
            if (h !== k) for (const B in h) (_ && J(_, B)) || (delete h[B], (x = !0));
          } else if (8 & T) {
            const P = y.vnode.dynamicProps;
            for (let B = 0; B < P.length; B++) {
              let N = P[B];
              if (_n(y.emitsOptions, N)) continue;
              const Z = _[N];
              if (L)
                if (J(h, N)) Z !== h[N] && ((h[N] = Z), (x = !0));
                else {
                  const rt = Mt(N);
                  b[rt] = uo(L, k, rt, Z, y, !1);
                }
              else Z !== h[N] && ((h[N] = Z), (x = !0));
            }
          }
          x && Vt(y, 'set', '$attrs');
        })(u, p.props, C, v),
        ((y, _, F) => {
          const { vnode: w, slots: b } = y;
          let h = !0,
            T = Q;
          if (32 & w.shapeFlag) {
            const k = _._;
            k ? (F && k === 1 ? (h = !1) : (nt(b, _), F || k !== 1 || delete b._)) : ((h = !_.$stable), pr(_, b)),
              (T = _);
          } else _ && (dr(y, _), (T = { default: 1 }));
          if (h) for (const k in b) Ps(k) || k in T || delete b[k];
        })(u, p.children, v),
        ye(),
        Qo(),
        _e();
    },
    tt = (u, p, v, C, y, _, F, w, b = !1) => {
      const h = u && u.children,
        T = u ? u.shapeFlag : 0,
        k = p.children,
        { patchFlag: L, shapeFlag: x } = p;
      if (L > 0) {
        if (128 & L) return void wt(h, k, v, C, y, _, F, w, b);
        if (256 & L) return void bt(h, k, v, C, y, _, F, w, b);
      }
      8 & x
        ? (16 & T && jt(h, y, _), k !== h && c(v, k))
        : 16 & T
        ? 16 & x
          ? wt(h, k, v, C, y, _, F, w, b)
          : jt(h, y, _, !0)
        : (8 & T && c(v, ''), 16 & x && D(k, v, C, y, _, F, w, b));
    },
    bt = (u, p, v, C, y, _, F, w, b) => {
      const h = (u = u || pe).length,
        T = (p = p || pe).length,
        k = Math.min(h, T);
      let L;
      for (L = 0; L < k; L++) {
        const x = (p[L] = b ? Gt(p[L]) : Tt(p[L]));
        R(u[L], x, v, null, y, _, F, w, b);
      }
      h > T ? jt(u, y, _, !0, !1, k) : D(p, v, C, y, _, F, w, b, k);
    },
    wt = (u, p, v, C, y, _, F, w, b) => {
      let h = 0;
      const T = p.length;
      let k = u.length - 1,
        L = T - 1;
      for (; h <= k && h <= L; ) {
        const x = u[h],
          P = (p[h] = b ? Gt(p[h]) : Tt(p[h]));
        if (!se(x, P)) break;
        R(x, P, v, null, y, _, F, w, b), h++;
      }
      for (; h <= k && h <= L; ) {
        const x = u[k],
          P = (p[L] = b ? Gt(p[L]) : Tt(p[L]));
        if (!se(x, P)) break;
        R(x, P, v, null, y, _, F, w, b), k--, L--;
      }
      if (h > k) {
        if (h <= L) {
          const x = L + 1,
            P = x < T ? p[x].el : C;
          for (; h <= L; ) R(null, (p[h] = b ? Gt(p[h]) : Tt(p[h])), v, P, y, _, F, w, b), h++;
        }
      } else if (h > L) for (; h <= k; ) Lt(u[h], y, _, !0), h++;
      else {
        const x = h,
          P = h,
          B = new Map();
        for (h = P; h <= L; h++) {
          const st = (p[h] = b ? Gt(p[h]) : Tt(p[h]));
          st.key != null && B.set(st.key, h);
        }
        let N,
          Z = 0;
        const rt = L - P + 1;
        let vt = !1,
          Bo = 0;
        const Ee = new Array(rt);
        for (h = 0; h < rt; h++) Ee[h] = 0;
        for (h = x; h <= k; h++) {
          const st = u[h];
          if (Z >= rt) {
            Lt(st, y, _, !0);
            continue;
          }
          let ht;
          if (st.key != null) ht = B.get(st.key);
          else
            for (N = P; N <= L; N++)
              if (Ee[N - P] === 0 && se(st, p[N])) {
                ht = N;
                break;
              }
          ht === void 0
            ? Lt(st, y, _, !0)
            : ((Ee[ht - P] = h + 1), ht >= Bo ? (Bo = ht) : (vt = !0), R(st, p[ht], v, null, y, _, F, w, b), Z++);
        }
        const Ho = vt
          ? (function (st) {
              const ht = st.slice(),
                ft = [0];
              let Ht, Kn, xt, Dt, Je;
              const hi = st.length;
              for (Ht = 0; Ht < hi; Ht++) {
                const Ye = st[Ht];
                if (Ye !== 0) {
                  if (((Kn = ft[ft.length - 1]), st[Kn] < Ye)) {
                    (ht[Ht] = Kn), ft.push(Ht);
                    continue;
                  }
                  for (xt = 0, Dt = ft.length - 1; xt < Dt; )
                    (Je = (xt + Dt) >> 1), st[ft[Je]] < Ye ? (xt = Je + 1) : (Dt = Je);
                  Ye < st[ft[xt]] && (xt > 0 && (ht[Ht] = ft[xt - 1]), (ft[xt] = Ht));
                }
              }
              for (xt = ft.length, Dt = ft[xt - 1]; xt-- > 0; ) (ft[xt] = Dt), (Dt = ht[Dt]);
              return ft;
            })(Ee)
          : pe;
        for (N = Ho.length - 1, h = rt - 1; h >= 0; h--) {
          const st = P + h,
            ht = p[st],
            ft = st + 1 < T ? p[st + 1].el : C;
          Ee[h] === 0 ? R(null, ht, v, ft, y, _, F, w, b) : vt && (N < 0 || h !== Ho[N] ? Ct(ht, v, ft, 2) : N--);
        }
      }
    },
    Ct = (u, p, v, C, y = null) => {
      const { el: _, type: F, transition: w, children: b, shapeFlag: h } = u;
      if (6 & h) return void Ct(u.component.subTree, p, v, C);
      if (128 & h) return void u.suspense.move(p, v, C);
      if (64 & h) return void F.move(u, p, v, Se);
      if (F === dt) {
        n(_, p, v);
        for (let T = 0; T < b.length; T++) Ct(b[T], p, v, C);
        return void n(u.anchor, p, v);
      }
      if (F === Me)
        return void (({ el: T, anchor: k }, L, x) => {
          let P;
          for (; T && T !== k; ) (P = d(T)), n(T, L, x), (T = P);
          n(k, L, x);
        })(u, p, v);
      if (C !== 2 && 1 & h && w)
        if (C === 0) w.beforeEnter(_), n(_, p, v), gt(() => w.enter(_), y);
        else {
          const { leave: T, delayLeave: k, afterLeave: L } = w,
            x = () => n(_, p, v),
            P = () => {
              T(_, () => {
                x(), L && L();
              });
            };
          k ? k(_, x, P) : P();
        }
      else n(_, p, v);
    },
    Lt = (u, p, v, C = !1, y = !1) => {
      const { type: _, props: F, ref: w, children: b, dynamicChildren: h, shapeFlag: T, patchFlag: k, dirs: L } = u;
      if ((w != null && xn(w, null, v, u, !0), 256 & T)) return void p.ctx.deactivate(u);
      const x = 1 & T && L,
        P = !me(u);
      let B;
      if ((P && (B = F && F.onVnodeBeforeUnmount) && Et(B, p, u), 6 & T)) di(u.component, v, C);
      else {
        if (128 & T) return void u.suspense.unmount(v, C);
        x && Pt(u, null, p, 'beforeUnmount'),
          64 & T
            ? u.type.remove(u, p, v, y, Se, C)
            : h && (_ !== dt || (k > 0 && 64 & k))
            ? jt(h, p, v, !1, !0)
            : ((_ === dt && 384 & k) || (!y && 16 & T)) && jt(b, p, v),
          C && Uo(u);
      }
      ((P && (B = F && F.onVnodeUnmounted)) || x) &&
        gt(() => {
          B && Et(B, p, u), x && Pt(u, null, p, 'unmounted');
        }, v);
    },
    Uo = (u) => {
      const { type: p, el: v, anchor: C, transition: y } = u;
      if (p === dt) return void pi(v, C);
      if (p === Me)
        return void (({ el: F, anchor: w }) => {
          let b;
          for (; F && F !== w; ) (b = d(F)), o(F), (F = b);
          o(w);
        })(u);
      const _ = () => {
        o(v), y && !y.persisted && y.afterLeave && y.afterLeave();
      };
      if (1 & u.shapeFlag && y && !y.persisted) {
        const { leave: F, delayLeave: w } = y,
          b = () => F(v, _);
        w ? w(u.el, _, b) : b();
      } else _();
    },
    pi = (u, p) => {
      let v;
      for (; u !== p; ) (v = d(u)), o(u), (u = v);
      o(p);
    },
    di = (u, p, v) => {
      const { bum: C, scope: y, update: _, subTree: F, um: w } = u;
      C && un(C),
        y.stop(),
        _ && ((_.active = !1), Lt(F, u, p, v)),
        w && gt(w, p),
        gt(() => {
          u.isUnmounted = !0;
        }, p),
        p &&
          p.pendingBranch &&
          !p.isUnmounted &&
          u.asyncDep &&
          !u.asyncResolved &&
          u.suspenseId === p.pendingId &&
          (p.deps--, p.deps === 0 && p.resolve());
    },
    jt = (u, p, v, C = !1, y = !1, _ = 0) => {
      for (let F = _; F < u.length; F++) Lt(u[F], p, v, C, y);
    },
    Xe = (u) =>
      6 & u.shapeFlag ? Xe(u.component.subTree) : 128 & u.shapeFlag ? u.suspense.next() : d(u.anchor || u.el),
    Vo = (u, p, v) => {
      u == null ? p._vnode && Lt(p._vnode, null, null, !0) : R(p._vnode || null, u, p, null, null, null, v),
        Qo(),
        yn(),
        (p._vnode = u);
    },
    Se = { p: R, um: Lt, m: Ct, r: Uo, mt: ot, mc: D, pc: tt, pbc: U, n: Xe, o: t };
  let zn, qn;
  return e && ([zn, qn] = e(Se)), { render: Vo, hydrate: zn, createApp: Sl(Vo, zn) };
}
function ne({ effect: t, update: e }, n) {
  t.allowRecurse = e.allowRecurse = n;
}
function $o(t, e, n = !1) {
  const o = t.children,
    r = e.children;
  if (M(o) && M(r))
    for (let s = 0; s < o.length; s++) {
      const i = o[s];
      let l = r[s];
      1 & l.shapeFlag &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) && ((l = r[s] = Gt(r[s])), (l.el = i.el)), n || $o(i, l)),
        l.type === we && (l.el = i.el);
    }
}
const Oe = (t) => t && (t.disabled || t.disabled === ''),
  hr = (t) => typeof SVGElement < 'u' && t instanceof SVGElement,
  Yn = (t, e) => {
    const n = t && t.to;
    return et(n) ? (e ? e(n) : null) : n;
  };
function ln(t, e, n, { o: { insert: o }, m: r }, s = 2) {
  s === 0 && o(t.targetAnchor, e, n);
  const { el: i, anchor: l, shapeFlag: a, children: c, props: f } = t,
    d = s === 2;
  if ((d && o(i, e, n), (!d || Oe(f)) && 16 & a)) for (let g = 0; g < c.length; g++) r(c[g], e, n, 2);
  d && o(l, e, n);
}
const ic = {
  __isTeleport: !0,
  process(t, e, n, o, r, s, i, l, a, c) {
    const {
        mc: f,
        pc: d,
        pbc: g,
        o: { insert: O, querySelector: R, createText: $ },
      } = c,
      m = Oe(e.props);
    let { shapeFlag: S, children: j, dynamicChildren: K } = e;
    if (t == null) {
      const V = (e.el = $('')),
        D = (e.anchor = $(''));
      O(V, n, o), O(D, n, o);
      const G = (e.target = Yn(e.props, R)),
        U = (e.targetAnchor = $(''));
      G && (O(U, G), (i = i || hr(G)));
      const I = (W, z) => {
        16 & S && f(j, W, z, r, s, i, l, a);
      };
      m ? I(n, D) : G && I(G, U);
    } else {
      e.el = t.el;
      const V = (e.anchor = t.anchor),
        D = (e.target = t.target),
        G = (e.targetAnchor = t.targetAnchor),
        U = Oe(t.props),
        I = U ? n : D,
        W = U ? V : G;
      if (
        ((i = i || hr(D)),
        K ? (g(t.dynamicChildren, K, I, r, s, i, l), $o(t, e, !0)) : a || d(t, e, I, W, r, s, i, l, !1),
        m)
      )
        U || ln(e, n, V, c, 1);
      else if ((e.props && e.props.to) !== (t.props && t.props.to)) {
        const z = (e.target = Yn(e.props, R));
        z && ln(e, z, null, c, 0);
      } else U && ln(e, D, G, c, 1);
    }
    gr(e);
  },
  remove(t, e, n, o, { um: r, o: { remove: s } }, i) {
    const { shapeFlag: l, children: a, anchor: c, targetAnchor: f, target: d, props: g } = t;
    if ((d && s(f), (i || !Oe(g)) && (s(c), 16 & l)))
      for (let O = 0; O < a.length; O++) {
        const R = a[O];
        r(R, e, n, !0, !!R.dynamicChildren);
      }
  },
  move: ln,
  hydrate: function (t, e, n, o, r, s, { o: { nextSibling: i, parentNode: l, querySelector: a } }, c) {
    const f = (e.target = Yn(e.props, a));
    if (f) {
      const d = f._lpa || f.firstChild;
      if (16 & e.shapeFlag)
        if (Oe(e.props)) (e.anchor = c(i(t), e, l(t), n, o, r, s)), (e.targetAnchor = d);
        else {
          e.anchor = i(t);
          let g = d;
          for (; g; )
            if (((g = i(g)), g && g.nodeType === 8 && g.data === 'teleport anchor')) {
              (e.targetAnchor = g), (f._lpa = e.targetAnchor && i(e.targetAnchor));
              break;
            }
          c(d, e, f, n, o, r, s);
        }
      gr(e);
    }
    return e.anchor && i(e.anchor);
  },
};
function gr(t) {
  const e = t.ctx;
  if (e && e.ut) {
    let n = t.children[0].el;
    for (; n !== t.targetAnchor; ) n.nodeType === 1 && n.setAttribute('data-v-owner', e.uid), (n = n.nextSibling);
    e.ut();
  }
}
const dt = Symbol.for('v-fgt'),
  we = Symbol.for('v-txt'),
  _t = Symbol.for('v-cmt'),
  Me = Symbol.for('v-stc'),
  je = [];
let Ot = null;
function Is(t = !1) {
  je.push((Ot = t ? null : []));
}
function Ol() {
  je.pop(), (Ot = je[je.length - 1] || null);
}
let qe = 1;
function mr(t) {
  qe += t;
}
function Ms(t) {
  return (t.dynamicChildren = qe > 0 ? Ot || pe : null), Ol(), qe > 0 && Ot && Ot.push(t), t;
}
function lc(t, e, n, o, r, s) {
  return Ms(Us(t, e, n, o, r, s, !0));
}
function js(t, e, n, o, r) {
  return Ms(at(t, e, n, o, r, !0));
}
function Sn(t) {
  return !!t && t.__v_isVNode === !0;
}
function se(t, e) {
  return t.type === e.type && t.key === e.key;
}
const En = '__vInternal',
  Ns = ({ key: t }) => t ?? null,
  dn = ({ ref: t, ref_key: e, ref_for: n }) => (
    typeof t == 'number' && (t = '' + t),
    t != null ? (et(t) || lt(t) || q(t) ? { i: ct, r: t, k: e, f: !!n } : t) : null
  );
function Us(t, e = null, n = null, o = 0, r = null, s = t === dt ? 0 : 1, i = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && Ns(e),
    ref: e && dn(e),
    scopeId: jn,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: ct,
  };
  return (
    l ? (Io(a, n), 128 & s && t.normalize(a)) : n && (a.shapeFlag |= et(n) ? 8 : 16),
    qe > 0 && !i && Ot && (a.patchFlag > 0 || 6 & s) && a.patchFlag !== 32 && Ot.push(a),
    a
  );
}
const at = function (t, e = null, n = null, o = 0, r = null, s = !1) {
  if (((t && t !== As) || (t = _t), Sn(t))) {
    const a = te(t, e, !0);
    return (
      n && Io(a, n),
      qe > 0 && !s && Ot && (6 & a.shapeFlag ? (Ot[Ot.indexOf(t)] = a) : Ot.push(a)),
      (a.patchFlag |= -2),
      a
    );
  }
  (i = t), q(i) && '__vccOpts' in i && (t = t.__vccOpts);
  var i;
  if (e) {
    e = Fl(e);
    let { class: a, style: c } = e;
    a && !et(a) && (e.class = Ln(a)), Y(c) && (as(c) && !M(c) && (c = nt({}, c)), (e.style = Fn(c)));
  }
  const l = et(t) ? 1 : al(t) ? 128 : ((a) => a.__isTeleport)(t) ? 64 : Y(t) ? 4 : q(t) ? 2 : 0;
  return Us(t, e, n, o, r, l, s, !0);
};
function Fl(t) {
  return t ? (as(t) || En in t ? nt({}, t) : t) : null;
}
function te(t, e, n = !1) {
  const { props: o, ref: r, patchFlag: s, children: i } = t,
    l = e ? Ll(o || {}, e) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: l,
    key: l && Ns(l),
    ref: e && e.ref ? (n && r ? (M(r) ? r.concat(dn(e)) : [r, dn(e)]) : dn(e)) : r,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: i,
    target: t.target,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    patchFlag: e && t.type !== dt ? (s === -1 ? 16 : 16 | s) : s,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: t.transition,
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && te(t.ssContent),
    ssFallback: t.ssFallback && te(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce,
  };
}
function Vs(t = ' ', e = 0) {
  return at(we, null, t, e);
}
function ac(t, e) {
  const n = at(Me, null, t);
  return (n.staticCount = e), n;
}
function cc(t = '', e = !1) {
  return e ? (Is(), js(_t, null, t)) : at(_t, null, t);
}
function Tt(t) {
  return t == null || typeof t == 'boolean'
    ? at(_t)
    : M(t)
    ? at(dt, null, t.slice())
    : typeof t == 'object'
    ? Gt(t)
    : at(we, null, String(t));
}
function Gt(t) {
  return (t.el === null && t.patchFlag !== -1) || t.memo ? t : te(t);
}
function Io(t, e) {
  let n = 0;
  const { shapeFlag: o } = t;
  if (e == null) e = null;
  else if (M(e)) n = 16;
  else if (typeof e == 'object') {
    if (65 & o) {
      const r = e.default;
      return void (r && (r._c && (r._d = !1), Io(t, r()), r._c && (r._d = !0)));
    }
    {
      n = 32;
      const r = e._;
      r || En in e
        ? r === 3 && ct && (ct.slots._ === 1 ? (e._ = 1) : ((e._ = 2), (t.patchFlag |= 1024)))
        : (e._ctx = ct);
    }
  } else
    q(e) ? ((e = { default: e, _ctx: ct }), (n = 32)) : ((e = String(e)), 64 & o ? ((n = 16), (e = [Vs(e)])) : (n = 8));
  (t.children = e), (t.shapeFlag |= n);
}
function Ll(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const o = t[n];
    for (const r in o)
      if (r === 'class') e.class !== o.class && (e.class = Ln([e.class, o.class]));
      else if (r === 'style') e.style = Fn([e.style, o.style]);
      else if (Ke(r)) {
        const s = e[r],
          i = o[r];
        !i || s === i || (M(s) && s.includes(i)) || (e[r] = s ? [].concat(s, i) : i);
      } else r !== '' && (e[r] = o[r]);
  }
  return e;
}
function Et(t, e, n, o = null) {
  Ft(t, e, 7, [n, o]);
}
const Pl = Fs();
let $l = 0,
  it = null;
const Mo = () => it || ct;
let jo;
jo = (t) => {
  it = t;
};
const Ce = (t) => {
    jo(t), t.scope.on();
  },
  ue = () => {
    it && it.scope.off(), jo(null);
  };
function Bs(t) {
  return 4 & t.vnode.shapeFlag;
}
let vr,
  kn = !1;
function yr(t, e, n) {
  q(e) ? (t.render = e) : Y(e) && (t.setupState = fs(e)), Hs(t, n);
}
function Hs(t, e, n) {
  const o = t.type;
  if (!t.render) {
    if (!e && vr && !o.render) {
      const r = o.template || Lo(t).template;
      if (r) {
        const { isCustomElement: s, compilerOptions: i } = t.appContext.config,
          { delimiters: l, compilerOptions: a } = o,
          c = nt(nt({ isCustomElement: s, delimiters: l }, i), a);
        o.render = vr(r, c);
      }
    }
    t.render = o.render || Yt;
  }
  Ce(t), ye(), wl(t), _e(), ue();
}
function Ds(t) {
  const e = (n) => {
    t.exposed = n || {};
  };
  return {
    get attrs() {
      return (function (n) {
        return n.attrsProxy || (n.attrsProxy = new Proxy(n.attrs, { get: (o, r) => (mt(n, 0, '$attrs'), o[r]) }));
      })(t);
    },
    slots: t.slots,
    emit: t.emit,
    expose: e,
  };
}
function Dn(t) {
  if (t.exposed)
    return (
      t.exposeProxy ||
      (t.exposeProxy = new Proxy(fs(Pe(t.exposed)), {
        get: (e, n) => (n in e ? e[n] : n in $e ? $e[n](t) : void 0),
        has: (e, n) => n in e || n in $e,
      }))
    );
}
function Il(t, e = !0) {
  return q(t) ? t.displayName || t.name : t.name || (e && t.__name);
}
const At = (t, e) =>
  (function (n, o, r = !1) {
    let s, i;
    const l = q(n);
    return l ? ((s = n), (i = Yt)) : ((s = n.get), (i = n.set)), new tl(s, i, l || !i, r);
  })(t, 0, kn);
function fo(t, e, n) {
  const o = arguments.length;
  return o === 2
    ? Y(e) && !M(e)
      ? Sn(e)
        ? at(t, null, [e])
        : at(t, e)
      : at(t, null, e)
    : (o > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : o === 3 && Sn(n) && (n = [n]), at(t, e, n));
}
const Ml = '3.3.4',
  ie = typeof document < 'u' ? document : null,
  _r = ie && ie.createElement('template'),
  jl = {
    insert: (t, e, n) => {
      e.insertBefore(t, n || null);
    },
    remove: (t) => {
      const e = t.parentNode;
      e && e.removeChild(t);
    },
    createElement: (t, e, n, o) => {
      const r = e ? ie.createElementNS('http://www.w3.org/2000/svg', t) : ie.createElement(t, n ? { is: n } : void 0);
      return t === 'select' && o && o.multiple != null && r.setAttribute('multiple', o.multiple), r;
    },
    createText: (t) => ie.createTextNode(t),
    createComment: (t) => ie.createComment(t),
    setText: (t, e) => {
      t.nodeValue = e;
    },
    setElementText: (t, e) => {
      t.textContent = e;
    },
    parentNode: (t) => t.parentNode,
    nextSibling: (t) => t.nextSibling,
    querySelector: (t) => ie.querySelector(t),
    setScopeId(t, e) {
      t.setAttribute(e, '');
    },
    insertStaticContent(t, e, n, o, r, s) {
      const i = n ? n.previousSibling : e.lastChild;
      if (r && (r === s || r.nextSibling)) for (; e.insertBefore(r.cloneNode(!0), n), r !== s && (r = r.nextSibling); );
      else {
        _r.innerHTML = o ? `<svg>${t}</svg>` : t;
        const l = _r.content;
        if (o) {
          const a = l.firstChild;
          for (; a.firstChild; ) l.appendChild(a.firstChild);
          l.removeChild(a);
        }
        e.insertBefore(l, n);
      }
      return [i ? i.nextSibling : e.firstChild, n ? n.previousSibling : e.lastChild];
    },
  },
  br = /\s*!important$/;
function po(t, e, n) {
  if (M(n)) n.forEach((o) => po(t, e, o));
  else if ((n == null && (n = ''), e.startsWith('--'))) t.setProperty(e, n);
  else {
    const o = (function (r, s) {
      const i = Zn[s];
      if (i) return i;
      let l = Mt(s);
      if (l !== 'filter' && l in r) return (Zn[s] = l);
      l = On(l);
      for (let a = 0; a < wr.length; a++) {
        const c = wr[a] + l;
        if (c in r) return (Zn[s] = c);
      }
      return s;
    })(t, e);
    br.test(n) ? t.setProperty(fe(o), n.replace(br, ''), 'important') : (t[o] = n);
  }
}
const wr = ['Webkit', 'Moz', 'ms'],
  Zn = {},
  Cr = 'http://www.w3.org/1999/xlink';
function Jt(t, e, n, o) {
  t.addEventListener(e, n, o);
}
function Nl(t, e, n, o, r = null) {
  const s = t._vei || (t._vei = {}),
    i = s[e];
  if (o && i) i.value = o;
  else {
    const [l, a] = (function (c) {
      let f;
      if (xr.test(c)) {
        let g;
        for (f = {}; (g = c.match(xr)); ) (c = c.slice(0, c.length - g[0].length)), (f[g[0].toLowerCase()] = !0);
      }
      return [c[2] === ':' ? c.slice(3) : fe(c.slice(2)), f];
    })(e);
    if (o) {
      const c = (s[e] = (function (f, d) {
        const g = (O) => {
          if (O._vts) {
            if (O._vts <= g.attached) return;
          } else O._vts = Date.now();
          Ft(
            (function (R, $) {
              if (M($)) {
                const m = R.stopImmediatePropagation;
                return (
                  (R.stopImmediatePropagation = () => {
                    m.call(R), (R._stopped = !0);
                  }),
                  $.map((S) => (j) => !j._stopped && S && S(j))
                );
              }
              return $;
            })(O, g.value),
            d,
            5,
            [O],
          );
        };
        return (g.value = f), (g.attached = (() => Qn || (Ul.then(() => (Qn = 0)), (Qn = Date.now())))()), g;
      })(o, r));
      Jt(t, l, c, a);
    } else
      i &&
        ((function (c, f, d, g) {
          c.removeEventListener(f, d, g);
        })(t, l, i, a),
        (s[e] = void 0));
  }
}
const xr = /(?:Once|Passive|Capture)$/;
let Qn = 0;
const Ul = Promise.resolve(),
  Sr = /^on[a-z]/,
  qt = 'transition',
  Ae = 'animation',
  Ws = (t, { slots: e }) => fo(fl, qs(t), e);
Ws.displayName = 'Transition';
const zs = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  Vl = (Ws.props = nt({}, ws, zs)),
  oe = (t, e = []) => {
    M(t) ? t.forEach((n) => n(...e)) : t && t(...e);
  },
  Er = (t) => !!t && (M(t) ? t.some((e) => e.length > 1) : t.length > 1);
function qs(t) {
  const e = {};
  for (const A in t) A in zs || (e[A] = t[A]);
  if (t.css === !1) return e;
  const {
      name: n = 'v',
      type: o,
      duration: r,
      enterFromClass: s = `${n}-enter-from`,
      enterActiveClass: i = `${n}-enter-active`,
      enterToClass: l = `${n}-enter-to`,
      appearFromClass: a = s,
      appearActiveClass: c = i,
      appearToClass: f = l,
      leaveFromClass: d = `${n}-leave-from`,
      leaveActiveClass: g = `${n}-leave-active`,
      leaveToClass: O = `${n}-leave-to`,
    } = t,
    R = (function (A) {
      if (A == null) return null;
      if (Y(A)) return [to(A.enter), to(A.leave)];
      {
        const E = to(A);
        return [E, E];
      }
    })(r),
    $ = R && R[0],
    m = R && R[1],
    {
      onBeforeEnter: S,
      onEnter: j,
      onEnterCancelled: K,
      onLeave: V,
      onLeaveCancelled: D,
      onBeforeAppear: G = S,
      onAppear: U = j,
      onAppearCancelled: I = K,
    } = e,
    W = (A, E, H) => {
      Kt(A, E ? f : l), Kt(A, E ? c : i), H && H();
    },
    z = (A, E) => {
      (A._isLeaving = !1), Kt(A, d), Kt(A, O), Kt(A, g), E && E();
    },
    ot = (A) => (E, H) => {
      const tt = A ? U : j,
        bt = () => W(E, A, H);
      oe(tt, [E, bt]),
        kr(() => {
          Kt(E, A ? a : s), Nt(E, A ? f : l), Er(tt) || Ar(E, o, $, bt);
        });
    };
  return nt(e, {
    onBeforeEnter(A) {
      oe(S, [A]), Nt(A, s), Nt(A, i);
    },
    onBeforeAppear(A) {
      oe(G, [A]), Nt(A, a), Nt(A, c);
    },
    onEnter: ot(!1),
    onAppear: ot(!0),
    onLeave(A, E) {
      A._isLeaving = !0;
      const H = () => z(A, E);
      Nt(A, d),
        Gs(),
        Nt(A, g),
        kr(() => {
          A._isLeaving && (Kt(A, d), Nt(A, O), Er(V) || Ar(A, o, m, H));
        }),
        oe(V, [A, H]);
    },
    onEnterCancelled(A) {
      W(A, !1), oe(K, [A]);
    },
    onAppearCancelled(A) {
      W(A, !0), oe(I, [A]);
    },
    onLeaveCancelled(A) {
      z(A), oe(D, [A]);
    },
  });
}
function to(t) {
  return bi(t);
}
function Nt(t, e) {
  e.split(/\s+/).forEach((n) => n && t.classList.add(n)), (t._vtc || (t._vtc = new Set())).add(e);
}
function Kt(t, e) {
  e.split(/\s+/).forEach((o) => o && t.classList.remove(o));
  const { _vtc: n } = t;
  n && (n.delete(e), n.size || (t._vtc = void 0));
}
function kr(t) {
  requestAnimationFrame(() => {
    requestAnimationFrame(t);
  });
}
let Bl = 0;
function Ar(t, e, n, o) {
  const r = (t._endId = ++Bl),
    s = () => {
      r === t._endId && o();
    };
  if (n) return setTimeout(s, n);
  const { type: i, timeout: l, propCount: a } = Ks(t, e);
  if (!i) return o();
  const c = i + 'end';
  let f = 0;
  const d = () => {
      t.removeEventListener(c, g), s();
    },
    g = (O) => {
      O.target === t && ++f >= a && d();
    };
  setTimeout(() => {
    f < a && d();
  }, l + 1),
    t.addEventListener(c, g);
}
function Ks(t, e) {
  const n = window.getComputedStyle(t),
    o = (O) => (n[O] || '').split(', '),
    r = o(`${qt}Delay`),
    s = o(`${qt}Duration`),
    i = Tr(r, s),
    l = o(`${Ae}Delay`),
    a = o(`${Ae}Duration`),
    c = Tr(l, a);
  let f = null,
    d = 0,
    g = 0;
  return (
    e === qt
      ? i > 0 && ((f = qt), (d = i), (g = s.length))
      : e === Ae
      ? c > 0 && ((f = Ae), (d = c), (g = a.length))
      : ((d = Math.max(i, c)), (f = d > 0 ? (i > c ? qt : Ae) : null), (g = f ? (f === qt ? s.length : a.length) : 0)),
    {
      type: f,
      timeout: d,
      propCount: g,
      hasTransform: f === qt && /\b(transform|all)(,|$)/.test(o(`${qt}Property`).toString()),
    }
  );
}
function Tr(t, e) {
  for (; t.length < e.length; ) t = t.concat(t);
  return Math.max(...e.map((n, o) => Rr(n) + Rr(t[o])));
}
function Rr(t) {
  return 1e3 * Number(t.slice(0, -1).replace(',', '.'));
}
function Gs() {
  return document.body.offsetHeight;
}
const Xs = new WeakMap(),
  Js = new WeakMap(),
  Hl = {
    name: 'TransitionGroup',
    props: nt({}, Vl, { tag: String, moveClass: String }),
    setup(t, { slots: e }) {
      const n = Mo(),
        o = bs();
      let r, s;
      return (
        Es(() => {
          if (!r.length) return;
          const i = t.moveClass || `${t.name || 'v'}-move`;
          if (
            !(function (a, c, f) {
              const d = a.cloneNode();
              a._vtc &&
                a._vtc.forEach((R) => {
                  R.split(/\s+/).forEach(($) => $ && d.classList.remove($));
                }),
                f.split(/\s+/).forEach((R) => R && d.classList.add(R)),
                (d.style.display = 'none');
              const g = c.nodeType === 1 ? c : c.parentNode;
              g.appendChild(d);
              const { hasTransform: O } = Ks(d);
              return g.removeChild(d), O;
            })(r[0].el, n.vnode.el, i)
          )
            return;
          r.forEach(Dl), r.forEach(Wl);
          const l = r.filter(zl);
          Gs(),
            l.forEach((a) => {
              const c = a.el,
                f = c.style;
              Nt(c, i), (f.transform = f.webkitTransform = f.transitionDuration = '');
              const d = (c._moveCb = (g) => {
                (g && g.target !== c) ||
                  (g && !/transform$/.test(g.propertyName)) ||
                  (c.removeEventListener('transitionend', d), (c._moveCb = null), Kt(c, i));
              });
              c.addEventListener('transitionend', d);
            });
        }),
        () => {
          const i = X(t),
            l = qs(i);
          let a = i.tag || dt;
          (r = s), (s = e.default ? Ro(e.default()) : []);
          for (let c = 0; c < s.length; c++) {
            const f = s[c];
            f.key != null && ze(f, We(f, l, o, n));
          }
          if (r)
            for (let c = 0; c < r.length; c++) {
              const f = r[c];
              ze(f, We(f, l, o, n)), Xs.set(f, f.el.getBoundingClientRect());
            }
          return at(a, null, s);
        }
      );
    },
  },
  uc = Hl;
function Dl(t) {
  const e = t.el;
  e._moveCb && e._moveCb(), e._enterCb && e._enterCb();
}
function Wl(t) {
  Js.set(t, t.el.getBoundingClientRect());
}
function zl(t) {
  const e = Xs.get(t),
    n = Js.get(t),
    o = e.left - n.left,
    r = e.top - n.top;
  if (o || r) {
    const s = t.el.style;
    return (s.transform = s.webkitTransform = `translate(${o}px,${r}px)`), (s.transitionDuration = '0s'), t;
  }
}
const xe = (t) => {
  const e = t.props['onUpdate:modelValue'] || !1;
  return M(e) ? (n) => un(e, n) : e;
};
function ql(t) {
  t.target.composing = !0;
}
function Or(t) {
  const e = t.target;
  e.composing && ((e.composing = !1), e.dispatchEvent(new Event('input')));
}
const fc = {
    created(t, { modifiers: { lazy: e, trim: n, number: o } }, r) {
      t._assign = xe(r);
      const s = o || (r.props && r.props.type === 'number');
      Jt(t, e ? 'change' : 'input', (i) => {
        if (i.target.composing) return;
        let l = t.value;
        n && (l = l.trim()), s && (l = no(l)), t._assign(l);
      }),
        n &&
          Jt(t, 'change', () => {
            t.value = t.value.trim();
          }),
        e || (Jt(t, 'compositionstart', ql), Jt(t, 'compositionend', Or), Jt(t, 'change', Or));
    },
    mounted(t, { value: e }) {
      t.value = e ?? '';
    },
    beforeUpdate(t, { value: e, modifiers: { lazy: n, trim: o, number: r } }, s) {
      if (
        ((t._assign = xe(s)),
        t.composing ||
          (document.activeElement === t &&
            t.type !== 'range' &&
            (n || (o && t.value.trim() === e) || ((r || t.type === 'number') && no(t.value) === e))))
      )
        return;
      const i = e ?? '';
      t.value !== i && (t.value = i);
    },
  },
  pc = {
    deep: !0,
    created(t, e, n) {
      (t._assign = xe(n)),
        Jt(t, 'change', () => {
          const o = t._modelValue,
            r = Ys(t),
            s = t.checked,
            i = t._assign;
          if (M(o)) {
            const l = Kr(o, r),
              a = l !== -1;
            if (s && !a) i(o.concat(r));
            else if (!s && a) {
              const c = [...o];
              c.splice(l, 1), i(c);
            }
          } else if (Tn(o)) {
            const l = new Set(o);
            s ? l.add(r) : l.delete(r), i(l);
          } else i(Zs(t, s));
        });
    },
    mounted: Fr,
    beforeUpdate(t, e, n) {
      (t._assign = xe(n)), Fr(t, e, n);
    },
  };
function Fr(t, { value: e, oldValue: n }, o) {
  (t._modelValue = e),
    M(e)
      ? (t.checked = Kr(e, o.props.value) > -1)
      : Tn(e)
      ? (t.checked = e.has(o.props.value))
      : e !== n && (t.checked = ve(e, Zs(t, !0)));
}
const dc = {
  created(t, { value: e }, n) {
    (t.checked = ve(e, n.props.value)),
      (t._assign = xe(n)),
      Jt(t, 'change', () => {
        t._assign(Ys(t));
      });
  },
  beforeUpdate(t, { value: e, oldValue: n }, o) {
    (t._assign = xe(o)), e !== n && (t.checked = ve(e, o.props.value));
  },
};
function Ys(t) {
  return '_value' in t ? t._value : t.value;
}
function Zs(t, e) {
  const n = e ? '_trueValue' : '_falseValue';
  return n in t ? t[n] : e;
}
const Kl = ['ctrl', 'shift', 'alt', 'meta'],
  Gl = {
    stop: (t) => t.stopPropagation(),
    prevent: (t) => t.preventDefault(),
    self: (t) => t.target !== t.currentTarget,
    ctrl: (t) => !t.ctrlKey,
    shift: (t) => !t.shiftKey,
    alt: (t) => !t.altKey,
    meta: (t) => !t.metaKey,
    left: (t) => 'button' in t && t.button !== 0,
    middle: (t) => 'button' in t && t.button !== 1,
    right: (t) => 'button' in t && t.button !== 2,
    exact: (t, e) => Kl.some((n) => t[`${n}Key`] && !e.includes(n)),
  },
  hc =
    (t, e) =>
    (n, ...o) => {
      for (let r = 0; r < e.length; r++) {
        const s = Gl[e[r]];
        if (s && s(n, e)) return;
      }
      return t(n, ...o);
    },
  Xl = {
    esc: 'escape',
    space: ' ',
    up: 'arrow-up',
    left: 'arrow-left',
    right: 'arrow-right',
    down: 'arrow-down',
    delete: 'backspace',
  },
  gc = (t, e) => (n) => {
    if (!('key' in n)) return;
    const o = fe(n.key);
    return e.some((r) => r === o || Xl[r] === o) ? t(n) : void 0;
  },
  mc = {
    beforeMount(t, { value: e }, { transition: n }) {
      (t._vod = t.style.display === 'none' ? '' : t.style.display), n && e ? n.beforeEnter(t) : Te(t, e);
    },
    mounted(t, { value: e }, { transition: n }) {
      n && e && n.enter(t);
    },
    updated(t, { value: e, oldValue: n }, { transition: o }) {
      !e != !n &&
        (o
          ? e
            ? (o.beforeEnter(t), Te(t, !0), o.enter(t))
            : o.leave(t, () => {
                Te(t, !1);
              })
          : Te(t, e));
    },
    beforeUnmount(t, { value: e }) {
      Te(t, e);
    },
  };
function Te(t, e) {
  t.style.display = e ? t._vod : 'none';
}
const Qs = nt(
  {
    patchProp: (t, e, n, o, r = !1, s, i, l, a) => {
      e === 'class'
        ? (function (c, f, d) {
            const g = c._vtc;
            g && (f = (f ? [f, ...g] : [...g]).join(' ')),
              f == null ? c.removeAttribute('class') : d ? c.setAttribute('class', f) : (c.className = f);
          })(t, o, r)
        : e === 'style'
        ? (function (c, f, d) {
            const g = c.style,
              O = et(d);
            if (d && !O) {
              if (f && !et(f)) for (const R in f) d[R] == null && po(g, R, '');
              for (const R in d) po(g, R, d[R]);
            } else {
              const R = g.display;
              O ? f !== d && (g.cssText = d) : f && c.removeAttribute('style'), '_vod' in c && (g.display = R);
            }
          })(t, n, o)
        : Ke(e)
        ? mo(e) || Nl(t, e, 0, o, i)
        : (
            e[0] === '.'
              ? ((e = e.slice(1)), 1)
              : e[0] === '^'
              ? ((e = e.slice(1)), 0)
              : (function (c, f, d, g) {
                  return g
                    ? f === 'innerHTML' || f === 'textContent' || !!(f in c && Sr.test(f) && q(d))
                    : f === 'spellcheck' ||
                      f === 'draggable' ||
                      f === 'translate' ||
                      f === 'form' ||
                      (f === 'list' && c.tagName === 'INPUT') ||
                      (f === 'type' && c.tagName === 'TEXTAREA') ||
                      (Sr.test(f) && et(d))
                    ? !1
                    : f in c;
                })(t, e, o, r)
          )
        ? (function (c, f, d, g, O, R, $) {
            if (f === 'innerHTML' || f === 'textContent') return g && $(g, O, R), void (c[f] = d ?? '');
            const m = c.tagName;
            if (f === 'value' && m !== 'PROGRESS' && !m.includes('-')) {
              c._value = d;
              const j = d ?? '';
              return (
                (m === 'OPTION' ? c.getAttribute('value') : c.value) !== j && (c.value = j),
                void (d == null && c.removeAttribute(f))
              );
            }
            let S = !1;
            if (d === '' || d == null) {
              const j = typeof c[f];
              j === 'boolean'
                ? (d = zo(d))
                : d == null && j === 'string'
                ? ((d = ''), (S = !0))
                : j === 'number' && ((d = 0), (S = !0));
            }
            try {
              c[f] = d;
            } catch {}
            S && c.removeAttribute(f);
          })(t, e, o, s, i, l, a)
        : (e === 'true-value' ? (t._trueValue = o) : e === 'false-value' && (t._falseValue = o),
          (function (c, f, d, g, O) {
            if (g && f.startsWith('xlink:'))
              d == null ? c.removeAttributeNS(Cr, f.slice(6, f.length)) : c.setAttributeNS(Cr, f, d);
            else {
              const R = ki(f);
              d == null || (R && !zo(d)) ? c.removeAttribute(f) : c.setAttribute(f, R ? '' : d);
            }
          })(t, e, o, r));
    },
  },
  jl,
);
let Ne,
  Lr = !1;
function ti() {
  return Ne || (Ne = Tl(Qs));
}
function Jl() {
  return (Ne = Lr ? Ne : Rl(Qs)), (Lr = !0), Ne;
}
const vc = (...t) => {
    ti().render(...t);
  },
  yc = (...t) => {
    const e = ti().createApp(...t),
      { mount: n } = e;
    return (
      (e.mount = (o) => {
        const r = ei(o);
        if (!r) return;
        const s = e._component;
        q(s) || s.render || s.template || (s.template = r.innerHTML), (r.innerHTML = '');
        const i = n(r, !1, r instanceof SVGElement);
        return r instanceof Element && (r.removeAttribute('v-cloak'), r.setAttribute('data-v-app', '')), i;
      }),
      e
    );
  },
  _c = (...t) => {
    const e = Jl().createApp(...t),
      { mount: n } = e;
    return (
      (e.mount = (o) => {
        const r = ei(o);
        if (r) return n(r, !0, r instanceof SVGElement);
      }),
      e
    );
  };
function ei(t) {
  return et(t) ? document.querySelector(t) : t;
}
const bc = (t, e) => {
    const n = t.__vccOpts || t;
    for (const [o, r] of e) n[o] = r;
    return n;
  },
  Yl = () => {},
  Zl = Object.prototype.hasOwnProperty,
  wc = (t, e) => Zl.call(t, e),
  Ql = Array.isArray,
  Cc = (t) => ni(t) === '[object Date]',
  ho = (t) => typeof t == 'function',
  xc = (t) => typeof t == 'string',
  ta = (t) => typeof t == 'symbol',
  ea = (t) => t !== null && typeof t == 'object',
  Sc = (t) => ea(t) && ho(t.then) && ho(t.catch),
  na = Object.prototype.toString,
  ni = (t) => na.call(t),
  Ec = (t) => ni(t).slice(8, -1),
  No = (t) => {
    const e = Object.create(null);
    return (n) => e[n] || (e[n] = t(n));
  },
  oa = /-(\w)/g,
  kc = No((t) => t.replace(oa, (e, n) => (n ? n.toUpperCase() : ''))),
  ra = /\B([A-Z])/g,
  Ac = No((t) => t.replace(ra, '-$1').toLowerCase()),
  Tc = No((t) => t.charAt(0).toUpperCase() + t.slice(1));
let sa;
function ia(t, e = sa) {
  e && e.active && e.effects.push(t);
}
const la = (t) => {
    const e = new Set(t);
    return (e.w = 0), (e.n = 0), e;
  },
  oi = (t) => (t.w & ee) > 0,
  ri = (t) => (t.n & ee) > 0,
  aa = ({ deps: t }) => {
    if (t.length) for (let e = 0; e < t.length; e++) t[e].w |= ee;
  },
  ca = (t) => {
    const { deps: e } = t;
    if (e.length) {
      let n = 0;
      for (let o = 0; o < e.length; o++) {
        const r = e[o];
        oi(r) && !ri(r) ? r.delete(t) : (e[n++] = r), (r.w &= ~ee), (r.n &= ~ee);
      }
      e.length = n;
    }
  };
let Fe = 0,
  ee = 1;
const go = 30;
let It;
class ua {
  constructor(e, n = null, o) {
    (this.fn = e), (this.scheduler = n), (this.active = !0), (this.deps = []), (this.parent = void 0), ia(this, o);
  }
  run() {
    if (!this.active) return this.fn();
    let e = It,
      n = hn;
    for (; e; ) {
      if (e === this) return;
      e = e.parent;
    }
    try {
      return (this.parent = It), (It = this), (hn = !0), (ee = 1 << ++Fe), Fe <= go ? aa(this) : Pr(this), this.fn();
    } finally {
      Fe <= go && ca(this),
        (ee = 1 << --Fe),
        (It = this.parent),
        (hn = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    It === this ? (this.deferStop = !0) : this.active && (Pr(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function Pr(t) {
  const { deps: e } = t;
  if (e.length) {
    for (let n = 0; n < e.length; n++) e[n].delete(t);
    e.length = 0;
  }
}
let hn = !0;
function fa(t, e) {
  let n = !1;
  Fe <= go ? ri(t) || ((t.n |= ee), (n = !oi(t))) : (n = !t.has(It)), n && (t.add(It), It.deps.push(t));
}
function pa(t, e) {
  const n = Ql(t) ? t : [...t];
  for (const o of n) o.computed && $r(o);
  for (const o of n) o.computed || $r(o);
}
function $r(t, e) {
  (t !== It || t.allowRecurse) && (t.scheduler ? t.scheduler() : t.run());
}
new Set(
  Object.getOwnPropertyNames(Symbol)
    .filter((t) => t !== 'arguments' && t !== 'caller')
    .map((t) => Symbol[t])
    .filter(ta),
);
function Wn(t) {
  const e = t && t.__v_raw;
  return e ? Wn(e) : t;
}
function da(t) {
  hn && It && ((t = Wn(t)), fa(t.dep || (t.dep = la())));
}
function ha(t, e) {
  t = Wn(t);
  const n = t.dep;
  n && pa(n);
}
class ga {
  constructor(e, n, o, r) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this._dirty = !0),
      (this.effect = new ua(e, () => {
        this._dirty || ((this._dirty = !0), ha(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !r),
      (this.__v_isReadonly = o);
  }
  get value() {
    const e = Wn(this);
    return da(e), (e._dirty || !e._cacheable) && ((e._dirty = !1), (e._value = e.effect.run())), e._value;
  }
  set value(e) {
    this._setter(e);
  }
}
function Rc(t, e, n = !1) {
  let o, r;
  const s = ho(t);
  return s ? ((o = t), (r = Yl)) : ((o = t.get), (r = t.set)), new ga(o, r, s || !r, n);
}
const ma = 'modulepreload',
  va = function (t) {
    return '/utils/' + t;
  },
  Ir = {},
  Oc = function (e, n, o) {
    if (!n || n.length === 0) return e();
    const r = document.getElementsByTagName('link');
    return Promise.all(
      n.map((s) => {
        if (((s = va(s)), s in Ir)) return;
        Ir[s] = !0;
        const i = s.endsWith('.css'),
          l = i ? '[rel="stylesheet"]' : '';
        if (!!o)
          for (let f = r.length - 1; f >= 0; f--) {
            const d = r[f];
            if (d.href === s && (!i || d.rel === 'stylesheet')) return;
          }
        else if (document.querySelector(`link[href="${s}"]${l}`)) return;
        const c = document.createElement('link');
        if (
          ((c.rel = i ? 'stylesheet' : ma),
          i || ((c.as = 'script'), (c.crossOrigin = '')),
          (c.href = s),
          document.head.appendChild(c),
          i)
        )
          return new Promise((f, d) => {
            c.addEventListener('load', f),
              c.addEventListener('error', () => d(new Error(`Unable to preload CSS for ${s}`)));
          });
      }),
    )
      .then(() => e())
      .catch((s) => {
        const i = new Event('vite:preloadError', { cancelable: !0 });
        if (((i.payload = s), window.dispatchEvent(i), !i.defaultPrevented)) throw s;
      });
  },
  ya = window.__VP_SITE_DATA__,
  si = /^[a-z]+:/i,
  Fc = /^pathname:\/\//,
  Lc = 'vitepress-theme-appearance',
  ii = /#.*$/,
  _a = /(index)?\.(md|html)$/,
  kt = typeof document < 'u',
  li = {
    relativePath: '',
    filePath: '',
    title: '404',
    description: 'Not Found',
    headers: [],
    frontmatter: { sidebar: !1, layout: 'page' },
    lastUpdated: 0,
    isNotFound: !0,
  };
function ba(t, e, n = !1) {
  if (e === void 0) return !1;
  if (((t = Mr(`/${t}`)), n)) return new RegExp(e).test(t);
  if (Mr(e) !== t) return !1;
  const o = e.match(ii);
  return o ? (kt ? location.hash : '') === o[0] : !0;
}
function Mr(t) {
  return decodeURI(t).replace(ii, '').replace(_a, '');
}
function wa(t) {
  return si.test(t);
}
function Ca(t, e) {
  var o, r, s, i, l, a, c;
  const n = Object.keys(t.locales).find((f) => f !== 'root' && !wa(f) && ba(e, `/${f}/`, !0)) || 'root';
  return Object.assign({}, t, {
    localeIndex: n,
    lang: ((o = t.locales[n]) == null ? void 0 : o.lang) ?? t.lang,
    dir: ((r = t.locales[n]) == null ? void 0 : r.dir) ?? t.dir,
    title: ((s = t.locales[n]) == null ? void 0 : s.title) ?? t.title,
    titleTemplate: ((i = t.locales[n]) == null ? void 0 : i.titleTemplate) ?? t.titleTemplate,
    description: ((l = t.locales[n]) == null ? void 0 : l.description) ?? t.description,
    head: ci(t.head, ((a = t.locales[n]) == null ? void 0 : a.head) ?? []),
    themeConfig: { ...t.themeConfig, ...((c = t.locales[n]) == null ? void 0 : c.themeConfig) },
  });
}
function ai(t, e) {
  const n = e.title || t.title,
    o = e.titleTemplate ?? t.titleTemplate;
  if (typeof o == 'string' && o.includes(':title')) return o.replace(/:title/g, n);
  const r = xa(t.title, o);
  return `${n}${r}`;
}
function xa(t, e) {
  return e === !1 ? '' : e === !0 || e === void 0 ? ` | ${t}` : t === e ? '' : ` | ${e}`;
}
function Sa(t, e) {
  const [n, o] = e;
  if (n !== 'meta') return !1;
  const r = Object.entries(o)[0];
  return r == null ? !1 : t.some(([s, i]) => s === n && i[r[0]] === r[1]);
}
function ci(t, e) {
  return [...t.filter((n) => !Sa(e, n)), ...e];
}
const Ea = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g,
  ka = /^[a-z]:/i;
function jr(t) {
  const e = ka.exec(t),
    n = e ? e[0] : '';
  return (
    n +
    t
      .slice(n.length)
      .replace(Ea, '_')
      .replace(/(^|\/)_+(?=[^/]*$)/, '$1')
  );
}
const Aa = Symbol(),
  ae = Gi(ya);
function Pc(t) {
  const e = At(() => Ca(ae.value, t.data.relativePath));
  return {
    site: e,
    theme: At(() => e.value.themeConfig),
    page: At(() => t.data),
    frontmatter: At(() => t.data.frontmatter),
    params: At(() => t.data.params),
    lang: At(() => e.value.lang),
    dir: At(() => e.value.dir),
    localeIndex: At(() => e.value.localeIndex || 'root'),
    title: At(() => ai(e.value, t.data)),
    description: At(() => t.data.description || e.value.description),
    isDark: ko(!1),
  };
}
function $c() {
  const t = Ie(Aa);
  if (!t) throw new Error('vitepress data not properly injected in app');
  return t;
}
function Ta(t, e) {
  return `${t}${e}`.replace(/\/+/g, '/');
}
function Nr(t) {
  return si.test(t) || t.startsWith('.') ? t : Ta(ae.value.base, t);
}
function Ra(t) {
  let e = t.replace(/\.html$/, '');
  if (((e = decodeURIComponent(e)), (e = e.replace(/\/$/, '/index')), kt)) {
    const n = '/utils/';
    e = jr(e.slice(n.length).replace(/\//g, '_') || 'index') + '.md';
    let o = __VP_HASH_MAP__[e.toLowerCase()];
    if (
      (o ||
        ((e = e.endsWith('_index.md') ? e.slice(0, -9) + '.md' : e.slice(0, -3) + '_index.md'),
        (o = __VP_HASH_MAP__[e.toLowerCase()])),
      !o)
    )
      return null;
    e = `${n}assets/${e}.${o}.js`;
  } else e = `./${jr(e.slice(1).replace(/\//g, '_'))}.md.js`;
  return e;
}
let gn = [];
function Ic(t) {
  gn.push(t),
    Hn(() => {
      gn = gn.filter((e) => e !== t);
    });
}
const Oa = Symbol(),
  Ur = 'http://a.com',
  Fa = () => ({ path: '/', component: null, data: li });
function Mc(t, e) {
  const n = In(Fa()),
    o = { route: n, go: r };
  async function r(l = kt ? location.href : '/') {
    var c, f;
    if ((await ((c = o.onBeforeRouteChange) == null ? void 0 : c.call(o, l))) === !1) return;
    const a = new URL(l, Ur);
    ae.value.cleanUrls ||
      (!a.pathname.endsWith('/') &&
        !a.pathname.endsWith('.html') &&
        ((a.pathname += '.html'), (l = a.pathname + a.search + a.hash))),
      kt &&
        l !== location.href &&
        (history.replaceState({ scrollPosition: window.scrollY }, document.title), history.pushState(null, '', l)),
      await i(l),
      await ((f = o.onAfterRouteChanged) == null ? void 0 : f.call(o, l));
  }
  let s = null;
  async function i(l, a = 0, c = !1) {
    var g;
    if ((await ((g = o.onBeforePageLoad) == null ? void 0 : g.call(o, l))) === !1) return;
    const f = new URL(l, Ur),
      d = (s = f.pathname);
    try {
      let O = await t(d);
      if (!O) throw new Error(`Page not found: ${d}`);
      if (s === d) {
        s = null;
        const { default: R, __pageData: $ } = O;
        if (!R) throw new Error(`Invalid route component: ${R}`);
        (n.path = kt ? d : Nr(d)),
          (n.component = Pe(R)),
          (n.data = Pe($)),
          kt &&
            hs(() => {
              let m = ae.value.base + $.relativePath.replace(/(?:(^|\/)index)?\.md$/, '$1');
              if (
                (!ae.value.cleanUrls && !m.endsWith('/') && (m += '.html'),
                m !== f.pathname && ((f.pathname = m), (l = m + f.search + f.hash), history.replaceState(null, '', l)),
                f.hash && !a)
              ) {
                let S = null;
                try {
                  S = document.getElementById(decodeURIComponent(f.hash).slice(1));
                } catch (j) {
                  console.warn(j);
                }
                if (S) {
                  Vr(S, f.hash);
                  return;
                }
              }
              window.scrollTo(0, a);
            });
      }
    } catch (O) {
      if ((!/fetch|Page not found/.test(O.message) && !/^\/404(\.html|\/)?$/.test(l) && console.error(O), !c))
        try {
          const R = await fetch(ae.value.base + 'hashmap.json');
          (window.__VP_HASH_MAP__ = await R.json()), await i(l, a, !0);
          return;
        } catch {}
      s === d && ((s = null), (n.path = kt ? d : Nr(d)), (n.component = e ? Pe(e) : null), (n.data = li));
    }
  }
  return (
    kt &&
      (window.addEventListener(
        'click',
        (l) => {
          if (l.target.closest('button')) return;
          const c = l.target.closest('a');
          if (c && !c.closest('.vp-raw') && (c instanceof SVGElement || !c.download)) {
            const { target: f } = c,
              {
                href: d,
                origin: g,
                pathname: O,
                hash: R,
                search: $,
              } = new URL(c.href instanceof SVGAnimatedString ? c.href.animVal : c.href, c.baseURI),
              m = window.location,
              S = O.match(/\.\w+$/);
            !l.ctrlKey &&
              !l.shiftKey &&
              !l.altKey &&
              !l.metaKey &&
              !f &&
              g === m.origin &&
              !(S && S[0] !== '.html') &&
              (l.preventDefault(),
              O === m.pathname && $ === m.search
                ? R &&
                  (R !== m.hash && (history.pushState(null, '', R), window.dispatchEvent(new Event('hashchange'))),
                  Vr(c, R, c.classList.contains('header-anchor')))
                : r(d));
          }
        },
        { capture: !0 },
      ),
      window.addEventListener('popstate', (l) => {
        i(location.href, (l.state && l.state.scrollPosition) || 0);
      }),
      window.addEventListener('hashchange', (l) => {
        l.preventDefault();
      })),
    o
  );
}
function La() {
  const t = Ie(Oa);
  if (!t) throw new Error('useRouter() is called without provider.');
  return t;
}
function ui() {
  return La().route;
}
function Vr(t, e, n = !1) {
  let o = null;
  try {
    o = t.classList.contains('header-anchor') ? t : document.getElementById(decodeURIComponent(e).slice(1));
  } catch (r) {
    console.warn(r);
  }
  if (o) {
    let a = function () {
      !n || Math.abs(l - window.scrollY) > window.innerHeight
        ? window.scrollTo(0, l)
        : window.scrollTo({ left: 0, top: l, behavior: 'smooth' });
    };
    const r = ae.value.scrollOffset;
    let s = 0;
    if (typeof r == 'number') s = r;
    else if (typeof r == 'string') s = Br(r);
    else if (Array.isArray(r))
      for (const c of r) {
        const f = Br(c);
        if (f) {
          s = f;
          break;
        }
      }
    const i = parseInt(window.getComputedStyle(o).paddingTop, 10),
      l = window.scrollY + o.getBoundingClientRect().top - s + i;
    requestAnimationFrame(a);
  }
}
function Br(t) {
  const e = document.querySelector(t);
  if (!e) return 0;
  const n = e.getBoundingClientRect().bottom;
  return n < 0 ? 0 : n + 24;
}
const Hr = () => gn.forEach((t) => t()),
  jc = xs({
    name: 'VitePressContent',
    props: { as: { type: [Object, String], default: 'div' } },
    setup(t) {
      const e = ui();
      return () =>
        fo(t.as, { style: { position: 'relative' } }, [
          e.component ? fo(e.component, { onVnodeMounted: Hr, onVnodeUpdated: Hr }) : '404 Page Not Found',
        ]);
    },
  }),
  Nc = xs({
    setup(t, { slots: e }) {
      const n = ko(!1);
      return (
        Bn(() => {
          n.value = !0;
        }),
        () => (n.value && e.default ? e.default() : null)
      );
    },
  });
function Uc() {
  kt &&
    window.addEventListener('click', (t) => {
      var n, o;
      const e = t.target;
      if (e.matches('.vp-code-group input')) {
        const r = (n = e.parentElement) == null ? void 0 : n.parentElement,
          s = Array.from((r == null ? void 0 : r.querySelectorAll('input')) || []).indexOf(e),
          i = r == null ? void 0 : r.querySelector('div[class*="language-"].active'),
          l =
            (o = r == null ? void 0 : r.querySelectorAll('div[class*="language-"]:not(.language-id)')) == null
              ? void 0
              : o[s];
        i && l && i !== l && (i.classList.remove('active'), l.classList.add('active'));
      }
    });
}
function Vc() {
  if (kt) {
    const t = new WeakMap();
    window.addEventListener('click', (e) => {
      var o;
      const n = e.target;
      if (n.matches('div[class*="language-"] > button.copy')) {
        const r = n.parentElement,
          s = (o = n.nextElementSibling) == null ? void 0 : o.nextElementSibling;
        if (!r || !s) return;
        const i = /language-(shellscript|shell|bash|sh|zsh)/.test(r.className);
        let l = '';
        s.querySelectorAll('span.line:not(.diff.remove)').forEach(
          (a) =>
            (l +=
              (a.textContent || '') +
              `
`),
        ),
          (l = l.slice(0, -1)),
          i && (l = l.replace(/^ *(\$|>) /gm, '').trim()),
          Pa(l).then(() => {
            n.classList.add('copied'), clearTimeout(t.get(n));
            const a = setTimeout(() => {
              n.classList.remove('copied'), n.blur(), t.delete(n);
            }, 2e3);
            t.set(n, a);
          });
      }
    });
  }
}
async function Pa(t) {
  try {
    return navigator.clipboard.writeText(t);
  } catch {
    const e = document.createElement('textarea'),
      n = document.activeElement;
    (e.value = t),
      e.setAttribute('readonly', ''),
      (e.style.contain = 'strict'),
      (e.style.position = 'absolute'),
      (e.style.left = '-9999px'),
      (e.style.fontSize = '12pt');
    const o = document.getSelection(),
      r = o ? o.rangeCount > 0 && o.getRangeAt(0) : null;
    document.body.appendChild(e),
      e.select(),
      (e.selectionStart = 0),
      (e.selectionEnd = t.length),
      document.execCommand('copy'),
      document.body.removeChild(e),
      r && (o.removeAllRanges(), o.addRange(r)),
      n && n.focus();
  }
}
function Bc(t, e) {
  let n = [],
    o = !0;
  const r = (s) => {
    if (o) {
      o = !1;
      return;
    }
    n.forEach((i) => document.head.removeChild(i)),
      (n = []),
      s.forEach((i) => {
        const l = Dr(i);
        document.head.appendChild(l), n.push(l);
      });
  };
  cl(() => {
    const s = t.data,
      i = e.value,
      l = s && s.description,
      a = (s && s.frontmatter.head) || [];
    document.title = ai(i, s);
    const c = l || i.description;
    let f = document.querySelector('meta[name=description]');
    f ? f.setAttribute('content', c) : Dr(['meta', { name: 'description', content: c }]), r(ci(i.head, Ia(a)));
  });
}
function Dr([t, e, n]) {
  const o = document.createElement(t);
  for (const r in e) o.setAttribute(r, e[r]);
  return n && (o.innerHTML = n), o;
}
function $a(t) {
  return t[0] === 'meta' && t[1] && t[1].name === 'description';
}
function Ia(t) {
  return t.filter((e) => !$a(e));
}
const eo = new Set(),
  fi = () => document.createElement('link'),
  Ma = (t) => {
    const e = fi();
    (e.rel = 'prefetch'), (e.href = t), document.head.appendChild(e);
  },
  ja = (t) => {
    const e = new XMLHttpRequest();
    e.open('GET', t, (e.withCredentials = !0)), e.send();
  };
let an;
const Na = kt && (an = fi()) && an.relList && an.relList.supports && an.relList.supports('prefetch') ? Ma : ja;
function Hc() {
  if (!kt || !window.IntersectionObserver) return;
  let t;
  if ((t = navigator.connection) && (t.saveData || /2g/.test(t.effectiveType))) return;
  const e = window.requestIdleCallback || setTimeout;
  let n = null;
  const o = () => {
    n && n.disconnect(),
      (n = new IntersectionObserver((s) => {
        s.forEach((i) => {
          if (i.isIntersecting) {
            const l = i.target;
            n.unobserve(l);
            const { pathname: a } = l;
            if (!eo.has(a)) {
              eo.add(a);
              const c = Ra(a);
              c && Na(c);
            }
          }
        });
      })),
      e(() => {
        document.querySelectorAll('#app a').forEach((s) => {
          const { hostname: i, pathname: l } = new URL(
              s.href instanceof SVGAnimatedString ? s.href.animVal : s.href,
              s.baseURI,
            ),
            a = l.match(/\.\w+$/);
          (a && a[0] !== '.html') ||
            (s.target !== '_blank' && i === location.hostname && (l !== location.pathname ? n.observe(s) : eo.add(l)));
        });
      });
  };
  Bn(o);
  const r = ui();
  pn(() => r.path, o),
    Hn(() => {
      n && n.disconnect();
    });
}
export {
  Ws as $,
  Bn as A,
  cc as B,
  js as C,
  Ie as D,
  si as E,
  Us as F,
  Fn as G,
  Mo as H,
  hs as I,
  kt as J,
  Lc as K,
  Vs as L,
  Ya as M,
  Ji as N,
  rl as O,
  Fc as P,
  El as Q,
  ac as R,
  oc as S,
  Es as T,
  gc as U,
  Ll as V,
  Xa as W,
  Va as X,
  hc as Y,
  rc as Z,
  bc as _,
  Ln as a,
  Ja as a0,
  mc as a1,
  Tc as a2,
  ho as a3,
  Ql as a4,
  Sn as a5,
  _t as a6,
  wc as a7,
  kc as a8,
  ks as a9,
  Pe as aA,
  Ba as aB,
  Da as aC,
  Ec as aD,
  Qa as aE,
  yc as aF,
  Ac as aG,
  vc as aH,
  Bc as aI,
  Hc as aJ,
  Vc as aK,
  Uc as aL,
  Oa as aM,
  Pc as aN,
  Aa as aO,
  jc as aP,
  Nc as aQ,
  ae as aR,
  _c as aS,
  Mc as aT,
  Ra as aU,
  Oc as aV,
  qa as aW,
  Ki as aX,
  lt as aa,
  Rc as ab,
  Yl as ac,
  gl as ad,
  za as ae,
  xc as af,
  In as ag,
  Wa as ah,
  uc as ai,
  sc as aj,
  ea as ak,
  te as al,
  we as am,
  ic as an,
  dl as ao,
  ec as ap,
  Cc as aq,
  Ua as ar,
  X as as,
  pc as at,
  dc as au,
  fo as av,
  ml as aw,
  Sc as ax,
  fc as ay,
  Fl as az,
  lc as b,
  $c as c,
  ko as d,
  Ka as e,
  Ga as f,
  Ha as g,
  cl as h,
  wa as i,
  ba as j,
  ui as k,
  Hn as l,
  ls as m,
  dt as n,
  Ti as o,
  tc as p,
  pn as q,
  At as r,
  Gi as s,
  Ic as t,
  xs as u,
  Is as v,
  Nr as w,
  at as x,
  Za as y,
  nc as z,
};
