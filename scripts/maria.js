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
  var x=0;
  var y=0;
  var i=0;
  var j=0;
console.log(ligne);
while(i<ligne){
	while(j<ligne && ){
	//Création d'une case
    var graph = new PIXI.Graphics();
    graph.beginFill(0xFF6000, 1);
    graph.lineStyle(1,0xffffff,1);
    var carre = graph.drawRect(x,y,50,50);
    stage.addChild(carre);

    //Création d'une image dans la case
    var drapeau = new PIXI.Sprite.fromImage('img/drapeau.png');
    // center the sprites anchor point
    drapeau.anchor.x = 0.5;
    drapeau.anchor.y = 0.5; 
    // move the sprite t the center of the screen
    drapeau.position.x = x+25;
    drapeau.position.y = y+25;
    carre.addChild(drapeau);
  
	y=y+50;
	j++	;
	console.log(j);
	console.log(i);
	console.log(y);


	 //Création d'une case
    var graph = new PIXI.Graphics();
    graph.beginFill(0xFF6000, 1);
    graph.lineStyle(1,0xffffff,1);
    var carre = graph.drawRect(x,y,50,50);
    stage.addChild(carre);

    //Création d'une image dans la case
    var drapeau = new PIXI.Sprite.fromImage('img/drapeau.png');
    // center the sprites anchor point
    drapeau.anchor.x = 0.5;
    drapeau.anchor.y = 0.5; 
    // move the sprite t the center of the screen
    drapeau.position.x = x+25;
    drapeau.position.y = y+25;
    carre.addChild(drapeau);
  
x=x+50;
i++;	
}}
   

});
