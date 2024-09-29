import { Controller, Body, Get,Post, Param, Patch, Delete, Put } from '@nestjs/common';
import { AuxiliarProducto } from './auxiliar-producto';
import { AuxiliarProductoService } from './auxiliar-producto.service';

@Controller('auxiliar-producto')
export class AuxiliarProductoController {
    constructor(private readonly auxiliarProductoService: AuxiliarProductoService) {}

     @Get()
     async findAll(): Promise<AuxiliarProducto[]> {
       return this.auxiliarProductoService.findAll();
     }
   
     @Get(':id')
     async findOne(@Param('id') id: number): Promise<AuxiliarProducto> {
       return this.auxiliarProductoService.findOne(id);
     }

     @Post()
     async create(@Body() AuxiliarProductoData: Partial<AuxiliarProducto>): Promise<AuxiliarProducto> {
       return this.auxiliarProductoService.create(AuxiliarProductoData);
     }
   
     @Put(':id')
     async update(@Param('id') id: number, @Body() updateData: Partial<AuxiliarProducto>): Promise<AuxiliarProducto> {
       return this.auxiliarProductoService.update(id, updateData);
     }
   
     @Patch(':id')
     async partialUpdate(@Param('id') id: number, @Body() updateData: Partial<AuxiliarProducto>): Promise<AuxiliarProducto> {
       return this.auxiliarProductoService.update(id, updateData);
     }
   
     @Delete(':id')
     async delete(@Param('id') id: number): Promise<void> {
        return this.auxiliarProductoService.delete(id)
     }
}
