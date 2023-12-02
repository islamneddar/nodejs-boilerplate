import {Router} from "express";
import {controllers} from "../../middleware/dependency-injection/controllers.js";
import {userCreationBodyValidator} from "./user.validations.js";
import {responseHandler} from "../response-handler.js";

const userRouter = Router()

const userController = controllers.userController


userRouter.get("/",
    async (req, res, next) => {
        responseHandler(req,res,next, async (req, res, next) => {
            await userController.getAll(req, res, next)
        })
    })

userRouter.post("/", userCreationBodyValidator, async (req, res, next) =>
    await userController.create(req,res,next))

export {
    userRouter
}
