import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AdministradorService } from './administrador.service';
import { Administrador } from './administrador';

@Controller('administrador')
export class AdministradorController {
    constructor(
        private readonly AdministradorService:AdministradorService
    ){}

    @Get()
    async findAll(): Promise<Administrador[]>{
        return this.AdministradorService.findAll();
    }

    @Post()
    async create(@Body() createAdministradorDto: Partial<Administrador>): Promise<Administrador>{
        return this.AdministradorService.create(createAdministradorDto);
    }

    @Put(':id')
    async update(
        @Param("id") id: number,
        @Body()updateAministradorDto: Partial<Administrador>
    ):Promise<Administrador>{
        return this.AdministradorService.update(id, updateAministradorDto);
    }

    @Delete(':id')
    async delete(
        @Param('id')id:number
    ):Promise<void>{
        return this.AdministradorService.delete(id);
    }
}
