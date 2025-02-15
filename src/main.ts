import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
config();

async function bootstrap() {
    const app = await NestFactory.create(AppModule, { cors: true });

    const config = new DocumentBuilder()
    .setTitle('highthon-6 back-end api')
    .setDescription('An api')
    .setVersion('6.0')
    .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);

    const port = process.env.SERVER_PORT ?? 3000
    await app.listen(port).then(() => {
        console.log(`http://localhost:${port}`)
    }).catch(() => {
        console.log('An error has occurred while trying to process this task.')
    });
}
bootstrap();
