$('document').ready(function(){

	var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(60, 60, 50, 50);
      context.fillStyle = 'gray';
      context.fill();
      context.lineWidth = 1;
      context.strokeStyle = 'black';
      context.stroke();
      var mine = new Image();
	mine.onload = function(){
		context.drawImage(mine,70,70);
	}
	mine.src = "http://localhost/demineur/img/mine-noire.png";
});