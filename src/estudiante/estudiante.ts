import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Estudiante {
    @PrimaryGeneratedColumn('increment')
    carnet: number;
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
    password: string;
}
