// filter

// metodo para filtrar objetos dentro de una arreglo
//objeto: crea un array de menos o igual tamaño al original

// para capturar una parte del array original
// sacando los elementos que se requieren

// filter recibe unas condicines puras para poder sacar la informacion

// code...

const numeros = [1,2,3,4,5,6,7,8,9]

const mascotas = [

	{nombre: 'Puchini', edad: 12, tipo: 'perro'},
	{nombre: 'Chanchito', edad: 3, tipo: 'perro'},
	{nombre: 'Pulga', edad: 10, tipo: 'perro'},
	{nombre: 'Pelusa', edad: 16, tipo: 'gato'}

];
console.log(numeros)
console.log(mascotas)

// objetivo... 

const numerosFiltrados = numeros.filter(x => x < 5)
console.log(numerosFiltrados)

// nos va a devolver un nuevo array filtrado siempre y cuando la funcion sea true. 
// los elemento se asignan a la nueva variable

// el metodo que se esta aregando de filter es inmutable. ya que mantiene los elementos filtrados en esa varible.
// ya que devuelve una nueva copia de nuestro arreglo.


// *** ejemplo con las mascotas *** 

const perros = mascotas.filter(x => x.tipo == 'perro')
console.log(perros)

// nos muestra un arreglo filtrado con los objetos completos de tipo 'perro'

const gatos = mascotas.filter(x => x.tipo == 'gato' )
console.log(gatos)

const mayores = mascotas.filter(x => x.edad >= 11)
console.log(mayores)

// recapitular
// el metodo de filter nos puede crear, un arreglo de igual o menor tamaño, del cual estamos generando.
// este nuevo arreglo no va a ser el mismo arreglo mutado, si no va a ser una copia nueva, que va a mantener sus elementos si la funcion fue verdadera. por cada iteracion de los elementos.
// filter es inmutable.
