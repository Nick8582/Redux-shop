/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./app/store/cart/cart.slice.ts":
/*!**************************************!*\
  !*** ./app/store/cart/cart.slice.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cardSlice\": () => (/* binding */ cardSlice),\n/* harmony export */   \"cartReducer\": () => (/* binding */ cartReducer),\n/* harmony export */   \"cartActions\": () => (/* binding */ cartActions)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = [];\nconst cardSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: 'cart',\n    initialState,\n    reducers: {\n        addItem: (state, action)=>{\n            state.push(action.payload);\n        },\n        removeItem: (state, action)=>{\n            return state.filter((p)=>p.id !== action.payload.id\n            );\n        }\n    }\n});\nconst cartReducer = cardSlice.reducer;\nconst cartActions = cardSlice.actions;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc3RvcmUvY2FydC9jYXJ0LnNsaWNlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTJEO0FBRzNELEtBQUssQ0FBQ0MsWUFBWSxHQUFlLENBQUMsQ0FBQztBQUU1QixLQUFLLENBQUNDLFNBQVMsR0FBR0YsNkRBQVcsQ0FBQyxDQUFDO0lBQ3BDRyxJQUFJLEVBQUUsQ0FBTTtJQUNaRixZQUFZO0lBQ1pHLFFBQVEsRUFBRSxDQUFDO1FBQ1RDLE9BQU8sR0FBR0MsS0FBSyxFQUFFQyxNQUErQixHQUFLLENBQUM7WUFDcERELEtBQUssQ0FBQ0UsSUFBSSxDQUFDRCxNQUFNLENBQUNFLE9BQU87UUFDM0IsQ0FBQztRQUNEQyxVQUFVLEdBQUdKLEtBQUssRUFBRUMsTUFBcUMsR0FBSyxDQUFDO1lBQzdELE1BQU0sQ0FBQ0QsS0FBSyxDQUFDSyxNQUFNLEVBQUNDLENBQUMsR0FBSUEsQ0FBQyxDQUFDQyxFQUFFLEtBQUtOLE1BQU0sQ0FBQ0UsT0FBTyxDQUFDSSxFQUFFOztRQUNyRCxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFTSxLQUFLLENBQUNDLFdBQVcsR0FBR1osU0FBUyxDQUFDYSxPQUFPO0FBQ3JDLEtBQUssQ0FBQ0MsV0FBVyxHQUFHZCxTQUFTLENBQUNlLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWR1eC10b29sa2l0LWNyYXNoLWNvdXJzZS8uL2FwcC9zdG9yZS9jYXJ0L2NhcnQuc2xpY2UudHM/NDdmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9ufSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQge0lQcm9kdWN0fSBmcm9tIFwiLi4vcHJvZHVjdHMvcHJvZHVjdC50eXBlc1wiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBJUHJvZHVjdFtdID0gW11cclxuXHJcbmV4cG9ydCBjb25zdCBjYXJkU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogJ2NhcnQnLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgYWRkSXRlbTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248SVByb2R1Y3Q+KSA9PiB7XHJcbiAgICAgIHN0YXRlLnB1c2goYWN0aW9uLnBheWxvYWQpXHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlSXRlbTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248eyBpZDogbnVtYmVyIH0+KSA9PiB7XHJcbiAgICAgIHJldHVybiBzdGF0ZS5maWx0ZXIocCA9PiBwLmlkICE9PSBhY3Rpb24ucGF5bG9hZC5pZClcclxuICAgIH0sXHJcbiAgfSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBjYXJ0UmVkdWNlciA9IGNhcmRTbGljZS5yZWR1Y2VyXHJcbmV4cG9ydCBjb25zdCBjYXJ0QWN0aW9ucyA9IGNhcmRTbGljZS5hY3Rpb25zXHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsImNhcmRTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImFkZEl0ZW0iLCJzdGF0ZSIsImFjdGlvbiIsInB1c2giLCJwYXlsb2FkIiwicmVtb3ZlSXRlbSIsImZpbHRlciIsInAiLCJpZCIsImNhcnRSZWR1Y2VyIiwicmVkdWNlciIsImNhcnRBY3Rpb25zIiwiYWN0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/store/cart/cart.slice.ts\n");

/***/ }),

/***/ "./app/store/products/product.api.ts":
/*!*******************************************!*\
  !*** ./app/store/products/product.api.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"productApi\": () => (/* binding */ productApi),\n/* harmony export */   \"useGetProductsQuery\": () => (/* binding */ useGetProductsQuery)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_dist_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/dist/query/react */ \"@reduxjs/toolkit/dist/query/react\");\n/* harmony import */ var _reduxjs_toolkit_dist_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_dist_query_react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst productApi = (0,_reduxjs_toolkit_dist_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({\n    reducerPath: 'api/products',\n    baseQuery: (0,_reduxjs_toolkit_dist_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({\n        baseUrl: 'https://fakestoreapi.com/'\n    }),\n    endpoints: (build)=>({\n            getProducts: build.query({\n                query: (limit = 5)=>`products?limit=${limit}`\n            })\n        })\n});\nconst { useGetProductsQuery  } = productApi;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc3RvcmUvcHJvZHVjdHMvcHJvZHVjdC5hcGkudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEyRTtBQUdwRSxLQUFLLENBQUNFLFVBQVUsR0FBR0YsNEVBQVMsQ0FBQyxDQUFDO0lBQ25DRyxXQUFXLEVBQUUsQ0FBYztJQUMzQkMsU0FBUyxFQUFFSCxpRkFBYyxDQUFDLENBQUNJO1FBQUFBLE9BQU8sRUFBRSxDQUEyQjtJQUFBLENBQUM7SUFDaEVDLFNBQVMsR0FBRUMsS0FBSyxJQUFLLENBQUM7WUFDcEJDLFdBQVcsRUFBRUQsS0FBSyxDQUFDRSxLQUFLLENBQXFCLENBQUNBO2dCQUFBQSxLQUFLLEdBQUdDLEtBQUssR0FBRyxDQUFDLElBQU0sZUFBZSxFQUFFQSxLQUFLO1lBQUUsQ0FBQztRQUNoRyxDQUFDO0FBQ0gsQ0FBQztBQUVNLEtBQUssQ0FBQyxDQUFDQyxDQUFBQSxtQkFBbUIsR0FBQyxHQUFHVCxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVkdXgtdG9vbGtpdC1jcmFzaC1jb3Vyc2UvLi9hcHAvc3RvcmUvcHJvZHVjdHMvcHJvZHVjdC5hcGkudHM/YjcwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZUFwaSwgZmV0Y2hCYXNlUXVlcnl9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0L2Rpc3QvcXVlcnkvcmVhY3RcIjtcclxuaW1wb3J0IHtJUHJvZHVjdH0gZnJvbSBcIi4vcHJvZHVjdC50eXBlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2R1Y3RBcGkgPSBjcmVhdGVBcGkoe1xyXG4gIHJlZHVjZXJQYXRoOiAnYXBpL3Byb2R1Y3RzJyxcclxuICBiYXNlUXVlcnk6IGZldGNoQmFzZVF1ZXJ5KHtiYXNlVXJsOiAnaHR0cHM6Ly9mYWtlc3RvcmVhcGkuY29tLyd9KSxcclxuICBlbmRwb2ludHM6IGJ1aWxkID0+ICh7XHJcbiAgICBnZXRQcm9kdWN0czogYnVpbGQucXVlcnk8SVByb2R1Y3RbXSwgbnVtYmVyPih7cXVlcnk6IChsaW1pdCA9IDUpID0+IGBwcm9kdWN0cz9saW1pdD0ke2xpbWl0fWB9KVxyXG4gIH0pXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3Qge3VzZUdldFByb2R1Y3RzUXVlcnl9ID0gcHJvZHVjdEFwaVxyXG4iXSwibmFtZXMiOlsiY3JlYXRlQXBpIiwiZmV0Y2hCYXNlUXVlcnkiLCJwcm9kdWN0QXBpIiwicmVkdWNlclBhdGgiLCJiYXNlUXVlcnkiLCJiYXNlVXJsIiwiZW5kcG9pbnRzIiwiYnVpbGQiLCJnZXRQcm9kdWN0cyIsInF1ZXJ5IiwibGltaXQiLCJ1c2VHZXRQcm9kdWN0c1F1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/store/products/product.api.ts\n");

/***/ }),

/***/ "./app/store/store.ts":
/*!****************************!*\
  !*** ./app/store/store.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _products_product_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products/product.api */ \"./app/store/products/product.api.ts\");\n/* harmony import */ var _cart_cart_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart/cart.slice */ \"./app/store/cart/cart.slice.ts\");\n\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        [_products_product_api__WEBPACK_IMPORTED_MODULE_1__.productApi.reducerPath]: _products_product_api__WEBPACK_IMPORTED_MODULE_1__.productApi.reducer,\n        cart: _cart_cart_slice__WEBPACK_IMPORTED_MODULE_2__.cartReducer\n    },\n    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(_products_product_api__WEBPACK_IMPORTED_MODULE_1__.productApi.middleware)\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc3RvcmUvc3RvcmUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBK0M7QUFDRTtBQUNKO0FBRXRDLEtBQUssQ0FBQ0csS0FBSyxHQUFHSCxnRUFBYyxDQUFDLENBQUM7SUFDbkNJLE9BQU8sRUFBRSxDQUFDO1NBQUNILHlFQUFzQixHQUFHQSxxRUFBa0I7UUFBRUssSUFBSSxFQUFFSix5REFBVztJQUFBLENBQUM7SUFDMUVLLFVBQVUsR0FBRUMsb0JBQW9CLEdBQUlBLG9CQUFvQixHQUFHQyxNQUFNLENBQUNSLHdFQUFxQjtBQUN6RixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVkdXgtdG9vbGtpdC1jcmFzaC1jb3Vyc2UvLi9hcHAvc3RvcmUvc3RvcmUudHM/NmNjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NvbmZpZ3VyZVN0b3JlfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQge3Byb2R1Y3RBcGl9IGZyb20gXCIuL3Byb2R1Y3RzL3Byb2R1Y3QuYXBpXCI7XHJcbmltcG9ydCB7Y2FydFJlZHVjZXJ9IGZyb20gXCIuL2NhcnQvY2FydC5zbGljZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xyXG4gIHJlZHVjZXI6IHtbcHJvZHVjdEFwaS5yZWR1Y2VyUGF0aF06IHByb2R1Y3RBcGkucmVkdWNlciwgY2FydDogY2FydFJlZHVjZXJ9LFxyXG4gIG1pZGRsZXdhcmU6IGdldERlZmF1bHRNaWRkbGV3YXJlID0+IGdldERlZmF1bHRNaWRkbGV3YXJlKCkuY29uY2F0KHByb2R1Y3RBcGkubWlkZGxld2FyZSksXHJcbn0pXHJcblxyXG5leHBvcnQgdHlwZSBUeXBlUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygc3RvcmUuZ2V0U3RhdGU+XHJcbiJdLCJuYW1lcyI6WyJjb25maWd1cmVTdG9yZSIsInByb2R1Y3RBcGkiLCJjYXJ0UmVkdWNlciIsInN0b3JlIiwicmVkdWNlciIsInJlZHVjZXJQYXRoIiwiY2FydCIsIm1pZGRsZXdhcmUiLCJnZXREZWZhdWx0TWlkZGxld2FyZSIsImNvbmNhdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/store/store.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/store/store */ \"./app/store/store.ts\");\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n        store: _app_store_store__WEBPACK_IMPORTED_MODULE_3__.store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"py-7 px-5\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\draco\\\\OneDrive\\\\Документы\\\\Project\\\\redux-shop\\\\pages\\\\_app.tsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\draco\\\\OneDrive\\\\Документы\\\\Project\\\\redux-shop\\\\pages\\\\_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\draco\\\\OneDrive\\\\Документы\\\\Project\\\\redux-shop\\\\pages\\\\_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBOEI7QUFFTTtBQUNJO1NBRS9CRSxLQUFLLENBQUMsQ0FBQ0MsQ0FBQUEsU0FBUyxHQUFFQyxTQUFTLEVBQVUsQ0FBQyxFQUFFLENBQUM7SUFDaEQsTUFBTSw2RUFDSEosaURBQVE7UUFBQ0MsS0FBSyxFQUFFQSxtREFBSzs4RkFDbkJJLENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQVc7a0dBQ3ZCSCxTQUFTO21CQUFLQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7O0FBS2hDLENBQUM7QUFFRCxpRUFBZUYsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlZHV4LXRvb2xraXQtY3Jhc2gtY291cnNlLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB0eXBlIHtBcHBQcm9wc30gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7c3RvcmV9IGZyb20gJy4uL2FwcC9zdG9yZS9zdG9yZSdcblxuZnVuY3Rpb24gTXlBcHAoe0NvbXBvbmVudCwgcGFnZVByb3BzfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdweS03IHB4LTUnPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L1Byb3ZpZGVyPlxuXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJuYW1lcyI6WyJQcm92aWRlciIsInN0b3JlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "@reduxjs/toolkit/dist/query/react":
/*!****************************************************!*\
  !*** external "@reduxjs/toolkit/dist/query/react" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit/dist/query/react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();