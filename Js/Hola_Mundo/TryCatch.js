'use strict';

try {
	//en este caso creo una variable year, y llamo a una variable yea la cual no existe
	//esto lanzara un error el cual sera tomado por el catch
	var year = 2019;
	alert(yea);
} catch(e) {
	//al tomarlo podemos ver el error en consola y controlarlo, por ejemplo,
	//mostrando un mensaje con un alert
	console.log(e);
	alert("Error en el código");
}


