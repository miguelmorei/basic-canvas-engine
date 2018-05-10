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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
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

var _Input = __webpack_require__(6);

var _Input2 = _interopRequireDefault(_Input);

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
    }

    _createClass(VortexEntity, [{
        key: 'render',
        value: function render(CTX) {

            if (typeof this.sprite == 'sprite') {

                //render sprite

            } else {

                CTX.fillStyle = this.color;
                CTX.fillRect(this.x, this.y, this.sx, this.sy);
            }
        }
    }, {
        key: 'addInput',
        value: function addInput(input) {
            var _this = this;

            this.inputs.push(new _Input2.default(65, function (performing) {
                if (performing) {
                    _this.speed = 5;
                }
            }));
        }
    }, {
        key: 'update',
        value: function update() {

            for (var i = 0; i < this.inputs.length; i++) {
                this.inputs[i].performAction();
            }

            this.x += this.vx * this.speed;
            this.vy = this.vy * this.speed;
        }
    }]);

    return VortexEntity;
}();

exports.default = VortexEntity;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _VortexEngine = __webpack_require__(3);

var _VortexEngine2 = _interopRequireDefault(_VortexEngine);

var _VortexEntity = __webpack_require__(0);

var _VortexEntity2 = _interopRequireDefault(_VortexEntity);

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
    sx: 100,
    sy: 100,
    color: 'black'
});

myObject.addInput('a', function () {

    this.speed = 5;
});

myGame.addEntity(myObject);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
/**
 * Vortex Engine Constructor
 */

var _VortexEngineRenderer = __webpack_require__(4);

var _VortexEngineRenderer2 = _interopRequireDefault(_VortexEngineRenderer);

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
    }

    _createClass(VortexEngine, [{
        key: 'start',
        value: function start() {

            this.render();
        }
    }, {
        key: 'render',
        value: function render() {

            this.renderer.render();
        }
    }, {
        key: 'addEntity',
        value: function addEntity(entity) {

            if (entity instanceof _VortexEntity2.default) {
                this.entities.push(entity);
                this.renderer.bindEntity(entity);
            }
        }
    }]);

    return VortexEngine;
}();

exports.default = VortexEngine;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

/**
 * Vortex Engine Renderer
 */


var _Canvas = __webpack_require__(5);

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
            var _this = this;

            this.CTX.clearRect(0, 0, this.WIDTH, this.HEIGHT);
            this.CTX.fillStyle = this.backgroundColor;
            this.CTX.fillRect(0, 0, this.WIDTH, this.HEIGHT);

            var entities = this.entities;

            if (entities.length > 0) {

                for (var i = 0; i < entities.length; i++) {

                    entities[i].render(this.CTX);
                }
            }

            window.requestAnimationFrame(function () {
                _this.render();
            });
        }
    }]);

    return VortexEngineRenderer;
}();

exports.default = VortexEngineRenderer;

/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Manage inputs
 */

var Input = function () {
    function Input(input, action) {
        _classCallCheck(this, Input);

        this.input = input;
        this.action = action;
    }

    _createClass(Input, [{
        key: "performAction",
        value: function performAction(action) {

            if (typeof this.action == "function") {

                this.action();
            }
        }
    }]);

    return Input;
}();

exports.default = Input;

/***/ })
/******/ ]);