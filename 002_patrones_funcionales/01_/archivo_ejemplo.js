'use strict'

console.clear();

// EVENTOS
var btn_ejemplo1 = document.querySelector("#btn_ejemplo1");
btn_ejemplo1.addEventListener('click', () =>{

    const misApellidos = "Ibarra";

    const prueba = () => {
        const miNombre = 'Fernando'
        console.log(miNombre, misApellidos);
    }

    prueba();

})

var btn_ejemplo2 = document.querySelector("#btn_ejemplo2");
btn_ejemplo2.addEventListener('click', () =>{

    const func = (valor) => {
        return () => console.log(`Mi Nombre es ${valor}`);
    }

    console.log(func('dato')());

})

var btn_ejemplo3 = document.querySelector("#btn_ejemplo3");
btn_ejemplo3.addEventListener('click', () =>{

    const AuditoriaProps = {
        createAt: {default: new Date},
        updateAt: {default: new Date},
        createBy: {type: Schema.Types.ObjectID, ref: 'Usuario'},
        updateBy: {type: Schema.Types.ObjectID, ref: 'Usuario'},
    }

    const Modelo = defaultProperties =>{
        return (nombre,propiedades) => {
            const esquemas = mongoose.Schema({
                ...defaultProperties,
                ...propiedades
            })

            return mongoose.Modelo(nombre,esquemas);
        }
    }

    const WithAudit = Model(nombre,esquema);

    // En Otro Archivo
    WithAudit('Productos', {
        nombre: String,
        descripcion: String
    })

})

var btn_ejemplo4 = document.querySelector("#btn_ejemplo4");
btn_ejemplo4.addEventListener('click', () =>{

})

// FUNCIONES
