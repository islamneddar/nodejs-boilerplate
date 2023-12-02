import {UnauthorizedException} from '../common/errors/common-errors.js';

export class AuthGuard {
  constructor({userService, jwtService}) {
    console.log('AuthGuard constructor');
    this.userService = userService;
    this.jwtService = jwtService;
  }

  canActivate({isAdmin}) {
        return async (req, res, next) => {
          const request = context.switchToHttp().getRequest();
          const token = this.extractTokenFromHeader(request);
          if (!token) {
            throw new UnauthorizedException();
          }
          try {
            const payload = await this.jwtService.verifyAsync(token, {
              secret: process.env.JWT_SECRET,
            });
            
            const user = await this.userService.findOneByIdAndEmail({
              id: payload.id,
              email: payload.email,
            });

            if (!user) {
              throw new UnauthorizedException('unauthorized');
            }
            request.user = user;
          } catch (e) {
            throw new UnauthorizedException('unauthorized');
          }
          return next();
        }
    }
}