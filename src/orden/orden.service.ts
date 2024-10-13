
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Orden } from './orden';

@Injectable()
export class OrdenService {constructor(
    @InjectRepository(Orden)
    private ordenRepository: Repository<Orden>
){

}
findAll():Promise<Orden[]>{
    return this.ordenRepository.find();
}

findOne(id: number): Promise<Orden>{
    return this.ordenRepository.findOneBy({numeroOrden:id});
}

async create(item: Partial<Orden>):Promise<Orden>{
    const newItem = this.ordenRepository.create(item);
    return await this.ordenRepository.save(newItem);
}

async findByOrdenname(numeroOrden: number): Promise<Orden | undefined> {
    return this.ordenRepository.findOne({ where: { numeroOrden } });
}


async update(idOrden: number, updateOrdenDto: Partial<Orden>): Promise<Orden> {
    await this.ordenRepository.update(idOrden, updateOrdenDto);
    return this.findOne(idOrden); // Retorna el usuario actualizado
}


async delete(idOrden: number): Promise<void> {
    await this.ordenRepository.delete(idOrden);
}
}
