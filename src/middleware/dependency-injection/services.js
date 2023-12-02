import {UserService} from "../../domain/user/user.service.js";
import {prisma} from "../../db/db.js";

const servicesDIContainer = ()  => {
    console.log('servicesDIContainer')
    const userService = new UserService({ prismaClient: prisma });
    return {
        userService
    }
}

export const services = servicesDIContainer();

