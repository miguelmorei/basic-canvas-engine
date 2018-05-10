

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



const myObject = new VortexEntity({
    x : 20,
    y : 20,
    sx : 90,
    sy : 180,
    color : 'black',
    sprite : new Sprite('/img/spritesheet.png', 8)
});

document.addEventListener('keydown', e=>{

    if(e.key == 'd'){
        myObject.vx = 5;
    } 

});




myGame.addEntity(myObject);