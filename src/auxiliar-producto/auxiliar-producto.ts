import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export class AuxiliarProducto {
    @PrimaryGeneratedColumn('increment')
    idAuxiliar: number;
    @Column({unique:true})
    idProducto: number;
    @Column()
    noOrden: number;
}
