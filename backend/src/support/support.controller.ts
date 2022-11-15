import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { AuthGuard } from "../auth.guard";
import { Support } from "./support.entity";
import { SupportService } from "./support.service";

@Controller('support')
export class SupportController {

    @Get('opened')
    @UseGuards(new AuthGuard())
    async getSupport() {
        return await this.supportService.getOppened();
    }

    @Get('completed')
    @UseGuards(new AuthGuard())
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