import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getserver(): string {
    return 'server runing ...';
  }
}
