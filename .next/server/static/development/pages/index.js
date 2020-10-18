module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/fullpage/fullpage.css":
/*!******************************************!*\
  !*** ./components/fullpage/fullpage.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/fullpage/fullpage.js":
/*!*****************************************!*\
  !*** ./components/fullpage/fullpage.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_awesome_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-awesome-slider */ "react-awesome-slider");
/* harmony import */ var react_awesome_slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_awesome_slider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_awesome_slider_dist_custom_animations_cube_animation_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-awesome-slider/dist/custom-animations/cube-animation.css */ "./node_modules/react-awesome-slider/dist/custom-animations/cube-animation.css");
/* harmony import */ var react_awesome_slider_dist_custom_animations_cube_animation_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_awesome_slider_dist_custom_animations_cube_animation_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_awesome_slider_dist_custom_animations_fall_animation_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-awesome-slider/dist/custom-animations/fall-animation.css */ "./node_modules/react-awesome-slider/dist/custom-animations/fall-animation.css");
/* harmony import */ var react_awesome_slider_dist_custom_animations_fall_animation_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_awesome_slider_dist_custom_animations_fall_animation_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_awesome_slider_dist_custom_animations_fold_out_animation_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-awesome-slider/dist/custom-animations/fold-out-animation.css */ "./node_modules/react-awesome-slider/dist/custom-animations/fold-out-animation.css");
/* harmony import */ var react_awesome_slider_dist_custom_animations_fold_out_animation_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_awesome_slider_dist_custom_animations_fold_out_animation_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_awesome_slider_dist_custom_animations_scale_out_animation_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-awesome-slider/dist/custom-animations/scale-out-animation.css */ "./node_modules/react-awesome-slider/dist/custom-animations/scale-out-animation.css");
/* harmony import */ var react_awesome_slider_dist_custom_animations_scale_out_animation_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_awesome_slider_dist_custom_animations_scale_out_animation_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_awesome_slider_dist_custom_animations_open_animation_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-awesome-slider/dist/custom-animations/open-animation.css */ "./node_modules/react-awesome-slider/dist/custom-animations/open-animation.css");
/* harmony import */ var react_awesome_slider_dist_custom_animations_open_animation_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_awesome_slider_dist_custom_animations_open_animation_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-awesome-slider/dist/navigation */ "react-awesome-slider/dist/navigation");
/* harmony import */ var react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./media */ "./components/fullpage/media.js");
/* harmony import */ var _startup_startup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../startup/startup */ "./components/startup/startup.js");
var _jsxFileName = "D:\\Repositories\\JFWorkshop-next\\jfworkshop\\components\\fullpage\\fullpage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const Slider = Object(react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_7__["withNavigationHandlers"])(react_awesome_slider__WEBPACK_IMPORTED_MODULE_1___default.a);
const options = [{
  label: "Cube Animation",
  value: "cubeAnimation"
}, {
  label: "Fall Animation",
  value: "fallAnimation"
}, {
  label: "Fold Out Animation",
  value: "foldOutAnimation"
}, {
  label: "Open Animation",
  value: "openAnimation"
}, {
  label: "Scale Out Animation",
  value: "scaleOutAnimation"
}];
/* harmony default export */ __webpack_exports__["default"] = (Object(react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_7__["withNavigationContext"])(({
  fullpage
}) => {
  const isFirstLoad = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
  const animation = fullpage.navigation.animation || `cubeAnimation`;
  return __jsx(Slider, {
    startupScreen: __jsx(_startup_startup__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 22
      }
    }),
    startupDelay: 275,
    animation: animation,
    className: "awesome-slider",
    onTransitionEnd: () => {
      // HANDLE THE PAGE ELEMENTS ANIMATION ON FIRST TRANSITION END
      if (isFirstLoad.current === true) {
        document.querySelector("body").classList.add("animated");
        document.querySelector("body").classList.add("visible");
      }
    },
    media: _media__WEBPACK_IMPORTED_MODULE_8__["media"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  });
}));

/***/ }),

/***/ "./components/fullpage/media.js":
/*!**************************************!*\
  !*** ./components/fullpage/media.js ***!
  \**************************************/
/*! exports provided: Home, PageTwo, PageThree, media */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTwo", function() { return PageTwo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageThree", function() { return PageThree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "media", function() { return media; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fullpage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fullpage.css */ "./components/fullpage/fullpage.css");
/* harmony import */ var _fullpage_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fullpage_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-awesome-slider/dist/navigation */ "react-awesome-slider/dist/navigation");
/* harmony import */ var react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../page/page */ "./components/page/page.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-particles-js */ "react-particles-js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\Repositories\\JFWorkshop-next\\jfworkshop\\components\\fullpage\\media.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Home = Object(react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_2__["withNavigationContext"])(({
  fullpage
}) => {
  return __jsx(_page_page__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(react_particles_js__WEBPACK_IMPORTED_MODULE_4___default.a, {
    params: {
      "particles": {
        "number": {
          "value": 160,
          "density": {
            "enable": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "speed": 4,
            "size_min": 0.3
          }
        },
        "line_linked": {
          "enable": false
        },
        "move": {
          "random": true,
          "speed": 1,
          "direction": "top",
          "out_mode": "out"
        }
      },
      "interactivity": {
        "events": {
          "onhover": {
            "enable": true,
            "mode": "bubble"
          },
          "onclick": {
            "enable": true,
            "mode": "repulse"
          }
        },
        "modes": {
          "bubble": {
            "distance": 250,
            "duration": 2,
            "size": 0,
            "opacity": 0
          },
          "repulse": {
            "distance": 400,
            "duration": 4
          }
        }
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, "This is home"));
});
const PageTwo = Object(react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_2__["withNavigationContext"])(({
  fullpage
}) => {
  return __jsx(_page_page__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }, __jsx(react_particles_js__WEBPACK_IMPORTED_MODULE_4___default.a, {
    params: {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 773.4013084687446,
          "color": "#b94c4c",
          "opacity": 0.11048590120982064,
          "width": 1.8940440207397828
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 30,
            "duration": 2,
            "opacity": 6,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 7
    }
  }, "This is second page"));
});
const PageThree = Object(react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_2__["withNavigationContext"])(({
  fullpage
}) => {
  return __jsx(_page_page__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 5
    }
  }, __jsx(react_particles_js__WEBPACK_IMPORTED_MODULE_4___default.a, {
    params: {
      "particles": {
        "number": {
          "value": 150,
          "density": {
            "enable": true,
            "value_area": 900.6025061692789
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 1,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 3
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.6810242604877742,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 4,
            "size_min": 0.3,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 157.83700172831522,
          "color": "#ffffff",
          "opacity": 0.15783700172831522,
          "width": 0.6313480069132609
        },
        "move": {
          "enable": true,
          "speed": 1,
          "direction": "top-right",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 1104.8590120982064,
            "rotateY": 710.2665077774184
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "bubble"
          },
          "onclick": {
            "enable": true,
            "mode": "repulse"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 167.83216783216784,
            "size": 15.984015984015986,
            "duration": 1.5184815184815184,
            "opacity": 0,
            "speed": 3
          },
          "repulse": {
            "distance": 400,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 7
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 7
    }
  }, "This is third page"));
});
const media = [{
  slug: "",
  className: "slide page-one",
  children: __jsx(Home, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 15
    }
  })
}, {
  slug: "page-two",
  className: "slide page-two",
  children: __jsx(PageTwo, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 15
    }
  })
}, {
  slug: "page-three",
  className: "slide page-three",
  children: __jsx(PageThree, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 15
    }
  })
}];

/***/ }),

/***/ "./components/page/page.css":
/*!**********************************!*\
  !*** ./components/page/page.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/page/page.js":
/*!*********************************!*\
  !*** ./components/page/page.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _page_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page.css */ "./components/page/page.css");
/* harmony import */ var _page_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_page_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Repositories\\JFWorkshop-next\\jfworkshop\\components\\page\\page.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Page = ({
  children
}) => {
  return __jsx("div", {
    className: "page",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 10
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./components/react-logo/react-logo.js":
/*!*********************************************!*\
  !*** ./components/react-logo/react-logo.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_logo_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./react-logo.scss */ "./components/react-logo/react-logo.scss");
/* harmony import */ var _react_logo_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_logo_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Repositories\\JFWorkshop-next\\jfworkshop\\components\\react-logo\\react-logo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ReactLogo = () => {
  return __jsx("div", {
    className: "logo-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ReactLogo);

/***/ }),

/***/ "./components/react-logo/react-logo.scss":
/*!***********************************************!*\
  !*** ./components/react-logo/react-logo.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/startup/startup.js":
/*!***************************************!*\
  !*** ./components/startup/startup.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_logo_react_logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../react-logo/react-logo */ "./components/react-logo/react-logo.js");
/* harmony import */ var _startup_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startup.scss */ "./components/startup/startup.scss");
/* harmony import */ var _startup_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_startup_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Repositories\\JFWorkshop-next\\jfworkshop\\components\\startup\\startup.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Startup = () => {
  return __jsx("div", {
    className: "startup",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx(_react_logo_react_logo__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Startup);

/***/ }),

/***/ "./components/startup/startup.scss":
/*!*****************************************!*\
  !*** ./components/startup/startup.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-awesome-slider/dist/custom-animations/cube-animation.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-awesome-slider/dist/custom-animations/cube-animation.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-awesome-slider/dist/custom-animations/fall-animation.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-awesome-slider/dist/custom-animations/fall-animation.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-awesome-slider/dist/custom-animations/fold-out-animation.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/react-awesome-slider/dist/custom-animations/fold-out-animation.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-awesome-slider/dist/custom-animations/open-animation.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-awesome-slider/dist/custom-animations/open-animation.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-awesome-slider/dist/custom-animations/scale-out-animation.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/react-awesome-slider/dist/custom-animations/scale-out-animation.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_fullpage_fullpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/fullpage/fullpage */ "./components/fullpage/fullpage.js");
var _jsxFileName = "D:\\Repositories\\JFWorkshop-next\\jfworkshop\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Home = () => {
  return __jsx(_components_fullpage_fullpage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 10
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Repositories\JFWorkshop-next\jfworkshop\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-awesome-slider":
/*!***************************************!*\
  !*** external "react-awesome-slider" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-awesome-slider");

/***/ }),

/***/ "react-awesome-slider/dist/navigation":
/*!*******************************************************!*\
  !*** external "react-awesome-slider/dist/navigation" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-awesome-slider/dist/navigation");

/***/ }),

/***/ "react-particles-js":
/*!*************************************!*\
  !*** external "react-particles-js" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-particles-js");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map