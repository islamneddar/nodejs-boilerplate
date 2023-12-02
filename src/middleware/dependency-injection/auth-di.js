import {services} from './services.js';
import {externalServices} from './external-service-di.js';
import {UserController} from '../../domain/user/user.controller.js';
import {AuthGuard} from '../../auth/auth-guard.js';

const authDIContainer = () => {
  console.log('authDIContainer')
  /** internalService */

  /** services */
  const userService = services.userService

  /** external services */

  /** controllers */
  const authGuard = new AuthGuard({ userService, jwtService  })

  return {
    authGuard
  }
}

export const authGuard = authDIContainer()