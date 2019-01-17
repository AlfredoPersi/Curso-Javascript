'use stricts'

//Arrays

//Formas de crear arrays
var nombres = ["Alfredo", "Juan", "Pepe", 23, true];  //como una variable

var lenguajes = new Array("PHP", "JS", "Java", "C#"); //como un objeto

console.log(lenguajes[1]);	// va a imprimir JS
console.log(lenguajes.length); //va a imprimir la cantidad de registros del array

// Recorrer array con FOR
document.write("<h1>Lenguajes de programación del 2018</h1>");
document.write("<ul>");

for (var i = 0; i < lenguajes.length; i++){
	document.write("<li>" + lenguajes[i] + "</li>");
}

document.write("</ul>");

// Recorrer array con FOREACH
document.write("<h1>Nombres del 2018</h1>");
document.write("<ul>");

nombres.forEach((element)=>{
	document.write("<li>" + element + "</li>");
});

// En el forEach podemos pasar 2 parametros mas: indice (que muestra en que posicion del
//array esta cada dato) y el array (que va a contener todo el array)
/*
document.write("<ul>");

nombres.forEach((element, i, arr)=>{
	console.log(arr);
	document.write("<li>" + i + " - " + element + "</li>");
});
*/

//METODOS
var peliculas = ["Superman", "Los Simpsons", "Pistola Desnuda", "ABC"];


peliculas.push("Batman"); //agrega un elemento al array
peliculas.pop("Superman"); //quita un elemento del array. si no le pasamos argumetento, borra el ultimo.


var indice = peliculas.indexOf("Los Simpsons"); //devuelve la posicion del elemento
			 peliculas.splice(indice, 2); //elimina desde la posicion X cantidad de posiciones en adelante

var array_string = peliculas.join();

console.log(peliculas);
console.log("String del array: " + array_string);


// FOR IN para recorrer array (otra forma).
for(let lenguaje in lenguajes){	//el elemento lenguaje va a ser el indice.
	console.log(lenguajes[lenguaje]);
}


//BUSQUEDA EN UN ARRAY
var busqueda = lenguajes.find(function(lenguaje){
	return lenguaje == "Java";
});

// forma de funcion de flecha
var busqueda2 = lenguajes.find(lenguaje => lenguaje == 'PHP7');
var busqIndice = lenguajes.findIndex(lenguaje => lenguaje == 'C#');

var precios = [10, 14, 54, 20, 30, 65];

var busqPrecio = precios.some(precio =>precio > 20);

console.log("Primera busqueda = " + busqueda);
console.log("Segunda busqueda = " + busqueda2);
console.log("Indice de C# = " + busqIndice);
console.log("Hay precios mayores a $20? = " + busqPrecio);