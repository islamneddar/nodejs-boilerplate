import jwt from 'jwt-then';

export class JwtService {

  constructor({configService}) {
    this.configService = configService;
  }
  async verifyAsync(token: string) {
    return await jwt.verify(token, this.configService.getJwtSecret());
  }
}