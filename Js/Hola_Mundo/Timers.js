'use strict'

window.addEventListener('load', function(){

	//TIMERS

	//el setInterval ejecuta la logica siempre en el intervalo de tiempo que recibe
	var tiempo = setInterval(function(){
		console.log("Set interval ejecutado");
		var miCaja = document.querySelector("#miCaja");
		if (miCaja.style.background == 'blue') {
			miCaja.style.background = 'white';
		}else{
			miCaja.style.background = 'blue';
		}
		
	}, 3000);

	//el Timeout se ejecuta una unica vez en el tiempo que recibe
	var tiempo2 = setTimeout(function(){
		console.log("Set Time Out ejecutado");
	},3000);

	var btnDetener = document.querySelector("#detener");

	btnDetener.addEventListener('click', function(){
		clearInterval(tiempo); //esto va a frenar el intervalo
		alert("Has parado el intervalo");
	})



});