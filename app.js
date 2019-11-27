const argv = require('./config/yargs').argv;
const tareas = require('./controlador/tareas-por-hacer');
const colors = require('colors')



let comando = argv._[0];
switch (comando) {
    case 'crear':
        let tarea = tareas.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = tareas.getLista();
        for (let tarea of listado) {
            console.log("======= POR HACER ======");
            console.log(tarea.descripcion);
            console.log('Estado:', tarea.completado);
        }
        console.log('Listar todas las tareas');
        break;

    case 'Actualizar una tarea':

        let actualizado = tareas.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':

        let borrar = tareas.borrar(argv.descripcion);
        console.log(borrar);


        break;
    default:
        console.log('Comando no reconocido');
}