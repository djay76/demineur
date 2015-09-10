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

    var cellule = new Cell(200, 200, 0x00FF00);
    cellule.createImage('img/mine-noire.png');
    cellule.createText(4,0xffffff);
    stage.addChild(cellule.carre);
});

