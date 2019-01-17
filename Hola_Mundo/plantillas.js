'use stricts'

// Plantilla de texto

var nombre =prompt("Ingrese un nombre:");
var apellido = prompt("Ingrese un apellido:");

//var texto = "Mi nombre es: " + nombre + "<br/> Mi apellido es: " + apellido;
var texto = `
 	 	<h1>Hola que tal</h1>
 	 	<h3>Mi nombre es: ${nombre}<h3/>
 	 	<h3>Mi apellido es: ${apellido}<h3/>

 	`;

document.write(texto);