import {Router} from "express";
import {controllersDIContainer} from "../../middleware/dependency-injection/controllers.js";

const userRouter = Router()

const userController = controllersDIContainer().userController
userRouter.get("/", async (req, res, next) =>
    await userController.getAll(req,res,next))

export {
    userRouter
}
