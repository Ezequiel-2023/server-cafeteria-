import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Estudiante {
    @PrimaryGeneratedColumn('increment')
    carnet: number;
    @Column({unique:true})
    nombre: string;
    @Column()
    apellido: string;
    @Column()
    email: string;
}
