import {UserController} from "../../domain/user/user.controller.js";
import {services} from "./services.js";
import {externalServices} from './external-service-di.js';


const controllersDIContainer = () => {
    console.log('controllersDIContainer')

    /** services */
    const userService = services.userService

    /** external services */
    const fileStorageService = externalServices.fileStorageService

    /** controllers */
    const userController = new UserController({ userService,fileStorageService })

    return {
        userController
    }
}

export const controllersDi = controllersDIContainer()