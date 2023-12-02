import statusResponse from "../../common/constant/status-response.js";

export class UserController {
    #userService;
    constructor({ userService }) {
        console.log("userService => "+ userService)
        this.userService = userService;
    }

    async getAll(req, res, next) {
        try{
            const users = await this.userService.getAll();
            res.status(statusResponse.STATUS_OK).json(users);
        }catch (error){
            next(error)
        }
    }
}