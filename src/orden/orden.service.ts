import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Orden } from './orden';
import { User } from 'src/user/user';
import { CreateOrdenDto } from './create-orden.dto'
@Injectable()
export class OrdenService {constructor(
    @InjectRepository(Orden)
    private ordenRepository: Repository<Orden>,
    @InjectRepository(User)
    private userRepository: Repository<User>
){

}
findAll():Promise<Orden[]>{
    return this.ordenRepository.find();
}

findOne(id: number): Promise<Orden>{
    return this.ordenRepository.findOneBy({numeroOrden:id});
}

// Crear una nueva orden
async create(createOrdenDto: CreateOrdenDto): Promise<Orden> {
    const { userIdUser, ...rest } = createOrdenDto;
    const user = await this.userRepository.findOne({ where: { idUser: userIdUser } });

    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    const newOrden = this.ordenRepository.create({
      ...rest,
      user,
    });

    return await this.ordenRepository.save(newOrden);
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
