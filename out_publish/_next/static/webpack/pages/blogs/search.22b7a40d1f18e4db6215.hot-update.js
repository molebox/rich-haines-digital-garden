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
    objectFit: "cover",
    top: "5px",
    right: "0",
    boxSize: "50px",
    src: "full-grown.png",
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
    objectFit: "cover",
    boxSize: "40px",
    top: "5px",
    right: "0",
    src: "url(/mid-grown.png)",
    alt: "A mid sized grown plant",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  });

  var baby = __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    position: "absolute",
    objectFit: "cover",
    boxSize: "30px",
    top: "5px",
    right: "0",
    src: "url(/baby-grown.png)",
    alt: "A seedling plant",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
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
      lineNumber: 51,
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
      lineNumber: 60,
      columnNumber: 7
    }
  }, growth(), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
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
      lineNumber: 73,
      columnNumber: 13
    }
  }, blog.title), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, blog.description)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    direction: ['column', 'row'],
    spacing: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, blog.tags.map(function (tag) {
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      fontWeight: 500,
      key: tag,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29udGVudEJveC5qcyJdLCJuYW1lcyI6WyJDb250ZW50Qm94IiwiYmxvZyIsImZ1bGwiLCJtaWQiLCJiYWJ5IiwiZ3Jvd3RoIiwiTmV4dExpbmsiLCJzbHVnIiwidGV4dERlY29yIiwiYmdDb2xvciIsImJvcmRlclJhZGl1cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0YWdzIiwibWFwIiwidGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxVQUFULE9BQThCO0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFROztBQUMzQyxNQUFNQyxJQUFJLEdBQ1IsTUFBQyxxREFBRDtBQUNFLFlBQVEsRUFBQyxVQURYO0FBRUUsYUFBUyxFQUFDLE9BRlo7QUFHRSxPQUFHLEVBQUMsS0FITjtBQUlFLFNBQUssRUFBQyxHQUpSO0FBS0UsV0FBTyxFQUFDLE1BTFY7QUFNRSxPQUFHLEVBQUMsZ0JBTk47QUFPRSxPQUFHLEVBQUMscUJBUE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGOztBQVdBLE1BQU1DLEdBQUcsR0FDUCxNQUFDLHFEQUFEO0FBQ0UsWUFBUSxFQUFDLFVBRFg7QUFFRSxhQUFTLEVBQUMsT0FGWjtBQUdFLFdBQU8sRUFBQyxNQUhWO0FBSUUsT0FBRyxFQUFDLEtBSk47QUFLRSxTQUFLLEVBQUMsR0FMUjtBQU1FLE9BQUcsRUFBQyxxQkFOTjtBQU9FLE9BQUcsRUFBQyx5QkFQTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7O0FBV0EsTUFBTUMsSUFBSSxHQUNSLE1BQUMscURBQUQ7QUFDRSxZQUFRLEVBQUMsVUFEWDtBQUVFLGFBQVMsRUFBQyxPQUZaO0FBR0UsV0FBTyxFQUFDLE1BSFY7QUFJRSxPQUFHLEVBQUMsS0FKTjtBQUtFLFNBQUssRUFBQyxHQUxSO0FBTUUsT0FBRyxFQUFDLHNCQU5OO0FBT0UsT0FBRyxFQUFDLGtCQVBOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERjs7QUFZQSxNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ25CLFlBQVFKLElBQUksQ0FBQ0ksTUFBYjtBQUNFLFdBQUssTUFBTDtBQUNFLGVBQU9ILElBQVA7O0FBQ0YsV0FBSyxLQUFMO0FBQ0UsZUFBT0MsR0FBUDs7QUFDRixXQUFLLE1BQUw7QUFDRSxlQUFPQyxJQUFQO0FBTko7QUFRRCxHQVREOztBQVdBLFNBQ0UsTUFBQyxvREFBRDtBQUNFLE1BQUUsRUFBRUUsOENBRE47QUFFRSxRQUFJLGtCQUFXTCxJQUFJLENBQUNNLElBQWhCLENBRk47QUFHRSxVQUFNLEVBQUU7QUFDTkMsZUFBUyxFQUFFLE1BREw7QUFFTkMsYUFBTyxFQUFFLG1CQUZIO0FBR05DLGtCQUFZLEVBQUU7QUFIUixLQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTRSxNQUFDLG9EQUFEO0FBQ0UsUUFBSSxFQUFDLE9BRFA7QUFFRSxRQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsUUFBVixDQUZSO0FBR0UsS0FBQyxFQUFDLE1BSEo7QUFJRSxVQUFNLEVBQUMsV0FKVDtBQUtFLGVBQVcsRUFBQyxtQkFMZDtBQU1FLGdCQUFZLEVBQUMsS0FOZjtBQU9FLEtBQUMsRUFBRSxDQVBMO0FBUUUsWUFBUSxFQUFDLFVBUlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVHTCxNQUFNLEVBVlQsRUFXRSxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFEO0FBQU0sY0FBVSxFQUFDLFNBQWpCO0FBQTJCLGVBQVcsRUFBRTtBQUFFRyxlQUFTLEVBQUU7QUFBYixLQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dQLElBQUksQ0FBQ1UsS0FEUixDQURGLEVBS0UsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9WLElBQUksQ0FBQ1csV0FBWixDQUxGLENBREYsRUFRRSxNQUFDLHFEQUFEO0FBQU8sYUFBUyxFQUFFLENBQUMsUUFBRCxFQUFXLEtBQVgsQ0FBbEI7QUFBcUMsV0FBTyxFQUFFLENBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1gsSUFBSSxDQUFDWSxJQUFMLENBQVVDLEdBQVYsQ0FBYyxVQUFDQyxHQUFEO0FBQUEsV0FDYixNQUFDLG9EQUFEO0FBQU0sZ0JBQVUsRUFBRSxHQUFsQjtBQUF1QixTQUFHLEVBQUVBLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFDSUEsR0FESixDQURhO0FBQUEsR0FBZCxDQURILENBUkYsQ0FYRixDQVRGLENBREY7QUF3Q0Q7S0F0RnVCZixVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2dzL3NlYXJjaC4yMmI3YTQwZDFmMThlNGRiNjIxNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGluayBhcyBOZXh0TGluayB9IGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBCb3gsIExpbmssIFRleHQsIFN0YWNrLCBGbGV4LCBJbWFnZSB9IGZyb20gJ0BjaGFrcmEtdWkvY29yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRlbnRCb3goeyBibG9nIH0pIHtcbiAgY29uc3QgZnVsbCA9IChcbiAgICA8SW1hZ2VcbiAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgdG9wPVwiNXB4XCJcbiAgICAgIHJpZ2h0PVwiMFwiXG4gICAgICBib3hTaXplPVwiNTBweFwiXG4gICAgICBzcmM9XCJmdWxsLWdyb3duLnBuZ1wiXG4gICAgICBhbHQ9XCJBIGZ1bGx5IGdyb3duIHBsYW50XCJcbiAgICAvPlxuICApO1xuICBjb25zdCBtaWQgPSAoXG4gICAgPEltYWdlXG4gICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcbiAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgIGJveFNpemU9XCI0MHB4XCJcbiAgICAgIHRvcD1cIjVweFwiXG4gICAgICByaWdodD1cIjBcIlxuICAgICAgc3JjPVwidXJsKC9taWQtZ3Jvd24ucG5nKVwiXG4gICAgICBhbHQ9XCJBIG1pZCBzaXplZCBncm93biBwbGFudFwiXG4gICAgLz5cbiAgKTtcbiAgY29uc3QgYmFieSA9IChcbiAgICA8SW1hZ2VcbiAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgYm94U2l6ZT1cIjMwcHhcIlxuICAgICAgdG9wPVwiNXB4XCJcbiAgICAgIHJpZ2h0PVwiMFwiXG4gICAgICBzcmM9XCJ1cmwoL2JhYnktZ3Jvd24ucG5nKVwiXG4gICAgICBhbHQ9XCJBIHNlZWRsaW5nIHBsYW50XCJcbiAgICAvPlxuICApO1xuXG4gIGNvbnN0IGdyb3d0aCA9ICgpID0+IHtcbiAgICBzd2l0Y2ggKGJsb2cuZ3Jvd3RoKSB7XG4gICAgICBjYXNlICdmdWxsJzpcbiAgICAgICAgcmV0dXJuIGZ1bGw7XG4gICAgICBjYXNlICdtaWQnOlxuICAgICAgICByZXR1cm4gbWlkO1xuICAgICAgY2FzZSAnYmFieSc6XG4gICAgICAgIHJldHVybiBiYWJ5O1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMaW5rXG4gICAgICBhcz17TmV4dExpbmt9XG4gICAgICBocmVmPXtgL2Jsb2cvJHtibG9nLnNsdWd9YH1cbiAgICAgIF9ob3Zlcj17e1xuICAgICAgICB0ZXh0RGVjb3I6ICdub25lJyxcbiAgICAgICAgYmdDb2xvcjogJ2JyYW5kLmNyYXlvbGEuMTAwJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEZsZXhcbiAgICAgICAgcm9sZT1cImdyb3VwXCJcbiAgICAgICAgbWF4Vz17WyczMDBweCcsICcxNDQwcHgnXX1cbiAgICAgICAgdz1cIjEwMCVcIlxuICAgICAgICBib3JkZXI9XCJzb2xpZCAzcHhcIlxuICAgICAgICBib3JkZXJDb2xvcj1cImJyYW5kLmNyYXlvbGEuNTAwXCJcbiAgICAgICAgYm9yZGVyUmFkaXVzPVwiNXB4XCJcbiAgICAgICAgcD17OH1cbiAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICA+XG4gICAgICAgIHtncm93dGgoKX1cbiAgICAgICAgPFN0YWNrPlxuICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8VGV4dCBmb250RmFtaWx5PVwiaGVhZGluZ1wiIF9ncm91cEhvdmVyPXt7IHRleHREZWNvcjogJ3VuZGVybGluZScgfX0+XG4gICAgICAgICAgICAgIHtibG9nLnRpdGxlfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgey8qIDxUZXh0IGZvbnRXZWlnaHQ9ezUwMH0+IEJ5OiB7YmxvZy5hdXRob3J9PC9UZXh0PiAqL31cbiAgICAgICAgICAgIDxUZXh0PntibG9nLmRlc2NyaXB0aW9ufTwvVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPXtbJ2NvbHVtbicsICdyb3cnXX0gc3BhY2luZz17Mn0+XG4gICAgICAgICAgICB7YmxvZy50YWdzLm1hcCgodGFnKSA9PiAoXG4gICAgICAgICAgICAgIDxUZXh0IGZvbnRXZWlnaHQ9ezUwMH0ga2V5PXt0YWd9PlxuICAgICAgICAgICAgICAgICN7dGFnfVxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9GbGV4PlxuICAgIDwvTGluaz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=