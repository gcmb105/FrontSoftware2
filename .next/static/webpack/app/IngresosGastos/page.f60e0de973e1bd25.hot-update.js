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

/***/ "(app-client)/./src/components/CombinedComponent.jsx":
/*!**********************************************!*\
  !*** ./src/components/CombinedComponent.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/ProgressBar */ \"(app-client)/./node_modules/react-bootstrap/esm/ProgressBar.js\");\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Form */ \"(app-client)/./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var _SaldoActual__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SaldoActual */ \"(app-client)/./src/components/SaldoActual.jsx\");\n/* harmony import */ var _GastoActual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GastoActual */ \"(app-client)/./src/components/GastoActual.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst saldoActualValue = _SaldoActual__WEBPACK_IMPORTED_MODULE_2__[\"default\"].saldoActualValue;\nconst gastoActualValue = _GastoActual__WEBPACK_IMPORTED_MODULE_3__[\"default\"].gastoActualValue;\nfunction CombinedComponent() {\n    _s();\n    const [rangeValue, setRangeValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [maxValue, setMaxValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(200); // Estado para el valor máximo\n    const maxLimit = saldoActualValue - gastoActualValue;\n    const handleRangeChange = (event)=>{\n        const value = parseInt(event.target.value, 10);\n        setRangeValue(value);\n    };\n    const handleMaxValueChange = (event)=>{\n        const value = parseInt(event.target.value, 10);\n        setMaxValue(value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Group, {\n                className: \"mb-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Label, {\n                        children: \"Max Value\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\n04925\\\\Downloads\\\\123\\\\FrontSoftware2\\\\src\\\\components\\\\CombinedComponent.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Control, {\n                        type: \"number\",\n                        value: maxLimit,\n                        onChange: handleMaxValueChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\n04925\\\\Downloads\\\\123\\\\FrontSoftware2\\\\src\\\\components\\\\CombinedComponent.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\n04925\\\\Downloads\\\\123\\\\FrontSoftware2\\\\src\\\\components\\\\CombinedComponent.jsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Group, {\n                className: \"mb-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Label, {\n                        children: \"Range\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\n04925\\\\Downloads\\\\123\\\\FrontSoftware2\\\\src\\\\components\\\\CombinedComponent.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Range, {\n                        value: rangeValue,\n                        onChange: handleRangeChange,\n                        max: maxValue\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\n04925\\\\Downloads\\\\123\\\\FrontSoftware2\\\\src\\\\components\\\\CombinedComponent.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\n04925\\\\Downloads\\\\123\\\\FrontSoftware2\\\\src\\\\components\\\\CombinedComponent.jsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                now: rangeValue,\n                label: \"\".concat(rangeValue),\n                max: maxLimit\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\n04925\\\\Downloads\\\\123\\\\FrontSoftware2\\\\src\\\\components\\\\CombinedComponent.jsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\n04925\\\\Downloads\\\\123\\\\FrontSoftware2\\\\src\\\\components\\\\CombinedComponent.jsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(CombinedComponent, \"RzRYaBrKj+ib0qPJcr0BrjdnW6U=\");\n_c = CombinedComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CombinedComponent);\nvar _c;\n$RefreshReg$(_c, \"CombinedComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvQ29tYmluZWRDb21wb25lbnQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0M7QUFDYztBQUNkO0FBRUE7QUFDQTtBQUV4QyxNQUFNTSxtQkFBbUJGLHFFQUE0QjtBQUNyRCxNQUFNRyxtQkFBbUJGLHFFQUE0QjtBQUVyRCxTQUFTRyxvQkFBb0I7O0lBQzNCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNVLFVBQVVDLFlBQVksR0FBR1gsK0NBQVFBLENBQUMsTUFBTSw4QkFBOEI7SUFFN0UsTUFBTVksV0FBV1AsbUJBQW1CQztJQUVwQyxNQUFNTyxvQkFBb0IsQ0FBQ0MsUUFBVTtRQUNuQyxNQUFNQyxRQUFRQyxTQUFTRixNQUFNRyxNQUFNLENBQUNGLEtBQUssRUFBRTtRQUMzQ04sY0FBY007SUFDaEI7SUFFQSxNQUFNRyx1QkFBdUIsQ0FBQ0osUUFBVTtRQUN0QyxNQUFNQyxRQUFRQyxTQUFTRixNQUFNRyxNQUFNLENBQUNGLEtBQUssRUFBRTtRQUMzQ0osWUFBWUk7SUFDZDtJQUVBLHFCQUNFLDhEQUFDSTs7MEJBRUcsOERBQUNqQixrRUFBVTtnQkFBQ21CLFdBQVU7O2tDQUNkLDhEQUFDbkIsa0VBQVU7a0NBQUM7Ozs7OztrQ0FDWiw4REFBQ0Esb0VBQVk7d0JBQ2JzQixNQUFLO3dCQUNMVCxPQUFPSDt3QkFDUGEsVUFBVVA7Ozs7Ozs7Ozs7OzswQkFJcEIsOERBQUNoQixrRUFBVTtnQkFBQ21CLFdBQVU7O2tDQUNwQiw4REFBQ25CLGtFQUFVO2tDQUFDOzs7Ozs7a0NBQ1osOERBQUNBLGtFQUFVO3dCQUNUYSxPQUFPUDt3QkFDUGlCLFVBQVVaO3dCQUNWYyxLQUFLakI7Ozs7Ozs7Ozs7OzswQkFNVCw4REFBQ1QsbUVBQVdBO2dCQUFDMkIsS0FBS3BCO2dCQUFZcUIsT0FBTyxHQUFjLE9BQVhyQjtnQkFBY21CLEtBQUtmOzs7Ozs7Ozs7Ozs7QUFHakU7R0ExQ1NMO0tBQUFBO0FBNENULCtEQUFlQSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29tYmluZWRDb21wb25lbnQuanN4P2RiMjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Byb2dyZXNzQmFyJztcclxuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xyXG5cclxuaW1wb3J0IFNhbGRvQWN0dWFsIGZyb20gJy4vU2FsZG9BY3R1YWwnO1xyXG5pbXBvcnQgR2FzdG9BY3R1YWwgZnJvbSAnLi9HYXN0b0FjdHVhbCc7XHJcblxyXG5jb25zdCBzYWxkb0FjdHVhbFZhbHVlID0gU2FsZG9BY3R1YWwuc2FsZG9BY3R1YWxWYWx1ZTtcclxuY29uc3QgZ2FzdG9BY3R1YWxWYWx1ZSA9IEdhc3RvQWN0dWFsLmdhc3RvQWN0dWFsVmFsdWU7XHJcblxyXG5mdW5jdGlvbiBDb21iaW5lZENvbXBvbmVudCgpIHtcclxuICBjb25zdCBbcmFuZ2VWYWx1ZSwgc2V0UmFuZ2VWYWx1ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbbWF4VmFsdWUsIHNldE1heFZhbHVlXSA9IHVzZVN0YXRlKDIwMCk7IC8vIEVzdGFkbyBwYXJhIGVsIHZhbG9yIG3DoXhpbW9cclxuXHJcbiAgY29uc3QgbWF4TGltaXQgPSBzYWxkb0FjdHVhbFZhbHVlIC0gZ2FzdG9BY3R1YWxWYWx1ZTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmFuZ2VDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IHZhbHVlID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlLCAxMCk7XHJcbiAgICBzZXRSYW5nZVZhbHVlKHZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVNYXhWYWx1ZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBwYXJzZUludChldmVudC50YXJnZXQudmFsdWUsIDEwKTtcclxuICAgIHNldE1heFZhbHVlKHZhbHVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuXHJcbiAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+TWF4IFZhbHVlPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bWF4TGltaXR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTWF4VmFsdWVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgPEZvcm0uTGFiZWw+UmFuZ2U8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgPEZvcm0uUmFuZ2VcclxuICAgICAgICAgIHZhbHVlPXtyYW5nZVZhbHVlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVJhbmdlQ2hhbmdlfVxyXG4gICAgICAgICAgbWF4PXttYXhWYWx1ZX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgIFxyXG4gICAgICBcclxuXHJcbiAgICAgIDxQcm9ncmVzc0JhciBub3c9e3JhbmdlVmFsdWV9IGxhYmVsPXtgJHtyYW5nZVZhbHVlfWB9IG1heD17bWF4TGltaXR9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21iaW5lZENvbXBvbmVudDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJQcm9ncmVzc0JhciIsIkZvcm0iLCJTYWxkb0FjdHVhbCIsIkdhc3RvQWN0dWFsIiwic2FsZG9BY3R1YWxWYWx1ZSIsImdhc3RvQWN0dWFsVmFsdWUiLCJDb21iaW5lZENvbXBvbmVudCIsInJhbmdlVmFsdWUiLCJzZXRSYW5nZVZhbHVlIiwibWF4VmFsdWUiLCJzZXRNYXhWYWx1ZSIsIm1heExpbWl0IiwiaGFuZGxlUmFuZ2VDaGFuZ2UiLCJldmVudCIsInZhbHVlIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJoYW5kbGVNYXhWYWx1ZUNoYW5nZSIsImRpdiIsIkdyb3VwIiwiY2xhc3NOYW1lIiwiTGFiZWwiLCJDb250cm9sIiwidHlwZSIsIm9uQ2hhbmdlIiwiUmFuZ2UiLCJtYXgiLCJub3ciLCJsYWJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/components/CombinedComponent.jsx\n"));

/***/ })

});