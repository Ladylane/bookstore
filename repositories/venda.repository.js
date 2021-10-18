import AutorModel from "../models/autor.model.js";
import ClienteModel from "../models/cliente.model.js";
import LivroModel from "../models/livro.model.js";
import VendaModel from "../models/venda.model.js";

async function insertVenda(venda){
    try{
        return await VendaModel.create(venda);
    }catch(err){
        throw err;
    }
}

async function getVendas(order, field, autorId){
    try{
        let bdField=null;
        if(field==="vendaId" || !field) {
            bdField="vendaId"
        } else if(field==="valor") {
            bdField="valor"
        } else if(field==="data") {
            bdField="data"
        } else if(field==="clienteId") {
            bdField="clienteId"
        } else if(field==="livroId"){
            bdField="livroId"
        } else 
                console.log("---> AUTOR ID", autorId)
                return await VendaModel.findAll({
                    include:[{
                      model:LivroModel,
                        include : [{
                         model: AutorModel,
                         require: true
                     }],
                     where: { autorId: autorId },
                    
                  }]
                })
         

        if (order==="asc" || !order){
            return await VendaModel.findAll({
                order:[
                    [bdField, 'ASC']
                ]
            })
        } else {
            return await VendaModel.findAll({
                order:[
                    [bdField, 'DESC']
                ]
            })
        }
        
        
    }catch(err){
        throw err;
    }
}

// async function getVenda(id){
//     try{
//         return await VendaModel.findByPk(id);
//     }catch(err){
//         throw err;
//     }
// }

async function getVendaByClienteId(id) {
    try {
        const data = await VendaModel.findAll({
            include:[{
                model:ClienteModel,
                where: { clienteId: id }
            }, { 
                model: LivroModel, require: true 
            }]
        })
        return data;
    } catch (err) {
        throw err;
    }
}
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


// async function getVendaByAutorId(field) {
//     try {
//         bdField= null;
//         if(field==="autorId")
//         const data = await VendaModel.findAll({
//             include:{
//                 model:LivroModel,
//                 where: {
//                     autorId: id
//                 }
//             }
//         })
//         return data;
//     } catch (err) {
//         throw err;
//     }
// }

//%%%%%%%%%%%%%%%%%%%%%%%%%


async function updateVenda(venda){
    try{
        await VendaModel.update(venda, {
            where:{
                vendaId: venda.vendaId
            }
        })
        return getVenda(venda.vendaId);
    }catch(err){
        throw err;
    }
}

async function deleteVenda(id){
    try{
        await VendaModel.destroy({
            where:{
                vendaId: id
            }
        })
    }catch(err){
        throw err;
    }
}

export default{
    insertVenda,
    getVendas,
    getVendaByClienteId,
    // getVendaByAutorId,
    updateVenda,
    deleteVenda
}