'use strict'

// DOM -Document Object Model

//obtener elemenos con un ID concreto

var cajaHTML = document.getElementById("miCaja"); //devuelve el elemento HMTL entero
var cajaSola = document.getElementById("miCaja").innerHTML;

console.log("Caja con HTML: ");
console.log(cajaHTML);
console.log("Caja sin HTML: " + cajaSola);

//cambiar el contenido a un elemento
cajaHTML.innerHTML = "Hola, soy un DIV con contenido cambiado desde JS"; 

//cambiar el estilo del elemento. Poniendo "style" ya podemos agregar codigo CSS.
cajaHTML.style.background = "blue";
cajaHTML.style.padding="20px";
cajaHTML.style.color="white";


//Conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName('div');
console.log(todosLosDivs);

var contenidoDiv = todosLosDivs[2].textContent;

	
for (var v in todosLosDivs) {
	//verifico que lo que muestro sean solamente los divs preguntando si su contenido es string
	if (typeof todosLosDivs[v].textContent == 'string') { 
		var parrafo = document.createElement("p");
		var texto = document.createTextNode(todosLosDivs[v].textContent);
		parrafo.appendChild(texto);
		document.querySelector("#myFooter").appendChild(parrafo);
	}
}

// Conseguir elementos por su clase css
var divsClass = document.getElementsByClassName('rojo');
for (var div in divsClass){
	if (divsClass[div].className == "rojo") {
		divsClass[div].style.background = 'red';
	}
}


// Consigo elemento con el QUERY SELECTOR
var id = document.querySelector("#miCaja");
console.log(id);

var clase = document.querySelector("div.azul");
console.log(clase);

var etiqueta = document.querySelector("div");
console.log(etiqueta);

// Consigo varios elementos con QUERY SELECCTOR ALL
var divsColores = document.querySelectorAll("div.rojo, div.azul");
console.log(divsColores);