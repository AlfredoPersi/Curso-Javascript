'use strict'

//VARIABLES

var pais = "España";
var continente = "Europa";
var antiguedad = "2018";
var pais_continente = pais + " " + continente;
let prueba = "Hola";

console.log(pais, continente, antiguedad);
console.log(pais_continente);


// DIFERENCIAS ENTRE VAR y LET

// prueba con var
var numero = 40;
console.log(numero); //valor 40

if (true) {
	var numero = 50;
	console.log(numero); //valor 50
}

console.log(numero); //valor 50

// prueba con let
var texto = "Curso JS pepepompin";
console.log(texto); //valor js

if (true) {
	let texto = "Curso Laravel 5 pepepompin";
	console.log(texto); //valor laravel
}

console.log(texto); //valor js

