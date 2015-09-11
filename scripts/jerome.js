// Générer dix nombres aléatoires différents
function getRandomInt()
{
	return Math.floor(Math.random()*100+1);
}
//Sélection de dix cases pour placer les mines
var i = 0;
var stock = [];
var table = [];
while (i<10)
{
	var nbr = getRandomInt();
	if (table.indexOf(nbr) === -1)
	{
		table[i] = nbr;
		ord = (nbr-1)%10;
		abs = ((nbr-1)%100 - ord)/10;
		stock[i] = [abs, ord];
		i++;
	}
}

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
			if (table.indexOf(numero) !== -1)
			{
			    cellule.createImage('img/mine-noire.png');
	            
			}
		    // cellule.createText(this.indice,couleur);
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

});

//Remplissage de la grille avec les numéros
	            // indice = grille[numero-11].indice + 1;
	            // grille[numero-11].createText(indice, 0xffffff);
	            // indice = grille[numero-10].indice + 1;
	            // grille[numero-10].createText(indice, 0xffffff);
	            // indice = grille[numero-9].indice + 1;
	            // grille[numero-9].createText(indice, 0xffffff);
	            // indice = grille[numero-1].indice + 1;
	            // grille[numero-1].createText(indice, 0xffffff);
	            // indice = grille[numero+1].indice + 1;
	            // grille[numero+1].createText(indice, 0xffffff);
	            // indice = grille[numero+9].indice + 1;
	            // grille[numero+9].createText(indice, 0xffffff);
	            // indice = grille[numero+10].indice + 1;
	            // grille[numero+10].createText(indice, 0xffffff);
	            // indice = grille[numero+11].indice + 1;
	            // grille[numero+11].createText(indice, 0xffffff);