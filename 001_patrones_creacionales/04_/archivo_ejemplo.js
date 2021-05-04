'use strict'

console.clear();

// PATRON Prototipo

const equipoDeComputo = {

    modelo: 'Ensamblado',
    impresion: function(){
        console.log(`Tipo de Equipo de Computo: ${this.modelo}`)
    }

}


// EVENTOS
var btn_ejemplo1 = document.querySelector("#btn_ejemplo1");
btn_ejemplo1.addEventListener('click', () =>{

    const equipo_uno = Object.create(equipoDeComputo);
    if(equipo_uno.impresion() !== undefined){
        console.log(equipo_uno.impresion());
    }

})

var btn_ejemplo2 = document.querySelector("#btn_ejemplo2");
btn_ejemplo2.addEventListener('click', () =>{

    const equipo_uno = Object.create(equipoDeComputo);
    equipo_uno.modelo = 'De Marca';
    console.log(equipo_uno.impresion());
    //if(equipo_uno.impresion() !== undefined){
        
    //}

})

var btn_ejemplo3 = document.querySelector("#btn_ejemplo3");
btn_ejemplo3.addEventListener('click', () =>{

})