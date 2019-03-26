$(document).ready(function(){

	cargarLinks();
	$("#add_button").click(function(){
		//el append agregra al final
		$("#lista").append('<li><a href="' + $("#add_link").val() + '"></a></li>');
		//el prepend agrega al principio
		$("#lista").prepend('<li><a href="' + $("#add_link").val() + '"></a></li>');

		$("#add_link").val('');
		cargarLinks();
	})

	//al traer todos los links, podemos recorrer la lista con el metodo each.
	//dentro de este bucle, podemos tomar cada item de la lista y trabajar con ellos
	function cargarLinks(){
		$('a').each(function(){ 
			var that = $(this);	//aca asigno mi objeto this a una variable para no hacer varios llamados
			var enlace = that.attr("href"); //con el metodo attr puedo obtener el valor de cualquier atributo.
											//en este caso obtengo el valor de href
			that.attr("target", "_blank");
			that.text(enlace);	//asigno mi valor al texto del elemento
		})
	}
})