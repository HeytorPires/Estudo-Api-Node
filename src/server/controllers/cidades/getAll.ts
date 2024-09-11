/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Request, Response } from "express";
// import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../shared/middlewares/Validation";
import { StatusCodes } from "http-status-codes";

interface IQueryProps {
    page?: number;
    limit?: number;
    filter?: string;
}

/* 
função abaixo usa o middleware para validar os dados dos schemas que foi usado para fazer a requisição,
usando com modelo de cada schema as interfaces acima, atravez do metodo "getSchema"
*/

export const getAllValidation = validation((getSchema) => ({
    query: getSchema<IQueryProps>(
        yup.object().shape({
            page: yup.number().optional().moreThan(0),
            limit: yup.number().optional().moreThan(0),
            filter: yup.string(),
        })
    ),
}));

//Função de Listar sendo exportada
export const getAll = async (
    req: Request<{}, {}, {}, IQueryProps>, // passando na 4º posição pois é para deixar o req.query usando como padrão de interface o IQueryProps
    res: Response
) => {
    res.setHeader("access-control-expose-headers", "x-total-count");
    res.setHeader("x-total-count", 1);
    console.log(req.query);
    return res.status(StatusCodes.OK).json([
        {
            id: 1,
            nome: "caxias",
        },
    ]);
};
