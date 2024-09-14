import { Injectable } from '@nestjs/common';
import { Administrador } from './administrador';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EncryptService } from 'src/encrypt/encrypt.service';

@Injectable()
export class AdministradorService {
    constructor(
        @InjectRepository(Administrador)
        private userRepository: Repository<Administrador>,
        private readonly encryptService: EncryptService,
    ){

    }
    findAll():Promise<Administrador[]>{
        return this.userRepository.find();
    }

    findOne(idAdministrador: number): Promise<Administrador>{
        return this.userRepository.findOneBy({idAdministrador});
    }

    async create(item: Partial<Administrador>):Promise<Administrador>{
        const hashedPassword = await this.encryptService.hashPassword(item.password);
        item.password = hashedPassword;
        const newItem = this.userRepository.create(item);
        return await this.userRepository.save(newItem);
    }

    async findByUsername(nombre: string): Promise<Administrador | undefined> {
        return this.userRepository.findOne({where: {nombre}});
    }
}
