import { Empleado } from "src/empleado/empleado";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Administrador {
    @PrimaryGeneratedColumn('increment')
    idAdministrador: number;
    @Column()
    nombre: string;
    @Column()
    apellido: string;
    @Column()
    email: string;
    @Column()
    telefono: number;
    @Column()
    direccion: string;
    @Column()
    codigoDeSeguridad: number;
    @Column()
    password: string;
    @OneToMany(() => Empleado, empleado => empleado.administrador)
    empleados: Empleado[];
}

