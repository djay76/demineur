$(document).ready(function(){
	//Initialisation de PIXI
	var stage = new PIXI.Container();
	var renderer = PIXI.autoDetectRenderer(500,500);
	renderer.backgroundColor = 0x888888;
	var content = document.getElementById("container");
	content.appendChild(renderer.view);
	
	requestAnimationFrame(animate);
    function animate() {
    	requestAnimationFrame( animate );
        // render the stage   
        renderer.render(stage);
    }

    var graph = new PIXI.Graphics();
    graph.beginFill(0xFF6000, 1);
    var carre = graph.drawRect(0,0,50,50);
    stage.addChild(carre);
    
 
});

