import ClienteRepository from "../repositories/cliente.repository.js";

async function createCliente(cliente){
    return await ClienteRepository.insertCliente(cliente);
}

async function getClientes(order, field){
    return await ClienteRepository.getClientes(order, field);
}

async function getCliente(id){
    return await ClienteRepository.getCliente(id);
}

async function updateCliente(cliente){
    return await ClienteRepository.updateCliente(cliente);
}

async function verificaLogin(email,senha){
    const cliente= await ClienteRepository.getClienteByEmail(email);
    if (!cliente){
        return false;
    }
    return basicAuth.safeCompare(cliente.senha, senha);
}

async function deleteCliente(id){
    return await ClienteRepository.deleteCliente(id);
}

export default{
    createCliente,
    getClientes,
    getCliente,
    updateCliente,
    verificaLogin,
    deleteCliente
}