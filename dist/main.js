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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/close.png */ \"./src/assets/close.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n  font-family: sans-serif;\\r\\n  font-weight: 400;\\r\\n}\\r\\n\\r\\n.header {\\r\\n  display: flex;\\r\\n  /* justify-content: center; */\\r\\n  align-content: space-around;\\r\\n  align-items: center;\\r\\n  padding: 30px;\\r\\n  gap: 40%;\\r\\n}\\r\\n\\r\\n.nav a {\\r\\n  font-size: 20px;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n.nav ul {\\r\\n  display: flex;\\r\\n  gap: 20%;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.nav ul li {\\r\\n  min-width: max-content;\\r\\n}\\r\\n\\r\\n.logo img {\\r\\n  width: 180px;\\r\\n  margin-left: 70%;\\r\\n}\\r\\n\\r\\n.footer {\\r\\n  border-radius: 8px;\\r\\n  border: 3.5px solid #c1666b;\\r\\n  height: 15%;\\r\\n  padding: 1rem;\\r\\n  width: 100%;\\r\\n  color: black;\\r\\n  font-size: 14px;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.items-list {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: space-around;\\r\\n  width: 90%;\\r\\n  margin: auto;\\r\\n  gap: 30px;\\r\\n  font-size: 150%;\\r\\n}\\r\\n\\r\\n.items-list li {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  width: 25%;\\r\\n  gap: 15px;\\r\\n  margin-bottom: 40px;\\r\\n  background-color: #036082;\\r\\n  padding: 20px;\\r\\n  border-radius: 8px;\\r\\n  border: 3.5px solid #66c0c1;\\r\\n  box-shadow: 5px 1px 25px 1px #535353;\\r\\n  min-width: 220px;\\r\\n}\\r\\n\\r\\n.items-list li:hover {\\r\\n  scale: 1.02;\\r\\n}\\r\\n\\r\\n.likeBtn:hover {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.likes {\\r\\n  align-self: flex-end;\\r\\n}\\r\\n\\r\\n.comments,\\r\\n.reservations {\\r\\n  background-color: whitesmoke;\\r\\n  padding: 7px 0;\\r\\n  box-shadow: 5px 5px #f4e4ba;\\r\\n  border: 1px solid #3ca3bc;\\r\\n}\\r\\n\\r\\n.comments {\\r\\n  width: 50%;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.comments:hover,\\r\\n#comment-btn:hover {\\r\\n  scale: 1.05;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.reservations {\\r\\n  width: 60%;\\r\\n}\\r\\n\\r\\n.details {\\r\\n  position: fixed;\\r\\n  inset: 0;\\r\\n  display: none;\\r\\n  flex-direction: column;\\r\\n  background: #834c95;\\r\\n  backdrop-filter: blur(15px);\\r\\n  z-index: 2;\\r\\n  font-weight: bolder;\\r\\n  font-size: 30px;\\r\\n}\\r\\n\\r\\n.pop-body {\\r\\n  background-color: #9da5ac;\\r\\n  width: 80%;\\r\\n  height: 100vh;\\r\\n  margin: 10px auto;\\r\\n  padding: 20px 16px;\\r\\n  border-radius: 16px;\\r\\n  overflow-y: scroll;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  gap: 30px;\\r\\n}\\r\\n\\r\\n.pop-body img {\\r\\n  margin-top: 20px;\\r\\n  border-radius: 8px;\\r\\n  box-shadow: 5px 1px 25px 1px rgb(28, 21, 21);\\r\\n}\\r\\n\\r\\n.delete-popup {\\r\\n  width: 12px;\\r\\n  height: 12px;\\r\\n  right: 12%;\\r\\n  top: 4%;\\r\\n  position: absolute;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  padding: 12px;\\r\\n  background-color: #fff;\\r\\n  background-repeat: no-repeat;\\r\\n  background-position: center;\\r\\n  background-size: cover;\\r\\n  border: 2px solid gray;\\r\\n  cursor: pointer;\\r\\n  border-radius: 50%;\\r\\n}\\r\\n\\r\\n.delete-popup:hover {\\r\\n  background-color: rgb(200, 86, 86);\\r\\n}\\r\\n\\r\\n.show-details {\\r\\n  width: 90%;\\r\\n}\\r\\n\\r\\n.show-details-1,\\r\\n.show-details-2 {\\r\\n  display: flex;\\r\\n  gap: 40%;\\r\\n  font-size: 70%;\\r\\n  justify-content: flex-start;\\r\\n}\\r\\n\\r\\n.show-details-1 span,\\r\\n.show-details-2 span {\\r\\n  min-width: 250px;\\r\\n}\\r\\n\\r\\n.comment {\\r\\n  width: 90%;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n.comment h4,\\r\\n.addcomment h4 {\\r\\n  text-align: center;\\r\\n  font-size: 32px;\\r\\n  font-weight: 500;\\r\\n  margin: 0.3rem;\\r\\n}\\r\\n\\r\\n.test {\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n.comment p {\\r\\n  margin: 5px;\\r\\n}\\r\\n\\r\\n.addcomment form {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.addcomment input {\\r\\n  height: 30px;\\r\\n  border: 2px solid black;\\r\\n  margin: 10px 0;\\r\\n  outline: none;\\r\\n  padding: 0.5rem;\\r\\n  width: 80%;\\r\\n}\\r\\n\\r\\n.addcomment textarea {\\r\\n  resize: none;\\r\\n  width: 100%;\\r\\n  height: 100px;\\r\\n  padding: 0.5rem;\\r\\n  outline: none;\\r\\n  border: 2px solid rgb(64, 64, 64);\\r\\n}\\r\\n\\r\\n.addcomment button {\\r\\n  width: 70%;\\r\\n  padding: 5px;\\r\\n  outline: none;\\r\\n  line-height: 150%;\\r\\n  font-size: large;\\r\\n}\\r\\n\\r\\n.comment-form {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 10px;\\r\\n  width: 100%;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n.comment-form input {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.comment-form input,\\r\\n.comment-form textarea {\\r\\n  border: 2px solid #66b8c1;\\r\\n  outline: 2px solid #66b8c1;\\r\\n  border-radius: 8px;\\r\\n}\\r\\n\\r\\n.comment-form input:focus,\\r\\n.comment-form textarea:focus {\\r\\n  border: 2px solid #66b8c1;\\r\\n  outline: 2px solid #66b8c1;\\r\\n}\\r\\n\\r\\n#name {\\r\\n  height: 40px;\\r\\n}\\r\\n\\r\\n#comment-btn {\\r\\n  width: 100px;\\r\\n  align-self: center;\\r\\n  border-radius: 8px;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background: gray;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.items-list li img,\\r\\n.title-wrapper {\\r\\n  width: 85%;\\r\\n  margin: auto;\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://set-up-webpack/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://set-up-webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://set-up-webpack/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://set-up-webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://set-up-webpack/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://set-up-webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://set-up-webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://set-up-webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://set-up-webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://set-up-webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://set-up-webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _modules_getData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getData.js */ \"./src/modules/getData.js\");\n/* harmony import */ var _modules_pop_up_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/pop-up.js */ \"./src/modules/pop-up.js\");\n/* harmony import */ var _modules_renderData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/renderData.js */ \"./src/modules/renderData.js\");\n/* harmony import */ var _modules_addLike_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/addLike.js */ \"./src/modules/addLike.js\");\n/* harmony import */ var _modules_windowFunctions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/windowFunctions.js */ \"./src/modules/windowFunctions.js\");\n/* harmony import */ var _modules_fetchComment_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/fetchComment.js */ \"./src/modules/fetchComment.js\");\n/* harmony import */ var _modules_submitListen_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/submitListen.js */ \"./src/modules/submitListen.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://set-up-webpack/./src/index.js?");

/***/ }),

/***/ "./src/modules/Addcomment.js":
/*!***********************************!*\
  !*** ./src/modules/Addcomment.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addcomment = (dataid, name, text) => {\r\n  const add = async () => {\r\n    const res = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jSvbwvFa0M2a3HGwtKaG/comments',\r\n      {\r\n        method: 'post',\r\n        body: JSON.stringify({\r\n          item_id: dataid,\r\n          username: name,\r\n          comment: text,\r\n        }),\r\n        headers: { 'content-type': 'application/json' },\r\n      });\r\n    const data = await res.text();\r\n    return data;\r\n  };\r\n  add();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addcomment);\n\n//# sourceURL=webpack://set-up-webpack/./src/modules/Addcomment.js?");

/***/ }),

/***/ "./src/modules/addLike.js":
/*!********************************!*\
  !*** ./src/modules/addLike.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData.js */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderData.js */ \"./src/modules/renderData.js\");\n\r\n\r\n\r\nwindow.addLike = async (tvID) => {\r\n  const response = await fetch(\r\n    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/4aTSjUAMwHbqF73Z3l5i/likes',\r\n    {\r\n      method: 'POST',\r\n      body: JSON.stringify({\r\n        item_id: tvID,\r\n      }),\r\n      headers: {\r\n        'Content-type': 'application/json; charset=UTF-8',\r\n      },\r\n    },\r\n  );\r\n\r\n  const dataArr = (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__.getData)();\r\n  (0,_renderData_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dataArr);\r\n  return response;\r\n};\r\n\r\nconst dataArr = (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__.getData)();\r\n(0,_renderData_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dataArr);\r\n\n\n//# sourceURL=webpack://set-up-webpack/./src/modules/addLike.js?");

/***/ }),

/***/ "./src/modules/commentCount.js":
/*!*************************************!*\
  !*** ./src/modules/commentCount.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentsCounter = (el) => {\r\n  const elements = document.querySelectorAll(el);\r\n  return elements.length;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsCounter);\r\n\n\n//# sourceURL=webpack://set-up-webpack/./src/modules/commentCount.js?");

/***/ }),

/***/ "./src/modules/fetchComment.js":
/*!*************************************!*\
  !*** ./src/modules/fetchComment.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.js */ \"./src/modules/list.js\");\n/* harmony import */ var _commentCount_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentCount.js */ \"./src/modules/commentCount.js\");\n\r\n\r\n\r\nconst fetchapi = (dataid, arr) => {\r\n  const id = dataid;\r\n  const comres = async () => {\r\n    const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jSvbwvFa0M2a3HGwtKaG/comments?item_id=${id}`);\r\n    const data = await res.json();\r\n    return data;\r\n  };\r\n  comres().then((each) => {\r\n    const comsec = document.querySelector('.test');\r\n    arr.push(...arr, ...each);\r\n    each.map((e) => {\r\n      (0,_list_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(e, comsec);\r\n      const header = document.querySelector('.head');\r\n      header.innerHTML = (0,_commentCount_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('.test li');\r\n      return e;\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchapi);\r\n\n\n//# sourceURL=webpack://set-up-webpack/./src/modules/fetchComment.js?");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getData\": () => (/* binding */ getData)\n/* harmony export */ });\nasync function getData() {\r\n  const response = await fetch('https://api.tvmaze.com/shows');\r\n  const myJson = await response.json();\r\n  console.log(myJson);\r\n\r\n  const likesResponse = await fetch(\r\n    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/4aTSjUAMwHbqF73Z3l5i/likes',\r\n  );\r\n  const likesJson = await likesResponse.json();\r\n\r\n  const result = myJson.slice(6, 12);\r\n\r\n  result.forEach((tvObj) => {\r\n    tvObj.likes = 0;\r\n  });\r\n  result.forEach((tvObj) => {\r\n    likesJson.forEach((likesObj) => {\r\n      if (+tvObj.id === +likesObj.item_id) tvObj.likes = likesObj.likes;\r\n    });\r\n  });\r\n\r\n  return result;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData());\r\n\n\n//# sourceURL=webpack://set-up-webpack/./src/modules/getData.js?");

/***/ }),

/***/ "./src/modules/itemCounter.js":
/*!************************************!*\
  !*** ./src/modules/itemCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst itemsCounter = (el) => {\r\n  const elements = document.querySelectorAll(el);\r\n  return elements.length;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemsCounter);\r\n\n\n//# sourceURL=webpack://set-up-webpack/./src/modules/itemCounter.js?");

/***/ }),

/***/ "./src/modules/list.js":
/*!*****************************!*\
  !*** ./src/modules/list.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _commentCount_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentCount.js */ \"./src/modules/commentCount.js\");\n\r\n\r\nconst listComment = (e, comsec) => {\r\n  const temp = `${e.creation_date} ${e.username} : ${e.comment}`;\r\n  const per = document.createElement('li');\r\n  per.innerHTML = temp;\r\n  comsec.appendChild(per);\r\n  const header = document.querySelector('.head');\r\n  header.innerHTML = (0,_commentCount_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.test li');\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listComment);\r\n\n\n//# sourceURL=webpack://set-up-webpack/./src/modules/list.js?");

/***/ }),

/***/ "./src/modules/pop-up.js":
/*!*******************************!*\
  !*** ./src/modules/pop-up.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst main = document.querySelector('.main-section');\r\n\r\nconst activePopUp = (id) => {\r\n  main.innerHTML = `<div class= \"pop-body\">\r\n    <img src='${id.image.original}' alt='poster' />\r\n\r\n    </div>`;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (activePopUp);\r\n\n\n//# sourceURL=webpack://set-up-webpack/./src/modules/pop-up.js?");

/***/ }),

/***/ "./src/modules/renderData.js":
/*!***********************************!*\
  !*** ./src/modules/renderData.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderData)\n/* harmony export */ });\n/* harmony import */ var _itemCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./itemCounter.js */ \"./src/modules/itemCounter.js\");\n\r\n\r\nasync function renderData(arr) {\r\n  const ourArr = await arr;\r\n  const list = document.querySelector('.items-list');\r\n  list.innerHTML = '';\r\n  if (ourArr.length > 0) {\r\n    ourArr.forEach((obj) => {\r\n      list.innerHTML += `<li data-id='${obj.id || 0}'> \r\n            <img src='${obj.image.original}' alt='poster' />\r\n            <span class=\"title-wrapper\">${obj.name} <i class=\"fa-regular fa-heart likeBtn\" onClick=\"addLike(${obj.id})\"></i></span>\r\n            <span class=\"likes\">${obj.likes} likes</span>\r\n            <button class=\"comments\" onclick=\"activePopUp(${obj.id});\">Comments</button>\r\n            </li>`;\r\n    });\r\n    document.querySelector('.count').innerHTML = (0,_itemCounter_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.items-list li');\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://set-up-webpack/./src/modules/renderData.js?");

/***/ }),

/***/ "./src/modules/submitListen.js":
/*!*************************************!*\
  !*** ./src/modules/submitListen.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ submitListen)\n/* harmony export */ });\n/* harmony import */ var _Addcomment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Addcomment.js */ \"./src/modules/Addcomment.js\");\n/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.js */ \"./src/modules/list.js\");\n/* harmony import */ var _commentCount_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commentCount.js */ \"./src/modules/commentCount.js\");\n/* harmony import */ var _fetchComment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetchComment.js */ \"./src/modules/fetchComment.js\");\n\r\n\r\n\r\n\r\n\r\nfunction submitListen(arr) {\r\n  const form = document.querySelector('form');\r\n  const user = document.querySelector('#name');\r\n  const text = document.querySelector('#text');\r\n  const comsec = document.querySelector('.test');\r\n\r\n  form.addEventListener('submit', (e) => {\r\n    e.preventDefault();\r\n\r\n    const lists = [];\r\n\r\n    if (user.value === '' || text.value === '') {\r\n      return;\r\n    }\r\n    (0,_Addcomment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr.id, user.value, text.value);\r\n    lists.push({\r\n      creation_date: 'few second ago',\r\n      username: user.value,\r\n      comment: text.value,\r\n    });\r\n    comsec.innerHTML = '';\r\n    lists.map((e) => (0,_list_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e, comsec));\r\n\r\n    (0,_fetchComment_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(arr.id, lists);\r\n\r\n    const header = document.querySelector('.head');\r\n    header.innerHTML = (0,_commentCount_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('.test li');\r\n    user.value = '';\r\n    text.value = '';\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://set-up-webpack/./src/modules/submitListen.js?");

/***/ }),

/***/ "./src/modules/windowFunctions.js":
/*!****************************************!*\
  !*** ./src/modules/windowFunctions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData.js */ \"./src/modules/getData.js\");\n/* harmony import */ var _submitListen_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submitListen.js */ \"./src/modules/submitListen.js\");\n/* harmony import */ var _fetchComment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetchComment.js */ \"./src/modules/fetchComment.js\");\n\r\n\r\n\r\n\r\nconst details = document.querySelector(\".details\");\r\nconst pop = document.querySelector(\".pop-body\");\r\n\r\nwindow.activePopUp = async (index) => {\r\n  details.style.display = \"flex\";\r\n  \r\n  const lists = [];\r\n\r\n  let arr = (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__.getData)();\r\n  arr = await arr;\r\n\r\n  const arrUNeed = arr.find((obj) => +obj.id === +index);\r\n\r\n  pop.innerHTML = `<button class=\"delete-popup\" onclick=\"closeDetails()\" type=\"button\">\r\n    </button>\r\n    <img src=\"${arrUNeed.image.medium}\" alt='poster' />\r\n    <div class=\"summary\">\r\n    '${arrUNeed.name}'\r\n    </div>\r\n    <div class=\"show-details\">\r\n    <div class=\"show-details-1\">\r\n          <span>Score: ${parseInt(arrUNeed.score * 100, 10)}%</span>\r\n          <span>Network: ${\r\n            arrUNeed.network ? arrUNeed.network.name : \"Unkown\"\r\n          }</span>\r\n      </div>\r\n      <div class=\"show-details-2\">\r\n          <span>Language:&nbsp;${arrUNeed.language}</span>\r\n          <span>Genres: ${arrUNeed.genres.toString()}</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"comment\">\r\n                <h4>comment(<span class=\"head\"></span>)</h4>\r\n                <ul class=\"test \">\r\n                \r\n                </ul>\r\n        </div>\r\n        <div class=\"addcomment\">\r\n                  <h4>Add comment</h4>\r\n                  <form class =\"comment-form\">\r\n                  <input type=\"text\" placeholder=\"your name\" id=\"name\">\r\n                  <textarea name=\"\" id=\"text\" cols=\"30\" rows=\"10\" placeholder=\"your view\"></textarea>\r\n                  <button id=\"comment-btn\">submit</button>\r\n                </form>\r\n              </div>\r\n  `;\r\n\r\n  (0,_fetchComment_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arrUNeed.id, lists);\r\n  (0,_submitListen_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arrUNeed);\r\n};\r\n\r\nwindow.closeDetails = () => {\r\n  details.style.display = \"none\";\r\n};\r\n\n\n//# sourceURL=webpack://set-up-webpack/./src/modules/windowFunctions.js?");

/***/ }),

/***/ "./src/assets/close.png":
/*!******************************!*\
  !*** ./src/assets/close.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2f258d95ddb7c6b26be5.png\";\n\n//# sourceURL=webpack://set-up-webpack/./src/assets/close.png?");

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
/******/ 				scriptUrl = document.currentScript.src;
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
/******/ 			"bundle": 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;