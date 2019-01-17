'use strict'

/*
1- Hacer un programa que pida 6 numeros por pantalla y los meta en un array
2- Tiene que mostrar el array entero (todos sus elementos) en el body y en la consola
3- Ordenarlo y mostrarlo
4- Invertir su orden y mostrarlo
5- Mostrar cantidad de elementos del array
6- Realizar una busqueda de un valor introducido por el usuario y que nos diga si existe
en el array y su indice.
*/

document.write("<h3>Ejercicios con Arrays</h3>");

var cantNum = 0;
var numeros = [];
var num;

do{
	num = prompt("Ingrese un numero:", 0);
	while(isNaN(num)){
		num = prompt("Numero mal ingresado, intente devuelta:", 0);
	}
	numeros.push(num);
	cantNum = cantNum + 1;
}while(cantNum < 6);


// creo una funcion que se va a encargar de mostrar el array de numeros
function mostrarArray(elementos){

	document.write("<ul>");

	for(var n in elementos){
		document.write("<li>" + elementos[n] + "</li>");
		console.log(elementos[n]);
	}

	document.write("</ul>");

}

//muestro los numeros ingresados en consola y pantalla
document.write("<h5>Lista de numeros ingresados:</h5>");
console.log("Lista de numeros ingresados:");

mostrarArray(numeros);


//los ordeno y los muestro
numeros.sort(function(a, b){return a-b}); //colocando esta funcion de comparacion hacemos que lo ordene numericamente ascendente
document.write("<h5>Lista de numeros ingresados y ordenados:</h5>");
console.log("Lista de numeros ingresados y ordenados:");

mostrarArray(numeros)


//los ordenos al reves y los muestro
numeros.reverse();
document.write("<h5>Lista de numeros ingresados y ordenados:</h5>");
console.log("Lista de numeros ingresados y ordenados:");

mostrarArray(numeros)


//muestro cantidad de numeros ingresados
document.write("Se ingresaron " + cantNum + " numeros. </br>");
console.log("Se ingresaron " + cantNum + " numeros.");

//busqueda de numero
var numbusqueda = prompt("Ingrese el numero que desea buscar:")
var busqueda = numeros.find(numero=>numero == numbusqueda);

if (busqueda == "undefined") {
	document.write("El numero " + numbusqueda + " no fue encontrado entre los ingresados");
}else{
	document.write("El numero " + numbusqueda + " fue ingresado.</br>");
	var indice = numeros.findIndex(n => n == busqueda);
	document.write("El numero se encuentra en la posicion N° " + indice);
}