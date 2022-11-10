import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Support } from "./support.entity";
import { SupportService } from "./support.service";

@Controller('support')
export class SupportController {

    @Get('opened')
    async getSupport() {
        return await this.supportService.getOppened();
    }

    @Get('completed')
    async getCompleted() {
        return await this.supportService.getCompleted();
    }

    @Post()
    async add(@Body() item: Support) {
        return await this.supportService.addSupport(item);
    }

    @Put('complete')
    async complete(@Body() item: Support) {
        return await this.supportService.complete(item.id);
    }

    @Put('undo')
    async undo(@Body() item: Support) {
        return await this.supportService.undo(item.id);
    }

    @Delete(':id')
    async delete(@Param('id', new ParseIntPipe()) supportId: number) {
        return await this.supportService.removeSupport(supportId);
    }

    constructor(private supportService: SupportService) {}
}