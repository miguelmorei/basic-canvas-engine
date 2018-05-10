

/**
 * Create a game
 */
import VortexEngine from './VortexEngine';
import VortexEntity from './VortexEntity';


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
    sx : 100,
    sy : 100,
    color : 'black'
})

myObject.addInput('a', function(){

    this.speed = 5;

})

myGame.addEntity(myObject);