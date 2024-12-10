/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./asset/js/common.js":
/*!****************************!*\
  !*** ./asset/js/common.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var _require = __webpack_require__(/*! ./modules/_home */ "./asset/js/modules/_home.js"),
  Script = _require["default"];
$(document).ready(function () {
  new Script();
});

/***/ }),

/***/ "./asset/js/modules/_data.js":
/*!***********************************!*\
  !*** ./asset/js/modules/_data.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projects: () => (/* binding */ projects)
/* harmony export */ });
var projects = [{
  "id": 0,
  "category": "MitsuHeavy",
  "name": "MitsuHeavy Rebrand",
  "link": "https://mitsuheavy.preprod.fsofts.com",
  "thumb": "projects/mitsuheavy.jpg",
  "tags": [{
    "class": "dot",
    "title": "Live"
  }, {
    "class": "tag-item laravel",
    "title": "Laravel"
  }, {
    "class": "tag-item vue",
    "title": "Vue"
  }, {
    "class": "tag-item mysql",
    "title": "MySQL"
  }]
}, {
  "id": 1,
  "category": "THACO AUTO",
  "name": "Mua bán xe cũ (used car)",
  "link": "https://usedcars.thacoauto.vn",
  "thumb": "projects/usedcar.jpg",
  "tags": [{
    "class": "dot",
    "title": "Live"
  }, {
    "class": "tag-item laravel",
    "title": "Laravel"
  }, {
    "class": "tag-item vue",
    "title": "Vue"
  }, {
    "class": "tag-item mysql",
    "title": "MySQL"
  }]
}, {
  "id": 3,
  "category": "VNEA - Hiệp hội thang máy việt nam",
  "name": "Truy xuất thang máy",
  "link": "https://id.vnea.com.vn",
  "thumb": "projects/id-vnea.jpg",
  "tags": [{
    "class": "dot",
    "title": "Live"
  }, {
    "class": "tag-item laravel",
    "title": "Laravel"
  }, {
    "class": "tag-item mysql",
    "title": "MySQL"
  }]
}, {
  "id": 4,
  "category": "THACO TRUCK-BUS",
  "name": "Thaco Tải bus",
  "link": "https://thacotai.vn",
  "thumb": "projects/thaco-tai.jpg",
  "tags": [{
    "class": "dot",
    "title": "Live"
  }, {
    "class": "tag-item laravel",
    "title": "Laravel"
  }, {
    "class": "tag-item vue",
    "title": "NuxtJS"
  }, {
    "class": "tag-item mysql",
    "title": "MySQL"
  }]
}];

/***/ }),

/***/ "./asset/js/modules/_home.js":
/*!***********************************!*\
  !*** ./asset/js/modules/_home.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Script)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_data */ "./asset/js/modules/_data.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Script = /*#__PURE__*/function () {
  function Script() {
    _classCallCheck(this, Script);
    this.events();
    this.data = [];
  }
  return _createClass(Script, [{
    key: "events",
    value: function events() {
      console.log("Script is on!");
      this.renderPost(_data__WEBPACK_IMPORTED_MODULE_0__.projects);
    }
  }, {
    key: "renderTag",
    value: function renderTag() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var html = '';
      data === null || data === void 0 || data.forEach(function (el, i) {
        html += "<span class=\"".concat(el["class"], "\">").concat(el.title, "</span>");
      });
      return html;
    }
  }, {
    key: "renderPost",
    value: function renderPost() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var appendHtml = $("#post-development");
      var _this = this;
      data === null || data === void 0 || data.forEach(function (element, index) {
        appendHtml.append("\n                <li>\n                    <div class=\"card-project\">\n                        <div class=\"card-thumb\">\n                            <img src=\"./asset/images/".concat(element.thumb, "\" alt=\"").concat(element.thumb, "\">\n                            <a \n                                href=\"").concat(element.link, "\" \n                                target=\"__blank\" \n                                class=\"layer-link\"\n                            >\n                                <i class=\"fa-solid fa-link\"></i>\n                            </a>\n                        </div>\n                        <div class=\"card-body cusor-pointer\">\n                            <h3 class=\"fs-14px\">").concat(element.category, "</h3>\n                            <h4 class=\"fs-16px fw-bold\">").concat(element.name, "</h4>\n                            <div class=\"fs-14px tags-list\" style=\"margin-top: 5px;\">\n                                ").concat(_this.renderTag(element.tags), "\n                            </div>\n                        </div>\n                    </div>\n                </li> \n            "));
      });
    }
  }]);
}();


/***/ }),

/***/ "./asset/sass/common.scss":
/*!********************************!*\
  !*** ./asset/sass/common.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/asset/js/compress-common": 0,
/******/ 			"asset/css/common": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["asset/css/common"], () => (__webpack_require__("./asset/js/common.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["asset/css/common"], () => (__webpack_require__("./asset/sass/common.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;