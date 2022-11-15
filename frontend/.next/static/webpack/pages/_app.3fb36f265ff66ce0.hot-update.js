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

/***/ "./components/MetaMaskAuth.tsx":
/*!*************************************!*\
  !*** ./components/MetaMaskAuth.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MetaMaskAuth; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction isMobileDevice() {\n    return \"ontouchstart\" in window || \"onmsgesturechange\" in window;\n}\nasync function connect(onConnected) {\n    if (!window.ethereum) {\n        alert(\"Get MetaMask!\");\n        return;\n    }\n    const accounts = await window.ethereum.request({\n        method: \"eth_requestAccounts\"\n    });\n    onConnected(accounts[0]);\n}\nasync function checkIfWalletIsConnected(onConnected) {\n    if (window.ethereum) {\n        const accounts = await window.ethereum.request({\n            method: \"eth_accounts\"\n        });\n        if (accounts.length > 0) {\n            const account = accounts[0];\n            onConnected(account);\n            return;\n        }\n        if (isMobileDevice()) {\n            await connect(onConnected);\n        }\n    }\n}\nfunction MetaMaskAuth(param) {\n    let { onAddressChanged  } = param;\n    _s();\n    const [userAddress, setUserAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const changeUserAddress = (userAddress)=>{\n        onAddressChanged(userAddress);\n        setUserAddress(userAddress);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!userAddress) {\n            checkIfWalletIsConnected(changeUserAddress);\n        }\n    }, []);\n    return userAddress ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex text-sm font-medium text-uni\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pr-2\",\n                children: \"Connected with:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Equus\\\\Documents\\\\UniProjekte\\\\mtp-blockchain\\\\frontend\\\\components\\\\MetaMaskAuth.tsx\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Address, {\n                userAddress: userAddress\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Equus\\\\Documents\\\\UniProjekte\\\\mtp-blockchain\\\\frontend\\\\components\\\\MetaMaskAuth.tsx\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Equus\\\\Documents\\\\UniProjekte\\\\mtp-blockchain\\\\frontend\\\\components\\\\MetaMaskAuth.tsx\",\n        lineNumber: 53,\n        columnNumber: 9\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Connect, {\n        setUserAddress: changeUserAddress\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Equus\\\\Documents\\\\UniProjekte\\\\mtp-blockchain\\\\frontend\\\\components\\\\MetaMaskAuth.tsx\",\n        lineNumber: 60,\n        columnNumber: 9\n    }, this);\n}\n_s(MetaMaskAuth, \"0jWvZYOFdGjMk1C5cOeoDZF5Tlc=\");\n_c = MetaMaskAuth;\nfunction Connect(param) {\n    let { setUserAddress  } = param;\n    if (true) {\n        if (isMobileDevice()) {\n            const dappUrl = \"metamask-auth.ilamanov.repl.co\"; // TODO enter your dapp URL. For example: https://uniswap.exchange. (don't enter the \"https://\")\n            const metamaskAppDeepLink = \"https://metamask.app.link/dapp/\" + dappUrl;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: metamaskAppDeepLink,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"group relative flex w-full justify-center rounded-md border border-transparent bg-gray-300 py-2 px-4 text-sm font-medium text-uni hover:bg-uni hover:text-white focus:outline-none focus:ring-2 focus:ring-uni focus:ring-offset-2\",\n                    children: \"Connect to MetaMask\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Equus\\\\Documents\\\\UniProjekte\\\\mtp-blockchain\\\\frontend\\\\components\\\\MetaMaskAuth.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Equus\\\\Documents\\\\UniProjekte\\\\mtp-blockchain\\\\frontend\\\\components\\\\MetaMaskAuth.tsx\",\n                lineNumber: 70,\n                columnNumber: 17\n            }, this);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"group relative items-center flex w-full justify-center rounded-md border border-transparent bg-gray-400 py-1 px-2 text-sm font-medium text-uni hover:bg-uni hover:text-white focus:outline-none focus:ring-2 focus:ring-uni focus:ring-offset-2\",\n        onClick: ()=>connect(setUserAddress),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                width: \"32\",\n                height: \"32\",\n                className: \"rounded-full\",\n                src: \"/MetaMask_Fox.svg.png\",\n                alt: \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Equus\\\\Documents\\\\UniProjekte\\\\mtp-blockchain\\\\frontend\\\\components\\\\MetaMaskAuth.tsx\",\n                lineNumber: 84,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-center align-middle\",\n                children: \"Connect to Metamask\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Equus\\\\Documents\\\\UniProjekte\\\\mtp-blockchain\\\\frontend\\\\components\\\\MetaMaskAuth.tsx\",\n                lineNumber: 91,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Equus\\\\Documents\\\\UniProjekte\\\\mtp-blockchain\\\\frontend\\\\components\\\\MetaMaskAuth.tsx\",\n        lineNumber: 81,\n        columnNumber: 9\n    }, this);\n}\n_c1 = Connect;\nfunction Address(param) {\n    let { userAddress  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"\",\n        children: [\n            userAddress.substring(0, 5),\n            \"…\",\n            userAddress.substring(userAddress.length - 4)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Equus\\\\Documents\\\\UniProjekte\\\\mtp-blockchain\\\\frontend\\\\components\\\\MetaMaskAuth.tsx\",\n        lineNumber: 99,\n        columnNumber: 9\n    }, this);\n}\n_c2 = Address;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"MetaMaskAuth\");\n$RefreshReg$(_c1, \"Connect\");\n$RefreshReg$(_c2, \"Address\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01ldGFNYXNrQXV0aC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUFpRDtBQUNsQjtBQUUvQixTQUFTSSxpQkFBaUI7SUFDdEIsT0FBTyxrQkFBa0JDLFVBQVUsdUJBQXVCQTtBQUM5RDtBQUVBLGVBQWVDLFFBQVFDLFdBQVcsRUFBRTtJQUNoQyxJQUFJLENBQUNGLE9BQU9HLFFBQVEsRUFBRTtRQUNsQkMsTUFBTTtRQUNOO0lBQ0osQ0FBQztJQUVELE1BQU1DLFdBQVcsTUFBTUwsT0FBT0csUUFBUSxDQUFDRyxPQUFPLENBQUM7UUFDM0NDLFFBQVE7SUFDWjtJQUVBTCxZQUFZRyxRQUFRLENBQUMsRUFBRTtBQUMzQjtBQUVBLGVBQWVHLHlCQUF5Qk4sV0FBVyxFQUFFO0lBQ2pELElBQUlGLE9BQU9HLFFBQVEsRUFBRTtRQUNqQixNQUFNRSxXQUFXLE1BQU1MLE9BQU9HLFFBQVEsQ0FBQ0csT0FBTyxDQUFDO1lBQzNDQyxRQUFRO1FBQ1o7UUFFQSxJQUFJRixTQUFTSSxNQUFNLEdBQUcsR0FBRztZQUNyQixNQUFNQyxVQUFVTCxRQUFRLENBQUMsRUFBRTtZQUMzQkgsWUFBWVE7WUFDWjtRQUNKLENBQUM7UUFFRCxJQUFJWCxrQkFBa0I7WUFDbEIsTUFBTUUsUUFBUUM7UUFDbEIsQ0FBQztJQUNMLENBQUM7QUFDTDtBQUVlLFNBQVNTLGFBQWEsS0FBa0IsRUFBRTtRQUFwQixFQUFDQyxpQkFBZ0IsRUFBQyxHQUFsQjs7SUFDakMsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNa0Isb0JBQW9CLENBQUNGLGNBQXdCO1FBQy9DRCxpQkFBaUJDO1FBQ2pCQyxlQUFlRDtJQUNuQjtJQUVBakIsZ0RBQVNBLENBQUMsSUFBTTtRQUNaLElBQUksQ0FBQ2lCLGFBQWE7WUFDZEwseUJBQXlCTztRQUM3QixDQUFDO0lBQ0wsR0FBRyxFQUFFO0lBRUwsT0FBT0YsNEJBQ0gsOERBQUNHO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFBTzs7Ozs7OzBCQUd0Qiw4REFBQ0M7Z0JBQVFMLGFBQWFBOzs7Ozs7Ozs7Ozs2QkFHMUIsOERBQUNNO1FBQVFMLGdCQUFnQkM7Ozs7O1lBQzVCO0FBQ0wsQ0FBQztHQXZCdUJKO0tBQUFBO0FBeUJ4QixTQUFTUSxRQUFRLEtBQWdCLEVBQUU7UUFBbEIsRUFBQ0wsZUFBYyxFQUFDLEdBQWhCO0lBQ2IsSUFBSSxJQUE2QixFQUFFO1FBQy9CLElBQUlmLGtCQUFrQjtZQUNsQixNQUFNcUIsVUFBVSxrQ0FBa0MsZ0dBQWdHO1lBQ2xKLE1BQU1DLHNCQUFzQixvQ0FBb0NEO1lBQ2hFLHFCQUNJLDhEQUFDRTtnQkFBRUMsTUFBTUY7MEJBQ0wsNEVBQUNHO29CQUNHUCxXQUFVOzhCQUFxTzs7Ozs7Ozs7Ozs7UUFLL1AsQ0FBQztJQUNMLENBQUM7SUFFRCxxQkFDSSw4REFBQ087UUFDR1AsV0FBVTtRQUNWUSxTQUFTLElBQU14QixRQUFRYTs7MEJBQ3ZCLDhEQUFDaEIsbURBQUtBO2dCQUNGNEIsT0FBTTtnQkFDTkMsUUFBTztnQkFDUFYsV0FBVTtnQkFDVlcsS0FBSTtnQkFDSkMsS0FBSTs7Ozs7OzBCQUVSLDhEQUFDQztnQkFBS2IsV0FBVTswQkFBMkI7Ozs7Ozs7Ozs7OztBQUd2RDtNQTlCU0U7QUFpQ1QsU0FBU0QsUUFBUSxLQUFhLEVBQUU7UUFBZixFQUFDTCxZQUFXLEVBQUMsR0FBYjtJQUNiLHFCQUNJLDhEQUFDaUI7UUFBS2IsV0FBVTs7WUFBSUosWUFBWWtCLFNBQVMsQ0FBQyxHQUFHO1lBQUc7WUFBRWxCLFlBQVlrQixTQUFTLENBQUNsQixZQUFZSixNQUFNLEdBQUc7Ozs7Ozs7QUFFckc7TUFKU1MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXRhTWFza0F1dGgudHN4PzQyYjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuZnVuY3Rpb24gaXNNb2JpbGVEZXZpY2UoKSB7XHJcbiAgICByZXR1cm4gJ29udG91Y2hzdGFydCcgaW4gd2luZG93IHx8ICdvbm1zZ2VzdHVyZWNoYW5nZScgaW4gd2luZG93O1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjb25uZWN0KG9uQ29ubmVjdGVkKSB7XHJcbiAgICBpZiAoIXdpbmRvdy5ldGhlcmV1bSkge1xyXG4gICAgICAgIGFsZXJ0KFwiR2V0IE1ldGFNYXNrIVwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XHJcbiAgICAgICAgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIixcclxuICAgIH0pO1xyXG5cclxuICAgIG9uQ29ubmVjdGVkKGFjY291bnRzWzBdKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gY2hlY2tJZldhbGxldElzQ29ubmVjdGVkKG9uQ29ubmVjdGVkKSB7XHJcbiAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJldGhfYWNjb3VudHNcIixcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgYWNjb3VudCA9IGFjY291bnRzWzBdO1xyXG4gICAgICAgICAgICBvbkNvbm5lY3RlZChhY2NvdW50KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzTW9iaWxlRGV2aWNlKCkpIHtcclxuICAgICAgICAgICAgYXdhaXQgY29ubmVjdChvbkNvbm5lY3RlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZXRhTWFza0F1dGgoe29uQWRkcmVzc0NoYW5nZWR9KSB7XHJcbiAgICBjb25zdCBbdXNlckFkZHJlc3MsIHNldFVzZXJBZGRyZXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgY2hhbmdlVXNlckFkZHJlc3MgPSAodXNlckFkZHJlc3M6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIG9uQWRkcmVzc0NoYW5nZWQodXNlckFkZHJlc3MpO1xyXG4gICAgICAgIHNldFVzZXJBZGRyZXNzKHVzZXJBZGRyZXNzKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghdXNlckFkZHJlc3MpIHtcclxuICAgICAgICAgICAgY2hlY2tJZldhbGxldElzQ29ubmVjdGVkKGNoYW5nZVVzZXJBZGRyZXNzKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIHVzZXJBZGRyZXNzID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtdW5pXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHItMlwiPlxyXG4gICAgICAgICAgICAgICAgQ29ubmVjdGVkIHdpdGg6XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8QWRkcmVzcyB1c2VyQWRkcmVzcz17dXNlckFkZHJlc3N9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICkgOiAoXHJcbiAgICAgICAgPENvbm5lY3Qgc2V0VXNlckFkZHJlc3M9e2NoYW5nZVVzZXJBZGRyZXNzfS8+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBDb25uZWN0KHtzZXRVc2VyQWRkcmVzc30pIHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgaWYgKGlzTW9iaWxlRGV2aWNlKCkpIHtcclxuICAgICAgICAgICAgY29uc3QgZGFwcFVybCA9IFwibWV0YW1hc2stYXV0aC5pbGFtYW5vdi5yZXBsLmNvXCI7IC8vIFRPRE8gZW50ZXIgeW91ciBkYXBwIFVSTC4gRm9yIGV4YW1wbGU6IGh0dHBzOi8vdW5pc3dhcC5leGNoYW5nZS4gKGRvbid0IGVudGVyIHRoZSBcImh0dHBzOi8vXCIpXHJcbiAgICAgICAgICAgIGNvbnN0IG1ldGFtYXNrQXBwRGVlcExpbmsgPSBcImh0dHBzOi8vbWV0YW1hc2suYXBwLmxpbmsvZGFwcC9cIiArIGRhcHBVcmw7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPXttZXRhbWFza0FwcERlZXBMaW5rfT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIHJlbGF0aXZlIGZsZXggdy1mdWxsIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCBiZy1ncmF5LTMwMCBweS0yIHB4LTQgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXVuaSBob3ZlcjpiZy11bmkgaG92ZXI6dGV4dC13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctdW5pIGZvY3VzOnJpbmctb2Zmc2V0LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29ubmVjdCB0byBNZXRhTWFza1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgcmVsYXRpdmUgaXRlbXMtY2VudGVyIGZsZXggdy1mdWxsIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCBiZy1ncmF5LTQwMCBweS0xIHB4LTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXVuaSBob3ZlcjpiZy11bmkgaG92ZXI6dGV4dC13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctdW5pIGZvY3VzOnJpbmctb2Zmc2V0LTJcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjb25uZWN0KHNldFVzZXJBZGRyZXNzKX0+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMlwiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMlwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgc3JjPVwiL01ldGFNYXNrX0ZveC5zdmcucG5nXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGFsaWduLW1pZGRsZVwiPkNvbm5lY3QgdG8gTWV0YW1hc2s8L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICApO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gQWRkcmVzcyh7dXNlckFkZHJlc3N9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPnt1c2VyQWRkcmVzcy5zdWJzdHJpbmcoMCwgNSl94oCme3VzZXJBZGRyZXNzLnN1YnN0cmluZyh1c2VyQWRkcmVzcy5sZW5ndGggLSA0KX08L3NwYW4+XHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJpc01vYmlsZURldmljZSIsIndpbmRvdyIsImNvbm5lY3QiLCJvbkNvbm5lY3RlZCIsImV0aGVyZXVtIiwiYWxlcnQiLCJhY2NvdW50cyIsInJlcXVlc3QiLCJtZXRob2QiLCJjaGVja0lmV2FsbGV0SXNDb25uZWN0ZWQiLCJsZW5ndGgiLCJhY2NvdW50IiwiTWV0YU1hc2tBdXRoIiwib25BZGRyZXNzQ2hhbmdlZCIsInVzZXJBZGRyZXNzIiwic2V0VXNlckFkZHJlc3MiLCJjaGFuZ2VVc2VyQWRkcmVzcyIsImRpdiIsImNsYXNzTmFtZSIsIkFkZHJlc3MiLCJDb25uZWN0IiwiZGFwcFVybCIsIm1ldGFtYXNrQXBwRGVlcExpbmsiLCJhIiwiaHJlZiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsImFsdCIsInNwYW4iLCJzdWJzdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MetaMaskAuth.tsx\n"));

/***/ })

});