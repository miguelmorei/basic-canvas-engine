
/**
 * Vortex Engine Constructor
 */


import VortexEngineRenderer from './VortexEngineRenderer';
import VortexEntity from './VortexEntity';


export default class VortexEngine {

    constructor(options) {

        this.name = options.name || 'Vortex Engine Game';
        this.entities = [];
        this.paused = true;
        this.renderer = new VortexEngineRenderer(options.render);

    }

    start () {

        this.render();

    }

    render () {

        this.renderer.render();

    }

    addEntity(entity) {

        if(entity instanceof VortexEntity) {
            this.entities.push(entity);
            this.renderer.bindEntity(entity);
        }
        

    }
    
 }