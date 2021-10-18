import app from "../app.js";
import request from "supertest";
import AutorRepository from "../repositories/autor.repository.js";
import ClienteRepository from "../repositories/cliente.repository.js";
import LivroRepository from "../repositories/livro.repository.js";
import VendaRepository from "../repositories/venda.repository.js";

jest.setTimeout(30000);

test("CENARIO 01", async () => {
    const autor= {
        nome:"Autor Testeeee",
        email: "autortesteeee@gmail.com",
        telefone:"111111111"
    }

    const livro={
        nome:"Livro Teste",
        valor:"100",
        estoque: 10,
        autorId: null
    }

    const cliente={
        nome:"Cliente Teste",
        email:"clienteteste@gmail.com",
        senha : "123456",
        telefone:"22222222",
        endereco:"Rua X, n 100"
    }

    const venda={
        valor: "100",
        data:"2021-01-01",
        clienteId:null,
        livroId:null
    }

const admin= "admin";
const passwordAdmin="desafio-igti-nodejs";
let emailCliente= cliente.email;
let passwordCliente= cliente.senha;

let res = await request(app).post("/autor").send(autor).auth(admin, passwordAdmin);
autor.autorId= res.body.autorId;
expect(res.body).toMatchObject(autor);
expect(res.status).toBe(200);

res= await request(app).get(`/autor/${autor.autorId}`).auth(admin, passwordAdmin);
expect(res.body).toMatchObject(autor);
expect(res.status).toBe(200);

livro.autorId= autor.autorId;
res = await request(app).post("/livro").send(livro).auth(admin, passwordAdmin);
livro.livroId= res.body.livroId;
expect(res.body).toMatchObject(livro);
expect(res.status).toBe(200);

res= await request(app).get(`/livro/${livro.livroId}`).auth(admin, passwordAdmin);
expect(res.body).toMatchObject(livro);
expect(res.status).toBe(200);

res= await request(app).post("/cliente").send(cliente).auth(admin, passwordAdmin);
cliente.clienteId=res.body.clienteId;
delete cliente.senha;
expect(res.body).toMatchObject(cliente);
expect(res.status).toBe(200);

res=await request(app).get(`/cliente/${cliente.clienteId}`).auth(admin, passwordAdmin);
expect(res.body).toMatchObject(cliente);
expect(res.status).toBe(200);

res=await request(app).get(`/livro/${livro.livroId}`).auth(emailCliente, passwordCliente);
expect(res.body).toMatchObject(cliente);
expect(res.status).toBe(200);

venda.clienteId= livro.clienteId;
venda.livroId= livro.livroId;
res= await request(app).post("/venda").send(venda).auth(emailCliente, passwordCliente);
venda.vendaId= res.body.vendaId;
expect(res.body).toMatchObject(venda);
expect(res.status).toBe(200);

res=await request(app).get(`/venda/${venda.vendaId}`).auth(admin, passwordAdmin);
expect(res.body).toMatchObject(venda);
expect(res.status).toBe(200);

await VendaRepository.deleteVenda(venda.vendaId);
await LivroRepository.deleteLivro(livro.livroId);
await AutorRepository.deleteAutor(autor.autorId);
await ClienteRepository.deleteCliente(cliente.clienteId);


})