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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Faucet; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/20/solid */ \"./node_modules/@heroicons/react/20/solid/esm/index.js\");\n\n\nfunction Faucet(param) {\n    let { userAddress  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full max-w-md space-y-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"mx-auto h-12 w-auto\",\n                                src: \"/uniMannheim.svg.png\",\n                                alt: \"Your Company\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Equus\\\\Documents\\\\UniProjekte\\\\mtp-blockchain\\\\frontend\\\\pages\\\\faucet\\\\index.tsx\",\n                                lineNumber: 12,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"mt-6 text-center text-3xl font-bold tracking-tight text-gray-900\",\n                                children: \"Get your gas now\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Equus\\\\Documents\\\\UniProjekte\\\\mtp-blockchain\\\\frontend\\\\pages\\\\faucet\\\\index.tsx\",\n                                lineNumber: 17,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Equus\\\\Documents\\\\UniProjekte\\\\mtp-blockchain\\\\frontend\\\\pages\\\\faucet\\\\index.tsx\",\n                        lineNumber: 11,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"mt-8 space-y-6\",\n                        action: \"#\",\n                        method: \"POST\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"hidden\",\n                                name: \"remember\",\n                                defaultValue: \"true\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Equus\\\\Documents\\\\UniProjekte\\\\mtp-blockchain\\\\frontend\\\\pages\\\\faucet\\\\index.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"-space-y-px rounded-md shadow-sm\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"email-address\",\n                                        className: \"sr-only\",\n                                        children: \"Wallet address\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Equus\\\\Documents\\\\UniProjekte\\\\mtp-blockchain\\\\frontend\\\\pages\\\\faucet\\\\index.tsx\",\n                                        lineNumber: 24,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        id: \"wallet-address\",\n                                        name: \"walletAddress\",\n                                        type: \"walletAddress\",\n                                        autoComplete: \"walletAddress\",\n                                        required: true,\n                                        className: \"relative block w-full appearance-none rounded-none rounded-t-md border border-gray-400 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-uni focus:outline-none focus:ring-uni sm:text-sm\",\n                                        placeholder: \"Wallet address\",\n                                        value: userAddress\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Equus\\\\Documents\\\\UniProjekte\\\\mtp-blockchain\\\\frontend\\\\pages\\\\faucet\\\\index.tsx\",\n                                        lineNumber: 27,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Equus\\\\Documents\\\\UniProjekte\\\\mtp-blockchain\\\\frontend\\\\pages\\\\faucet\\\\index.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"group relative flex w-full justify-center rounded-md border border-transparent bg-gray-400 py-2 px-4 text-sm font-medium text-uni hover:bg-uni hover:text-white focus:outline-none focus:ring-2 focus:ring-uni focus:ring-offset-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"absolute inset-y-0 left-0 flex items-center pl-3\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_1__.FireIcon, {\n                                                className: \"h-5 w-5 text-uni group-hover:text-gray-400\",\n                                                \"aria-hidden\": \"true\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Equus\\\\Documents\\\\UniProjekte\\\\mtp-blockchain\\\\frontend\\\\pages\\\\faucet\\\\index.tsx\",\n                                                lineNumber: 45,\n                                                columnNumber: 37\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Equus\\\\Documents\\\\UniProjekte\\\\mtp-blockchain\\\\frontend\\\\pages\\\\faucet\\\\index.tsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 33\n                                        }, this),\n                                        \"Get gas\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Equus\\\\Documents\\\\UniProjekte\\\\mtp-blockchain\\\\frontend\\\\pages\\\\faucet\\\\index.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Equus\\\\Documents\\\\UniProjekte\\\\mtp-blockchain\\\\frontend\\\\pages\\\\faucet\\\\index.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Equus\\\\Documents\\\\UniProjekte\\\\mtp-blockchain\\\\frontend\\\\pages\\\\faucet\\\\index.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Equus\\\\Documents\\\\UniProjekte\\\\mtp-blockchain\\\\frontend\\\\pages\\\\faucet\\\\index.tsx\",\n                lineNumber: 10,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Equus\\\\Documents\\\\UniProjekte\\\\mtp-blockchain\\\\frontend\\\\pages\\\\faucet\\\\index.tsx\",\n            lineNumber: 9,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_c = Faucet;\nvar _c;\n$RefreshReg$(_c, \"Faucet\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mYXVjZXQvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUVrRTtBQUduRCxTQUFTQyxPQUFPLEtBQWEsRUFBRTtRQUFmLEVBQUNDLFlBQVcsRUFBQyxHQUFiO0lBQzNCLHFCQUNJO2tCQUNJLDRFQUFDQztZQUFJQyxXQUFVO3NCQUNYLDRFQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNEOzswQ0FDRyw4REFBQ0U7Z0NBQ0dELFdBQVU7Z0NBQ1ZFLEtBQUk7Z0NBQ0pDLEtBQUk7Ozs7OzswQ0FFUiw4REFBQ0M7Z0NBQUdKLFdBQVU7MENBQW1FOzs7Ozs7Ozs7Ozs7a0NBSXJGLDhEQUFDSzt3QkFBS0wsV0FBVTt3QkFBaUJNLFFBQU87d0JBQUlDLFFBQU87OzBDQUMvQyw4REFBQ0M7Z0NBQU1DLE1BQUs7Z0NBQVNDLE1BQUs7Z0NBQVdDLGNBQWE7Ozs7OzswQ0FDbEQsOERBQUNaO2dDQUFJQyxXQUFVOztrREFDUCw4REFBQ1k7d0NBQU1DLFNBQVE7d0NBQWdCYixXQUFVO2tEQUFVOzs7Ozs7a0RBR25ELDhEQUFDUTt3Q0FDR00sSUFBRzt3Q0FDSEosTUFBSzt3Q0FDTEQsTUFBSzt3Q0FDTE0sY0FBYTt3Q0FDYkMsUUFBUTt3Q0FDUmhCLFdBQVU7d0NBQ1ZpQixhQUFZO3dDQUNaQyxPQUFPcEI7Ozs7Ozs7Ozs7OzswQ0FJbkIsOERBQUNDOzBDQUNHLDRFQUFDb0I7b0NBQ0dWLE1BQUs7b0NBQ0xULFdBQVU7O3NEQUVWLDhEQUFDb0I7NENBQUtwQixXQUFVO3NEQUNaLDRFQUFDSiwrREFBUUE7Z0RBQUNJLFdBQVU7Z0RBQ1ZxQixlQUFZOzs7Ozs7Ozs7Ozt3Q0FDbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVN2QyxDQUFDO0tBbER1QnhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2ZhdWNldC9pbmRleC50c3g/OWQ4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2YmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL05hdmJhclwiO1xyXG5cclxuaW1wb3J0IHtMb2NrQ2xvc2VkSWNvbiwgRmlyZUljb259IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3QvMjAvc29saWQnXHJcbmltcG9ydCBNZXRhTWFza0F1dGggZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWV0YU1hc2tBdXRoXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGYXVjZXQoe3VzZXJBZGRyZXNzfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWluLWgtZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHktMTIgcHgtNCBzbTpweC02IGxnOnB4LThcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LW1kIHNwYWNlLXktOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm14LWF1dG8gaC0xMiB3LWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL3VuaU1hbm5oZWltLnN2Zy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiWW91ciBDb21wYW55XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm10LTYgdGV4dC1jZW50ZXIgdGV4dC0zeGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdldCB5b3VyIGdhcyBub3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJtdC04IHNwYWNlLXktNlwiIGFjdGlvbj1cIiNcIiBtZXRob2Q9XCJQT1NUXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInJlbWVtYmVyXCIgZGVmYXVsdFZhbHVlPVwidHJ1ZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCItc3BhY2UteS1weCByb3VuZGVkLW1kIHNoYWRvdy1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWwtYWRkcmVzc1wiIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2FsbGV0IGFkZHJlc3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIndhbGxldC1hZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIndhbGxldEFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwid2FsbGV0QWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIndhbGxldEFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBibG9jayB3LWZ1bGwgYXBwZWFyYW5jZS1ub25lIHJvdW5kZWQtbm9uZSByb3VuZGVkLXQtbWQgYm9yZGVyIGJvcmRlci1ncmF5LTQwMCBweC0zIHB5LTIgdGV4dC1ncmF5LTkwMCBwbGFjZWhvbGRlci1ncmF5LTUwMCBmb2N1czp6LTEwIGZvY3VzOmJvcmRlci11bmkgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctdW5pIHNtOnRleHQtc21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldhbGxldCBhZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJBZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncm91cCByZWxhdGl2ZSBmbGV4IHctZnVsbCBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgYmctZ3JheS00MDAgcHktMiBweC00IHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC11bmkgaG92ZXI6YmctdW5pIGhvdmVyOnRleHQtd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXVuaSBmb2N1czpyaW5nLW9mZnNldC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC15LTAgbGVmdC0wIGZsZXggaXRlbXMtY2VudGVyIHBsLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpcmVJY29uIGNsYXNzTmFtZT1cImgtNSB3LTUgdGV4dC11bmkgZ3JvdXAtaG92ZXI6dGV4dC1ncmF5LTQwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdldCBnYXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIkZpcmVJY29uIiwiRmF1Y2V0IiwidXNlckFkZHJlc3MiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJoMiIsImZvcm0iLCJhY3Rpb24iLCJtZXRob2QiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwiZGVmYXVsdFZhbHVlIiwibGFiZWwiLCJodG1sRm9yIiwiaWQiLCJhdXRvQ29tcGxldGUiLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJidXR0b24iLCJzcGFuIiwiYXJpYS1oaWRkZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/faucet/index.tsx\n"));

/***/ })

});