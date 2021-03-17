webpackHotUpdate_N_E("pages/register",{

/***/ "./src/pages/register.tsx":
/*!********************************!*\
  !*** ./src/pages/register.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Web_Development_GraphQL_lireddit_apollo_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Web_Development_GraphQL_lireddit_apollo_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_Web_Development_GraphQL_lireddit_apollo_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_Web_Development_GraphQL_lireddit_apollo_web_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_Web_Development_GraphQL_lireddit_apollo_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _chakra_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/button */ "./node_modules/@chakra-ui/button/dist/esm/index.js");
/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/layout */ "./node_modules/@chakra-ui/layout/dist/esm/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_InputField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/InputField */ "./src/components/InputField.tsx");
/* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Wrapper */ "./src/components/Wrapper.tsx");
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../generated/graphql */ "./src/generated/graphql.tsx");
/* harmony import */ var _utils_toErrorMap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/toErrorMap */ "./src/utils/toErrorMap.ts");





var _jsxFileName = "D:\\Web Development\\GraphQL\\lireddit (apollo)\\web\\src\\pages\\register.tsx",
    _this = undefined,
    _s = $RefreshSig$();










var Register = function Register() {
  _s();

  var _useRegisterMutation = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_10__["useRegisterMutation"])(),
      _useRegisterMutation2 = Object(D_Web_Development_GraphQL_lireddit_apollo_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useRegisterMutation, 1),
      register = _useRegisterMutation2[0];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Wrapper__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "small",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_6__["Formik"], {
      initialValues: {
        username: '',
        email: '',
        password: ''
      },
      onSubmit: /*#__PURE__*/function () {
        var _ref2 = Object(D_Web_Development_GraphQL_lireddit_apollo_web_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_Web_Development_GraphQL_lireddit_apollo_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(values, _ref) {
          var _response$data, _response$data2;

          var setErrors, response;
          return D_Web_Development_GraphQL_lireddit_apollo_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  setErrors = _ref.setErrors;
                  _context.next = 3;
                  return register({
                    variables: {
                      options: values
                    },
                    update: function update(cache, _ref3) {
                      var data = _ref3.data;
                      cache.writeQuery({
                        query: _generated_graphql__WEBPACK_IMPORTED_MODULE_10__["MeDocument"],
                        data: {
                          __typename: 'Query',
                          me: data === null || data === void 0 ? void 0 : data.register.user
                        }
                      });
                    }
                  });

                case 3:
                  response = _context.sent;

                  if ((_response$data = response.data) !== null && _response$data !== void 0 && _response$data.register.errors) {
                    setErrors(Object(_utils_toErrorMap__WEBPACK_IMPORTED_MODULE_11__["toErrorMap"])(response.data.register.errors));
                  } else if ((_response$data2 = response.data) !== null && _response$data2 !== void 0 && _response$data2.register.user) {
                    // worked
                    router.replace('/');
                  }

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x, _x2) {
          return _ref2.apply(this, arguments);
        };
      }(),
      children: function children(_ref4) {
        var isSubmitting = _ref4.isSubmitting;
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_6__["Form"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_5__["Box"], {
            mt: 4,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_InputField__WEBPACK_IMPORTED_MODULE_8__["default"], {
              label: "Username",
              name: "username"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_5__["Box"], {
            mt: 4,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_InputField__WEBPACK_IMPORTED_MODULE_8__["default"], {
              label: "Email",
              name: "email",
              type: "email"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_5__["Box"], {
            mt: 4,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_InputField__WEBPACK_IMPORTED_MODULE_8__["default"], {
              label: "Password",
              name: "password",
              type: "password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            type: "submit",
            colorScheme: "teal",
            mt: 4,
            isLoading: isSubmitting,
            children: "Register"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, _this);
};

_s(Register, "ddLK0/nSZ88s9dnhWsFncWP93QE=", false, function () {
  return [_generated_graphql__WEBPACK_IMPORTED_MODULE_10__["useRegisterMutation"], next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"]];
});

_c = Register;
/* harmony default export */ __webpack_exports__["default"] = (Register);

var _c;

$RefreshReg$(_c, "Register");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/utils/toErrorMap.ts":
/*!*********************************!*\
  !*** ./src/utils/toErrorMap.ts ***!
  \*********************************/
/*! exports provided: toErrorMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toErrorMap", function() { return toErrorMap; });
var toErrorMap = function toErrorMap(errors) {
  var errorMap = {};
  errors.forEach(function (_ref) {
    var field = _ref.field,
        message = _ref.message;
    errorMap[field] = message;
  });
  return errorMap;
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlZ2lzdGVyLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL3RvRXJyb3JNYXAudHMiXSwibmFtZXMiOlsiUmVnaXN0ZXIiLCJ1c2VSZWdpc3Rlck11dGF0aW9uIiwicmVnaXN0ZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VybmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJ2YWx1ZXMiLCJzZXRFcnJvcnMiLCJ2YXJpYWJsZXMiLCJvcHRpb25zIiwidXBkYXRlIiwiY2FjaGUiLCJkYXRhIiwid3JpdGVRdWVyeSIsInF1ZXJ5IiwiTWVEb2N1bWVudCIsIl9fdHlwZW5hbWUiLCJtZSIsInVzZXIiLCJyZXNwb25zZSIsImVycm9ycyIsInRvRXJyb3JNYXAiLCJyZXBsYWNlIiwiaXNTdWJtaXR0aW5nIiwiZXJyb3JNYXAiLCJmb3JFYWNoIiwiZmllbGQiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLDZCQUNGQywrRUFBbUIsRUFEakI7QUFBQTtBQUFBLE1BQ2RDLFFBRGM7O0FBRXJCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxzQkFDRSxxRUFBQywyREFBRDtBQUFTLFdBQU8sRUFBQyxPQUFqQjtBQUFBLDJCQUNFLHFFQUFDLDZDQUFEO0FBQ0UsbUJBQWEsRUFBRTtBQUFFQyxnQkFBUSxFQUFFLEVBQVo7QUFBZ0JDLGFBQUssRUFBRSxFQUF2QjtBQUEyQkMsZ0JBQVEsRUFBRTtBQUFyQyxPQURqQjtBQUVFLGNBQVE7QUFBQSw2VkFBRSxpQkFBT0MsTUFBUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUJDLDJCQUFqQixRQUFpQkEsU0FBakI7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QXFCO0FBQUEsUUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQ3JDSCxZQUFRLENBQUNFLEtBQUQsQ0FBUixHQUFrQkMsT0FBbEI7QUFDRCxHQUZEO0FBSUEsU0FBT0gsUUFBUDtBQUNELENBUk0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVnaXN0ZXIuOGU2ZjY2MDcwM2YwMjRiZjVjMTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BjaGFrcmEtdWkvYnV0dG9uJztcclxuaW1wb3J0IHsgQm94IH0gZnJvbSAnQGNoYWtyYS11aS9sYXlvdXQnO1xyXG5pbXBvcnQgeyBGb3JtLCBGb3JtaWsgfSBmcm9tICdmb3JtaWsnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gJy4uL2NvbXBvbmVudHMvSW5wdXRGaWVsZCc7XHJcbmltcG9ydCBXcmFwcGVyIGZyb20gJy4uL2NvbXBvbmVudHMvV3JhcHBlcic7XHJcbmltcG9ydCB7IE1lRG9jdW1lbnQsIE1lUXVlcnksIHVzZVJlZ2lzdGVyTXV0YXRpb24gfSBmcm9tICcuLi9nZW5lcmF0ZWQvZ3JhcGhxbCc7XHJcbmltcG9ydCB7IHRvRXJyb3JNYXAgfSBmcm9tICcuLi91dGlscy90b0Vycm9yTWFwJztcclxuXHJcbmNvbnN0IFJlZ2lzdGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtyZWdpc3Rlcl0gPSB1c2VSZWdpc3Rlck11dGF0aW9uKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlciB2YXJpYW50PSdzbWFsbCc+XHJcbiAgICAgIDxGb3JtaWtcclxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7IHVzZXJuYW1lOiAnJywgZW1haWw6ICcnLCBwYXNzd29yZDogJycgfX1cclxuICAgICAgICBvblN1Ym1pdD17YXN5bmMgKHZhbHVlcywgeyBzZXRFcnJvcnMgfSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZWdpc3Rlcih7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgIG9wdGlvbnM6IHZhbHVlcyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdXBkYXRlOiAoY2FjaGUsIHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgY2FjaGUud3JpdGVRdWVyeTxNZVF1ZXJ5Pih7XHJcbiAgICAgICAgICAgICAgICBxdWVyeTogTWVEb2N1bWVudCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgX190eXBlbmFtZTogJ1F1ZXJ5JyxcclxuICAgICAgICAgICAgICAgICAgbWU6IGRhdGE/LnJlZ2lzdGVyLnVzZXIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YT8ucmVnaXN0ZXIuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgIHNldEVycm9ycyh0b0Vycm9yTWFwKHJlc3BvbnNlLmRhdGEucmVnaXN0ZXIuZXJyb3JzKSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLmRhdGE/LnJlZ2lzdGVyLnVzZXIpIHtcclxuICAgICAgICAgICAgLy8gd29ya2VkXHJcbiAgICAgICAgICAgIHJvdXRlci5yZXBsYWNlKCcvJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgeyh7IGlzU3VibWl0dGluZyB9KSA9PiAoXHJcbiAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgPEJveCBtdD17NH0+XHJcbiAgICAgICAgICAgICAgPElucHV0RmllbGQgbGFiZWw9J1VzZXJuYW1lJyBuYW1lPSd1c2VybmFtZScgLz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxCb3ggbXQ9ezR9PlxyXG4gICAgICAgICAgICAgIDxJbnB1dEZpZWxkIGxhYmVsPSdFbWFpbCcgbmFtZT0nZW1haWwnIHR5cGU9J2VtYWlsJyAvPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPEJveCBtdD17NH0+XHJcbiAgICAgICAgICAgICAgPElucHV0RmllbGQgbGFiZWw9J1Bhc3N3b3JkJyBuYW1lPSdwYXNzd29yZCcgdHlwZT0ncGFzc3dvcmQnIC8+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9J3N1Ym1pdCcgY29sb3JTY2hlbWU9J3RlYWwnIG10PXs0fSBpc0xvYWRpbmc9e2lzU3VibWl0dGluZ30+XHJcbiAgICAgICAgICAgICAgUmVnaXN0ZXJcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Gb3JtaWs+XHJcbiAgICA8L1dyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyO1xyXG4iLCJpbXBvcnQgeyBGaWVsZEVycm9yIH0gZnJvbSAnLi4vZ2VuZXJhdGVkL2dyYXBocWwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRvRXJyb3JNYXAgPSAoZXJyb3JzOiBGaWVsZEVycm9yW10pID0+IHtcclxuICBjb25zdCBlcnJvck1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xyXG5cclxuICBlcnJvcnMuZm9yRWFjaCgoeyBmaWVsZCwgbWVzc2FnZSB9KSA9PiB7XHJcbiAgICBlcnJvck1hcFtmaWVsZF0gPSBtZXNzYWdlO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gZXJyb3JNYXA7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=