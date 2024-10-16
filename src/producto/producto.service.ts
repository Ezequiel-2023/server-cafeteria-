import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './producto';
@Injectable()
export class ProductoService {
    constructor(
        @InjectRepository(Producto)
        private productoRepository: Repository<Producto>
    ){

    }
    findAll():Promise<Producto[]>{
        return this.productoRepository.find({relations: ['categoria'],});
    }

    findOne(id: number): Promise<Producto>{
        return this.productoRepository.findOneBy({idProducto:id});
    }

    async findByCategoria(idCategoria: number): Promise<Producto[]> {
        return this.productoRepository.find({
            where: { categoria: { idCategoria } }, // Filtra por la entidad Categoria
            relations: ['categoria'], // Carga la relación de categoria si es necesario
        });
    }

    async create(item: Partial<Producto>):Promise<Producto>{
        const newItem = this.productoRepository.create(item);
        return await this.productoRepository.save(newItem);
    }
  
    async findByProductoname(idProducto: number): Promise<Producto | undefined> {
        return this.productoRepository.findOne({ where: { idProducto } });
    }


    async update(idProducto: number, updateProductoDto: Partial<Producto>): Promise<Producto> {
        await this.productoRepository.update(idProducto, updateProductoDto);
        return this.findOne(idProducto); // Retorna el usuario actualizado
    }
 
    async delete(idProducto: number): Promise<void> {
        await this.productoRepository.delete(idProducto);
    }
}
