/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/home-two/feature-section.js":
/*!************************************************!*\
  !*** ./components/home-two/feature-section.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ IndexTwo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_common_sliders_testimonial_testimonial_slider_two__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/common/sliders/testimonial/testimonial-slider-two */ \"./components/common/sliders/testimonial/testimonial-slider-two.js\");\n/* harmony import */ var _components_common_sliders_text_text_slider_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/common/sliders/text/text-slider-one */ \"./components/common/sliders/text/text-slider-one.js\");\n/* harmony import */ var _components_common_video_video_section_three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/common/video/video-section-three */ \"./components/common/video/video-section-three.js\");\n/* harmony import */ var _components_home_two_feature_section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/home-two/feature-section */ \"./components/home-two/feature-section.js\");\n/* harmony import */ var _components_home_two_feature_section__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_home_two_feature_section__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_home_two_feature_section_two__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/home-two/feature-section-two */ \"./components/home-two/feature-section-two.js\");\n/* harmony import */ var _components_home_two_hero_thumb_section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/home-two/hero-thumb-section */ \"./components/home-two/hero-thumb-section.js\");\n/* harmony import */ var _components_home_two_home_two_hero_section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/home-two/home-two-hero-section */ \"./components/home-two/home-two-hero-section.js\");\n/* harmony import */ var _components_home_two_trading_section__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/home-two/trading-section */ \"./components/home-two/trading-section.js\");\n/* harmony import */ var _components_home_two_trading_section_two__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/home-two/trading-section-two */ \"./components/home-two/trading-section-two.js\");\n\n\n\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction IndexTwo() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"AiMM\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\pg\\\\Documents\\\\GitHub\\\\market\\\\pages\\\\index.js\",\n                    lineNumber: 16,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pg\\\\Documents\\\\GitHub\\\\market\\\\pages\\\\index.js\",\n                lineNumber: 15,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_two_home_two_hero_section__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pg\\\\Documents\\\\GitHub\\\\market\\\\pages\\\\index.js\",\n                lineNumber: 18,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_two_hero_thumb_section__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pg\\\\Documents\\\\GitHub\\\\market\\\\pages\\\\index.js\",\n                lineNumber: 19,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_home_two_feature_section__WEBPACK_IMPORTED_MODULE_5___default()), {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pg\\\\Documents\\\\GitHub\\\\market\\\\pages\\\\index.js\",\n                lineNumber: 20,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_sliders_text_text_slider_one__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pg\\\\Documents\\\\GitHub\\\\market\\\\pages\\\\index.js\",\n                lineNumber: 21,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_video_video_section_three__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pg\\\\Documents\\\\GitHub\\\\market\\\\pages\\\\index.js\",\n                lineNumber: 22,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_two_trading_section__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pg\\\\Documents\\\\GitHub\\\\market\\\\pages\\\\index.js\",\n                lineNumber: 23,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_two_feature_section_two__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pg\\\\Documents\\\\GitHub\\\\market\\\\pages\\\\index.js\",\n                lineNumber: 24,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_two_trading_section_two__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pg\\\\Documents\\\\GitHub\\\\market\\\\pages\\\\index.js\",\n                lineNumber: 25,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_sliders_testimonial_testimonial_slider_two__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pg\\\\Documents\\\\GitHub\\\\market\\\\pages\\\\index.js\",\n                lineNumber: 26,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = IndexTwo;\nvar _c;\n$RefreshReg$(_c, \"IndexTwo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNkI7QUFDc0U7QUFDckI7QUFDQztBQUNYO0FBQ087QUFDRjtBQUNLO0FBQ1Y7QUFDTzs7QUFFNUQsU0FBU1UsV0FBVztJQUNsQyxxQkFDQzs7MEJBQ0MsOERBQUNWLGtEQUFJQTswQkFDSiw0RUFBQ1c7OEJBQU07Ozs7Ozs7Ozs7OzBCQUVSLDhEQUFDSixrRkFBa0JBOzs7OzswQkFDbkIsOERBQUNELCtFQUFnQkE7Ozs7OzBCQUNqQiw4REFBQ0YsNkVBQWNBOzs7OzswQkFDZiw4REFBQ0YsdUZBQWFBOzs7OzswQkFDZCw4REFBQ0Msb0ZBQWlCQTs7Ozs7MEJBQ2xCLDhEQUFDSyw0RUFBY0E7Ozs7OzBCQUNmLDhEQUFDSCxnRkFBaUJBOzs7OzswQkFDbEIsOERBQUNJLGlGQUFpQkE7Ozs7OzBCQUNsQiw4REFBQ1IscUdBQW9CQTs7Ozs7OztBQUd4QixDQUFDO0tBakJ1QlMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBUZXN0aW1vbmlhbFNsaWRlclR3byBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tb24vc2xpZGVycy90ZXN0aW1vbmlhbC90ZXN0aW1vbmlhbC1zbGlkZXItdHdvXCI7XHJcbmltcG9ydCBUZXh0U2xpZGVyT25lIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9zbGlkZXJzL3RleHQvdGV4dC1zbGlkZXItb25lXCI7XHJcbmltcG9ydCBWaWRlb1NlY3Rpb25UaHJlZSBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tb24vdmlkZW8vdmlkZW8tc2VjdGlvbi10aHJlZVwiO1xyXG5pbXBvcnQgRmVhdHVyZVNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9tZS10d28vZmVhdHVyZS1zZWN0aW9uXCI7XHJcbmltcG9ydCBGZWF0dXJlU2VjdGlvblR3byBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lLXR3by9mZWF0dXJlLXNlY3Rpb24tdHdvXCI7XHJcbmltcG9ydCBIZXJvVGh1bWJTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWUtdHdvL2hlcm8tdGh1bWItc2VjdGlvblwiO1xyXG5pbXBvcnQgSG9tZVR3b0hlcm9TZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWUtdHdvL2hvbWUtdHdvLWhlcm8tc2VjdGlvblwiO1xyXG5pbXBvcnQgVHJhZGluZ1NlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9tZS10d28vdHJhZGluZy1zZWN0aW9uXCI7XHJcbmltcG9ydCBUcmFkaW5nU2VjdGlvblR3byBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lLXR3by90cmFkaW5nLXNlY3Rpb24tdHdvXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleFR3bygpIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PEhlYWQ+XHJcblx0XHRcdFx0PHRpdGxlPkFpTU08L3RpdGxlPlxyXG5cdFx0XHQ8L0hlYWQ+XHJcblx0XHRcdDxIb21lVHdvSGVyb1NlY3Rpb24gLz5cclxuXHRcdFx0PEhlcm9UaHVtYlNlY3Rpb24gLz5cclxuXHRcdFx0PEZlYXR1cmVTZWN0aW9uIC8+XHJcblx0XHRcdDxUZXh0U2xpZGVyT25lIC8+XHJcblx0XHRcdDxWaWRlb1NlY3Rpb25UaHJlZSAvPlxyXG5cdFx0XHQ8VHJhZGluZ1NlY3Rpb24gLz5cclxuXHRcdFx0PEZlYXR1cmVTZWN0aW9uVHdvIC8+XHJcblx0XHRcdDxUcmFkaW5nU2VjdGlvblR3byAvPlxyXG5cdFx0XHQ8VGVzdGltb25pYWxTbGlkZXJUd28gLz5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG5cdHJldHVybiB7IHByb3BzOiB7IGhlYWRlcjogXCJ0d29cIiwgZm9vdGVyOiBcInR3b1wiIH0gfTtcclxufVxyXG4iXSwibmFtZXMiOlsiSGVhZCIsIlRlc3RpbW9uaWFsU2xpZGVyVHdvIiwiVGV4dFNsaWRlck9uZSIsIlZpZGVvU2VjdGlvblRocmVlIiwiRmVhdHVyZVNlY3Rpb24iLCJGZWF0dXJlU2VjdGlvblR3byIsIkhlcm9UaHVtYlNlY3Rpb24iLCJIb21lVHdvSGVyb1NlY3Rpb24iLCJUcmFkaW5nU2VjdGlvbiIsIlRyYWRpbmdTZWN0aW9uVHdvIiwiSW5kZXhUd28iLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});