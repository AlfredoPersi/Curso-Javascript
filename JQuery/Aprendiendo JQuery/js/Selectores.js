$(document).ready(function(){

	// Selector de ID
	var rojo = $("#rojo").css("background", "red") //cambio las propiedades
						 .css("color", "white");   //css del elemento

	$("#azul").css("background", "blue")
			  .css("color", "white");

	$("#verde").css("background", "green")
			   .css("color", "white");


	// SELECTORES DE CLASE
	var miClass = $(".zebra").css("padding", "5px");

	$(".sin_borde").click(function(){ //utilizo el evento click
		$(this).addClass("zebra");		//this hace referencia al elemento en tratamiento.
										//le agrego al elemento la clase zebra creada
	});

	// SELECTORES DE ETIQUETA
	var parrafos = $("p").css("cursor", "pointer"); //cambia el cursor por la manito cuando esta encima

	parrafos.click(function(){
		var that = $(this); //guardo mi elemento this dentro de una variable para no hacer tantos llamados

		// verifico si el elemento tiene la clase "grande"
		if (!that.hasClass("grande")) {
			that.addClass("grande");	//si no la tiene, le agrego la clase
		}
		else{
			that.removeClass("grande"); //si la tiene, se la saco
		}
	})

	// SELECTORES POR ATRIBUTOS

	//para seleccionar por atributo utilizamos []
	$('[title="Google"]').css("background", "gray");

	//METODO FIND
	var busqueda = $('#caja').find(".resaltado");
	console.log(busqueda);

	//METODO PARENT
	busqueda = $("#caja .resaltado").eq(0).parent().parent().parent().find('[title="Google"]');
	console.log(busqueda);

})