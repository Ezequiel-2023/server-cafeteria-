import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Empleado {
    @PrimaryGeneratedColumn('increment')
    idEmpleado: number;
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
    rol: string
    @Column()
    password: string;
}
