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
    src: "mid-grown.png",
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
    src: "url(/baby-grown.png",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29udGVudEJveC5qcyJdLCJuYW1lcyI6WyJDb250ZW50Qm94IiwiYmxvZyIsImZ1bGwiLCJtaWQiLCJiYWJ5IiwiZ3Jvd3RoIiwiTmV4dExpbmsiLCJzbHVnIiwidGV4dERlY29yIiwiYmdDb2xvciIsImJvcmRlclJhZGl1cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0YWdzIiwibWFwIiwidGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxVQUFULE9BQThCO0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFROztBQUMzQyxNQUFNQyxJQUFJLEdBQ1IsTUFBQyxxREFBRDtBQUNFLFlBQVEsRUFBQyxVQURYO0FBRUUsYUFBUyxFQUFDLE9BRlo7QUFHRSxPQUFHLEVBQUMsS0FITjtBQUlFLFNBQUssRUFBQyxHQUpSO0FBS0UsV0FBTyxFQUFDLE1BTFY7QUFNRSxPQUFHLEVBQUMsZ0JBTk47QUFPRSxPQUFHLEVBQUMscUJBUE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGOztBQVdBLE1BQU1DLEdBQUcsR0FDUCxNQUFDLHFEQUFEO0FBQ0UsWUFBUSxFQUFDLFVBRFg7QUFFRSxhQUFTLEVBQUMsT0FGWjtBQUdFLFdBQU8sRUFBQyxNQUhWO0FBSUUsT0FBRyxFQUFDLEtBSk47QUFLRSxTQUFLLEVBQUMsR0FMUjtBQU1FLE9BQUcsRUFBQyxlQU5OO0FBT0UsT0FBRyxFQUFDLHlCQVBOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERjs7QUFXQSxNQUFNQyxJQUFJLEdBQ1IsTUFBQyxxREFBRDtBQUNFLFlBQVEsRUFBQyxVQURYO0FBRUUsYUFBUyxFQUFDLE9BRlo7QUFHRSxXQUFPLEVBQUMsTUFIVjtBQUlFLE9BQUcsRUFBQyxLQUpOO0FBS0UsU0FBSyxFQUFDLEdBTFI7QUFNRSxPQUFHLEVBQUMscUJBTk47QUFPRSxPQUFHLEVBQUMsa0JBUE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGOztBQVlBLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDbkIsWUFBUUosSUFBSSxDQUFDSSxNQUFiO0FBQ0UsV0FBSyxNQUFMO0FBQ0UsZUFBT0gsSUFBUDs7QUFDRixXQUFLLEtBQUw7QUFDRSxlQUFPQyxHQUFQOztBQUNGLFdBQUssTUFBTDtBQUNFLGVBQU9DLElBQVA7QUFOSjtBQVFELEdBVEQ7O0FBV0EsU0FDRSxNQUFDLG9EQUFEO0FBQ0UsTUFBRSxFQUFFRSw4Q0FETjtBQUVFLFFBQUksa0JBQVdMLElBQUksQ0FBQ00sSUFBaEIsQ0FGTjtBQUdFLFVBQU0sRUFBRTtBQUNOQyxlQUFTLEVBQUUsTUFETDtBQUVOQyxhQUFPLEVBQUUsbUJBRkg7QUFHTkMsa0JBQVksRUFBRTtBQUhSLEtBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVNFLE1BQUMsb0RBQUQ7QUFDRSxRQUFJLEVBQUMsT0FEUDtBQUVFLFFBQUksRUFBRSxDQUFDLE9BQUQsRUFBVSxRQUFWLENBRlI7QUFHRSxLQUFDLEVBQUMsTUFISjtBQUlFLFVBQU0sRUFBQyxXQUpUO0FBS0UsZUFBVyxFQUFDLG1CQUxkO0FBTUUsZ0JBQVksRUFBQyxLQU5mO0FBT0UsS0FBQyxFQUFFLENBUEw7QUFRRSxZQUFRLEVBQUMsVUFSWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVUdMLE1BQU0sRUFWVCxFQVdFLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0RBQUQ7QUFBTSxjQUFVLEVBQUMsU0FBakI7QUFBMkIsZUFBVyxFQUFFO0FBQUVHLGVBQVMsRUFBRTtBQUFiLEtBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1AsSUFBSSxDQUFDVSxLQURSLENBREYsRUFLRSxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT1YsSUFBSSxDQUFDVyxXQUFaLENBTEYsQ0FERixFQVFFLE1BQUMscURBQUQ7QUFBTyxhQUFTLEVBQUUsQ0FBQyxRQUFELEVBQVcsS0FBWCxDQUFsQjtBQUFxQyxXQUFPLEVBQUUsQ0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHWCxJQUFJLENBQUNZLElBQUwsQ0FBVUMsR0FBVixDQUFjLFVBQUNDLEdBQUQ7QUFBQSxXQUNiLE1BQUMsb0RBQUQ7QUFBTSxnQkFBVSxFQUFFLEdBQWxCO0FBQXVCLFNBQUcsRUFBRUEsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUNJQSxHQURKLENBRGE7QUFBQSxHQUFkLENBREgsQ0FSRixDQVhGLENBVEYsQ0FERjtBQXdDRDtLQXRGdUJmLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZ3Mvc2VhcmNoLmRkMWE0NDk4ZDY0ZmU3YWExOTg4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaW5rIGFzIE5leHRMaW5rIH0gZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IEJveCwgTGluaywgVGV4dCwgU3RhY2ssIEZsZXgsIEltYWdlIH0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGVudEJveCh7IGJsb2cgfSkge1xuICBjb25zdCBmdWxsID0gKFxuICAgIDxJbWFnZVxuICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICB0b3A9XCI1cHhcIlxuICAgICAgcmlnaHQ9XCIwXCJcbiAgICAgIGJveFNpemU9XCI1MHB4XCJcbiAgICAgIHNyYz1cImZ1bGwtZ3Jvd24ucG5nXCJcbiAgICAgIGFsdD1cIkEgZnVsbHkgZ3Jvd24gcGxhbnRcIlxuICAgIC8+XG4gICk7XG4gIGNvbnN0IG1pZCA9IChcbiAgICA8SW1hZ2VcbiAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgYm94U2l6ZT1cIjQwcHhcIlxuICAgICAgdG9wPVwiNXB4XCJcbiAgICAgIHJpZ2h0PVwiMFwiXG4gICAgICBzcmM9XCJtaWQtZ3Jvd24ucG5nXCJcbiAgICAgIGFsdD1cIkEgbWlkIHNpemVkIGdyb3duIHBsYW50XCJcbiAgICAvPlxuICApO1xuICBjb25zdCBiYWJ5ID0gKFxuICAgIDxJbWFnZVxuICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICBib3hTaXplPVwiMzBweFwiXG4gICAgICB0b3A9XCI1cHhcIlxuICAgICAgcmlnaHQ9XCIwXCJcbiAgICAgIHNyYz1cInVybCgvYmFieS1ncm93bi5wbmdcIlxuICAgICAgYWx0PVwiQSBzZWVkbGluZyBwbGFudFwiXG4gICAgLz5cbiAgKTtcblxuICBjb25zdCBncm93dGggPSAoKSA9PiB7XG4gICAgc3dpdGNoIChibG9nLmdyb3d0aCkge1xuICAgICAgY2FzZSAnZnVsbCc6XG4gICAgICAgIHJldHVybiBmdWxsO1xuICAgICAgY2FzZSAnbWlkJzpcbiAgICAgICAgcmV0dXJuIG1pZDtcbiAgICAgIGNhc2UgJ2JhYnknOlxuICAgICAgICByZXR1cm4gYmFieTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGlua1xuICAgICAgYXM9e05leHRMaW5rfVxuICAgICAgaHJlZj17YC9ibG9nLyR7YmxvZy5zbHVnfWB9XG4gICAgICBfaG92ZXI9e3tcbiAgICAgICAgdGV4dERlY29yOiAnbm9uZScsXG4gICAgICAgIGJnQ29sb3I6ICdicmFuZC5jcmF5b2xhLjEwMCcsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxGbGV4XG4gICAgICAgIHJvbGU9XCJncm91cFwiXG4gICAgICAgIG1heFc9e1snMzAwcHgnLCAnMTQ0MHB4J119XG4gICAgICAgIHc9XCIxMDAlXCJcbiAgICAgICAgYm9yZGVyPVwic29saWQgM3B4XCJcbiAgICAgICAgYm9yZGVyQ29sb3I9XCJicmFuZC5jcmF5b2xhLjUwMFwiXG4gICAgICAgIGJvcmRlclJhZGl1cz1cIjVweFwiXG4gICAgICAgIHA9ezh9XG4gICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgPlxuICAgICAgICB7Z3Jvd3RoKCl9XG4gICAgICAgIDxTdGFjaz5cbiAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgPFRleHQgZm9udEZhbWlseT1cImhlYWRpbmdcIiBfZ3JvdXBIb3Zlcj17eyB0ZXh0RGVjb3I6ICd1bmRlcmxpbmUnIH19PlxuICAgICAgICAgICAgICB7YmxvZy50aXRsZX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIHsvKiA8VGV4dCBmb250V2VpZ2h0PXs1MDB9PiBCeToge2Jsb2cuYXV0aG9yfTwvVGV4dD4gKi99XG4gICAgICAgICAgICA8VGV4dD57YmxvZy5kZXNjcmlwdGlvbn08L1RleHQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj17Wydjb2x1bW4nLCAncm93J119IHNwYWNpbmc9ezJ9PlxuICAgICAgICAgICAge2Jsb2cudGFncy5tYXAoKHRhZykgPT4gKFxuICAgICAgICAgICAgICA8VGV4dCBmb250V2VpZ2h0PXs1MDB9IGtleT17dGFnfT5cbiAgICAgICAgICAgICAgICAje3RhZ31cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgIDwvRmxleD5cbiAgICA8L0xpbms+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9