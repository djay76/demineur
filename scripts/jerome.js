var table = [];
var grille = [];
// Générer dix nombres aléatoires différents
function getRandomInt()
{
	return Math.floor(Math.random()*100+1);
}

//Générer les nombres indices d'une case
function displayIndice(x,y)
{
	if (x>=0 && x<10 && y>=0 && y<10 )
	{
		var nbr = x*10+y+1;
		if (table.indexOf(nbr) == -1)
			grille[nbr].indice++;
	}
}

//Détruire la surcouche pour terminer la partie
function destroyAll()
{
	var numero = 1;
	var taille = grille.length;
	while (numero < taille)
	{
		grille[numero].surcouche.visible = false;
		numero++;
	}
}

//Découvrir les cases alentours quand une case est découverte
function cascade(x, y, checked)
{
	if (x >= 0 && x < 10 && y >= 0 && y < 10)
	{
		var nbr = x*10+y+1;
		if (checked.indexOf(nbr) === -1)
		{
			checked.push(nbr);
			if (grille[nbr].indice == 0)
			{
				grille[nbr].surcouche.visible = false;
	    		cascade(x + 1, y, checked);
	    		cascade(x + 1, y + 1, checked);
	    		cascade(x + 1, y - 1, checked);
	    		cascade(x, y + 1, checked);
	    		cascade(x - 1, y + 1, checked);
	    		cascade(x + 1, y + 1, checked);
	    		cascade(x - 1, y - 1, checked);
	    		cascade(x, y - 1, checked);
			}
			else (grille[nbr].indice > 0)
				grille[nbr].surcouche.visible = false;
		}
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

    //Sélection de dix cases pour placer les mines
	var i = 0;
	// var stock = [];
	var table = [];
	while (i<10)
	{
		var nbr = getRandomInt();
		if (table.indexOf(nbr) === -1)
		{

			table[i] = nbr;
			// ord = (nbr-1)%10;
			// abs = ((nbr-1)%100 - ord)/10;
			// stock[i] = [abs, ord];
			i++;
		}
	}

    //Remplissage de la grille avec les mines(initalisation)
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
			if (table.indexOf(numero) !== -1)
			{
			    cellule.createImage('img/mine-noire.png');
			    cellule.indice = -1;
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

	//Incrémentation des numéros indice
	var numero=1;
	while(numero<=taille)
	{
		//Récupération de la cellule
		var cellule = grille[numero];
		if (table.indexOf(numero) !== -1)
		{
		    x = cellule.abs;
		    y = cellule.ord;
		    displayIndice(x-1,y-1);
		    displayIndice(x-1,y);
		    displayIndice(x-1,y+1);
		    displayIndice(x,y-1);
		    displayIndice(x,y+1);
		    displayIndice(x+1,y-1);
		    displayIndice(x+1,y);
		    displayIndice(x+1,y+1);
		}
	  	numero++;
	}

	//Remplissage des numéros indice
	var numero=1;
	while(numero<=taille)
	{
		if (grille[numero].indice>0)
		{
			indice = grille[numero].indice;
			grille[numero].createText(indice, 0x333333);
		}
		numero++;
	}

	//Surcouche
	// var numero = 1;
	// while(numero<=taille)
	// {
	// 	grille[numero].createSurcouche(0x777777);
	// 	numero++;
	// }

	

});
