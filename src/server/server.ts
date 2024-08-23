import express from "express";
import "dotenv/config"; // importando variaveis de portas do servidor
import "./shared/services/TranslationsYup"; // importando tradução dos erros yup
import { router } from "./routes";

const server = express();

server.use(express.json());
server.use(router);

export { server };
