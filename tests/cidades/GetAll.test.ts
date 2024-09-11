import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Cidades - GetAll", () => {
    it("Buscar todos os registros", async () => {
        const res1 = await testServer
            .post("/cidades")
            .send({ nome: "caxias do sul" });
        expect(res1.status).toEqual(StatusCodes.CREATED);

        const resBuscada = await testServer.get("/cidades").send();
        expect(resBuscada.status).toEqual(StatusCodes.OK);
        expect(Number(resBuscada.header["x-total-count"])).toBeGreaterThan(0);
        /* x-total-count é q quantidade de registros retornados,
        junto com a função toBeGreaterThan(0), implementa que deve ser maior que 0, 
        retornando erro caso , não tenha nehum registro
        */
        expect(resBuscada.body.length).toBeGreaterThan(0); // o body não pode ser vazio
    });
});
