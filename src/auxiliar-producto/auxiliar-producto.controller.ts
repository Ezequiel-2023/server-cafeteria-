import { Controller, Body, Get,Post } from '@nestjs/common';
import { AuxiliarProducto } from './auxiliar-producto';
import { AuxiliarProductoService } from './auxiliar-producto.service';

@Controller('auxiliar-producto')
export class AuxiliarProductoController {
    constructor(
        private readonly auxiliarProductoService:AuxiliarProductoService
    ){}

    @Get()
    async findAll(): Promise<AuxiliarProducto[]>{
        return this.auxiliarProductoService.findAll();
    }

    @Post()
    async create(@Body() createAuxiliarProductoDto: Partial<AuxiliarProducto>): Promise<AuxiliarProducto>{
        return this.auxiliarProductoService.create(createAuxiliarProductoDto);
    }
}
