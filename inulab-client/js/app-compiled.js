"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect;

// PERFILES (PAQUETES)
var perfiles = [{
  id: 'P1',
  name: 'Perfil Básico',
  subtitle: 'Hemograma IDEXX + Reticulocitos + CHEM 10',
  icon: 'fa-box',
  color: 'text-blue-600',
  bg: 'bg-blue-100',
  price: 175,
  turnaround: '1-2 hrs'
}, {
  id: 'P2',
  name: 'Perfil CHEM 15',
  subtitle: 'Hemograma IDEXX + Reticulocitos + CHEM 15',
  icon: 'fa-boxes-stacked',
  color: 'text-purple-600',
  bg: 'bg-purple-100',
  price: 219,
  turnaround: '1-2 hrs'
}, {
  id: 'P3',
  name: 'Perfil Básico Renal',
  subtitle: 'Hemograma + CHEM 10 + SDMA IDEXX',
  icon: 'fa-kidneys',
  color: 'text-amber-600',
  bg: 'bg-amber-100',
  price: 330,
  turnaround: '1-2 hrs'
}, {
  id: 'P4',
  name: 'Perfil CHEM 15 Renal',
  subtitle: 'Hemograma + CHEM 15 + SDMA IDEXX',
  icon: 'fa-kidneys',
  color: 'text-orange-600',
  bg: 'bg-orange-100',
  price: 375,
  turnaround: '1-2 hrs'
}, {
  id: 'P5',
  name: 'Perfil Básico + Electrolitos',
  subtitle: 'Hemograma + CHEM 10 + LYTE 4 (Na, K, Cl)',
  icon: 'fa-bolt',
  color: 'text-yellow-600',
  bg: 'bg-yellow-100',
  price: 226,
  turnaround: '1-2 hrs'
}, {
  id: 'P6',
  name: 'Perfil Electrolitos',
  subtitle: 'LYTE 4 (Na, K, Cl) + Calcio + Fósforo',
  icon: 'fa-bolt',
  color: 'text-cyan-600',
  bg: 'bg-cyan-100',
  price: 120,
  turnaround: '1-2 hrs'
}, {
  id: 'P7',
  name: 'Perfil Hormonal',
  subtitle: 'T4 Total + TSH + Cortisol (Healvet)',
  icon: 'fa-dna',
  color: 'text-pink-600',
  bg: 'bg-pink-100',
  price: 170,
  turnaround: '2 hrs'
}, {
  id: 'P8',
  name: 'Perfil Hemoparásitos',
  subtitle: 'Hemograma + Reticulocitos + SNAP 4DX Plus',
  icon: 'fa-bugs',
  color: 'text-red-600',
  bg: 'bg-red-100',
  price: 165,
  turnaround: '1-2 hrs'
}, {
  id: 'P9',
  name: 'Perfil Felino',
  subtitle: 'Hemograma + Reticulocitos + SNAP Combo Felino',
  icon: 'fa-cat',
  color: 'text-indigo-600',
  bg: 'bg-indigo-100',
  price: 180,
  turnaround: '1-2 hrs'
}];

// EXÁMENES INDIVIDUALES POR CATEGORÍA
var categorias = [{
  nombre: 'Hematología',
  icon: 'fa-droplet',
  color: 'text-red-500',
  examenes: [{
    id: 'H1',
    name: 'Hemograma + Reticulocitos',
    subtitle: 'IDEXX',
    icon: 'fa-droplet',
    color: 'text-red-500',
    bg: 'bg-red-50',
    price: 42,
    turnaround: '1 hr'
  }, {
    id: 'H2',
    name: 'Frotis de Hemoparásitos',
    subtitle: 'Capa flogística',
    icon: 'fa-microscope',
    color: 'text-red-500',
    bg: 'bg-red-50',
    price: 30,
    turnaround: '6-8 hrs'
  }, {
    id: 'H3',
    name: 'Hemograma Manual',
    subtitle: null,
    icon: 'fa-hand',
    color: 'text-red-500',
    bg: 'bg-red-50',
    price: 35,
    turnaround: '6 hrs'
  }]
}, {
  nombre: 'Bioquímica IDEXX',
  icon: 'fa-flask',
  color: 'text-purple-500',
  examenes: [{
    id: 'B1',
    name: 'CHEM 10',
    subtitle: 'ALB, GLOB, ALKP, ALT, BUN, CREA, GLU, PT',
    icon: 'fa-flask',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 140,
    turnaround: '1 hr'
  }, {
    id: 'B2',
    name: 'CHEM 15',
    subtitle: 'CHEM 10 + CA, CHOL, GGT, PHOS, TBIL',
    icon: 'fa-flask',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 195,
    turnaround: '1 hr'
  }, {
    id: 'B3',
    name: 'Creatinina',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 35,
    turnaround: '1 hr'
  }, {
    id: 'B4',
    name: 'BUN',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 35,
    turnaround: '1 hr'
  }, {
    id: 'B5',
    name: 'Fósforo',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 35,
    turnaround: '1 hr'
  }, {
    id: 'B6',
    name: 'Calcio',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 35,
    turnaround: '1 hr'
  }, {
    id: 'B7',
    name: 'Amoníaco (NH3)',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 37,
    turnaround: '1 hr'
  }, {
    id: 'B8',
    name: 'Electrolitos',
    subtitle: 'LYTE 4: Na, K, Cl',
    icon: 'fa-bolt',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 66,
    turnaround: '1 hr'
  }, {
    id: 'B9',
    name: 'Colesterol',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 35,
    turnaround: '1 hr'
  }, {
    id: 'B10',
    name: 'Triglicéridos',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 35,
    turnaround: '1 hr'
  }, {
    id: 'B11',
    name: 'Lactato',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 45,
    turnaround: '1 hr'
  }, {
    id: 'B12',
    name: 'SDMA',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 165,
    turnaround: '1 hr'
  }, {
    id: 'B13',
    name: 'Fructosamina',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 93,
    turnaround: '1 hr'
  }, {
    id: 'B14',
    name: 'Fenobarbital',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 140,
    turnaround: '1 hr'
  }, {
    id: 'B15',
    name: 'Ácidos Biliares',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 125,
    turnaround: '1 hr'
  }]
}, {
  nombre: 'Endocrinología',
  icon: 'fa-dna',
  color: 'text-pink-500',
  examenes: [{
    id: 'E1',
    name: 'Cortisol',
    subtitle: 'Inmunofluorescencia - Healvet',
    icon: 'fa-dna',
    color: 'text-pink-500',
    bg: 'bg-pink-50',
    price: 50,
    turnaround: '2 hrs'
  }, {
    id: 'E2',
    name: 'Progesterona',
    subtitle: 'Inmunofluorescencia - Healvet',
    icon: 'fa-dna',
    color: 'text-pink-500',
    bg: 'bg-pink-50',
    price: 60,
    turnaround: '2 hrs'
  }, {
    id: 'E3',
    name: 'TSH',
    subtitle: 'Inmunofluorescencia - Healvet',
    icon: 'fa-dna',
    color: 'text-pink-500',
    bg: 'bg-pink-50',
    price: 65,
    turnaround: '2 hrs'
  }, {
    id: 'E4',
    name: 'T4 Total (Healvet)',
    subtitle: 'Inmunofluorescencia',
    icon: 'fa-dna',
    color: 'text-pink-500',
    bg: 'bg-pink-50',
    price: 60,
    turnaround: '2 hrs'
  }, {
    id: 'E5',
    name: 'T4 Total (IDEXX)',
    subtitle: 'IDEXX',
    icon: 'fa-dna',
    color: 'text-pink-500',
    bg: 'bg-pink-50',
    price: 98,
    turnaround: '1 hr'
  }, {
    id: 'E6',
    name: 'T4 Libre',
    subtitle: 'Elisa',
    icon: 'fa-dna',
    color: 'text-pink-500',
    bg: 'bg-pink-50',
    price: 48,
    turnaround: '24 hrs'
  }, {
    id: 'E7',
    name: 'T3 Triyodotironina',
    subtitle: 'Elisa',
    icon: 'fa-dna',
    color: 'text-pink-500',
    bg: 'bg-pink-50',
    price: 65,
    turnaround: '24 hrs'
  }]
}, {
  nombre: 'PCR en Tiempo Real',
  icon: 'fa-virus',
  color: 'text-emerald-500',
  examenes: [{
    id: 'PCR1',
    name: 'PCR Leucemia Felina',
    subtitle: 'VILEF',
    icon: 'fa-virus',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
    price: 200,
    turnaround: '24-48 hrs'
  }, {
    id: 'PCR2',
    name: 'PCR Mycoplasma Hemotrópico',
    subtitle: null,
    icon: 'fa-virus',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
    price: 200,
    turnaround: '24-48 hrs'
  }, {
    id: 'PCR3',
    name: 'PCR Erlichia',
    subtitle: null,
    icon: 'fa-virus',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
    price: 200,
    turnaround: '24-48 hrs'
  }, {
    id: 'PCR4',
    name: 'PCR Anaplasma SPP',
    subtitle: null,
    icon: 'fa-virus',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
    price: 200,
    turnaround: '24-48 hrs'
  }, {
    id: 'PCR5',
    name: 'PCR Leptospira Interrogans',
    subtitle: null,
    icon: 'fa-virus',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
    price: 200,
    turnaround: '24-48 hrs'
  }, {
    id: 'PCR6',
    name: 'PCR VIF / VILEF',
    subtitle: null,
    icon: 'fa-virus',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
    price: 220,
    turnaround: '24-48 hrs'
  }, {
    id: 'PCR7',
    name: 'PCR Panel Completo',
    subtitle: 'Babesia, Lyme, Erlichia, Anaplasma, Mycoplasma',
    icon: 'fa-virus',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
    price: 380,
    turnaround: '24-48 hrs'
  }]
}, {
  nombre: 'Inmunoserología',
  icon: 'fa-shield-virus',
  color: 'text-blue-500',
  examenes: [{
    id: 'I1',
    name: 'SNAP Combo Felino',
    subtitle: 'VIF y VILEF - IDEXX',
    icon: 'fa-cat',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    price: 145,
    turnaround: '1 hr'
  }, {
    id: 'I2',
    name: 'SNAP 4DX',
    subtitle: 'E. canis, Lyme, Anaplasma, Dirofilaria - IDEXX',
    icon: 'fa-dog',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    price: 130,
    turnaround: '1 hr'
  }, {
    id: 'I3',
    name: 'SNAP cPL Cualitativo',
    subtitle: 'IDEXX',
    icon: 'fa-shield-virus',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    price: 145,
    turnaround: '1 hr'
  }, {
    id: 'I4',
    name: 'SNAP fPL Cualitativo',
    subtitle: 'IDEXX',
    icon: 'fa-shield-virus',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    price: 140,
    turnaround: '1 hr'
  }, {
    id: 'I5',
    name: 'Brucella Canino',
    subtitle: 'Rosa de Bengala',
    icon: 'fa-shield-virus',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    price: 80,
    turnaround: '24 hrs'
  }, {
    id: 'I6',
    name: 'Leptospira MAT',
    subtitle: '6 Serovares - Campo oscuro',
    icon: 'fa-shield-virus',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    price: 100,
    turnaround: '24-48 hrs'
  }, {
    id: 'I7',
    name: 'Toxoplasma IgG & IgM',
    subtitle: 'Elisa',
    icon: 'fa-shield-virus',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    price: 160,
    turnaround: '24 hrs'
  }, {
    id: 'I8',
    name: 'Lipasa Canina/Felina',
    subtitle: 'Cuantitativa - Healvet',
    icon: 'fa-shield-virus',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    price: 75,
    turnaround: '2 hrs'
  }, {
    id: 'I9',
    name: 'Lipasa Canina/Felina',
    subtitle: 'Cuantitativa - IDEXX',
    icon: 'fa-shield-virus',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    price: 125,
    turnaround: '1 hr'
  }]
}, {
  nombre: 'Coagulación',
  icon: 'fa-bandage',
  color: 'text-rose-500',
  examenes: [{
    id: 'C1',
    name: 'TP + TTPA + Fibrinógeno',
    subtitle: null,
    icon: 'fa-bandage',
    color: 'text-rose-500',
    bg: 'bg-rose-50',
    price: 75,
    turnaround: '6 hrs'
  }, {
    id: 'C2',
    name: 'TP + TTPA + Fibrinógeno + Dímero D',
    subtitle: null,
    icon: 'fa-bandage',
    color: 'text-rose-500',
    bg: 'bg-rose-50',
    price: 125,
    turnaround: '6 hrs'
  }]
}, {
  nombre: 'Patología',
  icon: 'fa-microscope',
  color: 'text-slate-500',
  examenes: [{
    id: 'PA1',
    name: 'Citología',
    subtitle: '3-5 días hábiles',
    icon: 'fa-microscope',
    color: 'text-slate-500',
    bg: 'bg-slate-50',
    price: 70,
    turnaround: '3-5 días'
  }, {
    id: 'PA2',
    name: 'Histopatología',
    subtitle: '7-10 días hábiles',
    icon: 'fa-microscope',
    color: 'text-slate-500',
    bg: 'bg-slate-50',
    price: 120,
    turnaround: '7-10 días'
  }]
}, {
  nombre: 'Uroanálisis',
  icon: 'fa-vial',
  color: 'text-yellow-500',
  examenes: [{
    id: 'U1',
    name: 'Examen de Orina Completo',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-yellow-500',
    bg: 'bg-yellow-50',
    price: 16,
    turnaround: '12 hrs'
  }, {
    id: 'U2',
    name: 'Urocultivo',
    subtitle: null,
    icon: 'fa-bacteria',
    color: 'text-yellow-500',
    bg: 'bg-yellow-50',
    price: 35,
    turnaround: '3-5 días'
  }, {
    id: 'U3',
    name: 'Ex. Orina + Urocultivo',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-yellow-500',
    bg: 'bg-yellow-50',
    price: 46,
    turnaround: '3-5 días'
  }, {
    id: 'U4',
    name: 'Cociente Proteína/Creatinina UPC',
    subtitle: 'Colorimetría',
    icon: 'fa-vial',
    color: 'text-yellow-500',
    bg: 'bg-yellow-50',
    price: 55,
    turnaround: '6 hrs'
  }, {
    id: 'U5',
    name: 'Cociente Proteína/Creatinina UPC',
    subtitle: 'IDEXX',
    icon: 'fa-vial',
    color: 'text-yellow-500',
    bg: 'bg-yellow-50',
    price: 90,
    turnaround: '1 hr'
  }, {
    id: 'U6',
    name: 'Ex. Orina Completo IDEXX',
    subtitle: 'SEDIVUE DX',
    icon: 'fa-vial',
    color: 'text-yellow-500',
    bg: 'bg-yellow-50',
    price: 155,
    turnaround: '1 hr'
  }]
}, {
  nombre: 'Parasitología',
  icon: 'fa-bugs',
  color: 'text-orange-500',
  examenes: [{
    id: 'PR1',
    name: 'Coprológico Simple',
    subtitle: null,
    icon: 'fa-poop',
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    price: 15,
    turnaround: '12 hrs'
  }, {
    id: 'PR2',
    name: 'Coprológico Funcional',
    subtitle: null,
    icon: 'fa-poop',
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    price: 25,
    turnaround: '12 hrs'
  }, {
    id: 'PR3',
    name: 'Coprológico Completo',
    subtitle: null,
    icon: 'fa-poop',
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    price: 40,
    turnaround: '12-24 hrs'
  }, {
    id: 'PR4',
    name: 'Giardia Ag Cuantitativo',
    subtitle: 'Healvet',
    icon: 'fa-virus',
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    price: 70,
    turnaround: '12-24 hrs'
  }]
}, {
  nombre: 'Microbiología',
  icon: 'fa-bacteria',
  color: 'text-lime-600',
  examenes: [{
    id: 'M1',
    name: 'Cultivo + 1 Antibiograma',
    subtitle: 'Piel y Oído',
    icon: 'fa-bacteria',
    color: 'text-lime-600',
    bg: 'bg-lime-50',
    price: 45,
    turnaround: '3-5 días'
  }]
}];

// PAQUETES AMIGABLES PARA DUEÑOS (mapeados a exámenes reales)
var paquetesDuenos = [{
  id: 'P1',
  name: 'Chequeo General',
  description: 'Análisis de sangre completo para conocer el estado general de salud de tu mascota.',
  icon: 'fa-heart-pulse',
  color: 'text-rose-500',
  bg: 'bg-rose-100',
  tiempo: '24-48 horas',
  price: 250,
  examenReal: 'Perfil Básico',
  recomendado: true,
  incluye: ['Hemograma completo IDEXX', 'Conteo de Reticulocitos', 'Bioquímica CHEM 10'],
  evalua: [{
    nombre: 'Glóbulos rojos y blancos',
    desc: 'Detecta anemia, infecciones o problemas inmunológicos'
  }, {
    nombre: 'Función hepática',
    desc: 'ALT y ALKP evalúan el estado del hígado'
  }, {
    nombre: 'Función renal',
    desc: 'BUN y Creatinina miden cómo funcionan los riñones'
  }, {
    nombre: 'Glucosa',
    desc: 'Detecta diabetes o problemas metabólicos'
  }, {
    nombre: 'Proteínas',
    desc: 'Evalúa nutrición y estado general'
  }]
}, {
  id: 'P2',
  name: 'Chequeo Completo',
  description: 'Evaluación más amplia con parámetros adicionales para un análisis detallado.',
  icon: 'fa-stethoscope',
  color: 'text-blue-500',
  bg: 'bg-blue-100',
  tiempo: '24-48 horas',
  price: 320,
  examenReal: 'Perfil CHEM 15',
  recomendado: false,
  incluye: ['Hemograma completo IDEXX', 'Conteo de Reticulocitos', 'Bioquímica CHEM 15 (ampliada)'],
  evalua: [{
    nombre: 'Todo lo del Chequeo General',
    desc: 'Hemograma + función hepática y renal'
  }, {
    nombre: 'Calcio y Fósforo',
    desc: 'Importantes para huesos y metabolismo'
  }, {
    nombre: 'Colesterol',
    desc: 'Evalúa metabolismo de grasas'
  }, {
    nombre: 'GGT y Bilirrubina',
    desc: 'Evaluación hepática más profunda'
  }]
}, {
  id: 'P3',
  name: 'Control de Riñones',
  description: 'Especial para detectar problemas renales de forma temprana.',
  icon: 'fa-kidneys',
  color: 'text-amber-500',
  bg: 'bg-amber-100',
  tiempo: '24-48 horas',
  price: 450,
  examenReal: 'Perfil Básico Renal',
  recomendado: false,
  incluye: ['Hemograma completo', 'Bioquímica CHEM 10', 'SDMA IDEXX (marcador renal temprano)'],
  evalua: [{
    nombre: 'SDMA',
    desc: 'Detecta enfermedad renal hasta 9 meses antes que otros análisis'
  }, {
    nombre: 'Creatinina y BUN',
    desc: 'Marcadores clásicos de función renal'
  }, {
    nombre: 'Estado general',
    desc: 'Hemograma completo para descartar otras condiciones'
  }]
}, {
  id: 'P8',
  name: 'Mi perro está decaído',
  description: 'Detecta parásitos en sangre. Ideal si tu perro está sin energía o inapetente.',
  icon: 'fa-dog',
  color: 'text-red-500',
  bg: 'bg-red-100',
  tiempo: '24-48 horas',
  price: 250,
  examenReal: 'Perfil Hemoparásitos',
  recomendado: false,
  incluye: ['Hemograma completo + Reticulocitos', 'Test SNAP 4DX Plus IDEXX'],
  evalua: [{
    nombre: 'Ehrlichia canis',
    desc: 'Parásito transmitido por garrapatas, muy común en Perú'
  }, {
    nombre: 'Anaplasma',
    desc: 'Otra infección por garrapatas que causa decaimiento'
  }, {
    nombre: 'Enfermedad de Lyme',
    desc: 'Infección bacteriana transmitida por garrapatas'
  }, {
    nombre: 'Dirofilaria (gusano del corazón)',
    desc: 'Parásito que afecta corazón y pulmones'
  }, {
    nombre: 'Anemia',
    desc: 'El hemograma detecta si hay pérdida de glóbulos rojos'
  }]
}, {
  id: 'P9',
  name: 'Chequeo para Gatos',
  description: 'Detecta Leucemia e Inmunodeficiencia felina (VIF/VILEF).',
  icon: 'fa-cat',
  color: 'text-indigo-500',
  bg: 'bg-indigo-100',
  tiempo: '24-48 horas',
  price: 250,
  examenReal: 'Perfil Felino',
  recomendado: false,
  incluye: ['Hemograma completo + Reticulocitos', 'Test SNAP Combo Felino IDEXX'],
  evalua: [{
    nombre: 'Virus de Leucemia Felina (VILEF)',
    desc: 'Virus que afecta el sistema inmune y puede causar cáncer'
  }, {
    nombre: 'Virus de Inmunodeficiencia Felina (VIF)',
    desc: 'Similar al VIH en humanos, debilita las defensas'
  }, {
    nombre: 'Estado general',
    desc: 'El hemograma evalúa anemia y defensas'
  }]
}, {
  id: 'U1',
  name: 'Análisis de Orina Básico',
  description: 'Para problemas urinarios: orina frecuente, con sangre o mal olor.',
  icon: 'fa-droplet',
  color: 'text-yellow-500',
  bg: 'bg-yellow-100',
  tiempo: '24 horas',
  price: 50,
  examenReal: 'Examen de Orina Completo',
  recomendado: false,
  incluye: ['Análisis físico (color, olor, aspecto)', 'Análisis químico (tira reactiva)', 'Análisis microscópico del sedimento'],
  evalua: [{
    nombre: 'Infecciones urinarias',
    desc: 'Detecta bacterias, glóbulos blancos'
  }, {
    nombre: 'Cristales y cálculos',
    desc: 'Identifica formación de piedras en vejiga o riñones'
  }, {
    nombre: 'Sangre en orina',
    desc: 'Puede indicar infección, trauma o tumores'
  }, {
    nombre: 'Glucosa en orina',
    desc: 'Puede indicar diabetes'
  }, {
    nombre: 'Proteínas',
    desc: 'Evalúa posible daño renal'
  }]
}, {
  id: 'U2',
  name: 'Análisis de Orina con Urocultivo',
  description: 'Análisis completo + cultivo bacteriano para identificar infecciones y el antibiótico ideal.',
  icon: 'fa-flask-vial',
  color: 'text-teal-500',
  bg: 'bg-teal-100',
  tiempo: '3-5 días',
  price: 90,
  examenReal: 'Orina Completa + Urocultivo',
  recomendado: false,
  incluye: ['Análisis de orina completo (físico, químico, sedimento)', 'Urocultivo (cultivo bacteriano)', 'Antibiograma (sensibilidad a antibióticos)'],
  evalua: [{
    nombre: 'Identificación bacteriana',
    desc: 'Detecta exactamente qué bacteria causa la infección urinaria'
  }, {
    nombre: 'Antibiograma',
    desc: 'Determina qué antibiótico es más efectivo para el tratamiento'
  }, {
    nombre: 'Infecciones recurrentes',
    desc: 'Ideal cuando las infecciones urinarias vuelven tras el tratamiento'
  }, {
    nombre: '¿Por qué demora 3-5 días?',
    desc: 'La muestra se coloca en un medio de cultivo a 37°C para que las bacterias crezcan. Este proceso de incubación toma 24-48 horas. Si el cultivo es positivo, se realizan pruebas adicionales de sensibilidad antibiótica (antibiograma), lo que requiere 1-2 días más.'
  }]
}, {
  id: 'U3',
  name: 'Análisis de Orina PRO IDEXX',
  description: 'El análisis más avanzado con tecnología SediVue de IDEXX. Resultados en 1 hora.',
  icon: 'fa-microscope',
  color: 'text-cyan-500',
  bg: 'bg-cyan-100',
  tiempo: '1 hora',
  price: 150,
  examenReal: 'Urianálisis IDEXX SediVue',
  recomendado: false,
  incluye: ['Análisis químico con tira VetLab UA', 'Sedimento automatizado con SediVue Dx', 'Imágenes digitales de alta resolución con IA'],
  evalua: [{
    nombre: 'Tecnología SediVue Dx',
    desc: 'Analizador automatizado de IDEXX que usa inteligencia artificial y redes neuronales para identificar hasta 13 elementos en el sedimento urinario con precisión superior al análisis manual'
  }, {
    nombre: 'Imágenes digitales HD',
    desc: 'Captura más de 45 campos de alta potencia con fotografías de cada hallazgo, permitiendo al veterinario ver exactamente lo que se encontró'
  }, {
    nombre: 'Detección avanzada de bacterias',
    desc: 'La tecnología de IA detecta bacterias con mayor sensibilidad que la microscopía tradicional'
  }, {
    nombre: 'Resultados en minutos',
    desc: 'Al ser automatizado, los resultados están listos en aproximadamente 3 minutos, permitiendo decisiones clínicas inmediatas sin esperar horas o días'
  }, {
    nombre: 'Mayor precisión',
    desc: 'Elimina la variabilidad del análisis manual: no depende de la experiencia del técnico ni de la preparación de la muestra centrifugada'
  }]
}, {
  id: 'PR3',
  name: 'Examen de Heces',
  description: 'Detecta parásitos intestinales. Recomendado cada 6 meses.',
  icon: 'fa-poop',
  color: 'text-orange-500',
  bg: 'bg-orange-100',
  tiempo: '24 horas',
  price: 90,
  examenReal: 'Coprológico Completo',
  recomendado: false,
  incluye: ['Examen macroscópico', 'Examen microscópico directo', 'Técnicas de flotación y sedimentación'],
  evalua: [{
    nombre: 'Lombrices (Áscaris)',
    desc: 'Parásitos redondos comunes en cachorros'
  }, {
    nombre: 'Tenias',
    desc: 'Parásitos planos transmitidos por pulgas'
  }, {
    nombre: 'Giardia',
    desc: 'Protozoario que causa diarrea crónica'
  }, {
    nombre: 'Coccidios',
    desc: 'Parásitos microscópicos que afectan intestino'
  }, {
    nombre: 'Ancylostomas',
    desc: 'Parásitos que causan anemia y diarrea con sangre'
  }]
}, {
  id: 'M1',
  name: 'Problemas de Piel u Oídos',
  description: 'Para infecciones de piel u oídos con antibiograma incluido.',
  icon: 'fa-hand-dots',
  color: 'text-lime-500',
  bg: 'bg-lime-100',
  tiempo: '3-5 días',
  price: 90,
  examenReal: 'Cultivo + 1 Antibiograma',
  recomendado: false,
  incluye: ['Cultivo bacteriano', 'Identificación de la bacteria', 'Antibiograma (prueba de sensibilidad)'],
  evalua: [{
    nombre: 'Tipo de bacteria',
    desc: 'Identifica exactamente qué microorganismo causa la infección'
  }, {
    nombre: 'Resistencia antibiótica',
    desc: 'Determina a qué antibióticos es sensible o resistente'
  }, {
    nombre: 'Mejor tratamiento',
    desc: 'El antibiograma indica qué medicamento funcionará mejor'
  }]
}];
var tomaMuestraPrecios = {
  'santiago de surco': {
    normal: 40,
    promo: 0
  },
  'miraflores': {
    normal: 50,
    promo: 20
  },
  'san borja': {
    normal: 50,
    promo: 20
  },
  'san isidro': {
    normal: 50,
    promo: 20
  },
  'surquillo': {
    normal: 50,
    promo: 20
  },
  'barranco': {
    normal: 50,
    promo: 20
  },
  'la molina': {
    normal: 50,
    promo: 20
  },
  'chorrillos': {
    normal: 50,
    promo: 20
  },
  'magdalena del mar': {
    normal: 65,
    promo: 35
  },
  'magdalena': {
    normal: 65,
    promo: 35
  },
  'san miguel': {
    normal: 65,
    promo: 35
  },
  'pueblo libre': {
    normal: 65,
    promo: 35
  },
  'jesus maria': {
    normal: 65,
    promo: 35
  },
  'jesús maría': {
    normal: 65,
    promo: 35
  },
  'lince': {
    normal: 65,
    promo: 35
  },
  'breña': {
    normal: 65,
    promo: 35
  },
  'brena': {
    normal: 65,
    promo: 35
  },
  'la victoria': {
    normal: 65,
    promo: 35
  },
  'san luis': {
    normal: 65,
    promo: 35
  },
  'cercado de lima': {
    normal: 65,
    promo: 35
  },
  'lima': {
    normal: 65,
    promo: 35
  },
  'santa anita': {
    normal: 65,
    promo: 35
  },
  'el agustino': {
    normal: 65,
    promo: 35
  },
  'rimac': {
    normal: 65,
    promo: 35
  },
  'rímac': {
    normal: 65,
    promo: 35
  },
  'ate': {
    normal: 65,
    promo: 35
  },
  'comas': {
    normal: 80,
    promo: 50
  },
  'los olivos': {
    normal: 80,
    promo: 50
  },
  'independencia': {
    normal: 80,
    promo: 50
  },
  'san martin de porres': {
    normal: 80,
    promo: 50
  },
  'san martín de porres': {
    normal: 80,
    promo: 50
  },
  'villa maria del triunfo': {
    normal: 80,
    promo: 50
  },
  'villa maría del triunfo': {
    normal: 80,
    promo: 50
  },
  'san juan de miraflores': {
    normal: 80,
    promo: 50
  },
  'villa el salvador': {
    normal: 80,
    promo: 50
  },
  'pachacamac': {
    normal: 80,
    promo: 50
  },
  'pachacámac': {
    normal: 80,
    promo: 50
  },
  'cieneguilla': {
    normal: 80,
    promo: 50
  },
  'callao': {
    normal: 80,
    promo: 50
  },
  'ventanilla': {
    normal: 80,
    promo: 50
  },
  'mi peru': {
    normal: 80,
    promo: 50
  },
  'mi perú': {
    normal: 80,
    promo: 50
  },
  'puente piedra': {
    normal: 100,
    promo: 70
  },
  'carabayllo': {
    normal: 100,
    promo: 70
  },
  'chaclacayo': {
    normal: 100,
    promo: 70
  },
  'lurigancho': {
    normal: 100,
    promo: 70
  },
  'chosica': {
    normal: 100,
    promo: 70
  },
  'ancon': {
    normal: 120,
    promo: 90
  },
  'ancón': {
    normal: 120,
    promo: 90
  },
  'santa rosa': {
    normal: 120,
    promo: 90
  },
  'lurin': {
    normal: 120,
    promo: 90
  },
  'lurín': {
    normal: 120,
    promo: 90
  },
  'punta hermosa': {
    normal: 120,
    promo: 90
  },
  'punta negra': {
    normal: 120,
    promo: 90
  },
  'san bartolo': {
    normal: 120,
    promo: 90
  },
  'santa maria del mar': {
    normal: 120,
    promo: 90
  },
  'santa maría del mar': {
    normal: 120,
    promo: 90
  },
  'pucusana': {
    normal: 120,
    promo: 90
  }
};
var perfilesDuenos = [{
  id: 'DP1',
  name: 'Perfil Básico',
  subtitle: 'Hemograma IDEXX + Reticulocitos + CHEM 10',
  icon: 'fa-box',
  color: 'text-blue-600',
  bg: 'bg-blue-100',
  price: 250,
  turnaround: '1-2 hrs'
}, {
  id: 'DP2',
  name: 'Perfil CHEM 15',
  subtitle: 'Hemograma IDEXX + Reticulocitos + CHEM 15',
  icon: 'fa-boxes-stacked',
  color: 'text-purple-600',
  bg: 'bg-purple-100',
  price: 320,
  turnaround: '1-2 hrs'
}, {
  id: 'DP3',
  name: 'Perfil Básico Renal',
  subtitle: 'Hemograma + CHEM 10 + SDMA IDEXX',
  icon: 'fa-kidneys',
  color: 'text-amber-600',
  bg: 'bg-amber-100',
  price: 400,
  turnaround: '1-2 hrs'
}, {
  id: 'DP4',
  name: 'Perfil CHEM 15 Renal',
  subtitle: 'Hemograma + CHEM 15 + SDMA IDEXX',
  icon: 'fa-kidneys',
  color: 'text-orange-600',
  bg: 'bg-orange-100',
  price: 450,
  turnaround: '1-2 hrs'
}, {
  id: 'DP5',
  name: 'Perfil Básico + Electrolitos',
  subtitle: 'Hemograma + CHEM 10 + LYTE 4 (Na, K, Cl)',
  icon: 'fa-bolt',
  color: 'text-yellow-600',
  bg: 'bg-yellow-100',
  price: 350,
  turnaround: '1-2 hrs'
}, {
  id: 'DP6',
  name: 'Perfil Electrolitos',
  subtitle: 'LYTE 4 (Na, K, Cl) + Calcio + Fósforo',
  icon: 'fa-bolt',
  color: 'text-cyan-600',
  bg: 'bg-cyan-100',
  price: 220,
  turnaround: '1-2 hrs'
}, {
  id: 'DP7',
  name: 'Perfil Hormonal',
  subtitle: 'T4 Total + TSH + Cortisol (Healvet)',
  icon: 'fa-dna',
  color: 'text-pink-600',
  bg: 'bg-pink-100',
  price: 300,
  turnaround: '2 hrs'
}, {
  id: 'DP8',
  name: 'Perfil Hemoparásitos',
  subtitle: 'Hemograma + Reticulocitos + SNAP 4DX Plus',
  icon: 'fa-bugs',
  color: 'text-red-600',
  bg: 'bg-red-100',
  price: 250,
  turnaround: '1-2 hrs'
}, {
  id: 'DP9',
  name: 'Perfil Felino',
  subtitle: 'Hemograma + Reticulocitos + SNAP Combo Felino',
  icon: 'fa-cat',
  color: 'text-indigo-600',
  bg: 'bg-indigo-100',
  price: 280,
  turnaround: '1-2 hrs'
}];
var categoriasDuenos = [{
  nombre: 'Hematología',
  icon: 'fa-droplet',
  color: 'text-red-500',
  examenes: [{
    id: 'DH1',
    name: 'Hemograma + Reticulocitos',
    subtitle: 'IDEXX',
    icon: 'fa-droplet',
    color: 'text-red-500',
    bg: 'bg-red-50',
    price: 70,
    turnaround: '1 hr'
  }, {
    id: 'DH2',
    name: 'Frotis de Hemoparásitos',
    subtitle: 'Capa flogística',
    icon: 'fa-microscope',
    color: 'text-red-500',
    bg: 'bg-red-50',
    price: 60,
    turnaround: '6-8 hrs'
  }, {
    id: 'DH3',
    name: 'Hemograma Manual',
    subtitle: null,
    icon: 'fa-hand',
    color: 'text-red-500',
    bg: 'bg-red-50',
    price: 65,
    turnaround: '6 hrs'
  }]
}, {
  nombre: 'Bioquímica IDEXX',
  icon: 'fa-flask',
  color: 'text-purple-500',
  examenes: [{
    id: 'DB1',
    name: 'CHEM 10',
    subtitle: 'ALB, GLOB, ALKP, ALT, BUN, CREA, GLU, PT',
    icon: 'fa-flask',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 195,
    turnaround: '1 hr'
  }, {
    id: 'DB2',
    name: 'CHEM 15',
    subtitle: 'CHEM 10 + CA, CHOL, GGT, PHOS, TBIL',
    icon: 'fa-flask',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 270,
    turnaround: '1 hr'
  }, {
    id: 'DB3',
    name: 'Creatinina',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 45,
    turnaround: '1 hr'
  }, {
    id: 'DB4',
    name: 'BUN',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 45,
    turnaround: '1 hr'
  }, {
    id: 'DB5',
    name: 'Fósforo',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 45,
    turnaround: '1 hr'
  }, {
    id: 'DB6',
    name: 'Calcio',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 45,
    turnaround: '1 hr'
  }, {
    id: 'DB7',
    name: 'Amoníaco (NH3)',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 75,
    turnaround: '1 hr'
  }, {
    id: 'DB8',
    name: 'Electrolitos',
    subtitle: 'LYTE 4: Na, K, Cl',
    icon: 'fa-bolt',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 120,
    turnaround: '1 hr'
  }, {
    id: 'DB9',
    name: 'Colesterol',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 45,
    turnaround: '1 hr'
  }, {
    id: 'DB10',
    name: 'Triglicéridos',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 45,
    turnaround: '1 hr'
  }, {
    id: 'DB11',
    name: 'Lactato',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 65,
    turnaround: '1 hr'
  }, {
    id: 'DB12',
    name: 'SDMA',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 220,
    turnaround: '1 hr'
  }, {
    id: 'DB13',
    name: 'Fructosamina',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 140,
    turnaround: '1 hr'
  }, {
    id: 'DB14',
    name: 'Fenobarbital',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 220,
    turnaround: '1 hr'
  }, {
    id: 'DB15',
    name: 'Ácidos Biliares',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 220,
    turnaround: '1 hr'
  }]
}, {
  nombre: 'Endocrinología',
  icon: 'fa-dna',
  color: 'text-pink-500',
  examenes: [{
    id: 'DE1',
    name: 'Cortisol',
    subtitle: 'Inmunofluorescencia - Healvet',
    icon: 'fa-dna',
    color: 'text-pink-500',
    bg: 'bg-pink-50',
    price: 90,
    turnaround: '2 hrs'
  }, {
    id: 'DE2',
    name: 'Progesterona',
    subtitle: 'Inmunofluorescencia - Healvet',
    icon: 'fa-dna',
    color: 'text-pink-500',
    bg: 'bg-pink-50',
    price: 95,
    turnaround: '2 hrs'
  }, {
    id: 'DE3',
    name: 'TSH',
    subtitle: 'Inmunofluorescencia - Healvet',
    icon: 'fa-dna',
    color: 'text-pink-500',
    bg: 'bg-pink-50',
    price: 98,
    turnaround: '2 hrs'
  }, {
    id: 'DE4',
    name: 'T4 Total (Healvet)',
    subtitle: 'Inmunofluorescencia',
    icon: 'fa-dna',
    color: 'text-pink-500',
    bg: 'bg-pink-50',
    price: 110,
    turnaround: '2 hrs'
  }, {
    id: 'DE5',
    name: 'T4 Total (IDEXX)',
    subtitle: 'IDEXX',
    icon: 'fa-dna',
    color: 'text-pink-500',
    bg: 'bg-pink-50',
    price: 140,
    turnaround: '1 hr'
  }, {
    id: 'DE6',
    name: 'T4 Libre',
    subtitle: 'Elisa',
    icon: 'fa-dna',
    color: 'text-pink-500',
    bg: 'bg-pink-50',
    price: 90,
    turnaround: '24 hrs'
  }, {
    id: 'DE7',
    name: 'T3 Triyodotironina',
    subtitle: 'Elisa',
    icon: 'fa-dna',
    color: 'text-pink-500',
    bg: 'bg-pink-50',
    price: 95,
    turnaround: '24 hrs'
  }]
}, {
  nombre: 'PCR en Tiempo Real',
  icon: 'fa-virus',
  color: 'text-emerald-500',
  examenes: [{
    id: 'DPCR1',
    name: 'PCR Leucemia Felina',
    subtitle: 'VILEF',
    icon: 'fa-virus',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
    price: 400,
    turnaround: '24-48 hrs'
  }, {
    id: 'DPCR2',
    name: 'PCR Mycoplasma Hemotrópico',
    subtitle: null,
    icon: 'fa-virus',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
    price: 400,
    turnaround: '24-48 hrs'
  }, {
    id: 'DPCR3',
    name: 'PCR Leptospira Interrogans',
    subtitle: null,
    icon: 'fa-virus',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
    price: 400,
    turnaround: '24-48 hrs'
  }, {
    id: 'DPCR4',
    name: 'PCR VIF / VILEF',
    subtitle: null,
    icon: 'fa-virus',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
    price: 420,
    turnaround: '24-48 hrs'
  }, {
    id: 'DPCR5',
    name: 'PCR Panel Completo',
    subtitle: 'Babesia, Lyme, Erlichia, Anaplasma, Mycoplasma',
    icon: 'fa-virus',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
    price: 480,
    turnaround: '24-48 hrs'
  }]
}, {
  nombre: 'Inmunoserología',
  icon: 'fa-shield-virus',
  color: 'text-blue-500',
  examenes: [{
    id: 'DI1',
    name: 'SNAP Combo Felino',
    subtitle: 'VIF y VILEF - IDEXX',
    icon: 'fa-cat',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    price: 240,
    turnaround: '1 hr'
  }, {
    id: 'DI2',
    name: 'SNAP 4DX',
    subtitle: 'E. canis, Lyme, Anaplasma, Dirofilaria - IDEXX',
    icon: 'fa-dog',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    price: 220,
    turnaround: '1 hr'
  }, {
    id: 'DI3',
    name: 'SNAP cPL Cualitativo',
    subtitle: 'IDEXX',
    icon: 'fa-shield-virus',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    price: 180,
    turnaround: '1 hr'
  }, {
    id: 'DI4',
    name: 'SNAP fPL Cualitativo',
    subtitle: 'IDEXX',
    icon: 'fa-shield-virus',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    price: 140,
    turnaround: '1 hr'
  }, {
    id: 'DI5',
    name: 'Brucella Canino',
    subtitle: 'Rosa de Bengala',
    icon: 'fa-shield-virus',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    price: 180,
    turnaround: '24 hrs'
  }, {
    id: 'DI6',
    name: 'Leptospira MAT',
    subtitle: '6 Serovares - Campo oscuro',
    icon: 'fa-shield-virus',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    price: 180,
    turnaround: '24-48 hrs'
  }, {
    id: 'DI7',
    name: 'Toxoplasma IgG & IgM',
    subtitle: 'Elisa',
    icon: 'fa-shield-virus',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    price: 300,
    turnaround: '24 hrs'
  }, {
    id: 'DI8',
    name: 'Lipasa Canina/Felina',
    subtitle: 'Cuantitativa - Healvet',
    icon: 'fa-shield-virus',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    price: 120,
    turnaround: '2 hrs'
  }, {
    id: 'DI9',
    name: 'Lipasa Canina/Felina',
    subtitle: 'Cuantitativa - IDEXX',
    icon: 'fa-shield-virus',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    price: 190,
    turnaround: '1 hr'
  }]
}, {
  nombre: 'Coagulación',
  icon: 'fa-bandage',
  color: 'text-rose-500',
  examenes: [{
    id: 'DC1',
    name: 'TP + TTPA + Fibrinógeno',
    subtitle: null,
    icon: 'fa-bandage',
    color: 'text-rose-500',
    bg: 'bg-rose-50',
    price: 150,
    turnaround: '6 hrs'
  }, {
    id: 'DC2',
    name: 'TP + TTPA + Fibrinógeno + Dímero D',
    subtitle: null,
    icon: 'fa-bandage',
    color: 'text-rose-500',
    bg: 'bg-rose-50',
    price: 250,
    turnaround: '6 hrs'
  }]
}, {
  nombre: 'Patología',
  icon: 'fa-microscope',
  color: 'text-slate-500',
  examenes: [{
    id: 'DPA1',
    name: 'Citología',
    subtitle: '3-5 días hábiles',
    icon: 'fa-microscope',
    color: 'text-slate-500',
    bg: 'bg-slate-50',
    price: 130,
    turnaround: '3-5 días'
  }, {
    id: 'DPA2',
    name: 'Histopatología',
    subtitle: '7-10 días hábiles',
    icon: 'fa-microscope',
    color: 'text-slate-500',
    bg: 'bg-slate-50',
    price: 250,
    turnaround: '7-10 días'
  }]
}, {
  nombre: 'Uroanálisis',
  icon: 'fa-vial',
  color: 'text-yellow-500',
  examenes: [{
    id: 'DU1',
    name: 'Examen de Orina Completo',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-yellow-500',
    bg: 'bg-yellow-50',
    price: 45,
    turnaround: '12 hrs'
  }, {
    id: 'DU2',
    name: 'Urocultivo',
    subtitle: null,
    icon: 'fa-bacteria',
    color: 'text-yellow-500',
    bg: 'bg-yellow-50',
    price: 50,
    turnaround: '3-5 días'
  }, {
    id: 'DU3',
    name: 'Ex. Orina + Urocultivo',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-yellow-500',
    bg: 'bg-yellow-50',
    price: 83,
    turnaround: '3-5 días'
  }, {
    id: 'DU4',
    name: 'Cociente Proteína/Creatinina UPC',
    subtitle: 'Colorimetría',
    icon: 'fa-vial',
    color: 'text-yellow-500',
    bg: 'bg-yellow-50',
    price: 90,
    turnaround: '6 hrs'
  }, {
    id: 'DU5',
    name: 'Cociente Proteína/Creatinina UPC',
    subtitle: 'IDEXX',
    icon: 'fa-vial',
    color: 'text-yellow-500',
    bg: 'bg-yellow-50',
    price: 83,
    turnaround: '3-5 días'
  }, {
    id: 'DU6',
    name: 'Ex. Orina Completo IDEXX',
    subtitle: 'SEDIVUE DX',
    icon: 'fa-vial',
    color: 'text-yellow-500',
    bg: 'bg-yellow-50',
    price: 155,
    turnaround: '1 hr'
  }]
}, {
  nombre: 'Parasitología',
  icon: 'fa-bugs',
  color: 'text-orange-500',
  examenes: [{
    id: 'DPR1',
    name: 'Coprológico Simple',
    subtitle: null,
    icon: 'fa-poop',
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    price: 45,
    turnaround: '12 hrs'
  }, {
    id: 'DPR2',
    name: 'Coprológico Funcional',
    subtitle: null,
    icon: 'fa-poop',
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    price: 55,
    turnaround: '12 hrs'
  }, {
    id: 'DPR3',
    name: 'Coprológico Completo',
    subtitle: null,
    icon: 'fa-poop',
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    price: 80,
    turnaround: '12-24 hrs'
  }, {
    id: 'DPR4',
    name: 'Coprológico Seriado',
    subtitle: null,
    icon: 'fa-poop',
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    price: 95,
    turnaround: '12-24 hrs'
  }]
}, {
  nombre: 'Microbiología',
  icon: 'fa-bacteria',
  color: 'text-lime-600',
  examenes: [{
    id: 'DM1',
    name: 'Cultivo + 1 Antibiograma',
    subtitle: 'Piel y Oído',
    icon: 'fa-bacteria',
    color: 'text-lime-600',
    bg: 'bg-lime-50',
    price: 120,
    turnaround: '3-5 días'
  }]
}];
var getTomaMuestraPrice = function getTomaMuestraPrice(district, examTotal) {
  if (!district) return null;
  var key = district.toLowerCase().trim();
  var precios = tomaMuestraPrecios[key];
  if (!precios) return null;
  return examTotal >= 250 ? precios.promo : precios.normal;
};
var todosLosExamenes = [].concat(perfiles, _toConsumableArray(categorias.flatMap(function (cat) {
  return cat.examenes;
})));
var animalTypes = [{
  id: 'perro',
  name: 'Perro',
  icon: '🐕'
}, {
  id: 'gato',
  name: 'Gato',
  icon: '🐱'
}, {
  id: 'caballo',
  name: 'Caballo',
  icon: '🐴'
}];
var formatAge = function formatAge(pet) {
  // Nuevo formato: ageValue + ageUnit
  if (pet.ageValue !== undefined && pet.ageUnit) {
    var val = pet.ageValue;
    if (pet.ageUnit === 'años') return "".concat(val, " a\xF1o").concat(val !== 1 ? 's' : '');
    return "".concat(val, " mes").concat(val !== 1 ? 'es' : '');
  }
  // Formato anterior (compatibilidad): ageYears + ageMonths
  if (pet.ageYears !== undefined || pet.ageMonths !== undefined) {
    var years = pet.ageYears || 0;
    var months = pet.ageMonths || 0;
    if (years > 0 && months > 0) return "".concat(years, " a\xF1o").concat(years > 1 ? 's' : '', " ").concat(months, " mes").concat(months > 1 ? 'es' : '');
    if (years > 0) return "".concat(years, " a\xF1o").concat(years > 1 ? 's' : '');
    if (months > 0) return "".concat(months, " mes").concat(months > 1 ? 'es' : '');
  }
  // Formato más antiguo: solo age (años)
  if (pet.age !== undefined) return "".concat(pet.age, " a\xF1o").concat(pet.age !== 1 ? 's' : '');
  return 'Edad no especificada';
};

// Función para búsqueda flexible (maneja variaciones de género)
var flexibleSearch = function flexibleSearch(text, searchTerm) {
  var t = text.toLowerCase();
  var s = searchTerm.toLowerCase().trim();
  if (t.includes(s)) return true;
  // Variaciones de género
  var variations = {
    'canino': ['canina', 'caninos', 'caninas'],
    'canina': ['canino', 'caninos', 'caninas'],
    'felino': ['felina', 'felinos', 'felinas'],
    'felina': ['felino', 'felinos', 'felinas'],
    'completo': ['completa', 'completos', 'completas'],
    'completa': ['completo', 'completos', 'completas'],
    'cuantitativo': ['cuantitativa', 'cuantitativos', 'cuantitativas'],
    'cuantitativa': ['cuantitativo', 'cuantitativos', 'cuantitativas'],
    'cualitativo': ['cualitativa', 'cualitativos', 'cualitativas'],
    'cualitativa': ['cualitativo', 'cualitativos', 'cualitativas'],
    'basico': ['basica', 'básico', 'básica'],
    'básico': ['básica', 'basico', 'basica'],
    'renal': ['renales'],
    'hormonal': ['hormonales'],
    'funcional': ['funcionales'],
    'simple': ['simples']
  };
  if (variations[s]) {
    var _iterator = _createForOfIteratorHelper(variations[s]),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var variant = _step.value;
        if (t.includes(variant)) return true;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return false;
};

// =============================================================================
// API SERVICE LAYER
// Configurar BASE_URL según el entorno del backend
// =============================================================================
var API_BASE = "https://inulab-backend-production.up.railway.app";
var getToken = function getToken() {
  return localStorage.getItem('inulab_token');
};
var api = {
  // Headers comunes con autenticación JWT
  _headers: function _headers() {
    var h = {
      'Content-Type': 'application/json'
    };
    var token = getToken();
    if (token) h['Authorization'] = "Bearer ".concat(token);
    return h;
  },
  // --- AUTH ---
  login: function login(username, password) {
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var res, data;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return fetch("".concat(API_BASE, "/api/Auth/login"), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                username: username,
                password: password
              })
            });
          case 1:
            res = _context.v;
            if (res.ok) {
              _context.n = 2;
              break;
            }
            throw new Error('Usuario o contraseña incorrectos');
          case 2:
            _context.n = 3;
            return res.json();
          case 3:
            data = _context.v;
            localStorage.setItem('inulab_token', data.token);
            return _context.a(2, data);
        }
      }, _callee);
    }))();
  },
  getMe: function getMe() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var res;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _context2.n = 1;
            return fetch("".concat(API_BASE, "/api/Auth/me"), {
              headers: _this._headers()
            });
          case 1:
            res = _context2.v;
            if (res.ok) {
              _context2.n = 2;
              break;
            }
            throw new Error('No autenticado');
          case 2:
            _context2.n = 3;
            return res.json();
          case 3:
            return _context2.a(2, _context2.v);
        }
      }, _callee2);
    }))();
  },
  // --- PERFIL ---
  updateProfile: function updateProfile(profileData) {
    var _this2 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var res, err;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            _context3.n = 1;
            return fetch("".concat(API_BASE, "/users/profile"), {
              method: 'PUT',
              headers: _this2._headers(),
              body: JSON.stringify(profileData)
            });
          case 1:
            res = _context3.v;
            if (res.ok) {
              _context3.n = 3;
              break;
            }
            _context3.n = 2;
            return res.json();
          case 2:
            err = _context3.v;
            throw new Error(err.error || 'Error al actualizar perfil');
          case 3:
            _context3.n = 4;
            return res.json();
          case 4:
            return _context3.a(2, _context3.v);
        }
      }, _callee3);
    }))();
  },
  // --- MASCOTAS / PACIENTES ---
  createPet: function createPet(petData) {
    var _this3 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      var res;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            _context4.n = 1;
            return fetch("".concat(API_BASE, "/pets"), {
              method: 'POST',
              headers: _this3._headers(),
              body: JSON.stringify(petData)
            });
          case 1:
            res = _context4.v;
            if (res.ok) {
              _context4.n = 2;
              break;
            }
            throw new Error('Error al crear paciente');
          case 2:
            _context4.n = 3;
            return res.json();
          case 3:
            return _context4.a(2, _context4.v);
        }
      }, _callee4);
    }))();
  },
  getPets: function getPets() {
    var _this4 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
      var res;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            _context5.n = 1;
            return fetch("".concat(API_BASE, "/pets"), {
              headers: _this4._headers()
            });
          case 1:
            res = _context5.v;
            if (res.ok) {
              _context5.n = 2;
              break;
            }
            throw new Error('Error al obtener mascotas');
          case 2:
            _context5.n = 3;
            return res.json();
          case 3:
            return _context5.a(2, _context5.v);
        }
      }, _callee5);
    }))();
  },
  // --- DIRECCIONES ---
  createAddress: function createAddress(addressData) {
    var _this5 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
      var res;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            _context6.n = 1;
            return fetch("".concat(API_BASE, "/addresses"), {
              method: 'POST',
              headers: _this5._headers(),
              body: JSON.stringify(addressData)
            });
          case 1:
            res = _context6.v;
            if (res.ok) {
              _context6.n = 2;
              break;
            }
            throw new Error('Error al crear dirección');
          case 2:
            _context6.n = 3;
            return res.json();
          case 3:
            return _context6.a(2, _context6.v);
        }
      }, _callee6);
    }))();
  },
  getAddresses: function getAddresses() {
    var _this6 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
      var res;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.n) {
          case 0:
            _context7.n = 1;
            return fetch("".concat(API_BASE, "/addresses"), {
              headers: _this6._headers()
            });
          case 1:
            res = _context7.v;
            if (res.ok) {
              _context7.n = 2;
              break;
            }
            throw new Error('Error al obtener direcciones');
          case 2:
            _context7.n = 3;
            return res.json();
          case 3:
            return _context7.a(2, _context7.v);
        }
      }, _callee7);
    }))();
  },
  // --- PEDIDOS ---
  createOrder: function createOrder(orderData) {
    var _this7 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
      var res;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.n) {
          case 0:
            _context8.n = 1;
            return fetch("".concat(API_BASE, "/orders"), {
              method: 'POST',
              headers: _this7._headers(),
              body: JSON.stringify(orderData)
            });
          case 1:
            res = _context8.v;
            if (res.ok) {
              _context8.n = 2;
              break;
            }
            throw new Error('Error al crear pedido');
          case 2:
            _context8.n = 3;
            return res.json();
          case 3:
            return _context8.a(2, _context8.v);
        }
      }, _callee8);
    }))();
  },
  getOrders: function getOrders() {
    var _this8 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
      var res;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.n) {
          case 0:
            _context9.n = 1;
            return fetch("".concat(API_BASE, "/orders"), {
              headers: _this8._headers()
            });
          case 1:
            res = _context9.v;
            if (res.ok) {
              _context9.n = 2;
              break;
            }
            throw new Error('Error al obtener pedidos');
          case 2:
            _context9.n = 3;
            return res.json();
          case 3:
            return _context9.a(2, _context9.v);
        }
      }, _callee9);
    }))();
  },
  // --- RESULTADOS ---
  markExamSeen: function markExamSeen(examId) {
    var _this9 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0() {
      var res;
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.n) {
          case 0:
            _context0.n = 1;
            return fetch("".concat(API_BASE, "/exams/").concat(examId, "/seen"), {
              method: 'PUT',
              headers: _this9._headers()
            });
          case 1:
            res = _context0.v;
            if (res.ok) {
              _context0.n = 2;
              break;
            }
            throw new Error('Error al marcar como visto');
          case 2:
            _context0.n = 3;
            return res.json();
          case 3:
            return _context0.a(2, _context0.v);
        }
      }, _callee0);
    }))();
  },
  // --- CONFIG ---
  getConfig: function getConfig() {
    var _this0 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1() {
      var res;
      return _regenerator().w(function (_context1) {
        while (1) switch (_context1.n) {
          case 0:
            _context1.n = 1;
            return fetch("".concat(API_BASE, "/config"), {
              headers: _this0._headers()
            });
          case 1:
            res = _context1.v;
            if (res.ok) {
              _context1.n = 2;
              break;
            }
            return _context1.a(2, {
              nightMode: false
            });
          case 2:
            _context1.n = 3;
            return res.json();
          case 3:
            return _context1.a(2, _context1.v);
        }
      }, _callee1);
    }))();
  }
};

// =============================================================================
// NOTA SOBRE PDFs:
// El frontend actual usa exam.pdfData para mostrar PDFs (puede ser base64 o URL).
// El backend puede devolver pdfData como URL (ej: "https://storage.../result.pdf")
// y los iframes/links funcionarán igual. También puede usar un campo pdfUrl.
// Si se usa pdfUrl, hacer find-and-replace de "pdfData" → "pdfUrl" en el render.
// Para invoicePdf es lo mismo: puede ser URL directa al comprobante PDF.
// =============================================================================

// =============================================================================
// =============================================================================
// NOTA: Los datos de demo (initialDatabase) han sido eliminados.
// Todos los datos se cargan desde el backend via API (ver sección API SERVICE LAYER).
// =============================================================================

// SwipeToDelete — slide left to reveal red delete zone
var SwipeToDelete = function SwipeToDelete(_ref) {
  var children = _ref.children,
    onDelete = _ref.onDelete;
  var _React$useState = React.useState(0),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    dx = _React$useState2[0],
    setDx = _React$useState2[1];
  var _React$useState3 = React.useState(null),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    startX = _React$useState4[0],
    setStartX = _React$useState4[1];
  var _React$useState5 = React.useState(null),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    startY = _React$useState6[0],
    setStartY = _React$useState6[1];
  var _React$useState7 = React.useState(false),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    swiped = _React$useState8[0],
    setSwiped = _React$useState8[1];
  var _React$useState9 = React.useState(false),
    _React$useState0 = _slicedToArray(_React$useState9, 2),
    isScrolling = _React$useState0[0],
    setIsScrolling = _React$useState0[1];
  var revealWidth = 76;
  var onTouchStart = function onTouchStart(e) {
    setStartX(e.touches[0].clientX);
    setStartY(e.touches[0].clientY);
    setIsScrolling(false);
  };
  var onTouchMove = function onTouchMove(e) {
    if (startX === null) return;
    var deltaX = e.touches[0].clientX - startX;
    var deltaY = e.touches[0].clientY - startY;
    if (!isScrolling && Math.abs(deltaY) > Math.abs(deltaX) + 4) {
      setIsScrolling(true);
      return;
    }
    if (isScrolling) return;
    if (deltaX < 0) {
      e.preventDefault();
      var base = swiped ? -revealWidth : 0;
      setDx(Math.max(base + deltaX, -revealWidth));
    } else if (swiped) {
      setDx(Math.min(0, -revealWidth + deltaX));
    }
  };
  var onTouchEnd = function onTouchEnd() {
    if (!isScrolling) {
      if (dx <= -revealWidth / 2) {
        setSwiped(true);
        setDx(-revealWidth);
      } else {
        setSwiped(false);
        setDx(0);
      }
    }
    setStartX(null);
    setStartY(null);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      marginBottom: '8px',
      borderRadius: '12px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      width: "".concat(revealWidth + 20, "px"),
      background: '#ef4444',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 0
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-trash text-white text-base"
  })), /*#__PURE__*/React.createElement("div", {
    onTouchStart: onTouchStart,
    onTouchMove: onTouchMove,
    onTouchEnd: onTouchEnd,
    onClick: swiped ? function (e) {
      e.stopPropagation();
      onDelete();
    } : undefined,
    style: {
      width: '100%',
      transform: "translateX(".concat(dx, "px)"),
      transition: startX === null ? 'transform 0.22s ease' : 'none',
      position: 'relative',
      zIndex: 1
    }
  }, children));
};
var App = function App() {
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    database = _useState2[0],
    setDatabase = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isAuthenticated = _useState4[0],
    setIsAuthenticated = _useState4[1];
  var _useState5 = useState(null),
    _useState6 = _slicedToArray(_useState5, 2),
    currentUser = _useState6[0],
    setCurrentUser = _useState6[1];
  var _useState7 = useState(null),
    _useState8 = _slicedToArray(_useState7, 2),
    userType = _useState8[0],
    setUserType = _useState8[1];
  var _useState9 = useState(''),
    _useState0 = _slicedToArray(_useState9, 2),
    username = _useState0[0],
    setUsername = _useState0[1];
  var _useState1 = useState(''),
    _useState10 = _slicedToArray(_useState1, 2),
    password = _useState10[0],
    setPassword = _useState10[1];
  var _useState11 = useState(''),
    _useState12 = _slicedToArray(_useState11, 2),
    error = _useState12[0],
    setError = _useState12[1];
  var _useState13 = useState(true),
    _useState14 = _slicedToArray(_useState13, 2),
    loading = _useState14[0],
    setLoading = _useState14[1];
  var _useState15 = useState('pedidos'),
    _useState16 = _slicedToArray(_useState15, 2),
    activeTab = _useState16[0],
    setActiveTab = _useState16[1];
  var _useState17 = useState(''),
    _useState18 = _slicedToArray(_useState17, 2),
    searchTerm = _useState18[0],
    setSearchTerm = _useState18[1];
  var _useState19 = useState(null),
    _useState20 = _slicedToArray(_useState19, 2),
    selectedPet = _useState20[0],
    setSelectedPet = _useState20[1];
  var _useState21 = useState(null),
    _useState22 = _slicedToArray(_useState21, 2),
    selectedExam = _useState22[0],
    setSelectedExam = _useState22[1];
  var _useState23 = useState(null),
    _useState24 = _slicedToArray(_useState23, 2),
    viewingInvoice = _useState24[0],
    setViewingInvoice = _useState24[1];
  var _useState25 = useState(null),
    _useState26 = _slicedToArray(_useState25, 2),
    viewingOrderTracking = _useState26[0],
    setViewingOrderTracking = _useState26[1];
  var _useState27 = useState(false),
    _useState28 = _slicedToArray(_useState27, 2),
    showAllPending = _useState28[0],
    setShowAllPending = _useState28[1];
  var _useState29 = useState(false),
    _useState30 = _slicedToArray(_useState29, 2),
    trackingMenuOpen = _useState30[0],
    setTrackingMenuOpen = _useState30[1];
  var _useState31 = useState([]),
    _useState32 = _slicedToArray(_useState31, 2),
    cart = _useState32[0],
    setCart = _useState32[1];
  var _useState33 = useState([]),
    _useState34 = _slicedToArray(_useState33, 2),
    pendingExams = _useState34[0],
    setPendingExams = _useState34[1];
  var _useState35 = useState(null),
    _useState36 = _slicedToArray(_useState35, 2),
    currentExamForPet = _useState36[0],
    setCurrentExamForPet = _useState36[1];
  var _useState37 = useState(''),
    _useState38 = _slicedToArray(_useState37, 2),
    petSearchTerm = _useState38[0],
    setPetSearchTerm = _useState38[1];
  var _useState39 = useState(false),
    _useState40 = _slicedToArray(_useState39, 2),
    showNewPetForm = _useState40[0],
    setShowNewPetForm = _useState40[1];
  var _useState41 = useState({
      name: '',
      owner: '',
      animalType: '',
      breed: '',
      ageValue: '',
      ageUnit: 'años',
      sex: ''
    }),
    _useState42 = _slicedToArray(_useState41, 2),
    newPet = _useState42[0],
    setNewPet = _useState42[1];
  var _useState43 = useState(false),
    _useState44 = _slicedToArray(_useState43, 2),
    showOrderSummary = _useState44[0],
    setShowOrderSummary = _useState44[1];
  var _useState45 = useState('factura'),
    _useState46 = _slicedToArray(_useState45, 2),
    invoiceType = _useState46[0],
    setInvoiceType = _useState46[1]; // 'boleta', 'factura'
  var _useState47 = useState(null),
    _useState48 = _slicedToArray(_useState47, 2),
    selectedPetForOrder = _useState48[0],
    setSelectedPetForOrder = _useState48[1];
  var _useState49 = useState(false),
    _useState50 = _slicedToArray(_useState49, 2),
    showAddressSelection = _useState50[0],
    setShowAddressSelection = _useState50[1];
  var _useState51 = useState(false),
    _useState52 = _slicedToArray(_useState51, 2),
    showNewAddressForm = _useState52[0],
    setShowNewAddressForm = _useState52[1];
  var _useState53 = useState({
      name: '',
      address: '',
      district: '',
      reference: ''
    }),
    _useState54 = _slicedToArray(_useState53, 2),
    newAddress = _useState54[0],
    setNewAddress = _useState54[1];
  var _useState55 = useState(false),
    _useState56 = _slicedToArray(_useState55, 2),
    newResultHighlight = _useState56[0],
    setNewResultHighlight = _useState56[1];
  var _useState57 = useState(false),
    _useState58 = _slicedToArray(_useState57, 2),
    newInvoiceHighlight = _useState58[0],
    setNewInvoiceHighlight = _useState58[1];
  var _useState59 = useState(0),
    _useState60 = _slicedToArray(_useState59, 2),
    lastSeenResultCount = _useState60[0],
    setLastSeenResultCount = _useState60[1];
  var _useState61 = useState(0),
    _useState62 = _slicedToArray(_useState61, 2),
    lastSeenInvoiceCount = _useState62[0],
    setLastSeenInvoiceCount = _useState62[1];
  var _useState63 = useState(false),
    _useState64 = _slicedToArray(_useState63, 2),
    showEditProfile = _useState64[0],
    setShowEditProfile = _useState64[1];
  var _useState65 = useState({
      name: '',
      clinic: '',
      phone: '',
      email: '',
      address: '',
      district: '',
      ruc: ''
    }),
    _useState66 = _slicedToArray(_useState65, 2),
    editProfile = _useState66[0],
    setEditProfile = _useState66[1];
  var _useState67 = useState(null),
    _useState68 = _slicedToArray(_useState67, 2),
    selectedUserForUpload = _useState68[0],
    setSelectedUserForUpload = _useState68[1];
  var _useState69 = useState(null),
    _useState70 = _slicedToArray(_useState69, 2),
    selectedPetForUpload = _useState70[0],
    setSelectedPetForUpload = _useState70[1];
  var _useState71 = useState(null),
    _useState72 = _slicedToArray(_useState71, 2),
    uploadedFile = _useState72[0],
    setUploadedFile = _useState72[1];
  var _useState73 = useState(''),
    _useState74 = _slicedToArray(_useState73, 2),
    examTitle = _useState74[0],
    setExamTitle = _useState74[1];
  var _useState75 = useState(new Date().toISOString().split('T')[0]),
    _useState76 = _slicedToArray(_useState75, 2),
    examDate = _useState76[0],
    setExamDate = _useState76[1];
  var _useState77 = useState(''),
    _useState78 = _slicedToArray(_useState77, 2),
    successMessage = _useState78[0],
    setSuccessMessage = _useState78[1];
  var _useState79 = useState(null),
    _useState80 = _slicedToArray(_useState79, 2),
    selectedPaqueteDetail = _useState80[0],
    setSelectedPaqueteDetail = _useState80[1];
  var _useState81 = useState(''),
    _useState82 = _slicedToArray(_useState81, 2),
    mascotaSearchTerm = _useState82[0],
    setMascotaSearchTerm = _useState82[1];
  var _useState83 = useState(null),
    _useState84 = _slicedToArray(_useState83, 2),
    selectedMascota = _useState84[0],
    setSelectedMascota = _useState84[1];
  var _useState85 = useState(''),
    _useState86 = _slicedToArray(_useState85, 2),
    examFilterType = _useState86[0],
    setExamFilterType = _useState86[1];
  var _useState87 = useState(''),
    _useState88 = _slicedToArray(_useState87, 2),
    examSearchTerm = _useState88[0],
    setExamSearchTerm = _useState88[1];
  var _useState89 = useState(''),
    _useState90 = _slicedToArray(_useState89, 2),
    examFilterDay = _useState90[0],
    setExamFilterDay = _useState90[1];
  var _useState91 = useState(''),
    _useState92 = _slicedToArray(_useState91, 2),
    examFilterMonth = _useState92[0],
    setExamFilterMonth = _useState92[1];
  var _useState93 = useState(''),
    _useState94 = _slicedToArray(_useState93, 2),
    examFilterYear = _useState94[0],
    setExamFilterYear = _useState94[1];
  var _useState95 = useState(false),
    _useState96 = _slicedToArray(_useState95, 2),
    menuOpen = _useState96[0],
    setMenuOpen = _useState96[1];
  var _useState97 = useState(false),
    _useState98 = _slicedToArray(_useState97, 2),
    duenoMenuOpen = _useState98[0],
    setDuenoMenuOpen = _useState98[1];
  var _useState99 = useState('main'),
    _useState100 = _slicedToArray(_useState99, 2),
    duenoView = _useState100[0],
    setDuenoView = _useState100[1]; // 'main' o 'config'
  var _useState101 = useState(''),
    _useState102 = _slicedToArray(_useState101, 2),
    orderComment = _useState102[0],
    setOrderComment = _useState102[1];
  var _useState103 = useState(false),
    _useState104 = _slicedToArray(_useState103, 2),
    termsAccepted = _useState104[0],
    setTermsAccepted = _useState104[1];
  var _useState105 = useState(false),
    _useState106 = _slicedToArray(_useState105, 2),
    showTermsModal = _useState106[0],
    setShowTermsModal = _useState106[1];
  var _useState107 = useState(false),
    _useState108 = _slicedToArray(_useState107, 2),
    showTechnicalExams = _useState108[0],
    setShowTechnicalExams = _useState108[1];
  var _useState109 = useState(false),
    _useState110 = _slicedToArray(_useState109, 2),
    showTomaMuestraStep = _useState110[0],
    setShowTomaMuestraStep = _useState110[1];
  var _useState111 = useState(null),
    _useState112 = _slicedToArray(_useState111, 2),
    pendingOrderAddress = _useState112[0],
    setPendingOrderAddress = _useState112[1];
  useEffect(function () {
    setLoading(false);
    setIsAuthenticated(false);
  }, []);
  var examTotal = cart.reduce(function (sum, item) {
    return sum + (item.exam.price || 0);
  }, 0);
  var tomaMuestraFees = function () {
    var counted = new Set();
    return cart.reduce(function (sum, item) {
      if (!item.tomaMuestra || !item.address) return sum;
      var addrKey = item.address.id || item.address.name;
      if (counted.has(addrKey)) return sum;
      counted.add(addrKey);
      var price = getTomaMuestraPrice(item.address.district, examTotal);
      return sum + (price || 0);
    }, 0);
  }();
  var cartTotal = examTotal + tomaMuestraFees;
  var termsContent = {
    notas: ['Los tubos de muestra deben ser llenados estrictamente hasta la marca indicada, según el volumen requerido para garantizar la validez del análisis.', 'Los resultados de las muestras se entregan en un tiempo aproximado de 1 a 2 horas para exámenes IDEXX y Healvet, sujeto a variaciones según la ubicación.', 'El horario de recepción y procesamiento para muestras manuales (hemograma manual, frotis sanguíneo, exámenes coprológicos y análisis de orina) es de lunes a viernes de 9:00 a.m. a 5:00 p.m. y los días sábado de 9:00 a.m. a 2:00 p.m.', 'Disponible 24 hrs solo para exámenes de IDEXX y Healvet.'],
    tenerEnCuenta: ['Las diluciones no están incluidas en los paquetes. En caso de requerirse por alerta del equipo o condición del paciente, se realizarán bajo criterio médico y se cobrarán como analito individual.', 'Los precios están expresados en Soles (S/) e incluyen IGV.', 'Los tiempos de entrega son aproximados y pueden variar según la complejidad del análisis y la ubicación del paciente.'],
    tomaMuestra: ['Para los exámenes que lo requieran, la mascota deberá cumplir con el ayuno indicado previamente (generalmente entre 8 y 12 horas). Es responsabilidad del propietario confirmar las indicaciones antes del servicio. En caso de no cumplir el ayuno, INULABORATORIOS no se hace responsable por las alteraciones que puedan presentarse en los resultados.', 'Para solicitar el servicio de toma de muestra a domicilio, se requiere un adelanto del 30% del valor total del pedido al momento de la confirmación.', 'Las reprogramaciones deben solicitarse con un mínimo de 24 horas de anticipación. Si la reprogramación se solicita con menos de 24 horas, se aplicará un cargo adicional de S/ 30 al pago restante. Si al momento de solicitar la reprogramación ya se le ha comunicado que el equipo salió y está en camino a la dirección, el cargo adicional será de S/ 50 al pago restante.', 'El propietario deberá informar con anticipación si la mascota presenta antecedentes de conducta difícil. Esta información debe ser <strong>indicada en la sección de Comentarios</strong> al momento de solicitar el pedido, especificando detalles como: si la mascota muerde, se agita mucho, solo se deja cargar o manipular por el dueño, tiene miedo a extraños, requiere bozal, o cualquier otro dato relevante que facilite el manejo seguro durante el procedimiento.', 'Durante la toma de muestra, se recomienda mantener un ambiente tranquilo y seguro. Se espera que el propietario brinde apoyo durante el procedimiento, permaneciendo cerca para tranquilizarla o ayudando en su contención de manera segura.', 'El equipo evaluará en el momento si existen condiciones adecuadas para realizar la toma de muestra. En caso de que la mascota no permita el procedimiento de manera segura y no se haya informado previamente, el servicio podrá ser suspendido.', 'Si el procedimiento no puede realizarse debido a conducta no informada o imposibilidad de manejo seguro, no corresponde devolución del monto pagado por concepto de toma de muestra, dado que el servicio de desplazamiento ya fue brindado.', 'El equipo se reserva el derecho de suspender el procedimiento cuando considere que existen riesgos para la integridad de la mascota o del personal.']
  };
  var renderTermsModal = function renderTermsModal() {
    return showTermsModal && /*#__PURE__*/React.createElement("div", {
      className: "fixed inset-0 flex flex-col bg-white",
      style: {
        zIndex: 999999
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-cyan-500 px-6 py-4 flex items-center justify-between flex-shrink-0"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-contract text-white text-lg"
    })), /*#__PURE__*/React.createElement("h2", {
      className: "text-lg font-bold text-white"
    }, "T\xE9rminos y Condiciones")), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowTermsModal(false);
      },
      className: "w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-times text-lg"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 overflow-y-auto px-6 py-6 flex flex-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-2xl mx-auto my-auto"
    }, (freshUser === null || freshUser === void 0 ? void 0 : freshUser.type) === 'dueño' && /*#__PURE__*/React.createElement("div", {
      className: "mb-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mb-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 mb-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-syringe text-emerald-600 text-sm"
    })), /*#__PURE__*/React.createElement("h3", {
      className: "font-bold text-gray-800 text-lg"
    }, "Para el caso de toma de muestra a domicilio")), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-500 mb-3"
    }, "Cuando necesitas que un profesional vaya a tu domicilio a tomar la muestra de tu mascota.")), /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, termsContent.tomaMuestra.map(function (item, i) {
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        className: "flex gap-3"
      }, /*#__PURE__*/React.createElement("span", {
        className: "w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
      }, i + 1), /*#__PURE__*/React.createElement("p", {
        className: "text-sm text-gray-600 leading-relaxed text-justify",
        dangerouslySetInnerHTML: {
          __html: item
        }
      }));
    }))), (freshUser === null || freshUser === void 0 ? void 0 : freshUser.type) === 'dueño' && /*#__PURE__*/React.createElement("div", {
      className: "mb-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "border-t-2 border-cyan-200 pt-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 mb-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-truck text-cyan-600 text-sm"
    })), /*#__PURE__*/React.createElement("h3", {
      className: "font-bold text-gray-800 text-lg"
    }, "Para el caso de recojo de muestras")), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-500 mb-3"
    }, "Cuando ya tienes la muestra lista y solo necesitas que la recojamos."))), /*#__PURE__*/React.createElement("div", {
      className: "mb-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 mb-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-clipboard-list text-blue-600 text-sm"
    })), /*#__PURE__*/React.createElement("h3", {
      className: "font-bold text-gray-800 text-lg"
    }, "Condiciones del Servicio")), /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, termsContent.notas.map(function (nota, i) {
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        className: "flex gap-3"
      }, /*#__PURE__*/React.createElement("span", {
        className: "w-6 h-6 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
      }, i + 1), /*#__PURE__*/React.createElement("p", {
        className: "text-sm text-gray-600 leading-relaxed text-justify"
      }, nota));
    }))), /*#__PURE__*/React.createElement("div", {
      className: "mb-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 mb-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-exclamation-triangle text-amber-600 text-sm"
    })), /*#__PURE__*/React.createElement("h3", {
      className: "font-bold text-gray-800 text-lg"
    }, "Tener en Cuenta")), /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, termsContent.tenerEnCuenta.map(function (item, i) {
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        className: "flex gap-3"
      }, /*#__PURE__*/React.createElement("span", {
        className: "w-6 h-6 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-info text-xs"
      })), /*#__PURE__*/React.createElement("p", {
        className: "text-sm text-gray-600 leading-relaxed text-justify"
      }, item));
    }))), /*#__PURE__*/React.createElement("div", {
      className: "bg-gray-50 rounded-xl p-4 text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-500 mb-1"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-map-marker-alt text-cyan-500 mr-1"
    }), "Alameda del Sereno 495, La Alborada - Santiago de Surco, Lima"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-500"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-phone text-cyan-500 mr-1"
    }), "954 904 248 \xB7 ", /*#__PURE__*/React.createElement("i", {
      className: "fas fa-envelope text-cyan-500 ml-2 mr-1"
    }), "lab@inulaboratorios.com")))), /*#__PURE__*/React.createElement("div", {
      className: "px-6 py-4 border-t bg-white flex-shrink-0"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-2xl mx-auto"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setTermsAccepted(true);
        setShowTermsModal(false);
      },
      className: "w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3.5 rounded-xl font-semibold shadow-lg"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-check-circle mr-2"
    }), "He le\xEDdo y acepto"))));
  };
  var renderTermsCheckbox = function renderTermsCheckbox() {
    return /*#__PURE__*/React.createElement("div", {
      className: "mb-4"
    }, cartTotal > 0 && /*#__PURE__*/React.createElement("div", {
      className: "bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-4 mb-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-sm font-medium text-gray-600"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-receipt text-cyan-500 mr-2"
    }), "Total estimado"), /*#__PURE__*/React.createElement("span", {
      className: "text-xl font-bold text-cyan-700"
    }, "S/ ", cartTotal)), tomaMuestraFees > 0 && /*#__PURE__*/React.createElement("div", {
      className: "mt-2 pt-2 border-t border-cyan-200/50 flex items-center justify-between text-xs text-gray-500"
    }, /*#__PURE__*/React.createElement("span", null, "Ex\xE1menes: S/ ", examTotal), /*#__PURE__*/React.createElement("span", {
      className: "text-emerald-600"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-syringe mr-1"
    }), "Toma de muestra: +S/ ", tomaMuestraFees))), /*#__PURE__*/React.createElement("label", {
      className: "flex items-start gap-3 cursor-pointer group",
      onClick: function onClick(e) {
        return e.stopPropagation();
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: termsAccepted,
      onChange: function onChange(e) {
        return setTermsAccepted(e.target.checked);
      },
      className: "mt-1 w-4 h-4 rounded border-gray-300 text-cyan-500 focus:ring-cyan-500 cursor-pointer"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-xs text-gray-600 leading-relaxed"
    }, "He le\xEDdo y acepto los ", /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: function onClick(e) {
        e.preventDefault();
        e.stopPropagation();
        setShowTermsModal(true);
      },
      className: "text-cyan-600 font-semibold underline hover:text-cyan-700"
    }, "t\xE9rminos y condiciones"), " de entrega y procesamiento de muestras.")));
  };
  var _useState113 = useState('inicio'),
    _useState114 = _slicedToArray(_useState113, 2),
    medicoView = _useState114[0],
    setMedicoView = _useState114[1]; // inicio, pedidos, mascotas, resultados, facturacion
  var _useState115 = useState(''),
    _useState116 = _slicedToArray(_useState115, 2),
    resultadosSearch = _useState116[0],
    setResultadosSearch = _useState116[1];
  var _useState117 = useState(''),
    _useState118 = _slicedToArray(_useState117, 2),
    resultadosFilterDay = _useState118[0],
    setResultadosFilterDay = _useState118[1];
  var _useState119 = useState(''),
    _useState120 = _slicedToArray(_useState119, 2),
    resultadosFilterMonth = _useState120[0],
    setResultadosFilterMonth = _useState120[1];
  var _useState121 = useState(''),
    _useState122 = _slicedToArray(_useState121, 2),
    resultadosFilterYear = _useState122[0],
    setResultadosFilterYear = _useState122[1];
  var _useState123 = useState(''),
    _useState124 = _slicedToArray(_useState123, 2),
    facturacionSearch = _useState124[0],
    setFacturacionSearch = _useState124[1];
  var _useState125 = useState(''),
    _useState126 = _slicedToArray(_useState125, 2),
    facturacionFilterDay = _useState126[0],
    setFacturacionFilterDay = _useState126[1];
  var _useState127 = useState(''),
    _useState128 = _slicedToArray(_useState127, 2),
    facturacionFilterMonth = _useState128[0],
    setFacturacionFilterMonth = _useState128[1];
  var _useState129 = useState(''),
    _useState130 = _slicedToArray(_useState129, 2),
    facturacionFilterYear = _useState130[0],
    setFacturacionFilterYear = _useState130[1];

  // ─── Helpers para actualizar estado local tras llamadas API ───────────────
  // Reemplaza saveDatabase(fn) por setDatabase(fn) + llamada al endpoint correspondiente.
  // Cada mutación tiene su propio método en el objeto `api` de arriba.
  var getCurrentNightMode = function getCurrentNightMode() {
    return (database === null || database === void 0 ? void 0 : database.nightMode) || false;
  };

  // Toggle modo motorizado

  // Componente de Mapa de Tracking
  var TrackingMapComponent = function TrackingMapComponent(_ref2) {
    var orderId = _ref2.orderId;
    var mapRef = React.useRef(null);
    var mapInstanceRef = React.useRef(null);
    var motoMarkerRef = React.useRef(null);
    var simulationRef = React.useRef(null);
    var currentIndexRef = React.useRef(0);
    var _useState131 = useState('8'),
      _useState132 = _slicedToArray(_useState131, 2),
      eta = _useState132[0],
      setEta = _useState132[1];
    var _useState133 = useState('2.3'),
      _useState134 = _slicedToArray(_useState133, 2),
      dist = _useState134[0],
      setDist = _useState134[1];
    var routePoints = [[-12.0564, -77.0528], [-12.0544, -77.0508], [-12.0524, -77.0488], [-12.0504, -77.0468], [-12.0484, -77.0448], [-12.0464, -77.0428]];
    var destination = [-12.0464, -77.0428];
    var calcDist = function calcDist(p1, p2) {
      var R = 6371;
      var dLat = (p2[0] - p1[0]) * Math.PI / 180;
      var dLon = (p2[1] - p1[1]) * Math.PI / 180;
      var a = Math.pow(Math.sin(dLat / 2), 2) + Math.cos(p1[0] * Math.PI / 180) * Math.cos(p2[0] * Math.PI / 180) * Math.pow(Math.sin(dLon / 2), 2);
      return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    };
    useEffect(function () {
      if (mapRef.current && !mapInstanceRef.current) {
        var map = L.map(mapRef.current, {
          zoomControl: false,
          attributionControl: false
        }).setView([-12.0514, -77.0478], 14);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        L.marker(destination, {
          icon: L.divIcon({
            html: '<div class="dest-marker-icon">🏠</div>',
            className: '',
            iconSize: [30, 30],
            iconAnchor: [15, 30]
          })
        }).addTo(map);
        var motoMarker = L.marker(routePoints[0], {
          icon: L.divIcon({
            html: '<div class="moto-marker-icon moto-animating">🛵</div>',
            className: '',
            iconSize: [35, 35],
            iconAnchor: [17, 17]
          })
        }).addTo(map);
        motoMarkerRef.current = motoMarker;
        L.polyline(routePoints, {
          color: '#0891b2',
          weight: 4,
          opacity: 0.7,
          dashArray: '8, 8'
        }).addTo(map);
        map.fitBounds(L.latLngBounds(routePoints), {
          padding: [30, 30]
        });
        mapInstanceRef.current = map;
        setTimeout(function () {
          simulationRef.current = setInterval(function () {
            if (currentIndexRef.current < routePoints.length - 1) {
              var _motoMarkerRef$curren, _mapInstanceRef$curre;
              currentIndexRef.current++;
              var p = routePoints[currentIndexRef.current];
              (_motoMarkerRef$curren = motoMarkerRef.current) === null || _motoMarkerRef$curren === void 0 || _motoMarkerRef$curren.setLatLng(p);
              (_mapInstanceRef$curre = mapInstanceRef.current) === null || _mapInstanceRef$curre === void 0 || _mapInstanceRef$curre.panTo(p, {
                animate: true,
                duration: 0.5
              });
              var d = calcDist(p, destination);
              setDist(d.toFixed(1));
              setEta(Math.max(1, Math.ceil(d * 4)));
              if (currentIndexRef.current === routePoints.length - 1) {
                clearInterval(simulationRef.current);
                setEta('0');
                setDist('0');
              }
            }
          }, 3000);
        }, 1000);
      }
      return function () {
        if (simulationRef.current) clearInterval(simulationRef.current);
      };
    }, []);
    return /*#__PURE__*/React.createElement("div", {
      className: "mt-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "rounded-2xl overflow-hidden shadow-lg"
    }, /*#__PURE__*/React.createElement("div", {
      ref: mapRef,
      className: "tracking-map"
    })), /*#__PURE__*/React.createElement("div", {
      className: "mt-3 grid grid-cols-2 gap-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-cyan-50 rounded-xl p-3 text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-cyan-600 font-medium"
    }, "Tiempo estimado"), /*#__PURE__*/React.createElement("p", {
      className: "text-xl font-bold text-cyan-700"
    }, eta, " min")), /*#__PURE__*/React.createElement("div", {
      className: "bg-blue-50 rounded-xl p-3 text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-blue-600 font-medium"
    }, "Distancia"), /*#__PURE__*/React.createElement("p", {
      className: "text-xl font-bold text-blue-700"
    }, dist, " km"))), /*#__PURE__*/React.createElement("div", {
      className: "mt-3 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-xl p-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-sm text-xl"
    }, "\uD83D\uDC68\u200D\u2695\uFE0F"), /*#__PURE__*/React.createElement("div", {
      className: "flex-1"
    }, /*#__PURE__*/React.createElement("p", {
      className: "font-semibold text-gray-800 text-sm"
    }, "Juan P\xE9rez"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-500"
    }, "Motorizado \u2022 \uD83D\uDEF5 ABC-123")), /*#__PURE__*/React.createElement("a", {
      href: "tel:+51999555666",
      className: "w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-phone text-sm"
    })))));
  };

  // Componente de Mapa de Tracking para Admin (incluye ruta de regreso)

  useEffect(function () {
    loadDatabase();
  }, []);
  useEffect(function () {
    // Solicitar permisos de notificación al cargar
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }, [isAuthenticated]);

  // ─── Polling: refresca pedidos y usuarios desde el backend cada 10 segundos ──
  // TODO: Reemplazar por WebSocket/SSE para notificaciones en tiempo real.
  useEffect(function () {
    if (!isAuthenticated || !currentUser) return;
    var interval = setInterval(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10() {
      return _regenerator().w(function (_context10) {
        while (1) switch (_context10.n) {
          case 0:
            try {
              // TODO: Llamar api.getOrders() y api.getMe() para refrescar datos
              // const { orders } = await api.getOrders();
              // const { user } = await api.getMe();
              // setDatabase(prev => ({ ...prev, orders, users: prev.users.map(u => u.id === user.id ? user : u) }));
            } catch (err) {
              console.error('Polling error:', err);
            }
          case 1:
            return _context10.a(2);
        }
      }, _callee10);
    })), 10000);
    return function () {
      return clearInterval(interval);
    };
  }, [isAuthenticated, currentUser]);

  // Estados para trackear nuevos pendientes de mostrar
  var _useState135 = useState(false),
    _useState136 = _slicedToArray(_useState135, 2),
    pendingNewResult = _useState136[0],
    setPendingNewResult = _useState136[1];
  var _useState137 = useState(false),
    _useState138 = _slicedToArray(_useState137, 2),
    pendingNewInvoice = _useState138[0],
    setPendingNewInvoice = _useState138[1];

  // Efecto para detectar nuevos resultados y comprobantes (solo marca como pendiente)
  useEffect(function () {
    if (!currentUser || !database) return;
    var freshUser = database.users.find(function (u) {
      return u.id === (currentUser === null || currentUser === void 0 ? void 0 : currentUser.id);
    }) || currentUser;
    if (!freshUser) return;
    var completedOrders = (database.orders || []).filter(function (o) {
      return o.userId === freshUser.id && o.status === 'completed';
    });
    var invoicesWithPdf = completedOrders.filter(function (o) {
      return o.invoicePdf;
    });

    // Detectar nuevos resultados - marcar como pendiente
    if (completedOrders.length > lastSeenResultCount && lastSeenResultCount > 0) {
      setPendingNewResult(true);
    }
    setLastSeenResultCount(completedOrders.length);

    // Detectar nuevos comprobantes - marcar como pendiente
    if (invoicesWithPdf.length > lastSeenInvoiceCount && lastSeenInvoiceCount > 0) {
      setPendingNewInvoice(true);
    }
    setLastSeenInvoiceCount(invoicesWithPdf.length);
  }, [database === null || database === void 0 ? void 0 : database.orders, currentUser]);

  // Efecto para activar highlights cuando el usuario entra a Inicio
  useEffect(function () {
    if (medicoView === 'inicio') {
      if (pendingNewResult) {
        setNewResultHighlight(true);
        setPendingNewResult(false);
        setTimeout(function () {
          return setNewResultHighlight(false);
        }, 4000);
      }
      if (pendingNewInvoice) {
        setNewInvoiceHighlight(true);
        setPendingNewInvoice(false);
        setTimeout(function () {
          return setNewInvoiceHighlight(false);
        }, 4000);
      }
    }
  }, [medicoView, pendingNewResult, pendingNewInvoice]);

  // ─── Carga inicial de datos desde el backend ──────────────────────────────
  var loadDatabase = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11() {
      var token;
      return _regenerator().w(function (_context11) {
        while (1) switch (_context11.n) {
          case 0:
            try {
              token = getToken();
              if (token) {
                // TODO: Llamar endpoints para hidratar el estado inicial
                // const { user }    = await api.getMe();
                // const { orders }  = await api.getOrders();
                // const { pets }    = await api.getPets();
                // setCurrentUser(user);
                // setUserType(user.type);
                // setIsAuthenticated(true);
                // setDatabase({ users: [user], orders, nightMode: false });
              }
            } catch (err) {
              console.error('Error cargando datos:', err);
            }
            setLoading(false);
          case 1:
            return _context11.a(2);
        }
      }, _callee11);
    }));
    return function loadDatabase() {
      return _ref4.apply(this, arguments);
    };
  }();

  // ─── Login ────────────────────────────────────────────────────────────────
  var handleLogin = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(e) {
      var data, user, _t;
      return _regenerator().w(function (_context12) {
        while (1) switch (_context12.p = _context12.n) {
          case 0:
            e.preventDefault();
            setError('');
            setLoading(true);
            _context12.p = 1;
            _context12.n = 2;
            return api.login(username, password);
          case 2:
            data = _context12.v;
            user = data.user;
            setCurrentUser(user);
            setUserType(user.type);
            setIsAuthenticated(true);
            setActiveTab('pedidos');
            _context12.n = 4;
            break;
          case 3:
            _context12.p = 3;
            _t = _context12.v;
            setError(_t.message || 'Usuario o contraseña incorrectos');
          case 4:
            _context12.p = 4;
            setLoading(false);
            return _context12.f(4);
          case 5:
            return _context12.a(2);
        }
      }, _callee12, null, [[1, 3, 4, 5]]);
    }));
    return function handleLogin(_x) {
      return _ref5.apply(this, arguments);
    };
  }();

  // Función para obtener nombre de mascota con apellido del dueño
  var getPetFullName = function getPetFullName(pet) {
    if (!pet || !pet.owner) return (pet === null || pet === void 0 ? void 0 : pet.name) || '';
    var ownerParts = pet.owner.trim().split(' ');
    var lastName = ownerParts.length > 1 ? ownerParts.slice(1).join(' ') : '';
    return lastName ? "".concat(pet.name, " ").concat(lastName) : pet.name;
  };

  // ─── Logout ───────────────────────────────────────────────────────────────
  var handleLogout = function handleLogout() {
    localStorage.removeItem('inulab_token');
    setIsAuthenticated(false);
    setUserType(null);
    setCurrentUser(null);
    setDatabase(null);
    setSelectedPet(null);
    setSelectedExam(null);
    setUsername('');
    setPassword('');
    setError('');
    setActiveTab('pedidos');
    setSearchTerm('');
    setCart([]);
    setPendingExams([]);
    setCurrentExamForPet(null);
    setShowNewPetForm(false);
    setNewPet({
      name: '',
      owner: '',
      animalType: '',
      breed: '',
      ageValue: '',
      ageUnit: 'años',
      sex: ''
    });
    setSelectedPetForOrder(null);
    setShowAddressSelection(false);
    setShowNewAddressForm(false);
    setNewAddress({
      name: '',
      address: '',
      district: '',
      reference: ''
    });
    setShowEditProfile(false);
    setDuenoMenuOpen(false);
    setDuenoView('main');
    setOrderComment('');
  };

  // Funciones para editar perfil
  var openEditProfile = function openEditProfile() {
    var user = database.users.find(function (u) {
      return u.id === (currentUser === null || currentUser === void 0 ? void 0 : currentUser.id);
    }) || currentUser;
    setEditProfile({
      name: user.name || '',
      clinic: user.clinic || '',
      phone: user.phone || '',
      email: user.email || '',
      address: user.profileAddress || '',
      district: user.profileDistrict || '',
      ruc: user.ruc || ''
    });
    setShowEditProfile(true);
  };
  var saveProfile = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13() {
      var changingName,
        userIndex,
        user,
        nameChanges,
        changesThisYear,
        _args13 = arguments,
        _t2;
      return _regenerator().w(function (_context13) {
        while (1) switch (_context13.p = _context13.n) {
          case 0:
            changingName = _args13.length > 0 && _args13[0] !== undefined ? _args13[0] : false;
            userIndex = database.users.findIndex(function (u) {
              return u.id === currentUser.id;
            });
            if (!(userIndex === -1)) {
              _context13.n = 1;
              break;
            }
            return _context13.a(2);
          case 1:
            user = _objectSpread({}, database.users[userIndex]);
            if (!(changingName && editProfile.name !== user.name)) {
              _context13.n = 3;
              break;
            }
            nameChanges = user.nameChanges || [];
            changesThisYear = nameChanges.filter(function (c) {
              return new Date(c).getFullYear() === new Date().getFullYear();
            }).length;
            if (!(changesThisYear >= 1)) {
              _context13.n = 2;
              break;
            }
            alert('Has alcanzado el límite de 1 cambio de nombre por año.');
            return _context13.a(2);
          case 2:
            user.nameChanges = [].concat(_toConsumableArray(nameChanges), [new Date().toISOString()]);
            user.name = editProfile.name;
          case 3:
            user.clinic = editProfile.clinic;
            user.phone = editProfile.phone;
            user.email = editProfile.email;
            user.profileAddress = editProfile.address;
            user.profileDistrict = editProfile.district;
            user.ruc = editProfile.ruc;
            _context13.p = 4;
            // TODO: await api.updateProfile(editProfile);
            setDatabase(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, {
                users: prev.users.map(function (u, i) {
                  return i === userIndex ? user : u;
                })
              });
            });
            setCurrentUser(user);
            _context13.n = 6;
            break;
          case 5:
            _context13.p = 5;
            _t2 = _context13.v;
            alert(_t2.message);
            return _context13.a(2);
          case 6:
            setShowEditProfile(false);
            setSuccessMessage('Perfil actualizado correctamente');
            setTimeout(function () {
              return setSuccessMessage('');
            }, 3000);
          case 7:
            return _context13.a(2);
        }
      }, _callee13, null, [[4, 5]]);
    }));
    return function saveProfile() {
      return _ref6.apply(this, arguments);
    };
  }();
  var getNameChangesRemaining = function getNameChangesRemaining() {
    var _database$users;
    var user = database === null || database === void 0 || (_database$users = database.users) === null || _database$users === void 0 ? void 0 : _database$users.find(function (u) {
      return u.id === (currentUser === null || currentUser === void 0 ? void 0 : currentUser.id);
    });
    if (!user) return 1;
    var currentYear = new Date().getFullYear();
    var nameChanges = user.nameChanges || [];
    var changesThisYear = nameChanges.filter(function (c) {
      return new Date(c).getFullYear() === currentYear;
    }).length;
    return 1 - changesThisYear;
  };
  var getNameChangeText = function getNameChangeText() {
    var remaining = getNameChangesRemaining();
    if (remaining <= 0) return 'Sin cambios disponibles este año';
    return '1 cambio disponible este año';
  };
  var selectExam = function selectExam(exam) {
    if (!pendingExams.find(function (e) {
      return e.id === exam.id;
    }) && !cart.find(function (c) {
      return c.exam.id === exam.id;
    })) {
      setPendingExams([].concat(_toConsumableArray(pendingExams), [exam]));
      setCurrentExamForPet(exam);
      setPetSearchTerm('');
      setShowNewPetForm(false);
    }
  };
  var removeFromPending = function removeFromPending(examId) {
    setPendingExams(pendingExams.filter(function (e) {
      return e.id !== examId;
    }));
    if ((currentExamForPet === null || currentExamForPet === void 0 ? void 0 : currentExamForPet.id) === examId) setCurrentExamForPet(null);
  };
  var removeFromCart = function removeFromCart(examId) {
    setCart(cart.filter(function (c) {
      return c.exam.id !== examId;
    }));
  };
  var handleExamClick = function handleExamClick(exam) {
    var isInCart = cart.find(function (c) {
      return c.exam.id === exam.id;
    });
    var isPending = pendingExams.find(function (e) {
      return e.id === exam.id;
    });
    if (isInCart) removeFromCart(exam.id);else if (isPending) removeFromPending(exam.id);else selectExam(exam);
  };
  var assignPetToExam = function assignPetToExam(pet) {
    if (currentExamForPet) {
      setSelectedPetForOrder(pet);
      setShowAddressSelection(true);
      setShowNewPetForm(false);
      setShowNewAddressForm(false);
    }
  };
  var assignAddressAndComplete = function assignAddressAndComplete(address) {
    var tomaMuestra = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (currentExamForPet && selectedPetForOrder) {
      setCart([].concat(_toConsumableArray(cart), [{
        exam: currentExamForPet,
        pet: selectedPetForOrder,
        address: address,
        tomaMuestra: tomaMuestra
      }]));
      setPendingExams(pendingExams.filter(function (e) {
        return e.id !== currentExamForPet.id;
      }));
      var remaining = pendingExams.filter(function (e) {
        return e.id !== currentExamForPet.id;
      });
      if (remaining.length > 0) {
        setCurrentExamForPet(remaining[0]);
        setSelectedPetForOrder(null);
        setShowAddressSelection(false);
      } else {
        setCurrentExamForPet(null);
        setSelectedPetForOrder(null);
        setShowAddressSelection(false);
      }
      setPetSearchTerm('');
      setShowNewPetForm(false);
      setShowNewAddressForm(false);
      setShowTomaMuestraStep(false);
      setPendingOrderAddress(null);
    }
  };
  var handleDuenoAddressSelect = function handleDuenoAddressSelect(addr) {
    setPendingOrderAddress(addr);
    setShowTomaMuestraStep(true);
    setShowNewAddressForm(false);
  };
  var completeTomaMuestraStep = function completeTomaMuestraStep(wantsTomaMuestra) {
    assignAddressAndComplete(pendingOrderAddress, wantsTomaMuestra);
    setShowTomaMuestraStep(false);
    setPendingOrderAddress(null);
  };
  var _useState139 = useState(false),
    _useState140 = _slicedToArray(_useState139, 2),
    gettingLocation = _useState140[0],
    setGettingLocation = _useState140[1];
  var getMyLocation = function getMyLocation() {
    if (!navigator.geolocation) {
      alert('Tu navegador no soporta geolocalización');
      return;
    }
    setGettingLocation(true);
    navigator.geolocation.getCurrentPosition(/*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14(position) {
        var _position$coords, latitude, longitude, response, data, addr, street, number, district, _t3;
        return _regenerator().w(function (_context14) {
          while (1) switch (_context14.p = _context14.n) {
            case 0:
              _position$coords = position.coords, latitude = _position$coords.latitude, longitude = _position$coords.longitude;
              _context14.p = 1;
              _context14.n = 2;
              return fetch("https://nominatim.openstreetmap.org/reverse?format=json&lat=".concat(latitude, "&lon=").concat(longitude, "&addressdetails=1"));
            case 2:
              response = _context14.v;
              _context14.n = 3;
              return response.json();
            case 3:
              data = _context14.v;
              if (data && data.address) {
                addr = data.address;
                street = addr.road || addr.street || '';
                number = addr.house_number || '';
                district = addr.suburb || addr.neighbourhood || addr.city_district || addr.town || addr.city || '';
                setNewAddress(_objectSpread(_objectSpread({}, newAddress), {}, {
                  address: "".concat(street, " ").concat(number).trim() || data.display_name.split(',')[0],
                  district: district,
                  reference: ''
                }));
              }
              _context14.n = 5;
              break;
            case 4:
              _context14.p = 4;
              _t3 = _context14.v;
              alert('No se pudo obtener la dirección. Intenta de nuevo.');
            case 5:
              setGettingLocation(false);
            case 6:
              return _context14.a(2);
          }
        }, _callee14, null, [[1, 4]]);
      }));
      return function (_x2) {
        return _ref7.apply(this, arguments);
      };
    }(), function (error) {
      setGettingLocation(false);
      if (error.code === 1) {
        alert('Permiso de ubicación denegado. Habilítalo en tu navegador.');
      } else {
        alert('No se pudo obtener tu ubicación. Intenta de nuevo.');
      }
    }, {
      enableHighAccuracy: true,
      timeout: 10000
    });
  };
  var addNewAddress = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15() {
      var addrToSave;
      return _regenerator().w(function (_context15) {
        while (1) switch (_context15.n) {
          case 0:
            if (!(!newAddress.name || !newAddress.address || !newAddress.district)) {
              _context15.n = 1;
              break;
            }
            alert('Por favor completa los campos obligatorios');
            return _context15.a(2);
          case 1:
            addrToSave = _objectSpread({
              id: 'ADDR' + Date.now()
            }, newAddress); // TODO: const { address } = await api.createAddress(newAddress); addrToSave = address;
            setDatabase(function (prev) {
              var userIndex = prev.users.findIndex(function (u) {
                return u.id === currentUser.id;
              });
              var user = prev.users[userIndex];
              var updatedUser = _objectSpread(_objectSpread({}, user), {}, {
                addresses: [].concat(_toConsumableArray(user.addresses || []), [addrToSave])
              });
              return _objectSpread(_objectSpread({}, prev), {}, {
                users: prev.users.map(function (u, i) {
                  return i === userIndex ? updatedUser : u;
                })
              });
            });
            if ((freshUser === null || freshUser === void 0 ? void 0 : freshUser.type) === 'dueño') {
              handleDuenoAddressSelect(addrToSave);
            } else {
              assignAddressAndComplete(addrToSave);
            }
            setNewAddress({
              name: '',
              address: '',
              district: '',
              reference: ''
            });
            setShowNewAddressForm(false);
          case 2:
            return _context15.a(2);
        }
      }, _callee15);
    }));
    return function addNewAddress() {
      return _ref8.apply(this, arguments);
    };
  }();
  var addNewPet = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee16() {
      var freshUser, petIcon, petToSave;
      return _regenerator().w(function (_context16) {
        while (1) switch (_context16.n) {
          case 0:
            freshUser = database.users.find(function (u) {
              return u.id === currentUser.id;
            });
            if (!(!newPet.name || !newPet.animalType || !newPet.breed || !newPet.sex)) {
              _context16.n = 1;
              break;
            }
            alert('Por favor completa todos los campos');
            return _context16.a(2);
          case 1:
            if (!(!newPet.ageValue || parseInt(newPet.ageValue) < 0)) {
              _context16.n = 2;
              break;
            }
            alert('Por favor ingresa la edad');
            return _context16.a(2);
          case 2:
            if (!(freshUser.type === 'medico' && !newPet.owner)) {
              _context16.n = 3;
              break;
            }
            alert('Por favor ingresa el nombre del dueño');
            return _context16.a(2);
          case 3:
            petIcon = newPet.animalType === 'perro' ? '🐶' : newPet.animalType === 'gato' ? '🐱' : newPet.animalType === 'ave' ? '🦜' : newPet.animalType === 'conejo' ? '🐰' : '🐾';
            petToSave = {
              id: 'PET' + Date.now(),
              name: newPet.name,
              owner: freshUser.type === 'medico' ? newPet.owner : "".concat(freshUser.name, " ").concat(freshUser.lastName),
              animalType: newPet.animalType,
              breed: newPet.breed,
              ageValue: parseInt(newPet.ageValue) || 0,
              ageUnit: newPet.ageUnit,
              sex: newPet.sex,
              photo: petIcon,
              exams: []
            }; // TODO: const { pet } = await api.createPet(petToSave); petToSave = pet;
            setDatabase(function (prev) {
              var userIndex = prev.users.findIndex(function (u) {
                return u.id === currentUser.id;
              });
              var user = prev.users[userIndex];
              var petsArr = user.type === 'medico' ? 'patients' : 'pets';
              var updatedUser = _objectSpread(_objectSpread({}, user), {}, _defineProperty({}, petsArr, [].concat(_toConsumableArray(user[petsArr] || []), [petToSave])));
              return _objectSpread(_objectSpread({}, prev), {}, {
                users: prev.users.map(function (u, i) {
                  return i === userIndex ? updatedUser : u;
                })
              });
            });
            assignPetToExam(petToSave);
            setNewPet({
              name: '',
              owner: '',
              animalType: '',
              breed: '',
              ageValue: '',
              ageUnit: 'años',
              sex: ''
            });
            setShowNewPetForm(false);
          case 4:
            return _context16.a(2);
        }
      }, _callee16);
    }));
    return function addNewPet() {
      return _ref9.apply(this, arguments);
    };
  }();
  var submitOrder = /*#__PURE__*/function () {
    var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee17() {
      var freshUser, newOrder;
      return _regenerator().w(function (_context17) {
        while (1) switch (_context17.n) {
          case 0:
            freshUser = database.users.find(function (u) {
              return u.id === currentUser.id;
            }) || currentUser;
            newOrder = {
              id: 'ORD' + Date.now(),
              userId: currentUser.id,
              userName: "".concat(freshUser.name, " ").concat(freshUser.lastName || '').trim(),
              userType: freshUser.type,
              date: new Date().toISOString(),
              status: 'pending',
              documentType: invoiceType,
              comment: orderComment.trim() || null,
              invoiceRequested: true,
              invoiceStatus: 'pending',
              items: cart.map(function (item) {
                return {
                  exam: {
                    id: item.exam.id,
                    name: item.exam.name,
                    subtitle: item.exam.subtitle,
                    icon: item.exam.icon,
                    color: item.exam.color,
                    bg: item.exam.bg,
                    price: item.exam.price || null,
                    turnaround: item.exam.turnaround || null
                  },
                  pet: {
                    id: item.pet.id,
                    name: item.pet.name,
                    photo: item.pet.photo,
                    breed: item.pet.breed,
                    owner: item.pet.owner
                  },
                  address: item.address
                };
              })
            }; // TODO: const { order } = await api.createOrder(newOrder); use order.id from backend
            setDatabase(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, {
                orders: [newOrder].concat(_toConsumableArray(prev.orders || []))
              });
            });
            if ('Notification' in window && Notification.permission === 'default') {
              Notification.requestPermission();
            }
            alert('¡Pedido enviado exitosamente! Te notificaremos cuando el motorizado esté en camino.');
            setCart([]);
            setPendingExams([]);
            setCurrentExamForPet(null);
            setShowOrderSummary(false);
            setInvoiceType('factura');
            setOrderComment('');
            setTermsAccepted(false);
            setMedicoView('inicio');
          case 1:
            return _context17.a(2);
        }
      }, _callee17);
    }));
    return function submitOrder() {
      return _ref0.apply(this, arguments);
    };
  }();
  var getStatusInfo = function getStatusInfo(status) {
    var statusMap = {
      'pending': {
        label: 'Pendiente',
        color: 'text-amber-600',
        bg: 'bg-amber-100',
        icon: 'fa-clock'
      },
      'assigned': {
        label: 'Asignado a motorizado',
        color: 'text-blue-600',
        bg: 'bg-blue-100',
        icon: 'fa-user-check'
      },
      'moto_en_camino': {
        label: 'Motorizado en camino',
        color: 'text-cyan-600',
        bg: 'bg-cyan-100',
        icon: 'fa-motorcycle'
      },
      'moto_arrived': {
        label: 'Motorizado llegó',
        color: 'text-red-600',
        bg: 'bg-red-100',
        icon: 'fa-map-marker-alt'
      },
      'pickup_in_progress': {
        label: 'Recojo en camino',
        color: 'text-blue-600',
        bg: 'bg-blue-100',
        icon: 'fa-motorcycle'
      },
      'sample_received': {
        label: 'Regresando al laboratorio',
        color: 'text-violet-600',
        bg: 'bg-violet-100',
        icon: 'fa-route'
      },
      'arrived_at_lab': {
        label: 'Muestra en laboratorio',
        color: 'text-purple-600',
        bg: 'bg-purple-100',
        icon: 'fa-flask'
      },
      'processing': {
        label: 'En proceso',
        color: 'text-cyan-600',
        bg: 'bg-cyan-100',
        icon: 'fa-flask'
      },
      'results_uploaded': {
        label: 'Resultados listos / Esperando pago',
        color: 'text-orange-600',
        bg: 'bg-orange-100',
        icon: 'fa-credit-card'
      },
      'completed': {
        label: 'Completado',
        color: 'text-emerald-600',
        bg: 'bg-emerald-100',
        icon: 'fa-check-circle'
      }
    };
    return statusMap[status] || statusMap['pending'];
  };
  var markExamAsSeen = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee18(exam, pet) {
      return _regenerator().w(function (_context18) {
        while (1) switch (_context18.n) {
          case 0:
            if (exam.seen === false) {
              try {
                // TODO: await api.markExamSeen(exam.id);
                setDatabase(function (prev) {
                  var userIndex = prev.users.findIndex(function (u) {
                    return u.id === currentUser.id;
                  });
                  if (userIndex === -1) return prev;
                  var user = prev.users[userIndex];
                  var petsArray = user.type === 'medico' ? 'patients' : 'pets';
                  var petIndex = (user[petsArray] || []).findIndex(function (p) {
                    return p.id === pet.id;
                  });
                  if (petIndex === -1) return prev;
                  var updatedExams = user[petsArray][petIndex].exams.map(function (e) {
                    return e.id === exam.id ? _objectSpread(_objectSpread({}, e), {}, {
                      seen: true
                    }) : e;
                  });
                  var updatedPets = user[petsArray].map(function (p, i) {
                    return i === petIndex ? _objectSpread(_objectSpread({}, p), {}, {
                      exams: updatedExams
                    }) : p;
                  });
                  return _objectSpread(_objectSpread({}, prev), {}, {
                    users: prev.users.map(function (u, i) {
                      return i === userIndex ? _objectSpread(_objectSpread({}, u), {}, _defineProperty({}, petsArray, updatedPets)) : u;
                    })
                  });
                });
              } catch (err) {
                console.error('Error marking exam as seen:', err);
              }
              exam = _objectSpread(_objectSpread({}, exam), {}, {
                seen: true
              });
            }
            setSelectedExam(exam);
          case 1:
            return _context18.a(2);
        }
      }, _callee18);
    }));
    return function markExamAsSeen(_x3, _x4) {
      return _ref1.apply(this, arguments);
    };
  }();
  var countUnseenExams = function countUnseenExams(pets) {
    return pets.reduce(function (total, pet) {
      return total + pet.exams.filter(function (e) {
        return e.seen === false;
      }).length;
    }, 0);
  };
  var countUnseenExamsForPet = function countUnseenExamsForPet(pet) {
    return pet.exams.filter(function (e) {
      return e.seen === false;
    }).length;
  };
  var countPendingPayments = function countPendingPayments() {
    return (database.orders || []).filter(function (o) {
      return o.userId === (currentUser === null || currentUser === void 0 ? void 0 : currentUser.id) && o.status === 'results_uploaded';
    }).length;
  };
  var handleResultPdfUpload = function handleResultPdfUpload(e, itemIndex) {
    var file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      var reader = new FileReader();
      reader.onload = function (event) {
        setUploadedFiles(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, itemIndex, {
            name: file.name,
            data: event.target.result
          }));
        });
      };
      reader.readAsDataURL(file);
    }
  };
  var handleFileUpload = function handleFileUpload(e) {
    var file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      // Guardar tanto el File (para FormData upload) como el base64 (para preview)
      var reader = new FileReader();
      reader.onload = function (event) {
        setUploadedFile({
          file: file,
          name: file.name,
          data: event.target.result,
          size: file.size
        });
      };
      reader.readAsDataURL(file);
    }
  };
  var handleSubmitExam = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee19() {
      var newExam;
      return _regenerator().w(function (_context19) {
        while (1) switch (_context19.n) {
          case 0:
            if (!(!selectedUserForUpload || !selectedPetForUpload || !uploadedFile || !examTitle)) {
              _context19.n = 1;
              break;
            }
            return _context19.a(2);
          case 1:
            newExam = {
              id: 'EX' + Date.now(),
              date: examDate,
              type: examTitle,
              status: 'completed',
              pdfData: uploadedFile.data,
              pdfName: uploadedFile.name,
              uploadedAt: new Date().toISOString()
            }; // TODO: Enviar al backend via FormData:
            // const formData = new FormData();
            // formData.append('pdf', uploadedFile.file);
            // formData.append('userId', selectedUserForUpload.id);
            // formData.append('petId', selectedPetForUpload.id);
            // formData.append('title', examTitle);
            // formData.append('date', examDate);
            // await fetch(`${API_BASE}/exams`, { method:'POST', headers:{'Authorization':`Bearer ${getToken()}`}, body: formData });
            setDatabase(function (prev) {
              var userIndex = prev.users.findIndex(function (u) {
                return u.id === selectedUserForUpload.id;
              });
              var user = prev.users[userIndex];
              var petsArray = user.type === 'medico' ? 'patients' : 'pets';
              var petIndex = (user[petsArray] || []).findIndex(function (p) {
                return p.id === selectedPetForUpload.id;
              });
              var updatedExams = [newExam].concat(_toConsumableArray(user[petsArray][petIndex].exams || []));
              var updatedPets = user[petsArray].map(function (p, i) {
                return i === petIndex ? _objectSpread(_objectSpread({}, p), {}, {
                  exams: updatedExams
                }) : p;
              });
              return _objectSpread(_objectSpread({}, prev), {}, {
                users: prev.users.map(function (u, i) {
                  return i === userIndex ? _objectSpread(_objectSpread({}, u), {}, _defineProperty({}, petsArray, updatedPets)) : u;
                })
              });
            });
            setSuccessMessage("\u2705 Resultado subido para ".concat(selectedPetForUpload.name));
            setUploadedFile(null);
            setExamTitle('');
            setSelectedPetForUpload(null);
            if (document.getElementById('pdfInput')) document.getElementById('pdfInput').value = '';
            setTimeout(function () {
              return setSuccessMessage('');
            }, 4000);
          case 2:
            return _context19.a(2);
        }
      }, _callee19);
    }));
    return function handleSubmitExam() {
      return _ref10.apply(this, arguments);
    };
  }();
  var filteredPerfiles = searchTerm.trim() === '' ? perfiles : perfiles.filter(function (p) {
    return flexibleSearch(p.name, searchTerm) || flexibleSearch(p.subtitle, searchTerm);
  });
  var filteredCategorias = searchTerm.trim() === '' ? categorias : categorias.map(function (cat) {
    return _objectSpread(_objectSpread({}, cat), {}, {
      examenes: cat.examenes.filter(function (e) {
        return flexibleSearch(e.name, searchTerm) || e.subtitle && flexibleSearch(e.subtitle, searchTerm);
      })
    });
  }).filter(function (cat) {
    return cat.examenes.length > 0;
  });
  var hayResultados = filteredPerfiles.length > 0 || filteredCategorias.length > 0;
  if (loading) return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen bg-gray-100 flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "animate-spin rounded-full h-12 w-12 border-4 border-cyan-500 border-t-transparent"
  }));

  // LOGIN
  if (!isAuthenticated) {
    return /*#__PURE__*/React.createElement("div", {
      className: "min-h-screen flex items-center justify-center p-4 login-wrapper"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-full max-w-md"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col items-center justify-center mb-6"
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/logo_inulaboratorios.jpg",
      alt: "INULABORATORIOS",
      className: "h-14 mb-2",
      onError: function onError(e) {
        e.target.style.display = 'none';
        e.target.nextSibling.style.display = 'flex';
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "hidden w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl items-center justify-center text-white font-bold text-2xl mb-2"
    }, "I"), /*#__PURE__*/React.createElement("span", {
      className: "text-base font-light text-gray-600 tracking-wide"
    }, "INULABORATORIOS")), /*#__PURE__*/React.createElement("form", {
      onSubmit: handleLogin,
      className: "space-y-3"
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: username,
      onChange: function onChange(e) {
        return setUsername(e.target.value);
      },
      className: "w-full px-3.5 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 text-sm placeholder-gray-400 focus:border-cyan-500 focus:bg-white focus:outline-none",
      placeholder: "Usuario"
    }), /*#__PURE__*/React.createElement("input", {
      type: "password",
      value: password,
      onChange: function onChange(e) {
        return setPassword(e.target.value);
      },
      className: "w-full px-3.5 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 text-sm placeholder-gray-400 focus:border-cyan-500 focus:bg-white focus:outline-none",
      placeholder: "Contrase\xF1a"
    }), error && /*#__PURE__*/React.createElement("div", {
      className: "bg-red-50 border border-red-200 p-2.5 rounded-xl"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-red-600"
    }, error)), /*#__PURE__*/React.createElement("button", {
      type: "submit",
      className: "w-full py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 transition-all shadow-md"
    }, "Iniciar Sesi\xF3n")))));
  }

  // Guard: esperar a que database esté cargado
  if (!database || !database.users) return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen bg-gray-100 flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "animate-spin rounded-full h-12 w-12 border-4 border-cyan-500 border-t-transparent"
  }));

  // Definir usuario fresco para todo el render
  var freshUser = database.users.find(function (u) {
    return u.id === currentUser.id;
  }) || currentUser;

  // Vista PDF (solo móvil o usuarios no médicos)
  if (selectedExam && freshUser.type !== 'medico') {
    var downloadPdf = function downloadPdf() {
      if (selectedExam.pdfData) {
        var link = document.createElement('a');
        link.href = selectedExam.pdfData;
        link.download = "".concat(selectedExam.type.replace(/[^a-zA-Z0-9]/g, '_'), "_").concat(selectedExam.date, ".pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        background: 'white'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "app-header border-b border-gray-100"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-4xl mx-auto px-4 py-3 flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setSelectedExam(null);
      },
      className: "w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-600"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left text-sm"
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 min-w-0"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm font-bold text-gray-800 leading-tight truncate"
    }, selectedExam.type), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-400 text-xs"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-calendar mr-1"
    }), new Date(selectedExam.date).toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }))), selectedExam.pdfData && /*#__PURE__*/React.createElement("button", {
      onClick: downloadPdf,
      className: "flex items-center gap-1.5 px-3 py-2 bg-cyan-500 text-white rounded-lg text-xs font-semibold"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-download text-xs"
    }), "PDF"))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        paddingTop: 'calc(56px + env(safe-area-inset-top, 0px))',
        overflow: 'hidden'
      }
    }, selectedExam.pdfData ? /*#__PURE__*/React.createElement("iframe", {
      src: selectedExam.pdfData,
      className: "w-full h-full",
      title: "PDF"
    }) : /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col items-center justify-center h-full text-gray-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-pdf text-5xl mb-3 text-gray-300"
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-sm"
    }, "PDF no disponible"))));
  }

  // Visor de Comprobante (solo móvil o usuarios no médicos)
  if (viewingInvoice && freshUser.type !== 'medico') {
    var docType = viewingInvoice.documentType === 'boleta' ? 'Boleta' : 'Factura';
    var downloadInvoice = function downloadInvoice() {
      if (viewingInvoice.invoicePdf) {
        var link = document.createElement('a');
        link.href = viewingInvoice.invoicePdf;
        link.download = "".concat(docType, "_").concat(viewingInvoice.id, ".pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    };
    if (!isAuthenticated) {
      return renderLogin();
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "min-h-screen bg-gray-100"
    }, /*#__PURE__*/React.createElement("div", {
      className: "app-header"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-4xl mx-auto px-4 py-3 flex items-center gap-4"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setViewingInvoice(null);
      },
      className: "text-gray-600 hover:text-gray-800"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left text-lg"
    })), /*#__PURE__*/React.createElement("img", {
      src: "assets/logo_inulaboratorios.jpg",
      alt: "Logo",
      className: "h-8",
      onError: function onError(e) {
        return e.target.style.display = 'none';
      }
    }))), /*#__PURE__*/React.createElement("div", {
      className: "app-content"
    }, /*#__PURE__*/React.createElement("div", {
      className: "px-4 max-w-4xl mx-auto"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow-lg p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mb-3"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "text-lg font-bold text-gray-800 mb-1"
    }, docType), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500 text-sm"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-calendar mr-1"
    }), new Date(viewingInvoice.completedAt || viewingInvoice.date).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-600 text-sm mt-1"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-user mr-1"
    }), viewingInvoice.userName)), viewingInvoice.invoicePdf ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("iframe", {
      src: viewingInvoice.invoicePdf,
      className: "w-full rounded-xl border border-gray-200",
      style: {
        height: 'calc(100vh - 300px)'
      },
      title: "".concat(docType, " PDF")
    }), /*#__PURE__*/React.createElement("div", {
      className: "mt-3 flex justify-center"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: downloadInvoice,
      className: "flex items-center gap-2 px-6 py-2.5 ".concat(viewingInvoice.documentType === 'boleta' ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700' : 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700', " text-white rounded-xl font-semibold transition-colors shadow-lg text-sm")
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-download"
    }), "Descargar PDF"))) : /*#__PURE__*/React.createElement("div", {
      className: "bg-gray-100 rounded-xl p-12 text-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas ".concat(viewingInvoice.documentType === 'boleta' ? 'fa-receipt' : 'fa-file-invoice', " text-4xl text-gray-400 mb-2")
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500"
    }, docType, " no disponible"))))));
  }

  // Helper functions for dueño shell (header + sidebar)
  var petsOrPatients = freshUser.type === 'medico' ? freshUser.patients || [] : freshUser.pets || [];
  var entityName = freshUser.type === 'medico' ? 'paciente' : 'mascota';
  var filteredPets = petSearchTerm.trim() === '' ? petsOrPatients : petsOrPatients.filter(function (p) {
    return p.name.toLowerCase().includes(petSearchTerm.toLowerCase());
  });
  var resetDuenoState = function resetDuenoState() {
    setSelectedPet(null);
    setDuenoView('main');
    setShowEditProfile(false);
    setSelectedPaqueteDetail(null);
    setViewingOrderTracking(null);
    setCurrentExamForPet(null);
    setPendingExams([]);
    setCart([]);
    setShowNewPetForm(false);
    setShowAddressSelection(false);
    setShowNewAddressForm(false);
    setSelectedPetForOrder(null);
    setShowTomaMuestraStep(false);
    setPendingOrderAddress(null);
  };
  var renderDuenoHeader = function renderDuenoHeader() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "lg:hidden mob-header"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mob-header-inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mob-header-logo cursor-pointer",
      onClick: function onClick() {
        resetDuenoState();
        setActiveTab('pedidos');
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/logo_inulaboratorios.jpg",
      alt: "INULAB",
      className: "h-8",
      onError: function onError(e) {
        e.target.style.display = 'none';
        e.target.nextSibling.style.display = 'flex';
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "hidden w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg items-center justify-center text-white font-bold text-sm"
    }, "I")), /*#__PURE__*/React.createElement("span", {
      className: "mob-header-title"
    }, freshUser.name), /*#__PURE__*/React.createElement("div", {
      className: "mob-header-actions"
    }, countUnseenExams(petsOrPatients) + countPendingPayments() > 0 && /*#__PURE__*/React.createElement("div", {
      className: "w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
    }, countUnseenExams(petsOrPatients) + countPendingPayments()), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setDuenoMenuOpen(!duenoMenuOpen);
      },
      className: "w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center text-gray-600 transition-colors"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-bars text-base"
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "hidden lg:block bg-white border-b border-gray-200 px-6 py-3 fixed top-0 left-0 right-0 z-50"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 cursor-pointer",
      onClick: function onClick() {
        resetDuenoState();
        setActiveTab('pedidos');
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/logo_inulaboratorios.jpg",
      alt: "Logo",
      className: "h-8",
      onError: function onError(e) {
        e.target.style.display = 'none';
        e.target.nextSibling.style.display = 'flex';
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "hidden w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl items-center justify-center text-white font-bold"
    }, "I"), /*#__PURE__*/React.createElement("span", {
      className: "text-base font-light text-gray-700 tracking-wide"
    }, "INULABORATORIOS")), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-right"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm font-semibold text-gray-800"
    }, freshUser.name), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-500"
    }, "Cliente")), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        resetDuenoState();
        setDuenoView('config');
      },
      className: "w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center text-gray-600 transition-colors"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-bars"
    }))))), duenoMenuOpen && /*#__PURE__*/React.createElement("div", {
      className: "mob-menu-overlay lg:hidden",
      onClick: function onClick() {
        return setDuenoMenuOpen(false);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "mob-menu-panel",
      onClick: function onClick(e) {
        return e.stopPropagation();
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between px-5 py-4 border-b border-gray-100"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-sm font-semibold text-gray-500 uppercase tracking-wider"
    }, "Men\xFA"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setDuenoMenuOpen(false);
      },
      className: "w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-times text-sm"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "px-5 py-5 border-b border-gray-100"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-14 h-14 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg"
    }, freshUser.name.charAt(0)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "font-bold text-gray-800"
    }, freshUser.name), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-cyan-600 font-medium"
    }, "Cliente"), freshUser.email && /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400 mt-0.5"
    }, freshUser.email)))), /*#__PURE__*/React.createElement("div", {
      className: "px-4 py-3 space-y-1"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setDuenoMenuOpen(false);
        resetDuenoState();
        setDuenoView('config');
        setShowEditProfile(true);
      },
      className: "w-full flex items-center gap-3 px-4 py-3.5 rounded-xl hover:bg-gray-50 text-gray-700 transition-colors"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-9 h-9 bg-cyan-100 rounded-xl flex items-center justify-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-user-edit text-cyan-600"
    })), /*#__PURE__*/React.createElement("span", {
      className: "font-medium"
    }, "Editar Perfil"), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-right text-gray-300 ml-auto text-xs"
    })), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setDuenoMenuOpen(false);
        resetDuenoState();
        setDuenoView('config');
      },
      className: "w-full flex items-center gap-3 px-4 py-3.5 rounded-xl hover:bg-gray-50 text-gray-700 transition-colors"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-9 h-9 bg-gray-100 rounded-xl flex items-center justify-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-cog text-gray-600"
    })), /*#__PURE__*/React.createElement("span", {
      className: "font-medium"
    }, "Configuraci\xF3n"), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-right text-gray-300 ml-auto text-xs"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "mx-4 border-t border-gray-100 my-1"
    }), /*#__PURE__*/React.createElement("div", {
      className: "px-4 py-2 space-y-1"
    }, /*#__PURE__*/React.createElement("a", {
      href: "https://wa.me/51954904248",
      target: "_blank",
      className: "flex items-center gap-3 px-4 py-3.5 rounded-xl hover:bg-green-50 text-gray-700 transition-colors"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-9 h-9 bg-green-100 rounded-xl flex items-center justify-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fab fa-whatsapp text-green-600"
    })), /*#__PURE__*/React.createElement("span", {
      className: "font-medium"
    }, "WhatsApp Soporte"))), /*#__PURE__*/React.createElement("div", {
      className: "mx-4 border-t border-gray-100 my-1"
    }), /*#__PURE__*/React.createElement("div", {
      className: "px-4 py-2"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setDuenoMenuOpen(false);
        handleLogout();
      },
      className: "w-full flex items-center gap-3 px-4 py-3.5 rounded-xl hover:bg-red-50 text-red-500 transition-colors"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-9 h-9 bg-red-50 rounded-xl flex items-center justify-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-sign-out-alt text-red-500"
    })), /*#__PURE__*/React.createElement("span", {
      className: "font-medium"
    }, "Cerrar Sesi\xF3n"))))));
  };
  var renderDuenoSidebar = function renderDuenoSidebar() {
    return /*#__PURE__*/React.createElement("div", {
      className: "hidden lg:flex w-56 bg-white border-r border-gray-200 fixed left-0 top-16 bottom-0 flex-col z-40"
    }, /*#__PURE__*/React.createElement("nav", {
      className: "flex-1 p-3 space-y-2"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        resetDuenoState();
        setActiveTab('pedidos');
      },
      className: "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ".concat(activeTab === 'pedidos' && duenoView !== 'config' ? 'bg-gradient-to-r from-cyan-400 to-cyan-500 text-white shadow-lg' : 'bg-gray-50 hover:bg-gray-100 text-gray-700')
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-8 h-8 rounded-lg flex items-center justify-center ".concat(activeTab === 'pedidos' && duenoView !== 'config' ? 'bg-white/20' : 'bg-cyan-100')
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-clipboard-list ".concat(activeTab === 'pedidos' && duenoView !== 'config' ? 'text-white' : 'text-cyan-600')
    })), /*#__PURE__*/React.createElement("span", {
      className: "font-medium"
    }, "Pedidos")), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        resetDuenoState();
        setActiveTab('resultados');
      },
      className: "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ".concat(activeTab === 'resultados' && duenoView !== 'config' ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg' : 'bg-gray-50 hover:bg-gray-100 text-gray-700')
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-8 h-8 rounded-lg flex items-center justify-center ".concat(activeTab === 'resultados' && duenoView !== 'config' ? 'bg-white/20' : 'bg-purple-100')
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-medical ".concat(activeTab === 'resultados' && duenoView !== 'config' ? 'text-white' : 'text-purple-600')
    })), /*#__PURE__*/React.createElement("span", {
      className: "font-medium"
    }, "Resultados"), countUnseenExams(petsOrPatients) + countPendingPayments() > 0 && /*#__PURE__*/React.createElement("span", {
      className: "ml-auto text-xs px-2 py-0.5 rounded-full ".concat(activeTab === 'resultados' && duenoView !== 'config' ? 'bg-white/20' : 'bg-red-100 text-red-600')
    }, countUnseenExams(petsOrPatients) + countPendingPayments()))), /*#__PURE__*/React.createElement("div", {
      className: "mx-4 border-t border-gray-200"
    }), /*#__PURE__*/React.createElement("div", {
      className: "p-4 mb-8"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-500 mb-1"
    }, "\xBFNecesitas asistencia?"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-500 mb-2"
    }, "Cont\xE1ctanos:"), /*#__PURE__*/React.createElement("a", {
      href: "mailto:lab@inulaboratorios.com",
      className: "flex items-center gap-2 text-xs text-cyan-600 hover:text-cyan-700 mb-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-envelope text-xs"
    }), "lab@inulaboratorios.com"), /*#__PURE__*/React.createElement("a", {
      href: "https://wa.me/51954904248",
      target: "_blank",
      className: "flex items-center gap-2 text-xs text-green-600 hover:text-green-700"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fab fa-whatsapp text-xs"
    }), "WhatsApp Inulab")));
  };

  // Vista de Tracking de Pedido (para clientes)
  // Vista de Tracking de Pedido (solo mobile - para clientes y médicos)
  if (viewingOrderTracking) {
    // Obtener datos frescos del pedido desde la base de datos
    var order = (database.orders || []).find(function (o) {
      return o.id === viewingOrderTracking.id;
    }) || viewingOrderTracking;
    var orderDate = new Date(order.date);
    var formatDateTime = function formatDateTime(date) {
      if (!date) return '';
      var d = new Date(date);
      return d.toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long'
      }) + ' - ' + d.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit'
      });
    };

    // Definir los pasos del tracking
    var steps = [{
      id: 'pending',
      label: 'Pedido realizado',
      subtitle: 'Tu pedido ha sido registrado',
      icon: 'fa-clipboard-check',
      date: order.date
    }, {
      id: 'confirmed',
      label: 'Pedido confirmado',
      subtitle: 'El laboratorio confirmó tu pedido',
      icon: 'fa-check-circle',
      date: order.date
    }, {
      id: 'moto_en_camino',
      label: 'Motorizado en camino',
      subtitle: 'El motorizado va hacia tu ubicación',
      icon: 'fa-motorcycle',
      date: order.status === 'moto_en_camino' || ['moto_arrived', 'sample_received', 'arrived_at_lab', 'processing', 'results_uploaded', 'completed'].includes(order.status) ? order.statusUpdatedAt : null
    }, {
      id: 'moto_arrived',
      label: 'Motorizado llegó',
      subtitle: 'Por favor entrega la muestra',
      icon: 'fa-map-marker-alt',
      date: ['moto_arrived', 'sample_received', 'arrived_at_lab', 'processing', 'results_uploaded', 'completed'].includes(order.status) ? order.statusUpdatedAt : null
    }, {
      id: 'sample_received',
      label: 'Muestra recogida',
      subtitle: 'Tu muestra va camino al laboratorio',
      icon: 'fa-vial',
      date: ['sample_received', 'arrived_at_lab', 'processing', 'results_uploaded', 'completed'].includes(order.status) ? order.statusUpdatedAt : null
    }, {
      id: 'arrived_at_lab',
      label: 'En laboratorio',
      subtitle: 'La muestra llegó al laboratorio',
      icon: 'fa-flask',
      date: ['arrived_at_lab', 'processing', 'results_uploaded', 'completed'].includes(order.status) ? order.statusUpdatedAt : null
    }, {
      id: 'processing',
      label: 'Procesando muestra',
      subtitle: 'Estamos analizando tu muestra',
      icon: 'fa-cog',
      date: ['processing', 'results_uploaded', 'completed'].includes(order.status) ? order.statusUpdatedAt : null
    }, {
      id: 'results_uploaded',
      label: 'Resultados listos',
      subtitle: 'Realiza el pago para ver los resultados',
      icon: 'fa-file-medical',
      date: ['results_uploaded', 'completed'].includes(order.status) ? order.statusUpdatedAt : null
    }, {
      id: 'completed',
      label: 'Entregado',
      subtitle: '¡Ya puedes ver tus resultados!',
      icon: 'fa-check-double',
      date: order.status === 'completed' ? order.completedAt : null
    }];

    // Determinar qué pasos están completados
    var statusOrder = ['pending', 'confirmed', 'moto_en_camino', 'moto_arrived', 'sample_received', 'arrived_at_lab', 'processing', 'results_uploaded', 'completed'];
    var currentIndex = statusOrder.indexOf(order.status === 'pending' ? 'confirmed' : order.status);

    // Solo mostrar esta vista en mobile, en desktop se maneja dentro del layout del médico
    if (userType === 'medico') {
      // Para médicos, no retornamos aquí - dejamos que el código del médico maneje el tracking
    } else if (freshUser.type === 'dueño') {
      // Para dueños, no retornamos aquí - dejamos que el código del dueño maneje el tracking
    } else {
      var _order$items$, _order$items$2;
      // Para otros clientes, mostramos la vista de tracking
      return /*#__PURE__*/React.createElement("div", {
        className: "min-h-screen bg-gray-100"
      }, /*#__PURE__*/React.createElement("div", {
        className: "app-header"
      }, /*#__PURE__*/React.createElement("div", {
        className: "max-w-4xl mx-auto px-4 py-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center justify-between"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-3"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return setViewingOrderTracking(null);
        },
        className: "text-gray-600 hover:text-gray-800"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-arrow-left text-lg"
      })), /*#__PURE__*/React.createElement("img", {
        src: "assets/logo_inulaboratorios.jpg",
        alt: "Logo",
        className: "h-10",
        onError: function onError(e) {
          e.target.style.display = 'none';
        }
      })), /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-right"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-sm font-semibold text-gray-800"
      }, currentUser.name), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-500"
      }, "Cliente")), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          setViewingOrderTracking(null);
          setDuenoView('config');
        },
        className: "w-10 h-10 bg-cyan-50 hover:bg-cyan-100 rounded-xl flex items-center justify-center text-cyan-600 transition-colors"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-bars text-lg"
      })))))), /*#__PURE__*/React.createElement("div", {
        className: "app-content"
      }, /*#__PURE__*/React.createElement("div", {
        className: "max-w-6xl mx-auto px-4 py-4"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex flex-col md:flex-row gap-6"
      }, /*#__PURE__*/React.createElement("div", {
        className: "md:w-1/2"
      }, /*#__PURE__*/React.createElement("div", {
        className: "bg-white rounded-2xl shadow-lg p-5"
      }, /*#__PURE__*/React.createElement("h3", {
        className: "font-bold text-gray-800 mb-4"
      }, "Estado del pedido"), /*#__PURE__*/React.createElement("div", {
        className: "space-y-0"
      }, steps.map(function (step, index) {
        var isCompleted = index <= currentIndex;
        var isCurrent = index === currentIndex;
        var isLast = index === steps.length - 1;
        return /*#__PURE__*/React.createElement("div", {
          key: step.id,
          className: "flex gap-3"
        }, /*#__PURE__*/React.createElement("div", {
          className: "flex flex-col items-center"
        }, /*#__PURE__*/React.createElement("div", {
          className: "w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ".concat(isCompleted ? 'bg-cyan-500 text-white' : 'bg-gray-200 text-gray-400')
        }, isCompleted ? /*#__PURE__*/React.createElement("i", {
          className: "fas fa-check text-xs"
        }) : /*#__PURE__*/React.createElement("i", {
          className: "fas ".concat(step.icon, " text-xs")
        })), !isLast && /*#__PURE__*/React.createElement("div", {
          className: "w-0.5 h-10 ".concat(index < currentIndex ? 'bg-cyan-500' : 'bg-gray-200')
        })), /*#__PURE__*/React.createElement("div", {
          className: "flex-1 flex items-start justify-between ".concat(!isLast ? 'pb-3' : '')
        }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
          className: "font-medium text-sm ".concat(isCompleted ? 'text-gray-800' : 'text-gray-400')
        }, step.label), /*#__PURE__*/React.createElement("p", {
          className: "text-xs ".concat(isCompleted ? 'text-gray-500' : 'text-gray-400')
        }, step.subtitle)), isCompleted && step.date && /*#__PURE__*/React.createElement("p", {
          className: "text-cyan-600 text-xs whitespace-nowrap ml-2"
        }, formatDateTime(step.date))));
      })))), /*#__PURE__*/React.createElement("div", {
        className: "md:w-1/2"
      }, /*#__PURE__*/React.createElement("div", {
        className: "bg-white rounded-2xl shadow-lg p-5"
      }, /*#__PURE__*/React.createElement("h3", {
        className: "font-bold text-gray-800 mb-3"
      }, "Detalle del pedido"), /*#__PURE__*/React.createElement("div", {
        className: "space-y-2"
      }, order.items.map(function (item, idx) {
        return /*#__PURE__*/React.createElement("div", {
          key: idx,
          className: "flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
        }, /*#__PURE__*/React.createElement("div", {
          className: "w-10 h-10 ".concat(item.exam.bg, " rounded-lg flex items-center justify-center")
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas ".concat(item.exam.icon, " ").concat(item.exam.color)
        })), /*#__PURE__*/React.createElement("div", {
          className: "flex-1"
        }, /*#__PURE__*/React.createElement("p", {
          className: "font-medium text-gray-800 text-sm"
        }, item.exam.name), /*#__PURE__*/React.createElement("p", {
          className: "text-gray-500 text-xs"
        }, item.pet.photo, " ", getPetFullName(item.pet))));
      })), /*#__PURE__*/React.createElement("div", {
        className: "mt-3 pt-3 border-t border-gray-100"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-start gap-2 text-sm"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-map-marker-alt text-cyan-500 mt-0.5"
      }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
        className: "text-gray-500 text-xs"
      }, "Direcci\xF3n de recojo"), /*#__PURE__*/React.createElement("p", {
        className: "text-gray-800"
      }, ((_order$items$ = order.items[0]) === null || _order$items$ === void 0 || (_order$items$ = _order$items$.address) === null || _order$items$ === void 0 ? void 0 : _order$items$.address) || 'Sin dirección', ", ", ((_order$items$2 = order.items[0]) === null || _order$items$2 === void 0 || (_order$items$2 = _order$items$2.address) === null || _order$items$2 === void 0 ? void 0 : _order$items$2.district) || '')))), order.comment && /*#__PURE__*/React.createElement("div", {
        className: "mt-3 pt-3 border-t border-gray-100"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-start gap-2 text-sm"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-comment-alt text-cyan-500 mt-0.5"
      }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
        className: "text-gray-500 text-xs"
      }, "Comentario"), /*#__PURE__*/React.createElement("p", {
        className: "text-gray-800 text-sm"
      }, order.comment))))))))));
    }
  }

  // ADMIN
  // CLIENTE

  // Perfil mascota
  if (selectedPet && activeTab === 'resultados' && freshUser.type !== 'dueño') {
    var currentPet = petsOrPatients.find(function (p) {
      return p.id === selectedPet.id;
    }) || selectedPet;
    var petProfileContent = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setSelectedPet(null);
      },
      className: "flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-4"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-sm font-medium"
    }, "Volver a mascotas")), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow-lg p-6 mb-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-5xl"
    }, currentPet.photo), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      className: "text-2xl font-bold text-gray-800"
    }, currentPet.name), currentPet.owner && /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500 text-sm"
    }, "Due\xF1o: ", currentPet.owner), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap gap-2 mt-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "bg-cyan-100 text-cyan-700 px-2 py-0.5 rounded-full text-xs"
    }, currentPet.breed), /*#__PURE__*/React.createElement("span", {
      className: "bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full text-xs"
    }, formatAge(currentPet)), /*#__PURE__*/React.createElement("span", {
      className: "bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full text-xs"
    }, currentPet.sex))))), /*#__PURE__*/React.createElement("h2", {
      className: "text-lg font-bold text-gray-800 mb-4"
    }, "Resultados"), currentPet.exams.length === 0 ? /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl p-10 text-center shadow"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-folder-open text-4xl text-gray-300 mb-2"
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500"
    }, "No hay resultados disponibles")) : /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, currentPet.exams.map(function (exam) {
      return /*#__PURE__*/React.createElement("div", {
        key: exam.id,
        onClick: function onClick() {
          return markExamAsSeen(exam, currentPet);
        },
        className: "bg-white rounded-xl p-4 shadow cursor-pointer hover:shadow-lg flex items-center justify-between ".concat(exam.seen === false ? 'border-l-4 border-red-500' : '')
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-10 h-10 rounded-xl flex items-center justify-center ".concat(exam.seen === false ? 'bg-red-100' : 'bg-cyan-100')
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-file-pdf ".concat(exam.seen === false ? 'text-red-600' : 'text-cyan-600')
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
        className: "font-semibold text-gray-800"
      }, exam.type), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-500"
      }, new Date(exam.date).toLocaleDateString('es-ES'))), exam.seen === false && /*#__PURE__*/React.createElement("span", {
        className: "bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-bold ml-2"
      }, "NUEVO")), /*#__PURE__*/React.createElement("i", {
        className: "fas fa-chevron-right text-gray-400"
      }));
    })));
    return /*#__PURE__*/React.createElement("div", {
      className: "min-h-screen bg-gray-100"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white border-b px-4 py-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-4xl mx-auto flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setSelectedPet(null);
      },
      className: "text-gray-600"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left"
    })), /*#__PURE__*/React.createElement("img", {
      src: "assets/logo_inulaboratorios.jpg",
      alt: "Logo",
      className: "h-8",
      onError: function onError(e) {
        return e.target.style.display = 'none';
      }
    })), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setSelectedPet(null);
        setDuenoView('config');
      },
      className: "w-9 h-9 bg-cyan-50 rounded-xl flex items-center justify-center text-cyan-600"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-cog"
    })))), /*#__PURE__*/React.createElement("div", {
      className: "p-4 max-w-4xl mx-auto"
    }, petProfileContent));
  }

  // Selección de mascota y dirección (solo móvil o usuarios no médicos)
  if (currentExamForPet && freshUser.type !== 'medico' && freshUser.type !== 'dueño') {
    var userAddresses = freshUser.addresses || [];
    var backHandler = function backHandler() {
      if (showAddressSelection && !showNewAddressForm) {
        setShowAddressSelection(false);
        setSelectedPetForOrder(null);
      } else if (showNewAddressForm) {
        setShowNewAddressForm(false);
      } else if (showNewPetForm) {
        setShowNewPetForm(false);
      } else {
        setCurrentExamForPet(null);
        removeFromPending(currentExamForPet.id);
      }
    };
    var selectionBody = /*#__PURE__*/React.createElement("div", {
      className: "p-4 max-w-lg mx-auto"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow p-4 mb-4 flex items-center gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-12 h-12 ".concat(currentExamForPet.bg, " rounded-xl flex items-center justify-center")
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas ".concat(currentExamForPet.icon, " ").concat(currentExamForPet.color, " text-xl")
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex-1"
    }, /*#__PURE__*/React.createElement("p", {
      className: "font-bold text-gray-800"
    }, currentExamForPet.name), currentExamForPet.subtitle && /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-500"
    }, currentExamForPet.subtitle), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-cyan-600 mt-1"
    }, showAddressSelection ? "".concat(selectedPetForOrder === null || selectedPetForOrder === void 0 ? void 0 : selectedPetForOrder.name, " - Selecciona direcci\xF3n") : "Selecciona ".concat(entityName)))), pendingExams.length > 1 && /*#__PURE__*/React.createElement("div", {
      className: "bg-blue-50 rounded-xl p-3 mb-4 text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-blue-700"
    }, "Examen ", pendingExams.findIndex(function (e) {
      return e.id === currentExamForPet.id;
    }) + 1, " de ", pendingExams.length)), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-center gap-2 mb-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ".concat(!showAddressSelection ? 'bg-cyan-500 text-white' : 'bg-emerald-100 text-emerald-700')
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas ".concat(!showAddressSelection ? 'fa-paw' : 'fa-check')
    }), " Paciente"), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-right text-gray-300 text-xs"
    }), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ".concat(showAddressSelection ? 'bg-cyan-500 text-white' : 'bg-gray-100 text-gray-400')
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-map-marker-alt"
    }), " Direcci\xF3n")), !showAddressSelection && /*#__PURE__*/React.createElement(React.Fragment, null, !showNewPetForm ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "relative mb-4"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
    }), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: petSearchTerm,
      onChange: function onChange(e) {
        return setPetSearchTerm(e.target.value);
      },
      placeholder: "Buscar ".concat(entityName, "..."),
      className: "w-full pl-11 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none bg-white"
    })), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow overflow-hidden mb-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-h-64 overflow-y-auto hide-scrollbar"
    }, filteredPets.length === 0 ? /*#__PURE__*/React.createElement("div", {
      className: "p-8 text-center text-gray-500"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-search text-3xl mb-2 text-gray-300"
    }), /*#__PURE__*/React.createElement("p", null, "No se encontr\xF3 ning\xFAn ", entityName)) : filteredPets.map(function (pet) {
      return /*#__PURE__*/React.createElement("div", {
        key: pet.id,
        onClick: function onClick() {
          return assignPetToExam(pet);
        },
        className: "p-4 border-b border-gray-100 last:border-0 flex items-center gap-4 cursor-pointer hover:bg-gray-50"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-3xl"
      }, pet.photo), /*#__PURE__*/React.createElement("div", {
        className: "flex-1"
      }, /*#__PURE__*/React.createElement("p", {
        className: "font-semibold text-gray-800"
      }, getPetFullName(pet)), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-500"
      }, pet.breed, " \u2022 ", formatAge(pet)), pet.owner && freshUser.type === 'medico' && /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-400"
      }, "Due\xF1o: ", pet.owner)), /*#__PURE__*/React.createElement("i", {
        className: "fas fa-chevron-right text-gray-300"
      }));
    }))), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowNewPetForm(true);
      },
      className: "w-full py-4 rounded-2xl border-2 border-dashed border-cyan-300 text-cyan-600 font-semibold hover:bg-cyan-50"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-plus mr-2"
    }), "Agregar ", freshUser.type === 'medico' ? 'nuevo paciente' : 'nueva mascota')) : /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow p-6"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold text-gray-800 mb-4"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-plus-circle mr-2 text-cyan-500"
    }), freshUser.type === 'medico' ? 'Nuevo Paciente' : 'Nueva Mascota'), /*#__PURE__*/React.createElement("div", {
      className: "space-y-4"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Nombre"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newPet.name,
      onChange: function onChange(e) {
        return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
          name: e.target.value
        }));
      },
      className: "w-full h-12 px-4 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "Nombre del animal"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Especie"), /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement("select", {
      value: newPet.animalType,
      onChange: function onChange(e) {
        return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
          animalType: e.target.value
        }));
      },
      className: "w-full h-12 px-4 pr-10 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none bg-white appearance-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Seleccionar"), /*#__PURE__*/React.createElement("option", {
      value: "perro"
    }, "\uD83D\uDC15 Perro"), /*#__PURE__*/React.createElement("option", {
      value: "gato"
    }, "\uD83D\uDC08 Gato"), /*#__PURE__*/React.createElement("option", {
      value: "ave"
    }, "\uD83E\uDD9C Ave"), /*#__PURE__*/React.createElement("option", {
      value: "conejo"
    }, "\uD83D\uDC30 Conejo"), /*#__PURE__*/React.createElement("option", {
      value: "otro"
    }, "\uD83D\uDC3E Otro")), /*#__PURE__*/React.createElement("div", {
      className: "absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-down text-xs"
    })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Raza"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newPet.breed,
      onChange: function onChange(e) {
        return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
          breed: e.target.value
        }));
      },
      className: "w-full h-12 px-4 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "Ej: Labrador, Persa..."
    })), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 gap-3"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Edad"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newPet.ageValue,
      onChange: function onChange(e) {
        return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
          ageValue: e.target.value.replace(/[^0-9]/g, "")
        }));
      },
      className: "w-full h-12 px-4 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "Ej: 3"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Unidad"), /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement("select", {
      value: newPet.ageUnit,
      onChange: function onChange(e) {
        return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
          ageUnit: e.target.value
        }));
      },
      className: "w-full h-12 px-4 pr-10 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none bg-white appearance-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: "a\xF1os"
    }, "A\xF1os"), /*#__PURE__*/React.createElement("option", {
      value: "meses"
    }, "Meses")), /*#__PURE__*/React.createElement("div", {
      className: "absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-down text-xs"
    }))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Sexo"), /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement("select", {
      value: newPet.sex,
      onChange: function onChange(e) {
        return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
          sex: e.target.value
        }));
      },
      className: "w-full h-12 px-4 pr-10 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none bg-white appearance-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Seleccionar"), /*#__PURE__*/React.createElement("option", {
      value: "Macho"
    }, "Macho"), /*#__PURE__*/React.createElement("option", {
      value: "Hembra"
    }, "Hembra")), /*#__PURE__*/React.createElement("div", {
      className: "absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-down text-xs"
    })))), freshUser.type === 'medico' && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Nombre del Due\xF1o"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newPet.owner,
      onChange: function onChange(e) {
        return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
          owner: e.target.value
        }));
      },
      className: "w-full h-12 px-4 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "Nombre del propietario"
    })), /*#__PURE__*/React.createElement("button", {
      onClick: addNewPet,
      className: "w-full h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-check mr-2"
    }), "Guardar y Seleccionar")))), showAddressSelection && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "bg-emerald-50 border border-emerald-200 rounded-xl p-3 mb-4 flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-2xl"
    }, selectedPetForOrder === null || selectedPetForOrder === void 0 ? void 0 : selectedPetForOrder.photo), /*#__PURE__*/React.createElement("div", {
      className: "flex-1"
    }, /*#__PURE__*/React.createElement("p", {
      className: "font-medium text-emerald-800"
    }, selectedPetForOrder === null || selectedPetForOrder === void 0 ? void 0 : selectedPetForOrder.name), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-emerald-600"
    }, selectedPetForOrder === null || selectedPetForOrder === void 0 ? void 0 : selectedPetForOrder.breed)), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-check-circle text-emerald-500"
    })), !showNewAddressForm ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
      className: "text-sm font-medium text-gray-700 mb-3"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-map-marker-alt mr-2 text-cyan-500"
    }), "Direcci\xF3n de recojo"), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow overflow-hidden mb-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-h-64 overflow-y-auto hide-scrollbar"
    }, (freshUser.addresses || []).length === 0 ? /*#__PURE__*/React.createElement("div", {
      className: "p-8 text-center text-gray-500"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-map-marker-alt text-3xl mb-2 text-gray-300"
    }), /*#__PURE__*/React.createElement("p", null, "No tienes direcciones guardadas")) : (freshUser.addresses || []).map(function (addr) {
      return /*#__PURE__*/React.createElement("div", {
        key: addr.id,
        onClick: function onClick() {
          return assignAddressAndComplete(addr);
        },
        className: "p-4 border-b border-gray-100 last:border-0 cursor-pointer hover:bg-gray-50"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-start gap-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-map-marker-alt text-cyan-600"
      })), /*#__PURE__*/React.createElement("div", {
        className: "flex-1"
      }, /*#__PURE__*/React.createElement("p", {
        className: "font-semibold text-gray-800"
      }, addr.name), /*#__PURE__*/React.createElement("p", {
        className: "text-sm text-gray-600"
      }, addr.address), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-500"
      }, addr.district, addr.reference ? " \u2022 ".concat(addr.reference) : '')), /*#__PURE__*/React.createElement("i", {
        className: "fas fa-chevron-right text-gray-300 mt-3"
      })));
    }))), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowNewAddressForm(true);
      },
      className: "w-full py-4 rounded-2xl border-2 border-dashed border-cyan-300 text-cyan-600 font-semibold hover:bg-cyan-50"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-plus mr-2"
    }), "Agregar nueva direcci\xF3n")) : /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow p-6"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold text-gray-800 mb-4"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-map-marker-alt mr-2 text-cyan-500"
    }), "Nueva Direcci\xF3n"), /*#__PURE__*/React.createElement("button", {
      onClick: getMyLocation,
      disabled: gettingLocation,
      className: "w-full mb-4 py-3 rounded-xl border-2 border-dashed border-cyan-300 bg-cyan-50 text-cyan-700 font-medium hover:bg-cyan-100 transition-colors flex items-center justify-center gap-2"
    }, gettingLocation ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-spinner fa-spin"
    }), "Obteniendo ubicaci\xF3n...") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-location-crosshairs"
    }), "Utilizar mi ubicaci\xF3n")), /*#__PURE__*/React.createElement("div", {
      className: "space-y-4"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Nombre de la direcci\xF3n *"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newAddress.name,
      onChange: function onChange(e) {
        return setNewAddress(_objectSpread(_objectSpread({}, newAddress), {}, {
          name: e.target.value
        }));
      },
      className: "w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none",
      placeholder: "Ej: Casa, Oficina, Cl\xEDnica"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Direcci\xF3n *"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newAddress.address,
      onChange: function onChange(e) {
        return setNewAddress(_objectSpread(_objectSpread({}, newAddress), {}, {
          address: e.target.value
        }));
      },
      className: "w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none",
      placeholder: "Av. / Calle / Jr. y n\xFAmero"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Distrito *"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newAddress.district,
      onChange: function onChange(e) {
        return setNewAddress(_objectSpread(_objectSpread({}, newAddress), {}, {
          district: e.target.value
        }));
      },
      className: "w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none",
      placeholder: "Ej: San Isidro"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Referencia (opcional)"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newAddress.reference,
      onChange: function onChange(e) {
        return setNewAddress(_objectSpread(_objectSpread({}, newAddress), {}, {
          reference: e.target.value
        }));
      },
      className: "w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none",
      placeholder: "Ej: Frente al parque, edificio azul"
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-3 pt-2"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setShowNewAddressForm(false);
        setNewAddress({
          name: '',
          address: '',
          district: '',
          reference: ''
        });
      },
      className: "flex-1 py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-semibold hover:bg-gray-50"
    }, "Cancelar"), /*#__PURE__*/React.createElement("button", {
      onClick: addNewAddress,
      className: "flex-1 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold"
    }, "Guardar y usar"))))));
    return /*#__PURE__*/React.createElement("div", {
      className: "min-h-screen bg-gray-100"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white border-b px-4 py-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-4xl mx-auto flex items-center gap-4"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: backHandler,
      className: "text-gray-600"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left"
    })), /*#__PURE__*/React.createElement("img", {
      src: "assets/logo_inulaboratorios.jpg",
      alt: "Logo",
      className: "h-8",
      onError: function onError(e) {
        return e.target.style.display = 'none';
      }
    }))), selectionBody);
  }

  // VISTA PRINCIPAL

  // =====================================================
  // VISTA PARA MÉDICOS/CLÍNICAS - Nueva interfaz con 4 categorías
  // =====================================================
  if (freshUser.type === 'medico') {
    // Filtrar mascotas según búsqueda
    var filteredMascotas = mascotaSearchTerm.trim() === '' ? petsOrPatients : petsOrPatients.filter(function (p) {
      return p.name.toLowerCase().includes(mascotaSearchTerm.toLowerCase()) || p.owner && p.owner.toLowerCase().includes(mascotaSearchTerm.toLowerCase());
    });

    // Filtrar exámenes de una mascota según filtros
    var filterExams = function filterExams(exams) {
      var filtered = _toConsumableArray(exams);
      if (examSearchTerm) {
        filtered = filtered.filter(function (e) {
          return e.type.toLowerCase().includes(examSearchTerm.toLowerCase());
        });
      }
      if (examFilterType) {
        filtered = filtered.filter(function (e) {
          return e.type.toLowerCase().includes(examFilterType.toLowerCase());
        });
      }
      if (examFilterDay || examFilterMonth || examFilterYear) {
        filtered = filtered.filter(function (e) {
          var examDate = new Date(e.date);
          var day = String(examDate.getDate()).padStart(2, '0');
          var month = String(examDate.getMonth() + 1).padStart(2, '0');
          var year = String(examDate.getFullYear());
          if (examFilterDay && day !== examFilterDay) return false;
          if (examFilterMonth && month !== examFilterMonth) return false;
          if (examFilterYear && year !== examFilterYear) return false;
          return true;
        });
      }
      return filtered;
    };

    // Obtener todos los pedidos completados para historial
    var completedOrders = (database.orders || []).filter(function (o) {
      return o.userId === freshUser.id && o.status === 'completed';
    }).sort(function (a, b) {
      return new Date(b.completedAt || b.date) - new Date(a.completedAt || a.date);
    });

    // Obtener pedidos en curso
    var pendingOrders = (database.orders || []).filter(function (o) {
      return o.userId === freshUser.id && o.status !== 'completed';
    }).sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });

    // Obtener tipos de examen únicos para el filtro
    var allExamTypes = _toConsumableArray(new Set(petsOrPatients.flatMap(function (p) {
      return p.exams.map(function (e) {
        return e.type;
      });
    })));
    return /*#__PURE__*/React.createElement("div", {
      className: "min-h-screen bg-gray-100"
    }, renderTermsModal(), /*#__PURE__*/React.createElement("div", {
      className: "md:hidden"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mob-header"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mob-header-inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mob-header-logo cursor-pointer",
      onClick: function onClick() {
        setMedicoView('inicio');
        setSelectedMascota(null);
        setMenuOpen(false);
        setSelectedExam(null);
        setViewingInvoice(null);
        setCurrentExamForPet(null);
        setPendingExams([]);
        setCart([]);
        setShowNewPetForm(false);
        setShowAddressSelection(false);
        setShowNewAddressForm(false);
        setSelectedPetForOrder(null);
        setShowEditProfile(false);
        setViewingOrderTracking(null);
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/logo_inulaboratorios.jpg",
      alt: "INULAB",
      className: "h-8",
      onError: function onError(e) {
        e.target.style.display = 'none';
        e.target.nextSibling.style.display = 'flex';
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "hidden w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg items-center justify-center text-white font-bold text-sm"
    }, "I")), /*#__PURE__*/React.createElement("span", {
      className: "mob-header-title"
    }, freshUser.name), /*#__PURE__*/React.createElement("div", {
      className: "mob-header-actions"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return cart.length > 0 && setShowOrderSummary(true);
      },
      className: "relative w-9 h-9 rounded-xl flex items-center justify-center transition-colors ".concat(cart.length > 0 ? 'bg-gray-100 text-gray-700' : 'bg-gray-100 text-gray-300 cursor-default')
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-shopping-cart text-base"
    }), cart.length > 0 && /*#__PURE__*/React.createElement("span", {
      className: "absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center font-bold"
    }, cart.length)), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setMenuOpen(!menuOpen);
      },
      className: "w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center text-gray-600 transition-colors"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-bars text-base"
    }))))), menuOpen && /*#__PURE__*/React.createElement("div", {
      className: "mob-menu-overlay",
      onClick: function onClick() {
        return setMenuOpen(false);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "mob-menu-panel",
      onClick: function onClick(e) {
        return e.stopPropagation();
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between px-5 py-4 border-b border-gray-100"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-sm font-semibold text-gray-500 uppercase tracking-wider"
    }, "Men\xFA"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setMenuOpen(false);
      },
      className: "w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-times text-sm"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "px-5 py-5 border-b border-gray-100"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg"
    }, freshUser.name.charAt(0)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "font-bold text-gray-800"
    }, freshUser.name), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-cyan-600 font-medium"
    }, "Cl\xEDnica / M\xE9dico"), freshUser.email && /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400 mt-0.5"
    }, freshUser.email)))), /*#__PURE__*/React.createElement("div", {
      className: "px-4 py-3 space-y-1"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setMedicoView('configuracion');
        setShowEditProfile(true);
        setMenuOpen(false);
      },
      className: "w-full flex items-center gap-3 px-4 py-3.5 rounded-xl hover:bg-gray-50 text-gray-700 transition-colors"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-9 h-9 bg-cyan-100 rounded-xl flex items-center justify-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-user-edit text-cyan-600"
    })), /*#__PURE__*/React.createElement("span", {
      className: "font-medium"
    }, "Editar Perfil"), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-right text-gray-300 ml-auto text-xs"
    })), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setMedicoView('facturacion');
        setMenuOpen(false);
        setSelectedMascota(null);
        setSelectedExam(null);
        setViewingInvoice(null);
        setCurrentExamForPet(null);
        setPendingExams([]);
        setCart([]);
        setShowNewPetForm(false);
        setShowAddressSelection(false);
        setShowNewAddressForm(false);
        setSelectedPetForOrder(null);
        setShowEditProfile(false);
        setViewingOrderTracking(null);
      },
      className: "w-full flex items-center gap-3 px-4 py-3.5 rounded-xl hover:bg-gray-50 text-gray-700 transition-colors"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-9 h-9 bg-amber-100 rounded-xl flex items-center justify-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-invoice-dollar text-amber-600"
    })), /*#__PURE__*/React.createElement("span", {
      className: "font-medium"
    }, "Facturaci\xF3n"), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-right text-gray-300 ml-auto text-xs"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "mx-4 border-t border-gray-100 my-1"
    }), /*#__PURE__*/React.createElement("div", {
      className: "px-4 py-2 space-y-1"
    }, /*#__PURE__*/React.createElement("a", {
      href: "https://wa.me/51954904248",
      target: "_blank",
      className: "flex items-center gap-3 px-4 py-3.5 rounded-xl hover:bg-green-50 text-gray-700 transition-colors"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-9 h-9 bg-green-100 rounded-xl flex items-center justify-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fab fa-whatsapp text-green-600"
    })), /*#__PURE__*/React.createElement("span", {
      className: "font-medium"
    }, "WhatsApp Soporte")), /*#__PURE__*/React.createElement("a", {
      href: "mailto:lab@inulaboratorios.com",
      className: "flex items-center gap-3 px-4 py-3.5 rounded-xl hover:bg-blue-50 text-gray-700 transition-colors"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-9 h-9 bg-blue-100 rounded-xl flex items-center justify-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-envelope text-blue-600"
    })), /*#__PURE__*/React.createElement("span", {
      className: "font-medium text-sm"
    }, "lab@inulaboratorios.com"))), /*#__PURE__*/React.createElement("div", {
      className: "mx-4 border-t border-gray-100 my-1"
    }), /*#__PURE__*/React.createElement("div", {
      className: "px-4 py-2"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setMenuOpen(false);
        handleLogout();
      },
      className: "w-full flex items-center gap-3 px-4 py-3.5 rounded-xl hover:bg-red-50 text-red-500 transition-colors"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-9 h-9 bg-red-50 rounded-xl flex items-center justify-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-sign-out-alt text-red-500"
    })), /*#__PURE__*/React.createElement("span", {
      className: "font-medium"
    }, "Cerrar Sesi\xF3n"))))), /*#__PURE__*/React.createElement("div", {
      className: "mob-content"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-4xl mx-auto px-4 py-5"
    }, successMessage && /*#__PURE__*/React.createElement("div", {
      className: "bg-emerald-50 border border-emerald-300 text-emerald-700 p-4 rounded-xl mb-4 flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-check-circle text-emerald-500"
    }), successMessage), viewingOrderTracking && function (_trackingOrder$items$, _trackingOrder$items$2, _trackingOrder$items$3, _trackingOrder$items$4) {
      var trackingOrder = (database.orders || []).find(function (o) {
        return o.id === viewingOrderTracking.id;
      }) || viewingOrderTracking;
      var formatTrackingDateTime = function formatTrackingDateTime(date) {
        if (!date) return '';
        var d = new Date(date);
        return d.toLocaleDateString('es-ES', {
          day: 'numeric',
          month: 'long'
        }) + ' - ' + d.toLocaleTimeString('es-ES', {
          hour: '2-digit',
          minute: '2-digit'
        });
      };
      var trackingSteps = [{
        id: 'pending',
        label: 'Pedido realizado',
        subtitle: 'Tu pedido ha sido registrado',
        icon: 'fa-clipboard-check',
        date: trackingOrder.date
      }, {
        id: 'confirmed',
        label: 'Pedido confirmado',
        subtitle: 'El laboratorio confirmó tu pedido',
        icon: 'fa-check-circle',
        date: trackingOrder.date
      }, {
        id: 'moto_en_camino',
        label: 'Motorizado en camino',
        subtitle: 'El motorizado va hacia tu ubicación',
        icon: 'fa-motorcycle',
        date: ['moto_en_camino', 'moto_arrived', 'sample_received', 'arrived_at_lab', 'processing', 'results_uploaded', 'completed'].includes(trackingOrder.status) ? trackingOrder.statusUpdatedAt : null
      }, {
        id: 'moto_arrived',
        label: 'Motorizado llegó',
        subtitle: 'Por favor entrega la muestra',
        icon: 'fa-map-marker-alt',
        date: ['moto_arrived', 'sample_received', 'arrived_at_lab', 'processing', 'results_uploaded', 'completed'].includes(trackingOrder.status) ? trackingOrder.statusUpdatedAt : null
      }, {
        id: 'sample_received',
        label: 'Muestra recogida',
        subtitle: 'Tu muestra va camino al laboratorio',
        icon: 'fa-vial',
        date: ['sample_received', 'arrived_at_lab', 'processing', 'results_uploaded', 'completed'].includes(trackingOrder.status) ? trackingOrder.statusUpdatedAt : null
      }, {
        id: 'arrived_at_lab',
        label: 'En laboratorio',
        subtitle: 'La muestra llegó al laboratorio',
        icon: 'fa-flask',
        date: ['arrived_at_lab', 'processing', 'results_uploaded', 'completed'].includes(trackingOrder.status) ? trackingOrder.statusUpdatedAt : null
      }, {
        id: 'processing',
        label: 'Procesando muestra',
        subtitle: 'Estamos analizando tu muestra',
        icon: 'fa-cog',
        date: ['processing', 'results_uploaded', 'completed'].includes(trackingOrder.status) ? trackingOrder.statusUpdatedAt : null
      }, {
        id: 'results_uploaded',
        label: 'Resultados listos',
        subtitle: 'Realiza el pago para ver los resultados',
        icon: 'fa-file-medical',
        date: ['results_uploaded', 'completed'].includes(trackingOrder.status) ? trackingOrder.statusUpdatedAt : null
      }, {
        id: 'completed',
        label: 'Entregado',
        subtitle: '¡Ya puedes ver tus resultados!',
        icon: 'fa-check-double',
        date: trackingOrder.status === 'completed' ? trackingOrder.completedAt : null
      }];
      var trackingStatusOrder = ['pending', 'confirmed', 'moto_en_camino', 'moto_arrived', 'sample_received', 'arrived_at_lab', 'processing', 'results_uploaded', 'completed'];
      var trackingCurrentIndex = trackingStatusOrder.indexOf(trackingOrder.status === 'pending' ? 'confirmed' : trackingOrder.status);
      return /*#__PURE__*/React.createElement("div", {
        className: "-mx-4 -mt-5"
      }, /*#__PURE__*/React.createElement("div", {
        className: "px-4 pt-4 pb-6 space-y-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-3 mb-1"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return setViewingOrderTracking(null);
        },
        className: "w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 flex-shrink-0"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-arrow-left text-sm"
      })), /*#__PURE__*/React.createElement("div", {
        className: "min-w-0"
      }, /*#__PURE__*/React.createElement("h1", {
        className: "text-sm font-bold text-gray-800 leading-tight"
      }, "Tracking del Pedido"), /*#__PURE__*/React.createElement("p", {
        className: "text-gray-500 text-xs truncate"
      }, getPetFullName((_trackingOrder$items$ = trackingOrder.items[0]) === null || _trackingOrder$items$ === void 0 ? void 0 : _trackingOrder$items$.pet), " \xB7 ", (_trackingOrder$items$2 = trackingOrder.items[0]) === null || _trackingOrder$items$2 === void 0 ? void 0 : _trackingOrder$items$2.exam.name))), /*#__PURE__*/React.createElement("div", {
        className: "bg-white rounded-2xl shadow-sm border border-gray-100 p-4"
      }, /*#__PURE__*/React.createElement("h3", {
        className: "font-semibold text-xs uppercase tracking-wide text-gray-400 mb-3"
      }, "Detalle del pedido"), /*#__PURE__*/React.createElement("div", {
        className: "space-y-2"
      }, trackingOrder.items.map(function (item, idx) {
        return /*#__PURE__*/React.createElement("div", {
          key: idx,
          className: "flex items-center gap-3 p-2.5 bg-gray-50 rounded-xl"
        }, /*#__PURE__*/React.createElement("div", {
          className: "w-9 h-9 ".concat(item.exam.bg, " rounded-xl flex items-center justify-center flex-shrink-0")
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas ".concat(item.exam.icon, " ").concat(item.exam.color, " text-sm")
        })), /*#__PURE__*/React.createElement("div", {
          className: "flex-1 min-w-0"
        }, /*#__PURE__*/React.createElement("p", {
          className: "font-medium text-gray-800 text-sm leading-tight truncate"
        }, item.exam.name), /*#__PURE__*/React.createElement("p", {
          className: "text-gray-500 text-xs"
        }, item.pet.photo, " ", getPetFullName(item.pet))));
      })), /*#__PURE__*/React.createElement("div", {
        className: "mt-3 pt-3 border-t border-gray-100"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-start gap-2 text-sm"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-map-marker-alt text-cyan-500 mt-0.5 text-xs"
      }), /*#__PURE__*/React.createElement("p", {
        className: "text-gray-600 text-xs leading-snug"
      }, ((_trackingOrder$items$3 = trackingOrder.items[0]) === null || _trackingOrder$items$3 === void 0 || (_trackingOrder$items$3 = _trackingOrder$items$3.address) === null || _trackingOrder$items$3 === void 0 ? void 0 : _trackingOrder$items$3.address) || 'Sin dirección', ", ", ((_trackingOrder$items$4 = trackingOrder.items[0]) === null || _trackingOrder$items$4 === void 0 || (_trackingOrder$items$4 = _trackingOrder$items$4.address) === null || _trackingOrder$items$4 === void 0 ? void 0 : _trackingOrder$items$4.district) || ''))), trackingOrder.comment && /*#__PURE__*/React.createElement("div", {
        className: "mt-2 pt-2 border-t border-gray-100"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-start gap-2"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-comment-alt text-cyan-500 mt-0.5 text-xs"
      }), /*#__PURE__*/React.createElement("p", {
        className: "text-gray-600 text-xs leading-snug"
      }, trackingOrder.comment)))), /*#__PURE__*/React.createElement("div", {
        className: "bg-white rounded-2xl shadow-sm border border-gray-100 p-4"
      }, /*#__PURE__*/React.createElement("h3", {
        className: "font-semibold text-xs uppercase tracking-wide text-gray-400 mb-4"
      }, "Estado del pedido"), /*#__PURE__*/React.createElement("div", {
        className: "space-y-0"
      }, trackingSteps.map(function (step, index) {
        var isCompleted = index <= trackingCurrentIndex;
        var isLast = index === trackingSteps.length - 1;
        return /*#__PURE__*/React.createElement("div", {
          key: step.id,
          className: "flex gap-3"
        }, /*#__PURE__*/React.createElement("div", {
          className: "flex flex-col items-center"
        }, /*#__PURE__*/React.createElement("div", {
          className: "w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ".concat(isCompleted ? 'bg-cyan-500 text-white' : 'bg-gray-100 text-gray-400')
        }, isCompleted ? /*#__PURE__*/React.createElement("i", {
          className: "fas fa-check text-xs"
        }) : /*#__PURE__*/React.createElement("i", {
          className: "fas ".concat(step.icon, " text-xs")
        })), !isLast && /*#__PURE__*/React.createElement("div", {
          className: "w-0.5 h-9 mt-0.5 ".concat(index < trackingCurrentIndex ? 'bg-cyan-400' : 'bg-gray-200')
        })), /*#__PURE__*/React.createElement("div", {
          className: "flex-1 min-w-0 ".concat(!isLast ? 'pb-2' : '')
        }, /*#__PURE__*/React.createElement("p", {
          className: "font-medium text-sm leading-tight ".concat(isCompleted ? 'text-gray-800' : 'text-gray-400')
        }, step.label), /*#__PURE__*/React.createElement("p", {
          className: "text-xs mt-0.5 ".concat(isCompleted ? 'text-gray-500' : 'text-gray-400')
        }, step.subtitle), isCompleted && step.date && /*#__PURE__*/React.createElement("p", {
          className: "text-cyan-600 text-xs mt-0.5"
        }, formatTrackingDateTime(step.date))));
      })))));
    }(), selectedExam && /*#__PURE__*/React.createElement("div", {
      className: "-mx-4 -mt-5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow-lg p-4 m-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3 mb-4"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setSelectedExam(null);
      },
      className: "w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      className: "text-lg font-bold text-gray-800"
    }, selectedExam.type), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500 text-sm"
    }, new Date(selectedExam.date).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })))), selectedExam.pdfData ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("iframe", {
      src: selectedExam.pdfData,
      className: "w-full rounded-xl border border-gray-200",
      style: {
        height: 'calc(100vh - 250px)'
      },
      title: "PDF"
    }), /*#__PURE__*/React.createElement("div", {
      className: "mt-3 flex justify-center"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        var link = document.createElement('a');
        link.href = selectedExam.pdfData;
        link.download = "".concat(selectedExam.type.replace(/[^a-zA-Z0-9]/g, '_'), ".pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      },
      className: "flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-sm"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-download"
    }), " Descargar PDF"))) : /*#__PURE__*/React.createElement("div", {
      className: "bg-gray-100 rounded-xl p-12 text-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-pdf text-4xl text-gray-400 mb-2"
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500"
    }, "PDF no disponible")))), !selectedExam && viewingInvoice && /*#__PURE__*/React.createElement("div", {
      className: "-mx-4 -mt-5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow-lg p-4 m-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3 mb-4"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setViewingInvoice(null);
      },
      className: "w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      className: "text-lg font-bold text-gray-800"
    }, viewingInvoice.documentType === 'boleta' ? 'Boleta' : 'Factura'), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500 text-sm"
    }, new Date(viewingInvoice.completedAt || viewingInvoice.date).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })))), viewingInvoice.invoicePdf ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("iframe", {
      src: viewingInvoice.invoicePdf,
      className: "w-full rounded-xl border border-gray-200",
      style: {
        height: 'calc(100vh - 280px)'
      },
      title: "Comprobante PDF"
    }), /*#__PURE__*/React.createElement("div", {
      className: "mt-3 flex justify-center"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        var link = document.createElement('a');
        link.href = viewingInvoice.invoicePdf;
        link.download = "".concat(viewingInvoice.documentType === 'boleta' ? 'Boleta' : 'Factura', "_").concat(viewingInvoice.id, ".pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      },
      className: "flex items-center gap-2 px-6 py-2.5 ".concat(viewingInvoice.documentType === 'boleta' ? 'bg-gradient-to-r from-cyan-500 to-blue-600' : 'bg-gradient-to-r from-amber-500 to-orange-600', " text-white rounded-xl font-semibold text-sm")
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-download"
    }), " Descargar PDF"))) : /*#__PURE__*/React.createElement("div", {
      className: "bg-gray-100 rounded-xl p-12 text-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas ".concat(viewingInvoice.documentType === 'boleta' ? 'fa-receipt' : 'fa-file-invoice', " text-4xl text-gray-400 mb-2")
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500"
    }, viewingInvoice.documentType === 'boleta' ? 'Boleta' : 'Factura', " no disponible")))), currentExamForPet && !viewingOrderTracking && !viewingInvoice && !selectedExam && function () {
      var mobBackHandler = function mobBackHandler() {
        if (showAddressSelection && !showNewAddressForm) {
          setShowAddressSelection(false);
          setSelectedPetForOrder(null);
        } else if (showNewAddressForm) {
          setShowNewAddressForm(false);
        } else if (showNewPetForm) {
          setShowNewPetForm(false);
        } else {
          setCurrentExamForPet(null);
          removeFromPending(currentExamForPet.id);
        }
      };
      return /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'fixed',
          top: 'calc(56px + env(safe-area-inset-top,0px))',
          left: 0,
          right: 0,
          bottom: 'calc(64px + env(safe-area-inset-bottom,0px))',
          display: 'flex',
          flexDirection: 'column',
          background: '#f3f4f6',
          zIndex: 50
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          background: 'white',
          position: 'relative',
          zIndex: 2,
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "px-4 pt-3 pb-3"
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          background: 'linear-gradient(135deg, #06b6d4, #0284c7)',
          borderRadius: '14px',
          padding: '12px 14px'
        },
        className: "flex items-center gap-3"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: mobBackHandler,
        className: "w-9 h-9 bg-white/20 rounded-full flex items-center justify-center text-white flex-shrink-0"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-arrow-left text-sm"
      })), /*#__PURE__*/React.createElement("div", {
        className: "flex-1 min-w-0"
      }, /*#__PURE__*/React.createElement("p", {
        className: "font-bold text-white text-sm leading-tight truncate"
      }, currentExamForPet.name), currentExamForPet.subtitle && /*#__PURE__*/React.createElement("p", {
        className: "text-cyan-100 text-xs truncate mt-0.5"
      }, currentExamForPet.subtitle)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center justify-center gap-2 pb-2 px-4"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ".concat(!showAddressSelection ? 'bg-cyan-500 text-white' : 'bg-emerald-100 text-emerald-700')
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas ".concat(!showAddressSelection ? 'fa-paw' : 'fa-check', " text-xs")
      }), " Paciente"), /*#__PURE__*/React.createElement("i", {
        className: "fas fa-chevron-right text-gray-300 text-xs"
      }), /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ".concat(showAddressSelection ? 'bg-cyan-500 text-white' : 'bg-gray-200 text-gray-400')
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-map-marker-alt text-xs"
      }), " Direcci\xF3n"), pendingExams.length > 1 && /*#__PURE__*/React.createElement("span", {
        className: "text-xs text-blue-500 ml-2"
      }, pendingExams.findIndex(function (e) {
        return e.id === currentExamForPet.id;
      }) + 1, "/", pendingExams.length)), !showAddressSelection && !showNewPetForm && /*#__PURE__*/React.createElement("div", {
        className: "px-4 pb-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "relative"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs"
      }), /*#__PURE__*/React.createElement("input", {
        type: "text",
        value: petSearchTerm,
        onChange: function onChange(e) {
          return setPetSearchTerm(e.target.value);
        },
        placeholder: "Buscar paciente...",
        className: "w-full pl-9 pr-4 py-2 rounded-lg border border-gray-200 focus:border-cyan-500 focus:outline-none bg-gray-50 text-sm"
      }))), showAddressSelection && !showNewAddressForm && /*#__PURE__*/React.createElement("div", {
        className: "px-4 pb-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2 flex items-center gap-2"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-lg leading-none"
      }, selectedPetForOrder === null || selectedPetForOrder === void 0 ? void 0 : selectedPetForOrder.photo), /*#__PURE__*/React.createElement("div", {
        className: "flex-1 min-w-0"
      }, /*#__PURE__*/React.createElement("p", {
        className: "font-medium text-emerald-800 text-xs leading-tight"
      }, selectedPetForOrder === null || selectedPetForOrder === void 0 ? void 0 : selectedPetForOrder.name), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-emerald-600"
      }, selectedPetForOrder === null || selectedPetForOrder === void 0 ? void 0 : selectedPetForOrder.breed)), /*#__PURE__*/React.createElement("i", {
        className: "fas fa-check-circle text-emerald-500 text-sm"
      }))))), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1,
          overflowY: 'auto',
          padding: '12px 16px'
        }
      }, !showAddressSelection && /*#__PURE__*/React.createElement(React.Fragment, null, !showNewPetForm ? /*#__PURE__*/React.createElement("div", {
        className: "space-y-2"
      }, filteredPets.length === 0 ? /*#__PURE__*/React.createElement("div", {
        className: "bg-white rounded-xl p-6 text-center text-gray-400 text-sm shadow-sm border border-gray-100"
      }, "No se encontr\xF3 ning\xFAn paciente") : filteredPets.map(function (pet) {
        return /*#__PURE__*/React.createElement("div", {
          key: pet.id,
          onClick: function onClick() {
            return assignPetToExam(pet);
          },
          className: "bg-white rounded-xl px-3 py-2.5 shadow-sm cursor-pointer active:opacity-75 border-2 border-transparent flex items-center gap-3"
        }, /*#__PURE__*/React.createElement("div", {
          className: "text-2xl leading-none"
        }, pet.photo), /*#__PURE__*/React.createElement("div", {
          className: "flex-1 min-w-0"
        }, /*#__PURE__*/React.createElement("p", {
          className: "font-semibold text-gray-800 text-sm leading-tight truncate"
        }, getPetFullName(pet)), /*#__PURE__*/React.createElement("p", {
          className: "text-xs text-gray-400 truncate"
        }, pet.breed, pet.owner ? " \xB7 ".concat(pet.owner) : '')), /*#__PURE__*/React.createElement("i", {
          className: "fas fa-chevron-right text-gray-300 text-xs flex-shrink-0"
        }));
      })) : /*#__PURE__*/React.createElement("div", {
        className: "bg-white rounded-xl shadow-sm p-3 border border-gray-100"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-sm font-bold text-gray-700 mb-3"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-plus-circle mr-1.5 text-cyan-500"
      }), "Nuevo Paciente"), /*#__PURE__*/React.createElement("div", {
        className: "grid grid-cols-2 gap-2 mb-2"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
        className: "block text-xs text-gray-500 mb-1"
      }, "Nombre *"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        value: newPet.name,
        onChange: function onChange(e) {
          return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
            name: e.target.value
          }));
        },
        className: "w-full h-9 px-3 rounded-lg border border-gray-200 focus:border-cyan-500 focus:outline-none text-sm",
        placeholder: "Nombre"
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
        className: "block text-xs text-gray-500 mb-1"
      }, "Especie *"), /*#__PURE__*/React.createElement("div", {
        className: "relative"
      }, /*#__PURE__*/React.createElement("select", {
        value: newPet.animalType,
        onChange: function onChange(e) {
          return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
            animalType: e.target.value
          }));
        },
        className: "w-full h-9 px-3 pr-8 rounded-lg border border-gray-200 focus:border-cyan-500 focus:outline-none bg-white appearance-none text-sm"
      }, /*#__PURE__*/React.createElement("option", {
        value: ""
      }, "Seleccionar"), /*#__PURE__*/React.createElement("option", {
        value: "perro"
      }, "\uD83D\uDC15 Perro"), /*#__PURE__*/React.createElement("option", {
        value: "gato"
      }, "\uD83D\uDC08 Gato"), /*#__PURE__*/React.createElement("option", {
        value: "ave"
      }, "\uD83E\uDD9C Ave"), /*#__PURE__*/React.createElement("option", {
        value: "conejo"
      }, "\uD83D\uDC30 Conejo"), /*#__PURE__*/React.createElement("option", {
        value: "otro"
      }, "\uD83D\uDC3E Otro")), /*#__PURE__*/React.createElement("div", {
        className: "absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-chevron-down text-xs"
      }))))), /*#__PURE__*/React.createElement("div", {
        className: "grid grid-cols-2 gap-2 mb-2"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
        className: "block text-xs text-gray-500 mb-1"
      }, "Raza"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        value: newPet.breed,
        onChange: function onChange(e) {
          return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
            breed: e.target.value
          }));
        },
        className: "w-full h-9 px-3 rounded-lg border border-gray-200 focus:border-cyan-500 focus:outline-none text-sm",
        placeholder: "Raza"
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
        className: "block text-xs text-gray-500 mb-1"
      }, "Sexo"), /*#__PURE__*/React.createElement("div", {
        className: "relative"
      }, /*#__PURE__*/React.createElement("select", {
        value: newPet.sex,
        onChange: function onChange(e) {
          return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
            sex: e.target.value
          }));
        },
        className: "w-full h-9 px-3 pr-8 rounded-lg border border-gray-200 focus:border-cyan-500 focus:outline-none bg-white appearance-none text-sm"
      }, /*#__PURE__*/React.createElement("option", {
        value: ""
      }, "Sexo"), /*#__PURE__*/React.createElement("option", {
        value: "Macho"
      }, "Macho"), /*#__PURE__*/React.createElement("option", {
        value: "Hembra"
      }, "Hembra")), /*#__PURE__*/React.createElement("div", {
        className: "absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-chevron-down text-xs"
      }))))), /*#__PURE__*/React.createElement("div", {
        className: "grid grid-cols-2 gap-2 mb-2"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
        className: "block text-xs text-gray-500 mb-1"
      }, "Edad"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        value: newPet.ageValue,
        onChange: function onChange(e) {
          return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
            ageValue: e.target.value.replace(/[^0-9]/g, "")
          }));
        },
        className: "w-full h-9 px-3 rounded-lg border border-gray-200 focus:border-cyan-500 focus:outline-none text-sm",
        placeholder: "Ej: 3"
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
        className: "block text-xs text-gray-500 mb-1"
      }, "Unidad"), /*#__PURE__*/React.createElement("div", {
        className: "relative"
      }, /*#__PURE__*/React.createElement("select", {
        value: newPet.ageUnit,
        onChange: function onChange(e) {
          return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
            ageUnit: e.target.value
          }));
        },
        className: "w-full h-9 px-3 pr-8 rounded-lg border border-gray-200 focus:border-cyan-500 focus:outline-none bg-white appearance-none text-sm"
      }, /*#__PURE__*/React.createElement("option", {
        value: "a\xF1os"
      }, "A\xF1os"), /*#__PURE__*/React.createElement("option", {
        value: "meses"
      }, "Meses")), /*#__PURE__*/React.createElement("div", {
        className: "absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-chevron-down text-xs"
      }))))), /*#__PURE__*/React.createElement("div", {
        className: "mb-3"
      }, /*#__PURE__*/React.createElement("label", {
        className: "block text-xs text-gray-500 mb-1"
      }, "Nombre del Due\xF1o"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        value: newPet.owner,
        onChange: function onChange(e) {
          return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
            owner: e.target.value
          }));
        },
        className: "w-full h-9 px-3 rounded-lg border border-gray-200 focus:border-cyan-500 focus:outline-none text-sm",
        placeholder: "Propietario"
      })), /*#__PURE__*/React.createElement("button", {
        onClick: addNewPet,
        className: "w-full h-9 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-check mr-1.5"
      }), "Guardar y Seleccionar"))), showAddressSelection && /*#__PURE__*/React.createElement(React.Fragment, null, !showNewAddressForm ? /*#__PURE__*/React.createElement("div", {
        className: "space-y-2"
      }, (freshUser.addresses || []).length === 0 ? /*#__PURE__*/React.createElement("div", {
        className: "bg-white rounded-xl p-6 text-center text-gray-400 text-sm shadow-sm border border-gray-100"
      }, "No hay direcciones guardadas") : (freshUser.addresses || []).map(function (addr) {
        return /*#__PURE__*/React.createElement("div", {
          key: addr.id,
          onClick: function onClick() {
            return assignAddressAndComplete(addr);
          },
          className: "bg-white rounded-xl px-3 py-2.5 shadow-sm cursor-pointer active:opacity-75 flex items-center gap-2.5"
        }, /*#__PURE__*/React.createElement("div", {
          className: "w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas fa-map-marker-alt text-cyan-600 text-xs"
        })), /*#__PURE__*/React.createElement("div", {
          className: "flex-1 min-w-0"
        }, /*#__PURE__*/React.createElement("p", {
          className: "font-semibold text-gray-800 text-sm leading-tight"
        }, addr.name), /*#__PURE__*/React.createElement("p", {
          className: "text-xs text-gray-400 truncate"
        }, addr.address, ", ", addr.district)), /*#__PURE__*/React.createElement("i", {
          className: "fas fa-chevron-right text-gray-300 text-xs"
        }));
      })) : /*#__PURE__*/React.createElement("div", {
        className: "bg-white rounded-xl shadow-sm p-3 border border-gray-100"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: getMyLocation,
        disabled: gettingLocation,
        className: "w-full mb-2.5 py-2 rounded-lg border border-dashed border-cyan-300 bg-cyan-50 text-cyan-700 font-medium text-sm flex items-center justify-center gap-2"
      }, gettingLocation ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-spinner fa-spin text-xs"
      }), " Obteniendo...") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-location-crosshairs text-xs"
      }), " Usar mi ubicaci\xF3n")), /*#__PURE__*/React.createElement("div", {
        className: "grid grid-cols-2 gap-2 mb-2"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
        className: "block text-xs text-gray-500 mb-1"
      }, "Nombre *"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        value: newAddress.name,
        onChange: function onChange(e) {
          return setNewAddress(_objectSpread(_objectSpread({}, newAddress), {}, {
            name: e.target.value
          }));
        },
        className: "w-full h-9 px-3 rounded-lg border border-gray-200 focus:border-cyan-500 focus:outline-none text-sm",
        placeholder: "Casa, Cl\xEDnica..."
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
        className: "block text-xs text-gray-500 mb-1"
      }, "Distrito *"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        value: newAddress.district,
        onChange: function onChange(e) {
          return setNewAddress(_objectSpread(_objectSpread({}, newAddress), {}, {
            district: e.target.value
          }));
        },
        className: "w-full h-9 px-3 rounded-lg border border-gray-200 focus:border-cyan-500 focus:outline-none text-sm",
        placeholder: "Ej: Miraflores"
      }))), /*#__PURE__*/React.createElement("div", {
        className: "mb-2"
      }, /*#__PURE__*/React.createElement("label", {
        className: "block text-xs text-gray-500 mb-1"
      }, "Direcci\xF3n *"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        value: newAddress.address,
        onChange: function onChange(e) {
          return setNewAddress(_objectSpread(_objectSpread({}, newAddress), {}, {
            address: e.target.value
          }));
        },
        className: "w-full h-9 px-3 rounded-lg border border-gray-200 focus:border-cyan-500 focus:outline-none text-sm",
        placeholder: "Av. / Calle / Jr. y n\xFAmero"
      })), /*#__PURE__*/React.createElement("div", {
        className: "mb-3"
      }, /*#__PURE__*/React.createElement("label", {
        className: "block text-xs text-gray-500 mb-1"
      }, "Referencia"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        value: newAddress.reference,
        onChange: function onChange(e) {
          return setNewAddress(_objectSpread(_objectSpread({}, newAddress), {}, {
            reference: e.target.value
          }));
        },
        className: "w-full h-9 px-3 rounded-lg border border-gray-200 focus:border-cyan-500 focus:outline-none text-sm",
        placeholder: "Frente al parque..."
      })), /*#__PURE__*/React.createElement("div", {
        className: "flex gap-2"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          setShowNewAddressForm(false);
          setNewAddress({
            name: '',
            address: '',
            district: '',
            reference: ''
          });
        },
        className: "flex-1 py-2 rounded-lg border border-gray-200 text-gray-600 font-medium text-sm"
      }, "Cancelar"), /*#__PURE__*/React.createElement("button", {
        onClick: addNewAddress,
        className: "flex-1 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm"
      }, "Guardar"))))), !showNewPetForm && !showNewAddressForm && /*#__PURE__*/React.createElement("div", {
        style: {
          background: 'white',
          boxShadow: '0 -2px 8px rgba(0,0,0,0.08)',
          borderTop: '1px solid #e5e7eb',
          position: 'relative',
          zIndex: 2
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "px-4 py-3"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return !showAddressSelection ? setShowNewPetForm(true) : setShowNewAddressForm(true);
        },
        className: "w-full py-2.5 rounded-xl bg-cyan-500 text-white font-semibold text-sm active:opacity-80 flex items-center justify-center gap-2"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-plus text-sm"
      }), !showAddressSelection ? 'Nuevo paciente' : 'Nueva dirección'))));
    }(), !selectedExam && !viewingInvoice && !viewingOrderTracking && medicoView === 'configuracion' && !showEditProfile && /*#__PURE__*/React.createElement("div", {
      className: "max-w-md mx-auto"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow-lg p-6"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "text-2xl font-bold text-gray-800 mb-6"
    }, "Configuraci\xF3n"), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-4 p-4 bg-gray-50 rounded-xl mb-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold"
    }, freshUser.name.charAt(0)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "font-semibold text-gray-800"
    }, freshUser.name, " ", freshUser.lastName || ''), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-500"
    }, freshUser.clinic || 'Clínica Veterinaria'))), /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: openEditProfile,
      className: "w-full flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors text-left"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-user text-cyan-600"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "font-medium text-gray-800"
    }, "Mi Perfil"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-500"
    }, "Editar informaci\xF3n de tu cl\xEDnica")), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-right text-gray-400 ml-auto"
    }))), /*#__PURE__*/React.createElement("button", {
      onClick: handleLogout,
      className: "w-full mt-6 py-4 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 font-semibold transition-colors flex items-center justify-center gap-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-sign-out-alt"
    }), "Cerrar Sesi\xF3n")), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setMedicoView('inicio');
      },
      className: "mt-4 w-full py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-medium hover:bg-gray-50"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left mr-2"
    }), "Volver al Inicio")), !selectedExam && !viewingInvoice && !viewingOrderTracking && medicoView === 'configuracion' && showEditProfile && /*#__PURE__*/React.createElement("div", {
      className: "max-w-md mx-auto"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow-lg p-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3 mb-6"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowEditProfile(false);
      },
      className: "w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left text-gray-600"
    })), /*#__PURE__*/React.createElement("h1", {
      className: "text-xl font-bold text-gray-800"
    }, "Mi Perfil")), /*#__PURE__*/React.createElement("div", {
      className: "flex justify-center mb-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold"
    }, editProfile.name.charAt(0) || freshUser.name.charAt(0))), /*#__PURE__*/React.createElement("div", {
      className: "space-y-4"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Nombre de la Cl\xEDnica", /*#__PURE__*/React.createElement("span", {
      className: "text-xs text-amber-600 ml-2"
    }, getNameChangeText())), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: editProfile.name,
      onChange: function onChange(e) {
        return setEditProfile(_objectSpread(_objectSpread({}, editProfile), {}, {
          name: e.target.value
        }));
      },
      className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "Nombre de tu cl\xEDnica"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Raz\xF3n Social (opcional)"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: editProfile.clinic,
      onChange: function onChange(e) {
        return setEditProfile(_objectSpread(_objectSpread({}, editProfile), {}, {
          clinic: e.target.value
        }));
      },
      className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "Raz\xF3n social para facturas"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "RUC (opcional)"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: editProfile.ruc,
      onChange: function onChange(e) {
        return setEditProfile(_objectSpread(_objectSpread({}, editProfile), {}, {
          ruc: e.target.value
        }));
      },
      className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "20123456789",
      maxLength: 11
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Tel\xE9fono de contacto"), /*#__PURE__*/React.createElement("input", {
      type: "tel",
      value: editProfile.phone,
      onChange: function onChange(e) {
        return setEditProfile(_objectSpread(_objectSpread({}, editProfile), {}, {
          phone: e.target.value
        }));
      },
      className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "999 888 777"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Correo electr\xF3nico"), /*#__PURE__*/React.createElement("input", {
      type: "email",
      value: editProfile.email,
      onChange: function onChange(e) {
        return setEditProfile(_objectSpread(_objectSpread({}, editProfile), {}, {
          email: e.target.value
        }));
      },
      className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "contacto@tuclinica.com"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Direcci\xF3n"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: editProfile.address,
      onChange: function onChange(e) {
        return setEditProfile(_objectSpread(_objectSpread({}, editProfile), {}, {
          address: e.target.value
        }));
      },
      className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "Av. Principal 123"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Distrito"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: editProfile.district,
      onChange: function onChange(e) {
        return setEditProfile(_objectSpread(_objectSpread({}, editProfile), {}, {
          district: e.target.value
        }));
      },
      className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "Miraflores"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "mt-6 space-y-3"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return saveProfile(editProfile.name !== freshUser.name);
      },
      className: "w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition-colors flex items-center justify-center gap-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-save"
    }), "Guardar Cambios"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowEditProfile(false);
      },
      className: "w-full py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-medium hover:bg-gray-50"
    }, "Cancelar")))), showOrderSummary && !currentExamForPet && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        top: 'calc(56px + env(safe-area-inset-top,0px))',
        left: 0,
        right: 0,
        bottom: 'calc(64px + env(safe-area-inset-bottom,0px))',
        display: 'flex',
        flexDirection: 'column',
        background: '#f3f4f6',
        zIndex: 50
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'linear-gradient(135deg, #06b6d4, #0284c7)',
        boxShadow: '0 3px 12px rgba(6,182,212,0.35)',
        position: 'relative',
        zIndex: 2
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "px-4 flex items-center gap-3",
      style: {
        minHeight: '56px',
        paddingTop: '12px',
        paddingBottom: '12px'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowOrderSummary(false);
      },
      className: "w-9 h-9 bg-white/20 rounded-full flex items-center justify-center text-white flex-shrink-0"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left text-sm"
    })), /*#__PURE__*/React.createElement("h2", {
      className: "text-sm font-bold text-white flex-1"
    }, "Resumen del Pedido"), /*#__PURE__*/React.createElement("span", {
      className: "text-xs text-cyan-100"
    }, cart.length, " examen", cart.length !== 1 ? 'es' : ''))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        padding: '12px 16px'
      }
    }, cart.map(function (item) {
      var _item$address;
      return /*#__PURE__*/React.createElement("div", {
        key: item.exam.id,
        className: "bg-white rounded-xl p-3 shadow-sm border border-gray-100 mb-2 flex items-center gap-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-9 h-9 ".concat(item.exam.bg, " rounded-lg flex items-center justify-center flex-shrink-0")
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas ".concat(item.exam.icon, " ").concat(item.exam.color, " text-sm")
      })), /*#__PURE__*/React.createElement("div", {
        className: "flex-1 min-w-0"
      }, /*#__PURE__*/React.createElement("p", {
        className: "font-semibold text-gray-800 text-sm leading-tight truncate"
      }, item.exam.name), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-400 truncate mt-0.5"
      }, item.pet.photo, " ", getPetFullName(item.pet), " \xB7 ", /*#__PURE__*/React.createElement("i", {
        className: "fas fa-map-marker-alt text-cyan-400 text-xs"
      }), " ", (_item$address = item.address) === null || _item$address === void 0 ? void 0 : _item$address.district)), /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-2.5 flex-shrink-0"
      }, item.exam.price && /*#__PURE__*/React.createElement("span", {
        className: "text-cyan-600 font-bold text-sm"
      }, "S/ ", item.exam.price), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return removeFromCart(item.exam.id);
        },
        className: "p-1 active:opacity-50"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-trash-alt text-gray-300 text-sm"
      }))));
    }), cart.length === 0 && /*#__PURE__*/React.createElement("div", {
      className: "text-center py-10 text-gray-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-shopping-cart text-3xl mb-2 block text-gray-300"
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-sm"
    }, "El carrito est\xE1 vac\xEDo"))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'white',
        boxShadow: '0 -4px 16px rgba(0,0,0,0.10)',
        borderTop: '1px solid #e5e7eb',
        position: 'relative',
        zIndex: 2
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "px-4 pt-3 pb-3 space-y-2.5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex gap-2"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setInvoiceType('boleta');
      },
      className: "flex-1 py-2 rounded-lg text-sm font-medium ".concat(invoiceType === 'boleta' ? 'bg-cyan-500 text-white' : 'bg-gray-100 text-gray-600')
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-receipt mr-1.5"
    }), "Boleta"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setInvoiceType('factura');
      },
      className: "flex-1 py-2 rounded-lg text-sm font-medium ".concat(invoiceType === 'factura' ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-600')
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-invoice mr-1.5"
    }), "Factura")), /*#__PURE__*/React.createElement("textarea", {
      value: orderComment,
      onChange: function onChange(e) {
        return setOrderComment(e.target.value);
      },
      placeholder: "Deja un comentario...",
      className: "w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 focus:border-cyan-500 focus:outline-none text-xs resize-none",
      rows: "2",
      maxLength: "500"
    }), cart.some(function (i) {
      return i.exam.price;
    }) && /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between py-2 border-t border-gray-100"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-sm text-gray-600 font-semibold"
    }, "Total estimado"), /*#__PURE__*/React.createElement("span", {
      className: "text-base font-bold text-cyan-600"
    }, "S/ ", cart.reduce(function (sum, i) {
      return sum + (parseFloat(i.exam.price) || 0);
    }, 0).toFixed(2))), /*#__PURE__*/React.createElement("div", {
      className: "border-t border-gray-100 pt-2 pb-1"
    }, /*#__PURE__*/React.createElement("label", {
      className: "flex items-start gap-2 cursor-pointer",
      onClick: function onClick(e) {
        return e.stopPropagation();
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: termsAccepted,
      onChange: function onChange(e) {
        return setTermsAccepted(e.target.checked);
      },
      className: "w-4 h-4 rounded border-gray-300 text-cyan-500 cursor-pointer flex-shrink-0 mt-0.5"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-xs text-gray-500 leading-relaxed"
    }, "He le\xEDdo y acepto los ", /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: function onClick(e) {
        e.preventDefault();
        e.stopPropagation();
        setShowTermsModal(true);
      },
      className: "text-cyan-600 font-semibold underline"
    }, "t\xE9rminos y condiciones"), " de entrega y procesamiento de muestras."))), /*#__PURE__*/React.createElement("button", {
      onClick: submitOrder,
      disabled: !termsAccepted,
      className: "w-full py-2.5 rounded-xl font-semibold text-sm ".concat(termsAccepted ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md' : 'bg-gray-200 text-gray-400 cursor-not-allowed')
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-paper-plane mr-2"
    }), "Solicitar Pedido")))), !showOrderSummary && !selectedExam && !viewingInvoice && !viewingOrderTracking && medicoView === 'inicio' && showAllPending && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        top: 'calc(56px + env(safe-area-inset-top,0px))',
        left: 0,
        right: 0,
        bottom: 'calc(64px + env(safe-area-inset-bottom,0px))',
        display: 'flex',
        flexDirection: 'column',
        background: '#f3f4f6',
        zIndex: 50
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'white',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        position: 'relative',
        zIndex: 2
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3 px-4 py-3"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowAllPending(false);
      },
      className: "w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 flex-shrink-0"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left text-sm"
    })), /*#__PURE__*/React.createElement("h2", {
      className: "font-bold text-gray-800 text-base"
    }, "Pendientes")), /*#__PURE__*/React.createElement("div", {
      className: "border-t border-gray-100 mx-0"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        padding: '12px 16px'
      }
    }, function () {
      var pendingInvoiceMap = {};
      (database.orders || []).filter(function (o) {
        return o.userId === freshUser.id && o.invoiceRequested && o.invoiceStatus === 'pending';
      }).forEach(function (o) {
        pendingInvoiceMap[o.id] = o;
      });
      // Build interleaved: each pending order → tracking card + its invoice if pending
      var items = [];
      var usedInvoiceIds = new Set();
      pendingOrders.forEach(function (order) {
        items.push({
          type: 'tracking',
          order: order
        });
        if (pendingInvoiceMap[order.id]) {
          items.push({
            type: 'invoice',
            order: pendingInvoiceMap[order.id]
          });
          usedInvoiceIds.add(order.id);
        }
      });
      // Invoices from completed orders not linked to a pending tracking order
      Object.values(pendingInvoiceMap).forEach(function (o) {
        if (!usedInvoiceIds.has(o.id)) items.push({
          type: 'invoice',
          order: o
        });
      });
      if (items.length === 0) return /*#__PURE__*/React.createElement("div", {
        className: "text-center py-12 text-gray-400"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-check-circle text-3xl mb-2 block text-gray-300"
      }), /*#__PURE__*/React.createElement("p", {
        className: "text-sm"
      }, "No hay pendientes"));
      return /*#__PURE__*/React.createElement("div", {
        className: "space-y-2"
      }, items.map(function (item, idx) {
        var _order$items$3, _order$items$4;
        var order = item.order;
        if (item.type === 'invoice') return /*#__PURE__*/React.createElement("div", {
          key: "inv-".concat(order.id, "-").concat(idx),
          className: "bg-white rounded-xl p-3 shadow-sm flex items-center justify-between"
        }, /*#__PURE__*/React.createElement("div", {
          className: "flex items-center gap-2.5"
        }, /*#__PURE__*/React.createElement("div", {
          className: "w-9 h-9 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas ".concat(order.documentType === 'boleta' ? 'fa-receipt' : 'fa-file-invoice-dollar', " text-amber-600")
        })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
          className: "text-sm font-semibold text-gray-800 leading-tight"
        }, order.documentType === 'boleta' ? 'Boleta' : 'Factura', " solicitada"), /*#__PURE__*/React.createElement("p", {
          className: "text-xs text-gray-500"
        }, order.items.map(function (i) {
          return getPetFullName(i.pet);
        }).join(', ')))), /*#__PURE__*/React.createElement("span", {
          className: "bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full text-xs font-medium flex-shrink-0"
        }, "Pendiente"));
        return /*#__PURE__*/React.createElement("div", {
          key: "tr-".concat(order.id),
          onClick: function onClick() {
            setViewingOrderTracking(order);
            setShowAllPending(false);
          },
          className: "bg-white rounded-xl p-3 shadow-sm cursor-pointer active:opacity-75"
        }, /*#__PURE__*/React.createElement("div", {
          className: "flex items-center gap-2.5"
        }, /*#__PURE__*/React.createElement("div", {
          className: "w-9 h-9 flex items-center justify-center flex-shrink-0 text-2xl leading-none"
        }, (_order$items$3 = order.items[0]) === null || _order$items$3 === void 0 ? void 0 : _order$items$3.pet.photo), /*#__PURE__*/React.createElement("div", {
          className: "flex-1 min-w-0"
        }, /*#__PURE__*/React.createElement("p", {
          className: "font-semibold text-gray-800 text-sm leading-tight truncate"
        }, order.items.map(function (i) {
          return getPetFullName(i.pet);
        }).join(', ')), /*#__PURE__*/React.createElement("p", {
          className: "text-xs text-gray-500 truncate"
        }, (_order$items$4 = order.items[0]) === null || _order$items$4 === void 0 ? void 0 : _order$items$4.exam.name)), /*#__PURE__*/React.createElement("div", {
          className: "w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ".concat(order.status === 'moto_arrived' || order.status === 'results_uploaded' ? 'bg-red-500' : 'bg-cyan-500')
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas fa-route text-white text-sm"
        }))), order.status === 'moto_arrived' && /*#__PURE__*/React.createElement("div", {
          className: "mt-2 bg-red-50 border border-red-300 rounded-lg p-1.5 flex items-center gap-2 animate-pulse"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas fa-map-marker-alt text-red-600 text-xs"
        }), /*#__PURE__*/React.createElement("p", {
          className: "text-red-800 font-medium text-xs"
        }, "\xA1El motorizado lleg\xF3! Entrega la muestra")), order.status === 'results_uploaded' && /*#__PURE__*/React.createElement("div", {
          className: "mt-2 bg-red-50 border border-red-300 rounded-lg p-1.5 flex items-center gap-2 animate-pulse"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas fa-credit-card text-red-600 text-xs"
        }), /*#__PURE__*/React.createElement("p", {
          className: "text-red-800 font-medium text-xs"
        }, "\xA1Resultados listos! Pendiente de pago")));
      }));
    }())), !showOrderSummary && !selectedExam && !viewingInvoice && !viewingOrderTracking && medicoView === 'inicio' && /*#__PURE__*/React.createElement("div", {
      style: {
        height: 'calc(100dvh - 56px - 64px - 40px)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: '8px',
        paddingTop: '8px'
      }
    }, /*#__PURE__*/React.createElement("h1", {
      className: "text-lg font-bold text-gray-800"
    }, "\xA1Hola, ", freshUser.name, "! \uD83D\uDC4B"), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500 text-sm mt-0.5"
    }, "Bienvenido a tu portal de laboratorio.")), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minHeight: '8px',
        maxHeight: '16px'
      }
    }), function () {
      var pendingInvoices = completedOrders.filter(function (o) {
        return o.invoiceRequested && o.invoiceStatus === 'pending';
      });
      var totalPending = pendingOrders.length + pendingInvoices.length;
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-2 mb-2.5"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-clock text-amber-500 text-xs"
      }), /*#__PURE__*/React.createElement("span", {
        className: "text-xs font-bold text-gray-400 uppercase tracking-widest"
      }, "Pendientes"), totalPending > 0 && /*#__PURE__*/React.createElement("span", {
        className: "bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full text-xs font-bold"
      }, totalPending)), totalPending === 0 ? /*#__PURE__*/React.createElement("div", {
        className: "bg-gray-100 rounded-xl p-3 text-center"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-gray-500 text-sm"
      }, "No existen pendientes")) : /*#__PURE__*/React.createElement("div", {
        className: "space-y-2"
      }, function () {
        var pendingInvoiceMap = {};
        (database.orders || []).filter(function (o) {
          return o.userId === freshUser.id && o.invoiceRequested && o.invoiceStatus === 'pending';
        }).forEach(function (o) {
          pendingInvoiceMap[o.id] = o;
        });
        var items = [];
        var usedIds = new Set();
        pendingOrders.forEach(function (order) {
          items.push({
            type: 'tracking',
            order: order
          });
          if (pendingInvoiceMap[order.id]) {
            items.push({
              type: 'invoice',
              order: pendingInvoiceMap[order.id]
            });
            usedIds.add(order.id);
          }
        });
        Object.values(pendingInvoiceMap).forEach(function (o) {
          if (!usedIds.has(o.id)) items.push({
            type: 'invoice',
            order: o
          });
        });
        return items.slice(0, 2).map(function (item, idx) {
          var _order$items$5, _order$items$6;
          var order = item.order;
          if (item.type === 'invoice') return /*#__PURE__*/React.createElement("div", {
            key: "inv-".concat(order.id, "-").concat(idx),
            className: "bg-white rounded-xl p-3 shadow-sm flex items-center justify-between"
          }, /*#__PURE__*/React.createElement("div", {
            className: "flex items-center gap-2.5"
          }, /*#__PURE__*/React.createElement("div", {
            className: "w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0"
          }, /*#__PURE__*/React.createElement("i", {
            className: "fas ".concat(order.documentType === 'boleta' ? 'fa-receipt' : 'fa-file-invoice-dollar', " text-amber-600 text-sm")
          })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
            className: "text-sm font-semibold text-gray-800 leading-tight"
          }, order.documentType === 'boleta' ? 'Boleta' : 'Factura', " solicitada"), /*#__PURE__*/React.createElement("p", {
            className: "text-xs text-gray-500"
          }, order.items.map(function (i) {
            return getPetFullName(i.pet);
          }).join(', ')))), /*#__PURE__*/React.createElement("span", {
            className: "bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full text-xs font-medium flex-shrink-0"
          }, "Pendiente"));
          return /*#__PURE__*/React.createElement("div", {
            key: "tr-".concat(order.id),
            onClick: function onClick() {
              return setViewingOrderTracking(order);
            },
            className: "bg-white rounded-xl p-3 shadow-sm cursor-pointer active:opacity-75"
          }, /*#__PURE__*/React.createElement("div", {
            className: "flex items-center gap-2.5"
          }, /*#__PURE__*/React.createElement("div", {
            className: "w-8 h-8 flex items-center justify-center flex-shrink-0 text-2xl leading-none"
          }, (_order$items$5 = order.items[0]) === null || _order$items$5 === void 0 ? void 0 : _order$items$5.pet.photo), /*#__PURE__*/React.createElement("div", {
            className: "flex-1 min-w-0"
          }, /*#__PURE__*/React.createElement("p", {
            className: "font-semibold text-gray-800 text-sm leading-tight truncate"
          }, order.items.map(function (i) {
            return getPetFullName(i.pet);
          }).join(', ')), /*#__PURE__*/React.createElement("p", {
            className: "text-xs text-gray-500 truncate"
          }, (_order$items$6 = order.items[0]) === null || _order$items$6 === void 0 ? void 0 : _order$items$6.exam.name)), /*#__PURE__*/React.createElement("div", {
            className: "w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ".concat(order.status === 'moto_arrived' || order.status === 'results_uploaded' ? 'bg-red-500' : 'bg-cyan-500')
          }, /*#__PURE__*/React.createElement("i", {
            className: "fas fa-route text-white text-sm"
          }))), order.status === 'moto_arrived' && /*#__PURE__*/React.createElement("div", {
            className: "mt-2 bg-red-50 border border-red-300 rounded-lg p-1.5 flex items-center gap-2 animate-pulse"
          }, /*#__PURE__*/React.createElement("i", {
            className: "fas fa-map-marker-alt text-red-600 text-xs"
          }), /*#__PURE__*/React.createElement("p", {
            className: "text-red-800 font-medium text-xs"
          }, "\xA1El motorizado lleg\xF3! Entrega la muestra")), order.status === 'results_uploaded' && /*#__PURE__*/React.createElement("div", {
            className: "mt-2 bg-red-50 border border-red-300 rounded-lg p-1.5 flex items-center gap-2 animate-pulse"
          }, /*#__PURE__*/React.createElement("i", {
            className: "fas fa-credit-card text-red-600 text-xs"
          }), /*#__PURE__*/React.createElement("p", {
            className: "text-red-800 font-medium text-xs"
          }, "\xA1Resultados listos! Pendiente de pago")));
        });
      }(), totalPending > 2 && /*#__PURE__*/React.createElement("div", {
        className: "flex justify-end"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return setShowAllPending(true);
        },
        className: "text-cyan-500 text-base font-semibold pt-1 pb-0.5 flex items-center gap-1"
      }, "Ver todos ", /*#__PURE__*/React.createElement("i", {
        className: "fas fa-chevron-right text-sm"
      })))));
    }(), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minHeight: '16px',
        maxHeight: '32px'
      }
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 mb-2.5"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-medical text-purple-500 text-xs"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-xs font-bold text-gray-400 uppercase tracking-widest"
    }, "\xDAltimo resultado"), newResultHighlight && /*#__PURE__*/React.createElement("span", {
      className: "bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full animate-pulse"
    }, "\xA1NUEVO!")), completedOrders.length === 0 ? /*#__PURE__*/React.createElement("div", {
      className: "bg-gray-100 rounded-xl p-4 text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500 text-sm"
    }, "No hay resultados a\xFAn")) : function (_petsOrPatients$find) {
      var lastOrder = completedOrders[0];
      var lastItem = lastOrder.items[0];
      var petExams = ((_petsOrPatients$find = petsOrPatients.find(function (p) {
        return p.id === lastItem.pet.id;
      })) === null || _petsOrPatients$find === void 0 ? void 0 : _petsOrPatients$find.exams) || [];
      var relatedExam = petExams.find(function (e) {
        return e.orderId === lastOrder.id;
      });
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        onClick: function onClick() {
          return (relatedExam === null || relatedExam === void 0 ? void 0 : relatedExam.pdfData) && markExamAsSeen(relatedExam, petsOrPatients.find(function (p) {
            return p.id === lastItem.pet.id;
          }));
        },
        className: "bg-white rounded-xl p-4 shadow-sm ".concat(relatedExam !== null && relatedExam !== void 0 && relatedExam.pdfData ? 'cursor-pointer' : '', " ").concat(newResultHighlight ? 'highlight-green-pulse' : '')
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center justify-between"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-2xl leading-none"
      }, lastItem.pet.photo), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
        className: "font-semibold text-gray-800 text-sm"
      }, getPetFullName(lastItem.pet)), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-500"
      }, lastItem.exam.name), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-400"
      }, new Date(lastOrder.completedAt || lastOrder.date).toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })))), (relatedExam === null || relatedExam === void 0 ? void 0 : relatedExam.pdfData) && /*#__PURE__*/React.createElement("div", {
        className: "px-3 py-2 rounded-xl ".concat(newResultHighlight ? 'bg-emerald-100 text-emerald-700' : 'bg-purple-100 text-purple-700')
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-file-pdf text-base"
      })))), /*#__PURE__*/React.createElement("div", {
        className: "flex justify-end"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return setMedicoView('resultados');
        },
        className: "text-cyan-500 text-base font-semibold pt-1 pb-0.5 mt-1 flex items-center gap-1"
      }, "Ver todos ", /*#__PURE__*/React.createElement("i", {
        className: "fas fa-chevron-right text-sm"
      }))));
    }()), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minHeight: '16px',
        maxHeight: '32px'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: '8px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 mb-2.5"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-invoice-dollar text-amber-500 text-xs"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-xs font-bold text-gray-400 uppercase tracking-widest"
    }, "\xDAltimo comprobante"), newInvoiceHighlight && /*#__PURE__*/React.createElement("span", {
      className: "bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full animate-pulse"
    }, "\xA1NUEVO!")), function () {
      var comprobantesEmitidos = completedOrders.filter(function (o) {
        return o.invoiceStatus === 'uploaded' && o.invoicePdf;
      });
      if (comprobantesEmitidos.length === 0) {
        return /*#__PURE__*/React.createElement("div", {
          className: "bg-gray-100 rounded-xl p-4 text-center"
        }, /*#__PURE__*/React.createElement("p", {
          className: "text-gray-500 text-sm"
        }, "No hay comprobantes emitidos"));
      }
      var lastComprobante = comprobantesEmitidos[0];
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        onClick: function onClick() {
          return setViewingInvoice(lastComprobante);
        },
        className: "bg-white rounded-xl p-4 shadow-sm cursor-pointer ".concat(newInvoiceHighlight ? 'highlight-green-pulse' : '')
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center justify-between"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ".concat(newInvoiceHighlight ? 'bg-emerald-100' : lastComprobante.documentType === 'boleta' ? 'bg-cyan-100' : 'bg-amber-100')
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas ".concat(lastComprobante.documentType === 'boleta' ? 'fa-receipt' : 'fa-file-invoice-dollar', " ").concat(newInvoiceHighlight ? 'text-emerald-600' : lastComprobante.documentType === 'boleta' ? 'text-cyan-600' : 'text-amber-600')
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
        className: "font-semibold text-gray-800 text-sm"
      }, lastComprobante.documentType === 'boleta' ? 'Boleta' : 'Factura'), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-500"
      }, lastComprobante.items.map(function (i) {
        return getPetFullName(i.pet);
      }).join(', ')), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-400"
      }, new Date(lastComprobante.completedAt || lastComprobante.date).toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })))), /*#__PURE__*/React.createElement("div", {
        className: "px-3 py-2 rounded-xl ".concat(newInvoiceHighlight ? 'bg-emerald-100 text-emerald-700' : lastComprobante.documentType === 'boleta' ? 'bg-cyan-100 text-cyan-700' : 'bg-amber-100 text-amber-700')
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-eye text-base"
      })))), /*#__PURE__*/React.createElement("div", {
        className: "flex justify-end"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return setMedicoView('facturacion');
        },
        className: "text-cyan-500 text-base font-semibold pt-1 pb-0.5 mt-1 flex items-center gap-1"
      }, "Ver todos ", /*#__PURE__*/React.createElement("i", {
        className: "fas fa-chevron-right text-sm"
      }))));
    }())), !showOrderSummary && !selectedExam && !viewingInvoice && !currentExamForPet && !viewingOrderTracking && medicoView === 'pedidos' && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "relative mb-4"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
    }), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: searchTerm,
      onChange: function onChange(e) {
        return setSearchTerm(e.target.value);
      },
      placeholder: "Buscar examen o perfil...",
      className: "w-full pl-11 pr-10 py-3.5 rounded-2xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none bg-white shadow-sm"
    }), searchTerm && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setSearchTerm('');
      },
      className: "absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-times"
    }))), (cart.length > 0 || pendingExams.length > 0) && /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-4 mb-4 text-xs text-gray-500"
    }, /*#__PURE__*/React.createElement("span", {
      className: "flex items-center gap-1"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-3 h-3 bg-emerald-500 rounded-full"
    }), " Listo"), /*#__PURE__*/React.createElement("span", {
      className: "flex items-center gap-1"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-3 h-3 bg-amber-400 rounded-full"
    }), " Pendiente"), /*#__PURE__*/React.createElement("span", {
      className: "text-gray-400"
    }, "\u2022 Toca para deseleccionar")), !hayResultados ? /*#__PURE__*/React.createElement("div", {
      className: "text-center py-16"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-search text-5xl text-gray-300 mb-4"
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500 text-lg font-medium"
    }, "No encontramos resultados"), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-400 text-sm mt-1"
    }, "Intenta con otro t\xE9rmino")) : /*#__PURE__*/React.createElement("div", {
      className: "space-y-6"
    }, filteredPerfiles.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      className: "text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-boxes-stacked text-blue-500"
    }), " Perfiles (Paquetes)"), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 sm:grid-cols-2 gap-2"
    }, filteredPerfiles.map(function (exam) {
      var isInCart = cart.find(function (c) {
        return c.exam.id === exam.id;
      });
      var isPending = pendingExams.find(function (e) {
        return e.id === exam.id;
      });
      return /*#__PURE__*/React.createElement("div", {
        key: exam.id,
        onClick: function onClick() {
          return handleExamClick(exam);
        },
        className: "bg-white rounded-2xl p-3 cursor-pointer hover:shadow-lg transition-all shadow border-2 ".concat(isInCart ? 'border-emerald-500 bg-emerald-50' : isPending ? 'border-amber-400 bg-amber-50' : 'border-transparent hover:border-cyan-300', " flex items-center gap-3")
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-11 h-11 ".concat(exam.bg, " rounded-xl flex items-center justify-center flex-shrink-0")
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas ".concat(exam.icon, " ").concat(exam.color, " text-lg")
      })), /*#__PURE__*/React.createElement("div", {
        className: "flex-1 min-w-0"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-gray-800 font-semibold text-sm leading-tight"
      }, exam.name), /*#__PURE__*/React.createElement("p", {
        className: "text-gray-500 text-xs truncate"
      }, exam.subtitle)), exam.price && /*#__PURE__*/React.createElement("span", {
        className: "text-cyan-600 font-bold text-sm flex-shrink-0"
      }, "S/ ", exam.price));
    }))), filteredCategorias.map(function (cat) {
      return /*#__PURE__*/React.createElement("div", {
        key: cat.nombre
      }, /*#__PURE__*/React.createElement("h3", {
        className: "text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas ".concat(cat.icon, " ").concat(cat.color)
      }), " ", cat.nombre), /*#__PURE__*/React.createElement("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 gap-2"
      }, cat.examenes.map(function (exam) {
        var isInCart = cart.find(function (c) {
          return c.exam.id === exam.id;
        });
        var isPending = pendingExams.find(function (e) {
          return e.id === exam.id;
        });
        return /*#__PURE__*/React.createElement("div", {
          key: exam.id,
          onClick: function onClick() {
            return handleExamClick(exam);
          },
          className: "bg-white rounded-2xl p-3 cursor-pointer hover:shadow-lg transition-all shadow border-2 ".concat(isInCart ? 'border-emerald-500 bg-emerald-50' : isPending ? 'border-amber-400 bg-amber-50' : 'border-transparent hover:border-cyan-300', " flex items-center gap-3")
        }, /*#__PURE__*/React.createElement("div", {
          className: "w-10 h-10 ".concat(exam.bg, " rounded-xl flex items-center justify-center flex-shrink-0")
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas ".concat(exam.icon, " ").concat(exam.color, " text-base")
        })), /*#__PURE__*/React.createElement("div", {
          className: "flex-1 min-w-0"
        }, /*#__PURE__*/React.createElement("p", {
          className: "text-gray-800 font-medium text-sm leading-tight"
        }, exam.name), exam.subtitle && /*#__PURE__*/React.createElement("p", {
          className: "text-gray-400 text-xs"
        }, exam.subtitle, exam.turnaround ? " \xB7 ".concat(exam.turnaround) : "")), exam.price && /*#__PURE__*/React.createElement("span", {
          className: "text-cyan-600 font-bold text-sm flex-shrink-0"
        }, "S/ ", exam.price));
      })));
    }))), !showOrderSummary && !selectedExam && !viewingInvoice && !viewingOrderTracking && medicoView === 'mascotas' && !selectedMascota && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "filters-panel"
    }, /*#__PURE__*/React.createElement("div", {
      className: "filters-panel-inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl px-3 py-2 flex items-center gap-2 mb-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-paw text-white text-sm"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-white font-semibold text-sm"
    }, "Pacientes"), /*#__PURE__*/React.createElement("span", {
      className: "bg-white/20 text-white text-xs px-2 py-0.5 rounded-full ml-auto"
    }, petsOrPatients.length)), /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
    }), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: mascotaSearchTerm,
      onChange: function onChange(e) {
        return setMascotaSearchTerm(e.target.value);
      },
      placeholder: "Buscar mascota o due\xF1o...",
      className: "w-full pl-9 pr-8 py-2 rounded-lg border border-gray-200 focus:border-emerald-500 focus:outline-none bg-gray-50 text-sm"
    }), mascotaSearchTerm && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setMascotaSearchTerm('');
      },
      className: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-times text-xs"
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "list-spacer-small"
    }), filteredMascotas.length === 0 ? /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl p-10 text-center shadow"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-paw text-4xl text-gray-300 mb-2"
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500"
    }, "No se encontraron pacientes")) : /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 sm:grid-cols-2 gap-2"
    }, filteredMascotas.map(function (pet) {
      return /*#__PURE__*/React.createElement("div", {
        key: pet.id,
        onClick: function onClick() {
          setSelectedMascota(pet);
          setExamSearchTerm('');
          setExamFilterType('');
          setExamFilterDay('');
          setExamFilterMonth('');
          setExamFilterYear('');
        },
        className: "bg-white rounded-xl px-3 py-2.5 shadow-sm cursor-pointer hover:shadow-md border-2 border-transparent hover:border-emerald-400 transition-all flex items-center gap-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-2xl leading-none"
      }, pet.photo), /*#__PURE__*/React.createElement("div", {
        className: "flex-1 min-w-0"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-sm font-semibold text-gray-800 leading-tight truncate"
      }, getPetFullName(pet)), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-400 truncate"
      }, pet.breed, pet.owner ? " \xB7 ".concat(pet.owner) : '')), /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-1.5 flex-shrink-0"
      }, countUnseenExamsForPet(pet) > 0 && /*#__PURE__*/React.createElement("div", {
        className: "w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center text-white font-bold"
      }, countUnseenExamsForPet(pet)), /*#__PURE__*/React.createElement("div", {
        className: "bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full text-xs font-semibold"
      }, pet.exams.length)));
    }))), !showOrderSummary && !selectedExam && !viewingInvoice && !viewingOrderTracking && medicoView === 'mascotas' && selectedMascota && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "filters-panel"
    }, /*#__PURE__*/React.createElement("div", {
      className: "filters-panel-inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl px-3 py-2 flex items-center gap-2 mb-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-xl"
    }, selectedMascota.photo), /*#__PURE__*/React.createElement("div", {
      className: "flex-1"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-white font-semibold text-sm"
    }, getPetFullName(selectedMascota)), /*#__PURE__*/React.createElement("span", {
      className: "text-white/70 text-xs ml-2"
    }, selectedMascota.breed), selectedMascota.owner && /*#__PURE__*/React.createElement("span", {
      className: "text-white/70 text-xs ml-2"
    }, "\u2022 ", selectedMascota.owner)), /*#__PURE__*/React.createElement("span", {
      className: "bg-white/20 text-white text-xs px-2 py-0.5 rounded-full"
    }, selectedMascota.exams.length, " ex\xE1m.")), /*#__PURE__*/React.createElement("div", {
      className: "relative mb-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
    }), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: examSearchTerm,
      onChange: function onChange(e) {
        return setExamSearchTerm(e.target.value);
      },
      placeholder: "Buscar examen...",
      className: "w-full pl-9 pr-8 py-2 rounded-lg border border-gray-200 focus:border-emerald-500 focus:outline-none bg-gray-50 text-sm"
    })), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-4 gap-2"
    }, /*#__PURE__*/React.createElement("select", {
      value: examFilterType,
      onChange: function onChange(e) {
        return setExamFilterType(e.target.value);
      },
      className: "p-1.5 rounded-lg bg-gray-50 border border-gray-200 text-xs"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Tipo"), _toConsumableArray(new Set(selectedMascota.exams.map(function (e) {
      return e.type;
    }))).map(function (type) {
      return /*#__PURE__*/React.createElement("option", {
        key: type,
        value: type
      }, type);
    })), /*#__PURE__*/React.createElement("select", {
      value: examFilterDay,
      onChange: function onChange(e) {
        return setExamFilterDay(e.target.value);
      },
      className: "p-1.5 rounded-lg bg-gray-50 border border-gray-200 text-xs"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "D\xEDa"), Array.from({
      length: 31
    }, function (_, i) {
      return String(i + 1).padStart(2, '0');
    }).map(function (d) {
      return /*#__PURE__*/React.createElement("option", {
        key: d,
        value: d
      }, d);
    })), /*#__PURE__*/React.createElement("select", {
      value: examFilterMonth,
      onChange: function onChange(e) {
        return setExamFilterMonth(e.target.value);
      },
      className: "p-1.5 rounded-lg bg-gray-50 border border-gray-200 text-xs"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Mes"), ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'].map(function (m, i) {
      return /*#__PURE__*/React.createElement("option", {
        key: i,
        value: String(i + 1).padStart(2, '0')
      }, m);
    })), /*#__PURE__*/React.createElement("select", {
      value: examFilterYear,
      onChange: function onChange(e) {
        return setExamFilterYear(e.target.value);
      },
      className: "p-1.5 rounded-lg bg-gray-50 border border-gray-200 text-xs"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "A\xF1o"), Array.from({
      length: 5
    }, function (_, i) {
      return String(new Date().getFullYear() - i);
    }).map(function (y) {
      return /*#__PURE__*/React.createElement("option", {
        key: y,
        value: y
      }, y);
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "list-spacer-medium"
    }), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between mb-3"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-base font-bold text-gray-800"
    }, "Historial de Ex\xE1menes"), /*#__PURE__*/React.createElement("span", {
      className: "text-sm text-gray-500"
    }, filterExams(selectedMascota.exams).length, " resultados")), filterExams(selectedMascota.exams).length === 0 ? /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl p-10 text-center shadow"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-folder-open text-4xl text-gray-300 mb-2"
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500"
    }, "No hay ex\xE1menes con estos filtros")) : /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, filterExams(selectedMascota.exams).map(function (exam) {
      return /*#__PURE__*/React.createElement("div", {
        key: exam.id,
        onClick: function onClick() {
          return markExamAsSeen(exam, selectedMascota);
        },
        className: "bg-white rounded-xl p-4 shadow cursor-pointer hover:shadow-lg flex items-center justify-between ".concat(exam.seen === false ? 'border-l-4 border-red-500' : '')
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-10 h-10 rounded-xl flex items-center justify-center ".concat(exam.seen === false ? 'bg-red-100' : 'bg-emerald-100')
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-file-pdf ".concat(exam.seen === false ? 'text-red-600' : 'text-emerald-600')
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
        className: "font-semibold text-gray-800"
      }, exam.type), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-500"
      }, new Date(exam.date).toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }))), exam.seen === false && /*#__PURE__*/React.createElement("span", {
        className: "bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-bold ml-2"
      }, "NUEVO")), /*#__PURE__*/React.createElement("i", {
        className: "fas fa-chevron-right text-gray-400"
      }));
    })), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setSelectedMascota(null);
      },
      className: "mt-6 w-full py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-medium hover:bg-gray-50"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left mr-2"
    }), "Volver a pacientes")), !showOrderSummary && !selectedExam && !viewingInvoice && !viewingOrderTracking && medicoView === 'resultados' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "filters-panel"
    }, /*#__PURE__*/React.createElement("div", {
      className: "filters-panel-inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl px-3 py-2 flex items-center gap-2 mb-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-medical text-white text-sm"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-white font-semibold text-sm"
    }, "Resultados"), /*#__PURE__*/React.createElement("span", {
      className: "bg-white/20 text-white text-xs px-2 py-0.5 rounded-full ml-auto"
    }, completedOrders.length)), /*#__PURE__*/React.createElement("div", {
      className: "relative mb-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
    }), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: resultadosSearch,
      onChange: function onChange(e) {
        return setResultadosSearch(e.target.value);
      },
      placeholder: "Buscar mascota...",
      className: "w-full pl-9 pr-8 py-2 rounded-lg border border-gray-200 focus:border-purple-500 focus:outline-none bg-gray-50 text-sm"
    }), resultadosSearch && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setResultadosSearch('');
      },
      className: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-times text-xs"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-3 gap-2"
    }, /*#__PURE__*/React.createElement("select", {
      value: resultadosFilterDay,
      onChange: function onChange(e) {
        return setResultadosFilterDay(e.target.value);
      },
      className: "p-1.5 rounded-lg bg-gray-50 border border-gray-200 text-xs"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "D\xEDa"), _toConsumableArray(Array(31)).map(function (_, i) {
      return /*#__PURE__*/React.createElement("option", {
        key: i + 1,
        value: String(i + 1).padStart(2, '0')
      }, i + 1);
    })), /*#__PURE__*/React.createElement("select", {
      value: resultadosFilterMonth,
      onChange: function onChange(e) {
        return setResultadosFilterMonth(e.target.value);
      },
      className: "p-1.5 rounded-lg bg-gray-50 border border-gray-200 text-xs"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Mes"), ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'].map(function (m, i) {
      return /*#__PURE__*/React.createElement("option", {
        key: i,
        value: String(i + 1).padStart(2, '0')
      }, m);
    })), /*#__PURE__*/React.createElement("select", {
      value: resultadosFilterYear,
      onChange: function onChange(e) {
        return setResultadosFilterYear(e.target.value);
      },
      className: "p-1.5 rounded-lg bg-gray-50 border border-gray-200 text-xs"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "A\xF1o"), ['2026', '2025', '2024', '2023'].map(function (y) {
      return /*#__PURE__*/React.createElement("option", {
        key: y,
        value: y
      }, y);
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "list-spacer-medium"
    }), function () {
      var filteredCompletedOrders = completedOrders.filter(function (order) {
        if (resultadosSearch) {
          var matchesPet = order.items.some(function (item) {
            return item.pet.name.toLowerCase().includes(resultadosSearch.toLowerCase());
          });
          if (!matchesPet) return false;
        }
        var orderDate = new Date(order.completedAt || order.date);
        var orderDay = String(orderDate.getDate()).padStart(2, '0');
        var orderMonth = String(orderDate.getMonth() + 1).padStart(2, '0');
        var orderYear = String(orderDate.getFullYear());
        if (resultadosFilterDay && orderDay !== resultadosFilterDay) return false;
        if (resultadosFilterMonth && orderMonth !== resultadosFilterMonth) return false;
        if (resultadosFilterYear && orderYear !== resultadosFilterYear) return false;
        return true;
      });
      return /*#__PURE__*/React.createElement("div", null, filteredCompletedOrders.length === 0 ? /*#__PURE__*/React.createElement("div", {
        className: "bg-white rounded-xl p-8 text-center shadow"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-inbox text-4xl text-gray-300 mb-2"
      }), /*#__PURE__*/React.createElement("p", {
        className: "text-gray-500"
      }, completedOrders.length === 0 ? 'No hay pedidos completados' : 'No hay resultados con estos filtros')) : /*#__PURE__*/React.createElement("div", {
        className: "space-y-3"
      }, filteredCompletedOrders.map(function (order) {
        var _petsOrPatients$find2;
        var firstItem = order.items[0];
        var petExams = ((_petsOrPatients$find2 = petsOrPatients.find(function (p) {
          return p.id === (firstItem === null || firstItem === void 0 ? void 0 : firstItem.pet.id);
        })) === null || _petsOrPatients$find2 === void 0 ? void 0 : _petsOrPatients$find2.exams) || [];
        var relatedExam = petExams.find(function (e) {
          return e.orderId === order.id;
        });
        return /*#__PURE__*/React.createElement("div", {
          key: order.id,
          onClick: function onClick() {
            return relatedExam !== null && relatedExam !== void 0 && relatedExam.pdfData ? markExamAsSeen(relatedExam, petsOrPatients.find(function (p) {
              return p.id === firstItem.pet.id;
            })) : alert('Este resultado aún no está disponible');
          },
          className: "bg-white rounded-xl shadow p-4 cursor-pointer hover:shadow-lg hover:bg-purple-50 transition-all"
        }, /*#__PURE__*/React.createElement("div", {
          className: "flex items-center justify-between mb-3"
        }, /*#__PURE__*/React.createElement("span", {
          className: "text-xs text-gray-500"
        }, new Date(order.completedAt || order.date).toLocaleDateString('es-ES', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        })), /*#__PURE__*/React.createElement("div", {
          className: "w-8 h-8 rounded-lg flex items-center justify-center ".concat(relatedExam !== null && relatedExam !== void 0 && relatedExam.pdfData ? 'bg-purple-100 text-purple-600' : 'bg-gray-100 text-gray-400')
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas fa-eye text-sm"
        }))), /*#__PURE__*/React.createElement("div", {
          className: "space-y-2"
        }, order.items.map(function (item, idx) {
          return /*#__PURE__*/React.createElement("div", {
            key: idx,
            className: "flex items-center gap-2 text-sm"
          }, /*#__PURE__*/React.createElement("span", null, item.pet.photo), /*#__PURE__*/React.createElement("span", {
            className: "font-medium text-gray-800"
          }, getPetFullName(item.pet)), /*#__PURE__*/React.createElement("span", {
            className: "text-gray-300"
          }, "\u2022"), /*#__PURE__*/React.createElement("span", {
            className: "text-gray-600"
          }, item.exam.name));
        })));
      })));
    }()), !showOrderSummary && !selectedExam && !viewingInvoice && !viewingOrderTracking && medicoView === 'facturacion' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "filters-panel"
    }, /*#__PURE__*/React.createElement("div", {
      className: "filters-panel-inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl px-3 py-2 flex items-center gap-2 mb-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-invoice-dollar text-white text-sm"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-white font-semibold text-sm"
    }, "Facturaci\xF3n"), /*#__PURE__*/React.createElement("span", {
      className: "bg-white/20 text-white text-xs px-2 py-0.5 rounded-full ml-auto"
    }, completedOrders.filter(function (o) {
      return o.invoicePdf;
    }).length)), /*#__PURE__*/React.createElement("div", {
      className: "relative mb-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
    }), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: facturacionSearch,
      onChange: function onChange(e) {
        return setFacturacionSearch(e.target.value);
      },
      placeholder: "Buscar mascota...",
      className: "w-full pl-9 pr-8 py-2 rounded-lg border border-gray-200 focus:border-amber-500 focus:outline-none bg-gray-50 text-sm"
    }), facturacionSearch && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setFacturacionSearch('');
      },
      className: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-times text-xs"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-3 gap-2"
    }, /*#__PURE__*/React.createElement("select", {
      value: facturacionFilterDay,
      onChange: function onChange(e) {
        return setFacturacionFilterDay(e.target.value);
      },
      className: "p-1.5 rounded-lg bg-gray-50 border border-gray-200 text-xs"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "D\xEDa"), _toConsumableArray(Array(31)).map(function (_, i) {
      return /*#__PURE__*/React.createElement("option", {
        key: i + 1,
        value: String(i + 1).padStart(2, '0')
      }, i + 1);
    })), /*#__PURE__*/React.createElement("select", {
      value: facturacionFilterMonth,
      onChange: function onChange(e) {
        return setFacturacionFilterMonth(e.target.value);
      },
      className: "p-1.5 rounded-lg bg-gray-50 border border-gray-200 text-xs"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Mes"), ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'].map(function (m, i) {
      return /*#__PURE__*/React.createElement("option", {
        key: i,
        value: String(i + 1).padStart(2, '0')
      }, m);
    })), /*#__PURE__*/React.createElement("select", {
      value: facturacionFilterYear,
      onChange: function onChange(e) {
        return setFacturacionFilterYear(e.target.value);
      },
      className: "p-1.5 rounded-lg bg-gray-50 border border-gray-200 text-xs"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "A\xF1o"), ['2026', '2025', '2024', '2023'].map(function (y) {
      return /*#__PURE__*/React.createElement("option", {
        key: y,
        value: y
      }, y);
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "list-spacer-medium"
    }), function () {
      var pendingInvoices = completedOrders.filter(function (o) {
        return o.invoiceRequested && o.invoiceStatus === 'pending';
      });
      if (pendingInvoices.length === 0) return null;
      return /*#__PURE__*/React.createElement("div", {
        className: "mb-4"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-xs font-semibold text-red-600 mb-2 flex items-center gap-1"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-clock"
      }), " Pendientes (", pendingInvoices.length, ")"), /*#__PURE__*/React.createElement("div", {
        className: "space-y-3"
      }, pendingInvoices.map(function (order) {
        return /*#__PURE__*/React.createElement("div", {
          key: "pending-".concat(order.id),
          className: "bg-white rounded-xl shadow p-4 border-l-4 border-red-400"
        }, /*#__PURE__*/React.createElement("div", {
          className: "flex items-center justify-between mb-3"
        }, /*#__PURE__*/React.createElement("div", {
          className: "flex items-center gap-3"
        }, /*#__PURE__*/React.createElement("div", {
          className: "w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas ".concat(order.documentType === 'boleta' ? 'fa-receipt' : 'fa-file-invoice', " text-red-600")
        })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
          className: "font-semibold text-gray-800"
        }, order.documentType === 'boleta' ? 'Boleta' : 'Factura', " Solicitada"), /*#__PURE__*/React.createElement("p", {
          className: "text-xs text-gray-500"
        }, new Date(order.completedAt || order.date).toLocaleDateString('es-ES', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        })))), /*#__PURE__*/React.createElement("span", {
          className: "bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium"
        }, "Pendiente")), /*#__PURE__*/React.createElement("div", {
          className: "border-t pt-3 space-y-2"
        }, order.items.map(function (item, idx) {
          return /*#__PURE__*/React.createElement("div", {
            key: idx,
            className: "flex items-center gap-2 text-sm"
          }, /*#__PURE__*/React.createElement("span", null, item.pet.photo), /*#__PURE__*/React.createElement("span", {
            className: "font-medium text-gray-800"
          }, getPetFullName(item.pet)), /*#__PURE__*/React.createElement("span", {
            className: "text-gray-300"
          }, "\u2022"), /*#__PURE__*/React.createElement("span", {
            className: "text-gray-600"
          }, item.exam.name));
        })));
      })));
    }(), function () {
      // Filtrar comprobantes (solo los que tienen PDF subido)
      var filteredFacturas = completedOrders.filter(function (order) {
        // Solo mostrar los que tienen comprobante emitido
        if (order.invoiceRequested && order.invoiceStatus === 'pending') return false;

        // Filtro por nombre de mascota
        if (facturacionSearch) {
          var matchesPet = order.items.some(function (item) {
            return item.pet.name.toLowerCase().includes(facturacionSearch.toLowerCase());
          });
          if (!matchesPet) return false;
        }

        // Filtro por fecha
        var orderDate = new Date(order.completedAt || order.date);
        var orderDay = String(orderDate.getDate()).padStart(2, '0');
        var orderMonth = String(orderDate.getMonth() + 1).padStart(2, '0');
        var orderYear = String(orderDate.getFullYear());
        if (facturacionFilterDay && orderDay !== facturacionFilterDay) return false;
        if (facturacionFilterMonth && orderMonth !== facturacionFilterMonth) return false;
        if (facturacionFilterYear && orderYear !== facturacionFilterYear) return false;
        return true;
      });
      return /*#__PURE__*/React.createElement("div", null, filteredFacturas.length === 0 ? /*#__PURE__*/React.createElement("div", {
        className: "bg-white rounded-xl p-8 text-center shadow"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-receipt text-4xl text-gray-300 mb-2"
      }), /*#__PURE__*/React.createElement("p", {
        className: "text-gray-500"
      }, completedOrders.length === 0 ? 'No hay comprobantes emitidos' : 'No hay comprobantes con estos filtros')) : /*#__PURE__*/React.createElement("div", {
        className: "space-y-3"
      }, filteredFacturas.map(function (order, index) {
        return /*#__PURE__*/React.createElement("div", {
          key: order.id,
          onClick: function onClick() {
            return order.invoicePdf ? setViewingInvoice(order) : alert('Este comprobante aún no está disponible');
          },
          className: "bg-white rounded-xl shadow p-4 cursor-pointer hover:shadow-lg hover:bg-amber-50 transition-all"
        }, /*#__PURE__*/React.createElement("div", {
          className: "flex items-center justify-between mb-3"
        }, /*#__PURE__*/React.createElement("div", {
          className: "flex items-center gap-3"
        }, /*#__PURE__*/React.createElement("div", {
          className: "w-10 h-10 rounded-xl flex items-center justify-center ".concat(order.documentType === 'boleta' ? 'bg-cyan-100' : 'bg-amber-100')
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas ".concat(order.documentType === 'boleta' ? 'fa-receipt text-cyan-600' : 'fa-file-invoice text-amber-600')
        })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
          className: "font-semibold text-gray-800"
        }, order.documentType === 'boleta' ? 'Boleta' : 'Factura', " #", String(completedOrders.indexOf(order) + 1).padStart(4, '0')), /*#__PURE__*/React.createElement("p", {
          className: "text-xs text-gray-500"
        }, new Date(order.completedAt || order.date).toLocaleDateString('es-ES', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        })))), /*#__PURE__*/React.createElement("div", {
          className: "flex items-center gap-2"
        }, /*#__PURE__*/React.createElement("div", {
          className: "w-8 h-8 rounded-lg flex items-center justify-center ".concat(order.invoicePdf ? 'bg-amber-100 text-amber-600' : 'bg-gray-100 text-gray-400')
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas fa-eye text-sm"
        })), /*#__PURE__*/React.createElement("span", {
          className: "bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs font-medium"
        }, "Pagado"))), /*#__PURE__*/React.createElement("div", {
          className: "border-t pt-3 space-y-2"
        }, order.items.map(function (item, idx) {
          return /*#__PURE__*/React.createElement("div", {
            key: idx,
            className: "flex items-center gap-2 text-sm"
          }, /*#__PURE__*/React.createElement("span", null, item.pet.photo), /*#__PURE__*/React.createElement("span", {
            className: "font-medium text-gray-800"
          }, getPetFullName(item.pet)), /*#__PURE__*/React.createElement("span", {
            className: "text-gray-300"
          }, "\u2022"), /*#__PURE__*/React.createElement("span", {
            className: "text-gray-600"
          }, item.exam.name));
        })));
      })));
    }()))), /*#__PURE__*/React.createElement("div", {
      className: "mob-bottom-nav"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mob-bottom-nav-inner"
    }, /*#__PURE__*/React.createElement("button", {
      className: "mob-nav-btn ".concat(medicoView === 'inicio' && !currentExamForPet && !viewingOrderTracking ? 'active' : ''),
      onClick: function onClick() {
        setMedicoView('inicio');
        setSelectedMascota(null);
        setMenuOpen(false);
        setSelectedExam(null);
        setViewingInvoice(null);
        setCurrentExamForPet(null);
        setShowNewPetForm(false);
        setShowAddressSelection(false);
        setShowNewAddressForm(false);
        setSelectedPetForOrder(null);
        setShowEditProfile(false);
        setViewingOrderTracking(null);
        setShowOrderSummary(false);
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-home"
    }), /*#__PURE__*/React.createElement("span", null, "Inicio")), /*#__PURE__*/React.createElement("button", {
      className: "mob-nav-btn ".concat(medicoView === 'pedidos' && !currentExamForPet && !viewingOrderTracking ? 'active' : ''),
      onClick: function onClick() {
        setMedicoView('pedidos');
        setMenuOpen(false);
        setSelectedMascota(null);
        setSelectedExam(null);
        setViewingInvoice(null);
        setCurrentExamForPet(null);
        setShowNewPetForm(false);
        setShowAddressSelection(false);
        setShowNewAddressForm(false);
        setSelectedPetForOrder(null);
        setShowEditProfile(false);
        setViewingOrderTracking(null);
        setShowOrderSummary(false);
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-clipboard-list"
    }), /*#__PURE__*/React.createElement("span", null, "Pedidos")), /*#__PURE__*/React.createElement("button", {
      className: "mob-nav-btn ".concat(medicoView === 'mascotas' && !currentExamForPet ? 'active' : ''),
      onClick: function onClick() {
        setMedicoView('mascotas');
        setMenuOpen(false);
        setSelectedMascota(null);
        setSelectedExam(null);
        setViewingInvoice(null);
        setCurrentExamForPet(null);
        setShowNewPetForm(false);
        setShowAddressSelection(false);
        setShowNewAddressForm(false);
        setSelectedPetForOrder(null);
        setShowEditProfile(false);
        setViewingOrderTracking(null);
        setShowOrderSummary(false);
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-paw"
    }), /*#__PURE__*/React.createElement("span", null, "Pacientes")), /*#__PURE__*/React.createElement("button", {
      className: "mob-nav-btn ".concat(medicoView === 'resultados' && !currentExamForPet ? 'active' : ''),
      onClick: function onClick() {
        setMedicoView('resultados');
        setMenuOpen(false);
        setSelectedMascota(null);
        setSelectedExam(null);
        setViewingInvoice(null);
        setCurrentExamForPet(null);
        setShowNewPetForm(false);
        setShowAddressSelection(false);
        setShowNewAddressForm(false);
        setSelectedPetForOrder(null);
        setShowEditProfile(false);
        setViewingOrderTracking(null);
        setShowOrderSummary(false);
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-medical"
    }), /*#__PURE__*/React.createElement("span", null, "Resultados")), /*#__PURE__*/React.createElement("button", {
      className: "mob-nav-btn ".concat(medicoView === 'facturacion' && !currentExamForPet ? 'active' : ''),
      onClick: function onClick() {
        setMedicoView('facturacion');
        setMenuOpen(false);
        setSelectedMascota(null);
        setSelectedExam(null);
        setViewingInvoice(null);
        setCurrentExamForPet(null);
        setShowNewPetForm(false);
        setShowAddressSelection(false);
        setShowNewAddressForm(false);
        setSelectedPetForOrder(null);
        setShowEditProfile(false);
        setViewingOrderTracking(null);
        setShowOrderSummary(false);
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-invoice-dollar"
    }), /*#__PURE__*/React.createElement("span", null, "Facturas"))))), /*#__PURE__*/React.createElement("div", {
      className: "hidden md:block min-h-screen"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white border-b border-gray-200 px-6 py-3 fixed top-0 left-0 right-0 z-50"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 cursor-pointer ml-[-10px]",
      onClick: function onClick() {
        setMedicoView('inicio');
        setSelectedMascota(null);
        setSelectedExam(null);
        setViewingInvoice(null);
        setCurrentExamForPet(null);
        setPendingExams([]);
        setCart([]);
        setShowNewPetForm(false);
        setShowAddressSelection(false);
        setShowNewAddressForm(false);
        setSelectedPetForOrder(null);
        setShowEditProfile(false);
        setViewingOrderTracking(null);
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/logo_inulaboratorios.jpg",
      alt: "Logo",
      className: "h-8",
      onError: function onError(e) {
        e.target.style.display = 'none';
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-base font-light text-gray-700 tracking-wide"
    }, "INULABORATORIOS")), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-right"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm font-semibold text-gray-800"
    }, freshUser.name), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-500"
    }, "Cl\xEDnica")), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setMedicoView('configuracion');
      },
      className: "w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center text-gray-600 transition-colors"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-bars"
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "pt-16 flex"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-56 bg-white border-r border-gray-200 fixed left-0 top-16 bottom-0 flex flex-col"
    }, /*#__PURE__*/React.createElement("nav", {
      className: "flex-1 p-3 space-y-2"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setMedicoView('inicio');
        setSelectedMascota(null);
        setSelectedExam(null);
        setViewingInvoice(null);
        setCurrentExamForPet(null);
        setPendingExams([]);
        setCart([]);
        setShowNewPetForm(false);
        setShowAddressSelection(false);
        setShowNewAddressForm(false);
        setSelectedPetForOrder(null);
        setShowEditProfile(false);
        setViewingOrderTracking(null);
      },
      className: "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ".concat(medicoView === 'inicio' && !selectedExam && !viewingInvoice && !currentExamForPet ? 'bg-gradient-to-r from-cyan-400 to-cyan-500 text-white shadow-lg' : 'bg-gray-50 hover:bg-gray-100 text-gray-700')
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-8 h-8 rounded-lg flex items-center justify-center ".concat(medicoView === 'inicio' && !selectedExam && !viewingInvoice && !currentExamForPet ? 'bg-white/20' : 'bg-cyan-100')
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-home ".concat(medicoView === 'inicio' && !selectedExam && !viewingInvoice && !currentExamForPet ? 'text-white' : 'text-cyan-600')
    })), /*#__PURE__*/React.createElement("span", {
      className: "font-medium"
    }, "Inicio")), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setMedicoView('pedidos');
        setSelectedMascota(null);
        setSelectedExam(null);
        setViewingInvoice(null);
        setCurrentExamForPet(null);
        setPendingExams([]);
        setCart([]);
        setShowNewPetForm(false);
        setShowAddressSelection(false);
        setShowNewAddressForm(false);
        setSelectedPetForOrder(null);
        setShowEditProfile(false);
        setViewingOrderTracking(null);
      },
      className: "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ".concat(medicoView === 'pedidos' && !selectedExam && !viewingInvoice && !currentExamForPet ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg' : 'bg-gray-50 hover:bg-gray-100 text-gray-700')
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-8 h-8 rounded-lg flex items-center justify-center ".concat(medicoView === 'pedidos' && !selectedExam && !viewingInvoice && !currentExamForPet ? 'bg-white/20' : 'bg-blue-100')
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-clipboard-list ".concat(medicoView === 'pedidos' && !selectedExam && !viewingInvoice && !currentExamForPet ? 'text-white' : 'text-blue-600')
    })), /*#__PURE__*/React.createElement("span", {
      className: "font-medium"
    }, "Pedidos")), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setMedicoView('mascotas');
        setSelectedMascota(null);
        setSelectedExam(null);
        setViewingInvoice(null);
        setCurrentExamForPet(null);
        setPendingExams([]);
        setCart([]);
        setShowNewPetForm(false);
        setShowAddressSelection(false);
        setShowNewAddressForm(false);
        setSelectedPetForOrder(null);
        setShowEditProfile(false);
        setViewingOrderTracking(null);
      },
      className: "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ".concat(medicoView === 'mascotas' && !selectedExam && !viewingInvoice && !currentExamForPet ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg' : 'bg-gray-50 hover:bg-gray-100 text-gray-700')
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-8 h-8 rounded-lg flex items-center justify-center ".concat(medicoView === 'mascotas' && !selectedExam && !viewingInvoice && !currentExamForPet ? 'bg-white/20' : 'bg-emerald-100')
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-paw ".concat(medicoView === 'mascotas' && !selectedExam && !viewingInvoice && !currentExamForPet ? 'text-white' : 'text-emerald-600')
    })), /*#__PURE__*/React.createElement("span", {
      className: "font-medium"
    }, "Pacientes"), /*#__PURE__*/React.createElement("span", {
      className: "ml-auto text-xs px-2 py-0.5 rounded-full ".concat(medicoView === 'mascotas' && !selectedExam && !viewingInvoice && !currentExamForPet ? 'bg-white/20' : 'bg-emerald-100 text-emerald-600')
    }, petsOrPatients.length)), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setMedicoView('resultados');
        setSelectedMascota(null);
        setSelectedExam(null);
        setViewingInvoice(null);
        setCurrentExamForPet(null);
        setPendingExams([]);
        setCart([]);
        setShowNewPetForm(false);
        setShowAddressSelection(false);
        setShowNewAddressForm(false);
        setSelectedPetForOrder(null);
        setShowEditProfile(false);
        setViewingOrderTracking(null);
      },
      className: "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ".concat(medicoView === 'resultados' && !selectedExam && !viewingInvoice && !currentExamForPet ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg' : 'bg-gray-50 hover:bg-gray-100 text-gray-700')
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-8 h-8 rounded-lg flex items-center justify-center ".concat(medicoView === 'resultados' && !selectedExam && !viewingInvoice && !currentExamForPet ? 'bg-white/20' : 'bg-purple-100')
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-medical ".concat(medicoView === 'resultados' && !selectedExam && !viewingInvoice && !currentExamForPet ? 'text-white' : 'text-purple-600')
    })), /*#__PURE__*/React.createElement("span", {
      className: "font-medium"
    }, "Resultados"), completedOrders.length > 0 && /*#__PURE__*/React.createElement("span", {
      className: "ml-auto text-xs px-2 py-0.5 rounded-full ".concat(medicoView === 'resultados' && !selectedExam && !viewingInvoice && !currentExamForPet ? 'bg-white/20' : 'bg-purple-100 text-purple-600')
    }, completedOrders.length)), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setMedicoView('facturacion');
        setSelectedMascota(null);
        setSelectedExam(null);
        setViewingInvoice(null);
        setCurrentExamForPet(null);
        setPendingExams([]);
        setCart([]);
        setShowNewPetForm(false);
        setShowAddressSelection(false);
        setShowNewAddressForm(false);
        setSelectedPetForOrder(null);
        setShowEditProfile(false);
        setViewingOrderTracking(null);
      },
      className: "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ".concat(medicoView === 'facturacion' && !selectedExam && !viewingInvoice && !currentExamForPet ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg' : 'bg-gray-50 hover:bg-gray-100 text-gray-700')
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-8 h-8 rounded-lg flex items-center justify-center ".concat(medicoView === 'facturacion' && !selectedExam && !viewingInvoice && !currentExamForPet ? 'bg-white/20' : 'bg-amber-100')
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-invoice-dollar ".concat(medicoView === 'facturacion' && !selectedExam && !viewingInvoice && !currentExamForPet ? 'text-white' : 'text-amber-600')
    })), /*#__PURE__*/React.createElement("span", {
      className: "font-medium"
    }, "Facturaci\xF3n"))), /*#__PURE__*/React.createElement("div", {
      className: "mx-4 border-t border-gray-200"
    }), /*#__PURE__*/React.createElement("div", {
      className: "p-4 mb-8"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-500 mb-1"
    }, "\xBFNecesitas asistencia?"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-500 mb-2"
    }, "Cont\xE1ctanos:"), /*#__PURE__*/React.createElement("a", {
      href: "mailto:lab@inulaboratorios.com",
      className: "flex items-center gap-2 text-xs text-cyan-600 hover:text-cyan-700 mb-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-envelope text-xs"
    }), "lab@inulaboratorios.com"), /*#__PURE__*/React.createElement("a", {
      href: "https://wa.me/51999999999",
      target: "_blank",
      className: "flex items-center gap-2 text-xs text-green-600 hover:text-green-700"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fab fa-whatsapp text-xs"
    }), "WhatsApp Inulab"))), /*#__PURE__*/React.createElement("div", {
      className: "ml-56 flex-1 p-6 bg-gray-100 h-[calc(100vh-64px)] overflow-hidden"
    }, successMessage && /*#__PURE__*/React.createElement("div", {
      className: "bg-emerald-50 border border-emerald-300 text-emerald-700 p-4 rounded-xl mb-4 flex items-center gap-3 -mt-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-check-circle text-emerald-500"
    }), successMessage), viewingOrderTracking && function (_trackingOrder$items$5, _trackingOrder$items$6) {
      var trackingOrder = (database.orders || []).find(function (o) {
        return o.id === viewingOrderTracking.id;
      }) || viewingOrderTracking;
      var formatTrackingDateTime = function formatTrackingDateTime(date) {
        if (!date) return '';
        var d = new Date(date);
        return d.toLocaleDateString('es-ES', {
          day: 'numeric',
          month: 'short'
        }) + ' ' + d.toLocaleTimeString('es-ES', {
          hour: '2-digit',
          minute: '2-digit'
        });
      };
      var trackingSteps = [{
        id: 'pending',
        label: 'Pedido realizado',
        subtitle: 'Tu pedido ha sido registrado',
        icon: 'fa-clipboard-check',
        date: trackingOrder.date
      }, {
        id: 'confirmed',
        label: 'Pedido confirmado',
        subtitle: 'El laboratorio confirmó tu pedido',
        icon: 'fa-check-circle',
        date: trackingOrder.date
      }, {
        id: 'moto_en_camino',
        label: 'Motorizado en camino',
        subtitle: 'El motorizado va hacia tu ubicación',
        icon: 'fa-motorcycle',
        date: ['moto_en_camino', 'moto_arrived', 'sample_received', 'arrived_at_lab', 'processing', 'results_uploaded', 'completed'].includes(trackingOrder.status) ? trackingOrder.statusUpdatedAt : null
      }, {
        id: 'moto_arrived',
        label: 'Motorizado llegó',
        subtitle: 'Por favor entrega la muestra',
        icon: 'fa-map-marker-alt',
        date: ['moto_arrived', 'sample_received', 'arrived_at_lab', 'processing', 'results_uploaded', 'completed'].includes(trackingOrder.status) ? trackingOrder.statusUpdatedAt : null
      }, {
        id: 'sample_received',
        label: 'Muestra recogida',
        subtitle: 'Tu muestra va camino al laboratorio',
        icon: 'fa-vial',
        date: ['sample_received', 'arrived_at_lab', 'processing', 'results_uploaded', 'completed'].includes(trackingOrder.status) ? trackingOrder.statusUpdatedAt : null
      }, {
        id: 'arrived_at_lab',
        label: 'En laboratorio',
        subtitle: 'La muestra llegó al laboratorio',
        icon: 'fa-flask',
        date: ['arrived_at_lab', 'processing', 'results_uploaded', 'completed'].includes(trackingOrder.status) ? trackingOrder.statusUpdatedAt : null
      }, {
        id: 'processing',
        label: 'Procesando muestra',
        subtitle: 'Estamos analizando tu muestra',
        icon: 'fa-cog',
        date: ['processing', 'results_uploaded', 'completed'].includes(trackingOrder.status) ? trackingOrder.statusUpdatedAt : null
      }, {
        id: 'results_uploaded',
        label: 'Resultados listos',
        subtitle: 'Realiza el pago para ver los resultados',
        icon: 'fa-file-medical',
        date: ['results_uploaded', 'completed'].includes(trackingOrder.status) ? trackingOrder.statusUpdatedAt : null
      }, {
        id: 'completed',
        label: 'Entregado',
        subtitle: '¡Ya puedes ver tus resultados!',
        icon: 'fa-check-double',
        date: trackingOrder.status === 'completed' ? trackingOrder.completedAt : null
      }];
      var trackingStatusOrder = ['pending', 'confirmed', 'moto_en_camino', 'moto_arrived', 'sample_received', 'arrived_at_lab', 'processing', 'results_uploaded', 'completed'];
      var trackingCurrentIndex = trackingStatusOrder.indexOf(trackingOrder.status === 'pending' ? 'confirmed' : trackingOrder.status);
      return /*#__PURE__*/React.createElement("div", {
        className: "flex flex-col h-full -mx-6 -mt-6"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex-shrink-0 bg-gray-100 shadow-md border-b border-gray-300 p-4"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-3"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return setViewingOrderTracking(null);
        },
        className: "w-10 h-10 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center text-gray-600 shadow-sm"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-arrow-left"
      })), /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-2 px-2"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-route text-cyan-500 text-lg"
      }), /*#__PURE__*/React.createElement("span", {
        className: "text-cyan-600 font-semibold"
      }, "Tracking del Pedido")))), /*#__PURE__*/React.createElement("div", {
        className: "flex-1 p-6 overflow-hidden"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex gap-6 h-full"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-1/2 bg-white rounded-2xl shadow-lg p-5 flex flex-col"
      }, /*#__PURE__*/React.createElement("h3", {
        className: "font-bold text-gray-800 mb-4"
      }, "Estado del pedido"), /*#__PURE__*/React.createElement("div", {
        className: "flex-1 flex flex-col justify-between"
      }, trackingSteps.map(function (step, index) {
        var isCompleted = index <= trackingCurrentIndex;
        var isLast = index === trackingSteps.length - 1;
        return /*#__PURE__*/React.createElement("div", {
          key: step.id,
          className: "flex gap-2"
        }, /*#__PURE__*/React.createElement("div", {
          className: "flex flex-col items-center"
        }, /*#__PURE__*/React.createElement("div", {
          className: "w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ".concat(isCompleted ? 'bg-cyan-500 text-white' : 'bg-gray-200 text-gray-400')
        }, isCompleted ? /*#__PURE__*/React.createElement("i", {
          className: "fas fa-check text-xs"
        }) : /*#__PURE__*/React.createElement("i", {
          className: "fas ".concat(step.icon, " text-xs")
        })), !isLast && /*#__PURE__*/React.createElement("div", {
          className: "w-0.5 flex-1 ".concat(index < trackingCurrentIndex ? 'bg-cyan-500' : 'bg-gray-200')
        })), /*#__PURE__*/React.createElement("div", {
          className: "flex-1"
        }, /*#__PURE__*/React.createElement("p", {
          className: "font-medium text-sm ".concat(isCompleted ? 'text-gray-800' : 'text-gray-400')
        }, step.label), /*#__PURE__*/React.createElement("p", {
          className: "text-xs ".concat(isCompleted ? 'text-gray-500' : 'text-gray-400')
        }, step.subtitle), isCompleted && step.date && /*#__PURE__*/React.createElement("p", {
          className: "text-cyan-600 text-xs mt-0.5"
        }, formatTrackingDateTime(step.date))));
      }))), /*#__PURE__*/React.createElement("div", {
        className: "w-1/2"
      }, /*#__PURE__*/React.createElement("div", {
        className: "bg-white rounded-2xl shadow-lg p-5"
      }, /*#__PURE__*/React.createElement("h3", {
        className: "font-bold text-gray-800 mb-3"
      }, "Detalle del pedido"), /*#__PURE__*/React.createElement("div", {
        className: "space-y-2"
      }, trackingOrder.items.map(function (item, idx) {
        return /*#__PURE__*/React.createElement("div", {
          key: idx,
          className: "flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
        }, /*#__PURE__*/React.createElement("div", {
          className: "w-10 h-10 ".concat(item.exam.bg, " rounded-lg flex items-center justify-center")
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas ".concat(item.exam.icon, " ").concat(item.exam.color)
        })), /*#__PURE__*/React.createElement("div", {
          className: "flex-1"
        }, /*#__PURE__*/React.createElement("p", {
          className: "font-medium text-gray-800 text-sm"
        }, item.exam.name), /*#__PURE__*/React.createElement("p", {
          className: "text-gray-500 text-xs"
        }, item.pet.photo, " ", getPetFullName(item.pet))));
      })), /*#__PURE__*/React.createElement("div", {
        className: "mt-4 pt-4 border-t border-gray-100"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-start gap-2 text-sm"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-map-marker-alt text-cyan-500 mt-0.5"
      }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
        className: "text-gray-500 text-xs"
      }, "Direcci\xF3n de recojo"), /*#__PURE__*/React.createElement("p", {
        className: "text-gray-800"
      }, ((_trackingOrder$items$5 = trackingOrder.items[0]) === null || _trackingOrder$items$5 === void 0 || (_trackingOrder$items$5 = _trackingOrder$items$5.address) === null || _trackingOrder$items$5 === void 0 ? void 0 : _trackingOrder$items$5.address) || 'Sin dirección', ", ", ((_trackingOrder$items$6 = trackingOrder.items[0]) === null || _trackingOrder$items$6 === void 0 || (_trackingOrder$items$6 = _trackingOrder$items$6.address) === null || _trackingOrder$items$6 === void 0 ? void 0 : _trackingOrder$items$6.district) || '')))), trackingOrder.comment && /*#__PURE__*/React.createElement("div", {
        className: "mt-3 pt-3 border-t border-gray-100"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-start gap-2 text-sm"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-comment-alt text-cyan-500 mt-0.5"
      }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
        className: "text-gray-500 text-xs"
      }, "Comentario"), /*#__PURE__*/React.createElement("p", {
        className: "text-gray-800 text-sm"
      }, trackingOrder.comment)))))))));
    }(), selectedExam && /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col h-full -mx-6 -mt-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-shrink-0 bg-gray-100 shadow-md border-b border-gray-300 p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setSelectedExam(null);
      },
      className: "w-10 h-10 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center text-gray-600 shadow-sm"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left"
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 px-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-medical text-purple-500 text-lg"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-purple-600 font-semibold"
    }, "Resultado")))), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 overflow-hidden p-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-4xl mx-auto h-full"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow-lg p-5 h-full flex flex-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mb-3"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "text-xl font-bold text-gray-800 mb-1"
    }, selectedExam.type), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500 text-sm"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-calendar mr-1"
    }), new Date(selectedExam.date).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }))), selectedExam.pdfData ? /*#__PURE__*/React.createElement("div", {
      className: "flex-1 flex flex-col min-h-0"
    }, /*#__PURE__*/React.createElement("iframe", {
      src: selectedExam.pdfData,
      className: "flex-1 w-full rounded-xl border border-gray-200",
      title: "PDF"
    }), /*#__PURE__*/React.createElement("div", {
      className: "mt-3 flex justify-center flex-shrink-0"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        var link = document.createElement('a');
        link.href = selectedExam.pdfData;
        link.download = "".concat(selectedExam.type.replace(/[^a-zA-Z0-9]/g, '_'), "_").concat(selectedExam.date, ".pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      },
      className: "flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white rounded-xl font-semibold transition-colors shadow-lg text-sm"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-download"
    }), "Descargar PDF"))) : /*#__PURE__*/React.createElement("div", {
      className: "bg-gray-100 rounded-xl p-12 text-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-pdf text-4xl text-gray-400 mb-2"
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500"
    }, "PDF no disponible")))))), !selectedExam && viewingInvoice && /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col h-full -mx-6 -mt-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-shrink-0 bg-gray-100 shadow-md border-b border-gray-300 p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setViewingInvoice(null);
      },
      className: "w-10 h-10 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center text-gray-600 shadow-sm"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left"
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 px-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas ".concat(viewingInvoice.documentType === 'boleta' ? 'fa-receipt text-cyan-500' : 'fa-file-invoice text-amber-500', " text-lg")
    }), /*#__PURE__*/React.createElement("span", {
      className: "".concat(viewingInvoice.documentType === 'boleta' ? 'text-cyan-600' : 'text-amber-600', " font-semibold")
    }, viewingInvoice.documentType === 'boleta' ? 'Boleta' : 'Factura')))), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 overflow-hidden p-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-4xl mx-auto h-full"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow-lg p-5 h-full flex flex-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mb-3"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "text-xl font-bold text-gray-800 mb-1"
    }, viewingInvoice.documentType === 'boleta' ? 'Boleta' : 'Factura'), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500 text-sm"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-calendar mr-1"
    }), new Date(viewingInvoice.completedAt || viewingInvoice.date).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-600 text-sm mt-1"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-user mr-1"
    }), viewingInvoice.userName)), viewingInvoice.invoicePdf ? /*#__PURE__*/React.createElement("div", {
      className: "flex-1 flex flex-col min-h-0"
    }, /*#__PURE__*/React.createElement("iframe", {
      src: viewingInvoice.invoicePdf,
      className: "flex-1 w-full rounded-xl border border-gray-200",
      title: "Comprobante PDF"
    }), /*#__PURE__*/React.createElement("div", {
      className: "mt-3 flex justify-center flex-shrink-0"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        var link = document.createElement('a');
        link.href = viewingInvoice.invoicePdf;
        link.download = "".concat(viewingInvoice.documentType === 'boleta' ? 'Boleta' : 'Factura', "_").concat(viewingInvoice.id, ".pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      },
      className: "flex items-center gap-2 px-6 py-2.5 ".concat(viewingInvoice.documentType === 'boleta' ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700' : 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700', " text-white rounded-xl font-semibold transition-colors shadow-lg text-sm")
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-download"
    }), "Descargar PDF"))) : /*#__PURE__*/React.createElement("div", {
      className: "bg-gray-100 rounded-xl p-12 text-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas ".concat(viewingInvoice.documentType === 'boleta' ? 'fa-receipt' : 'fa-file-invoice', " text-4xl text-gray-400 mb-2")
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500"
    }, viewingInvoice.documentType === 'boleta' ? 'Boleta' : 'Factura', " no disponible")))))), !selectedExam && !viewingInvoice && currentExamForPet && /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col h-full -mx-6 -mt-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-shrink-0 bg-gray-100 shadow-md border-b border-gray-300 p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        if (showAddressSelection && !showNewAddressForm) {
          setShowAddressSelection(false);
          setSelectedPetForOrder(null);
        } else if (showNewAddressForm) {
          setShowNewAddressForm(false);
        } else if (showNewPetForm) {
          setShowNewPetForm(false);
        } else {
          setCurrentExamForPet(null);
          removeFromPending(currentExamForPet.id);
        }
      },
      className: "w-10 h-10 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center text-gray-600 shadow-sm"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left"
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 px-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-shopping-cart text-cyan-500 text-lg"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-cyan-600 font-semibold"
    }, "Nuevo Pedido")))), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 overflow-y-auto p-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-lg mx-auto"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow p-4 mb-4 flex items-center gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-12 h-12 ".concat(currentExamForPet.bg, " rounded-xl flex items-center justify-center")
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas ".concat(currentExamForPet.icon, " ").concat(currentExamForPet.color, " text-xl")
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex-1"
    }, /*#__PURE__*/React.createElement("p", {
      className: "font-bold text-gray-800"
    }, currentExamForPet.name), currentExamForPet.subtitle && /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-500"
    }, currentExamForPet.subtitle), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-cyan-600 mt-1"
    }, showAddressSelection ? "".concat(selectedPetForOrder === null || selectedPetForOrder === void 0 ? void 0 : selectedPetForOrder.name, " - Selecciona direcci\xF3n") : "Selecciona ".concat(entityName)))), pendingExams.length > 1 && /*#__PURE__*/React.createElement("div", {
      className: "bg-blue-50 rounded-xl p-3 mb-4 text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-blue-700"
    }, "Examen ", pendingExams.findIndex(function (e) {
      return e.id === currentExamForPet.id;
    }) + 1, " de ", pendingExams.length)), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-center gap-2 mb-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ".concat(!showAddressSelection ? 'bg-cyan-500 text-white' : 'bg-emerald-100 text-emerald-700')
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas ".concat(!showAddressSelection ? 'fa-paw' : 'fa-check')
    }), " Paciente"), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-right text-gray-300 text-xs"
    }), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ".concat(showAddressSelection ? 'bg-cyan-500 text-white' : 'bg-gray-100 text-gray-400')
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-map-marker-alt"
    }), " Direcci\xF3n")), !showAddressSelection && /*#__PURE__*/React.createElement(React.Fragment, null, !showNewPetForm ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "relative mb-4"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
    }), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: petSearchTerm,
      onChange: function onChange(e) {
        return setPetSearchTerm(e.target.value);
      },
      placeholder: "Buscar ".concat(entityName, "..."),
      className: "w-full pl-11 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none bg-white"
    })), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow overflow-hidden mb-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-h-64 overflow-y-auto hide-scrollbar"
    }, filteredPets.length === 0 ? /*#__PURE__*/React.createElement("div", {
      className: "p-8 text-center text-gray-500"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-search text-3xl mb-2 text-gray-300"
    }), /*#__PURE__*/React.createElement("p", null, "No se encontr\xF3 ning\xFAn ", entityName)) : filteredPets.map(function (pet) {
      return /*#__PURE__*/React.createElement("div", {
        key: pet.id,
        onClick: function onClick() {
          return assignPetToExam(pet);
        },
        className: "p-4 border-b border-gray-100 last:border-0 flex items-center gap-4 cursor-pointer hover:bg-gray-50"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-3xl"
      }, pet.photo), /*#__PURE__*/React.createElement("div", {
        className: "flex-1"
      }, /*#__PURE__*/React.createElement("p", {
        className: "font-semibold text-gray-800"
      }, getPetFullName(pet)), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-500"
      }, pet.breed, " \u2022 ", formatAge(pet)), pet.owner && freshUser.type === 'medico' && /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-400"
      }, "Due\xF1o: ", pet.owner)), /*#__PURE__*/React.createElement("i", {
        className: "fas fa-chevron-right text-gray-300"
      }));
    }))), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowNewPetForm(true);
      },
      className: "w-full py-4 rounded-2xl border-2 border-dashed border-cyan-300 text-cyan-600 font-semibold hover:bg-cyan-50"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-plus mr-2"
    }), "Agregar ", freshUser.type === 'medico' ? 'nuevo paciente' : 'nueva mascota')) : /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow p-6"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold text-gray-800 mb-4"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-plus-circle mr-2 text-cyan-500"
    }), freshUser.type === 'medico' ? 'Nuevo Paciente' : 'Nueva Mascota'), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 gap-4"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Nombre"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newPet.name,
      onChange: function onChange(e) {
        return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
          name: e.target.value
        }));
      },
      className: "w-full h-12 px-4 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "Nombre"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Especie"), /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement("select", {
      value: newPet.animalType,
      onChange: function onChange(e) {
        return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
          animalType: e.target.value
        }));
      },
      className: "w-full h-12 px-4 pr-10 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none bg-white appearance-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Seleccionar"), /*#__PURE__*/React.createElement("option", {
      value: "perro"
    }, "\uD83D\uDC15 Perro"), /*#__PURE__*/React.createElement("option", {
      value: "gato"
    }, "\uD83D\uDC08 Gato"), /*#__PURE__*/React.createElement("option", {
      value: "ave"
    }, "\uD83E\uDD9C Ave"), /*#__PURE__*/React.createElement("option", {
      value: "conejo"
    }, "\uD83D\uDC30 Conejo")), /*#__PURE__*/React.createElement("div", {
      className: "absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-down text-xs"
    })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Raza"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newPet.breed,
      onChange: function onChange(e) {
        return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
          breed: e.target.value
        }));
      },
      className: "w-full h-12 px-4 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "Ej: Labrador"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Sexo"), /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement("select", {
      value: newPet.sex,
      onChange: function onChange(e) {
        return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
          sex: e.target.value
        }));
      },
      className: "w-full h-12 px-4 pr-10 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none bg-white appearance-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Seleccionar"), /*#__PURE__*/React.createElement("option", {
      value: "Macho"
    }, "Macho"), /*#__PURE__*/React.createElement("option", {
      value: "Hembra"
    }, "Hembra")), /*#__PURE__*/React.createElement("div", {
      className: "absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-down text-xs"
    })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Edad"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newPet.ageValue,
      onChange: function onChange(e) {
        return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
          ageValue: e.target.value.replace(/[^0-9]/g, '')
        }));
      },
      className: "w-full h-12 px-4 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "Ej: 3"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Unidad"), /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement("select", {
      value: newPet.ageUnit,
      onChange: function onChange(e) {
        return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
          ageUnit: e.target.value
        }));
      },
      className: "w-full h-12 px-4 pr-10 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none bg-white appearance-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: "a\xF1os"
    }, "A\xF1os"), /*#__PURE__*/React.createElement("option", {
      value: "meses"
    }, "Meses")), /*#__PURE__*/React.createElement("div", {
      className: "absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-down text-xs"
    })))), freshUser.type === 'medico' && /*#__PURE__*/React.createElement("div", {
      className: "col-span-2"
    }, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Nombre del Due\xF1o"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newPet.owner,
      onChange: function onChange(e) {
        return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
          owner: e.target.value
        }));
      },
      className: "w-full h-12 px-4 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "Nombre del propietario"
    })), /*#__PURE__*/React.createElement("button", {
      onClick: addNewPet,
      className: "col-span-2 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-check mr-2"
    }), "Guardar y Seleccionar")))), showAddressSelection && /*#__PURE__*/React.createElement(React.Fragment, null, !showNewAddressForm ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "bg-emerald-50 rounded-xl p-3 mb-4 flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-2xl"
    }, selectedPetForOrder === null || selectedPetForOrder === void 0 ? void 0 : selectedPetForOrder.photo), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "font-medium text-emerald-800"
    }, selectedPetForOrder === null || selectedPetForOrder === void 0 ? void 0 : selectedPetForOrder.name), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-emerald-600"
    }, selectedPetForOrder === null || selectedPetForOrder === void 0 ? void 0 : selectedPetForOrder.breed))), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow overflow-hidden mb-4"
    }, (freshUser.addresses || []).length === 0 ? /*#__PURE__*/React.createElement("div", {
      className: "p-8 text-center text-gray-500"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-map-marker-alt text-3xl mb-2 text-gray-300"
    }), /*#__PURE__*/React.createElement("p", null, "No tienes direcciones guardadas")) : (freshUser.addresses || []).map(function (addr) {
      return /*#__PURE__*/React.createElement("div", {
        key: addr.id,
        onClick: function onClick() {
          return assignAddressAndComplete(addr);
        },
        className: "p-4 border-b border-gray-100 last:border-0 flex items-center gap-3 cursor-pointer hover:bg-gray-50"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-map-marker-alt text-cyan-600"
      })), /*#__PURE__*/React.createElement("div", {
        className: "flex-1"
      }, /*#__PURE__*/React.createElement("p", {
        className: "font-medium text-gray-800"
      }, addr.name), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-500"
      }, addr.address), addr.reference && /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-400"
      }, "Ref: ", addr.reference)), /*#__PURE__*/React.createElement("i", {
        className: "fas fa-chevron-right text-gray-300"
      }));
    })), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowNewAddressForm(true);
      },
      className: "w-full py-4 rounded-2xl border-2 border-dashed border-cyan-300 text-cyan-600 font-semibold hover:bg-cyan-50"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-plus mr-2"
    }), "Agregar nueva direcci\xF3n")) : /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow p-6"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold text-gray-800 mb-4"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-map-marker-alt mr-2 text-cyan-500"
    }), "Nueva Direcci\xF3n"), /*#__PURE__*/React.createElement("button", {
      onClick: getMyLocation,
      disabled: gettingLocation,
      className: "w-full mb-4 py-3 rounded-xl border-2 border-dashed border-cyan-300 bg-cyan-50 text-cyan-700 font-medium hover:bg-cyan-100 transition-colors flex items-center justify-center gap-2"
    }, gettingLocation ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-spinner fa-spin"
    }), "Obteniendo ubicaci\xF3n...") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-location-crosshairs"
    }), "Utilizar mi ubicaci\xF3n")), /*#__PURE__*/React.createElement("div", {
      className: "space-y-4"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Nombre/Etiqueta *"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newAddress.name,
      onChange: function onChange(e) {
        return setNewAddress(_objectSpread(_objectSpread({}, newAddress), {}, {
          name: e.target.value
        }));
      },
      className: "w-full p-3 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none",
      placeholder: "Ej: Casa, Oficina, Cl\xEDnica..."
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Direcci\xF3n *"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newAddress.address,
      onChange: function onChange(e) {
        return setNewAddress(_objectSpread(_objectSpread({}, newAddress), {}, {
          address: e.target.value
        }));
      },
      className: "w-full p-3 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none",
      placeholder: "Av. / Calle / Jr. y n\xFAmero"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Distrito *"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newAddress.district,
      onChange: function onChange(e) {
        return setNewAddress(_objectSpread(_objectSpread({}, newAddress), {}, {
          district: e.target.value
        }));
      },
      className: "w-full p-3 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none",
      placeholder: "Ej: San Isidro"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Referencia (opcional)"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newAddress.reference,
      onChange: function onChange(e) {
        return setNewAddress(_objectSpread(_objectSpread({}, newAddress), {}, {
          reference: e.target.value
        }));
      },
      className: "w-full p-3 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none",
      placeholder: "Ej: Frente al parque, port\xF3n verde..."
    })), /*#__PURE__*/React.createElement("button", {
      onClick: addNewAddress,
      className: "w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-check mr-2"
    }), "Guardar y Seleccionar"))))))), !selectedExam && !viewingInvoice && !currentExamForPet && !viewingOrderTracking && medicoView === 'configuracion' && !showEditProfile && /*#__PURE__*/React.createElement("div", {
      className: "max-w-md mx-auto"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow p-6"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "text-2xl font-bold text-gray-800 mb-6"
    }, "Configuraci\xF3n"), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-4 p-4 bg-gray-50 rounded-xl mb-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold"
    }, freshUser.name.charAt(0)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "font-semibold text-gray-800"
    }, freshUser.name, " ", freshUser.lastName || ''), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-500"
    }, freshUser.clinic || 'Clínica Veterinaria'))), /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: openEditProfile,
      className: "w-full flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors text-left"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-user text-cyan-600"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "font-medium text-gray-800"
    }, "Mi Perfil"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-500"
    }, "Editar informaci\xF3n de tu cl\xEDnica")), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-right text-gray-400 ml-auto"
    }))), /*#__PURE__*/React.createElement("button", {
      onClick: handleLogout,
      className: "w-full mt-6 py-4 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 font-semibold transition-colors flex items-center justify-center gap-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-sign-out-alt"
    }), "Cerrar Sesi\xF3n"))), !selectedExam && !viewingInvoice && !currentExamForPet && !viewingOrderTracking && medicoView === 'configuracion' && showEditProfile && /*#__PURE__*/React.createElement("div", {
      className: "max-w-lg mx-auto"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow p-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3 mb-6"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowEditProfile(false);
      },
      className: "w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left text-gray-600"
    })), /*#__PURE__*/React.createElement("h1", {
      className: "text-xl font-bold text-gray-800"
    }, "Mi Perfil")), /*#__PURE__*/React.createElement("div", {
      className: "flex justify-center mb-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg"
    }, editProfile.name.charAt(0) || freshUser.name.charAt(0))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-span-2"
    }, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Nombre de la Cl\xEDnica", /*#__PURE__*/React.createElement("span", {
      className: "text-xs text-amber-600 ml-2"
    }, getNameChangeText())), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: editProfile.name,
      onChange: function onChange(e) {
        return setEditProfile(_objectSpread(_objectSpread({}, editProfile), {}, {
          name: e.target.value
        }));
      },
      className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "Nombre de tu cl\xEDnica"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Raz\xF3n Social"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: editProfile.clinic,
      onChange: function onChange(e) {
        return setEditProfile(_objectSpread(_objectSpread({}, editProfile), {}, {
          clinic: e.target.value
        }));
      },
      className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "Para facturas"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "RUC"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: editProfile.ruc,
      onChange: function onChange(e) {
        return setEditProfile(_objectSpread(_objectSpread({}, editProfile), {}, {
          ruc: e.target.value
        }));
      },
      className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "20123456789",
      maxLength: 11
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Tel\xE9fono"), /*#__PURE__*/React.createElement("input", {
      type: "tel",
      value: editProfile.phone,
      onChange: function onChange(e) {
        return setEditProfile(_objectSpread(_objectSpread({}, editProfile), {}, {
          phone: e.target.value
        }));
      },
      className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "999 888 777"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Correo electr\xF3nico"), /*#__PURE__*/React.createElement("input", {
      type: "email",
      value: editProfile.email,
      onChange: function onChange(e) {
        return setEditProfile(_objectSpread(_objectSpread({}, editProfile), {}, {
          email: e.target.value
        }));
      },
      className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "contacto@tuclinica.com"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Direcci\xF3n"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: editProfile.address,
      onChange: function onChange(e) {
        return setEditProfile(_objectSpread(_objectSpread({}, editProfile), {}, {
          address: e.target.value
        }));
      },
      className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "Av. Principal 123"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Distrito"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: editProfile.district,
      onChange: function onChange(e) {
        return setEditProfile(_objectSpread(_objectSpread({}, editProfile), {}, {
          district: e.target.value
        }));
      },
      className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "Miraflores"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "mt-6 flex gap-3"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowEditProfile(false);
      },
      className: "flex-1 py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-medium hover:bg-gray-50"
    }, "Cancelar"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return saveProfile(editProfile.name !== freshUser.name);
      },
      className: "flex-1 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition-colors flex items-center justify-center gap-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-save"
    }), "Guardar")))), !selectedExam && !viewingInvoice && !currentExamForPet && !viewingOrderTracking && medicoView === 'inicio' && /*#__PURE__*/React.createElement("div", {
      className: "h-full overflow-y-auto -mx-6 -mt-6 px-6 pt-6"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "text-2xl font-bold text-gray-800 mb-1"
    }, "\xA1Hola, ", freshUser.name, "!"), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500 mb-6"
    }, "Resumen de tu actividad"), /*#__PURE__*/React.createElement("div", {
      className: "mb-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between mb-3"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-lg font-bold text-gray-800 flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-clock text-amber-500"
    }), " Pendientes"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setMedicoView('pedidos');
      },
      className: "text-cyan-600 text-sm font-medium hover:underline"
    }, "Ver todos \u2192")), pendingOrders.length === 0 ? /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl p-6 text-center shadow"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-check-circle text-3xl text-emerald-400 mb-2"
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500"
    }, "No existen pendientes")) : /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 gap-4"
    }, pendingOrders.slice(0, 4).map(function (order) {
      return /*#__PURE__*/React.createElement("div", {
        key: order.id,
        onClick: function onClick() {
          return setViewingOrderTracking(order);
        },
        className: "bg-white rounded-xl p-4 shadow hover:shadow-lg transition-all cursor-pointer group"
      }, order.items.map(function (item, idx) {
        return /*#__PURE__*/React.createElement("div", {
          key: idx,
          className: "flex items-center gap-3"
        }, /*#__PURE__*/React.createElement("span", {
          className: "text-3xl"
        }, item.pet.photo), /*#__PURE__*/React.createElement("div", {
          className: "flex-1"
        }, /*#__PURE__*/React.createElement("p", {
          className: "font-semibold text-gray-800"
        }, getPetFullName(item.pet)), /*#__PURE__*/React.createElement("p", {
          className: "text-sm text-gray-500"
        }, item.exam.name)), /*#__PURE__*/React.createElement("div", {
          className: "w-10 h-10 rounded-xl flex items-center justify-center transition-all group-hover:scale-110 ".concat(order.status === 'moto_arrived' || order.status === 'results_uploaded' ? 'bg-red-500' : 'bg-cyan-500')
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas fa-route text-white"
        })));
      }), order.status === 'moto_arrived' && /*#__PURE__*/React.createElement("div", {
        className: "mt-3 bg-red-50 border border-red-300 rounded-lg p-2 flex items-center gap-2 animate-pulse"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-map-marker-alt text-red-600"
      }), /*#__PURE__*/React.createElement("p", {
        className: "text-red-800 font-medium text-xs"
      }, "\xA1El motorizado lleg\xF3! Entrega la muestra")), order.status === 'results_uploaded' && /*#__PURE__*/React.createElement("div", {
        className: "mt-3 bg-red-50 border border-red-300 rounded-lg p-2 flex items-center gap-2 animate-pulse"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-credit-card text-red-600"
      }), /*#__PURE__*/React.createElement("p", {
        className: "text-red-800 font-medium text-xs"
      }, "\xA1Resultados listos! Pendiente de pago")));
    }))), /*#__PURE__*/React.createElement("div", {
      className: "mb-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between mb-3"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-lg font-bold text-gray-800 flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-medical text-purple-500"
    }), " \xDAltimo resultado", newResultHighlight && /*#__PURE__*/React.createElement("span", {
      className: "bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full animate-pulse"
    }, "\xA1NUEVO!")), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setMedicoView('resultados');
      },
      className: "text-cyan-600 text-sm font-medium hover:underline"
    }, "Ver todos \u2192")), completedOrders.length === 0 ? /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl p-6 text-center shadow"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-folder-open text-3xl text-gray-300 mb-2"
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500"
    }, "No hay resultados a\xFAn")) : function (_pet$exams) {
      var lastOrder = completedOrders[0];
      var pet = petsOrPatients.find(function (p) {
        var _lastOrder$items$;
        return p.id === ((_lastOrder$items$ = lastOrder.items[0]) === null || _lastOrder$items$ === void 0 ? void 0 : _lastOrder$items$.pet.id);
      });
      var exam = pet === null || pet === void 0 || (_pet$exams = pet.exams) === null || _pet$exams === void 0 ? void 0 : _pet$exams.find(function (e) {
        return e.orderId === lastOrder.id;
      });
      return /*#__PURE__*/React.createElement("div", {
        className: "bg-white rounded-xl p-4 shadow hover:shadow-lg transition-all cursor-pointer ".concat(newResultHighlight ? 'highlight-green-pulse' : ''),
        onClick: function onClick() {
          return (exam === null || exam === void 0 ? void 0 : exam.pdfData) && setSelectedExam(exam);
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-4"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-3xl"
      }, lastOrder.items[0].pet.photo), /*#__PURE__*/React.createElement("div", {
        className: "flex-1"
      }, /*#__PURE__*/React.createElement("p", {
        className: "font-medium text-gray-800"
      }, getPetFullName(lastOrder.items[0].pet)), /*#__PURE__*/React.createElement("p", {
        className: "text-sm text-gray-500"
      }, lastOrder.items[0].exam.name), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-400"
      }, new Date(lastOrder.completedAt).toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }))), /*#__PURE__*/React.createElement("div", {
        className: "w-10 h-10 rounded-xl flex items-center justify-center ".concat(newResultHighlight ? 'bg-emerald-100' : 'bg-purple-100')
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-eye ".concat(newResultHighlight ? 'text-emerald-600' : 'text-purple-600')
      }))));
    }()), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between mb-3"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-lg font-bold text-gray-800 flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-invoice-dollar text-amber-500"
    }), " \xDAltimo comprobante", newInvoiceHighlight && /*#__PURE__*/React.createElement("span", {
      className: "bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full animate-pulse"
    }, "\xA1NUEVO!")), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setMedicoView('facturacion');
      },
      className: "text-cyan-600 text-sm font-medium hover:underline"
    }, "Ver todos \u2192")), function () {
      var invoicesWithPdf = completedOrders.filter(function (o) {
        return o.invoicePdf;
      });
      if (invoicesWithPdf.length === 0) {
        return /*#__PURE__*/React.createElement("div", {
          className: "bg-white rounded-xl p-6 text-center shadow"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas fa-receipt text-3xl text-gray-300 mb-2"
        }), /*#__PURE__*/React.createElement("p", {
          className: "text-gray-500"
        }, "No hay comprobantes a\xFAn"));
      }
      var lastInvoice = invoicesWithPdf[0];
      return /*#__PURE__*/React.createElement("div", {
        className: "bg-white rounded-xl p-4 shadow hover:shadow-lg transition-all cursor-pointer ".concat(newInvoiceHighlight ? 'highlight-green-pulse' : ''),
        onClick: function onClick() {
          return setViewingInvoice(lastInvoice);
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-4"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-12 h-12 rounded-xl flex items-center justify-center ".concat(newInvoiceHighlight ? 'bg-emerald-100' : lastInvoice.documentType === 'boleta' ? 'bg-cyan-100' : 'bg-amber-100')
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas ".concat(lastInvoice.documentType === 'boleta' ? 'fa-receipt' : 'fa-file-invoice', " text-xl ").concat(newInvoiceHighlight ? 'text-emerald-600' : lastInvoice.documentType === 'boleta' ? 'text-cyan-600' : 'text-amber-600')
      })), /*#__PURE__*/React.createElement("div", {
        className: "flex-1"
      }, /*#__PURE__*/React.createElement("p", {
        className: "font-medium text-gray-800"
      }, lastInvoice.documentType === 'boleta' ? 'Boleta' : 'Factura'), /*#__PURE__*/React.createElement("p", {
        className: "text-sm text-gray-500"
      }, getPetFullName(lastInvoice.items[0].pet), " - ", lastInvoice.items[0].exam.name), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-400"
      }, new Date(lastInvoice.completedAt).toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }))), /*#__PURE__*/React.createElement("div", {
        className: "w-10 h-10 rounded-xl flex items-center justify-center ".concat(newInvoiceHighlight ? 'bg-emerald-100' : 'bg-amber-100')
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-eye ".concat(newInvoiceHighlight ? 'text-emerald-600' : 'text-amber-600')
      }))));
    }())), !showOrderSummary && !selectedExam && !viewingInvoice && !currentExamForPet && !viewingOrderTracking && medicoView === 'pedidos' && /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col h-full -mx-6 -mt-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-shrink-0 bg-gray-100 shadow-md border-b border-gray-300 p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 px-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-clipboard-list text-cyan-500 text-lg"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-cyan-600 font-semibold"
    }, "Pedidos")), /*#__PURE__*/React.createElement("div", {
      className: "relative flex-1"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
    }), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: searchTerm,
      onChange: function onChange(e) {
        return setSearchTerm(e.target.value);
      },
      placeholder: "Buscar examen o perfil...",
      className: "w-full h-10 pl-11 pr-10 rounded-full border border-gray-300 focus:border-cyan-500 focus:outline-none bg-white text-sm"
    }), searchTerm && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setSearchTerm('');
      },
      className: "absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-times"
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 overflow-y-auto p-6"
    }, (cart.length > 0 || pendingExams.length > 0) && /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-4 mb-4 text-xs text-gray-500"
    }, /*#__PURE__*/React.createElement("span", {
      className: "flex items-center gap-1"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-3 h-3 bg-emerald-500 rounded-full"
    }), " Listo"), /*#__PURE__*/React.createElement("span", {
      className: "flex items-center gap-1"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-3 h-3 bg-amber-400 rounded-full"
    }), " Pendiente"), /*#__PURE__*/React.createElement("span", {
      className: "text-gray-400"
    }, "\u2022 Clic para deseleccionar")), !hayResultados ? /*#__PURE__*/React.createElement("div", {
      className: "text-center py-16 bg-white rounded-xl shadow"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-search text-5xl text-gray-300 mb-4"
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500 text-lg font-medium"
    }, "No encontramos resultados"), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-400 text-sm mt-1"
    }, "Intenta con otro t\xE9rmino")) : /*#__PURE__*/React.createElement("div", {
      className: "space-y-6 pb-24"
    }, filteredPerfiles.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      className: "text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-boxes-stacked text-blue-500"
    }), " Perfiles (Paquetes)"), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 lg:grid-cols-3 gap-3"
    }, filteredPerfiles.map(function (exam) {
      var isInCart = cart.find(function (c) {
        return c.exam.id === exam.id;
      });
      var isPending = pendingExams.find(function (e) {
        return e.id === exam.id;
      });
      return /*#__PURE__*/React.createElement("div", {
        key: exam.id,
        onClick: function onClick() {
          return handleExamClick(exam);
        },
        className: "bg-white rounded-xl p-3 cursor-pointer hover:shadow-lg transition-all shadow border-2 ".concat(isInCart ? 'border-emerald-500 bg-emerald-50' : isPending ? 'border-amber-400 bg-amber-50' : 'border-transparent hover:border-cyan-300', " flex items-center gap-3")
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-11 h-11 ".concat(exam.bg, " rounded-xl flex items-center justify-center flex-shrink-0")
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas ".concat(exam.icon, " ").concat(exam.color, " text-lg")
      })), /*#__PURE__*/React.createElement("div", {
        className: "flex-1 min-w-0"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-gray-800 font-semibold text-sm leading-tight"
      }, exam.name), /*#__PURE__*/React.createElement("p", {
        className: "text-gray-500 text-xs truncate"
      }, exam.subtitle)), exam.price && /*#__PURE__*/React.createElement("span", {
        className: "text-cyan-600 font-bold text-sm flex-shrink-0"
      }, "S/ ", exam.price), (isInCart || isPending) && /*#__PURE__*/React.createElement("div", {
        className: "w-6 h-6 ".concat(isInCart ? 'bg-emerald-500' : 'bg-amber-400', " rounded-full flex items-center justify-center flex-shrink-0")
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas ".concat(isInCart ? 'fa-check' : 'fa-clock', " text-white text-xs")
      })));
    }))), filteredCategorias.map(function (cat) {
      return /*#__PURE__*/React.createElement("div", {
        key: cat.nombre
      }, /*#__PURE__*/React.createElement("h3", {
        className: "text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas ".concat(cat.icon, " ").concat(cat.color)
      }), " ", cat.nombre), /*#__PURE__*/React.createElement("div", {
        className: "grid grid-cols-2 lg:grid-cols-3 gap-3"
      }, cat.examenes.map(function (exam) {
        var isInCart = cart.find(function (c) {
          return c.exam.id === exam.id;
        });
        var isPending = pendingExams.find(function (e) {
          return e.id === exam.id;
        });
        return /*#__PURE__*/React.createElement("div", {
          key: exam.id,
          onClick: function onClick() {
            return handleExamClick(exam);
          },
          className: "bg-white rounded-xl p-3 cursor-pointer hover:shadow-lg transition-all shadow border-2 ".concat(isInCart ? 'border-emerald-500 bg-emerald-50' : isPending ? 'border-amber-400 bg-amber-50' : 'border-transparent hover:border-cyan-300', " flex items-center gap-3")
        }, /*#__PURE__*/React.createElement("div", {
          className: "w-10 h-10 ".concat(exam.bg, " rounded-xl flex items-center justify-center flex-shrink-0")
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas ".concat(exam.icon, " ").concat(exam.color, " text-base")
        })), /*#__PURE__*/React.createElement("div", {
          className: "flex-1 min-w-0"
        }, /*#__PURE__*/React.createElement("p", {
          className: "text-gray-800 font-medium text-sm leading-tight"
        }, exam.name), exam.subtitle && /*#__PURE__*/React.createElement("p", {
          className: "text-gray-400 text-xs"
        }, exam.subtitle, exam.turnaround ? " \xB7 ".concat(exam.turnaround) : "")), exam.price && /*#__PURE__*/React.createElement("span", {
          className: "text-cyan-600 font-bold text-sm flex-shrink-0"
        }, "S/ ", exam.price), (isInCart || isPending) && /*#__PURE__*/React.createElement("div", {
          className: "w-6 h-6 ".concat(isInCart ? 'bg-emerald-500' : 'bg-amber-400', " rounded-full flex items-center justify-center flex-shrink-0")
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas ".concat(isInCart ? 'fa-check' : 'fa-clock', " text-white text-xs")
        })));
      })));
    }))), cart.length > 0 && /*#__PURE__*/React.createElement("div", {
      className: "fixed bottom-6 right-6 bg-slate-800 text-white pl-4 pr-3 py-3 rounded-2xl shadow-2xl z-50"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-9 h-9 bg-emerald-500 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
    }, cart.length), /*#__PURE__*/React.createElement("div", {
      className: "min-w-0"
    }, /*#__PURE__*/React.createElement("p", {
      className: "font-medium text-sm"
    }, "Pedido listo"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400 truncate max-w-[150px]"
    }, cart.map(function (c) {
      return getPetFullName(c.pet);
    }).join(', '))), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowOrderSummary(true);
      },
      className: "bg-cyan-500 hover:bg-cyan-600 px-4 py-2.5 rounded-xl font-semibold text-sm whitespace-nowrap flex-shrink-0 ml-2"
    }, "Solicitar")))), !selectedExam && !viewingInvoice && !currentExamForPet && !viewingOrderTracking && medicoView === 'mascotas' && !selectedMascota && /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col h-full -mx-6 -mt-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-shrink-0 bg-gray-100 shadow-md border-b border-gray-300 p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 px-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-paw text-emerald-500 text-lg"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-emerald-600 font-semibold"
    }, "Pacientes"), /*#__PURE__*/React.createElement("span", {
      className: "bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full"
    }, petsOrPatients.length)), /*#__PURE__*/React.createElement("div", {
      className: "relative flex-1"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
    }), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: mascotaSearchTerm,
      onChange: function onChange(e) {
        return setMascotaSearchTerm(e.target.value);
      },
      placeholder: "Buscar paciente o due\xF1o...",
      className: "w-full h-10 pl-11 pr-10 rounded-full border border-gray-300 focus:border-emerald-500 focus:outline-none bg-white text-sm"
    }), mascotaSearchTerm && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setMascotaSearchTerm('');
      },
      className: "absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-times"
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 overflow-y-auto p-6"
    }, filteredMascotas.length === 0 ? /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl p-8 text-center shadow"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-paw text-4xl text-gray-300 mb-2"
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500"
    }, "No se encontraron pacientes")) : /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 gap-4 pb-6"
    }, filteredMascotas.map(function (pet) {
      return /*#__PURE__*/React.createElement("div", {
        key: pet.id,
        onClick: function onClick() {
          setSelectedMascota(pet);
          setExamSearchTerm('');
          setExamFilterDay('');
          setExamFilterMonth('');
          setExamFilterYear('');
        },
        className: "bg-white rounded-xl p-4 shadow hover:shadow-lg cursor-pointer transition-all"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-3"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-3xl"
      }, pet.photo), /*#__PURE__*/React.createElement("div", {
        className: "flex-1"
      }, /*#__PURE__*/React.createElement("p", {
        className: "font-medium text-gray-800"
      }, getPetFullName(pet)), /*#__PURE__*/React.createElement("p", {
        className: "text-sm text-gray-500"
      }, pet.breed), pet.owner && /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-400"
      }, "Due\xF1o: ", pet.owner)), /*#__PURE__*/React.createElement("span", {
        className: "bg-emerald-100 text-emerald-600 text-xs px-2 py-1 rounded-full"
      }, pet.exams.length, " ex\xE1m.")));
    })))), !selectedExam && !viewingInvoice && !currentExamForPet && !viewingOrderTracking && medicoView === 'mascotas' && selectedMascota && /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col h-full -mx-6 -mt-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-shrink-0 bg-gray-100 shadow-md border-b border-gray-300"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-4 border-b border-gray-200"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-4"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setSelectedMascota(null);
      },
      className: "w-10 h-10 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center text-gray-600 shadow-sm"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left"
    })), /*#__PURE__*/React.createElement("span", {
      className: "text-4xl"
    }, selectedMascota.photo), /*#__PURE__*/React.createElement("div", {
      className: "flex-1"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "text-xl font-bold text-gray-800"
    }, getPetFullName(selectedMascota)), /*#__PURE__*/React.createElement("span", {
      className: "bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full font-medium"
    }, selectedMascota.exams.length, " ex\xE1menes")), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-4 mt-1"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-sm text-gray-600"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-dog text-cyan-500 mr-1"
    }), selectedMascota.breed), /*#__PURE__*/React.createElement("span", {
      className: "text-sm text-gray-600"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-birthday-cake text-cyan-500 mr-1"
    }), formatAge(selectedMascota)), /*#__PURE__*/React.createElement("span", {
      className: "text-sm text-gray-600"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-venus-mars text-cyan-500 mr-1"
    }), selectedMascota.sex), selectedMascota.owner && /*#__PURE__*/React.createElement("span", {
      className: "text-sm text-gray-600"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-user text-cyan-500 mr-1"
    }), selectedMascota.owner))))), /*#__PURE__*/React.createElement("div", {
      className: "p-4 flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "relative flex-1"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
    }), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: examSearchTerm,
      onChange: function onChange(e) {
        return setExamSearchTerm(e.target.value);
      },
      placeholder: "Buscar examen...",
      className: "w-full h-10 pl-11 pr-10 rounded-full border border-gray-300 focus:border-emerald-500 focus:outline-none bg-white text-sm"
    }), examSearchTerm && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setExamSearchTerm('');
      },
      className: "absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-times"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-xs text-gray-500"
    }, "Filtrar por:"), /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement("select", {
      value: examFilterDay,
      onChange: function onChange(e) {
        return setExamFilterDay(e.target.value);
      },
      className: "h-10 w-20 pl-3 pr-7 rounded-full bg-white border border-gray-300 text-sm focus:border-emerald-500 appearance-none cursor-pointer focus:outline-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "D\xEDa"), _toConsumableArray(Array(31)).map(function (_, i) {
      return /*#__PURE__*/React.createElement("option", {
        key: i + 1,
        value: String(i + 1).padStart(2, '0')
      }, i + 1);
    })), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-down absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none"
    })), /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement("select", {
      value: examFilterMonth,
      onChange: function onChange(e) {
        return setExamFilterMonth(e.target.value);
      },
      className: "h-10 w-24 pl-3 pr-7 rounded-full bg-white border border-gray-300 text-sm focus:border-emerald-500 appearance-none cursor-pointer focus:outline-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Mes"), ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'].map(function (m, i) {
      return /*#__PURE__*/React.createElement("option", {
        key: i,
        value: String(i + 1).padStart(2, '0')
      }, m);
    })), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-down absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none"
    })), /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement("select", {
      value: examFilterYear,
      onChange: function onChange(e) {
        return setExamFilterYear(e.target.value);
      },
      className: "h-10 w-24 pl-3 pr-7 rounded-full bg-white border border-gray-300 text-sm focus:border-emerald-500 appearance-none cursor-pointer focus:outline-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "A\xF1o"), ['2026', '2025', '2024', '2023'].map(function (y) {
      return /*#__PURE__*/React.createElement("option", {
        key: y,
        value: y
      }, y);
    })), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-down absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none"
    })), (examFilterDay || examFilterMonth || examFilterYear) && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setExamFilterDay('');
        setExamFilterMonth('');
        setExamFilterYear('');
      },
      className: "h-10 px-3 rounded-full bg-red-100 text-red-600 text-xs hover:bg-red-200"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-times mr-1"
    }), "Limpiar")))), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 overflow-y-auto p-6"
    }, selectedMascota.exams.length === 0 ? /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl p-8 text-center shadow"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-folder-open text-4xl text-gray-300 mb-2"
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500"
    }, "Este paciente no tiene ex\xE1menes")) : filterExams(selectedMascota.exams).length === 0 ? /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl p-8 text-center shadow"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-search text-4xl text-gray-300 mb-2"
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500"
    }, "No se encontraron ex\xE1menes con los filtros seleccionados")) : /*#__PURE__*/React.createElement("div", {
      className: "space-y-3 pb-6"
    }, filterExams(selectedMascota.exams).sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    }).map(function (exam) {
      return /*#__PURE__*/React.createElement("div", {
        key: exam.id,
        onClick: function onClick() {
          return exam.pdfData && setSelectedExam(exam);
        },
        className: "bg-white rounded-xl p-4 shadow hover:shadow-lg cursor-pointer transition-all ".concat(exam.seen === false ? 'border-l-4 border-red-500' : '')
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-4"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-12 h-12 rounded-xl flex items-center justify-center ".concat(exam.seen === false ? 'bg-red-100' : 'bg-purple-100')
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-file-pdf text-xl ".concat(exam.seen === false ? 'text-red-600' : 'text-purple-600')
      })), /*#__PURE__*/React.createElement("div", {
        className: "flex-1"
      }, /*#__PURE__*/React.createElement("p", {
        className: "font-semibold text-gray-800"
      }, exam.type), /*#__PURE__*/React.createElement("p", {
        className: "text-sm text-gray-500"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-calendar mr-1"
      }), new Date(exam.date).toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }))), exam.seen === false && /*#__PURE__*/React.createElement("span", {
        className: "bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold"
      }, "NUEVO"), /*#__PURE__*/React.createElement("div", {
        className: "w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-eye text-purple-600"
      }))));
    })))), !selectedExam && !viewingInvoice && !currentExamForPet && !viewingOrderTracking && medicoView === 'resultados' && /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col h-full -mx-6 -mt-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-shrink-0 bg-gray-100 shadow-md border-b border-gray-300 p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 px-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-medical text-purple-500 text-lg"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-purple-600 font-semibold"
    }, "Resultados"), /*#__PURE__*/React.createElement("span", {
      className: "bg-purple-500 text-white text-xs px-2 py-0.5 rounded-full"
    }, completedOrders.length)), /*#__PURE__*/React.createElement("div", {
      className: "relative flex-1"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
    }), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: resultadosSearch,
      onChange: function onChange(e) {
        return setResultadosSearch(e.target.value);
      },
      placeholder: "Buscar por paciente o examen...",
      className: "w-full h-10 pl-11 pr-10 rounded-full border border-gray-300 focus:border-purple-500 focus:outline-none bg-white text-sm"
    }), resultadosSearch && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setResultadosSearch('');
      },
      className: "absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-times"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-xs text-gray-500"
    }, "Filtrar por:"), /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement("select", {
      value: resultadosFilterDay,
      onChange: function onChange(e) {
        return setResultadosFilterDay(e.target.value);
      },
      className: "h-10 w-24 pl-4 pr-8 rounded-full bg-white border border-gray-300 text-sm focus:border-purple-500 appearance-none cursor-pointer focus:outline-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "D\xEDa"), _toConsumableArray(Array(31)).map(function (_, i) {
      return /*#__PURE__*/React.createElement("option", {
        key: i + 1,
        value: String(i + 1).padStart(2, '0')
      }, i + 1);
    })), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none"
    })), /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement("select", {
      value: resultadosFilterMonth,
      onChange: function onChange(e) {
        return setResultadosFilterMonth(e.target.value);
      },
      className: "h-10 w-28 pl-4 pr-8 rounded-full bg-white border border-gray-300 text-sm focus:border-purple-500 appearance-none cursor-pointer focus:outline-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Mes"), ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'].map(function (m, i) {
      return /*#__PURE__*/React.createElement("option", {
        key: i,
        value: String(i + 1).padStart(2, '0')
      }, m);
    })), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none"
    })), /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement("select", {
      value: resultadosFilterYear,
      onChange: function onChange(e) {
        return setResultadosFilterYear(e.target.value);
      },
      className: "h-10 w-28 pl-4 pr-8 rounded-full bg-white border border-gray-300 text-sm focus:border-purple-500 appearance-none cursor-pointer focus:outline-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "A\xF1o"), ['2026', '2025', '2024', '2023'].map(function (y) {
      return /*#__PURE__*/React.createElement("option", {
        key: y,
        value: y
      }, y);
    })), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none"
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 overflow-y-auto p-6"
    }, function () {
      // Filtrar resultados
      var filtered = completedOrders;
      if (resultadosSearch) {
        filtered = filtered.filter(function (order) {
          return order.items.some(function (item) {
            return item.pet.name.toLowerCase().includes(resultadosSearch.toLowerCase()) || item.exam.name.toLowerCase().includes(resultadosSearch.toLowerCase());
          });
        });
      }
      if (resultadosFilterDay || resultadosFilterMonth || resultadosFilterYear) {
        filtered = filtered.filter(function (order) {
          var date = new Date(order.completedAt);
          var day = String(date.getDate()).padStart(2, '0');
          var month = String(date.getMonth() + 1).padStart(2, '0');
          var year = String(date.getFullYear());
          if (resultadosFilterDay && day !== resultadosFilterDay) return false;
          if (resultadosFilterMonth && month !== resultadosFilterMonth) return false;
          if (resultadosFilterYear && year !== resultadosFilterYear) return false;
          return true;
        });
      }
      if (filtered.length === 0) {
        return /*#__PURE__*/React.createElement("div", {
          className: "bg-white rounded-xl p-8 text-center shadow"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas fa-inbox text-4xl text-gray-300 mb-2"
        }), /*#__PURE__*/React.createElement("p", {
          className: "text-gray-500"
        }, "No hay resultados"));
      }
      return /*#__PURE__*/React.createElement("div", {
        className: "grid grid-cols-2 gap-4 pb-6"
      }, filtered.map(function (order) {
        return /*#__PURE__*/React.createElement("div", {
          key: order.id,
          onClick: function onClick() {
            var _pet$exams2;
            var pet = petsOrPatients.find(function (p) {
              var _order$items$7;
              return p.id === ((_order$items$7 = order.items[0]) === null || _order$items$7 === void 0 ? void 0 : _order$items$7.pet.id);
            });
            var exam = pet === null || pet === void 0 || (_pet$exams2 = pet.exams) === null || _pet$exams2 === void 0 ? void 0 : _pet$exams2.find(function (e) {
              return e.orderId === order.id;
            });
            if (exam !== null && exam !== void 0 && exam.pdfData) setSelectedExam(exam);
          },
          className: "bg-white rounded-xl p-4 shadow hover:shadow-lg cursor-pointer transition-all"
        }, /*#__PURE__*/React.createElement("div", {
          className: "flex items-center justify-between mb-2"
        }, /*#__PURE__*/React.createElement("span", {
          className: "text-xs text-gray-500"
        }, new Date(order.completedAt).toLocaleDateString('es-ES', {
          day: 'numeric',
          month: 'long'
        }))), order.items.map(function (item, idx) {
          return /*#__PURE__*/React.createElement("div", {
            key: idx,
            className: "flex items-center gap-3"
          }, /*#__PURE__*/React.createElement("span", {
            className: "text-2xl"
          }, item.pet.photo), /*#__PURE__*/React.createElement("div", {
            className: "flex-1"
          }, /*#__PURE__*/React.createElement("p", {
            className: "font-medium text-gray-800"
          }, getPetFullName(item.pet)), /*#__PURE__*/React.createElement("p", {
            className: "text-sm text-gray-500"
          }, item.exam.name)), /*#__PURE__*/React.createElement("div", {
            className: "w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center"
          }, /*#__PURE__*/React.createElement("i", {
            className: "fas fa-eye text-purple-600 text-sm"
          })));
        }));
      }));
    }())), !selectedExam && !viewingInvoice && !currentExamForPet && !viewingOrderTracking && medicoView === 'facturacion' && /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col h-full -mx-6 -mt-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-shrink-0 bg-gray-100 shadow-md border-b border-gray-300 p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 px-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-invoice-dollar text-amber-500 text-lg"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-amber-600 font-semibold"
    }, "Facturaci\xF3n"), /*#__PURE__*/React.createElement("span", {
      className: "bg-amber-500 text-white text-xs px-2 py-0.5 rounded-full"
    }, completedOrders.filter(function (o) {
      return o.invoicePdf;
    }).length)), /*#__PURE__*/React.createElement("div", {
      className: "relative flex-1"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
    }), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: facturacionSearch,
      onChange: function onChange(e) {
        return setFacturacionSearch(e.target.value);
      },
      placeholder: "Buscar por paciente...",
      className: "w-full h-10 pl-11 pr-10 rounded-full border border-gray-300 focus:border-amber-500 focus:outline-none bg-white text-sm"
    }), facturacionSearch && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setFacturacionSearch('');
      },
      className: "absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-times"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-xs text-gray-500"
    }, "Filtrar por:"), /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement("select", {
      value: facturacionFilterDay,
      onChange: function onChange(e) {
        return setFacturacionFilterDay(e.target.value);
      },
      className: "h-10 w-24 pl-4 pr-8 rounded-full bg-white border border-gray-300 text-sm focus:border-amber-500 appearance-none cursor-pointer focus:outline-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "D\xEDa"), _toConsumableArray(Array(31)).map(function (_, i) {
      return /*#__PURE__*/React.createElement("option", {
        key: i + 1,
        value: String(i + 1).padStart(2, '0')
      }, i + 1);
    })), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none"
    })), /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement("select", {
      value: facturacionFilterMonth,
      onChange: function onChange(e) {
        return setFacturacionFilterMonth(e.target.value);
      },
      className: "h-10 w-28 pl-4 pr-8 rounded-full bg-white border border-gray-300 text-sm focus:border-amber-500 appearance-none cursor-pointer focus:outline-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Mes"), ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'].map(function (m, i) {
      return /*#__PURE__*/React.createElement("option", {
        key: i,
        value: String(i + 1).padStart(2, '0')
      }, m);
    })), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none"
    })), /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement("select", {
      value: facturacionFilterYear,
      onChange: function onChange(e) {
        return setFacturacionFilterYear(e.target.value);
      },
      className: "h-10 w-28 pl-4 pr-8 rounded-full bg-white border border-gray-300 text-sm focus:border-amber-500 appearance-none cursor-pointer focus:outline-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "A\xF1o"), ['2026', '2025', '2024', '2023'].map(function (y) {
      return /*#__PURE__*/React.createElement("option", {
        key: y,
        value: y
      }, y);
    })), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none"
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 overflow-y-auto p-6"
    }, function () {
      // Filtrar facturas
      var invoices = completedOrders.filter(function (o) {
        return o.invoicePdf;
      });
      if (facturacionSearch) {
        invoices = invoices.filter(function (order) {
          return order.items.some(function (item) {
            return item.pet.name.toLowerCase().includes(facturacionSearch.toLowerCase());
          });
        });
      }
      if (facturacionFilterDay || facturacionFilterMonth || facturacionFilterYear) {
        invoices = invoices.filter(function (order) {
          var date = new Date(order.completedAt);
          var day = String(date.getDate()).padStart(2, '0');
          var month = String(date.getMonth() + 1).padStart(2, '0');
          var year = String(date.getFullYear());
          if (facturacionFilterDay && day !== facturacionFilterDay) return false;
          if (facturacionFilterMonth && month !== facturacionFilterMonth) return false;
          if (facturacionFilterYear && year !== facturacionFilterYear) return false;
          return true;
        });
      }
      if (invoices.length === 0) {
        return /*#__PURE__*/React.createElement("div", {
          className: "bg-white rounded-xl p-8 text-center shadow"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas fa-receipt text-4xl text-gray-300 mb-2"
        }), /*#__PURE__*/React.createElement("p", {
          className: "text-gray-500"
        }, "No hay comprobantes"));
      }
      return /*#__PURE__*/React.createElement("div", {
        className: "grid grid-cols-2 gap-4 pb-6"
      }, invoices.map(function (order) {
        return /*#__PURE__*/React.createElement("div", {
          key: order.id,
          onClick: function onClick() {
            return setViewingInvoice(order);
          },
          className: "bg-white rounded-xl p-4 shadow hover:shadow-lg cursor-pointer transition-all"
        }, /*#__PURE__*/React.createElement("div", {
          className: "flex items-center gap-3"
        }, /*#__PURE__*/React.createElement("div", {
          className: "w-12 h-12 rounded-xl flex items-center justify-center ".concat(order.documentType === 'boleta' ? 'bg-cyan-100' : 'bg-amber-100')
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas ".concat(order.documentType === 'boleta' ? 'fa-receipt text-cyan-600' : 'fa-file-invoice text-amber-600', " text-xl")
        })), /*#__PURE__*/React.createElement("div", {
          className: "flex-1"
        }, /*#__PURE__*/React.createElement("p", {
          className: "font-medium text-gray-800"
        }, order.documentType === 'boleta' ? 'Boleta' : 'Factura'), /*#__PURE__*/React.createElement("p", {
          className: "text-sm text-gray-500"
        }, getPetFullName(order.items[0].pet), " - ", order.items[0].exam.name), /*#__PURE__*/React.createElement("p", {
          className: "text-xs text-gray-400"
        }, new Date(order.completedAt).toLocaleDateString('es-ES'))), /*#__PURE__*/React.createElement("div", {
          className: "w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas fa-eye text-amber-600 text-sm"
        }))));
      }));
    }())), showOrderSummary && /*#__PURE__*/React.createElement("div", {
      className: "modal-overlay flex items-center justify-center p-4",
      onClick: function onClick(e) {
        if (e.target === e.currentTarget) setShowOrderSummary(false);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-3xl w-full max-w-3xl shadow-2xl flex flex-col",
      style: {
        height: '680px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "px-6 py-4 border-b flex items-center justify-between flex-shrink-0"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-xl font-bold text-gray-800"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-clipboard-list text-cyan-500 mr-2"
    }), "Resumen del Pedido"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowOrderSummary(false);
      },
      className: "w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-500 transition-colors"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-times"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 flex flex-col lg:flex-row min-h-0"
    }, /*#__PURE__*/React.createElement("div", {
      className: "lg:w-1/2 p-6 lg:border-r overflow-y-auto"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-vials text-cyan-500 mr-2"
    }), "Ex\xE1menes (", cart.length, ")"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, cart.map(function (item) {
      var _item$address2, _item$address3, _item$address4;
      return /*#__PURE__*/React.createElement("div", {
        key: item.exam.id,
        className: "bg-gray-50 rounded-xl p-4"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-start justify-between mb-2"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-3 flex-1 min-w-0"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-10 h-10 ".concat(item.exam.bg, " rounded-lg flex items-center justify-center flex-shrink-0")
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas ".concat(item.exam.icon, " ").concat(item.exam.color)
      })), /*#__PURE__*/React.createElement("div", {
        className: "min-w-0"
      }, /*#__PURE__*/React.createElement("span", {
        className: "font-medium text-gray-800 text-sm"
      }, item.exam.name), item.exam.subtitle && /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-500 truncate"
      }, item.exam.subtitle))), /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-3 flex-shrink-0 ml-3"
      }, item.exam.price && /*#__PURE__*/React.createElement("span", {
        className: "text-cyan-600 font-bold text-sm whitespace-nowrap"
      }, "S/ ", item.exam.price), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return removeFromCart(item.exam.id);
        },
        className: "text-red-400 hover:text-red-600"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-trash text-sm"
      })))), /*#__PURE__*/React.createElement("div", {
        className: "border-t pt-2 mt-2 space-y-1.5"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-2"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-lg"
      }, item.pet.photo), /*#__PURE__*/React.createElement("span", {
        className: "text-sm text-gray-600"
      }, getPetFullName(item.pet))), /*#__PURE__*/React.createElement("div", {
        className: "flex items-start gap-2 text-xs text-gray-500"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-map-marker-alt mt-0.5 text-cyan-500"
      }), /*#__PURE__*/React.createElement("span", null, (_item$address2 = item.address) === null || _item$address2 === void 0 ? void 0 : _item$address2.name, ": ", (_item$address3 = item.address) === null || _item$address3 === void 0 ? void 0 : _item$address3.address, ", ", (_item$address4 = item.address) === null || _item$address4 === void 0 ? void 0 : _item$address4.district))));
    }))), /*#__PURE__*/React.createElement("div", {
      className: "lg:w-1/2 p-6"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-cog text-gray-400 mr-2"
    }), "Detalles"), /*#__PURE__*/React.createElement("div", {
      className: "bg-gray-50 rounded-xl p-4 mb-4"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm font-medium text-gray-700 mb-3"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-invoice-dollar text-amber-600 mr-2"
    }), "Tipo de comprobante"), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 gap-2"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setInvoiceType('boleta');
      },
      className: "py-2.5 px-3 rounded-xl text-sm font-medium transition-all ".concat(invoiceType === 'boleta' ? 'bg-cyan-500 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:border-cyan-300')
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-receipt mr-1.5"
    }), "Boleta"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setInvoiceType('factura');
      },
      className: "py-2.5 px-3 rounded-xl text-sm font-medium transition-all ".concat(invoiceType === 'factura' ? 'bg-amber-500 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:border-amber-300')
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-invoice mr-1.5"
    }), "Factura"))), /*#__PURE__*/React.createElement("div", {
      className: "bg-gray-50 rounded-xl p-4 mb-4"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm font-medium text-gray-700 mb-3"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-comment-alt text-cyan-500 mr-2"
    }), "Comentarios"), /*#__PURE__*/React.createElement("textarea", {
      value: orderComment,
      onChange: function onChange(e) {
        return setOrderComment(e.target.value);
      },
      placeholder: "Ej: Recoger muestra despu\xE9s de las 10am, tocar timbre 2 veces...",
      className: "w-full px-3 py-2.5 rounded-xl bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:border-cyan-500 focus:outline-none text-sm resize-none",
      rows: "3",
      maxLength: "500"
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400 mt-1 text-right"
    }, orderComment.length, "/500")), renderTermsCheckbox(), /*#__PURE__*/React.createElement("button", {
      onClick: submitOrder,
      disabled: !termsAccepted,
      className: "w-full py-3.5 rounded-xl font-semibold transition-all ".concat(termsAccepted ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white" : "bg-gray-200 text-gray-400 cursor-not-allowed")
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-paper-plane mr-2"
    }), "Solicitar Pedido")))))))));
  }

  // =====================================================
  // VISTA PARA DUEÑOS - Mantener interfaz actual
  // =====================================================
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen bg-gray-100"
  }, renderTermsModal(), renderDuenoHeader(), renderDuenoSidebar(), duenoView === 'config' ? /*#__PURE__*/React.createElement("div", {
    className: "app-content-breadcrumb lg:ml-56 lg:pt-16"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-md mx-auto px-4 py-5"
  }, !showEditProfile ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl shadow-lg p-6"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-2xl font-bold text-gray-800 mb-6"
  }, "Configuraci\xF3n"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 p-4 bg-gray-50 rounded-xl mb-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold"
  }, freshUser.name.charAt(0)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "font-semibold text-gray-800"
  }, freshUser.name, " ", freshUser.lastName || ''), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-500"
  }, "Cliente"))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: openEditProfile,
    className: "w-full flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors text-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-user text-cyan-600"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "font-medium text-gray-800"
  }, "Mi Perfil"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-500"
  }, "Editar informaci\xF3n de contacto")), /*#__PURE__*/React.createElement("i", {
    className: "fas fa-chevron-right text-gray-400 ml-auto"
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: handleLogout,
    className: "w-full mt-6 py-4 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 font-semibold transition-colors flex items-center justify-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-sign-out-alt"
  }), " Cerrar Sesi\xF3n")), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setDuenoView('main');
    },
    className: "lg:hidden mt-4 w-full py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-medium hover:bg-gray-50"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-arrow-left mr-2"
  }), "Volver")) : /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl shadow-lg p-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 mb-6"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowEditProfile(false);
    },
    className: "w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-arrow-left text-gray-600"
  })), /*#__PURE__*/React.createElement("h1", {
    className: "text-xl font-bold text-gray-800"
  }, "Mi Perfil")), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center mb-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold"
  }, editProfile.name.charAt(0) || freshUser.name.charAt(0))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "Nombre", /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-amber-600 ml-2"
  }, getNameChangeText())), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: editProfile.name,
    onChange: function onChange(e) {
      return setEditProfile(_objectSpread(_objectSpread({}, editProfile), {}, {
        name: e.target.value
      }));
    },
    className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
    placeholder: "Tu nombre"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "Tel\xE9fono de contacto"), /*#__PURE__*/React.createElement("input", {
    type: "tel",
    value: editProfile.phone,
    onChange: function onChange(e) {
      return setEditProfile(_objectSpread(_objectSpread({}, editProfile), {}, {
        phone: e.target.value
      }));
    },
    className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
    placeholder: "999 888 777"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: editProfile.email,
    onChange: function onChange(e) {
      return setEditProfile(_objectSpread(_objectSpread({}, editProfile), {}, {
        email: e.target.value
      }));
    },
    className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
    placeholder: "tu@email.com"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "Direcci\xF3n"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: editProfile.address,
    onChange: function onChange(e) {
      return setEditProfile(_objectSpread(_objectSpread({}, editProfile), {}, {
        address: e.target.value
      }));
    },
    className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
    placeholder: "Tu direcci\xF3n"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "Distrito"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: editProfile.district,
    onChange: function onChange(e) {
      return setEditProfile(_objectSpread(_objectSpread({}, editProfile), {}, {
        district: e.target.value
      }));
    },
    className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
    placeholder: "San Isidro"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return saveProfile(editProfile.name !== freshUser.name);
    },
    className: "w-full py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg mt-4"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-save mr-2"
  }), "Guardar Cambios"))))) : /*#__PURE__*/React.createElement("div", {
    className: "app-content-dueno lg:ml-56"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-5xl mx-auto px-4 py-5 lg:px-6"
  }, viewingOrderTracking && function (_order$items$8, _order$items$9) {
    var order = (database.orders || []).find(function (o) {
      return o.id === viewingOrderTracking.id;
    }) || viewingOrderTracking;
    var orderDate = new Date(order.date);
    var formatDT = function formatDT(date) {
      if (!date) return '';
      var d = new Date(date);
      return d.toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long'
      }) + ' - ' + d.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit'
      });
    };
    var steps = [{
      id: 'pending',
      label: 'Pedido realizado',
      subtitle: 'Tu pedido ha sido registrado',
      icon: 'fa-clipboard-check',
      date: order.date
    }, {
      id: 'confirmed',
      label: 'Pedido confirmado',
      subtitle: 'El laboratorio confirmó tu pedido',
      icon: 'fa-check-circle',
      date: order.date
    }, {
      id: 'moto_en_camino',
      label: 'Motorizado en camino',
      subtitle: 'El motorizado va hacia tu ubicación',
      icon: 'fa-motorcycle',
      date: ['moto_en_camino', 'moto_arrived', 'sample_received', 'arrived_at_lab', 'processing', 'results_uploaded', 'completed'].includes(order.status) ? order.statusUpdatedAt : null
    }, {
      id: 'moto_arrived',
      label: 'Motorizado llegó',
      subtitle: 'Por favor entrega la muestra',
      icon: 'fa-map-marker-alt',
      date: ['moto_arrived', 'sample_received', 'arrived_at_lab', 'processing', 'results_uploaded', 'completed'].includes(order.status) ? order.statusUpdatedAt : null
    }, {
      id: 'sample_received',
      label: 'Muestra recogida',
      subtitle: 'Tu muestra va camino al laboratorio',
      icon: 'fa-vial',
      date: ['sample_received', 'arrived_at_lab', 'processing', 'results_uploaded', 'completed'].includes(order.status) ? order.statusUpdatedAt : null
    }, {
      id: 'arrived_at_lab',
      label: 'En laboratorio',
      subtitle: 'La muestra llegó al laboratorio',
      icon: 'fa-flask',
      date: ['arrived_at_lab', 'processing', 'results_uploaded', 'completed'].includes(order.status) ? order.statusUpdatedAt : null
    }, {
      id: 'processing',
      label: 'Procesando muestra',
      subtitle: 'Estamos analizando tu muestra',
      icon: 'fa-cog',
      date: ['processing', 'results_uploaded', 'completed'].includes(order.status) ? order.statusUpdatedAt : null
    }, {
      id: 'results_uploaded',
      label: 'Resultados listos',
      subtitle: 'Realiza el pago para ver los resultados',
      icon: 'fa-file-medical',
      date: ['results_uploaded', 'completed'].includes(order.status) ? order.statusUpdatedAt : null
    }, {
      id: 'completed',
      label: 'Entregado',
      subtitle: '¡Ya puedes ver tus resultados!',
      icon: 'fa-check-double',
      date: order.status === 'completed' ? order.completedAt : null
    }];
    var statusOrder = ['pending', 'confirmed', 'moto_en_camino', 'moto_arrived', 'sample_received', 'arrived_at_lab', 'processing', 'results_uploaded', 'completed'];
    var currentIndex = statusOrder.indexOf(order.status === 'pending' ? 'confirmed' : order.status);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setViewingOrderTracking(null);
      },
      className: "flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-4"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-sm font-medium"
    }, "Volver a resultados")), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col lg:flex-row gap-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "lg:w-1/2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow-lg p-5"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-bold text-gray-800 mb-4"
    }, "Estado del pedido"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-0"
    }, steps.map(function (step, index) {
      var isCompleted = index <= currentIndex;
      var isLast = index === steps.length - 1;
      return /*#__PURE__*/React.createElement("div", {
        key: step.id,
        className: "flex gap-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex flex-col items-center"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ".concat(isCompleted ? 'bg-cyan-500 text-white' : 'bg-gray-200 text-gray-400')
      }, isCompleted ? /*#__PURE__*/React.createElement("i", {
        className: "fas fa-check text-xs"
      }) : /*#__PURE__*/React.createElement("i", {
        className: "fas ".concat(step.icon, " text-xs")
      })), !isLast && /*#__PURE__*/React.createElement("div", {
        className: "w-0.5 h-10 ".concat(index < currentIndex ? 'bg-cyan-500' : 'bg-gray-200')
      })), /*#__PURE__*/React.createElement("div", {
        className: "flex-1 flex items-start justify-between ".concat(!isLast ? 'pb-3' : '')
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
        className: "font-medium text-sm ".concat(isCompleted ? 'text-gray-800' : 'text-gray-400')
      }, step.label), /*#__PURE__*/React.createElement("p", {
        className: "text-xs ".concat(isCompleted ? 'text-gray-500' : 'text-gray-400')
      }, step.subtitle)), isCompleted && step.date && /*#__PURE__*/React.createElement("p", {
        className: "text-cyan-600 text-xs whitespace-nowrap ml-2"
      }, formatDT(step.date))));
    })))), /*#__PURE__*/React.createElement("div", {
      className: "lg:w-1/2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow-lg p-5"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-bold text-gray-800 mb-3"
    }, "Detalle del pedido"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-2"
    }, order.items.map(function (item, idx) {
      return /*#__PURE__*/React.createElement("div", {
        key: idx,
        className: "flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-10 h-10 ".concat(item.exam.bg, " rounded-lg flex items-center justify-center")
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas ".concat(item.exam.icon, " ").concat(item.exam.color)
      })), /*#__PURE__*/React.createElement("div", {
        className: "flex-1"
      }, /*#__PURE__*/React.createElement("p", {
        className: "font-medium text-gray-800 text-sm"
      }, item.exam.name), /*#__PURE__*/React.createElement("p", {
        className: "text-gray-500 text-xs"
      }, item.pet.photo, " ", getPetFullName(item.pet))));
    })), /*#__PURE__*/React.createElement("div", {
      className: "mt-3 pt-3 border-t border-gray-100"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-start gap-2 text-sm"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-map-marker-alt text-cyan-500 mt-0.5"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500 text-xs"
    }, "Direcci\xF3n de recojo"), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-800"
    }, ((_order$items$8 = order.items[0]) === null || _order$items$8 === void 0 || (_order$items$8 = _order$items$8.address) === null || _order$items$8 === void 0 ? void 0 : _order$items$8.address) || 'Sin dirección', ", ", ((_order$items$9 = order.items[0]) === null || _order$items$9 === void 0 || (_order$items$9 = _order$items$9.address) === null || _order$items$9 === void 0 ? void 0 : _order$items$9.district) || '')))), order.comment && /*#__PURE__*/React.createElement("div", {
      className: "mt-3 pt-3 border-t border-gray-100"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-start gap-2 text-sm"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-comment-alt text-cyan-500 mt-0.5"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500 text-xs"
    }, "Comentario"), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-800 text-sm"
    }, order.comment))))))));
  }(), !viewingOrderTracking && selectedPet && activeTab === 'resultados' && function () {
    var currentPet = petsOrPatients.find(function (p) {
      return p.id === selectedPet.id;
    }) || selectedPet;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setSelectedPet(null);
      },
      className: "flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-4"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-sm font-medium"
    }, "Volver a mascotas")), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow-lg p-6 mb-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-5xl"
    }, currentPet.photo), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      className: "text-2xl font-bold text-gray-800"
    }, currentPet.name), currentPet.owner && /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500 text-sm"
    }, "Due\xF1o: ", currentPet.owner), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap gap-2 mt-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "bg-cyan-100 text-cyan-700 px-2 py-0.5 rounded-full text-xs"
    }, currentPet.breed), /*#__PURE__*/React.createElement("span", {
      className: "bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full text-xs"
    }, formatAge(currentPet)), /*#__PURE__*/React.createElement("span", {
      className: "bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full text-xs"
    }, currentPet.sex))))), /*#__PURE__*/React.createElement("h2", {
      className: "text-lg font-bold text-gray-800 mb-4"
    }, "Resultados"), currentPet.exams.length === 0 ? /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl p-10 text-center shadow"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-folder-open text-4xl text-gray-300 mb-2"
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500"
    }, "No hay resultados disponibles")) : /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, currentPet.exams.map(function (exam) {
      return /*#__PURE__*/React.createElement("div", {
        key: exam.id,
        onClick: function onClick() {
          return markExamAsSeen(exam, currentPet);
        },
        className: "bg-white rounded-xl p-4 shadow cursor-pointer hover:shadow-lg flex items-center justify-between ".concat(exam.seen === false ? 'border-l-4 border-red-500' : '')
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-10 h-10 rounded-xl flex items-center justify-center ".concat(exam.seen === false ? 'bg-red-100' : 'bg-cyan-100')
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-file-pdf ".concat(exam.seen === false ? 'text-red-600' : 'text-cyan-600')
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
        className: "font-semibold text-gray-800"
      }, exam.type), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-500"
      }, new Date(exam.date).toLocaleDateString('es-ES'))), exam.seen === false && /*#__PURE__*/React.createElement("span", {
        className: "bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-bold ml-2"
      }, "NUEVO")), /*#__PURE__*/React.createElement("i", {
        className: "fas fa-chevron-right text-gray-400"
      }));
    })));
  }(), !viewingOrderTracking && !selectedPet && currentExamForPet && function () {
    var userAddresses = freshUser.addresses || [];
    var backHandler = function backHandler() {
      if (showTomaMuestraStep) {
        setShowTomaMuestraStep(false);
        setPendingOrderAddress(null);
      } else if (showAddressSelection && !showNewAddressForm) {
        setShowAddressSelection(false);
        setSelectedPetForOrder(null);
      } else if (showNewAddressForm) {
        setShowNewAddressForm(false);
      } else if (showNewPetForm) {
        setShowNewPetForm(false);
      } else {
        setCurrentExamForPet(null);
        removeFromPending(currentExamForPet.id);
      }
    };
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      onClick: backHandler,
      className: "flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-4"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-sm font-medium"
    }, "Volver")), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow p-4 mb-4 flex items-center gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-12 h-12 ".concat(currentExamForPet.bg, " rounded-xl flex items-center justify-center")
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas ".concat(currentExamForPet.icon, " ").concat(currentExamForPet.color, " text-xl")
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex-1"
    }, /*#__PURE__*/React.createElement("p", {
      className: "font-bold text-gray-800"
    }, currentExamForPet.name), currentExamForPet.subtitle && /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-500"
    }, currentExamForPet.subtitle), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-cyan-600 mt-1"
    }, showAddressSelection ? "".concat(selectedPetForOrder === null || selectedPetForOrder === void 0 ? void 0 : selectedPetForOrder.name, " - Selecciona direcci\xF3n") : "Selecciona ".concat(entityName)))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 mb-4"
    }, [{
      n: 1,
      l: 'Mascota',
      done: showAddressSelection
    }, {
      n: 2,
      l: 'Dirección',
      done: false
    }].map(function (s, i) {
      return /*#__PURE__*/React.createElement(React.Fragment, {
        key: i
      }, i > 0 && /*#__PURE__*/React.createElement("div", {
        className: "flex-1 h-0.5 ".concat(s.done || showAddressSelection ? 'bg-cyan-500' : 'bg-gray-200')
      }), /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-2"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ".concat(i === 0 && !showAddressSelection || i === 1 && showAddressSelection ? 'bg-cyan-500 text-white' : s.done ? 'bg-cyan-500 text-white' : 'bg-gray-200 text-gray-400')
      }, s.done ? '✓' : s.n), /*#__PURE__*/React.createElement("span", {
        className: "text-xs font-medium ".concat(i === 0 && !showAddressSelection || i === 1 && showAddressSelection ? 'text-cyan-600' : 'text-gray-400')
      }, s.l)));
    })), !showAddressSelection ? /*#__PURE__*/React.createElement(React.Fragment, null, !showNewPetForm ? /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, petsOrPatients.map(function (pet) {
      return /*#__PURE__*/React.createElement("div", {
        key: pet.id,
        onClick: function onClick() {
          return assignPetToExam(pet);
        },
        className: "bg-white rounded-2xl p-4 shadow cursor-pointer hover:shadow-lg hover:border-cyan-500 border-2 border-transparent transition-all"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-4"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-4xl"
      }, pet.photo), /*#__PURE__*/React.createElement("div", {
        className: "flex-1"
      }, /*#__PURE__*/React.createElement("h3", {
        className: "font-bold text-gray-800"
      }, getPetFullName(pet)), /*#__PURE__*/React.createElement("p", {
        className: "text-gray-500 text-sm"
      }, pet.breed, " \u2022 ", formatAge(pet), " \u2022 ", pet.sex)), /*#__PURE__*/React.createElement("i", {
        className: "fas fa-chevron-right text-gray-400"
      })));
    }), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowNewPetForm(true);
      },
      className: "w-full py-3 rounded-xl border-2 border-dashed border-gray-300 text-gray-500 hover:border-cyan-400 hover:text-cyan-600 transition-all"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-plus mr-2"
    }), "Agregar nueva mascota")) : /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow p-6"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold text-gray-800 mb-4"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-plus-circle mr-2 text-cyan-500"
    }), "Nueva Mascota"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-4"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Nombre"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newPet.name,
      onChange: function onChange(e) {
        return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
          name: e.target.value
        }));
      },
      className: "w-full h-12 px-4 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "Nombre del animal"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Especie"), /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement("select", {
      value: newPet.animalType,
      onChange: function onChange(e) {
        return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
          animalType: e.target.value
        }));
      },
      className: "w-full h-12 px-4 pr-10 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none bg-white appearance-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Seleccionar"), /*#__PURE__*/React.createElement("option", {
      value: "perro"
    }, "\uD83D\uDC15 Perro"), /*#__PURE__*/React.createElement("option", {
      value: "gato"
    }, "\uD83D\uDC08 Gato"), /*#__PURE__*/React.createElement("option", {
      value: "ave"
    }, "\uD83E\uDD9C Ave"), /*#__PURE__*/React.createElement("option", {
      value: "conejo"
    }, "\uD83D\uDC30 Conejo"), /*#__PURE__*/React.createElement("option", {
      value: "otro"
    }, "\uD83D\uDC3E Otro")), /*#__PURE__*/React.createElement("div", {
      className: "absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-down text-xs"
    })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Raza"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newPet.breed,
      onChange: function onChange(e) {
        return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
          breed: e.target.value
        }));
      },
      className: "w-full h-12 px-4 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "Ej: Labrador, Persa..."
    })), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 gap-3"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Edad"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newPet.ageValue,
      onChange: function onChange(e) {
        return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
          ageValue: e.target.value.replace(/[^0-9]/g, "")
        }));
      },
      className: "w-full h-12 px-4 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "Ej: 3"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Unidad"), /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement("select", {
      value: newPet.ageUnit,
      onChange: function onChange(e) {
        return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
          ageUnit: e.target.value
        }));
      },
      className: "w-full h-12 px-4 pr-10 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none bg-white appearance-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: "a\xF1os"
    }, "A\xF1os"), /*#__PURE__*/React.createElement("option", {
      value: "meses"
    }, "Meses")), /*#__PURE__*/React.createElement("div", {
      className: "absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-down text-xs"
    }))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Sexo"), /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement("select", {
      value: newPet.sex,
      onChange: function onChange(e) {
        return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
          sex: e.target.value
        }));
      },
      className: "w-full h-12 px-4 pr-10 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none bg-white appearance-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Seleccionar"), /*#__PURE__*/React.createElement("option", {
      value: "Macho"
    }, "Macho"), /*#__PURE__*/React.createElement("option", {
      value: "Hembra"
    }, "Hembra")), /*#__PURE__*/React.createElement("div", {
      className: "absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-down text-xs"
    })))), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-3 pt-2"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowNewPetForm(false);
      },
      className: "flex-1 py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-semibold hover:bg-gray-50"
    }, "Cancelar"), /*#__PURE__*/React.createElement("button", {
      onClick: addNewPet,
      className: "flex-1 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-check mr-2"
    }), "Guardar"))))) : /*#__PURE__*/React.createElement(React.Fragment, null, showTomaMuestraStep && pendingOrderAddress ? /*#__PURE__*/React.createElement("div", {
      className: "space-y-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-emerald-50 border border-emerald-200 rounded-xl p-3 flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-map-marker-alt text-emerald-600"
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex-1"
    }, /*#__PURE__*/React.createElement("p", {
      className: "font-medium text-emerald-800"
    }, pendingOrderAddress.name), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-emerald-600"
    }, pendingOrderAddress.address, ", ", pendingOrderAddress.district)), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-check-circle text-emerald-500"
    })), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow p-5"
    }, /*#__PURE__*/React.createElement("p", {
      className: "font-bold text-gray-800 mb-1"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-syringe text-cyan-500 mr-2"
    }), "\xBFNecesitas toma de muestra a domicilio?"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-500 mb-4"
    }, "Un profesional ir\xE1 a tu domicilio a tomar la muestra de sangre de tu mascota."), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 gap-3"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return completeTomaMuestraStep(false);
      },
      className: "py-3.5 px-4 rounded-xl border-2 border-transparent bg-white shadow hover:shadow-lg hover:border-cyan-400 text-gray-700 font-medium transition-all flex items-center gap-3 cursor-pointer"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-box text-gray-500"
    })), /*#__PURE__*/React.createElement("div", {
      className: "text-left flex-1"
    }, /*#__PURE__*/React.createElement("p", {
      className: "font-semibold text-sm"
    }, "No, ya tengo la muestra"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400"
    }, "Solo necesito que la recojan"))), function () {
      var tmPrice = getTomaMuestraPrice(pendingOrderAddress.district, examTotal + ((currentExamForPet === null || currentExamForPet === void 0 ? void 0 : currentExamForPet.price) || 0));
      return /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return completeTomaMuestraStep(true);
        },
        className: "py-3.5 px-4 rounded-xl border-2 border-transparent bg-white shadow hover:shadow-lg hover:border-cyan-400 text-gray-700 font-medium transition-all flex items-center gap-3 cursor-pointer"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-syringe text-cyan-600"
      })), /*#__PURE__*/React.createElement("div", {
        className: "text-left flex-1"
      }, /*#__PURE__*/React.createElement("p", {
        className: "font-semibold text-sm"
      }, "S\xED, necesito toma de muestra"), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-400"
      }, tmPrice !== null ? "+S/ ".concat(tmPrice, " por el servicio a domicilio") : 'Consultar precio para tu distrito')));
    }()), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowTermsModal(true);
      },
      className: "w-full mt-3 py-2.5 bg-amber-50 border border-amber-300 rounded-xl text-amber-700 text-xs font-bold hover:bg-amber-100 flex items-center justify-center gap-1.5 transition-colors"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-exclamation-triangle"
    }), " Leer T\xE9rminos y Condiciones de toma de muestra"))) : !showNewAddressForm ? /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-600 mb-2"
    }, "Selecciona d\xF3nde recogeremos la muestra:"), userAddresses.map(function (addr, idx) {
      return /*#__PURE__*/React.createElement("div", {
        key: idx,
        onClick: function onClick() {
          return handleDuenoAddressSelect(addr);
        },
        className: "bg-white rounded-2xl p-4 shadow cursor-pointer hover:shadow-lg hover:border-cyan-500 border-2 border-transparent transition-all"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-map-marker-alt text-cyan-600"
      })), /*#__PURE__*/React.createElement("div", {
        className: "flex-1"
      }, /*#__PURE__*/React.createElement("p", {
        className: "font-bold text-gray-800"
      }, addr.name), /*#__PURE__*/React.createElement("p", {
        className: "text-gray-500 text-sm"
      }, addr.address), /*#__PURE__*/React.createElement("p", {
        className: "text-gray-400 text-xs"
      }, addr.district, " \u2022 Ref: ", addr.reference)), /*#__PURE__*/React.createElement("i", {
        className: "fas fa-chevron-right text-gray-400"
      })));
    }), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowNewAddressForm(true);
      },
      className: "w-full py-3 rounded-xl border-2 border-dashed border-gray-300 text-gray-500 hover:border-cyan-400 hover:text-cyan-600 transition-all"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-plus mr-2"
    }), "Agregar nueva direcci\xF3n")) : /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow p-6"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold text-gray-800 mb-4"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-map-marker-alt mr-2 text-cyan-500"
    }), "Nueva Direcci\xF3n"), /*#__PURE__*/React.createElement("button", {
      onClick: getMyLocation,
      disabled: gettingLocation,
      className: "w-full mb-4 py-3 rounded-xl border-2 border-dashed border-cyan-300 bg-cyan-50 text-cyan-700 font-medium hover:bg-cyan-100 transition-colors flex items-center justify-center gap-2"
    }, gettingLocation ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-spinner fa-spin"
    }), "Obteniendo ubicaci\xF3n...") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-location-crosshairs"
    }), "Utilizar mi ubicaci\xF3n")), /*#__PURE__*/React.createElement("div", {
      className: "space-y-4"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Nombre de la direcci\xF3n *"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newAddress.name,
      onChange: function onChange(e) {
        return setNewAddress(_objectSpread(_objectSpread({}, newAddress), {}, {
          name: e.target.value
        }));
      },
      className: "w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none",
      placeholder: "Ej: Casa, Oficina"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Direcci\xF3n *"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newAddress.address,
      onChange: function onChange(e) {
        return setNewAddress(_objectSpread(_objectSpread({}, newAddress), {}, {
          address: e.target.value
        }));
      },
      className: "w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none",
      placeholder: "Av. / Calle / Jr. y n\xFAmero"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Distrito *"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newAddress.district,
      onChange: function onChange(e) {
        return setNewAddress(_objectSpread(_objectSpread({}, newAddress), {}, {
          district: e.target.value
        }));
      },
      className: "w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none",
      placeholder: "Ej: San Isidro"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Referencia (opcional)"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newAddress.reference,
      onChange: function onChange(e) {
        return setNewAddress(_objectSpread(_objectSpread({}, newAddress), {}, {
          reference: e.target.value
        }));
      },
      className: "w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none",
      placeholder: "Ej: Frente al parque"
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-3 pt-2"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setShowNewAddressForm(false);
        setNewAddress({
          name: '',
          address: '',
          district: '',
          reference: ''
        });
      },
      className: "flex-1 py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-semibold hover:bg-gray-50"
    }, "Cancelar"), /*#__PURE__*/React.createElement("button", {
      onClick: addNewAddress,
      className: "flex-1 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold"
    }, "Guardar y usar"))))));
  }(), !viewingOrderTracking && !(selectedPet && activeTab === 'resultados') && !currentExamForPet && /*#__PURE__*/React.createElement(React.Fragment, null, activeTab === 'pedidos' && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl font-bold text-gray-800 mb-1"
  }, "\xBFQu\xE9 necesita tu mascota?"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-500 text-sm"
  }, "Selecciona el servicio que mejor se adapte a tu situaci\xF3n")), (cart.length > 0 || pendingExams.length > 0) && /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 mb-4 text-xs text-gray-500"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-3 h-3 bg-emerald-500 rounded-full"
  }), " Seleccionado"), /*#__PURE__*/React.createElement("span", {
    className: "text-gray-400"
  }, "\u2022 Toca para deseleccionar")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 gap-4"
  }, paquetesDuenos.map(function (paquete) {
    var isInCart = cart.find(function (c) {
      return c.exam.id === paquete.id;
    });
    var isPending = pendingExams.find(function (e) {
      return e.id === paquete.id;
    });
    return /*#__PURE__*/React.createElement("div", {
      key: paquete.id,
      onClick: function onClick() {
        return handleExamClick(paquete);
      },
      className: "bg-white rounded-2xl p-4 cursor-pointer hover:shadow-lg transition-all shadow border-2 relative ".concat(isInCart ? 'border-emerald-500 bg-emerald-50' : isPending ? 'border-amber-400 bg-amber-50' : 'border-transparent hover:border-cyan-300')
    }, paquete.recomendado && /*#__PURE__*/React.createElement("span", {
      className: "absolute -top-2 right-3 bg-rose-500 text-white text-xs px-2 py-0.5 rounded-full font-medium"
    }, "\u2B50 Popular"), /*#__PURE__*/React.createElement("div", {
      className: "flex items-start gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-14 h-14 ".concat(paquete.bg, " rounded-2xl flex items-center justify-center flex-shrink-0")
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas ".concat(paquete.icon, " ").concat(paquete.color, " text-2xl")
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 min-w-0"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-gray-800 font-bold text-base mb-1"
    }, paquete.name), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500 text-sm leading-snug mb-2"
    }, paquete.description), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-xs text-gray-400 flex items-center gap-1"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-clock"
    }), " ", paquete.tiempo), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick(e) {
        e.stopPropagation();
        setSelectedPaqueteDetail(paquete);
      },
      className: "text-xs text-cyan-600 font-medium flex items-center gap-1 hover:text-cyan-700"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-info-circle"
    }), " Ver m\xE1s"))), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col items-end gap-2 flex-shrink-0"
    }, paquete.price && /*#__PURE__*/React.createElement("span", {
      className: "text-cyan-600 font-bold text-base whitespace-nowrap"
    }, "S/ ", paquete.price), (isInCart || isPending) && /*#__PURE__*/React.createElement("div", {
      className: "w-7 h-7 ".concat(isInCart ? 'bg-emerald-500' : 'bg-amber-400', " rounded-full flex items-center justify-center")
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas ".concat(isInCart ? 'fa-check' : 'fa-clock', " text-white text-sm")
    })))));
  })), /*#__PURE__*/React.createElement("div", {
    className: "mt-8"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowTechnicalExams(!showTechnicalExams);
    },
    className: "w-full flex items-center justify-between py-3 px-4 bg-gray-100 hover:bg-gray-200 rounded-2xl transition-colors"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-9 h-9 bg-gray-200 rounded-xl flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-flask-vial text-gray-600"
  })), /*#__PURE__*/React.createElement("div", {
    className: "text-left"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-gray-700 text-sm"
  }, "Ex\xE1menes Espec\xEDficos"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400"
  }, "Perfiles y ex\xE1menes individuales detallados"))), /*#__PURE__*/React.createElement("i", {
    className: "fas fa-chevron-".concat(showTechnicalExams ? 'up' : 'down', " text-gray-400 transition-transform")
  })), showTechnicalExams && /*#__PURE__*/React.createElement("div", {
    className: "mt-4 space-y-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-boxes-stacked text-blue-500"
  }), " Perfiles (Paquetes)"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-2"
  }, perfilesDuenos.map(function (exam) {
    var isInCart = cart.find(function (c) {
      return c.exam.id === exam.id;
    });
    var isPending = pendingExams.find(function (e) {
      return e.id === exam.id;
    });
    return /*#__PURE__*/React.createElement("div", {
      key: exam.id,
      onClick: function onClick() {
        return handleExamClick(exam);
      },
      className: "bg-white rounded-2xl p-3 cursor-pointer hover:shadow-lg transition-all shadow border-2 ".concat(isInCart ? 'border-emerald-500 bg-emerald-50' : isPending ? 'border-amber-400 bg-amber-50' : 'border-transparent hover:border-cyan-300', " flex items-center gap-3")
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-11 h-11 ".concat(exam.bg, " rounded-xl flex items-center justify-center flex-shrink-0")
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas ".concat(exam.icon, " ").concat(exam.color, " text-lg")
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 min-w-0"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-gray-800 font-semibold text-sm leading-tight"
    }, exam.name), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500 text-xs truncate"
    }, exam.subtitle)), exam.price && /*#__PURE__*/React.createElement("span", {
      className: "text-cyan-600 font-bold text-sm flex-shrink-0"
    }, "S/ ", exam.price), (isInCart || isPending) && /*#__PURE__*/React.createElement("div", {
      className: "w-6 h-6 ".concat(isInCart ? 'bg-emerald-500' : 'bg-amber-400', " rounded-full flex items-center justify-center flex-shrink-0")
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas ".concat(isInCart ? 'fa-check' : 'fa-clock', " text-white text-xs")
    })));
  }))), categoriasDuenos.map(function (cat) {
    return /*#__PURE__*/React.createElement("div", {
      key: cat.nombre
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas ".concat(cat.icon, " ").concat(cat.color)
    }), " ", cat.nombre), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 sm:grid-cols-2 gap-2"
    }, cat.examenes.map(function (exam) {
      var isInCart = cart.find(function (c) {
        return c.exam.id === exam.id;
      });
      var isPending = pendingExams.find(function (e) {
        return e.id === exam.id;
      });
      return /*#__PURE__*/React.createElement("div", {
        key: exam.id,
        onClick: function onClick() {
          return handleExamClick(exam);
        },
        className: "bg-white rounded-2xl p-3 cursor-pointer hover:shadow-lg transition-all shadow border-2 ".concat(isInCart ? 'border-emerald-500 bg-emerald-50' : isPending ? 'border-amber-400 bg-amber-50' : 'border-transparent hover:border-cyan-300', " flex items-center gap-3")
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-10 h-10 ".concat(exam.bg, " rounded-xl flex items-center justify-center flex-shrink-0")
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas ".concat(exam.icon, " ").concat(exam.color, " text-base")
      })), /*#__PURE__*/React.createElement("div", {
        className: "flex-1 min-w-0"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-gray-800 font-medium text-sm leading-tight"
      }, exam.name), exam.subtitle && /*#__PURE__*/React.createElement("p", {
        className: "text-gray-400 text-xs"
      }, exam.subtitle, exam.turnaround ? " \xB7 ".concat(exam.turnaround) : "")), exam.price && /*#__PURE__*/React.createElement("span", {
        className: "text-cyan-600 font-bold text-sm flex-shrink-0"
      }, "S/ ", exam.price), (isInCart || isPending) && /*#__PURE__*/React.createElement("div", {
        className: "w-6 h-6 ".concat(isInCart ? 'bg-emerald-500' : 'bg-amber-400', " rounded-full flex items-center justify-center flex-shrink-0")
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas ".concat(isInCart ? 'fa-check' : 'fa-clock', " text-white text-xs")
      })));
    })));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "lg:hidden mt-6 p-4 bg-cyan-50 rounded-2xl border border-cyan-200"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-cyan-800 text-sm mb-3"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-question-circle mr-2"
  }), /*#__PURE__*/React.createElement("strong", null, "\xBFNo sabes cu\xE1l elegir?")), /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/51954904248?text=Hola,%20necesito%20ayuda%20para%20elegir%20un%20examen%20para%20mi%20mascota",
    target: "_blank",
    className: "w-full bg-white hover:bg-gray-50 border-2 border-emerald-500 text-emerald-600 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fab fa-whatsapp text-xl"
  }), " Dale aqu\xED para que un asesor te contacte")), selectedPaqueteDetail && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 bg-black/50 flex items-end sm:items-center justify-center z-50 p-4",
    onClick: function onClick() {
      return setSelectedPaqueteDetail(null);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-t-3xl sm:rounded-3xl w-full max-w-lg max-h-[85vh] overflow-hidden",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(selectedPaqueteDetail.bg, " p-6")
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-16 h-16 bg-white/30 rounded-2xl flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas ".concat(selectedPaqueteDetail.icon, " ").concat(selectedPaqueteDetail.color, " text-3xl")
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl font-bold text-gray-800"
  }, selectedPaqueteDetail.name), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 mt-1"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-gray-600 text-sm flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-clock"
  }), " Resultados en ", selectedPaqueteDetail.tiempo), selectedPaqueteDetail.price && /*#__PURE__*/React.createElement("span", {
    className: "text-cyan-600 font-bold text-base"
  }, "S/ ", selectedPaqueteDetail.price)))), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setSelectedPaqueteDetail(null);
    },
    className: "text-gray-500 hover:text-gray-700"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times text-xl"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "p-6 overflow-y-auto max-h-[50vh]"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-gray-600 mb-4"
  }, selectedPaqueteDetail.description), /*#__PURE__*/React.createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-gray-800 mb-2 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-list-check text-cyan-500"
  }), " Incluye:"), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-1"
  }, selectedPaqueteDetail.incluye.map(function (item, idx) {
    return /*#__PURE__*/React.createElement("li", {
      key: idx,
      className: "text-gray-600 text-sm flex items-start gap-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-check text-emerald-500 mt-0.5"
    }), " ", item);
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-gray-800 mb-2 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-microscope text-purple-500"
  }), " \xBFQu\xE9 eval\xFAa?"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, selectedPaqueteDetail.evalua.map(function (item, idx) {
    return /*#__PURE__*/React.createElement("div", {
      key: idx,
      className: "border-l-4 border-purple-200 pl-4 py-1"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-gray-800 font-medium text-sm"
    }, item.nombre), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500 text-xs"
    }, item.desc));
  })))), /*#__PURE__*/React.createElement("div", {
    className: "p-4 border-t bg-gray-50"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      handleExamClick(selectedPaqueteDetail);
      setSelectedPaqueteDetail(null);
    },
    className: "w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-plus-circle"
  }), " Agregar al pedido")))), cart.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "fixed bottom-5 right-4 bg-slate-800 text-white pl-4 pr-3 py-3 rounded-2xl shadow-2xl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-9 h-9 bg-emerald-500 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
  }, cart.length), /*#__PURE__*/React.createElement("div", {
    className: "min-w-0"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-medium text-sm"
  }, "Pedido listo"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 truncate max-w-[100px]"
  }, cart.map(function (c) {
    return getPetFullName(c.pet);
  }).join(', '))), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowOrderSummary(true);
    },
    className: "bg-cyan-500 hover:bg-cyan-600 px-4 py-2.5 rounded-xl font-semibold text-sm whitespace-nowrap flex-shrink-0 ml-2"
  }, "Solicitar"))), showOrderSummary && /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay flex items-center justify-center p-4",
    onClick: function onClick(e) {
      if (e.target === e.currentTarget) setShowOrderSummary(false);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-3xl w-full max-w-3xl shadow-2xl flex flex-col",
    style: {
      height: '680px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-6 py-4 border-b flex items-center justify-between flex-shrink-0"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl font-bold text-gray-800"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-clipboard-list text-cyan-500 mr-2"
  }), "Resumen del Pedido"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowOrderSummary(false);
    },
    className: "w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-500 transition-colors"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 flex flex-col lg:flex-row min-h-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:w-1/2 p-6 lg:border-r overflow-y-auto"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-vials text-cyan-500 mr-2"
  }), "Ex\xE1menes (", cart.length, ")"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, cart.map(function (item) {
    var _item$address5, _item$address6, _item$address7;
    return /*#__PURE__*/React.createElement("div", {
      key: item.exam.id,
      className: "bg-gray-50 rounded-xl p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-start justify-between mb-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3 flex-1 min-w-0"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-10 h-10 ".concat(item.exam.bg, " rounded-lg flex items-center justify-center flex-shrink-0")
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas ".concat(item.exam.icon, " ").concat(item.exam.color)
    })), /*#__PURE__*/React.createElement("div", {
      className: "min-w-0"
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-medium text-gray-800 text-sm"
    }, item.exam.name), item.exam.subtitle && /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-500 truncate"
    }, item.exam.subtitle))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3 flex-shrink-0 ml-3"
    }, item.exam.price && /*#__PURE__*/React.createElement("span", {
      className: "text-cyan-600 font-bold text-sm whitespace-nowrap"
    }, "S/ ", item.exam.price), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return removeFromCart(item.exam.id);
      },
      className: "text-red-400 hover:text-red-600"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-trash text-sm"
    })))), /*#__PURE__*/React.createElement("div", {
      className: "border-t pt-2 mt-2 space-y-1.5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-lg"
    }, item.pet.photo), /*#__PURE__*/React.createElement("span", {
      className: "text-sm text-gray-600"
    }, getPetFullName(item.pet))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-start gap-2 text-xs text-gray-500"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-map-marker-alt mt-0.5 text-cyan-500"
    }), /*#__PURE__*/React.createElement("span", null, (_item$address5 = item.address) === null || _item$address5 === void 0 ? void 0 : _item$address5.name, ": ", (_item$address6 = item.address) === null || _item$address6 === void 0 ? void 0 : _item$address6.address, ", ", (_item$address7 = item.address) === null || _item$address7 === void 0 ? void 0 : _item$address7.district)), item.tomaMuestra && /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 text-xs"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-syringe text-emerald-500"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-emerald-600 font-medium"
    }, "Toma de muestra a domicilio ", function (_item$address8) {
      var p = getTomaMuestraPrice((_item$address8 = item.address) === null || _item$address8 === void 0 ? void 0 : _item$address8.district, examTotal);
      return p !== null ? "(+S/ ".concat(p, ")") : '';
    }()))));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "lg:w-1/2 p-6"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-cog text-gray-400 mr-2"
  }), "Detalles"), /*#__PURE__*/React.createElement("div", {
    className: "bg-gray-50 rounded-xl p-4 mb-4"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-medium text-gray-700 mb-3"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-file-invoice-dollar text-amber-600 mr-2"
  }), "Tipo de comprobante"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setInvoiceType('boleta');
    },
    className: "py-2.5 px-3 rounded-xl text-sm font-medium transition-all ".concat(invoiceType === 'boleta' ? 'bg-cyan-500 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:border-cyan-300')
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-receipt mr-1.5"
  }), "Boleta"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setInvoiceType('factura');
    },
    className: "py-2.5 px-3 rounded-xl text-sm font-medium transition-all ".concat(invoiceType === 'factura' ? 'bg-amber-500 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:border-amber-300')
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-file-invoice mr-1.5"
  }), "Factura"))), /*#__PURE__*/React.createElement("div", {
    className: "bg-gray-50 rounded-xl p-4 mb-4"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-medium text-gray-700 mb-3"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-comment-alt text-cyan-500 mr-2"
  }), "Comentarios"), /*#__PURE__*/React.createElement("textarea", {
    value: orderComment,
    onChange: function onChange(e) {
      return setOrderComment(e.target.value);
    },
    placeholder: "Ej: Recoger muestra despu\xE9s de las 10am, tocar timbre 2 veces...",
    className: "w-full px-3 py-2.5 rounded-xl bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:border-cyan-500 focus:outline-none text-sm resize-none",
    rows: "3",
    maxLength: "500"
  }), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 mt-1 text-right"
  }, orderComment.length, "/500")), renderTermsCheckbox(), /*#__PURE__*/React.createElement("button", {
    onClick: submitOrder,
    disabled: !termsAccepted,
    className: "w-full py-3.5 rounded-xl font-semibold transition-all ".concat(termsAccepted ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white" : "bg-gray-200 text-gray-400 cursor-not-allowed")
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-paper-plane mr-2"
  }), "Solicitar Pedido")))))), activeTab === 'resultados' && /*#__PURE__*/React.createElement("div", null, function () {
    var userOrders = (database.orders || []).filter(function (o) {
      return o.userId === freshUser.id && o.status !== 'completed';
    });
    if (userOrders.length > 0) {
      return /*#__PURE__*/React.createElement("div", {
        className: "mb-6"
      }, /*#__PURE__*/React.createElement("h2", {
        className: "text-lg font-bold text-gray-800 mb-3 flex items-center gap-2"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-clock text-amber-500"
      }), "Pendientes"), /*#__PURE__*/React.createElement("div", {
        className: "grid grid-cols-1 lg:grid-cols-2 gap-4"
      }, userOrders.map(function (order) {
        var statusInfo = getStatusInfo(order.status);
        return /*#__PURE__*/React.createElement("div", {
          key: order.id,
          className: "bg-white rounded-2xl shadow p-4"
        }, /*#__PURE__*/React.createElement("div", {
          className: "flex items-center justify-between mb-3"
        }, /*#__PURE__*/React.createElement("p", {
          className: "text-xs text-gray-500"
        }, new Date(order.date).toLocaleDateString('es-ES', {
          day: 'numeric',
          month: 'short',
          hour: '2-digit',
          minute: '2-digit'
        })), /*#__PURE__*/React.createElement("button", {
          onClick: function onClick() {
            return setViewingOrderTracking(order);
          },
          className: "bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas fa-route"
        }), "Ver estado")), /*#__PURE__*/React.createElement("div", {
          className: "space-y-2"
        }, order.items.map(function (item, idx) {
          return /*#__PURE__*/React.createElement("div", {
            key: idx,
            className: "flex items-center gap-3 p-2 bg-gray-50 rounded-xl"
          }, /*#__PURE__*/React.createElement("div", {
            className: "w-9 h-9 ".concat(item.exam.bg, " rounded-lg flex items-center justify-center")
          }, /*#__PURE__*/React.createElement("i", {
            className: "fas ".concat(item.exam.icon, " ").concat(item.exam.color, " text-sm")
          })), /*#__PURE__*/React.createElement("div", {
            className: "flex-1 min-w-0"
          }, /*#__PURE__*/React.createElement("p", {
            className: "text-gray-800 font-medium text-sm truncate"
          }, item.exam.name), /*#__PURE__*/React.createElement("p", {
            className: "text-gray-500 text-xs"
          }, item.pet.photo, " ", getPetFullName(item.pet))));
        })), order.status === 'moto_arrived' && /*#__PURE__*/React.createElement("div", {
          className: "mt-3 bg-red-50 border border-red-200 rounded-xl p-3 flex items-center gap-3 animate-pulse"
        }, /*#__PURE__*/React.createElement("div", {
          className: "w-10 h-10 bg-red-100 rounded-full flex items-center justify-center"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas fa-map-marker-alt text-red-600"
        })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
          className: "text-red-800 font-medium text-sm"
        }, "\uD83D\uDCCD \xA1El motorizado lleg\xF3!"), /*#__PURE__*/React.createElement("p", {
          className: "text-red-600 text-xs"
        }, "Por favor entrega la muestra"))), order.status === 'results_uploaded' && /*#__PURE__*/React.createElement("div", {
          className: "mt-3 bg-red-50 border border-red-200 rounded-xl p-3 flex items-center gap-3 animate-pulse"
        }, /*#__PURE__*/React.createElement("div", {
          className: "w-10 h-10 bg-red-100 rounded-full flex items-center justify-center"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas fa-file-medical text-red-600"
        })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
          className: "text-red-800 font-medium text-sm"
        }, "\uD83D\uDCB3 \xA1Resultados listos!"), /*#__PURE__*/React.createElement("p", {
          className: "text-red-600 text-xs"
        }, "Realiza el pago para recibirlos"))));
      })));
    }
    return null;
  }(), /*#__PURE__*/React.createElement("h2", {
    className: "text-lg font-bold text-gray-800 mb-4"
  }, "Selecciona tu mascota"), petsOrPatients.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl p-10 text-center shadow"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-paw text-4xl text-gray-300 mb-2"
  }), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-500"
  }, "No tienes mascotas registradas")) : /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-4"
  }, petsOrPatients.map(function (pet) {
    return /*#__PURE__*/React.createElement("div", {
      key: pet.id,
      onClick: function onClick() {
        return setSelectedPet(pet);
      },
      className: "bg-white rounded-2xl p-5 shadow cursor-pointer hover:shadow-lg hover:border-cyan-500 border-2 border-transparent transition-all relative"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-4xl"
    }, pet.photo), /*#__PURE__*/React.createElement("div", {
      className: "flex-1"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold text-gray-800"
    }, getPetFullName(pet)), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500 text-sm"
    }, pet.breed)), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2"
    }, countUnseenExamsForPet(pet) > 0 && /*#__PURE__*/React.createElement("div", {
      className: "w-6 h-6 bg-red-500 rounded-full text-xs flex items-center justify-center text-white font-bold"
    }, countUnseenExamsForPet(pet)), /*#__PURE__*/React.createElement("div", {
      className: "bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-semibold"
    }, pet.exams.length))));
  })))))), /*#__PURE__*/React.createElement("div", {
    className: "mob-bottom-nav lg:hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mob-bottom-nav-inner"
  }, /*#__PURE__*/React.createElement("button", {
    className: "mob-nav-btn ".concat(activeTab === 'pedidos' && duenoView !== 'config' ? 'active' : ''),
    onClick: function onClick() {
      resetDuenoState();
      setActiveTab('pedidos');
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-clipboard-list"
  }), /*#__PURE__*/React.createElement("span", null, "Pedidos")), /*#__PURE__*/React.createElement("button", {
    className: "mob-nav-btn ".concat(activeTab === 'resultados' && duenoView !== 'config' ? 'active' : ''),
    onClick: function onClick() {
      resetDuenoState();
      setActiveTab('resultados');
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-file-medical"
  }), /*#__PURE__*/React.createElement("span", null, "Resultados"), countUnseenExams(petsOrPatients) + countPendingPayments() > 0 && /*#__PURE__*/React.createElement("span", {
    className: "mob-nav-badge"
  }, countUnseenExams(petsOrPatients) + countPendingPayments())))));
};
var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/React.createElement(App, null));

//Keyboard stability: prevent layout jump / zoom when keyboard opens on iOS/Android

(function () {
  if (!window.visualViewport) return;
  var root = document.getElementById('root');
  function onViewportChange() {
    var vv = window.visualViewport;
    var windowHeight = window.innerHeight;
    var viewportHeight = vv.height;

    // On iOS, when the keyboard opens the visualViewport shrinks.
    // We pin #root to the visual viewport height so it doesn't scroll/reflow.
    // The content inside stays put; only the keyboard overlays on top.
    if (viewportHeight < windowHeight - 50) {
      // Keyboard is open — lock root height to visual viewport
      root.style.height = viewportHeight + 'px';
      root.style.position = 'fixed';
      root.style.top = vv.offsetTop + 'px';
      root.style.width = vv.width + 'px';
    } else {
      // Keyboard closed — restore normal flow
      root.style.height = '';
      root.style.position = '';
      root.style.top = '';
      root.style.width = '';
    }
  }
  window.visualViewport.addEventListener('resize', onViewportChange);
  window.visualViewport.addEventListener('scroll', onViewportChange);
})();
