// spread operator


// ...gato Se esta indicando que se requiere una copia completa de la constante de gato, y sus propiedades, su nombre: y edad: y se la asigne a gato2.


//code... 

const gato = {
	nombre: 'felix tomas',
	edad: 7
}

const gata = { ...gato }

gata.nombre = 'lala'
gata.edad = 8

const michu = { ...gato }

michu.nombre = 'michin'
michu.edad = 5


const gatos = [gato, gata, michu]
console.log(gatos)

/* 
	[
	  { nombre: 'felix tomas', edad: 7 },
	  { nombre: 'lala', edad: 8 },
	  { nombre: 'michin', edad: 5 }
	]
*/


// spread operator 

// crea una arreglo, con 3 objetos, y el spread operator me ayuda a crear nuevos objetos, copiando sus propiedades y completamente reutilizables.










