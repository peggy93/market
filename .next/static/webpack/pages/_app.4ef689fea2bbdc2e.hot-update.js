"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/layout/navbar/nav-item.js":
/*!**********************************************!*\
  !*** ./components/layout/navbar/nav-item.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _dropdown_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropdown-menu */ \"./components/layout/navbar/dropdown-menu.js\");\n/* harmony import */ var _mega_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mega-menu */ \"./components/layout/navbar/mega-menu.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction NavItem(param) {\n    let { navItemText , menuItems , megaMenu =false  } = param;\n    _s();\n    const [isOpenDropDown, setIsOpenDropDown] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleClick = (e)=>{\n        setIsOpenDropDown(!isOpenDropDown);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"nav-item \".concat(menuItems),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"#\",\n                className: \"nav-link-item drop-trigger\",\n                onClick: handleClick,\n                children: [\n                    navItemText,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faAngleDown\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pg\\\\Documents\\\\GitHub\\\\market\\\\components\\\\layout\\\\navbar\\\\nav-item.js\",\n                        lineNumber: 17,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\pg\\\\Documents\\\\GitHub\\\\market\\\\components\\\\layout\\\\navbar\\\\nav-item.js\",\n                lineNumber: 15,\n                columnNumber: 4\n            }, this),\n            !megaMenu ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                isOpenDropDown: isOpenDropDown,\n                menuItems: menuItems\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pg\\\\Documents\\\\GitHub\\\\market\\\\components\\\\layout\\\\navbar\\\\nav-item.js\",\n                lineNumber: 21,\n                columnNumber: 5\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mega_menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                menuItems: menuItems\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pg\\\\Documents\\\\GitHub\\\\market\\\\components\\\\layout\\\\navbar\\\\nav-item.js\",\n                lineNumber: 23,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\pg\\\\Documents\\\\GitHub\\\\market\\\\components\\\\layout\\\\navbar\\\\nav-item.js\",\n        lineNumber: 14,\n        columnNumber: 3\n    }, this);\n}\n_s(NavItem, \"R9KxfbNF0MZnYZfKF4JpJfSm9h0=\");\n_c = NavItem;\nvar _c;\n$RefreshReg$(_c, \"NavItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9uYXZiYXIvbmF2LWl0ZW0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQWdFO0FBQ0M7QUFDaEM7QUFDVTtBQUNSO0FBRXBCLFNBQVNLLFFBQVEsS0FBNEMsRUFBRTtRQUE5QyxFQUFFQyxZQUFXLEVBQUVDLFVBQVMsRUFBRUMsVUFBVyxLQUFLLEdBQUUsR0FBNUM7O0lBQy9CLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR1IsK0NBQVFBLENBQUMsS0FBSztJQUMxRCxNQUFNUyxjQUFjLENBQUNDLElBQU07UUFDMUJGLGtCQUFrQixDQUFDRDtJQUNwQjtJQUVBLHFCQUNDLDhEQUFDSTtRQUFHQyxXQUFXLFlBQXVCLE9BQVhQOzswQkFDMUIsOERBQUNRO2dCQUFFQyxNQUFLO2dCQUFJRixXQUFVO2dCQUE2QkcsU0FBU047O29CQUMxREw7a0NBQ0QsOERBQUNMLDJFQUFlQTt3QkFBQ2lCLE1BQU1sQiwwRUFBV0E7Ozs7Ozs7Ozs7OztZQUdsQyxDQUFDUSx5QkFDRCw4REFBQ0wsc0RBQVlBO2dCQUFDTSxnQkFBZ0JBO2dCQUFnQkYsV0FBV0E7Ozs7O3FDQUV6RCw4REFBQ0gsa0RBQVFBO2dCQUFDRyxXQUFXQTs7Ozs7b0JBQ3JCOzs7Ozs7O0FBR0osQ0FBQztHQXBCdUJGO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0L25hdmJhci9uYXYtaXRlbS5qcz9jMDNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZhQW5nbGVEb3duIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBEcm9wZG93bk1lbnUgZnJvbSBcIi4vZHJvcGRvd24tbWVudVwiO1xyXG5pbXBvcnQgTWVnYU1lbnUgZnJvbSBcIi4vbWVnYS1tZW51XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZJdGVtKHsgbmF2SXRlbVRleHQsIG1lbnVJdGVtcywgbWVnYU1lbnUgPSBmYWxzZSB9KSB7XHJcblx0Y29uc3QgW2lzT3BlbkRyb3BEb3duLCBzZXRJc09wZW5Ecm9wRG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xyXG5cdFx0c2V0SXNPcGVuRHJvcERvd24oIWlzT3BlbkRyb3BEb3duKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGxpIGNsYXNzTmFtZT17YG5hdi1pdGVtICR7bWVudUl0ZW1zIH1gfT5cclxuXHRcdFx0PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJuYXYtbGluay1pdGVtIGRyb3AtdHJpZ2dlclwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cclxuXHRcdFx0XHR7bmF2SXRlbVRleHR9XHJcblx0XHRcdFx0PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUFuZ2xlRG93bn0gLz5cclxuXHRcdFx0PC9hPlxyXG5cclxuXHRcdFx0eyFtZWdhTWVudSA/IChcclxuXHRcdFx0XHQ8RHJvcGRvd25NZW51IGlzT3BlbkRyb3BEb3duPXtpc09wZW5Ecm9wRG93bn0gbWVudUl0ZW1zPXttZW51SXRlbXN9IC8+XHJcblx0XHRcdCkgOiAoXHJcblx0XHRcdFx0PE1lZ2FNZW51IG1lbnVJdGVtcz17bWVudUl0ZW1zfSAvPlxyXG5cdFx0XHQpfVxyXG5cdFx0PC9saT5cclxuXHQpO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJmYUFuZ2xlRG93biIsIkZvbnRBd2Vzb21lSWNvbiIsInVzZVN0YXRlIiwiRHJvcGRvd25NZW51IiwiTWVnYU1lbnUiLCJOYXZJdGVtIiwibmF2SXRlbVRleHQiLCJtZW51SXRlbXMiLCJtZWdhTWVudSIsImlzT3BlbkRyb3BEb3duIiwic2V0SXNPcGVuRHJvcERvd24iLCJoYW5kbGVDbGljayIsImUiLCJsaSIsImNsYXNzTmFtZSIsImEiLCJocmVmIiwib25DbGljayIsImljb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/navbar/nav-item.js\n"));

/***/ })

});