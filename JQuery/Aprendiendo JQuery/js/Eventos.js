$(document).ready(function(){
	alert("eventos cargados");

	// MouseOver y MouseOut
	var caja = $("#caja");
/*
	// evento de mouse encima
	caja.mouseover(function(){
		$(this).css("background", "red");
	})

	// evento de mouse salida de encima
	caja.mouseout(function(){
		$(this).css("background", "green");
	})
*/
	function dentro(){
		$(this).css("background", "red");
	}

	function fuera(){
		$(this).css("background", "green");
	}
	// HOVER = evento de mouse encima y fuera combinado
	caja.hover(dentro, fuera); // este evento lleva dos funciones call.
	//para este caso las funciones estan hechas por separado, entonces lo que hacemos
	//es llamarlas para que quede mas prolijo.

	// EVENTO CLICK Y DOBLE CLICK
	// EVENTO CLICK
	caja.click(function(){
		$(this).css("background", "blue")
			   .css("color", "white");
	});

	// EVENTO DOBLE CLICK
	caja.dblclick(function(){
		$(this).css("background", "black")
				.css("color", "yellow");
	})

	// EVENTO FOCUS y BLUR

	// FOCUS = al entrar al input
	var nombre = $("#nombre");
	var datos = $("#datos");
	nombre.focus(function(){
		$(this).css("border", "2px solid blue")
	})

	// BLUR = al salir del input
	nombre.blur(function(){
		$(this).css("border", "1px solid gray");
		//$(this).val(); //este metodo va a tomar el valor que tenemos.
		datos.text($(this).val()).show();	//este metodo va a mostrar el elemento
	})

	// Mousedown y Mouseup
	// Mousedown = al estar presionando el boton del mouse
	datos.mousedown(function(){
		$(this).css("border-color", "gray");
	});

	// Mouseup = al soltar el boton del mouse
	datos.mouseup(function(){
		$(this).css("border-color", "black");
	});

	// Mousemove = toma la posicion del mouse
	$(document).mousemove(function(){


		console.log("En X: " + event.clientX);
		console.log("En Y: " + event.clientY);

		$("body").css("cursor", "none"); //escondo el cursor
		//tomamos el div que creamos, y que por cada movimiento, su posicion
		//horizontal y vertical cambie. de esta forma sigue al puntero.
		$("#puntero").css("left", event.clientX)
					 .css("top", event.clientY);
	});
		
})