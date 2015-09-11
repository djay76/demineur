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

    /// Gestion des evenements
    	
    	///destruction case vide en cascade
    	function cascade(abs,ord)
    	{
		   	if ((abs-1)>=0 && (ord-1)>=0)
		   	{
		   		var nbr = (abs-1)*10+(ord-1)+1;
		   		if(table.indexOf(nbr) ==-1 && grille[nbr].indice >=0)
		   		{
		   			self.surcouche.visible = false;
		   			if(indice ==0)
		   			{
		   				cascade(abs-1,ord-1);
		   			}
		   		}
		   	}
		   	if ((abs-1)>=0 && ord>=0)
		   	{
		   		var nbr = (abs-1)*10+ord+1;
		   		if(table.indexOf(nbr) ==-1 && grille[nbr].indice >=0)
		   		{
		   			self.surcouche.visible = false;
		   			if(indice ==0)
		   			{
		   				cascade(abs-1,ord);
		   			}
		   		}
		   	}
		   	if ((abs-1)>=0 && (ord+1)<=9)
		   	{
		   		var nbr = (abs-1)*10+(ord+1)+1;
		   		if(table.indexOf(nbr) ==-1 && grille[nbr].indice >=0)
		   		{
		   			self.surcouche.visible = false;
		   			if(indice ==0)
		   			{
		   				cascade(abs-1,ord+1);
		   			}
		   		}
		   	}
		   	if (abs>=0 && (ord-1)>=0)
		   	{
		   		var nbr = abs*10+(ord-1)+1;
		   		if(table.indexOf(nbr) ==-1 && grille[nbr].indice >=0)
		   		{
		   			self.surcouche.visible = false;
		   			if(indice ==0)
		   			{
		   				cascade(abs,ord-1);
		   			}
		   		}
		   	}	
		   	if (abs>=0 && (ord+1)<=9)
		   	{
		   		var nbr = abs*10+(ord+1)+1;
		   		if(table.indexOf(nbr) ==-1 && grille[nbr].indice >=0)
		   		{
		   			self.surcouche.visible = false;
		   			if(indice ==0)
		   			{
		   				cascade(abs,ord+1);
		   			}
		   		}
		   	if ((abs+1)<=9 && (ord-1)>=0)
		   	{
		   		var nbr = (abs+1)*10+(ord-1)+1;
		   		if(table.indexOf(nbr) ==-1 && grille[nbr].indice >=0)
		   		{
		   			self.surcouche.visible = false;
		   			if(indice ==0)
		   			{
		   				cascade(abs+1,ord-1);
		   			}
		   		}
		   	}
		   	if ((abs+1)<=9 && ord>=0)
		   	{
		   		var nbr = (abs+1)*10+ord+1;
		   		if(table.indexOf(nbr) ==-1 && grille[nbr].indice >=0)
		   		{
		   			self.surcouche.visible = false;
		   			if(indice ==0)
		   			{
		   				cascade(abs+1,ord);
		   			}
		   		}
		   	}
		   	if ((abs+1)<=9 && (ord+1)<=9)
		   	{
		   		var nbr = (abs+1)*10+(ord+1)+1;
		   		if(table.indexOf(nbr) ==-1 && grille[nbr].indice >=0)
		   		{
		   			self.surcouche.visible = false;
		   			if(indice ==0)
		   			{
		   				cascade(abs+1,ord+1);
		   			}
		   		}
		   	}
    	}

    function events(objet){
    	if(indice==0)
		{
			
		}
		else if(indice>0)
		{
			self.surcouche.visible = false;
		}

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
 ///couche grille avec mines
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
			    cellule.indice=-1;
	            
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
			
            grille[numero].createSurcouche(0x333333);
            grille[numero].surcouche.mousedown = function(info)
            {
	            if(info.data.originalEvent.which == 1)
	            {
	            	indice = grille[numero].indice;
	            	abs = cellule.abs;
		   			ord = cellule.ord;
		    	
		    			events(this);
		    		
		    	}
		    	else if ( info.data.originalEvent.which == 2 || ctrlKey == true )
		    	{
		    		grille[numero].this.surcouche.createImage('surcouche','img/drapeau.png');
				   
			    }
	       	}
		  	numero++;
		}

// function destroy()

});
