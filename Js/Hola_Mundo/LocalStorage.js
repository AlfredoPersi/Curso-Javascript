'use strict'

// LocalStorage
//podemos guardar informacion a modo de sesion dentro del navegador web

// verificacion para ver si nuestro navegador posee el localstorage
if (typeof(Storage) !== 'undefined') {
	console.log("LocalStorage disponible");
}else{
	console.log("Incompatible con LocalStorage");
}


// Guardar datos
localStorage.setItem("titulo", "Curso de JavaScript");

// Recuperar elemento
localStorage.getItem("titulo");

// Guardar objetos - para hacerlo, es necesario convertir el objeto json en un string de json
var usuario = {
	email: "alfredo@persi.com",
	nombre: "Alfredo Persi",
	web: "alfredopersiweb.com"
};
localStorage.setItem("usuario", JSON.stringify(usuario));

// Recuperar objeto - para hacerlo es necesario convertir el string json a un objeto JSON
var user = JSON.parse(localStorage.getItem("usuario"));
console.log(user);

// Borrar dato del LocalStorage
localStorage.remove("usuario");

// Limpiar todo el LocalStorage
localStorage.clear();
