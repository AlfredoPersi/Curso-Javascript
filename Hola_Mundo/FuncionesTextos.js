'use strict'

// Transformacion de textos
var num = 123;
var texto1 = "Bienvenido al curso de javascript";
var texto2 = "es curso bueno";

var dato = num.toString(); //convierte cualquier tipo de dato en string.
	dato = texto2.toUpperCase(); //convierte el texto a todo en mayuscula.
	dato = texto1.toLowerCase(); //convierte el texto a todo en minuscula.
console.log(dato);


// Calcular longitud
var nombre = "Alfre";
console.log(nombre.length); //me devuelve la cantidad de caracteres de un texto.


// CONCATENAR TEXTOS
var textoTotal = texto1 + " " +  texto2; // metodo comun

	textoTotal = texto1.concat(" " + texto2); //otro metodo para concatenar textos
console.log(textoTotal);


// BUSQUEDA DE TEXTO
var busqueda = texto1.indexOf("curso"); //devuelve la posicion de la primera coincidencia del texto
	busqueda = texto1.lastIndexOf("curso"); //devuelve posicion de ultima coincidencia del texto
	busqueda = texto1.search("curso"); //es el igual que el INDEXOF
	busqueda = texto1.match("curso"); //devuelve un array con el texto, texto completo, ubicacion, etc.
	busqueda = texto1.substr(14,5); //toma una parte del texto a partir de la posicion (1er param) y 
									 //la cant de caracteres siguientes (2do parametro)
	busqueda = texto1.charAt(23); //devuelve el caracter que esta en la posicion ingresada
	busqueda = texto1.startsWith(); //busca al inicio del string si existe el texto ingresado y devuelve true o false
	busqueda = texto1.endsWith(); //busca al final del string si existe el texto ingresado y devuelve true o false
	busqueda = texto1.includes("javascript"); //busca dentro de la cadena de textos el texto ingresado y retorna true o false

console.log(busqueda);

// REEMPLAZAR TEXTOS
	busqueda = texto1.replace("javascript", "html"); //reemplaza el 1er texto en el parametro por el segundo en una cadena de texto
	busqueda = texto1.slice(14, 22); //devuelve en un string todo el texto a partir de la posicion marcada. puede ponerse un fin al corte tambien.
	busqueda = texto1.split(" "); //corta el texto en el caracter que le pasemos y lo guarda en un array. si le pasamos un espacio, va a separar
								  //todas las palabras y las va a guardar a todas en el array
	busqueda = texto1.trim(); //quita los espacios por delante y por detras de la cadena de caracteres

	console.log(busqueda);