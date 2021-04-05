const fs = require('fs');

const crearArchivo = async(base = 5, listar, limit) => {

    let salida = '';

    for (let i = 1; i <= limit; i++) {
        salida += `${ base } x ${ i } = ${ base * i }\n`;
    }

    if (listar)
        console.log(salida);

    try {
        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);
        return `tabla-${ base }.txt`
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}