"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./app/components/screens/home/ProductItem.tsx":
/*!*****************************************************!*\
  !*** ./app/components/screens/home/ProductItem.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useActions */ \"./app/hooks/useActions.ts\");\n/* harmony import */ var _hooks_useTypedSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useTypedSelector */ \"./app/hooks/useTypedSelector.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ProductItem = function(param) {\n    var product = param.product;\n    _s();\n    var addItem = (0,_hooks_useActions__WEBPACK_IMPORTED_MODULE_2__.useActions)().addItem;\n    var cart = (0,_hooks_useTypedSelector__WEBPACK_IMPORTED_MODULE_3__.useTypedSelector)(function(state) {\n        return state;\n    }).cart;\n    var isExistsInCart = _return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: '48%',\n            backgroundColor: '#E5F0EA'\n        },\n        className: \"rounded-xl mb-5 p-3 shadow-sm\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: product.image,\n                    alt: product.title,\n                    width: \"100\",\n                    height: \"143\",\n                    className: \"rounded-xl\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\draco\\\\OneDrive\\\\Документы\\\\Project\\\\redux-shop\\\\app\\\\components\\\\screens\\\\home\\\\ProductItem.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\draco\\\\OneDrive\\\\Документы\\\\Project\\\\redux-shop\\\\app\\\\components\\\\screens\\\\home\\\\ProductItem.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between mt-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-green-900 font-medium text-sm overflow-hidden text-ellipsis whitespace-nowrap mr-5\",\n                        children: product.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\draco\\\\OneDrive\\\\Документы\\\\Project\\\\redux-shop\\\\app\\\\components\\\\screens\\\\home\\\\ProductItem.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-sm text-green-600\",\n                        children: [\n                            \"$\",\n                            product.price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\draco\\\\OneDrive\\\\Документы\\\\Project\\\\redux-shop\\\\app\\\\components\\\\screens\\\\home\\\\ProductItem.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\draco\\\\OneDrive\\\\Документы\\\\Project\\\\redux-shop\\\\app\\\\components\\\\screens\\\\home\\\\ProductItem.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"text-sm mt-3 bg-white rounded-xl w-3/4 mx-auto block p-1 hover:bg-green-200\",\n                onClick: function() {\n                    return addItem(product);\n                },\n                children: \"Add to cart\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\draco\\\\OneDrive\\\\Документы\\\\Project\\\\redux-shop\\\\app\\\\components\\\\screens\\\\home\\\\ProductItem.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\draco\\\\OneDrive\\\\Документы\\\\Project\\\\redux-shop\\\\app\\\\components\\\\screens\\\\home\\\\ProductItem.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this));\n};\n_s(ProductItem, \"Gxizn1TZenCfW9yHDdt+9w8Fsk8=\", false, function() {\n    return [\n        _hooks_useActions__WEBPACK_IMPORTED_MODULE_2__.useActions,\n        _hooks_useTypedSelector__WEBPACK_IMPORTED_MODULE_3__.useTypedSelector\n    ];\n});\n_c = ProductItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductItem);\nvar _c;\n$RefreshReg$(_c, \"ProductItem\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9zY3JlZW5zL2hvbWUvUHJvZHVjdEl0ZW0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE4QjtBQUVzQjtBQUNZOzs7QUFFaEUsR0FBSyxDQUFDRyxXQUFXLEdBQXlCLFFBQVEsUUFBTyxDQUFDO1FBQWRDLE9BQU8sU0FBUEEsT0FBTzs7SUFDakQsR0FBSyxDQUFFQyxPQUFPLEdBQUlKLDZEQUFVLEdBQXJCSSxPQUFPO0lBRWQsR0FBSyxDQUFFQyxJQUFJLEdBQUlKLHlFQUFnQixDQUFDSyxRQUFRLENBQVJBLEtBQUs7UUFBSUEsTUFBTSxDQUFOQSxLQUFLO09BQXZDRCxJQUFJO0lBRVgsR0FBSyxDQUFDRSxjQUFjLEdBRXBCQyxPQUFNLDZFQUNIQyxDQUFHO1FBQ0ZDLEtBQUssRUFBRSxDQUFDQztZQUFBQSxLQUFLLEVBQUUsQ0FBSztZQUFFQyxlQUFlLEVBQUUsQ0FBUztRQUFBLENBQUM7UUFDakRDLFNBQVMsRUFBQyxDQUErQjs7d0ZBRXhDSixDQUFHO2dCQUFDSSxTQUFTLEVBQUMsQ0FBYTtzR0FDekJkLG1EQUFLO29CQUNKZSxHQUFHLEVBQUVYLE9BQU8sQ0FBQ1ksS0FBSztvQkFDbEJDLEdBQUcsRUFBRWIsT0FBTyxDQUFDYyxLQUFLO29CQUNsQk4sS0FBSyxFQUFDLENBQUs7b0JBQ1hPLE1BQU0sRUFBQyxDQUFLO29CQUNaTCxTQUFTLEVBQUMsQ0FBWTs7Ozs7Ozs7Ozs7d0ZBR3pCSixDQUFHO2dCQUFDSSxTQUFTLEVBQUMsQ0FBd0M7O2dHQUNwREosQ0FBRzt3QkFBQ0ksU0FBUyxFQUFDLENBQXlGO2tDQUNyR1YsT0FBTyxDQUFDYyxLQUFLOzs7Ozs7Z0dBRWZSLENBQUc7d0JBQUNJLFNBQVMsRUFBQyxDQUF3Qjs7NEJBQUMsQ0FBQzs0QkFBQ1YsT0FBTyxDQUFDZ0IsS0FBSzs7Ozs7Ozs7Ozs7Ozt3RkFFeERDLENBQU07Z0JBQUNQLFNBQVMsRUFBQyxDQUE2RTtnQkFDdkZRLE9BQU8sRUFBRSxRQUFRO29CQUFGakIsTUFBTSxDQUFOQSxPQUFPLENBQUNELE9BQU87OzBCQUFHLENBRXpDOzs7Ozs7Ozs7Ozs7QUFHTixDQUFDO0dBakNLRCxXQUFXOztRQUNHRix5REFBVTtRQUViQyxxRUFBZ0I7OztLQUgzQkMsV0FBVztBQW1DakIsK0RBQWVBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvc2NyZWVucy9ob21lL1Byb2R1Y3RJdGVtLnRzeD85NDYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHtGQ30gZnJvbSAncmVhY3QnXG5pbXBvcnQge3VzZUFjdGlvbnN9IGZyb20gXCIuLi8uLi8uLi9ob29rcy91c2VBY3Rpb25zXCI7XG5pbXBvcnQge3VzZVR5cGVkU2VsZWN0b3J9IGZyb20gXCIuLi8uLi8uLi9ob29rcy91c2VUeXBlZFNlbGVjdG9yXCI7XG5cbmNvbnN0IFByb2R1Y3RJdGVtOiBGQzx7IHByb2R1Y3Q6IGFueSB9PiA9ICh7cHJvZHVjdH0pID0+IHtcbiAgY29uc3Qge2FkZEl0ZW19ID0gdXNlQWN0aW9ucygpXG5cbiAgY29uc3Qge2NhcnR9ID0gdXNlVHlwZWRTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZSlcblxuICBjb25zdCBpc0V4aXN0c0luQ2FydCA9IFxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3t3aWR0aDogJzQ4JScsIGJhY2tncm91bmRDb2xvcjogJyNFNUYwRUEnfX1cbiAgICAgIGNsYXNzTmFtZT0ncm91bmRlZC14bCBtYi01IHAtMyBzaGFkb3ctc20nXG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3JjPXtwcm9kdWN0LmltYWdlfVxuICAgICAgICAgIGFsdD17cHJvZHVjdC50aXRsZX1cbiAgICAgICAgICB3aWR0aD0nMTAwJ1xuICAgICAgICAgIGhlaWdodD0nMTQzJ1xuICAgICAgICAgIGNsYXNzTmFtZT0ncm91bmRlZC14bCdcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtdC0zJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtZ3JlZW4tOTAwIGZvbnQtbWVkaXVtIHRleHQtc20gb3ZlcmZsb3ctaGlkZGVuIHRleHQtZWxsaXBzaXMgd2hpdGVzcGFjZS1ub3dyYXAgbXItNSc+XG4gICAgICAgICAge3Byb2R1Y3QudGl0bGV9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1zbSB0ZXh0LWdyZWVuLTYwMCc+JHtwcm9kdWN0LnByaWNlfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ndGV4dC1zbSBtdC0zIGJnLXdoaXRlIHJvdW5kZWQteGwgdy0zLzQgbXgtYXV0byBibG9jayBwLTEgaG92ZXI6YmctZ3JlZW4tMjAwJ1xuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhZGRJdGVtKHByb2R1Y3QpfT5cbiAgICAgICAgQWRkIHRvIGNhcnRcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RJdGVtXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VBY3Rpb25zIiwidXNlVHlwZWRTZWxlY3RvciIsIlByb2R1Y3RJdGVtIiwicHJvZHVjdCIsImFkZEl0ZW0iLCJjYXJ0Iiwic3RhdGUiLCJpc0V4aXN0c0luQ2FydCIsInJldHVybiIsImRpdiIsInN0eWxlIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGFzc05hbWUiLCJzcmMiLCJpbWFnZSIsImFsdCIsInRpdGxlIiwiaGVpZ2h0IiwicHJpY2UiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/components/screens/home/ProductItem.tsx\n");

/***/ }),

/***/ "./app/hooks/useTypedSelector.ts":
/*!***************************************!*\
  !*** ./app/hooks/useTypedSelector.ts ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useTypedSelector\": function() { return /* binding */ useTypedSelector; }\n/* harmony export */ });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar useTypedSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvaG9va3MvdXNlVHlwZWRTZWxlY3Rvci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkQ7QUFHdEQsR0FBSyxDQUFDQyxnQkFBZ0IsR0FBdUNELG9EQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9ob29rcy91c2VUeXBlZFNlbGVjdG9yLnRzP2RiNzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUeXBlZFVzZVNlbGVjdG9ySG9vaywgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge1R5cGVSb290U3RhdGV9IGZyb20gXCIuLi9zdG9yZS9zdG9yZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVR5cGVkU2VsZWN0b3I6VHlwZWRVc2VTZWxlY3Rvckhvb2s8VHlwZVJvb3RTdGF0ZT4gPSB1c2VTZWxlY3RvclxyXG4iXSwibmFtZXMiOlsidXNlU2VsZWN0b3IiLCJ1c2VUeXBlZFNlbGVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/hooks/useTypedSelector.ts\n");

/***/ })

});