import { Controller, Get, Param, Post, Put, Patch, Delete, Body } from "@nestjs/common";
import { Producto } from "./producto";
import { ProductoService } from "./producto.service";

@Controller('producto')
export class ProductoController {
    constructor(private readonly productoService: ProductoService) { }

    @Get()
    async findAll(): Promise<Producto[]> {
        return this.productoService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Producto> {
        return this.productoService.findOne(id);
    }

    @Post()
    async create(@Body() ProductoData: Partial<Producto>): Promise<Producto> {
        return this.productoService.create(ProductoData);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() updateData: Partial<Producto>): Promise<Producto> {
        return this.productoService.update(id, updateData);
    }

    @Patch(':id')
    async partialUpdate(@Param('id') id: number, @Body() updateData: Partial<Producto>): Promise<Producto> {
        return this.productoService.update(id, updateData);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
        return this.productoService.delete(id);
    }
}
