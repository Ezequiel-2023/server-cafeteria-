import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from './categoria';

@Injectable()
export class CategoriaService {
    constructor(
        @InjectRepository(Categoria)
        private categoriaRepository: Repository<Categoria>
    ){

    }
    findAll():Promise<Categoria[]>{
        return this.categoriaRepository.find();
    }

    findOne(id: number): Promise<Categoria>{
        return this.categoriaRepository.findOneBy({idCategoria:id});
    }

    async create(item: Partial<Categoria>):Promise<Categoria>{
        const newItem = this.categoriaRepository.create(item);
        return await this.categoriaRepository.save(newItem);
    }
  
    async findByCategorianame(idCategoria: number): Promise<Categoria | undefined> {
        return this.categoriaRepository.findOne({ where: { idCategoria } });
    }


    async update(idCategoria: number, updateCategoriaDto: Partial<Categoria>): Promise<Categoria> {
        await this.categoriaRepository.update(idCategoria, updateCategoriaDto);
        return this.findOne(idCategoria); // Retorna el usuario actualizado
    }

 
    async remove(idCategoria: number): Promise<void> {
        await this.categoriaRepository.delete(idCategoria);
    }
}
