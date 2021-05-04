'use strict'

console.clear();

// CLASES

let mixin = {
    decirHola() {
        console.log(`Hola ${this.nombre}`);
    },
    decirAdios(){
        console.log(`Chiao ${this.nombre}`);
    }
};

class usuario{
    constructor(nombre){
        this.nombre = nombre;
    }
}

// Enlazar el MIXIN
Object.assign(usuario.prototype, mixin);


// EVENTOS
var btn_ejemplo1 = document.querySelector("#btn_ejemplo1");
btn_ejemplo1.addEventListener('click', () =>{

    const newUser = new usuario('Fernando');
    newUser.decirHola();

})

var btn_ejemplo2 = document.querySelector("#btn_ejemplo2");
btn_ejemplo2.addEventListener('click', () =>{
    const newUser = new usuario('Fernando');
    newUser.decirAdios();
})

var btn_ejemplo3 = document.querySelector("#btn_ejemplo3");
btn_ejemplo3.addEventListener('click', () =>{

})

var btn_ejemplo4 = document.querySelector("#btn_ejemplo4");
btn_ejemplo4.addEventListener('click', () =>{

})

// FUNCIONES
