"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/faucet",{

/***/ "./pages/faucet/index.tsx":
/*!********************************!*\
  !*** ./pages/faucet/index.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Faucet; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/20/solid */ \"./node_modules/@heroicons/react/20/solid/esm/index.js\");\n\n\nfunction Faucet(param) {\n    let { userAddress  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full max-w-md space-y-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"mx-auto h-12 w-auto\",\n                                src: \"/uniMannheim.svg.png\",\n                                alt: \"Your Company\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Equus\\\\Documents\\\\UniProjekte\\\\mtp-blockchain\\\\frontend\\\\pages\\\\faucet\\\\index.tsx\",\n                                lineNumber: 12,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"mt-6 text-center text-3xl font-bold tracking-tight text-gray-900\",\n                                children: \"Get your gas now\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Equus\\\\Documents\\\\UniProjekte\\\\mtp-blockchain\\\\frontend\\\\pages\\\\faucet\\\\index.tsx\",\n                                lineNumber: 17,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Equus\\\\Documents\\\\UniProjekte\\\\mtp-blockchain\\\\frontend\\\\pages\\\\faucet\\\\index.tsx\",\n                        lineNumber: 11,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"mt-8 space-y-6\",\n                        action: \"#\",\n                        method: \"POST\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"hidden\",\n                                name: \"remember\",\n                                defaultValue: \"true\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Equus\\\\Documents\\\\UniProjekte\\\\mtp-blockchain\\\\frontend\\\\pages\\\\faucet\\\\index.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"-space-y-px rounded-md shadow-sm\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"email-address\",\n                                            className: \"sr-only\",\n                                            children: \"Wallet address\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Equus\\\\Documents\\\\UniProjekte\\\\mtp-blockchain\\\\frontend\\\\pages\\\\faucet\\\\index.tsx\",\n                                            lineNumber: 25,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            id: \"wallet-address\",\n                                            name: \"walletAddress\",\n                                            type: \"walletAddress\",\n                                            autoComplete: \"walletAddress\",\n                                            required: true,\n                                            className: \"relative block w-full appearance-none rounded-none rounded-t-md border border-gray-400 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-uni focus:outline-none focus:ring-uni sm:text-sm\",\n                                            placeholder: \"Wallet address\",\n                                            value: userAddress\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Equus\\\\Documents\\\\UniProjekte\\\\mtp-blockchain\\\\frontend\\\\pages\\\\faucet\\\\index.tsx\",\n                                            lineNumber: 28,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Equus\\\\Documents\\\\UniProjekte\\\\mtp-blockchain\\\\frontend\\\\pages\\\\faucet\\\\index.tsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Equus\\\\Documents\\\\UniProjekte\\\\mtp-blockchain\\\\frontend\\\\pages\\\\faucet\\\\index.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"group relative flex w-full justify-center rounded-md border border-transparent bg-gray-400 py-2 px-4 text-sm font-medium text-uni hover:bg-uni hover:text-white focus:outline-none focus:ring-2 focus:ring-uni focus:ring-offset-2\",\n                                    onClick: (event)=>{},\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"absolute inset-y-0 left-0 flex items-center pl-3\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_1__.FireIcon, {\n                                                className: \"h-5 w-5 text-uni group-hover:text-gray-400\",\n                                                \"aria-hidden\": \"true\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Equus\\\\Documents\\\\UniProjekte\\\\mtp-blockchain\\\\frontend\\\\pages\\\\faucet\\\\index.tsx\",\n                                                lineNumber: 50,\n                                                columnNumber: 37\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Equus\\\\Documents\\\\UniProjekte\\\\mtp-blockchain\\\\frontend\\\\pages\\\\faucet\\\\index.tsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 33\n                                        }, this),\n                                        \"Get gas\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Equus\\\\Documents\\\\UniProjekte\\\\mtp-blockchain\\\\frontend\\\\pages\\\\faucet\\\\index.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Equus\\\\Documents\\\\UniProjekte\\\\mtp-blockchain\\\\frontend\\\\pages\\\\faucet\\\\index.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Equus\\\\Documents\\\\UniProjekte\\\\mtp-blockchain\\\\frontend\\\\pages\\\\faucet\\\\index.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Equus\\\\Documents\\\\UniProjekte\\\\mtp-blockchain\\\\frontend\\\\pages\\\\faucet\\\\index.tsx\",\n                lineNumber: 10,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Equus\\\\Documents\\\\UniProjekte\\\\mtp-blockchain\\\\frontend\\\\pages\\\\faucet\\\\index.tsx\",\n            lineNumber: 9,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_c = Faucet;\nvar _c;\n$RefreshReg$(_c, \"Faucet\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mYXVjZXQvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUVrRTtBQUduRCxTQUFTQyxPQUFPLEtBQWEsRUFBRTtRQUFmLEVBQUNDLFlBQVcsRUFBQyxHQUFiO0lBQzNCLHFCQUNJO2tCQUNJLDRFQUFDQztZQUFJQyxXQUFVO3NCQUNYLDRFQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNEOzswQ0FDRyw4REFBQ0U7Z0NBQ0dELFdBQVU7Z0NBQ1ZFLEtBQUk7Z0NBQ0pDLEtBQUk7Ozs7OzswQ0FFUiw4REFBQ0M7Z0NBQUdKLFdBQVU7MENBQW1FOzs7Ozs7Ozs7Ozs7a0NBSXJGLDhEQUFDSzt3QkFBS0wsV0FBVTt3QkFBaUJNLFFBQU87d0JBQUlDLFFBQU87OzBDQUMvQyw4REFBQ0M7Z0NBQU1DLE1BQUs7Z0NBQVNDLE1BQUs7Z0NBQVdDLGNBQWE7Ozs7OzswQ0FDbEQsOERBQUNaO2dDQUFJQyxXQUFVOzBDQUNYLDRFQUFDRDs7c0RBQ0csOERBQUNhOzRDQUFNQyxTQUFROzRDQUFnQmIsV0FBVTtzREFBVTs7Ozs7O3NEQUduRCw4REFBQ1E7NENBQ0dNLElBQUc7NENBQ0hKLE1BQUs7NENBQ0xELE1BQUs7NENBQ0xNLGNBQWE7NENBQ2JDLFFBQVE7NENBQ1JoQixXQUFVOzRDQUNWaUIsYUFBWTs0Q0FDWkMsT0FBT3BCOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FLbkIsOERBQUNDOzBDQUNHLDRFQUFDb0I7b0NBQ0dWLE1BQUs7b0NBQ0xULFdBQVU7b0NBQ1ZvQixTQUFTQyxDQUFBQSxRQUFTLENBRWxCOztzREFFQSw4REFBQ0M7NENBQUt0QixXQUFVO3NEQUNaLDRFQUFDSiwrREFBUUE7Z0RBQUNJLFdBQVU7Z0RBQ1Z1QixlQUFZOzs7Ozs7Ozs7Ozt3Q0FDbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVN2QyxDQUFDO0tBdkR1QjFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2ZhdWNldC9pbmRleC50c3g/OWQ4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2YmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL05hdmJhclwiO1xyXG5cclxuaW1wb3J0IHtMb2NrQ2xvc2VkSWNvbiwgRmlyZUljb259IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3QvMjAvc29saWQnXHJcbmltcG9ydCBNZXRhTWFza0F1dGggZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWV0YU1hc2tBdXRoXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGYXVjZXQoe3VzZXJBZGRyZXNzfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWluLWgtZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHktMTIgcHgtNCBzbTpweC02IGxnOnB4LThcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LW1kIHNwYWNlLXktOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm14LWF1dG8gaC0xMiB3LWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL3VuaU1hbm5oZWltLnN2Zy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiWW91ciBDb21wYW55XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm10LTYgdGV4dC1jZW50ZXIgdGV4dC0zeGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdldCB5b3VyIGdhcyBub3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJtdC04IHNwYWNlLXktNlwiIGFjdGlvbj1cIiNcIiBtZXRob2Q9XCJQT1NUXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInJlbWVtYmVyXCIgZGVmYXVsdFZhbHVlPVwidHJ1ZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCItc3BhY2UteS1weCByb3VuZGVkLW1kIHNoYWRvdy1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsLWFkZHJlc3NcIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdhbGxldCBhZGRyZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ3YWxsZXQtYWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ3YWxsZXRBZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIndhbGxldEFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJ3YWxsZXRBZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgYmxvY2sgdy1mdWxsIGFwcGVhcmFuY2Utbm9uZSByb3VuZGVkLW5vbmUgcm91bmRlZC10LW1kIGJvcmRlciBib3JkZXItZ3JheS00MDAgcHgtMyBweS0yIHRleHQtZ3JheS05MDAgcGxhY2Vob2xkZXItZ3JheS01MDAgZm9jdXM6ei0xMCBmb2N1czpib3JkZXItdW5pIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLXVuaSBzbTp0ZXh0LXNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXYWxsZXQgYWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyQWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncm91cCByZWxhdGl2ZSBmbGV4IHctZnVsbCBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgYmctZ3JheS00MDAgcHktMiBweC00IHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC11bmkgaG92ZXI6YmctdW5pIGhvdmVyOnRleHQtd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXVuaSBmb2N1czpyaW5nLW9mZnNldC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQteS0wIGxlZnQtMCBmbGV4IGl0ZW1zLWNlbnRlciBwbC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaXJlSWNvbiBjbGFzc05hbWU9XCJoLTUgdy01IHRleHQtdW5pIGdyb3VwLWhvdmVyOnRleHQtZ3JheS00MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHZXQgZ2FzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJGaXJlSWNvbiIsIkZhdWNldCIsInVzZXJBZGRyZXNzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0IiwiaDIiLCJmb3JtIiwiYWN0aW9uIiwibWV0aG9kIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsImRlZmF1bHRWYWx1ZSIsImxhYmVsIiwiaHRtbEZvciIsImlkIiwiYXV0b0NvbXBsZXRlIiwicmVxdWlyZWQiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwiYnV0dG9uIiwib25DbGljayIsImV2ZW50Iiwic3BhbiIsImFyaWEtaGlkZGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/faucet/index.tsx\n"));

/***/ })

});