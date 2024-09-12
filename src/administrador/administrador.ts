import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Administrador {
    @PrimaryGeneratedColumn('increment')
    idAdministrador: number;
    @Column({unique:true})
    nombre: string;
}
