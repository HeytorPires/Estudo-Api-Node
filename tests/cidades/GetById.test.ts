import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Cidades - GetById", () => {
    it("Busca Registro pelo id", async () => {
        const resPost = await testServer
            .post("/cidades/")
            .send({ nome: "Maringá" });
        expect(resPost.statusCode).toEqual(StatusCodes.CREATED);

        const res1 = await testServer.get(`/cidades/${resPost.body}`).send();
        expect(res1.statusCode).toEqual(StatusCodes.OK);
    });
    it("Tenta buscar registro que não existe", async () => {
        const res1 = await testServer.get("/cidades/9999").send();
        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res1.body).toHaveProperty("errors.default");
    });
});
