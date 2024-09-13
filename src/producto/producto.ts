import { Column, Decimal128, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Url } from "url";

@Entity()

export class Producto {
    @PrimaryGeneratedColumn('increment')
    idProducto: number;
    @Column()
    nombre: string;
    @Column()
    precio: number ;
    @Column()
    descripcion: string ;
    @Column()
    imagen: Url ;
    @Column()
    cantidad: number;
}
