/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"App": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors~App"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Information.js":
/*!***************************************!*\
  !*** ./src/components/Information.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return DataTable; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_statedropdown_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/statedropdown.js */ \"./src/components/statedropdown.js\");\n/* harmony import */ var _components_NumberConvert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NumberConvert.js */ \"./src/components/NumberConvert.js\");\n/* harmony import */ var _components_SimpleDateDisplay_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SimpleDateDisplay.js */ \"./src/components/SimpleDateDisplay.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\nfunction DataTable(props) {\n  // array of states values\n  const statesArray = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']; // declare states for COVID API data\n\n  const [dataGeneral, setDataGeneral] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({});\n  const [dataRiskLevels, setDataRiskLevels] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({});\n  const [dataActuals, setDataActuals] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({}); // declare state for US state value\n\n  const [location, setLocation] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(props.userState);\n\n  const handleChangeLocation = e => {\n    setLocation(e.target.value);\n    console.log(\"handleChange-state: \".concat(location)); // debugging\n\n    _asyncToGenerator(function* () {\n      try {\n        const response = yield fetch(\"https://api.covidactnow.org/v2/state/\".concat(location, \".json?apiKey=13dc5eb460e54e28b9d950d83a05290f\"));\n        const data = yield response.json();\n        setDataGeneral(data);\n        setDataRiskLevels(data.riskLevels);\n        setDataActuals(data.actuals);\n      } catch (error) {\n        console.error(error);\n      }\n    })();\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    console.log(\"useEffect-state: \".concat(location)); // debugging\n\n    _asyncToGenerator(function* () {\n      try {\n        const response = yield fetch(\"https://api.covidactnow.org/v2/state/\".concat(location, \".json?apiKey=13dc5eb460e54e28b9d950d83a05290f\"));\n        const data = yield response.json();\n        setDataGeneral(data);\n        setDataRiskLevels(data.riskLevels);\n        setDataActuals(data.actuals);\n      } catch (error) {\n        console.error(error);\n      }\n    })();\n  }, [location]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"COVID Data\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_statedropdown_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], {\n    onChange: handleChangeLocation,\n    array: statesArray,\n    value: location\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Risk Level\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, dataRiskLevels.overall)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Total Cases\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NumberConvert_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], {\n    number: dataActuals.cases\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Daily New Cases\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NumberConvert_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], {\n    number: dataActuals.newCases\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Deaths\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NumberConvert_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], {\n    number: dataActuals.deaths\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Daily New Deaths\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NumberConvert_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], {\n    number: dataActuals.newDeaths\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Negative Tests\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NumberConvert_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], {\n    number: dataActuals.negativeTests\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Positive Tests\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NumberConvert_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], {\n    number: dataActuals.positiveTests\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Vaccines Administered\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NumberConvert_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], {\n    number: dataActuals.vaccinesAdministered\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Last Update\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SimpleDateDisplay_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"], {\n    date: dataGeneral.lastUpdatedDate\n  }))))));\n}\n\n//# sourceURL=webpack:///./src/components/Information.js?");

/***/ }),

/***/ "./src/components/LogSym/Button.js":
/*!*****************************************!*\
  !*** ./src/components/LogSym/Button.js ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Button; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Button(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"btn signIn-btn\",\n    id: props.id,\n    type: props.type,\n    value: props.value,\n    onClick: props.onClick\n  }, props.value));\n}\n\n//# sourceURL=webpack:///./src/components/LogSym/Button.js?");

/***/ }),

/***/ "./src/components/LogSym/Exposure.js":
/*!*******************************************!*\
  !*** ./src/components/LogSym/Exposure.js ***!
  \*******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Exposure; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Exposure(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"textarea\", {\n    type: \"text\",\n    placeholder: props.placeholder,\n    name: props.name,\n    onChange: props.onChange\n  }));\n}\n\n//# sourceURL=webpack:///./src/components/LogSym/Exposure.js?");

/***/ }),

/***/ "./src/components/LogSym/LogHead.js":
/*!******************************************!*\
  !*** ./src/components/LogSym/LogHead.js ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return LogHead; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction LogHead(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    className: \"reg-card-title text-center\"\n  }, props.text));\n}\n\n//# sourceURL=webpack:///./src/components/LogSym/LogHead.js?");

/***/ }),

/***/ "./src/components/LogSym/Symptoms/CheckBoxForm.js":
/*!********************************************************!*\
  !*** ./src/components/LogSym/Symptoms/CheckBoxForm.js ***!
  \********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return CheckBoxForm; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction CheckBoxForm(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"checkbox\",\n    className: \"text-center log-gif-one\",\n    id: props.name,\n    onChange: props.onChange,\n    name: props.name\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: props.name\n  }, props.label));\n}\n\n//# sourceURL=webpack:///./src/components/LogSym/Symptoms/CheckBoxForm.js?");

/***/ }),

/***/ "./src/components/LogSym/Symptoms/Symptoms.js":
/*!****************************************************!*\
  !*** ./src/components/LogSym/Symptoms/Symptoms.js ***!
  \****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Symptoms; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Symptoms(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"global-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"d-flex flex-sm-row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"signIn-form\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", {\n    className: \"p-4 reg-title-card\"\n  }, \"Log Symptoms daily to help monitor for symptoms of COVID-19 and to keep you safe. The questions below are based on CDC guidance related to COVID-19. The following questions and informaiton are not nor intedned to be, medical advice, treatment, or diagnosis. Please contact your doctor if you have any questions or concerns related to COVID-19.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"p-4\"\n  }, \"Are you experiencing any of the following symptoms:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"p-4\"\n  }, props.checkList))));\n}\n\n//# sourceURL=webpack:///./src/components/LogSym/Symptoms/Symptoms.js?");

/***/ }),

/***/ "./src/components/LogSym/Symptoms/symptomOptions.js":
/*!**********************************************************!*\
  !*** ./src/components/LogSym/Symptoms/symptomOptions.js ***!
  \**********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("const symptoms = [{\n  symptom: 'New Loss of Smell or Taste',\n  name: 'smellOrTaste'\n}, {\n  symptom: 'New or Worsended Muscle Aches, Body Aches, or Fatigue',\n  name: 'achesOrFatigue'\n}, {\n  symptom: 'Fever, Feeling Feverish or Shaking Chills',\n  name: 'fever'\n}, {\n  symptom: 'New or Worsened Headache',\n  name: 'headache'\n}, {\n  symptom: 'New or Worsened Cough',\n  name: 'cough'\n}, {\n  symptom: 'New or Worsened Shortness of breath or Difficulty breathing',\n  name: 'breathing'\n}, {\n  symptom: 'New or Worsened Sore Throat',\n  name: 'soreThroat'\n}, {\n  symptom: 'New or Worsened Congestion or Runny Nose',\n  name: 'congestion'\n}, {\n  symptom: 'Diarrhea or Vomitting',\n  name: 'diarrheaOrVomiting'\n}];\n/* harmony default export */ __webpack_exports__[\"a\"] = (symptoms);\n\n//# sourceURL=webpack:///./src/components/LogSym/Symptoms/symptomOptions.js?");

/***/ }),

/***/ "./src/components/LogSym/YesNo.js":
/*!****************************************!*\
  !*** ./src/components/LogSym/YesNo.js ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return YesNo; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction YesNo(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, props.text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    onChange: props.onChange\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"radio\",\n    id: \"\".concat(props.name, \"-yes\"),\n    name: props.name,\n    value: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: \"\".concat(props.name, \"-yes\")\n  }, \"Yes\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"radio\",\n    id: \"\".concat(props.name, \"-no\"),\n    name: props.name,\n    value: false\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: \"\".concat(props.name, \"-no\")\n  }, \"No\")));\n}\n\n//# sourceURL=webpack:///./src/components/LogSym/YesNo.js?");

/***/ }),

/***/ "./src/components/LogSymptoms.js":
/*!***************************************!*\
  !*** ./src/components/LogSymptoms.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return LogSympmtoms; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _LogSym_Exposure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LogSym/Exposure */ \"./src/components/LogSym/Exposure.js\");\n/* harmony import */ var _LogSym_Symptoms_Symptoms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LogSym/Symptoms/Symptoms */ \"./src/components/LogSym/Symptoms/Symptoms.js\");\n/* harmony import */ var _LogSym_YesNo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LogSym/YesNo */ \"./src/components/LogSym/YesNo.js\");\n/* harmony import */ var _LogSym_Symptoms_CheckBoxForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LogSym/Symptoms/CheckBoxForm */ \"./src/components/LogSym/Symptoms/CheckBoxForm.js\");\n/* harmony import */ var _LogSym_LogHead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LogSym/LogHead */ \"./src/components/LogSym/LogHead.js\");\n/* harmony import */ var _LogSym_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LogSym/Button */ \"./src/components/LogSym/Button.js\");\n/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Map */ \"./src/components/Map.js\");\n/* harmony import */ var _LogSym_Symptoms_symptomOptions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LogSym/Symptoms/symptomOptions */ \"./src/components/LogSym/Symptoms/symptomOptions.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\nconst containerStyle = {\n  width: '400px',\n  height: '400px'\n};\nlet coords = [];\nlet google = window.google;\nfunction LogSympmtoms(props) {\n  const [findHelp, setFindHelp] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const [symptom, setSymptom] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    smellOrTaste: false,\n    achesOrFatigue: false,\n    headache: false,\n    fever: false,\n    cough: false,\n    breathing: false,\n    soreThroat: false,\n    congestion: false,\n    diarrheaOrVomiting: false,\n    lifeThreatening: false,\n    exposed: false,\n    exposedHow: '',\n    healthProvider: false,\n    sentToDoc: false,\n    sharedPublicly: false,\n    user: \"\".concat(props.userId)\n  });\n  const [showCard, setShowCard] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n\n  function toBool(value) {\n    if (value === 'true') {\n      return true;\n    } else if (value === 'false') {\n      return false;\n    } else {\n      return value;\n    }\n  }\n\n  const handleChange = e => {\n    setSymptom(_objectSpread(_objectSpread({}, symptom), {}, {\n      [e.target.name]: toBool(e.target.value)\n    }));\n  };\n\n  const handleCheckChange = e => {\n    setSymptom(_objectSpread(_objectSpread({}, symptom), {}, {\n      [e.target.name]: e.target.checked\n    }));\n  };\n\n  const handleFindHelp = e => {\n    setFindHelp(!findHelp);\n  };\n\n  const handleEditform = e => {\n    setShowCard(false);\n  };\n\n  const handleSubmit = /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator(function* (e) {\n      e.preventDefault();\n      e.target.reset();\n\n      try {\n        const response = yield fetch('/api/symptoms', {\n          method: 'POST',\n          headers: {\n            'Content-Type': 'application/json',\n            'x-auth-token': props.token\n          },\n          body: JSON.stringify(symptom)\n        });\n        const data = yield response.json();\n      } catch (err) {\n        console.error(err);\n      }\n\n      setShowCard(true);\n    });\n\n    return function handleSubmit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }(); //Should i be doing something similar with the radio buttons? They were annoying due to value being different for them. I could do an array again to map over, the only thing that binds radio buttons is the name so as long as the name is fine it should be fine? Maybe that's easier? Unsure.\n\n\n  const symptomForm = _LogSym_Symptoms_symptomOptions__WEBPACK_IMPORTED_MODULE_8__[/* default */ \"a\"].map((symptom, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: index\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LogSym_Symptoms_CheckBoxForm__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"], {\n      label: symptom.symptom,\n      id: symptom.name,\n      name: symptom.name,\n      onChange: handleCheckChange\n    }));\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, !showCard && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    onSubmit: handleSubmit,\n    className: \"LogSympmtoms\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LogSym_LogHead__WEBPACK_IMPORTED_MODULE_5__[/* default */ \"a\"], {\n    text: 'Log Symptoms'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LogSym_Symptoms_Symptoms__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], {\n    checkList: symptomForm\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LogSym_YesNo__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"], {\n    text: 'Are you experincing any life threatening symptoms?',\n    name: 'lifeThreatening',\n    onChange: handleChange\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LogSym_YesNo__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"], {\n    text: 'To your best knowldge were you directly exposed to COVID-19?',\n    name: 'exposed',\n    onChange: handleChange\n  }), symptom.exposed && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LogSym_Exposure__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], {\n    text: 'To the best of your knowldge, how were you exposed?',\n    name: 'exposedHow',\n    placeholder: 'Please enter your response here.',\n    onChange: handleChange\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LogSym_YesNo__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"], {\n    text: 'Do you have a healthcare provider you can can contact?',\n    name: 'healthProvider',\n    onChange: handleChange\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LogSym_YesNo__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"], {\n    text: 'Would you like your information to be sent to your doctor?',\n    name: 'sentToDoc',\n    onChange: handleChange\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LogSym_YesNo__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"], {\n    text: 'Would you like your symptoms shared publicly within the CoviTRKR system? (No personal information is shared within the system. Only symptpms, exposures, and general location are shared within the network to help bring community awareness of COVID exposure levels).',\n    name: 'sharedPublicly',\n    onChange: handleChange\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LogSym_Button__WEBPACK_IMPORTED_MODULE_6__[/* default */ \"a\"], {\n    id: 'submit-btn',\n    type: 'submit',\n    value: 'Submit'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LogSym_Button__WEBPACK_IMPORTED_MODULE_6__[/* default */ \"a\"], {\n    id: 'reset-btn',\n    type: 'reset',\n    value: 'Clear'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LogSym_Button__WEBPACK_IMPORTED_MODULE_6__[/* default */ \"a\"], {\n    id: 'contact',\n    type: 'button',\n    value: 'Contact Doctor',\n    onClick: handleFindHelp\n  }), findHelp ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Map__WEBPACK_IMPORTED_MODULE_7__[/* default */ \"a\"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null)), showCard && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n    className: \"reg-card-title\"\n  }, \"Submission complete.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"signIn-form\"\n  }, \"Thank you. Your information has been saved into the tracker.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__[/* Link */ \"b\"], {\n    to: \"/\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    type: \"button\",\n    className: \"btn signIn-btn\",\n    onClick: handleEditform\n  }, \"Log Symptoms Again\"))));\n}\n\n//# sourceURL=webpack:///./src/components/LogSymptoms.js?");

/***/ }),

/***/ "./src/components/Map.js":
/*!*******************************!*\
  !*** ./src/components/Map.js ***!
  \*******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Map; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-google-maps/api */ \"./node_modules/@react-google-maps/api/dist/esm.js\");\n\n //this needs to be outside or else it wont render...\n\nconst containerStyle = {\n  width: '800px',\n  height: '800px'\n};\nlet coords = [];\nlet google = window.google;\nfunction Map(props) {\n  const {\n    isLoaded\n  } = Object(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_1__[/* useJsApiLoader */ \"c\"])({\n    id: 'google-map-script',\n    googleMapsApiKey: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDgAfPKf6nbpB3IEAxPweU-5xiqnCdNS98',\n    libraries: 'places'\n  });\n  const [map, setMap] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    center: {\n      lat: -33.867,\n      lng: 151.195\n    },\n    coordsResult: [],\n    name: ''\n  });\n  const [currentPosition, setCurrentPosition] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    lat: '',\n    lng: ''\n  });\n\n  const success = position => {\n    const currentPosition = {\n      lat: position.coords.latitude,\n      lng: position.coords.longitude\n    };\n    setCurrentPosition(currentPosition);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    navigator.geolocation.getCurrentPosition(success);\n  }, []); //this is checking around me despite the center being my apt.\n\n  const onMapLoad = map => {\n    let request = {\n      query: 'hospital',\n      fields: ['name', 'geometry']\n    };\n    let service = new google.maps.places.PlacesService(map);\n    service.findPlaceFromQuery(request, (results, status) => {\n      if (status === google.maps.places.PlacesServiceStatus.OK) {\n        for (var i = 0; i < results.length; i++) {\n          coords.push(results[i]);\n        }\n\n        setMap({\n          center: results[0].geometry.location,\n          coordsResult: coords,\n          name: results[0].name\n        });\n      }\n    });\n  };\n\n  const onUnmount = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function callback(map) {\n    setMap(null);\n  }, []);\n  const places = map.coordsResult.map((results, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_1__[/* Marker */ \"b\"], {\n      key: results.name,\n      animation: \"BOUNCE\",\n      position: results.geometry.location,\n      clickable: true,\n      onClick: () => alert(results.name)\n    });\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, isLoaded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_1__[/* GoogleMap */ \"a\"], {\n    mapContainerStyle: containerStyle,\n    center: currentPosition,\n    zoom: 13,\n    onLoad: onMapLoad,\n    onUnmount: onUnmount\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_1__[/* Marker */ \"b\"], {\n    position: currentPosition,\n    animation: \"BOUNCE\"\n  }), places) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null));\n}\n\n//# sourceURL=webpack:///./src/components/Map.js?");

/***/ }),

/***/ "./src/components/NumberConvert.js":
/*!*****************************************!*\
  !*** ./src/components/NumberConvert.js ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return NumberWithCommas; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction NumberWithCommas(_ref) {\n  let {\n    number\n  } = _ref;\n  // add commas to numbers\n  const convertedNumber = parseInt(number).toLocaleString('en-US');\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, convertedNumber);\n}\n\n//# sourceURL=webpack:///./src/components/NumberConvert.js?");

/***/ }),

/***/ "./src/components/SimpleDateDisplay.js":
/*!*********************************************!*\
  !*** ./src/components/SimpleDateDisplay.js ***!
  \*********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return SimpleDateDisplay; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction SimpleDateDisplay(_ref) {\n  let {\n    date\n  } = _ref;\n  // months array\n  const monthsList = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];\n  const year = parseInt(\"\".concat(date).slice(0, 4), 10);\n  const month = monthsList[parseInt(\"\".concat(date).slice(5, 7), 10) - 1];\n  const day = parseInt(\"\".concat(date).slice(8, 10), 10);\n  const shortDate = \"\".concat(day, \" \").concat(month, \" \").concat(year); // const shortDate = `${month}-${day} `;\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, shortDate);\n}\n\n//# sourceURL=webpack:///./src/components/SimpleDateDisplay.js?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n\n\n\n\nconst Header = props => {\n  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* useHistory */ \"f\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (window.localStorage.getItem('token')) {\n      window.localStorage.getItem('loggedInUser');\n    }\n  }, []);\n\n  const handleLogout = () => {\n    localStorage.clear();\n    history.push('/');\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"header-bg\"\n  }, !window.localStorage.getItem('token') ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"header-covid\"\n  }, \"CoviTRKR\")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"header-covid\"\n  }, \"CoviTRKR\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Hello \", window.localStorage.getItem('loggedInUser')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"btn reg-btn\",\n    onClick: handleLogout\n  }, \"Logout\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* withRouter */ \"g\"])(Header));\n\n//# sourceURL=webpack:///./src/components/header.js?");

/***/ }),

/***/ "./src/components/registerinfo.js":
/*!****************************************!*\
  !*** ./src/components/registerinfo.js ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _components_statedropdown_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/statedropdown.js */ \"./src/components/statedropdown.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nconst RegisterInformation = props => {\n  const [personal, setPersonal] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    email: '',\n    password: '',\n    firstName: '',\n    lastName: '',\n    dateOfBirth: ''\n  });\n  const [location, setLocation] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    state: '',\n    city: '',\n    zipCode: ''\n  });\n  const [doctor, setDoctor] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    firstName: '',\n    lastName: '',\n    doctorPhone: '',\n    email: '',\n    facilityName: '',\n    facilityLocation: '',\n    facilityNumber: ''\n  });\n  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* useHistory */ \"f\"])();\n  const [confirmPassword, setConfirmPassword] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    cpassword: ''\n  });\n  const statesArray = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];\n\n  const handleChangePersonal = e => {\n    setPersonal(_objectSpread(_objectSpread({}, personal), {}, {\n      [e.target.id]: e.target.value\n    }));\n  };\n\n  const handleChangeConfirmPassword = e => {\n    setConfirmPassword(_objectSpread(_objectSpread({}, confirmPassword), {}, {\n      [e.target.id]: e.target.value\n    }));\n  };\n\n  const handleChangeDoctor = e => {\n    setDoctor(_objectSpread(_objectSpread({}, doctor), {}, {\n      [e.target.id]: e.target.value\n    }));\n  };\n\n  const handleChangeLocation = e => {\n    setLocation(_objectSpread(_objectSpread({}, location), {}, {\n      [e.target.id]: e.target.value\n    }));\n  };\n\n  const handleSubmit = /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator(function* (e) {\n      e.preventDefault();\n\n      if (personal.password !== confirmPassword.cpassword) {\n        alert('Passwords do not match');\n        setPersonal(_objectSpread(_objectSpread({}, personal), {}, {\n          password: ''\n        }));\n        setConfirmPassword({\n          cpassword: ''\n        });\n        return;\n      }\n\n      const allData = _objectSpread(_objectSpread({}, personal), {}, {\n        location: _objectSpread({}, location),\n        doctor: _objectSpread({}, doctor)\n      });\n\n      try {\n        const response = yield fetch('/api/users/register', {\n          method: 'POST',\n          headers: {\n            'Content-Type': 'application/json'\n          },\n          body: JSON.stringify(allData)\n        });\n        const data = yield response.json();\n\n        if (data.message) {\n          alert(data.message);\n          return;\n        } // window.localStorage.setItem('token', data.token);\n        // window.localStorage.setItem('loggedInUser', data.user.email);\n\n      } catch (error) {\n        console.error(error);\n      }\n\n      history.push('/');\n    });\n\n    return function handleSubmit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"global-container card-body\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card signIn-form text-center col-lg-6 col-md-6 col-sm-6 col-xl-4\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n    className: \"reg-card-title\"\n  }, \"Register your account\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", {\n    className: \"reg-card-subtitle\"\n  }, \"Personal Information\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"input-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fa fa-wpforms icon\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    className: \"input-field\",\n    id: \"firstName\",\n    type: \"text\",\n    placeholder: \"First Name\",\n    value: personal.firstName,\n    onChange: handleChangePersonal,\n    required: true\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"input-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fa fa-wpforms icon\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    className: \"input-field\",\n    id: \"lastName\",\n    type: \"text\",\n    placeholder: \"Last Name\",\n    value: personal.lastName,\n    onChange: handleChangePersonal,\n    required: true\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"input-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fa fa-wpforms icon\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    className: \"input-field\",\n    id: \"dateOfBirth\",\n    type: \"date\",\n    placeholder: \"Date of Birth\",\n    value: personal.dateOfBirth,\n    onChange: handleChangePersonal,\n    required: true\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"input-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fa fa-wpforms icon\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    className: \"input-field\",\n    id: \"city\",\n    type: \"text\",\n    placeholder: \"City\",\n    value: location.city,\n    onChange: handleChangeLocation,\n    required: true\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"input-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fa fa-wpforms icon\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_statedropdown_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], {\n    onChange: handleChangeLocation,\n    array: statesArray,\n    value: location.state\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"input-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fa fa-wpforms icon\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    className: \"input-field\",\n    id: \"zipCode\",\n    type: \"number\",\n    placeholder: \"Zip Code\",\n    value: personal.zipCode,\n    onChange: handleChangeLocation,\n    required: true\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"input-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fa fa-wpforms icon\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    className: \"input-field\",\n    id: \"email\",\n    type: \"text\",\n    placeholder: \"Email\",\n    value: personal.email,\n    onChange: handleChangePersonal,\n    required: true\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"input-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fa fa-wpforms icon\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    className: \"input-field\",\n    id: \"password\",\n    type: \"password\",\n    placeholder: \"Password\",\n    value: personal.password,\n    onChange: handleChangePersonal,\n    required: true\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"input-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fa fa-wpforms icon\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    className: \"input-field\",\n    id: \"cpassword\",\n    type: \"password\",\n    placeholder: \"Confirm Password\",\n    value: confirmPassword.cpassword,\n    onChange: handleChangeConfirmPassword,\n    required: true\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", {\n    className: \"reg-card-title\"\n  }, \"Medical Information\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"input-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fa fa-wpforms icon\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    className: \"input-field\",\n    id: \"firstName\",\n    type: \"text\",\n    placeholder: \"Physician First Name\",\n    value: doctor.firstName,\n    onChange: handleChangeDoctor\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"input-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fa fa-wpforms icon\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    className: \"input-field\",\n    id: \"lastName\",\n    type: \"text\",\n    placeholder: \"Physician Last Name\",\n    value: doctor.lastName,\n    onChange: handleChangeDoctor\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"input-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fa fa-wpforms icon\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    className: \"input-field\",\n    id: \"doctorPhone\",\n    type: \"number\",\n    placeholder: \"Physician Phone Number\",\n    value: doctor.doctorPhone,\n    onChange: handleChangeDoctor\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"input-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fa fa-wpforms icon\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    className: \"input-field\",\n    id: \"email\",\n    type: \"text\",\n    placeholder: \"Physician email\",\n    value: doctor.email,\n    onChange: handleChangeDoctor\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"input-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fa fa-wpforms icon\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    className: \"input-field\",\n    id: \"facilityName\",\n    type: \"text\",\n    placeholder: \"Facility Name\",\n    value: doctor.facilityName,\n    onChange: handleChangeDoctor\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"input-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fa fa-wpforms icon\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    className: \"input-field\",\n    id: \"facilityLocation\",\n    type: \"text\",\n    placeholder: \"Facility Location\",\n    value: doctor.facilityLocation,\n    onChange: handleChangeDoctor\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"input-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fa fa-wpforms icon\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    className: \"input-field\",\n    id: \"facilityNumber\",\n    type: \"text\",\n    placeholder: \"Facility Phone Number\",\n    value: doctor.facilityNumber,\n    onChange: handleChangeDoctor\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"submit\",\n    className: \"btn signIn-btn\",\n    value: \"SUBMIT\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", {\n    className: \"reg-card-subtitle\"\n  }, \"Thank you!\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (RegisterInformation);\n\n//# sourceURL=webpack:///./src/components/registerinfo.js?");

/***/ }),

/***/ "./src/components/signIn.js":
/*!**********************************!*\
  !*** ./src/components/signIn.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconst SignIn = props => {\n  const [signin, setSignin] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({});\n  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* useHistory */ \"f\"])();\n\n  const handleChange = e => {\n    setSignin(_objectSpread(_objectSpread({}, signin), {}, {\n      [e.target.id]: e.target.value\n    }));\n  };\n\n  const handleLogin = /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator(function* (e) {\n      e.preventDefault();\n\n      try {\n        const response = yield fetch('/api/auth/login', {\n          method: 'POST',\n          headers: {\n            'Content-Type': 'application/json'\n          },\n          body: JSON.stringify(signin)\n        });\n        const data = yield response.json();\n\n        if (data.message) {\n          alert(data.message);\n          return;\n        }\n\n        window.localStorage.setItem('token', data.token);\n        window.localStorage.setItem('loggedInUser', data.user.email);\n        window.localStorage.setItem('id', data.user.id);\n        window.localStorage.setItem('userState', data.user.state);\n      } catch (error) {\n        console.error(error);\n      }\n\n      history.push('/');\n    });\n\n    return function handleLogin(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"global-container card-body\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card signIn-form text-center col-lg-6 col-md-6 col-sm-6 col-xl-4\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"center-text reg-card-title\"\n  }, \"Sign in to your account\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    onSubmit: handleLogin\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"input-container center-text\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fa fa-user icon\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    className: \"input-field center-text\",\n    id: \"email\",\n    type: \"text\",\n    placeholder: \"User Email\",\n    name: \"email\",\n    value: signin.email,\n    onChange: handleChange,\n    required: true\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"input-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fa fa-key icon\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    className: \"input-field\",\n    id: \"password\",\n    type: \"password\",\n    placeholder: \"Password\",\n    name: \"password\",\n    value: signin.password,\n    onChange: handleChange,\n    required: true\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"submit\",\n    className: \"btn signIn-btn\",\n    value: \"LOGIN\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", {\n    className: \"signIn-card-title p-2\"\n  }, \"Don't have an account?\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* Link */ \"b\"], {\n    to: \"/register\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    type: \"button\",\n    className: \"btn reg-btn\"\n  }, \"REGISTER\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (SignIn);\n\n//# sourceURL=webpack:///./src/components/signIn.js?");

/***/ }),

/***/ "./src/components/statedropdown.js":
/*!*****************************************!*\
  !*** ./src/components/statedropdown.js ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return StateDropDown; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction StateDropDown(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"select\", {\n    id: \"state\",\n    value: props.value,\n    placeholder: \"State\",\n    onChange: props.onChange,\n    required: true\n  }, props.array.map(value => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    key: value,\n    value: value\n  }, value))));\n}\n\n//# sourceURL=webpack:///./src/components/statedropdown.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ \"./src/router/index.js\");\n/* harmony import */ var bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/scss/bootstrap.scss */ \"./node_modules/bootstrap/scss/bootstrap.scss\");\n/* harmony import */ var bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst app = document.getElementById('app');\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_router__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], null), app);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pages/App.js":
/*!**************************!*\
  !*** ./src/pages/App.js ***!
  \**************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_LogSymptoms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/LogSymptoms */ \"./src/components/LogSymptoms.js\");\n/* harmony import */ var _components_Information__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Information */ \"./src/components/Information.js\");\n/* harmony import */ var _pages_Register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/Register */ \"./src/pages/Register.js\");\n/* harmony import */ var _components_signIn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/signIn */ \"./src/components/signIn.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/header */ \"./src/components/header.js\");\n\n\n\n\n\n\nfunction App(props) {\n  let token = window.localStorage.getItem('token');\n  let userId = window.localStorage.getItem('id');\n  let userState = window.localStorage.getItem('userState');\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"Home\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_5__[/* default */ \"a\"], null), !token ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_signIn__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"], null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LogSymptoms__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], {\n    userId: userId,\n    token: token\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Information__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], {\n    userState: userState\n  })));\n}\n\n//# sourceURL=webpack:///./src/pages/App.js?");

/***/ }),

/***/ "./src/pages/Register.js":
/*!*******************************!*\
  !*** ./src/pages/Register.js ***!
  \*******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Register; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header */ \"./src/components/header.js\");\n/* harmony import */ var _components_registerinfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/registerinfo */ \"./src/components/registerinfo.js\");\n\n\n // import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';\n\nfunction Register(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_registerinfo__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], null));\n}\n\n//# sourceURL=webpack:///./src/pages/Register.js?");

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _pages_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/App */ \"./src/pages/App.js\");\n/* harmony import */ var _pages_Register__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/Register */ \"./src/pages/Register.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes */ \"./src/router/routes.js\");\n\n\n\n\n\n\nconst AppRouter = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* BrowserRouter */ \"a\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* Switch */ \"c\"], null, _routes__WEBPACK_IMPORTED_MODULE_5__[/* default */ \"a\"].map(_ref => {\n    let {\n      Component,\n      key,\n      path\n    } = _ref;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* Route */ \"a\"], {\n      key: key,\n      path: path,\n      exact: true,\n      component: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, {\n        page: key\n      })\n    });\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (AppRouter);\n\n//# sourceURL=webpack:///./src/router/index.js?");

/***/ }),

/***/ "./src/router/routes.js":
/*!******************************!*\
  !*** ./src/router/routes.js ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/App */ \"./src/pages/App.js\");\n/* harmony import */ var _pages_Register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/Register */ \"./src/pages/Register.js\");\n\n\n\nconst routes = [{\n  Component: _pages_App__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"],\n  key: 'App',\n  path: '/'\n}, {\n  Component: _pages_Register__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"],\n  key: 'Register',\n  path: '/register'\n}];\n/* harmony default export */ __webpack_exports__[\"a\"] = (routes);\n\n//# sourceURL=webpack:///./src/router/routes.js?");

/***/ })

/******/ });