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

export const deleteByIdValidation = validation((getSchema) => ({
    params: getSchema<IParamProps>(
        yup.object().shape({
            id: yup.number().integer().required().moreThan(0),
        })
    ),
}));

//Função de Listar sendo exportada
export const deleteById = async (req: Request<IParamProps>, res: Response) => {
    console.log(req.params);

    if (Number(req.params.id) === 9999)
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: "Registro não encontrado",
            },
        });

    return res.status(StatusCodes.NO_CONTENT).send();
};
