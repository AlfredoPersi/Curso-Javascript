'use strict'

window.addEventListener('load', function(){

	var formulario = document.querySelector("#formPeliculas");
	formulario.addEventListener('submit', function(){
		var titulo = document.querySelector("#addPelicula").value;
		if (titulo.length > 0) {
			localStorage.setItem(titulo, titulo);
		}
		
	});

	var ul = document.querySelector("#peliculas_list");
	for (var i in localStorage) {
		if (typeof localStorage[i] == 'string') {
			var li = document.createElement("li");
			li.append(localStorage[i]);
			ul.append(li);
		}
		
	}
});