import { Injectable } from '@nestjs/common';
import { AuxiliarProducto } from './auxiliar-producto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class AuxiliarProductoService {
    constructor(
        @InjectRepository(AuxiliarProducto)
        private auxiliarProductoRepository: Repository<AuxiliarProducto>
    ){

    }
    findAll():Promise<AuxiliarProducto[]>{
        return this.auxiliarProductoRepository.find();
    }

    findOne(id: number): Promise<AuxiliarProducto>{
        return this.auxiliarProductoRepository.findOneBy({idAuxiliar:id});
    }

    async create(item: Partial<AuxiliarProducto>):Promise<AuxiliarProducto>{
        const newItem = this.auxiliarProductoRepository.create(item);
        return await this.auxiliarProductoRepository.save(newItem);
    }
  
    async findByAuxiliarProductoname(idAuxiliar: number): Promise<AuxiliarProducto | undefined> {
        return this.auxiliarProductoRepository.findOne({ where: { idAuxiliar } });
    }


    async update(idAuxiliarProducto: number, updateAuxiliarProductoDto: Partial<AuxiliarProducto>): Promise<AuxiliarProducto> {
        await this.auxiliarProductoRepository.update(idAuxiliarProducto, updateAuxiliarProductoDto);
        return this.findOne(idAuxiliarProducto); // Retorna el usuario actualizado
    }

 
    async delete(idAuxiliarProducto: number): Promise<void> {
        await this.auxiliarProductoRepository.delete(idAuxiliarProducto);
    }

}
