'use strict'

console.clear();

// PATRON MODULO REVELEDOR

const resultado = (() => {

    // API privado
    const x = {};

    // API Publica
    return {
        a: () => console.log(x),
        b: (key,val) => x[key] = val
    }

})()

// EVENTOS
var btn_ejemplo1 = document.querySelector("#btn_ejemplo1");
btn_ejemplo1.addEventListener('click', () =>{
 
    if(resultado.a() != undefined){
        console.log(resultado.a());
    }

})

var btn_ejemplo2 = document.querySelector("#btn_ejemplo2");
btn_ejemplo2.addEventListener('click', () =>{

    console.log(resultado.b('param1','param2'));

})

var btn_ejemplo3 = document.querySelector("#btn_ejemplo3");
btn_ejemplo3.addEventListener('click', () =>{

    console.log(resultado.x);

})