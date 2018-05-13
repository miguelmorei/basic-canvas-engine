/**
 * Physics engine
 */

 export default class VortexPhysics {

    constructor(options) {

        this.gravity = 8;
        this.entities = [];
    }


    bindEntity(entity) {
        this.entities.push(entity);

    }

    update () {

        let entities = this.entities;



        if(entities.length>0) {

            for(let i = 0; i<entities.length; i++) {
                this.applyGlobalForces(entities[i]);
                
               

                if(entities[i].solid) {
                    this.collide(entities[i]);
                }
               
                entities[i].update();


            }

        }

    }

    applyGlobalForces (entity) {

        if(this.gravity != 0) {

             entity.vy = this.gravity * entity.weight;
    
         
        }

    }

    collide(a) {

        let entities = this.entities;

        for(let i = 0; i<entities.length; i++) {

            if(entities[i].id != a.id) {
                let b = entities[i];
                

                //todo
                if((a.y + a.height + a.vy >= b.y && a.y + a.height + a.vy <= b.y + b.height)) {

                    a.vy = 0;

                }
            }

        }

    }
 }