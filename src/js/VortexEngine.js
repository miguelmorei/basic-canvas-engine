
/**
 * Vortex Engine Constructor
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
    }

    start () {

        this.paused = false;
        this.loop();


    }

    render () {

        this.renderer.render();

    }

    update () {

        this.physics.update();

    }

    loop () {

        this.render();
        this.update();

        if(!this.paused){
            window.requestAnimationFrame(()=>{
                this.loop();
            })
        }

    }

    addEntity(entity) {

        if(entity instanceof VortexEntity) {
            this.renderer.bindEntity(entity);
            this.physics.bindEntity(entity);
        }
        

    }
    
 }