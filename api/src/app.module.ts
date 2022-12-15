import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';/* 
import { RMQModule } from 'nestjs-rmq';
import { MyErrorHandler } from './error.handler'; */

@Module({
	imports: [
		ClientsModule.register([
      {
        name: 'MICROSERVICE',
        transport: Transport.RMQ,
        options: {
					urls:["amqp://guest:guest@rabbitmq:5672"]
        }
      },
		]),/* 
		RMQModule.forRoot({
			exchangeName: 'test',
			serviceName: "test",
			connections: [
				{
					login: 'guest',
					password: 'guest',
					host: 'integration',
					port: 5672
				},
			],
			logMessages: true,
			errorHandler: MyErrorHandler,
		}), */
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule { }
