import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { RolService } from './rol.service';
import { Rol } from './rol';

@Controller('rol')
export class RolController {
    constructor(private readonly rolService:RolService) { }

    @Get()
    async findAll(): Promise<Rol[]> {
        return this.rolService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Rol> {
        return this.rolService.findOne(id);
    }

    @Post()
    async create(@Body() RolData: Partial<Rol>): Promise<Rol> {
        return this.rolService.create(RolData);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() updateData: Partial<Rol>): Promise<Rol> {
        return this.rolService.update(id, updateData);
    }

    @Patch(':id')
    async partialUpdate(@Param('id') id: number, @Body() updateData: Partial<Rol>): Promise<Rol> {
        return this.rolService.update(id, updateData);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
        return this.rolService.delete(id);
    }
}
