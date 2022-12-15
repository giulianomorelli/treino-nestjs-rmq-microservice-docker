import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

(async () => {
  const app = await NestFactory.create(AppModule);

  app.use((req: Request, _res: Response, next) => {
    console.log("app.use in API:", req.url);
    next();
  });
	
  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls:["amqp://guest:guest@rabbitmq:5672"],
      queue: 'test',
    },
  });

  await app.startAllMicroservices();/* 

  try {
    app.connectMicroservice({
      urls:["amqp://guest:guest@rabbitmq:5672"],
      queue: 'test',
    });
  } catch (error) {
    console.log("ÇOUAIFHjshdkajhdkaHKAJDHKJh ", error)
  } */

  await app.listen(
    3000,
    "0.0.0.0",
    async () => {
      console.log(
        "api in",
        await app.getUrl()
      );
    }
  );
})();
