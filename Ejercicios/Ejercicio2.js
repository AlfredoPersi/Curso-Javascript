'use strict'

/* utilizando un bucle, mostrar la suma y la media de los numeros introducidos
hasta introducir un numero negativo y ahi mostrar el resultado
*/
var num = 0;
var suma = 0;
var contador = 0;

do{
	 num = parseInt(prompt("Ingresar números hasta uno negativo:", 0));
	 if (isNaN(num)){
	 	num = 0;
	 }else if( num >= 0 ){
	 	suma = suma + num;
	 	contador++;
	}

	console.log("valor de suma: " + suma );
	console.log("cantidad de numeros ingresados: " + contador);

}while(num >= 0);

alert("La suma de todos los numeros es: " + suma);
alert("La media de todos los numeros es: " + suma/contador);