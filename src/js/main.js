

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
        width : 800,
        height: 600
    }
});

myGame.start();




let walkRight = new Sprite('/img/walk-right.png', 3, 6);
let walkLeft = new Sprite('/img/walk-left.png', 3, 6);
let idle = new Sprite('/img/idle.png', 4, 8);
let attackSprite = new Sprite('/img/walk-left.png', 3, 6);
const myObject = new VortexEntity({
    x : 400,
    y : 100,
    width : 60,
    height : 100, 
    color : 'black',
    sprite : walkLeft,
    solid : true,
    weight : 1
});

console.log(myObject);



myObject.step = function(){
    this.vx = 0;
    this.sprite = idle;
    if(myGame.input.d) {
        this.vx = 5;
        this.sprite = walkRight;
    }

    if(myGame.input.a) {
        this.vx = -5;
        this.sprite = walkLeft;
    }
    
    if(myGame.input.e) {
        this.sprite = attackSprite;
    }


}



let wall = new VortexEntity({
    x : 200,
    y : 100,
    width : 100,
    height : 100,
    color : 'red',
    solid : true
})

let wall2 = new VortexEntity({
    x : 500,
    y : 380,
    width : 100,
    height : 100,
    color : 'red',
    solid : true,
    weight: 0.01
})

let ground = new VortexEntity({
    x : 0,
    y : 500,
    width : 800,
    height: 40,
    color: 'blue',
    solid : true,
    weight : 0
})
myGame.addEntity(ground);
//myGame.addEntity(wall);
//myGame.addEntity(wall2);
myGame.addEntity(myObject);