import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Producto {
    @PrimaryGeneratedColumn('increment')
    idProducto: number;
    @Column({unique:true})
    nombre: string;
    @Column()
    categoria: string ;
    @Column()
    precio: number ;
}
