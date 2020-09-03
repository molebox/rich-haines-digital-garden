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
    src: "url(/full-grown.png",
    alt: "A fully grown plant",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  });

  var mid = __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Image"], {
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
    boxSize: "30px",
    top: "5px",
    right: "0",
    src: "baby-grown.png",
    alt: "A seedling plant",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
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
      lineNumber: 46,
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
      lineNumber: 55,
      columnNumber: 7
    }
  }, growth(), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
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
      lineNumber: 68,
      columnNumber: 13
    }
  }, blog.title), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, blog.description)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    direction: ['column', 'row'],
    spacing: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, blog.tags.map(function (tag) {
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      fontWeight: 500,
      key: tag,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29udGVudEJveC5qcyJdLCJuYW1lcyI6WyJDb250ZW50Qm94IiwiYmxvZyIsImZ1bGwiLCJtaWQiLCJiYWJ5IiwiZ3Jvd3RoIiwiTmV4dExpbmsiLCJzbHVnIiwidGV4dERlY29yIiwiYmdDb2xvciIsImJvcmRlclJhZGl1cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0YWdzIiwibWFwIiwidGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxVQUFULE9BQThCO0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFROztBQUMzQyxNQUFNQyxJQUFJLEdBQ1IsTUFBQyxxREFBRDtBQUNFLFlBQVEsRUFBQyxVQURYO0FBRUUsT0FBRyxFQUFDLEtBRk47QUFHRSxTQUFLLEVBQUMsR0FIUjtBQUlFLFdBQU8sRUFBQyxNQUpWO0FBS0UsT0FBRyxFQUFDLHFCQUxOO0FBTUUsT0FBRyxFQUFDLHFCQU5OO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERjs7QUFVQSxNQUFNQyxHQUFHLEdBQ1AsTUFBQyxxREFBRDtBQUNFLFdBQU8sRUFBQyxNQURWO0FBRUUsT0FBRyxFQUFDLEtBRk47QUFHRSxTQUFLLEVBQUMsR0FIUjtBQUlFLE9BQUcsRUFBQyxlQUpOO0FBS0UsT0FBRyxFQUFDLHlCQUxOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERjs7QUFTQSxNQUFNQyxJQUFJLEdBQ1IsTUFBQyxxREFBRDtBQUNFLFdBQU8sRUFBQyxNQURWO0FBRUUsT0FBRyxFQUFDLEtBRk47QUFHRSxTQUFLLEVBQUMsR0FIUjtBQUlFLE9BQUcsRUFBQyxnQkFKTjtBQUtFLE9BQUcsRUFBQyxrQkFMTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7O0FBVUEsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQixZQUFRSixJQUFJLENBQUNJLE1BQWI7QUFDRSxXQUFLLE1BQUw7QUFDRSxlQUFPSCxJQUFQOztBQUNGLFdBQUssS0FBTDtBQUNFLGVBQU9DLEdBQVA7O0FBQ0YsV0FBSyxNQUFMO0FBQ0UsZUFBT0MsSUFBUDtBQU5KO0FBUUQsR0FURDs7QUFXQSxTQUNFLE1BQUMsb0RBQUQ7QUFDRSxNQUFFLEVBQUVFLDhDQUROO0FBRUUsUUFBSSxrQkFBV0wsSUFBSSxDQUFDTSxJQUFoQixDQUZOO0FBR0UsVUFBTSxFQUFFO0FBQ05DLGVBQVMsRUFBRSxNQURMO0FBRU5DLGFBQU8sRUFBRSxtQkFGSDtBQUdOQyxrQkFBWSxFQUFFO0FBSFIsS0FIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0UsTUFBQyxvREFBRDtBQUNFLFFBQUksRUFBQyxPQURQO0FBRUUsUUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLFFBQVYsQ0FGUjtBQUdFLEtBQUMsRUFBQyxNQUhKO0FBSUUsVUFBTSxFQUFDLFdBSlQ7QUFLRSxlQUFXLEVBQUMsbUJBTGQ7QUFNRSxnQkFBWSxFQUFDLEtBTmY7QUFPRSxLQUFDLEVBQUUsQ0FQTDtBQVFFLFlBQVEsRUFBQyxVQVJYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FVR0wsTUFBTSxFQVZULEVBV0UsTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRDtBQUFNLGNBQVUsRUFBQyxTQUFqQjtBQUEyQixlQUFXLEVBQUU7QUFBRUcsZUFBUyxFQUFFO0FBQWIsS0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHUCxJQUFJLENBQUNVLEtBRFIsQ0FERixFQUtFLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPVixJQUFJLENBQUNXLFdBQVosQ0FMRixDQURGLEVBUUUsTUFBQyxxREFBRDtBQUFPLGFBQVMsRUFBRSxDQUFDLFFBQUQsRUFBVyxLQUFYLENBQWxCO0FBQXFDLFdBQU8sRUFBRSxDQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dYLElBQUksQ0FBQ1ksSUFBTCxDQUFVQyxHQUFWLENBQWMsVUFBQ0MsR0FBRDtBQUFBLFdBQ2IsTUFBQyxvREFBRDtBQUFNLGdCQUFVLEVBQUUsR0FBbEI7QUFBdUIsU0FBRyxFQUFFQSxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQ0lBLEdBREosQ0FEYTtBQUFBLEdBQWQsQ0FESCxDQVJGLENBWEYsQ0FURixDQURGO0FBd0NEO0tBakZ1QmYsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9ncy9zZWFyY2guOWYyMTk5NDYzZjBlODIxNTM1ZTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpbmsgYXMgTmV4dExpbmsgfSBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgQm94LCBMaW5rLCBUZXh0LCBTdGFjaywgRmxleCwgSW1hZ2UgfSBmcm9tICdAY2hha3JhLXVpL2NvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250ZW50Qm94KHsgYmxvZyB9KSB7XG4gIGNvbnN0IGZ1bGwgPSAoXG4gICAgPEltYWdlXG4gICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcbiAgICAgIHRvcD1cIjVweFwiXG4gICAgICByaWdodD1cIjBcIlxuICAgICAgYm94U2l6ZT1cIjUwcHhcIlxuICAgICAgc3JjPVwidXJsKC9mdWxsLWdyb3duLnBuZ1wiXG4gICAgICBhbHQ9XCJBIGZ1bGx5IGdyb3duIHBsYW50XCJcbiAgICAvPlxuICApO1xuICBjb25zdCBtaWQgPSAoXG4gICAgPEltYWdlXG4gICAgICBib3hTaXplPVwiNDBweFwiXG4gICAgICB0b3A9XCI1cHhcIlxuICAgICAgcmlnaHQ9XCIwXCJcbiAgICAgIHNyYz1cIm1pZC1ncm93bi5wbmdcIlxuICAgICAgYWx0PVwiQSBtaWQgc2l6ZWQgZ3Jvd24gcGxhbnRcIlxuICAgIC8+XG4gICk7XG4gIGNvbnN0IGJhYnkgPSAoXG4gICAgPEltYWdlXG4gICAgICBib3hTaXplPVwiMzBweFwiXG4gICAgICB0b3A9XCI1cHhcIlxuICAgICAgcmlnaHQ9XCIwXCJcbiAgICAgIHNyYz1cImJhYnktZ3Jvd24ucG5nXCJcbiAgICAgIGFsdD1cIkEgc2VlZGxpbmcgcGxhbnRcIlxuICAgIC8+XG4gICk7XG5cbiAgY29uc3QgZ3Jvd3RoID0gKCkgPT4ge1xuICAgIHN3aXRjaCAoYmxvZy5ncm93dGgpIHtcbiAgICAgIGNhc2UgJ2Z1bGwnOlxuICAgICAgICByZXR1cm4gZnVsbDtcbiAgICAgIGNhc2UgJ21pZCc6XG4gICAgICAgIHJldHVybiBtaWQ7XG4gICAgICBjYXNlICdiYWJ5JzpcbiAgICAgICAgcmV0dXJuIGJhYnk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExpbmtcbiAgICAgIGFzPXtOZXh0TGlua31cbiAgICAgIGhyZWY9e2AvYmxvZy8ke2Jsb2cuc2x1Z31gfVxuICAgICAgX2hvdmVyPXt7XG4gICAgICAgIHRleHREZWNvcjogJ25vbmUnLFxuICAgICAgICBiZ0NvbG9yOiAnYnJhbmQuY3JheW9sYS4xMDAnLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8RmxleFxuICAgICAgICByb2xlPVwiZ3JvdXBcIlxuICAgICAgICBtYXhXPXtbJzMwMHB4JywgJzE0NDBweCddfVxuICAgICAgICB3PVwiMTAwJVwiXG4gICAgICAgIGJvcmRlcj1cInNvbGlkIDNweFwiXG4gICAgICAgIGJvcmRlckNvbG9yPVwiYnJhbmQuY3JheW9sYS41MDBcIlxuICAgICAgICBib3JkZXJSYWRpdXM9XCI1cHhcIlxuICAgICAgICBwPXs4fVxuICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgID5cbiAgICAgICAge2dyb3d0aCgpfVxuICAgICAgICA8U3RhY2s+XG4gICAgICAgICAgPEJveD5cbiAgICAgICAgICAgIDxUZXh0IGZvbnRGYW1pbHk9XCJoZWFkaW5nXCIgX2dyb3VwSG92ZXI9e3sgdGV4dERlY29yOiAndW5kZXJsaW5lJyB9fT5cbiAgICAgICAgICAgICAge2Jsb2cudGl0bGV9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICB7LyogPFRleHQgZm9udFdlaWdodD17NTAwfT4gQnk6IHtibG9nLmF1dGhvcn08L1RleHQ+ICovfVxuICAgICAgICAgICAgPFRleHQ+e2Jsb2cuZGVzY3JpcHRpb259PC9UZXh0PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249e1snY29sdW1uJywgJ3JvdyddfSBzcGFjaW5nPXsyfT5cbiAgICAgICAgICAgIHtibG9nLnRhZ3MubWFwKCh0YWcpID0+IChcbiAgICAgICAgICAgICAgPFRleHQgZm9udFdlaWdodD17NTAwfSBrZXk9e3RhZ30+XG4gICAgICAgICAgICAgICAgI3t0YWd9XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICA8L0ZsZXg+XG4gICAgPC9MaW5rPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==