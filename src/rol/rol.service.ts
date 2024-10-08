//rol service
import { Injectable } from '@nestjs/common';
import { Rol } from './rol';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RolService {
    constructor(
        @InjectRepository(Rol)
        private rolRepository: Repository<Rol>
    ){

    }
    findAll():Promise<Rol[]>{
        return this.rolRepository.find();
    }

    findOne(id: number): Promise<Rol>{
        return this.rolRepository.findOneBy({idRol:id});
    }

    async create(item: Partial<Rol>):Promise<Rol>{
        const newItem = this.rolRepository.create(item);
        return await this.rolRepository.save(newItem);
    }
  
    async findByRolname(idRol: number): Promise<Rol | undefined> {
        return this.rolRepository.findOne({ where: { idRol } });
    }


    async update(idRol: number, updateRolDto: Partial<Rol>): Promise<Rol> {
        await this.rolRepository.update(idRol, updateRolDto);
        return this.findOne(idRol); // Retorna el usuario actualizado
    }

 
    async delete(idRol: number): Promise<void> {
        await this.rolRepository.delete(idRol);
    }
}
