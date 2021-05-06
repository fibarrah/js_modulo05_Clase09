'use strict'

console.clear();

/**
 * El patron Cadena de Responsabilidad
 *  
 */

// CLASES

class suma {
    constructor(valor = 0){
        this.valor = valor;
    }

    sumatoria(valor){
        this.valor += valor;
        return this;
    }
}

const obj = new suma(1);

console.log(obj
             .sumatoria(1)
             .sumatoria(2)
             .sumatoria(3)
             )

// EVENTOS

// FUNCIONES
