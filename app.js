const { argv } = require("./config/yargs").argv;
const color = require('colors');
const { create, getListado, updateToDO, deleteToDo } = require('./to-do/to-do')

let command = argv._[0];


switch (command) {

    case 'create':
        create(argv.description);
        break;
    case 'listar':
        let listToDo = getListado();

        for (let list of listToDo) {
            console.log('=========TO DO==========='.green);
            console.log(`${list.description}`.blue);
            console.log(`Completado: ${list.complete}`.blue);
            console.log('========================='.green);
        }

        break;
    case 'update':
        let updated = updateToDO(argv.description, argv.complete)
        console.log(updated)
        break;
    case 'delete':
        let deleted = deleteToDo(argv.description);
        console.log(deleted);
        break;
    default:
        console.log('Comando no valido');

}