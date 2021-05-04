/**
 * Patron Facade
 * 
 */

// CLASES

const https = require('https');

const opciones = {
    host: 'jsonplaceholder.typicode.com',
    path: '/users',
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