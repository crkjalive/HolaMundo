// recursividad 

// es una herramienta, confusa por algunos desarrolladores.
// es una funcion que se llama una y otra ves hasta que se cumple una condicion de salida. 

// code... 

const conteoRegresivo = (a) => {
	if (a < 0) return 
	console.log(a)
	return conteoRegresivo(a - 1)
}

conteoRegresivo(10)

// recursividad ayuda a que no tengamos que implementar codigo espagueti dentro de nuestro codigo, agilizando la forma de trabajar y sin depender de ciclo entre ciclos, 

// ejemplo de la vida real.

const axios = require(áxios)

const llamarApi = async (url, llamados = 0) => {
	try {
		const { data } = await axios.get(url)

		console.log(data);
		return data 
		cath (e) {
			if (llamados > 5) {
				return ''
			}

		console.log(e);
		return llamarApi(url, llamados + 1)
		}
	}
}

llamarApi('https://jsonplaceholder.typicode.com/users')

// recapitulemos:
// recursividad es una funcion que se llama asi misma, hasta que cumple cierta condicion, cuando se halla cumplido esa condicion, la funcion dejara de llamarce asi misma, esto funciona muy bien en remplazo de los loops, for while etc.
