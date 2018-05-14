

/**
 * Vortex Engine Renderer
 * @namespace VortexEngineRenderer
 */
import Canvas from './Canvas';
import VortexEntity from './VortexEntity';


 export default class VortexEngineRenderer {

    constructor(options) {
        
        
        this.CANVAS = new Canvas(options.canvas, options.width, options.height, options.container);
        this.CTX = this.CANVAS.getContext('2d');
        this.WIDTH = this.CANVAS.width;
        this.HEIGHT =this.CANVAS.height;
        this.FPS = options.fps || 60;
        this.THEN = Date.now();
        this.INTERVAL = 1000/this.FPS;
        this.DELTA = 0;
        this.entities = [];
     
        this.backgroundColor = options.backgroundColor || '#f0f0f0';


    }


    /**
     * Attach entity to be rendered
     * @param {VortexEntity} entity 
     */
    bindEntity(entity) {

        if(entity instanceof VortexEntity) {
            this.entities.push(entity);
        }

    }


    /**
     * Main render method
     */
    render () {

        this.NOW = Date.now();
        this.DELTA = this.NOW - this.THEN;

        if(this.DELTA > this.INTERVAL) {

            this.CTX.fillStyle = this.backgroundColor;
            this.CTX.fillRect(0, 0, this.WIDTH, this.HEIGHT);

            let entities = this.entities;

            if(entities.length>0) {

                for(let i = 0; i<entities.length; i++) {

                    entities[i].render(this.CTX);

                }

            }

            this.THEN = this.NOW - (this.DELTA % this.INTERVAL);

        }

        

    }

 }


