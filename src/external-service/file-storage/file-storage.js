import {IFileStorageService} from './file-storage-interface.js';

export class FileStorageService extends IFileStorageService {
  #storage;

  constructor(storage) {
    super();
    this.storage = storage;
  }

  async uploadFile(file) {
    const fileUrl = await this.storage.uploadFile(file);
    return fileUrl;
  }
}