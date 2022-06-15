/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/background.png":
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "072d51bcc9c09311d4c2a6708b05bddc.png");

/***/ }),

/***/ "./src/img/hills.png":
/*!***************************!*\
  !*** ./src/img/hills.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cfffe4c371f5e11d372b398a87c51dd0.png");

/***/ }),

/***/ "./src/img/platform.png":
/*!******************************!*\
  !*** ./src/img/platform.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffab39d3487de561be1a081fcfb3806d.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/platform.png */ "./src/img/platform.png");
/* harmony import */ var _img_hills_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/hills.png */ "./src/img/hills.png");
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/background.png */ "./src/img/background.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
/* I dont need to call window.innerWidth here below, innerWidth only will work,
since there is no other reference or scope other than window */

canvas.width = 1024;
canvas.height = 576;
var gravity = 1.8;

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.position = {
      x: 50,
      y: 50
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = 30;
    this.height = 30;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      ctx.fillStyle = 'red';
      ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;

      if (this.position.y + this.height + this.velocity.y <= canvas.height) {
        this.velocity.y += gravity;
      }
    }
  }]);

  return Player;
}();

var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.width = platformImage.width;
    this.height = platformImage.height;
    this.image = platformImage;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}();

var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image;

    _classCallCheck(this, GenericObject);

    this.position = {
      x: x,
      y: y
    };
    this.width = image.width;
    this.height = image.height;
    this.image = image;
  }

  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return GenericObject;
}();

var createImage = function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
};

var player = new Player();
var platformImage = createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var backgroundImage = createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
var hillImage = createImage(_img_hills_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
var platforms = [new Platform({
  x: -1,
  y: 452,
  platformImage: platformImage
}), new Platform({
  x: platformImage.width - 3,
  y: 452,
  image: platformImage
}), new Platform({
  x: 2 * platformImage.width + 100,
  y: 452,
  image: platformImage
}), new Platform({
  x: 3 * platformImage.width + 100 - 2,
  y: 452,
  image: platformImage
}), new Platform({
  x: 4 * platformImage.width + 100 - 4,
  y: 452,
  image: platformImage
}), new Platform({
  x: 5 * platformImage.width + 100 - 8,
  y: 452,
  image: platformImage
})];
var genericObjects = [new GenericObject({
  x: -1,
  y: -1,
  image: backgroundImage
}), new GenericObject({
  x: -1,
  y: 10,
  image: hillImage
})];
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};
var scrollTracker = 0;

var init = function init() {
  player = new Player();
  platformImage = createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
  backgroundImage = createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
  hillImage = createImage(_img_hills_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
  platforms = [new Platform({
    x: -1,
    y: 452,
    platformImage: platformImage
  }), new Platform({
    x: platformImage.width - 3,
    y: 452,
    image: platformImage
  }), new Platform({
    x: 2 * platformImage.width + 100,
    y: 452,
    image: platformImage
  }), new Platform({
    x: 3 * platformImage.width + 100 - 2,
    y: 452,
    image: platformImage
  }), new Platform({
    x: 4 * platformImage.width + 100 - 4,
    y: 452,
    image: platformImage
  }), new Platform({
    x: 5 * platformImage.width + 100 - 8,
    y: 452,
    image: platformImage
  })];
  genericObjects = [new GenericObject({
    x: -1,
    y: -1,
    image: backgroundImage
  }), new GenericObject({
    x: -1,
    y: 10,
    image: hillImage
  })];
  scrollTracker = 0;
};

var animate = function animate() {
  requestAnimationFrame(animate);
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  genericObjects.forEach(function (genericObject) {
    return genericObject.draw();
  });
  platforms.forEach(function (platform) {
    return platform.draw();
  });
  player.update(); // SIDEWAYS MOVEMENT CONDITIONING

  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = 10;
  } else if (keys.left.pressed && player.position.x > 100) {
    player.velocity.x = -10;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      scrollTracker += 5;
      platforms.forEach(function (platform) {
        return platform.position.x -= 5;
      });
      genericObjects.forEach(function (genericObject) {
        return genericObject.position.x -= 2;
      });
    } else if (keys.left.pressed) {
      scrollTracker -= 5;
      platforms.forEach(function (platform) {
        return platform.position.x += 5;
      });
      genericObjects.forEach(function (genericObject) {
        return genericObject.position.x += 2;
      });
    }
  } // PLATFORM BEHAVIOUR CONDITIONING


  platforms.forEach(function (platform) {
    if (player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.y + player.height <= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
    }
  });
  if (scrollTracker > 2000) console.log('you win!');
  if (player.position.y > canvas.height) init();
};

animate();
/* Once again I dont need to call window.addEventListener here below,
addEventListener only will work,
since there is no other reference or scope other than window */

addEventListener('keydown', function (_ref3) {
  var keyCode = _ref3.keyCode;

  switch (keyCode) {
    case 37:
      keys.left.pressed = true;
      break;

    case 39:
      keys.right.pressed = true;
      break;

    case 38:
      player.velocity.y -= 30;
      break;

    case 40:
      break;
  }
});
addEventListener('keyup', function (_ref4) {
  var keyCode = _ref4.keyCode;

  switch (keyCode) {
    case 37:
      keys.left.pressed = false;
      break;

    case 39:
      keys.right.pressed = false;
      break;

    case 38:
      break;

    case 40:
      break;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map