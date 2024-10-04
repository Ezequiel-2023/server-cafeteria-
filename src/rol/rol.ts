import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { User } from '../user/user';

@Entity()
export class Rol {
  @PrimaryGeneratedColumn()
  idRol: number;

  @Column()
  nombre: string;  // Puede ser 'estudiante', 'empleado', 'administrador'

  @OneToMany(() => User, (user) => user.rol)
  users: User[];
}
