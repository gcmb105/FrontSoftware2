"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/IngresosGastos/page",{

/***/ "(app-client)/./src/Components/SaldoActual.jsx":
/*!****************************************!*\
  !*** ./src/Components/SaldoActual.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Form */ \"(app-client)/./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction SaldoActual() {\n    _s();\n    const [saldoValue, setSaldoValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(700);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Control, {\n                type: \"text\",\n                placeholder: \"SALDO ACTUAL\",\n                \"aria-label\": \"Disabled input example\",\n                disabled: true,\n                readOnly: true,\n                value: \"SALDO ACTUAL\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\n04925\\\\Downloads\\\\123\\\\FrontSoftware2\\\\src\\\\Components\\\\SaldoActual.jsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\n04925\\\\Downloads\\\\123\\\\FrontSoftware2\\\\src\\\\Components\\\\SaldoActual.jsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Control, {\n                type: \"text\",\n                placeholder: \"Disabled readonly input\",\n                \"aria-label\": \"Disabled input example\",\n                readOnly: true,\n                value: saldoValue\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\n04925\\\\Downloads\\\\123\\\\FrontSoftware2\\\\src\\\\Components\\\\SaldoActual.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(SaldoActual, \"rM2ajwxLP+CmDcNb9d4Qun4wlUM=\");\n_c = SaldoActual;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SaldoActual);\nvar _c;\n$RefreshReg$(_c, \"SaldoActual\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL0NvbXBvbmVudHMvU2FsZG9BY3R1YWwuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0M7QUFDQTtBQUN4QyxTQUFTRyxjQUFjOztJQUNyQixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR0gsK0NBQVFBLENBQUM7SUFDN0MscUJBQ0U7OzBCQUNFLDhEQUFDRixvRUFBWTtnQkFDWE8sTUFBSztnQkFDTEMsYUFBWTtnQkFDWkMsY0FBVztnQkFDWEMsUUFBUTtnQkFDUkMsUUFBUTtnQkFDUkMsT0FBTzs7Ozs7OzBCQUVULDhEQUFDQzs7Ozs7MEJBQ0QsOERBQUNiLG9FQUFZO2dCQUNYTyxNQUFLO2dCQUNMQyxhQUFZO2dCQUNaQyxjQUFXO2dCQUNYRSxRQUFRO2dCQUNSQyxPQUFPUjs7Ozs7Ozs7QUFJZjtHQXRCU0Q7S0FBQUE7QUF3QlQsK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvU2FsZG9BY3R1YWwuanN4PzBmYjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmZ1bmN0aW9uIFNhbGRvQWN0dWFsKCkge1xyXG4gIGNvbnN0IFtzYWxkb1ZhbHVlLCBzZXRTYWxkb1ZhbHVlXSA9IHVzZVN0YXRlKDcwMCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTQUxETyBBQ1RVQUxcIlxyXG4gICAgICAgIGFyaWEtbGFiZWw9XCJEaXNhYmxlZCBpbnB1dCBleGFtcGxlXCJcclxuICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgdmFsdWU9eydTQUxETyBBQ1RVQUwnfVxyXG4gICAgICAvPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIkRpc2FibGVkIHJlYWRvbmx5IGlucHV0XCJcclxuICAgICAgICBhcmlhLWxhYmVsPVwiRGlzYWJsZWQgaW5wdXQgZXhhbXBsZVwiXHJcbiAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICB2YWx1ZT17c2FsZG9WYWx1ZX1cclxuICAgICAgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNhbGRvQWN0dWFsOyJdLCJuYW1lcyI6WyJGb3JtIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIlNhbGRvQWN0dWFsIiwic2FsZG9WYWx1ZSIsInNldFNhbGRvVmFsdWUiLCJDb250cm9sIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYXJpYS1sYWJlbCIsImRpc2FibGVkIiwicmVhZE9ubHkiLCJ2YWx1ZSIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/Components/SaldoActual.jsx\n"));

/***/ })

});