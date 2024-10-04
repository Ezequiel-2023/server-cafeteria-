// entyti User 
import { Entity ,Column, OneToMany, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Orden } from 'src/orden/orden';
import { Ventas } from 'src/ventas/ventas';
import { Rol } from "src/rol/rol";


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

    @ManyToOne(() => Rol, rol => rol.users)
    @JoinColumn({ name: 'rol_id' })
rol: Rol;

  @OneToMany(() => Orden, (orden) => orden.user)
  ordenes: Orden[];

  @OneToMany(() => Ventas, (ventas) => ventas.user)
  ventas: Ventas[];
}
