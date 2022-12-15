import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  handleEmit(data: any) {
    console.log('handleEmit - IN MICROSERVICE', data);
    return data;
    // TODO: Email the user...
  }

  handleSend(data: any) {
    console.log('handleSEND - IN MICROSERVICE', data);
    return data;
    // TODO: Email the user...
  }
}
