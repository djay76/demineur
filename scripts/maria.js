$('document').ready(function(){

	var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(60, 60, 100, 100);
      context.fillStyle = 'gray';
      context.fill();
      context.lineWidth = 1;
      context.strokeStyle = 'black';
      context.stroke();
      context.fillText('<i class="fa fa-bomb fa-2x"></i>', 10, 10)
});