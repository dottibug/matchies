"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_buttons_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/buttons/button */ \"(app-pages-browser)/./components/buttons/button.js\");\n// NextJS 13 page\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n/*\nTS\nexport default function Page() {\n  return <h1>Hello, Next.js!</h1>\n}\n*/ var links = [\n    {\n        name: \"New Game\",\n        href: \"/new-game\"\n    },\n    {\n        name: \"Login\",\n        href: \"/login\"\n    },\n    {\n        name: \"Create Account\",\n        href: \"/create-account\"\n    }\n];\nfunction Page() {\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().app),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Matchies\"\n            }, void 0, false, {\n                fileName: \"/Users/tanyawoodside/Desktop/matchies/app/page.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            links.map(function(link) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: link.href,\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"app-button\"]),\n                    children: link.name\n                }, link.name, false, {\n                    fileName: \"/Users/tanyawoodside/Desktop/matchies/app/page.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tanyawoodside/Desktop/matchies/app/page.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxpQkFBaUI7O0FBRXNCO0FBQ1Y7QUFDcUI7QUFFbEQ7Ozs7O0FBS0EsR0FFQSxJQUFNRyxRQUFRO0lBQ1o7UUFBRUMsTUFBTTtRQUFZQyxNQUFNO0lBQVk7SUFDdEM7UUFBRUQsTUFBTTtRQUFTQyxNQUFNO0lBQVM7SUFDaEM7UUFBRUQsTUFBTTtRQUFrQkMsTUFBTTtJQUFrQjtDQUNuRDtBQUVjLFNBQVNDOztJQUN0QixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBV1IsNkRBQWE7OzBCQUMzQiw4REFBQ1M7MEJBQUc7Ozs7OztZQUVITixNQUFNTyxHQUFHLENBQUMsU0FBQ0M7cUNBQ1YsOERBQUNWLGtEQUFJQTtvQkFBQ0ksTUFBTU0sS0FBS04sSUFBSTtvQkFBa0JHLFdBQVdSLHVFQUFvQjs4QkFDbkVXLEtBQUtQLElBQUk7bUJBRGdCTyxLQUFLUCxJQUFJOzs7Ozs7Ozs7Ozs7QUFNN0M7S0Fad0JFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dEpTIDEzIHBhZ2Vcbid1c2UgY2xpZW50JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9wYWdlLm1vZHVsZS5jc3MnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9idXR0b25zL2J1dHRvbic7XG5cbi8qXG5UU1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSgpIHtcbiAgcmV0dXJuIDxoMT5IZWxsbywgTmV4dC5qcyE8L2gxPlxufVxuKi9cblxuY29uc3QgbGlua3MgPSBbXG4gIHsgbmFtZTogJ05ldyBHYW1lJywgaHJlZjogJy9uZXctZ2FtZScgfSxcbiAgeyBuYW1lOiAnTG9naW4nLCBocmVmOiAnL2xvZ2luJyB9LFxuICB7IG5hbWU6ICdDcmVhdGUgQWNjb3VudCcsIGhyZWY6ICcvY3JlYXRlLWFjY291bnQnIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2FwcCddfT5cbiAgICAgIDxoMT5NYXRjaGllczwvaDE+XG5cbiAgICAgIHtsaW5rcy5tYXAoKGxpbmspID0+IChcbiAgICAgICAgPExpbmsgaHJlZj17bGluay5ocmVmfSBrZXk9e2xpbmsubmFtZX0gY2xhc3NOYW1lPXtzdHlsZXNbJ2FwcC1idXR0b24nXX0+XG4gICAgICAgICAge2xpbmsubmFtZX1cbiAgICAgICAgPC9MaW5rPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiTGluayIsIkJ1dHRvbiIsImxpbmtzIiwibmFtZSIsImhyZWYiLCJQYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJtYXAiLCJsaW5rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});