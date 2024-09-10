import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("cidades - Create", () => {
    it("Cria registro", async () => {
        const res1 = await testServer
            .post("/cidades")
            .send({ nome: "Caxias do Sul" }); // enviando valores
        expect(res1.statusCode).toEqual(StatusCodes.CREATED); // esperando um 200 created, caso não for retorna erro no test
        expect(typeof res1.body).toEqual("object");
    });
    it("tenta criar um registro com nome muito curto", async () => {
        const res1 = await testServer.post("/cidades").send({ nome: "ca" }); // enviando valor curto
        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST); // esperando erro 404
        expect(res1.body).toHaveProperty("errors.body.nome"); // conferindo se o erro é existente dentro do body do "errors" com a propriedade "nome"
    });
});
