export class UserService {
    constructor({ prismaClient }) {
        this.userRepository = prismaClient.user;
    }

    async getAll() {
        return await this.userRepository.findMany();
    }
}