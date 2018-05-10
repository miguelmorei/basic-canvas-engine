
/**
 * Sprite
 */


export default class Sprite {
    
    constructor(src, totalFrames) {
        this.image = this.createImage(src);
        this.currentFrame = 0;
        this.totalFrames = totalFrames || 0;
    }


    createImage(src) {

        let image = new Image();
        image.src = src;
        this.width = parseInt(image.width) / this.totalFrames;
        this.height = image.height;
        return image;
        
    }

}