import { Body, Controller, Get, Post } from '@nestjs/common';
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
}
