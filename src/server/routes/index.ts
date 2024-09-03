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
    CidadesController.getAllValidation, // middleware
    CidadesController.getAll // controller/ Ação
);
router.get(
    "/cidades/:id",
    CidadesController.getByIdValidation,
    CidadesController.getById
);
router.post(
    "/cidades",
    CidadesController.createValidation, // middleware
    CidadesController.create // criação
);
router.put(
    "/cidades/:id",
    CidadesController.updateByIdValidation, // middleware
    CidadesController.updateById // update
);
router.delete(
    "/cidades/:id",
    CidadesController.deleteByIdValidation, // middleware
    CidadesController.deleteById // update
);

export { router };
