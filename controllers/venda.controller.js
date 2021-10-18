import ClienteRepository from "../repositories/cliente.repository.js";
import ClienteService from "../services/cliente.service.js";
import VendaService from "../services/venda.service.js";
import { getRole } from "./auth.controller.js";

async function createVenda(req,res,next){
    try{
        let venda=req.body;
        if(!venda.valor || !venda.data || !venda.clienteId || !venda.livroId){
            throw new Error("O preenchimento de todos os campos são necessarios!");
        }
        venda= await VendaService.createVenda(venda);
        res.send(venda);
        logger.info(`POST /venda - ${JSON.stringify(venda)}`);
    }catch(err){
        next(err);
    }
}

async function getVendas(req,res,next){
    try{
        const order=req.query.order;
        const field=req.query.field;
        const autorId=req.query.autorId;
        res.send(await VendaService.getVendas(order,field,autorId));
        logger.info(`GET /venda` + req.query.order)
    }catch(err){
        next (err);
    }
}

async function getVendaByClienteId(req,res,next){
    try{
        if (req.query.clienteId && getRole(req.auth.user) === "cliente"){
            const cliente= await ClienteService.verificaLogin(req.auth.user);
            if (parseInt(req.query.clienteId) !== cliente.clienteId){
                throw new Error("Cliente não pode acessar vendas de outro cliente.");
            }
        }
        res.send(await VendaService.getVendaByClienteId(req.params.id));
        logger.info(`GET /venda`)
    }catch(err){
        next (err);
    }
}

async function updateVenda(req,res,next){
    try{
        let venda=req.body
        if(!venda.valor || !venda.data || !venda.clienteId || !venda.livroId){
            throw new Error("O preenchimento de todos os campos são necessarios!");
        }
        venda= await VendaService.updateVenda(venda);
        res.send(venda);
        logger.info(`PUT /venda`)
    }catch(err){
        next (err);
    }
}

async function deleteVenda(req,res,next){
    try{
        await VendaService.deleteVenda(req.params.id);
        res.end();
        logger.info(`DELETE /venda`)
    }catch(err){
        next (err);
    }
}

export default{
    createVenda,
    getVendas,
    getVendaByClienteId,
    updateVenda,
    deleteVenda
}