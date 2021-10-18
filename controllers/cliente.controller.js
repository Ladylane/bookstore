import ClienteService from "../services/cliente.service.js";

async function createCliente (req, res, next){
    try{
        let cliente=req.body;
        if (!cliente.nome || !cliente.email || !cliente.senha || !cliente.telefone || !cliente.endereco){
            throw new Error("O preenchimento de todos os campos são necessarios!");
        }
        cliente= await ClienteService.createCliente(cliente);
        res.send(cliente);
        loggers.info(`POST /cliente - ${JSON.stringify(cliente)}`);
    }catch(err){
        next(err);
    }
}

async function getClientes(req, res, next){
    try{
        const order = req.query.order
        const field = req.query.field
        res.send(await ClienteService.getClientes(order,field));
        loggers.info(`GET /cliente` + req.query.order);
    } catch(err) {
        next(err);
    }
}

async function getCliente(req, res, next){
    try{
        res.send(await ClienteService.getCliente(req.params.id));
        loggers.info(`GET /cliente`);
    } catch(err) {
        next(err);
    }
}

async function updateCliente(req, res, next){
    try{
        let cliente=req.body;
        if (!cliente.nome || !cliente.email || !cliente.senha || !cliente.telefone || !cliente.endereco){
            throw new Error("O preenchimento de todos os campos são necessarios!");
        }
        cliente=await ClienteService.updateCliente(cliente);
        res.send(cliente);
        logger.info(`PUT /cliente - ${JSON.stringify(cliente)}`);
    }catch(err){
        next(err);
    }
}

async function deleteCliente(req,res,next){
    try{
        await ClienteService.deleteCliente(req.params.id)
        res.end();
        logger.info(`DELETE /cliente`);
    }catch(err){
        next(err);
    }
}

export default{
    createCliente,
    getClientes,
    getCliente,
    updateCliente,
    deleteCliente
}