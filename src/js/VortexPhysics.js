/**
 * Physics engine
 */

 export default class VortexPhysics {

    constructor(options) {

        this.gravity = 0;
        this.entities = [];
    }


    bindEntity(entity) {
        this.entities.push(entity);

    }

    update () {

        let entities = this.entities;


        if(entities.length>0) {

            for(let i = 0; i<entities.length; i++) {

                entities[i].update();

            }

        }

    }

    collide(objs) {



    }
 }