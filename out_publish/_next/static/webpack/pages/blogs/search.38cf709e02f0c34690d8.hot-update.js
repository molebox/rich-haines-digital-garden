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
    src: "cloud-1-small.png",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29udGVudEJveC5qcyJdLCJuYW1lcyI6WyJDb250ZW50Qm94IiwiYmxvZyIsImZ1bGwiLCJtaWQiLCJiYWJ5IiwiZ3Jvd3RoIiwiTmV4dExpbmsiLCJzbHVnIiwidGV4dERlY29yIiwiYmdDb2xvciIsImJvcmRlclJhZGl1cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0YWdzIiwibWFwIiwidGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxVQUFULE9BQThCO0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFROztBQUMzQyxNQUFNQyxJQUFJLEdBQ1IsTUFBQyxxREFBRDtBQUNFLFlBQVEsRUFBQyxVQURYO0FBRUUsYUFBUyxFQUFDLE9BRlo7QUFHRSxPQUFHLEVBQUMsS0FITjtBQUlFLFNBQUssRUFBQyxHQUpSO0FBS0UsV0FBTyxFQUFDLE1BTFY7QUFNRSxPQUFHLEVBQUMsZ0JBTk47QUFPRSxPQUFHLEVBQUMscUJBUE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGOztBQVdBLE1BQU1DLEdBQUcsR0FDUCxNQUFDLHFEQUFEO0FBQ0UsWUFBUSxFQUFDLFVBRFg7QUFFRSxhQUFTLEVBQUMsT0FGWjtBQUdFLFdBQU8sRUFBQyxNQUhWO0FBSUUsT0FBRyxFQUFDLEtBSk47QUFLRSxTQUFLLEVBQUMsR0FMUjtBQU1FLE9BQUcsRUFBQyxlQU5OO0FBT0UsT0FBRyxFQUFDLHlCQVBOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERjs7QUFXQSxNQUFNQyxJQUFJLEdBQ1IsTUFBQyxxREFBRDtBQUNFLFlBQVEsRUFBQyxVQURYO0FBRUUsYUFBUyxFQUFDLE9BRlo7QUFHRSxXQUFPLEVBQUMsTUFIVjtBQUlFLE9BQUcsRUFBQyxLQUpOO0FBS0UsU0FBSyxFQUFDLEdBTFI7QUFNRSxPQUFHLEVBQUMsbUJBTk47QUFPRSxPQUFHLEVBQUMsa0JBUE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGOztBQVlBLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDbkIsWUFBUUosSUFBSSxDQUFDSSxNQUFiO0FBQ0UsV0FBSyxNQUFMO0FBQ0UsZUFBT0gsSUFBUDs7QUFDRixXQUFLLEtBQUw7QUFDRSxlQUFPQyxHQUFQOztBQUNGLFdBQUssTUFBTDtBQUNFLGVBQU9DLElBQVA7QUFOSjtBQVFELEdBVEQ7O0FBV0EsU0FDRSxNQUFDLG9EQUFEO0FBQ0UsTUFBRSxFQUFFRSw4Q0FETjtBQUVFLFFBQUksa0JBQVdMLElBQUksQ0FBQ00sSUFBaEIsQ0FGTjtBQUdFLFVBQU0sRUFBRTtBQUNOQyxlQUFTLEVBQUUsTUFETDtBQUVOQyxhQUFPLEVBQUUsbUJBRkg7QUFHTkMsa0JBQVksRUFBRTtBQUhSLEtBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVNFLE1BQUMsb0RBQUQ7QUFDRSxRQUFJLEVBQUMsT0FEUDtBQUVFLFFBQUksRUFBRSxDQUFDLE9BQUQsRUFBVSxRQUFWLENBRlI7QUFHRSxLQUFDLEVBQUMsTUFISjtBQUlFLFVBQU0sRUFBQyxXQUpUO0FBS0UsZUFBVyxFQUFDLG1CQUxkO0FBTUUsZ0JBQVksRUFBQyxLQU5mO0FBT0UsS0FBQyxFQUFFLENBUEw7QUFRRSxZQUFRLEVBQUMsVUFSWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVUdMLE1BQU0sRUFWVCxFQVdFLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0RBQUQ7QUFBTSxjQUFVLEVBQUMsU0FBakI7QUFBMkIsZUFBVyxFQUFFO0FBQUVHLGVBQVMsRUFBRTtBQUFiLEtBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1AsSUFBSSxDQUFDVSxLQURSLENBREYsRUFLRSxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT1YsSUFBSSxDQUFDVyxXQUFaLENBTEYsQ0FERixFQVFFLE1BQUMscURBQUQ7QUFBTyxhQUFTLEVBQUUsQ0FBQyxRQUFELEVBQVcsS0FBWCxDQUFsQjtBQUFxQyxXQUFPLEVBQUUsQ0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHWCxJQUFJLENBQUNZLElBQUwsQ0FBVUMsR0FBVixDQUFjLFVBQUNDLEdBQUQ7QUFBQSxXQUNiLE1BQUMsb0RBQUQ7QUFBTSxnQkFBVSxFQUFFLEdBQWxCO0FBQXVCLFNBQUcsRUFBRUEsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUNJQSxHQURKLENBRGE7QUFBQSxHQUFkLENBREgsQ0FSRixDQVhGLENBVEYsQ0FERjtBQXdDRDtLQXRGdUJmLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZ3Mvc2VhcmNoLjM4Y2Y3MDllMDJmMGMzNDY5MGQ4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaW5rIGFzIE5leHRMaW5rIH0gZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IEJveCwgTGluaywgVGV4dCwgU3RhY2ssIEZsZXgsIEltYWdlIH0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGVudEJveCh7IGJsb2cgfSkge1xuICBjb25zdCBmdWxsID0gKFxuICAgIDxJbWFnZVxuICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICB0b3A9XCI1cHhcIlxuICAgICAgcmlnaHQ9XCIwXCJcbiAgICAgIGJveFNpemU9XCI1MHB4XCJcbiAgICAgIHNyYz1cImZ1bGwtZ3Jvd24ucG5nXCJcbiAgICAgIGFsdD1cIkEgZnVsbHkgZ3Jvd24gcGxhbnRcIlxuICAgIC8+XG4gICk7XG4gIGNvbnN0IG1pZCA9IChcbiAgICA8SW1hZ2VcbiAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgYm94U2l6ZT1cIjQwcHhcIlxuICAgICAgdG9wPVwiNXB4XCJcbiAgICAgIHJpZ2h0PVwiMFwiXG4gICAgICBzcmM9XCJtaWQtZ3Jvd24ucG5nXCJcbiAgICAgIGFsdD1cIkEgbWlkIHNpemVkIGdyb3duIHBsYW50XCJcbiAgICAvPlxuICApO1xuICBjb25zdCBiYWJ5ID0gKFxuICAgIDxJbWFnZVxuICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICBib3hTaXplPVwiMzBweFwiXG4gICAgICB0b3A9XCI1cHhcIlxuICAgICAgcmlnaHQ9XCIwXCJcbiAgICAgIHNyYz1cImNsb3VkLTEtc21hbGwucG5nXCJcbiAgICAgIGFsdD1cIkEgc2VlZGxpbmcgcGxhbnRcIlxuICAgIC8+XG4gICk7XG5cbiAgY29uc3QgZ3Jvd3RoID0gKCkgPT4ge1xuICAgIHN3aXRjaCAoYmxvZy5ncm93dGgpIHtcbiAgICAgIGNhc2UgJ2Z1bGwnOlxuICAgICAgICByZXR1cm4gZnVsbDtcbiAgICAgIGNhc2UgJ21pZCc6XG4gICAgICAgIHJldHVybiBtaWQ7XG4gICAgICBjYXNlICdiYWJ5JzpcbiAgICAgICAgcmV0dXJuIGJhYnk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExpbmtcbiAgICAgIGFzPXtOZXh0TGlua31cbiAgICAgIGhyZWY9e2AvYmxvZy8ke2Jsb2cuc2x1Z31gfVxuICAgICAgX2hvdmVyPXt7XG4gICAgICAgIHRleHREZWNvcjogJ25vbmUnLFxuICAgICAgICBiZ0NvbG9yOiAnYnJhbmQuY3JheW9sYS4xMDAnLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8RmxleFxuICAgICAgICByb2xlPVwiZ3JvdXBcIlxuICAgICAgICBtYXhXPXtbJzMwMHB4JywgJzE0NDBweCddfVxuICAgICAgICB3PVwiMTAwJVwiXG4gICAgICAgIGJvcmRlcj1cInNvbGlkIDNweFwiXG4gICAgICAgIGJvcmRlckNvbG9yPVwiYnJhbmQuY3JheW9sYS41MDBcIlxuICAgICAgICBib3JkZXJSYWRpdXM9XCI1cHhcIlxuICAgICAgICBwPXs4fVxuICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgID5cbiAgICAgICAge2dyb3d0aCgpfVxuICAgICAgICA8U3RhY2s+XG4gICAgICAgICAgPEJveD5cbiAgICAgICAgICAgIDxUZXh0IGZvbnRGYW1pbHk9XCJoZWFkaW5nXCIgX2dyb3VwSG92ZXI9e3sgdGV4dERlY29yOiAndW5kZXJsaW5lJyB9fT5cbiAgICAgICAgICAgICAge2Jsb2cudGl0bGV9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICB7LyogPFRleHQgZm9udFdlaWdodD17NTAwfT4gQnk6IHtibG9nLmF1dGhvcn08L1RleHQ+ICovfVxuICAgICAgICAgICAgPFRleHQ+e2Jsb2cuZGVzY3JpcHRpb259PC9UZXh0PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249e1snY29sdW1uJywgJ3JvdyddfSBzcGFjaW5nPXsyfT5cbiAgICAgICAgICAgIHtibG9nLnRhZ3MubWFwKCh0YWcpID0+IChcbiAgICAgICAgICAgICAgPFRleHQgZm9udFdlaWdodD17NTAwfSBrZXk9e3RhZ30+XG4gICAgICAgICAgICAgICAgI3t0YWd9XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICA8L0ZsZXg+XG4gICAgPC9MaW5rPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==