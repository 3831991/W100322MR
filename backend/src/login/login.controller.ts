import { Body, Controller, Get, Post } from "@nestjs/common";
import { SESSION } from "../app.controller";
import { AppService } from "../app.service";
import { Register } from "./login.interface";
import { LoginService } from "./login.service";

@Controller()
export class LoginController {
    @Get('login-status')
    async status() {
        if (SESSION.user) {
            return {
                status: 'loggedin',
                user: SESSION.user,
            };
        } else {
            return {
                status: 'error',
                message: 'המשתמש לא מחובר',
            };
        }
    }

    @Post('login')
    async login(@Body() item: { email: string; password: string }) {
        return await this.loginService.login(item.email, item.password);
    }

    @Post('register')
    async register(@Body() item: Register) {
        return await this.loginService.register(item);
    }

    constructor(private loginService: LoginService, private appService: AppService) {}
}