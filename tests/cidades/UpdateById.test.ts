import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Cidades - UpdateById", () => {
    it("Atualizar Registro pelo id", async () => {
        const resPost = await testServer
            .post("/cidades/")
            .send({ nome: "caxias" });
        expect(resPost.statusCode).toEqual(StatusCodes.CREATED);

        const resPut = await testServer
            .put(`/cidades/${resPost.body}`)
            .send({ nome: "maringá" });

        expect(resPut.statusCode).toEqual(StatusCodes.NO_CONTENT);
    });
    it("Tenta atualizar registro que não existe", async () => {
        const res1 = await testServer
            .put("/cidades/9999")
            .send({ nome: "Caxias do sul" });

        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res1.body).toHaveProperty("errors.default");
    });
});
