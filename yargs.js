let opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }

}
const argv = require('yargs')
    .command('listar', 'imprime por consola la tabla de multiplicar', opts)
    .help()
    .command('crear', 'crea una tabla de multiplicar en un fichero txt', opts)
    .argv

module.exports = {
    argv
}