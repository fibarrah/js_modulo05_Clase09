'use strict'

console.clear();

/**
 * El patron Observador
 * 
 */

// CLASES

const usuario = new Usuario();

const inicio = () => {
    usuario.on('inicio_sesion', usuarioLogeado);
}

const usuarioLogeado = () => {
    // Cuando el Usuario inicia sesion
}

app.inicio();

// Acciones de nuestra app
const login = () => {

    // Eventos de Inicio de sesion

    // Posteriormente al Loggearse
    usuario.trigger('inicio_sesion');

}

login();

// EVENTOS

// FUNCIONES
