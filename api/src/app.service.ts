import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  private readonly users: any[] = [];

  constructor(
    @Inject('MICROSERVICE')
    private readonly microserviceClient: ClientProxy,
  ) { }

  getSendAnalytics() {
    return this.microserviceClient.send(
      { cmd: 'get_send_analytics' },
      {b: "bbb"}
    );
  }
    
  getEmitAnalytics() {
    return this.microserviceClient.emit(
      { cmd: 'get_emit_analytics' },
      {c: "ccc"}
    );
  }
}
