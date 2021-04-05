const argv = require("yargs")
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Base a multiplicar'
        },
        'l': {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Mostrar impresión en consola'
        },
        'h': {
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'Límite de números a multiplicar'
        }
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base es numérica!';
        }
        if (isNaN(argv.h)) {
            throw 'El límite es numérico!'
        }
        return true;
    })
    .argv;

module.exports = argv;