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
      lineNumber: 27,
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
      lineNumber: 49,
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
      lineNumber: 58,
      columnNumber: 7
    }
  }, growth(), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
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
      lineNumber: 71,
      columnNumber: 13
    }
  }, blog.title), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, blog.description)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    direction: ['column', 'row'],
    spacing: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, blog.tags.map(function (tag) {
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      fontWeight: 500,
      key: tag,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29udGVudEJveC5qcyJdLCJuYW1lcyI6WyJDb250ZW50Qm94IiwiYmxvZyIsImZ1bGwiLCJtaWQiLCJiYWJ5IiwiZ3Jvd3RoIiwiTmV4dExpbmsiLCJzbHVnIiwidGV4dERlY29yIiwiYmdDb2xvciIsImJvcmRlclJhZGl1cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0YWdzIiwibWFwIiwidGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxVQUFULE9BQThCO0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFROztBQUMzQyxNQUFNQyxJQUFJLEdBQ1IsTUFBQyxxREFBRDtBQUNFLFlBQVEsRUFBQyxVQURYO0FBRUUsT0FBRyxFQUFDLEtBRk47QUFHRSxTQUFLLEVBQUMsR0FIUjtBQUlFLFdBQU8sRUFBQyxNQUpWO0FBS0UsT0FBRyxFQUFDLGdCQUxOO0FBTUUsT0FBRyxFQUFDLHFCQU5OO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERjs7QUFVQSxNQUFNQyxHQUFHLEdBQ1AsTUFBQyxxREFBRDtBQUNFLFlBQVEsRUFBQyxVQURYO0FBRUUsYUFBUyxFQUFDLE9BRlo7QUFHRSxXQUFPLEVBQUMsTUFIVjtBQUlFLE9BQUcsRUFBQyxLQUpOO0FBS0UsU0FBSyxFQUFDLEdBTFI7QUFNRSxPQUFHLEVBQUMsZUFOTjtBQU9FLE9BQUcsRUFBQyx5QkFQTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7O0FBV0EsTUFBTUMsSUFBSSxHQUNSLE1BQUMscURBQUQ7QUFDRSxZQUFRLEVBQUMsVUFEWDtBQUVFLFdBQU8sRUFBQyxNQUZWO0FBR0UsT0FBRyxFQUFDLEtBSE47QUFJRSxTQUFLLEVBQUMsR0FKUjtBQUtFLE9BQUcsRUFBQyxnQkFMTjtBQU1FLE9BQUcsRUFBQyxrQkFOTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7O0FBV0EsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQixZQUFRSixJQUFJLENBQUNJLE1BQWI7QUFDRSxXQUFLLE1BQUw7QUFDRSxlQUFPSCxJQUFQOztBQUNGLFdBQUssS0FBTDtBQUNFLGVBQU9DLEdBQVA7O0FBQ0YsV0FBSyxNQUFMO0FBQ0UsZUFBT0MsSUFBUDtBQU5KO0FBUUQsR0FURDs7QUFXQSxTQUNFLE1BQUMsb0RBQUQ7QUFDRSxNQUFFLEVBQUVFLDhDQUROO0FBRUUsUUFBSSxrQkFBV0wsSUFBSSxDQUFDTSxJQUFoQixDQUZOO0FBR0UsVUFBTSxFQUFFO0FBQ05DLGVBQVMsRUFBRSxNQURMO0FBRU5DLGFBQU8sRUFBRSxtQkFGSDtBQUdOQyxrQkFBWSxFQUFFO0FBSFIsS0FIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0UsTUFBQyxvREFBRDtBQUNFLFFBQUksRUFBQyxPQURQO0FBRUUsUUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLFFBQVYsQ0FGUjtBQUdFLEtBQUMsRUFBQyxNQUhKO0FBSUUsVUFBTSxFQUFDLFdBSlQ7QUFLRSxlQUFXLEVBQUMsbUJBTGQ7QUFNRSxnQkFBWSxFQUFDLEtBTmY7QUFPRSxLQUFDLEVBQUUsQ0FQTDtBQVFFLFlBQVEsRUFBQyxVQVJYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FVR0wsTUFBTSxFQVZULEVBV0UsTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRDtBQUFNLGNBQVUsRUFBQyxTQUFqQjtBQUEyQixlQUFXLEVBQUU7QUFBRUcsZUFBUyxFQUFFO0FBQWIsS0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHUCxJQUFJLENBQUNVLEtBRFIsQ0FERixFQUtFLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPVixJQUFJLENBQUNXLFdBQVosQ0FMRixDQURGLEVBUUUsTUFBQyxxREFBRDtBQUFPLGFBQVMsRUFBRSxDQUFDLFFBQUQsRUFBVyxLQUFYLENBQWxCO0FBQXFDLFdBQU8sRUFBRSxDQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dYLElBQUksQ0FBQ1ksSUFBTCxDQUFVQyxHQUFWLENBQWMsVUFBQ0MsR0FBRDtBQUFBLFdBQ2IsTUFBQyxvREFBRDtBQUFNLGdCQUFVLEVBQUUsR0FBbEI7QUFBdUIsU0FBRyxFQUFFQSxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQ0lBLEdBREosQ0FEYTtBQUFBLEdBQWQsQ0FESCxDQVJGLENBWEYsQ0FURixDQURGO0FBd0NEO0tBcEZ1QmYsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9ncy9zZWFyY2guNTg1MWE3MzNlN2FjZmE5OWZkZjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpbmsgYXMgTmV4dExpbmsgfSBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgQm94LCBMaW5rLCBUZXh0LCBTdGFjaywgRmxleCwgSW1hZ2UgfSBmcm9tICdAY2hha3JhLXVpL2NvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250ZW50Qm94KHsgYmxvZyB9KSB7XG4gIGNvbnN0IGZ1bGwgPSAoXG4gICAgPEltYWdlXG4gICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcbiAgICAgIHRvcD1cIjVweFwiXG4gICAgICByaWdodD1cIjBcIlxuICAgICAgYm94U2l6ZT1cIjUwcHhcIlxuICAgICAgc3JjPVwiZnVsbC1ncm93bi5wbmdcIlxuICAgICAgYWx0PVwiQSBmdWxseSBncm93biBwbGFudFwiXG4gICAgLz5cbiAgKTtcbiAgY29uc3QgbWlkID0gKFxuICAgIDxJbWFnZVxuICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICBib3hTaXplPVwiNDBweFwiXG4gICAgICB0b3A9XCI1cHhcIlxuICAgICAgcmlnaHQ9XCIwXCJcbiAgICAgIHNyYz1cIm1pZC1ncm93bi5wbmdcIlxuICAgICAgYWx0PVwiQSBtaWQgc2l6ZWQgZ3Jvd24gcGxhbnRcIlxuICAgIC8+XG4gICk7XG4gIGNvbnN0IGJhYnkgPSAoXG4gICAgPEltYWdlXG4gICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcbiAgICAgIGJveFNpemU9XCIzMHB4XCJcbiAgICAgIHRvcD1cIjVweFwiXG4gICAgICByaWdodD1cIjBcIlxuICAgICAgc3JjPVwiYmFieS1ncm93bi5wbmdcIlxuICAgICAgYWx0PVwiQSBzZWVkbGluZyBwbGFudFwiXG4gICAgLz5cbiAgKTtcblxuICBjb25zdCBncm93dGggPSAoKSA9PiB7XG4gICAgc3dpdGNoIChibG9nLmdyb3d0aCkge1xuICAgICAgY2FzZSAnZnVsbCc6XG4gICAgICAgIHJldHVybiBmdWxsO1xuICAgICAgY2FzZSAnbWlkJzpcbiAgICAgICAgcmV0dXJuIG1pZDtcbiAgICAgIGNhc2UgJ2JhYnknOlxuICAgICAgICByZXR1cm4gYmFieTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGlua1xuICAgICAgYXM9e05leHRMaW5rfVxuICAgICAgaHJlZj17YC9ibG9nLyR7YmxvZy5zbHVnfWB9XG4gICAgICBfaG92ZXI9e3tcbiAgICAgICAgdGV4dERlY29yOiAnbm9uZScsXG4gICAgICAgIGJnQ29sb3I6ICdicmFuZC5jcmF5b2xhLjEwMCcsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxGbGV4XG4gICAgICAgIHJvbGU9XCJncm91cFwiXG4gICAgICAgIG1heFc9e1snMzAwcHgnLCAnMTQ0MHB4J119XG4gICAgICAgIHc9XCIxMDAlXCJcbiAgICAgICAgYm9yZGVyPVwic29saWQgM3B4XCJcbiAgICAgICAgYm9yZGVyQ29sb3I9XCJicmFuZC5jcmF5b2xhLjUwMFwiXG4gICAgICAgIGJvcmRlclJhZGl1cz1cIjVweFwiXG4gICAgICAgIHA9ezh9XG4gICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgPlxuICAgICAgICB7Z3Jvd3RoKCl9XG4gICAgICAgIDxTdGFjaz5cbiAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgPFRleHQgZm9udEZhbWlseT1cImhlYWRpbmdcIiBfZ3JvdXBIb3Zlcj17eyB0ZXh0RGVjb3I6ICd1bmRlcmxpbmUnIH19PlxuICAgICAgICAgICAgICB7YmxvZy50aXRsZX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIHsvKiA8VGV4dCBmb250V2VpZ2h0PXs1MDB9PiBCeToge2Jsb2cuYXV0aG9yfTwvVGV4dD4gKi99XG4gICAgICAgICAgICA8VGV4dD57YmxvZy5kZXNjcmlwdGlvbn08L1RleHQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj17Wydjb2x1bW4nLCAncm93J119IHNwYWNpbmc9ezJ9PlxuICAgICAgICAgICAge2Jsb2cudGFncy5tYXAoKHRhZykgPT4gKFxuICAgICAgICAgICAgICA8VGV4dCBmb250V2VpZ2h0PXs1MDB9IGtleT17dGFnfT5cbiAgICAgICAgICAgICAgICAje3RhZ31cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgIDwvRmxleD5cbiAgICA8L0xpbms+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9