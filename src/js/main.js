

/**
 * Create a game
 */
import VortexEngine from './VortexEngine';
import VortexEntity from './VortexEntity';
import Input from './Input';
import Sprite from './Sprite';


const myGame = new VortexEngine({
    name : 'My test game', 
    render : {
        width : 600,
        height: 400
    }
});

myGame.start();




let walkRight = new Sprite('/img/spritesheet.png', 8, 6);
let walkLeft = new Sprite('/img/spritesheet2.png', 8, 6);
let idle = new Sprite('/img/idle.png', 1, 30);
const myObject = new VortexEntity({
    x : 20,
    y : 100,
    sx : 90,
    sy : 180,
    color : 'black',
    sprite : walkLeft
});

console.log(myObject);



myObject.step = function(){
    this.vx = 0;
    this.sprite = walkLeft;
    if(myGame.input.d) {
        this.vx = 5;
        this.sprite = walkRight;
    }

    if(myGame.input.a) {
        this.vx = -5;
        this.sprite = walkLeft;
    }
    

}
myGame.addEntity(myObject);
