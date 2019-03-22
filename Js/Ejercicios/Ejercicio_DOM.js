'use strict'

window.addEventListener('load', function(){

	var formulario = document.querySelector('#form1');
	var div_datos = document.querySelector('.div_datos');

	formulario.addEventListener('submit', function(){
		console.log("Evento submit ejecutado");
		
		var flag_error = true;
		var nombre = document.querySelector('#txtNombre').value;
		var apellido = document.querySelector('#txtApellido').value;
		var edad = document.querySelector('#txtEdad').value;

		var error;
		if (nombre.trim() == null || nombre.trim().length == 0){
			error = document.querySelector("#error_nom");
			error.innerHTML = "El nombre no es valido";
			error.style.color = "red";
			flag_error = false;
		}else{
			error = document.querySelector("#error_nom");
			error.style.display = 'none';
		}

		if (apellido.trim() == null || apellido.trim().length == 0){
			error = document.querySelector("#error_ape");
			error.innerHTML = "El apellido no es valido";
			error.style.color = "red";
			flag_error = false;
		}else{
			error = document.querySelector("#error_ape");
			error.style.display = 'none';
		}

		if (isNaN(edad) || edad <= 0){
			error = document.querySelector("#error_edad");
			error.innerHTML = "La edad no es valida";
			error.style.color = "red";
			flag_error = false;
		}else{
			error = document.querySelector("#error_edad");
			error.style.display = 'none';
		}

		if (flag_error == false) {	
			return flag_error;
		}
		

		var datos = [nombre, apellido, edad];

		for (var i in datos) {
			var parrafo = document.createElement('p');
			parrafo.append(datos[i]);
			div_datos.append(parrafo);
		}
		div_datos.style.display = 'block';
		



	});

});