import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Support } from "./support.entity";

@Injectable()
export class SupportService {
    
    async getOppened() {
        return await this.rep.find({ where: { isDone: false } });
    }

    async getCompleted() {
        return await this.rep.find({ where: { isDone: true } });
    }

    async addSupport(item: Support) {
        item.id = null;
        item.time = new Date();

        await this.rep.save(item);
    }

    async complete(id: number) {
        const support = await this.rep.findOne({ where: { id } });

        if (support) {
            support.isDone = true;
            await this.rep.save(support);
        }
    }

    async undo(id: number) {
        const support = await this.rep.findOne({ where: { id } });

        if (support) {
            support.isDone = false;
            await this.rep.save(support);
        }
    }

    async removeSupport(id: number) {
        await this.rep.delete(id);
    }

    constructor(@InjectRepository(Support) private rep: Repository<Support>) {}
}