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

/***/ "(app-pages-browser)/./components/icons/userIcons.js":
/*!***************************************!*\
  !*** ./components/icons/userIcons.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   icons: function() { return /* binding */ icons; }\n/* harmony export */ });\n// Webpack require.context: create a context to require all images from specific folder instead of manually importing each one\n// ICON IMAGES\n// Image filename format: icon-imageName.png\nvar images = __webpack_require__(\"(app-pages-browser)/./components/icons/images sync recursive ^\\\\.\\\\/.*$\");\nvar imagePaths = images.keys().map(function(image) {\n    console.log(\"image: \", image);\n    return image;\n});\nconsole.log(\"images: \", images);\nconsole.log(\"imagePaths: \", imagePaths);\nvar icons = imagePaths.map(function(path, i) {\n    var match = path.match(/\\/static\\/media\\/(.*?)(\\..*)?$/);\n    var matchSplit = match[1].split(\"-\");\n    var name = matchSplit[1];\n    var image = imagePaths[i];\n    return {\n        name: name,\n        image: image\n    };\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvaWNvbnMvdXNlckljb25zLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSw4SEFBOEg7QUFFOUgsY0FBYztBQUNkLDRDQUE0QztBQUM1QyxJQUFNQSxTQUFTQyw4RkFBaUM7QUFDaEQsSUFBTUUsYUFBYUgsT0FBT0ksSUFBSSxHQUFHQyxHQUFHLENBQUMsU0FBQ0M7SUFDcENDLFFBQVFDLEdBQUcsQ0FBQyxXQUFXRjtJQUN2QixPQUFPQTtBQUNUO0FBRUFDLFFBQVFDLEdBQUcsQ0FBQyxZQUFZUjtBQUN4Qk8sUUFBUUMsR0FBRyxDQUFDLGdCQUFnQkw7QUFFckIsSUFBTU0sUUFBUU4sV0FBV0UsR0FBRyxDQUFDLFNBQUNLLE1BQU1DO0lBQ3pDLElBQU1DLFFBQVFGLEtBQUtFLEtBQUssQ0FBQztJQUN6QixJQUFNQyxhQUFhRCxLQUFLLENBQUMsRUFBRSxDQUFDRSxLQUFLLENBQUM7SUFDbEMsSUFBTUMsT0FBT0YsVUFBVSxDQUFDLEVBQUU7SUFDMUIsSUFBTVAsUUFBUUgsVUFBVSxDQUFDUSxFQUFFO0lBQzNCLE9BQU87UUFBRUksTUFBQUE7UUFBTVQsT0FBQUE7SUFBTTtBQUN2QixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaWNvbnMvdXNlckljb25zLmpzPzRkMGYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gV2VicGFjayByZXF1aXJlLmNvbnRleHQ6IGNyZWF0ZSBhIGNvbnRleHQgdG8gcmVxdWlyZSBhbGwgaW1hZ2VzIGZyb20gc3BlY2lmaWMgZm9sZGVyIGluc3RlYWQgb2YgbWFudWFsbHkgaW1wb3J0aW5nIGVhY2ggb25lXG5cbi8vIElDT04gSU1BR0VTXG4vLyBJbWFnZSBmaWxlbmFtZSBmb3JtYXQ6IGljb24taW1hZ2VOYW1lLnBuZ1xuY29uc3QgaW1hZ2VzID0gcmVxdWlyZS5jb250ZXh0KCcuL2ltYWdlcycsIHRydWUpO1xuY29uc3QgaW1hZ2VQYXRocyA9IGltYWdlcy5rZXlzKCkubWFwKChpbWFnZSkgPT4ge1xuICBjb25zb2xlLmxvZygnaW1hZ2U6ICcsIGltYWdlKTtcbiAgcmV0dXJuIGltYWdlO1xufSk7XG5cbmNvbnNvbGUubG9nKCdpbWFnZXM6ICcsIGltYWdlcyk7XG5jb25zb2xlLmxvZygnaW1hZ2VQYXRoczogJywgaW1hZ2VQYXRocyk7XG5cbmV4cG9ydCBjb25zdCBpY29ucyA9IGltYWdlUGF0aHMubWFwKChwYXRoLCBpKSA9PiB7XG4gIGNvbnN0IG1hdGNoID0gcGF0aC5tYXRjaCgvXFwvc3RhdGljXFwvbWVkaWFcXC8oLio/KShcXC4uKik/JC8pO1xuICBjb25zdCBtYXRjaFNwbGl0ID0gbWF0Y2hbMV0uc3BsaXQoJy0nKTtcbiAgY29uc3QgbmFtZSA9IG1hdGNoU3BsaXRbMV07XG4gIGNvbnN0IGltYWdlID0gaW1hZ2VQYXRoc1tpXTtcbiAgcmV0dXJuIHsgbmFtZSwgaW1hZ2UgfTtcbn0pO1xuIl0sIm5hbWVzIjpbImltYWdlcyIsInJlcXVpcmUiLCJjb250ZXh0IiwiaW1hZ2VQYXRocyIsImtleXMiLCJtYXAiLCJpbWFnZSIsImNvbnNvbGUiLCJsb2ciLCJpY29ucyIsInBhdGgiLCJpIiwibWF0Y2giLCJtYXRjaFNwbGl0Iiwic3BsaXQiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/icons/userIcons.js\n"));

/***/ })

});