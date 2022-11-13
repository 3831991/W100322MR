import { Body, Controller, Post, Session } from "@nestjs/common";
import { Register } from "./login.interface";
import { LoginService } from "./login.service";

@Controller()
export class LoginController {
    @Post('login')
    async login(@Body() item: { email: string; password: string }) {
        return await this.loginService.login(item.email, item.password);
    }

    @Post('register')
    async register(@Body() item: Register) {
        return await this.loginService.register(item);
    }

    constructor(private loginService: LoginService) {}
}