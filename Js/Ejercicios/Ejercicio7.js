'use strict'

// Tabla de multiplicar de un numero introducido por pantalla
var multi = 0;
var num = parseInt(prompt("¿De que número quieres la tabla?"));

while(isNaN(num)){
	num = parseInt(prompt("¿De que número quieres la tabla?"));
}

for (var i = 1; i <= 10; i++) {
	multi = num * i;
	document.write("<p>" + num + " x " + i + " = " + multi + '</p>');
}