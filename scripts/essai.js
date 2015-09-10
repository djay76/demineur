$(document).ready(function(){
	var grille = document.getElementById('grille');
	var context = grille.getContext('2d');

	context.beginPath();
	context.rect(50, 50, 50, 50);
	context.fillStyle = "red";
	context.fill();
	var flag = new Image();
	flag.onload = function(){
		context.drawImage(flag,50,50);
	}
	flag.src = "http://localhost/demineur/img/drapeau.png";
	
});

