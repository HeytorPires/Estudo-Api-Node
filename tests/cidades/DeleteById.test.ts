import { StatusCodes } from "http-status-codes";

import { testServer } from "../jest.setup";

describe("Cidades - DeleteById", () => {
    it("Apaga registro", async () => {
        const res1 = await testServer
            .post("/cidades")
            .send({ nome: "Caxias do sul" });

        expect(res1.statusCode).toEqual(StatusCodes.CREATED);
        console.log("teste: ", res1);
        const resApagada = await testServer
            .delete(`/cidades/${res1.headers}`)
            .send();

        expect(resApagada.statusCode).toEqual(StatusCodes.NO_CONTENT);
    });
    it("Tenta apagar registro que não existe", async () => {
        const res1 = await testServer.delete("/cidades/9999").send();

        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res1.body).toHaveProperty("errors.default");
    });
});
