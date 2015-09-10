$(document).ready(function(){
	var grille = document.getElementById('grille');
	var context = grille.getContext('2d');

	context.beginPath();
	context.rect(50, 50, 50, 50);
	context.fillStyle = "red";
	context.fill();

	var drapeau = new Image();
	drapeau.onload = function(){
		context.drawImage(drapeau,50,50);
	}
	drapeau.src = "http://localhost/demineur/img/drapeau.png";
	
});

