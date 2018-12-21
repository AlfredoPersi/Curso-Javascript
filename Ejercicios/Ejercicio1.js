'use strict'

/* 1) Crear un programa que pida dos numeros 
y que diga cual es el mayor, el menor y si son iguales
   2) si los numeros no son un numero o son menores o iguales
   a 0, nos vuelva a pedir que introduscamos el numero*/

var num1 = parseInt(prompt("Ingresar el primer número:", 0));
var num2 = parseInt(prompt("Ingresar el segundo número:", 0));

while(num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2)){

	num1 = parseInt(prompt("Ingresar el primer número:", 0));
    num2 = parseInt(prompt("Ingresar el segundo número:", 0));
}


if (num1 > num2) {
	alert("El primer número es mayor con el sig. valor: " + num1);
}
else if (num1 < num2){
	alert("El segundo numero es mayor con el sig. valor: " + num2);
}
else{
	alert("Los dos números son iguales");
}

