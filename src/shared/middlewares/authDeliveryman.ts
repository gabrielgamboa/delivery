import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { prisma } from "../../database/prismaClient";
import { AppError } from "../errors/AppError";

interface ITokenPayload {
    id: string;
}

export async function authDeliveryman (request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token missing", 401);
    }

    const [, token] = authHeader.split(" ");

    try {
        const { id: id_deliveryman } = verify(token, "d3aa349c8d932ea71f11aa096ba29f61") as ITokenPayload;

        const user = await prisma.client.findUnique({
            where: {
                id: id_deliveryman,
            }
        })

        if(!user) {
            throw new AppError("User does not exists", 401);
        }

        request.id_deliveryman = id_deliveryman;
        return next();

    } catch (error) {
        throw new AppError("Invalid token", 401);
    }

}