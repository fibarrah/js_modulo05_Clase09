'use strict'

console.clear();


// EVENTOS
var btn_ejemplo1 = document.querySelector("#btn_ejemplo1");
btn_ejemplo1.addEventListener('click', () =>{

    const func = callback => {
        const resultado = funcionAcciones();
        callback(resultado);
    }

    func((resultado) => {
        // EL callback es que pasara de arriba
    })

})

var btn_ejemplo2 = document.querySelector("#btn_ejemplo2");
btn_ejemplo2.addEventListener('click', () =>{

    const func = (ruta, callback) =>{
        const resultado = funcionAcciones();
        callback(resultado);
    }

    func('/ruta', (resultado) => {

    })

})

var btn_ejemplo3 = document.querySelector("#btn_ejemplo3");
btn_ejemplo3.addEventListener('click', () =>{

    const func = (ruta, callback) =>{
        const resultado = funcionAcciones();
        callback(resultado);
    }

    const handler = (resultado) => {

    }

    // Funcion que manda llamar
    func('/ruta', handler);


})

var btn_ejemplo4 = document.querySelector("#btn_ejemplo4");
btn_ejemplo4.addEventListener('click', () =>{

})

// FUNCIONES
