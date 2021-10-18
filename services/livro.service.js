import LivroRepository from "../repositories/livro.repository.js";
import livroInfoRepository from "../repositories/livroInfo.repository.js";
import LivroInfoRepository from "../repositories/livroInfo.repository.js";

async function createLivro(livro){
    return await LivroRepository.insertLivro(livro);
}

async function getLivros(order,field){
    return await LivroRepository.getLivros(order,field);
}

async function getLivro(id){
    const livro = await LivroRepository.getLivro(id);
    livro.info = await LivroInfoRepository.getLivroInfo(parseInt(id));
    return livro;
}

async function updateLivro(livro){
    return await LivroRepository.updateLivro(livro);
}

async function deleteLivro(id){
    return await LivroRepository.deleteLivro(id);
}

// MONGODB:
async function createLivroInfo(livroInfo){
    await LivroInfoRepository.createLivroInfo(livroInfo);
}

async function updateLivroInfo(livroInfo){
    await LivroInfoRepository.updateLivroInfo(livroInfo);
}

async function deleteLivroInfo(livroId) {
    await LivroInfoRepository.deleteLivroInfo(livroId);
}

async function createAvaliacao(livroId, avaliacao){
    await LivroInfoRepository.createAvaliacao(parseInt(livroId), avaliacao);
}

async function deleteAvaliacao(livroId, index){
    await LivroInfoRepository.deleteAvaliacao(parseInt(livroId), index);
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