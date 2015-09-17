var table = [];
var grille=[];
    /// Gestion des evenements
    	
    	///destruction case vide en cascade
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
	var renderer = PIXI.autoDetectRenderer(200,200);
	renderer.backgroundColor = 0x888888;
	var content = document.getElementById("container");
	container.appendChild(renderer.view);
	
	requestAnimationFrame(animate);
    function animate() 
    {
    	requestAnimationFrame( animate );
        // render the stage   
        renderer.render(stage);
    }

    //Sélection de dix cases pour placer les mines
    var i = 0;
    var stock = [];
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
 ///couche grille avec mines
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
			    cellule.createImage('img/mine-noire2.png');
			    cellule.indice=-1;
	            
			}
		    // cellule.createText(this.indice,couleur);
		    stage.addChild(cellule.carre);
	        grille[numero] = cellule;
		  	numero++;
			y=y+20;
			j++	;
		}
		y = 0;
		j = 0;
		x=x+20;
		i++;
	}
///couche indice	
	var numero=1;
	while(numero<=taille)
	{
		//Récupération de la cellule
		var cellule = grille[numero];
		if (table.indexOf(numero) !== -1)
		{
		    abs = cellule.abs;
		    ord = cellule.ord;
		   	if ((abs-1)>=0 && (ord-1)>=0)
		   	{
		   		var nbr = (abs-1)*10+(ord-1)+1;
		   		if (table.indexOf(nbr) ==-1)
		   			grille[nbr].indice++;
		   	}
		   	if ((abs-1)>=0 && ord>=0)
		   	{
		   		var nbr = (abs-1)*10+ord+1;
		   		if (table.indexOf(nbr) ==-1)
		   			grille[nbr].indice++;
		   	}
		   	if ((abs-1)>=0 && (ord+1)<=9)
		   	{
		   		var nbr = (abs-1)*10+(ord+1)+1;
		   		if (table.indexOf(nbr) ==-1)
		   			grille[nbr].indice++;
		   	}
		   	if (abs>=0 && (ord-1)>=0)
		   	{
		   		var nbr = abs*10+(ord-1)+1;
		   		if (table.indexOf(nbr) ==-1)
		   			grille[nbr].indice++;
		   	}	
		   	if (abs>=0 && (ord+1)<=9)
		   	{
		   		var nbr = abs*10+(ord+1)+1;
		   		if (table.indexOf(nbr) ==-1)
		   			grille[nbr].indice++;
		   	}
		   	if ((abs+1)<=9 && (ord-1)>=0)
		   	{
		   		var nbr = (abs+1)*10+(ord-1)+1;
		   		if (table.indexOf(nbr) ==-1)
		   			grille[nbr].indice++;
		   	}
		   	if ((abs+1)<=9 && ord>=0)
		   	{
		   		var nbr = (abs+1)*10+ord+1;
		   		if (table.indexOf(nbr) ==-1)
		   			grille[nbr].indice++;
		   	}
		   	if ((abs+1)<=9 && (ord+1)<=9)
		   	{
		   		var nbr = (abs+1)*10+(ord+1)+1;
		   		if (table.indexOf(nbr) ==-1)
		   			grille[nbr].indice++;
		   	}
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

///Surcouche
		var numero=1;
		while(numero<=taille)
		{
			var indice = grille[numero].indice;
            grille[numero].createSurcouche(0x777777);
		  	numero++;
		}
});
