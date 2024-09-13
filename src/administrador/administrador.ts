import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
