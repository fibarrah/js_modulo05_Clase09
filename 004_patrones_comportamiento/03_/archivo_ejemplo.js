'use strict'

console.clear();

/**
 * El patron Comando
 *  
 */

// CLASES

const commander = (() => {

    const bypass = {
        comprar: x => {
            console.log('Comprando: ', x);
        },
        vender: x => {
            console.log('Vendiendo: ', x);
        }
    }

    return {
        run: (comando, argumento) => {
            if(!bypass[comando]){
                console.log('El comando no existe');
                return
            }
            bypass[comando](argumento);
        }
    }
})()

commander.run('comprar','Alienware');
commander.run('vender','PC Ensamblada');
commander.run('revender','PC Ensamblada');

// EVENTOS

// FUNCIONES
