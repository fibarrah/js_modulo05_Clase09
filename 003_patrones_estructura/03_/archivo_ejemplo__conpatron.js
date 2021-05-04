'use strict'

console.clear();

/**
 * Patron Facade
 */

// CLASES

const https = require('https');

const get = url => new Promise((resolve, reject) => {

    const comp = url.split('/');
    const host = comp.shift();

    const opciones = {
        host: host,
        path: `/${comp.join('/')}`,
        method: 'GET'
    };

    const req = https.request(opciones, (res) => {
        res.setEncoding('utf8');
        let body = '';
        res.on('data', d => {
            body += d;
        });

        res.on('end', d => {
            const parsed = JSON.parse(body);
            console.log(parsed);
        });
    });

    req.on('error', (e) => {
        console.error(e);
    })
    
    req.end();

})

const main_function = async () => {
    const resultado = await get('jsonplaceholder.typicode.com/users')
    console.log('Cadena de Informacion', resultado);
}

main_function();