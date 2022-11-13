import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./login.entity";
import { Register } from "./login.interface";

@Injectable()
export class LoginService {
    async register(item: Register) {
        const obj = this.rep.create(item);

        return await this.rep.save(obj);
    }

    async login(email: string, password: string) {
        const user = await this.rep.findOne({ where: { email } });

        if (!user) {
            throw new HttpException("שם משתמש או סיסמה שגויים", HttpStatus.BAD_REQUEST);
        }

        if (!(await user.comparePassword(password))) {
            throw new HttpException("שם משתמש או סיסמה שגויים", HttpStatus.BAD_REQUEST);
        }

        return user;
    }

    constructor(@InjectRepository(User) private rep: Repository<User>) {}
}