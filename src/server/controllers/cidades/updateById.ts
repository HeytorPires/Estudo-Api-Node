import { Request, Response } from "express";
// import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../shared/middlewares/Validation";
import { StatusCodes } from "http-status-codes";

interface IParamProps {
    id?: number;
}
interface IBodyProps {
    nome: string;
}

/* 
função abaixo usa o middleware para validar os dados dos schemas que foi usado para fazer a requisição,
usando com modelo de cada schema as interfaces acima, atravez do metodo "getSchema"
*/

export const updateByIdValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(
        yup.object().shape({
            nome: yup.string().required().min(3),
        })
    ),
    params: getSchema<IParamProps>(
        yup.object().shape({
            id: yup.number().integer().required().moreThan(0),
        })
    ),
}));

//Função de Listar sendo exportada
export const updateById = async (
    req: Request<IParamProps, object, IBodyProps>, // passando na 1º posição pois é para deixar o req.params usando como padrão de interface passado no argumento
    res: Response
) => {
    console.log(req.params);
    console.log(req.body);
    return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .send("nâo implementado!");
};
