import AutorService from "../services/autor.service.js"

async function createAutor(req,res,next){
    try{
        let autor=req.body;
        if(!autor.nome || !autor.email || !autor.telefone){
            throw new Error("O preenchimento de todos os campos são necessarios!");
        }
        autor= await AutorService.createAutor(autor);
        res.send(autor);
        logger.info(`POST /autor - ${JSON.stringify(autor)}`);
    }catch(err){
        next(err);
    }

}

async function getAutores(req,res,next){
    try{
        const order=req.query.order;
        const field=req.query.field;
        res.send(await AutorService.getAutores(order,field));
        logger.info(`GET /livro` + req.query.order)
    }catch(err){
        next (err);
    }
}

async function getAutor(req,res,next){
    try{
        res.send(await AutorService.getAutor(req.params.id));
        logger.info(`GET /livro`)
    }catch(err){
        next (err);
    }
}

async function updateAutor(req,res,next){
    try{
        let autor=req.body
        if(!autor.nome || !autor.email || !autor.telefone){
            throw new Error("O preenchimento de todos os campos são necessarios!");
        }
        autor= await AutorService.updateAutor(autor);
        res.send(autor);
        logger.info(`PUT /livro`)
    }catch(err){
        next (err);
    }
}

async function deleteAutor(req,res,next){
    try{
        await AutorService.deleteAutor(req.params.id);
        res.end();
        logger.info(`DELETE /livro`)
    }catch(err){
        next (err);
    }
}

export default{
    createAutor,
    getAutores,
    getAutor,
    updateAutor,
    deleteAutor
}