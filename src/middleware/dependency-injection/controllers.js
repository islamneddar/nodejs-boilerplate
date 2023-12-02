import {UserController} from "../../domain/user/user.controller.js";
import {services} from "./services.js";


const controllersDIContainer = () => {
    console.log('controllersDIContainer')
    const userService = services.userService

    const userController = new UserController({ userService  })
    return {
        userController
    }
}

export const controllers = controllersDIContainer()