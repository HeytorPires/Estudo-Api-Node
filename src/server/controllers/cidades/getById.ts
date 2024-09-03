import { Request, Response } from "express";
// import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../shared/middlewares/Validation";
import { StatusCodes } from "http-status-codes";

interface IParamProps {
    id?: number;
}

/* 
função abaixo usa o middleware para validar os dados dos schemas que foi usado para fazer a requisição,
usando com modelo de cada schema as interfaces acima, atravez do metodo "getSchema"
*/

export const getByIdValidation = validation((getSchema) => ({
    params: getSchema<IParamProps>(
        yup.object().shape({
            id: yup.number().integer().required().moreThan(0),
        })
    ),
}));

//Função de Listar sendo exportada
export const getById = async (
    req: Request<IParamProps>, // passando na 1º posição pois é para deixar o req.params usando como padrão de interface passado no argumento
    res: Response
) => {
    console.log(req.params);
    return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .send("nâo implementado!");
};
