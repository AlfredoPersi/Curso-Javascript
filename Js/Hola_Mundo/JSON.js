'use strict'

window.addEventListener('load', function(){

	// JSON - JavaScript Object Notation

	// aca hacemos un ejemplo de objeto pelicula con JSON
	 var pelicula = {
	 	titulo: 'Batman vs Superman',
	 	year: 2017,
	 	pais: 'Estados Unidos'
	 };

	 // ejemplo de coleccion de objetos (uno hecho adentro y otro que es una variable)
	 var peliculas = [
	 	{titulo: 'XoXo', year: 2016, pais: 'Estados Unidos'},
	 	pelicula
	 ];

	 var div_peliculas = document.querySelector("#div_peliculas");
	 for(var i in peliculas){
	 	var parrafo = document.createElement('p');
	 	parrafo.append(peliculas[i].titulo + "-" + peliculas[i].year);
	 	div_peliculas.append(parrafo);
	 }

	 console.log(peliculas);

});