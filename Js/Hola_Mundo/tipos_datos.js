'use strict'

// OPERADORES
var numero1 = 7;
var numero2 = 12;
var operacion = numero1 + numero2;

alert("El resultado de la operación es: " + operacion);

// TIPOS DE DATOS
var numero_entero = 44;
var cadena_texto = "Hola que tal";
var verdadero_false = true; // o false
var numero_false = "32.2";

console.log("numero falso convertido a numero real");
console.log(Number(numero_false ) + 8);

console.log("numero convertido a cadena de texto");
console.log(String(numero_entero) + 2);

console.log("tipo de variable");
console.log(typeof numero_entero);
console.log(typeof numero_false);
console.log(typeof verdadero_false);