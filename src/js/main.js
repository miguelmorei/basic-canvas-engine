

/**
 * Create a game
 */
import VortexEngine from './VortexEngine';
import VortexEntity from './VortexEntity';
import Sprite from './Sprite';

import Time from './Time';

const myGame = new VortexEngine({
    name : 'My test game', 
    render : {
        width : 800,
        height: 600
    }
});

myGame.start();


const myGameClock = new Time();

console.log(myGameClock.getCurrentTime());

const clockDOM = document.querySelectorAll('.clock')[0],
      startClockDOM = document.querySelectorAll('.start-clock')[0],
      stopClockDOM = document.querySelectorAll('.stop-clock')[0],
      forwardClockDOM = document.querySelectorAll('.forward-clock')[0];

let currentTime = myGameClock.getCurrentTime();
clockDOM.innerHTML = `${currentTime.hour}h : ${currentTime.minute}m  | Day ${currentTime.day} , Month ${currentTime.month}, Year ${currentTime.year}`;


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
    weight : 0
});

console.log(myObject);



myObject.step = function(){
    this.vx = 0;
    this.vy = 0;
    this.sprite = idle;
    if(myGame.input.d) {
        this.vx = 5;
        this.sprite = walkRight;
    }

    if(myGame.input.a) {
        this.vx = -5;
        this.sprite = walkLeft;
    }
    
    if(myGame.input.w) {
        this.vy = -5;
    }

    if(myGame.input.s) {
        this.vy = 5;
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
myGame.addEntity(wall);
myGame.addEntity(wall2);
myGame.addEntity(myObject);