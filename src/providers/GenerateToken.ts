import { sign } from "jsonwebtoken";

export class GenerateToken {
    execute(id: string): string {
        const token = sign({ id }, "d3aa349c8d932ea71f11aa096ba29f61", {
            expiresIn: "1d"
        });
        return token;
    }
}