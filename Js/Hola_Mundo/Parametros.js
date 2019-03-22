'use strict'

//PARAMETROS REST y SPREAD
function lista_frutas(fruta1, fruta2, ...frutas_restantes){
	document.write(fruta1 + "<br/>");
	document.write(fruta2 + "<br/>");
	for (var i = 0; i >= frutas_restantes.lenght(); i++) {
		document.write(frutas_restantes[i] + "<br/>");
	}
	
}
								//a partir de banana, entra en array frutas_restantes
lista_frutas("manzana", "pera", "banana", "naranja", "Kiwi", "uva");