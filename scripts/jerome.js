$(document).ready(function(){
	//Initialisation de PIXI
	var stage = new PIXI.Container();
	var renderer = PIXI.autoDetectRenderer(500,500);
	renderer.backgroundColor = 0x888888;
	var container = document.getElementById("container");
	container.appendChild(renderer.view);
	
	requestAnimationFrame(animate);
    function animate() {
    	requestAnimationFrame( animate );
        // render the stage   
        renderer.render(stage);
    }

    //Création d'une case
    var graph = new PIXI.Graphics();
    graph.beginFill(0xFF6000, 1);
    graph.lineStyle(1,0xffffff,1);
    var carre = graph.drawRect(0,0,50,50);
    stage.addChild(carre);

    var drapeau = new PIXI.Sprite.fromImage('img/drapeau.png');
    // center the sprites anchor point
    drapeau.anchor.x = 0.5;
    drapeau.anchor.y = 0.5;
 
    // move the sprite t the center of the screen
    drapeau.position.x = 20;
    drapeau.position.y = 15;
 
 	carre.position.x = 100;
    carre.addChild(drapeau);



	var graph = new PIXI.Graphics();
    graph.beginFill(0xFF2315, 1);
    graph.lineStyle(1,0x000000,1);
    var carre = graph.drawRect(50,0,50,50);
    stage.addChild(carre);
});

