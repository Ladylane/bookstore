import app from "./app.js";
app.listen(3000, () => console.log("@@@@@ API STARTED @@@@@"));



// import express from "express";
// import ClienteRouter from "./routes/cliente.route.js";
// import LivroRouter from "./routes/livro.route.js"
// import AutorRouter from "./routes/autor.route.js"
// import VendaRouter from "./routes/venda.route.js"
// import cors from "cors";
// import winston from "winston";
// import basicAlth from "express-basic-auth";
// import {authorizer, authorize} from "./controllers/auth.controller.js"




// const { combine, timestamp, label, printf}=winston.format;
// const myFormat= printf( ({level, message, label, timestamp})=>{
//     return `${timestamp} [${label}] ${level} ${message}`;
// })

// global.logger = winston.createLogger({
//     level: "silly",
//     transports: [
//         new(winston.transports.Console)(),
//         new(winston.transports.File)({filename: "desafio-final-node.log"})
//     ],
//     format:combine(
//         label({label: "desafio-final-node"}),
//         timestamp(),
//         myFormat
//     )
// })

// const app = express();

// // app.use(basicAlth({
// //     users:{"admin":"desafio-igti-nodejs"}
// // }))

// app.use(express.json());
// app.use(cors());
// app.use(basicAuth({authorizeAsync: true, authorizer}))
// app.use("/cliente", ClienteRouter);
// app.use("/livro", LivroRouter);
// app.use("/autor", authorize("admin"), AutorRouter);
// app.use("/venda", VendaRouter);

// app.use((err, req, res, next)=>{
//     logger.error(`{req.method} ${req.baseUrl} - ${err.message}`);
//     res.status(400).send({error: err.message});
// })


// // const bd = process.env.BD_IGTI;
// // console.log(bd)

// app.listen(3000, () => console.log("@@@@@ API STARTED @@@@@"))



// "test": "echo \"Error: no test specified\" && exit 1"