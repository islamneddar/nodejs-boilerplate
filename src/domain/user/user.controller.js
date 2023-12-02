import statusResponse from "../../common/constant/status-response.js";

export class UserController {
    constructor({ userService, fileStorageService }) {
        this.userService = userService;
        this.fileStorageService = fileStorageService;
    }

    async getAll(req, res, next) {
        const users = await this.userService.getAll();
        res.status(statusResponse.STATUS_OK).json(users);
    }

    async create(req, res, next) {
        const user = req.body;
        const userWithSameEmail = await this.userService.getByEmail(user.email);
        if (userWithSameEmail) {
            res.status(statusResponse.BAD_REQUEST).json({ message: 'Email already exists' });
            return;
        }
        const newUser = await this.userService.create(user);
        res.status(statusResponse.CREATED).json(newUser);
    }
}