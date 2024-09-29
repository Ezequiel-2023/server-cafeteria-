import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ventas } from './ventas';

@Injectable()
export class VentasService {
    VentasRepository: any;
    constructor(
        @InjectRepository(Ventas)
        private ventasRepository: Repository<Ventas>
    ){

    }
    findAll():Promise<Ventas[]>{
        return this.ventasRepository.find();
    }

    findOne(id: number): Promise<Ventas>{
        return this.ventasRepository.findOneBy({idVentas:id});
    }

    async create(item: Partial<Ventas>):Promise<Ventas>{
        const newItem = this.ventasRepository.create(item);
        return await this.ventasRepository.save(newItem);
    }
  
    async findByVentasname(idVentas: number): Promise<Ventas | undefined> {
        return this.ventasRepository.findOne({ where: { idVentas } });
    }


    async update(idVentas: number, updateVentasDto: Partial<Ventas>): Promise<Ventas> {
        await this.ventasRepository.update(idVentas, updateVentasDto);
        return this.findOne(idVentas); // Retorna el usuario actualizado
    }

 
    async delete(idVentas: number): Promise<void> {
        await this.VentasRepository.delete(idVentas);
    }
}
