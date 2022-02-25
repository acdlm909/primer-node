const fs = require('fs')

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El parametro introducido: "${base}" no es un numero`)
            return
        }

        let tabla = ''
        for (let i = 1; i <= limite; i++) {
            tabla += `${base} * ${i}=${base*i} \n`
        }

        fs.writeFile(`tablas/tabla-${base}-${limite}-iteraciones.txt`, tabla, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(`tabla-${base}-${limite}Iteraciones.txt`)
            }


        })

    })
}

let listar = (base, limite) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i}=${base*i} `)
    }

}
module.exports = {
    crearArchivo,
    listar
}