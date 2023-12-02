import {UserController} from "../../domain/user/user.controller.js";
import {servicesDIContainer} from "./services.js";

export const controllersDIContainer = () => {
    const services = servicesDIContainer()

    const userService = services.userService

    const userController = new UserController({ userService  })
    return {
        userController
    }
}