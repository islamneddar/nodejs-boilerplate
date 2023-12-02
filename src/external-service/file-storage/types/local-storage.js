import * as path from 'path';
import * as fs from 'fs';
import {IFileStorageService} from '../file-storage-interface.js';

export class LocalFileStorage extends IFileStorageService {
  constructor() {
    super();
  }

  async uploadFile(file) {
    const filePath = path.join("path to write", file.name);
    await fs.writeFileSync(filePath, file.data);
    return filePath;
  }
}