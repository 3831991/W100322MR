import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";
import { Client } from "./clients.entity";

@Injectable()
export class ClientsService {
    async getClients() {
        return await this.clientRepository.find();
    }

    async getBirthdays() {
        return (await this.clientRepository.find({ select: ['birthday'] })).map(x => x.birthday);
    }

    async getClient(id: number) {
        return await this.clientRepository.findOne({ where: { id } });
    }

    async addClient(item: Client) {
        item.id = null;
        item.birthday = item.birthday || null;
        item.time = new Date();

        return await this.clientRepository.save(item);
    }

    async updateClient(item: Client) {
        item.birthday = item.birthday || null;

        return await this.clientRepository.save(item);
    }

    async removeClient(id: number) {
        await this.clientRepository.delete(id);
    }

    constructor(@InjectRepository(Client) private clientRepository: Repository<Client>) {}
}