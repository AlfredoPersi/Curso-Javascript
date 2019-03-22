'use strict';



window.addEventListener('load', function(){

	var div_datos = document.querySelector("#datos");
	var div_pais = document.querySelector('#pais');
	var ul = document.querySelector('#ul_estudiante');

	var paises = [];
	var argentina;
	var estudiante = [];
	// FETCH (AJAX) Y PETICIONES A SERVICIOS / APIS REST
	// este metodo accede a un servicio remoto con una peticion y obtiene los datos
	getSites()
		.then(data => data.json()) // captura los datos y los convierte en JSON
		.then(pais => {
			paises = pais;		   // se guarda los datos de la variable data en la nuestra
			listado_paises(paises);

			//PODEMOS ENCADENAR VARIAS PROMESAS(FETCH) DE ESTA FORMA, USANDO RETURN Y LLAMANDO
			//A UNA FUNCION QUE SOLAMENTE CONTENGA OTRO FETCH Y CONTINUAR CON LOS .then
			return getArgentina();
		})
		.then(data => data.json())
		.then(arg => {
			argentina = arg;
			mostrar_pais(argentina);

			return getPromesa1();
		})
		//.then(data=>data.json())
		.then(est =>{
			estudiante = est;
			mostrar_est(estudiante);
		})
		.catch(error=>{
			console.log(error);
			alert("Error en las promesas");
		});



	function getSites(){
		return fetch("https://api.mercadolibre.com/sites");
	}

	function getArgentina(){
		return fetch("https://api.mercadolibre.com/sites/MLA");
	}

	// Creo mi propia promesa o servicio
	function getPromesa1(){

		//creo un nuevo objeto estudiante
		var estudiante = {
			nombre: "Alfredo",
			apellido: "Persi",
			edad: "21",
			ciudad: "La Plata",
			email: "alfredopersi95@gmail.com"
		}

		//instancio un objeto promesa el cual va a ser devuelto
		return new Promise((resolve, reject)=>{

			//convierto mi objeto estudiante en un objeto json y lo guardo en otra variable
			var estudiante_string = JSON.stringify(estudiante); 

			//verifico que sea de tipo string. si no lo es devolvera el Reject con error
			if (typeof estudiante_string != "string") return reject("error");

			return resolve(estudiante_string);
		})
	}


	//funcion para mostrar los paises
	function listado_paises(paises){
		paises.map((sites, i) => {
				let name = document.createElement('h3');
				name.innerHTML = i + ' - ' +  sites.name;
				div_datos.appendChild(name);
	
		});
	}

	//funcion para mostrar un solo pais
	function mostrar_pais(pais){
		let name = document.createElement('h3');
		name.innerHTML = pais.name;
		div_pais.appendChild(name);
	}

	function mostrar_est(est){
		//est es un string. lo convierto en JSON para poder utilizarlo y mostrarlo
		var estudiante = JSON.parse(est);
		
		let nombre = document.createElement('p');
		let li = document.createElement('li');
		nombre.innerHTML = "Nombre: " + estudiante.nombre;
		li.appendChild(nombre);
		ul.appendChild(li);

		let apellido = document.createElement('p');
		let li_2 = document.createElement('li');
		apellido.innerHTML = "Apellido: " + estudiante.apellido;
		li_2.appendChild(apellido);
		ul.appendChild(li_2);

		let edad = document.createElement('p');
		edad.innerHTML = "Edad: " + estudiante.edad;
		li.appendChild(edad);
		ul.appendChild(li);

		let ciudad = document.createElement('p');
		ciudad.innerHTML = "Localidad: " + estudiante.ciudad;
		li.appendChild(ciudad);
		ul.appendChild(li);

		let mail = document.createElement('p');
		mail.innerHTML = "Email: " + estudiante.email;
		li.appendChild(mail);
		ul.appendChild(li);

	}



});

//function get