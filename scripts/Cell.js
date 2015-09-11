//Objet définissant une case du démineur
function Cell(x,y,couleur,numero)
{
	this.horizontal = x;
	this.vertical = y;
	this.couleur = couleur;
	this.numero=numero;
	this.ord=(numero-1)%10;
	this.abs=((numero-1)%100-this.ord)/10;
	this.indice = 0;
	this.carre;
	this.createCell();
	// this.createImage('img/mine-noire.png');
	// this.createText(4, 0xFF0000);
}

Cell.prototype =
{
	//Création d'un case
	createCell : function()
	{
		var graph = new PIXI.Graphics();
	    graph.beginFill(this.couleur, 1);
	    graph.lineStyle(1,0xffffff,1);
	    this.carre = graph.drawRect(this.horizontal,this.vertical,50,50);
	},

	//Création d'une image dans la case
	createImage: function(url)
	{
		var image = new PIXI.Sprite.fromImage(url);
	    image.anchor.x = 0.5;
	    image.anchor.y = 0.5; 
	    image.position.x = this.horizontal+25;
	    image.position.y = this.vertical+25;
	    this.carre.addChild(image);
	},

	//Création d'un texte dans la case
	createText: function(nombre, couleur)
 	{
 		var text = new PIXI.Text(nombre ,{font: "30px Arial", fill: couleur});
 	    text.anchor.x = 0.5;
 	    text.anchor.y = 0.5;
 	    text.position.x = this.horizontal + 25;
 	    text.position.y = this.vertical + 25;
 	    this.carre.addChild(text);
 	}

 	createSurcouche: function(couleur)
 	{
 		var surcouche = new PIXI.Graphics();
	    surcouche.beginFill(this.couleur, 1);
	  	surcouche.lineStyle(1,couleur,1);
	    this.surcouche = graph.drawRect(this.horizontal,this.vertical,50,50);
	    this.carre.addChild(surcouche);
	    this.surcouche.interactive = true;
	    this.surcouche.mousedown = function()
	    {
	    	if(event.which == 1){
	    		alert('clic du bouton gauche');
	    	}
	    	else if ( event.which == 3 ){
		        alert('clic du bouton droit'); 
		    }
	    };
 	}
}