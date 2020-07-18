// Trampolines
// trampolines nos ayudan a mejorar la recursividad

// muchos llamados recursivos genera un error que se llama
// Maximum call stack size exceeded
// limitandonos a hacer funciones que se llaman asi mismas muchas veces

// para esto usamos una tecnica llamada trampolines, lo cual nos permite hacer llamados recursivos de una misma funcion cuantas veces nosotros queramos o cuanta memoria tenga la maquina lo cual nos permita hacer este llamado, eliminando la barrera del Tail call optimization. 

// code...

const suma = (number, sum = 0) => (
    number === 0 ?
    sum ?
    suma(number - 1, sum + number)
)

const r = suma(100000)
console.log(r)

// 5050
// 500500
// Maximum call stack size exceeded

// aqui ya nos dispara el error, 

// tecnica, para poder seguir desarrollando la recursividad

const trampoline = fn => (...args) => {
    let result = fn(...args)
    while (typeof result === 'function') {
        result = result()
    }
    return result
}

const suma = (number, sum = 0) => {
    number === 0 ?
        sum ?
        :
        () => suma(number - 1, sum + number)
}

const tsuma = trampoline(suma)

const r = tsuma(100000000)
console.log(r);

// trampolinizable. 

// con esta funcion ya queda optimizada para que la tecnica de trampolin funcione y evite el limite de javascript de llamar funciones asi misma.

// trampoline nos permite generar una funcion de manera recursiva,  ejecutando una y otra vez eliminando este limite.