/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

interface ICidade {
    nome: string;
}

export const create = (req: Request<{}, {}, ICidade>, res: Response) => {
    if (req.body.nome === undefined) {
        return res
            .status(StatusCodes.BAD_REQUEST)
            .send("Informe o atributo nome");
    }
    console.log(req.body);
    return res.send("Create!");
};
