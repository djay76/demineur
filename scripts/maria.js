$('document').ready(function(){

 // create an new instance of a pixi stage
 var stage = new PIXI.Stage(0x66FF99);
 
// create a renderer instance.
var renderer = PIXI.autoDetectRenderer(400, 300);

// add the renderer view element to the DOM
document.body.appendChild(renderer.view);

var container = new PIXI.Container();
alpha=0.4;

var carre = new PIXI.Rectangle(x, y, 50, 50);
container.addChild(carre);

});