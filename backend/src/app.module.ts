import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsController } from './clients/clients.controller';
import { ClientsService } from './clients/clients.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './clients/clients.entity';
import { SupportController } from './support/support.controller';
import { SupportService } from './support/support.service';
import { Support } from './support/support.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '',
            database: 'full_stack_w100322er',
            entities: [
                __dirname + '/**/*.entity{.ts,.js}',
            ],
            synchronize: true,
            logging: true,
        }),
        TypeOrmModule.forFeature([Client, Support])
    ],
    controllers: [
        AppController,
        ClientsController,
        SupportController,
    ],
    providers: [
        AppService,
        ClientsService,
        SupportService,
    ],
})
export class AppModule { }
