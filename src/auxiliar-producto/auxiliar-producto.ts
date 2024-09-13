import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()

export class AuxiliarProducto {
    @PrimaryGeneratedColumn('increment')
    idAuxiliar: number;
    @Column()
    cantidad: number;   
}
