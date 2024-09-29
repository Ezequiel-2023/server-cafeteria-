import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { Categoria } from './categoria';
import { CategoriaService } from './categoria.service';

@Controller('categoria')
export class CategoriaController {
    constructor(private readonly categoriaService: CategoriaService) {}

     @Get()
     async findAll(): Promise<Categoria[]> {
       return this.categoriaService.findAll();
     }
   
     @Get(':id')
     async findOne(@Param('id') id: number): Promise<Categoria> {
       return this.categoriaService.findOne(id);
     }

     @Post()
     async create(@Body() CategoriaData: Partial<Categoria>): Promise<Categoria> {
       return this.categoriaService.create(CategoriaData);
     }
   
     @Put(':id')
     async update(@Param('id') id: number, @Body() updateData: Partial<Categoria>): Promise<Categoria> {
       return this.categoriaService.update(id, updateData);
     }
   
     @Patch(':id')
     async partialUpdate(@Param('id') id: number, @Body() updateData: Partial<Categoria>): Promise<Categoria> {
       return this.categoriaService.update(id, updateData);
     }
   
     @Delete(':id')
     async delete(@Param('id') id: number): Promise<void> {
        return this.categoriaService.delete(id)
     }
}
