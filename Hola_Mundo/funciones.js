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

function porPantalla(num1, num2){
	document.write("Suma: " + (num1 + num2) + "<br/>");
	document.write("Resta: " + (num1 - num2) + "<br/>");
	document.write("Multiplicación: " + (num1 * num2) + "<br/>");
	document.write("División: " + (num1 / num2) + "<br/>");
	document.write("-----------------------------------" + "<br/>");
}

function porConsola(num1, num2){
	console.log("Suma: " + (num1 + num2));
	console.log("Resta: " + (num1 - num2));
	console.log("Multiplicación: " + (num1 * num2));
	console.log("División: " + (num1 / num2));
	console.log("-----------------------------------");
}

//defino la funcion con parametros
function calculadora2(num1, num2, mostrar = false){
	//conjunto de instrucciones
	if (mostrar == true) {
		//llamo a otra funcion dentro de esta
		porPantalla(num1, num2);
	}else{
		porConsola(num1, num2);
	}
	

	return "hola soy la calculadora";
}


//llamo la funcion
calculadora();

//llamo a la funcion pasandole parametros
calculadora2(10, 5, true);
calculadora2(15, 20, false);

