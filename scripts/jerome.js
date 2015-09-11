// Générer dix nombres aléatoires différents
function getRandomInt()
{
	return Math.floor(Math.random()*100+1);
}
//Sélection de dix cases pour placer les mines
var i = 0;
var table = [];
while (i<10)
{
	var nbr = getRandomInt();
	if (table.indexOf(nbr) === -1)
	{
		table[i] = nbr;
		i++;
	}
}
table.sort(function(a,b){return a-b});
console.log(table);


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
        renderer.render(stage);
    }

    //Remplissage de la grille avec les mines(initalisation)
    var taille=100;
	var ligne= taille/10;
	var numero=1;
	var x=0;
	var y=0;
	var i=0;
	var j=0;
	var grille = [];

	while(i<ligne){

		while(j<ligne)
		{
			//Création d'une case
			var cellule = new Cell(x, y, 0x00FF00, numero);
		    cellule.createImage('img/mine-noire.png');
		    cellule.createText(4,0xffffff);
		    stage.addChild(cellule.carre);
	        grille[numero] = cellule;
		  	numero++;
			y=y+50;
			j++	;
		}
		y = 0;
		j = 0;
		x=x+50;
		i++;
	}
    //Remplissage de la grille avec les numéros
    grille[numero-11].cre
    
});

