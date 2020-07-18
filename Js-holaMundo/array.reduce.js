// reduce

// reduce es un metodo que tienen los arreglos en javascript, y permite ejecutar funciones reducer. (se llaman exactamente igual que los reducer en redux)

// la funcion de reducer recibe dos argumentos, 
// el primero es un valor que esta siendo acumulado
// el segundo es el elemento que se esta iterando del arreglo.

// finalmente esta funcion debe devolver el nuevo elemento que se esta acumulando, siendo una de la funciones mas versatiles dentro de lso arreglos, 
// ya que permite no solo hacer reducciones de elementos, si no que permite hacer mas operaciones, bastantemente utiles en el munod real.

// code...

// funcion reducer

// const reducer = (acumulado, valorActual) => nuevoAcumulador

const reducido = [1,2].reduce((acc, el) => acc + el, 0)
console.log(reducido)
// 3

// por que da 3, la constate parte en 0, acc es el acumulador cuyo valor es 0, y el es él elemento que es el primer elemento 1, lugo pasa a la funcion, acc + el = 1, pues 0 + 1 = 1, ya el acumulador inicial vale 1, y vuelve a iterar.
// acc = 1, el = 2, acc + el = 3.


// ejemplo 2, 
// con el array de los números.

const numeros = [1,2,3,4,5]
const resultado = numeros.reduce((acc, el) => acc + el, 0)
console.log(resultado)
// 15
// esta es la implementacion correcta, para hacer la suma del total de una arreglo.



// ejemplo 3
// caso de la vida real.

// cuando queremos buscar un elemento en particular en un arreglo demasiado grande, usamos el metodo
// array.find
// este metoo se usa cuando se hacen cruce de arrays, donde mientra se itera una tabla, el metodo find busca en la otra mientras se itera.
// rompiendo el preformans de la empresa. se debe indexar.

// const indexed = mascotas.reduce((acc, el) => , {})
// se va a indexar, pero el valor inicial ya no va a ser un número si no un objeto {}.

const mascotas = [
	{nombre: 'Puchini', edad: 12, tipo: 'perro'},
	{nombre: 'Chanchito', edad: 3, tipo: 'perro'},
	{nombre: 'Pulga', edad: 10, tipo: 'perro'},
	{nombre: 'Pelusa', edad: 16, tipo: 'gato'}
];

const indexed = mascotas.reduce((acc, el) => ({
	...acc,
	[el.nombre]: el,
}),{})

console.log(indexed['Pelusa']);
// 	{nombre: 'Pelusa', edad: 16, tipo: 'gato'}

// de esta forma luego de indexar el arreglo, indexamos por el elemento específico que queremos encontrar, utilizando el método de reduce 


// ejemplo 4
// ahora vamos a tomar este arreglo que contiene elemento que estan anidado
// osea una arreglo que contiene mas arreglos, end point.
// que vamos hacer, volver este arreglo plano que no contenga anidaciones.
// método concat = concatenación

// objetivo. [1,2,3,4,5] 

const anidado = [1, [2,3], 4,[5]]

const plano = anidado.reduce((acc, el) => acc.concat(el), [] );
console.log(plano)

// resumen: 
// el elemento vacio [] = acc se concatena con el primer elemento del array, el, que es 1 del array original. luego el acumulado [1] se concatena con el segundo elemento, el, que es el segundo valor del array original que es [2,3] quedando el reduce en una array [1,2,3], vuelve a iterar y concatenar con los demas elementos del array original [4,5], hasta el ultimo elemento del array original creando una copia concatenada y plana, [1,2,3,4,5].

// recapitulemos. 

// el método de reduce, recibe una funcion llamada reducer, la cual recibe dos argumentos el primero es el acumulador y el segundo argumento es el elemento que se esta iterando, (acc,el) => nuevoAcc y el nuevoAcc sera el nuevo acumulador que se va a pasar como argumento, la segunda vez.

// ademas el metodo de reduce, recibe un segundo argumento, que sera el valor inicial con el cual viene nuestro acumulado. reduce(reducer, inicial).
