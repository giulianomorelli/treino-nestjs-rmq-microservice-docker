//import { INestMicroservice } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

(async () => {
  /* const app: INestMicroservice =  */(await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
				urls:["amqp://guest:guest@rabbitmq:5672"],
      }
    },
  )).listen();

	/* const app2 = await NestFactory.create(AppModule);

  app.use((req: Request, _res: Response, next) => {
    console.log("app.use in microservice:", req.url);
    next();
  });

  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      host: "microservice",
      port: 5672,
			// queue: 'test',
			// queueOptions: {
			// 	durable: false
			// },
    },
  });

	console.log("before listen in microservice");

	await app.listen(
		3001,
	"localhost",
		async () => {
    	console.log(
				"microservice in",
				await app.getUrl()
			);
		}
	); */
})();
