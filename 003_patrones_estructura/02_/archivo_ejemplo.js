'use strict'

console.clear();

// CLASES

class equipoComputo {

    constructor(){

        this.precio = 6000;
        this.memoria = 16;

    }

}

class eqpNuevo {
    precio(){
        return 1000
    }
}

// EVENTOS
var btn_ejemplo1 = document.querySelector("#btn_ejemplo1");
btn_ejemplo1.addEventListener('click', () =>{

    // Forma Sencilla
    const nuevoEquipo = new equipoComputo();
    nuevoEquipo.agregarMasPrecion = function(){
        this.precio += 250;
    }
    nuevoEquipo.agregarMasPrecion();
    console.log(`Precio de aumento:  ${nuevoEquipo.precio}`);

})

var btn_ejemplo2 = document.querySelector("#btn_ejemplo2");
btn_ejemplo2.addEventListener('click', () => {

    // Forma Estructurada
    const aumentoPrecio = equipo => {
        const monto_original = equipo.precio();
        equipo.precio = function () {
            return monto_original + 250;
        }
    }
    
    const newEquipo = new eqpNuevo();
    aumentoPrecio(newEquipo);
    console.log(newEquipo.precio());

})

var btn_ejemplo3 = document.querySelector("#btn_ejemplo3");
btn_ejemplo3.addEventListener('click', () =>{

})

var btn_ejemplo4 = document.querySelector("#btn_ejemplo4");
btn_ejemplo4.addEventListener('click', () =>{

})

// FUNCIONES
