export class UserService {
    constructor({ prismaClient }) {
        this.userRepository = prismaClient.user;
    }

    async getAll() {
        return await this.userRepository.findMany();
    }

    async create({email, name}) {
        return await this.userRepository.create({
            data : {
                email,
                name,
            }
        });
    }

    async getByEmail(email) {
        return await this.userRepository.findUnique({
            where: {
                email
            }
        });
    }
}