import {getClient} from "./mongo.db.js";

async function createLivroInfo(livroInfo){
    const client= getClient();
    try{
        await client.connect();
        await client.db("livraria").collection("livroInfo").insertOne(livroInfo);
    }catch(err){
        throw err;
    }finally{
        await client.close();
    }
}

async function getLivroInfo(livroId) {
    const client = getClient();
    try {
        await client.connect();
        return await client.db("livraria").collection("livroInfo").findOne({ livroId });
    } catch (err) {
        throw err;
    } finally {
        await client.close();
    }
}

async function updateLivroInfo(livroInfo) {
    const client = getClient();
    try {
        await client.connect();
        await client.db("livraria").collection("livroInfo").updateOne(
            { livroId: livroInfo.livroId },
            { $set: { ...livroInfo } }
        );
    } catch (err) {
        throw err;
    } finally {
        await client.close();
    }
}

async function deleteLivroInfo(livroId) {
    const client = getClient();
    try {
        await client.connect();
        return await client.db("livraria").collection("livroInfo").deleteOne({ livroId });
    } catch (err) {
        throw err;
    } finally {
        await client.close();
    }
}

async function createAvaliacao(livroId, avaliacao){
    try {
        const livroInfo= await getLivroInfo(livroId);
        livroInfo.avaliacoes.push(avaliacao);
        await updateLivroInfo(livroInfo);
        } catch (err) {
        throw err;
    } 
}

async function deleteAvaliacao(livroId, index ){
    try {
        const livroInfo= await getLivroInfo(livroId);
        livroInfo.avaliacoes.splice(index,1);
        await updateLivroInfo(livroInfo);
        } catch (err) {
        throw err;
    } 
}

export default {
    createLivroInfo,
    getLivroInfo,
    updateLivroInfo,
    deleteLivroInfo,
    createAvaliacao,
    deleteAvaliacao
}