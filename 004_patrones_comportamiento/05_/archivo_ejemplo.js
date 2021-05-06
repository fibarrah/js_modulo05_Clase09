
/**
 * El patron Iterador
 *  
 */

// CLASES

function* iterador(coleccion){

    let siguienteIndex = 0;

    while (siguienteIndex < coleccion.length){
        yield coleccion[siguienteIndex++];
    }
}

const valores = [1,2,3,4,5];
const generar = iterador(valores);

console.log(generar.next());
console.log(generar.next());
console.log(generar.next());
console.log(generar.next());
console.log(generar.next());
console.log(generar.next());
// EVENTOS

// FUNCIONES
