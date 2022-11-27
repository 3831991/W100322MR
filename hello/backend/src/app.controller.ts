import { All, Controller, Get, Next, Session } from '@nestjs/common';
import { NextFunction } from 'express';
import { AppService } from './app.service';

export let SESSION: Record<string, any>;

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }

    @All('*')
    async proxyRequest(@Next() next: NextFunction, @Session() session: Record<string, any>) {
        SESSION = session;
        console.log(session);

        setTimeout(next, 2 * 1000);
    }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }
}
