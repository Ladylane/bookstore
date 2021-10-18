import AutorModel from "../models/autor.model.js";

async function insertAutor(autor){
    try{
        return await AutorModel.create(autor);
    }catch(err){
        throw err;
    }
}

async function getAutores(order, field){
    try{
        let bdField=null;
        if(field==="autorId" || !field) {
            bdField="autorId"
        } else if(field==="nome") {
            bdField="nome"
        } else if(field==="email") {
            bdField="email"
        } else {
            bdField="telefone"
        }
        if (order==="asc" || !order){
            return await AutorModel.findAll({
                order:[
                    [bdField, 'ASC']
                ]
            })
        } else {
            return await AutorModel.findAll({
                order:[
                    [bdField, 'DESC']
                ]
            })
        }
    }catch(err){
        throw err;
    }
}

async function getAutor(id){
    try{
        return await AutorModel.findByPk(id);
    }catch(err){
        throw err;
    }
}

async function updateAutor(autor){
    try{
        await AutorModel.update(autor, {
            where:{
                autorId: autor.autorId
            }
        })
        return getAutor(autor.autorId);
    }catch(err){
        throw err;
    }
}

async function deleteAutor(id){
    try{
        await AutorModel.destroy({
            where:{
                autorId: id
            }
        })
    }catch(err){
        throw err;
    }
}

export default{
    insertAutor,
    getAutores,
    getAutor,
    updateAutor,
    deleteAutor
}