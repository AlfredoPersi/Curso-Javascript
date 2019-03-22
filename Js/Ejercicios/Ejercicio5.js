'use strict'

/*
Mostrar todos los numeros divisores de un numero introducido en un propmt
*/

var num = parseInt(prompt("Introduzca un número:", 1));
var resto = 0;


for (var i = 1; i <= num; i++) {
	resto = num % i;
	if (resto == 0) {
		document.write("<p>Divisor: " + i + "</p>");
	}
}