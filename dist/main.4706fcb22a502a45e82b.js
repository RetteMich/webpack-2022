/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./blocks/button/button.js":
/*!*********************************!*\
  !*** ./blocks/button/button.js ***!
  \*********************************/
/***/ (() => {

eval("var buttonWithBorder = document.querySelectorAll('.button_with-border');\nbuttonWithBorder.forEach(function (button) {\n  button.outerHTML = '<div class=\"button\">' + button.outerHTML + '</div>';\n});\n\n//# sourceURL=webpack:///./blocks/button/button.js?");

/***/ }),

/***/ "./blocks/like/like.js":
/*!*****************************!*\
  !*** ./blocks/like/like.js ***!
  \*****************************/
/***/ (() => {

eval("var likes = document.querySelectorAll(\".like\");\nvar likeCounter = 0;\nvar likeIcon = \"\";\nlikes.forEach(function (like) {\n  like.addEventListener(\"click\", function () {\n    likeCounter = like.querySelector(\".like__counter\");\n    likeIcon = like.querySelector(\".like__icon\");\n\n    if (like.classList.contains(\"like_pressed\")) {\n      like.classList.remove(\"like_pressed\");\n      likeCounter.textContent = +likeCounter.textContent - 1;\n      likeIcon.textContent = \"favorite_border\";\n    } else {\n      like.classList.add(\"like_pressed\");\n      likeCounter.textContent = +likeCounter.textContent + 1;\n      likeIcon.textContent = \"favorite\";\n    }\n  });\n});\n\n//# sourceURL=webpack:///./blocks/like/like.js?");

/***/ }),

/***/ "./blocks/pagination/pagination.js":
/*!*****************************************!*\
  !*** ./blocks/pagination/pagination.js ***!
  \*****************************************/
/***/ (() => {

eval("var pagination = document.querySelector('.pagination__buttons');\nvar paginationSettings = {\n  pageCount: 15,\n  cardsOnPage: 12,\n  currentPage: 1,\n  buttonsNumber: 6\n};\ncreatePagination();\n\nfunction pageLocation(currentPage) {\n  if (currentPage <= 3) {\n    return 'start';\n  } else if (currentPage >= paginationSettings.pageCount - 2) {\n    return 'end';\n  } else return 'middle';\n}\n\nfunction addStartPagesContent(pages, buttonsNumber) {\n  for (var i = 0; i < buttonsNumber; i++) {\n    if (i < buttonsNumber - 3) pages[i].textContent = i + 1;else if (i < buttonsNumber - 2) pages[i].textContent = '...';else if (i < buttonsNumber - 1) pages[i].textContent = paginationSettings.pageCount;else {\n      pages[i].textContent = 'arrow_forward';\n      pages[i].classList.add('material-icons', 'pagination__button_arrow');\n    }\n    if (pages[i].textContent == paginationSettings.currentPage) pages[i].classList.add('pagination__button_active');\n  }\n}\n\nfunction addMiddlePagesContent(pages, buttonsNumber) {\n  var currentPage = paginationSettings.currentPage;\n  console.log(currentPage);\n  console.log(paginationSettings.currentPage);\n\n  if (pageLocation(currentPage + 1) === 'end') {\n    console.log('NENF&&');\n    currentPage = currentPage - 2;\n  } else if (pageLocation(currentPage) === 'middle') {\n    currentPage = currentPage - 1;\n  }\n\n  console.log(currentPage);\n  console.log(paginationSettings.currentPage);\n\n  for (var i = 0; i < buttonsNumber; i++) {\n    if (i === 0) {\n      pages[i].textContent = 'arrow_back';\n      pages[i].classList.add('material-icons', 'pagination__button_arrow');\n    } else if (i === 1) {\n      pages[i].textContent = '1';\n    } else if (i === 2 || i === buttonsNumber - 3) {\n      pages[i].textContent = '...';\n    } else if (i === buttonsNumber - 2) {\n      pages[i].textContent = paginationSettings.pageCount;\n    } else if (i === buttonsNumber - 1) {\n      pages[i].textContent = 'arrow_forward';\n      pages[i].classList.add('material-icons', 'pagination__button_arrow');\n    } else {\n      pages[i].textContent = currentPage;\n      currentPage++;\n    }\n\n    if (pages[i].textContent == paginationSettings.currentPage) pages[i].classList.add('pagination__button_active');\n  }\n}\n\nfunction addEndPagesContent(pages, buttonsNumber) {\n  var currentPage = paginationSettings.pageCount - 2;\n\n  for (var i = 0; i < buttonsNumber; i++) {\n    if (i === 0) {\n      pages[i].textContent = 'arrow_back';\n      pages[i].classList.add('material-icons', 'pagination__button_arrow');\n    } else if (i === 1) pages[i].textContent = '1';else if (i === 2) pages[i].textContent = '...';else {\n      pages[i].textContent = currentPage;\n      currentPage++;\n    }\n\n    if (pages[i].textContent == paginationSettings.currentPage) pages[i].classList.add('pagination__button_active');\n  }\n}\n\nfunction createPagination() {\n  while (pagination.hasChildNodes()) {\n    pagination.removeChild(pagination.lastChild);\n  }\n\n  var currentPage = paginationSettings.currentPage;\n  pageLocation(currentPage) === 'middle' ? buttonsNumber = paginationSettings.buttonsNumber + 3 : buttonsNumber = paginationSettings.buttonsNumber;\n\n  for (var i = 0; i < buttonsNumber; i++) {\n    var button = document.createElement('button');\n    button.classList.add('pagination__button');\n    pagination.append(button);\n  }\n\n  var pages = document.querySelectorAll('.pagination__button');\n  pageLocation(currentPage) === 'start' ? addStartPagesContent(pages, buttonsNumber) : pageLocation(currentPage) === 'end' ? addEndPagesContent(pages, buttonsNumber) : addMiddlePagesContent(pages, buttonsNumber);\n  listenPagination(pages);\n}\n\nfunction listenPagination(pages) {\n  pages.forEach(function (page) {\n    page.addEventListener('click', function (event) {\n      // if (page.classList.contains('pagination__page_active'))\n      //     page.classList.remove('pagination__page_active');\n      if (page.textContent != '...' && page.textContent != 'arrow_forward' && page.textContent != 'arrow_back') {\n        paginationSettings.currentPage = +page.textContent;\n        createPagination();\n      } else if (page.textContent == 'arrow_forward') {\n        paginationSettings.currentPage++;\n        createPagination();\n      } else {\n        paginationSettings.currentPage--;\n        createPagination();\n      }\n    });\n  });\n}\n\n//# sourceURL=webpack:///./blocks/pagination/pagination.js?");

/***/ }),

/***/ "./blocks/rating/rating.js":
/*!*********************************!*\
  !*** ./blocks/rating/rating.js ***!
  \*********************************/
/***/ (() => {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar ratingSettings = {\n  size: 5,\n  half: false,\n  icon: 'star_border',\n  startPosition: 0\n};\nvar ratingBox = document.querySelectorAll('.rating');\nratingBox.forEach(function (rating) {\n  createRating(rating);\n});\n\nfunction createRating(rating) {\n  var star = document.createElement('div');\n  star.classList.add('star', 'material-icons');\n  star.innerHTML = 'star_border'; // star\n\n  for (var i = 0; i < ratingSettings.size; i++) {\n    var _star = document.createElement('div');\n\n    _star.classList.add('star', 'material-icons');\n\n    _star.innerHTML = 'star_border'; // star\n\n    rating.append(_star);\n  }\n\n  listenStars(rating);\n}\n\nfunction listenStars(rating) {\n  var stars = rating.querySelectorAll('.star');\n  stars.forEach(function (star) {\n    star.addEventListener('mousemove', function (event) {\n      if (!rating.classList.contains('fixed')) {\n        setRating(rating, _toConsumableArray(rating.children).indexOf(event.target));\n      }\n    });\n    star.addEventListener('mouseleave', function (event) {\n      if (!rating.classList.contains('fixed')) clearRating(rating);\n    });\n    star.addEventListener('click', function (event) {\n      if (rating.classList.contains('fixed')) {\n        rating.classList.remove('fixed');\n      } else {\n        rating.classList.add('fixed');\n        setRating(rating, _toConsumableArray(rating.children).indexOf(event.target));\n      }\n    });\n  });\n}\n\nfunction setRating(rating, index) {\n  var stars = rating.querySelectorAll('.star');\n\n  for (var i = 0; i < stars.length; i++) {\n    if (i < index + 1) {\n      stars[i].innerHTML = 'star';\n    } else {\n      stars[i].innerHTML = 'star_border';\n    }\n  }\n}\n\nfunction clearRating(rating) {\n  var stars = rating.querySelectorAll('.star');\n\n  for (var i = 0; i < stars.length; i++) {\n    stars[i].innerHTML = 'star_border';\n  }\n}\n\n//# sourceURL=webpack:///./blocks/rating/rating.js?");

/***/ }),

/***/ "./blocks/slider/slider.js":
/*!*********************************!*\
  !*** ./blocks/slider/slider.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("/* provided dependency */ var $ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n$.slider = __webpack_require__(/*! jquery-ui/ui/widgets/slider */ \"../node_modules/jquery-ui/ui/widgets/slider.js\"); // var $grid = $(\".our-design__gallery-items\").isotope({\n//   itemSelector: \".our-design__gallery-item\",\n//   transitionDuration: 500,\n// });\n\n$(function () {\n  $('.slider__body').slider({\n    range: true,\n    min: 0,\n    max: 50000,\n    values: [5000, 10000],\n    slide: function slide(event, ui) {\n      $('.slider__range').val(ui.values[0] + '₽ - ' + ui.values[1] + '₽');\n    }\n  });\n  $('.slider__range').val($('.slider__body').slider('values', 0) + '₽ - ' + $('.slider__body').slider('values', 1) + '₽');\n});\n\n//# sourceURL=webpack:///./blocks/slider/slider.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./main.scss\");\n/* harmony import */ var _blocks_like_like_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/like/like.js */ \"./blocks/like/like.js\");\n/* harmony import */ var _blocks_like_like_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blocks_like_like_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _blocks_rating_rating_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/rating/rating.js */ \"./blocks/rating/rating.js\");\n/* harmony import */ var _blocks_rating_rating_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_blocks_rating_rating_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _blocks_slider_slider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/slider/slider.js */ \"./blocks/slider/slider.js\");\n/* harmony import */ var _blocks_slider_slider_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_blocks_slider_slider_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _blocks_button_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/button/button.js */ \"./blocks/button/button.js\");\n/* harmony import */ var _blocks_button_button_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_blocks_button_button_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _blocks_pagination_pagination_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/pagination/pagination.js */ \"./blocks/pagination/pagination.js\");\n/* harmony import */ var _blocks_pagination_pagination_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_blocks_pagination_pagination_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var jquery_ui_ui_widgets_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery-ui/ui/widgets/slider */ \"../node_modules/jquery-ui/ui/widgets/slider.js\");\n/* harmony import */ var jquery_ui_ui_widgets_slider__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_ui_widgets_slider__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n //import \"./blocks/rating/jquery.star.rating.js\";\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss":
/*!**************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss ***!
  \**************************************************************************************************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ../node_modules/sass-loader/dist/cjs.js):\\nSassError: Invalid CSS after \\\"    }\\\": expected selector or at-rule, was \\\"}\\\"\\n        on line 14 of src/blocks/pagination/pagination.scss\\n        from line 25 of src/main.scss\\n>>     }\\n\\n   -----^\\n\");\n\n//# sourceURL=webpack:///./main.scss?../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./main.scss":
/*!*******************!*\
  !*** ./main.scss ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./main.scss?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 			"main": 0
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_jquery-ui_ui_widgets_slider_js-node_modules_style-loader_dist_runtime_in-808d66"], () => (__webpack_require__("./index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;