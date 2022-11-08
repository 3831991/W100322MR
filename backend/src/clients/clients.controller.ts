import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Client } from "./clients.entity";
import { ClientsService } from "./clients.service";

@Controller('clients')
export class ClientsController {

    @Get()
    async clients() {
        return await this.clientsService.getClients();
    }

    @Get('birthdays')
    async birthdays() {
        return await this.clientsService.getBirthdays();
    }

    @Get(':id')
    async client(@Param('id', new ParseIntPipe()) clientId: number) {
        return await this.clientsService.getClient(clientId);
    }

    @Post()
    async add(@Body() item: Client) {
        return await this.clientsService.addClient(item);
    }

    @Put()
    async update(@Body() item: Client) {
        return await this.clientsService.updateClient(item);
    }

    @Delete(':id')
    async delete(@Param('id', new ParseIntPipe()) clientId: number) {
        return await this.clientsService.removeClient(clientId);
    }

    constructor(private clientsService: ClientsService) {}
}