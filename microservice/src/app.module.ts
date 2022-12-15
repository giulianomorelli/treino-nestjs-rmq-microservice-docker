import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
/* import { RMQModule } from 'nestjs-rmq';
import { AppMiddleware1, AppMiddleware2 } from './app.middleware';
import { AppIntercepter } from './app.intercepter'; */

@Module({
	imports: [/* 
		RMQModule.forRoot({
			exchangeName: 'test',
			serviceName: 'myMicroservice',
			connections: [
				{
					login: 'guest',
					password: 'guest',
					host: 'integration',
					port: 5672
				},
			],
			logMessages: true,
			prefetchCount: 32,
			queueName: 'test',
			middleware: [AppMiddleware1, AppMiddleware2],
			intercepters: [AppIntercepter],
		}), */
	],
	controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
