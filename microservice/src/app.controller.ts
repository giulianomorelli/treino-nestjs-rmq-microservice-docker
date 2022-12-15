import { Controller } from '@nestjs/common';
import { RMQRoute, Validate, RMQError } from 'nestjs-rmq';
import { MinLength, IsString } from 'class-validator';
import { ERROR_TYPE } from 'nestjs-rmq/dist/constants';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

export class Message {
	@MinLength(2)
	data: string;

	@IsString()
	test: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
	/* @RMQRoute('hello-rpc')
	@Validate()
	getHelloRpc(data: Message): string {
		// throw new RMQError('Error!', ERROR_TYPE.RMQ, 0, {}); // - example with error
		return data.data + ' from server';
	}

	@RMQRoute('hello-none')
	@Validate()
	getHelloNone(data: Message): string {
		console.log(data);
		throw new RMQError('Error!', ERROR_TYPE.RMQ, 0, {}); // - example with error
		return;
	} */

  @EventPattern({cmd: 'get_emit_analytics'})
  handleUserCreated(data: any) {
   return this.appService.handleEmit(data);
  }

  @MessagePattern({cmd: "get_send_analytics"})
  accumulate(data) {
		return this.appService.handleSend(data);
  }
}
