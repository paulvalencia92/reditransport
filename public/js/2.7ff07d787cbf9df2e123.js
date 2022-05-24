(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/fuec/admin.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/fuec/admin.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var FileDownload = __webpack_require__(/*! js-file-download */ "./node_modules/js-file-download/file-download.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "list-vehicles",
  metaInfo: {
    title: "Lista de vehiculos"
  },
  created: function created() {
    var _this = this;

    this.getFuecs(this.search).then(function (response) {
      _this.totalRows = response;
    });
  },
  data: function data() {
    return {
      loading: false,
      columns: [{
        label: "Número",
        field: "number"
      }, {
        label: "Departamento",
        field: "department.name"
      }, {
        label: "Municipio",
        field: "municipality.name"
      }, {
        label: "Fecha inicio",
        field: "start_date"
      }, {
        label: "Fecha fin",
        field: "end_date"
      }, {
        label: "Contratante",
        field: "contractor.contractor"
      }, {
        label: "Objeto",
        field: "object"
      }, {
        label: "Ingresos",
        field: "incomes"
      }, {
        label: "Detalles",
        field: "details"
      }, {
        label: "Vehículo",
        field: "vehicle.car_plate"
      }, {
        label: "Adicional",
        field: "aditional"
      }],
      vehicleInEdition: {},
      totalRows: 0,
      search: {
        page: 1,
        name: ""
      }
    };
  },
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('fuec', ['getFuecs', 'updateContract', 'deleteContract'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapMutations"])(['CHANGE_SUBMIT_STATUS'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('user', ['getUsersVehicle'])), {}, {
    exportData: function exportData(id) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2.loading = true;
                _context.next = 3;
                return axios.get("/api/generate/document/fuec/".concat(id), {
                  responseType: 'blob'
                }).then(function (response) {
                  FileDownload(response.data, id + '-FUEC.pdf');
                  _this2.loading = false;
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    onPageChange: function onPageChange(params) {
      var _this3 = this;

      this.search.page = params.currentPage;
      this.getFuecs(this.search).then(function (response) {
        _this3.totalRows = response;
      });
    },
    onSearch: function onSearch(params) {
      this.search.name = params.searchTerm;
    }
  }),
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])('fuec', ['fuecs'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])('auth', ['abilities'])),
  watch: {
    'search.name': function searchName() {
      var _this4 = this;

      this.getFuecs(this.search).then(function (response) {
        _this4.totalRows = response;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/fuec/checkPayment.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/fuec/checkPayment.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lottie_web_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lottie-web-vue */ "./node_modules/lottie-web-vue/dist/lottie-web-vue.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    LottieAnimation: lottie_web_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  created: function created() {
    var _this = this;

    this.getPurchesToPay().then(function () {
      if (_this.purshes_pay[0].length > 0 || _this.purshes_pay[1].length > 0) {
        _this.$emit('status', false);
      } else {
        _this.$emit('status', true);
      }
    });
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('purshe', ['getPurchesToPay'])),
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])('purshe', ['purshes_pay']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/fuec/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/fuec/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _admin_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.vue */ "./resources/js/src/views/fuec/admin.vue");
/* harmony import */ var _other_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./other.vue */ "./resources/js/src/views/fuec/other.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    admin: _admin_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    user: _other_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {};
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])('auth', ["role"]))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/fuec/other.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/fuec/other.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _checkPayment_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkPayment.vue */ "./resources/js/src/views/fuec/checkPayment.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var FileDownload = __webpack_require__(/*! js-file-download */ "./node_modules/js-file-download/file-download.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "list-vehicles",
  metaInfo: {
    title: "Lista de vehiculos"
  },
  components: {
    CheckPayment: _checkPayment_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  created: function created() {
    var _this = this;

    this.myFuecs(this.search).then(function (response) {
      _this.totalRows = response;
    });
  },
  data: function data() {
    return {
      loading: false,
      is_available: false,
      columns: [{
        label: "Número",
        field: "number"
      }, {
        label: "Departamento",
        field: "department.name"
      }, {
        label: "Municipio",
        field: "municipality.name"
      }, {
        label: "Fecha inicio",
        field: "start_date"
      }, {
        label: "Fecha fin",
        field: "end_date"
      }, {
        label: "Contratante",
        field: "contractor.contractor"
      }, {
        label: "Objeto",
        field: "object"
      }, {
        label: "Ingresos",
        field: "incomes"
      }, {
        label: "Detalles",
        field: "details"
      }, {
        label: "Vehículo",
        field: "vehicle.car_plate"
      }, {
        label: "Adicional",
        field: "aditional"
      }],
      vehicleInEdition: {},
      totalRows: 0,
      search: {
        page: 1,
        name: ""
      }
    };
  },
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('fuec', ['myFuecs', 'updateContract', 'deleteContract'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapMutations"])(['CHANGE_SUBMIT_STATUS'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('user', ['getUsersVehicle'])), {}, {
    statusPayment: function statusPayment(data) {
      this.is_available = data;
    },
    exportData: function exportData(id) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2.loading = true;
                _context.next = 3;
                return axios.get("/api/generate/document/fuec/".concat(id), {
                  responseType: 'blob'
                }).then(function (response) {
                  FileDownload(response.data, id + '-FUEC.pdf');
                  _this2.loading = false;
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    onPageChange: function onPageChange(params) {
      var _this3 = this;

      this.search.page = params.currentPage;
      this.myFuecs(this.search).then(function (response) {
        _this3.totalRows = response;
      });
    },
    onSearch: function onSearch(params) {
      this.search.name = params.searchTerm;
    }
  }),
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])('fuec', ['fuecs'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])('auth', ['abilities'])),
  watch: {
    'search.name': function searchName() {
      var _this4 = this;

      this.myFuecs(this.search).then(function (response) {
        _this4.totalRows = response;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/fuec/admin.vue?vue&type=template&id=de6b1f12&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/fuec/admin.vue?vue&type=template&id=de6b1f12&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "main-content" },
    [
      _c("breadcumb", {
        attrs: { page: "Contratos disponibles", folder: "Contratos" }
      }),
      _vm._v(" "),
      _c(
        "b-card",
        [
          _c("vue-good-table", {
            attrs: {
              rows: _vm.fuecs,
              columns: _vm.columns,
              "line-numbers": false,
              "total-rows": _vm.totalRows,
              "search-options": {
                enabled: true,
                trigger: "enter",
                placeholder: "Buscar en esta tabla"
              },
              "pagination-options": {
                enabled: true,
                perPage: 20,
                mode: "records"
              },
              styleClass: "tableOne vgt-table"
            },
            on: {
              "on-page-change": _vm.onPageChange,
              "on-search": _vm.onSearch
            },
            scopedSlots: _vm._u([
              {
                key: "table-row",
                fn: function(props) {
                  return [
                    props.column.field == "aditional"
                      ? _c("span", [
                          _c(
                            "div",
                            { staticClass: "text-center" },
                            [
                              _vm.loading == false
                                ? _c(
                                    "b-button",
                                    {
                                      attrs: {
                                        disabled: props.row.routes.length < 1,
                                        variant: "secondary",
                                        size: "sm"
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.exportData(props.row.id)
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n              Descargar Fuec\n            "
                                      )
                                    ]
                                  )
                                : _c("div", {
                                    staticClass:
                                      "loader-bubble loader-bubble-primary m-1"
                                  }),
                              _vm._v(" "),
                              props.row.routes.length < 1
                                ? _c("div", { staticClass: "text-danger" }, [
                                    _vm._v(
                                      "\n              Debes agregar al menos una ruta\n            "
                                    )
                                  ])
                                : _vm._e()
                            ],
                            1
                          )
                        ])
                      : _vm._e()
                  ]
                }
              }
            ])
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/fuec/checkPayment.vue?vue&type=template&id=0037d366&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/fuec/checkPayment.vue?vue&type=template&id=0037d366& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-5 text-center" }, [
        _c("h2", [_vm._v("Tienes pagos pendientes")]),
        _vm._v(" "),
        _c(
          "div",
          { staticStyle: { "max-width": "300px", margin: "auto" } },
          [
            _c("lottie-animation", {
              ref: "anim",
              attrs: {
                loop: true,
                animationData: __webpack_require__(/*! ../../assets/bills.json */ "./resources/js/src/assets/bills.json")
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _vm._m(0)
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-7" }, [
        _vm.purshes_pay[0].length > 0
          ? _c("h3", [
              _vm._v(
                "\n                Cobros aplicados al usuario\n            "
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.purshes_pay.length > 0
          ? _c(
              "div",
              { staticClass: "row" },
              _vm._l(_vm.purshes_pay[0], function(purshe) {
                return _c(
                  "div",
                  { key: purshe.id, staticClass: "col-sm-6 col-md-4 mb-3" },
                  [
                    _c("b-card", [
                      _vm._v(
                        "\n                        " +
                          _vm._s(purshe.detail) +
                          ": "
                      ),
                      _c("b", [
                        _vm._v(_vm._s(_vm._f("format_currency")(purshe.cost)))
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _c("small", [_vm._v(_vm._s(purshe.payment_date))])
                      ])
                    ])
                  ],
                  1
                )
              }),
              0
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.purshes_pay[1].length > 0
          ? _c("h3", [
              _vm._v(
                "\n                Cobros aplicados a vehículos\n            "
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.purshes_pay.length > 0
          ? _c(
              "div",
              { staticClass: "row" },
              _vm._l(_vm.purshes_pay[1], function(purshe) {
                return _c(
                  "div",
                  { key: purshe.id, staticClass: "col-sm-6 col-md-4 mb-3" },
                  [
                    _c("b-card", [
                      _vm._v(
                        "\n                        " +
                          _vm._s(purshe.detail) +
                          ": "
                      ),
                      _c("b", [
                        _vm._v(_vm._s(_vm._f("format_currency")(purshe.cost)))
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _c("span", [_vm._v(_vm._s(purshe.payment_date))])
                      ])
                    ])
                  ],
                  1
                )
              }),
              0
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.purshes_pay[0].length <= 0 || _vm.purshes_pay[1].length <= 0
          ? _c(
              "div",
              { staticClass: "text-center" },
              [
                _c("h3", [
                  _vm._v(
                    "\n                    Al parecer no cargamos correctamente los contratos\n                "
                  )
                ]),
                _vm._v(" "),
                _c("h6", [
                  _vm._v(
                    "\n                    Esto puede debeser a tu conexión de internet...\n                "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "b-btn",
                  {
                    attrs: { size: "lg", variant: "primary" },
                    on: {
                      click: function($event) {
                        return _vm.$emit("status", true)
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                    ¡Click aquí para verlos!\n                "
                    )
                  ]
                )
              ],
              1
            )
          : _vm._e()
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "alert alert-dismissible alert-alert alert-card alert-danger mt-3",
        attrs: { role: "alert", "aria-live": "polite", "aria-atomic": "true" }
      },
      [
        _c(
          "button",
          {
            staticClass: "close",
            attrs: { type: "button", "aria-label": "Close" }
          },
          [_vm._v("×")]
        ),
        _vm._v(" "),
        _c("strong", { staticClass: "text-capitalize" }, [_vm._v("Recuerda!")]),
        _vm._v(
          " Realiza estos pagos para seguir disfrutando de nuestros beneficios\n            "
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/fuec/index.vue?vue&type=template&id=5f5b1c7a&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/fuec/index.vue?vue&type=template&id=5f5b1c7a& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_vm.role == "admin" ? _c("admin") : _c("user")], 1)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/fuec/other.vue?vue&type=template&id=1b8123b8&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/fuec/other.vue?vue&type=template&id=1b8123b8&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "main-content" },
    [
      _c("breadcumb", {
        attrs: { page: "Contratos disponibles", folder: "Contratos" }
      }),
      _vm._v(" "),
      _vm.is_available == true
        ? _c(
            "div",
            {
              staticClass:
                "alert alert-dismissible alert-alert alert-card alert-info",
              attrs: {
                role: "alert",
                "aria-live": "polite",
                "aria-atomic": "true"
              }
            },
            [
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: { type: "button", "aria-label": "Close" }
                },
                [_vm._v("×")]
              ),
              _vm._v(" "),
              _c("strong", { staticClass: "text-capitalize" }, [
                _vm._v("Importante!")
              ]),
              _vm._v(
                " Algunos Contratos podrían no mostrarse debido a que el conductor no cuente con licencia valida o el vehículo no tiene documentos al día.\n  "
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.is_available == false
        ? _c("CheckPayment", { on: { status: _vm.statusPayment } })
        : _vm._e(),
      _vm._v(" "),
      _vm.is_available == true
        ? _c(
            "b-card",
            [
              _c("vue-good-table", {
                attrs: {
                  rows: _vm.fuecs,
                  columns: _vm.columns,
                  "line-numbers": false,
                  "total-rows": _vm.totalRows,
                  "search-options": {
                    enabled: true,
                    trigger: "enter",
                    placeholder: "Buscar en esta tabla"
                  },
                  "pagination-options": {
                    enabled: true,
                    perPage: 20,
                    mode: "records"
                  },
                  styleClass: "tableOne vgt-table"
                },
                on: {
                  "on-page-change": _vm.onPageChange,
                  "on-search": _vm.onSearch
                },
                scopedSlots: _vm._u(
                  [
                    {
                      key: "table-row",
                      fn: function(props) {
                        return [
                          props.column.field == "aditional"
                            ? _c("span", [
                                _c(
                                  "div",
                                  { staticClass: "text-center" },
                                  [
                                    _vm.loading == false
                                      ? _c(
                                          "b-button",
                                          {
                                            attrs: {
                                              disabled:
                                                props.row.routes.length < 1,
                                              variant: "secondary",
                                              size: "sm"
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.exportData(
                                                  props.row.id
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n              Descargar Fuec\n            "
                                            )
                                          ]
                                        )
                                      : _c("div", {
                                          staticClass:
                                            "loader-bubble loader-bubble-primary m-1"
                                        }),
                                    _vm._v(" "),
                                    props.row.routes.length < 1
                                      ? _c(
                                          "div",
                                          { staticClass: "text-danger" },
                                          [
                                            _vm._v(
                                              "\n              Debes agregar al menos una ruta\n            "
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ],
                                  1
                                )
                              ])
                            : _vm._e()
                        ]
                      }
                    }
                  ],
                  null,
                  false,
                  688397454
                )
              })
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/assets/bills.json":
/*!********************************************!*\
  !*** ./resources/js/src/assets/bills.json ***!
  \********************************************/
/*! exports provided: v, fr, ip, op, w, h, nm, ddd, assets, layers, markers, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"v\":\"5.4.3\",\"fr\":24,\"ip\":0,\"op\":147,\"w\":750,\"h\":784,\"nm\":\"Onboarding_Boleto_Step1\",\"ddd\":0,\"assets\":[],\"layers\":[{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"Estrelas Outlines 18\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":118,\"s\":[0],\"e\":[82]},{\"t\":132}],\"ix\":10},\"p\":{\"a\":0,\"k\":[572.133,158.839,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[158.74,3.711,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"n\":[\"0p667_1_0p333_0\",\"0p667_1_0p333_0\",\"0p667_1_0p333_0\"],\"t\":118,\"s\":[0,0,100],\"e\":[100,100,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"n\":[\"0p667_1_0p333_0\",\"0p667_1_0p333_0\",\"0p667_1_0p333_0\"],\"t\":125,\"s\":[100,100,100],\"e\":[0,0,100]},{\"t\":132}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[158.914,-4.292],[161.689,0.79],[166.768,3.569],[161.689,6.349],[158.914,11.43],[156.137,6.349],[151.06,3.569],[156.137,0.79]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.929000016755,0.477999997606,0.161000001197,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false}],\"ip\":119,\"op\":133,\"st\":118,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"Estrelas Outlines 13\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":85,\"s\":[0],\"e\":[82]},{\"t\":99}],\"ix\":10},\"p\":{\"a\":0,\"k\":[573.633,158.839,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[158.74,3.711,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"n\":[\"0p667_1_0p333_0\",\"0p667_1_0p333_0\",\"0p667_1_0p333_0\"],\"t\":85,\"s\":[0,0,100],\"e\":[159,159,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"n\":[\"0p667_1_0p333_0\",\"0p667_1_0p333_0\",\"0p667_1_0p333_0\"],\"t\":92,\"s\":[159,159,100],\"e\":[0,0,100]},{\"t\":99}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[158.914,-4.292],[161.689,0.79],[166.768,3.569],[161.689,6.349],[158.914,11.43],[156.137,6.349],[151.06,3.569],[156.137,0.79]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.929000016755,0.477999997606,0.161000001197,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false}],\"ip\":86,\"op\":100,\"st\":85,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":4,\"nm\":\"Estrelas Outlines 12\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":111,\"s\":[0],\"e\":[-137]},{\"t\":125}],\"ix\":10},\"p\":{\"a\":0,\"k\":[544.496,237.869,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[150.865,30.836,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"n\":[\"0p667_1_0p333_0\",\"0p667_1_0p333_0\",\"0p667_1_0p333_0\"],\"t\":111,\"s\":[0,0,100],\"e\":[100,100,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"n\":[\"0p667_1_0p333_0\",\"0p667_1_0p333_0\",\"0p667_1_0p333_0\"],\"t\":118,\"s\":[100,100,100],\"e\":[0,0,100]},{\"t\":125}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[150.787,20.125],[154.555,27.019],[161.444,30.791],[154.555,34.561],[150.787,41.457],[147.02,34.561],[140.131,30.791],[147.02,27.019]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.987999949736,0.709999952129,0.102000000898,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false}],\"ip\":111,\"op\":126,\"st\":111,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":4,\"nm\":\"Estrelas Outlines 10\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":103,\"s\":[0],\"e\":[132]},{\"t\":117}],\"ix\":10},\"p\":{\"a\":0,\"k\":[494.56,95.802,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[131.365,18.398,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"n\":[\"0p667_1_0p333_0\",\"0p667_1_0p333_0\",\"0p667_1_0p333_0\"],\"t\":103,\"s\":[0,0,100],\"e\":[200,200,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"n\":[\"0p667_1_0p333_0\",\"0p667_1_0p333_0\",\"0p667_1_0p333_0\"],\"t\":110,\"s\":[200,200,100],\"e\":[0,0,100]},{\"t\":117}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[131.307,10.161],[134.186,15.429],[139.448,18.311],[134.186,21.19],[131.307,26.458],[128.428,21.19],[123.165,18.311],[128.428,15.429]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.987999949736,0.709999952129,0.102000000898,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false}],\"ip\":103,\"op\":118,\"st\":103,\"bm\":0},{\"ddd\":0,\"ind\":6,\"ty\":4,\"nm\":\"Estrelas Outlines 9\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":121,\"s\":[0],\"e\":[-125]},{\"t\":135}],\"ix\":10},\"p\":{\"a\":0,\"k\":[467.498,138.527,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[21.053,43.086,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"n\":[\"0p667_1_0p333_0\",\"0p667_1_0p333_0\",\"0p667_1_0p333_0\"],\"t\":121,\"s\":[0,0,100],\"e\":[217.62,217.62,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"n\":[\"0p667_1_0p333_0\",\"0p667_1_0p333_0\",\"0p667_1_0p333_0\"],\"t\":128,\"s\":[217.62,217.62,100],\"e\":[0,0,100]},{\"t\":135}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[21.021,39.25],[22.354,41.689],[24.792,43.024],[22.354,44.357],[21.021,46.797],[19.688,44.357],[17.25,43.024],[19.688,41.689]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.929000016755,0.477999997606,0.161000001197,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false}],\"ip\":121,\"op\":136,\"st\":121,\"bm\":0},{\"ddd\":0,\"ind\":7,\"ty\":4,\"nm\":\"LinhaGaveta\",\"parent\":30,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[-162.944,102.174,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[278.5,88],[278.5,282]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.63137254902,0.639215686275,0.682352941176,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":9.5,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.5],\"y\":[1]},\"o\":{\"x\":[0.5],\"y\":[0]},\"n\":[\"0p5_1_0p5_0\"],\"t\":11,\"s\":[0],\"e\":[50]},{\"t\":19}],\"ix\":1},\"e\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"n\":[\"0p667_1_0p333_0\"],\"t\":11,\"s\":[100],\"e\":[50]},{\"t\":19}],\"ix\":2},\"o\":{\"a\":0,\"k\":0,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":4,\"op\":13,\"st\":4,\"bm\":0},{\"ddd\":0,\"ind\":8,\"ty\":4,\"nm\":\"LinhaGaveteiro\",\"parent\":30,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[115.451,288.25,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[4.8,292.8,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[4.8,388.8],[4.8,580.8]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.630999995213,0.638999968884,0.681999954523,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":9.6,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[4.8,4.8],[4.8,196.8]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.630999995213,0.638999968884,0.681999954523,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":9.6,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":4,\"op\":140,\"st\":4,\"bm\":0},{\"ddd\":0,\"ind\":9,\"ty\":4,\"nm\":\"MaskGaveta\",\"parent\":30,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[-162.944,102.174,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[226.506,-110.799],[226.506,111.402],[-71.506,111.101],[-71.506,-111.101]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.815686334348,0.815686334348,0.815686334348,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[350.006,191.601],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":4,\"op\":140,\"st\":4,\"bm\":0},{\"ddd\":0,\"ind\":10,\"ty\":4,\"nm\":\"GavetaAberta Outlines\",\"parent\":30,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.4,\"y\":1},\"o\":{\"x\":0.6,\"y\":0},\"n\":\"0p4_1_0p6_0\",\"t\":11,\"s\":[154,288.25,0],\"e\":[-38.149,288.25,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"t\":32}],\"ix\":2},\"a\":{\"a\":0,\"k\":[153.851,96.25,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[10.42,0],[6.91,-6.743],[-4.34,0],[0,0],[3.105,3.031]],\"o\":[[-10.419,0],[-3.106,3.031],[0,0],[4.34,0],[-6.91,-6.743]],\"v\":[[0,-9.6],[-26.763,1.304],[-23.452,9.6],[23.452,9.6],[26.764,1.304]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.497000002394,0.513000009574,0.564999988032,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[48.25,125.05],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[28.801,19.2],[-28.801,19.2],[-28.801,-19.2],[28.801,-19.2]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.814999988032,0.814999988032,0.814999988032,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[48.25,77.05],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[9.6,96],[-9.6,96],[-9.6,-77.076],[-9.6,-96],[9.6,-96]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.814999988032,0.814999988032,0.814999988032,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[105.851,96.25],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[48,-96],[-48,-96],[-48,96],[48,96]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.633999992819,0.644999964097,0.686999990426,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[48.25,96.25],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[96,-48],[-96,-48],[-96,48],[96,48]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.497000002394,0.513000009574,0.564999988032,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[211.451,125.05],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 5\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[-10.604,0],[0,0],[0,-10.604]],\"o\":[[0,0],[0,0],[0,-10.604],[0,0],[10.603,0],[0,0]],\"v\":[[48,38.4],[-48,38.4],[-48,-19.2],[-28.8,-38.4],[28.8,-38.4],[48,-19.2]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.894999964097,0.894999964097,0.890999947342,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[105.851,38.65],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 6\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[-10.603,0],[0,0],[0,-10.604]],\"o\":[[0,0],[0,0],[0,-10.604],[0,0],[10.603,0],[0,0]],\"v\":[[48,38.4],[-48,38.4],[-48,-19.2],[-28.801,-38.4],[28.8,-38.4],[48,-19.2]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[125.051,38.65],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 7\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":7,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[-10.603,0],[0,0],[0,-10.604]],\"o\":[[0,0],[0,0],[0,-10.604],[0,0],[10.603,0],[0,0]],\"v\":[[48,38.4],[-48,38.4],[-48,-19.2],[-28.8,-38.4],[28.801,-38.4],[48,-19.2]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.947000002394,0.947000002394,0.947000002394,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[144.25,38.65],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 8\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":8,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[-10.604,0],[0,0],[0,-10.604]],\"o\":[[0,0],[0,0],[0,-10.604],[0,0],[10.604,0],[0,0]],\"v\":[[48,38.4],[-48,38.4],[-48,-19.2],[-28.8,-38.4],[28.8,-38.4],[48,-19.2]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[182.651,38.65],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 9\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":9,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[-10.604,0],[0,0],[0,-10.604]],\"o\":[[0,0],[0,0],[0,-10.604],[0,0],[10.603,0],[0,0]],\"v\":[[48,38.4],[-48,38.4],[-48,-19.2],[-28.8,-38.4],[28.8,-38.4],[48,-19.2]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.947000002394,0.947000002394,0.947000002394,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[201.851,38.65],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 10\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":10,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[-10.603,0],[0,0],[0,-10.604]],\"o\":[[0,0],[0,0],[0,-10.604],[0,0],[10.603,0],[0,0]],\"v\":[[48,38.4],[-48,38.4],[-48,-19.2],[-28.801,-38.4],[28.8,-38.4],[48,-19.2]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[221.051,38.65],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 11\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":11,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[-10.603,0],[0,0]],\"o\":[[0,0],[0,0],[0,-10.604],[0,0],[0,0]],\"v\":[[48,38.4],[-48,38.4],[-48,-19.2],[-28.8,-38.4],[48,-38.4]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.947000002394,0.947000002394,0.947000002394,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[259.45,38.65],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 12\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":12,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":4,\"op\":140,\"st\":4,\"bm\":0},{\"ddd\":0,\"ind\":11,\"ty\":4,\"nm\":\"Franja Outlines\",\"parent\":14,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.4,\"y\":1},\"o\":{\"x\":0.6,\"y\":0},\"n\":\"0p4_1_0p6_0\",\"t\":7,\"s\":[96.039,27.317,0],\"e\":[93.895,27.308,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.4,\"y\":1},\"o\":{\"x\":0.6,\"y\":0},\"n\":\"0p4_1_0p6_0\",\"t\":17,\"s\":[93.895,27.308,0],\"e\":[96.827,27.354,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.4,\"y\":1},\"o\":{\"x\":0.6,\"y\":0},\"n\":\"0p4_1_0p6_0\",\"t\":25,\"s\":[96.827,27.354,0],\"e\":[96.039,27.317,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"t\":32}],\"ix\":2},\"a\":{\"a\":0,\"k\":[96.461,69.184,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.4,\"y\":1},\"o\":{\"x\":0.6,\"y\":0},\"n\":\"0p4_1_0p6_0\",\"t\":7,\"s\":[{\"i\":[[55.958,-3.681],[2.741,-47.944],[-2.379,-9.314],[-8.851,0.001],[0,0],[0,31.812],[0,0],[-10.604,0],[0,0],[-2.188,8.347],[0,8.409]],\"o\":[[-47.919,3.152],[-0.582,10.183],[2.191,8.576],[0,0],[31.811,0],[0,0],[0,10.604],[0,0],[8.629,0],[2.036,-7.77],[0,-55.168]],\"v\":[[-6.282,-65.253],[-95.629,24.934],[-92.814,54.288],[-74.149,68.933],[-18.989,68.933],[38.611,11.333],[38.611,49.733],[57.811,68.933],[74.574,68.933],[93.087,54.865],[96.211,30.533]],\"c\":true}],\"e\":[{\"i\":[[55.98,-3.324],[6.049,-49.621],[-2.379,-9.314],[-8.851,0.001],[0,0],[0,31.812],[0,0],[-10.604,0],[0,0],[-2.188,8.347],[0,8.409]],\"o\":[[-50.45,2.996],[-1.234,10.125],[2.191,8.576],[0,0],[31.811,0],[0,0],[0,10.604],[0,0],[8.629,0],[2.036,-7.77],[0,-55.168]],\"v\":[[-6.282,-65.253],[-92.135,25.147],[-92.814,54.288],[-74.149,68.933],[-18.989,68.933],[38.611,11.333],[38.611,49.733],[57.811,68.933],[74.574,68.933],[93.087,54.865],[96.211,30.533]],\"c\":true}]},{\"i\":{\"x\":0.4,\"y\":1},\"o\":{\"x\":0.6,\"y\":0},\"n\":\"0p4_1_0p6_0\",\"t\":17,\"s\":[{\"i\":[[55.98,-3.324],[6.049,-49.621],[-2.379,-9.314],[-8.851,0.001],[0,0],[0,31.812],[0,0],[-10.604,0],[0,0],[-2.188,8.347],[0,8.409]],\"o\":[[-50.45,2.996],[-1.234,10.125],[2.191,8.576],[0,0],[31.811,0],[0,0],[0,10.604],[0,0],[8.629,0],[2.036,-7.77],[0,-55.168]],\"v\":[[-6.282,-65.253],[-92.135,25.147],[-92.814,54.288],[-74.149,68.933],[-18.989,68.933],[38.611,11.333],[38.611,49.733],[57.811,68.933],[74.574,68.933],[93.087,54.865],[96.211,30.533]],\"c\":true}],\"e\":[{\"i\":[[55.98,-3.324],[6.049,-49.621],[-2.379,-9.314],[-8.851,0.001],[0,0],[0,31.812],[0,0],[-10.604,0],[0,0],[-2.188,8.347],[0.54,8.392]],\"o\":[[-50.45,2.996],[-1.234,10.125],[2.191,8.576],[0,0],[31.811,0],[0,0],[0,10.604],[0,0],[8.629,0],[2.036,-7.77],[-3.675,-57.148]],\"v\":[[-6.282,-65.253],[-95.147,24.724],[-92.814,54.288],[-74.149,68.933],[-18.989,68.933],[38.611,11.333],[38.611,49.733],[57.811,68.933],[74.574,68.933],[93.087,54.865],[96.211,30.533]],\"c\":true}]},{\"i\":{\"x\":0.4,\"y\":1},\"o\":{\"x\":0.6,\"y\":0},\"n\":\"0p4_1_0p6_0\",\"t\":25,\"s\":[{\"i\":[[55.98,-3.324],[6.049,-49.621],[-2.379,-9.314],[-8.851,0.001],[0,0],[0,31.812],[0,0],[-10.604,0],[0,0],[-2.188,8.347],[0.54,8.392]],\"o\":[[-50.45,2.996],[-1.234,10.125],[2.191,8.576],[0,0],[31.811,0],[0,0],[0,10.604],[0,0],[8.629,0],[2.036,-7.77],[-3.675,-57.148]],\"v\":[[-6.282,-65.253],[-95.147,24.724],[-92.814,54.288],[-74.149,68.933],[-18.989,68.933],[38.611,11.333],[38.611,49.733],[57.811,68.933],[74.574,68.933],[93.087,54.865],[96.211,30.533]],\"c\":true}],\"e\":[{\"i\":[[55.958,-3.681],[2.741,-47.944],[-2.379,-9.314],[-8.851,0.001],[0,0],[0,31.812],[0,0],[-10.604,0],[0,0],[-2.188,8.347],[0,8.409]],\"o\":[[-47.919,3.152],[-0.582,10.183],[2.191,8.576],[0,0],[31.811,0],[0,0],[0,10.604],[0,0],[8.629,0],[2.036,-7.77],[0,-55.168]],\"v\":[[-6.282,-65.253],[-95.629,24.934],[-92.814,54.288],[-74.149,68.933],[-18.989,68.933],[38.611,11.333],[38.611,49.733],[57.811,68.933],[74.574,68.933],[93.087,54.865],[96.211,30.533]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.167,\"y\":0},\"n\":\"0p833_1_0p167_0\",\"t\":32,\"s\":[{\"i\":[[55.958,-3.681],[2.741,-47.944],[-2.379,-9.314],[-8.851,0.001],[0,0],[0,31.812],[0,0],[-10.604,0],[0,0],[-2.188,8.347],[0,8.409]],\"o\":[[-47.919,3.152],[-0.582,10.183],[2.191,8.576],[0,0],[31.811,0],[0,0],[0,10.604],[0,0],[8.629,0],[2.036,-7.77],[0,-55.168]],\"v\":[[-6.282,-65.253],[-95.629,24.934],[-92.814,54.288],[-74.149,68.933],[-18.989,68.933],[38.611,11.333],[38.611,49.733],[57.811,68.933],[74.574,68.933],[93.087,54.865],[96.211,30.533]],\"c\":true}],\"e\":[{\"i\":[[55.958,-3.681],[2.741,-47.944],[-2.379,-9.314],[-8.851,0.001],[0,0],[0,31.812],[0,0],[-10.604,0],[0,0],[-2.188,8.347],[0,8.409]],\"o\":[[-47.919,3.152],[-0.582,10.183],[2.191,8.576],[0,0],[31.811,0],[0,0],[0,10.604],[0,0],[8.629,0],[2.036,-7.77],[0,-55.168]],\"v\":[[-6.282,-65.253],[-95.629,24.934],[-92.814,54.288],[-74.149,68.933],[-18.989,68.933],[38.611,11.333],[38.611,49.733],[57.811,68.933],[74.574,68.933],[93.087,54.865],[96.211,30.533]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0},\"n\":\"0p833_0p833_0p167_0\",\"t\":36,\"s\":[{\"i\":[[55.958,-3.681],[2.741,-47.944],[-2.379,-9.314],[-8.851,0.001],[0,0],[0,31.812],[0,0],[-10.604,0],[0,0],[-2.188,8.347],[0,8.409]],\"o\":[[-47.919,3.152],[-0.582,10.183],[2.191,8.576],[0,0],[31.811,0],[0,0],[0,10.604],[0,0],[8.629,0],[2.036,-7.77],[0,-55.168]],\"v\":[[-6.282,-65.253],[-95.629,24.934],[-92.814,54.288],[-74.149,68.933],[-18.989,68.933],[38.611,11.333],[38.611,49.733],[57.811,68.933],[74.574,68.933],[93.087,54.865],[96.211,30.533]],\"c\":true}],\"e\":[{\"i\":[[55.958,-3.681],[2.741,-47.944],[-2.379,-9.314],[-8.851,0.001],[0,0],[0,31.812],[0,0],[-10.604,0],[0,0],[-2.188,8.347],[0,8.409]],\"o\":[[-47.919,3.152],[-0.582,10.183],[2.191,8.576],[0,0],[31.811,0],[0,0],[0,10.604],[0,0],[8.629,0],[2.036,-7.77],[0,-55.168]],\"v\":[[-6.282,-65.253],[-95.629,24.934],[-92.814,55.288],[-71.399,69.933],[-16.239,69.933],[41.361,12.333],[41.361,50.733],[60.561,69.933],[77.324,69.933],[93.087,54.865],[96.211,30.533]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.167,\"y\":0.167},\"n\":\"0p833_1_0p167_0p167\",\"t\":45,\"s\":[{\"i\":[[55.958,-3.681],[2.741,-47.944],[-2.379,-9.314],[-8.851,0.001],[0,0],[0,31.812],[0,0],[-10.604,0],[0,0],[-2.188,8.347],[0,8.409]],\"o\":[[-47.919,3.152],[-0.582,10.183],[2.191,8.576],[0,0],[31.811,0],[0,0],[0,10.604],[0,0],[8.629,0],[2.036,-7.77],[0,-55.168]],\"v\":[[-6.282,-65.253],[-95.629,24.934],[-92.814,55.288],[-71.399,69.933],[-16.239,69.933],[41.361,12.333],[41.361,50.733],[60.561,69.933],[77.324,69.933],[93.087,54.865],[96.211,30.533]],\"c\":true}],\"e\":[{\"i\":[[55.958,-3.681],[2.741,-47.944],[-2.379,-9.314],[-8.851,0.001],[0,0],[0,31.812],[0,0],[-10.604,0],[0,0],[-2.188,8.347],[0,8.409]],\"o\":[[-47.919,3.152],[-0.582,10.183],[2.191,8.576],[0,0],[31.811,0],[0,0],[0,10.604],[0,0],[8.629,0],[2.036,-7.77],[0,-55.168]],\"v\":[[-6.282,-65.253],[-95.629,24.934],[-93.439,54.538],[-71.399,69.933],[-16.864,69.183],[40.736,11.583],[40.736,49.983],[59.936,69.183],[76.699,69.183],[92.462,54.115],[96.211,30.533]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.167,\"y\":0},\"n\":\"0p833_1_0p167_0\",\"t\":55,\"s\":[{\"i\":[[55.958,-3.681],[2.741,-47.944],[-2.379,-9.314],[-8.851,0.001],[0,0],[0,31.812],[0,0],[-10.604,0],[0,0],[-2.188,8.347],[0,8.409]],\"o\":[[-47.919,3.152],[-0.582,10.183],[2.191,8.576],[0,0],[31.811,0],[0,0],[0,10.604],[0,0],[8.629,0],[2.036,-7.77],[0,-55.168]],\"v\":[[-6.282,-65.253],[-95.629,24.934],[-93.439,54.538],[-71.399,69.933],[-16.864,69.183],[40.736,11.583],[40.736,49.983],[59.936,69.183],[76.699,69.183],[92.462,54.115],[96.211,30.533]],\"c\":true}],\"e\":[{\"i\":[[55.958,-3.681],[2.741,-47.944],[-2.379,-9.314],[-8.851,0.001],[0,0],[0,31.812],[0,0],[-10.604,0],[0,0],[-2.188,8.347],[0,8.409]],\"o\":[[-47.919,3.152],[-0.582,10.183],[2.191,8.576],[0,0],[31.811,0],[0,0],[0,10.604],[0,0],[8.629,0],[2.036,-7.77],[0,-55.168]],\"v\":[[-6.282,-65.253],[-95.629,24.934],[-93.439,54.538],[-71.399,69.933],[-16.864,69.183],[40.736,11.583],[40.736,49.983],[59.936,69.183],[76.699,69.183],[92.462,54.115],[96.211,30.533]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.167,\"y\":0},\"n\":\"0p833_1_0p167_0\",\"t\":74,\"s\":[{\"i\":[[55.958,-3.681],[2.741,-47.944],[-2.379,-9.314],[-8.851,0.001],[0,0],[0,31.812],[0,0],[-10.604,0],[0,0],[-2.188,8.347],[0,8.409]],\"o\":[[-47.919,3.152],[-0.582,10.183],[2.191,8.576],[0,0],[31.811,0],[0,0],[0,10.604],[0,0],[8.629,0],[2.036,-7.77],[0,-55.168]],\"v\":[[-6.282,-65.253],[-95.629,24.934],[-93.439,54.538],[-71.399,69.933],[-16.864,69.183],[40.736,11.583],[40.736,49.983],[59.936,69.183],[76.699,69.183],[92.462,54.115],[96.211,30.533]],\"c\":true}],\"e\":[{\"i\":[[55.958,-3.681],[2.741,-47.944],[-2.379,-9.314],[-8.851,0.001],[0,0],[0,31.812],[0,0],[-10.604,0],[0,0],[-2.188,8.347],[0,8.409]],\"o\":[[-47.919,3.152],[-0.582,10.183],[2.191,8.576],[0,0],[31.811,0],[0,0],[0,10.604],[0,0],[8.629,0],[2.036,-7.77],[0,-55.168]],\"v\":[[-6.282,-65.253],[-95.629,24.934],[-92.814,54.288],[-74.149,68.933],[-18.989,68.933],[38.611,11.333],[38.611,49.733],[57.811,68.933],[74.574,68.933],[93.087,54.865],[96.211,30.533]],\"c\":true}]},{\"t\":99}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.277999997606,0.287999979655,0.316000007181,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[96.461,69.184],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":144,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":12,\"ty\":4,\"nm\":\"Olhos\",\"parent\":13,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[96.25,192.25,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[96.25,192.25,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-5.302,0],[0,-5.302]],\"o\":[[0,-5.302],[5.302,0],[0,0]],\"v\":[[-9.6,4.8],[0,-4.8],[9.6,4.8]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.277999997606,0.287999979655,0.316000007181,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4.8,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":10,\"ml2\":{\"a\":0,\"k\":10,\"ix\":8},\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[144.25,120.25],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"OlhoEsq\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-5.302,0],[0,-5.302]],\"o\":[[0,-5.302],[5.302,0],[0,0]],\"v\":[[-9.6,4.8],[0,-4.8],[9.6,4.8]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.277999997606,0.287999979655,0.316000007181,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4.8,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":10,\"ml2\":{\"a\":0,\"k\":10,\"ix\":8},\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[48.25,120.25],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"OlhoDir\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":144,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":13,\"ty\":4,\"nm\":\"Boca\",\"parent\":14,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p667_1_0p333_0\",\"t\":7,\"s\":[96.25,192.25,0],\"e\":[92.851,192.051,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p667_1_0p333_0\",\"t\":17,\"s\":[92.851,192.051,0],\"e\":[96.95,192.323,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p667_1_0p333_0\",\"t\":25,\"s\":[96.95,192.323,0],\"e\":[96.25,192.25,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.5,\"y\":0.5},\"o\":{\"x\":0.167,\"y\":0.167},\"n\":\"0p5_0p5_0p167_0p167\",\"t\":32,\"s\":[96.25,192.25,0],\"e\":[96.25,192.25,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.902},\"o\":{\"x\":0.5,\"y\":0},\"n\":\"0p833_0p902_0p5_0\",\"t\":36,\"s\":[96.25,192.25,0],\"e\":[107.875,194.5,0],\"to\":[3.79166674613953,3.83333325386047,0],\"ti\":[-1.19525599479675,2.563636302948,0]},{\"i\":{\"x\":0.5,\"y\":1},\"o\":{\"x\":0.167,\"y\":0.445},\"n\":\"0p5_1_0p167_0p445\",\"t\":45,\"s\":[107.875,194.5,0],\"e\":[105.75,192.997,0],\"to\":[0.75066286325455,-1.61005389690399,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.5,\"y\":0.5},\"o\":{\"x\":0.5,\"y\":0.5},\"n\":\"0p5_0p5_0p5_0p5\",\"t\":55,\"s\":[105.75,192.997,0],\"e\":[105.75,192.997,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.885},\"o\":{\"x\":0.5,\"y\":0},\"n\":\"0p833_0p885_0p5_0\",\"t\":74,\"s\":[105.75,192.997,0],\"e\":[93.769,194.246,0],\"to\":[0,0,0],\"ti\":[0.98841965198517,2.38215923309326,0]},{\"i\":{\"x\":0.5,\"y\":1},\"o\":{\"x\":0.167,\"y\":0.325},\"n\":\"0p5_1_0p167_0p325\",\"t\":87,\"s\":[93.769,194.246,0],\"e\":[96.25,192.25,0],\"to\":[-0.98841965198517,-2.38215923309326,0],\"ti\":[0,0,0]},{\"t\":99}],\"ix\":2},\"a\":{\"a\":0,\"k\":[96.25,192.25,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-10.419,0],[-6.91,6.743],[4.34,0],[0,0],[-3.106,-3.031]],\"o\":[[10.419,0],[3.106,-3.031],[0,0],[-4.34,0],[6.909,6.743]],\"v\":[[96.25,173.05],[123.013,162.146],[119.702,153.85],[72.798,153.85],[69.487,162.146]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false}],\"ip\":0,\"op\":144,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":14,\"ty\":4,\"nm\":\"BaseCabeca\",\"parent\":17,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.5],\"y\":[1]},\"o\":{\"x\":[0.5],\"y\":[0]},\"n\":[\"0p5_1_0p5_0\"],\"t\":8,\"s\":[0],\"e\":[-2]},{\"i\":{\"x\":[0.5],\"y\":[1]},\"o\":{\"x\":[0.5],\"y\":[0]},\"n\":[\"0p5_1_0p5_0\"],\"t\":18,\"s\":[-2],\"e\":[0]},{\"i\":{\"x\":[0.5],\"y\":[1]},\"o\":{\"x\":[0.5],\"y\":[0]},\"n\":[\"0p5_1_0p5_0\"],\"t\":26,\"s\":[0],\"e\":[0]},{\"i\":{\"x\":[0.5],\"y\":[1]},\"o\":{\"x\":[0.5],\"y\":[0]},\"n\":[\"0p5_1_0p5_0\"],\"t\":55,\"s\":[0],\"e\":[-1.5]},{\"i\":{\"x\":[0.5],\"y\":[1]},\"o\":{\"x\":[0.5],\"y\":[0]},\"n\":[\"0p5_1_0p5_0\"],\"t\":67,\"s\":[-1.5],\"e\":[0]},{\"t\":78}],\"ix\":10},\"p\":{\"a\":0,\"k\":[19.449,0.25,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[96.25,192.25,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[13.653,10.24],[0,0],[0,12.086],[0,0],[-42.415,0],[0,-42.416],[0,0],[9.669,-7.252],[0,0]],\"o\":[[0,0],[-9.669,-7.252],[0,0],[0,-42.416],[42.416,0],[0,0],[0,12.086],[0,0],[-13.654,10.24]],\"v\":[[-23.04,91.84],[-61.44,63.04],[-76.8,32.32],[-76.8,-25.28],[0,-102.08],[76.8,-25.28],[76.8,32.32],[61.44,63.04],[23.04,91.84]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.74900004069,0.54900004069,0.380000005984,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[96.25,102.33],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"BaseCabeca\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":144,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":15,\"ty\":4,\"nm\":\"OrelhaEsq\",\"parent\":14,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.4,\"y\":1},\"o\":{\"x\":0.6,\"y\":0},\"n\":\"0p4_1_0p6_0\",\"t\":7,\"s\":[96.25,192.25,0],\"e\":[98.745,192.402,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.4,\"y\":1},\"o\":{\"x\":0.6,\"y\":0},\"n\":\"0p4_1_0p6_0\",\"t\":17,\"s\":[98.745,192.402,0],\"e\":[95.208,192.188,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.4,\"y\":1},\"o\":{\"x\":0.6,\"y\":0},\"n\":\"0p4_1_0p6_0\",\"t\":25,\"s\":[95.208,192.188,0],\"e\":[96.25,192.25,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.4,\"y\":1},\"o\":{\"x\":0.167,\"y\":0},\"n\":\"0p4_1_0p167_0\",\"t\":32,\"s\":[96.25,192.25,0],\"e\":[96.25,192.25,0],\"to\":[0,0,0],\"ti\":[2.00000016548074e-11,1.00000008274037e-11,0]},{\"i\":{\"x\":0.833,\"y\":0.898},\"o\":{\"x\":0.167,\"y\":0},\"n\":\"0p833_0p898_0p167_0\",\"t\":36,\"s\":[96.25,192.25,0],\"e\":[91.187,189.031,0],\"to\":[-1.4375,-2.4375,0],\"ti\":[0.43888318538666,-1.05053520202637,0]},{\"i\":{\"x\":0.4,\"y\":1},\"o\":{\"x\":0.167,\"y\":0.393},\"n\":\"0p4_1_0p167_0p393\",\"t\":45,\"s\":[91.187,189.031,0],\"e\":[92.186,190.251,0],\"to\":[-0.43888318538666,1.05053520202637,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.4,\"y\":1},\"o\":{\"x\":0.167,\"y\":0},\"n\":\"0p4_1_0p167_0\",\"t\":55,\"s\":[92.186,190.251,0],\"e\":[92.186,190.251,0],\"to\":[0,0,0],\"ti\":[-0.05580786243081,-0.0585994720459,0]},{\"i\":{\"x\":0.833,\"y\":0.892},\"o\":{\"x\":0.167,\"y\":0},\"n\":\"0p833_0p892_0p167_0\",\"t\":74,\"s\":[92.186,190.251,0],\"e\":[97.514,192.31,0],\"to\":[3.85308337211609,0.42120134830475,0],\"ti\":[0.31920373439789,-0.69349247217178,0]},{\"i\":{\"x\":0.4,\"y\":1},\"o\":{\"x\":0.167,\"y\":0.41},\"n\":\"0p4_1_0p167_0p41\",\"t\":87,\"s\":[97.514,192.31,0],\"e\":[96.25,192.25,0],\"to\":[-0.31920373439789,0.69349247217178,0],\"ti\":[2.00000016548074e-11,1.00000008274037e-11,0]},{\"t\":99}],\"ix\":2},\"a\":{\"a\":0,\"k\":[96.25,192.25,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-10.604],[10.604,0],[0,10.604],[-10.604,0]],\"o\":[[0,10.604],[-10.604,0],[0,-10.604],[10.604,0]],\"v\":[[192.25,115.45],[173.05,134.65],[153.85,115.45],[173.05,96.25]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.672000002394,0.497999991623,0.351000019148,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false}],\"ip\":0,\"op\":144,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":16,\"ty\":4,\"nm\":\"OrelhaDir\",\"parent\":15,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[96.25,192.25,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[96.25,192.25,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-10.604],[10.604,0],[0,10.604],[-10.604,0]],\"o\":[[0,10.604],[-10.604,0],[0,-10.604],[10.604,0]],\"v\":[[38.65,115.45],[19.45,134.65],[0.25,115.45],[19.45,96.25]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.672000002394,0.497999991623,0.351000019148,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false}],\"ip\":0,\"op\":144,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":17,\"ty\":4,\"nm\":\"Pescoco Outlines\",\"parent\":22,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.4],\"y\":[1]},\"o\":{\"x\":[0.6],\"y\":[0]},\"n\":[\"0p4_1_0p6_0\"],\"t\":6,\"s\":[0],\"e\":[-2]},{\"i\":{\"x\":[0.4],\"y\":[1]},\"o\":{\"x\":[0.6],\"y\":[0]},\"n\":[\"0p4_1_0p6_0\"],\"t\":16,\"s\":[-2],\"e\":[1]},{\"i\":{\"x\":[0.4],\"y\":[1]},\"o\":{\"x\":[0.6],\"y\":[0]},\"n\":[\"0p4_1_0p6_0\"],\"t\":24,\"s\":[1],\"e\":[0]},{\"i\":{\"x\":[0.5],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"n\":[\"0p5_1_0p167_0\"],\"t\":31,\"s\":[0],\"e\":[0]},{\"i\":{\"x\":[0.5],\"y\":[1]},\"o\":{\"x\":[0.5],\"y\":[0]},\"n\":[\"0p5_1_0p5_0\"],\"t\":36,\"s\":[0],\"e\":[-2]},{\"i\":{\"x\":[0.5],\"y\":[1]},\"o\":{\"x\":[0.5],\"y\":[0]},\"n\":[\"0p5_1_0p5_0\"],\"t\":45,\"s\":[-2],\"e\":[-1.8]},{\"i\":{\"x\":[0.5],\"y\":[1]},\"o\":{\"x\":[0.5],\"y\":[0]},\"n\":[\"0p5_1_0p5_0\"],\"t\":55,\"s\":[-1.8],\"e\":[-5]},{\"i\":{\"x\":[0.5],\"y\":[1]},\"o\":{\"x\":[0.5],\"y\":[0]},\"n\":[\"0p5_1_0p5_0\"],\"t\":64,\"s\":[-5],\"e\":[-4]},{\"i\":{\"x\":[0.833],\"y\":[1]},\"o\":{\"x\":[0.5],\"y\":[0]},\"n\":[\"0p833_1_0p5_0\"],\"t\":75,\"s\":[-4],\"e\":[-4]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0]},\"n\":[\"0p833_0p833_0p167_0\"],\"t\":115,\"s\":[-4],\"e\":[-10]},{\"t\":132}],\"ix\":10},\"p\":{\"a\":0,\"k\":[75.302,22.95,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[19.45,22.95,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[10.604,0],[0,0],[0,10.604],[0,0],[0,0],[0,0]],\"o\":[[0,0],[-10.604,0],[0,0],[0,0],[0,0],[0,10.604]],\"v\":[[0,19.2],[0,19.2],[-19.2,0],[-19.2,-19.2],[19.2,-19.2],[19.2,0]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.672000002394,0.497999991623,0.351000019148,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[19.45,19.45],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":144,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":18,\"ty\":4,\"nm\":\"Dedos_Dir\",\"parent\":32,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":-46.159,\"ix\":10},\"p\":{\"a\":0,\"k\":[80.898,204.773,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[24.25,25.341,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[4.174,4.174],[0,0],[4.174,4.174],[0,0],[0,0],[4.098,4.099],[0,0],[0,4.243],[0,0],[-8.836,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,5.904],[0,0],[0,5.904],[0,0],[0,0],[0.011,5.795],[0,0],[-3.045,-3.045],[0,0],[0,-8.836],[0,0],[0,0],[0,0],[0,0]],\"v\":[[24,16.086],[24,16.086],[12.687,20.773],[8,16.086],[-3.313,20.773],[-8,16.086],[-8,16.386],[-19.094,20.992],[-19.275,20.811],[-24,9.459],[-24,-9.091],[-8,-25.091],[24,-25.091],[24,-9.091],[24,9.459]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.74900004069,0.54900004069,0.380000005984,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[24.25,25.341],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":144,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":19,\"ty\":4,\"nm\":\"Dedos_Esq\",\"parent\":28,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.4],\"y\":[1]},\"o\":{\"x\":[0.6],\"y\":[0]},\"n\":[\"0p4_1_0p6_0\"],\"t\":54,\"s\":[217],\"e\":[325]},{\"i\":{\"x\":[0.4],\"y\":[1]},\"o\":{\"x\":[0.6],\"y\":[0]},\"n\":[\"0p4_1_0p6_0\"],\"t\":64,\"s\":[325],\"e\":[281]},{\"t\":75}],\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.867},\"o\":{\"x\":0.6,\"y\":0},\"n\":\"0p833_0p867_0p6_0\",\"t\":54,\"s\":[44.2,95.034,0],\"e\":[33.838,90.232,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.4,\"y\":1},\"o\":{\"x\":0.167,\"y\":0.222},\"n\":\"0p4_1_0p167_0p222\",\"t\":59,\"s\":[33.838,90.232,0],\"e\":[40.595,89.034,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.4,\"y\":1},\"o\":{\"x\":0.6,\"y\":0},\"n\":\"0p4_1_0p6_0\",\"t\":64,\"s\":[40.595,89.034,0],\"e\":[31.118,88.372,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"t\":75}],\"ix\":2},\"a\":{\"a\":0,\"k\":[14.851,8.132,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.5,\"y\":1},\"o\":{\"x\":0.5,\"y\":0},\"n\":\"0p5_1_0p5_0\",\"t\":54,\"s\":[{\"i\":[[0,0],[0,0],[-4.186,4.174],[0,0],[-4.186,4.174],[0,0],[0,0],[-4.11,4.099],[0,0],[0,4.243],[0,0],[8.862,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,5.904],[0,0],[0,5.904],[0,0],[0,0],[-0.011,5.795],[0,0],[3.054,-3.045],[0,0],[0,-8.836],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-24.071,16.086],[-24.071,16.086],[-12.725,20.773],[-8.024,16.086],[3.323,20.773],[8.024,16.086],[8.024,16.386],[19.151,20.992],[19.332,20.811],[24.071,9.459],[24.071,-9.091],[8.024,-25.091],[-24.071,-25.091],[-24.071,-9.091],[-24.071,9.459]],\"c\":true}],\"e\":[{\"i\":[[0,0],[0,0],[-4.186,4.174],[0,0],[-4.186,4.174],[0,0],[0,0],[-4.11,4.099],[0,0],[0,4.243],[0,0],[8.862,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,5.904],[0,0],[0,5.904],[0,0],[0,0],[-0.011,5.795],[0,0],[3.054,-3.045],[0,0],[0,-8.836],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-24.108,-0.248],[-24.108,-0.248],[-12.761,4.439],[-8.06,-0.248],[3.286,4.439],[7.987,-0.248],[7.987,0.052],[19.114,4.658],[19.296,4.477],[24.035,-6.875],[24.071,-9.091],[8.024,-25.091],[-24.071,-25.091],[-24.071,-9.091],[-24.108,-6.875]],\"c\":true}]},{\"t\":71}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.74900004069,0.54900004069,0.380000005984,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[24.25,25.341],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":76,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":21,\"ty\":4,\"nm\":\"Saia Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.4,\"y\":1},\"o\":{\"x\":0.6,\"y\":0},\"n\":\"0p4_1_0p6_0\",\"t\":0,\"s\":[-261.206,686.617,0],\"e\":[211.794,686.617,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.75,\"y\":0.75},\"o\":{\"x\":0.6,\"y\":0.6},\"n\":\"0p75_0p75_0p6_0p6\",\"t\":16,\"s\":[211.794,686.617,0],\"e\":[211.794,686.617,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.75,\"y\":1},\"o\":{\"x\":0.75,\"y\":0},\"n\":\"0p75_1_0p75_0\",\"t\":113,\"s\":[211.794,686.617,0],\"e\":[1031.794,686.617,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"t\":143}],\"ix\":2},\"a\":{\"a\":0,\"k\":[77.05,108.79,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.254,5.098],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.254,-5.097]],\"v\":[[76.038,-20.164],[67.2,-108.54],[-67.2,-108.54],[-76.8,-12.541],[-67.255,268.54],[66.345,268.54],[76.8,-4.881]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.277999997606,0.287999979655,0.316000007181,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[77.05,108.791],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":144,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":22,\"ty\":4,\"nm\":\"Corpo Outlines\",\"parent\":21,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.5],\"y\":[1]},\"o\":{\"x\":[0.5],\"y\":[0]},\"n\":[\"0p5_1_0p5_0\"],\"t\":4,\"s\":[0],\"e\":[-3]},{\"i\":{\"x\":[0.5],\"y\":[1]},\"o\":{\"x\":[0.5],\"y\":[0]},\"n\":[\"0p5_1_0p5_0\"],\"t\":14,\"s\":[-3],\"e\":[1]},{\"i\":{\"x\":[0.5],\"y\":[1]},\"o\":{\"x\":[0.5],\"y\":[0]},\"n\":[\"0p5_1_0p5_0\"],\"t\":21,\"s\":[1],\"e\":[0]},{\"i\":{\"x\":[0.545],\"y\":[1]},\"o\":{\"x\":[0.248],\"y\":[0]},\"n\":[\"0p545_1_0p248_0\"],\"t\":27,\"s\":[0],\"e\":[0]},{\"i\":{\"x\":[0.596],\"y\":[1]},\"o\":{\"x\":[0.27],\"y\":[0]},\"n\":[\"0p596_1_0p27_0\"],\"t\":38,\"s\":[0],\"e\":[-1]},{\"i\":{\"x\":[0.4],\"y\":[1]},\"o\":{\"x\":[0.29],\"y\":[0]},\"n\":[\"0p4_1_0p29_0\"],\"t\":51,\"s\":[-1],\"e\":[-3]},{\"i\":{\"x\":[0.4],\"y\":[1]},\"o\":{\"x\":[0.6],\"y\":[0]},\"n\":[\"0p4_1_0p6_0\"],\"t\":66,\"s\":[-3],\"e\":[1]},{\"i\":{\"x\":[0.4],\"y\":[1]},\"o\":{\"x\":[0.6],\"y\":[0]},\"n\":[\"0p4_1_0p6_0\"],\"t\":76,\"s\":[1],\"e\":[-5]},{\"i\":{\"x\":[0.4],\"y\":[1]},\"o\":{\"x\":[0.6],\"y\":[0]},\"n\":[\"0p4_1_0p6_0\"],\"t\":88,\"s\":[-5],\"e\":[-4]},{\"i\":{\"x\":[0.833],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"n\":[\"0p833_1_0p167_0\"],\"t\":100,\"s\":[-4],\"e\":[-4]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.75],\"y\":[0]},\"n\":[\"0p833_0p833_0p75_0\"],\"t\":113,\"s\":[-4],\"e\":[-10]},{\"t\":136}],\"ix\":10},\"p\":{\"a\":0,\"k\":[77.05,0.25,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[75.301,192.25,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[41.78,0],[0,0],[-2.087,-41.728],[0,0],[-66.75,0.424],[0,0]],\"o\":[[2.086,-41.728],[0,0],[-41.78,0],[0,0],[0,0],[74,-0.47],[0,0]],\"v\":[[72.965,-19.296],[0.001,-96],[0,-96],[-72.964,-19.296],[-67.2,96],[-3.544,161.5],[67.2,96]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.552999997606,0.757000014361,0.541000007181,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[75.301,96.25],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":144,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":24,\"ty\":4,\"nm\":\"Dedao_Esq\",\"parent\":19,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.4],\"y\":[1]},\"o\":{\"x\":[0.6],\"y\":[0]},\"n\":[\"0p4_1_0p6_0\"],\"t\":54,\"s\":[-52],\"e\":[-73]},{\"i\":{\"x\":[0.4],\"y\":[1]},\"o\":{\"x\":[0.6],\"y\":[0]},\"n\":[\"0p4_1_0p6_0\"],\"t\":60,\"s\":[-73],\"e\":[-10]},{\"t\":72}],\"ix\":10},\"p\":{\"a\":0,\"k\":[-6.718,23.716,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-53.897,8.282,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-8.837,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,8.836]],\"v\":[[-79.5,8],[-63.5,8],[-63.5,-8],[-95.5,-8]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.672000002394,0.497999991623,0.351000019148,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[16.25,8.25],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":76,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":25,\"ty\":4,\"nm\":\"Palma_Esq\",\"parent\":19,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[40.25,16.25,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[24.25,16.25,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.5,\"y\":1},\"o\":{\"x\":0.5,\"y\":0},\"n\":\"0p5_1_0p5_0\",\"t\":54,\"s\":[{\"i\":[[-8.955,0],[0,0],[0,8.836],[0,0],[0,0],[0.465,-8.425],[0,-0.297]],\"o\":[[0,0],[8.954,0],[0,0],[0,0],[-8.655,0],[-0.016,0.293],[0,8.836]],\"v\":[[-39.982,16],[-19.773,16.233],[-3.559,0.233],[-3.559,-15.767],[-39.982,-16],[-56.172,-0.884],[-56.196,0]],\"c\":true}],\"e\":[{\"i\":[[-8.955,0],[0,0],[0,8.836],[0,0],[0,0],[0.483,-8.408],[0,-0.309]],\"o\":[[0,0],[8.954,0],[0,0],[0,0],[-8.642,0],[-0.017,0.304],[0,8.836]],\"v\":[[-40.929,29.091],[-21.599,29.316],[-5.385,13.316],[-4.437,-15.774],[-39.982,-16],[-56.17,-0.92],[-57.225,14.714]],\"c\":true}]},{\"t\":71}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.672000002394,0.497999991623,0.351000019148,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[24.25,16.25],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":76,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":26,\"ty\":4,\"nm\":\"MaoEsq_SegurandoFolha\",\"parent\":28,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.882]},\"o\":{\"x\":[0.446],\"y\":[0]},\"n\":[\"0p833_0p882_0p446_0\"],\"t\":78,\"s\":[-83],\"e\":[-29.016]},{\"i\":{\"x\":[0.5],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0.257]},\"n\":[\"0p5_1_0p167_0p257\"],\"t\":84,\"s\":[-29.016],\"e\":[0]},{\"i\":{\"x\":[0.5],\"y\":[1]},\"o\":{\"x\":[0.5],\"y\":[0]},\"n\":[\"0p5_1_0p5_0\"],\"t\":91,\"s\":[0],\"e\":[-10]},{\"i\":{\"x\":[0.5],\"y\":[1]},\"o\":{\"x\":[0.5],\"y\":[0]},\"n\":[\"0p5_1_0p5_0\"],\"t\":103,\"s\":[-10],\"e\":[-6]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0]},\"n\":[\"0p833_0p833_0p167_0\"],\"t\":114,\"s\":[-6],\"e\":[-14]},{\"t\":138}],\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.5,\"y\":1},\"o\":{\"x\":0.6,\"y\":0},\"n\":\"0p5_1_0p6_0\",\"t\":75,\"s\":[20.574,80.086,0],\"e\":[44.297,36.542,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.5,\"y\":0.5},\"o\":{\"x\":0.5,\"y\":0.5},\"n\":\"0p5_0p5_0p5_0p5\",\"t\":88,\"s\":[44.297,36.542,0],\"e\":[44.297,36.542,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"t\":100}],\"ix\":2},\"a\":{\"a\":0,\"k\":[79.256,0.288,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[-4.558,0],[0,0]],\"o\":[[0,0],[0,0],[0,-4.558],[0,0],[0,0]],\"v\":[[7.818,9.893],[-8.689,9.893],[-8.689,1.64],[-0.435,-6.613],[7.818,-6.613]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.672000002394,0.497999991623,0.351000019148,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[50.424,9.85],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[-4.307,4.307],[0,0],[-4.306,4.307],[0,0],[0,0],[-4.227,4.227],[0,0],[0,4.378],[0,0],[9.116,0],[0,0]],\"o\":[[0,0],[0,6.091],[0,0],[0,6.091],[0,0],[0,0],[-0.01,5.979],[0,0],[3.141,-3.141],[0,0],[0,-9.116],[0,0],[0,0]],\"v\":[[-30.582,8.452],[-30.582,8.452],[-18.911,13.287],[-14.076,8.452],[-2.404,13.287],[2.431,8.452],[2.43,8.76],[13.875,13.514],[14.064,13.326],[18.937,1.615],[18.937,-1.015],[2.431,-17.522],[-30.582,-17.522]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.74900004069,0.54900004069,0.380000005984,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[88.824,20.759],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":76,\"op\":144,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":27,\"ty\":4,\"nm\":\"Folha\",\"parent\":26,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[78.449,18.455,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[98.424,19.45,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"n\":\"0p833_0p833_0p167_0p167\",\"t\":77,\"s\":[{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[136.823,153.85],[137.077,162.698]],\"c\":false}],\"e\":[{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[136.823,153.85],[136.823,211.45]],\"c\":false}]},{\"t\":81}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.497000002394,0.513000009574,0.564999988032,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":9.6,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":10,\"ml2\":{\"a\":0,\"k\":10,\"ix\":8},\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"n\":\"0p833_0p833_0p167_0p167\",\"t\":77,\"s\":[{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[117.623,153.85],[117.876,162.698]],\"c\":false}],\"e\":[{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[117.623,153.85],[117.623,211.45]],\"c\":false}]},{\"t\":81}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.497000002394,0.513000009574,0.564999988032,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":19.2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":10,\"ml2\":{\"a\":0,\"k\":10,\"ix\":8},\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"n\":\"0p833_0p833_0p167_0p167\",\"t\":77,\"s\":[{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[98.424,153.85],[98.677,162.698]],\"c\":false}],\"e\":[{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[98.424,153.85],[98.424,211.45]],\"c\":false}]},{\"t\":81}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.497000002394,0.513000009574,0.564999988032,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4.8,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":10,\"ml2\":{\"a\":0,\"k\":10,\"ix\":8},\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 5\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"n\":\"0p833_0p833_0p167_0p167\",\"t\":77,\"s\":[{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[79.224,153.85],[79.477,162.698]],\"c\":false}],\"e\":[{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[79.224,153.85],[79.224,211.45]],\"c\":false}]},{\"t\":81}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.497000002394,0.513000009574,0.564999988032,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":14.4,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":10,\"ml2\":{\"a\":0,\"k\":10,\"ix\":8},\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 6\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"n\":\"0p833_0p833_0p167_0p167\",\"t\":77,\"s\":[{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[60.024,153.85],[60.277,162.698]],\"c\":false}],\"e\":[{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[60.024,153.85],[60.024,211.45]],\"c\":false}]},{\"t\":81}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.497000002394,0.513000009574,0.564999988032,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":9.6,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":10,\"ml2\":{\"a\":0,\"k\":10,\"ix\":8},\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 7\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[40.823,115.45],[156.023,115.45]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.497000002394,0.513000009574,0.564999988032,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4.8,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":10,\"ml2\":{\"a\":0,\"k\":10,\"ix\":8},\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 8\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[40.823,57.846],[117.623,57.846]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.497000002394,0.513000009574,0.564999988032,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":9.6,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":10,\"ml2\":{\"a\":0,\"k\":10,\"ix\":8},\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 9\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":7,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[40.823,77.05],[156.023,77.05]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.497000002394,0.513000009574,0.564999988032,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4.8,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":10,\"ml2\":{\"a\":0,\"k\":10,\"ix\":8},\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 10\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":8,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[40.823,96.25],[156.023,96.25]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.497000002394,0.513000009574,0.564999988032,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4.8,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":10,\"ml2\":{\"a\":0,\"k\":10,\"ix\":8},\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 11\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":9,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"n\":\"0p833_0p833_0p167_0p167\",\"t\":77,\"s\":[{\"i\":[[10.772,0],[0,0],[0,10.368],[0,0],[-10.772,0],[0,0],[0,-10.368],[0,0]],\"o\":[[0,0],[-10.772,0],[0,0],[0,-10.368],[0,0],[10.772,0],[0,0],[0,10.368]],\"v\":[[57.245,43.55],[-57.346,43.55],[-76.85,24.777],[-76.8,-86.827],[-57.296,-105.6],[57.295,-105.6],[76.8,-86.827],[76.75,24.777]],\"c\":true}],\"e\":[{\"i\":[[10.772,0],[0,0],[0,10.368],[0,0],[-10.772,0],[0,0],[0,-10.368],[0,0]],\"o\":[[0,0],[-10.772,0],[0,0],[0,-10.368],[0,0],[10.772,0],[0,0],[0,10.368]],\"v\":[[57.295,105.6],[-57.296,105.6],[-76.8,86.827],[-76.8,-86.827],[-57.296,-105.6],[57.295,-105.6],[76.8,-86.827],[76.8,86.827]],\"c\":true}]},{\"t\":81}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[98.424,125.05],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 12\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":10,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":76,\"op\":144,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":28,\"ty\":4,\"nm\":\"AnteBracoEsq Outlines\",\"parent\":29,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.25],\"y\":[1]},\"o\":{\"x\":[0.5],\"y\":[0]},\"n\":[\"0p25_1_0p5_0\"],\"t\":54,\"s\":[165],\"e\":[33]},{\"i\":{\"x\":[0.5],\"y\":[1]},\"o\":{\"x\":[0.75],\"y\":[0]},\"n\":[\"0p5_1_0p75_0\"],\"t\":64,\"s\":[33],\"e\":[65]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.5],\"y\":[0]},\"n\":[\"0p667_1_0p5_0\"],\"t\":75,\"s\":[65],\"e\":[28]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"n\":[\"0p667_1_0p333_0\"],\"t\":88,\"s\":[28],\"e\":[30]},{\"t\":100}],\"ix\":10},\"p\":{\"a\":0,\"k\":[130.488,35.472,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[2.313,200.199,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[8.355,0],[1.763,0.504],[-2.912,10.197],[0,0],[-10.194,-2.908],[2.912,-10.196],[0,0]],\"o\":[[-1.746,0],[-10.196,-2.913],[0,0],[2.912,-10.196],[10.196,2.913],[0,0],[-2.409,8.433]],\"v\":[[-38.345,75.42],[-43.629,74.677],[-56.816,50.94],[-19.7,-45.517],[4.036,-58.704],[17.224,-34.967],[-19.893,61.491]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.470999983245,0.630999995213,0.458999992819,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[40.824,143.168],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 13\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":144,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":29,\"ty\":4,\"nm\":\"BracoEsq Outlines\",\"parent\":22,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.25],\"y\":[1]},\"o\":{\"x\":[0.5],\"y\":[0]},\"n\":[\"0p25_1_0p5_0\"],\"t\":54,\"s\":[26],\"e\":[1]},{\"i\":{\"x\":[0.5],\"y\":[1]},\"o\":{\"x\":[0.75],\"y\":[0]},\"n\":[\"0p5_1_0p75_0\"],\"t\":64,\"s\":[1],\"e\":[20]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.5],\"y\":[0]},\"n\":[\"0p667_1_0p5_0\"],\"t\":75,\"s\":[20],\"e\":[-22]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"n\":[\"0p667_1_0p333_0\"],\"t\":88,\"s\":[-22],\"e\":[-20]},{\"i\":{\"x\":[0.833],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"n\":[\"0p833_1_0p167_0\"],\"t\":100,\"s\":[-20],\"e\":[-20]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.75],\"y\":[0]},\"n\":[\"0p833_0p833_0p75_0\"],\"t\":114,\"s\":[-20],\"e\":[-4]},{\"t\":136}],\"ix\":10},\"p\":{\"a\":0,\"k\":[125.67,38.656,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[27.407,29.355,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-2.294,-0.273],[0,0],[1.326,-10.604],[8.575,-1.072],[0,0],[1.988,15.906],[-15.905,1.988]],\"o\":[[0,0],[10.604,1.326],[-1.121,8.967],[0,0],[-15.906,1.988],[-1.988,-15.906],[2.396,-0.299]],\"v\":[[-30.269,-29.645],[68.605,-13.566],[85.405,8.034],[68.605,24.834],[-30.269,27.956],[-62.669,2.755],[-37.469,-29.645]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.470999983245,0.630999995213,0.458999992819,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[64.907,30.194],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":144,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":30,\"ty\":4,\"nm\":\"Gaveteiro Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.25,\"y\":1},\"o\":{\"x\":0.25,\"y\":0},\"n\":\"0p25_1_0p25_0\",\"t\":4,\"s\":[919.597,578.076,0],\"e\":[644.597,578.076,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.75,\"y\":0.75},\"o\":{\"x\":0.25,\"y\":0.25},\"n\":\"0p75_0p75_0p25_0p25\",\"t\":23,\"s\":[644.597,578.076,0],\"e\":[644.597,578.076,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.75,\"y\":1},\"o\":{\"x\":0.75,\"y\":0},\"n\":\"0p75_1_0p75_0\",\"t\":109,\"s\":[644.597,578.076,0],\"e\":[1244.597,578.076,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"t\":139}],\"ix\":2},\"a\":{\"a\":0,\"k\":[106.653,288.25,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[10.42,0],[6.91,-6.743],[-4.339,0],[0,0],[3.105,3.032]],\"o\":[[-10.419,0],[-3.105,3.032],[0,0],[4.34,0],[-6.91,-6.743]],\"v\":[[0,-9.6],[-26.763,1.303],[-23.452,9.6],[23.452,9.6],[26.764,1.303]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.497000002394,0.513000009574,0.564999988032,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[48.251,509.05],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[28.801,19.2],[-28.801,19.2],[-28.801,-19.2],[28.801,-19.2]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.814999988032,0.814999988032,0.814999988032,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[48.251,461.05],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[9.6,96],[-9.6,96],[-9.6,-96],[9.6,-96]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.814999988032,0.814999988032,0.814999988032,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[105.851,480.25],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[48,-96],[-48,-96],[-48,96],[48,96]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.633999992819,0.644999964097,0.686999990426,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[48.25,480.25],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[10.42,0],[6.91,-6.743],[-4.339,0],[0,0],[3.105,3.031]],\"o\":[[-10.419,0],[-3.105,3.031],[0,0],[4.34,0],[-6.91,-6.743]],\"v\":[[0,-9.6],[-26.763,1.304],[-23.452,9.6],[23.452,9.6],[26.764,1.304]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.497000002394,0.513000009574,0.564999988032,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[48.251,125.05],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 5\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[28.801,19.2],[-28.801,19.2],[-28.801,-19.2],[28.801,-19.2]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.814999988032,0.814999988032,0.814999988032,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[48.251,77.05],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 6\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[9.6,96],[-9.6,96],[-9.6,-96],[9.6,-96]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.814999988032,0.814999988032,0.814999988032,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[105.851,96.25],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 7\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":7,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[48,-96],[-48,-96],[-48,96],[48,96]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.633999992819,0.644999964097,0.686999990426,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[48.25,96.25],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 8\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":8,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[48,-96],[-48,-96],[-48,96],[48,96]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.277999997606,0.287999979655,0.316000007181,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[67.451,288.25],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 9\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":9,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-58.403,96],[258.403,96],[258.403,-96],[-58.403,-96]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.814999988032,0.814999988032,0.814999988032,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[154.653,96.25],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 10\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":10,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-58.403,96],[258.403,96],[258.403,-96],[-58.403,-96]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.814999988032,0.814999988032,0.814999988032,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[154.653,480.25],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 11\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":11,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-58.403,96.001],[258.403,96.001],[258.403,-96.001],[-58.403,-96.001]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.814999988032,0.814999988032,0.814999988032,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[154.653,288.25],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 12\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":12,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":4,\"op\":140,\"st\":4,\"bm\":0},{\"ddd\":0,\"ind\":31,\"ty\":4,\"nm\":\"Palma_Dir\",\"parent\":18,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[40.25,16.25,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[24.25,16.25,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[8.837,0],[0,0],[0,8.836],[0,0],[0,0],[0,-8.836]],\"o\":[[0,0],[-8.836,0],[0,0],[0,0],[8.837,0],[0,8.836]],\"v\":[[8,16],[-8,16],[-24,0],[-24,-16],[8,-16],[24,0]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.672000002394,0.497999991623,0.351000019148,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[24.25,16.25],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":144,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":32,\"ty\":4,\"nm\":\"BracoDir Outlines\",\"parent\":22,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[-14.451,109.202,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[66.62,105.02,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[6.362,8.483],[0,0],[-8.483,6.362],[-6.362,-8.483],[0,0],[8.483,-6.362]],\"o\":[[0,0],[-6.362,-8.483],[8.483,-6.363],[0,0],[6.362,8.484],[-8.483,6.362]],\"v\":[[13.44,49.92],[-44.16,-26.88],[-40.32,-53.76],[-13.44,-49.919],[44.16,26.88],[40.32,53.76]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.552999997606,0.757000014361,0.541000007181,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[50.772,149.668],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-5.895,7.025],[0,0],[-12.241,-10.253],[10.253,-12.242],[1.235,-1.049],[0,0],[6.835,8.161]],\"o\":[[0,0],[10.253,-12.241],[12.241,10.253],[-1.075,1.284],[0,0],[-8.161,6.835],[-6.093,-7.274]],\"v\":[[-59.251,31.726],[10.762,-51.861],[51.49,-55.462],[55.09,-14.731],[51.49,-11.132],[-32.098,58.879],[-59.251,56.48]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.552999997606,0.757000014361,0.541000007181,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[67.646,65.965],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":144,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":33,\"ty\":4,\"nm\":\"Cabelo Outlines\",\"parent\":14,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.4,\"y\":1},\"o\":{\"x\":0.6,\"y\":0},\"n\":\"0p4_1_0p6_0\",\"t\":7,\"s\":[96.25,144.119,0],\"e\":[101.241,144.424,0],\"to\":[-0.04319534450769,0.01900739409029,0],\"ti\":[0.39826059341431,0.06456126272678,0]},{\"i\":{\"x\":0.4,\"y\":1},\"o\":{\"x\":0.6,\"y\":0},\"n\":\"0p4_1_0p6_0\",\"t\":17,\"s\":[101.241,144.424,0],\"e\":[93.861,143.732,0],\"to\":[-0.39826059341431,-0.06456126272678,0],\"ti\":[0.83178746700287,0.05073538795114,0]},{\"i\":{\"x\":0.4,\"y\":1},\"o\":{\"x\":0.6,\"y\":0},\"n\":\"0p4_1_0p6_0\",\"t\":25,\"s\":[93.861,143.732,0],\"e\":[96.25,144.119,0],\"to\":[-0.83178746700287,-0.05073538795114,0],\"ti\":[-0.39826059341431,-0.06456126272678,0]},{\"i\":{\"x\":0.4,\"y\":0.4},\"o\":{\"x\":0.167,\"y\":0.167},\"n\":\"0p4_0p4_0p167_0p167\",\"t\":32,\"s\":[96.25,144.119,0],\"e\":[96.25,144.119,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.892},\"o\":{\"x\":0.6,\"y\":0},\"n\":\"0p833_0p892_0p6_0\",\"t\":36,\"s\":[96.25,144.119,0],\"e\":[88.75,142.994,0],\"to\":[-2.90566921234131,-1.2509046792984,0],\"ti\":[0.3134977221489,-0.81121009588242,0]},{\"i\":{\"x\":0.4,\"y\":1},\"o\":{\"x\":0.167,\"y\":0.327},\"n\":\"0p4_1_0p167_0p327\",\"t\":45,\"s\":[88.75,142.994,0],\"e\":[91.062,143.558,0],\"to\":[-0.45908460021019,1.18793225288391,0],\"ti\":[-0.05502143502235,0.00951172690839,0]},{\"i\":{\"x\":0.4,\"y\":1},\"o\":{\"x\":0.6,\"y\":0},\"n\":\"0p4_1_0p6_0\",\"t\":55,\"s\":[91.062,143.558,0],\"e\":[91.062,143.558,0],\"to\":[0.05502143502235,-0.00951172690839,0],\"ti\":[0.00133138266392,0.07245649397373,0]},{\"i\":{\"x\":0.833,\"y\":0.882},\"o\":{\"x\":0.6,\"y\":0},\"n\":\"0p833_0p882_0p6_0\",\"t\":74,\"s\":[91.062,143.558,0],\"e\":[97.975,144.204,0],\"to\":[-0.00133138266392,-0.07245649397373,0],\"ti\":[0.93490695953369,-0.78199905157089,0]},{\"i\":{\"x\":0.4,\"y\":1},\"o\":{\"x\":0.167,\"y\":0.35},\"n\":\"0p4_1_0p167_0p35\",\"t\":88,\"s\":[97.975,144.204,0],\"e\":[96.25,144.119,0],\"to\":[-0.93490695953369,0.78199905157089,0],\"ti\":[0,0,0]},{\"t\":99}],\"ix\":2},\"a\":{\"a\":0,\"k\":[116.523,86.52,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.4,\"y\":1},\"o\":{\"x\":0.6,\"y\":0},\"n\":\"0p4_1_0p6_0\",\"t\":7,\"s\":[{\"i\":[[0,0],[0,0],[-4.555,-9.109],[0,0],[0,0],[-27.968,-3.995],[0,0],[-3.602,0.515],[0,0],[15.671,23.508],[0,0],[0,0],[3.221,9.661],[0,0],[79.069,1.827]],\"o\":[[0,0],[-3.221,9.661],[0,0],[0,0],[-15.671,23.508],[0,0],[3.602,0.515],[0,0],[27.968,-3.995],[0,0],[0,0],[4.555,-9.109],[0,0],[0,0],[-79.069,-1.827]],\"v\":[[-90.694,-93.908],[-110.17,-43.758],[-108.087,-14.442],[-96,9.73],[-100.602,16.633],[-74.082,75.948],[-5.431,85.755],[5.43,85.755],[74.081,75.948],[100.602,16.633],[96,9.73],[108.086,-14.442],[110.17,-43.758],[90.561,-95.748],[2.497,-133.48]],\"c\":true}],\"e\":[{\"i\":[[0,0],[0,0],[-4.555,-9.109],[0,0],[0,0],[-27.968,-3.995],[0,0],[-3.602,0.515],[0,0],[15.671,23.508],[0,0],[0,0],[3.221,9.661],[7.681,25.07],[79.069,1.827]],\"o\":[[0,0],[-3.221,9.661],[0,0],[0,0],[-15.671,23.508],[0,0],[3.602,0.515],[0,0],[27.968,-3.995],[0,0],[0,0],[4.555,-9.109],[0,0],[-7.681,-25.07],[-79.069,-1.827]],\"v\":[[-90.694,-93.908],[-110.17,-43.758],[-108.087,-14.443],[-96,9.73],[-100.602,16.633],[-74.082,75.948],[-5.431,85.755],[5.43,85.755],[74.081,75.948],[100.602,16.633],[96,9.73],[108.086,-14.443],[110.17,-43.758],[87.515,-99.19],[-8.494,-162.704]],\"c\":true}]},{\"i\":{\"x\":0.4,\"y\":1},\"o\":{\"x\":0.6,\"y\":0},\"n\":\"0p4_1_0p6_0\",\"t\":17,\"s\":[{\"i\":[[0,0],[0,0],[-4.555,-9.109],[0,0],[0,0],[-27.968,-3.995],[0,0],[-3.602,0.515],[0,0],[15.671,23.508],[0,0],[0,0],[3.221,9.661],[7.681,25.07],[79.069,1.827]],\"o\":[[0,0],[-3.221,9.661],[0,0],[0,0],[-15.671,23.508],[0,0],[3.602,0.515],[0,0],[27.968,-3.995],[0,0],[0,0],[4.555,-9.109],[0,0],[-7.681,-25.07],[-79.069,-1.827]],\"v\":[[-90.694,-93.908],[-110.17,-43.758],[-108.087,-14.443],[-96,9.73],[-100.602,16.633],[-74.082,75.948],[-5.431,85.755],[5.43,85.755],[74.081,75.948],[100.602,16.633],[96,9.73],[108.086,-14.443],[110.17,-43.758],[87.515,-99.19],[-8.494,-162.704]],\"c\":true}],\"e\":[{\"i\":[[2.066,-26.87],[0,0],[-4.555,-9.109],[0,0],[0,0],[-27.968,-3.995],[0,0],[-3.602,0.515],[0,0],[15.671,23.508],[0,0],[0,0],[3.221,9.661],[2.305,26.118],[79.069,1.827]],\"o\":[[-1.179,15.338],[-3.221,9.661],[0,0],[0,0],[-15.671,23.508],[0,0],[3.602,0.515],[0,0],[27.968,-3.995],[0,0],[0,0],[4.555,-9.109],[0,0],[-2.267,-25.684],[-79.069,-1.827]],\"v\":[[-90.886,-91.652],[-110.17,-43.758],[-108.087,-14.443],[-96,9.73],[-100.602,16.633],[-74.082,75.948],[-5.431,85.755],[5.43,85.755],[74.081,75.948],[100.602,16.633],[96,9.73],[108.086,-14.443],[110.17,-43.758],[99.915,-93.506],[7.513,-162.614]],\"c\":true}]},{\"i\":{\"x\":0.4,\"y\":1},\"o\":{\"x\":0.6,\"y\":0},\"n\":\"0p4_1_0p6_0\",\"t\":25,\"s\":[{\"i\":[[2.066,-26.87],[0,0],[-4.555,-9.109],[0,0],[0,0],[-27.968,-3.995],[0,0],[-3.602,0.515],[0,0],[15.671,23.508],[0,0],[0,0],[3.221,9.661],[2.305,26.118],[79.069,1.827]],\"o\":[[-1.179,15.338],[-3.221,9.661],[0,0],[0,0],[-15.671,23.508],[0,0],[3.602,0.515],[0,0],[27.968,-3.995],[0,0],[0,0],[4.555,-9.109],[0,0],[-2.267,-25.684],[-79.069,-1.827]],\"v\":[[-90.886,-91.652],[-110.17,-43.758],[-108.087,-14.443],[-96,9.73],[-100.602,16.633],[-74.082,75.948],[-5.431,85.755],[5.43,85.755],[74.081,75.948],[100.602,16.633],[96,9.73],[108.086,-14.443],[110.17,-43.758],[99.915,-93.506],[7.513,-162.614]],\"c\":true}],\"e\":[{\"i\":[[0,0],[0,0],[-4.555,-9.109],[0,0],[0,0],[-27.968,-3.995],[0,0],[-3.602,0.515],[0,0],[15.671,23.508],[0,0],[0,0],[3.221,9.661],[0,0],[79.069,1.827]],\"o\":[[0,0],[-3.221,9.661],[0,0],[0,0],[-15.671,23.508],[0,0],[3.602,0.515],[0,0],[27.968,-3.995],[0,0],[0,0],[4.555,-9.109],[0,0],[0,0],[-79.069,-1.827]],\"v\":[[-90.694,-93.908],[-110.17,-43.758],[-108.087,-14.442],[-96,9.73],[-100.602,16.633],[-74.082,75.948],[-5.431,85.755],[5.43,85.755],[74.081,75.948],[100.602,16.633],[96,9.73],[108.086,-14.442],[110.17,-43.758],[90.561,-95.748],[2.497,-133.48]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.167,\"y\":0},\"n\":\"0p833_1_0p167_0\",\"t\":32,\"s\":[{\"i\":[[0,0],[0,0],[-4.555,-9.109],[0,0],[0,0],[-27.968,-3.995],[0,0],[-3.602,0.515],[0,0],[15.671,23.508],[0,0],[0,0],[3.221,9.661],[0,0],[79.069,1.827]],\"o\":[[0,0],[-3.221,9.661],[0,0],[0,0],[-15.671,23.508],[0,0],[3.602,0.515],[0,0],[27.968,-3.995],[0,0],[0,0],[4.555,-9.109],[0,0],[0,0],[-79.069,-1.827]],\"v\":[[-90.694,-93.908],[-110.17,-43.758],[-108.087,-14.442],[-96,9.73],[-100.602,16.633],[-74.082,75.948],[-5.431,85.755],[5.43,85.755],[74.081,75.948],[100.602,16.633],[96,9.73],[108.086,-14.442],[110.17,-43.758],[90.561,-95.748],[2.497,-133.48]],\"c\":true}],\"e\":[{\"i\":[[0,0],[0,0],[-4.555,-9.109],[0,0],[0,0],[-27.968,-3.995],[0,0],[-3.602,0.515],[0,0],[15.671,23.508],[0,0],[0,0],[3.221,9.661],[0,0],[79.069,1.827]],\"o\":[[0,0],[-3.221,9.661],[0,0],[0,0],[-15.671,23.508],[0,0],[3.602,0.515],[0,0],[27.968,-3.995],[0,0],[0,0],[4.555,-9.109],[0,0],[0,0],[-79.069,-1.827]],\"v\":[[-90.694,-93.908],[-110.17,-43.758],[-108.087,-14.442],[-96,9.73],[-100.602,16.633],[-74.082,75.948],[-5.431,85.755],[5.43,85.755],[74.081,75.948],[100.602,16.633],[96,9.73],[108.086,-14.442],[110.17,-43.758],[90.561,-95.748],[2.497,-133.48]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.167,\"y\":0},\"n\":\"0p833_1_0p167_0\",\"t\":36,\"s\":[{\"i\":[[0,0],[0,0],[-4.555,-9.109],[0,0],[0,0],[-27.968,-3.995],[0,0],[-3.602,0.515],[0,0],[15.671,23.508],[0,0],[0,0],[3.221,9.661],[0,0],[79.069,1.827]],\"o\":[[0,0],[-3.221,9.661],[0,0],[0,0],[-15.671,23.508],[0,0],[3.602,0.515],[0,0],[27.968,-3.995],[0,0],[0,0],[4.555,-9.109],[0,0],[0,0],[-79.069,-1.827]],\"v\":[[-90.694,-93.908],[-110.17,-43.758],[-108.087,-14.442],[-96,9.73],[-100.602,16.633],[-74.082,75.948],[-5.431,85.755],[5.43,85.755],[74.081,75.948],[100.602,16.633],[96,9.73],[108.086,-14.442],[110.17,-43.758],[90.561,-95.748],[2.497,-133.48]],\"c\":true}],\"e\":[{\"i\":[[0,0],[0,0],[-4.555,-9.109],[0,0],[0,0],[-27.968,-3.995],[0,0],[-3.602,0.515],[0,0],[15.671,23.508],[0,0],[0,0],[3.221,9.661],[0,0],[79.069,1.827]],\"o\":[[0,0],[-3.221,9.661],[0,0],[0,0],[-15.671,23.508],[0,0],[3.602,0.515],[0,0],[27.968,-3.995],[0,0],[0,0],[4.555,-9.109],[0,0],[0,0],[-79.069,-1.827]],\"v\":[[-90.694,-93.908],[-110.17,-43.758],[-108.087,-14.442],[-96,9.73],[-100.602,16.633],[-74.082,75.948],[-5.431,85.755],[5.43,85.755],[74.081,75.948],[100.602,16.633],[96,9.73],[108.086,-14.442],[110.17,-43.758],[90.561,-95.748],[2.497,-133.48]],\"c\":true}]},{\"i\":{\"x\":0.4,\"y\":1},\"o\":{\"x\":0.167,\"y\":0},\"n\":\"0p4_1_0p167_0\",\"t\":45,\"s\":[{\"i\":[[0,0],[0,0],[-4.555,-9.109],[0,0],[0,0],[-27.968,-3.995],[0,0],[-3.602,0.515],[0,0],[15.671,23.508],[0,0],[0,0],[3.221,9.661],[0,0],[79.069,1.827]],\"o\":[[0,0],[-3.221,9.661],[0,0],[0,0],[-15.671,23.508],[0,0],[3.602,0.515],[0,0],[27.968,-3.995],[0,0],[0,0],[4.555,-9.109],[0,0],[0,0],[-79.069,-1.827]],\"v\":[[-90.694,-93.908],[-110.17,-43.758],[-108.087,-14.442],[-96,9.73],[-100.602,16.633],[-74.082,75.948],[-5.431,85.755],[5.43,85.755],[74.081,75.948],[100.602,16.633],[96,9.73],[108.086,-14.442],[110.17,-43.758],[90.561,-95.748],[2.497,-133.48]],\"c\":true}],\"e\":[{\"i\":[[0,0],[0,0],[-4.555,-9.109],[0,0],[0,0],[-27.968,-3.995],[0,0],[-3.602,0.515],[0,0],[15.671,23.508],[0,0],[0,0],[3.221,9.661],[0,0],[79.069,1.827]],\"o\":[[0,0],[-3.221,9.661],[0,0],[0,0],[-15.671,23.508],[0,0],[3.602,0.515],[0,0],[27.968,-3.995],[0,0],[0,0],[4.555,-9.109],[0,0],[0,0],[-79.069,-1.827]],\"v\":[[-90.694,-93.908],[-110.17,-43.758],[-108.087,-14.442],[-96,9.73],[-100.602,16.633],[-74.082,75.948],[-5.431,85.755],[5.43,85.755],[74.081,75.948],[100.602,16.633],[96,9.73],[108.086,-14.442],[110.17,-43.758],[90.561,-95.748],[2.497,-133.48]],\"c\":true}]},{\"i\":{\"x\":0.4,\"y\":1},\"o\":{\"x\":0.6,\"y\":0},\"n\":\"0p4_1_0p6_0\",\"t\":74,\"s\":[{\"i\":[[0,0],[0,0],[-4.555,-9.109],[0,0],[0,0],[-27.968,-3.995],[0,0],[-3.602,0.515],[0,0],[15.671,23.508],[0,0],[0,0],[3.221,9.661],[0,0],[79.069,1.827]],\"o\":[[0,0],[-3.221,9.661],[0,0],[0,0],[-15.671,23.508],[0,0],[3.602,0.515],[0,0],[27.968,-3.995],[0,0],[0,0],[4.555,-9.109],[0,0],[0,0],[-79.069,-1.827]],\"v\":[[-90.694,-93.908],[-110.17,-43.758],[-108.087,-14.442],[-96,9.73],[-100.602,16.633],[-74.082,75.948],[-5.431,85.755],[5.43,85.755],[74.081,75.948],[100.602,16.633],[96,9.73],[108.086,-14.442],[110.17,-43.758],[90.561,-95.748],[2.497,-133.48]],\"c\":true}],\"e\":[{\"i\":[[0,0],[0,0],[-4.555,-9.109],[0,0],[0,0],[-27.968,-3.995],[0,0],[-3.602,0.515],[0,0],[15.671,23.508],[0,0],[0,0],[3.221,9.661],[0,0],[79.069,1.827]],\"o\":[[0,0],[-3.221,9.661],[0,0],[0,0],[-15.671,23.508],[0,0],[3.602,0.515],[0,0],[27.968,-3.995],[0,0],[0,0],[4.555,-9.109],[0,0],[0,0],[-79.069,-1.827]],\"v\":[[-90.694,-93.908],[-110.17,-43.758],[-108.087,-14.442],[-96,9.73],[-100.602,16.633],[-74.082,75.948],[-5.431,85.755],[5.43,85.755],[74.081,75.948],[100.602,16.633],[96,9.73],[108.086,-14.442],[110.17,-43.758],[90.561,-95.748],[2.497,-133.48]],\"c\":true}]},{\"t\":99}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.277999997606,0.287999979655,0.316000007181,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[116.523,86.519],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":144,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":34,\"ty\":4,\"nm\":\"Cifrao Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[513.438,179.469,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[39.494,105.679,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.5,0.5,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.5,0.5,0.333],\"y\":[0,0,0]},\"n\":[\"0p5_1_0p5_0\",\"0p5_1_0p5_0\",\"0p667_1_0p333_0\"],\"t\":81,\"s\":[0,0,100],\"e\":[110,110,100]},{\"i\":{\"x\":[0.5,0.5,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.5,0.5,0.333],\"y\":[0,0,0]},\"n\":[\"0p5_1_0p5_0\",\"0p5_1_0p5_0\",\"0p667_1_0p333_0\"],\"t\":91,\"s\":[110,110,100],\"e\":[100,100,100]},{\"i\":{\"x\":[0.5,0.5,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.5,0.5,0.333],\"y\":[0,0,0]},\"n\":[\"0p5_1_0p5_0\",\"0p5_1_0p5_0\",\"0p667_1_0p333_0\"],\"t\":102,\"s\":[100,100,100],\"e\":[100,100,100]},{\"i\":{\"x\":[0.5,0.5,0.833],\"y\":[1,1,1]},\"o\":{\"x\":[0.5,0.5,0.333],\"y\":[0,0,0]},\"n\":[\"0p5_1_0p5_0\",\"0p5_1_0p5_0\",\"0p833_1_0p333_0\"],\"t\":115,\"s\":[100,100,100],\"e\":[110,110,100]},{\"i\":{\"x\":[0.5,0.5,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.5,0.5,0.167],\"y\":[0,0,0]},\"n\":[\"0p5_1_0p5_0\",\"0p5_1_0p5_0\",\"0p667_1_0p167_0\"],\"t\":126,\"s\":[110,110,100],\"e\":[0,0,100]},{\"t\":137}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[1.581,0],[1.036,0.946],[0,1.119],[0,0],[3.812,1.967],[2.095,3.3],[0,0.774],[-1.079,0.955],[-2.126,-2.856],[-7.833,0],[-2.755,1.729],[0,3.326],[1.624,1.449],[2.692,0.79],[3.582,1.071],[3.11,1.111],[2.326,2.676],[0,3.737],[-3.875,3.268],[-6.137,0.7],[0,0],[-0.963,0.856],[-2.105,-1.893],[0,-1.119],[0,0],[-4.692,-5.688],[0,-0.996],[1.141,-0.955],[2.261,2.42],[6.357,0],[2.095,-1.515],[0,-2.28],[-2.21,-1.391],[-3.739,-0.988],[-4.094,-1.325],[-3.121,-2.889],[0,-4.552],[4.451,-3.399],[6.828,-0.683],[0,0],[0.995,-0.848]],\"o\":[[-1.592,0],[-0.942,-0.815],[0,0],[-4.859,-0.477],[-4.461,-2.288],[-0.565,-0.972],[0,-1.284],[2.649,-2.321],[3.78,5.153],[5.425,0],[2.618,-1.646],[0,-2.115],[-1.759,-1.572],[-3.058,-0.88],[-3.634,-1.086],[-3.498,-1.243],[-2.324,-2.724],[0,-4.651],[3.446,-2.897],[0,0],[0,-1.111],[2.073,-1.86],[0.953,0.831],[0,0],[8.839,0.971],[0.712,0.881],[0,1.317],[-2.66,2.197],[-4.148,-4.272],[-4.681,0],[-2.042,1.489],[0,2.099],[2.587,1.63],[4.084,1.062],[4.42,1.424],[3.246,3.021],[0,5.845],[-3.917,2.988],[0,0],[0,1.136],[-0.984,0.897]],\"v\":[[0.44,43.44],[-3.571,41.992],[-5.027,39.013],[-5.027,34.049],[-18.086,30.37],[-27.983,21.958],[-28.8,19.389],[-27.145,15.973],[-17.353,16.895],[-0.105,24.542],[12.222,21.94],[16.118,14.557],[13.709,9.256],[7.09,5.758],[-2.901,2.844],[-13.017,-0.448],[-21.784,-6.367],[-25.291,-16.104],[-19.448,-28.048],[-5.027,-33.456],[-5.027,-38.551],[-3.55,-41.555],[4.43,-41.547],[5.907,-38.551],[5.907,-33.464],[26.297,-23.43],[27.376,-20.574],[25.627,-17.108],[16.286,-17.628],[0.649,-23.998],[-9.572,-21.709],[-12.609,-16.104],[-9.321,-10.91],[0.22,-6.967],[12.546,-3.362],[23.91,3.141],[28.8,14.557],[22.087,28.492],[5.907,34.033],[5.907,39.013],[4.388,42.042]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.40800000359,0.691999966491,0.360000011968,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[38.148,103.668],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":81,\"op\":138,\"st\":-9,\"bm\":0}],\"markers\":[]}");

/***/ }),

/***/ "./resources/js/src/views/fuec/admin.vue":
/*!***********************************************!*\
  !*** ./resources/js/src/views/fuec/admin.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _admin_vue_vue_type_template_id_de6b1f12_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.vue?vue&type=template&id=de6b1f12&scoped=true& */ "./resources/js/src/views/fuec/admin.vue?vue&type=template&id=de6b1f12&scoped=true&");
/* harmony import */ var _admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.vue?vue&type=script&lang=js& */ "./resources/js/src/views/fuec/admin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _admin_vue_vue_type_template_id_de6b1f12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _admin_vue_vue_type_template_id_de6b1f12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "de6b1f12",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/fuec/admin.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/fuec/admin.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/fuec/admin.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./admin.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/fuec/admin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/fuec/admin.vue?vue&type=template&id=de6b1f12&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/fuec/admin.vue?vue&type=template&id=de6b1f12&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_vue_vue_type_template_id_de6b1f12_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./admin.vue?vue&type=template&id=de6b1f12&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/fuec/admin.vue?vue&type=template&id=de6b1f12&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_vue_vue_type_template_id_de6b1f12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_vue_vue_type_template_id_de6b1f12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/fuec/checkPayment.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/views/fuec/checkPayment.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checkPayment_vue_vue_type_template_id_0037d366___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkPayment.vue?vue&type=template&id=0037d366& */ "./resources/js/src/views/fuec/checkPayment.vue?vue&type=template&id=0037d366&");
/* harmony import */ var _checkPayment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkPayment.vue?vue&type=script&lang=js& */ "./resources/js/src/views/fuec/checkPayment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _checkPayment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _checkPayment_vue_vue_type_template_id_0037d366___WEBPACK_IMPORTED_MODULE_0__["render"],
  _checkPayment_vue_vue_type_template_id_0037d366___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/fuec/checkPayment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/fuec/checkPayment.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/fuec/checkPayment.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkPayment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./checkPayment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/fuec/checkPayment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkPayment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/fuec/checkPayment.vue?vue&type=template&id=0037d366&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/fuec/checkPayment.vue?vue&type=template&id=0037d366& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checkPayment_vue_vue_type_template_id_0037d366___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./checkPayment.vue?vue&type=template&id=0037d366& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/fuec/checkPayment.vue?vue&type=template&id=0037d366&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checkPayment_vue_vue_type_template_id_0037d366___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checkPayment_vue_vue_type_template_id_0037d366___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/fuec/index.vue":
/*!***********************************************!*\
  !*** ./resources/js/src/views/fuec/index.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_5f5b1c7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=5f5b1c7a& */ "./resources/js/src/views/fuec/index.vue?vue&type=template&id=5f5b1c7a&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/src/views/fuec/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_5f5b1c7a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_5f5b1c7a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/fuec/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/fuec/index.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/fuec/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/fuec/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/fuec/index.vue?vue&type=template&id=5f5b1c7a&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/fuec/index.vue?vue&type=template&id=5f5b1c7a& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5f5b1c7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=5f5b1c7a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/fuec/index.vue?vue&type=template&id=5f5b1c7a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5f5b1c7a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5f5b1c7a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/fuec/other.vue":
/*!***********************************************!*\
  !*** ./resources/js/src/views/fuec/other.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _other_vue_vue_type_template_id_1b8123b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./other.vue?vue&type=template&id=1b8123b8&scoped=true& */ "./resources/js/src/views/fuec/other.vue?vue&type=template&id=1b8123b8&scoped=true&");
/* harmony import */ var _other_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./other.vue?vue&type=script&lang=js& */ "./resources/js/src/views/fuec/other.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _other_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _other_vue_vue_type_template_id_1b8123b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _other_vue_vue_type_template_id_1b8123b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1b8123b8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/fuec/other.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/fuec/other.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/fuec/other.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_other_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./other.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/fuec/other.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_other_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/fuec/other.vue?vue&type=template&id=1b8123b8&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/fuec/other.vue?vue&type=template&id=1b8123b8&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_other_vue_vue_type_template_id_1b8123b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./other.vue?vue&type=template&id=1b8123b8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/fuec/other.vue?vue&type=template&id=1b8123b8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_other_vue_vue_type_template_id_1b8123b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_other_vue_vue_type_template_id_1b8123b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);