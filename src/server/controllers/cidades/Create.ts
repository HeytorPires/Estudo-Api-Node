/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

interface ICidade {
    nome?: string;
    estado: string;
}

const bodyValidation: yup.Schema<ICidade> = yup.object().shape({
    nome: yup.string().required().min(3),
    estado: yup.string().required(),
});

export const createBodyValidator: RequestHandler = async (req, res, next) => {
    try {
        await bodyValidation.validate(req.body, {
            abortEarly: false, //validar tudo antes de retornar erro
        });
        return next();
    } catch (err) {
        const YupError = err as yup.ValidationError;
        const errors: Record<string, string> = {};

        YupError.inner.forEach((error) => {
            if (!error.path) return; //retornar caso esteja vazio
            errors[error.path] = error.message; //passar message junto do path
        });
        return res.status(StatusCodes.BAD_REQUEST).json({ errors });
    }
};

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
    console.log(req.body);
    return res.send("Create!");
};
