import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getSomeText() : string {
    return "this is some Text to test an injectable"
  }
}
