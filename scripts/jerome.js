$(document).ready(function(){
	var stage = new PIXI.Stage(0x888888);
	var renderer = PIXI.autoDetectRenderer(500,500);
	var container = document.getElementById("container");
	container.appendChild(renderer.view);
	
});

