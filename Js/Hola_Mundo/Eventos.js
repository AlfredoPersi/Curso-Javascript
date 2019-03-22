'use strict'

window.addEventListener('load', function(){

	//Eventos del mouse	
																					
	function CambiaColor(){																
		var bg = boton.style.background;												
		var pg = boton.style.padding;													
		if (bg == "red") {																
			boton.style.background = 'blue';											
			boton.style.padding = '50px';												
		}																					
		else {																				
			boton.style.background = 'red';												
			boton.style.padding = '25px';
		}																					
	}																						
	// OBTENER EVENTOS DESDE JAVASCRIPT														

	var boton = document.querySelector("#boton1");

	// Evento Click
	boton.addEventListener('click', function(){
		// dentro de la funcion callback ingresamos la logica que queremos
		// al realizarse el evento. en este caso, ya tengo definido eso en esta funcion
		CambiaColor();
	})

	// Evento Mouse over (pasa el mouse por encima)
	boton.addEventListener('mouseover', function(){
		boton.style.background = '#ccc';
	})

	// Evento Mouse out (sale el mouse de encima)
	boton.addEventListener('mouseout', function(){
		boton.style.background = 'white';
	})

	// Evento Focus
	var input = document.querySelector("#campoNombre");
	input.addEventListener('focus', function(){
		console.log("Estas dentro del input");
	})

	// Evento Blur
	input.addEventListener('blur', function(){
		console.log("Estas fuera del input");
	})

	// Evento Keydown
	input.addEventListener('keydown', function(letra){
		console.log("Pulsando la tecla ", String.fromCharCode(letra.keyCode));
		//String.fromCharcode(parametro.keyCode) = obtiene la letra pulsada y la
		//convierte en un char
	})

	// Evento Keypress
	input.addEventListener('keypress', function(letra){
		console.log("Tecla presionada ", String.fromCharCode(letra.keyCode));
		//String.fromCharcode(parametro.keyCode) = obtiene la letra pulsada y la
		//convierte en un char
	})

	// Evento Keyup
	input.addEventListener('keyup', function(letra){
		console.log("Tecla soltada ", String.fromCharCode(letra.keyCode));
		//String.fromCharcode(parametro.keyCode) = obtiene la letra pulsada y la
		//convierte en un char
	})

});