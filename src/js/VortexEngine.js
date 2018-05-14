
/**
 * Vortex Engine Constructor
 * @namespace VortexEngine
 */


import VortexEngineRenderer from './VortexEngineRenderer';
import VortexPhysics from './VortexPhysics';
import VortexEntity from './VortexEntity';


export default class VortexEngine {

    constructor(options) {

        this.name = options.name || 'Vortex Engine Game';
        this.entities = [];
        this.paused = true;
        this.renderer = new VortexEngineRenderer(options.render);
        this.physics = new VortexPhysics();
        
        this.input = [];
    }

    
    /**
     * Start the game loop
     * @param {function} callback 
     */
    start (callback) {

        this.paused = false;
        this.loop();


        document.addEventListener('keydown', e=>{
            this.input[e.key] = true;
        })

        document.addEventListener('keyup', e=>{
            this.input[e.key] = false;
        })


        if(typeof callback == "function") {
            callback();
        }
    }


    /**
     * Main render method
     */
    render () {

        this.renderer.render();

    }

    /**
     * Update physics engine at every frame
     */
    update () {

        this.physics.update();

    }

    /**
     * Main game loop
     */
    loop () {

        this.render();
        this.update();

        if(!this.paused){
            window.requestAnimationFrame(()=>{
                this.loop();
            })
        }

    }


    /**
     * Add entity to game instance
     * @param {VortexEntity} entity 
     */
    addEntity(entity) {

        if(entity instanceof VortexEntity) {
            this.renderer.bindEntity(entity);
            this.physics.bindEntity(entity);
        }
        

    }
    
 }