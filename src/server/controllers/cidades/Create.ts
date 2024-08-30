/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Request, Response } from "express";
// import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../shared/middlewares/Validation";

interface ICidade {
    nome?: string;
    estado: string;
}
interface IFilter {
    filter?: string;
}

/* 
função abaixo usa o middleware para validar os dados dos schemas que foi usado para fazer a requisição,
usando com modelo de cada schema as interfaces acima, atravez do metodo "getSchema"
*/

export const createValidation = validation((getSchema) => ({
    body: getSchema<ICidade>(
        yup.object().shape({
            nome: yup.string().required().min(3),
            estado: yup.string().required().min(3),
        })
    ),
    query: getSchema<IFilter>(
        yup.object().shape({
            filter: yup.string().required().min(3),
        })
    ),
}));

//Função de criar sendo exportada
export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
    console.log(req.body);
    return res.send("Create!");
};
