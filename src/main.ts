import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = new ConfigService();
  // const configService = app.get(ConfigService);

  // ...

  const swaggerConfig = new DocumentBuilder()
    .setTitle('API with NestJS')
    .setDescription('Api My Project')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/docs', app, document);

  const port = configService.get('PORT') ?? 3000;

  await app.listen(port);
}
bootstrap();
