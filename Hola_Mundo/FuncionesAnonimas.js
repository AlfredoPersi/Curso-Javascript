'use strict'

//Funcion Anonima:
//es una funcion que no tiene nombre

var pelicula = function(nombre){
	return "La pelicula es: " + nombre;
}

console.log(pelicula("Forrest Gump"));


//CallBack
//funcion que se ejecuta dentro de otra funcion


//esta funcion va a recibir 2 numeros y 2 parametros mas
//estos dos parametros van a ser funciones
function sumame(num1, num2, sumaYmuestra, sumaPorDos){
	var sumar = num1 + num2;

	sumaYmuestra(sumar);
	sumaPorDos(sumar);

	return sumar;
}

//al llamar a la funcion, le paso los 2 nums y le paso 2 funciones anonimas
sumame(2, 5, function(dato){
	console.log("La suma es:", dato);
},
function(dato){
	console.log("La suma x2 es:", (dato*2));
});


//Funcion de Flecha
sumame(6, 10, dato => {
	console.log("La suma es:", dato);
},
dato => {
	console.log("La suma x2 es:", (dato*2));
});
