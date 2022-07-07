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

/***/ "./blocks/checkbox-list/checkbox-list.js":
/*!***********************************************!*\
  !*** ./blocks/checkbox-list/checkbox-list.js ***!
  \***********************************************/
/***/ (() => {

eval("var checkboxListsRich = document.querySelectorAll('.js-checkbox-list-rich');\ninitializeDropdownCheckboxList();\ninitializeRichCheckboxList();\n\nfunction initializeDropdownCheckboxList() {\n  hideDropdownCheckboxList();\n  var dropdownCheckboxLists = document.querySelectorAll('.js-checkbox-list-dropdown');\n  dropdownCheckboxLists.forEach(function (dropdownCheckboxList) {\n    var dropdownMenus = dropdownCheckboxList.querySelectorAll('.js-checkbox-list__menu');\n    dropdownMenus.forEach(function (dropdownMenu) {\n      dropdownCheckboxListClick(dropdownCheckboxList, dropdownMenu);\n    });\n  });\n}\n\nfunction initializeRichCheckboxList() {\n  var richCheckboxLists = document.querySelectorAll('.js-checkbox-list-rich');\n  richCheckboxLists.forEach(function (richCheckboxList) {\n    var richCheckboxTitles = richCheckboxList.querySelectorAll('.checkbox__title');\n    var richCheckboxSubitles = richCheckboxList.querySelectorAll('.checkbox__subtitle');\n    richCheckboxTitles.forEach(function (richCheckboxTitle) {\n      return richCheckboxTitle.classList.add('checkbox__title_rich');\n    });\n    richCheckboxSubitles.forEach(function (richCheckboxSubitle) {\n      return richCheckboxSubitle.style.display = ' inline';\n    });\n  });\n}\n\nfunction hideDropdownCheckboxList() {\n  var checkboxLists = document.querySelectorAll('.js-checkbox-list__body');\n  checkboxLists.forEach(function (checkboxList) {\n    return checkboxList.style.display = 'none';\n  });\n}\n\nfunction dropdownCheckboxListClick(dropdownCheckboxList, dropdownMenu) {\n  dropdownMenu.addEventListener('click', function () {\n    var checkboxLists = dropdownCheckboxList.querySelectorAll('.checkbox-list__body');\n    var arrow = dropdownMenu.querySelector('.js-checkbox-list__arrow');\n    checkboxLists.forEach(function (checkboxList) {\n      if (checkboxList.style.display === 'none') {\n        checkboxList.style.display = 'block';\n        arrow.textContent = 'expand_less';\n      } else {\n        checkboxList.style.display = 'none';\n        arrow.textContent = 'expand_more';\n      }\n    });\n  });\n}\n\n//# sourceURL=webpack:///./blocks/checkbox-list/checkbox-list.js?");

/***/ }),

/***/ "./blocks/dropdown/dropdown.js":
/*!*************************************!*\
  !*** ./blocks/dropdown/dropdown.js ***!
  \*************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack:///./blocks/dropdown/dropdown.js?");

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

eval("var pagination = document.querySelector('.pagination__buttons');\nvar paginationCounter = document.querySelector('.pagination__counter');\nvar paginationSettings = {\n  pageCount: 15,\n  cardsOnPage: 12,\n  currentPage: 1,\n  buttonsNumber: 6\n};\ncreatePagination();\n\nfunction pageLocation(currentPage) {\n  if (currentPage <= 3) {\n    return 'start';\n  } else if (currentPage >= paginationSettings.pageCount - 2) {\n    return 'end';\n  } else return 'middle';\n}\n\nfunction addStartPagesContent(pages, buttonsNumber) {\n  for (var i = 0; i < buttonsNumber; i++) {\n    if (i < buttonsNumber - 3) pages[i].textContent = i + 1;else if (i < buttonsNumber - 2) pages[i].textContent = '...';else if (i < buttonsNumber - 1) pages[i].textContent = paginationSettings.pageCount;else {\n      pages[i].textContent = 'arrow_forward';\n      pages[i].classList.add('material-icons', 'pagination__button_arrow');\n    }\n    if (pages[i].textContent == paginationSettings.currentPage) pages[i].classList.add('pagination__button_active');\n  }\n}\n\nfunction addMiddlePagesContent(pages, buttonsNumber) {\n  var currentPage = paginationSettings.currentPage;\n  console.log(currentPage);\n  console.log(paginationSettings.currentPage);\n\n  if (pageLocation(currentPage + 1) === 'end') {\n    currentPage = currentPage - 2;\n  } else if (pageLocation(currentPage) === 'middle') {\n    currentPage = currentPage - 1;\n  }\n\n  for (var i = 0; i < buttonsNumber; i++) {\n    if (i === 0) {\n      pages[i].textContent = 'arrow_back';\n      pages[i].classList.add('material-icons', 'pagination__button_arrow');\n    } else if (i === 1) {\n      pages[i].textContent = '1';\n    } else if (i === 2 || i === buttonsNumber - 3) {\n      pages[i].textContent = '...';\n    } else if (i === buttonsNumber - 2) {\n      pages[i].textContent = paginationSettings.pageCount;\n    } else if (i === buttonsNumber - 1) {\n      pages[i].textContent = 'arrow_forward';\n      pages[i].classList.add('material-icons', 'pagination__button_arrow');\n    } else {\n      pages[i].textContent = currentPage;\n      currentPage++;\n    }\n\n    if (pages[i].textContent == paginationSettings.currentPage) pages[i].classList.add('pagination__button_active');\n  }\n}\n\nfunction addEndPagesContent(pages, buttonsNumber) {\n  var currentPage = paginationSettings.pageCount - 2;\n\n  for (var i = 0; i < buttonsNumber; i++) {\n    if (i === 0) {\n      pages[i].textContent = 'arrow_back';\n      pages[i].classList.add('material-icons', 'pagination__button_arrow');\n    } else if (i === 1) pages[i].textContent = '1';else if (i === 2) pages[i].textContent = '...';else {\n      pages[i].textContent = currentPage;\n      currentPage++;\n    }\n\n    if (pages[i].textContent == paginationSettings.currentPage) pages[i].classList.add('pagination__button_active');\n  }\n}\n\nfunction createPagination() {\n  while (pagination.hasChildNodes()) {\n    pagination.removeChild(pagination.lastChild);\n  }\n\n  calculateNumberOfCards();\n  var currentPage = paginationSettings.currentPage;\n  pageLocation(currentPage) === 'middle' ? buttonsNumber = paginationSettings.buttonsNumber + 3 : buttonsNumber = paginationSettings.buttonsNumber;\n\n  for (var i = 0; i < buttonsNumber; i++) {\n    var button = document.createElement('button');\n    button.classList.add('pagination__button');\n    pagination.append(button);\n  }\n\n  var pages = document.querySelectorAll('.pagination__button');\n  pageLocation(currentPage) === 'start' ? addStartPagesContent(pages, buttonsNumber) : pageLocation(currentPage) === 'end' ? addEndPagesContent(pages, buttonsNumber) : addMiddlePagesContent(pages, buttonsNumber);\n  listenPagination(pages);\n}\n\nfunction listenPagination(pages) {\n  pages.forEach(function (page) {\n    page.addEventListener('click', function (event) {\n      if (page.textContent != '...' && page.textContent != 'arrow_forward' && page.textContent != 'arrow_back') {\n        paginationSettings.currentPage = +page.textContent;\n      } else if (page.textContent == 'arrow_forward') {\n        paginationSettings.currentPage++;\n      } else {\n        paginationSettings.currentPage--;\n      }\n\n      createPagination();\n    });\n  });\n}\n\nfunction calculateNumberOfCards() {\n  var firstOfRange = (paginationSettings.currentPage - 1) * paginationSettings.cardsOnPage + 1;\n  var lastOfRange = paginationSettings.currentPage * paginationSettings.cardsOnPage;\n  var total = paginationSettings.cardsOnPage * paginationSettings.pageCount;\n  if (total > 100) total = 100;\n  displayNumberOfCards(firstOfRange, lastOfRange, total);\n}\n\nfunction displayNumberOfCards(firstOfRange, lastOfRange, total) {\n  var paginationCounter = document.querySelector('.pagination__counter');\n  paginationCounter.textContent = \"\".concat(firstOfRange, \" \\u2013 \").concat(lastOfRange, \" \\u0438\\u0437 \").concat(total, \"+ \\u0432\\u0430\\u0440\\u0438\\u0430\\u043D\\u0442\\u043E\\u0432 \\u0430\\u0440\\u0435\\u043D\\u0434\\u044B\");\n}\n\n//# sourceURL=webpack:///./blocks/pagination/pagination.js?");

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

eval("/* provided dependency */ var $ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n$.slider = __webpack_require__(/*! jquery-ui/ui/widgets/slider */ \"../node_modules/jquery-ui/ui/widgets/slider.js\");\n$.extend($.slider.prototype.options.classes, {\n  'ui-slider-handle': 'slider__handle',\n  'ui-slider-range': 'slider__range'\n});\n$(function () {\n  $('.slider__body').slider({\n    range: true,\n    min: 0,\n    max: 50000,\n    values: [5000, 10000],\n    slide: function slide(event, ui) {\n      $('.slider__range-text').val(ui.values[0] + '₽ - ' + ui.values[1] + '₽');\n    }\n  });\n  $('.slider__range-text').val($('.slider__body').slider('values', 0) + '₽ - ' + $('.slider__body').slider('values', 1) + '₽');\n});\n\n//# sourceURL=webpack:///./blocks/slider/slider.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./main.scss\");\n/* harmony import */ var _blocks_like_like_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/like/like.js */ \"./blocks/like/like.js\");\n/* harmony import */ var _blocks_like_like_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blocks_like_like_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _blocks_rating_rating_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/rating/rating.js */ \"./blocks/rating/rating.js\");\n/* harmony import */ var _blocks_rating_rating_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_blocks_rating_rating_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _blocks_slider_slider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/slider/slider.js */ \"./blocks/slider/slider.js\");\n/* harmony import */ var _blocks_slider_slider_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_blocks_slider_slider_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _blocks_button_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/button/button.js */ \"./blocks/button/button.js\");\n/* harmony import */ var _blocks_button_button_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_blocks_button_button_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _blocks_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/dropdown/dropdown */ \"./blocks/dropdown/dropdown.js\");\n/* harmony import */ var _blocks_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_blocks_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _blocks_pagination_pagination_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/pagination/pagination.js */ \"./blocks/pagination/pagination.js\");\n/* harmony import */ var _blocks_pagination_pagination_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_blocks_pagination_pagination_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _blocks_checkbox_list_checkbox_list_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/checkbox-list/checkbox-list.js */ \"./blocks/checkbox-list/checkbox-list.js\");\n/* harmony import */ var _blocks_checkbox_list_checkbox_list_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_blocks_checkbox_list_checkbox_list_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var jquery_ui_ui_widgets_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jquery-ui/ui/widgets/slider */ \"../node_modules/jquery-ui/ui/widgets/slider.js\");\n/* harmony import */ var jquery_ui_ui_widgets_slider__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_ui_widgets_slider__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss":
/*!**************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss ***!
  \**************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"../node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_material_icons_iconfont_material_icons_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!../node_modules/material-icons/iconfont/material-icons.css */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/material-icons/iconfont/material-icons.css\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_jquery_ui_themes_base_slider_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!../node_modules/jquery-ui/themes/base/slider.css */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/jquery-ui/themes/base/slider.css\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"../node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4__);\n// Imports\n\n\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! blocks/ui-kit-header/img/ui-kit-header_logo.svg */ \"./blocks/ui-kit-header/img/ui-kit-header_logo.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! assets/fonts/montserrat-regular.woff */ \"./assets/fonts/montserrat-regular.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! assets/fonts/montserrat-regular.ttf */ \"./assets/fonts/montserrat-regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! assets/fonts/montserrat-regular.svg */ \"./assets/fonts/montserrat-regular.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! assets/fonts/montserrat-bold.woff */ \"./assets/fonts/montserrat-bold.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! assets/fonts/montserrat-bold.ttf */ \"./assets/fonts/montserrat-bold.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! assets/fonts/montserrat-bold.svg */ \"./assets/fonts/montserrat-bold.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! assets/fonts/material-icons-regular.woff */ \"./assets/fonts/material-icons-regular.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! assets/fonts/material-icons-regular.ttf */ \"./assets/fonts/material-icons-regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! assets/fonts/material-icons-regular.svg */ \"./assets/fonts/material-icons-regular.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/logo.svg */ \"./assets/images/logo.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/check-mark.svg */ \"./assets/images/check-mark.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/radio.svg */ \"./assets/images/radio.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_node_modules_material_icons_iconfont_material_icons_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_node_modules_jquery_ui_themes_base_slider_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4___default()(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4___default()(___CSS_LOADER_URL_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4___default()(___CSS_LOADER_URL_IMPORT_6___);\nvar ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4___default()(___CSS_LOADER_URL_IMPORT_7___);\nvar ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4___default()(___CSS_LOADER_URL_IMPORT_8___);\nvar ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4___default()(___CSS_LOADER_URL_IMPORT_9___);\nvar ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4___default()(___CSS_LOADER_URL_IMPORT_10___);\nvar ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4___default()(___CSS_LOADER_URL_IMPORT_11___);\nvar ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4___default()(___CSS_LOADER_URL_IMPORT_12___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".color-and-types {\\n  display: flex;\\n  margin: 67px 158px 145px 150px;\\n  max-width: 1132px;\\n  justify-content: space-between; }\\n\\n.color-list {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  height: 610px; }\\n\\n.type-list {\\n  max-width: 438px;\\n  max-height: 321px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between; }\\n\\n.headers_and_footers {\\n  background: #f4f4f6; }\\n\\n.header-logout,\\n.header-login,\\n.footer {\\n  margin-bottom: 40px;\\n  background-color: white; }\\n\\n.footer {\\n  padding: 100px 140px; }\\n\\n.form-elements {\\n  margin: 4.0625rem 8.8125rem 8.75rem;\\n  display: grid;\\n  grid-template-rows: 636px 265px 281px 158px;\\n  grid-template-columns: 374px 320px 320px;\\n  column-gap: 72px; }\\n  .form-elements__checkbox-list-header, .form-elements__like-buttons-header, .form-elements__buttons-header, .form-elements__radio-list-header, .form-elements__pagination-block-header, .form-elements__rate-buttons-header {\\n    margin: 0 0 1rem 0;\\n    font-family: 'Montserrat';\\n    font-style: normal;\\n    font-weight: 700;\\n    font-size: 12px;\\n    line-height: 15px;\\n    text-transform: uppercase;\\n    color: #1f2041; }\\n  .form-elements__fields-item {\\n    margin-bottom: 20px; }\\n  .form-elements__checkbox-list {\\n    margin-bottom: 2.6rem; }\\n    .form-elements__checkbox-list-item:not(:last-child) {\\n      margin-bottom: 0.66rem; }\\n  .form-elements__radio-list {\\n    margin-bottom: 2.48rem; }\\n    .form-elements__radio-list-header {\\n      margin-bottom: 0.85rem;\\n      font-family: 'Montserrat';\\n      font-style: normal;\\n      font-weight: 700;\\n      font-size: 12px;\\n      line-height: 15px;\\n      text-transform: uppercase;\\n      color: #1f2041; }\\n    .form-elements__radio-list-items {\\n      display: flex; }\\n  .form-elements__toggle-list {\\n    margin-bottom: 2.7rem; }\\n    .form-elements__toggle-list-header {\\n      margin-bottom: 0.795rem;\\n      font-family: 'Montserrat';\\n      font-style: normal;\\n      font-weight: 700;\\n      font-size: 12px;\\n      line-height: 15px;\\n      text-transform: uppercase;\\n      color: #1f2041; }\\n    .form-elements__toggle-list-item:not(:last-child) {\\n      margin-bottom: 0.625rem; }\\n  .form-elements__like-buttons {\\n    margin-bottom: 2.5rem; }\\n    .form-elements__like-buttons-items {\\n      display: flex;\\n      justify-content: space-between;\\n      max-width: 5.625rem; }\\n  .form-elements__rate-buttons-items {\\n    display: flex;\\n    justify-content: space-between;\\n    max-width: 16.25rem; }\\n\\n.form-elements__slider-buttons-pagination {\\n  width: 500px; }\\n\\n.form-elements__comment {\\n  grid-column: 2/4;\\n  margin: 30px 0 0 79px; }\\n\\n.form-elements__calendars {\\n  height: 275px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between; }\\n\\n.radio-list__items {\\n  display: inline-flex; }\\n\\n.buttons {\\n  display: flex;\\n  flex-wrap: wrap;\\n  max-width: 218px; }\\n\\n.buttons__item {\\n  margin-bottom: 31px; }\\n\\n.buttons__header {\\n  margin-top: 20px;\\n  margin-bottom: 16px;\\n  width: 100%; }\\n\\n.type-item {\\n  display: flex; }\\n\\n.type-item:last-child {\\n  max-width: 368px; }\\n\\n.type-item__header {\\n  color: rgba(31, 32, 65, 0.25);\\n  font-weight: 400;\\n  text-align: right;\\n  min-width: 37px; }\\n\\n.type-item__description {\\n  padding-left: 30px; }\\n\\n.type-item__text_h1 {\\n  ffont-family: 'Montserrat';\\n  font-style: normal;\\n  font-weight: 700;\\n  font-size: 24px;\\n  line-height: 29px;\\n  color: #1f2041; }\\n\\n.type-item__text_h2 {\\n  font-family: 'Montserrat';\\n  font-style: normal;\\n  font-weight: 700;\\n  font-size: 19px;\\n  line-height: 23px;\\n  color: #1f2041; }\\n\\n.type-item__text_h3 {\\n  font-family: 'Montserrat';\\n  font-style: normal;\\n  font-weight: 700;\\n  font-size: 12px;\\n  line-height: 15px;\\n  text-transform: uppercase;\\n  color: #1f2041; }\\n\\n.type-item__text_body {\\n  font-family: 'Montserrat';\\n  font-style: normal;\\n  font-weight: 400;\\n  font-size: 14px;\\n  line-height: 24px;\\n  color: rgba(31, 32, 65, 0.75); }\\n\\n.color-item {\\n  display: flex;\\n  justify-content: start;\\n  align-items: center; }\\n\\n.color-item__rectangle {\\n  width: 70px;\\n  height: 70px;\\n  border-radius: 6px; }\\n\\n.color-item__rectangle_dark-shade-100 {\\n  background: #1f2041;\\n  border: 1px solid black;\\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\\n  box-sizing: border-box; }\\n\\n.color-item__rectangle_dark-shade-75 {\\n  background-color: rgba(31, 32, 65, 0.75);\\n  border: 1px solid black;\\n  box-sizing: border-box; }\\n\\n.color-item__rectangle_dark-shade-50 {\\n  background-color: rgba(31, 32, 65, 0.5); }\\n\\n.color-item__rectangle_dark-shade-25 {\\n  background-color: rgba(31, 32, 65, 0.25); }\\n\\n.color-item__rectangle_dark-shade-5 {\\n  background-color: rgba(31, 32, 65, 0.05); }\\n\\n.color-item__rectangle_purple {\\n  background-color: #BC9CFF; }\\n\\n.color-item__rectangle_green {\\n  background-color: #6FCF97; }\\n\\n.color-item__text {\\n  color: #1f2041;\\n  padding-left: 40px; }\\n\\n.color-item__title {\\n  font-family: 'Montserrat';\\n  font-style: normal;\\n  font-weight: 700;\\n  font-size: 19px;\\n  line-height: 23px;\\n  color: #1f2041;\\n  line-height: 28px;\\n  margin: 0; }\\n\\n.color-item__hex {\\n  font-family: 'Montserrat';\\n  font-style: normal;\\n  font-weight: 700;\\n  font-size: 19px;\\n  line-height: 23px;\\n  color: #1f2041;\\n  line-height: 28px;\\n  margin: 0;\\n  font-weight: 400; }\\n\\n.ui-kit-header__logo {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat;\\n  height: 48px;\\n  width: 48px; }\\n\\n@font-face {\\n  font-family: 'montserrat';\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format(\\\"woff\\\"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") format(\\\"truetype\\\"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") format(\\\"svg\\\");\\n  font-weight: normal;\\n  font-style: normal; }\\n\\n@font-face {\\n  font-family: 'montserrat';\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \") format(\\\"woff\\\"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_5___ + \") format(\\\"truetype\\\"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_6___ + \") format(\\\"svg\\\");\\n  font-weight: bold;\\n  font-style: normal; }\\n\\n@font-face {\\n  font-family: 'material-icons';\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_7___ + \") format(\\\"woff\\\"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_8___ + \") format(\\\"truetype\\\"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_9___ + \") format(\\\"svg\\\");\\n  font-weight: normal;\\n  font-style: normal; }\\n\\n.logo {\\n  width: 106px;\\n  height: 40px;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_10___ + \") no-repeat; }\\n\\n.navigation__list {\\n  display: flex;\\n  list-style-type: none;\\n  font-family: 'Montserrat';\\n  font-style: normal;\\n  font-weight: 400;\\n  font-size: 14px;\\n  line-height: 24px;\\n  color: rgba(31, 32, 65, 0.75); }\\n\\n.navigation__item_active {\\n  font-weight: 700; }\\n\\n.navigation__item_dropdown {\\n  color: #BC9CFF; }\\n\\n.button, .button_with-border, .button_filled, .button_empty {\\n  font-family: 'Montserrat';\\n  font-style: normal;\\n  font-weight: 700;\\n  font-size: 12px;\\n  line-height: 15px;\\n  text-transform: uppercase;\\n  color: #1f2041;\\n  border-radius: 22px;\\n  width: 99px;\\n  height: 44px; }\\n\\n.button {\\n  display: flex;\\n  background: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);\\n  box-sizing: border-box;\\n  justify-content: center; }\\n  .button_with-border {\\n    border: 2px solid transparent;\\n    background: white content-box;\\n    padding: 0;\\n    color: #BC9CFF; }\\n\\n.button_filled {\\n  background: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);\\n  color: white;\\n  border: none; }\\n\\n.button_empty {\\n  width: 61px;\\n  height: 15px;\\n  background: white;\\n  color: #BC9CFF;\\n  border: none;\\n  padding: 0; }\\n\\n.button_with-arrow {\\n  padding: 0;\\n  width: 320px;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center; }\\n\\n.button__text {\\n  flex-grow: 1;\\n  padding-left: 3.7em; }\\n\\n.button__icon {\\n  width: 44px; }\\n\\n.header__body {\\n  display: flex;\\n  padding: 15px 140px;\\n  justify-content: space-between;\\n  align-items: center; }\\n\\n.header__navigation {\\n  display: flex; }\\n\\n.buttons {\\n  display: flex;\\n  width: 300px;\\n  justify-content: space-between; }\\n\\n.header__authorization_authorized {\\n  color: rebeccapurple; }\\n\\n.footer__body {\\n  max-height: 372px; }\\n\\n.footer-body__navigation {\\n  list-style-type: none;\\n  display: flex;\\n  justify-content: space-between; }\\n\\n.footer-body__logo {\\n  padding-bottom: 17px; }\\n\\n.footer-body__describe {\\n  width: 260px; }\\n\\n.footer-body__subscribe {\\n  width: 260px; }\\n\\n.footer-body__text-describe {\\n  font-family: 'Montserrat';\\n  font-style: normal;\\n  font-weight: 400;\\n  font-size: 14px;\\n  line-height: 24px;\\n  color: rgba(31, 32, 65, 0.75); }\\n\\n.navigation__title {\\n  font-family: 'Montserrat';\\n  font-style: normal;\\n  font-weight: 700;\\n  font-size: 12px;\\n  line-height: 15px;\\n  text-transform: uppercase;\\n  color: #1f2041; }\\n\\n.navigation__text {\\n  font-family: 'Montserrat';\\n  font-style: normal;\\n  font-weight: 400;\\n  font-size: 14px;\\n  line-height: 24px;\\n  color: rgba(31, 32, 65, 0.75); }\\n\\n.footer__bottom {\\n  margin-top: 70px;\\n  max-height: 70px;\\n  display: flex; }\\n\\n.text-field {\\n  max-width: 320px; }\\n  .text-field__top {\\n    display: flex;\\n    justify-content: space-between;\\n    margin-bottom: 5px;\\n    font-family: 'Montserrat';\\n    font-style: normal;\\n    font-weight: 700;\\n    font-size: 12px;\\n    line-height: 15px;\\n    text-transform: uppercase;\\n    color: #1f2041; }\\n  .text-field__description {\\n    font-weight: 400;\\n    color: rgba(31, 32, 65, 0.5); }\\n  .text-field__form {\\n    font-family: 'Montserrat';\\n    font-style: normal;\\n    font-weight: 400;\\n    font-size: 14px;\\n    line-height: 24px;\\n    color: rgba(31, 32, 65, 0.75);\\n    width: 320px;\\n    height: 44px;\\n    padding: 0;\\n    box-sizing: border-box;\\n    border: 1px solid rgba(31, 32, 65, 0.25);\\n    border-radius: 4px;\\n    color: rgba(31, 32, 65, 0.25);\\n    padding-left: 14px; }\\n    .text-field__form:focus {\\n      outline: 1px solid rgba(31, 32, 65, 0.5);\\n      border-style: none;\\n      border: none;\\n      border: 1px solid rgba(31, 32, 65, 0.25);\\n      background-color: white;\\n      border-color: inherit;\\n      -webkit-box-shadow: none;\\n      box-shadow: none; }\\n    .text-field__form::placeholder {\\n      color: rgba(31, 32, 65, 0.25); }\\n\\n.checkbox__input {\\n  position: absolute;\\n  width: 1px;\\n  height: 1px;\\n  margin: -1px;\\n  border: 0;\\n  padding: 0;\\n  white-space: nowrap;\\n  clip-path: inset(100%);\\n  clip: rect(0 0 0 0);\\n  overflow: hidden; }\\n  .checkbox__input:checked + .checkbox__box {\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_11___ + \") center no-repeat;\\n    border: 1px solid #BC9CFF; }\\n\\n.checkbox__box {\\n  border-radius: 4px;\\n  border: 1px solid rgba(31, 32, 65, 0.25);\\n  color: rgba(31, 32, 65, 0.5);\\n  width: 1.3em;\\n  height: 1.3em;\\n  background-color: transparent;\\n  margin-right: 0.7em;\\n  flex-shrink: 0; }\\n  .checkbox__box:focus {\\n    outline: 1px solid #BC9CFF;\\n    box-shadow: 0 0 10px rgba(188, 156, 255, 0.9); }\\n  .checkbox__box:hover {\\n    border: 1px solid #BC9CFF;\\n    box-shadow: 0 0 10px rgba(188, 156, 255, 0.9); }\\n\\n.checkbox__label {\\n  font-family: 'Montserrat';\\n  font-style: normal;\\n  font-weight: 400;\\n  font-size: 14px;\\n  line-height: 24px;\\n  color: rgba(31, 32, 65, 0.75);\\n  display: flex;\\n  line-height: 18px;\\n  color: rgba(31, 32, 65, 0.5);\\n  max-width: 222px;\\n  cursor: pointer; }\\n\\n.radio__label {\\n  font-family: 'Montserrat';\\n  font-style: normal;\\n  font-weight: 400;\\n  font-size: 14px;\\n  line-height: 24px;\\n  color: rgba(31, 32, 65, 0.75);\\n  display: flex;\\n  color: rgba(31, 32, 65, 0.5);\\n  margin-right: 1.5em;\\n  cursor: pointer; }\\n\\n.radio__input {\\n  position: absolute;\\n  width: 1px;\\n  height: 1px;\\n  margin: -1px;\\n  border: 0;\\n  padding: 0;\\n  white-space: nowrap;\\n  clip-path: inset(100%);\\n  clip: rect(0 0 0 0);\\n  overflow: hidden; }\\n  .radio__input:checked + .radio__box {\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_12___ + \") center no-repeat content-box;\\n    border-color: #BC9CFF;\\n    color: rgba(31, 32, 65, 0.75); }\\n\\n.radio__box {\\n  border-radius: 10px;\\n  border: 1px solid rgba(31, 32, 65, 0.25);\\n  width: 1.29em;\\n  height: 1.29em;\\n  background-color: transparent;\\n  margin-right: 0.7em;\\n  align-self: center; }\\n\\n.toggle__label {\\n  display: flex;\\n  font-family: 'Montserrat';\\n  font-style: normal;\\n  font-weight: 400;\\n  font-size: 14px;\\n  line-height: 24px;\\n  color: rgba(31, 32, 65, 0.75);\\n  align-items: center; }\\n\\n.toggle__input {\\n  position: absolute;\\n  width: 1px;\\n  height: 1px;\\n  margin: -1px;\\n  border: 0;\\n  padding: 0;\\n  white-space: nowrap;\\n  clip-path: inset(100%);\\n  clip: rect(0 0 0 0);\\n  overflow: hidden; }\\n  .toggle__input:checked + .toggle__box {\\n    border: 1px solid #BC9CFF; }\\n    .toggle__input:checked + .toggle__box:after {\\n      left: calc(100% - 3px);\\n      transform: translateX(-100%);\\n      background: none;\\n      background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_12___ + \") center no-repeat; }\\n\\n.toggle__box {\\n  cursor: pointer;\\n  width: 40px;\\n  height: 20px;\\n  display: block;\\n  border-radius: 10px;\\n  position: relative;\\n  border: 1px solid rgba(31, 32, 65, 0.25);\\n  box-sizing: border-box;\\n  margin-right: 0.625rem; }\\n  .toggle__box::after {\\n    content: '';\\n    position: absolute;\\n    top: 3px;\\n    left: 3px;\\n    width: 12px;\\n    height: 12px;\\n    background-color: rgba(31, 32, 65, 0.25);\\n    border-radius: 100%;\\n    transition: 0.3s; }\\n\\n.like {\\n  font-family: 'Montserrat';\\n  font-style: normal;\\n  font-weight: 400;\\n  font-size: 14px;\\n  line-height: 24px;\\n  color: rgba(31, 32, 65, 0.75);\\n  border: 1px solid rgba(31, 32, 65, 0.25);\\n  background-color: #fff;\\n  border-radius: 10px;\\n  box-sizing: border-box;\\n  width: 40px;\\n  height: 20px;\\n  display: flex;\\n  padding: 0;\\n  align-items: center;\\n  cursor: pointer;\\n  color: rgba(31, 32, 65, 0.25); }\\n  .like__icon {\\n    margin: 0 0.33rem 0 0.25rem;\\n    font-size: 0.625rem; }\\n  .like__counter {\\n    font-size: 0.625rem; }\\n  .like_pressed {\\n    border: 1px solid #BC9CFF; }\\n    .like_pressed .like__icon {\\n      background-image: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);\\n      -webkit-background-clip: text;\\n      color: transparent;\\n      background-clip: text; }\\n    .like_pressed .like__counter {\\n      color: #BC9CFF; }\\n\\n.rating {\\n  display: flex;\\n  margin-bottom: 50px;\\n  cursor: pointer; }\\n\\n.star {\\n  background: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);\\n  -webkit-background-clip: text;\\n  background-clip: text;\\n  color: transparent;\\n  align-self: center;\\n  align-content: center; }\\n\\n.slider {\\n  max-width: 266px; }\\n  .slider__top {\\n    display: flex;\\n    justify-content: space-between; }\\n  .slider__body {\\n    margin-top: 20px;\\n    height: 6px;\\n    background: #fff;\\n    border-radius: 3px;\\n    border: 1px solid rgba(31, 32, 65, 0.25);\\n    box-sizing: border-box; }\\n    .slider__body > .slider__range {\\n      height: 6px;\\n      box-sizing: content-box;\\n      top: -1px;\\n      vertical-align: middle;\\n      background: linear-gradient(180deg, #6fcf97 0%, #66d2ea 100%); }\\n    .slider__body > .slider__handle {\\n      width: 12px;\\n      height: 12px;\\n      border-radius: 10px;\\n      background: linear-gradient(180deg, #6fcf97 0%, #66d2ea 100%);\\n      border: 2px solid white;\\n      top: -0.35em; }\\n      .slider__body > .slider__handle:focus {\\n        outline: 1px solid #6fcf97; }\\n\\n.slider__range-text {\\n  max-width: 126px;\\n  border: none;\\n  text-align: right;\\n  background-color: #fff;\\n  font-family: 'Montserrat';\\n  font-style: normal;\\n  font-weight: 400;\\n  font-size: 14px;\\n  line-height: 24px;\\n  color: rgba(31, 32, 65, 0.75);\\n  color: rgba(31, 32, 65, 0.5); }\\n  .slider__range-text:read-only {\\n    outline: none; }\\n\\n.pagination__buttons {\\n  display: flex; }\\n\\n.pagination__button {\\n  width: 40px;\\n  height: 40px;\\n  border: none;\\n  background: transparent; }\\n  .pagination__button_arrow {\\n    border-radius: 22px;\\n    color: white;\\n    background: linear-gradient(180deg, #6fcf97 0%, #66d2ea 100%); }\\n  .pagination__button_active {\\n    font-family: 'Montserrat';\\n    font-style: normal;\\n    font-weight: 700;\\n    font-size: 12px;\\n    line-height: 15px;\\n    text-transform: uppercase;\\n    color: #1f2041;\\n    background: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);\\n    border-radius: 22px;\\n    color: white;\\n    font-weight: 700; }\\n\\n.pagination__button:not(.material-icons):not(.pagination__button_active) {\\n  font-family: 'Montserrat';\\n  font-style: normal;\\n  font-weight: 700;\\n  font-size: 12px;\\n  line-height: 15px;\\n  text-transform: uppercase;\\n  color: #1f2041;\\n  color: rgba(31, 32, 65, 0.5);\\n  font-weight: 400; }\\n\\n.pagination__counter {\\n  width: 230px;\\n  font-family: 'Montserrat';\\n  font-style: normal;\\n  font-weight: 400;\\n  font-size: 14px;\\n  line-height: 24px;\\n  color: rgba(31, 32, 65, 0.75); }\\n\\n.infographic {\\n  display: flex;\\n  max-width: 291px;\\n  border-bottom: 1px solid rgba(31, 32, 65, 0.1);\\n  padding: 20px 0 20px 0;\\n  align-content: space-between; }\\n\\n.infographic__icon {\\n  font-size: 48px;\\n  background-image: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);\\n  -webkit-background-clip: text;\\n  color: transparent;\\n  background-clip: text; }\\n\\n.infographic__text {\\n  font-family: 'Montserrat';\\n  font-style: normal;\\n  font-weight: 400;\\n  font-size: 14px;\\n  line-height: 24px;\\n  color: rgba(31, 32, 65, 0.75);\\n  margin-left: 10px; }\\n\\n.infographic__title {\\n  font-weight: 700; }\\n\\n.comment {\\n  font-family: 'Montserrat';\\n  font-style: normal;\\n  font-weight: 400;\\n  font-size: 14px;\\n  line-height: 24px;\\n  color: rgba(31, 32, 65, 0.75); }\\n  .comment__person {\\n    display: flex;\\n    max-width: 291px;\\n    align-content: space-between; }\\n    .comment__person-photo {\\n      width: 48px;\\n      height: 48px;\\n      border-radius: 32px;\\n      border: 2px solid #fff;\\n      box-sizing: border-box;\\n      box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.1);\\n      margin-bottom: 3px; }\\n    .comment__person-wrapper {\\n      margin-left: 10px; }\\n    .comment__person-name {\\n      font-weight: 700; }\\n  .comment__body {\\n    display: flex; }\\n  .comment__like {\\n    margin-left: 4px;\\n    margin-top: 9px; }\\n  .comment__text {\\n    max-width: 653px;\\n    margin: 7px 0 0 14px; }\\n\\n.checkbox-list {\\n  width: 266px;\\n  border: none; }\\n  .checkbox-list__menu {\\n    display: flex;\\n    font-family: 'Montserrat';\\n    font-style: normal;\\n    font-weight: 700;\\n    font-size: 12px;\\n    line-height: 15px;\\n    text-transform: uppercase;\\n    color: #1f2041;\\n    justify-content: space-between;\\n    align-items: center; }\\n  .checkbox-list__header {\\n    margin: 0; }\\n  .checkbox-list__arrow {\\n    margin-right: 10px; }\\n  .checkbox-list__body {\\n    border: none;\\n    margin-top: 13px; }\\n  .checkbox-list__item {\\n    margin-bottom: 10px; }\\n    .checkbox-list__item:hover {\\n      border-radius: 5px; }\\n\\n.bullet-list {\\n  display: flex;\\n  flex-direction: column;\\n  margin: 0;\\n  padding: 0;\\n  max-width: 260px; }\\n  .bullet-list__item {\\n    font-family: 'Montserrat';\\n    font-style: normal;\\n    font-weight: 400;\\n    font-size: 14px;\\n    line-height: 24px;\\n    color: rgba(31, 32, 65, 0.75);\\n    display: flex;\\n    margin-bottom: 10px; }\\n    .bullet-list__item:last-child {\\n      margin-bottom: 0; }\\n    .bullet-list__item::before {\\n      content: '';\\n      width: 10px;\\n      height: 10px;\\n      margin: 7px 10px 0 0;\\n      border-radius: 5px;\\n      background: rgba(31, 32, 65, 0.25);\\n      flex-shrink: 0; }\\n\\nbody {\\n  margin: 0;\\n  padding: 0;\\n  font-family: 'Montserrat';\\n  font-style: normal;\\n  font-weight: 400; }\\n\\n.ui-kit-header {\\n  padding: 30px 0 0 30px; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./main.scss?../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./main.scss":
/*!*******************!*\
  !*** ./main.scss ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./main.scss?");

/***/ }),

/***/ "./assets/fonts/material-icons-regular.svg":
/*!*************************************************!*\
  !*** ./assets/fonts/material-icons-regular.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"5d2c4194f649b33806d5.svg\";\n\n//# sourceURL=webpack:///./assets/fonts/material-icons-regular.svg?");

/***/ }),

/***/ "./assets/fonts/material-icons-regular.ttf":
/*!*************************************************!*\
  !*** ./assets/fonts/material-icons-regular.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"69a05f7f816de467f8c5.ttf\";\n\n//# sourceURL=webpack:///./assets/fonts/material-icons-regular.ttf?");

/***/ }),

/***/ "./assets/fonts/material-icons-regular.woff":
/*!**************************************************!*\
  !*** ./assets/fonts/material-icons-regular.woff ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"55d578f01ddcb3e2d619.woff\";\n\n//# sourceURL=webpack:///./assets/fonts/material-icons-regular.woff?");

/***/ }),

/***/ "./assets/fonts/montserrat-bold.svg":
/*!******************************************!*\
  !*** ./assets/fonts/montserrat-bold.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"f2eff69dbe0b00670d85.svg\";\n\n//# sourceURL=webpack:///./assets/fonts/montserrat-bold.svg?");

/***/ }),

/***/ "./assets/fonts/montserrat-bold.ttf":
/*!******************************************!*\
  !*** ./assets/fonts/montserrat-bold.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"079ca05d3ded9bc107ab.ttf\";\n\n//# sourceURL=webpack:///./assets/fonts/montserrat-bold.ttf?");

/***/ }),

/***/ "./assets/fonts/montserrat-bold.woff":
/*!*******************************************!*\
  !*** ./assets/fonts/montserrat-bold.woff ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"9851320d7b424167c36b.woff\";\n\n//# sourceURL=webpack:///./assets/fonts/montserrat-bold.woff?");

/***/ }),

/***/ "./assets/fonts/montserrat-regular.svg":
/*!*********************************************!*\
  !*** ./assets/fonts/montserrat-regular.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c27beb9811c8cac61e71.svg\";\n\n//# sourceURL=webpack:///./assets/fonts/montserrat-regular.svg?");

/***/ }),

/***/ "./assets/fonts/montserrat-regular.ttf":
/*!*********************************************!*\
  !*** ./assets/fonts/montserrat-regular.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"3cd786652b8a2e9d41f2.ttf\";\n\n//# sourceURL=webpack:///./assets/fonts/montserrat-regular.ttf?");

/***/ }),

/***/ "./assets/fonts/montserrat-regular.woff":
/*!**********************************************!*\
  !*** ./assets/fonts/montserrat-regular.woff ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"a95ae2c224d232859f0b.woff\";\n\n//# sourceURL=webpack:///./assets/fonts/montserrat-regular.woff?");

/***/ }),

/***/ "./assets/images/check-mark.svg":
/*!**************************************!*\
  !*** ./assets/images/check-mark.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"246143e5fadc81ebf691.svg\";\n\n//# sourceURL=webpack:///./assets/images/check-mark.svg?");

/***/ }),

/***/ "./assets/images/logo.svg":
/*!********************************!*\
  !*** ./assets/images/logo.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"ec58ffa5629b99064cc9.svg\";\n\n//# sourceURL=webpack:///./assets/images/logo.svg?");

/***/ }),

/***/ "./assets/images/radio.svg":
/*!*********************************!*\
  !*** ./assets/images/radio.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"4344cd3c38789ca2d848.svg\";\n\n//# sourceURL=webpack:///./assets/images/radio.svg?");

/***/ }),

/***/ "./blocks/ui-kit-header/img/ui-kit-header_logo.svg":
/*!*********************************************************!*\
  !*** ./blocks/ui-kit-header/img/ui-kit-header_logo.svg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c2a93d6ae04f381031de.svg\";\n\n//# sourceURL=webpack:///./blocks/ui-kit-header/img/ui-kit-header_logo.svg?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_cjs_js_node_modules_jquery-ui_themes_base_slider_css-nod-dda31e"], () => (__webpack_require__("./index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;