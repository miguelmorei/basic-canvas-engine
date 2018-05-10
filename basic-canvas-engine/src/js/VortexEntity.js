
/**
 * Game entity
 */

import Input from './Input';

 export default class VortexEntity {
     
    constructor(props) {

        if(typeof props !== 'object') {
            props = {};
        }
        
        this.x = props.x || 0;
        this.y = props.y || 0;
        this.vx = props.vx || 0;
        this.vy = props.vy || 0;
        this.speed = props.speed || 0;
        this.sx = props.sx || 0;
        this.sy = props.sy || 0;
        this.sprite = props.sprite || null;
        this.color = props.color || null;
        this.inputs = [];

    }

    render (CTX) {

        if(typeof this.sprite == 'sprite') {

            //render sprite

        } else {

            CTX.fillStyle = this.color;
            CTX.fillRect(this.x, this.y, this.sx, this.sy);

        }
        

    }

    addInput(input) {

        this.inputs.push(new Input(65, (performing)=>{
            if(performing) {
                this.speed = 5;
            }
        }))

    }

    update () {

        for(let i = 0; i<this.inputs.length; i++) {
            this.inputs[i].performAction();

        }

        this.x += (this.vx * this.speed);
        this.vy = (this.vy * this.speed);

    }

 }