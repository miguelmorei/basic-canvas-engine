
/**
 * Sprite
 * @namespace Sprite
 */


export default class Sprite {
    
    constructor(src, totalFrames, ticks) {
        this.totalFrames = totalFrames || 0;
        this.image = this.createImage(src);
        this.currentFrame = 0;
        this.tick = 0;
        this.ticksPerFrame = ticks || 1;
    }


    /**
     * Create an image element
     * @param {string} src 
     */
    createImage(src) {

        let image = new Image();
        image.src = src;
        this.width = parseInt(image.width) / this.totalFrames;
        this.height = image.height;
        return image;
        
    }

    /**
     * Render sprite on provided canvas and loop through frames
     * @param {*} CTX 
     * @param {*} obj 
     */
    render(CTX, obj) {
        
        this.tick +=1;

        if(this.tick > this.ticksPerFrame ) {

            this.tick = 0;
            this.currentFrame++;

            if(this.currentFrame >= this.totalFrames) {
                this.currentFrame = 0 ;
            }

        }
        
        CTX.drawImage(
            this.image,
            (this.currentFrame * (this.width)),
            0,
            this.width,
            this.height,
            obj.x,                
            obj.y,
            obj.width,
            obj.height
        )
        
    }

}