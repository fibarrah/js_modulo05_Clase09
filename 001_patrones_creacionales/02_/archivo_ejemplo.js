'use strict'

console.clear();

// PATRON MODULO

const modulo = {

    propiedad: 'miPropiedad', // Agregar propiedades
    configuracion: { // Agregar Objetos
        lenguaje: 'ES',
        cache: true,
    },
    setConfiguracion: conf => { // Se agregan metodos
        modulo.configuracion = conf;
    },
    cacheHabilitado: () => { // Se agregan metodos
        if(modulo.configuracion.cache){
            console.log('si');
        }else{
            console.log('no');
        }
    }

}
