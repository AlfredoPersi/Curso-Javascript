'use strict'

/*
El programa debe decir si es par o impar
se debe ingresar un numero, se debe validar
*/

var resto = 0;
var num = parseInt(prompt("Ingresar un número:", 0));

while(isNaN(num))
{
	num = parseInt(prompt("Numero inválido, vuelva a ingresar un número:", 0));
}

resto = num % 2;
if (resto == 0) {
	document.write("El número " + num + " es par.");
}
else{
	document.write("El número " + num + " es impar.");
}