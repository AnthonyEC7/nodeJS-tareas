const descripcion = {

    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea'

}

const completado = {

    default: true,
    alias: 't',
    desc: 'Marca como completada o pendiente la tarea'

}


const argv = require('yargs')
    .command('crear', 'Crear una tarea', {
        descripcion


    })
    .command('actualizar', 'Actualiza una tarea', {
        descripcion,
        completado

    })
    .command('borrar', 'Borra una tarea', {
        descripcion


    })
    .help()
    .argv;

module.exports = {
    argv
}