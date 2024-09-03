import { Router } from "express";
// import { StatusCodes } from "http-status-codes";
import { CidadesController } from "./../controllers";

const router = Router();

router.get("/", (_, res) => {
    //resposta ao conectar
    return res.send("Olá, dev!");
});

router.get(
    "/cidades",
    CidadesController.getAllValidation,
    CidadesController.getAll
);
router.post(
    "/cidades",
    CidadesController.createValidation, // middleware
    CidadesController.create // criação
);

export { router };
