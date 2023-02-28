(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j%7Ct)sx?$":
/*!*******************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.(j%7Ct)sx?$ ***!
  \*******************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./dark_mode_toggle_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/dark_mode_toggle_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j%7Ct)sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/dark_mode_toggle_controller.js":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/dark_mode_toggle_controller.js ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var body = document.body;
var darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
darkModeMediaQuery.addEventListener('change', function (e) {
  setTheme(e.matches ? 'dark' : 'light');
});
var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);
  var _super = _createSuper(_default);
  function _default() {
    _classCallCheck(this, _default);
    return _super.apply(this, arguments);
  }
  _createClass(_default, [{
    key: "initialize",
    value: function initialize() {
      if (localStorage.getItem("colorscheme")) {
        setTheme(localStorage.getItem("colorscheme"));
      } else if (body.classList.contains('colorscheme-light') || body.classList.contains('colorscheme-dark')) {
        setTheme(body.classList('colorscheme-dark') ? 'dark' : 'light');
      } else {
        setTheme(darkModeMediaQuery.matches ? 'dark' : 'light');
      }
    }
  }, {
    key: "toggle",
    value: function toggle() {
      var theme = body.classList.contains('colorscheme-dark') ? 'light' : 'dark';
      setTheme(theme);
      rememberTheme(theme);
    }
  }]);
  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_16__.Controller);

function setTheme(theme) {
  body.classList.remove('colorscheme-auto');
  var inverse = theme === 'dark' ? 'light' : 'dark';
  body.classList.remove("colorscheme-".concat(inverse));
  body.classList.add("colorscheme-".concat(theme));
  document.documentElement.style['color-scheme'] = theme;
  var event = new Event('themeChanged');
  document.dispatchEvent(event);
}
function rememberTheme(theme) {
  localStorage.setItem('colorscheme', theme);
}

/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");



/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j%7Ct)sx?$"));

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_da-5ab6a8"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQSxpRUFBZTtBQUNmLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRCtDO0FBRWhELElBQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDRCxJQUFJO0FBQzFCLElBQU1FLGtCQUFrQixHQUFHQyxNQUFNLENBQUNDLFVBQVUsQ0FBQyw4QkFBOEIsQ0FBQztBQUU1RUYsa0JBQWtCLENBQUNHLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFDQyxDQUFDLEVBQUs7RUFDcERDLFFBQVEsQ0FBQ0QsQ0FBQyxDQUFDRSxPQUFPLEdBQUcsTUFBTSxHQUFHLE9BQU8sQ0FBQztBQUN2QyxDQUFDLENBQUM7QUFBQyxJQUFBQyxRQUFBLDBCQUFBQyxXQUFBO0VBQUFDLFNBQUEsQ0FBQUYsUUFBQSxFQUFBQyxXQUFBO0VBQUEsSUFBQUUsTUFBQSxHQUFBQyxZQUFBLENBQUFKLFFBQUE7RUFBQSxTQUFBQSxTQUFBO0lBQUFLLGVBQUEsT0FBQUwsUUFBQTtJQUFBLE9BQUFHLE1BQUEsQ0FBQUcsS0FBQSxPQUFBQyxTQUFBO0VBQUE7RUFBQUMsWUFBQSxDQUFBUixRQUFBO0lBQUFTLEdBQUE7SUFBQUMsS0FBQSxFQUdGLFNBQUFDLFdBQUEsRUFBYTtNQUNaLElBQUlDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFO1FBQ3hDZixRQUFRLENBQUNjLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO01BQzlDLENBQUMsTUFBTSxJQUFJdEIsSUFBSSxDQUFDdUIsU0FBUyxDQUFDQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsSUFBSXhCLElBQUksQ0FBQ3VCLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLGtCQUFrQixDQUFDLEVBQUU7UUFDdkdqQixRQUFRLENBQUNQLElBQUksQ0FBQ3VCLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLE1BQU0sR0FBRyxPQUFPLENBQUM7TUFDaEUsQ0FBQyxNQUFNO1FBQ05oQixRQUFRLENBQUNMLGtCQUFrQixDQUFDTSxPQUFPLEdBQUcsTUFBTSxHQUFHLE9BQU8sQ0FBQztNQUN4RDtJQUNEO0VBQUM7SUFBQVUsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQU0sT0FBQSxFQUFTO01BQ1IsSUFBTUMsS0FBSyxHQUFHMUIsSUFBSSxDQUFDdUIsU0FBUyxDQUFDQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsR0FBRyxPQUFPLEdBQUcsTUFBTTtNQUM1RWpCLFFBQVEsQ0FBQ21CLEtBQUssQ0FBQztNQUNmQyxhQUFhLENBQUNELEtBQUssQ0FBQztJQUNyQjtFQUFDO0VBQUEsT0FBQWpCLFFBQUE7QUFBQSxFQWYyQlYsMkRBQVU7QUFBQTtBQWtCdkMsU0FBU1EsUUFBUUEsQ0FBQ21CLEtBQUssRUFBRTtFQUN4QjFCLElBQUksQ0FBQ3VCLFNBQVMsQ0FBQ00sTUFBTSxDQUFDLGtCQUFrQixDQUFDO0VBQ3pDLElBQUlDLE9BQU8sR0FBR0osS0FBSyxLQUFLLE1BQU0sR0FBRyxPQUFPLEdBQUcsTUFBTTtFQUNqRDFCLElBQUksQ0FBQ3VCLFNBQVMsQ0FBQ00sTUFBTSxnQkFBQUUsTUFBQSxDQUFnQkQsT0FBTyxFQUFHO0VBQy9DOUIsSUFBSSxDQUFDdUIsU0FBUyxDQUFDUyxHQUFHLGdCQUFBRCxNQUFBLENBQWdCTCxLQUFLLEVBQUc7RUFDMUN6QixRQUFRLENBQUNnQyxlQUFlLENBQUNDLEtBQUssQ0FBQyxjQUFjLENBQUMsR0FBR1IsS0FBSztFQUV0RCxJQUFNUyxLQUFLLEdBQUcsSUFBSUMsS0FBSyxDQUFDLGNBQWMsQ0FBQztFQUN2Q25DLFFBQVEsQ0FBQ29DLGFBQWEsQ0FBQ0YsS0FBSyxDQUFDO0FBQzlCO0FBRUEsU0FBU1IsYUFBYUEsQ0FBQ0QsS0FBSyxFQUFFO0VBQzdCTCxZQUFZLENBQUNpQixPQUFPLENBQUMsYUFBYSxFQUFFWixLQUFLLENBQUM7QUFDM0M7Ozs7Ozs7Ozs7Ozs7O0FDeEMyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBaUM7QUFFckQsSUFBTWMsR0FBRyxHQUFHRCwwRUFBZ0IsQ0FDbENFLDRJQUlDLENBQ0Q7O0FBRUQ7QUFDQTs7Ozs7Ozs7Ozs7O0FDWEEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLihqJTdDdClzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvZGFya19tb2RlX3RvZ2dsZV9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzPzhmNTkiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2RhcmtfbW9kZV90b2dnbGVfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2RhcmtfbW9kZV90b2dnbGVfY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC4oaiU3Q3Qpc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XHJcblxyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuY29uc3QgZGFya01vZGVNZWRpYVF1ZXJ5ID0gd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKTtcclxuXHJcbmRhcmtNb2RlTWVkaWFRdWVyeS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG5cdHNldFRoZW1lKGUubWF0Y2hlcyA/ICdkYXJrJyA6ICdsaWdodCcpO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XHJcblx0aW5pdGlhbGl6ZSgpIHtcclxuXHRcdGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvbG9yc2NoZW1lXCIpKSB7XHJcblx0XHRcdHNldFRoZW1lKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29sb3JzY2hlbWVcIikpO1xyXG5cdFx0fSBlbHNlIGlmIChib2R5LmNsYXNzTGlzdC5jb250YWlucygnY29sb3JzY2hlbWUtbGlnaHQnKSB8fCBib2R5LmNsYXNzTGlzdC5jb250YWlucygnY29sb3JzY2hlbWUtZGFyaycpKSB7XHJcblx0XHRcdHNldFRoZW1lKGJvZHkuY2xhc3NMaXN0KCdjb2xvcnNjaGVtZS1kYXJrJykgPyAnZGFyaycgOiAnbGlnaHQnKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNldFRoZW1lKGRhcmtNb2RlTWVkaWFRdWVyeS5tYXRjaGVzID8gJ2RhcmsnIDogJ2xpZ2h0Jyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR0b2dnbGUoKSB7XHJcblx0XHRjb25zdCB0aGVtZSA9IGJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb2xvcnNjaGVtZS1kYXJrJykgPyAnbGlnaHQnIDogJ2RhcmsnO1xyXG5cdFx0c2V0VGhlbWUodGhlbWUpO1xyXG5cdFx0cmVtZW1iZXJUaGVtZSh0aGVtZSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRUaGVtZSh0aGVtZSkge1xyXG5cdGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnY29sb3JzY2hlbWUtYXV0bycpO1xyXG5cdGxldCBpbnZlcnNlID0gdGhlbWUgPT09ICdkYXJrJyA/ICdsaWdodCcgOiAnZGFyayc7XHJcblx0Ym9keS5jbGFzc0xpc3QucmVtb3ZlKGBjb2xvcnNjaGVtZS0ke2ludmVyc2V9YCk7XHJcblx0Ym9keS5jbGFzc0xpc3QuYWRkKGBjb2xvcnNjaGVtZS0ke3RoZW1lfWApO1xyXG5cdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZVsnY29sb3Itc2NoZW1lJ10gPSB0aGVtZTtcclxuXHJcblx0Y29uc3QgZXZlbnQgPSBuZXcgRXZlbnQoJ3RoZW1lQ2hhbmdlZCcpO1xyXG5cdGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1lbWJlclRoZW1lKHRoZW1lKSB7XHJcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvbG9yc2NoZW1lJywgdGhlbWUpO1xyXG59IiwiaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XHJcblxyXG5pbXBvcnQgJy4vYm9vdHN0cmFwJzsiLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSBcIkBzeW1mb255L3N0aW11bHVzLWJyaWRnZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAoXHJcblx0cmVxdWlyZS5jb250ZXh0KFxyXG5cdFx0J0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxyXG5cdFx0dHJ1ZSxcclxuXHRcdC9cXC4oanx0KXN4PyQvXHJcblx0KVxyXG4pO1xyXG5cclxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcclxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiYm9keSIsImRvY3VtZW50IiwiZGFya01vZGVNZWRpYVF1ZXJ5Iiwid2luZG93IiwibWF0Y2hNZWRpYSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic2V0VGhlbWUiLCJtYXRjaGVzIiwiX2RlZmF1bHQiLCJfQ29udHJvbGxlciIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl9jbGFzc0NhbGxDaGVjayIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJpbml0aWFsaXplIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwidG9nZ2xlIiwidGhlbWUiLCJyZW1lbWJlclRoZW1lIiwiZGVmYXVsdCIsInJlbW92ZSIsImludmVyc2UiLCJjb25jYXQiLCJhZGQiLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsImV2ZW50IiwiRXZlbnQiLCJkaXNwYXRjaEV2ZW50Iiwic2V0SXRlbSIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJyZXF1aXJlIiwiY29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=