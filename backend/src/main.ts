import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.enableCors({
        origin: 'http://localhost:4200',
        methods: 'GET,PUT,POST,DELETE,OPTIONS',
        credentials: true,
        allowedHeaders: 'Content-Type, Accept',
    });

    app.use(
        session({
            secret: 'my-secret',
            name: 'mySession',
            resave: false,
            saveUninitialized: false,
        }),
    );

    await app.listen(3000);
}
bootstrap();
