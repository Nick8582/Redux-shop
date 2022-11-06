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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useActions */ \"./app/hooks/useActions.ts\");\n/* harmony import */ var _hooks_useTypedSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useTypedSelector */ \"./app/hooks/useTypedSelector.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ProductItem = function(param) {\n    var product = param.product;\n    _s();\n    var addItem = (0,_hooks_useActions__WEBPACK_IMPORTED_MODULE_2__.useActions)().addItem;\n    var cart = (0,_hooks_useTypedSelector__WEBPACK_IMPORTED_MODULE_3__.useTypedSelector)(function(state) {\n        return state;\n    }).cart;\n    var isExistsInCart = cart.some(function(p) {\n        return p.id === product.id;\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: '48%',\n            backgroundColor: '#E5F0EA'\n        },\n        className: \"rounded-xl mb-5 p-3 shadow-sm\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: product.image,\n                    alt: product.title,\n                    width: \"100\",\n                    height: \"143\",\n                    className: \"rounded-xl\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\draco\\\\OneDrive\\\\Документы\\\\Project\\\\redux-shop\\\\app\\\\components\\\\screens\\\\home\\\\ProductItem.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\draco\\\\OneDrive\\\\Документы\\\\Project\\\\redux-shop\\\\app\\\\components\\\\screens\\\\home\\\\ProductItem.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between mt-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-green-900 font-medium text-sm overflow-hidden text-ellipsis whitespace-nowrap mr-5\",\n                        children: product.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\draco\\\\OneDrive\\\\Документы\\\\Project\\\\redux-shop\\\\app\\\\components\\\\screens\\\\home\\\\ProductItem.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-sm text-green-600\",\n                        children: [\n                            \"$\",\n                            product.price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\draco\\\\OneDrive\\\\Документы\\\\Project\\\\redux-shop\\\\app\\\\components\\\\screens\\\\home\\\\ProductItem.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\draco\\\\OneDrive\\\\Документы\\\\Project\\\\redux-shop\\\\app\\\\components\\\\screens\\\\home\\\\ProductItem.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"text-sm mt-3 bg-white rounded-xl w-3/4 mx-auto block p-1 hover:bg-green-200\",\n                onClick: function() {\n                    return !isExistsInCart && addItem(product);\n                },\n                children: isExistsInCart ? 'Добавлено в корзину' : 'Добавить в корзину'\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\draco\\\\OneDrive\\\\Документы\\\\Project\\\\redux-shop\\\\app\\\\components\\\\screens\\\\home\\\\ProductItem.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\draco\\\\OneDrive\\\\Документы\\\\Project\\\\redux-shop\\\\app\\\\components\\\\screens\\\\home\\\\ProductItem.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, _this));\n};\n_s(ProductItem, \"Gxizn1TZenCfW9yHDdt+9w8Fsk8=\", false, function() {\n    return [\n        _hooks_useActions__WEBPACK_IMPORTED_MODULE_2__.useActions,\n        _hooks_useTypedSelector__WEBPACK_IMPORTED_MODULE_3__.useTypedSelector\n    ];\n});\n_c = ProductItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductItem);\nvar _c;\n$RefreshReg$(_c, \"ProductItem\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9zY3JlZW5zL2hvbWUvUHJvZHVjdEl0ZW0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE4QjtBQUVzQjtBQUNZOzs7QUFHaEUsR0FBSyxDQUFDRyxXQUFXLEdBQThCLFFBQVEsUUFBTyxDQUFDO1FBQWRDLE9BQU8sU0FBUEEsT0FBTzs7SUFDdEQsR0FBSyxDQUFFQyxPQUFPLEdBQUlKLDZEQUFVLEdBQXJCSSxPQUFPO0lBRWQsR0FBSyxDQUFFQyxJQUFJLEdBQUlKLHlFQUFnQixDQUFDSyxRQUFRLENBQVJBLEtBQUs7UUFBSUEsTUFBTSxDQUFOQSxLQUFLO09BQXZDRCxJQUFJO0lBRVgsR0FBSyxDQUFDRSxjQUFjLEdBQUdGLElBQUksQ0FBQ0csSUFBSSxDQUFDQyxRQUFRLENBQVJBLENBQUM7UUFBSUEsTUFBTSxDQUFOQSxDQUFDLENBQUNDLEVBQUUsS0FBS1AsT0FBTyxDQUFDTyxFQUFFOztJQUV6RCxNQUFNLDZFQUNIQyxDQUFHO1FBQ0ZDLEtBQUssRUFBRSxDQUFDQztZQUFBQSxLQUFLLEVBQUUsQ0FBSztZQUFFQyxlQUFlLEVBQUUsQ0FBUztRQUFBLENBQUM7UUFDakRDLFNBQVMsRUFBQyxDQUErQjs7d0ZBRXhDSixDQUFHO2dCQUFDSSxTQUFTLEVBQUMsQ0FBYTtzR0FDekJoQixtREFBSztvQkFDSmlCLEdBQUcsRUFBRWIsT0FBTyxDQUFDYyxLQUFLO29CQUNsQkMsR0FBRyxFQUFFZixPQUFPLENBQUNnQixLQUFLO29CQUNsQk4sS0FBSyxFQUFDLENBQUs7b0JBQ1hPLE1BQU0sRUFBQyxDQUFLO29CQUNaTCxTQUFTLEVBQUMsQ0FBWTs7Ozs7Ozs7Ozs7d0ZBR3pCSixDQUFHO2dCQUFDSSxTQUFTLEVBQUMsQ0FBd0M7O2dHQUNwREosQ0FBRzt3QkFBQ0ksU0FBUyxFQUFDLENBQXlGO2tDQUNyR1osT0FBTyxDQUFDZ0IsS0FBSzs7Ozs7O2dHQUVmUixDQUFHO3dCQUFDSSxTQUFTLEVBQUMsQ0FBd0I7OzRCQUFDLENBQUM7NEJBQUNaLE9BQU8sQ0FBQ2tCLEtBQUs7Ozs7Ozs7Ozs7Ozs7d0ZBRXhEQyxDQUFNO2dCQUFDUCxTQUFTLEVBQUMsQ0FBNkU7Z0JBQ3ZGUSxPQUFPLEVBQUUsUUFBUTtvQkFBRixNQUFNLEVBQUxoQixjQUFjLElBQUlILE9BQU8sQ0FBQ0QsT0FBTzs7MEJBQ3RESSxjQUFjLEdBQUcsQ0FBcUIsd0NBQW9CLENBQW9COzs7Ozs7Ozs7Ozs7QUFJdEUsQ0FBQztHQWpDWkwsV0FBVzs7UUFDR0YseURBQVU7UUFFYkMscUVBQWdCOzs7S0FIM0JDLFdBQVc7QUFtQ0EsK0RBQWVBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvc2NyZWVucy9ob21lL1Byb2R1Y3RJdGVtLnRzeD85NDYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHtGQ30gZnJvbSAncmVhY3QnXG5pbXBvcnQge3VzZUFjdGlvbnN9IGZyb20gXCIuLi8uLi8uLi9ob29rcy91c2VBY3Rpb25zXCI7XG5pbXBvcnQge3VzZVR5cGVkU2VsZWN0b3J9IGZyb20gXCIuLi8uLi8uLi9ob29rcy91c2VUeXBlZFNlbGVjdG9yXCI7XG5pbXBvcnQge0lQcm9kdWN0fSBmcm9tIFwiLi4vLi4vLi4vc3RvcmUvcHJvZHVjdHMvcHJvZHVjdC50eXBlc1wiO1xuXG5jb25zdCBQcm9kdWN0SXRlbTogRkM8eyBwcm9kdWN0OiBJUHJvZHVjdCB9PiA9ICh7cHJvZHVjdH0pID0+IHtcbiAgY29uc3Qge2FkZEl0ZW19ID0gdXNlQWN0aW9ucygpXG5cbiAgY29uc3Qge2NhcnR9ID0gdXNlVHlwZWRTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZSlcblxuICBjb25zdCBpc0V4aXN0c0luQ2FydCA9IGNhcnQuc29tZShwID0+IHAuaWQgPT09IHByb2R1Y3QuaWQpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e3dpZHRoOiAnNDglJywgYmFja2dyb3VuZENvbG9yOiAnI0U1RjBFQSd9fVxuICAgICAgY2xhc3NOYW1lPSdyb3VuZGVkLXhsIG1iLTUgcC0zIHNoYWRvdy1zbSdcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBzcmM9e3Byb2R1Y3QuaW1hZ2V9XG4gICAgICAgICAgYWx0PXtwcm9kdWN0LnRpdGxlfVxuICAgICAgICAgIHdpZHRoPScxMDAnXG4gICAgICAgICAgaGVpZ2h0PScxNDMnXG4gICAgICAgICAgY2xhc3NOYW1lPSdyb3VuZGVkLXhsJ1xuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG10LTMnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1ncmVlbi05MDAgZm9udC1tZWRpdW0gdGV4dC1zbSBvdmVyZmxvdy1oaWRkZW4gdGV4dC1lbGxpcHNpcyB3aGl0ZXNwYWNlLW5vd3JhcCBtci01Jz5cbiAgICAgICAgICB7cHJvZHVjdC50aXRsZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXNtIHRleHQtZ3JlZW4tNjAwJz4ke3Byb2R1Y3QucHJpY2V9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd0ZXh0LXNtIG10LTMgYmctd2hpdGUgcm91bmRlZC14bCB3LTMvNCBteC1hdXRvIGJsb2NrIHAtMSBob3ZlcjpiZy1ncmVlbi0yMDAnXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+ICFpc0V4aXN0c0luQ2FydCAmJiBhZGRJdGVtKHByb2R1Y3QpfT5cbiAgICAgICAge2lzRXhpc3RzSW5DYXJ0ID8gJ9CU0L7QsdCw0LLQu9C10L3QviDQsiDQutC+0YDQt9C40L3RgycgOiAn0JTQvtCx0LDQstC40YLRjCDQsiDQutC+0YDQt9C40L3Rgyd9XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0SXRlbVxuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlQWN0aW9ucyIsInVzZVR5cGVkU2VsZWN0b3IiLCJQcm9kdWN0SXRlbSIsInByb2R1Y3QiLCJhZGRJdGVtIiwiY2FydCIsInN0YXRlIiwiaXNFeGlzdHNJbkNhcnQiLCJzb21lIiwicCIsImlkIiwiZGl2Iiwic3R5bGUiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImNsYXNzTmFtZSIsInNyYyIsImltYWdlIiwiYWx0IiwidGl0bGUiLCJoZWlnaHQiLCJwcmljZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/components/screens/home/ProductItem.tsx\n");

/***/ })

});