import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { Orden } from './orden';
import { OrdenService } from './orden.service';
@Controller('orden')
export class OrdenController {
    constructor(private readonly OrdenService: OrdenService) {}

     @Get()
     async findAll(): Promise<Orden[]> {
       return this.OrdenService.findAll();
     }
   
     @Get(':id')
     async findOne(@Param('id') id: number): Promise<Orden> {
       return this.OrdenService.findOne(id);
     }

     @Post()
     async create(@Body() OrdenData: Partial<Orden>): Promise<Orden> {
       return this.OrdenService.create(OrdenData);
     }
   
     @Put(':id')
     async update(@Param('id') id: number, @Body() updateData: Partial<Orden>): Promise<Orden> {
       return this.OrdenService.update(id, updateData);
     }
   
     @Patch(':id')
     async partialUpdate(@Param('id') id: number, @Body() updateData: Partial<Orden>): Promise<Orden> {
       return this.OrdenService.update(id, updateData);
     }
   
     @Delete(':id')
     async delete(@Param('id') id: number): Promise<void> {
        return this.OrdenService.delete(id)
     }
}
