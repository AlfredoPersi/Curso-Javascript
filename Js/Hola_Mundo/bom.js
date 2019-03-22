'use strict'

// BOM - Browser Object Model

function getBom(){
	console.log(window.innerHeight);
	console.log(window.innerWidth);
	console.log(window.location);
}

getBom();

//Al llamar la funcion y pasarle una direccion web nos va a redirigir
function redirect(url){
	window.location.href = url;
}

//Abre una pestaña nueva en el navegador
function abrirVentana(url){
	window.open(url, "", "Width=400, Height=300");
}