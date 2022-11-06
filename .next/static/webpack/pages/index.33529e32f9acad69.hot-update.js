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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useActions */ \"./app/hooks/useActions.ts\");\n/* harmony import */ var _hooks_useTypedSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useTypedSelector */ \"./app/hooks/useTypedSelector.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ProductItem = function(param) {\n    var product = param.product;\n    _s();\n    var addItem = (0,_hooks_useActions__WEBPACK_IMPORTED_MODULE_2__.useActions)().addItem;\n    var cart = (0,_hooks_useTypedSelector__WEBPACK_IMPORTED_MODULE_3__.useTypedSelector)(function(state) {\n        return state;\n    }).cart;\n    var isExistsInCart = cart.some(function(p) {\n        return p.id === product.id;\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: '48%',\n            backgroundColor: '#E5F0EA'\n        },\n        className: \"rounded-xl mb-5 p-3 shadow-sm\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: product.image,\n                    alt: product.title,\n                    width: \"100\",\n                    height: \"143\",\n                    className: \"rounded-xl\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\draco\\\\OneDrive\\\\Документы\\\\Project\\\\redux-shop\\\\app\\\\components\\\\screens\\\\home\\\\ProductItem.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\draco\\\\OneDrive\\\\Документы\\\\Project\\\\redux-shop\\\\app\\\\components\\\\screens\\\\home\\\\ProductItem.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between mt-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-green-900 font-medium text-sm overflow-hidden text-ellipsis whitespace-nowrap mr-5\",\n                        children: product.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\draco\\\\OneDrive\\\\Документы\\\\Project\\\\redux-shop\\\\app\\\\components\\\\screens\\\\home\\\\ProductItem.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-sm text-green-600\",\n                        children: [\n                            \"$\",\n                            product.price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\draco\\\\OneDrive\\\\Документы\\\\Project\\\\redux-shop\\\\app\\\\components\\\\screens\\\\home\\\\ProductItem.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\draco\\\\OneDrive\\\\Документы\\\\Project\\\\redux-shop\\\\app\\\\components\\\\screens\\\\home\\\\ProductItem.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"text-sm mt-3 bg-white rounded-xl w-3/4 mx-auto block p-1 hover:bg-green-200\",\n                onClick: function() {\n                    return addItem(product);\n                },\n                children: isExistsInCart ? 'Already in cart' : 'Add to cart'\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\draco\\\\OneDrive\\\\Документы\\\\Project\\\\redux-shop\\\\app\\\\components\\\\screens\\\\home\\\\ProductItem.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\draco\\\\OneDrive\\\\Документы\\\\Project\\\\redux-shop\\\\app\\\\components\\\\screens\\\\home\\\\ProductItem.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, _this));\n};\n_s(ProductItem, \"Gxizn1TZenCfW9yHDdt+9w8Fsk8=\", false, function() {\n    return [\n        _hooks_useActions__WEBPACK_IMPORTED_MODULE_2__.useActions,\n        _hooks_useTypedSelector__WEBPACK_IMPORTED_MODULE_3__.useTypedSelector\n    ];\n});\n_c = ProductItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductItem);\nvar _c;\n$RefreshReg$(_c, \"ProductItem\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9zY3JlZW5zL2hvbWUvUHJvZHVjdEl0ZW0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE4QjtBQUVzQjtBQUNZOzs7QUFHaEUsR0FBSyxDQUFDRyxXQUFXLEdBQThCLFFBQVEsUUFBTyxDQUFDO1FBQWRDLE9BQU8sU0FBUEEsT0FBTzs7SUFDdEQsR0FBSyxDQUFFQyxPQUFPLEdBQUlKLDZEQUFVLEdBQXJCSSxPQUFPO0lBRWQsR0FBSyxDQUFFQyxJQUFJLEdBQUlKLHlFQUFnQixDQUFDSyxRQUFRLENBQVJBLEtBQUs7UUFBSUEsTUFBTSxDQUFOQSxLQUFLO09BQXZDRCxJQUFJO0lBRVgsR0FBSyxDQUFDRSxjQUFjLEdBQUdGLElBQUksQ0FBQ0csSUFBSSxDQUFDQyxRQUFRLENBQVJBLENBQUM7UUFBSUEsTUFBTSxDQUFOQSxDQUFDLENBQUNDLEVBQUUsS0FBS1AsT0FBTyxDQUFDTyxFQUFFOztJQUV6RCxNQUFNLDZFQUNIQyxDQUFHO1FBQ0ZDLEtBQUssRUFBRSxDQUFDQztZQUFBQSxLQUFLLEVBQUUsQ0FBSztZQUFFQyxlQUFlLEVBQUUsQ0FBUztRQUFBLENBQUM7UUFDakRDLFNBQVMsRUFBQyxDQUErQjs7d0ZBRXhDSixDQUFHO2dCQUFDSSxTQUFTLEVBQUMsQ0FBYTtzR0FDekJoQixtREFBSztvQkFDSmlCLEdBQUcsRUFBRWIsT0FBTyxDQUFDYyxLQUFLO29CQUNsQkMsR0FBRyxFQUFFZixPQUFPLENBQUNnQixLQUFLO29CQUNsQk4sS0FBSyxFQUFDLENBQUs7b0JBQ1hPLE1BQU0sRUFBQyxDQUFLO29CQUNaTCxTQUFTLEVBQUMsQ0FBWTs7Ozs7Ozs7Ozs7d0ZBR3pCSixDQUFHO2dCQUFDSSxTQUFTLEVBQUMsQ0FBd0M7O2dHQUNwREosQ0FBRzt3QkFBQ0ksU0FBUyxFQUFDLENBQXlGO2tDQUNyR1osT0FBTyxDQUFDZ0IsS0FBSzs7Ozs7O2dHQUVmUixDQUFHO3dCQUFDSSxTQUFTLEVBQUMsQ0FBd0I7OzRCQUFDLENBQUM7NEJBQUNaLE9BQU8sQ0FBQ2tCLEtBQUs7Ozs7Ozs7Ozs7Ozs7d0ZBRXhEQyxDQUFNO2dCQUFDUCxTQUFTLEVBQUMsQ0FBNkU7Z0JBQ3ZGUSxPQUFPLEVBQUUsUUFBUTtvQkFBRm5CLE1BQU0sQ0FBTkEsT0FBTyxDQUFDRCxPQUFPOzswQkFDbkNJLGNBQWMsR0FBRyxDQUFpQixtQkFBRyxDQUFhOzs7Ozs7Ozs7Ozs7QUFJM0QsQ0FBQztHQWpDS0wsV0FBVzs7UUFDR0YseURBQVU7UUFFYkMscUVBQWdCOzs7S0FIM0JDLFdBQVc7QUFtQ2pCLCtEQUFlQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL3NjcmVlbnMvaG9tZS9Qcm9kdWN0SXRlbS50c3g/OTQ2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7RkN9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHt1c2VBY3Rpb25zfSBmcm9tIFwiLi4vLi4vLi4vaG9va3MvdXNlQWN0aW9uc1wiO1xuaW1wb3J0IHt1c2VUeXBlZFNlbGVjdG9yfSBmcm9tIFwiLi4vLi4vLi4vaG9va3MvdXNlVHlwZWRTZWxlY3RvclwiO1xuaW1wb3J0IHtJUHJvZHVjdH0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlL3Byb2R1Y3RzL3Byb2R1Y3QudHlwZXNcIjtcblxuY29uc3QgUHJvZHVjdEl0ZW06IEZDPHsgcHJvZHVjdDogSVByb2R1Y3QgfT4gPSAoe3Byb2R1Y3R9KSA9PiB7XG4gIGNvbnN0IHthZGRJdGVtfSA9IHVzZUFjdGlvbnMoKVxuXG4gIGNvbnN0IHtjYXJ0fSA9IHVzZVR5cGVkU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUpXG5cbiAgY29uc3QgaXNFeGlzdHNJbkNhcnQgPSBjYXJ0LnNvbWUocCA9PiBwLmlkID09PSBwcm9kdWN0LmlkKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3t3aWR0aDogJzQ4JScsIGJhY2tncm91bmRDb2xvcjogJyNFNUYwRUEnfX1cbiAgICAgIGNsYXNzTmFtZT0ncm91bmRlZC14bCBtYi01IHAtMyBzaGFkb3ctc20nXG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3JjPXtwcm9kdWN0LmltYWdlfVxuICAgICAgICAgIGFsdD17cHJvZHVjdC50aXRsZX1cbiAgICAgICAgICB3aWR0aD0nMTAwJ1xuICAgICAgICAgIGhlaWdodD0nMTQzJ1xuICAgICAgICAgIGNsYXNzTmFtZT0ncm91bmRlZC14bCdcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtdC0zJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtZ3JlZW4tOTAwIGZvbnQtbWVkaXVtIHRleHQtc20gb3ZlcmZsb3ctaGlkZGVuIHRleHQtZWxsaXBzaXMgd2hpdGVzcGFjZS1ub3dyYXAgbXItNSc+XG4gICAgICAgICAge3Byb2R1Y3QudGl0bGV9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1zbSB0ZXh0LWdyZWVuLTYwMCc+JHtwcm9kdWN0LnByaWNlfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ndGV4dC1zbSBtdC0zIGJnLXdoaXRlIHJvdW5kZWQteGwgdy0zLzQgbXgtYXV0byBibG9jayBwLTEgaG92ZXI6YmctZ3JlZW4tMjAwJ1xuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhZGRJdGVtKHByb2R1Y3QpfT5cbiAgICAgICAge2lzRXhpc3RzSW5DYXJ0ID8gJ0FscmVhZHkgaW4gY2FydCcgOiAnQWRkIHRvIGNhcnQnfVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdEl0ZW1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZUFjdGlvbnMiLCJ1c2VUeXBlZFNlbGVjdG9yIiwiUHJvZHVjdEl0ZW0iLCJwcm9kdWN0IiwiYWRkSXRlbSIsImNhcnQiLCJzdGF0ZSIsImlzRXhpc3RzSW5DYXJ0Iiwic29tZSIsInAiLCJpZCIsImRpdiIsInN0eWxlIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGFzc05hbWUiLCJzcmMiLCJpbWFnZSIsImFsdCIsInRpdGxlIiwiaGVpZ2h0IiwicHJpY2UiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/components/screens/home/ProductItem.tsx\n");

/***/ })

});