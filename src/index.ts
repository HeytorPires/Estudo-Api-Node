import { server } from "./server/server";

server.listen(
    process.env.PORT || 3333, // caso não tenha porta no .env iniciar com 3333 por padrão
    () => console.log(`Escutando na Porta: ${process.env.PORT}`) // Pegando porta do .env para iniciar o servidor
);
