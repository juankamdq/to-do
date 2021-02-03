const { boolean } = require("yargs");

const description = {
    demandOption: true,
    alias: 'd',
    /*  demandOption: true, */
    desc: 'Descripcion de la tarea por hacer'
}

const complete = {
    alias: 'c',
    default: true,

}



module.exports.argv = require("yargs")
    .command('create', 'Ingresar tareas pendientes', { description })
    .command('update', 'Actualiza la tarea', { description, complete })
    .command('delete', 'Borrar tarea', { description })
    .help()