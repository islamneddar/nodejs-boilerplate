import {UserService} from "../../domain/user/user.service.js";
import {prisma} from "../../db/db.js";

export const servicesDIContainer = ()  => {
    const userService = new UserService({ prismaClient: prisma });
    return {
        userService
    }
}

