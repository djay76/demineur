$(document).ready(function(){
	var grille = document.getElementById('grille');
	var context = grille.getContext('2d');
	context.beginPath();
	context.lineTo(0, 50);
	context.lineTo(50, 50);
	context.lineTo(50, 0);
	context.lineTo(0, 0);
	context.fill();
	context.closePath();
});

