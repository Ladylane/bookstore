import VendaRepository from "../repositories/venda.repository.js";

async function createVenda(venda){
    return await VendaRepository.insertVenda(venda);
}
async function getVendas(order, field, autorId){
    return await VendaRepository.getVendas(order, field, autorId);
}

async function getVendaByClienteId(id){
    return await VendaRepository.getVendaByClienteId(id);
}

async function updateVenda(venda){
    return await VendaRepository.updateVenda(venda);
}
async function deleteVenda(id){
    return await VendaRepository.deleteVenda(id);
}

export default{
    createVenda,
    getVendas,
    getVendaByClienteId,
    updateVenda,
    deleteVenda
}