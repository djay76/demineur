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
            console.log(stock[i])
            i++;
        }
    }
    
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

while(i<ligne){

		while(j<ligne)
		{
			//Création d'une case
			var cellule = new Cell(x, y, 0x888888, numero);
		    stage.addChild(cellule.carre);
            cellule.buttonMode=true;
            cellule.interactive = true;
            cellule.onMouseDown(function(addflag){
                if ( event.which == 3 ){
        alert('clic du bouton droit');
    }

            });
	        surcouche[numero] = cellule;
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
