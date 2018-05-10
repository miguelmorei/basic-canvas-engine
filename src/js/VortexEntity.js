
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

        console.log(this.sprite);
        window.sprite = this.sprite;

    }

 
    render (CTX) {

        if(this.sprite instanceof Sprite) {

            CTX.drawImage(
                this.sprite.image,
                this.x,
                this.y,
                this.sprite.width,
                this.sprite.height,
                this.x,                
                this.y,
                this.sx,
                this.sy
                
            )

            CTX.fillStyle = this.color;
            CTX.fillRect(this.x, this.y, 5, 5);

           // ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);


        } else {

            CTX.fillStyle = this.color;
            CTX.fillRect(this.x, this.y, this.sx, this.sy);

        }
        

    }

    
    update () {

        this.x += this.vx;
        this.y += this.vy;

    }

 }