/**
 * Tablas 
 * 
 */
const { crearArchivo, listar } = require('./multiplicar/multiplicar.js')
const argv = require('./yargs').argv
const colors = require('colors')

let comando = argv._[0]
let base = argv.base


switch (comando) {
    case 'listar':
        console.log('====================='.green);
        console.log('====================='.green);
        console.log('====================='.blue);
        listar(base, argv.limite)
        break
    case 'crear':
        crearArchivo(base, argv.limite).then(archivo => console.log(`Se ha creado el fichero ${archivo.yellow}`))
            .catch((err) => console.log(err))
        console.log('Ha elegido crear con base ', base);

        break

    default:
        console.log('por defecto');

}