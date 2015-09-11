$(document).ready(function(){
	//Initialisation de PIXI
	var stage = new PIXI.Container();
	var renderer = PIXI.autoDetectRenderer(500,500);
	renderer.backgroundColor = 0x888888;
	var content = document.getElementById("container");
	container.appendChild(renderer.view);
	
	requestAnimationFrame(animate);
    function animate() {
    	requestAnimationFrame( animate );
        // render the stage   
        renderer.render(stage);
    }


  var taille=100;
  var ligne= taille/10;
  var numero=1;
  var x=0;
  var y=0;
  var i=0;
  var j=0;

while(i<ligne){

	while(j<ligne)
	{
		//Création d'une case
		var cellule = new Cell(x, y, 0x00FF00, numero);
	    cellule.createImage('img/mine-noire.png');
	    cellule.createText(4,0xffffff);
	    stage.addChild(cellule.carre);
	  	numero++;
		y=y+50;
		j++	;
		console.log('j:'+j);
		console.log('y:'+y);

	}
	y = 0;
	j = 0;
	x=x+50;
	i++;
	console.log('i:'+i);
	console.log('x:'+x);
}
   

});
