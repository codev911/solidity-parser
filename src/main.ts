import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Solidity Parser')
    .setDescription('This is the endpoint for solidity parsing which is explored by getting the verified code.')
    .setVersion('1.0')
    .addTag('Solidity-Parser')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api-docs', app, document);

  app.useStaticAssets(join(__dirname, '/api-docs'), {
    prefix: '/api-docs',
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
