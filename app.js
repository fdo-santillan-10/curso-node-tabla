const { option } = require('yargs');
const { crearArchivo } = require('./funciones/multiplicar');

const argv = require('./config/yargs');
const color = require('colors');

console.clear();

//const [, , param = 'base=5'] = process.argv;
//const [, base = 5] = param.split('=');

//console.log(base);

//const base = 3;

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(`${ nombreArchivo.rainbow } creado exitosamente`))
    .catch(err => console.log(err));