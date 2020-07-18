// closures

// programacion funcional.
// son la combinacion de una funcion, y el alcance lexico que se tiene.
// un closures, se crea por fuera de la funcion.

//code... 

const x = 'Fluffy'

const f = () => {
	const y = 'kins'
	console.log(x , y)
}

f()

// una funcion puede acceder a las constantes que esten definidas dentro de la funcion y a variables que este definidas fuera de la funcion, esto se conoce como closure.

// en que favorece? 
// ya que con los closure podemos realizar composicion, ya sea de objetos o tambien de funciones, ya ir modificando el comportamiento.

// code...

/* 
	npm  i -S isomorphic-ftech

	api que no permite hacer pruebas en node.
*/

require (isomorphic-ftech)

const crudder = dominio => recurso => {
	const url = `${dominio}/${recurso}`

	return({
		create: () => fetch(url, {
			method: 'POST',
			body: JSON.stringify(x),
		}).then( x => x.json()),
		get: () => fetch(url).then(x=>x.json())
	})
}













