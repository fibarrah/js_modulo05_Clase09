'use strict'

console.clear();

/**
 * El patron Mediador
 * 
 */

// CLASES

const Emisor = (() => {

    const topicos = {}
    const hOP = topicos.hasOwnProperty

    return {
        on: (topico, listener) => {
            if(!hOP.call(topicos, topico)) topicos[topico] = []
            topicos[topico].push(listener)
        },
        emit: (topico, info) => {
            if(!hOP.call(topicos, topico)) return
            topicos[topico].forEach(item => 
                item(info != undefined ? info : {}))
        } 
    }
})()

Emisor.on('Inscribirse', x => console.log(x));
Emisor.emit('Inscribirse', {Inscribirse: "Emitir Subscripcion"});


// EVENTOS

// FUNCIONES
