var table = [];
var grille = [];
var largeur;
var longueur;
var compteur;
var nbMines;
var taille;
// Générer dix nombres aléatoires différents
function getRandomInt(nbCases)
{
	return Math.floor(Math.random()*nbCases+1);
}

//Générer les nombres indices d'une case
function displayIndice(x,y,largeur,longueur)
{
	if (x>=0 && x<largeur && y>=0 && y<longueur )
	{
		var nbr = x*largeur+y+1;
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
	if (x >= 0 && x < largeur && y >= 0 && y < longueur)
	{
		var nbr = x*largeur+y+1;
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

function gagne()
{
	var numero = 1;
	var valid = true;
	while(numero<=taille)
	{
		if (grille[numero].indice !== -1 && grille[numero].surcouche.visible == true)
		{
			valid = false;
			return false;
		}
		else
		{
			numero++;
		}
	}
	if (valid)
	{
		$('.message').find('p').text("Gagné");
		destroyAll();
	}
}

$(document).ready(function(){
	
	//Débutant : plateau 10*10 et 10 mines ; intermédiaire : plateau 16*16 et 40 mines; expert : plateau 22*22 et 90 mines
	largeur = 10;
	longueur = 10;
	taille = largeur * longueur;
	var nbMines = 10;

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
	while (i<nbMines)
	{
		var nbr = getRandomInt(taille);
		if (table.indexOf(nbr) === -1)
		{
			table[i] = nbr;
			i++;
		}
	}
    //Remplissage de la grille avec les mines(initalisation)
	var numero=1;
	var x=0;
	var y=0;
	var i=0;
	var j=0;
	var abs=0;
	var ord=0;

	while(i<largeur){
		while(j<longueur)
		{
			//Création d'une case
			var cellule = new Cell(x, y, 0x00FF00, numero, abs, ord);
			if (table.indexOf(numero) !== -1)
			{
			    cellule.createImage('img/mine-noire2.png');
			    cellule.indice = -1;
			}
		    stage.addChild(cellule.carre);
	        grille[numero] = cellule;
		  	numero++;
			y=y+20;
			ord++;
			j++	;
		}
		y = 0;
		j = 0;
		x=x+20;
		abs++;
		ord=0;
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
		    displayIndice(x-1,y-1,largeur,longueur);
		    displayIndice(x-1,y,largeur,longueur);
		    displayIndice(x-1,y+1,largeur,longueur);
		    displayIndice(x,y-1,largeur,longueur);
		    displayIndice(x,y+1,largeur,longueur);
		    displayIndice(x+1,y-1,largeur,longueur);
		    displayIndice(x+1,y,largeur,longueur);
		    displayIndice(x+1,y+1,largeur,longueur);
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
