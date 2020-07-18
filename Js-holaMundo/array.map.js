// map

// map nos permite transformar los elementos de una arreglo, dejandolo de la misma longitud, pero cambiados.
// generando una nueva copia.

// funcion de suma total.

// NO HACER ESTA IMPLEMENTACION.

const suma = (ns) => {
	let acumulado = 0;
	for(i = 0; i < ns.length; i++){
		acumulado += ns[i];
	}
	return acumulado
}

const numeros = [1,2,3,4,5]

// multiplicar * 2
const multiplicados = numeros.map(x => x * 2)
console.log(multiplicados)
// en este ejemplo vemos como toma el arreglo e iterando cada objeto crea un nuevo arreglo con la funcion true que se creo.
// generando un nuevo array de la misma longitud.



// vamos a crear parejas de nuemeros.
const parejas = numeros.map(x => [x, x])
console.log(parejas)
/* [ [ 1, 1 ], [ 2, 2 ], [ 3, 3 ], [ 4, 4 ], [ 5, 5 ] ] */
// se pueden hacer operaciones mas complejas.

// ejemplo2 
// obtener la edad promedio de todas las mascotas de este arreglo.

const mascotas = [

	{nombre: 'Puchini', edad: 12, tipo: 'perro'},
	{nombre: 'Chanchito feliz', edad: 3, tipo: 'perro'},
	{nombre: 'Pulga', edad: 10, tipo: 'perro'},
	{nombre: 'Pelusa', edad: 12, tipo: 'gato'}

];

/*
console.log(numeros)
console.log(mascotas)
*/

// edad promedio.
const resultado1 = suma(numeros)
console.log(resultado1)
// 15

// vamos a crear un arreglo de numeros, ya que no se pude usar la funcion suma sobre los objetos.
// vamos a tranformar el arreglo a nuemros.

const edades =  mascotas.map(x => x.edad)
console.log(edades)
// [ 12, 3, 10, 16 ] 

const resultado = suma(edades)
console.log(resultado / edades.length)
// 9.25 es el promedio de edad de las mascotas.

// recapitulemos.

// map nos permite crear un nuevo arreglo, de misma longitud que el arreglo inicial al que le aplicamos el metodo de map.

// el metodo de map permite tomar la funcion que le estamos pasando como argumento, y aplicar la funcion a cada uno de los elementos que se encuentran dentro de ese arreglo.