/**
 * Patron Adaptador
 * 
 */

class oldAPI {

    constructor(){
        // verbo = GET, POST, ETC...
        this.operaciones = function(url, operacion, verbo){

            switch(verbo){
                case 'get':
                    console.log('Desde el API Anterior');
                case 'POST':
                default:
                    return;
            }
        };
    }
}

class newAPI {
    constructor(){
        this.get = function(url, operacion){
            console.log('Desde el API Nueva');
        };
        this.post = function(url, operacion){

        };
    }
}

class AdaptadorAPI {

    constructor(){

        const nuevaAPI = new newAPI();

        this.operaciones = function(url,operaciones,verbos){

            switch(verbos){
                case 'get':
                    return nuevaAPI.get(url,operaciones);
                case 'post':
                    return nuevaAPI.post(url,operaciones);
                default:
                    return;
            }
        };
    }
}

// Primera Asignacion
const api1 = new oldAPI();
api1.operaciones('www.google.com',{q:1},'get');

// Segunda Asignacion
//const api2 = new newAPI();
//api2.get('www.google.com',{q:1});

// Tercera Asignacion
const api3 = new AdaptadorAPI();
api3.operaciones('www.google.com',{q:1},'get');
