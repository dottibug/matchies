"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/create-account/page",{

/***/ "(app-pages-browser)/./app/create-account/helpers/handleUserProfileCreation.js":
/*!*****************************************************************!*\
  !*** ./app/create-account/helpers/handleUserProfileCreation.js ***!
  \*****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleUserProfileCreation: function() { return /* binding */ handleUserProfileCreation; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"(app-pages-browser)/./node_modules/tslib/tslib.es6.mjs\");\n/* harmony import */ var _selectRandomIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectRandomIcon */ \"(app-pages-browser)/./app/create-account/helpers/selectRandomIcon.js\");\n\n\n\nvar handleUserProfileCreation = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_1__._)(function(supabase, signUpData, username, email, selectedIcon) {\n        var _ref, data, error;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    return [\n                        4,\n                        supabase.from(\"profiles\").insert([\n                            {\n                                user_uid: signUpData.user.id,\n                                email: email,\n                                username: username,\n                                icon: selectedIcon || (0,_selectRandomIcon__WEBPACK_IMPORTED_MODULE_0__.selectRandomIcon)(),\n                                games_played: 0,\n                                decks_unlocked: [\n                                    \"ocean\",\n                                    \"camping\",\n                                    \"sweets\"\n                                ]\n                            }\n                        ]).select()\n                    ];\n                case 1:\n                    _ref = _state.sent(), data = _ref.data, error = _ref.error;\n                    if (error) throw new CustomError(\"supabase\", error.message);\n                    console.log(\"-- profile data: \", data);\n                    return [\n                        2,\n                        data\n                    ];\n            }\n        });\n    });\n    return function handleUserProfileCreation(supabase, signUpData, username, email, selectedIcon) {\n        return _ref.apply(this, arguments);\n    };\n}();\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jcmVhdGUtYWNjb3VudC9oZWxwZXJzL2hhbmRsZVVzZXJQcm9maWxlQ3JlYXRpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXNEO0FBRS9DLElBQU1DO2VBQTRCLDRFQUN2Q0MsVUFDQUMsWUFDQUMsVUFDQUMsT0FDQUM7WUFFd0IsTUFBaEJDLE1BQU1DOzs7O29CQUFVOzt3QkFBTU4sU0FDM0JPLElBQUksQ0FBQyxZQUNMQyxNQUFNOzRCQUNMO2dDQUNFQyxVQUFVUixXQUFXUyxJQUFJLENBQUNDLEVBQUU7Z0NBQzVCUixPQUFPQTtnQ0FDUEQsVUFBVUE7Z0NBQ1ZVLE1BQU1SLGdCQUFnQk4sbUVBQWdCQTtnQ0FDdENlLGNBQWM7Z0NBQ2RDLGNBQWM7b0NBQUc7b0NBQVM7b0NBQVc7OzRCQUN2QzsyQkFFREMsTUFBTTs7O29CQVplLHNCQUFoQlYsT0FBZ0IsS0FBaEJBLE1BQU1DLFFBQVUsS0FBVkE7b0JBY2QsSUFBSUEsT0FBTyxNQUFNLElBQUlVLFlBQVksWUFBWVYsTUFBTVcsT0FBTztvQkFFMURDLFFBQVFDLEdBQUcsQ0FBQyxxQkFBcUJkO29CQUNqQzs7d0JBQU9BOzs7O0lBQ1Q7b0JBekJhTiwwQkFDWEMsVUFDQUMsWUFDQUMsVUFDQUMsT0FDQUM7OztJQW9CQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY3JlYXRlLWFjY291bnQvaGVscGVycy9oYW5kbGVVc2VyUHJvZmlsZUNyZWF0aW9uLmpzPzFjNDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2VsZWN0UmFuZG9tSWNvbiB9IGZyb20gJy4vc2VsZWN0UmFuZG9tSWNvbic7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVVc2VyUHJvZmlsZUNyZWF0aW9uID0gYXN5bmMgKFxuICBzdXBhYmFzZSxcbiAgc2lnblVwRGF0YSxcbiAgdXNlcm5hbWUsXG4gIGVtYWlsLFxuICBzZWxlY3RlZEljb25cbikgPT4ge1xuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgIC5mcm9tKCdwcm9maWxlcycpXG4gICAgLmluc2VydChbXG4gICAgICB7XG4gICAgICAgIHVzZXJfdWlkOiBzaWduVXBEYXRhLnVzZXIuaWQsXG4gICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgICBpY29uOiBzZWxlY3RlZEljb24gfHwgc2VsZWN0UmFuZG9tSWNvbigpLFxuICAgICAgICBnYW1lc19wbGF5ZWQ6IDAsXG4gICAgICAgIGRlY2tzX3VubG9ja2VkOiBbJ29jZWFuJywgJ2NhbXBpbmcnLCAnc3dlZXRzJ10sXG4gICAgICB9LFxuICAgIF0pXG4gICAgLnNlbGVjdCgpO1xuXG4gIGlmIChlcnJvcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdzdXBhYmFzZScsIGVycm9yLm1lc3NhZ2UpO1xuXG4gIGNvbnNvbGUubG9nKCctLSBwcm9maWxlIGRhdGE6ICcsIGRhdGEpO1xuICByZXR1cm4gZGF0YTtcbn07XG4iXSwibmFtZXMiOlsic2VsZWN0UmFuZG9tSWNvbiIsImhhbmRsZVVzZXJQcm9maWxlQ3JlYXRpb24iLCJzdXBhYmFzZSIsInNpZ25VcERhdGEiLCJ1c2VybmFtZSIsImVtYWlsIiwic2VsZWN0ZWRJY29uIiwiZGF0YSIsImVycm9yIiwiZnJvbSIsImluc2VydCIsInVzZXJfdWlkIiwidXNlciIsImlkIiwiaWNvbiIsImdhbWVzX3BsYXllZCIsImRlY2tzX3VubG9ja2VkIiwic2VsZWN0IiwiQ3VzdG9tRXJyb3IiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/create-account/helpers/handleUserProfileCreation.js\n"));

/***/ })

});