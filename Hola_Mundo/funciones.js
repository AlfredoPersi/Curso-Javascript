'use strict'

//FUNCIONES
/*
una funcion es una agrupacion reutilizable de un conjunto de 
instrucciones que podemos utilizar tantas veces como queramos
*/

//defino la funcion
function calculadora(){
	//conjunto de instrucciones
	console.log("hola soy la calculadora");
	return "hola soy la calculadora";
}

//defino la funcion con parametros
function calculadora2(num1, num2){
	//conjunto de instrucciones
	console.log("Suma: " + (num1 + num2));
	console.log("Resta: " + (num1 - num2));
	console.log("Multiplicación: " + (num1 * num2));
	console.log("División: " + (num1 / num2));
	console.log("-----------------------------------");

	return "hola soy la calculadora";
}


//llamo la funcion
calculadora();

//llamo a la funcion pasandole parametros
calculadora2(10, 5);
calculadora2(15, 20);

