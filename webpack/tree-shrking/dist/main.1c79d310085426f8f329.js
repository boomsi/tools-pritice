/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

eval("/* harmony import */ var _tool_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tool.js */ \"./src/tool.js\");\n// import _ from 'lodash'\n\n\n function component() {\n   const element = document.createElement('div');\n\n   // Lodash, now imported by this script\n   // element.innerHTML = _.join(['Hello', 'webpack'], ' ');\n\t element.innerHTML = '222'\n  element.classList.add('hello');\n\n   return element;\n }\n\nfunction test() {\n\tconst list  = {name: 1, age: 2, sex: 1}\n\n\tconst res = _.get(list, 'name')\n\tconsole.log(res)\n}\n\n(0,_tool_js__WEBPACK_IMPORTED_MODULE_0__.t1)(1, 3)\n;(0,_tool_js__WEBPACK_IMPORTED_MODULE_0__.t2)(1, 1)\ndocument.body.appendChild(component());\n// test()\n\n\n\n//# sourceURL=webpack://tree-shrking/./src/index.js?");

/***/ }),

/***/ "./src/tool.js":
/*!*********************!*\
  !*** ./src/tool.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"t1\": () => (/* binding */ t1),\n/* harmony export */   \"t2\": () => (/* binding */ t2)\n/* harmony export */ });\nfunction t1(a, b) {\n\tconsole.log(a + b)\n}\n\nfunction t2(a, b) {\n\t\tconst c = 1\n\t// console.log(a - b)\n}\n\n\n//# sourceURL=webpack://tree-shrking/./src/tool.js?");

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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;