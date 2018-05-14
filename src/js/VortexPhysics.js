/**
 * Physics engine
 * @namespace VortexPhysics
 * 
 */
 export default class VortexPhysics {

    constructor(options) {

        this.gravity = 0;
        this.entities = [];
    }

    /**
     * Bind a game entity/object to the physics engine
     * @param {VortexEntity} entity 
     */
    bindEntity(entity) {
        this.entities.push(entity);

    }

    /**
     * Apply relevant physics equations on this loop
     */
    update () {

        let entities = this.entities;

        if(entities.length>0) {

            for(let i = 0; i<entities.length; i++) {
              
                
                entities[i].update();

                if(entities[i].solid) {
                    this.collide(entities[i]);
                }

                this.applyGlobalForces(entities[i]);

            }

        }

    }

    /**
     * Apply global forces (eg:gravity) to a specific instance
     * @param {VortexEntity} entity 
     */
    applyGlobalForces (entity) {

        if(this.gravity != 0) {

             entity.vy = this.gravity * entity.weight;
     
        }

    }

    /**
     * Rectangular Object collision detection
     * @param {VortexEntity} a 
     */
    collide(a) {

        let entities = this.entities;

        for(let i = 0; i<entities.length; i++) {

            if(entities[i].id != a.id) {
                let b = entities[i];
                
                if(((a.x + a.vx >= b.x && a.x + a.vx <= b.x + b.width) || 
                    (a.x + a.width + a.vx >= b.x && a.x + a.width + a.vx <= b.x + b.width)) &&
                    ((a.y + a.vy >= b.y && a.y + a.vy <= b.y + b.height) || 
                    (a.y + a.height + a.vy >= b.y && a.y + a.height + a.vy <= b.y + b.height))) {

                        a.colliding = true;

                } else {

                        b.colliding = false;

                }
            }

        }

    }
 }