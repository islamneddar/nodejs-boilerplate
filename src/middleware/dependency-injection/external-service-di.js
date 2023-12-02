import {FileStorageService} from '../../external-service/file-storage/file-storage.js';
import {LocalFileStorage} from '../../external-service/file-storage/types/local-storage.js';
import {JwtService} from '../../external-service/jwt/jwt-service.js';

const externalServiceDIContainer = ()  => {
  console.log('externalServiceDIContainer')

  const localFileStorage = new LocalFileStorage();


  /** services */
  const jwtService = new JwtService();

  const fileStorageService = new FileStorageService({ storage: localFileStorage });
  return {
    fileStorageService,
    jwtService
  }
}

export const externalServices = externalServiceDIContainer();