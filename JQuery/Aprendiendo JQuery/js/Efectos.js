$(document).ready(function(){

	var caja = $("#caja");

	// EFECTOS
	$("#mostrar").hide();
	$("#mostrar").click(function(){
		$(this).hide();
		$("#ocultar").show();
	//	$("#caja").show('fast');
	//	$("#caja").fadeIn('low');
		caja.fadeTo('low', 1, function(){
			console.log("fadeTo ejecutado");
		}); // 1 = sin opacidad, se ve
	});

	$("#ocultar").click(function(){
		$(this).hide();
		$("#mostrar").show();
	//	$("#caja").hide('fast');
	//	$("#caja").fadeOut('low');
		caja.fadeTo('low', 0, function(){
			console.log("fadeTo ejecutado");
		}); // 0 = opacidad full, no se ve
	});

	/*
	// Efecto normal
	$("#toggle").click(function(){
		$("#caja").toggle('fast');
	})
	
	// Efecto Fundido
	$("#toggle").click(function(){
		$("#caja").fadeToggle('fast');
	})
	*/
	// Efecto Desplegable
	$("#toggle").click(function(){
		caja.slideToggle('fast', function(){
			console.log("slide toggle ejecutado");
		});
	})

	// ANIMACIONES
	// movemos el div a la izquierda
	$("#anima").click(function(){
		caja.animate({marginLeft: '500px',
					  fontSize: '30px',
					  height: '100px'}, 'slow')
			.animate({marginTop: '100px',
					  borderRadius: '999px'}, 'slow')
			.animate({marginLeft: '0px',
					  borderRadius: '100px',
					  fontSize: '15px',
					  height: '50px'}, 'slow')
			.animate({marginTop: '5px',
					  borderRadius: '0px'}, 'slow');
	})
	

});