'use strict'

var num1 = parseInt(prompt("Ingresar el primer número:", 1));
var num2 = parseInt(prompt("Ingresar el segundo número:", 1));

while(num1 <0 || num2 < 0 || isNaN(num1) || isNaN(num2))
{
	num1 = parseInt(prompt("Ingresar el primer número:"));
	num2 = parseInt(prompt("Ingresar el segundo número:"));
}

var resultado = "La suma es: " + (num1 + num2) + "<br/>" + 
				"La resta es: " + (num1 - num2) + "<br/>" +
				"La multiplicación es: " + (num1 * num2) + "<br/>" + 
				"La división es: " + (num1 / num2);

document.write(resultado);

var resultado = "La suma es: " + (num1 + num2) + "\n" + 
				"La resta es: " + (num1 - num2) + "\n" +
				"La multiplicación es: " + (num1 * num2) + "\n" + 
				"La división es: " + (num1 / num2);
console.log(resultado);
alert(resultado);