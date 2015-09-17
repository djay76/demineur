var table = [];
var grille = [];
// Générer dix nombres aléatoires différents
function getRandomInt(nbCases)
{
	return Math.floor(Math.random()*nbCases+1);
}

//Générer les nombres indices d'une case
function displayIndice(x,y)
{
	if (x>=0 && x<10 && y>=0 && y<10 )
	{
		var nbr = x*10+y+1;
		if (table.indexOf(nbr) === -1 && grille[nbr].indice !== -1)
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
	//Débutant : plateau 10*10 et 10 mines ; intermédiaire : plateau 16*16 et 40 mines; expert : plateau 30*16 et 100 mines
	var largeur = 10;
	var longueur =  10;
	var nbCases = largeur * longueur;

	//Initialisation de PIXI
	var stage = new PIXI.Container();
	var renderer = PIXI.autoDetectRenderer(20*largeur,20*longueur);
	renderer.backgroundColor = 0x888888;
	var container = document.getElementById("container");
	container.appendChild(renderer.view);
	
	requestAnimationFrame(animate);
    function animate() {
    	requestAnimationFrame( animate );
        renderer.render(stage);
    }

    //Sélection des cases pour placer les mines
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
	var numero = 1;
	while(numero<=taille)
	{
		grille[numero].createSurcouche(0x777777);
		numero++;
	}
});
