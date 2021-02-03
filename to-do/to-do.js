const { error } = require('console');
const fs = require('fs');

let listadoToDo = [];


const create = (description) => {

    upDB();

    toDo = {
        description,
        complete: false,
    }

    listadoToDo.push(toDo);

    saveDB();
    return listadoToDo;
}

const getListado = () => {

    upDB();
    return listadoToDo;
}

const saveDB = () => {

    const data = JSON.stringify(listadoToDo);

    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new error('Hubo un error al guardar tarea')
    })

}

const upDB = () => {

    //try y catch, para controlar errores
    try {
        //Si esta todo bien se obtiene los datos del data.json en el arreglo listadoToDo
        listadoToDo = require('../db/data.json');
    } catch (err) {
        listadoToDo = [];
    }

}

const updateToDO = (description, complete) => {

    upDB();
    //findIndex: Si encuentra la tarea retorna en que posicion
    let index = listadoToDo.findIndex(tarea => tarea.description === description);

    if (index >= 0) {
        listadoToDo[index].complete = complete;
        saveDB();
        return true;
    } else {
        return false;
    }
}

const deleteToDo = (description) => {

    upDB();
    let index = listadoToDo.findIndex(tarea => tarea.description === description);

    if (index >= 0) {
        listadoToDo.splice(index, 1);
        saveDB();
        return true;
    } else {
        return false;
    }

}


module.exports = {
    create,
    getListado,
    updateToDO,
    deleteToDo
}