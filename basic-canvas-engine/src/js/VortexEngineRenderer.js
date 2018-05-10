

/**
 * Vortex Engine Renderer
 */
import Canvas from './Canvas';
import VortexEntity from './VortexEntity';


 export default class VortexEngineRenderer {

    constructor(options) {
        
        
        this.CANVAS = new Canvas(options.canvas, options.width, options.height, options.container);
        this.CTX = this.CANVAS.getContext('2d');
        this.WIDTH = this.CANVAS.width;
        this.HEIGHT =this.CANVAS.height;
        this.entities = [];
        this.backgroundColor = options.backgroundColor || '#f0f0f0';


    }


    bindEntity(entity) {

        if(entity instanceof VortexEntity) {
            this.entities.push(entity);
        }

    }


    render () {

        this.CTX.clearRect(0, 0, this.WIDTH, this.HEIGHT);
        this.CTX.fillStyle = this.backgroundColor;
        this.CTX.fillRect(0, 0, this.WIDTH, this.HEIGHT);

        let entities = this.entities;

        if(entities.length>0) {

            for(let i = 0; i<entities.length; i++) {

                entities[i].render(this.CTX);

            }

        }

        window.requestAnimationFrame(()=>{
            this.render();
        });

    }

 }


