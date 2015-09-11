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
  var grille=[];

while(i<ligne){

	while(j<ligne)
	{
		//Création d'une case
		var cellule = new Cell(x, y, 0x00FF00, [i,j]);
		if (table.indexOf([i,j]) !== -1)
		{
		    cellule.createImage('img/mine-noire.png');
		}
	    // cellule.createText(this.indice,couleur);
	    stage.addChild(cellule.carre);
        grille[i][j]= cellule;
	  	numero++;
		y=y+50;
		j++	;
	}
	y = 0;
	j = 0;
	x=x+50;
	i++;
}


// function destroy()

});
