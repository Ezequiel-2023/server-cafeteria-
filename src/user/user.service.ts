import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user';
import { Repository } from 'typeorm';
import { EncryptService } from 'src/encrypt/encrypt.service';

@Injectable()
export class UserService {
    private readonly user = []
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private readonly encryptService: EncryptService,
    ) {}

    // Listar todos los usuarios
    findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    // Encontrar un usuario por ID
    findOne(idUser: number): Promise<User> {
        return this.userRepository.findOneBy({ idUser });
    }

    // Crear un nuevo usuario
    async create(item: Partial<User>):Promise<User>{
        const hashedPassword = await this.encryptService.hashPassword(item.password);
        item.password = hashedPassword;
        const newItem = this.userRepository.create(item);
        return await this.userRepository.save(newItem);
    }

    // Encontrar un usuario por nombre
    async findByUsername(nombre: string): Promise<User | undefined> {
        return this.userRepository.findOne({ where: { nombre } });
    }
    //buscar tanto por correo como por un ID o username para empleados y administradores.
    async findByUsernameOrEmail(identifier: any): Promise<User> {
    return await this.userRepository.findOne({
      where: [
        { email: identifier },
        { idUser: identifier },  
            ],
        });
    }
  

    // Actualizar un usuario
    async update(idUser: number, updateUserDto: Partial<User>): Promise<User> {
        await this.userRepository.update(idUser, updateUserDto);
        return this.findOne(idUser); // Retorna el usuario actualizado
    }

    // Eliminar un usuario
    async delete(idUser: number): Promise<void> {
        await this.userRepository.delete(idUser);
    }
}
