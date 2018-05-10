/**
 * Physics engine
 */


 export default class VortexPhysics {

    constructor(options) {

        this.gravity = 0;
        this.entities = [];
    }


    bindEntity(entity) {
        if(entity instanceof VortexEntity) {
            this.entity.push(entity);
        }
    }

    update () {

        if(this.entities.length > 0) {

            for(let i = 0; i < this.entities.length; this.entities++) {

                this.entities.update();

            }

        }

    }

    collide(objs) {



    }
 }