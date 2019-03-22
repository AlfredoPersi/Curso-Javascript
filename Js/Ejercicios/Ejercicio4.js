'use strict'

/*
Mostrar todos los numeros impares que hay entre dos numeros introducidos
por el usuario
*/

var num1 = parseInt(prompt("Ingrese el primer número", 0));
var num2 = parseInt(prompt("Ingrese el segundo número", 0));
var resto = 0;

while(num1 < 0 || num2 < 0 || isNaN(num1) || isNaN(num2)){ 
	num1 = parseInt(prompt("Ingrese el primer número", 0));
	num2 = parseInt(prompt("Ingrese el segundo número", 0));
}

for (var i = num1 + 1; i < num2; i++) {
	resto = i % 2;
	if (resto != 0){
		document.write(i);
	}
}