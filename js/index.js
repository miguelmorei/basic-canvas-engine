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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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
 * Main Game entity
 * @namespace VortexEntity
 */

var _Sprite = __webpack_require__(1);

var _Sprite2 = _interopRequireDefault(_Sprite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VortexEntity = function () {
    function VortexEntity(props) {
        _classCallCheck(this, VortexEntity);

        if ((typeof props === 'undefined' ? 'undefined' : _typeof(props)) !== 'object') {
            props = {};
        }

        this.id = parseInt(Math.random() * 1000000) + new Array('a', 'b', 'c', 'd')[parseInt(Math.random() * 4)];
        this.x = props.x || 0;
        this.y = props.y || 0;
        this.vx = props.vx || 0;
        this.vy = props.vy || 0;
        this.speed = props.speed || 0;
        this.width = props.width || 0;
        this.height = props.height || 0;
        this.sprite = props.sprite || null;
        this.color = props.color || null;
        this.inputs = [];
        this.step = props.step || null;
        this.solid = props.solid || false;
        this.colliding = false;
        this.weight = props.weight || false;
    }

    /**
     * Main render method, takes a canvas context as argument
     * @param {*} CTX 
     */


    _createClass(VortexEntity, [{
        key: 'render',
        value: function render(CTX) {

            if (this.sprite instanceof _Sprite2.default) {

                CTX.fillStyle = "yellow";
                CTX.fillRect(this.x, this.y, this.width, this.height);
                this.sprite.render(CTX, this);
            } else {

                //todo
                CTX.fillStyle = this.color;
                CTX.fillRect(this.x, this.y, this.width, this.height);
            }
        }

        /**
         * Main update method
         */

    }, {
        key: 'update',
        value: function update() {

            this.x += this.vx;
            this.y += this.vy;

            if (typeof this.step == "function") {

                this.step(this);
            }
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Sprite
 * @namespace Sprite
 */

var Sprite = function () {
    function Sprite(src, totalFrames, ticks) {
        _classCallCheck(this, Sprite);

        this.totalFrames = totalFrames || 0;
        this.image = this.createImage(src);
        this.currentFrame = 0;
        this.tick = 0;
        this.ticksPerFrame = ticks || 1;
    }

    /**
     * Create an image element
     * @param {string} src 
     */


    _createClass(Sprite, [{
        key: "createImage",
        value: function createImage(src) {

            var image = new Image();
            image.src = src;
            this.width = parseInt(image.width) / this.totalFrames;
            this.height = image.height;
            return image;
        }

        /**
         * Render sprite on provided canvas and loop through frames
         * @param {*} CTX 
         * @param {*} obj 
         */

    }, {
        key: "render",
        value: function render(CTX, obj) {

            this.tick += 1;

            if (this.tick > this.ticksPerFrame) {

                this.tick = 0;
                this.currentFrame++;

                if (this.currentFrame >= this.totalFrames) {
                    this.currentFrame = 0;
                }
            }

            CTX.drawImage(this.image, this.currentFrame * this.width, 0, this.width, this.height, obj.x, obj.y, obj.width, obj.height);
        }
    }]);

    return Sprite;
}();

exports.default = Sprite;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _VortexEngine = __webpack_require__(4);

var _VortexEngine2 = _interopRequireDefault(_VortexEngine);

var _VortexEntity = __webpack_require__(0);

var _VortexEntity2 = _interopRequireDefault(_VortexEntity);

var _Sprite = __webpack_require__(1);

var _Sprite2 = _interopRequireDefault(_Sprite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var myGame = new _VortexEngine2.default({
    name: 'My test game',
    render: {
        width: 800,
        height: 600
    }
});

/**
 * Create a game
 */


myGame.start();

var walkRight = new _Sprite2.default('/img/walk-right.png', 3, 6);
var walkLeft = new _Sprite2.default('/img/walk-left.png', 3, 6);
var idle = new _Sprite2.default('/img/idle.png', 4, 8);
var attackSprite = new _Sprite2.default('/img/walk-left.png', 3, 6);
var myObject = new _VortexEntity2.default({
    x: 400,
    y: 100,
    width: 60,
    height: 100,
    color: 'black',
    sprite: walkLeft,
    solid: true,
    weight: 0
});

console.log(myObject);

myObject.step = function () {
    this.vx = 0;
    this.vy = 0;
    this.sprite = idle;
    if (myGame.input.d) {
        this.vx = 5;
        this.sprite = walkRight;
    }

    if (myGame.input.a) {
        this.vx = -5;
        this.sprite = walkLeft;
    }

    if (myGame.input.w) {
        this.vy = -5;
    }

    if (myGame.input.s) {
        this.vy = 5;
    }
};

var wall = new _VortexEntity2.default({
    x: 200,
    y: 100,
    width: 100,
    height: 100,
    color: 'red',
    solid: true
});

var wall2 = new _VortexEntity2.default({
    x: 500,
    y: 380,
    width: 100,
    height: 100,
    color: 'red',
    solid: true,
    weight: 0.01
});

var ground = new _VortexEntity2.default({
    x: 0,
    y: 500,
    width: 800,
    height: 40,
    color: 'blue',
    solid: true,
    weight: 0
});
myGame.addEntity(ground);
myGame.addEntity(wall);
myGame.addEntity(wall2);
myGame.addEntity(myObject);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
/**
 * Vortex Engine Constructor
 * @namespace VortexEngine
 */

var _VortexEngineRenderer = __webpack_require__(5);

var _VortexEngineRenderer2 = _interopRequireDefault(_VortexEngineRenderer);

var _VortexPhysics = __webpack_require__(7);

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

        this.input = [];
    }

    /**
     * Start the game loop
     * @param {function} callback 
     */


    _createClass(VortexEngine, [{
        key: 'start',
        value: function start(callback) {
            var _this = this;

            this.paused = false;
            this.loop();

            document.addEventListener('keydown', function (e) {
                _this.input[e.key] = true;
            });

            document.addEventListener('keyup', function (e) {
                _this.input[e.key] = false;
            });

            if (typeof callback == "function") {
                callback();
            }
        }

        /**
         * Main render method
         */

    }, {
        key: 'render',
        value: function render() {

            this.renderer.render();
        }

        /**
         * Update physics engine at every frame
         */

    }, {
        key: 'update',
        value: function update() {

            this.physics.update();
        }

        /**
         * Main game loop
         */

    }, {
        key: 'loop',
        value: function loop() {
            var _this2 = this;

            this.render();
            this.update();

            if (!this.paused) {
                window.requestAnimationFrame(function () {
                    _this2.loop();
                });
            }
        }

        /**
         * Add entity to game instance
         * @param {VortexEntity} entity 
         */

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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

/**
 * Vortex Engine Renderer
 * @namespace VortexEngineRenderer
 */


var _Canvas = __webpack_require__(6);

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
        this.FPS = options.fps || 60;
        this.THEN = Date.now();
        this.INTERVAL = 1000 / this.FPS;
        this.DELTA = 0;
        this.entities = [];

        this.backgroundColor = options.backgroundColor || '#f0f0f0';
    }

    /**
     * Attach entity to be rendered
     * @param {VortexEntity} entity 
     */


    _createClass(VortexEngineRenderer, [{
        key: 'bindEntity',
        value: function bindEntity(entity) {

            if (entity instanceof _VortexEntity2.default) {
                this.entities.push(entity);
            }
        }

        /**
         * Main render method
         */

    }, {
        key: 'render',
        value: function render() {

            this.NOW = Date.now();
            this.DELTA = this.NOW - this.THEN;

            if (this.DELTA > this.INTERVAL) {

                this.CTX.fillStyle = this.backgroundColor;
                this.CTX.fillRect(0, 0, this.WIDTH, this.HEIGHT);

                var entities = this.entities;

                if (entities.length > 0) {

                    for (var i = 0; i < entities.length; i++) {

                        entities[i].render(this.CTX);
                    }
                }

                this.THEN = this.NOW - this.DELTA % this.INTERVAL;
            }
        }
    }]);

    return VortexEngineRenderer;
}();

exports.default = VortexEngineRenderer;

/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Physics engine
 * @namespace VortexPhysics
 * 
 */
var VortexPhysics = function () {
    function VortexPhysics(options) {
        _classCallCheck(this, VortexPhysics);

        this.gravity = 0;
        this.entities = [];
    }

    /**
     * Bind a game entity/object to the physics engine
     * @param {VortexEntity} entity 
     */


    _createClass(VortexPhysics, [{
        key: "bindEntity",
        value: function bindEntity(entity) {
            this.entities.push(entity);
        }

        /**
         * Apply relevant physics equations on this loop
         */

    }, {
        key: "update",
        value: function update() {

            var entities = this.entities;

            if (entities.length > 0) {

                for (var i = 0; i < entities.length; i++) {

                    entities[i].update();

                    if (entities[i].solid) {
                        this.collide(entities[i]);
                    }

                    this.applyGlobalForces(entities[i]);
                }
            }
        }

        /**
         * Apply global forces (eg:gravity) to a specific instance
         * @param {VortexEntity} entity 
         */

    }, {
        key: "applyGlobalForces",
        value: function applyGlobalForces(entity) {

            if (this.gravity != 0) {

                entity.vy = this.gravity * entity.weight;
            }
        }

        /**
         * Rectangular Object collision detection
         * @param {VortexEntity} a 
         */

    }, {
        key: "collide",
        value: function collide(a) {

            var entities = this.entities;

            for (var i = 0; i < entities.length; i++) {

                if (entities[i].id != a.id) {
                    var b = entities[i];

                    if ((a.x + a.vx >= b.x && a.x + a.vx <= b.x + b.width || a.x + a.width + a.vx >= b.x && a.x + a.width + a.vx <= b.x + b.width) && (a.y + a.vy >= b.y && a.y + a.vy <= b.y + b.height || a.y + a.height + a.vy >= b.y && a.y + a.height + a.vy <= b.y + b.height)) {

                        a.colliding = true;
                    } else {

                        b.colliding = false;
                    }
                }
            }
        }
    }]);

    return VortexPhysics;
}();

exports.default = VortexPhysics;

/***/ })
/******/ ]);