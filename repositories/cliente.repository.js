import ClienteModel from "../models/cliente.model.js";

async function insertCliente(cliente){
    try{
        return await ClienteModel.create(cliente);
    }catch(err){
        throw err;
    }
}

async function getClientes(order, field){
    try{
        // console.log("chegou", order);
        let bdField = null;
        if(field ==='clienteId' || !field){
            bdField = 'clienteId'
        } else if (field==='nome' || !field){
            bdField= 'nome'
        } else if (field==='email' || !field){
            bdField= 'email'
        } else if (field==='senha' || !field){
            bdField= 'senha'
        } else if (field==='telefone' || !field){
            bdField= 'telefone'
        } else {
            bdField= 'endereco'
        }
        
        if("asc"=== order || !order){
            return await ClienteModel.findAll({
                order:[
                    [bdField, 'ASC']
                ]
            });
        } else {
            return await ClienteModel.findAll({
                order:[
                    [bdField, 'DESC']
                ]   
            });
    }
    }catch(err){
        throw err;
    }
    // exemplo no postamn: http://localhost:3000/cliente?order=des&field=endereco
}

async function getCliente(id){
    try{
        return await ClienteModel.findByPk(id);
    }catch(err){
        throw err;
    }
}

async function updateCliente (cliente){
    try{
        await ClienteModel.update(cliente, {
            where:{
                clienteId: cliente.clienteId
            }
        })
        return getCliente(cliente.clienteId)
    }catch(err){
        throw err;
    }
}

async function getClienteByEmail(email){
    try{
        return await ClienteModel.findOne({where: {email}, raw:true })
    }catch(err){
        throw err;
    }
}

async function deleteCliente(id){
    try{
        await ClienteModel.destroy({
            where:{
                clienteId: id
            }
        });
    }catch(err){
        throw err;
    }
}

export default {
    insertCliente,
    getClientes,
    getCliente,
    updateCliente,
    getClienteByEmail,
    deleteCliente 
}