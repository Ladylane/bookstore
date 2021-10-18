import LivroService from "../services/livro.service.js";
import LivroInfoService from "../services/livro.service.js"

async function createLivro(req, res, next){
    try{
        let livro= req.body;
        if (!livro.nome || !livro.valor || !livro.estoque || !livro.autorId){
            throw new Error("O preenchimento de todos os campos são necessarios!");
        }
        livro= await LivroService.createLivro(livro);
        res.send(livro);
        logger.info(`POST /livro - ${JSON.stringify(livro)}`);
    }catch(err){
        next(err);
    }
}

async function getLivros(req, res, next){
    try{
        const order=req.query.order;
        const field=req.query.field;
        res.send( await LivroService.getLivros(order,field));
        logger.info(`GET /livro` + req.query.order);
    }catch(err){
        next(err);
    }
}

async function getLivro(req, res, next){
    try{
        res.send( await LivroService.getLivro(req.params.id));
        loggers.info(`GET /livro`);
    }catch(err){
        next(err);
    }
}

async function updateLivro(req, res, next){
    try{
        let livro=req.body;
        if (!livro.nome || !livro.valor || !livro.estoque || !livro.autorId){
            throw new Error("O preenchimento de todos os campos são necessarios!");
        }
        livro= await LivroService.updateLivro(livro);
        res.send(livro);
        logger.info(`PUT /livro - ${JSON.stringify(livro)}`);
    }catch(err){
        next(err);
    }
}

async function deleteLivro(req, res, next){
    try{
        await LivroService.deleteLivro(req.params.id);
        res.end();
        logger.info(`DELETE /livro`);
    }catch(err){
        next(err);
    }
}

async function createLivroInfo(req, res, next){
    try{
        let livroInfo= req.body;
        if(!livroInfo.livroId){
            throw new Error ("Campo id é obrigatorio.");
        }
        await LivroInfoService.createLivroInfo(livroInfo);
        res.end();
        logger.info(`GET /livro/info  - ${JSON.stringify(livroInfo)}`);
    }catch(err){
        next (err);
    }
    
}

async function updateLivroInfo(req, res, next) {
    try {
        let livroInfo = req.body;
        if (!livroInfo.livroId) {
            throw new Error("Livro ID é obrigatório.");            
        }
        await LivroService.updateLivroInfo(livroInfo);
        res.end();
        logger.info(`PUT /livro/info - ${JSON.stringify(livroInfo)}`);        
    } catch (err) {
        next(err);
    }
}

async function deleteLivroInfo(req, res, next) {
    try {
        res.send(await LivroService.deleteLivroInfo(parseInt(req.params.id)));
        logger.info("DELETE /livro/info");
    } catch (err) {
        next(err);
    }
}
//cria avaliacao com id no body
// async function createAvaliacao(req, res, next){
//     try{
//         let params= req.body;
//         if(!params.livroId || !params.avaliacao){
//             throw new Error(" Todos campos são obrigatórios.");
//         }
//         await LivroService.createAvaliacao(params.livroId, params.avaliacao);
//         res.end();
//     } catch(err){
//         next(err);
//     }
// }

async function createAvaliacao(req, res, next){
    try{
        let conteudo= req.body;
        if(!conteudo.avaliacao){
            throw new Error(" Campo avaliação é obrigatorio.");
        }
        await LivroService.createAvaliacao(req.params.id, conteudo.avaliacao);
        res.end();
    } catch(err){
        next(err);
    }
}

async function deleteAvaliacao(req, res, next){
    try{
        await LivroService.deleteAvaliacao(req.params.id, req.params.index);
        res.end();
    } catch(err){
        next(err);
    }
}

export default{
    createLivro,
    getLivros,
    getLivro,
    updateLivro,
    deleteLivro,
    createLivroInfo,
    updateLivroInfo,
    deleteLivroInfo,
    createAvaliacao,
    deleteAvaliacao
}