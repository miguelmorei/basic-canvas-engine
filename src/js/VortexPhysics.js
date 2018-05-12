/**
 * Physics engine
 */

 export default class VortexPhysics {

    constructor(options) {

        this.gravity =0;
        this.entities = [];
    }


    bindEntity(entity) {
        this.entities.push(entity);

    }

    update () {

        let entities = this.entities;

        this.applyGlobalForces();

        if(entities.length>0) {

            for(let i = 0; i<entities.length; i++) {

                entities[i].update();

            }

        }

    }


    applyGlobalForces () {
        let entities = this.entities;

        if(this.gravity != 0) {

            if(entities.length>0) {

                for(let i = 0; i<entities.length; i++) {
    
                    entities[i].vy = this.gravity;
    
                }
    
            }

        }

    }

    collide(objs) {



    }
 }