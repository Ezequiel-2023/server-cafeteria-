import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { Ventas } from './ventas';
import { VentasService } from './ventas.service';

@Controller('ventas')
export class VentasController {
    constructor(private readonly ventasService: VentasService) {}

     @Get()
     async findAll(): Promise<Ventas[]> {
       return this.ventasService.findAll();
     }
   
     @Get(':id')
     async findOne(@Param('id') id: number): Promise<Ventas> {
       return this.ventasService.findOne(id);
     }

     @Post()
     async create(@Body() VentasData: Partial<Ventas>): Promise<Ventas> {
       return this.ventasService.create(VentasData);
     }
   
     @Put(':id')
     async update(@Param('id') id: number, @Body() updateData: Partial<Ventas>): Promise<Ventas> {
       return this.ventasService.update(id, updateData);
     }
   
     @Patch(':id')
     async partialUpdate(@Param('id') id: number, @Body() updateData: Partial<Ventas>): Promise<Ventas> {
       return this.ventasService.update(id, updateData);
     }
   
     @Delete(':id')
     async delete(@Param('id') id: number): Promise<void> {
        return this.ventasService.delete(id)
     }
}
