$(document).ready(function(){

	// LOAD = nos permite hacer una peticion ajax por GET e incrustar el resultado
	// dentro de un div u otro elemento en pantalla

	// LLAMADO DE UNA PAGINA CON AJAX
	//$("#datos").load('https://reqres.in/');

	// GET Y POST con AJAX

	/*	para hacer una operacion GET, simplemente paso el servicio, si quiero, con AJAX
	puedo pasarle algun parametro, por ej. un id, y luego tengo que pasarle como parametro
	una funcion callback, para que dentro ejecute lo que desee */
	$.get("https://reqres.in/api/users", {page: 3}, function(response){
		console.log(response); //en este caso voy a mostrar lo que devuelve mi GET
		response.data.forEach((element, index)=>{ //Recorro el array que trae el responsive
			$("#datos").append("<p>" + element.first_name + " " + element.last_name + "</p>");
			//y lo muestro en pantalla, en el div de datos
		})
	});
	

})