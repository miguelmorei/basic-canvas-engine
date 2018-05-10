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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
/**
 * Game entity
 */

var _Input = __webpack_require__(1);

var _Input2 = _interopRequireDefault(_Input);

var _Sprite = __webpack_require__(2);

var _Sprite2 = _interopRequireDefault(_Sprite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VortexEntity = function () {
    function VortexEntity(props) {
        _classCallCheck(this, VortexEntity);

        if ((typeof props === 'undefined' ? 'undefined' : _typeof(props)) !== 'object') {
            props = {};
        }

        this.x = props.x || 0;
        this.y = props.y || 0;
        this.vx = props.vx || 0;
        this.vy = props.vy || 0;
        this.speed = props.speed || 0;
        this.sx = props.sx || 0;
        this.sy = props.sy || 0;
        this.sprite = props.sprite || null;
        this.color = props.color || null;
        this.inputs = [];

        console.log(this.sprite);
        window.sprite = this.sprite;
    }

    _createClass(VortexEntity, [{
        key: 'render',
        value: function render(CTX) {

            if (this.sprite instanceof _Sprite2.default) {

                CTX.drawImage(this.sprite.image, this.x, this.y, this.sprite.width, this.sprite.height, this.x, this.y, this.sx, this.sy);

                CTX.fillStyle = this.color;
                CTX.fillRect(this.x, this.y, 5, 5);

                // ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);

            } else {

                CTX.fillStyle = this.color;
                CTX.fillRect(this.x, this.y, this.sx, this.sy);
            }
        }
    }, {
        key: 'update',
        value: function update() {

            this.x += this.vx;
            this.y += this.vy;
        }
    }]);

    return VortexEntity;
}();

exports.default = VortexEntity;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Manage inputs
 */

var Input = function Input(event, input, callback) {
  _classCallCheck(this, Input);

  this.event = event;
  this.input = input;
  this.callback = callback;
};

exports.default = Input;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Sprite
 */

var Sprite = function () {
    function Sprite(src, totalFrames) {
        _classCallCheck(this, Sprite);

        this.image = this.createImage(src);
        this.currentFrame = 0;
        this.totalFrames = totalFrames || 0;
    }

    _createClass(Sprite, [{
        key: "createImage",
        value: function createImage(src) {

            var image = new Image();
            image.src = src;
            this.width = parseInt(image.width) / this.totalFrames;
            this.height = image.height;
            return image;
        }
    }]);

    return Sprite;
}();

exports.default = Sprite;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _VortexEngine = __webpack_require__(5);

var _VortexEngine2 = _interopRequireDefault(_VortexEngine);

var _VortexEntity = __webpack_require__(0);

var _VortexEntity2 = _interopRequireDefault(_VortexEntity);

var _Input = __webpack_require__(1);

var _Input2 = _interopRequireDefault(_Input);

var _Sprite = __webpack_require__(2);

var _Sprite2 = _interopRequireDefault(_Sprite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create a game
 */
var myGame = new _VortexEngine2.default({
    name: 'My test game',
    render: {
        width: 600,
        height: 400
    }
});

myGame.start();

var myObject = new _VortexEntity2.default({
    x: 20,
    y: 20,
    sx: 90,
    sy: 180,
    color: 'black',
    sprite: new _Sprite2.default('/img/spritesheet.png', 8)
});

document.addEventListener('keydown', function (e) {

    if (e.key == 'd') {
        myObject.vx = 5;
    }
});

myGame.addEntity(myObject);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
/**
 * Vortex Engine Constructor
 */

var _VortexEngineRenderer = __webpack_require__(6);

var _VortexEngineRenderer2 = _interopRequireDefault(_VortexEngineRenderer);

var _VortexPhysics = __webpack_require__(8);

var _VortexPhysics2 = _interopRequireDefault(_VortexPhysics);

var _VortexEntity = __webpack_require__(0);

var _VortexEntity2 = _interopRequireDefault(_VortexEntity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VortexEngine = function () {
    function VortexEngine(options) {
        _classCallCheck(this, VortexEngine);

        this.name = options.name || 'Vortex Engine Game';
        this.entities = [];
        this.paused = true;
        this.renderer = new _VortexEngineRenderer2.default(options.render);
        this.physics = new _VortexPhysics2.default();
    }

    _createClass(VortexEngine, [{
        key: 'start',
        value: function start() {

            this.paused = false;
            this.loop();
        }
    }, {
        key: 'render',
        value: function render() {

            this.renderer.render();
        }
    }, {
        key: 'update',
        value: function update() {

            this.physics.update();
        }
    }, {
        key: 'loop',
        value: function loop() {
            var _this = this;

            this.render();
            this.update();

            if (!this.paused) {
                window.requestAnimationFrame(function () {
                    _this.loop();
                });
            }
        }
    }, {
        key: 'addEntity',
        value: function addEntity(entity) {

            if (entity instanceof _VortexEntity2.default) {
                this.renderer.bindEntity(entity);
                this.physics.bindEntity(entity);
            }
        }
    }]);

    return VortexEngine;
}();

exports.default = VortexEngine;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

/**
 * Vortex Engine Renderer
 */


var _Canvas = __webpack_require__(7);

var _Canvas2 = _interopRequireDefault(_Canvas);

var _VortexEntity = __webpack_require__(0);

var _VortexEntity2 = _interopRequireDefault(_VortexEntity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VortexEngineRenderer = function () {
    function VortexEngineRenderer(options) {
        _classCallCheck(this, VortexEngineRenderer);

        this.CANVAS = new _Canvas2.default(options.canvas, options.width, options.height, options.container);
        this.CTX = this.CANVAS.getContext('2d');
        this.WIDTH = this.CANVAS.width;
        this.HEIGHT = this.CANVAS.height;
        this.entities = [];
        this.backgroundColor = options.backgroundColor || '#f0f0f0';
    }

    _createClass(VortexEngineRenderer, [{
        key: 'bindEntity',
        value: function bindEntity(entity) {

            if (entity instanceof _VortexEntity2.default) {
                this.entities.push(entity);
            }
        }
    }, {
        key: 'render',
        value: function render() {

            this.CTX.clearRect(0, 0, this.WIDTH, this.HEIGHT);
            this.CTX.fillStyle = this.backgroundColor;
            this.CTX.fillRect(0, 0, this.WIDTH, this.HEIGHT);

            var entities = this.entities;

            if (entities.length > 0) {

                for (var i = 0; i < entities.length; i++) {

                    entities[i].render(this.CTX);
                }
            }
        }
    }]);

    return VortexEngineRenderer;
}();

exports.default = VortexEngineRenderer;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Canvas;
function Canvas(canvas, w, h, container) {

    if (canvas) {
        canvas.width = w;
        canvas.height = h;
        document.body.appendChild(canvas);
        return canvas;
    }

    console.log(w);

    canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    document.body.appendChild(canvas);

    return canvas;
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Physics engine
 */

var VortexPhysics = function () {
    function VortexPhysics(options) {
        _classCallCheck(this, VortexPhysics);

        this.gravity = 0;
        this.entities = [];
    }

    _createClass(VortexPhysics, [{
        key: "bindEntity",
        value: function bindEntity(entity) {
            this.entities.push(entity);
        }
    }, {
        key: "update",
        value: function update() {

            var entities = this.entities;

            if (entities.length > 0) {

                for (var i = 0; i < entities.length; i++) {

                    entities[i].update();
                }
            }
        }
    }, {
        key: "collide",
        value: function collide(objs) {}
    }]);

    return VortexPhysics;
}();

exports.default = VortexPhysics;

/***/ })
/******/ ]);