// entyti User 
import { Entity ,Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Orden } from 'src/orden/orden';
import { Ventas } from 'src/ventas/ventas';


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    idUser: number;
    @Column()
    nombre: string;
    @Column()
    apellido: string;
    @Column()
    email: string;
    @Column()
    password: string;
    @Column()
    rol: string;  // Puede ser 'estudiante', 'empleado', 'administrador'

    @OneToMany(() => Orden, (orden) => orden.user)
  ordenes: Orden[];

  @OneToMany(() => Ventas, (ventas) => ventas.user)
  ventas: Ventas[];
}
