
/**
 * Game entity
 */

import Input from './Input';
import Sprite from './Sprite';

 export default class VortexEntity {
     
    constructor(props) {

        if(typeof props !== 'object') {
            props = {};
        }
        
        this.id = parseInt(Math.random()*1000000) + new Array('a', 'b', 'c', 'd')[parseInt(Math.random()*4)];
        this.x = props.x || 0;
        this.y = props.y || 0;
        this.vx = props.vx || 0;
        this.vy = props.vy || 0;
        this.speed = props.speed || 0;
        this.width = props.width || 0;
        this.height = props.height || 0;
        this.sprite = props.sprite || null;
        this.color = props.color || null;
        this.inputs = [];
        this.step = props.step || null;
        this.solid = props.solid || false;
        this.colliding = false;
        this.weight = props.weight || false;

  

    }

 
    render (CTX) {

  

        if(this.sprite instanceof Sprite) {
            
            CTX.fillStyle = "yellow";
            CTX.fillRect(this.x, this.y, this.width, this.height);
            this.sprite.render(CTX, this);
            
        } else {

            CTX.fillStyle = this.color;
            CTX.fillRect(this.x, this.y, this.width, this.height);

        }
        

    }



    
    update () {
        

        this.x += this.vx;
        this.y += this.vy;
        

        if(typeof this.step == "function"){

            this.step(this);

        }

        console.log(this.vy);

    }

 }