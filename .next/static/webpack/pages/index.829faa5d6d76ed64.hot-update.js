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

/***/ "./components/Property.jsx":
/*!*********************************!*\
  !*** ./components/Property.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var millify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! millify */ \"./node_modules/millify/dist/millify.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar Property = function(param) {\n    var _property = param.property, coverPhoto = _property.coverPhoto, price = _property.price, rentFrequency = _property.rentFrequency, rooms = _property.rooms, title = _property.title, baths = _property.baths, area = _property.area, agency = _property.agency, isVerified = _property.isVerified, externalID = _property.externalID;\n    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: \"/property/\".concat(externalID),\n        passHref: true,\n        __source: {\n            fileName: \"/Users/agosh/Developer/real-estate-next.js/components/Property.jsx\",\n            lineNumber: 23,\n            columnNumber: 3\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n            flexWrap: \"wrap\",\n            w: \"420px\",\n            p: \"5\",\n            paddingTop: \"0\",\n            justifyContent: \"flex-start\",\n            cursor: \"pointer\",\n            __source: {\n                fileName: \"/Users/agosh/Developer/real-estate-next.js/components/Property.jsx\",\n                lineNumber: 24,\n                columnNumber: 5\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                __source: {\n                    fileName: \"/Users/agosh/Developer/real-estate-next.js/components/Property.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: coverPhoto ? coverPhoto.url : defaultImage,\n                    __source: {\n                        fileName: \"/Users/agosh/Developer/real-estate-next.js/components/Property.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    },\n                    __self: _this\n                })\n            })\n        })\n    });\n};\n_c = Property;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Property);\nvar _c;\n$RefreshReg$(_c, \"Property\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb3BlcnR5LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE0QjtBQUNFO0FBQzRCO0FBQ1o7QUFDSDtBQUNBO0FBQ2Q7O0FBRTdCLEdBQUssQ0FBQ1csUUFBUSxHQUFHLFFBQ1o7MEJBQUhDLFFBQVEsRUFDTkMsVUFBVSxhQUFWQSxVQUFVLEVBQ1ZDLEtBQUssYUFBTEEsS0FBSyxFQUNMQyxhQUFhLGFBQWJBLGFBQWEsRUFDYkMsS0FBSyxhQUFMQSxLQUFLLEVBQ0xDLEtBQUssYUFBTEEsS0FBSyxFQUNMQyxLQUFLLGFBQUxBLEtBQUssRUFDTEMsSUFBSSxhQUFKQSxJQUFJLEVBQ0pDLE1BQU0sYUFBTkEsTUFBTSxFQUNOQyxVQUFVLGFBQVZBLFVBQVUsRUFDVkMsVUFBVSxhQUFWQSxVQUFVO2tCQUdaLE1BQU1DLENBQUFBLHNEQUFBQSxDQUFMdkIsa0RBQUk7UUFBQ3VCLElBQUksRUFBRyxDQUFVLFlBQWEsT0FBWEQsVUFBVTtRQUFJRSxRQUFROzs7Ozs7O3VGQUM1Q3JCLGtEQUFJO1lBQ0hzQixRQUFRLEVBQUMsQ0FBTTtZQUNmQyxDQUFDLEVBQUMsQ0FBTztZQUNUQyxDQUFDLEVBQUMsQ0FBRztZQUNMQyxVQUFVLEVBQUMsQ0FBRztZQUNkQyxjQUFjLEVBQUMsQ0FBWTtZQUMzQkMsTUFBTSxFQUFDLENBQVM7Ozs7Ozs7MkZBQ2Y1QixpREFBRzs7Ozs7OzsrRkFDREQsbURBQUs7b0JBQUM4QixHQUFHLEVBQUVsQixVQUFVLEdBQUdBLFVBQVUsQ0FBQ21CLEdBQUcsR0FBR0MsWUFBWTs7Ozs7Ozs7Ozs7O0tBdkJ4RHRCLFFBQVE7QUE2QmQsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb3BlcnR5LmpzeD8wNzQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgeyBCb3gsIEZsZXgsIFRleHQsIEF2YXRhciB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHsgRmFCZWQsIEZhQmF0aCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcbmltcG9ydCB7IEJzR3JpZEZpbGwgfSBmcm9tICdyZWFjdC1pY29ucy9icyc7XG5pbXBvcnQgeyBHb1ZlcmlmaWVkIH0gZnJvbSAncmVhY3QtaWNvbnMvZ28nO1xuaW1wb3J0IG1pbGxpZnkgZnJvbSAnbWlsbGlmeSc7XG5cbmNvbnN0IFByb3BlcnR5ID0gKHtcbiAgcHJvcGVydHk6IHtcbiAgICBjb3ZlclBob3RvLFxuICAgIHByaWNlLFxuICAgIHJlbnRGcmVxdWVuY3ksXG4gICAgcm9vbXMsXG4gICAgdGl0bGUsXG4gICAgYmF0aHMsXG4gICAgYXJlYSxcbiAgICBhZ2VuY3ksXG4gICAgaXNWZXJpZmllZCxcbiAgICBleHRlcm5hbElELFxuICB9LFxufSkgPT4gKFxuICA8TGluayBocmVmPXtgL3Byb3BlcnR5LyR7ZXh0ZXJuYWxJRH1gfSBwYXNzSHJlZj5cbiAgICA8RmxleFxuICAgICAgZmxleFdyYXA9XCJ3cmFwXCJcbiAgICAgIHc9XCI0MjBweFwiXG4gICAgICBwPVwiNVwiXG4gICAgICBwYWRkaW5nVG9wPVwiMFwiXG4gICAgICBqdXN0aWZ5Q29udGVudD1cImZsZXgtc3RhcnRcIlxuICAgICAgY3Vyc29yPVwicG9pbnRlclwiPlxuICAgICAgPEJveD5cbiAgICAgICAgPEltYWdlIHNyYz17Y292ZXJQaG90byA/IGNvdmVyUGhvdG8udXJsIDogZGVmYXVsdEltYWdlfSAvPlxuICAgICAgPC9Cb3g+XG4gICAgPC9GbGV4PlxuICA8L0xpbms+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9wZXJ0eTtcbiJdLCJuYW1lcyI6WyJMaW5rIiwiSW1hZ2UiLCJCb3giLCJGbGV4IiwiVGV4dCIsIkF2YXRhciIsIkZhQmVkIiwiRmFCYXRoIiwiQnNHcmlkRmlsbCIsIkdvVmVyaWZpZWQiLCJtaWxsaWZ5IiwiUHJvcGVydHkiLCJwcm9wZXJ0eSIsImNvdmVyUGhvdG8iLCJwcmljZSIsInJlbnRGcmVxdWVuY3kiLCJyb29tcyIsInRpdGxlIiwiYmF0aHMiLCJhcmVhIiwiYWdlbmN5IiwiaXNWZXJpZmllZCIsImV4dGVybmFsSUQiLCJocmVmIiwicGFzc0hyZWYiLCJmbGV4V3JhcCIsInciLCJwIiwicGFkZGluZ1RvcCIsImp1c3RpZnlDb250ZW50IiwiY3Vyc29yIiwic3JjIiwidXJsIiwiZGVmYXVsdEltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Property.jsx\n");

/***/ })

});