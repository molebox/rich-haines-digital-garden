webpackHotUpdate_N_E("pages/blogs/search",{

/***/ "./src/components/ContentBox.js":
/*!**************************************!*\
  !*** ./src/components/ContentBox.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContentBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/esm/index.js");
var _jsxFileName = "D:\\HUNGRYBEARSTUDIO\\PERSONAL-SITE-2020\\richardhaines.dev\\src\\components\\ContentBox.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function ContentBox(_ref) {
  var _this = this;

  var blog = _ref.blog;

  var full = __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    position: "absolute",
    top: "5px",
    right: "0",
    boxSize: "50px",
    src: "full-grown.png)",
    alt: "A fully grown plant",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  });

  var mid = __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    position: "absolute",
    boxSize: "40px",
    top: "5px",
    right: "0",
    src: "mid-grown.png",
    alt: "A mid sized grown plant",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  });

  var baby = __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    position: "absolute",
    boxSize: "30px",
    top: "5px",
    right: "0",
    src: "baby-grown.png",
    alt: "A seedling plant",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  });

  var growth = function growth() {
    switch (blog.growth) {
      case 'full':
        return full;

      case 'mid':
        return mid;

      case 'baby':
        return baby;
    }
  };

  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    as: next_link__WEBPACK_IMPORTED_MODULE_1__["Link"],
    href: "/blog/".concat(blog.slug),
    _hover: {
      textDecor: 'none',
      bgColor: 'brand.crayola.100',
      borderRadius: '5px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    role: "group",
    maxW: ['300px', '1440px'],
    w: "100%",
    border: "solid 3px",
    borderColor: "brand.crayola.500",
    borderRadius: "5px",
    p: 8,
    position: "relative",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, growth(), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    fontFamily: "heading",
    _groupHover: {
      textDecor: 'underline'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, blog.title), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, blog.description)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    direction: ['column', 'row'],
    spacing: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, blog.tags.map(function (tag) {
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      fontWeight: 500,
      key: tag,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 15
      }
    }, "#", tag);
  })))));
}
_c = ContentBox;

var _c;

$RefreshReg$(_c, "ContentBox");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29udGVudEJveC5qcyJdLCJuYW1lcyI6WyJDb250ZW50Qm94IiwiYmxvZyIsImZ1bGwiLCJtaWQiLCJiYWJ5IiwiZ3Jvd3RoIiwiTmV4dExpbmsiLCJzbHVnIiwidGV4dERlY29yIiwiYmdDb2xvciIsImJvcmRlclJhZGl1cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0YWdzIiwibWFwIiwidGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxVQUFULE9BQThCO0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFROztBQUMzQyxNQUFNQyxJQUFJLEdBQ1IsTUFBQyxxREFBRDtBQUNFLFlBQVEsRUFBQyxVQURYO0FBRUUsT0FBRyxFQUFDLEtBRk47QUFHRSxTQUFLLEVBQUMsR0FIUjtBQUlFLFdBQU8sRUFBQyxNQUpWO0FBS0UsT0FBRyxFQUFDLGlCQUxOO0FBTUUsT0FBRyxFQUFDLHFCQU5OO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERjs7QUFVQSxNQUFNQyxHQUFHLEdBQ1AsTUFBQyxxREFBRDtBQUNFLFlBQVEsRUFBQyxVQURYO0FBRUUsV0FBTyxFQUFDLE1BRlY7QUFHRSxPQUFHLEVBQUMsS0FITjtBQUlFLFNBQUssRUFBQyxHQUpSO0FBS0UsT0FBRyxFQUFDLGVBTE47QUFNRSxPQUFHLEVBQUMseUJBTk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGOztBQVVBLE1BQU1DLElBQUksR0FDUixNQUFDLHFEQUFEO0FBQ0UsWUFBUSxFQUFDLFVBRFg7QUFFRSxXQUFPLEVBQUMsTUFGVjtBQUdFLE9BQUcsRUFBQyxLQUhOO0FBSUUsU0FBSyxFQUFDLEdBSlI7QUFLRSxPQUFHLEVBQUMsZ0JBTE47QUFNRSxPQUFHLEVBQUMsa0JBTk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGOztBQVdBLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDbkIsWUFBUUosSUFBSSxDQUFDSSxNQUFiO0FBQ0UsV0FBSyxNQUFMO0FBQ0UsZUFBT0gsSUFBUDs7QUFDRixXQUFLLEtBQUw7QUFDRSxlQUFPQyxHQUFQOztBQUNGLFdBQUssTUFBTDtBQUNFLGVBQU9DLElBQVA7QUFOSjtBQVFELEdBVEQ7O0FBV0EsU0FDRSxNQUFDLG9EQUFEO0FBQ0UsTUFBRSxFQUFFRSw4Q0FETjtBQUVFLFFBQUksa0JBQVdMLElBQUksQ0FBQ00sSUFBaEIsQ0FGTjtBQUdFLFVBQU0sRUFBRTtBQUNOQyxlQUFTLEVBQUUsTUFETDtBQUVOQyxhQUFPLEVBQUUsbUJBRkg7QUFHTkMsa0JBQVksRUFBRTtBQUhSLEtBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVNFLE1BQUMsb0RBQUQ7QUFDRSxRQUFJLEVBQUMsT0FEUDtBQUVFLFFBQUksRUFBRSxDQUFDLE9BQUQsRUFBVSxRQUFWLENBRlI7QUFHRSxLQUFDLEVBQUMsTUFISjtBQUlFLFVBQU0sRUFBQyxXQUpUO0FBS0UsZUFBVyxFQUFDLG1CQUxkO0FBTUUsZ0JBQVksRUFBQyxLQU5mO0FBT0UsS0FBQyxFQUFFLENBUEw7QUFRRSxZQUFRLEVBQUMsVUFSWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVUdMLE1BQU0sRUFWVCxFQVdFLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0RBQUQ7QUFBTSxjQUFVLEVBQUMsU0FBakI7QUFBMkIsZUFBVyxFQUFFO0FBQUVHLGVBQVMsRUFBRTtBQUFiLEtBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1AsSUFBSSxDQUFDVSxLQURSLENBREYsRUFLRSxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT1YsSUFBSSxDQUFDVyxXQUFaLENBTEYsQ0FERixFQVFFLE1BQUMscURBQUQ7QUFBTyxhQUFTLEVBQUUsQ0FBQyxRQUFELEVBQVcsS0FBWCxDQUFsQjtBQUFxQyxXQUFPLEVBQUUsQ0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHWCxJQUFJLENBQUNZLElBQUwsQ0FBVUMsR0FBVixDQUFjLFVBQUNDLEdBQUQ7QUFBQSxXQUNiLE1BQUMsb0RBQUQ7QUFBTSxnQkFBVSxFQUFFLEdBQWxCO0FBQXVCLFNBQUcsRUFBRUEsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUNJQSxHQURKLENBRGE7QUFBQSxHQUFkLENBREgsQ0FSRixDQVhGLENBVEYsQ0FERjtBQXdDRDtLQW5GdUJmLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZ3Mvc2VhcmNoLjdiOTc5MGEyNzMzOWRmMGRjYzhmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaW5rIGFzIE5leHRMaW5rIH0gZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IEJveCwgTGluaywgVGV4dCwgU3RhY2ssIEZsZXgsIEltYWdlIH0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGVudEJveCh7IGJsb2cgfSkge1xuICBjb25zdCBmdWxsID0gKFxuICAgIDxJbWFnZVxuICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICB0b3A9XCI1cHhcIlxuICAgICAgcmlnaHQ9XCIwXCJcbiAgICAgIGJveFNpemU9XCI1MHB4XCJcbiAgICAgIHNyYz1cImZ1bGwtZ3Jvd24ucG5nKVwiXG4gICAgICBhbHQ9XCJBIGZ1bGx5IGdyb3duIHBsYW50XCJcbiAgICAvPlxuICApO1xuICBjb25zdCBtaWQgPSAoXG4gICAgPEltYWdlXG4gICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcbiAgICAgIGJveFNpemU9XCI0MHB4XCJcbiAgICAgIHRvcD1cIjVweFwiXG4gICAgICByaWdodD1cIjBcIlxuICAgICAgc3JjPVwibWlkLWdyb3duLnBuZ1wiXG4gICAgICBhbHQ9XCJBIG1pZCBzaXplZCBncm93biBwbGFudFwiXG4gICAgLz5cbiAgKTtcbiAgY29uc3QgYmFieSA9IChcbiAgICA8SW1hZ2VcbiAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgYm94U2l6ZT1cIjMwcHhcIlxuICAgICAgdG9wPVwiNXB4XCJcbiAgICAgIHJpZ2h0PVwiMFwiXG4gICAgICBzcmM9XCJiYWJ5LWdyb3duLnBuZ1wiXG4gICAgICBhbHQ9XCJBIHNlZWRsaW5nIHBsYW50XCJcbiAgICAvPlxuICApO1xuXG4gIGNvbnN0IGdyb3d0aCA9ICgpID0+IHtcbiAgICBzd2l0Y2ggKGJsb2cuZ3Jvd3RoKSB7XG4gICAgICBjYXNlICdmdWxsJzpcbiAgICAgICAgcmV0dXJuIGZ1bGw7XG4gICAgICBjYXNlICdtaWQnOlxuICAgICAgICByZXR1cm4gbWlkO1xuICAgICAgY2FzZSAnYmFieSc6XG4gICAgICAgIHJldHVybiBiYWJ5O1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMaW5rXG4gICAgICBhcz17TmV4dExpbmt9XG4gICAgICBocmVmPXtgL2Jsb2cvJHtibG9nLnNsdWd9YH1cbiAgICAgIF9ob3Zlcj17e1xuICAgICAgICB0ZXh0RGVjb3I6ICdub25lJyxcbiAgICAgICAgYmdDb2xvcjogJ2JyYW5kLmNyYXlvbGEuMTAwJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEZsZXhcbiAgICAgICAgcm9sZT1cImdyb3VwXCJcbiAgICAgICAgbWF4Vz17WyczMDBweCcsICcxNDQwcHgnXX1cbiAgICAgICAgdz1cIjEwMCVcIlxuICAgICAgICBib3JkZXI9XCJzb2xpZCAzcHhcIlxuICAgICAgICBib3JkZXJDb2xvcj1cImJyYW5kLmNyYXlvbGEuNTAwXCJcbiAgICAgICAgYm9yZGVyUmFkaXVzPVwiNXB4XCJcbiAgICAgICAgcD17OH1cbiAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICA+XG4gICAgICAgIHtncm93dGgoKX1cbiAgICAgICAgPFN0YWNrPlxuICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8VGV4dCBmb250RmFtaWx5PVwiaGVhZGluZ1wiIF9ncm91cEhvdmVyPXt7IHRleHREZWNvcjogJ3VuZGVybGluZScgfX0+XG4gICAgICAgICAgICAgIHtibG9nLnRpdGxlfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgey8qIDxUZXh0IGZvbnRXZWlnaHQ9ezUwMH0+IEJ5OiB7YmxvZy5hdXRob3J9PC9UZXh0PiAqL31cbiAgICAgICAgICAgIDxUZXh0PntibG9nLmRlc2NyaXB0aW9ufTwvVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPXtbJ2NvbHVtbicsICdyb3cnXX0gc3BhY2luZz17Mn0+XG4gICAgICAgICAgICB7YmxvZy50YWdzLm1hcCgodGFnKSA9PiAoXG4gICAgICAgICAgICAgIDxUZXh0IGZvbnRXZWlnaHQ9ezUwMH0ga2V5PXt0YWd9PlxuICAgICAgICAgICAgICAgICN7dGFnfVxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9GbGV4PlxuICAgIDwvTGluaz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=