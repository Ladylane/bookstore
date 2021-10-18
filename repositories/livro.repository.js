import LivroModel from "../models/livro.model.js";

async function insertLivro(livro){
    try{
        return await LivroModel.create(livro);
    }catch(err){
        throw err;
    }
}

async function getLivros(order, field){
    try{
        let bdField=null;
        if(field==="livroId" || !field){
            bdField="livroId"
        }else if (field==="nome"){
            bdField="nome"
        }else if (field==="valor"){
            bdField="valor"
        }else if (field==="estoque"){
            bdField="estoque"
        }else {
            bdField="autorId"
        }

        if ("asc"===order || !order){
            return await LivroModel.findAll({
                order: [
                    [bdField, 'ASC']
                ]
            })
        }else {
            return await LivroModel.findAll({
                order:[
                    [bdField, 'DES']
                ]
            })
        }
    }catch(err){
        throw err;
    }
} 

async function getLivro(id){
    try{
        return await LivroModel.findByPk(id, {raw: true});
    }catch (err){
        throw err;
    }
}

async function updateLivro(livro){
    try{
        await LivroModel.update(livro,{
            where:{
                livroId: livro.livroId
            }
        })
        return getLivro(livro.livroId);
    }catch (err){
        throw err;
    }
}

async function deleteLivro(id){
    try{
        await LivroModel.destroy( {
            where:{
                livroId: id
            }
        });
    }catch (err){
        throw err;
    }
}

export default{
    insertLivro,
    getLivros,
    getLivro,
    updateLivro,
    deleteLivro
}