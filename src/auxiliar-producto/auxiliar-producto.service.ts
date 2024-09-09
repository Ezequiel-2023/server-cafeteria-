import { Injectable } from '@nestjs/common';
import { AuxiliarProducto } from './auxiliar-producto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class AuxiliarProductoService {
    constructor(
        @InjectRepository(AuxiliarProducto)
        private AuxiliarProductoRepository: Repository<AuxiliarProducto>
    ){

    }
    findAll():Promise<AuxiliarProducto[]>{
        return this.AuxiliarProductoRepository.find();
    }

    findOne(id: number): Promise<AuxiliarProducto>{
        return this.AuxiliarProductoRepository.findOneBy({idAuxiliar:id});
    }

    async create(item: Partial<AuxiliarProducto>):Promise<AuxiliarProducto>{
        const newItem = this.AuxiliarProductoRepository.create(item);
        return await this.AuxiliarProductoRepository.save(newItem);
    }
}
