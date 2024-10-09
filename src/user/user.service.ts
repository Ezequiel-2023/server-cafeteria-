// user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user';
import { Repository } from 'typeorm';
import { EncryptService } from 'src/encrypt/encrypt.service';
import { Rol } from 'src/rol/rol';
import { CreateUserDto } from './create-user.dto'; 

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private readonly encryptService: EncryptService,
        @InjectRepository(Rol)
        private readonly rolRepository: Repository<Rol>,
    ) {}

    // Obtener rol por ID
    async findRolById(id: number): Promise<Rol> {
        return this.rolRepository.findOne({ where: { idRol: id } });
    }

    // Listar todos los usuarios
    findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    // Encontrar un usuario por ID
    findOne(idUser: number): Promise<User> {
        return this.userRepository.findOneBy({ idUser });
    }

    // Crear un nuevo usuario
    async create(createUserDto: CreateUserDto): Promise<User> {
        const { nombre, apellido, email, password, rol_id } = createUserDto;
        const hashedPassword = await this.encryptService.hashPassword(password);

        const rol = await this.rolRepository.findOne({ where: { idRol: rol_id } });
        if (!rol) {
            throw new Error('Rol no encontrado');
        }

        const newUser = this.userRepository.create({ nombre, apellido, email, password: hashedPassword, rol });
        return await this.userRepository.save(newUser);
    }

    // Encontrar un usuario por nombre
    async findByUsername(nombre: string): Promise<User | undefined> {
        return this.userRepository.findOne({ where: { nombre } });
    }

    // Buscar tanto por correo como por un ID o username para empleados y administradores.
    async findByUsernameOrEmail(identifier: any): Promise<User> {
        console.log('Buscando usuario con identifier:', identifier);
        const user = await this.userRepository.findOne({
            where: [
                { email: identifier },
                { idUser: identifier },
            ],
            relations: ['rol'],
        });
       // console.log('Usuario encontrado:', user);
        return user;
    }
    

    // Actualizar un usuario
    async update(idUser: number, updateUserDto: Partial<User>): Promise<User> {
        await this.userRepository.update(idUser, updateUserDto);
        return this.findOne(idUser);
    }

    // Eliminar un usuario
    async delete(idUser: number): Promise<void> {
        await this.userRepository.delete(idUser);
    }
}

