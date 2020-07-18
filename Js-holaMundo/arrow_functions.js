// arrow functions

// fat arrow functions

// es una nueva forma de escribir las funciones, las sintaxis es mucho mas corta, sin la palabra reservada function.

/*
	(a , b) => a + b
*/

//code... 

function suma( a,b ) {
	return a + b
}

const resultado = suma( 1 , 5 )

console.log(resultado)
// 6


// fat arrow function
// reescribamos la function.

const sumar = (a, b) => a + b

const resultados = sumar(1 , 5)

console.log(resultados)

// esto lo que quiere decir es que podemos tomar funciones como valores.
// lo que quiere decir que podemos tomas una function y asignarce a una constante o una variable.

/*
	const sumar = (a, b) => a + b
*/

// cuando las fat arrow function, son de una sola linea, tienen un return implicito, esto quiere decir, que no es necesario queq yo escriba la palabra reservada return, siempre y cuando la funcion tenga una sola ejecucion, o lo que se valla a ejecutar en una sola linea. y presendir de los corchetes.

// si se requiere hacer mas de una resultado la sintaxis cambia.

const suman = (a, b) => {
	const c = a + b 

	return c + 1
}

console.log(suman(1,5))
// 7

// ahora pasa a poder hacer mas ejecuciones.


// recapitulando:
// anteriormente se requeria la palabra reservada de function, ahora podemos declarar funciones anonimas, fat arrow function, y asignarlas a una constante.

// return implicito, ya no es necesario utilizar la palabra de ruturn, siempre y cuando nuestra funcion dea de una sola linea, y se valla a returnar inmediatamente el valor, que logre evaluar.








