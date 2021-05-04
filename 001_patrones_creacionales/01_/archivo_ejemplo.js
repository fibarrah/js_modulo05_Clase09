'use strict'

console.clear();

// Patron Constructor

class myClass {

    constructor(){
        this.propiedad = 1;
        this.metodo = () => {

        }
    }
}

function miClase () {

    this.propiedad = 1;
    this.metodo = () => {

    }

}

class myClassWithParameter {

    constructor(param1){
        this.propiedad = param1;
        this.metodo = () => {

        }
    }
}

class myClassWithPrototipe{

    constructor(param1, param2){
        this.param1 = param1;
        this.param2 = param2;
    }

    metodo(){
        // No se mostrara el interior
        var x = 1;
    }



}

// EVENTOS
var btn_ejemplo1 = document.querySelector("#btn_ejemplo1");
btn_ejemplo1.addEventListener('click', () =>{

    // Mi Primer Objeto
    const instancia = new myClass();
    console.log(instancia);

})

var btn_ejemplo2 = document.querySelector("#btn_ejemplo2");
btn_ejemplo2.addEventListener('click', () =>{

    // Mi Segundo Objeto
    const instanciaDos = new miClase();
    console.log(instanciaDos);

})

var btn_ejemplo3 = document.querySelector("#btn_ejemplo3");
btn_ejemplo3.addEventListener('click', () =>{

    const objeto = new myClassWithParameter(2);
    console.log(objeto);

})

var btn_ejemplo4 = document.querySelector("#btn_ejemplo4");
btn_ejemplo4.addEventListener('click', () =>{

    const objeto = new myClassWithPrototipe(1,2);
    //console.log(objeto.__proto__);
    console.log(objeto);

})

// FUNCIONES




