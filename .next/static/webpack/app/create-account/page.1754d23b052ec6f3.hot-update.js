/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/create-account/page",{

/***/ "(app-pages-browser)/./components/icons/images lazy recursive ^\\.\\/.*\\.png$":
/*!**********************************************************************!*\
  !*** ./components/icons/images/ lazy ^\.\/.*\.png$ namespace object ***!
  \**********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./icon-kittyBooks.png": "(app-pages-browser)/./components/icons/images/icon-kittyBooks.png",
	"./icon-kittyBubbles.png": "(app-pages-browser)/./components/icons/images/icon-kittyBubbles.png",
	"./icon-kittyChef.png": "(app-pages-browser)/./components/icons/images/icon-kittyChef.png",
	"./icon-kittyCoffee.png": "(app-pages-browser)/./components/icons/images/icon-kittyCoffee.png",
	"./icon-kittyFlower.png": "(app-pages-browser)/./components/icons/images/icon-kittyFlower.png",
	"./icon-kittyGhost.png": "(app-pages-browser)/./components/icons/images/icon-kittyGhost.png",
	"./icon-kittyHeadphones.png": "(app-pages-browser)/./components/icons/images/icon-kittyHeadphones.png",
	"./icon-kittyMad.png": "(app-pages-browser)/./components/icons/images/icon-kittyMad.png",
	"./icon-kittyMeh.png": "(app-pages-browser)/./components/icons/images/icon-kittyMeh.png",
	"./icon-kittyParty.png": "(app-pages-browser)/./components/icons/images/icon-kittyParty.png",
	"./icon-kittyPirate.png": "(app-pages-browser)/./components/icons/images/icon-kittyPirate.png",
	"./icon-kittyRain.png": "(app-pages-browser)/./components/icons/images/icon-kittyRain.png",
	"./icon-kittyRobot.png": "(app-pages-browser)/./components/icons/images/icon-kittyRobot.png",
	"./icon-kittySuperhero.png": "(app-pages-browser)/./components/icons/images/icon-kittySuperhero.png",
	"./icon-kittySurprise.png": "(app-pages-browser)/./components/icons/images/icon-kittySurprise.png",
	"./icon-kittyWorkout.png": "(app-pages-browser)/./components/icons/images/icon-kittyWorkout.png"
};

function webpackAsyncContext(req) {
	return Promise.resolve().then(function() {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}

		var id = map[req];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = "(app-pages-browser)/./components/icons/images lazy recursive ^\\.\\/.*\\.png$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "(app-pages-browser)/./components/icons/userIcons.js":
/*!***************************************!*\
  !*** ./components/icons/userIcons.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   icons: function() { return /* binding */ icons; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n// Webpack require.context: create a context to require all images from specific folder instead of manually importing each one\n\n// ICON IMAGES\n// Image filename format: icon-imageName.png\nvar images = __webpack_require__(\"(app-pages-browser)/./components/icons/images sync recursive ^\\\\.\\\\/.*$\");\nvar imagePaths = images.keys().map(function(image) {\n    return image;\n});\nconsole.log(\"imagePaths: \", imagePaths);\nvar icons = imagePaths.map(function(path, i) {\n    var match = path.match(/-(.*)\\.\\w+$/);\n    var name = match[1];\n    // const image = imagePaths[i];\n    // return { name, image };\n    var Icon = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().lazy(function() {\n        return __webpack_require__(\"(app-pages-browser)/./components/icons/images lazy recursive ^\\\\.\\\\/.*\\\\.png$\")(\"./\".concat(name, \".png\"));\n    });\n    return {\n        name: name,\n        Icon: Icon\n    };\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvaWNvbnMvdXNlckljb25zLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDhIQUE4SDtBQUV0RjtBQUV4QyxjQUFjO0FBQ2QsNENBQTRDO0FBQzVDLElBQU1FLFNBQVNDLDhGQUFpQztBQUNoRCxJQUFNRSxhQUFhSCxPQUFPSSxJQUFJLEdBQUdDLEdBQUcsQ0FBQyxTQUFDQztXQUFVQTs7QUFFaERDLFFBQVFDLEdBQUcsQ0FBQyxnQkFBZ0JMO0FBRXJCLElBQU1NLFFBQVFOLFdBQVdFLEdBQUcsQ0FBQyxTQUFDSyxNQUFNQztJQUN6QyxJQUFNQyxRQUFRRixLQUFLRSxLQUFLLENBQUM7SUFDekIsSUFBTUMsT0FBT0QsS0FBSyxDQUFDLEVBQUU7SUFDckIsK0JBQStCO0lBQy9CLDBCQUEwQjtJQUMxQixJQUFNRSxxQkFBT2hCLGlEQUFVLENBQUM7ZUFBTSxxR0FBTyxLQUFpQixPQUFMZSxNQUFLOztJQUN0RCxPQUFPO1FBQUVBLE1BQUFBO1FBQU1DLE1BQUFBO0lBQUs7QUFDdEIsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2ljb25zL3VzZXJJY29ucy5qcz80ZDBmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFdlYnBhY2sgcmVxdWlyZS5jb250ZXh0OiBjcmVhdGUgYSBjb250ZXh0IHRvIHJlcXVpcmUgYWxsIGltYWdlcyBmcm9tIHNwZWNpZmljIGZvbGRlciBpbnN0ZWFkIG9mIG1hbnVhbGx5IGltcG9ydGluZyBlYWNoIG9uZVxuXG5pbXBvcnQgUmVhY3QsIHsgU3VzcGVuc2UgfSBmcm9tICdyZWFjdCc7XG5cbi8vIElDT04gSU1BR0VTXG4vLyBJbWFnZSBmaWxlbmFtZSBmb3JtYXQ6IGljb24taW1hZ2VOYW1lLnBuZ1xuY29uc3QgaW1hZ2VzID0gcmVxdWlyZS5jb250ZXh0KCcuL2ltYWdlcycsIHRydWUpO1xuY29uc3QgaW1hZ2VQYXRocyA9IGltYWdlcy5rZXlzKCkubWFwKChpbWFnZSkgPT4gaW1hZ2UpO1xuXG5jb25zb2xlLmxvZygnaW1hZ2VQYXRoczogJywgaW1hZ2VQYXRocyk7XG5cbmV4cG9ydCBjb25zdCBpY29ucyA9IGltYWdlUGF0aHMubWFwKChwYXRoLCBpKSA9PiB7XG4gIGNvbnN0IG1hdGNoID0gcGF0aC5tYXRjaCgvLSguKilcXC5cXHcrJC8pO1xuICBjb25zdCBuYW1lID0gbWF0Y2hbMV07XG4gIC8vIGNvbnN0IGltYWdlID0gaW1hZ2VQYXRoc1tpXTtcbiAgLy8gcmV0dXJuIHsgbmFtZSwgaW1hZ2UgfTtcbiAgY29uc3QgSWNvbiA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KGAuL2ltYWdlcy8ke25hbWV9LnBuZ2ApKTtcbiAgcmV0dXJuIHsgbmFtZSwgSWNvbiB9O1xufSk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJTdXNwZW5zZSIsImltYWdlcyIsInJlcXVpcmUiLCJjb250ZXh0IiwiaW1hZ2VQYXRocyIsImtleXMiLCJtYXAiLCJpbWFnZSIsImNvbnNvbGUiLCJsb2ciLCJpY29ucyIsInBhdGgiLCJpIiwibWF0Y2giLCJuYW1lIiwiSWNvbiIsImxhenkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/icons/userIcons.js\n"));

/***/ })

});