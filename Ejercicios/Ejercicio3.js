'use strict'

/*
hacer un programa que muestre todos los numeros entre 2 numeros
que ingrese un usuario
*/



var num1 = parseInt(prompt("Ingrese el primer número", 0));
var num2 = parseInt(prompt("Ingrese el segundo número", 0));

while(num1 < 0 || num2 < 0 || isNaN(num1) || isNaN(num2)){ 
	num1 = parseInt(prompt("Ingrese el primer número", 0));
	num2 = parseInt(prompt("Ingrese el segundo número", 0));
}

if (num1 < num2) {
	document.write("<h2>Los numeros entre" + num1 + " y " + num2 + " son:</h2>")
	for (var i = num1 + 1; i < num2; i++) {
		document.write(i);
	}
}
else if (num1 > num2) {
	document.write("<h2>Los numeros entre" + num2 + " y " + num1 + " son:</h2>")
	for (var i = num2 + 1; i < num1; i++) {
		document.write(i);
	}
}
else{
	document.write("<h2>Los numeros ingresados son iguales.</h2>");
}



