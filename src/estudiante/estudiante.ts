import { Orden } from "src/orden/orden";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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
    @OneToMany(()=> Orden, (orden)=> orden.estudiante)
    ordenes: Orden[];
}
