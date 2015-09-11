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
        // render the stage   
        renderer.render(stage);
    }


    var cellule = new Cell(200, 200, 0x00FF00);
    cellule.createImage('img/mine-noire.png');
    cellule.createText(4,0xffffff);
    stage.addChild(cellule.carre);
});

